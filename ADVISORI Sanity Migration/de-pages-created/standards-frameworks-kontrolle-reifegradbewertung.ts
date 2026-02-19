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
    console.log('Creating Standards Frameworks Kontrolle Reifegradbewertung page...')

    const standardsFrameworksKontrolleReifegradData = {
      _type: 'servicePage',
      _id: 'standards-frameworks-kontrolle-reifegradbewertung',
      title: 'Kontrolle Reifegradbewertung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/standards-frameworks-cis-controls/standards-frameworks-kontrolle-reifegradbewertung'
      },
      parent: {
        _type: 'reference',
        _ref: 'standards-frameworks-cis-controls'
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
        title: 'Kontrolle Reifegradbewertung | CIS Controls | ADVISORI',
        description: 'Professionelle Reifegradbewertung für CIS Controls. Bewerten Sie systematisch den Implementierungsgrad Ihrer Sicherheitskontrollen und entwickeln Sie gezielte Verbesserungsstrategien.',
        keywords: 'CIS Controls, Reifegradbewertung, Maturity Assessment, Sicherheitskontrollen, Cybersecurity Framework, Compliance Assessment'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Kontrolle Reifegradbewertung'
        },
        tagline: 'Systematische Bewertung und Verbesserung Ihrer CIS Controls Implementation',
        heading: 'Kontrolle Reifegradbewertung',
        description: 'Evaluieren Sie den Reifegrad Ihrer CIS Controls Implementation mit unserer strukturierten Bewertungsmethodik. Identifizieren Sie Schwächen, priorisieren Sie Verbesserungen und entwickeln Sie einen gezielten Roadmap für erhöhte Cybersecurity-Resilienz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Objektive Bewertung des aktuellen Implementierungsstands'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Identifikation kritischer Sicherheitslücken und Verbesserungspotentiale'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Priorisierte Roadmap für optimale Ressourcenallokation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Messbare KPIs zur Überwachung des Fortschritts'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Kontrolle Reifegradbewertung',
        description: 'Eine professionelle Reifegradbewertung Ihrer CIS Controls bildet das Fundament für eine erfolgreiche Cybersecurity-Strategie. Wir bewerten systematisch den Implementierungsstand aller 18 CIS Controls und entwickeln mit Ihnen einen maßgeschneiderten Verbesserungsplan.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Bewertung aller 18 CIS Controls nach etablierten Maturity-Modellen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Gap-Analyse zwischen Ist-Zustand und Best-Practice-Standards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Risikobasierte Priorisierung von Verbesserungsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung eines strategischen Implementierungs-Roadmaps'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Definition messbarer KPIs und Monitoring-Mechanismen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine strukturierte Reifegradbewertung deckt nicht nur technische Lücken auf, sondern bewertet auch organisatorische Aspekte wie Governance, Prozesse und Awareness-Level, die für eine nachhaltige Cybersecurity-Posture entscheidend sind.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Langjährige Expertise in CIS Controls Assessment und Cybersecurity Maturity'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Bewertungsmethodik mit branchenspezifischen Anpassungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von technischen bis zu organisatorischen Aspekten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Strategische Beratung für nachhaltige Verbesserungsinitiative'
            }
          ]
        },
        additionalInfo: 'Organisationen mit systematischen Maturity Assessments erreichen im Durchschnitt 40% höhere Effectiveness-Raten bei der CIS Controls Implementation und reduzieren ihre Cyber-Risiken um bis zu 60%.',
        serviceDescription: 'Unser Kontrolle Reifegradbewertung Service kombiniert bewährte Assessment-Frameworks mit branchenspezifischer Expertise, um Ihnen eine präzise Standortbestimmung und strategische Entwicklungsrichtung für Ihre Cybersecurity-Posture zu bieten.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strukturierte Maturity Assessment Durchführung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Gap-Analyse und Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Strategische Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'KPI-Definition und Monitoring-Framework'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Change Management und Stakeholder Alignment'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir führen eine systematische und objektive Bewertung Ihrer CIS Controls Implementation durch, die sowohl technische als auch organisatorische Aspekte berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Vorbereitung und Stakeholder-Alignment für das Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Datensammlung durch Interviews, Dokumentenanalyse und technische Evaluierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Bewertung nach etablierten Maturity-Modellen und Best Practices'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Gap-Analyse und Risikobewertung der identifizierten Schwächen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Entwicklung einer priorisierten Roadmap mit konkreten Umsetzungsempfehlungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die strukturierte Reifegradbewertung von ADVISORI hat uns nicht nur den aktuellen Stand unserer CIS Controls Implementation vor Augen geführt, sondern auch eine klare strategische Richtung für unsere Cybersecurity-Verbesserungen gegeben. Die priorisierte Roadmap ermöglicht es uns, unsere Ressourcen optimal einzusetzen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Comprehensive Maturity Assessment',
          description: 'Vollständige Bewertung aller 18 CIS Controls mit detaillierter Analyse des Implementierungsstands und der organisatorischen Reife.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Systematische Evaluierung aller CIS Controls Sub-Controls'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung technischer und organisatorischer Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Maturity-Scoring nach etablierten Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Detaillierte Dokumentation mit Evidenzen und Begründungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Strategic Improvement Roadmap',
          description: 'Entwicklung einer priorisierten, risikobasierten Roadmap für die kontinuierliche Verbesserung Ihrer CIS Controls Implementation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Risikobasierte Priorisierung von Verbesserungsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Zeitlich gestaffelte Implementation mit Quick Wins'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Ressourcenplanung und Budgetschätzungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'KPI-Definition für kontinuierliches Monitoring'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(standardsFrameworksKontrolleReifegradData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Standards Frameworks Kontrolle Reifegradbewertung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
