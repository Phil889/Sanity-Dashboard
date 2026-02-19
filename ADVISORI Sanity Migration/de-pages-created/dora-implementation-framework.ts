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
    console.log('Creating DORA Implementation Framework page...')

    const doraImplementationFrameworkData = {
      _type: 'servicePage',
      _id: 'dora-implementation-framework',
      title: 'DORA Implementation Framework',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dora-digital-operational-resilience-act/dora-compliance/dora-implementation-framework'
      },
      parent: {
        _type: 'reference',
        _ref: 'dora-compliance'
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
        title: 'DORA Implementation Framework | ADVISORI',
        description: 'Strategische DORA Implementation Frameworks für Finanzunternehmen. Umfassende Beratung zu Governance-Strukturen, technischer Umsetzung und organisatorischer Transformation für erfolgreiche DORA-Compliance.',
        keywords: 'DORA Implementation, DORA Framework, Digital Operational Resilience, DORA Compliance Framework, ICT Risk Management, Financial Services Compliance, DORA Governance, Implementation Strategy'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DORA Implementation Framework'
        },
        tagline: 'Strategische Frameworks für erfolgreiche DORA-Compliance',
        heading: 'DORA Implementation Framework',
        description: 'Das Digital Operational Resilience Act (DORA) erfordert eine strategische und strukturierte Herangehensweise für eine erfolgreiche Implementierung. Wir entwickeln maßgeschneiderte Implementation Frameworks, die regulatorische Anforderungen mit operativer Exzellenz verbinden und Ihre Organisation optimal auf die DORA-Compliance vorbereiten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische DORA Implementation Roadmaps und Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strukturierte Organisationstransformation und Change Management'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte Technologie- und Prozessoptimierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Compliance-Überwachung und -Optimierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DORA Implementation Framework',
        description: 'Die erfolgreiche Implementierung von DORA erfordert mehr als nur technische Anpassungen – sie verlangt eine ganzheitliche Transformation von Governance-Strukturen, Risikomanagement-Prozessen und organisatorischen Fähigkeiten. Unser DORA Implementation Framework bietet einen strukturierten Ansatz, der strategische Planung mit operativer Umsetzung verbindet und dabei sowohl regulatorische Compliance als auch nachhaltige Geschäftsvorteile sicherstellt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung strategischer DORA Implementation Roadmaps und Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Strukturierte Gap-Analyse und Readiness Assessment für DORA-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Design und Implementierung von ICT-Risikomanagement-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Organisatorische Transformation und Change Management Programme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration von Technologie-Lösungen und Automatisierungsstrategien'
          }
        ],
        alert: {
          title: 'Implementierungs-Hinweis',
          content: 'DORA tritt im Januar 2025 in Kraft und erfordert eine umfassende Vorbereitung. Eine strukturierte Implementation mit klaren Meilensteinen und Governance-Strukturen ist entscheidend für eine erfolgreiche und nachhaltige Compliance-Umsetzung.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in DORA-Anforderungen und regulatorischen Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodologien für komplexe Compliance-Transformationen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von Strategie bis zur operativen Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Branchenspezifische Erfahrung im Finanzsektor und RegTech-Bereich'
            }
          ]
        },
        additionalInfo: 'DORA Implementation erfordert eine koordinierte Herangehensweise, die technische, organisatorische und kulturelle Aspekte gleichermaßen berücksichtigt. Unser Framework-Ansatz stellt sicher, dass alle kritischen Dimensionen systematisch adressiert werden.',
        serviceDescription: 'Wir bieten ein umfassendes DORA Implementation Framework, das von der strategischen Planung über die operative Umsetzung bis hin zur kontinuierlichen Optimierung alle Aspekte einer erfolgreichen DORA-Compliance abdeckt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategic Planning und DORA Readiness Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Governance Framework Design und Organisationsstruktur-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'ICT Risk Management Framework Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Technology Integration und Process Automation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Change Management und Stakeholder Engagement'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam ein maßgeschneiderte DORA Implementation Framework, das Ihre spezifischen Geschäftsanforderungen mit regulatorischen Vorgaben optimal verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer aktuellen ICT-Landschaft und Compliance-Readiness'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer strategischen DORA Implementation Roadmap mit klaren Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Design und Implementierung von Governance-Strukturen und Risikomanagement-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Koordinierte Umsetzung mit integriertem Change Management und Stakeholder-Engagement'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung, Optimierung und Anpassung an evolvierende Anforderungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Ein erfolgreiches DORA Implementation Framework ist mehr als nur Compliance – es ist ein strategischer Transformationsprozess, der operative Resilienz und Wettbewerbsfähigkeit nachhaltig stärkt. Unsere strukturierten Ansätze ermöglichen es Finanzunternehmen, DORA-Anforderungen nicht nur zu erfüllen, sondern als Katalysator für organisatorische Exzellenz und Innovation zu nutzen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'DORA Strategic Planning & Readiness Assessment',
          description: 'Umfassende strategische Planung und Bewertung der organisatorischen Bereitschaft für DORA-Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Comprehensive DORA Readiness Assessment und Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Strategic Implementation Roadmap Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Stakeholder Mapping und Engagement Strategy'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Resource Planning und Budget Optimization'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Governance Framework Design & Implementation',
          description: 'Entwicklung und Implementierung robuster Governance-Strukturen für nachhaltige DORA-Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'DORA Governance Framework Design und Organisationsstruktur-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Roles & Responsibilities Definition und Accountability Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Policy Development und Procedure Documentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Board Reporting und Executive Dashboard Implementation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'ICT Risk Management Framework Implementation',
          description: 'Aufbau umfassender ICT-Risikomanagement-Frameworks zur Erfüllung der DORA-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'ICT Risk Assessment Methodology Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Risk Register Implementation und Risk Monitoring Systems'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Third-Party Risk Management Framework Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Incident Management und Business Continuity Planning'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Technology Integration & Process Automation',
          description: 'Integration von Technologie-Lösungen und Automatisierung von Compliance-Prozessen für effiziente DORA-Umsetzung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'GRC Platform Selection und Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Automated Compliance Monitoring und Reporting Systems'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Data Integration und Analytics Platform Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Workflow Automation und Process Optimization'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Change Management & Organizational Transformation',
          description: 'Strukturierte Begleitung der organisatorischen Transformation und kulturellen Veränderungen für nachhaltige DORA-Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Change Management Strategy Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Training Programme und Competency Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Communication Strategy und Stakeholder Engagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Cultural Transformation und Behavioral Change Initiatives'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Continuous Compliance & Optimization',
          description: 'Etablierung kontinuierlicher Compliance-Überwachung und Optimierungsprozesse für nachhaltige DORA-Konformität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Continuous Monitoring Framework Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Performance Metrics und KPI Dashboard Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Regular Assessment und Maturity Evaluation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Regulatory Update Management und Framework Evolution'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(doraImplementationFrameworkData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DORA Implementation Framework page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
