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
    console.log('Creating EU AI Act AI Compliance Framework page...')

    const euAiActAiComplianceFrameworkData = {
      _type: 'servicePage',
      _id: 'eu-ai-act-ai-compliance-framework',
      title: 'EU AI Act AI Compliance Framework',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eu-ai-act/eu-ai-act-ai-compliance-framework'
      },
      parent: {
        _type: 'reference',
        _ref: 'eu-ai-act'
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
        title: 'EU AI Act AI Compliance Framework | ADVISORI',
        description: 'Entwickeln Sie ein umfassendes AI Compliance Framework für die EU AI Act. Wir unterstützen bei der Implementierung risikobasierter Governance-Strukturen und KI-Überwachungssysteme.',
        keywords: 'EU AI Act, AI Compliance Framework, KI-Governance, AI Risk Management, Algorithm Governance, AI Ethics, AI Compliance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EU AI Act AI Compliance Framework'
        },
        tagline: 'Strukturierte AI Governance für nachhaltige KI-Compliance',
        heading: 'EU AI Act AI Compliance Framework',
        description: 'Etablieren Sie ein robustes AI Compliance Framework, das den Anforderungen der EU AI Act entspricht. Wir entwickeln maßgeschneiderte Governance-Strukturen, die KI-Risiken effektiv verwalten und ethische AI-Prinzipien in Ihre Organisation integrieren.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strukturierte AI Governance mit klaren Rollen und Verantwortlichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Risikobasiertes Management von KI-Systemen nach EU AI Act Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte Überwachungs- und Kontrollmechanismen für KI-Anwendungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachhaltige Compliance-Prozesse für kontinuierliche AI-Innovation'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EU AI Act AI Compliance Framework',
        description: 'Ein effektives AI Compliance Framework ist das Fundament für verantwortungsvolle KI-Entwicklung und -Nutzung unter der EU AI Act. Wir entwickeln strukturierte Governance-Ansätze, die KI-Risiken systematisch adressieren und gleichzeitig Innovation ermöglichen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung risikobasierter AI Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung von AI Ethics Committees und Decision Boards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Etablierung von KI-Überwachungs- und Kontrollsystemen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von AI Compliance in bestehende IT-Governance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Entwicklung von AI Policy Frameworks und Richtlinien'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Ein erfolgreiches AI Compliance Framework erfordert nicht nur technische Kontrollen, sondern auch eine starke Governance-Kultur, die ethische KI-Prinzipien in allen Unternehmensbereichen verankert.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in AI Governance und EU AI Act Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Framework-Entwicklung für verschiedene Branchen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integration von technischen und organisatorischen Maßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung bei der Framework-Implementierung'
            }
          ]
        },
        additionalInfo: 'Ein gut strukturiertes AI Compliance Framework reduziert nicht nur regulatorische Risiken, sondern schafft auch Vertrauen bei Stakeholdern und ermöglicht nachhaltige KI-Innovation. Investieren Sie in verantwortungsvolle AI-Governance!',
        serviceDescription: 'Wir bieten umfassende Unterstützung bei der Entwicklung und Implementierung von AI Compliance Frameworks, die den Anforderungen der EU AI Act entsprechen und gleichzeitig Ihre Geschäftsziele unterstützen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'AI Governance Structure Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'AI Ethics Committee Establishment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'AI Risk Management Framework'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'AI Policy Development'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'AI Monitoring and Control Systems'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen ein maßgeschneidertes AI Compliance Framework, das auf bewährte Governance-Prinzipien aufbaut und die spezifischen Anforderungen Ihrer Organisation berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse bestehender Governance-Strukturen und KI-Landschaft'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design risikobasierter AI Governance-Architektur'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung von AI Policies und Compliance-Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung von Überwachungs- und Kontrollmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Training und Change Management für nachhaltige Adoption'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir ein robustes AI Compliance Framework entwickelt, das nicht nur regulatorische Anforderungen erfüllt, sondern auch als strategischer Enabler für verantwortungsvolle KI-Innovation fungiert. Die strukturierte Herangehensweise hat uns geholfen, Vertrauen in unsere AI-Systeme aufzubauen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'AI Governance Structure Design',
          description: 'Entwicklung einer umfassenden AI Governance-Struktur mit klaren Rollen, Verantwortlichkeiten und Entscheidungsprozessen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'AI Governance Operating Model Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Rollen- und Verantwortlichkeitsmatrix (RACI)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'AI Decision Authority Framework'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration in bestehende Governance-Strukturen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'AI Risk Management Framework',
          description: 'Implementierung eines systematischen Ansatzes zur Identifikation, Bewertung und Steuerung von KI-bezogenen Risiken.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'AI Risk Assessment Methodologie'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Risk-based AI System Classification'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'AI Risk Monitoring and Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Mitigation Strategy Development'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(euAiActAiComplianceFrameworkData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EU AI Act AI Compliance Framework page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
