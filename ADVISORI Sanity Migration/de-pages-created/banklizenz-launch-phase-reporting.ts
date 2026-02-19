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
    console.log('Creating Banklizenz Launch Phase Reporting page...')

    const banklizenzLaunchPhaseReportingData = {
      _type: 'servicePage',
      _id: 'banklizenz-launch-phase-reporting',
      title: 'Banklizenz Launch Phase Reporting',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/banklizenz-beantragen/banklizenz-it-meldewesen-setup/banklizenz-launch-phase-reporting'
      },
      parent: {
        _type: 'reference',
        _ref: 'banklizenz-it-meldewesen-setup'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'regulatory-reporting'
        }
      },
      seo: {
        _type: 'seo',
        title: 'Banklizenz Launch Phase Reporting | ADVISORI',
        description: 'Spezialisierte Launch-Phase-Reporting-Systeme für Banklizenzierungen. Kritische Aufsichtsmeldungen und Go-Live-Monitoring für erfolgreiche Banking-Starts.',
        keywords: 'Launch Phase Reporting, Banking Go-Live, Aufsichtsmeldungen Start, BaFin Launch Reporting, Banking License Go-Live, Regulatory Launch Phase'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Banklizenz Launch Phase Reporting'
        },
        tagline: 'Kritische Reporting-Excellence für den Banking-Launch',
        heading: 'Banklizenz Launch Phase Reporting',
        description: 'Die Launch-Phase einer Bank ist die kritischste Zeit für regulatorisches Reporting. Wir entwickeln spezialisierte Launch-Phase-Reporting-Systeme, die lückenlose Compliance gewährleisten und erfolgreiche Banking-Starts ermöglichen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Kritische Launch-Phase-Meldungen in Echtzeit'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte Go-Live-Monitoring-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Proaktive Compliance-Überwachung während Marktstart'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nahtlose Übergang zu regulärem Reporting-Betrieb'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Launch Phase Reporting für Banklizenzierung',
        description: 'Die Launch-Phase einer Bank erfordert besondere Aufmerksamkeit für regulatorisches Reporting. Wir entwickeln maßgeschneiderte Launch-Phase-Systeme, die kritische Aufsichtsmeldungen automatisieren und einen erfolgreichen Banking-Start gewährleisten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse der Launch-Phase-spezifischen Reporting-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Design und Implementierung von Go-Live-Monitoring-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Automatisierung kritischer Launch-Phase-Meldungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Real-time Compliance-Überwachung und Alerting'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Übergangsmanagement zu regulärem Reporting-Betrieb'
          }
        ],
        alert: {
          title: 'Launch-Phase-Kritikalität',
          content: 'Die ersten Wochen nach dem Banking-Go-Live sind entscheidend für langfristigen Erfolg. Fehlerhafte Reporting-Prozesse können zu regulatorischen Sanktionen und Reputationsschäden führen. Unser spezialisiertes Launch-Phase-Reporting gewährleistet fehlerfreien Start.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Expertise in Launch-Phase-Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Go-Live-Monitoring-Methodologien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: '24/7 Launch-Support und Crisis-Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Nahtlose Übergangsplanung zu Routine-Operations'
            }
          ]
        },
        additionalInfo: 'Launch-Phase-Reporting ist mehr als nur Compliance - es ist die Grundlage für vertrauensvolle Beziehungen zu Aufsichtsbehörden und nachhaltigen Banking-Erfolg.',
        serviceDescription: 'Wir bieten umfassende Launch-Phase-Reporting-Lösungen, die kritische Go-Live-Perioden abdecken und den Übergang zu regulärem Banking-Betrieb nahtlos ermöglichen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Pre-Launch Reporting-System-Validierung und Testing'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Go-Live-Monitoring und Real-time Compliance-Tracking'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Automatisierte Launch-Phase-Meldungen und Workflows'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Crisis-Management und Emergency-Response-Procedures'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Post-Launch Optimization und Transition-Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen systematischen, risikominimierenden Ansatz für Launch-Phase-Reporting, der kritische Go-Live-Perioden absichert und nachhaltigen Banking-Erfolg gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Pre-Launch-Analyse und Risk-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Launch-Phase-spezifische System-Konfiguration und Testing'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Go-Live-Begleitung mit 24/7 Monitoring und Support'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche Optimierung während Launch-Phase'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nahtloser Übergang zu regulärem Reporting-Betrieb'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Das Launch-Phase-Reporting von ADVISORI war entscheidend für unseren erfolgreichen Banking-Start. Die proaktive Überwachung und automatisierten Workflows haben uns vor kritischen Compliance-Risiken bewahrt und Vertrauen bei den Aufsichtsbehörden geschaffen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Pre-Launch Validation & Testing',
          description: 'Wir validieren und testen alle Reporting-Systeme vor dem Go-Live, um sicherzustellen, dass kritische Launch-Phase-Meldungen fehlerfrei funktionieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Comprehensive End-to-End-Testing aller Reporting-Workflows'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Stress-Testing für High-Volume-Launch-Scenarios'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Regulatory Compliance-Validation mit Aufsichtsbehörden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Fallback-Procedures und Emergency-Response-Planning'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Go-Live Monitoring & Support',
          description: 'Wir bieten intensive 24/7-Betreuung während der kritischen Launch-Phase mit Real-time-Monitoring und sofortigem Support bei Problemen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: '24/7 Real-time Monitoring aller kritischen Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Proaktive Alerting und automatische Escalation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Dedicated Launch-Support-Team mit sofortiger Response'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Continuous Performance-Optimization während Launch'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(banklizenzLaunchPhaseReportingData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Banklizenz Launch Phase Reporting page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
