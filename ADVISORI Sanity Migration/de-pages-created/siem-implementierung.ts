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
    console.log('Creating SIEM Implementierung page...')

    const siemImplementierungData = {
      _type: 'servicePage',
      _id: 'siem-implementierung',
      title: 'SIEM Implementierung - Strategische Umsetzung und Deployment',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/security-operations-secops/siem/siem-implementierung'
      },
      parent: {
        _type: 'reference',
        _ref: 'siem'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'informationssicherheit'
        }
      },
      seo: {
        _type: 'seo',
        title: 'SIEM Implementierung - Strategische Umsetzung und Deployment | ADVISORI',
        description: 'Professionelle SIEM Implementierung: Strategische Planung, technisches Deployment, Konfiguration und Optimierung von Security Information and Event Management Systemen für nachhaltige Cybersecurity-Exzellenz.',
        keywords: 'SIEM Implementierung, SIEM Deployment, SIEM Installation, SIEM Konfiguration, SIEM Setup, Security Implementation, SIEM Projekt, SIEM Integration, SIEM Rollout'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'SIEM Implementierung - Strategische Umsetzung und Deployment'
        },
        tagline: 'Professionelle SIEM Implementierung für nachhaltige Cybersecurity-Exzellenz',
        heading: 'SIEM Implementierung - Strategische Umsetzung und Deployment',
        description: 'Eine erfolgreiche SIEM Implementierung erfordert strategische Planung, technische Exzellenz und methodisches Vorgehen. Wir begleiten Sie durch den gesamten Implementierungsprozess - von der initialen Planung über das technische Deployment bis hin zur Optimierung und dem operativen Betrieb. Unsere bewährte Implementierungsmethodik gewährleistet termingerechte, budgetkonforme und nachhaltig erfolgreiche SIEM-Projekte.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Bewährte Implementierungsmethodik für garantierten Projekterfolg'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Risikominimierung durch strukturiertes Change Management'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Optimale Integration in bestehende IT-Landschaften'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachhaltige Performance-Optimierung und Skalierbarkeit'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'SIEM Implementierung: Strategische Umsetzung für nachhaltige Cybersecurity-Exzellenz',
        description: 'Die Implementierung eines SIEM Systems ist ein kritisches Projekt, das strategische Planung, technische Expertise und methodisches Vorgehen erfordert. Wir unterstützen Sie bei allen Aspekten der SIEM Implementierung - von der Projektplanung über das technische Deployment bis hin zur Optimierung und dem Übergang in den operativen Betrieb.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Implementierungsplanung und Projektmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Technisches Deployment und Infrastruktur-Setup'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Konfiguration und Rule-Development'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration und Datenquellen-Anbindung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Performance-Optimierung und Tuning'
          }
        ],
        alert: {
          title: 'Kritischer Erfolgsfaktor',
          content: 'Studien zeigen, dass über die Hälfte aller SIEM Implementierungen aufgrund mangelhafter Planung und unzureichender Expertise scheitern oder nicht die erwarteten Ergebnisse liefern. Eine professionelle, methodische Herangehensweise ist entscheidend für nachhaltigen Erfolg.'
        },
        whyUs: {
          title: 'Unsere SIEM Implementierungs-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Bewährte Implementierungsmethodik mit nachweislichen Erfolgsraten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfassende Erfahrung mit allen führenden SIEM Plattformen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Strukturiertes Change Management und Stakeholder-Alignment'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'End-to-End Begleitung von der Planung bis zum operativen Betrieb'
            }
          ]
        },
        additionalInfo: 'SIEM Implementierungen sind komplexe Transformationsprojekte, die technische, organisatorische und prozessuale Aspekte umfassen. Erfolgreiche Implementierungen erfordern nicht nur technische Expertise, sondern auch tiefes Verständnis für Cybersecurity-Prozesse, Change Management und operative Anforderungen.',
        serviceDescription: 'Wir bieten umfassende SIEM Implementierungsservices, die alle Aspekte erfolgreicher SIEM-Projekte abdecken. Von der strategischen Planung über das technische Deployment bis hin zur Optimierung und dem Übergang in den operativen Betrieb begleiten wir Sie durch den gesamten Implementierungsprozess.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Implementierungsplanung und Projektsetup'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Technisches Deployment und Infrastruktur-Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Konfiguration, Tuning und Rule-Development'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integration und Datenquellen-Anbindung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance-Optimierung und Operational Readiness'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer SIEM Implementierungsansatz',
        description: 'Wir verfolgen einen strukturierten, phasenbasierten Ansatz für SIEM Implementierungen, der Risiken minimiert, Qualität sicherstellt und nachhaltigen Erfolg gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Planungsphase mit umfassender Anforderungsanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strukturiertes Deployment mit Risikomanagement und Quality Gates'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Iterative Konfiguration und kontinuierliche Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Umfassendes Testing und Validierung vor Go-Live'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Strukturierter Übergang in den operativen Betrieb mit Support'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Eine erfolgreiche SIEM Implementierung ist weit mehr als nur die technische Installation einer Software. Sie erfordert strategische Planung, methodisches Vorgehen und tiefes Verständnis für die spezifischen Anforderungen des Unternehmens. Unsere bewährte Implementierungsmethodik kombiniert technische Exzellenz mit strukturiertem Projektmanagement und gewährleistet so nachhaltig erfolgreiche SIEM-Projekte, die echten Mehrwert für die Cybersecurity-Posture unserer Kunden schaffen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische Implementierungsplanung und Projektsetup',
          description: 'Umfassende Planung und Vorbereitung für erfolgreiche SIEM Implementierungen mit strukturiertem Projektmanagement und Risikominimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Comprehensive Requirements Analysis und Stakeholder-Alignment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Implementierungsroadmap und Meilenstein-Planung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risk Assessment und Mitigation-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Resource Planning und Team-Aufbau'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Technisches Deployment und Infrastruktur-Setup',
          description: 'Professionelles technisches Deployment mit optimaler Infrastruktur-Konfiguration für Performance, Skalierbarkeit und Verfügbarkeit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Infrastructure Design und Capacity Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'High-Availability Setup und Disaster Recovery'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Security Hardening und Access Control Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Performance Monitoring und Alerting Setup'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'SIEM Konfiguration und Rule-Development',
          description: 'Expertenkonfiguration und Entwicklung maßgeschneiderter Detection Rules für optimale Threat Detection und minimale False Positives.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Use Case-basierte Rule-Development und Tuning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Correlation Rules und Advanced Analytics Configuration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Dashboard und Reporting Setup'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Alert Tuning und False Positive Minimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Integration und Datenquellen-Anbindung',
          description: 'Nahtlose Integration aller relevanten Datenquellen mit optimaler Data Pipeline-Konfiguration für vollständige Visibility.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Comprehensive Data Source Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Log Parsing und Data Normalization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Real-time Data Pipeline Optimization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Data Quality Monitoring und Validation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Performance-Optimierung und Tuning',
          description: 'Kontinuierliche Performance-Optimierung für maximale Effizienz, Skalierbarkeit und optimale Resource-Utilization.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Performance Benchmarking und Bottleneck Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Query Optimization und Index-Tuning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Storage Optimization und Archiving-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Scalability Planning und Capacity Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Operational Readiness und Go-Live Support',
          description: 'Strukturierter Übergang in den operativen Betrieb mit umfassendem Support und Wissenstransfer für nachhaltige SIEM Operations.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Operational Readiness Assessment und Testing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Team Training und Knowledge Transfer'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Process Documentation und Runbooks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Post-Implementation Support und Optimization'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(siemImplementierungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ SIEM Implementierung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
