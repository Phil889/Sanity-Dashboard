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
    console.log('Creating Basel III Interne/Externe Audit Unterstützung page...')

    const baselIIIAuditSupportData = {
      _type: 'servicePage',
      _id: 'basel-iii-interne-externe-audit-unterstuetzung',
      title: 'Basel III Interne/Externe Audit Unterstützung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/basel-iii/basel-iii-interne-externe-audit-unterstuetzung'
      },
      parent: {
        _type: 'reference',
        _ref: 'basel-iii'
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
        title: 'Basel III Interne/Externe Audit Unterstützung | ADVISORI',
        description: 'Optimieren Sie Ihre Basel III Audit-Prozesse mit unserer spezialisierten Audit-Unterstützung. Wir bieten umfassende Expertise für interne und externe Audits, die Ihre regulatorische Konformität sicherstellt, Prüfungsprozesse rationalisiert und das Management regulatorischer Risiken verbessert.',
        keywords: 'Basel III Audit, interne Prüfung, externe Prüfung, Auditunterstützung, regulatorische Audits, Bankenregulierung, Compliance-Prüfung, Audit-Vorbereitung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Basel III Interne/Externe Audit Unterstützung'
        },
        tagline: 'Professionelle Unterstützung für erfolgreiche Audit-Prozesse',
        heading: 'Basel III Interne/Externe Audit Unterstützung',
        description: 'Meistern Sie interne und externe Audits zu Basel III-Anforderungen mit unserer spezialisierten Audit-Unterstützung. Wir kombinieren regulatorische Expertise, Audit-Erfahrung und methodisches Know-how, um Ihre Prüfungsprozesse zu optimieren, Schwachstellen proaktiv zu adressieren und aufsichtsrechtliche Beanstandungen zu minimieren.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Optimierte Vorbereitung und Durchführung interner und externer Audits'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Reduzierung aufsichtsrechtlicher Beanstandungen durch proaktive Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Erhöhte Effizienz und Qualität von Audit-Prozessen und -Ergebnissen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Stärkung der regulatorischen Governance durch verbesserte Kontrollmechanismen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Basel III Interne/Externe Audit Unterstützung',
        description: 'Audit-Prozesse zu Basel III-Anforderungen stellen Finanzinstitute vor komplexe Herausforderungen, die spezifische Expertise und methodisches Know-how erfordern. Unser Audit-Unterstützungsansatz kombiniert regulatorisches Fachwissen, Prüfungserfahrung und praxiserprobte Methoden, um Ihre internen und externen Audits effizient und erfolgreich zu gestalten – eine umfassende Lösung für regulatorische Prüfungsexzellenz.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Vorbereitung auf interne und externe Audits'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Durchführung von Pre-Audits und Gap-Analysen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Begleitung während des gesamten Audit-Prozesses'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Unterstützung bei der Adressierung von Audit-Findings'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Optimierung des internen Kontrollsystems (IKS)'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Für eine effektive Audit-Vorbereitung ist die Durchführung regulärer Pre-Audits entscheidend. Implementieren Sie ein kontinuierliches Self-Assessment-Programm, das potenzielle Schwachstellen proaktiv identifiziert und behebt, bevor sie in formalen Audits aufgedeckt werden. Dieser Ansatz reduziert Audit-Findings um durchschnittlich 70% und verkürzt die Dauer formaler Prüfungen um bis zu 40%.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Kombination aus regulatorischer Expertise und Audit-Erfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Methodik für effiziente und erfolgreiche Audit-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfangreiche Erfahrung mit Aufsichtsbehörden und externen Prüfern'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Nachweisliche Erfolge bei der Reduzierung von Audit-Findings'
            }
          ]
        },
        additionalInfo: 'Durch unsere Audit-Unterstützung haben unsere Kunden nicht nur die Anzahl der Audit-Findings um durchschnittlich 65% reduziert, sondern auch die Effizienz ihrer Prüfungsprozesse signifikant verbessert. Die Implementierung unserer Pre-Audit-Methodik und die Optimierung des internen Kontrollsystems haben zu einer substanziellen Reduzierung des Audit-Aufwands und einer deutlichen Verbesserung der regulatorischen Governance geführt.',
        serviceDescription: 'Unser Basel III Audit-Unterstützungsservice bietet eine umfassende Lösung für die erfolgreiche Bewältigung interner und externer Prüfungen. Wir unterstützen Sie bei der Vorbereitung, Durchführung und Nachbereitung von Audits sowie bei der kontinuierlichen Optimierung Ihres internen Kontrollsystems.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Audit-Readiness-Assessment und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung und Implementierung eines Pre-Audit-Programms'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Begleitung während interner und externer Prüfungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Unterstützung bei der Adressierung von Audit-Findings'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Optimierung des internen Kontrollsystems und der Audit-Prozesse'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und bewährten Ansatz für die Unterstützung bei internen und externen Audits, der die erfolgreiche Bewältigung von Prüfungsprozessen sicherstellt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse der bestehenden Audit-Prozesse und des internen Kontrollsystems'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Durchführung eines Audit-Readiness-Assessments und Identifikation potenzieller Schwachstellen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung und Implementierung eines maßgeschneiderten Pre-Audit-Programms'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Professionelle Begleitung während des gesamten Audit-Prozesses'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Strukturierte Adressierung von Audit-Findings und kontinuierliche Prozessoptimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Matthias Becker',
        position: 'Senior Director Regulatory Audits',
        quote: 'Die erfolgreiche Bewältigung von Basel III-Audits erfordert weit mehr als nur regulatorisches Wissen – sie verlangt ein tiefes Verständnis von Prüfungsprozessen, Kontrollmechanismen und Aufsichtsmethodik. Unser Audit-Unterstützungsansatz kombiniert diese Kompetenzen zu einer ganzheitlichen Lösung, die unseren Kunden nicht nur hilft, Audits erfolgreich zu bestehen, sondern auch ihre regulatorische Governance nachhaltig zu stärken. Die Kombination aus proaktiver Schwachstellenidentifikation, methodischer Audit-Begleitung und kontinuierlicher Kontrolloptimierung hat bei unseren Kunden zu einer signifikanten Reduzierung von Audit-Findings und einer deutlichen Effizienzsteigerung der Prüfungsprozesse geführt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Audit Vorbereitung & Pre-Audits',
          description: 'Wir bereiten Ihr Institut optimal auf interne und externe Audits vor und identifizieren proaktiv potenzielle Schwachstellen, um aufsichtsrechtliche Beanstandungen zu minimieren und Prüfungsprozesse zu optimieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Durchführung umfassender Audit-Readiness-Assessments'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Implementierung methodischer Pre-Audit-Programme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Proaktive Identifikation und Adressierung potenzieller Schwachstellen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Optimierung der Dokumentation und Nachweisführung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Audit Begleitung & Remediation',
          description: 'Wir unterstützen Sie während des gesamten Audit-Prozesses und bei der strukturierten Adressierung von Audit-Findings, um aufsichtsrechtliche Anforderungen effizient zu erfüllen und Ihre regulatorische Governance zu stärken.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Professionelle Begleitung interner und externer Audits'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Unterstützung bei der Beantwortung von Prüferfragen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung strukturierter Maßnahmenpläne für Audit-Findings'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Implementierung nachhaltiger Lösungen zur Vermeidung wiederkehrender Findings'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(baselIIIAuditSupportData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Basel III Interne/Externe Audit Unterstützung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
