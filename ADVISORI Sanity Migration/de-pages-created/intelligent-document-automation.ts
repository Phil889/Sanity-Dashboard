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
    console.log('Creating Intelligent Document Automation page...')

    const intelligentDocumentAutomationData = {
      _type: 'servicePage',
      _id: 'intelligent-document-automation',
      title: 'Intelligent Document Automation',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-document-automation'
      },
      parent: {
        _type: 'reference',
        _ref: 'intelligent-automation'
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
        title: 'Intelligent Document Automation - KI-gestützte Dokumentenverarbeitung & OCR | ADVISORI',
        description: 'Professionelle Intelligent Document Automation für digitale Transformation. KI-gestützte Dokumentenverarbeitung, OCR, NLP, Machine Learning für Dokumentenklassifikation und EU AI Act konforme Automatisierungslösungen.',
        keywords: 'Intelligent Document Automation, OCR, Dokumentenverarbeitung, NLP, Machine Learning, Dokumentenklassifikation, Computer Vision, Document Processing, EU AI Act, KI Automatisierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Document Automation - KI-gestützte Dokumentenverarbeitung für Enterprise-Transformation'
        },
        tagline: 'Intelligent Document Automation für Enterprise-Excellence',
        heading: 'Intelligent Document Automation',
        description: 'Intelligent Document Automation transformiert traditionelle dokumentenzentrierte Geschäftsprozesse in strategisch orchestrierte, KI-gestützte Automatisierungssysteme. Durch nahtlose Integration von OCR, Computer Vision, Natural Language Processing und Machine Learning schaffen wir intelligente Dokumentenverarbeitungsarchitekturen, die operative Exzellenz mit strategischer Innovation optimal vereinen und dabei EU AI Act Compliance gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'KI-gestützte OCR und Computer Vision für präzise Dokumentenerkennung und -extraktion'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Natural Language Processing für intelligente Inhaltsanalyse und Dokumentenklassifikation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Machine Learning für automatisierte Dokumentenverarbeitung und Workflow-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'EU AI Act konforme Dokumentenautomatisierung und Compliance-Management'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Document Automation - Strategic Document Processing für moderne Enterprise-Architekturen',
        description: 'Intelligent Document Automation ist das strategische Fundament für moderne dokumentenzentrierte Geschäftsprozesse. Es transformiert manuelle, fehleranfällige Dokumentenverarbeitung in kohärente, KI-gestützte Automatisierungssysteme, die nicht nur operative Effizienz maximieren, sondern auch als strategische Enabler für Compliance-Automatisierung, Wissensmanagement und nachhaltige Wettbewerbsvorteile fungieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'OCR-Expertise etabliert hochpräzise Optical Character Recognition mit intelligenter Texterkennung und Multi-Format-Unterstützung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Computer Vision ermöglicht fortschrittliche Dokumentenanalyse, Layout-Erkennung und strukturierte Datenextraktion'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Natural Language Processing harmonisiert Textverständnis mit Geschäftslogik für intelligente Dokumentenklassifikation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Machine Learning-Algorithmen unterstützen kontinuierliche Verbesserung der Dokumentenverarbeitungsqualität'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Document Governance gewährleistet EU AI Act Compliance und nachhaltige Automatisierungsstrategien'
          }
        ],
        alert: {
          title: 'Intelligent Document Automation als strategischer Enterprise-Accelerator',
          content: 'Intelligent Document Automation wird zum strategischen Differentiator für digitale Transformation, Compliance-Automatisierung und moderne Enterprise-Innovation – weit über traditionelle OCR-Implementierung hinaus.'
        },
        whyUs: {
          title: 'Warum Intelligent Document Automation mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Document-AI-Expertise von OCR bis NLP-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'EU AI Act konforme Beratung für sichere und compliant Dokumentenautomatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Document Processing-Methodologien für skalierbare Enterprise-Transformation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Innovation durch Machine Learning und KI-gestützte Optimierung'
            }
          ]
        },
        additionalInfo: 'Intelligent Document Automation ermöglicht es Organisationen, die volle Power moderner KI-Technologien für strategische Dokumentenverarbeitung zu nutzen. Die richtige Document-Automation-Strategie wird zum Wettbewerbsvorteil in einer zunehmend digitalisierten Enterprise-Welt.',
        serviceDescription: 'Unser Intelligent Document Automation Service umfasst die vollständige Transformation von manuellen Dokumentenverarbeitungsprozessen zu strategischen KI-gestützten Automatisierungssystemen. Wir entwickeln maßgeschneiderte Document-Processing-Strategien, die perfekt zu Ihren Geschäftsprozessen, Dokumententypen und Compliance-Anforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'OCR und Computer Vision für präzise Dokumentenerkennung und Datenextraktion'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Natural Language Processing für intelligente Inhaltsanalyse und Dokumentenklassifikation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Machine Learning für automatisierte Dokumentenverarbeitung und kontinuierliche Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Workflow-Integration und Enterprise-System-Konnektivität für nahtlose Prozessautomatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Document Governance und EU AI Act Compliance-Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zu Intelligent Document Automation',
        description: 'Wir verfolgen einen ganzheitlichen und KI-gestützten Ansatz zu Intelligent Document Automation, der moderne Dokumentenverarbeitungstechnologien optimal nutzt und gleichzeitig strategische Business-Transformation ermöglicht.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Document Discovery und Automatisierungspotenzial-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategic Document-Automation-Roadmap-Entwicklung mit KI-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Document-Processing-Implementierung mit kontinuierlicher Optimierung und Skalierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Change Management und Mitarbeiter-Enablement für Document-Automation-Adoption'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Document-Processing-Evolution durch Monitoring, Analytics und KI-Enhancement'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Intelligent Document Automation ist das strategische Fundament für moderne dokumentenzentrierte Geschäftsprozesse. Wir transformieren manuelle, fehleranfällige Dokumentenverarbeitung in strategisch orchestrierte KI-gestützte Automatisierungssysteme, die nicht nur operative Exzellenz gewährleisten, sondern auch als strategische Enabler für Compliance-Automatisierung, Wissensmanagement und nachhaltige Wettbewerbsvorteile fungieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'OCR und Computer Vision Services',
          description: 'Fortschrittliche Optical Character Recognition und Computer Vision-Technologien für präzise Dokumentenerkennung und strukturierte Datenextraktion.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Hochpräzise OCR-Engines für Multi-Format-Dokumentenerkennung und Textextraktion'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Computer Vision für Layout-Analyse, Tabellenerkennung und strukturierte Datenextraktion'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Handschrifterkennung und Mixed-Content-Processing für komplexe Dokumententypen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Multi-Language-Support und Qualitätssicherung für Enterprise-Grade-Genauigkeit'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Natural Language Processing für Dokumente',
          description: 'Intelligente NLP-Technologien für Inhaltsanalyse, Dokumentenklassifikation und semantische Dokumentenverarbeitung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Automatisierte Dokumentenklassifikation und Content-Kategorisierung durch NLP-Algorithmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entity Recognition und Information Extraction für strukturierte Datengewinnung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Sentiment Analysis und Content Summarization für intelligente Dokumentenanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Semantic Search und Document Matching für erweiterte Dokumentenverwaltung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Machine Learning für Document Processing',
          description: 'Fortschrittliche Machine Learning-Algorithmen für kontinuierliche Verbesserung der Dokumentenverarbeitungsqualität und adaptive Automatisierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Supervised Learning für Custom Document Classification und Template Recognition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Unsupervised Learning für Document Clustering und Pattern Discovery'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Deep Learning-basierte Feature Extraction und Advanced Document Understanding'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Continuous Learning und Model Optimization für adaptive Dokumentenverarbeitung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Workflow-Integration und Enterprise-Konnektivität',
          description: 'Nahtlose Integration von Document Automation in bestehende Enterprise-Systeme und Geschäftsprozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Enterprise-System-Integration für ERP, CRM und DMS-Konnektivität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'API-basierte Workflow-Orchestrierung für automatisierte Dokumentenverarbeitungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Real-time Processing und Batch-Processing-Optionen für verschiedene Anwendungsszenarien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Exception Handling und Human-in-the-Loop-Integration für komplexe Dokumentenverarbeitung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Document Governance und Compliance Management',
          description: 'Umfassende Governance-Frameworks für nachhaltige Document Automation und EU AI Act Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Document Processing Center of Excellence für strategische Automatisierungsführung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'EU AI Act Compliance und Risk Management für KI-gestützte Dokumentenverarbeitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Data Privacy und Security Controls für sichere Dokumentenautomatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Audit Trails und Performance Monitoring für kontinuierliche Qualitätssicherung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Document Analytics und Intelligence',
          description: 'Fortschrittliche Analytics-Lösungen für Document Intelligence und strategische Erkenntnisgewinnung aus Dokumentendaten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Document Analytics Dashboards für Performance-Monitoring und Process Intelligence'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Content Analytics für Trend-Erkennung und Business Intelligence aus Dokumentendaten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Predictive Analytics für Dokumentenvolumen-Prognosen und Kapazitätsplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'ROI-Tracking und Business Impact-Messung für Document Automation-Initiativen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(intelligentDocumentAutomationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Document Automation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
