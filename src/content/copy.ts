// Single source of truth for homepage copy.
// Ported verbatim from the designer's reference build, synced via the
// claude_design MCP from project "Designing Nomos Authority Platform"
// (Nomos Site.dc.html + Artifact.dc.html). Do not paraphrase — if the
// designer file changes, update this file to match it.

export const SITE = {
  title: '.nomos — The Protocol for Computable Authority',
  description:
    'Turn institutional policy into sealed, machine-executable .nomos artifacts. Deterministic verification and cryptographic proof for every AI agent decision — authority machines can understand, enforce, and humans can verify.',
};

export const NAV_LINKS = [
  { label: 'Authority Stack', href: '#stack', accent: false },
  { label: 'The Artifact', href: '/artifact', accent: true },
  { label: 'Platform', href: '#platform', accent: false },
  { label: 'Verify', href: '#verify', accent: false },
];

export const HERO = {
  eyebrow: '.NOMOS — The protocol for computable authority.',
  headline: 'The next era of civilization requires computable authority.',
  body: [
    'For centuries, authority lived in documents, procedures, and human interpretation.',
    'Execution is becoming computational.',
    'Authority must become computable too.',
  ],
};

export const PROBLEM = {
  number: '01',
  eyebrow: 'THE PROBLEM',
  headline: 'Civilization runs on authority.',
  examples: [
    'A bank approves a loan.',
    'A government issues a license.',
    'A hospital authorizes treatment.',
    'A company authorizes a transaction.',
  ],
  pullquoteLead: 'Behind every action is the same question:',
  pullquoteQuestion: 'Who had the authority to make this decision?',
  body: [
    'For centuries, authority existed in documents, procedures, organizational structures, and human judgment.',
    'That worked because humans were the execution layer.',
    'But authority was never portable, machine-readable, or independently verifiable.',
    'Now machines execute decisions.',
    'Authority must evolve.',
  ],
};

export const SHIFT = {
  number: '02',
  eyebrow: 'THE SHIFT',
  headline: 'From intelligence to authority.',
  produces: {
    label: 'AI produces',
    items: ['Reason.', 'Generate.', 'Recommend.', 'Optimize.'],
  },
  cannotKnow: {
    label: 'But it cannot know',
    items: [
      'Who gave permission.',
      'Which rules apply.',
      'Whether an action is within authority.',
      'Whether it can be independently verified later.',
    ],
  },
  comparison: [
    { label: 'Intelligence answers', question: 'What could be done?', accent: false },
    { label: 'Authority answers', question: 'What is allowed to be done?', accent: true },
  ],
  closer: '.nomos provides the missing layer.',
};

export const HIDDEN_LAYER = {
  number: '03',
  eyebrow: 'THE HIDDEN LAYER',
  headline: 'Intelligence cannot scale without formalized logic.',
  body: [
    'Every organization runs on an invisible decision system.',
    'Rules. Exceptions. Judgment. Risk boundaries.',
    'This operational logic determines what actually happens.',
    'But today, most of it exists informally — inside documents, conversations, and human memory.',
    'When intelligence accelerates execution, informal logic becomes systemic risk.',
  ],
  pullquote: 'If logic is informal, entropy is invisible.',
  before: ['Informal Logic', 'Hidden Entropy', 'Unpredictable Decisions', 'Unsafe Autonomy'],
  after: ['.nomos', 'Formal Logic', 'Verifiable Authority', 'Bounded Autonomy'],
  closer: 'Operational Logic Infrastructure is the discipline. .nomos is the artifact it produces.',
  paperLink: { label: 'Read the full paper', href: '/research' },
};

export const PRIMITIVE = {
  number: '04',
  eyebrow: 'THE PRIMITIVE',
  headline: 'The .nomos artifact.',
  dek: '.nomos turns authority into an artifact.',
  nodes: ['Institutional Authority', '.nomos Artifact', 'Deterministic Verification', 'Authorized Execution'],
  containsLabel: "What's inside",
  stack: [
    { name: 'AUTHORITY', desc: 'Who can act' },
    { name: 'RULES', desc: 'What applies' },
    { name: 'CONDITIONS', desc: 'When valid' },
    { name: 'CONSTRAINTS', desc: 'Boundaries' },
    { name: 'PROVENANCE', desc: 'Chain of custody' },
    { name: 'PROOF', desc: 'Verify' },
  ],
  pullquote: 'A portable representation of institutional intent.',
  specLink: { label: 'View the full artifact spec', href: '/artifact' },
};

