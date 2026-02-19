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
    console.log('Creating DORA Netzwerksegmentierung page...')

    const doraNetzwerksegmentierungData = {
      _type: 'servicePage',
      _id: 'dora-netzwerksegmentierung',
      title: 'DORA Netzwerksegmentierung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dora-digital-operational-resilience-act/dora-netzwerksegmentierung'
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
        title: 'DORA Netzwerksegmentierung | ADVISORI',
        description: 'Professionelle DORA-konforme Netzwerksegmentierung für Finanzinstitute. Expertenberatung für Zero-Trust-Architekturen, Mikrosegmentierung und kritische Systemabschottung zur Erfüllung der Digital Operational Resilience Act Anforderungen.',
        keywords: 'DORA Netzwerksegmentierung, Zero Trust, Mikrosegmentierung, Netzwerksicherheit, Finanzinstitute, Digital Operational Resilience Act, IKT-Sicherheit, Netzwerkarchitektur'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DORA Netzwerksegmentierung und Zero-Trust-Architektur'
        },
        tagline: 'Sichere Netzwerkarchitekturen für DORA-Compliance',
        heading: 'DORA Netzwerksegmentierung',
        description: 'Implementierung robuster Netzwerksegmentierungsstrategien zur Erfüllung der DORA-Anforderungen. Wir entwickeln maßgeschneiderte Zero-Trust-Architekturen und Mikrosegmentierungskonzepte für maximale operative Resilienz Ihrer kritischen Finanzsysteme.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'DORA-konforme Zero-Trust-Netzwerkarchitekturen und Mikrosegmentierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Kritische Systemabschottung und granulare Zugriffskontrolle'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Automatisierte Bedrohungserkennung und Incident-Containment'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Netzwerküberwachung und Compliance-Monitoring'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DORA-konforme Netzwerksegmentierung implementieren',
        description: 'Die Digital Operational Resilience Act (DORA) stellt spezifische Anforderungen an die Netzwerksegmentierung von Finanzinstituten. Eine strategisch geplante und technisch ausgereifte Segmentierungsarchitektur ist entscheidend für die Begrenzung von Cyberrisiken und die Gewährleistung der operationellen Kontinuität kritischer Finanzsysteme.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung DORA-konformer Zero-Trust-Netzwerkarchitekturen mit granularer Segmentierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung von Mikrosegmentierungsstrategien für kritische Finanzsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Design robuster Sicherheitszonen und Netzwerk-Perimeter für verschiedene Risikokategorien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration fortschrittlicher Netzwerküberwachung und automatisierter Bedrohungserkennung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Etablierung effektiver Incident-Containment-Mechanismen durch strategische Segmentierung'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine effektive DORA-Netzwerksegmentierung geht weit über traditionelle Firewall-Regeln hinaus. Sie erfordert eine ganzheitliche Zero-Trust-Strategie mit kontinuierlicher Verifikation, granularer Zugriffskontrolle und intelligenter Automatisierung für dynamische Bedrohungslandschaften.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in DORA-konformen Netzwerkarchitekturen und Zero-Trust-Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für Mikrosegmentierung in komplexen Finanzinfrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfassende Erfahrung mit regulatorischen Anforderungen und Compliance-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Pragmatische Lösungsansätze für schrittweise Migration und minimale Betriebsunterbrechungen'
            }
          ]
        },
        additionalInfo: 'DORA-konforme Netzwerksegmentierung erfordert eine strategische Balance zwischen Sicherheit, Performance und operationeller Effizienz. Moderne Ansätze nutzen Software-Defined Networking, KI-gestützte Anomalieerkennung und automatisierte Orchestrierung für adaptive Sicherheitsarchitekturen.',
        serviceDescription: 'Wir bieten umfassende Beratung und Implementierungsunterstützung für DORA-konforme Netzwerksegmentierungsstrategien. Unser ganzheitlicher Ansatz kombiniert technische Exzellenz mit regulatorischem Know-how für nachhaltige und zukunftssichere Netzwerkarchitekturen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Zero-Trust-Architektur-Design und Mikrosegmentierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Kritische Systemabschottung und granulare Zugriffskontrollsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Automatisierte Netzwerküberwachung und Incident-Response-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'DORA-Compliance-Validierung und kontinuierliche Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Migration Planning und Change-Management für bestehende Infrastrukturen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Ansatz',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte DORA-konforme Netzwerksegmentierungsstrategie, die technische Exzellenz mit regulatorischen Anforderungen und operationellen Bedürfnissen optimal verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer bestehenden Netzwerkarchitektur und Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design einer DORA-konformen Zero-Trust-Segmentierungsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Schrittweise Implementierung mit minimalen Betriebsunterbrechungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration fortschrittlicher Monitoring- und Automatisierungslösungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Compliance-Validierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'DORA-konforme Netzwerksegmentierung ist ein strategischer Imperativ für die operative Resilienz von Finanzinstituten. Unsere Zero-Trust-Ansätze schaffen nicht nur regulatorische Compliance, sondern etablieren eine fundamentale Sicherheitsarchitektur, die Finanzinstitute gegen moderne Cyberbedrohungen wappnet und gleichzeitig operative Effizienz gewährleistet.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Zero-Trust-Architektur-Design und Strategieentwicklung',
          description: 'Entwicklung umfassender Zero-Trust-Netzwerkarchitekturen, die DORA-Anforderungen erfüllen und gleichzeitig operative Effizienz und Skalierbarkeit gewährleisten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Strategische Zero-Trust-Architektur-Planung basierend auf DORA-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Granulare Identitäts- und Zugriffsverwaltung für alle Netzwerkressourcen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Kontinuierliche Verifikation und adaptive Sicherheitsrichtlinien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration mit bestehenden Sicherheits- und Compliance-Frameworks'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Mikrosegmentierung für kritische Finanzsysteme',
          description: 'Implementierung granularer Mikrosegmentierungsstrategien zur Isolation kritischer Systeme und Minimierung der Angriffsfläche in komplexen Finanzinfrastrukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Detaillierte Analyse und Klassifizierung kritischer Finanzsysteme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Design und Implementierung granularer Segmentierungsrichtlinien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Automatisierte Durchsetzung von Sicherheitsrichtlinien auf Anwendungsebene'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Überwachung und Anpassung der Segmentierungsstrategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Sicherheitszonen-Design und Perimeter-Management',
          description: 'Entwicklung robuster Sicherheitszonen-Architekturen mit definierten Perimetern für verschiedene Risikokategorien und Compliance-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Risiko-basierte Zonierung und Klassifizierung von Netzwerkbereichen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Design mehrschichtiger Sicherheitsperimeter und Kontrollpunkte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Implementierung dynamischer Sicherheitsrichtlinien zwischen Zonen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Integration von Threat Intelligence und automatisierter Bedrohungsabwehr'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Automatisierte Netzwerküberwachung und Incident-Response',
          description: 'Implementierung fortschrittlicher Monitoring-Systeme mit KI-gestützter Anomalieerkennung und automatisierten Response-Mechanismen für effektive Incident-Containment.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Echtzeit-Netzwerküberwachung mit KI-gestützter Anomalieerkennung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Automatisierte Incident-Response und Containment-Mechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Integration mit SIEM-Systemen und Security Orchestration Platforms'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Compliance-Reporting und forensische Analysefähigkeiten'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'DORA-Compliance-Validierung und kontinuierliche Optimierung',
          description: 'Systematische Validierung der Netzwerksegmentierung gegen DORA-Anforderungen mit kontinuierlicher Optimierung und Anpassung an sich ändernde regulatorische Landschaften.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Umfassende DORA-Compliance-Assessments und Gap-Analysen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Regelmäßige Penetrationstests und Resilienz-Validierungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Kontinuierliche Überwachung regulatorischer Entwicklungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Proaktive Optimierung und Anpassung der Segmentierungsstrategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Migration Planning und Change-Management',
          description: 'Strategische Planung und Durchführung der Migration zu DORA-konformen Netzwerkarchitekturen mit minimalem Risiko und optimaler Betriebskontinuität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Detaillierte Migrations-Roadmaps und Risikobewertungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Schrittweise Implementierung mit Rollback-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Umfassendes Change-Management und Stakeholder-Kommunikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Post-Migration-Support und Performance-Optimierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(doraNetzwerksegmentierungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DORA Netzwerksegmentierung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
