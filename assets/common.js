/* ============================================================
   Ambiente de Conformidade — utilidades compartilhadas
   (usado por index.html, painel.html, reunioes.html, contatos.html)
   ============================================================ */

/* ---------- básicos ---------- */
function esc(s){ s=(s===undefined||s===null)?"":String(s); return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
function uid(){ return 'x'+Math.random().toString(36).slice(2,10); }
var MONTHS = {jan:0,fev:1,mar:2,abr:3,mai:4,jun:5,jul:6,ago:7,set:8,out:9,nov:10,dez:11};
var MONTHS_SHORT = ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"];
function parseDateBR(str){
  if(!str) return null;
  var m = String(str).trim().toLowerCase().match(/^(\d{1,2})-([a-zç]{3})-(\d{2})$/i);
  if(!m) return null;
  var mo = MONTHS[m[2]]; if(mo===undefined) return null;
  return new Date(2000+parseInt(m[3],10), mo, parseInt(m[1],10));
}
function parseISODate(iso){ if(!iso) return null; var p=iso.split('-'); if(p.length!==3) return null; return new Date(parseInt(p[0],10), parseInt(p[1],10)-1, parseInt(p[2],10)); }
var TODAY = new Date(2026,7,28); // referência do sistema: 28-ago-26
function fmtDateShort(d){ return d.toLocaleDateString('pt-BR'); }

/* ---------- status → tag ---------- */
function statusTagClass(s){ s=(s||'').toUpperCase();
  if(s.indexOf('CONCLU')>=0) return 'tag-good';
  if(s.indexOf('ANDAMENTO')>=0) return 'tag-accent';
  if(s.indexOf('CANCEL')>=0) return 'tag-neutral';
  if(s.indexOf('ATRAS')>=0) return 'tag-bad';
  return 'tag-neutral';
}
function prazoTagClass(s){ s=(s||'').toUpperCase();
  if(s.indexOf('ATRAS')>=0) return 'tag-bad';
  if(s.indexOf('PRAZO')>=0) return 'tag-good';
  return 'tag-neutral';
}
var STATUS_OPTS = ["A INICIAR","EM ANDAMENTO","CONCLUÍDA","ATRASADA","CANCELADA"];
var SPRAZO_OPTS = ["NO PRAZO","ATRASADA","-"];

/* ---------- modelo de dados (itens/sub-itens) ---------- */
var FIELD_KEYS = ["numero","nome","responsavel","recursos","ppIni","ppFim","prIni","prFim","atraso","indicador","qtd","status","statusPrazo","obs","driveLink"];
function fieldsFromRow(r){
  r = r||[]; var o={};
  for(var i=0;i<FIELD_KEYS.length;i++){ o[FIELD_KEYS[i]] = r[i] || ""; }
  if(!o.status) o.status = "A INICIAR";
  if(!o.statusPrazo) o.statusPrazo = "-";
  return o;
}
function normItemEntry(it){ if(Array.isArray(it)) return {row:it, sub:[]}; return {row: it.row||[], sub: it.sub||[]}; }

function buildLiveSheet(seed){
  var live = { title: seed.title, nucleos: [] };
  seed.nucleos.forEach(function(nu){
    var liveNu = { id:uid(), nome:nu.nome||"", responsavel:nu.responsavel||"", data:nu.data||"", collapsed:false, acoes:[] };
    (nu.acoes||[]).forEach(function(ac){
      var liveAc = { id:uid(), fields:fieldsFromRow(ac.row), itens:[] };
      (ac.itens||[]).forEach(function(itRaw){
        var ent = normItemEntry(itRaw);
        var liveIt = { id:uid(), fields:fieldsFromRow(ent.row), sub:[] };
        ent.sub.forEach(function(sRaw){ liveIt.sub.push({ id:uid(), fields:fieldsFromRow(sRaw) }); });
        liveAc.itens.push(liveIt);
      });
      liveNu.acoes.push(liveAc);
    });
    live.nucleos.push(liveNu);
  });
  return live;
}

/* ---------- persistência local (edição fica no navegador; publicar = exportar JSON e commitar) ---------- */
var STORAGE_KEY = "ac_data_v1";
function loadData(){
  try{
    var raw = localStorage.getItem(STORAGE_KEY);
    if(raw){ return JSON.parse(raw); }
  }catch(e){}
  return { interno: buildLiveSheet(SEED_INTERNO), producao: buildLiveSheet(SEED_PRODUCAO) };
}
var DATA = loadData();
var saveTimer=null;
function scheduleSave(){
  clearTimeout(saveTimer);
  saveTimer = setTimeout(function(){
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(DATA)); showToast("Alterações salvas neste navegador."); }
    catch(e){ showToast("Falha ao salvar localmente."); }
  }, 450);
}
function resetData(){
  if(!confirm("Isso apaga as edições feitas neste navegador e restaura os dados publicados. Continuar?")) return;
  DATA = { interno: buildLiveSheet(SEED_INTERNO), producao: buildLiveSheet(SEED_PRODUCAO) };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(DATA));
  location.reload();
}
function downloadBlob(filename, content, type){
  var blob = new Blob([content], {type:type||'application/octet-stream'});
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a'); a.href=url; a.download=filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(function(){URL.revokeObjectURL(url);}, 2000);
}
function exportDataJson(){
  downloadBlob('ac_dados_'+new Date().toISOString().slice(0,10)+'.json', JSON.stringify(DATA,null,2), 'application/json');
  showToast('Backup exportado. Para publicar, substitua assets/data*.js ou peça para regenerar o site.');
}

