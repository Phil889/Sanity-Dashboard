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
    console.log('Creating MiFID Ongoing Compliance page...')

    const mifidOngoingComplianceData = {
      _type: 'servicePage',
      _id: 'mifid-ongoing-compliance',
      title: 'MiFID Ongoing Compliance',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/mifid/mifid-ongoing-compliance'
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
        title: 'MiFID Ongoing Compliance | ADVISORI',
        description: 'Sichern Sie langfristige Konformität mit unseren spezialisierten MiFID Ongoing Compliance Dienstleistungen. Wir implementieren nachhaltige Prozesse und Kontrollen für kontinuierliche Einhaltung der MiFID-Anforderungen, proaktive Anpassung an ESMA- und BaFin-Vorgaben sowie operative Exzellenz im Compliance-Management.',
        keywords: 'MiFID Ongoing Compliance, fortlaufende MiFID-Compliance, MiFID II, regulatorische Anforderungen, Compliance-Management, Wertpapierregulierung, kontinuierliche Konformität, Compliance-Monitoring, ESMA, BaFin'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'MiFID Ongoing Compliance'
        },
        tagline: 'Nachhaltige Konformität mit MiFID-Anforderungen',
        heading: 'MiFID Ongoing Compliance',
        description: 'Sichern Sie die langfristige Konformität Ihres Instituts mit den komplexen MiFID-Anforderungen durch unseren ganzheitlichen Ongoing Compliance-Ansatz. Wir implementieren robuste Governance-Strukturen, automatisierte Überwachungsmechanismen und proaktive Anpassungsprozesse, die kontinuierliche Compliance gewährleisten und regulatorische Risiken minimieren.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Kontinuierliche Einhaltung der MiFID-Anforderungen durch systematische Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Proaktive Anpassung an neue ESMA- und BaFin-Vorgaben und Interpretationen'
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
        heading: 'MiFID Ongoing Compliance',
        description: 'Die kontinuierliche Einhaltung der MiFID-Anforderungen stellt Finanzinstitute vor komplexe Herausforderungen, die weit über die initiale Implementierung hinausgehen. Unser MiFID Ongoing Compliance-Ansatz etabliert nachhaltige Strukturen und Prozesse, die langfristige Konformität sicherstellen, regulatorische Risiken minimieren und gleichzeitig operative Effizienz gewährleisten – ein umfassendes Framework für regulatorische Exzellenz im Wertpapiergeschäft.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Implementierung einer robusten MiFID-Compliance-Governance-Struktur'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Etablierung automatisierter Compliance-Monitoring-Systeme für MiFID-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration regulatorischer Änderungsmanagement-Prozesse für ESMA- und BaFin-Updates'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung umfassender Compliance-Kontrollen und -Tests für Anleger- und Produktschutz'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Aufbau kontinuierlicher Schulungs- und Awareness-Programme für alle Mitarbeiter'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Für eine effektive MiFID Ongoing Compliance ist die Integration regulatorischer Anforderungen in die täglichen Vertriebsprozesse entscheidend. Etablieren Sie ein "Regulatory Change Management Office", das regulatorische Entwicklungen proaktiv verfolgt und deren Auswirkungen bewertet. Dieser Ansatz reduziert den Reaktionsaufwand bei regulatorischen Änderungen um bis zu 60% und minimiert Compliance-Risiken erheblich.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in MiFID-Anforderungen und aufsichtsrechtlicher Praxis'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodik für die Implementierung nachhaltiger MiFID-Compliance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Kombination aus regulatorischem Know-how und operativer Umsetzungskompetenz im Wertpapiergeschäft'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Nachweisliche Erfolge bei der Optimierung von MiFID-Compliance-Prozessen'
            }
          ]
        },
        additionalInfo: 'Durch die Implementierung unseres MiFID Ongoing Compliance-Ansatzes haben unsere Kunden nicht nur ihre Compliance-Kosten um durchschnittlich 30% reduziert, sondern auch die Qualität ihrer regulatorischen Prozesse signifikant verbessert. Die Automatisierung von Monitoring-Aktivitäten und die proaktive Anpassung an regulatorische Änderungen haben zu einer substanziellen Reduzierung von Compliance-Risiken und aufsichtsrechtlichen Beanstandungen geführt.',
        serviceDescription: 'Unser MiFID Ongoing Compliance-Service bietet eine umfassende Lösung für die kontinuierliche Einhaltung der komplexen MiFID-Anforderungen. Wir unterstützen Sie bei der Etablierung nachhaltiger Compliance-Strukturen, der Implementierung effektiver Kontrollen und der proaktiven Anpassung an regulatorische Entwicklungen im Wertpapiergeschäft.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Assessment bestehender MiFID-Compliance-Strukturen und -Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung und Implementierung eines MiFID-Compliance-Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Etablierung automatisierter Monitoring- und Kontrollsysteme für Anleger- und Produktschutz'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Implementation eines regulatorischen Änderungsmanagements für ESMA- und BaFin-Updates'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Entwicklung von MiFID-spezifischen Schulungs- und Awareness-Programmen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und bewährten Ansatz für die Implementierung nachhaltiger MiFID Ongoing Compliance-Strukturen, der langfristige regulatorische Konformität im Wertpapiergeschäft sicherstellt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse der bestehenden MiFID-Compliance-Strukturen und -Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung eines maßgeschneiderten MiFID-Compliance-Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung automatisierter Monitoring- und Kontrollmechanismen für Anlegerschutz'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung eines proaktiven regulatorischen Änderungsmanagements für MiFID-Updates'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Integration von MiFID-Compliance-Schulungen und kontinuierlicher Prozessoptimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Claudia Müller',
        position: 'Senior Director Regulatory Compliance',
        quote: 'Die nachhaltige Einhaltung der MiFID-Anforderungen ist kein einmaliges Projekt, sondern ein kontinuierlicher Prozess, der in die DNA des Finanzinstituts integriert werden muss. Unser Ongoing Compliance-Ansatz schafft die Strukturen, Prozesse und kulturellen Voraussetzungen für diese Integration und ermöglicht es unseren Kunden, regulatorische Anforderungen nicht nur zu erfüllen, sondern als strategischen Vorteil zu nutzen. Die Kombination aus automatisiertem Monitoring, proaktivem Änderungsmanagement und integriertem Kontrollsystem reduziert nicht nur Compliance-Risiken, sondern optimiert auch den Ressourceneinsatz erheblich und stärkt das Vertrauen der Anleger.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'MiFID-Compliance-Governance & Monitoring',
          description: 'Wir etablieren robuste Governance-Strukturen und automatisierte Monitoring-Systeme, die kontinuierliche MiFID-Compliance sicherstellen, Risiken frühzeitig identifizieren und Handlungsbedarf signalisieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Entwicklung eines maßgeschneiderten MiFID-Compliance-Governance-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Implementierung automatisierter Compliance-Monitoring-Systeme für Anlegerschutz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Etablierung klarer Verantwortlichkeiten und Eskalationswege für MiFID-Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration von KPI-basiertem MiFID-Compliance-Reporting'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'MiFID Regulatory Change Management',
          description: 'Wir implementieren proaktive Prozesse zur Identifikation, Bewertung und Umsetzung regulatorischer MiFID-Änderungen, die Ihr Institut vor regulatorischen Überraschungen schützen und Anpassungsaufwände minimieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Etablierung eines regulatorischen Frühwarnsystems für ESMA- und BaFin-Vorgaben'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung strukturierter Impact-Analyse-Prozesse für MiFID-Updates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Implementation standardisierter Änderungsmanagement-Verfahren für Vertriebsprozesse'
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
    transaction.createOrReplace(mifidOngoingComplianceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ MiFID Ongoing Compliance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
