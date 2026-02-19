import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import { join } from 'path'

dotenv.config({ path: join(process.cwd(), '.env') })

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

const run = async () => {
  try {
    console.log('Creating CRR/CRD Gap-Analyse Prozesse & Systeme page...')

    const crrCrdGapAnalyseData = {
      _type: 'servicePage',
      _id: 'crr-crd-gap-analyse-prozesse-systeme',
      title: 'CRR/CRD Gap-Analyse Prozesse & Systeme',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/crr-crd/crr-crd-readiness/crr-crd-gap-analyse-prozesse-systeme'
      },
      parent: {
        _type: 'reference',
        _ref: 'crr-crd-readiness'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'regulatory-compliance-management'
        }
      },
      seo: {
        _type: 'seo',
        title: 'CRR/CRD Gap-Analyse Prozesse & Systeme | ADVISORI',
        description: 'Professionelle CRR/CRD Gap-Analyse für Prozesse und Systeme. Identifikation von Compliance-Lücken, Prozessoptimierung und IT-Architekturberatung für nachhaltige regulatorische Compliance.',
        keywords: 'CRR/CRD Gap-Analyse, Prozessoptimierung, IT-Architektur, Compliance-Lücken, Regulatorische Anforderungen, Systemanalyse, Datenmanagement, Implementierungsplanung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRR/CRD Gap-Analyse für Prozesse und Systeme'
        },
        tagline: 'Fundierte Bewertung und strategische Optimierung für CRR/CRD-Compliance',
        heading: 'CRR/CRD Gap-Analyse Prozesse & Systeme',
        description: 'Eine strukturierte Gap-Analyse der bestehenden Prozesslandschaft und IT-Infrastruktur ist der erste entscheidende Schritt zur effektiven Umsetzung der CRR/CRD-Anforderungen. Wir identifizieren methodisch Lücken zwischen dem aktuellen Zustand und den regulatorischen Anforderungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Identifikation von Compliance-Lücken in Prozessen und Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Umsetzungsorientierte Maßnahmenpläne mit klaren Prioritäten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integration von operativer Effizienz und regulatorischer Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Solide Basis für nachhaltige CRR/CRD-Implementierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRR/CRD Gap-Analyse: Prozesse & Systeme strategisch für regulatorische Anforderungen optimieren',
        description: 'Die wachsende Komplexität der Capital Requirements Regulation (CRR) und Capital Requirements Directive (CRD) stellt Finanzinstitute vor die Herausforderung, eine Vielzahl von prozessualen und systemischen Anpassungen vorzunehmen. Eine strukturierte Gap-Analyse der bestehenden Prozesslandschaft und IT-Infrastruktur ist der erste entscheidende Schritt zur effektiven Umsetzung der regulatorischen Anforderungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Methodische Identifikation von Lücken zwischen aktuellem Zustand und CRR/CRD-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Bewertung von Compliance-Aspekten unter Berücksichtigung operativer Effizienz'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung umsetzungsorientierter Maßnahmenpläne mit klaren Prioritäten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Etablierung einer soliden Basis für nachhaltige CRR/CRD-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration regulatorischer Sicherheit mit operativer Exzellenz'
          }
        ],
        alert: {
          _type: 'object',
          title: 'Gap-Analyse-Fokus',
          content: 'Eine effektive CRR/CRD Gap-Analyse geht über die reine Compliance-Prüfung hinaus und berücksichtigt strategische Ausrichtung, operative Effizienz und die Integration in bestehende Geschäftsprozesse für nachhaltige Implementierungserfolge.'
        },
        whyUs: {
          _type: 'object',
          title: 'Unsere Gap-Analyse-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in CRR/CRD-Anforderungen und deren praktischer Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden zur systematischen Prozess- und Systemanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz zur Integration von Compliance und operativer Effizienz'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Praxiserprobte Implementierungsroadmaps und Maßnahmenpläne'
            }
          ]
        },
        additionalInfo: 'Unsere Gap-Analyse kombiniert regulatorische Expertise mit praktischer Umsetzungserfahrung, um nicht nur Compliance-Lücken zu identifizieren, sondern auch wertvolle Optimierungspotenziale in Ihren Kernprozessen aufzuzeigen.',
        serviceDescription: 'Wir bieten umfassende Gap-Analyse-Services für CRR/CRD-Compliance, die sowohl fachliche als auch technische Aspekte berücksichtigen. Unser strukturierter, mehrstufiger Ansatz gewährleistet eine vollständige Bewertung Ihrer aktuellen Situation und entwickelt klare Handlungsempfehlungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Anforderungsanalyse und Scoping für CRR/CRD-spezifische Implikationen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Detaillierte Ist-Analyse der Prozesslandschaft und IT-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Systematische Gap-Identifikation und -Bewertung nach Kritikalität'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Maßnahmenplanung und Roadmap-Entwicklung mit klaren Prioritäten'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Management-Reporting und Stakeholder-Kommunikation'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strukturierter Gap-Analyse-Ansatz',
        description: 'Für die CRR/CRD Gap-Analyse von Prozessen und Systemen setzen wir auf einen strukturierten, mehrstufigen Ansatz, der sowohl fachliche als auch technische Aspekte umfassend berücksichtigt und zu umsetzungsorientierten Handlungsempfehlungen führt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Anforderungsanalyse und Scoping der relevanten CRR/CRD-Bestimmungen mit Fokus auf prozessuale und systemische Implikationen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Detaillierte Ist-Analyse der Prozesslandschaft mit Schwerpunkt auf regulatorisch relevanten Abläufen und Kontrollpunkten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'System- und Datenarchitekturanalyse zur Bewertung der IT-Fähigkeiten für CRR/CRD-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Systematische Gap-Identifikation und -Bewertung mit Kategorisierung nach Kritikalität und regulatorischer Relevanz'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Maßnahmenplanung und Roadmap-Entwicklung mit integrierten Implementierungsplänen und realistischen Zeitplänen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Eine fundierte Gap-Analyse ist das Fundament jeder erfolgreichen CRR/CRD-Implementierung. Unsere Erfahrung zeigt, dass Organisationen, die systematisch ihre Prozess- und Systemlandschaft analysieren, nicht nur regulatorische Anforderungen effizienter erfüllen, sondern auch nachhaltige operative Verbesserungen erzielen, die ihre Wettbewerbsfähigkeit stärken.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Regulatory Gap Assessment',
          description: 'Umfassende Analyse der regulatorischen Anforderungen aus CRR/CRD und deren Implikationen für Prozesse und Systeme. Detaillierte Bewertung der Compliance-Lücken mit klarer Priorisierung und Handlungsempfehlungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Systematische Anforderungsanalyse und Scoping der CRR/CRD-Bestimmungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Soll-Ist-Vergleich mit methodischer Gap-Identifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risiko- und Impact-Assessment der identifizierten Lücken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Priorisierung nach regulatorischer Dringlichkeit und Geschäftsrelevanz'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Prozessoptimierung & -design',
          description: 'Neugestaltung und Optimierung von Schlüsselprozessen zur Erfüllung regulatorischer Anforderungen bei gleichzeitiger Steigerung der operativen Effizienz. Integration von Kontrollmechanismen und Governance-Strukturen in die Prozesslandschaft.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'End-to-End-Prozessanalyse mit Fokus auf regulatorische Kontrollpunkte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Prozessmodellierung und -dokumentation nach Best-Practice-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration von Compliance-Kontrollen in operative Abläufe'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Change-Management-Unterstützung für Prozessimplementierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'IT-Architekturberatung',
          description: 'Entwicklung einer CRR/CRD-konformen Zielarchitektur für Systeme und Datenflüsse. Beratung bei der Auswahl und Integration geeigneter IT-Lösungen zur Unterstützung regulatorischer Prozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Systemlandschaftsanalyse und Architektur-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Zielarchitektur-Design für CRR/CRD-Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Technologie-Evaluation und Vendor-Selection-Unterstützung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Integrations- und Migrationsstrategie-Entwicklung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Datenmanagement & -governance',
          description: 'Konzeption und Implementierung robuster Datenmanagement-Frameworks für regulatorische Anforderungen. Etablierung von Datenqualitätskontrollen und Governance-Prozessen zur Sicherstellung regulatorischer Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Datenarchitektur-Analyse und Data-Lineage-Mapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Data-Governance-Framework-Design und -Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Datenqualitäts-Management und Monitoring-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Regulatory-Reporting-Datenmodelle und -Prozesse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Implementierungsplanung & PMO',
          description: 'Entwicklung detaillierter Implementierungspläne mit klaren Meilensteinen und Ressourcenzuordnung. Etablierung eines spezialisierten Project Management Office (PMO) zur Koordination komplexer regulatorischer Initiativen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Integrierte Roadmap-Entwicklung mit Abhängigkeitsanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Ressourcenplanung und Kapazitäts-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'PMO-Setup und Governance-Strukturen für Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Kontinuierliches Monitoring und Fortschrittskontrolle'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'CRR/CRD Testing & Validation',
          description: 'Entwicklung und Durchführung von Tests zur Validierung der implementierten Prozesse und Systeme. Unabhängige Überprüfung der Compliance-Konformität und operativen Effektivität der umgesetzten Maßnahmen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Test-Strategie und -Planung für regulatorische Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'End-to-End-Testing von Prozessen und Systemintegration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Compliance-Validation und Audit-Readiness-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Überwachung und Performance-Monitoring'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(crrCrdGapAnalyseData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRR/CRD Gap-Analyse Prozesse & Systeme page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
