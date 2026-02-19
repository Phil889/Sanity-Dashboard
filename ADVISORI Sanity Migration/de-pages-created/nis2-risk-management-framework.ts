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
    console.log('Creating NIS2 Risk Management Framework page...')

    const nis2RiskManagementFrameworkData = {
      _type: 'servicePage',
      _id: 'nis2-risk-management-framework',
      title: 'NIS2 Risk Management Framework',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/nis2/nis2-readiness/nis2-risk-management-framework'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management-nis2-nis2-readiness'
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
        title: 'NIS2 Risk Management Framework | ADVISORI',
        description: 'Implementieren Sie ein robustes NIS2-konformes Risikomanagement-Framework. Expertenberatung für Risikoidentifikation, -bewertung und -steuerung nach NIS2-Richtlinie.',
        keywords: 'NIS2 Risikomanagement, Cyber-Risiken, Risikoframework, NIS2 Compliance, Informationssicherheit, Risikobewertung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'NIS2 Risk Management Framework'
        },
        tagline: 'Strukturiertes Risikomanagement für NIS2-Compliance',
        heading: 'NIS2 Risk Management Framework',
        description: 'Entwickeln Sie ein systematisches Risikomanagement-Framework, das den NIS2-Anforderungen entspricht. Wir unterstützen Sie bei der Implementierung effektiver Risikoidentifikations-, -bewertungs- und -steuerungsprozesse.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Identifikation und Bewertung von Cyber-Risiken'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'NIS2-konforme Risikomanagement-Prozesse und -Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte Risikosteuerung und kontinuierliches Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Praxiserprobte Risk-Management-Frameworks und Methodiken'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'NIS2 Risk Management Framework',
        description: 'Die NIS2-Richtlinie verlangt von kritischen und wichtigen Einrichtungen die Implementierung eines umfassenden Risikomanagement-Frameworks. Dieses Framework muss systematische Ansätze zur Risikoidentifikation, -bewertung und -steuerung umfassen und kontinuierlich an die sich entwickelnde Bedrohungslandschaft angepasst werden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung eines strukturierten Risikomanagement-Frameworks nach NIS2-Standards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung systematischer Risikoidentifikations- und Bewertungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Etablierung effektiver Risikosteuerungs- und Mitigationsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau kontinuierlicher Risiko-Monitoring- und Review-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration mit bestehenden Governance- und Compliance-Strukturen'
          }
        ],
        alert: {
          title: 'NIS2-Expertentipp',
          content: 'Ein effektives NIS2-Risikomanagement-Framework basiert auf der kontinuierlichen Identifikation, Bewertung und Steuerung von Cyber-Risiken. Die Integration von Threat Intelligence und die regelmäßige Anpassung an neue Bedrohungen sind dabei essentiell.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in NIS2-Risikomanagement und Cyber-Security-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Methodiken und bewährte Risk-Management-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Anpassung an verschiedene Sektoren und Organisationsgrößen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz mit Integration in bestehende Governance-Strukturen'
            }
          ]
        },
        additionalInfo: 'Ein strukturiertes NIS2-Risikomanagement-Framework reduziert nicht nur Cyber-Risiken, sondern schafft auch die Grundlage für fundierte Sicherheitsentscheidungen und effiziente Ressourcenallokation.',
        serviceDescription: 'Wir unterstützen Sie bei der vollständigen Implementierung eines NIS2-konformen Risikomanagement-Frameworks - von der initialen Risikoanalyse bis zur kontinuierlichen Optimierung Ihrer Risk-Management-Prozesse.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Risk Assessment und Cyber-Risiko-Identifikation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Framework-Design und Prozessimplementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Risk Treatment und Mitigationsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Kontinuierliches Risk Monitoring und Review'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Integration mit Business Continuity und Incident Response'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen ein maßgeschneidertes NIS2-Risikomanagement-Framework, das sich nahtlos in Ihre bestehenden Geschäftsprozesse integriert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der aktuellen Risikomanagement-Landschaft und NIS2-Gap-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design eines strukturierten Risk-Management-Frameworks mit klaren Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung systematischer Risikoidentifikations- und Bewertungsmethoden'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung effektiver Risikosteuerungs- und Monitoring-Mechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Anpassung an neue Bedrohungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die Implementierung eines strukturierten NIS2-Risikomanagement-Frameworks mit ADVISORI hat unsere Fähigkeit zur systematischen Risikoidentifikation und -steuerung erheblich verbessert. Die praxisnahe Herangehensweise und die kontinuierliche Begleitung waren dabei besonders wertvoll.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Risk Assessment & Identifikation',
          description: 'Umfassende Identifikation und Bewertung von Cyber-Risiken nach NIS2-Standards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Systematische Asset-Inventarisierung und Threat Modeling'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Vulnerability Assessment und Schwachstellenanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Quantitative und qualitative Risikobewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Risk Register und Risiko-Dokumentation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Framework-Implementierung',
          description: 'Aufbau eines strukturierten und NIS2-konformen Risikomanagement-Frameworks.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Design von Risk-Management-Prozessen und -Verfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementierung von Risk Treatment und Mitigationsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Etablierung von Risk Monitoring und KPI-Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration in bestehende Governance-Strukturen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(nis2RiskManagementFrameworkData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ NIS2 Risk Management Framework page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
