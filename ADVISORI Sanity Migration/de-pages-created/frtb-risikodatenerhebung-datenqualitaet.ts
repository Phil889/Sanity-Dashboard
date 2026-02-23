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
    console.log('Creating FRTB Risikodatenerhebung Datenqualität page...')

    const frtbRisikodatenerhebungDatenqualitaetData = {
      _type: 'servicePage',
      _id: 'frtb-risikodatenerhebung-datenqualitaet',
      title: 'FRTB Risikodatenerhebung und Datenqualität',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/frtb/frtb-implementation/frtb-risikodatenerhebung-datenqualitaet'
      },
      parent: {
        _type: 'reference',
        _ref: 'frtb-implementation'
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
        title: 'FRTB Risikodatenerhebung und Datenqualität | ADVISORI',
        description: 'Umfassende Unterstützung bei der Implementierung von FRTB-konformen Risikodatenerhebungs- und Datenqualitätsprozessen. Wir begleiten Sie bei der Entwicklung, Implementierung und Optimierung Ihrer Datenprozesse gemäß den FRTB-Anforderungen.',
        keywords: 'FRTB, Fundamental Review of the Trading Book, Risikodatenerhebung, Datenqualität, Datenmanagement, Risk Data, Compliance, Regulatorische Anforderungen, Basel Rahmenwerk'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FRTB Risikodatenerhebung und Datenqualität'
        },
        tagline: 'Expertenlösungen für FRTB-konforme Risikodatenerhebung und Datenqualitätsmanagement',
        heading: 'FRTB Risikodatenerhebung und Datenqualität',
        description: 'Die Fundamental Review of the Trading Book (FRTB) stellt erhöhte Anforderungen an die Qualität und Granularität von Risikodaten. Wir unterstützen Sie bei der Entwicklung, Implementierung und Optimierung von Prozessen zur Risikodatenerhebung und Datenqualitätssicherung, die regulatorische Anforderungen erfüllen und gleichzeitig Ihre Risikobewertung verbessern.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Regulatorisch konforme Risikodatenerhebung gemäß FRTB-Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Verbesserte Datenqualität für präzisere Risikomodellierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Optimierte Datenprozesse für effizientere Risikoberichterstattung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Konsistente und nachvollziehbare Datengrundlage für Risikobewertungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'FRTB Risikodatenerhebung und Datenqualität',
        description: 'Die Erhebung und Qualitätssicherung von Risikodaten unter FRTB erfordert einen umfassenden Ansatz, der sowohl regulatorische Anforderungen als auch die Geschäftsstrategie Ihres Instituts berücksichtigt. Unsere Experten unterstützen Sie bei der Entwicklung und Optimierung von Datenprozessen, die nicht nur den strengen FRTB-Vorgaben entsprechen, sondern auch Ihre Risikosteuerung verbessern und die Effizienz erhöhen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Analyse und Optimierung von Risikodatenerhebungsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung und Implementierung von Datenqualitätskontrollen für FRTB-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Etablierung von Data Governance-Strukturen für Risikodaten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Automatisierung von Datenerhebungs- und Validierungsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration von Risikodatenprozessen in die bestehende Dateninfrastruktur'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Die Qualität der Risikodaten bildet das Fundament für erfolgreiche FRTB-Implementierung. Investitionen in robuste Datenerhebungs- und Qualitätssicherungsprozesse zahlen sich durch präzisere Risikomodelle, effizientere Kapitalnutzung und reduzierte regulatorische Risiken aus. Frühzeitiges Etablieren von FRTB-konformen Datenprozessen minimiert kostspielige Nachbesserungen und stärkt Ihre Wettbewerbsposition.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifendes Expertenwissen in FRTB-Datenanforderungen und Datenqualitätsmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung in der Implementierung von Risikodatenprozessen für regulatorische Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz, der Datenqualität mit Geschäftszielen und Risikosteuerung verbindet'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Innovative Technologielösungen zur Automatisierung und Optimierung von Datenprozessen'
            }
          ]
        },
        additionalInfo: 'Die FRTB-Anforderungen an Risikodaten stellen Banken vor erhebliche Herausforderungen. Eine fundierte Datenstrategie und robuste Qualitätssicherungsprozesse sind entscheidend für die regulatorische Compliance und können gleichzeitig die Effizienz und Präzision der Risikosteuerung verbessern. Unsere Experten unterstützen Sie dabei, diese Herausforderungen zu meistern und die Vorteile hochwertiger Risikodaten voll auszuschöpfen.',
        serviceDescription: 'Wir bieten ein umfassendes Leistungsspektrum zur Unterstützung bei der Entwicklung und Implementierung von FRTB-konformen Risikodatenerhebungs- und Datenqualitätsprozessen. Unser Ansatz umfasst sowohl die technische als auch die organisatorische Dimension und integriert Datenprozesse in Ihre bestehende IT-Landschaft und Governance-Strukturen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Assessment und Optimierung von Risikodatenquellen und -prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung und Implementierung von Datenqualitätsframeworks für FRTB'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Etablierung von Data Governance und Datenverantwortlichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Implementierung von automatisierten Datenqualitätskontrollen und Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulung und Wissenstransfer zu FRTB-Datenanforderungen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam einen maßgeschneiderten Ansatz zur effektiven Implementierung von FRTB-konformen Risikodatenerhebungs- und Datenqualitätsprozessen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Durchführung einer umfassenden Analyse der bestehenden Datenquellen, -prozesse und -qualität'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer FRTB-konformen Datenstrategie mit klaren Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung und Anpassung von Datenerhebungs- und Qualitätssicherungsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration der Datenprozesse in die bestehende IT-Infrastruktur und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung, Optimierung und Anpassung der Datenprozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Christian Weimann',
        position: 'Partner',
        quote: 'Die Qualität und Verfügbarkeit von Risikodaten ist der Schlüsselfaktor für eine erfolgreiche FRTB-Implementierung. Mit unserer Unterstützung können Institute nicht nur die regulatorischen Anforderungen erfüllen, sondern auch ihre Dateninfrastruktur nachhaltig verbessern und wertvolle Einblicke für strategische Entscheidungen gewinnen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'FRTB Risikodaten-Assessment und Gap-Analyse',
          description: 'Wir analysieren Ihre bestehenden Risikodatenquellen, -prozesse und -qualität im Hinblick auf die FRTB-Anforderungen und entwickeln eine maßgeschneiderte Datenstrategie.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Bewertung der aktuellen Datenlandschaft und -prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation von Datenlücken und Qualitätsproblemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung einer priorisierten Roadmap für Datenverbesserungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Kosten-Nutzen-Analyse verschiedener Datenoptimierungsmaßnahmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Implementierung von FRTB-konformen Datenqualitätsprozessen',
          description: 'Wir unterstützen Sie bei der Entwicklung und Implementierung robuster Datenqualitätsprozesse und -kontrollen, die den FRTB-Anforderungen entsprechen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung von Datenqualitätsmetriken und -standards für FRTB'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementierung von automatisierten Datenqualitätskontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Etablierung von Prozessen zur Behebung von Datenqualitätsproblemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration von Datenqualitätsprozessen in die bestehende Governance'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(frtbRisikodatenerhebungDatenqualitaetData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FRTB Risikodatenerhebung Datenqualität page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
