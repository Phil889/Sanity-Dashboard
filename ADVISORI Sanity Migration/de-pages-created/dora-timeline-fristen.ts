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
    console.log('Creating DORA Timeline & Fristen page...')

    const doraTimelineData = {
      _type: 'servicePage',
      _id: 'dora-timeline-fristen',
      title: 'DORA Timeline & Fristen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dora-digital-operational-resilience-act/dora-timeline-fristen'
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
        title: 'DORA Timeline & Fristen | ADVISORI',
        description: 'Strategische Planung der DORA-Implementierung mit präzisen Timelines und Fristen. Expertenberatung für termingerechte Compliance-Umsetzung und Meilenstein-Management unter der Digital Operational Resilience Act.',
        keywords: 'DORA Timeline, DORA Fristen, Implementierung, Compliance-Planung, Meilensteine, Digital Operational Resilience Act, EU-Regulierung, Terminmanagement'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DORA Timeline und Fristen Management'
        },
        tagline: 'Strategische Timeline-Planung für DORA-Erfolg',
        heading: 'DORA Timeline & Fristen',
        description: 'Die erfolgreiche DORA-Implementierung erfordert präzise Zeitplanung und strategisches Meilenstein-Management. Wir unterstützen Sie bei der Entwicklung realistischer Timelines und der termingerechten Umsetzung aller Compliance-Anforderungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strukturierte Implementierungs-Roadmaps mit klaren Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Risikoorientierte Priorisierung kritischer Compliance-Bereiche'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kontinuierliches Monitoring und Anpassung der Zeitpläne'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Koordination mit bestehenden Regulierungs- und IT-Projekten'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DORA Timeline strategisch planen und umsetzen',
        description: 'Der Digital Operational Resilience Act (DORA) tritt mit spezifischen Fristen und Implementierungsanforderungen in Kraft. Eine durchdachte Timeline-Planung ist entscheidend für die rechtzeitige und effiziente Umsetzung aller Compliance-Verpflichtungen ohne Störung des laufenden Geschäftsbetriebs.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Analyse der DORA-Implementierungsfristen und regulatorischen Meilensteine'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung phasenweiser Umsetzungsstrategien mit realistischen Zeitrahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration der DORA-Timeline in bestehende Geschäfts- und IT-Planungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliches Monitoring und proaktive Anpassung bei Verzögerungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Koordination mit Drittanbietern und externen Stakeholdern für termingerechte Umsetzung'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine realistische Timeline-Planung berücksichtigt nicht nur die regulatorischen Fristen, sondern auch interne Ressourcenverfügbarkeit, Abhängigkeiten zwischen verschiedenen Compliance-Bereichen und mögliche Verzögerungen bei kritischen Drittanbietern.'
        },
        whyUs: {
          title: 'Unsere Timeline-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Bewährte Methoden für komplexe Regulierungs-Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Tiefgreifende Kenntnis der DORA-Anforderungen und deren Interdependenzen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Erfahrung mit agilen und traditionellen Projektmanagement-Ansätzen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Pragmatische Lösungen für ressourceneffiziente Compliance-Umsetzung'
            }
          ]
        },
        additionalInfo: 'Die DORA-Implementierung erfordert eine koordinierte Herangehensweise, die technische, organisatorische und regulatorische Aspekte integriert. Erfolgreiche Timeline-Planung berücksichtigt sowohl die Komplexität der Anforderungen als auch die praktischen Herausforderungen der Umsetzung in laufenden Geschäftsprozessen.',
        serviceDescription: 'Wir entwickeln mit Ihnen maßgeschneiderte Implementierungs-Timelines, die realistische Zeitrahmen mit strategischen Prioritäten verbinden. Unser systematischer Ansatz gewährleistet termingerechte Compliance bei optimaler Ressourcennutzung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Comprehensive Timeline-Assessment und Meilenstein-Definition'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Risikoorientierte Priorisierung und Phasenplanung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Integration mit bestehenden Projekt- und Compliance-Timelines'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Kontinuierliches Monitoring und adaptive Timeline-Anpassung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Stakeholder-Koordination und Change-Management-Unterstützung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Timeline-Ansatz',
        description: 'Wir entwickeln mit Ihnen eine realistische und strategisch ausgerichtete DORA-Implementierungs-Timeline, die alle kritischen Erfolgsfaktoren berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer aktuellen Compliance-Position und Ressourcenverfügbarkeit'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung phasenweiser Implementierungsstrategien mit klaren Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Integration kritischer Abhängigkeiten und Drittanbieter-Koordination'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung robuster Monitoring- und Eskalationsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und adaptive Anpassung der Zeitpläne'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Erfolgreiche DORA-Implementierung ist primär eine Frage des strategischen Timeline-Managements. Unsere bewährten Methoden kombinieren regulatorische Präzision mit praktischer Umsetzbarkeit, um termingerechte Compliance ohne Geschäftsstörungen zu gewährleisten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'DORA Timeline-Assessment und Roadmap-Entwicklung',
          description: 'Systematische Analyse Ihrer Ausgangssituation und Entwicklung einer maßgeschneiderten Implementierungs-Roadmap mit realistischen Zeitrahmen und klaren Meilensteinen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Bewertung der aktuellen Compliance-Position und Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung phasenweiser Implementierungsstrategien mit Prioritätensetzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Definition kritischer Meilensteine und Erfolgskriterien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Ressourcenplanung und Kapazitätsbewertung für realistische Zeitschätzungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Risikoorientierte Priorisierung und Phasenplanung',
          description: 'Strategische Priorisierung der DORA-Anforderungen basierend auf Risikobewertung und Geschäftskritikalität für optimale Ressourcenallokation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Risikobewertung verschiedener DORA-Compliance-Bereiche'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung phasenweiser Umsetzungsstrategien mit Quick-Wins'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Koordination mit bestehenden Regulierungs- und IT-Projekten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Optimierung der Implementierungsreihenfolge für maximale Effizienz'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Drittanbieter-Timeline-Koordination',
          description: 'Spezialisierte Koordination mit kritischen IKT-Drittanbietern zur Sicherstellung termingerechter Compliance-Umsetzung im gesamten Ökosystem.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Systematische Erfassung und Bewertung von Drittanbieter-Abhängigkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Koordination von Implementierungs-Timelines mit kritischen Partnern'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Entwicklung von Eskalations- und Contingency-Plänen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Monitoring und Management von Drittanbieter-Compliance-Fortschritten'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Kontinuierliches Timeline-Monitoring und -Anpassung',
          description: 'Implementierung robuster Überwachungssysteme für proaktive Identifikation von Verzögerungen und adaptive Anpassung der Implementierungs-Timelines.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Entwicklung von KPI-Dashboards für Timeline-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Implementierung automatisierter Fortschritts-Tracking-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Regelmäßige Timeline-Reviews und Anpassungsempfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Proaktive Risiko-Identifikation und Mitigation-Strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Change-Management und Stakeholder-Koordination',
          description: 'Umfassende Unterstützung bei der organisatorischen Umsetzung der DORA-Timeline durch effektives Change-Management und Stakeholder-Engagement.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Entwicklung von Change-Management-Strategien für DORA-Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Koordination zwischen verschiedenen Geschäftsbereichen und IT-Teams'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Kommunikationsstrategien für Timeline-Updates und Meilenstein-Kommunikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Training und Schulungen für timeline-relevante Prozesse und Verantwortlichkeiten'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Post-Implementation Timeline-Management',
          description: 'Langfristige Unterstützung für die kontinuierliche Einhaltung von DORA-Fristen und die Anpassung an regulatorische Entwicklungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Entwicklung von Maintenance-Timelines für kontinuierliche Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Monitoring regulatorischer Updates und deren Timeline-Auswirkungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Jährliche Timeline-Reviews und Optimierungsempfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Integration neuer Geschäftsanforderungen in bestehende DORA-Timelines'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(doraTimelineData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DORA Timeline & Fristen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
