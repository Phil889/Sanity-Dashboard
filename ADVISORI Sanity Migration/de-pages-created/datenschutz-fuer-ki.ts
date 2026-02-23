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
    console.log('Creating Datenschutz für KI page...')

    const datenschutzFuerKiData = {
      _type: 'servicePage',
      _id: 'datenschutz-fuer-ki',
      title: 'Datenschutz für KI',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/datenschutz-fuer-ki'
      },
      parent: {
        _type: 'reference',
        _ref: 'ki-kuenstliche-intelligenz'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'digitale-transformation'
        }
      },
      seo: {
        _type: 'seo',
        title: 'Datenschutz für KI | DSGVO-konforme AI-Implementierung | ADVISORI',
        description: 'Professioneller Datenschutz für KI-Systeme. Privacy-by-Design AI-Architekturen, DSGVO-Compliance und sichere Datenverarbeitung für Künstliche Intelligenz in Unternehmen.',
        keywords: 'Datenschutz KI, DSGVO AI, Privacy by Design, KI Compliance, AI Datenschutz, DSGVO konforme KI, Datenschutz Künstliche Intelligenz, AI Privacy'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Datenschutz für KI'
        },
        tagline: 'DSGVO-konformer Datenschutz für KI-Systeme',
        heading: 'Datenschutz für KI',
        description: 'Implementieren Sie Künstliche Intelligenz mit höchsten Datenschutzstandards. Unsere Privacy-by-Design-Ansätze gewährleisten vollständige DSGVO-Compliance und schützen personenbezogene Daten in AI-Systemen ohne Kompromisse bei der Leistung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Privacy-by-Design AI-Architekturen für vollständige DSGVO-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Datenschutz-Folgenabschätzung für KI-Systeme und Algorithmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Sichere Datenverarbeitung mit Anonymisierung und Pseudonymisierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Transparenz und Erklärbarkeit für datenschutzkonforme AI-Entscheidungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Datenschutz für KI',
        description: 'Der Einsatz von Künstlicher Intelligenz bringt komplexe Datenschutzherausforderungen mit sich, die weit über traditionelle IT-Sicherheit hinausgehen. Personenbezogene Daten müssen in AI-Systemen besonders geschützt werden, während gleichzeitig die Funktionalität und Leistungsfähigkeit der KI erhalten bleibt. ADVISORI entwickelt DSGVO-konforme KI-Lösungen, die Datenschutz von Grund auf mitdenken und höchste Compliance-Standards erfüllen, ohne die Innovation zu behindern.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Privacy-by-Design Implementierung für KI-Systeme und Machine Learning'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Datenschutz-Folgenabschätzung und Risikobewertung für AI-Projekte'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Anonymisierung und Pseudonymisierung von Trainingsdaten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Transparenz und Erklärbarkeit für algorithmusbasierte Entscheidungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Betroffenenrechte und Compliance-Management für KI-Anwendungen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Datenschutz in KI-Systemen erfordert mehr als nur technische Maßnahmen. Eine ganzheitliche Privacy-by-Design-Strategie, die rechtliche, technische und organisatorische Aspekte vereint, ist der Schlüssel für erfolgreiche und compliant AI-Implementierungen, die gleichzeitig Wettbewerbsvorteile schaffen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Expertise in DSGVO-konformer KI-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Privacy-by-Design Methodologie für AI-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfassende Datenschutz-Compliance für KI-Projekte'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Strategische Beratung für datenschutzkonforme AI-Transformation'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit datenschutzkonformen KI-Systemen minimieren regulatorische Risiken, schaffen Vertrauen bei Kunden und Stakeholdern und positionieren sich als verantwortungsvolle Innovatoren. Investieren Sie in eine sichere und compliant AI-Zukunft!',
        serviceDescription: 'Wir bieten Ihnen umfassende Datenschutzlösungen für KI-Systeme, von der Privacy-by-Design-Implementierung über Compliance-Management bis hin zur kontinuierlichen Überwachung und Optimierung Ihrer AI-Datenschutzmaßnahmen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Privacy-by-Design AI-Architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Datenschutz-Folgenabschätzung für KI'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'DSGVO-Compliance Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Anonymisierung & Pseudonymisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'AI Transparency & Explainability'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine umfassende Datenschutzstrategie für Ihre KI-Systeme, die von der Konzeption bis zur Implementierung höchste DSGVO-Standards erfüllt und gleichzeitig die Leistungsfähigkeit und Innovationskraft Ihrer AI-Lösungen maximiert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Datenschutz-Impact-Assessment und umfassende Risikobewertung für KI-Projekte'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Privacy-by-Design Implementierung in AI-Architekturen und Datenflüsse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung datenschutzkonformer Datenverarbeitungsprozesse und Governance'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung von Transparenz, Erklärbarkeit und Betroffenenrechten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Compliance-Überwachung und proaktive Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Datenschutz in KI-Systemen ist nicht nur eine regulatorische Anforderung, sondern ein strategischer Wettbewerbsvorteil und Vertrauensbildner. Unsere Privacy-by-Design-Ansätze ermöglichen es Unternehmen, das volle Potenzial der Künstlichen Intelligenz zu nutzen, während sie gleichzeitig höchste Datenschutzstandards erfüllen und das Vertrauen ihrer Kunden sowie Stakeholder nachhaltig stärken.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Privacy-by-Design AI-Architekturen',
          description: 'Entwicklung von KI-Systemen mit integriertem Datenschutz von der ersten Konzeption an.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Datenschutzfreundliche AI-Systemarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Datenminimierung in KI-Modellen und Verarbeitungsprozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Sichere Datenflüsse und granulare Zugriffskontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integrierte Datenschutz-Governance und Compliance-Monitoring'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Datenschutz-Folgenabschätzung für KI',
          description: 'Umfassende Bewertung der Datenschutzrisiken und -auswirkungen von KI-Projekten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'DSFA-Durchführung speziell für KI-Systeme und Algorithmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Risikobewertung und maßgeschneiderte Schutzmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Umfassende Compliance-Dokumentation und Audit-Trails'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Behördenkommunikation und regulatorische Abstimmung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(datenschutzFuerKiData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Datenschutz für KI page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
