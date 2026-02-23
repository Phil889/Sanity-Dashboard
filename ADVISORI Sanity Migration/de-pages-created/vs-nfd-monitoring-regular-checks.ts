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
    console.log('Creating VS-NFD Monitoring & Regular Checks page...')

    const vsNfdMonitoringData = {
      _type: 'servicePage',
      _id: 'vs-nfd-monitoring-regular-checks',
      title: 'VS-NFD Monitoring & Regular Checks',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/vs-nfd/vs-nfd-implementation/vs-nfd-monitoring-regular-checks'
      },
      parent: {
        _type: 'reference',
        _ref: 'vs-nfd-implementation'
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
        title: 'VS-NFD Monitoring & Regular Checks | ADVISORI',
        description: 'Kontinuierliche Überwachung und regelmäßige Kontrollen zur Einhaltung der VS-NFD Bestimmungen. Proaktive Compliance-Sicherung durch systematisches Monitoring.',
        keywords: 'VS-NFD, Monitoring, Regular Checks, Compliance, Überwachung, Kontrollen, Aufsichtsrecht, Finanzdienstleistungen'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'VS-NFD Monitoring & Regular Checks'
        },
        tagline: 'Kontinuierliche Compliance-Sicherung durch systematisches VS-NFD Monitoring',
        heading: 'VS-NFD Monitoring & Regular Checks',
        description: 'Stellen Sie die dauerhafte Einhaltung der VS-NFD Bestimmungen durch systematische Überwachung und regelmäßige Kontrollen sicher. Wir unterstützen Sie bei der Implementierung proaktiver Monitoring-Systeme.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Kontinuierliche Überwachung der VS-NFD Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Frühzeitige Erkennung von Compliance-Abweichungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Automatisierte Reporting- und Alerting-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Proaktive Risikominimierung und Handlungsempfehlungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'VS-NFD Monitoring & Regular Checks',
        description: 'Die kontinuierliche Überwachung der VS-NFD Einhaltung ist entscheidend für die nachhaltige Compliance-Sicherung. Wir entwickeln systematische Monitoring-Frameworks und Kontrollmechanismen, die proaktive Compliance-Überwachung ermöglichen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung von VS-NFD-spezifischen Monitoring-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung automatisierter Überwachungssysteme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Design regelmäßiger Compliance-Kontrollen und Audits'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Etablierung von Frühwarnsystemen und Eskalationsverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Optimierung der Monitoring-Prozesse'
          }
        ],
        alert: {
          title: 'Compliance-Hinweis',
          content: 'Regelmäßige Monitoring-Zyklen sind für die VS-NFD Compliance unerlässlich. Ein systematischer Ansatz zur kontinuierlichen Überwachung minimiert Compliance-Risiken und ermöglicht proaktive Anpassungen.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in aufsichtsrechtlichen Monitoring-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrung mit automatisierten Compliance-Überwachungssystemen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Monitoring-Lösungen für Finanzdienstleister'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung und Optimierung der Monitoring-Prozesse'
            }
          ]
        },
        additionalInfo: 'Ein effektives VS-NFD Monitoring-System kann Compliance-Verletzungen um bis zu 85% reduzieren und ermöglicht es Finanzdienstleistern, proaktiv auf regulatorische Änderungen zu reagieren.',
        serviceDescription: 'Wir bieten umfassende Lösungen für das kontinuierliche Monitoring und die regelmäßige Kontrolle der VS-NFD Einhaltung. Von der Konzeption bis zur Implementierung und laufenden Optimierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'VS-NFD Monitoring-Framework Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Automatisierte Überwachungssystem-Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Regular Check Prozessdesign und -umsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Compliance-Dashboard und Reporting-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Frühwarnsystem-Implementierung und Eskalationsverfahren'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Monitoring-Ansatz',
        description: 'Wir entwickeln maßgeschneiderte Monitoring-Lösungen, die kontinuierliche VS-NFD Compliance gewährleisten und proaktive Steuerung ermöglichen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der VS-NFD Monitoring-Anforderungen und Risikobereiche'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design systematischer Überwachungsframeworks und Kontrollzyklen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung automatisierter Monitoring-Tools und Dashboards'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung regelmäßiger Check-Prozesse und Audit-Zyklen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Anpassung der Monitoring-Systeme'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir ein robustes VS-NFD Monitoring-System etabliert, das uns kontinuierliche Compliance-Sicherheit bietet. Die proaktiven Warnsysteme und systematischen Kontrollen haben unsere Compliance-Effizienz erheblich verbessert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Monitoring-Framework Design',
          description: 'Entwicklung systematischer Überwachungsframeworks für die kontinuierliche VS-NFD Compliance-Kontrolle.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'VS-NFD-spezifische Monitoring-Architektur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Risikoorientierte Überwachungskonzepte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Automatisierte Monitoring-Workflows'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integrierte Reporting- und Dashboard-Lösungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Regular Check Prozesse',
          description: 'Systematische Implementierung regelmäßiger Compliance-Kontrollen und Audit-Zyklen für nachhaltige VS-NFD Einhaltung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Strukturierte Kontrollzyklen und Checklisten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automatisierte Compliance-Assessments'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Frühwarnsysteme und Eskalationsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Prozessoptimierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(vsNfdMonitoringData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ VS-NFD Monitoring & Regular Checks page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
