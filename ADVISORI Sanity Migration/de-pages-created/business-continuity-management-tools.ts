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
    console.log('Creating Business Continuity Management Tools page...')

    const bcmToolsData = {
      _type: 'servicePage',
      _id: 'business-continuity-management-tools',
      title: 'Business Continuity Management Tools',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/business-continuity-resilience/business-continuity-management-tools'
      },
      parent: {
        _type: 'reference',
        _ref: 'business-continuity-resilience'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'informationssicherheit'
        }
      },
      seo: {
        _type: 'seo',
        title: 'Business Continuity Management Tools - Spezialisierte BCM-Tools & Utilities | ADVISORI',
        description: 'Professionelle BCM-Tools für Risikobewertung, Planung, Testing und Monitoring. Spezialisierte Utilities, Assessment-Tools und integrierte Lösungen für effektives Business Continuity Management.',
        keywords: 'Business Continuity Management Tools, BCM Tools, BCM Utilities, Risikobewertung Tools, BIA Tools, BCM Assessment Tools, Kontinuitätsplanung Tools, BCM Testing Tools, Monitoring Tools'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Business Continuity Management Tools - Spezialisierte BCM-Tools und Utilities'
        },
        tagline: 'Präzise Tools für resiliente Organisationen',
        heading: 'Business Continuity Management Tools',
        description: 'Business Continuity Management Tools sind spezialisierte Instrumente und Utilities, die BCM-Prozesse unterstützen, automatisieren und optimieren. Wir helfen Ihnen bei der Auswahl, Implementierung und Integration der richtigen Tool-Kombination für Ihre spezifischen BCM-Anforderungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Spezialisierte Assessment- und Bewertungstools für präzise Risikoanalysen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Integrierte Planungs- und Dokumentationstools für strukturierte BCM-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Automatisierte Testing- und Validierungstools für kontinuierliche Verbesserung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Real-time Monitoring- und Alerting-Tools für proaktive Incident Response'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Business Continuity Management Tools - Präzise Instrumente für resiliente Organisationen',
        description: 'Business Continuity Management Tools umfassen eine breite Palette spezialisierter Instrumente, Utilities und Anwendungen, die verschiedene Aspekte des BCM unterstützen. Diese Tools ermöglichen es Organisationen, BCM-Prozesse zu standardisieren, zu automatisieren und kontinuierlich zu verbessern.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Assessment-Tools ermöglichen systematische Bewertung von Risiken, Vulnerabilitäten und Geschäftsauswirkungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Planungstools unterstützen strukturierte Entwicklung und Dokumentation von Kontinuitätsplänen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Testing-Tools automatisieren Übungen, Simulationen und Validierungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Monitoring-Tools bieten kontinuierliche Überwachung kritischer Systeme und Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration-Tools verbinden verschiedene BCM-Komponenten zu kohärenten Systemen'
          }
        ],
        alert: {
          title: 'Tool-Ökosystem als strategischer Vorteil',
          content: 'Die richtige Kombination von BCM-Tools schafft ein integriertes Ökosystem, das nicht nur einzelne Prozesse optimiert, sondern die gesamte BCM-Fähigkeit der Organisation transformiert und nachhaltigen Wettbewerbsvorteil generiert.'
        },
        whyUs: {
          title: 'Warum BCM-Tool-Integration mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in führenden BCM-Tools und deren optimaler Kombination'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Beratung für objektive Tool-Auswahl und -Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Implementierungsmethoden für nahtlose Tool-Adoption'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Optimierung und Evolution Ihres BCM-Tool-Ökosystems'
            }
          ]
        },
        additionalInfo: 'Business Continuity Management Tools entwickeln sich kontinuierlich weiter und integrieren neue Technologien wie KI, Machine Learning und Predictive Analytics. Die strategische Auswahl und Integration dieser Tools wird zum entscheidenden Erfolgsfaktor für moderne BCM-Programme.',
        serviceDescription: 'Unser BCM-Tool-Service umfasst die vollständige Begleitung von der Tool-Evaluierung über die Integration bis zur Optimierung. Wir entwickeln maßgeschneiderte Tool-Landschaften, die perfekt zu Ihren BCM-Zielen und organisatorischen Anforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Tool-Assessment und Bedarfsanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Tool-Auswahl und Vendor-Evaluierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Integration und Konfiguration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'User Training und Adoption-Support'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance-Optimierung und kontinuierliche Weiterentwicklung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zur BCM-Tool-Integration',
        description: 'Wir verfolgen einen systematischen und bedarfsorientierten Ansatz zur BCM-Tool-Integration, der technische Möglichkeiten mit praktischen Anforderungen optimal verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Tool-Landschaftsanalyse und Gap-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Bedarfsorientierte Tool-Auswahl und Kompatibilitätsprüfung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Integration mit kontinuierlicher Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'User-zentrierte Implementierung mit umfassendem Training'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Evolution des Tool-Ökosystems'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die strategische Integration von BCM-Tools schafft mehr als nur operative Effizienz - sie ermöglicht eine neue Dimension der Resilienz-Fähigkeiten. Wir entwickeln Tool-Ökosysteme, die nicht nur aktuelle Anforderungen erfüllen, sondern Organisationen für zukünftige Herausforderungen rüsten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Tool-Assessment & Bedarfsanalyse',
          description: 'Systematische Evaluierung bestehender Tools und Identifikation optimaler Tool-Kombinationen für Ihre BCM-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Analyse bestehender Tool-Landschaft und Nutzungspatterns'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Gap-Assessment und Identifikation von Optimierungspotenzialen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Bedarfsanalyse für verschiedene BCM-Disziplinen und Anwendungsfälle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'ROI-Bewertung und Kosten-Nutzen-Analyse verschiedener Tool-Optionen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Spezialisierte Assessment-Tools',
          description: 'Implementierung und Optimierung von Tools für Risikobewertung, Business Impact Analysis und Vulnerability Assessment.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Risikobewertungs-Tools für systematische Threat- und Vulnerability-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'BIA-Tools für strukturierte Business Impact Analysis und Kritikalitätsbewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Maturity-Assessment-Tools für BCM-Reifegrad-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Compliance-Assessment-Tools für regulatorische Anforderungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Planungs- & Dokumentationstools',
          description: 'Integration von Tools für strukturierte Kontinuitätsplanung, Dokumentation und Wissensmanagement.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Plan-Entwicklungstools für strukturierte Kontinuitäts- und Recovery-Planung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Dokumentationstools für konsistente und aktuelle BCM-Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Workflow-Tools für kollaborative Planentwicklung und Review-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Versionskontroll- und Change-Management-Tools für Planaktualisierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Testing- & Validierungstools',
          description: 'Implementierung automatisierter Tools für BCM-Testing, Übungen und kontinuierliche Validierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Übungsmanagement-Tools für Planung und Durchführung von BCM-Tests'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Simulationstools für realistische Störungsszenarien und Krisenübungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Validierungstools für automatisierte Überprüfung von Plan-Aktualität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Reporting-Tools für Übungsergebnisse und Verbesserungsmaßnahmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Monitoring- & Alerting-Tools',
          description: 'Integration von Real-time Monitoring-Tools für kontinuierliche Überwachung und proaktive Incident Response.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'System-Monitoring-Tools für kontinuierliche Überwachung kritischer Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Alerting-Tools für automatische Benachrichtigung bei kritischen Ereignissen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Dashboard-Tools für Real-time Visualisierung von BCM-KPIs und Status'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Incident-Tracking-Tools für strukturierte Ereignisdokumentation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Tool-Integration & Optimierung',
          description: 'Nahtlose Integration verschiedener BCM-Tools und kontinuierliche Optimierung des gesamten Tool-Ökosystems.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'API-Integration für nahtlose Datenübertragung zwischen verschiedenen Tools'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Workflow-Automatisierung für effiziente Tool-übergreifende Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Performance-Optimierung und kontinuierliche Tool-Evolution'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'User Training und Change Management für optimale Tool-Adoption'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcmToolsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Business Continuity Management Tools page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
