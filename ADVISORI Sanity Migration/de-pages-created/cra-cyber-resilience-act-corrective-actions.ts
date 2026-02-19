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
    console.log('Creating CRA Cyber Resilience Act Corrective Actions page...')

    const craCorrectiveActionsData = {
      _type: 'servicePage',
      _id: 'cra-cyber-resilience-act-corrective-actions',
      title: 'CRA Cyber Resilience Act Corrective Actions',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-cyber-resilience-act-market-surveillance/cra-cyber-resilience-act-corrective-actions'
      },
      parent: {
        _type: 'reference',
        _ref: 'cra-cyber-resilience-act-market-surveillance'
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
        title: 'CRA Corrective Actions | EU Cyber Resilience Act | ADVISORI',
        description: 'Expertenhilfe bei CRA-Korrekturmaßnahmen und Remediation im Rahmen des EU Cyber Resilience Act. Minimieren Sie Compliance-Risiken und sichern Sie Marktkonformität.',
        keywords: 'CRA Corrective Actions, Cyber Resilience Act, EU-Verordnung, Korrekturmaßnahmen, Compliance, Marktüberwachung, Remediation'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA Corrective Actions'
        },
        tagline: 'Effektive Korrekturmaßnahmen zur CRA-Compliance',
        heading: 'CRA Cyber Resilience Act Corrective Actions',
        description: 'Professionelle Unterstützung bei der Entwicklung und Umsetzung von Korrekturmaßnahmen im Rahmen des EU Cyber Resilience Act. Wir helfen Ihnen, Compliance-Defizite schnell und nachhaltig zu beheben.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Schnelle Identifikation und Behebung von CRA-Compliance-Defiziten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strukturierte Entwicklung nachhaltiger Korrekturmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Minimierung von Sanktionsrisiken und Marktaussperrungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Wiederherstellung der Marktkonformität und des Kundenvertrauens'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRA Corrective Actions - Systematische Compliance-Wiederherstellung',
        description: 'Wenn Marktüberwachungsbehörden CRA-Verstöße feststellen, sind umgehende und effektive Korrekturmaßnahmen erforderlich. Wir unterstützen Sie dabei, strukturiert und nachweisbar alle erforderlichen Schritte zur Compliance-Wiederherstellung umzusetzen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse der identifizierten CRA-Compliance-Defizite und Risikobeurteilung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung gezielter Korrekturmaßnahmen und Remediation-Pläne'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Koordination mit Marktüberwachungsbehörden und Compliance-Nachweis'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Implementierung verbesserter Sicherheitsprozesse und -kontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Präventionsmaßnahmen für die Zukunft'
          }
        ],
        alert: {
          title: 'Compliance-Hinweis',
          content: 'Bei CRA-Verstößen haben Hersteller begrenzte Zeit für Korrekturmaßnahmen. Schnelles und strukturiertes Handeln ist entscheidend, um schwerwiegende Sanktionen und Marktaussperrungen zu vermeiden.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Kenntnis der CRA-Anforderungen und Durchführungsverordnungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrung in der Zusammenarbeit mit EU-Marktüberwachungsbehörden'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methodiken für effektive Korrekturmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Technische und rechtliche Expertise für nachhaltige Compliance'
            }
          ]
        },
        additionalInfo: 'Effektive CRA-Korrekturmaßnahmen können nicht nur unmittelbare Compliance-Probleme lösen, sondern auch die langfristige Cybersecurity-Posture und Marktposition Ihres Unternehmens stärken.',
        serviceDescription: 'Wir bieten umfassende Unterstützung bei der Entwicklung, Umsetzung und Dokumentation von CRA-Korrekturmaßnahmen. Von der initialen Defizitanalyse bis zur nachhaltigen Compliance-Sicherstellung begleiten wir Sie durch den gesamten Remediation-Prozess.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'CRA-Compliance-Gap-Analyse und Risikobeurteilung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung gezielter Korrekturmaßnahmen-Pläne'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Koordination mit Marktüberwachungsbehörden'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Implementierung und Dokumentation von Verbesserungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Langfristige Präventions- und Überwachungsstrategien'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Ansatz',
        description: 'Wir verfolgen einen strukturierten und nachweisbaren Ansatz zur CRA-Compliance-Wiederherstellung, der sowohl unmittelbare Probleme löst als auch langfristige Prävention sicherstellt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse der CRA-Compliance-Defizite und Auswirkungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Priorisierung von Korrekturmaßnahmen nach Risiko und Dringlichkeit'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung detaillierter Remediation-Pläne mit Zeitschienen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Überwachte Implementierung und kontinuierliche Fortschrittskontrolle'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Dokumentation und Nachweis für Marktüberwachungsbehörden'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'In kritischen Compliance-Situationen ist schnelles und kompetentes Handeln entscheidend. ADVISORI hat uns dabei geholfen, CRA-Defizite systematisch zu beheben und unsere Marktposition zu sichern.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'CRA-Compliance-Gap-Analyse',
          description: 'Detaillierte Bewertung identifizierter CRA-Verstöße und ihrer Auswirkungen auf Ihre Geschäftstätigkeit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Vollständige Analyse der CRA-Compliance-Defizite'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Risikobewertung und Auswirkungsanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation kritischer Handlungsfelder'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Priorisierung nach Dringlichkeit und Ressourcen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Korrekturmaßnahmen-Entwicklung',
          description: 'Strukturierte Entwicklung gezielter und nachhaltiger Korrekturmaßnahmen zur CRA-Compliance-Wiederherstellung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Maßgeschneiderte Remediation-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Detaillierte Umsetzungspläne mit Zeitschienen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Ressourcenplanung und Budgetierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Nachhaltige Präventionsmaßnahmen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craCorrectiveActionsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA Cyber Resilience Act Corrective Actions page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
