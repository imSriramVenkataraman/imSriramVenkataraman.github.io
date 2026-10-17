// All site content lives in this file. Edit text here; the components only handle layout.

export const profile = {
  name: 'Sriram V',
  initials: 'SV',
  // Put your headshot in /public (e.g. public/sriram.jpg) and set photo: '/sriram.jpg'
  photo: '',
  role: 'DevOps Practice Lead',
  roleLine2: '& Multi-Cloud Platform Engineer',
  lede:
    'I design and run cloud platforms across Azure, AWS, GCP and OCI. Seven years of Kubernetes, OpenShift, Terraform and CI/CD work across 16+ enterprise projects in banking, healthcare, aviation, fintech and smart buildings. Based in Abu Dhabi, UAE.',
  location: 'Abu Dhabi, United Arab Emirates',
  locationShort: 'Abu Dhabi, UAE',
  email: 'sriram3.dubaiwork@gmail.com',
  linkedin: 'https://www.linkedin.com/in/imsriramvenkat/',
  linkedinLabel: 'linkedin.com/in/imsriramvenkat',
  github: '', // e.g. 'https://github.com/your-username' — leave empty to hide
  languages: 'English (fluent) · Russian (conversational) · Tamil',
  footerBlurb:
    'DevOps Practice Lead building multi-cloud platforms, IoT telemetry infrastructure and compliant GenAI systems.',
}

export const orbit = ['Azure', 'Kubernetes', 'AWS', 'Terraform', 'GenAI · Bedrock', 'OpenShift/ROSA', 'GCP', 'OCI']

export const stats = [
  { value: '7+', label: 'Years Experience' },
  { value: '16+', label: 'Enterprise Projects' },
  { value: '5', label: 'Cloud Certifications' },
  { value: '65+', label: 'Terraform Modules' },
]

export const about = [
  'I build and operate the infrastructure that product teams ship on. My work spans landing zones, Kubernetes and OpenShift platforms, cross-cloud migrations, disaster recovery and CI/CD pipelines, all written as code.',
  'Today I lead DevOps for a smart-building IoT platform on Azure, taking it from a single-region setup toward a multi-region, code-managed platform. Before that I built a HIPAA and GxP compliant GenAI platform on AWS, and led migrations like 292 servers and 35 TB from on-prem to AWS.',
]

export const certifications = [
  { name: 'AWS Solutions Architect – Professional', issuer: 'Amazon Web Services', status: 'Valid to Apr 2028' },
  { name: 'AWS DevOps Engineer – Professional', issuer: 'Amazon Web Services', status: 'Valid to Sep 2027' },
  { name: 'AWS Solutions Architect – Associate', issuer: 'Amazon Web Services', status: 'Valid to May 2027' },
  { name: 'GCP Professional Cloud Architect', issuer: 'Google Cloud', status: 'Valid to Jul 2027' },
  { name: 'GCP Associate Cloud Engineer', issuer: 'Google Cloud', status: 'Valid to Jan 2028' },
  { name: 'AZ-104 Azure Administrator', issuer: 'Microsoft', status: 'In Progress', wip: true },
]

export const focusAreas = [
  { title: 'Landing Zones & Governance', text: 'AWS Control Tower, Organizations and SCPs; Azure hub-spoke with Policy, Defender and Monitor.' },
  { title: 'Kubernetes & OpenShift', text: 'AKS, EKS, GKE, OKE and ROSA with Helm, GitOps (ArgoCD, FluxCD), KEDA and Linkerd mTLS.' },
  { title: 'Cloud Migrations & DR', text: 'Wave-based migrations with AWS MGN and Azure Migrate; SAP DR with AWS DRS at 60-minute RTO.' },
  { title: 'GenAI & IoT Platforms', text: 'Bedrock, LangChain and OpenSearch RAG on AWS; MQTT and Kafka telemetry pipelines on AKS.' },
]

