import 'dotenv/config'
import { createClient } from '@sanity/client'

// Create client with direct credentials
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
    console.log('Creating FIDA Incident Response page...')

    const fidaIncidentResponseData = {
      _type: 'servicePage',
      _id: 'fida-incident-response',
      title: 'FIDA Incident Response',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/financial-data-access-fida/fida-incident-response'
      },
      parent: {
        _type: 'reference',
        _ref: 'financial-data-access-fida'
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
        title: 'FIDA Incident Response Management | ADVISORI',
        description: 'Spezialisierte FIDA-Incident-Response-Strategien für Finanzdienstleister. Professionelle Unterstützung bei Datenschutzverletzungen, regulatorischen Meldungen und Business Continuity im FIDA-Kontext.',
        keywords: 'FIDA Incident Response, Datenschutzverletzung, Regulatory Reporting, Business Continuity, Finanzregulierung, Compliance, EU-Verordnung, Krisenmanagement'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FIDA Incident Response Management'
        },
        tagline: 'Professionelles FIDA-Incident-Response-Management',
        heading: 'FIDA Incident Response',
        description: 'Spezialisierte Incident-Response-Strategien für FIDA-Compliance-Vorfälle. Wir unterstützen Sie bei der schnellen und effektiven Bewältigung von Datenschutzverletzungen, API-Ausfällen und regulatorischen Compliance-Vorfällen im FIDA-Kontext.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: '24/7 FIDA-Incident-Response-Team mit regulatorischer Expertise'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte Erkennung und Eskalation von FIDA-Compliance-Vorfällen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte regulatorische Meldeverfahren und Stakeholder-Kommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Schnelle Wiederherstellung und kontinuierliche Verbesserung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'FIDA-Incident-Response strategisch meistern',
        description: 'FIDA-Compliance-Vorfälle erfordern spezialisierte Incident-Response-Strategien, die technische, regulatorische und geschäftliche Aspekte integrieren. Unser Ansatz gewährleistet schnelle Reaktionszeiten, minimale Geschäftsunterbrechungen und vollständige regulatorische Compliance.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Proaktive Erkennung und Klassifizierung von FIDA-spezifischen Compliance-Vorfällen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Automatisierte Eskalations- und Benachrichtigungsprozesse für kritische Incidents'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integrierte regulatorische Meldeverfahren und Dokumentationsstandards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Koordinierte Stakeholder-Kommunikation und Reputationsmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Systematische Ursachenanalyse und kontinuierliche Verbesserung'
          }
        ],
        alert: {
          title: 'Kritischer Erfolgsfaktor',
          content: 'Effektives FIDA-Incident-Response-Management kann den Unterschied zwischen minimalen Auswirkungen und schwerwiegenden regulatorischen Konsequenzen ausmachen. Vorbereitung und schnelle Reaktion sind entscheidend.'
        },
        whyUs: {
          title: 'Unsere FIDA-Incident-Response-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Erfahrung in FIDA-spezifischen Compliance-Vorfällen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Incident-Response-Frameworks für Finanzdienstleister'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: '24/7-Verfügbarkeit und schnelle Reaktionszeiten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Integrierte regulatorische und technische Expertise'
            }
          ]
        },
        additionalInfo: 'FIDA-Incident-Response erfordert ein tiefes Verständnis der regulatorischen Anforderungen, technischen Komplexitäten und Geschäftsauswirkungen. Vorfälle können von API-Ausfällen über Datenschutzverletzungen bis hin zu Compliance-Verstößen reichen, die alle spezifische Response-Strategien erfordern.',
        serviceDescription: 'Wir bieten umfassende FIDA-Incident-Response-Services, die Prävention, Erkennung, Response und Recovery integrieren. Unser Ansatz minimiert Geschäftsunterbrechungen, gewährleistet regulatorische Compliance und stärkt die langfristige Resilienz Ihrer FIDA-Implementierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Proaktive Incident-Detection und -Prevention-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: '24/7-Incident-Response-Team mit FIDA-Expertise'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Automatisierte regulatorische Meldeverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Koordinierte Stakeholder-Kommunikation und Krisenmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Post-Incident-Analyse und kontinuierliche Verbesserung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer FIDA-Incident-Response-Ansatz',
        description: 'Wir entwickeln mit Ihnen eine umfassende FIDA-Incident-Response-Strategie, die Prävention, schnelle Response und langfristige Resilienz integriert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Entwicklung FIDA-spezifischer Incident-Response-Pläne und -Prozeduren'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Implementation proaktiver Monitoring- und Detection-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Aufbau spezialisierter Incident-Response-Teams und -Kompetenzen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration regulatorischer Meldeverfahren und Compliance-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Verbesserung durch Lessons Learned und Best Practices'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Effektives FIDA-Incident-Response-Management ist entscheidend für den Schutz von Kundenvertrauen und regulatorischer Compliance. Unsere spezialisierten Response-Strategien minimieren Geschäftsunterbrechungen und gewährleisten, dass Unternehmen auch in kritischen Situationen ihre FIDA-Verpflichtungen erfüllen können.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'FIDA-Incident-Detection und -Prevention',
          description: 'Proaktive Systeme zur frühzeitigen Erkennung und Verhinderung von FIDA-Compliance-Vorfällen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Real-Time-Monitoring von FIDA-API-Performance und -Verfügbarkeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Automatisierte Anomalie-Detection für Datenzugriffs-Patterns'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Predictive Analytics für potenzielle Compliance-Risiken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integrierte Threat Intelligence für FIDA-spezifische Bedrohungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Rapid Response und Incident Management',
          description: 'Spezialisierte Teams und Prozesse für die schnelle und effektive Bewältigung von FIDA-Incidents.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: '24/7-Incident-Response-Team mit FIDA-Expertise'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automatisierte Eskalations- und Benachrichtigungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Koordinierte Response-Aktivitäten mit definierten Rollen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Real-Time-Incident-Tracking und -Dokumentation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Regulatorische Meldeverfahren und Compliance',
          description: 'Automatisierte und koordinierte Meldeverfahren für FIDA-Compliance-Vorfälle.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Automatisierte regulatorische Meldungen an zuständige Behörden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Standardisierte Dokumentation für Compliance-Nachweise'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Koordination mit internen und externen Compliance-Teams'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Kontinuierliche Überwachung regulatorischer Anforderungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Stakeholder-Kommunikation und Krisenmanagement',
          description: 'Koordinierte Kommunikationsstrategien für effektives Stakeholder-Management während FIDA-Incidents.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Entwicklung zielgruppenspezifischer Kommunikationsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Koordinierte interne und externe Kommunikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Reputationsmanagement und Medienbetreuung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Transparente Kundeninformation und -betreuung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Business Continuity und Recovery',
          description: 'Strategien zur Aufrechterhaltung des Geschäftsbetriebs und schnellen Wiederherstellung nach FIDA-Incidents.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Entwicklung FIDA-spezifischer Business Continuity Pläne'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Implementierung von Failover- und Backup-Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Koordinierte Recovery-Aktivitäten und Service-Wiederherstellung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Kontinuierliche Überwachung der Recovery-Performance'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Post-Incident-Analyse und kontinuierliche Verbesserung',
          description: 'Systematische Analyse von FIDA-Incidents und Entwicklung von Verbesserungsmaßnahmen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Umfassende Root-Cause-Analyse und Lessons-Learned-Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Entwicklung von Präventionsmaßnahmen und Prozessverbesserungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Aktualisierung von Incident-Response-Plänen und -Prozeduren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Schulung und Kompetenzentwicklung der Teams'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(fidaIncidentResponseData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FIDA Incident Response page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
