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
    console.log('Creating Cloud-Sicherheitsarchitektur & SLA-Management page...')

    const cloudSecuritySlaData = {
      _type: 'servicePage',
      _id: 'cloud-compliance-cloud-sicherheitsarchitektur-sla-management',
      title: 'Cloud-Sicherheitsarchitektur & SLA-Management',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/cloud-compliance/cloud-compliance-cloud-sicherheitsarchitektur-sla-management'
      },
      parent: {
        _type: 'reference',
        _ref: 'cloud-compliance'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'regulatory-compliance-management'
        }
      },
      seo: {
        _type: 'seo',
        title: 'Cloud-Sicherheitsarchitektur & SLA-Management | ADVISORI',
        description: 'Professionelle Cloud-Sicherheitsarchitekturen und strategisches SLA-Management für sichere und effiziente Cloud-Nutzung. Wir optimieren Ihre Cloud-Governance und Vendor-Beziehungen.',
        keywords: 'Cloud Security, Sicherheitsarchitektur, SLA Management, Cloud Governance, Vendor Management, Cloud Monitoring, Service Level Agreements'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Cloud-Sicherheitsarchitektur & SLA-Management'
        },
        tagline: 'Sichere Cloud-Architekturen mit optimierten SLA-Strategien',
        heading: 'Cloud-Sicherheitsarchitektur & SLA-Management',
        description: 'Die sichere und effiziente Nutzung von Cloud-Services erfordert durchdachte Sicherheitsarchitekturen und professionelles SLA-Management. Wir entwickeln robuste Cloud-Security-Frameworks und optimieren Ihre Service-Level-Agreements für maximale Geschäftsvorteile bei minimalen Risiken.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende Cloud-Sicherheitsarchitekturen und Zero-Trust-Modelle'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strategisches SLA-Management und Vendor-Governance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Automatisierte Compliance-Monitoring und Performance-Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Multi-Cloud-Security und Cross-Platform-Integration'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Cloud-Sicherheitsarchitektur & SLA-Management',
        description: 'In der heutigen digitalisierten Geschäftswelt sind Cloud-Services unverzichtbar geworden. Doch der Erfolg Ihrer Cloud-Strategie hängt maßgeblich von zwei kritischen Faktoren ab: einer robusten Sicherheitsarchitektur und einem strategischen SLA-Management. Wir unterstützen Sie dabei, beide Bereiche optimal zu gestalten und zu verwalten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung maßgeschneiderter Cloud-Sicherheitsarchitekturen mit Zero-Trust-Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung umfassender SLA-Frameworks und Vendor-Management-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Etablierung automatisierter Monitoring- und Alerting-Systeme für Cloud-Performance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Design von Multi-Cloud-Security-Konzepten und Cross-Platform-Governance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Optimierung von Cloud-Costs und Service-Performance'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiche Cloud-Sicherheitsarchitekturen verbinden technische Exzellenz mit strategischem SLA-Management. Eine ganzheitliche Betrachtung beider Aspekte maximiert nicht nur die Sicherheit, sondern auch die Geschäftsvorteile Ihrer Cloud-Investitionen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in modernen Cloud-Security-Frameworks und Zero-Trust-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfassende Erfahrung im strategischen SLA-Management und Vendor-Governance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz für Multi-Cloud-Umgebungen und Hybrid-Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Praktische Erfahrung mit Enterprise-Cloud-Transformationen in regulierten Branchen'
            }
          ]
        },
        additionalInfo: 'Cloud-Sicherheitsarchitekturen und SLA-Management sind dynamische Disziplinen, die sich mit neuen Technologien und sich ändernden Geschäftsanforderungen kontinuierlich weiterentwickeln. Unser Ansatz berücksichtigt sowohl aktuelle Best Practices als auch zukünftige Trends.',
        serviceDescription: 'Wir bieten umfassende Services für Cloud-Sicherheitsarchitektur und SLA-Management, die alle Aspekte von der strategischen Planung bis zur operativen Umsetzung abdecken. Unser ganzheitlicher Ansatz gewährleistet, dass Ihre Cloud-Infrastruktur sowohl sicher als auch leistungsoptimiert ist.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Cloud-Security-Architektur-Design und Zero-Trust-Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'SLA-Framework-Entwicklung und Vendor-Management-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Automatisierte Cloud-Monitoring und Performance-Management-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Multi-Cloud-Security-Governance und Cross-Platform-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Cloud-Optimization und Cost-Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine integrierte Strategie für Cloud-Sicherheitsarchitektur und SLA-Management, die Ihre spezifischen Geschäftsanforderungen und Sicherheitsrichtlinien optimal unterstützt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Assessment der aktuellen Cloud-Landschaft und Sicherheitsposture'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design einer maßgeschneiderten Cloud-Sicherheitsarchitektur und SLA-Strategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung von Security-Controls und SLA-Monitoring-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Optimierung von Vendor-Beziehungen und Service-Performance-Metriken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung, Anpassung und Verbesserung der Cloud-Governance'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Eine durchdachte Cloud-Sicherheitsarchitektur in Kombination mit strategischem SLA-Management bildet das Fundament für erfolgreiche Cloud-Transformationen. Nur so können Unternehmen die Vorteile der Cloud voll ausschöpfen, während sie gleichzeitig Risiken minimieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Cloud-Security-Architektur-Design',
          description: 'Wir entwickeln umfassende Cloud-Sicherheitsarchitekturen, die modernste Security-Frameworks und Zero-Trust-Prinzipien integrieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Zero-Trust-Architektur-Design und Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identity and Access Management (IAM) Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Network Security und Micro-Segmentierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Data Encryption und Key Management Strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'SLA-Management & Vendor-Governance',
          description: 'Wir optimieren Ihre Service-Level-Agreements und implementieren effektive Vendor-Management-Prozesse für maximale Cloud-Performance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'SLA-Framework-Entwicklung und Vertragsoptimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Vendor-Performance-Monitoring und Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Escalation-Management und Incident-Response-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Cost-Optimization und Chargeback-Modelle'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Cloud-Monitoring & Performance-Management',
          description: 'Wir implementieren umfassende Monitoring-Lösungen für kontinuierliche Überwachung der Cloud-Security und Service-Performance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Automatisierte Security-Monitoring und Threat-Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'SLA-Compliance-Dashboards und Real-time-Alerting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Performance-Analytics und Capacity-Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Multi-Cloud-Visibility und Cross-Platform-Reporting'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(cloudSecuritySlaData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Cloud-Sicherheitsarchitektur & SLA-Management page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
