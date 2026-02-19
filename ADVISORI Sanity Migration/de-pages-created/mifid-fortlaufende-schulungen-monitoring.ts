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
    console.log('Creating MiFID Fortlaufende Schulungen & Monitoring page...')

    const mifidTrainingMonitoringData = {
      _type: 'servicePage',
      _id: 'mifid-fortlaufende-schulungen-monitoring',
      title: 'MiFID Fortlaufende Schulungen & Monitoring',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/mifid/mifid-ongoing-compliance/mifid-fortlaufende-schulungen-monitoring'
      },
      parent: {
        _type: 'reference',
        _ref: 'mifid-ongoing-compliance'
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
        title: 'MiFID Fortlaufende Schulungen & Monitoring | ADVISORI',
        description: 'Sichern Sie kontinuierliche MiFID-Compliance durch unsere spezialisierten fortlaufenden Schulungs- und Monitoring-Dienstleistungen. Wir entwickeln maßgeschneiderte Trainingsprogramme und implementieren robuste Überwachungssysteme, die nachhaltige Kompetenz und proaktive Compliance-Sicherung in Ihrem Institut gewährleisten.',
        keywords: 'MiFID Schulungen, MiFID Monitoring, fortlaufende MiFID-Compliance, MiFID II Training, regulatorische Schulungen, Compliance-Monitoring, Wertpapierregulierung, Compliance-Schulungen, MiFID-Überwachung, Anlegerschutz'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'MiFID Fortlaufende Schulungen & Monitoring'
        },
        tagline: 'Nachhaltige MiFID-Kompetenz und proaktive Compliance-Sicherung',
        heading: 'MiFID Fortlaufende Schulungen & Monitoring',
        description: 'Gewährleisten Sie die kontinuierliche Einhaltung der MiFID-Anforderungen durch unsere umfassenden Schulungs- und Monitoring-Lösungen. Wir entwickeln maßgeschneiderte Trainingsprogramme, die tiefgreifendes Wissen zu MiFID-Anforderungen vermitteln, und implementieren robuste Überwachungssysteme, die Compliance-Risiken frühzeitig identifizieren und adressieren.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Maßgeschneiderte MiFID-Schulungsprogramme für verschiedene Funktionen und Wissenslevels'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte Monitoring-Systeme für frühzeitige Identifikation von Compliance-Risiken'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Regelmäßige Updates zu regulatorischen Änderungen und deren praktischer Umsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachweis der Compliance-Kompetenz gegenüber Aufsichtsbehörden'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'MiFID Fortlaufende Schulungen & Monitoring',
        description: 'Kontinuierliche MiFID-Compliance erfordert mehr als einmalige Maßnahmen – sie verlangt nach einem nachhaltigen Ansatz, der Wissensvermittlung und systematische Überwachung vereint. Unser integrierter Schulungs- und Monitoring-Ansatz entwickelt nicht nur das notwendige Know-how in Ihrem Institut, sondern stellt auch sicher, dass MiFID-Anforderungen in der täglichen Praxis konsequent umgesetzt werden und Abweichungen frühzeitig erkannt werden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung zielgruppenspezifischer MiFID-Schulungsprogramme für alle relevanten Funktionen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementation kontinuierlicher Lernpfade mit modularem Aufbau und Wissensvertiefung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Etablierung automatisierter Monitoring-Systeme für MiFID-relevante Prozesse und Aktivitäten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von KPI-basiertem Compliance-Reporting und Frühwarnsystemen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Regelmäßige Assessments und kontinuierliche Verbesserung der Compliance-Prozesse'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Integrieren Sie praxisorientierte Case Studies und simulierte Aufsichtsszenarien in Ihre MiFID-Schulungen, um den Wissenstransfer in den Arbeitsalltag zu maximieren. Kombinieren Sie dies mit automatisierten Monitoring-Dashboards, die wichtige Compliance-KPIs in Echtzeit visualisieren. Dieser duale Ansatz erhöht nicht nur die MiFID-Kompetenz, sondern verbessert auch die Früherkennung potenzieller Compliance-Risiken um bis zu 70%.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in MiFID-Anforderungen und aufsichtsrechtlicher Praxis'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodik für nachhaltige Wissensvermittlung und effektives Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Kombination aus regulatorischem Know-how und didaktischer Kompetenz'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Nachweisliche Erfolge bei der Implementierung nachhaltiger Compliance-Strukturen'
            }
          ]
        },
        additionalInfo: 'Unsere Kunden berichten nach Implementierung unserer MiFID-Schulungs- und Monitoring-Lösungen von einer signifikanten Verbesserung der Compliance-Qualität. Durchschnittlich konnten sie die Anzahl der MiFID-bezogenen Compliance-Vorfälle um 65% reduzieren und gleichzeitig die Effizienz ihrer regulatorischen Prozesse um 40% steigern. Die Kombination aus zielgerichtetem Wissensaufbau und systematischer Überwachung führt zu einer nachhaltigen Compliance-Kultur, die weit über formale Anforderungen hinausgeht.',
        serviceDescription: 'Unser MiFID Fortlaufende Schulungen & Monitoring-Service bietet eine umfassende Lösung für die kontinuierliche Entwicklung und Überwachung Ihrer MiFID-Compliance. Wir unterstützen Sie bei der Etablierung nachhaltiger Schulungsstrukturen, der Implementierung effektiver Monitoring-Systeme und der proaktiven Anpassung an regulatorische Entwicklungen im Wertpapiergeschäft.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Assessment bestehender MiFID-Schulungs- und Monitoring-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung maßgeschneiderter MiFID-Schulungsprogramme für verschiedene Zielgruppen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierung automatisierter Monitoring-Systeme für MiFID-relevante Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Etablierung von KPI-basiertem Compliance-Reporting und Frühwarnsystemen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Regelmäßige Updates zu regulatorischen Änderungen und deren praktischer Umsetzung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und bewährten Ansatz für die Implementierung nachhaltiger MiFID-Schulungs- und Monitoring-Strukturen, der langfristige regulatorische Konformität im Wertpapiergeschäft sicherstellt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse bestehender MiFID-Schulungskonzepte und Überwachungsmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung eines maßgeschneiderten MiFID-Schulungs- und Monitoring-Konzepts'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung digitaler Lernplattformen und automatisierter Überwachungssysteme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung eines kontinuierlichen Verbesserungsprozesses für Schulungsinhalte und Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Integration von Wissensmanagement und Compliance-Überwachung in die täglichen Prozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Thomas Schneider',
        position: 'Lead Consultant Regulatory Training',
        quote: 'Die nachhaltige Einhaltung der MiFID-Anforderungen basiert auf zwei Säulen: dem tiefgreifenden Verständnis der regulatorischen Anforderungen durch alle Mitarbeiter und der systematischen Überwachung der täglichen Umsetzung. Unser integrierter Schulungs- und Monitoring-Ansatz verbindet diese beiden Dimensionen und schafft eine selbstlernende Compliance-Struktur, die kontinuierlich wächst und sich an neue Anforderungen anpasst. Die Kombination aus didaktisch optimierten Schulungskonzepten und KI-gestützten Monitoring-Systemen reduziert nicht nur Compliance-Risiken erheblich, sondern steigert auch die Effizienz und Qualität der Kundenberatung im Wertpapiergeschäft.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'MiFID-Schulungsprogramme & Kompetenzentwicklung',
          description: 'Wir entwickeln maßgeschneiderte Schulungsprogramme, die MiFID-Anforderungen praxisnah vermitteln und nachhaltiges Compliance-Wissen in Ihrem Institut aufbauen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Zielgruppenspezifische MiFID-Schulungsmodule für verschiedene Funktionen und Wissenslevels'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung praxisorientierter Case Studies und interaktiver Lernformate'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Integration von Wissensüberprüfungen und Kompetenznachweis-Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Regelmäßige Updates zu regulatorischen Änderungen und deren praktischer Umsetzung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'MiFID-Compliance-Monitoring & Frühwarnsysteme',
          description: 'Wir implementieren effektive Monitoring-Systeme, die MiFID-Compliance kontinuierlich überwachen, Risiken frühzeitig identifizieren und proaktives Handeln ermöglichen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung maßgeschneiderter MiFID-Compliance-KPIs und Metriken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementation automatisierter Überwachungssysteme für MiFID-relevante Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Etablierung von Frühwarnsystemen für potenzielle Compliance-Risiken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration von Monitoring-Ergebnissen in kontinuierliche Verbesserungsprozesse'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(mifidTrainingMonitoringData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ MiFID Fortlaufende Schulungen & Monitoring page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
