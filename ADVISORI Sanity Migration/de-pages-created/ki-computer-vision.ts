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
    console.log('Creating KI Computer Vision page...')

    const kiComputerVisionData = {
      _type: 'servicePage',
      _id: 'ki-computer-vision',
      title: 'KI Computer Vision',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/ki-computer-vision'
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
        title: 'KI Computer Vision | ADVISORI',
        description: 'DSGVO-konforme Computer Vision Lösungen für Unternehmen. Sichere Bilderkennung und visuelle KI-Systeme mit Schutz des geistigen Eigentums und strategischer Beratung.',
        keywords: 'Computer Vision, Bilderkennung, KI, AI, DSGVO, Machine Learning, Objekterkennung, Bildanalyse, Visual AI, Edge Computing'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KI Computer Vision'
        },
        tagline: 'DSGVO-konforme Computer Vision für intelligente Bildanalyse',
        heading: 'KI Computer Vision',
        description: 'Revolutionieren Sie Ihre Geschäftsprozesse mit fortschrittlicher Computer Vision Technologie. Wir implementieren DSGVO-konforme Bilderkennung und visuelle KI-Systeme, die Ihr geistiges Eigentum schützen und nachhaltigen Wettbewerbsvorteile schaffen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'DSGVO-konforme Bildverarbeitung mit vollständigem Datenschutz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Hochpräzise Objekterkennung und Bildanalyse in Echtzeit'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Edge Computing Lösungen für sichere lokale Verarbeitung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Automatisierte Qualitätskontrolle und Prozessoptimierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KI Computer Vision',
        description: 'Computer Vision revolutioniert die Art, wie Unternehmen visuelle Daten verarbeiten und nutzen. Von der automatisierten Qualitätskontrolle bis zur intelligenten Überwachung – unsere DSGVO-konformen Computer Vision Lösungen ermöglichen es Ihnen, die Kraft der visuellen KI zu nutzen, ohne dabei Datenschutz oder Sicherheit zu gefährden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Computer Vision Beratung und Use Case Identifikation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'DSGVO-konforme Implementierung von Bilderkennungssystemen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Edge Computing Lösungen für sichere lokale Bildverarbeitung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Automatisierte Qualitätskontrolle und Anomalieerkennung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Modelloptimierung und Performance-Monitoring'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiche Computer Vision Implementierung erfordert mehr als nur technische Umsetzung. Eine durchdachte Datenstrategie, die Bildrechte, Datenschutz und ethische Aspekte von Anfang an berücksichtigt, ist der Schlüssel für nachhaltigen Erfolg mit visueller KI.'
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
              text: 'Privacy-by-Design Ansatz für sichere Bildverarbeitung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Edge Computing Spezialisierung für lokale KI-Verarbeitung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Branchenübergreifende Computer Vision Erfahrung'
            }
          ]
        },
        additionalInfo: 'Unternehmen, die Computer Vision strategisch einsetzen, können ihre Qualitätskontrolle um bis zu 90% verbessern und gleichzeitig Betriebskosten erheblich reduzieren. Investieren Sie in eine sichere und nachhaltige Computer Vision Zukunft!',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum für die sichere Implementierung von Computer Vision Systemen, von der strategischen Planung über die DSGVO-konforme Umsetzung bis hin zur kontinuierlichen Optimierung und Wartung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Computer Vision Strategy & Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'DSGVO-konforme Bilderkennungssysteme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Edge Computing & Real-time Processing'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Automatisierte Qualitätskontrolle'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Visual AI Governance & Compliance'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine individuelle Computer Vision Strategie, die auf Ihre spezifischen Geschäftsanforderungen zugeschnitten ist und höchste Standards für Datenschutz und Bildrechte erfüllt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer visuellen Daten und Computer Vision Potenziale'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer DSGVO-konformen Computer Vision Strategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung sicherer Bildverarbeitungsarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration von Edge Computing für lokale Verarbeitung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Performance-Monitoring'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Computer Vision ist nicht nur eine technologische Innovation, sondern ein strategischer Enabler für datengetriebene Geschäftsprozesse. Unser Ansatz kombiniert hochmoderne Bilderkennungstechnologien mit rigoroser DSGVO-Compliance und umfassendem Datenschutz, um unseren Kunden präzise visuelle Intelligenz zu liefern, ohne dabei Sicherheit oder Privatsphäre zu kompromittieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Computer Vision Strategy & Assessment',
          description: 'Umfassende Bewertung Ihrer visuellen Daten und Entwicklung einer strategischen Computer Vision Roadmap.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse der aktuellen Bildverarbeitungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation strategischer Computer Vision Use Cases'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'ROI-Bewertung und Implementierungsplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Datenschutz- und Compliance-Anforderungsanalyse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'DSGVO-konforme Bilderkennungssysteme',
          description: 'Sichere Implementierung von Computer Vision Lösungen mit vollständigem Datenschutz und Schutz der Bildrechte.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Privacy-by-Design Bildverarbeitungsarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Anonymisierung und Pseudonymisierung von Bilddaten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Sichere Datenspeicherung und -übertragung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Compliance-Monitoring und Audit-Trails'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kiComputerVisionData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KI Computer Vision page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
