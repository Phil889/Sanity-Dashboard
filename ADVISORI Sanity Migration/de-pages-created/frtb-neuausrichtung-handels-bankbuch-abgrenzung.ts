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
    console.log('Creating FRTB Neuausrichtung Handels-Bankbuch-Abgrenzung page...')

    const frtbNeuausrichtungData = {
      _type: 'servicePage',
      _id: 'frtb-neuausrichtung-handels-bankbuch-abgrenzung',
      title: 'FRTB Neuausrichtung der Handels- und Bankbuchabgrenzung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/frtb/frtb-readiness/frtb-neuausrichtung-handels-bankbuch-abgrenzung'
      },
      parent: {
        _type: 'reference',
        _ref: 'frtb-readiness'
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
        title: 'FRTB Neuausrichtung der Handels- und Bankbuchabgrenzung | ADVISORI',
        description: 'Optimieren Sie Ihre Handels- und Bankbuchabgrenzung gemäß FRTB-Anforderungen. Identifizieren Sie Optimierungspotenziale und entwickeln Sie eine konforme Neuausrichtungsstrategie.',
        keywords: 'FRTB Bankbuchabgrenzung, Handelsbuchabgrenzung, FRTB Boundary, Trading Book, Banking Book, FRTB Compliance, Fundamental Review of the Trading Book'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FRTB Neuausrichtung der Handels- und Bankbuchabgrenzung'
        },
        tagline: 'Strategische Neuausrichtung für regulatorische Compliance',
        heading: 'FRTB Neuausrichtung der Handels- und Bankbuchabgrenzung',
        description: 'Unsere spezialisierte Beratung unterstützt Sie bei der Neuausrichtung Ihrer Handels- und Bankbuchabgrenzung gemäß den FRTB-Anforderungen. Wir analysieren Ihre bestehende Struktur, identifizieren Optimierungspotenziale und entwickeln eine maßgeschneiderte Implementierungsstrategie für eine konforme und kapitaleffiziente Neuausrichtung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Konforme Abgrenzung von Handels- und Bankbuch nach FRTB-Kriterien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierung der Kapitalanforderungen durch strategische Positionierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Entwicklung robuster Prozesse für laufende Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Vermeidung unerwünschter regulatorischer Arbitrage'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'FRTB Neuausrichtung der Handels- und Bankbuchabgrenzung',
        description: 'Die FRTB-Regularien definieren strenge Kriterien für die Abgrenzung zwischen Handels- und Bankbuch, mit dem Ziel, regulatorische Arbitrage zu verhindern und eine konsistente Kapitalunterlegung zu gewährleisten. Unsere spezialisierte Beratung unterstützt Sie dabei, diese Anforderungen effizient umzusetzen und gleichzeitig Ihre Kapitalposition zu optimieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Detaillierte Analyse Ihrer aktuellen Handels- und Bankbuchstruktur'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Identifikation von Positionen, die unter FRTB neu klassifiziert werden müssen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Quantifizierung der Kapitalauswirkungen verschiedener Abgrenzungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung einer optimierten Handels- und Bankbuchstruktur'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Implementierung robuster Prozesse für die kontinuierliche Überwachung und Compliance'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine strategisch durchdachte Neuausrichtung der Handels- und Bankbuchabgrenzung kann Ihre Kapitalanforderungen unter FRTB um bis zu 20% optimieren, während eine unzureichende Vorbereitung zu erheblichen regulatorischen Aufschlägen führen kann.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in den FRTB-Abgrenzungskriterien und deren praktischer Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfangreiche Erfahrung in der Optimierung von Handels- und Bankbuchstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Proprietäre Methodik zur Quantifizierung von Kapitalauswirkungen verschiedener Abgrenzungsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kombination aus regulatorischem Know-how, Risikomanagement-Expertise und praktischer Implementierungserfahrung'
            }
          ]
        },
        additionalInfo: 'Die verschärften FRTB-Kriterien für die Handels- und Bankbuchabgrenzung erfordern eine grundlegende Neubewertung Ihrer Portfoliostruktur. Eine strategisch durchdachte Neuausrichtung kann nicht nur regulatorische Compliance sicherstellen, sondern auch erhebliche Kapitalvorteile bieten.',
        serviceDescription: 'Unsere Beratungsleistung zur FRTB-konformen Neuausrichtung der Handels- und Bankbuchabgrenzung umfasst eine detaillierte Analyse Ihrer aktuellen Struktur, die Identifikation von Optimierungspotenzialen und die Entwicklung einer maßgeschneiderten Implementierungsstrategie. Wir unterstützen Sie bei der praktischen Umsetzung und stellen sicher, dass Ihre neue Abgrenzung sowohl regulatorisch konform als auch kapitaleffizient ist.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Gap-Analyse der aktuellen Handels- und Bankbuchabgrenzung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung einer optimierten Abgrenzungsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Quantifizierung der Kapitalauswirkungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Implementation von Überwachungs- und Governance-Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulung und Knowledge Transfer für nachhaltige Compliance'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und bewährten Ansatz für die Neuausrichtung Ihrer Handels- und Bankbuchabgrenzung gemäß FRTB-Anforderungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Bestandsaufnahme und Analyse der aktuellen Handels- und Bankbuchstruktur'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Detaillierte Bewertung aller Positionen gemäß FRTB-Abgrenzungskriterien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung alternativer Abgrenzungsszenarien und Quantifizierung der Kapitalauswirkungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Erarbeitung einer optimalen Zielstruktur unter Berücksichtigung regulatorischer und geschäftlicher Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Implementierung der neuen Abgrenzung und Einrichtung robuster Überwachungsprozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Markus Weber',
        position: 'Head of Regulatory Affairs',
        quote: 'Die Unterstützung von ADVISORI bei der Neuausrichtung unserer Handels- und Bankbuchabgrenzung war entscheidend für unsere erfolgreiche FRTB-Implementierung. Die fundierte Analyse und die strategische Neupositionierung ermöglichten es uns, nicht nur regulatorische Compliance zu erreichen, sondern auch unsere Kapitalanforderungen erheblich zu optimieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'FRTB-konforme Abgrenzungsanalyse und -strategie',
          description: 'Wir analysieren Ihre bestehende Handels- und Bankbuchstruktur gemäß den FRTB-Kriterien, identifizieren Positionen, die neu klassifiziert werden müssen, und entwickeln eine optimale Abgrenzungsstrategie, die sowohl regulatorische Compliance als auch Kapitaleffizienz sicherstellt.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse der aktuellen Portfoliostruktur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung aller Positionen gemäß FRTB-Kriterien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation von Positionen mit Reklassifizierungsbedarf'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung einer optimalen Abgrenzungsstrategie'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Implementierung und Prozessdesign für die Handels-Bankbuch-Abgrenzung',
          description: 'Wir unterstützen Sie bei der praktischen Umsetzung der neuen Abgrenzungsstrategie und etablieren robuste Prozesse für die kontinuierliche Überwachung und Compliance, um sicherzustellen, dass Ihre Handels- und Bankbuchstruktur nachhaltig FRTB-konform bleibt.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung eines detaillierten Implementierungsplans'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Design robuster Governance- und Überwachungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Implementierung von Kontrollmechanismen gegen unbeabsichtigte Reklassifizierungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Schulung und Knowledge Transfer für nachhaltige Compliance'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(frtbNeuausrichtungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FRTB Neuausrichtung Handels-Bankbuch-Abgrenzung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
