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
    console.log('Creating CRR/CRD Kapital- und Liquiditätsplanung (ICAAP/ILAAP) page...')

    const icaapIlaapData = {
      _type: 'servicePage',
      _id: 'crr-crd-kapital-liquiditaetsplanung-icaap-ilaap',
      title: 'CRR/CRD Kapital- und Liquiditätsplanung (ICAAP/ILAAP)',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/crr-crd/crr-crd-readiness/crr-crd-kapital-liquiditaetsplanung-icaap-ilaap'
      },
      parent: {
        _type: 'reference',
        _ref: 'crr-crd-readiness'
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
        title: 'CRR/CRD Kapital- und Liquiditätsplanung (ICAAP/ILAAP) | ADVISORI',
        description: 'Optimieren Sie Ihre ICAAP- und ILAAP-Prozesse mit unserer maßgeschneiderten Beratung für robuste Kapital- und Liquiditätsplanung im Rahmen der CRR/CRD-Anforderungen.',
        keywords: 'ICAAP, ILAAP, Kapitalplanung, Liquiditätsplanung, CRR/CRD, Interner Kapitaladäquanzprozess, Liquiditätsadäquanzprozess, Risikomanagement, Bankenregulierung, Säule 2'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ICAAP/ILAAP Kapital- und Liquiditätsplanung'
        },
        tagline: 'Strategische Kapital- und Liquiditätsplanung für Finanzinstitute',
        heading: 'CRR/CRD Kapital- und Liquiditätsplanung (ICAAP/ILAAP)',
        description: 'Entwickeln Sie zukunftssichere ICAAP- und ILAAP-Frameworks, die nicht nur regulatorische Anforderungen erfüllen, sondern auch als strategische Steuerungsinstrumente für Ihr Institut dienen. Unsere Experten begleiten Sie von der Konzeption bis zur Implementierung und kontinuierlichen Weiterentwicklung Ihrer Kapital- und Liquiditätsplanungsprozesse.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Integration von aufsichtsrechtlichen und strategischen Perspektiven'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Maßgeschneiderte ICAAP/ILAAP-Frameworks für Ihr Geschäftsmodell'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Optimierung der Kapital- und Liquiditätsallokation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Effiziente Stresstesting-Methoden und -Tools'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ICAAP & ILAAP Excellence',
        description: 'Die internen Prozesse zur Sicherstellung der Kapital- und Liquiditätsadäquanz (ICAAP/ILAAP) sind zentrale Säulen eines robusten Risikomanagements und unverzichtbar für die Erfüllung der CRR/CRD-Anforderungen. Unser Ansatz verbindet regulatorische Compliance mit wertschaffender Unternehmenssteuerung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung integrierter ICAAP/ILAAP-Frameworks mit klaren Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung robuster Risikoquantifizierungsmethoden für alle wesentlichen Risikoarten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Aufbau effektiver Kapital- und Liquiditätsplanungsprozesse mit Mehrjahreshorizont'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Design und Durchführung institutsspezifischer Stresstests mit Geschäftsrelevanz'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Erstellung aussagekräftiger ICAAP/ILAAP-Berichte für Management und Aufsicht'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Die neue Generation von ICAAP/ILAAP-Lösungen geht weit über die bloße Erfüllung regulatorischer Mindestanforderungen hinaus. Nutzen Sie diese Prozesse als strategische Steuerungsinstrumente, die wertvolle Erkenntnisse für die Geschäftsmodelloptimierung und Risikostrategie liefern können.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in allen Aspekten der ICAAP/ILAAP-Anforderungen und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung in der Entwicklung und Implementierung maßgeschneiderter Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Pragmatischer Ansatz, der regulatorische Anforderungen mit geschäftlichem Mehrwert verbindet'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Zugang zu führenden Methodologien und Tools für Risikoquantifizierung und Stresstesting'
            }
          ]
        },
        additionalInfo: 'Unsere ICAAP/ILAAP-Services sind darauf ausgerichtet, nicht nur die aktuellen aufsichtsrechtlichen Erwartungen zu erfüllen, sondern auch die Grundlage für eine zukunftssichere Kapital- und Liquiditätssteuerung zu legen. Wir begleiten Sie bei der kontinuierlichen Weiterentwicklung Ihrer Prozesse im Einklang mit regulatorischen Änderungen und geschäftlichen Anforderungen.',
        serviceDescription: 'Wir bieten ein umfassendes Leistungsspektrum rund um ICAAP und ILAAP, von der initialen Gap-Analyse und Konzeption bis zur vollständigen Implementierung und Optimierung bestehender Frameworks. Unser Ziel ist es, regulatorische Prozesse zu wertschaffenden Steuerungsinstrumenten zu transformieren.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'ICAAP/ILAAP Gap-Analyse und Framework-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung und Verbesserung von Risikoquantifizierungsmethoden'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Konzeption und Durchführung institutsspezifischer Stresstests'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Optimierung von Kapital- und Liquiditätsallokationsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Entwicklung integrierter ICAAP/ILAAP-Berichterstattungslösungen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten Ansatz zur Entwicklung und Implementierung effektiver ICAAP/ILAAP-Frameworks, der alle regulatorischen Anforderungen abdeckt und gleichzeitig den spezifischen Bedürfnissen Ihres Instituts Rechnung trägt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Assessment und Gap-Analyse der bestehenden ICAAP/ILAAP-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung eines institutsspezifischen Target Operating Models'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Design und Implementierung von Methodologien und Tools'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration in bestehende Governance- und Steuerungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Entwicklung effektiver Reporting- und Dokumentationslösungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Stefan Wittig',
        position: 'Senior Manager',
        quote: 'Ein gut konzipierter ICAAP/ILAAP-Prozess ist mehr als ein regulatorisches Erfordernis – er ist ein strategisches Instrument, das Finanzinstituten wertvolle Einblicke in ihre Risiko-Rendite-Struktur bietet und fundierte Entscheidungen zur Kapital- und Liquiditätsallokation ermöglicht. Unsere Erfahrung zeigt, dass Institute, die diese Prozesse strategisch nutzen, nicht nur regulatorisch besser aufgestellt sind, sondern auch signifikante Wettbewerbsvorteile erzielen können.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ICAAP/ILAAP Framework-Design und Implementierung',
          description: 'Entwicklung und Implementierung maßgeschneiderter ICAAP/ILAAP-Frameworks, die alle regulatorischen Anforderungen erfüllen und gleichzeitig als wertvolle Steuerungsinstrumente dienen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Entwicklung institutsspezifischer ICAAP/ILAAP-Rahmenwerke und Governance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Implementierung adäquater Risikoquantifizierungsmethoden für alle relevanten Risikoarten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Integration der ICAAP/ILAAP-Prozesse in die Geschäfts- und Risikosteuerung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung effizienter Reporting- und Dokumentationslösungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Stresstesting und Szenarioanalyse',
          description: 'Konzeption und Durchführung umfassender Stress- und Szenarioanalysen, die regulatorische Anforderungen erfüllen und wertvolle Erkenntnisse für die strategische Steuerung liefern.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung eines umfassenden Stresstesting-Frameworks mit verschiedenen Szenariotypen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Design institutsspezifischer Szenarien mit hoher Geschäftsrelevanz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Implementation effizienter Tools und Methoden zur Szenariomodellierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration von Stresstesting-Ergebnissen in Kapital- und Liquiditätsplanung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Kapital- und Liquiditätsplanung',
          description: 'Optimierung von Planungsprozessen für Kapital und Liquidität, die sowohl regulatorische als auch ökonomische Perspektiven berücksichtigen und eine fundierte strategische Entscheidungsfindung unterstützen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Entwicklung integrierter Planungsmodelle mit Mehrjahreshorizont'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Implementierung effizienter Kapital- und Liquiditätsallokationsmechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Integration von Geschäfts-, Risiko- und Kapitalplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Entwicklung von Frühwarnindikatoren und Eskalationsprozessen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(icaapIlaapData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRR/CRD Kapital- und Liquiditätsplanung (ICAAP/ILAAP) page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
