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
    console.log('Creating SIEM Monitoring page...')

    const siemMonitoringData = {
      _type: 'servicePage',
      _id: 'siem-monitoring',
      title: 'SIEM Monitoring - Kontinuierliche Überwachung und Threat Detection',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/security-operations-secops/siem/siem-monitoring'
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
        title: 'SIEM Monitoring - Kontinuierliche Überwachung und Threat Detection | ADVISORI',
        description: 'Professionelle SIEM Monitoring Services: Real-time Threat Detection, kontinuierliche Sicherheitsüberwachung, Alert-Management und proaktive Incident Response für maximale Cybersecurity-Effektivität.',
        keywords: 'SIEM Monitoring, Threat Detection, Security Monitoring, Real-time Überwachung, Alert Management, Incident Response, SOC Services, Cybersecurity Monitoring, SIEM Analytics'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'SIEM Monitoring - Kontinuierliche Überwachung und Threat Detection'
        },
        tagline: 'Proaktive SIEM Monitoring-Expertise für kontinuierliche Cybersecurity-Exzellenz',
        heading: 'SIEM Monitoring - Kontinuierliche Überwachung und Threat Detection',
        description: 'Effektives SIEM Monitoring ist das Herzstück moderner Cybersecurity-Operationen. Wir entwickeln und implementieren intelligente Monitoring-Strategien, die Bedrohungen in Echtzeit erkennen, False Positives minimieren und automatisierte Response-Mechanismen aktivieren. Unsere AI-gestützten Monitoring-Lösungen gewährleisten kontinuierliche Sicherheitsüberwachung mit maximaler Präzision und operativer Effizienz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'AI-gestützte Real-time Threat Detection und Anomalie-Erkennung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Intelligentes Alert-Management mit False-Positive-Reduktion'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Automatisierte Incident Response und Workflow-Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Monitoring-Optimierung und Performance-Tuning'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'SIEM Monitoring: Intelligente Überwachung für proaktive Cybersecurity',
        description: 'Modernes SIEM Monitoring geht weit über traditionelle Log-Analyse hinaus und umfasst intelligente Threat Detection, prädiktive Analytics und automatisierte Response-Mechanismen. Wir entwickeln maßgeschneiderte Monitoring-Strategien, die Ihre spezifischen Bedrohungslandschaften adressieren und gleichzeitig operative Effizienz maximieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategic Monitoring Design und Use Case Development'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'AI-Enhanced Detection Rules und Behavioral Analytics'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Real-time Alert Management und Prioritization'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Automated Incident Response und SOAR Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Continuous Monitoring Optimization und Threat Intelligence Integration'
          }
        ],
        alert: {
          title: 'Monitoring-Exzellenz als Wettbewerbsvorteil',
          content: 'Effektives SIEM Monitoring kann die Mean Time to Detection um bis zu 90% reduzieren und gleichzeitig False Positives um über 80% minimieren. Intelligente Monitoring-Strategien sind entscheidend für proaktive Cybersecurity und Business Continuity.'
        },
        whyUs: {
          title: 'Unsere SIEM Monitoring Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung mit AI-gestützten Detection-Technologien und Advanced Analytics'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodiken für False-Positive-Reduktion und Alert-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'End-to-End Monitoring-Services von Strategie bis operative Exzellenz'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Innovation und Integration neuester Threat Intelligence'
            }
          ]
        },
        additionalInfo: 'Die SIEM Monitoring-Landschaft entwickelt sich rasant weiter, mit neuen AI-Technologien, Cloud-nativen Monitoring-Ansätzen und integrierten Threat Intelligence Plattformen. Moderne Monitoring-Strategien müssen sowohl aktuelle Bedrohungen als auch emerging Threats antizipieren und gleichzeitig operative Effizienz gewährleisten.',
        serviceDescription: 'Wir bieten umfassende SIEM Monitoring Services, die von der strategischen Monitoring-Planung über die Implementierung intelligenter Detection-Rules bis hin zur kontinuierlichen Optimierung und Threat Intelligence Integration reichen. Unser AI-gestützter Ansatz gewährleistet maximale Detection-Accuracy bei minimalen False Positives.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategic Monitoring Architecture und Use Case Engineering'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'AI-Enhanced Detection Rules und Behavioral Analytics Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Real-time Alert Management und Incident Response Automation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Threat Intelligence Integration und Contextual Enrichment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Continuous Monitoring Optimization und Performance Analytics'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer SIEM Monitoring Ansatz',
        description: 'Wir verfolgen einen datengetriebenen, AI-gestützten Ansatz für SIEM Monitoring, der technische Exzellenz mit operativer Effizienz und strategischer Threat Intelligence verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Threat Landscape Analysis und Risk-based Monitoring Design'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'AI-Enhanced Detection Engineering mit Machine Learning und Behavioral Analytics'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Intelligent Alert Management mit Prioritization und Context Enrichment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Automated Response Integration mit SOAR und Workflow Orchestration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continuous Improvement durch Performance Analytics und Threat Intelligence'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Effektives SIEM Monitoring ist der Grundpfeiler proaktiver Cybersecurity und erfordert eine perfekte Balance zwischen technischer Sophistication und operativer Praktikabilität. Unsere AI-gestützten Monitoring-Lösungen ermöglichen es unseren Kunden, Bedrohungen in Echtzeit zu erkennen und zu neutralisieren, während gleichzeitig False Positives drastisch reduziert werden. Durch kontinuierliche Optimierung und Integration neuester Threat Intelligence schaffen wir Monitoring-Exzellenz, die sowohl aktuelle als auch zukünftige Cybersecurity-Herausforderungen antizipiert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategic SIEM Monitoring Design und Architecture',
          description: 'Entwicklung maßgeschneiderter Monitoring-Strategien und -Architekturen, die Ihre spezifischen Bedrohungslandschaften adressieren und operative Exzellenz gewährleisten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Comprehensive Threat Landscape Assessment und Risk-based Monitoring Strategy'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Use Case Engineering und Detection Logic Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Monitoring Architecture Design für Skalierbarkeit und Performance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration Planning mit bestehenden Security-Tools und Workflows'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'AI-Enhanced Detection Rules und Analytics',
          description: 'Implementation intelligenter Detection-Rules und Advanced Analytics für präzise Threat Detection mit minimalen False Positives.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Machine Learning-basierte Anomalie-Erkennung und Behavioral Analytics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Custom Detection Rules Development für spezifische Bedrohungsszenarien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Statistical Analysis und Pattern Recognition für Advanced Threat Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Continuous Rule Optimization und Performance Tuning'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Real-time Alert Management und Prioritization',
          description: 'Intelligentes Alert-Management mit automatisierter Prioritization, Context Enrichment und False-Positive-Reduktion für effiziente Security Operations.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Intelligent Alert Correlation und Deduplication'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Risk-based Alert Prioritization und Severity Scoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Contextual Alert Enrichment mit Threat Intelligence und Asset Information'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'False Positive Analysis und Continuous Alert Optimization'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Automated Incident Response und SOAR Integration',
          description: 'Nahtlose Integration automatisierter Response-Mechanismen und SOAR-Plattformen für beschleunigte Incident Response und Workflow-Orchestrierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'SOAR Platform Integration und Workflow Automation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Automated Response Playbooks für verschiedene Incident-Typen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Real-time Notification und Escalation Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Integration mit Ticketing-Systemen und Communication Platforms'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Threat Intelligence Integration und Contextual Enrichment',
          description: 'Integration aktueller Threat Intelligence und Contextual Enrichment für Enhanced Detection Capabilities und situational Awareness.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Multi-Source Threat Intelligence Integration und Feed Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'IOC Matching und Threat Attribution für Enhanced Context'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Geolocation und Reputation Analysis für Risk Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Custom Threat Intelligence Development und Sharing'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Continuous Monitoring Optimization und Performance Analytics',
          description: 'Kontinuierliche Monitoring-Optimierung durch Performance Analytics, Effectiveness Measurement und strategische Verbesserungsmaßnahmen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Monitoring Effectiveness Measurement und KPI Tracking'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Performance Analytics und Resource Optimization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Detection Coverage Analysis und Gap Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Continuous Improvement Planning und Strategic Roadmap Development'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(siemMonitoringData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ SIEM Monitoring page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