export const WHY_NOW = {
  number: '05',
  eyebrow: 'WHY NOW',
  headline: 'Every major transition required new trust infrastructure.',
  rows: [
    { name: 'Written law', note: 'Enabled coordination beyond memory.', accent: false },
    { name: 'Double-entry bookkeeping', note: 'Enabled commerce beyond personal trust.', accent: false },
    { name: 'Standardized measures', note: 'Enabled global trade.', accent: false },
    { name: 'The Internet', note: 'Enabled information exchange at planetary scale.', accent: false },
    {
      name: 'Autonomous systems',
      note: 'Require authority that machines can understand and humans can verify.',
      accent: true,
    },
  ],
  digitizedLead: 'Humanity digitized:',
  digitized: ['Information.', 'Communication.', 'Commerce.', 'Identity.', 'Intelligence.'],
  digitizedGap: 'But authority remained trapped in documents.',
  digitizedClose: '.nomos makes authority computable.',
};

export const AUTHORITY_STACK = {
  eyebrow: 'THE AUTHORITY STACK',
  headline: '.nomos is not trying to solve everything. It owns one layer.',
  layers: [
    { name: 'Authority', desc: 'Permission to act', badge: '.nomos', accent: true },
    { name: 'Reasoning', desc: 'Validity of conclusions', badge: null, accent: false },
    { name: 'Evidence', desc: 'Truth of inputs', badge: null, accent: false },
  ],
  closer: 'Different layers. Different primitives.',
};

export const PLATFORM = {
  number: '06',
  eyebrow: 'THE ECOSYSTEM',
  headline: 'One protocol. Multiple layers.',
};

export const STUDIO = {
  index: '01',
  tag: 'NOMOS STUDIO',
  title: 'Create Authority',
  layerLabel: 'The creation layer',
  body: 'Transform institutional intent into a .nomos artifact. Studio is like a compiler for authority.',
  input: ['Policies', 'Regulations', 'Contracts', 'Procedures', 'Institutional logic'],
  output: 'Signed .nomos artifact',
  exampleBefore:
    '"Private schools in Dubai may increase tuition fees only with KHDA approval, within the cap set by the school\'s inspection rating."',
  exampleAfter: `{
  authority: "KHDA School Fee Framework",
  rule: "feeIncrease.approval",
  constraint: "increase <= ratingCap",
  condition: "khdaApprovalRequired"
}`,
  summary: 'Studio = create authority',
};

export const REGISTRY = {
  index: '02',
  tag: 'NOMOS REGISTRY',
  title: 'Govern Authority',
  layerLabel: 'The system of record for the authority graph',
  body: 'Versioning, lineage, inheritance resolution, approval workflows, distribution, audit history, lifecycle management.',
  analogy: 'Git manages code lineage. npm resolves dependencies. Registry does both — for authority.',
  versionChain: ['Policy v1.0', 'Policy v1.1', 'Policy v2.0'],
  extendsLabel: 'The other axis: inheritance',
  extendsChain: ['Claims Agent Authority', 'Bank AI Policy', 'Central Bank Guidance', 'Federal AI Law'],
  extendsNote:
    'Every artifact can declare what it extends. The Registry resolves the chain — so when a parent changes, one query answers what no institution can answer today: which policies and agents downstream are affected, and which are now in contradiction.',
  questions: [
    'Which authority is currently active?',
    'Who can use it?',
    'Who approved it?',
    'What changed?',
    'What does it extend?',
    'If this changes, what breaks downstream?',
  ],
  summary: 'Registry = govern authority',
};

