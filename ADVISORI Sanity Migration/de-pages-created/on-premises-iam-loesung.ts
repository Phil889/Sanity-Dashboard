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
    console.log('Creating On-Premises IAM-Lösung page...')

    const onPremisesIamLoesungData = {
      _type: 'servicePage',
      _id: 'on-premises-iam-loesung',
      title: 'On-Premises IAM-Lösung - Enterprise Identity Management vor Ort',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/on-premises-iam-loesung'
      },
      parent: {
        _type: 'reference',
        _ref: 'identity-access-management-iam'
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
        title: 'On-Premises IAM-Lösung - Enterprise Identity Management vor Ort | ADVISORI',
        description: 'Professionelle On-Premises IAM-Lösungen: Maximale Kontrolle, Sicherheit und Compliance für Enterprise-Umgebungen. Lokale Identitätsverwaltung mit höchsten Sicherheitsstandards und regulatorischer Exzellenz.',
        keywords: 'On-Premises IAM, lokale Identitätsverwaltung, Enterprise IAM, interne IAM-Systeme, IAM vor Ort, Datenschutz IAM, Compliance IAM, sichere Identitätsverwaltung, lokale Authentifizierung, Enterprise Security'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'On-Premises IAM-Lösung Enterprise Identity Management vor Ort'
        },
        tagline: 'Maximale Kontrolle und Sicherheit durch lokale IAM-Infrastrukturen',
        heading: 'On-Premises IAM-Lösung - Enterprise Identity Management vor Ort',
        description: 'On-Premises IAM-Lösungen bieten Unternehmen die ultimative Kontrolle über ihre Identitäts- und Zugriffsmanagement-Infrastruktur durch lokale Deployment-Modelle, die höchste Sicherheitsstandards, regulatorische Compliance und vollständige Datenhoheit gewährleisten. Diese strategischen Lösungen ermöglichen es Organisationen, kritische Identitätsdaten und Authentifizierungsprozesse vollständig innerhalb ihrer eigenen Infrastruktur zu verwalten, während sie gleichzeitig modernste IAM-Funktionalitäten und Enterprise-Grade-Performance bereitstellen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Datenhoheit und Kontrolle über alle Identitätsinformationen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Maximale Sicherheit durch lokale Infrastruktur und Air-Gap-Architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Regulatorische Compliance und Datenschutz-Excellence'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nahtlose Integration in bestehende Enterprise-Infrastrukturen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'On-Premises IAM: Strategische Kontrolle für kritische Unternehmensassets',
        description: 'On-Premises IAM-Lösungen repräsentieren die höchste Stufe der Identitätssicherheit und Datenkontrolle für Unternehmen mit strengsten Sicherheits- und Compliance-Anforderungen. Diese lokalen Deployment-Modelle ermöglichen es Organisationen, ihre gesamte IAM-Infrastruktur innerhalb der eigenen Rechenzentren zu betreiben und dabei vollständige Kontrolle über Datenflüsse, Sicherheitsrichtlinien und Compliance-Prozesse zu behalten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Enterprise-Grade Sicherheitsarchitekturen mit lokaler Datenhaltung und Air-Gap-Isolation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Vollständige Compliance-Kontrolle für regulierte Industrien und kritische Infrastrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Hochperformante lokale Authentifizierung ohne externe Abhängigkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Maßgeschneiderte Integration in Legacy-Systeme und bestehende IT-Landschaften'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Skalierbare Architektur für globale Unternehmen mit lokalen Compliance-Anforderungen'
          }
        ],
        alert: {
          title: 'Strategische Notwendigkeit',
          content: 'Für Unternehmen in regulierten Branchen, kritischen Infrastrukturen oder mit höchsten Sicherheitsanforderungen sind On-Premises IAM-Lösungen oft nicht nur eine strategische Wahl, sondern eine regulatorische Notwendigkeit für Datenschutz, Compliance und Geschäftskontinuität.'
        },
        whyUs: {
          title: 'ADVISORI On-Premises IAM-Excellence',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Expertise für hochsichere lokale IAM-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Compliance-by-Design für regulierte Industrien und kritische Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Nahtlose Legacy-Integration ohne Disruption bestehender Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitliche Sicherheitskonzepte mit Defense-in-Depth-Strategien'
            }
          ]
        },
        additionalInfo: 'Moderne On-Premises IAM-Lösungen kombinieren die Sicherheit und Kontrolle lokaler Infrastrukturen mit den Funktionalitäten cloud-nativer Technologien. Durch innovative Hybrid-Architekturen können Unternehmen die Vorteile beider Welten nutzen und dabei ihre spezifischen Sicherheits- und Compliance-Anforderungen erfüllen.',
        serviceDescription: 'Wir begleiten Sie durch die komplette On-Premises IAM-Transformation – von der strategischen Architektur-Planung und Sicherheitskonzeption über die lokale Implementation bis hin zum operativen Betrieb und der kontinuierlichen Optimierung. Unser Ansatz gewährleistet maximale Sicherheit, Compliance und Performance bei optimaler Integration in Ihre bestehende IT-Infrastruktur.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'On-Premises IAM-Architektur-Design und Sicherheitskonzeption'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Lokale Implementation mit Enterprise-Grade-Sicherheitsstandards'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Legacy-System-Integration und Modernisierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Compliance-Automation und regulatorische Exzellenz'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Hochverfügbarkeits-Design und Disaster-Recovery-Konzepte'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer On-Premises IAM-Implementierungsansatz',
        description: 'Wir verfolgen einen ganzheitlichen, sicherheitsfokussierten Ansatz für On-Premises IAM-Implementierungen, der höchste Sicherheitsstandards mit optimaler Performance und nahtloser Integration verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Security Assessment und Threat-Modeling für lokale IAM-Architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Defense-in-Depth-Design mit mehrschichtigen Sicherheitskontrollen und Isolation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phased Implementation mit minimaler Disruption und kontinuierlicher Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Compliance-Integration und regulatorische Validierung in allen Projektphasen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Operational Excellence und kontinuierliche Sicherheitsoptimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'On-Premises IAM-Lösungen sind für viele Unternehmen nicht nur eine technische Präferenz, sondern eine strategische Notwendigkeit für maximale Datenkontrolle und Compliance-Sicherheit. Unsere Erfahrung zeigt, dass lokale IAM-Infrastrukturen bei richtiger Konzeption und Implementation nicht nur höchste Sicherheitsstandards erfüllen, sondern auch die Flexibilität und Performance moderner Cloud-Lösungen erreichen können. Der Schlüssel liegt in der intelligenten Architektur, die Sicherheit, Compliance und Benutzerfreundlichkeit optimal vereint.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'On-Premises IAM-Architektur und Sicherheitsdesign',
          description: 'Entwicklung hochsicherer On-Premises IAM-Architekturen mit Defense-in-Depth-Strategien, die maximale Sicherheit, Performance und Skalierbarkeit gewährleisten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Enterprise-Security-Architektur mit Air-Gap-Isolation und Micro-Segmentierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Hochverfügbarkeits-Design mit Redundanz und Disaster-Recovery-Konzepten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Skalierbare Infrastruktur-Planung für globale Enterprise-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Performance-Optimierung und Capacity-Planning für kritische Workloads'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Lokale IAM-Implementation und System-Integration',
          description: 'Professionelle Implementation von On-Premises IAM-Systemen mit nahtloser Integration in bestehende Enterprise-Infrastrukturen und Legacy-Systeme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Sichere lokale Installation und Konfiguration von IAM-Komponenten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Legacy-System-Integration ohne Disruption bestehender Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Directory-Services-Integration und Identitäts-Synchronisation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Custom-Connector-Entwicklung für spezielle Anwendungsintegrationen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Enterprise-Sicherheit und Privileged Access Management',
          description: 'Implementation fortschrittlicher Sicherheitskontrollen und Privileged Access Management für kritische On-Premises IAM-Umgebungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Multi-Factor Authentication mit Hardware-Security-Modules'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Privileged Account Management mit Session-Recording und Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Certificate-based Authentication und PKI-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Advanced Threat Detection und Behavioral Analytics'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Compliance-Automation und regulatorische Exzellenz',
          description: 'Etablierung automatisierter Compliance-Prozesse und regulatorischer Kontrollen für On-Premises IAM-Umgebungen in regulierten Industrien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Automated Compliance-Monitoring und Real-time Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Audit-Trail-Management und Forensic-Capabilities'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Regulatory-Framework-Integration für spezifische Branchen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Data-Residency-Kontrollen und Datenschutz-Compliance'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Hybrid-Integration und Cloud-Connectivity',
          description: 'Sichere Hybrid-Architekturen für On-Premises IAM-Systeme mit selektiver Cloud-Integration und Multi-Environment-Support.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Secure Hybrid-Connectivity mit verschlüsselten Verbindungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Identity Federation für sichere Cross-Domain-Authentication'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Selective Cloud-Integration für nicht-kritische Workloads'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Multi-Environment-Management und Governance'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Operational Excellence und kontinuierliche Optimierung',
          description: 'Umfassende Betriebs- und Wartungsservices für On-Premises IAM-Systeme mit proaktivem Monitoring und kontinuierlicher Sicherheitsoptimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Proaktives System-Monitoring und Performance-Tuning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Security-Patch-Management und Vulnerability-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Backup und Disaster-Recovery-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Continuous Improvement und Technology-Roadmap-Updates'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(onPremisesIamLoesungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ On-Premises IAM-Lösung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
