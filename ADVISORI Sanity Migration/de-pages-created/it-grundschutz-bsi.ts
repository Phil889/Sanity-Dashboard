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
    console.log('Creating IT-Grundschutz BSI page...')

    const itGrundschutzBsiData = {
      _type: 'servicePage',
      _id: 'it-grundschutz-bsi',
      title: 'IT-Grundschutz BSI',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/it-grundschutz-bsi'
      },
      parent: {
        _type: 'reference',
        _ref: 'standards-frameworks'
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
        title: 'IT-Grundschutz BSI | ADVISORI',
        description: 'Implementierung und Umsetzung von IT-Grundschutz BSI Standards. Wir unterstützen Sie bei der systematischen Sicherheitsanalyse und dem Aufbau robuster IT-Sicherheitsarchitekturen.',
        keywords: 'IT-Grundschutz, BSI, Informationssicherheit, IT-Sicherheit, Standards, Compliance, Risikomanagement, Sicherheitskonzept'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IT-Grundschutz BSI'
        },
        tagline: 'Systematischer Aufbau Ihrer IT-Sicherheit nach BSI Standards',
        heading: 'IT-Grundschutz BSI',
        description: 'IT-Grundschutz des Bundesamts für Sicherheit in der Informationstechnik (BSI) bietet eine systematische Herangehensweise zum Aufbau und zur Verbesserung der IT-Sicherheit in Organisationen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strukturierte Herangehensweise an IT-Sicherheit mit bewährten Methoden'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Angemessenes Sicherheitsniveau mit verhältnismäßigem Aufwand'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Erfüllung regulatorischer Anforderungen und Compliance-Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Systematische Risikoanalyse und -behandlung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'IT-Grundschutz BSI',
        description: 'Der IT-Grundschutz des BSI ist eine etablierte Methodik zur Identifikation und Umsetzung von Sicherheitsmaßnahmen in der Informationstechnik. Er ermöglicht es Organisationen, ein angemessenes und ausreichendes Sicherheitsniveau für ihre IT-Systeme kosteneffizient zu erreichen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Analyse der IT-Landschaft und Identifikation von Schutzbedarf'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Anwendung von Standard-Sicherheitsmaßnahmen aus dem IT-Grundschutz-Kompendium'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Ergänzende Sicherheitsanalyse für erhöhten Schutzbedarf'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliche Überwachung und Verbesserung der Sicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Zertifizierung nach ISO 27001 auf Basis von IT-Grundschutz'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'IT-Grundschutz bietet einen pragmatischen Ansatz für IT-Sicherheit. Durch die Kombination von Standard-Sicherheitsmaßnahmen mit ergänzenden Risikoanalysen können auch komplexe IT-Umgebungen effizient abgesichert werden.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Langjährige Expertise in der Anwendung von IT-Grundschutz Methodik'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrene BSI-zertifizierte IT-Grundschutz-Praktiker und -Berater'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxisnahe Umsetzung mit Fokus auf Wirtschaftlichkeit'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Unterstützung bei Zertifizierungen und Auditierungen'
            }
          ]
        },
        additionalInfo: 'IT-Grundschutz ist die in Deutschland am weitesten verbreitete Methodik für IT-Sicherheit und wird von vielen Organisationen als Grundlage für ihre Informationssicherheits-Management-Systeme verwendet.',
        serviceDescription: 'Wir unterstützen Sie bei der vollständigen Implementierung von IT-Grundschutz - von der initialen Schutzbedarfsanalyse über die Modellierung und Maßnahmenumsetzung bis hin zur kontinuierlichen Überwachung und Verbesserung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Schutzbedarfsanalyse und Informationsverbund-Definition'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'IT-Grundschutz-Modellierung und Baustein-Auswahl'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Basis-Sicherheitscheck und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Ergänzende Sicherheitsanalyse und Risikobehandlung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Unterstützung bei ISO 27001 Zertifizierung auf IT-Grundschutz-Basis'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir folgen der bewährten IT-Grundschutz-Methodik des BSI und passen diese an Ihre spezifischen Anforderungen an.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strukturanalyse und Definition des Informationsverbunds'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Schutzbedarfsanalyse für alle Informationen und Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Modellierung mit IT-Grundschutz-Bausteinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Basis-Sicherheitscheck und Maßnahmenplanung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Ergänzende Sicherheitsanalyse bei erhöhtem Schutzbedarf'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns dabei unterstützt, IT-Grundschutz systematisch und pragmatisch umzusetzen. Die Experten haben uns geholfen, ein angemessenes Sicherheitsniveau zu erreichen und gleichzeitig die Grundlagen für eine spätere ISO 27001 Zertifizierung zu schaffen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'IT-Grundschutz-Modellierung',
          description: 'Systematische Erfassung und Modellierung Ihrer IT-Landschaft nach IT-Grundschutz-Methodik.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Strukturanalyse und Informationsverbund-Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Schutzbedarfsanalyse für alle Assets'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Baustein-Zuordnung und Maßnahmenableitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Dokumentation nach BSI-Standards'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Basis-Sicherheitscheck',
          description: 'Überprüfung der aktuellen Sicherheitsmaßnahmen gegen IT-Grundschutz-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Systematische Überprüfung aller relevanten Bausteine'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Identifikation von Sicherheitslücken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Priorisierte Maßnahmenempfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Roadmap zur Verbesserung der IT-Sicherheit'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(itGrundschutzBsiData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IT-Grundschutz BSI page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
