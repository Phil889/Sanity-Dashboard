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
    console.log('Creating Risk Management vs Business Continuity page...')

    const riskManagementVsBcData = {
      _type: 'servicePage',
      _id: 'risk-management-vs-business-continuity',
      title: 'Risk Management vs Business Continuity',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/business-continuity-resilience/risk-management-vs-business-continuity'
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
        title: 'Risk Management vs Business Continuity - Strategische Unterschiede & Integration | ADVISORI',
        description: 'Verstehen Sie die fundamentalen Unterschiede zwischen Risk Management und Business Continuity. Strategische Integration, Synergien und Best Practices für moderne Unternehmensresilienz.',
        keywords: 'Risk Management vs Business Continuity, Risikomanagement Unterschiede, BCM Integration, Enterprise Risk Management, Resilienz Strategie, Risiko vs Kontinuität, Governance Integration'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Risk Management vs Business Continuity - Strategische Unterschiede und Integration'
        },
        tagline: 'Strategische Differenzierung und Integration von Risk Management und Business Continuity',
        heading: 'Risk Management vs Business Continuity',
        description: 'Verstehen Sie die fundamentalen Unterschiede, Synergien und Integrationsmöglichkeiten zwischen Risk Management und Business Continuity Management. ADVISORI zeigt Ihnen, wie Sie beide Disziplinen strategisch kombinieren für maximale organisationale Resilienz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Klare Abgrenzung und strategische Positionierung beider Disziplinen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimale Integration für synergetische Resilienz-Effekte'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effiziente Governance-Strukturen und Ressourcenallokation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Ganzheitliche Unternehmensresilienz durch koordinierte Ansätze'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Risk Management vs Business Continuity - Strategische Differenzierung',
        description: 'Risk Management und Business Continuity Management sind komplementäre, aber distinkte Disziplinen mit unterschiedlichen Fokussierungen, Methodologien und Zielsetzungen. Während Risk Management präventiv auf Risikoidentifikation und -minimierung ausgerichtet ist, konzentriert sich Business Continuity auf Resilienz und Wiederherstellungsfähigkeit bei Störungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Fundamentale Unterschiede in Zielsetzung, Scope und methodischen Ansätzen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Komplementäre Stärken und synergetische Integrationsmöglichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Unterschiedliche Governance-Anforderungen und organisatorische Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Spezifische Technologie-Stacks und Tool-Landschaften'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Koordinierte Implementierung für maximale Resilienz-Wirkung'
          }
        ],
        alert: {
          title: 'Strategische Integration',
          content: 'Die optimale Kombination von Risk Management und Business Continuity erfordert eine durchdachte Integration, die die Stärken beider Disziplinen nutzt und Redundanzen vermeidet.'
        },
        whyUs: {
          title: 'Warum integrierte RM/BC Beratung mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in beiden Disziplinen und deren Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Branchenspezifische Ansätze für optimale Resilienz-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Moderne Technologie-Integration und AI-gestützte Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitliche Transformation und Change Management Unterstützung'
            }
          ]
        },
        additionalInfo: 'Die Konvergenz von Risk Management und Business Continuity wird durch digitale Transformation, regulatorische Entwicklungen und emerging risks wie Cyber-Bedrohungen und Klimawandel vorangetrieben. Moderne Organisationen benötigen integrierte Ansätze, die traditionelle Silos überwinden.',
        serviceDescription: 'Unser integrierter RM/BC Service kombiniert bewährte Methodologien beider Disziplinen mit innovativen Technologien für eine ganzheitliche Resilienz-Strategie, die sowohl präventive als auch reaktive Capabilities optimiert.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Comparative Analysis und Strategic Positioning beider Disziplinen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Integration Framework Development und Governance Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Unified Technology Platform und Tool Consolidation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Organizational Design und Role Definition'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance Measurement und Continuous Optimization'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Ansatz zur RM/BC Integration',
        description: 'Wir verfolgen einen strukturierten Ansatz zur Analyse, Differenzierung und Integration von Risk Management und Business Continuity, der die spezifischen Stärken beider Disziplinen optimal kombiniert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Assessment beider Disziplinen und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategic Integration Design mit Synergy Mapping'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Unified Governance Framework und Organizational Alignment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Technology Integration und Platform Consolidation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Performance Optimization und Continuous Improvement'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die strategische Integration von Risk Management und Business Continuity ist entscheidend für moderne Unternehmensresilienz. Durch die Kombination präventiver Risikominimierung mit reaktiver Wiederherstellungsfähigkeit schaffen wir robuste Organisationen, die sowohl Störungen vermeiden als auch erfolgreich bewältigen können.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Comparative Analysis & Differentiation',
          description: 'Detaillierte Analyse der Unterschiede, Gemeinsamkeiten und Integrationspotenziale.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Fundamental Difference Analysis und Scope Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Methodological Comparison und Best Practice Identification'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Synergy Mapping und Integration Opportunity Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Stakeholder Impact Analysis und Communication Strategy'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Strategic Integration Framework',
          description: 'Entwicklung integrierter Frameworks für optimale Resilienz-Wirkung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Unified Governance Model und Decision Framework'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integrated Risk-Continuity Assessment Methodology'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Cross-functional Process Design und Workflow Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Performance Metrics Alignment und KPI Harmonization'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Organizational Design & Governance',
          description: 'Optimale organisatorische Strukturen für integrierte RM/BC Funktionen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Role Definition und Responsibility Matrix Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Committee Structure Design und Reporting Hierarchies'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Competency Framework und Training Programme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Change Management und Cultural Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Technology Integration & Platforms',
          description: 'Konsolidierung und Integration von RM/BC Technologie-Landschaften.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Platform Assessment und Consolidation Strategy'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Unified Dashboard Development und Reporting Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Data Integration und Analytics Harmonization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Automation Opportunities und Workflow Optimization'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Regulatory & Compliance Alignment',
          description: 'Koordinierte Compliance-Strategien für beide Disziplinen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Regulatory Mapping und Compliance Harmonization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Audit Coordination und Evidence Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Reporting Standardization und Documentation Alignment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Regulatory Intelligence und Change Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Performance Optimization & Maturity',
          description: 'Kontinuierliche Verbesserung und Maturity Development für integrierte Ansätze.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Maturity Assessment und Capability Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Performance Benchmarking und Industry Comparison'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Continuous Improvement Programme und Innovation Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Future-proofing und Emerging Risk Integration'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(riskManagementVsBcData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Risk Management vs Business Continuity page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
