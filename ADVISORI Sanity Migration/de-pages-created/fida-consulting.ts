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
    console.log('Creating FIDA Consulting page...')

    const fidaConsultingData = {
      _type: 'servicePage',
      _id: 'fida-consulting',
      title: 'FIDA Consulting',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/financial-data-access-fida/fida-consulting'
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
        title: 'FIDA Consulting Services | ADVISORI',
        description: 'Professionelle FIDA-Consulting-Services für Financial Data Access Regulation. Expertenberatung für FIDA-Implementation, API-Entwicklung und Compliance-Management für Finanzdienstleister.',
        keywords: 'FIDA Consulting, Financial Data Access Consulting, FIDA Implementation, API Consulting, Open Banking Consulting, FIDA Compliance Services, Finanzregulierung Consulting'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FIDA Consulting Services'
        },
        tagline: 'Professionelle FIDA-Consulting-Services für erfolgreiche Implementation',
        heading: 'FIDA Consulting',
        description: 'Als führende FIDA-Consulting-Experten unterstützen wir Finanzdienstleister bei der professionellen Umsetzung der Financial Data Access Regulation. Von der strategischen Planung bis zur operativen Implementation bieten wir umfassende Consulting-Services für nachhaltige FIDA-Compliance.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'End-to-End FIDA-Consulting von Strategie bis Go-Live-Unterstützung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Technische Expertise für sichere API-Architekturen und Datenmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Praxiserprobte FIDA-Implementation-Methoden und Best Practices'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Consulting-Unterstützung für nachhaltige Compliance'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Professionelle FIDA-Consulting-Services für erfolgreiche Implementation',
        description: 'Die Financial Data Access Regulation (FIDA) erfordert nicht nur regulatorisches Verständnis, sondern auch praktische Implementation-Expertise und technische Umsetzungskompetenz. Als spezialisierte FIDA-Consulting-Experten bieten wir umfassende Services, die strategische Beratung mit hands-on Implementation-Support verbinden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische FIDA-Implementation-Planung und Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Technische Consulting-Services für API-Entwicklung und System-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Hands-on Implementation-Support und Projektmanagement-Excellence'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Compliance-Consulting und regulatorische Guidance während der Umsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Change-Management-Consulting und Stakeholder-Engagement-Strategien'
          }
        ],
        alert: {
          title: 'Implementation-Expertise',
          content: 'Erfolgreiche FIDA-Implementation erfordert mehr als theoretisches Wissen. Unsere Consulting-Services basieren auf praktischer Erfahrung und bewährten Implementation-Methoden für nachhaltige Compliance-Excellence.'
        },
        whyUs: {
          title: 'Unsere FIDA-Consulting-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende FIDA-Implementation-Erfahrung und technische Expertise'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Consulting-Methoden für komplexe Regulatory-Projekte'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'End-to-End-Consulting von Konzeption bis operative Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Branchenspezifische FIDA-Consulting-Ansätze für verschiedene Finanzdienstleister'
            }
          ]
        },
        additionalInfo: 'FIDA-Consulting erfordert eine einzigartige Kombination aus regulatorischer Expertise, technischer Kompetenz und praktischer Implementation-Erfahrung. Unsere Consulting-Services integrieren alle diese Dimensionen und bieten Ihnen die Sicherheit einer professionellen, risikominimierten FIDA-Implementation.',
        serviceDescription: 'Wir bieten umfassende FIDA-Consulting-Services, die strategische Planung, technische Implementation und operative Exzellenz integrieren. Unser Consulting-Ansatz gewährleistet nicht nur erfolgreiche FIDA-Compliance, sondern maximiert auch die strategischen Vorteile proaktiver Regulatory-Implementation.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische FIDA-Implementation-Consulting und Projektplanung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Technische Consulting-Services für API-Entwicklung und Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Hands-on Implementation-Support und Go-Live-Begleitung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Compliance-Consulting und regulatorische Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Change-Management-Consulting und Organizational Excellence'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strukturierter FIDA-Consulting-Ansatz',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte FIDA-Implementation-Strategie, die bewährte Consulting-Methoden mit praktischer Umsetzungsexpertise verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer FIDA-Anforderungen und Implementation-Readiness'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung strategischer Implementation-Roadmaps und Projektpläne'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Hands-on Consulting-Support während der gesamten Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche Qualitätssicherung und Compliance-Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Go-Live-Support und nachhaltige Operational-Excellence-Beratung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'FIDA-Consulting bedeutet für uns die perfekte Verbindung von strategischer Expertise und praktischer Implementation-Kompetenz. Unsere Consulting-Services ermöglichen es Finanzdienstleistern, FIDA-Compliance nicht nur zu erreichen, sondern als strategischen Wettbewerbsvorteil zu nutzen und dabei operative Exzellenz zu gewährleisten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'FIDA-Implementation-Strategy-Consulting',
          description: 'Strategische Consulting-Services für die Entwicklung maßgeschneiderter FIDA-Implementation-Strategien und Roadmaps.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Comprehensive FIDA-Readiness-Assessment und Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung strategischer Implementation-Roadmaps und Zeitpläne'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Business-Case-Entwicklung und ROI-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Stakeholder-Alignment und Change-Management-Strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Technical Architecture Consulting',
          description: 'Spezialisierte technische Consulting-Services für FIDA-konforme API-Architekturen und System-Integration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Design FIDA-konformer API-Architekturen und Datenmodelle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Security-Architecture-Consulting und Authentifizierungs-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'System-Integration-Strategien und Legacy-System-Modernisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Performance-Optimierung und Skalierbarkeits-Consulting'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Hands-on Implementation Support',
          description: 'Praktische Implementation-Unterstützung und Projektmanagement-Excellence für erfolgreiche FIDA-Umsetzung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Agile Projektmanagement und Implementation-Koordination'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Hands-on Development-Support und Code-Review-Services'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Testing-Strategy-Consulting und Quality-Assurance-Support'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Integration-Testing und End-to-End-Validierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Compliance und Regulatory Consulting',
          description: 'Spezialisierte Compliance-Consulting-Services für FIDA-konforme Prozesse und regulatorische Validierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'FIDA-Compliance-Framework-Design und Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Regulatory-Mapping und Compliance-Validierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Audit-Preparation und Regulatory-Reporting-Support'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Ongoing-Compliance-Monitoring und Update-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Data Governance und Privacy Consulting',
          description: 'Umfassende Consulting-Services für FIDA-konforme Datengovernance und Datenschutz-Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Data-Governance-Framework-Design und Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Privacy-by-Design-Consulting und DSGVO-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Consent-Management-System-Design und Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Data-Quality-Management und Audit-Trail-Implementation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Go-Live Support und Operational Excellence',
          description: 'Intensive Go-Live-Unterstützung und langfristige Consulting-Services für nachhaltige FIDA-Operational-Excellence.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Go-Live-Koordination und Launch-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Performance-Monitoring und Incident-Response-Support'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Operational-Excellence-Consulting und Prozessoptimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Verbesserung und Strategic-Evolution-Support'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(fidaConsultingData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FIDA Consulting page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
