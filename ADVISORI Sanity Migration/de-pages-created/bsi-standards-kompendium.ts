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
      _id: 'bsi-standards-kompendium',
      title: 'BSI Standards Kompendium',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/it-grundschutz-bsi/bsi-standards-kompendium'
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
        title: 'BSI Standards Kompendium | ADVISORI',
        description: 'Umfassende Implementierung des BSI Standards Kompendiums. Wir unterstützen Sie bei der systematischen Umsetzung aller relevanten BSI-Standards für maximale IT-Sicherheit.',
        keywords: 'BSI Standards, Kompendium, IT-Grundschutz, BSI-Standards, Informationssicherheit, Compliance, Sicherheitsstandards, Normenkatalog'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'BSI Standards Kompendium'
        },
        tagline: 'Vollständige BSI-Standards-Implementierung für höchste Sicherheit',
        heading: 'BSI Standards Kompendium',
        description: 'Das BSI Standards Kompendium bildet das Herzstück der deutschen IT-Sicherheitslandschaft. Als umfassende Sammlung aller relevanten BSI-Standards bietet es Organisationen eine strukturierte Grundlage für die Implementierung robuster Informationssicherheit.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Abdeckung aller relevanten BSI-Sicherheitsstandards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Systematische Implementierung nach bewährten BSI-Methoden'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Höchste Compliance-Sicherheit durch offizielle BSI-Konformität'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Integrierte Sicherheitsarchitektur mit allen BSI-Bausteinen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'BSI Standards Kompendium',
        description: 'Das BSI Standards Kompendium ist die autoritative Quelle für IT-Sicherheitsstandards in Deutschland. Es umfasst eine umfassende Sammlung von Standards, Bausteinen und Methoden, die vom Bundesamt für Sicherheit in der Informationstechnik entwickelt und kontinuierlich aktualisiert werden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Vollständige Integration aller BSI-Standards in Ihre IT-Sicherheitsarchitektur'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Systematische Implementierung des IT-Grundschutz-Kompendiums'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Anwendung spezialisierter BSI-Standards für kritische Infrastrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliche Aktualisierung gemäß BSI-Weiterentwicklungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Zertifizierungsunterstützung nach allen relevanten BSI-Standards'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Das BSI Standards Kompendium bietet nicht nur einzelne Standards, sondern einen ganzheitlichen Ansatz zur IT-Sicherheit. Die systematische Anwendung aller relevanten Standards schafft eine kohärente und resiliente Sicherheitsarchitektur.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in allen BSI-Standards und deren Anwendung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Zertifizierte BSI-Experten mit langjähriger Praxiserfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitliche Implementierungsansätze für komplexe Organisationen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Betreuung und Aktualisierung der Standards'
            }
          ]
        },
        additionalInfo: 'Das BSI Standards Kompendium ist die Grundlage für die höchsten IT-Sicherheitsstandards in Deutschland und wird von führenden Organisationen als Referenz für Informationssicherheit verwendet.',
        serviceDescription: 'Wir bieten eine vollständige Implementierung des BSI Standards Kompendiums - von der Analyse und Planung über die systematische Umsetzung bis hin zur kontinuierlichen Wartung und Aktualisierung aller Standards.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Vollständige BSI-Standards-Analyse und Anwendbarkeitsbeurteilung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Systematische Implementierung aller relevanten BSI-Bausteine'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Integration spezialisierter BSI-Standards für Ihre Branche'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Kontinuierliche Überwachung und Aktualisierung der Standards'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Zertifizierungsunterstützung und Audit-Begleitung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir folgen einer systematischen Methodik zur vollständigen Implementierung des BSI Standards Kompendiums, angepasst an Ihre spezifischen Anforderungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse aller anwendbaren BSI-Standards'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Priorisierung und Roadmap-Entwicklung für die Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Systematische Umsetzung nach BSI-Methodik'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration in bestehende Sicherheitsarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns bei der vollständigen Implementierung des BSI Standards Kompendiums unterstützt. Die systematische Herangehensweise und tiefe Fachexpertise haben uns geholfen, eine umfassende und zukunftssichere IT-Sicherheitsarchitektur aufzubauen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'BSI Standards Assessment',
          description: 'Umfassende Bewertung aller relevanten BSI-Standards für Ihre Organisation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Vollständige Inventarisierung aller anwendbaren BSI-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Relevanz- und Anwendbarkeitsanalyse für Ihre Branche'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Gap-Analyse gegen aktuelle Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Priorisierte Implementierungs-Roadmap'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Vollständige Standards-Implementierung',
          description: 'Systematische Umsetzung aller relevanten BSI-Standards in Ihrer Organisation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Schrittweise Implementierung nach BSI-Methodik'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integration in bestehende Prozesse und Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Schulung und Change Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Überwachung und Optimierung'
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
