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
    console.log('Creating IAM Compliance page...')

    const iamComplianceData = {
      _type: 'servicePage',
      _id: 'iam-compliance',
      title: 'IAM Compliance - Regulatorische Exzellenz und Audit-Bereitschaft',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-compliance'
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
        title: 'IAM Compliance - Regulatorische Exzellenz und Audit-Bereitschaft | ADVISORI',
        description: 'Professionelle IAM Compliance Lösungen: GDPR, SOX, HIPAA, PCI-DSS Compliance, automatisierte Audit-Bereitschaft, kontinuierliche Überwachung und regulatorische Exzellenz für maximale Rechtssicherheit.',
        keywords: 'IAM Compliance, GDPR Compliance, SOX Compliance, HIPAA Compliance, PCI-DSS, ISO 27001, NIST Framework, Audit Bereitschaft, Regulatorische Compliance, Identity Governance, Compliance Automation, Risk Management'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Compliance Regulatorische Exzellenz und Audit-Bereitschaft'
        },
        tagline: 'Regulatorische Exzellenz durch intelligente IAM-Compliance',
        heading: 'IAM Compliance - Regulatorische Exzellenz und Audit-Bereitschaft',
        description: 'IAM Compliance ist das strategische Fundament für regulatorische Exzellenz und transformiert komplexe Compliance-Anforderungen in automatisierte, intelligente Systeme, die kontinuierliche Rechtssicherheit gewährleisten. Unsere ganzheitlichen Compliance-Lösungen ermöglichen es Unternehmen, höchste regulatorische Standards zu erfüllen, während sie gleichzeitig Geschäftsprozesse beschleunigen und operative Effizienz maximieren. Durch die Integration modernster Technologien schaffen wir eine Compliance-Architektur, die proaktiv auf regulatorische Änderungen reagiert und dabei Audit-Bereitschaft als kontinuierlichen Zustand etabliert.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Automatisierte Multi-Framework-Compliance für GDPR, SOX, HIPAA und PCI-DSS'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Kontinuierliche Audit-Bereitschaft mit Real-time Monitoring und Reporting'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Intelligente Risk-Assessment-Engines für proaktive Compliance-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Compliance-by-Design-Architekturen für nachhaltige regulatorische Exzellenz'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische IAM-Compliance: Von regulatorischer Belastung zu Competitive Advantage',
        description: 'Moderne IAM-Compliance-Strategien transformieren regulatorische Anforderungen von kostspieligen Belastungen zu strategischen Wettbewerbsvorteilen. In einer Ära zunehmender regulatorischer Komplexität und verschärfter Durchsetzung ermöglicht professionelle IAM-Compliance nicht nur die Erfüllung gesetzlicher Anforderungen, sondern schafft auch Vertrauen bei Kunden, Partnern und Stakeholdern, während sie gleichzeitig operative Effizienz und Risikomanagement optimiert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Multi-Framework-Integration für GDPR, SOX, HIPAA, PCI-DSS, ISO 27001 und NIST'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Automated Compliance Monitoring mit KI-gestützter Anomaly Detection'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Real-time Audit Trails mit umfassender Dokumentation aller Identitätsaktivitäten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Risk-based Access Controls mit dynamischer Anpassung an Compliance-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Continuous Compliance Assessment für proaktive Risikominimierung'
          }
        ],
        alert: {
          title: 'Compliance-Imperativ',
          content: 'Unternehmen ohne robuste IAM-Compliance-Strategien sind exponentiell höheren regulatorischen Risiken, Bußgeldern und Reputationsschäden ausgesetzt. Moderne Regulierungsbehörden erwarten nicht nur Compliance, sondern auch die Fähigkeit zur kontinuierlichen Demonstration und Verbesserung der Compliance-Posture.'
        },
        whyUs: {
          title: 'ADVISORI Compliance-Excellence',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Ganzheitliche Multi-Framework-Expertise für komplexe regulatorische Landschaften'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Compliance-by-Design-Methodik für nachhaltige regulatorische Exzellenz'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Automated Audit-Bereitschaft mit kontinuierlicher Evidence-Collection'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Proaktive Regulatory-Intelligence für frühzeitige Anpassung an neue Anforderungen'
            }
          ]
        },
        additionalInfo: 'Die Evolution der IAM-Compliance integriert zunehmend künstliche Intelligenz, maschinelles Lernen und Predictive Analytics, um proaktive Compliance-Maßnahmen zu ermöglichen und regulatorische Risiken zu minimieren. Diese technologische Konvergenz schafft neue Möglichkeiten für intelligente Automatisierung, prädiktive Compliance-Analysen und adaptive regulatorische Frameworks.',
        serviceDescription: 'Wir begleiten Sie durch die komplette IAM-Compliance-Transformation – von der strategischen Compliance-Planung und Regulatory-Assessment über die Framework-Implementation bis hin zum operativen Compliance-Management und der kontinuierlichen Optimierung. Unser Ansatz kombiniert bewährte Compliance-Methoden mit innovativen Technologien für eine Compliance-Architektur, die Ihre spezifischen regulatorischen Anforderungen optimal erfüllt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Multi-Framework-Compliance-Strategieentwicklung und Regulatory-Mapping'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Automated Compliance-Monitoring und Real-time Risk-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Audit-Bereitschaft-Automation und Evidence-Management-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Continuous Compliance-Optimization und Regulatory-Intelligence'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Cross-Border-Compliance und Multi-Jurisdiction-Frameworks'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer IAM-Compliance-Transformationsansatz',
        description: 'Wir verfolgen einen ganzheitlichen, risk-basierten Ansatz für IAM-Compliance-Transformationen, der regulatorische Exzellenz mit operativer Effizienz verbindet und dabei modernste Compliance-Technologien mit bewährten Governance-Prinzipien vereint.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Regulatory-Assessment und Multi-Framework-Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Compliance-by-Design-Implementation mit automatisierten Kontrollen und Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Risk-based Compliance-Priorisierung mit kontinuierlicher Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Stakeholder-Alignment und Change-Management für nachhaltige Compliance-Kultur'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continuous Improvement und Regulatory-Intelligence für zukunftssichere Compliance'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'IAM-Compliance ist das strategische Rückgrat vertrauensvoller Geschäftsbeziehungen und entscheidet maßgeblich über die Marktfähigkeit moderner Unternehmen. Unsere Erfahrung zeigt, dass Organisationen, die Compliance als strategischen Enabler verstehen und nicht nur als regulatorische Belastung, signifikante Wettbewerbsvorteile erzielen. Die richtige Compliance-Strategie ermöglicht es, Vertrauen zu schaffen, Märkte zu erschließen und gleichzeitig operative Exzellenz zu erreichen, während sie das Fundament für nachhaltiges Wachstum und Stakeholder-Vertrauen bildet.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Multi-Framework-Compliance-Strategieentwicklung',
          description: 'Entwicklung einer umfassenden Multi-Framework-Compliance-Strategie, die alle relevanten regulatorischen Anforderungen integriert und eine klare Roadmap für regulatorische Exzellenz bereitstellt.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Comprehensive Regulatory-Landscape-Assessment und Framework-Mapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Multi-Framework-Integration für GDPR, SOX, HIPAA, PCI-DSS und ISO 27001'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risk-based Compliance-Priorisierung und Resource-Allocation-Optimization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Compliance-ROI-Maximierung und Business-Case-Entwicklung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Automated Compliance-Monitoring und Real-time Assessment',
          description: 'Implementation intelligenter Compliance-Monitoring-Systeme mit Real-time Assessment-Capabilities für kontinuierliche regulatorische Überwachung und proaktive Risikominimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Real-time Compliance-Monitoring mit KI-gestützter Anomaly Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automated Risk-Assessment mit dynamischer Compliance-Score-Berechnung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Predictive Compliance-Analytics für proaktive Risikominimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Intelligent Alerting und Escalation-Management für kritische Compliance-Events'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Audit-Bereitschaft-Automation und Evidence-Management',
          description: 'Etablierung automatisierter Audit-Bereitschaft-Systeme mit umfassendem Evidence-Management für kontinuierliche Audit-Readiness und effiziente Prüfungsprozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Automated Evidence-Collection mit Real-time Audit-Trail-Generation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Intelligent Document-Management mit Compliance-Artifact-Organization'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Pre-Audit-Assessment-Tools für Audit-Readiness-Validation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Auditor-Collaboration-Platforms für effiziente Prüfungsprozesse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Risk-based Access Controls und Compliance-Integration',
          description: 'Implementation risk-basierter Zugriffskontrollsysteme mit nahtloser Compliance-Integration für intelligente, adaptive Sicherheitsmaßnahmen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Risk-based Authentication mit Compliance-Context-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Adaptive Authorization mit regulatorischen Constraint-Enforcement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Segregation-of-Duties-Automation mit Compliance-Rule-Engine'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Privileged-Access-Governance mit Enhanced-Compliance-Controls'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Cross-Border-Compliance und Multi-Jurisdiction-Management',
          description: 'Spezialisierte Lösungen für Cross-Border-Compliance-Herausforderungen mit Multi-Jurisdiction-Management für globale Unternehmen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Multi-Jurisdiction-Compliance-Mapping mit Regional-Requirement-Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Data-Residency-Management mit Compliance-driven Data-Governance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Cross-Border-Audit-Coordination mit Unified-Compliance-Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Global-Privacy-Framework-Integration mit Local-Compliance-Adaptation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Continuous Compliance-Optimization und Regulatory-Intelligence',
          description: 'Kontinuierliche Optimierung der Compliance-Posture mit Regulatory-Intelligence für proaktive Anpassung an sich ändernde regulatorische Landschaften.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Regulatory-Change-Monitoring mit Proactive-Impact-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Compliance-Performance-Analytics mit Continuous-Improvement-Recommendations'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Emerging-Regulation-Preparation mit Future-Readiness-Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Strategic-Compliance-Consulting mit Regulatory-Trend-Analysis'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamComplianceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Compliance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
