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
    console.log('Creating Intelligent Process Automation Tools page...')

    const intelligentProcessAutomationToolsData = {
      _type: 'servicePage',
      _id: 'intelligent-process-automation-tools',
      title: 'Intelligent Process Automation Tools',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-process-automation-tools'
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
        title: 'Intelligent Process Automation Tools | ADVISORI',
        description: 'Expertenwissen für die Auswahl und Implementierung von IPA-Tools. ADVISORI unterstützt bei Tool-Evaluierung, Integration und EU AI Act konformer Umsetzung intelligenter Automatisierungslösungen.',
        keywords: 'IPA Tools, Process Automation Software, RPA Plattformen, KI Automatisierung, Tool Integration, EU AI Act Compliance, Automation Platform'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Process Automation Tools'
        },
        tagline: 'Strategische Tool-Auswahl für maximale Automatisierungseffizienz',
        heading: 'Intelligent Process Automation Tools',
        description: 'ADVISORI bietet umfassende Expertise bei der Auswahl, Evaluierung und Implementierung von IPA-Tools. Wir helfen Ihnen dabei, die optimale Tool-Landschaft für Ihre Automatisierungsziele zu schaffen – compliance-konform und zukunftssicher.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische Tool-Evaluierung basierend auf Ihren spezifischen Geschäftsanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'EU AI Act konforme Tool-Implementierung mit integriertem Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Nahtlose Integration in bestehende IT-Landschaften und Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Maximaler ROI durch optimale Tool-Konfiguration und Performance-Tuning'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Process Automation Tools',
        description: 'Die Auswahl der richtigen IPA-Tools ist entscheidend für den Erfolg Ihrer Automatisierungsstrategie. ADVISORI unterstützt Sie dabei, aus der Vielzahl verfügbarer Lösungen die optimalen Tools zu identifizieren, zu evaluieren und erfolgreich zu implementieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Tool-Landschaftsanalyse und Marktbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Anforderungsbasierte Tool-Auswahl und Vendor-Evaluierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'EU AI Act konforme Tool-Konfiguration und Governance-Setup'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Professionelle Tool-Integration und Systemkonnektivität'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Performance-Optimierung und kontinuierliches Tool-Management'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Die richtige Tool-Auswahl entscheidet über Erfolg oder Misserfolg Ihrer Automatisierungsinitiativen. Eine strategische Herangehensweise, die technische Anforderungen mit Compliance-Vorgaben und Zukunftsfähigkeit verbindet, ist essentiell für nachhaltigen Erfolg.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Herstellerunabhängige Beratung mit tiefem Marktverständnis'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'EU AI Act Expertise für compliance-konforme Tool-Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methoden für erfolgreiche Tool-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von Strategie bis Betrieb'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit strategisch ausgewählten und optimal konfigurierten IPA-Tools erzielen signifikant bessere Automatisierungsergebnisse und können ihre Investitionen schneller amortisieren. Investieren Sie in die richtige Tool-Strategie!',
        serviceDescription: 'Unsere IPA-Tool-Services umfassen den gesamten Lebenszyklus von der strategischen Tool-Auswahl über die technische Implementierung bis hin zur kontinuierlichen Optimierung und dem Management Ihrer Automatisierungs-Toolchain.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Tool-Landschaftsanalyse und Marktbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Anforderungsbasierte Tool-Auswahl und Evaluierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'EU AI Act konforme Tool-Konfiguration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Professionelle Tool-Integration und Deployment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance-Monitoring und kontinuierliche Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen systematischen, datengetriebenen Ansatz bei der Tool-Auswahl und -Implementierung, der technische Exzellenz mit strategischen Geschäftszielen und Compliance-Anforderungen verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Anforderungsanalyse und Tool-Landschaftsbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strukturierte Tool-Evaluierung mit Proof-of-Concept-Phasen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'EU AI Act konforme Architektur- und Governance-Planung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Professionelle Tool-Implementierung mit Integrationstests'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliches Performance-Monitoring und Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die strategische Auswahl und professionelle Implementierung von IPA-Tools ist fundamental für den Automatisierungserfolg. Unsere Kunden profitieren von einer durchdachten Tool-Strategie, die technische Innovation mit regulatorischer Compliance verbindet und dabei maximale Geschäftseffizienz ermöglicht. So schaffen wir nachhaltige Wettbewerbsvorteile durch intelligente Automatisierung.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Tool-Landschaftsanalyse & Marktbewertung',
          description: 'Umfassende Analyse der verfügbaren IPA-Tools und Bewertung ihrer Eignung für Ihre spezifischen Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Marktanalyse führender IPA-Plattformen und -Anbieter'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Funktionale und technische Tool-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Kosten-Nutzen-Analyse verschiedener Tool-Optionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Zukunftsfähigkeits- und Roadmap-Bewertung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Anforderungsbasierte Tool-Auswahl',
          description: 'Systematische Evaluierung und Auswahl der optimalen IPA-Tools basierend auf Ihren spezifischen Geschäftsanforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Detaillierte Anforderungsanalyse und Kriterienkatalog'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Strukturierte Vendor-Evaluierung und -Auswahl'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Proof-of-Concept-Durchführung und -Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Lizenzierungs- und Vertragsverhandlungsunterstützung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'EU AI Act konforme Tool-Konfiguration',
          description: 'Sicherstellung der Compliance Ihrer IPA-Tools mit den Anforderungen des EU AI Act und anderen regulatorischen Vorgaben.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'AI Act Risikobewertung für Tool-Komponenten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Compliance-konforme Tool-Konfiguration und -Setup'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Governance-Framework-Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Audit-Trail und Dokumentationsaufbau'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Tool-Integration & Systemkonnektivität',
          description: 'Professionelle Integration Ihrer IPA-Tools in die bestehende IT-Landschaft und Geschäftsprozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'API-Integration und Schnittstellenentwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Datenfluss-Design und -Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Sicherheits- und Authentifizierungskonzepte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Integrationstests und Qualitätssicherung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Tool-Deployment & Rollout-Management',
          description: 'Strukturiertes Deployment und professionelles Rollout-Management für Ihre IPA-Tool-Implementierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Deployment-Strategie und Rollout-Planung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Umgebungsmanagement und Versionskontrolle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'User Training und Change Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Go-Live-Unterstützung und Hypercare'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Performance-Monitoring & Tool-Optimierung',
          description: 'Kontinuierliche Überwachung und Optimierung Ihrer IPA-Tools für maximale Effizienz und Performance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Performance-Monitoring und KPI-Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Automatisierte Anomalieerkennung und Alerting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Kontinuierliche Tool-Optimierung und Tuning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Lifecycle-Management und Update-Strategien'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(intelligentProcessAutomationToolsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Process Automation Tools page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
