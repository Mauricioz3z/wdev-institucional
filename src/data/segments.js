// Conteúdo das páginas de soluções por segmento do agronegócio.
// Cada entrada vira uma página em /solucoes/<slug>/ com SEO próprio.
// Após editar, rode: node scripts/generate-pages.mjs (regenera os HTML).

export const SITE_URL = 'https://wdevdigital.com.br';

export const SEGMENTS = {
  'sistema-para-fazenda': {
    slug: 'sistema-para-fazenda',
    shortLabel: 'Fazendas e grupos agrícolas',
    metaTitle: 'Sistema para Fazenda — Gestão Agrícola Sob Medida | Wdev',
    metaDescription:
      'Sistema sob medida para fazendas e grupos agrícolas: custo por talhão, safra, romaneio, estoque de insumos e frota em um só lugar. Agende uma conversa.',
    eyebrow: 'Soluções · Fazendas e grupos agrícolas',
    h1: 'Sistema sob medida para fazendas e grupos agrícolas',
    intro:
      'Da semeadura ao fechamento da safra: desenvolvemos sistemas que conectam campo e escritório, com custo por talhão, romaneio, estoque de insumos e frota — tudo na regra da sua operação, sem adaptar planilha nem template genérico.',
    pains: [
      {
        t: 'Custo por talhão só no fim da safra',
        d: 'Insumo, operação mecanizada e mão de obra lançados em planilhas separadas. O custo real por talhão e por cultura só aparece meses depois — quando não dá mais para corrigir.',
      },
      {
        t: 'Romaneio e balança fora do sistema',
        d: 'Tickets de balança digitados manualmente, divergência entre o que saiu da lavoura e o que chegou no armazém, e conferência de frete feita no papel.',
      },
      {
        t: 'Estoque de insumos sem rastreio',
        d: 'Defensivo e fertilizante saem do barracão sem baixa por talhão. Inventário nunca bate e a compra da próxima safra é feita no achismo.',
      },
      {
        t: 'Frota e abastecimento no caderno',
        d: 'Diesel, manutenção e horímetro anotados à mão. Sem custo por máquina, sem alerta de revisão e sem visão de qual equipamento está drenando margem.',
      },
    ],
    modules: [
      'Planejamento e acompanhamento de safra',
      'Custo por talhão e por cultura',
      'Romaneio e integração com balança',
      'Estoque de insumos com baixa por aplicação',
      'Frota agrícola e abastecimento',
      'Ordens de serviço de campo',
      'Painel gerencial da safra',
      'Integração com ERP e fiscal',
    ],
    faq: [
      {
        q: 'O sistema funciona offline no campo?',
        a: 'Sim. Projetamos aplicativos de campo que registram dados sem sinal e sincronizam quando a conexão volta — realidade comum em talhões distantes da sede.',
      },
      {
        q: 'Vocês integram com o ERP que a fazenda já usa?',
        a: 'Sim. Integração é uma das nossas frentes principais: ERP, fiscal, balança, GPS de frota e bancos passam a conversar sem digitação dupla.',
      },
      {
        q: 'Quanto tempo leva um projeto para fazenda?',
        a: 'Depende do escopo. Antes de qualquer desenvolvimento, entregamos documento com módulos, cronograma e investimento — você aprova sabendo prazo e custo total.',
      },
    ],
    related: ['software-para-pecuaria', 'sistema-para-transportadora-agro', 'sistema-para-cooperativa'],
  },

  'software-para-pecuaria': {
    slug: 'software-para-pecuaria',
    shortLabel: 'Pecuária e confinamento',
    metaTitle: 'Software para Pecuária e Confinamento Sob Medida | Wdev',
    metaDescription:
      'Software sob medida para pecuária e confinamento: lotes, currais, trato, GMD, protocolos sanitários e custo da arroba sob controle. Fale com a Wdev.',
    eyebrow: 'Soluções · Pecuária e confinamento',
    h1: 'Software sob medida para pecuária e confinamento',
    intro:
      'Do nascimento ao embarque: sistemas que acompanham lote, curral, trato e pesagem, calculam GMD e custo da arroba em tempo real — desenhados para o manejo da sua fazenda, não para um modelo genérico de pecuária.',
    pains: [
      {
        t: 'GMD descoberto só na pesagem final',
        d: 'Sem acompanhamento de ganho médio diário por lote, o ajuste de dieta chega tarde. O resultado do confinamento vira surpresa no embarque.',
      },
      {
        t: 'Trato e leitura de cocho no papel',
        d: 'Arraçoamento anotado em prancheta e digitado depois. Erro de dieta, sobra no cocho e consumo real que ninguém consegue auditar.',
      },
      {
        t: 'Protocolo sanitário sem rastreio',
        d: 'Vacina, vermífugo e medicação registrados em caderno. Carência de abate controlada de memória — risco real de prejuízo e de barreira sanitária.',
      },
      {
        t: 'Custo da arroba calculado por estimativa',
        d: 'Dieta, sanidade, mão de obra e depreciação espalhados. O custo real da arroba produzida só aparece no fechamento — quando o boi já foi vendido.',
      },
    ],
    modules: [
      'Gestão de lotes e currais',
      'Trato e leitura de cocho',
      'Pesagens e GMD por lote',
      'Protocolos sanitários e carências',
      'Custo da arroba em tempo real',
      'Integração com balança de curral',
      'Painel do confinamento',
      'Integração com ERP e fiscal',
    ],
    faq: [
      {
        q: 'O sistema atende cria, recria e engorda?',
        a: 'Sim. Por ser sob medida, o sistema modela o ciclo completo ou apenas a fase que sua operação trabalha — confinamento, semiconfinamento ou pasto.',
      },
      {
        q: 'Integra com balança e brinco eletrônico?',
        a: 'Sim. Conectamos balanças de curral, bastões de leitura e identificação eletrônica para eliminar digitação e erro de transcrição.',
      },
      {
        q: 'Substitui o sistema que já usamos ou complementa?',
        a: 'Os dois cenários são comuns. Às vezes o melhor projeto é integrar e complementar o que existe; quando o legado trava a operação, propomos a substituição por etapas.',
      },
    ],
    related: ['sistema-para-fazenda', 'sistema-para-transportadora-agro', 'software-para-agroindustria'],
  },

  'sistema-para-transportadora-agro': {
    slug: 'sistema-para-transportadora-agro',
    shortLabel: 'Transportadoras e logística rural',
    metaTitle: 'Sistema para Transportadora do Agro — Frota e Fretes | Wdev',
    metaDescription:
      'Sistema sob medida para transportadoras do agro: fretes, romaneio x ticket de balança, frota, abastecimento e integração fiscal sem planilha. Agende uma conversa.',
    eyebrow: 'Soluções · Transporte e logística rural',
    h1: 'Sistema sob medida para transportadoras do agronegócio',
    intro:
      'Frete de grão não é frete de carga geral: safra concentra volume, balança define pagamento e a frota roda longe do escritório. Construímos sistemas que conciliam romaneio, ticket e frete automaticamente — com a regra de cada contrato.',
    pains: [
      {
        t: 'Romaneio x ticket conciliado à mão',
        d: 'Peso de origem, peso de destino e quebra conferidos um a um em planilha. Pagamento de frete atrasa e divergência vira discussão com o cliente.',
      },
      {
        t: 'Frete e contrato sem regra no sistema',
        d: 'Tarifa por rota, por tonelada e por cliente vivendo em planilhas diferentes. Faturamento depende de quem "sabe a tabela de cabeça".',
      },
      {
        t: 'Frota e pneu sem custo por veículo',
        d: 'Manutenção, pneu e diesel lançados de forma genérica. Impossível saber qual caminhão dá lucro e qual deveria ser vendido.',
      },
      {
        t: 'Fiscal desconectado da operação',
        d: 'CT-e e MDF-e emitidos em um sistema, operação controlada em outro. Conciliação manual no fechamento e retrabalho fiscal todo mês.',
      },
    ],
    modules: [
      'Ordens de frete e programação de carga',
      'Conciliação romaneio x ticket de balança',
      'Tabelas de frete por contrato e rota',
      'Gestão de frota, pneus e manutenção',
      'Abastecimento e custo por veículo',
      'Integração com CT-e, MDF-e e ERP',
      'Painel por rota, cliente e veículo',
      'App para motorista',
    ],
    faq: [
      {
        q: 'O sistema controla quebra de peso?',
        a: 'Sim. A regra de quebra técnica e desconto de cada contrato fica no sistema: a conciliação entre peso de origem e destino sai automática, com divergências sinalizadas.',
      },
      {
        q: 'Funciona para frota própria e agregados?',
        a: 'Sim. Modelamos remuneração de frota própria, agregado e terceiro — cada um com sua regra de pagamento e seus relatórios.',
      },
      {
        q: 'Integra com rastreador e GPS?',
        a: 'Sim. Consumimos dados de rastreadores e telemetria para posição de frota, controle de jornada e custo por quilômetro rodado.',
      },
    ],
    related: ['sistema-para-fazenda', 'sistema-para-cooperativa', 'sistema-para-empresa-de-insumos'],
  },

  'sistema-para-cooperativa': {
    slug: 'sistema-para-cooperativa',
    shortLabel: 'Cooperativas',
    metaTitle: 'Sistema para Cooperativa Agrícola Sob Medida | Wdev Digital',
    metaDescription:
      'Sistema sob medida para cooperativas: recebimento, classificação, saldo por cooperado, contratos, fixações e portal do cooperado integrados. Fale com a Wdev.',
    eyebrow: 'Soluções · Cooperativas',
    h1: 'Sistema sob medida para cooperativas agrícolas',
    intro:
      'Recebimento na moega, classificação, saldo por depositante e fixação de contratos: a operação da cooperativa tem regras que sistema genérico não enxerga. Desenvolvemos plataformas que seguem o seu estatuto e o seu fluxo — do caminhão na balança ao extrato do cooperado.',
    pains: [
      {
        t: 'Fila na moega e recebimento manual',
        d: 'Na safra, o gargalo é o papel: romaneio escrito à mão, classificação digitada depois e produtor esperando sem previsão.',
      },
      {
        t: 'Saldo por cooperado em planilha',
        d: 'Depósito, desconto de secagem, impureza e retirada controlados fora do sistema. Extrato do produtor demora e gera contestação.',
      },
      {
        t: 'Contratos e fixações sem controle',
        d: 'Volume fixado, a fixar e preço de cada contrato em arquivos separados. Exposição da cooperativa descoberta tarde demais.',
      },
      {
        t: 'Cooperado sem visibilidade',
        d: 'Produtor liga para saber saldo, ticket e preço do dia. Atendimento sobrecarregado com informação que deveria estar num portal.',
      },
    ],
    modules: [
      'Recebimento, balança e classificação',
      'Descontos de secagem e impureza por regra',
      'Saldo e extrato por cooperado',
      'Contratos, fixações e exposição',
      'Expedição e logística de armazém',
      'Portal e app do cooperado',
      'Integração com ERP e fiscal',
      'Painéis de safra e armazenagem',
    ],
    faq: [
      {
        q: 'O sistema atende mais de uma unidade de recebimento?',
        a: 'Sim. Multiunidade é requisito comum: cada silo ou filial opera com seus dados e a direção enxerga o consolidado em tempo real.',
      },
      {
        q: 'Dá para manter nosso ERP atual e integrar?',
        a: 'Sim. Muitos projetos mantêm o ERP contábil/fiscal e constroem por cima a camada operacional que falta — balança, classificação e cooperado.',
      },
      {
        q: 'O portal do cooperado é personalizado?',
        a: 'Sim. O cooperado vê saldo, tickets, contratos e comunicados com a identidade da cooperativa, no celular ou no computador.',
      },
    ],
    related: ['sistema-para-fazenda', 'sistema-para-empresa-de-insumos', 'software-para-agroindustria'],
  },

  'sistema-para-empresa-de-insumos': {
    slug: 'sistema-para-empresa-de-insumos',
    shortLabel: 'Revendas e empresas de insumos',
    metaTitle: 'Sistema para Revenda de Insumos Agrícolas | Wdev Digital',
    metaDescription:
      'Sistema sob medida para revendas de insumos: campanhas de venda, crédito do produtor, barter, entregas e comissão de RTV integrados ao ERP. Agende uma conversa.',
    eyebrow: 'Soluções · Revendas e insumos',
    h1: 'Sistema sob medida para revendas e empresas de insumos',
    intro:
      'Venda de insumo tem safra, campanha, barter e prazo que acompanha a colheita. Construímos sistemas que controlam pedido, crédito e entrega com as regras comerciais da sua revenda — e dão ao RTV uma ferramenta de campo que ele realmente usa.',
    pains: [
      {
        t: 'Campanha e tabela de preço no Excel',
        d: 'Preço por cultura, por volume e por vencimento muda a cada campanha. Sem sistema, cada vendedor pratica uma condição diferente.',
      },
      {
        t: 'Crédito do produtor sem trava',
        d: 'Limite aprovado numa planilha que não conversa com o pedido. A exposição por cliente só aparece quando o financeiro fecha o mês.',
      },
      {
        t: 'Barter controlado à parte',
        d: 'Troca de insumo por grão registrada fora do fluxo. Posição de barter, preço travado e entrega física sem conciliação automática.',
      },
      {
        t: 'RTV sem ferramenta de campo',
        d: 'Pedido tirado por WhatsApp e digitado no escritório. Erro de condição, atraso de faturamento e comissão calculada à mão.',
      },
    ],
    modules: [
      'Pedidos e campanhas de venda',
      'Limite de crédito e exposição por produtor',
      'Operações de barter',
      'Logística de entrega e agendamento',
      'Comissão de RTV por regra',
      'App de campo para o vendedor',
      'Integração com ERP e fiscal',
      'Painel comercial por safra',
    ],
    faq: [
      {
        q: 'O app do vendedor funciona sem internet?',
        a: 'Sim. O RTV consulta catálogo, preço e limite do cliente offline e o pedido sincroniza quando houver sinal.',
      },
      {
        q: 'Vocês modelam regras de comissão complexas?',
        a: 'Sim. Comissão por margem, por campanha, por recebimento — a regra que existir hoje na planilha vira cálculo automático e auditável.',
      },
      {
        q: 'Integra com o ERP da revenda?',
        a: 'Sim. O pedido aprovado segue para faturamento no ERP sem redigitação, e o financeiro devolve o status de pagamento para o controle de crédito.',
      },
    ],
    related: ['sistema-para-cooperativa', 'sistema-para-fazenda', 'sistema-para-transportadora-agro'],
  },

  'software-para-agroindustria': {
    slug: 'software-para-agroindustria',
    shortLabel: 'Agroindústrias',
    metaTitle: 'Software para Agroindústria — Produção e Rastreio | Wdev',
    metaDescription:
      'Software sob medida para agroindústrias: recepção, ordens de produção, rendimento, perdas e rastreabilidade por lote integrados ao ERP. Fale com a Wdev.',
    eyebrow: 'Soluções · Agroindústrias',
    h1: 'Software sob medida para agroindústrias',
    intro:
      'Entre a balança de recepção e a expedição existe um processo que o ERP fiscal não enxerga: rendimento, perdas, qualidade e rastreabilidade por lote. Desenvolvemos a camada industrial que liga o chão de fábrica ao escritório — no ritmo da sua linha.',
    pains: [
      {
        t: 'Rendimento industrial descoberto tarde',
        d: 'Quanto entrou de matéria-prima e quanto saiu de produto acabado conferido em planilha, dias depois. Perda de rendimento vira prejuízo silencioso.',
      },
      {
        t: 'Rastreabilidade montada à mão',
        d: 'Auditoria ou recall exige reconstruir o lote em papéis e planilhas. Horas de trabalho para responder o que o sistema deveria saber na hora.',
      },
      {
        t: 'Apontamento de produção no papel',
        d: 'Paradas, refugo e produção por turno anotados em prancheta. O indicador chega na reunião com uma semana de atraso e pouca confiança.',
      },
      {
        t: 'Laboratório e balança isolados',
        d: 'Análises de qualidade num sistema, pesagens em outro, produção num terceiro. Conciliação manual e decisão tomada com dado defasado.',
      },
    ],
    modules: [
      'Recepção de matéria-prima e balança',
      'Ordens de produção e apontamento',
      'Rendimento e perdas por lote',
      'Rastreabilidade da recepção à expedição',
      'Qualidade e integração com laboratório',
      'Paradas e eficiência de linha',
      'Integração com ERP e fiscal',
      'Painéis industriais em tempo real',
    ],
    faq: [
      {
        q: 'O sistema conversa com balanças e equipamentos de linha?',
        a: 'Sim. Integramos balanças rodoviárias e de fluxo, sensores e CLPs quando há interface disponível — eliminando apontamento manual.',
      },
      {
        q: 'Substitui o ERP da indústria?',
        a: 'Normalmente não. O padrão é manter o ERP fiscal/contábil e construir a camada operacional industrial que falta, integrada a ele.',
      },
      {
        q: 'Atende quais tipos de agroindústria?',
        a: 'Beneficiamento de grãos, algodoeiras, frigoríficos, laticínios e processamento em geral. Por ser sob medida, o sistema segue o fluxo da sua planta.',
      },
    ],
    related: ['sistema-para-cooperativa', 'software-para-pecuaria', 'sistema-para-fazenda'],
  },
};

export const SEGMENT_LIST = Object.values(SEGMENTS);
