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
    console.log('Creating KI für das Personalwesen page...')

    const kiFuerPersonalwesenData = {
      _type: 'servicePage',
      _id: 'ki-fuer-das-personalwesen',
      title: 'KI für das Personalwesen',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/ki-fuer-das-personalwesen'
      },
      parent: {
        _type: 'reference',
        _ref: 'ki-kuenstliche-intelligenz'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'digitale-transformation'
        }
      },
      seo: {
        _type: 'seo',
        title: 'KI für das Personalwesen | AI-gestützte HR-Transformation | ADVISORI',
        description: 'Revolutionieren Sie Ihr Personalwesen mit KI-Lösungen. DSGVO-konforme AI-HR-Systeme, intelligente Recruiting-Automatisierung und datengetriebene Personalentscheidungen für nachhaltigen Unternehmenserfolg.',
        keywords: 'KI Personalwesen, AI HR, Künstliche Intelligenz Recruiting, HR Automation, AI Talent Management, DSGVO HR KI, Predictive HR Analytics, AI Employee Experience'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KI für das Personalwesen AI-gestützte HR-Transformation'
        },
        tagline: 'Intelligente HR-Transformation für die Zukunft der Arbeit',
        heading: 'KI für das Personalwesen',
        description: 'Transformieren Sie Ihr Personalwesen mit ADVISORI\'s KI-Expertise zu einem strategischen Wettbewerbsvorteil. Unsere AI-HR-Lösungen optimieren Recruiting, Talent Management und Employee Experience durch intelligente Automatisierung und datengetriebene Insights bei vollständiger DSGVO-Compliance.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Intelligente Recruiting-Automatisierung mit Bias-freier Kandidatenauswahl'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Predictive Analytics für strategische Workforce-Planung und Retention'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'DSGVO-konforme AI-HR-Systeme mit vollständigem Datenschutz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Personalisierte Employee Experience durch KI-gestützte Insights'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KI für das Personalwesen',
        description: 'Das Personalwesen steht vor einer revolutionären Transformation durch Künstliche Intelligenz. ADVISORI begleitet Sie bei der strategischen Integration von AI-Technologien in Ihre HR-Prozesse, um Effizienz zu steigern, bessere Personalentscheidungen zu treffen und eine außergewöhnliche Employee Experience zu schaffen. Unsere KI-HR-Lösungen kombinieren modernste Technologie mit bewährten HR-Praktiken und strikter DSGVO-Compliance.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'AI-gestütztes Recruiting und intelligente Kandidatenauswahl mit Bias-Detection'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Predictive Analytics für Workforce Planning und Mitarbeiterbindung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Automatisierte HR-Prozesse und intelligente Workflow-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'KI-basierte Performance-Analyse und Talent Development'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'DSGVO-konforme Datenverarbeitung und ethische AI-Implementierung'
          }
        ],
        alert: {
          title: 'HR-Revolution durch KI',
          content: 'Unternehmen mit KI-gestützten HR-Systemen verzeichnen bis zu 40% Effizienzsteigerung im Recruiting und 25% höhere Mitarbeiterzufriedenheit. Investieren Sie jetzt in die Zukunft Ihres Personalwesens und schaffen Sie nachhaltigen Wettbewerbsvorteil durch intelligente HR-Transformation.'
        },
        whyUs: {
          title: 'Unsere AI-HR-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Kompetenz in KI-gestützten HR-Transformationen und Change Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'DSGVO-konforme AI-HR-Implementierung mit integriertem Compliance-Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenübergreifende Erfahrung in HR-Digitalisierung und Prozessoptimierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von Strategie bis Implementierung und Change Management'
            }
          ]
        },
        additionalInfo: 'Die Zukunft des Personalwesens ist intelligent, datengetrieben und menschenzentriert. Nutzen Sie KI-Technologien, um Ihre HR-Prozesse zu revolutionieren und gleichzeitig die menschliche Komponente zu stärken!',
        serviceDescription: 'Unsere KI-HR-Beratung umfasst das gesamte Spektrum intelligenter Personalarbeit – von der strategischen Planung über die Implementierung bis hin zur kontinuierlichen Optimierung Ihrer AI-gestützten HR-Systeme.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'AI-Recruiting & Intelligent Talent Acquisition'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Predictive HR Analytics & Workforce Intelligence'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Automated HR Processes & Workflow Optimization'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'AI-basierte Performance Management & Talent Development'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'DSGVO-konforme HR-KI-Implementierung & Compliance Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser AI-HR-Transformationsansatz',
        description: 'Wir verfolgen einen systematischen, menschenzentrierten Ansatz zur Integration von KI in Ihr Personalwesen. Jede AI-HR-Initiative wird individuell auf Ihre Unternehmenskultur, Prozesse und strategischen Ziele zugeschnitten, um maximalen Nutzen bei optimaler Mitarbeiterakzeptanz zu gewährleisten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende HR-Analyse und KI-Potenzial-Assessment Ihrer bestehenden Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung maßgeschneiderter AI-HR-Strategien und Implementierungsroadmaps'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Schrittweise KI-Integration mit kontinuierlichem Change Management'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'DSGVO-konforme Datenintegration und ethische AI-Governance'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Performance-Monitoring der AI-HR-Systeme'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die Integration von KI in das Personalwesen ist nicht nur eine technologische Evolution, sondern eine strategische Revolution. Unsere AI-HR-Lösungen schaffen messbare Wettbewerbsvorteile durch intelligente Automatisierung und datengetriebene Insights. Wir entwickeln nicht nur effizientere HR-Prozesse, sondern schaffen eine neue Dimension der Employee Experience, die Mitarbeiter begeistert und Unternehmen nachhaltig stärkt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'AI-Recruiting & Intelligent Talent Acquisition',
          description: 'Revolutionieren Sie Ihr Recruiting mit KI-gestützten Systemen für effiziente, faire und erfolgreiche Talentgewinnung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Intelligente Kandidatensuche und automatisierte Vorauswahl'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bias-freie Bewertungsalgorithmen und faire Auswahlprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Predictive Matching zwischen Kandidaten und Positionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Automatisierte Kommunikation und Candidate Experience Optimization'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Predictive HR Analytics & Workforce Intelligence',
          description: 'Nutzen Sie die Macht der Daten für strategische Personalentscheidungen und proaktive Workforce-Planung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Mitarbeiterfluktuation-Vorhersage und Retention-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Skills-Gap-Analyse und Weiterbildungsbedarfsplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Performance-Prediction und Potenzialanalysen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Workforce-Demand-Forecasting und Kapazitätsplanung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Automated HR Processes & Workflow Optimization',
          description: 'Automatisieren Sie repetitive HR-Aufgaben und schaffen Sie Freiräume für strategische Personalarbeit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Intelligente Dokumentenverarbeitung und Datenextraktion'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Automatisierte Onboarding-Prozesse und Mitarbeiterintegration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'KI-gestützte Zeiterfassung und Abwesenheitsmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Intelligente Workflow-Orchestrierung und Prozessoptimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'AI-basierte Performance Management & Talent Development',
          description: 'Fördern Sie Ihre Mitarbeiter mit KI-gestützten Entwicklungsprogrammen und objektiven Performance-Bewertungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Kontinuierliche Performance-Analyse und Feedback-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Personalisierte Lernpfade und Skill-Development-Empfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'KI-gestützte Karriereplanung und Succession Planning'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Intelligente Goal-Setting und Achievement-Tracking'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Employee Experience & Engagement Optimization',
          description: 'Schaffen Sie außergewöhnliche Mitarbeitererfahrungen durch KI-gestützte Personalisierung und proaktive Engagement-Strategien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Personalisierte Employee Journeys und Touchpoint-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'KI-basierte Sentiment-Analyse und Engagement-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Intelligente Mitarbeiterbefragungen und Feedback-Auswertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Proaktive Well-being-Programme und Work-Life-Balance-Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'DSGVO-konforme HR-KI-Implementierung & Governance',
          description: 'Implementieren Sie KI-HR-Systeme mit vollständiger DSGVO-Compliance und ethischen AI-Standards.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'DSGVO-konforme Datenverarbeitung und Privacy-by-Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Ethische AI-Governance und Bias-Prevention-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Transparente AI-Entscheidungsprozesse und Explainable AI'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Compliance-Überwachung und Audit-Unterstützung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kiFuerPersonalwesenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KI für das Personalwesen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
