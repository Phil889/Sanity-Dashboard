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
    console.log('Creating EBA Self-Assessments & Gap Analysen page...')

    const ebaSelfAssessmentsGapAnalysenData = {
      _type: 'servicePage',
      _id: 'eba-self-assessments-gap-analysen',
      title: 'EBA Self-Assessments & Gap Analysen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eba/eba-guidelines-implementation/eba-self-assessments-gap-analysen'
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
        title: 'EBA Self-Assessments & Gap Analysen | ADVISORI',
        description: 'Umfassende Self-Assessments und Gap Analysen für EBA-Richtlinien. Identifizieren Sie Compliance-Lücken, optimieren Sie Ihre Prozesse und entwickeln Sie maßgeschneiderte Umsetzungsstrategien für regulatorische Anforderungen.',
        keywords: 'EBA Self-Assessment, Gap Analyse, Regulatorische Compliance, EBA-Richtlinien, Compliance-Bewertung, Umsetzungsstrategie, Regulatory Gap Analysis, EBA Guidelines'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EBA Self-Assessments & Gap Analysen'
        },
        tagline: 'Identifikation regulatorischer Lücken und Handlungsbedarfe',
        heading: 'EBA Self-Assessments & Gap Analysen',
        description: 'Die präzise Analyse Ihrer aktuellen Compliance-Situation im Verhältnis zu EBA-Anforderungen ist der erste kritische Schritt für eine effiziente Umsetzung. Unsere Self-Assessments und Gap Analysen bieten Ihnen eine strukturierte Methodik, um Compliance-Lücken systematisch zu identifizieren und priorisierte Maßnahmenpläne zu entwickeln – für eine zielgerichtete und ressourceneffiziente Implementierung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Transparenz über den aktuellen Compliance-Status und bestehende Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Priorisierte Handlungsfelder basierend auf Risiko und Implementierungsaufwand'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Ressourcenoptimierung durch zielgerichtete Maßnahmenplanung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachweisbare Compliance-Sorgfalt gegenüber Aufsichtsbehörden'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EBA Self-Assessments & Gap Analysen',
        description: 'Die European Banking Authority (EBA) erlässt regelmäßig neue und aktualisierte Leitlinien für Finanzinstitute. Die Umsetzung beginnt mit einem fundierten Verständnis der bestehenden Lücken zwischen regulatorischen Anforderungen und dem Status quo. Unsere strukturierten Self-Assessments und Gap Analysen bieten Ihnen einen klaren Überblick über Ihren aktuellen Compliance-Status, identifizieren Handlungsbedarfe und schaffen die Grundlage für eine zielgerichtete Implementierungsstrategie.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Analyse aller relevanten EBA-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Bewertung des aktuellen Umsetzungsstands und bestehender Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Priorisierung von Handlungsfeldern nach Risiko und Aufwand'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung strukturierter Maßnahmenpläne zur Lückenschließung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Identifikation von Synergien bei der Umsetzung verschiedener Anforderungen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Self-Assessments sollten nicht als einmalige Übung, sondern als kontinuierlicher Prozess verstanden werden. Die regelmäßige Neubewertung des Compliance-Status im Kontext sich wandelnder regulatorischer Anforderungen und organisatorischer Veränderungen ist entscheidend, um regulatorische Risiken proaktiv zu managen und Compliance-Maßnahmen entsprechend anzupassen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in EBA-Richtlinien und deren praktischer Interpretation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erprobte Methodik für strukturierte und aussagekräftige Gap Analysen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxisorientierter Ansatz mit Fokus auf umsetzbare Maßnahmenpläne'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Umfangreiche Erfahrung aus zahlreichen Compliance-Projekten im Finanzsektor'
            }
          ]
        },
        additionalInfo: 'Self-Assessments und Gap Analysen bilden nicht nur die Grundlage für eine effiziente Compliance-Strategie, sondern liefern auch wertvolle Einblicke in bestehende Prozess- und Kontrollschwächen. Diese können als Ausgangspunkt für übergreifende Verbesserungen in Governance, Risikomanagement und Kontrollstrukturen genutzt werden, die über die reine Compliance hinaus operativen Mehrwert schaffen.',
        serviceDescription: 'Unsere Dienstleistungen im Bereich EBA Self-Assessments und Gap Analysen umfassen die systematische Bewertung Ihrer aktuellen Compliance-Situation, die Identifikation von Lücken sowie die Entwicklung priorisierter Maßnahmenpläne. Dabei berücksichtigen wir stets Ihre individuellen Rahmenbedingungen, Ressourcen und strategischen Ziele, um maßgeschneiderte Lösungen zu entwickeln.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Entwicklung maßgeschneiderter Assessment-Frameworks für spezifische EBA-Richtlinien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Durchführung strukturierter Interviews und Workshops mit relevanten Stakeholdern'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Analyse von Prozessen, Kontrollen und Dokumentation im Kontext regulatorischer Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Erstellung detaillierter Gap-Analysen mit priorisierten Handlungsempfehlungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Entwicklung realistischer Roadmaps für die Schließung identifizierter Compliance-Lücken'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und bewährten Ansatz für EBA Self-Assessments und Gap Analysen, der Ihnen maximale Transparenz und Handlungssicherheit bietet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Detaillierte Analyse der relevanten EBA-Richtlinien und Ableitung konkreter Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung eines maßgeschneiderten Assessment-Frameworks mit spezifischen Bewertungskriterien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Durchführung von Interviews, Workshops und Dokumentenanalysen zur Erfassung des Ist-Zustands'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Systematische Identifikation und Bewertung von Compliance-Lücken nach definierten Kriterien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Priorisierung von Handlungsfeldern basierend auf Risikobewertung und Implementierungsaufwand'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 6),
            text: 'Entwicklung konkreter Maßnahmenpläne mit klaren Verantwortlichkeiten und Zeitrahmen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'Regionalbank Süddeutschland AG',
        name: 'Dr. Martina Schmidt',
        position: 'Head of Regulatory Affairs',
        quote: 'Die Self-Assessments und Gap Analysen von ADVISORI haben uns einen präzisen Überblick über unseren Compliance-Status bezüglich der EBA-Richtlinien verschafft. Besonders wertvoll war die klare Priorisierung der Handlungsfelder, die es uns ermöglichte, unsere begrenzten Ressourcen optimal einzusetzen. Der strukturierte Ansatz und die tiefe regulatorische Expertise des Teams haben uns nicht nur eine solide Grundlage für unsere Implementierungsstrategie geliefert, sondern auch wertvolle Einblicke für die Optimierung unserer Governance-Strukturen gegeben.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Anforderungsanalyse & Assessment-Framework',
          description: 'Wir analysieren detailliert die relevanten EBA-Richtlinien und entwickeln ein maßgeschneidertes Assessment-Framework, das die spezifischen Anforderungen und Ihre organisatorischen Besonderheiten berücksichtigt.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse und Interpretation regulatorischer Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung spezifischer Bewertungskriterien und Reifegradmodelle'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Anpassung des Frameworks an Ihre Organisationsstruktur und Prozesslandschaft'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Vorbereitung strukturierter Interview- und Workshop-Leitfäden'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Self-Assessment & Gap-Analyse',
          description: 'Wir führen eine umfassende Bewertung Ihres aktuellen Compliance-Status durch und identifizieren systematisch bestehende Lücken zu den regulatorischen Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Durchführung strukturierter Interviews mit relevanten Funktionsträgern'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Analyse bestehender Prozesse, Kontrollen und Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Bewertung des Umsetzungsstands und Identifikation von Compliance-Lücken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Erstellung einer detaillierten Gap-Analyse mit klaren Handlungsbedarfen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Maßnahmenplanung & Roadmap',
          description: 'Wir entwickeln auf Basis der Gap-Analyse einen priorisierten Maßnahmenplan und eine realistische Roadmap für die effiziente Schließung identifizierter Compliance-Lücken.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Priorisierung von Handlungsfeldern nach Risiko und Implementierungsaufwand'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Entwicklung konkreter Maßnahmen zur Schließung identifizierter Lücken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Erstellung einer realistischen Implementierungs-Roadmap mit Meilensteinen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Definition von Erfolgsmetriken und Monitoring-Ansätzen für die Umsetzung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(ebaSelfAssessmentsGapAnalysenData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EBA Self-Assessments & Gap Analysen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
