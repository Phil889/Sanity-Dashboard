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
    console.log('Creating Privacy Program Technische Organisatorische Kontrollen page...')

    const privacyProgramTechnischeOrganisatorischeKontrollenData = {
      _type: 'servicePage',
      _id: 'privacy-program-technische-organisatorische-kontrollen',
      title: 'Privacy Program Technische Organisatorische Kontrollen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/privacy-program/privacy-program-privacy-controls-audit-support/privacy-program-technische-organisatorische-kontrollen'
      },
      parent: {
        _type: 'reference',
        _ref: 'privacy-program-privacy-controls-audit-support'
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
        title: 'Privacy Program Technische Organisatorische Kontrollen | ADVISORI',
        description: 'Expertenlösungen für technische und organisatorische Datenschutzkontrollen nach GDPR Artikel 32. Umfassende Beratung zu Privacy by Design, Datenschutz-Folgenabschätzung und Compliance-Validierung.',
        keywords: 'Technische Organisatorische Kontrollen, GDPR Artikel 32, Privacy by Design, Datenschutz-Folgenabschätzung, DPIA, Privacy Controls, Datenschutz Audit, Privacy Governance, Datenschutz Compliance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Privacy Program Technische Organisatorische Kontrollen'
        },
        tagline: 'Expertenlösungen für robuste Datenschutzkontrollen und Privacy Governance',
        heading: 'Privacy Program Technische Organisatorische Kontrollen',
        description: 'GDPR Artikel 32 definiert umfassende Anforderungen an technische und organisatorische Maßnahmen zum Schutz personenbezogener Daten. Wir unterstützen Sie bei der strategischen Implementierung von Privacy by Design-Prinzipien, robusten Datenschutzkontrollen und nachhaltigen Privacy Governance-Frameworks zur Sicherstellung Ihrer Datenschutz-Compliance.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'GDPR-konforme technische und organisatorische Datenschutzmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Privacy by Design Integration in Geschäftsprozesse und IT-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Umfassende Datenschutz-Folgenabschätzung und Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Privacy Compliance Überwachung und Audit-Support'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Privacy Program Technische Organisatorische Kontrollen',
        description: 'Die Implementierung wirksamer technischer und organisatorischer Kontrollen ist das Herzstück jedes erfolgreichen Privacy Programs. GDPR Artikel 32 fordert angemessene technische und organisatorische Maßnahmen, die über grundlegende Sicherheitsmaßnahmen hinausgehen und eine ganzheitliche Privacy-by-Design-Philosophie verkörpern. Wir entwickeln maßgeschneiderte Kontrollframeworks, die nicht nur regulatorische Compliance gewährleisten, sondern auch Vertrauen schaffen und Geschäftswert durch verantwortungsvolle Datenverarbeitung generieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung GDPR-konformer technischer Datenschutzkontrollen und Sicherheitsarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung organisatorischer Privacy Governance und Compliance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Privacy by Design Integration in Produktentwicklung und Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Durchführung umfassender Datenschutz-Folgenabschätzungen und Risikobewertungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Aufbau kontinuierlicher Privacy Monitoring und Audit-Systeme'
          }
        ],
        alert: {
          title: 'Regulatorischer Hinweis',
          content: 'GDPR Artikel 32 erfordert von Verantwortlichen und Auftragsverarbeitern die Implementierung angemessener technischer und organisatorischer Maßnahmen unter Berücksichtigung des Stands der Technik und der Implementierungskosten. Eine proaktive und risikobasierte Herangehensweise ist entscheidend für nachhaltige Compliance.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in GDPR-Anforderungen und internationalen Privacy Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung in Privacy by Design und Data Protection Engineering'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von strategischer Planung bis zur technischen Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Innovative Automatisierungslösungen für kontinuierliche Privacy Compliance'
            }
          ]
        },
        additionalInfo: 'Technische und organisatorische Kontrollen im Privacy-Kontext erfordern eine ausgewogene Balance zwischen Datenschutz, Sicherheit und Geschäftsanforderungen. Unsere Lösungen integrieren bewährte Privacy Engineering-Prinzipien mit modernen Technologien und schaffen nachhaltige Compliance-Frameworks.',
        serviceDescription: 'Wir bieten ein umfassendes Leistungsspektrum für technische und organisatorische Datenschutzkontrollen, das von der strategischen Privacy-Architektur bis zur operativen Umsetzung und kontinuierlichen Optimierung reicht. Unser Ansatz kombiniert regulatorische Expertise mit innovativen Privacy-Technologien.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Technical Privacy Controls Design und Implementation nach GDPR Artikel 32'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Organizational Privacy Governance Framework Development und Rollout'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Privacy by Design Integration und Data Protection Engineering'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Data Protection Impact Assessment (DPIA) und Privacy Risk Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Privacy Audit Support und Continuous Compliance Monitoring'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine maßgeschneiderte Privacy Control-Strategie, die regulatorische Anforderungen erfüllt und gleichzeitig Ihre Geschäftsziele unterstützt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer Datenverarbeitungslandschaft und Privacy-Risiken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer risikobasierten Privacy Control-Strategie und Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung technischer und organisatorischer Datenschutzmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration von Privacy Controls in bestehende Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Anpassung an evolvierende Anforderungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Technische und organisatorische Datenschutzkontrollen sind das Fundament vertrauensvoller Datenverarbeitung. Unsere integrierten Privacy Control-Frameworks ermöglichen es Unternehmen, nicht nur GDPR-Compliance zu erreichen, sondern Datenschutz als strategischen Wettbewerbsvorteil zu nutzen und nachhaltiges Vertrauen bei Kunden und Stakeholdern aufzubauen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Technical Privacy Controls Implementation',
          description: 'Entwicklung und Implementierung technischer Datenschutzmaßnahmen nach GDPR Artikel 32 und internationalen Privacy Standards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Verschlüsselungsstrategien und Kryptographie-Management für Datenschutz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Zugriffskontrollsysteme und Identity & Access Management für Privacy'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Datenminimierung und Pseudonymisierungstechnologien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Privacy-enhancing Technologies (PETs) Integration und Deployment'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Organizational Privacy Governance Framework',
          description: 'Aufbau umfassender organisatorischer Datenschutzstrukturen und Governance-Frameworks für nachhaltige Privacy Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Privacy Governance-Strukturen und Rollen-/Verantwortlichkeitsmatrizen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Datenschutzrichtlinien und Verfahrensanweisungen Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Privacy Training Programme und Awareness-Kampagnen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Incident Response und Breach Notification Procedures'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Privacy by Design Integration',
          description: 'Systematische Integration von Privacy by Design-Prinzipien in Produktentwicklung, Geschäftsprozesse und IT-Architekturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Privacy by Design Methodology und Framework Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Data Protection Engineering und Privacy-First Architecture'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Privacy Impact Assessment Integration in Entwicklungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Default Privacy Settings und Consent Management Implementation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Data Protection Impact Assessment (DPIA) Support',
          description: 'Umfassende Unterstützung bei der Durchführung von Datenschutz-Folgenabschätzungen und Privacy Risk Assessments.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'DPIA Methodology Development und Template-Erstellung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Privacy Risk Assessment und Impact Analysis Durchführung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Stakeholder Consultation und Expert Review Processes'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Mitigation Strategy Development und Implementation Planning'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Privacy Audit und Compliance Validation',
          description: 'Systematische Überprüfung und Validierung der Wirksamkeit technischer und organisatorischer Datenschutzkontrollen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Privacy Control Effectiveness Assessment und Gap Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'GDPR Compliance Audit und Regulatory Readiness Review'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Third-Party Privacy Assessment und Vendor Due Diligence'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Continuous Monitoring Setup und Automated Compliance Reporting'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Privacy Risk Management und Monitoring',
          description: 'Aufbau kontinuierlicher Privacy Risk Management-Systeme und Real-time Compliance Monitoring-Lösungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Privacy Risk Register Development und Risk Scoring Methodologies'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Real-time Privacy Monitoring und Alerting Systems'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Privacy Metrics und KPI Dashboard Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Automated Privacy Control Testing und Validation Frameworks'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(privacyProgramTechnischeOrganisatorischeKontrollenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Privacy Program Technische Organisatorische Kontrollen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
