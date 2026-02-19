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
    console.log('Creating ISO 27001 Lead Auditor Zertifizierung page...')

    const iso27001LeadAuditorData = {
      _type: 'servicePage',
      _id: 'iso-27001-lead-auditor-zertifizierung',
      title: 'ISO 27001 Lead Auditor Zertifizierung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-lead-auditor-zertifizierung'
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
        title: 'ISO 27001 Lead Auditor Zertifizierung | Professional Certification | ADVISORI',
        description: 'Werden Sie zertifizierter ISO 27001 Lead Auditor. Professionelle Ausbildung mit international anerkannter Zertifizierung. Praxisorientierte Schulung von erfahrenen Auditoren.',
        keywords: 'ISO 27001 Lead Auditor, Lead Auditor Zertifizierung, ISO 27001 Auditor Ausbildung, ISMS Auditor, Information Security Auditor, Lead Auditor Training, ISO 27001 Certification'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Lead Auditor Zertifizierung und professionelle Ausbildung'
        },
        tagline: 'Professionelle Zertifizierung für Audit-Excellence',
        heading: 'ISO 27001 Lead Auditor Zertifizierung',
        description: 'Entwickeln Sie die Expertise für professionelle ISO 27001 Audits. Unsere international anerkannte Lead Auditor Zertifizierung kombiniert fundierte theoretische Kenntnisse mit praktischen Audit-Fähigkeiten, vermittelt von erfahrenen Auditoren mit umfassender Praxiserfahrung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'International anerkannte Lead Auditor Zertifizierung nach ISO 19011 Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Praxisorientierte Ausbildung durch aktive Lead Auditoren und Consultants'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Umfassende Audit-Methodologie mit realen Fallstudien und Simulationen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Karriereentwicklung in der professionellen Audit- und Beratungsbranche'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Professionelle Lead Auditor Kompetenz für Information Security Excellence',
        description: 'Die ISO 27001 Lead Auditor Zertifizierung ist der Goldstandard für professionelle Auditoren im Bereich Informationssicherheit. Unsere umfassende Ausbildung entwickelt die kritischen Fähigkeiten, die für die Durchführung effektiver Audits und die Bewertung von Informationssicherheits-Managementsystemen erforderlich sind.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Audit-Methodologie basierend auf ISO 19011 und bewährten Praktiken'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung von Führungskompetenzen für Audit-Team-Management und Stakeholder-Kommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Praktische Anwendung durch intensive Audit-Simulationen und Rollenspiele'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration aktueller regulatorischer Anforderungen und Compliance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Vorbereitung auf internationale Zertifizierungsprüfungen und Akkreditierung'
          }
        ],
        alert: {
          title: 'Karriere-Investment',
          content: 'Die Lead Auditor Zertifizierung öffnet Türen zu hochqualifizierten Positionen in der Audit- und Beratungsbranche. Zertifizierte Lead Auditoren sind gefragte Experten mit ausgezeichneten Karriereperspektiven und Verdienstmöglichkeiten.'
        },
        whyUs: {
          title: 'Unsere Ausbildungsexzellenz',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Trainer sind aktive Lead Auditoren mit umfassender Audit-Erfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Hohe Erfolgsquote bei internationalen Zertifizierungsprüfungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Kontinuierliche Unterstützung und Mentoring auch nach der Zertifizierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Zugang zu exklusivem Auditor-Netzwerk und Karrieremöglichkeiten'
            }
          ]
        },
        additionalInfo: 'Unsere Lead Auditor Ausbildung geht über die reine Wissensvermittlung hinaus und entwickelt die praktischen Kompetenzen, die für erfolgreiche Audit-Karrieren erforderlich sind. Wir fokussieren auf die Entwicklung von Audit-Urteilsvermögen, Kommunikationsfähigkeiten und professioneller Integrität.',
        serviceDescription: 'Wir bieten eine strukturierte Lead Auditor Ausbildung, die systematisch von den Grundlagen der Audit-Prinzipien bis zur fortgeschrittenen Audit-Führung und -Management aufbaut. Unser modularer Ansatz ermöglicht flexible Lernpfade für verschiedene Erfahrungslevel.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Grundlagen der Audit-Prinzipien und ISO 19011 Methodologie'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Praktische Audit-Techniken und Evidenz-Sammlung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Audit-Team-Führung und Stakeholder-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Berichterstattung und Follow-up-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Vorbereitung auf internationale Zertifizierungsprüfungen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unsere Systematische Ausbildungsmethodik',
        description: 'Wir verwenden eine bewährte Methodik, die theoretisches Wissen mit intensiver praktischer Anwendung kombiniert, um kompetente und selbstbewusste Lead Auditoren zu entwickeln.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Kompetenz-Bewertung zur Bestimmung individueller Lernbedürfnisse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strukturierte Wissensvermittlung mit progressivem Schwierigkeitsgrad'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Intensive praktische Übungen mit realistischen Audit-Szenarien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche Bewertung und individuelles Feedback für Kompetenzentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Prüfungsvorbereitung und Unterstützung bei der Zertifizierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die Entwicklung kompetenter Lead Auditoren ist entscheidend für die Qualität und Glaubwürdigkeit von ISO 27001 Zertifizierungen. Unsere Ausbildungsprogramme schaffen nicht nur technische Expertise, sondern entwickeln auch die professionellen Fähigkeiten und ethischen Standards, die für vertrauensvolle Audit-Beziehungen erforderlich sind.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ISO 27001 Lead Auditor Foundation',
          description: 'Grundlegende Ausbildung in Audit-Prinzipien und ISO 27001 Anforderungen für angehende Lead Auditoren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Einführung in ISO 19011 Audit-Prinzipien und -Methodologie'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Detaillierte Analyse der ISO 27001 Anforderungen aus Auditor-Perspektive'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Grundlagen der Risikobewertung und Kontroll-Evaluierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Einführung in Audit-Dokumentation und Evidenz-Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Praktische Audit-Techniken Workshop',
          description: 'Intensive praktische Ausbildung in fortgeschrittenen Audit-Techniken und Methodologien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Audit-Planung und Risiko-basierte Audit-Ansätze'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Effektive Interview-Techniken und Evidenz-Sammlung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Sampling-Methoden und statistische Audit-Techniken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Nonkonformitäts-Identifikation und -Bewertung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Lead Auditor Zertifizierungskurs',
          description: 'Vollständiger Zertifizierungskurs mit Prüfungsvorbereitung für internationale Lead Auditor Anerkennung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Umfassende Vorbereitung auf internationale Zertifizierungsprüfungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Praktische Audit-Simulation mit vollständigem Audit-Zyklus'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Audit-Team-Führung und Konfliktmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Professionelle Berichterstattung und Präsentationstechniken'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Advanced Auditor Development Program',
          description: 'Fortgeschrittene Entwicklung für erfahrene Auditoren mit Fokus auf Spezialisierung und Expertise.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Spezialisierte Audit-Bereiche wie Cloud Security und Emerging Technologies'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Integration von Compliance-Frameworks und regulatorischen Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Mentoring und Coaching-Fähigkeiten für Auditor-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Thought Leadership und Beitrag zur Audit-Community'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Auditor Competency Maintenance',
          description: 'Kontinuierliche professionelle Entwicklung und Kompetenz-Erhaltung für zertifizierte Lead Auditoren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Continuing Professional Development Programme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Updates zu neuen Standards und regulatorischen Änderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Peer-Learning und Best-Practice-Austausch'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Rezertifizierungs-Unterstützung und Kompetenz-Bewertung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Corporate Auditor Training Program',
          description: 'Maßgeschneiderte Auditor-Ausbildung für Unternehmen zur Entwicklung interner Audit-Kapazitäten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Unternehmensspezifische Audit-Programme und Methodologien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Integration mit bestehenden Governance- und Compliance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Entwicklung interner Audit-Standards und Qualitätssicherung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Langfristige Kompetenz-Entwicklung und Karriereplanung'
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

    console.log('✅ ISO 27001 Lead Auditor Zertifizierung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
