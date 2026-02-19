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
    console.log('Creating ESG Nachhaltigkeitsbericht page...')

    const esgNachhaltigkeitsberichtData = {
      _type: 'servicePage',
      _id: 'esg-nachhaltigkeitsbericht',
      title: 'ESG Nachhaltigkeitsbericht',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/esg/esg-nachhaltigkeitsbericht'
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
        title: 'ESG Nachhaltigkeitsbericht | ADVISORI',
        description: 'Erstellen Sie überzeugende ESG-Nachhaltigkeitsberichte, die Stakeholder begeistern und regulatorische Anforderungen übertreffen. Von CSRD bis zu Investor Relations - Ihr strategischer Partner für exzellente Nachhaltigkeitskommunikation.',
        keywords: 'ESG Nachhaltigkeitsbericht, CSRD Reporting, Sustainability Report, ESG Communication, Nachhaltigkeitskommunikation, ESG Compliance, Stakeholder Reporting'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ESG Nachhaltigkeitsbericht'
        },
        tagline: 'Transformieren Sie ESG-Daten in überzeugende Nachhaltigkeitsberichte für strategische Stakeholder-Kommunikation',
        heading: 'ESG Nachhaltigkeitsbericht',
        description: 'Unser ESG Nachhaltigkeitsbericht-Service verwandelt komplexe Nachhaltigkeitsdaten in überzeugende, compliance-konforme Berichte, die Investoren begeistern, Regulatoren zufriedenstellen und Ihre Marktposition als Nachhaltigkeitsführer stärken.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'CSRD-konforme Berichterstattung mit strategischer Stakeholder-Kommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Transformative Datenvisualisierung für überzeugende Nachhaltigkeits-Narrative'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Investor Relations Optimierung durch exzellente ESG-Kommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Marktdifferenzierung durch Thought Leadership in Nachhaltigkeitsberichterstattung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ESG Nachhaltigkeitsbericht',
        description: 'Unser ESG Nachhaltigkeitsbericht-Service kombiniert regulatorische Exzellenz mit strategischer Kommunikation, um Berichte zu erstellen, die weit über Compliance hinausgehen. Wir transformieren Ihre ESG-Performance in überzeugende Narrative, die Investoren überzeugen, Kunden inspirieren und Ihre Position als Nachhaltigkeitsführer festigen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'CSRD-konforme Berichtserstellung mit integrierter EU-Taxonomie-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Strategic Storytelling für überzeugende Nachhaltigkeits-Kommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Multi-Stakeholder-Reporting für verschiedene Zielgruppen und Medien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integrierte ESG-Datenanalyse und Performance-Benchmarking'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Digitale und interaktive Berichtsformate für moderne Stakeholder-Kommunikation'
          }
        ],
        alert: {
          title: 'Strategischer Kommunikationsvorteil',
          content: 'Exzellente ESG-Nachhaltigkeitsberichte fungieren als strategisches Marketing-Instrument, das Unternehmenswerte kommuniziert, Stakeholder-Vertrauen aufbaut und messbare Business Value durch verbesserte Reputation und Marktposition generiert.'
        },
        whyUs: {
          title: 'Unsere Nachhaltigkeitsbericht-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende CSRD- und EU-Taxonomie-Expertise mit strategischem Kommunikations-Know-how'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Award-winning Design und Storytelling für engaging Nachhaltigkeitskommunikation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Multi-Format-Expertise von Print bis Digital und Interactive Reporting'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Branchenübergreifende Erfahrung in Stakeholder-spezifischer ESG-Kommunikation'
            }
          ]
        },
        additionalInfo: 'Studien zeigen, dass Unternehmen mit exzellenten ESG-Nachhaltigkeitsberichten ihre Investor Relations Performance um durchschnittlich 40% verbessern und gleichzeitig ihre Employer Branding und Customer Loyalty signifikant steigern können.',
        serviceDescription: 'Unsere ESG Nachhaltigkeitsbericht-Services kombinieren regulatorische Compliance mit strategischer Kommunikation, um Berichte zu erstellen, die Ihre Nachhaltigkeitsperformance optimal präsentieren und messbare Business Value durch verbesserte Stakeholder-Beziehungen generieren.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'CSRD- und EU-Taxonomie-konforme Berichtserstellung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Strategic Content Development und ESG-Storytelling'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Multi-Channel-Publishing und Stakeholder-Distribution'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Interactive Digital Reporting und Datenvisualisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance-Monitoring und Stakeholder-Feedback-Integration'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Nachhaltigkeitsbericht-Entwicklungsansatz',
        description: 'Wir entwickeln mit Ihnen ESG-Nachhaltigkeitsberichte, die regulatorische Exzellenz mit strategischer Kommunikation verbinden und Ihre Nachhaltigkeitsperformance optimal präsentieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Stakeholder-Analyse und strategische Content-Planung für zielgerichtete Kommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'ESG-Datensammlung, -analyse und -verifikation für akkurate Berichterstattung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Creative Development und Storytelling für engaging Nachhaltigkeits-Narrative'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Multi-Format-Produktion und Qualitätssicherung für exzellente Ergebnisse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Distribution, Stakeholder-Engagement und Performance-Tracking'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die ESG-Nachhaltigkeitsberichte von ADVISORI haben unsere Stakeholder-Kommunikation revolutioniert. Die Kombination aus regulatorischer Exzellenz und strategischem Storytelling hat unsere Marktposition als Nachhaltigkeitsführer deutlich gestärkt und messbare Verbesserungen in unseren Investor Relations bewirkt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'CSRD-konforme Berichtsentwicklung',
          description: 'Wir erstellen vollumfänglich CSRD-konforme Nachhaltigkeitsberichte, die alle regulatorischen Anforderungen erfüllen und übertreffen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Vollständige CSRD Double Materiality Assessment Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'EU-Taxonomie-konforme Datenanalyse und -darstellung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'ESRS-Standards-compliant Reporting-Struktur'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Audit-ready Documentation und Verification-Support'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Strategic ESG Communication',
          description: 'Transformieren Sie ESG-Daten in überzeugende Narrative, die Stakeholder inspirieren und Geschäftswert schaffen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Executive Stakeholder Storytelling und Message Development'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Multi-Audience Content Adaptation für verschiedene Stakeholder-Gruppen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Award-winning Design und Visualisierung für engaging Presentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Digital-first Publishing mit Interactive Elements und Multi-Channel-Distribution'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(esgNachhaltigkeitsberichtData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ESG Nachhaltigkeitsbericht page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
