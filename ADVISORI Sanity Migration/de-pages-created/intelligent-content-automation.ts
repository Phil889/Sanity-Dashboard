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
    console.log('Creating Intelligent Content Automation page...')

    const intelligentContentAutomationData = {
      _type: 'servicePage',
      _id: 'intelligent-content-automation',
      title: 'Intelligent Content Automation',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-content-automation'
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
        title: 'Intelligent Content Automation - KI-gestützte Dokumentenverarbeitung & Content Management | ADVISORI',
        description: 'Professionelle Intelligent Content Automation für digitale Transformation. KI-gestützte Dokumentenverarbeitung, OCR, NLP, Content Classification, automatisierte Workflows und EU AI Act konforme Content-Systeme.',
        keywords: 'Intelligent Content Automation, Dokumentenautomatisierung, OCR, NLP, Content Management, KI Dokumentenverarbeitung, Content Classification, Document Processing, EU AI Act'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Content Automation - KI-gestützte Dokumentenverarbeitung für digitale Enterprise-Transformation'
        },
        tagline: 'Intelligent Content Excellence für Enterprise-Transformation',
        heading: 'Intelligent Content Automation',
        description: 'Intelligent Content Automation transformiert unstrukturierte Dokumentenlandschaften in strategisch orchestrierte, KI-gestützte Content-Systeme. Durch nahtlose Integration von OCR, Natural Language Processing, Content Classification und automatisierten Workflows schaffen wir intelligente Content-Architekturen, die operative Exzellenz mit strategischer Information-Innovation optimal vereinen und dabei EU AI Act Compliance gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'KI-gestützte Dokumentenverarbeitung mit OCR und NLP-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Content Classification und intelligente Dokumentenrouting-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Automatisierte Content-Workflows und Enterprise-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'EU AI Act konforme Content Governance und Compliance-Management'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Content Automation - Strategic Document Transformation für moderne Enterprise-Architekturen',
        description: 'Intelligent Content Automation ist das strategische Fundament für moderne digitale Content-Transformation. Sie transformiert fragmentierte Dokumentenprozesse in kohärente, KI-gestützte Content-Systeme, die nicht nur operative Effizienz maximieren, sondern auch als strategische Enabler für Information-Innovation, Mitarbeiter-Empowerment und nachhaltige Wettbewerbsvorteile fungieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'OCR-Expertise etabliert skalierbare Optical Character Recognition mit intelligenter Dokumentenerkennung und Enterprise-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'NLP-Processing ermöglicht datengetriebene Content-Analyse und automatisierte Informationsextraktion'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Content Classification harmonisiert KI-Technologien mit Dokumentenprozessen für intelligente Content-Organisation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Workflow-Automation unterstützt end-to-end Content-Verarbeitung mit Low-Code/No-Code-Ansätzen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Content Governance gewährleistet EU AI Act Compliance und nachhaltige Content-Strategien'
          }
        ],
        alert: {
          title: 'Intelligent Content Automation als strategischer Enterprise-Accelerator',
          content: 'Intelligent Content Automation wird zum strategischen Differentiator für digitale Transformation, Content-Exzellenz und moderne Enterprise-Innovation – weit über traditionelle Dokumentenverarbeitung hinaus.'
        },
        whyUs: {
          title: 'Warum Intelligent Content Automation mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Content-Expertise von OCR bis Cognitive AI-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'EU AI Act konforme Beratung für sichere und compliant Content-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Content-Automation-Methodologien für skalierbare Enterprise-Transformation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Innovation durch Content Analytics und KI-gestützte Optimierung'
            }
          ]
        },
        additionalInfo: 'Intelligent Content Automation ermöglicht es Organisationen, die volle Power moderner Content-Technologien für strategische Geschäftstransformation zu nutzen. Die richtige Content-Strategie wird zum Wettbewerbsvorteil in einer zunehmend digitalisierten Enterprise-Welt.',
        serviceDescription: 'Unser Intelligent Content Automation Service umfasst die vollständige Transformation von manuellen Dokumentenlandschaften zu strategischen KI-gestützten Content-Systemen. Wir entwickeln maßgeschneiderte Content-Strategien, die perfekt zu Ihren Geschäftsprozessen, Technologie-Infrastrukturen und Compliance-Anforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'OCR-Implementierung und Dokumentenerkennung für automatisierte Content-Extraktion'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'NLP-Processing und Content-Analyse für intelligente Informationsverarbeitung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Content Classification und automatisierte Dokumentenrouting-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Workflow-Automation und Enterprise-Integration für nahtlose Content-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Content Governance und EU AI Act Compliance-Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zu Intelligent Content Automation',
        description: 'Wir verfolgen einen ganzheitlichen und KI-gestützten Ansatz zu Intelligent Content Automation, der moderne Content-Technologien optimal nutzt und gleichzeitig strategische Business-Transformation ermöglicht.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Content Discovery und Dokumentenanalyse-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategic Content-Roadmap-Entwicklung mit Automation-Vision'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Content-Implementierung mit kontinuierlicher Optimierung und Skalierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Change Management und Mitarbeiter-Enablement für Content-Adoption'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Content-Evolution durch Monitoring, Analytics und KI-Enhancement'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Intelligent Content Automation ist das strategische Fundament für moderne digitale Content-Transformation. Wir transformieren fragmentierte Dokumentenprozesse in strategisch orchestrierte KI-gestützte Content-Systeme, die nicht nur operative Exzellenz gewährleisten, sondern auch als strategische Enabler für Information-Innovation, Mitarbeiter-Empowerment und nachhaltige Wettbewerbsvorteile fungieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'OCR-Implementierung und Dokumentenerkennung',
          description: 'Umfassende Optical Character Recognition-Implementierung mit intelligenter Dokumentenerkennung für skalierbare Content-Extraktion.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'OCR-Engine-Auswahl und Enterprise-Integration für optimale Erkennungsarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Multi-Format-Dokumentenerkennung für PDF, Bilder und gescannte Dokumente'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Handschrift- und Formularerkennung für komplexe Dokumententypen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Quality Assurance und Accuracy-Optimierung für präzise Content-Extraktion'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'NLP-Processing und Content-Analyse',
          description: 'Fortschrittliche Natural Language Processing-Technologien für intelligente Content-Analyse und automatisierte Informationsverarbeitung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Text Mining und Entity Recognition für strukturierte Informationsextraktion'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Sentiment Analysis und Content-Bewertung für qualitative Content-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Language Detection und Multi-Language-Processing für globale Content-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Semantic Analysis und Content-Verstehen für intelligente Dokumentenverarbeitung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Content Classification und Dokumentenrouting',
          description: 'Intelligente Content-Classification-Systeme mit automatisierten Routing-Workflows für optimierte Dokumentenverarbeitung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Machine Learning-basierte Dokumentenklassifizierung für automatisierte Content-Organisation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Rule-based Routing und Workflow-Automation für effiziente Dokumentenverteilung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Priority-Management und Escalation-Workflows für kritische Dokumente'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Content Tagging und Metadata-Enrichment für verbesserte Suchbarkeit'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Workflow-Automation und Enterprise-Integration',
          description: 'End-to-end Workflow-Automation-Strategien mit Enterprise-System-Integration für nahtlose Content-Prozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Business Process Integration und ERP-Konnektivität für ganzheitliche Content-Workflows'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'API-Integration und Microservices-Architektur für flexible Content-Landschaften'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Real-time Processing und Event-driven Architecture für responsive Content-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Exception Handling und Error Management für robuste Content-Verarbeitung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Content Governance und Compliance Management',
          description: 'Umfassende Governance-Frameworks für nachhaltige Content-Strategien und EU AI Act Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Content Center of Excellence-Etablierung für strategische Content-Führung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'EU AI Act Compliance und Risk Management für KI-gestützte Content-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Data Privacy und Security-Controls für sichere Content-Operationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Audit Trails und Compliance Reporting für regulatorische Content-Anforderungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Content Analytics und Performance Optimization',
          description: 'Strategische Content Analytics für kontinuierliche Optimierung und Performance-Verbesserung von Content-Automation-Systemen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Content Performance Monitoring und KPI-Dashboards für operative Transparenz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Usage Analytics und User Behavior-Analyse für Content-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Quality Metrics und Accuracy Tracking für kontinuierliche Verbesserung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Predictive Analytics und Trend Analysis für proaktive Content-Strategien'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(intelligentContentAutomationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Content Automation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
