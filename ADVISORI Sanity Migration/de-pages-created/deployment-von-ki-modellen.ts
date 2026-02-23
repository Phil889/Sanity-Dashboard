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
    console.log('Creating Deployment von KI-Modellen page...')

    const deploymentVonKiModellenData = {
      _type: 'servicePage',
      _id: 'deployment-von-ki-modellen',
      title: 'Deployment von KI-Modellen',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/deployment-von-ki-modellen'
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
        title: 'Deployment von KI-Modellen | DSGVO-konforme AI-Implementierung | ADVISORI',
        description: 'Professionelles Deployment von KI-Modellen mit DSGVO-Compliance und IP-Schutz. Sichere MLOps-Implementierung, kontinuierliches Monitoring und skalierbare AI-Architekturen für Unternehmen.',
        keywords: 'KI-Modell Deployment, MLOps, AI Model Deployment, DSGVO KI, Machine Learning Operations, AI Governance, Model Monitoring, KI-Implementierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Deployment von KI-Modellen'
        },
        tagline: 'DSGVO-konforme KI-Modell-Implementierung für Produktionsumgebungen',
        heading: 'Deployment von KI-Modellen',
        description: 'Bringen Sie Ihre KI-Modelle sicher und compliant in die Produktion. Unser Safety-First-Ansatz gewährleistet DSGVO-konforme Deployments mit umfassendem IP-Schutz und kontinuierlicher Überwachung für nachhaltige AI-Performance.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'DSGVO-konforme Produktions-Deployments mit vollständiger Compliance-Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Sichere MLOps-Pipelines mit automatisiertem Monitoring und Alerting'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Skalierbare AI-Architekturen für Enterprise-Grade Performance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Model-Governance und Risikomanagement'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Deployment von KI-Modellen',
        description: 'Das Deployment von KI-Modellen in Produktionsumgebungen ist ein kritischer Erfolgsfaktor für AI-Initiativen. ADVISORI unterstützt Sie dabei, Ihre entwickelten Modelle sicher, compliant und performant in die Produktion zu bringen. Unser umfassender Ansatz kombiniert technische Exzellenz mit rigoroser DSGVO-Compliance und strategischem Risikomanagement.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Deployment-Planung und Architektur-Design'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'DSGVO-konforme MLOps-Pipeline-Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Kontinuierliches Model-Monitoring und Performance-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Skalierbare Container- und Cloud-Deployment-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Umfassende Governance und Compliance-Management'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiches KI-Model-Deployment erfordert mehr als nur technische Implementierung. Eine durchdachte MLOps-Strategie mit integrierter Governance, kontinuierlichem Monitoring und proaktivem Risikomanagement ist entscheidend für nachhaltigen AI-Erfolg in Produktionsumgebungen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Expertise in DSGVO-konformen MLOps-Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Enterprise-Grade Deployment-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfassende Model-Governance und Compliance-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Überwachung und Performance-Optimierung'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit professionellen MLOps-Praktiken können ihre Time-to-Market für AI-Lösungen erheblich verkürzen und gleichzeitig Risiken minimieren. Investieren Sie in nachhaltige und skalierbare KI-Deployment-Strategien!',
        serviceDescription: 'Wir bieten Ihnen ein vollständiges Spektrum an Deployment-Services für KI-Modelle, von der strategischen Planung über die technische Implementierung bis hin zur kontinuierlichen Überwachung und Optimierung in Produktionsumgebungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Deployment-Strategie und Architektur-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'MLOps-Pipeline-Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Model-Monitoring und Performance-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Skalierbare Cloud- und Container-Deployments'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Governance und Compliance-Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine maßgeschneiderte Deployment-Strategie, die auf Ihre spezifischen Geschäftsanforderungen zugeschnitten ist und höchste Standards für Sicherheit, Performance und Compliance erfüllt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer Model-Anforderungen und Produktionsumgebung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design sicherer und skalierbarer Deployment-Architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung DSGVO-konformer MLOps-Pipelines'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung kontinuierlicher Monitoring- und Governance-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Weiterentwicklung der Deployment-Strategie'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Das professionelle Deployment von KI-Modellen ist der entscheidende Schritt von der Entwicklung zur Wertschöpfung. Unser Ansatz kombiniert technische Exzellenz mit rigoroser DSGVO-Compliance und strategischem Risikomanagement, um unseren Kunden nachhaltige und skalierbare AI-Lösungen zu liefern, die sowohl innovativ als auch verantwortungsvoll sind.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Deployment-Strategie und Architektur-Design',
          description: 'Entwicklung maßgeschneiderter Deployment-Strategien und sicherer Architektur-Designs für Ihre KI-Modelle.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse der Model-Anforderungen und Produktionsumgebung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Design skalierender und sicherer Deployment-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'DSGVO-konforme Infrastruktur-Planung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Risikobewertung und Compliance-Anforderungsanalyse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'MLOps-Pipeline-Implementierung',
          description: 'Aufbau automatisierter MLOps-Pipelines für kontinuierliche Integration und Deployment von KI-Modellen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'CI/CD-Pipeline-Setup für Model-Deployments'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automatisierte Testing- und Validierungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Version Control und Model Registry Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Rollback-Strategien und Disaster Recovery'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Model-Monitoring und Performance-Management',
          description: 'Kontinuierliche Überwachung der Model-Performance mit proaktivem Alerting und Optimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Real-time Model Performance Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Data Drift und Model Drift Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Automatisierte Alerting- und Eskalationsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Performance-Optimierung und Tuning'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Skalierbare Cloud- und Container-Deployments',
          description: 'Implementierung skalierbarer Deployment-Lösungen mit Container-Orchestrierung und Cloud-Integration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Kubernetes-basierte Container-Orchestrierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Multi-Cloud und Hybrid-Cloud Deployment-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Auto-Scaling und Load-Balancing-Konfiguration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Sicherheits- und Netzwerk-Konfiguration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Governance und Compliance-Management',
          description: 'Etablierung umfassender Governance-Frameworks für DSGVO-konforme Model-Deployments.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'DSGVO-konforme Deployment-Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Audit-Trail und Compliance-Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Model-Governance und Approval-Workflows'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Risikomanagement und Incident Response'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Kontinuierliche Optimierung und Support',
          description: 'Laufende Betreuung und Optimierung Ihrer KI-Model-Deployments für maximale Performance und Effizienz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Kontinuierliche Performance-Analyse und Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Proaktive Wartung und Updates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Technischer Support und Troubleshooting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Strategische Beratung für Weiterentwicklung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(deploymentVonKiModellenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Deployment von KI-Modellen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
