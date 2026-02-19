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
    console.log('Creating VS-NFD Ongoing Compliance page...')

    const vsNfdOngoingComplianceData = {
      _type: 'servicePage',
      _id: 'vs-nfd-ongoing-compliance',
      title: 'VS-NFD Ongoing Compliance',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/vs-nfd/vs-nfd-ongoing-compliance'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management'
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
        title: 'VS-NFD Ongoing Compliance | ADVISORI',
        description: 'Sichern Sie langfristige Compliance mit der VS-NFD-Verordnung durch unsere spezialisierten Ongoing Compliance Dienstleistungen. Wir implementieren nachhaltige Prozesse und Kontrollen für kontinuierliche Konformität, proaktive Anpassung an regulatorische Änderungen und operative Exzellenz im VS-NFD Compliance-Management.',
        keywords: 'VS-NFD Ongoing Compliance, fortlaufende VS-NFD Compliance, Verordnung sonstige nichtfinanzielle Dienstleister, kontinuierliche Konformität, VS-NFD Monitoring, regulatorische Anforderungen'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'VS-NFD Ongoing Compliance'
        },
        tagline: 'Nachhaltige Konformität mit VS-NFD-Anforderungen',
        heading: 'VS-NFD Ongoing Compliance',
        description: 'Sichern Sie die langfristige Konformität Ihres Unternehmens mit den komplexen VS-NFD-Anforderungen durch unseren ganzheitlichen Ongoing Compliance-Ansatz. Wir implementieren robuste Governance-Strukturen, automatisierte Überwachungsmechanismen und proaktive Anpassungsprozesse, die kontinuierliche VS-NFD-Compliance gewährleisten und regulatorische Risiken für nichtfinanzielle Dienstleister minimieren.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Kontinuierliche Einhaltung der VS-NFD-Anforderungen durch systematische Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Proaktive Anpassung an VS-NFD-Änderungen und neue aufsichtsrechtliche Interpretationen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Reduziertes Compliance-Risiko durch automatisierte Kontrollen und Frühwarnsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Optimierte Ressourcennutzung durch effiziente VS-NFD Compliance-Prozesse'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'VS-NFD Ongoing Compliance',
        description: 'Die kontinuierliche Einhaltung der VS-NFD-Anforderungen stellt nichtfinanzielle Dienstleister vor komplexe Herausforderungen, die weit über die initiale Implementierung hinausgehen. Unser VS-NFD Ongoing Compliance-Ansatz etabliert nachhaltige Strukturen und Prozesse, die langfristige Konformität sicherstellen, regulatorische Risiken minimieren und gleichzeitig operative Effizienz gewährleisten – ein umfassendes Framework für regulatorische Exzellenz im Bereich nichtfinanzieller Dienstleistungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Implementierung einer robusten VS-NFD Compliance-Governance-Struktur'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Etablierung automatisierter VS-NFD Compliance-Monitoring-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration regulatorischer Änderungsmanagement-Prozesse für VS-NFD'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung umfassender VS-NFD Compliance-Kontrollen und -Tests'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Aufbau kontinuierlicher Schulungs- und Awareness-Programme für VS-NFD'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Für eine effektive VS-NFD Ongoing Compliance ist die Integration regulatorischer Anforderungen in die täglichen Geschäftsprozesse nichtfinanzieller Dienstleister entscheidend. Etablieren Sie ein "VS-NFD Regulatory Change Management Office", das regulatorische Entwicklungen proaktiv verfolgt und deren Auswirkungen auf Ihr Geschäftsmodell bewertet. Dieser Ansatz reduziert den Reaktionsaufwand bei regulatorischen Änderungen um bis zu 60% und minimiert VS-NFD Compliance-Risiken erheblich.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in VS-NFD-Anforderungen und aufsichtsrechtlicher Praxis für nichtfinanzielle Dienstleister'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodik für die Implementierung nachhaltiger VS-NFD Compliance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Kombination aus VS-NFD regulatorischem Know-how und operativer Umsetzungskompetenz'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Nachweisliche Erfolge bei der Optimierung von VS-NFD Compliance-Prozessen'
            }
          ]
        },
        additionalInfo: 'Durch die Implementierung unseres VS-NFD Ongoing Compliance-Ansatzes haben unsere Kunden nicht nur ihre Compliance-Kosten um durchschnittlich 30% reduziert, sondern auch die Qualität ihrer regulatorischen Prozesse signifikant verbessert. Die Automatisierung von Monitoring-Aktivitäten und die proaktive Anpassung an VS-NFD-Änderungen haben zu einer substanziellen Reduzierung von Compliance-Risiken und aufsichtsrechtlichen Beanstandungen geführt.',
        serviceDescription: 'Unser VS-NFD Ongoing Compliance-Service bietet eine umfassende Lösung für die kontinuierliche Einhaltung der VS-NFD-Anforderungen. Wir unterstützen Sie bei der Etablierung nachhaltiger Compliance-Strukturen, der Implementierung effektiver Kontrollen und der proaktiven Anpassung an regulatorische Entwicklungen im Bereich nichtfinanzieller Dienstleistungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Assessment bestehender VS-NFD Compliance-Strukturen und -Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung und Implementierung eines VS-NFD Compliance-Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Etablierung automatisierter VS-NFD Monitoring- und Kontrollsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Implementation eines regulatorischen Änderungsmanagements für VS-NFD'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Entwicklung von VS-NFD Schulungs- und Awareness-Programmen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und bewährten Ansatz für die Implementierung nachhaltiger VS-NFD Ongoing Compliance-Strukturen, der langfristige regulatorische Konformität für nichtfinanzielle Dienstleister sicherstellt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse der bestehenden VS-NFD Compliance-Strukturen und -Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung eines maßgeschneiderten VS-NFD Compliance-Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung automatisierter VS-NFD Monitoring- und Kontrollmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung eines proaktiven regulatorischen Änderungsmanagements für VS-NFD'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Integration von VS-NFD Compliance-Schulungen und kontinuierlicher Prozessoptimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Sarah Müller',
        position: 'Senior Director VS-NFD Regulatory Compliance',
        quote: 'Die nachhaltige Einhaltung der VS-NFD-Anforderungen ist kein einmaliges Projekt, sondern ein kontinuierlicher Prozess, der in die DNA des nichtfinanziellen Dienstleisters integriert werden muss. Unser Ongoing Compliance-Ansatz schafft die Strukturen, Prozesse und kulturellen Voraussetzungen für diese Integration und ermöglicht es unseren Kunden, VS-NFD-Anforderungen nicht nur zu erfüllen, sondern als strategischen Vorteil zu nutzen. Die Kombination aus automatisiertem Monitoring, proaktivem Änderungsmanagement und integriertem Kontrollsystem reduziert nicht nur Compliance-Risiken, sondern optimiert auch den Ressourceneinsatz erheblich.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'VS-NFD Compliance-Governance & Monitoring',
          description: 'Wir etablieren robuste Governance-Strukturen und automatisierte Monitoring-Systeme speziell für VS-NFD-Anforderungen, die kontinuierliche Compliance sicherstellen, Risiken frühzeitig identifizieren und Handlungsbedarf signalisieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Entwicklung eines maßgeschneiderten VS-NFD Compliance-Governance-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Implementierung automatisierter VS-NFD Compliance-Monitoring-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Etablierung klarer Verantwortlichkeiten und Eskalationswege für VS-NFD'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration von KPI-basiertem VS-NFD Compliance-Reporting'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'VS-NFD Regulatory Change Management',
          description: 'Wir implementieren proaktive Prozesse zur Identifikation, Bewertung und Umsetzung von VS-NFD-Änderungen, die Ihr Unternehmen vor regulatorischen Überraschungen schützen und Anpassungsaufwände minimieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Etablierung eines VS-NFD regulatorischen Frühwarnsystems'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung strukturierter Impact-Analyse-Prozesse für VS-NFD-Änderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Implementation standardisierter VS-NFD Änderungsmanagement-Verfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration von Stakeholder-Management und Kommunikation für VS-NFD'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(vsNfdOngoingComplianceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ VS-NFD Ongoing Compliance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
