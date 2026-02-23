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
    console.log('Creating CRA SBOM page...')

    const craSbomData = {
      _type: 'servicePage',
      _id: 'cra-sbom',
      title: 'CRA SBOM',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-sbom'
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
        title: 'CRA SBOM - Software Bill of Materials für Cyber Resilience Act | ADVISORI',
        description: 'Strategische SBOM-Implementierung für CRA-Compliance. Wir entwickeln umfassende Software Bill of Materials-Strategien, die Transparenz schaffen und Supply Chain Security für den Cyber Resilience Act gewährleisten.',
        keywords: 'CRA SBOM, Software Bill of Materials, CRA Compliance, Supply Chain Security, Vulnerability Management, SPDX, CycloneDX, SBOM Automation, CRA SBOM Requirements'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA SBOM Implementation'
        },
        tagline: 'Strategische SBOM-Implementierung für CRA-Compliance',
        heading: 'CRA SBOM',
        description: 'Software Bill of Materials (SBOM) bildet das Fundament für transparente und sichere Supply Chains im Cyber Resilience Act. Wir entwickeln mit Ihnen umfassende SBOM-Strategien, die nicht nur regulatorische Anforderungen erfüllen, sondern auch strategische Vorteile durch verbesserte Transparenz und Risikomanagement schaffen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Automatisierte SBOM-Generierung und -Verwaltung für CRA-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Integrierte Supply Chain Transparenz und Vulnerability Tracking'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Strategische SBOM-Analytics für proaktives Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nahtlose Integration in Entwicklungs- und Compliance-Prozesse'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische SBOM-Implementierung für CRA-Excellence',
        description: 'SBOM ist mehr als eine Compliance-Anforderung - es ist ein strategisches Instrument für Supply Chain Security und Risikomanagement. Erfolgreiche SBOM-Implementierungen schaffen Transparenz, ermöglichen proaktives Vulnerability Management und etablieren vertrauensvolle Partnerschaften entlang der gesamten Lieferkette.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische SBOM-Framework-Entwicklung und Governance-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Automatisierte SBOM-Generierung und Lifecycle-Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Supply Chain Transparenz und Vulnerability Intelligence'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integrierte SBOM-Analytics und Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche SBOM-Optimierung und Compliance-Monitoring'
          }
        ],
        alert: {
          title: 'SBOM-Strategiehinweis',
          content: 'Erfolgreiche SBOM-Implementierung erfordert eine ganzheitliche Betrachtung von Technologie, Prozessen und Partnerschaften. Automatisierung und kontinuierliche Verbesserung sind entscheidend für nachhaltige Supply Chain Security und CRA-Compliance.'
        },
        whyUs: {
          title: 'Unsere SBOM-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung in strategischer SBOM-Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für automatisierte SBOM-Generierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integrierte Supply Chain Security und Vulnerability Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Langfristige Partnerschaft für SBOM-Excellence und CRA-Compliance'
            }
          ]
        },
        additionalInfo: 'SBOM-Implementierung ist ein strategischer Enabler für Supply Chain Security, der über CRA-Compliance hinaus nachhaltigen Geschäftswert durch verbesserte Transparenz und Risikomanagement schafft.',
        serviceDescription: 'Wir begleiten Sie bei der Entwicklung und Umsetzung umfassender SBOM-Strategien, die CRA-Anforderungen erfüllen und gleichzeitig strategische Vorteile durch verbesserte Supply Chain Visibility und proaktives Vulnerability Management schaffen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische SBOM-Framework-Entwicklung und Governance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Automatisierte SBOM-Generierung und Lifecycle-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Supply Chain Transparenz und Vulnerability Intelligence'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integrierte SBOM-Analytics und Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche SBOM-Optimierung und Performance-Monitoring'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser SBOM-Implementierungsansatz',
        description: 'Wir entwickeln mit Ihnen maßgeschneiderte SBOM-Strategien, die technische Excellence mit strategischem Geschäftswert verbinden und nachhaltige Supply Chain Security etablieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische SBOM-Vision und Framework-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Automatisierte SBOM-Generierung und Toolchain-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Supply Chain Mapping und Vulnerability Intelligence'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche SBOM-Analytics und Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Performance-Optimierung und Compliance-Monitoring'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'SBOM-Implementierung ist der Schlüssel zu transparenter und sicherer Supply Chain im Cyber Resilience Act. Unsere Kunden profitieren von strategischen SBOM-Ansätzen, die nicht nur Compliance gewährleisten, sondern auch operative Exzellenz durch verbesserte Transparenz, proaktives Vulnerability Management und vertrauensvolle Partnerschaften entlang der gesamten Wertschöpfungskette schaffen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische SBOM-Framework-Entwicklung',
          description: 'Entwicklung umfassender SBOM-Frameworks, die CRA-Anforderungen mit strategischen Geschäftszielen optimal verbinden.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'SBOM-Strategie und Governance-Framework'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Supply Chain Mapping und Dependency Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'SBOM-Standards und Format-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration in Entwicklungs- und Compliance-Prozesse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Automatisierte SBOM-Generierung und Management',
          description: 'Implementierung automatisierter SBOM-Systeme für kontinuierliche Generierung, Aktualisierung und Lifecycle-Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Automatisierte SBOM-Generierung und Toolchain-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Kontinuierliche SBOM-Updates und Synchronisation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Vulnerability Tracking und Impact Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'SBOM-Analytics und Performance-Monitoring'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craSbomData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA SBOM page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
