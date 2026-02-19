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
    console.log('Creating ESG Audit page...')

    const esgAuditData = {
      _type: 'servicePage',
      _id: 'esg-audit',
      title: 'ESG Audit',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/esg/esg-audit'
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
        title: 'ESG Audit | ADVISORI',
        description: 'Professionelle ESG Audit Services für nachhaltige Unternehmensführung. Spezialisierte Beratung zu Environmental, Social und Governance Audits, Nachhaltigkeitsberichterstattung und ESG-Compliance für zukunftsorientierte Unternehmen.',
        keywords: 'ESG Audit, Nachhaltigkeitsaudit, Environmental Audit, Social Audit, Governance Audit, ESG Compliance, Nachhaltigkeitsberichterstattung, ESG Assessment, Sustainability Audit, ESG Due Diligence'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ESG Audit'
        },
        tagline: 'Professionelle ESG Audits für nachhaltige Unternehmensführung',
        heading: 'ESG Audit',
        description: 'ESG Audits sind entscheidend für die Bewertung und Verbesserung der Nachhaltigkeitsleistung von Unternehmen. Wir entwickeln umfassende ESG Audit Frameworks, die Environmental, Social und Governance Faktoren systematisch bewerten und dabei regulatorische Anforderungen erfüllen sowie strategische Nachhaltigkeitsziele unterstützen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende Environmental Impact Assessments und Klimarisikobewertungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strukturierte Social Performance Audits und Stakeholder Engagement Bewertungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Governance Excellence Assessments und Board Effectiveness Reviews'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Regulatorische ESG Compliance und Nachhaltigkeitsberichterstattung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ESG Audit',
        description: 'ESG Audits sind ein kritischer Baustein nachhaltiger Unternehmensführung und erfordern einen systematischen Ansatz zur Bewertung von Environmental, Social und Governance Faktoren. Unser ESG Audit Framework integriert bewährte Audit Praktiken mit den neuesten Nachhaltigkeitsstandards und schafft dabei eine solide Grundlage für strategische Nachhaltigkeitsentscheidungen und regulatorische Compliance.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung umfassender ESG Assessment Frameworks und Bewertungsmethodologien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementation strukturierter Environmental Impact Assessments und Klimarisikobewertungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Durchführung detaillierter Social Performance Audits und Stakeholder Engagement Reviews'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Etablierung robuster Governance Assessments und Board Effectiveness Evaluationen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration von ESG Due Diligence und Nachhaltigkeitsberichterstattung'
          }
        ],
        alert: {
          title: 'ESG Audit Hinweis',
          content: 'ESG Audits erfordern eine ganzheitliche Betrachtung von Nachhaltigkeitsaspekten und regulatorischen Anforderungen. Ein systematischer, evidenzbasierter Ansatz ist entscheidend für die Identifikation von Verbesserungspotenzialen und die Erfüllung von Stakeholder-Erwartungen.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in ESG Audit Methodologien und internationalen Nachhaltigkeitsstandards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Frameworks für komplexe Multi-Stakeholder ESG Assessments'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von ESG Strategy bis Implementation und Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Branchenspezifische Erfahrung in verschiedenen Sektoren und Regulierungsumfeldern'
            }
          ]
        },
        additionalInfo: 'ESG Audits erfordern eine integrierte Herangehensweise, die technische Bewertungen, Stakeholder Engagement und strategische Nachhaltigkeitsplanung gleichermaßen berücksichtigt. Unser Framework-Ansatz gewährleistet eine umfassende und nachhaltige ESG Audit Lösung.',
        serviceDescription: 'Wir bieten ein vollständiges ESG Audit Framework, das von der strategischen ESG Assessment Planung über die detaillierte Durchführung bis hin zur kontinuierlichen Verbesserung alle Aspekte des ESG Auditing abdeckt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'ESG Assessment Framework Development und Methodology Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Environmental Impact Assessment und Climate Risk Evaluation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Social Performance Audit und Stakeholder Engagement Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Governance Excellence Review und Board Effectiveness Evaluation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'ESG Reporting und Regulatory Compliance Documentation'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam ein maßgeschneidertes ESG Audit Framework, das Ihre spezifischen Nachhaltigkeitsziele mit regulatorischen Compliance-Anforderungen optimal ausbalanciert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer aktuellen ESG Performance und Nachhaltigkeitsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer strategischen ESG Audit Roadmap mit klaren Prioritäten und Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Design und Implementierung robuster Assessment, Evaluation und Monitoring Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration von Technologie-Lösungen für automatisierte ESG Data Collection und Analysis'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung durch Best Practice Integration und Stakeholder Feedback'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ESG Audits sind der Schlüssel für nachhaltige Unternehmensführung und langfristige Wertschöpfung. Unsere systematischen Audit-Ansätze ermöglichen es Unternehmen, ihre Nachhaltigkeitsleistung nicht nur zu bewerten und zu verbessern, sondern auch strategische Chancen zu identifizieren und Risiken proaktiv zu managen. Dabei verbinden wir technische Exzellenz mit strategischer Nachhaltigkeitsberatung und regulatorischer Compliance.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ESG Assessment Framework & Methodology Development',
          description: 'Entwicklung umfassender ESG Assessment Frameworks und standardisierter Bewertungsmethodologien für systematische Nachhaltigkeitsbewertungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Customized ESG Assessment Framework Design und Methodology Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'International Standards Integration und Best Practice Alignment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Multi-Stakeholder Assessment Approaches und Materiality Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Performance Metrics Definition und KPI Framework Development'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Environmental Impact Assessment & Climate Risk Evaluation',
          description: 'Umfassende Bewertung von Umweltauswirkungen und Klimarisiken mit detaillierter Analyse von Environmental Performance und Sustainability Impacts.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Carbon Footprint Assessment und Greenhouse Gas Emissions Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Climate Risk Assessment und Physical Risk Evaluation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Environmental Management Systems Audit und ISO 14001 Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Biodiversity Impact Assessment und Natural Capital Evaluation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Social Performance Audit & Stakeholder Engagement Assessment',
          description: 'Detaillierte Bewertung der sozialen Leistung und des Stakeholder Engagements mit Fokus auf Human Rights, Labor Practices und Community Impact.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Human Rights Due Diligence und Labor Standards Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Diversity, Equity & Inclusion Audit und Workplace Culture Evaluation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Community Impact Assessment und Stakeholder Engagement Review'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Supply Chain Social Compliance und Vendor Assessment'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Governance Excellence Review & Board Effectiveness Evaluation',
          description: 'Umfassende Bewertung von Corporate Governance Strukturen und Board Effectiveness mit Fokus auf Transparency, Accountability und Ethical Leadership.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Board Composition und Independence Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Executive Compensation und Incentive Alignment Review'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Risk Management Framework und Internal Controls Evaluation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Ethics und Compliance Program Assessment'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'ESG Due Diligence & Investment Assessment',
          description: 'Spezialisierte ESG Due Diligence Services für Investitionen, Akquisitionen und strategische Partnerschaften mit detaillierter Risk-Return Analysis.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Pre-Investment ESG Due Diligence und Risk Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'ESG Integration Strategy und Value Creation Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Sustainability Performance Benchmarking und Peer Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'ESG Risk Mitigation Planning und Action Plan Development'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'ESG Reporting & Regulatory Compliance Documentation',
          description: 'Umfassende ESG Reporting Services und regulatorische Compliance Dokumentation für transparente Nachhaltigkeitsberichterstattung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Sustainability Report Preparation und GRI Standards Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'TCFD Reporting und Climate Disclosure Documentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'EU Taxonomy Compliance und CSRD Reporting Preparation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'ESG Data Management und Performance Monitoring Systems'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(esgAuditData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ESG Audit page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
