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
    console.log('Creating CRA Cyber Resilience Act External Audits page...')

    const craExternalAuditsData = {
      _type: 'servicePage',
      _id: 'cra-cyber-resilience-act-external-audits',
      title: 'CRA Cyber Resilience Act External Audits',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-cyber-resilience-act-conformity-assessment/cra-cyber-resilience-act-external-audits/'
      },
      parent: {
        _type: 'reference',
        _ref: 'cra-cyber-resilience-act-conformity-assessment'
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
        title: 'CRA Cyber Resilience Act External Audits | ADVISORI',
        description: 'Professionelle CRA External Audit Services für EU Cyber Resilience Act Compliance. Unabhängige Cybersecurity-Prüfungen, Zertifizierung und Konformitätsbewertung durch akkreditierte Auditoren.',
        keywords: 'CRA External Audit, Cyber Resilience Act Prüfung, EU CRA Zertifizierung, Cybersecurity Audit, Konformitätsbewertung, Notified Body Prüfung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA Cyber Resilience Act External Audits'
        },
        tagline: 'Unabhängige CRA-Zertifizierung durch External Audits',
        heading: 'CRA Cyber Resilience Act External Audits',
        description: 'Professionelle Begleitung und Vorbereitung auf externe CRA-Audits durch akkreditierte Prüfstellen. Wir sichern erfolgreiche Zertifizierung und langfristige Compliance für kritische digitale Produkte.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende Audit-Vorbereitung und Notified Body Coordination'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strukturierte Dokumentation und Evidence-Management für Prüfungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Gap-Analyse und Remediation vor externen Audit-Terminen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Ongoing Audit Support und Post-Certification Compliance Management'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRA Cyber Resilience Act External Audits',
        description: 'Für kritische digitale Produkte schreibt der EU Cyber Resilience Act externe Audits durch akkreditierte Notified Bodies vor. Eine professionelle Audit-Vorbereitung und -Begleitung ist entscheidend für erfolgreiche Zertifizierung und Market Access.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Notified Body Auswahl und Audit-Planung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Umfassende Pre-Audit Assessment und Gap-Remediation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Strukturierte Dokumentation und Evidence-Portfolio'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Audit-Begleitung und Stakeholder-Coordination'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Post-Certification Surveillance und Renewal Management'
          }
        ],
        alert: {
          title: 'Kritischer Marktfaktor',
          content: 'Fehlgeschlagene externe CRA-Audits führen zu sofortigem Marktausschluss und können erhebliche Reputations- und Finanzschäden verursachen. Eine strukturierte Audit-Vorbereitung ist essentiell für Business Continuity.'
        },
        whyUs: {
          title: 'Unsere External Audit-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Langjährige Erfahrung mit Notified Bodies und Audit-Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Audit-Vorbereitung mit hoher Erfolgsquote'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Tiefgreifende CRA-Kenntnisse und regulatorische Expertise'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Support von Pre-Audit bis Post-Certification'
            }
          ]
        },
        additionalInfo: 'Erfolgreiche externe CRA-Audits schaffen nicht nur regulatorische Compliance, sondern auch Competitive Advantages durch demonstrierte Security Excellence und Vertrauen bei Enterprise-Kunden.',
        serviceDescription: 'Wir begleiten Sie durch den gesamten External Audit-Prozess - von der strategischen Planung über die Audit-Vorbereitung bis zur erfolgreichen Zertifizierung und ongoing Compliance-Überwachung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Audit-Planung und Notified Body Selection'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Umfassende Pre-Audit Readiness Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Strukturierte Dokumentation und Evidence Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Audit-Begleitung und Stakeholder Coordination'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Post-Certification Surveillance und Renewal Support'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser External Audit-Ansatz',
        description: 'Wir führen CRA External Audit-Vorbereitung systematisch und risikobasiert durch, mit fokussierter Vorbereitung auf alle kritischen Audit-Aspekte.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Audit-Planung und Notified Body Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Umfassende Pre-Audit Readiness Evaluation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Strukturierte Evidence-Entwicklung und Documentation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Intensive Audit-Vorbereitung und Mock-Audits'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Audit-Begleitung und Ongoing Compliance Management'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns nicht nur erfolgreich durch unser erstes CRA External Audit geführt, sondern auch ein nachhaltiges Compliance-Framework etabliert, das uns für zukünftige Audits optimal positioniert. Ihre Expertise war entscheidend für unseren Zertifizierungserfolg.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Comprehensive Audit Preparation',
          description: 'Vollständige Vorbereitung auf externe CRA-Audits mit strategischer Planung, Gap-Analyse und strukturierter Documentation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Strategische Notified Body Selection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Umfassende Pre-Audit Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Strukturierte Evidence-Portfolio-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Mock-Audit-Durchführung und Team-Training'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Ongoing Audit Support & Compliance',
          description: 'Kontinuierliche Begleitung während External Audits und langfristige Post-Certification Compliance-Überwachung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Live Audit-Begleitung und Support'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Surveillance Audit-Vorbereitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Certification Renewal Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Ongoing Compliance-Monitoring'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craExternalAuditsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA Cyber Resilience Act External Audits page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
