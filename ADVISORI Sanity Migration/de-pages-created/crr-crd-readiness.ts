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
    console.log('Creating CRR/CRD Readiness page...')

    const crrCrdReadinessData = {
      _type: 'servicePage',
      _id: 'crr-crd-readiness',
      title: 'CRR/CRD Readiness Assessment & Implementation',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/crr-crd/crr-crd-readiness'
      },
      parent: {
        _type: 'reference',
        _ref: 'crr-crd'
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
        title: 'CRR/CRD Readiness Assessment & Implementation | ADVISORI',
        description: 'Evaluieren Sie Ihre CRR/CRD-Readiness und implementieren Sie effiziente Compliance-Strategien mit unserer spezialisierten Beratung für Finanzinstitute.',
        keywords: 'CRR/CRD Readiness, CRR Implementation, CRD Assessment, Bankenregulierung, Eigenkapitalanforderungen, Basel III, Compliance-Vorbereitung, Regulatorische Bereitschaft'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRR/CRD Readiness Assessment'
        },
        tagline: 'Maßgeschneiderte CRR/CRD-Readiness für Ihr Finanzinstitut',
        heading: 'CRR/CRD Readiness Assessment & Implementation',
        description: 'Erzielen Sie regulatorische Konformität und Wettbewerbsvorteile durch eine systematische Evaluation Ihrer CRR/CRD-Readiness. Unsere Experten begleiten Sie von der ersten Gap-Analyse bis zur vollständigen Implementation und laufenden Überwachung der Kapitalanforderungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Umfassende Analyse Ihrer aktuellen CRR/CRD-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Identifikation kritischer Compliance-Lücken und Priorisierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Maßgeschneiderte Implementierungsstrategien für Ihre Institution'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Optimierung von Kapitaleffizienz und Liquiditätssteuerung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRR/CRD Readiness & Implementierung',
        description: 'Die Komplexität der Capital Requirements Regulation und Directive erfordert einen strukturierten Readiness-Ansatz, der sowohl die technischen Details als auch die strategischen Implikationen berücksichtigt. Unser Readiness-Programm bietet eine umfassende Evaluation und zielgerichtete Implementierung aller CRR/CRD-Anforderungen für Ihr Institut.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Gap-Analyse der bestehenden Systeme, Prozesse und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Bewertung der Kapital- und Liquiditätsposition nach aktuellen CRR/CRD-Standards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung einer institutsspezifischen Implementierungsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Operative Unterstützung bei der Umsetzung aller Compliance-Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Etablierung eines kontinuierlichen Monitoring-Systems für nachhaltige Compliance'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine frühzeitige Vorbereitung auf kommende CRR/CRD-Änderungen (wie CRR III/CRD VI) ermöglicht nicht nur reibungslose Compliance, sondern auch die strategische Nutzung regulatorischer Anforderungen zur Verbesserung der Kapitaleffizienz und Risikomanagementpraktiken.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Erfahrenes Team mit umfassender Expertise in allen Aspekten der CRR/CRD-Regulierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodik zur systematischen Bewertung und Implementierung regulatorischer Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxiserprobte Implementierungsstrategien für Finanzinstitute unterschiedlicher Größe und Komplexität'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Beobachtung regulatorischer Entwicklungen für proaktive Anpassungen'
            }
          ]
        },
        additionalInfo: 'Unsere CRR/CRD-Readiness-Services sind speziell darauf ausgerichtet, die Komplexität der Eigenkapitalanforderungen in klare, umsetzbare Maßnahmen zu übersetzen. Wir unterstützen Sie nicht nur bei der technischen Implementierung, sondern helfen Ihnen auch, die strategischen Implikationen für Ihr Geschäftsmodell zu verstehen und zu nutzen.',
        serviceDescription: 'Wir bieten ein umfassendes Leistungsspektrum zur CRR/CRD-Readiness, das von der initialen Bewertung bis zur vollständigen Implementierung und kontinuierlichen Überwachung reicht. Unser Ziel ist es, Compliance nicht als Belastung, sondern als strategischen Vorteil zu etablieren.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Umfassende Readiness-Assessments und Gap-Analysen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung maßgeschneiderter Implementierungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Operative Unterstützung bei der Umsetzung aller Compliance-Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Optimierung von Kapitalmodellen und Liquiditätssteuerung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Etablierung von Monitoring-Systemen für nachhaltige Compliance'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten, phasenbasierten Ansatz zur CRR/CRD-Readiness, der alle Aspekte der Regulierung systematisch adressiert und einen reibungslosen Übergang zur vollständigen Compliance gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Initiale Bewertung und Gap-Analyse der aktuellen Compliance-Situation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer detaillierten Roadmap mit priorisierten Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung notwendiger Prozess- und Systemanpassungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration in bestehende Governance- und Risikorahmenwerke'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung von Kontroll- und Monitoring-Mechanismen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Marian Knetsch',
        position: 'Managing Director',
        quote: 'In unserer Arbeit mit zahlreichen Finanzinstituten haben wir festgestellt, dass ein systematischer Readiness-Ansatz für CRR/CRD nicht nur Compliance sicherstellt, sondern auch erhebliche Effizienzgewinne und strategische Vorteile bietet. Unsere strukturierte Methodik ermöglicht es Banken, die Komplexität der Regulierung zu bewältigen und gleichzeitig die Kapitaleffizienz zu optimieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'CRR/CRD Readiness Assessment',
          description: 'Eine umfassende Bewertung Ihrer aktuellen Compliance-Situation mit Identifikation von Lücken und Handlungsbedarf.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse aller relevanten Prozesse, Systeme und Governance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung der Kapital- und Liquiditätsposition nach aktuellen Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation kritischer Compliance-Lücken und Priorisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Detaillierter Bericht mit konkreten Handlungsempfehlungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'CRR/CRD Implementierungsstrategie und Umsetzung',
          description: 'Maßgeschneiderte Implementierungsstrategien und operative Unterstützung bei der Umsetzung aller Compliance-Maßnahmen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung einer institutsspezifischen Roadmap zur Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Operative Unterstützung bei der Implementierung von Prozessen und Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Anpassung von Risikomanagement- und Governance-Rahmenwerken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Training und Know-how-Transfer für nachhaltige Compliance'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(crrCrdReadinessData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRR/CRD Readiness page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
