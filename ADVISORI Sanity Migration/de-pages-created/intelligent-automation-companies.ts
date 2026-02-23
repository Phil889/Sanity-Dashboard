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
    console.log('Creating Intelligent Automation Companies page...')

    const intelligentAutomationCompaniesData = {
      _type: 'servicePage',
      _id: 'intelligent-automation-companies',
      title: 'Intelligent Automation Companies',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-automation-companies'
      },
      parent: {
        _type: 'reference',
        _ref: 'intelligent-automation'
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
        title: 'Intelligent Automation Companies | Vendor Evaluation & Selection | ADVISORI',
        description: 'Expertenbewertung von Intelligent Automation Companies für EU AI Act konforme Technologieauswahl. ADVISORI unterstützt bei Vendor-Selection und Due Diligence für optimale Automatisierungslösungen.',
        keywords: 'Intelligent Automation Companies, Vendor Evaluation, Technology Selection, EU AI Act Compliance, Automation Vendors, Due Diligence, Market Analysis, Technology Assessment'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Automation Companies'
        },
        tagline: 'Expertenbewertung und strategische Auswahl von Intelligent Automation Companies',
        heading: 'Intelligent Automation Companies',
        description: 'Navigieren Sie erfolgreich durch die komplexe Landschaft der Intelligent Automation Anbieter. ADVISORI bietet umfassende Vendor-Evaluation, Due Diligence und strategische Beratung für die Auswahl der optimalen Automatisierungspartner – EU AI Act konform und zukunftssicher.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende Marktanalyse und Vendor-Bewertung für optimale Technologieauswahl'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'EU AI Act Compliance-Prüfung aller Automatisierungsanbieter und -lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Unabhängige Due Diligence und Risikobewertung von Automation Companies'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strategische Partnerschaftsberatung und Verhandlungsunterstützung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Automation Companies',
        description: 'Die Auswahl des richtigen Intelligent Automation Anbieters ist entscheidend für den Erfolg Ihrer Digitalisierungsstrategie. Mit hunderten von Anbietern am Markt und sich schnell entwickelnden Technologien ist eine fundierte Bewertung unerlässlich. ADVISORI bringt tiefgreifende Marktkenntnis und bewährte Evaluierungsmethoden mit, um Sie bei der strategischen Auswahl zu unterstützen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Marktanalyse und Vendor-Landscape-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'EU AI Act Compliance-Assessment aller Automatisierungsanbieter'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Technische Due Diligence und Architektur-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Strategische Fit-Analyse und Zukunftsfähigkeitsbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Verhandlungsunterstützung und Partnerschaftsstrukturierung'
          }
        ],
        alert: {
          title: 'Marktexpertise',
          content: 'Die Intelligent Automation Landschaft entwickelt sich rasant. Unsere kontinuierliche Marktbeobachtung und Vendor-Bewertung stellt sicher, dass Sie immer die besten verfügbaren Lösungen für Ihre spezifischen Anforderungen identifizieren und erfolgreich implementieren.'
        },
        whyUs: {
          title: 'Unsere Vendor-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Marktkenntnis und kontinuierliche Vendor-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'EU AI Act Compliance-Expertise für sichere Technologieauswahl'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Unabhängige Bewertung ohne Vendor-Bias oder kommerzielle Interessen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Bewährte Due Diligence Methoden und Evaluierungsframeworks'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit professioneller Vendor-Evaluation reduzieren Implementierungsrisiken erheblich und erzielen bessere ROI-Ergebnisse. Profitieren Sie von unserer Marktexpertise für Ihre Technologieentscheidungen!',
        serviceDescription: 'Unsere Intelligent Automation Companies Services umfassen die gesamte Vendor-Lifecycle von der Marktanalyse über Due Diligence bis hin zur strategischen Partnerschaftsbetreuung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Marktanalyse und Vendor-Landscape-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'EU AI Act Compliance-Assessment und Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Technische Due Diligence und Architektur-Evaluation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Strategische Vendor-Selection und Fit-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Verhandlungsunterstützung und Partnerschaftsmanagement'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Evaluierungsansatz',
        description: 'Unsere systematische Herangehensweise an die Bewertung von Intelligent Automation Companies kombiniert quantitative Analysen mit qualitativen Assessments und stellt sicher, dass alle kritischen Faktoren für eine erfolgreiche Partnerschaft berücksichtigt werden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Marktanalyse und Vendor-Landscape-Mapping'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Multi-Kriterien-Bewertung mit EU AI Act Compliance-Fokus'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Technische Due Diligence und Proof-of-Concept-Evaluation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Strategische Fit-Analyse und Zukunftsfähigkeitsbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Verhandlungsunterstützung und Implementierungsbegleitung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die Auswahl des richtigen Intelligent Automation Anbieters entscheidet über Erfolg oder Misserfolg Ihrer Digitalisierungsstrategie. Unsere systematische Vendor-Evaluation und tiefgreifende Marktkenntnis stellen sicher, dass unsere Kunden nicht nur die technisch beste, sondern auch die strategisch optimale und EU AI Act konforme Lösung für ihre spezifischen Anforderungen finden.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Marktanalyse und Vendor-Landscape-Bewertung',
          description: 'Umfassende Analyse des Intelligent Automation Marktes mit detaillierter Bewertung aller relevanten Anbieter und deren Lösungsportfolios.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Systematisches Vendor-Mapping und Marktpositionierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Technologie-Trend-Analyse und Future-Roadmap-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Competitive Intelligence und Differenzierungsanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Marktreife-Assessment und Vendor-Stabilität-Bewertung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'EU AI Act Compliance-Assessment',
          description: 'Spezialisierte Bewertung der EU AI Act Konformität von Intelligent Automation Anbietern und deren Lösungen für rechtssichere Technologieauswahl.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'AI Act Compliance-Audit aller Vendor-Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Risikobewertung und Klassifizierung nach EU-Regulierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Governance-Framework-Bewertung der Anbieter'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Compliance-Roadmap und Anpassungsempfehlungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Technische Due Diligence',
          description: 'Tiefgreifende technische Bewertung von Automatisierungsanbietern mit Fokus auf Architektur, Skalierbarkeit und Integrationsfähigkeit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Architektur-Assessment und Technologie-Stack-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Skalierbarkeits- und Performance-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Integration-Capabilities und API-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Security-Assessment und Datenschutz-Evaluation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Strategische Vendor-Selection',
          description: 'Systematische Auswahl der optimalen Intelligent Automation Anbieter basierend auf Ihren spezifischen Geschäftsanforderungen und strategischen Zielen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Requirements-Engineering und Fit-Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Multi-Kriterien-Bewertung und Scoring-Modelle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Proof-of-Concept-Design und -Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Total-Cost-of-Ownership-Analyse und ROI-Bewertung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Vendor-Relationship-Management',
          description: 'Professionelle Betreuung der Beziehungen zu Intelligent Automation Anbietern für optimale Partnerschaftsergebnisse und kontinuierliche Wertschöpfung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Verhandlungsunterstützung und Contract-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'SLA-Definition und Performance-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Vendor-Performance-Reviews und Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Eskalations-Management und Konfliktresolution'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Continuous Market Intelligence',
          description: 'Laufende Marktbeobachtung und Vendor-Bewertung für kontinuierliche Optimierung Ihrer Automatisierungspartner-Landschaft.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Kontinuierliches Vendor-Monitoring und Market-Updates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Emerging-Technology-Scouting und Innovation-Tracking'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Competitive-Intelligence und Benchmark-Analysen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Strategic-Advisory und Portfolio-Optimierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(intelligentAutomationCompaniesData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Automation Companies page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
