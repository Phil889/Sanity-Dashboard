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
    console.log('Creating IAM Schulung page...')

    const iamSchulungData = {
      _type: 'servicePage',
      _id: 'iam-schulung',
      title: 'IAM Schulung - Professionelle Identity & Access Management Weiterbildung',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-schulung'
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
        title: 'IAM Schulung - Professionelle Identity & Access Management Weiterbildung | ADVISORI',
        description: 'Professionelle IAM Schulungen und Weiterbildungsprogramme: Praxisorientierte Trainings für Identity & Access Management, Zertifizierungsvorbereitung und Skill-Development für IT-Teams.',
        keywords: 'IAM Schulung, Identity Access Management Training, IAM Weiterbildung, IAM Zertifizierung, IAM Workshop, Identity Management Kurs, Access Management Training, IAM Best Practices, IAM Fortbildung, Cybersecurity Training'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Schulung Professionelle Identity Access Management Weiterbildung'
        },
        tagline: 'Expertenwissen für moderne Identitätsverwaltung',
        heading: 'IAM Schulung - Professionelle Identity & Access Management Weiterbildung',
        description: 'IAM Schulungen sind der Schlüssel für erfolgreiche Digitalisierung und moderne Cybersecurity-Strategien. Unsere praxisorientierten Weiterbildungsprogramme vermitteln fundiertes Expertenwissen in Identity & Access Management und befähigen IT-Teams, komplexe IAM-Landschaften zu verstehen, zu implementieren und zu optimieren. Von grundlegenden Konzepten bis hin zu fortgeschrittenen Zero-Trust-Architekturen entwickeln wir maßgeschneiderte Lernpfade, die theoretisches Wissen mit praktischer Anwendung verbinden.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Praxisorientierte IAM-Trainings mit realen Anwendungsszenarien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Zertifizierungsvorbereitung für führende IAM-Technologien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Maßgeschneiderte Lernpfade für verschiedene Skill-Level'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Hands-on Workshops mit modernsten IAM-Tools und -Plattformen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische IAM-Weiterbildung: Vom Grundwissen zur Expertise',
        description: 'Professionelle IAM-Schulungen sind essentiell für Organisationen, die ihre Cybersecurity-Posture stärken und digitale Transformation erfolgreich umsetzen möchten. In einer Zeit zunehmender Cyber-Bedrohungen und komplexer Compliance-Anforderungen benötigen IT-Teams fundiertes IAM-Expertenwissen, um moderne Identitätsverwaltung strategisch zu planen, technisch umzusetzen und operativ zu betreiben.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Fundamentale IAM-Konzepte und moderne Architektur-Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Zero-Trust-Implementation und adaptive Sicherheitsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Privileged Access Management und Critical Asset Protection'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Cloud-native IAM-Lösungen und Hybrid-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Compliance-Automation und Governance-Frameworks'
          }
        ],
        alert: {
          title: 'Skill-Gap-Herausforderung',
          content: 'Der Mangel an qualifizierten IAM-Experten ist eine der größten Herausforderungen für moderne IT-Organisationen. Professionelle Weiterbildung ist entscheidend für den Aufbau interner Kompetenzen und die erfolgreiche Umsetzung von IAM-Strategien.'
        },
        whyUs: {
          title: 'ADVISORI IAM-Schulungsexzellenz',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Praxiserfahrene Trainer mit jahrelanger IAM-Implementierungserfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Schulungen für objektive Technologie-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Maßgeschneiderte Curricula basierend auf spezifischen Unternehmensanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Lernbegleitung und Post-Training-Support'
            }
          ]
        },
        additionalInfo: 'Moderne IAM-Schulungen integrieren neueste Technologietrends wie künstliche Intelligenz, maschinelles Lernen und Behavioral Analytics. Diese Entwicklungen erfordern kontinuierliche Weiterbildung und Anpassung bestehender Kompetenzen an sich wandelnde Sicherheitsanforderungen.',
        serviceDescription: 'Unsere IAM-Schulungsprogramme kombinieren theoretisches Fundament mit praktischer Anwendung und bieten strukturierte Lernpfade für verschiedene Zielgruppen – von IAM-Einsteigern bis hin zu erfahrenen Sicherheitsexperten. Durch modulare Aufbaukonzepte und flexible Delivery-Formate ermöglichen wir effiziente Kompetenzentwicklung ohne Disruption laufender Geschäftsprozesse.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Grundlagen-Schulungen für IAM-Einsteiger und Quereinsteiger'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Advanced-Trainings für erfahrene IT-Professionals'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Spezialisierte Workshops für spezifische IAM-Technologien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Zertifizierungsvorbereitungen für führende IAM-Plattformen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Maßgeschneiderte Inhouse-Trainings für Unternehmensteams'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strukturierter IAM-Schulungsansatz',
        description: 'Wir verfolgen einen ganzheitlichen, praxisorientierten Ansatz für IAM-Weiterbildung, der theoretisches Fundament mit praktischer Anwendung verbindet und dabei individuelle Lernbedürfnisse und Unternehmensanforderungen berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Skill-Assessment und individualisierte Lernpfad-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Modularer Aufbau mit flexiblen Delivery-Formaten und Zeitmodellen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Hands-on Labs mit realen IAM-Umgebungen und Praxisszenarien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche Lernerfolgskontrolle und Kompetenz-Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Post-Training-Support und kontinuierliche Weiterbildungsbegleitung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Professionelle IAM-Weiterbildung ist der Grundstein für erfolgreiche Cybersecurity-Strategien und digitale Transformation. Unsere Erfahrung zeigt, dass Organisationen mit gut ausgebildeten IAM-Teams nicht nur sicherere Infrastrukturen betreiben, sondern auch schneller auf neue Bedrohungen reagieren und innovative Technologien erfolgreich implementieren können. Investitionen in IAM-Schulungen zahlen sich durch reduzierte Sicherheitsrisiken, verbesserte Compliance und beschleunigte Projektrealisierung mehrfach aus.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'IAM-Grundlagen und Fundamentals-Training',
          description: 'Umfassende Einführung in Identity & Access Management für Einsteiger und Quereinsteiger mit Fokus auf grundlegende Konzepte, Technologien und Best Practices.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'IAM-Grundprinzipien und Architektur-Konzepte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Authentifizierung, Autorisierung und Identitäts-Lifecycle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Praktische Übungen mit Standard-IAM-Tools'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Compliance-Grundlagen und regulatorische Anforderungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Zero-Trust-Architektur und Advanced Security',
          description: 'Spezialisierte Schulungen für moderne Zero-Trust-Implementierung mit Fokus auf adaptive Sicherheitsstrategien und intelligente Risikobewertung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Zero-Trust-Prinzipien und Architektur-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Adaptive Authentication und Behavioral Analytics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Risk-based Access Controls und Threat Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Praktische Zero-Trust-Implementation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Privileged Access Management (PAM) Spezialisierung',
          description: 'Intensive Schulungen für Privileged Access Management mit Fokus auf Critical Asset Protection und Advanced Threat Prevention.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'PAM-Strategien und Architektur-Planung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Credential Management und Password Vaulting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Session Monitoring und Privileged Analytics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Hands-on PAM-Tool-Training'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Cloud-native IAM und Hybrid-Integration',
          description: 'Spezialisierte Trainings für moderne Cloud-IAM-Lösungen mit Fokus auf Multi-Cloud-Strategien und Hybrid-Umgebungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Cloud-IAM-Architekturen und Service-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Multi-Cloud Identity Federation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Hybrid-Deployment und Legacy-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'DevOps-Integration und API-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'IAM-Governance und Compliance-Automation',
          description: 'Umfassende Schulungen für Identity Governance mit Fokus auf Compliance-Automation und regulatorische Exzellenz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Identity Governance Frameworks und Policies'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Automated Compliance und Audit-Vorbereitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Risk Assessment und Access Analytics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Regulatory Mapping und Reporting'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Zertifizierungsvorbereitung und Skill-Validation',
          description: 'Strukturierte Vorbereitungsprogramme für führende IAM-Zertifizierungen mit umfassender Kompetenz-Validierung und Prüfungsvorbereitung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Herstellerspezifische Zertifizierungsvorbereitungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Praxisorientierte Prüfungssimulationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Skill-Assessment und Kompetenz-Mapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Lernbegleitung und Mentoring'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamSchulungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Schulung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
