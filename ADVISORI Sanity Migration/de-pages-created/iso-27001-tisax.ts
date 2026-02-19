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
    console.log('Creating ISO 27001 TISAX page...')

    const iso27001TisaxData = {
      _type: 'servicePage',
      _id: 'iso-27001-tisax',
      title: 'ISO 27001 TISAX',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-tisax'
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
        title: 'ISO 27001 TISAX Automotive Security Assessment | ADVISORI',
        description: 'Professionelle TISAX Implementierung und Beratung für die Automobilindustrie. Von VDA ISA Assessment bis zur erfolgreichen TISAX Zertifizierung - Ihr Partner für Automotive Information Security.',
        keywords: 'TISAX, ISO 27001, VDA ISA, Automotive Security, Informationssicherheit Automotive, TISAX Assessment, Automotive Compliance, Supply Chain Security, TISAX Zertifizierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 TISAX Automotive Information Security'
        },
        tagline: 'Automotive Information Security Excellence mit TISAX',
        heading: 'ISO 27001 TISAX - Trusted Information Security Assessment Exchange',
        description: 'Sichern Sie Ihren Erfolg in der Automobilindustrie mit TISAX - dem branchenspezifischen Standard für Informationssicherheit. Unsere bewährte Expertise führt Sie sicher durch Assessment, Implementierung und Zertifizierung für nachhaltigen Wettbewerbsvorteil.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Branchenspezifische Automotive Security nach VDA ISA Standard'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Effiziente TISAX Assessment-Vorbereitung und -durchführung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Zugang zu globalen Automotive Supply Chains'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Integration mit bestehenden ISO 27001 Managementsystemen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'TISAX - Der Automotive Standard für vertrauensvolle Informationssicherheit',
        description: 'TISAX (Trusted Information Security Assessment Exchange) ist der etablierte Standard der Automobilindustrie für Informationssicherheitsassessments, basierend auf ISO 27001 und dem VDA ISA Katalog. Als branchenspezifische Erweiterung ermöglicht TISAX den sicheren Austausch von Informationen entlang der gesamten Automotive Supply Chain.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Branchenspezifische Anforderungen für Automotive Informationssicherheit'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Standardisierte Assessment-Verfahren für Supply Chain Transparenz'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Internationale Anerkennung in der globalen Automobilindustrie'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Effiziente Bewertung durch einmalige Assessment-Durchführung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Vertrauensbildung zwischen OEMs und Zulieferern'
          }
        ],
        alert: {
          title: 'Automotive Industry Standard',
          content: 'TISAX ist der de-facto Standard für Informationssicherheit in der Automobilindustrie und Voraussetzung für die Zusammenarbeit mit führenden OEMs weltweit.'
        },
        whyUs: {
          title: 'Warum TISAX mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Expertise in Automotive Information Security'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte TISAX Assessment-Vorbereitung und -begleitung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integration mit bestehenden ISO 27001 Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Umfassende Branchenkenntnisse der Automotive Supply Chain'
            }
          ]
        },
        additionalInfo: 'TISAX basiert auf dem VDA ISA (Verband der Automobilindustrie Information Security Assessment) Katalog und erweitert ISO 27001 um automotive-spezifische Anforderungen. Das Assessment erfolgt durch akkreditierte Prüforganisationen und ermöglicht den vertrauensvollen Informationsaustausch zwischen Automotive-Partnern.',
        serviceDescription: 'Unser TISAX Service-Portfolio umfasst die vollständige Begleitung von der Gap-Analyse über die Implementierung bis zur erfolgreichen Assessment-Durchführung. Wir unterstützen Sie dabei, die spezifischen Anforderungen der Automobilindustrie zu erfüllen und nachhaltigen Erfolg in der Supply Chain zu sichern.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'TISAX Gap-Analyse und Readiness Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'VDA ISA konforme Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Assessment-Vorbereitung und Prüfungsbegleitung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Automotive-spezifische Schulungen und Training'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Compliance-Überwachung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer TISAX Implementierungsansatz',
        description: 'Wir verfolgen einen strukturierten, automotive-spezifischen Ansatz, der bewährte ISO 27001 Methoden mit TISAX-spezifischen Anforderungen kombiniert und nachhaltigen Erfolg in der Automobilindustrie gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Automotive-spezifische Gap-Analyse basierend auf VDA ISA Katalog'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Maßgeschneiderte Implementierung für Automotive Supply Chain Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Systematische Assessment-Vorbereitung mit Praxis-Simulationen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Professionelle Begleitung während des TISAX Assessments'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Verankerung und kontinuierliche Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'TISAX ist der Schlüssel für vertrauensvolle Partnerschaften in der Automobilindustrie. Unsere spezialisierte Expertise in Automotive Information Security ermöglicht es unseren Kunden, die strengen Anforderungen der Branche zu erfüllen und nachhaltigen Erfolg in globalen Supply Chains zu sichern.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'TISAX Assessment Vorbereitung',
          description: 'Umfassende Vorbereitung auf das TISAX Assessment mit Gap-Analyse, Implementierung und Praxis-Simulationen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'VDA ISA konforme Gap-Analyse und Readiness Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Automotive-spezifische Risikobewertung und Kontrollimplementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Assessment-Simulation und Prüfungsvorbereitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Dokumentation und Nachweis-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'TISAX Implementierung & Consulting',
          description: 'Strategische Beratung und operative Implementierung für erfolgreiche TISAX Compliance in der Automobilindustrie.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Automotive Supply Chain Security Konzeption'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integration mit bestehenden ISO 27001 Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Branchenspezifische Prozess- und Kontrollentwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Change Management für Automotive Security Culture'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'TISAX Schulungen & Training',
          description: 'Spezialisierte Schulungsprogramme für Automotive Information Security und TISAX Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'TISAX Foundation und Advanced Trainings'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'VDA ISA Katalog und Assessment-Methodik'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Automotive-spezifische Security Awareness Programme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Maßgeschneiderte Inhouse-Schulungen für Automotive Teams'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'TISAX Audit & Assessment Support',
          description: 'Professionelle Begleitung während des TISAX Assessments und kontinuierliche Compliance-Überwachung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Assessment-Begleitung und Prüfer-Koordination'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Interne Audit-Programme für kontinuierliche Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Re-Assessment Vorbereitung und Überwachung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Kontinuierliche Verbesserung und Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Automotive Supply Chain Security',
          description: 'Umfassende Sicherheitslösungen für die gesamte Automotive Supply Chain mit TISAX Integration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Supply Chain Risk Assessment und Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Lieferanten-Security-Bewertung und -entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Automotive-spezifische Incident Response Planung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Integration mit OEM Security Requirements'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'TISAX Tools & Technology Solutions',
          description: 'Spezialisierte Tools und Technologielösungen für effizientes TISAX Management und Automotive Security.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'TISAX Management-Plattformen und Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Automotive-spezifische Compliance-Monitoring-Tools'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Supply Chain Security Visibility Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Integration mit Automotive PLM und ERP Systemen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001TisaxData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 TISAX main page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
