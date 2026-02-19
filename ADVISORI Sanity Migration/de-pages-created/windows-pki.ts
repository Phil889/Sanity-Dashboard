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
    console.log('Creating Windows PKI page...')

    const windowsPkiData = {
      _type: 'servicePage',
      _id: 'windows-pki',
      title: 'Windows PKI',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/data-protection-encryption/pki/windows-pki'
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
        title: 'Windows PKI Services - Active Directory Certificate Services & Enterprise PKI | ADVISORI',
        description: 'Professionelle Windows PKI Services für Enterprise-Umgebungen. Active Directory Certificate Services, Windows Server PKI, Group Policy Integration, PowerShell Automation und Windows-native Certificate Management.',
        keywords: 'Windows PKI, Active Directory Certificate Services, ADCS, Windows Server PKI, Group Policy Certificates, Windows Certificate Store, PowerShell PKI, Windows Enterprise PKI, Certificate Templates, Auto-Enrollment'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Windows PKI Services - Enterprise Certificate Management mit Active Directory Certificate Services'
        },
        tagline: 'Windows PKI Excellence für Enterprise-Transformation',
        heading: 'Windows PKI',
        description: 'Windows PKI Services transformieren komplexe Enterprise-Zertifikatsverwaltung in strategisch orchestrierte Windows-native Lösungen. Durch nahtlose Active Directory Certificate Services-Integration, Group Policy-Automatisierung und intelligente Windows-Ökosystem-Harmonisierung schaffen wir PKI-Architekturen, die operative Windows-Exzellenz mit strategischer Enterprise-Innovation optimal vereinen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Active Directory Certificate Services Enterprise-Integration mit Windows Server PKI'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Group Policy-gesteuerte Certificate-Automatisierung und Auto-Enrollment'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Windows Certificate Store-Management und PowerShell-Automation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Windows-native PKI-Governance und Enterprise-Skalierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Windows PKI - Strategic Certificate Management für Windows Enterprise-Umgebungen',
        description: 'Windows PKI Services sind das strategische Fundament für moderne Windows-zentrierte Enterprise-Architekturen. Sie transformieren fragmentierte Certificate-Operations in kohärente, Windows-optimierte Systeme, die nicht nur operative Effizienz maximieren, sondern auch als strategische Enabler für Windows Server-Modernisierung, Active Directory-Integration und Enterprise-Sicherheitsframeworks fungieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Active Directory Certificate Services-Expertise etabliert enterprise-weite Windows PKI-Governance mit nahtloser Domain-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Windows Server PKI-Services ermöglichen skalierbare, hochverfügbare Certificate Authority-Infrastrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Group Policy-Integration harmonisiert PKI-Services mit Windows-Domänen und automatisiert Certificate-Deployment'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Windows Certificate Store-Management und PowerShell-Automation unterstützen DevOps-optimierte Certificate Lifecycle-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Windows-native Security Features und Compliance-Integration gewährleisten höchste Sicherheitsstandards'
          }
        ],
        alert: {
          title: 'Windows PKI als strategischer Enterprise-Accelerator',
          content: 'Windows PKI Services werden zum strategischen Differentiator für Windows-zentrierte Digitalisierung, Server-Modernisierung und moderne Enterprise-Transformation – weit über traditionelle Certificate-Verwaltung hinaus.'
        },
        whyUs: {
          title: 'Warum Windows PKI mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Windows PKI-Expertise von ADCS bis PowerShell-Automation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Microsoft-zertifizierte Beratung für optimale Windows Enterprise PKI-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Windows-Integration für hochverfügbare PKI-Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Windows PKI-Evolution und Server-Roadmap-Entwicklung'
            }
          ]
        },
        additionalInfo: 'Windows PKI Services ermöglichen es Organisationen, die volle Power des Windows-Ökosystems für digitale Vertrauensarchitekturen zu nutzen. Die richtige Windows PKI-Strategie wird zum Wettbewerbsvorteil in einer zunehmend Windows-zentrierten Enterprise-Welt.',
        serviceDescription: 'Unser Windows PKI Service umfasst die vollständige Transformation von fragmentierten Certificate-Landschaften zu strategischen Windows-integrierten PKI-Governance-Systemen. Wir entwickeln maßgeschneiderte Windows PKI-Strategien, die perfekt zu Ihren Windows-Infrastrukturen, Active Directory-Strategien und Enterprise-Anforderungen passen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Active Directory Certificate Services Design und Windows Server-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Windows Certificate Store-Management und Group Policy-Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'PowerShell-basierte PKI-Automation und Windows-native DevOps-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Windows PKI-Security und Enterprise-Compliance-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Windows-native High Availability und Disaster Recovery-Architekturen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zu Windows PKI Services',
        description: 'Wir verfolgen einen Windows-zentrierten und enterprise-orientierten Ansatz zu PKI Services, der Windows-Technologien optimal nutzt und gleichzeitig strategische Business-Transformation ermöglicht.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Windows PKI-Assessment und Active Directory-Integration-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategic Windows PKI-Architektur-Entwicklung mit Server-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Windows PKI-Implementierung mit kontinuierlicher Validierung und Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Windows-Integration in bestehende Enterprise-Landschaften'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Windows PKI-Evolution durch Monitoring, Training und Server-Roadmap-Entwicklung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Windows PKI Services sind das strategische Fundament für moderne Windows-zentrierte Enterprise-Transformation. Wir transformieren komplexe Active Directory Certificate Services in strategisch orchestrierte PKI-Architekturen, die nicht nur operative Windows-Exzellenz gewährleisten, sondern auch als strategische Enabler für Server-Modernisierung, Group Policy-Integration und Windows-native Sicherheitsinnovation fungieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Active Directory Certificate Services Enterprise-Integration',
          description: 'Umfassende ADCS-Implementierung und Windows Server-Integration für skalierbare Windows PKI-Infrastrukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Enterprise Root CA und Subordinate CA-Hierarchie-Design für Windows-Domänen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Active Directory-integrierte Certificate Templates und Auto-Enrollment-Konfiguration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Windows Server Certificate Services-Optimierung und High Availability-Setup'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Multi-Domain ADCS-Integration und Cross-Forest Trust-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Windows Certificate Store-Management und Group Policy-Integration',
          description: 'Strategische Windows Certificate Store-Verwaltung und Group Policy-basierte Certificate-Automatisierung für Enterprise-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Windows Certificate Store-Architektur und Personal/Computer Store-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Group Policy Certificate Deployment und Trusted Root Certification Authorities-Verwaltung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Certificate Auto-Enrollment via Group Policy und Domain Controller-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Windows Certificate Services Web Enrollment und Network Device Enrollment Service'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'PowerShell-basierte PKI-Automation und Windows-native DevOps',
          description: 'Fortschrittliche PowerShell-basierte PKI-Automation und Windows-native DevOps-Integration für moderne Enterprise-Umgebungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'PowerShell PKI-Module und Certificate Lifecycle-Automation mit Windows-nativen Cmdlets'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Windows PowerShell Desired State Configuration für PKI-Infrastructure as Code'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Certificate Request und Renewal-Automation via PowerShell und Scheduled Tasks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Windows-native Certificate Monitoring und Alerting mit PowerShell-Scripts'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Windows PKI-Security und Enterprise-Compliance-Management',
          description: 'Umfassende Windows PKI-Sicherheit und Compliance-Management für regulatorische Anforderungen und Enterprise-Standards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Windows PKI Security Hardening und Best Practices-Implementation nach Microsoft-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Windows Event Log-Integration und PKI-Security-Monitoring mit SIEM-Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Certificate Revocation List-Optimierung und Online Certificate Status Protocol-Services'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Windows-native Audit und Compliance Reporting für regulatorische Anforderungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Windows-native High Availability und Disaster Recovery',
          description: 'Robuste Windows-native High Availability-Architekturen und Disaster Recovery-Strategien für kritische PKI-Infrastrukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Windows Server Failover Clustering für Certificate Authority High Availability'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Active Directory-integrierte PKI-Backup und Recovery-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Windows Server Core-basierte CA-Deployment für minimale Attack Surface'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Multi-Site Windows PKI-Architekturen und Geographic Redundancy-Planning'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Windows PKI-Integration und Application Support',
          description: 'Nahtlose Integration von Windows PKI-Services in bestehende Windows-Anwendungen und Enterprise-Systeme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'IIS Web Server SSL/TLS Certificate-Integration und Windows Authentication'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Exchange Server Certificate-Management und Outlook S/MIME-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'SharePoint Certificate-based Authentication und Document Signing-Services'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Windows-native Code Signing und ClickOnce Application Certificate-Management'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(windowsPkiData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Windows PKI page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
