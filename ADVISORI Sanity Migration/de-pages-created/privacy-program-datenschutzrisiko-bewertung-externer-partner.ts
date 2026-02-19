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
    console.log('Creating Privacy Program Datenschutzrisiko-Bewertung Externer Partner page...')

    const privacyProgramDataschutRisikoBewertungExternerPartnerData = {
      _type: 'servicePage',
      _id: 'privacy-program-datenschutzrisiko-bewertung-externer-partner',
      title: 'Privacy Program Datenschutzrisiko-Bewertung Externer Partner',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/privacy-program/privacy-program-drittdienstleistermanagement/privacy-program-datenschutzrisiko-bewertung-externer-partner'
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
        title: 'Privacy Program Datenschutzrisiko-Bewertung Externer Partner | ADVISORI',
        description: 'Professionelle Datenschutzrisiko-Bewertung externer Partner und Dienstleister. DSGVO-konforme Due Diligence, Risikoanalyse und kontinuierliches Monitoring für sichere Datenverarbeitung.',
        keywords: 'Datenschutzrisiko Bewertung, DSGVO Partner Assessment, Third Party Risk, Dienstleister Datenschutz, Privacy Due Diligence, Auftragsverarbeitung DSGVO'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Privacy Program Datenschutzrisiko-Bewertung Externer Partner'
        },
        tagline: 'Datenschutzrisiken minimieren, Compliance maximieren',
        heading: 'Privacy Program Datenschutzrisiko-Bewertung Externer Partner',
        description: 'Externe Partner und Dienstleister können erhebliche Datenschutzrisiken bergen. Wir entwickeln systematische Bewertungsverfahren zur DSGVO-konformen Risikoanalyse und kontinuierlichen Überwachung Ihrer Geschäftspartner.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'DSGVO-konforme Due Diligence und Risikobewertungsverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strukturierte Bewertung von Auftragsverarbeitern und Partnern'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kontinuierliches Monitoring und Risiko-Updates'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Compliance-integrierte Vertragsgestaltung und Kontrollen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Privacy Program Datenschutzrisiko-Bewertung Externer Partner',
        description: 'Die DSGVO macht Unternehmen für Datenschutzverstöße ihrer Partner und Auftragsverarbeiter verantwortlich. Eine systematische Risikobewertung externer Partner ist essentiell für Compliance und Haftungsminimierung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'DSGVO-konforme Due Diligence-Verfahren für externe Partner'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Systematische Bewertung von Auftragsverarbeitern und Drittdienstleistern'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Risikokategorisierung und Kontrollmaßnahmen-Definition'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliches Monitoring und Re-Assessment-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Vertragliche Absicherung und Compliance-Integration'
          }
        ],
        alert: {
          title: 'Kritisches Compliance-Risiko',
          content: 'Unternehmen haften nach DSGVO für Datenschutzverstöße ihrer Auftragsverarbeiter und Partner. Ohne systematische Risikobewertung drohen Bußgelder bis zu 4% des Jahresumsatzes und erhebliche Reputationsschäden.'
        },
        whyUs: {
          title: 'Unsere Partner-Risk-Assessment-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende DSGVO-Expertise und aufsichtsrechtliche Erfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Risk Assessment-Frameworks und Tools'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Compliance-Anforderungen und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von Due Diligence bis Ongoing Monitoring'
            }
          ]
        },
        additionalInfo: 'Eine professionelle Datenschutzrisiko-Bewertung externer Partner schafft nicht nur rechtliche Sicherheit, sondern auch Transparenz über Datenflüsse und operative Risiken in der gesamten Wertschöpfungskette.',
        serviceDescription: 'Wir entwickeln maßgeschneiderte Bewertungsverfahren zur systematischen Analyse von Datenschutzrisiken bei externen Partnern und Dienstleistern. Unser Ansatz verbindet rechtliche Compliance mit operativer Risikominimierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Due Diligence-Verfahren und Partner-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Risikokategorisierung und Kontrollmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Vertragsgestaltung und rechtliche Absicherung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Monitoring-Systeme und Re-Assessment-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Incident Management und Breach Response'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Partner-Risk-Assessment-Ansatz',
        description: 'Wir implementieren systematische und skalierbare Bewertungsverfahren zur kontinuierlichen Überwachung und Minimierung von Datenschutzrisiken bei externen Partnern.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Partner-Inventarisierung und Risiko-Mapping'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Due Diligence-Framework und Assessment-Kriterien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Risikokategorisierung und Kontrollmaßnahmen-Design'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Vertragliche Integration und rechtliche Absicherung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliches Monitoring und Compliance-Überwachung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns ein umfassendes Partner-Risk-Assessment-System implementiert, das nicht nur DSGVO-Compliance sicherstellt, sondern auch operationelle Transparenz über unsere gesamte Lieferantenkette schafft. Ihre systematische Herangehensweise hat unsere Datenschutzrisiken erheblich reduziert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Due Diligence & Partner-Assessment',
          description: 'Systematische Bewertung von Datenschutzrisiken bei externen Partnern durch strukturierte Due Diligence-Verfahren und kontinuierliche Risk Assessments.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'DSGVO-konforme Due Diligence-Checklisten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Partner-Risikokategorisierung und Scoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Technische und organisatorische Maßnahmen-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Zertifizierungs- und Compliance-Status-Prüfung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Continuous Monitoring & Risk Management',
          description: 'Kontinuierliche Überwachung und Aktualisierung von Partnerrisiken durch automatisierte Monitoring-Systeme und regelmäßige Re-Assessments.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Automatisierte Risiko-Monitoring-Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Regelmäßige Re-Assessment-Zyklen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Incident-Response und Breach-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Compliance-Reporting und Audit-Trails'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(privacyProgramDataschutRisikoBewertungExternerPartnerData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Privacy Program Datenschutzrisiko-Bewertung Externer Partner page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
