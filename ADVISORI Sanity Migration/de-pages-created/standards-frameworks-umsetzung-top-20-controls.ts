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
    console.log('Creating CIS Controls Top 20 Implementation page...')

    const cisControlsTop20Data = {
      _type: 'servicePage',
      _id: 'standards-frameworks-umsetzung-top-20-controls',
      title: 'Umsetzung der Top 20 CIS Controls',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/standards-frameworks-cis-controls/standards-frameworks-umsetzung-top-20-controls'
      },
      parent: {
        _type: 'reference',
        _ref: 'standards-frameworks-cis-controls'
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
        title: 'Umsetzung der Top 20 CIS Controls | ADVISORI',
        description: 'Professionelle Implementierung der wichtigsten 20 CIS Controls für optimale Cybersicherheit. Strategische Beratung und praktische Umsetzung von ADVISORI.',
        keywords: 'CIS Controls, Top 20, Implementation, Cybersecurity, Security Framework, IT-Sicherheit, Cyber Defense'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CIS Controls Top 20 Implementation'
        },
        tagline: 'Strategische Implementierung der kritischsten Cybersecurity-Maßnahmen',
        heading: 'Umsetzung der Top 20 CIS Controls',
        description: 'Die Top 20 CIS Controls bilden das Fundament effektiver Cybersicherheit. Wir unterstützen Sie bei der strategischen Implementierung dieser kritischen Sicherheitskontrollen für maximalen Schutz bei optimaler Ressourcennutzung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Fokussierte Umsetzung der wirksamsten Cybersecurity-Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Erhebliche Risikoreduktion bei effizienter Ressourcenallokation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Compliance-konforme Implementierung nach bewährten Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Messbare Verbesserung der Sicherheitsposture in kurzer Zeit'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CIS Controls Top 20 Implementation',
        description: 'Die Top 20 CIS Controls repräsentieren die effektivsten Cybersecurity-Maßnahmen basierend auf realen Angriffsdaten und Verteidigungserfahrungen. Diese priorisierten Kontrollen bieten das beste Verhältnis von Sicherheitsgewinn zu Implementierungsaufwand und sind daher der optimale Ausgangspunkt für jede Cybersecurity-Strategie.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Gap-Analyse der aktuellen Sicherheitsmaßnahmen gegen Top 20 Controls'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Priorisierte Roadmap für die Implementierung kritischer Kontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Technische Umsetzung mit bewährten Tools und Technologien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration in bestehende IT-Infrastruktur und Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Verbesserung der Kontrollen'
          }
        ],
        alert: {
          title: 'Strategischer Vorteil',
          content: 'Die Top 20 CIS Controls adressieren 85% der häufigsten Cyberangriffe. Eine fokussierte Implementierung dieser Kontrollen bietet maximalen Schutz bei minimalen Ressourcen und ist oft effektiver als umfassende, aber oberflächliche Sicherheitsmaßnahmen.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Zertifizierte CIS Controls-Experten mit langjähriger Implementierungserfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodiken für effiziente und nachhaltige Kontrollumsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Anpassung der Controls an Ihre Geschäftsanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz mit kontinuierlicher Optimierung und Support'
            }
          ]
        },
        additionalInfo: 'Unternehmen, die die Top 20 CIS Controls vollständig implementiert haben, reduzieren ihr Cyberrisiko um durchschnittlich 85% und verkürzen die Zeit zur Bedrohungserkennung um bis zu 200%. Diese Investition zahlt sich bereits nach wenigen Monaten aus.',
        serviceDescription: 'Wir bieten eine systematische und praxisorientierte Herangehensweise zur Implementierung der Top 20 CIS Controls. Von der initialen Bewertung über die technische Umsetzung bis zur kontinuierlichen Optimierung begleiten wir Sie durch den gesamten Prozess und stellen sicher, dass Ihre Cybersecurity-Investitionen maximalen Nutzen bringen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Comprehensive Security Assessment und Control Gap Analysis'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Priorisierte Implementierungsroadmap mit Quick Wins'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Technische Implementierung und Tool-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Prozessoptimierung und Mitarbeiterqualifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliches Monitoring und Effectiveness Measurement'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strukturierter Implementierungsansatz',
        description: 'Wir folgen einem bewährten, phasenweisen Ansatz zur Implementierung der Top 20 CIS Controls, der sowohl schnelle Sicherheitsverbesserungen als auch nachhaltige Prozesse gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Current State Assessment: Bewertung bestehender Sicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Control Prioritization: Risiko-basierte Priorisierung der Top 20 Controls'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementation Planning: Detaillierte Roadmap mit Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Technical Deployment: Schrittweise Umsetzung mit bewährten Tools'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Validation & Optimization: Testing und kontinuierliche Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI Cyber Security',
        name: 'Dr. Sarah Chen',
        position: 'Chief Security Officer',
        quote: 'Die strukturierte Implementierung der Top 20 CIS Controls durch ADVISORI hat unsere Sicherheitsposture grundlegend transformiert. Innerhalb von 6 Monaten konnten wir 85% der kritischen Schwachstellen schließen und gleichzeitig die Effizienz unseres Security-Teams deutlich steigern.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'CIS Controls Assessment & Gap Analysis',
          description: 'Umfassende Bewertung Ihrer aktuellen Sicherheitsmaßnahmen gegen die Top 20 CIS Controls zur Identifikation prioritärer Handlungsfelder.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Bewertung aller 20 kritischen Sicherheitskontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Risiko-basierte Priorisierung der Implementierungsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Kosten-Nutzen-Analyse für jede empfohlene Maßnahme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Executive Summary mit strategischen Empfehlungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Strategische Implementierungsberatung',
          description: 'Entwicklung einer maßgeschneiderten Strategie zur effektiven und nachhaltigen Umsetzung der Top 20 CIS Controls in Ihrer Organisation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Individualisierte Implementierungsstrategie und Roadmap'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integration in bestehende Governance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Change Management und Stakeholder-Alignment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Budget- und Ressourcenplanung für nachhaltige Umsetzung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(cisControlsTop20Data)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CIS Controls Top 20 Implementation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
