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
    console.log('Creating DORA Schwachstellen-Scanning page...')

    const doraSchwachstellenScanningData = {
      _type: 'servicePage',
      _id: 'dora-schwachstellen-scanning',
      title: 'DORA Schwachstellen-Scanning',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dora-digital-operational-resilience-act/dora-schwachstellen-scanning'
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
        title: 'DORA Schwachstellen-Scanning | ADVISORI',
        description: 'Professionelles Schwachstellen-Scanning für DORA-Compliance. Systematische Identifikation, Bewertung und Behebung von IKT-Sicherheitslücken nach Digital Operational Resilience Act Anforderungen.',
        keywords: 'DORA Schwachstellen-Scanning, Vulnerability Assessment, IKT-Sicherheit, Penetrationstests, DORA Compliance, Cybersecurity, Finanzdienstleister, EU-Regulierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DORA Schwachstellen-Scanning und Vulnerability Management'
        },
        tagline: 'Proaktive Schwachstellenerkennung für DORA-Compliance',
        heading: 'DORA Schwachstellen-Scanning',
        description: 'Systematisches Schwachstellen-Scanning ist ein zentraler Baustein der DORA-Compliance. Wir unterstützen Sie bei der Implementierung umfassender Vulnerability-Management-Programme, die den regulatorischen Anforderungen entsprechen und Ihre digitale Resilienz stärken.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'DORA-konforme Schwachstellen-Scanning-Programme und -Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte Vulnerability-Assessment-Frameworks und -Tools'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Risikoorientierte Priorisierung und Remediation-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Integration in bestehende Security-Operations und Incident-Response'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DORA-konformes Schwachstellen-Management implementieren',
        description: 'DORA fordert von Finanzinstituten die Implementierung robuster Schwachstellen-Management-Prozesse als Teil ihrer IKT-Risikomanagement-Frameworks. Effektives Schwachstellen-Scanning geht über traditionelle Vulnerability-Assessments hinaus und erfordert eine systematische, kontinuierliche Herangehensweise, die sowohl technische als auch organisatorische Aspekte berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung DORA-konformer Schwachstellen-Scanning-Strategien und -Richtlinien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung automatisierter Scanning-Tools und kontinuierlicher Monitoring-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Etablierung risikoorientierter Bewertungs- und Priorisierungsframeworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von Threat-Intelligence und Advanced-Persistent-Threat-Erkennung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Aufbau effektiver Remediation-Prozesse und Patch-Management-Systeme'
          }
        ],
        alert: {
          title: 'Regulatorischer Fokus',
          content: 'DORA verlangt nicht nur die Durchführung von Schwachstellen-Scans, sondern auch deren systematische Integration in das Gesamtrisikomanagement. Besonders kritisch ist die Dokumentation von Scanning-Aktivitäten, Risikobewertungen und Remediation-Maßnahmen für Aufsichtszwecke.'
        },
        whyUs: {
          title: 'Unsere Schwachstellen-Management-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnis der DORA-Anforderungen für Vulnerability Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für die Integration von Scanning in Security-Operations'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Expertise in automatisierten Scanning-Tools und Threat-Intelligence-Plattformen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Praktische Erfahrung mit regulatorischen Reporting- und Dokumentationsanforderungen'
            }
          ]
        },
        additionalInfo: 'Modernes Schwachstellen-Scanning für DORA-Compliance erfordert eine ganzheitliche Herangehensweise, die technische Scanning-Capabilities mit robusten Governance-Strukturen, Risikomanagement-Prozessen und regulatorischen Reporting-Mechanismen verbindet. Die Herausforderung liegt in der Balance zwischen umfassender Sicherheitsabdeckung und operationaler Effizienz.',
        serviceDescription: 'Wir unterstützen Sie bei der Entwicklung und Implementierung DORA-konformer Schwachstellen-Scanning-Programme, die sowohl regulatorische Anforderungen erfüllen als auch Ihre operative Sicherheit nachhaltig stärken. Unser Ansatz kombiniert bewährte Scanning-Technologien mit maßgeschneiderten Governance-Frameworks.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'DORA-konforme Vulnerability-Management-Strategie und -Framework-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Implementierung automatisierter Scanning-Tools und kontinuierlicher Monitoring-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Risikoorientierte Schwachstellen-Bewertung und Priorisierungs-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integration von Threat-Intelligence und Advanced-Threat-Detection'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Entwicklung effektiver Remediation-Prozesse und Patch-Management-Systeme'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Ansatz',
        description: 'Wir entwickeln mit Ihnen eine umfassende Schwachstellen-Scanning-Strategie, die DORA-Anforderungen erfüllt und gleichzeitig Ihre operative Sicherheit nachhaltig verbessert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Assessment Ihrer aktuellen Vulnerability-Management-Capabilities und -Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design DORA-konformer Scanning-Frameworks und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung automatisierter Tools und kontinuierlicher Monitoring-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung risikoorientierter Bewertungs- und Remediation-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung kontinuierlicher Verbesserungs- und Optimierungsmechanismen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Effektives Schwachstellen-Scanning unter DORA erfordert mehr als nur technische Tools – es braucht eine strategische Integration in das Gesamtrisikomanagement. Unsere Kunden profitieren von Scanning-Programmen, die nicht nur Compliance sicherstellen, sondern auch die operative Resilienz nachhaltig stärken und gleichzeitig regulatorische Transparenz schaffen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'DORA-konforme Vulnerability-Management-Strategie',
          description: 'Entwicklung umfassender Schwachstellen-Management-Strategien, die DORA-Anforderungen erfüllen und in Ihre bestehende IKT-Risikomanagement-Architektur integriert werden.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Assessment aktueller Vulnerability-Management-Capabilities und Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Design DORA-konformer Scanning-Policies und Governance-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Integration in bestehende IKT-Risikomanagement- und Security-Operations'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung regulatorischer Reporting- und Dokumentationsstandards'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Automatisierte Scanning-Tools und Monitoring-Systeme',
          description: 'Implementierung und Konfiguration fortschrittlicher Vulnerability-Scanning-Tools für kontinuierliche, automatisierte Schwachstellenerkennung und -bewertung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Tool-Evaluierung und -Auswahl basierend auf DORA-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Konfiguration automatisierter Scanning-Schedules und -Parameter'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration in Security-Information-and-Event-Management-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Entwicklung kontinuierlicher Monitoring- und Alerting-Mechanismen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Risikoorientierte Schwachstellen-Bewertung und Priorisierung',
          description: 'Etablierung systematischer Frameworks für die risikoorientierte Bewertung, Klassifizierung und Priorisierung identifizierter Schwachstellen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Entwicklung risikoorientierter Bewertungsmatrizen und Scoring-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Integration von Business-Impact-Analysen und Asset-Kritikalitätsbewertungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Automatisierte Priorisierung basierend auf Risiko- und Compliance-Faktoren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Entwicklung dynamischer Risiko-Dashboards und Reporting-Mechanismen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Threat-Intelligence-Integration und Advanced-Threat-Detection',
          description: 'Integration von Threat-Intelligence-Feeds und Advanced-Threat-Detection-Capabilities zur Verbesserung der Schwachstellen-Erkennung und -Bewertung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Integration externer Threat-Intelligence-Feeds und Vulnerability-Datenbanken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Implementierung Advanced-Persistent-Threat-Detection-Mechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Entwicklung kontextueller Risikobewertungen basierend auf aktuellen Bedrohungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Automatisierte Korrelation von Schwachstellen mit aktiven Bedrohungskampagnen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Remediation-Prozesse und Patch-Management-Systeme',
          description: 'Aufbau effektiver Remediation-Workflows und Patch-Management-Systeme für die systematische Behebung identifizierter Schwachstellen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Design strukturierter Remediation-Workflows und Eskalationsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Implementierung automatisierter Patch-Management- und Deployment-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Entwicklung Risk-based Patch-Priorisierung und Testing-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Integration von Change-Management- und Configuration-Management-Prozessen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Penetrationstests und Advanced-Security-Assessments',
          description: 'Durchführung spezialisierter Penetrationstests und Advanced-Security-Assessments zur Validierung der Wirksamkeit Ihrer Schwachstellen-Management-Programme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'DORA-konforme Penetrationstests und Red-Team-Assessments'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Spezialisierte Assessments für kritische IKT-Systeme und -Services'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Validierung von Remediation-Maßnahmen und Security-Control-Wirksamkeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Entwicklung kontinuierlicher Testing- und Validation-Programme'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(doraSchwachstellenScanningData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DORA Schwachstellen-Scanning page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
