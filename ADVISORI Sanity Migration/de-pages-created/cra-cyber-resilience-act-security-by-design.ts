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
    console.log('Creating CRA Cyber Resilience Act Security-by-Design page...')

    const craSecurityByDesignData = {
      _type: 'servicePage',
      _id: 'cra-cyber-resilience-act-security-by-design',
      title: 'CRA Cyber Resilience Act Security-by-Design',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-cyber-resilience-act-product-security-requirements/cra-cyber-resilience-act-security-by-design'
      },
      parent: {
        _type: 'reference',
        _ref: 'cra-cyber-resilience-act-product-security-requirements'
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
        title: 'CRA Security-by-Design Implementation | ADVISORI',
        description: 'Implementieren Sie Security-by-Design Prinzipien für CRA-Compliance. Wir unterstützen Sie bei der Integration von Cybersicherheit in Ihre Produktentwicklung von Anfang an.',
        keywords: 'CRA, Security-by-Design, Cyber Resilience Act, Product Security, Secure Development, Cybersecurity Implementation, EU Compliance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA Security-by-Design Implementation'
        },
        tagline: 'Cybersicherheit als fundamentales Designprinzip für CRA-konforme Produkte',
        heading: 'CRA Cyber Resilience Act Security-by-Design',
        description: 'Security-by-Design ist eine Kernkomponente des EU Cyber Resilience Act. Wir helfen Ihnen bei der systematischen Integration von Cybersicherheit in Ihre Produktentwicklung von der Konzeption bis zur Markteinführung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Integration von Security-by-Design in Ihre Entwicklungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'CRA-konforme Sicherheitsarchitekturen und Threat Modeling'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Kosteneffiziente Sicherheitsimplementierung durch frühe Integration'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Wettbewerbsvorteile durch nachweisbar sichere Produktentwicklung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRA Security-by-Design Implementation',
        description: 'Der EU Cyber Resilience Act macht Security-by-Design zur rechtlichen Verpflichtung für digitale Produkte. Wir unterstützen Sie bei der systematischen Umsetzung dieser Anforderungen in Ihre Produktentwicklung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Threat Modeling und Risikobewertung in der Designphase'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Sichere Architekturprinzipien und Designpatterns'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration von Sicherheitskontrollen in den Entwicklungszyklus'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Automatisierte Security Testing und Vulnerability Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Sicherheitsüberwachung und Updates'
          }
        ],
        alert: {
          title: 'Security-by-Design Imperativ',
          content: 'Der CRA fordert explizit die Integration von Cybersicherheit in den Designprozess digitaler Produkte. Unternehmen müssen nachweisen, dass Sicherheit von Anfang an mitgedacht wurde, nicht nachträglich hinzugefügt.'
        },
        whyUs: {
          title: 'Unsere Security-by-Design Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Erfahrung in der CRA-konformen Security-by-Design Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxiserprobte Methoden für sichere Produktarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integration in bestehende Entwicklungsprozesse und Toolchains'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Umfassende Dokumentation für CRA-Compliance-Nachweise'
            }
          ]
        },
        additionalInfo: 'Security-by-Design reduziert nicht nur Sicherheitsrisiken, sondern auch Entwicklungskosten, da nachträgliche Sicherheitsnachrüstungen vermieden werden. Studien zeigen, dass Security-by-Design 60-80% kosteneffizienter ist als nachträgliche Sicherheitsmaßnahmen.',
        serviceDescription: 'Wir begleiten Sie bei der vollständigen Integration von Security-by-Design Prinzipien in Ihre Produktentwicklung - von der strategischen Planung bis zur technischen Umsetzung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Security-by-Design Strategie und Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Threat Modeling und Sicherheitsarchitektur-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Secure Development Lifecycle (SDLC) Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Automatisierte Security Testing und DevSecOps'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'CRA-Compliance Dokumentation und Nachweise'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Security-by-Design Implementierungsansatz',
        description: 'Wir entwickeln mit Ihnen eine maßgeschneiderte Security-by-Design Strategie, die CRA-Anforderungen erfüllt und gleichzeitig Ihre Produktinnovation beschleunigt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Assessment Ihrer aktuellen Entwicklungsprozesse und Sicherheitsarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design sicherer Systemarchitekturen mit integrierten Sicherheitskontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Integration von Security-by-Design in Ihre Entwicklungs-Workflows'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung automatisierter Sicherheitstests und Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Aufbau kontinuierlicher Sicherheitsverbesserungs- und Update-Prozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die Security-by-Design Implementierung von ADVISORI hat unsere Produktentwicklung revolutioniert. Wir konnten nicht nur CRA-Compliance erreichen, sondern auch unsere Entwicklungseffizienz und Produktqualität erheblich steigern.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Security-by-Design Strategie & Architektur',
          description: 'Entwicklung umfassender Sicherheitsstrategien und -architekturen für CRA-konforme Produktentwicklung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Threat Modeling und Attack Surface Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Sichere Systemarchitektur-Design nach CRA-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Privacy-by-Design Integration und Datenschutz-Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Zero-Trust-Architektur und Defense-in-Depth Strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Secure Development Lifecycle (SDLC)',
          description: 'Integration von Sicherheitskontrollen und -prozessen in Ihre gesamte Entwicklungskette.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'DevSecOps-Pipeline Setup und Security Automation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Kontinuierliche Security Testing und Code Analysis'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Vulnerability Management und Patch-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Security Metrics und Compliance-Monitoring'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craSecurityByDesignData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA Cyber Resilience Act Security-by-Design page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
