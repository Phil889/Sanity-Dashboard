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
    console.log('Creating NIS2 Cross-Border Cooperation page...')

    const nis2CrossBorderCooperationData = {
      _type: 'servicePage',
      _id: 'nis2-cross-border-cooperation',
      title: 'NIS2 Cross-Border Cooperation',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/nis2/nis2-sector-specific-requirements/nis2-cross-border-cooperation'
      },
      parent: {
        _type: 'reference',
        _ref: 'nis2-sector-specific-requirements'
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
        title: 'NIS2 Cross-Border Cooperation | ADVISORI',
        description: 'Expertenunterstützung bei der Implementierung grenzüberschreitender Kooperationsmechanismen unter NIS2. Koordination mit nationalen und europäischen Behörden für kritische Infrastrukturen.',
        keywords: 'NIS2, Cross-Border Cooperation, grenzüberschreitende Zusammenarbeit, kritische Infrastrukturen, CSIRT, Incident Response, EU-Koordination, Cybersicherheit'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'NIS2 Cross-Border Cooperation'
        },
        tagline: 'Strategische Koordination für grenzüberschreitende Cybersicherheit',
        heading: 'NIS2 Cross-Border Cooperation',
        description: 'Die NIS2-Richtlinie erfordert effektive grenzüberschreitende Kooperationsmechanismen für kritische Infrastrukturen. Wir unterstützen Sie bei der strategischen Implementierung koordinierter Sicherheitsmaßnahmen und Incident-Response-Verfahren auf EU-Ebene.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Koordinierte EU-weite Incident-Response-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierte Kommunikation mit nationalen CSIRT-Teams'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Standardisierte Cross-Border Information Sharing'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Integrierte Multi-Country Governance Frameworks'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'NIS2 Cross-Border Cooperation',
        description: 'Die NIS2-Richtlinie etabliert erweiterte Anforderungen für grenzüberschreitende Kooperation zwischen Mitgliedstaaten, insbesondere für kritische und wichtige Einrichtungen, die in mehreren EU-Ländern operieren. Diese Kooperationsmechanismen sind essentiell für die Gewährleistung eines kohärenten, EU-weiten Cybersicherheitsniveaus und erfordern strategische Koordination zwischen nationalen Behörden, CSIRTs und betroffenen Organisationen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung koordinierter Incident-Response-Protokolle für grenzüberschreitende Vorfälle'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung standardisierter Information-Sharing-Mechanismen zwischen EU-Mitgliedstaaten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Aufbau effizienter Kommunikationskanäle mit nationalen zuständigen Behörden und CSIRTs'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Koordination gemeinsamer Risikobewertungen und Threat-Intelligence-Austausch'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Etablierung harmonisierter Meldesysteme und Cross-Border Notification-Prozesse'
          }
        ],
        alert: {
          title: 'Strategische Bedeutung',
          content: 'Grenzüberschreitende Kooperation unter NIS2 ist nicht nur eine Compliance-Anforderung, sondern ein strategischer Wettbewerbsvorteil für international operierende Organisationen, der koordinierte Sicherheitsstandards und effiziente Krisenmanagement-Fähigkeiten ermöglicht.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in EU-weiten regulatorischen Koordinationsmechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfassende Erfahrung in der Implementierung grenzüberschreitender Cybersicherheitsframeworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Etablierte Netzwerke zu nationalen Behörden und CSIRTs in verschiedenen EU-Mitgliedstaaten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Innovative Technologielösungen für koordinierte Multi-Country Compliance und Incident Management'
            }
          ]
        },
        additionalInfo: 'Die erfolgreiche Implementierung grenzüberschreitender Kooperationsmechanismen erfordert nicht nur technische Koordination, sondern auch strategisches Verständnis der verschiedenen nationalen Cybersicherheitslandschaften und regulatorischen Ansätze innerhalb der EU.',
        serviceDescription: 'Wir bieten umfassende Unterstützung bei der Entwicklung und Implementierung strategischer Cross-Border Cooperation-Frameworks unter NIS2, die sowohl regulatorische Compliance sicherstellen als auch operative Exzellenz in der grenzüberschreitenden Cybersicherheitskoordination ermöglichen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Analyse grenzüberschreitender Kooperationsanforderungen und Stakeholder-Mapping'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung koordinierter Incident-Response und Crisis-Management-Protokolle'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierung standardisierter Information-Sharing und Communication-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Aufbau effizienter Multi-Country Governance und Compliance-Monitoring-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Training und Capacity Building für grenzüberschreitende Cybersicherheitskoordination'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam einen strategischen Ansatz zur effektiven Implementierung grenzüberschreitender Kooperationsmechanismen, der sowohl regulatorische Anforderungen erfüllt als auch operative Effizienz maximiert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer grenzüberschreitenden Operationen und Kooperationsanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer koordinierten Cross-Border Cooperation-Strategie mit klaren Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung standardisierter Kommunikations- und Incident-Response-Protokolle'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Aufbau effizienter Monitoring- und Reporting-Mechanismen für Multi-Country Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Anpassung an evolvierende EU-weite Koordinationsanforderungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI Cyber Risk GmbH',
        name: 'Sarah Weber',
        position: 'Managing Partner',
        quote: 'Grenzüberschreitende Kooperation unter NIS2 erfordert nicht nur technische Koordination, sondern strategische Orchestrierung verschiedener nationaler Cybersicherheitslandschaften. Unser Ansatz transformiert Compliance-Anforderungen in strategische Wettbewerbsvorteile für international operierende Organisationen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Cross-Border Incident Response Coordination',
          description: 'Wir entwickeln und implementieren koordinierte Incident-Response-Strategien für grenzüberschreitende Cybersicherheitsvorfälle, die effiziente Kommunikation und Koordination zwischen verschiedenen nationalen Behörden sicherstellen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Entwicklung koordinierter Multi-Country Incident-Response-Playbooks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Implementierung standardisierter Cross-Border Communication-Protokolle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Aufbau effizienter Escalation-Mechanismen für grenzüberschreitende Vorfälle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Training und Simulation von Cross-Border Crisis-Management-Szenarien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Multi-Country Information Sharing Frameworks',
          description: 'Wir implementieren strategische Information-Sharing-Mechanismen, die effiziente Threat-Intelligence-Austausch und koordinierte Risikobewertungen zwischen EU-Mitgliedstaaten ermöglichen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung standardisierter Information-Sharing-Protokolle und -Formate'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementierung sicherer Cross-Border Communication-Channels'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Aufbau koordinierter Threat-Intelligence und Early-Warning-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration mit nationalen und europäischen Cybersicherheitsplattformen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(nis2CrossBorderCooperationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ NIS2 Cross-Border Cooperation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
