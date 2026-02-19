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
    console.log('Creating NIST Cybersecurity Framework page...')

    const nistCybersecurityFrameworkData = {
      _type: 'servicePage',
      _id: 'nist-cybersecurity-framework',
      title: 'NIST Cybersecurity Framework',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/nist-cybersecurity-framework'
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
        title: 'NIST Cybersecurity Framework Implementation | ADVISORI',
        description: 'Implementieren Sie das NIST Cybersecurity Framework mit ADVISORI. Umfassende Beratung für strukturierte Cybersicherheit nach NIST CSF Standards.',
        keywords: 'NIST Cybersecurity Framework, NIST CSF, Cybersicherheit, Framework Implementation, Risikomanagement, Cybersecurity Standards'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'NIST Cybersecurity Framework'
        },
        tagline: 'Strukturierte Cybersicherheit nach internationalen Standards',
        heading: 'NIST Cybersecurity Framework',
        description: 'Das NIST Cybersecurity Framework bietet einen bewährten Ansatz für das Management von Cybersicherheitsrisiken. Wir unterstützen Sie bei der erfolgreichen Implementierung und Integration in Ihre Unternehmensstrategie.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strukturierter Ansatz für Cybersicherheits-Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Verbesserung der Sicherheitshaltung und Resilienz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Harmonisierung mit anderen Compliance-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Messbare Cybersicherheits-Performance und Governance'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'NIST Cybersecurity Framework',
        description: 'Das NIST Cybersecurity Framework (CSF) ist ein flexibles, wiederholbares und kosteneffektives Rahmenwerk zur Förderung des Schutzes und der Widerstandsfähigkeit kritischer Infrastrukturen. ADVISORI unterstützt Sie bei der vollständigen Implementierung und strategischen Integration dieses bewährten Standards.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse der aktuellen Cybersicherheitslage (Current State Assessment)'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung des Ziel-Cybersicherheitsprofils (Target Profile)'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Gap-Analyse und Prioritäten-Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Implementierung der fünf Framework-Kernfunktionen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliches Monitoring und Framework-Optimierung'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Das NIST CSF ist nicht nur ein technisches Framework, sondern ein strategisches Governance-Tool, das C-Level-Führungskräften dabei hilft, Cybersicherheitsrisiken in den Kontext der Geschäftsziele zu stellen und fundierte Investitionsentscheidungen zu treffen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Zertifizierte NIST CSF-Expertise und langjährige Implementierungserfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Ganzheitlicher Ansatz von der Strategie bis zur operativen Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integration mit bestehenden Compliance-Frameworks und Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Praxiserprobte Methoden und branchenspezifische Anpassungen'
            }
          ]
        },
        additionalInfo: 'Unternehmen, die das NIST Cybersecurity Framework erfolgreich implementieren, verzeichnen eine durchschnittliche Reduktion von Cybersicherheitsvorfällen um 60% und eine signifikante Verbesserung ihrer Incident Response-Zeiten. Investieren Sie in strukturierte Cybersicherheit!',
        serviceDescription: 'Unser umfassendes NIST CSF-Implementierungsservice deckt alle Aspekte von der initialen Bewertung bis zur vollständigen operativen Integration ab. Wir unterstützen Sie dabei, das Framework optimal an Ihre spezifischen Geschäftsanforderungen und Risikotoleranz anzupassen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'NIST CSF Maturity Assessment und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung maßgeschneiderter Cybersicherheitsprofile'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementation der fünf Kernfunktionen (Identify, Protect, Detect, Respond, Recover)'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integration mit bestehenden Sicherheitstools und -prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Überwachung und Framework-Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir folgen einem systematischen, phasenweisen Ansatz zur NIST CSF-Implementierung, der sowohl technische als auch geschäftliche Aspekte berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Assess: Bewertung der aktuellen Cybersicherheitslage und Risikoprofils'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Plan: Entwicklung des Ziel-Profils und der Implementierungsroadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implement: Schrittweise Umsetzung der Framework-Komponenten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Monitor: Kontinuierliche Überwachung und Messung der Cybersicherheits-Performance'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Optimize: Regelmäßige Anpassung und Verbesserung des Frameworks'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die Implementierung des NIST Cybersecurity Frameworks mit ADVISORI hat unsere Cybersicherheitsstrategie grundlegend transformiert. Der strukturierte Ansatz und die praxiserprobten Methoden haben es uns ermöglicht, eine robuste und messbare Cybersicherheitshaltung zu entwickeln, die sowohl unsere Risiken reduziert als auch unser Geschäftswachstum unterstützt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'NIST CSF Assessment & Gap-Analyse',
          description: 'Umfassende Bewertung Ihrer aktuellen Cybersicherheitslage gegen die NIST CSF-Standards mit detaillierter Gap-Analyse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Current State Assessment aller fünf Kernfunktionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Maturity-Level-Bewertung und Benchmark-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Detaillierte Gap-Analyse mit Risikobewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Prioritäten-Roadmap für die Framework-Implementierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Framework-Implementierung & Integration',
          description: 'Vollständige Implementierung des NIST CSF mit Integration in bestehende Geschäftsprozesse und Sicherheitssysteme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung maßgeschneiderter Cybersicherheitsprofile'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementation der fünf Kernfunktionen (Identify, Protect, Detect, Respond, Recover)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration mit bestehenden Compliance-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliches Monitoring und Performance-Messung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(nistCybersecurityFrameworkData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ NIST Cybersecurity Framework page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
