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
    console.log('Creating SIEM Consulting page...')

    const siemConsultingData = {
      _type: 'servicePage',
      _id: 'siem-consulting',
      title: 'SIEM Consulting - Strategische Beratung für Security Operations Excellence',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/security-operations-secops/siem/siem-consulting'
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
        title: 'SIEM Consulting - Strategische Beratung für Security Operations Excellence | ADVISORI',
        description: 'Professionelle SIEM Consulting Services: Strategische Beratung, Architektur-Design, Implementation-Guidance und Optimierung für maximale Cybersecurity-Effektivität und ROI-Maximierung.',
        keywords: 'SIEM Consulting, SIEM Beratung, Security Operations Consulting, SIEM Strategie, SIEM Architektur, SIEM Implementation, Cybersecurity Consulting, SOC Beratung, SIEM Optimierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'SIEM Consulting - Strategische Beratung für Security Operations Excellence'
        },
        tagline: 'Strategische SIEM Expertise für nachhaltige Cybersecurity-Exzellenz',
        heading: 'SIEM Consulting - Strategische Beratung für Security Operations Excellence',
        description: 'Transformieren Sie Ihre Cybersecurity-Landschaft mit strategischem SIEM Consulting. Wir begleiten Sie von der initialen Strategie-Entwicklung über die Architektur-Planung bis hin zur operativen Exzellenz. Unsere herstellerunabhängige Expertise ermöglicht maßgeschneiderte SIEM-Lösungen, die perfekt zu Ihren Business-Anforderungen passen und nachhaltigen Wert schaffen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische SIEM Roadmap-Entwicklung und Maturity Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Herstellerunabhängige Architektur-Beratung und Design-Expertise'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'ROI-Optimierung und Performance-Maximierung bestehender SIEM-Investitionen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Compliance-Alignment und regulatorische Anforderungserfüllung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'SIEM Consulting: Strategische Transformation für nachhaltige Cybersecurity-Excellence',
        description: 'SIEM Consulting geht weit über technische Implementation hinaus und umfasst strategische Beratung, organisatorische Transformation und nachhaltige Optimierung. Wir entwickeln ganzheitliche SIEM-Strategien, die technische Exzellenz mit Business-Alignment und operativer Effizienz verbinden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategic SIEM Assessment und Maturity Evaluation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Architecture Design und Technology Roadmap Development'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementation Guidance und Change Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Performance Optimization und Continuous Improvement'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Compliance Integration und Regulatory Alignment'
          }
        ],
        alert: {
          title: 'Strategischer Erfolgsfaktor',
          content: 'Erfolgreiche SIEM-Implementierungen erfordern mehr als technische Expertise. Strategisches Consulting, das Business-Anforderungen, organisatorische Faktoren und technische Möglichkeiten optimal verbindet, ist der Schlüssel für nachhaltige Cybersecurity-Exzellenz.'
        },
        whyUs: {
          title: 'Unsere SIEM Consulting Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung mit Enterprise-SIEM Implementierungen in verschiedenen Branchen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Beratung für objektive und strategische Empfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methodiken für SIEM-Transformation und Organizational Change'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'End-to-End Begleitung von der Strategie bis zur operativen Exzellenz'
            }
          ]
        },
        additionalInfo: 'Die SIEM-Landschaft entwickelt sich kontinuierlich weiter, mit neuen Technologien wie AI-gestützten Analytics, Cloud-nativen Architekturen und erweiterten Threat Intelligence Capabilities. Strategisches SIEM Consulting berücksichtigt diese Entwicklungen und schafft zukunftssichere Lösungen, die mit den sich ändernden Anforderungen mitwachsen.',
        serviceDescription: 'Unser SIEM Consulting umfasst alle Aspekte der strategischen SIEM-Entwicklung, von der initialen Assessment-Phase über die Architektur-Planung bis hin zur kontinuierlichen Optimierung. Wir kombinieren technische Tiefe mit strategischem Business-Verständnis für nachhaltige Cybersecurity-Transformation.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'SIEM Strategy Development und Roadmap Planning'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Architecture Consulting und Design-Expertise'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementation Guidance und Project Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Performance Optimization und Maturity Enhancement'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Compliance Integration und Governance-Alignment'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer SIEM Consulting Ansatz',
        description: 'Wir verfolgen einen ganzheitlichen, business-orientierten Ansatz für SIEM Consulting, der technische Exzellenz mit strategischem Denken und nachhaltiger Wertschöpfung verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Assessment und Strategic Alignment für fundierte Entscheidungsgrundlagen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Collaborative Planning und Stakeholder-Integration für organisatorische Akzeptanz'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phased Implementation mit kontinuierlicher Validierung und Anpassung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Knowledge Transfer und Capability Building für nachhaltige Autonomie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continuous Improvement und Long-term Partnership für dauerhafte Exzellenz'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Strategisches SIEM Consulting erfordert die perfekte Balance zwischen technischer Tiefe und Business-Verständnis. Unsere Expertise liegt darin, komplexe SIEM-Landschaften zu durchdringen und maßgeschneiderte Strategien zu entwickeln, die sowohl technische Exzellenz als auch nachhaltigen Business-Wert schaffen. Durch unseren herstellerunabhängigen Ansatz können wir objektive Empfehlungen geben, die ausschließlich auf den spezifischen Anforderungen unserer Kunden basieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'SIEM Strategy Development und Maturity Assessment',
          description: 'Comprehensive strategische Planung und Bewertung der aktuellen SIEM-Reife für zielgerichtete Transformation und nachhaltige Cybersecurity-Exzellenz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Current State Assessment und SIEM Maturity Evaluation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Strategic Vision Development und Future State Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Gap Analysis und Transformation Roadmap Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Business Case Development und ROI-Modellierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'SIEM Architecture Consulting und Design-Expertise',
          description: 'Professionelle Architektur-Beratung für skalierbare, sichere und zukunftssichere SIEM-Landschaften mit optimaler Integration in bestehende IT-Umgebungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Enterprise Architecture Design und Technology Selection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Scalability Planning und Performance Architecture'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration Architecture und Data Flow Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Security-by-Design und Compliance Architecture'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'SIEM Implementation Guidance und Project Management',
          description: 'Expertengeleitung für erfolgreiche SIEM-Implementierungen mit strukturiertem Projektmanagement und kontinuierlicher Qualitätssicherung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Implementation Planning und Project Roadmap Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Vendor Management und Quality Assurance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Change Management und Stakeholder Communication'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Testing Coordination und Go-Live Support'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'SIEM Performance Optimization und Tuning',
          description: 'Kontinuierliche Optimierung bestehender SIEM-Implementierungen für maximale Performance, Effizienz und Wertschöpfung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Performance Analysis und Bottleneck Identification'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Rule Optimization und False Positive Reduction'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Capacity Planning und Resource Optimization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Use Case Enhancement und Analytics Improvement'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'SIEM Compliance Integration und Governance',
          description: 'Strategische Integration von Compliance-Anforderungen in SIEM-Architekturen für automatisierte Regulatory Compliance und Governance-Exzellenz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Regulatory Mapping und Compliance Framework Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Automated Reporting und Audit Trail Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Governance Framework Development und Policy Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Risk Management Integration und Compliance Monitoring'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'SIEM Team Development und Capability Building',
          description: 'Strategische Entwicklung interner SIEM-Kompetenzen und Team-Capabilities für nachhaltige operative Exzellenz und Autonomie.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Skills Assessment und Competency Gap Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Training Program Development und Knowledge Transfer'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Operating Model Design und Process Optimization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Mentoring und Ongoing Support für Team-Entwicklung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(siemConsultingData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ SIEM Consulting page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
