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
    console.log('Creating IAM Services page...')

    const iamServicesData = {
      _type: 'servicePage',
      _id: 'iam-services',
      title: 'IAM Services - Professionelle Identity & Access Management Dienstleistungen',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-services'
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
        title: 'IAM Services - Professionelle Identity & Access Management Dienstleistungen | ADVISORI',
        description: 'Umfassende IAM Services für Enterprise-Sicherheit: Strategieberatung, Implementation, Managed Services, Support und Training. Professionelle Identity & Access Management Dienstleistungen für maximale Sicherheit.',
        keywords: 'IAM Services, Identity Access Management Services, IAM Beratung, IAM Implementation, Managed IAM Services, IAM Support, IAM Training, Enterprise IAM Services, Identity Management Consulting, Access Management Services'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Services Professionelle Identity Access Management Dienstleistungen'
        },
        tagline: 'End-to-End IAM Services für Enterprise-Excellence',
        heading: 'IAM Services - Professionelle Identity & Access Management Dienstleistungen',
        description: 'IAM Services bilden das strategische Fundament für moderne Unternehmenssicherheit und digitale Transformation. Unsere umfassenden Identity & Access Management Dienstleistungen reichen von strategischer Beratung und Architektur-Design über professionelle Implementation bis hin zu Managed Services und kontinuierlicher Optimierung. Wir transformieren komplexe Sicherheitsanforderungen in elegante, skalierbare Lösungen, die Geschäftsprozesse beschleunigen und gleichzeitig höchste Sicherheitsstandards gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Ganzheitliche IAM-Strategieberatung mit Business-Impact-Fokus'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Professionelle Implementation und nahtlose System-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Managed Services für kontinuierliche Optimierung und Support'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Umfassende Schulungen und Change-Management-Unterstützung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Comprehensive IAM Services: Von der Strategie bis zum Betrieb',
        description: 'Unsere IAM Services umfassen das gesamte Spektrum professioneller Identity & Access Management Dienstleistungen und begleiten Sie durch jeden Schritt Ihrer IAM-Transformation. Von der initialen Strategieentwicklung über die technische Implementation bis hin zum operativen Betrieb und der kontinuierlichen Weiterentwicklung bieten wir maßgeschneiderte Lösungen, die Ihre spezifischen Geschäftsanforderungen optimal unterstützen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische IAM-Beratung mit umfassender Current-State-Analyse und Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Professionelle Implementation mit agilen Methoden und Best-Practice-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Managed IAM Services für kontinuierlichen Betrieb und proaktive Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Umfassende Schulungen und Enablement für nachhaltige Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Innovation-Integration und Technology-Roadmap-Updates'
          }
        ],
        alert: {
          title: 'Service-Excellence als Erfolgsfaktor',
          content: 'Professionelle IAM Services sind entscheidend für den Erfolg jeder Identity & Access Management Initiative. Die Komplexität moderner IAM-Landschaften erfordert spezialisierte Expertise, bewährte Methoden und kontinuierliche Unterstützung für nachhaltige Transformation und optimale Geschäftsergebnisse.'
        },
        whyUs: {
          title: 'ADVISORI IAM Service-Excellence',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in allen IAM-Technologien und -Methoden'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Delivery-Methoden mit agilen und DevOps-Ansätzen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Herstellerunabhängige Beratung für optimale Technologie-Auswahl'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Innovation und Best-Practice-Integration'
            }
          ]
        },
        additionalInfo: 'Die Landschaft der IAM Services entwickelt sich kontinuierlich weiter, getrieben von neuen Technologien wie künstlicher Intelligenz, Cloud-nativen Architekturen und Zero-Trust-Prinzipien. Unsere Services integrieren diese Innovationen nahtlos in bewährte Delivery-Methoden für optimale Geschäftsergebnisse.',
        serviceDescription: 'Unsere IAM Services kombinieren tiefe technische Expertise mit strategischem Business-Verständnis und bewährten Delivery-Methoden. Wir begleiten Sie durch die gesamte IAM-Journey – von der initialen Vision bis zur operativen Excellence – und stellen sicher, dass Ihre IAM-Investitionen maximalen Geschäftswert generieren.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische IAM-Beratung und Business-Case-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Professionelle Implementation und System-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Managed Services und kontinuierliche Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Training und Change-Management-Unterstützung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Support und Maintenance für operative Excellence'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser bewährter IAM Service-Delivery-Ansatz',
        description: 'Wir verfolgen einen strukturierten, business-orientierten Ansatz für IAM Service-Delivery, der bewährte Methoden mit agilen Prinzipien kombiniert und dabei kontinuierliche Wertschöpfung und nachhaltige Transformation gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Discovery und Assessment mit umfassender Analyse bestehender Systeme und Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strategische Planung mit Business-Case-Entwicklung und Roadmap-Definition'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Agile Implementation mit kontinuierlicher Integration und Testing'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Change Management und User-Adoption für nachhaltige Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Innovation-Integration'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Professionelle IAM Services sind der Schlüssel für erfolgreiche Identity & Access Management Transformationen. Unsere Erfahrung zeigt, dass die Qualität der Service-Delivery entscheidend für den langfristigen Erfolg jeder IAM-Initiative ist. Durch die Kombination von strategischer Beratung, technischer Excellence und kontinuierlicher Unterstützung schaffen wir nachhaltige Lösungen, die nicht nur Sicherheitsanforderungen erfüllen, sondern auch Geschäftsprozesse beschleunigen und Innovationen ermöglichen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische IAM-Beratung und Roadmap-Entwicklung',
          description: 'Umfassende strategische Beratung für IAM-Transformationen mit Business-Case-Entwicklung, Current-State-Assessment und detaillierter Roadmap für nachhaltige Transformation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Comprehensive Current-State-Assessment und Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Business-Case-Entwicklung mit ROI-Kalkulation und Risikobewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Strategische Roadmap mit Phasenplanung und Meilenstein-Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Technologie-Evaluation und Vendor-Selection-Unterstützung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Professionelle IAM-Implementation und Integration',
          description: 'End-to-End Implementation von IAM-Lösungen mit agilen Methoden, Best-Practice-Integration und nahtloser System-Integration für optimale Geschäftsergebnisse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Agile Implementation mit Scrum und DevOps-Prinzipien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'System-Integration und Legacy-Modernisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Security-by-Design und Compliance-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Umfassende Testing und Quality-Assurance'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Managed IAM Services und kontinuierliche Optimierung',
          description: 'Umfassende Managed Services für IAM-Systeme mit proaktivem Monitoring, kontinuierlicher Optimierung und strategischer Weiterentwicklung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Proaktives System-Monitoring und Performance-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Kontinuierliche Security-Assessment und Vulnerability-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Capacity-Planning und Skalierungs-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Innovation-Integration und Technology-Updates'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'IAM-Training und Change-Management',
          description: 'Umfassende Schulungsprogramme und Change-Management-Unterstützung für nachhaltige IAM-Transformation und optimale User-Adoption.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Maßgeschneiderte Schulungsprogramme für alle Zielgruppen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Change-Management-Strategien und Communication-Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'User-Adoption-Unterstützung und Feedback-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Knowledge-Transfer und Enablement-Programme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'IAM-Support und Maintenance Services',
          description: 'Professionelle Support- und Maintenance-Services für IAM-Systeme mit schneller Incident-Response, präventiver Wartung und kontinuierlicher Systemoptimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Multi-Level-Support mit definierten SLAs und Eskalationspfaden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Präventive Wartung und System-Health-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Incident-Management und Root-Cause-Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Patch-Management und Security-Update-Deployment'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'IAM-Governance und Compliance-Services',
          description: 'Spezialisierte Governance- und Compliance-Services für IAM-Systeme mit kontinuierlicher Überwachung, Audit-Unterstützung und regulatorischer Excellence.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Governance-Framework-Entwicklung und -Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Kontinuierliche Compliance-Monitoring und -Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Audit-Unterstützung und Regulatory-Readiness'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Risk-Assessment und Mitigation-Strategien'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamServicesData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Services page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
