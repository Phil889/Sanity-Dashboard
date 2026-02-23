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
    console.log('Creating SIEM Tools page...')

    const siemToolsData = {
      _type: 'servicePage',
      _id: 'siem-tools',
      title: 'SIEM Tools - Strategische Auswahl und Optimierung',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/security-operations-secops/siem/siem-tools'
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
        title: 'SIEM Tools - Strategische Auswahl und Optimierung | ADVISORI',
        description: 'Professionelle SIEM Tools Beratung: Strategische Tool-Auswahl, Evaluierung, Integration und Optimierung von Security Information and Event Management Plattformen für maximale Cybersecurity-Effektivität.',
        keywords: 'SIEM Tools, SIEM Software, SIEM Plattformen, Security Tools, SIEM Auswahl, SIEM Evaluierung, Enterprise SIEM, SIEM Integration, Security Operations Tools'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'SIEM Tools - Strategische Auswahl und Optimierung'
        },
        tagline: 'Strategische SIEM Tool-Expertise für optimale Cybersecurity-Performance',
        heading: 'SIEM Tools - Strategische Auswahl und Optimierung',
        description: 'Die richtige SIEM Tool-Auswahl entscheidet über den Erfolg Ihrer Cybersecurity-Strategie. Wir unterstützen Sie bei der strategischen Evaluierung, Auswahl und Optimierung von SIEM Plattformen, die perfekt zu Ihren spezifischen Anforderungen passen. Von Enterprise-Lösungen bis hin zu spezialisierten Tools entwickeln wir maßgeschneiderte Tool-Strategien für nachhaltige Sicherheitsexzellenz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Herstellerunabhängige SIEM Tool-Evaluierung und Auswahl'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strategische Integration in bestehende Security-Landschaften'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Performance-Optimierung und ROI-Maximierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Zukunftssichere Tool-Architekturen und Skalierungsstrategien'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'SIEM Tools: Strategische Technologie-Entscheidungen für nachhaltige Cybersecurity',
        description: 'Die Auswahl der richtigen SIEM Tools ist eine strategische Entscheidung, die langfristige Auswirkungen auf Ihre Cybersecurity-Effektivität hat. Wir begleiten Sie durch den komplexen Prozess der Tool-Evaluierung, von der Anforderungsanalyse über die Vendor-Auswahl bis hin zur optimalen Integration und kontinuierlichen Optimierung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Comprehensive SIEM Tool Assessment und Market Analysis'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Requirements Engineering und Use Case Definition'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Vendor-neutrale Evaluierung und Proof-of-Concept Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration-Strategien und Architecture-Alignment'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Performance-Tuning und Continuous Optimization'
          }
        ],
        alert: {
          title: 'Strategischer Erfolgsfaktor',
          content: 'Die richtige SIEM Tool-Auswahl kann die Cybersecurity-Effektivität um das Dreifache steigern und gleichzeitig operative Kosten erheblich reduzieren. Eine strategische, anforderungsbasierte Herangehensweise ist entscheidend für nachhaltigen Erfolg.'
        },
        whyUs: {
          title: 'Unsere SIEM Tools Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung mit allen führenden SIEM Plattformen und Nischenlösungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Beratung für objektive Tool-Empfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methodiken für Tool-Evaluierung und Performance-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'End-to-End Begleitung von der Auswahl bis zur operativen Exzellenz'
            }
          ]
        },
        additionalInfo: 'Die SIEM Tool-Landschaft entwickelt sich rasant weiter, mit neuen Cloud-nativen Plattformen, AI-gestützten Analytics und spezialisierten Lösungen für verschiedene Anwendungsfälle. Eine strategische Tool-Auswahl berücksichtigt nicht nur aktuelle Anforderungen, sondern auch zukünftige Entwicklungen und Integrationsmöglichkeiten.',
        serviceDescription: 'Wir unterstützen Sie bei allen Aspekten der SIEM Tool-Strategie, von der initialen Marktanalyse über die detaillierte Evaluierung bis hin zur optimalen Integration und kontinuierlichen Verbesserung. Unser herstellerunabhängiger Ansatz gewährleistet objektive Empfehlungen, die perfekt zu Ihren spezifischen Anforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'SIEM Tool Market Analysis und Technology Scouting'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Requirements Engineering und Use Case Mapping'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Vendor-Evaluierung und Proof-of-Concept Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integration-Planung und Architecture-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance-Optimierung und Lifecycle-Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer SIEM Tools Ansatz',
        description: 'Wir verfolgen einen strukturierten, datengetriebenen Ansatz für SIEM Tool-Entscheidungen, der technische Exzellenz mit wirtschaftlicher Effizienz und strategischer Zukunftssicherheit verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Requirements Analysis und Stakeholder-Alignment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Market Research und Technology Assessment für informierte Entscheidungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Structured Evaluation Process mit objektiven Bewertungskriterien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Proof-of-Concept Management und Real-World Testing'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Integration-Planung und Continuous Optimization Strategy'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die strategische Auswahl der richtigen SIEM Tools ist eine der kritischsten Entscheidungen in der Cybersecurity-Architektur. Unsere herstellerunabhängige Expertise ermöglicht es unseren Kunden, Tools zu identifizieren, die nicht nur aktuelle Anforderungen erfüllen, sondern auch zukünftige Herausforderungen antizipieren. Durch systematische Evaluierung und kontinuierliche Optimierung schaffen wir nachhaltige Tool-Landschaften, die maximale Sicherheitswirksamkeit bei optimaler Kosteneffizienz bieten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'SIEM Tool Market Analysis und Technology Scouting',
          description: 'Umfassende Marktanalyse und kontinuierliches Technology Scouting für informierte SIEM Tool-Entscheidungen basierend auf aktuellen Trends und zukünftigen Entwicklungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Comprehensive Market Landscape Analysis aller verfügbaren SIEM Plattformen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Technology Trend Analysis und Future Roadmap Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Vendor Stability und Financial Health Evaluation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Emerging Technologies Integration und Innovation Assessment'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Requirements Engineering und Use Case Definition',
          description: 'Strukturierte Anforderungsanalyse und präzise Use Case Definition für zielgerichtete SIEM Tool-Auswahl und optimale Funktionsabdeckung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Stakeholder-Workshop und Requirements Gathering Sessions'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Use Case Prioritization und Functional Requirements Mapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Non-functional Requirements Definition und Performance Criteria'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration Requirements und Architecture Constraints Analysis'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'SIEM Tool Evaluierung und Vendor-Assessment',
          description: 'Objektive, kriterienbasierte Evaluierung von SIEM Tools mit strukturiertem Vendor-Assessment für fundierte Auswahlentscheidungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Multi-Criteria Decision Analysis mit gewichteten Bewertungskriterien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Technical Deep-Dive Assessment und Architecture Review'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Total Cost of Ownership Analysis und ROI-Modellierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Vendor Capability Assessment und Support-Evaluation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Proof-of-Concept Management und Testing',
          description: 'Professionelles Management von SIEM Tool Proof-of-Concepts mit strukturierten Testing-Protokollen für validierte Entscheidungsgrundlagen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'PoC-Planung und Test-Scenario Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Real-World Data Testing und Performance Benchmarking'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'User Experience Assessment und Usability Testing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Integration Testing und Compatibility Validation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'SIEM Tool Integration und Architecture-Design',
          description: 'Strategische Integration-Planung und Architecture-Design für nahtlose SIEM Tool-Einbindung in bestehende Sicherheitslandschaften.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Integration Architecture Design und Data Flow Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'API-Integration und Connector-Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Data Normalization und Schema-Mapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Security-by-Design Implementation und Access Control'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'SIEM Tool Optimierung und Lifecycle-Management',
          description: 'Kontinuierliche Performance-Optimierung und strategisches Lifecycle-Management für nachhaltige SIEM Tool-Exzellenz und maximalen ROI.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Performance-Monitoring und Tuning-Services'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Capacity Planning und Scaling-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Tool-Upgrade Management und Migration-Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'ROI-Tracking und Value Realization Measurement'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(siemToolsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ SIEM Tools page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
