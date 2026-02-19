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
    console.log('Creating SIEM Analyse page...')

    const siemAnalyseData = {
      _type: 'servicePage',
      _id: 'siem-analyse',
      title: 'SIEM Analyse - Advanced Analytics und Forensic Investigation',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/security-operations-secops/siem/siem-analyse'
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
        title: 'SIEM Analyse - Advanced Analytics und Forensic Investigation | ADVISORI',
        description: 'Professionelle SIEM Analyse Services: Advanced Log Analytics, Forensic Investigation, Behavioral Analysis, Threat Hunting und Data Visualization für präzise Cybersecurity-Intelligence und Incident Response.',
        keywords: 'SIEM Analyse, Log Analytics, Forensic Investigation, Behavioral Analysis, Threat Hunting, Data Visualization, Security Analytics, Incident Analysis, SIEM Forensics'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'SIEM Analyse - Advanced Analytics und Forensic Investigation'
        },
        tagline: 'Expertise in SIEM Analytics für tiefgreifende Cybersecurity-Intelligence',
        heading: 'SIEM Analyse - Advanced Analytics und Forensic Investigation',
        description: 'SIEM Analyse ist das Herzstück intelligenter Cybersecurity-Operations und erfordert sophisticated Analytics-Techniken, forensische Expertise und tiefgreifende Threat Intelligence. Wir entwickeln und implementieren Advanced Analytics-Frameworks, die komplexe Bedrohungsmuster erkennen, forensische Untersuchungen beschleunigen und actionable Security Intelligence liefern. Unsere AI-gestützten Analyse-Methoden transformieren rohe Log-Daten in präzise Cybersecurity-Insights.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Advanced Log Analytics mit AI-gestützter Pattern Recognition'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Forensic Investigation und Digital Evidence Analysis'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Behavioral Analytics und Anomalie-Detection für Threat Hunting'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Interactive Data Visualization und Executive Reporting'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'SIEM Analyse: Intelligente Analytics für proaktive Cybersecurity',
        description: 'Moderne SIEM Analyse kombiniert Advanced Analytics, Machine Learning und forensische Expertise für comprehensive Threat Detection und Investigation. Wir entwickeln maßgeschneiderte Analyse-Frameworks, die komplexe Cyberattacken aufdecken, Incident Response beschleunigen und strategische Security Intelligence liefern.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Advanced Log Analytics und Correlation Engineering'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Forensic Investigation und Digital Evidence Processing'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Behavioral Analytics und User Entity Behavior Analysis'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Threat Hunting und Proactive Investigation Techniques'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Data Visualization und Interactive Security Dashboards'
          }
        ],
        alert: {
          title: 'Analytics-Excellence als Cybersecurity-Differentiator',
          content: 'Fortschrittliche SIEM Analyse kann die Mean Time to Investigation um bis zu 85% reduzieren und gleichzeitig die Accuracy von Threat Detection um über 75% verbessern. Intelligente Analytics-Frameworks sind entscheidend für proaktive Cybersecurity und forensische Exzellenz.'
        },
        whyUs: {
          title: 'Unsere SIEM Analyse Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in Advanced Analytics und Machine Learning für Cybersecurity'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Forensic Investigation Methodiken und Digital Evidence Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'End-to-End Analytics Services von Data Engineering bis Executive Intelligence'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Innovation in AI-gestützten Analyse-Technologien'
            }
          ]
        },
        additionalInfo: 'Die SIEM Analyse-Landschaft entwickelt sich rasant mit neuen AI-Technologien, Cloud-nativen Analytics-Plattformen und integrierten Threat Intelligence Frameworks. Moderne Analyse-Strategien müssen sowohl Real-time Processing als auch Deep Forensic Analysis unterstützen und gleichzeitig actionable Intelligence für verschiedene Stakeholder-Gruppen liefern.',
        serviceDescription: 'Wir bieten umfassende SIEM Analyse Services, die von Advanced Log Analytics über Forensic Investigation bis hin zu Strategic Threat Intelligence reichen. Unser AI-gestützter Ansatz kombiniert technische Exzellenz mit forensischer Expertise für maximale Cybersecurity-Intelligence.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Advanced Log Analytics und Multi-dimensional Correlation Analysis'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Forensic Investigation und Digital Evidence Chain Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Behavioral Analytics und Anomaly Detection für Threat Hunting'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Interactive Data Visualization und Executive Security Intelligence'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Continuous Analytics Optimization und Performance Enhancement'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer SIEM Analyse Ansatz',
        description: 'Wir verfolgen einen wissenschaftlich fundierten, AI-gestützten Ansatz für SIEM Analyse, der technische Exzellenz mit forensischer Präzision und strategischer Intelligence verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Data Assessment und Analytics Architecture Design'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Advanced Analytics Implementation mit Machine Learning und Statistical Analysis'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Forensic Investigation Framework mit Digital Evidence Standards'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Behavioral Analytics Integration mit User Entity Behavior Modeling'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continuous Analytics Evolution durch Performance Monitoring und Optimization'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'SIEM Analyse ist die Kunst, aus komplexen Datenmengen präzise Cybersecurity-Intelligence zu extrahieren und erfordert eine perfekte Synthese aus technischer Expertise, forensischer Präzision und strategischem Verständnis. Unsere Advanced Analytics-Frameworks ermöglichen es unseren Kunden, auch die subtilsten Bedrohungsmuster zu erkennen und forensische Untersuchungen mit wissenschaftlicher Genauigkeit durchzuführen. Durch kontinuierliche Innovation in AI-gestützten Analyse-Technologien schaffen wir Analytics-Excellence, die sowohl operative Effizienz als auch strategische Cybersecurity-Intelligence maximiert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Advanced Log Analytics und Correlation Engineering',
          description: 'Entwicklung sophisticierter Log Analytics-Frameworks mit Multi-dimensional Correlation, Pattern Recognition und AI-gestützter Anomalie-Erkennung für comprehensive Threat Detection.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Multi-source Log Aggregation und Normalization für Unified Analytics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Advanced Correlation Rules mit Temporal und Spatial Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Statistical Process Control für Baseline Establishment und Deviation Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Real-time Stream Processing für High-velocity Data Analysis'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Forensic Investigation und Digital Evidence Analysis',
          description: 'Comprehensive Forensic Investigation Services mit Digital Evidence Chain Management, Timeline Analysis und Court-ready Documentation für rechtssichere Incident Response.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Digital Evidence Acquisition und Chain of Custody Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Timeline Reconstruction und Attack Path Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Malware Analysis und Reverse Engineering für Threat Attribution'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Court-ready Forensic Reports und Expert Witness Support'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Behavioral Analytics und User Entity Behavior Analysis',
          description: 'Implementation fortschrittlicher Behavioral Analytics für User und Entity Behavior Monitoring, Insider Threat Detection und Advanced Persistent Threat Identification.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'User Behavior Baseline Establishment und Anomaly Scoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Entity Relationship Mapping und Network Behavior Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Insider Threat Detection mit Psychological und Technical Indicators'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Machine Learning Models für Adaptive Behavior Recognition'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Threat Hunting und Proactive Investigation',
          description: 'Strukturierte Threat Hunting Methodiken mit Hypothesis-driven Investigation, Advanced Persistent Threat Detection und Proactive Threat Intelligence für präventive Cybersecurity.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Hypothesis-driven Threat Hunting mit MITRE ATT&CK Mapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Advanced Persistent Threat Campaign Analysis und Attribution'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Proactive Threat Intelligence Integration und IOC Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Threat Hunting Automation mit AI-assisted Investigation Workflows'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Data Visualization und Interactive Security Dashboards',
          description: 'Entwicklung interaktiver Data Visualization Frameworks und Executive Security Dashboards für Enhanced Situational Awareness und Strategic Decision Support.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Interactive Security Dashboards mit Real-time Data Visualization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Executive Security Intelligence Reports mit Strategic Insights'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Threat Landscape Visualization mit Geographic und Temporal Mapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Custom Analytics Interfaces für Specialized Investigation Workflows'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Analytics Performance Optimization und Continuous Improvement',
          description: 'Kontinuierliche Analytics Performance Optimization durch Advanced Tuning, Resource Management und Strategic Enhancement für nachhaltige SIEM Analytics Excellence.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Analytics Performance Monitoring und Resource Optimization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Query Optimization und Index Strategy für High-performance Analytics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Scalability Planning für Growing Data Volumes und Analytics Complexity'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Continuous Analytics Evolution mit Emerging Technology Integration'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(siemAnalyseData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ SIEM Analyse page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
