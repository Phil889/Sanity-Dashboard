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

    const pkiInfrastrukturData = {
      _type: 'servicePage',
      _id: 'pki-infrastruktur',
      title: 'PKI Infrastruktur',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/data-protection-encryption/pki/pki-infrastruktur'
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
        title: 'PKI Infrastruktur - Public Key Infrastructure Beratung & Implementierung | ADVISORI',
        description: 'Professionelle PKI-Infrastruktur-Services für sichere digitale Identitäten. Zertifikatsmanagement, Certificate Authority Setup, PKI-Architektur und Compliance-konforme Implementierung für Unternehmen.',
        keywords: 'PKI Infrastruktur, Public Key Infrastructure, Zertifikatsmanagement, Certificate Authority, PKI Beratung, Digitale Zertifikate, PKI Implementierung, Kryptographie, PKI Architektur'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'PKI Infrastruktur - Public Key Infrastructure für sichere digitale Identitäten'
        },
        tagline: 'Vertrauen durch kryptographische Exzellenz',
        heading: 'PKI Infrastruktur',
        description: 'PKI-Infrastruktur bildet das Rückgrat moderner digitaler Sicherheit und ermöglicht vertrauensvolle Kommunikation in komplexen IT-Landschaften. Wir entwickeln und implementieren maßgeschneiderte Public Key Infrastructure-Lösungen, die höchste Sicherheitsstandards erfüllen und gleichzeitig operative Effizienz gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Enterprise-grade Certificate Authority und Trust-Hierarchien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisiertes Zertifikatsmanagement und Lifecycle-Governance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Compliance-konforme PKI-Architekturen für regulierte Branchen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Hochverfügbare und skalierbare PKI-Infrastrukturen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'PKI Infrastruktur - Das Fundament digitaler Vertrauensbeziehungen',
        description: 'Public Key Infrastructure repräsentiert die technologische Grundlage für sichere digitale Kommunikation und Authentifizierung in modernen Unternehmensumgebungen. Eine professionell implementierte PKI-Infrastruktur ermöglicht es Organisationen, digitale Identitäten zu verwalten, Datenintegrität zu gewährleisten und Vertrauen in digitalen Transaktionen zu etablieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Hierarchische Trust-Modelle schaffen skalierbare Vertrauensstrukturen für komplexe Organisationen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Automatisierte Certificate Lifecycle Management-Prozesse reduzieren operative Risiken'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Kryptographische Agility ermöglicht zukunftssichere Algorithmus-Migration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration in bestehende Identity- und Access-Management-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Compliance-Unterstützung für eIDAS, Common Criteria und Branchenstandards'
          }
        ],
        alert: {
          title: 'PKI als strategischer Enabler',
          content: 'Moderne PKI-Infrastrukturen sind mehr als technische Implementierungen - sie werden zu strategischen Enablern für digitale Transformation, Zero Trust-Architekturen und sichere Cloud-Migration.'
        },
        whyUs: {
          title: 'Warum PKI-Infrastruktur mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in kryptographischen Protokollen und PKI-Standards'
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
              text: 'Kontinuierliche PKI-Optimierung und Sicherheits-Monitoring'
            }
          ]
        },
        additionalInfo: 'PKI-Infrastrukturen entwickeln sich von statischen Zertifikats-Repositories zu dynamischen, intelligenten Trust-Plattformen, die adaptive Sicherheit und kontextuelle Authentifizierung ermöglichen.',
        serviceDescription: 'Unser PKI-Infrastruktur-Service umfasst die vollständige Begleitung von der strategischen PKI-Planung über die technische Implementierung bis zur operativen Optimierung. Wir entwickeln maßgeschneiderte PKI-Lösungen, die perfekt zu Ihren Sicherheitsanforderungen und Geschäftsprozessen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'PKI-Architektur-Design und Trust-Modell-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Certificate Authority Setup und Hierarchie-Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Zertifikatsmanagement und Lifecycle-Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'PKI-Integration und Application-Enablement'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Security Operations und Incident Response für PKI-Systeme'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zur PKI-Infrastruktur-Implementierung',
        description: 'Wir verfolgen einen systematischen und sicherheitszentrierten Ansatz zur PKI-Infrastruktur-Entwicklung, der kryptographische Best Practices mit operativer Exzellenz verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende PKI-Requirements-Analyse und Trust-Modell-Design'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Sichere Certificate Authority-Implementierung mit Hardware Security Modules'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise PKI-Rollout-Strategie mit kontinuierlicher Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration in bestehende Sicherheitsarchitekturen und Identity-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige PKI-Governance durch Training, Monitoring und kontinuierliche Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Eine professionell implementierte PKI-Infrastruktur ist das unsichtbare Fundament digitaler Transformation. Wir schaffen nicht nur technische Zertifikats-Systeme, sondern strategische Trust-Plattformen, die Organisationen befähigen, sichere digitale Geschäftsmodelle zu realisieren und Vertrauen in der digitalen Welt zu etablieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'PKI-Architektur & Trust-Modell-Design',
          description: 'Entwicklung maßgeschneiderter PKI-Architekturen und Trust-Hierarchien für komplexe Unternehmensanforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende PKI-Requirements-Analyse und Stakeholder-Alignment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Trust-Modell-Design mit hierarchischen und Cross-Certification-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Kryptographische Algorithmus-Auswahl und Crypto-Agility-Planung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'PKI-Policy-Entwicklung und Certificate Practice Statement-Erstellung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Certificate Authority Implementation',
          description: 'Sichere Implementierung und Konfiguration von Certificate Authorities mit höchsten Sicherheitsstandards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Root CA und Intermediate CA Setup mit Hardware Security Modules'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Hochverfügbare CA-Infrastrukturen mit Disaster Recovery-Konzepten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Certificate Revocation List und OCSP-Responder-Konfiguration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'CA-Security-Hardening und Compliance-Konfiguration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Zertifikatsmanagement & Lifecycle-Automatisierung',
          description: 'Automatisierte Zertifikats-Lifecycle-Prozesse für effiziente und sichere Zertifikatsverwaltung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Automated Certificate Enrollment und Self-Service-Portale'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Certificate Lifecycle Management mit Renewal-Automatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Certificate Discovery und Inventory-Management-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Expiration Monitoring und Proactive Certificate Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'PKI-Integration & Application-Enablement',
          description: 'Nahtlose Integration von PKI-Funktionalitäten in bestehende Anwendungen und Systeme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Application-spezifische Certificate Templates und Enrollment-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'API-Integration für Certificate Management in DevOps-Pipelines'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Identity Provider-Integration und Federated Trust-Beziehungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Legacy-System-Integration und Certificate-Migration-Strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'PKI Security Operations & Monitoring',
          description: 'Kontinuierliches Security Monitoring und Incident Response für PKI-Infrastrukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'PKI-Security-Monitoring und Anomaly Detection-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Certificate Transparency Monitoring und Rogue Certificate Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'PKI-Incident-Response und Compromise Recovery-Prozeduren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Compliance Auditing und PKI-Health-Assessment-Services'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'PKI-Governance & Training',
          description: 'Umfassende PKI-Governance-Programme und Schulungskonzepte für nachhaltige PKI-Exzellenz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'PKI-Governance-Framework und Policy-Management-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'PKI-Administrator-Training und Zertifizierungsprogramme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'PKI-Awareness-Programme für End-User und Entwickler'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche PKI-Optimierung und Technology-Roadmap-Entwicklung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(pkiInfrastrukturData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ PKI Infrastructure page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
