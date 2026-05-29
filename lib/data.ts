import {
  Activity,
  BrainCircuit,
  FileArchive,
  FileChartColumn,
  FileSpreadsheet,
  FileText,
  Gauge,
  Layers3,
  Network,
  Presentation,
  ShieldCheck,
  UserRoundCheck,
  UsersRound
} from "lucide-react";

export const navItems = [
  { id: "dashboard", label: "Comando", icon: BrainCircuit },
  { id: "upload", label: "Ingesta", icon: FileArchive },
  { id: "knowledge", label: "Conocimiento", icon: Network },
  { id: "employee", label: "Perfil", icon: UserRoundCheck }
] as const;

export type ViewId = (typeof navItems)[number]["id"];

export const metrics = [
  {
    label: "Documentos totales",
    value: "18.420",
    delta: "+1.284",
    tone: "ivory",
    icon: FileText
  },
  {
    label: "Personas identificadas",
    value: "2.917",
    delta: "+184",
    tone: "ember",
    icon: UsersRound
  },
  {
    label: "Procesamiento",
    value: "91%",
    delta: "estable",
    tone: "vapor",
    icon: Gauge
  },
  {
    label: "Calidad de datos",
    value: "97.4",
    delta: "A+",
    tone: "ivory",
    icon: ShieldCheck
  }
];

export const recentActivity = [
  {
    title: "Onboarding Q2 conectado a matriz de desempeno",
    source: "PDF · People Operations",
    time: "hace 4 min",
    strength: 92
  },
  {
    title: "Skills financieras detectadas en 46 perfiles",
    source: "Excel · Compensacion",
    time: "hace 11 min",
    strength: 88
  },
  {
    title: "Potencial de liderazgo recalibrado",
    source: "PowerPoint · Talent Review",
    time: "hace 27 min",
    strength: 84
  },
  {
    title: "Notas 1:1 vinculadas a historial de carrera",
    source: "OneNote · Managers",
    time: "hace 42 min",
    strength: 79
  }
];

export const fileTypes = [
  { label: "PDF", icon: FileText, signature: "Politicas, evaluaciones, CVs" },
  { label: "Excel", icon: FileSpreadsheet, signature: "Matrices, desempeno, bonos" },
  { label: "PowerPoint", icon: Presentation, signature: "Talent reviews, calibraciones" },
  { label: "Word", icon: FileChartColumn, signature: "Contratos, reportes, minutas" },
  { label: "OneNote", icon: Layers3, signature: "Notas de managers, seguimiento" }
];

export const uploadQueue = [
  { name: "Talent Review LatAm Q2.pdf", state: "Mapeando entidades", progress: 76 },
  { name: "Leadership Matrix.xlsx", state: "Normalizando senales", progress: 54 },
  { name: "Career Paths 2026.pptx", state: "Extrayendo relaciones", progress: 39 }
];

export const knowledgeNodes = [
  { id: "Docs", x: 9, y: 47, size: 52, label: "Documentos" },
  { id: "Signals", x: 27, y: 22, size: 38, label: "Senales" },
  { id: "Skills", x: 44, y: 58, size: 44, label: "Skills" },
  { id: "Performance", x: 62, y: 28, size: 48, label: "Desempeno" },
  { id: "Potential", x: 79, y: 51, size: 40, label: "Potencial" },
  { id: "Profile", x: 91, y: 25, size: 54, label: "Perfil consolidado" }
];

export const knowledgeEdges = [
  ["Docs", "Signals"],
  ["Docs", "Skills"],
  ["Signals", "Performance"],
  ["Skills", "Potential"],
  ["Performance", "Profile"],
  ["Potential", "Profile"],
  ["Skills", "Profile"],
  ["Signals", "Potential"]
] as const;

export const employee = {
  name: "Valeria Montes",
  role: "Head of Strategic Operations",
  location: "Bogota · Enterprise Growth",
  portrait: "/neural/mujer-neuronal.png",
  potential: 94,
  performance: 91,
  integrity: 98,
  skills: [
    "Enterprise AI",
    "Operating Models",
    "Financial Strategy",
    "Talent Systems",
    "Executive Narrative",
    "Change Architecture"
  ],
  timeline: [
    {
      year: "2026",
      title: "Expande unidad de automatizacion",
      detail: "Conecta PMO, analytics y talento en una cadencia ejecutiva unica."
    },
    {
      year: "2025",
      title: "Lidera transformacion regional",
      detail: "Reduce friccion operacional en 31% y crea playbook reutilizable."
    },
    {
      year: "2024",
      title: "Detectada como sucesora critica",
      detail: "Alta senal de influencia lateral, criterio financiero y resiliencia."
    }
  ]
};

export const graphInsights = [
  { label: "Relaciones activas", value: "12.8k", icon: Activity },
  { label: "Confianza semantica", value: "96%", icon: ShieldCheck },
  { label: "Perfiles fusionados", value: "2.1k", icon: UsersRound }
];
