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
    console.log('Creating VS-NFD Prozessintegration Schulungen page...')

    const vsNfdProzessintegrationSchulungenData = {
      _type: 'servicePage',
      _id: 'vs-nfd-prozessintegration-schulungen',
      title: 'VS-NFD Prozessintegration Schulungen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/vs-nfd/vs-nfd-implementation/vs-nfd-prozessintegration-schulungen'
      },
      parent: {
        _type: 'reference',
        _ref: 'vs-nfd-implementation'
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
        title: 'VS-NFD Prozessintegration Schulungen | ADVISORI',
        description: 'Spezialisierte Schulungen für VS-NFD Prozessintegration. Expertenwissen zu Sammeldepots, Nominee-Konten und regulatorischen Workflows für nachhaltigen Compliance-Erfolg.',
        keywords: 'VS-NFD Schulungen, Prozessintegration Training, BaFin Compliance Schulung, Sammeldepot Schulung, Nominee Konto Training, Regulatory Training'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'VS-NFD Prozessintegration Schulungen'
        },
        tagline: 'Expertenwissen für nachhaltigen VS-NFD Erfolg',
        heading: 'VS-NFD Prozessintegration Schulungen',
        description: 'Comprehensive Schulungsprogramme für die erfolgreiche Integration von VS-NFD Prozessen. Wir vermitteln praxisnahe Expertise zu Sammeldepot-Management, Nominee-Konto-Verwaltung und regulatorischen Workflows für nachhaltigen Compliance-Erfolg.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Praxisorientierte VS-NFD Prozessschulung mit Fallstudien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Expertenwissen zu BaFin-Anforderungen und Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Hands-on Training für operative Umsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachhaltige Wissensvermittlung und Change Management'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'VS-NFD Prozessintegration Schulungen',
        description: 'Erfolgreiche VS-NFD Implementierung erfordert nicht nur technische Systeme, sondern auch qualifizierte Mitarbeiter. Unsere comprehensive Schulungsprogramme vermitteln das notwendige Fachwissen für die operative Umsetzung der VS-NFD Anforderungen in Ihrer Organisation.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Grundlagen der VS-NFD Verordnung und BaFin-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Sammeldepot-Management und Nominee-Konto-Verwaltung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Prozessintegration und Workflow-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Risk Management und Compliance-Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Change Management und organisatorische Transformation'
          }
        ],
        alert: {
          title: 'Nachhaltiger Wissenstransfer',
          content: 'Unsere Schulungen sind darauf ausgelegt, nachhaltiges Verständnis zu schaffen. Durch praxisnahe Fallstudien, interaktive Workshops und kontinuierliche Betreuung stellen wir sicher, dass Ihre Teams VS-NFD Prozesse erfolgreich umsetzen können.'
        },
        whyUs: {
          title: 'Unsere Schulungs-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Praktische Erfahrung aus zahlreichen VS-NFD Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Didaktische Kompetenz und erwachsenengerechte Lernmethoden'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Individuelle Schulungskonzepte nach Ihren spezifischen Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Betreuung und Follow-up-Programme'
            }
          ]
        },
        additionalInfo: 'Investitionen in qualifizierte Mitarbeiterschulungen reduzieren Implementierungsrisiken um bis zu 80% und verkürzen die Time-to-Compliance erheblich. Gut geschulte Teams sind der Schlüssel für nachhaltige VS-NFD Compliance.',
        serviceDescription: 'Wir entwickeln maßgeschneiderte Schulungsprogramme, die Ihre spezifischen VS-NFD Anforderungen adressieren. Von Grundlagenschulungen bis zu Expertenzertifizierungen bieten wir alle notwendigen Formate für erfolgreiche Prozessintegration.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'VS-NFD Grundlagenschulungen und Regulatory Updates'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Prozess-spezifische Workshops und Hands-on Training'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Train-the-Trainer Programme und Multiplikatorenschulungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Change Management und Organisationsentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Continuous Learning und Performance Support'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser didaktischer Ansatz für nachhaltige Kompetenzentwicklung',
        description: 'Wir verwenden moderne Lernmethoden und erwachsenengerechte Didaktik, um nachhaltiges Verständnis und praktische Anwendungskompetenz für VS-NFD Prozesse zu entwickeln.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Kompetenzanalyse und individuelle Lernbedarfsermittlung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Blended Learning mit Präsenz-, Online- und Self-Paced Elementen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Praxisnahe Fallstudien und Simulation realer VS-NFD Szenarien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche Lernerfolgskontrolle und Feedback'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Post-Training Support und Follow-up Coaching'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die VS-NFD Schulungen von ADVISORI haben unser Team perfekt auf die neue Verordnung vorbereitet. Durch die praxisnahen Inhalte und excellente Didaktik konnten wir die Prozesse nahtlos integrieren. Die nachhaltige Wissensvermittlung war entscheidend für unseren Compliance-Erfolg.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'VS-NFD Grundlagen- und Expertenschulungen',
          description: 'Comprehensive Schulungsprogramme von VS-NFD Basics bis zu Expertenzertifizierungen. Praxisorientierte Wissensvermittlung zu regulatorischen Anforderungen, Prozessdesign und operativer Umsetzung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'VS-NFD Fundamentals: Verordnung, Scope und regulatorische Landschaft'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Advanced Workshops: Sammeldepot-Strukturen und Nominee-Arrangements'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Expert Masterclasses: Complex Compliance Scenarios und Edge Cases'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Zertifizierungsprogramme mit ADVISORI Competency Assessment'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Prozessintegrations-Workshops und Change Management',
          description: 'Praktische Workshops für die Integration von VS-NFD Prozessen in bestehende Workflows. Change Management Unterstützung für organisatorische Transformation und nachhaltige Implementierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Process Mapping Workshops und Workflow-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Change Management Training und Stakeholder Engagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Train-the-Trainer Programme und Multiplikatorenentwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Continuous Learning Plattformen und Performance Support Systems'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(vsNfdProzessintegrationSchulungenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ VS-NFD Prozessintegration Schulungen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
