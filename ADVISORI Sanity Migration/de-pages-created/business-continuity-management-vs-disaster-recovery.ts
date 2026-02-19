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
    console.log('Creating Business Continuity Management vs Disaster Recovery page...')

    const bcmVsDrData = {
      _type: 'servicePage',
      _id: 'business-continuity-management-vs-disaster-recovery',
      title: 'Business Continuity Management vs Disaster Recovery',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/business-continuity-resilience/business-continuity-management-vs-disaster-recovery'
      },
      parent: {
        _type: 'reference',
        _ref: 'business-continuity-resilience'
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
        title: 'Business Continuity Management vs Disaster Recovery - Unterschiede & Integration | ADVISORI',
        description: 'Verstehen Sie die fundamentalen Unterschiede zwischen Business Continuity Management und Disaster Recovery. Strategische vs. operative Ansätze, Integration und moderne Best Practices.',
        keywords: 'Business Continuity Management vs Disaster Recovery, BCM vs DR, Unterschiede BCM DR, Business Continuity Disaster Recovery, BCM DR Integration, Kontinuitätsmanagement vs Notfallwiederherstellung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Business Continuity Management vs Disaster Recovery - Strategische Unterschiede und Integration'
        },
        tagline: 'Strategische Abgrenzung und synergetische Integration',
        heading: 'Business Continuity Management vs Disaster Recovery',
        description: 'Business Continuity Management und Disaster Recovery sind komplementäre, aber fundamental unterschiedliche Disziplinen. Während BCM einen ganzheitlichen, strategischen Ansatz zur organisationalen Resilienz verfolgt, fokussiert DR auf die technische Wiederherstellung kritischer Systeme. Verstehen Sie die Unterschiede, Synergien und Integrationsmöglichkeiten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Klare Abgrenzung zwischen strategischem BCM und operativem DR'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Synergetische Integration beider Disziplinen für maximale Resilienz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Moderne Ansätze zur Harmonisierung von BCM und DR'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Optimierte Ressourcenallokation durch klare Rollenverteilung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'BCM vs DR - Strategische Unterschiede und komplementäre Stärken',
        description: 'Business Continuity Management und Disaster Recovery unterscheiden sich fundamental in Scope, Zeitrahmen und strategischer Ausrichtung. BCM umfasst die ganzheitliche organisationale Resilienz mit proaktivem, strategischem Fokus, während DR sich auf die reaktive, technische Wiederherstellung kritischer IT-Systeme konzentriert. Beide Disziplinen sind jedoch komplementär und erfordern eine integrierte Herangehensweise.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'BCM verfolgt einen ganzheitlichen, strategischen Ansatz zur organisationalen Resilienz'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'DR fokussiert auf technische Wiederherstellung und operative Kontinuität kritischer Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Unterschiedliche Zeitrahmen: BCM langfristig-strategisch, DR kurzfristig-operativ'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Komplementäre Stärken erfordern integrierte Governance und koordinierte Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Moderne Ansätze harmonisieren beide Disziplinen in einem kohärenten Resilienz-Framework'
          }
        ],
        alert: {
          title: 'Strategische Integration',
          content: 'BCM und DR sind keine konkurrierenden, sondern komplementäre Disziplinen. Erfolgreiche Organisationen integrieren beide Ansätze in einem kohärenten Resilienz-Framework, das strategische Vision mit operativer Exzellenz verbindet.'
        },
        whyUs: {
          title: 'Warum BCM vs DR Expertise mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in beiden Disziplinen und deren strategischer Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Frameworks für die Harmonisierung von BCM und DR'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitliche Beratung von strategischer Vision bis operativer Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Moderne Ansätze für digitale Transformation und Cyber-Resilienz'
            }
          ]
        },
        additionalInfo: 'Die Unterscheidung zwischen BCM und DR ist nicht nur akademisch, sondern hat praktische Implikationen für Organisationsstruktur, Ressourcenallokation und strategische Ausrichtung. BCM adressiert die gesamte organisationale Resilienz einschließlich Menschen, Prozesse, Technologie und Stakeholder-Beziehungen, während DR sich primär auf IT-Infrastruktur und technische Wiederherstellungskapazitäten konzentriert.',
        serviceDescription: 'Unser BCM vs DR Service bietet umfassende Analyse, Abgrenzung und Integration beider Disziplinen. Wir unterstützen Organisationen dabei, die optimale Balance zwischen strategischem BCM und operativem DR zu finden und beide Ansätze synergetisch zu nutzen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Abgrenzung und Rollenklärung zwischen BCM und DR'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Integrierte Governance-Strukturen für beide Disziplinen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Synergetische Implementierungsstrategien und Best Practices'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Moderne Technologie-Integration und digitale Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Optimierung und evolutionäre Weiterentwicklung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser integrierter Ansatz für BCM und DR',
        description: 'Wir verfolgen einen ganzheitlichen Ansatz, der die strategischen Stärken von BCM mit der operativen Exzellenz von DR kombiniert und beide Disziplinen in einem kohärenten Resilienz-Framework integriert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Analyse und klare Abgrenzung der Verantwortlichkeiten und Scope'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung integrierter Governance-Strukturen und Entscheidungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Synergetische Implementierung mit koordinierten Workstreams und Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche Optimierung durch gemeinsame KPIs und Performance-Metriken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Zukunftsorientierte Evolution mit emerging technologies und neuen Bedrohungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die erfolgreiche Integration von Business Continuity Management und Disaster Recovery erfordert ein tiefes Verständnis beider Disziplinen und ihrer komplementären Stärken. Nur durch strategische Harmonisierung können Organisationen wahre Resilienz entwickeln, die sowohl proaktive Vorbereitung als auch reaktive Exzellenz umfasst.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische Abgrenzung & Analyse',
          description: 'Klare Definition der Rollen, Verantwortlichkeiten und Scope von BCM und DR.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Gap-Analyse zwischen BCM und DR'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Strategische Rollenklärung und Verantwortungsmatrix'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Scope-Definition und Abgrenzungskriterien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Stakeholder-Mapping und Interessensanalyse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Integrierte Governance',
          description: 'Entwicklung harmonisierter Governance-Strukturen für BCM und DR.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Integrierte Governance-Frameworks und Entscheidungsstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Koordinierte Reporting- und Eskalationsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Gemeinsame KPIs und Performance-Metriken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Harmonisierte Policy- und Prozesslandschaft'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Synergetische Implementierung',
          description: 'Koordinierte Umsetzung von BCM und DR mit maximaler Synergie.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Integrierte Implementierungsroadmap und Meilensteine'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Koordinierte Workstreams und Cross-funktionale Teams'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Gemeinsame Ressourcenplanung und Budgetierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Synergetische Technologie-Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Technologie-Integration',
          description: 'Harmonisierung von BCM und DR durch moderne Technologie-Plattformen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Integrierte BCM-DR-Technologie-Plattformen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Automatisierte Workflows und Orchestrierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Real-time Monitoring und Alerting-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Cloud-native und Hybrid-Infrastrukturen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Testing & Validation',
          description: 'Integrierte Test- und Validierungsstrategien für BCM und DR.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Koordinierte Test- und Übungsszenarien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Integrierte Validierungs- und Audit-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Cross-funktionale Lessons Learned und Verbesserungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Kontinuierliche Optimierung und Anpassung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Zukunftsorientierte Evolution',
          description: 'Kontinuierliche Weiterentwicklung von BCM und DR für emerging challenges.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Emerging Technology Integration und Innovation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Adaptive Strategien für neue Bedrohungslandschaften'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Nachhaltigkeits- und ESG-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Markt- und Technologie-Beobachtung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcmVsDrData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Business Continuity Management vs Disaster Recovery page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
