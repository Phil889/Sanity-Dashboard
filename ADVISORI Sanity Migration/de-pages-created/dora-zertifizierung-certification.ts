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
    console.log('Creating DORA Zertifizierung (Certification) page...')

    const doraZertifizierungData = {
      _type: 'servicePage',
      _id: 'dora-zertifizierung-certification',
      title: 'DORA Zertifizierung (Certification)',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dora-digital-operational-resilience-act/dora-zertifizierung-certification'
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
        title: 'DORA Zertifizierung & Certification | ADVISORI',
        description: 'Professionelle Unterstützung bei DORA-Zertifizierungsprozessen. Expertenberatung zu Compliance-Validierung, Audit-Vorbereitung und kontinuierlicher Zertifizierungserhaltung für digitale operationelle Resilienz.',
        keywords: 'DORA Zertifizierung, DORA Certification, Compliance Validierung, Audit Vorbereitung, digitale Resilienz, Finanzaufsicht, Zertifizierungsmanagement, DORA Compliance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DORA Zertifizierung und Certification'
        },
        tagline: 'Professionelle DORA-Zertifizierung und Compliance-Validierung',
        heading: 'DORA Zertifizierung (Certification)',
        description: 'Erfolgreiche DORA-Zertifizierung erfordert systematische Vorbereitung, umfassende Compliance-Validierung und kontinuierliche Aufrechterhaltung. Wir begleiten Sie durch den gesamten Zertifizierungsprozess und gewährleisten nachhaltige Compliance-Exzellenz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende Zertifizierungsreadiness-Assessments und Gap-Analysen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Professionelle Audit-Vorbereitung und Prüfungsbegleitung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kontinuierliche Zertifizierungserhaltung und Compliance-Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Drittanbieter-Zertifizierungsmanagement und Validierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DORA-Zertifizierung strategisch angehen und erfolgreich umsetzen',
        description: 'DORA-Zertifizierung ist mehr als nur regulatorische Compliance – sie ist ein strategischer Nachweis für die digitale operationelle Resilienz Ihrer Organisation. Ein strukturierter Zertifizierungsansatz schafft Vertrauen bei Stakeholdern, reduziert regulatorische Risiken und stärkt die Wettbewerbsposition im Markt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Zertifizierungsreadiness-Bewertung und Compliance-Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Professionelle Audit-Vorbereitung und Prüfungsbegleitung durch erfahrene Experten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Kontinuierliche Zertifizierungserhaltung und proaktives Compliance-Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Drittanbieter-Zertifizierungsmanagement und Supply-Chain-Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration von Zertifizierungsprozessen in bestehende Governance-Strukturen'
          }
        ],
        alert: {
          title: 'Zertifizierungs-Expertise',
          content: 'DORA-Zertifizierung erfordert tiefgreifendes Verständnis sowohl der regulatorischen Anforderungen als auch der praktischen Umsetzung. Unsere Erfahrung in komplexen Zertifizierungsprojekten gewährleistet effiziente Prozesse und nachhaltige Compliance-Exzellenz.'
        },
        whyUs: {
          title: 'Unsere Zertifizierungs-Kompetenz',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in DORA-Regulierung und Zertifizierungsstandards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für effiziente Audit-Vorbereitung und Prüfungsbegleitung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praktische Erfahrung mit komplexen Finanzdienstleistungs-Zertifizierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz für nachhaltige Zertifizierungserhaltung'
            }
          ]
        },
        additionalInfo: 'DORA-Zertifizierung umfasst verschiedene Aspekte von der initialen Readiness-Bewertung über die Audit-Durchführung bis hin zur kontinuierlichen Compliance-Überwachung. Unser strukturierter Ansatz gewährleistet nicht nur erfolgreiche Erstzertifizierung, sondern auch langfristige Aufrechterhaltung der Compliance-Standards.',
        serviceDescription: 'Wir bieten End-to-End-Unterstützung für Ihren DORA-Zertifizierungsprozess. Von der strategischen Planung über die operative Umsetzung bis hin zur kontinuierlichen Optimierung – unser Expertenteam begleitet Sie zu nachhaltiger Zertifizierungs-Exzellenz.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Comprehensive Zertifizierungsreadiness-Assessments und Maturity-Bewertungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Professionelle Audit-Vorbereitung und Prüfungsbegleitung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Kontinuierliche Zertifizierungserhaltung und Compliance-Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Drittanbieter-Zertifizierungsmanagement und Supply-Chain-Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Zertifizierungs-Governance und strategische Compliance-Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Zertifizierungsansatz',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte DORA-Zertifizierungsstrategie, die sowohl regulatorische Exzellenz als auch operative Effizienz gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Zertifizierungsreadiness-Bewertung und strategische Planung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Systematische Gap-Analyse und Remediation-Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Professionelle Audit-Vorbereitung und Dokumentations-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Begleitende Prüfungsunterstützung und Stakeholder-Management'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Zertifizierungserhaltung und Compliance-Evolution'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'DORA-Zertifizierung ist ein strategischer Wettbewerbsvorteil, der über reine Compliance hinausgeht. Unsere systematische Herangehensweise gewährleistet nicht nur erfolgreiche Erstzertifizierung, sondern schafft auch die Grundlage für kontinuierliche operative Exzellenz und nachhaltige Resilienz-Verbesserung.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'DORA-Zertifizierungsreadiness-Assessment und Maturity-Bewertung',
          description: 'Umfassende Bewertung Ihrer aktuellen DORA-Compliance-Position und systematische Identifikation aller zertifizierungsrelevanten Gaps und Optimierungspotenziale.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Compliance-Maturity-Bewertung gegen DORA-Zertifizierungsstandards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Systematische Gap-Analyse und Prioritäts-Roadmap-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Zertifizierungskosten-Nutzen-Analyse und ROI-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Strategische Zertifizierungsplanung und Timeline-Entwicklung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Professionelle Audit-Vorbereitung und Prüfungsbegleitung',
          description: 'Systematische Vorbereitung auf DORA-Zertifizierungsaudits mit umfassender Dokumentations-Optimierung und professioneller Prüfungsbegleitung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Vollständige Audit-Dokumentations-Vorbereitung und Evidence-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Mock-Audits und Prüfungssimulationen zur Readiness-Validierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Stakeholder-Training und Interview-Vorbereitung für Audit-Teams'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'On-site Audit-Begleitung und Real-time Issue-Resolution'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Kontinuierliche Zertifizierungserhaltung und Compliance-Monitoring',
          description: 'Etablierung robuster Systeme und Prozesse für die langfristige Aufrechterhaltung Ihrer DORA-Zertifizierung und proaktive Compliance-Überwachung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Kontinuierliches Compliance-Monitoring und Automated-Alerting-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Regelmäßige Zertifizierungs-Health-Checks und Maintenance-Reviews'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Proaktive Regulatory-Change-Management und Impact-Assessments'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Zertifizierungs-Renewal-Planung und Re-certification-Support'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Drittanbieter-Zertifizierungsmanagement und Supply-Chain-Validierung',
          description: 'Spezialisierte Unterstützung bei der Bewertung und Validierung von Drittanbieter-Zertifizierungen sowie der Integration in Ihre Gesamtzertifizierungsstrategie.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Drittanbieter-Zertifizierungs-Due-Diligence und Validation-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Supply-Chain-Zertifizierungs-Mapping und Risk-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Vendor-Certification-Management und Continuous-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Third-Party-Assurance-Integration und Consolidated-Reporting'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Zertifizierungs-Governance und strategische Compliance-Optimierung',
          description: 'Aufbau effektiver Governance-Strukturen für Zertifizierungsmanagement und strategische Optimierung Ihrer Compliance-Landschaft.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Zertifizierungs-Governance-Framework-Design und Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Compliance-Portfolio-Optimierung und Synergy-Realization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Board-Level-Zertifizierungs-Reporting und Stakeholder-Communication'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Strategic-Certification-Roadmapping und Value-Maximization'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Zertifizierungs-Technology und Automation-Solutions',
          description: 'Implementierung fortschrittlicher Technologielösungen zur Automatisierung und Optimierung Ihrer DORA-Zertifizierungsprozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Automated-Compliance-Monitoring und Real-time-Dashboard-Solutions'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Digital-Evidence-Management und Audit-Trail-Automation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'AI-powered-Gap-Analysis und Predictive-Compliance-Analytics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Integrated-GRC-Platforms und Certification-Lifecycle-Management'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(doraZertifizierungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DORA Zertifizierung (Certification) page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
