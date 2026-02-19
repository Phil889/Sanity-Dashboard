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
    console.log('Creating Datenschutzkoordinator Schulung page...')

    const datenschutzkoordinatorSchulungData = {
      _type: 'servicePage',
      _id: 'datenschutzkoordinator-schulung',
      title: 'Datenschutzkoordinator Schulung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/datenschutzkoordinator-schulung'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'regulatory-reporting'
        }
      },
      seo: {
        _type: 'seo',
        title: 'Datenschutzkoordinator Schulung | ADVISORI',
        description: 'Professionelle Schulung und Zertifizierung von Datenschutzkoordinatoren. DSGVO-Excellence, Compliance-Management und strategische Datenschutz-Governance für Finanzinstitute.',
        keywords: 'Datenschutzkoordinator Schulung, DSGVO Training, Data Privacy Officer, Datenschutz Compliance, GDPR Coordinator, Banking Data Protection'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Datenschutzkoordinator Schulung'
        },
        tagline: 'DSGVO-Excellence durch professionelle Qualifizierung',
        heading: 'Datenschutzkoordinator Schulung',
        description: 'Qualifizieren Sie Ihre Datenschutzkoordinatoren zu strategischen Compliance-Experten. Umfassende DSGVO-Schulungen, praxisorientierte Fallstudien und zertifizierte Kompetenzentwicklung für nachhaltigen Datenschutz-Erfolg.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Zertifizierte DSGVO-Expertise und Compliance-Excellence'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Praxisorientierte Fallstudien aus dem Banking-Umfeld'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Strategische Datenschutz-Governance und Risk Management'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Weiterbildung und Best-Practice-Updates'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Datenschutzkoordinator Schulung',
        description: 'Datenschutzkoordinatoren sind das Rückgrat erfolgreicher DSGVO-Compliance. Unsere Schulungsprogramme transformieren Ihre Mitarbeiter zu hochqualifizierten Datenschutz-Experten, die nicht nur regulatorische Anforderungen erfüllen, sondern Datenschutz als strategischen Wettbewerbsvorteil positionieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende DSGVO-Grundlagen und Advanced Compliance-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Banking-spezifische Datenschutz-Herausforderungen und Lösungsansätze'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Data Protection Impact Assessments und Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Incident Response und Breach Notification-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Stakeholder Management und Cross-funktionale Zusammenarbeit'
          }
        ],
        alert: {
          title: 'Compliance-kritischer Erfolgsfaktor',
          content: 'Unqualifizierte Datenschutzkoordinatoren können zu kostspieligen DSGVO-Verstößen, Reputationsschäden und regulatorischen Sanktionen führen. Professionelle Schulung ist essentiell für nachhaltigen Compliance-Erfolg.'
        },
        whyUs: {
          title: 'Unsere Datenschutz-Schulungsexpertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende DSGVO-Expertise mit Banking-Fokus'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxisorientierte Schulungskonzepte mit Real-World Cases'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Zertifizierte Trainer mit regulatorischer Erfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Updates zu aktuellen Rechtsentwicklungen'
            }
          ]
        },
        additionalInfo: 'Professionell geschulte Datenschutzkoordinatoren schaffen nicht nur Compliance-Sicherheit, sondern entwickeln sich zu strategischen Business Partnern, die Datenschutz als Enabler für Innovation und Wettbewerbsvorteile positionieren.',
        serviceDescription: 'Unsere modularen Schulungsprogramme kombinieren theoretische Fundierung mit praktischer Anwendung. Von DSGVO-Grundlagen über Advanced Compliance-Strategien bis hin zu Leadership-Skills für Datenschutz-Verantwortliche.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'DSGVO-Fundamentals und Legal Framework'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Banking-spezifische Datenschutz-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Risk Assessment und Impact Analysis'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Incident Management und Crisis Communication'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Strategic Leadership und Change Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Datenschutz-Schulungsansatz',
        description: 'Wir entwickeln Datenschutz-Kompetenz systematisch und nachhaltig durch praxisorientierte Lernformate, die theoretisches Wissen mit praktischer Anwendung verbinden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Kompetenz-Assessment und individueller Lernpfad'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Modulare Schulungsinhalte mit Banking-Fokus'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Praxisorientierte Workshops und Case Studies'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Zertifizierung und Kompetenz-Validation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Ongoing Support und Continuous Learning'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat unsere Datenschutzkoordinatoren nicht nur umfassend geschult, sondern zu strategischen Compliance-Experten entwickelt. Die praxisorientierten Schulungsinhalte und Banking-spezifischen Case Studies haben unsere DSGVO-Compliance auf ein neues Niveau gehoben.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'DSGVO-Grundlagenschulung & Compliance-Excellence',
          description: 'Umfassende Qualifizierung in DSGVO-Grundlagen, Compliance-Strategien und Banking-spezifischen Datenschutz-Anforderungen für solide Expertise-Fundierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'DSGVO-Rechtsrahmen und Compliance-Grundlagen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Banking-spezifische Datenschutz-Herausforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risk Assessment und Data Protection Impact Assessments'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Praxisorientierte Fallstudien und Anwendungsszenarien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Advanced Datenschutz-Management & Leadership',
          description: 'Spezialisierte Schulungen für erfahrene Koordinatoren in strategischem Datenschutz-Management, Crisis Response und organisationaler Führung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Strategic Data Privacy Governance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Incident Response und Breach Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Stakeholder Communication und Change Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Continuous Monitoring und Compliance-Optimization'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(datenschutzkoordinatorSchulungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Datenschutzkoordinator Schulung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
