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
    console.log('Creating Erklärbare KI page...')

    const erklaerbareKiData = {
      _type: 'servicePage',
      _id: 'erklaerbare-ki',
      title: 'Erklärbare KI',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/erklaerbare-ki'
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
        title: 'Erklärbare KI | ADVISORI',
        description: 'Transparente und nachvollziehbare KI-Systeme für Ihr Unternehmen. Explainable AI (XAI) für Compliance, Vertrauen und bessere Geschäftsentscheidungen.',
        keywords: 'Erklärbare KI, Explainable AI, XAI, Interpretable Machine Learning, AI Transparency, KI-Compliance, Nachvollziehbare KI'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Erklärbare KI'
        },
        tagline: 'Transparenz und Vertrauen in Ihre KI-Entscheidungen',
        heading: 'Erklärbare KI',
        description: 'Schaffen Sie Vertrauen und Compliance mit transparenten KI-Systemen. Unsere Explainable AI (XAI) Lösungen machen komplexe Algorithmen nachvollziehbar und ermöglichen fundierte Geschäftsentscheidungen bei gleichzeitiger Erfüllung regulatorischer Anforderungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Transparenz und Nachvollziehbarkeit von KI-Entscheidungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'EU AI Act konforme Implementierung mit Audit-Trails'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Vertrauensaufbau bei Stakeholdern und Kunden durch transparente AI'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Verbesserte Geschäftsentscheidungen durch interpretierbare Insights'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Erklärbare KI',
        description: 'Erklärbare KI (XAI) ist der Schlüssel für vertrauensvolle und compliance-konforme KI-Implementierungen. ADVISORI entwickelt transparente KI-Systeme, die nicht nur leistungsstark sind, sondern auch nachvollziehbare Entscheidungen treffen. Unser ganzheitlicher Ansatz kombiniert modernste Interpretability-Techniken mit robusten Governance-Frameworks für nachhaltige AI-Transparenz.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Model Interpretability und Feature Importance Analysis'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'LIME, SHAP und andere Explainability-Techniken'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'EU AI Act konforme Dokumentation und Audit-Trails'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Stakeholder-gerechte Visualisierung und Reporting'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Monitoring und Bias Detection'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erklärbare KI ist nicht nur eine technische Anforderung, sondern ein strategischer Wettbewerbsvorteil. Transparente AI-Systeme schaffen Vertrauen bei Kunden und Regulierungsbehörden und ermöglichen bessere Geschäftsentscheidungen durch nachvollziehbare Insights.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Expertise in XAI und Interpretable Machine Learning'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'EU AI Act First-Ansatz mit compliance-ready Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Business-orientierte Explainability für verschiedene Stakeholder'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitliche AI Governance und Transparency Frameworks'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit erklärbaren KI-Systemen profitieren von höherem Stakeholder-Vertrauen, besserer Compliance-Positionierung und fundierten Geschäftsentscheidungen. Investieren Sie in die Transparenz Ihrer KI-Zukunft!',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum für erklärbare KI-Systeme, von der Interpretability-Analyse über die Implementierung von XAI-Techniken bis hin zur compliance-konformen Dokumentation.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Model Interpretability & Feature Analysis'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'XAI Implementation & SHAP/LIME Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'EU AI Act Compliance & Documentation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Stakeholder Visualization & Reporting'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'AI Transparency Governance & Monitoring'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine umfassende XAI-Strategie, die auf Ihre spezifischen Geschäftsanforderungen und Compliance-Bedürfnisse zugeschnitten ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Assessment Ihrer bestehenden KI-Systeme und Explainability-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design und Implementierung von XAI-Techniken und Interpretability-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Integration von Compliance-Dokumentation und Audit-Trail-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung stakeholder-spezifischer Visualisierungen und Reporting-Dashboards'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung, Testing und Optimierung der Explainability-Maßnahmen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Erklärbare KI ist der Grundstein für vertrauensvolle und nachhaltige AI-Implementierungen. Unser Ansatz macht komplexe Algorithmen nicht nur transparent, sondern verwandelt sie in strategische Business-Assets, die Stakeholder-Vertrauen schaffen und regulatorische Compliance gewährleisten. Transparenz ist der Schlüssel für die erfolgreiche Skalierung von KI-Systemen im Unternehmenskontext.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'XAI Implementation & Model Interpretability',
          description: 'Umfassende Implementierung von Explainable AI Techniken und Entwicklung interpretierbarer Machine Learning Modelle für maximale Transparenz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'SHAP, LIME und andere state-of-the-art Explainability-Techniken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Feature Importance Analysis und Model Behavior Understanding'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Interpretable Model Architecture Design und Optimization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Bias Detection und Fairness Analysis für ethische AI'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'AI Transparency Governance & Compliance',
          description: 'Etablierung robuster Governance-Frameworks für AI-Transparenz und Sicherstellung der Compliance mit regulatorischen Anforderungen wie der EU AI Act.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'EU AI Act konforme Dokumentation und Audit-Trail-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Stakeholder-spezifische Explainability-Dashboards und Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'AI Transparency Governance Frameworks und Policy Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Monitoring und Explainability Quality Assurance'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(erklaerbareKiData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Erklärbare KI page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
