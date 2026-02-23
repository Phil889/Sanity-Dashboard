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
    console.log('Creating Basel III Anpassung interner Risikomodelle page...')

    const baselRisikomodelleData = {
      _type: 'servicePage',
      _id: 'basel-iii-anpassung-interner-risikomodelle',
      title: 'Basel III Anpassung interner Risikomodelle',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/basel-iii/basel-iii-implementation/basel-iii-anpassung-interner-risikomodelle'
      },
      parent: {
        _type: 'reference',
        _ref: 'basel-iii-implementation'
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
        title: 'Basel III Anpassung interner Risikomodelle | ADVISORI',
        description: 'Optimieren Sie Ihre internen Risikomodelle gemäß Basel III-Anforderungen mit ADVISORI. Wir unterstützen Finanzinstitute bei der methodischen Entwicklung, Validierung und Implementierung regulationskonformer Risikomodelle.',
        keywords: 'Basel III, interne Risikomodelle, IRB-Ansatz, Modellvalidierung, Risikoparameter, Modellrisiko, Bankenregulierung, Risikogewichtung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Basel III Anpassung interner Risikomodelle'
        },
        tagline: 'Methodisch fundierte und regulatorisch konforme Risikomodellierung',
        heading: 'Basel III Anpassung interner Risikomodelle',
        description: 'Die Basel III-Regulierung stellt erhöhte Anforderungen an interne Risikomodelle von Finanzinstituten. Wir unterstützen Sie bei der methodischen Weiterentwicklung, Validierung und aufsichtskonformen Implementierung Ihrer Modelle für eine präzisere Risikoquantifizierung und effizientere Kapitalallokation.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Regulationskonforme Anpassung bestehender Risikomodelle'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Risikosensitive Messung und optimierte Kapitalanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Methodische Weiterentwicklung und Erhöhung der Modellgenauigkeit'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Robuste Validierungsprozesse und Dokumentation für Aufsichtszwecke'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Basel III Anpassung interner Risikomodelle',
        description: 'Interne Risikomodelle ermöglichen Finanzinstituten eine differenzierte Bewertung ihrer Risiken und eine effiziente Kapitalallokation. Die Basel III-Regulierung hat die Anforderungen an diese Modelle substantiell erhöht und erfordert umfassende Anpassungen in Methodik, Governance und Validierung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Methodische Weiterentwicklung von IRB-, IMA- und anderen internen Modellen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung neuer Parameterstandards und Floor-Konzepte'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Erweiterung der Modellvalidierung und Backtesting-Verfahren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufsichtskonforme Dokumentation und Modell-Governance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Unterstützung bei Modellgenehmigungsverfahren'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Entwickeln Sie eine holistische Modelllandschaft, die sowohl aufsichtsrechtliche Anforderungen erfüllt als auch geschäftliche Entscheidungsprozesse unterstützt. Die Integration von Modellen in Geschäftsprozesse erhöht deren Akzeptanz und Nutzwert erheblich.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende quantitative Expertise und methodisches Know-how'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfassende Kenntnis regulatorischer Anforderungen und Aufsichtspraxis'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Erfahrung in der Implementierung und Genehmigung interner Modelle'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz, der methodische, technische und prozessuale Aspekte verbindet'
            }
          ]
        },
        additionalInfo: 'Studien zeigen, dass Banken mit fortschrittlichen internen Modellen bis zu 25% präzisere Risikoeinschätzungen erzielen können, was zu einer effizienteren Kapitalallokation und verbesserten Risikosteuerung führt. Gleichzeitig steigen jedoch die regulatorischen Anforderungen an die Robustheit und Validierung dieser Modelle kontinuierlich an.',
        serviceDescription: 'Unsere umfassenden Leistungen im Bereich Basel III Anpassung interner Risikomodelle umfassen die methodische Entwicklung, Implementierung, Validierung und Dokumentation von Risikomodellen unter Berücksichtigung regulatorischer Anforderungen und institutsspezifischer Besonderheiten.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Methodische Konzeption und Weiterentwicklung interner Modelle'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Implementierung von Basel III-konformen Parameterstandards'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Etablierung robuster Validierungs- und Governance-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Dokumentation und Unterstützung bei Aufsichtsdialogen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Integration von Modellen in Entscheidungs- und Steuerungsprozesse'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir begleiten Sie bei der Anpassung Ihrer internen Risikomodelle an die Basel III-Anforderungen mit einem strukturierten und praxiserprobten Ansatz.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der bestehenden Modelllandschaft und Identifikation von Anpassungsbedarfen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Methodische Weiterentwicklung und Anpassung an regulatorische Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung und Integration in die IT-Systemlandschaft'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung und Optimierung von Validierungs- und Governance-Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Aufsichtskonforme Dokumentation und Unterstützung im Aufsichtsdialog'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Thomas Müller',
        position: 'Head of Model Risk Management',
        quote: 'Die Expertise von ADVISORI hat es uns ermöglicht, unsere internen Risikomodelle nicht nur Basel III-konform anzupassen, sondern auch deren Präzision und Aussagekraft signifikant zu verbessern. Die implementierten Methoden und Prozesse bilden heute das Fundament für unser risikosensitives Kapitalmanagement und strategische Entscheidungen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Methodische Entwicklung und Anpassung',
          description: 'Wir unterstützen Sie bei der methodischen Weiterentwicklung und Anpassung Ihrer internen Risikomodelle an die Basel III-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Entwicklung und Kalibrierung von Risikoparametern (PD, LGD, EAD)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Anpassung an neue Floor-Konzepte und Parameterstandards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Integration von Downturn-Komponenten und Stresseffekten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung von Markt- und Kontrahentenrisikomodellen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Validierung und Governance',
          description: 'Wir etablieren robuste Prozesse zur kontinuierlichen Validierung und Governance Ihrer internen Risikomodelle.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Konzeption und Implementierung von Validierungsverfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Etablierung von Modell-Governance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung von Modellrisiko-Management-Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Aufsichtskonforme Dokumentation und Berichterstattung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(baselRisikomodelleData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Basel III Anpassung interner Risikomodelle page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
