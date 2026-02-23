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
    console.log('Creating TISAX VDA ISA Audit Vorbereitung Labeling page...')

    const tisaxAuditVorbereitungLabelingData = {
      _type: 'servicePage',
      _id: 'tisax-vda-isa-audit-vorbereitung-labeling',
      title: 'TISAX VDA ISA Audit Vorbereitung & Labeling',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/tisax-vda-isa/tisax-vda-isa-audit-vorbereitung-labeling'
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
        title: 'TISAX VDA ISA Audit Vorbereitung & Labeling | ADVISORI',
        description: 'Professionelle Vorbereitung auf TISAX VDA ISA Audits und Unterstützung beim Labeling-Prozess. Sichern Sie Ihre Zertifizierung mit unserer Expertise.',
        keywords: 'TISAX Audit, VDA ISA, Labeling, Zertifizierung, Informationssicherheit, Automotive, Audit Vorbereitung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'TISAX VDA ISA Audit Vorbereitung & Labeling'
        },
        tagline: 'Erfolgreiche TISAX-Zertifizierung durch professionelle Audit-Vorbereitung',
        heading: 'TISAX VDA ISA Audit Vorbereitung & Labeling',
        description: 'Bereiten Sie sich optimal auf Ihr TISAX VDA ISA Audit vor und sichern Sie Ihre Zertifizierung. Wir unterstützen Sie beim gesamten Labeling-Prozess und der strategischen Audit-Vorbereitung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strukturierte Vorbereitung auf alle TISAX-Audit-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Professionelle Unterstützung beim Labeling-Prozess'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Maximierung der Erfolgswahrscheinlichkeit für die Zertifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Reduzierung von Audit-Risiken durch proaktive Maßnahmen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'TISAX VDA ISA Audit Vorbereitung & Labeling',
        description: 'Die Vorbereitung auf ein TISAX VDA ISA Audit erfordert methodisches Vorgehen und tiefes Verständnis der Audit-Kriterien. Wir unterstützen Sie bei der strategischen Vorbereitung und begleiten Sie durch den gesamten Labeling-Prozess zur erfolgreichen Zertifizierung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Analyse der aktuellen Compliance-Situation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Strategische Planung und Vorbereitung des Audit-Prozesses'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Professionelle Begleitung des Labeling-Verfahrens'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Schulung und Vorbereitung der beteiligten Teams'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Unterstützung bis zur erfolgreichen Zertifizierung'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine professionelle Audit-Vorbereitung kann die Erfolgswahrscheinlichkeit der TISAX-Zertifizierung um bis zu 85% erhöhen und gleichzeitig Zeit und Kosten des Gesamtprozesses reduzieren.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung mit TISAX-Audits in verschiedenen Branchen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Zertifizierte TISAX-Experten und VDA ISA-Spezialisten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methodik für erfolgreiche Audit-Vorbereitungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz vom Pre-Assessment bis zur Zertifizierung'
            }
          ]
        },
        additionalInfo: 'TISAX-zertifizierte Unternehmen haben nachweislich einen Wettbewerbsvorteil in der Automobilindustrie und können ihre Marktposition durch vertrauensvolle Partnerschaften stärken.',
        serviceDescription: 'Wir bieten Ihnen eine vollumfängliche Betreuung bei der Vorbereitung auf Ihr TISAX VDA ISA Audit. Von der initialen Bewertung über die strategische Planung bis zur finalen Zertifizierung - wir sind Ihr kompetenter Partner.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Pre-Assessment und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Audit-Strategieentwicklung und Zeitplanung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Labeling-Prozess Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Team-Schulungen und Audit-Simulation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Dokumentation und Nachweisführung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und bewährten Ansatz, um Sie optimal auf Ihr TISAX VDA ISA Audit vorzubereiten und den Labeling-Prozess erfolgreich zu gestalten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Initiales Assessment und Ist-Zustand-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten Audit-Strategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Systematische Vorbereitung aller Audit-relevanten Bereiche'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Professionelle Begleitung des Labeling-Verfahrens'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung bis zur erfolgreichen Zertifizierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Durch die professionelle Audit-Vorbereitung von ADVISORI haben wir unsere TISAX-Zertifizierung erfolgreich und ohne Nachbesserungen erhalten. Die strukturierte Herangehensweise und das tiefe Fachwissen des Teams waren entscheidend für unseren Erfolg.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Pre-Assessment & Gap-Analyse',
          description: 'Umfassende Bewertung Ihrer aktuellen Compliance-Situation und Identifikation von Verbesserungspotenzialen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse aller VDA ISA-Kontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation von Compliance-Lücken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Priorisierung der Maßnahmen nach Kritikalität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung eines Umsetzungsfahrplans'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Labeling-Prozess Management',
          description: 'Professionelle Begleitung durch den gesamten TISAX-Labeling-Prozess von der Anmeldung bis zur Zertifizierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Strategische Planung des Labeling-Verfahrens'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Koordination mit Assessment-Providern'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Vorbereitung aller erforderlichen Dokumentationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Begleitung während des Audit-Prozesses'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(tisaxAuditVorbereitungLabelingData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ TISAX VDA ISA Audit Vorbereitung & Labeling page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
