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
    console.log('Creating DORA Incident Management page...')

    const doraIncidentManagementData = {
      _type: 'servicePage',
      _id: 'dora-incident-management',
      title: 'DORA Incident Management',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dora-digital-operational-resilience-act/dora-requirements/dora-incident-management'
      },
      parent: {
        _type: 'reference',
        _ref: 'dora-requirements'
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
        title: 'DORA Incident Management | ADVISORI',
        description: 'Professionelles DORA Incident Management für Finanzunternehmen. Spezialisierte Beratung zu ICT-Incident Detection, Response, Classification und Regulatory Reporting für nachhaltige operative Resilienz.',
        keywords: 'DORA Incident Management, ICT Incident Response, Digital Operational Resilience, DORA Compliance, Financial Services Incident Management, Cyber Incident Response, Operational Incident Management, Regulatory Reporting'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DORA Incident Management'
        },
        tagline: 'Professionelles ICT-Incident Management für operative Resilienz',
        heading: 'DORA Incident Management',
        description: 'Das Digital Operational Resilience Act (DORA) stellt umfassende Anforderungen an das Incident Management von Finanzunternehmen. Wir entwickeln robuste Incident Management Frameworks, die schnelle Erkennung, effektive Response und regulatorische Compliance gewährleisten und Ihre Organisation optimal auf ICT-Incidents und operative Störungen vorbereiten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende ICT-Incident Detection und automatisierte Alerting-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strukturierte Incident Classification und Impact Assessment Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effektive Incident Response Teams und Eskalationsverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'DORA-konforme Regulatory Reporting und Dokumentation'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DORA Incident Management',
        description: 'Effektives Incident Management ist ein kritischer Baustein der DORA-Compliance und erfordert einen systematischen Ansatz zur Erkennung, Klassifizierung, Behandlung und Berichterstattung von ICT-Incidents. Unser DORA Incident Management Framework integriert bewährte Incident Response Praktiken mit den spezifischen regulatorischen Anforderungen und schafft dabei eine solide Grundlage für operative Resilienz und Geschäftskontinuität.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung umfassender Incident Detection und Monitoring Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementation strukturierter Incident Classification und Severity Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Aufbau effektiver Incident Response Teams und Koordinationsmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Etablierung DORA-konformer Regulatory Reporting und Dokumentationsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration von Business Continuity Planning und Recovery Strategien'
          }
        ],
        alert: {
          title: 'Incident Management Hinweis',
          content: 'DORA erfordert eine fundamentale Neuausrichtung des Incident Managements mit Fokus auf ICT-spezifische Risiken und regulatorische Berichtspflichten. Ein proaktiver, systematischer Ansatz ist entscheidend für die Minimierung von Ausfallzeiten und die Erfüllung der Compliance-Anforderungen.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in DORA-Incident Management und regulatorischen Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodologien für komplexe ICT-Incident Response Szenarien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von Incident Prevention bis Post-Incident Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Branchenspezifische Erfahrung im Finanzsektor und Cyber Security Umfeld'
            }
          ]
        },
        additionalInfo: 'DORA Incident Management erfordert eine integrierte Herangehensweise, die technische Incident Response, regulatorische Compliance und Business Continuity gleichermaßen berücksichtigt. Unser Framework-Ansatz gewährleistet eine umfassende und nachhaltige Incident Management Lösung.',
        serviceDescription: 'Wir bieten ein vollständiges DORA Incident Management Framework, das von der proaktiven Incident Prevention über die effektive Incident Response bis hin zur kontinuierlichen Verbesserung alle Aspekte des ICT-Incident Managements abdeckt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'ICT Incident Detection und Real-time Monitoring Systems'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Incident Classification Framework und Severity Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Incident Response Team Setup und Coordination Processes'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'DORA Regulatory Reporting und Compliance Documentation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Post-Incident Analysis und Continuous Improvement Programs'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam ein maßgeschneidertes DORA Incident Management Framework, das Ihre spezifischen operativen Anforderungen mit regulatorischen Compliance-Zielen optimal ausbalanciert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer aktuellen Incident Management Capabilities und ICT-Infrastruktur'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer strategischen Incident Management Roadmap mit klaren Prioritäten und Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Design und Implementierung robuster Detection, Response und Recovery Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration von Technologie-Lösungen für automatisierte Incident Detection und Response'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung durch Lessons Learned und Best Practice Integration'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Effektives DORA Incident Management ist der Schlüssel für operative Resilienz und regulatorische Compliance in der digitalen Finanzwelt. Unsere systematischen Ansätze ermöglichen es Finanzunternehmen, ICT-Incidents nicht nur schnell zu erkennen und zu behandeln, sondern proaktiv zu verhindern und als Lernmöglichkeiten zu nutzen. Dabei verbinden wir technische Exzellenz mit regulatorischer Compliance und operativer Effizienz.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ICT Incident Detection & Monitoring Systems',
          description: 'Entwicklung umfassender Systeme zur proaktiven Erkennung und kontinuierlichen Überwachung von ICT-Incidents.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Real-time ICT Infrastructure Monitoring und Anomaly Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Automated Alert Systems und Intelligent Incident Triggering'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Multi-source Data Integration und Correlation Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Predictive Analytics und Early Warning Systems'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Incident Classification & Impact Assessment',
          description: 'Strukturierte Frameworks zur systematischen Klassifizierung und Bewertung von ICT-Incidents.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'DORA-konforme Incident Classification Taxonomies'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Severity Assessment Frameworks und Impact Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Business Impact Assessment und Criticality Evaluation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Automated Classification Tools und Decision Support Systems'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Incident Response Team & Coordination',
          description: 'Aufbau effektiver Incident Response Teams und Koordinationsmechanismen für schnelle und effiziente Incident-Behandlung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Incident Response Team Structure und Role Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Escalation Procedures und Communication Protocols'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Cross-functional Coordination und Stakeholder Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Crisis Management und Executive Communication'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'DORA Regulatory Reporting & Documentation',
          description: 'Umfassende Systeme für DORA-konforme Incident Reporting und regulatorische Dokumentation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Automated Regulatory Reporting Systems und Templates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Incident Documentation Standards und Audit Trails'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Regulatory Timeline Management und Compliance Tracking'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Stakeholder Communication und Public Disclosure Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Business Continuity & Recovery Planning',
          description: 'Integration von Business Continuity Planning und Recovery Strategien in das Incident Management Framework.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Business Continuity Plan Integration und Activation Procedures'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Disaster Recovery Planning und Recovery Time Objectives'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Alternative Service Arrangements und Backup Systems'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Recovery Testing und Validation Procedures'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Post-Incident Analysis & Continuous Improvement',
          description: 'Systematische Post-Incident Analysis und kontinuierliche Verbesserung der Incident Management Capabilities.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Root Cause Analysis und Lessons Learned Documentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Incident Trend Analysis und Pattern Recognition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Process Improvement Recommendations und Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Knowledge Management und Best Practice Sharing'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(doraIncidentManagementData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DORA Incident Management page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
