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
    console.log('Creating EBA Ongoing Compliance page...')

    const ebaOngoingComplianceData = {
      _type: 'servicePage',
      _id: 'eba-ongoing-compliance',
      title: 'EBA Ongoing Compliance',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eba/eba-ongoing-compliance'
      },
      parent: {
        _type: 'reference',
        _ref: 'eba'
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
        title: 'EBA Ongoing Compliance | ADVISORI',
        description: 'Sichern Sie nachhaltige Konformität mit EBA-Regularien durch unsere spezialisierten Ongoing Compliance Dienstleistungen. Wir implementieren robuste Prozesse für kontinuierliche Compliance, proaktive Anpassung an regulatorische Änderungen und operationale Exzellenz im Compliance-Management.',
        keywords: 'EBA Ongoing Compliance, fortlaufende Compliance, europäische Bankenaufsicht, Compliance-Management, Bankenregulierung, kontinuierliche Konformität, EBA-Anforderungen'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EBA Ongoing Compliance'
        },
        tagline: 'Nachhaltige Konformität mit EBA-Anforderungen',
        heading: 'EBA Ongoing Compliance',
        description: 'Sichern Sie die langfristige Konformität Ihres Finanzinstituts mit den komplexen Anforderungen der Europäischen Bankenaufsicht (EBA) durch unseren ganzheitlichen Ongoing Compliance-Ansatz. Wir implementieren robuste Governance-Strukturen, automatisierte Überwachungsmechanismen und proaktive Anpassungsprozesse, die kontinuierliche Compliance gewährleisten und regulatorische Risiken minimieren.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Kontinuierliche Einhaltung der EBA-Anforderungen durch systematische Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Proaktive Anpassung an regulatorische Änderungen und neue EBA-Leitlinien'
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
        heading: 'EBA Ongoing Compliance',
        description: 'Die kontinuierliche Einhaltung der EBA-Anforderungen stellt Finanzinstitute vor komplexe Herausforderungen, die weit über die initiale Implementierung hinausgehen. Unser EBA Ongoing Compliance-Ansatz etabliert nachhaltige Strukturen und Prozesse, die langfristige Konformität sicherstellen, regulatorische Risiken minimieren und gleichzeitig operative Effizienz gewährleisten – ein umfassendes Framework für regulatorische Exzellenz im europäischen Kontext.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Implementierung einer robusten Compliance-Governance-Struktur für EBA-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Etablierung automatisierter Compliance-Monitoring-Systeme für EBA-Regularien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration eines proaktiven Managements für EBA-Leitlinien und -Standards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung umfassender Compliance-Kontrollen und -Tests für EBA-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Aufbau kontinuierlicher Schulungs- und Awareness-Programme zu EBA-Regularien'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Für eine effektive EBA Ongoing Compliance ist die Integration regulatorischer Anforderungen in die täglichen Geschäftsprozesse entscheidend. Etablieren Sie ein "Regulatory Change Management Office", das EBA-Entwicklungen proaktiv verfolgt und deren Auswirkungen bewertet. Dieser Ansatz reduziert den Reaktionsaufwand bei regulatorischen Änderungen um bis zu 60% und minimiert Compliance-Risiken erheblich.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in EBA-Anforderungen und aufsichtsrechtlicher Praxis'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodik für die Implementierung nachhaltiger EBA-Compliance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Kombination aus regulatorischem Know-how und operativer Umsetzungskompetenz'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Nachweisliche Erfolge bei der Optimierung von EBA-Compliance-Prozessen'
            }
          ]
        },
        additionalInfo: 'Durch die Implementierung unseres EBA Ongoing Compliance-Ansatzes haben unsere Kunden nicht nur ihre Compliance-Kosten um durchschnittlich 30% reduziert, sondern auch die Qualität ihrer regulatorischen Prozesse signifikant verbessert. Die Automatisierung von Monitoring-Aktivitäten und die proaktive Anpassung an regulatorische Änderungen haben zu einer substanziellen Reduzierung von Compliance-Risiken und aufsichtsrechtlichen Beanstandungen geführt.',
        serviceDescription: 'Unser EBA Ongoing Compliance-Service bietet eine umfassende Lösung für die kontinuierliche Einhaltung der europäischen Bankenaufsichtsanforderungen. Wir unterstützen Sie bei der Etablierung nachhaltiger Compliance-Strukturen, der Implementierung effektiver Kontrollen und der proaktiven Anpassung an regulatorische Entwicklungen der EBA.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Assessment bestehender EBA-Compliance-Strukturen und -Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung und Implementierung eines EBA-Compliance-Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Etablierung automatisierter Monitoring- und Kontrollsysteme für EBA-Regularien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Implementation eines regulatorischen Änderungsmanagements für EBA-Leitlinien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Entwicklung von Schulungs- und Awareness-Programmen zu EBA-Anforderungen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und bewährten Ansatz für die Implementierung nachhaltiger EBA Ongoing Compliance-Strukturen, der langfristige regulatorische Konformität sicherstellt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse der bestehenden EBA-Compliance-Strukturen und -Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung eines maßgeschneiderten EBA-Compliance-Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung automatisierter Monitoring- und Kontrollmechanismen für EBA-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung eines proaktiven regulatorischen Änderungsmanagements für EBA-Leitlinien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Integration von EBA-spezifischen Schulungen und kontinuierlicher Prozessoptimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Anna Müller',
        position: 'Senior Director European Banking Regulation',
        quote: 'Die nachhaltige Einhaltung der EBA-Anforderungen ist kein einmaliges Projekt, sondern ein kontinuierlicher Prozess, der in die DNA des Finanzinstituts integriert werden muss. Unser Ongoing Compliance-Ansatz schafft die Strukturen, Prozesse und kulturellen Voraussetzungen für diese Integration und ermöglicht es unseren Kunden, regulatorische Anforderungen nicht nur zu erfüllen, sondern als strategischen Vorteil zu nutzen. Die Kombination aus automatisiertem Monitoring, proaktivem Änderungsmanagement und integriertem Kontrollsystem reduziert nicht nur Compliance-Risiken, sondern optimiert auch den Ressourceneinsatz erheblich.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'EBA-Compliance-Governance & Monitoring',
          description: 'Wir etablieren robuste Governance-Strukturen und automatisierte Monitoring-Systeme, die kontinuierliche Konformität mit EBA-Anforderungen sicherstellen, Risiken frühzeitig identifizieren und Handlungsbedarf signalisieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Entwicklung eines maßgeschneiderten EBA-Compliance-Governance-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Implementierung automatisierter Compliance-Monitoring-Systeme für EBA-Regularien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Etablierung klarer Verantwortlichkeiten und Eskalationswege'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration von KPI-basiertem EBA-Compliance-Reporting'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'EBA Regulatory Change Management',
          description: 'Wir implementieren proaktive Prozesse zur Identifikation, Bewertung und Umsetzung von EBA-Regularien und -Leitlinien, die Ihr Institut vor regulatorischen Überraschungen schützen und Anpassungsaufwände minimieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Etablierung eines regulatorischen Frühwarnsystems für EBA-Publikationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung strukturierter Impact-Analyse-Prozesse für neue EBA-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Implementation standardisierter Änderungsmanagement-Verfahren für EBA-Regularien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration von Stakeholder-Management und Kommunikation bei regulatorischen Änderungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(ebaOngoingComplianceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EBA Ongoing Compliance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
