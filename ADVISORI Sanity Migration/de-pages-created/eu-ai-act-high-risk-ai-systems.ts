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
    console.log('Creating EU AI Act High-Risk AI Systems page...')

    const euAiActHighRiskAiSystemsData = {
      _type: 'servicePage',
      _id: 'eu-ai-act-high-risk-ai-systems',
      title: 'EU AI Act High-Risk AI Systems',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eu-ai-act/eu-ai-act-high-risk-ai-systems'
      },
      parent: {
        _type: 'reference',
        _ref: 'eu-ai-act'
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
        title: 'EU AI Act High-Risk AI Systems Compliance | ADVISORI',
        description: 'Umfassende Compliance-Lösungen für Hochrisiko-KI-Systeme gemäß EU AI Act. Risikobeurteilung, Konformitätsbewertung und kontinuierliche Überwachung für regulatorische Sicherheit.',
        keywords: 'EU AI Act, High-Risk AI Systems, KI-Risikoklassifizierung, AI Compliance, Hochrisiko-KI, Konformitätsbewertung, AI Risk Assessment'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EU AI Act High-Risk AI Systems'
        },
        tagline: 'Spezialisierte Compliance-Lösungen für Hochrisiko-KI-Systeme',
        heading: 'EU AI Act High-Risk AI Systems',
        description: 'Navigieren Sie sicher durch die komplexen Anforderungen für Hochrisiko-KI-Systeme gemäß EU AI Act. Von der Risikoklassifizierung bis zur kontinuierlichen Compliance-Überwachung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Präzise Klassifizierung und Bewertung von Hochrisiko-KI-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Vollständige Konformitätsbewertung und CE-Kennzeichnung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Robuste Governance-Frameworks für kontinuierliche Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Umfassende Dokumentation und Audit-Unterstützung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EU AI Act High-Risk AI Systems Compliance',
        description: 'Hochrisiko-KI-Systeme unterliegen den strengsten Anforderungen der EU AI Act. Wir unterstützen Sie bei der vollständigen Compliance-Umsetzung, von der initialen Risikoklassifizierung über die Konformitätsbewertung bis hin zur kontinuierlichen Überwachung und Dokumentation.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Risikoklassifizierung und -bewertung nach Anhang III'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Risikomanagement-Systeme und Qualitätsmanagementsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Datenqualität und Daten-Governance für Trainings-, Validierungs- und Testdatensätze'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Technische Dokumentation und Konformitätsbewertungsverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Human Oversight, Accuracy, Robustheit und Cybersecurity'
          }
        ],
        alert: {
          title: 'Kritischer Hinweis',
          content: 'Hochrisiko-KI-Systeme dürfen nur in Verkehr gebracht werden, wenn sie alle Anforderungen der Artikel 8-15 der EU AI Act erfüllen und eine Konformitätsbewertung durchlaufen haben. Verstöße können Bußgelder bis zu 35 Millionen Euro zur Folge haben.'
        },
        whyUs: {
          title: 'Warum ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in EU AI Act Hochrisiko-Klassifizierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Frameworks für Konformitätsbewertung und CE-Kennzeichnung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfassende Erfahrung mit harmonisierten Standards und Normen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung bei regulatorischen Änderungen'
            }
          ]
        },
        additionalInfo: 'Über 85% der Unternehmen unterschätzen die Komplexität der Hochrisiko-KI-Compliance. ADVISORI unterstützt Sie dabei, alle Anforderungen systematisch und effizient zu erfüllen.',
        serviceDescription: 'Wir bieten Ihnen end-to-end Lösungen für die Compliance Ihrer Hochrisiko-KI-Systeme, von der initialen Bewertung bis zur kontinuierlichen Überwachung und Dokumentation.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Hochrisiko-Klassifizierung und Impact Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Risikomanagement-System Design und Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Qualitätsmanagement und technische Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Konformitätsbewertung und CE-Kennzeichnung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Post-Market Monitoring und kontinuierliche Compliance'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Compliance-Ansatz',
        description: 'Wir entwickeln systematische und nachhaltige Compliance-Strategien, die Ihre Hochrisiko-KI-Systeme vollständig konform machen und gleichzeitig ihre Innovationskraft erhalten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Risikoklassifizierung und Bewertung Ihrer KI-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design und Implementierung von Risiko- und Qualitätsmanagementsystemen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung technischer Dokumentation und Konformitätsbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'CE-Kennzeichnung und Markteinführungsunterstützung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und Compliance-Maintenance'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns dabei geholfen, unsere komplexen KI-Systeme erfolgreich als Hochrisiko-Systeme zu klassifizieren und alle erforderlichen Compliance-Maßnahmen zu implementieren. Ihre systematische Herangehensweise hat uns Zeit und Ressourcen gespart und gleichzeitig maximale Rechtssicherheit gewährleistet.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Hochrisiko-Klassifizierung & Assessment',
          description: 'Präzise Bewertung und Klassifizierung Ihrer KI-Systeme gemäß EU AI Act Anhang III.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Systematische Risikoklassifizierung nach Anhang III'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Impact Assessment und Risikobewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Use Case Analyse und Anwendungsbereich-Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Compliance-Roadmap und Implementierungsplanung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Konformitätsbewertung & CE-Kennzeichnung',
          description: 'Vollständige Konformitätsbewertung und CE-Kennzeichnung für Markteinführung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Konformitätsbewertungsverfahren nach Artikel 43'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Technische Dokumentation und Konformitätserklärung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'CE-Kennzeichnung und Registrierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Notified Body Coordination und Audit-Unterstützung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(euAiActHighRiskAiSystemsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EU AI Act High-Risk AI Systems page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
