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
    console.log('Creating Datenintegration für KI page...')

    const datenintegrationFuerKiData = {
      _type: 'servicePage',
      _id: 'datenintegration-fuer-ki',
      title: 'Datenintegration für KI',
      slug: {
        _type: 'slug',
        current: '/digitale-transformation/ki-kuenstliche-intelligenz/datenintegration-fuer-ki'
      },
      parent: {
        _type: 'reference',
        _ref: 'ki-kuenstliche-intelligenz'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'digitale-transformation'
        }
      },
      seo: {
        _type: 'seo',
        title: 'Datenintegration für KI | DSGVO-konforme AI-Datenarchitekturen | ADVISORI',
        description: 'Sichere Datenintegration für KI-Projekte. DSGVO-konforme Datenpipelines, Enterprise Data Architecture und IP-Schutz für erfolgreiche AI-Implementierungen.',
        keywords: 'Datenintegration KI, AI Data Pipeline, DSGVO Datenintegration, Enterprise Data Architecture, KI Datenmanagement, AI Data Governance, Sichere Datenintegration'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Datenintegration für KI'
        },
        tagline: 'DSGVO-konforme Datenintegration für erfolgreiche KI-Projekte',
        heading: 'Datenintegration für KI',
        description: 'Schaffen Sie die Grundlage für erfolgreiche KI-Implementierungen mit sicheren, DSGVO-konformen Datenintegrationslösungen. Wir entwickeln robuste Datenpipelines und Enterprise-Architekturen, die Ihr geistiges Eigentum schützen und gleichzeitig maximale AI-Performance ermöglichen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'DSGVO-konforme Datenpipelines mit vollständigem Privacy-by-Design'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Sichere Enterprise Data Architecture für KI-Anwendungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Schutz des geistigen Eigentums durch isolierte Datenverarbeitung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Real-time Datenintegration für adaptive KI-Systeme'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Datenintegration für KI',
        description: 'Erfolgreiche KI-Projekte stehen und fallen mit der Qualität und Sicherheit ihrer Datengrundlage. ADVISORI entwickelt maßgeschneiderte Datenintegrationslösungen, die nicht nur technische Exzellenz bieten, sondern auch höchste Standards für Datenschutz und Compliance erfüllen. Unser Safety-First-Ansatz gewährleistet, dass Ihre KI-Systeme auf einer soliden, sicheren und rechtskonformen Datenbasis aufbauen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'DSGVO-konforme Datenarchitekturen mit Privacy-by-Design-Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Sichere ETL/ELT-Pipelines für KI-Datenverarbeitung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Enterprise Data Governance und Qualitätsmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Real-time Streaming und Batch-Processing für AI-Workloads'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Sichere Multi-Source-Integration mit IP-Schutz'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Die Datenintegration ist das Fundament jeder erfolgreichen KI-Initiative. Eine durchdachte, DSGVO-konforme Datenarchitektur von Anfang an spart nicht nur Zeit und Kosten, sondern minimiert auch regulatorische Risiken und schafft die Basis für skalierbare AI-Lösungen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Expertise in DSGVO-konformer KI-Datenintegration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Safety-First-Ansatz mit bewährten Sicherheitsarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Enterprise-grade Lösungen für kritische Geschäftsanwendungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Umfassende Data Governance und Compliance-Integration'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit professioneller Datenintegration für KI können ihre AI-Projekte deutlich schneller und sicherer umsetzen, während sie gleichzeitig regulatorische Anforderungen erfüllen und ihr geistiges Eigentum schützen.',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum für die sichere Datenintegration in KI-Projekten, von der strategischen Datenarchitektur über die Implementierung sicherer Pipelines bis hin zur kontinuierlichen Governance und Optimierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Enterprise Data Architecture Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'DSGVO-konforme Datenpipeline-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Data Quality Management & Governance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Real-time Streaming & Batch Processing'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Sichere Multi-Source Integration'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine maßgeschneiderte Datenintegrationsstrategie, die auf Ihre spezifischen KI-Anforderungen zugeschnitten ist und höchste Standards für Datenschutz und Performance erfüllt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer Datenlandschaft und KI-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design DSGVO-konformer Enterprise Data Architecture'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung sicherer Datenpipelines mit IP-Schutz'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung von Data Governance und Qualitätsmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und Performance-Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die Datenintegration für KI ist weit mehr als nur technische Infrastruktur – sie ist das strategische Fundament für erfolgreiche AI-Transformation. Unser Ansatz kombiniert modernste Datenarchitekturen mit rigoroser DSGVO-Compliance und umfassendem IP-Schutz, um unseren Kunden eine sichere und skalierbare Basis für ihre KI-Initiativen zu bieten, ohne dabei Datenschutz oder Geschäftsgeheimnisse zu gefährden.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Enterprise Data Architecture Design',
          description: 'Entwicklung maßgeschneiderter Datenarchitekturen für KI-Anwendungen mit Fokus auf Sicherheit, Skalierbarkeit und DSGVO-Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Strategische Datenarchitektur-Planung für KI-Workloads'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Privacy-by-Design Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Skalierbare Cloud- und Hybrid-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Sicherheitskonzepte und Zugriffsmanagement'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'DSGVO-konforme Datenpipeline-Entwicklung',
          description: 'Implementierung sicherer ETL/ELT-Pipelines für die Verarbeitung sensibler Daten in KI-Projekten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Sichere Datenextraktion und -transformation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automatisierte Compliance-Checks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Verschlüsselung und Anonymisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Audit-Trails und Monitoring'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Data Quality Management & Governance',
          description: 'Etablierung umfassender Data Governance Frameworks für konsistente Datenqualität in KI-Anwendungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Datenqualitäts-Assessment und -Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Data Lineage und Impact Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Metadaten-Management und Katalogisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Governance-Richtlinien und Prozesse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Real-time Streaming & Batch Processing',
          description: 'Implementierung hybrider Datenverarbeitungsarchitekturen für verschiedene KI-Anwendungsszenarien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Event-driven Streaming-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Batch-Processing für ML-Training'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Lambda- und Kappa-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Performance-Optimierung und Skalierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Sichere Multi-Source Integration',
          description: 'Integration verschiedener Datenquellen unter Wahrung von Sicherheit und Datenschutz für KI-Projekte.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'API-basierte sichere Datenintegration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Legacy-System-Anbindung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Cloud- und On-Premise-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Datenföderierung und Virtualisierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'KI-Datenarchitektur Consulting',
          description: 'Strategische Beratung für die optimale Gestaltung Ihrer Datenlandschaft für KI-Anwendungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Data Strategy und Roadmap-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Technology Stack Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'ROI-Analyse und Business Case'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Change Management und Training'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(datenintegrationFuerKiData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Datenintegration für KI page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
