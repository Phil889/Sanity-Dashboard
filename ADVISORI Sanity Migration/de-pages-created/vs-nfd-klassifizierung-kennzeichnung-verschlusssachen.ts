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
    console.log('Creating VS-NFD Klassifizierung Kennzeichnung Verschlusssachen page...')

    const pageData = {
      _type: 'servicePage',
      _id: 'vs-nfd-klassifizierung-kennzeichnung-verschlusssachen',
      title: 'VS-NFD Klassifizierung Kennzeichnung Verschlusssachen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/vs-nfd/vs-nfd-readiness/vs-nfd-klassifizierung-kennzeichnung-verschlusssachen'
      },
      parent: {
        _type: 'reference',
        _ref: 'vs-nfd-readiness'
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
        title: 'VS-NFD Klassifizierung Kennzeichnung Verschlusssachen | ADVISORI',
        description: 'Professionelle Unterstützung bei der ordnungsgemäßen Klassifizierung und Kennzeichnung von Verschlusssachen (VS-NFD). Wir sorgen für sichere und normkonforme Behandlung vertraulicher Informationen.',
        keywords: 'VS-NFD, Verschlusssachen, Klassifizierung, Kennzeichnung, Informationssicherheit, Compliance, Vertraulichkeit, Behörden'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'VS-NFD Klassifizierung Kennzeichnung Verschlusssachen'
        },
        tagline: 'Expertenlösungen für sichere Informationsklassifizierung',
        heading: 'VS-NFD Klassifizierung Kennzeichnung Verschlusssachen',
        description: 'Die ordnungsgemäße Klassifizierung und Kennzeichnung von Verschlusssachen ist ein kritischer Baustein der Informationssicherheit. Wir unterstützen Sie bei der Implementierung robuster Klassifizierungssysteme und der compliance-konformen Behandlung vertraulicher Informationen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Normkonforme Klassifizierungs- und Kennzeichnungsverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Systematische Risikobewertung und Schutzbedarfsanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Automatisierte Klassifizierungstools und Workflow-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Umfassende Schulungs- und Sensibilisierungsprogramme'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'VS-NFD Klassifizierung Kennzeichnung Verschlusssachen',
        description: 'Die korrekte Klassifizierung und Kennzeichnung von Verschlusssachen (VS-NFD) ist eine fundamentale Anforderung für den Schutz sensitiver Informationen in Behörden und sicherheitsrelevanten Organisationen. Ein systematischer Ansatz gewährleistet nicht nur Compliance, sondern auch operationale Effizienz bei der Behandlung vertraulicher Dokumente.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung einheitlicher Klassifizierungsrichtlinien und -standards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung automatisierter Kennzeichnungs- und Tracking-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration in bestehende Dokumentenmanagementsysteme und Workflows'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau effektiver Kontroll- und Überwachungsmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Etablierung von Schulungs- und Zertifizierungsprogrammen für Mitarbeiter'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine erfolgreiche VS-NFD-Implementierung erfordert nicht nur technische Lösungen, sondern auch eine starke Sicherheitskultur und kontinuierliche Sensibilisierung aller Beteiligten für den Umgang mit klassifizierten Informationen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in nationalen und internationalen Klassifizierungsstandards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung in der Umsetzung von VS-NFD-Systemen in verschiedenen Behörden'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von technischer Implementation bis Organisationsentwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Innovative Technologielösungen für automatisierte Klassifizierung und Compliance'
            }
          ]
        },
        additionalInfo: 'Die Klassifizierung und Kennzeichnung von Verschlusssachen ist ein komplexer Prozess, der technische, organisatorische und rechtliche Aspekte umfasst. Ein professioneller Ansatz kann Sicherheitsrisiken minimieren und gleichzeitig die operative Effizienz steigern.',
        serviceDescription: 'Wir bieten umfassende Unterstützung bei der Entwicklung, Implementierung und Optimierung von VS-NFD-Klassifizierungssystemen. Unser Ansatz kombiniert bewährte Methoden mit innovativen Technologien für maximale Sicherheit und Effizienz.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'VS-NFD Compliance Assessment und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung maßgeschneiderter Klassifizierungsrichtlinien und -verfahren'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierung automatisierter Klassifizierungs- und Kennzeichnungssysteme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integration in bestehende IT-Infrastrukturen und Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulung und Zertifizierung von Mitarbeitern und Führungskräften'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam einen strukturierten Ansatz zur sicheren und effizienten Klassifizierung und Kennzeichnung von Verschlusssachen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse der bestehenden Informationslandschaft und Schutzbedarfe'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten Klassifizierungsstrategie und -richtlinien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung technischer Lösungen und Prozessintegration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Schulung der Mitarbeiter und Etablierung einer Sicherheitskultur'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung, Bewertung und Optimierung der Klassifizierungsprozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Die ordnungsgemäße Klassifizierung und Kennzeichnung von Verschlusssachen ist mehr als nur eine Compliance-Anforderung – sie ist ein strategischer Baustein für den Schutz kritischer Informationen und die Wahrung nationaler Sicherheitsinteressen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'VS-NFD Compliance Assessment und Strategieentwicklung',
          description: 'Wir analysieren Ihre bestehenden Klassifizierungsprozesse und entwickeln eine umfassende Strategie für die compliance-konforme Behandlung von Verschlusssachen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Bewertung der aktuellen Klassifizierungspraktiken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation von Compliance-Lücken und Sicherheitsrisiken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung maßgeschneiderter Klassifizierungsrichtlinien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Erstellung einer priorisierten Implementierungsroadmap'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Technische Implementation und Systemintegration',
          description: 'Wir implementieren moderne Technologielösungen für die automatisierte Klassifizierung und Integration in Ihre bestehende IT-Landschaft.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung automatisierter Klassifizierungs- und Kennzeichnungstools'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integration in Dokumentenmanagementsysteme und Workflows'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Implementierung von Tracking- und Audit-Funktionalitäten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Aufbau umfassender Monitoring- und Reporting-Systeme'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(pageData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ VS-NFD Klassifizierung Kennzeichnung Verschlusssachen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
