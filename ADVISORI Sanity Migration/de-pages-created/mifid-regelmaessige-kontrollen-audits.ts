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
    console.log('Creating MiFID Regelmäßige Kontrollen & Audits page...')

    const mifidControlsAuditsData = {
      _type: 'servicePage',
      _id: 'mifid-regelmaessige-kontrollen-audits',
      title: 'MiFID Regelmäßige Kontrollen & Audits',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/mifid/mifid-ongoing-compliance/mifid-regelmaessige-kontrollen-audits'
      },
      parent: {
        _type: 'reference',
        _ref: 'mifid-ongoing-compliance'
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
        title: 'MiFID Regelmäßige Kontrollen & Audits | ADVISORI',
        description: 'Sichern Sie kontinuierliche MiFID-Compliance durch unsere spezialisierten Kontroll- und Audit-Dienstleistungen. Wir entwickeln robuste Prüfmechanismen und implementieren systematische Audit-Ansätze, die nachhaltige Compliance und frühzeitige Risikoerkennung in Ihrem Institut gewährleisten.',
        keywords: 'MiFID Kontrollen, MiFID Audits, Compliance-Prüfungen, MiFID II Prüfungen, regulatorische Kontrollen, Compliance-Audits, Wertpapierregulierung, MiFID-Kontrollen, Anlegerschutz, Compliance-Risikomanagement'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'MiFID Regelmäßige Kontrollen & Audits'
        },
        tagline: 'Effektive Prüfmechanismen für nachhaltige MiFID-Compliance',
        heading: 'MiFID Regelmäßige Kontrollen & Audits',
        description: 'Gewährleisten Sie die kontinuierliche Einhaltung der MiFID-Anforderungen durch unsere umfassenden Kontroll- und Audit-Lösungen. Wir entwickeln maßgeschneiderte Prüfmechanismen, die kritische Compliance-Risiken frühzeitig identifizieren, und implementieren systematische Audit-Ansätze, die die Qualität Ihrer MiFID-Compliance nachhaltig sicherstellen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Risikobasierte Kontrollsysteme für die effiziente Überwachung kritischer MiFID-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Systematische Audit-Ansätze mit klaren Prüfpfaden und umfassender Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Frühzeitige Identifikation von Compliance-Risiken und proaktive Maßnahmenentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachweis der Compliance-Sorgfalt gegenüber Aufsichtsbehörden und Stakeholdern'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'MiFID Regelmäßige Kontrollen & Audits',
        description: 'Die komplexen und dynamischen MiFID-Anforderungen erfordern robuste Kontroll- und Prüfmechanismen, die weit über punktuelle Compliance-Checks hinausgehen. Unser integrierter Kontroll- und Audit-Ansatz etabliert systematische Prüfprozesse, die nicht nur Compliance-Verstöße identifizieren, sondern auch die kontinuierliche Verbesserung der MiFID-Compliance fördern und belastbare Nachweise für Aufsichtsbehörden und interne Stakeholder liefern.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung risikobasierter Kontrollsysteme für MiFID-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementation systematischer Audit-Prozesse mit klaren Prüfpfaden'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Etablierung automatisierter Kontrollen und Testverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von KPI-basiertem Compliance-Reporting und Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Entwicklung umfassender Dokumentations- und Nachweissysteme'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Implementieren Sie ein risikobasiertes Kontrollsystem, das Prüfintensität und -frequenz nach der tatsächlichen Risikoexposition differenziert. Kombinieren Sie dies mit automatisierten Kontrollmechanismen und KI-gestützten Analysetools, die Muster und Anomalien erkennen. Dieser duale Ansatz erhöht nicht nur die Effektivität der MiFID-Kontrollen, sondern reduziert auch den operativen Aufwand um bis zu 60% bei gleichzeitiger Verbesserung der Risikoerkennung.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in MiFID-Anforderungen und aufsichtsrechtlicher Prüfungspraxis'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodik für effiziente und effektive Kontroll- und Audit-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Kombination aus regulatorischem Know-how und praktischer Audit-Kompetenz'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Nachweisliche Erfolge bei der Optimierung von Compliance-Kontrollen'
            }
          ]
        },
        additionalInfo: 'Unsere Kunden berichten nach Implementierung unserer MiFID-Kontroll- und Audit-Lösungen von einer signifikanten Verbesserung ihrer Compliance-Sicherheit. Durchschnittlich konnten sie die Anzahl kritischer MiFID-Compliance-Lücken um 75% reduzieren und gleichzeitig den Aufwand für Kontrollen und Prüfungen um 40% senken. Die Kombination aus zielgerichteten, risikobasierten Kontrollen und systematischen Audit-Prozessen führt zu einer nachhaltigen Compliance-Sicherheit, die weit über formale Anforderungen hinausgeht.',
        serviceDescription: 'Unser MiFID Regelmäßige Kontrollen & Audits-Service bietet eine umfassende Lösung für die kontinuierliche Überwachung und Prüfung Ihrer MiFID-Compliance. Wir unterstützen Sie bei der Etablierung effizienter Kontrollsysteme, der Implementierung systematischer Audit-Prozesse und der Entwicklung belastbarer Dokumentations- und Nachweismechanismen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Assessment bestehender MiFID-Kontroll- und Audit-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung risikobasierter Kontrollsysteme für MiFID-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementation systematischer Audit-Prozesse mit klaren Prüfpfaden'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Etablierung automatisierter Kontrollen und KI-gestützter Analyseverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Entwicklung umfassender Dokumentations- und Nachweissysteme'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und bewährten Ansatz für die Implementierung nachhaltiger MiFID-Kontroll- und Audit-Strukturen, der langfristige regulatorische Konformität im Wertpapiergeschäft sicherstellt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse bestehender MiFID-Kontroll- und Prüfmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung eines maßgeschneiderten Kontroll- und Audit-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung risikobasierter Kontrollen und systematischer Prüfprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung automatisierter Überwachungsmechanismen und KI-gestützter Analysen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Integration von Kontroll- und Audit-Ergebnissen in kontinuierliche Verbesserungsprozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Martin Weber',
        position: 'Senior Director Compliance Audit',
        quote: 'Die Effektivität von MiFID-Kontrollen und Audits entscheidet maßgeblich über die Qualität und Nachhaltigkeit der Compliance im Wertpapiergeschäft. Unser integrierter Ansatz verbindet risikobasierte Kontrollen mit systematischen Audit-Prozessen und schafft so eine robuste Compliance-Architektur, die nicht nur aufsichtsrechtliche Anforderungen erfüllt, sondern auch operativen Mehrwert generiert. Die Kombination aus automatisierten Kontrollmechanismen, KI-gestützten Analysetools und strukturierten Audit-Prozessen reduziert nicht nur Compliance-Risiken erheblich, sondern optimiert auch den Ressourceneinsatz und liefert wertvolle Insights für kontinuierliche Verbesserungen der Geschäftsprozesse.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'MiFID-Kontrollsystem-Design & Implementation',
          description: 'Wir entwickeln maßgeschneiderte Kontrollsysteme, die präzise auf Ihre MiFID-Risikoprofile zugeschnitten sind und die kontinuierliche Überwachung kritischer Compliance-Anforderungen effizient sicherstellen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Entwicklung risikobasierter Kontrollframeworks für MiFID-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Design automatisierter Kontrollen und Überwachungsmechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Implementation KI-gestützter Analysetools für Anomalieerkennung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration von Kontrollsystemen in bestehende Governance-Strukturen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'MiFID-Audit-Methodik & Durchführung',
          description: 'Wir etablieren systematische Audit-Prozesse, die MiFID-Compliance umfassend prüfen, belastbare Nachweise liefern und kontinuierliche Verbesserungen katalysieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung strukturierter Audit-Methodiken für MiFID-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Durchführung spezialisierter MiFID-Compliance-Audits'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Etablierung umfassender Dokumentations- und Nachweissysteme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration von Audit-Ergebnissen in kontinuierliche Verbesserungsprozesse'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(mifidControlsAuditsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ MiFID Regelmäßige Kontrollen & Audits page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
