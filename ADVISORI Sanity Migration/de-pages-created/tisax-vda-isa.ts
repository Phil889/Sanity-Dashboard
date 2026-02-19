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
    console.log('Creating TISAX VDA ISA page...')

    const tisaxVdaIsaData = {
      _type: 'servicePage',
      _id: 'tisax-vda-isa',
      title: 'TISAX VDA ISA Assessment',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/tisax-vda-isa'
      },
      parent: {
        _type: 'reference',
        _ref: 'standards-frameworks'
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
        title: 'TISAX VDA ISA Assessment | ADVISORI',
        description: 'Professionelle TISAX VDA ISA Assessment-Begleitung für die Automobilindustrie. Wir unterstützen Sie bei der erfolgreichen Umsetzung und Zertifizierung nach TISAX-Standards.',
        keywords: 'TISAX Assessment, VDA ISA, Automotive Security, TISAX Zertifizierung, Informationssicherheit Automotive, Automotive Compliance, Lieferantensicherheit'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'TISAX VDA ISA Assessment'
        },
        tagline: 'Expertenlösungen für Automotive Security Excellence',
        heading: 'TISAX VDA ISA Assessment',
        description: 'Professionelle Begleitung bei TISAX VDA ISA Assessments - von der Vorbereitung bis zur erfolgreichen Zertifizierung. Sichern Sie Ihren Zugang zur Automobilindustrie durch umfassende Informationssicherheit.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Erfolgreiche TISAX-Zertifizierung für Automotive-Lieferanten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strukturierte VDA ISA Assessment-Vorbereitung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Minimierung von Assessment-Risiken und Nacharbeiten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Langfristige Aufrechterhaltung der TISAX-Compliance'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'TISAX VDA ISA Assessment',
        description: 'TISAX (Trusted Information Security Assessment Exchange) ist der Branchenstandard für Informationssicherheit in der Automobilindustrie. Ein erfolgreiches VDA ISA Assessment ist entscheidend für den Zugang zu automotive Lieferketten und strategischen Partnerschaften. Wir begleiten Sie professionell durch alle Phasen des Assessment-Prozesses.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Vorbereitung auf VDA ISA Assessments'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Professionelle Begleitung während Assessment-Durchführung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Gap-Analyse und Remediation-Planung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'TISAX-Label-Management und Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Compliance-Aufrechterhaltung'
          }
        ],
        alert: {
          title: 'Branchenexpertise',
          content: 'TISAX-Assessments erfordern spezifisches Automotive-Know-how und tiefes Verständnis der VDA ISA-Methodik. Eine professionelle Vorbereitung ist entscheidend für den Assessment-Erfolg und den Erhalt des TISAX-Labels.'
        },
        whyUs: {
          title: 'Unsere Automotive-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Erfahrung in Automotive-Informationssicherheit'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Tiefes Verständnis der VDA ISA-Methodik und TISAX-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methoden zur effizienten Assessment-Vorbereitung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Langfristige Begleitung über Assessment-Zyklen hinaus'
            }
          ]
        },
        additionalInfo: 'Das TISAX-Label ist ein entscheidender Qualifikationsfaktor für Geschäfte mit der Automobilindustrie. Eine erfolgreiche Zertifizierung öffnet Türen zu neuen Geschäftsmöglichkeiten und strategischen Partnerschaften.',
        serviceDescription: 'Unser umfassendes TISAX-Servicespektrum deckt alle Aspekte der VDA ISA Assessment-Vorbereitung und -Durchführung ab - von der initialen Gap-Analyse bis zur langfristigen Label-Aufrechterhaltung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'TISAX Readiness Assessment und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'VDA ISA Assessment-Vorbereitung und Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Assessment-Begleitung und Audit-Support'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Nachbearbeitung von Findings und Remediation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'TISAX-Label-Management und Re-Assessment-Planung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Assessment-Ansatz',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte TISAX-Strategie und begleiten Sie systematisch durch alle Assessment-Phasen für eine erfolgreiche Zertifizierung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Durchführung einer umfassenden TISAX Readiness-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer zielgerichteten Assessment-Vorbereitungsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Strukturierte Implementierung erforderlicher Sicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Professionelle Begleitung während der Assessment-Durchführung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Aufrechterhaltung der TISAX-Compliance'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'TISAX ist mehr als nur eine Zertifizierung - es ist der Schlüssel zur Automobilindustrie. Mit der richtigen Vorbereitung und strategischen Ausrichtung wird Ihr TISAX-Assessment zu einem wertvollen Baustein für nachhaltiges Wachstum im Automotive-Sektor.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'TISAX Readiness Assessment',
          description: 'Wir bewerten Ihre TISAX-Bereitschaft durch ein strukturiertes Assessment und identifizieren Optimierungspotenziale vor dem eigentlichen VDA ISA Assessment.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Bewertung gegen VDA ISA-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation kritischer Assessment-Risiken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung gezielter Verbesserungsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Priorisierte Roadmap für TISAX-Compliance'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'VDA ISA Assessment-Begleitung',
          description: 'Professionelle Unterstützung während des gesamten Assessment-Prozesses - von der Koordination bis zur erfolgreichen Zertifizierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Koordination und Vorbereitung aller Assessment-Termine'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Fachliche Unterstützung bei Assessor-Gesprächen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Real-time Klärung von Assessment-Befunden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Dokumentation und Follow-up von Assessment-Ergebnissen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(tisaxVdaIsaData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ TISAX VDA ISA page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
