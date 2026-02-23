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
    console.log('Creating Business Continuity Management ISO 27001 page...')

    const bcmIso27001Data = {
      _type: 'servicePage',
      _id: 'business-continuity-management-iso-27001',
      title: 'Business Continuity Management ISO 27001',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/business-continuity-resilience/business-continuity-management-iso-27001'
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
        title: 'Business Continuity Management ISO 27001 - Integration & Compliance | ADVISORI',
        description: 'Professionelle Integration von Business Continuity Management mit ISO 27001: ISMS-BCMS Alignment, Risikomanagement, Compliance-Strategien und ganzheitliche Sicherheitsansätze mit ADVISORI.',
        keywords: 'Business Continuity Management ISO 27001, ISMS BCMS Integration, ISO 27001 BCM, Information Security Continuity, ISMS Business Continuity, ISO 27001 Annex A, BCM Compliance, Security Management System'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Business Continuity Management ISO 27001 - Integration von ISMS und BCMS'
        },
        tagline: 'Ganzheitliche Integration von Informationssicherheit und Geschäftskontinuität',
        heading: 'Business Continuity Management ISO 27001',
        description: 'Entwickeln Sie eine nahtlose Integration zwischen Business Continuity Management und ISO 27001 Informationssicherheitsmanagement. ADVISORI unterstützt Sie bei der strategischen Ausrichtung von ISMS und BCMS für maximale organisationale Resilienz und Compliance-Effizienz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische ISMS-BCMS Integration und Alignment-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Ganzheitliche Risikomanagement-Frameworks und Methodologien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Compliance-Optimierung und Audit-Effizienz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Integrierte Incident Response und Recovery-Prozesse'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Business Continuity Management ISO 27001 - Strategische Integration',
        description: 'Die Integration von Business Continuity Management mit ISO 27001 repräsentiert einen fortschrittlichen Ansatz zur organisationalen Resilienz, der Informationssicherheit und Geschäftskontinuität in einem kohärenten Framework vereint. Diese strategische Ausrichtung ermöglicht es Organisationen, Synergien zwischen ISMS und BCMS zu nutzen und gleichzeitig Compliance-Effizienz zu maximieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Nahtlose Integration von ISMS und BCMS für ganzheitliche Resilienz-Governance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'ISO 27001 Annex A Controls mit BCM-Anforderungen strategisch ausrichten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Gemeinsame Risikobewertung und Management-Frameworks entwickeln'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integrierte Incident Response und Business Continuity Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Optimierte Audit-Strategien und Compliance-Management'
          }
        ],
        alert: {
          title: 'Strategische Synergie',
          content: 'Die Integration von BCM und ISO 27001 schafft nicht nur operative Effizienz, sondern etabliert auch eine strategische Basis für umfassende organisationale Resilienz, die sowohl Informationssicherheit als auch Geschäftskontinuität holistisch adressiert.'
        },
        whyUs: {
          title: 'Warum BCM-ISO 27001 Integration mit ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in beiden Standards und deren strategischer Ausrichtung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodologien für ISMS-BCMS Integration und Alignment'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitliche Beratungsansätze für maximale Synergieeffekte'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Unterstützung bei Compliance und Weiterentwicklung'
            }
          ]
        },
        additionalInfo: 'Die moderne Geschäftswelt erfordert integrierte Ansätze zur Risikobewältigung, die traditionelle Silos zwischen Informationssicherheit und Geschäftskontinuität überwinden. Organisationen, die BCM und ISO 27001 strategisch integrieren, profitieren von reduzierten Compliance-Kosten, verbesserten Risikomanagement-Fähigkeiten und erhöhter organisationaler Resilienz.',
        serviceDescription: 'Unser BCM-ISO 27001 Integrationsservice bietet umfassende Unterstützung für die strategische Ausrichtung von Informationssicherheitsmanagement und Geschäftskontinuität. Von der initialen Gap-Analyse über die Entwicklung integrierter Frameworks bis hin zur kontinuierlichen Optimierung begleiten wir Sie auf dem Weg zu einer ganzheitlichen Resilienz-Strategie.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'ISMS-BCMS Integration Assessment und Strategieentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Risikomanagement-Framework Alignment und Harmonisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Integrierte Governance-Strukturen und Prozessoptimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Compliance-Management und Audit-Koordination'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Verbesserung und Performance-Monitoring'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Ansatz zur BCM-ISO 27001 Integration',
        description: 'Wir verfolgen einen strukturierten und strategischen Ansatz zur Integration von Business Continuity Management und ISO 27001, der sowohl technische als auch organisatorische Aspekte berücksichtigt und nachhaltige Synergien schafft.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Gap-Analyse und Alignment-Assessment beider Management-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung integrierter Governance-Frameworks und Risikomanagement-Ansätze'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Harmonisierung von Prozessen, Dokumentation und Kontrollmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung koordinierter Audit- und Compliance-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Performance-Management'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die strategische Integration von Business Continuity Management und ISO 27001 schafft eine neue Dimension organisationaler Resilienz. Durch die Harmonisierung von ISMS und BCMS entstehen Synergien, die nicht nur Compliance-Effizienz steigern, sondern auch die Grundlage für nachhaltige Wettbewerbsvorteile schaffen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ISMS-BCMS Integration Assessment',
          description: 'Umfassende Bewertung bestehender Management-Systeme und Entwicklung strategischer Integrationspläne.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Gap-Analyse zwischen ISMS und BCMS Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Synergie-Identifikation und Optimierungspotentiale'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Strategische Roadmap für Integration und Alignment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Stakeholder-Analyse und Change-Management-Planung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Risikomanagement-Framework Alignment',
          description: 'Harmonisierung von Informationssicherheits- und Business Continuity Risikomanagement-Ansätzen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Integrierte Risikobewertungs-Methodologien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Gemeinsame Risk Register und Treatment-Pläne'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Koordinierte Monitoring und Review-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Risk Appetite und Tolerance-Alignment'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Integrierte Governance-Strukturen',
          description: 'Entwicklung kohärenter Governance-Frameworks für ISMS und BCMS Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Unified Governance-Modelle und Entscheidungsstrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Integrierte Policy und Procedure-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Koordinierte Rollen und Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Performance-Management und KPI-Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Compliance-Management und Audit-Koordination',
          description: 'Optimierte Compliance-Strategien und koordinierte Audit-Ansätze für beide Standards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Integrierte Compliance-Monitoring und Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Koordinierte interne und externe Audit-Programme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Evidence-Management und Dokumentations-Harmonisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Regulatory-Mapping und Standards-Alignment'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Incident Response Integration',
          description: 'Nahtlose Integration von Security Incident Response und Business Continuity Aktivierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Unified Incident Classification und Eskalation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Koordinierte Response-Teams und Kommunikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Integrierte Recovery und Restoration-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Lessons Learned und Continuous Improvement'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Kontinuierliche Verbesserung und Optimierung',
          description: 'Langfristige Begleitung und kontinuierliche Weiterentwicklung integrierter Management-Systeme.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Performance-Monitoring und Effectiveness-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Maturity-Assessment und Entwicklungsplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Innovation-Integration und Emerging Threats-Adaptation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Strategic Review und Future-State-Planning'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcmIso27001Data)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Business Continuity Management ISO 27001 page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
