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
    console.log('Creating PKI HSM page...')

    const pkiHsmData = {
      _type: 'servicePage',
      _id: 'pki-hsm',
      title: 'PKI HSM - Hardware Security Modules für PKI-Infrastrukturen',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/data-protection-encryption/pki/pki-hsm'
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
        title: 'PKI HSM - Hardware Security Modules für sichere PKI-Infrastrukturen | ADVISORI',
        description: 'Professionelle HSM-Integration in PKI-Systeme für maximale Sicherheit. FIPS 140-2 konforme Hardware Security Modules, Root CA Protection, Key Management und Enterprise-PKI-HSM-Architekturen.',
        keywords: 'PKI HSM, Hardware Security Module, FIPS 140-2, Root CA Protection, Key Management, PKI Security, Certificate Authority HSM, Tamper Resistant Hardware, Cryptographic Hardware, Enterprise PKI'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'PKI HSM - Hardware Security Modules für maximale PKI-Sicherheit'
        },
        tagline: 'Unerschütterliche kryptographische Sicherheit',
        heading: 'PKI HSM - Hardware Security Modules für PKI-Infrastrukturen',
        description: 'Hardware Security Modules (HSM) bilden das kryptographische Herzstück hochsicherer PKI-Infrastrukturen. Wir implementieren und integrieren HSM-Lösungen, die kritische private Schlüssel in tamper-resistant Hardware schützen und kryptographische Operationen in vertrauenswürdigen, isolierten Umgebungen ausführen - für maximale Sicherheit und Compliance.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'FIPS 140-2 Level 3/4 konforme Hardware Security Modules für höchste kryptographische Sicherheit'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Tamper-resistant Root CA Key Protection mit physischem Manipulationsschutz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'High-Performance kryptographische Operationen mit Hardware-Beschleunigung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Enterprise-grade HSM-Clustering für Hochverfügbarkeit und Skalierbarkeit'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'PKI HSM - Das kryptographische Fundament vertrauensvoller PKI-Systeme',
        description: 'Hardware Security Modules (HSM) in PKI-Umgebungen repräsentieren die höchste Stufe kryptographischer Sicherheit und Vertrauenswürdigkeit. Als dedizierte Hardware-Appliances schützen HSMs kritische private Schlüssel vor physischen und logischen Angriffen, während sie gleichzeitig hochperformante kryptographische Operationen für Certificate Authorities und PKI-Anwendungen bereitstellen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Tamper-resistant Hardware bietet physischen Schutz gegen Manipulation und unbefugten Zugriff auf kritische Schlüsselmaterialien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'FIPS 140-2 Zertifizierung gewährleistet höchste Sicherheitsstandards für regulierte Industrien und Government-Anwendungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Hardware-basierte Schlüsselerzeugung und -speicherung verhindert Extraktion privater Schlüssel unter allen Umständen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Hochperformante kryptographische Engines beschleunigen PKI-Operationen für Enterprise-Skalierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Nahtlose Integration in bestehende PKI-Infrastrukturen durch standardisierte APIs und Protokolle'
          }
        ],
        alert: {
          title: 'HSM als Compliance-Enabler für kritische PKI-Anwendungen',
          content: 'Moderne HSM-Lösungen werden zum unverzichtbaren Compliance-Enabler für kritische PKI-Anwendungen in regulierten Industrien, wo höchste Sicherheitsstandards und Audit-Nachweisbarkeit essentiell sind.'
        },
        whyUs: {
          title: 'Warum PKI HSM mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in HSM-Technologien und PKI-Integration für maximale Sicherheit'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige HSM-Beratung für optimale Technologie-Auswahl und -Dimensionierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Implementierungsmethoden für hochverfügbare und skalierbare HSM-PKI-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche HSM-Optimierung und -Wartung für nachhaltige Sicherheit und Performance'
            }
          ]
        },
        additionalInfo: 'HSM-Integration in PKI-Systeme ermöglicht es Organisationen, höchste Sicherheitsstandards zu erfüllen und gleichzeitig operative Effizienz zu maximieren. Die richtige HSM-Architektur wird zum strategischen Wettbewerbsvorteil in sicherheitskritischen Geschäftsumgebungen.',
        serviceDescription: 'Unser PKI HSM Service umfasst die vollständige Begleitung von der strategischen HSM-Planung über die technische Integration bis zum operativen Management. Wir entwickeln maßgeschneiderte HSM-PKI-Lösungen, die perfekt zu Ihren Sicherheitsanforderungen und Performance-Zielen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'HSM-Architektur-Design und PKI-Integration-Planung für optimale Sicherheit und Performance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'FIPS 140-2 konforme HSM-Implementierung mit Root CA Key Protection'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'High Availability HSM-Clustering und Load Balancing für Enterprise-Skalierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'HSM-Performance-Optimierung und kryptographische Workflow-Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'HSM-Monitoring, Compliance-Management und operative Wartung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zur PKI HSM Implementierung',
        description: 'Wir verfolgen einen systematischen und sicherheitsfokussierten Ansatz zur HSM-Integration in PKI-Systeme, der höchste kryptographische Sicherheit mit operativer Effizienz und regulatorischen Anforderungen optimal verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende HSM-Requirements-Analyse und strategische Sicherheitsarchitektur-Planung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Proof-of-Concept und Pilot-Integration mit ausgewählten PKI-Komponenten und Anwendungsszenarien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise HSM-Rollout-Strategie mit kontinuierlicher Sicherheitsvalidierung und Performance-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Nahtlose Integration in bestehende PKI-Landschaften und Certificate Authority-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige HSM-Governance durch Training, Monitoring und kontinuierliche Compliance-Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Hardware Security Modules sind das unverzichtbare Fundament für vertrauensvolle PKI-Infrastrukturen in kritischen Geschäftsumgebungen. Wir schaffen nicht nur technische HSM-Implementierungen, sondern strategische Sicherheitsarchitekturen, die Organisationen befähigen, höchste kryptographische Standards zu erfüllen und gleichzeitig operative Exzellenz zu erreichen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'HSM-Architektur & PKI-Integration-Design',
          description: 'Entwicklung maßgeschneiderter HSM-Architekturen und PKI-Integration-Strategien für komplexe Enterprise-Umgebungen und kritische Sicherheitsanforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'HSM-Sizing und -Dimensionierung basierend auf PKI-Performance-Anforderungen und Skalierungszielen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Network-attached HSM vs. PCIe Card HSM Architektur-Bewertung und -Auswahl'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'HSM-Clustering und High Availability Design für kritische PKI-Verfügbarkeitsanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Security Policy Design und HSM-Governance-Framework-Entwicklung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'FIPS 140-2 konforme HSM-Implementierung',
          description: 'Professionelle Implementierung und Konfiguration von FIPS 140-2 zertifizierten Hardware Security Modules für höchste Sicherheitsstandards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'FIPS 140-2 Level 3/4 HSM-Auswahl und -Konfiguration für regulierte Industrien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Secure HSM-Initialization und Key Ceremony Procedures mit Multi-Person-Kontrolle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Tamper-resistant Hardware-Konfiguration und physische Sicherheitsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'HSM-Authentication und Role-based Access Control Implementation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Root CA Key Protection & Management',
          description: 'Spezialisierte HSM-Integration für Root Certificate Authority Key Protection mit höchsten Sicherheitsstandards und Offline-Betrieb.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Root CA Private Key Generation und sichere HSM-Speicherung mit Air-Gap-Isolation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Offline Root CA HSM-Betrieb und Secure Key Ceremony Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'HSM-basierte Certificate Signing Operations mit minimaler Root Key Exposure'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Root CA Key Backup und Recovery Procedures mit HSM-Redundanz'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'High Performance HSM-Clustering',
          description: 'Implementierung hochverfügbarer und skalierbarer HSM-Cluster für Enterprise-PKI-Umgebungen mit maximaler Performance und Ausfallsicherheit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'HSM-Load Balancing und Failover-Konfiguration für kontinuierliche PKI-Verfügbarkeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Geographic HSM-Distribution und Disaster Recovery Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'HSM-Performance-Monitoring und Capacity Planning für Skalierungsoptimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Automated HSM-Failover und Self-Healing Cluster-Mechanismen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'HSM-PKI Application Integration',
          description: 'Nahtlose Integration von HSM-Services in PKI-Anwendungen, Certificate Authorities und kryptographische Workflows mit standardisierten Schnittstellen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'PKCS#11 Interface Integration für standardisierte HSM-Anwendungsanbindung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Microsoft ADCS HSM-Integration und Windows PKI-Anbindung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'OpenSSL Engine Integration für Linux-basierte PKI-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Custom API Development für spezielle PKI-Anwendungen und Legacy-System-Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'HSM-Compliance & Operational Management',
          description: 'Umfassende HSM-Governance, Compliance-Management und operative Wartung für nachhaltige Sicherheit und regulatorische Konformität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'HSM-Audit und Compliance Reporting für FIPS 140-2, Common Criteria und regulatorische Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'HSM-Health Monitoring und Predictive Maintenance für proaktive Wartung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'HSM-Firmware Update Management und Security Patch Procedures'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'HSM-Incident Response und Security Operations Center (SOC) Integration'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(pkiHsmData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ PKI HSM page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
