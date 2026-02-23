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
    console.log('Creating HSM PKI page...')

    const hsmPkiData = {
      _type: 'servicePage',
      _id: 'hsm-pki',
      title: 'HSM PKI',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/data-protection-encryption/pki/hsm-pki'
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
        title: 'HSM PKI - Hardware Security Module PKI Solutions | ADVISORI',
        description: 'Professionelle HSM PKI Services für höchste Sicherheitsanforderungen. Hardware Security Module PKI, FIPS 140-2 Level 3/4 Compliance, Tamper-resistant Certificate Authorities und Enterprise HSM Integration.',
        keywords: 'HSM PKI, Hardware Security Module PKI, FIPS 140-2, Tamper-resistant PKI, Hardware Certificate Authority, HSM Integration, Cryptographic Key Protection, High-Security PKI, Enterprise HSM, Cloud HSM PKI'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'HSM PKI - Hardware Security Module PKI Solutions für höchste Sicherheitsanforderungen'
        },
        tagline: 'Hardware-basierte Sicherheit trifft auf PKI-Excellence',
        heading: 'HSM PKI',
        description: 'HSM PKI repräsentiert die höchste Stufe kryptographischer Sicherheit durch Hardware Security Module-basierte Public Key Infrastructure. Durch tamper-resistant Hardware, FIPS 140-2 Level 3/4 Compliance und uncompromittierbare Schlüsselschutz schaffen wir PKI-Lösungen, die selbst höchsten Sicherheitsanforderungen gerecht werden und als vertrauensvolle Basis für kritische Geschäftsprozesse fungieren.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'FIPS 140-2 Level 3/4 Hardware Security Module Integration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Tamper-resistant Certificate Authority und Key Protection'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Enterprise HSM Integration und Cloud HSM Services'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'High-Availability HSM Clustering und Disaster Recovery'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'HSM PKI - Hardware Security Module PKI für höchste Sicherheitsanforderungen',
        description: 'HSM PKI etabliert Hardware Security Modules als uncompromittierbare Basis für Public Key Infrastructure-Operationen. Es transformiert traditionelle software-basierte PKI-Systeme in hardware-geschützte Vertrauensarchitekturen, die nicht nur höchste Sicherheitsstandards erfüllen, sondern auch als strategische Enabler für regulierte Industrien, kritische Infrastrukturen und hochsensible Geschäftsprozesse fungieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Hardware Security Module Integration bietet tamper-resistant Schutz für Root CA Private Keys und kritische kryptographische Operationen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'FIPS 140-2 Level 3/4 Compliance gewährleistet höchste Sicherheitsstandards für regulierte Umgebungen und kritische Infrastrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Enterprise HSM Integration harmonisiert On-Premises und Cloud HSM Services in einheitlichen PKI-Management-Plattformen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'High-Availability HSM Clustering ermöglicht ausfallsichere PKI-Operationen mit automatischem Failover und Load Balancing'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Advanced Cryptographic Operations unterstützen Post-Quantum-Kryptographie und zukunftssichere Verschlüsselungsverfahren'
          }
        ],
        alert: {
          title: 'HSM PKI als Fundament für Zero Trust und Quantum-Ready Security',
          content: 'Moderne HSM PKI wird zum strategischen Differentiator für Zero Trust-Architekturen, Quantum-Ready-Kryptographie und vertrauensbasierte AI-Systeme – weit über traditionelle Certificate-Sicherheit hinaus.'
        },
        whyUs: {
          title: 'Warum HSM PKI mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende HSM PKI-Expertise von Hardware-Integration bis Enterprise-Deployment'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Beratung für optimale HSM-Technologie und PKI-Architektur-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte High-Availability-Frameworks für ausfallsichere HSM PKI-Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche HSM PKI-Evolution und Quantum-Ready-Roadmap-Entwicklung'
            }
          ]
        },
        additionalInfo: 'HSM PKI ermöglicht es Organisationen, kryptographische Vertrauensbeziehungen auf höchstem Sicherheitsniveau zu etablieren. Die richtige HSM PKI-Strategie wird zum Wettbewerbsvorteil in einer zunehmend bedrohungsorientierten und regulierten Geschäftswelt.',
        serviceDescription: 'Unser HSM PKI Service umfasst die vollständige Transformation von software-basierten PKI-Systemen zu hardware-geschützten Certificate Authority-Infrastrukturen. Wir entwickeln maßgeschneiderte HSM PKI-Strategien, die perfekt zu Ihren Sicherheits-, Compliance- und Geschäftsanforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Hardware Security Module Integration und FIPS 140-2 Compliance-Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Tamper-resistant Certificate Authority Design und Root Key Protection'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Enterprise HSM Integration und Cloud HSM Service-Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'High-Availability HSM Clustering und Disaster Recovery-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Quantum-Ready Cryptography und Post-Quantum-Migration-Planning'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zur HSM PKI',
        description: 'Wir verfolgen einen hardware-zentrierten und compliance-orientierten Ansatz zur HSM PKI, der höchste Sicherheitsstandards mit operativer Exzellenz optimal verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende HSM-Assessment und Hardware Security-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'FIPS 140-2 Compliance-Entwicklung mit Hardware Security Module-Design'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise HSM PKI-Implementierung mit kontinuierlicher Security-Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Enterprise-Integration in bestehende Security- und Compliance-Landschaften'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige HSM PKI-Evolution durch Monitoring, Training und Quantum-Ready-Roadmap-Entwicklung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'HSM PKI repräsentiert die Zukunft hardware-geschützter Vertrauensarchitekturen. Wir transformieren traditionelle PKI-Systeme in tamper-resistant Hardware Security Module-basierte Infrastrukturen, die nicht nur höchste Sicherheitsstandards gewährleisten, sondern auch als strategische Enabler für Zero Trust-Implementierung, Quantum-Ready-Kryptographie und vertrauensbasierte AI-Security-Excellence fungieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Hardware Security Module Integration & FIPS Compliance',
          description: 'Umfassende HSM-Integration und FIPS 140-2 Level 3/4 Compliance-Implementierung für höchste PKI-Sicherheitsstandards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'FIPS 140-2 Level 3/4 Hardware Security Module-Auswahl und Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Tamper-resistant Hardware-Konfiguration und Security Policy-Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'HSM Performance-Optimierung und Cryptographic Operation-Tuning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Compliance Validation und Certification Support für regulierte Umgebungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Tamper-resistant Certificate Authority Design',
          description: 'Hardware-geschützte Certificate Authority-Architekturen mit uncompromittierbarem Root Key Protection und Secure Key Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Root CA Private Key Protection in tamper-resistant Hardware Security Modules'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Secure Key Generation und Hardware-based Random Number Generation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Certificate Signing Operation-Isolation und Hardware-enforced Security Policies'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Multi-level Authentication und Role-based HSM Access Control'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Enterprise HSM Integration & Cloud HSM Services',
          description: 'Nahtlose Integration von On-Premises und Cloud HSM Services in einheitlichen Enterprise PKI-Plattformen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Hybrid HSM Architecture-Design mit On-Premises und Cloud HSM-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Multi-Cloud HSM Service-Orchestrierung und Vendor-agnostic Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'HSM API Integration und Enterprise Application-Connectivity'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Secure HSM Network-Connectivity und Encrypted Communication Channels'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'High-Availability HSM Clustering & Disaster Recovery',
          description: 'Ausfallsichere HSM PKI-Infrastrukturen mit automatischem Failover, Load Balancing und umfassenden Disaster Recovery-Strategien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'HSM Cluster-Konfiguration mit automatischem Failover und Load Distribution'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Geographic HSM Distribution und Multi-Site Disaster Recovery-Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'HSM Backup und Secure Key Recovery-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Business Continuity Planning und HSM Service Level Agreement-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'HSM PKI Security Operations & Monitoring',
          description: 'Umfassende Security Operations und Real-time Monitoring für proaktive HSM PKI-Sicherheit und Compliance-Überwachung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'HSM Security Event Monitoring und Tamper Detection-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Real-time HSM Performance Monitoring und Capacity Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'HSM Audit Logging und Compliance Reporting-Automation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Incident Response Integration und HSM Security Incident-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Quantum-Ready Cryptography & Future-Proofing',
          description: 'Zukunftssichere HSM PKI-Strategien mit Post-Quantum-Kryptographie-Unterstützung und Crypto-Agility-Frameworks.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Post-Quantum Cryptography-Integration und Quantum-resistant Algorithm-Support'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Crypto-Agility Framework-Implementierung für flexible Algorithm-Migration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'HSM Firmware-Update-Strategien und Security Patch-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Future Technology-Roadmap und HSM Evolution-Planning'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(hsmPkiData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ HSM PKI page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
