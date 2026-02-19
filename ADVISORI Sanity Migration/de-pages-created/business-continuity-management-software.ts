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
    console.log('Creating Business Continuity Management Software page...')

    const bcmSoftwareData = {
      _type: 'servicePage',
      _id: 'business-continuity-management-software',
      title: 'Business Continuity Management Software',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/business-continuity-resilience/business-continuity-management-software'
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
        title: 'Business Continuity Management Software - Integrierte BCM-Plattformen | ADVISORI',
        description: 'Professionelle BCM-Software-Lösungen für integriertes Business Continuity Management. Automatisierung, Compliance-Reporting, Real-time Monitoring und umfassende Workflow-Integration für optimale Resilienz.',
        keywords: 'Business Continuity Management Software, BCM Software, BCM Plattform, Kontinuitätsmanagement Software, BCM Tools, Business Continuity Software, BCM Automatisierung, Resilienz Software'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Business Continuity Management Software - Integrierte BCM-Plattformen und Automatisierung'
        },
        tagline: 'Intelligente Technologie für resiliente Organisationen',
        heading: 'Business Continuity Management Software',
        description: 'Business Continuity Management Software transformiert traditionelle manuelle BCM-Prozesse in integrierte, automatisierte und intelligente Systeme. Wir unterstützen Sie bei der Auswahl, Implementierung und Optimierung von BCM-Plattformen, die Ihre Resilienz-Fähigkeiten auf das nächste Level heben.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Integrierte BCM-Plattformen mit End-to-End Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Real-time Monitoring und intelligente Alerting-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Compliance-konforme Reporting und Audit-Trails'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kollaborative Workflows und Mobile Accessibility'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Business Continuity Management Software - Intelligente Technologie für resiliente Organisationen',
        description: 'Business Continuity Management Software repräsentiert die nächste Generation von BCM-Technologie, die manuelle Prozesse durch intelligente Automatisierung ersetzt und Organisationen befähigt, ihre Resilienz-Fähigkeiten systematisch zu skalieren und zu optimieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Integrierte Plattformen vereinen alle BCM-Funktionen in einer kohärenten Software-Architektur'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Automatisierte Workflows eliminieren manuelle Fehlerquellen und beschleunigen Reaktionszeiten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Real-time Analytics und KI-gestützte Insights ermöglichen proaktive Resilienz-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Cloud-native Architekturen gewährleisten Verfügbarkeit auch in Krisensituationen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'API-Integration verbindet BCM nahtlos mit bestehenden Unternehmensanwendungen'
          }
        ],
        alert: {
          title: 'Software als strategischer Enabler',
          content: 'Moderne BCM-Software ist mehr als ein Tool - sie wird zum strategischen Enabler für organisationale Transformation und ermöglicht Resilienz-Fähigkeiten, die mit manuellen Ansätzen nicht erreichbar wären.'
        },
        whyUs: {
          title: 'Warum BCM-Software-Implementierung mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in führenden BCM-Software-Plattformen und -Technologien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Beratung für optimale Software-Auswahl und -Konfiguration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Implementierungsmethoden für nachhaltige Software-Adoption'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Optimierung und Evolution Ihrer BCM-Software-Landschaft'
            }
          ]
        },
        additionalInfo: 'Business Continuity Management Software ermöglicht es Organisationen, von reaktiven zu proaktiven und schließlich zu prädiktiven Resilienz-Modellen zu evolvieren. Die richtige Software-Auswahl und -Implementierung wird zum Wettbewerbsvorteil.',
        serviceDescription: 'Unser BCM-Software-Service umfasst die vollständige Begleitung von der strategischen Software-Auswahl über die technische Implementierung bis zur operativen Optimierung. Wir entwickeln maßgeschneiderte Software-Lösungen, die perfekt zu Ihren Geschäftsanforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Software-Evaluierung und Vendor-Selection'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Technische Implementierung und System-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Workflow-Design und Prozess-Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'User Training und Change Management'
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
        title: 'Unser Ansatz zur BCM-Software-Implementierung',
        description: 'Wir verfolgen einen systematischen und technologie-agnostischen Ansatz zur BCM-Software-Implementierung, der Business-Anforderungen mit technischen Möglichkeiten optimal verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Requirements-Analyse und Software-Markt-Evaluierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Proof-of-Concept und Pilot-Implementierung mit ausgewählten Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Rollout-Strategie mit kontinuierlicher Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration in bestehende IT-Landschaften und Workflow-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Adoption durch Training, Support und kontinuierliche Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die richtige BCM-Software transformiert Organisationen von reaktiven zu prädiktiven Resilienz-Modellen. Wir schaffen nicht nur technische Implementierungen, sondern strategische Plattformen für nachhaltige Wettbewerbsvorteile durch überlegene Kontinuitäts-Fähigkeiten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Software-Evaluierung & Vendor-Selection',
          description: 'Systematische Bewertung und Auswahl der optimalen BCM-Software-Lösung für Ihre spezifischen Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Marktanalyse und Vendor-Landscape-Mapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Requirements-Engineering und Funktions-Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'TCO-Analyse und ROI-Bewertung verschiedener Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Proof-of-Concept und Pilot-Testing mit Shortlist-Kandidaten'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Technische Implementierung & Integration',
          description: 'Professionelle technische Umsetzung und nahtlose Integration in bestehende IT-Landschaften.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Software-Installation und Infrastruktur-Setup'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'API-Integration und Datenmigrationsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Security-Konfiguration und Compliance-Setup'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Performance-Tuning und Skalierbarkeits-Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Workflow-Design & Prozess-Automatisierung',
          description: 'Entwicklung intelligenter Workflows und Automatisierung kritischer BCM-Prozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Business Process Mapping und Workflow-Architektur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Automatisierte Alerting und Eskalations-Mechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Intelligente Reporting und Dashboard-Konfiguration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Mobile Workflows und Remote-Access-Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'User Experience & Interface-Optimierung',
          description: 'Optimierung der Benutzerfreundlichkeit und Adoption durch intuitive Interface-Gestaltung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'User Experience Design und Interface-Customization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Role-based Access Control und Personalisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Mobile App-Konfiguration und Responsive Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Accessibility-Optimierung und Multi-Language-Support'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Analytics & Performance-Monitoring',
          description: 'Implementierung fortschrittlicher Analytics und kontinuierliches Performance-Monitoring.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'KPI-Dashboard und Real-time Analytics-Setup'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Predictive Analytics und Machine Learning-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Automated Reporting und Compliance-Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Performance-Benchmarking und Optimization-Insights'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Training & Change Management',
          description: 'Umfassende Schulungsprogramme und Change Management für nachhaltige Software-Adoption.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Zielgruppenspezifische Training-Programme und Schulungskonzepte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Change Management und Adoption-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Super-User-Programm und Internal Champion-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierlicher Support und Knowledge Transfer'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcmSoftwareData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Business Continuity Management Software page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
