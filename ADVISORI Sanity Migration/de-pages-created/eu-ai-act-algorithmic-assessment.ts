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
    console.log('Creating EU AI Act Algorithmic Assessment page...')

    const euAiActAlgorithmicAssessmentData = {
      _type: 'servicePage',
      _id: 'eu-ai-act-algorithmic-assessment',
      title: 'EU AI Act Algorithmic Assessment',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eu-ai-act/eu-ai-act-ai-compliance-framework/eu-ai-act-algorithmic-assessment'
      },
      parent: {
        _type: 'reference',
        _ref: 'eu-ai-act-ai-compliance-framework'
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
        title: 'EU AI Act Algorithmic Assessment | ADVISORI',
        description: 'Professionelle Unterstützung bei der algorithmischen Bewertung und Compliance-Bewertung für den EU AI Act. Sichern Sie die rechtskonforme Entwicklung und den Einsatz von KI-Systemen.',
        keywords: 'EU AI Act, Algorithmic Assessment, KI-Bewertung, Algorithmus-Audit, AI Compliance, Künstliche Intelligenz Regulierung, Risikoanalyse, KI-Systeme'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EU AI Act Algorithmic Assessment'
        },
        tagline: 'Expertenlösungen für algorithmische Bewertung und KI-Compliance',
        heading: 'EU AI Act Algorithmic Assessment',
        description: 'Die algorithmische Bewertung ist ein zentraler Baustein der EU AI Act Compliance. Wir unterstützen Sie bei der systematischen Analyse, Bewertung und Dokumentation Ihrer KI-Systeme zur Erfüllung der regulatorischen Anforderungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Risikobewertung und Klassifizierung von KI-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Umfassende Algorithmus-Auditierung und Transparenz-Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Präzise Compliance-Bewertung nach EU AI Act Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strategische Handlungsempfehlungen für rechtskonforme KI-Entwicklung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EU AI Act Algorithmic Assessment',
        description: 'Das Algorithmic Assessment ist ein kritischer Prozess zur Bewertung von KI-Systemen im Rahmen des EU AI Acts. Diese umfassende Analyse umfasst die technische Bewertung, Risikoeinstufung, Bias-Erkennung und Compliance-Validierung. Wir unterstützen Sie bei der strukturierten Durchführung algorithmischer Bewertungen, die sowohl regulatorische Anforderungen erfüllen als auch die Qualität und Vertrauenswürdigkeit Ihrer KI-Systeme erhöhen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Technische Analyse der Algorithmusarchitektur und Entscheidungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Systematische Risikobewertung und Kategorisierung nach EU AI Act Klassifikation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Bias-Detection und Fairness-Analyse für diskriminierungsfreie KI-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Transparenz- und Erklärbarkeits-Assessment für Nachvollziehbarkeit'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Compliance-Dokumentation und Audit-Trail-Erstellung für regulatorische Nachweise'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Ein systematisches Algorithmic Assessment geht über die reine Compliance hinaus und kann die Qualität, Verlässlichkeit und Marktakzeptanz Ihrer KI-Systeme erheblich verbessern, während es gleichzeitig rechtliche Risiken minimiert.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in KI-Technologie und EU AI Act Compliance-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Methodische Bewertungsframeworks für verschiedene KI-Systemtypen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von technischer Analyse bis zur rechtlichen Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Praxiserfahrung in der Implementierung von KI-Governance und Algorithmus-Audits'
            }
          ]
        },
        additionalInfo: 'Algorithmic Assessment ist nicht nur eine regulatorische Notwendigkeit, sondern auch ein strategisches Instrument zur Qualitätssicherung und Risikominimierung bei KI-Systemen. Eine professionelle Bewertung kann entscheidend für die Marktfähigkeit und Akzeptanz Ihrer KI-Lösungen sein.',
        serviceDescription: 'Wir bieten umfassende Dienstleistungen für die algorithmische Bewertung von KI-Systemen im Kontext des EU AI Acts. Unser Ansatz kombiniert technische Expertise, rechtliche Compliance und strategische Beratung für eine ganzheitliche Assessment-Lösung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strukturierte Algorithmus-Analyse und technische Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'EU AI Act Compliance-Assessment und Risikokategorisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Bias-Detection und Fairness-Evaluierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Transparenz- und Erklärbarkeits-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Umfassende Dokumentation und Audit-Trail-Erstellung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam einen strukturierten Ansatz zur umfassenden algorithmischen Bewertung Ihrer KI-Systeme im Einklang mit EU AI Act Anforderungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Systematische Inventarisierung und Klassifizierung aller KI-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Technische Tiefenanalyse der Algorithmusarchitektur und Funktionsweise'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Risikobewertung und EU AI Act Compliance-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Bias-Testing und Fairness-Validierung mit standardisierten Methoden'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Umfassende Dokumentation und Handlungsempfehlungen für kontinuierliche Compliance'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Ein systematisches Algorithmic Assessment ist der Grundstein für vertrauenswürdige KI. Mit unserer Expertise helfen wir Unternehmen, nicht nur EU AI Act Compliance zu erreichen, sondern auch die Qualität und Verlässlichkeit ihrer KI-Systeme nachhaltig zu verbessern.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Technische Algorithmus-Analyse',
          description: 'Wir führen eine umfassende technische Bewertung Ihrer KI-Algorithmen durch, einschließlich Architektur, Datenflows und Entscheidungslogik.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse der Algorithmusarchitektur und Modellstruktur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung der Datenqualität und Trainingsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Performance-Evaluierung und Robustheitstests'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Identifikation von technischen Risiken und Schwachstellen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'EU AI Act Compliance-Bewertung',
          description: 'Wir bewerten Ihre KI-Systeme systematisch hinsichtlich der Erfüllung aller relevanten EU AI Act Anforderungen und erstellen detaillierte Compliance-Berichte.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Systematische Risikokategorisierung nach EU AI Act Klassifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Gap-Analyse zwischen aktueller Implementierung und regulatorischen Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Detaillierte Compliance-Roadmap mit priorisierten Handlungsempfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Audit-fähige Dokumentation für regulatorische Nachweise'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(euAiActAlgorithmicAssessmentData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EU AI Act Algorithmic Assessment page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
