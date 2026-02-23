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
    console.log('Creating Business Continuity Management System page...')

    const bcmsData = {
      _type: 'servicePage',
      _id: 'business-continuity-management-system',
      title: 'Business Continuity Management System (BCMS)',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/business-continuity-resilience/business-continuity-management-system'
      },
      parent: {
        _type: 'reference',
        _ref: 'business-continuity-resilience'
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
        title: 'Business Continuity Management System (BCMS) - Aufbau & Implementierung | ADVISORI',
        description: 'Professioneller Aufbau eines Business Continuity Management Systems (BCMS). ISO 22301 konforme Implementierung, Governance-Strukturen und kontinuierliche Verbesserung für nachhaltige Resilienz.',
        keywords: 'Business Continuity Management System, BCMS, ISO 22301, BCM Framework, Kontinuitätsmanagement System, BCMS Implementierung, BCM Governance, Resilienz Management System'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Business Continuity Management System (BCMS) - Professioneller Aufbau und Implementierung'
        },
        tagline: 'Systematischer Aufbau organisationaler Resilienz',
        heading: 'Business Continuity Management System (BCMS)',
        description: 'Ein Business Continuity Management System ist das strukturelle Fundament für nachhaltige organisationale Resilienz. Wir unterstützen Sie beim professionellen Aufbau eines ISO 22301 konformen BCMS mit robusten Governance-Strukturen und kontinuierlichen Verbesserungsprozessen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'ISO 22301 konforme BCMS-Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Robuste Governance und Managementstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte Technologie und Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Verbesserung und Optimierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Business Continuity Management System - Systematischer Aufbau organisationaler Resilienz',
        description: 'Ein Business Continuity Management System ist ein strukturiertes Framework, das alle Aspekte der organisationalen Resilienz systematisch koordiniert und verwaltet. Es integriert Governance, Prozesse, Technologie und Menschen in einem kohärenten System zur Sicherstellung der Geschäftskontinuität.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Integration aller BCM-Komponenten in einem kohärenten Management-Framework'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'ISO 22301 konforme Struktur mit robusten Governance und Kontrollmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Technologie-gestützte Automatisierung und Real-time Monitoring von Kontinuitäts-Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliche Verbesserung durch systematische Messung und Performance-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration in bestehende Managementsysteme und organisationale Strukturen'
          }
        ],
        alert: {
          title: 'BCMS als strategischer Enabler',
          content: 'Ein professionell implementiertes BCMS ist mehr als nur ein Compliance-Instrument - es wird zum strategischen Enabler für organisationale Transformation und nachhaltigen Wettbewerbsvorteil durch überlegene Resilienz-Fähigkeiten.'
        },
        whyUs: {
          title: 'Warum BCMS-Implementierung mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in ISO 22301 und internationalen BCM-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für nachhaltige BCMS-Implementierung und -Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integration modernster Technologien und Automatisierungs-Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung von der Konzeption bis zur operativen Exzellenz'
            }
          ]
        },
        additionalInfo: 'Ein Business Continuity Management System transformiert fragmentierte Resilienz-Maßnahmen in ein integriertes, strategisches Asset. Es schafft die Grundlage für adaptive Organisationen, die nicht nur Störungen überstehen, sondern gestärkt daraus hervorgehen.',
        serviceDescription: 'Unser BCMS-Service umfasst die vollständige Konzeption, Implementierung und Optimierung von Business Continuity Management Systemen. Wir entwickeln maßgeschneiderte Lösungen, die technische Exzellenz mit organisationaler Praktikabilität verbinden.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'BCMS-Architektur und Framework-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Governance-Strukturen und Managementprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Technologie-Integration und Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Performance-Messung und kontinuierliche Verbesserung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Change Management und organisationale Transformation'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zur BCMS-Implementierung',
        description: 'Wir verfolgen einen systematischen und phasenorientierten Ansatz zur BCMS-Implementierung, der technische Exzellenz mit organisationaler Praktikabilität verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse bestehender Strukturen und Identifikation von Optimierungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Co-Design von BCMS-Architektur mit allen relevanten Stakeholdern'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phasenweise Implementierung mit kontinuierlicher Validierung und Anpassung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration modernster Technologien und Automatisierungs-Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Verankerung durch Change Management und Kompetenzentwicklung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Ein professionell implementiertes BCMS ist das Rückgrat organisationaler Resilienz. Wir schaffen nicht nur Compliance, sondern strategische Wettbewerbsvorteile durch systematische Integration aller Kontinuitäts-Aspekte in einem kohärenten Management-System.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'BCMS-Architektur & Framework-Design',
          description: 'Entwicklung einer maßgeschneiderten BCMS-Architektur, die alle organisationalen Anforderungen systematisch adressiert.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'ISO 22301 konforme Framework-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Systemarchitektur und Komponenten-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Prozess-Mapping und Workflow-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Stakeholder-Integration und Schnittstellen-Definition'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Governance & Management-Strukturen',
          description: 'Aufbau robuster Governance-Strukturen und Managementprozesse für effektive BCMS-Steuerung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'BCM-Governance und Entscheidungsstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Rollen und Verantwortlichkeiten-Matrix'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Management-Prozesse und Kontrollmechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Eskalations- und Kommunikationsstrukturen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Technologie-Integration & Automatisierung',
          description: 'Integration modernster Technologien zur Automatisierung und Optimierung von BCMS-Prozessen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'BCMS-Software-Auswahl und -Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Automatisierung von Monitoring und Alerting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Integration in bestehende IT-Landschaften'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Dashboard und Reporting-Systeme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Testing & Validierung',
          description: 'Systematische Validierung der BCMS-Effektivität durch umfassende Testing-Programme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'BCMS-Testing-Strategien und -Methoden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Tabletop-Übungen und Simulationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Live-Tests und Vollübungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Performance-Messung und Gap-Analyse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Performance-Management & Optimierung',
          description: 'Kontinuierliche Messung und Optimierung der BCMS-Performance für nachhaltige Exzellenz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'KPI-Entwicklung und Performance-Messung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Benchmarking und Maturity-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Kontinuierliche Verbesserungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'ROI-Messung und Wertschöpfungs-Analyse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Change Management & Transformation',
          description: 'Nachhaltige Verankerung des BCMS durch strategisches Change Management und organisationale Transformation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Change-Strategien und Transformations-Roadmaps'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Stakeholder-Engagement und Kommunikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Kompetenzentwicklung und Training-Programme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kulturwandel und organisationale Resilienz'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcmsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Business Continuity Management System page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
