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
    console.log('Creating Standards & Frameworks Maturity Assessment Roadmap page...')

    const maturityAssessmentRoadmapData = {
      _type: 'servicePage',
      _id: 'standards-frameworks-maturity-assessment-roadmap',
      title: 'Standards & Frameworks Maturity Assessment Roadmap',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/standards-frameworks-nist-cybersecurity-framework/standards-frameworks-maturity-assessment-roadmap'
      },
      parent: {
        _type: 'reference',
        _ref: 'standards-frameworks-nist-cybersecurity-framework'
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
        title: 'Standards & Frameworks Maturity Assessment Roadmap | ADVISORI',
        description: 'Entwickeln Sie eine strukturierte Roadmap zur Bewertung und Verbesserung der Reife Ihrer Standards & Frameworks Implementierung. Strategische Planung für nachhaltige Compliance-Exzellenz.',
        keywords: 'Maturity Assessment, Standards Frameworks, Compliance Roadmap, Reifegradmodell, NIST Framework, Compliance Excellence'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Standards & Frameworks Maturity Assessment Roadmap'
        },
        tagline: 'Strategische Roadmap-Entwicklung für Compliance-Exzellenz',
        heading: 'Standards & Frameworks Maturity Assessment Roadmap',
        description: 'Entwickeln Sie eine strukturierte und strategische Roadmap zur systematischen Bewertung und kontinuierlichen Verbesserung der Reife Ihrer Standards & Frameworks Implementierung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strukturierte Bewertung des aktuellen Reifegrads Ihrer Compliance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strategische Roadmap-Entwicklung für nachhaltige Verbesserungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Priorisierung von Maßnahmen basierend auf Business Impact und Risiko'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Fortschrittsüberwachung und adaptive Anpassung der Strategie'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Standards & Frameworks Maturity Assessment Roadmap',
        description: 'Eine strukturierte Maturity Assessment Roadmap ist entscheidend für die strategische Weiterentwicklung Ihrer Standards & Frameworks Implementierung. Wir unterstützen Sie bei der systematischen Bewertung des Ist-Zustands, der Definition von Zielzuständen und der Entwicklung einer praxisorientierten Roadmap für nachhaltige Compliance-Exzellenz.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Comprehensive Maturity Assessment aktueller Standards & Frameworks Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Strategische Roadmap-Entwicklung mit klaren Meilensteinen und Zielsetzungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Business-Impact-orientierte Priorisierung von Verbesserungsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliche Monitoring- und Anpassungsmechanismen für adaptive Roadmaps'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration in bestehende Governance-Strukturen und Change Management Prozesse'
          }
        ],
        alert: {
          title: 'Strategischer Vorteil',
          content: 'Eine strukturierte Maturity Assessment Roadmap transformiert Compliance von einer reaktiven Notwendigkeit zu einem proaktiven strategischen Vorteil, der nachhaltigen Geschäftserfolg und operative Exzellenz ermöglicht.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in Standards & Frameworks Maturity Models und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodologien für strategische Roadmap-Entwicklung und Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Business-orientierte Beratung mit Fokus auf nachhaltigen ROI und Wertschöpfung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Praxiserprobte Tools und Frameworks für kontinuierliche Verbesserung'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit strukturierten Maturity Assessment Roadmaps erreichen bis zu 40% höhere Compliance-Effizienz und reduzieren regulatory Risiken um durchschnittlich 60%. Investieren Sie in strategische Roadmap-Entwicklung für nachhaltigen Compliance-Erfolg!',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum für die Entwicklung und Umsetzung strategischer Maturity Assessment Roadmaps, von der initialen Bewertung über die Roadmap-Entwicklung bis zur kontinuierlichen Optimierung und Anpassung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Comprehensive Maturity Assessment und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Strategische Roadmap-Entwicklung und Meilensteinplanung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Business Impact und ROI-orientierte Priorisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Kontinuierliche Monitoring- und Anpassungsmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Change Management und Stakeholder Engagement'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer Ansatz',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine maßgeschneiderte Maturity Assessment Roadmap, die perfekt auf Ihre spezifischen Geschäftsanforderungen und strategischen Ziele abgestimmt ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Assessment des aktuellen Reifegrads und der Implementierungsqualität'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Definition strategischer Zielzustände und Erfolgsmetriken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung priorisierter Roadmaps mit klaren Meilensteinen und Timelines'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung kontinuierlicher Monitoring- und Verbesserungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Adaptive Anpassung der Roadmap basierend auf Fortschritt und veränderten Anforderungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns dabei unterstützt, eine strategische Maturity Assessment Roadmap zu entwickeln, die nicht nur unsere Compliance-Exzellenz vorantreibt, sondern auch nachhaltigen Geschäftswert schafft. Die strukturierte Herangehensweise und kontinuierliche Optimierung haben unsere Standards & Frameworks Implementierung auf ein neues Level gehoben.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Comprehensive Maturity Assessment',
          description: 'Systematische Bewertung des aktuellen Reifegrads Ihrer Standards & Frameworks Implementierung mit detaillierter Gap-Analyse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Multi-dimensionale Reifegradbewertung nach etablierten Maturity Models'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Detaillierte Gap-Analyse mit Identifikation kritischer Verbesserungsbereiche'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Benchmarking gegen Industry Best Practices und Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Comprehensive Assessment Report mit strategischen Handlungsempfehlungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Strategic Roadmap Development',
          description: 'Entwicklung einer strategischen und praxisorientierten Roadmap für die kontinuierliche Verbesserung Ihrer Standards & Frameworks Maturity.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Business-orientierte Priorisierung von Verbesserungsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung klarer Meilensteine und messbarer Erfolgskriterien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration in bestehende Governance-Strukturen und Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Monitoring- und Anpassungsmechanismen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(maturityAssessmentRoadmapData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Standards & Frameworks Maturity Assessment Roadmap page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
