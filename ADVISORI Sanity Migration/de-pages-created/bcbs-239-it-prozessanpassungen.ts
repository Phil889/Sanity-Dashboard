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
    console.log('Creating BCBS-239 IT-Prozessanpassungen page...')

    const bcbs239ITProcessAdaptationsData = {
      _type: 'servicePage',
      _id: 'bcbs-239-it-prozessanpassungen',
      title: 'BCBS-239 IT-Prozessanpassungen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/bcbs-239/bcbs-239-implementation/bcbs-239-it-prozessanpassungen'
      },
      parent: {
        _type: 'reference',
        _ref: 'bcbs-239-implementation'
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
        title: 'BCBS-239 IT-Prozessanpassungen | ADVISORI',
        description: 'Optimieren Sie Ihre IT-Prozesse für BCBS-239 Compliance mit unserem spezialisierten Ansatz für effiziente und konforme Risikodaten-Infrastrukturen.',
        keywords: 'BCBS-239 IT-Prozesse, Risikodaten-Infrastruktur, Regulatory Compliance, IT-Anpassungen, Datenarchitektur, Finanzregulierung, IT-Optimierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'BCBS-239 IT-Prozessanpassungen'
        },
        tagline: 'Optimierung Ihrer IT-Prozesse für BCBS-239 Compliance',
        heading: 'BCBS-239 IT-Prozessanpassungen',
        description: 'Die Erfüllung der BCBS-239 Anforderungen erfordert tiefgreifende Anpassungen an bestehenden IT-Prozessen. Unsere spezialisierten Lösungen helfen Ihnen, Ihre IT-Infrastruktur und Prozesse effizient an die regulatorischen Vorgaben anzupassen und gleichzeitig operative Verbesserungen zu erzielen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Effiziente Anpassung bestehender IT-Prozesse an BCBS-239 Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierung der Datenflüsse und Systemintegrationen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Minimierung von Berichterstattungsrisiken durch robuste IT-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachhaltige IT-Architektur mit zukunftssicheren Lösungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'BCBS-239 IT-Prozessanpassungen',
        description: 'Die BCBS-239 Richtlinien stellen hohe Anforderungen an die IT-Prozesse und -Infrastrukturen von Finanzinstituten. Unsere spezialisierten Dienstleistungen unterstützen Sie bei der systematischen Anpassung Ihrer IT-Prozesse, um sowohl regulatorische Compliance als auch operative Exzellenz zu erreichen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse und Optimierung bestehender IT-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Anpassung von Datenflüssen und Systemintegrationen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung robuster Kontrollen und Validierungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Automatisierung von Risikodaten-Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration in bestehende IT-Governance-Strukturen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Betrachten Sie BCBS-239 IT-Prozessanpassungen nicht isoliert, sondern als Teil einer umfassenden Daten- und IT-Strategie. Die Integration in bestehende IT-Transformationsinitiativen kann erhebliche Synergien schaffen und den ROI Ihrer Investitionen steigern.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefes Verständnis sowohl der regulatorischen Anforderungen als auch moderner IT-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung in der Optimierung von Risikodatenprozessen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Pragmatischer Ansatz mit Fokus auf Umsetzbarkeit und Nachhaltigkeit'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Balancierung von Compliance-Anforderungen und operativer Effizienz'
            }
          ]
        },
        additionalInfo: 'Finanzinstitute, die ihre IT-Prozesse gezielt für BCBS-239 optimiert haben, berichten von einer durchschnittlichen Reduktion der Berichtserstellungszeit um 50%, einer Verbesserung der Datenqualität um 60% und einer signifikanten Reduktion operativer Risiken im Reporting-Prozess.',
        serviceDescription: 'Unsere BCBS-239 IT-Prozessanpassungen umfassen die systematische Analyse und Optimierung aller IT-Prozesse, die für die Aggregation und Berichterstattung von Risikodaten relevant sind. Wir unterstützen Sie bei der Implementierung robuster, effizienter und compliant-konformer IT-Prozesse, die nachhaltig Mehrwert für Ihr Institut schaffen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Comprehensive Assessment Ihrer bestehenden IT-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Gap-Analyse und Optimierungsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Design und Implementierung angepasster IT-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Automatisierung und Kontrolle von Datenprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Integration in bestehende IT-Governance-Strukturen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Unser Ansatz zur Anpassung von IT-Prozessen für BCBS-239 Compliance basiert auf einem strukturierten Vorgehen, das sowohl regulatorische Anforderungen als auch operative Effizienz berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der bestehenden IT-Prozesse und Identifikation von Anpassungsbedarf'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung eines optimierten Prozessdesigns unter Berücksichtigung regulatorischer Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Schrittweise Implementierung mit kontinuierlicher Validierung und Anpassung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung von Kontroll- und Überwachungsmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Integration in bestehende IT-Governance-Strukturen und Dokumentation'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'Führende Regionalbank',
        name: 'Dr. Markus Winter',
        position: 'Head of IT Risk Management',
        quote: 'Die Zusammenarbeit mit ADVISORI bei der Anpassung unserer IT-Prozesse für BCBS-239 hat uns nicht nur geholfen, regulatorische Anforderungen zu erfüllen, sondern auch unsere Risikodaten-Prozesse grundlegend zu verbessern. Durch den integrierten Ansatz konnten wir signifikante Effizienzgewinne erzielen und gleichzeitig die Qualität unserer Risikodaten deutlich steigern.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'IT-Prozessanalyse und -optimierung',
          description: 'Wir analysieren Ihre bestehenden IT-Prozesse im Kontext der BCBS-239 Anforderungen und entwickeln maßgeschneiderte Optimierungskonzepte.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse der bestehenden IT-Prozesse und Datenflüsse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation von Schwachstellen und Compliance-Lücken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung optimierter Prozessdesigns'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Definition von Kontroll- und Überwachungsmechanismen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Implementierung und Integration',
          description: 'Wir unterstützen Sie bei der praktischen Umsetzung der optimierten IT-Prozesse und deren Integration in Ihre bestehende IT-Landschaft.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Schrittweise Implementierung mit kontinuierlicher Validierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integration in bestehende IT-Governance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Etablierung von Kontroll- und Überwachungsmechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Umfassende Dokumentation und Wissenstransfer'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcbs239ITProcessAdaptationsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ BCBS-239 IT-Prozessanpassungen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
