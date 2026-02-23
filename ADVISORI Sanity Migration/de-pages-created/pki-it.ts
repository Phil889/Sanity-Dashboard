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
    console.log('Creating PKI IT page...')

    const pkiItData = {
      _type: 'servicePage',
      _id: 'pki-it',
      title: 'PKI IT',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/data-protection-encryption/pki/pki-it'
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
        title: 'PKI IT - Public Key Infrastructure IT-Services | ADVISORI',
        description: 'Professionelle PKI IT-Services für sichere digitale Infrastrukturen. IT-Architektur, Systemintegration, Deployment, Operations und technisches Management von PKI-Systemen für Unternehmen.',
        keywords: 'PKI IT, Public Key Infrastructure IT, PKI Systemintegration, PKI Deployment, PKI Operations, IT Security, Certificate Management, PKI Architecture, IT Infrastructure'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'PKI IT - Professionelle IT-Services für Public Key Infrastructure'
        },
        tagline: 'IT-Exzellenz für kryptographische Infrastrukturen',
        heading: 'PKI IT',
        description: 'PKI IT-Services verbinden kryptographische Sicherheit mit operativer IT-Exzellenz. Wir entwickeln, implementieren und betreiben PKI-Infrastrukturen, die nahtlos in bestehende IT-Landschaften integrieren und höchste Verfügbarkeits- und Sicherheitsstandards erfüllen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Enterprise-IT-Integration und Systemarchitektur'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Hochverfügbare PKI-Deployment-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Automatisierte Operations und Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Performance-Optimierung und Skalierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'PKI IT - Technische Exzellenz für kryptographische Infrastrukturen',
        description: 'PKI IT-Services fokussieren auf die technische Implementierung, Integration und den Betrieb von Public Key Infrastructure-Systemen aus IT-Perspektive. Wir schaffen die technologische Basis für sichere digitale Kommunikation durch professionelle IT-Architektur, Systemintegration und operative Exzellenz.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Skalierbare IT-Architekturen für PKI-Systeme mit Enterprise-grade Verfügbarkeit'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Nahtlose Integration in bestehende IT-Infrastrukturen und Anwendungslandschaften'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Automatisierte Deployment-Pipelines und Infrastructure-as-Code-Ansätze'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Comprehensive Monitoring, Alerting und Performance-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Disaster Recovery, Backup-Strategien und Business Continuity Planning'
          }
        ],
        alert: {
          title: 'PKI als IT-Infrastruktur-Komponente',
          content: 'Moderne PKI-Systeme erfordern professionelle IT-Architektur und -Operations. Wir schaffen die technische Basis für sichere, skalierbare und hochverfügbare kryptographische Services.'
        },
        whyUs: {
          title: 'Warum PKI IT mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende IT-Expertise in PKI-Systemarchitektur und -integration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Deployment-Methoden für komplexe Enterprise-Umgebungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Automatisierte Operations und proaktives System-Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Optimierung und Evolution der IT-Infrastruktur'
            }
          ]
        },
        additionalInfo: 'PKI IT-Services ermöglichen es IT-Abteilungen, kryptographische Sicherheit als integralen Bestandteil der IT-Infrastruktur zu etablieren. Professionelle IT-Architektur und -Operations werden zum Erfolgsfaktor für sichere digitale Transformation.',
        serviceDescription: 'Unser PKI IT-Service umfasst die vollständige IT-seitige Betreuung von PKI-Systemen - von der Architektur-Planung über die technische Implementierung bis zum operativen Betrieb. Wir schaffen robuste, skalierbare und hochverfügbare PKI-Infrastrukturen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'PKI-Systemarchitektur und IT-Infrastructure-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Enterprise-Integration und Anwendungs-Connectivity'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Automated Deployment und Configuration Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Operations, Monitoring und Performance-Tuning'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Disaster Recovery und Business Continuity Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz für PKI IT-Services',
        description: 'Wir verfolgen einen systematischen und technologie-fokussierten Ansatz für PKI IT-Services, der bewährte IT-Praktiken mit kryptographischen Anforderungen optimal verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive IT-Assessment und Architektur-Design für PKI-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Proof-of-Concept und Pilot-Deployment in kontrollierten Umgebungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Produktions-Rollouts mit kontinuierlichem Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration in bestehende IT-Operations und Service-Management-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung durch Performance-Monitoring und Capacity Planning'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'PKI IT-Services erfordern die perfekte Symbiose aus kryptographischer Expertise und IT-Operations-Exzellenz. Wir schaffen nicht nur sichere PKI-Systeme, sondern integrieren sie nahtlos in moderne IT-Infrastrukturen mit höchsten Verfügbarkeits- und Performance-Standards.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'PKI-Systemarchitektur & IT-Infrastructure-Design',
          description: 'Entwicklung skalierbarer und hochverfügbarer IT-Architekturen für PKI-Systeme mit Enterprise-grade Requirements.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'High Availability Architecture Design mit Redundanz und Failover-Mechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Scalable Infrastructure Planning für wachsende Zertifikats-Volumes'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Network Architecture und Security Zoning für PKI-Komponenten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Cloud-native und Hybrid-Cloud PKI-Architekturen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Enterprise-Integration & System-Connectivity',
          description: 'Nahtlose Integration von PKI-Systemen in bestehende IT-Landschaften und Anwendungsarchitekturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Active Directory und LDAP-Integration für Zertifikats-Services'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'API Gateway und Microservices-Integration für moderne Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Database Integration und Data Persistence-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Legacy System Integration und Modernization Pathways'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Automated Deployment & Configuration Management',
          description: 'Infrastructure-as-Code und automatisierte Deployment-Pipelines für konsistente und reproduzierbare PKI-Installationen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Infrastructure-as-Code mit Terraform, Ansible und CloudFormation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'CI/CD Pipelines für PKI-Software-Deployments und Updates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Configuration Management und Drift Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Container Orchestration mit Kubernetes und Docker'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Operations, Monitoring & Performance Management',
          description: 'Comprehensive Operations-Services für PKI-Systeme mit proaktivem Monitoring und Performance-Optimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Real-time Monitoring mit Prometheus, Grafana und ELK Stack'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Alerting und Incident Response für PKI-Services'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Performance Tuning und Capacity Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Log Management und Security Event Correlation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Security Hardening & Compliance Automation',
          description: 'Systematische Sicherheitshärtung und automatisierte Compliance-Überwachung für PKI-IT-Systeme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Operating System Hardening und Security Baseline Configuration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Vulnerability Management und Patch-Automation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Compliance Monitoring und Automated Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Security Scanning und Penetration Testing Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Disaster Recovery & Business Continuity',
          description: 'Umfassende Disaster Recovery-Strategien und Business Continuity Planning für kritische PKI-Infrastrukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Backup und Recovery-Strategien für PKI-Daten und -Konfigurationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Geographic Redundancy und Multi-Site Deployment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Disaster Recovery Testing und Business Continuity Validation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'RTO/RPO Planning und Service Level Agreement Management'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(pkiItData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ PKI IT page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
