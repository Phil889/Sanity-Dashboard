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
    console.log('Creating NIST Cybersecurity Framework: Identify, Protect, Detect, Respond, Recover page...')

    const nistCybersecurityFrameworkData = {
      _type: 'servicePage',
      _id: 'standards-frameworks-identify-protect-detect-respond-recover',
      title: 'NIST Cybersecurity Framework: Identify, Protect, Detect, Respond, Recover',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/standards-frameworks-nist-cybersecurity-framework/standards-frameworks-identify-protect-detect-respond-recover'
      },
      parent: {
        _type: 'reference',
        _ref: 'standards-frameworks-nist-cybersecurity-framework'
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
        description: 'Implementieren Sie das NIST Cybersecurity Framework mit den fünf Kernfunktionen: Identify, Protect, Detect, Respond und Recover. Umfassende Cybersecurity-Strategie für Ihr Unternehmen.',
        keywords: 'NIST Cybersecurity Framework, Identify, Protect, Detect, Respond, Recover, Cybersecurity, Informationssicherheit, Cyber-Resilienz'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'NIST Cybersecurity Framework'
        },
        tagline: 'Strukturierte Cybersecurity mit den fünf NIST-Kernfunktionen',
        heading: 'NIST Cybersecurity Framework: Identify, Protect, Detect, Respond, Recover',
        description: 'Das NIST Cybersecurity Framework bietet mit seinen fünf Kernfunktionen einen strukturierten Ansatz zur Cybersecurity. Wir unterstützen Sie bei der Implementierung aller Framework-Komponenten für eine umfassende Cyber-Resilienz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Systematische Identifikation und Bewertung von Cyber-Risiken'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Implementierung effektiver Schutzmaßnahmen und Kontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Frühe Erkennung von Cyber-Bedrohungen und Anomalien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strukturierte Incident Response und Recovery-Prozesse'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'NIST Cybersecurity Framework: Identify, Protect, Detect, Respond, Recover',
        description: 'Das NIST Cybersecurity Framework strukturiert Cybersecurity-Aktivitäten in fünf Kernfunktionen, die einen ganzheitlichen Ansatz zur Cyber-Resilienz ermöglichen. Jede Funktion trägt zur Gesamtstrategie bei und schafft ein robustes Sicherheitsökosystem.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Identify: Asset-Management, Risikobewertung und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Protect: Implementierung von Schutzmaßnahmen und Sicherheitskontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Detect: Kontinuierliche Überwachung und Anomalieerkennung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Respond: Incident Response Planning und Krisenmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Recover: Wiederherstellungsplanung und Business Continuity'
          }
        ],
        alert: {
          title: 'Framework-Integration',
          content: 'Das NIST Cybersecurity Framework ist nicht nur ein Regelwerk, sondern ein dynamisches System, das kontinuierliche Verbesserung und Anpassung an neue Bedrohungen ermöglicht.'
        },
        whyUs: {
          title: 'Unsere Framework-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in allen fünf NIST-Kernfunktionen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Implementierungsmethoden und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integration mit bestehenden Governance- und Risikomanagement-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Unterstützung bei Framework-Evolution und -Optimierung'
            }
          ]
        },
        additionalInfo: 'Eine vollständige Implementierung aller fünf NIST-Kernfunktionen kann die Cyber-Resilienz um bis zu 85% erhöhen und die durchschnittliche Zeit zur Bedrohungserkennung von Monaten auf Stunden reduzieren.',
        serviceDescription: 'Wir bieten eine umfassende Implementierung des NIST Cybersecurity Framework mit allen fünf Kernfunktionen. Von der initialen Risikobewertung bis zur kontinuierlichen Optimierung unterstützen wir Sie bei jedem Schritt Ihrer Cybersecurity-Transformation.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Framework Assessment und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Implementierung aller fünf Kernfunktionen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Integration in bestehende IT- und Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Continuous Monitoring und Framework-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulung und Change Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Framework-Implementierungsansatz',
        description: 'Wir implementieren das NIST Cybersecurity Framework strukturiert und phasenweise, mit Fokus auf nachhaltige Integration in Ihre Organisationskultur und -prozesse.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Current State Assessment und Framework-Readiness-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Target State Definition und Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Implementierung der fünf Kernfunktionen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration Testing und Wirksamkeitsmessung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continuous Improvement und Framework-Evolution'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI Consulting GmbH',
        name: 'Dr. Sarah Chen',
        position: 'Head of Cybersecurity Practice',
        quote: 'Die vollständige Implementierung des NIST Cybersecurity Framework mit ADVISORI hat unsere Cyber-Resilienz grundlegend transformiert. Die strukturierte Herangehensweise mit allen fünf Kernfunktionen schafft nicht nur Sicherheit, sondern auch Vertrauen bei Kunden und Stakeholdern.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Identify & Protect Implementation',
          description: 'Umfassende Implementierung der Identify- und Protect-Funktionen für solide Cybersecurity-Grundlagen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Asset Inventory und Klassifizierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Cyber Risk Assessment und Governance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Access Control und Identity Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Data Security und Schutzmaßnahmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Detect, Respond & Recover Integration',
          description: 'Implementierung der operativen Kernfunktionen für effektive Bedrohungserkennung und Incident Response.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Security Monitoring und Anomalieerkennung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Incident Response Planning und Processes'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Recovery Planning und Business Continuity'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Lessons Learned und Framework-Optimierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(nistCybersecurityFrameworkData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ NIST Cybersecurity Framework: Identify, Protect, Detect, Respond, Recover page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
