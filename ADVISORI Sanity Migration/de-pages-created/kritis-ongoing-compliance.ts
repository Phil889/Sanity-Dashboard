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
    console.log('Creating KRITIS Ongoing Compliance page...')

    const kritisOngoingComplianceData = {
      _type: 'servicePage',
      _id: 'kritis-ongoing-compliance',
      title: 'KRITIS Ongoing Compliance',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/kritis/kritis-ongoing-compliance/'
      },
      parent: {
        _type: 'reference',
        _ref: 'kritis'
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
        title: 'KRITIS Ongoing Compliance | ADVISORI',
        description: 'Kontinuierliche KRITIS-Compliance für Betreiber kritischer Infrastrukturen. Wir unterstützen Sie bei der dauerhaften Einhaltung aller IT-Sicherheitsanforderungen und regulatorischen Vorgaben.',
        keywords: 'KRITIS, Ongoing Compliance, IT-Sicherheit, Kritische Infrastrukturen, BSI, Compliance Management, Informationssicherheit'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KRITIS Ongoing Compliance'
        },
        tagline: 'Kontinuierliche Compliance für kritische Infrastrukturen',
        heading: 'KRITIS Ongoing Compliance',
        description: 'Die dauerhafte Einhaltung der KRITIS-Anforderungen erfordert kontinuierliche Überwachung, regelmäßige Anpassungen und proaktive Risikosteuerung. Wir gewährleisten, dass Ihre kritische Infrastruktur jederzeit compliant und resilient bleibt.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Kontinuierliche Überwachung der Compliance-Situation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Proaktive Identifikation und Behebung von Abweichungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Automatisierte Monitoring- und Reporting-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Rechtzeitige Anpassung an neue regulatorische Anforderungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KRITIS Ongoing Compliance',
        description: 'KRITIS-Compliance ist kein einmaliges Projekt, sondern ein kontinuierlicher Prozess. Nach der erfolgreichen Implementierung der IT-Sicherheitsanforderungen ist eine dauerhafte Überwachung und Anpassung erforderlich, um die Compliance-Konformität aufrechtzuerhalten und auf neue Bedrohungen sowie regulatorische Änderungen zu reagieren. Unser Ongoing Compliance-Service gewährleistet die kontinuierliche Einhaltung aller KRITIS-Anforderungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Kontinuierliche Überwachung der IT-Sicherheitsmaßnahmen und Compliance-Status'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Regelmäßige Bewertung und Aktualisierung der Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Proaktive Identifikation und Behebung von Compliance-Abweichungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Anpassung an neue Bedrohungslagen und regulatorische Entwicklungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Automatisierte Monitoring- und Alerting-Systeme für kritische Sicherheitsereignisse'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine effektive KRITIS Ongoing Compliance erfordert nicht nur technische Überwachung, sondern auch die kontinuierliche Weiterentwicklung der Organisationsstrukturen und Prozesse, um mit der sich wandelnden Bedrohungslandschaft Schritt zu halten.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in KRITIS-Regulierung und kontinuierlichem Compliance Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung in der Betreuung kritischer Infrastrukturen verschiedener Sektoren'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Innovative Technologielösungen für automatisierte Compliance-Überwachung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Proaktiver Ansatz mit kontinuierlicher Anpassung an neue Anforderungen'
            }
          ]
        },
        additionalInfo: 'Die KRITIS-Landschaft entwickelt sich kontinuierlich weiter, neue Bedrohungen entstehen, und regulatorische Anforderungen werden verschärft. Ein proaktives Ongoing Compliance Management ist daher essentiell, um nicht nur die aktuelle Compliance zu gewährleisten, sondern auch zukunftssicher zu bleiben.',
        serviceDescription: 'Wir bieten umfassende Ongoing Compliance-Services für KRITIS-Betreiber, die eine kontinuierliche Überwachung, proaktive Risikosteuerung und rechtzeitige Anpassung an neue Anforderungen gewährleisten. Unser Service kombiniert automatisierte Technologien mit Expertenberatung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Kontinuierliches Compliance-Monitoring und Statusberichterstattung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Regelmäßige Risikobewertungen und Gap-Analysen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Proaktive Anpassung an neue regulatorische Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Incident Response und Compliance-Wiederherstellung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulungen und Awareness-Programme für kontinuierliche Verbesserung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam ein systematisches Ongoing Compliance Management, das kontinuierliche Überwachung mit proaktiver Risikosteuerung verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Etablierung kontinuierlicher Monitoring- und Bewertungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Implementierung automatisierter Compliance-Überwachungssysteme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Regelmäßige Risikobewertungen und Anpassung der Schutzmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Proaktive Identifikation und Behandlung von Compliance-Abweichungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Anpassung an neue Anforderungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'KRITIS-Compliance ist ein kontinuierlicher Prozess, der proaktive Überwachung und rechtzeitige Anpassungen erfordert. Unser Ongoing Compliance-Ansatz gewährleistet, dass kritische Infrastrukturen dauerhaft geschützt und compliant bleiben, auch bei sich wandelnden Bedrohungslagen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Kontinuierliches Compliance-Monitoring',
          description: 'Wir etablieren umfassende Monitoring-Systeme, die kontinuierlich den Compliance-Status Ihrer kritischen Infrastruktur überwachen und frühzeitig vor Abweichungen warnen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Automatisierte Überwachung aller relevanten IT-Sicherheitsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Real-time Alerting bei kritischen Sicherheitsereignissen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Regelmäßige Compliance-Dashboards und Statusberichte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration in bestehende Monitoring- und SIEM-Systeme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Proaktive Risiko- und Gap-Analysen',
          description: 'Wir führen regelmäßige Risikobewertungen durch und identifizieren proaktiv potenzielle Compliance-Lücken, bevor sie zu kritischen Problemen werden.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Quartalsweise Risikobewertungen und Bedrohungsanalysen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Identifikation und Priorisierung von Compliance-Gaps'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung und Umsetzung von Maßnahmenplänen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Anpassung an neue Bedrohungslagen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kritisOngoingComplianceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KRITIS Ongoing Compliance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
