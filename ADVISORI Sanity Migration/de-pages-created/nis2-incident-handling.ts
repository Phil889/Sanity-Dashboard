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
    console.log('Creating NIS2 Incident Handling page...')

    const nis2IncidentHandlingData = {
      _type: 'servicePage',
      _id: 'nis2-incident-handling',
      title: 'NIS2 Incident Handling',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/nis2/nis2-security-measures/nis2-incident-handling'
      },
      parent: {
        _type: 'reference',
        _ref: 'nis2-security-measures'
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
        title: 'NIS2 Incident Handling | ADVISORI',
        description: 'Professionelle Unterstützung bei der Implementierung von NIS2-konformen Incident Handling Prozessen. Wir entwickeln effektive Systeme zur Erkennung, Meldung und Bewältigung von Cybersicherheitsvorfällen.',
        keywords: 'NIS2, Incident Handling, Cybersicherheit, Vorfallmanagement, IT-Sicherheit, Compliance, Incident Response, CSIRT'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'NIS2 Incident Handling'
        },
        tagline: 'Professionelle Systeme für effektives Cybersicherheits-Vorfallmanagement',
        heading: 'NIS2 Incident Handling',
        description: 'Die NIS2-Richtlinie stellt stringente Anforderungen an das Incident Handling kritischer und wichtiger Einrichtungen. Wir unterstützen Sie bei der Entwicklung und Implementierung robuster Prozesse zur Erkennung, Meldung und Bewältigung von Cybersicherheitsvorfällen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'NIS2-konforme Incident Response Prozesse und Verfahren'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte Erkennung und Klassifizierung von Sicherheitsvorfällen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effiziente Meldeprozesse an Behörden und Stakeholder'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Reduzierte Ausfallzeiten und verbesserte Cyber-Resilienz'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'NIS2 Incident Handling',
        description: 'Das Incident Handling nach NIS2 erfordert strukturierte Prozesse zur schnellen Erkennung, effektiven Reaktion und ordnungsgemäßen Meldung von Cybersicherheitsvorfällen. Diese Disziplin ist entscheidend für die Aufrechterhaltung der Cybersicherheit und Compliance mit regulatorischen Anforderungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung und Implementierung NIS2-konformer Incident Response Pläne'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Aufbau effizienter CSIRT/SOC-Strukturen und Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration automatisierter Monitoring- und Alerting-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung strukturierter Meldeprozesse für Behörden und Stakeholder'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Schulung und Training von Incident Response Teams'
          }
        ],
        alert: {
          title: 'Regulatory Insight',
          content: 'NIS2 erfordert die Meldung erheblicher Sicherheitsvorfälle binnen 24 Stunden nach Erkennung an die zuständigen Behörden. Eine effektive Incident Response kann den Unterschied zwischen kontrollierbaren Störungen und existenzbedrohenden Krisen ausmachen.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in NIS2-Anforderungen und Cybersecurity Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden zur Implementierung effektiver Incident Response Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Erfahrung mit kritischen Infrastrukturen und regulatorischen Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von Technologie bis zu organisatorischen Maßnahmen'
            }
          ]
        },
        additionalInfo: 'Effektives Incident Handling nach NIS2 kombiniert technische Exzellenz mit organisatorischer Disziplin. Es erfordert nicht nur die richtigen Tools und Prozesse, sondern auch geschulte Teams, klare Verantwortlichkeiten und eine Kultur der kontinuierlichen Verbesserung.',
        serviceDescription: 'Wir unterstützen Sie bei der vollständigen Transformation Ihrer Incident Handling Capabilities gemäß NIS2-Anforderungen. Unser Ansatz kombiniert bewährte Frameworks mit modernsten Technologien und organisatorischen Best Practices.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'NIS2 Incident Handling Gap-Analyse und Readiness Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Design und Implementierung von Incident Response Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Aufbau und Optimierung von CSIRT/SOC-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integration von Monitoring-, Detection- und Response-Technologien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulung, Training und Simulation von Incident Response Szenarien'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte Incident Handling Strategie, die technische Excellence mit organisatorischer Effizienz verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse bestehender Incident Handling Capabilities'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design NIS2-konformer Incident Response Frameworks und Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung technischer Lösungen und organisatorischer Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Training, Testing und kontinuierliche Optimierung der Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung von Metriken und KPIs für kontinuierliche Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI Cybersecurity GmbH',
        name: 'Dr. Stefan Weber',
        position: 'Senior Partner Cybersecurity',
        quote: 'Effektives Incident Handling ist das Rückgrat jeder Cybersecurity-Strategie. Mit NIS2 werden die Anforderungen nicht nur komplexer, sondern auch die Konsequenzen bei Versäumnissen drastischer. Unsere bewährten Methoden helfen Organisationen dabei, nicht nur compliant zu werden, sondern echte Cyber-Resilienz aufzubauen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Incident Response Framework Design',
          description: 'Wir entwickeln maßgeschneiderte Incident Response Frameworks, die NIS2-Anforderungen erfüllen und gleichzeitig operationale Effizienz maximieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'NIS2-konforme Incident Classification und Prioritization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Strukturierte Eskalationsprozesse und Kommunikationswege'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Integration mit bestehenden IT-Service-Management Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Automatisierte Workflows für schnelle Response-Zeiten'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'CSIRT/SOC Aufbau und Optimierung',
          description: 'Wir unterstützen beim Aufbau effektiver Computer Security Incident Response Teams und Security Operations Centers nach NIS2-Standards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Organisationsdesign und Rollenmodelle für CSIRT/SOC'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Technologie-Stack Integration und Tool-Orchestrierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung von Standard Operating Procedures (SOPs)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Metriken, KPIs und kontinuierliche Verbesserungsprozesse'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(nis2IncidentHandlingData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ NIS2 Incident Handling page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