export const GUARD = {
  index: '03',
  tag: 'NOMOS RUNTIME / GUARD',
  title: 'Execute Authority',
  layerLabel: 'The missing layer — the agent era creates this requirement',
  body: 'Guard sits between an autonomous system and action: is this action permitted by a valid authority artifact?',
  flowBoxes: ['Agent', 'NOMOS Guard', 'Tool execution'],
  flowLabels: ['"Can I do this?"', '.nomos verification'],
  summary: 'Guard = enforce authority',
  mcpDetail: {
    label: 'How it actually works',
    body: 'Guard is an MCP (Model Context Protocol) integration. It sits in front of an agent\'s MCP tool calls and checks each one against a sealed .nomos artifact before the call is allowed to execute — not a generic policy engine, a specific enforcement point in the MCP tool-call path.',
    install: 'npx nomos-guard',
    installNote: 'Put a sealed policy in front of an MCP tool call in under a minute. No account, no setup.',
  },
  paths: {
    label: 'Two ways to govern',
    direct: {
      name: 'Path 1 — Direct integration',
      body: 'Your agent calls NOMOS explicitly, through three tools: verify a decision against a sealed artifact, turn a policy document into one, or audit a policy for contradictions before you seal it.',
      tools: ['verify_decision', 'generate_governance', 'detect_contradictions'],
    },
    gateway: {
      name: 'Path 2 — NOMOS Guard (the gateway)',
      body: 'Wrap an MCP server you already run — GitHub, Postgres, Stripe, any of them — with zero code changes to the server itself. Guard sits in the execution path and checks every tool call before it reaches the real system.',
      examples: [
        'GitHub MCP — block force-pushes to main, gate repo deletion',
        'Postgres MCP — deny destructive queries against production',
        'Stripe MCP — escalate refunds above your approval threshold',
      ],
      wrapCommand: 'npx nomos-guard \\\n  --artifact pub_database_policy \\\n  -- postgres-mcp-server',
    },
  },
  transcript: {
    label: 'An unrestricted agent, governed',
    lines: [
      { who: 'agent', text: 'Clean up the old customer records — drop the table.' },
      { who: 'call', text: 'DROP TABLE customers;' },
      { who: 'guard', text: 'checking pub_database_policy…' },
      { who: 'verdict', text: 'DENIED by governance policy' },
      { who: 'rule', text: 'Rule R1 — Production data destruction is prohibited without dual approval.' },
      { who: 'hash', text: 'Audit hash: sha256:8f3a2c1e9d04b7f6…' },
      { who: 'agent', text: "Understood — I can't perform that action. Escalating to your team instead." },
    ],
    note: 'Illustrative — MCP servers run over stdio, not a browser session, so this is a recorded transcript rather than a live call.',
  },
};

export const EXCHANGE = {
  index: '04',
  tag: 'NOMOS EXCHANGE',
  title: 'Discover and Exchange Authority',
  layerLabel: 'The network layer, not just a marketplace',
  analogyList: [
    { platform: 'AWS Marketplace', product: 'software capabilities', accent: false },
    { platform: 'App Store', product: 'applications', accent: false },
    { platform: 'npm', product: 'code packages', accent: false },
    { platform: 'Exchange', product: 'authority packages', accent: true },
  ],
  publisherExamples: [
    { publisher: 'A government publishes', artifact: 'Building Permit Authority Artifact' },
    { publisher: 'A bank publishes', artifact: 'Loan Approval Authority Artifact' },
    { publisher: 'A company publishes', artifact: 'Procurement Approval Authority Artifact' },
  ],
  verbs: ['Discover', 'License', 'Subscribe', 'Fork', 'Adopt'],
  summary: 'Exchange = distribute authority',
};

export const ECOSYSTEM_SUMMARY = {
  headers: ['Layer', 'Function', 'Simple phrase'],
  rows: [
    ['.nomos', 'Protocol', 'The authority primitive'],
    ['Studio', 'Creation', 'Create authority'],
    ['Registry', 'Governance', 'Manage authority'],
    ['Runtime / Guard', 'Enforcement', 'Verify authority'],
    ['Exchange', 'Distribution', 'Exchange authority'],
  ],
};

export const AUDIENCES = {
  governments: {
    id: 'audiences',
    eyebrow: 'GOVERNMENTS',
    headline: 'The foundation for accountable autonomous administration.',
    body: 'A ministry policy becomes a verifiable artifact. A regulatory decision becomes independently auditable.',
    list: ['Which authority it operated under.', 'Which rule it applied.', 'Why the action was permitted.'],
  },
  enterprises: {
    id: 'enterprises',
    eyebrow: 'ENTERPRISES',
    headline: 'From AI assistants to governed AI operators.',
    flow: {
      today: ['Customer', 'AI', 'Answer'],
      tomorrow: ['Customer', 'AI', '.nomos', 'Authorized Action'],
    },
  },
  developers: {
    id: 'developers',
    eyebrow: 'DEVELOPERS',
    headline: 'The authority layer for agents.',
    quote: 'Are you allowed to do this?',
  },
};

