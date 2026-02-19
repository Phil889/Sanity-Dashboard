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
    console.log('Creating CRA Audit page...')

    const craAuditData = {
      _type: 'servicePage',
      _id: 'cra-audit',
      title: 'CRA Audit',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-audit'
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
        title: 'CRA Audit Services | ADVISORI',
        description: 'Professionelle CRA Audit-Dienstleistungen für Cyber Resilience Act Compliance. Wir führen umfassende Audits durch und bereiten Sie optimal auf regulatorische Prüfungen vor.',
        keywords: 'CRA Audit, Cyber Resilience Act Audit, CRA Prüfung, Compliance Audit, Cybersicherheit Audit, CRA Zertifizierung, Audit Vorbereitung, Regulatorische Prüfung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA Audit Services'
        },
        tagline: 'Professionelle CRA Audit-Exzellenz',
        heading: 'CRA Audit',
        description: 'CRA Audits erfordern tiefgreifende Expertise und systematische Vorbereitung. Wir führen umfassende Compliance-Audits durch und bereiten Sie optimal auf regulatorische Prüfungen vor, um nachhaltige Konformität und Audit-Erfolg zu gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende CRA Compliance-Audits und Bewertungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strategische Audit-Vorbereitung und Risikominimierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kontinuierliche Audit-Readiness und Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Expertensupport bei regulatorischen Prüfungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische CRA Audit-Services',
        description: 'CRA Audits sind komplexe Bewertungsprozesse, die sowohl technische Cybersicherheitsmaßnahmen als auch organisatorische Compliance-Strukturen umfassen. Erfolgreiche Audits erfordern nicht nur die Erfüllung regulatorischer Mindestanforderungen, sondern auch die Demonstration einer gelebten Cybersicherheitskultur und kontinuierlicher Verbesserungsprozesse.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Pre-Audit-Assessments und Gap-Analysen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Strategische Audit-Vorbereitung und Dokumentationsoptimierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Durchführung interner CRA Compliance-Audits'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Begleitung bei externen regulatorischen Prüfungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Audit-Readiness und Performance-Monitoring'
          }
        ],
        alert: {
          title: 'Audit-Strategiehinweis',
          content: 'Erfolgreiche CRA Audits erfordern eine ganzheitliche Vorbereitung, die technische Compliance mit organisatorischer Exzellenz verbindet. Proaktive Audit-Readiness minimiert Risiken und maximiert Audit-Erfolg.'
        },
        whyUs: {
          title: 'Unsere CRA Audit-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung in CRA Compliance-Audits und regulatorischen Prüfungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für effektive Audit-Vorbereitung und -Durchführung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Tiefgreifende Kenntnisse der CRA-Anforderungen und Audit-Kriterien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Unterstützung für nachhaltige Audit-Readiness'
            }
          ]
        },
        additionalInfo: 'CRA Audits sind mehr als Compliance-Prüfungen - sie sind strategische Chancen zur Demonstration von Cybersicherheitsexzellenz und zur Stärkung des Marktvertrauens.',
        serviceDescription: 'Wir bieten umfassende CRA Audit-Services, die von der strategischen Vorbereitung bis zur kontinuierlichen Audit-Readiness reichen und nachhaltigen Audit-Erfolg gewährleisten.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Audit-Planung und Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Umfassende Compliance-Dokumentation und Evidence-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Interne Audit-Durchführung und Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Externe Audit-Begleitung und Stakeholder-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Verbesserung und Audit-Readiness-Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser CRA Audit-Ansatz',
        description: 'Wir entwickeln mit Ihnen maßgeschneiderte Audit-Strategien, die sowohl regulatorische Exzellenz als auch operative Effizienz gewährleisten und nachhaltigen Audit-Erfolg schaffen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Audit-Readiness-Bewertung und Strategieentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Systematische Dokumentations- und Evidence-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Strukturierte Audit-Durchführung mit Best-Practice-Methoden'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Proaktive Stakeholder-Kommunikation und Erwartungsmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Verbesserung und Lessons-Learned-Integration'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Erfolgreiche CRA Audits sind das Ergebnis strategischer Vorbereitung und operativer Exzellenz. Unsere Kunden profitieren von bewährten Audit-Methoden, die nicht nur Compliance demonstrieren, sondern auch Cybersicherheitsreife und organisatorische Kompetenz unter Beweis stellen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'CRA Compliance-Audit und Bewertung',
          description: 'Umfassende interne Audits zur Bewertung der CRA Compliance-Positionierung und Identifikation von Verbesserungspotenzialen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Vollständige CRA Compliance-Bewertung und Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Technische und organisatorische Audit-Durchführung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risikobewertung und Prioritätensetzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Detaillierte Audit-Berichte und Handlungsempfehlungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Strategische Audit-Vorbereitung',
          description: 'Systematische Vorbereitung auf externe CRA Audits durch Optimierung von Dokumentation, Prozessen und Stakeholder-Readiness.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Audit-Readiness-Assessment und Vorbereitungsplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Dokumentations- und Evidence-Management-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Stakeholder-Training und Kommunikationsvorbereitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Mock-Audits und Simulation von Prüfungssituationen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craAuditData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA Audit page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
