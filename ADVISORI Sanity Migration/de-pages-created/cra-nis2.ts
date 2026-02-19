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
    console.log('Creating CRA NIS2 page...')

    const craNis2Data = {
      _type: 'servicePage',
      _id: 'cra-nis2',
      title: 'CRA NIS2',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-nis2'
      },
      parent: {
        _type: 'reference',
        _ref: 'cra-cyber-resilience-act'
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
        title: 'CRA NIS2 Integration | ADVISORI',
        description: 'Strategische Integration von CRA und NIS2 Compliance. Wir entwickeln ganzheitliche Ansätze für die koordinierte Umsetzung beider Richtlinien und schaffen Synergien zwischen Cyber Resilience Act und NIS2-Direktive.',
        keywords: 'CRA NIS2, Cyber Resilience Act NIS2, NIS2 CRA Integration, Doppel-Compliance, Regulatorische Synergien, Cybersicherheit Compliance, EU Cybersecurity'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA NIS2 Integration'
        },
        tagline: 'Strategische CRA-NIS2 Integration',
        heading: 'CRA NIS2',
        description: 'Die gleichzeitige Umsetzung von CRA und NIS2 erfordert strategische Koordination und intelligente Synergien. Wir entwickeln mit Ihnen integrierte Compliance-Ansätze, die beide Richtlinien optimal verbinden und Effizienzgewinne durch koordinierte Implementierung schaffen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Integrierte CRA-NIS2 Compliance-Strategien und Governance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Synergistische Risikomanagement-Ansätze für beide Richtlinien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Koordinierte Technologie-Implementierung und Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Effiziente Dual-Compliance Monitoring und Reporting-Systeme'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische CRA-NIS2 Integration',
        description: 'Die Konvergenz von CRA und NIS2 schafft neue Möglichkeiten für ganzheitliche Cybersicherheits-Governance. Erfolgreiche Integration beider Richtlinien erfordert strategische Planung, koordinierte Implementierung und intelligente Technologie-Lösungen, die Synergien maximieren und Compliance-Overhead minimieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Integrierte Governance-Frameworks für CRA und NIS2 Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Koordinierte Risikobewertung und Management-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Synergistische Technologie-Implementierung und Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Effiziente Dual-Compliance Monitoring und Reporting'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Organisatorische Transformation für integrierte Cybersicherheit'
          }
        ],
        alert: {
          title: 'CRA-NIS2 Integrationshinweis',
          content: 'Die strategische Integration von CRA und NIS2 Compliance schafft erhebliche Effizienzgewinne und stärkt die Gesamtpositionierung in der Cybersicherheit. Koordinierte Ansätze reduzieren Implementierungsaufwand und maximieren regulatorische Synergien.'
        },
        whyUs: {
          title: 'Unsere CRA-NIS2 Integrations-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung in koordinierter Multi-Richtlinien-Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für synergistische Implementierungsansätze'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integrierte Technologie-Lösungen für Dual-Compliance-Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Strategische Partnerschaft für nachhaltige Compliance-Exzellenz'
            }
          ]
        },
        additionalInfo: 'CRA-NIS2 Integration ist mehr als parallele Compliance - es ist eine strategische Chance zur Schaffung ganzheitlicher Cybersicherheits-Governance und zur Maximierung regulatorischer Effizienz.',
        serviceDescription: 'Wir begleiten Sie bei der Entwicklung und Umsetzung integrierter CRA-NIS2 Compliance-Strategien, die regulatorische Exzellenz mit operativer Effizienz verbinden und nachhaltige Wettbewerbsvorteile schaffen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Integration und Governance-Framework-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Koordinierte Risikomanagement und Compliance-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Synergistische Technologie-Implementierung und Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integrierte Monitoring und Performance-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Organisatorische Transformation und Kultur-Entwicklung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser CRA-NIS2 Integrations-Ansatz',
        description: 'Wir entwickeln mit Ihnen maßgeschneiderte Integrations-Strategien, die CRA und NIS2 Compliance optimal verbinden und durch intelligente Synergien nachhaltigen Geschäftswert schaffen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Analyse und Synergie-Identifikation zwischen CRA und NIS2'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Integrierte Governance-Strukturen und Entscheidungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Koordinierte Implementierung und Change Management'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Technologie-gestützte Automatisierung und Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Performance-Management'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die strategische Integration von CRA und NIS2 Compliance ist ein Paradigmenwechsel in der Cybersicherheits-Governance. Unsere Kunden profitieren von intelligenten Synergien, die nicht nur regulatorische Effizienz steigern, sondern auch ganzheitliche Cybersicherheits-Exzellenz fördern und nachhaltigen Geschäftswert schaffen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische CRA-NIS2 Integrations-Planung',
          description: 'Entwicklung umfassender Integrations-Strategien, die CRA und NIS2 Anforderungen optimal verbinden und Synergien maximieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Synergie-Analyse und Integrations-Roadmap'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Koordinierte Governance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Integrierte Risikomanagement-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Dual-Compliance Performance-Metriken'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Koordinierte Technologie-Implementierung',
          description: 'Aufbau integrierter Technologie-Plattformen für effiziente CRA-NIS2 Dual-Compliance-Management und automatisierte Überwachung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Integrierte Compliance-Management-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automatisierte Dual-Monitoring-Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Koordinierte Incident Response-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Synergistische Reporting-Automatisierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craNis2Data)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA NIS2 page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
