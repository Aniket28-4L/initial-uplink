// ─── Portfolio Data ───────────────────────────────────────────────────────────

export const OWNER = {
  name: 'Aniket Pandey',
  nameShort: 'AP',
  title: 'DevOps Practitioner',
  subtitle: 'Cloud Engineer · Automation Specialist · Infrastructure Builder',
  tagline: 'Automation-first mindset. Reducing manual work. Improving operational efficiency.',
  bio: 'DevOps Practitioner with strong foundations in DevOps tools, automation, and cloud fundamentals. Driven by an automation-first mindset to reduce manual work and improve operational efficiency. Eager to learn, adapt, and contribute to reliable software delivery in real-world environments.',
  location: 'Rajkot, Gujarat, India',
  education: 'B.Tech Computer Engineering — RK University | CGPA: 8.40/10 | May 2026',
  cgpa: '8.40',
  contact: {
    phone: '+91-7984266324',
    email: 'aniketpandey4723k@gmail.com',
    linkedin: 'https://linkedin.com/in/aniket-pandey-1b3a59291',
    github: 'https://github.com/Aniket28-4L',
  },
  stats: [
    { value: '8.40', label: 'CGPA',      suffix: '/10' },
    { value: '2',    label: 'PROJECTS',  suffix: '+' },
    { value: '97%',  label: 'CYBER SEC', suffix: '' },
    { value: '5',    label: 'CERTS',     suffix: '+' },
  ],
  softSkills: ['Teamwork', 'Leadership', 'Work Ethic', 'Discipline', 'Perseverance'],
  languages:  ['English', 'Hindi', 'Gujarati', 'Awadhi'],
  awards: [
    'Medals in Taekwondo — Regional Level',
    '1st Runner-Up in Football Tournament KMK',
  ],
}

// ─── Skills ───────────────────────────────────────────────────────────────────

export interface Skill {
  name: string
  category: string
  icon: string
  color: string
  level: number
  description: string
  tags: string[]
}

export const SKILLS: Skill[] = [
  {
    name: 'Docker',
    category: 'CONTAINERS',
    icon: '⬡',
    color: '#38bdf8',
    level: 82,
    description: 'Dockerized full-stack applications using Dockerfiles for consistent environments across dev and deployment. Built multi-container setups with Docker Compose.',
    tags: ['Dockerfile', 'Docker Compose', 'Container Registry', 'Multi-stage Builds'],
  },
  {
    name: 'Kubernetes',
    category: 'ORCHESTRATION',
    icon: '◎',
    color: '#818cf8',
    level: 70,
    description: 'Working knowledge of K8s core concepts — Pods, Services, and Deployments for container orchestration and workload management.',
    tags: ['Pods', 'Services', 'Deployments', 'K8s'],
  },
  {
    name: 'AWS',
    category: 'CLOUD',
    icon: '☁',
    color: '#f5a623',
    level: 65,
    description: 'Hands-on with AWS core services — EC2 for compute, S3 for storage, IAM for access management, VPC for networking fundamentals.',
    tags: ['EC2', 'S3', 'IAM', 'VPC'],
  },
  {
    name: 'Terraform',
    category: 'IAC',
    icon: '◆',
    color: '#a78bfa',
    level: 68,
    description: 'Infrastructure as Code using Terraform to provision and manage cloud resources declaratively, enabling reproducible infrastructure.',
    tags: ['IaC', 'Providers', 'State Mgmt', 'Modules'],
  },
  {
    name: 'Ansible',
    category: 'AUTOMATION',
    icon: '⚡',
    color: '#ff6b4a',
    level: 72,
    description: 'Automated infrastructure and application setup using Ansible, reducing manual config and improving reliability through playbooks and roles.',
    tags: ['Playbooks', 'Roles', 'Inventory', 'Config Mgmt'],
  },
  {
    name: 'GitHub Actions',
    category: 'CI/CD',
    icon: '⚙',
    color: '#4ade80',
    level: 75,
    description: 'Implemented CI/CD pipelines using GitHub Actions to automate build, test, and deployment workflows on every code push.',
    tags: ['Workflows', 'YAML', 'Automation', 'CI/CD'],
  },
  {
    name: 'Jenkins',
    category: 'CI/CD',
    icon: '◑',
    color: '#f87171',
    level: 60,
    description: 'Build automation and pipeline creation with Jenkins for continuous integration and deployment processes.',
    tags: ['Pipelines', 'Build Automation', 'Plugins', 'Jobs'],
  },
  {
    name: 'Linux',
    category: 'OS',
    icon: '▣',
    color: '#fbbf24',
    level: 78,
    description: 'Strong Linux fundamentals — server management, shell scripting, process control, and file system operations in DevOps workflows.',
    tags: ['Shell', 'Bash', 'File System', 'Process Mgmt'],
  },
  {
    name: 'Git & GitHub',
    category: 'VERSION CONTROL',
    icon: '◉',
    color: '#fb923c',
    level: 85,
    description: 'Full version control workflow — branching strategies, pull requests, collaborative development, and repository management.',
    tags: ['Branching', 'Pull Requests', 'Git Flow', 'Collaboration'],
  },
  {
    name: 'Bash / YAML',
    category: 'SCRIPTING',
    icon: '▶',
    color: '#34d399',
    level: 70,
    description: 'Shell scripting for task automation, system administration, and pipeline config. YAML for infrastructure and CI/CD definitions.',
    tags: ['Shell Scripts', 'YAML', 'Automation', 'Pipeline Config'],
  },
  {
    name: 'Java',
    category: 'PROGRAMMING',
    icon: '☕',
    color: '#f59e0b',
    level: 72,
    description: 'Java backend development including JDBC for database connectivity and object-oriented application design.',
    tags: ['OOP', 'JDBC', 'Backend', 'MySQL'],
  },
  {
    name: 'JavaScript',
    category: 'PROGRAMMING',
    icon: '⟡',
    color: '#eab308',
    level: 74,
    description: 'Full-stack JS with Node.js backend APIs, Express.js server setup, and Angular frontend integration.',
    tags: ['Node.js', 'Express.js', 'Angular', 'APIs'],
  },
]

