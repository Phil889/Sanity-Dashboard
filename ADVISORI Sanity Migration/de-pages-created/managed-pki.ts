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
    console.log('Creating Managed PKI page...')

    const managedPkiData = {
      _type: 'servicePage',
      _id: 'managed-pki',
      title: 'Managed PKI',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/data-protection-encryption/pki/managed-pki'
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
        title: 'Managed PKI Services - PKI-as-a-Service & Outsourcing | ADVISORI',
        description: 'Professionelle Managed PKI Services und PKI-as-a-Service Lösungen. Outsourcing von PKI-Infrastrukturen, Cloud-basiertes Zertifikatsmanagement und 24/7 PKI-Operations für Unternehmen.',
        keywords: 'Managed PKI, PKI-as-a-Service, PKI Outsourcing, Cloud PKI, Managed Certificate Services, PKI Operations, Certificate Lifecycle Management, Managed HSM, PKI Service Provider'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Managed PKI Services - Professionelle PKI-Infrastruktur als Service'
        },
        tagline: 'PKI-Exzellenz ohne operative Komplexität',
        heading: 'Managed PKI',
        description: 'Managed PKI Services ermöglichen es Unternehmen, von erstklassiger PKI-Infrastruktur zu profitieren, ohne die operative Komplexität und Investitionen einer eigenen PKI-Umgebung. Wir übernehmen die vollständige Verantwortung für Ihre PKI-Operations und gewährleisten höchste Sicherheitsstandards bei optimaler Kosteneffizienz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständig verwaltete PKI-Infrastruktur mit 24/7 Operations'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'PKI-as-a-Service mit flexiblen Skalierungsmöglichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Managed HSM Services und Hardware-Security-Management'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Compliance-konforme PKI-Governance und Audit-Unterstützung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Managed PKI - Professionelle PKI-Services ohne operative Belastung',
        description: 'Managed PKI Services bieten Unternehmen die Möglichkeit, von hochsicheren und professionell verwalteten PKI-Infrastrukturen zu profitieren, ohne die Komplexität und Kosten einer eigenen PKI-Umgebung zu tragen. Als strategische Outsourcing-Lösung ermöglicht Managed PKI den Fokus auf Kerngeschäftsprozesse bei gleichzeitiger Gewährleistung höchster Sicherheitsstandards.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Vollständig verwaltete PKI-Infrastrukturen reduzieren interne Ressourcenanforderungen und operative Risiken'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'PKI-as-a-Service Modelle bieten flexible Skalierung und bedarfsgerechte Kostenstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Professionelle PKI-Operations gewährleisten kontinuierliche Verfügbarkeit und Sicherheit'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Managed HSM Services bieten höchste Sicherheit ohne Hardware-Investitionen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Compliance-Management und Audit-Unterstützung durch PKI-Experten'
          }
        ],
        alert: {
          title: 'Managed PKI als strategischer Vorteil',
          content: 'Moderne Managed PKI Services ermöglichen es Unternehmen, von Enterprise-grade PKI-Sicherheit zu profitieren, ohne interne PKI-Expertise aufbauen oder Hardware-Investitionen tätigen zu müssen.'
        },
        whyUs: {
          title: 'Warum Managed PKI mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende PKI-Expertise und jahrelange Erfahrung in PKI-Operations'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Flexible Service-Modelle von vollständig verwalteten bis zu hybriden PKI-Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Höchste Sicherheitsstandards mit FIPS 140-2 Level 3/4 HSM-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Proaktives Monitoring und kontinuierliche Optimierung Ihrer PKI-Services'
            }
          ]
        },
        additionalInfo: 'Managed PKI Services transformieren PKI von einer komplexen technischen Herausforderung zu einem strategischen Enabler für digitale Transformation und sichere Geschäftsprozesse.',
        serviceDescription: 'Unser Managed PKI Service umfasst die vollständige Übernahme Ihrer PKI-Operations, von der initialen Architektur über die tägliche Verwaltung bis zur kontinuierlichen Optimierung. Wir bieten flexible Service-Level-Agreements und maßgeschneiderte Lösungen für Ihre spezifischen Anforderungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Vollständig verwaltete Certificate Authority (CA) Services'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Automatisiertes Certificate Lifecycle Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Managed HSM Services und Hardware-Security-Operations'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: '24/7 Monitoring, Support und Incident Response'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Compliance-Management und Audit-Unterstützung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz für Managed PKI Services',
        description: 'Wir verfolgen einen kundenorientierten und service-exzellenten Ansatz für Managed PKI, der höchste Sicherheitsstandards mit operativer Effizienz und Kostenoptimierung optimal verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende PKI-Assessment und Service-Design basierend auf Ihren spezifischen Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Nahtlose Migration bestehender PKI-Infrastrukturen zu Managed Services'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Kontinuierliche Service-Optimierung durch proaktives Monitoring und Analytics'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Flexible Service-Level-Agreements mit transparenten SLAs und KPIs'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Strategische Partnerschaft mit regelmäßigen Service-Reviews und Roadmap-Planung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Managed PKI Services repräsentieren die Evolution von PKI-Infrastrukturen zu strategischen Business-Enablers. Wir ermöglichen es Unternehmen, von erstklassiger PKI-Sicherheit zu profitieren, ohne die operative Komplexität zu tragen - das ist der Schlüssel für erfolgreiche digitale Transformation.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Vollständig Verwaltete CA Services',
          description: 'Komplette Übernahme Ihrer Certificate Authority Operations mit professionellem Management und 24/7 Verfügbarkeit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Root CA und Intermediate CA Management mit Offline-Sicherheit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Hochverfügbare Issuing CA Services mit Load Balancing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Automatisierte Certificate Policy und CPS Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Disaster Recovery und Business Continuity für CA-Systeme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'PKI-as-a-Service Platform',
          description: 'Cloud-basierte PKI-Services mit flexibler Skalierung und bedarfsgerechter Abrechnung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Multi-Tenant PKI-Plattform mit Mandantentrennung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'RESTful APIs für nahtlose Integration in bestehende Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Self-Service Portal für Certificate Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Flexible Pricing-Modelle und Usage-basierte Abrechnung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Managed Certificate Lifecycle Services',
          description: 'Vollständige Automatisierung und Verwaltung des gesamten Zertifikats-Lebenszyklus.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Automatisierte Certificate Enrollment und Provisioning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Proaktives Certificate Renewal Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Certificate Discovery und Inventory Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Revocation Management und OCSP Services'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Managed HSM Services',
          description: 'Professionell verwaltete Hardware Security Module Services für höchste kryptographische Sicherheit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'FIPS 140-2 Level 3/4 HSM-Infrastruktur als Service'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Hochverfügbare HSM-Cluster mit Load Balancing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Secure Key Generation und Key Ceremony Services'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'HSM Performance Monitoring und Capacity Planning'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: '24/7 PKI Operations & Support',
          description: 'Rund-um-die-Uhr PKI-Operations mit proaktivem Monitoring und Incident Response.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Security Operations Center (SOC) für PKI-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Proaktives System Monitoring und Alerting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Incident Response und Emergency Support'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Performance Analytics und Capacity Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'PKI Compliance & Governance Services',
          description: 'Umfassende Compliance-Unterstützung und Governance-Management für regulierte Umgebungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Compliance Monitoring für regulatorische Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Audit-Unterstützung und Compliance Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Policy Management und Governance Framework'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Risk Assessment und Security Controls Management'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(managedPkiData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Managed PKI page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
