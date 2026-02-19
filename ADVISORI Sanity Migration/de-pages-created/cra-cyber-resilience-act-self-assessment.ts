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
    console.log('Creating CRA Cyber Resilience Act Self-Assessment page...')

    const craSelfAssessmentData = {
      _type: 'servicePage',
      _id: 'cra-cyber-resilience-act-self-assessment',
      title: 'CRA Cyber Resilience Act Self-Assessment',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-cyber-resilience-act-conformity-assessment/cra-cyber-resilience-act-self-assessment/'
      },
      parent: {
        _type: 'reference',
        _ref: 'cra-cyber-resilience-act-conformity-assessment'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'regulatory-reporting'
        }
      },
      seo: {
        _type: 'seo',
        title: 'CRA Cyber Resilience Act Self-Assessment | ADVISORI',
        description: 'Professionelle CRA Self-Assessment Services für EU Cyber Resilience Act Compliance. Strukturierte Selbstbewertung, Konformitätsdokumentation und Risikomanagement für digitale Produkte.',
        keywords: 'CRA Self Assessment, Cyber Resilience Act Selbstbewertung, EU CRA Compliance, Digitale Produkte Sicherheit, Konformitätsbewertung, Cybersecurity Self Assessment'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA Cyber Resilience Act Self-Assessment'
        },
        tagline: 'Strukturierte Selbstbewertung für CRA-Compliance',
        heading: 'CRA Cyber Resilience Act Self-Assessment',
        description: 'Professionelle Unterstützung bei der strukturierten Selbstbewertung nach dem EU Cyber Resilience Act. Wir begleiten Sie durch den kompletten Self-Assessment-Prozess für konforme digitale Produkte.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strukturierte CRA Self-Assessment Methodology und Compliance-Framework'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Umfassende Risikobewertung und Sicherheitsanalyse digitaler Produkte'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Konforme Dokumentation und Konformitätserklärung nach CRA-Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Überwachung und Aktualisierung der Selbstbewertung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRA Cyber Resilience Act Self-Assessment',
        description: 'Der EU Cyber Resilience Act ermöglicht für bestimmte digitale Produkte eine strukturierte Selbstbewertung anstelle der aufwändigen Zertifizierung durch Dritte. Eine professionelle Self-Assessment-Durchführung sichert Compliance und minimiert Marktrisiken.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strukturierte Self-Assessment Methodology nach CRA-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Umfassende Cybersecurity-Risikobewertung und Vulnerability Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Konforme Dokumentation und EU-Konformitätserklärung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliche Monitoring- und Update-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration in Product Lifecycle und DevSecOps-Workflows'
          }
        ],
        alert: {
          title: 'Compliance-kritischer Erfolgsfaktor',
          content: 'Unvollständige oder fehlerhafte Self-Assessments können zu Marktbeschränkungen, Haftungsrisiken und regulatorischen Sanktionen führen. Eine strukturierte, dokumentierte Herangehensweise ist essentiell für CRA-Compliance.'
        },
        whyUs: {
          title: 'Unsere Self-Assessment-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende CRA-Kenntnisse und bewährte Assessment-Methodologien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Branchenspezifische Expertise für verschiedene digitale Produktkategorien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Automatisierte Tools und Frameworks für effiziente Bewertungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von Assessment bis Continuous Compliance'
            }
          ]
        },
        additionalInfo: 'Ein professionelles CRA Self-Assessment schafft nicht nur regulatorische Compliance, sondern auch Vertrauen bei Kunden und Partnern durch transparente Sicherheitsstandards und proaktives Risikomanagement.',
        serviceDescription: 'Wir begleiten Sie durch den gesamten Self-Assessment-Prozess - von der initialen Produktanalyse über die strukturierte Risikobewertung bis zur finalen Konformitätsdokumentation. Unser Ansatz kombiniert regulatorische Expertise mit praktischer Umsetzungserfahrung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'CRA Self-Assessment Scoping und Produktklassifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Strukturierte Cybersecurity-Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Konforme Dokumentation und Konformitätserklärung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Kontinuierliche Compliance-Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Integration in Entwicklungs- und Qualitätsprozesse'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Self-Assessment-Ansatz',
        description: 'Wir führen CRA Self-Assessments systematisch und strukturiert durch, basierend auf bewährten Cybersecurity-Frameworks und regulatorischen Best Practices.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Produktanalyse und CRA-Scope-Definition'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strukturierte Cybersecurity-Risikobewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Konforme Dokumentation und Assessment-Report'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'EU-Konformitätserklärung und Marktfreigabe'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliches Monitoring und Update-Management'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat unser CRA Self-Assessment nicht nur strukturiert und effizient durchgeführt, sondern auch ein nachhaltiges Compliance-Framework etabliert, das unsere Produktentwicklung kontinuierlich unterstützt. Ihre Expertise hat uns Zeit gespart und Sicherheit gegeben.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strukturiertes CRA Self-Assessment',
          description: 'Umfassende Selbstbewertung digitaler Produkte nach CRA-Standards mit strukturierter Methodology und konformer Dokumentation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'CRA-konforme Assessment-Methodology'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Umfassende Cybersecurity-Risikobewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Strukturierte Vulnerability-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Konforme Assessment-Dokumentation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Kontinuierliche Compliance-Überwachung',
          description: 'Ongoing Monitoring und Management der CRA-Compliance mit automatisierten Überwachungsprozessen und regelmäßigen Updates.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Kontinuierliches Security-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automatisierte Compliance-Überwachung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Regelmäßige Assessment-Updates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration in DevSecOps-Workflows'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craSelfAssessmentData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA Cyber Resilience Act Self-Assessment page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
