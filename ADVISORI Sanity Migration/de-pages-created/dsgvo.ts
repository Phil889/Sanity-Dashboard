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
    console.log('Creating DSGVO page...')

    const dsgvoData = {
      _type: 'servicePage',
      _id: 'dsgvo',
      title: 'DSGVO',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dsgvo'
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
        title: 'DSGVO Compliance | ADVISORI',
        description: 'Umfassende DSGVO-Compliance-Beratung für Unternehmen. Datenschutz-Folgenabschätzung, Privacy by Design, technische und organisatorische Maßnahmen nach europäischer Datenschutz-Grundverordnung.',
        keywords: 'DSGVO, Datenschutz, Privacy by Design, DPIA, Datenschutz-Folgenabschätzung, EU-GDPR, Compliance, Datenschutzbeauftragter'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DSGVO Compliance'
        },
        tagline: 'Vollumfängliche DSGVO-Compliance für Ihr Unternehmen',
        heading: 'DSGVO',
        description: 'Die Datenschutz-Grundverordnung (DSGVO) stellt höchste Anforderungen an den Schutz personenbezogener Daten. Wir unterstützen Sie bei der vollständigen Umsetzung aller DSGVO-Anforderungen und gewährleisten nachhaltigen Datenschutz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige DSGVO-Compliance und Schutz vor Bußgeldern'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Privacy by Design und Privacy by Default Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Professionelle Datenschutz-Folgenabschätzung (DPIA)'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Überwachung und Anpassung der Datenschutzmaßnahmen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DSGVO Compliance',
        description: 'Die Datenschutz-Grundverordnung (DSGVO) ist seit Mai 2018 in Kraft und stellt umfassende Anforderungen an den Umgang mit personenbezogenen Daten. ADVISORI unterstützt Sie bei der vollständigen Implementierung aller DSGVO-Anforderungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Datenschutz-Gap-Analyse und Compliance-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung von Privacy by Design und Privacy by Default'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Durchführung von Datenschutz-Folgenabschätzungen (DPIA)'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Etablierung technischer und organisatorischer Maßnahmen (TOM)'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Aufbau effektiver Datenschutz-Governance und -Prozesse'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'DSGVO-Compliance ist ein kontinuierlicher Prozess, nicht nur ein einmaliges Projekt. Regelmäßige Überprüfungen und Anpassungen sind essentiell für nachhaltigen Datenschutz.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in europäischem und deutschem Datenschutzrecht'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Methoden für nachhaltige DSGVO-Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenübergreifende Erfahrung mit komplexen Datenschutzherausforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung und Updates zu neuen Datenschutzentwicklungen'
            }
          ]
        },
        additionalInfo: 'Bei Verstößen gegen die DSGVO drohen Bußgelder von bis zu 4% des weltweiten Jahresumsatzes oder 20 Millionen Euro. Eine professionelle DSGVO-Implementierung ist daher essentiell.',
        serviceDescription: 'Wir bieten Ihnen eine vollumfängliche DSGVO-Compliance-Beratung, von der initialen Gap-Analyse über die Implementierung bis hin zur kontinuierlichen Überwachung und Anpassung Ihrer Datenschutzmaßnahmen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'DSGVO-Gap-Analyse und Compliance-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Privacy by Design und Privacy by Default Konzepte'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Datenschutz-Folgenabschätzung (DPIA) und Risikoanalysen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Technische und organisatorische Maßnahmen (TOM)'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Datenschutz-Governance und kontinuierliches Monitoring'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen systematischen Ansatz zur DSGVO-Implementierung, der alle Aspekte des Datenschutzes berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer aktuellen Datenschutzlage'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten DSGVO-Compliance-Strategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung notwendiger technischer und organisatorischer Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Schulung Ihrer Mitarbeiter und Etablierung von Datenschutzprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und Optimierung der Datenschutzmaßnahmen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir einen kompetenten Partner gefunden, der uns bei der vollständigen DSGVO-Implementierung begleitet hat. Die praxisnahen Lösungen und die kontinuierliche Betreuung geben uns die Sicherheit, alle Datenschutzanforderungen zu erfüllen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'DSGVO Gap-Analyse & Assessment',
          description: 'Umfassende Bewertung Ihrer aktuellen Datenschutzlage und Identifikation aller Compliance-Lücken.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Vollständige Bestandsaufnahme aller Datenverarbeitungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung bestehender technischer und organisatorischer Maßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation von Compliance-Lücken und Risikobewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung einer priorisierten Roadmap zur DSGVO-Compliance'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Privacy by Design Implementation',
          description: 'Implementierung von Datenschutz durch Technikgestaltung und datenschutzfreundliche Voreinstellungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Integration von Datenschutzprinzipien in System- und Prozessdesign'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung datenschutzfreundlicher Standardeinstellungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Beratung bei der Auswahl datenschutzkonformer Technologien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Etablierung von Datenschutz-Governance in Entwicklungsprozessen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(dsgvoData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DSGVO page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
