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
    console.log('Creating EBA (European Banking Authority) page...')

    const ebaData = {
      _type: 'servicePage',
      _id: 'eba',
      title: 'EBA Compliance',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eba'
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
        title: 'EBA Compliance | ADVISORI',
        description: 'Gewährleisten Sie die Einhaltung von EBA-Regularien mit unserem umfassenden Compliance-Management. Wir unterstützen Sie bei der Implementierung, Überwachung und kontinuierlichen Anpassung an regulatorische Anforderungen.',
        keywords: 'EBA, European Banking Authority, Bankenregulierung, Compliance, Finanzaufsicht, Regulatorische Anforderungen, SREP, Stresstest'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EBA Compliance'
        },
        tagline: 'Effiziente Erfüllung regulatorischer Anforderungen der European Banking Authority',
        heading: 'EBA Compliance',
        description: 'Die European Banking Authority (EBA) stellt umfangreiche regulatorische Anforderungen an Finanzinstitute. Wir unterstützen Sie bei der effizienten Implementierung und kontinuierlichen Einhaltung dieser Vorschriften, um Compliance-Risiken zu minimieren und operative Exzellenz zu gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Lückenlose Erfüllung der EBA-Regularien und -Richtlinien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Reduzierung von Compliance-Kosten durch effiziente Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Verbesserung der Datenqualität und Berichterstattung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strategische Ausrichtung der Compliance-Aktivitäten auf Geschäftsziele'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EBA Compliance',
        description: 'Die European Banking Authority (EBA) entwickelt und implementiert regulatorische Standards für den europäischen Bankensektor. Unsere Experten unterstützen Sie bei der Umsetzung dieser Anforderungen, von der Gap-Analyse bis zur kontinuierlichen Überwachung und Anpassung Ihrer Compliance-Prozesse.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Gap-Analyse und Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung maßgeschneiderter Implementierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Optimierung von Datenprozessen und Berichtsstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Unterstützung bei SREP und regulatorischen Stresstests'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliches Monitoring und Anpassung an neue Anforderungen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Die Einhaltung der EBA-Regularien erfordert einen ganzheitlichen Ansatz, der Datenmanagement, Prozessoptimierung und Risikomanagement integriert. Eine proaktive Herangehensweise spart langfristig Ressourcen und minimiert Compliance-Risiken.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in allen relevanten EBA-Regularien und -Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung in der Implementierung von Compliance-Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxisnahe Beratung mit Fokus auf Effizienz und Wertschöpfung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Interdisziplinäres Team aus Compliance-Experten, Datenspezialisten und IT-Fachleuten'
            }
          ]
        },
        additionalInfo: 'Die zunehmende Komplexität der EBA-Regularien stellt Finanzinstitute vor wachsende Herausforderungen. Eine effektive Compliance-Strategie kann nicht nur Risiken minimieren, sondern auch als Wettbewerbsvorteil dienen und die Unternehmensresilienz stärken.',
        serviceDescription: 'Wir bieten maßgeschneiderte Lösungen für alle Aspekte der EBA-Compliance, von der Implementierung neuer regulatorischer Anforderungen bis zur Optimierung bestehender Compliance-Prozesse. Unser Ziel ist es, Compliance nicht als Kostenfaktor, sondern als strategischen Mehrwert für Ihr Unternehmen zu positionieren.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Regulatory Impact Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Implementierung regulatorischer Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Optimierung von Meldewesensprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Vorbereitung auf aufsichtsrechtliche Prüfungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Continuous Compliance Monitoring'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte EBA-Compliance-Strategie, die auf Ihre spezifischen Anforderungen und Geschäftsziele ausgerichtet ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse Ihrer bestehenden Compliance-Strukturen und -Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Identifikation von Compliance-Lücken und Optimierungspotentialen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung einer maßgeschneiderten Implementierungsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Umsetzung regulatorischer Anforderungen mit Fokus auf Effizienz'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und Anpassung an neue Regularien'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Markus Krall',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir einen Partner gefunden, der uns nicht nur bei der Erfüllung der EBA-Anforderungen unterstützt, sondern auch dabei hilft, unsere Compliance-Prozesse effizienter zu gestalten. Die Kombination aus regulatorischem Know-how und praktischer Implementierungserfahrung hat uns einen deutlichen Mehrwert gebracht.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Regulatory Impact Assessment',
          description: 'Wir analysieren die Auswirkungen neuer EBA-Regularien auf Ihre Organisation und entwickeln maßgeschneiderte Lösungsansätze.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse neuer regulatorischer Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung der organisatorischen und prozessualen Implikationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation von Handlungsbedarfen und Prioritäten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung eines strategischen Implementierungsplans'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'EBA Compliance Implementation',
          description: 'Wir unterstützen Sie bei der effizienten Implementierung von EBA-Regularien in Ihre bestehenden Prozesse und Systeme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Anpassung von Organisationsstrukturen und Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integration regulatorischer Anforderungen in IT-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung von Compliance-Policies und -Verfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Schulung und Wissenstransfer für Ihre Mitarbeiter'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(ebaData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EBA page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
