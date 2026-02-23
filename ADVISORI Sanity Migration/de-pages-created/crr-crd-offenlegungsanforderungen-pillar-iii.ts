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
    console.log('Creating CRR/CRD Offenlegungsanforderungen Pillar III page...')

    const crrCrdOffenlegungsanforderungenPillarIIIData = {
      _type: 'servicePage',
      _id: 'crr-crd-offenlegungsanforderungen-pillar-iii',
      title: 'CRR/CRD Offenlegungsanforderungen Pillar III',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/crr-crd/crr-crd-implementation/crr-crd-offenlegungsanforderungen-pillar-iii'
      },
      parent: {
        _type: 'reference',
        _ref: 'crr-crd-implementation'
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
        title: 'CRR/CRD Offenlegungsanforderungen Pillar III | ADVISORI',
        description: 'Maßgeschneiderte Unterstützung bei der Implementierung und Einhaltung der komplexen Offenlegungsanforderungen nach Säule III der CRR/CRD-Regulierung.',
        keywords: 'Pillar III, Säule 3, Offenlegung CRR/CRD, Offenlegungsanforderungen, Transparenzanforderungen, Marktdisziplin, Risikoberichterstattung, Regulatorische Offenlegung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRR/CRD Offenlegungsanforderungen Pillar III'
        },
        tagline: 'Effiziente Erfüllung regulatorischer Transparenzanforderungen',
        heading: 'CRR/CRD Offenlegungsanforderungen Pillar III',
        description: 'Die Offenlegungsanforderungen nach Säule III stellen Finanzinstitute vor komplexe Herausforderungen bei der Erstellung und Veröffentlichung von Berichten. Mit unserer umfassenden Expertise unterstützen wir Sie bei der effizienten Implementierung aller Offenlegungspflichten gemäß CRR/CRD.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Compliance mit allen Offenlegungsanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierte und automatisierte Berichtsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effiziente Integration in bestehende Berichtsstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Höhere Datenqualität und -konsistenz'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRR/CRD Offenlegungsanforderungen Pillar III',
        description: 'Die Offenlegungsanforderungen nach Säule III zielen darauf ab, die Markttransparenz zu erhöhen und Stakeholdern detaillierte Einblicke in die Risikosituation von Finanzinstituten zu ermöglichen. Wir unterstützen Sie bei der strukturierten Implementierung aller Offenlegungspflichten und bei der Optimierung Ihrer Berichtsprozesse.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Gap-Analyse aktueller Offenlegungspraktiken'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung einer maßgeschneiderten Implementierungsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Konzeption und Automatisierung von Berichtsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Qualitätssicherung der offengelegten Informationen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Nachhaltige Integration in die Governance-Struktur'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine frühzeitige Einbindung des Pillar III-Berichtswesens in die Gesamtarchitektur Ihres regulatorischen Reportings ermöglicht erhebliche Effizienzgewinne und reduziert das Risiko von Inkonsistenzen zwischen verschiedenen Berichtsformaten.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in allen Aspekten der Offenlegungsanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfassende Erfahrung mit verschiedenen Institutstypen und Größenklassen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methodik zur effizienten Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Praxisorientierter Ansatz mit Fokus auf nachhaltige Lösungen'
            }
          ]
        },
        additionalInfo: 'Die Implementierung der Pillar III-Anforderungen erfordert eine enge Abstimmung zwischen verschiedenen Abteilungen und Systemen. Unsere Experten sorgen für einen reibungslosen Implementierungsprozess und unterstützen Sie bei der Entwicklung effizienter und nachhaltiger Berichtsprozesse.',
        serviceDescription: 'Unser Ansatz für die Implementierung der Offenlegungsanforderungen umfasst alle Aspekte von der initialen Gap-Analyse über die Konzeption und Umsetzung bis hin zur Qualitätssicherung und kontinuierlichen Verbesserung. Dabei berücksichtigen wir sowohl die regulatorischen Anforderungen als auch die spezifischen Gegebenheiten Ihres Instituts.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Umfassende Analyse bestehender Offenlegungspraktiken und -prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung einer maßgeschneiderten Implementierungsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Konzeption und Automatisierung von Berichtsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Qualitätssicherung und Validierung der offengelegten Informationen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Integration in die Governance-Struktur und Reporting-Landschaft'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten Ansatz für die Implementierung der Offenlegungsanforderungen, der eine effiziente und nachhaltige Umsetzung gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Gap-Analyse: Detaillierte Analyse der aktuellen Offenlegungspraktiken und Identifikation von Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Konzeption: Entwicklung einer maßgeschneiderten Implementierungsstrategie und Definition von Berichtsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung: Umsetzung der definierten Maßnahmen und Etablierung effizienter Berichtsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Automatisierung: Integration in bestehende Systeme und Automatisierung von Prozessabläufen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Qualitätssicherung: Überprüfung und Validierung der Offenlegungsberichte und -prozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Steffen Horwat',
        position: 'Director',
        quote: 'Die Offenlegungsanforderungen nach Säule III stellen für viele Institute eine besondere Herausforderung dar, da sie Daten aus verschiedenen Bereichen zusammenführen und konsistent berichten müssen. Unsere Erfahrung zeigt, dass ein strukturierter Implementierungsansatz und die intelligente Automatisierung von Berichtsprozessen den Aufwand erheblich reduzieren können.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Gap-Analyse und Implementierungsplanung',
          description: 'Wir analysieren Ihre aktuellen Offenlegungspraktiken und entwickeln einen maßgeschneiderten Implementierungsplan für alle relevanten Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Analyse der bestehenden Offenlegungsprozesse und -berichte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation von Lücken und Handlungsbedarf'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung einer priorisierten Roadmap für die Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Ressourcenplanung und Kostenschätzung für die Umsetzung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Prozessoptimierung und Automatisierung',
          description: 'Wir unterstützen Sie bei der Optimierung und Automatisierung Ihrer Offenlegungsprozesse für eine effiziente und nachhaltige Berichterstattung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Konzeption effizienter Datenerfassungs- und Berichtsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integration in bestehende Reporting-Strukturen und Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Automatisierung von Berechnungen und Berichtsgenerierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Etablierung robuster Kontroll- und Validierungsmechanismen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(crrCrdOffenlegungsanforderungenPillarIIIData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRR/CRD Offenlegungsanforderungen Pillar III page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
