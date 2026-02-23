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
    console.log('Creating Privacy Program page...')

    const privacyProgramData = {
      _type: 'servicePage',
      _id: 'regulatory-compliance-management-privacy-program',
      title: 'Privacy Program',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/privacy-program'
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
        title: 'Privacy Program | ADVISORI',
        description: 'Implementieren Sie ein umfassendes Datenschutzprogramm mit GDPR-Compliance, Privacy by Design und strategischem Datenschutzmanagement für nachhaltige Compliance.',
        keywords: 'Privacy Program, GDPR, Datenschutz, Privacy by Design, DSGVO, Datenschutzmanagement, Compliance, Data Protection'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Privacy Program'
        },
        tagline: 'Strategisches Datenschutzmanagement für nachhaltige Compliance',
        heading: 'Privacy Program',
        description: 'Entwickeln Sie ein ganzheitliches Datenschutzprogramm, das nicht nur regulatorische Anforderungen erfüllt, sondern Datenschutz als strategischen Wettbewerbsvorteil etabliert.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige GDPR/DSGVO-Compliance und Schutz vor Bußgeldern'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Privacy by Design Integration in alle Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Stärkung des Kundenvertrauens durch transparenten Datenschutz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Proaktives Risikomanagement und Incident Response'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Privacy Program',
        description: 'Ein strategisches Privacy Program geht über reine Compliance hinaus und etabliert Datenschutz als integralen Bestandteil Ihrer Unternehmensstrategie. Wir unterstützen Sie bei der Entwicklung und Implementierung eines umfassenden Datenschutzprogramms, das sowohl regulatorische Anforderungen erfüllt als auch Geschäftswert schafft.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung einer ganzheitlichen Privacy-Strategie und Governance-Struktur'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung von Privacy by Design Prinzipien in allen Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Aufbau effektiver Data Protection Impact Assessment (DPIA) Verfahren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Etablierung robuster Betroffenenrechte-Management-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Verbesserung der Datenschutzmaßnahmen'
          }
        ],
        alert: {
          title: 'Strategischer Vorteil',
          content: 'Ein gut implementiertes Privacy Program schafft nicht nur Compliance, sondern wird zum Differenzierungsfaktor im Markt und stärkt das Vertrauen von Kunden, Partnern und Stakeholdern.'
        },
        whyUs: {
          title: 'Unsere Privacy-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in internationalem Datenschutzrecht und Privacy Engineering'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Methoden für die Integration von Privacy in komplexe IT-Landschaften'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von strategischer Planung bis zur operativen Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung und Anpassung an sich ändernde Anforderungen'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit robusten Privacy Programmen verzeichnen im Durchschnitt 40% weniger Datenschutzverletzungen und 60% höheres Kundenvertrauen. Investieren Sie in strategischen Datenschutz!',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Portfolio für die Entwicklung und Implementierung eines strategischen Privacy Programs, das Compliance sicherstellt und gleichzeitig Geschäftswert schafft.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Privacy Strategy & Governance Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Privacy by Design Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Data Protection Impact Assessment (DPIA) Framework'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Betroffenenrechte-Management-System'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Privacy Incident Response & Breach Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Privacy-First Ansatz',
        description: 'Wir entwickeln mit Ihnen ein Privacy Program, das Datenschutz von Reaktion zu Proaktion transformiert und als strategischen Enabler positioniert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Privacy-Roadmap basierend auf Geschäftszielen und Risikoprofil'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Integration von Privacy-Prinzipien in bestehende Prozesse und Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Aufbau von Privacy-Kompetenzen und Verantwortlichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung von Monitoring und kontinuierlicher Verbesserung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Messbare Privacy-KPIs und Business-Impact-Assessment'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns dabei geholfen, Datenschutz von einer Compliance-Anforderung zu einem strategischen Differenzierungsfaktor zu entwickeln. Unser Privacy Program schafft heute echten Geschäftswert und Kundenvertrauen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Privacy Strategy & Governance',
          description: 'Entwicklung einer umfassenden Privacy-Strategie mit klaren Governance-Strukturen und Verantwortlichkeiten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Privacy-Vision und strategische Ziele Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Governance-Framework mit Rollen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Privacy-Richtlinien und Verfahrensdokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Privacy Office Setup und Betriebsmodell'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Privacy by Design Implementation',
          description: 'Integration von Datenschutz-Prinzipien in alle Entwicklungs- und Geschäftsprozesse von Grund auf.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Privacy Engineering Methoden und Tools'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklungsprozess-Integration (DevSecPrivacy)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Privacy-Impact-Assessment in der Systemarchitektur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Technische Datenschutzmaßnahmen und Privacy-Enhancing Technologies'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(privacyProgramData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Privacy Program page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
