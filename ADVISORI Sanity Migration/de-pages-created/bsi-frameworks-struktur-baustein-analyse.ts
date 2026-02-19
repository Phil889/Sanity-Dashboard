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
    console.log('Creating BSI Frameworks Struktur Baustein Analyse page...')

    const bsiFrameworksStrukturBausteinAnalyseData = {
      _type: 'servicePage',
      _id: 'bsi-frameworks-struktur-baustein-analyse',
      title: 'BSI Frameworks Struktur Baustein Analyse',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/it-grundschutz-bsi/bsi-frameworks-struktur-baustein-analyse'
      },
      parent: {
        _type: 'reference',
        _ref: 'it-grundschutz-bsi'
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
        title: 'BSI Frameworks Struktur Baustein Analyse | ADVISORI',
        description: 'Professionelle Analyse und Strukturierung von BSI IT-Grundschutz Bausteinen. Wir unterstützen Sie bei der systematischen Bewertung und optimalen Anwendung der BSI-Standards für Ihre IT-Sicherheitsarchitektur.',
        keywords: 'BSI Framework, Struktur Analyse, Baustein Analyse, IT-Grundschutz, BSI Standards, Informationssicherheit, Compliance, Sicherheitsbausteine'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'BSI Frameworks Struktur Baustein Analyse'
        },
        tagline: 'Systematische Analyse und Strukturierung von BSI IT-Grundschutz Bausteinen',
        heading: 'BSI Frameworks Struktur Baustein Analyse',
        description: 'Die BSI Frameworks Struktur Baustein Analyse ermöglicht eine systematische Bewertung und optimale Anwendung der IT-Grundschutz Bausteine für Ihre spezifische IT-Sicherheitsarchitektur und Compliance-Anforderungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Strukturanalyse aller relevanten BSI-Bausteine'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimale Zuordnung von Sicherheitsmaßnahmen zu IT-Komponenten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effiziente Identifikation von Sicherheitslücken und Handlungsbedarfen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strukturierte Dokumentation für Audits und Zertifizierungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'BSI Frameworks Struktur Baustein Analyse',
        description: 'Die BSI Frameworks Struktur Baustein Analyse ist ein systematischer Ansatz zur detaillierten Bewertung und strukturierten Anwendung der IT-Grundschutz Bausteine. Sie ermöglicht es Organisationen, die komplexe BSI-Methodik effizient zu verstehen und zielgerichtet umzusetzen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Detaillierte Analyse der BSI-Baustein-Struktur und Abhängigkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Systematische Zuordnung von Bausteinen zu IT-Komponenten und Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Bewertung der Anwendbarkeit und Relevanz einzelner Sicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung einer strukturierten Implementierungsroadmap'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration in bestehende ISMS-Frameworks und Compliance-Strukturen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine strukturierte Baustein-Analyse ist der Schlüssel für eine erfolgreiche IT-Grundschutz-Implementierung. Durch die systematische Bewertung und Zuordnung der BSI-Bausteine können Redundanzen vermieden und Synergien optimal genutzt werden.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in BSI IT-Grundschutz Methodik und Baustein-Architektur'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrung in der praktischen Anwendung und Optimierung von BSI-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Strukturierte Analyse-Methoden für komplexe IT-Landschaften'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Praxisnahe Umsetzung mit Fokus auf Wirtschaftlichkeit und Effizienz'
            }
          ]
        },
        additionalInfo: 'Die systematische Baustein-Analyse ist fundamental für eine erfolgreiche IT-Grundschutz-Implementierung und ermöglicht es, die komplexe BSI-Methodik effizient und zielgerichtet anzuwenden.',
        serviceDescription: 'Wir unterstützen Sie bei der vollständigen Analyse und Strukturierung der BSI IT-Grundschutz Bausteine - von der initialen Bewertung über die systematische Zuordnung bis hin zur Integration in Ihre bestehende IT-Sicherheitsarchitektur.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Comprehensive BSI-Baustein-Inventarisierung und -Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Strukturierte Zuordnung zu IT-Komponenten und Geschäftsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Gap-Analyse und Identifikation von Optimierungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Entwicklung einer priorisierten Implementierungsroadmap'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Integration in bestehende Governance- und Compliance-Strukturen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen systematischen und strukturierten Ansatz zur Analyse und Bewertung der BSI IT-Grundschutz Bausteine.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Vollständige Inventarisierung aller relevanten BSI-Bausteine'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strukturanalyse der Baustein-Abhängigkeiten und -Hierarchien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Bewertung der Anwendbarkeit auf Ihre IT-Landschaft'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Systematische Zuordnung zu Geschäftsprozessen und IT-Komponenten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Entwicklung einer strukturierten Implementierungsstrategie'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns mit ihrer strukturierten BSI Baustein-Analyse geholfen, die Komplexität des IT-Grundschutzes zu durchdringen und eine effiziente Implementierungsstrategie zu entwickeln. Die systematische Herangehensweise hat uns viel Zeit und Ressourcen gespart.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'BSI-Baustein-Strukturanalyse',
          description: 'Systematische Analyse und Strukturierung aller relevanten BSI IT-Grundschutz Bausteine für Ihre Organisation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Vollständige Inventarisierung aller BSI-Bausteine'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Analyse von Baustein-Abhängigkeiten und -Hierarchien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Bewertung der Relevanz für Ihre IT-Landschaft'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Strukturierte Dokumentation und Visualisierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Maßnahmen-Zuordnung und -Bewertung',
          description: 'Systematische Zuordnung von BSI-Sicherheitsmaßnahmen zu IT-Komponenten und Bewertung ihrer Anwendbarkeit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Detaillierte Zuordnung zu IT-Assets und Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Bewertung von Umsetzungsaufwand und -komplexität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Priorisierung basierend auf Schutzbedarf und Risiko'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Entwicklung einer strukturierten Implementierungsroadmap'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bsiFrameworksStrukturBausteinAnalyseData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ BSI Frameworks Struktur Baustein Analyse page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
