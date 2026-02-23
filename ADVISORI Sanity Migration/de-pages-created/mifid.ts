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
    console.log('Creating MiFID page...')

    const mifidData = {
      _type: 'servicePage',
      _id: 'mifid',
      title: 'MiFID',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/mifid'
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
        title: 'MiFID | ADVISORI',
        description: 'Umfassende Unterstützung bei der Implementierung und Einhaltung der MiFID-Anforderungen. Wir begleiten Sie bei der Anpassung Ihrer Prozesse, Systeme und Investor-Protection-Praktiken.',
        keywords: 'MiFID, MiFID II, Finanzmarktrichtlinie, Anlegerschutz, Finanzmärkte, Compliance, Transparenz, Best Execution'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'MiFID'
        },
        tagline: 'Expertenlösungen für Transparenz und Anlegerschutz im Finanzsektor',
        heading: 'MiFID',
        description: 'Die Markets in Financial Instruments Directive (MiFID) stellt umfassende Anforderungen an Transparenz, Anlegerschutz und Marktintegrität. Wir unterstützen Sie bei der effizienten Implementierung und nachhaltigen Einhaltung dieser komplexen regulatorischen Vorgaben.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Verbesserte Transparenz und Compliance in Handelsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierte Anlegerberatung und Produktgovernance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effiziente Umsetzung der Best-Execution-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nahtlose Integration von Transaktionsreporting und Aufzeichnungspflichten'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'MiFID',
        description: 'Die Markets in Financial Instruments Directive (MiFID) ist ein zentraler Regulierungsrahmen für Finanzdienstleister in der EU, der den Anlegerschutz stärkt, die Transparenz erhöht und die Marktintegrität fördert. Diese Regulierung umfasst umfangreiche Anforderungen an Beratungsprozesse, Produkttransparenz, Handelsausführung und Aufzeichnungspflichten. Wir unterstützen Sie bei der strategischen Implementierung und kontinuierlichen Einhaltung dieser komplexen Anforderungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Gap-Analyse und Bewertung der MiFID-Compliance-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung und Implementierung robuster Prozesse für Anlegerschutz und Transparenz'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Optimierung der Best-Execution-Praktiken und Nachweisführung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von MiFID-Anforderungen in bestehende IT-Systeme und Beratungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Entwicklung und Implementierung von Lösungen für regulatorisches Reporting'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine erfolgreiche MiFID-Implementierung erfordert nicht nur die Erfüllung der Mindestanforderungen, sondern auch die strategische Integration in Ihre Kundenberatungs- und Handelsprozesse, um Effizienzgewinne zu realisieren und das Kundenerlebnis zu verbessern.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifendes Expertenwissen in MiFID-Anforderungen und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung in der Implementierung von MiFID-Standards bei verschiedenen Finanzinstituten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz, der Regulierung, Kundenberatung und Geschäftsstrategie integriert'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Innovative Technologielösungen zur Automatisierung und Optimierung regulatorischer Prozesse'
            }
          ]
        },
        additionalInfo: 'Die MiFID-Anforderungen haben erhebliche Auswirkungen auf Beratungsprozesse, Produktangebot, Handelsausführung und Dokumentation von Finanzdienstleistern. Eine strategische Implementation kann nicht nur Compliance sicherstellen, sondern auch zu erheblichen Wettbewerbsvorteilen führen und die Kundenzufriedenheit steigern.',
        serviceDescription: 'Wir bieten ein umfassendes Leistungsspektrum zur Unterstützung bei der Umsetzung und kontinuierlichen Einhaltung der MiFID-Anforderungen. Unser Ansatz umfasst sowohl die technische Implementierung als auch die strategische Integration in Ihre Geschäftsprozesse.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'MiFID Gap-Analyse und Readiness Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung und Implementierung von Anlegerschutz- und Transparenzstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Optimierung der Best-Execution-Prozesse und -Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Implementierung und Automatisierung regulatorischer Reportinglösungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulung und Change Management für MiFID-Implementierungen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam einen maßgeschneiderten Ansatz zur effektiven Umsetzung und kontinuierlichen Einhaltung der MiFID-Anforderungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Durchführung einer umfassenden Ist-Analyse und Gap-Identifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer strategischen MiFID-Roadmap mit klaren Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung und Anpassung von Prozessen, Systemen und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration und Automatisierung von Berichts- und Dokumentationsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung, Validierung und Optimierung der implementierten Lösungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Die Umsetzung von MiFID ist für Finanzinstitute nicht nur eine regulatorische Notwendigkeit, sondern auch eine strategische Chance. Mit unserer Unterstützung können Institute die Anforderungen nicht nur erfüllen, sondern auch nutzen, um ihre Kundenbeziehungen zu vertiefen und Wettbewerbsvorteile zu erzielen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'MiFID Gap-Analyse und Implementierungsstrategie',
          description: 'Wir analysieren Ihre bestehenden Prozesse, Systeme und Methoden im Hinblick auf die MiFID-Anforderungen und entwickeln eine maßgeschneiderte Implementierungsstrategie.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Bewertung der aktuellen Compliance-Situation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation von Lücken und Verbesserungspotentialen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung einer priorisierten Roadmap für die Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Kosten-Nutzen-Analyse verschiedener Implementierungsoptionen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Anlegerschutz und Produktgovernance',
          description: 'Wir unterstützen Sie bei der Optimierung Ihrer Anlegerschutz- und Produktgovernance-Prozesse im Einklang mit den MiFID-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung von robusten Kundenkategorisierungs- und Beratungsprozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementierung von Frameworks für Zielmarktdefinition und -überwachung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Optimierung der Kosteninformations- und Transparenzanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration von Anlegerschutzprinzipien in den gesamten Produktlebenszyklus'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(mifidData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ MiFID page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
