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
    console.log('Creating ISO 27001 SOA page...')

    const iso27001SoaData = {
      _type: 'servicePage',
      _id: 'iso-27001-soa',
      title: 'ISO 27001 SOA - Statement of Applicability',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-soa'
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
        title: 'ISO 27001 SOA Statement of Applicability | ADVISORI',
        description: 'Professionelle Entwicklung und Implementierung der ISO 27001 Statement of Applicability (SOA). Expertenhilfe für Control-Auswahl, Dokumentation und Compliance-Nachweis.',
        keywords: 'ISO 27001 SOA, Statement of Applicability, Annex A Controls, Control-Auswahl, ISMS Dokumentation, ISO 27001 Compliance, Risikobewertung, Control-Implementierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Statement of Applicability SOA'
        },
        tagline: 'Strategische Control-Auswahl für nachhaltige Informationssicherheit',
        heading: 'ISO 27001 SOA - Statement of Applicability',
        description: 'Die Statement of Applicability ist das Herzstück Ihres ISO 27001 ISMS und dokumentiert systematisch die Anwendbarkeit aller Annex A Controls. Unsere bewährte Expertise unterstützt Sie bei der strategischen Control-Auswahl, fundierten Begründung und compliance-konformen Dokumentation.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Bewertung aller 93 Annex A Controls'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Risikobasierte Control-Auswahl und Begründung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Compliance-konforme Dokumentation und Nachweisführung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Audit-sichere SOA-Struktur und -Inhalte'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Statement of Applicability - Das zentrale Dokument für ISO 27001 Compliance',
        description: 'Die Statement of Applicability (SOA) ist ein obligatorisches Dokument nach ISO 27001, das systematisch alle 93 Controls aus Annex A bewertet und deren Anwendbarkeit für Ihre Organisation dokumentiert. Sie bildet die Brücke zwischen Risikoanalyse und Control-Implementierung und ist entscheidend für eine erfolgreiche Zertifizierung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Vollständige Bewertung aller Annex A Controls mit klarer Anwendbarkeitsentscheidung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Risikobasierte Begründung für Control-Auswahl und Ausschlüsse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Dokumentation des Implementierungsstatus und geplanter Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Verknüpfung mit Risikobewertung und Risk Treatment Plan'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Audit-Trail für Compliance-Nachweis und kontinuierliche Verbesserung'
          }
        ],
        alert: {
          title: 'Kritischer Erfolgsfaktor',
          content: 'Eine professionell entwickelte SOA ist entscheidend für die ISO 27001 Zertifizierung und bildet die Grundlage für alle weiteren ISMS-Aktivitäten und Audit-Nachweise.'
        },
        whyUs: {
          title: 'Warum SOA-Entwicklung mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in ISO 27001 Annex A Controls und deren praktischer Anwendung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für risikobasierte Control-Auswahl und Begründung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Audit-erprobte SOA-Templates und Dokumentationsstandards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Integration mit modernen ISMS-Tools und Compliance-Plattformen'
            }
          ]
        },
        additionalInfo: 'Die SOA muss alle 93 Controls aus ISO 27001 Annex A systematisch bewerten und für jedes Control dokumentieren, ob es anwendbar ist oder nicht. Bei Nicht-Anwendbarkeit muss eine fundierte Begründung erfolgen. Die SOA ist ein lebendes Dokument, das regelmäßig überprüft und aktualisiert werden muss.',
        serviceDescription: 'Unser SOA-Service umfasst die vollständige Entwicklung, Dokumentation und Pflege Ihrer Statement of Applicability - von der initialen Control-Bewertung über die risikobasierte Auswahl bis hin zur audit-sicheren Dokumentation und kontinuierlichen Aktualisierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Systematische Bewertung aller Annex A Controls'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Risikobasierte Control-Auswahl und Begründung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Compliance-konforme SOA-Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integration mit Risikomanagement und Treatment Plan'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche SOA-Pflege und Aktualisierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer SOA-Entwicklungsansatz',
        description: 'Wir verfolgen einen strukturierten, risikobasierten Ansatz für die SOA-Entwicklung, der bewährte Methoden mit praktischer Umsetzbarkeit kombiniert und nachhaltigen Compliance-Erfolg gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse der Organisationsstruktur und Informationsassets'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Systematische Bewertung aller 93 Annex A Controls gegen Ihre Risikosituation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Risikobasierte Control-Auswahl mit fundierter Begründung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Audit-sichere Dokumentation mit klarer Nachvollziehbarkeit'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Integration in ISMS-Prozesse und kontinuierliche Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Eine professionell entwickelte Statement of Applicability ist das Fundament jeder erfolgreichen ISO 27001 Implementierung. Unsere bewährte Methodik verbindet systematische Control-Bewertung mit praktischer Umsetzbarkeit und schafft die Basis für nachhaltige Compliance-Exzellenz.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'SOA-Entwicklung & Control-Bewertung',
          description: 'Systematische Entwicklung Ihrer Statement of Applicability mit professioneller Control-Bewertung und risikobasierter Auswahl.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Vollständige Bewertung aller 93 Annex A Controls'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Risikobasierte Control-Auswahl und Priorisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Fundierte Begründung für Control-Ausschlüsse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration mit Risikobewertung und Business Impact'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'SOA-Dokumentation & Compliance',
          description: 'Professionelle Dokumentation Ihrer SOA mit audit-sicherer Struktur und compliance-konformen Inhalten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Audit-sichere SOA-Dokumentationsstruktur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Compliance-konforme Begründungen und Nachweise'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Verknüpfung mit Risk Treatment Plan'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Versionskontrolle und Change Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Control-Implementierung & Mapping',
          description: 'Unterstützung bei der praktischen Implementierung ausgewählter Controls mit systematischem Mapping und Monitoring.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Detaillierte Control-Implementierungspläne'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Mapping zu bestehenden Sicherheitsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Implementierungsstatus-Tracking und Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Integration mit ISMS-Prozessen und Workflows'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'SOA-Review & Optimierung',
          description: 'Regelmäßige Überprüfung und Optimierung Ihrer SOA für kontinuierliche Verbesserung und Compliance-Sicherheit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Periodische SOA-Reviews und Aktualisierungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Gap-Analysen und Verbesserungsempfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Anpassung an veränderte Risikosituation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Kontinuierliche Compliance-Überwachung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'SOA-Tools & Automatisierung',
          description: 'Moderne Tools und Automatisierungslösungen für effizientes SOA-Management und kontinuierliche Überwachung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'SOA-Management-Tools und Plattformen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Automatisierte Control-Bewertung und Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Dashboard und Reporting-Funktionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Integration mit ISMS und GRC-Systemen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'SOA-Schulungen & Kompetenzaufbau',
          description: 'Umfassende Schulungsprogramme für SOA-Entwicklung, Control-Bewertung und kontinuierliches Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'SOA-Entwicklung und Control-Bewertung Workshops'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Annex A Controls Deep-Dive Trainings'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Praktische SOA-Management Schulungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Kompetenzentwicklung und Updates'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001SoaData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 SOA main page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
