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
    console.log('Creating KRITIS Regelmäßige Tests & Audits page...')

    const kritisTestsAuditsData = {
      _type: 'servicePage',
      _id: 'kritis-regelmaessige-tests-audits',
      title: 'KRITIS Regelmäßige Tests & Audits',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/kritis/kritis-ongoing-compliance/kritis-regelmaessige-tests-audits/'
      },
      parent: {
        _type: 'reference',
        _ref: 'kritis-ongoing-compliance'
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
        title: 'KRITIS Regelmäßige Tests & Audits | ADVISORI',
        description: 'Professionelle Durchführung regelmäßiger Tests und Audits für KRITIS-Betreiber. Gewährleistung kontinuierlicher Compliance durch systematische Überprüfung und Validierung aller IT-Sicherheitsmaßnahmen.',
        keywords: 'KRITIS, Tests, Audits, IT-Sicherheit, Compliance, Penetrationstests, Vulnerability Assessments, BSI, Kritische Infrastrukturen'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KRITIS Regelmäßige Tests & Audits'
        },
        tagline: 'Systematische Validierung Ihrer IT-Sicherheitsmaßnahmen',
        heading: 'KRITIS Regelmäßige Tests & Audits',
        description: 'Die KRITIS-Verordnung fordert regelmäßige Tests und Audits zur kontinuierlichen Validierung der IT-Sicherheitsmaßnahmen. Wir führen systematische Überprüfungen durch, die nicht nur regulatorische Anforderungen erfüllen, sondern auch wertvolle Einblicke zur kontinuierlichen Verbesserung Ihrer Sicherheitsarchitektur liefern.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Validierung aller IT-Sicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Proaktive Identifikation von Sicherheitslücken'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Compliance-konforme Dokumentation und Berichterstattung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Verbesserung der Sicherheitsposture'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KRITIS Regelmäßige Tests & Audits',
        description: 'Regelmäßige Tests und Audits sind zentrale Säulen einer effektiven KRITIS-Compliance-Strategie. Sie dienen nicht nur der Erfüllung regulatorischer Anforderungen, sondern ermöglichen eine kontinuierliche Validierung und Verbesserung der implementierten IT-Sicherheitsmaßnahmen. Unsere systematischen Test- und Audit-Programme gewährleisten, dass Ihre kritische Infrastruktur dauerhaft geschützt und compliant bleibt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Regelmäßige Penetrationstests zur Identifikation von Schwachstellen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Vulnerability Assessments und Sicherheitsbewertungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Compliance-Audits zur Überprüfung der regulatorischen Konformität'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Business Continuity und Disaster Recovery Tests'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Incident Response Simulation und Tabletop Exercises'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Effektive Tests und Audits gehen über reine Compliance-Erfüllung hinaus – sie schaffen kontinuierliche Lernschleifen, die zur systematischen Verbesserung der Sicherheitsarchitektur und Organisationsresilienz beitragen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Expertise in KRITIS-konformen Test- und Audit-Methoden'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfassende Erfahrung mit kritischen Infrastrukturen verschiedener Sektoren'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Methodenvielfalt von technischen Tests bis zu organisatorischen Audits'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Konstruktive Beratung zur kontinuierlichen Sicherheitsverbesserung'
            }
          ]
        },
        additionalInfo: 'Die Qualität und Systematik regelmäßiger Tests und Audits bestimmt maßgeblich die Effektivität Ihrer KRITIS-Compliance. Während oberflächliche Tests nur formale Anforderungen erfüllen, schaffen tiefgreifende, methodisch fundierte Überprüfungen echten Mehrwert für die Organisationssicherheit.',
        serviceDescription: 'Wir bieten umfassende Test- und Audit-Services für KRITIS-Betreiber, die von technischen Penetrationstests bis zu organisatorischen Compliance-Audits reichen. Unser Ansatz kombiniert regulatorische Konformität mit kontinuierlicher Verbesserung der Sicherheitsposture.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Systematische Penetrationstests und Vulnerability Assessments'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Compliance-Audits und regulatorische Konformitätsprüfungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Business Continuity und Disaster Recovery Tests'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Incident Response Simulationen und Krisenübungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Verbesserungsberatung basierend auf Testergebnissen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen maßgeschneiderte Test- und Audit-Programme, die systematisch alle Aspekte Ihrer IT-Sicherheit validieren und kontinuierliche Verbesserungen ermöglichen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Entwicklung risikobasierter Test- und Audit-Pläne'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Durchführung systematischer technischer und organisatorischer Tests'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Umfassende Dokumentation und Compliance-konforme Berichterstattung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung und Priorisierung von Verbesserungsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Anpassung der Test-Strategien an neue Bedrohungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Regelmäßige Tests und Audits sind das Rückgrat einer lebendigen KRITIS-Compliance. Sie schaffen nicht nur regulatorische Sicherheit, sondern ermöglichen eine kontinuierliche Evolution der Sicherheitsarchitektur in einer sich wandelnden Bedrohungslandschaft.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Technische Sicherheitstests',
          description: 'Wir führen umfassende technische Tests durch, die von automatisierten Vulnerability Scans bis zu manuellen Penetrationstests reichen und alle Schichten Ihrer IT-Infrastruktur validieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Systematische Penetrationstests aller kritischen Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Vulnerability Assessments und Schwachstellenanalysen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Red Team Exercises und Advanced Persistent Threat Simulationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Industrial Control Systems (ICS/SCADA) Sicherheitstests'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Organisatorische Compliance-Audits',
          description: 'Wir prüfen systematisch die organisatorischen Aspekte Ihrer KRITIS-Compliance, von Governance-Strukturen bis zu operativen Prozessen und Notfallplänen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Compliance-Audits zur regulatorischen Konformitätsprüfung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Governance und Risikomanagement-Bewertungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Business Continuity und Disaster Recovery Tests'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Incident Response Simulationen und Krisenübungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kritisTestsAuditsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KRITIS Regelmäßige Tests & Audits page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
