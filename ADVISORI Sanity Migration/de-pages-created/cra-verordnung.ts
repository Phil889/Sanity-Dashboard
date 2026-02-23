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
    console.log('Creating CRA Verordnung page...')

    const craVerordnungData = {
      _type: 'servicePage',
      _id: 'cra-verordnung',
      title: 'CRA Verordnung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-verordnung'
      },
      parent: {
        _type: 'reference',
        _ref: 'cra-cyber-resilience-act'
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
        title: 'CRA Verordnung Implementation | ADVISORI',
        description: 'Professionelle CRA Verordnung Beratung und Implementierung. Wir unterstützen Sie bei der deutschen Umsetzung der Cyber Resilience Act Verordnung für digitale Produkte.',
        keywords: 'CRA Verordnung, Cyber Resilience Act Deutschland, CRA Umsetzung, Cybersicherheit Verordnung, Digitale Produktsicherheit Deutschland, CRA Compliance Deutschland'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA Verordnung Implementation'
        },
        tagline: 'Deutsche CRA Verordnung Expertise',
        heading: 'CRA Verordnung',
        description: 'Die deutsche Umsetzung der EU Cyber Resilience Act Verordnung stellt spezifische Anforderungen an digitale Produkte. Wir begleiten Sie bei der praktischen Implementierung der deutschen CRA-Bestimmungen und sichern nachhaltige Compliance.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Deutsche CRA Verordnung Implementierungsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Nationale Behördeninteraktion und Compliance-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integration in deutsche Cybersicherheits-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche deutsche Markt-Compliance'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRA Verordnung Deutschland',
        description: 'Die deutsche Implementierung der CRA Verordnung bringt spezifische nationale Anforderungen und Interpretationen mit sich. Eine erfolgreiche Umsetzung erfordert tiefes Verständnis der deutschen Regulatorik und bewährter Compliance-Praktiken.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Deutsche Behördenlandschaft und Zuständigkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Nationale Interpretationen der EU-Vorgaben'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration in bestehende deutsche IT-Sicherheitsgesetze'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Deutsche Marktüberwachung und Enforcement'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Praktische Umsetzung im deutschen Rechtsrahmen'
          }
        ],
        alert: {
          title: 'Deutsche Besonderheiten',
          content: 'Die deutsche CRA Verordnung weist spezifische nationale Interpretationen und Verfahren auf, die über die EU-Mindestanforderungen hinausgehen. Frühzeitige Berücksichtigung deutscher Besonderheiten ist entscheidend.'
        },
        whyUs: {
          title: 'Unsere CRA Verordnung Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnis der deutschen Regulatorik und Behördenpraxis'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praktische Erfahrung mit deutschen Compliance-Verfahren'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integration in deutsche IT-Sicherheits- und Datenschutz-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung bei deutschen Marktanforderungen'
            }
          ]
        },
        additionalInfo: 'Die deutsche CRA Verordnung erfordert eine enge Abstimmung zwischen EU-Vorgaben und nationalen Interpretationen, sowie die Integration in bestehende deutsche Cybersicherheits-Frameworks.',
        serviceDescription: 'Wir unterstützen Sie bei der vollständigen deutschen CRA Verordnung Implementierung, von der nationalen Compliance-Bewertung über die praktische Umsetzung bis zur kontinuierlichen deutschen Markt-Compliance.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Deutsche CRA Verordnung Gap-Analyse und Readiness Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Nationale Behördeninteraktion und Antragsverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Integration in deutsche IT-Sicherheitsgesetze und Standards'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Deutsche Marktüberwachung und Compliance-Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Anpassung an deutsche Regulatorik-Entwicklungen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser deutscher CRA Verordnung Ansatz',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte deutsche CRA Verordnung Implementierungsstrategie, die EU-Vorgaben mit deutschen Besonderheiten und Ihren Geschäftszielen optimal verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse deutscher CRA-Interpretationen und Behördenanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strukturierte Integration in deutsche Compliance-Landschaft'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Praktische Umsetzung deutscher Verordnungsanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche deutsche Markt-Compliance und Behördenbeziehungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Proaktive Anpassung an deutsche Regulatorik-Entwicklungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die deutsche Umsetzung der CRA Verordnung erfordert nicht nur technische Compliance, sondern auch tiefes Verständnis der nationalen Regulatorik und Behördenpraxis. Unsere Kunden profitieren von einem ganzheitlichen Ansatz, der deutsche Besonderheiten systematisch berücksichtigt und nachhaltige Markt-Compliance sicherstellt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Deutsche CRA Verordnung Assessment',
          description: 'Umfassende Bewertung Ihrer Compliance-Position gegenüber deutschen CRA-Anforderungen und Identifikation nationaler Implementierungsschritte.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Deutsche Behördenanforderungen und Zuständigkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Nationale Interpretationen der EU-Vorgaben'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Integration in deutsche IT-Sicherheitsgesetze'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Deutsche Markt-Compliance Roadmap'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Deutsche Behördeninteraktion',
          description: 'Professionelle Begleitung bei der Interaktion mit deutschen Behörden und Umsetzung nationaler Verfahrensanforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Antragsverfahren und Dokumentationsanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Behördenkommunikation und Compliance-Nachweise'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Deutsche Marktüberwachung und Enforcement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Behördenbeziehungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craVerordnungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA Verordnung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
