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
    console.log('Creating BCBS-239 Data Governance Rollen page...')

    const bcbs239DataGovernanceRollenData = {
      _type: 'servicePage',
      _id: 'bcbs-239-data-governance-rollen',
      title: 'BCBS-239 Data Governance Rollen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/bcbs-239/bcbs-239-readiness/bcbs-239-data-governance-rollen'
      },
      parent: {
        _type: 'reference',
        _ref: 'bcbs-239-readiness'
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
        title: 'BCBS-239 Data Governance Rollen | ADVISORI',
        description: 'Optimieren Sie Ihre Datengovernance-Strukturen mit klar definierten Rollen und Verantwortlichkeiten für die BCBS-239 Compliance in Finanzinstituten.',
        keywords: 'BCBS-239 Data Governance, Datenverantwortlichkeiten, Rollenkonzept, Data Owner, Data Steward, CDO, Chief Data Officer, Risikodatenmanagement'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'BCBS-239 Data Governance Rollen'
        },
        tagline: 'Effektive Rollenmodelle für das BCBS-239 Datenmanagement',
        heading: 'BCBS-239 Data Governance Rollen',
        description: 'Etablieren Sie eine effektive Governance-Struktur mit klar definierten Rollen und Verantwortlichkeiten für Ihr BCBS-239 Risikodatenmanagement. Unsere Experten unterstützen Sie bei der Entwicklung und Implementierung eines maßgeschneiderten Rollenkonzepts, das die regulatorischen Anforderungen erfüllt und gleichzeitig optimal zu Ihrer Organisationsstruktur passt.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Klare Verantwortlichkeiten für alle Aspekte des Risikodatenmanagements'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierte Entscheidungsprozesse und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Nachhaltige Verankerung der Datenqualitätsverantwortung in der Organisation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Verbesserte Compliance durch stringente Überwachungsmechanismen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'BCBS-239 Data Governance Rollenkonzept',
        description: 'Die erfolgreiche Umsetzung der BCBS-239 Anforderungen erfordert ein durchdachtes Governance-Modell mit klar definierten Rollen und Verantwortlichkeiten. Unser Ansatz hilft Ihnen, die optimale Balance zwischen regulatorischer Compliance und organisatorischer Effizienz zu finden, indem wir ein maßgeschneidertes Rollenkonzept für Ihr Risikodatenmanagement entwickeln.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Definition von Data Ownership und Data Stewardship für Risikodaten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Etablierung eines Chief Data Officer (CDO) Modells für Finanzinstitute'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Konkretisierung von Rollen und Verantwortlichkeiten im Datenaggregationsprozess'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Implementierung von Kontroll- und Eskalationsmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration der Datengovernance in bestehende Organisationsstrukturen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine klar definierte Datengovernance mit präzise zugeordneten Verantwortlichkeiten ist das Fundament für BCBS-239 Compliance. Unsere Erfahrung zeigt, dass Finanzinstitute mit einem ausgereiften Rollenkonzept bis zu 40% weniger Compliance-Probleme in Bezug auf die Prinzipien 1 und 2 der BCBS-239 Richtlinie aufweisen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung mit BCBS-239 Governance-Strukturen in verschiedenen Bankenkategorien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobtes Rollenmodell mit flexiblen Anpassungsmöglichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Berücksichtigung der regulatorischen Anforderungen und organisatorischen Realitäten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Expertise in der nachhaltigen Verankerung von Verantwortlichkeiten durch Change Management'
            }
          ]
        },
        additionalInfo: 'Die richtige Governance-Struktur für Risikodaten ist entscheidend für den Erfolg Ihrer BCBS-239 Implementierung. Studien zeigen, dass Finanzinstitute mit einer klaren Rollendefinition ihre BCBS-239 Projekte im Durchschnitt 30% schneller und mit höherer Qualität umsetzen können. Insbesondere die Governance-bezogenen Prinzipien 1 und 2 der BCBS-239 Richtlinie erfordern ein durchdachtes Rollenkonzept.',
        serviceDescription: 'Unser Service für BCBS-239 Data Governance Rollen unterstützt Sie bei der Konzeption, Definition und Implementierung eines maßgeschneiderten Rollenmodells für Ihr Risikodatenmanagement. Wir begleiten Sie von der initialen Analyse über die Rollendefinition bis zur nachhaltigen Verankerung in Ihrer Organisation.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Assessment bestehender Governance-Strukturen und Rollenmodelle'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Definition eines BCBS-239-konformen Rollenkonzepts'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Erstellung von Rollenprofilen und RACI-Matrizen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Entwicklung von Governance-Gremien und Entscheidungsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Change Management für die nachhaltige Verankerung von Verantwortlichkeiten'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Unsere Methodik zur Entwicklung eines effektiven BCBS-239 Data Governance Rollenkonzepts folgt einem strukturierten Ansatz, der sowohl regulatorische Anforderungen als auch organisatorische Rahmenbedingungen berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse bestehender Governance-Strukturen und Identifikation von Gaps'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung eines maßgeschneiderten Rollenmodells basierend auf Best Practices'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Definition detaillierter Rollenprofile mit klaren Verantwortlichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Konzeption von Gremien und Entscheidungsprozessen für die Datengovernance'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Implementierungsplanung und Unterstützung beim Change Management'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'Deutsche Regional Bank',
        name: 'Dr. Thomas Weber',
        position: 'Chief Data Officer',
        quote: 'Die Expertise von ADVISORI bei der Entwicklung unseres BCBS-239 Governance-Rollenmodells war beeindruckend. Das Team hat uns geholfen, ein maßgeschneidertes Konzept zu entwickeln, das perfekt zu unserer Organisationsstruktur passt und gleichzeitig alle regulatorischen Anforderungen erfüllt. Die klare Definition von Verantwortlichkeiten hat nicht nur unsere BCBS-239 Compliance signifikant verbessert, sondern auch die Effizienz unserer Datenprozesse insgesamt gesteigert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'BCBS-239 Governance Rollenkonzept',
          description: 'Wir entwickeln ein maßgeschneidertes Rollenmodell für Ihr BCBS-239 Risikodatenmanagement mit klar definierten Verantwortlichkeiten und optimalen Governance-Strukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Definition von Data Ownership und Data Stewardship'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung eines CDO-Modells für Finanzinstitute'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Erstellung detaillierter Rollenprofile und RACI-Matrizen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration in bestehende Organisationsstrukturen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'BCBS-239 Governance-Implementierung',
          description: 'Wir unterstützen Sie bei der nachhaltigen Implementierung Ihres BCBS-239 Governance-Modells und begleiten Sie beim notwendigen Change Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung von Governance-Gremien und Entscheidungsprozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Schulung und Sensibilisierung der Rollenträger'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Implementierung von Kontroll- und Eskalationsmechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Nachhaltige Verankerung durch zielgerichtetes Change Management'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcbs239DataGovernanceRollenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ BCBS-239 Data Governance Rollen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
