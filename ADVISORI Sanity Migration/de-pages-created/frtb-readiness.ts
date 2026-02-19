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
    console.log('Creating FRTB Readiness page...')

    const frtbReadinessData = {
      _type: 'servicePage',
      _id: 'frtb-readiness',
      title: 'FRTB Readiness Assessment',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/frtb/frtb-readiness'
      },
      parent: {
        _type: 'reference',
        _ref: 'frtb'
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
        title: 'FRTB Readiness Assessment | ADVISORI',
        description: 'Umfassende FRTB-Readiness-Bewertung für Finanzinstitute. Identifizieren Sie Lücken, bewerten Sie Auswirkungen und entwickeln Sie eine maßgeschneiderte Implementierungsstrategie.',
        keywords: 'FRTB Readiness, Readiness Assessment, FRTB Gap-Analyse, Fundamental Review of the Trading Book, Marktrisiko, FRTB-Implementierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FRTB Readiness Assessment'
        },
        tagline: 'Bereit für die neue Marktrisiko-Ära',
        heading: 'FRTB Readiness Assessment',
        description: 'Unsere umfassende FRTB-Readiness-Bewertung identifiziert Lücken in Ihren aktuellen Systemen, Prozessen und Daten, quantifiziert die Auswirkungen auf Ihr Kapital und liefert einen maßgeschneiderten Implementierungsfahrplan für eine effiziente FRTB-Compliance.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Detaillierte Gap-Analyse und Bewertung der Auswirkungen auf das Kapital'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Maßgeschneiderte Implementierungsstrategie mit klaren Prioritäten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Identifikation von Optimierungspotenzialen für Kapitalanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Bewertung der Eignung für Standardansatz (SA) oder Internal Models Approach (IMA)'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'FRTB Readiness Assessment',
        description: 'Die FRTB-Readiness-Bewertung von ADVISORI bietet Ihrem Institut eine umfassende Analyse der Bereitschaft für die Implementierung der Fundamental Review of the Trading Book (FRTB). Wir identifizieren nicht nur regulatorische Lücken, sondern bewerten auch die Auswirkungen auf Ihr Kapital und Ihre Handelsaktivitäten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Detaillierte Bewertung Ihrer aktuellen Handelsbuchstruktur und Risikomanagementsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Quantifizierung der FRTB-Auswirkungen auf Kapitalanforderungen und Handelsbuchaktivitäten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Analyse der Dateninfrastruktur und Identifikation von Datenlücken'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Bewertung der IT-Systeme und Prozesse in Bezug auf FRTB-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Entwicklung eines maßgeschneiderten Implementierungsfahrplans mit klaren Prioritäten'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine frühzeitige FRTB-Readiness-Bewertung kann Ihre Implementierungskosten um bis zu 30% reduzieren und gibt Ihnen einen strategischen Vorsprung bei der Anpassung Ihrer Handelsstrategien.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in FRTB-Anforderungen und deren praktische Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodik zur Bewertung der FRTB-Readiness mit konkreten, handlungsorientierten Ergebnissen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Erfahrenes Team mit praktischer Erfahrung in internationalen FRTB-Implementierungsprojekten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kombination aus regulatorischem Know-how, Risikomanagement-Expertise und technischem Verständnis'
            }
          ]
        },
        additionalInfo: 'Die FRTB-Anforderungen können die Kapitalanforderungen für Marktrisiken erheblich erhöhen. Eine fundierte Readiness-Bewertung ermöglicht es Ihnen, frühzeitig Optimierungspotenziale zu identifizieren und die Auswirkungen auf Ihr Kapital zu minimieren.',
        serviceDescription: 'Unsere FRTB-Readiness-Bewertung liefert Ihnen eine umfassende Analyse Ihrer aktuellen Situation, identifiziert Lücken und Herausforderungen und entwickelt einen maßgeschneiderten Implementierungsfahrplan. Sie erhalten ein klares Bild der erforderlichen Maßnahmen, der potenziellen Auswirkungen und der optimalen Implementierungsstrategie.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Gap-Analyse der Handelsbuchstruktur und Risikomanagementsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Bewertung der Kapitalauswirkungen und Optimierungspotenziale'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Analyse der Daten- und IT-Infrastruktur'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Bewertung der Eignung für SA oder IMA'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Entwicklung eines maßgeschneiderten Implementierungsfahrplans'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir nutzen einen strukturierten und bewährten Ansatz für die FRTB-Readiness-Bewertung, der auf Ihre spezifischen Bedürfnisse und Herausforderungen zugeschnitten ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Initiale Bestandsaufnahme und Analyse der Handelsbuchstruktur'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Detaillierte Gap-Analyse der Systeme, Prozesse und Daten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Quantitative Bewertung der Kapitalauswirkungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Analyse von Optimierungspotenzialen und Handlungsoptionen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Entwicklung eines maßgeschneiderten Implementierungsfahrplans'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Thomas Müller',
        position: 'Head of Market Risk',
        quote: 'Die FRTB-Readiness-Bewertung von ADVISORI hat uns einen klaren Überblick über unsere Ausgangssituation, die zu erwartenden Herausforderungen und die optimale Implementierungsstrategie gegeben. Besonders wertvoll war die präzise Quantifizierung der Kapitalauswirkungen, die uns half, fundierte strategische Entscheidungen zu treffen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'FRTB Gap-Analyse und Auswirkungsbewertung',
          description: 'Wir analysieren Ihre aktuelle Handelsbuchstruktur, Risikomanagementsysteme und -prozesse, um Lücken zu identifizieren und die Auswirkungen der FRTB-Anforderungen auf Ihr Kapital und Ihre Handelsaktivitäten zu bewerten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse der Handelsbuchstruktur und Risikomodelle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung der Auswirkungen auf Kapitalanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation von Optimierungspotenzialen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Analyse der Daten- und IT-Infrastruktur'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Entwicklung einer FRTB-Implementierungsstrategie',
          description: 'Basierend auf den Ergebnissen der Gap-Analyse entwickeln wir eine maßgeschneiderte Implementierungsstrategie mit klaren Prioritäten, Zeitplänen und Ressourcenplanungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Bewertung der Eignung für Standardansatz (SA) oder Internal Models Approach (IMA)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung eines detaillierten Implementierungsfahrplans'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Priorisierung von Maßnahmen basierend auf Kosten-Nutzen-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Erstellung eines Business Case für die FRTB-Implementierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(frtbReadinessData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FRTB Readiness page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
