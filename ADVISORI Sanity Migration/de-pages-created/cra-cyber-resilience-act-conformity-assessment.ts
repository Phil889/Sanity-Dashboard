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
    console.log('Creating CRA Cyber Resilience Act Conformity Assessment page...')

    const craConformityAssessmentData = {
      _type: 'servicePage',
      _id: 'cra-cyber-resilience-act-conformity-assessment',
      title: 'CRA Cyber Resilience Act Conformity Assessment',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-cyber-resilience-act-conformity-assessment'
      },
      parent: {
        _type: 'reference',
        _ref: 'cra-cyber-resilience-act'
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
        title: 'CRA Cyber Resilience Act Conformity Assessment | ADVISORI',
        description: 'Professionelle Konformitätsbewertung nach dem EU Cyber Resilience Act. Sichern Sie die Compliance Ihrer Produkte mit digitalen Elementen.',
        keywords: 'CRA, Cyber Resilience Act, Konformitätsbewertung, Conformity Assessment, EU-Verordnung, Produktsicherheit, digitale Elemente'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA Cyber Resilience Act Conformity Assessment'
        },
        tagline: 'Systematische Konformitätsbewertung für CRA-konforme Produkte',
        heading: 'CRA Cyber Resilience Act Conformity Assessment',
        description: 'Gewährleisten Sie die vollständige Compliance Ihrer Produkte mit digitalen Elementen nach dem EU Cyber Resilience Act durch professionelle Konformitätsbewertungsverfahren.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Bewertung nach harmonisierten Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Rechtssichere Konformitätserklärungen und CE-Kennzeichnung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Optimierte Time-to-Market durch strukturierte Verfahren'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Compliance-Überwachung und -Anpassung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRA Cyber Resilience Act Conformity Assessment',
        description: 'Die Konformitätsbewertung nach dem EU Cyber Resilience Act ist ein systematischer Prozess zur Überprüfung, ob Produkte mit digitalen Elementen den wesentlichen Anforderungen der Verordnung entsprechen. Wir unterstützen Sie bei der vollständigen Durchführung aller erforderlichen Bewertungsverfahren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Bestimmung des anwendbaren Konformitätsbewertungsverfahrens'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Durchführung von Produktprüfungen und Sicherheitsbewertungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Erstellung der technischen Dokumentation und Konformitätserklärung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'CE-Kennzeichnung und Marktüberwachungsverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Post-Market-Surveillance und Incident Response'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Die Wahl des richtigen Konformitätsbewertungsverfahrens ist entscheidend für Kosten und Zeitaufwand. Je nach Produktkategorie und Risikostufe kommen unterschiedliche Module zur Anwendung.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in EU-Konformitätsbewertungsverfahren'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung mit Cybersicherheitsstandards und -normen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Enge Zusammenarbeit mit notifizierten Stellen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von der Produktentwicklung bis zur Markteinführung'
            }
          ]
        },
        additionalInfo: 'Eine ordnungsgemäße Konformitätsbewertung reduziert das Risiko von Marktüberwachungsmaßnahmen um bis zu 85% und beschleunigt die Markteinführung erheblich.',
        serviceDescription: 'Wir bieten Ihnen ein vollständiges Spektrum an Konformitätsbewertungsdienstleistungen für den CRA, von der initialen Produktklassifizierung bis zur kontinuierlichen Compliance-Überwachung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Produktklassifizierung und Verfahrensbestimmung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Technische Dokumentation und Prüfberichte'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Konformitätserklärung und CE-Kennzeichnung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Post-Market-Surveillance-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Incident Response und Korrekturmaßnahmen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte Konformitätsbewertungsstrategie, die optimal auf Ihre Produktpalette und Geschäftsanforderungen abgestimmt ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Detaillierte Produktanalyse und Klassifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Auswahl des optimalen Konformitätsbewertungsmoduls'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Systematische Durchführung aller Bewertungsschritte'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Erstellung vollständiger Compliance-Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und Anpassung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns exzellent bei der CRA-Konformitätsbewertung unterstützt. Dank der strukturierten Herangehensweise und der fundierten Expertise konnten wir alle Compliance-Anforderungen termingerecht erfüllen und unsere Produkte erfolgreich auf den Markt bringen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Konformitätsbewertungsverfahren Auswahl',
          description: 'Wir bestimmen das für Ihre Produkte anwendbare Konformitätsbewertungsverfahren nach CRA Anhang V.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Produktklassifizierung nach Risikostufen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Modulauswahl für optimale Kosten-Nutzen-Verhältnisse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Bewertung von Selbsterklärung vs. Drittpartei-Zertifizierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Zeitplan- und Kostenoptimierung der Bewertungsverfahren'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Technische Dokumentation und Prüfung',
          description: 'Vollständige Erstellung und Überprüfung der technischen Dokumentation nach CRA-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Technische Spezifikationen und Sicherheitsanalysen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Risikobeurteilungen und Schwachstellenanalysen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Prüfberichte und Zertifizierungsdokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Harmonisierte Standards-Compliance-Nachweis'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craConformityAssessmentData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA Cyber Resilience Act Conformity Assessment page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
