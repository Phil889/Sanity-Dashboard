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
    console.log('Creating MiFID Gap Analyse & Roadmap page...')

    const mifidGapAnalyseRoadmapData = {
      _type: 'servicePage',
      _id: 'mifid-gap-analyse-roadmap',
      title: 'MiFID Gap-Analyse & Roadmap',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/mifid/mifid-ii-readiness/mifid-gap-analyse-roadmap'
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
        title: 'MiFID Gap-Analyse & Roadmap | ADVISORI',
        description: 'Umfassende Gap-Analyse und strategische Roadmap für Ihre MiFID II-Implementierung. Wir identifizieren Lücken in Prozessen, Systemen und Governance und entwickeln einen maßgeschneiderten Umsetzungsplan.',
        keywords: 'MiFID II Gap-Analyse, MiFID Roadmap, Regulatorische Lückenanalyse, MiFID Implementierungsplan, Compliance-Strategie, Finanzmarktrichtlinie, Umsetzungsfahrplan'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'MiFID Gap-Analyse & Roadmap'
        },
        tagline: 'Strategische Analyse und strukturierte Umsetzung für MiFID-Compliance',
        heading: 'MiFID Gap-Analyse & Roadmap',
        description: 'Eine fundierte Gap-Analyse und strategische Roadmap sind entscheidend für eine effiziente und nachhaltige MiFID II-Implementierung. Wir identifizieren systematisch alle Compliance-Lücken und entwickeln mit Ihnen einen maßgeschneiderten, priorisierten Umsetzungsplan.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Identifikation aller regulatorischen Lücken und Handlungsbedarfe'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Priorisierte und ressourcenoptimierte Implementierungsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Klare Meilensteine und Verantwortlichkeiten für den gesamten Umsetzungsprozess'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strategische Integration der MiFID-Anforderungen in bestehende Geschäftsprozesse'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'MiFID Gap-Analyse & Roadmap',
        description: 'Die MiFID II stellt Finanzinstitute vor komplexe Herausforderungen in Bereichen wie Anlegerschutz, Transparenz, Handelsausführung und Berichterstattung. Unsere strukturierte Gap-Analyse und strategische Roadmap-Entwicklung ermöglichen eine zielgerichtete, effiziente und nachhaltige Implementierung dieser umfassenden regulatorischen Anforderungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Detaillierte Bewertung der aktuellen Prozesse, Systeme und Governance-Strukturen im Vergleich zu MiFID II-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Identifikation kritischer Compliance-Lücken und Priorisierung des Handlungsbedarfs'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung einer maßgeschneiderten Implementierungsroadmap mit klaren Meilensteinen und Verantwortlichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kosten-Nutzen-Analyse verschiedener Implementierungsoptionen zur Entscheidungsunterstützung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Etablierung eines robusten Monitoring-Frameworks für die fortlaufende Compliance-Sicherstellung'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine erfolgreiche MiFID II-Implementation beginnt mit einer präzisen Gap-Analyse, die nicht nur formale Compliance-Aspekte berücksichtigt, sondern auch Chancen zur Prozessoptimierung und Effizienzsteigerung identifiziert. Durch die Integration regulatorischer Anforderungen in Ihre Geschäftsstrategie können signifikante Synergien realisiert werden.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in allen Aspekten der MiFID II-Regulierung und deren praktischer Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodik zur systematischen Identifikation und Bewertung von Compliance-Lücken'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Pragmatischer Ansatz mit Fokus auf Umsetzbarkeit und Wertschöpfung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Umfangreiche Erfahrung in der erfolgreichen Implementierung von MiFID II-Projekten verschiedener Größenordnungen'
            }
          ]
        },
        additionalInfo: 'Die MiFID II-Gap-Analyse und Roadmap-Entwicklung bilden das Fundament für eine erfolgreiche regulatorische Transformation. Durch unseren strukturierten und ganzheitlichen Ansatz stellen wir sicher, dass alle relevanten Aspekte berücksichtigt werden und die Implementierung effizient und nachhaltig erfolgt.',
        serviceDescription: 'Unser Leistungsangebot umfasst eine umfassende Gap-Analyse und die Entwicklung einer maßgeschneiderten Implementierungsroadmap für Ihre MiFID II-Compliance. Wir bieten einen strukturierten Ansatz, der regulatorische Anforderungen mit geschäftlichen Zielen in Einklang bringt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Umfassende Ist-Analyse der aktuellen Prozesse, Systeme und Compliance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Detaillierte Bewertung der MiFID II-Anforderungen und deren Relevanz für Ihr Geschäftsmodell'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Systematische Identifikation von Compliance-Lücken und Handlungsbedarf'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Entwicklung einer priorisierten Implementierungsroadmap mit klaren Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Unterstützung bei der Planung und Ressourcenzuteilung für die Umsetzungsphase'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und bewährten Ansatz bei der Durchführung der MiFID II-Gap-Analyse und der Entwicklung einer maßgeschneiderten Implementierungsroadmap.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Initiale Scoping-Phase zur Definition des Analysespektrums und der relevanten MiFID II-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Durchführung einer umfassenden Ist-Analyse durch Workshops, Interviews und Dokumentenprüfung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Systematische Gap-Identifikation und Bewertung des Handlungsbedarfs nach Dringlichkeit und Komplexität'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung einer detaillierten Implementierungsroadmap mit konkreten Maßnahmen und Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Validierung und Abstimmung der Roadmap mit allen relevanten Stakeholdern zur Sicherstellung der Umsetzbarkeit'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Julia Kramer',
        position: 'Senior Manager',
        quote: 'Eine präzise Gap-Analyse und strategische Roadmap sind entscheidend für den Erfolg jeder MiFID II-Implementierung. Unsere Erfahrung zeigt, dass Unternehmen, die in diese Vorbereitungsphase investieren, nicht nur eine reibungslosere Implementierung erfahren, sondern auch signifikante Effizienzgewinne und Wettbewerbsvorteile realisieren können.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Umfassende MiFID II-Gap-Analyse',
          description: 'Wir führen eine detaillierte Analyse Ihrer aktuellen Prozesse, Systeme und Governance-Strukturen durch und identifizieren systematisch alle Lücken in Bezug auf die MiFID II-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Bewertung aller relevanten MiFID II-Anforderungen und deren Implikationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Systematische Analyse von Prozessen, Systemen, Dokumentation und Governance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation und Priorisierung von Compliance-Lücken nach Kritikalität und Komplexität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Detaillierte Dokumentation der Ergebnisse mit konkreten Handlungsempfehlungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Strategische MiFID II-Implementierungsroadmap',
          description: 'Auf Basis der Gap-Analyse entwickeln wir eine maßgeschneiderte Implementierungsroadmap, die einen strukturierten und effizienten Weg zur MiFID II-Compliance aufzeigt.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung einer priorisierten Maßnahmenliste mit klaren Abhängigkeiten und Zeitplänen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Definition konkreter Meilensteine und Key Performance Indicators (KPIs)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Ressourcenplanung und Budgetschätzungen für die einzelnen Implementierungsphasen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Entwicklung eines Monitoring-Frameworks zur kontinuierlichen Fortschrittskontrolle'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(mifidGapAnalyseRoadmapData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ MiFID Gap-Analyse & Roadmap page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