export const VERIFY = {
  eyebrow: 'TRY IT',
  headline: 'Verify an artifact.',
  subhead: 'Drop a .nomos file. Instantly verify it. In the browser. No signup. No API key. No sales call.',
  filename: 'artifact.nomos.json',
  loadSampleLabel: 'Load sample',
  verifyLabel: 'Verify Artifact',
  placeholder: 'Paste .nomos JSON here, or drop a file...',
  emptyState: 'Verification output will appear here.',
  checkingLabel: 'Checking .nomos artifact...',
  checklistLabels: {
    authority: 'Authority',
    ruleMatch: 'Rule match',
    constraints: 'Constraints',
    signature: 'Signature',
  },
  decisionAuthorized: 'DECISION: AUTHORIZED',
  decisionDenied: 'DECISION: DENIED',
  sampleArtifact: {
    authority: 'KHDA',
    version: '2.1.0',
    issuedBy: 'Knowledge & Human Development Authority',
    rules: ['school.requiresValidPermit', 'feeIncrease.requiresApproval', 'feeIncrease.max=5.2'],
    conditions: { jurisdiction: 'Dubai Private Schools', academicYear: '2026-2027' },
    provenance: { issuer: 'KHDA', timestamp: '2026-01-14T00:00:00Z' },
    signature: '3f9ab7c2e4d1f0a89be6c5d3a12ef9e21c',
  },
  sampleCaption:
    'KHDA — the Knowledge and Human Development Authority — regulates private schools in Dubai. This artifact seals its school-fee rules: a tuition increase is only authorized with KHDA approval, within the permitted cap.',
};

export const CLOSING = {
  beats: [
    'The internet made information transferable.',
    'AI made intelligence scalable.',
    '.nomos makes authority executable.',
  ],
  headline: 'Authority that can be executed by machines and verified by anyone.',
  timeline: 'Written law · Accounting · Standards · Networks · .nomos',
  tagline: 'That is what .nomos provides.',
};

export const ARTIFACT_PAGE = {
  eyebrow: 'THE UNIT OF THE PROTOCOL',
  headline: 'The .nomos Artifact.',
  dek: 'A portable, cryptographically sealed representation of institutional intent — the thing that survives, is transferred, and is verified.',
  filename: 'khda-school-fee-authorization.nomos.json',
  sealedLabel: '✓ SEALED',
  exampleCaption:
    'A real-world shape: KHDA — the Knowledge and Human Development Authority — regulates private schools in Dubai. Every school fee increase requires KHDA approval, capped by the school\'s inspection rating. This artifact is that rule, made computable: portable, machine-checkable, and verifiable by anyone.',
  fields: [
    { name: 'authority', desc: 'The institution asserting this rule — a ministry, a regulator, a company, a system of record.' },
    { name: 'rules', desc: 'The deterministic conditions that must hold for an action to be permitted.' },
    { name: 'conditions', desc: 'The scope in which the rule applies — jurisdiction, time window, context.' },
    { name: 'provenance', desc: 'Who issued the artifact and when — the chain of institutional custody.' },
    {
      name: 'signature',
      desc: 'The cryptographic seal binding every field above — tamper evident, independently verifiable, without needing to trust .nomos itself.',
    },
  ],
  fieldRefEyebrow: 'FIELD REFERENCE',
  fieldRefHeadline: 'Every field, explained.',
  closingQuote: 'This is the thing that survives — the artifact, not the company that made it possible.',
  tryVerifyingLabel: 'Try verifying this artifact',
};

export const FOOTER = {
  copyright: '© SafeHaven LLC — Steward of the .nomos protocol',
  links: [
    { label: 'Artifact', href: '/artifact' },
    { label: 'Research', href: '/research' },
    { label: 'Manifesto', href: '/manifesto' },
    { label: 'Docs', href: '/docs' },
    { label: 'Console', href: '/console' },
    { label: 'Contact', href: '/contact' },
    { label: 'GitHub', href: 'https://github.com/nomos-spec/spec' },
    { label: 'nomosprotocol.com', href: 'https://nomosprotocol.com' },
  ],
  verification: {
    label: 'Verify a NOMOS signing key',
    href: 'https://nomosprotocol.com/.well-known/nomos-signing-keys',
  },
};
