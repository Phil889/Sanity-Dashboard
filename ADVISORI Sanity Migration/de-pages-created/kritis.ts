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
    console.log('Creating KRITIS page...')

    const kritisData = {
      _type: 'servicePage',
      _id: 'kritis',
      title: 'KRITIS',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/kritis'
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
        title: 'KRITIS Compliance & Kritische Infrastrukturen | ADVISORI',
        description: 'Umfassende KRITIS-Compliance-Lösungen für kritische Infrastrukturen. IT-Sicherheit, Meldepflichten und Schutzkonzepte nach BSI-Standards.',
        keywords: 'KRITIS, Kritische Infrastrukturen, IT-Sicherheit, BSI, Compliance, Meldepflichten, Schutzkonzepte, Infrastruktursicherheit'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KRITIS Compliance & Kritische Infrastrukturen'
        },
        tagline: 'Sichere kritische Infrastrukturen für eine resiliente Zukunft',
        heading: 'KRITIS Compliance & Kritische Infrastrukturen',
        description: 'Kritische Infrastrukturen bilden das Rückgrat unserer Gesellschaft und Wirtschaft. ADVISORI unterstützt Sie bei der Umsetzung aller KRITIS-Anforderungen - von der Gap-Analyse über Schutzkonzepte bis hin zur kontinuierlichen Überwachung und Compliance-Sicherstellung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige KRITIS-Compliance nach BSI-Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Maßgeschneiderte Schutzkonzepte für kritische Infrastrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Systematische Risikobewertung und Schwachstellenanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Überwachung und Incident Management'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KRITIS Compliance & Kritische Infrastrukturen',
        description: 'Die KRITIS-Verordnung stellt Betreiber kritischer Infrastrukturen vor komplexe Herausforderungen. Wir bieten Ihnen umfassende Unterstützung bei der Umsetzung aller Anforderungen - von der initialen Bewertung bis zur nachhaltigen Compliance-Sicherstellung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'KRITIS Readiness: Gap-Analysen und Schwachstellenbewertungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementation: Schutzkonzepte und Meldepflichten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Ongoing Compliance: Tests, Audits und kontinuierliche Verbesserung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Branchenspezifische Lösungen für alle KRITIS-Sektoren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration mit anderen Compliance-Anforderungen'
          }
        ],
        alert: {
          title: 'Regulatorischer Hinweis',
          content: 'KRITIS-Betreiber sind verpflichtet, angemessene organisatorische und technische Vorkehrungen zur Aufrechterhaltung, Überwachung und Steuerung der Sicherheit und Funktionsfähigkeit ihrer kritischen Infrastrukturen zu treffen. Verstöße können zu erheblichen Bußgeldern führen.'
        },
        whyUs: {
          title: 'Warum ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in KRITIS-Verordnung und BSI-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Branchenübergreifende Erfahrung mit kritischen Infrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von Strategie bis Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Bewährte Methoden für nachhaltige Compliance'
            }
          ]
        },
        additionalInfo: 'Über 95% unserer KRITIS-Kunden erreichen vollständige Compliance innerhalb der ersten 12 Monate. Investieren Sie in professionelle KRITIS-Beratung für maximale Sicherheit und Compliance!',
        serviceDescription: 'Unser KRITIS-Leistungsspektrum umfasst alle Aspekte der Compliance für kritische Infrastrukturen. Von der strategischen Planung über die technische Implementierung bis zur operativen Betreuung bieten wir Ihnen vollumfängliche Unterstützung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'KRITIS Readiness Assessment und Gap-Analysen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung und Implementierung von Schutzkonzepten'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Meldepflichten und Behördenkommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Kontinuierliche Überwachung und Incident Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Regelmäßige Tests, Audits und Compliance-Prüfungen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und bewährten Ansatz für KRITIS-Compliance, der alle regulatorischen Anforderungen erfüllt und gleichzeitig operative Exzellenz gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Bewertung Ihrer kritischen Infrastrukturen und Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung maßgeschneiderter KRITIS-Compliance-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Systematische Implementierung von Schutzmaßnahmen und Kontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Aufbau nachhaltiger Überwachungs- und Steuerungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Anpassung an neue Anforderungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'Energieversorgungsunternehmen',
        name: 'Dr. Andreas Weber',
        position: 'Geschäftsführer',
        quote: 'ADVISORI hat uns hervorragend bei der KRITIS-Compliance unterstützt. Durch die strukturierte Herangehensweise und die tiefgreifende Expertise konnten wir alle Anforderungen fristgerecht erfüllen. Besonders beeindruckt hat uns die ganzheitliche Betrachtung unserer kritischen Infrastrukturen und die nachhaltigen Lösungsansätze.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'KRITIS Readiness',
          description: 'Umfassende Vorbereitung auf KRITIS-Compliance durch systematische Bewertungen, Gap-Analysen und strategische Planung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Schwachstellenanalyse und Risikobewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Gap-Analyse Organisation & Technik'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Notfallkonzepte und Ressourcenplanung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'KRITIS Implementation',
          description: 'Systematische Umsetzung aller KRITIS-Anforderungen mit fokus auf praktikable und nachhaltige Lösungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Schutzkonzepte physisch & digital'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Meldepflichten und Behördenkommunikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Kontinuierliche Überwachung & Incident Management'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'KRITIS Ongoing Compliance',
          description: 'Kontinuierliche Sicherstellung der KRITIS-Compliance durch regelmäßige Tests, Audits und Anpassungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Regelmäßige Tests und Audits'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Prozessanpassungen bei neuen Bedrohungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Schulungen und Awareness-Kampagnen'
            }
          ]
        }
      ],
      faq: []
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kritisData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KRITIS page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
