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
    console.log('Creating DSGVO Readiness page...')

    const dsgvoReadinessData = {
      _type: 'servicePage',
      _id: 'dsgvo-readiness',
      title: 'DSGVO Readiness',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dsgvo/dsgvo-readiness'
      },
      parent: {
        _type: 'reference',
        _ref: 'dsgvo'
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
        title: 'DSGVO Readiness Assessment | ADVISORI',
        description: 'Professionelle DSGVO Readiness-Analyse für Unternehmen. Comprehensive Gap-Assessment, Compliance-Roadmap und strategische Vorbereitung für vollständige Datenschutz-Grundverordnung-Konformität.',
        keywords: 'DSGVO Readiness, Datenschutz Assessment, GDPR Compliance, Privacy Impact Assessment, Datenschutz-Audit, DSGVO Vorbereitung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DSGVO Readiness Assessment'
        },
        tagline: 'Strategic DSGVO Readiness für nachhaltige Compliance Excellence',
        heading: 'DSGVO Readiness',
        description: 'Eine umfassende DSGVO Readiness-Analyse ist der erste Schritt zu nachhaltiger Datenschutz-Excellence. Wir bewerten Ihre aktuelle Compliance-Position, identifizieren kritische Lücken und entwickeln eine strategische Roadmap für vollständige DSGVO-Konformität.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Comprehensive 360°-Assessment Ihrer aktuellen DSGVO-Compliance-Position'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strategische Priorisierung kritischer Compliance-Lücken und Risikofaktoren'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Maßgeschneiderte Implementation-Roadmap mit klaren Milestones'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Executive-Ready-Reporting für fundierte C-Level-Entscheidungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DSGVO Readiness Assessment',
        description: 'Unser DSGVO Readiness Assessment bietet eine umfassende Bewertung Ihrer aktuellen Datenschutz-Compliance-Position und entwickelt eine strategische Roadmap für vollständige DSGVO-Konformität.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Comprehensive Gap-Analyse aller DSGVO-relevanten Bereiche und Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Risikobewertung und Priorisierung kritischer Compliance-Defizite'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Strategische Roadmap-Entwicklung mit klaren Umsetzungsschritten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Assessment technischer und organisatorischer Maßnahmen (TOM)'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Business-Impact-Analyse und ROI-Bewertung von Privacy-Investitionen'
          }
        ],
        alert: {
          title: 'Kritischer Erfolgsfaktor',
          content: 'Ein professionelles DSGVO Readiness Assessment reduziert Implementierungszeiten um bis zu 40% und minimiert das Risiko kostspieliger Compliance-Fehler während der Umsetzungsphase.'
        },
        whyUs: {
          title: 'Unsere Assessment-Excellence',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Proven-Track-Record mit über 200 erfolgreichen DSGVO Readiness Assessments'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Branchenspezifische Assessment-Frameworks für verschiedene Industrien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Executive-Level-Expertise für strategische C-Suite-Beratung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliches Update unserer Methoden basierend auf neuesten Regulierungen'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit professionellem DSGVO Readiness Assessment erreichen 85% schneller vollständige Compliance und reduzieren Implementierungskosten um durchschnittlich 30%.',
        serviceDescription: 'Unser DSGVO Readiness Assessment kombiniert technische Due Diligence mit strategischer Business-Analyse, um Ihnen eine vollständige Transparenz über Ihre aktuelle Compliance-Position und den optimalen Weg zur DSGVO-Excellence zu bieten.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Comprehensive Compliance-Gap-Analyse und Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Assessment bestehender Datenschutz-Governance und -Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Technische Infrastruktur-Bewertung und TOM-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Strategische Implementation-Roadmap mit Zeitplan und Budget'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Executive Summary mit handlungsorientierten Empfehlungen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Assessment-Ansatz',
        description: 'Wir verfolgen einen strukturierten, business-orientierten Ansatz für DSGVO Readiness Assessments, der sowohl technische als auch strategische Aspekte berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Stakeholder-Interviews und Dokumentationsanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Technische System-Assessments und Datenmapping-Evaluierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Risikobewertung und Business-Impact-Analyse aller Compliance-Gaps'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung einer priorisierten, business-aligned Implementation-Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Executive Presentation und strategische Handlungsempfehlungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Das DSGVO Readiness Assessment von ADVISORI hat uns eine klare Transparenz über unsere Compliance-Position verschafft und eine strategische Roadmap geliefert, die sowohl praxisorientiert als auch business-aligned war. Die Investition hat sich bereits in der Planungsphase amortisiert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Comprehensive DSGVO Gap-Analyse',
          description: 'Vollständige Bewertung Ihrer aktuellen DSGVO-Compliance-Position mit detaillierter Identifikation aller kritischen Lücken.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: '360°-Assessment aller DSGVO-relevanten Unternehmensbereiche'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung bestehender Datenschutz-Governance und -Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Analyse von Datenverarbeitungsprozessen und -verzeichnissen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Assessment technischer und organisatorischer Maßnahmen (TOM)'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Strategic Implementation Roadmap',
          description: 'Entwicklung einer maßgeschneiderten Umsetzungsstrategie mit klaren Prioritäten, Zeitplan und Ressourcenplanung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Risiko-basierte Priorisierung aller Compliance-Maßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Detaillierte Zeitplanung mit realistischen Milestones'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Ressourcen- und Budgetplanung für alle Umsetzungsschritte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Business-Case-Entwicklung und ROI-Kalkulation'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(dsgvoReadinessData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DSGVO Readiness page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
