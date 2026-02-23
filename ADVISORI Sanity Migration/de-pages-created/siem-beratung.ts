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
    console.log('Creating SIEM Beratung page...')

    const siemBeratungData = {
      _type: 'servicePage',
      _id: 'siem-beratung',
      title: 'SIEM Beratung - Strategische Cybersecurity-Beratung für nachhaltige Sicherheitsexzellenz',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/security-operations-secops/siem/siem-beratung'
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
        title: 'SIEM Beratung - Strategische Cybersecurity-Beratung für nachhaltige Sicherheitsexzellenz | ADVISORI',
        description: 'Professionelle SIEM Beratung: Strategische Cybersecurity-Beratung, SIEM-Strategie-Entwicklung, Architektur-Design und Implementierungs-Guidance für maximale Sicherheitseffektivität und ROI.',
        keywords: 'SIEM Beratung, SIEM Consulting, Cybersecurity Beratung, SIEM Strategie, Security Operations Beratung, SIEM Architektur, SIEM Implementation, SOC Beratung, Informationssicherheit Beratung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'SIEM Beratung - Strategische Cybersecurity-Beratung für nachhaltige Sicherheitsexzellenz'
        },
        tagline: 'Strategische SIEM-Expertise für zukunftssichere Cybersecurity-Transformation',
        heading: 'SIEM Beratung - Strategische Cybersecurity-Beratung für nachhaltige Sicherheitsexzellenz',
        description: 'Transformieren Sie Ihre Cybersecurity-Landschaft mit strategischer SIEM-Beratung auf höchstem Niveau. Wir begleiten Sie von der strategischen Vision über die Architektur-Entwicklung bis zur operativen Exzellenz. Unsere herstellerunabhängige Expertise und tiefgreifende Branchenerfahrung schaffen maßgeschneiderte SIEM-Lösungen, die perfekt zu Ihren Geschäftsanforderungen passen und nachhaltigen Mehrwert generieren.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische SIEM-Roadmap und Maturity-Assessment für zielgerichtete Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Herstellerunabhängige Architektur-Beratung und zukunftssichere Design-Expertise'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'ROI-Maximierung und Performance-Optimierung bestehender SIEM-Investitionen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Compliance-Integration und regulatorische Anforderungserfüllung nach deutschen Standards'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'SIEM Beratung: Strategische Cybersecurity-Transformation für nachhaltige Sicherheitsexzellenz',
        description: 'SIEM-Beratung umfasst weit mehr als technische Implementierung und erfordert strategisches Denken, organisatorische Transformation und kontinuierliche Optimierung. Wir entwickeln ganzheitliche SIEM-Strategien, die technische Exzellenz mit Business-Alignment und operativer Effizienz optimal verbinden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategisches SIEM-Assessment und Maturity-Evaluation für fundierte Entscheidungsgrundlagen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Architektur-Design und Technology-Roadmap-Entwicklung für zukunftssichere Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierungs-Guidance und Change-Management für erfolgreiche Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Performance-Optimierung und Continuous-Improvement für nachhaltige Wertschöpfung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Compliance-Integration und Regulatory-Alignment nach deutschen und europäischen Standards'
          }
        ],
        alert: {
          title: 'Strategischer Erfolgsfaktor für SIEM-Projekte',
          content: 'Erfolgreiche SIEM-Implementierungen erfordern mehr als nur technische Expertise. Strategische Beratung, die Business-Anforderungen, organisatorische Faktoren und technische Möglichkeiten optimal miteinander verbindet, ist der entscheidende Schlüssel für nachhaltige Cybersecurity-Exzellenz und langfristigen Projekterfolg.'
        },
        whyUs: {
          title: 'Unsere SIEM-Beratungsexpertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung mit Enterprise-SIEM-Implementierungen in verschiedenen Branchen und Unternehmensgrößen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Beratung für objektive und strategisch fundierte Empfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methodiken für SIEM-Transformation und organisatorischen Wandel'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'End-to-End-Begleitung von der strategischen Vision bis zur operativen Exzellenz'
            }
          ]
        },
        additionalInfo: 'Die SIEM-Landschaft entwickelt sich kontinuierlich weiter, mit innovativen Technologien wie KI-gestützten Analytics, Cloud-nativen Architekturen und erweiterten Threat-Intelligence-Capabilities. Strategische SIEM-Beratung berücksichtigt diese Entwicklungen proaktiv und schafft zukunftssichere Lösungen, die mit den sich ändernden Anforderungen und Bedrohungslandschaften mitwachsen.',
        serviceDescription: 'Unsere SIEM-Beratung umfasst alle Aspekte der strategischen SIEM-Entwicklung, von der initialen Assessment-Phase über die Architektur-Planung bis zur kontinuierlichen Optimierung. Wir kombinieren technische Tiefe mit strategischem Business-Verständnis für nachhaltige Cybersecurity-Transformation.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'SIEM-Strategie-Entwicklung und Roadmap-Planning für zielgerichtete Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Architektur-Consulting und Design-Expertise für skalierbare Lösungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierungs-Guidance und Projekt-Management für erfolgreiche Umsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Performance-Optimierung und Maturity-Enhancement für kontinuierliche Verbesserung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Compliance-Integration und Governance-Alignment für regulatorische Konformität'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer SIEM-Beratungsansatz',
        description: 'Wir verfolgen einen ganzheitlichen, business-orientierten Ansatz für SIEM-Beratung, der technische Exzellenz mit strategischem Denken und nachhaltiger Wertschöpfung optimal verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Assessment und Strategic Alignment für fundierte Entscheidungsgrundlagen und klare Zielsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Collaborative Planning und Stakeholder-Integration für organisatorische Akzeptanz und erfolgreiche Umsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phased Implementation mit kontinuierlicher Validierung und Anpassung für risikoarme Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Knowledge Transfer und Capability Building für nachhaltige Autonomie und interne Expertise'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continuous Improvement und Long-term Partnership für dauerhafte Exzellenz und Innovation'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Strategische SIEM-Beratung erfordert die perfekte Balance zwischen technischer Tiefe und Business-Verständnis. Unsere Expertise liegt darin, komplexe SIEM-Landschaften zu durchdringen und maßgeschneiderte Strategien zu entwickeln, die sowohl technische Exzellenz als auch nachhaltigen Business-Wert schaffen. Durch unseren herstellerunabhängigen Ansatz können wir objektive Empfehlungen geben, die ausschließlich auf den spezifischen Anforderungen und Zielen unserer Kunden basieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'SIEM-Strategie-Entwicklung und Maturity-Assessment',
          description: 'Comprehensive strategische Planung und Bewertung der aktuellen SIEM-Reife für zielgerichtete Transformation und nachhaltige Cybersecurity-Exzellenz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Current-State-Assessment und SIEM-Maturity-Evaluation für fundierte Ausgangslage'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Strategic-Vision-Development und Future-State-Definition für klare Zielsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Gap-Analysis und Transformation-Roadmap-Planning für strukturierte Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Business-Case-Development und ROI-Modellierung für Investitionsentscheidungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'SIEM-Architektur-Consulting und Design-Expertise',
          description: 'Professionelle Architektur-Beratung für skalierbare, sichere und zukunftssichere SIEM-Landschaften mit optimaler Integration in bestehende IT-Umgebungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Enterprise-Architecture-Design und Technology-Selection für optimale Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Scalability-Planning und Performance-Architecture für wachsende Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration-Architecture und Data-Flow-Design für nahtlose Systemintegration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Security-by-Design und Compliance-Architecture für regulatorische Konformität'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'SIEM-Implementierungs-Guidance und Projekt-Management',
          description: 'Expertengeleitung für erfolgreiche SIEM-Implementierungen mit strukturiertem Projektmanagement und kontinuierlicher Qualitätssicherung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Implementation-Planning und Project-Roadmap-Development für strukturierte Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Vendor-Management und Quality-Assurance für optimale Projektergebnisse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Change-Management und Stakeholder-Communication für organisatorische Akzeptanz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Testing-Coordination und Go-Live-Support für erfolgreiche Inbetriebnahme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'SIEM-Performance-Optimierung und Tuning',
          description: 'Kontinuierliche Optimierung bestehender SIEM-Implementierungen für maximale Performance, Effizienz und Wertschöpfung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Performance-Analysis und Bottleneck-Identification für optimale Systemleistung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Rule-Optimization und False-Positive-Reduction für verbesserte Effizienz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Capacity-Planning und Resource-Optimization für kosteneffiziente Operations'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Use-Case-Enhancement und Analytics-Improvement für bessere Threat-Detection'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'SIEM-Compliance-Integration und Governance',
          description: 'Strategische Integration von Compliance-Anforderungen in SIEM-Architekturen für automatisierte Regulatory-Compliance und Governance-Exzellenz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Regulatory-Mapping und Compliance-Framework-Integration für rechtliche Konformität'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Automated-Reporting und Audit-Trail-Implementation für effiziente Nachweisführung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Governance-Framework-Development und Policy-Integration für strukturierte Steuerung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Risk-Management-Integration und Compliance-Monitoring für kontinuierliche Überwachung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'SIEM-Team-Development und Capability-Building',
          description: 'Strategische Entwicklung interner SIEM-Kompetenzen und Team-Capabilities für nachhaltige operative Exzellenz und Autonomie.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Skills-Assessment und Competency-Gap-Analysis für zielgerichtete Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Training-Program-Development und Knowledge-Transfer für Kompetenzaufbau'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Operating-Model-Design und Process-Optimization für effiziente Arbeitsabläufe'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Mentoring und Ongoing-Support für nachhaltige Team-Entwicklung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(siemBeratungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ SIEM Beratung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
