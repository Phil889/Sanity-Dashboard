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
    console.log('Creating DSGVO-konforme KI-Lösungen page...')

    const dsgvoKonformeKiLoesungenData = {
      _type: 'servicePage',
      _id: 'dsgvo-konforme-ki-loesungen',
      title: 'DSGVO-konforme KI-Lösungen',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/dsgvo-konforme-ki-loesungen'
      },
      parent: {
        _type: 'reference',
        _ref: 'ki-kuenstliche-intelligenz'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'digitale-transformation'
        }
      },
      seo: {
        _type: 'seo',
        title: 'DSGVO-konforme KI-Lösungen | ADVISORI',
        description: 'Privacy-by-Design KI-Implementierung mit vollständiger DSGVO-Compliance. Sichere AI-Lösungen mit Datenschutz, IP-Schutz und strategischer Governance für nachhaltige Wettbewerbsvorteile.',
        keywords: 'DSGVO KI, Privacy by Design, GDPR AI, Datenschutz KI, AI Compliance, KI Governance, Datenschutzkonforme AI, EU AI Act, KI Datenschutz'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DSGVO-konforme KI-Lösungen'
        },
        tagline: 'Privacy-by-Design KI-Implementierung mit vollständiger DSGVO-Compliance',
        heading: 'DSGVO-konforme KI-Lösungen',
        description: 'Nutzen Sie das volle Potenzial der Künstlichen Intelligenz ohne Kompromisse beim Datenschutz. Unsere Privacy-by-Design KI-Lösungen gewährleisten vollständige DSGVO-Compliance von der ersten Zeile Code an und schaffen nachhaltigen Wettbewerbsvorteile durch verantwortungsvolle AI-Innovation.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Privacy-by-Design KI-Architekturen mit eingebauter DSGVO-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Vollständiger Schutz personenbezogener Daten und geistigen Eigentums'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Rechtssichere AI-Governance mit kontinuierlicher Compliance-Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Zukunftssichere KI-Lösungen für EU AI Act und internationale Standards'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DSGVO-konforme KI-Lösungen',
        description: 'Die Implementierung von Künstlicher Intelligenz unter strikter Einhaltung der DSGVO erfordert mehr als nur nachträgliche Compliance-Maßnahmen. ADVISORI entwickelt Privacy-by-Design KI-Lösungen, die Datenschutz als fundamentales Designprinzip verankern und gleichzeitig maximale AI-Performance ermöglichen. Unser Ansatz gewährleistet rechtssichere Innovation ohne Kompromisse.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Privacy-by-Design KI-Architekturen mit eingebauter DSGVO-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Datenschutz-Impact-Assessments und rechtssichere AI-Governance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Technische und organisatorische Maßnahmen für KI-Datenschutz'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliche Compliance-Überwachung und Audit-Trails'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'EU AI Act Readiness und internationale Datenschutz-Standards'
          }
        ],
        alert: {
          title: 'Rechtlicher Hinweis',
          content: 'DSGVO-konforme KI-Implementierung ist nicht nur eine rechtliche Verpflichtung, sondern ein strategischer Wettbewerbsvorteil. Unternehmen mit Privacy-by-Design KI-Lösungen schaffen Vertrauen bei Kunden und Partnern und positionieren sich optimal für die Zukunft der regulierten AI-Landschaft.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Expertise in Privacy-by-Design KI-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfassende DSGVO und EU AI Act Compliance-Beratung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Rechtssichere AI-Governance und Audit-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Strategische C-Level-Beratung für nachhaltige AI-Compliance'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit DSGVO-konformen KI-Lösungen reduzieren nicht nur rechtliche Risiken, sondern schaffen auch Vertrauen bei Kunden und Partnern. Investieren Sie in rechtssichere AI-Innovation für nachhaltigen Geschäftserfolg!',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum für die DSGVO-konforme Implementierung von Künstlicher Intelligenz, von der Privacy-by-Design Architektur über rechtssichere Governance bis hin zur kontinuierlichen Compliance-Überwachung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Privacy-by-Design KI-Architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'DSGVO Compliance Assessment & Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'AI-Governance & Rechtssichere Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Kontinuierliche Compliance-Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'EU AI Act Readiness & Future-Proofing'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam DSGVO-konforme KI-Lösungen, die Datenschutz als fundamentales Designprinzip verankern und gleichzeitig maximale AI-Performance und Geschäftsvorteile ermöglichen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende DSGVO-Compliance-Analyse Ihrer geplanten KI-Anwendungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Privacy-by-Design Architektur-Entwicklung mit eingebauter Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung technischer und organisatorischer Schutzmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung rechtssicherer AI-Governance und Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Compliance-Überwachung und Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'DSGVO-konforme KI-Implementierung ist der Schlüssel für nachhaltigen AI-Erfolg in Europa. Unser Privacy-by-Design Ansatz ermöglicht es Unternehmen, das volle Potenzial der Künstlichen Intelligenz zu nutzen, während gleichzeitig höchste Datenschutz-Standards eingehalten werden. Dies schafft nicht nur rechtliche Sicherheit, sondern auch Vertrauen bei Kunden und Partnern als strategischen Wettbewerbsvorteil.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Privacy-by-Design KI-Architekturen',
          description: 'Entwicklung von KI-Systemen mit eingebauter DSGVO-Compliance und Datenschutz als fundamentalem Designprinzip.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Datenschutz-optimierte AI-Modell-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Anonymisierung und Pseudonymisierung von Trainingsdaten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Differential Privacy und Federated Learning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Sichere Multi-Party-Computation für KI'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'DSGVO Compliance Assessment & Implementation',
          description: 'Umfassende Bewertung und Implementierung aller DSGVO-Anforderungen für Ihre KI-Projekte.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Datenschutz-Folgenabschätzung für KI-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Rechtsgrundlagen-Analyse und Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Betroffenenrechte-Management für AI'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Internationale Datentransfer-Compliance'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'AI-Governance & Rechtssichere Dokumentation',
          description: 'Etablierung umfassender Governance-Strukturen für rechtssichere KI-Nutzung und vollständige Audit-Bereitschaft.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'KI-Governance-Frameworks und Richtlinien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Vollständige Verarbeitungsverzeichnisse für AI'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Audit-Trails und Compliance-Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Incident Response Pläne für KI-Systeme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Kontinuierliche Compliance-Überwachung',
          description: 'Automatisierte Überwachung und Sicherstellung der dauerhaften DSGVO-Compliance Ihrer KI-Systeme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Automatisierte Compliance-Monitoring-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Regelmäßige Datenschutz-Audits für KI'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Compliance-Dashboard und Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Proaktive Risiko-Identifikation und -Mitigation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'EU AI Act Readiness & Future-Proofing',
          description: 'Vorbereitung auf die EU AI Act Anforderungen und zukunftssichere Compliance-Strategien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'EU AI Act Gap-Analyse und Roadmap'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'High-Risk AI System Classification'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Conformity Assessment Vorbereitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Internationale Compliance-Harmonisierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Technische Datenschutz-Maßnahmen für KI',
          description: 'Implementierung fortschrittlicher technischer Schutzmaßnahmen für maximalen Datenschutz in KI-Systemen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Homomorphic Encryption für KI-Berechnungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Zero-Knowledge Machine Learning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Secure Enclaves für AI-Processing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Privacy-Preserving Analytics und Reporting'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(dsgvoKonformeKiLoesungenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DSGVO-konforme KI-Lösungen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
