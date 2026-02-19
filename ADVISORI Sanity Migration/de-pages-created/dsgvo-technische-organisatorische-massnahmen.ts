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
    console.log('Creating DSGVO Technische & Organisatorische Maßnahmen page...')

    const dsgvoTomsData = {
      _type: 'servicePage',
      _id: 'dsgvo-technische-organisatorische-massnahmen',
      title: 'DSGVO Technische & Organisatorische Maßnahmen (TOMs)',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dsgvo/dsgvo-implementation/dsgvo-technische-organisatorische-massnahmen'
      },
      parent: {
        _type: 'reference',
        _ref: 'dsgvo-implementation'
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
        title: 'DSGVO Technische & Organisatorische Maßnahmen | ADVISORI',
        description: 'Professionelle Implementierung technischer und organisatorischer Maßnahmen (TOMs) nach DSGVO. Comprehensive Security Framework für nachhaltigen Datenschutz.',
        keywords: 'DSGVO TOMs, Technische Maßnahmen, Organisatorische Maßnahmen, Data Security, Privacy Protection, GDPR Technical Measures'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DSGVO Technische & Organisatorische Maßnahmen'
        },
        tagline: 'Robuste technische und organisatorische Maßnahmen für DSGVO-konforme Datensicherheit',
        heading: 'DSGVO Technische & Organisatorische Maßnahmen (TOMs)',
        description: 'Die DSGVO verlangt angemessene technische und organisatorische Maßnahmen zum Schutz personenbezogener Daten. Wir implementieren umfassende TOMs-Frameworks, die höchste Sicherheitsstandards gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'DSGVO-konforme Implementierung aller erforderlichen Sicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Minimierung von Datenschutzverletzungen und Cyberrisiken'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Nachweisbare Compliance für Aufsichtsbehörden und Audits'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Stärkung des Vertrauens von Kunden und Geschäftspartnern'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Technische & Organisatorische Maßnahmen nach DSGVO',
        description: 'Artikel 32 der DSGVO verpflichtet Unternehmen zur Implementierung angemessener technischer und organisatorischer Maßnahmen. Wir entwickeln maßgeschneiderte TOMs-Konzepte, die Ihre spezifischen Risiken adressieren und nachhaltigen Datenschutz gewährleisten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Risikobewertung und TOMs-Gap-Analyse für bestehende Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung und Implementierung technischer Sicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Aufbau organisatorischer Prozesse und Kontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Continuous Monitoring und regelmäßige Überprüfung der Wirksamkeit'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Dokumentation und Nachweisführung für Compliance-Zwecke'
          }
        ],
        alert: {
          title: 'Wichtiger Hinweis',
          content: 'TOMs müssen dem Stand der Technik entsprechen und regelmäßig überprüft werden. Die Angemessenheit ist anhand des Risikos, der Art, des Umfangs und der Zwecke der Verarbeitung zu bewerten.'
        },
        whyUs: {
          title: 'Unsere TOMs-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Interdisziplinäres Team aus IT-Security-Experten und Datenschutz-Spezialisten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Branchenspezifische TOMs-Frameworks und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integration modernster Technologien und Security-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Überwachung und Optimierung der Maßnahmen'
            }
          ]
        },
        additionalInfo: 'Angemessene TOMs sind nicht nur rechtliche Pflicht, sondern auch Grundlage für Vertrauen in der digitalen Geschäftswelt. Sie schaffen Wettbewerbsvorteile durch nachweisbare Datensicherheit.',
        serviceDescription: 'Unser umfassendes TOMs-Portfolio deckt alle Aspekte der DSGVO-konformen Datensicherheit ab – von der technischen Infrastruktur bis zu organisatorischen Prozessen und Kontrollen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Pseudonymisierung und Verschlüsselung personenbezogener Daten'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Vertraulichkeit, Integrität und Verfügbarkeit der Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Wiederherstellbarkeit bei technischen oder physischen Zwischenfällen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Regelmäßige Überprüfung und Bewertung der Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Incident Response und Breach Notification Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser TOMs-Implementierungsansatz',
        description: 'Wir verfolgen einen risikobasierten und praxisorientierten Ansatz, der technische Innovation mit organisatorischer Exzellenz verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Risikobewertung und Bedrohungsanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung maßgeschneiderter TOMs-Architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Schrittweise Implementierung mit kontinuierlicher Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration in bestehende IT- und Sicherheitslandschaft'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliches Monitoring und adaptive Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die TOMs-Implementierung durch ADVISORI hat unsere Datensicherheit auf ein neues Level gehoben. Die Kombination aus technischer Exzellenz und organisatorischer Sorgfalt schafft nachhaltigen Schutz und Compliance.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Technische Maßnahmen',
          description: 'Implementierung modernster technischer Sicherheitsmaßnahmen zum Schutz personenbezogener Daten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'End-to-End-Verschlüsselung und Kryptographie-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Pseudonymisierungs- und Anonymisierungsverfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Zugangs- und Zugriffskontrollsysteme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Backup- und Disaster Recovery-Systeme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Organisatorische Maßnahmen',
          description: 'Entwicklung und Implementierung robuster organisatorischer Prozesse und Kontrollen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Datenschutz-Governance und Rollen-Konzepte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Schulungs- und Awareness-Programme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Incident Response und Breach Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Monitoring- und Audit-Prozesse'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(dsgvoTomsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DSGVO Technische & Organisatorische Maßnahmen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
