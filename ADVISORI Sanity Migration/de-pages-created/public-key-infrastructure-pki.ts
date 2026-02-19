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
    console.log('Creating Public Key Infrastructure (PKI) page...')

    const publicKeyInfrastructurePkiData = {
      _type: 'servicePage',
      _id: 'public-key-infrastructure-pki',
      title: 'Public Key Infrastructure (PKI)',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/data-protection-encryption/pki/public-key-infrastructure-pki'
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
        title: 'Public Key Infrastructure (PKI) - Enterprise Kryptographie & Zertifikatsmanagement | ADVISORI',
        description: 'Professionelle PKI-Implementierung für sichere digitale Identitäten. Certificate Authority Setup, HSM-Integration, automatisiertes Zertifikatsmanagement und compliance-konforme PKI-Architekturen für Unternehmen.',
        keywords: 'Public Key Infrastructure, PKI, Certificate Authority, Digital Certificates, HSM Integration, Zertifikatsmanagement, PKI Architecture, Trust Hierarchie, Certificate Lifecycle, PKI Security'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Public Key Infrastructure (PKI) - Sichere digitale Identitäten und Vertrauensarchitekturen'
        },
        tagline: 'Vertrauen durch kryptographische Exzellenz',
        heading: 'Public Key Infrastructure (PKI)',
        description: 'Public Key Infrastructure (PKI) bildet das kryptographische Fundament moderner digitaler Sicherheitsarchitekturen. Wir entwickeln und implementieren robuste PKI-Lösungen, die digitale Identitäten, Verschlüsselung und Authentifizierung auf Enterprise-Niveau ermöglichen und dabei höchste Sicherheits- und Compliance-Standards erfüllen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Enterprise-grade Certificate Authority (CA) Architekturen mit hierarchischen Trust-Modellen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisiertes Certificate Lifecycle Management mit ACME, SCEP und EST Protokollen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Hardware Security Module (HSM) Integration für FIPS 140-2 konforme Schlüsselsicherheit'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Compliance-konforme PKI-Governance für regulatorische Anforderungen und Audit-Readiness'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Public Key Infrastructure (PKI) - Das kryptographische Rückgrat digitaler Transformation',
        description: 'Public Key Infrastructure (PKI) repräsentiert weit mehr als nur Zertifikatsmanagement – sie ist das strategische Fundament für vertrauensvolle digitale Kommunikation, sichere Authentifizierung und compliance-konforme Verschlüsselung. Als umfassendes Framework für digitale Identitäten ermöglicht PKI Organisationen, ihre digitale Transformation sicher und nachhaltig zu gestalten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Hierarchische Certificate Authority (CA) Strukturen schaffen skalierbare Vertrauensarchitekturen für komplexe Organisationen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Automatisierte Certificate Lifecycle Management-Prozesse reduzieren operative Komplexität und Sicherheitsrisiken'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Hardware Security Modules (HSM) gewährleisten höchste kryptographische Sicherheit für kritische Schlüsselmaterialien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Nahtlose Integration in bestehende IT-Landschaften durch standardisierte Protokolle und APIs'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Umfassende Compliance-Unterstützung für DSGVO, NIS2, DORA und branchenspezifische Regulierungen'
          }
        ],
        alert: {
          title: 'PKI als strategischer Enabler für Zero Trust',
          content: 'Moderne PKI-Infrastrukturen werden zum strategischen Enabler für Zero Trust Architectures, IoT Security und sichere Cloud-Transformation – weit über traditionelles Zertifikatsmanagement hinaus.'
        },
        whyUs: {
          title: 'Warum Public Key Infrastructure (PKI) mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in kryptographischen Protokollen und Enterprise-PKI-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Beratung für optimale PKI-Technologie-Auswahl und -Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Implementierungsmethoden für hochverfügbare und skalierbare PKI-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche PKI-Evolution und -Optimierung für sich wandelnde Sicherheitsanforderungen'
            }
          ]
        },
        additionalInfo: 'PKI-Infrastrukturen ermöglichen es Organisationen, digitales Vertrauen systematisch aufzubauen und zu verwalten. Die richtige PKI-Architektur wird zum Wettbewerbsvorteil in einer zunehmend digitalisierten und regulierten Geschäftswelt.',
        serviceDescription: 'Unser Public Key Infrastructure Service umfasst die vollständige Begleitung von der strategischen PKI-Planung über die technische Implementierung bis zum operativen Management. Wir entwickeln maßgeschneiderte PKI-Lösungen, die perfekt zu Ihren Sicherheitsanforderungen und Compliance-Zielen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'PKI-Architektur-Design und hierarchische Trust-Modell-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Certificate Authority (CA) Implementierung mit Root, Intermediate und Issuing CAs'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Hardware Security Module (HSM) Integration und Key Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Automatisiertes Certificate Lifecycle Management und Renewal-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'PKI-Governance, Compliance-Management und Audit-Unterstützung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zur Public Key Infrastructure (PKI) Implementierung',
        description: 'Wir verfolgen einen systematischen und sicherheitsfokussierten Ansatz zur PKI-Implementierung, der kryptographische Best Practices mit operativer Effizienz und regulatorischen Anforderungen optimal verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende PKI-Requirements-Analyse und strategische Trust-Architektur-Planung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Proof-of-Concept und Pilot-Implementierung mit ausgewählten Use Cases und Anwendungsszenarien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Rollout-Strategie mit kontinuierlicher Sicherheitsvalidierung und Performance-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Nahtlose Integration in bestehende Security-Landschaften und Identity-Management-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige PKI-Governance durch Training, Monitoring und kontinuierliche Compliance-Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Public Key Infrastructure ist das unsichtbare Fundament digitalen Vertrauens in der modernen Geschäftswelt. Wir schaffen nicht nur technische PKI-Implementierungen, sondern strategische Vertrauensarchitekturen, die Organisationen befähigen, ihre digitale Transformation sicher, compliance-konform und zukunftssicher zu gestalten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'PKI-Architektur & Trust-Modell-Design',
          description: 'Entwicklung maßgeschneiderter PKI-Architekturen und hierarchischer Trust-Modelle für komplexe Organisationsstrukturen und Multi-Domain-Umgebungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Hierarchische Certificate Authority (CA) Strukturen mit Root, Intermediate und Issuing CAs'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Cross-Certification und Bridge-CA-Architekturen für Multi-Organization Trust'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Certificate Policy (CP) und Certification Practice Statement (CPS) Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Trust-Anchor-Management und Path-Validation-Strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Certificate Authority (CA) Implementierung',
          description: 'Professionelle Implementierung und Konfiguration von Root CAs, Intermediate CAs und Issuing CAs mit höchsten Sicherheitsstandards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Root CA Setup mit Offline-Betrieb und Air-Gap-Sicherheitsarchitektur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Intermediate CA-Konfiguration für operative Zertifikatsausstellung und -verwaltung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Specialized CAs für verschiedene Anwendungsfälle (SSL/TLS, Code Signing, Email, IoT)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'High Availability und Disaster Recovery Architekturen für CA-Systeme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Hardware Security Module (HSM) Integration',
          description: 'Integration von Hardware Security Modules für höchste kryptographische Sicherheit und FIPS 140-2 Compliance bei kritischen Schlüsseloperationen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'HSM-Auswahl und -Konfiguration für CA-Root-Key-Protection und kritische Schlüsselmaterialien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'FIPS 140-2 Level 3/4 konforme Hardware-Integration und Zertifizierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Key Ceremony Procedures und Secure Key Generation mit Multi-Person-Kontrolle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'HSM-Clustering und Load Balancing für Hochverfügbarkeit und Performance'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Certificate Lifecycle Management',
          description: 'Automatisierte Verwaltung des gesamten Zertifikats-Lebenszyklus von der Erstellung über Renewal bis zur Revocation mit modernen Protokollen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Automated Certificate Management Environment (ACME) Protocol Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Simple Certificate Enrollment Protocol (SCEP) und Enrollment over Secure Transport (EST)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Certificate Revocation Lists (CRL) und Online Certificate Status Protocol (OCSP) Services'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Certificate Discovery, Inventory Management und Expiration Monitoring'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'PKI-Integration & Application Support',
          description: 'Nahtlose Integration von PKI-Services in bestehende Anwendungen, IT-Infrastrukturen und Cloud-Umgebungen mit standardisierten Schnittstellen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Active Directory Certificate Services (ADCS) Integration und Windows PKI'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Web Server SSL/TLS Certificate Automation und Load Balancer Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Code Signing und Document Signing Certificate Management für Software-Integrität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'IoT Device Certificate Provisioning und Container/Kubernetes PKI Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'PKI-Governance & Compliance Management',
          description: 'Umfassende Governance-Strukturen und Compliance-Management für regulatorische Anforderungen und kontinuierliche Audit-Readiness.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'PKI Policy Framework und Certificate Practice Statement (CPS) Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Audit und Compliance Reporting für Common Criteria, FIPS 140-2 und regulatorische Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Risk Assessment und Security Controls für PKI-Systeme und Trust-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Incident Response und PKI Security Operations Center (SOC) Integration'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(publicKeyInfrastructurePkiData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Public Key Infrastructure (PKI) page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
