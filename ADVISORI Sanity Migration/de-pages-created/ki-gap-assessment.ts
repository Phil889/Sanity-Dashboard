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
    console.log('Creating KI Gap Assessment page...')

    const kiGapAssessmentData = {
      _type: 'servicePage',
      _id: 'ki-gap-assessment',
      title: 'KI Gap Assessment',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/ki-gap-assessment'
      },
      parent: {
        _type: 'reference',
        _ref: 'ki-kuenstliche-intelligenz'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'digitale-transformation'
        }
      },
      seo: {
        _type: 'seo',
        title: 'KI Gap Assessment | AI Readiness Evaluation | ADVISORI',
        description: 'Systematische Bewertung Ihrer AI-Reife mit ADVISORI\'s KI Gap Assessment. Identifizieren Sie Verbesserungspotenziale, entwickeln Sie strategische Roadmaps und optimieren Sie Ihre AI-Transformation für nachhaltigen Geschäftserfolg.',
        keywords: 'KI Gap Assessment, AI Readiness Assessment, KI Reifegrad Bewertung, AI Maturity Evaluation, KI Strategie Analyse, AI Transformation Roadmap, Enterprise AI Assessment, KI Potenzialanalyse'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KI Gap Assessment AI Readiness Evaluation'
        },
        tagline: 'Systematische AI-Reifegradanalyse für strategische Transformation',
        heading: 'KI Gap Assessment',
        description: 'Verschaffen Sie sich Klarheit über Ihren aktuellen AI-Reifegrad und identifizieren Sie strategische Verbesserungspotenziale mit ADVISORI\'s systematischem KI Gap Assessment. Unsere umfassende Analyse bewertet Ihre technischen Kapazitäten, organisatorischen Strukturen und strategischen Ausrichtung, um maßgeschneiderte Roadmaps für erfolgreiche AI-Transformation zu entwickeln.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Objektive Bewertung des aktuellen AI-Reifegrads und Potenzials'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strategische Gap-Analyse mit priorisierten Handlungsempfehlungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Maßgeschneiderte AI-Roadmaps für nachhaltige Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Benchmarking gegen Branchenstandards und Best Practices'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KI Gap Assessment',
        description: 'Ein systematisches KI Gap Assessment ist der Grundstein für erfolgreiche AI-Transformation. ADVISORI führt umfassende Bewertungen durch, die alle kritischen Dimensionen Ihrer AI-Readiness analysieren – von technischer Infrastruktur über Datenqualität bis hin zu organisatorischen Kompetenzen. Unser strukturierter Ansatz identifiziert nicht nur Gaps, sondern entwickelt auch konkrete, priorisierte Roadmaps für nachhaltige AI-Excellence.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Multidimensionale AI-Reifegrad-Bewertung mit standardisierten Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Technische Gap-Analyse von Infrastruktur, Daten und Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Organisatorische Readiness-Evaluation und Kompetenz-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Strategische Roadmap-Entwicklung mit priorisierten Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Branchenbenchmarking und Best-Practice-Vergleich'
          }
        ],
        alert: {
          title: 'AI-Readiness entscheidet über Transformationserfolg',
          content: 'Unternehmen mit systematischem Gap Assessment erreichen deutlich höhere Erfolgsraten bei AI-Projekten. Investieren Sie in fundierte Analyse und schaffen Sie die optimalen Voraussetzungen für nachhaltige AI-Transformation und Wettbewerbsvorteile.'
        },
        whyUs: {
          title: 'Unsere Gap Assessment-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Bewährte Assessment-Frameworks mit branchenspezifischen Benchmarks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Ganzheitliche Bewertung von Technologie, Organisation und Strategie'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxisorientierte Roadmaps mit konkreten Umsetzungsempfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung von Assessment bis Implementierung'
            }
          ]
        },
        additionalInfo: 'Erfolgreiche AI-Transformation beginnt mit klarer Standortbestimmung und strategischer Planung!',
        serviceDescription: 'Unser KI Gap Assessment umfasst systematische Analyse aller AI-relevanten Dimensionen und entwickelt maßgeschneiderte Transformationsstrategien für nachhaltigen Erfolg.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'AI Maturity Assessment & Readiness Evaluation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Technical Infrastructure & Data Quality Analysis'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Organizational Capability & Skills Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Strategic Roadmap Development & Prioritization'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Industry Benchmarking & Best Practice Analysis'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Gap Assessment-Ansatz',
        description: 'Wir verfolgen einen strukturierten, evidenzbasierten Ansatz zur AI-Readiness-Bewertung. Jedes Assessment kombiniert quantitative Metriken mit qualitativen Insights, um ein vollständiges Bild Ihrer AI-Reife zu entwickeln und konkrete Handlungsempfehlungen abzuleiten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Ist-Analyse mit standardisierten Assessment-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Multidimensionale Gap-Identifikation und Prioritätsbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Strategische Roadmap-Entwicklung mit messbaren Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Branchenbenchmarking und Competitive Intelligence-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Validierung und Roadmap-Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Ein systematisches KI Gap Assessment ist der Schlüssel für erfolgreiche AI-Transformation. Ohne klare Standortbestimmung und strategische Roadmap scheitern viele AI-Initiativen an unrealistischen Erwartungen oder unzureichender Vorbereitung. Unser Assessment-Ansatz schafft Transparenz über den aktuellen Reifegrad und entwickelt realistische, umsetzbare Transformationspläne. Wir bewerten nicht nur technische Aspekte, sondern auch organisatorische Readiness und strategische Ausrichtung – denn erfolgreiche AI-Transformation ist immer ganzheitlich.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'AI Maturity Assessment & Readiness Evaluation',
          description: 'Systematische Bewertung Ihres AI-Reifegrads mit standardisierten Frameworks und branchenspezifischen Benchmarks.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Multidimensionale Reifegrad-Bewertung nach etablierten AI-Maturity-Modellen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Strategische AI-Readiness-Evaluation mit Fokus auf Geschäftswert'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Organisatorische Capability-Analyse und Skill-Gap-Identifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Cultural Readiness Assessment für nachhaltige AI-Adoption'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Technical Infrastructure & Data Quality Analysis',
          description: 'Umfassende Bewertung Ihrer technischen AI-Grundlagen und Datenlandschaft für optimale Implementierungsvoraussetzungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'IT-Infrastruktur-Assessment mit Cloud-Readiness-Evaluation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Datenqualitäts-Analyse und Data Governance-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Systemintegrations-Analyse und API-Readiness-Prüfung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Security und Compliance-Assessment für AI-Implementierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Organizational Capability & Skills Assessment',
          description: 'Detaillierte Analyse Ihrer organisatorischen AI-Kompetenzen und Entwicklung gezielter Capacity-Building-Strategien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Skill-Gap-Analyse und Kompetenz-Mapping für AI-Teams'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Organisationsstruktur-Bewertung und Governance-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Change-Readiness-Evaluation und Cultural-Fit-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Leadership-Capability-Assessment für AI-Transformation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Strategic Roadmap Development & Prioritization',
          description: 'Entwicklung maßgeschneiderter AI-Transformations-Roadmaps mit klaren Prioritäten und messbaren Meilensteinen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Gap-basierte Roadmap-Entwicklung mit strategischer Priorisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Business-Case-Entwicklung und ROI-Modellierung für AI-Initiativen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Phasenplanung mit Quick Wins und langfristigen Transformationszielen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Risk-Assessment und Mitigation-Strategien für Roadmap-Umsetzung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Industry Benchmarking & Best Practice Analysis',
          description: 'Vergleichende Analyse mit Branchenstandards und Integration bewährter AI-Praktiken für Wettbewerbsvorteile.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Branchenspezifisches Benchmarking und Competitive Intelligence'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Best-Practice-Analyse und Success-Pattern-Identifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Market-Trend-Analyse und Future-Readiness-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Wettbewerbspositionierung und Differenzierungs-Strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Continuous Assessment & Optimization',
          description: 'Kontinuierliche Überwachung und Optimierung Ihrer AI-Transformation mit regelmäßigen Re-Assessments.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Regelmäßige Maturity-Re-Assessments und Progress-Tracking'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'KPI-basierte Erfolgsüberwachung und Roadmap-Anpassung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Emerging-Technology-Scouting und Innovation-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Optimierung und Excellence-Development'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kiGapAssessmentData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KI Gap Assessment page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
