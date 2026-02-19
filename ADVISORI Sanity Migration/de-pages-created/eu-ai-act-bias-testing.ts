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
    console.log('Creating EU AI Act Bias Testing page...')

    const euAiActBiasTestingData = {
      _type: 'servicePage',
      _id: 'eu-ai-act-bias-testing',
      title: 'EU AI Act Bias Testing',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eu-ai-act/eu-ai-act-ai-compliance-framework/eu-ai-act-bias-testing'
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
        title: 'EU AI Act Bias Testing | ADVISORI',
        description: 'Professionelle Bias-Testing-Services für KI-Systeme im Rahmen des EU AI Acts. Systematische Erkennung und Behebung von Algorithmus-Bias für faire und diskriminierungsfreie KI-Anwendungen.',
        keywords: 'EU AI Act, Bias Testing, Algorithm Bias, KI-Fairness, Diskriminierung KI, AI Bias Detection, Algorithmus-Fairness, KI-Ethik, Bias Mitigation'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EU AI Act Bias Testing'
        },
        tagline: 'Fairness und Diskriminierungsfreiheit in KI-Systemen sicherstellen',
        heading: 'EU AI Act Bias Testing',
        description: 'Bias Testing ist ein kritischer Bestandteil der EU AI Act Compliance. Wir unterstützen Sie bei der systematischen Identifikation, Bewertung und Behebung von Algorithmus-Bias zur Gewährleistung fairer und ethischer KI-Systeme.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Bias-Detection mit standardisierten Testing-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Umfassende Fairness-Bewertung für verschiedene Bevölkerungsgruppen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Präzise Bias-Mitigation-Strategien und Implementierungsunterstützung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Monitoring-Systeme für dauerhafte Fairness-Sicherung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EU AI Act Bias Testing',
        description: 'Bias Testing ist ein fundamentaler Aspekt der EU AI Act Compliance und ethischen KI-Entwicklung. Systematische Bias-Erkennung und -Behebung gewährleistet nicht nur regulatorische Konformität, sondern auch gesellschaftliche Akzeptanz und Vertrauen in KI-Systeme. Wir bieten umfassende Bias-Testing-Services, die technische Exzellenz mit ethischen Standards vereinen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Bias-Detection mit multi-dimensionalen Testing-Ansätzen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Umfassende Fairness-Metriken und statistische Bias-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Intersektionale Analyse für komplexe Diskriminierungsmuster'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Bias-Mitigation-Strategien für verschiedene KI-Anwendungsdomänen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Monitoring-Systeme für dauerhafte Fairness'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Bias Testing sollte nicht erst am Ende des Entwicklungsprozesses erfolgen, sondern von Beginn an in den gesamten KI-Lebenszyklus integriert werden - von der Datensammlung über das Training bis hin zum produktiven Einsatz.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in statistischen Bias-Detection-Methoden und Fairness-Algorithmen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Branchenübergreifende Erfahrung in der Implementierung von Bias-Testing-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von technischer Analyse bis zur ethischen Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Praxiserprobte Bias-Mitigation-Strategien für verschiedene KI-Anwendungsbereiche'
            }
          ]
        },
        additionalInfo: 'Bias Testing ist nicht nur eine Compliance-Anforderung, sondern ein strategisches Instrument zur Schaffung vertrauenswürdiger KI. Systematische Fairness-Bewertung kann die Marktakzeptanz und gesellschaftliche Legitimität Ihrer KI-Systeme erheblich verbessern.',
        serviceDescription: 'Wir bieten umfassende Bias-Testing-Services für KI-Systeme im Kontext des EU AI Acts. Unser Ansatz kombiniert technische Exzellenz, statistische Rigorosität und ethische Verantwortung für ganzheitliche Fairness-Lösungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Multi-dimensionale Bias-Detection und Fairness-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Statistische Bias-Analyse und Diskriminierungsmuster-Erkennung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Bias-Mitigation-Strategien und Implementierungsunterstützung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Kontinuierliche Fairness-Monitoring und Alarm-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Umfassende Dokumentation und Compliance-Nachweise'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam einen strukturierten Ansatz zum systematischen Bias Testing Ihrer KI-Systeme im Einklang mit EU AI Act Anforderungen und ethischen Standards.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Bias-Risikoanalyse und Identifikation kritischer Fairness-Dimensionen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Implementierung standardisierter Bias-Testing-Frameworks und Fairness-Metriken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Statistische Analyse und intersektionale Bias-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung und Implementierung gezielter Bias-Mitigation-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung kontinuierlicher Monitoring-Systeme für dauerhafte Fairness-Sicherung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Fairness in KI-Systemen ist nicht nur eine ethische Verpflichtung, sondern ein Geschäftsimperativ. Mit unserem systematischen Bias-Testing-Ansatz helfen wir Unternehmen, KI-Systeme zu entwickeln, die sowohl technisch exzellent als auch gesellschaftlich verantwortlich sind.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Systematische Bias-Detection',
          description: 'Wir führen umfassende Bias-Analysen durch, um versteckte Diskriminierungsmuster in Ihren KI-Systemen zu identifizieren und zu quantifizieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Multi-dimensionale Fairness-Metriken und statistische Bias-Tests'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Intersektionale Analyse komplexer Diskriminierungsmuster'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Automatisierte Bias-Detection-Tools und Dashboard-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Umfassende Dokumentation und Visualisierung von Bias-Befunden'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Bias-Mitigation und Fairness-Optimierung',
          description: 'Wir entwickeln und implementieren maßgeschneiderte Strategien zur Behebung identifizierter Bias-Probleme und zur Optimierung der Fairness Ihrer KI-Systeme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Algorithmus-Level Bias-Mitigation-Techniken und Fairness-Constraints'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Datenbasierte Fairness-Optimierung und Balancing-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Kontinuierliche Fairness-Monitoring und Drift-Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Performance-Fairness Trade-off Optimierung und Business-Integration'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(euAiActBiasTestingData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EU AI Act Bias Testing page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
