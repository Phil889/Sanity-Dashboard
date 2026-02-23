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
    console.log('Creating ESG Data Management page...')

    const esgDataManagementData = {
      _type: 'servicePage',
      _id: 'esg-datamanagement',
      title: 'ESG Data Management',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/esg/esg-datamanagement'
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
        title: 'ESG Data Management | ADVISORI',
        description: 'Optimieren Sie Ihre ESG-Datenerfassung und -berichterstattung mit unseren Data Management Lösungen. Automatisierte Datensammlung, Validierung und Reporting für nachhaltige Transparenz.',
        keywords: 'ESG Data Management, Nachhaltigkeitsdaten, ESG Reporting, Datensammlung, Sustainability Data, ESG Analytics'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ESG Data Management'
        },
        tagline: 'Intelligente Datenerfassung und -verwaltung für präzise ESG-Berichterstattung',
        heading: 'ESG Data Management',
        description: 'Schaffen Sie eine solide Datengrundlage für Ihre ESG-Strategie mit automatisierten Erfassungsprozessen, validierter Datenqualität und integrierten Reporting-Lösungen für maximale Transparenz und Compliance.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Automatisierte ESG-Datenerfassung aus allen relevanten Unternehmensquellen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Validierte Datenqualität durch integrierte Prüf- und Plausibilitätsmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Standardkonforme Berichterstattung für alle ESG-Frameworks und -Regulatorien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Echtzeitanalysen und KPI-Tracking für strategische ESG-Entscheidungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ESG Data Management',
        description: 'Effektives ESG Data Management bildet das Fundament für glaubwürdige Nachhaltigkeitsberichterstattung und strategische ESG-Entscheidungen. Wir entwickeln integrierte Datenmanagement-Systeme, die komplexe ESG-Daten aus verschiedenen Quellen sammeln, validieren und für Reporting und Analyse aufbereiten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Design und Implementierung von ESG-Datenarchitekturen und -sammlungsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Automatisierung der Datenerfassung aus ERP-, HRIS- und operativen Systemen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung von Datenqualitäts- und Validierungsframeworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von Framework-spezifischen Reporting-Standards (GRI, SASB, TCFD)'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Aufbau von ESG-Analytics-Plattformen für strategische Insights'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'ESG Data Management ist mehr als nur Datensammlung. Es geht darum, eine verlässliche "Single Source of Truth" für alle ESG-relevanten Informationen zu schaffen, die sowohl für regulatorische Compliance als auch für strategische Geschäftsentscheidungen nutzbar ist.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in ESG-Frameworks und Datenmanagement-Technologien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Branchenübergreifende Erfahrung in der Implementierung von ESG-Datenlösungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von Datenarchitektur bis hin zu Reporting-Automatisierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Fokus auf Skalierbarkeit und Zukunftsfähigkeit Ihrer ESG-Dateninfrastruktur'
            }
          ]
        },
        additionalInfo: 'Studien zeigen, dass Unternehmen mit fortschrittlichen ESG-Datenmanagement-Systemen ihre Reporting-Effizienz um bis zu 70% steigern und gleichzeitig die Datenqualität und -verlässlichkeit erheblich verbessern können.',
        serviceDescription: 'Wir bieten ein umfassendes Leistungsspektrum für ESG Data Management, von der strategischen Datenarchitektur über die technische Implementierung bis hin zur operativen Optimierung Ihrer ESG-Datenlandschaft.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'ESG-Datenarchitektur und Systemdesign'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Automatisierte Datensammlung und -integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Datenqualitäts-Management und Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'ESG-Reporting-Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'ESG-Analytics und Performance-Monitoring'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine maßgeschneiderte ESG-Datenmanagement-Strategie, die technische Exzellenz mit praktischer Umsetzbarkeit verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse Ihrer aktuellen Datenlandschaft und ESG-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design einer integrierten ESG-Datenarchitektur'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung automatisierter Datenerfassungs- und Validierungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Aufbau von Reporting- und Analytics-Funktionen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Training und kontinuierliche Optimierung der Datenprozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die ESG-Datenmanagement-Lösung von ADVISORI hat unsere Nachhaltigkeitsberichterstattung revolutioniert. Dank der automatisierten Prozesse und validierten Datenqualität können wir nun präzise und zeitnahe ESG-Reports erstellen, die das Vertrauen unserer Stakeholder stärken.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ESG-Datenarchitektur & Systemdesign',
          description: 'Wir entwickeln eine maßgeschneiderte Datenarchitektur, die alle ESG-relevanten Datenquellen integriert und skalierbare Reporting-Lösungen ermöglicht.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Analyse Ihrer ESG-Datenanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Design einer integrierten ESG-Datenplattform'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Technologieauswahl und Implementierungsplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Skalierbarkeits- und Zukunftsfähigkeitsanalyse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Automatisierte Datensammlung & Integration',
          description: 'Wir implementieren automatisierte Prozesse zur Erfassung und Integration von ESG-Daten aus allen relevanten Unternehmensquellen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Anbindung von ERP-, HRIS- und operativen Systemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung automatisierter Datensammlung-Workflows'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration externer Datenquellen und APIs'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Echtzeit-Synchronisation und Batch-Processing'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(esgDataManagementData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ESG Data Management page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
