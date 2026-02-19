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
    console.log('Creating Regulatory Compliance Management page...')

    const regulatoryComplianceData = {
      _type: 'servicePage',
      _id: 'regulatory-compliance-management',
      title: 'Regulatory Compliance Management',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-reporting'
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
        title: 'Regulatory Compliance Management | ADVISORI',
        description: 'Umfassende Beratung für regulatorisches Compliance Management. Wir unterstützen Sie bei der Implementierung effizienter Compliance-Strukturen und der Einhaltung regulatorischer Anforderungen.',
        keywords: 'Regulatory Compliance, Compliance Management, Regulatorische Beratung, Aufsichtsrecht, Finanzregulierung, Compliance-Systeme, MaRisk, DSGVO, Basel III'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Regulatory Compliance Management'
        },
        tagline: 'Strategische Compliance-Beratung für digitale Transformation',
        heading: 'Regulatory Compliance Management',
        description: 'Navigieren Sie souverän durch die komplexe Regulatorik der Finanzbranche. Wir transformieren Compliance von einer Kostenstelle zu einem strategischen Wettbewerbsvorteil durch intelligente Digitalisierung und prozessuale Exzellenz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Transformation von reaktiver zu proaktiver Compliance-Steuerung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierung regulatorischer Prozesse und Berichtswesen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integration von Compliance in digitale Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kostenoptimierung durch effiziente Compliance-Architekturen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Regulatory Compliance Management',
        description: 'Regulatory Compliance Management ist im digitalen Zeitalter weit mehr als die bloße Einhaltung gesetzlicher Vorschriften. Es ist ein strategischer Enabler für nachhaltige Geschäftsentwicklung und Wettbewerbsvorteile. Wir unterstützen Sie dabei, Compliance-Anforderungen als Katalysator für operative Exzellenz und digitale Innovation zu nutzen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Compliance-Architektur und Governance-Design'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Digitalisierung und Automatisierung regulatorischer Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung intelligenter Monitoring- und Reporting-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von Compliance in digitale Geschäftsmodelle'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'RegTech-Lösungen und innovative Compliance-Technologien'
          }
        ],
        alert: {
          title: 'Strategischer Ansatz',
          content: 'Moderne Compliance-Strategien nutzen Digitalisierung und Datenanalytik, um aus regulatorischen Anforderungen strategische Vorteile zu entwickeln und operative Effizienz zu steigern.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in regulatorischen Anforderungen und digitalen Lösungsansätzen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden zur Transformation von Compliance-Organisationen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Innovative RegTech-Lösungen und Automatisierungskonzepte'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz: von der Strategie bis zur technischen Implementierung'
            }
          ]
        },
        additionalInfo: 'Erfolgreiche Compliance-Transformation erfordert die Integration regulatorischer Anforderungen in die DNA des Unternehmens. Durch strategische Digitalisierung und intelligente Automatisierung wird Compliance zum Enabler für Geschäftswachstum und operative Exzellenz.',
        serviceDescription: 'Wir bieten umfassende Beratungsleistungen für die strategische Transformation Ihres Compliance Managements. Unser Ansatz verbindet regulatorische Expertise mit modernsten Technologien und bewährten Change-Management-Methoden.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Compliance-Architektur und Organisationsdesign'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Digitalisierung regulatorischer Prozesse und Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierung intelligenter Monitoring- und Alert-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'RegTech-Integration und innovative Compliance-Technologien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Change Management und Kompetenzentwicklung für digitale Compliance'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte Compliance-Strategie, die regulatorische Exzellenz mit operativer Effizienz und strategischen Wettbewerbsvorteilen verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Compliance Assessment und strategische Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design zukunftsfähiger Compliance-Architekturen und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung digitaler Compliance-Plattformen und Automatisierungslösungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration in bestehende IT-Landschaften und Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Anpassung an regulatorische Entwicklungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Modernes Compliance Management ist ein strategischer Hebel für operative Exzellenz und Wettbewerbsvorteile. Durch intelligente Digitalisierung transformieren wir regulatorische Anforderungen von Compliance-Kosten zu Business-Enablers.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische Compliance-Transformation',
          description: 'Wir entwickeln und implementieren ganzheitliche Compliance-Strategien, die regulatorische Exzellenz mit operativer Effizienz und Geschäftswertschöpfung verbinden.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Compliance-Reifegradanalyse und strategische Zielbild-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Design zukunftsfähiger Compliance-Operating-Models'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Integration von Compliance in digitale Geschäftsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Change Management und kulturelle Transformation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Digitale Compliance-Plattformen',
          description: 'Wir implementieren intelligente, automatisierte Compliance-Systeme, die regulatorische Prozesse effizienter und transparenter gestalten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Automated Compliance Monitoring und Real-time Alerting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Intelligente Regulatory Reporting und Datenanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'RegTech-Integration und API-basierte Lösungsarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Cloud-basierte Compliance-as-a-Service Lösungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(regulatoryComplianceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Regulatory Compliance Management page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
