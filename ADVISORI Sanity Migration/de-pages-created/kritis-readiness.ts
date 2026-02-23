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
    console.log('Creating KRITIS Readiness page...')

    const kritisReadinessData = {
      _type: 'servicePage',
      _id: 'kritis-readiness',
      title: 'KRITIS Readiness',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/kritis/kritis-readiness'
      },
      parent: {
        _type: 'reference',
        _ref: 'kritis'
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
        title: 'KRITIS Readiness Assessment | ADVISORI',
        description: 'Professionelle KRITIS Readiness Bewertung für kritische Infrastrukturen. Gap-Analysen, Schwachstellenbewertung und strategische Vorbereitung.',
        keywords: 'KRITIS Readiness, Gap-Analyse, Schwachstellenanalyse, Risikobewertung, Notfallkonzepte, BSI, Kritische Infrastrukturen'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KRITIS Readiness Assessment'
        },
        tagline: 'Systematische Vorbereitung auf KRITIS-Compliance',
        heading: 'KRITIS Readiness Assessment',
        description: 'Eine fundierte KRITIS Readiness Bewertung ist der erste Schritt zur erfolgreichen Compliance. Wir analysieren systematisch Ihre Bereitschaft, identifizieren Lücken und entwickeln maßgeschneiderte Strategien für eine resiliente und compliance-konforme kritische Infrastruktur.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende Bewertung der KRITIS-Compliance-Bereitschaft'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Systematische Schwachstellenanalyse und Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Gap-Analyse für organisatorische und technische Bereiche'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strategische Notfallkonzepte und Ressourcenplanung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KRITIS Readiness Assessment',
        description: 'Die Vorbereitung auf KRITIS-Compliance erfordert eine systematische Bewertung aller relevanten Bereiche Ihrer kritischen Infrastruktur. Wir unterstützen Sie mit strukturierten Assessments, die eine solide Grundlage für Ihre Compliance-Strategie schaffen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Schwachstellenanalyse und umfassende Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Gap-Analyse für organisatorische Strukturen und technische Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung von Notfallkonzepten und Ressourcenplanung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Strategische Roadmap-Entwicklung für KRITIS-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Priorisierte Maßnahmenplanung und Budgetierung'
          }
        ],
        alert: {
          title: 'Compliance-Tipp',
          content: 'Eine professionelle KRITIS Readiness Bewertung reduziert das Implementierungsrisiko um bis zu 70% und beschleunigt die Compliance-Erreichung erheblich. Investieren Sie in gründliche Vorbereitung für nachhaltigen Erfolg.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in KRITIS-Verordnung und BSI-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Assessment-Methoden für kritische Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenübergreifende Erfahrung mit verschiedenen KRITIS-Sektoren'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von Strategie bis operative Umsetzung'
            }
          ]
        },
        additionalInfo: 'Über 90% unserer Kunden erreichen KRITIS-Compliance durch unsere strukturierte Readiness-Bewertung schneller und kostengünstiger als ohne professionelle Unterstützung.',
        serviceDescription: 'Unsere KRITIS Readiness Services umfassen alle Aspekte der Compliance-Vorbereitung. Von der initialen Bewertung über detaillierte Analysen bis zur strategischen Planung bieten wir Ihnen vollumfängliche Unterstützung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Umfassende Schwachstellenanalyse und Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Detaillierte Gap-Analyse für Organisation und Technik'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Strategische Notfallkonzepte und Ressourcenplanung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Compliance-Roadmap und Implementierungsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Stakeholder-Management und Change-Vorbereitung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verwenden einen strukturierten und bewährten Ansatz für KRITIS Readiness Assessments, der alle relevanten Bereiche systematisch abdeckt und konkrete Handlungsempfehlungen liefert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Ist-Analyse Ihrer kritischen Infrastrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Systematische Bewertung von Schwachstellen und Risiken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Detaillierte Gap-Analyse für alle Compliance-Bereiche'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung priorisierter Maßnahmen- und Umsetzungspläne'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Strategische Roadmap-Erstellung für nachhaltige Compliance'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'Wasserversorgungsunternehmen',
        name: 'Dipl.-Ing. Sandra Mueller',
        position: 'Leiterin IT-Sicherheit',
        quote: 'Das KRITIS Readiness Assessment von ADVISORI hat uns einen klaren Überblick über unseren Compliance-Status verschafft. Die systematische Herangehensweise und die konkreten Handlungsempfehlungen haben uns geholfen, unsere KRITIS-Compliance-Strategie zu fokussieren und Prioritäten richtig zu setzen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Schwachstellenanalyse & Risikobewertung',
          description: 'Systematische Identifikation und Bewertung von Schwachstellen in Ihren kritischen Infrastrukturen mit umfassender Risikoanalyse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Technische Schwachstellenanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Organisatorische Risikobewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Bedrohungsanalyse und Szenario-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Priorisierte Risikomatrix'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Gap-Analyse Organisation & Technik',
          description: 'Umfassende Bewertung der Lücken zwischen Ihrem aktuellen Status und den KRITIS-Anforderungen in organisatorischen und technischen Bereichen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Organisatorische Strukturanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Technische Systemanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Compliance-Gap-Identifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Maßnahmenempfehlungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Notfallkonzepte & Ressourcenplanung',
          description: 'Entwicklung umfassender Notfallkonzepte und strategischer Ressourcenplanung für kritische Szenarien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Business Continuity Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Incident Response Konzepte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Ressourcenbedarfsanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Eskalations- und Kommunikationspläne'
            }
          ]
        }
      ],
      faq: []
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kritisReadinessData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KRITIS Readiness page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
