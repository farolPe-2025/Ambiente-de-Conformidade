/* ============================================================
   Ambiente de Conformidade — dados semeados a partir do
   "Plan Monit Gerencial 2026.xls" (SEAIEE / SDEC-PE).
   Campos de cada linha (itens/sub-itens), nesta ordem:
   [numero, nome, responsavel, recursos, ppIni, ppFim, prIni, prFim,
    atraso, indicador, qtd, status, statusPrazo, obs, driveLink]
   ============================================================ */
var META = {
  lastUpdated: "2026-08-28T14:00:00-03:00",
  cycle: "2026/2027"
};

var SEED_INTERNO = {
  title: "Acompanhamento Interno de Ações 2026",
  nucleos: [
    { nome:"Reestruturação da SEAIEE", responsavel:"Pedro Leonardo/Marcus", data:"15-abr-26",
      acoes:[
        { row:["1","Reestruturação da SEAIEE (Proposta)","Pedro Leonardo Lacerda","","","","","","","","","","",""],
          itens:[
            ["1.1","Modelar a nova estrutura da SEAIEE","Marcus Ferraz","-","11-mai-26","15-jun-26","11-mai-26","15-jun-26","-","proposta finalizada","1","CONCLUÍDA","NO PRAZO",""],
            ["1.2","Validar a nova estrutura da SEAIEE","Pedro Leonardo Lacerda","-","17-jun-26","17-jun-26","17-jun-26","17-jun-26","-","proposta validada","1","CONCLUÍDA","NO PRAZO",""],
            ["1.3","Apresentar a proposta para o Time (reunião)","Pedro Leonardo Lacerda","-","26-jun-26","26-jun-26","26-jun-26","26-jun-26","-","reunião realizada","1","CONCLUÍDA","NO PRAZO",""],
            ["1.4","Propor (construir) e validar o modelo de ferramenta de Acompanhamento e Produção","Marcus Ferraz","-","2-jul-26","4-ago-26","2-jul-26","4-ago-26","-","ferramenta validada","1","CONCLUÍDA","NO PRAZO","Período de construção e validação do modelo."],
            ["1.5","Elaborar Planos de Trabalho (PT) com o Time e validar com Pedro Lacerda.","Marcus Ferraz","-","13-ago-26","28-ago-26","13-ago-26","28-ago-26","-","Planos de Trabalho elaborados","4","CONCLUÍDA","NO PRAZO","Dos 6 Núcleos da SEAIEE."],
            ["1.6","Monitorar processos (Ciclos de Monitoramento)","Marcus Ferraz","-","1-set-26","15-dez-26","1-set-26","15-dez-26","-","núcleos monitorados","4","EM ANDAMENTO","NO PRAZO","Ação contínua"]
          ]
        }
      ]
    },
    { nome:"Núcleo de Inteligência de Mercado e Estratégia", responsavel:"Caio/Marcus", data:"9-jun-26",
      acoes:[
        { row:["1",'Plataforma "FarolPE"',"Caio Coutinho/Marcus Ferraz","","","","","","","","","","",""],
          itens:[
            ["1.1","Reunião para apresentar a ideia para o Observatório Econômico de PE","Pedro/Marcus","-","-","9-jun-26","-","9-jun-26","-","-","-","CONCLUÍDA","NO PRAZO","Reunião de kick-off."],
            ["1.2","Modelar o ambiente","Caio/Marcus/Eduardo","-","11-jun-26","30-jun-26","11-jun-26","30-jun-26","-","Organograma do site modelado","1","CONCLUÍDA","NO PRAZO",""],
            ["1.3","Construir a plataforma (coleta inicial/definir infra)","Pedro/Eduardo","-","30-jun-26","21-ago-26","30-jun-26","21-ago-26","-","-","-","CONCLUÍDA","NO PRAZO",""],
            ["1.4","Definir identidade (nome (logomarca) e aspectos gráficos da plataforma)","Caio/Marcus","-","24-jul-26","7-ago-26","24-jul-26","7-ago-26","-","Marca e aspectos gráficos definidos","1","CONCLUÍDA","NO PRAZO",'Logomarca da Plataforma "FarolPE".'],
            ["1.5","Realizar os ajustes finais na Plataforma","Caio/Pedro/Eduardo","-","17-ago-26","21-ago-26","17-ago-26","21-ago-26","-","-","-","EM ANDAMENTO","NO PRAZO",""],
            ["1.6","Infraestrutura (contratar/adquirir)","Caio/Pedro/Marcus/Cleyton","Hospedagem/Armazenagem (BD)","18-ago-26","28-ago-26","21-ago-26","","-","Hosp/Armaz contratada","1","EM ANDAMENTO","NO PRAZO","Reunião no gabinete c/ Sra. Danielle/Pres. ATI e equipe/Gustavo/Pedro/Cleyton/Caio/Pedro/Marcus (em 21/ago) p/ discutir infraestrutura > Agendar reunião técnica na ATI."],
            ["1.7",'Entregar a Plataforma "FarolPE"',"Caio/Pedro/Eduardo/Marcus","Depende da Infra Hospedagem","1-set-26","4-set-26","","","-","Plataforma finalizada","1","A INICIAR","NO PRAZO","Criar um relatório da construção da Plataforma e módulos."],
            ["1.8",'Lançamento da Plataforma "FarolPE"',"Secretária","?","1ª semana nov/26","","","","-","Evento de lançamento realizado","1","A INICIAR","NO PRAZO",""],
            ["1.9",'Manter a Plataforma "FarolPE" (coletar, tratar, inserir, ajustar etc.)',"Caio/Pedro/Eduardo","Hospedagem/Armazenagem (BD)","","","","","-","Plataforma lançada","1","A INICIAR","NO PRAZO","Ação contínua"],
            ["1.10","Desenvolver novos módulos para o FarolPE","Caio/Marcus","-","1-nov-26","15-dez-26","1-nov-26","15-dez-26","-","-","1","A INICIAR","NO PRAZO","Ação contínua"]
          ]
        },
        { row:["2",'Módulo 1 "Integrador Produção e Mercado"',"Caio Coutinho","","15-set-26","15-dez-26","","","","","","","",""],
          itens:[
            ["2.1","Coleta de dados (construir instrumento/contato/coleta primária)","Caio/Marcus","-","1-set-26","16-out-26","","","-","Organograma do site","1","A INICIAR","NO PRAZO",""],
            ["2.2","Modelar o ambiente","Caio/Pedro/Eduardo/Marcus","-","19-out-26","30-out-26","","","-","-","-","A INICIAR","NO PRAZO",""],
            ["2.3","Construir o módulo (coleta inicial/definir infra)","Pedro/Eduardo","-","após nov/26","","","","-","-","-","A INICIAR","NO PRAZO","Ver com Pedro Lacerda > Decisão (continua ou não)."],
            ["2.4","Definir identidade (nome (logomarca) e aspectos gráficos da plataforma)","Caio/Marcus","-","","","","","-","Marca e aspectos gráficos definidos","1","A INICIAR","NO PRAZO",""],
            ["2.5",'Realizar os ajustes finais no módulo "Integrador"',"Caio/Pedro/Eduardo","-","","","","","-","-","-","A INICIAR","NO PRAZO",""],
            ["2.6",'Entregar o módulo "Integrador"',"Caio/Pedro/Eduardo/Marcus","","","","","","-","Plataforma finalizada","1","A INICIAR","NO PRAZO",""],
            ["2.7",'Lançamento do módulo "Integrador"',"Secretária","?","mar/27","","","","-","Evento de lançamento realizado","1","A INICIAR","NO PRAZO","Previsão março/27 > A depender."],
            ["2.8",'Manter o módulo "Integrador" (coletar, tratar, inserir, ajustar etc.)',"Caio/Pedro/Eduardo","","","","","","-","Plataforma lançada","1","A INICIAR","NO PRAZO","Ação contínua"]
          ]
        }
      ]
    },
    { nome:"Núcleo de Atração de Investimentos (Front-End)", responsavel:"Marcus/Pedro Lacerda/ADEPE", data:"",
      acoes:[
        { row:["1","Prospecção Ativa de Investidores (Lead Generation)","Marcus Ferraz/ADEPE","","","","","","","","","","",""],
          itens:[
            ["1.1","Realizar prospecção ativa (empresas nacionais e internacionais)","Marcus/ADEPE","-","1-jul-26","15-dez-26","1-jul-26","15-dez-26","-","CRM de investidores","X","EM ANDAMENTO","NO PRAZO","Ação contínua"],
            ["1.2","Receber investidores e realizar reuniões (empresas, fundos e grupos econômicos)","Marcus/Pedro/ADEPE","-","1-jul-26","15-dez-26","1-jul-26","15-dez-26","-","nº de investidores contatado","X","EM ANDAMENTO","NO PRAZO","Ação contínua"],
            ["1.3","Registrar contatos (Planilha de Prospecção)","Marcus","-","1-jul-26","15-dez-26","1-jul-26","15-dez-26","-","Planilha de Prospecção","1","EM ANDAMENTO","NO PRAZO","Ação contínua"],
            ["1.4","Registrar informações (Planilha de E-mail)","Marcus","-","1-jul-26","15-dez-26","1-jul-26","15-dez-26","-","Planilha de Mailing","1","EM ANDAMENTO","NO PRAZO","Ação contínua"],
            ["1.5","Criar pipeline de oportunidades","Marcus/Caio/ADEPE","-","","","","","-","","","A INICIAR","NO PRAZO","Pipeline orientado pelas reuniões do CONDIC."]
          ]
        },
        { row:["2","Promover Pernambuco como Destino de Investimentos (Investment Promotion)","Marcus Ferraz/ADEPE","","","","","","","","","","",""],
          itens:[
            ["2.1","Criar materiais institucionais de atração de investimentos","Valdecarlos/Jota/Gabinete","?","1-set-26","16-out-26","1-set-26","16-out-26","-","guia do Investidor PE criado","1","A INICIAR","NO PRAZO","Ver se a ADEPE tem um Guia de Investidores"],
            ["2.2","Desenvolver apresentações setoriais (investment decks)","Marcus/Caio","-","1-set-26","16-out-26","1-set-26","16-out-26","-","apresentações setoriais","x","A INICIAR","NO PRAZO","Padronizar apresentações"],
            ["2.3","Desenvolver relacionamento com câmaras de comércio, blocos econômicos, consulados e embaixadas","Pedro/Marcus","-","30-jun-26","15-dez-26","30-jun-26","15-dez-26","-","câmaras de comércio em contato","3","EM ANDAMENTO","NO PRAZO","África Ocidental (28/jul); CCIB (30/jul); CCAB (19/ago)"],
            ["2.4","Divulgar vantagens competitivas do Estado","SDEC PE/ADEPE","-","30-jun-26","15-dez-26","30-jun-26","15-dez-26","-","","","A INICIAR","NO PRAZO",""],
            ["2.5","Criar campanhas digitais de promoção econômica (por segmentos etc.)","Valdecarlos/Jota/Gabinete","-","15-set-26","15-dez-26","15-set-26","15-dez-26","-","","","A INICIAR","NO PRAZO","Ver com Valdecarlos/Jota"],
            ["2.6","Utilizar LinkedIn e redes institucionais","Marcus/...","-","15-abr-26","15-dez-26","15-abr-26","15-dez-26","-","relatório de contatos realizados","","EM ANDAMENTO","NO PRAZO","Ver com Valdecarlos/Jota"]
          ]
        },
        { row:["3","Atendimento e Facilitação ao Investidor (Investor Care)","ADEPE/Marcus","","","","","","","","","","",""],
          itens:[
            ["3.1","Atender demandas de investidores","ADEPE","-","15-abr-26","15-dez-26","15-abr-26","15-dez-26","-","plano de atendimento ao investidor","-","EM ANDAMENTO","NO PRAZO","Ver se a ADEPE tem procedimentos"],
            ["3.2","Identificar necessidades de localização","ADEPE","-","-","-","-","-","-","relatório de demandas","-","A INICIAR","NO PRAZO",""],
            ["3.3","Apresentar áreas disponíveis (site selection)","ADEPE","-","-","-","-","-","-","matriz de facilitação","-","A INICIAR","NO PRAZO",""],
            ["3.4","Conectar investidores com órgãos públicos","ADEPE","-","-","-","-","-","-","mapa de parceiros institucionais","-","A INICIAR","NO PRAZO",""],
            ["3.5","Apoiar processos de licenciamento","ADEPE","-","-","-","-","-","-","-","-","A INICIAR","NO PRAZO",""],
            ["3.6","Orientar sobre incentivos fiscais e financeiros","ADEPE","-","-","-","-","-","-","-","-","A INICIAR","NO PRAZO",""],
            ["3.7","Facilitar acesso a fornecedores e parceiros","ADEPE","-","-","-","-","-","-","-","-","A INICIAR","NO PRAZO",""],
            ["3.8","Apoiar processos burocráticos","ADEPE","-","-","-","-","-","-","-","-","A INICIAR","NO PRAZO",""]
          ]
        },
        { row:["4","Desenvolvimento de Propostas de Investimento (Investment Proposal)","ADEPE/Marcus","","","","","","","","","","",""],
          itens:[
            ["4.1","Elaborar propostas personalizadas para investidores","ADEPE","-","15-abr-26","15-dez-26","15-abr-26","15-dez-26","-","Investor Proposal Book","-","A INICIAR","NO PRAZO","Ver se a ADEPE tem procedimentos"],
            ["4.2","Desenvolver estudos preliminares de localização","ADEPE","-","-","-","-","-","-","Estudos de viabilidade inicial","-","A INICIAR","NO PRAZO",""],
            ["4.3","Apresentar infraestrutura disponível","ADEPE","-","-","-","-","-","-","Dossiês de oportunidades","-","A INICIAR","NO PRAZO",""],
            ["4.4","Levantar dados econômicos e mão de obra","ADEPE","-","-","-","-","-","-","-","-","A INICIAR","NO PRAZO",""],
            ["4.5","Identificar fornecedores locais","ADEPE","-","-","-","-","-","-","-","-","A INICIAR","NO PRAZO",""],
            ["4.6","Estruturar argumentos de competitividade","ADEPE","-","-","-","-","-","-","-","-","A INICIAR","NO PRAZO",""],
            ["4.7","Apoiar elaboração de business cases","ADEPE","-","-","-","-","-","-","-","-","A INICIAR","NO PRAZO",""]
          ]
        },
        { row:["5","Eventos de Negócios e Missões Empresariais","Marcus Ferraz/ADEPE","","","","","","","","","","",""],
          itens:[
            ["5.1","Participar de eventos nacionais e internacionais (feiras, congressos, eventos empresariais, missões etc.)","Pedro/Marcus/ADEPE","?","30-jun-26","15-dez-26","30-jun-26","15-dez-26","-","Calendário anual de eventos","X","EM ANDAMENTO","NO PRAZO","Multimodal Nordeste 2026 (4 a 6/ago)"],
            ["5.2","Promover eventos locais","Pedro/Marcus/ADEPE","?","1-set-26","15-dez-26","30-jun-26","15-dez-26","-","Relatórios de participação","2","A INICIAR","NO PRAZO","Webinars setoriais, workshops, roadshows, fóruns de investimentos, encontros B2B, missões, agendas com investidores etc."],
            ["5.3","Recepcionar delegações empresariais","SDEC PE/ADEPE","?","1-set-26","15-dez-26","30-jun-26","15-dez-26","-","Leads gerados","","A INICIAR","NO PRAZO",""]
          ]
        },
        { row:["6","Governança e Monitoramento","Marcus Ferraz/ADEPE","","","","","","","","","","",""],
          itens:[
            ["6.1","Realizar reuniões semanais de acompanhamento","Marcus Ferraz e equipe","-","1-set-26","15-dez-26","30-jun-26","15-dez-26","-","Investimentos atraídos (R$) e empregos gerados","","A INICIAR","NO PRAZO","Ação contínua"],
            ["6.2","Atualizar dashboard de gestão","Marcus Ferraz","-","1-set-26","15-dez-26","30-jun-26","15-dez-26","-","Setores atendidos e Empresas atraídas","","A INICIAR","NO PRAZO","Ação contínua"],
            ["6.3","Definir metas trimestrais","Pedro/Marcus","-","1-set-26","15-dez-26","30-jun-26","15-dez-26","-","Municípios beneficiados","","A INICIAR","NO PRAZO","Ação contínua"],
            ["6.4","Monitorar indicadores","Marcus Ferraz","-","1-set-26","15-dez-26","30-jun-26","15-dez-26","-","Tempo médio de atendimento ao investidor","","A INICIAR","NO PRAZO","Ação contínua"],
            ["6.5","Produzir relatórios executivos para liderança","Marcus Ferraz","-","1-set-26","15-dez-26","30-jun-26","15-dez-26","-","Conversão de oportunidades","","A INICIAR","NO PRAZO","Ação contínua"]
          ]
        },
        { row:["7","Planos Territorias de Redes/Cadeias Produtivas (PTRPs)","Marcus/Caio","2026/2027","","","","","","","","","","Estratégias de Desenvolvimento."],
          itens:[
            ["7.1","Diagnosticar e mapear as redes/cadeias produtivas vocacionadas do Estado de PE","Marcus/Caio","até dez/26","","","","","-","Diagnósticos realizados","","A INICIAR","NO PRAZO","OBJETIVO: Diagnosticar e mapear, com dados primários e secundários, as bases de produção dos segmentos estruturadores e de base familiar do Estado de PE."],
            ["7.2","Elaborar os Planos Territoriais de Redes/Cadeias Produtivas do Estado de PE","Marcus/Caio/ADEPE","2027","","","","","-","Planos Territoriais elaborados","","A INICIAR","NO PRAZO","OBJETIVO: Elaborar documentos orientadores (PTRPs) das políticas públicas de desenvolvimento econômico territorial (Matriz de Ações e Investimentos; pactuação e governança)."],
            ["7.3","Implementar os Planos Territoriais de Redes/Cadeias Produtivas de PE","SDEC PE/ADEPE","2027","","","","","-","Planos Territoriais implementados","","A INICIAR","NO PRAZO","OBJETIVO: Fortalecer, a partir de estratégias, as redes e cadeias produtivas territoriais dos segmentos estruturadores e de base familiar de PE."]
          ]
        }
      ]
    },
    { nome:"Núcleo de Relações Institucionais e Comerciais", responsavel:"Pedro Leonardo/Marcus/ADEPE", data:"",
      acoes:[
        { row:["1","Gestão de Relacionamentos","","","","","","","","","","","",""],
          itens:[
            ["1.1","Criar e manter relacionamento","Pedro Leonardo/Marcus Ferraz","-","1-set-26","15-dez-26","30-jun-26","15-dez-26","-","-","-","EM ANDAMENTO","NO PRAZO","Associações, consulados, câmaras de comércio, blocos econômicos etc."],
            ["1.2","Criar mailing (contatos e parceiros)","Marcus Ferraz","-","1-set-26","15-dez-26","30-jun-26","15-dez-26","-","Mailing de parceiros","1","A INICIAR","NO PRAZO","ORGANIZAR O MAILING DA SEAIEE"],
            ["1.3","Estabelecer acordos de cooperação","Pedro Leonardo/Marcus Ferraz","-","1-set-26","15-dez-26","30-jun-26","15-dez-26","-","Agenda institucional","-","EM ANDAMENTO","-",""],
            ["1.3.2","Comunidade Económica dos Estados da África Ocidental (CEDEAO)","Pedro Leonardo Lacerda/Marcus Ferraz","-","-","-","-","28-jul-26","-","Agenda institucional","3","EM ANDAMENTO","NO PRAZO","Reunião presencial realizada em 28/jul com Rafael Toscano > Identificar segmentos de interesse e oportunidades."],
            ["1.3.1","Câmara de Comércio Índia Brasil (CCIB)","Pedro Leonardo Lacerda/Marcus Ferraz","-","-","-","-","30-jul-26","-","","","EM ANDAMENTO","NO PRAZO",'Reunião presencial realizada em 30/jul com Letícia Gomes > Providenciar relatório "cadeias produtivas de Pernambuco e oportunidades de investimentos e parcerias".'],
            ["1.3.3","Câmara de Comércio Árabe-brasileira (CCAB)","Pedro Leonardo Lacerda/Marcus Ferraz","-","-","-","-","19-ago-26","-","","","EM ANDAMENTO","NO PRAZO",'Reunião remota realizada em 19/ago com Karen Mizuta > Providenciar relatório "cadeias produtivas de Pernambuco e oportunidades de investimentos e parcerias".']
          ]
        }
      ]
    },
    { nome:"Núcleo de Recionamento e Legado (Aftercare)", responsavel:"Marcus/ADEPE", data:"",
      acoes:[
        { row:["1","Aftercare e Expansão de Investimentos","Marcus Ferraz","","","","","","","","","","",""],
          itens:[
            ["1.1","Fazer contatos com empresas instaladas","Marcus","-","18-mai-26","15-dez-26","18-mai-26","15-dez-26","-","","","EM ANDAMENTO","NO PRAZO","Ação contínua."],
            ["1.2","Identificar necessidades de ações (dificuldades operacionais, projetos de expansão etc.)","Marcus","-","18-mai-26","15-dez-26","18-mai-26","15-dez-26","-","","","EM ANDAMENTO","NO PRAZO","Ação contínua."],
            ["1.3","Atuar na facilitação","Marcus","-","18-mai-26","15-dez-26","18-mai-26","15-dez-26","-","Relatório de atendimento","","EM ANDAMENTO","NO PRAZO","Ação contínua."],
            ["1.4","Criar relacionamento permanente","Marcus","-","18-mai-26","15-dez-26","18-mai-26","15-dez-26","-","Relatórios de satisfação","","EM ANDAMENTO","NO PRAZO","Ação contínua."]
          ]
        }
      ]
    },
    { nome:"Núcleo de Suporte e Facilitação", responsavel:"", data:"",
      acoes:[ { row:["1","","","","","","","","","","","","",""],
          itens:[ ["1.1","","","","","","","","","","","A INICIAR","NO PRAZO",""], ["1.2","","","","","","","","","","","A INICIAR","NO PRAZO",""], ["1.3","","","","","","","","","","","CONCLUÍDA","NO PRAZO",""] ] } ]
    },
    { nome:"Núcleo de Acompanhamento de Programas e Projetos", responsavel:"", data:"",
      acoes:[ { row:["1","","","","","","","","","","","","",""],
          itens:[ ["1.1","","","","","","","","","","","A INICIAR","NO PRAZO",""], ["1.2","","","","","","","","","","","A INICIAR","NO PRAZO",""], ["1.3","","","","","","","","","","","CONCLUÍDA","NO PRAZO",""], ["1.4","","","","","","","","","","","EM ANDAMENTO","ATRASADA",""] ] } ]
    }
  ]
};

var SEED_PRODUCAO = { title: "Acompanhamento de Produção 2026", nucleos: [] };
