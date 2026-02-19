import 'dotenv/config'
import { createClient } from '@sanity/client'

// Create client with direct credentials
const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Helper function to generate unique keys
function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}

// Helper function to validate the schema
function validateSchema(document: any): boolean {
  // Check required fields
  if (!document._type) return false
  if (!document.title) return false
  if (!document.slug) return false
  
  // Add more validation as needed
  
  return true
}

async function createPage() {
  console.log('Creating CRR/CRD Gap Analyse Prozesse Systeme page...')
  
  // Check if document already exists
  const existingDoc = await client.fetch('*[_id == "crr-crd-gap-analyse-prozesse-systeme"][0]')
  
  if (existingDoc) {
    console.log('Document already exists. Skipping creation.')
    return existingDoc
  }
  
  const document = {
    _id: 'crr-crd-gap-analyse-prozesse-systeme',
    _type: 'servicePage',
    title: 'CRR/CRD Gap-Analyse Prozesse & Systeme',
    slug: {
      _type: 'slug',
      current: 'regulatory-compliance-management/crr-crd/crr-crd-readiness/crr-crd-gap-analyse-prozesse-systeme'
    },
    parent: {
      _type: 'reference',
      _ref: 'crr-crd-readiness' // Reference to the direct parent page
    },
    references: {
      _type: 'object',
      topLevelParent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management' // Reference to the top level category
      }
    },
    heroSection: {
      _type: 'object',
      headline: 'CRR/CRD Gap-Analyse für Prozesse & Systeme',
      subheadline: 'Fundierte Bewertung und strategische Optimierung Ihrer Prozesse und Systeme für die CRR/CRD-Compliance',
      heroImage: {
        _type: 'image',
        alt: 'CRR/CRD Gap Analyse für Prozesse und Systeme'
      }
    },
    overview: {
      _type: 'object',
      headline: 'CRR/CRD Gap-Analyse: Prozesse & Systeme strategisch für regulatorische Anforderungen optimieren',
      text: 'Die wachsende Komplexität der Capital Requirements Regulation (CRR) und Capital Requirements Directive (CRD) stellt Finanzinstitute vor die Herausforderung, eine Vielzahl von prozessualen und systemischen Anpassungen vorzunehmen. Eine strukturierte Gap-Analyse der bestehenden Prozesslandschaft und IT-Infrastruktur ist der erste entscheidende Schritt zur effektiven Umsetzung der regulatorischen Anforderungen.\n\nUnsere spezialisierte Gap-Analyse identifiziert methodisch Lücken zwischen dem aktuellen Zustand Ihrer Prozesse und Systeme und den spezifischen Anforderungen der CRR/CRD. Wir bewerten nicht nur die Compliance-Aspekte, sondern berücksichtigen dabei auch operative Effizienz und strategische Ausrichtung. Das Ergebnis ist ein umsetzungsorientierter Maßnahmenplan, der klare Prioritäten setzt und die Grundlage für eine erfolgreiche Implementierung bildet.\n\nGemeinsam mit Ihnen etablieren wir eine solide Basis für die nachhaltige CRR/CRD-Compliance, die regulatorische Sicherheit mit operativer Exzellenz verbindet und durch eine effiziente Systemarchitektur unterstützt wird.'
    },
    approach: {
      _type: 'object',
      headline: 'Unser Ansatz',
      text: 'Für die CRR/CRD Gap-Analyse von Prozessen und Systemen setzen wir auf einen strukturierten, mehrstufigen Ansatz, der sowohl fachliche als auch technische Aspekte umfassend berücksichtigt.',
      steps: [
        {
          _type: 'object',
          _key: generateKey('step', 1),
          headline: 'Anforderungsanalyse & Scoping',
          text: 'Identifikation und Priorisierung der relevanten CRR/CRD-Anforderungen mit Fokus auf prozessuale und systemische Implikationen. Gemeinsame Definition des Analysescopes unter Berücksichtigung der spezifischen Geschäftsmodelle, Risikoprofile und strategischen Prioritäten.'
        },
        {
          _type: 'object',
          _key: generateKey('step', 2),
          headline: 'Ist-Analyse der Prozesslandschaft',
          text: 'Detaillierte Erfassung und Dokumentation der bestehenden Prozesse mit Schwerpunkt auf regulatorisch relevanten Abläufen. Prozessmodellierung und Analyse der End-to-End-Prozesse mit Fokus auf Schnittstellen, Datenflüsse und Kontrollpunkte. Identifikation von Prozesseigentümern und Verantwortlichkeiten in der aktuellen Organisationsstruktur.'
        },
        {
          _type: 'object',
          _key: generateKey('step', 3),
          headline: 'System- & Datenarchitekturanalyse',
          text: 'Bestandsaufnahme der relevanten IT-Systeme und deren Zusammenspiel im Kontext der CRR/CRD-Anforderungen. Analyse der Datenarchitektur mit Fokus auf Datenquellen, -flüsse, -qualität und -governance. Bewertung der Systemfähigkeiten hinsichtlich Reporting, Berechnung, Kontrolle und Nachvollziehbarkeit.'
        },
        {
          _type: 'object',
          _key: generateKey('step', 4),
          headline: 'Gap-Identifikation & -Bewertung',
          text: 'Systematischer Soll-Ist-Vergleich mit klarer Herausarbeitung der Lücken in Prozessen und Systemen. Kategorisierung der Gaps nach Kritikalität, Komplexität und regulatorischer Relevanz. Interdependenzanalyse zur Identifikation von Wechselwirkungen zwischen verschiedenen Gaps.'
        },
        {
          _type: 'object',
          _key: generateKey('step', 5),
          headline: 'Maßnahmenplanung & Roadmap-Entwicklung',
          text: 'Erarbeitung konkreter Maßnahmen zur Schließung der identifizierten Gaps mit klaren Verantwortlichkeiten. Priorisierung der Maßnahmen nach regulatorischer Dringlichkeit, Umsetzungskomplexität und Ressourcenaufwand. Entwicklung einer integrierten Implementierungsroadmap mit realistischen Zeitplänen und Meilensteinen.'
        },
        {
          _type: 'object',
          _key: generateKey('step', 6),
          headline: 'Management-Reporting & Stakeholder-Kommunikation',
          text: 'Aufbereitung der Analyseergebnisse und Handlungsempfehlungen in zielgruppengerechten Formaten. Präsentation der Gap-Analyse und Roadmap für verschiedene Stakeholder-Gruppen. Unterstützung bei der Kommunikation mit Aufsichtsbehörden und Governance-Gremien.'
        }
      ]
    },
    testimonial: {
      _type: 'object',
      quote: 'Die Gap-Analyse von ADVISORI hat uns nicht nur geholfen, regulatorische Lücken zu identifizieren, sondern auch wertvolle Optimierungspotenziale in unseren Kernprozessen aufgezeigt. Der strukturierte Ansatz und die praxisnahen Handlungsempfehlungen haben uns ermöglicht, unsere CRR/CRD-Implementierung effizienter und nachhaltiger zu gestalten.',
      author: 'Leiter Compliance & Regulatory Affairs, Mittelgroße Regionalbank',
      role: 'Leiter Compliance & Regulatory Affairs, Mittelgroße Regionalbank'
    },
    services: [
      {
        _type: 'object',
        _key: generateKey('service', 1),
        title: 'Regulatory Gap Assessment',
        description: 'Umfassende Analyse der regulatorischen Anforderungen aus CRR/CRD und deren Implikationen für Prozesse und Systeme. Detaillierte Bewertung der Compliance-Lücken mit klarer Priorisierung und Handlungsempfehlungen.'
      },
      {
        _type: 'object',
        _key: generateKey('service', 2),
        title: 'Prozessoptimierung & -design',
        description: 'Neugestaltung und Optimierung von Schlüsselprozessen zur Erfüllung regulatorischer Anforderungen bei gleichzeitiger Steigerung der operativen Effizienz. Integration von Kontrollmechanismen und Governance-Strukturen in die Prozesslandschaft.'
      },
      {
        _type: 'object',
        _key: generateKey('service', 3),
        title: 'IT-Architekturberatung',
        description: 'Entwicklung einer CRR/CRD-konformen Zielarchitektur für Systeme und Datenflüsse. Beratung bei der Auswahl und Integration geeigneter IT-Lösungen zur Unterstützung regulatorischer Prozesse.'
      },
      {
        _type: 'object',
        _key: generateKey('service', 4),
        title: 'Datenmanagement & -governance',
        description: 'Konzeption und Implementierung robuster Datenmanagement-Frameworks für regulatorische Anforderungen. Etablierung von Datenqualitätskontrollen und Governance-Prozessen zur Sicherstellung regulatorischer Compliance.'
      },
      {
        _type: 'object',
        _key: generateKey('service', 5),
        title: 'Implementierungsplanung & PMO',
        description: 'Entwicklung detaillierter Implementierungspläne mit klaren Meilensteinen und Ressourcenzuordnung. Etablierung eines spezialisierten Project Management Office (PMO) zur Koordination komplexer regulatorischer Inititativen.'
      },
      {
        _type: 'object',
        _key: generateKey('service', 6),
        title: 'CRR/CRD Testing & Validation',
        description: 'Entwicklung und Durchführung von Tests zur Validierung der implementierten Prozesse und Systeme. Unabhängige Überprüfung der Compliance-Konformität und operativen Effektivität der umgesetzten Maßnahmen.'
      }
    ]
  }
  
  // Validate the schema before creation
  console.log('Running schema validation...')
  if (!validateSchema(document)) {
    throw new Error('Document validation failed')
  }
  
  // Create the document
  console.log('Committing transaction...')
  try {
    const result = await client.create(document)
    console.log('✅ CRR/CRD Gap Analyse Prozesse Systeme page created successfully')
    return result
  } catch (error) {
    console.error('Error creating document:', error)
    throw error
  }
}

// Execute the function
createPage().catch(console.error)
