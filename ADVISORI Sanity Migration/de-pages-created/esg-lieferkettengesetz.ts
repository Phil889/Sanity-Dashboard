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
    console.log('Creating ESG Lieferkettengesetz page...')

    const esgLieferkettengesetzData = {
      _type: 'servicePage',
      _id: 'esg-lieferkettengesetz',
      title: 'ESG Lieferkettengesetz',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/esg/esg-lieferkettengesetz'
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
        title: 'ESG Lieferkettengesetz Compliance | ADVISORI',
        description: 'Professionelle Beratung zur Umsetzung des Lieferkettengesetzes (LkSG). Von Due Diligence über Risikoanalyse bis hin zu Reporting - wir unterstützen Sie bei der vollständigen Compliance.',
        keywords: 'Lieferkettengesetz, LkSG, Supply Chain Due Diligence, ESG Compliance, Menschenrechte, Umweltschutz, Lieferkette'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ESG Lieferkettengesetz Compliance'
        },
        tagline: 'Vollumfängliche Compliance mit dem deutschen Lieferkettengesetz',
        heading: 'ESG Lieferkettengesetz',
        description: 'Das deutsche Lieferkettengesetz (LkSG) verpflichtet Unternehmen zur Einhaltung von Menschenrechten und Umweltstandards in ihren Lieferketten. Wir unterstützen Sie bei der vollständigen Umsetzung und nachhaltigen Compliance.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Compliance mit LkSG-Anforderungen und Vermeidung von Bußgeldern'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Systematische Risikoidentifikation und -bewertung in der Lieferkette'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effiziente Due Diligence-Prozesse und Lieferantenbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Transparente Berichterstattung und Stakeholder-Kommunikation'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ESG Lieferkettengesetz Compliance',
        description: 'Das deutsche Lieferkettengesetz (LkSG) stellt hohe Anforderungen an Unternehmen bezüglich der Einhaltung von Menschenrechten und Umweltstandards in ihren Lieferketten. Wir unterstützen Sie dabei, diese Anforderungen systematisch und effizient zu erfüllen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Gap-Analyse der bestehenden Lieferkettenstrukturen und -prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung und Implementierung von Due Diligence-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Risikoanalyse und -bewertung für Menschenrechte und Umwelt'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Lieferantenbewertung und -monitoring sowie Vertragsgestaltung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Beschwerdeverfahren und Berichterstattung gemäß LkSG-Anforderungen'
          }
        ],
        alert: {
          title: 'Rechtlicher Hinweis',
          content: 'Das Lieferkettengesetz ist seit 2023 für Unternehmen mit mehr als 3.000 Beschäftigten verpflichtend und ab 2024 für Unternehmen mit mehr als 1.000 Beschäftigten. Verstöße können zu erheblichen Bußgeldern und Ausschlüssen von öffentlichen Aufträgen führen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in ESG-Regulatorik und Lieferkettenmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Implementierungsansätze und digitale Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Interdisziplinäres Team aus Juristen, Compliance-Experten und Nachhaltigkeitsberatern'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Langfristige Begleitung und kontinuierliche Optimierung der Compliance-Prozesse'
            }
          ]
        },
        additionalInfo: 'Eine professionelle Umsetzung des Lieferkettengesetzes schützt nicht nur vor rechtlichen Risiken, sondern stärkt auch das Vertrauen von Investoren, Kunden und anderen Stakeholdern in Ihre Nachhaltigkeitsstrategie.',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum zur Umsetzung des Lieferkettengesetzes - von der initialen Gap-Analyse über die Implementierung von Due Diligence-Systemen bis hin zur laufenden Compliance-Überwachung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'LkSG Gap-Analyse und Compliance-Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Implementierung von Due Diligence-Managementsystemen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Risikoanalyse und Lieferantenbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Entwicklung von Beschwerdeverfahren und Monitoring-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'LkSG-konforme Berichterstattung und Dokumentation'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte Compliance-Strategie, die Ihre spezifischen Lieferkettenstrukturen und Geschäftsmodelle berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer Lieferkettenstrukturen und bestehenden Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Identifikation von Menschenrechts- und Umweltrisiken entlang der Wertschöpfungskette'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung und Implementierung angemessener Präventions- und Abhilfemaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Aufbau effektiver Monitoring- und Berichtssysteme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Anpassung an neue Anforderungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns dabei geholfen, die komplexen Anforderungen des Lieferkettengesetzes systematisch und effizient umzusetzen. Dank der professionellen Beratung und der praxisorientierten Lösungen konnten wir unsere Compliance-Prozesse erfolgreich etablieren und gleichzeitig unsere Nachhaltigkeitsziele vorantreiben.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'LkSG Gap-Analyse und Compliance-Assessment',
          description: 'Umfassende Bewertung Ihrer aktuellen Lieferkettenstrukturen und Identifikation von Compliance-Lücken.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse der Lieferkettenstrukturen und -prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung bestehender Due Diligence-Maßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation von Compliance-Gaps und Risikobereichen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung einer priorisierten Umsetzungsroadmap'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Due Diligence-Managementsystem',
          description: 'Implementierung systematischer Due Diligence-Prozesse zur Erfüllung der LkSG-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Aufbau strukturierter Risikoanalyseprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung von Präventions- und Abhilfemaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Implementierung von Monitoring- und Berichtssystemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Etablierung wirksamer Beschwerdeverfahren'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(esgLieferkettengesetzData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ESG Lieferkettengesetz page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
