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
    console.log('Creating VS-NFD Readiness page...')

    const vsNfdReadinessData = {
      _type: 'servicePage',
      _id: 'vs-nfd-readiness',
      title: 'VS-NFD Readiness',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/vs-nfd/vs-nfd-readiness'
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
        title: 'VS-NFD Readiness | ADVISORI',
        description: 'Professionelle Beratung für VS-NFD Readiness. Wir unterstützen Sie bei der strategischen Vorbereitung und erfolgreichen Implementierung der Verordnung zu systemrelevanten nicht-finanziellen Dienstleistern.',
        keywords: 'VS-NFD, VS-NFD Readiness, Nicht-finanzielle Dienstleister, Systemrelevanz, Finanzstabilität, Aufsichtsrecht, Compliance, DORA, Operational Resilience'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'VS-NFD Readiness'
        },
        tagline: 'Strategische VS-NFD Compliance für digitale Exzellenz',
        heading: 'VS-NFD Readiness',
        description: 'Positionieren Sie Ihr Unternehmen als vertrauenswürdiger Partner im Finanzökosystem. Wir transformieren VS-NFD-Anforderungen von regulatorischen Herausforderungen zu strategischen Wettbewerbsvorteilen durch intelligente Compliance-Architekturen und operative Resilienz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische Transformation zu systemrelevanter Operational Excellence'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte VS-NFD Compliance-Frameworks und Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integration in digitale Resilienz- und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Proaktive Risikominimierung und Reputationsschutz'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'VS-NFD Readiness',
        description: 'Die Verordnung zu systemrelevanten nicht-finanziellen Dienstleistern (VS-NFD) definiert neue Standards für operative Resilienz und Compliance im Finanzökosystem. Als strategischer Partner unterstützen wir Sie dabei, VS-NFD-Readiness als Katalysator für operative Exzellenz und Marktdifferenzierung zu nutzen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Comprehensive VS-NFD Gap-Analyse und Readiness Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Strategische Implementierungsplanung und Governance-Design'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Operative Resilienz-Frameworks und Business Continuity Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Digitale Monitoring- und Reporting-Systeme für VS-NFD Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Change Management und organisatorische Transformation'
          }
        ],
        alert: {
          title: 'Strategischer Compliance-Vorteil',
          content: 'VS-NFD Compliance positioniert Ihr Unternehmen als vertrauenswürdigen, systemrelevanten Partner und eröffnet neue Geschäftsmöglichkeiten im regulierten Finanzsektor.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende VS-NFD-Expertise und regulatorische Intelligence'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für operative Resilienz und Systemrelevanz'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Innovative RegTech-Lösungen für automatisierte Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz: von der Strategie bis zur operativen Umsetzung'
            }
          ]
        },
        additionalInfo: 'Erfolgreiche VS-NFD Readiness erfordert eine strategische Herangehensweise, die operative Resilienz, Governance-Exzellenz und technische Innovation nahtlos integriert. Wir unterstützen Sie dabei, VS-NFD-Compliance als Wettbewerbsvorteil zu etablieren.',
        serviceDescription: 'Unser umfassender VS-NFD Readiness Service kombiniert regulatorische Expertise mit bewährten Implementierungsmethoden und modernsten Technologien für nachhaltige Compliance-Exzellenz.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'VS-NFD Gap-Analyse und strategische Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Operative Resilienz-Frameworks und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Automatisierte Monitoring- und Reporting-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Business Continuity Management und Crisis Response'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Change Management und Compliance-Kultur-Transformation'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte VS-NFD Readiness-Strategie, die regulatorische Compliance mit operativer Exzellenz und strategischen Wettbewerbsvorteilen verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive VS-NFD Readiness Assessment und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategische Implementierungsplanung und Governance-Design'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Aufbau operativer Resilienz-Frameworks und Monitoring-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration in bestehende IT-Landschaften und Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Anpassung an regulatorische Entwicklungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'VS-NFD Readiness ist mehr als Compliance – es ist eine strategische Investition in operative Exzellenz und Systemrelevanz. Wir transformieren regulatorische Anforderungen zu nachhaltigen Wettbewerbsvorteilen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'VS-NFD Readiness Assessment & Strategieentwicklung',
          description: 'Comprehensive Analyse Ihrer aktuellen Readiness und Entwicklung einer strategischen Roadmap für erfolgreiche VS-NFD Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Gap-Analyse und Readiness-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Strategische Implementierungsplanung und Meilenstein-Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risikobewertung und Mitigation-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Business Case Entwicklung und ROI-Quantifizierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Operative Resilienz & Compliance Implementation',
          description: 'Aufbau robuster operativer Resilienz-Frameworks und automatisierter Compliance-Systeme für nachhaltige VS-NFD Readiness.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Operative Resilienz-Frameworks und Governance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automatisierte Monitoring- und Alerting-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Business Continuity Management und Disaster Recovery'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Regulatory Reporting und Documentation Frameworks'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(vsNfdReadinessData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ VS-NFD Readiness page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
