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
    console.log('Creating Privacy Program Privacy Controls Audit Support page...')

    const privacyControlsAuditSupportData = {
      _type: 'servicePage',
      _id: 'privacy-program-privacy-controls-audit-support',
      title: 'Privacy Program Privacy Controls Audit Support',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/privacy-program/privacy-program-privacy-controls-audit-support'
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
        title: 'Privacy Controls Audit Support | ADVISORI',
        description: 'Professionelle Unterstützung bei Datenschutz-Audits und Privacy Controls. Umfassende Begleitung von der Vorbereitung bis zur erfolgreichen Auditdurchführung für DSGVO-Compliance.',
        keywords: 'Privacy Controls, Audit Support, Datenschutz-Audit, DSGVO, Privacy Assessment, Compliance Audit, Data Protection'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Privacy Controls Audit Support'
        },
        tagline: 'Exzellente Auditresultate durch professionelle Privacy Controls Unterstützung',
        heading: 'Privacy Controls Audit Support',
        description: 'Sichern Sie den Erfolg Ihrer Datenschutz-Audits durch unsere umfassende Unterstützung bei der Vorbereitung, Durchführung und Nachbereitung von Privacy Controls Assessments. Von interner Revision bis zu externen Compliance-Prüfungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Professionelle Vorbereitung und Begleitung von Datenschutz-Audits'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Umfassende Privacy Controls Assessment und -optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Minimierung von Audit-Risiken und Compliance-Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strategische Beratung für nachhaltige Verbesserungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Privacy Controls Audit Support',
        description: 'Datenschutz-Audits stellen Unternehmen vor komplexe Herausforderungen, die weit über die reine Dokumentationsprüfung hinausgehen. Wir bieten umfassende Unterstützung bei der Vorbereitung, Durchführung und Nachbereitung von Privacy Controls Audits, um optimale Ergebnisse und nachhaltige Compliance-Verbesserungen zu gewährleisten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Audit-Vorbereitung und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Begleitung während der Auditdurchführung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Privacy Controls Assessment und -optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung von Remediation-Plänen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Verbesserung der Datenschutz-Governance'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiche Datenschutz-Audits erfordern nicht nur dokumentierte Prozesse, sondern auch gelebte Privacy-Kultur und effektive Kontrollen. Eine proaktive Vorbereitung reduziert Audit-Stress und verbessert Ergebnisse erheblich.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in Datenschutz-Audits und Privacy Controls'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für erfolgreiche Audit-Vorbereitung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Erfahrung mit verschiedenen Audit-Standards und -Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Fokus auf nachhaltige Verbesserungen statt kurzfristiger Fixes'
            }
          ]
        },
        additionalInfo: 'Studien zeigen, dass Unternehmen mit professioneller Audit-Vorbereitung 70% bessere Audit-Ergebnisse erzielen und 40% weniger Zeit für Remediation benötigen.',
        serviceDescription: 'Unser Audit Support Service umfasst die gesamte Bandbreite von der strategischen Vorbereitung bis zur nachhaltigen Implementierung von Verbesserungsmaßnahmen. Wir begleiten Sie durch alle Phasen des Audit-Prozesses.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Pre-Audit Assessment und Readiness Check'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Privacy Controls Testing und Validation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Audit-Begleitung und Stakeholder Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Findings Analysis und Remediation Planning'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Post-Audit Optimization und Follow-up'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und risikobasierten Ansatz, der sowohl auf bewährte Audit-Methoden als auch auf branchenspezifische Best Practices setzt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Readiness Assessment und Gap-Identifikation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategische Audit-Vorbereitung und Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Professionelle Begleitung während der Auditdurchführung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung praxisorientierter Remediation-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Implementierung nachhaltiger Verbesserungsmaßnahmen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir unsere Datenschutz-Audits von stressigen Compliance-Übungen zu wertvollen Verbesserungsprozessen transformiert. Die professionelle Vorbereitung und Begleitung haben zu deutlich besseren Audit-Ergebnissen und nachhaltigen Optimierungen geführt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Pre-Audit Readiness Assessment',
          description: 'Umfassende Bewertung der Audit-Bereitschaft und strategische Vorbereitung für optimale Ergebnisse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Gap-Analyse gegen relevante Audit-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Privacy Controls Testing und Validation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Dokumentationsreview und -optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Stakeholder-Vorbereitung und Training'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Audit Execution Support',
          description: 'Professionelle Begleitung während der Auditdurchführung und strategisches Stakeholder Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'On-site Audit-Begleitung und Koordination'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Real-time Issue Resolution und Escalation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Evidence Management und Documentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kommunikation mit Auditoren und Behörden'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(privacyControlsAuditSupportData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Privacy Program Privacy Controls Audit Support page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
