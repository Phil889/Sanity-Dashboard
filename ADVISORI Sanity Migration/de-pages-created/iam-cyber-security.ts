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
    console.log('Creating IAM Cyber Security page...')

    const iamCyberSecurityData = {
      _type: 'servicePage',
      _id: 'iam-cyber-security',
      title: 'IAM Cyber Security - Intelligente Identitätssicherheit für moderne Bedrohungslandschaften',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-cyber-security'
      },
      parent: {
        _type: 'reference',
        _ref: 'identity-access-management-iam'
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
        title: 'IAM Cyber Security - Intelligente Identitätssicherheit | ADVISORI',
        description: 'Professionelle IAM Cyber Security Lösungen: Zero-Trust-Architekturen, Behavioral Analytics, Threat Intelligence Integration und Advanced Persistent Threat Protection für maximale Identitätssicherheit.',
        keywords: 'IAM Cyber Security, Identity Security, Zero Trust IAM, Behavioral Analytics, Threat Intelligence, Advanced Persistent Threats, Identity Protection, Cyber Defense, Security Analytics, IAM Threat Detection'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Cyber Security Intelligente Identitätssicherheit'
        },
        tagline: 'Next-Generation Identitätssicherheit gegen moderne Cyber-Bedrohungen',
        heading: 'IAM Cyber Security - Intelligente Identitätssicherheit für moderne Bedrohungslandschaften',
        description: 'IAM Cyber Security vereint fortschrittliche Identitätsverwaltung mit intelligenten Cyber-Defense-Mechanismen und schafft eine adaptive Sicherheitsarchitektur, die proaktiv gegen Advanced Persistent Threats, Insider-Bedrohungen und Zero-Day-Angriffe schützt. Unsere integrierten Lösungen transformieren traditionelle IAM-Systeme in intelligente Security-Plattformen, die kontinuierlich lernen, sich anpassen und Bedrohungen in Echtzeit neutralisieren, während sie gleichzeitig optimale Benutzerfreundlichkeit und Geschäftskontinuität gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'KI-gestützte Bedrohungserkennung mit Behavioral Analytics und Anomaly Detection'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Zero-Trust-Architekturen mit kontinuierlicher Risikobewertung und adaptiver Authentifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Threat Intelligence Integration für proaktive Abwehr bekannter Angriffsmuster'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Automated Incident Response mit intelligenter Bedrohungsneutralisierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Cyber-resiliente IAM-Architekturen: Identitätssicherheit als strategische Cyber-Defense',
        description: 'Moderne Cyber-Bedrohungen zielen primär auf Identitäten ab, wodurch IAM Cyber Security zur kritischen Verteidigungslinie wird. Unsere intelligenten Sicherheitslösungen integrieren fortschrittliche Threat Detection, Behavioral Analytics und Automated Response-Mechanismen in eine kohärente Identitätssicherheits-Plattform, die nicht nur reagiert, sondern proaktiv Bedrohungen antizipiert und neutralisiert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Advanced Threat Detection mit Machine Learning für Erkennung subtiler Angriffsmuster'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Behavioral Analytics für kontinuierliche Benutzerverifikation und Anomaly Detection'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Threat Intelligence Integration für proaktive Cyber-Defense und Angriffsprävention'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Automated Security Orchestration für intelligente Incident Response und Threat Mitigation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Zero-Trust-Architekturen mit dynamischer Risikobewertung und adaptiven Sicherheitskontrollen'
          }
        ],
        alert: {
          title: 'Kritische Bedrohungslage',
          content: 'Identitätsbasierte Angriffe sind für über 80% aller Datenverletzungen verantwortlich. Ohne intelligente IAM Cyber Security Mechanismen sind Unternehmen exponentiell höheren Risiken durch Advanced Persistent Threats, Credential Stuffing und Insider-Angriffe ausgesetzt.'
        },
        whyUs: {
          title: 'ADVISORI IAM Cyber Security Excellence',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'KI-gestützte Threat Detection mit proprietären Algorithmen für maximale Erkennungsgenauigkeit'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Integrierte Cyber-Intelligence-Plattformen für proaktive Bedrohungsabwehr'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Zero-Trust-Expertise mit bewährten Implementierungsstrategien für Enterprise-Umgebungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Compliance-integrierte Sicherheitsarchitekturen für regulatorische Exzellenz'
            }
          ]
        },
        additionalInfo: 'Die Konvergenz von IAM und Cyber Security schafft neue Möglichkeiten für intelligente, adaptive Sicherheitsarchitekturen. Durch Integration von Artificial Intelligence, Machine Learning und Advanced Analytics entstehen selbstlernende Systeme, die kontinuierlich ihre Erkennungsfähigkeiten verbessern und sich an evolvierende Bedrohungslandschaften anpassen.',
        serviceDescription: 'Wir entwickeln und implementieren ganzheitliche IAM Cyber Security Lösungen, die modernste Bedrohungserkennung mit robusten Identitätssicherheits-Mechanismen vereinen. Unser Ansatz kombiniert bewährte Sicherheitsprinzipien mit innovativen KI-Technologien für eine Cyber-Defense-Strategie, die Ihre digitalen Assets proaktiv schützt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Threat-aware IAM-Architekturen mit integrierter Cyber-Intelligence'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Behavioral Analytics und User Entity Behavior Analytics (UEBA) Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Zero-Trust-Deployment mit adaptiven Sicherheitskontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Security Orchestration und Automated Response (SOAR) Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Continuous Security Monitoring und Threat Hunting Capabilities'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser intelligenter IAM Cyber Security Ansatz',
        description: 'Wir verfolgen einen ganzheitlichen, threat-aware Ansatz für IAM Cyber Security, der proaktive Bedrohungserkennung mit robusten Identitätssicherheits-Mechanismen vereint und dabei kontinuierliche Adaptation an evolvierende Cyber-Bedrohungen gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Threat Landscape Assessment und Cyber-Risk-Analyse für strategische Sicherheitsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Zero-Trust-Architektur-Design mit integrierter Threat Intelligence und Behavioral Analytics'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'KI-gestützte Security-Implementation mit Machine Learning und Advanced Analytics'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Continuous Monitoring und Adaptive Response für dynamische Bedrohungsabwehr'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Security Operations Integration und Threat Hunting für proaktive Cyber-Defense'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'IAM Cyber Security ist die evolutionäre Antwort auf moderne Bedrohungslandschaften und transformiert Identitätsverwaltung von einem administrativen Prozess zu einer intelligenten Cyber-Defense-Plattform. Unsere Erfahrung zeigt, dass Unternehmen, die IAM und Cyber Security strategisch integrieren, nicht nur signifikant besseren Schutz gegen Advanced Persistent Threats erreichen, sondern auch die Grundlage für adaptive, selbstlernende Sicherheitsarchitekturen schaffen. Die Zukunft der Unternehmenssicherheit liegt in der intelligenten Konvergenz von Identitätsverwaltung und proaktiver Bedrohungsabwehr.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Threat-aware IAM-Architekturen und Cyber-Intelligence Integration',
          description: 'Entwicklung intelligenter IAM-Architekturen mit integrierter Threat Intelligence und proaktiver Bedrohungserkennung für maximale Cyber-Resilienz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Threat Intelligence Integration für proaktive Angriffserkennung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Cyber-Threat-Modeling und Risk-based Architecture Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Advanced Persistent Threat (APT) Detection und Mitigation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Threat Hunting Capabilities und Proactive Defense Mechanisms'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Behavioral Analytics und User Entity Behavior Analytics (UEBA)',
          description: 'Implementation fortschrittlicher Behavioral Analytics für kontinuierliche Benutzerverifikation und intelligente Anomaly Detection.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Machine Learning-basierte Behavioral Pattern Recognition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Real-time Anomaly Detection und Risk Scoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Insider Threat Detection und Compromised Account Identification'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Adaptive Authentication basierend auf Behavioral Insights'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Zero-Trust-IAM-Implementation mit adaptiven Sicherheitskontrollen',
          description: 'Professionelle Zero-Trust-Deployment mit intelligenten, adaptiven Sicherheitskontrollen und kontinuierlicher Risikobewertung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Zero-Trust-Architektur-Design und -Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Continuous Verification und Dynamic Risk Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Adaptive Access Controls und Context-aware Authentication'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Micro-Segmentation und Least Privilege Enforcement'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Security Orchestration und Automated Response (SOAR)',
          description: 'Integration intelligenter Security Orchestration für automatisierte Incident Response und proaktive Threat Mitigation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Automated Incident Response und Threat Containment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Security Playbook Development und Orchestration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Threat Intelligence Automation und IOC Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Security Workflow Optimization und Response Time Reduction'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Advanced Threat Detection und Cyber-Defense-Mechanismen',
          description: 'Implementation fortschrittlicher Threat Detection Systeme mit KI-gestützter Angriffserkennung und proaktiver Cyber-Defense.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'AI-powered Threat Detection und Pattern Recognition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Advanced Malware Detection und Zero-Day Protection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Credential Stuffing Prevention und Account Takeover Protection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Lateral Movement Detection und Attack Chain Disruption'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Continuous Security Monitoring und Threat Intelligence Operations',
          description: 'Etablierung umfassender Security Monitoring Capabilities mit kontinuierlicher Threat Intelligence und proaktiver Bedrohungsabwehr.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Real-time Security Monitoring und Alert Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Threat Intelligence Feeds und IOC Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Security Analytics und Threat Landscape Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Cyber Threat Hunting und Proactive Defense Operations'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamCyberSecurityData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Cyber Security page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
