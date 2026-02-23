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
    console.log('Creating EU AI Act Quality Management page...')

    const euAiActQualityManagementData = {
      _type: 'servicePage',
      _id: 'eu-ai-act-quality-management',
      title: 'EU AI Act Quality Management',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eu-ai-act/eu-ai-act-ai-compliance-framework/eu-ai-act-quality-management'
      },
      parent: {
        _type: 'reference',
        _ref: 'eu-ai-act-ai-compliance-framework'
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
        title: 'EU AI Act Quality Management System | ADVISORI',
        description: 'Implementieren Sie ein umfassendes AI Quality Management System nach EU AI Act. Wir unterstützen bei der Entwicklung strukturierter QM-Prozesse für KI-Systeme und algorithmische Qualitätssicherung.',
        keywords: 'EU AI Act, AI Quality Management, KI-Qualitätssicherung, AI QMS, Algorithm Quality, AI Testing, KI-Validierung, AI Governance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EU AI Act Quality Management'
        },
        tagline: 'Systematische Qualitätssicherung für vertrauensvolle KI-Systeme',
        heading: 'EU AI Act Quality Management',
        description: 'Etablieren Sie ein robustes Quality Management System für KI-Anwendungen nach EU AI Act Standards. Wir entwickeln strukturierte QM-Prozesse, die Qualität, Sicherheit und Vertrauenswürdigkeit Ihrer AI-Systeme über den gesamten Lebenszyklus gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische KI-Qualitätssicherung nach EU AI Act Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strukturierte Testing- und Validierungsframeworks für AI-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kontinuierliche Qualitätsüberwachung und Performance-Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Integrierte Dokumentation und Audit-Trail für AI-Qualitätsprozesse'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EU AI Act Quality Management',
        description: 'Ein systematisches AI Quality Management ist essentiell für die Compliance mit der EU AI Act und den Aufbau vertrauensvoller KI-Systeme. Wir entwickeln umfassende QM-Frameworks, die Qualität, Sicherheit und ethische Standards über den gesamten AI-Lebenszyklus sicherstellen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung AI-spezifischer Quality Management Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung strukturierter AI Testing und Validation Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Etablierung kontinuierlicher AI Quality Monitoring Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von Quality Gates in AI Development Lifecycles'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Aufbau umfassender AI Quality Documentation und Audit Trails'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Effektives AI Quality Management erfordert eine Balance zwischen automatisierten Quality Checks und menschlicher Expertise, um sowohl technische Performance als auch ethische Standards zu gewährleisten.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in AI Quality Management und EU AI Act Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte QM-Frameworks für verschiedene AI-Anwendungsdomänen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integration technischer und ethischer Qualitätsdimensionen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung bei der QM-System Implementierung'
            }
          ]
        },
        additionalInfo: 'Ein strukturiertes AI Quality Management System ist nicht nur regulatorische Anforderung, sondern auch strategischer Enabler für vertrauensvolle AI-Innovation und nachhaltigen Geschäftserfolg.',
        serviceDescription: 'Wir bieten umfassende Unterstützung bei der Entwicklung und Implementierung von AI Quality Management Systemen, die den höchsten Standards entsprechen und Ihre AI-Systeme zukunftssicher machen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'AI Quality Management System Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'AI Testing & Validation Framework'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Quality Monitoring & Metrics'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'AI Quality Documentation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Continuous Quality Improvement'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen ein maßgeschneidertes AI Quality Management System, das auf bewährte QM-Prinzipien aufbaut und die spezifischen Anforderungen der EU AI Act berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse bestehender QM-Strukturen und AI-Quality Requirements'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design AI-spezifischer Quality Management Architektur'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung strukturierter Testing und Validation Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung kontinuierlicher Quality Monitoring Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Training und Prozessoptimierung für nachhaltige Quality Excellence'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir ein umfassendes AI Quality Management System entwickelt, das nicht nur regulatorische Compliance sicherstellt, sondern auch das Vertrauen in unsere AI-Systeme erheblich gestärkt hat. Die strukturierten QM-Prozesse haben unsere AI-Entwicklung professionalisiert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'AI Quality Management System Design',
          description: 'Entwicklung einer umfassenden AI-QMS Architektur mit strukturierten Prozessen, Rollen und Verantwortlichkeiten für systematische Qualitätssicherung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'AI-QMS Framework Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Quality Process Definition und Standardization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'AI Quality Governance Structure'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration in bestehende QM-Systeme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'AI Testing & Validation Framework',
          description: 'Implementierung systematischer Testing- und Validierungsframeworks für umfassende AI-System Qualitätssicherung und Performance-Validierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'AI Testing Strategy und Methodology'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automated Quality Testing Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'AI Model Validation und Verification'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Quality Gates und Approval Processes'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(euAiActQualityManagementData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EU AI Act Quality Management page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