/* ---------- autenticação (barreira simples — NÃO é segurança real: qualquer
   pessoa com acesso ao repositório vê este arquivo. Serve apenas para
   separar quem edita de quem só visualiza dentro do time.) ---------- */
var AUTH_STORAGE = "ac_auth_v1";
var AUTH_CONFIG = { e: "YWRtaW5Ac2VhaWVlLnBlLmdvdi5icg==", p: "U2VhaWVlQDIwMjYh" }; // base64, ver README
function checkLogin(email, pass){ try{ return btoa(email)===AUTH_CONFIG.e && btoa(pass)===AUTH_CONFIG.p; }catch(e){ return false; } }
function isAuthed(){ return localStorage.getItem(AUTH_STORAGE)==='1'; }
function doLogin(email, pass){ if(checkLogin(email,pass)){ localStorage.setItem(AUTH_STORAGE,'1'); localStorage.setItem(AUTH_STORAGE+'_user', email); return true; } return false; }
function doLogout(){ localStorage.removeItem(AUTH_STORAGE); localStorage.removeItem(AUTH_STORAGE+'_user'); location.href = 'index.html'; }

/* ---------- coleta / agregações ---------- */
function collectRows(sheetKey){
  var rows=[]; var sh=DATA[sheetKey]; if(!sh) return rows;
  sh.nucleos.forEach(function(nu,ni){
    nu.acoes.forEach(function(ac,ai){
      ac.itens.forEach(function(it,ii){
        rows.push({sheetKey:sheetKey,ni:ni,ai:ai,ii:ii,si:-1,f:it.fields,nucleoNome:nu.nome,acaoNome:ac.fields.nome});
        it.sub.forEach(function(su,si){ rows.push({sheetKey:sheetKey,ni:ni,ai:ai,ii:ii,si:si,f:su.fields,nucleoNome:nu.nome,acaoNome:ac.fields.nome}); });
      });
    });
  });
  return rows;
}
function collectAllRows(){ return collectRows('interno').concat(collectRows('producao')); }
function computeKpis(rows){
  var k={total:rows.length,done:0,progress:0,todo:0,late:0,cancel:0};
  rows.forEach(function(r){
    var s=(r.f.status||'').toUpperCase();
    if(s.indexOf('CONCLU')>=0) k.done++;
    else if(s.indexOf('ANDAMENTO')>=0) k.progress++;
    else if(s.indexOf('CANCEL')>=0) k.cancel++;
    else k.todo++;
    if((r.f.statusPrazo||'').toUpperCase().indexOf('ATRAS')>=0) k.late++;
  });
  return k;
}
function computeByResponsavel(rows){
  var map={};
  rows.forEach(function(r){ String(r.f.responsavel||"").split(/[\/,;]/).forEach(function(p){ p=p.trim(); if(!p||p==='-'||p==='...'||p==='?') return; map[p]=(map[p]||0)+1; }); });
  return Object.keys(map).map(function(k){return {nome:k,n:map[k]};}).sort(function(a,b){return b.n-a.n;});
}
function computeByNucleo(sheetKey){
  var out=[]; var sh=DATA[sheetKey]; if(!sh) return out;
  sh.nucleos.forEach(function(nu){
    var total=0,done=0;
    nu.acoes.forEach(function(ac){ ac.itens.forEach(function(it){
      total++; if((it.fields.status||'').toUpperCase().indexOf('CONCLU')>=0) done++;
      it.sub.forEach(function(su){ total++; if((su.fields.status||'').toUpperCase().indexOf('CONCLU')>=0) done++; });
    }); });
    out.push({nome:nu.nome||'(sem nome)', total:total, done:done, pct: total?Math.round(done/total*100):0});
  });
  return out;
}
function computeAttentionList(rows){
  var out=[];
  rows.forEach(function(r){
    var s=(r.f.status||'').toUpperCase();
    if(s.indexOf('CONCLU')>=0 || s.indexOf('CANCEL')>=0) return;
    var explicit = (r.f.statusPrazo||'').toUpperCase().indexOf('ATRAS')>=0;
    var d = parseDateBR(r.f.ppFim);
    var autoLate = d && d < TODAY;
    if(explicit || autoLate) out.push({r:r, motivo: explicit ? 'Marcado como atrasado' : ('Prazo previsto expirado em '+fmtDateShort(d))});
  });
  return out;
}
function donutSvg(k, size){
  size = size||140;
  var total = (k.done+k.progress+k.todo)>0 ? (k.done+k.progress+k.todo) : 1;
  var parts=[{n:k.done,c:'#3f7a4e'},{n:k.progress,c:'#5980a6'},{n:k.todo,c:'#b7b7ba'}];
  var R=size*0.37,C=2*Math.PI*R,offset=0,segs='',cx=size/2,cy=size/2;
  parts.forEach(function(p){ var frac=total?p.n/total:0; var len=frac*C;
    segs += '<circle cx="'+cx+'" cy="'+cy+'" r="'+R+'" fill="none" stroke="'+p.c+'" stroke-width="'+(size*0.14)+'" stroke-dasharray="'+len+' '+(C-len)+'" stroke-dashoffset="'+(-offset)+'" transform="rotate(-90 '+cx+' '+cy+')"></circle>';
    offset+=len; });
  return '<svg width="'+size+'" height="'+size+'" viewBox="0 0 '+size+' '+size+'">'+segs
    + '<circle cx="'+cx+'" cy="'+cy+'" r="'+(R*0.62)+'" fill="var(--color-bg)"></circle>'
    + '<text x="'+cx+'" y="'+(cy-2)+'" text-anchor="middle" font-size="'+(size*0.16)+'" font-family="Barlow Condensed" font-weight="700" fill="var(--color-text)">'+k.total+'</text>'
    + '<text x="'+cx+'" y="'+(cy+size*0.11)+'" text-anchor="middle" font-size="'+(size*0.07)+'" fill="var(--color-neutral-700)">atividades</text>'
    + '</svg>';
}

