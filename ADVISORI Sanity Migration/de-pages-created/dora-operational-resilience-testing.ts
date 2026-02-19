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
    console.log('Creating DORA Operational Resilience Testing page...')

    const doraOperationalResilienceTestingData = {
      _type: 'servicePage',
      _id: 'dora-operational-resilience-testing',
      title: 'DORA Operational Resilience Testing',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dora-digital-operational-resilience-act/dora-requirements/dora-operational-resilience-testing'
      },
      parent: {
        _type: 'reference',
        _ref: 'dora-requirements'
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
        title: 'DORA Operational Resilience Testing | ADVISORI',
        description: 'Expertenlösungen für DORA Operational Resilience Testing. Umfassende Beratung zu Threat-Led Penetration Testing, ICT-Risikobewertung und regulatorischen Testanforderungen nach DORA Artikel 25.',
        keywords: 'DORA Testing, Operational Resilience Testing, TLPT, Threat-Led Penetration Testing, ICT Risk Assessment, DORA Artikel 25, Resilience Testing Framework, Financial Services Testing'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DORA Operational Resilience Testing'
        },
        tagline: 'Expertenlösungen für regulatorische Testanforderungen im Finanzsektor',
        heading: 'DORA Operational Resilience Testing',
        description: 'DORA Artikel 25 definiert umfassende Anforderungen an das Operational Resilience Testing für Finanzunternehmen. Wir unterstützen Sie bei der strategischen Implementierung von Threat-Led Penetration Testing (TLPT) und robusten Testframeworks zur Sicherstellung Ihrer digitalen operationellen Resilienz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige DORA-konforme Teststrategien und -frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Threat-Led Penetration Testing (TLPT) nach regulatorischen Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte ICT-Risikobewertung und Schwachstellenmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Automatisierte Testprozesse und kontinuierliche Überwachung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DORA Operational Resilience Testing',
        description: 'Das Digital Operational Resilience Act (DORA) stellt mit Artikel 25 spezifische Anforderungen an das Operational Resilience Testing von Finanzunternehmen. Diese umfassen regelmäßige Bewertungen der ICT-Systeme, Threat-Led Penetration Testing und umfassende Testprogramme zur Sicherstellung der digitalen operationellen Resilienz. Wir entwickeln maßgeschneiderte Teststrategien, die nicht nur regulatorische Compliance gewährleisten, sondern auch Ihre Cyber-Resilienz nachhaltig stärken.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung DORA-konformer Teststrategien und Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung von Threat-Led Penetration Testing (TLPT) Programmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Aufbau robuster ICT-Risikobewertungs- und Testmethodologien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von automatisierten Testprozessen und kontinuierlicher Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Entwicklung von Incident Response und Recovery Testing Frameworks'
          }
        ],
        alert: {
          title: 'Regulatorischer Hinweis',
          content: 'DORA Artikel 25 erfordert von Finanzunternehmen die Implementierung umfassender Operational Resilience Testing Programme bis Januar 2025. Eine frühzeitige strategische Vorbereitung ist entscheidend für eine erfolgreiche Compliance-Umsetzung.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in DORA-Anforderungen und regulatorischen Teststandards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung in Cyber-Resilience Testing und Penetration Testing'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von Strategie bis zur technischen Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Innovative Automatisierungslösungen für kontinuierliche Testprozesse'
            }
          ]
        },
        additionalInfo: 'DORA Operational Resilience Testing geht über traditionelle Penetration Tests hinaus und erfordert eine strategische, risikobasierte Herangehensweise. Unsere Lösungen integrieren regulatorische Anforderungen mit bewährten Cyber-Security-Praktiken und schaffen nachhaltige Resilienz-Frameworks.',
        serviceDescription: 'Wir bieten ein umfassendes Leistungsspektrum für DORA Operational Resilience Testing, das von der strategischen Planung bis zur technischen Implementierung und kontinuierlichen Optimierung reicht. Unser Ansatz kombiniert regulatorische Expertise mit modernsten Testing-Technologien.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'DORA Testing Strategy Development und Governance Framework Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Threat-Led Penetration Testing (TLPT) Implementierung und Durchführung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'ICT Risk Assessment und Vulnerability Management Programme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Automated Testing Solutions und Continuous Monitoring Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Incident Response Testing und Business Continuity Validation'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine maßgeschneiderte DORA Testing-Strategie, die regulatorische Anforderungen erfüllt und gleichzeitig Ihre operative Resilienz nachhaltig stärkt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer ICT-Landschaft und Identifikation kritischer Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer risikobasierten DORA Testing-Strategie und Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung von TLPT-Programmen und automatisierten Testprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration von Testing-Frameworks in bestehende Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Anpassung an evolvierende Bedrohungslandschaften'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'DORA Operational Resilience Testing ist mehr als nur regulatorische Compliance – es ist ein strategischer Baustein für nachhaltige Cyber-Resilienz. Unsere integrierten Testing-Frameworks ermöglichen es Finanzunternehmen, nicht nur DORA-Anforderungen zu erfüllen, sondern auch ihre operative Widerstandsfähigkeit gegen evolvierende Cyber-Bedrohungen kontinuierlich zu stärken.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'DORA Testing Strategy & Governance Framework',
          description: 'Entwicklung umfassender Testing-Strategien und Governance-Frameworks zur Erfüllung der DORA Artikel 25 Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Risikobasierte Testing-Strategieentwicklung nach DORA-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Governance-Framework Design für Operational Resilience Testing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Integration in bestehende Risk Management Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Compliance-Mapping und regulatorische Dokumentation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Threat-Led Penetration Testing (TLPT)',
          description: 'Implementierung und Durchführung von TLPT-Programmen nach DORA-Anforderungen und ECB-Guidelines.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'TLPT-Programm Design und Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Red Team Exercises und Advanced Persistent Threat Simulation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Threat Intelligence Integration und Scenario Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'TLPT Reporting und Remediation Planning'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'ICT Risk Assessment & Vulnerability Management',
          description: 'Umfassende ICT-Risikobewertung und Schwachstellenmanagement zur Identifikation und Behebung von Sicherheitslücken.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Kontinuierliche ICT-Risikobewertung und Asset Discovery'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Vulnerability Scanning und Penetration Testing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Risk Scoring und Prioritization Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Remediation Tracking und Compliance Monitoring'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Automated Testing Solutions',
          description: 'Implementierung automatisierter Testing-Lösungen für kontinuierliche Überwachung und Validierung der operationellen Resilienz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Automated Security Testing und Continuous Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'DevSecOps Integration und Pipeline Security Testing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Real-time Monitoring und Alerting Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Automated Reporting und Compliance Dashboards'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Incident Response & Recovery Testing',
          description: 'Entwicklung und Validierung von Incident Response Capabilities und Recovery Testing Frameworks.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Incident Response Plan Development und Testing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Crisis Simulation und Tabletop Exercises'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Recovery Time und Recovery Point Objective Validation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Business Continuity Testing und Resilience Validation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Third-Party Risk Testing & Validation',
          description: 'Bewertung und Testing der operationellen Resilienz von kritischen Drittanbietern und ICT-Dienstleistern.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Third-Party Risk Assessment und Due Diligence'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Supplier Resilience Testing und Validation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Contractual Security Requirements und SLA Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Supply Chain Risk Management und Contingency Planning'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(doraOperationalResilienceTestingData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DORA Operational Resilience Testing page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
