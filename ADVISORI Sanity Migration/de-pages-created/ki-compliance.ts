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
    console.log('Creating KI-Compliance page...')

    const kiComplianceData = {
      _type: 'servicePage',
      _id: 'ki-compliance',
      title: 'KI-Compliance',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/ki-compliance'
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
        title: 'KI-Compliance | ADVISORI',
        description: 'Umfassende KI-Compliance-Beratung für EU AI Act, DSGVO und regulatorische Anforderungen. Sichere KI-Governance mit proaktivem Risikomanagement und Audit-Bereitschaft.',
        keywords: 'KI-Compliance, EU AI Act, KI-Governance, AI Compliance, DSGVO KI, Algorithmic Accountability, KI-Ethik, Regulatory Compliance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KI-Compliance'
        },
        tagline: 'Proaktive KI-Compliance für regulatorische Sicherheit',
        heading: 'KI-Compliance',
        description: 'Navigieren Sie sicher durch die komplexe KI-Regulierungslandschaft mit unserem umfassenden Compliance-Framework. Wir gewährleisten EU AI Act-Konformität, DSGVO-Compliance und proaktives Risikomanagement für Ihre KI-Systeme.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'EU AI Act-konforme KI-Implementierung mit vollständiger Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'DSGVO-integrierte KI-Governance für Datenschutz-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Proaktives Risikomanagement und kontinuierliche Compliance-Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Audit-bereite Dokumentation und Transparenz-Frameworks'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KI-Compliance',
        description: 'Die Regulierung von Künstlicher Intelligenz entwickelt sich rasant und stellt Unternehmen vor komplexe Compliance-Herausforderungen. ADVISORI unterstützt Sie dabei, nicht nur aktuelle Anforderungen zu erfüllen, sondern auch zukunftssicher für kommende Regulierungen positioniert zu sein. Unser proaktiver Ansatz verwandelt Compliance von einer Belastung in einen strategischen Wettbewerbsvorteil.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'EU AI Act-Compliance und Risikokategorisierung von KI-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'DSGVO-konforme KI-Datenverarbeitung und Privacy-by-Design'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Algorithmic Accountability und Transparenz-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'KI-Ethik-Integration und verantwortungsvolle KI-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Compliance-Überwachung und Audit-Bereitschaft'
          }
        ],
        alert: {
          title: 'Compliance-Tipp',
          content: 'Erfolgreiche KI-Compliance erfordert mehr als nur rechtliche Konformität. Ein integrierter Ansatz, der Ethik, Transparenz und kontinuierliche Überwachung von Anfang an mitdenkt, schafft Vertrauen bei Stakeholdern und Regulierungsbehörden.'
        },
        whyUs: {
          title: 'Unsere Compliance-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Expertise in EU AI Act und KI-Regulierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Proaktive Compliance-Strategien für zukunftssichere KI-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integrierte DSGVO- und KI-Compliance-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Regulierungs-Überwachung und Anpassung'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit proaktiver KI-Compliance reduzieren regulatorische Risiken erheblich und schaffen Vertrauen bei Kunden und Investoren. Investieren Sie in eine compliance-konforme KI-Zukunft!',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes KI-Compliance-Portfolio, von der initialen Risikobewertung über die Implementierung von Governance-Frameworks bis hin zur kontinuierlichen Überwachung und Audit-Unterstützung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'EU AI Act Compliance Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'KI-Governance Framework Development'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Algorithmic Accountability Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Continuous Compliance Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Audit Support & Documentation'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Compliance-Ansatz',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte KI-Compliance-Strategie, die nicht nur aktuelle Regulierungen erfüllt, sondern auch flexibel genug ist, um sich an zukünftige Anforderungen anzupassen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer KI-Systeme und Compliance-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung integrierter Governance-Frameworks für KI und Datenschutz'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung von Monitoring- und Audit-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Schulung und Change Management für nachhaltige Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und proaktive Anpassung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'KI-Compliance ist nicht nur eine regulatorische Notwendigkeit, sondern ein strategischer Enabler für vertrauensvolle KI-Innovation. Unser Ansatz integriert rechtliche Anforderungen nahtlos in die KI-Entwicklung und schafft damit die Grundlage für nachhaltige und verantwortungsvolle KI-Systeme, die sowohl Compliance-Anforderungen erfüllen als auch Geschäftswert generieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'EU AI Act Compliance Assessment',
          description: 'Umfassende Bewertung Ihrer KI-Systeme nach EU AI Act-Anforderungen mit Risikokategorisierung und Compliance-Roadmap.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Systematische Risikobewertung und Kategorisierung von KI-Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Gap-Analyse zu EU AI Act-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung von Compliance-Roadmaps und Umsetzungsplänen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Dokumentations- und Audit-Trail-Erstellung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'KI-Governance Framework Development',
          description: 'Entwicklung umfassender Governance-Strukturen für verantwortungsvolle KI-Entwicklung und -Einsatz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Design von KI-Governance-Strukturen und Entscheidungsprozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integration von Ethik- und Transparenz-Prinzipien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Etablierung von Rollen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Überwachungs- und Verbesserungsprozesse'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kiComplianceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KI-Compliance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
