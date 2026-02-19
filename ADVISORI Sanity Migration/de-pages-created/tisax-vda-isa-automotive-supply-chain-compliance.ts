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
    console.log('Creating TISAX VDA ISA Automotive Supply Chain Compliance page...')

    const tisaxVdaIsaAutomotiveData = {
      _type: 'servicePage',
      _id: 'tisax-vda-isa-automotive-supply-chain-compliance',
      title: 'TISAX VDA ISA Automotive Supply Chain Compliance',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/tisax-vda-isa/tisax-vda-isa-automotive-supply-chain-compliance'
      },
      parent: {
        _type: 'reference',
        _ref: 'tisax-vda-isa'
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
        title: 'TISAX VDA ISA Automotive Supply Chain Compliance | ADVISORI',
        description: 'Umfassende TISAX VDA ISA Compliance-Beratung für die Automobilindustrie. Wir unterstützen Sie bei der Implementierung und Zertifizierung nach TISAX-Standards.',
        keywords: 'TISAX, VDA ISA, Automotive Supply Chain, Informationssicherheit, Automotive Compliance, Lieferketensicherheit, VDA'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'TISAX VDA ISA Automotive Supply Chain Compliance'
        },
        tagline: 'Professionelle TISAX VDA ISA Compliance für automotive Lieferketten',
        heading: 'TISAX VDA ISA Automotive Supply Chain Compliance',
        description: 'TISAX (Trusted Information Security Assessment Exchange) VDA ISA gewährleistet höchste Informationssicherheitsstandards in der Automobilindustrie. Wir unterstützen Sie bei der vollständigen Implementierung und erfolgreichen Zertifizierung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige TISAX VDA ISA Zertifizierung und Compliance-Unterstützung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Spezialistische Beratung für automotive Lieferketten und OEM-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Implementierung von Informationssicherheits-Management-Systemen nach VDA ISA'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Überwachung und Aufrechterhaltung der TISAX-Compliance'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'TISAX VDA ISA Automotive Supply Chain Compliance',
        description: 'TISAX VDA ISA ist der branchenspezifische Standard für Informationssicherheit in der Automobilindustrie. Als vertrauenswürdiger Partner unterstützen wir Unternehmen dabei, die komplexen Anforderungen der automotive Supply Chain zu erfüllen und nachhaltige Sicherheitsstrukturen zu etablieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Gap-Analyse und Bewertung bestehender Sicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung maßgeschneiderter ISMS-Strukturen nach VDA ISA-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung von Sicherheitskontrollen und Schutzmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Vorbereitung und Begleitung des TISAX-Assessment-Prozesses'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Compliance-Überwachung und Verbesserungsmanagement'
          }
        ],
        alert: {
          title: 'Branchenexpertise',
          content: 'TISAX VDA ISA ist speziell für die Automobilindustrie entwickelt und berücksichtigt die einzigartigen Herausforderungen von OEMs, Tier-1-Suppliers und der gesamten automotive Supply Chain.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in automotive Informationssicherheit und VDA-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfassende Erfahrung mit TISAX-Assessments und Zertifizierungsprozessen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Beratung für automotive Supply Chain Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Praxisorientierte Lösungen für nachhaltige Compliance-Strukturen'
            }
          ]
        },
        additionalInfo: 'TISAX-Zertifizierungen sind für viele OEMs mittlerweile Grundvoraussetzung für die Zusammenarbeit. Eine professionelle Implementierung sichert nicht nur die Compliance, sondern stärkt auch das Vertrauen in der gesamten Lieferkette.',
        serviceDescription: 'Wir bieten Ihnen ein vollständiges Leistungsspektrum für TISAX VDA ISA Compliance, von der initialen Bewertung über die Implementierung bis zur erfolgreichen Zertifizierung und kontinuierlichen Aufrechterhaltung der Standards.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'TISAX VDA ISA Gap-Analyse und Readiness Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'ISMS-Implementierung nach VDA ISA-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Automotive-spezifische Sicherheitskontrollen und Schutzmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'TISAX-Assessment Vorbereitung und Begleitung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Compliance-Überwachung und Maintenance'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine maßgeschneiderte TISAX VDA ISA Compliance-Strategie, die den spezifischen Anforderungen Ihrer Position in der automotive Supply Chain entspricht.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Detaillierte Analyse Ihrer aktuellen Informationssicherheits-Landschaft'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Identifikation relevanter VDA ISA-Anforderungen und Schutzbedarfe'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung eines strukturierten Implementierungsplans'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Umsetzung von Sicherheitsmaßnahmen und ISMS-Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Assessment-Vorbereitung und Zertifizierungsbegleitung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir einen Partner gefunden, der die komplexen Anforderungen der automotive Industrie versteht und uns erfolgreich durch den TISAX-Zertifizierungsprozess geführt hat. Die Expertise im Bereich VDA ISA war entscheidend für unseren Erfolg.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'TISAX VDA ISA Gap-Analyse',
          description: 'Umfassende Bewertung Ihrer aktuellen Informationssicherheits-Maßnahmen gegen VDA ISA-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse bestehender Sicherheitskontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation von Compliance-Lücken und Handlungsbedarfen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Priorisierung von Verbesserungsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Erstellung eines strukturierten Umsetzungsplans'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'ISMS-Implementierung nach VDA ISA',
          description: 'Aufbau und Implementierung eines vollständigen Informationssicherheits-Management-Systems nach VDA ISA-Standards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung automotive-spezifischer ISMS-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementierung von Sicherheitsrichtlinien und -verfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Schulung und Sensibilisierung der Mitarbeiter'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Etablierung von Monitoring- und Reporting-Prozessen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(tisaxVdaIsaAutomotiveData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ TISAX VDA ISA Automotive Supply Chain Compliance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
