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
    console.log('Creating DORA Informationsregister page...')

    const doraInformationsregisterData = {
      _type: 'servicePage',
      _id: 'dora-informationsregister',
      title: 'DORA Informationsregister',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dora-digital-operational-resilience-act/dora-informationsregister'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management'
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
        title: 'DORA Informationsregister | ADVISORI',
        description: 'Expertenhilfe bei der Erstellung und Verwaltung von DORA-konformen Informationsregistern. Beratung zu Dokumentationsstandards, Datengovernance und kontinuierlicher Registerführung für digitale operationelle Resilienz.',
        keywords: 'DORA Informationsregister, IKT-Dokumentation, Datengovernance, Compliance-Register, digitale Resilienz, Finanzaufsicht, Dokumentationsstandards, Registerführung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DORA Informationsregister Management'
        },
        tagline: 'Strukturierte Informationsregister für DORA-Compliance',
        heading: 'DORA Informationsregister',
        description: 'Ein umfassendes und aktuelles Informationsregister ist das Fundament erfolgreicher DORA-Compliance. Wir unterstützen Sie beim Aufbau strukturierter Dokumentationssysteme, effektiver Datengovernance und kontinuierlicher Registerführung für vollständige Transparenz Ihrer IKT-Landschaft.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige IKT-Asset-Inventarisierung und strukturierte Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte Registerführung und kontinuierliche Aktualisierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte Datengovernance und Qualitätssicherung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Aufsichtsrechtskonforme Berichterstattung und Transparenz'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DORA Informationsregister-Anforderungen verstehen und implementieren',
        description: 'DORA verlangt die Führung umfassender Informationsregister über alle kritischen IKT-Assets, -Services und -Drittanbieter. Effektive Registerführung geht weit über einfache Inventarisierung hinaus und erfordert strukturierte Datengovernance, kontinuierliche Aktualisierung und integrierte Risikobewertung für vollständige Transparenz der digitalen operationellen Resilienz.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung strukturierter IKT-Asset-Register mit vollständiger Inventarisierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung automatisierter Datenerfassung und kontinuierlicher Aktualisierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Etablierung integrierter Datengovernance und Qualitätssicherungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau aufsichtsrechtskonformer Berichtswege und Transparenzmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration von Risikobewertung und Impact-Analyse in die Registerführung'
          }
        ],
        alert: {
          title: 'Register-Fokus',
          content: 'DORA-Informationsregister sind mehr als statische Inventarlisten. Sie bilden die dynamische Grundlage für Risikomanagement, Incident Response und regulatorische Berichterstattung. Vollständigkeit, Aktualität und Qualität der Registerdaten sind entscheidend für effektive digitale operationelle Resilienz.'
        },
        whyUs: {
          title: 'Unsere Register-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung in Datengovernance und Compliance-Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für automatisierte Registerführung und Datenqualität'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Spezialisierte Tools und Frameworks für IKT-Asset-Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Integrierter Ansatz zur nachhaltigen Informationsregister-Governance'
            }
          ]
        },
        additionalInfo: 'Erfolgreiche DORA-Informationsregister erfordern eine Balance zwischen Vollständigkeit und Praktikabilität. Unsere Beratung fokussiert auf skalierbare Lösungen, die sowohl regulatorische Anforderungen erfüllen als auch operative Effizienz unterstützen.',
        serviceDescription: 'Wir bieten umfassende Unterstützung beim Aufbau und der Optimierung von DORA-konformen Informationsregistern. Unser Ansatz kombiniert technische Expertise mit regulatorischem Know-how, um nachhaltige und effektive Dokumentationssysteme zu entwickeln.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'IKT-Asset-Inventarisierung und strukturierte Registerführung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Automatisierte Datenerfassung und kontinuierliche Aktualisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Datengovernance und Qualitätssicherung für Registerinhalte'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Aufsichtsrechtskonforme Berichterstattung und Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Integrierte Risikobewertung und Impact-Analyse'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Informationsregister-Implementierungs-Ansatz',
        description: 'Wir entwickeln mit Ihnen maßgeschneiderte DORA-Informationsregister, die nahtlos in Ihre bestehende IT-Landschaft integriert werden und nachhaltige Transparenz sowie Compliance gewährleisten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse bestehender IKT-Landschaft und Identifikation aller relevanten Assets'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design strukturierter Register-Architekturen und Datenmodelle'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung automatisierter Erfassungs- und Aktualisierungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung umfassender Datengovernance und Qualitätskontrolle'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Integration in bestehende Risikomanagement- und Compliance-Systeme'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Ein gut strukturiertes Informationsregister ist das Nervensystem digitaler operationeller Resilienz. Unsere Erfahrung zeigt, dass Organisationen mit robusten, automatisierten Registersystemen nicht nur DORA-Anforderungen effizienter erfüllen, sondern auch ihre IKT-Governance und Risikomanagement-Fähigkeiten nachhaltig stärken.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'IKT-Asset-Inventarisierung und Register-Architektur',
          description: 'Entwicklung umfassender IKT-Asset-Register mit strukturierter Inventarisierung aller kritischen Systeme, Anwendungen und Infrastrukturkomponenten für vollständige DORA-Transparenz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Vollständige IKT-Asset-Discovery und Klassifizierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Strukturierte Register-Architekturen und Datenmodell-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Kritikalitätsbewertung und Business-Impact-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Abhängigkeits-Mapping und Interconnection-Dokumentation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Automatisierte Datenerfassung und kontinuierliche Aktualisierung',
          description: 'Implementierung intelligenter Systeme für automatisierte Registerführung, kontinuierliche Datenaktualisierung und Echtzeit-Monitoring von IKT-Asset-Änderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Automatisierte Asset-Discovery und Change-Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integration mit bestehenden CMDB- und Monitoring-Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Workflow-basierte Genehmigungsprozesse für Register-Updates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Echtzeit-Alerting bei kritischen Asset-Änderungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Drittanbieter-Register und Vendor-Management-Integration',
          description: 'Aufbau spezialisierter Register für IKT-Drittanbieter mit umfassender Dokumentation von Services, Risiken und Abhängigkeiten für effektives Vendor-Risk-Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Vollständige Drittanbieter-Inventarisierung und Service-Katalogisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Risikobewertung und Due-Diligence-Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Vertragsdokumentation und SLA-Monitoring-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Konzentrationsrisiko-Analyse und Alternative-Mapping'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Datengovernance und Qualitätssicherung',
          description: 'Etablierung robuster Datengovernance-Frameworks für Informationsregister mit umfassender Qualitätskontrolle, Validierung und Konsistenzprüfung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Datenqualitäts-Frameworks und Validierungsregeln'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Master-Data-Management und Referenzdaten-Governance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Automatisierte Konsistenzprüfung und Anomalie-Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Audit-Trails und Change-History-Dokumentation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Aufsichtsrechtskonforme Berichterstattung und Dokumentation',
          description: 'Entwicklung spezialisierter Reporting-Systeme für DORA-konforme Berichterstattung mit automatisierter Generierung aufsichtsrechtlicher Dokumentation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Automatisierte DORA-Reporting-Templates und -Generierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Aufsichtsbehörden-spezifische Dokumentationsformate'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Compliance-Dashboard und Management-Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Historische Datenarchivierung und Nachweisführung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Integrierte Risikobewertung und Impact-Analyse',
          description: 'Integration von Risikomanagement-Funktionen in Informationsregister mit kontinuierlicher Bewertung von IKT-Risiken und Business-Impact-Analysen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Risiko-Rating-Integration und kontinuierliche Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Business-Impact-Analyse und Kritikalitäts-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Szenario-basierte Risikosimulation und Stress-Testing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Integration mit Incident-Management und Business-Continuity-Planung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(doraInformationsregisterData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DORA Informationsregister page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
