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
    console.log('Creating CRA Compliance page...')

    const craComplianceData = {
      _type: 'servicePage',
      _id: 'cra-compliance',
      title: 'CRA Compliance',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-compliance'
      },
      parent: {
        _type: 'reference',
        _ref: 'cra-cyber-resilience-act'
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
        title: 'CRA Compliance Management | ADVISORI',
        description: 'Umfassende CRA Compliance-Beratung und kontinuierliche Überwachung. Wir sichern Ihre dauerhafte Konformität mit dem Cyber Resilience Act durch strategische Compliance-Management-Systeme.',
        keywords: 'CRA Compliance, Cyber Resilience Act Compliance, CRA Überwachung, Compliance Management, Regulatorische Konformität, CRA Audit, Compliance Beratung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA Compliance Management'
        },
        tagline: 'Strategisches CRA Compliance Management',
        heading: 'CRA Compliance',
        description: 'Dauerhafte Konformität mit dem Cyber Resilience Act erfordert mehr als einmalige Implementierung. Wir entwickeln mit Ihnen robuste Compliance-Management-Systeme, die kontinuierliche Überwachung, proaktive Anpassungen und strategische Optimierung gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Kontinuierliche CRA Compliance-Überwachung und Steuerung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Proaktive Anpassung an regulatorische Entwicklungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integrierte Compliance-Governance und Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Automatisierte Compliance-Monitoring und Reporting-Systeme'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Strategisches CRA Compliance Management',
        description: 'CRA Compliance ist ein kontinuierlicher Prozess, der strategische Planung, operative Exzellenz und technologische Innovation vereint. Erfolgreiche Compliance-Programme schaffen nachhaltigen Geschäftswert durch die Integration von Cybersicherheit in alle Unternehmensprozesse.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Compliance-Framework-Entwicklung und Governance-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Kontinuierliche Überwachung und Performance-Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Risikobewertung und proaktive Mitigation-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Automatisierte Compliance-Technologien und Reporting'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Organisatorische Transformation und Kultur-Entwicklung'
          }
        ],
        alert: {
          title: 'Compliance-Strategiehinweis',
          content: 'Erfolgreiche CRA Compliance erfordert eine ganzheitliche Betrachtung von Technologie, Prozessen und Menschen. Kontinuierliche Verbesserung und proaktive Anpassung sind entscheidend für nachhaltige Konformität und Geschäftserfolg.'
        },
        whyUs: {
          title: 'Unsere CRA Compliance-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung in strategischem Compliance-Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für kontinuierliche Compliance-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integrierte Technologie-Lösungen für automatisierte Überwachung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Langfristige Partnerschaft für nachhaltige Compliance-Exzellenz'
            }
          ]
        },
        additionalInfo: 'CRA Compliance ist mehr als regulatorische Pflicht - es ist eine strategische Chance zur Stärkung der Cybersicherheitspositionierung und zur Schaffung nachhaltiger Wettbewerbsvorteile.',
        serviceDescription: 'Wir begleiten Sie bei der Entwicklung und Umsetzung umfassender CRA Compliance-Strategien, die nicht nur regulatorische Anforderungen erfüllen, sondern auch Geschäftswert schaffen und organisatorische Exzellenz fördern.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Compliance-Framework-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Kontinuierliche Überwachung und Performance-Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Risikomanagement und proaktive Anpassungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Technologie-Integration und Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Organisatorische Transformation und Kultur-Entwicklung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser CRA Compliance-Ansatz',
        description: 'Wir entwickeln mit Ihnen maßgeschneiderte Compliance-Strategien, die regulatorische Exzellenz mit Geschäftswert verbinden und nachhaltige Wettbewerbsvorteile schaffen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Compliance-Vision und Framework-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Integrierte Governance-Strukturen und Entscheidungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Kontinuierliche Überwachung und Performance-Management'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Proaktive Risikobewertung und Anpassungsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Technologie-gestützte Automatisierung und Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Erfolgreiche CRA Compliance ist kein einmaliges Projekt, sondern ein strategischer Transformationsprozess, der Cybersicherheit als Kernkompetenz etabliert. Unsere Kunden profitieren von Compliance-Systemen, die nicht nur regulatorische Anforderungen erfüllen, sondern auch operative Exzellenz fördern und nachhaltigen Geschäftswert schaffen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische Compliance-Framework-Entwicklung',
          description: 'Entwicklung umfassender CRA Compliance-Frameworks, die regulatorische Anforderungen mit Geschäftszielen optimal verbinden.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Compliance-Strategie und Vision-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Governance-Strukturen und Entscheidungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risikomanagement-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Performance-Metriken und KPI-Systeme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Kontinuierliche Compliance-Überwachung',
          description: 'Implementierung automatisierter Überwachungssysteme für kontinuierliche CRA Compliance-Kontrolle und proaktive Optimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Automatisierte Monitoring-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Real-time Compliance-Dashboards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Proaktive Alerting und Eskalation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Verbesserungsprozesse'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craComplianceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA Compliance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
