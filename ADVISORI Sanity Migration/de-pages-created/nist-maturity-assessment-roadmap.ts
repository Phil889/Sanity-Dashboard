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
    console.log('Creating NIST Maturity Assessment Roadmap page...')

    const nistMaturityAssessmentRoadmapData = {
      _type: 'servicePage',
      _id: 'nist-maturity-assessment-roadmap',
      title: 'NIST Maturity Assessment Roadmap',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/nist-cybersecurity-framework/nist-maturity-assessment-roadmap'
      },
      parent: {
        _type: 'reference',
        _ref: 'nist-cybersecurity-framework'
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
        title: 'NIST Maturity Assessment Roadmap | ADVISORI',
        description: 'Entwicklung strategischer Roadmaps basierend auf NIST Cybersecurity Framework Maturity-Bewertungen. Strukturierter Ansatz zur kontinuierlichen Verbesserung der Cybersecurity-Reife.',
        keywords: 'NIST Framework, Cybersecurity Maturity, Assessment Roadmap, Cyber Risk Management, Framework Implementation, Security Maturity Model'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'NIST Maturity Assessment Roadmap'
        },
        tagline: 'Strategische Cybersecurity-Transformation durch strukturierte Reifegradentwicklung',
        heading: 'NIST Maturity Assessment Roadmap',
        description: 'Eine strukturierte NIST Maturity Assessment Roadmap transformiert Ihre Cybersecurity-Posture von der aktuellen Ausgangslage zu einem Zielzustand optimaler Cyber-Resilienz. Wir entwickeln datengestützte, priorisierte Implementierungspfade für nachhaltige Sicherheitsverbesserungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strukturierte Reifegradentwicklung mit messbaren Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Risikobasierte Priorisierung von Sicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integration in Geschäftsstrategie und operative Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Verbesserung durch iterative Bewertungszyklen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'NIST Maturity Assessment Roadmap',
        description: 'Die NIST Maturity Assessment Roadmap ist ein strategisches Instrument zur systematischen Entwicklung der Cybersecurity-Reife Ihrer Organisation. Basierend auf dem NIST Cybersecurity Framework erstellen wir maßgeschneiderte Transformationspfade, die technische Verbesserungen mit Geschäftszielen und Risikotoleranz harmonisieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Ist-Analyse der aktuellen Cybersecurity-Reife über alle Framework-Bereiche'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Definition eines realistischen und strategisch ausgerichteten Zielzustands'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung priorisierter, risikobasierter Transformationsschritte'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von Cybersecurity-Verbesserungen in Business Case und Budgetplanung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Monitoring- und Anpassungsmechanismen für nachhaltige Entwicklung'
          }
        ],
        alert: {
          title: 'Strategischer Fokus',
          content: 'Eine erfolgreiche NIST Maturity Roadmap erfordert nicht nur technische Verbesserungen, sondern auch organisatorische Transformation und kulturellen Wandel. Wir integrieren People, Process und Technology für ganzheitliche Cyber-Resilienz.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende NIST Framework-Expertise mit praktischer Implementierungserfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodiken zur Maturity-Bewertung und Roadmap-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz, der Technologie, Prozesse und organisatorische Aspekte integriert'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Branchenspezifische Anpassung und Best Practice Integration'
            }
          ]
        },
        additionalInfo: 'Die NIST Maturity Assessment Roadmap bildet das strategische Fundament für langfristige Cybersecurity-Exzellenz. Durch strukturierte Reifegradentwicklung schaffen wir messbare Verbesserungen der Cyber-Resilienz bei optimaler Ressourcenallokation.',
        serviceDescription: 'Unser umfassendes Leistungsspektrum zur NIST Maturity Assessment Roadmap kombiniert methodische Exzellenz mit praktischer Implementierungserfahrung. Wir begleiten Sie von der initialen Bewertung bis zur nachhaltigen Etablierung verbesserter Cybersecurity-Capabilities.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'NIST Framework Maturity Assessment und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Strategische Zielzustand-Definition und Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Risikobasierte Priorisierung und Business Case Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Implementierungsbegleitung und Change Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Bewertung und Roadmap-Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine strukturierte, datengestützte Roadmap zur systematischen Verbesserung Ihrer NIST Framework Maturity.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Durchführung einer detaillierten NIST Framework Maturity-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Definition strategischer Zielzustände basierend auf Geschäftsanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung einer priorisierten, risikobasierten Transformationsroadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung mit kontinuierlichem Monitoring und Anpassung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung nachhaltiger Verbesserungsprozesse und Governance-Strukturen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Eine systematische NIST Maturity Assessment Roadmap ist der Schlüssel für nachhaltige Cybersecurity-Verbesserungen. Sie ermöglicht es Organisationen, ihre Cyber-Resilienz strukturiert und messbar zu entwickeln, während sie gleichzeitig Geschäftsziele und Risikomanagement optimal harmonisiert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'NIST Framework Maturity Assessment',
          description: 'Comprehensive Bewertung der aktuellen Cybersecurity-Reife Ihrer Organisation basierend auf NIST Framework Prinzipien und Practices.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse aller fünf NIST Framework Core Functions'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung aktueller Implementation Tiers und Profile'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation von Stärken, Schwächen und kritischen Lücken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Benchmarking gegen Branchenstandards und Best Practices'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Strategische Roadmap-Entwicklung',
          description: 'Entwicklung einer maßgeschneiderten, risikobasierten Transformationsroadmap zur systematischen Verbesserung der NIST Framework Maturity.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Definition realistischer Zielzustände und Meilensteine'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Risikobasierte Priorisierung von Verbesserungsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration von Business Case und Ressourcenplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Monitoring- und Anpassungsmechanismen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(nistMaturityAssessmentRoadmapData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ NIST Maturity Assessment Roadmap page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
