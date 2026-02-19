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
    console.log('Creating EBA FinRep COREP Anpassungen page...')

    const ebaFinrepCorepAnpassungenData = {
      _type: 'servicePage',
      _id: 'eba-finrep-corep-anpassungen',
      title: 'EBA FinRep COREP Anpassungen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eba/eba-guidelines-implementation/eba-finrep-corep-anpassungen'
      },
      parent: {
        _type: 'reference',
        _ref: 'eba-guidelines-implementation'
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
        title: 'EBA FinRep COREP Anpassungen | ADVISORI',
        description: 'Optimieren Sie Ihre FinRep- und COREP-Berichterstattung gemäß den aktuellen EBA-Anforderungen. Unsere Experten unterstützen Sie bei der effizienten Anpassung Ihrer Meldeprozesse und -systeme an neue regulatorische Vorgaben.',
        keywords: 'EBA FinRep, COREP, Meldewesen, Regulatorische Berichterstattung, Finanzreporting, EBA-Vorgaben, Aufsichtsrechtliches Reporting, Meldewesen-Optimierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EBA FinRep COREP Anpassungen'
        },
        tagline: 'Effiziente Anpassung an neue Meldeanforderungen',
        heading: 'EBA FinRep COREP Anpassungen',
        description: 'Die ständige Evolution der aufsichtsrechtlichen Meldeanforderungen stellt Finanzinstitute vor kontinuierliche Herausforderungen. Wir unterstützen Sie bei der systematischen Anpassung Ihrer FinRep- und COREP-Berichterstattung an neue EBA-Vorgaben – von der Gap-Analyse über die Prozessoptimierung bis zur technischen Implementierung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Compliance-Sicherheit durch frühzeitige und korrekte Implementierung neuer Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Kosteneffizienz durch optimierte und automatisierte Meldeprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Datenqualitätsverbesserung durch konsistente Meldestrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Risikominimierung durch validierte und auditierbare Berichtsprozesse'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EBA FinRep COREP Anpassungen',
        description: 'Die European Banking Authority (EBA) aktualisiert regelmäßig die Anforderungen für die Financial Reporting (FinRep) und Common Reporting (COREP) Meldungen. Diese Änderungen erfordern kontinuierliche Anpassungen in Prozessen, Systemen und Datenstrukturen. Unsere Spezialisten unterstützen Sie bei der effizienten und termingerechten Umsetzung dieser Anpassungen – von der detaillierten Analyse der neuen Anforderungen bis zur vollständigen Implementierung in Ihren Meldeprozessen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Gap-Analyse neuer EBA-Meldeanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Anpassung der Datenextraktion und -transformation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Optimierung und Automatisierung von Meldeprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Implementierung und Testing neuer Meldeformate'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Validierung und Qualitätssicherung der Meldeinhalte'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Die frühzeitige Auseinandersetzung mit kommenden EBA-Änderungen im FinRep- und COREP-Bereich ist entscheidend für eine effiziente Umsetzung. Besonders wichtig ist dabei ein datengetriebener Ansatz, der die Auswirkungen neuer Anforderungen auf Ihre bestehenden Datenstrukturen, ETL-Prozesse und Reportingsysteme systematisch analysiert und potenzielle Herausforderungen frühzeitig identifiziert.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in EBA-Meldeanforderungen und deren praktischer Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrung mit diversen Meldewesen-Systemen und deren Anpassungsmöglichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Effizienzorientierter Ansatz mit Fokus auf Automatisierung und Nachvollziehbarkeit'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Interdisziplinäre Teams mit regulatorischem, fachlichem und technischem Know-how'
            }
          ]
        },
        additionalInfo: 'Die kontinuierliche Evolution der FinRep- und COREP-Anforderungen spiegelt das regulatorische Bestreben wider, die Transparenz und Vergleichbarkeit im Finanzsektor zu erhöhen. Eine strukturierte und effiziente Anpassung an diese Änderungen schafft nicht nur Compliance-Sicherheit, sondern kann auch zu verbesserten internen Steuerungsinformationen und Datenstrukturen führen.',
        serviceDescription: 'Unsere Dienstleistungen im Bereich der EBA FinRep- und COREP-Anpassungen umfassen den gesamten Lebenszyklus – von der frühzeitigen Analyse neuer Anforderungen über die Konzeption der notwendigen Anpassungen bis zur operativen Implementierung und Qualitätssicherung. Dabei berücksichtigen wir stets Ihre individuellen Systemlandschaften, Prozesse und organisatorischen Rahmenbedingungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Analyse und Bewertung neuer Meldeanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung von Anpassungskonzepten für Prozesse und Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierung technischer Änderungen in Meldewesen-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Qualitätssicherung und Validierung der angepassten Meldungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulung und Wissenstransfer für nachhaltige Compliance'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen systematischen und erprobten Ansatz für die Anpassung Ihrer FinRep- und COREP-Berichterstattung, der Ihnen maximale Sicherheit und Effizienz bietet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Detaillierte Analyse der neuen EBA-Anforderungen und deren Implikationen für Ihre Organisation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Gap-Analyse zur Identifikation von Handlungsbedarfen in Datenstrukturen, Prozessen und Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung eines maßgeschneiderten Implementierungsplans mit klaren Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Anpassung der Datenextraktion und -transformation für neue Meldepositionen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Implementierung und Testing der angepassten Meldeprozesse und -formate'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 6),
            text: 'Qualitätssicherung und Validierung der Meldeinhalte vor Einreichung bei der Aufsicht'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Thomas Müller',
        position: 'Head of Regulatory Reporting',
        quote: 'Die Zusammenarbeit mit ADVISORI bei der Anpassung unserer FinRep- und COREP-Meldeprozesse hat uns enorm geholfen, die regulatorischen Änderungen effizient und termingerecht umzusetzen. Besonders wertvoll war das tiefe Verständnis des Teams für die technischen und fachlichen Implikationen der neuen Anforderungen. Der strukturierte Ansatz und die enge Zusammenarbeit mit unseren internen Teams haben dazu beigetragen, dass wir nicht nur die Compliance-Anforderungen erfüllen, sondern auch unsere Meldeprozesse insgesamt optimieren konnten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Gap-Analyse & Implementierungsplanung',
          description: 'Wir analysieren detailliert die neuen FinRep- und COREP-Anforderungen und deren Auswirkungen auf Ihre bestehenden Strukturen und Prozesse, um einen effizienten Implementierungsplan zu entwickeln.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse neuer EBA-Anforderungen und Taxonomie-Änderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung der Auswirkungen auf Datenquellen, ETL-Prozesse und Reportingsysteme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation von Daten- und Prozesslücken sowie technischen Anpassungsbedarfen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung eines priorisierten Implementierungsplans mit klaren Meilensteinen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Prozess- & Systemanpassung',
          description: 'Wir unterstützen Sie bei der effizienten Anpassung Ihrer Meldeprozesse und -systeme an die neuen Anforderungen, mit Fokus auf Automatisierung, Nachvollziehbarkeit und Datenqualität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Konzeption und Implementierung angepasster Datenextraktions- und Transformationsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung und Anpassung von Mapping-Regeln und Berechnungslogiken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration neuer Datenanforderungen in bestehende Systeme und Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Optimierung und Automatisierung der angepassten Meldeprozesse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Qualitätssicherung & Validierung',
          description: 'Wir gewährleisten die Richtigkeit und Vollständigkeit Ihrer angepassten FinRep- und COREP-Meldungen durch umfassende Prüfungen und Validierungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Entwicklung und Implementierung spezifischer Validierungsregeln'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Durchführung von Paralleltests und Konsistenzprüfungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Analyse und Dokumentation von Abweichungen und deren Ursachen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Entwicklung von Monitoring-Prozessen für kontinuierliche Qualitätssicherung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(ebaFinrepCorepAnpassungenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EBA FinRep COREP Anpassungen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
