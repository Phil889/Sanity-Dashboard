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
    console.log('Creating EU AI Act Monitoring Systems page...')

    const euAiActMonitoringSystemsData = {
      _type: 'servicePage',
      _id: 'eu-ai-act-monitoring-systems',
      title: 'EU AI Act Monitoring Systems',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eu-ai-act/eu-ai-act-ai-risk-classification/eu-ai-act-monitoring-systems'
      },
      parent: {
        _type: 'reference',
        _ref: 'eu-ai-act-ai-risk-classification'
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
        title: 'EU AI Act Monitoring Systems | ADVISORI',
        description: 'Implementieren Sie effektive Monitoring-Systeme für den EU AI Act. Kontinuierliche Überwachung von KI-Systemen zur Sicherstellung der Compliance und Risikominimierung.',
        keywords: 'EU AI Act, AI Monitoring, KI-Überwachung, Compliance Monitoring, AI Risk Management, KI-Governance, Algorithmic Accountability'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EU AI Act Monitoring Systems'
        },
        tagline: 'Kontinuierliche Überwachung und Compliance-Sicherung für KI-Systeme',
        heading: 'EU AI Act Monitoring Systems',
        description: 'Implementieren Sie robuste Monitoring-Systeme für Ihre KI-Anwendungen gemäß EU AI Act. Kontinuierliche Überwachung, automatisierte Compliance-Checks und proaktive Risikominimierung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Kontinuierliche Compliance-Überwachung gemäß EU AI Act Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte Erkennung von Abweichungen und Compliance-Verstößen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Proaktive Risikominimierung durch Echtzeit-Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Umfassende Dokumentation und Audit-Trail für Regulatoren'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EU AI Act Monitoring Systems',
        description: 'Die EU AI Act verlangt eine kontinuierliche Überwachung von KI-Systemen, um deren ordnungsgemäße Funktion und Compliance sicherzustellen. Wir unterstützen Sie bei der Implementierung fortschrittlicher Monitoring-Systeme, die automatisierte Compliance-Checks, Risikobewertungen und umfassende Dokumentation bieten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Design und Implementierung von KI-Monitoring-Architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Automatisierte Compliance-Überwachung und Alert-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Performance- und Bias-Monitoring für KI-Modelle'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Dokumentations- und Reporting-Systeme für Aufsichtsbehörden'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration in bestehende IT-Infrastrukturen und Governance-Prozesse'
          }
        ],
        alert: {
          title: 'Regulatorischer Hinweis',
          content: 'Artikel 61 der EU AI Act verlangt ein Post-Market-Monitoring-System für Hochrisiko-KI-Systeme. Fehlende oder unzureichende Monitoring-Systeme können zu erheblichen Bußgeldern und operativen Einschränkungen führen.'
        },
        whyUs: {
          title: 'Warum ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in KI-Governance und EU AI Act Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Monitoring-Frameworks und technische Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxiserprobte Lösungen für verschiedene KI-Anwendungsbereiche'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung bei sich ändernden regulatorischen Anforderungen'
            }
          ]
        },
        additionalInfo: 'Effektive Monitoring-Systeme können das Compliance-Risiko um bis zu 85% reduzieren und gleichzeitig die Performance und Vertrauenswürdigkeit Ihrer KI-Systeme erheblich verbessern.',
        serviceDescription: 'Wir bieten Ihnen umfassende Lösungen für die Implementierung und den Betrieb von Monitoring-Systemen, die den Anforderungen der EU AI Act entsprechen und gleichzeitig Ihre KI-Systeme optimieren.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Monitoring-Architektur Design und Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Automatisierte Compliance-Überwachung und Alerting'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'KI-Performance und Bias-Detection Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Audit-Trail und Dokumentations-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Incident-Response und Remediation-Prozesse'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Implementierungsansatz',
        description: 'Wir entwickeln maßgeschneiderte Monitoring-Systeme, die nahtlos in Ihre bestehende Infrastruktur integriert werden und maximale Compliance-Sicherheit bieten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse Ihrer KI-Landschaft und regulatorischen Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design der Monitoring-Architektur und Technologie-Stack'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung und Integration in bestehende Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Testing, Validierung und Optimierung der Monitoring-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Schulung und kontinuierliche Unterstützung Ihrer Teams'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir ein robustes Monitoring-System implementiert, das uns vollständige Transparenz und Kontrolle über unsere KI-Systeme gibt. Die automatisierte Compliance-Überwachung hat unsere Effizienz erheblich gesteigert und das Vertrauen in unsere KI-Anwendungen gestärkt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Compliance Monitoring & Alerting',
          description: 'Automatisierte Überwachung der EU AI Act Compliance mit sofortigen Benachrichtigungen bei Abweichungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Real-time Compliance Status Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Automatisierte Alert-Systeme bei Verstößen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Compliance-Dashboard und Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Regulatorische Update-Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'KI-Performance & Bias Monitoring',
          description: 'Kontinuierliche Überwachung der KI-Systemleistung und Erkennung von Bias und Diskriminierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Automated Model Performance Tracking'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Bias Detection und Fairness Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Data Drift und Model Degradation Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Explainability und Transparency Metrics'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(euAiActMonitoringSystemsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EU AI Act Monitoring Systems page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
