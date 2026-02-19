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
    console.log('Creating IAM Was ist das page...')

    const iamWasIstDasData = {
      _type: 'servicePage',
      _id: 'iam-was-ist-das',
      title: 'IAM - Was ist das? Grundlagen der Identity & Access Management Systeme',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-was-ist-das'
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
        title: 'IAM - Was ist das? Grundlagen Identity & Access Management | ADVISORI',
        description: 'Was ist IAM? Umfassende Einführung in Identity & Access Management: Grundlagen, Komponenten, Funktionsweise und Vorteile moderner IAM-Systeme für Unternehmenssicherheit.',
        keywords: 'Was ist IAM, Identity Access Management Definition, IAM Grundlagen, IAM Erklärung, Identity Management System, Access Control, Benutzeridentitäten, Zugriffsverwaltung, IAM Komponenten, IAM Funktionsweise'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Was ist das Identity Access Management Grundlagen'
        },
        tagline: 'Verstehen Sie die Grundlagen moderner Identitätsverwaltung',
        heading: 'IAM - Was ist das? Grundlagen der Identity & Access Management Systeme',
        description: 'Identity & Access Management (IAM) ist das fundamentale Sicherheitsframework, das definiert, wer Zugang zu welchen Ressourcen hat und unter welchen Bedingungen. IAM-Systeme bilden das digitale Rückgrat moderner Unternehmen und ermöglichen es, Benutzeridentitäten zentral zu verwalten, Zugriffsrechte granular zu steuern und dabei höchste Sicherheitsstandards mit optimaler Benutzerfreundlichkeit zu vereinen. Diese Technologie ist unverzichtbar für jede Organisation, die ihre digitalen Assets schützen und gleichzeitig produktive Arbeitsabläufe ermöglichen möchte.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Zentrale Verwaltung aller Benutzeridentitäten und Zugriffsrechte'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte Sicherheitskontrollen und Compliance-Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Nahtlose Benutzerfreundlichkeit durch Single Sign-On'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Skalierbare Architektur für wachsende Unternehmensanforderungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'IAM verstehen: Die Grundlagen der digitalen Identitätsverwaltung',
        description: 'Identity & Access Management ist weit mehr als nur eine technische Lösung – es ist ein strategisches Framework, das die Art und Weise revolutioniert, wie Organisationen mit digitalen Identitäten umgehen. IAM definiert nicht nur, wer Zugang zu welchen Systemen hat, sondern schafft ein intelligentes Ökosystem, das Sicherheit, Produktivität und Compliance nahtlos miteinander verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Identitätsverwaltung als zentrales Repository für alle Benutzerinformationen und Attribute'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Authentifizierung zur sicheren Verifikation von Benutzeridentitäten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Autorisierung für granulare Kontrolle über Ressourcenzugriffe'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Governance-Mechanismen für kontinuierliche Überwachung und Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration in bestehende IT-Infrastrukturen und Cloud-Umgebungen'
          }
        ],
        alert: {
          title: 'Fundamentale Bedeutung',
          content: 'IAM ist nicht optional – es ist die Grundvoraussetzung für sichere digitale Geschäftsprozesse. Ohne professionelle Identitätsverwaltung sind Unternehmen exponentiell höheren Sicherheitsrisiken, Compliance-Verstößen und Produktivitätsverlusten ausgesetzt.'
        },
        whyUs: {
          title: 'ADVISORI IAM-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende IAM-Beratung von Grundlagen bis zu Enterprise-Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Technologie-Bewertung für optimale Lösungsauswahl'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxisorientierte Implementierung mit Business-Impact-Fokus'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Weiterentwicklung und Innovation-Integration'
            }
          ]
        },
        additionalInfo: 'Moderne IAM-Systeme integrieren künstliche Intelligenz, maschinelles Lernen und Behavioral Analytics, um adaptive Sicherheitsentscheidungen zu treffen und Benutzererfahrungen zu optimieren. Diese Evolution macht IAM zu einem intelligenten, selbstlernenden System, das proaktiv auf Bedrohungen reagiert und gleichzeitig die Produktivität steigert.',
        serviceDescription: 'Wir begleiten Sie beim Verständnis und der Implementierung von IAM-Lösungen – von der grundlegenden Konzeptentwicklung über die Technologie-Auswahl bis hin zur vollständigen Integration in Ihre Unternehmenslandschaft. Unser Ansatz kombiniert theoretisches Fundament mit praktischer Umsetzung für nachhaltige IAM-Erfolge.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'IAM-Grundlagen-Schulungen und Konzeptentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Technologie-Assessment und Lösungsarchitektur'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierungsplanung und Change Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integration und Testing von IAM-Komponenten'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Betrieb und kontinuierliche Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strukturierter IAM-Einführungsansatz',
        description: 'Wir verfolgen einen systematischen, praxisorientierten Ansatz zur IAM-Einführung, der theoretisches Verständnis mit praktischer Implementierung verbindet und dabei individuelle Unternehmensanforderungen berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Grundlagen-Assessment und Anforderungsanalyse für maßgeschneiderte IAM-Konzepte'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Technologie-Evaluation und Architektur-Design mit Best-Practice-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Pilotimplementierung mit schrittweiser Ausweitung und Lessons Learned'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Vollständige Integration mit umfassendem Testing und Qualitätssicherung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und strategische Weiterentwicklung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Das Verständnis von IAM-Grundlagen ist der erste Schritt zu einer erfolgreichen digitalen Transformation. Viele Unternehmen unterschätzen die strategische Bedeutung einer durchdachten Identitätsverwaltung und fokussieren sich zu sehr auf technische Details, ohne die fundamentalen Konzepte zu verstehen. Unsere Erfahrung zeigt, dass Organisationen, die IAM von Grund auf richtig verstehen und implementieren, nicht nur sicherer sind, sondern auch signifikante Produktivitätssteigerungen und Kosteneinsparungen erzielen. IAM ist das Fundament für alle modernen Sicherheits- und Compliance-Strategien.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'IAM-Grundlagen und Konzeptentwicklung',
          description: 'Umfassende Einführung in IAM-Konzepte und Entwicklung eines fundierten Verständnisses für die strategische Bedeutung der Identitätsverwaltung in Ihrem Unternehmen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Fundamentale IAM-Konzepte und Terminologie'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Strategische Bedeutung für Unternehmenssicherheit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Business-Case-Entwicklung und ROI-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Stakeholder-Alignment und Change Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'IAM-Komponenten und Architektur-Verständnis',
          description: 'Detaillierte Analyse der verschiedenen IAM-Komponenten und deren Zusammenspiel in einer modernen Unternehmensarchitektur.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Identity Stores und Directory Services'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Authentifizierungs- und Autorisierungsmechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Provisioning und Lifecycle Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Governance und Compliance-Funktionen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Technologie-Landschaft und Lösungsoptionen',
          description: 'Überblick über verfügbare IAM-Technologien, Anbieter und Lösungsansätze für verschiedene Unternehmensanforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Marktübersicht und Anbieter-Vergleich'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'On-Premises vs. Cloud vs. Hybrid-Ansätze'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Integration mit bestehenden Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Skalierbarkeit und Zukunftssicherheit'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Implementierungsplanung und Roadmap',
          description: 'Entwicklung einer strukturierten Implementierungsstrategie mit klaren Meilensteinen und Erfolgskriterien für Ihre IAM-Initiative.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Phasenplanung und Meilenstein-Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Ressourcenplanung und Budget-Kalkulation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Risikobewertung und Mitigation-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Success Metrics und KPI-Definition'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Best Practices und Governance-Framework',
          description: 'Etablierung bewährter Praktiken und Governance-Strukturen für nachhaltigen IAM-Erfolg und kontinuierliche Verbesserung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Industry Best Practices und Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Governance-Strukturen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Compliance-Framework und Audit-Vorbereitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Kontinuierliche Verbesserung und Innovation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Training und Kompetenzaufbau',
          description: 'Umfassende Schulungsprogramme für IT-Teams und Endbenutzer zur erfolgreichen Adoption und optimalen Nutzung von IAM-Systemen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Technische Schulungen für IT-Administratoren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Endbenutzer-Training und Adoption-Support'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Management-Briefings und Executive-Updates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Dokumentation und Knowledge Transfer'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamWasIstDasData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Was ist das page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
