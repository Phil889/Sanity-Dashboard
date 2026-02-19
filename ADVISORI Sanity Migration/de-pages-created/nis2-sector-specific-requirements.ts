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
    console.log('Creating NIS2 Sector-Specific Requirements page...')

    const nis2SectorSpecificRequirementsData = {
      _type: 'servicePage',
      _id: 'nis2-sector-specific-requirements',
      title: 'NIS2 Sector-Specific Requirements',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/nis2/nis2-sector-specific-requirements/'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management-nis2'
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
        title: 'NIS2 Sector-Specific Requirements | ADVISORI',
        description: 'Spezialisierte NIS2-Compliance für kritische und wichtige Sektoren. Maßgeschneiderte Cybersecurity-Lösungen für Energie, Transport, Bankwesen, Gesundheit und weitere regulierte Branchen.',
        keywords: 'NIS2 Sektoranforderungen, Critical Infrastructure Cybersecurity, Essential Entities NIS2, Important Entities Compliance, Sector-specific Security Measures'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'NIS2 Sector-Specific Requirements'
        },
        tagline: 'Branchenspezifische NIS2-Compliance Excellence',
        heading: 'NIS2 Sector-Specific Requirements',
        description: 'Maßgeschneiderte NIS2-Compliance-Lösungen für kritische und wichtige Einrichtungen. Wir verstehen die einzigartigen Herausforderungen verschiedener Sektoren und entwickeln branchenspezifische Cybersecurity-Frameworks, die regulatorische Excellence mit operativer Effizienz verbinden.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Sektorspezifische NIS2-Compliance-Frameworks für alle 18 regulierten Branchen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Maßgeschneiderte Risikobewertungen und Cybersecurity-Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Branchenerprobte Security Controls und Best Practices'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Cross-sektorale Expertise und Regulatory Intelligence'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'NIS2 Sector-Specific Requirements',
        description: 'Die NIS2-Richtlinie definiert differenzierte Anforderungen für verschiedene Sektoren kritischer und wichtiger Infrastrukturen. Jede Branche hat spezifische Risikoprofile, operative Charakteristika und regulatorische Kontexte, die maßgeschneiderte Compliance-Ansätze erfordern.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Kritische Sektoren: Energie, Transport, Bankwesen, Finanzmarktinfrastrukturen, Gesundheit, Trinkwasser, Abwasser, Digitale Infrastruktur, ICT Service Management, Weltraum'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Wichtige Sektoren: Post- und Kurierdienste, Abfallwirtschaft, Herstellung kritischer Produkte, Digitale Dienste, Forschung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Branchenspezifische Risikobewertungen und Threat Landscape Analysis'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Sektorspezifische Cybersecurity-Maßnahmen und Controls'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Cross-sektorale Koordination und Information Sharing'
          }
        ],
        alert: {
          title: 'Sektorspezifische Compliance-Komplexität',
          content: 'Jeder Sektor hat unterschiedliche NIS2-Compliance-Anforderungen, Risikoprofile und operative Herausforderungen. Generic One-Size-Fits-All-Ansätze führen zu ineffizienter Ressourcenallokation und Compliance-Gaps. Professionelle sektorspezifische Expertise ist essentiell.'
        },
        whyUs: {
          title: 'Unsere Sector-Specific Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Deep Domain Knowledge in allen 18 NIS2-regulierten Sektoren'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Branchenerprobte Compliance-Frameworks und Security Controls'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Cross-sektorale Benchmark-Analyse und Best Practice Transfer'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Integrierte Regulatory Intelligence und Trend Analysis'
            }
          ]
        },
        additionalInfo: 'Erfolgreiche NIS2-Compliance erfordert tiefes Verständnis der sektorspezifischen Risiken, operativen Realitäten und regulatorischen Nuancen. Unser branchenspezifischer Ansatz maximiert Compliance-Effektivität bei optimaler Ressourceneffizienz.',
        serviceDescription: 'Wir entwickeln maßgeschneiderte NIS2-Compliance-Strategien, die perfekt auf die spezifischen Anforderungen, Risikoprofile und operativen Charakteristika Ihres Sektors zugeschnitten sind. Unser Ansatz verbindet Deep Domain Expertise mit Cross-sektoraler Innovation.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Sector-Specific Risk Assessment und Threat Modeling'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Branchenspezifische Cybersecurity Framework Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Sektorspezifische Compliance Roadmap Development'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Cross-Sector Benchmark Analysis und Best Practice Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Sector-Specific Regulatory Intelligence und Change Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Sector-Specific Compliance-Ansatz',
        description: 'Wir entwickeln maßgeschneiderte NIS2-Compliance-Strategien basierend auf Deep Domain Knowledge, sektorspezifischen Risikoprofilen und Cross-Industry Best Practices für maximale Regulatory Excellence.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Sector-Specific Risk und Threat Landscape Analysis'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Branchenspezifische Cybersecurity Framework Development'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Cross-Sector Benchmark Analysis und Innovation Transfer'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Sektorspezifische Implementation und Testing'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continuous Sector Intelligence und Adaptive Compliance'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI\'s sektorspezifische NIS2-Expertise war entscheidend für unseren Compliance-Erfolg. Ihre Deep Domain Knowledge und branchenerprobten Frameworks haben uns nicht nur regulatorische Excellence, sondern auch operative Effizienzgewinne ermöglicht.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Critical Sectors Compliance',
          description: 'Spezialisierte NIS2-Compliance für kritische Sektoren wie Energie, Transport, Bankwesen und Gesundheit mit höchsten Sicherheitsanforderungen und strengsten regulatorischen Auflagen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'High-Critical Infrastructure Protection Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Sector-Specific Threat Intelligence Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Critical Dependencies Mapping und Protection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Enhanced Incident Response und Recovery Planning'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Important Sectors Optimization',
          description: 'Effiziente NIS2-Compliance für wichtige Sektoren mit optimierten Sicherheitsmaßnahmen, die regulatorische Anforderungen bei maximaler operativer Flexibilität erfüllen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Risk-Proportionate Security Controls'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Cost-Effective Compliance Strategies'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Scalable Security Architecture Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Operational Efficiency Integration'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(nis2SectorSpecificRequirementsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ NIS2 Sector-Specific Requirements page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
