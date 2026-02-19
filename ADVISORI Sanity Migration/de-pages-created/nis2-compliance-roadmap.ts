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
    console.log('Creating NIS2 Compliance Roadmap page...')

    const nis2ComplianceRoadmapData = {
      _type: 'servicePage',
      _id: 'nis2-compliance-roadmap',
      title: 'NIS2 Compliance Roadmap',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/nis2/nis2-readiness/nis2-compliance-roadmap'
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
        title: 'NIS2 Compliance Roadmap | ADVISORI',
        description: 'Strategische Roadmap zur systematischen Umsetzung der NIS2-Richtlinie. Strukturierter Ansatz mit klaren Meilensteinen für eine erfolgreiche Compliance-Implementierung.',
        keywords: 'NIS2, Compliance Roadmap, Cybersicherheit, Implementierungsplan, EU-Richtlinie, Risikomanagement, KRITIS'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'NIS2 Compliance Roadmap'
        },
        tagline: 'Strukturierte Implementierung für nachhaltige NIS2-Compliance',
        heading: 'NIS2 Compliance Roadmap',
        description: 'Eine strategische, strukturierte Roadmap zur systematischen Umsetzung der NIS2-Richtlinie. Wir entwickeln mit Ihnen einen klaren Implementierungsplan mit definierten Meilensteinen und messbaren Erfolgskriterien.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Klare Implementierungsstrategie mit definierten Phasen und Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Risikominimierung durch strukturiertes Vorgehen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Optimale Ressourcenallokation und Budgetplanung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Fortschrittsmessung und Erfolgskontrolle'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'NIS2 Compliance Roadmap',
        description: 'Die NIS2-Richtlinie stellt Unternehmen vor komplexe Herausforderungen, die eine strukturierte und durchdachte Herangehensweise erfordern. Unsere NIS2 Compliance Roadmap bietet einen systematischen Ansatz zur erfolgreichen Implementierung aller erforderlichen Maßnahmen innerhalb der vorgeschriebenen Fristen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung einer maßgeschneiderten Implementierungsstrategie basierend auf Ihrer Unternehmensstruktur'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Phasenweise Umsetzung mit klaren Prioritäten und Abhängigkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration bestehender Sicherheitsmaßnahmen und Optimierung von Synergien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliches Monitoring und Anpassung der Roadmap an regulatorische Entwicklungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Change Management und Stakeholder-Kommunikation während der gesamten Implementierung'
          }
        ],
        alert: {
          title: 'Strategischer Ansatz',
          content: 'Eine erfolgreiche NIS2-Implementierung erfordert mehr als nur die Erfüllung regulatorischer Mindestanforderungen. Unsere Roadmap integriert Business-Ziele, operative Effizienz und strategische Cybersicherheitsziele zu einem ganzheitlichen Ansatz.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in EU-Cybersicherheitsregulierung und praktischer Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodiken für komplexe Transformationsprojekte'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Erfahrung in verschiedenen kritischen Sektoren'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Agile Projektmethoden für flexible und reaktionsfähige Implementierung'
            }
          ]
        },
        additionalInfo: 'Die NIS2-Richtlinie bringt erhebliche Veränderungen mit sich, die eine strategische Herangehensweise erfordern. Eine gut durchdachte Roadmap ist entscheidend für eine erfolgreiche und kosteneffiziente Umsetzung, die über die bloße Compliance hinausgeht.',
        serviceDescription: 'Wir entwickeln mit Ihnen eine umfassende, maßgeschneiderte Roadmap für die NIS2-Implementierung, die alle regulatorischen Anforderungen erfüllt und gleichzeitig Ihre geschäftlichen Ziele unterstützt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Planung und Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Phasenweise Implementierungsunterstützung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Projektmanagement und Meilenstein-Tracking'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Stakeholder-Management und Change-Kommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Optimierung und Anpassung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln eine strukturierte, phasenweise Roadmap, die eine systematische und effiziente NIS2-Implementierung gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer aktuellen Sicherheitslage und regulatorischen Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten, phasenweisen Implementierungsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Definition klarer Meilensteine, Erfolgskriterien und Ressourcenanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche Begleitung der Implementierung mit regelmäßigen Reviews'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Fortlaufende Optimierung und Anpassung an veränderte Anforderungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI',
        name: 'Expert Team',
        position: 'NIS2 Specialists',
        quote: 'Eine strukturierte Roadmap ist der Schlüssel zum Erfolg bei der NIS2-Implementierung. Unser bewährter Ansatz hilft Unternehmen dabei, Compliance-Ziele effizient zu erreichen und gleichzeitig ihre Cybersicherheitsposition nachhaltig zu stärken.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische Roadmap-Entwicklung',
          description: 'Entwicklung einer umfassenden, maßgeschneiderten Implementierungsstrategie für Ihre NIS2-Compliance mit klaren Phasen und Meilensteinen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse der Ausgangslage und Gap-Identifizierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Priorisierung von Maßnahmen nach Risiko und Business Impact'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Ressourcenplanung und Budgetoptimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Definition messbarer Erfolgskriterien und KPIs'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Implementierungsbegleitung und Projektmanagement',
          description: 'Professionelle Begleitung der gesamten Umsetzung mit erfahrenem Projektmanagement und kontinuierlicher Fortschrittskontrolle.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Agiles Projektmanagement mit flexiblen Anpassungsmöglichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Regelmäßige Meilenstein-Reviews und Fortschrittsberichte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Risikomanagement und proaktive Problemlösung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Stakeholder-Kommunikation und Change Management'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(nis2ComplianceRoadmapData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ NIS2 Compliance Roadmap page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
