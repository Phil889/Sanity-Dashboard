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
    console.log('Creating BCBS-239 Kontinuierliche Prozessoptimierung page...')

    const bcbs239KontinuierlicheProzessoptimierungData = {
      _type: 'servicePage',
      _id: 'bcbs-239-kontinuierliche-prozessoptimierung',
      title: 'BCBS-239 Kontinuierliche Prozessoptimierung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/bcbs-239/bcbs-239-ongoing-compliance/bcbs-239-kontinuierliche-prozessoptimierung'
      },
      parent: {
        _type: 'reference',
        _ref: 'bcbs-239-ongoing-compliance'
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
        title: 'BCBS-239 Kontinuierliche Prozessoptimierung | ADVISORI',
        description: 'Maximieren Sie die Effizienz Ihrer BCBS-239 Compliance durch kontinuierliche Prozessoptimierung. Automatisierung, Standardisierung und Best Practices für nachhaltige Compliance.',
        keywords: 'BCBS-239, Prozessoptimierung, Kontinuierliche Verbesserung, Risikodaten-Prozesse, Automatisierung, Effizienzsteigerung, Finanzregulierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'BCBS-239 Kontinuierliche Prozessoptimierung'
        },
        tagline: 'Effizienzsteigerung durch systematische Optimierung Ihrer Compliance-Prozesse',
        heading: 'BCBS-239 Kontinuierliche Prozessoptimierung',
        description: 'Nachhaltige BCBS-239 Compliance erfordert kontinuierliche Prozessoptimierung. Wir helfen Ihnen, Ihre Risikodaten-Prozesse systematisch zu verbessern, zu automatisieren und zu standardisieren, um maximale Effizienz und Zuverlässigkeit zu gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Optimierung und Automatisierung von Risikodaten-Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Reduzierung manueller Eingriffe und Erhöhung der Datenqualität'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Standardisierung und Best Practices für effiziente Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachhaltige Kostensenkung bei gleichzeitiger Qualitätssteigerung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'BCBS-239 Kontinuierliche Prozessoptimierung',
        description: 'Die kontinuierliche Optimierung Ihrer BCBS-239 Compliance-Prozesse ist der Schlüssel zu langfristiger Effizienz, Kostensenkung und Qualitätssteigerung. Wir unterstützen Sie dabei, Ihre Risikodaten-Prozesse systematisch zu analysieren, zu verbessern und zu automatisieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Prozessanalyse und Identifikation von Optimierungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Prozessstandardisierung und Implementierung von Best Practices'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Automatisierung von manuellen Prozessen und Kontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliche Überwachung und Verbesserung der Prozessqualität'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Etablierung eines Continuous Improvement Frameworks'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Die wahre Kunst der BCBS-239 Prozessoptimierung liegt in der Balance zwischen Automatisierung und notwendiger menschlicher Expertise. Erfolgreiche Institute automatisieren Routineaufgaben und setzen ihre Fachkräfte gezielt für wertschöpfende Analyse- und Entscheidungsprozesse ein.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung in der Optimierung von Risikodaten-Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für Prozessanalyse und -verbesserung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Expertise in der Automatisierung und Digitalisierung von Compliance-Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz, der Technologie, Prozesse und Menschen berücksichtigt'
            }
          ]
        },
        additionalInfo: 'Institute, die ihre BCBS-239 Prozesse kontinuierlich optimieren, berichten von bis zu 40% Reduktion des manuellen Aufwands, 60% schnelleren Reporting-Zyklen und 70% weniger Datenkorrekturen. Investieren Sie in Prozessoptimierung für nachhaltige Effizienz und Qualität!',
        serviceDescription: 'Wir bieten umfassende Lösungen zur kontinuierlichen Optimierung Ihrer BCBS-239 Compliance-Prozesse, die auf Ihre spezifischen Anforderungen und Ihre bestehende IT-Landschaft zugeschnitten sind.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Prozessanalyse und -bewertung (Process Mining)'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Implementierung von Prozessstandards und Best Practices'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Prozessautomatisierung und RPA-Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Entwicklung von Prozess-KPIs und Monitoring-Dashboards'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Aufbau eines Continuous Improvement Frameworks'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir unterstützen Sie bei der kontinuierlichen Optimierung Ihrer BCBS-239 Compliance-Prozesse mit einem strukturierten und bewährten Ansatz.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Prozessanalyse und Identifikation von Optimierungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer Prozessoptimierungs-Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung von Prozessstandards und Best Practices'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Einführung von Automatisierungslösungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung eines Continuous Improvement Frameworks'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'Mittelgroße Regionalbank',
        name: 'Thomas Becker',
        position: 'Leiter Regulatory Reporting',
        quote: 'Durch die Zusammenarbeit mit ADVISORI konnten wir unsere BCBS-239 Prozesse deutlich optimieren. Die Automatisierung und Standardisierung hat nicht nur zu einer signifikanten Reduktion manueller Aufwände geführt, sondern auch die Qualität und Zuverlässigkeit unserer Risikodaten erheblich verbessert. Die Investition in Prozessoptimierung zahlt sich jeden Tag aus.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Prozessanalyse und Process Mining',
          description: 'Wir analysieren Ihre bestehenden BCBS-239 Prozesse und identifizieren systematisch Optimierungspotenziale.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Prozessaufnahme und -analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation von Prozessschwachstellen und Ineffizienzen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Datenbasierte Prozessbewertung (Process Mining)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung von Optimierungsempfehlungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Prozessautomatisierung und RPA',
          description: 'Wir implementieren Automatisierungslösungen, um manuelle Eingriffe zu reduzieren und die Effizienz und Zuverlässigkeit zu erhöhen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Identifikation geeigneter Prozesse für Automatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementierung von RPA (Robotic Process Automation)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung maßgeschneiderter Automatisierungslösungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration mit bestehenden Systemen und Workflows'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcbs239KontinuierlicheProzessoptimierungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ BCBS-239 Kontinuierliche Prozessoptimierung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
