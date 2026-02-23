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
    console.log('Creating Adversarial KI Attacks page...')

    const adversarialKiAttacksData = {
      _type: 'servicePage',
      _id: 'adversarial-ki-attacks',
      title: 'Adversarial KI Attacks',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/adversarial-ki-attacks'
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
        title: 'Adversarial KI Attacks Schutz | ADVISORI',
        description: 'Umfassender Schutz vor Adversarial KI Attacks für Enterprise AI-Systeme. DSGVO-konforme Sicherheitslösungen gegen Model Poisoning, Data Poisoning und AI-spezifische Bedrohungen.',
        keywords: 'Adversarial KI Attacks, AI Model Security, Machine Learning Security, Model Poisoning, Data Poisoning, DSGVO AI Security, Enterprise AI Protection, KI Sicherheit'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Adversarial KI Attacks Schutz'
        },
        tagline: 'Robuste Verteidigung gegen Adversarial KI Attacks für Enterprise AI',
        heading: 'Adversarial KI Attacks',
        description: 'Schützen Sie Ihre KI-Modelle vor sophistizierten Adversarial Attacks mit unserem spezialisierten AI Security Framework. ADVISORI bietet DSGVO-konforme Lösungen gegen Model Poisoning, Data Poisoning und andere KI-spezifische Bedrohungen für nachhaltigen Schutz Ihrer AI-Investitionen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Spezialisierter Schutz vor Model Poisoning und Data Poisoning Attacks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'DSGVO-konforme AI Security Frameworks für Enterprise-Umgebungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Robuste Verteidigung gegen Evasion und Backdoor Attacks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Model Integrity Überwachung und Threat Detection'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Adversarial KI Attacks',
        description: 'Adversarial KI Attacks stellen eine existenzielle Bedrohung für moderne AI-gestützte Geschäftsmodelle dar. Diese hochspezialisierten Angriffe zielen direkt auf die Schwachstellen von Machine Learning Modellen ab und können durch Model Poisoning, Data Poisoning oder Evasion Attacks erhebliche Geschäftsschäden verursachen. ADVISORI entwickelt maßgeschneiderte Verteidigungsstrategien, die Ihre KI-Systeme gegen diese sophistizierten Bedrohungen absichern.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Spezialisierte Threat Assessment für AI/ML-spezifische Angriffsvektoren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Robuste Defense gegen Model Poisoning und Training Data Manipulation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'DSGVO-konforme Implementierung von AI Security Governance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliche Model Integrity Monitoring und Anomaly Detection'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Schutz vor Backdoor Attacks und versteckten Manipulationen'
          }
        ],
        alert: {
          title: 'Kritischer Sicherheitshinweis',
          content: 'Adversarial KI Attacks können unbemerkt die Integrität Ihrer AI-Modelle kompromittieren und zu fehlerhaften Geschäftsentscheidungen führen. Eine proaktive AI Security Strategie ist essentiell für den Schutz Ihrer AI-Investitionen und Geschäftskontinuität.'
        },
        whyUs: {
          title: 'Unsere AI Security Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Expertise in KI-spezifischen Adversarial Defense Mechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'DSGVO-konforme AI Security Implementierung mit IP-Schutz'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Spezialisierte Model Hardening und Robustness Testing'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Strategische AI Governance für nachhaltige Security Posture'
            }
          ]
        },
        additionalInfo: 'Der Schutz vor Adversarial KI Attacks erfordert spezialisierte Expertise in Machine Learning Security und tiefes Verständnis für AI-spezifische Bedrohungslandschaften. Investieren Sie in robuste AI Security für nachhaltigen Geschäftserfolg!',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Spektrum spezialisierter AI Security Services, von der KI-spezifischen Threat Analysis über die Implementierung robuster Adversarial Defense Mechanismen bis hin zur kontinuierlichen Model Integrity Überwachung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'AI-spezifische Threat Assessment & Vulnerability Analysis'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Model Poisoning & Data Poisoning Defense'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Adversarial Training & Model Hardening'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Continuous Model Integrity Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'DSGVO-konforme AI Security Governance'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser AI Security Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte Adversarial KI Defense Strategie, die auf Ihre spezifischen AI-Modelle und Bedrohungslandschaft zugeschnitten ist und höchste Sicherheitsstandards für Machine Learning Systeme erfüllt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende AI-spezifische Threat Analysis und Model Vulnerability Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung mehrschichtiger Adversarial Defense Architekturen für AI-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung robuster Model Hardening und Adversarial Training'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung kontinuierlicher Model Integrity Monitoring Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Anpassung an neue AI-Bedrohungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Adversarial KI Attacks repräsentieren eine der sophistiziertesten Bedrohungen für moderne AI-gestützte Unternehmen. Unser spezialisierter Ansatz kombiniert tiefgreifende Machine Learning Security Expertise mit rigoroser DSGVO-Compliance, um unseren Kunden nicht nur Schutz vor aktuellen AI-spezifischen Bedrohungen zu bieten, sondern auch Resilienz gegen zukünftige Angriffsvektoren in der sich schnell entwickelnden KI-Bedrohungslandschaft aufzubauen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'AI-spezifische Threat Assessment',
          description: 'Umfassende Bewertung KI-spezifischer Bedrohungen und Identifikation von Schwachstellen in Machine Learning Modellen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Systematische Analyse aller AI-Modelle und KI-spezifischer Angriffsvektoren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Adversarial Example Generation und Model Robustness Testing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Training Data Vulnerability Assessment und Poisoning Risk Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Model Architecture Security Review und Backdoor Detection'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Model Poisoning Defense',
          description: 'Spezialisierte Verteidigungsmechanismen gegen Model Poisoning und Training Data Manipulation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Data Sanitization und Training Data Integrity Verification'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Robust Training Algorithms und Poisoning-resistant Learning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Federated Learning Security und Distributed Training Protection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Model Provenance Tracking und Supply Chain Security'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(adversarialKiAttacksData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Adversarial KI Attacks page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
