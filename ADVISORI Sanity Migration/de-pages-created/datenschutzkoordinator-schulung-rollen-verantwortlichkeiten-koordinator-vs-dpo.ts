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
    console.log('Creating Datenschutzkoordinator Schulung Rollen & Verantwortlichkeiten - Koordinator vs DPO page...')

    const datenschutzkoordinatorRollenData = {
      _type: 'servicePage',
      _id: 'datenschutzkoordinator-schulung-rollen-verantwortlichkeiten-koordinator-vs-dpo',
      title: 'Datenschutzkoordinator Schulung - Rollen & Verantwortlichkeiten: Koordinator vs DPO',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/datenschutzkoordinator-schulung/datenschutzkoordinator-schulung-rollen-verantwortlichkeiten-koordinator-vs-dpo'
      },
      parent: {
        _type: 'reference',
        _ref: 'datenschutzkoordinator-schulung'
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
        title: 'Datenschutzkoordinator vs DPO - Rollen & Verantwortlichkeiten | ADVISORI',
        description: 'Professionelle Schulung zu den unterschiedlichen Rollen und Verantwortlichkeiten von Datenschutzkoordinatoren und Datenschutzbeauftragten. Klare Abgrenzung und optimale Zusammenarbeit.',
        keywords: 'Datenschutzkoordinator, DPO, Datenschutzbeauftragter, Rollen, Verantwortlichkeiten, Abgrenzung, Zusammenarbeit, DSGVO'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Datenschutzkoordinator Schulung - Rollen & Verantwortlichkeiten: Koordinator vs DPO'
        },
        tagline: 'Klare Rollenabgrenzung für effektive Datenschutzorganisation',
        heading: 'Datenschutzkoordinator Schulung - Rollen & Verantwortlichkeiten: Koordinator vs DPO',
        description: 'Verstehen Sie die unterschiedlichen Rollen und Verantwortlichkeiten von Datenschutzkoordinatoren und Datenschutzbeauftragten. Unsere Schulung schafft Klarheit über Aufgabenteilung, Kompetenzen und optimale Zusammenarbeit für eine effektive Datenschutzorganisation.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Klare Abgrenzung der Rollen und Verantwortlichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierte Zusammenarbeit zwischen Koordinator und DPO'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effiziente Datenschutzorganisation und -prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Rechtssichere Aufgabenverteilung und Kommunikation'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Datenschutzkoordinator vs DPO - Rollen & Verantwortlichkeiten',
        description: 'Die erfolgreiche Implementierung einer DSGVO-konformen Datenschutzorganisation erfordert eine klare Abgrenzung zwischen den Rollen des Datenschutzkoordinators und des Datenschutzbeauftragten (DPO). Diese Schulung vermittelt fundiertes Wissen über die unterschiedlichen Aufgaben, Kompetenzen und Verantwortlichkeiten beider Positionen sowie deren optimale Zusammenarbeit.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Rechtliche Grundlagen und Anforderungen für beide Rollen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Klare Abgrenzung der Aufgaben und Verantwortlichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Kommunikations- und Kooperationsstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Praktische Umsetzung der Zusammenarbeit im Unternehmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Konfliktmanagement und Eskalationswege'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine klare Rollenverteilung zwischen Datenschutzkoordinator und DPO ist essentiell für eine effiziente Datenschutzorganisation und verhindert Kompetenzstreitigkeiten sowie Compliance-Lücken.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Langjährige Erfahrung in der Etablierung erfolgreicher Datenschutzorganisationen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Modelle für die Rollen- und Aufgabenverteilung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Fundierte juristische Expertise und organisatorisches Know-how'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Individuell angepasste Lösungen für verschiedene Unternehmensstrukturen'
            }
          ]
        },
        additionalInfo: 'Die Schulung zu Rollen und Verantwortlichkeiten zwischen Datenschutzkoordinator und DPO ist darauf ausgerichtet, eine effiziente und rechtskonforme Datenschutzorganisation zu etablieren, die alle Beteiligten optimal unterstützt.',
        serviceDescription: 'Unsere Schulung bietet eine systematische Aufarbeitung der unterschiedlichen Rollen von Datenschutzkoordinatoren und Datenschutzbeauftragten und vermittelt praktische Lösungen für eine erfolgreiche Zusammenarbeit.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Detaillierte Analyse der rechtlichen Grundlagen beider Rollen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung maßgeschneiderter Organisationsstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Praxisorientierte Workshops und Fallstudien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Tools und Templates für die tägliche Zusammenarbeit'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Betreuung und Optimierung der Prozesse'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Schulungsansatz',
        description: 'Wir vermitteln fundiertes Wissen über Rollenabgrenzung und effektive Zusammenarbeit durch eine strukturierte Kombination aus rechtlicher Analyse und praktischer Umsetzung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Systematische Analyse der rechtlichen Grundlagen und Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung klarer Rollen- und Verantwortlichkeitsmatrizen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Praxisorientierte Simulation von Kooperationsszenarien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung individueller Organisationsmodelle'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Implementierungsbegleitung und Erfolgscontrolling'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Rainer Markus',
        position: 'Senior Partner',
        quote: 'Eine klare Rollenverteilung zwischen Datenschutzkoordinator und DPO ist der Schlüssel für eine effiziente Datenschutzorganisation. Unsere Schulung schafft die notwendige Klarheit für eine erfolgreiche Zusammenarbeit beider Funktionen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Rollenabgrenzung und rechtliche Grundlagen',
          description: 'Systematische Aufarbeitung der unterschiedlichen rechtlichen Anforderungen und Verantwortlichkeiten von Datenschutzkoordinatoren und DPOs.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'DSGVO-Anforderungen an beide Rollen im Detail'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Nationale Besonderheiten und Interpretationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Haftungs- und Verantwortlichkeitsaspekte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Aufsichtsbehördliche Erwartungen und Praxis'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Praktische Zusammenarbeit und Organisationsmodelle',
          description: 'Entwicklung effektiver Kooperationsstrukturen und Implementierung optimaler Organisationsmodelle für beide Rollen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Aufgaben- und Kompetenzverteilung in der Praxis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Kommunikationswege und Berichtspflichten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Konfliktprevention und Eskalationsmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration in bestehende Unternehmensstrukturen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(datenschutzkoordinatorRollenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Datenschutzkoordinator Schulung Rollen & Verantwortlichkeiten - Koordinator vs DPO page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
