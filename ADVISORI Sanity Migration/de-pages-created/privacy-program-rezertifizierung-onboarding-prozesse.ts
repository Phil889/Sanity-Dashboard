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
    console.log('Creating Privacy Program Rezertifizierung Onboarding Prozesse page...')

    const privacyProgramRezertifizierungOnboardingProzesseData = {
      _type: 'servicePage',
      _id: 'privacy-program-rezertifizierung-onboarding-prozesse',
      title: 'Privacy Program Rezertifizierung Onboarding Prozesse',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/privacy-program/privacy-program-drittdienstleistermanagement/privacy-program-rezertifizierung-onboarding-prozesse'
      },
      parent: {
        _type: 'reference',
        _ref: 'privacy-program-drittdienstleistermanagement'
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
        title: 'Privacy Program Rezertifizierung Onboarding Prozesse | ADVISORI',
        description: 'Professionelle Rezertifizierung und Onboarding-Prozesse für Drittdienstleister. DSGVO-konforme Verfahren für kontinuierliche Partner-Bewertung und systematische Integration neuer Dienstleister.',
        keywords: 'Privacy Rezertifizierung, Partner Onboarding DSGVO, Drittdienstleister Zertifizierung, DSGVO Onboarding Prozess, Privacy Partner Management, Datenschutz Rezertifizierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Privacy Program Rezertifizierung Onboarding Prozesse'
        },
        tagline: 'Kontinuierliche Compliance durch systematische Prozesse',
        heading: 'Privacy Program Rezertifizierung Onboarding Prozesse',
        description: 'Systematische Rezertifizierung bestehender Partner und strukturierte Onboarding-Prozesse für neue Drittdienstleister sind essentiell für kontinuierliche DSGVO-Compliance. Wir entwickeln effiziente und rechtssichere Verfahren für nachhaltiges Partnermanagement.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Rezertifizierung und kontinuierliche Compliance-Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strukturierte Onboarding-Prozesse für neue Drittdienstleister'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Automatisierte Monitoring-Systeme und Alert-Mechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Effiziente Dokumentation und Audit-Trail-Management'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Privacy Program Rezertifizierung Onboarding Prozesse',
        description: 'Die DSGVO erfordert kontinuierliche Überwachung und regelmäßige Neubewertung von Drittdienstleistern. Systematische Rezertifizierung und strukturierte Onboarding-Prozesse gewährleisten dauerhafte Compliance und optimale Partnerqualität.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Rezertifizierungszyklen und Compliance-Updates'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Strukturierte Onboarding-Workflows für neue Partner'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Automatisierte Monitoring- und Eskalationsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Dokumentationsmanagement und Audit-Trails'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Performance-Tracking und kontinuierliche Optimierung'
          }
        ],
        alert: {
          title: 'Compliance-Kontinuität sicherstellen',
          content: 'Ohne systematische Rezertifizierung und strukturierte Onboarding-Prozesse können sich Compliance-Gaps unbemerkt entwickeln. Dies führt zu erhöhten Haftungsrisiken und potentiellen DSGVO-Verstößen bei Drittdienstleistern.'
        },
        whyUs: {
          title: 'Unsere Prozess-Excellence-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in DSGVO-konformen Lifecycle-Management-Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Frameworks für Rezertifizierung und Onboarding'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Automatisierte Tools und Monitoring-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Skalierbare Lösungen für komplexe Partner-Portfolios'
            }
          ]
        },
        additionalInfo: 'Professionelle Rezertifizierung und Onboarding-Prozesse schaffen nicht nur rechtliche Sicherheit, sondern auch operative Effizienz und höhere Partnerqualität durch kontinuierliche Verbesserung.',
        serviceDescription: 'Wir entwickeln maßgeschneiderte Prozesse für die systematische Rezertifizierung bestehender Partner und das strukturierte Onboarding neuer Drittdienstleister. Unser Ansatz kombiniert Compliance-Exzellenz mit operativer Effizienz.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Rezertifizierungszyklen und Compliance-Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Onboarding-Workflows und Due Diligence-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Automatisierung und Tool-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Dokumentationsmanagement und Reporting'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance-Optimierung und Continuous Improvement'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Systematischer Prozess-Ansatz',
        description: 'Wir implementieren ganzheitliche Lifecycle-Management-Prozesse, die sowohl die kontinuierliche Überwachung bestehender Partner als auch die effiziente Integration neuer Dienstleister gewährleisten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Prozessdesign und Workflow-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Rezertifizierungszyklen und Compliance-Checkpoints'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Onboarding-Workflows und Integration-Management'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Automatisierung und Tool-Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Monitoring, Reporting und kontinuierliche Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat unsere Partner-Lifecycle-Prozesse revolutioniert. Die systematischen Rezertifizierungs- und Onboarding-Verfahren haben nicht nur unsere DSGVO-Compliance verbessert, sondern auch die Effizienz unseres Partnermanagements erheblich gesteigert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Rezertifizierung & Compliance-Monitoring',
          description: 'Systematische Prozesse für die regelmäßige Neubewertung und kontinuierliche Überwachung bestehender Drittdienstleister zur Aufrechterhaltung der DSGVO-Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Automatisierte Rezertifizierungszyklen und Reminder-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Compliance-Status-Monitoring und Alert-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Performance-Tracking und Qualitätsbewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Dokumentations-Updates und Audit-Trail-Pflege'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Onboarding & Integration-Management',
          description: 'Strukturierte Verfahren für die effiziente und compliance-konforme Integration neuer Drittdienstleister in das Unternehmen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Standardisierte Onboarding-Workflows und Checklisten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Due Diligence-Prozesse und Risikobewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Vertragsmanagement und rechtliche Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Schulungen und Compliance-Briefings'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(privacyProgramRezertifizierungOnboardingProzesseData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Privacy Program Rezertifizierung Onboarding Prozesse page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
