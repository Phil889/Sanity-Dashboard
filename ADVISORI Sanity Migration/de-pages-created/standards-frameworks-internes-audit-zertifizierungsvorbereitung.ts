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
    console.log('Creating ISO 27001 Internal Audit & Certification Preparation page...')

    const serviceData = {
      _type: 'servicePage',
      _id: 'standards-frameworks-internes-audit-zertifizierungsvorbereitung',
      title: 'ISO 27001 Internes Audit & Zertifizierungsvorbereitung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/standards-frameworks-iso-27001/standards-frameworks-internes-audit-zertifizierungsvorbereitung'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management-standards-frameworks-iso-27001'
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
        title: 'ISO 27001 Internes Audit & Zertifizierungsvorbereitung | ADVISORI',
        description: 'Professionelle Unterstützung bei der Vorbereitung auf ISO 27001-Zertifizierungen und Durchführung interner Audits. Wir begleiten Sie systematisch zur erfolgreichen Zertifizierung.',
        keywords: 'ISO 27001, Internes Audit, Zertifizierungsvorbereitung, Informationssicherheit, ISMS, Audit, Compliance, Standards'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Internes Audit & Zertifizierungsvorbereitung'
        },
        tagline: 'Expertenlösungen für erfolgreiche ISO 27001-Zertifizierung',
        heading: 'ISO 27001 Internes Audit & Zertifizierungsvorbereitung',
        description: 'Bereiten Sie Ihr Unternehmen systematisch auf die ISO 27001-Zertifizierung vor. Wir unterstützen Sie mit professionellen internen Audits und strukturierter Zertifizierungsvorbereitung für nachhaltigen Erfolg.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Vorbereitung auf externe Zertifizierungsaudits'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Professionelle interne Audits nach ISO 19011'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Identifikation und Behebung von Compliance-Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Aufbau interner Auditkompetenzen und -prozesse'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ISO 27001 Internes Audit & Zertifizierungsvorbereitung',
        description: 'Die ISO 27001-Zertifizierung ist ein wichtiger Meilenstein für die Informationssicherheit Ihres Unternehmens. Durch professionelle interne Audits und systematische Zertifizierungsvorbereitung stellen wir sicher, dass Ihr ISMS optimal auf externe Audits vorbereitet ist und eine erfolgreiche Zertifizierung erreicht wird.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Readiness-Assessments und Gap-Analysen vor der Zertifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Professionelle Durchführung interner Audits nach internationalen Standards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung und Implementierung effektiver Auditprogramme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Management von Nonkonformitäten und Korrekturmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Schulung und Qualifizierung interner Auditoren'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine erfolgreiche ISO 27001-Zertifizierung erfordert nicht nur die Implementierung der Anforderungen, sondern auch deren kontinuierliche Überwachung durch systematische interne Audits und regelmäßige Managementbewertungen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Zertifizierte Lead-Auditoren mit umfangreicher Praxiserfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Tiefgreifende Kenntnisse der ISO 27001-Anforderungen und Auditpraktiken'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Strukturierte Methodiken zur effektiven Zertifizierungsvorbereitung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Nachhaltige Kompetenzentwicklung für interne Audit-Teams'
            }
          ]
        },
        additionalInfo: 'Interne Audits sind ein zentraler Baustein des ISO 27001-Standards und essentiell für die kontinuierliche Verbesserung Ihres ISMS. Eine professionelle Zertifizierungsvorbereitung minimiert Risiken und maximiert die Erfolgswahrscheinlichkeit.',
        serviceDescription: 'Wir bieten ein umfassendes Leistungsspektrum zur Vorbereitung auf ISO 27001-Zertifizierungen und zur Durchführung professioneller interner Audits. Unser Ansatz kombiniert technische Expertise mit praktischer Umsetzungserfahrung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Pre-Assessment und Zertifizierungsreadiness-Evaluierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Durchführung professioneller interner Audits'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung von Auditprogrammen und -prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Management Review-Unterstützung und Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Ausbildung und Zertifizierung interner Auditoren'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam einen strukturierten Ansatz zur erfolgreichen ISO 27001-Zertifizierungsvorbereitung und nachhaltigen internen Auditpraxis.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Bewertung der Zertifizierungsbereitschaft und Gap-Identifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung eines maßgeschneiderten Auditprogramms und Zertifizierungsplans'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Durchführung systematischer interner Audits und Dokumentation der Ergebnisse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Unterstützung bei der Behebung von Nonkonformitäten und Verbesserungsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Begleitung bis zur erfolgreichen Zertifizierung und darüber hinaus'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Eine erfolgreiche ISO 27001-Zertifizierung ist kein Zufall, sondern das Ergebnis systematischer Vorbereitung und professioneller interner Audits. Wir begleiten unsere Kunden strukturiert auf diesem Weg und stellen sicher, dass sie optimal gerüstet sind.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Zertifizierungsreadiness-Assessment',
          description: 'Wir bewerten systematisch die Bereitschaft Ihres ISMS für die externe Zertifizierung und identifizieren konkrete Handlungsfelder zur Optimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Comprehensive Gap-Analyse gegen ISO 27001-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung der Dokumentation und Prozessreife'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Simulation von Zertifizierungsaudit-Szenarien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Priorisierte Roadmap für die finale Zertifizierungsvorbereitung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Professionelle interne Audits',
          description: 'Wir führen strukturierte interne Audits nach ISO 19011 durch und unterstützen Sie beim Aufbau nachhaltiger interner Auditkapazitäten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Risikobasierte Auditplanung und -durchführung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Professionelle Auditdokumentation und Berichterstattung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Schulung und Mentoring interner Auditoren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Entwicklung von Auditchecklisten und -werkzeugen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(serviceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 Internal Audit & Certification Preparation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
