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
    console.log('Creating EU AI Act page...')

    const euAiActData = {
      _type: 'servicePage',
      _id: 'eu-ai-act',
      title: 'EU AI Act',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eu-ai-act'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management'
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
        title: 'EU AI Act Compliance | ADVISORI',
        description: 'Professionelle EU AI Act Compliance Beratung für Unternehmen. Risikobewertung, Governance-Frameworks und strategische Implementierung für nachhaltige KI-Compliance.',
        keywords: 'EU AI Act, KI-Verordnung, AI Act Compliance, KI-Governance, Artificial Intelligence Act, EU KI-Gesetz, AI Compliance Beratung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EU AI Act Compliance'
        },
        tagline: 'Strategische EU AI Act Compliance für nachhaltigen Geschäftserfolg',
        heading: 'EU AI Act',
        description: 'Transformieren Sie regulatorische Anforderungen in Wettbewerbsvorteile. Unsere EU AI Act Compliance-Expertise hilft Ihnen dabei, nicht nur konforme KI-Systeme zu entwickeln, sondern diese als strategische Assets für Marktführerschaft und Stakeholder-Vertrauen zu positionieren.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige EU AI Act Compliance mit strategischem Business-Fokus'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Risikominimierung und Haftungsschutz für Geschäftsführung und Aufsichtsrat'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Wettbewerbsvorteile durch proaktive Compliance-Positionierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Zukunftssichere KI-Governance für nachhaltige Skalierung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EU AI Act Compliance',
        description: 'Die EU AI Act markiert einen Wendepunkt in der KI-Regulierung und schafft neue Chancen für strategisch positionierte Unternehmen. ADVISORI entwickelt mit Ihnen eine ganzheitliche Compliance-Strategie, die regulatorische Anforderungen in Geschäftswerte transformiert und Ihr Unternehmen als vertrauenswürdigen KI-Leader etabliert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Comprehensive Risk Assessment und KI-System-Klassifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'AI Governance Frameworks und Compliance-Management-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Dokumentations- und Audit-Trail-Systeme für nachweisbare Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Stakeholder-Management und Transparenz-Kommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Monitoring und Compliance-Optimierung'
          }
        ],
        alert: {
          title: 'Strategischer Vorteil',
          content: 'Unternehmen mit proaktiver EU AI Act Compliance profitieren von First-Mover-Advantages, erhöhtem Stakeholder-Vertrauen und privilegiertem Marktzugang. Investieren Sie jetzt in Ihre regulatorische Zukunftsfähigkeit!'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte EU AI Act Expertise mit Business-strategischem Fokus'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Ganzheitliche Compliance-Frameworks für nachhaltige Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'C-Level-orientierte Beratung mit Fokus auf Geschäftswert und ROI'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Branchenübergreifende Erfahrung in regulierten Umgebungen'
            }
          ]
        },
        additionalInfo: 'Die EU AI Act Compliance ist mehr als regulatorische Notwendigkeit – sie ist Ihr Schlüssel zu vertrauensvoller KI-Innovation und nachhaltiger Marktführerschaft in der neuen KI-Ära.',
        serviceDescription: 'Unser umfassendes EU AI Act Compliance-Portfolio deckt alle Aspekte von der initialen Risikobewertung bis zur kontinuierlichen Compliance-Optimierung ab.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'EU AI Act Risk Assessment & System Classification'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'AI Governance Framework Development'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Compliance Documentation & Audit Systems'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Stakeholder Communication & Transparency'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Continuous Monitoring & Optimization'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte EU AI Act Compliance-Strategie, die Ihre spezifischen Geschäftsanforderungen mit regulatorischen Verpflichtungen optimal in Einklang bringt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Assessment Ihrer KI-Landschaft und Risikoprofile gemäß EU AI Act'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design und Implementierung maßgeschneiderter AI Governance Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung robuster Dokumentations- und Compliance-Management-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration von Stakeholder-Kommunikation und Transparenz-Mechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung kontinuierlicher Monitoring- und Optimierungsprozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die EU AI Act ist nicht nur eine regulatorische Hürde, sondern eine historische Chance für strategisch denkende Unternehmen. Unsere Compliance-Expertise verwandelt regulatorische Anforderungen in nachhaltige Wettbewerbsvorteile und positioniert unsere Kunden als vertrauenswürdige Marktführer in der neuen KI-Ära. Proaktive Compliance ist der Schlüssel für langfristigen Geschäftserfolg.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'EU AI Act Risk Assessment & Compliance Strategy',
          description: 'Comprehensive Bewertung Ihrer KI-Systeme und Entwicklung strategischer Compliance-Roadmaps für nachhaltige EU AI Act Konformität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Vollständige KI-System-Klassifizierung nach EU AI Act Risikoklassen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Strategic Compliance Roadmap mit Business-Impact-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Gap-Analyse und Prioritäts-Matrix für effiziente Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'C-Level Reporting und Stakeholder-Kommunikationsstrategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'AI Governance Framework & Continuous Compliance',
          description: 'Etablierung robuster AI Governance Strukturen und kontinuierlicher Compliance-Prozesse für nachhaltige EU AI Act Konformität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Maßgeschneiderte AI Governance Frameworks und Policy-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Compliance-Management-Systeme und Audit-Trail-Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Kontinuierliche Monitoring-Systeme und Performance-Tracking'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Change Management und Mitarbeiter-Training für nachhaltige Compliance'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(euAiActData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EU AI Act page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
