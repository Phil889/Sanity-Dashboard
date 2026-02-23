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
    console.log('Creating Intelligent Test Automation page...')

    const intelligentTestAutomationData = {
      _type: 'servicePage',
      _id: 'intelligent-test-automation',
      title: 'Intelligent Test Automation',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-test-automation'
      },
      parent: {
        _type: 'reference',
        _ref: 'intelligent-automation'
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
        title: 'Intelligent Test Automation - KI-gestützte Testautomatisierung & Continuous Testing | ADVISORI',
        description: 'Umfassende Intelligent Test Automation für Enterprise-Qualitätssicherung. KI-gestützte Testgenerierung, Continuous Testing Pipelines, DevOps Integration und EU AI Act konforme Test-Governance für skalierbare Qualitätsautomatisierung.',
        keywords: 'Intelligent Test Automation, KI Testautomatisierung, Continuous Testing, DevOps Testing, Test Orchestration, Quality Assurance, EU AI Act, Digital Transformation, Test Governance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Test Automation - KI-gestützte Testautomatisierung für strategische Qualitätssicherung'
        },
        tagline: 'Enterprise Intelligent Test Automation für strategische Qualitätssicherung und DevOps-Excellence',
        heading: 'Intelligent Test Automation',
        description: 'Intelligent Test Automation revolutioniert Enterprise-Qualitätssicherung durch KI-gestützte Testgenerierung, adaptive Testorchestrierung und nahtlose DevOps-Integration. Als strategische Komponente moderner Software-Entwicklung transformiert sie traditionelle Testansätze in intelligente, selbstlernende Qualitätssysteme, die kontinuierliche Delivery-Excellence mit umfassender Test-Coverage harmonisieren und dabei EU AI Act Compliance gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'KI-gestützte Testgenerierung mit adaptiver Test-Coverage und intelligenter Szenario-Erstellung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Continuous Testing-Integration für DevOps-Pipelines und Agile Development-Zyklen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Selbstlernende Test-Orchestrierung mit automatischer Fehleranalyse und Root-Cause-Detection'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'EU AI Act konforme Test-Governance und Enterprise-Compliance für KI-gestützte Qualitätssicherung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Test Automation - KI-gestützte Qualitätssicherung für Enterprise-Excellence',
        description: 'Intelligent Test Automation etabliert KI-gestützte Qualitätssicherung als strategischen Enabler für Enterprise-weite Software-Excellence. Sie transformiert traditionelle Testansätze durch intelligente Automatisierung, adaptive Testgenerierung und nahtlose DevOps-Integration in ein kohärentes, selbstlernendes Qualitätssystem, das kontinuierliche Delivery-Geschwindigkeit mit umfassender Test-Coverage und Compliance-Sicherheit vereint.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'KI-gestützte Testgenerierung erstellt automatisch umfassende Testszenarien basierend auf Code-Analyse und User-Behavior-Patterns'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Continuous Testing-Integration ermöglicht nahtlose Qualitätssicherung in DevOps-Pipelines und Agile Development-Zyklen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Adaptive Test-Orchestrierung optimiert kontinuierlich Testausführung, Ressourcenallokation und Coverage-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Intelligente Fehleranalyse und Root-Cause-Detection beschleunigen Debugging und Quality-Improvement-Zyklen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Enterprise-Test-Governance und EU AI Act Compliance durch integrierte Monitoring-, Audit- und Compliance-Funktionen'
          }
        ],
        alert: {
          title: 'Intelligent Test Automation als strategischer Quality-Enabler',
          content: 'Intelligent Test Automation wird zum zentralen Nervensystem für Enterprise-Qualitätssicherung, das nicht nur operative Test-Effizienz maximiert, sondern auch als strategischer Enabler für Continuous Delivery-Excellence und digitale Transformation fungiert.'
        },
        whyUs: {
          title: 'Warum Intelligent Test Automation mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Test-Automation-Expertise von KI-Integration bis DevOps-Orchestrierung und Enterprise-Skalierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'EU AI Act konforme Beratung für sichere und compliant KI-gestützte Testautomatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Enterprise-Methodologien für skalierbare Test-Automation-Transformation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Innovation durch KI-Enhancement und Continuous Testing-Optimierung'
            }
          ]
        },
        additionalInfo: 'Intelligent Test Automation ermöglicht es Organisationen, die volle Power moderner KI-Technologien für strategische Qualitätssicherung zu nutzen. Die richtige Test-Automation-Strategie wird zum Wettbewerbsvorteil in einer zunehmend agilen und qualitätskritischen Software-Welt.',
        serviceDescription: 'Unser Intelligent Test Automation Service umfasst die vollständige Transformation traditioneller Testansätze zu KI-gestützten, adaptiven Qualitätssystemen. Wir entwickeln maßgeschneiderte Test-Automation-Architekturen, die perfekt zu Ihren Development-Prozessen, Technologie-Stacks und Quality-Anforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'KI-gestützte Testgenerierung und adaptive Test-Coverage für umfassende Qualitätssicherung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Continuous Testing-Integration für DevOps-Pipelines und Agile Development-Excellence'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Intelligente Test-Orchestrierung mit selbstlernender Optimierung und Ressourcen-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Enterprise-Test-Frameworks und Multi-Platform-Testing für skalierbare Qualitätsautomatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Test-Governance und EU AI Act Compliance-Management für sichere KI-gestützte Qualitätssicherung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zu Intelligent Test Automation',
        description: 'Wir verfolgen einen ganzheitlichen und strategischen Ansatz zu Intelligent Test Automation, der moderne KI-Technologien optimal nutzt und gleichzeitig nachhaltige Quality-Excellence ermöglicht.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Test-Assessment und Quality-Architektur-Analyse für strategische Test-Automation-Planung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategic Test-Automation-Roadmap-Entwicklung mit KI-Integration und Continuous Testing-Vision'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Test-Automation-Implementierung mit kontinuierlicher Optimierung und DevOps-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Change Management und Team-Enablement für erfolgreiche Test-Automation-Adoption'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Test-Evolution durch Monitoring, Analytics und KI-Enhancement für kontinuierliche Quality-Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Intelligent Test Automation ist das strategische Herzstück moderner Software-Qualitätssicherung. Wir entwickeln KI-gestützte Test-Ökosysteme, die nicht nur traditionelle Testansätze revolutionieren, sondern auch als zentrale Enabler für Continuous Delivery-Excellence und digitale Transformation fungieren – dabei stets EU AI Act konform und zukunftsorientiert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'KI-gestützte Testgenerierung und Adaptive Coverage',
          description: 'Intelligente Testgenerierung durch KI-Algorithmen für umfassende, adaptive Test-Coverage und automatische Szenario-Erstellung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Machine Learning-basierte Testgenerierung analysiert Code-Strukturen und generiert automatisch umfassende Testszenarien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Adaptive Test-Coverage-Optimierung passt kontinuierlich Teststrategien an Code-Änderungen und Risk-Patterns an'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Behavior-Driven Test-Creation nutzt User-Journey-Analyse für realistische, geschäftskritische Testszenarien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Intelligent Test-Data-Generation erstellt automatisch realistische, DSGVO-konforme Testdaten für alle Szenarien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Continuous Testing und DevOps-Integration',
          description: 'Nahtlose Integration von Intelligent Test Automation in DevOps-Pipelines für kontinuierliche Qualitätssicherung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'CI/CD-Pipeline-Integration ermöglicht automatische Testausführung bei jedem Code-Commit und Deployment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Parallel Test-Execution-Orchestrierung optimiert Testlaufzeiten durch intelligente Ressourcenverteilung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Quality Gates und Automated Decision-Making blockieren automatisch fehlerhafte Deployments'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Real-time Test-Feedback und Developer-Integration beschleunigen Quality-Improvement-Zyklen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Intelligente Test-Orchestrierung und Optimierung',
          description: 'Selbstlernende Test-Orchestrierung für optimale Ressourcennutzung und kontinuierliche Performance-Verbesserung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'AI-powered Test-Scheduling optimiert Testausführung basierend auf historischen Daten und Ressourcenverfügbarkeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Dynamic Test-Prioritization fokussiert kritische Tests basierend auf Code-Changes und Business-Impact'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Self-Healing Test-Maintenance repariert automatisch fehlerhafte Tests durch KI-gestützte Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Performance-Analytics und Bottleneck-Detection optimieren kontinuierlich Test-Execution-Strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Enterprise Test-Frameworks und Multi-Platform-Testing',
          description: 'Skalierbare Test-Automation-Frameworks für Enterprise-weite Qualitätssicherung über alle Plattformen hinweg.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Cross-Platform Test-Automation unterstützt Web, Mobile, API und Desktop-Applications in einheitlichen Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Microservices Test-Orchestrierung gewährleistet End-to-End-Testing in komplexen, verteilten Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Cloud-native Test-Infrastructure ermöglicht elastische Skalierung und globale Test-Execution'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Enterprise Test-Asset-Management zentralisiert Test-Artefakte, Scripts und Dokumentation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Intelligente Fehleranalyse und Quality Intelligence',
          description: 'KI-gestützte Fehleranalyse und Quality Intelligence für proaktive Qualitätssicherung und Root-Cause-Detection.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Automated Root-Cause-Analysis identifiziert systematisch Fehlerursachen und schlägt Lösungsansätze vor'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Predictive Quality-Analytics antizipieren potenzielle Qualitätsprobleme vor ihrer Manifestation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Pattern Recognition-Algorithmen identifizieren wiederkehrende Fehlertypen und Optimierungspotenziale'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Quality Metrics-Dashboard bietet Real-time-Einblicke in Test-Performance und Quality-Trends'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Test-Governance und Compliance Management',
          description: 'Umfassende Test-Governance-Frameworks für nachhaltige Quality-Strategien und EU AI Act Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Test-Governance-Framework etabliert zentrale Standards, Richtlinien und Best Practices für alle Test-Aktivitäten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'EU AI Act Compliance-Management für KI-gestützte Test-Komponenten und automatisierte Quality-Entscheidungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Test-Audit-Trails und Compliance-Reporting gewährleisten vollständige Nachverfolgbarkeit aller Test-Aktivitäten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Quality-Risk-Management identifiziert und mitigiert systematisch alle qualitätsbezogenen Risiken'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(intelligentTestAutomationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Test Automation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
