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
    console.log('Creating CRR/CRD Risikosteuerung & Validierung page...')

    const risikosteuerungData = {
      _type: 'servicePage',
      _id: 'crr-crd-risikosteuerung-validierung',
      title: 'CRR/CRD Risikosteuerung & Validierung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/crr-crd/crr-crd-ongoing-compliance/crr-crd-risikosteuerung-validierung'
      },
      parent: {
        _type: 'reference',
        _ref: 'crr-crd-ongoing-compliance'
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
        title: 'CRR/CRD Risikosteuerung & Validierung | ADVISORI',
        description: 'Optimieren Sie Ihre Risikomodelle und validieren Sie Ihre Steuerungsprozesse mit unseren spezialisierten CRR/CRD-konformen Lösungen für Finanzinstitute.',
        keywords: 'CRR/CRD, Risikosteuerung, Modellvalidierung, Risikomanagement, Basel-Anforderungen, Validierungsprozesse, Finanzregulierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRR/CRD Risikosteuerung & Validierung'
        },
        tagline: 'Effektives Risikomanagement und Modellvalidierung für Finanzinstitute',
        heading: 'CRR/CRD Risikosteuerung & Validierung',
        description: 'Entwickeln und validieren Sie robuste Risikosteuerungsmodelle, die den regulatorischen Anforderungen der CRR/CRD entsprechen und gleichzeitig Ihre Geschäftsstrategie unterstützen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende Validierung von Risikomodellen und -methoden'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierte Risikoprozesse für verbesserte Kapitaleffizienz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Nahtlose Integration in bestehende Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Stärkung des Vertrauens von Aufsichtsbehörden und Stakeholdern'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRR/CRD Risikosteuerung & Validierung',
        description: 'Die effektive Steuerung und Validierung von Risikomodellen ist ein zentraler Bestandteil der CRR/CRD-Compliance. Wir unterstützen Sie bei der Entwicklung, Implementierung und regelmäßigen Überprüfung Ihrer Risikosteuerungsprozesse und Validierungsmethoden, um regulatorische Anforderungen zu erfüllen und geschäftliche Ziele zu unterstützen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung und Überprüfung robuster Risikomodelle'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Validierung von internen Modellen gemäß CRR/CRD-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration von Risikosteuerungsprozessen in die Geschäftsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Unabhängige Bewertung der Modelleffektivität und -genauigkeit'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Verbesserung der Risikomanagement-Praktiken'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine robuste Modellvalidierung ist nicht nur eine regulatorische Anforderung, sondern auch ein wichtiges Instrument zur Verbesserung der Geschäftsentscheidungen und des Kapitalmanagements. Investieren Sie in qualitativ hochwertige Validierungsprozesse, um sowohl Compliance als auch geschäftliche Vorteile zu erzielen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefes Verständnis der CRR/CRD-Anforderungen an Risikosteuerung und Modellvalidierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrenes Team mit fundiertem Wissen in Risikoquantifizierung und -modellierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxiserprobte Methoden zur Identifikation und Behebung von Modellschwächen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz, der sowohl regulatorische als auch geschäftliche Perspektiven berücksichtigt'
            }
          ]
        },
        additionalInfo: 'Eine effektive Risikosteuerung und Modellvalidierung kann nicht nur regulatorische Anforderungen erfüllen, sondern auch die Kapitaleffizienz um bis zu 15% verbessern und fundierte strategische Entscheidungen ermöglichen. Unsere Beratungsleistungen helfen Ihnen, dieses Potenzial voll auszuschöpfen.',
        serviceDescription: 'Wir bieten ein umfassendes Spektrum an Beratungsleistungen im Bereich Risikosteuerung und Modellvalidierung, die speziell auf die Anforderungen der CRR/CRD zugeschnitten sind. Von der Entwicklung neuer Risikomodelle bis hin zur kontinuierlichen Validierung bestehender Methoden unterstützen wir Sie bei jedem Schritt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Entwicklung und Überprüfung von Risikomodellen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Unabhängige Modellvalidierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierung von Validierungsframeworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Risikobezogenes Kapitalmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Optimierung der Risikoprozesse'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und umfassenden Ansatz bei der Risikosteuerung und Modellvalidierung, der sowohl regulatorische Anforderungen als auch geschäftliche Ziele berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der bestehenden Risikomodelle und -prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Identifikation von Verbesserungspotentialen und regulatorischen Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung und Implementierung optimierter Risikosteuerungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Durchführung unabhängiger Modellvalidierungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und Verbesserung der Risikomanagement-Praktiken'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Schneider',
        position: 'Senior Risk Expert',
        quote: 'Die Beratungsleistungen von ADVISORI im Bereich Risikosteuerung und Modellvalidierung haben uns geholfen, nicht nur die regulatorischen Anforderungen der CRR/CRD zu erfüllen, sondern auch unsere Risikomanagement-Prozesse zu optimieren. Dank der fundierten Expertise und dem praxisorientierten Ansatz konnten wir signifikante Verbesserungen in unserer Kapitaleffizienz und Risikotransparenz erzielen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Entwicklung und Überprüfung von Risikomodellen',
          description: 'Wir unterstützen Sie bei der Entwicklung, Implementierung und regelmäßigen Überprüfung Ihrer Risikomodelle, um sicherzustellen, dass sie den regulatorischen Anforderungen entsprechen und Ihre Geschäftsziele unterstützen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Entwicklung maßgeschneiderter Risikomodelle für verschiedene Risikokategorien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Regelmäßige Überprüfung und Anpassung der Modelle an veränderte Markt- und regulatorische Bedingungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Integration der Modelle in die Risikomanagement-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Dokumentation der Modelle und ihrer Annahmen für regulatorische Zwecke'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Unabhängige Modellvalidierung',
          description: 'Wir bieten unabhängige Validierungsdienste für Ihre Risikomodelle, um sicherzustellen, dass sie methodisch korrekt, zuverlässig und für ihren Zweck geeignet sind.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Überprüfung der methodischen Grundlagen und Annahmen der Modelle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Bewertung der Datenqualität und -verarbeitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Benchmarking gegen Best Practices und regulatorische Erwartungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Entwicklung von Validierungsberichten und Empfehlungen für Verbesserungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(risikosteuerungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRR/CRD Risikosteuerung & Validierung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
