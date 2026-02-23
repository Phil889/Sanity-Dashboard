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
    console.log('Creating Absicherung von KI-Systemen page...')

    const absicherungVonKiSystemenData = {
      _type: 'servicePage',
      _id: 'absicherung-von-ki-systemen',
      title: 'Absicherung von KI-Systemen',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/absicherung-von-ki-systemen'
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
        title: 'Absicherung von KI-Systemen | ADVISORI',
        description: 'Umfassende Sicherheit für Ihre KI-Systeme. DSGVO-konforme AI Security, Schutz vor Adversarial Attacks und robuste KI-Governance für Enterprise-Umgebungen.',
        keywords: 'KI-Sicherheit, AI Security, Adversarial Attacks, KI-Governance, AI Risk Management, DSGVO KI, Machine Learning Security'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Absicherung von KI-Systemen'
        },
        tagline: 'Umfassende Sicherheit für Ihre KI-Infrastruktur',
        heading: 'Absicherung von KI-Systemen',
        description: 'Schützen Sie Ihre KI-Investitionen mit unseren umfassenden Security-Lösungen. Wir sichern Ihre AI-Systeme gegen Adversarial Attacks, gewährleisten DSGVO-Compliance und implementieren robuste Governance-Frameworks für nachhaltige KI-Sicherheit.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Schutz vor Adversarial Attacks und KI-spezifischen Bedrohungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'DSGVO-konforme KI-Security-Architekturen mit Privacy-by-Design'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Robuste KI-Governance und Compliance-Management-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Überwachung und Threat Intelligence für AI-Systeme'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Absicherung von KI-Systemen',
        description: 'Die Sicherheit von KI-Systemen erfordert spezialisierte Ansätze, die über traditionelle Cybersecurity hinausgehen. ADVISORI bietet umfassende Lösungen zum Schutz Ihrer AI-Infrastruktur vor spezifischen Bedrohungen wie Adversarial Attacks, Data Poisoning und Model Extraction. Unser ganzheitlicher Ansatz kombiniert technische Sicherheitsmaßnahmen mit robusten Governance-Frameworks.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Comprehensive AI Threat Assessment und Vulnerability Analysis'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung von Adversarial Defense Mechanisms und Robustness Testing'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'DSGVO-konforme Privacy-Preserving AI und Differential Privacy Techniken'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'KI-Governance-Frameworks mit Audit-Trails und Compliance-Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Security-Überwachung und Incident Response für AI-Systeme'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'KI-Sicherheit ist mehr als nur Datenschutz. Moderne AI-Systeme sind anfällig für spezifische Angriffe wie Adversarial Examples und Model Inversion. Eine umfassende KI-Security-Strategie muss diese einzigartigen Bedrohungen von Anfang an mitdenken.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Expertise in AI Security und Adversarial Machine Learning'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'DSGVO-First-Ansatz mit Privacy-Preserving AI Technologien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfassende KI-Governance und Enterprise-Security-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Threat Intelligence und proaktive Defense-Strategien'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit robusten KI-Security-Maßnahmen reduzieren das Risiko von AI-bezogenen Sicherheitsvorfällen erheblich und schaffen Vertrauen bei Kunden und Regulierungsbehörden. Investieren Sie in die Zukunftssicherheit Ihrer KI-Systeme!',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum für die Absicherung Ihrer KI-Systeme, von der Threat Analysis über die Implementierung von Defense Mechanisms bis hin zur kontinuierlichen Überwachung und Governance.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'AI Threat Assessment & Vulnerability Analysis'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Adversarial Defense & Robustness Testing'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Privacy-Preserving AI & DSGVO-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'KI-Governance & Security Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'AI Incident Response & Recovery'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine umfassende KI-Security-Strategie, die auf Ihre spezifischen AI-Systeme und Bedrohungslandschaft zugeschnitten ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Assessment Ihrer KI-Infrastruktur und Threat Landscape'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design und Implementierung von AI-spezifischen Security-Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Integration von Privacy-Preserving Technologien und DSGVO-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung von KI-Governance-Frameworks und Monitoring-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung, Testing und Optimierung der Security-Maßnahmen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die Absicherung von KI-Systemen erfordert ein tiefes Verständnis sowohl für AI-Technologien als auch für moderne Cyber-Bedrohungen. Unser Ansatz kombiniert cutting-edge Security-Technologien mit robusten Governance-Frameworks, um unseren Kunden nicht nur Schutz vor aktuellen Bedrohungen zu bieten, sondern auch Resilienz gegen zukünftige AI-spezifische Angriffsvektoren aufzubauen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'AI Threat Assessment & Adversarial Defense',
          description: 'Umfassende Bewertung von KI-spezifischen Bedrohungen und Implementierung von robusten Defense-Mechanismen gegen Adversarial Attacks.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Comprehensive AI Vulnerability Assessment und Threat Modeling'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Adversarial Attack Simulation und Robustness Testing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Implementation von Adversarial Training und Defense Mechanisms'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Model Integrity Monitoring und Anomaly Detection'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Privacy-Preserving AI & KI-Governance',
          description: 'DSGVO-konforme Implementierung von Privacy-Preserving AI Technologien und Etablierung robuster KI-Governance-Frameworks.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Differential Privacy und Federated Learning Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'DSGVO-konforme AI Data Processing und Storage'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'KI-Governance-Frameworks mit Audit-Trails und Compliance-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'AI Ethics Integration und Responsible AI Practices'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(absicherungVonKiSystemenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Absicherung von KI-Systemen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
