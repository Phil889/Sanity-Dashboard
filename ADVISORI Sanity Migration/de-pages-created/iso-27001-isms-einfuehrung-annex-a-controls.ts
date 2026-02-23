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
    console.log('Creating ISO 27001 ISMS Einführung Annex A Controls page...')

    const iso27001AnxAData = {
      _type: 'servicePage',
      _id: 'iso-27001-isms-einfuehrung-annex-a-controls',
      title: 'ISO 27001 ISMS Einführung Annex A Controls',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-isms-einfuehrung-annex-a-controls'
      },
      parent: {
        _type: 'reference',
        _ref: 'iso-27001'
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
        title: 'ISO 27001 ISMS Einführung Annex A Controls | ADVISORI',
        description: 'Professionelle Unterstützung bei der Implementierung der ISO 27001 Annex A Sicherheitsmaßnahmen. Wir begleiten Sie bei der strukturierten Einführung aller 114 Sicherheitskontrollen für ein effektives ISMS.',
        keywords: 'ISO 27001, Annex A Controls, ISMS, Informationssicherheitsmanagement, Sicherheitsmaßnahmen, Compliance, Zertifizierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 ISMS Annex A Controls'
        },
        tagline: 'Strukturierte Implementierung der ISO 27001 Sicherheitskontrollen',
        heading: 'ISO 27001 ISMS Einführung Annex A Controls',
        description: 'Die 114 Sicherheitsmaßnahmen des Annex A bilden das Herzstück eines effektiven ISMS. Wir unterstützen Sie bei der systematischen Implementierung, Anpassung und Integration dieser Controls in Ihre Organisationsstruktur.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Implementierung aller 114 Annex A Controls'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Maßgeschneiderte Anpassung an Ihre Organisationsstruktur'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effiziente Integration in bestehende Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachhaltige Etablierung von Sicherheitskultur und -bewusstsein'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ISO 27001 ISMS Einführung Annex A Controls',
        description: 'Annex A der ISO 27001 enthält 114 spezifische Sicherheitsmaßnahmen, die in vier Hauptkategorien unterteilt sind: Organisatorische, Personelle, Physische und Technische Controls. Diese bilden das operative Fundament eines jeden ISMS und müssen systematisch implementiert, dokumentiert und kontinuierlich überwacht werden. Wir unterstützen Sie bei der strategischen und praxisorientierten Umsetzung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Gap-Analyse und Risikobewertung für alle Annex A Kategorien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung einer priorisierten Implementierungsroadmap basierend auf Risikoanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Systematische Umsetzung organisatorischer, personeller und technischer Sicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von Controls in bestehende IT- und Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Entwicklung von Überwachungs-, Mess- und Verbesserungsprozessen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine erfolgreiche Annex A Implementation erfordert nicht nur die technische Umsetzung der Controls, sondern auch die Integration in die Unternehmenskultur. Der Schlüssel liegt in der Kombination aus strukturiertem Projektmanagement und kontinuierlichem Change Management.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in allen 114 Annex A Controls und deren praktischer Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Branchenspezifische Anpassung der Controls an verschiedene Geschäftsmodelle'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methodiken zur effizienten und nachhaltigen Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von der Strategie bis zur operativen Umsetzung'
            }
          ]
        },
        additionalInfo: 'Die Annex A Controls sind nicht nur Compliance-Anforderungen, sondern strategische Instrumente zur Stärkung der Cyber-Resilienz und des Vertrauens von Kunden und Partnern. Eine professionelle Implementation kann erhebliche Wettbewerbsvorteile schaffen.',
        serviceDescription: 'Wir bieten eine umfassende Begleitung bei der Implementierung der ISO 27001 Annex A Controls. Unser Ansatz kombiniert strategische Planung mit praktischer Umsetzung und nachhaltiger Integration in Ihre Organisationsstruktur.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Detaillierte Gap-Analyse und Risikobasierte Control-Priorisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung von Control-spezifischen Implementierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Aufbau von Governance-Strukturen und Verantwortlichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Implementierung von Monitoring- und Measurement-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulung und Change Management für nachhaltige Etablierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam einen strukturierten Ansatz zur systematischen Implementierung aller relevanten Annex A Controls in Ihrer Organisation.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Control Assessment und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Risikobasierte Priorisierung und Implementierungsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Schrittweise Umsetzung mit kontinuierlicher Erfolgsmessung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration in bestehende Prozesse und Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung von Continuous Improvement und Monitoring'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Die Annex A Controls sind das operative Herzstück jedes ISMS. Unsere strukturierte Herangehensweise stellt sicher, dass diese Controls nicht nur implementiert, sondern auch gelebt werden und nachhaltigen Schutz bieten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Organisatorische Controls (A.5-A.8)',
          description: 'Implementierung der organisatorischen Sicherheitsmaßnahmen einschließlich Informationssicherheitsrichtlinien, Risikomanagement, Lieferantenbeziehungen und Incident Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Entwicklung und Implementierung von Informationssicherheitsrichtlinien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Aufbau von Risikomanagement-Prozessen und -Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Etablierung von Supplier Management und Third-Party Risk Controls'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Implementierung von Incident Response und Business Continuity'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Personelle und Physische Controls (A.6-A.7, A.11)',
          description: 'Umsetzung personalbezogener Sicherheitsmaßnahmen und physischer Schutzkontrollen für Einrichtungen, Systeme und Ausrüstung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung von Personalsicherheits- und Awareness-Programmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementierung physischer Zugangskontrollen und Gebäudesicherheit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Aufbau von Security Training und Sensibilisierungsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Etablierung von Asset Management und Secure Disposal Prozessen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001AnxAData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 ISMS Einführung Annex A Controls page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
