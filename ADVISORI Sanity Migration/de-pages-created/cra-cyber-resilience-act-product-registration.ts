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
    console.log('Creating CRA Cyber Resilience Act Product Registration page...')

    const craProductRegistrationData = {
      _type: 'servicePage',
      _id: 'cra-cyber-resilience-act-product-registration',
      title: 'CRA Cyber Resilience Act - Produktregistrierung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-cyber-resilience-act-market-surveillance/cra-cyber-resilience-act-product-registration'
      },
      parent: {
        _type: 'reference',
        _ref: 'cra-cyber-resilience-act-market-surveillance'
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
        title: 'CRA Produktregistrierung | ADVISORI',
        description: 'Professionelle Unterstützung bei der Produktregistrierung nach dem Cyber Resilience Act (CRA). Wir begleiten Sie durch alle regulatorischen Anforderungen und Compliance-Verfahren.',
        keywords: 'CRA, Cyber Resilience Act, Produktregistrierung, EU-Regulierung, Cybersicherheit, Compliance, CE-Kennzeichnung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA Produktregistrierung'
        },
        tagline: 'Professionelle CRA-Produktregistrierung für EU-Marktkonformität',
        heading: 'CRA Cyber Resilience Act - Produktregistrierung',
        description: 'Die Produktregistrierung nach dem Cyber Resilience Act (CRA) ist essentiell für das Inverkehrbringen digitaler Produkte in der EU. Wir unterstützen Sie bei allen Registrierungsverfahren und regulatorischen Anforderungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige CRA-Konformität und EU-Marktzugang'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Professionelle Begleitung durch alle Registrierungsphasen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Minimierung von Compliance-Risiken und Sanktionen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Effiziente Verfahrensabwicklung und Zeitersparnis'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRA Produktregistrierung',
        description: 'Die Produktregistrierung nach dem Cyber Resilience Act (CRA) ist ein zentraler Baustein für Hersteller und Importeure digitaler Produkte in der EU. Sie stellt sicher, dass Produkte mit digitalen Elementen den höchsten Cybersicherheitsstandards entsprechen und ordnungsgemäß auf dem europäischen Markt eingeführt werden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Produktklassifizierung nach CRA-Kategorien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Erstellung vollständiger Registrierungsdokumentationen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Koordination mit benannten Stellen und Marktaufsichtsbehörden'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliche Überwachung regulatorischer Änderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration in bestehende Compliance-Management-Systeme'
          }
        ],
        alert: {
          title: 'Regulatorischer Hinweis',
          content: 'Die CRA-Produktregistrierung ist ab 2025 verpflichtend für alle digitalen Produkte in der EU. Eine frühzeitige Vorbereitung ist entscheidend für den kontinuierlichen Marktzugang.'
        },
        whyUs: {
          title: 'Unsere CRA-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Kenntnisse in EU-Cybersicherheitsregulierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrung mit komplexen Produktregistrierungsverfahren'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Direkte Kontakte zu Marktaufsichtsbehörden und benannten Stellen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von der Konzeption bis zur Markteinführung'
            }
          ]
        },
        additionalInfo: 'Die rechtzeitige und ordnungsgemäße Produktregistrierung nach CRA kann Markteinführungszeiten um bis zu 40% verkürzen und Compliance-Kosten erheblich reduzieren. Investieren Sie in professionelle Unterstützung!',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum für die CRA-Produktregistrierung, von der initialen Produktbewertung über die Dokumentationserstellung bis zur erfolgreichen Registrierung und laufenden Compliance-Überwachung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'CRA-Produktklassifizierung und Risikobeurteilung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Registrierungsdokumentation und technische Unterlagen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Koordination mit Marktaufsichtsbehörden'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'CE-Kennzeichnungsverfahren für CRA-konforme Produkte'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Laufende Compliance-Überwachung und Updates'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser CRA-Registrierungsansatz',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte CRA-Registrierungsstrategie, die alle regulatorischen Anforderungen erfüllt und gleichzeitig Ihre Geschäftsziele unterstützt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Produktanalyse und CRA-Klassifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung der erforderlichen technischen Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Koordination mit relevanten Behörden und benannten Stellen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Durchführung der formellen Registrierungsverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung kontinuierlicher Compliance-Monitoring-Prozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns hervorragend bei der CRA-Produktregistrierung unterstützt. Dank ihrer umfassenden Expertise konnten wir unsere Produkte rechtzeitig und vollständig konform auf dem EU-Markt einführen. Die professionelle Begleitung durch alle regulatorischen Schritte war von unschätzbarem Wert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'CRA-Produktklassifizierung',
          description: 'Professionelle Einordnung Ihrer Produkte in die entsprechenden CRA-Kategorien mit detaillierter Risikobeurteilung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Produktanalyse nach CRA-Kriterien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Risikoklassifizierung (Klasse I oder Klasse II)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation erforderlicher Konformitätsbewertungsverfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Erstellung von Klassifizierungsberichten'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Registrierungsdokumentation',
          description: 'Vollständige Erstellung und Koordination aller erforderlichen Dokumente für die CRA-Produktregistrierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Technische Dokumentation nach CRA-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'EU-Konformitätserklärungen und CE-Kennzeichnung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Registrierungsanträge bei Marktaufsichtsbehörden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Koordination mit benannten Stellen für Klasse-II-Produkte'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craProductRegistrationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA Cyber Resilience Act Product Registration page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