// ─── Projects ─────────────────────────────────────────────────────────────────

export interface Project {
  id: string
  title: string
  subtitle: string
  period: string
  description: string
  highlights: string[]
  stack: string[]
  flow: string[]
  architecture: string
  github: string
  color: string
  metrics: { label: string; value: string }[]
  category: string
}

export const PROJECTS: Project[] = [
  {
    id: 'inventory-management',
    title: 'Inventory Management System',
    subtitle: 'Angular · Node.js · MongoDB · Docker · Ansible · GitHub Actions',
    period: 'November 2025 – January 2026',
    description: 'Real-time inventory management system with role-based access control, automated stock workflows, and analytical dashboards for operational and financial tracking. Full DevOps pipeline applied.',
    highlights: [
      'Dockerized the full-stack app using Dockerfiles for consistent dev/prod environments',
      'Automated infrastructure and application setup using Ansible — reduced manual config overhead',
      'Implemented CI/CD pipelines via GitHub Actions to automate build, test, and deploy workflows',
      'Designed role-based access control with automated stock workflows and financial dashboards',
    ],
    stack: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Docker', 'Ansible', 'GitHub Actions'],
    flow: ['GitHub Push', 'Actions CI', 'Build & Test', 'Docker Build', 'Ansible Provision', 'Production Deploy'],
    architecture: 'Angular frontend served via Nginx container. Node.js + Express.js API in Docker. MongoDB for persistence. Ansible playbooks handle server provisioning. GitHub Actions runs the full CI/CD pipeline on every push.',
    github: 'https://github.com/Aniket28-4L/InventoryManagement',
    color: '#f5a623',
    metrics: [
      { label: 'Pipeline', value: 'CI/CD' },
      { label: 'Infra',    value: 'Ansible' },
      { label: 'Runtime',  value: 'Docker' },
    ],
    category: 'DEVOPS + FULLSTACK',
  },
  {
    id: 'getwork',
    title: 'GetWork Platform',
    subtitle: 'Java · JDBC · MySQL · phpMyAdmin',
    period: 'March 2025 – April 2025',
    description: 'Service-based platform enabling users to discover and track verified professionals for household and local services in real time. Role-based registration for professionals like tutors, physiotherapists, and cooks.',
    highlights: [
      'Developed platform enabling users to discover and track verified professionals in real time',
      'Implemented role-based registration — professionals manage profiles and set service pricing',
      'Designed separate admin and user interfaces for service moderation and booking control',
      'Built secure backend workflows for service listings, bookings, and data management',
    ],
    stack: ['Java', 'JDBC', 'MySQL', 'phpMyAdmin'],
    flow: ['User Login', 'Role Auth', 'Service Browse', 'Booking', 'Admin Review', 'Confirmation'],
    architecture: 'Java backend with JDBC for direct MySQL connectivity. phpMyAdmin for database administration. Role-based routing between admin dashboard and end-user service portal.',
    github: 'https://github.com/Aniket28-4L/Get-Work-JDBC',
    color: '#ff6b4a',
    metrics: [
      { label: 'Access',   value: 'RBAC' },
      { label: 'Database', value: 'MySQL' },
      { label: 'UI',       value: 'Admin+User' },
    ],
    category: 'BACKEND + DATABASE',
  },
]

// ─── Experience ───────────────────────────────────────────────────────────────

