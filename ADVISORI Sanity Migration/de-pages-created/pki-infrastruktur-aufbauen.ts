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
    console.log('Creating PKI Infrastruktur aufbauen page...')

    const pkiInfrastrukturAufbauenData = {
      _type: 'servicePage',
      _id: 'pki-infrastruktur-aufbauen',
      title: 'PKI Infrastruktur aufbauen',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/data-protection-encryption/pki/pki-infrastruktur-aufbauen'
      },
      parent: {
        _type: 'reference',
        _ref: 'data-protection-encryption'
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
        title: 'PKI Infrastruktur aufbauen - Professioneller PKI-Aufbau & Implementation | ADVISORI',
        description: 'Expertenhilfe beim Aufbau robuster PKI-Infrastrukturen. Von der Planung bis zur Implementierung - sichere Certificate Authority, Trust-Hierarchien und Enterprise PKI-Lösungen.',
        keywords: 'PKI Infrastruktur aufbauen, PKI Implementation, Certificate Authority Setup, PKI Architektur, PKI Planung, PKI Beratung, PKI Aufbau, Enterprise PKI, PKI Projekt'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'PKI Infrastruktur aufbauen - Professioneller Aufbau sicherer PKI-Systeme'
        },
        tagline: 'Vom Konzept zur sicheren PKI-Realität',
        heading: 'PKI Infrastruktur aufbauen',
        description: 'Der Aufbau einer PKI-Infrastruktur ist ein strategisches Unterfangen, das fundierte Expertise und methodische Herangehensweise erfordert. Wir begleiten Sie vom ersten Konzept bis zur produktiven PKI-Umgebung und schaffen dabei die Grundlage für vertrauensvolle digitale Kommunikation und sichere Geschäftsprozesse in Ihrem Unternehmen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische PKI-Planung mit maßgeschneiderter Architektur-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Sichere Certificate Authority-Implementierung mit Best-Practice-Verfahren'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Phasenweise Umsetzung mit kontinuierlicher Qualitätssicherung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Zukunftssichere PKI-Lösungen mit Skalierbarkeit und Compliance-Fokus'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'PKI Infrastruktur aufbauen - Strategischer Ansatz für nachhaltige Sicherheit',
        description: 'Der Aufbau einer PKI-Infrastruktur erfordert mehr als technische Implementierung - es ist ein strategischer Prozess, der Geschäftsanforderungen, Sicherheitsrichtlinien und operative Exzellenz miteinander verbindet. Eine professionell aufgebaute PKI bildet das Fundament für digitale Transformation und ermöglicht sichere, skalierbare Geschäftsprozesse.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Ganzheitliche Anforderungsanalyse definiert PKI-Architektur basierend auf Geschäftszielen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Sichere Certificate Authority-Hierarchien mit robusten Trust-Modellen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Phasenweise Implementierung minimiert Risiken und gewährleistet Kontinuität'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration in bestehende IT-Landschaften ohne Betriebsunterbrechungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Compliance-konforme Umsetzung nach aktuellen Standards und Regulierungen'
          }
        ],
        alert: {
          title: 'PKI-Aufbau als Investition in die Zukunft',
          content: 'Eine strategisch geplante und professionell aufgebaute PKI-Infrastruktur ist eine langfristige Investition in die digitale Sicherheit und Wettbewerbsfähigkeit Ihres Unternehmens.'
        },
        whyUs: {
          title: 'Warum PKI-Infrastruktur mit ADVISORI aufbauen',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Bewährte Methodik für erfolgreiche PKI-Projekte aller Größenordnungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Tiefgreifende Expertise in PKI-Technologien und Sicherheitsstandards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Herstellerunabhängige Beratung für optimale Technologie-Auswahl'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von Strategie bis operative Exzellenz'
            }
          ]
        },
        additionalInfo: 'Moderne PKI-Infrastrukturen müssen flexibel, skalierbar und zukunftssicher sein, um den sich wandelnden Anforderungen digitaler Geschäftsmodelle gerecht zu werden.',
        serviceDescription: 'Unser PKI-Aufbau-Service begleitet Sie durch den gesamten Implementierungsprozess - von der strategischen Planung über die technische Umsetzung bis zur operativen Optimierung. Wir schaffen PKI-Infrastrukturen, die perfekt zu Ihren Anforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische PKI-Planung und Anforderungsanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'PKI-Architektur-Design und Trust-Modell-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Certificate Authority-Setup und Sicherheitskonfiguration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Phasenweise Implementierung und Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Testing, Validierung und Go-Live-Unterstützung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser methodischer Ansatz zum PKI-Infrastruktur-Aufbau',
        description: 'Wir verfolgen einen strukturierten und risikominimierten Ansatz beim Aufbau von PKI-Infrastrukturen, der bewährte Methoden mit innovativen Technologien verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse der Geschäftsanforderungen und Sicherheitsziele'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategische PKI-Architektur-Planung mit zukunftssicherer Ausrichtung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Sichere Implementierung mit kontinuierlicher Qualitätskontrolle'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Nahtlose Integration in bestehende IT-Infrastrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Umfassende Dokumentation und Wissenstransfer für nachhaltigen Betrieb'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Der Aufbau einer PKI-Infrastruktur ist weit mehr als ein technisches Projekt - es ist die Schaffung eines strategischen Sicherheitsfundaments für die digitale Zukunft eines Unternehmens. Wir verstehen PKI-Projekte als ganzheitliche Transformationsprozesse, die technische Exzellenz mit Geschäftsstrategie verbinden und nachhaltige Wettbewerbsvorteile schaffen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'PKI-Strategie & Architektur-Planung',
          description: 'Entwicklung einer maßgeschneiderten PKI-Strategie und -Architektur basierend auf Ihren spezifischen Geschäftsanforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Geschäfts- und Sicherheitsanforderungsanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'PKI-Architektur-Design mit Trust-Modell-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Technologie-Evaluierung und Herstellerauswahl'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Roadmap-Entwicklung und Projektplanung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Certificate Authority Setup & Konfiguration',
          description: 'Sichere Implementierung und Konfiguration von Certificate Authorities mit höchsten Sicherheitsstandards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Root CA und Intermediate CA Installation und Konfiguration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Hardware Security Module Integration und Setup'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Certificate Policy und Practice Statement Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Sicherheitshärtung und Compliance-Konfiguration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'PKI-Sicherheits-Implementierung',
          description: 'Umsetzung umfassender Sicherheitsmaßnahmen für robuste und vertrauenswürdige PKI-Systeme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Multi-Layer-Security-Architektur mit Defense-in-Depth'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Kryptographische Algorithmus-Implementierung und -Validierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Secure Key Management und Escrow-Verfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Monitoring und Logging-Systeme für Security Operations'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Integration & Deployment Services',
          description: 'Nahtlose Integration der PKI-Infrastruktur in bestehende IT-Landschaften und Geschäftsprozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Legacy-System-Integration und Migration-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Directory Services und LDAP-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Application-Integration und API-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Automated Deployment und Configuration Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'PKI-Operations & Management-Setup',
          description: 'Aufbau operativer Strukturen und Prozesse für nachhaltigen PKI-Betrieb und -Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Certificate Lifecycle Management-Prozesse und -Automatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Monitoring und Alerting-Systeme für proaktive Verwaltung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Backup und Disaster Recovery-Verfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Performance Optimization und Capacity Planning'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Training & Wissenstransfer',
          description: 'Umfassende Schulungsprogramme und Wissenstransfer für nachhaltigen PKI-Betrieb durch interne Teams.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'PKI-Administrator-Training und Zertifizierungsvorbereitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Operational Runbooks und Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Incident Response und Troubleshooting-Training'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Betreuung und Support-Services'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(pkiInfrastrukturAufbauenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ PKI Infrastruktur aufbauen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
