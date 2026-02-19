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
    console.log('Creating CRA Certification page...')

    const craCertificationData = {
      _type: 'servicePage',
      _id: 'cra-certification',
      title: 'CRA Certification',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-certification'
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
        title: 'CRA Certification Services | ADVISORI',
        description: 'Professionelle CRA-Zertifizierungsberatung für den Cyber Resilience Act. Wir begleiten Sie durch den gesamten Zertifizierungsprozess mit strategischer Planung, technischer Validierung und nachhaltiger Compliance-Sicherung.',
        keywords: 'CRA Zertifizierung, Cyber Resilience Act Zertifizierung, CRA Certification, Zertifizierungsberatung, CRA Konformitätsbewertung, Produktzertifizierung, CE-Kennzeichnung CRA'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA Certification Services'
        },
        tagline: 'Strategische CRA-Zertifizierungsberatung',
        heading: 'CRA Certification',
        description: 'Die CRA-Zertifizierung ist ein komplexer strategischer Prozess, der technische Exzellenz mit regulatorischer Compliance verbindet. Wir entwickeln mit Ihnen maßgeschneiderte Zertifizierungsstrategien, die nicht nur regulatorische Anforderungen erfüllen, sondern auch nachhaltigen Geschäftswert schaffen und Marktvorteile sichern.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische Zertifizierungsplanung und Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Umfassende technische Bewertung und Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Professionelle Dokumentation und Nachweisführung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Zertifizierungserhaltung und Überwachung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische CRA-Zertifizierungsberatung',
        description: 'CRA-Zertifizierung erfordert eine ganzheitliche Herangehensweise, die technische Kompetenz, regulatorisches Verständnis und strategische Geschäftsplanung vereint. Erfolgreiche Zertifizierungsprojekte schaffen nicht nur Compliance, sondern etablieren auch Wettbewerbsvorteile und Vertrauen im Markt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Zertifizierungsplanung und Pathway-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Technische Bewertung und Konformitätsvalidierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Dokumentationsmanagement und Nachweisführung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Zertifizierungsstellen-Management und Koordination'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Zertifizierungserhaltung'
          }
        ],
        alert: {
          title: 'Zertifizierungsstrategiehinweis',
          content: 'Erfolgreiche CRA-Zertifizierung erfordert frühzeitige strategische Planung und kontinuierliche technische Exzellenz. Die Integration von Zertifizierungsanforderungen in Produktentwicklung und Geschäftsprozesse ist entscheidend für nachhaltigen Erfolg.'
        },
        whyUs: {
          title: 'Unsere CRA-Zertifizierungsexpertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung in strategischer Zertifizierungsberatung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für effiziente Zertifizierungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Tiefgreifende technische und regulatorische Expertise'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Langfristige Partnerschaft für nachhaltige Zertifizierungsexzellenz'
            }
          ]
        },
        additionalInfo: 'CRA-Zertifizierung ist mehr als regulatorische Pflicht - sie ist eine strategische Investition in Produktqualität, Marktvertrauen und langfristige Wettbewerbsfähigkeit.',
        serviceDescription: 'Wir begleiten Sie durch den gesamten CRA-Zertifizierungsprozess mit strategischer Planung, technischer Expertise und operativer Exzellenz, um nicht nur Compliance zu erreichen, sondern auch nachhaltigen Geschäftswert zu schaffen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Zertifizierungsplanung und Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Technische Bewertung und Konformitätsvalidierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Dokumentationsmanagement und Qualitätssicherung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Zertifizierungsstellen-Koordination und Projektmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Überwachung und Zertifizierungserhaltung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser CRA-Zertifizierungsansatz',
        description: 'Wir entwickeln mit Ihnen maßgeschneiderte Zertifizierungsstrategien, die technische Exzellenz mit geschäftlicher Effizienz verbinden und nachhaltige Compliance-Vorteile schaffen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Zertifizierungsplanung und Pathway-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Umfassende technische Bewertung und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Systematische Dokumentation und Nachweisführung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Professionelle Zertifizierungsstellen-Koordination'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'CRA-Zertifizierung ist ein strategischer Transformationsprozess, der weit über die reine Compliance hinausgeht. Unsere Kunden profitieren von Zertifizierungsstrategien, die nicht nur regulatorische Sicherheit schaffen, sondern auch Produktqualität steigern, Marktvertrauen aufbauen und nachhaltige Wettbewerbsvorteile etablieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische Zertifizierungsplanung',
          description: 'Entwicklung umfassender CRA-Zertifizierungsstrategien, die technische Anforderungen mit Geschäftszielen optimal verbinden.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Zertifizierungspathway-Analyse und Roadmap-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Risikobewertung und Mitigation-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Ressourcenplanung und Budgetierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Stakeholder-Management und Kommunikation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Technische Bewertung und Validierung',
          description: 'Umfassende technische Analyse und Validierung zur Sicherstellung der CRA-Konformität und Zertifizierungsbereitschaft.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Konformitätsbewertung und Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Technische Dokumentation und Nachweisführung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Testplanung und Validierungsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Qualitätssicherung und Prozessoptimierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craCertificationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA Certification page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
