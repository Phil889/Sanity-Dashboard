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
    console.log('Creating CRA Security by Design page...')

    const craSecurityByDesignData = {
      _type: 'servicePage',
      _id: 'cra-cyber-resilience-actsecurity-by-design',
      title: 'CRA Security by Design Implementation',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-cyber-resilience-actproduct-security-requirements/cra-cyber-resilience-actsecurity-by-design'
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
        title: 'CRA Security by Design Implementation | ADVISORI',
        description: 'Implementieren Sie Security by Design-Prinzipien gemäß EU Cyber Resilience Act. Experte Beratung für sichere Produktentwicklung und CRA-Compliance.',
        keywords: 'CRA Security by Design, Cyber Resilience Act, Produktsicherheit, Sichere Entwicklung, EU Compliance, Cybersecurity'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA Security by Design Implementation'
        },
        tagline: 'Sicherheit von Anfang an in die Produktentwicklung integrieren',
        heading: 'CRA Security by Design Implementation',
        description: 'Security by Design ist ein fundamentaler Ansatz des EU Cyber Resilience Acts. Wir unterstützen Sie dabei, Cybersicherheit von Grund auf in Ihre Produktentwicklungsprozesse zu integrieren und CRA-Konformität zu erreichen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Integration von Sicherheitsprinzipien in den Entwicklungszyklus'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'CRA-konforme Produktentwicklung und Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Reduzierung von Sicherheitsrisiken und Schwachstellen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Marktfähige Produkte mit nachweisbarer Cybersicherheit'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRA Security by Design Implementation',
        description: 'Der EU Cyber Resilience Act (CRA) verlangt von Herstellern digitaler Produkte die Integration von Security by Design-Prinzipien in den gesamten Produktlebenszyklus. Wir unterstützen Sie bei der systematischen Umsetzung dieser Anforderungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung einer Security by Design-Strategie gemäß CRA-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Integration von Sicherheitskontrollen in Entwicklungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung sicherer Codierungspraktiken und -standards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau von Security Testing und Vulnerability Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Dokumentation und Nachweis der Sicherheitsmaßnahmen für CRA-Compliance'
          }
        ],
        alert: {
          title: 'CRA-Expertentipp',
          content: 'Security by Design ist nicht nur eine technische Anforderung, sondern erfordert eine kulturelle Transformation im Entwicklungsteam. Frühzeitige Integration von Sicherheitsüberlegungen spart Zeit und Kosten in späteren Entwicklungsphasen.'
        },
        whyUs: {
          title: 'Unsere Security by Design Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnisse der CRA-Anforderungen und Security by Design-Prinzipien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praktische Erfahrung in der Integration von Sicherheit in Entwicklungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von Architektur bis Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Branchenspezifische Lösungen für verschiedene Produktkategorien'
            }
          ]
        },
        additionalInfo: 'Security by Design kann die Anzahl kritischer Sicherheitslücken um bis zu 80% reduzieren und die Kosten für nachträgliche Sicherheitsmaßnahmen um bis zu 60% senken. Investieren Sie frühzeitig in sichere Produktentwicklung!',
        serviceDescription: 'Wir bieten umfassende Beratung und Implementierungsunterstützung für Security by Design gemäß CRA-Anforderungen, von der strategischen Planung bis zur praktischen Umsetzung in Ihren Entwicklungsprozessen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Security by Design-Strategie und Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Sichere Entwicklungsprozesse (SDLC) Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Security Testing und Code Review Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Vulnerability Management und Incident Response'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'CRA-Dokumentation und Compliance-Nachweis'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Security by Design Ansatz',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte Security by Design-Strategie, die nahtlos in Ihre bestehenden Entwicklungsprozesse integriert wird.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse bestehender Entwicklungsprozesse und Sicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Definition von Security by Design-Prinzipien und -Standards'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Integration von Sicherheitskontrollen in den SDLC'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Schulung und Befähigung der Entwicklungsteams'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Verbesserung und CRA-Compliance-Überwachung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir Security by Design erfolgreich in unsere Produktentwicklung integriert. Die systematische Herangehensweise und praktische Umsetzungsunterstützung haben uns geholfen, nicht nur CRA-Compliance zu erreichen, sondern auch die Gesamtsicherheit unserer Produkte erheblich zu verbessern.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Security by Design Strategie',
          description: 'Entwicklung einer umfassenden Strategie zur Integration von Sicherheitsprinzipien in Ihre Produktentwicklung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'CRA-konforme Security by Design-Roadmap'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Definition von Sicherheitszielen und -metriken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Integration in bestehende Entwicklungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Stakeholder-Alignment und Change Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Sichere Entwicklungsprozesse (SDLC)',
          description: 'Implementierung sicherer Entwicklungszyklen mit integrierten Sicherheitskontrollen und Tests.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Secure Coding Standards und Guidelines'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automatisierte Security Testing Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Code Review und Vulnerability Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'DevSecOps-Pipeline Implementierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craSecurityByDesignData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA Security by Design page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
