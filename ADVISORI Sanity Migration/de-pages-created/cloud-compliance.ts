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
    console.log('Creating Cloud Compliance page...')

    const cloudComplianceData = {
      _type: 'servicePage',
      _id: 'cloud-compliance',
      title: 'Cloud Compliance',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/cloud-compliance'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management-standards-frameworks'
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
        title: 'Cloud Compliance | ADVISORI',
        description: 'Umfassende Cloud Compliance-Lösungen für sichere und konforme Cloud-Nutzung. Wir unterstützen Sie bei Cloud-Governance, Sicherheitsarchitektur und regulatorischer Compliance in Cloud-Umgebungen.',
        keywords: 'Cloud Compliance, Cloud Security, Cloud Governance, Multi-Cloud, Hybrid Cloud, Cloud Audits, SLA Management, ISO 27001, SOC 2'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Cloud Compliance'
        },
        tagline: 'Sichere und konforme Cloud-Transformation',
        heading: 'Cloud Compliance',
        description: 'Cloud-Technologien bieten immense Chancen, bringen aber auch komplexe Compliance-Herausforderungen mit sich. Wir unterstützen Sie dabei, Cloud-Services sicher und regelkonform zu nutzen, während Sie maximale Geschäftsvorteile erzielen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Sichere Cloud-Architekturen und Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Compliance mit regulatorischen Anforderungen in Cloud-Umgebungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Optimierte SLA-Verwaltung und Vendor-Management'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Multi-Cloud und Hybrid-Cloud Governance-Strategien'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Cloud Compliance',
        description: 'Die Migration in die Cloud und die Nutzung von Cloud-Services erfordern spezielle Compliance-Maßnahmen und Sicherheitskonzepte. Cloud Compliance umfasst die Einhaltung regulatorischer Anforderungen, Datenschutzbestimmungen und Sicherheitsstandards in Cloud-Umgebungen. Wir unterstützen Sie dabei, die Vorteile der Cloud zu nutzen, während Sie gleichzeitig höchste Sicherheits- und Compliance-Standards einhalten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung umfassender Cloud-Sicherheitsarchitekturen und Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung von Cloud-spezifischen Compliance-Kontrollen und Monitoring-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Durchführung von Cloud-Security-Audits und Compliance-Assessments'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Optimierung von SLA-Management und Vendor-Governance-Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Multi-Cloud und Hybrid-Cloud Governance und Orchestrierung'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiche Cloud Compliance erfordert nicht nur technische Maßnahmen, sondern auch eine klare Governance-Strategie, die sowohl die geteilten Verantwortlichkeiten mit Cloud-Providern als auch die spezifischen regulatorischen Anforderungen Ihrer Branche berücksichtigt.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in Cloud-Technologien und regulatorischen Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung mit allen großen Cloud-Plattformen und Hybrid-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz für Cloud Security, Governance und Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Praktische Erfahrung mit Cloud-Transformationsprojekten in regulierten Branchen'
            }
          ]
        },
        additionalInfo: 'Cloud Compliance ist ein dynamisches Feld, das sich ständig weiterentwickelt. Neue Cloud-Services, veränderte regulatorische Anforderungen und evolvierende Bedrohungslandschaften erfordern kontinuierliche Anpassungen und Optimierungen Ihrer Cloud-Compliance-Strategie.',
        serviceDescription: 'Wir bieten umfassende Cloud Compliance-Services, die alle Aspekte der sicheren und konformen Cloud-Nutzung abdecken. Von der strategischen Planung bis zur operativen Umsetzung unterstützen wir Sie dabei, Ihre Cloud-Transformation erfolgreich und compliant zu gestalten.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Cloud-Sicherheitsarchitektur und Governance-Framework-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Cloud-Security-Audits und Compliance-Assessments'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'SLA-Management und Vendor-Governance-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Multi-Cloud und Hybrid-Cloud Governance-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Cloud-Compliance-Monitoring und Incident-Response-Prozesse'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine maßgeschneiderte Cloud Compliance-Strategie, die Ihre spezifischen Geschäftsanforderungen und regulatorischen Verpflichtungen berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Durchführung einer umfassenden Cloud-Readiness und Compliance-Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer strategischen Cloud-Compliance-Roadmap und Governance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung von Cloud-Security-Kontrollen und Monitoring-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Optimierung von Vendor-Management und SLA-Governance-Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung, Validierung und Weiterentwicklung der Cloud-Compliance-Maßnahmen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Die Cloud bietet Unternehmen enormes Potenzial für Innovation und Effizienz. Mit der richtigen Compliance-Strategie können Organisationen diese Vorteile nutzen, ohne Kompromisse bei Sicherheit oder regulatorischer Konformität einzugehen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Cloud-Sicherheitsarchitektur und SLA-Management',
          description: 'Wir entwickeln umfassende Cloud-Sicherheitsarchitekturen und implementieren effektive SLA-Management-Prozesse für eine sichere und konforme Cloud-Nutzung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Design und Implementierung von Cloud-Security-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung von SLA-Frameworks und Vendor-Management-Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Implementierung von Cloud-Access-Controls und Identity-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Etablierung von Cloud-Monitoring und Alerting-Systemen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Cloud-Audits und Zertifizierungen',
          description: 'Wir führen umfassende Cloud-Security-Audits durch und unterstützen Sie bei der Erlangung relevanter Zertifizierungen wie ISO 27001 oder SOC 2.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Durchführung von Cloud-Security-Assessments und Penetrationstests'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Vorbereitung und Begleitung von ISO 27001 und SOC 2 Zertifizierungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Cloud-Provider-Audits und Due-Diligence-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Compliance-Reporting und Stakeholder-Kommunikation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Multi-Cloud und Hybrid-Cloud Governance',
          description: 'Wir unterstützen Sie bei der Entwicklung und Implementierung von Governance-Strategien für komplexe Multi-Cloud und Hybrid-Cloud-Umgebungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Entwicklung von Multi-Cloud-Governance-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Hybrid-Cloud-Integration und Orchestrierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Cloud-Workload-Migration und Compliance-Mapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Cross-Cloud-Security-Monitoring und Incident-Response'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(cloudComplianceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Cloud Compliance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
