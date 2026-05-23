export const COPY = {
  brand: {
    name: 'Wdev Digital',
    slogan: 'Software sob medida. Resultado sob controle.',
  },

  nav: [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Agro', href: '#agro' },
    { label: 'Processo', href: '#processo' },
    { label: 'Por que nós', href: '#por-que' },
    { label: 'Contato', href: '#contato' },
  ],

  hero: {
    eyebrow: 'Software sob medida para o agronegócio',
    sub: 'Desenvolvemos sistemas web, ERPs internos, integrações e modernizações para fazendas, cooperativas, transportadoras e agroindústrias. Escopo, prazo e investimento definidos antes da primeira linha de código.',
    ctaPrimary: 'Agendar reunião',
    ctaSecondary: 'Como trabalhamos',
    tag: 'Especialistas Agro · Brasil',
    stats: [
      { v: '100%', l: 'Projetos sob medida, sem template' },
      { v: 'Agro', l: 'Especialização real no setor' },
      { v: 'Etapas', l: 'Entregas com milestone validado' },
    ],
  },

  trust: [
    { name: 'Fazendas', small: 'Grãos e algodão' },
    { name: 'Pecuária', small: 'Confinamento e cria' },
    { name: 'Transporte', small: 'Logística rural' },
    { name: 'Cooperativas', small: 'Insumos e armazenagem' },
    { name: 'Agroindústria', small: 'Processamento' },
  ],

  problem: {
    eyebrow: 'Diagnóstico',
    title: 'Planilhas não escalam. Sistema genérico, também não.',
    sub: 'A operação do agro tem regras próprias — safra, talhão, lote, frota, romaneio, balança. Quando o sistema não enxerga isso, o controle vira retrabalho.',
    items: [
      { n: '01', t: 'Processos presos em planilhas', d: 'Dados duplicados, fórmulas quebradas e nenhuma rastreabilidade. Cada fechamento depende da pessoa que sabe onde está o arquivo certo.', q: '“Toda segunda eu refaço a mesma planilha.”' },
      { n: '02', t: 'Sistemas antigos e engessados', d: 'Software legado que ninguém mais dá manutenção, telas confusas e relatórios que precisam ser exportados e tratados fora do sistema.', q: '“Funciona, mas a gente trabalha apesar dele.”' },
      { n: '03', t: 'Sistemas que não conversam', d: 'ERP, balança, GPS, financeiro e fiscal vivendo em ilhas. Conciliação manual, divergência entre relatórios e decisão tomada com dados defasados.', q: '“Cada setor tem um número diferente.”' },
      { n: '04', t: 'Falta de visibilidade', d: 'Custo por talhão, produtividade por frota, margem por contrato — informação existe, mas está espalhada em arquivos, e-mails e cabeças.', q: '“Só descobrimos o problema no fechamento do mês.”' },
      { n: '05', t: 'Retrabalho operacional', d: 'A mesma informação digitada três vezes em três lugares. Time bom perdendo horas em tarefa que sistema deveria resolver.', q: '“Contratei gente pra digitar nota.”' },
      { n: '06', t: 'Crescimento limitado por TI', d: 'Abrir filial, novo silo, nova linha — e o sistema atual não acompanha. O negócio cresce mais rápido do que a tecnologia.', q: '“Quando dobrar o volume, não roda.”' },
    ],
  },

  services: {
    eyebrow: 'Serviços',
    title: 'Software desenhado para o seu processo — não o contrário.',
    sub: 'Atuamos do diagnóstico à implantação. Cada entrega é um projeto fechado, com escopo, cronograma e investimento aprovados antes de começar.',
    tabs: ['Agronegócio', 'Outros setores'],
    feature: {
      title: 'Sistemas internos e plataformas que cabem na operação real.',
      desc: 'Construímos ERPs próprios, portais para times de campo e escritório, painéis gerenciais e automações de processo. Tudo conectado, com regras do seu negócio.',
      bullets: ['ERP interno', 'Portal operacional', 'Painel gerencial', 'Mobile para campo', 'Automação de processos'],
    },
    items: [
      { t: 'Sistemas web e em nuvem', d: 'Aplicações acessíveis de qualquer lugar, hospedadas em infraestrutura confiável.' },
      { t: 'Plataformas internas e ERPs', d: 'Sistemas próprios desenhados para o jeito que sua empresa trabalha hoje.' },
      { t: 'Integrações entre sistemas', d: 'ERP, fiscal, balança, GPS, bancos e parceiros conversando sem planilha no meio.' },
      { t: 'Modernização de sistemas antigos', d: 'Reescrita e migração de software legado, sem perder o que já funciona.' },
    ],
  },

  agro: {
    eyebrow: 'Foco de atuação',
    sub: 'Conhecemos o vocabulário e o ritmo da operação: safra, talhão, lote, romaneio, balança, frota, contrato. Atendemos também outros segmentos, mas o agro é onde temos mais profundidade.',
    segments: [
      'Fazendas e grupos agrícolas',
      'Pecuária e confinamento',
      'Transportadoras do agro',
      'Cooperativas',
      'Empresas de insumos',
      'Logística rural',
      'Agroindústrias',
      'Outros segmentos sob demanda',
    ],
    badge: 'Foco · Agro',
    miniLabel: 'Mapeamento típico',
    miniValue: '12+ módulos',
    miniSub: 'que ligam campo, escritório e indústria',
  },

  process: {
    eyebrow: 'Como trabalhamos',
    title: 'Um processo previsível, em etapas validadas com você.',
    sub: 'Antes de programar, alinhamos escopo, cronograma e investimento. Depois, entregamos por milestones — você vê o sistema evoluir e valida cada bloco.',
    steps: [
      { n: '01', t: 'Conversa inicial', d: 'Reunião curta ou envio do resumo do projeto. O objetivo é entender o cenário, o problema central e quem usa o sistema.', meta: '30–60 min' },
      { n: '02', t: 'Descoberta e escopo resumido', d: 'Estruturamos uma documentação inicial com objetivo, módulos, integrações previstas e premissas do projeto. Esse documento vira a base da conversa.', meta: 'Doc. inicial' },
      { n: '03', t: 'Validação do entendimento', d: 'Você lê, comenta e ajusta. Só seguimos quando o entendimento do problema está confirmado dos dois lados.', meta: 'Alinhamento' },
      { n: '04', t: 'Proposta detalhada', d: 'Documento completo com cronograma, horas estimadas, milestones e investimento total. Sem surpresas escondidas no contrato.', meta: 'Proposta' },
      { n: '05', t: 'Aprovação e pagamento inicial', d: 'Com a proposta aprovada e o pagamento inicial confirmado, o time é alocado e o projeto entra em execução.', meta: 'Kickoff' },
      { n: '06', t: 'Desenvolvimento por milestones', d: 'Entregas em blocos validados, com revisão a cada etapa. Você acompanha o avanço sem precisar esperar o fim para ver algo funcionando.', meta: 'Entregas' },
      { n: '07', t: 'Implantação acordada', d: 'Definimos junto a estratégia de implantação — piloto, migração de dados, treinamento e go-live. Suporte próximo durante a virada.', meta: 'Go-live' },
    ],
  },

  why: {
    eyebrow: 'Por que Wdev Digital',
    title: 'Critérios que importam quando o software vai sustentar a operação.',
    sub: 'Não vendemos pacote pronto, nem promessa de virada de chave. Vendemos um processo de engenharia, com expectativas alinhadas e responsabilidades claras.',
    cards: [
      { big: '100%', t: 'Desenvolvimento sob medida', d: 'Nada de template adaptado. Cada projeto é desenhado para a regra de negócio do cliente.', dark: true },
      { big: 'Agro', t: 'Vivência no setor', d: 'Experiência prática com sistemas do agronegócio: do romaneio à integração fiscal.' },
      { big: 'Pré', t: 'Planejamento antes do código', d: 'Escopo, prazo e investimento aprovados antes do desenvolvimento começar.' },
      { big: 'Etapas', t: 'Entregas validadas em milestones', d: 'Você vê o sistema evoluir em blocos, sem caixa-preta nem big-bang no final.' },
      { big: 'Claro', t: 'Transparência de escopo e prazo', d: 'Documentos, cronograma e horas previstas — disponíveis durante todo o projeto.' },
      { big: 'Real', t: 'Posicionamento consultivo', d: 'Antes de propor sistema, propomos diagnóstico. Se a solução não for software, dizemos.' },
      { big: 'B2B', t: 'Foco em empresa que opera', d: 'Trabalhamos com decisores de operação — não com camadas infinitas de aprovação.' },
      { big: 'Pós', t: 'Suporte estruturado', d: 'Implantação, treinamento e evolução contínua acompanham o ciclo de vida do sistema.', dark: true },
    ],
  },

  cta: {
    eyebrow: 'Próximo passo',
    sub: 'Em 30 minutos entendemos o cenário, identificamos onde o software pode ajudar e dizemos se faz sentido seguir. Sem compromisso e sem proposta-padrão.',
    primary: 'Agendar reunião',
    secondary: 'Enviar resumo do projeto',
    meta: [
      ['Tempo de resposta', 'Até 1 dia útil'],
      ['Atendimento', 'Brasil — remoto, com visitas quando necessário'],
      ['Setores', 'Agronegócio · Indústria · Logística · Serviços'],
    ],
  },

  footer: {
    cols: [
      { h: 'Serviços', links: ['Sistemas web e nuvem', 'ERPs e plataformas internas', 'Integrações', 'Modernização de legado', 'Automação de processos'] },
      { h: 'Empresa', links: ['Sobre a Wdev', 'Como trabalhamos', 'Por que Wdev', 'Contato'] },
      { h: 'Contato', links: ['(18) 99701-8782', 'wdevdigital.com.br', 'Brasil — atendimento remoto'] },
    ],
    seoLine: 'Wdev Digital · Software sob medida para o agronegócio · Sistemas web, ERPs, integrações e modernização.',
  },
};
