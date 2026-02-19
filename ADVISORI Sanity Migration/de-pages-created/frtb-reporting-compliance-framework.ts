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
    console.log('Creating FRTB Reporting Compliance Framework page...')

    const frtbReportingComplianceFrameworkData = {
      _type: 'servicePage',
      _id: 'frtb-reporting-compliance-framework',
      title: 'FRTB Reporting Compliance Framework',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/frtb/frtb-implementation/frtb-reporting-compliance-framework'
      },
      parent: {
        _type: 'reference',
        _ref: 'frtb-implementation'
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
        title: 'FRTB Reporting Compliance Framework | ADVISORI',
        description: 'Implementieren Sie ein robustes FRTB-Reporting-Framework mit ADVISORI, das regulatorische Anforderungen erfüllt und gleichzeitig Mehrwert für Ihr Risikomanagement schafft. Profitieren Sie von unserer umfassenden Expertise bei der Entwicklung und Integration maßgeschneiderter FRTB-Reporting-Lösungen.',
        keywords: 'FRTB Reporting, Fundamental Review of the Trading Book, regulatorisches Reporting, FRTB Compliance, Risikoberichterstattung, Handelsrisiken, Marktrisiko-Framework, regulatorische Meldeanforderungen'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FRTB Reporting Compliance Framework'
        },
        tagline: 'Effiziente und konforme FRTB-Berichterstattung für Finanzinstitute',
        heading: 'FRTB Reporting Compliance Framework',
        description: 'Erfüllen Sie die komplexen Reporting-Anforderungen des Fundamental Review of the Trading Book (FRTB) mit einem maßgeschneiderten Compliance-Framework. Unsere umfassende Lösung integriert die regulatorischen Vorgaben in Ihre bestehenden Prozesse und Systeme, optimiert die Datenerfassung und -verarbeitung und stellt sicher, dass Ihre FRTB-Berichterstattung effizient, genau und vollständig ist.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Compliance mit allen FRTB-Reporting-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierte Datenintegration und -verarbeitung für effizientes Reporting'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Transparente und auditierbare Reporting-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Reduzierter manueller Aufwand durch automatisierte Workflows'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'FRTB Reporting Compliance Framework',
        description: 'Die Reporting-Anforderungen des Fundamental Review of the Trading Book (FRTB) stellen Finanzinstitute vor erhebliche Herausforderungen – von der Datenerfassung und -aggregation über die Berechnung und Validierung bis hin zur termingerechten Einreichung regulatorischer Berichte. Unser FRTB Reporting Compliance Framework bietet eine strukturierte und effiziente Lösung, die alle Aspekte des FRTB-Reportings abdeckt und gleichzeitig den Mehrwert der erhobenen Daten für das interne Risikomanagement maximiert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung einer maßgeschneiderten FRTB-Reporting-Architektur'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Integration von Standard- und Internal Model Approach (SBA & IMA)'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Optimierung von Datenflüssen und Berechnungsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Implementierung von Validierungs- und Kontrollmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Aufbau eines Governance-Frameworks für das FRTB-Reporting'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Der Schlüssel zu einem erfolgreichen FRTB-Reporting liegt in der frühzeitigen Integration von Reporting-Anforderungen in die Datenstrategie und IT-Architektur. Ein isolierter Reporting-Ansatz führt oft zu Ineffizienzen, Datenqualitätsproblemen und erhöhtem Ressourceneinsatz. Nutzen Sie die FRTB-Implementierung als Chance, Ihre Risikoberichterstattung grundlegend zu modernisieren und einen Mehrwert über die reine Compliance hinaus zu schaffen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in allen Aspekten der FRTB-Regulierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praktische Erfahrung in der Implementierung komplexer Reporting-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Kombination aus regulatorischem Know-how und technischer Expertise'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Bewährte Methodik für effiziente und qualitativ hochwertige Ergebnisse'
            }
          ]
        },
        additionalInfo: 'Die Implementierung eines effizienten FRTB-Reporting-Frameworks kann die Reporting-Kosten um bis zu 30% reduzieren und gleichzeitig die Datenqualität und -granularität für interne Analysezwecke verbessern. Unsere Kunden berichten zudem von einer signifikanten Verbesserung ihrer Fähigkeit, regulatorische Änderungen schnell und kosteneffizient zu implementieren.',
        serviceDescription: 'Unser FRTB Reporting Compliance Framework bietet eine umfassende Lösung für die effiziente und konforme Umsetzung aller regulatorischen Reporting-Anforderungen im Rahmen des Fundamental Review of the Trading Book. Wir unterstützen Sie von der Konzeption über die technische Implementierung bis hin zum laufenden Betrieb und der kontinuierlichen Optimierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Entwicklung einer maßgeschneiderten FRTB-Reporting-Strategie'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Implementierung effizienter Datenerfassungs- und Verarbeitungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Integration von SBA- und IMA-Reporting-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Etablierung robuster Validierungs- und Kontrollmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Aufbau eines nachhaltigen Governance-Frameworks'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und erprobten Ansatz für die Entwicklung und Implementierung Ihres FRTB Reporting Compliance Frameworks, der eine effiziente und konforme Umsetzung aller regulatorischen Anforderungen sicherstellt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Detaillierte Analyse der FRTB-Reporting-Anforderungen und Ihrer bestehenden Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten Reporting-Architektur und Datenstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung effizienter Datenerfassungs-, Berechnungs- und Reporting-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung robuster Validierungs-, Kontroll- und Governance-Mechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Anpassung an regulatorische Entwicklungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Martin Schneider',
        position: 'Senior Director, Regulatory Reporting',
        quote: 'Die erfolgreiche Implementierung eines FRTB-Reporting-Frameworks erfordert mehr als nur technisches Know-how – es geht um ein tiefes Verständnis der regulatorischen Anforderungen und deren praktische Umsetzung in effizienten Prozessen. Unser ganzheitlicher Ansatz integriert Compliance-Anforderungen nahtlos in Ihre bestehende Infrastruktur und schafft einen Mehrwert für Ihr Risikomanagement über die reine Berichterstattung hinaus.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'FRTB-Reporting-Architektur und -Implementation',
          description: 'Wir unterstützen Sie bei der Entwicklung und Implementierung einer effizienten und zukunftssicheren FRTB-Reporting-Architektur, die alle regulatorischen Anforderungen erfüllt und gleichzeitig den operativen Aufwand minimiert.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Entwicklung einer maßgeschneiderten Reporting-Architektur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Integration in bestehende Systeme und Datenflüsse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Implementierung effizienter Berechnungsprozesse für SBA und IMA'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Aufbau automatisierter Reporting-Workflows'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'FRTB-Reporting-Governance und -Qualitätssicherung',
          description: 'Wir unterstützen Sie bei der Etablierung robuster Governance-Strukturen und Qualitätssicherungsprozesse für Ihr FRTB-Reporting, um die Genauigkeit, Vollständigkeit und Rechtzeitigkeit Ihrer regulatorischen Berichte sicherzustellen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung eines FRTB-Reporting-Governance-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementierung von Validierungs- und Kontrollmechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Etablierung von Eskalations- und Entscheidungsprozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Aufbau von Monitoring- und Optimierungsprozessen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(frtbReportingComplianceFrameworkData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FRTB Reporting Compliance Framework page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
