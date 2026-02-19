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
    console.log('Creating Business Continuity Management Certification page...')

    const bcmCertificationData = {
      _type: 'servicePage',
      _id: 'business-continuity-management-certification',
      title: 'Business Continuity Management Certification',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/business-continuity-resilience/business-continuity-management-certification'
      },
      parent: {
        _type: 'reference',
        _ref: 'business-continuity-resilience'
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
        title: 'Business Continuity Management Certification - Professionelle Zertifizierung | ADVISORI',
        description: 'Professionelle BCM-Zertifizierungen und Schulungen: ISO 22301, BCI-Zertifikate, Prüfungsvorbereitung und Karriereentwicklung im Business Continuity Management mit ADVISORI.',
        keywords: 'Business Continuity Management Certification, BCM Zertifizierung, ISO 22301 Certification, BCI Zertifikat, BCM Schulung, Business Continuity Training, BCM Professional, Disaster Recovery Certification'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Business Continuity Management Certification - Professionelle Zertifizierung und Schulung'
        },
        tagline: 'Professionelle BCM-Zertifizierung für Karriereexzellenz',
        heading: 'Business Continuity Management Certification',
        description: 'Entwickeln Sie Ihre Expertise im Business Continuity Management durch anerkannte Zertifizierungen und professionelle Schulungsprogramme. ADVISORI bietet umfassende Vorbereitung auf internationale BCM-Standards und Zertifikate für nachhaltigen Karriereerfolg.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Anerkannte internationale BCM-Zertifizierungen und Qualifikationen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strukturierte Schulungsprogramme und Prüfungsvorbereitung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Karriereentwicklung und professionelle Weiterbildung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Praktische Anwendung und Kompetenzentwicklung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Business Continuity Management Certification - Professionelle Qualifikation',
        description: 'Business Continuity Management Certification repräsentiert den Goldstandard für professionelle Qualifikation im Bereich der organisationalen Resilienz. Diese Zertifizierungen validieren nicht nur theoretisches Wissen, sondern auch praktische Fähigkeiten zur Implementierung und Führung von BCM-Programmen in komplexen Unternehmensumgebungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Internationale Anerkennung durch führende Standards wie ISO 22301 und BCI Good Practice Guidelines'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Strukturierte Kompetenzentwicklung von Foundation bis Expert Level'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Praktische Anwendung von BCM-Prinzipien in realen Geschäftsszenarien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliche professionelle Entwicklung und Weiterbildung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Karriereförderung und Marktpositionierung als BCM-Experte'
          }
        ],
        alert: {
          title: 'Professionelle Exzellenz',
          content: 'BCM-Zertifizierungen sind mehr als Qualifikationsnachweise - sie repräsentieren Engagement für professionelle Exzellenz und kontinuierliche Kompetenzentwicklung in der kritischen Disziplin der Geschäftskontinuität.'
        },
        whyUs: {
          title: 'Warum BCM-Zertifizierung mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in allen führenden BCM-Zertifizierungsprogrammen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxisorientierte Schulungsansätze mit realen Fallstudien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Individuelle Betreuung und maßgeschneiderte Lernpfade'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Unterstützung bei Karriereentwicklung und Weiterbildung'
            }
          ]
        },
        additionalInfo: 'Die Landschaft der BCM-Zertifizierungen entwickelt sich kontinuierlich weiter, um den sich wandelnden Anforderungen der Geschäftswelt gerecht zu werden. Moderne Zertifizierungsprogramme integrieren digitale Transformation, Cyber-Resilienz und nachhaltige Geschäftspraktiken in ihre Curricula und bereiten Fachkräfte auf die Herausforderungen der Zukunft vor.',
        serviceDescription: 'Unser BCM-Zertifizierungsservice bietet umfassende Unterstützung für alle Aspekte der professionellen Qualifikation im Business Continuity Management. Von der initialen Beratung über strukturierte Schulungsprogramme bis hin zur kontinuierlichen beruflichen Entwicklung begleiten wir Sie auf Ihrem Weg zur BCM-Expertise.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Zertifizierungsberatung und Karriereplanung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Strukturierte Schulungsprogramme und Prüfungsvorbereitung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Praktische Übungen und Fallstudienanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Mentoring und professionelle Entwicklungsunterstützung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Continuing Professional Development (CPD) Programme'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Ansatz zur BCM-Zertifizierung',
        description: 'Wir verfolgen einen strukturierten und praxisorientierten Ansatz zur BCM-Zertifizierung, der theoretisches Wissen mit praktischer Anwendung verbindet und nachhaltige Kompetenzentwicklung fördert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Individuelle Kompetenzanalyse und maßgeschneiderte Lernpfade'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strukturierte Schulungsprogramme basierend auf internationalen Standards'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Praxisorientierte Übungen und reale Fallstudienanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche Bewertung und Feedback für optimale Lernfortschritte'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Langfristige Begleitung und professionelle Entwicklungsunterstützung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Professionelle BCM-Zertifizierungen sind der Schlüssel zur Karriereentwicklung in der Resilienz-Branche. Sie validieren nicht nur Fachwissen, sondern demonstrieren auch das Engagement für kontinuierliche Exzellenz und professionelle Standards in einem kritischen Geschäftsbereich.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ISO 22301 Zertifizierung',
          description: 'Umfassende Vorbereitung auf die internationale ISO 22301 Business Continuity Management Zertifizierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Foundation, Practitioner und Lead Implementer Levels'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Strukturierte Prüfungsvorbereitung und Mock-Exams'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Praktische Implementierungsübungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Internationale Anerkennung und Karrierevorteile'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'BCI Professional Certification',
          description: 'Business Continuity Institute Zertifizierungsprogramme für professionelle BCM-Expertise.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Certificate, Specialist und Fellowship Pathways'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Good Practice Guidelines basierte Schulung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Professional Development und CPD Support'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Globale Netzwerk-Mitgliedschaft und Ressourcen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Disaster Recovery Certification',
          description: 'Spezialisierte Zertifizierungen für Disaster Recovery und IT-Kontinuitätsmanagement.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'DRII und andere anerkannte DR-Zertifikate'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Technische und strategische DR-Kompetenzen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Cyber-Resilienz und digitale Kontinuität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Praktische Übungen und Simulationen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Executive BCM Programme',
          description: 'Führungskräfte-orientierte BCM-Zertifizierungen für strategische Entscheidungsträger.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'C-Level und Senior Management fokussierte Inhalte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Strategische BCM-Governance und Leadership'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Board-Level Reporting und Kommunikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Flexible Lernformate für Führungskräfte'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Branchenspezifische Zertifizierungen',
          description: 'Maßgeschneiderte BCM-Zertifizierungen für spezifische Industriezweige und Sektoren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Finanzdienstleistungen und Banking BCM'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Healthcare und kritische Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Manufacturing und Supply Chain Resilience'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Regulatorische Compliance und Standards'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Continuing Professional Development',
          description: 'Kontinuierliche Weiterbildung und Kompetenzerhaltung für zertifizierte BCM-Professionals.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'CPD Credits und Recertification Support'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Advanced Workshops und Masterclasses'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Emerging Trends und Innovation Updates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Professional Networking und Mentoring'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcmCertificationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Business Continuity Management Certification page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
