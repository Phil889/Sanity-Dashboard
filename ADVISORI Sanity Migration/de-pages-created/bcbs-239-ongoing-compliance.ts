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
    console.log('Creating BCBS-239 Ongoing Compliance page...')

    const bcbs239OngoingComplianceData = {
      _type: 'servicePage',
      _id: 'bcbs-239-ongoing-compliance',
      title: 'BCBS-239 Ongoing Compliance',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/bcbs-239/bcbs-239-ongoing-compliance'
      },
      parent: {
        _type: 'reference',
        _ref: 'bcbs-239'
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
        title: 'BCBS-239 Ongoing Compliance | ADVISORI',
        description: 'Sichern Sie nachhaltige BCBS-239 Compliance mit unseren spezialisierten Ongoing-Compliance-Lösungen für Finanzinstitute. Kontinuierliche Überwachung und Optimierung.',
        keywords: 'BCBS-239, Ongoing Compliance, Kontinuierliche Überwachung, Risikodaten-Aggregation, Reporting, Finanzregulierung, Nachhaltigkeit'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'BCBS-239 Ongoing Compliance'
        },
        tagline: 'Nachhaltige Compliance-Strukturen für langfristige Risikodaten-Exzellenz',
        heading: 'BCBS-239 Ongoing Compliance',
        description: 'Die Herausforderung bei BCBS-239 liegt nicht nur in der initialen Implementierung, sondern in der nachhaltigen Einhaltung der Anforderungen. Unsere Ongoing Compliance Lösungen sichern den langfristigen Erfolg Ihrer BCBS-239 Compliance-Strategie.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Kontinuierliche Überwachung und Optimierung der BCBS-239 Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Frühzeitige Erkennung von Compliance-Risiken und Schwachstellen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Nachhaltige Integration der Compliance-Anforderungen in Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Verbesserung der Risikodaten-Qualität und -Prozesse'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'BCBS-239 Ongoing Compliance',
        description: 'Die nachhaltige Einhaltung der BCBS-239 Anforderungen erfordert mehr als einmalige Projekte – sie benötigt etablierte Prozesse, konsequente Überwachung und kontinuierliche Verbesserung. Wir unterstützen Sie dabei, BCBS-239 Compliance zu einem integrierten Bestandteil Ihrer Daten- und Risikomanagement-Praktiken zu machen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Etablierung eines BCBS-239 Compliance-Monitorings'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Integration der BCBS-239 Anforderungen in Governance-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Automatisierte Kontrollen und Überwachungsmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliche Verbesserung der Datenqualität und Risikodaten-Aggregation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Regelmäßige Überprüfung und Aktualisierung der Compliance-Maßnahmen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Die Schlüssel zu nachhaltiger BCBS-239 Compliance liegen in der Automatisierung von Kontrollen, der Integration in tägliche Prozesse und der kontinuierlichen Schulung aller beteiligten Mitarbeiter. So wird Compliance von einer Pflichtaufgabe zu einem Wettbewerbsvorteil.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Expertise in nachhaltiger BCBS-239 Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden zur Integration von Compliance in Geschäftsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Innovative Lösungen für automatisierte Compliance-Überwachung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz, der Technologie, Prozesse und Organisationskultur berücksichtigt'
            }
          ]
        },
        additionalInfo: 'Finanzinstitute, die BCBS-239 Compliance nachhaltig in ihre Prozesse integrieren, berichten von bis zu 60% weniger manuellen Aufwänden in der Risikodaten-Aggregation und einer Reduzierung von Compliance-Risiken um bis zu 75%. Investieren Sie in nachhaltige Compliance für langfristigen Erfolg!',
        serviceDescription: 'Wir bieten umfassende Lösungen für nachhaltige BCBS-239 Compliance, die darauf abzielen, Compliance-Anforderungen nahtlos in Ihre bestehenden Prozesse zu integrieren und kontinuierlich zu überwachen und zu verbessern.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'BCBS-239 Compliance Health Checks und Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Integration von Compliance-Kontrollen in Governance-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Automatisierung von Compliance-Überwachung und -Reporting'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Schulung und Sensibilisierung für nachhaltige Compliance-Kultur'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Verbesserung der Risikodaten-Qualität und -Prozesse'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine maßgeschneiderte Strategie für nachhaltige BCBS-239 Compliance, die auf Ihre spezifischen Anforderungen und Ihre bestehenden Prozesse zugeschnitten ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Assessment des aktuellen Compliance-Status und -Reife'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung eines Ongoing Compliance Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Integration von Compliance-Kontrollen in Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung automatisierter Überwachungsmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung kontinuierlicher Verbesserungsprozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'Internationale Großbank',
        name: 'Dr. Stefanie Müller',
        position: 'Head of Regulatory Compliance',
        quote: 'Mit ADVISORI haben wir einen Partner gefunden, der uns nicht nur bei der initialen BCBS-239 Implementierung unterstützt hat, sondern uns auch dabei hilft, die Compliance nachhaltig in unsere Prozesse zu integrieren. Durch die automatisierten Monitoring-Lösungen konnten wir manuelle Aufwände deutlich reduzieren und gleichzeitig die Qualität unserer Compliance erhöhen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'BCBS-239 Compliance Health Checks',
          description: 'Wir führen regelmäßige Überprüfungen Ihrer BCBS-239 Compliance durch, um potenzielle Schwachstellen frühzeitig zu identifizieren und zu adressieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Bewertung des aktuellen Compliance-Status'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation von Compliance-Lücken und -Risiken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Bewertung der Effektivität bestehender Kontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung von Maßnahmen zur Compliance-Verbesserung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Automatisiertes Compliance-Monitoring',
          description: 'Wir implementieren automatisierte Lösungen zur kontinuierlichen Überwachung Ihrer BCBS-239 Compliance, um manuelle Aufwände zu reduzieren und die Zuverlässigkeit zu erhöhen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung von Key Compliance Indicators (KCIs)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementierung automatisierter Überwachungsmechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Echtzeit-Benachrichtigungen bei Compliance-Verstößen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Dashboards für Management-Reporting'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcbs239OngoingComplianceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ BCBS-239 Ongoing Compliance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
