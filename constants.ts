
import { PortfolioData } from './types';

export const INITIAL_DATA: PortfolioData = {
  name: "Luciano Lino Pereira",
  title: "Enfermeiro | Coordenador de UTI | Gestor Hospitalar | Criador de Soluções em Saúde Digital",
  headline: "Enfermeiro • Coordenador de UTI • Gestor Hospitalar • Criador de Soluções em Saúde Digital",
  heroPitch: "Transformo vivência assistencial e liderança em processos, indicadores e sistemas práticos para melhorar segurança, qualidade e eficiência no cuidado.",
  about: [
    "Enfermeiro coordenador com sólida experiência na gestão de equipes e processos em UTI, buscando ampliar atuação em posições estratégicas como Gerência de Enfermagem.",
    "Atuação focada em altos padrões de qualidade e segurança, participação em processos de certificação hospitalar e entrega de indicadores para melhoria contínua.",
    "Nos últimos meses, agreguei tecnologia e programação ao meu repertório para construir soluções aplicáveis ao dia a dia: passagem de plantão digital, dashboards, auditoria/indicadores, automações e ferramentas de apoio à decisão."
  ],
  focusAreas: [
    "Terapia Intensiva (UTI Adulto) e alta complexidade",
    "Urgência e Emergência / Pronto-Socorro",
    "Gestão de equipes, processos e leitos",
    "Qualidade, segurança do paciente e acreditação",
    "Auditoria intra-hospitalar, glosas e indicadores",
    "Tecnologia aplicada à enfermagem e gestão (dashboards/sistemas)"
  ],
  email: "enf.lucianolino@gmail.com",
  phone: "(62) 9 8631-1129",
  phoneSecondary: "(62) 9 99870-409",
  location: "Goiânia – GO",
  profileImage: "https://picsum.photos/400/400?random=1",
  resumeUrl: "#",
  experiences: [
    {
      id: "1",
      role: "Enfermeiro Coordenador de UTI",
      company: "Hospital Santa Helena",
      period: "Fev 2018 – Atual",
      location: "Goiânia",
      description: [
        "Gestão de operações e equipe multidisciplinar em UTI Adulto com foco em qualidade, segurança e eficiência.",
        "Monitoramento de métricas e implementação de melhorias baseadas em dados (indicadores assistenciais/gerenciais).",
        "Participação em processos de acreditação/certificação, liderança de equipes e padronização de práticas.",
        "Atuação com auditoria intra-hospitalar e melhoria contínua de processos."
      ]
    },
    {
      id: "2",
      role: "Enfermeiro Supervisor – UTI / PS",
      company: "Hospital do Coração de Goiás",
      period: "Jul 2021 – Atual",
      location: "Goiânia",
      description: [
        "Supervisão da equipe de enfermagem garantindo segurança e bem-estar do paciente.",
        "Coordenação de distribuição de pacientes e gestão de leitos.",
        "Participação em reuniões clínicas interdisciplinares e condução de planos de cuidado.",
        "Suporte em situações críticas e melhoria de rotinas assistenciais."
      ]
    },
    {
      id: "3",
      role: "Enfermeiro Supervisor",
      company: "Hospital de Urgências de Goiânia",
      period: "Jan 2019 – Dez 2020",
      location: "Goiânia",
      description: [
        "Supervisão e orientação da equipe conforme protocolos e padrões de atendimento.",
        "Gestão e monitoramento da distribuição de pacientes e recursos (alocação equitativa).",
        "Atuação em emergências com resposta rápida, liderança e comunicação efetiva.",
        "Avaliação de qualidade do serviço e implementação de medidas corretivas."
      ]
    }
  ],
  education: [
    { id: "e1", degree: "Bacharel em Enfermagem", institution: "Universidade Salgado de Oliveira (UNIVERSO)" },
    { id: "e2", degree: "Pós-graduação – Terapia Intensiva Geral", institution: "CGESP" },
    { id: "e3", degree: "Pós-graduação – Urgência e Emergência", institution: "CGESP" },
    { id: "e4", degree: "Gestão Hospitalar", institution: "Faculdade Lions (FACLIONS)" }
  ],
  courses: [
    "I Simpósio de Terapia Intensiva – SOTIEGO",
    "Desenvolvendo Time de Alta Performance",
    "Segurança do Paciente e Qualidade em Serviço de Saúde"
  ],
  healthSkills: ["UTI Adulto", "Urgência e Emergência", "Gestão de Leitos", "Triagem (Manchester)", "Protocolos & Segurança"],
  gestaoSkills: ["Liderança de Equipes", "Indicadores Assistenciais", "Melhoria de Processos", "Acreditação Hospitalar"],
  techSkills: ["Python • Flask", "TypeScript • React", "SQLite • Supabase", "Git/GitHub", "Data Viz"],
  projects: [
    {
      id: "p1",
      name: "Passagem de Plantão Digital (Web)",
      description: "Sistema para registro estruturado do plantão com histórico, filtros, faltas/substituições e visão de gestão.",
      highlights: [
        "Histórico com visualização expansível.",
        "Lógica inteligente de faltas e substituições.",
        "Preparado para exportação PDF/XLSX."
      ],
      stack: ["React", "TypeScript", "Flask", "SQLite"],
      status: "Em desenvolvimento"
    },
    {
      id: "p2",
      name: "Dashboards de Indicadores",
      description: "Painéis para indicadores assistenciais/gerenciais, análise de erros por tipo/setor e insights executivos.",
      highlights: [
        "Ranking e densidade de erros por prontuário.",
        "Métricas para gestão de qualidade.",
        "Relatórios automatizados."
      ],
      stack: ["React", "Recharts", "Exportação PDF"],
      status: "MVP"
    }
  ]
};
