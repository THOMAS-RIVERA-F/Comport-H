import {
  Activity,
  BrainCircuit,
  Building2,
  FileArchive,
  FileChartColumn,
  FileSpreadsheet,
  FileText,
  Gauge,
  Layers3,
  Network,
  Presentation,
  ShieldCheck,
  Sparkles,
  Target,
  UserRoundCheck,
  UsersRound,
  Waypoints
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const navItems = [
  { id: "groups", label: "Grupos", icon: Building2 },
  { id: "upload", label: "Ingesta", icon: FileArchive },
  { id: "knowledge", label: "IA viva", icon: BrainCircuit },
  { id: "employee", label: "Persona", icon: UserRoundCheck },
  { id: "group", label: "Grupo", icon: UsersRound }
] as const;

export type ViewId = (typeof navItems)[number]["id"];

export type OrganizationGroup = {
  id: string;
  name: string;
  description: string;
  members: number;
  documents: number;
  intelligence: number;
  signal: string;
  icon: LucideIcon;
};

export const organizationGroups: OrganizationGroup[] = [
  {
    id: "leadership",
    name: "Leadership Acceleration",
    description: "Sucesion, potencial ejecutivo y readiness de lideres criticos.",
    members: 184,
    documents: 1260,
    intelligence: 94,
    signal: "Alta densidad de liderazgo emergente",
    icon: Target
  },
  {
    id: "operations",
    name: "Operations Intelligence",
    description: "Talento operativo, eficiencia, riesgo y capacidades transversales.",
    members: 312,
    documents: 2184,
    intelligence: 89,
    signal: "Relaciones fuertes entre PMO, analytics y finanzas",
    icon: Waypoints
  },
  {
    id: "growth",
    name: "Enterprise Growth",
    description: "Equipos comerciales, expansion regional y arquitectura de crecimiento.",
    members: 247,
    documents: 1738,
    intelligence: 91,
    signal: "Potencial alto en roles de expansion LatAm",
    icon: Sparkles
  }
];

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
    source: "PDF - People Operations",
    time: "hace 4 min",
    strength: 92
  },
  {
    title: "Skills financieras detectadas en 46 perfiles",
    source: "Excel - Compensacion",
    time: "hace 11 min",
    strength: 88
  },
  {
    title: "Potencial de liderazgo recalibrado",
    source: "PowerPoint - Talent Review",
    time: "hace 27 min",
    strength: 84
  },
  {
    title: "Notas 1:1 vinculadas a historial de carrera",
    source: "OneNote - Managers",
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

export const neuralDocuments = [
  { name: "Talent Review", type: "PDF", extension: ".pdf", progress: 91, orbit: 0 },
  { name: "Leadership Matrix", type: "Excel", extension: ".xlsx", progress: 74, orbit: 1 },
  { name: "Career Paths", type: "PowerPoint", extension: ".pptx", progress: 63, orbit: 2 },
  { name: "Manager Notes", type: "OneNote", extension: ".one", progress: 58, orbit: 3 },
  { name: "Role Architecture", type: "Word", extension: ".docx", progress: 82, orbit: 4 }
];

export const intelligenceSteps = [
  { label: "Analizando perfiles", progress: 96, icon: UserRoundCheck },
  { label: "Calculando competencias", progress: 88, icon: Gauge },
  { label: "Detectando habilidades", progress: 84, icon: Sparkles },
  { label: "Identificando liderazgo", progress: 79, icon: Target },
  { label: "Encontrando relaciones", progress: 72, icon: Network },
  { label: "Consolidando personas", progress: 68, icon: UsersRound },
  { label: "Construyendo equipos", progress: 61, icon: Building2 },
  { label: "Generando inteligencia organizacional", progress: 54, icon: BrainCircuit }
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
  location: "Bogota - Enterprise Growth",
  portrait: "/neural/mujer-neuronal.png",
  id: "EMP-4587",
  manager: "Carlos Nunez",
  tenure: "4.8 anos",
  availability: "Q3 2026",
  potential: 94,
  performance: 91,
  influence: 96,
  resilience: 92,
  integrity: 98,
  succession: "Alto",
  skills: [
    "Leadership",
    "AI Strategy",
    "Innovation",
    "Strategy",
    "Execution",
    "People Management",
    "AI Literacy"
  ],
  evidence: [
    {
      title: "Evaluacion de liderazgo Q2",
      detail: "Menciona influencia transversal y criterio ejecutivo.",
      confidence: 96
    },
    {
      title: "Feedback 360",
      detail: "18 lideres destacan impacto colaborativo.",
      confidence: 98
    },
    {
      title: "Matriz de talento",
      detail: "Alto potencial identificado en calibracion regional.",
      confidence: 94
    },
    {
      title: "Career Planning 2025",
      detail: "Ruta de sucesion definida para operaciones LatAm.",
      confidence: 92
    },
    {
      title: "Proyectos estrategicos",
      detail: "Liderazgo en 3 iniciativas de alto impacto.",
      confidence: 95
    }
  ],
  attributes: [
    { label: "Potencial", value: 94 },
    { label: "Desempeno", value: 91 },
    { label: "Influencia", value: 96 },
    { label: "Resiliencia", value: 92 }
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

export const groupMembers = [
  {
    name: "Valeria Montes",
    role: "Head Strategic Ops",
    department: "Operations",
    portrait: "/neural/mujer-neuronal.png",
    x: 50,
    y: 58,
    potential: 94,
    performance: 91,
    influence: 96,
    risk: "Bajo",
    skills: ["AI Strategy", "Leadership", "Transformation", "Execution"],
    evidence: ["Matriz de talento", "Feedback 360", "Evaluacion Q2"]
  },
  {
    name: "Andres Lopez",
    role: "Gerente",
    department: "Finance",
    portrait: "/neural/hombre-neuronal.png",
    x: 47,
    y: 24,
    potential: 89,
    performance: 88,
    influence: 84,
    risk: "Medio",
    skills: ["Finance", "Planning", "Governance"],
    evidence: ["Budget review", "People plan"]
  },
  {
    name: "Laura Sanchez",
    role: "Gerente",
    department: "People",
    portrait: "/neural/mujer-neuronal.png",
    x: 77,
    y: 34,
    potential: 90,
    performance: 87,
    influence: 88,
    risk: "Bajo",
    skills: ["People Analytics", "Culture", "Coaching"],
    evidence: ["Engagement report", "Manager notes"]
  },
  {
    name: "Carlos Ruiz",
    role: "Director",
    department: "Operations",
    portrait: "/neural/hombre-neuronal.png",
    x: 18,
    y: 32,
    potential: 86,
    performance: 90,
    influence: 91,
    risk: "Bajo",
    skills: ["Execution", "PMO", "Operations"],
    evidence: ["Quarterly review", "OKR analysis"]
  },
  {
    name: "Daniel Torres",
    role: "Especialista",
    department: "Analytics",
    portrait: "/neural/hombre-neuronal.png",
    x: 13,
    y: 70,
    potential: 82,
    performance: 86,
    influence: 77,
    risk: "Medio",
    skills: ["Data", "Automation", "Reporting"],
    evidence: ["Dashboard audit", "Project notes"]
  },
  {
    name: "Santiago Vera",
    role: "Analista",
    department: "Strategy",
    portrait: "/neural/hombre-neuronal.png",
    x: 25,
    y: 85,
    potential: 84,
    performance: 83,
    influence: 74,
    risk: "Bajo",
    skills: ["Research", "Planning", "Synthesis"],
    evidence: ["Strategy memo", "Manager notes"]
  },
  {
    name: "Maria Camacho",
    role: "Coordinadora",
    department: "Growth",
    portrait: "/neural/mujer-neuronal.png",
    x: 70,
    y: 76,
    potential: 87,
    performance: 85,
    influence: 81,
    risk: "Bajo",
    skills: ["Coordination", "Commercial Ops", "Enablement"],
    evidence: ["Growth plan", "Feedback 360"]
  }
];

export const teamRelations = [
  ["Valeria Montes", "Andres Lopez"],
  ["Valeria Montes", "Laura Sanchez"],
  ["Valeria Montes", "Carlos Ruiz"],
  ["Valeria Montes", "Daniel Torres"],
  ["Valeria Montes", "Santiago Vera"],
  ["Valeria Montes", "Maria Camacho"],
  ["Carlos Ruiz", "Daniel Torres"],
  ["Carlos Ruiz", "Santiago Vera"],
  ["Andres Lopez", "Laura Sanchez"],
  ["Andres Lopez", "Carlos Ruiz"],
  ["Laura Sanchez", "Maria Camacho"],
  ["Santiago Vera", "Maria Camacho"]
] as const;

export const groupSignals = [
  { label: "Readiness colectivo", value: "91%", detail: "Equipo listo para iniciativas regionales." },
  { label: "Cobertura de skills", value: "87%", detail: "Brechas moderadas en AI governance." },
  { label: "Densidad relacional", value: "12.8k", detail: "Conexiones fuertes entre roles criticos." },
  { label: "Riesgo agregado", value: "Bajo", detail: "Senales estables de permanencia." }
];
