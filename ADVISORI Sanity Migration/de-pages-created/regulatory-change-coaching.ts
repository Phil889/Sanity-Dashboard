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
    console.log('Creating Regulatory Change Coaching page...')

    const regulatoryChangeCoachingData = {
      _type: 'servicePage',
      _id: 'regulatory-change-coaching',
      title: 'Regulatory Change Coaching',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/enterprise-grc/regulatory-change-coaching'
      },
      parent: {
        _type: 'reference',
        _ref: 'enterprise-grc'
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
        title: 'Regulatory Change Coaching | ADVISORI',
        description: 'Expertenlösungen für Regulatory Change Coaching. Professionelle Begleitung bei regulatorischen Transformationen, Compliance-Anpassungen und strategischem Change Management für evolvierende Regulierungslandschaften.',
        keywords: 'Regulatory Change Coaching, Compliance Transformation, Regulatory Change Management, GRC Coaching, Regulatory Intelligence, Change Management Beratung, Compliance Adaptation, Regulatory Readiness'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Regulatory Change Coaching'
        },
        tagline: 'Strategische Begleitung für erfolgreiche regulatorische Transformationen',
        heading: 'Regulatory Change Coaching',
        description: 'In einer sich rasant entwickelnden Regulierungslandschaft ist proaktives Change Management entscheidend für nachhaltigen Geschäftserfolg. Wir begleiten Sie als erfahrene Coaches durch komplexe regulatorische Transformationen und entwickeln maßgeschneiderte Strategien für die erfolgreiche Adaptation an neue Compliance-Anforderungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische Regulatory Change Management Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Proaktive Regulatory Intelligence und Trend-Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Maßgeschneiderte Compliance-Transformationsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Organisatorische Readiness und Capability Building'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Regulatory Change Coaching',
        description: 'Regulatorische Veränderungen stellen Unternehmen vor komplexe Herausforderungen, die weit über reine Compliance-Anpassungen hinausgehen. Erfolgreiche regulatorische Transformationen erfordern strategisches Change Management, organisatorische Anpassungsfähigkeit und proaktive Vorbereitung auf evolvierende Anforderungen. Unser Regulatory Change Coaching kombiniert tiefgreifende regulatorische Expertise mit bewährten Change Management Methodologien, um Ihre Organisation optimal auf regulatorische Transformationen vorzubereiten und nachhaltige Compliance-Exzellenz zu etablieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung strategischer Regulatory Change Management Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Proaktive Regulatory Intelligence und Horizon Scanning Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Maßgeschneiderte Compliance-Transformationsstrategien und Roadmaps'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Organisatorische Readiness Assessments und Capability Building'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Stakeholder Engagement und Change Communication Strategien'
          }
        ],
        alert: {
          title: 'Strategischer Hinweis',
          content: 'Die Geschwindigkeit regulatorischer Veränderungen nimmt kontinuierlich zu. Organisationen, die proaktive Regulatory Change Management Capabilities entwickeln, schaffen nachhaltige Wettbewerbsvorteile und reduzieren Compliance-Risiken erheblich.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in regulatorischen Frameworks und Change Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodologien für komplexe Compliance-Transformationen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenübergreifende Erfahrung in regulatorischen Veränderungsprozessen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von Strategie bis zur operativen Umsetzung'
            }
          ]
        },
        additionalInfo: 'Regulatory Change Coaching geht über traditionelle Compliance-Beratung hinaus und fokussiert auf die Entwicklung organisatorischer Anpassungsfähigkeit und strategischer Vorausschau. Unser Ansatz integriert regulatorische Expertise mit Change Management Best Practices.',
        serviceDescription: 'Wir bieten ein umfassendes Spektrum an Regulatory Change Coaching Services, das von strategischer Planung bis zur operativen Implementierung reicht. Unser Ansatz kombiniert regulatorische Tiefenexpertise mit bewährten Change Management Methodologien.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategic Regulatory Change Planning und Framework Development'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Regulatory Intelligence Systems und Trend Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Compliance Transformation Roadmaps und Implementation Strategies'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Organizational Readiness Assessments und Capability Building'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Stakeholder Engagement und Change Communication Programs'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine maßgeschneiderte Regulatory Change Strategy, die Ihre Organisation optimal auf evolvierende Compliance-Anforderungen vorbereitet und nachhaltige Anpassungsfähigkeit schafft.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse der regulatorischen Landschaft und Trend-Identifikation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Assessment der organisatorischen Readiness und Change Capability'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung strategischer Change Management Frameworks und Roadmaps'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementation von Regulatory Intelligence und Monitoring Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Begleitung und Optimierung der Change Prozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Erfolgreiche regulatorische Transformationen erfordern mehr als nur Compliance-Anpassungen – sie benötigen strategisches Change Management und organisatorische Anpassungsfähigkeit. Unser Regulatory Change Coaching befähigt Organisationen, regulatorische Veränderungen nicht nur zu bewältigen, sondern als strategische Chancen für Wettbewerbsvorteile zu nutzen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategic Regulatory Change Planning',
          description: 'Entwicklung umfassender Strategien und Frameworks für die proaktive Bewältigung regulatorischer Veränderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Regulatory Landscape Analysis und Trend Identification'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Strategic Change Management Framework Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risk-based Prioritization und Impact Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Long-term Regulatory Roadmap Planning'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Regulatory Intelligence & Monitoring',
          description: 'Implementierung proaktiver Systeme zur frühzeitigen Identifikation und Bewertung regulatorischer Entwicklungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Regulatory Horizon Scanning und Early Warning Systems'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automated Regulatory Monitoring und Alert Systems'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Regulatory Impact Analysis und Assessment Tools'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Stakeholder Intelligence und Engagement Tracking'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Compliance Transformation Coaching',
          description: 'Professionelle Begleitung bei der Transformation von Compliance-Funktionen und -Prozessen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Compliance Function Transformation und Modernization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Process Reengineering und Automation Strategies'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Technology Integration und Digital Transformation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Performance Measurement und Continuous Improvement'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Organizational Readiness & Capability Building',
          description: 'Entwicklung organisatorischer Fähigkeiten und Readiness für erfolgreiche regulatorische Anpassungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Organizational Readiness Assessments und Gap Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Change Capability Development und Skills Building'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Leadership Development und Change Champion Programs'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Cultural Transformation und Mindset Change Initiatives'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Stakeholder Engagement & Communication',
          description: 'Strategische Stakeholder-Kommunikation und Engagement-Programme für erfolgreiche Change-Prozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Stakeholder Mapping und Engagement Strategy Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Change Communication Planning und Execution'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Resistance Management und Conflict Resolution'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Feedback Systems und Continuous Dialogue Mechanisms'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Implementation Support & Optimization',
          description: 'Operative Unterstützung bei der Implementierung regulatorischer Veränderungen und kontinuierliche Optimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Implementation Planning und Project Management Support'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Change Execution Coaching und Mentoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Performance Monitoring und Success Measurement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Continuous Improvement und Lessons Learned Integration'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(regulatoryChangeCoachingData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Regulatory Change Coaching page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
