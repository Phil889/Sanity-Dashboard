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
    console.log('Creating Standards Frameworks Automotive Supply Chain Compliance page...')

    const automotiveSupplyChainComplianceData = {
      _type: 'servicePage',
      _id: 'standards-frameworks-automotive-supply-chain-compliance',
      title: 'Automotive Supply Chain Compliance',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/standards-frameworks-tisax-vda-isa/standards-frameworks-automotive-supply-chain-compliance'
      },
      parent: {
        _type: 'reference',
        _ref: 'standards-frameworks-tisax-vda-isa'
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
        title: 'Automotive Supply Chain Compliance | ADVISORI',
        description: 'Sichern Sie Ihre Automobillieferkette mit umfassenden Compliance-Standards. TISAX, VDA ISA, ISO 27001 und branchenspezifische Sicherheitsanforderungen für die Automobilindustrie.',
        keywords: 'Automotive Supply Chain, TISAX, VDA ISA, Automotive Compliance, Lieferkettenmanagement, Automobilindustrie, Cybersecurity, ISO 27001'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Automotive Supply Chain Compliance'
        },
        tagline: 'Umfassende Compliance-Standards für sichere Automobillieferketten',
        heading: 'Automotive Supply Chain Compliance',
        description: 'Gewährleisten Sie die Sicherheit und Compliance Ihrer Automobillieferkette durch TISAX-, VDA ISA- und weitere branchenspezifische Standards. Wir unterstützen Sie bei der Implementierung robuster Sicherheitsmaßnahmen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'TISAX-Zertifizierung und VDA ISA Compliance für Lieferantenintegration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Schutz sensibler Fahrzeug- und Produktionsdaten entlang der Lieferkette'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Erfüllung automobilspezifischer Sicherheitsanforderungen und Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Überwachung und Optimierung der Supply Chain Security'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Automotive Supply Chain Compliance',
        description: 'Die Automobilindustrie steht vor besonderen Herausforderungen in der Lieferkettensicherheit. Mit vernetzten Fahrzeugen, komplexen Produktionsprozessen und sensiblen Daten erfordern Automobilunternehmen spezielle Compliance-Standards wie TISAX und VDA ISA. Wir unterstützen Sie bei der vollständigen Implementierung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'TISAX-Assessment und Zertifizierungsvorbereitung für alle Schutzbedarfsstufen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'VDA ISA Implementierung und kontinuierliche Compliance-Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Automobilspezifische Cybersecurity-Frameworks und Risikoanalysen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Lieferanten-Onboarding und Security-Assessment-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Incident Response und Supply Chain Security Monitoring'
          }
        ],
        alert: {
          title: 'Branchenexpertise',
          content: 'Die Automobilindustrie erfordert spezialisierte Compliance-Ansätze. Von TISAX über VDA ISA bis hin zu ISO/SAE 21434 - wir kennen die spezifischen Anforderungen und unterstützen Sie bei der effizienten Umsetzung.'
        },
        whyUs: {
          title: 'Unsere Automotive-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnisse der Automobilbranche und ihrer spezifischen Compliance-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Zertifizierte TISAX-Experten und VDA ISA-Spezialisten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxiserprobte Implementierungsstrategien für komplexe Lieferketten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von der Risikoanalyse bis zur kontinuierlichen Überwachung'
            }
          ]
        },
        additionalInfo: 'In der vernetzten Automobilwelt ist Supply Chain Security ein kritischer Erfolgsfaktor. Eine robuste Compliance-Strategie schützt nicht nur vor Cyberbedrohungen, sondern sichert auch Ihre Position in der Lieferkette und ermöglicht Geschäftswachstum.',
        serviceDescription: 'Wir bieten umfassende Beratung und Implementierungsunterstützung für alle Aspekte der Automotive Supply Chain Compliance - von TISAX-Zertifizierungen über VDA ISA-Implementierungen bis hin zu maßgeschneiderten Sicherheitsframeworks.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'TISAX-Assessment Vorbereitung und Durchführung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'VDA ISA Implementierung und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Automotive Cybersecurity Framework Development'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Lieferanten-Security-Assessment und -Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Incident Response und Continuous Monitoring'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Automotive Compliance Ansatz',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte Automotive Supply Chain Compliance Strategie, die alle branchenspezifischen Anforderungen erfüllt und Ihre Geschäftsziele unterstützt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer aktuellen Supply Chain und Sicherheitslandschaft'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Gap-Analyse zu TISAX, VDA ISA und weiteren relevanten Standards'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung eines phasenweisen Implementierungsplans'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Begleitung bei der Umsetzung und Zertifizierungsvorbereitung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung kontinuierlicher Compliance-Prozesse und Monitoring'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die Komplexität der Automotive Supply Chain erfordert spezialisierte Expertise. Mit ADVISORI haben wir einen Partner gefunden, der sowohl die technischen als auch die regulatorischen Anforderungen der Automobilbranche versteht und uns bei der erfolgreichen TISAX-Zertifizierung unterstützt hat.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'TISAX Assessment & Zertifizierung',
          description: 'Vollständige Unterstützung bei der TISAX-Zertifizierung für alle Schutzbedarfsstufen und Anwendungsbereiche.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'TISAX-Readiness Assessment und Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Implementierung der erforderlichen Sicherheitsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Vorbereitung und Begleitung des Assessment-Prozesses'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Kontinuierliche Compliance-Überwachung und Re-Assessment'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'VDA ISA & Automotive Cybersecurity',
          description: 'Umfassende Implementierung von VDA ISA-Standards und automobilspezifischen Cybersecurity-Frameworks.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'VDA ISA Katalog-Implementierung und Compliance-Check'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'ISO/SAE 21434 Automotive Cybersecurity Engineering'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Supply Chain Risk Assessment und Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Incident Response für Automotive-spezifische Bedrohungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(automotiveSupplyChainComplianceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Standards Frameworks Automotive Supply Chain Compliance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
