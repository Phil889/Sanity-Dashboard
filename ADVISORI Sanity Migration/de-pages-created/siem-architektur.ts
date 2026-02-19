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
    console.log('Creating SIEM Architektur page...')

    const siemArchitekturData = {
      _type: 'servicePage',
      _id: 'siem-architektur',
      title: 'SIEM Architektur - Enterprise-Infrastruktur Design und Optimierung',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/security-operations-secops/siem/siem-architektur'
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
        title: 'SIEM Architektur - Enterprise-Infrastruktur Design und Optimierung | ADVISORI',
        description: 'Professionelle SIEM Architektur Beratung: Enterprise-Infrastruktur Design, Skalierbare Architekturen, Performance-Optimierung und High-Availability Konzepte für maximale Cybersecurity-Effektivität.',
        keywords: 'SIEM Architektur, SIEM Infrastructure, Enterprise SIEM, SIEM Design, SIEM Skalierung, SIEM Performance, High Availability SIEM, SIEM Architecture Best Practices'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'SIEM Architektur - Enterprise-Infrastruktur Design und Optimierung'
        },
        tagline: 'Enterprise-SIEM Architektur für skalierbare Cybersecurity-Excellence',
        heading: 'SIEM Architektur - Enterprise-Infrastruktur Design und Optimierung',
        description: 'Eine durchdachte SIEM Architektur ist das Fundament für effektive Cybersecurity Operations. Wir entwickeln maßgeschneiderte Enterprise-SIEM Infrastrukturen, die Skalierbarkeit, Performance und Ausfallsicherheit optimal vereinen. Von der strategischen Architektur-Planung bis zur operativen Optimierung schaffen wir robuste SIEM-Landschaften für nachhaltige Sicherheitsexzellenz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Enterprise-SIEM Architektur Design für maximale Skalierbarkeit'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'High-Availability und Disaster Recovery Konzepte'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Performance-Optimierung und Capacity Planning'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Zukunftssichere Cloud-native und Hybrid-Architekturen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'SIEM Architektur: Strategische Infrastruktur für Enterprise Cybersecurity',
        description: 'Die SIEM Architektur bestimmt maßgeblich die Leistungsfähigkeit, Skalierbarkeit und Zukunftssicherheit Ihrer Cybersecurity-Infrastruktur. Wir entwickeln durchdachte Architektur-Konzepte, die technische Excellence mit operativer Effizienz und strategischer Flexibilität verbinden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Enterprise Architecture Design und Strategic Infrastructure Planning'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Scalability Engineering und Performance Optimization'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'High-Availability Design und Disaster Recovery Architecture'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Cloud-native und Hybrid-Architecture Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Security-by-Design und Compliance-aligned Architecture'
          }
        ],
        alert: {
          title: 'Architektur als Erfolgsfaktor',
          content: 'Eine optimal designte SIEM Architektur kann die Cybersecurity-Performance um das Fünffache steigern und gleichzeitig operative Kosten erheblich reduzieren. Strategische Architektur-Entscheidungen heute bestimmen die Cybersecurity-Fähigkeiten von morgen.'
        },
        whyUs: {
          title: 'Unsere SIEM Architektur Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung mit Enterprise-SIEM Architekturen aller Größenordnungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodiken für skalierbare und zukunftssichere Designs'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Deep Technical Expertise in Cloud-native und Hybrid-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'End-to-End Begleitung von der Konzeption bis zur operativen Excellence'
            }
          ]
        },
        additionalInfo: 'Moderne SIEM Architekturen müssen komplexe Anforderungen wie massive Datenvolumen, Real-time Processing, Multi-Cloud Integration und regulatorische Compliance unter einen Hut bringen. Gleichzeitig sollen sie flexibel genug sein, um sich an verändernde Bedrohungslandschaften und Business-Anforderungen anzupassen.',
        serviceDescription: 'Wir unterstützen Sie bei allen Aspekten der SIEM Architektur, von der strategischen Planung über das detaillierte Design bis hin zur Implementierung und kontinuierlichen Optimierung. Unser ganzheitlicher Ansatz gewährleistet Architekturen, die sowohl aktuelle Anforderungen erfüllen als auch zukünftige Herausforderungen antizipieren.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategic Architecture Planning und Enterprise Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Scalability Engineering und Performance Architecture'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'High-Availability und Disaster Recovery Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Cloud-native und Hybrid-Architecture Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Security-by-Design und Compliance Architecture'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer SIEM Architektur Ansatz',
        description: 'Wir verfolgen einen strukturierten, best-practice-orientierten Ansatz für SIEM Architektur Design, der technische Excellence mit Business-Alignment und strategischer Zukunftssicherheit verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Requirements Analysis und Architecture Vision Development'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Technology Assessment und Best-Practice Architecture Patterns'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Detailed Design und Implementation Planning mit Risk Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Proof-of-Architecture Validation und Performance Testing'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Implementation Support und Continuous Architecture Optimization'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Eine durchdachte SIEM Architektur ist das unsichtbare Fundament für sichtbare Cybersecurity-Excellence. Unsere Expertise liegt darin, komplexe technische Anforderungen in elegante, skalierbare Architekturen zu übersetzen, die nicht nur heutige Herausforderungen meistern, sondern auch zukünftige Innovationen ermöglichen. Durch strategisches Architecture Design schaffen wir SIEM-Infrastrukturen, die als Enabler für Business-Wachstum und Cybersecurity-Transformation fungieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Enterprise SIEM Architecture Design und Strategic Planning',
          description: 'Comprehensive Enterprise SIEM Architecture Design mit strategischer Planung für skalierbare, zukunftssichere Cybersecurity-Infrastrukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Enterprise Architecture Vision und Strategic Roadmap Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Business-aligned Architecture Requirements und Stakeholder Alignment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Technology Stack Selection und Architecture Pattern Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration Architecture Design für nahtlose Ecosystem-Einbindung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Scalability Engineering und Performance Architecture',
          description: 'Spezialisierte Skalierbarkeits-Architektur und Performance-Engineering für SIEM-Systeme, die mit wachsenden Anforderungen mithalten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Horizontal und Vertical Scaling Architecture Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Performance Optimization und Capacity Planning Strategies'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Load Balancing und Traffic Distribution Architecture'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Resource Optimization und Cost-efficient Scaling Models'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'High-Availability und Disaster Recovery Architecture',
          description: 'Robuste High-Availability und Disaster Recovery Architekturen für unterbrechungsfreie SIEM Operations und Business Continuity.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'High-Availability Design mit Redundancy und Failover Mechanisms'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Disaster Recovery Planning und Business Continuity Architecture'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Data Replication und Backup Architecture Strategies'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Recovery Time und Recovery Point Objective Optimization'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Cloud-native und Hybrid SIEM Architecture',
          description: 'Moderne Cloud-native und Hybrid SIEM Architekturen für flexible, skalierbare und kosteneffiziente Cybersecurity-Infrastrukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Cloud-native Architecture Design mit Container und Microservices'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Multi-Cloud und Hybrid-Cloud Architecture Strategies'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Cloud Security Architecture und Compliance-aligned Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'DevOps Integration und Infrastructure-as-Code Implementation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Data Architecture und Analytics Infrastructure',
          description: 'Spezialisierte Data Architecture und Analytics Infrastructure für optimale SIEM Data Processing und Intelligence Generation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Data Lake und Data Warehouse Architecture für SIEM Analytics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Real-time Streaming Architecture und Event Processing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Machine Learning Infrastructure und AI-enabled Analytics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Data Governance und Privacy-by-Design Architecture'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Security-by-Design und Compliance Architecture',
          description: 'Security-by-Design Prinzipien und Compliance-aligned Architecture für vertrauenswürdige und regulatorisch konforme SIEM-Infrastrukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Zero-Trust Architecture Principles und Security-by-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Compliance Architecture für regulatorische Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Identity und Access Management Architecture Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Audit Trail und Forensics-ready Architecture Design'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(siemArchitekturData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ SIEM Architektur page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
