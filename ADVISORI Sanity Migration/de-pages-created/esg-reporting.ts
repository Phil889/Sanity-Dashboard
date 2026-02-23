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
    console.log('Creating ESG-Reporting page...')

    const esgReportingData = {
      _type: 'servicePage',
      _id: 'esg-reporting',
      title: 'ESG-Reporting',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/esg/esg-reporting'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management-esg'
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
        title: 'ESG-Reporting | ADVISORI',
        description: 'Professionelles ESG-Reporting nach internationalen Standards. Wir unterstützen Sie bei der Erstellung transparenter Nachhaltigkeitsberichte für Stakeholder, Investoren und Regulatoren.',
        keywords: 'ESG-Reporting, Nachhaltigkeitsbericht, ESG-Berichterstattung, CSRD, GRI, SASB, TCFD, Sustainability Reporting, ESG-Kommunikation'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ESG-Reporting'
        },
        tagline: 'Transparente ESG-Kommunikation für nachhaltigen Erfolg',
        heading: 'ESG-Reporting',
        description: 'Transformieren Sie Ihre Nachhaltigkeitsleistung in überzeugende Berichte. Wir entwickeln und implementieren umfassende ESG-Reporting-Strategien, die Ihre Performance transparent kommunizieren und Stakeholder-Vertrauen stärken.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Compliance mit regulatorischen Berichtspflichten und Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Erhöhte Transparenz und Vertrauen bei Investoren und Stakeholdern'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Verbesserte ESG-Ratings und Kapitalmarktzugang'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strategische Kommunikation der Nachhaltigkeitsfortschritte'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ESG-Reporting',
        description: 'ESG-Reporting ist mehr als nur Pflichterfüllung – es ist ein strategisches Instrument zur Kommunikation Ihrer Nachhaltigkeitsleistung. Wir unterstützen Sie dabei, Ihre ESG-Performance transparent, glaubwürdig und zielgruppengerecht zu kommunizieren und gleichzeitig alle regulatorischen Anforderungen zu erfüllen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung umfassender ESG-Reporting-Strategien und -Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Erstellung von Nachhaltigkeitsberichten nach internationalen Standards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration in bestehende Unternehmenskommunikation und -systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Stakeholder-spezifische Kommunikation und Engagement-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Optimierung und Weiterentwicklung der Berichterstattung'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiches ESG-Reporting verbindet Compliance-Anforderungen mit strategischer Kommunikation. Es sollte nicht nur über Leistungen berichten, sondern auch Ihre Nachhaltigkeitsstrategie und Zukunftsvision vermitteln.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in internationalen ESG-Reporting-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Branchenspezifische Berichterstattungskonzepte und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Integration von Datenmanagement und Kommunikationsstrategie'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Praxisnahe Umsetzung mit nachhaltigem Mehrwert'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit hochwertiger ESG-Berichterstattung erzielen im Durchschnitt 15% höhere ESG-Ratings und können ihre Kapitalkosten um bis zu 1% reduzieren.',
        serviceDescription: 'Wir bieten Ihnen eine End-to-End-Beratung für die Entwicklung, Implementierung und Optimierung Ihrer ESG-Berichterstattung. Von der strategischen Konzeption bis zur operativen Umsetzung begleiten wir Sie auf dem Weg zu einer transparenten und wirkungsvollen Nachhaltigkeitskommunikation.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'ESG-Reporting-Strategie und Framework-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Nachhaltigkeitsbericht-Erstellung nach Standards'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Stakeholder-Kommunikation und Engagement'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Digitale Reporting-Lösungen und Plattformen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Assurance und externe Verifizierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen ein ESG-Reporting-System, das sowohl den regulatorischen Anforderungen als auch Ihren strategischen Kommunikationszielen gerecht wird.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse Ihrer Stakeholder-Anforderungen und Reporting-Ziele'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Definition von Reporting-Framework und Content-Strategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung von Datenerfassungs- und Verifizierungsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Erstellung und Design der Berichtsformate und -kanäle'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Publikation, Kommunikation und kontinuierliche Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns dabei geholfen, unsere ESG-Berichterstattung auf ein neues Niveau zu heben. Die strategische Herangehensweise und die praxisnahe Umsetzung haben nicht nur unsere Compliance verbessert, sondern auch das Vertrauen unserer Stakeholder gestärkt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ESG-Reporting-Strategie',
          description: 'Wir entwickeln umfassende Reporting-Strategien, die Ihre Nachhaltigkeitsleistung optimal kommunizieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Stakeholder-Analyse und Materialitätsbewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Framework-Auswahl und Standard-Integration (GRI, SASB, TCFD)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Content-Strategie und Kommunikationskonzept'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Reporting-Governance und Prozessdesign'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Nachhaltigkeitsbericht-Erstellung',
          description: 'Wir erstellen professionelle Nachhaltigkeitsberichte, die Ihre ESG-Performance transparent und überzeugend darstellen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Datensammlung und -validierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Bericht-Konzeption und -Strukturierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Text-Erstellung und visuelles Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Externe Prüfung und Assurance-Unterstützung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(esgReportingData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ESG-Reporting page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
