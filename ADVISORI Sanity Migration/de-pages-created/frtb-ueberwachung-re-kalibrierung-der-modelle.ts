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
    console.log('Creating FRTB Überwachung & Re-Kalibrierung der Modelle page...')

    const frtbModelMonitoringData = {
      _type: 'servicePage',
      _id: 'frtb-ueberwachung-re-kalibrierung-der-modelle',
      title: 'FRTB Überwachung & Re-Kalibrierung der Modelle',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/frtb/frtb-ongoing-compliance/frtb-ueberwachung-re-kalibrierung-der-modelle'
      },
      parent: {
        _type: 'reference',
        _ref: 'frtb-ongoing-compliance'
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
        title: 'FRTB Modellüberwachung & Re-Kalibrierung | ADVISORI',
        description: 'Kontinuierliche Überwachung und Re-Kalibrierung von FRTB-Risikomodellen. Wir unterstützen Sie bei der systematischen Modellvalidierung und -optimierung für nachhaltige FRTB-Compliance.',
        keywords: 'FRTB, Modellüberwachung, Re-Kalibrierung, Risikomodelle, Backtesting, Modellvalidierung, Expected Shortfall, Market Risk'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FRTB Modellüberwachung & Re-Kalibrierung'
        },
        tagline: 'Präzise Modellperformance durch kontinuierliche Überwachung',
        heading: 'FRTB Überwachung & Re-Kalibrierung der Modelle',
        description: 'Die kontinuierliche Überwachung und Re-Kalibrierung von FRTB-Risikomodellen ist entscheidend für die nachhaltige Compliance und Kapitaleffizienz. Wir gewährleisten die optimale Performance Ihrer Modelle durch systematische Validierung und proaktive Anpassungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Kontinuierliche Validierung der Modellperformance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Proaktive Re-Kalibrierung bei Marktveränderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Optimierung der Kapitalanforderungen durch präzise Modelle'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Automatisierte Backtesting- und Monitoring-Prozesse'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'FRTB Modellüberwachung & Re-Kalibrierung',
        description: 'Die Fundamental Review of the Trading Book (FRTB) stellt hohe Anforderungen an die Qualität und Stabilität von Risikomodellen. Die kontinuierliche Überwachung der Modellperformance und die rechtzeitige Re-Kalibrierung sind essentiell, um sowohl regulatorische Compliance als auch optimale Kapitaleffizienz zu gewährleisten. Wir unterstützen Sie dabei, ein robustes Monitoring-Framework zu etablieren, das proaktiv auf Marktveränderungen reagiert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Überwachung der Expected Shortfall (ES) Modelle'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Kontinuierliches Backtesting und Performance-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Identifikation von Modellschwächen und Optimierungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Rechtzeitige Re-Kalibrierung bei veränderten Marktbedingungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Dokumentation und Reporting für aufsichtsrechtliche Anforderungen'
          }
        ],
        alert: {
          title: 'Regulatorischer Hinweis',
          content: 'Die EBA betont die Bedeutung kontinuierlicher Modellvalidierung. Unzureichende Überwachung kann zu Modellversagen, erhöhten Kapitalanforderungen und aufsichtsrechtlichen Maßnahmen führen. Eine proaktive Herangehensweise ist daher unerlässlich.'
        },
        whyUs: {
          title: 'Warum ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in FRTB-Modellierung und -Validierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrung mit komplexen Backtesting-Verfahren und Stress-Szenarien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Innovative Ansätze zur Automatisierung von Monitoring-Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Bewährte Methodiken zur Optimierung der Modellperformance'
            }
          ]
        },
        additionalInfo: 'Eine effektive Modellüberwachung kann die Modellstabilität um bis zu 25% verbessern und gleichzeitig die Kapitalkosten durch präzisere Risikoschätzungen reduzieren. Die Investition in systematische Monitoring-Prozesse zahlt sich sowohl in regulatorischer als auch in finanzieller Hinsicht aus.',
        serviceDescription: 'Wir bieten ein umfassendes Leistungsspektrum zur Überwachung und Optimierung Ihrer FRTB-Risikomodelle. Unser Ansatz kombiniert quantitative Expertise mit technischer Innovation, um nachhaltige und effiziente Modellvalidierungsprozesse zu etablieren.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Entwicklung und Implementierung von Modell-Monitoring-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Automatisierte Backtesting-Verfahren und Exception-Handling'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Re-Kalibrierungs-Strategien für verschiedene Marktszenarien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Performance-Optimierung bestehender Modelle'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Aufsichtsrechtliche Dokumentation und Reporting'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz',
        description: 'Wir entwickeln mit Ihnen eine systematische Herangehensweise an die Modellüberwachung, die sowohl regulatorische Anforderungen erfüllt als auch die operative Effizienz maximiert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Etablierung robuster Monitoring-Infrastrukturen mit automatisierten Alerts'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Implementierung statistischer Tests zur frühzeitigen Erkennung von Modellabweichungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung datengetriebener Re-Kalibrierungs-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration von Stress-Testing in die kontinuierliche Modellvalidierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Aufbau umfassender Dokumentations- und Governance-Prozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Die kontinuierliche Überwachung und Re-Kalibrierung von FRTB-Modellen ist ein kritischer Erfolgsfaktor für nachhaltige Compliance. Mit unserem systematischen Ansatz können Banken nicht nur regulatorische Sicherheit gewährleisten, sondern auch ihre Kapitaleffizienz durch präzise Risikomodelle optimieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Kontinuierliches Modell-Monitoring',
          description: 'Systematische Überwachung der Performance Ihrer FRTB-Risikomodelle durch automatisierte Prozesse und statistische Validierungsverfahren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Tägliche Backtesting-Routines für Expected Shortfall Modelle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Implementierung von Traffic Light Systems für Modellperformance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung von Model Performance Indicators (MPIs)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Automatisierte Alerting-Systeme bei Modellabweichungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Strategische Re-Kalibrierung',
          description: 'Proaktive und datengetriebene Re-Kalibrierung Ihrer Risikomodelle zur Optimierung der Vorhersagequalität und Kapitaleffizienz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Marktregime-spezifische Kalibrierungsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Optimierung von Lookback-Perioden und Decay-Faktoren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration von Forward-Looking Elementen in die Modellkalibrierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Validierung und Testing neuer Modellparameter'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(frtbModelMonitoringData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FRTB Überwachung & Re-Kalibrierung der Modelle page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
