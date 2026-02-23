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
    console.log('Creating CRA Cyber Resilience Act Update Management page...')

    const craUpdateManagementData = {
      _type: 'servicePage',
      _id: 'cra-cyber-resilience-act-update-management',
      title: 'CRA Cyber Resilience Act Update Management',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-cyber-resilience-act-product-security-requirements/cra-cyber-resilience-act-update-management'
      },
      parent: {
        _type: 'reference',
        _ref: 'cra-cyber-resilience-act-product-security-requirements'
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
        title: 'CRA Cyber Resilience Act Update Management | ADVISORI',
        description: 'Strategisches Update-Management für CRA-konforme Produkte. Wir unterstützen Sie bei der kontinuierlichen Sicherheitsaktualisierung und Compliance-Überwachung nach dem Cyber Resilience Act.',
        keywords: 'CRA Update Management, Cyber Resilience Act, Sicherheitsupdates, EU-Verordnung, Compliance Management, Produktsicherheit, Software Updates, Vulnerability Management'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA Cyber Resilience Act Update Management'
        },
        tagline: 'Kontinuierliche Sicherheitsupdates für CRA-konforme Produkte',
        heading: 'CRA Cyber Resilience Act Update Management',
        description: 'Strategisches Update-Management zur Einhaltung der CRA-Anforderungen für kontinuierliche Produktsicherheit. Wir gewährleisten systematische Sicherheitsupdates und proaktive Vulnerability-Behandlung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'CRA-konforme Update-Prozesse und -Richtlinien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte Vulnerability-Erkennung und -Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Strukturierte Update-Planung und -Verteilung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Compliance-Überwachung und -Dokumentation'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRA Cyber Resilience Act Update Management',
        description: 'Das CRA Update Management stellt sicher, dass Ihre Produkte kontinuierlich den Sicherheitsanforderungen des Cyber Resilience Acts entsprechen. Wir entwickeln umfassende Update-Strategien, die sowohl regulatorische Compliance als auch operative Effizienz gewährleisten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung CRA-konformer Update-Strategien und -Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung automatisierter Vulnerability-Scanning-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Etablierung von Update-Priorisierung und -Zeitplänen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau von Update-Verteilungskanälen und -Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Compliance-Dokumentation und -Reporting'
          }
        ],
        alert: {
          title: 'CRA-Expertentipp',
          content: 'Der Cyber Resilience Act erfordert nicht nur initial sichere Produkte, sondern auch ein lebenszyklusbegleitendes Update-Management. Eine proaktive Update-Strategie ist entscheidend für die dauerhafte CRA-Compliance.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende CRA-Expertise und Update-Management-Erfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für automatisierte Sicherheitsupdates'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxiserprobte Compliance-Überwachung und -Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitliche Integration in bestehende Entwicklungsprozesse'
            }
          ]
        },
        additionalInfo: 'Effektives CRA Update Management kann die Zeit für Sicherheitsupdates um bis zu 70% reduzieren und gleichzeitig die Compliance-Sicherheit um 95% erhöhen. Investieren Sie in systematische Update-Prozesse für nachhaltige Produktsicherheit!',
        serviceDescription: 'Wir bieten umfassende CRA Update Management Services, von der strategischen Planung über die technische Implementierung bis zur kontinuierlichen Überwachung. Unsere Lösungen gewährleisten sowohl CRA-Compliance als auch operative Exzellenz.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'CRA Update Strategy Development'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Automated Vulnerability Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Update Distribution Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Compliance Monitoring & Reporting'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Lifecycle Update Planning'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen ein maßgeschneidertes CRA Update Management System, das regulatorische Anforderungen mit operativer Effizienz verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse Ihrer Produktarchitektur und Update-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung CRA-konformer Update-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung automatisierter Update-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung von Monitoring- und Compliance-Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Anpassung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI Regulatory Technology',
        name: 'Dr. Sarah Müller',
        position: 'CRA Compliance Director',
        quote: 'ADVISORI hat uns geholfen, ein zukunftssicheres CRA Update Management System zu implementieren. Die automatisierten Prozesse und die kontinuierliche Compliance-Überwachung geben uns die Sicherheit, dass unsere Produkte stets den CRA-Anforderungen entsprechen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'CRA Update Strategy Development',
          description: 'Entwicklung umfassender Update-Strategien, die CRA-Anforderungen mit Geschäftszielen in Einklang bringen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'CRA-konforme Update-Richtlinien und -Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Risikobewertung und Priorisierungsframeworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Update-Lifecycle-Management-Konzepte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Stakeholder-Kommunikationsstrategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Automated Vulnerability Management',
          description: 'Implementierung automatisierter Systeme zur kontinuierlichen Überwachung und Bewertung von Sicherheitslücken.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Kontinuierliches Vulnerability Scanning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automatisierte Risikobewertung und -klassifizierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration in CI/CD-Pipelines'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Real-time Threat Intelligence Integration'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craUpdateManagementData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA Cyber Resilience Act Update Management page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
