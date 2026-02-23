import 'dotenv/config'
import { createClient } from '@sanity/client'

// Create client with direct credentials
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
    console.log('Creating FIDA Implementation page...')

    const fidaImplementationData = {
      _type: 'servicePage',
      _id: 'fida-implementation',
      title: 'FIDA Implementation',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/financial-data-access-fida/fida-implementation'
      },
      parent: {
        _type: 'reference',
        _ref: 'financial-data-access-fida'
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
        title: 'FIDA Implementation Services | Technische Umsetzung | ADVISORI',
        description: 'Professionelle FIDA Implementation Services für Finanzdienstleister. Technische Umsetzung, API-Entwicklung, Systemintegration und operative Deployment-Strategien für Financial Data Access Regulation.',
        keywords: 'FIDA Implementation, API Entwicklung, Systemintegration, Financial Data Access, Open Banking Implementation, Technische Umsetzung, FIDA Deployment'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FIDA Implementation Services'
        },
        tagline: 'Professionelle FIDA-Implementation für operative Exzellenz',
        heading: 'FIDA Implementation',
        description: 'Die erfolgreiche Umsetzung der Financial Data Access Regulation erfordert präzise technische Execution und strategische Implementierungsplanung. Wir begleiten Sie von der Systemarchitektur bis zum Go-Live mit bewährten Implementierungsmethodologien.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'End-to-End Implementierungsmanagement mit bewährten Methodologien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Sichere API-Entwicklung und robuste Systemintegration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Umfassende Testing-Frameworks und Qualitätssicherung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strukturierte Go-Live-Strategien und Post-Implementation-Support'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Technische FIDA-Umsetzung mit System',
        description: 'Die Implementation der Financial Data Access Regulation stellt hohe Anforderungen an technische Präzision, Systemintegration und operative Exzellenz. Unser strukturierter Ansatz gewährleistet erfolgreiche Umsetzung bei minimalen Risiken und optimaler Performance.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Implementierungsplanung mit detaillierten Roadmaps und Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Professionelle API-Entwicklung mit Security-by-Design-Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Nahtlose Integration in bestehende IT-Landschaften und Legacy-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Umfassende Testing-Strategien und Qualitätssicherungsverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Strukturierte Change-Management-Prozesse und Mitarbeiterqualifizierung'
          }
        ],
        alert: {
          title: 'Implementation Excellence',
          content: 'Erfolgreiche FIDA-Implementation erfordert mehr als technische Kompetenz. Unser ganzheitlicher Ansatz kombiniert bewährte Projektmanagement-Methodologien mit tiefgreifender Regulierungs-Expertise für nachhaltige Ergebnisse.'
        },
        whyUs: {
          title: 'Unsere Implementierungs-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Bewährte Track-Record in komplexen Fintech-Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Tiefgreifende Expertise in API-Entwicklung und Systemintegration'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Strukturierte Projektmanagement-Methodologien und Risikomanagement'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Umfassende Post-Implementation-Unterstützung und Optimierung'
            }
          ]
        },
        additionalInfo: 'FIDA-Implementation umfasst komplexe technische, regulatorische und operative Herausforderungen. Von der Systemarchitektur über API-Entwicklung bis hin zu Datenmanagement und Security-Implementation erfordern alle Aspekte spezialisierte Expertise und bewährte Vorgehensweisen.',
        serviceDescription: 'Wir bieten vollständige FIDA-Implementierungsservices, die technische Excellence mit operativer Effizienz verbinden. Unser Ansatz gewährleistet termingerechte, budgetgerechte und qualitativ hochwertige Umsetzung aller FIDA-Anforderungen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Implementierungsplanung und Projektmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'API-Entwicklung und Systemintegrations-Services'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Umfassende Testing- und Qualitätssicherungsverfahren'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Change-Management und Mitarbeiterqualifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Go-Live-Support und kontinuierliche Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strukturierter Implementierungsansatz',
        description: 'Wir folgen bewährten Implementierungsmethodologien, die technische Exzellenz mit operativer Effizienz verbinden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Detaillierte Analyse bestehender Systeme und Entwicklung maßgeschneiderter Implementierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Agile Entwicklungsmethodologien mit kontinuierlicher Integration und Testing'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Strukturierte Qualitätssicherung und umfassende Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Koordinierte Go-Live-Strategien mit Rollback-Plänen und Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung, Optimierung und Support nach Go-Live'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Erfolgreiche FIDA-Implementation erfordert die perfekte Balance zwischen technischer Präzision und operativer Effizienz. Unsere bewährten Implementierungsmethodologien gewährleisten nicht nur Compliance, sondern schaffen auch die Grundlage für langfristige Wettbewerbsvorteile durch optimierte Datenarchitekturen und Prozesse.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische Implementierungsplanung und Projektmanagement',
          description: 'Umfassende Planung und professionelles Management Ihrer FIDA-Implementation von der Konzeption bis zum Go-Live.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Implementierungs-Roadmaps mit Meilensteinen und Abhängigkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Risikomanagement und Contingency-Planung für kritische Implementierungsphasen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Ressourcenplanung und Stakeholder-Management für optimale Projektdurchführung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Kontinuierliches Monitoring und Reporting des Implementierungsfortschritts'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'API-Entwicklung und Systemintegration',
          description: 'Professionelle Entwicklung FIDA-konformer APIs und nahtlose Integration in bestehende Systemlandschaften.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Design und Entwicklung sicherer, skalierbarer FIDA-APIs nach aktuellen Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integration mit Legacy-Systemen und modernen Cloud-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Implementation robuster Authentifizierungs- und Autorisierungsmechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Performance-Optimierung und Skalierbarkeits-Engineering'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Datenarchitektur und Migration',
          description: 'Aufbau optimaler Datenarchitekturen und sichere Migration bestehender Datenbestände für FIDA-Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Design FIDA-konformer Datenmodelle und -architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Sichere Datenmigration mit Integritätsprüfung und Validierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Implementation von Data-Governance-Frameworks und Qualitätssicherung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Aufbau von Master-Data-Management und Datenharmonisierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Security-Implementation und Compliance-Frameworks',
          description: 'Umfassende Sicherheitsimplementation und Aufbau robuster Compliance-Frameworks für FIDA-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Implementation von Security-by-Design-Prinzipien in allen Systemkomponenten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Aufbau von Identity- und Access-Management-Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Implementation von Encryption, Tokenization und Secure-Communication-Protokollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Entwicklung von Audit-Trail-Systemen und Compliance-Monitoring'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Testing und Qualitätssicherung',
          description: 'Umfassende Testing-Strategien und Qualitätssicherungsverfahren für fehlerfreie FIDA-Implementation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Entwicklung umfassender Test-Strategien und -Szenarien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Automatisierte Testing-Frameworks und Continuous-Integration-Pipelines'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Performance-, Security- und Compliance-Testing'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'User-Acceptance-Testing und End-to-End-Validierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Go-Live-Management und Post-Implementation-Support',
          description: 'Strukturierte Go-Live-Strategien und umfassende Unterstützung nach der Implementation für optimale Betriebsstabilität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Koordinierte Go-Live-Planung mit Rollback-Strategien und Contingency-Plänen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Real-Time-Monitoring und Incident-Response während der Go-Live-Phase'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Umfassende Dokumentation und Knowledge-Transfer an interne Teams'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Optimierung und Performance-Tuning nach Go-Live'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(fidaImplementationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FIDA Implementation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
