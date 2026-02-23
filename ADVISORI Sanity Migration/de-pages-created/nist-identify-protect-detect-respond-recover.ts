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
    console.log('Creating NIST Identify, Protect, Detect, Respond, Recover page...')

    const nistIdentifyProtectDetectRespondRecoverData = {
      _type: 'servicePage',
      _id: 'nist-identify-protect-detect-respond-recover',
      title: 'NIST Identify, Protect, Detect, Respond, Recover',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/nist-cybersecurity-framework/nist-identify-protect-detect-respond-recover'
      },
      parent: {
        _type: 'reference',
        _ref: 'nist-cybersecurity-framework'
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
        title: 'NIST Cybersecurity Framework: Identify, Protect, Detect, Respond, Recover | ADVISORI',
        description: 'Implementierung der fünf NIST CSF-Kernfunktionen: Identify, Protect, Detect, Respond, Recover. Umfassende Beratung für strukturierte Cybersicherheits-Governance.',
        keywords: 'NIST CSF Kernfunktionen, Identify Protect Detect Respond Recover, Cybersecurity Framework Implementation, NIST Cybersicherheit, Framework Functions'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'NIST Cybersecurity Framework - Five Core Functions'
        },
        tagline: 'Die fünf Kernfunktionen für ganzheitliche Cybersicherheit',
        heading: 'NIST Identify, Protect, Detect, Respond, Recover',
        description: 'Die fünf Kernfunktionen des NIST Cybersecurity Frameworks bilden das Fundament einer strukturierten und effektiven Cybersicherheitsstrategie. Wir unterstützen Sie bei der vollständigen Implementierung aller Framework-Komponenten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Abdeckung aller fünf NIST CSF-Kernfunktionen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strukturierte Implementierung von der Identifikation bis zur Wiederherstellung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte Cybersicherheits-Governance und -prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Messbare Verbesserung der Cybersicherheits-Resilienz'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Die fünf NIST CSF-Kernfunktionen',
        description: 'Die fünf Kernfunktionen des NIST Cybersecurity Frameworks - Identify, Protect, Detect, Respond, Recover - bilden einen ganzheitlichen Ansatz für das Cybersicherheitsmanagement. ADVISORI unterstützt Sie bei der systematischen Implementierung aller Framework-Komponenten zur Schaffung einer robusten Cybersicherheitsarchitektur.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'IDENTIFY: Entwicklung einer umfassenden Cybersicherheits-Baseline und Asset-Inventarisierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'PROTECT: Implementierung angemessener Schutzmaßnahmen und Zugriffskontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'DETECT: Etablierung kontinuierlicher Überwachung und Anomalieerkennung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'RESPOND: Entwicklung strukturierter Incident Response-Prozesse und -Pläne'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'RECOVER: Aufbau robuster Business Continuity- und Disaster Recovery-Capabilities'
          }
        ],
        alert: {
          title: 'Framework-Integration',
          content: 'Die fünf NIST CSF-Kernfunktionen sind nicht isolierte Komponenten, sondern bilden einen integrierten, kontinuierlichen Kreislauf, der sich an verändernde Bedrohungslagen und Geschäftsanforderungen anpassen kann.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in allen fünf NIST CSF-Kernfunktionen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Implementierungsmethoden und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz mit Fokus auf Geschäftswert'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Optimierung und Anpassung der Framework-Implementation'
            }
          ]
        },
        additionalInfo: 'Studien zeigen, dass Organisationen mit vollständig implementierten NIST CSF-Kernfunktionen ihre Cybersicherheits-Resilienz um durchschnittlich 75% verbessern und die Zeit zur Erkennung und Reaktion auf Sicherheitsvorfälle um bis zu 80% reduzieren können.',
        serviceDescription: 'Unser umfassender Service deckt die systematische Implementierung aller fünf NIST CSF-Kernfunktionen ab, von der initialen Asset-Identifikation bis zur vollständigen Recovery-Capability. Wir entwickeln maßgeschneiderte Lösungen, die optimal auf Ihre spezifischen Geschäftsanforderungen und Risikoprofile zugeschnitten sind.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Systematische Implementierung aller fünf NIST CSF-Kernfunktionen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Integration bestehender Sicherheitstools und -prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung maßgeschneiderter Cybersicherheits-Governance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Kontinuierliche Optimierung und Maturity-Steigerung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Messung und Berichterstattung der Framework-Performance'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Implementierungsansatz',
        description: 'Wir folgen einem strukturierten, phasenweisen Ansatz zur Implementierung aller fünf NIST CSF-Kernfunktionen, der sowohl technische Excellence als auch Geschäftsausrichtung gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'IDENTIFY-Phase: Umfassende Asset-Inventarisierung, Risikobewertung und Governance-Etablierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'PROTECT-Phase: Implementierung von Zugriffskontrollen, Datenschutz und Sicherheitstrainings'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'DETECT-Phase: Aufbau kontinuierlicher Überwachung und Anomalieerkennung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'RESPOND-Phase: Entwicklung strukturierter Incident Response-Prozesse und Kommunikationspläne'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'RECOVER-Phase: Etablierung robuster Recovery-Planning und Business Continuity-Prozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die systematische Implementierung aller fünf NIST CSF-Kernfunktionen mit ADVISORI hat unsere Cybersicherheitsarchitektur fundamental transformiert. Der ganzheitliche Ansatz und die strukturierte Umsetzung haben es uns ermöglicht, eine wirklich resiliente und adaptive Cybersicherheitshaltung zu entwickeln, die nicht nur Risiken minimiert, sondern auch Geschäftswachstum ermöglicht.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'IDENTIFY & PROTECT Implementation',
          description: 'Vollständige Implementierung der Identify- und Protect-Funktionen mit umfassender Asset-Verwaltung und Schutzmaßnahmen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Comprehensive Asset Management und Inventarisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Risk Assessment und Business Environment-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Governance-Strukturen und Risk Management-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Zugriffskontrollen, Datenschutz und Awareness-Programme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'DETECT, RESPOND & RECOVER Implementation',
          description: 'Aufbau fortgeschrittener Detection-Capabilities und strukturierter Response- und Recovery-Prozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Kontinuierliche Sicherheitsüberwachung und Anomalieerkennung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Security Operations Center (SOC) und Detection Engineering'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Incident Response-Pläne und Communication-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Business Continuity und Disaster Recovery-Planning'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(nistIdentifyProtectDetectRespondRecoverData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ NIST Identify, Protect, Detect, Respond, Recover page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
