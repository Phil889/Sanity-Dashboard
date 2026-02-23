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
    console.log('Creating CRA Cyber Resilience Act Regulatory Controls page...')

    const craRegulatoryControlsData = {
      _type: 'servicePage',
      _id: 'cra-cyber-resilience-act-regulatory-controls',
      title: 'CRA Cyber Resilience Act Regulatory Controls',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-cyber-resilience-act-market-surveillance/cra-cyber-resilience-act-regulatory-controls'
      },
      parent: {
        _type: 'reference',
        _ref: 'cra-cyber-resilience-act-market-surveillance'
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
        title: 'CRA Regulatory Controls | ADVISORI',
        description: 'Comprehensive regulatory controls implementation for CRA Cyber Resilience Act compliance. Expert guidance on cybersecurity requirements, risk management, and compliance frameworks.',
        keywords: 'CRA, Cyber Resilience Act, Regulatory Controls, Cybersecurity Compliance, Risk Management, EU Regulation'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA Regulatory Controls'
        },
        tagline: 'Umfassende Implementierung regulatorischer Kontrollen für CRA-Compliance',
        heading: 'CRA Cyber Resilience Act Regulatory Controls',
        description: 'Implementierung und Management umfassender regulatorischer Kontrollen zur Erfüllung der CRA-Anforderungen. Wir unterstützen Sie bei der Entwicklung robuster Cybersicherheits-Frameworks und Compliance-Strukturen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Implementierung der CRA-regulatorischen Kontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Kontinuierliche Überwachung und Anpassung der Compliance-Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Automatisierte Kontrollen und Reporting-Mechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Reduzierung von Compliance-Risiken und regulatorischen Strafen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRA Regulatory Controls Implementation',
        description: 'Die Implementierung regulatorischer Kontrollen ist ein kritischer Baustein für die CRA-Compliance. Wir entwickeln und implementieren umfassende Kontrollsysteme, die nicht nur regulatorische Anforderungen erfüllen, sondern auch Ihre Cybersicherheitspostur nachhaltig stärken.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung maßgeschneiderter Kontrollframeworks nach CRA-Standards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung automatisierter Überwachungs- und Kontrollsysteme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Kontinuierliche Risikobewertung und Kontrollanpassung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration mit bestehenden IT-Security- und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Regelmäßige Kontrolltests und Wirksamkeitsüberprüfungen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Effektive regulatorische Kontrollen erfordern eine ganzheitliche Herangehensweise, die technische, organisatorische und prozessuale Aspekte integriert. Die kontinuierliche Anpassung an sich ändernde Bedrohungslagen ist dabei essentiell.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in EU-Cybersicherheitsregulierung und CRA-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodologien für Kontrolldesign und -implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Erfahrung mit komplexen regulatorischen Compliance-Projekten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz zur nachhaltigen Compliance-Sicherstellung'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit robusten regulatorischen Kontrollen reduzieren ihr Compliance-Risiko um bis zu 75% und verbessern gleichzeitig ihre allgemeine Cybersicherheitsresilienz erheblich.',
        serviceDescription: 'Wir bieten eine vollständige Palette von Dienstleistungen zur Implementierung und dem Management regulatorischer Kontrollen für die CRA-Compliance, von der initialen Bewertung bis zur kontinuierlichen Optimierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Kontroll-Framework Design und Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Automatisierte Überwachungs- und Reporting-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Kontinuierliche Risikobewertung und Kontrollanpassung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Compliance-Monitoring und Performance-Messung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Mitarbeiterschulung und Awareness-Programme'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und risikobasierten Ansatz zur Implementierung regulatorischer Kontrollen, der sowohl technische als auch organisatorische Aspekte berücksichtigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse der aktuellen Kontrolllandschaft und Gap-Identifikation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design eines maßgeschneiderten Kontroll-Frameworks nach CRA-Standards'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Schrittweise Implementierung mit kontinuierlicher Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration automatisierter Kontrollen und Reporting-Mechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Anpassung an neue Anforderungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir ein robustes System regulatorischer Kontrollen entwickelt, das nicht nur unsere CRA-Compliance sicherstellt, sondern auch unsere gesamte Cybersicherheitspostur nachhaltig gestärkt hat. Die Expertise und der systematische Ansatz waren entscheidend für unseren Erfolg.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Kontroll-Framework Design',
          description: 'Entwicklung maßgeschneiderter Kontrollframeworks, die spezifisch auf CRA-Anforderungen und Ihre Unternehmensstruktur zugeschnitten sind.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse regulatorischer Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Design risikobasierter Kontrollmatrizen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Integration mit bestehenden Governance-Strukturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Dokumentation und Prozessdefinition'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Automatisierte Überwachungssysteme',
          description: 'Implementierung technischer Lösungen zur kontinuierlichen Überwachung der Kontrollwirksamkeit und automatisierten Compliance-Reporting.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Real-time Monitoring und Alerting'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automatisierte Compliance-Reports'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Dashboard-basierte Visualisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integration mit bestehenden Security-Tools'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craRegulatoryControlsData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA Cyber Resilience Act Regulatory Controls page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
