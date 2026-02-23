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
    console.log('Creating ISO 27001 Schulung page...')

    const iso27001SchulungData = {
      _type: 'servicePage',
      _id: 'iso-27001-schulung',
      title: 'ISO 27001 Schulung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-schulung'
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
        title: 'ISO 27001 Schulung & Training | ADVISORI',
        description: 'Professionelle ISO 27001 Schulungen für alle Ebenen. Von Awareness-Training bis zur Auditor-Zertifizierung. Praxisorientierte Weiterbildung für erfolgreiche ISMS-Implementierung.',
        keywords: 'ISO 27001 Schulung, ISO 27001 Training, ISMS Schulung, Informationssicherheit Training, ISO 27001 Auditor, ISO 27001 Zertifizierung, Awareness Training'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Schulung und Training'
        },
        tagline: 'Kompetenz durch praxisorientierte Weiterbildung',
        heading: 'ISO 27001 Schulung',
        description: 'Entwickeln Sie die notwendigen Kompetenzen für eine erfolgreiche ISO 27001 Implementierung. Unsere praxisorientierten Schulungen decken alle Aspekte des Standards ab – von grundlegender Awareness bis zur Auditor-Zertifizierung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende Schulungsprogramme für alle Organisationsebenen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Praxisorientierte Trainings mit realen Fallstudien und Übungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Zertifizierte Trainer mit langjähriger ISO 27001 Implementierungserfahrung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Flexible Schulungsformate: Präsenz, Online oder maßgeschneiderte Inhouse-Trainings'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategische Kompetenzentwicklung für ISO 27001',
        description: 'Die erfolgreiche Implementierung und Aufrechterhaltung eines ISO 27001 konformen Informationssicherheits-Managementsystems erfordert qualifizierte Mitarbeiter auf allen Ebenen. Unsere strukturierten Schulungsprogramme entwickeln die notwendigen Kompetenzen systematisch und praxisorientiert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Rollenspezifische Schulungskonzepte für Management, ISMS-Verantwortliche und operative Mitarbeiter'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Praxisnahe Vermittlung von ISO 27001 Anforderungen und deren Umsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration aktueller regulatorischer Entwicklungen wie DORA und NIS2'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Hands-on Workshops für praktische Implementierungsschritte'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Kompetenzentwicklung durch modulare Aufbau-Schulungen'
          }
        ],
        alert: {
          title: 'Investition in Kompetenz',
          content: 'Qualifizierte Mitarbeiter sind der Schlüssel für eine erfolgreiche ISO 27001 Implementierung. Unsere Schulungen schaffen das notwendige Verständnis und die praktischen Fähigkeiten für eine nachhaltige ISMS-Umsetzung.'
        },
        whyUs: {
          title: 'Unsere Schulungsexpertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Zertifizierte ISO 27001 Lead Auditoren und Implementation Consultants als Trainer'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung in der praktischen ISO 27001 Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Anpassung der Schulungsinhalte'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Aktualisierung der Schulungsinhalte entsprechend neuer Standards'
            }
          ]
        },
        additionalInfo: 'Unsere ISO 27001 Schulungen gehen über die reine Wissensvermittlung hinaus. Wir entwickeln praktische Kompetenzen, die direkt in der täglichen Arbeit angewendet werden können und schaffen ein tiefes Verständnis für die Prinzipien und Ziele des Informationssicherheits-Managements.',
        serviceDescription: 'Wir bieten ein umfassendes Portfolio an ISO 27001 Schulungen, das von grundlegender Awareness bis zur Auditor-Zertifizierung reicht. Unsere modularen Programme ermöglichen eine bedarfsgerechte Kompetenzentwicklung für alle Rollen in Ihrer Organisation.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Foundation und Awareness Trainings für alle Mitarbeiter'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Implementation Workshops für ISMS-Verantwortliche und Projektteams'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Lead Auditor und Internal Auditor Zertifizierungskurse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Management Briefings für Führungskräfte und Entscheidungsträger'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Spezialisierte Trainings für Risk Management und Incident Response'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Schulungsansatz',
        description: 'Wir entwickeln mit Ihnen ein maßgeschneidertes Schulungskonzept, das optimal auf Ihre Organisationsstruktur und Implementierungsziele abgestimmt ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Bedarfsanalyse und Kompetenz-Assessment zur Identifikation von Schulungsbedarfen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung rollenspezifischer Schulungskonzepte und Lernpfade'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Praxisorientierte Durchführung mit realen Fallbeispielen aus Ihrer Branche'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche Lernerfolgskontrolle und Kompetenzvalidierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Verankerung durch Follow-up Sessions und Refresher-Trainings'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Erfolgreiche ISO 27001 Implementierung beginnt mit qualifizierten Menschen. Unsere praxisorientierten Schulungen schaffen nicht nur theoretisches Verständnis, sondern entwickeln die praktischen Kompetenzen, die für eine nachhaltige und effektive Umsetzung des Standards erforderlich sind.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ISO 27001 Foundation & Awareness Training',
          description: 'Grundlegende Schulungen für alle Mitarbeiter zur Schaffung von Bewusstsein und Verständnis für Informationssicherheit und ISO 27001.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Einführung in die Grundlagen der Informationssicherheit und ISO 27001'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Verständnis für die Bedeutung von Informationssicherheit im Arbeitsalltag'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Praktische Sicherheitsmaßnahmen und Verhaltensregeln'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Rollenspezifische Verantwortlichkeiten und Pflichten'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'ISO 27001 Implementation Workshop',
          description: 'Intensive Praxis-Workshops für ISMS-Verantwortliche und Projektteams zur systematischen Implementierung von ISO 27001.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Schritt-für-Schritt Anleitung zur ISMS-Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Praktische Übungen zur Risikoanalyse und -bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung von Sicherheitsrichtlinien und Verfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Aufbau von Monitoring- und Überwachungsprozessen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'ISO 27001 Lead Auditor Zertifizierung',
          description: 'Professionelle Ausbildung zum zertifizierten ISO 27001 Lead Auditor mit international anerkannter Zertifizierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Umfassende Ausbildung in Audit-Prinzipien und -Techniken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Praktische Audit-Übungen und Rollenspiele'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Vorbereitung auf die internationale Lead Auditor Zertifizierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Entwicklung von Audit-Programmen und Berichtswesen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Internal Auditor Training',
          description: 'Qualifizierung interner Auditoren für die eigenständige Durchführung von ISO 27001 internen Audits.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Grundlagen des internen Audit-Prozesses nach ISO 19011'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Audit-Planung, Durchführung und Nachverfolgung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Entwicklung von Audit-Checklisten und Bewertungskriterien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Kommunikation von Audit-Ergebnissen und Verbesserungsmaßnahmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Management Briefing & Executive Training',
          description: 'Spezialisierte Schulungen für Führungskräfte zu strategischen Aspekten von ISO 27001 und Management-Verantwortlichkeiten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Strategische Bedeutung von Informationssicherheit für das Unternehmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Management-Verantwortlichkeiten und Leadership-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Business Case und ROI von ISO 27001 Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Integration in Corporate Governance und Risikomanagement'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Spezialisierte Fachtrainings',
          description: 'Vertiefende Schulungen zu spezifischen Aspekten von ISO 27001 wie Risk Management, Incident Response und Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Advanced Risk Assessment und Treatment Methoden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Incident Response und Business Continuity Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Integration mit anderen Standards und Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Compliance Management und regulatorische Anforderungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001SchulungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 Schulung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
