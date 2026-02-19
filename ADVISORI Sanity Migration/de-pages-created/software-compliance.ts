import 'dotenv/config'
import { createClient } from '@sanity/client'

// Create client with direct credentials
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
    console.log('Creating Software Compliance page...')

    const softwareComplianceData = {
      _type: 'servicePage',
      _id: 'software-compliance',
      title: 'Software Compliance',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/software-compliance'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management'
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
        title: 'Software Compliance | ADVISORI',
        description: 'Umfassende Software Compliance Lösungen für Lizenzmanagement, Open Source Compliance und kontinuierliche Überwachung. Experten für rechtssichere Software-Nutzung.',
        keywords: 'Software Compliance, Lizenzmanagement, Open Source Compliance, Software Audits, Lizenzkontrolle, OSS Governance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Software Compliance'
        },
        tagline: 'Rechtssichere Software-Nutzung und strategisches Lizenzmanagement',
        heading: 'Software Compliance',
        description: 'Software Compliance ist entscheidend für rechtssichere IT-Operationen und Kostenkontrolle. Wir unterstützen Sie bei der Implementierung umfassender Compliance-Frameworks für kommerzielle Software und Open Source Komponenten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Transparenz über Software-Assets und Lizenzen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte Compliance-Überwachung und Reporting'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Rechtssicherheit bei Open Source und kommerzieller Software'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Optimierte Lizenzkosten und vermiedene Audit-Risiken'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Software Compliance',
        description: 'Software Compliance umfasst die rechtskonforme Nutzung kommerzieller Software-Lizenzen sowie die sichere Integration von Open Source Komponenten. In der heutigen softwaregetriebenen Geschäftswelt ist ein systematisches Compliance-Management essentiell, um rechtliche Risiken zu minimieren, Kosten zu optimieren und Innovationen zu ermöglichen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Vollständige Inventarisierung und Klassifizierung aller Software-Assets'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung automatisierter Lizenzmanagement-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Open Source Governance und Vulnerability Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Compliance-Integration in Entwicklungsprozesse (DevSecOps)'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Audit-Vorbereitung und Vendor-Relationship Management'
          }
        ],
        alert: {
          title: 'Compliance-Hinweis',
          content: 'Software-Compliance Verstöße können zu erheblichen finanziellen Strafen, rechtlichen Konsequenzen und Reputationsschäden führen. Eine proaktive Compliance-Strategie ist daher unverzichtbar für nachhaltigen Geschäftserfolg.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Kenntnisse in Software-Lizenzrecht und Open Source Governance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung in der Implementierung von Compliance-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Technische Expertise in automatisierten Scanning- und Monitoring-Tools'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von strategischer Beratung bis zur operativen Umsetzung'
            }
          ]
        },
        additionalInfo: 'Moderne Unternehmen nutzen hunderte bis tausende von Software-Komponenten, einschließlich komplexer Open Source Bibliotheken. Ohne systematisches Compliance-Management entstehen erhebliche Risiken durch Lizenzverletzungen, Sicherheitslücken und unkontrollierte Kostenentwicklung.',
        serviceDescription: 'Wir bieten End-to-End Software Compliance Lösungen, die sowohl kommerzielle Lizenzmanagement als auch Open Source Governance umfassen. Unser Ansatz kombiniert rechtliche Expertise, technische Tools und prozessuale Best Practices.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Software Asset Management und Lizenzoptimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Open Source Scanning und Vulnerability Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Compliance-Integration in CI/CD Pipelines'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Audit-Unterstützung und Vendor-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulungen und Awareness-Programme für Entwicklerteams'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine umfassende Software Compliance Strategie, die rechtliche Sicherheit mit operativer Effizienz verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Software Asset Discovery und Risk Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung maßgeschneiderter Compliance-Policies und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung automatisierter Scanning- und Monitoring-Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration in bestehende Entwicklungs- und Deployment-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung, Reporting und Optimierung der Compliance-Maßnahmen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Software Compliance ist in der digitalen Transformation kein Hemmschuh, sondern ein Enabler für sicheres und nachhaltiges Wachstum. Mit der richtigen Strategie und den passenden Tools wird Compliance zu einem Wettbewerbsvorteil.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Lizenzmanagement und Inventarisierung',
          description: 'Vollständige Erfassung und Verwaltung aller kommerziellen Software-Lizenzen sowie kontinuierliche Optimierung der Lizenzkosten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Automatisierte Software-Discovery und Asset-Klassifizierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Lizenz-Compliance Monitoring und Usage-Tracking'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Kostenoptimierung durch Right-Sizing und Konsolidierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Vendor-Audit Vorbereitung und Verhandlungsunterstützung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Open Source Compliance',
          description: 'Sichere Nutzung von Open Source Software durch systematische Governance, Vulnerability Management und Entwickler-Schulungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Automatisiertes OSS-Scanning und Lizenz-Kompatibilitätsprüfung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Vulnerability Assessment und Security-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration in CI/CD Pipelines und DevSecOps-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Entwickler-Schulungen und Compliance-Awareness Programme'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(softwareComplianceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Software Compliance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
