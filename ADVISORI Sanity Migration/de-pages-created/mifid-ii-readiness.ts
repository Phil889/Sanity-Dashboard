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
    console.log('Creating MiFID II Readiness page...')

    const mifidIIReadinessData = {
      _type: 'servicePage',
      _id: 'mifid-ii-readiness',
      title: 'MiFID II Readiness',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/mifid/mifid-ii-readiness'
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
        title: 'MiFID II Readiness | ADVISORI',
        description: 'Umfassende Unterstützung bei der Vorbereitung und Implementierung der MiFID II-Anforderungen. Wir begleiten Sie bei der Analyse, Umsetzung und kontinuierlichen Optimierung Ihrer MiFID II-Compliance.',
        keywords: 'MiFID II Readiness, MiFID II Implementierung, MiFID II Vorbereitung, MiFID II Compliance, Anlegerschutz, Kostentransparenz, Best Execution'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'MiFID II Readiness'
        },
        tagline: 'Strategische Umsetzung der MiFID II-Anforderungen für nachhaltigen Geschäftserfolg',
        heading: 'MiFID II Readiness',
        description: 'Die Markets in Financial Instruments Directive II (MiFID II) stellt Finanzinstitute vor komplexe Herausforderungen in den Bereichen Anlegerschutz, Transparenz und Marktinfrastruktur. Wir unterstützen Sie mit einer strukturierten Methodik bei der effizienten Implementierung und optimalen Integration der Anforderungen in Ihre Geschäftsprozesse.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Ganzheitliche Readiness-Bewertung und strategische Implementierungsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierte Integration der MiFID II-Anforderungen in bestehende Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effiziente Umsetzung der Kostentransparenz- und Best-Execution-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachhaltige Compliance-Sicherung durch fortlaufende Überwachung und Optimierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'MiFID II Readiness',
        description: 'MiFID II hat die Anforderungen an Finanzdienstleister in den Bereichen Anlegerschutz, Transparenz und Marktstruktur signifikant erhöht. Die erfolgreiche Implementierung erfordert einen ganzheitlichen Ansatz, der sowohl die technischen als auch die strategischen Aspekte berücksichtigt. Unsere MiFID II Readiness-Lösung unterstützt Sie bei der systematischen Vorbereitung, effizienten Umsetzung und nachhaltigen Einhaltung dieser komplexen Regulierung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Gap-Analyse und Bewertung der MiFID II-Auswirkungen auf Ihre Organisation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung einer maßgeschneiderten Implementierungsstrategie mit klaren Prioritäten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Optimierung der Anlegerberatung und Produktgovernance gemäß MiFID II'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Implementierung robuster Best-Execution-Prozesse und -Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration von Kostentransparenz- und Aufzeichnungsanforderungen in Ihre Systeme'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine erfolgreiche MiFID II-Implementierung sollte nicht nur auf die Erfüllung regulatorischer Anforderungen abzielen, sondern auch als Gelegenheit genutzt werden, Kundenprozesse zu optimieren und Wettbewerbsvorteile durch erhöhte Transparenz und verbesserten Anlegerschutz zu erzielen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in allen Aspekten der MiFID II-Regulierung und deren praktischer Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodik zur effizienten und nachhaltigen Implementierung von MiFID II-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Tiefgreifende Erfahrung in der Integration regulatorischer Anforderungen in Geschäftsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Innovative Technologielösungen zur Automatisierung und Optimierung von MiFID II-Prozessen'
            }
          ]
        },
        additionalInfo: 'Die MiFID II-Anforderungen haben weitreichende Auswirkungen auf nahezu alle Bereiche eines Finanzinstituts – von der Produktentwicklung über die Kundenberatung bis hin zur Transaktionsausführung und -dokumentation. Eine gut durchdachte Readiness-Strategie ist entscheidend, um nicht nur Compliance zu gewährleisten, sondern auch operative Effizienz und Kundenorientierung zu steigern.',
        serviceDescription: 'Unser MiFID II Readiness-Angebot umfasst ein breites Spektrum an Leistungen, die Sie bei allen Aspekten der MiFID II-Vorbereitung und -Implementierung unterstützen. Wir bieten einen maßgeschneiderten Ansatz, der auf Ihre spezifischen Anforderungen und Ihre bestehende Infrastruktur zugeschnitten ist.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'MiFID II Impact Assessment und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung einer priorisierten MiFID II-Implementierungsroadmap'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierung von Anlegerschutz- und Produktgovernance-Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Aufbau robuster Best-Execution-Frameworks und -Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Integration von Kostentransparenz und Aufzeichnungspflichten in Ihre IT-Landschaft'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und erprobten Ansatz zur Sicherstellung Ihrer MiFID II-Readiness, der alle relevanten Aspekte der Regulierung berücksichtigt und nahtlos in Ihre bestehenden Prozesse integriert werden kann.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Durchführung einer umfassenden Ist-Analyse und Identifikation von Compliance-Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten MiFID II-Implementierungsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Priorisierte Umsetzung der Anforderungen in allen betroffenen Geschäftsbereichen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration der MiFID II-Prozesse in Ihre IT-Systeme und Workflows'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung eines kontinuierlichen Monitoring- und Optimierungsprozesses'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Eine erfolgreiche MiFID II-Implementierung erfordert mehr als nur technische Compliance – sie bietet die Chance, Kundenvertrauen zu stärken, Prozesse zu optimieren und neue Wettbewerbsvorteile zu erschließen. Mit unserem ganzheitlichen Ansatz unterstützen wir Finanzinstitute dabei, diese Chancen voll auszuschöpfen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'MiFID II Impact Assessment und Gap-Analyse',
          description: 'Wir analysieren systematisch die Auswirkungen von MiFID II auf Ihre Organisation und identifizieren bestehende Compliance-Lücken als Grundlage für Ihre Implementierungsstrategie.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Bewertung der MiFID II-Anforderungen für Ihr spezifisches Geschäftsmodell'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Detaillierte Analyse Ihrer bestehenden Prozesse, Systeme und Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation von Compliance-Lücken und Optimierungspotentialen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung eines strukturierten Maßnahmenplans mit klaren Prioritäten'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'MiFID II-Implementierung und Prozessoptimierung',
          description: 'Wir unterstützen Sie bei der effizienten Umsetzung der MiFID II-Anforderungen und integrieren diese nahtlos in Ihre bestehenden Geschäftsprozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Implementierung maßgeschneiderter Lösungen für Anlegerschutz und Produktgovernance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Aufbau robuster Best-Execution-Prozesse und Nachweisführung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration von Kostentransparenz- und Aufzeichnungspflichten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Optimierung und Automatisierung der MiFID II-relevanten Workflows'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(mifidIIReadinessData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ MiFID II Readiness page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
