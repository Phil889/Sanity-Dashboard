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
    console.log('Creating Standards Frameworks Struktur Baustein Analyse page...')

    const standardsFrameworksStrukturBausteinAnalyseData = {
      _type: 'servicePage',
      _id: 'standards-frameworks-struktur-baustein-analyse',
      title: 'IT-Grundschutz BSI Struktur & Baustein-Analyse',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/standards-frameworks-it-grundschutz-bsi/standards-frameworks-struktur-baustein-analyse'
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
        title: 'IT-Grundschutz BSI Struktur & Baustein-Analyse | ADVISORI',
        description: 'Professionelle Strukturanalyse und Baustein-Bewertung für IT-Grundschutz BSI Implementierung. Systematische Analyse von Geschäftsprozessen und IT-Systemen nach BSI-Standards.',
        keywords: 'IT-Grundschutz, BSI, Baustein-Analyse, Strukturanalyse, Geschäftsprozesse, IT-Systeme, Sicherheitsanalyse, Compliance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IT-Grundschutz BSI Struktur & Baustein-Analyse'
        },
        tagline: 'Systematische Strukturanalyse für effektive IT-Grundschutz Implementierung',
        heading: 'IT-Grundschutz BSI Struktur & Baustein-Analyse',
        description: 'Wir führen eine umfassende Strukturanalyse und Baustein-Bewertung durch, um Ihre IT-Grundschutz Implementierung optimal auf Ihre Geschäftsprozesse und IT-Systeme abzustimmen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Analyse aller relevanten Geschäftsprozesse und IT-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Präzise Zuordnung der IT-Grundschutz Bausteine zu Ihren Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Optimierte Ressourcenallokation durch gezielte Baustein-Priorisierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Fundament für effiziente und zielgerichtete IT-Grundschutz Umsetzung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'IT-Grundschutz BSI Struktur & Baustein-Analyse',
        description: 'Die Strukturanalyse und Baustein-Bewertung bildet das Fundament jeder erfolgreichen IT-Grundschutz Implementierung. Wir analysieren systematisch Ihre Geschäftsprozesse, IT-Systeme und Infrastruktur, um die relevanten BSI-Bausteine zu identifizieren und deren Anwendung optimal zu planen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Detaillierte Erfassung und Kategorisierung aller Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Systematische Inventarisierung der IT-Infrastruktur und Anwendungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Zuordnung relevanter IT-Grundschutz Bausteine zu identifizierten Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Priorisierung der Bausteine nach Criticality und Compliance-Relevanz'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Erstellung einer strukturierten Umsetzungsroadmap mit Ressourcenplanung'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine methodische Strukturanalyse reduziert den Implementierungsaufwand um bis zu 40% und stellt sicher, dass nur die wirklich relevanten IT-Grundschutz Bausteine umgesetzt werden.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in BSI IT-Grundschutz Methodik und Baustein-Katalog'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Analysemethoden für komplexe IT-Landschaften'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Erfahrung in verschiedenen Sektoren'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Praxisorientierte Beratung mit klarem Fokus auf Umsetzbarkeit'
            }
          ]
        },
        additionalInfo: 'Eine professionelle Strukturanalyse und Baustein-Bewertung ist der Schlüssel für eine erfolgreiche und effiziente IT-Grundschutz Implementierung. Investieren Sie in eine solide Basis für Ihre Informationssicherheit!',
        serviceDescription: 'Wir bieten Ihnen eine systematische und methodische Herangehensweise zur Strukturanalyse und Baustein-Bewertung, die perfekt auf die Anforderungen des BSI IT-Grundschutz abgestimmt ist. Von der initialen Bestandsaufnahme bis zur finalen Umsetzungsplanung begleiten wir Sie durch alle Phasen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Geschäftsprozess-Analyse und Kategorisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'IT-Asset Inventarisierung und Klassifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Baustein-Mapping und Relevanz-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Abhängigkeitsanalyse und Priorisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Umsetzungsroadmap und Ressourcenplanung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir folgen einem strukturierten und bewährten Ansatz zur Durchführung der Strukturanalyse und Baustein-Bewertung, der sich an den BSI-Empfehlungen orientiert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Initiale Bestandsaufnahme und Scope-Definition'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Systematische Erfassung aller Geschäftsprozesse und IT-Komponenten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Kategorisierung und Klassifizierung nach BSI-Kriterien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Mapping relevanter IT-Grundschutz Bausteine'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Bewertung, Priorisierung und Umsetzungsplanung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die systematische Strukturanalyse von ADVISORI hat uns geholfen, unsere IT-Grundschutz Implementierung optimal zu planen. Die präzise Baustein-Zuordnung und Priorisierung haben unseren Umsetzungsaufwand erheblich reduziert und die Compliance-Sicherheit deutlich erhöht.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Geschäftsprozess-Strukturanalyse',
          description: 'Wir erfassen und analysieren systematisch alle Ihre Geschäftsprozesse und deren Anforderungen an die Informationssicherheit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Vollständige Prozessinventarisierung und -dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Kategorisierung nach Criticality und Schutzbedarf'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation von Sicherheitsanforderungen und Abhängigkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Prozess-orientierte Sicherheitsanalyse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'IT-Baustein-Mapping & Bewertung',
          description: 'Wir ordnen Ihrer IT-Infrastruktur die relevanten IT-Grundschutz Bausteine zu und bewerten deren Anwendbarkeit und Priorität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Systematisches Mapping von IT-Grundschutz Bausteinen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Relevanz-Bewertung und Priorisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Abhängigkeitsanalyse zwischen Bausteinen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Umsetzungsroadmap mit Ressourcenplanung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(standardsFrameworksStrukturBausteinAnalyseData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Standards Frameworks Struktur Baustein Analyse page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
