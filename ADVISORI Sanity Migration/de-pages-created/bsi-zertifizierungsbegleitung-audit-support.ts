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
    console.log('Creating BSI Zertifizierungsbegleitung Audit Support page...')

    const bsiZertifizierungData = {
      _type: 'servicePage',
      _id: 'bsi-zertifizierungsbegleitung-audit-support',
      title: 'BSI Zertifizierungsbegleitung & Audit Support',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/it-grundschutz-bsi/bsi-zertifizierungsbegleitung-audit-support'
      },
      parent: {
        _type: 'reference',
        _ref: 'it-grundschutz-bsi'
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
        title: 'BSI Zertifizierungsbegleitung & Audit Support | ADVISORI',
        description: 'Professionelle Begleitung bei BSI-Zertifizierungsprozessen und Audit-Unterstützung. Wir helfen Ihnen bei der erfolgreichen Umsetzung und Aufrechterhaltung Ihrer BSI-Zertifizierung nach IT-Grundschutz.',
        keywords: 'BSI Zertifizierung, IT-Grundschutz Audit, BSI Audit Support, Zertifizierungsbegleitung, BSI Compliance, IT-Sicherheit Audit, Informationssicherheit'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'BSI Zertifizierungsbegleitung & Audit Support'
        },
        tagline: 'Expertenlösungen für erfolgreiche BSI-Zertifizierungen',
        heading: 'BSI Zertifizierungsbegleitung & Audit Support',
        description: 'Von der Vorbereitung bis zur erfolgreichen Zertifizierung - wir begleiten Sie professionell durch den gesamten BSI-Zertifizierungsprozess und unterstützen Sie bei Audits nach IT-Grundschutz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Professionelle Vorbereitung und Begleitung des Zertifizierungsprozesses'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Umfassende Audit-Unterstützung durch erfahrene BSI-Experten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Minimierung von Zertifizierungsrisiken und Nacharbeiten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachhaltige Aufrechterhaltung der Zertifizierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'BSI Zertifizierungsbegleitung & Audit Support',
        description: 'Eine BSI-Zertifizierung nach IT-Grundschutz ist ein komplexer Prozess, der umfangreiches Fachwissen und strukturierte Vorbereitung erfordert. Wir begleiten Sie professionell durch alle Phasen der Zertifizierung - von der initialen Vorbereitung über die Audit-Durchführung bis hin zur langfristigen Aufrechterhaltung Ihrer Zertifizierung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strukturierte Vorbereitung auf BSI-Zertifizierungsaudits'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Professionelle Begleitung während des gesamten Audit-Prozesses'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Nachbearbeitung von Audit-Findings und Korrekturmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Unterstützung bei Überwachungs- und Rezertifizierungsaudits'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Beratung zur Aufrechterhaltung der Zertifizierung'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine erfolgreiche BSI-Zertifizierung erfordert nicht nur die formale Erfüllung der Anforderungen, sondern auch eine nachvollziehbare und praxisnahe Umsetzung, die den Auditoren das Vertrauen in Ihre Sicherheitsmaßnahmen vermittelt.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Langjährige Erfahrung in BSI-Zertifizierungsprojekten verschiedener Branchen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Tiefes Verständnis der BSI-Audit-Prozesse und -Methoden'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxiserprobte Methoden zur effizienten Audit-Vorbereitung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung über den Zertifizierungszeitraum hinaus'
            }
          ]
        },
        additionalInfo: 'BSI-Zertifizierungen sind nicht nur ein wichtiger Nachweis für IT-Sicherheit, sondern auch ein entscheidender Wettbewerbsvorteil. Eine professionelle Vorbereitung und Begleitung kann den Unterschied zwischen einer erfolgreichen Erstzertifizierung und kostspieligen Nachaudits ausmachen.',
        serviceDescription: 'Unser umfassendes Leistungsspektrum deckt alle Aspekte der BSI-Zertifizierungsbegleitung ab - von der strategischen Vorbereitung bis zur operativen Unterstützung während der Audit-Durchführung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Pre-Audit Readiness Assessment und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Audit-Begleitung und Moderationsunterstützung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Nachbearbeitung von Audit-Befunden und Korrekturmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Überwachungsaudit-Vorbereitung und -Begleitung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Rezertifizierungsplanung und -durchführung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine maßgeschneiderte Strategie für eine erfolgreiche BSI-Zertifizierung und begleiten Sie kompetent durch alle Audit-Phasen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Durchführung eines umfassenden Pre-Audit Assessments'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer zielgerichteten Audit-Vorbereitungsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Professionelle Begleitung während der Audit-Durchführung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Systematische Nachbearbeitung von Audit-Befunden'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Langfristige Unterstützung zur Aufrechterhaltung der Zertifizierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Eine BSI-Zertifizierung ist mehr als nur ein Compliance-Nachweis - sie ist ein Qualitätsmerkmal für Ihre IT-Sicherheit. Mit der richtigen Vorbereitung und professioneller Begleitung wird der Zertifizierungsprozess zu einem strategischen Erfolgsfaktor für Ihr Unternehmen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Pre-Audit Readiness Assessment',
          description: 'Wir bewerten Ihre Zertifizierungsbereitschaft durch ein strukturiertes Assessment und identifizieren potenzielle Schwachstellen vor dem eigentlichen Audit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Bewertung der ISMS-Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation kritischer Audit-Risiken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung gezielter Verbesserungsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Priorisierte Handlungsempfehlungen für die Audit-Vorbereitung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Audit-Begleitung und Support',
          description: 'Professionelle Unterstützung während des gesamten Audit-Prozesses - von der Eröffnungsbesprechung bis zur Abschlussbewertung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Moderation und Koordination der Audit-Termine'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Fachliche Unterstützung bei Auditor-Gesprächen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Sofortige Klärung von Audit-Befunden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Dokumentation und Nachverfolgung von Audit-Ergebnissen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bsiZertifizierungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ BSI Zertifizierungsbegleitung & Audit Support page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
