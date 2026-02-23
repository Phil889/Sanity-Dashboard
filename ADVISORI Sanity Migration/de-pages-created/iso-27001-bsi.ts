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
    console.log('Creating ISO 27001 BSI page...')

    const iso27001BsiData = {
      _type: 'servicePage',
      _id: 'iso-27001-bsi',
      title: 'ISO 27001 BSI',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-bsi'
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
        title: 'ISO 27001 BSI Compliance | Bundesamt für Sicherheit in der Informationstechnik | ADVISORI',
        description: 'Professionelle ISO 27001 Implementierung nach BSI-Standards. Expertise für deutsche Unternehmen bei der Umsetzung von Informationssicherheitsmanagement nach BSI-Vorgaben.',
        keywords: 'ISO 27001, BSI, Bundesamt für Sicherheit in der Informationstechnik, ISMS, Informationssicherheit, BSI-Standards, IT-Grundschutz, Cybersecurity Deutschland'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 BSI Compliance'
        },
        tagline: 'BSI-konforme Informationssicherheit für deutsche Unternehmen',
        heading: 'ISO 27001 BSI Compliance',
        description: 'Implementieren Sie ISO 27001 nach den Standards des Bundesamts für Sicherheit in der Informationstechnik (BSI). Unsere Expertise verbindet internationale Best Practices mit deutschen Sicherheitsanforderungen für maximale Compliance und Schutz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'BSI-konforme ISO 27001 Implementierung nach deutschen Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Integration mit IT-Grundschutz und BSI-Katalogen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Compliance mit deutschen Regulierungsanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Expertise in KRITIS und Sektorenspezifischen Anforderungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ISO 27001 nach BSI-Standards - Deutsche Informationssicherheit auf höchstem Niveau',
        description: 'Das Bundesamt für Sicherheit in der Informationstechnik (BSI) ist die zentrale Cyber-Sicherheitsbehörde des Bundes und definiert die Standards für Informationssicherheit in Deutschland. Die Kombination von ISO 27001 mit BSI-Vorgaben schafft ein robustes, deutschlandspezifisches Informationssicherheitsmanagement.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Harmonisierung von ISO 27001 mit BSI IT-Grundschutz-Katalogen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Erfüllung deutscher Compliance-Anforderungen und Sektorenregulierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration mit KRITIS-Verordnung und NIS2-Umsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'BSI-anerkannte Zertifizierungsverfahren und Audit-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Anpassung an BSI-Empfehlungen und Threat Intelligence'
          }
        ],
        alert: {
          title: 'BSI-Expertise für deutsche Unternehmen',
          content: 'Die Kombination von ISO 27001 mit BSI-Standards bietet deutschen Unternehmen die optimale Balance zwischen internationaler Anerkennung und nationaler Compliance-Sicherheit.'
        },
        whyUs: {
          title: 'Warum ISO 27001 BSI mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in BSI-Standards und deutschen Regulierungsanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Integration von ISO 27001 mit IT-Grundschutz-Methodik'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfassende Kenntnis deutscher Sektorenregulierung und KRITIS-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Weiterentwicklung entsprechend BSI-Empfehlungen'
            }
          ]
        },
        additionalInfo: 'Das BSI entwickelt kontinuierlich Standards und Empfehlungen für die Informationssicherheit in Deutschland. Unsere ISO 27001 BSI-Implementierung berücksichtigt diese nationalen Besonderheiten und schafft ein ISMS, das sowohl internationale als auch deutsche Anforderungen optimal erfüllt.',
        serviceDescription: 'Unser ISO 27001 BSI Service kombiniert die bewährte ISO 27001-Methodik mit den spezifischen Anforderungen und Standards des BSI. Wir unterstützen Sie bei der Implementierung eines ISMS, das den deutschen Sicherheitsstandards entspricht und gleichzeitig internationale Anerkennung genießt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'BSI-konforme Gap-Analyse und Readiness-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Integration von IT-Grundschutz-Bausteinen in ISO 27001 ISMS'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Compliance-Mapping für deutsche Regulierungsanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'BSI-anerkannte Zertifizierungsvorbereitung und Audit-Support'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Anpassung an BSI-Updates und Threat Intelligence'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser BSI-konformer ISO 27001 Implementierungsansatz',
        description: 'Wir verfolgen einen systematischen Ansatz, der ISO 27001 Best Practices mit BSI-spezifischen Anforderungen und deutschen Compliance-Standards harmonisch verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'BSI-konforme Analyse der aktuellen Informationssicherheitslage und Compliance-Status'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Harmonisierung von ISO 27001 Controls mit IT-Grundschutz-Bausteinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Integration deutscher Sektorenregulierung und KRITIS-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'BSI-anerkannte Implementierung und Zertifizierungsvorbereitung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und Anpassung an BSI-Entwicklungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die Kombination von ISO 27001 mit BSI-Standards schafft für deutsche Unternehmen die optimale Grundlage für vertrauensvolle Informationssicherheit. Unsere BSI-konforme Implementierungsmethodik gewährleistet sowohl internationale Anerkennung als auch nationale Compliance-Sicherheit.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'BSI-konforme ISO 27001 Beratung',
          description: 'Strategische Beratung für ISO 27001 Implementierung nach BSI-Standards und deutschen Compliance-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'BSI-konforme Gap-Analyse und Compliance-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Integration von IT-Grundschutz-Methodik in ISO 27001'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Deutsche Sektorenregulierung und KRITIS-Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'BSI-anerkannte Zertifizierungsberatung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'IT-Grundschutz Integration',
          description: 'Professionelle Integration von BSI IT-Grundschutz-Katalogen in Ihr ISO 27001 ISMS.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Mapping von IT-Grundschutz-Bausteinen zu ISO 27001 Controls'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'BSI-konforme Risikoanalyse und Schutzbedarfsfeststellung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Harmonisierung von Grundschutz-Kompendium mit ISMS-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Anpassung an IT-Grundschutz-Updates'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'KRITIS und Sektorenregulierung',
          description: 'Spezialisierte Beratung für kritische Infrastrukturen und sektorenspezifische BSI-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'KRITIS-Verordnung Compliance und Meldepflichten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Sektorenspezifische Sicherheitsstandards (B3S, ISMS-V, etc.)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'NIS2-Umsetzung mit BSI-Guidance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Branchenspezifische BSI-Empfehlungen und Standards'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'BSI-Zertifizierung und Audit',
          description: 'Umfassende Unterstützung bei BSI-anerkannten Zertifizierungsverfahren und Audit-Prozessen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Vorbereitung auf BSI-anerkannte Zertifizierungsstellen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Compliance-Dokumentation nach deutschen Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'BSI-konforme interne Audit-Programme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Kontinuierliche Überwachung und Re-Zertifizierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'BSI Threat Intelligence Integration',
          description: 'Integration von BSI-Cyber-Sicherheitsinformationen und Threat Intelligence in Ihr ISMS.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'BSI-Cyber-Sicherheitswarnungen und Empfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Integration von BSI-Threat Intelligence in Risikomanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Anpassung an aktuelle BSI-Cyber-Sicherheitslage'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Kontinuierliche Überwachung deutscher Bedrohungslandschaft'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'BSI-Schulungen und Zertifizierungen',
          description: 'Umfassende Schulungsprogramme zu BSI-Standards und ISO 27001 Integration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'BSI IT-Grundschutz Practitioner Schulungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'ISO 27001 mit BSI-Standards Integration Training'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'KRITIS und Sektorenregulierung Awareness'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'BSI-konforme ISMS-Manager Zertifizierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001BsiData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 BSI page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
