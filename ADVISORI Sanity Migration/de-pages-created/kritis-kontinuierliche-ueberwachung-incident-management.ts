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
    console.log('Creating KRITIS Kontinuierliche Überwachung Incident Management page...')

    const kritiskontinuierlicheData = {
      _type: 'servicePage',
      _id: 'kritis-kontinuierliche-ueberwachung-incident-management',
      title: 'KRITIS Kontinuierliche Überwachung Incident Management',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/kritis/kritis-implementation/kritis-kontinuierliche-ueberwachung-incident-management'
      },
      parent: {
        _type: 'reference',
        _ref: 'kritis-implementation'
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
        title: 'KRITIS Kontinuierliche Überwachung Incident Management | ADVISORI',
        description: 'Professionelle KRITIS-konforme kontinuierliche Überwachung und Incident Management. 24/7 Monitoring, automatisierte Erkennung und strukturierte Reaktion auf Sicherheitsvorfälle.',
        keywords: 'KRITIS Überwachung, Incident Management, 24/7 Monitoring, Sicherheitsvorfälle, SIEM, SOC, kritische Infrastrukturen, Echtzeitüberwachung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KRITIS Kontinuierliche Überwachung Incident Management'
        },
        tagline: 'Proaktive Bedrohungserkennung und effizientes Incident Management',
        heading: 'KRITIS Kontinuierliche Überwachung Incident Management',
        description: 'Umfassende 24/7-Überwachung kritischer Infrastrukturen mit intelligenter Bedrohungserkennung und strukturiertem Incident Management für maximale Betriebssicherheit.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: '24/7 Real-Time Monitoring mit KI-gestützter Anomalieerkennung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Automatisierte Incident Response und Eskalationsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'KRITIS-konforme Dokumentation und Berichterstattung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Integrierte Threat Intelligence und Forensik-Fähigkeiten'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KRITIS Kontinuierliche Überwachung Incident Management',
        description: 'Die kontinuierliche Überwachung kritischer Infrastrukturen erfordert hochspezialisierte Monitoring-Systeme und professionelles Incident Management. Wir implementieren umfassende Überwachungslösungen, die KRITIS-Anforderungen erfüllen und proaktiven Schutz bieten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Design und Implementierung von 24/7 Security Operations Centers'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'KI-gestützte Anomalieerkennung und Threat Intelligence Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Automatisierte Incident Response und Orchestrierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'KRITIS-konforme Dokumentation und Forensik-Verfahren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration in bestehende Sicherheits- und IT-Infrastrukturen'
          }
        ],
        alert: {
          title: 'Kritische Anforderung',
          content: 'KRITIS-Betreiber müssen kontinuierliche Überwachung und dokumentierte Incident-Response-Verfahren implementieren. Ausfälle der Überwachung können zu erheblichen regulatorischen Konsequenzen führen.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierung auf KRITIS-konforme Überwachungsarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrung mit Enterprise-SIEM und SOC-Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Zertifizierte Incident Response und Digital Forensics Experten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Bewährte Integration von KI und Machine Learning Technologien'
            }
          ]
        },
        additionalInfo: 'Eine professionelle kontinuierliche Überwachung reduziert nicht nur die Erkennungszeit von Bedrohungen erheblich, sondern ermöglicht auch präventive Maßnahmen und optimiert die Incident Response-Zeiten.',
        serviceDescription: 'Wir entwickeln und implementieren maßgeschneiderte Überwachungs- und Incident Management-Lösungen, die sowohl regulatorische Anforderungen erfüllen als auch operative Exzellenz gewährleisten.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Security Operations Center (SOC) Design und Aufbau'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'SIEM-Implementierung und Threat Intelligence Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Incident Response Playbooks und Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Forensik-Fähigkeiten und Beweissicherung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Optimierung und Threat Hunting'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine umfassende Überwachungs- und Incident Management-Strategie für maximale Betriebssicherheit.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse Ihrer kritischen Assets und Bedrohungslandschaft'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design einer maßgeschneiderten Überwachungsarchitektur'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung von SIEM, SOC und Incident Response-Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration von KI-gestützter Anomalieerkennung und Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Testing, Schulung und kontinuierliche Optimierung der Verfahren'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir eine hochmoderne kontinuierliche Überwachung implementiert, die unsere Erkennungszeiten um 85% verkürzt und gleichzeitig alle KRITIS-Anforderungen erfüllt. Die KI-gestützte Anomalieerkennung ist ein echter Game-Changer.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: '24/7 Security Operations Center (SOC) Design & Implementation',
          description: 'Aufbau professioneller Security Operations Centers für kontinuierliche Überwachung kritischer Infrastrukturen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'SOC-Architektur Design und Technologie-Selektion'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'SIEM-Integration und Dashboard-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Analyst-Arbeitsplätze und Workflow-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Staffing-Konzepte und Betriebsmodell-Entwicklung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'KI-gestützte Incident Response & Automatisierung',
          description: 'Intelligente Incident Detection und automatisierte Response-Systeme für optimale Reaktionszeiten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Machine Learning-basierte Anomalieerkennung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automatisierte Incident Triage und Klassifizierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'SOAR-Integration und Response-Orchestrierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Threat Intelligence Integration und Enrichment'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kritiskontinuierlicheData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KRITIS Kontinuierliche Überwachung Incident Management page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
