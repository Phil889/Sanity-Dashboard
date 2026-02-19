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
    console.log('Creating MiFID Anpassung Vertriebssteuerung & Prozessabläufe page...')

    const mifidAnpassungVertriebssteuerungData = {
      _type: 'servicePage',
      _id: 'mifid-anpassung-vertriebssteuerung-prozessablaeufe',
      title: 'MiFID Anpassung der Vertriebssteuerung und Prozessabläufe',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/mifid/mifid-implementation/mifid-anpassung-vertriebssteuerung-prozessablaeufe'
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
        title: 'MiFID Anpassung der Vertriebssteuerung und Prozessabläufe | ADVISORI',
        description: 'Optimieren Sie Ihre Vertriebssteuerung und Prozessabläufe gemäß MiFID-Anforderungen mit ADVISORI. Unsere maßgeschneiderten Lösungen integrieren regulatorische Vorgaben nahtlos in Ihre Geschäftsprozesse und stärken gleichzeitig Ihre Kundenbeziehungen und Compliance.',
        keywords: 'MiFID Vertriebssteuerung, MiFID Prozessabläufe, regulatorische Compliance, Finanzvertrieb, Anlageberatung, Kundenschutz, Vertriebsoptimierung, Prozessanpassung, Compliance-Optimierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'MiFID Anpassung Vertriebssteuerung und Prozessabläufe'
        },
        tagline: 'Effiziente Integration regulatorischer Anforderungen in Ihre Vertriebsprozesse',
        heading: 'MiFID Anpassung der Vertriebssteuerung und Prozessabläufe',
        description: 'Implementieren Sie die MiFID-Anforderungen effizient und konform in Ihre Vertriebssteuerung und Prozessabläufe. Unsere ganzheitliche Lösung unterstützt Sie dabei, regulatorische Vorgaben so umzusetzen, dass sie nicht nur die Compliance sicherstellen, sondern auch Ihre Geschäftsprozesse optimieren und Kundenbeziehungen stärken.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Nahtlose Integration von MiFID-Anforderungen in bestehende Vertriebsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierung der Kundenberatung und -dokumentation gemäß regulatorischer Vorgaben'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effizienzsteigerung durch digitalisierte und automatisierte Compliance-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Risikominimierung durch systematische Compliance-Integration'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'MiFID Anpassung der Vertriebssteuerung und Prozessabläufe',
        description: 'Die Implementierung der MiFID-Anforderungen in die Vertriebssteuerung und Prozessabläufe stellt Finanzinstitute vor komplexe Herausforderungen, die eine strukturierte und ganzheitliche Herangehensweise erfordern. Unser umfassender Ansatz integriert regulatorische Vorgaben nahtlos in Ihre Geschäftsprozesse und schafft einen Mehrwert sowohl für die Compliance als auch für die Kundenbeziehungen und die operative Effizienz.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse und Anpassung der Vertriebssteuerung gemäß MiFID-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Optimierung der Kundenklassifizierung und Geeignetheitsprüfung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung transparenter Kostendarstellung und Produktinformationen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung und Integration effizienter Dokumentationsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Digitalisierung und Automatisierung von Compliance-Workflows'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Der Schlüssel zu einer erfolgreichen MiFID-Implementierung liegt in der Balance zwischen regulatorischen Anforderungen und Kundenorientierung. Gestalten Sie Ihre Prozesse so, dass sie nicht nur compliant sind, sondern auch das Kundenerlebnis verbessern und die Beratungsqualität steigern.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in MiFID-Regulierung und Vertriebsprozessen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Methodik mit nachweislichen Erfolgen bei führenden Finanzinstituten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Kombination aus regulatorischem Know-how und praktischer Vertriebserfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Innovativer Ansatz mit Fokus auf Digitalisierung und Prozessoptimierung'
            }
          ]
        },
        additionalInfo: 'Eine strategisch durchdachte MiFID-Implementierung kann nicht nur Compliance-Risiken minimieren, sondern auch die Vertriebseffizienz um bis zu 20% steigern und die Kundenzufriedenheit signifikant erhöhen. Unsere Kunden berichten zudem von einer durchschnittlichen Reduktion der Prozesskosten um 15-25% durch optimierte und digitalisierte Workflows.',
        serviceDescription: 'Unser Service zur MiFID-Anpassung von Vertriebssteuerung und Prozessabläufen bietet eine ganzheitliche Lösung für die effiziente und konforme Integration regulatorischer Anforderungen in Ihre Geschäftsprozesse. Wir unterstützen Sie von der Analyse über die Konzeption bis zur Implementierung und Schulung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Umfassende Analyse und Gap-Assessment bestehender Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung maßgeschneiderter Compliance-Konzepte für Vertrieb und Beratung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierung optimierter Prozesse und Dokumentationsstandards'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Digitalisierung und Automatisierung von Compliance-Workflows'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulung und Change Management für nachhaltige Veränderung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und erprobten Ansatz für die MiFID-Anpassung von Vertriebssteuerung und Prozessabläufen, der eine effiziente und konforme Umsetzung aller regulatorischen Anforderungen sicherstellt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Detaillierte Analyse der bestehenden Vertriebsprozesse und regulatorischer Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten Implementierungsstrategie und Prozessdesign'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Konzeption und Implementierung angepasster Vertriebssteuerungsmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Optimierung und Digitalisierung von Dokumentationsprozessen und Workflows'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Schulung, Change Management und kontinuierliche Prozessoptimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Stefan Müller',
        position: 'Partner - Regulatory Compliance',
        quote: 'Die erfolgreiche Integration von MiFID-Anforderungen in die Vertriebssteuerung und Prozessabläufe erfordert mehr als nur regulatorisches Verständnis. Es geht darum, Compliance nahtlos in den Beratungsalltag zu integrieren und gleichzeitig das Kundenerlebnis zu verbessern. Unser praxiserprobter Ansatz schafft diese Balance und führt zu messbaren Effizienzsteigerungen bei gleichzeitiger Risikominimierung.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Vertriebsprozessoptimierung & Compliance-Integration',
          description: 'Wir unterstützen Sie bei der Optimierung Ihrer Vertriebsprozesse und der nahtlosen Integration von MiFID-Anforderungen, um sowohl Compliance als auch Kundenorientierung und Effizienz zu stärken.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse und Neugestaltung von Beratungs- und Verkaufsprozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Implementierung effizienter Kundenklassifizierung und Geeignetheitsprüfung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Optimierung der Produkt-Governance und Zielmarktdefinition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration von Transparenz- und Offenlegungspflichten in den Vertriebsprozess'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Digitalisierung & Prozessautomatisierung',
          description: 'Wir unterstützen Sie bei der Digitalisierung und Automatisierung Ihrer MiFID-relevanten Prozesse, um die Effizienz zu steigern, Fehlerquoten zu reduzieren und die Compliance nachhaltig zu sichern.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung digitaler Beratungs- und Dokumentationslösungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementierung automatisierter Compliance-Checks und Kontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration von Workflow-Management für MiFID-konforme Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Entwicklung digitaler Kundeninformations- und Reportingsysteme'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(mifidAnpassungVertriebssteuerungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ MiFID Anpassung Vertriebssteuerung & Prozessabläufe page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
