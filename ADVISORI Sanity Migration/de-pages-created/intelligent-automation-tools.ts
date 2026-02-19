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
    console.log('Creating Intelligent Automation Tools page...')

    const intelligentAutomationToolsData = {
      _type: 'servicePage',
      _id: 'intelligent-automation-tools',
      title: 'Intelligent Automation Tools',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/prozessautomatisierung/intelligent-automation/intelligent-automation-tools'
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
        title: 'Intelligent Automation Tools | ADVISORI',
        description: 'Expertenwissen für die strategische Auswahl und Implementierung von Intelligent Automation Tools. ADVISORI unterstützt bei Tool-Evaluierung, EU AI Act konformer Integration und Performance-Optimierung.',
        keywords: 'Intelligent Automation Tools, IPA Tools, Automation Software, RPA Plattformen, KI Automatisierung, Tool Integration, EU AI Act Compliance, Automation Platform'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Intelligent Automation Tools'
        },
        tagline: 'Strategische Tool-Auswahl für maximale Automatisierungseffizienz',
        heading: 'Intelligent Automation Tools',
        description: 'ADVISORI bietet umfassende Expertise bei der strategischen Auswahl, Evaluierung und Implementierung von Intelligent Automation Tools. Wir helfen Ihnen dabei, die optimale Tool-Landschaft für Ihre Automatisierungsziele zu schaffen – compliance-konform, zukunftssicher und maximal effizient.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische Tool-Evaluierung basierend auf spezifischen Geschäftsanforderungen und Zukunftsfähigkeit'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'EU AI Act konforme Tool-Implementierung mit integriertem Risikomanagement und Governance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Nahtlose Integration in bestehende IT-Landschaften ohne Geschäftsunterbrechung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Maximaler ROI durch optimale Tool-Konfiguration und kontinuierliche Performance-Optimierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Intelligent Automation Tools',
        description: 'Die Auswahl der richtigen Intelligent Automation Tools ist entscheidend für den Erfolg Ihrer Automatisierungsstrategie. ADVISORI unterstützt Sie dabei, aus der Vielzahl verfügbarer Lösungen die optimalen Tools zu identifizieren, strategisch zu evaluieren und erfolgreich zu implementieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Tool-Landschaftsanalyse und strategische Marktbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Anforderungsbasierte Tool-Auswahl und strukturierte Vendor-Evaluierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'EU AI Act konforme Tool-Konfiguration und Governance-Framework-Setup'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Professionelle Tool-Integration und nahtlose Systemkonnektivität'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Performance-Optimierung und kontinuierliches Tool-Lifecycle-Management'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Die strategische Tool-Auswahl entscheidet über Erfolg oder Misserfolg Ihrer Automatisierungsinitiativen. Eine durchdachte Herangehensweise, die technische Anforderungen mit Compliance-Vorgaben und Zukunftsfähigkeit verbindet, ist essentiell für nachhaltigen Automatisierungserfolg.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Herstellerunabhängige Beratung mit tiefem Marktverständnis und Technologie-Expertise'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'EU AI Act Spezialisierung für compliance-konforme Tool-Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methoden für erfolgreiche Tool-Integration und Change Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von strategischer Planung bis operativem Betrieb'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit strategisch ausgewählten und optimal konfigurierten Intelligent Automation Tools erzielen signifikant bessere Automatisierungsergebnisse und können ihre Investitionen schneller amortisieren. Investieren Sie in die richtige Tool-Strategie für nachhaltigen Erfolg!',
        serviceDescription: 'Unsere Intelligent Automation Tool Services umfassen den gesamten Lebenszyklus von der strategischen Tool-Auswahl über die technische Implementierung bis hin zur kontinuierlichen Optimierung und dem professionellen Management Ihrer Automatisierungs-Toolchain.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Tool-Landschaftsanalyse und Marktbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Anforderungsbasierte Tool-Auswahl und Vendor-Evaluierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'EU AI Act konforme Tool-Konfiguration und Governance-Setup'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Professionelle Tool-Integration und nahtloses Deployment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance-Monitoring und kontinuierliche Tool-Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen systematischen, datengetriebenen Ansatz bei der Tool-Auswahl und -Implementierung, der technische Exzellenz mit strategischen Geschäftszielen und regulatorischen Compliance-Anforderungen optimal verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Anforderungsanalyse und strategische Tool-Landschaftsbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strukturierte Tool-Evaluierung mit praktischen Proof-of-Concept-Phasen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'EU AI Act konforme Architektur- und Governance-Planung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Professionelle Tool-Implementierung mit umfassenden Integrationstests'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliches Performance-Monitoring und proaktive Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die strategische Auswahl und professionelle Implementierung von Intelligent Automation Tools ist fundamental für den Automatisierungserfolg moderner Unternehmen. Unsere Kunden profitieren von einer durchdachten Tool-Strategie, die technische Innovation mit regulatorischer Compliance verbindet und dabei maximale Geschäftseffizienz ermöglicht. So schaffen wir nachhaltige Wettbewerbsvorteile durch intelligente Tool-Orchestrierung.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische Tool-Landschaftsanalyse',
          description: 'Umfassende Analyse der verfügbaren Intelligent Automation Tools und strategische Bewertung ihrer Eignung für Ihre spezifischen Geschäftsanforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Marktanalyse führender Automation-Plattformen und Technologie-Anbieter'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Funktionale und technische Tool-Bewertung mit Zukunftsfähigkeitsanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Umfassende Kosten-Nutzen-Analyse verschiedener Tool-Optionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Roadmap-Bewertung und strategische Technologie-Entwicklungsanalyse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Anforderungsbasierte Tool-Auswahl',
          description: 'Systematische Evaluierung und strategische Auswahl der optimalen Intelligent Automation Tools basierend auf Ihren spezifischen Geschäftsanforderungen und Zukunftszielen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Detaillierte Anforderungsanalyse und strukturierter Kriterienkatalog'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Strukturierte Vendor-Evaluierung und strategische Anbieter-Auswahl'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Praktische Proof-of-Concept-Durchführung und Ergebnisbewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Lizenzierungs- und Vertragsverhandlungsunterstützung mit Kostenoptimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'EU AI Act konforme Tool-Konfiguration',
          description: 'Sicherstellung der vollständigen Compliance Ihrer Intelligent Automation Tools mit den Anforderungen des EU AI Act und anderen regulatorischen Vorgaben.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Umfassende AI Act Risikobewertung für alle Tool-Komponenten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Compliance-konforme Tool-Konfiguration und sicheres Setup'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Governance-Framework-Implementierung mit Audit-Mechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Vollständiger Audit-Trail und regulatorische Dokumentationsstrukturen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Tool-Integration & Systemkonnektivität',
          description: 'Professionelle Integration Ihrer Intelligent Automation Tools in die bestehende IT-Landschaft und nahtlose Anbindung an Geschäftsprozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'API-Integration und maßgeschneiderte Schnittstellenentwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Intelligentes Datenfluss-Design und robuste Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Umfassende Sicherheits- und Authentifizierungskonzepte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Extensive Integrationstests und systematische Qualitätssicherung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Tool-Deployment & Rollout-Management',
          description: 'Strukturiertes Deployment und professionelles Rollout-Management für Ihre Intelligent Automation Tool-Implementierung mit Change Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Strategische Deployment-Planung und strukturiertes Rollout-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Professionelles Umgebungsmanagement und Versionskontrolle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Umfassendes User Training und strategisches Change Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Go-Live-Unterstützung und intensive Hypercare-Betreuung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Performance-Monitoring & Tool-Optimierung',
          description: 'Kontinuierliche Überwachung und proaktive Optimierung Ihrer Intelligent Automation Tools für maximale Effizienz und nachhaltige Performance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Real-time Performance-Monitoring und intelligente KPI-Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Automatisierte Anomalieerkennung und proaktives Alerting-System'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Kontinuierliche Tool-Optimierung und Performance-Tuning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Strategisches Lifecycle-Management und Update-Strategien'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(intelligentAutomationToolsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Intelligent Automation Tools page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
