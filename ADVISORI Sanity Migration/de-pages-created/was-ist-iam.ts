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
    console.log('Creating Was ist IAM page...')

    const wasIstIamData = {
      _type: 'servicePage',
      _id: 'was-ist-iam',
      title: 'Was ist IAM? - Identity & Access Management Grundlagen',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/was-ist-iam'
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
        title: 'Was ist IAM? Identity & Access Management Grundlagen erklärt | ADVISORI',
        description: 'Umfassender Leitfaden zu Identity & Access Management (IAM): Definition, Komponenten, Vorteile und strategische Bedeutung für moderne Unternehmenssicherheit und Compliance.',
        keywords: 'Was ist IAM, Identity Access Management, IAM Definition, IAM Grundlagen, Identitätsmanagement, Zugriffskontrolle, IAM Komponenten, IAM Vorteile, Enterprise Security, Digital Identity'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Was ist IAM Identity Access Management Grundlagen'
        },
        tagline: 'Fundament moderner Unternehmenssicherheit verstehen',
        heading: 'Was ist IAM? - Identity & Access Management Grundlagen',
        description: 'Identity & Access Management (IAM) ist das strategische Rückgrat moderner Unternehmenssicherheit und bildet die Grundlage für sichere, effiziente und compliance-konforme Geschäftsprozesse. IAM umfasst die systematische Verwaltung digitaler Identitäten, die präzise Kontrolle von Zugriffsrechten und die nahtlose Integration von Sicherheitsrichtlinien in alle Unternehmensbereiche für maximalen Schutz bei optimaler Benutzerfreundlichkeit.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Zentrale Identitätsverwaltung für alle Benutzer und Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Granulare Zugriffskontrolle nach dem Prinzip der minimalen Berechtigung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Automatisierte Compliance und umfassende Audit-Fähigkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nahtlose Integration in bestehende IT-Infrastrukturen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Identity & Access Management: Das digitale Fundament moderner Unternehmen',
        description: 'IAM ist weit mehr als nur Benutzerverwaltung – es ist ein strategisches Framework, das die digitale Transformation ermöglicht, Sicherheitsrisiken minimiert und gleichzeitig die Produktivität maximiert. In einer zunehmend vernetzten Geschäftswelt, in der Cloud-Services, mobile Arbeitsplätze und IoT-Geräte die Norm sind, bildet IAM das unverzichtbare Fundament für sichere und effiziente Geschäftsprozesse.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Identitätsverwaltung für Mitarbeiter, Partner und Kunden'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Intelligente Zugriffskontrolle mit kontextbasierter Authentifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Automatisierte Provisioning- und Deprovisioning-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Single Sign-On (SSO) für nahtlose Benutzererfahrung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Privileged Access Management für kritische Systemzugriffe'
          }
        ],
        alert: {
          title: 'Strategische Notwendigkeit',
          content: 'Ohne professionelles IAM sind Unternehmen erheblichen Sicherheitsrisiken, Compliance-Verstößen und Produktivitätsverlusten ausgesetzt. Moderne Cyber-Bedrohungen und regulatorische Anforderungen machen IAM zu einer geschäftskritischen Investition, nicht zu einer optionalen IT-Komponente.'
        },
        whyUs: {
          title: 'ADVISORI IAM-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Ganzheitliche IAM-Strategieentwicklung mit Business-Fokus'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Beratung für optimale Technologie-Auswahl'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Compliance-by-Design für regulatorische Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Praxiserprobte Implementierungsmethoden für nachhaltigen Erfolg'
            }
          ]
        },
        additionalInfo: 'IAM entwickelt sich kontinuierlich weiter und integriert innovative Technologien wie künstliche Intelligenz, maschinelles Lernen und Zero-Trust-Architekturen. Diese Evolution ermöglicht es Unternehmen, proaktiv auf Bedrohungen zu reagieren, Benutzererfahrungen zu optimieren und gleichzeitig höchste Sicherheitsstandards zu gewährleisten.',
        serviceDescription: 'Wir begleiten Sie von der strategischen IAM-Planung über die Technologie-Auswahl bis zur vollständigen Implementierung und dem laufenden Betrieb. Unser Ansatz kombiniert bewährte Methoden mit innovativen Lösungen für eine IAM-Landschaft, die Ihre spezifischen Geschäftsanforderungen optimal unterstützt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'IAM-Strategie und Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Technologie-Assessment und Vendor-Auswahl'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Architektur-Design und Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Change Management und Benutzer-Adoption'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Compliance-Integration und Audit-Unterstützung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer IAM-Ansatz',
        description: 'Wir verfolgen einen ganzheitlichen, business-orientierten Ansatz für IAM-Implementierungen, der technische Exzellenz mit strategischen Geschäftszielen verbindet und dabei höchste Sicherheits- und Compliance-Standards gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische IAM-Bewertung und Business-Case-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Architektur-Design mit Zero-Trust-Prinzipien und Cloud-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Implementierung mit kontinuierlicher Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Umfassendes Change Management und Benutzer-Enablement'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und proaktive Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Identity & Access Management ist das unsichtbare Rückgrat jeder modernen digitalen Transformation und entscheidet über Erfolg oder Misserfolg von Sicherheitsstrategien. Unsere Erfahrung zeigt, dass Unternehmen, die IAM als strategische Investition verstehen und nicht als reine IT-Funktion, signifikante Wettbewerbsvorteile erzielen. Die richtige IAM-Strategie ermöglicht es, Sicherheit und Benutzerfreundlichkeit zu vereinen, Compliance-Anforderungen automatisiert zu erfüllen und gleichzeitig die Grundlage für innovative Geschäftsmodelle zu schaffen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'IAM-Strategie und Roadmap-Entwicklung',
          description: 'Entwicklung einer umfassenden IAM-Strategie, die Ihre Geschäftsziele unterstützt und eine klare Roadmap für die schrittweise Implementierung und Optimierung bereitstellt.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Business-orientierte IAM-Vision und Zielsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Comprehensive Current-State-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Phasenweise Implementierungs-Roadmap'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'ROI-Kalkulation und Business-Case-Entwicklung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'IAM-Architektur und Design',
          description: 'Entwicklung einer robusten, skalierbaren IAM-Architektur, die moderne Sicherheitsprinzipien integriert und nahtlos in Ihre bestehende IT-Landschaft eingebettet wird.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Zero-Trust-Architektur-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Cloud-native und Hybrid-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Microservices und API-basierte Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Skalierbarkeits- und Performance-Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'IAM-Technologie-Auswahl und -Bewertung',
          description: 'Herstellerunabhängige Bewertung und Auswahl der optimalen IAM-Technologien basierend auf Ihren spezifischen Anforderungen, Budget und strategischen Zielen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Comprehensive Vendor-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Proof-of-Concept und Pilotprojekte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Total-Cost-of-Ownership-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Integration und Kompatibilitätsbewertung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'IAM-Implementierung und Integration',
          description: 'Professionelle Implementierung Ihrer IAM-Lösung mit nahtloser Integration in bestehende Systeme und minimaler Disruption der Geschäftsprozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Phasenweise Rollout-Strategie'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Legacy-System-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Datenmigrationsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Testing und Qualitätssicherung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'IAM-Governance und Compliance',
          description: 'Etablierung robuster IAM-Governance-Strukturen und Compliance-Prozesse, die regulatorische Anforderungen erfüllen und kontinuierliche Verbesserung ermöglichen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Governance-Framework-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Compliance-Automation und -Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Audit-Trail und Reporting-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Kontinuierliche Compliance-Überwachung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'IAM-Betrieb und Optimierung',
          description: 'Kontinuierlicher Betrieb und Optimierung Ihrer IAM-Systeme mit proaktivem Monitoring, Performance-Tuning und strategischer Weiterentwicklung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Proaktives System-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Performance-Optimierung und Tuning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Kontinuierliche Sicherheitsbewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Strategische Weiterentwicklung und Innovation'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(wasIstIamData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Was ist IAM page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
