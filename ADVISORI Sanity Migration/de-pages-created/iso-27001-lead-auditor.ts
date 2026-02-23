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
    console.log('Creating ISO 27001 Lead Auditor page...')

    const iso27001LeadAuditorData = {
      _type: 'servicePage',
      _id: 'iso-27001-lead-auditor',
      title: 'ISO 27001 Lead Auditor',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-lead-auditor'
      },
      parent: {
        _type: 'reference',
        _ref: 'iso-27001'
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
        title: 'ISO 27001 Lead Auditor Services | Expert Audit Leadership | ADVISORI',
        description: 'Professionelle ISO 27001 Lead Auditor Services von erfahrenen Experten. Umfassende Audit-Führung, strategische Bewertung und Compliance-Expertise für Ihre Informationssicherheit.',
        keywords: 'ISO 27001 Lead Auditor, Lead Auditor Services, ISO 27001 Audit, ISMS Audit, Information Security Audit, Lead Auditor Expertise, Audit Leadership, Compliance Audit'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Lead Auditor Services und professionelle Audit-Führung'
        },
        tagline: 'Professionelle Audit-Führung für Information Security Excellence',
        heading: 'ISO 27001 Lead Auditor Services',
        description: 'Vertrauen Sie auf unsere erfahrenen Lead Auditoren für umfassende ISO 27001 Audits. Wir bieten strategische Audit-Führung, tiefgreifende Compliance-Bewertung und wertschöpfende Empfehlungen, die Ihre Informationssicherheits-Managementsysteme stärken und kontinuierliche Verbesserung fördern.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Erfahrene Lead Auditoren mit umfassender ISMS-Expertise und Branchenkenntnissen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strategische Audit-Ansätze mit Fokus auf Geschäftswert und Risikominimierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Ganzheitliche Bewertung von Managementsystem-Effektivität und Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Actionable Empfehlungen für kontinuierliche Verbesserung und Reifegradsteigerung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Professionelle Lead Auditor Expertise für strategische Information Security Governance',
        description: 'Unsere ISO 27001 Lead Auditor Services kombinieren tiefgreifende technische Expertise mit strategischem Geschäftsverständnis, um Organisationen bei der Bewertung, Optimierung und kontinuierlichen Verbesserung ihrer Informationssicherheits-Managementsysteme zu unterstützen. Wir gehen über reine Compliance-Prüfungen hinaus und fokussieren auf Wertschöpfung und Risikominimierung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Audit-Planung basierend auf Geschäftskontext und Risikoprofil der Organisation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Umfassende Bewertung von ISMS-Effektivität durch systematische Evidenz-Sammlung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration aktueller Bedrohungslandschaften und regulatorischer Entwicklungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung maßgeschneiderter Verbesserungsempfehlungen mit Priorisierung und Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Unterstützung bei der Implementierung von Audit-Empfehlungen'
          }
        ],
        alert: {
          title: 'Audit Excellence',
          content: 'Unsere Lead Auditoren bringen jahrelange Erfahrung aus verschiedenen Branchen und Organisationsgrößen mit. Diese Vielfalt ermöglicht es uns, Best Practices zu identifizieren und maßgeschneiderte Lösungen zu entwickeln, die über Standard-Compliance hinausgehen.'
        },
        whyUs: {
          title: 'Unsere Lead Auditor Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'International zertifizierte Lead Auditoren mit nachgewiesener Audit-Excellence'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Branchenübergreifende Erfahrung in komplexen organisatorischen Umgebungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Kontinuierliche Weiterbildung in emerging Technologies und Bedrohungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Fokus auf Geschäftswert und strategische Ausrichtung der Informationssicherheit'
            }
          ]
        },
        additionalInfo: 'Unsere Lead Auditor Services sind darauf ausgelegt, nicht nur Compliance zu bewerten, sondern auch strategische Einblicke zu liefern, die Organisationen dabei helfen, ihre Informationssicherheits-Posture zu stärken und Wettbewerbsvorteile zu schaffen.',
        serviceDescription: 'Wir bieten umfassende Lead Auditor Services, die alle Aspekte der ISO 27001 Compliance abdecken, von der strategischen Audit-Planung bis zur Nachverfolgung von Verbesserungsmaßnahmen. Unser Ansatz ist darauf ausgelegt, maximalen Wert für Ihre Organisation zu schaffen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Audit-Planung und Risiko-basierte Bewertungsansätze'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Umfassende ISMS-Bewertung mit Fokus auf Effektivität und Effizienz'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Stakeholder-Management und Executive-Level Kommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Entwicklung actionable Verbesserungsempfehlungen mit Business Case'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Unterstützung und Follow-up für nachhaltige Verbesserung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unsere Systematische Lead Auditor Methodik',
        description: 'Wir verwenden eine bewährte, strukturierte Methodik, die strategische Geschäftsausrichtung mit rigoroser technischer Bewertung kombiniert, um umfassende und wertschöpfende Audit-Ergebnisse zu liefern.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Audit-Planung basierend auf Geschäftskontext und Risikoprofil'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Systematische Evidenz-Sammlung durch strukturierte Interviews und Dokumentenanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Ganzheitliche Bewertung von Managementsystem-Effektivität und Compliance-Status'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung priorisierter Empfehlungen mit klarem Business Case und ROI'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Unterstützung bei der Implementierung und Nachverfolgung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Professionelle Lead Auditor Services sind der Schlüssel für effektive Information Security Governance. Unsere erfahrenen Lead Auditoren bringen nicht nur technische Expertise mit, sondern auch das strategische Verständnis, um Organisationen dabei zu helfen, ihre Informationssicherheits-Investitionen zu optimieren und nachhaltigen Geschäftswert zu schaffen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ISO 27001 Zertifizierungs-Audits',
          description: 'Professionelle Durchführung von Zertifizierungs-Audits für ISO 27001 Compliance mit strategischem Fokus.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Bewertung der ISO 27001 Compliance und ISMS-Effektivität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Strategische Audit-Planung basierend auf Geschäftskontext und Risikoprofil'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Systematische Evidenz-Sammlung und objektive Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Professionelle Berichterstattung mit actionable Empfehlungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Überwachungs- und Rezertifizierungs-Audits',
          description: 'Kontinuierliche Bewertung der ISMS-Performance und Compliance-Aufrechterhaltung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Regelmäßige Überwachung der ISMS-Effektivität und Compliance-Status'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Bewertung der Implementierung vorheriger Audit-Empfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Identifikation neuer Risiken und Verbesserungsmöglichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Optimierung der Informationssicherheits-Posture'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Gap-Analyse und Pre-Audit Assessments',
          description: 'Strategische Bewertung der Audit-Readiness und Identifikation von Verbesserungsbereichen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Umfassende Gap-Analyse gegen ISO 27001 Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Bewertung der Audit-Readiness und Identifikation kritischer Bereiche'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Entwicklung priorisierter Roadmap für Compliance-Verbesserung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Vorbereitung auf formale Zertifizierungs-Audits'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Multi-Site und Complex Organization Audits',
          description: 'Spezialisierte Audit-Services für komplexe organisatorische Strukturen und Multi-Site-Umgebungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Koordination komplexer Multi-Site-Audits mit einheitlichen Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Bewertung von ISMS-Konsistenz über verschiedene Standorte und Geschäftsbereiche'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Management kultureller und regulatorischer Unterschiede'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Entwicklung einheitlicher Governance-Strukturen und Standards'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Specialized Industry Audits',
          description: 'Branchenspezifische Audit-Services mit Fokus auf sektorale Anforderungen und Best Practices.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Finanzdienstleistungen mit DORA, PCI-DSS und regulatorischen Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Gesundheitswesen mit HIPAA, GDPR und medizinischen Geräte-Sicherheit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Kritische Infrastrukturen mit NIS2, IEC 62443 und Operational Technology'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Cloud Service Provider mit SOC 2, FedRAMP und Multi-Tenancy-Sicherheit'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Audit Quality Assurance und Second Opinion',
          description: 'Qualitätssicherung und unabhängige Bewertung bestehender Audit-Ergebnisse und -Prozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Qualitätsbewertung bestehender Audit-Berichte und -Empfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Unabhängige Second Opinion zu kritischen Audit-Befunden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Bewertung der Angemessenheit von Korrekturmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Optimierung interner Audit-Prozesse und -Methodologien'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001LeadAuditorData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 Lead Auditor page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
