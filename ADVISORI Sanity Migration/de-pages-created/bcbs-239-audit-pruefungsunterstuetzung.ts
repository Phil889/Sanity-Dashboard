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
    console.log('Creating BCBS-239 Audit Prüfungsunterstützung page...')

    const bcbs239AuditPruefungData = {
      _type: 'servicePage',
      _id: 'bcbs-239-audit-pruefungsunterstuetzung',
      title: 'BCBS-239 Audit & Prüfungsunterstützung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/bcbs-239/bcbs-239-ongoing-compliance/bcbs-239-audit-pruefungsunterstuetzung'
      },
      parent: {
        _type: 'reference',
        _ref: 'bcbs-239-ongoing-compliance'
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
        title: 'BCBS-239 Audit & Prüfungsunterstützung | ADVISORI',
        description: 'Umfassende Unterstützung bei BCBS-239 Audits und regulatorischen Prüfungen. Wir helfen Ihnen, Prüfungen effizient zu bestehen und nachhaltige Compliance sicherzustellen.',
        keywords: 'BCBS-239, Audit, Prüfung, Revision, Prüfungsunterstützung, Regulatorische Prüfung, Compliance, Finanzregulierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'BCBS-239 Audit & Prüfungsunterstützung'
        },
        tagline: 'Professionelle Unterstützung für erfolgreiche BCBS-239 Audits',
        heading: 'BCBS-239 Audit & Prüfungsunterstützung',
        description: 'Regulatorische Prüfungen zur BCBS-239 Compliance stellen für Finanzinstitute eine besondere Herausforderung dar. Unsere spezialisierte Audit-Unterstützung hilft Ihnen, Prüfungen effizient vorzubereiten, erfolgreich zu begleiten und nachhaltige Verbesserungen zu implementieren.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Professionelle Vorbereitung und Begleitung von BCBS-239 Audits'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Systematische Aufbereitung prüfungsrelevanter Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effizienter Umgang mit Prüfungsanforderungen und -feststellungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachhaltige Verbesserungen der BCBS-239 Compliance'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'BCBS-239 Audit & Prüfungsunterstützung',
        description: 'Regulatorische Prüfungen zur BCBS-239 Compliance erfordern eine gründliche Vorbereitung, fundierte Expertise und strukturierte Prozesse. Wir unterstützen Sie in allen Phasen des Audit-Prozesses – von der präventiven Vorbereitung über die professionelle Begleitung bis zur nachhaltigen Umsetzung der Prüfungsergebnisse.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Pre-Audit Assessment und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Aufbereitung prüfungsrelevanter Dokumentation und Nachweise'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Unterstützung während der Prüfung und bei Prüfergesprächen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Erarbeitung und Umsetzung von Maßnahmen zur Behebung von Feststellungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Präventive Verbesserung der BCBS-239 Compliance für zukünftige Audits'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiche BCBS-239 Audits beginnen lange vor dem eigentlichen Prüfungstermin. Eine kontinuierliche Selbstbewertung und präventive Compliance-Maßnahmen reduzieren den Aufwand während der Prüfung erheblich und verbessern die Prüfungsergebnisse nachweislich.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in regulatorischen Prüfungsverfahren und BCBS-239'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrenes Team mit Hintergrund in Aufsicht, Prüfung und Finanzinstituten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methoden zur Aufbereitung von Nachweisen und Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz zur nachhaltigen Verbesserung der Compliance'
            }
          ]
        },
        additionalInfo: 'Eine professionelle Audit-Unterstützung reduziert den internen Aufwand während regulatorischer Prüfungen um bis zu 50% und führt nachweislich zu besseren Prüfungsergebnissen. Investieren Sie in exzellente Prüfungsvorbereitung für mehr Sicherheit und Effizienz!',
        serviceDescription: 'Wir bieten umfassende Unterstützung für BCBS-239 Audits und regulatorische Prüfungen. Unser Leistungsspektrum umfasst die gesamte Prüfungskette – von der präventiven Vorbereitung bis zur nachhaltigen Umsetzung der Prüfungsergebnisse.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'BCBS-239 Pre-Audit Assessment und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Aufbereitung von Nachweisdokumenten und Evidence Books'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Unterstützung bei der Beantwortung von Prüferanfragen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Begleitung von Prüfergesprächen und Interviews'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Entwicklung und Umsetzung von Maßnahmenplänen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir unterstützen Sie mit einem strukturierten und erprobten Ansatz bei der Vorbereitung, Durchführung und Nachbereitung von BCBS-239 Audits und regulatorischen Prüfungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Pre-Audit Assessment und Identifikation potenzieller Schwachstellen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten Prüfungsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Systematische Aufbereitung relevanter Nachweise und Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Professionelle Begleitung während des Audits'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Implementierung von Verbesserungsmaßnahmen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'Mittelständisches Kreditinstitut',
        name: 'Dr. Thomas Berger',
        position: 'Leiter Regulatorisches Reporting',
        quote: 'ADVISORI hat uns bei der Vorbereitung und Durchführung unseres BCBS-239 Audits hervorragend unterstützt. Durch die professionelle Aufbereitung der Nachweisdokumentation und die kompetente Begleitung der Prüfergespräche konnten wir das Audit deutlich effizienter gestalten und bessere Ergebnisse erzielen. Besonders wertvoll war die nachhaltige Umsetzung der Maßnahmen zur Behebung der Feststellungen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'BCBS-239 Pre-Audit Assessment',
          description: 'Wir führen vor dem eigentlichen Audit eine umfassende Bewertung Ihrer BCBS-239 Compliance durch, um potenzielle Schwachstellen frühzeitig zu identifizieren und zu adressieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Gap-Analyse nach Prüfungsmethodik der Aufsicht'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation kritischer Schwachstellen und Prüfungsrisiken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Priorisierte Maßnahmenliste zur Risikominimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Quick-Win-Implementierung vor dem Audit'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Audit-Begleitung und Nachweisführung',
          description: 'Wir unterstützen Sie während des gesamten Audit-Prozesses bei der professionellen Aufbereitung von Nachweisen, der Kommunikation mit den Prüfern und der Begleitung von Prüfergesprächen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Erstellung von Evidence Books und Nachweisdokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Unterstützung bei der Beantwortung von Prüferanfragen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Vorbereitung und Begleitung von Interviews und Prüfergesprächen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Koordination des Audit-Prozesses und Tracking offener Punkte'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcbs239AuditPruefungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ BCBS-239 Audit Prüfungsunterstützung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
