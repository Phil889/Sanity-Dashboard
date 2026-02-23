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
    console.log('Creating Intelligent Automation Consultant page...')

    const intelligentAutomationConsultantData = {
      _type: 'servicePage',
      _id: 'intelligent-automation-consultant',
      title: 'Intelligent Automation Consultant',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-automation-consultant'
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
        title: 'Intelligent Automation Consultant | EU AI Act Compliance | ADVISORI',
        description: 'Erfahrene Intelligent Automation Consultants für EU AI Act konforme KI-Automatisierung. ADVISORI bietet strategische Beratung für sichere, compliance-orientierte Automatisierungslösungen.',
        keywords: 'Intelligent Automation Consultant, KI Beratung, EU AI Act Compliance, Automatisierungsberatung, Enterprise AI, Prozessautomatisierung, AI Governance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Automation Consultant'
        },
        tagline: 'Expertenwissen für strategische KI-Automatisierung und EU AI Act Compliance',
        heading: 'Intelligent Automation Consultant',
        description: 'Als spezialisierte Intelligent Automation Consultants unterstützen wir Unternehmen bei der strategischen Implementierung KI-gestützter Automatisierungslösungen – compliance-konform, sicherheitsorientiert und mit Fokus auf nachhaltigen Geschäftserfolg.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'EU AI Act konforme Automatisierungsstrategien mit integriertem Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Ganzheitliche Beratung von der Strategie bis zur operativen Umsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Schutz von Unternehmens-IP durch sichere KI-Implementierungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Messbare Geschäftsergebnisse durch datengetriebene Automatisierungsansätze'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Automation Consultant',
        description: 'Als erfahrene Intelligent Automation Consultants verstehen wir, dass erfolgreiche KI-Automatisierung mehr als nur Technologie-Implementierung erfordert. Wir kombinieren tiefgreifende technische Expertise mit strategischem Geschäftsverständnis und regulatorischem Know-how, um Automatisierungslösungen zu entwickeln, die sowohl innovativ als auch compliance-konform sind.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Bewertung und Priorisierung von Automatisierungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'EU AI Act konforme Implementierung mit integriertem Governance-Framework'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Ganzheitliche Change Management Begleitung für nachhaltige Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliche Optimierung und Skalierung von Automatisierungslösungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Schutz kritischer Unternehmensdaten durch sichere KI-Architekturen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiche Intelligent Automation erfordert einen ganzheitlichen Beratungsansatz, der technische Innovation mit regulatorischer Compliance und organisatorischer Transformation verbindet. Als spezialisierte Consultants schaffen wir die Brücke zwischen strategischen Zielen und operativer Umsetzung.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Expertise in EU AI Act Compliance und KI-Governance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für sichere Enterprise-KI-Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Beratungsansatz von Strategie bis Betrieb'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Fokus auf Schutz von Unternehmens-IP und Datensicherheit'
            }
          ]
        },
        additionalInfo: 'Unternehmen, die mit erfahrenen Intelligent Automation Consultants arbeiten, erreichen ihre Automatisierungsziele schneller und nachhaltiger. Profitieren Sie von unserer Expertise für Ihre digitale Transformation!',
        serviceDescription: 'Unsere Intelligent Automation Consulting Services umfassen die gesamte Wertschöpfungskette von der strategischen Beratung über die technische Implementierung bis hin zur kontinuierlichen Optimierung Ihrer Automatisierungslösungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Automatisierungsberatung und Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'EU AI Act Compliance Beratung und Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Technische Implementierung und Systemintegration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Change Management und Mitarbeiterqualifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance Monitoring und kontinuierliche Verbesserung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Als erfahrene Intelligent Automation Consultants verfolgen wir einen strukturierten, phasenorientierten Ansatz, der strategische Planung mit agiler Umsetzung verbindet und dabei stets Compliance und Sicherheit im Fokus behält.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer Geschäftsprozesse und Automatisierungspotenziale'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten Automatisierungsstrategie mit EU AI Act Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Pilotimplementierung mit integriertem Risikomanagement und Governance'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Skalierung und Integration in bestehende Unternehmensarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Betreuung und Optimierung für nachhaltigen Erfolg'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Als Intelligent Automation Consultants verstehen wir, dass erfolgreiche KI-Automatisierung eine perfekte Balance zwischen Innovation und Compliance erfordert. Unsere Kunden profitieren von unserem ganzheitlichen Beratungsansatz, der technische Exzellenz mit regulatorischer Sicherheit verbindet und dabei den Schutz kritischer Unternehmensdaten gewährleistet.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische Automatisierungsberatung',
          description: 'Entwicklung einer umfassenden Intelligent Automation Strategie, die Ihre Geschäftsziele mit technischen Möglichkeiten optimal verbindet.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Ganzheitliche Bewertung von Automatisierungspotenzialen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung einer phasenorientierten Implementierungsroadmap'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'ROI-Bewertung und Business Case Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Technologie-Auswahl und Architektur-Design'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'EU AI Act Compliance Consulting',
          description: 'Spezialisierte Beratung zur Sicherstellung der Compliance Ihrer Automatisierungslösungen mit den Anforderungen des EU AI Act.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'AI Act Risikobewertung und Klassifizierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung von AI Governance Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Compliance-Dokumentation und Audit-Vorbereitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Compliance-Überwachung und -Anpassung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Technische Implementierungsberatung',
          description: 'Expertenwissen für die professionelle Umsetzung Ihrer Intelligent Automation Projekte mit modernsten Technologien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'KI und Machine Learning Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Cloud-native Automatisierungsarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'API-Integration und Systemkonnektivität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Sicherheits- und Datenschutzkonzepte'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Change Management Consulting',
          description: 'Professionelle Begleitung Ihrer Organisation bei der Transformation zu KI-gestützten Arbeitsplätzen und Prozessen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Stakeholder-Engagement und Kommunikationsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Mitarbeiterqualifizierung und Kompetenzentwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Kulturwandel und Akzeptanzförderung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Kontinuierliche Unterstützung und Coaching'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Performance Optimization Consulting',
          description: 'Kontinuierliche Beratung zur Optimierung und Skalierung Ihrer Intelligent Automation Lösungen für maximale Effizienz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'KPI-Definition und Performance-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Automatisierte Anomalieerkennung und -behebung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Kontinuierliche Prozessverbesserung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Skalierungsstrategien und Roadmap-Updates'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Enterprise AI Security Consulting',
          description: 'Spezialisierte Beratung für den sicheren Einsatz von KI-Technologien mit Fokus auf Schutz von Unternehmens-IP und Datensicherheit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'KI-Sicherheitsarchitekturen und Threat Modeling'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Datenschutz und Privacy-by-Design Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Schutz vor Adversarial Attacks und KI-Manipulation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Sicherheitsüberwachung und -bewertung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(intelligentAutomationConsultantData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Automation Consultant page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
