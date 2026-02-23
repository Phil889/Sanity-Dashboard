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
    console.log('Creating MaRisk Risikosteuerungs-Tools Integration page...')

    const mariskToolsIntegrationData = {
      _type: 'servicePage',
      _id: 'marisk-risikosteuerungs-tools-integration',
      title: 'MaRisk Risikosteuerungs-Tools Integration',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/marisk/marisk-implementation/marisk-risikosteuerungs-tools-integration'
      },
      parent: {
        _type: 'reference',
        _ref: 'marisk-implementation'
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
        title: 'MaRisk Risikosteuerungs-Tools Integration | ADVISORI',
        description: 'Effiziente Integration von Risikosteuerungs-Tools für Ihre MaRisk-Compliance. ADVISORI unterstützt Sie bei der Auswahl, Implementierung und Vernetzung der passenden Tools.',
        keywords: 'MaRisk, Risikosteuerung, Tools Integration, Risikomanagement, Bankenaufsicht, Compliance, Werkzeuge, Finanzinstitute'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'MaRisk Risikosteuerungs-Tools Integration'
        },
        tagline: 'Nahtlose Integration von Risikomanagement-Tools für MaRisk-Compliance',
        heading: 'MaRisk Risikosteuerungs-Tools Integration',
        description: 'Optimieren Sie Ihr Risikomanagement durch die strategische Integration spezialisierter Tools, die Ihre MaRisk-Compliance effizient unterstützen und die Risikokontrollprozesse automatisieren.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Reduktion manueller Prozesse und Fehlerpotentiale'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Erhöhte Datenqualität und Risikovisibilität'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effiziente Umsetzung regulatorischer Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Skalierbare Lösungen für wachsende Anforderungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'MaRisk Risikosteuerungs-Tools Integration',
        description: 'Die Integration spezialisierter Risikosteuerungs-Tools ist ein wesentlicher Baustein für die effektive Umsetzung der MaRisk-Anforderungen. Wir unterstützen Sie bei der Auswahl und nahtlosen Implementierung der optimalen Toollandschaft für Ihre individuellen Risikomanagement-Prozesse.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Ganzheitliche Analyse Ihrer bestehenden Systemlandschaft und Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Anforderungsgerechte Auswahl und Bewertung von Risikosteuerungs-Tools'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Nahtlose Integration in Ihre bestehende IT-Infrastruktur'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Automatisierung von Risikokontrollprozessen und Reporting'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Optimierung und Anpassung an regulatorische Änderungen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Die richtige Tool-Integration ist entscheidend für ein effizientes MaRisk-konformes Risikomanagement. Eine durchdachte Architektur minimiert Redundanzen, erhöht die Datenqualität und ermöglicht ein umfassendes Risiko-Reporting.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in MaRisk-Anforderungen und deren technischer Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfassende Kenntnis marktführender Risikomanagement-Tools und ihrer Integrationsoptionen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Langjährige Erfahrung in der Implementierung komplexer Risikomanagement-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Pragmatischer Ansatz mit Fokus auf Ihren individuellen Bedürfnissen und Ressourcen'
            }
          ]
        },
        additionalInfo: 'Eine gut integrierte Toollandschaft kann die Effizienz Ihres Risikomanagements um bis zu 40% steigern und die Compliance-Kosten signifikant reduzieren. Vertrauen Sie auf unsere Expertise bei der Gestaltung Ihrer optimalen Risikosteuerungs-Architektur.',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum für die Integration von Risikosteuerungs-Tools in Ihre MaRisk-konforme Risikoarchitektur. Von der initialen Analyse über die Tool-Auswahl bis zur Implementierung und kontinuierlichen Optimierung begleiten wir Sie bei jedem Schritt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Ist-Analyse und Gap-Assessment der bestehenden Tools und Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Anforderungsbasierte Tool-Evaluation und -Selektion'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwurf einer integrierten Risikomanagement-Architektur'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Implementierung und Integration ausgewählter Tools'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulung der Mitarbeiter und Wissenstransfer'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen methodischen Ansatz zur Integration von Risikosteuerungs-Tools, der die individuellen Anforderungen Ihres Instituts berücksichtigt und eine nahtlose Implementierung sicherstellt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der bestehenden Risikomanagement-Prozesse und -Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Identifikation von Anforderungen und Optimierungspotentialen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Erstellung eines Tool-Integrationskonzepts mit Zielarchitektur'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Evaluierung und Auswahl geeigneter Tools und Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Implementierung und Integration in bestehende Systemlandschaft'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'Mittelständische Regionalbank',
        name: 'Dr. Sandra Metzger',
        position: 'Leiterin Risikomanagement',
        quote: 'Die von ADVISORI durchgeführte Integration unserer Risikosteuerungs-Tools hat nicht nur unsere MaRisk-Compliance gestärkt, sondern auch unseren Risikomanagement-Prozess deutlich effizienter gestaltet. Besonders beeindruckt hat uns die nahtlose Verzahnung der verschiedenen Systeme, die nun ein konsistentes Risikobild über alle Abteilungen hinweg ermöglicht.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Tool-Landschaftsanalyse & Anforderungserhebung',
          description: 'Umfassende Bestandsaufnahme Ihrer aktuellen Risikomanagement-Tools und -Prozesse sowie Ermittlung der spezifischen Anforderungen für eine MaRisk-konforme Toollandschaft.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Ganzheitliche Analyse der bestehenden Systemlandschaft'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation von Prozesslücken und Optimierungspotentialen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Definition von Tool-Anforderungen basierend auf MaRisk-Vorgaben'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Erstellung einer Gap-Analyse für die Toollandschaft'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Tool-Selektion & Integrationskonzept',
          description: 'Methodische Auswahl geeigneter Risikosteuerungs-Tools und Entwicklung eines umfassenden Integrationskonzepts für Ihre spezifische Situation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Marktanalyse und Bewertung verfügbarer Risikosteuerungs-Tools'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung einer Zielarchitektur für die Tool-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Definition von Schnittstellen und Datenflüssen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Erstellung eines Umsetzungs- und Migrationsplans'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(mariskToolsIntegrationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ MaRisk Risikosteuerungs-Tools Integration page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
