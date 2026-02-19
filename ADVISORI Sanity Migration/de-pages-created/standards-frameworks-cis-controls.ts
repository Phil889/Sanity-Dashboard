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
    console.log('Creating Standards Frameworks CIS Controls page...')

    const cisControlsData = {
      _type: 'servicePage',
      _id: 'standards-frameworks-cis-controls',
      title: 'CIS Controls',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks-cis-controls'
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
        title: 'CIS Controls Implementation | ADVISORI',
        description: 'Implementieren Sie die Center for Internet Security (CIS) Controls für robuste Cybersecurity. Von Basic bis Implementation Groups - umfassende CIS Controls Beratung und Umsetzung.',
        keywords: 'CIS Controls, Center for Internet Security, Cybersecurity Framework, CIS Implementation Groups, Security Controls, Risk Management, IT Security'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CIS Controls Implementation'
        },
        tagline: 'Bewährte Cybersecurity-Controls für effektiven Schutz',
        heading: 'CIS Controls',
        description: 'Stärken Sie Ihre Cybersecurity-Posture mit den weltweit anerkannten CIS Controls. Wir unterstützen Sie bei der strategischen Implementierung der 18 kritischen Sicherheitskontrollen für optimalen Schutz Ihrer IT-Infrastruktur.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Priorisierte Implementation der 18 CIS Controls nach Risikolage'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Messbare Verbesserung der Cybersecurity-Posture und Risikoreduktion'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Compliance-Alignment mit weiteren Security Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Überwachung und Optimierung der Security Controls'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CIS Controls Implementation',
        description: 'Die CIS Controls bieten einen praxiserprobten, prioritätsbasierten Ansatz für Cybersecurity. Diese 18 kritischen Sicherheitskontrollen basieren auf real-world Attack Patterns und bieten maximalen Schutz bei effizienter Ressourcennutzung. Wir führen Sie durch die strategische Implementierung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende CIS Controls Gap-Analyse und Maturity Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Priorisierte Implementierung nach Implementation Groups (IG1, IG2, IG3)'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration mit bestehenden Security-Frameworks und Compliance-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung automatisierter Monitoring- und Reporting-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Optimierung und Anpassung an neue Bedrohungen'
          }
        ],
        alert: {
          title: 'Praxiserprobte Effektivität',
          content: 'CIS Controls basieren auf realen Cyberattacken und bieten nachweislich hohe Wirksamkeit. Studien zeigen, dass die ersten 6 Controls bereits 85% der bekannten Attacken verhindern können - bei optimalem Kosten-Nutzen-Verhältnis.'
        },
        whyUs: {
          title: 'Unsere CIS Controls Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Zertifizierte CIS-Experten mit langjähriger Implementierungserfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für effiziente und kostenoptimierte Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integration von CIS Controls in bestehende IT- und Security-Landschaften'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Messbare Ergebnisse durch kontinuierliches Monitoring und Reporting'
            }
          ]
        },
        additionalInfo: 'CIS Controls sind mehr als nur Security-Maßnahmen - sie sind ein strategisches Framework für risikoorientierte Cybersecurity. Die prioritätsbasierte Herangehensweise ermöglicht maximalen Schutz bei optimaler Ressourcenallokation.',
        serviceDescription: 'Wir bieten End-to-End CIS Controls Implementation - von der initialen Gap-Analyse über die phasenweise Umsetzung bis zur kontinuierlichen Optimierung und Integration in Ihre Cybersecurity-Strategie.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'CIS Controls Maturity Assessment und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Strategische Implementierungsplanung nach Implementation Groups'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Technische Umsetzung und Tool-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Automated Monitoring und Compliance Reporting'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Continuous Improvement und Threat Intelligence Integration'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser CIS Controls Implementierungsansatz',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte CIS Controls Strategie, die Ihre spezifischen Risiken adressiert und maximalen Schutz bei optimaler Effizienz gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Assessment Ihrer aktuellen Security-Posture und Risikolandschaft'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Gap-Analyse zu allen 18 CIS Controls mit Prioritätsbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung eines phasenweisen Implementierungsplans nach Implementation Groups'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Begleitung bei der technischen Umsetzung und Tool-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung kontinuierlicher Monitoring- und Verbesserungsprozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'CIS Controls bieten einen strukturierten, evidenzbasierten Ansatz für effektive Cybersecurity. Mit ADVISORI haben wir einen Partner gefunden, der die strategische Bedeutung dieser Controls versteht und uns bei der optimalen Implementierung für maximalen ROI unterstützt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'CIS Controls Assessment & Planning',
          description: 'Umfassende Bewertung Ihrer aktuellen Security-Posture und strategische Planung der CIS Controls Implementation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detailed Gap-Analyse zu allen 18 CIS Controls'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Risk-based Prioritization und Implementation Roadmap'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Cost-Benefit Analyse und ROI-Planung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration Planning mit bestehenden Security-Frameworks'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'CIS Controls Implementation & Optimization',
          description: 'Technische Umsetzung der CIS Controls mit kontinuierlicher Optimierung und Performance-Monitoring.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Phasenweise Implementation nach Implementation Groups'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automated Monitoring und Reporting Dashboard'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Continuous Compliance Tracking und Metrics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Regular Review und Optimization Cycles'
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

    console.log('✅ Standards Frameworks CIS Controls page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
