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
    console.log('Creating CRR/CRD Ongoing Compliance page...')

    const crrCrdOngoingComplianceData = {
      _type: 'servicePage',
      _id: 'crr-crd-ongoing-compliance',
      title: 'CRR/CRD Ongoing Compliance',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/crr-crd/crr-crd-ongoing-compliance'
      },
      parent: {
        _type: 'reference',
        _ref: 'crr-crd'
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
        title: 'CRR/CRD Ongoing Compliance | ADVISORI',
        description: 'Kontinuierliche Compliance mit CRR/CRD-Anforderungen sicherstellen. Wir unterstützen bei der dauerhaften Einhaltung regulatorischer Vorgaben für Banken und Finanzinstitute.',
        keywords: 'CRR/CRD Compliance, Bankenregulierung, Ongoing Compliance, Basel III, Regulatory Reporting, Compliance Management, Finanzaufsicht'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRR/CRD Ongoing Compliance'
        },
        tagline: 'Nachhaltige Einhaltung der CRR/CRD-Anforderungen sicherstellen',
        heading: 'CRR/CRD Ongoing Compliance',
        description: 'Kontinuierliche Compliance mit den CRR/CRD-Regelungen erfordert ein proaktives Management und regelmäßige Anpassungen. Wir unterstützen Sie dabei, Ihre Compliance-Prozesse nachhaltig zu gestalten und regulatorische Anforderungen dauerhaft zu erfüllen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Reduzierung von Compliance-Risiken und Vermeidung von Sanktionen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Effizienzsteigerung durch Optimierung der Compliance-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Frühzeitige Erkennung und Behandlung von Compliance-Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Anpassung an regulatorische Änderungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRR/CRD Ongoing Compliance',
        description: 'Die kontinuierliche Einhaltung der CRR/CRD-Anforderungen stellt Finanzinstitute vor anhaltende Herausforderungen. Wir bieten umfassende Unterstützung für die nachhaltige Integration der regulatorischen Vorgaben in Ihre Geschäftsprozesse und helfen Ihnen, ein robustes Compliance-Management-System zu etablieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung und Implementierung eines Compliance-Monitoring-Systems'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Regelmäßige Überprüfung und Aktualisierung der Compliance-Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration regulatorischer Änderungen in bestehende Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Optimierung des Meldewesens und der Berichterstattung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Schulung und Sensibilisierung der Mitarbeiter für Compliance-Themen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Ongoing Compliance ist keine einmalige Aufgabe, sondern ein kontinuierlicher Prozess. Ein proaktiver Ansatz und regelmäßige Reviews helfen, Compliance-Lücken frühzeitig zu erkennen und zu schließen, bevor sie zu größeren Problemen führen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in CRR/CRD-Regulierungen und deren praktischer Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrenes Team aus Compliance-Experten, Risikomanagern und IT-Spezialisten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Enge Zusammenarbeit mit Aufsichtsbehörden und kontinuierliche Marktbeobachtung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Praxiserprobte Methoden und Tools für ein effizientes Compliance-Management'
            }
          ]
        },
        additionalInfo: 'Eine nachhaltige CRR/CRD-Compliance reduziert nicht nur regulatorische Risiken, sondern kann auch zu Wettbewerbsvorteilen führen. Institute mit robusten Compliance-Prozessen sind besser auf zukünftige Regulierungsänderungen vorbereitet und können diese effizienter umsetzen.',
        serviceDescription: 'Unser Ongoing Compliance Service umfasst die kontinuierliche Überwachung, Bewertung und Optimierung Ihrer CRR/CRD-Compliance-Prozesse. Wir unterstützen Sie dabei, regulatorische Änderungen frühzeitig zu erkennen und in Ihre bestehenden Prozesse zu integrieren.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Compliance-Monitoring und regelmäßige Assessments'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Aktualisierung von Compliance-Dokumentationen und -Richtlinien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierung von Kontrollen und Prüfmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Beratung zu regulatorischen Änderungen und deren Auswirkungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Optimierung des Compliance-Reportings'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir bieten einen strukturierten Ansatz für die kontinuierliche Compliance mit CRR/CRD-Anforderungen, der auf Ihre spezifischen Bedürfnisse und Herausforderungen zugeschnitten ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Assessment des aktuellen Compliance-Status und Identifikation von Verbesserungspotentialen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung eines maßgeschneiderten Ongoing Compliance-Programms'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung von Monitoring-Tools und Kontrollmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Regelmäßige Reviews und Anpassung an regulatorische Änderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Verbesserung der Compliance-Prozesse und -Systeme'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Schmidt',
        position: 'Head of Regulatory Affairs',
        quote: 'Die Unterstützung von ADVISORI bei der Etablierung unseres Ongoing Compliance-Programms für CRR/CRD war entscheidend für unseren Erfolg. Dank ihrer Expertise konnten wir nicht nur unsere Compliance-Prozesse optimieren, sondern auch erhebliche Effizienzgewinne erzielen und uns optimal auf zukünftige regulatorische Änderungen vorbereiten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Compliance-Monitoring und Assessment',
          description: 'Wir überwachen kontinuierlich Ihre Compliance-Prozesse und führen regelmäßige Assessments durch, um Verbesserungspotentiale zu identifizieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Entwicklung von Key Compliance Indicators (KCIs)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Regelmäßige Compliance-Audits und Gap-Analysen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Bewertung der Wirksamkeit bestehender Kontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Identifikation von Compliance-Risiken und Handlungsempfehlungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Regulatory Change Management',
          description: 'Wir unterstützen Sie dabei, regulatorische Änderungen frühzeitig zu erkennen und in Ihre bestehenden Prozesse zu integrieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Monitoring regulatorischer Entwicklungen und Trendanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Bewertung der Auswirkungen neuer Regulierungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung von Implementierungsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Unterstützung bei der Anpassung von Prozessen und Systemen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(crrCrdOngoingComplianceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRR/CRD Ongoing Compliance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
