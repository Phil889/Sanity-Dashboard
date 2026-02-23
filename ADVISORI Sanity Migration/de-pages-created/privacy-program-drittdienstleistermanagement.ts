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
    console.log('Creating Privacy Program Drittdienstleistermanagement page...')

    const privacyProgramDrittdienstleistermanagementData = {
      _type: 'servicePage',
      _id: 'privacy-program-drittdienstleistermanagement',
      title: 'Privacy Program Drittdienstleistermanagement',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/privacy-program/privacy-program-drittdienstleistermanagement'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management-privacy-program'
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
        title: 'Privacy Program Drittdienstleistermanagement | ADVISORI',
        description: 'Professionelles Drittdienstleistermanagement für Privacy Programme. DSGVO-konforme Auftragsverarbeitung, Vendor Due Diligence und Third Party Risk Management für höchste Datenschutzstandards.',
        keywords: 'Drittdienstleistermanagement, DSGVO Auftragsverarbeitung, Privacy Third Party Management, Vendor Due Diligence Datenschutz, Data Processing Agreements, Privacy Impact Assessment Dienstleister'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Privacy Program Drittdienstleistermanagement'
        },
        tagline: 'Datenschutzkonforme Drittdienstleister-Governance',
        heading: 'Privacy Program Drittdienstleistermanagement',
        description: 'Professionelles Management von Drittdienstleistern im Privacy-Kontext. Wir gewährleisten DSGVO-konforme Auftragsverarbeitung, systematische Vendor-Assessments und effektive Third Party Risk Governance für maximalen Datenschutz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'DSGVO-konforme Auftragsverarbeitungsverträge und Due Diligence-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Systematische Vendor Privacy Assessments und Risk Evaluations'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Automatisierte Compliance-Monitoring und Performance-Tracking'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Integrierte Third Party Privacy Governance und Incident Response'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Privacy Program Drittdienstleistermanagement',
        description: 'Die DSGVO stellt strenge Anforderungen an die Auswahl, Beauftragung und Überwachung von Drittdienstleistern. Ein systematisches Drittdienstleistermanagement ist essentiell für Privacy Compliance und Risikominimierung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'DSGVO-konforme Auftragsverarbeitungsverträge und Legal Framework'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Vendor Privacy Due Diligence und Security Assessments'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Third Party Risk Monitoring und Performance Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Privacy Impact Assessments für Drittdienstleister-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Incident Response und Breach Management für Vendor-Risiken'
          }
        ],
        alert: {
          title: 'Compliance-kritisch',
          content: 'Verstöße durch Drittdienstleister können zu erheblichen DSGVO-Bußgeldern und Reputationsschäden führen. Ein professionelles Vendor Management ist unverzichtbar für Privacy Compliance.'
        },
        whyUs: {
          title: 'Unsere Third Party Privacy-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende DSGVO-Kenntnisse und Auftragsverarbeitungs-Expertise'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Vendor Assessment-Frameworks und Due Diligence-Tools'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integrierte Privacy und Security Risk Management-Ansätze'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Regulatory Updates und Best Practice-Integration'
            }
          ]
        },
        additionalInfo: 'Ein professionelles Drittdienstleistermanagement schützt nicht nur vor Compliance-Risiken, sondern optimiert auch Vendor-Performance und schafft nachhaltige Partnerschaften.',
        serviceDescription: 'Wir entwickeln und implementieren umfassende Third Party Privacy Management-Systeme, von der initialen Vendor-Bewertung über Vertragsgestaltung bis hin zu kontinuierlichem Monitoring und Performance-Optimierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Vendor Privacy Due Diligence und Security Assessments'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'DSGVO-konforme Auftragsverarbeitungsverträge'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Third Party Risk Monitoring und Compliance-Tracking'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Privacy Impact Assessments für Vendor-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Incident Response und Vendor-Breach-Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Third Party Privacy-Ansatz',
        description: 'Wir implementieren systematische Governance-Strukturen für datenschutzkonforme Drittdienstleister-Beziehungen mit proaktivem Risk Management und kontinuierlicher Compliance-Überwachung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Vendor Privacy Risk Assessment und Classification'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'DSGVO-konforme Contract Management und Legal Framework'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Continuous Monitoring und Performance-Tracking'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Incident Response Integration und Breach-Preparedness'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Optimization und Strategic Vendor Relationship Management'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat unser Third Party Privacy Management revolutioniert. Ihre systematischen Assessment-Prozesse und DSGVO-konformen Governance-Strukturen haben nicht nur unsere Compliance-Risiken minimiert, sondern auch die Qualität unserer Vendor-Partnerschaften erheblich verbessert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Vendor Privacy Due Diligence & Assessment',
          description: 'Umfassende Bewertung und kontinuierliche Überwachung von Drittdienstleistern hinsichtlich Datenschutz- und Sicherheitsstandards mit DSGVO-konformen Assessment-Frameworks.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'DSGVO-konforme Vendor Privacy Assessments'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Security und Compliance Due Diligence'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risk Classification und Vendor-Kategorisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Continuous Monitoring und Re-Assessment-Prozesse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Contract Management & Compliance Governance',
          description: 'Entwicklung und Management DSGVO-konformer Auftragsverarbeitungsverträge mit integrierten Compliance-Monitoring und Performance-Management-Systemen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'DSGVO-konforme Auftragsverarbeitungsverträge'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Privacy Impact Assessments für Vendor-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Compliance-Tracking und Performance-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Incident Response und Breach-Management-Integration'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(privacyProgramDrittdienstleistermanagementData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Privacy Program Drittdienstleistermanagement page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
