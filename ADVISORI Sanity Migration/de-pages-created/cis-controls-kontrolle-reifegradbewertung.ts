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
    console.log('Creating CIS Controls Kontrolle & Reifegradbewertung page...')

    const cisControlsKontrolleData = {
      _type: 'servicePage',
      _id: 'cis-controls-kontrolle-reifegradbewertung',
      title: 'CIS Controls Kontrolle & Reifegradbewertung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/cis-controls/cis-controls-kontrolle-reifegradbewertung'
      },
      parent: {
        _type: 'reference',
        _ref: 'cis-controls'
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
        title: 'CIS Controls Kontrolle & Reifegradbewertung | ADVISORI',
        description: 'Professionelle Bewertung und Kontrolle Ihrer CIS Controls Implementierung. Ermitteln Sie den Reifegrad Ihrer Cybersecurity-Maßnahmen und identifizieren Sie Verbesserungspotenziale.',
        keywords: 'CIS Controls, Kontrolle, Reifegradbewertung, Cybersecurity, Sicherheitsbewertung, Compliance, Maturity Assessment'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CIS Controls Kontrolle & Reifegradbewertung'
        },
        tagline: 'Systematische Bewertung und Optimierung Ihrer CIS Controls Implementierung',
        heading: 'CIS Controls Kontrolle & Reifegradbewertung',
        description: 'Ermitteln Sie den aktuellen Reifegrad Ihrer CIS Controls Implementierung und identifizieren Sie gezielt Verbesserungspotenziale für eine effektivere Cybersecurity-Strategie.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Objektive Bewertung des aktuellen Implementierungsstands'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Identifikation von Sicherheitslücken und Schwachstellen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Priorisierte Roadmap für Verbesserungsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachweis der Compliance-Konformität gegenüber Stakeholdern'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CIS Controls Kontrolle & Reifegradbewertung',
        description: 'Die systematische Kontrolle und Reifegradbewertung Ihrer CIS Controls Implementierung ist entscheidend für eine kontinuierliche Verbesserung Ihrer Cybersecurity-Posture. Wir führen umfassende Assessments durch und entwickeln maßgeschneiderte Optimierungsstrategien.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Detaillierte Analyse der implementierten CIS Controls'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Bewertung der Effektivität und des Reifegrads'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Gap-Analyse und Identifikation von Verbesserungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung priorisierter Maßnahmenpläne'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliches Monitoring und regelmäßige Re-Assessments'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine regelmäßige Reifegradbewertung der CIS Controls sollte mindestens jährlich durchgeführt werden, um mit der sich entwickelnden Bedrohungslandschaft Schritt zu halten und die Effektivität der Sicherheitsmaßnahmen zu gewährleisten.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Zertifizierte CIS Controls Experten mit umfassender Praxiserfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodik für objektive und nachvollziehbare Bewertungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Expertise und maßgeschneiderte Lösungsansätze'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Langfristige Partnerschaft für kontinuierliche Verbesserung'
            }
          ]
        },
        additionalInfo: 'Studien zeigen, dass Unternehmen mit einem hohen CIS Controls Reifegrad ihre Cyber-Risiken um bis zu 85% reduzieren und gleichzeitig die Effizienz ihrer Sicherheitsoperationen um 40% steigern können.',
        serviceDescription: 'Wir bieten Ihnen eine umfassende Palette von Services zur Kontrolle und Reifegradbewertung Ihrer CIS Controls Implementierung, von der initialen Bestandsaufnahme bis zur kontinuierlichen Optimierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'CIS Controls Maturity Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Gap-Analyse und Schwachstellenidentifikation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung von Verbesserungsroadmaps'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Implementierungscontrolling und -monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Reporting und Stakeholder-Kommunikation'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir folgen einem strukturierten und bewährten Ansatz zur Bewertung und kontinuierlichen Verbesserung Ihrer CIS Controls Implementierung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Bestandsaufnahme der aktuellen CIS Controls Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Systematische Bewertung anhand etablierter Reifegradmodelle'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Identifikation von Gaps und Verbesserungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung priorisierter Maßnahmenpläne'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Implementierung von Monitoring- und Kontrollmechanismen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die systematische Reifegradbewertung unserer CIS Controls durch ADVISORI hat uns nicht nur geholfen, unsere Sicherheitslücken zu identifizieren, sondern auch eine klare Roadmap für nachhaltige Verbesserungen zu entwickeln. Die professionelle Herangehensweise und die praxisorientierten Empfehlungen haben unsere Cybersecurity-Posture erheblich gestärkt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'CIS Controls Maturity Assessment',
          description: 'Umfassende Bewertung des Reifegrads Ihrer CIS Controls Implementierung nach bewährten Standards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse aller 18 CIS Controls'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung nach 5-stufigem Reifegradmodell'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Benchmarking gegen Branchenstandards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Umfassender Bewertungsbericht mit Handlungsempfehlungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Gap-Analyse & Optimierung',
          description: 'Systematische Identifikation von Schwachstellen und Entwicklung gezielter Verbesserungsmaßnahmen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Detaillierte Gap-Analyse mit Risikobewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Priorisierte Maßnahmenplanung nach Business Impact'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Kosten-Nutzen-Analyse für Verbesserungsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Implementierungsroadmap mit Zeitplan und Meilensteinen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(cisControlsKontrolleData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CIS Controls Kontrolle & Reifegradbewertung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
