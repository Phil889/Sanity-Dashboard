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
    console.log('Creating Gefahren durch KI page...')

    const gefahrenDurchKiData = {
      _type: 'servicePage',
      _id: 'gefahren-durch-ki',
      title: 'Gefahren durch KI',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/gefahren-durch-ki'
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
        title: 'Gefahren durch KI - AI Risk Management | ADVISORI',
        description: 'Professionelle Beratung zu KI-Risiken und Gefahren. DSGVO-konforme Lösungen für AI Security, Adversarial Attacks, Data Poisoning und umfassende KI-Risikominimierung.',
        keywords: 'KI Gefahren, AI Risiken, Adversarial Attacks, Data Poisoning, KI Sicherheit, AI Security, DSGVO KI, KI Compliance, AI Risk Management'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Gefahren durch KI - AI Risk Management'
        },
        tagline: 'Proaktive KI-Risikominimierung für sichere AI-Adoption',
        heading: 'Gefahren durch KI',
        description: 'Künstliche Intelligenz birgt erhebliche Risiken für Unternehmen - von Adversarial Attacks über Data Poisoning bis hin zu Datenschutzverletzungen. ADVISORI identifiziert, bewertet und minimiert KI-Gefahren mit unserem Safety-First-Ansatz für verantwortungsvolle AI-Implementierung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende KI-Risikoanalyse und Bedrohungsmodellierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Schutz vor Adversarial Attacks und Model Poisoning'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'DSGVO-konforme AI Security und Datenschutzmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Proaktive Governance für sichere KI-Systeme'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Gefahren durch KI',
        description: 'Die rasante Entwicklung der Künstlichen Intelligenz bringt nicht nur Chancen, sondern auch erhebliche Risiken mit sich. Von gezielten Adversarial Attacks über Data Poisoning bis hin zu unbeabsichtigten Datenschutzverletzungen - KI-Systeme können zur Zielscheibe für Angreifer werden oder selbst Sicherheitslücken schaffen. ADVISORI hilft Ihnen dabei, diese Gefahren zu verstehen, zu bewerten und effektiv zu minimieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Identifikation und Bewertung spezifischer KI-Bedrohungen und Angriffsvektoren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung robuster Sicherheitsmaßnahmen gegen Adversarial Attacks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Schutz vor Data Poisoning und Model Manipulation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'DSGVO-konforme Datenschutzmaßnahmen für KI-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Incident Response für AI Security'
          }
        ],
        alert: {
          title: 'Sicherheitshinweis',
          content: 'KI-Systeme sind nur so sicher wie ihre schwächste Komponente. Eine proaktive Sicherheitsstrategie, die alle Aspekte von Datenqualität über Modellrobustheit bis hin zu Deployment-Sicherheit abdeckt, ist essentiell für den sicheren Einsatz von Künstlicher Intelligenz.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Expertise in KI-Sicherheit und Threat Modeling'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfassende Erfahrung mit Adversarial ML und Robustness Testing'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'DSGVO-konforme AI Security Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Proaktive Incident Response und Continuous Monitoring'
            }
          ]
        },
        additionalInfo: 'Unternehmen, die KI-Risiken proaktiv managen, reduzieren ihre Sicherheitsvorfälle erheblich und schaffen Vertrauen bei Kunden und Stakeholdern. Investieren Sie in umfassende AI Security für nachhaltigen Geschäftserfolg!',
        serviceDescription: 'Wir bieten Ihnen ein vollständiges Spektrum an Dienstleistungen für die Identifikation, Bewertung und Minimierung von KI-Gefahren, von der initialen Risikoanalyse über die Implementierung von Schutzmaßnahmen bis hin zur kontinuierlichen Überwachung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'KI-Risikoanalyse und Threat Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Adversarial Attack Prevention'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Data Poisoning Protection'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'AI Security Governance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Continuous AI Monitoring'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz',
        description: 'Wir verfolgen einen systematischen, risikobasierten Ansatz zur Identifikation und Minimierung von KI-Gefahren, der technische Sicherheitsmaßnahmen mit organisatorischen Governance-Strukturen kombiniert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende KI-Risikoanalyse und Bedrohungsmodellierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Implementierung mehrschichtiger Sicherheitsarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung spezifischer Schutzmaßnahmen gegen identifizierte Bedrohungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung kontinuierlicher Überwachungs- und Response-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Regelmäßige Sicherheitsbewertungen und Anpassungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'KI-Sicherheit ist nicht nur eine technische Herausforderung, sondern ein strategischer Imperativ für jedes Unternehmen, das Künstliche Intelligenz einsetzen möchte. Unser proaktiver Ansatz zur Identifikation und Minimierung von KI-Gefahren ermöglicht es unseren Kunden, die Vorteile der AI-Technologie zu nutzen, ohne dabei unkalkulierbare Risiken einzugehen. Sicherheit und Innovation müssen Hand in Hand gehen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'KI-Risikoanalyse und Threat Assessment',
          description: 'Systematische Identifikation und Bewertung aller potentiellen Bedrohungen für Ihre KI-Systeme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Bedrohungsmodellierung für KI-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Analyse von Angriffsvektoren und Schwachstellen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risikobewertung und Priorisierung von Schutzmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung spezifischer Sicherheitsanforderungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Adversarial Attack Prevention',
          description: 'Schutz vor gezielten Angriffen auf KI-Modelle durch robuste Sicherheitsarchitekturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Implementierung adversarial robuster Modelle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Input Validation und Anomalie-Erkennung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Defensive Distillation und Model Hardening'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Robustness Testing'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Data Poisoning Protection',
          description: 'Sicherung der Datenintegrität und Schutz vor manipulierten Trainingsdaten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Datenvalidierung und Integritätsprüfungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Anomalie-Erkennung in Trainingsdaten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Sichere Datenquellen und Provenance Tracking'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Robust Training Techniques'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'AI Privacy und DSGVO Compliance',
          description: 'Gewährleistung des Datenschutzes und der DSGVO-Konformität in KI-Systemen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Privacy-by-Design für KI-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Differential Privacy Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Federated Learning für Datenschutz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'DSGVO-konforme Datenverarbeitung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'AI Security Governance',
          description: 'Etablierung umfassender Governance-Strukturen für sichere KI-Entwicklung und -Betrieb.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Entwicklung von AI Security Policies'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Sicherheitsrichtlinien für ML-Pipelines'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Incident Response Procedures'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Security Awareness Training'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Continuous AI Security Monitoring',
          description: 'Kontinuierliche Überwachung und Bewertung der Sicherheit Ihrer KI-Systeme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Real-time Security Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Automated Threat Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Performance und Security Metrics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Regelmäßige Security Assessments'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(gefahrenDurchKiData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Gefahren durch KI page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
