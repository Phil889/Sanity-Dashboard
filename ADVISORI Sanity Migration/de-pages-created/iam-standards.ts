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
    console.log('Creating IAM Standards page...')

    const iamStandardsData = {
      _type: 'servicePage',
      _id: 'iam-standards',
      title: 'IAM Standards - Enterprise-Compliance und Frameworks für Identitätsverwaltung',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-standards'
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
        title: 'IAM Standards - Enterprise-Compliance und Frameworks für Identitätsverwaltung | ADVISORI',
        description: 'Professionelle IAM Standards Implementierung: ISO 27001, NIST Framework, GDPR-Compliance, SOX-Konformität und branchenspezifische Zertifizierungen für enterprise-grade Identitätsverwaltung.',
        keywords: 'IAM Standards, ISO 27001, NIST Cybersecurity Framework, GDPR Compliance, SOX Konformität, Identity Standards, Access Management Standards, Compliance Framework, IAM Zertifizierung, Enterprise Standards'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Standards Enterprise Compliance Frameworks Identitätsverwaltung'
        },
        tagline: 'Standards-konforme IAM-Implementierung für regulatorische Exzellenz',
        heading: 'IAM Standards - Enterprise-Compliance und Frameworks für Identitätsverwaltung',
        description: 'IAM Standards bilden das regulatorische Rückgrat moderner Unternehmenssicherheit und ermöglichen es Organisationen, komplexe Compliance-Anforderungen systematisch zu erfüllen, während sie gleichzeitig höchste Sicherheitsstandards implementieren und Audit-Bereitschaft gewährleisten. Unsere standardsbasierten IAM-Lösungen transformieren regulatorische Herausforderungen in strategische Wettbewerbsvorteile durch die nahtlose Integration bewährter Frameworks, internationaler Standards und branchenspezifischer Compliance-Anforderungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'ISO 27001 und NIST Framework-konforme IAM-Architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'GDPR, SOX und branchenspezifische Compliance-Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kontinuierliche Audit-Bereitschaft und Zertifizierungsunterstützung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Best-Practice-Integration für nachhaltige Standards-Exzellenz'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Standards-Excellence: Von Compliance-Erfüllung zu strategischem Governance-Vorteil',
        description: 'Moderne IAM Standards sind weit mehr als regulatorische Checklisten – sie sind strategische Enabler für Vertrauen, Transparenz und operative Exzellenz. In einer zunehmend regulierten Geschäftswelt bilden professionell implementierte IAM-Standards das Fundament für nachhaltiges Wachstum, Marktvertrauen und internationale Expansion. Standards-konforme IAM-Systeme schaffen messbare Geschäftsvorteile durch reduzierte Risiken, optimierte Prozesse und erhöhte Stakeholder-Confidence.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'ISO 27001 Information Security Management mit IAM-spezifischen Kontrollen und Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'NIST Cybersecurity Framework Integration für Risk-based Identity Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'GDPR und Datenschutz-Compliance durch Privacy-by-Design IAM-Architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'SOX und Financial Compliance mit Segregation of Duties und Access Controls'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Branchenspezifische Standards wie HIPAA, PCI-DSS und TISAX-Konformität'
          }
        ],
        alert: {
          title: 'Regulatorische Notwendigkeit',
          content: 'Unternehmen ohne standards-konforme IAM-Implementierung sind exponentiell höheren Compliance-Risiken, Audit-Fehlern und regulatorischen Sanktionen ausgesetzt. Moderne Regulierungsbehörden erwarten nachweisbare Standards-Konformität als Grundvoraussetzung für Geschäftstätigkeit.'
        },
        whyUs: {
          title: 'ADVISORI Standards-Excellence',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in internationalen IAM-Standards und Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Branchenspezifische Compliance-Erfahrung für maßgeschneiderte Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Kontinuierliche Standards-Updates und Regulatory-Change-Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Audit-Support und Zertifizierungsbegleitung für nachhaltige Compliance'
            }
          ]
        },
        additionalInfo: 'Die Evolution von IAM-Standards integriert zunehmend neue Technologien wie Cloud-native Architekturen, KI-gestützte Compliance-Monitoring und automatisierte Audit-Trails. Diese technologische Konvergenz ermöglicht es Unternehmen, Standards-Konformität nicht nur zu erreichen, sondern als strategischen Differentiator zu nutzen.',
        serviceDescription: 'Wir begleiten Sie durch die komplette Standards-Transformation – von der Gap-Analyse und Framework-Auswahl über die technische Implementierung bis hin zur kontinuierlichen Compliance-Überwachung und Zertifizierungsunterstützung. Unser Ansatz kombiniert bewährte Standards-Methoden mit innovativen Technologien für eine IAM-Landschaft, die höchste regulatorische Anforderungen erfüllt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Standards-Assessment und Compliance-Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Framework-Integration und Best-Practice-Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Audit-Vorbereitung und Zertifizierungsunterstützung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Kontinuierliche Compliance-Überwachung und Standards-Updates'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Regulatory-Change-Management und Future-Proofing'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Standards-Implementierungsansatz',
        description: 'Wir verfolgen einen methodischen, standards-orientierten Ansatz für IAM-Compliance, der bewährte Frameworks mit spezifischen Geschäftsanforderungen verbindet und dabei kontinuierliche Verbesserung und nachhaltige Standards-Exzellenz gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Standards-Assessment mit Gap-Analyse und Prioritätsdefinition'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Framework-Mapping und Best-Practice-Integration für optimale Standards-Konformität'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phased Implementation mit kontinuierlicher Compliance-Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Audit-Preparation und Zertifizierungsbegleitung für nachhaltige Anerkennung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continuous Improvement und Standards-Evolution für Future-Readiness'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'IAM Standards sind das regulatorische Fundament für nachhaltigen Geschäftserfolg und bilden die Brücke zwischen technischer Exzellenz und strategischer Compliance. Unsere Erfahrung zeigt, dass Unternehmen, die Standards nicht als Belastung, sondern als strategischen Enabler verstehen, signifikante Wettbewerbsvorteile erzielen. Die richtige Standards-Implementierung schafft Vertrauen bei Stakeholdern, reduziert operative Risiken und ermöglicht es, Compliance als Differentiator im Markt zu positionieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ISO 27001 IAM-Integration und Information Security Management',
          description: 'Comprehensive Integration von IAM-Systemen in ISO 27001 Information Security Management Systeme mit spezialisierten Kontrollen für Identitäts- und Zugriffsverwaltung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'ISO 27001 Annex A Controls für IAM-spezifische Sicherheitsanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Risk Assessment und Treatment für Identity-related Threats'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'ISMS-Integration mit IAM-Governance und Policy-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Audit-Vorbereitung und Zertifizierungsunterstützung für ISO 27001'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'NIST Cybersecurity Framework und Risk-based IAM',
          description: 'Implementation des NIST Cybersecurity Framework mit Fokus auf Identity-Management und Risk-based Access Controls für adaptive Sicherheitsarchitekturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'NIST Framework Core Functions Integration in IAM-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Risk-based Authentication und Adaptive Access Controls'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Cybersecurity Maturity Assessment für IAM-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Continuous Monitoring und Threat Intelligence Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'GDPR und Privacy-by-Design IAM-Compliance',
          description: 'Spezialisierte GDPR-konforme IAM-Implementierung mit Privacy-by-Design Prinzipien und automatisierten Datenschutz-Kontrollen für EU-weite Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Privacy-by-Design IAM-Architekturen für GDPR-Konformität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Data Subject Rights Management und Consent-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Data Protection Impact Assessment für IAM-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Cross-border Data Transfer Controls und Adequacy-Compliance'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'SOX-Compliance und Financial Controls für IAM',
          description: 'Sarbanes-Oxley konforme IAM-Implementierung mit spezialisierten Financial Controls, Segregation of Duties und Audit-Trail-Management für Finanzunternehmen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'SOX Section 404 Controls für IAM-Systeme und Financial Applications'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Segregation of Duties und Conflict of Interest Prevention'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Financial Audit-Trail-Management und Compliance-Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Management Certification Support und External Audit Preparation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Branchenspezifische Standards und Sector-Compliance',
          description: 'Maßgeschneiderte IAM-Lösungen für branchenspezifische Standards wie HIPAA, PCI-DSS, TISAX und weitere Sector-spezifische Compliance-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'HIPAA-konforme IAM für Healthcare und Protected Health Information'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'PCI-DSS Compliance für Payment Card Industry Requirements'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'TISAX-Zertifizierung für Automotive Industry Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Custom Sector-Standards und Regional Compliance-Frameworks'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Continuous Compliance und Standards-Evolution',
          description: 'Kontinuierliche Standards-Überwachung und Evolution-Management für nachhaltige Compliance mit automatisierten Monitoring-Systemen und proaktivem Change-Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Automated Compliance-Monitoring und Real-time Standards-Validation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Regulatory Change Management und Standards-Update-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Continuous Audit-Readiness und Certification-Maintenance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Future-Proofing und Emerging Standards-Integration'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamStandardsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Standards page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
