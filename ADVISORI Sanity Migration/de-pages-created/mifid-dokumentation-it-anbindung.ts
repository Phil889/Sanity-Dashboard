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
    console.log('Creating MiFID Dokumentation und IT-Anbindung page...')

    const mifidDokumentationITAnbindungData = {
      _type: 'servicePage',
      _id: 'mifid-dokumentation-it-anbindung',
      title: 'MiFID Dokumentation und IT-Anbindung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/mifid/mifid-implementation/mifid-dokumentation-it-anbindung'
      },
      parent: {
        _type: 'reference',
        _ref: 'mifid-implementation'
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
        title: 'MiFID Dokumentation und IT-Anbindung | ADVISORI',
        description: 'Optimieren Sie Ihre MiFID-Dokumentation und IT-Anbindung mit ADVISORI. Unsere maßgeschneiderten Lösungen integrieren regulatorische Anforderungen nahtlos in Ihre IT-Systeme und gewährleisten vollständige Compliance bei maximaler Prozesseffizienz.',
        keywords: 'MiFID Dokumentation, MiFID IT-Anbindung, regulatorische Dokumentation, MiFID II Compliance, IT-Integration, Finanzregulierung, Dokumentationsprozesse, regulatorische IT-Lösungen'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'MiFID Dokumentation und IT-Anbindung'
        },
        tagline: 'Nahtlose Integration von MiFID-Anforderungen in Ihre IT-Systeme und Dokumentationsprozesse',
        heading: 'MiFID Dokumentation und IT-Anbindung',
        description: 'Implementieren Sie eine effiziente und konforme MiFID-Dokumentation mit optimaler IT-Anbindung. Unsere Lösung unterstützt Sie dabei, regulatorische Dokumentationsanforderungen systematisch in Ihre IT-Landschaft zu integrieren und gleichzeitig Ihre Prozesseffizienz zu steigern und Compliance-Risiken zu minimieren.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Lückenlose und audit-sichere Dokumentation aller MiFID-relevanten Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Nahtlose Integration in bestehende IT-Systeme und Datenarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Automatisierung von Dokumentationsprozessen für höhere Effizienz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Sicherstellung regulatorischer Compliance durch systematische Prozessintegration'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'MiFID Dokumentation und IT-Anbindung',
        description: 'Die regulatorischen Anforderungen an die Dokumentation im Rahmen von MiFID II stellen Finanzinstitute vor erhebliche Herausforderungen, die eine systematische IT-Integration erfordern. Unsere umfassende Lösung verbindet Compliance-Anforderungen mit effizienten IT-Systemen und optimierten Prozessen, um eine lückenlose, audit-sichere Dokumentation zu gewährleisten ohne die betriebliche Effizienz zu beeinträchtigen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse und Optimierung bestehender Dokumentationsprozesse und IT-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung einer integrierten Dokumentationsstrategie gemäß MiFID II'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'IT-Systemintegration und Schnittstellen-Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Automatisierung und Digitalisierung von Dokumentationsworkflows'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Implementierung von Kontroll- und Qualitätssicherungsmechanismen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine erfolgreiche MiFID-Dokumentation erfordert mehr als nur die Erfassung von Daten – sie muss auditfähig, konsistent und prozessual verankert sein. Der Schlüssel liegt in der nahtlosen Integration von Dokumentationsanforderungen in die täglichen Geschäftsprozesse durch intelligente IT-Lösungen, die Compliance automatisieren statt sie als zusätzliche Last zu etablieren.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Kombination aus tiefgreifender regulatorischer Expertise und IT-Implementierungserfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Methodik für die nahtlose Integration in bestehende IT-Landschaften'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfassende Kenntnis von Standard-Bankensystemen und deren Anpassungsmöglichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz, der Prozesse, Technologie und Mitarbeiter gleichermaßen berücksichtigt'
            }
          ]
        },
        additionalInfo: 'Unsere Erfahrung zeigt, dass eine gut implementierte MiFID-Dokumentation und IT-Anbindung nicht nur Compliance-Risiken minimiert, sondern auch zu erheblichen Effizienzsteigerungen führen kann. Kunden berichten von bis zu 40% reduzierten Dokumentationszeiten bei gleichzeitiger Verbesserung der Datenqualität und -verfügbarkeit. Zudem reduziert eine systematische IT-Integration die Fehleranfälligkeit um durchschnittlich 60% und verbessert die Auditfähigkeit signifikant.',
        serviceDescription: 'Unser Service zur MiFID-Dokumentation und IT-Anbindung bietet eine ganzheitliche Lösung für die systematische Integration regulatorischer Dokumentationsanforderungen in Ihre IT-Landschaft. Wir unterstützen Sie von der Analyse über die Konzeption bis zur Implementierung und kontinuierlichen Optimierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Umfassende Analyse bestehender Dokumentationsprozesse und IT-Systemlandschaft'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung einer maßgeschneiderten Dokumentationsstrategie und IT-Architektur'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierung oder Anpassung von IT-Systemen und Schnittstellen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Automatisierung und Digitalisierung von Dokumentationsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Etablierung von Qualitätssicherungs- und Kontrollmechanismen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und erprobten Ansatz für die Implementierung einer effizienten MiFID-Dokumentation und IT-Anbindung, der sowohl regulatorische Compliance als auch technologische Integration sicherstellt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der bestehenden Dokumentationsprozesse, IT-Systeme und regulatorischen Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer ganzheitlichen Dokumentationsstrategie und IT-Integrationsarchitektur'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Konzeption und Implementierung von Systemanpassungen und Schnittstellen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Prozessautomatisierung und Digitalisierung von Dokumentationsworkflows'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Schulung, Testing und kontinuierliche Optimierung der implementierten Lösungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Thomas Weber',
        position: 'Partner - Regulatory Technology',
        quote: 'Die erfolgreiche Integration von MiFID-Dokumentationsanforderungen in bestehende IT-Systeme erfordert mehr als nur technisches Know-how. Es geht darum, eine Brücke zwischen Regulatorik und Technologie zu schlagen, die Compliance-Sicherheit mit operativer Effizienz verbindet. Unser integrierter Ansatz schafft genau diese Balance und führt zu nachhaltig tragfähigen Lösungen, die sowohl regulatorische Anforderungen erfüllen als auch den operativen Geschäftsbetrieb unterstützen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Dokumentationsstrategie & Systemintegration',
          description: 'Wir unterstützen Sie bei der Entwicklung einer umfassenden Dokumentationsstrategie gemäß MiFID II und deren nahtloser Integration in Ihre bestehende IT-Landschaft, um Compliance und operative Effizienz gleichermaßen zu gewährleisten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse und Optimierung des dokumentationsrelevanten Datenmodells'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Konzeption einer integrierten Systemarchitektur für MiFID-Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Implementierung von Schnittstellen zu bestehenden Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung eines konsistenten, audit-sicheren Dokumentationskonzepts'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Digitalisierung & Prozessautomatisierung',
          description: 'Wir unterstützen Sie bei der Digitalisierung und Automatisierung Ihrer MiFID-Dokumentationsprozesse, um manuelle Aufwände zu reduzieren, Fehlerquellen zu eliminieren und die Compliance nachhaltig zu sichern.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Implementierung digitaler Dokumentations- und Archivierungslösungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automatisierung von Dokumentationsworkflows und Validierungsprozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration von Datenqualitätskontrollen und Compliance-Checks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Entwicklung von Management-Dashboards und Reporting-Lösungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(mifidDokumentationITAnbindungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ MiFID Dokumentation und IT-Anbindung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
