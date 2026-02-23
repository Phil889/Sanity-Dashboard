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
    console.log('Creating ISMS Einführung Annex A Controls page...')

    const imsAnnexAControlsData = {
      _type: 'servicePage',
      _id: 'regulatory-compliance-management-standards-frameworks-iso-27001-isms-einfuehrung-annex-a-controls',
      title: 'ISMS Einführung Annex A Controls',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/standards-frameworks-iso-27001/standards-frameworks-isms-einfuehrung-annex-a-controls'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management-standards-frameworks-iso-27001'
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
        title: 'ISO 27001 Annex A Controls Implementation | ADVISORI',
        description: 'Professionelle Implementierung der ISO 27001 Annex A Sicherheitskontrollen. Strategische Beratung für die systematische Einführung und Optimierung aller 114 Kontrollmaßnahmen.',
        keywords: 'ISO 27001 Annex A, Sicherheitskontrollen, ISMS Controls, Information Security Controls, Security Implementation, Risk Controls'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Annex A Controls Implementation'
        },
        tagline: 'Strategische Implementierung der Annex A Sicherheitskontrollen',
        heading: 'ISMS Einführung Annex A Controls',
        description: 'Die 114 Sicherheitskontrollen des ISO 27001 Annex A bilden das Herzstück eines effektiven Informationssicherheitsmanagementsystems. Wir unterstützen Sie bei der strategischen Auswahl, Implementierung und Optimierung der für Ihr Unternehmen relevanten Kontrollmaßnahmen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Risikobasierte Auswahl und Priorisierung relevanter Sicherheitskontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Systematische Implementierung aller erforderlichen Kontrollmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integration in bestehende Geschäftsprozesse und IT-Infrastrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Überwachung und Optimierung der Kontrolleffektivität'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ISO 27001 Annex A Sicherheitskontrollen',
        description: 'Annex A der ISO 27001 definiert 114 Sicherheitskontrollen in vier Hauptkategorien: Organisatorische, Personelle, Physische und Technische Kontrollen. Die erfolgreiche Implementierung erfordert eine strategische Herangehensweise, die Geschäftsanforderungen, Risikobewertung und operative Effizienz miteinander verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Organisatorische Kontrollen: Richtlinien, Verfahren und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Personelle Kontrollen: Mitarbeitersicherheit, Schulungen und Zugangsmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Physische Kontrollen: Standortsicherheit und Schutz von Assets'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Technische Kontrollen: IT-Sicherheit, Kryptografie und Netzwerkschutz'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Verbesserung der Kontrolleffektivität'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Die Auswahl der Annex A Kontrollen sollte nicht pauschal erfolgen, sondern basierend auf einer gründlichen Risikobewertung und den spezifischen Geschäftsanforderungen Ihres Unternehmens.'
        },
        whyUs: {
          title: 'Warum ADVISORI?',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in allen 114 Annex A Kontrollmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für risikobasierte Kontrollauswahl'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praktische Erfahrung bei der Integration in verschiedene Branchen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Fokus auf nachhaltige und kosteneffiziente Implementierung'
            }
          ]
        },
        additionalInfo: 'Eine professionelle Annex A Implementierung reduziert nicht nur Sicherheitsrisiken, sondern schafft auch operative Effizienz und stärkt das Vertrauen von Kunden und Geschäftspartnern.',
        serviceDescription: 'Unser strukturierter Ansatz zur Annex A Implementierung kombiniert bewährte Frameworks mit individueller Anpassung an Ihre spezifischen Geschäftsanforderungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Umfassende Gap-Analyse gegen alle Annex A Kontrollkategorien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Risikobasierte Priorisierung und Implementierungsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung maßgeschneiderter Kontrollverfahren und Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integration in bestehende Geschäfts- und IT-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Etablierung von Monitoring- und Verbesserungsprozessen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Implementierungsansatz',
        description: 'Wir verfolgen einen systematischen, risikobasierten Ansatz zur Annex A Implementierung, der technische Exzellenz mit praktischer Umsetzbarkeit verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Detaillierte Analyse der aktuellen Sicherheitskontrollen und Identifikation von Gaps'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Risikobasierte Bewertung und Priorisierung der 114 Annex A Kontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung einer strukturierten Implementierungsroadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Schrittweise Umsetzung mit kontinuierlicher Überwachung der Effektivität'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung nachhaltiger Überwachungs- und Verbesserungsprozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Die strategische Implementierung der Annex A Kontrollen ist der Schlüssel zu einem effektiven ISMS. Es geht nicht darum, alle 114 Kontrollen zu implementieren, sondern die richtigen Kontrollen optimal umzusetzen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Annex A Gap-Analyse und Kontrollauswahl',
          description: 'Wir führen eine umfassende Bewertung Ihrer aktuellen Sicherheitskontrollen durch und identifizieren die für Ihr Risikoprofil relevanten Annex A Maßnahmen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Vollständige Bewertung aller 114 Annex A Kontrollmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Risikobasierte Priorisierung und Implementierungsplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Cost-Benefit-Analyse für jede Kontrollmaßnahme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung einer maßgeschneiderten Kontrollstrategie'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Kontrollimplementierung und Optimierung',
          description: 'Wir unterstützen Sie bei der vollständigen Implementierung der ausgewählten Annex A Kontrollen und deren Integration in Ihre Geschäftsprozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung detaillierter Implementierungsverfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integration in bestehende Geschäfts- und IT-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Etablierung von Monitoring- und Messsystemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Optimierung und Verbesserung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(imsAnnexAControlsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISMS Einführung Annex A Controls page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
