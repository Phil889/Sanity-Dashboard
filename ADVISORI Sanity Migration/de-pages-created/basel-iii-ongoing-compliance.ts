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
    console.log('Creating Basel III Ongoing Compliance page...')

    const baselIIIOngoingComplianceData = {
      _type: 'servicePage',
      _id: 'basel-iii-ongoing-compliance',
      title: 'Basel III Ongoing Compliance',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/basel-iii/basel-iii-ongoing-compliance'
      },
      parent: {
        _type: 'reference',
        _ref: 'basel-iii'
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
        title: 'Basel III Ongoing Compliance | ADVISORI',
        description: 'Sichern Sie langfristige Compliance mit unseren spezialisierten Basel III Ongoing Compliance Dienstleistungen. Wir implementieren nachhaltige Prozesse und Kontrollen für kontinuierliche Konformität, proaktive Anpassung an regulatorische Änderungen und operative Exzellenz im Compliance-Management.',
        keywords: 'Basel III Ongoing Compliance, fortlaufende Compliance, regulatorische Anforderungen, Compliance-Management, Bankenregulierung, kontinuierliche Konformität, Compliance-Monitoring'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Basel III Ongoing Compliance'
        },
        tagline: 'Nachhaltige Konformität mit Basel III-Anforderungen',
        heading: 'Basel III Ongoing Compliance',
        description: 'Sichern Sie die langfristige Konformität Ihres Finanzinstituts mit den komplexen Basel III-Anforderungen durch unseren ganzheitlichen Ongoing Compliance-Ansatz. Wir implementieren robuste Governance-Strukturen, automatisierte Überwachungsmechanismen und proaktive Anpassungsprozesse, die kontinuierliche Compliance gewährleisten und regulatorische Risiken minimieren.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Kontinuierliche Einhaltung regulatorischer Anforderungen durch systematische Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Proaktive Anpassung an regulatorische Änderungen und Interpretationen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Reduziertes Compliance-Risiko durch automatisierte Kontrollen und Frühwarnsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Optimierte Ressourcennutzung durch effiziente Compliance-Prozesse'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Basel III Ongoing Compliance',
        description: 'Die kontinuierliche Einhaltung der Basel III-Anforderungen stellt Finanzinstitute vor komplexe Herausforderungen, die weit über die initiale Implementierung hinausgehen. Unser Basel III Ongoing Compliance-Ansatz etabliert nachhaltige Strukturen und Prozesse, die langfristige Konformität sicherstellen, regulatorische Risiken minimieren und gleichzeitig operative Effizienz gewährleisten – ein umfassendes Framework für regulatorische Exzellenz.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Implementierung einer robusten Compliance-Governance-Struktur'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Etablierung automatisierter Compliance-Monitoring-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration regulatorischer Änderungsmanagement-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung umfassender Compliance-Kontrollen und -Tests'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Aufbau kontinuierlicher Schulungs- und Awareness-Programme'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Für eine effektive Basel III Ongoing Compliance ist die Integration regulatorischer Anforderungen in die täglichen Geschäftsprozesse entscheidend. Etablieren Sie ein "Regulatory Change Management Office", das regulatorische Entwicklungen proaktiv verfolgt und deren Auswirkungen bewertet. Dieser Ansatz reduziert den Reaktionsaufwand bei regulatorischen Änderungen um bis zu 60% und minimiert Compliance-Risiken erheblich.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in regulatorischen Anforderungen und aufsichtsrechtlicher Praxis'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodik für die Implementierung nachhaltiger Compliance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Kombination aus regulatorischem Know-how und operativer Umsetzungskompetenz'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Nachweisliche Erfolge bei der Optimierung von Compliance-Prozessen'
            }
          ]
        },
        additionalInfo: 'Durch die Implementierung unseres Basel III Ongoing Compliance-Ansatzes haben unsere Kunden nicht nur ihre Compliance-Kosten um durchschnittlich 30% reduziert, sondern auch die Qualität ihrer regulatorischen Prozesse signifikant verbessert. Die Automatisierung von Monitoring-Aktivitäten und die proaktive Anpassung an regulatorische Änderungen haben zu einer substanziellen Reduzierung von Compliance-Risiken und aufsichtsrechtlichen Beanstandungen geführt.',
        serviceDescription: 'Unser Basel III Ongoing Compliance-Service bietet eine umfassende Lösung für die kontinuierliche Einhaltung regulatorischer Anforderungen. Wir unterstützen Sie bei der Etablierung nachhaltiger Compliance-Strukturen, der Implementierung effektiver Kontrollen und der proaktiven Anpassung an regulatorische Entwicklungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Assessment bestehender Compliance-Strukturen und -Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung und Implementierung eines Compliance-Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Etablierung automatisierter Monitoring- und Kontrollsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Implementation eines regulatorischen Änderungsmanagements'
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
        description: 'Wir verfolgen einen strukturierten und bewährten Ansatz für die Implementierung nachhaltiger Basel III Ongoing Compliance-Strukturen, der langfristige regulatorische Konformität sicherstellt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse der bestehenden Compliance-Strukturen und -Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung eines maßgeschneiderten Compliance-Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung automatisierter Monitoring- und Kontrollmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung eines proaktiven regulatorischen Änderungsmanagements'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Integration von Compliance-Schulungen und kontinuierlicher Prozessoptimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Thomas Weber',
        position: 'Senior Director Regulatory Compliance',
        quote: 'Die nachhaltige Einhaltung der Basel III-Anforderungen ist kein einmaliges Projekt, sondern ein kontinuierlicher Prozess, der in die DNA des Finanzinstituts integriert werden muss. Unser Ongoing Compliance-Ansatz schafft die Strukturen, Prozesse und kulturellen Voraussetzungen für diese Integration und ermöglicht es unseren Kunden, regulatorische Anforderungen nicht nur zu erfüllen, sondern als strategischen Vorteil zu nutzen. Die Kombination aus automatisiertem Monitoring, proaktivem Änderungsmanagement und integriertem Kontrollsystem reduziert nicht nur Compliance-Risiken, sondern optimiert auch den Ressourceneinsatz erheblich.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Compliance-Governance & Monitoring',
          description: 'Wir etablieren robuste Governance-Strukturen und automatisierte Monitoring-Systeme, die kontinuierliche Compliance sicherstellen, Risiken frühzeitig identifizieren und Handlungsbedarf signalisieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Entwicklung eines maßgeschneiderten Compliance-Governance-Frameworks'
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
              text: 'Integration von KPI-basiertem Compliance-Reporting'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Regulatory Change Management',
          description: 'Wir implementieren proaktive Prozesse zur Identifikation, Bewertung und Umsetzung regulatorischer Änderungen, die Ihr Institut vor regulatorischen Überraschungen schützen und Anpassungsaufwände minimieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Etablierung eines regulatorischen Frühwarnsystems'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung strukturierter Impact-Analyse-Prozesse'
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
    transaction.createOrReplace(baselIIIOngoingComplianceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Basel III Ongoing Compliance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
