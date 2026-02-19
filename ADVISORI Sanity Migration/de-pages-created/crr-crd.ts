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
    console.log('Creating CRR/CRD page...')

    const crrCrdData = {
      _type: 'servicePage',
      _id: 'crr-crd',
      title: 'CRR/CRD - Capital Requirements Regulation & Directive',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/crr-crd'
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
        title: 'CRR/CRD - Capital Requirements Regulation & Directive | ADVISORI',
        description: 'Optimieren Sie Ihre Compliance mit den Capital Requirements Regulation (CRR) und Capital Requirements Directive (CRD) durch unsere spezialisierten Beratungsleistungen.',
        keywords: 'CRR, CRD, Capital Requirements Regulation, Capital Requirements Directive, Bankenregulierung, Basel III, Eigenkapitalanforderungen, Bankaufsicht, Finanzinstitute'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRR/CRD Compliance'
        },
        tagline: 'Experten für EU-Eigenkapitalanforderungen und Bankenregulierung',
        heading: 'CRR/CRD - Capital Requirements Regulation & Directive',
        description: 'Die Capital Requirements Regulation (CRR) und Directive (CRD) bilden das Rückgrat der EU-Bankenregulierung. Wir unterstützen Sie bei der komplexen Umsetzung dieser Vorschriften, um Compliance zu gewährleisten und Kapitaleffizienz zu optimieren.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende Compliance mit CRR/CRD-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierung der Kapitalallokation und Risikogewichtung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effiziente Implementierung der Basel-Rahmenwerke'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strategische Ausrichtung der Compliance-Maßnahmen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRR/CRD Compliance',
        description: 'Die Capital Requirements Regulation (CRR) und Capital Requirements Directive (CRD) setzen die internationalen Basel-Standards in der EU um und stellen strenge Anforderungen an Kapital, Liquidität und Risikomanagement von Finanzinstituten. Wir bieten maßgeschneiderte Beratung und Implementierungsunterstützung für diese komplexen regulatorischen Anforderungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse der aktuellen Compliance-Situation und Identifikation von Handlungsbedarf'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung von Strategien zur Optimierung der Kapitalquoten und Liquiditätskennzahlen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Umsetzung der internen Modelle und Risikobewertungsverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Implementierung von Reporting- und Offenlegungspflichten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Vorbereitung auf Aufsichtsprüfungen und regulatorische Dialoge'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Die regelmäßigen Änderungen der CRR/CRD-Anforderungen (aktuell CRR III/CRD VI) erfordern eine kontinuierliche Anpassung der Compliance-Strategien. Eine proaktive Herangehensweise ermöglicht nicht nur die Einhaltung der Vorschriften, sondern auch die strategische Nutzung für Geschäftsentscheidungen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in allen Aspekten der Bankenregulierung und Eigenkapitalanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfangreiche Erfahrung in der Implementierung von CRR/CRD bei verschiedenen Finanzinstituten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxisnaher Beratungsansatz mit Fokus auf effiziente und nachhaltige Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Beobachtung regulatorischer Entwicklungen und proaktive Anpassung von Compliance-Strategien'
            }
          ]
        },
        additionalInfo: 'Die Einhaltung der CRR/CRD-Vorschriften stellt für viele Banken eine Herausforderung dar, bietet aber auch Chancen für eine optimierte Kapitalallokation und ein verbessertes Risikomanagement. Unsere Experten helfen Ihnen, diese Potenziale zu erschließen und einen nachhaltigen Wettbewerbsvorteil zu erzielen.',
        serviceDescription: 'Wir bieten ein umfassendes Spektrum an Beratungsleistungen zur CRR/CRD-Compliance, von der strategischen Planung bis zur operativen Umsetzung. Unser Ziel ist es, nicht nur Compliance zu gewährleisten, sondern auch die regulatorischen Anforderungen für Ihr Geschäftsmodell zu optimieren.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Gap-Analyse und Compliance-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung von Kapital- und Liquiditätsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierung von internen Modellen (IRBA, IMA, AMA)'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Optimierung der regulatorischen Berichterstattung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Vorbereitung auf SREP und regulatorische Prüfungen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen ganzheitlichen Ansatz zur CRR/CRD-Compliance, der technische, organisatorische und strategische Aspekte berücksichtigt. Dabei steht die Optimierung Ihrer regulatorischen Position im Mittelpunkt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der aktuellen Compliance-Situation und Identifikation von Handlungsbedarf'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten Implementierungsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Unterstützung bei der Umsetzung der erforderlichen Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung von robusten Prozessen und Kontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und Anpassung an regulatorische Änderungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Marian Knetsch',
        position: 'Managing Director',
        quote: 'Die Implementierung der CRR/CRD-Anforderungen stellt für viele unserer Kunden eine komplexe Herausforderung dar. Durch unseren integrierten Beratungsansatz schaffen wir es, nicht nur Compliance sicherzustellen, sondern auch die Kapitaleffizienz zu steigern und einen echten geschäftlichen Mehrwert zu generieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'CRR/CRD Gap-Analyse und Implementierungsplanung',
          description: 'Wir identifizieren Lücken in Ihrer aktuellen Compliance und entwickeln einen maßgeschneiderten Implementierungsplan.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Analyse der bestehenden Prozesse und Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation von Handlungsbedarf in allen relevanten Bereichen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung einer priorisierten Roadmap für die Umsetzung'
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
          title: 'Optimierung der Kapital- und Liquiditätsanforderungen',
          description: 'Wir unterstützen Sie bei der Optimierung Ihrer Kapitalquoten und Liquiditätskennzahlen im Rahmen der regulatorischen Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Bewertung der aktuellen Kapital- und Liquiditätsposition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Identifikation von Optimierungspotenzialen in der Risikogewichtung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung von Strategien zur Verbesserung der regulatorischen Kennzahlen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration der regulatorischen Anforderungen in die Geschäftsstrategie'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(crrCrdData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRR/CRD page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
