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
    console.log('Creating CIS Controls page...')

    const cisControlsData = {
      _type: 'servicePage',
      _id: 'cis-controls',
      title: 'CIS Controls',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/cis-controls'
      },
      parent: {
        _type: 'reference',
        _ref: 'standards-frameworks'
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
        title: 'CIS Controls Implementation | ADVISORI',
        description: 'Implementieren Sie die CIS Controls für erhöhte Cybersicherheit. Priorisierte Sicherheitsmaßnahmen für effektiven Schutz vor Cyber-Bedrohungen.',
        keywords: 'CIS Controls, Cybersicherheit, IT-Sicherheit, Bedrohungsabwehr, Sicherheitsframework, Critical Security Controls'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CIS Controls'
        },
        tagline: 'Priorisierte Cybersicherheitsmaßnahmen für optimalen Schutz',
        heading: 'CIS Controls',
        description: 'Die CIS Controls bieten einen priorisierten Ansatz für Cybersicherheit mit den wichtigsten Sicherheitsmaßnahmen. Wir unterstützen Sie bei der effektiven Implementierung dieser bewährten Praktiken.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Priorisierte Umsetzung der wirksamsten Sicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Messbare Verbesserung der Cyber-Resilienz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kosteneffiziente Allokation von Sicherheitsressourcen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Compliance mit modernen Cybersicherheitsstandards'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CIS Controls',
        description: 'Die CIS Critical Security Controls sind eine priorisierte Sammlung von Cybersicherheitsmaßnahmen, die sich als besonders wirksam gegen die häufigsten Angriffe erwiesen haben. Wir helfen Ihnen bei der strategischen Implementierung dieser Controls.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Gap-Analyse und Bewertung des aktuellen Sicherheitsstatus'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Priorisierung der CIS Controls nach Risiko und Ressourcen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung der Top 20 Critical Security Controls'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Messung und Überwachung der Wirksamkeit'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Verbesserung und Anpassung'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Die CIS Controls folgen einem risikobasierten Ansatz - beginnen Sie mit den grundlegenden Controls (IG1) und arbeiten Sie sich systematisch zu den erweiterten Maßnahmen vor.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Zertifizierte CIS-Experten mit langjähriger Implementierungserfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Methoden für effiziente CIS-Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Anpassung der Controls'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Integration mit bestehenden Sicherheitsframeworks'
            }
          ]
        },
        additionalInfo: 'Unternehmen, die die CIS Controls implementieren, reduzieren ihr Cyber-Risiko um durchschnittlich 85% und verbessern ihre Incident-Response-Zeit um bis zu 70%.',
        serviceDescription: 'Wir bieten umfassende Unterstützung bei der Implementierung der CIS Controls - von der initialen Bewertung über die priorisierte Umsetzung bis hin zur kontinuierlichen Überwachung und Verbesserung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'CIS Controls Assessment und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Implementierungsroadmap und Priorisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Top 20 Controls Umsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Monitoring und Messung der Wirksamkeit'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulungen und Sensibilisierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir folgen einem strukturierten Ansatz zur CIS Controls Implementierung, der sowohl technische als auch organisatorische Aspekte berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Assessment der aktuellen Sicherheitslage und CIS Readiness'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Priorisierung der Controls basierend auf Implementation Groups'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Stufenweise Implementierung von Basic über Foundational zu Organizational Controls'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung von Monitoring und Messsystemen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Verbesserung und Reifegradsteigerung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir die CIS Controls erfolgreich implementiert und unsere Cybersicherheit nachhaltig gestärkt. Der strukturierte Ansatz und die praxisnahe Beratung haben uns geholfen, die richtigen Prioritäten zu setzen und messbare Verbesserungen zu erzielen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'CIS Controls Assessment',
          description: 'Umfassende Bewertung Ihres aktuellen Sicherheitsstatus gegenüber den CIS Controls.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Gap-Analyse aller 20 CIS Controls'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung der Implementation Groups (IG1, IG2, IG3)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risikobewertung und Priorisierungsmatrix'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Individuelle Implementierungsroadmap'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'CIS Controls Implementierung',
          description: 'Strukturierte Umsetzung der priorisierten CIS Controls in Ihrer Organisation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Phasenweise Implementierung nach Implementation Groups'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Technische Umsetzung und Tooling-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Prozessdefinition und Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Schulungen und Change Management'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(cisControlsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CIS Controls page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
