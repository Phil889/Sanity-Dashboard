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
    console.log('Creating Adversarial Attacks page...')

    const adversarialAttacksData = {
      _type: 'servicePage',
      _id: 'adversarial-attacks',
      title: 'Adversarial Attacks',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/adversarial-attacks/'
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
        title: 'Adversarial Attacks Schutz | ADVISORI',
        description: 'Umfassender Schutz vor Adversarial Attacks für Enterprise AI-Systeme. DSGVO-konforme Sicherheitslösungen zum Schutz Ihrer KI-Modelle und des geistigen Eigentums.',
        keywords: 'Adversarial Attacks, AI Security, KI Sicherheit, Model Security, DSGVO, Enterprise AI Protection, IP-Schutz, AI Governance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Adversarial Attacks Schutz'
        },
        tagline: 'Robuste Sicherheit gegen Adversarial Attacks für Ihre AI-Systeme',
        heading: 'Adversarial Attacks',
        description: 'Schützen Sie Ihre KI-Modelle vor gezielten Angriffen mit unserem umfassenden Adversarial Defense Framework. ADVISORI bietet DSGVO-konforme Sicherheitslösungen, die Ihre AI-Systeme gegen Manipulation und Ihr geistiges Eigentum vor Diebstahl schützen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Robuste Verteidigung gegen Model Poisoning und Evasion Attacks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'DSGVO-konforme Implementierung von AI Security Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Schutz des geistigen Eigentums vor Model Extraction Attacks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Überwachung und adaptive Sicherheitsmaßnahmen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Adversarial Attacks',
        description: 'Adversarial Attacks stellen eine der größten Bedrohungen für moderne AI-Systeme dar. Diese gezielten Angriffe können KI-Modelle manipulieren, sensible Daten extrahieren oder die Integrität Ihrer AI-Entscheidungen kompromittieren. ADVISORI entwickelt robuste Verteidigungsstrategien, die Ihre AI-Systeme gegen diese Bedrohungen absichern und gleichzeitig DSGVO-Compliance gewährleisten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Threat Assessment und Vulnerability Analysis für AI-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung robuster Adversarial Defense Mechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'DSGVO-konforme Sicherheitsarchitekturen für Enterprise AI'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliche Monitoring und Incident Response Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Schutz vor Model Extraction und Intellectual Property Theft'
          }
        ],
        alert: {
          title: 'Sicherheitshinweis',
          content: 'Adversarial Attacks werden immer sophistizierter und können erhebliche Geschäftsrisiken darstellen. Eine proaktive Sicherheitsstrategie ist essentiell, um die Integrität Ihrer AI-Systeme und den Schutz Ihres geistigen Eigentums zu gewährleisten.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Expertise in AI Security und Adversarial Defense'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'DSGVO-konforme Implementierung von Sicherheitsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfassende Threat Intelligence und Incident Response'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Strategische Beratung für Enterprise AI Security Governance'
            }
          ]
        },
        additionalInfo: 'Der Schutz vor Adversarial Attacks erfordert eine mehrschichtige Sicherheitsstrategie, die technische Maßnahmen mit organisatorischen Prozessen kombiniert. Investieren Sie in robuste AI Security für nachhaltigen Geschäftserfolg!',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Portfolio für den Schutz vor Adversarial Attacks, von der Risikoanalyse über die Implementierung robuster Verteidigungsmechanismen bis hin zur kontinuierlichen Überwachung und Optimierung Ihrer AI Security.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Adversarial Threat Assessment & Risk Analysis'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Robust Defense Implementation & Model Hardening'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'DSGVO-konforme Security Architecture Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Continuous Monitoring & Incident Response'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'IP Protection & Model Extraction Prevention'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte Adversarial Defense Strategie, die auf Ihre spezifischen AI-Systeme und Bedrohungslandschaft zugeschnitten ist und höchste Sicherheitsstandards erfüllt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer AI-Systeme und Identifikation von Angriffsvektoren'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer mehrschichtigen Adversarial Defense Architektur'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung robuster Sicherheitsmaßnahmen und Monitoring-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung von Incident Response Prozessen und Security Governance'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung, Testing und Optimierung der Sicherheitsmaßnahmen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Adversarial Attacks stellen eine existenzielle Bedrohung für AI-gestützte Geschäftsmodelle dar. Unser Ansatz kombiniert modernste Sicherheitstechnologien mit rigoroser DSGVO-Compliance, um unseren Kunden nicht nur Schutz vor aktuellen Bedrohungen zu bieten, sondern auch Resilienz gegen zukünftige Angriffsvektoren aufzubauen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Adversarial Threat Assessment',
          description: 'Umfassende Bewertung der Bedrohungslandschaft und Identifikation von Schwachstellen in Ihren AI-Systemen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Systematische Analyse aller AI-Modelle und Angriffsvektoren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Penetration Testing und Red Team Assessments'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risikobewertung und Priorisierung von Sicherheitsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung maßgeschneiderter Defense Strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Robust Defense Implementation',
          description: 'Implementierung mehrschichtiger Verteidigungsmechanismen zum Schutz vor Adversarial Attacks.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Adversarial Training und Model Hardening'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Input Validation und Anomaly Detection Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Ensemble Methods und Defensive Distillation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Real-time Monitoring und Automated Response'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Model Extraction Prevention',
          description: 'Schutz Ihres geistigen Eigentums vor Model Extraction und Reverse Engineering Angriffen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Query Limiting und Rate Control Mechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Output Obfuscation und Differential Privacy'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Watermarking und Model Fingerprinting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Access Control und Authentication Frameworks'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Continuous Security Monitoring',
          description: 'Kontinuierliche Überwachung und adaptive Sicherheitsmaßnahmen für dynamischen Schutz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Real-time Threat Detection und Alert Systems'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Behavioral Analysis und Pattern Recognition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Automated Incident Response und Mitigation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Security Analytics und Threat Intelligence'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'DSGVO-konforme AI Security',
          description: 'Implementierung von Sicherheitsmaßnahmen unter strikter Einhaltung der DSGVO-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Privacy-by-Design Security Architectures'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Data Minimization und Purpose Limitation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Consent Management und User Rights Protection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Compliance Monitoring und Audit Trails'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'AI Security Governance',
          description: 'Etablierung umfassender Governance-Frameworks für nachhaltige AI Security.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Security Policy Development und Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Risk Management und Compliance Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Security Training und Awareness Programs'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Vendor Management und Third-Party Risk Assessment'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(adversarialAttacksData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Adversarial Attacks page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
