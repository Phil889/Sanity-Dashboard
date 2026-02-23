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
    console.log('Creating DORA Third-Party Risk Management page...')

    const doraThirdPartyRiskData = {
      _type: 'servicePage',
      _id: 'dora-third-party-risk',
      title: 'DORA Third-Party Risk Management',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dora-digital-operational-resilience-act/dora-requirements/dora-third-party-risk'
      },
      parent: {
        _type: 'reference',
        _ref: 'dora-requirements'
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
        title: 'DORA Third-Party Risk Management | ADVISORI',
        description: 'Expertenlösungen für DORA Third-Party Risk Management. Umfassende Beratung zu ICT-Drittanbieter-Risikobewertung, Vertragsmanagement und regulatorischen Anforderungen nach DORA Artikel 28-30.',
        keywords: 'DORA Third-Party Risk, ICT Third-Party Risk Management, DORA Artikel 28, DORA Artikel 29, DORA Artikel 30, Third-Party Due Diligence, ICT Service Provider Risk, Financial Services Third-Party Risk'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DORA Third-Party Risk Management'
        },
        tagline: 'Strategisches Management von ICT-Drittanbieter-Risiken im Finanzsektor',
        heading: 'DORA Third-Party Risk Management',
        description: 'DORA Artikel 28-30 definieren umfassende Anforderungen an das Management von ICT-Drittanbieter-Risiken für Finanzunternehmen. Wir unterstützen Sie bei der strategischen Implementierung robuster Third-Party Risk Management Frameworks zur Sicherstellung Ihrer digitalen operationellen Resilienz und regulatorischen Compliance.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige DORA-konforme Third-Party Risk Management Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Umfassende ICT-Drittanbieter Due Diligence und Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte Vertragsgestaltung und Compliance-Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Automatisierte Monitoring-Systeme und Exit-Strategien'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DORA Third-Party Risk Management',
        description: 'Das Digital Operational Resilience Act (DORA) stellt mit den Artikeln 28-30 spezifische Anforderungen an das Management von ICT-Drittanbieter-Risiken. Diese umfassen umfassende Due Diligence-Prozesse, kontinuierliche Überwachung kritischer ICT-Dienstleister und robuste Exit-Strategien. Wir entwickeln maßgeschneiderte Third-Party Risk Management Strategien, die nicht nur regulatorische Compliance gewährleisten, sondern auch Ihre operative Resilienz und Geschäftskontinuität nachhaltig stärken.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung DORA-konformer Third-Party Risk Management Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung umfassender ICT-Drittanbieter Due Diligence Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Aufbau robuster Vertragsmanagement- und Compliance-Überwachungssysteme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration automatisierter Monitoring- und Alerting-Mechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Entwicklung strategischer Exit-Strategien und Contingency-Pläne'
          }
        ],
        alert: {
          title: 'Regulatorischer Hinweis',
          content: 'DORA Artikel 28-30 erfordern von Finanzunternehmen die Implementierung umfassender Third-Party Risk Management Programme bis Januar 2025. Eine strategische Vorbereitung und frühzeitige Umsetzung sind entscheidend für erfolgreiche Compliance.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in DORA Third-Party Risk Anforderungen und regulatorischen Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung in ICT-Drittanbieter-Risikomanagement und Vendor Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von strategischer Planung bis zur operativen Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Innovative Automatisierungslösungen für kontinuierliche Third-Party Überwachung'
            }
          ]
        },
        additionalInfo: 'DORA Third-Party Risk Management geht über traditionelles Vendor Management hinaus und erfordert eine strategische, risikobasierte Herangehensweise. Unsere Lösungen integrieren regulatorische Anforderungen mit bewährten Risk Management-Praktiken und schaffen nachhaltige Resilienz-Frameworks.',
        serviceDescription: 'Wir bieten ein umfassendes Leistungsspektrum für DORA Third-Party Risk Management, das von der strategischen Rahmenentwicklung bis zur technischen Implementierung und kontinuierlichen Optimierung reicht. Unser Ansatz kombiniert regulatorische Expertise mit modernsten Risk Management-Technologien.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Third-Party Risk Strategy Development und Framework Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'ICT-Drittanbieter Due Diligence und Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Contract Management und Legal Compliance Programme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Continuous Monitoring und Performance Management Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Exit Strategy Development und Contingency Planning'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine maßgeschneiderte DORA Third-Party Risk Management Strategie, die regulatorische Anforderungen erfüllt und gleichzeitig Ihre operative Resilienz nachhaltig stärkt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer ICT-Drittanbieter-Landschaft und Kritikalitätsbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer risikobasierten Third-Party Risk Management Strategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung robuster Due Diligence und Monitoring-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration von Risk Management-Frameworks in bestehende Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Anpassung an evolvierende Risikoprofile'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'DORA Third-Party Risk Management ist ein strategischer Imperativ für die digitale Transformation im Finanzsektor. Unsere integrierten Risk Management-Frameworks ermöglichen es Finanzunternehmen, nicht nur regulatorische Compliance zu erreichen, sondern auch nachhaltige Partnerschaften mit ICT-Dienstleistern aufzubauen, die ihre operative Resilienz und Innovationsfähigkeit langfristig stärken.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Third-Party Risk Strategy & Framework Development',
          description: 'Entwicklung umfassender Third-Party Risk Management Strategien und Governance-Frameworks zur Erfüllung der DORA Artikel 28-30 Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Risikobasierte Third-Party Risk Strategieentwicklung nach DORA-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Governance-Framework Design für ICT-Drittanbieter-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Integration in bestehende Enterprise Risk Management Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Compliance-Mapping und regulatorische Dokumentation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'ICT Third-Party Due Diligence & Risk Assessment',
          description: 'Umfassende Due Diligence-Prozesse und Risikobewertungen für ICT-Drittanbieter nach DORA-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Strukturierte ICT-Drittanbieter Due Diligence Programme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Risikobewertung und Kritikalitätsanalyse von ICT-Services'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Vendor Selection Criteria und Assessment Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Third-Party Security und Compliance Validation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Contract Management & Legal Compliance',
          description: 'Entwicklung DORA-konformer Vertragsstrukturen und Legal Compliance-Programme für ICT-Drittanbieter.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'DORA-konforme Vertragsgestaltung und Legal Framework Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Service Level Agreement (SLA) Design und Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Contractual Risk Mitigation und Liability Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Regulatory Reporting und Documentation Requirements'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Continuous Monitoring & Performance Management',
          description: 'Implementierung kontinuierlicher Überwachungs- und Performance Management-Systeme für ICT-Drittanbieter.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Automated Third-Party Monitoring und Alerting Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Performance Dashboards und KPI-Tracking'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Risk Scoring und Dynamic Risk Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Incident Management und Escalation Procedures'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Exit Strategy & Contingency Planning',
          description: 'Entwicklung strategischer Exit-Strategien und Contingency-Pläne für kritische ICT-Drittanbieter.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Strategic Exit Planning und Transition Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Business Continuity Planning und Alternative Provider Strategies'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Data Migration und Service Transition Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Contingency Testing und Recovery Validation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Regulatory Reporting & Documentation',
          description: 'Umfassende regulatorische Berichterstattung und Dokumentation für DORA Third-Party Risk Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'DORA-konforme Regulatory Reporting und Documentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Audit Trail Management und Evidence Collection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Supervisory Communication und Stakeholder Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Compliance Dashboard und Management Information Systems'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(doraThirdPartyRiskData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DORA Third-Party Risk Management page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
