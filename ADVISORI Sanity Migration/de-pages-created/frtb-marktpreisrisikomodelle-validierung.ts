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
    console.log('Creating FRTB Marktpreisrisikomodelle Validierung page...')

    const frtbMarktpreisrisikomodelleValidierungData = {
      _type: 'servicePage',
      _id: 'frtb-marktpreisrisikomodelle-validierung',
      title: 'FRTB Marktpreisrisikomodelle Validierung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/frtb/frtb-implementation/frtb-marktpreisrisikomodelle-validierung'
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
        title: 'FRTB Marktpreisrisikomodelle Validierung | ADVISORI',
        description: 'Umfassende Unterstützung bei der Validierung von FRTB-konformen Marktpreisrisikomodellen. Wir begleiten Sie bei der Entwicklung, Implementierung und fortlaufenden Validierung Ihrer internen Modelle gemäß den FRTB-Anforderungen.',
        keywords: 'FRTB, Fundamental Review of the Trading Book, Marktpreisrisikomodelle, Modellvalidierung, Risikomanagement, Compliance, Regulatorische Anforderungen, Basel Rahmenwerk'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FRTB Marktpreisrisikomodelle Validierung'
        },
        tagline: 'Expertenlösungen für die Validierung von FRTB-konformen Marktpreisrisikomodellen',
        heading: 'FRTB Marktpreisrisikomodelle Validierung',
        description: 'Die Fundamental Review of the Trading Book (FRTB) stellt erhöhte Anforderungen an die Marktpreisrisikomodelle von Banken. Wir unterstützen Sie bei der Entwicklung, Implementierung und kontinuierlichen Validierung FRTB-konformer interner Modelle, die regulatorische Anforderungen erfüllen und gleichzeitig Ihre Kapitaleffizienz optimieren.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Regulatorisch konforme Modellvalidierung gemäß FRTB-Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierung der Kapitalanforderungen durch präzise Risikomodellierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Verbesserte Transparenz und Nachvollziehbarkeit der Risikoberechnungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Effiziente Integration von Modellvalidierungsprozessen in bestehende Governance-Strukturen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'FRTB Marktpreisrisikomodelle Validierung',
        description: 'Die Validierung von Marktpreisrisikomodellen unter FRTB erfordert einen umfassenden Ansatz, der sowohl regulatorische Anforderungen als auch die Geschäftsstrategie Ihres Instituts berücksichtigt. Unsere Experten unterstützen Sie bei der Entwicklung und fortlaufenden Validierung von internen Modellen, die nicht nur den strengen FRTB-Vorgaben entsprechen, sondern auch Ihre Kapitaleffizienz optimieren und das Risikomanagement stärken.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Validierung von Marktpreisrisikomodellen gemäß FRTB-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung und Implementierung von robusten Validierungsmethoden und -prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Optimierung der Modellperformance und Reduzierung von Kapitalanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von Validierungsprozessen in die bestehende Modell-Governance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Entwicklung und Implementierung von automatisierten Validierungswerkzeugen und -berichten'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine erfolgreiche FRTB-Modellvalidierung geht über die reine Compliance hinaus. Sie sollte als strategisches Instrument betrachtet werden, um die Kapitaleffizienz zu steigern und das Risikomanagement zu verbessern. Der frühzeitige Aufbau einer robusten Validierungsinfrastruktur vermeidet kostspielige Nachbesserungen und reduziert regulatorische Risiken.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifendes Expertenwissen in FRTB-Anforderungen und Modellvalidierungsmethoden'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung in der Implementierung und Validierung komplexer Risikomodelle'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz, der regulatorische Anforderungen mit Geschäftszielen verbindet'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Innovative Technologielösungen zur Automatisierung und Optimierung von Validierungsprozessen'
            }
          ]
        },
        additionalInfo: 'Die FRTB-Anforderungen an Marktpreisrisikomodelle stellen Banken vor erhebliche Herausforderungen. Eine fundierte Validierung dieser Modelle ist entscheidend für die regulatorische Anerkennung und kann gleichzeitig die Kapitaleffizienz verbessern. Unsere Experten unterstützen Sie dabei, diese Herausforderungen zu meistern und die Vorteile interner Modelle unter FRTB voll auszuschöpfen.',
        serviceDescription: 'Wir bieten ein umfassendes Leistungsspektrum zur Unterstützung bei der Validierung von FRTB-konformen Marktpreisrisikomodellen. Unser Ansatz umfasst sowohl die methodische und technische Validierung als auch die strategische Integration in Ihre Risikomanagement- und Governance-Prozesse.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Entwicklung und Implementierung von FRTB-konformen Validierungsmethoden'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Unabhängige Validierung von internen Modellen gemäß regulatorischen Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Optimierung der Modellperformance und Reduzierung von Kapitalanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Implementierung von automatisierten Validierungswerkzeugen und -berichten'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulung und Wissenstransfer zu FRTB-Modellvalidierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam einen maßgeschneiderten Ansatz zur effektiven Validierung Ihrer FRTB-konformen Marktpreisrisikomodelle.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Durchführung einer umfassenden Analyse der bestehenden Modelle und Validierungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer FRTB-konformen Validierungsstrategie mit klaren Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung und Anpassung von Validierungsmethoden, -prozessen und -tools'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration der Validierungsprozesse in die bestehende Modell-Governance'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung, Optimierung und Anpassung der Validierungsmethoden'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Die Validierung von FRTB-konformen Marktpreisrisikomodellen ist für Banken nicht nur eine regulatorische Notwendigkeit, sondern auch eine strategische Chance. Mit unserer Unterstützung können Institute die Anforderungen nicht nur erfüllen, sondern auch ihre Risikosteuerung verbessern und Kapitaleffizienz optimieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'FRTB Modellvalidierung und Gap-Analyse',
          description: 'Wir analysieren Ihre bestehenden Marktpreisrisikomodelle und Validierungsprozesse im Hinblick auf die FRTB-Anforderungen und entwickeln eine maßgeschneiderte Validierungsstrategie.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Bewertung der aktuellen Modelle und Validierungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation von Lücken und Verbesserungspotentialen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung einer priorisierten Roadmap für die Validierungsimplementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Kosten-Nutzen-Analyse verschiedener Validierungsoptionen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Implementierung von FRTB-konformen Validierungsmethoden',
          description: 'Wir unterstützen Sie bei der Entwicklung und Implementierung robuster Validierungsmethoden und -prozesse, die den FRTB-Anforderungen entsprechen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung von Backtesting- und P&L-Attribution-Methoden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementierung von Risk-Factor-Eligibility-Tests'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung und Implementierung von Non-Modellable Risk Factors (NMRF) Assessments'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration von Validierungsmethoden in die bestehende Modell-Governance'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(frtbMarktpreisrisikomodelleValidierungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FRTB Marktpreisrisikomodelle Validierung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
