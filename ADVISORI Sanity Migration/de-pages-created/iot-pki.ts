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
    console.log('Creating IoT PKI page...')

    const iotPkiData = {
      _type: 'servicePage',
      _id: 'iot-pki',
      title: 'IoT PKI - Public Key Infrastructure für Internet of Things',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/data-protection-encryption/pki/iot-pki'
      },
      parent: {
        _type: 'reference',
        _ref: 'pki'
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
        title: 'IoT PKI - Public Key Infrastructure für Internet of Things | ADVISORI',
        description: 'Spezialisierte PKI-Lösungen für IoT-Ökosysteme. Skalierbare Zertifikatsverwaltung, Device Identity Management, Edge PKI-Architekturen und sichere IoT-Kommunikation für Industrial IoT und Smart Device Deployments.',
        keywords: 'IoT PKI, Internet of Things Security, Device Identity Management, IoT Certificates, Edge PKI, Industrial IoT Security, Smart Device Authentication, IoT Certificate Lifecycle, Device Provisioning, IIoT Security'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IoT PKI - Sichere Identitäten für das Internet der Dinge'
        },
        tagline: 'Vertrauen in der vernetzten Welt',
        heading: 'IoT PKI - Public Key Infrastructure für Internet of Things',
        description: 'IoT PKI revolutioniert die Sicherheit vernetzter Geräte durch spezialisierte Public Key Infrastructure-Lösungen für das Internet of Things. Wir entwickeln skalierbare, ressourcenoptimierte PKI-Architekturen, die Millionen von IoT-Geräten sichere digitale Identitäten verleihen und dabei die einzigartigen Herausforderungen von Edge Computing, Bandbreitenbeschränkungen und Geräteheterogenität meistern.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Skalierbare PKI-Architekturen für Millionen von IoT-Geräten mit automatisierter Zertifikatsverwaltung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Lightweight Certificate Protocols für ressourcenbeschränkte Embedded Systems und Edge Devices'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Distributed Edge PKI für autonome IoT-Netzwerke mit Offline-Betriebsfähigkeit'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Industrial IoT Security Compliance für IEC 62443, NIST Cybersecurity Framework und branchenspezifische Standards'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'IoT PKI - Sichere Identitäten für das Internet der Dinge',
        description: 'IoT PKI adressiert die fundamentalen Sicherheitsherausforderungen des Internet of Things durch spezialisierte Public Key Infrastructure-Lösungen, die für die einzigartigen Anforderungen vernetzter Geräte optimiert sind. Von ressourcenbeschränkten Sensoren bis zu komplexen Industrial IoT-Systemen ermöglicht IoT PKI sichere Device-to-Device-Kommunikation, authentifizierte Cloud-Konnektivität und vertrauensvolle Datenübertragung in heterogenen IoT-Ökosystemen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Massive Scale Certificate Management für IoT-Deployments mit Millionen von Geräten und automatisierten Lifecycle-Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Resource-Constrained Device Support durch lightweight Kryptographie und optimierte Certificate Formats'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Edge PKI Architectures für dezentrale Vertrauensmodelle und autonome IoT-Netzwerk-Segmente'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Zero-Touch Device Provisioning mit sicherer Erstregistrierung und automatischer Zertifikatsverteilung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Industrial IoT Integration für kritische Infrastrukturen mit höchsten Sicherheits- und Verfügbarkeitsanforderungen'
          }
        ],
        alert: {
          title: 'IoT PKI als Enabler für Zero Trust IoT',
          content: 'Moderne IoT PKI-Architekturen werden zum strategischen Fundament für Zero Trust IoT-Sicherheit, sichere Edge Computing-Umgebungen und vertrauensvolle Industrial IoT-Kommunikation in kritischen Infrastrukturen.'
        },
        whyUs: {
          title: 'Warum IoT PKI mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Expertise in IoT-Security-Architekturen und ressourcenoptimierten PKI-Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige IoT PKI-Beratung für optimale Technologie-Integration und Vendor-Neutralität'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Skalierungsstrategien für massive IoT-Deployments und Edge Computing-Szenarien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Innovation in IoT-Sicherheitstechnologien und Compliance-Frameworks'
            }
          ]
        },
        additionalInfo: 'IoT PKI ermöglicht es Organisationen, das volle Potenzial des Internet of Things sicher zu erschließen. Die richtige IoT PKI-Strategie wird zum Wettbewerbsvorteil in einer zunehmend vernetzten und datengetriebenen Geschäftswelt.',
        serviceDescription: 'Unser IoT PKI Service umfasst die vollständige Begleitung von der strategischen IoT-Sicherheitsplanung über die technische PKI-Implementierung bis zum operativen Management vernetzter Geräte-Ökosysteme. Wir entwickeln maßgeschneiderte IoT PKI-Lösungen, die perfekt zu Ihren Device-Landschaften und Sicherheitsanforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'IoT PKI-Architektur-Design für skalierbare Device Identity Management-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Lightweight Certificate Protocols und ressourcenoptimierte Kryptographie-Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Edge PKI-Deployment für dezentrale IoT-Netzwerke und Offline-Betriebsfähigkeit'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Zero-Touch Device Provisioning und automatisierte Certificate Lifecycle Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Industrial IoT Security Integration und Compliance-Management für kritische Infrastrukturen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zur IoT PKI Implementierung',
        description: 'Wir verfolgen einen systematischen und skalierungsorientierten Ansatz zur IoT PKI-Implementierung, der die einzigartigen Herausforderungen des Internet of Things mit bewährten PKI-Prinzipien und innovativen Edge Computing-Konzepten optimal verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende IoT-Landschaftsanalyse und Device-spezifische PKI-Requirements-Definition'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Proof-of-Concept mit repräsentativen IoT-Geräten und Edge Computing-Szenarien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Skalierung von Pilot-Deployments zu produktiven IoT-Ökosystemen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Nahtlose Integration in bestehende IoT-Plattformen und Cloud-Infrastrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung durch IoT-Analytics, Security Monitoring und Performance-Tuning'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'IoT PKI ist das Rückgrat sicherer digitaler Transformation im Internet der Dinge. Wir schaffen nicht nur technische Zertifikatslösungen, sondern strategische Vertrauensarchitekturen, die Organisationen befähigen, ihre IoT-Vision sicher, skalierbar und compliance-konform zu realisieren – von Smart Cities bis zu Industrial IoT.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Scalable IoT Certificate Management',
          description: 'Entwicklung hochskalierbarer Zertifikatsverwaltungssysteme für massive IoT-Deployments mit automatisierten Lifecycle-Prozessen und intelligenter Device-Gruppierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Massive Scale Certificate Issuance für Millionen von IoT-Geräten mit Batch-Processing-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Automated Certificate Lifecycle Management mit proaktiver Renewal und Revocation-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Device Grouping und Certificate Template Management für heterogene IoT-Landschaften'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Real-time Certificate Status Monitoring und Health Analytics für IoT-Flotten'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Lightweight IoT Cryptography',
          description: 'Implementierung ressourcenoptimierter Kryptographie-Lösungen für Embedded Systems und ressourcenbeschränkte IoT-Geräte mit minimaler Performance-Auswirkung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Elliptic Curve Cryptography (ECC) Optimierung für Low-Power IoT-Devices und Embedded Systems'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Compressed Certificate Formats und Binary Encoding für Bandwidth-optimierte Übertragung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Hardware Security Element Integration für Secure Boot und Trusted Execution Environments'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Post-Quantum Cryptography Readiness für zukunftssichere IoT-Sicherheitsarchitekturen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Edge PKI Architecture',
          description: 'Design und Implementierung dezentraler PKI-Architekturen für Edge Computing-Umgebungen mit autonomer Betriebsfähigkeit und lokaler Vertrauensbildung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Distributed Certificate Authority Deployment für Edge Computing-Nodes und lokale IoT-Cluster'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Offline Certificate Validation und Local Trust Anchor Management für autonome IoT-Netzwerke'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Edge-to-Cloud Certificate Synchronization mit Conflict Resolution und Consistency Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Mesh Network PKI für Self-Organizing IoT-Systeme und Ad-hoc Device Communication'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Zero-Touch Device Provisioning',
          description: 'Automatisierte Geräte-Onboarding-Prozesse mit sicherer Erstregistrierung, Identity Verification und nahtloser Certificate-Verteilung ohne manuelle Intervention.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Secure Device Enrollment Protocol (SCEP) Implementierung für automatische Certificate Requests'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Device Identity Verification durch Hardware Attestation und Trusted Platform Module (TPM) Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Over-the-Air (OTA) Certificate Deployment mit Secure Channel Establishment und Integrity Verification'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Bootstrap Trust Establishment für Factory-Fresh Devices und Supply Chain Security'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Industrial IoT Security Integration',
          description: 'Spezialisierte PKI-Lösungen für Industrial IoT-Umgebungen mit kritischen Infrastrukturen, Operational Technology-Integration und höchsten Verfügbarkeitsanforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'IEC 62443 Compliance Implementation für Industrial Automation und Control Systems Security'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'OT/IT Convergence Security mit Bridging zwischen Operational Technology und Information Technology'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Critical Infrastructure Protection durch Redundant PKI-Architectures und Failover-Mechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Real-time Security Monitoring und Incident Response für Industrial IoT-Environments'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'IoT PKI Analytics & Monitoring',
          description: 'Umfassende Überwachungs- und Analysesysteme für IoT PKI-Infrastrukturen mit Predictive Maintenance, Security Intelligence und Performance-Optimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'IoT Certificate Lifecycle Analytics mit Predictive Expiration Management und Usage Pattern Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Security Event Correlation für IoT-spezifische Bedrohungserkennung und Anomaly Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Device Health Monitoring mit Certificate-based Identity Verification und Trust Score Calculation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Compliance Reporting und Audit Trail Management für regulatorische Anforderungen und Governance'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iotPkiData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IoT PKI page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
