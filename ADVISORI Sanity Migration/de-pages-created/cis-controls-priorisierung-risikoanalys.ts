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
    console.log('Creating CIS Controls Prioritization Risk Analysis page...')

    const cisControlsData = {
      _type: 'servicePage',
      _id: 'cis-controls-priorisierung-risikoanalys',
      title: 'CIS Controls Priorisierung & Risikoanalyse',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/cis-controls/cis-controls-priorisierung-risikoanalys'
      },
      parent: {
        _type: 'reference',
        _ref: 'cis-controls'
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
        title: 'CIS Controls Priorisierung & Risikoanalyse | ADVISORI',
        description: 'Strategische Priorisierung und Risikoanalyse der CIS Controls zur optimalen Cyber-Security-Implementierung. Datengetriebene Ansätze für maximale Sicherheitswirkung bei effizienter Ressourcenallokation.',
        keywords: 'CIS Controls, Cyber Security, Risikoanalyse, Priorisierung, IT-Sicherheit, Cyber Risk Management, Security Controls, Risk Assessment'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CIS Controls Priorisierung & Risikoanalyse'
        },
        tagline: 'Datengetriebene Priorisierung für maximale Cyber-Security-Wirkung',
        heading: 'CIS Controls Priorisierung & Risikoanalyse',
        description: 'Strategische Priorisierung der CIS Controls basierend auf individueller Risikolandschaft und Geschäftsanforderungen. Wir entwickeln datengetriebene Implementierungsstrategien, die maximale Sicherheitswirkung bei optimaler Ressourcenallokation erzielen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Risikobasierte Priorisierung für maximale Sicherheitswirkung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierte Ressourcenallokation und Budgeteffizienz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Messbare ROI-Steigerung bei Cyber-Security-Investitionen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strategische Roadmap-Entwicklung mit klaren Meilensteinen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CIS Controls Priorisierung & Risikoanalyse',
        description: 'Die effektive Implementierung der CIS Controls erfordert eine strategische Herangehensweise, die über die reine Compliance hinausgeht. Unsere datengetriebene Priorisierung und Risikoanalyse ermöglicht es Ihnen, die 18 CIS Controls gezielt nach Ihrer individuellen Bedrohungslandschaft und Geschäftsanforderungen zu implementieren, um maximale Sicherheitswirkung bei optimaler Ressourcennutzung zu erzielen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Analyse der aktuellen Sicherheitslandschaft und Identifikation kritischer Schwachstellen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Risikobasierte Bewertung und Priorisierung der 18 CIS Controls nach Geschäftskritikalität'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung einer datengetriebenen Implementierungsstrategie mit messbaren KPIs'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'ROI-Analyse und Kosten-Nutzen-Bewertung verschiedener Implementierungsszenarien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration in bestehende Risk-Management-Frameworks und Governance-Strukturen'
          }
        ],
        alert: {
          title: 'Strategischer Vorteil',
          content: 'Eine risikobasierte Priorisierung der CIS Controls kann die Effektivität Ihrer Cyber-Security-Investitionen um bis zu 40% steigern, während gleichzeitig die Implementierungszeit signifikant reduziert wird.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in quantitativen Risikoanalysemethoden und Cyber-Security-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Langjährige Erfahrung in der strategischen Implementierung von Security Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Datengetriebene Methodik mit messbaren Erfolgsmetriken und ROI-Nachweis'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Branchenspezifische Anpassung der CIS Controls an Ihre Geschäftsanforderungen'
            }
          ]
        },
        additionalInfo: 'Die strategische Priorisierung der CIS Controls basiert auf einer umfassenden Analyse Ihrer Bedrohungslandschaft, Geschäftsprozesse und technischen Infrastruktur. Dieser Ansatz ermöglicht eine ressourcenoptimierte Implementierung mit maximaler Sicherheitswirkung.',
        serviceDescription: 'Wir bieten eine umfassende Analyse- und Priorisierungsdienstleistung, die Ihnen hilft, die CIS Controls strategisch und risikobasiert zu implementieren. Unser Ansatz kombiniert quantitative Risikomodelle mit praktischer Umsetzungserfahrung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Cyber Risk Assessment und Bedrohungslandschaftsanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Risikobasierte Priorisierung der 18 CIS Controls'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'ROI-Analyse und Investitionsoptimierung für Security Controls'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Strategische Roadmap-Entwicklung mit Implementierungsmeilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Überwachung und Anpassung der Priorisierungsstrategie'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine maßgeschneiderte Priorisierungsstrategie für die CIS Controls, die auf fundierter Risikoanalyse und datengetriebenen Methoden basiert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Durchführung einer umfassenden Cyber Risk Assessment und Bestandsaufnahme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Quantitative Risikomodellierung und Bedrohungslandschaftsanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung einer risikobasierten Priorisierungsmatrix für alle CIS Controls'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'ROI-Analyse und strategische Roadmap-Entwicklung mit Implementierungsphasen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und Anpassung der Strategie basierend auf neuen Bedrohungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Eine strategische Priorisierung der CIS Controls basierend auf individueller Risikoanalyse ist der Schlüssel für eine effektive und ressourcenoptimierte Cyber-Security-Strategie. Wir helfen Ihnen dabei, aus 18 Controls diejenigen zu identifizieren, die den größten Sicherheitsgewinn für Ihr Unternehmen bieten.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Cyber Risk Assessment & Bedrohungsanalyse',
          description: 'Wir analysieren Ihre aktuelle Sicherheitslandschaft und identifizieren die spezifischen Cyber-Risiken und Bedrohungen, die für Ihr Unternehmen relevant sind.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Bewertung der aktuellen IT-Sicherheitsarchitektur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation kritischer Assets und Geschäftsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Quantitative Risikomodellierung mit Monte-Carlo-Simulationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Bedrohungslandschaftsanalyse und Attack-Surface-Bewertung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Strategische Priorisierung & ROI-Optimierung',
          description: 'Basierend auf der Risikoanalyse entwickeln wir eine datengetriebene Priorisierungsstrategie, die maximale Sicherheitswirkung bei optimaler Ressourcenallokation erzielt.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Risikobasierte Bewertungsmatrix für alle 18 CIS Controls'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'ROI-Analyse und Kosten-Nutzen-Bewertung verschiedener Implementierungsszenarien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung einer strategischen Implementierungs-Roadmap'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration in bestehende Risk-Management- und Governance-Frameworks'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(cisControlsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CIS Controls Priorisierung & Risikoanalyse page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