export const experience = [
  {
    title: 'DevOps Practice Lead',
    company: 'Omniconn Development and Innovation Technologies',
    date: 'Oct 2026 – Present',
    context: 'Smart-building IoT platform on Azure: fire safety, BMS, energy and environmental monitoring across 500+ sites',
    bullets: [
      'First DevOps hire; own the platform end to end, from AKS and the MQTT/Kafka telemetry pipeline to cost and security',
      'Bringing the existing Azure estate under infrastructure as code and moving CI/CD to multi-stage, enterprise-grade pipelines',
      'Leading cloud cost optimisation, repository branching strategy and ISO 27001 readiness',
      'Planning the move from a single-region deployment to a multi-region, horizontally scaled platform',
    ],
    tags: ['Azure', 'AKS', 'Kafka', 'EMQX', 'Azure DevOps', 'IaC', 'ISO 27001'],
  },
  {
    title: 'Senior DevOps Engineer',
    company: 'One Vector Technologies',
    date: 'Dec 2025 – Oct 2026',
    context: 'GxP-ready, HIPAA-compliant enterprise GenAI platform for life sciences on AWS',
    bullets: [
      'Ran multi-service ECS Fargate infrastructure in Python CDK, with Go tooling for automation',
      'Built CodePipeline CI/CD with Docker builds, ECR pushes and ECS deploys with circuit breaker and rollback',
      'Deployed the GenAI stack: Bedrock, LangChain, LangFuse, n8n, MLflow, OpenSearch, ElastiCache and RDS PostgreSQL',
      'Designed a SharePoint OAuth 2.0 connector with Azure AD service principal auth and private VPC networking',
      'Owned HIPAA, SOC2, NIST 800-53 and GxP controls: audit trails, RBAC, KMS, Secrets Manager, CloudTrail',
    ],
    tags: ['ECS Fargate', 'AWS CDK', 'Bedrock', 'LangChain', 'OpenSearch', 'MCP'],
  },
  {
    title: 'Senior Engineer – Cloud Delivery',
    company: 'Redington Limited',
    date: 'Dec 2024 – Dec 2025',
    context: 'Cross-cloud migrations, landing zones, OpenShift/ROSA and GenAI deployments',
    bullets: [
      'Led a full airline platform re-architecture on AWS: EKS, ECS, MSK, Transit Gateway, Direct Connect, WAF and Control Tower',
      'Migrated 292 servers and 35 TB on-prem to AWS under the MAP program at 15-minute RPO and 60-minute RTO',
      'Led an AWS to Azure fintech migration: 21 servers and 45 TB, hub-spoke VNet, AKS, Front Door and Key Vault',
      'Executed AWS to GCP AI/ML migration across 20+ services, and a GCP to AWS microservices move with an S3 lakehouse',
      'Implemented ROSA clusters in STS mode with OpenShift GitOps and Pipelines; built 30+ Azure Terraform modules',
    ],
    tags: ['AWS MAP', 'Azure Migrate', 'ROSA', 'AKS', 'Vertex AI', 'Terraform'],
  },
  {
    title: 'Senior DevOps Engineer',
    company: 'Redington Limited',
    date: 'Nov 2023 – Dec 2024',
    context: 'AWS, Azure, GCP and OpenShift platform engineering, DR and CI/CD',
    bullets: [
      'Ran production Kubernetes on EKS, GKE and OpenShift with Helm, FluxCD, Linkerd, Kubecost, Prometheus and Grafana',
      'Implemented SAP DR on AWS with DRS pilot light and MGN warm standby, plus S2S VPN across AWS, Azure and on-prem',
      'Provisioned AWS landing zones with Control Tower, SCPs, IAM Identity Center, GuardDuty and Security Hub',
      'Cut deployment time by 50% across GitLab CI, Jenkins and Azure DevOps; wrote 35+ Terraform modules',
    ],
    tags: ['EKS', 'GKE', 'OpenShift', 'AWS DRS', 'FluxCD'],
  },
  {
    title: 'AWS DevOps Engineer',
    company: 'Opulence Technosoft',
    date: 'Jul 2022 – Nov 2023',
    context: 'E-commerce, energy and legal-services clients',
    bullets: [
      'Managed the full AWS stack and improved EKS availability by 40%',
      'Built Azure DevOps YAML and Jenkins + SonarQube pipelines, cutting deployment errors by 20%',
      'Wrote Terraform and Ansible IaC that reduced setup time by 30%; built Go deployment tooling',
    ],
    tags: [],
  },
  {
    title: 'DevOps Associate',
    company: 'Opulence Technosoft',
    date: 'Aug 2019 – Jun 2022',
    context: 'Two years on an energy-sector project with Russian-speaking engineering teams',
    bullets: [
      'Built Jenkins, Maven and Azure DevOps pipelines; deployed to OpenShift via Tekton and BuildConfigs',
      'Wrote Go, Python and Shell automation; ran PostgreSQL and MySQL administration',
    ],
    tags: [],
  },
]

