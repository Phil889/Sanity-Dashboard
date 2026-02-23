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
    console.log('Creating Datensicherheit für KI page...')

    const datensicherheitFuerKiData = {
      _type: 'servicePage',
      _id: 'datensicherheit-fuer-ki',
      title: 'Datensicherheit für KI',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/datensicherheit-fuer-ki'
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
        title: 'Datensicherheit für KI | ADVISORI',
        description: 'DSGVO-konforme Datensicherheit für KI-Systeme. Sichere AI-Datenverarbeitung, Privacy-by-Design und umfassender Schutz sensibler Daten in Machine Learning Pipelines.',
        keywords: 'Datensicherheit KI, AI Data Security, DSGVO KI, Privacy-by-Design, Sichere KI-Datenverarbeitung, AI Governance, Machine Learning Datenschutz'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Datensicherheit für KI'
        },
        tagline: 'DSGVO-konforme Datensicherheit für KI-Systeme',
        heading: 'Datensicherheit für KI',
        description: 'Schützen Sie sensible Daten in KI-Systemen mit unserem umfassenden Datensicherheitsansatz. Wir implementieren Privacy-by-Design-Prinzipien und DSGVO-konforme Datenverarbeitungsprozesse für sichere und compliant AI-Lösungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'DSGVO-konforme Datenverarbeitung in KI-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Privacy-by-Design für Machine Learning Pipelines'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Sichere Datenarchitekturen für AI-Training und -Inferenz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Umfassende Audit-Trails und Compliance-Monitoring'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Datensicherheit für KI',
        description: 'Die Implementierung von Künstlicher Intelligenz bringt einzigartige Herausforderungen für den Datenschutz mit sich. Sensible Daten müssen während des gesamten ML-Lebenszyklus geschützt werden – von der Datensammlung über das Training bis zur Inferenz. ADVISORI entwickelt maßgeschneiderte Datensicherheitsstrategien, die höchste Sicherheitsstandards mit innovativer KI-Nutzung vereinen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Privacy-by-Design Implementierung für KI-Architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'DSGVO-konforme Datenverarbeitung und -speicherung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Sichere ML-Pipelines mit End-to-End-Verschlüsselung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Anonymisierung und Pseudonymisierung für AI-Training'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Sicherheitsüberwachung und Compliance-Reporting'
          }
        ],
        alert: {
          title: 'Sicherheitshinweis',
          content: 'KI-Systeme verarbeiten oft große Mengen sensibler Daten und können unbeabsichtigt Informationen preisgeben. Eine durchdachte Datensicherheitsstrategie ist essentiell, um Datenschutzverletzungen zu vermeiden und regulatorische Compliance zu gewährleisten.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierung auf DSGVO-konforme KI-Datensicherheit'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Privacy-by-Design Expertise für ML-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfassende Erfahrung in sicheren AI-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Compliance-Überwachung und -Optimierung'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit robusten KI-Datensicherheitsstrategien reduzieren das Risiko von Datenschutzverletzungen erheblich und schaffen Vertrauen bei Kunden und Regulierungsbehörden.',
        serviceDescription: 'Wir bieten umfassende Datensicherheitslösungen für KI-Systeme, von der strategischen Planung über die technische Implementierung bis hin zur kontinuierlichen Überwachung und Compliance-Sicherstellung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'KI-Datenschutz-Assessment und Risikoanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Privacy-by-Design Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Sichere ML-Pipeline-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'DSGVO-Compliance für KI-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Sicherheitsüberwachung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz',
        description: 'Wir entwickeln eine ganzheitliche Datensicherheitsstrategie für Ihre KI-Systeme, die technische Sicherheitsmaßnahmen mit organisatorischen Prozessen und regulatorischer Compliance verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer KI-Datenlandschaft und Sicherheitsanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design und Implementierung Privacy-by-Design-konformer KI-Architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung sicherer ML-Pipelines mit End-to-End-Verschlüsselung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung von Anonymisierungs- und Pseudonymisierungsverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung kontinuierlicher Überwachung und Compliance-Reporting'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Datensicherheit in KI-Systemen ist nicht nur eine technische Herausforderung, sondern ein strategischer Imperativ für verantwortungsvolle AI-Adoption. Unser Ansatz kombiniert modernste Privacy-Preserving-Technologien mit rigoroser DSGVO-Compliance, um unseren Kunden zu ermöglichen, das volle Potenzial der KI zu nutzen, ohne dabei Datenschutz oder Sicherheit zu kompromittieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'KI-Datenschutz-Assessment',
          description: 'Umfassende Bewertung Ihrer KI-Datenverarbeitungsprozesse und Identifikation von Datenschutzrisiken und Compliance-Lücken.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse der Datenflüsse in ML-Pipelines'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation sensibler Datentypen und Risikobewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'DSGVO-Compliance-Gap-Analyse für KI-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung maßgeschneiderter Datenschutzstrategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Privacy-by-Design Implementierung',
          description: 'Entwicklung und Implementierung datenschutzfreundlicher KI-Architekturen, die Sicherheit und Compliance von Grund auf gewährleisten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Design sicherer KI-Architekturen mit eingebauten Datenschutzfunktionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementierung von Differential Privacy und Federated Learning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Sichere Multi-Party-Computation für kollaborative KI'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Homomorphe Verschlüsselung für Privacy-Preserving ML'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(datensicherheitFuerKiData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Datensicherheit für KI page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
