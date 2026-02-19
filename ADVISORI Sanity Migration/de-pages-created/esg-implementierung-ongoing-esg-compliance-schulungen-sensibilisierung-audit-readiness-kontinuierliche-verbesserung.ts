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
    console.log('Creating ESG Implementierung & Ongoing Compliance page...')

    const esgImplementierungData = {
      _type: 'servicePage',
      _id: 'esg-implementierung-ongoing-esg-compliance-schulungen-sensibilisierung-audit-readiness-kontinuierliche-verbesserung',
      title: 'ESG Implementierung & Ongoing Compliance',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/esg/esg-implementierung-ongoing-esg-compliance-schulungen-sensibilisierung-audit-readiness-kontinuierliche-verbesserung'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'regulatory-reporting'
        }
      },
      seo: {
        _type: 'seo',
        title: 'ESG Implementierung & Ongoing Compliance | ADVISORI',
        description: 'Professionelle ESG-Implementierung mit kontinuierlicher Compliance-Überwachung, Mitarbeiterschulungen und Audit-Readiness für nachhaltige Geschäftspraxis und regulatorische Exzellenz.',
        keywords: 'ESG Implementierung, ESG Compliance, Nachhaltigkeits-Audit, ESG Schulungen, ESG Monitoring, Sustainability Reporting, ESG Risk Management'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ESG Implementierung & Ongoing Compliance'
        },
        tagline: 'Nachhaltige ESG-Excellence für Ihr Unternehmen',
        heading: 'ESG Implementierung & Ongoing Compliance',
        description: 'Transformieren Sie ESG von regulatorischer Anforderung zu strategischem Wettbewerbsvorteil. Wir implementieren robuste ESG-Frameworks mit kontinuierlicher Compliance-Überwachung und Team-Excellence.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische ESG-Implementierung mit messbaren Zielen und KPIs'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Kontinuierliche Compliance-Überwachung und Risk Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Comprehensive Mitarbeiterschulungen und Change Management'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Audit-Ready Dokumentation und Regulatory Reporting Excellence'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ESG Implementierung & Ongoing Compliance',
        description: 'ESG-Compliance entwickelt sich von Nice-to-Have zu Business-Critical. Unternehmen benötigen robuste Implementierungsstrategien, die nicht nur regulatorische Anforderungen erfüllen, sondern auch operative Exzellenz und Stakeholder-Value schaffen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische ESG-Framework-Implementierung und Goal-Setting'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Kontinuierliche Compliance-Monitoring und Performance-Tracking'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Mitarbeiterschulungen und ESG-Awareness-Programme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Audit-Readiness und Regulatory Reporting-Excellence'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Verbesserung und ESG-Innovation'
          }
        ],
        alert: {
          title: 'ESG als Strategic Imperative',
          content: 'ESG-Compliance wird zunehmend zu einem entscheidenden Faktor für Marktpositionierung, Kapitalzugang und langfristige Wettbewerbsfähigkeit. Proaktive Implementierung schafft sustainable competitive advantages.'
        },
        whyUs: {
          title: 'Unsere ESG-Excellence-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in EU-Taxonomie und ESG-Regulatorik'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Implementierungsframeworks aus Premium-Projekten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von Strategy bis Execution'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Fokus auf Business Value und Operational Excellence'
            }
          ]
        },
        additionalInfo: 'Erfolgreiche ESG-Implementierung erfordert mehr als Compliance - sie schafft kulturellen Wandel, operative Effizienz und nachhaltigen Unternehmenswert.',
        serviceDescription: 'Wir begleiten Sie von der strategischen ESG-Planung über die systematische Implementierung bis hin zur kontinuierlichen Excellence-Optimierung. Unser Ansatz verbindet regulatorische Compliance mit Business-Value-Creation.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'ESG-Strategy und Framework-Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Ongoing Compliance-Monitoring und Risk Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Team-Training und Change Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Audit-Preparation und Regulatory Excellence'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Continuous Improvement und ESG Innovation'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser ESG-Excellence-Ansatz',
        description: 'Wir implementieren ESG-Frameworks systematisch und nachhaltig, mit Fokus auf messbare Results, operative Integration und kontinuierliche Value-Creation.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'ESG-Assessment und Strategic Framework Development'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Systematic Implementation und Process Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Team Enablement und Capability Building'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Monitoring Systems und Performance Tracking'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continuous Excellence und Innovation Culture'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns dabei geholfen, ESG von einem Compliance-Thema zu einem strategischen Werttreiber zu transformieren. Ihre systematische Herangehensweise und das Fokus auf operative Excellence haben unsere ESG-Performance und Marktpositionierung signifikant gestärkt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ESG Implementation & Framework Development',
          description: 'Strategische Entwicklung und systematische Implementierung robuster ESG-Frameworks mit messbaren Zielen und operativer Integration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'ESG-Strategy und Materiality Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Framework-Design und KPI-Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Process Integration und System Setup'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Governance Structures und Accountability'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Ongoing Compliance & Continuous Excellence',
          description: 'Kontinuierliche ESG-Compliance-Überwachung mit proaktivem Risk Management, Team-Development und Performance-Optimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Real-time Compliance Monitoring und Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Mitarbeiterschulungen und Awareness-Programme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Audit-Readiness und Documentation Excellence'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Continuous Improvement und Innovation Integration'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(esgImplementierungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ESG Implementierung & Ongoing Compliance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
