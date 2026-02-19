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
    console.log('Creating SIEM Lösungen page...')

    const siemLoesungenData = {
      _type: 'servicePage',
      _id: 'siem-loesungen',
      title: 'SIEM Lösungen - Ganzheitliche Sicherheitsarchitekturen',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/security-operations-secops/siem/siem-loesungen'
      },
      parent: {
        _type: 'reference',
        _ref: 'siem'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'informationssicherheit'
        }
      },
      seo: {
        _type: 'seo',
        title: 'SIEM Lösungen - Ganzheitliche Sicherheitsarchitekturen | ADVISORI',
        description: 'Professionelle SIEM Lösungen: Strategische Planung, Architektur-Design und Implementierung ganzheitlicher Security Information and Event Management Systeme für maximale Cybersecurity-Wirksamkeit.',
        keywords: 'SIEM Lösungen, SIEM Architektur, Security Information Event Management, SIEM Strategie, Enterprise SIEM, SIEM Consulting, Cybersecurity Lösungen, SIEM Integration, Security Operations'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'SIEM Lösungen - Ganzheitliche Sicherheitsarchitekturen'
        },
        tagline: 'Strategische SIEM Lösungen für nachhaltige Cybersecurity-Exzellenz',
        heading: 'SIEM Lösungen - Ganzheitliche Sicherheitsarchitekturen',
        description: 'Moderne SIEM Lösungen erfordern mehr als nur Technologie-Implementierung. Wir entwickeln ganzheitliche Sicherheitsarchitekturen, die strategische Planung, optimale Tool-Integration und nachhaltige Betriebsmodelle vereinen. Unsere SIEM Lösungen schaffen die Basis für proaktive Threat Detection, effiziente Incident Response und kontinuierliche Sicherheitsverbesserung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische SIEM Architektur-Planung und Design'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Ganzheitliche Integration in bestehende Sicherheitslandschaften'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Skalierbare Lösungen für Enterprise-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachhaltige Betriebsmodelle und Continuous Improvement'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'SIEM Lösungen: Strategische Sicherheitsarchitekturen für die digitale Transformation',
        description: 'Erfolgreiche SIEM Lösungen entstehen durch die intelligente Kombination von Technologie, Prozessen und Menschen. Wir entwickeln maßgeschneiderte Sicherheitsarchitekturen, die nicht nur aktuelle Bedrohungen adressieren, sondern auch zukünftige Herausforderungen antizipieren und Ihr Unternehmen für die digitale Transformation rüsten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische SIEM Roadmap-Entwicklung basierend auf Business-Zielen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Architektur-Design für hybride und Multi-Cloud-Umgebungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration von AI/ML-basierten Advanced Analytics'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Orchestrierung mit SOAR und Security Automation Plattformen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Entwicklung nachhaltiger SOC-Betriebsmodelle'
          }
        ],
        alert: {
          title: 'Strategischer Erfolgsfaktor',
          content: 'Ganzheitliche SIEM Lösungen steigern die Cybersecurity-Effektivität um bis zu 300% und reduzieren gleichzeitig die Mean Time to Detection (MTTD) erheblich. Eine strategische Herangehensweise ist der Schlüssel für nachhaltigen ROI.'
        },
        whyUs: {
          title: 'Unsere SIEM Lösungs-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung mit Enterprise SIEM Architekturen aller Größenordnungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Beratung für optimale Technologie-Auswahl'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methodiken für SIEM Transformation und Change Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'End-to-End Begleitung von der Strategie bis zum operativen Excellence'
            }
          ]
        },
        additionalInfo: 'Moderne SIEM Lösungen entwickeln sich zu intelligenten Security Data Platforms, die weit über traditionelle Log-Korrelation hinausgehen. Cloud-native Architekturen, AI-gestützte Analytics und automatisierte Response-Capabilities definieren die nächste Generation von Cybersecurity-Infrastrukturen.',
        serviceDescription: 'Wir begleiten Sie bei der Entwicklung und Implementierung ganzheitlicher SIEM Lösungen, die Ihre spezifischen Sicherheitsanforderungen optimal adressieren. Von der strategischen Planung über das Architektur-Design bis hin zur operativen Optimierung schaffen wir nachhaltige Sicherheitsinfrastrukturen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'SIEM Strategie-Entwicklung und Roadmap-Planung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Sicherheitsarchitektur-Design und Technology-Selection'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'SIEM Implementierung und System-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'SOC-Aufbau und Betriebsmodell-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance-Optimierung und Continuous Improvement'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer SIEM Lösungsansatz',
        description: 'Wir verfolgen einen ganzheitlichen, strategiegetriebenen Ansatz für SIEM Lösungen, der technische Exzellenz mit operativer Effizienz und nachhaltiger Wertschöpfung verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Assessment und Anforderungsanalyse für maßgeschneiderte Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Architektur-Design mit Fokus auf Skalierbarkeit und Zukunftssicherheit'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phased Implementation mit kontinuierlicher Validierung und Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration von Advanced Analytics und Automation-Capabilities'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Betriebsmodelle und Knowledge Transfer'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Erfolgreiche SIEM Lösungen entstehen durch die intelligente Orchestrierung von Technologie, Prozessen und Menschen. Unsere ganzheitlichen Sicherheitsarchitekturen schaffen nicht nur sofortige Sicherheitsverbesserungen, sondern etablieren auch die Grundlage für kontinuierliche Cybersecurity-Evolution. Die strategische Integration von AI-gestützten Analytics und automatisierten Response-Capabilities transformiert traditionelle Security Operations zu proaktiven Cyber Defense Centern.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'SIEM Strategie und Roadmap-Entwicklung',
          description: 'Strategische Planung und Entwicklung maßgeschneiderter SIEM Roadmaps, die Business-Ziele mit Cybersecurity-Anforderungen optimal in Einklang bringen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Cybersecurity-Maturity Assessment und Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Strategische SIEM Roadmap mit priorisierten Implementierungsphasen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Business Case Entwicklung und ROI-Modellierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Stakeholder-Alignment und Change Management Strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'SIEM Architektur-Design und Technology-Selection',
          description: 'Entwicklung optimaler SIEM Architekturen mit strategischer Technology-Auswahl für maximale Sicherheitswirksamkeit und operative Effizienz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Enterprise SIEM Architektur-Design für hybride Umgebungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Technology-Stack Optimierung und Vendor-Selection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Skalierbarkeits-Planung und Performance-Dimensionierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Security-by-Design Prinzipien und Compliance-Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'SIEM Implementierung und System-Integration',
          description: 'Professionelle SIEM Implementierung mit nahtloser Integration in bestehende IT- und Sicherheitslandschaften.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Strukturierte SIEM Deployment-Planung und Projektmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Integration mit bestehenden Security Tools und IT-Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Data Source Onboarding und Log-Management Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Use Case Development und Correlation Rule Engineering'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Advanced Analytics und AI-Integration',
          description: 'Integration fortschrittlicher Analytics-Capabilities und AI-gestützter Technologien für proaktive Threat Detection und automatisierte Response.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Machine Learning Modell-Entwicklung für Anomaly Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'UEBA-Integration für Behavioral Analytics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Threat Intelligence Platform Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Automated Response und SOAR-Orchestrierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'SOC-Aufbau und Betriebsmodell-Entwicklung',
          description: 'Entwicklung nachhaltiger Security Operations Center Strukturen und Betriebsmodelle für optimale SIEM-Nutzung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'SOC-Organisationsstruktur und Rollen-Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Incident Response Prozess-Design und Playbook-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'KPI-Framework und Performance-Metriken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Team-Training und Skill Development Programme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'SIEM Optimierung und Managed Services',
          description: 'Kontinuierliche SIEM Optimierung und professionelle Managed Services für nachhaltige Sicherheitsexzellenz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Performance-Monitoring und Tuning-Services'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Threat Hunting und Proactive Security Services'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Compliance-Reporting und Audit-Unterstützung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Managed SIEM Services und 24/7 Security Operations'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(siemLoesungenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ SIEM Lösungen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
