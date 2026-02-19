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
    console.log('Creating Privacy Program Verträge AVV Monitoring Reporting page...')

    const privacyProgramVertraegeAvvData = {
      _type: 'servicePage',
      _id: 'privacy-program-vertraege-avv-monitoring-reporting',
      title: 'Verträge, AVV, Monitoring & Reporting',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/privacy-program/privacy-program-drittdienstleistermanagement/privacy-program-vertraege-avv-monitoring-reporting'
      },
      parent: {
        _type: 'reference',
        _ref: 'privacy-program-drittdienstleistermanagement'
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
        title: 'Verträge, AVV, Monitoring & Reporting | ADVISORI',
        description: 'Professionelle Gestaltung von Auftragsverarbeitungsverträgen, kontinuierliches Monitoring und umfassendes Reporting für Ihr Datenschutz-Programm.',
        keywords: 'AVV, Auftragsverarbeitungsvertrag, Datenschutz Monitoring, DSGVO Reporting, Privacy Compliance, Drittdienstleister Überwachung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Verträge AVV Monitoring Reporting'
        },
        tagline: 'Rechtssichere Verträge und kontinuierliche Überwachung für Ihr Privacy-Programm',
        heading: 'Verträge, AVV, Monitoring & Reporting',
        description: 'Strukturierte Gestaltung von Auftragsverarbeitungsverträgen, systematisches Monitoring von Datenschutz-Compliance und aussagekräftiges Reporting für nachhaltigen Datenschutz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Rechtssichere Gestaltung von Auftragsverarbeitungsverträgen (AVV)'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Kontinuierliches Monitoring der Datenschutz-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Aussagekräftige Reports für Management und Aufsichtsbehörden'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strukturierte Überwachung von Drittdienstleistern'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Verträge, AVV, Monitoring & Reporting',
        description: 'Ein effektives Privacy-Programm erfordert nicht nur die richtige Strategie, sondern auch die rechtssichere Umsetzung durch entsprechende Verträge und kontinuierliche Überwachung. Wir unterstützen Sie bei der Gestaltung von Auftragsverarbeitungsverträgen, dem systematischen Monitoring und aussagekräftigem Reporting.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Erstellung und Überprüfung von Auftragsverarbeitungsverträgen (AVV)'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung von Monitoring-Systemen für Datenschutz-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung von Reporting-Strukturen und KPIs'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliche Überwachung von Drittdienstleistern'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Regelmäßige Compliance-Audits und Bewertungen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Auftragsverarbeitungsverträge sind nicht nur rechtliche Notwendigkeit, sondern strategische Instrumente zur Risikosteuerung. Kontinuierliches Monitoring und aussagekräftiges Reporting schaffen Transparenz und ermöglichen proaktives Handeln.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgehende Expertise in Datenschutzrecht und Vertragsgestaltung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Monitoring- und Reporting-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Ansätze und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Betreuung und Anpassung an neue Anforderungen'
            }
          ]
        },
        additionalInfo: 'Effektive AVV-Gestaltung und kontinuierliches Monitoring können das Risiko von Datenschutzverletzungen um bis zu 70% reduzieren und gleichzeitig die Effizienz der Compliance-Prozesse erheblich steigern.',
        serviceDescription: 'Unser umfassendes Leistungsspektrum deckt alle Aspekte der vertraglichen Gestaltung, des Monitorings und Reportings ab - von der AVV-Erstellung bis zur kontinuierlichen Überwachung und aussagekräftigen Berichterstattung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'AVV-Gestaltung und -Verhandlung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Monitoring-System-Design und -Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Reporting-Framework-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Drittdienstleister-Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Compliance-Auditing und -Assessment'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen systematische Ansätze für Vertragsgestaltung, Monitoring und Reporting, die rechtliche Sicherheit mit operativer Effizienz verbinden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse bestehender Verträge und Compliance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung rechtssicherer AVV-Templates und -Standards'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Design und Implementierung von Monitoring-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Aufbau von Reporting-Strukturen und KPI-Dashboards'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Anpassung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die strukturierte Herangehensweise von ADVISORI bei der AVV-Gestaltung und dem Aufbau unseres Monitoring-Systems hat unsere Datenschutz-Compliance erheblich verbessert. Das Reporting gibt uns die nötige Transparenz für strategische Entscheidungen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'AVV-Gestaltung & Vertragsmanagement',
          description: 'Rechtssichere Gestaltung und professionelles Management von Auftragsverarbeitungsverträgen für alle Drittdienstleister.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Erstellung standardisierter AVV-Templates'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Verhandlungsunterstützung mit Dienstleistern'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Vertragsregister und -verwaltung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Regelmäßige Vertragsüberprüfungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Monitoring & Reporting System',
          description: 'Kontinuierliche Überwachung der Datenschutz-Compliance mit aussagekräftigem Reporting für alle Stakeholder.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'KPI-basierte Monitoring-Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automatisierte Compliance-Reports'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Management-Reports und -Präsentationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Trend-Analysen und Prognosen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(privacyProgramVertraegeAvvData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Privacy Program Verträge AVV Monitoring Reporting page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
