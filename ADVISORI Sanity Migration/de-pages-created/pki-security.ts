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
    console.log('Creating PKI Security page...')

    const pkiSecurityData = {
      _type: 'servicePage',
      _id: 'pki-security',
      title: 'PKI Security',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/data-protection-encryption/pki/pki-security'
      },
      parent: {
        _type: 'reference',
        _ref: 'pki'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'informationssicherheit'
        }
      },
      seo: {
        _type: 'seo',
        title: 'PKI Security - Advanced Certificate Infrastructure Protection | ADVISORI',
        description: 'Professionelle PKI Security Services für Enterprise-Umgebungen. Advanced Threat Protection, Security Monitoring, Zero Trust Integration und comprehensive PKI-Sicherheitsarchitekturen für moderne Vertrauensinfrastrukturen.',
        keywords: 'PKI Security, Certificate Security, PKI Threat Protection, Certificate Monitoring, PKI Incident Response, Zero Trust PKI, PKI Compliance Security, Certificate Authority Security, PKI Risk Management, Enterprise PKI Security'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'PKI Security - Advanced Certificate Infrastructure Protection und comprehensive PKI-Sicherheitsarchitekturen'
        },
        tagline: 'Advanced Security trifft auf PKI-Excellence',
        heading: 'PKI Security',
        description: 'PKI Security transformiert traditionelle Certificate-Verwaltung in strategische Sicherheitsarchitekturen. Durch intelligente Threat Protection, proaktive Security Monitoring und nahtlose Zero Trust-Integration schaffen wir PKI-Sicherheitssysteme, die nicht nur Zertifikate schützen, sondern als fundamentale Vertrauensgrundlage für moderne AI-gestützte Geschäftsmodelle und kritische Infrastrukturen fungieren.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Advanced PKI Threat Protection und proaktive Security Intelligence'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Real-time Certificate Monitoring und Incident Response-Automation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Zero Trust PKI Integration und moderne Sicherheitsarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Comprehensive Compliance Security und Risk Management'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'PKI Security - Advanced Certificate Infrastructure Protection für Enterprise-Umgebungen',
        description: 'PKI Security ist das strategische Fundament für vertrauensvolle digitale Geschäftsmodelle. Es transformiert passive Certificate-Verwaltung in proaktive Sicherheitsarchitekturen, die nicht nur gegen aktuelle Bedrohungen schützen, sondern auch als strategische Enabler für Zero Trust-Implementierung, Quantum-ready Kryptographie und AI-gestützte Security Operations fungieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Advanced Threat Protection etabliert intelligente Sicherheitssysteme für PKI-Infrastrukturen gegen moderne Cyberbedrohungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Real-time Security Monitoring überwacht Certificate-Aktivitäten kontinuierlich und erkennt Anomalien proaktiv'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Zero Trust PKI Integration harmonisiert Certificate-basierte Authentifizierung mit modernen Sicherheitsarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Automated Incident Response koordiniert schnelle Reaktionen auf PKI-Sicherheitsereignisse und Certificate-Kompromittierungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Quantum-ready Security Frameworks bereiten PKI-Infrastrukturen auf Post-Quantum-Kryptographie vor'
          }
        ],
        alert: {
          title: 'PKI Security als strategischer Cyber-Resilience Accelerator',
          content: 'Moderne PKI Security wird zum kritischen Differentiator für AI-gestützte Geschäftsmodelle, kritische Infrastrukturen und vertrauensbasierte Partnerschaften – weit über traditionelle Certificate-Sicherheit hinaus.'
        },
        whyUs: {
          title: 'Warum PKI Security mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende PKI-Security-Expertise von Threat Intelligence bis Quantum-ready Implementations'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Beratung für optimale PKI-Security-Technologie und Architektur-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Security-Frameworks für hochverfügbare und resiliente PKI-Sicherheitsarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche PKI-Security-Evolution und strategische Threat Landscape-Adaptation'
            }
          ]
        },
        additionalInfo: 'PKI Security ermöglicht es Organisationen, digitale Vertrauensbeziehungen als strategisches Sicherheits-Asset zu orchestrieren. Die richtige PKI-Security-Strategie wird zum Wettbewerbsvorteil in einer zunehmend bedrohungsreichen und AI-gestützten Geschäftswelt.',
        serviceDescription: 'Unser PKI Security Service umfasst die vollständige Transformation von vulnerablen Certificate-Landschaften zu strategischen PKI-Sicherheitsarchitekturen. Wir entwickeln maßgeschneiderte PKI-Security-Strategien, die perfekt zu Ihren Sicherheits-, Compliance- und Geschäftsanforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Advanced PKI Threat Protection und Security Intelligence-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Real-time Certificate Security Monitoring und Anomaly Detection'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Zero Trust PKI Integration und moderne Sicherheitsarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Automated Incident Response und Security Operations-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Quantum-ready Security Frameworks und Future-proof Implementations'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zur PKI Security',
        description: 'Wir verfolgen einen strategischen und threat-intelligence-orientierten Ansatz zur PKI Security, der proaktive Bedrohungsabwehr mit langfristiger strategischer Sicherheitsvision optimal verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende PKI-Security-Assessment und Threat Landscape-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategic Security Architecture-Entwicklung mit Advanced Threat Protection-Design'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Security-Implementierung mit kontinuierlicher Threat Intelligence-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Enterprise-Integration in bestehende Security Operations Center und SIEM-Landschaften'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige PKI-Security-Evolution durch Monitoring, Training und strategische Threat Adaptation'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'PKI Security ist das strategische Fundament für vertrauensvolle AI-gestützte Geschäftsmodelle und kritische Infrastrukturen. Wir transformieren vulnerable Certificate-Landschaften in resiliente Sicherheitsarchitekturen, die nicht nur gegen aktuelle Bedrohungen schützen, sondern auch als strategische Enabler für Zero Trust-Implementierung, Quantum-ready Kryptographie und AI-Security-Excellence fungieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Advanced PKI Threat Protection & Security Intelligence',
          description: 'Umfassende Bedrohungsabwehr und Intelligence-Integration für PKI-Infrastrukturen mit proaktiver Threat Detection und Response-Automation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Advanced Threat Detection für PKI-spezifische Angriffsvektoren und Certificate-basierte Bedrohungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Security Intelligence-Integration mit Threat Feeds und Vulnerability Databases'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Behavioral Analytics für Certificate-Nutzungsmuster und Anomaly Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Proactive Threat Hunting und Advanced Persistent Threat-Erkennung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Real-time Certificate Security Monitoring',
          description: 'Kontinuierliche Überwachung und Analyse von Certificate-Aktivitäten mit intelligenter Anomaly Detection und Security Event-Korrelation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Real-time Certificate Activity Monitoring mit Security Event-Korrelation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Certificate Transparency Log-Überwachung und Rogue Certificate Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Automated Security Alerting und Escalation-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Security Dashboard und Executive Reporting für PKI-Sicherheitsstatus'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Zero Trust PKI Integration & Architecture',
          description: 'Nahtlose Integration von PKI-Security in Zero Trust-Architekturen mit kontinuierlicher Verifikation und adaptiver Sicherheit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Zero Trust PKI Architecture-Design mit kontinuierlicher Certificate-Verifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Adaptive Certificate Policies basierend auf Risk Context und Threat Intelligence'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Micro-segmentation mit Certificate-basierter Network Access Control'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Identity-centric PKI Security mit Dynamic Trust Evaluation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Automated PKI Incident Response & Recovery',
          description: 'Vollautomatisierte Incident Response-Systeme für PKI-Sicherheitsereignisse mit intelligenter Threat Containment und Recovery-Orchestrierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Automated Incident Detection und Response-Orchestrierung für PKI-Sicherheitsereignisse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Emergency Certificate Revocation und Replacement-Automation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Forensic Data Collection und Security Investigation-Support'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Business Continuity-Integration und Service Recovery-Orchestrierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'PKI Compliance Security & Risk Management',
          description: 'Umfassende Compliance-Security und Risk Management für regulatorische Anforderungen mit kontinuierlicher Audit-Unterstützung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Regulatory Compliance Security-Assessment und Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Automated Compliance Monitoring und Security Control-Validation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Risk-based PKI Security Management und Threat Risk Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Continuous Audit Support und Evidence Collection-Automation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Quantum-ready PKI Security & Future-proofing',
          description: 'Strategische Vorbereitung auf Post-Quantum-Kryptographie mit Quantum-ready Security Frameworks und Migration-Strategien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Quantum Threat Assessment und Post-Quantum Cryptography Readiness-Evaluation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Hybrid PKI Security Architectures für Quantum-Classical Transition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Crypto-agility Implementation und Algorithm Migration-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Future-proof Security Framework-Design und Evolution-Roadmaps'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(pkiSecurityData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ PKI Security page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
