// Single source of truth for homepage copy.
// Ported verbatim from the designer's reference build, synced via the
// claude_design MCP from project "Designing Nomos Authority Platform"
// (Nomos Site.dc.html + Artifact.dc.html). Do not paraphrase — if the
// designer file changes, update this file to match it.

export const SITE = {
  title: '.nomos — The Authority Layer',
  description:
    'Authority becomes computable. The next primitive: authority that machines can understand, enforce, and humans can verify.',
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

export const PRIMITIVE = {
  number: '03',
  eyebrow: 'THE PRIMITIVE',
  headline: 'The .nomos artifact.',
  dek: 'A new primitive for institutional authority.',
  nodes: ['Institutional Authority', '.nomos Artifact', 'Deterministic Verification', 'Authorized Execution'],
  containsLabel: 'A .nomos artifact contains',
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
  number: '04',
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
  eyebrow: 'THE ECOSYSTEM',
  headline: 'One protocol. Multiple layers.',
  products: [
    {
      name: 'NOMOS Studio',
      tagline: 'Create .nomos artifacts.',
      body: 'Transform institutional policies, regulations, and logic into machine-readable authority.',
    },
    {
      name: 'NOMOS Registry',
      tagline: 'The system of record for authority.',
      body: 'Version. Govern. Distribute. Audit.',
    },
    {
      name: 'NOMOS Guard',
      tagline: 'The enforcement layer.',
      body: 'Verify whether an action is authorized before execution.',
    },
    {
      name: 'NOMOS Exchange',
      tagline: 'The marketplace for trusted authority artifacts.',
      body: '',
    },
  ],
};

export const EXCHANGE_THESIS = {
  label: 'A new economy of authority',
  paragraphs: [
    'Every institution contains thousands of rules.',
    'Today they exist as PDFs, manuals, and internal knowledge.',
    'Tomorrow they become portable authority artifacts.',
    '.nomos creates the infrastructure for discovering, verifying, and exchanging them.',
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
    rules: ['treatment.requiresLicense', 'amount.max=50000'],
    conditions: { region: 'UAE', validUntil: '2027-01-01' },
    provenance: { issuer: 'KHDA', timestamp: '2026-01-14T00:00:00Z' },
    signature: '3f9ab7c2e4d1f0a89be6c5d3a12ef9e21c',
  },
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
  filename: 'khda-treatment-authorization.nomos.json',
  sealedLabel: '✓ SEALED',
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
    { label: 'Manifesto', href: '/manifesto' },
    { label: 'Docs', href: '/docs' },
    { label: 'Console', href: '/console' },
    { label: 'Contact', href: '/contact' },
    { label: 'GitHub', href: 'https://github.com/nomos-spec/spec' },
  ],
  verification: {
    label: 'Verify a NOMOS signing key',
    href: 'https://nomosprotocol.com/.well-known/nomos-signing-keys',
  },
};
