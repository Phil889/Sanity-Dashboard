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
    console.log('Creating NIS2 Crisis Management page...')

    const nis2CrisisManagementData = {
      _type: 'servicePage',
      _id: 'nis2-crisis-management',
      title: 'NIS2 Crisis Management',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/nis2/nis2-security-measures/nis2-crisis-management/'
      },
      parent: {
        _type: 'reference',
        _ref: 'nis2-security-measures'
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
        title: 'NIS2 Crisis Management | ADVISORI',
        description: 'Professionelles NIS2-konformes Krisenmanagement für kritische Infrastrukturen. Incident Response, Business Continuity und Cyber-Resilience nach EU-NIS2-Richtlinie.',
        keywords: 'NIS2 Krisenmanagement, Cyber Crisis Response, Business Continuity NIS2, Incident Management, Critical Infrastructure Security, EU Cybersecurity'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'NIS2 Crisis Management'
        },
        tagline: 'Cyber-Resilience für kritische Infrastrukturen',
        heading: 'NIS2 Crisis Management',
        description: 'Professionelles Krisenmanagement nach NIS2-Richtlinie für den Schutz kritischer und wichtiger Einrichtungen. Wir entwickeln robuste Crisis Response-Strategien, die Ihre operative Kontinuität sicherstellen und regulatorische Compliance gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'NIS2-konforme Crisis Response und Incident Management Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Integrierte Business Continuity und Cyber-Resilience-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Automatisierte Meldeprozesse und Stakeholder-Kommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Cross-sektorale Koordination und Behörden-Interface'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'NIS2 Crisis Management',
        description: 'Die NIS2-Richtlinie fordert von kritischen und wichtigen Einrichtungen umfassende Krisenmanagement-Kapazitäten zur Bewältigung von Cybersecurity-Vorfällen und Betriebsstörungen. Ein professionelles Crisis Management ist essentiell für regulatorische Compliance und operative Resilienz.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Incident Response Planning und Crisis Management Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Business Continuity Management und Disaster Recovery'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Stakeholder-Kommunikation und Behördenmeldungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Cross-sektorale Kooperation und Information Sharing'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Crisis Simulation und Emergency Response Testing'
          }
        ],
        alert: {
          title: 'NIS2 Compliance-Risiko',
          content: 'Unzureichende Krisenmanagement-Kapazitäten können zu erheblichen Sanktionen bis zu 10 Millionen Euro oder 2% des weltweiten Jahresumsatzes führen. Eine professionelle Crisis Management-Infrastruktur ist für NIS2-Compliance unerlässlich.'
        },
        whyUs: {
          title: 'Unsere Crisis Management-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte NIS2-Kenntnisse und sektorspezifische Erfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Crisis Response-Frameworks aus kritischen Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integrierte Cyber-Physical Security-Expertise'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'End-to-End Crisis Management von Prevention bis Recovery'
            }
          ]
        },
        additionalInfo: 'Effektives Krisenmanagement nach NIS2 erfordert nicht nur technische Incident Response-Kapazitäten, sondern auch strategische Business Continuity-Planung und nahtlose Stakeholder-Koordination für maximale Resilienz.',
        serviceDescription: 'Wir entwickeln und implementieren ganzheitliche Crisis Management-Systeme, die alle NIS2-Anforderungen erfüllen und Ihre Organisation optimal auf Cybersecurity-Vorfälle und Betriebsstörungen vorbereiten. Unser Ansatz verbindet technische Excellence mit strategischer Business Continuity.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Crisis Management Framework Design und Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Incident Response Team Setup und Training'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Business Continuity Planning und Testing'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Stakeholder Communication und Regulatory Reporting'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Crisis Simulation und Preparedness Assessment'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Crisis Management-Ansatz',
        description: 'Wir entwickeln maßgeschneiderte Krisenmanagement-Strategien, die technische Incident Response mit strategischer Business Continuity verbinden und alle NIS2-Compliance-Anforderungen erfüllen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Risk Assessment und Crisis Scenario Planning'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Crisis Management Framework Development'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Incident Response Team Formation und Training'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Crisis Simulation und Testing Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continuous Improvement und Lessons Learned Integration'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns ein hocheffektives Crisis Management-System entwickelt, das nicht nur alle NIS2-Anforderungen erfüllt, sondern auch unsere operative Resilienz signifikant gestärkt hat. Ihre Expertise in kritischen Infrastrukturen war entscheidend für unseren Compliance-Erfolg.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Crisis Response & Incident Management',
          description: 'Entwicklung und Implementation professioneller Incident Response-Kapazitäten mit automatisierten Eskalationsprozessen und koordinierter Stakeholder-Kommunikation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'NIS2-konforme Incident Response Playbooks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Automated Escalation und Alert Systems'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Crisis Communication Templates und Protocols'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Regulatory Reporting Automation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Business Continuity & Recovery Planning',
          description: 'Strategische Business Continuity-Planung mit integrierten Disaster Recovery-Strategien für maximale operative Resilienz während und nach Krisenzeiten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Business Impact Analysis und Recovery Strategies'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Alternative Operations Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Supply Chain Continuity Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Recovery Testing und Validation'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(nis2CrisisManagementData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ NIS2 Crisis Management page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
