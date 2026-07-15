/* ============================================================
   OPEN CHANNEL MEDIA — ARQUIVO ÚNICO DE CONFIGURAÇÃO
   Edite APENAS este arquivo para alterar links, contatos
   e dados dos produtos. Nenhum outro arquivo precisa mudar.
   ============================================================ */

const OCM_CONFIG = {

  /* ---------- CONTATOS (substitua os placeholders) ---------- */
  contato: {
    // Formato: apenas números, com DDI e DDD. Ex.: "5548999990000"
    whatsapp: "[INSERIR WHATSAPP]",
    email: "[INSERIR E-MAIL]",
    instagram: "[INSERIR LINK DO INSTAGRAM]",
    linkedin: "[INSERIR LINK DO LINKEDIN]",
    cnpj: "[INSERIR CNPJ]",
    endereco: "[INSERIR ENDEREÇO]"
  },

  /* ---------- PRODUTOS DO ECOSSISTEMA ---------- */
  produtos: [
    {
      id: "assessor",
      name: "Assessor 24 Horas",
      url: "https://assessor24h.ia.br/",
      logo: "images/products/assessor-24h-logo.svg",
      categoria: "Comunicação legislativa",
      frase: "Seu gabinete com comunicação disponível 24 horas.",
      botao: "Conheça o Assessor 24 Horas"
    },
    {
      id: "radar",
      name: "Radar Público",
      url: "https://radarpublico.ia.br/",
      logo: "images/products/radar-publico-logo.svg",
      categoria: "Monitoramento e inteligência",
      frase: "Saiba o que está sendo falado enquanto o assunto acontece.",
      botao: "Conheça o Radar Público"
    },
    {
      id: "portavoz",
      name: "Porta Voz",
      url: "https://www.portavoz.ia.br/",
      logo: "images/products/porta-voz-logo.svg",
      categoria: "Comunicação municipal integrada",
      frase: "Conecte todas as secretarias à comunicação da prefeitura.",
      botao: "Conheça o Porta Voz"
    }
  ]
};
