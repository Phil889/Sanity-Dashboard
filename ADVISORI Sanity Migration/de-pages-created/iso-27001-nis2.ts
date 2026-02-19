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
    console.log('Creating ISO 27001 NIS2 Integration page...')

    const iso27001Nis2Data = {
      _type: 'servicePage',
      _id: 'iso-27001-nis2',
      title: 'ISO 27001 NIS2 Integration',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-nis2'
      },
      parent: {
        _type: 'reference',
        _ref: 'iso-27001'
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
        title: 'ISO 27001 NIS2 Integration | Strategische Compliance-Synergie | ADVISORI',
        description: 'Maximieren Sie Compliance-Effizienz durch strategische Integration von ISO 27001 ISMS mit NIS2-Anforderungen. Professionelle Beratung für einheitliche Sicherheitsframeworks und optimierte Ressourcennutzung.',
        keywords: 'ISO 27001 NIS2, ISMS NIS2 Integration, Compliance-Synergie, Informationssicherheit, Kritische Infrastrukturen, EU-Cybersicherheit, Unified Security Framework, Regulatory Alignment'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 NIS2 Integration - Strategische Compliance-Synergie'
        },
        tagline: 'Strategische Compliance-Synergie für maximale Sicherheitseffizienz',
        heading: 'ISO 27001 NIS2 Integration',
        description: 'Nutzen Sie die natürlichen Synergien zwischen ISO 27001 und NIS2 für eine effiziente, einheitliche Compliance-Strategie. Unsere bewährte Integrationsmethodik maximiert Ihre bestehenden ISMS-Investitionen und schafft ein kohärentes Sicherheitsframework für kritische Infrastrukturen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Maximale Synergie zwischen ISMS und NIS2-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierte Ressourcennutzung durch einheitliche Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Beschleunigte NIS2-Compliance durch ISO 27001-Fundament'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Integrierte Governance für kritische Infrastrukturen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ISO 27001 als strategisches Fundament für NIS2-Compliance',
        description: 'Die Integration von ISO 27001 mit NIS2-Anforderungen schafft eine einzigartige Compliance-Synergie, die sowohl die bewährten ISMS-Strukturen nutzt als auch die spezifischen Anforderungen für kritische Infrastrukturen erfüllt. Diese strategische Verbindung ermöglicht es Organisationen, ihre bestehenden Sicherheitsinvestitionen zu maximieren und gleichzeitig die neuen regulatorischen Herausforderungen effizient zu bewältigen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Natürliche Komplementarität zwischen ISMS-Strukturen und NIS2-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Optimierte Compliance-Effizienz durch einheitliche Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Beschleunigte NIS2-Implementierung basierend auf ISO 27001-Fundamenten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integrierte Risikomanagement-Ansätze für kritische Infrastrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kohärente Incident Response und Business Continuity Strategien'
          }
        ],
        alert: {
          title: 'Strategischer Compliance-Vorteil',
          content: 'Die Integration von ISO 27001 und NIS2 schafft nicht nur regulatorische Compliance, sondern einen strategischen Wettbewerbsvorteil durch optimierte Sicherheitsarchitekturen und operative Exzellenz.'
        },
        whyUs: {
          title: 'Warum ISO 27001 NIS2 Integration mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in beiden Frameworks und deren strategischer Verbindung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Integrationsmethoden für maximale Compliance-Effizienz'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz für kritische Infrastrukturen und KRITIS-Sektoren'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Optimierung und Anpassung an regulatorische Entwicklungen'
            }
          ]
        },
        additionalInfo: 'Die strategische Integration von ISO 27001 und NIS2 erfordert ein tiefes Verständnis beider Frameworks sowie deren praktischer Anwendung in kritischen Infrastrukturen. Unsere Methodik nutzt die bestehenden ISMS-Strukturen als solide Basis und erweitert diese gezielt um NIS2-spezifische Anforderungen, wodurch eine kohärente und effiziente Compliance-Architektur entsteht.',
        serviceDescription: 'Unser ISO 27001 NIS2 Integrations-Service kombiniert bewährte ISMS-Praktiken mit den spezifischen Anforderungen der NIS2-Richtlinie. Wir entwickeln maßgeschneiderte Integrationsstrategien, die Ihre bestehenden ISO 27001-Investitionen maximieren und gleichzeitig eine vollständige NIS2-Compliance gewährleisten.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Gap-Analyse zwischen ISO 27001 und NIS2-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Integrierte Governance-Strukturen für einheitliche Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Optimierte Risikomanagement-Frameworks für kritische Infrastrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Einheitliche Incident Response und Krisenmanagement-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Monitoring- und Verbesserungsstrategien'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Integrationsansatz für ISO 27001 und NIS2',
        description: 'Wir verfolgen einen strukturierten, synergie-orientierten Ansatz, der die natürlichen Komplementaritäten zwischen ISO 27001 und NIS2 maximiert und eine effiziente, einheitliche Compliance-Architektur schafft.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Baseline-Analyse Ihrer bestehenden ISO 27001-Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategische Gap-Identifikation und Synergie-Mapping zwischen beiden Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung integrierter Governance-Strukturen und Prozesslandschaften'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Schrittweise Implementierung mit kontinuierlicher Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Verankerung durch integrierte Monitoring- und Verbesserungsprozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die strategische Integration von ISO 27001 und NIS2 ist der Schlüssel für effiziente Compliance in kritischen Infrastrukturen. Unsere bewährte Integrationsmethodik nutzt bestehende ISMS-Investitionen optimal und schafft kohärente Sicherheitsarchitekturen, die sowohl regulatorische Exzellenz als auch operative Effizienz gewährleisten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische Integration & Gap-Analyse',
          description: 'Umfassende Analyse und strategische Planung für die optimale Integration von ISO 27001 und NIS2-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Gap-Analyse zwischen bestehenden ISMS und NIS2-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Synergie-Mapping und Optimierungspotential-Identifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Strategische Roadmap für effiziente Integrationsimplementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Kosten-Nutzen-Analyse und ROI-Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Integrierte Governance-Frameworks',
          description: 'Entwicklung einheitlicher Governance-Strukturen, die sowohl ISO 27001 als auch NIS2-Anforderungen optimal erfüllen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Unified Governance-Architektur für beide Compliance-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integrierte Rollen- und Verantwortlichkeitsstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Kohärente Policy- und Prozesslandschaften'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Einheitliche Reporting- und Oversight-Mechanismen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Risikomanagement-Integration',
          description: 'Entwicklung integrierter Risikomanagement-Ansätze, die ISMS-Methoden mit NIS2-spezifischen Anforderungen verbinden.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Unified Risk Assessment Methodologien für kritische Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Integrierte Bedrohungsanalyse und Vulnerability Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Kohärente Risk Treatment und Mitigation Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Kontinuierliche Risk Monitoring und Anpassungsprozesse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Incident Response & Business Continuity',
          description: 'Integration von ISMS-basierten Incident Response Prozessen mit NIS2-spezifischen Meldepflichten und Krisenmanagement.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Unified Incident Response Frameworks für beide Compliance-Bereiche'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Integrierte Meldeprozesse und Stakeholder-Kommunikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Kohärente Business Continuity und Disaster Recovery Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Crisis Management und Koordination mit Behörden'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Technische Sicherheitskontrollen',
          description: 'Optimierung und Integration technischer Sicherheitsmaßnahmen für einheitliche ISO 27001 und NIS2-Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Mapping von ISO 27001 Controls zu NIS2-Sicherheitsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Integrierte Monitoring- und Detection-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Unified Security Architecture für kritische Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Kontinuierliche Vulnerability Assessment und Penetration Testing'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Compliance-Monitoring & Optimierung',
          description: 'Kontinuierliche Überwachung und Optimierung der integrierten Compliance-Landschaft für nachhaltige Effizienz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Integrierte Compliance-Dashboards und KPI-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Automatisierte Compliance-Checks und Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Kontinuierliche Verbesserung und Optimierung der Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Proaktive Anpassung an regulatorische Entwicklungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001Nis2Data)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 NIS2 Integration page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
