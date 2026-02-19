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
    console.log('Creating PKI Infrastructure page...')

    const pkiInfrastructureData = {
      _type: 'servicePage',
      _id: 'pki-infrastructure',
      title: 'PKI Infrastructure',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/data-protection-encryption/pki/pki-infrastructure'
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
        title: 'PKI Infrastructure - Public Key Infrastructure Implementierung | ADVISORI',
        description: 'Professionelle PKI Infrastructure Services für sichere digitale Identitäten. Zertifikatsmanagement, Trust-Hierarchien, HSM-Integration und Compliance-konforme PKI-Architekturen für Unternehmen.',
        keywords: 'PKI Infrastructure, Public Key Infrastructure, Zertifikatsmanagement, PKI Implementierung, Digital Certificates, Trust Hierarchie, HSM Integration, PKI Security, Certificate Authority'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'PKI Infrastructure - Sichere digitale Identitäten und Zertifikatsmanagement'
        },
        tagline: 'Vertrauen durch kryptographische Exzellenz',
        heading: 'PKI Infrastructure',
        description: 'PKI Infrastructure bildet das kryptographische Rückgrat moderner digitaler Sicherheitsarchitekturen. Wir entwickeln und implementieren robuste Public Key Infrastructure-Lösungen, die digitale Identitäten, Verschlüsselung und Authentifizierung auf Enterprise-Niveau ermöglichen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Enterprise-grade Certificate Authority (CA) Architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisiertes Zertifikats-Lifecycle-Management'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'HSM-Integration und Hardware-Security-Module'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Compliance-konforme Trust-Hierarchien und Governance'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'PKI Infrastructure - Das kryptographische Fundament digitaler Sicherheit',
        description: 'PKI Infrastructure repräsentiert die technologische Basis für vertrauensvolle digitale Kommunikation und sichere Datenübertragung. Als umfassendes Framework für digitale Zertifikate, Verschlüsselung und Authentifizierung ermöglicht PKI die sichere Digitalisierung geschäftskritischer Prozesse.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Hierarchische Trust-Modelle schaffen skalierbare Vertrauensstrukturen für komplexe Organisationen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Automatisierte Certificate Lifecycle Management-Prozesse reduzieren operative Komplexität'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Hardware Security Modules (HSM) gewährleisten höchste kryptographische Sicherheit'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration in bestehende IT-Landschaften durch standardisierte Protokolle und APIs'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Compliance-Unterstützung für regulatorische Anforderungen und Branchenstandards'
          }
        ],
        alert: {
          title: 'PKI als strategischer Enabler',
          content: 'Moderne PKI Infrastructure ist mehr als Zertifikatsmanagement - sie wird zum strategischen Enabler für Zero Trust Architectures, IoT Security und digitale Transformation.'
        },
        whyUs: {
          title: 'Warum PKI Infrastructure mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in kryptographischen Protokollen und PKI-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Beratung für optimale PKI-Technologie-Auswahl'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Implementierungsmethoden für hochverfügbare PKI-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Optimierung und Evolution Ihrer PKI-Landschaft'
            }
          ]
        },
        additionalInfo: 'PKI Infrastructure ermöglicht es Organisationen, digitales Vertrauen systematisch aufzubauen und zu verwalten. Die richtige PKI-Architektur wird zum Wettbewerbsvorteil in einer zunehmend digitalisierten Geschäftswelt.',
        serviceDescription: 'Unser PKI Infrastructure Service umfasst die vollständige Begleitung von der strategischen PKI-Planung über die technische Implementierung bis zum operativen Management. Wir entwickeln maßgeschneiderte PKI-Lösungen, die perfekt zu Ihren Sicherheitsanforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'PKI-Architektur-Design und Trust-Modell-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Certificate Authority (CA) Implementierung und Konfiguration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'HSM-Integration und Hardware-Security-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Automatisiertes Certificate Lifecycle Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'PKI-Governance und Compliance-Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zur PKI Infrastructure Implementierung',
        description: 'Wir verfolgen einen systematischen und sicherheitsfokussierten Ansatz zur PKI Infrastructure Implementierung, der kryptographische Best Practices mit operativer Effizienz optimal verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Security Requirements Analysis und Trust-Modell-Design'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Proof-of-Concept und Pilot-Implementierung mit ausgewählten Use Cases'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Rollout-Strategie mit kontinuierlicher Sicherheitsvalidierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration in bestehende Security-Landschaften und Identity-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Governance durch Training, Monitoring und kontinuierliche Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'PKI Infrastructure ist das unsichtbare Fundament digitalen Vertrauens. Wir schaffen nicht nur technische Implementierungen, sondern strategische Sicherheitsarchitekturen, die Organisationen befähigen, digitale Transformation sicher und compliance-konform zu gestalten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'PKI-Architektur & Trust-Modell-Design',
          description: 'Entwicklung maßgeschneiderter PKI-Architekturen und Trust-Hierarchien für komplexe Organisationsstrukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Hierarchische CA-Strukturen und Trust-Chain-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Cross-Certification und Bridge-CA-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Certificate Policy (CP) und Certification Practice Statement (CPS) Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Multi-Domain und Cross-Organization Trust-Modelle'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Certificate Authority (CA) Implementierung',
          description: 'Professionelle Implementierung und Konfiguration von Root CAs, Intermediate CAs und Issuing CAs.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Root CA Setup mit Offline-Betrieb und Air-Gap-Sicherheit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Intermediate CA-Konfiguration für operative Zertifikatsausstellung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Specialized CAs für verschiedene Anwendungsfälle (SSL/TLS, Code Signing, Email)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'High Availability und Disaster Recovery für CA-Systeme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'HSM-Integration & Hardware-Security',
          description: 'Integration von Hardware Security Modules für höchste kryptographische Sicherheit und Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'HSM-Auswahl und -Konfiguration für CA-Key-Protection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'FIPS 140-2 Level 3/4 konforme Hardware-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Key Ceremony Procedures und Secure Key Generation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'HSM-Clustering und Load Balancing für Hochverfügbarkeit'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Certificate Lifecycle Management',
          description: 'Automatisierte Verwaltung des gesamten Zertifikats-Lebenszyklus von der Erstellung bis zur Revocation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Automated Certificate Enrollment (ACME, SCEP, EST Protokolle)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Certificate Renewal und Auto-Renewal-Mechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Certificate Revocation Lists (CRL) und OCSP-Services'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Certificate Discovery und Inventory Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'PKI-Integration & Application Support',
          description: 'Nahtlose Integration von PKI-Services in bestehende Anwendungen und IT-Infrastrukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Active Directory Certificate Services (ADCS) Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Web Server SSL/TLS Certificate Automation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Code Signing und Document Signing Certificate Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'IoT Device Certificate Provisioning und Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'PKI-Governance & Compliance Management',
          description: 'Umfassende Governance-Strukturen und Compliance-Management für regulatorische Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'PKI Policy Framework und Certificate Practice Statement (CPS)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Audit und Compliance Reporting (Common Criteria, FIPS 140-2)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Risk Assessment und Security Controls für PKI-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Incident Response und PKI Security Operations Center (SOC)'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(pkiInfrastructureData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ PKI Infrastructure page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
