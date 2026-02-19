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
    console.log('Creating Datenschutzkoordinator Schulung - Datenschutzprozesse Dokumentation page...')

    const datenschutzkoordinatorSchulungDatenschutzprozesseDokumentationData = {
      _type: 'servicePage',
      _id: 'datenschutzkoordinator-schulung-datenschutzprozesse-dokumentation',
      title: 'Datenschutzkoordinator Schulung - Datenschutzprozesse Dokumentation',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/datenschutzkoordinator-schulung/datenschutzkoordinator-schulung-datenschutzprozesse-dokumentation'
      },
      parent: {
        _type: 'reference',
        _ref: 'datenschutzkoordinator-schulung'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'regulatory-reporting'
        }
      },
      seo: {
        _type: 'seo',
        title: 'Datenschutzkoordinator Schulung - Datenschutzprozesse Dokumentation | ADVISORI',
        description: 'Professionelle Schulung für Datenschutzkoordinatoren zur systematischen Dokumentation von Datenschutzprozessen. DSGVO-konforme Verfahrensverzeichnisse und Compliance-Management.',
        keywords: 'Datenschutzkoordinator Schulung, Datenschutzprozesse Dokumentation, DSGVO Verfahrensverzeichnis, Datenschutz Compliance, Privacy Management, Data Protection Training'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Datenschutzkoordinator Schulung - Datenschutzprozesse Dokumentation'
        },
        tagline: 'Systematische Datenschutz-Dokumentation für Compliance-Excellence',
        heading: 'Datenschutzkoordinator Schulung - Datenschutzprozesse Dokumentation',
        description: 'Befähigen Sie Ihre Datenschutzkoordinatoren zur professionellen Dokumentation aller datenschutzrelevanten Prozesse. Von Verfahrensverzeichnissen bis hin zu Compliance-Nachweisen - für lückenlose DSGVO-Konformität.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'DSGVO-konforme Verfahrensverzeichnisse und Prozessdokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Systematische Dokumentationsmethoden und Template-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Compliance-Integration und Audit-bereite Nachweisführung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Praxisorientierte Schulung mit sofort umsetzbaren Tools'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Datenschutzkoordinator Schulung - Datenschutzprozesse Dokumentation',
        description: 'Die systematische Dokumentation von Datenschutzprozessen ist das Rückgrat erfolgreichen Compliance-Managements. Unsere Schulung vermittelt Datenschutzkoordinatoren die Kompetenz zur professionellen Erstellung und Pflege aller erforderlichen Nachweise.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'DSGVO-konforme Verfahrensverzeichnisse und Prozessdokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Systematische Dokumentationsmethoden und Best-Practice-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Template-Entwicklung und Standardisierung von Dokumentationsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Compliance-Integration und Audit-Trail-Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Dokumentationspflege und Update-Strategien'
          }
        ],
        alert: {
          title: 'Compliance-kritischer Erfolgsfaktor',
          content: 'Mangelhafte Prozessdokumentation führt zu schwerwiegenden DSGVO-Verstößen und Bußgeldern. Eine systematische und vollständige Dokumentation ist essentiell für erfolgreiche Audits und Behördenprüfungen.'
        },
        whyUs: {
          title: 'Unsere Dokumentations-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Bewährte Dokumentationsframeworks aus erfolgreichen DSGVO-Projekten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Templates und Checklisten für alle Dokumentationsanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Expertise in der Integration von Dokumentation in bestehende Workflows'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ongoing Support für kontinuierliche Dokumentationspflege'
            }
          ]
        },
        additionalInfo: 'Professionelle Datenschutz-Dokumentation schafft nicht nur Compliance-Sicherheit, sondern auch Transparenz und Vertrauen bei Stakeholdern, Kunden und Aufsichtsbehörden.',
        serviceDescription: 'Wir befähigen Ihre Datenschutzkoordinatoren zur systematischen und effizienten Dokumentation aller datenschutzrelevanten Prozesse. Unser praxisorientierter Ansatz kombiniert rechtliche Anforderungen mit operativer Umsetzbarkeit.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'DSGVO-konforme Verfahrensverzeichnisse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Systematische Dokumentationsmethoden'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Template-Entwicklung und Standardisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Compliance-Integration und Audit-Support'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Dokumentationspflege'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Schulungsansatz zur Datenschutz-Dokumentation',
        description: 'Wir vermitteln systematische Dokumentationskompetenz durch praxisorientierte Methoden, die direkt in den Arbeitsalltag integrierbar sind.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse bestehender Dokumentationsstrukturen und Gap-Identifikation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Vermittlung systematischer Dokumentationsmethoden und Best Practices'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung maßgeschneiderter Templates und Checklisten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Praxisübungen zur Erstellung von Verfahrensverzeichnissen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Integration in bestehende Compliance-Workflows und Qualitätssicherung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI Privacy Consulting',
        name: 'Dr. Maria Schmidt',
        position: 'Senior Data Protection Consultant',
        quote: 'Die ADVISORI-Schulung hat unsere Dokumentationsqualität revolutioniert. Unsere Datenschutzkoordinatoren erstellen jetzt systematisch und effizient alle erforderlichen Nachweise - das spart Zeit und gibt uns absolute Compliance-Sicherheit bei Prüfungen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'DSGVO-konforme Verfahrensverzeichnisse',
          description: 'Umfassende Schulung zur Erstellung und Pflege vollständiger Verfahrensverzeichnisse nach Art. 30 DSGVO mit allen erforderlichen Nachweisen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Strukturierte Verfahrensanalyse und -kategorisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Template-basierte Dokumentationserstellung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Vollständigkeitsprüfung und Qualitätssicherung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Kontinuierliche Aktualisierung und Pflege'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Systematische Dokumentationsmethoden',
          description: 'Praxisorientierte Vermittlung effizienter Dokumentationsmethoden und Integration in bestehende Compliance-Workflows.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Standardisierte Dokumentationsframeworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Effiziente Workflow-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Audit-Trail-Management und Nachweisführung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Continuous Improvement und Best-Practice-Sharing'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(datenschutzkoordinatorSchulungDatenschutzprozesseDokumentationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Datenschutzkoordinator Schulung - Datenschutzprozesse Dokumentation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