/* ---------- toast ---------- */
function showToast(msg){
  var t = document.getElementById('toast'); if(!t) return;
  t.textContent = msg; t.classList.add('show');
  clearTimeout(t._h); t._h = setTimeout(function(){ t.classList.remove('show'); }, 2200);
}

/* ---------- reuniões / contatos (localStorage, exportáveis) ---------- */
function loadMeetings(){
  try{ var raw = localStorage.getItem('ac_meetings_v1'); if(raw) return JSON.parse(raw); }catch(e){}
  return SEED_MEETINGS.map(function(r){ return {id:r[0],titulo:r[1],data:r[2],hora:r[3],nucleo:r[4],local:r[5],participantes:r[6],status:r[7],obs:r[8]}; });
}
function saveMeetings(list){ localStorage.setItem('ac_meetings_v1', JSON.stringify(list)); }
function loadContacts(){
  try{ var raw = localStorage.getItem('ac_contacts_v1'); if(raw) return JSON.parse(raw); }catch(e){}
  return SEED_CONTACTS.map(function(r){ return {id:r[0],nome:r[1],organizacao:r[2],cargo:r[3],email:r[4],telefone:r[5],categoria:r[6],obs:r[7]}; });
}
function saveContacts(list){ localStorage.setItem('ac_contacts_v1', JSON.stringify(list)); }

