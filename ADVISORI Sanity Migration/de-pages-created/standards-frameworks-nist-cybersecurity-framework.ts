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

    const nistFrameworkData = {
      _type: 'servicePage',
      _id: 'standards-frameworks-nist-cybersecurity-framework',
      title: 'NIST Cybersecurity Framework',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/standards-frameworks-nist-cybersecurity-framework'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management'
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
        title: 'NIST Cybersecurity Framework | ADVISORI',
        description: 'Professionelle Implementierung des NIST Cybersecurity Frameworks. Strukturierte Ansätze für Identify, Protect, Detect, Respond und Recover zur Stärkung Ihrer Cyber-Resilienz.',
        keywords: 'NIST Cybersecurity Framework, Cyber Security, Risk Management, Cyber Resilience, Framework Implementation, Cybersicherheit, NIST CSF'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'NIST Cybersecurity Framework'
        },
        tagline: 'Strategische Cybersicherheit nach bewährten Standards',
        heading: 'NIST Cybersecurity Framework',
        description: 'Das NIST Cybersecurity Framework bietet einen strukturierten Ansatz zur Identifikation, zum Schutz, zur Erkennung, Reaktion und Wiederherstellung bei Cyber-Bedrohungen. Wir unterstützen Sie bei der strategischen Implementierung und kontinuierlichen Optimierung dieses bewährten Frameworks.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Verbesserung der Cyber-Resilienz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strukturiertes Risikomanagement und Bedrohungsabwehr'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Compliance mit internationalen Cybersicherheitsstandards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Optimierte Incident Response und Business Continuity'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'NIST Cybersecurity Framework',
        description: 'Das NIST Cybersecurity Framework ist ein freiwilliger Rahmen zur Verbesserung der Cybersicherheit kritischer Infrastrukturen. Es basiert auf den fünf Kernfunktionen: Identify, Protect, Detect, Respond und Recover. Wir unterstützen Sie bei der strategischen Implementierung dieses bewährten Frameworks zur Stärkung Ihrer Cyber-Resilienz und zum Schutz Ihrer wertvollsten Unternehmensassets.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Bewertung der aktuellen Cybersicherheitslage und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung einer maßgeschneiderten NIST-Framework-Implementierungsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Strukturierte Umsetzung der fünf Kernfunktionen des Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration in bestehende Sicherheitsarchitekturen und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung, Messung und Verbesserung der Cyber-Resilienz'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine erfolgreiche NIST-Framework-Implementierung erfordert nicht nur technische Maßnahmen, sondern auch die Integration in Ihre Unternehmenskultur und -prozesse. Der Framework sollte als lebendiges Instrument zur kontinuierlichen Verbesserung der Cybersicherheit verstanden werden.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in NIST-Standards und Cybersecurity Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Implementierungsmethodik für verschiedene Branchen und Unternehmensgrößen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz zur Integration von Technologie, Prozessen und Menschen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung und Optimierung nach der initialen Implementierung'
            }
          ]
        },
        additionalInfo: 'Das NIST Cybersecurity Framework wird von Organisationen weltweit als De-facto-Standard für Cybersicherheit anerkannt. Eine professionelle Implementierung stärkt nicht nur Ihre Sicherheitslage, sondern demonstriert auch Stakeholdern und Kunden Ihr Engagement für höchste Cybersicherheitsstandards.',
        serviceDescription: 'Wir bieten ein umfassendes Leistungsspektrum zur strategischen Implementierung und kontinuierlichen Optimierung des NIST Cybersecurity Frameworks. Unser Ansatz kombiniert bewährte Methoden mit innovativen Technologien und berücksichtigt Ihre spezifischen Geschäftsanforderungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'NIST Framework Assessment und Maturity Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung und Implementierung maßgeschneiderter Cybersicherheitsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Integration der fünf Kernfunktionen in bestehende IT- und Sicherheitsarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Entwicklung von Governance-Strukturen und Cybersicherheitsrichtlinien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Training und Awareness-Programme für alle Organisationsebenen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam einen strukturierten Ansatz zur erfolgreichen Implementierung des NIST Cybersecurity Frameworks.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Durchführung einer umfassenden Cybersecurity-Bewertung und Framework-Mapping'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer priorisierten Implementierungsroadmap mit klaren Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Schrittweise Umsetzung der fünf Kernfunktionen des NIST Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration in bestehende Prozesse und Etablierung neuer Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Messung, Überwachung und Verbesserung der Framework-Implementierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Das NIST Cybersecurity Framework bietet einen bewährten, strukturierten Ansatz zur Stärkung der Cyber-Resilienz. Mit unserer Expertise helfen wir Unternehmen dabei, dieses Framework nicht nur zu implementieren, sondern es als strategisches Instrument zur kontinuierlichen Verbesserung ihrer Cybersicherheitslage zu nutzen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'NIST Framework Assessment und Roadmap-Entwicklung',
          description: 'Wir bewerten Ihre aktuelle Cybersicherheitslage im Kontext des NIST Frameworks und entwickeln eine maßgeschneiderte Implementierungsstrategie.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Bewertung der aktuellen Cybersicherheitsreife'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Gap-Analyse und Identifikation von Verbesserungsbereichen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung einer priorisierten Implementierungsroadmap'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Kosten-Nutzen-Analyse und ROI-Bewertung geplanter Maßnahmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Framework-Implementierung und Integration',
          description: 'Wir unterstützen Sie bei der strukturierten Implementierung aller fünf Kernfunktionen des NIST Cybersecurity Frameworks.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Schrittweise Implementierung von Identify, Protect, Detect, Respond und Recover'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integration in bestehende IT-Systeme und Sicherheitsarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung von Policies, Prozessen und Verfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Etablierung von Governance-Strukturen und Metriken'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(nistFrameworkData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ NIST Cybersecurity Framework page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
