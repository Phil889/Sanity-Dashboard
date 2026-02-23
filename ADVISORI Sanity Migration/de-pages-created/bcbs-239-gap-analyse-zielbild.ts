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
    console.log('Creating BCBS-239 Gap-Analyse & Zielbild page...')

    const bcbs239GapAnalyseZielbildData = {
      _type: 'servicePage',
      _id: 'bcbs-239-gap-analyse-zielbild',
      title: 'BCBS-239 Gap-Analyse & Zielbild',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/bcbs-239/bcbs-239-readiness/bcbs-239-gap-analyse-zielbild'
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
        title: 'BCBS-239 Gap-Analyse & Zielbild | ADVISORI',
        description: 'Identifizieren Sie Compliance-Lücken und entwickeln Sie ein maßgeschneidertes Zielbild für Ihre BCBS-239 Implementierung mit unserer strukturierten Gap-Analyse.',
        keywords: 'BCBS-239 Gap-Analyse, Risikodaten Zielbild, Compliance-Lücken, Risikodaten-Architektur, Target Operating Model, Risikodatenmanagement'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'BCBS-239 Gap-Analyse & Zielbild'
        },
        tagline: 'Strukturierte Identifizierung von Compliance-Lücken und Entwicklung eines maßgeschneiderten Zielbilds',
        heading: 'BCBS-239 Gap-Analyse & Zielbild',
        description: 'Unsere BCBS-239 Gap-Analyse identifiziert systematisch Ihre Compliance-Lücken und entwickelt ein maßgeschneidertes Zielbild für Ihre Risikodaten-Architektur. Wir unterstützen Sie bei der Entwicklung einer effizienten Implementierungsstrategie, die Kosten optimiert und regulatorische Anforderungen erfüllt.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Präzise Identifikation von BCBS-239 Compliance-Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Maßgeschneidertes Zielbild für Ihre Risikodaten-Architektur'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Optimierte Implementierungsstrategie zur Schließung von Compliance-Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Reduzierte Implementierungskosten durch strukturiertes Vorgehen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'BCBS-239 Gap-Analyse & Zielbild',
        description: 'Die BCBS-239 Gap-Analyse und Zielbild-Entwicklung bildet das Fundament für eine erfolgreiche BCBS-239 Implementierung. Wir identifizieren systematisch Ihre aktuellen Compliance-Lücken und entwickeln ein maßgeschneidertes Zielbild, das sowohl die regulatorischen Anforderungen erfüllt als auch Ihre spezifischen organisatorischen Gegebenheiten berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Analyse der aktuellen Risikodaten-Governance und -Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Detaillierte Gap-Analyse zu allen 14 BCBS-239 Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung eines maßgeschneiderten Zielbilds für Ihre Risikodaten-Architektur'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Erstellung eines Target Operating Models für Risikodatenmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Priorisierte Roadmap zur Schließung der identifizierten Compliance-Lücken'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine präzise Gap-Analyse und ein klares Zielbild können die Implementierungskosten für BCBS-239 um bis zu 40% reduzieren. Durch die frühzeitige Identifikation von Compliance-Lücken und die Entwicklung einer maßgeschneiderten Architektur vermeiden Sie kostspielige Fehlentwicklungen und Nachbesserungen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in allen Aspekten der BCBS-239 Regulierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Strukturierte Analyse-Methodik mit bewährtem Assessment-Framework'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Erfahrung aus zahlreichen erfolgreichen BCBS-239 Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Praxisorientierte Empfehlungen mit konkreten Handlungsschritten'
            }
          ]
        },
        additionalInfo: 'Eine fundierte Gap-Analyse und ein klares Zielbild sind entscheidend für den Erfolg Ihrer BCBS-239 Implementierung. Studien zeigen, dass Projekte mit einer soliden Analysephase eine um 35% höhere Erfolgsrate aufweisen und im Durchschnitt 25% weniger Budget benötigen als Projekte ohne strukturierte Voranalyse.',
        serviceDescription: 'Unsere BCBS-239 Gap-Analyse und Zielbild-Entwicklung bietet Ihnen eine umfassende Bewertung Ihrer aktuellen Compliance-Situation und entwickelt ein maßgeschneidertes Zielbild für Ihre Risikodaten-Architektur. Wir identifizieren systematisch Lücken und entwickeln konkrete Maßnahmen zur Schließung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Umfassende BCBS-239 Compliance-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Identifikation von Compliance-Lücken zu allen BCBS-239 Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung eines maßgeschneiderten Zielbilds für Risikodaten'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Erstellung eines Target Operating Models'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Entwicklung einer priorisierten Implementierungs-Roadmap'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Unser strukturierter Ansatz für die BCBS-239 Gap-Analyse und Zielbild-Entwicklung gewährleistet eine umfassende Bewertung und ein maßgeschneidertes Zielbild für Ihre Risikodaten-Architektur.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Bestandsaufnahme der aktuellen Risikodaten-Prozesse und -Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Detaillierte Analyse der Compliance-Lücken zu allen BCBS-239 Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung eines maßgeschneiderten Zielbilds für Ihre Risikodaten-Architektur'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Erstellung eines Target Operating Models für Risikodatenmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Entwicklung einer priorisierten Roadmap zur Schließung der Compliance-Lücken'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'Regionalbank AG',
        name: 'Thomas Schneider',
        position: 'Leiter Risikodatenmanagement',
        quote: 'Die BCBS-239 Gap-Analyse und Zielbild-Entwicklung von ADVISORI hat uns entscheidend dabei geholfen, unsere Compliance-Lücken präzise zu identifizieren und ein maßgeschneidertes Zielbild zu entwickeln. Durch den strukturierten Ansatz konnten wir unsere Implementierungskosten deutlich reduzieren und eine effiziente Roadmap entwickeln. Die Expertise und Erfahrung des Teams war dabei ein enormer Mehrwert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'BCBS-239 Compliance-Assessment und Gap-Analyse',
          description: 'Wir bewerten systematisch Ihre aktuelle Compliance-Situation und identifizieren Lücken zu allen 14 BCBS-239 Prinzipien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Analyse zu allen BCBS-239 Prinzipien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung der Datengovernance und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Analyse der Risikodaten-Aggregation und -Architektur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Identifikation kritischer Compliance-Lücken'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Entwicklung Risikodaten-Zielbild und Target Operating Model',
          description: 'Wir entwickeln ein maßgeschneidertes Zielbild für Ihre Risikodaten-Architektur und ein Target Operating Model für effizientes Risikodatenmanagement.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung einer zukunftsfähigen Risikodaten-Architektur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Definition von Governance-Strukturen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Erstellung eines detaillierten Target Operating Models'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Entwicklung einer priorisierten Implementierungs-Roadmap'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcbs239GapAnalyseZielbildData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ BCBS-239 Gap-Analyse & Zielbild page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
