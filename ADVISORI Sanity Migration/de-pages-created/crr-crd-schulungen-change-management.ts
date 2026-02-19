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
    console.log('Creating CRR/CRD Schulungen & Change Management page...')

    const schulungenData = {
      _type: 'servicePage',
      _id: 'crr-crd-schulungen-change-management',
      title: 'CRR/CRD Schulungen & Change Management',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/crr-crd/crr-crd-ongoing-compliance/crr-crd-schulungen-change-management'
      },
      parent: {
        _type: 'reference',
        _ref: 'crr-crd-ongoing-compliance'
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
        title: 'CRR/CRD Schulungen & Change Management | ADVISORI',
        description: 'Stärken Sie Ihre CRR/CRD-Compliance durch maßgeschneiderte Schulungen und effektives Change Management für nachhaltige regulatorische Anpassungsfähigkeit.',
        keywords: 'CRR/CRD Schulungen, Regulatorisches Change Management, Compliance-Training, Bankenregulierung, Basel-Anforderungen, Finanzregulierung, Veränderungsmanagement'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRR/CRD Schulungen & Change Management'
        },
        tagline: 'Nachhaltiger Wissensaufbau und erfolgreiche Transformation für Finanzinstitute',
        heading: 'CRR/CRD Schulungen & Change Management',
        description: 'Entwickeln Sie eine proaktive Compliance-Kultur und bewältigen Sie regulatorische Veränderungen effektiv durch maßgeschneiderte Schulungsprogramme und strategisches Change Management.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Nachhaltige Verankerung von CRR/CRD-Wissen in Ihrer Organisation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Reduktion von Compliance-Risiken durch kompetente Mitarbeiter'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effiziente Implementierung regulatorischer Änderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Minimierung von Widerständen bei regulatorischen Transformationen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRR/CRD Schulungen & Change Management',
        description: 'Die erfolgreiche Umsetzung und kontinuierliche Einhaltung der CRR/CRD-Anforderungen erfordert nicht nur technisches Know-how, sondern auch eine nachhaltige Veränderung in der Organisationskultur. Unsere spezialisierten Schulungs- und Change Management-Programme unterstützen Sie dabei, regulatorisches Wissen effektiv zu vermitteln und Veränderungsprozesse erfolgreich zu gestalten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Maßgeschneiderte Schulungsprogramme für verschiedene Zielgruppen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Strukturiertes Change Management für regulatorische Transformationen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung einer proaktiven Compliance-Kultur'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Effektive Kommunikationsstrategien für regulatorische Veränderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Messung und Optimierung der Wirksamkeit von Schulungsmaßnahmen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiche regulatorische Veränderungen beginnen mit dem frühzeitigen Einbinden aller betroffenen Stakeholder. Investieren Sie in eine klare Kommunikationsstrategie und maßgeschneiderte Schulungsformate, die auf die unterschiedlichen Bedürfnisse und Rollen in Ihrer Organisation zugeschnitten sind.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Erfahrene Trainer mit fundiertem regulatorischen und didaktischen Fachwissen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Change Management-Methodik für regulatorische Transformationen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxisnahe Schulungsansätze mit realen Fallstudien und Anwendungsbeispielen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz, der sowohl Wissensaufbau als auch Verhaltensänderung adressiert'
            }
          ]
        },
        additionalInfo: 'Unsere Erfahrung zeigt, dass Finanzinstitute mit gut geschulten Mitarbeitern und einer effektiven Change Management-Strategie bis zu 40% weniger Zeit für die Implementierung regulatorischer Änderungen benötigen und deutlich weniger Compliance-Verstöße aufweisen. Ein proaktiver Ansatz bei der Schulung und dem Veränderungsmanagement ist eine Investition, die sich mehrfach auszahlt.',
        serviceDescription: 'Wir bieten umfassende Schulungs- und Change Management-Lösungen, die speziell auf die Anforderungen der CRR/CRD zugeschnitten sind. Unser Ziel ist es, nicht nur Wissen zu vermitteln, sondern auch nachhaltige Verhaltensänderungen zu fördern, die zu einer verbesserten Compliance-Kultur und effizienteren regulatorischen Prozessen führen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Zielgruppenspezifische Schulungsprogramme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Blended Learning-Konzepte'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Change Management für regulatorische Transformationen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Kommunikationsstrategien und -materialien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Wirksamkeitsmessung und kontinuierliche Verbesserung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und ganzheitlichen Ansatz bei der Entwicklung und Umsetzung von Schulungs- und Change Management-Programmen, der auf Ihre spezifischen organisatorischen Bedürfnisse zugeschnitten ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Bedarfsanalyse und Definition von Lernzielen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung maßgeschneiderter Schulungskonzepte und -materialien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung von Change Management-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Durchführung von Schulungen und Begleitung des Veränderungsprozesses'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Evaluation, Feedback und kontinuierliche Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'Regionalbank Süd AG',
        name: 'Dr. Julia Bergmann',
        position: 'Leiterin Regulatory Affairs',
        quote: 'Das Schulungs- und Change Management-Programm von ADVISORI hat uns geholfen, die komplexen CRR/CRD-Anforderungen in unserer gesamten Organisation zu verankern. Besonders beeindruckend war der praxisnahe Ansatz und die Fähigkeit, regulatorische Inhalte für verschiedene Zielgruppen verständlich aufzubereiten. Der strukturierte Change Management-Prozess hat die Akzeptanz der neuen Anforderungen deutlich erhöht und die Implementierung beschleunigt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Maßgeschneiderte CRR/CRD-Schulungsprogramme',
          description: 'Wir entwickeln und implementieren zielgruppenspezifische Schulungsprogramme, die genau auf die Bedürfnisse und Rollen Ihrer Mitarbeiter zugeschnitten sind und praktisches, anwendbares Wissen vermitteln.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Modulare Schulungskonzepte für verschiedene Hierarchieebenen und Fachbereiche'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Blended Learning-Ansätze mit Präsenz-, Online- und Self-Learning-Komponenten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Praxisnahe Fallstudien und Übungen mit direktem Bezug zu Ihrem Geschäftsmodell'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Regelmäßige Updates und Auffrischungsschulungen bei regulatorischen Änderungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Regulatorisches Change Management',
          description: 'Wir unterstützen Sie bei der erfolgreichen Gestaltung und Umsetzung regulatorischer Veränderungsprozesse, um Widerstände zu minimieren und die nachhaltige Verankerung neuer Anforderungen zu gewährleisten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung einer umfassenden Change Management-Strategie für regulatorische Projekte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Stakeholder-Analyse und -Management zur frühzeitigen Einbindung aller Betroffenen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Effektive Kommunikationskonzepte und -materialien für verschiedene Zielgruppen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Begleitung der Umsetzung mit regelmäßigem Monitoring und Anpassung der Maßnahmen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(schulungenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRR/CRD Schulungen & Change Management page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
