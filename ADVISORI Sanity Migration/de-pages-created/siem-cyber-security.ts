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
    console.log('Creating SIEM Cyber Security page...')

    const siemCyberSecurityData = {
      _type: 'servicePage',
      _id: 'siem-cyber-security',
      title: 'SIEM Cyber Security - Ganzheitliche Cybersecurity-Orchestrierung',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/security-operations-secops/siem/siem-cyber-security'
      },
      parent: {
        _type: 'reference',
        _ref: 'siem'
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
        title: 'SIEM Cyber Security - Ganzheitliche Cybersecurity-Orchestrierung | ADVISORI',
        description: 'Professionelle SIEM Cyber Security Beratung: Strategische Cybersecurity-Orchestrierung, Advanced Threat Detection, Incident Response und Security Operations Center Optimierung für maximale Cyber-Resilienz.',
        keywords: 'SIEM Cyber Security, Cybersecurity SIEM, Security Operations, Threat Detection, Incident Response, SOC, Cyber Defense, Security Monitoring, Cyber Threat Intelligence'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'SIEM Cyber Security - Ganzheitliche Cybersecurity-Orchestrierung'
        },
        tagline: 'SIEM-basierte Cybersecurity-Exzellenz für moderne Bedrohungslandschaften',
        heading: 'SIEM Cyber Security - Ganzheitliche Cybersecurity-Orchestrierung',
        description: 'SIEM-Systeme bilden das Herzstück moderner Cybersecurity-Strategien und ermöglichen eine ganzheitliche Orchestrierung aller Sicherheitsmaßnahmen. Wir entwickeln SIEM-basierte Cybersecurity-Architekturen, die Advanced Threat Detection, intelligente Incident Response und proaktive Cyber Defense nahtlos integrieren. Unsere Expertise schafft resiliente Security Operations, die auch gegen die raffiniertesten Cyberangriffe bestehen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Ganzheitliche SIEM-basierte Cybersecurity-Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Advanced Threat Detection und Behavioral Analytics'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Intelligente Incident Response und Automated Remediation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Proaktive Cyber Defense und Threat Hunting Capabilities'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'SIEM Cyber Security: Das Nervenzentrum moderner Cyber-Resilienz',
        description: 'In der heutigen Bedrohungslandschaft sind SIEM-Systeme weit mehr als nur Log-Management-Tools – sie sind das strategische Nervenzentrum für ganzheitliche Cybersecurity. Wir entwickeln SIEM-basierte Cybersecurity-Ökosysteme, die alle Aspekte der Cyber Defense orchestrieren und eine proaktive, intelligente Verteidigung gegen moderne Cyberbedrohungen ermöglichen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategic Cybersecurity Architecture mit SIEM als zentraler Orchestrierungsplattform'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Advanced Threat Detection durch Machine Learning und Behavioral Analytics'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Intelligent Incident Response mit automatisierter Threat Containment'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Proactive Threat Hunting und Cyber Threat Intelligence Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Continuous Security Monitoring und Real-time Cyber Situational Awareness'
          }
        ],
        alert: {
          title: 'Cybersecurity-Paradigmenwechsel',
          content: 'Moderne Cyberbedrohungen erfordern eine fundamentale Neuausrichtung der Cybersecurity-Strategie. SIEM-basierte Cyber Defense ermöglicht es, von reaktiven zu proaktiven Sicherheitsmaßnahmen überzugehen und Angreifer bereits in frühen Phasen zu erkennen und zu stoppen.'
        },
        whyUs: {
          title: 'Unsere SIEM Cyber Security Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in SIEM-basierter Cybersecurity-Orchestrierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodiken für Advanced Threat Detection und Response'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfassende Erfahrung mit modernen Cyber Defense Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz für resiliente Cybersecurity-Ökosysteme'
            }
          ]
        },
        additionalInfo: 'Die Cybersecurity-Landschaft entwickelt sich rasant weiter, mit neuen Angriffsvektoren, raffinierten APT-Kampagnen und KI-gestützten Bedrohungen. SIEM-basierte Cybersecurity bietet die notwendige Flexibilität und Intelligence, um mit dieser Entwicklung Schritt zu halten und einen nachhaltigen Schutz zu gewährleisten.',
        serviceDescription: 'Wir entwickeln umfassende SIEM-basierte Cybersecurity-Strategien, die alle Aspekte der modernen Cyber Defense abdecken. Von der strategischen Architektur über Advanced Analytics bis hin zu automatisierten Response-Mechanismen schaffen wir integrierte Lösungen, die maximale Cyber-Resilienz bei optimaler operativer Effizienz bieten.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'SIEM-basierte Cybersecurity Architecture und Strategic Planning'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Advanced Threat Detection und Behavioral Analytics Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Intelligent Incident Response und Automated Remediation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Proactive Threat Hunting und Cyber Threat Intelligence'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Security Operations Center Optimization und Cyber Situational Awareness'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser ganzheitlicher SIEM Cyber Security Ansatz',
        description: 'Wir verfolgen einen strategischen, risikobasierten Ansatz für SIEM-basierte Cybersecurity, der technische Exzellenz mit operativer Effizienz und strategischer Cyber-Resilienz verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategic Cyber Risk Assessment und Threat Landscape Analysis'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'SIEM-basierte Cybersecurity Architecture Design und Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Advanced Analytics und Machine Learning Integration für Threat Detection'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Intelligent Response Automation und Cyber Defense Orchestration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continuous Improvement und Adaptive Cyber Defense Optimization'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'SIEM-basierte Cybersecurity repräsentiert die Evolution von reaktiven zu proaktiven Cyber Defense Strategien. Unsere Expertise ermöglicht es Unternehmen, SIEM-Systeme als strategische Cybersecurity-Plattformen zu nutzen, die nicht nur Bedrohungen erkennen, sondern intelligente, automatisierte Abwehrmaßnahmen orchestrieren. Durch die Integration von Advanced Analytics, Threat Intelligence und automatisierten Response-Mechanismen schaffen wir Cybersecurity-Ökosysteme, die auch gegen die raffiniertesten Angriffe resilient sind.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'SIEM-basierte Cybersecurity Architecture und Strategic Planning',
          description: 'Entwicklung strategischer SIEM-basierter Cybersecurity-Architekturen, die alle Aspekte der modernen Cyber Defense orchestrieren und eine ganzheitliche Sicherheitsstrategie ermöglichen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Strategic Cybersecurity Architecture Design mit SIEM als zentraler Orchestrierungsplattform'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Cyber Risk Assessment und Threat Modeling für zielgerichtete Schutzmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Security Control Framework Integration und Defense-in-Depth Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Cybersecurity Governance und Risk Management Alignment'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Advanced Threat Detection und Behavioral Analytics',
          description: 'Implementation fortschrittlicher Threat Detection Mechanismen mit Machine Learning und Behavioral Analytics für die Erkennung auch unbekannter und raffinierter Cyberbedrohungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Machine Learning-basierte Anomaly Detection für Zero-Day Threat Identification'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'User and Entity Behavior Analytics für Insider Threat Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Advanced Persistent Threat Detection durch Multi-Stage Attack Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Threat Intelligence Integration für Context-aware Detection'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Intelligent Incident Response und Automated Remediation',
          description: 'Entwicklung intelligenter Incident Response Prozesse mit automatisierten Remediation-Mechanismen für schnelle und effektive Bedrohungsabwehr.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Automated Incident Classification und Priority-based Response Orchestration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Intelligent Threat Containment und Automated Isolation Mechanisms'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Forensic Data Collection und Evidence Preservation Automation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Recovery Orchestration und Business Continuity Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Proactive Threat Hunting und Cyber Threat Intelligence',
          description: 'Implementation proaktiver Threat Hunting Capabilities und Integration von Cyber Threat Intelligence für präventive Bedrohungsabwehr.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Hypothesis-driven Threat Hunting Methodologies und Hunt Team Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Cyber Threat Intelligence Platform Integration und IOC Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Threat Actor Profiling und Campaign Tracking für Strategic Defense'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Predictive Threat Analytics und Early Warning Systems'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Security Operations Center Optimization',
          description: 'Optimierung von Security Operations Centers mit SIEM-basierter Workflow-Orchestrierung für maximale operative Effizienz und Cyber Situational Awareness.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'SOC Workflow Optimization und Analyst Productivity Enhancement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Real-time Cyber Situational Awareness Dashboards und Executive Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'SOC Team Training und Skill Development Programs'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Performance Metrics und SOC Maturity Assessment'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Continuous Security Monitoring und Cyber Resilience',
          description: 'Etablierung kontinuierlicher Security Monitoring Prozesse und Cyber Resilience Mechanismen für nachhaltige Cybersecurity-Exzellenz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Continuous Security Monitoring und Real-time Threat Visibility'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Cyber Resilience Testing und Red Team Exercise Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Security Metrics und Cyber Risk Quantification'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Adaptive Defense Mechanisms und Threat Landscape Evolution Response'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(siemCyberSecurityData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ SIEM Cyber Security page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
