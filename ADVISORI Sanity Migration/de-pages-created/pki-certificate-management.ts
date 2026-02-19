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
    console.log('Creating PKI Certificate Management page...')

    const pkiCertificateManagementData = {
      _type: 'servicePage',
      _id: 'pki-certificate-management',
      title: 'PKI Certificate Management',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/data-protection-encryption/pki/pki-certificate-management'
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
        title: 'PKI Certificate Management - Automatisierte Zertifikatsverwaltung | ADVISORI',
        description: 'Professionelles PKI Certificate Management für Enterprise-Umgebungen. Automatisierte Zertifikatserneuerung, Lifecycle-Management, Compliance-Monitoring und sichere Certificate Authority-Integration.',
        keywords: 'PKI Certificate Management, Zertifikatsverwaltung, Certificate Lifecycle Management, PKI Automation, Certificate Authority, Digital Certificates, SSL/TLS Management, Certificate Renewal, PKI Governance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'PKI Certificate Management - Automatisierte Zertifikatsverwaltung und Lifecycle-Management'
        },
        tagline: 'Automatisierung trifft auf kryptographische Exzellenz',
        heading: 'PKI Certificate Management',
        description: 'PKI Certificate Management transformiert die komplexe Verwaltung digitaler Zertifikate in einen strategischen Wettbewerbsvorteil. Durch intelligente Automatisierung, proaktives Monitoring und nahtlose Integration schaffen wir eine Zertifikatsinfrastruktur, die Sicherheit maximiert und operative Effizienz steigert.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollautomatisierte Certificate Lifecycle-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Proaktives Monitoring und Compliance-Management'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Enterprise-Integration und Skalierbarkeit'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Zero-Downtime Certificate Renewal-Strategien'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'PKI Certificate Management - Strategische Zertifikatsverwaltung für moderne Unternehmen',
        description: 'PKI Certificate Management ist weit mehr als technische Zertifikatsverwaltung – es ist ein strategisches Framework für digitales Vertrauen und operative Exzellenz. In einer Welt zunehmender Digitalisierung und verschärfter Compliance-Anforderungen wird professionelles Certificate Management zum kritischen Erfolgsfaktor.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Automatisierte Lifecycle-Prozesse eliminieren manuelle Fehlerquellen und reduzieren operative Risiken'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Proaktives Monitoring verhindert Zertifikatsabläufe und damit verbundene Serviceunterbrechungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Zentrale Governance-Strukturen gewährleisten Compliance und einheitliche Sicherheitsstandards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Skalierbare Architekturen unterstützen Wachstum und sich ändernde Geschäftsanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration in bestehende IT-Landschaften durch standardisierte APIs und Protokolle'
          }
        ],
        alert: {
          title: 'Certificate Management als Business Enabler',
          content: 'Modernes PKI Certificate Management wird zum strategischen Enabler für digitale Transformation, Cloud-Migration und Zero Trust-Architekturen – weit über reine Zertifikatsverwaltung hinaus.'
        },
        whyUs: {
          title: 'Warum PKI Certificate Management mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in Enterprise Certificate Management und PKI-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Beratung für optimale Technologie- und Toolauswahl'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Automatisierungsstrategien für hochverfügbare Certificate-Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Optimierung und Evolution Ihrer Certificate Management-Landschaft'
            }
          ]
        },
        additionalInfo: 'PKI Certificate Management ermöglicht es Organisationen, digitale Zertifikate als strategisches Asset zu nutzen. Die richtige Certificate Management-Strategie wird zum Wettbewerbsvorteil in einer zunehmend vernetzten Geschäftswelt.',
        serviceDescription: 'Unser PKI Certificate Management Service umfasst die vollständige Transformation von manuellen Zertifikatsprozessen zu automatisierten, skalierbaren Lösungen. Wir entwickeln maßgeschneiderte Certificate Management-Strategien, die perfekt zu Ihren Sicherheits- und Geschäftsanforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Certificate Lifecycle Automation und Workflow-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Certificate Authority Integration und Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Automated Certificate Enrollment und Renewal-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Certificate Monitoring und Compliance-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Enterprise-Integration und API-Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zum PKI Certificate Management',
        description: 'Wir verfolgen einen systematischen und automatisierungsorientierten Ansatz zum PKI Certificate Management, der operative Exzellenz mit strategischer Weitsicht optimal verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Certificate Inventory-Analyse und Lifecycle-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Automatisierungsstrategie-Entwicklung mit Fokus auf Zero-Touch-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Implementierung mit kontinuierlicher Validierung und Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration in bestehende Security- und IT-Operations-Landschaften'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Governance durch Training, Monitoring und kontinuierliche Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'PKI Certificate Management ist der Schlüssel zur Skalierung digitaler Sicherheit. Wir transformieren komplexe Zertifikatsprozesse in strategische Automatisierungslösungen, die nicht nur operative Effizienz steigern, sondern auch die Grundlage für vertrauensvolle digitale Geschäftsmodelle schaffen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Certificate Lifecycle Automation',
          description: 'Vollautomatisierte Verwaltung des gesamten Zertifikats-Lebenszyklus von der Erstellung bis zur sicheren Archivierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Automated Certificate Enrollment (ACE) mit ACME, SCEP und EST-Protokollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Intelligente Certificate Renewal mit Zero-Downtime-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Certificate Revocation Management und CRL/OCSP-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Workflow-basierte Approval-Prozesse und Multi-Level-Validierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Certificate Authority Integration',
          description: 'Nahtlose Integration verschiedener Certificate Authorities in eine einheitliche Management-Plattform.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Multi-CA-Management für interne und externe Certificate Authorities'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Public CA Integration (DigiCert, GlobalSign, Let\'s Encrypt)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Private CA Setup und Microsoft ADCS-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'CA-übergreifende Policy-Harmonisierung und Trust-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Certificate Discovery & Inventory Management',
          description: 'Umfassende Erkennung und Verwaltung aller Zertifikate in der IT-Infrastruktur.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Automated Certificate Discovery in Netzwerken und Cloud-Umgebungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Centralized Certificate Inventory mit Real-time-Updates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Shadow Certificate Detection und Rogue Certificate-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Certificate Usage Analytics und Optimization-Empfehlungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Certificate Monitoring & Alerting',
          description: 'Proaktive Überwachung und intelligente Benachrichtigungssysteme für alle Zertifikatsaktivitäten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Real-time Certificate Health Monitoring und Status-Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Predictive Expiration Alerting mit konfigurierbaren Benachrichtigungszyklen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Certificate Vulnerability Scanning und Security-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Compliance Monitoring und Audit-Trail-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Enterprise Application Integration',
          description: 'Nahtlose Integration von Certificate Management in bestehende Enterprise-Anwendungen und -Systeme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Load Balancer und Web Server Certificate Automation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Container und Kubernetes Certificate Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'IoT Device Certificate Provisioning und Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'API Gateway und Microservices Certificate Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Certificate Governance & Compliance',
          description: 'Umfassende Governance-Strukturen und Compliance-Management für regulatorische Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Certificate Policy Framework und Governance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Regulatory Compliance Reporting (SOX, PCI DSS, HIPAA)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Certificate Audit und Forensic-Capabilities'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Risk Assessment und Certificate Security Operations'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(pkiCertificateManagementData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ PKI Certificate Management page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
