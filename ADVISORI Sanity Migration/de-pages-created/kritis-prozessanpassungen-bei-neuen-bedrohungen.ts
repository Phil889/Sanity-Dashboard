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
    console.log('Creating KRITIS Prozessanpassungen bei neuen Bedrohungen page...')

    const kritisProzessanpassungenData = {
      _type: 'servicePage',
      _id: 'kritis-prozessanpassungen-bei-neuen-bedrohungen',
      title: 'KRITIS Prozessanpassungen bei neuen Bedrohungen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/kritis/kritis-ongoing-compliance/kritis-prozessanpassungen-bei-neuen-bedrohungen/'
      },
      parent: {
        _type: 'reference',
        _ref: 'kritis-ongoing-compliance'
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
        title: 'KRITIS Prozessanpassungen bei neuen Bedrohungen | ADVISORI',
        description: 'Agile Anpassung der KRITIS-Prozesse an neue Cyber-Bedrohungen und Sicherheitsrisiken. Wir unterstützen bei der kontinuierlichen Evolution Ihrer IT-Sicherheitsmaßnahmen und Compliance-Prozesse.',
        keywords: 'KRITIS, Prozessanpassungen, neue Bedrohungen, Cyber Security, IT-Sicherheit, Threat Intelligence, Adaptive Security, BSI'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KRITIS Prozessanpassungen bei neuen Bedrohungen'
        },
        tagline: 'Adaptive Sicherheitsprozesse für dynamische Bedrohungslagen',
        heading: 'KRITIS Prozessanpassungen bei neuen Bedrohungen',
        description: 'Die Bedrohungslandschaft für kritische Infrastrukturen entwickelt sich kontinuierlich weiter. Neue Angriffsvektoren, veränderte Technologien und evolvierende Compliance-Anforderungen erfordern agile Anpassungen der KRITIS-Prozesse. Wir gewährleisten, dass Ihre Sicherheitsmaßnahmen stets aktuell und wirksam bleiben.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Proaktive Identifikation und Bewertung neuer Bedrohungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Agile Anpassung bestehender Sicherheitsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integration von Threat Intelligence in operative Abläufe'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Optimierung der Schutzmaßnahmen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KRITIS Prozessanpassungen bei neuen Bedrohungen',
        description: 'Die dynamische Cyber-Bedrohungslandschaft erfordert kontinuierliche Anpassungen der KRITIS-Sicherheitsprozesse. Neue Angriffstechniken, veränderte Infrastrukturen und evolvierende regulatorische Anforderungen machen es erforderlich, bestehende Prozesse regelmäßig zu evaluieren und weiterzuentwickeln. Unser Service gewährleistet, dass Ihre KRITIS-Compliance-Prozesse stets den aktuellen Bedrohungen und Best Practices entsprechen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Kontinuierliche Bedrohungsanalyse und Threat Intelligence Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Agile Anpassung von Sicherheitsprozessen an neue Risikoszenarien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung und Implementierung adaptiver Schutzmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration neuer Technologien und Sicherheitslösungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Anpassung der Organisationsstrukturen und Verantwortlichkeiten'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiche Prozessanpassungen bei neuen Bedrohungen erfordern nicht nur technische Updates, sondern auch organisatorisches Change Management und kontinuierliche Weiterbildung aller beteiligten Stakeholder.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in Cyber Threat Intelligence und adaptiver Sicherheitsarchitektur'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfassende Erfahrung in der Modernisierung kritischer Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Agile Methodiken für schnelle und effektive Prozessanpassungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von technischen bis zu organisatorischen Aspekten'
            }
          ]
        },
        additionalInfo: 'Die Anpassung von KRITIS-Prozessen an neue Bedrohungen ist ein kontinuierlicher Prozess, der strategische Planung, operative Exzellenz und kulturelle Transformation vereint. Nur durch systematische Herangehensweise können Organisationen in der sich wandelnden Bedrohungslandschaft resilient bleiben.',
        serviceDescription: 'Wir bieten umfassende Services für die adaptive Weiterentwicklung Ihrer KRITIS-Prozesse, die Threat Intelligence, agile Prozessanpassung und Change Management zu einem integrierten Ansatz verbinden. Unser Service gewährleistet kontinuierliche Schutzwirksamkeit bei optimaler Effizienz.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Kontinuierliche Threat Intelligence und Bedrohungsanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Agile Prozessanpassung und -optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Integration neuer Sicherheitstechnologien und -methoden'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Change Management und Stakeholder-Schulungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Wirksamkeitsmessung und -optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen einen strukturierten Ansatz für kontinuierliche Prozessanpassungen, der Bedrohungsanalyse, agile Implementierung und nachhaltige Integration vereint.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Systematische Bedrohungsanalyse und Threat Intelligence Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Bewertung bestehender Prozesse und Identifikation von Anpassungsbedarfen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Agile Entwicklung und Implementierung adaptiver Schutzmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Change Management und Stakeholder-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und iterative Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'In der sich rasant wandelnden Cyber-Bedrohungslandschaft ist die Fähigkeit zur kontinuierlichen Prozessanpassung ein entscheidender Wettbewerbsvorteil. Unser adaptiver Ansatz gewährleistet, dass KRITIS-Betreiber nicht nur auf neue Bedrohungen reagieren, sondern proaktiv resiliente Sicherheitsarchitekturen entwickeln.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Threat Intelligence und Bedrohungsanalyse',
          description: 'Wir etablieren kontinuierliche Threat Intelligence-Prozesse, die neue Bedrohungen frühzeitig identifizieren und deren Relevanz für Ihre spezifische Infrastruktur bewerten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Integration externer und interner Threat Intelligence Quellen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Automatisierte Bedrohungskorrelation und -bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Spezifische Risikobewertung für kritische Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Regelmäßige Threat Briefings und Executive Reports'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Agile Prozessanpassung und -optimierung',
          description: 'Wir implementieren agile Methoden für die schnelle und effektive Anpassung Ihrer KRITIS-Prozesse an neue Bedrohungslagen und veränderte Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Agile Prozessmodellierung und -optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Rapid Prototyping neuer Sicherheitsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Iterative Implementierung und Testing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Feedback-Integration und Verbesserung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kritisProzessanpassungenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KRITIS Prozessanpassungen bei neuen Bedrohungen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
