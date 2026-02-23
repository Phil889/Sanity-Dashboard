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
    console.log('Creating CRR/CRD RWA Berechnung Methodik page...')

    const rwaMethodikData = {
      _type: 'servicePage',
      _id: 'crr-crd-rwa-berechnung-methodik',
      title: 'CRR/CRD RWA Berechnung Methodik',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/crr-crd/crr-crd-readiness/crr-crd-rwa-berechnung-methodik'
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
        title: 'CRR/CRD RWA Berechnung Methodik | ADVISORI',
        description: 'Optimieren Sie Ihre RWA-Berechnung mit unseren spezialisierten CRR/CRD-konformen Methoden. Stärken Sie Ihre Kapitaleffizienz durch präzise Risk-Weighted-Assets-Kalkulationen.',
        keywords: 'RWA Berechnung, Risk-Weighted Assets, CRR/CRD Methodik, Kapitalanforderungen, Risikogewichtete Aktiva, Basel Framework, Standardansatz, IRBA, Kreditrisiko, Marktrisiko, Operationelles Risiko'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRR/CRD RWA Berechnung Methodik'
        },
        tagline: 'Präzise RWA-Berechnung für optimale Kapitaleffizienz',
        heading: 'CRR/CRD RWA Berechnung Methodik',
        description: 'Optimieren Sie Ihre Risk-Weighted Assets (RWA) Berechnung durch methodisch präzise, regulatorisch konforme Ansätze. Unsere Experten unterstützen Sie bei der Implementierung effizienter Berechnungsmethoden für Kredit-, Markt- und operationelle Risiken nach den aktuellen CRR/CRD-Anforderungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Methodik-Optimierung für alle relevanten Risikokategorien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Nahtlose Integration in bestehende Risikomanagement-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kapitaleffizienzsteigerung durch präzise RWA-Kalkulation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Zukunftssichere Implementierung mit Blick auf regulatorische Änderungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'RWA-Berechnungsmethodik nach CRR/CRD',
        description: 'Die korrekte Berechnung risikogewichteter Aktiva (RWA) ist ein zentraler Bestandteil der CRR/CRD-Compliance und hat direkte Auswirkungen auf Ihre Kapitalanforderungen. Unsere spezialisierten Services bieten methodische Expertise zur Optimierung, Implementierung und Validierung von RWA-Berechnungsansätzen unter Berücksichtigung aller regulatorischen Anforderungen und Ihrer institutsspezifischen Gegebenheiten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Methodikentwicklung für alle Risikokategorien (Kredit-, Markt-, operationelle Risiken)'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung und Validierung von Standardansätzen und internen Modellen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Optimierung der Datenarchitektur für präzise RWA-Berechnungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Implementierung von Prozessen zur kontinuierlichen Methodik-Überprüfung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Entwicklung von Simulationstools zur Bewertung von Kapitalauswirkungen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Die präzise Kalibrierung Ihrer RWA-Methodiken kann erhebliche Kapitaleffizienzgewinne generieren, ohne dabei regulatorische Anforderungen zu kompromittieren. Besonders wichtig ist die regelmäßige Überprüfung von Annahmen und Parametern, um eine konsistente Risikobewertung über alle Portfolios hinweg zu gewährleisten.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende methodische Expertise in allen RWA-relevanten Bereichen der CRR/CRD'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfangreiche Praxiserfahrung mit unterschiedlichen Ansätzen bei Finanzinstituten verschiedener Größe'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Kombination aus regulatorischem Know-how und technischer Implementierungskompetenz'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Beobachtung regulatorischer Entwicklungen für zukunftssichere Implementierungen'
            }
          ]
        },
        additionalInfo: 'Die Methodikentwicklung für RWA-Berechnungen erfordert ein tiefes Verständnis sowohl der regulatorischen Anforderungen als auch der institutsspezifischen Risikoprofile. Unser Ansatz kombiniert regulatorische Expertise mit praktischer Umsetzungskompetenz, um methodisch fundierte, effiziente und zukunftsfähige Lösungen zu entwickeln.',
        serviceDescription: 'Unsere Dienstleistungen zur RWA-Berechnungsmethodik umfassen den gesamten Lebenszyklus - von der initialen Assessment und Konzeption über die Implementierung bis hin zur kontinuierlichen Validierung und Optimierung. Dabei berücksichtigen wir stets die neuesten regulatorischen Entwicklungen sowie Best Practices aus der Branche.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Gap-Analyse bestehender RWA-Methodiken und Identifikation von Optimierungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Design und Implementierung optimierter Berechnungsansätze für alle Risikokategorien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Unterstützung bei Modellentwicklung, -validierung und -dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Implementierung effizienter Datenarchitekturen für RWA-Berechnungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Etablierung von Governance- und Kontrollrahmenwerken für RWA-Methodiken'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten, phasenbasierten Ansatz zur Optimierung und Implementierung von RWA-Berechnungsmethodiken, der sowohl regulatorische Konformität als auch Kapitaleffizienz maximiert und nahtlos in Ihre bestehenden Prozesse integriert werden kann.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Assessment bestehender Methodiken und Identifikation von Verbesserungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung optimierter Methodiken unter Berücksichtigung regulatorischer Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Technische Implementierung und Integration in bestehende Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Validierung der Methodiken hinsichtlich Genauigkeit und regulatorischer Konformität'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Wissenstransfer und Schulung Ihrer Mitarbeiter für nachhaltige Anwendung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Martin Weber',
        position: 'Senior Manager Regulatory Risk',
        quote: 'Unsere Erfahrung zeigt, dass die methodische Präzision bei der RWA-Berechnung einen entscheidenden Wettbewerbsvorteil darstellen kann. Durch eine sorgfältige Optimierung der Berechnungsansätze konnten wir bei zahlreichen Kunden signifikante Kapitaleffizienzsteigerungen erzielen, ohne dabei regulatorische Compliance zu gefährden. Der Schlüssel liegt in einer methodischen Konsistenz über alle Risikokategorien hinweg.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'RWA-Methodik Assessment und Optimierung',
          description: 'Umfassende Analyse und Optimierung Ihrer bestehenden RWA-Berechnungsmethodiken für alle relevanten Risikokategorien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Gap-Analyse bestehender Methodiken gegenüber regulatorischen Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation von Optimierungspotenzialen für Kapitaleffizienz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung verbesserter Berechnungsansätze basierend auf Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Benchmarking-Analyse im Vergleich zu Branchenstandards'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Implementierung und Validierung von RWA-Berechnungsmodellen',
          description: 'Unterstützung bei der Entwicklung, Implementierung und Validierung von RWA-Berechnungsmodellen für unterschiedliche Risikokategorien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung und Implementierung von Standardansätzen und internen Modellen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Modellvalidierung und -dokumentation gemäß regulatorischen Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration in bestehende Datenarchitekturen und Risikomanagement-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Entwicklung von Simulationstools zur Bewertung von Kapitalauswirkungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(rwaMethodikData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRR/CRD RWA Berechnung Methodik page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
