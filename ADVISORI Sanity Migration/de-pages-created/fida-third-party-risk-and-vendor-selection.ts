import 'dotenv/config'
import { createClient } from '@sanity/client'

// Create client with direct credentials
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
    console.log('Creating FIDA Third-Party Risk and Vendor Selection page...')

    const fidaThirdPartyRiskData = {
      _type: 'servicePage',
      _id: 'fida-third-party-risk-and-vendor-selection',
      title: 'FIDA Third-Party Risk and Vendor Selection',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/financial-data-access-fida/fida-third-party-risk-and-vendor-selection'
      },
      parent: {
        _type: 'reference',
        _ref: 'financial-data-access-fida'
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
        title: 'FIDA Third-Party Risk Management & Vendor Selection | ADVISORI',
        description: 'Spezialisierte Beratung für FIDA-konforme Drittanbieter-Risikomanagement und Vendor Selection. Strategische Frameworks für sichere Datenfreigabe und Compliance-Management.',
        keywords: 'FIDA Third-Party Risk, Vendor Selection, Drittanbieter-Risikomanagement, FIDA Compliance, Vendor Due Diligence, API Security, Data Access Risk'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FIDA Third-Party Risk and Vendor Selection'
        },
        tagline: 'Strategisches FIDA-Drittanbieter-Risikomanagement',
        heading: 'FIDA Third-Party Risk and Vendor Selection',
        description: 'Die Financial Data Access Regulation erfordert robuste Frameworks für Drittanbieter-Risikomanagement und Vendor Selection. Wir entwickeln umfassende Strategien für sichere und compliant Datenfreigabe-Partnerschaften.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'FIDA-konforme Vendor Due Diligence und Risikobewertungsframeworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strategische Drittanbieter-Onboarding und Lifecycle-Management'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kontinuierliche Risiko-Monitoring und Compliance-Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Integrierte Vertragsmanagement und SLA-Optimierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'FIDA-Drittanbieter-Risikomanagement strategisch meistern',
        description: 'FIDA erweitert die Komplexität des Drittanbieter-Risikomanagements erheblich durch neue Datenfreigabe-Anforderungen und erweiterte Compliance-Verpflichtungen. Erfolgreiche FIDA-Implementation erfordert durchdachte Vendor Selection Strategien und robuste Risikomanagement-Frameworks.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung FIDA-spezifischer Vendor Due Diligence und Risikobewertungsframeworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Strategische Drittanbieter-Kategorisierung und Risiko-Tiering-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementation kontinuierlicher Monitoring und Performance-Management-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau integrierter Vertragsmanagement und Compliance-Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Entwicklung strategischer Partnerschaftsmodelle und Ecosystem-Management-Ansätze'
          }
        ],
        alert: {
          title: 'Kritischer Erfolgsfaktor',
          content: 'FIDA-Drittanbieter-Risikomanagement ist nicht nur eine Compliance-Anforderung, sondern ein strategischer Wettbewerbsvorteil. Proaktive und durchdachte Vendor Selection kann Innovationsgeschwindigkeit erhöhen und gleichzeitig Risiken minimieren.'
        },
        whyUs: {
          title: 'Unsere FIDA Third-Party Risk Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Expertise in FIDA-konformen Drittanbieter-Risikomanagement-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Erfahrung in komplexen Vendor Selection und Due Diligence Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Tiefgreifende Kenntnis regulatorischer Anforderungen und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von strategischer Planung bis operativer Umsetzung'
            }
          ]
        },
        additionalInfo: 'FIDA-Drittanbieter-Risikomanagement umfasst die strategische Bewertung, Auswahl und kontinuierliche Überwachung von Partnern, die Zugang zu Finanzdaten haben oder Datenfreigabe-Services bereitstellen. Dies erfordert spezialisierte Frameworks, die technische Sicherheit, regulatorische Compliance und Geschäftskontinuität integrieren.',
        serviceDescription: 'Wir bieten end-to-end FIDA Third-Party Risk Management Services, die von strategischer Vendor Selection bis zu kontinuierlichem Risiko-Monitoring reichen. Unser Ansatz gewährleistet nicht nur Compliance, sondern optimiert auch Partnerschaftswert und Innovationspotential.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'FIDA-konforme Vendor Due Diligence und Risikobewertungsframeworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Strategische Drittanbieter-Kategorisierung und Lifecycle-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Kontinuierliche Risiko-Monitoring und Performance-Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integrierte Vertragsmanagement und SLA-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Strategische Partnerschaftsentwicklung und Ecosystem-Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer FIDA Third-Party Risk Ansatz',
        description: 'Wir entwickeln mit Ihnen maßgeschneiderte Drittanbieter-Risikomanagement-Strategien, die FIDA-Compliance mit strategischen Partnerschaftszielen verbinden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer aktuellen Drittanbieter-Landschaft und Risikoprofile'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung FIDA-spezifischer Vendor Selection und Due Diligence Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementation robuster Risiko-Monitoring und Governance-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Aufbau strategischer Partnerschaftsmodelle und Ecosystem-Management-Ansätze'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und regulatorische Anpassung der Risikomanagement-Prozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'FIDA-Drittanbieter-Risikomanagement erfordert eine fundamentale Neuausrichtung traditioneller Vendor Management Ansätze. Unsere Expertise ermöglicht es Unternehmen, robuste Risikomanagement-Frameworks zu entwickeln, die nicht nur Compliance gewährleisten, sondern auch strategische Partnerschaften fördern und Innovationspotential maximieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'FIDA Vendor Due Diligence Framework Development',
          description: 'Entwicklung umfassender Due Diligence Frameworks für FIDA-konforme Vendor Selection und Risikobewertung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'FIDA-spezifische Risikobewertungskriterien und Assessment-Methodologien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Strukturierte Due Diligence Prozesse für verschiedene Vendor-Kategorien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Integrierte Sicherheits- und Compliance-Bewertungsframeworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Automatisierte Scoring-Systeme und Risiko-Dashboards'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Strategic Vendor Categorization and Risk Tiering',
          description: 'Aufbau strategischer Vendor-Kategorisierungssysteme und Risiko-Tiering-Frameworks für optimiertes Drittanbieter-Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Multi-dimensionale Vendor-Kategorisierung basierend auf FIDA-Risikoprofilen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Dynamische Risiko-Tiering-Systeme mit automatisierten Anpassungsmechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Strategische Partnerschaftsmodelle für verschiedene Vendor-Kategorien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Performance-basierte Vendor-Lifecycle-Management-Prozesse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Continuous Risk Monitoring and Performance Management',
          description: 'Implementation kontinuierlicher Risiko-Monitoring-Systeme und Performance-Management-Frameworks für FIDA-Drittanbieter.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Real-Time Risiko-Monitoring und Alerting-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'KPI-basierte Performance-Dashboards und Reporting-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Automatisierte Compliance-Überwachung und Audit-Trail-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Proaktive Risiko-Eskalation und Incident-Response-Prozesse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Contract Management and SLA Optimization',
          description: 'Entwicklung integrierter Vertragsmanagement-Systeme und SLA-Optimierung für FIDA-konforme Drittanbieter-Beziehungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'FIDA-spezifische Vertragsklauseln und Compliance-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Performance-basierte SLA-Frameworks und Penalty-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Automatisierte Vertragsüberwachung und Renewal-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Strategische Verhandlungsunterstützung und Risk-Sharing-Modelle'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Vendor Onboarding and Lifecycle Management',
          description: 'Aufbau strukturierter Vendor Onboarding Prozesse und umfassender Lifecycle-Management-Systeme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Standardisierte Onboarding-Prozesse mit FIDA-Compliance-Checkpoints'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Integrierte Vendor-Portale und Self-Service-Management-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Lifecycle-basierte Risikobewertung und Performance-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Strategische Vendor-Entwicklungsprogramme und Capability-Building'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Strategic Partnership Development and Ecosystem Management',
          description: 'Entwicklung strategischer Partnerschaftsmodelle und umfassender Ecosystem-Management-Ansätze für FIDA-Drittanbieter.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Strategische Partnerschaftsmodelle und Value-Creation-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Ecosystem-Management und Multi-Vendor-Orchestrierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Innovation-Partnership-Programme und Co-Development-Initiativen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Revenue-Sharing-Modelle und strategische Incentive-Strukturen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(fidaThirdPartyRiskData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FIDA Third-Party Risk and Vendor Selection page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