export interface Experience {
  role: string
  company: string
  period: string
  type: string
  color: string
  points: string[]
}

export const EXPERIENCES: Experience[] = [
  {
    role: 'Associate Trainee Intern',
    company: 'AdmitWorks',
    period: 'July 2025 – November 2025',
    type: 'INTERNSHIP',
    color: '#f5a623',
    points: [
      'Transformed traditional workflows into AI-driven processes, improving efficiency and productivity',
      'Guided employees in adopting AI tools for task automation, content generation, and workflow optimization',
      'Supported automation initiatives and process optimization across daily operations',
      'Contributed to UI/UX design support for social media assets — visually consistent brand-aligned layouts',
      'Collaborated with cross-functional teams in a professional office environment on real-time business needs',
    ],
  },
  {
    role: 'Freelance Web Developer',
    company: 'Remote',
    period: 'November 2025 – January 2026',
    type: 'FREELANCE',
    color: '#ff6b4a',
    points: [
      'Collaborated directly with clients to gather requirements and translate them into functional web solutions',
      'Created and delivered end-to-end web applications — development, testing, and deployment',
      'Ensured timely project delivery maintaining code quality, security best practices, and performance',
      'Communicated progress, incorporated feedback, and provided post-delivery support',
    ],
  },
]

// ─── Certifications ───────────────────────────────────────────────────────────

export interface Certification {
  title: string
  issuer: string
  score?: string
  color: string
  icon: string
}

export const CERTIFICATIONS: Certification[] = [
  { title: 'Career Essentials in Software Development', issuer: 'Microsoft & LinkedIn Learning', color: '#38bdf8', icon: '◈' },
  { title: 'NPTEL — IoT Practitioners',                 issuer: 'NPTEL Online', score: '76%',  color: '#4ade80', icon: '◉' },
  { title: 'NPTEL — Cyber Security Practitioners',      issuer: 'NPTEL Online', score: '97%',  color: '#f5a623', icon: '▣' },
  { title: 'PL/SQL Programming',                        issuer: 'Infosys Springboard',          color: '#a78bfa', icon: '◆' },
  { title: 'Java Programming',                          issuer: 'Infosys Springboard',          color: '#fb923c', icon: '☕' },
]

// ─── Education ────────────────────────────────────────────────────────────────

export const EDUCATION = [
  { degree: 'B.Tech — Computer Engineering', institution: 'RK University, Rajkot, Gujarat', period: 'Expected May 2026', score: 'CGPA: 8.40 / 10.0', color: '#f5a623' },
  { degree: 'Class XII — CBSE', institution: 'Kendriya Vidyalaya No. 2', period: '2022', score: '66%', color: '#ff6b4a' },
  { degree: 'Class X — CBSE',   institution: 'Kendriya Vidyalaya No. 2', period: '2020', score: '77%', color: '#4ade80' },
]

// ─── Pipeline steps ───────────────────────────────────────────────────────────

export const PIPELINE_STEPS = [
  { id: 'code',         label: 'CODE',    icon: '⌨', color: '#4ade80', tool: 'Git / GitHub' },
  { id: 'build',        label: 'BUILD',   icon: '⚙', color: '#f5a623', tool: 'GitHub Actions' },
  { id: 'test',         label: 'TEST',    icon: '✓', color: '#fbbf24', tool: 'Jest / JUnit' },
  { id: 'containerize', label: 'DOCKER',  icon: '⬡', color: '#38bdf8', tool: 'Docker' },
  { id: 'provision',    label: 'ANSIBLE', icon: '⚡', color: '#ff6b4a', tool: 'Ansible' },
  { id: 'deploy',       label: 'DEPLOY',  icon: '↑', color: '#a78bfa', tool: 'K8s / Server' },
  { id: 'monitor',      label: 'MONITOR', icon: '◉', color: '#34d399', tool: 'Logs / Metrics' },
]

// ─── Engineering values ───────────────────────────────────────────────────────

export const VALUES = [
  { title: 'AUTOMATION FIRST', color: '#4ade80',  description: 'Every repeatable task gets scripted or pipelined. If I do it twice manually, I automate it.' },
  { title: 'RELIABILITY',      color: '#f5a623',  description: 'Design systems that recover from failure. Health checks, rollbacks, and idempotent deployments.' },
  { title: 'CONSISTENCY',      color: '#fbbf24',  description: 'Infrastructure as Code ensures every environment — dev, staging, prod — is identical and reproducible.' },
  { title: 'CONTINUOUS LEARNING', color: '#a78bfa', description: 'DevOps evolves fast. Certifications, hands-on projects, and curiosity keep skills sharp.' },
]

// ─── Terminal commands ────────────────────────────────────────────────────────

