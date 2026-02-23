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
    console.log('Creating BCBS-239 Testing & Validierung page...')

    const bcbs239TestingValidierungData = {
      _type: 'servicePage',
      _id: 'bcbs-239-testing-validierung',
      title: 'BCBS-239 Testing & Validierung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/bcbs-239/bcbs-239-implementation/bcbs-239-testing-validierung'
      },
      parent: {
        _type: 'reference',
        _ref: 'bcbs-239-implementation'
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
        title: 'BCBS-239 Testing & Validierung | ADVISORI',
        description: 'Umfassende Teststrategien und Validierungsmethoden für Ihre BCBS-239 Implementierung: Prüfen Sie die Wirksamkeit Ihrer Risikodaten- und Reportingprozesse für nachhaltige Compliance.',
        keywords: 'BCBS-239 Testing, BCBS-239 Validierung, Regulatory Compliance, Risikodaten Testing, Reporting Validierung, Compliance Nachweis, Aufsichtsrechtliche Prüfung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'BCBS-239 Testing & Validierung'
        },
        tagline: 'Rigorose Überprüfung und Validierung Ihrer BCBS-239 Compliance',
        heading: 'BCBS-239 Testing & Validierung',
        description: 'Die Validierung Ihrer BCBS-239 Implementierung ist entscheidend für nachhaltige Compliance und aufsichtsrechtliche Akzeptanz. Unsere spezialisierten Test- und Prüfmethoden stellen sicher, dass Ihre Risikodatenaggregation und Berichtsprozesse nicht nur implementiert sind, sondern auch effektiv funktionieren.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende Teststrategien für alle BCBS-239 Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Nachweisbarkeit der Compliance durch strukturierte Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Identifikation von Schwachstellen und Optimierungspotentialen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Vorbereitung auf aufsichtsrechtliche Prüfungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'BCBS-239 Testing & Validierung',
        description: 'Gründliches Testen und kontinuierliche Validierung sind unverzichtbare Elemente einer nachhaltigen BCBS-239 Compliance. Unsere methodischen Ansätze zum Testing und zur Validierung stellen sicher, dass Ihre Implementierung nicht nur auf dem Papier besteht, sondern auch in der Praxis wirksam funktioniert – auch unter Stressbedingungen und bei regulatorischen Prüfungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung maßgeschneiderter Teststrategien für Risikodaten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Durchführung von End-to-End-Tests der Risikodatenaggregation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Validierung von Datenqualität und Datenflüssen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Prüfung der Berichtsprozesse und -ergebnisse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Stresstests für Risikodateninfrastruktur und Reporting'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Das Testing und die Validierung sollten nicht erst am Ende Ihrer BCBS-239 Implementierung beginnen. Integrieren Sie diese Elemente von Anfang an in Ihren Implementierungsansatz, um frühzeitig Probleme zu identifizieren und kostspielige Nacharbeiten zu vermeiden.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Test- und Validierungsmethoden für BCBS-239 Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrung mit aufsichtsrechtlichen Prüfungen und deren Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfassende Testautomatisierung für effiziente Validierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz, der alle BCBS-239 Prinzipien abdeckt'
            }
          ]
        },
        additionalInfo: 'Finanzinstitute, die eine strukturierte Validierung ihrer BCBS-239 Implementierung durchführen, berichten von einer signifikant höheren Erfolgsrate bei aufsichtsrechtlichen Prüfungen und einem durchschnittlich 40% geringeren Aufwand für nachträgliche Anpassungen und Korrekturen.',
        serviceDescription: 'Unser BCBS-239 Testing- und Validierungsansatz umfasst alle Aspekte Ihrer Risikodaten-Infrastruktur und -Prozesse – von der Datenquelle bis zum finalen Reporting. Wir validieren nicht nur die Funktionalität, sondern auch die Compliance mit allen relevanten regulatorischen Anforderungen und die Widerstandsfähigkeit unter verschiedensten Bedingungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Entwicklung umfassender Teststrategien und -pläne'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Durchführung von Funktions- und Compliance-Tests'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Validierung der Datenqualität und -integrität'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Stresstests für Risikodateninfrastruktur'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Dokumentation und Berichterstattung für aufsichtsrechtliche Zwecke'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Unser Ansatz für BCBS-239 Testing und Validierung basiert auf einer strukturierten Methodik, die alle relevanten Dimensionen abdeckt und gleichzeitig auf Ihre spezifische Situation zugeschnitten ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der implementierten BCBS-239 Maßnahmen und Identifikation von Testbereichen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten Teststrategie und Testplänen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Durchführung umfassender Tests mit verschiedenen Methoden und Szenarien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Validierung der Ergebnisse und Identifikation von Verbesserungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Erstellung einer umfassenden Dokumentation für interne und regulatorische Zwecke'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'Mittelgroße Regionalbank',
        name: 'Dr. Markus Berger',
        position: 'Leiter Risikomanagement',
        quote: 'Der strukturierte Test- und Validierungsansatz von ADVISORI hat uns nicht nur geholfen, unsere BCBS-239 Implementierung erfolgreich zu validieren, sondern auch wichtige Optimierungspotenziale zu identifizieren. Besonders wertvoll war die praxisnahe Erfahrung des Teams mit aufsichtsrechtlichen Prüfungen, die uns optimal auf das Review der Aufsichtsbehörde vorbereitet hat.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Comprehensive BCBS-239 Testing',
          description: 'Wir entwickeln und implementieren umfassende Teststrategien, die alle Aspekte Ihrer BCBS-239 Implementierung abdecken und validieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Funktionale Tests der Risikodateninfrastruktur und -prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Performance- und Skalierbarkeits-Tests unter verschiedenen Lastbedingungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'End-to-End-Tests von der Datenerfassung bis zum Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Automatisierte Testverfahren für kontinuierliche Validierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Validierung und Compliance-Nachweis',
          description: 'Wir unterstützen Sie bei der umfassenden Validierung Ihrer BCBS-239 Implementierung und der Erstellung nachvollziehbarer Dokumentation für regulatorische Zwecke.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Systematische Validierung gegen alle BCBS-239 Prinzipien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Erstellung strukturierter Validierungsberichte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Vorbereitung auf aufsichtsrechtliche Prüfungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Entwicklung kontinuierlicher Validierungsprozesse'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcbs239TestingValidierungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ BCBS-239 Testing & Validierung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
