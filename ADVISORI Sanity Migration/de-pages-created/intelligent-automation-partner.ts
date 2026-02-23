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
    console.log('Creating Intelligent Automation Partner page...')

    const intelligentAutomationPartnerData = {
      _type: 'servicePage',
      _id: 'intelligent-automation-partner',
      title: 'Intelligent Automation Partner',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-automation-partner'
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
        title: 'Intelligent Automation Partner | Strategische KI-Partnerschaft | ADVISORI',
        description: 'ADVISORI als strategischer Intelligent Automation Partner für nachhaltige KI-Transformation. EU AI Act konforme Partnerschaft für sichere, skalierbare Automatisierungslösungen.',
        keywords: 'Intelligent Automation Partner, KI Partnerschaft, EU AI Act Partner, Automatisierungspartner, Enterprise AI Partner, Strategische KI-Allianz, Digital Transformation Partner'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Automation Partner'
        },
        tagline: 'Strategische Partnerschaft für nachhaltige KI-Automatisierung und digitale Transformation',
        heading: 'Intelligent Automation Partner',
        description: 'Als strategischer Intelligent Automation Partner begleiten wir Unternehmen langfristig auf ihrem Weg zur KI-gestützten Transformation. Unsere Partnerschaft basiert auf Vertrauen, gemeinsamer Innovation und dem Commitment zu EU AI Act konformer, sicherer Automatisierung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Langfristige strategische Partnerschaft mit gemeinsamer Innovationsentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'EU AI Act konforme Automatisierung mit integriertem Compliance-Management'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Vendor-neutrale Beratung und Technologie-Auswahl für optimale Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Weiterentwicklung und Skalierung Ihrer Automatisierungslandschaft'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Automation Partner',
        description: 'Eine erfolgreiche Intelligent Automation Transformation erfordert mehr als punktuelle Beratung – sie braucht einen vertrauensvollen Partner, der langfristig an Ihrem Erfolg interessiert ist. Als strategischer Intelligent Automation Partner verstehen wir uns nicht nur als Dienstleister, sondern als Ihr verlängerter Arm für KI-Innovation und digitale Transformation.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Partnerschaft mit gemeinsamer Roadmap-Entwicklung und -Umsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Kontinuierliche Innovation durch Co-Development und Technologie-Scouting'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'EU AI Act Compliance als Partnerschaftsfundament mit proaktivem Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Vendor-neutrale Technologie-Bewertung und Ecosystem-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Aufbau interner Kompetenzen durch Knowledge Transfer und Mentoring'
          }
        ],
        alert: {
          title: 'Partnerschaftsansatz',
          content: 'Erfolgreiche Intelligent Automation entsteht durch langfristige Partnerschaften, die über traditionelle Beratung hinausgehen. Als strategischer Partner investieren wir in Ihren Erfolg und entwickeln gemeinsam innovative Lösungen für Ihre spezifischen Herausforderungen.'
        },
        whyUs: {
          title: 'Unsere Partnerschaftsvorteile',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Langfristige Commitment mit strategischer Ausrichtung auf Ihre Geschäftsziele'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'EU AI Act Expertise als Grundlage für rechtssichere Automatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Vendor-neutrale Beratung ohne Technologie-Lock-in'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Innovation durch gemeinsame Forschung und Entwicklung'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit strategischen Intelligent Automation Partnern erreichen ihre Transformationsziele nachhaltiger und entwickeln stärkere Innovationsfähigkeiten. Werden Sie Teil unseres Partnernetzwerks!',
        serviceDescription: 'Unsere Intelligent Automation Partnerschaft umfasst die gesamte Wertschöpfungskette von der strategischen Planung über die technische Umsetzung bis hin zur kontinuierlichen Weiterentwicklung und Innovation.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Partnerschaftsplanung und gemeinsame Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Co-Innovation und gemeinsame Technologie-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'EU AI Act Compliance Management und Risiko-Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Vendor-neutrale Technologie-Bewertung und Ecosystem-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Weiterentwicklung und Skalierungsunterstützung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Partnerschaftsansatz',
        description: 'Als strategischer Intelligent Automation Partner verfolgen wir einen kollaborativen, langfristig orientierten Ansatz, der auf Vertrauen, gemeinsamer Innovation und nachhaltiger Wertschöpfung basiert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Partnerschaftsanalyse und gemeinsame Zielsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Co-Development einer maßgeschneiderten Automatisierungsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Agile Implementierung mit kontinuierlichem Feedback und Anpassung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Gemeinsame Innovation und Technologie-Scouting für Zukunftsfähigkeit'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Langfristige Begleitung mit kontinuierlicher Optimierung und Skalierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Echte Intelligent Automation Transformation entsteht durch strategische Partnerschaften, die über traditionelle Beratung hinausgehen. Als Partner investieren wir langfristig in den Erfolg unserer Kunden und entwickeln gemeinsam innovative, EU AI Act konforme Lösungen, die nachhaltigen Geschäftswert schaffen und gleichzeitig höchste Sicherheitsstandards gewährleisten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische Partnerschaftsplanung',
          description: 'Entwicklung einer langfristigen Partnerschaftsstrategie mit gemeinsamer Vision, Zielsetzung und Roadmap für Ihre Intelligent Automation Transformation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Gemeinsame Strategieentwicklung und Zielsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Langfristige Partnerschaftsroadmap mit Meilensteinen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Governance-Strukturen für erfolgreiche Zusammenarbeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'KPI-Definition und Success Metrics für Partnerschaftserfolg'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Co-Innovation und Technologie-Development',
          description: 'Gemeinsame Entwicklung innovativer Automatisierungslösungen durch kollaborative Forschung, Prototyping und Technologie-Scouting.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Gemeinsame Forschungs- und Entwicklungsprojekte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Rapid Prototyping und Proof-of-Concept Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Technologie-Scouting und Innovation-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'IP-Schutz und gemeinsame Verwertungsstrategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'EU AI Act Compliance Partnership',
          description: 'Langfristige Partnerschaft für kontinuierliche EU AI Act Compliance mit proaktivem Risikomanagement und regulatorischem Monitoring.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Kontinuierliche Compliance-Überwachung und -Anpassung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Proaktives Risikomanagement und Frühwarnsysteme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Regulatorisches Monitoring und Impact-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Gemeinsame Audit-Vorbereitung und Compliance-Dokumentation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Vendor-neutrale Technologie-Partnerschaft',
          description: 'Unabhängige Technologie-Bewertung und Ecosystem-Integration ohne Vendor-Lock-in für optimale Automatisierungslösungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Vendor-neutrale Technologie-Bewertung und -Auswahl'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Multi-Vendor-Integration und Ecosystem-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Technologie-Roadmap und Migration-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Vendor-Relationship-Management und Verhandlungsunterstützung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Kompetenzaufbau und Knowledge Transfer',
          description: 'Systematischer Aufbau interner Automatisierungskompetenzen durch strukturierte Wissenstransfer-Programme und Mentoring.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Strukturierte Knowledge Transfer Programme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Mentoring und Coaching für interne Teams'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Aufbau von Centers of Excellence'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Zertifizierungs- und Qualifizierungsprogramme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Kontinuierliche Optimierung und Skalierung',
          description: 'Langfristige Begleitung für kontinuierliche Verbesserung, Skalierung und Evolution Ihrer Automatisierungslandschaft.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Performance-Monitoring und kontinuierliche Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Skalierungsstrategien und Capacity Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Evolution Management und Technologie-Updates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Langfristige Roadmap-Anpassung und Strategieentwicklung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(intelligentAutomationPartnerData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Automation Partner page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