/* ---------- shell: navbar + footer (injetados via JS para reuso entre páginas) ---------- */
function renderNav(activePage){
  var el = document.getElementById('site-nav'); if(!el) return;
  var authed = isAuthed();
  var items = [
    {href:'index.html#painel-geral', key:'index', label:'Início'},
    {href:'painel.html', key:'painel', label:'Painel'},
    {href:'reunioes.html', key:'reunioes', label:'Reuniões', lock:true},
    {href:'contatos.html', key:'contatos', label:'Contatos', lock:true}
  ];
  var links = items.map(function(it){
    var lockIco = it.lock ? '<span class="lock-ico">'+(authed?'🔓':'🔒')+'</span>' : '';
    return '<a class="navlink'+(activePage===it.key?' active':'')+'" href="'+it.href+'">'+esc(it.label)+lockIco+'</a>';
  }).join('');
  var loginBtn = authed
    ? '<button class="btn btn-secondary small" id="navLogoutBtn">Sair ('+esc((localStorage.getItem(AUTH_STORAGE+'_user')||'').split('@')[0])+')</button>'
    : '<a class="btn btn-primary small" href="index.html#login">Entrar</a>';
  el.innerHTML = ''
    + '<a class="nav-brand" href="index.html">'
    +   '<img src="assets/logo-pe.png" alt="Governo de Pernambuco" onerror="this.style.display=\'none\'">'
    +   '<span><span class="t1">Ambiente de Conformidade</span><br><span class="t2">SEAIEE · SDEC-PE</span></span>'
    + '</a>'
    + '<nav style="display:flex;align-items:center;gap:var(--space-6);">'+links+loginBtn+'</nav>';
  var lo = document.getElementById('navLogoutBtn'); if(lo) lo.onclick = doLogout;
}
function renderFooter(){
  var el = document.getElementById('site-foot'); if(!el) return;
  var d = new Date(META.lastUpdated);
  el.innerHTML = '<div class="wrap">'
    + '<span>AMBIENTE DE CONFORMIDADE — SEAIEE / Secretaria de Desenvolvimento Econômico de Pernambuco</span>'
    + '<span>Última atualização: '+esc(d.toLocaleDateString('pt-BR'))+' às '+esc(d.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}))+'</span>'
    + '</div>';
}
function lockGate(containerId, onUnlocked){
  var el = document.getElementById(containerId);
  if(isAuthed()){ if(onUnlocked) onUnlocked(); return; }
  el.innerHTML = ''
    + '<div class="locked-wrap card elev-md" style="padding:var(--space-6);">'
    + '<span class="locked-badge">🔒 Acesso restrito</span>'
    + '<h3 style="margin-top:0;">Entrar para continuar</h3>'
    + '<p class="text-muted" style="font-size:13px;">Esta área é de uso interno da equipe. Faça login com sua conta institucional.</p>'
    + '<div class="field" style="margin-bottom:var(--space-3);"><label>E-mail institucional</label><input class="input" id="gateEmail" type="email" placeholder="nome@seaiee.pe.gov.br"></div>'
    + '<div class="field" style="margin-bottom:var(--space-3);"><label>Senha</label><input class="input" id="gatePass" type="password" placeholder="••••••••"></div>'
    + '<button class="btn btn-primary btn-block" id="gateBtn">Acessar</button>'
    + '<p class="text-muted" id="gateErr" style="font-size:12px;color:var(--color-bad);display:none;margin-top:var(--space-3);">E-mail ou senha inválidos.</p>'
    + '</div>';
  document.getElementById('gateBtn').onclick = function(){
    var email = document.getElementById('gateEmail').value.trim();
    var pass = document.getElementById('gatePass').value;
    if(doLogin(email, pass)){ location.reload(); } else { document.getElementById('gateErr').style.display='block'; }
  };
}
