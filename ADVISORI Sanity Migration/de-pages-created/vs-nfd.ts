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
    console.log('Creating VS-NfD Regulatory Compliance Management page...')

    const vsNfdData = {
      _type: 'servicePage',
      _id: 'vs-nfd',
      title: 'VS-NfD Compliance Management',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/vs-nfd'
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
        title: 'VS-NfD Compliance Management | Verschlusssache Nur für den Dienstgebrauch | ADVISORI',
        description: 'Professionelle Beratung für VS-NfD Compliance Management. Expertenunterstützung bei der Umsetzung von Verschlusssache-Anforderungen, Sicherheitsmaßnahmen und regulatorischer Compliance für klassifizierte Informationen.',
        keywords: 'VS-NfD, Verschlusssache, Nur für den Dienstgebrauch, Compliance Management, Klassifizierte Informationen, Informationssicherheit, Geheimschutz, Regulatory Compliance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'VS-NfD Compliance Management und Informationssicherheit'
        },
        tagline: 'Sichere Compliance für klassifizierte Informationen',
        heading: 'VS-NfD Compliance Management',
        description: 'Verschlusssache - Nur für den Dienstgebrauch (VS-NfD) erfordert spezielle Sicherheitsmaßnahmen und Compliance-Strukturen. Wir unterstützen Sie bei der professionellen Umsetzung aller Anforderungen für den sicheren Umgang mit klassifizierten Informationen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Compliance mit VS-NfD Klassifizierungsanforderungen und Sicherheitsbestimmungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Implementierung zertifizierter Verschlüsselungslösungen und Sicherheitstechnologien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Etablierung robuster Zugangskontrollen und Berechtigungsmanagement-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Integration in bestehende Compliance-Frameworks und Governance-Strukturen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Professionelles VS-NfD Compliance Management für sichere Informationsverarbeitung',
        description: 'VS-NfD (Verschlusssache - Nur für den Dienstgebrauch) stellt spezifische Anforderungen an den Umgang mit klassifizierten Informationen. Diese Klassifizierungsstufe erfordert besondere Sicherheitsmaßnahmen, organisatorische Kontrollen und technische Schutzmaßnahmen, um die Vertraulichkeit und Integrität sensibler Informationen zu gewährleisten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Analyse der VS-NfD Anforderungen und deren Auswirkungen auf Ihre Organisation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung maßgeschneiderter Sicherheitskonzepte und Compliance-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung zertifizierter Verschlüsselungstechnologien und Sicherheitslösungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Etablierung effektiver Zugangskontrollen und Berechtigungsmanagement-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration von VS-NfD Compliance in bestehende Governance- und Risikomanagement-Strukturen'
          }
        ],
        alert: {
          title: 'Compliance-Hinweis',
          content: 'VS-NfD Informationen erfordern spezielle Sicherheitsmaßnahmen und dürfen nur von autorisierten Personen verarbeitet werden. Mobile Geräte, die VS-NfD Informationen speichern oder verarbeiten, müssen mit zugelassenen Verschlüsselungsprodukten geschützt werden.'
        },
        whyUs: {
          title: 'Unsere VS-NfD Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnisse der deutschen Klassifizierungsbestimmungen und Sicherheitsanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrung mit zertifizierten Sicherheitslösungen und Verschlüsselungstechnologien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methoden zur Integration von Geheimschutz-Anforderungen in Geschäftsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Strategische Beratung für nachhaltige und effiziente Compliance-Implementierung'
            }
          ]
        },
        additionalInfo: 'VS-NfD Compliance erfordert einen ganzheitlichen Ansatz, der technische Sicherheitsmaßnahmen, organisatorische Kontrollen und personelle Sicherheitsaspekte umfasst. Die erfolgreiche Umsetzung setzt fundierte Kenntnisse der regulatorischen Anforderungen und bewährter Sicherheitspraktiken voraus.',
        serviceDescription: 'Wir unterstützen Sie bei der vollständigen Umsetzung von VS-NfD Compliance-Anforderungen, von der initialen Risikoanalyse über die Implementierung technischer Sicherheitsmaßnahmen bis hin zur kontinuierlichen Überwachung und Optimierung Ihrer Compliance-Posture.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Comprehensive VS-NfD Gap-Analyse und Compliance-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung und Implementierung zertifizierter Sicherheitsarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Etablierung robuster Zugangskontrollen und Identitätsmanagement-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integration von VS-NfD Anforderungen in bestehende Compliance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Überwachung und Optimierung der Compliance-Maßnahmen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer VS-NfD Compliance-Ansatz',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte VS-NfD Compliance-Strategie, die alle regulatorischen Anforderungen erfüllt und gleichzeitig Ihre operativen Bedürfnisse berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Detaillierte Analyse Ihrer VS-NfD Betroffenheit und spezifischen Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung umfassender Sicherheitskonzepte und Implementierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung zertifizierter Technologien und Sicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung effektiver Governance-Strukturen und Kontrollmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und Anpassung der Compliance-Maßnahmen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Der sichere Umgang mit klassifizierten Informationen ist eine fundamentale Anforderung für viele Organisationen. Unsere systematische Herangehensweise an VS-NfD Compliance gewährleistet nicht nur die Einhaltung aller Sicherheitsbestimmungen, sondern schafft auch eine solide Basis für vertrauensvolle Geschäftsbeziehungen mit öffentlichen Auftraggebern.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'VS-NfD Compliance Assessment und Gap-Analyse',
          description: 'Umfassende Bewertung Ihrer aktuellen Sicherheitsmaßnahmen und Identifikation aller erforderlichen Anpassungen für vollständige VS-NfD Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse der VS-NfD Klassifizierungsanforderungen und deren Auswirkungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung bestehender Sicherheitsmaßnahmen und Identifikation von Compliance-Lücken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung priorisierter Roadmaps für die Compliance-Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Kosten-Nutzen-Analyse verschiedener Implementierungsoptionen und -strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Technische Sicherheitsarchitektur und Verschlüsselung',
          description: 'Implementierung zertifizierter Verschlüsselungslösungen und technischer Sicherheitsmaßnahmen für den sicheren Umgang mit VS-NfD Informationen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Auswahl und Implementierung zugelassener Verschlüsselungsprodukte und -technologien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Design sicherer Netzwerkarchitekturen und Kommunikationsinfrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Implementierung robuster Endpoint-Security und Mobile-Device-Management-Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Etablierung sicherer Backup- und Recovery-Systeme für klassifizierte Informationen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Zugangskontrollen und Berechtigungsmanagement',
          description: 'Entwicklung und Implementierung umfassender Zugangskontrollen und Identitätsmanagement-Systeme für VS-NfD konforme Informationsverarbeitung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Design rollenbasierter Zugangskontrollen und Berechtigungsstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Implementierung starker Authentifizierungsverfahren und Multi-Faktor-Authentifizierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Etablierung von Privileged-Access-Management und Administrative-Controls'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Entwicklung von Prozessen für Berechtigungserteilung, -überwachung und -entzug'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Organisatorische Sicherheitsmaßnahmen und Prozesse',
          description: 'Etablierung umfassender organisatorischer Kontrollen und Sicherheitsprozesse für den compliant Umgang mit klassifizierten Informationen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Entwicklung von Sicherheitsrichtlinien und -verfahren für VS-NfD Informationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Implementierung von Dokumentenmanagement und Lifecycle-Management-Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Etablierung von Incident-Response und Security-Breach-Management-Verfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Design von Schulungs- und Awareness-Programmen für Mitarbeiter'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Compliance-Integration und Governance',
          description: 'Integration von VS-NfD Anforderungen in bestehende Compliance-Frameworks und Etablierung effektiver Governance-Strukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Harmonisierung von VS-NfD Anforderungen mit anderen Compliance-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Etablierung von Governance-Strukturen und Verantwortlichkeiten für Geheimschutz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Entwicklung von Reporting- und Monitoring-Mechanismen für Compliance-Status'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Integration in bestehende Risikomanagement und Internal-Audit-Prozesse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Kontinuierliche Überwachung und Compliance-Optimierung',
          description: 'Etablierung systematischer Prozesse zur kontinuierlichen Überwachung, Bewertung und Optimierung Ihrer VS-NfD Compliance-Posture.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Implementierung kontinuierlicher Monitoring- und Alerting-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Regelmäßige Compliance-Assessments und Sicherheitsüberprüfungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Proaktive Anpassung an sich ändernde Sicherheitsanforderungen und Bedrohungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Verbesserung von Sicherheitsmaßnahmen und Compliance-Prozessen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(vsNfdData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ VS-NfD Compliance Management page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
