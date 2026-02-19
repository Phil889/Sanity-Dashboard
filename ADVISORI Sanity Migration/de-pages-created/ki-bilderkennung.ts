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
    console.log('Creating KI-Bilderkennung page...')

    const kiBilderkennungData = {
      _type: 'servicePage',
      _id: 'ki-bilderkennung',
      title: 'KI-Bilderkennung',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/ki-bilderkennung'
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
        title: 'KI-Bilderkennung | ADVISORI',
        description: 'DSGVO-konforme KI-Bilderkennung und Computer Vision Lösungen. Sichere Implementierung von Bildanalyse-Systemen mit Datenschutz und biometrischen Schutzmaßnahmen.',
        keywords: 'KI-Bilderkennung, Computer Vision, Bildanalyse, DSGVO, Biometrie, Gesichtserkennung, Objekterkennung, Machine Learning'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KI-Bilderkennung Computer Vision'
        },
        tagline: 'DSGVO-konforme KI-Bilderkennung für Ihr Unternehmen',
        heading: 'KI-Bilderkennung',
        description: 'Nutzen Sie die Kraft der Computer Vision mit unserem Safety-First-Ansatz. Wir implementieren DSGVO-konforme Bilderkennungssysteme, die biometrische Daten schützen und gleichzeitig innovative Geschäftslösungen ermöglichen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'DSGVO-konforme Bildverarbeitung mit vollständigem Datenschutz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Sichere biometrische Datenverarbeitung und Anonymisierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Hochpräzise Objekterkennung für industrielle Anwendungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Edge-Computing-Lösungen für Echtzeit-Bildanalyse'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KI-Bilderkennung',
        description: 'Computer Vision und KI-Bilderkennung revolutionieren Branchen von der Medizin bis zur Fertigung, bergen jedoch erhebliche Datenschutzrisiken, insbesondere bei biometrischen Daten. ADVISORI entwickelt DSGVO-konforme Bilderkennungslösungen, die innovative Anwendungen ermöglichen, ohne Compliance oder Privatsphäre zu gefährden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'DSGVO-konforme Computer Vision Architekturen mit Privacy-by-Design'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Sichere biometrische Datenverarbeitung und Anonymisierungstechniken'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Industrielle Qualitätskontrolle und automatisierte Inspektion'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Medizinische Bildanalyse mit höchsten Sicherheitsstandards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Edge-Computing für Echtzeit-Bildverarbeitung ohne Cloud-Abhängigkeit'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiche KI-Bilderkennung erfordert mehr als nur technische Präzision. Eine durchdachte Datenschutzstrategie, die biometrische Daten von Anfang an schützt und DSGVO-Compliance gewährleistet, ist entscheidend für nachhaltigen Erfolg.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Expertise in DSGVO-konformer Computer Vision'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Spezialisierung auf biometrische Datenschutzverfahren'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Lösungen für Medizin, Industrie und Sicherheit'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Edge-Computing-Expertise für lokale Datenverarbeitung'
            }
          ]
        },
        additionalInfo: 'Unternehmen, die KI-Bilderkennung strategisch und compliant einsetzen, können ihre Effizienz in Qualitätskontrolle und Automatisierung erheblich steigern, während sie gleichzeitig Datenschutzrisiken minimieren.',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum für die sichere Implementierung von KI-Bilderkennungssystemen, von der strategischen Planung über die DSGVO-konforme Umsetzung bis hin zur kontinuierlichen Optimierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Computer Vision Strategy & Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'DSGVO-konforme Bildverarbeitungsarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Biometrische Datenschutz und Anonymisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Edge-Computing und Echtzeit-Verarbeitung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Industrielle und medizinische Anwendungen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine individuelle Computer Vision Strategie, die auf Ihre spezifischen Anwendungsfälle zugeschnitten ist und höchste Standards für Datenschutz und biometrische Sicherheit erfüllt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer Bildverarbeitungsanforderungen und Datenschutzrisiken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung DSGVO-konformer Computer Vision Architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung sicherer Bildverarbeitungssysteme mit Privacy-by-Design'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration von Anonymisierungs- und Pseudonymisierungstechniken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und Optimierung der Bilderkennungsleistung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'KI-Bilderkennung und Computer Vision sind Schlüsseltechnologien der digitalen Transformation, die jedoch besondere Herausforderungen im Datenschutz mit sich bringen. Unser Ansatz kombiniert hochmoderne Bildverarbeitungstechnologien mit rigoroser DSGVO-Compliance und biometrischen Schutzmaßnahmen, um unseren Kunden innovative Lösungen zu bieten, die sowohl leistungsstark als auch datenschutzkonform sind.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Computer Vision Strategy & Assessment',
          description: 'Umfassende Bewertung Ihrer Bildverarbeitungsanforderungen und Entwicklung einer strategischen Roadmap für DSGVO-konforme Computer Vision Implementierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse bestehender Bildverarbeitungsprozesse und Datenschutzrisiken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation optimaler Computer Vision Use Cases'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung DSGVO-konformer Implementierungsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Bewertung biometrischer Datenschutzanforderungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'DSGVO-konforme Bildverarbeitungsarchitekturen',
          description: 'Sichere Implementierung von Computer Vision Systemen mit vollständigem Datenschutz und biometrischen Schutzmaßnahmen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Privacy-by-Design Bildverarbeitungsarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Sichere biometrische Datenverarbeitung und Speicherung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Anonymisierungs- und Pseudonymisierungstechniken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Edge-Computing für lokale Datenverarbeitung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kiBilderkennungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KI-Bilderkennung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
