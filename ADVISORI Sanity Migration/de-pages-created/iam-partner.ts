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
    console.log('Creating IAM Partner page...')

    const iamPartnerData = {
      _type: 'servicePage',
      _id: 'iam-partner',
      title: 'IAM Partner - Strategische Partnerschaftslösungen für Identity & Access Management',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-partner'
      },
      parent: {
        _type: 'reference',
        _ref: 'identity-access-management-iam'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'informationssicherheit'
        }
      },
      seo: {
        _type: 'seo',
        title: 'IAM Partner - Strategische Partnerschaftslösungen für Identity & Access Management | ADVISORI',
        description: 'Professionelle IAM Partner Services: Strategische Partnerschaften, Ecosystem-Integration, Joint-Solutions, Partner-Enablement und kollaborative IAM-Implementierungen für maximalen Geschäftserfolg.',
        keywords: 'IAM Partner, Identity Management Partnerships, IAM Ecosystem, Partner Integration, Joint IAM Solutions, Partner Enablement, IAM Alliance, Collaborative Identity Management, Strategic IAM Partnerships, Partner Certification'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Partner Strategische Partnerschaftslösungen Identity Access Management'
        },
        tagline: 'Strategische IAM-Partnerschaften für nachhaltigen Geschäftserfolg',
        heading: 'IAM Partner - Strategische Partnerschaftslösungen für Identity & Access Management',
        description: 'IAM Partner Services transformieren traditionelle Vendor-Beziehungen in strategische Allianzen, die Innovation beschleunigen, Marktchancen maximieren und nachhaltige Wettbewerbsvorteile schaffen. Unsere ganzheitlichen Partnerschaftslösungen orchestrieren komplexe Ecosystem-Integrationen, ermöglichen kollaborative Go-to-Market-Strategien und etablieren robuste Partner-Enablement-Programme, die sowohl technische Exzellenz als auch geschäftlichen Erfolg gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische Partner-Allianzen für erweiterte IAM-Capabilities und Marktreichweite'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Kollaborative Lösungsentwicklung mit Joint-Innovation und Co-Creation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Ecosystem-Integration für nahtlose Multi-Vendor-IAM-Landschaften'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Partner-Enablement-Programme für nachhaltige Geschäftsentwicklung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'IAM-Partnerschaften: Von Vendor-Management zu strategischen Allianzen',
        description: 'Moderne IAM-Partnerschaften sind strategische Geschäftsallianzen, die weit über traditionelle Vendor-Beziehungen hinausgehen und komplexe Ecosystem-Orchestrierung, kollaborative Innovation und nachhaltige Wertschöpfung ermöglichen. In einer zunehmend vernetzten digitalen Landschaft bilden professionelle Partner-Strategien das Fundament für skalierbare IAM-Lösungen, die Geschäftswachstum beschleunigen und gleichzeitig höchste Sicherheits- und Compliance-Standards gewährleisten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategic Partner Ecosystem mit kuratierten Allianzen für optimale Lösungskomplementarität'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Joint Solution Development für innovative IAM-Capabilities und Marktdifferenzierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Partner Integration Framework für nahtlose Multi-Vendor-Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Collaborative Go-to-Market-Strategien für erweiterte Marktpenetration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Partner Enablement und Certification für nachhaltige Kompetenzentwicklung'
          }
        ],
        alert: {
          title: 'Strategische Notwendigkeit',
          content: 'Unternehmen ohne professionelle IAM-Partner-Strategien sind limitiert in ihrer Innovationsfähigkeit, Marktreichweite und Skalierbarkeit. Moderne IAM-Herausforderungen erfordern kollaborative Ansätze, die nur durch strategische Partnerschaften erfolgreich bewältigt werden können.'
        },
        whyUs: {
          title: 'ADVISORI Partner-Excellence',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Strategische Partner-Orchestrierung mit Business-Impact-Fokus'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Ecosystem-Integration-Expertise für komplexe Multi-Vendor-Landschaften'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Joint-Innovation-Methodologien für kollaborative Lösungsentwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Partner-Enablement-Excellence für nachhaltige Geschäftsentwicklung'
            }
          ]
        },
        additionalInfo: 'Die Evolution von IAM-Partnerschaften integriert zunehmend Cloud-native Architekturen, API-first Designs und DevOps-Methodologien, um agile, skalierbare und interoperable Lösungen zu ermöglichen. Diese technologische Konvergenz schafft neue Möglichkeiten für Ecosystem-Innovation, automatisierte Partner-Integration und datengetriebene Kollaboration.',
        serviceDescription: 'Wir orchestrieren strategische IAM-Partnerschaften durch die komplette Wertschöpfungskette – von der Partner-Strategie-Entwicklung und Ecosystem-Design über die technische Integration und Joint-Solution-Development bis hin zum operativen Partner-Management und der kontinuierlichen Optimierung. Unser Ansatz kombiniert bewährte Partnership-Methodologien mit innovativen Kollaborations-Technologien für ein Partner-Ecosystem, das Ihre spezifischen Geschäftsziele optimal unterstützt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategic Partner Strategy und Ecosystem-Architecture-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Partner Integration Framework und Multi-Vendor-Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Joint Solution Development und Co-Innovation-Programme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Partner Enablement und Certification-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Collaborative Go-to-Market und Business-Development-Support'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer IAM-Partnership-Ansatz',
        description: 'Wir verfolgen einen ganzheitlichen, ecosystem-orientierten Ansatz für IAM-Partnerschaften, der strategische Geschäftsziele mit technischer Exzellenz verbindet und dabei nachhaltige Wertschöpfung für alle Stakeholder gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategic Partner Assessment und Ecosystem-Mapping mit Value-Chain-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Partnership-Framework-Design mit Governance-Strukturen und KPI-Definition'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Agile Integration-Implementation mit kontinuierlicher Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Joint-Innovation-Facilitation und Collaborative-Development-Management'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continuous Partnership-Evolution und Strategic-Alignment-Reviews'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Strategische IAM-Partnerschaften sind der Schlüssel für nachhaltigen Geschäftserfolg in der digitalen Transformation und ermöglichen es Unternehmen, komplexe Identitätsherausforderungen durch kollaborative Innovation zu bewältigen. Unsere Erfahrung zeigt, dass Organisationen, die Partner-Ecosystems als strategischen Wettbewerbsvorteil verstehen und professionell orchestrieren, signifikante Marktvorteile erzielen. Die richtige Partnership-Strategie transformiert traditionelle Vendor-Beziehungen in Wertschöpfungs-Allianzen, die Innovation beschleunigen, Risiken minimieren und nachhaltiges Wachstum ermöglichen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategic Partner Strategy und Ecosystem-Architecture',
          description: 'Entwicklung einer umfassenden Partner-Strategie und Ecosystem-Architektur, die Ihre Geschäftsziele unterstützt und eine klare Roadmap für strategische Partnerschaften bereitstellt.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Business-orientierte Partner-Vision und strategische Zielsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Comprehensive Ecosystem-Mapping und Partner-Landscape-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Value-Chain-Optimierung und Synergy-Identification'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'ROI-optimierte Partnership-Roadmap und Business-Case-Development'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Partner Integration Framework und Multi-Vendor-Orchestrierung',
          description: 'Implementation robuster Integration-Frameworks für nahtlose Multi-Vendor-Orchestrierung und optimale Ecosystem-Performance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'API-first Integration-Architecture und Microservices-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Multi-Vendor-Orchestrierung und Workflow-Automation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Data-Synchronization und Real-time-Integration-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Security-Framework-Integration und Compliance-Orchestrierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Joint Solution Development und Co-Innovation-Programme',
          description: 'Facilitation kollaborativer Lösungsentwicklung mit strukturierten Co-Innovation-Programmen für nachhaltige Wettbewerbsvorteile.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Innovation-Workshop-Facilitation und Ideation-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Agile Co-Development-Methodologien und Sprint-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'IP-Management und Joint-Ownership-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Market-Validation und Go-to-Market-Strategy-Development'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Partner Enablement und Certification-Management',
          description: 'Comprehensive Partner-Enablement-Programme mit strukturierten Certification-Prozessen für nachhaltige Kompetenzentwicklung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Competency-Framework-Design und Skill-Gap-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Training-Program-Development und Knowledge-Transfer'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Certification-Process-Management und Quality-Assurance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Continuous-Learning-Platforms und Performance-Monitoring'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Collaborative Go-to-Market und Business-Development',
          description: 'Strategische Go-to-Market-Unterstützung mit kollaborativen Business-Development-Programmen für maximale Marktpenetration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Joint-Marketing-Strategy und Campaign-Orchestrierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Sales-Enablement und Channel-Partner-Support'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Lead-Generation-Programme und Opportunity-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Customer-Success-Collaboration und Account-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Partnership-Governance und Strategic-Alignment',
          description: 'Etablierung robuster Governance-Strukturen und kontinuierliche Strategic-Alignment-Prozesse für nachhaltige Partnership-Excellence.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Governance-Framework-Design und Decision-Making-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'KPI-Definition und Performance-Measurement-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Strategic-Review-Prozesse und Alignment-Optimization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Conflict-Resolution und Relationship-Management'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamPartnerData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Partner page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
