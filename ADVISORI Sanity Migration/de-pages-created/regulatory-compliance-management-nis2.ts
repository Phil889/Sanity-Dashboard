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
    console.log('Creating NIS2 Regulatory Compliance Management page...')

    const nis2Data = {
      _type: 'servicePage',
      _id: 'regulatory-compliance-management-nis2',
      title: 'NIS2 Compliance Management',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/nis2'
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
        title: 'NIS2 Compliance Management | ADVISORI',
        description: 'Spezialisierte NIS2-Richtlinien-Compliance für kritische Infrastrukturen und digitale Dienste. Cybersecurity-Governance, Incident-Response und EU-weite NIS2-Konformität.',
        keywords: 'NIS2 Compliance, Network Information Security, Cybersecurity Governance, Critical Infrastructure Security, NIS2 Directive, EU Cybersecurity, Incident Response'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'NIS2 Compliance Management'
        },
        tagline: 'Cybersecurity-Excellence für kritische Infrastrukturen',
        heading: 'NIS2 Compliance Management',
        description: 'Die NIS2-Richtlinie stellt höchste Anforderungen an Cybersecurity-Governance kritischer Infrastrukturen. Wir entwickeln maßgeschneiderte NIS2-Compliance-Frameworks, die robuste Cybersecurity-Praktiken implementieren und EU-weite Konformität gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende NIS2-Compliance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Advanced Cybersecurity-Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Proaktive Incident-Response-Mechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Risk-Assessment und Monitoring'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'NIS2-Richtlinien-Compliance für kritische Infrastrukturen',
        description: 'Die NIS2-Richtlinie erweitert die Cybersecurity-Anforderungen für kritische Infrastrukturen erheblich. Wir entwickeln comprehensive Compliance-Frameworks, die nicht nur regulatorische Anforderungen erfüllen, sondern auch operative Cybersecurity-Resilienz maximieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Gap-Analyse bestehender Cybersecurity-Maßnahmen gegen NIS2-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Design und Implementierung von NIS2-konformen Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung robuster Incident-Response-Procedures'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliche Risk-Assessment und Vulnerability-Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Supply-Chain-Security und Third-Party-Risk-Management'
          }
        ],
        alert: {
          title: 'NIS2-Compliance-Kritikalität',
          content: 'NIS2-Verstöße können zu erheblichen Bußgeldern und operationalen Einschränkungen führen. Für kritische Infrastrukturen ist proaktive Compliance essentiell für Geschäftskontinuität und regulatorische Akzeptanz. Unser systematischer Ansatz gewährleistet nachhaltige NIS2-Konformität.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende NIS2-Expertise und EU-Cybersecurity-Kenntnisse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Cybersecurity-Governance-Methodologien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Critical-Infrastructure-Erfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Integrated Risk-Management und Compliance-Automation'
            }
          ]
        },
        additionalInfo: 'NIS2-Compliance ist mehr als regulatorische Pflicht - es ist strategische Grundlage für vertrauensvolle Digitalisierung und nachhaltige Cybersecurity-Resilienz.',
        serviceDescription: 'Wir bieten end-to-end NIS2-Compliance-Lösungen, die von initialer Gap-Analyse bis zu kontinuierlichem Monitoring alle Aspekte der NIS2-Richtlinie abdecken.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Comprehensive NIS2-Gap-Analysis und Compliance-Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Cybersecurity-Governance-Framework und Policy-Development'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Incident-Response-Procedures und Crisis-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Continuous-Monitoring und Risk-Assessment-Automation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Supply-Chain-Security und Vendor-Risk-Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen systematischen, risikominimierenden Ansatz für NIS2-Compliance, der technische Excellence mit strategischer Governance-Integration verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Current-State-Analysis und NIS2-Gap-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design maßgeschneiderter Cybersecurity-Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Schrittweise Implementation mit Continuous-Testing'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration in bestehende Risk-Management-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimization und Compliance-Monitoring'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Das NIS2-Compliance-Framework von ADVISORI hat unsere Cybersecurity-Governance revolutioniert. Die systematische Implementation und kontinuierliche Optimization gewährleisten nicht nur regulatorische Konformität, sondern auch operative Cybersecurity-Excellence.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'NIS2 Gap Analysis & Compliance Strategy',
          description: 'Wir führen comprehensive Gap-Analysen durch und entwickeln strategische Roadmaps für vollständige NIS2-Compliance kritischer Infrastrukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detailed Current-State-Assessment gegen NIS2-Requirements'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Risk-Prioritized Compliance-Roadmap mit Timeline'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Cost-Benefit-Analysis für Cybersecurity-Investments'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Stakeholder-Engagement und Board-Level-Reporting'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Cybersecurity Governance & Incident Response',
          description: 'Wir implementieren robuste Cybersecurity-Governance-Strukturen und entwickeln comprehensive Incident-Response-Capabilities für NIS2-konforme Operations.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'NIS2-konforme Cybersecurity-Governance-Framework'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Advanced Incident-Response-Procedures und Playbooks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Continuous-Monitoring und Threat-Detection-Systems'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Supply-Chain-Security und Third-Party-Risk-Assessment'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(nis2Data)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ NIS2 Regulatory Compliance Management page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
