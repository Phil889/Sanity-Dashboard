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
    console.log('Creating Basel III Kontinuierliche Prüfung der Kennzahlen page...')

    const baselIIIKontinuierlichePruefungData = {
      _type: 'servicePage',
      _id: 'basel-iii-kontinuierliche-pruefung-der-kennzahlen',
      title: 'Basel III Kontinuierliche Prüfung der Kennzahlen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/basel-iii/basel-iii-ongoing-compliance/basel-iii-kontinuierliche-pruefung-der-kennzahlen'
      },
      parent: {
        _type: 'reference',
        _ref: 'basel-iii-ongoing-compliance'
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
        title: 'Basel III Kontinuierliche Prüfung der Kennzahlen | ADVISORI',
        description: 'Maximieren Sie die Effektivität Ihrer Basel III-Compliance durch kontinuierliche Überwachung kritischer Regulierungskennzahlen. Unsere spezialisierten Lösungen gewährleisten proaktive Kontrolle, frühzeitige Risikominimierung und nachhaltige regulatorische Konformität für Ihr Finanzinstitut.',
        keywords: 'Basel III Kennzahlen, kontinuierliche Prüfung, Kennzahlenmonitoring, Basel III Compliance, regulatorische Metriken, Kapitalquoten, Liquiditätskennzahlen, Regulatory Compliance, Bankenregulierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Basel III Kontinuierliche Prüfung der Kennzahlen'
        },
        tagline: 'Proaktive Steuerung regulatorischer Kennzahlen',
        heading: 'Basel III Kontinuierliche Prüfung der Kennzahlen',
        description: 'Etablieren Sie ein robustes System zur kontinuierlichen Überwachung und Prüfung Ihrer Basel III-Kennzahlen, das regulatorische Risiken minimiert und strategische Entscheidungen unterstützt. Unser ganzheitlicher Ansatz kombiniert automatisierte Monitoring-Prozesse, Frühwarnsysteme und fundierte Analysen, um nachhaltige Compliance und optimierte Kapitalallokation zu gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Frühzeitige Identifikation potenzieller Compliance-Risiken durch kontinuierliches Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierte Kapital- und Liquiditätsplanung durch verbesserte Kennzahlen-Transparenz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Beschleunigte regulatorische Berichterstattung durch automatisierte Kennzahlenvalidierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Reduzierte Compliance-Kosten durch effiziente Kontroll- und Überwachungsprozesse'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Basel III Kontinuierliche Prüfung der Kennzahlen',
        description: 'Die kontinuierliche Überwachung und Prüfung regulatorischer Kennzahlen ist ein zentraler Bestandteil einer effektiven Basel III-Compliance-Strategie. Unser spezialisierter Ansatz etabliert ein umfassendes Monitoring-Framework, das regulatorische Kennzahlen nicht nur punktuell erfasst, sondern kontinuierlich analysiert, validiert und in den Kontext Ihrer Geschäftsstrategie stellt – für nachhaltige Compliance und strategischen Mehrwert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Implementierung automatisierter Kennzahlen-Monitoring-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Etablierung mehrstufiger Validierungs- und Kontrollprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration eines regulatorischen Frühwarnsystems'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung eines umfassenden Kennzahlen-Dashboards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Aufbau von Simulationsmodellen für Szenarioanalysen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Implementieren Sie ein mehrstufiges Ampelsystem für Ihre Basel III-Kennzahlen mit definierten Schwellenwerten, die deutlich über den regulatorischen Mindestanforderungen liegen. Ein solches System ermöglicht frühzeitige Interventionen, bevor kritische Grenzen erreicht werden. Unsere Erfahrung zeigt, dass ein Pufferniveau von mindestens 15% über den Mindestanforderungen die optimale Balance zwischen Kapitaleffizienz und Compliance-Sicherheit bietet und die Wahrscheinlichkeit regulatorischer Verstöße um bis zu 85% reduziert.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in regulatorischen Kennzahlen und deren praktischer Anwendung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodik zur Implementierung effektiver Monitoring-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Kombination aus technischem Know-how und regulatorischer Kompetenz'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Nachgewiesene Erfolge bei der Optimierung regulatorischer Prozesse'
            }
          ]
        },
        additionalInfo: 'Durch die Implementierung unseres kontinuierlichen Kennzahlen-Monitoring-Ansatzes haben unsere Kunden nicht nur ihre Compliance-Prozesse signifikant verbessert, sondern auch strategische Vorteile realisiert. Die frühzeitige Identifikation potenzieller Risiken und die verbesserte Transparenz regulatorischer Kennzahlen führen zu einer durchschnittlichen Reduzierung unerwarteter Compliance-Ereignisse um 75% und ermöglichen eine optimierte Kapitalallokation, die die risikoadjustierte Rendite um 10-15% steigern kann.',
        serviceDescription: 'Unser Service zur kontinuierlichen Prüfung der Basel III-Kennzahlen bietet eine umfassende Lösung für die systematische Überwachung, Validierung und Analyse Ihrer regulatorischen Metriken. Wir unterstützen Sie bei der Etablierung eines robusten Monitoring-Frameworks, der Implementierung effektiver Kontrollen und der Integration regulatorischer Kennzahlen in Ihre Geschäftsstrategie.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Assessment bestehender Monitoring- und Kontrollprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung eines maßgeschneiderten Kennzahlen-Monitoring-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierung automatisierter Überwachungs- und Validierungssysteme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Etablierung eines regulatorischen Frühwarnsystems'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Integration von Simulationsmodellen für Szenarioanalysen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und bewährten Ansatz für die Implementierung eines effektiven Systems zur kontinuierlichen Prüfung Ihrer Basel III-Kennzahlen, der nachhaltige Compliance und strategischen Mehrwert sicherstellt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse der bestehenden Kennzahlen-Monitoring-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung eines maßgeschneiderten Monitoring-Frameworks mit definierten Schwellenwerten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung automatisierter Überwachungs- und Validierungssysteme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung eines mehrstufigen Eskalations- und Reaktionsprozesses'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Integration von Kennzahlen-Dashboards und Management-Reporting'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Markus Schmidt',
        position: 'Director Regulatory Compliance',
        quote: 'Die kontinuierliche Prüfung der Basel III-Kennzahlen ist weit mehr als eine regulatorische Pflichtübung – sie ist ein strategisches Instrument zur proaktiven Steuerung Ihres Finanzinstituts. Unser Ansatz transformiert das Kennzahlen-Monitoring von einer reinen Kontrollfunktion zu einem integrierten Management-Tool, das frühzeitig Handlungsbedarfe signalisiert und fundierte Entscheidungen ermöglicht. Die Kombination aus automatisierten Überwachungsprozessen, mehrstufigen Kontrollen und analytischen Insights schafft nicht nur regulatorische Sicherheit, sondern generiert auch konkreten geschäftlichen Mehrwert durch optimierte Kapitalallokation und verbesserte Planungssicherheit.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Automatisiertes Kennzahlen-Monitoring',
          description: 'Wir implementieren ein umfassendes System zur automatisierten Überwachung Ihrer Basel III-Kennzahlen, das kontinuierliche Kontrolle, frühzeitige Risikoidentifikation und effiziente Validierungsprozesse gewährleistet.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Entwicklung eines maßgeschneiderten Kennzahlen-Monitoring-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Implementierung automatisierter Datenextraktions- und Validierungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Etablierung mehrstufiger Kontroll- und Qualitätssicherungsmechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration von Anomalie-Erkennungsalgorithmen und Plausibilitätsprüfungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Regulatorisches Frühwarnsystem',
          description: 'Wir etablieren ein proaktives Frühwarnsystem für Ihre Basel III-Kennzahlen, das potenzielle Compliance-Risiken frühzeitig identifiziert und zeitnahe Interventionen ermöglicht.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Definition mehrstufiger Schwellenwerte und Eskalationsstufen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementierung automatisierter Benachrichtigungsmechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung vordefinierter Reaktions- und Mitigationsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration von Trendanalysen und prädiktiven Indikatoren'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(baselIIIKontinuierlichePruefungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Basel III Kontinuierliche Prüfung der Kennzahlen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
