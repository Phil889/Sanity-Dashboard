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
    console.log('Creating EBA Monitoring von EBA Updates page...')

    const ebaMonitoringUpdatesData = {
      _type: 'servicePage',
      _id: 'eba-monitoring-von-eba-updates',
      title: 'EBA Monitoring von EBA Updates',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eba/eba-ongoing-compliance/eba-monitoring-von-eba-updates'
      },
      parent: {
        _type: 'reference',
        _ref: 'eba-ongoing-compliance'
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
        title: 'EBA Monitoring von EBA Updates | ADVISORI',
        description: 'Bleiben Sie stets über Änderungen der EBA-Anforderungen informiert mit unserem spezialisierten Monitoring-Service. Wir identifizieren, analysieren und bewerten relevante regulatorische Entwicklungen, um Ihr Institut proaktiv auf kommende Compliance-Anforderungen vorzubereiten.',
        keywords: 'EBA Monitoring, EBA Updates, regulatorische Entwicklungen, Europäische Bankenaufsicht, Regulatorische Änderungen, Compliance-Vorbereitung, EBA-Anforderungen'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EBA Monitoring von EBA Updates'
        },
        tagline: 'Proaktive Überwachung regulatorischer Entwicklungen',
        heading: 'EBA Monitoring von EBA Updates',
        description: 'Sichern Sie die kontinuierliche Konformität Ihres Finanzinstituts durch unser systematisches Monitoring von EBA-Updates und regulatorischen Entwicklungen. Unser spezialisierter Service identifiziert, analysiert und bewertet relevante Änderungen frühzeitig, um Ihr Institut proaktiv auf kommende Anforderungen vorzubereiten und regulatorische Überraschungen zu vermeiden.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Frühzeitige Identifikation relevanter EBA-Updates und regulatorischer Änderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Detaillierte Impact-Analysen für Ihr Institut mit maßgeschneiderten Handlungsempfehlungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Priorisierte Umsetzungsplanung für effiziente Ressourcenallokation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strukturierte Kommunikation regulatorischer Entwicklungen an relevante Stakeholder'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EBA Monitoring von EBA Updates',
        description: 'Die kontinuierliche Überwachung und Analyse regulatorischer Entwicklungen der Europäischen Bankenaufsicht (EBA) ist für Finanzinstitute geschäftskritisch. Unser spezialisierter Monitoring-Service etabliert systematische Prozesse zur frühzeitigen Identifikation, präzisen Bewertung und strategischen Umsetzungsplanung relevanter EBA-Updates – ein essenzieller Baustein für proaktives Compliance-Management und regulatorische Voraussicht.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Etablierung eines umfassenden Monitoring-Systems für EBA-Publikationen und -Entwicklungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung strukturierter Prozesse zur Analyse und Bewertung regulatorischer Änderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementation eines institutsspezifischen Impact-Assessment-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Erstellung priorisierter Umsetzungspläne für identifizierte regulatorische Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Konzeption zielgruppengerechter Kommunikationsformate für regulatorische Entwicklungen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Für ein effektives EBA-Monitoring ist die Kombination aus automatisierten Tracking-Tools und fachlicher Expertise entscheidend. Etablieren Sie ein dediziertes "Regulatory Intelligence Team" mit klaren Verantwortlichkeiten und definierten Eskalationswegen. Institute, die einen solchen strukturierten Ansatz implementieren, reduzieren ihren Reaktionsaufwand bei regulatorischen Änderungen um bis zu 50% und minimieren Compliance-Risiken signifikant.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in EBA-Regularien und aufsichtsrechtlichen Entwicklungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodik für systematisches Monitoring und Impact-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Kombination aus regulatorischem Know-how und praktischer Umsetzungserfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Nachweisliche Erfolge bei der Implementation effektiver Monitoring-Systeme'
            }
          ]
        },
        additionalInfo: 'Durch die Implementation unseres EBA-Monitoring-Ansatzes haben unsere Kunden ihre Reaktionszeit auf regulatorische Änderungen um durchschnittlich 65% reduziert und die Qualität ihrer Compliance-Vorbereitung signifikant verbessert. Die frühzeitige Identifikation relevanter Entwicklungen ermöglicht eine strategische Ressourcenplanung und verhindert kostspielige Last-Minute-Implementierungen. Unsere Kunden berichten von einer deutlichen Reduzierung regulatorischer Überraschungen und einer signifikanten Verbesserung ihrer aufsichtsrechtlichen Reputation.',
        serviceDescription: 'Unser EBA-Monitoring-Service bietet eine umfassende Lösung für die kontinuierliche Überwachung und Analyse relevanter regulatorischer Entwicklungen. Wir unterstützen Sie bei der Etablierung systematischer Prozesse zur frühzeitigen Identifikation, präzisen Bewertung und strategischen Umsetzungsplanung von EBA-Updates, um Compliance-Risiken zu minimieren und regulatorische Voraussicht zu maximieren.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Assessment bestehender Monitoring-Prozesse und -Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung und Implementierung eines maßgeschneiderten EBA-Monitoring-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Etablierung strukturierter Prozesse für Impact-Assessment und Priorisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Implementation eines institutsspezifischen Kommunikationskonzepts für regulatorische Entwicklungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Entwicklung von Werkzeugen und Templates für systematisches Regulatory Change Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und bewährten Ansatz für die Implementierung eines effektiven EBA-Monitoring-Systems, der frühzeitige Identifikation und strategische Vorbereitung auf regulatorische Änderungen sicherstellt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse bestehender Monitoring-Prozesse und Identifikation von Optimierungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung eines maßgeschneiderten EBA-Monitoring-Frameworks mit definierten Verantwortlichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung strukturierter Prozesse für Impact-Assessment und Priorisierung regulatorischer Änderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung eines institutsspezifischen Kommunikationskonzepts für regulatorische Entwicklungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Integration von Monitoring-Aktivitäten in das übergreifende Regulatory Change Management'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Thomas Schmidt',
        position: 'Director Regulatory Intelligence',
        quote: 'Die systematische Überwachung von EBA-Updates ist der Schlüssel zu proaktivem Compliance-Management. Unser strukturierter Monitoring-Ansatz ermöglicht es Finanzinstituten, regulatorische Entwicklungen frühzeitig zu erkennen und strategisch zu adressieren, anstatt reaktiv auf aufsichtsrechtliche Anforderungen zu reagieren. Die Kombination aus automatisierten Tracking-Tools, fachlicher Expertise und institutsspezifischen Impact-Assessments schafft regulatorische Voraussicht und minimiert Compliance-Risiken signifikant. Institute, die diesen Ansatz implementieren, transformieren Regulatory Change Management von einem reaktiven Kostenfaktor zu einem strategischen Wettbewerbsvorteil.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'EBA-Monitoring-System & Prozessdesign',
          description: 'Wir entwickeln und implementieren ein maßgeschneidertes System zur systematischen Überwachung relevanter EBA-Publikationen und -Entwicklungen, das frühzeitige Identifikation und strukturierte Analyse regulatorischer Änderungen ermöglicht.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Entwicklung eines umfassenden Monitoring-Frameworks mit definierten Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Implementation automatisierter Tracking-Tools für EBA-Publikationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Etablierung strukturierter Analyse- und Bewertungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration von Monitoring-Aktivitäten in das übergreifende Compliance-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Impact-Assessment & Umsetzungsplanung',
          description: 'Wir etablieren systematische Prozesse zur Bewertung der Auswirkungen regulatorischer Änderungen auf Ihr Institut und entwickeln priorisierte Umsetzungspläne, die eine effiziente Ressourcenallokation ermöglichen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung eines institutsspezifischen Impact-Assessment-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Erstellung strukturierter Gap-Analysen für identifizierte regulatorische Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Priorisierung von Umsetzungsmaßnahmen nach Risikogesichtspunkten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Entwicklung integrierter Umsetzungspläne mit klaren Verantwortlichkeiten und Zeitlinien'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(ebaMonitoringUpdatesData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EBA Monitoring von EBA Updates page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
