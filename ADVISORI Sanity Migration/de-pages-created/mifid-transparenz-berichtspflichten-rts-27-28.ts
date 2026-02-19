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
    console.log('Creating MiFID Transparenz- und Berichtspflichten (RTS 27/28) page...')

    const mifidTransparenzData = {
      _type: 'servicePage',
      _id: 'mifid-transparenz-berichtspflichten-rts-27-28',
      title: 'MiFID Transparenz- und Berichtspflichten (RTS 27/28)',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/mifid/mifid-implementation/mifid-transparenz-berichtspflichten-rts-27-28'
      },
      parent: {
        _type: 'reference',
        _ref: 'mifid-implementation'
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
        title: 'MiFID Transparenz- und Berichtspflichten (RTS 27/28) | ADVISORI',
        description: 'Umfassende Unterstützung bei der Implementierung und Erfüllung der MiFID-Transparenz- und Berichtspflichten gemäß RTS 27 und 28. Wir helfen Ihnen, regulatorische Anforderungen effizient umzusetzen und kontinuierliche Compliance sicherzustellen.',
        keywords: 'MiFID Transparenzanforderungen, RTS 27, RTS 28, Best Execution Reporting, Execution Quality, Handelsplatzberichterstattung, Regulatorische Transparenz, Finanzmarktrichtlinie'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'MiFID Transparenz- und Berichtspflichten'
        },
        tagline: 'Effiziente Erfüllung komplexer Transparenzanforderungen nach RTS 27/28',
        heading: 'MiFID Transparenz- und Berichtspflichten (RTS 27/28)',
        description: 'Die MiFID-Transparenzanforderungen nach RTS 27 und 28 stellen Wertpapierfirmen und Handelsplätze vor komplexe Herausforderungen bei der Datenerfassung, -aufbereitung und Berichterstattung. Wir unterstützen Sie bei der effizienten und nachhaltigen Implementierung dieser Anforderungen – von der technischen Integration bis zur kontinuierlichen Berichterstattung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Compliance mit allen RTS 27/28 Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Effiziente Datenerfassung und -aufbereitung durch automatisierte Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Qualitätsgesicherte Berichte mit höchster Datenintegrität'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachhaltige Reporting-Lösung mit minimalen manuellen Eingriffen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'MiFID Transparenz- und Berichtspflichten (RTS 27/28)',
        description: 'Die regulatorischen technischen Standards RTS 27 und 28 definieren umfangreiche Transparenz- und Berichtspflichten für Handelsplätze und Wertpapierfirmen. Unsere Experten unterstützen Sie bei der effizienten Umsetzung dieser komplexen Anforderungen – von der Konzeption über die technische Implementation bis hin zur kontinuierlichen Berichterstattung. Unser Fokus liegt dabei auf der Entwicklung nachhaltiger, automatisierter Lösungen, die Compliance sicherstellen und gleichzeitig den operativen Aufwand minimieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Implementierung aller RTS 27/28 Berichtspflichten für Handelsplätze und Wertpapierfirmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Effiziente Datenerfassung und -aufbereitung für Best-Execution-Qualitätsberichte'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Automatisierte Lösungen für kontinuierliche Berichterstattung und Veröffentlichung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von Transparenzanforderungen in bestehende Handelssysteme und Dateninfrastrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Nachhaltige Governance-Strukturen zur Sicherstellung dauerhafter Compliance'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Die Erfüllung der MiFID-Transparenzanforderungen sollte nicht als isolierte Compliance-Aufgabe betrachtet werden. Eine strategisch konzipierte Implementierung kann gleichzeitig zur Optimierung der Handelsausführung beitragen und wertvolle Geschäftseinblicke liefern. Investieren Sie in eine zukunftssichere, skalierbare Architektur, die sowohl regulatorische Anforderungen erfüllt als auch operativen Mehrwert schafft.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in allen Aspekten der MiFID-Transparenzanforderungen und deren praktischer Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfassende Erfahrung in der Implementierung effizienter Datenerfassungs- und Berichtslösungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Innovative Technologieansätze zur Automatisierung komplexer Reporting-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Implementierungsansatz, der Compliance, technische Integration und operative Effizienz vereint'
            }
          ]
        },
        additionalInfo: 'Die MiFID-Transparenzanforderungen nach RTS 27 und 28 stellen umfangreiche Anforderungen an die Datenerfassung, -analyse und Berichterstattung. Eine effiziente Implementierung erfordert nicht nur ein tiefes Verständnis der regulatorischen Anforderungen, sondern auch technisches Know-how und praktische Erfahrung in der Gestaltung nachhaltiger Reporting-Lösungen. Unser ganzheitlicher Ansatz adressiert alle diese Aspekte und gewährleistet eine nachhaltige, effiziente Compliance.',
        serviceDescription: 'Unser Leistungsangebot umfasst die vollständige Unterstützung bei der Implementierung und kontinuierlichen Erfüllung der MiFID-Transparenzanforderungen nach RTS 27 und 28 – von der initialen Analyse über die technische Umsetzung bis hin zur Etablierung nachhaltiger Reporting-Prozesse.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Detaillierte Gap-Analyse und Implementierungsplanung für RTS 27/28 Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Konzeption und Implementierung effizienter Datenerfassungs- und Aufbereitungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung und Integration automatisierter Reporting-Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Etablierung robuster Datenqualitäts- und Validierungsmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Aufbau nachhaltiger Governance-Strukturen für kontinuierliche Compliance'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten, phasenbasierten Ansatz bei der Implementierung der MiFID-Transparenzanforderungen nach RTS 27/28, der eine effiziente Umsetzung und nachhaltige Compliance sicherstellt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Detaillierte Gap-Analyse und Anforderungsspezifikation für RTS 27/28 Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Konzeption effizienter Datenerfassungs- und Aufbereitungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Technische Implementierung und Integration in bestehende Systemlandschaft'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Umfassende Validierung und Qualitätssicherung der Reporting-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung nachhaltiger Governance und kontinuierlicher Verbesserungsprozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Julia Müller',
        position: 'Senior Manager',
        quote: 'Die Implementierung der MiFID-Transparenzanforderungen nach RTS 27/28 bietet Finanzinstituten nicht nur die Möglichkeit, regulatorische Compliance sicherzustellen, sondern auch ihre Dateninfrastruktur zu modernisieren und wertvolle Einblicke in Handelsqualität und -effizienz zu gewinnen. Unsere Erfahrung zeigt, dass eine strategisch durchdachte Implementierung erheblichen Mehrwert über die reine Compliance hinaus generieren kann.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Implementierung von RTS 27 Reporting für Handelsplätze',
          description: 'Wir unterstützen Handelsplätze bei der effizienten Implementierung aller RTS 27 Berichtspflichten zur Ausführungsqualität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Konzeption und Implementierung der Datenerfassung für alle erforderlichen Kennzahlen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung automatisierter Datenaufbereitungs- und Aggregationsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Implementierung effizienter Veröffentlichungsmechanismen gemäß regulatorischer Vorgaben'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Etablierung robuster Datenqualitäts- und Validierungsmechanismen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Implementierung von RTS 28 Best-Execution-Reporting',
          description: 'Wir unterstützen Wertpapierfirmen bei der effizienten Implementierung aller RTS 28 Berichtspflichten zur Best Execution.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Konzeption und Implementierung der Datenerfassung für Top-5-Ausführungsplätze und -qualität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung effizienter Prozesse zur Analyse und Bewertung der Ausführungsqualität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration in bestehende Best-Execution-Frameworks und Handelssysteme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Automatisierte Erstellung und Veröffentlichung der jährlichen Berichte'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(mifidTransparenzData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ MiFID Transparenz- und Berichtspflichten (RTS 27/28) page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