export const projects = [
  {
    kind: 'IoT · Azure',
    title: 'Smart-Building Telemetry Platform',
    text: 'Fire-safety and building telemetry from 500+ sites flowing through MQTT, EMQX and Kafka into a private AKS platform, being moved to IaC and multi-region.',
    metrics: [['500+', 'sites'], ['AKS', 'private']],
  },
  {
    kind: 'GenAI · AWS',
    title: 'Compliant GenAI Platform',
    text: 'Life-sciences AI platform with Bedrock LLMs, LangChain agents, LangFuse observability and OpenSearch RAG, built to HIPAA, SOC2 and GxP controls.',
    metrics: [['4', 'frameworks'], ['ECS', 'Fargate']],
  },
  {
    kind: 'AWS MAP · Migration',
    title: '292-Server Data Center Exit',
    text: 'Wave-based on-prem to AWS migration with MGN, a governed landing zone, Well-Architected review and a Cloud CoE.',
    metrics: [['35 TB', 'moved'], ['15m', 'RPO'], ['60m', 'RTO']],
  },
  {
    kind: 'AWS · Aviation',
    title: 'Airline Platform Re-Architecture',
    text: 'Seven workflows rebuilt on EKS, ECS, RDS Multi-AZ, MSK, Cognito, CloudFront and Direct Connect under a Control Tower landing zone.',
    metrics: [['7', 'workflows'], ['Multi-AZ', '']],
  },
  {
    kind: 'AWS → Azure · Fintech',
    title: 'Fintech Cloud Move',
    text: 'Three-phase migration with Azure Migrate, AzCopy and DMS into a hub-spoke VNet with AKS, Azure Firewall, Front Door and Key Vault.',
    metrics: [['21', 'servers'], ['45 TB', ''], ['15-day', 'hypercare']],
  },
  {
    kind: 'Red Hat · AWS',
    title: 'ROSA Cluster Implementation',
    text: 'Managed OpenShift on AWS in STS mode: machine pools, upgrades, day-2 operations, OpenShift GitOps, Tekton pipelines and etcd backup.',
    metrics: [['6 yrs', 'OpenShift'], ['STS', 'mode']],
  },
]

// years: drives the progress bar (max 7)
export const skills = [
  { group: 'Cloud Platforms', years: 7, items: ['Azure', 'AWS', 'GCP', 'OCI'] },
  { group: 'Kubernetes', years: 6, items: ['AKS', 'EKS', 'GKE', 'OKE', 'Helm', 'KEDA', 'Linkerd', 'Kubecost'] },
  { group: 'OpenShift / ROSA', years: 6, items: ['IPI/UPI', 'OVN-K8s', 'Tekton', 'OpenShift GitOps', 'SCC'] },
  { group: 'Infrastructure as Code', years: 6, items: ['Terraform (65+ modules)', 'Bicep', 'AWS CDK', 'CloudFormation', 'Ansible'] },
  { group: 'CI/CD & GitOps', years: 6, items: ['Azure DevOps', 'Jenkins', 'GitLab CI', 'GitHub Actions', 'CodePipeline', 'ArgoCD', 'FluxCD'] },
  { group: 'Data & Streaming', years: 6, items: ['PostgreSQL', 'Kafka/MSK', 'EMQX/MQTT', 'Cassandra', 'Aurora', 'DynamoDB', 'ElastiCache'] },
  { group: 'Go (Golang)', years: 4, items: ['Deployment tools', 'Platform services', 'CLI tooling'] },
  { group: 'GenAI & MLOps', years: 2, items: ['Bedrock', 'LangChain', 'LangFuse', 'n8n', 'MLflow', 'OpenSearch RAG', 'Vertex AI', 'SageMaker'] },
  { group: 'Security & Observability', years: 5, items: ['Defender for Cloud', 'GuardDuty', 'Security Hub', 'SonarQube', 'Trivy', 'Prometheus', 'Grafana', 'Datadog'] },
]

export const nav = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact']
