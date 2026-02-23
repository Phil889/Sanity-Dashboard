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
    console.log('Creating MiFID Implementation page...')

    const mifidImplementationData = {
      _type: 'servicePage',
      _id: 'mifid-implementation',
      title: 'MiFID Implementation',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/mifid/mifid-implementation'
      },
      parent: {
        _type: 'reference',
        _ref: 'mifid'
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
        title: 'MiFID Implementation | ADVISORI',
        description: 'Umfassende Unterstützung bei der operativen Umsetzung und technischen Integration der MiFID-Anforderungen. Wir begleiten Sie von der Konzeption bis zur vollständigen Implementierung aller relevanten Prozesse und Systeme.',
        keywords: 'MiFID Implementation, MiFID II Umsetzung, Finanzmarktrichtlinie, regulatorische Implementierung, Anlegerschutz, Best Execution, Transaktionsreporting, Produktgovernance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'MiFID Implementation'
        },
        tagline: 'Effiziente und nachhaltige Umsetzung komplexer MiFID-Anforderungen',
        heading: 'MiFID Implementation',
        description: 'Die operative Umsetzung der MiFID-Anforderungen erfordert eine systematische Implementierung in Prozesse, Systeme und Governance-Strukturen. Wir unterstützen Sie bei der effizienten und nachhaltigen Integration dieser komplexen regulatorischen Vorgaben in Ihre Geschäftsabläufe.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Implementierung aller relevanten MiFID-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Integration in bestehende Prozesse und Systeme mit minimalem Disruption'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effiziente Projektsteuerung und Ressourcenallokation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachhaltige Compliance-Sicherung durch robuste Governance-Strukturen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'MiFID Implementation',
        description: 'Die praktische Implementierung der MiFID-Anforderungen stellt Finanzinstitute vor komplexe Herausforderungen. Unsere Experten unterstützen Sie bei der systematischen Umsetzung aller regulatorischen Vorgaben – von der Anpassung der Geschäftsprozesse über die Implementierung technischer Lösungen bis hin zur Etablierung effektiver Governance-Strukturen. Unser Fokus liegt dabei auf einer effizienten, nachhaltigen Integration, die Compliance sicherstellt und gleichzeitig operative Exzellenz fördert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Implementierung von Anlegerschutz- und Transparenzanforderungen in Beratungs- und Vertriebsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Technische Integration von Best-Execution-Prinzipien und Transaktionsüberwachung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung robuster Produktgovernance- und Zielmarkt-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau effizienter Berichts- und Dokumentationssysteme für regulatorisches Reporting'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Etablierung nachhaltiger Governance- und Kontrollstrukturen zur langfristigen Compliance-Sicherung'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine erfolgreiche MiFID-Implementierung erfordert nicht nur technisches Know-how, sondern auch ein tiefes Verständnis der Geschäftsprozesse und der organisatorischen Kultur. Der Schlüssel zum Erfolg liegt in der Balance zwischen regulatorischer Compliance und operativer Effizienz – implementieren Sie Lösungen, die nicht nur die Anforderungen erfüllen, sondern auch Ihre Geschäftsprozesse optimieren.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in allen Aspekten der MiFID-Regulierung und deren praktischer Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Implementierungsmethodik mit klaren Meilensteinen und Ergebnissen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Tiefgreifende Erfahrung in der Integration regulatorischer Anforderungen in bestehende Geschäftsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Innovative Technologielösungen zur Automatisierung und Optimierung komplexer Compliance-Prozesse'
            }
          ]
        },
        additionalInfo: 'Die MiFID-Implementierung ist ein komplexes Unterfangen, das zahlreiche Geschäftsbereiche, Prozesse und Systeme betrifft. Eine erfolgreiche Umsetzung erfordert nicht nur regulatorisches Know-how, sondern auch eine effektive Projektsteuerung, Change Management und technische Expertise. Unser ganzheitlicher Ansatz integriert all diese Aspekte und gewährleistet eine nachhaltige, effiziente Implementierung.',
        serviceDescription: 'Unser Leistungsangebot umfasst die vollständige Unterstützung bei der Implementierung aller MiFID-Anforderungen – von der initialen Planung über die operative Umsetzung bis hin zur Validierung und kontinuierlichen Optimierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Detaillierte Implementierungsplanung und Projektsteuerung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Prozessdesign und -integration für Anlegerschutz und Transparenz'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Technische Implementierung von Best-Execution- und Reporting-Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Dokumentation und Validierung implementierter Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Change Management und Schulung für nachhaltige Compliance'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten, phasenbasierten Ansatz bei der Implementierung von MiFID-Anforderungen, der eine effiziente Umsetzung und nachhaltige Compliance sicherstellt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Detaillierte Implementierungsplanung basierend auf der Gap-Analyse und Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Prozessdesign und -anpassung für alle relevanten Geschäftsbereiche'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Technische Implementierung und Integration in bestehende Systemlandschaft'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Umfassende Validierung und Dokumentation der implementierten Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Schulung, Change Management und Übergang in den Regelbetrieb'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Marcus Weber',
        position: 'Senior Manager',
        quote: 'Die erfolgreiche Implementierung von MiFID-Anforderungen erfordert eine perfekte Balance zwischen regulatorischer Compliance und operativer Effizienz. Unsere Erfahrung zeigt, dass Unternehmen, die diese Anforderungen als Chance zur Prozessoptimierung nutzen, nicht nur Compliance sicherstellen, sondern auch signifikante Wettbewerbsvorteile erzielen können.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Implementierung von Anlegerschutz und Transparenzanforderungen',
          description: 'Wir unterstützen Sie bei der systematischen Implementierung aller Anlegerschutz- und Transparenzanforderungen in Ihre Beratungs- und Vertriebsprozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Operationalisierung von Geeignetheits- und Angemessenheitsprüfungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Implementierung robuster Kostentransparenz und -dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Integration von Produktgovernance und Zielmarktdefinitionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Aufbau effektiver Dokumentations- und Nachweisprozesse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Technische Integration von Best-Execution und Transaktionsreporting',
          description: 'Wir implementieren technische Lösungen für Best-Execution, Transaktionsüberwachung und regulatorisches Reporting in Ihre bestehende Systemlandschaft.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung und Integration von Best-Execution-Monitoring-Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementierung effektiver Transaktionsüberwachung und -meldung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Aufbau automatisierter Berichtssysteme für regulatorische Reports'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration in bestehende Handelssysteme und Datenarchitekturen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(mifidImplementationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ MiFID Implementation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
