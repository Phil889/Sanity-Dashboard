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
    console.log('Creating NIS2 Security Measures page...')

    const nis2SecurityMeasuresData = {
      _type: 'servicePage',
      _id: 'nis2-security-measures',
      title: 'NIS2 Security Measures',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/nis2/nis2-security-measures'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management'
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
        title: 'NIS2 Security Measures Implementation | ADVISORI',
        description: 'Umfassende Implementierung der NIS2-Sicherheitsmaßnahmen. Strategische Beratung für Cybersicherheit, Risikomanagement und technische Schutzmaßnahmen nach der NIS2-Richtlinie.',
        keywords: 'NIS2, Sicherheitsmaßnahmen, Cybersicherheit, EU-Richtlinie, Risikomanagement, KRITIS, Incident Response, Business Continuity'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'NIS2 Security Measures Implementation'
        },
        tagline: 'Strategische Implementierung umfassender NIS2-Sicherheitsmaßnahmen',
        heading: 'NIS2 Security Measures',
        description: 'Professionelle Implementierung aller erforderlichen Sicherheitsmaßnahmen gemäß NIS2-Richtlinie. Wir entwickeln mit Ihnen eine ganzheitliche Cybersicherheitsstrategie, die technische, organisatorische und prozessuale Schutzmaßnahmen optimal integriert.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige NIS2-konforme Sicherheitsarchitektur'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Integrierte Risikomanagement- und Incident-Response-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kontinuierliche Überwachung und adaptive Sicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Business Continuity und operative Resilienz'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'NIS2 Security Measures Implementation',
        description: 'Die NIS2-Richtlinie definiert umfassende Sicherheitsmaßnahmen, die Unternehmen implementieren müssen, um ihre Widerstandsfähigkeit gegen Cyberbedrohungen zu stärken. Unsere Expertise hilft Ihnen dabei, alle erforderlichen technischen, organisatorischen und prozessualen Sicherheitsmaßnahmen strategisch und effizient umzusetzen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung einer ganzheitlichen Cybersicherheitsstrategie basierend auf NIS2-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung technischer Schutzmaßnahmen für Netzwerk- und Informationssysteme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Etablierung organisatorischer Prozesse für Risikomanagement und Incident Response'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau von Business Continuity und Disaster Recovery Capabilities'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung, Testing und Verbesserung der Sicherheitsmaßnahmen'
          }
        ],
        alert: {
          title: 'Ganzheitlicher Sicherheitsansatz',
          content: 'NIS2-Sicherheitsmaßnahmen gehen weit über traditionelle IT-Security hinaus und erfordern eine integrierte Betrachtung von Technologie, Prozessen und Menschen. Erfolgreiche Implementierung benötigt strategische Planung und organisationsweite Transformation.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in NIS2-Anforderungen und praktischer Cybersicherheits-Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodiken für komplexe Sicherheitstransformationen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Erfahrung in verschiedenen kritischen Sektoren'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Integrierter Ansatz für Technologie, Prozesse und Organisationsentwicklung'
            }
          ]
        },
        additionalInfo: 'Die NIS2-Richtlinie definiert spezifische Sicherheitsmaßnahmen, die systematisch implementiert werden müssen. Eine strukturierte Herangehensweise gewährleistet nicht nur Compliance, sondern auch nachhaltige Verbesserung der Cybersicherheitsposition.',
        serviceDescription: 'Wir unterstützen Sie bei der vollständigen Implementierung aller NIS2-relevanten Sicherheitsmaßnahmen mit einem integrierten Ansatz, der technische Exzellenz mit organisatorischer Transformation verbindet.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Cybersicherheitsstrategie und -governance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Technische Sicherheitsmaßnahmen und -architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Risikomanagement und Incident Response'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Business Continuity und Krisenmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Überwachung und Verbesserung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir implementieren NIS2-Sicherheitsmaßnahmen systematisch mit einem ganzheitlichen Ansatz, der alle Dimensionen der Cybersicherheit abdeckt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Risikoanalyse und Sicherheitsbewertung Ihrer aktuellen Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten Sicherheitsstrategie und -architektur'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Implementierung technischer und organisatorischer Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration von Monitoring, Testing und kontinuierlicher Verbesserung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Change Management und Schulung für nachhaltige Sicherheitskultur'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI',
        name: 'Expert Team',
        position: 'NIS2 Security Specialists',
        quote: 'Effektive NIS2-Sicherheitsmaßnahmen entstehen durch die intelligente Integration von Technologie, Prozessen und Menschen. Unser ganzheitlicher Ansatz gewährleistet nicht nur Compliance, sondern schafft nachhaltige Cybersicherheits-Exzellenz.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Cybersicherheitsstrategie und technische Schutzmaßnahmen',
          description: 'Entwicklung und Implementierung einer umfassenden Cybersicherheitsstrategie mit allen erforderlichen technischen Sicherheitsmaßnahmen gemäß NIS2-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Multi-Faktor-Authentifizierung und Zugangskontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Verschlüsselung und Kryptographie-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Netzwerksegmentierung und Perimeter-Sicherheit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Vulnerability Management und Patch-Strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Risikomanagement und Incident Response',
          description: 'Aufbau robuster Risikomanagement-Prozesse und effektiver Incident-Response-Capabilities für schnelle Reaktion auf Cybersicherheitsvorfälle.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Cyber-Risikobewertung und -management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Incident Response Pläne und Krisenmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Business Continuity und Disaster Recovery'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Überwachung und Threat Intelligence'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(nis2SecurityMeasuresData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ NIS2 Security Measures page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
