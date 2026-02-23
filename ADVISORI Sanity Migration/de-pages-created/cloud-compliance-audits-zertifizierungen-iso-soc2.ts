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
    console.log('Creating Cloud Compliance Audits & Zertifizierungen (ISO, SOC2) page...')

    const cloudComplianceAuditsData = {
      _type: 'servicePage',
      _id: 'cloud-compliance-audits-zertifizierungen-iso-soc2',
      title: 'Cloud Compliance Audits & Zertifizierungen (ISO, SOC2)',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/cloud-compliance/cloud-compliance-audits-zertifizierungen-iso-soc2'
      },
      parent: {
        _type: 'reference',
        _ref: 'cloud-compliance'
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
        title: 'Cloud Compliance Audits & Zertifizierungen (ISO, SOC2) | ADVISORI',
        description: 'Professionelle Cloud Compliance Audits und Zertifizierungsbegleitung für ISO 27001, SOC2 und weitere Standards. Sichern Sie Ihre Cloud-Infrastruktur ab.',
        keywords: 'Cloud Compliance, ISO 27001, SOC2, Cloud Audits, Zertifizierung, Cloud Sicherheit, Compliance Management'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Cloud Compliance Audits & Zertifizierungen'
        },
        tagline: 'Vertrauen durch zertifizierte Cloud-Sicherheit schaffen',
        heading: 'Cloud Compliance Audits & Zertifizierungen (ISO, SOC2)',
        description: 'Stärken Sie das Vertrauen in Ihre Cloud-Services durch professionelle Compliance-Audits und international anerkannte Zertifizierungen wie ISO 27001, SOC2 und weitere branchenspezifische Standards.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Erhöhung der Kundenakzeptanz und des Marktvertrauens'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Erfüllung regulatorischer Anforderungen und Compliance-Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Systematische Identifikation und Behebung von Sicherheitslücken'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Wettbewerbsvorteile durch nachgewiesene Cloud-Sicherheit'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Cloud Compliance Audits & Zertifizierungen',
        description: 'In der digitalen Transformation sind Cloud-Services essentiell für Geschäftserfolg. Gleichzeitig steigen die Anforderungen an Datenschutz, Sicherheit und Compliance. Unsere Cloud Compliance Audits und Zertifizierungsbegleitung helfen Ihnen, höchste Sicherheitsstandards zu erreichen und das Vertrauen Ihrer Kunden zu stärken.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Gap-Analyse bestehender Cloud-Infrastrukturen gegen relevante Standards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Begleitung bei ISO 27001, SOC2, PCI DSS und branchenspezifischen Zertifizierungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung von Compliance-Frameworks und Kontrollmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Durchführung unabhängiger Security-Assessments und Penetrationstests'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Wartung der Compliance-Posture'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Cloud Compliance ist kein einmaliges Projekt, sondern ein kontinuierlicher Prozess. Erfolgreiche Unternehmen etablieren eine Compliance-by-Design-Mentalität und integrieren Sicherheitskontrollen in alle Cloud-Operationen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in Cloud-Security und internationalen Compliance-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrene Auditoren mit Zertifizierungen in ISO 27001, CISA und CISSP'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenübergreifende Erfahrung in Fintech, Healthcare und E-Commerce'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von der Strategie bis zur operativen Umsetzung'
            }
          ]
        },
        additionalInfo: 'Studien zeigen, dass zertifizierte Cloud-Services die Kundenakzeptanz um bis zu 40% steigern und gleichzeitig das Risiko von Sicherheitsvorfällen um 60% reduzieren können. Investieren Sie in nachweisbare Cloud-Sicherheit!',
        serviceDescription: 'Wir bieten umfassende Cloud Compliance Services von der initialen Bewertung über die Implementierung bis zur erfolgreichen Zertifizierung. Unser Team begleitet Sie durch den gesamten Audit-Prozess und sorgt für nachhaltige Compliance-Exzellenz.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Cloud Security Assessment und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'ISO 27001 und SOC2 Zertifizierungsbegleitung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Multi-Cloud Compliance Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Penetrationstests und Vulnerability Assessments'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Compliance-Überwachung und -Reporting'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und risikobasierten Ansatz für Cloud Compliance, der sowohl technische Exzellenz als auch geschäftliche Anforderungen berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der bestehenden Cloud-Architektur und Identifikation von Compliance-Gaps'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Definition einer maßgeschneiderten Compliance-Strategie und Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung von Sicherheitskontrollen und Governance-Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Durchführung von Pre-Assessments und Mock-Audits'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Begleitung durch den Zertifizierungsprozess und kontinuierliche Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die Cloud Compliance Expertise von ADVISORI hat uns geholfen, nicht nur die ISO 27001 Zertifizierung zu erreichen, sondern auch das Vertrauen unserer Enterprise-Kunden signifikant zu stärken. Die strukturierte Herangehensweise und tiefgreifende technische Kompetenz waren entscheidend für unseren Erfolg.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ISO 27001 Cloud Zertifizierung',
          description: 'Comprehensive Begleitung zur ISO 27001 Zertifizierung für Cloud-basierte Informationssicherheitsmanagementsysteme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'ISMS-Design speziell für Cloud-Umgebungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Risk Assessment und Treatment Plan'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Dokumentation und Prozessoptimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Audit-Vorbereitung und -Begleitung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'SOC2 Type II Compliance',
          description: 'Professionelle Begleitung zur SOC2 Type II Zertifizierung für maximales Kundenvertrauen in Ihre Cloud-Services.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Trust Services Criteria Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Control Design und Operating Effectiveness'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Evidence Collection und Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Readiness Assessment und Audit Support'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(cloudComplianceAuditsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Cloud Compliance Audits & Zertifizierungen (ISO, SOC2) page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
