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
    console.log('Creating DSGVO Ongoing Compliance page...')

    const dsgvoOngoingComplianceData = {
      _type: 'servicePage',
      _id: 'dsgvo-ongoing-compliance',
      title: 'DSGVO Ongoing Compliance',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dsgvo/dsgvo-ongoing-compliance'
      },
      parent: {
        _type: 'reference',
        _ref: 'dsgvo'
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
        title: 'DSGVO Ongoing Compliance | ADVISORI',
        description: 'Sichern Sie langfristige DSGVO-Konformität mit unseren spezialisierten Ongoing Compliance Dienstleistungen. Wir implementieren nachhaltige Datenschutz-Governance, kontinuierliche Monitoring-Systeme und proaktive Anpassungsprozesse für dauerhafte Compliance und Risikominimierung.',
        keywords: 'DSGVO Ongoing Compliance, Datenschutz-Compliance, kontinuierliche Konformität, GDPR Compliance Management, Datenschutz-Governance, Privacy Management, fortlaufende DSGVO-Betreuung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DSGVO Ongoing Compliance'
        },
        tagline: 'Nachhaltige DSGVO-Konformität durch systematisches Compliance-Management',
        heading: 'DSGVO Ongoing Compliance',
        description: 'Gewährleisten Sie die kontinuierliche Einhaltung der DSGVO-Anforderungen durch unseren ganzheitlichen Ongoing Compliance-Ansatz. Wir etablieren robuste Datenschutz-Governance-Strukturen, automatisierte Überwachungsmechanismen und proaktive Anpassungsprozesse, die dauerhafte Compliance sicherstellen und Datenschutzrisiken nachhaltig minimieren.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Kontinuierliche Einhaltung der DSGVO durch systematische Überwachung und Kontrolle'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Proaktive Anpassung an regulatorische Entwicklungen und Rechtsprechung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Reduziertes Bußgeldrisiko durch präventive Kontrollen und Frühwarnsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Optimierte Ressourcennutzung durch effiziente Datenschutz-Prozesse'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DSGVO Ongoing Compliance',
        description: 'Die kontinuierliche Einhaltung der DSGVO-Anforderungen stellt Unternehmen vor komplexe Herausforderungen, die weit über die initiale Implementierung hinausgehen. Unser DSGVO Ongoing Compliance-Ansatz etabliert nachhaltige Strukturen und Prozesse, die langfristige Konformität sicherstellen, Datenschutzrisiken minimieren und gleichzeitig operative Effizienz gewährleisten – ein umfassendes Framework für Datenschutz-Exzellenz.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Implementierung einer robusten Datenschutz-Governance-Struktur'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Etablierung automatisierter Compliance-Monitoring-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration proaktiver Änderungsmanagement-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung umfassender Datenschutz-Kontrollen und -Tests'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Aufbau kontinuierlicher Schulungs- und Awareness-Programme'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Für eine effektive DSGVO Ongoing Compliance ist die Integration von Datenschutzprinzipien in die täglichen Geschäftsprozesse entscheidend. Etablieren Sie ein "Privacy Change Management Office", das regulatorische Entwicklungen proaktiv verfolgt und deren Auswirkungen bewertet. Dieser Ansatz reduziert den Reaktionsaufwand bei rechtlichen Änderungen um bis zu 70% und minimiert Datenschutzrisiken erheblich.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in DSGVO-Anforderungen und datenschutzrechtlicher Praxis'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodik für die Implementierung nachhaltiger Datenschutz-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Kombination aus juristischem Know-how und operativer Umsetzungskompetenz'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Nachweisliche Erfolge bei der Optimierung von Datenschutz-Prozessen'
            }
          ]
        },
        additionalInfo: 'Durch die Implementierung unseres DSGVO Ongoing Compliance-Ansatzes haben unsere Kunden nicht nur ihre Compliance-Kosten um durchschnittlich 35% reduziert, sondern auch die Qualität ihrer Datenschutzprozesse signifikant verbessert. Die Automatisierung von Monitoring-Aktivitäten und die proaktive Anpassung an rechtliche Entwicklungen haben zu einer substanziellen Reduzierung von Datenschutzrisiken und aufsichtsrechtlichen Beanstandungen geführt.',
        serviceDescription: 'Unser DSGVO Ongoing Compliance-Service bietet eine umfassende Lösung für die kontinuierliche Einhaltung datenschutzrechtlicher Anforderungen. Wir unterstützen Sie bei der Etablierung nachhaltiger Datenschutz-Strukturen, der Implementierung effektiver Kontrollen und der proaktiven Anpassung an rechtliche Entwicklungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Assessment bestehender Datenschutz-Strukturen und -Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung und Implementierung eines Datenschutz-Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Etablierung automatisierter Monitoring- und Kontrollsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Implementation eines datenschutzrechtlichen Änderungsmanagements'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Entwicklung von Schulungs- und Awareness-Programmen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und bewährten Ansatz für die Implementierung nachhaltiger DSGVO Ongoing Compliance-Strukturen, der langfristige datenschutzrechtliche Konformität sicherstellt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse der bestehenden Datenschutz-Strukturen und -Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung eines maßgeschneiderten Datenschutz-Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung automatisierter Monitoring- und Kontrollmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung eines proaktiven datenschutzrechtlichen Änderungsmanagements'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Integration von Datenschutz-Schulungen und kontinuierlicher Prozessoptimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Maria Schneider',
        position: 'Senior Director Privacy & Data Protection',
        quote: 'Die nachhaltige Einhaltung der DSGVO-Anforderungen ist kein einmaliges Projekt, sondern ein kontinuierlicher Prozess, der in die Unternehmenskultur integriert werden muss. Unser Ongoing Compliance-Ansatz schafft die Strukturen, Prozesse und kulturellen Voraussetzungen für diese Integration und ermöglicht es unseren Kunden, Datenschutzanforderungen nicht nur zu erfüllen, sondern als Vertrauensgarant gegenüber Kunden und Partnern zu nutzen. Die Kombination aus automatisiertem Monitoring, proaktivem Änderungsmanagement und integriertem Kontrollsystem reduziert nicht nur Datenschutzrisiken, sondern optimiert auch den Ressourceneinsatz erheblich.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Datenschutz-Governance & Monitoring',
          description: 'Wir etablieren robuste Datenschutz-Governance-Strukturen und automatisierte Monitoring-Systeme, die kontinuierliche DSGVO-Compliance sicherstellen, Risiken frühzeitig identifizieren und Handlungsbedarf signalisieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Entwicklung eines maßgeschneiderten Datenschutz-Governance-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Implementierung automatisierter Compliance-Monitoring-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Etablierung klarer Verantwortlichkeiten und Eskalationswege'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration von KPI-basiertem Datenschutz-Reporting'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Privacy Change Management',
          description: 'Wir implementieren proaktive Prozesse zur Identifikation, Bewertung und Umsetzung datenschutzrechtlicher Änderungen, die Ihr Unternehmen vor rechtlichen Überraschungen schützen und Anpassungsaufwände minimieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Etablierung eines datenschutzrechtlichen Frühwarnsystems'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung strukturierter Privacy-Impact-Analyse-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Implementation standardisierter Änderungsmanagement-Verfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration von Stakeholder-Management und Kommunikation'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(dsgvoOngoingComplianceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DSGVO Ongoing Compliance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
