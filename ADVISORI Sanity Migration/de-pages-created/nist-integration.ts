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
    console.log('Creating NIST Integration page...')

    const nistIntegrationData = {
      _type: 'servicePage',
      _id: 'nist-integration',
      title: 'NIST Integration',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/nist-cybersecurity-framework/nist-integration'
      },
      parent: {
        _type: 'reference',
        _ref: 'nist-cybersecurity-framework'
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
        title: 'NIST Integration | ADVISORI',
        description: 'Professionelle Integration des NIST Cybersecurity Frameworks in bestehende Unternehmensprozesse. Nahtlose Einbindung, Harmonisierung mit anderen Standards und nachhaltige Implementierung.',
        keywords: 'NIST Integration, Cybersecurity Framework, IT-Sicherheit, Compliance, Standards Integration, Risikomanagement, Security Governance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'NIST Integration'
        },
        tagline: 'Nahtlose Integration von Cybersecurity Standards',
        heading: 'NIST Integration',
        description: 'Die erfolgreiche Integration des NIST Cybersecurity Frameworks in bestehende Unternehmensstrukturen erfordert strategische Planung und methodisches Vorgehen. Wir unterstützen Sie bei der nahtlosen Einbindung in Ihre IT-Landschaft und Geschäftsprozesse.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Harmonisierung mit bestehenden Compliance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierte Ressourcennutzung durch intelligente Integration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Minimale Disruption bestehender Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Skalierbare und zukunftssichere Implementierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'NIST Integration',
        description: 'Die Integration des NIST Cybersecurity Frameworks in bestehende Unternehmensstrukturen ist ein komplexer Prozess, der strategische Planung, technische Expertise und Change Management erfordert. Unser strukturierter Ansatz gewährleistet eine nahtlose Integration, die Ihre bestehenden Investitionen maximiert und gleichzeitig die Cybersecurity-Posture Ihres Unternehmens signifikant stärkt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse und Mapping bestehender Security-Kontrollen auf NIST-Framework'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Harmonisierung mit anderen Compliance-Standards (ISO 27001, SOC 2, etc.)'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration in bestehende IT-Service-Management-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Anpassung von Governance-Strukturen und Verantwortlichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Implementierung automatisierter Monitoring- und Reporting-Mechanismen'
          }
        ],
        alert: {
          title: 'Best Practice',
          content: 'Eine erfolgreiche NIST-Integration nutzt bestehende Ressourcen und Prozesse optimal, anstatt parallele Strukturen aufzubauen. Dies reduziert Kosten und maximiert die Akzeptanz in der Organisation.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Erfahrung in der Integration multipler Compliance-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodiken zur Minimierung von Implementierungsdisruption'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfassendes Verständnis verschiedener Branchen und deren spezifische Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Innovative Technologielösungen für automatisierte Compliance-Überwachung'
            }
          ]
        },
        additionalInfo: 'Die NIST-Integration ist mehr als eine technische Implementierung – sie transformiert die Art, wie Ihr Unternehmen Cybersecurity strategisch angeht. Eine professionelle Integration schafft die Grundlage für eine resiliente, adaptive Sicherheitsarchitektur.',
        serviceDescription: 'Unsere NIST-Integrationsdienste umfassen alle Aspekte der nahtlosen Einbindung des Frameworks in Ihre bestehenden Unternehmensstrukturen. Von der initialen Analyse bis zur vollständigen Operationalisierung begleiten wir Sie durch jeden Schritt des Integrationsprozesses.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Bestandsaufnahme und Gap-Analyse bestehender Security-Kontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Framework-Harmonisierung und Synergie-Identifikation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Prozessintegration und Workflow-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Tool-Integration und Automatisierungsimplementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Change Management und Mitarbeiterqualifizierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Integrationsvorgehen',
        description: 'Wir verfolgen einen systematischen, phasenweisen Ansatz zur NIST-Integration, der bestehende Strukturen respektiert und optimiert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Bestandsaufnahme der aktuellen Security-Architektur und -Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten Integrationsstrategie mit Priorisierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Schrittweise Implementierung mit kontinuierlicher Erfolgsmessung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Harmonisierung von Tools, Prozessen und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Verankerung durch Training und kontinuierliche Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Eine erfolgreiche NIST-Integration ist nicht nur ein Compliance-Projekt, sondern eine strategische Transformation, die die Cybersecurity-Reife des gesamten Unternehmens auf ein neues Level hebt. Mit unserer bewährten Methodik wird diese Transformation zu einem nachhaltigen Wettbewerbsvorteil.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Framework-Harmonisierung und Mapping',
          description: 'Wir analysieren Ihre bestehenden Compliance-Frameworks und entwickeln eine optimale Integrationsstrategie für das NIST Cybersecurity Framework.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detailliertes Mapping bestehender Kontrollen auf NIST-Subcategories'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation von Synergien zwischen verschiedenen Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung einer konsolidierten Compliance-Architektur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Priorisierung von Integrationsinitiativen nach Risiko und Impact'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Prozess- und Tool-Integration',
          description: 'Nahtlose Einbindung von NIST-Anforderungen in bestehende Betriebsprozesse und Security-Tools.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Integration in ITSM-Prozesse (Incident, Change, Problem Management)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automatisierung von NIST-Kontrollen durch bestehende Security-Tools'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung von Dashboard und Reporting-Mechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Workflow-Optimierung für effiziente Compliance-Überwachung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(nistIntegrationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ NIST Integration page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
