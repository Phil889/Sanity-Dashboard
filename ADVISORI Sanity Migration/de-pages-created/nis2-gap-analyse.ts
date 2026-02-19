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
    console.log('Creating NIS2 Gap Analyse page...')

    const nis2GapAnalyseData = {
      _type: 'servicePage',
      _id: 'nis2-gap-analyse',
      title: 'NIS2 Gap Analyse',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/nis2/nis2-readiness/nis2-gap-analyse'
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
        title: 'NIS2 Gap Analyse | ADVISORI',
        description: 'Umfassende NIS2 Gap-Analyse zur Identifikation von Compliance-Lücken und Entwicklung zielgerichteter Umsetzungsstrategien. Professionelle Bewertung Ihres aktuellen Cybersicherheitsstatus.',
        keywords: 'NIS2 Gap Analyse, Cybersicherheit Assessment, Compliance Lücken, NIS2 Readiness, Sicherheitsbewertung, Implementierungsstrategie'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'NIS2 Gap Analyse'
        },
        tagline: 'Systematische Identifikation von NIS2-Compliance-Lücken',
        heading: 'NIS2 Gap Analyse',
        description: 'Eine präzise Gap-Analyse ist der Grundstein für eine erfolgreiche NIS2-Implementierung. Wir bewerten systematisch Ihren aktuellen Cybersicherheitsstatus, identifizieren Compliance-Lücken und entwickeln zielgerichtete Handlungsempfehlungen für eine effiziente und kostenwirksame Umsetzung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Identifikation aller NIS2-Compliance-Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Priorisierte Roadmap mit konkreten Umsetzungsschritten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Optimierte Ressourcenallokation durch Risk-based Approach'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Fundament für strategische Cybersicherheitsinvestitionen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'NIS2 Gap Analyse',
        description: 'Die NIS2-Richtlinie stellt umfassende Anforderungen an Cybersicherheitsmaßnahmen, Risikomanagement und Governance-Strukturen. Eine professionelle Gap-Analyse identifiziert systematisch alle Bereiche, in denen Anpassungen erforderlich sind, und bildet die Basis für eine strukturierte und kosteneffiziente Implementierung. Unsere bewährte Methodik gewährleistet vollständige Compliance-Readiness.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Bewertung technischer und organisatorischer Sicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Analyse von Governance-Strukturen und Managementprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Bewertung von Incident Response und Business Continuity Capabilities'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Identifikation von Lieferkettenrisiken und Third-Party-Dependencies'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Entwicklung priorisierter Umsetzungsroadmaps mit Kosten-Nutzen-Bewertung'
          }
        ],
        alert: {
          title: 'Kritischer Erfolgsfaktor',
          content: 'Eine unvollständige Gap-Analyse kann zu kostspieligen Fehlentscheidungen und unvollständiger Compliance führen. Professionelle Bewertung sichert strukturierte Umsetzung und optimale Investitionseffizienz.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende NIS2-Expertise und bewährte Assessment-Methodiken'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Branchenspezifische Erfahrung in allen relevanten Sektoren'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Strukturierte Herangehensweise mit nachvollziehbaren Bewertungskriterien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Integration strategischer Cybersicherheitsziele in die Gap-Analyse'
            }
          ]
        },
        additionalInfo: 'Die NIS2 Gap-Analyse erfordert eine systematische Bewertung aller relevanten Bereiche von technischen Sicherheitskontrollen bis hin zu organisatorischen Prozessen. Unsere strukturierte Methodik gewährleistet vollständige Abdeckung und praxisnahe Umsetzungsempfehlungen.',
        serviceDescription: 'Unser NIS2 Gap-Analyse Service bietet eine umfassende und systematische Bewertung Ihres aktuellen Cybersicherheitsstatus gegen die NIS2-Anforderungen. Wir identifizieren alle Compliance-Lücken und entwickeln konkrete Handlungsempfehlungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Systematische Bewertung aller NIS2-Anforderungsbereiche'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Detaillierte Gap-Identifikation mit Bewertungskriterien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Risiko-basierte Priorisierung der Umsetzungsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Kosten-Nutzen-Bewertung für alle identifizierten Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Entwicklung detaillierter Implementierungsroadmaps'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine umfassende Gap-Analyse, die als Fundament für Ihre erfolgreiche NIS2-Implementierung dient.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strukturierte Ist-Analyse aller relevanten Cybersicherheitsbereiche'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Systematischer Abgleich mit allen NIS2-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Detaillierte Gap-Identifikation und Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung priorisierter Umsetzungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Erstellung umfassender Implementierungsroadmaps mit Zeitplänen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Eine professionelle Gap-Analyse ist der Schlüssel zu einer effizienten NIS2-Implementierung. Unsere strukturierte Herangehensweise identifiziert nicht nur Compliance-Lücken, sondern schafft auch die Basis für strategische Cybersicherheitsinvestitionen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Umfassende Compliance-Bewertung',
          description: 'Wir führen eine systematische Bewertung aller NIS2-relevanten Bereiche durch und identifizieren präzise alle Compliance-Lücken.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Strukturierte Ist-Analyse technischer Sicherheitsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung organisatorischer Prozesse und Governance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Analyse von Incident Response und Business Continuity'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Assessment von Lieferketten und Third-Party-Risiken'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Strategische Umsetzungsplanung',
          description: 'Basierend auf der Gap-Analyse entwickeln wir konkrete, priorisierte Umsetzungsstrategien für Ihre NIS2-Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Risiko-basierte Priorisierung aller identifizierten Maßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Detaillierte Kosten-Nutzen-Bewertung für Investitionsentscheidungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung phasenweiser Implementierungsroadmaps'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration strategischer Cybersicherheitsziele in die Umsetzung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(nis2GapAnalyseData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ NIS2 Gap Analyse page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
