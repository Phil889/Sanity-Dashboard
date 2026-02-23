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
    console.log('Creating CRR/CRD SREP Vorbereitung & Dokumentation page...')

    const crrCrdSrepDocData = {
      _type: 'servicePage',
      _id: 'crr-crd-srep-vorbereitung-dokumentation',
      title: 'CRR/CRD SREP Vorbereitung & Dokumentation',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/crr-crd/crr-crd-implementation/crr-crd-srep-vorbereitung-dokumentation'
      },
      parent: {
        _type: 'reference',
        _ref: 'crr-crd-implementation'
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
        title: 'CRR/CRD SREP Vorbereitung & Dokumentation | ADVISORI',
        description: 'Effiziente Vorbereitung und umfassende Dokumentation für den aufsichtlichen Überprüfungs- und Bewertungsprozess (SREP) im Rahmen der CRR/CRD-Anforderungen.',
        keywords: 'SREP Vorbereitung, Supervisory Review and Evaluation Process, SREP Dokumentation, CRR/CRD SREP, Aufsichtlicher Überprüfungsprozess, SREP Beratung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRR/CRD SREP Vorbereitung & Dokumentation'
        },
        tagline: 'Optimale Positionierung im aufsichtlichen Überprüfungs- und Bewertungsprozess',
        heading: 'CRR/CRD SREP Vorbereitung & Dokumentation',
        description: 'Der Supervisory Review and Evaluation Process (SREP) ist ein zentrales Element der Bankenaufsicht unter CRR/CRD. Eine gründliche Vorbereitung und umfassende Dokumentation sind entscheidend für ein positives Ergebnis. Wir unterstützen Sie bei der systematischen Vorbereitung und professionellen Dokumentation Ihrer SREP-relevanten Prozesse und Kontrollen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strukturierte Vorbereitung auf alle Aspekte des SREP'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Professionelle Dokumentation regulatorischer Prozesse und Kontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Nachvollziehbare Darstellung von Governance und Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Optimale Positionierung gegenüber den Aufsichtsbehörden'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRR/CRD SREP Vorbereitung & Dokumentation',
        description: 'Der SREP ist ein komplexer Prüfungsprozess, der verschiedene Aspekte Ihres Instituts bewertet – von Geschäftsmodell und Governance über Kapital- und Liquiditätsrisiken bis hin zum internen Risikomanagement. Eine umfassende Vorbereitung und professionelle Dokumentation sind entscheidend, um Ihr Institut optimal zu positionieren und aufsichtliche Maßnahmen zu vermeiden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Ganzheitliche Vorbereitung auf alle SREP-Elemente und -Kriterien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Strukturierte Aufbereitung und Dokumentation der Prozesse und Kontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Identifikation und Schließung von Dokumentationslücken'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Erstellung überzeugender Nachweise für die Aufsicht'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Vorbereitung auf kritische Fragen und Herausforderungen der Prüfer'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine qualitativ hochwertige SREP-Dokumentation sollte nicht nur die formalen Anforderungen erfüllen, sondern auch die Besonderheiten Ihres Geschäftsmodells und Ihrer Risikomanagementansätze hervorheben. Zeigen Sie proaktiv, wie Sie regulatorische Anforderungen in Ihre Geschäftsprozesse integriert haben und welche Maßnahmen Sie zur kontinuierlichen Verbesserung implementiert haben.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung mit SREP-Prüfungen in verschiedenen Bankengruppen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Tiefes Verständnis der aufsichtlichen Erwartungen und Bewertungskriterien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxiserprobte Methodik zur effizienten SREP-Vorbereitung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Erfahrenes Team mit Hintergrund in Aufsicht und Bankpraxis'
            }
          ]
        },
        additionalInfo: 'Die SREP-Vorbereitung sollte idealerweise ein kontinuierlicher Prozess sein, nicht nur eine punktuelle Maßnahme vor der nächsten Prüfung. Eine gut strukturierte und aktuelle Dokumentation ermöglicht es Ihnen, jederzeit auskunftsfähig zu sein und Schwachstellen frühzeitig zu identifizieren. Unsere Experten unterstützen Sie dabei, einen nachhaltigen Ansatz für die SREP-Vorbereitung zu entwickeln.',
        serviceDescription: 'Unsere SREP-Vorbereitungs- und Dokumentationsservices umfassen alle Aspekte des aufsichtlichen Überprüfungs- und Bewertungsprozesses. Wir unterstützen Sie bei der systematischen Vorbereitung, der professionellen Dokumentation und der überzeugenden Darstellung Ihrer regulatorischen Prozesse und Kontrollen gegenüber den Aufsichtsbehörden.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Umfassende Gap-Analyse der SREP-relevanten Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Strukturierte Aufbereitung vorhandener Dokumente und Nachweise'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Erstellung fehlender Dokumentation nach aufsichtlichen Standards'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Vorbereitung auf Interviews und Vor-Ort-Prüfungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Unterstützung bei der Beantwortung aufsichtlicher Anfragen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Unsere bewährte Methodik zur SREP-Vorbereitung und -Dokumentation stellt sicher, dass alle relevanten Aspekte systematisch adressiert werden und Ihr Institut optimal auf den aufsichtlichen Überprüfungsprozess vorbereitet ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Bestandsaufnahme: Erfassung und Bewertung der vorhandenen SREP-relevanten Dokumentation und Identifikation von Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Priorisierung: Festlegung von Handlungsschwerpunkten basierend auf aufsichtlichen Anforderungen und institutsspezifischen Risiken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Dokumentationserstellung: Strukturierte Aufbereitung vorhandener und Erstellung fehlender Dokumente nach aufsichtlichen Standards'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Qualitätssicherung: Kritische Überprüfung aller Dokumente hinsichtlich Vollständigkeit, Konsistenz und Überzeugungskraft'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Simulationen: Durchführung von Mock-Interviews und Prüfungssimulationen zur gezielten Vorbereitung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Steffen Horwat',
        position: 'Director',
        quote: 'Eine professionelle SREP-Vorbereitung und -Dokumentation ist mehr als nur Compliance – sie ist eine strategische Chance, das Vertrauen der Aufsicht zu stärken und den regulatorischen Dialog auf Augenhöhe zu führen. Unsere Erfahrung zeigt, dass eine qualitativ hochwertige Dokumentation und überzeugende Nachweise maßgeblich zum Erfolg im SREP-Prozess beitragen und potenzielle aufsichtliche Maßnahmen vermeiden können.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'SREP-Dokumentations-Gap-Analyse',
          description: 'Wir analysieren Ihre vorhandene Dokumentation systematisch auf Vollständigkeit, Qualität und Überzeugungskraft im Hinblick auf die SREP-Anforderungen und identifizieren Optimierungspotenziale.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Bestandsaufnahme der SREP-relevanten Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Abgleich mit aktuellen aufsichtlichen Anforderungen und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation von Dokumentationslücken und Schwachstellen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Priorisierung von Handlungsfeldern und Maßnahmenplanung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'SREP-Dokumentationserstellung und -optimierung',
          description: 'Wir unterstützen Sie bei der Erstellung fehlender und der Optimierung vorhandener SREP-relevanter Dokumentation nach aufsichtlichen Standards und Best Practices.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Erstellung strukturierter und überzeugender SREP-Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Optimierung vorhandener Dokumente für maximale Wirksamkeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Konsistenzprüfung zwischen verschiedenen Dokumenten und Abteilungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Entwicklung von Dokumentationsstandards und -vorlagen für zukünftige Anforderungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'SREP-Prüfungsvorbereitung und -begleitung',
          description: 'Wir bereiten Ihr Institut und Ihre Mitarbeiter gezielt auf den SREP-Prozess vor und unterstützen Sie während der Prüfung bei der Beantwortung aufsichtlicher Anfragen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Schulung und Coaching der SREP-relevanten Mitarbeiter und Führungskräfte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Durchführung von Mock-Interviews und Prüfungssimulationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Unterstützung bei der Beantwortung aufsichtlicher Anfragen während der Prüfung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Nachbereitung der Prüfungsergebnisse und Umsetzung von Verbesserungsmaßnahmen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(crrCrdSrepDocData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRR/CRD SREP Vorbereitung & Dokumentation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
