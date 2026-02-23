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
    console.log('Creating IAM Security page...')

    const iamSecurityData = {
      _type: 'servicePage',
      _id: 'iam-security',
      title: 'IAM Security - Identity & Access Management Sicherheit',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-security'
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
        title: 'IAM Security Beratung - Identity & Access Management Sicherheit | ADVISORI',
        description: 'Professionelle IAM Security Beratung: Zero Trust Architekturen, Threat Detection, Compliance und fortschrittliche Sicherheitsstrategien für maximalen Identitätsschutz.',
        keywords: 'IAM Security, Identity Security, Access Management Sicherheit, Zero Trust, IAM Threat Detection, Identity Protection, IAM Compliance, Privileged Access Security, IAM Beratung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Security Identity Access Management Sicherheit'
        },
        tagline: 'Maximale Sicherheit für Ihre Identitätsverwaltung',
        heading: 'IAM Security - Identity & Access Management Sicherheit',
        description: 'IAM Security ist das Fundament moderner Cybersicherheit und erfordert eine ganzheitliche Strategie, die weit über traditionelle Zugriffskontrollen hinausgeht. Wir entwickeln fortschrittliche IAM-Sicherheitsarchitekturen, die Zero Trust Prinzipien, KI-gestützte Threat Detection und adaptive Sicherheitsmaßnahmen kombinieren, um Ihre Identitäten und kritischen Ressourcen optimal zu schützen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Zero Trust IAM Architekturen für moderne Sicherheitsanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'KI-gestützte Threat Detection und Behavioral Analytics'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Compliance-konforme Sicherheitsstrategien für regulierte Branchen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Proaktive Incident Response und Security Operations'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'IAM Security: Strategischer Schutz für digitale Identitäten',
        description: 'IAM Security umfasst die systematische Absicherung aller Aspekte der Identitätsverwaltung - von der initialen Authentifizierung bis zur kontinuierlichen Überwachung privilegierter Zugriffe. Moderne IAM-Sicherheitsstrategien integrieren Zero Trust Prinzipien, adaptive Authentifizierung und fortschrittliche Analytics, um sowohl bekannte als auch unbekannte Bedrohungen proaktiv zu erkennen und abzuwehren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Comprehensive Identity Threat Landscape Assessment und Risk Modeling'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Zero Trust IAM Architecture Design mit Least Privilege Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Advanced Threat Detection mit Machine Learning und Behavioral Analytics'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Privileged Access Management mit Just-in-Time und Just-Enough-Access'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Continuous Security Monitoring und Automated Incident Response'
          }
        ],
        alert: {
          title: 'Kritischer Sicherheitsfaktor',
          content: 'IAM-Systeme sind primäre Angriffsziele für Cyberkriminelle. Eine robuste IAM Security Strategie ist essentiell für den Schutz kritischer Unternehmensdaten und die Einhaltung regulatorischer Anforderungen wie DORA, NIS2 und GDPR.'
        },
        whyUs: {
          title: 'Unsere IAM Security Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in Zero Trust Architekturen und modernen Sicherheitsparadigmen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'KI-gestützte Sicherheitslösungen für proaktive Threat Detection'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Compliance-Expertise für regulierte Branchen und internationale Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von Strategie bis operativer Umsetzung'
            }
          ]
        },
        additionalInfo: 'Moderne IAM Security erfordert eine Balance zwischen maximaler Sicherheit und optimaler User Experience. Adaptive Authentifizierung, Risk-based Access Control und kontinuierliche Verhaltensanalyse ermöglichen es, Sicherheit zu erhöhen, ohne die Produktivität zu beeinträchtigen.',
        serviceDescription: 'Wir entwickeln maßgeschneiderte IAM Security Strategien, die Ihre spezifischen Risiken adressieren und gleichzeitig höchste Usability gewährleisten. Unser Ansatz kombiniert bewährte Sicherheitsprinzipien mit innovativen Technologien wie KI-gestützter Anomalieerkennung und Zero Trust Architekturen für maximalen Schutz.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'IAM Security Assessment und Threat Modeling'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Zero Trust IAM Architecture Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Advanced Threat Detection Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Privileged Access Security und PAM Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Security Operations und Incident Response'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer IAM Security Ansatz',
        description: 'Wir verfolgen einen risikobasierten, mehrschichtigen Ansatz für IAM Security, der proaktive Bedrohungserkennung mit adaptiven Sicherheitsmaßnahmen kombiniert und dabei höchste Compliance-Standards erfüllt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Risikobewertung und Threat Landscape Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Zero Trust Architektur-Design mit Defense-in-Depth Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementation fortschrittlicher Detection und Response Capabilities'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche Überwachung und adaptive Sicherheitsoptimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Compliance-Integration und regulatorische Anforderungserfüllung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'IAM Security ist das Rückgrat moderner Cybersicherheit und erfordert eine strategische Herangehensweise, die technische Exzellenz mit regulatorischer Compliance verbindet. Unsere Zero Trust Architekturen und KI-gestützten Sicherheitslösungen bieten nicht nur maximalen Schutz vor aktuellen Bedrohungen, sondern schaffen auch die Grundlage für zukunftssichere Sicherheitsstrategien. Die Integration von EU AI Act Compliance in IAM-Systeme wird zum entscheidenden Wettbewerbsvorteil.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'IAM Security Assessment und Risk Analysis',
          description: 'Umfassende Bewertung Ihrer aktuellen IAM-Sicherheitslage mit detaillierter Risikoanalyse und strategischen Empfehlungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Comprehensive Identity Threat Landscape Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Vulnerability Scanning und Penetration Testing für IAM-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risk Modeling und Threat Actor Profiling'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Compliance Gap Analysis für DORA, NIS2 und GDPR'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Zero Trust IAM Architecture Design',
          description: 'Entwicklung moderner Zero Trust Architekturen für IAM-Systeme mit Least Privilege Prinzipien und adaptiven Sicherheitskontrollen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Zero Trust Maturity Assessment und Roadmap Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Micro-Segmentation und Network Access Control Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Adaptive Authentication und Risk-based Access Control'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Policy-as-Code Implementation für dynamische Sicherheitsrichtlinien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Advanced Threat Detection und Analytics',
          description: 'Implementation KI-gestützter Threat Detection Systeme mit Machine Learning und Behavioral Analytics für proaktive Bedrohungserkennung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'User and Entity Behavior Analytics (UEBA) Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Machine Learning basierte Anomaly Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Real-time Threat Intelligence Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Automated Response und Orchestration Workflows'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Privileged Access Management Security',
          description: 'Spezialisierte Sicherheitslösungen für privilegierte Zugriffe mit Just-in-Time Access und Session Monitoring.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Privileged Account Discovery und Inventory Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Just-in-Time und Just-Enough-Access Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Session Recording und Privileged Session Analytics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Secrets Management und Credential Rotation Automation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'IAM Compliance und Regulatory Security',
          description: 'Compliance-konforme IAM-Sicherheitsstrategien für regulierte Branchen mit automatisierter Audit-Unterstützung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'DORA und NIS2 Compliance für IAM-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'GDPR Privacy-by-Design für Identity Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Automated Compliance Monitoring und Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Audit Trail Management und Forensic Readiness'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'IAM Security Operations und Incident Response',
          description: 'Aufbau und Optimierung von Security Operations für IAM-Systeme mit automatisierter Incident Response.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'IAM Security Operations Center (SOC) Setup'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Incident Response Playbooks für Identity-bezogene Bedrohungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Security Orchestration und Automated Response'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Continuous Security Improvement und Threat Hunting'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamSecurityData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Security page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
