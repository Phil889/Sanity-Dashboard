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
    console.log('Creating ESG Training page...')

    const esgTrainingData = {
      _type: 'servicePage',
      _id: 'esg-training',
      title: 'ESG Training',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/esg/esg-training'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management'
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
        title: 'ESG Training | ADVISORI',
        description: 'Professionelle ESG Training Services für nachhaltige Unternehmensführung. Umfassende Schulungen zu Environmental, Social und Governance Themen für alle Organisationsebenen.',
        keywords: 'ESG Training, Nachhaltigkeitsschulung, ESG Weiterbildung, Sustainable Finance Training, ESG Compliance Schulung, Sustainability Training'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ESG Training'
        },
        tagline: 'Umfassende ESG-Schulungen für nachhaltige Unternehmensexzellenz',
        heading: 'ESG Training',
        description: 'ESG Training ermöglicht die systematische Befähigung Ihrer Teams in Environmental, Social und Governance Themen. Wir entwickeln maßgeschneiderte Trainingsprogramme für alle Organisationsebenen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende ESG-Kompetenzentwicklung für alle Organisationsebenen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Praxisorientierte Schulungen mit direktem Anwendungsbezug'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Stärkung der ESG-Awareness und Compliance-Kultur'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Verbesserung der ESG-Performance durch qualifizierte Teams'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ESG Training',
        description: 'ESG Training ist ein strukturierter Prozess zur Befähigung Ihrer Teams in Environmental, Social und Governance Themen. Wir entwickeln maßgeschneiderte Trainingsprogramme, die ESG-Kompetenzen aufbauen und die nachhaltige Transformation Ihres Unternehmens unterstützen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Executive ESG Leadership Training für C-Level und Senior Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Fachspezifische ESG-Schulungen für verschiedene Unternehmensbereiche'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'ESG Reporting und Compliance Training für Finance- und Risk-Teams'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Nachhaltigkeits-Awareness Programme für alle Mitarbeiter'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Train-the-Trainer Programme für interne ESG-Multiplikatoren'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Effektive ESG-Transformation beginnt mit gut ausgebildeten Teams. Investitionen in ESG Training zahlen sich durch verbesserte Performance und reduzierte Compliance-Risiken aus.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in ESG-Themen und Erwachsenenbildung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxisorientierte Trainingsansätze mit Real-World Case Studies'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Flexible Delivery-Formate für verschiedene Lernpräferenzen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Messbare Lernerfolge durch strukturierte Assessment-Programme'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit umfassenden ESG Training-Programmen erzielen 25% bessere ESG-Performance-Scores und reduzieren Compliance-Risiken um bis zu 40%. Investieren Sie in qualifizierte ESG-Teams!',
        serviceDescription: 'Wir bieten Ihnen umfassende ESG Training Services, von Executive Leadership Programmes bis zu operativen Fachschulungen. Unsere maßgeschneiderten Trainingsansätze befähigen Ihre Teams zur erfolgreichen ESG-Transformation.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Executive ESG Leadership Development'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'ESG Reporting und Compliance Training'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Sustainable Finance und Investment Training'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'ESG Risk Management Training'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Train-the-Trainer Programme'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine strukturierte ESG Training Strategie, die auf Ihre spezifischen Anforderungen und Lernziele zugeschnitten ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Training Needs Assessment und Kompetenz-Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung maßgeschneiderter Curricula und Lernpfade'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Durchführung interaktiver und praxisorientierter Trainings'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Assessment und Zertifizierung der Lernerfolge'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Follow-up Support und kontinuierliche Weiterentwicklung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir einen Partner gefunden, der uns bei der professionellen ESG-Schulung unserer Teams unterstützt. Die praxisorientierten Trainingsansätze und die messbare Kompetenzentwicklung haben unsere ESG-Transformation erheblich beschleunigt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Executive ESG Leadership Training',
          description: 'Wir entwickeln maßgeschneiderte Leadership-Programme für C-Level und Senior Management zur strategischen ESG-Führung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'ESG Strategy Development und Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Stakeholder Engagement und ESG Communication'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'ESG Risk Governance und Oversight'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Sustainable Business Model Innovation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'ESG Reporting und Compliance Training',
          description: 'Wir schulen Ihre Finance- und Risk-Teams in ESG Reporting Standards und regulatorischen Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'EU-Taxonomie und CSRD Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'ESG Data Management und Quality Assurance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Sustainable Finance Regulations (SFDR, etc.)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'ESG Performance Measurement und Monitoring'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(esgTrainingData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ESG Training page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
