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
    console.log('Creating DIN ISO 27001 page...')

    const dinIso27001Data = {
      _type: 'servicePage',
      _id: 'din-iso-27001',
      title: 'DIN ISO 27001',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/din-iso-27001'
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
        title: 'DIN ISO 27001 Beratung & Implementierung | ADVISORI',
        description: 'Spezialisierte Beratung für DIN ISO 27001. Wir unterstützen Sie bei der Implementierung und Zertifizierung nach der deutschen Norm für Informationssicherheit.',
        keywords: 'DIN ISO 27001, ISO 27001 Deutschland, BSI Grundschutz, IT-Sicherheitsgesetz, Informationssicherheit, ISMS Beratung, Zertifizierung Deutschland'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DIN ISO 27001 - Informationssicherheit nach deutschem Standard'
        },
        tagline: 'Konformität und Exzellenz nach deutschem Standard',
        heading: 'DIN ISO 27001',
        description: 'Erreichen Sie Informationssicherheit nach höchsten nationalen Standards mit unserer spezialisierten DIN ISO 27001 Beratung. Wir navigieren Sie sicher durch die spezifischen Anforderungen des deutschen Marktes.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Konformität mit deutschen Gesetzen und BSI-Vorgaben'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Nahtlose Integration mit BSI IT-Grundschutz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Anerkannte Zertifizierung für den deutschen Markt'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Praxisnahe Umsetzung deutscher Datenschutzanforderungen (BDSG)'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DIN ISO 27001: Informationssicherheit für den deutschen Markt',
        description: 'Die DIN ISO/IEC 27001 ist die offizielle deutsche Fassung der international anerkannten Norm für Informationssicherheits-Managementsysteme (ISMS). Sie bietet einen systematischen Ansatz zum Schutz von Unternehmenswerten und zur Sicherstellung der Informationssicherheit, angepasst an die rechtlichen und regulatorischen Rahmenbedingungen in Deutschland.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Anpassung der internationalen Norm an deutsche Begrifflichkeiten und rechtliche Gegebenheiten.'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Berücksichtigung der Anforderungen des Bundesamts für Sicherheit in der Informationstechnik (BSI).'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Starke Synergien mit dem BSI IT-Grundschutz für eine umfassende Sicherheitsstrategie.'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Fokus auf die Einhaltung deutscher Datenschutzgesetze wie dem BDSG.'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Hohe Akzeptanz bei deutschen Behörden, Kunden und Partnern.'
          }
        ],
        alert: {
          title: 'Nationaler Standard, Internationaler Wert',
          content: 'Eine Zertifizierung nach DIN ISO 27001 demonstriert nicht nur die Einhaltung deutscher Standards, sondern stärkt auch das Vertrauen internationaler Partner in Ihre Sicherheitsmaßnahmen.'
        },
        whyUs: {
          title: 'Unsere Expertise in DIN ISO 27001',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgehendes Verständnis der deutschen IT-Sicherheitslandschaft und Regulatorik.'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrung in der kombinierten Anwendung von DIN ISO 27001 und BSI IT-Grundschutz.'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Nachweisliche Erfolge bei der Zertifizierung von Unternehmen in Deutschland.'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Pragmatische Ansätze zur Integration von Datenschutz- und Sicherheitsanforderungen.'
            }
          ]
        },
        additionalInfo: 'Unsere Beratung für DIN ISO 27001 ist speziell darauf ausgerichtet, Unternehmen in Deutschland eine effektive und effiziente Implementierung zu ermöglichen. Wir übersetzen die Norm in praktische, umsetzbare Maßnahmen, die auf Ihre spezifische Unternehmens- und Risikostruktur zugeschnitten sind.',
        serviceDescription: 'Wir bieten ein vollständiges Dienstleistungspaket für Ihre DIN ISO 27001 Zertifizierung. Von der ersten Analyse bis zur kontinuierlichen Verbesserung Ihres ISMS stehen wir Ihnen als kompetenter Partner zur Seite.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Gap-Analyse spezifisch für DIN ISO 27001 und deutsche Regulatorik'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'ISMS-Konzeption unter Berücksichtigung von BSI-Empfehlungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierung von Kontrollen mit Fokus auf deutsche Gesetze'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Vorbereitung und Begleitung von Audits durch deutsche Zertifizierungsstellen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Integration des ISMS mit Datenschutz-Managementsystemen (DSMS)'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Ansatz zur DIN ISO 27001 Konformität',
        description: 'Wir folgen einem bewährten, phasenorientierten Vorgehen, um eine effiziente und erfolgreiche Implementierung der DIN ISO 27001 in Ihrem Unternehmen sicherzustellen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der spezifischen deutschen und branchenspezifischen Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer Roadmap, die DIN ISO 27001 und BSI-Standards vereint'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung der Maßnahmen mit Fokus auf deutsche Best Practices'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Durchführung interner Audits zur Vorbereitung auf die Zertifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Verbesserung und Anpassung an neue deutsche Gesetze'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die Implementierung der DIN ISO 27001 ist ein klares Bekenntnis zur Informationssicherheit am Standort Deutschland. Unsere Expertise stellt sicher, dass unsere Kunden nicht nur konform sind, sondern ihre Sicherheitsprozesse als echten Wettbewerbsvorteil nutzen können.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'DIN ISO 27001 Gap-Analyse',
          description: 'Identifizieren Sie spezifische Lücken zu den Anforderungen der DIN ISO 27001 und deutschen Gesetzen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Bewertung Ihres ISMS gegen die DIN ISO 27001 und BSI-Vorgaben'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Analyse der Konformität mit dem deutschen IT-Sicherheitsgesetz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Prüfung der Einhaltung des Bundesdatenschutzgesetzes (BDSG)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Erstellung eines priorisierten Maßnahmenkatalogs'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'ISMS Implementierung nach DIN ISO 27001',
          description: 'Aufbau eines Managementsystems, das den deutschen Standards für Informationssicherheit gerecht wird.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung einer auf Deutschland zugeschnittenen Sicherheitsleitlinie'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Definition von Prozessen, die deutsche Regulatorik berücksichtigen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Erstellung der notwendigen Dokumentation in deutscher Sprache'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Schulung Ihrer Mitarbeiter zu den spezifischen Anforderungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Integration mit BSI IT-Grundschutz',
          description: 'Kombinieren Sie die Stärken von DIN ISO 27001 und BSI IT-Grundschutz für maximale Sicherheit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Analyse der Synergien zwischen den beiden Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Entwicklung eines integrierten Managementsystems'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Nutzung der BSI-Bausteine zur Konkretisierung der ISO-Controls'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Effiziente Umsetzung durch Vermeidung von Doppelarbeit'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Zertifizierungsvorbereitung',
          description: 'Wir bereiten Sie gezielt auf das Audit durch eine deutsche Zertifizierungsstelle vor.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Durchführung von internen Audits und Probe-Audits'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Unterstützung bei der Auswahl einer akkreditierten Zertifizierungsstelle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Begleitung während des gesamten Zertifizierungsprozesses'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Hilfestellung bei der Bearbeitung von Audit-Feststellungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(dinIso27001Data)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DIN ISO 27001 page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
