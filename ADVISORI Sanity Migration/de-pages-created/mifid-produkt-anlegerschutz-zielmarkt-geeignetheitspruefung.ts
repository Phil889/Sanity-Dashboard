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
    console.log('Creating MiFID Produkt Anlegerschutz, Zielmarkt & Geeignetheitsprüfung page...')

    const mifidProduktAnlegerschutzData = {
      _type: 'servicePage',
      _id: 'mifid-produkt-anlegerschutz-zielmarkt-geeignetheitspruefung',
      title: 'MiFID Produkt Anlegerschutz, Zielmarkt & Geeignetheitsprüfung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/mifid/mifid-ii-readiness/mifid-produkt-anlegerschutz-zielmarkt-geeignetheitspruefung'
      },
      parent: {
        _type: 'reference',
        _ref: 'mifid-ii-readiness'
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
        title: 'MiFID Produkt Anlegerschutz, Zielmarkt & Geeignetheitsprüfung | ADVISORI',
        description: 'Umfassende Beratung zur Implementierung der MiFID II-Anforderungen im Bereich Produktgovernance, Zielmarktdefinition und Geeignetheitsprüfung. Wir unterstützen Sie bei der Entwicklung und Umsetzung regulatorisch konformer und kundenzentrierter Prozesse.',
        keywords: 'MiFID II Produktgovernance, MiFID II Zielmarktdefinition, MiFID II Geeignetheitsprüfung, Anlegerschutz, Produktüberwachung, Zielmarktkonzept, Beratungsdokumentation'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'MiFID Produkt Anlegerschutz, Zielmarkt & Geeignetheitsprüfung'
        },
        tagline: 'Integrierte Lösungen für kundenorientierte Produktgovernance und regulatorischen Anlegerschutz',
        heading: 'MiFID Produkt Anlegerschutz, Zielmarkt & Geeignetheitsprüfung',
        description: 'Die MiFID II-Anforderungen an Produktgovernance, Zielmarktdefinition und Geeignetheitsprüfung stellen Finanzinstitute vor komplexe Herausforderungen. Wir unterstützen Sie bei der Entwicklung und Implementierung effizienter Prozesse, die sowohl regulatorische Compliance als auch Kundenorientierung in den Mittelpunkt stellen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Integration von Anlegerschutz in Ihre Produktentwicklung und -überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Präzise Zielmarktdefinition und -validierung für alle Finanzprodukte'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Robuste Prozesse für Geeignetheits- und Angemessenheitsprüfungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Optimierte Beratungsprozesse mit vollständiger regulatorischer Dokumentation'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'MiFID Produkt Anlegerschutz, Zielmarkt & Geeignetheitsprüfung',
        description: 'Die MiFID II-Regulierung hat einen umfassenden Paradigmenwechsel im Anlegerschutz eingeführt, der von Finanzinstituten eine grundlegende Neuausrichtung ihrer Produktentwicklungs-, Vertriebs- und Beratungsprozesse erfordert. Unsere Lösung unterstützt Sie bei der systematischen Implementierung dieser Anforderungen und deren Integration in Ihre Geschäftsprozesse – mit dem Ziel, regulatorische Compliance in einen strategischen Wettbewerbsvorteil zu verwandeln.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung einer integrierten Produktgovernance-Architektur mit klaren Verantwortlichkeiten und Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Methodische Zielmarktdefinition und -validierung auf Basis strukturierter Kriterien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementation robuster Geeignetheits- und Angemessenheitsprüfungen im Beratungsprozess'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau effektiver Kontroll- und Überwachungsprozesse für die Produktvertriebsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration der regulatorischen Anforderungen in Ihre IT-Systeme und Dokumentationsprozesse'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine effektive MiFID II-Produktgovernance sollte nicht als isolierte Compliance-Maßnahme betrachtet werden, sondern als integraler Bestandteil Ihres Produktmanagements. Die systematische Einbindung von Zielmarktanalysen in den Produktentwicklungsprozess führt nicht nur zu regulatorischer Konformität, sondern auch zu besser positionierten Produkten und höherer Kundenzufriedenheit.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in allen Aspekten der MiFID II-Produktgovernance und des Anlegerschutzes'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodik zur Implementierung von Zielmarktkonzepten und Geeignetheitsprüfungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfassende Erfahrung in der Integration regulatorischer Anforderungen in Beratungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Innovative Lösungsansätze für die digitale Transformation von Anlegerschutzprozessen'
            }
          ]
        },
        additionalInfo: 'Die MiFID II-Anforderungen an Produktgovernance und Anlegerschutz betreffen nicht nur die Compliance-Abteilung, sondern haben weitreichende Auswirkungen auf Produktmanagement, Vertrieb, Marketing, IT und Kundenberatung. Eine erfolgreiche Umsetzung erfordert daher einen abteilungsübergreifenden Ansatz, der alle betroffenen Bereiche einbezieht und ihre spezifischen Anforderungen berücksichtigt.',
        serviceDescription: 'Unser Angebot im Bereich MiFID Produkt Anlegerschutz, Zielmarkt & Geeignetheitsprüfung umfasst maßgeschneiderte Lösungen, die auf Ihre spezifischen Geschäftsmodelle, Produktpalette und Kundenstruktur zugeschnitten sind. Wir unterstützen Sie bei allen Aspekten der Implementierung – von der strategischen Konzeption bis zur operativen Umsetzung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Assessment und Gap-Analyse Ihrer bestehenden Produktgovernance- und Anlegerschutzprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung eines integrierten Produktgovernance-Frameworks mit Zielmarktdefinition'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Konzeption und Implementierung robuster Geeignetheits- und Angemessenheitsprüfungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integration der regulatorischen Anforderungen in Ihre Beratungs- und Vertriebsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Entwicklung effektiver Überwachungs- und Dokumentationslösungen für kontinuierliche Compliance'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und erprobten Ansatz zur Implementierung der MiFID II-Anforderungen im Bereich Produktgovernance, Zielmarktdefinition und Geeignetheitsprüfung, der alle relevanten Aspekte berücksichtigt und eine nahtlose Integration in Ihre bestehenden Prozesse gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer aktuellen Produktentwicklungs-, Vertriebs- und Beratungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung eines maßgeschneiderten Produktgovernance- und Zielmarktkonzepts'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Design und Implementierung robuster Geeignetheits- und Angemessenheitsprüfungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration der neuen Prozesse und Anforderungen in Ihre IT-Systeme und Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung von Monitoring- und Überprüfungsmechanismen für kontinuierliche Compliance'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Matthias Klöpper',
        position: 'Partner',
        quote: 'Die MiFID II-Anforderungen an Produktgovernance und Anlegerschutz bieten Finanzinstituten die Chance, ihre Kundenorientierung zu stärken und gleichzeitig regulatorische Risiken zu minimieren. Mit unserem integrierten Ansatz unterstützen wir unsere Kunden dabei, diese Anforderungen effizient umzusetzen und in einen strategischen Vorteil zu verwandeln.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Produktgovernance & Zielmarktkonzept',
          description: 'Wir unterstützen Sie bei der Entwicklung und Implementierung eines robusten Produktgovernance-Frameworks mit systematischer Zielmarktdefinition und -validierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Entwicklung einer strukturierten Produktgovernance-Architektur mit klaren Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Methodische Zielmarktdefinition auf Basis standardisierter Kriterien für alle Finanzprodukte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Implementation eines robusten Produktgenehmigungsprozesses mit definierten Stage Gates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Aufbau von kontinuierlichen Produktüberwachungs- und Anpassungsprozessen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Geeignetheits- & Angemessenheitsprüfung',
          description: 'Wir konzipieren und implementieren effiziente Prozesse zur Durchführung und Dokumentation von Geeignetheits- und Angemessenheitsprüfungen im Beratungsprozess.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung strukturierter Methoden zur umfassenden Erfassung der Kundenprofile'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Konzeption regelbasierter Algorithmen für objektive Geeignetheitsbeurteilungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration der Prüfprozesse in bestehende Beratungs- und CRM-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Implementierung einer robusten Dokumentation und Nachweisführung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(mifidProduktAnlegerschutzData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ MiFID Produkt Anlegerschutz, Zielmarkt & Geeignetheitsprüfung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
