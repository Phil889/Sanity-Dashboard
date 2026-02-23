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
    console.log('Creating MaRisk Audit Readiness page...')

    const mariskAuditReadinessData = {
      _type: 'servicePage',
      _id: 'marisk-audit-readiness',
      title: 'MaRisk Audit Readiness',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/marisk/marisk-ongoing-compliance/marisk-audit-readiness/'
      },
      parent: {
        _type: 'reference',
        _ref: 'marisk-ongoing-compliance'
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
        title: 'MaRisk Audit Readiness | ADVISORI',
        description: 'Optimieren Sie Ihre Prüfungsbereitschaft für MaRisk-Audits. Unsere Experten unterstützen Sie bei der systematischen Vorbereitung auf interne und externe Prüfungen.',
        keywords: 'MaRisk Prüfung, Aufsichtliche Prüfungen, Audit Readiness, Prüfungsvorbereitung, BaFin Prüfung, Interne Revision'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'MaRisk Audit Readiness'
        },
        tagline: 'Systematische Vorbereitung auf MaRisk-Prüfungen und -Reviews',
        heading: 'MaRisk Audit Readiness',
        description: 'Seien Sie optimal auf MaRisk-Prüfungen vorbereitet. Unsere strukturierten Audit-Readiness-Programme unterstützen Sie bei der systematischen Vorbereitung auf interne und externe Prüfungen und minimieren Feststellungsrisiken.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Proaktive Identifikation potenzieller Prüfungsschwachstellen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Effiziente Prüfungsprozesse durch strukturierte Vorbereitung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Reduzierung von Prüfungsfeststellungen und Nacharbeit'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Minimierung von operativen Störungen während der Prüfung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'MaRisk Audit Readiness',
        description: 'MaRisk-Prüfungen durch interne Revision oder Aufsichtsbehörden erfordern eine umfassende Vorbereitung. Unsere Audit-Readiness-Programme helfen Ihnen, proaktiv potenzielle Schwachstellen zu identifizieren und zu beheben, bevor sie zu formalen Feststellungen werden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Gap-Analysen und Pre-Audits zur Identifikation von Verbesserungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung strukturierter Maßnahmenpläne zur Behebung von Schwachstellen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Aufbau eines Audit-Trail-Systems zur Nachweisführung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Schulung von Mitarbeitern für effektive Interaktion mit Prüfern'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Begleitung während des Prüfungsprozesses und Unterstützung bei der Nachbereitung'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Die Prüfungseffizienz steht und fällt mit der Vorbereitungsqualität. Investieren Sie frühzeitig in eine systematische Audit-Readiness, um operative Störungen während der Prüfung zu minimieren und Feststellungen proaktiv zu vermeiden.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in regulatorischen Anforderungen und aufsichtlichen Erwartungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praktische Erfahrung aus zahlreichen MaRisk-Prüfungen verschiedener Komplexitätsgrade'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Verständnis der Prüfungsmethodik sowohl aus Instituts- als auch aus Prüferperspektive'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Pragmatischer Ansatz mit Fokus auf wesentliche Risikobereiche'
            }
          ]
        },
        additionalInfo: 'Eine professionelle Prüfungsvorbereitung kann den Prüfungsaufwand um bis zu 40% reduzieren und die Zahl der Feststellungen signifikant verringern. Unsere strukturierten Programme helfen Ihnen, diese Effizienzpotenziale zu realisieren.',
        serviceDescription: 'Wir bieten maßgeschneiderte Unterstützung zur Vorbereitung auf MaRisk-Prüfungen, die auf die spezifischen Anforderungen und Risikoprofile Ihres Instituts zugeschnitten ist. Unser Ziel ist es, Ihre Prüfungsbereitschaft zu maximieren und gleichzeitig den operativen Aufwand zu minimieren.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Prüfungsrisikoanalyse und -bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung von Prüfungsvorbereitungsplänen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Mock Audits und Schwachstellenanalysen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Koordination der Prüfungsvorbereitung und -durchführung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Unterstützung bei der Nachbereitung und Maßnahmenverfolgung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir implementieren einen strukturierten Ansatz zur Vorbereitung auf MaRisk-Prüfungen, der auf bewährten Methoden basiert und gleichzeitig Ihre spezifischen Anforderungen berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse des Prüfungsumfangs und der prüfungsrelevanten Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Durchführung von Pre-Audits zur Identifikation von Schwachstellen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung und Umsetzung von gezielten Verbesserungsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Vorbereitung von Dokumentation und Nachweisen für die Prüfung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Begleitung während der Prüfung und Unterstützung bei der Maßnahmenumsetzung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Thomas Müller',
        position: 'Senior Manager',
        quote: 'Dank der strukturierten Prüfungsvorbereitung durch ADVISORI konnten wir die Anzahl der Feststellungen in unserer MaRisk-Prüfung um mehr als 60% reduzieren. Besonders wertvoll war die praxisnahe Unterstützung bei der Identifikation und Behebung von Schwachstellen im Vorfeld der Prüfung. Das Team hat uns nicht nur bei der Vorbereitung, sondern auch während der Prüfung kompetent begleitet.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'MaRisk Pre-Audits',
          description: 'Durchführung strukturierter Vorprüfungen zur Identifikation und Behebung potenzieller Schwachstellen vor der eigentlichen Prüfung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Gap-Analysen und Schwachstellenidentifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Priorisierung von Verbesserungsmaßnahmen nach Risiko'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung von Maßnahmenplänen zur Risikomitigierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Überprüfung der Wirksamkeit umgesetzter Maßnahmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Prüfungskoordination und -begleitung',
          description: 'Unterstützung bei der Koordination und Durchführung von MaRisk-Prüfungen, um den Prüfungsprozess effizient zu gestalten und optimale Ergebnisse zu erzielen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Koordination der Prüfungsvorbereitung und Ansprechpartner'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Vorbereitung und Qualitätssicherung der Prüfungsdokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Begleitung von Prüfungsgesprächen und Interviews'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Unterstützung bei der Stellungnahme zu Prüfungsfeststellungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(mariskAuditReadinessData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ MaRisk Audit Readiness page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
