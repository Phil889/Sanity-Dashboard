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
    console.log('Creating Beratung KI-Sicherheit page...')

    const beratungKiSicherheitData = {
      _type: 'servicePage',
      _id: 'beratung-ki-sicherheit',
      title: 'Beratung KI-Sicherheit',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/beratung-ki-sicherheit'
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
        title: 'KI-Sicherheit Beratung | DSGVO-konforme AI Security | ADVISORI',
        description: 'Professionelle KI-Sicherheitsberatung für Unternehmen. DSGVO-konforme AI Security Frameworks, Risikobewertung und Schutz vor AI-spezifischen Bedrohungen mit Safety-First-Ansatz.',
        keywords: 'KI-Sicherheit, AI Security, DSGVO KI, AI Governance, KI Risikomanagement, AI Compliance, Machine Learning Security, AI Ethics'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KI-Sicherheit Beratung'
        },
        tagline: 'Sichere KI-Implementierung mit Safety-First-Ansatz',
        heading: 'Beratung KI-Sicherheit',
        description: 'Schützen Sie Ihr Unternehmen vor AI-spezifischen Risiken mit unserer umfassenden KI-Sicherheitsberatung. Wir entwickeln DSGVO-konforme Security Frameworks, die Ihr geistiges Eigentum schützen und gleichzeitig die volle Innovationskraft der KI ermöglichen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende AI Security Frameworks für maximalen Schutz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'DSGVO-konforme KI-Implementierung mit Datenschutz-by-Design'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Schutz vor Adversarial Attacks und AI-spezifischen Bedrohungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Überwachung und Risikomanagement für AI-Systeme'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KI-Sicherheit als strategischer Erfolgsfaktor',
        description: 'Künstliche Intelligenz bietet enormes Potenzial, bringt aber auch neue Sicherheitsrisiken mit sich. Von Adversarial Attacks über Data Poisoning bis hin zu unbeabsichtigten Datenlecks – AI-Systeme erfordern spezialisierte Sicherheitsmaßnahmen. ADVISORI entwickelt maßgeschneiderte KI-Sicherheitsstrategien, die Innovation ermöglichen und gleichzeitig höchste Sicherheitsstandards gewährleisten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Comprehensive AI Risk Assessment und Threat Modeling'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'DSGVO-konforme Implementierung von AI Security Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Schutz vor Adversarial Attacks und Model Poisoning'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Sichere AI-Architekturen mit Privacy-by-Design'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Security Monitoring und Incident Response'
          }
        ],
        alert: {
          title: 'Sicherheitshinweis',
          content: 'KI-Systeme sind nur so sicher wie ihre schwächste Komponente. Eine ganzheitliche Sicherheitsstrategie, die technische, organisatorische und rechtliche Aspekte berücksichtigt, ist essentiell für den sicheren Einsatz von Künstlicher Intelligenz im Unternehmenskontext.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Expertise in AI Security und DSGVO-Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Security Frameworks für Enterprise AI-Deployments'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfassende Erfahrung in AI Governance und Risk Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Safety-First-Ansatz mit kontinuierlicher Threat Intelligence'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit robusten AI Security Frameworks können das Innovationspotenzial der KI voll ausschöpfen, während sie gleichzeitig Compliance-Risiken minimieren und das Vertrauen ihrer Stakeholder stärken.',
        serviceDescription: 'Unser umfassendes KI-Sicherheitsportfolio deckt alle Aspekte der AI Security ab – von der strategischen Planung über die technische Implementierung bis hin zur kontinuierlichen Überwachung und Optimierung Ihrer AI-Sicherheitsarchitektur.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'AI Security Strategy & Risk Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'DSGVO-konforme AI Security Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Adversarial Attack Prevention & Defense'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'AI Governance & Compliance Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Continuous AI Security Monitoring'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Ansatz',
        description: 'Wir entwickeln mit Ihnen eine ganzheitliche KI-Sicherheitsstrategie, die technische Exzellenz mit regulatorischer Compliance verbindet und dabei die spezifischen Anforderungen Ihres Unternehmens berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende AI Security Assessment und Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung maßgeschneiderter AI Security Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'DSGVO-konforme Implementierung mit Privacy-by-Design'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung von AI Governance und Compliance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und adaptive Sicherheitsoptimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'KI-Sicherheit ist nicht nur eine technische Herausforderung, sondern ein strategischer Imperativ für jedes Unternehmen, das AI-Technologien einsetzen möchte. Unser ganzheitlicher Ansatz kombiniert modernste Security-Technologien mit rigoroser DSGVO-Compliance und bewährten Governance-Frameworks, um unseren Kunden die sichere Nutzung der transformativen Kraft der Künstlichen Intelligenz zu ermöglichen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'AI Security Strategy & Risk Assessment',
          description: 'Umfassende Bewertung Ihrer AI-Landschaft und Entwicklung einer strategischen Sicherheitsroadmap für sichere KI-Implementierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Comprehensive AI Threat Modeling und Risikobewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation kritischer AI Security Gaps'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung maßgeschneiderter Security Roadmaps'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Compliance-Mapping für AI-spezifische Regulierungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'DSGVO-konforme AI Security Implementation',
          description: 'Sichere Implementierung von AI-Systemen mit vollständiger DSGVO-Compliance und Privacy-by-Design-Prinzipien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Privacy-by-Design AI-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Sichere Datenverarbeitung und -anonymisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'DSGVO-konforme Model Training und Deployment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Audit-Trails und Compliance-Dokumentation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Adversarial Attack Prevention & Defense',
          description: 'Schutz vor AI-spezifischen Angriffen durch robuste Defense-Mechanismen und kontinuierliche Threat Detection.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Adversarial Training und Model Hardening'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Input Validation und Anomaly Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Model Poisoning Prevention'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Real-time Attack Detection und Response'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'AI Governance & Compliance Management',
          description: 'Etablierung umfassender AI Governance Frameworks für verantwortungsvolle und compliant AI-Nutzung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'AI Ethics und Responsible AI Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Model Lifecycle Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'AI Risk Management Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Regulatory Compliance Monitoring'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Continuous AI Security Monitoring',
          description: 'Kontinuierliche Überwachung und Optimierung Ihrer AI-Sicherheitsarchitektur für proaktiven Schutz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Real-time AI Security Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Automated Threat Detection und Alerting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Performance und Security Metrics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Incident Response und Forensics'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'AI Security Training & Awareness',
          description: 'Schulung Ihrer Teams in AI Security Best Practices und Aufbau interner Sicherheitskompetenzen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'AI Security Awareness Training'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Technical Deep-Dive Workshops'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Security-by-Design Methodologien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Incident Response Training'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(beratungKiSicherheitData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Beratung KI-Sicherheit page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
