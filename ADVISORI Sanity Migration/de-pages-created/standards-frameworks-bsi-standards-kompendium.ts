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
    console.log('Creating BSI Standards Kompendium page...')

    const bsiStandardsKompendiumData = {
      _type: 'servicePage',
      _id: 'standards-frameworks-bsi-standards-kompendium',
      title: 'BSI Standards Kompendium',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/standards-frameworks-it-grundschutz-bsi/standards-frameworks-bsi-standards-kompendium'
      },
      parent: {
        _type: 'reference',
        _ref: 'standards-frameworks-it-grundschutz-bsi'
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
        title: 'BSI Standards Kompendium Implementation | ADVISORI',
        description: 'Comprehensive implementation of BSI Standards Kompendium for information security management. Expert guidance for BSI 200-1, 200-2, 200-3 and IT-Grundschutz methodologies.',
        keywords: 'BSI Standards, BSI 200-1, BSI 200-2, BSI 200-3, IT-Grundschutz, Information Security, ISMS, Cyber Security, Compliance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'BSI Standards Kompendium'
        },
        tagline: 'Vollständige BSI Standards-Familie für systematische Informationssicherheit',
        heading: 'BSI Standards Kompendium',
        description: 'Das BSI Standards Kompendium bietet eine vollumfängliche Methodik für Informationssicherheits-Management. Wir unterstützen Sie bei der professionellen Implementierung aller BSI Standards von 200-1 bis 200-3.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Komplette BSI Standards-Familie (200-1, 200-2, 200-3) in einem Ansatz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Systematische ISMS-Implementierung nach bewährter BSI-Methodik'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Nahtlose Integration mit IT-Grundschutz-Bausteinen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Grundlage für ISO 27001 und weitere internationale Standards'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'BSI Standards Kompendium Implementation',
        description: 'Das BSI Standards Kompendium umfasst die gesamte Bandbreite der deutschen Informationssicherheits-Standards und bietet eine systematische Herangehensweise für den Aufbau und Betrieb eines robusten ISMS. Als Grundlage für IT-Grundschutz und ISO 27001 bildet es das Fundament für erstklassige Cyber-Sicherheit.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'BSI Standard 200-1: Managementsysteme für Informationssicherheit (ISMS)'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'BSI Standard 200-2: IT-Grundschutz-Methodik'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'BSI Standard 200-3: Risikoanalyse auf der Basis von IT-Grundschutz'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration aller Standards in ein kohärentes Sicherheitsframework'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Praktische Umsetzung mit branchenspezifischen Anpassungen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Das BSI Standards Kompendium ist der Goldstandard für deutsche Organisationen und bietet eine einzigartige Kombination aus methodischer Stringenz und praktischer Umsetzbarkeit für erstklassige Informationssicherheit.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in allen BSI Standards und deren praktischer Anwendung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Implementierungsmethodik für komplexe Organisationsstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Anpassung der Standards für optimale Wirksamkeit'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitliche Betreuung von der Analyse bis zur Zertifizierung'
            }
          ]
        },
        additionalInfo: 'Organisationen mit vollständiger BSI Standards Kompendium Implementierung erreichen eine um 90% höhere Cyber-Resilienz und erfüllen automatisch die Anforderungen für höchste Sicherheitsstufen in öffentlichen und privaten Ausschreibungen.',
        serviceDescription: 'Wir bieten Ihnen eine vollumfängliche Implementierung des gesamten BSI Standards Kompendiums - von der strategischen Planung bis zur operativen Umsetzung und kontinuierlichen Verbesserung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Comprehensive BSI Standards Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'ISMS-Aufbau nach BSI 200-1'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'IT-Grundschutz-Methodik nach BSI 200-2'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Risikoanalyse nach BSI 200-3'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Integrierte Zertifizierungsbegleitung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir implementieren das BSI Standards Kompendium in einer strukturierten, phasenweisen Herangehensweise, die alle drei Standards nahtlos integriert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategic Assessment und BSI Standards-Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'ISMS-Aufbau nach BSI 200-1 Methodik'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'IT-Grundschutz-Implementierung nach BSI 200-2'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Erweiterte Risikoanalyse nach BSI 200-3'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Verbesserung und Zertifizierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns dabei geholfen, das komplette BSI Standards Kompendium erfolgreich zu implementieren. Die methodische Herangehensweise und die tiefe Fachexpertise haben es uns ermöglicht, ein erstklassiges ISMS aufzubauen, das allen deutschen und internationalen Anforderungen entspricht.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'BSI Standards Assessment & Roadmap',
          description: 'Comprehensive Analyse Ihrer Organisation und Entwicklung einer maßgeschneiderten BSI Standards Implementierungsstrategie.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Gap-Analyse gegen alle BSI Standards (200-1, 200-2, 200-3)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Strategische Roadmap für phasenweise Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Business Case und ROI-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Ressourcen- und Budgetplanung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Vollständige BSI Standards Implementierung',
          description: 'Praktische Umsetzung aller BSI Standards in einem integrierten Ansatz für maximale Sicherheitseffektivität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'ISMS-Aufbau nach BSI 200-1'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'IT-Grundschutz-Modellierung nach BSI 200-2'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Ergänzende Risikoanalyse nach BSI 200-3'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Zertifizierungsbegleitung und Continuous Improvement'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bsiStandardsKompendiumData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ BSI Standards Kompendium page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
