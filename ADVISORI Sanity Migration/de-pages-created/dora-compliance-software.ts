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
    console.log('Creating DORA Compliance Software page...')

    const doraComplianceSoftwareData = {
      _type: 'servicePage',
      _id: 'dora-compliance-software',
      title: 'DORA Compliance Software',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dora-digital-operational-resilience-act/dora-compliance-software'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management'
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
        title: 'DORA Compliance Software | ADVISORI',
        description: 'Professionelle Beratung zur Auswahl und Implementierung von DORA-konformen Software-Lösungen. Expertenunterstützung bei der Bewertung, Integration und Optimierung von Compliance-Software für digitale operationelle Resilienz.',
        keywords: 'DORA Compliance Software, DORA-konforme Lösungen, Compliance-Software, digitale operationelle Resilienz, Software-Implementierung, DORA-Tools, Fintech-Software, Regulatorische Technologie'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DORA Compliance Software'
        },
        tagline: 'Intelligente Software-Lösungen für DORA-Compliance',
        heading: 'DORA Compliance Software',
        description: 'Die richtige Software-Auswahl ist entscheidend für eine effiziente DORA-Compliance. Wir unterstützen Sie bei der Bewertung, Auswahl und Implementierung von DORA-konformen Software-Lösungen, die Ihre digitale operationelle Resilienz stärken.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische Software-Bewertung und Vendor-Due-Diligence'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Nahtlose Integration in bestehende IT-Landschaften'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Automatisierung von Compliance-Prozessen und Reporting'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Optimierung und Update-Management'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DORA-konforme Software-Lösungen strategisch implementieren',
        description: 'Die Auswahl und Implementierung der richtigen Software-Tools ist fundamental für eine erfolgreiche DORA-Compliance. Moderne Compliance-Software kann komplexe regulatorische Anforderungen automatisieren, Risiken minimieren und die Effizienz erheblich steigern. Eine strategische Herangehensweise gewährleistet optimale Ergebnisse.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Marktanalyse und Software-Bewertung für DORA-spezifische Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Strategische Vendor-Auswahl und Due-Diligence-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Maßgeschneiderte Implementierungsstrategien und Change-Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration mit bestehenden Systemen und Datenarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Optimierung und Performance-Monitoring'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Die Auswahl von DORA-Compliance-Software sollte nicht isoliert betrachtet werden. Eine ganzheitliche Betrachtung der IT-Architektur, bestehender Systeme und zukünftiger Anforderungen ist entscheidend für den langfristigen Erfolg.'
        },
        whyUs: {
          title: 'Unsere Software-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnis des DORA-Compliance-Software-Marktes'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für Software-Evaluierung und Vendor-Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Erfahrung mit komplexen Enterprise-Software-Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Pragmatische Lösungsansätze für nachhaltige Software-Strategien'
            }
          ]
        },
        additionalInfo: 'DORA-Compliance-Software umfasst verschiedene Kategorien von Risk-Management-Tools über Incident-Response-Systeme bis hin zu Drittanbieter-Management-Plattformen. Die richtige Kombination und Integration dieser Tools ist entscheidend für eine effektive digitale operationelle Resilienz.',
        serviceDescription: 'Wir bieten umfassende Beratung für die strategische Auswahl, Implementierung und Optimierung von DORA-Compliance-Software. Unser systematischer Ansatz gewährleistet, dass Sie die optimalen Tools für Ihre spezifischen Anforderungen erhalten.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Software-Marktanalyse und DORA-spezifische Bewertungskriterien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Vendor-Due-Diligence und Vertragsverhandlungsunterstützung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierungsplanung und Change-Management-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Systemintegration und Datenarchitektur-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance-Monitoring und kontinuierliche Verbesserung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Software-Ansatz',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte Software-Strategie, die Ihre DORA-Compliance-Ziele optimal unterstützt und gleichzeitig Ihre bestehende IT-Landschaft berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Detaillierte Anforderungsanalyse und Gap-Assessment Ihrer aktuellen Software-Landschaft'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Umfassende Marktanalyse und Bewertung verfügbarer DORA-Compliance-Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Strategische Vendor-Auswahl und Due-Diligence-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Maßgeschneiderte Implementierungsplanung und Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Performance-Überwachung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die strategische Auswahl und Implementierung von DORA-Compliance-Software ist ein kritischer Erfolgsfaktor für die digitale operationelle Resilienz. Unsere systematische Herangehensweise gewährleistet, dass Unternehmen nicht nur compliant werden, sondern auch nachhaltige Wettbewerbsvorteile durch intelligente Automatisierung und Prozessoptimierung erzielen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Software-Marktanalyse und Bewertung',
          description: 'Umfassende Analyse des DORA-Compliance-Software-Marktes mit detaillierter Bewertung verfügbarer Lösungen basierend auf Ihren spezifischen Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Systematische Marktanalyse und Vendor-Landscape-Mapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'DORA-spezifische Bewertungskriterien und Scoring-Modelle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Funktionale und technische Anforderungsanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Total-Cost-of-Ownership-Bewertung und ROI-Analyse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Vendor-Due-Diligence und Auswahl',
          description: 'Professionelle Due-Diligence-Prozesse zur Bewertung von Software-Anbietern unter DORA-Gesichtspunkten und strategische Unterstützung bei der Vendor-Auswahl.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Umfassende Vendor-Due-Diligence und Risikobewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'DORA-Compliance-Assessment der Anbieter'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Vertragsverhandlungsunterstützung und SLA-Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Strategische Vendor-Relationship-Management-Beratung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Implementierungsplanung und Change-Management',
          description: 'Strategische Planung und Begleitung der Software-Implementierung mit fokussiertem Change-Management für eine erfolgreiche Einführung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Detaillierte Implementierungsroadmap und Meilensteinplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Change-Management-Strategien und Stakeholder-Engagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Risikomanagement und Contingency-Planung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Training und Kompetenzaufbau für Anwender'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Systemintegration und Architektur-Optimierung',
          description: 'Professionelle Integration von DORA-Compliance-Software in bestehende IT-Landschaften mit Fokus auf Datenarchitektur und Systeminteroperabilität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'IT-Architektur-Assessment und Integrationsstrategie'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Datenarchitektur-Design und API-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Systeminteroperabilität und Workflow-Automatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Security-by-Design und Compliance-Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Performance-Monitoring und Optimierung',
          description: 'Kontinuierliche Überwachung und Optimierung der Software-Performance zur Gewährleistung nachhaltiger DORA-Compliance-Effektivität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'KPI-Definition und Performance-Monitoring-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Kontinuierliche Prozessoptimierung und Effizienzsteigerung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Software-Update-Management und Version-Control'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Proaktive Problemidentifikation und Lösungsentwicklung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Compliance-Automatisierung und Reporting',
          description: 'Entwicklung und Implementierung automatisierter Compliance-Prozesse und intelligenter Reporting-Lösungen für effiziente DORA-Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Automatisierte Compliance-Workflows und Prozessoptimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Intelligente Reporting-Dashboards und Analytics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Real-time-Monitoring und Alert-Management-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Regulatorische Reporting-Automatisierung und Audit-Trails'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(doraComplianceSoftwareData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DORA Compliance Software page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
