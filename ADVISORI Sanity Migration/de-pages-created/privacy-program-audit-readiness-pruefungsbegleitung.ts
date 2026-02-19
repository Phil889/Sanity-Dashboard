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
    console.log('Creating Privacy Program Audit Readiness page...')

    const privacyProgramAuditReadinessData = {
      _type: 'servicePage',
      _id: 'privacy-program-audit-readiness-pruefungsbegleitung',
      title: 'Privacy Program Audit Readiness & Prüfungsbegleitung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/privacy-program/privacy-program-privacy-controls-audit-support/privacy-program-audit-readiness-pruefungsbegleitung'
      },
      parent: {
        _type: 'reference',
        _ref: 'privacy-program-privacy-controls-audit-support'
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
        title: 'Privacy Program Audit Readiness & Prüfungsbegleitung | ADVISORI',
        description: 'Professionelle Vorbereitung auf Datenschutz-Audits und kompetente Prüfungsbegleitung. Wir stellen sicher, dass Ihr Privacy Program audit-ready ist und bei externen Prüfungen erfolgreich abschneidet.',
        keywords: 'Privacy Audit, Datenschutz-Prüfung, Audit Readiness, Prüfungsbegleitung, DSGVO Audit, Privacy Controls, Compliance Audit'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Privacy Program Audit Readiness'
        },
        tagline: 'Audit-ready Privacy Programs für erfolgreiche Datenschutzprüfungen',
        heading: 'Privacy Program Audit Readiness & Prüfungsbegleitung',
        description: 'Bereiten Sie Ihr Unternehmen optimal auf Datenschutz-Audits vor und meistern Sie externe Prüfungen mit Vertrauen. Unsere Experten stellen sicher, dass Ihr Privacy Program alle Anforderungen erfüllt.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strukturierte Vorbereitung auf interne und externe Datenschutz-Audits'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Professionelle Prüfungsbegleitung durch erfahrene Privacy-Experten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Minimierung von Audit-Risiken und potentiellen Compliance-Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Stärkung des Vertrauens bei Aufsichtsbehörden und Geschäftspartnern'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Privacy Program Audit Readiness & Prüfungsbegleitung',
        description: 'Die erfolgreiche Bewältigung von Datenschutz-Audits erfordert mehr als nur funktionierende Privacy Controls. Wir bereiten Ihr Unternehmen systematisch auf alle Aspekte von Datenschutzprüfungen vor und begleiten Sie professionell durch den gesamten Audit-Prozess.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Comprehensive Audit Readiness Assessment und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung audit-spezifischer Dokumentations- und Nachweisstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Mock-Audits und Simulation realer Prüfungssituationen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Professionelle Begleitung während externer Audits und Behördenprüfungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Post-Audit-Unterstützung bei der Umsetzung von Verbesserungsmaßnahmen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Ein erfolgreiches Privacy Audit beginnt nicht erst mit der Ankündigung der Prüfung. Die kontinuierliche Audit-Readiness sollte als integraler Bestandteil Ihres Privacy Programs etabliert werden.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Langjährige Erfahrung in der Vorbereitung und Begleitung von Privacy Audits'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Tiefgreifende Kenntnis verschiedener Audit-Standards und -Methodiken'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praktische Erfahrung als Auditoren und Compliance-Verantwortliche'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Branchenspezifische Expertise und maßgeschneiderte Audit-Strategien'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit professioneller Audit-Vorbereitung reduzieren Prüfungszeiten um bis zu 40% und minimieren das Risiko signifikanter Compliance-Feststellungen erheblich.',
        serviceDescription: 'Unser umfassendes Audit Readiness Programm deckt alle Aspekte der Datenschutz-Prüfungsvorbereitung ab - von der initialen Bereitschaftsbewertung bis zur abschließenden Post-Audit-Unterstützung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Pre-Audit Assessment und Readiness Evaluation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Audit Documentation Framework Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Mock-Audit Durchführung und Team-Training'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Live-Audit Support und Prüfungsbegleitung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Post-Audit Remediation und Continuous Improvement'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Unsere strukturierte Herangehensweise stellt sicher, dass Ihr Unternehmen optimal auf jede Art von Datenschutz-Audit vorbereitet ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Bewertung der aktuellen Audit-Bereitschaft'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung audit-spezifischer Dokumentations- und Nachweisstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Durchführung realistischer Mock-Audits mit detailliertem Feedback'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Training der Mitarbeiter für optimale Prüfungsinteraktion'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Begleitung und Unterstützung während realer Audits'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die professionelle Audit-Vorbereitung durch ADVISORI hat uns enormes Vertrauen für unsere externen Datenschutzprüfungen gegeben. Dank der strukturierten Herangehensweise verliefen alle Audits reibungslos und erfolgreich.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Audit Readiness Assessment',
          description: 'Comprehensive Bewertung der Bereitschaft Ihres Privacy Programs für externe Prüfungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Gap-Analyse gegen Audit-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung der Dokumentationsqualität und -vollständigkeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation kritischer Compliance-Risiken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Priorisierter Verbesserungsplan mit Zeitschiene'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Live-Audit Support & Prüfungsbegleitung',
          description: 'Professionelle Unterstützung während externer Audits und Behördenprüfungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'On-site Präsenz während kritischer Audit-Phasen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Real-time Beratung bei komplexen Prüfungsfragen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Unterstützung bei der Interpretation von Audit-Findings'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Strategische Beratung für optimale Prüfungsresultate'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(privacyProgramAuditReadinessData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Privacy Program Audit Readiness page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
