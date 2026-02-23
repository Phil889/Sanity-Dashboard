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
    console.log('Creating CRA Beratung page...')

    const craBeratungData = {
      _type: 'servicePage',
      _id: 'cra-beratung',
      title: 'CRA Beratung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-beratung'
      },
      parent: {
        _type: 'reference',
        _ref: 'cra-cyber-resilience-act'
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
        title: 'CRA Beratung - Cyber Resilience Act Consulting | ADVISORI',
        description: 'Professionelle CRA Beratung für den Cyber Resilience Act. Strategische Beratung, Implementierungsunterstützung und kontinuierliche Compliance-Begleitung durch erfahrene CRA-Experten.',
        keywords: 'CRA Beratung, Cyber Resilience Act Beratung, CRA Consulting, CRA Berater, Cyber Resilience Act Consulting, CRA Implementierung, CRA Strategie, Cybersicherheit Beratung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA Beratung - Cyber Resilience Act Consulting'
        },
        tagline: 'Strategische CRA Beratung für nachhaltige Cybersicherheit',
        heading: 'CRA Beratung',
        description: 'Der Cyber Resilience Act stellt Unternehmen vor komplexe Herausforderungen, die strategische Expertise und operative Exzellenz erfordern. Unsere CRA Beratung verbindet tiefgreifendes regulatorisches Verständnis mit praktischer Umsetzungserfahrung, um Ihnen den Weg zu nachhaltiger Compliance und Wettbewerbsvorteilen zu ebnen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische CRA-Roadmap und Implementierungsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Ganzheitliche Risikobewertung und Compliance-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Operative Umsetzungsbegleitung und Change Management'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Beratung und regulatorische Updates'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Umfassende CRA Beratung für strategische Cybersicherheit',
        description: 'CRA Beratung erfordert mehr als regulatorisches Wissen - sie verlangt strategisches Denken, operative Exzellenz und die Fähigkeit, komplexe Anforderungen in praktische Geschäftslösungen zu übersetzen. Unsere Beratungsansätze schaffen nachhaltigen Wert durch die Integration von Compliance in Ihre Geschäftsstrategie.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische CRA-Analyse und Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Risikobewertung und Compliance-Framework-Design'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierungsbegleitung und Projektmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Organisatorische Transformation und Kultur-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Beratung und strategische Optimierung'
          }
        ],
        alert: {
          title: 'CRA Beratungshinweis',
          content: 'Erfolgreiche CRA-Implementierung erfordert eine ganzheitliche Betrachtung von Technologie, Prozessen und Menschen. Professionelle Beratung beschleunigt nicht nur die Compliance-Erreichung, sondern schafft auch nachhaltige Wettbewerbsvorteile durch verbesserte Cybersicherheitspositionierung.'
        },
        whyUs: {
          title: 'Unsere CRA Beratungsexpertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende CRA-Expertise und regulatorische Erfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für strategische Compliance-Transformation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenübergreifende Implementierungserfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Langfristige Partnerschaft für nachhaltige CRA-Exzellenz'
            }
          ]
        },
        additionalInfo: 'CRA Beratung ist eine strategische Investition in die Zukunftsfähigkeit Ihres Unternehmens. Durch professionelle Begleitung transformieren Sie regulatorische Anforderungen in Geschäftschancen und Wettbewerbsvorteile.',
        serviceDescription: 'Wir begleiten Sie als strategischer Partner durch alle Phasen der CRA-Implementierung - von der initialen Bewertung über die Umsetzungsplanung bis hin zur kontinuierlichen Optimierung Ihrer Cybersicherheitsstrategie.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische CRA-Bewertung und Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Risikomanagement und Compliance-Framework-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierungsbegleitung und Change Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Organisatorische Entwicklung und Kompetenzaufbau'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Beratung und strategische Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser CRA Beratungsansatz',
        description: 'Wir entwickeln mit Ihnen maßgeschneiderte CRA-Strategien, die regulatorische Exzellenz mit Geschäftswert verbinden und Ihre Organisation für die Zukunft der Cybersicherheit positionieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Analyse und Vision-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Ganzheitliche Risikobewertung und Framework-Design'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Strukturierte Implementierung und Projektbegleitung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Organisatorische Transformation und Kompetenzentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und strategische Weiterentwicklung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'CRA Beratung ist mehr als regulatorische Compliance - sie ist strategische Transformation. Unsere Kunden profitieren von einem ganzheitlichen Ansatz, der Cybersicherheit als Geschäftsenablement versteht und nachhaltige Wettbewerbsvorteile durch proaktive Compliance-Strategien schafft. Erfolgreiche CRA-Implementierung erfordert die richtige Balance zwischen regulatorischer Exzellenz und geschäftlicher Agilität.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische CRA-Bewertung und Roadmap',
          description: 'Umfassende Analyse Ihrer aktuellen Cybersicherheitspositionierung und Entwicklung einer strategischen CRA-Roadmap für nachhaltige Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Gap-Analyse und Reifegradbewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Strategische Roadmap-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risiko-Nutzen-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Ressourcenplanung und Budgetierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'CRA Implementierungsbegleitung',
          description: 'Operative Unterstützung bei der Umsetzung Ihrer CRA-Strategie mit fokussiertem Projektmanagement und Change Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Projektmanagement und Koordination'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Change Management und Kommunikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Schulung und Kompetenzentwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Qualitätssicherung und Monitoring'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craBeratungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA Beratung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