export const TERMINAL_COMMANDS: Record<string, string[]> = {
  help: [
    '┌──────────────────────────────────────────────┐',
    '│        ANIKET PANDEY — COMMAND CENTER        │',
    '└──────────────────────────────────────────────┘',
    '',
    '  whoami      → display profile summary',
    '  skills      → list all technical skills',
    '  projects    → show project clusters',
    '  experience  → view work history',
    '  certs       → list certifications',
    '  contact     → get contact details',
    '  education   → academic background',
    '  clear       → clear terminal',
    '',
  ],
  whoami: [
    '▶ ANIKET PANDEY',
    '  Role     : DevOps Practitioner',
    '  Location : Rajkot, Gujarat, India',
    '  Education: B.Tech CE — RK University | CGPA 8.40',
    '  Email    : aniketpandey4723k@gmail.com',
    '  GitHub   : github.com/Aniket28-4L',
    '  LinkedIn : linkedin.com/in/aniket-pandey-1b3a59291',
    '',
    '  "Automation-first mindset. Reducing manual work.',
    '   Improving operational efficiency."',
    '',
  ],
  skills: [
    '▶ TECHNICAL SKILL MATRIX',
    '',
    '  [CONTAINERS]    Docker           ██████████░░  82%',
    '  [ORCHESTRATION] Kubernetes       ████████░░░░  70%',
    '  [CLOUD]         AWS              ███████░░░░░  65%',
    '  [IAC]           Terraform        ████████░░░░  68%',
    '  [AUTOMATION]    Ansible          █████████░░░  72%',
    '  [CI/CD]         GitHub Actions   █████████░░░  75%',
    '  [CI/CD]         Jenkins          ███████░░░░░  60%',
    '  [OS]            Linux            ██████████░░  78%',
    '  [VCS]           Git & GitHub     ███████████░  85%',
    '  [SCRIPTING]     Bash / YAML      █████████░░░  70%',
    '  [LANG]          Java             ██████████░░  72%',
    '  [LANG]          JavaScript       ██████████░░  74%',
    '',
  ],
  projects: [
    '▶ PROJECT CLUSTERS',
    '',
    '  [1] Inventory Management System',
    '      Stack  : Angular, Node.js, MongoDB, Docker, Ansible, GitHub Actions',
    '      Period : Nov 2025 – Jan 2026',
    '      GitHub : github.com/Aniket28-4L/InventoryManagement',
    '',
    '  [2] GetWork Platform',
    '      Stack  : Java, JDBC, MySQL, phpMyAdmin',
    '      Period : Mar 2025 – Apr 2025',
    '      GitHub : github.com/Aniket28-4L/Get-Work-JDBC',
    '',
  ],
  experience: [
    '▶ WORK HISTORY',
    '',
    '  [1] Associate Trainee Intern @ AdmitWorks',
    '      Period : July 2025 – November 2025',
    '      → AI workflow transformation',
    '      → Process automation initiatives',
    '      → Cross-functional collaboration',
    '',
    '  [2] Freelance Web Developer @ Remote',
    '      Period : November 2025 – January 2026',
    '      → End-to-end web application delivery',
    '      → Client requirement gathering',
    '      → Code quality & deployment',
    '',
  ],
  certs: [
    '▶ CERTIFICATIONS & LEARNING',
    '',
    '  ◈ Career Essentials in Software Development',
    '    Microsoft & LinkedIn Learning',
    '',
    '  ◉ NPTEL — IoT Practitioners           76%',
    '  ▣ NPTEL — Cyber Security Practitioners  97%',
    '    NPTEL Online',
    '',
    '  ◆ PL/SQL Programming — Infosys Springboard',
    '  ☕ Java Programming   — Infosys Springboard',
    '',
  ],
  contact: [
    '▶ COMMUNICATION TERMINAL',
    '',
    '  📞 Phone    : +91-7984266324',
    '  ✉  Email    : aniketpandey4723k@gmail.com',
    '  ◈  LinkedIn : linkedin.com/in/aniket-pandey-1b3a59291',
    '  ⌥  GitHub   : github.com/Aniket28-4L',
    '  📍 Location : Rajkot, Gujarat, India',
    '',
    '  Status: ONLINE — Response within 24h',
    '',
  ],
  education: [
    '▶ ACADEMIC BACKGROUND',
    '',
    '  B.Tech — Computer Engineering',
    '  RK University, Rajkot, Gujarat',
    '  Expected: May 2026 | CGPA: 8.40 / 10.0',
    '',
    '  Class XII — CBSE',
    '  Kendriya Vidyalaya No. 2 | 2022 | 66%',
    '',
    '  Class X — CBSE',
    '  Kendriya Vidyalaya No. 2 | 2020 | 77%',
    '',
  ],
}
