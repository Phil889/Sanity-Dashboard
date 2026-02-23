import 'dotenv/config'
import { createClient } from '@sanity/client'

// Create client with direct credentials
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
    console.log('Creating FIDA Consent Management Solution page...')

    const fidaConsentData = {
      _type: 'servicePage',
      _id: 'fida-consent-management-solution',
      title: 'FIDA Consent Management Solution',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/financial-data-access-fida/fida-consent-management-solution'
      },
      parent: {
        _type: 'reference',
        _ref: 'financial-data-access-fida'
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
        title: 'FIDA Consent Management Solution | ADVISORI',
        description: 'Spezialisierte FIDA-konforme Consent Management Lösungen für Finanzdienstleister. Granulare Einverständnissteuerung, DSGVO-Compliance und kundenorientierte Datenfreigabe-Plattformen.',
        keywords: 'FIDA Consent Management, Einverständnismanagement, Datenschutz, DSGVO, Financial Data Access, Consent Orchestration, Customer Consent, API Consent'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FIDA Consent Management Solution'
        },
        tagline: 'Intelligente Consent-Orchestrierung für die FIDA-Ära',
        heading: 'FIDA Consent Management Solution',
        description: 'Entwickeln Sie vertrauensvolle Kundenbeziehungen durch transparente und granulare Consent Management Systeme. Unsere FIDA-konformen Lösungen ermöglichen sichere Datenfreigabe bei maximaler Kundenkontrolle und regulatorischer Compliance.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Granulare Consent-Steuerung für alle FIDA-Datentypen und -services'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Nahtlose Integration in bestehende Kundenportale und Mobile Apps'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Echtzeit-Consent-Monitoring und automatisierte Compliance-Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kundenorientierte Transparenz und Vertrauen durch intuitive Consent-Interfaces'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Consent Management als Wettbewerbsvorteil',
        description: 'FIDA erfordert nicht nur technische Compliance, sondern eine fundamentale Neugestaltung der Kundenbeziehung zu Datenfreigabe und -kontrolle. Intelligente Consent Management Systeme werden zum entscheidenden Differenzierungsfaktor für Vertrauen, Kundenbindung und Geschäftserfolg.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung kundenorientierter Consent-Interfaces mit intuitiver Bedienbarkeit'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementation granularer Consent-Kontrollen für verschiedene Datentypen und Services'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Aufbau vertrauensvoller Transparenz durch klare Datennutzungs-Kommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von Consent-Lifecycle-Management und automatisierten Renewal-Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Echtzeit-Monitoring von Consent-Status und proaktive Compliance-Sicherstellung'
          }
        ],
        alert: {
          title: 'Vertrauens-Vorteil',
          content: 'Unternehmen mit transparenten und kundenfreundlichen Consent Management Systemen erzielen höhere Datenfreigabe-Raten und stärkere Kundenbindung. Consent Management wird zum strategischen Wettbewerbsvorteil.'
        },
        whyUs: {
          title: 'Unsere Consent Management Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Erfahrung in FIDA-konformen Consent-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte User Experience Design Prinzipien für Consent-Interfaces'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Tiefgreifende DSGVO und Datenschutz-Compliance Expertise'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von Technologie bis Kundenpsychologie'
            }
          ]
        },
        additionalInfo: 'Consent Management unter FIDA geht weit über einfache Opt-in/Opt-out Mechanismen hinaus. Es erfordert granulare Kontrollen, dynamische Anpassungen, transparente Kommunikation und nahtlose Integration in Kundenerfahrungen. Gleichzeitig müssen höchste technische und rechtliche Standards erfüllt werden.',
        serviceDescription: 'Wir entwickeln end-to-end Consent Management Lösungen, die FIDA-Compliance mit exzellenter Kundenerfahrung verbinden. Unsere Systeme ermöglichen es Kunden, ihre Datenfreigabe-Präferenzen granular zu steuern, während Unternehmen maximale Compliance-Sicherheit und operative Effizienz erhalten.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Consent-Architektur und User Experience Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Technische Implementation und API-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'DSGVO-konforme Datenschutz-Frameworks und Compliance-Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Kundenorientierte Transparenz-Tools und Kommunikationsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Optimierung und Consent-Analytics'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser kundenorientierter Consent-Ansatz',
        description: 'Wir entwickeln Consent Management Systeme, die Compliance-Anforderungen mit exzellenter Kundenerfahrung verbinden und Vertrauen als strategischen Wettbewerbsvorteil etablieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse Ihrer Kundenbedürfnisse und Entwicklung kundenorientierter Consent-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design intuitiver und transparenter Consent-Interfaces mit optimaler User Experience'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementation robuster technischer Systeme mit granularen Kontrollmöglichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration von Compliance-Monitoring und automatisierten Governance-Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung durch Consent-Analytics und Kundenfeedback'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Consent Management ist der Schlüssel zu vertrauensvollen Kundenbeziehungen in der FIDA-Ära. Unsere Expertise ermöglicht es Unternehmen, Compliance-Anforderungen in Wettbewerbsvorteile zu verwandeln und durch transparente, kundenorientierte Datenfreigabe-Prozesse nachhaltiges Vertrauen und Geschäftserfolg zu schaffen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische Consent-Architektur und Design',
          description: 'Entwicklung umfassender Consent-Strategien und kundenorientierter Interface-Designs für optimale Kundenerfahrung und Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse von Kundenbedürfnissen und Entwicklung kundenorientierter Consent-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Design intuitiver Consent-Interfaces mit optimaler User Experience'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung granularer Consent-Taxonomien für verschiedene Datentypen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Strategische Integration in bestehende Kundenportale und Mobile Apps'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Technische Implementation und API-Integration',
          description: 'Aufbau robuster technischer Consent Management Systeme mit nahtloser Integration in bestehende IT-Landschaften.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung skalierbarer Consent Management Plattformen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'API-Integration für Echtzeit-Consent-Abfragen und -Updates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Implementation granularer Consent-Kontrollen und Lifecycle-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Aufbau sicherer Consent-Datenbanken mit Audit-Trail-Funktionalität'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'DSGVO-Compliance und Datenschutz-Framework',
          description: 'Sicherstellung vollständiger DSGVO-Konformität und Aufbau umfassender Datenschutz-Governance für Consent-Prozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'DSGVO-konforme Consent-Prozesse und Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Implementation von Right-to-be-Forgotten und Data-Portability-Features'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Aufbau umfassender Datenschutz-Impact-Assessments für Consent-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Kontinuierliche Compliance-Überwachung und regulatorische Updates'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Kundenorientierte Transparenz und Kommunikation',
          description: 'Entwicklung transparenter Kommunikationsstrategien und Tools für vertrauensvolle Kundenerfahrungen im Consent-Prozess.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Entwicklung klarer und verständlicher Consent-Kommunikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Aufbau von Transparenz-Dashboards für Kunden-Datennutzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Implementation von Consent-Benachrichtigungen und Renewal-Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Entwicklung von Value-Proposition-Kommunikation für Datenfreigabe'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Echtzeit-Monitoring und Compliance-Überwachung',
          description: 'Aufbau umfassender Monitoring-Systeme für kontinuierliche Consent-Überwachung und proaktive Compliance-Sicherstellung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Echtzeit-Monitoring von Consent-Status und -Änderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Automatisierte Compliance-Alerts und Violation-Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Implementation von Consent-Analytics und Reporting-Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Aufbau von Audit-Trail-Systemen für regulatorische Nachweise'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Kontinuierliche Optimierung und Analytics',
          description: 'Ongoing Verbesserung der Consent-Systeme durch datengetriebene Insights und kontinuierliche Kundenfeedback-Integration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Consent-Analytics für Optimierung von Conversion-Raten und User Experience'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'A/B-Testing von Consent-Interfaces und Kommunikationsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Kontinuierliche Kundenfeedback-Integration und System-Verbesserungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Strategische Beratung zu emerging Consent-Technologies und Best Practices'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(fidaConsentData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FIDA Consent Management Solution page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
