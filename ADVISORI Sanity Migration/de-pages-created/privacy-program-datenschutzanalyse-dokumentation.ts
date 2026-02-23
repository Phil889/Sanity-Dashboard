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
    console.log('Creating Privacy Program Data Protection Analysis Documentation page...')

    const privacyAnalysisDocumentationData = {
      _type: 'servicePage',
      _id: 'privacy-program-datenschutzanalyse-dokumentation',
      title: 'Privacy Program - Datenschutzanalyse & Dokumentation',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/privacy-program/privacy-program-privacy-controls-audit-support/privacy-program-datenschutzanalyse-dokumentation'
      },
      parent: {
        _type: 'reference',
        _ref: 'privacy-program-privacy-controls-audit-support'
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
        title: 'Privacy Program - Datenschutzanalyse & Dokumentation | ADVISORI',
        description: 'Umfassende Datenschutzanalyse und -dokumentation für DSGVO-konforme Privacy-Programme. Systematische Bewertung, Risikobewertung und Compliance-Dokumentation.',
        keywords: 'Datenschutzanalyse, Privacy Assessment, DSGVO Dokumentation, Privacy Impact Assessment, Risikobewertung, Compliance Dokumentation, Privacy Program'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Privacy Program Data Protection Analysis and Documentation'
        },
        tagline: 'Systematische Datenschutzanalyse und professionelle Dokumentation für belastbare Privacy-Programme',
        heading: 'Privacy Program - Datenschutzanalyse & Dokumentation',
        description: 'Umfassende Analyse und Dokumentation Ihrer Datenschutz-Landschaft zur Gewährleistung DSGVO-konformer Privacy-Programme. Von der initialen Bestandsaufnahme bis zur kontinuierlichen Compliance-Dokumentation.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Transparenz über Ihre Datenschutz-Compliance-Landschaft'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Systematische Risikobewertung und Gap-Analyse nach DSGVO-Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Professionelle Dokumentation für Audit- und Aufsichtsbehörden'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Handlungsempfehlungen zur kontinuierlichen Compliance-Verbesserung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Privacy Program - Datenschutzanalyse & Dokumentation',
        description: 'Eine fundierte Datenschutzanalyse und systematische Dokumentation bilden das Fundament eines effektiven Privacy-Programmes. Wir unterstützen Sie bei der umfassenden Bewertung Ihrer Datenschutz-Compliance und der Erstellung einer auditfähigen Dokumentation.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Vollständige Inventarisierung und Analyse aller Datenverarbeitungsaktivitäten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Systematische Risikobewertung und Privacy Impact Assessments (PIAs)'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Gap-Analyse und Compliance-Status-Bewertung nach DSGVO-Kriterien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Erstellung umfassender Verarbeitungsverzeichnisse und Dokumentationsstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Aktualisierung der Datenschutz-Dokumentation'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine systematische Datenschutzanalyse deckt nicht nur Compliance-Lücken auf, sondern identifiziert auch Optimierungspotentiale für effizientere Datenverarbeitungsprozesse und reduzierte Compliance-Kosten.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in DSGVO-konformer Datenschutzanalyse und -bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodiken für systematische Privacy Impact Assessments'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Professionelle Dokumentationsstandards für Audit-Readiness'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Betreuung und Aktualisierung der Dokumentation'
            }
          ]
        },
        additionalInfo: 'Studien zeigen, dass Unternehmen mit systematischer Datenschutzanalyse und professioneller Dokumentation ihre Audit-Kosten um bis zu 50% reduzieren und Bußgeldrisiken signifikant minimieren können.',
        serviceDescription: 'Wir bieten Ihnen eine umfassende Datenschutzanalyse und professionelle Dokumentation, die nicht nur Compliance sicherstellt, sondern auch als strategische Grundlage für kontinuierliche Privacy-Verbesserungen dient.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Umfassende Datenschutz-Bestandsaufnahme und -analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Privacy Impact Assessments (PIAs) und Risikobewertungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Verarbeitungsverzeichnisse und Compliance-Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Gap-Analyse und Handlungsempfehlungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Dokumentationspflege und -updates'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine strukturierte Analysemethodik, die sowohl aktuelle Compliance sicherstellt als auch zukünftige Anforderungen antizipiert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Bestandsaufnahme aller Datenverarbeitungsaktivitäten und -systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Systematische Risikobewertung und Privacy Impact Assessment-Durchführung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Gap-Analyse zwischen Ist-Zustand und DSGVO-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Erstellung umfassender Dokumentationsstrukturen und Verarbeitungsverzeichnisse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Implementierung kontinuierlicher Überwachungs- und Aktualisierungsprozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI Consulting GmbH',
        name: 'Dr. Michael Weber',
        position: 'Head of Data Protection',
        quote: 'ADVISORI hat eine außergewöhnlich gründliche Datenschutzanalyse durchgeführt und eine Dokumentationsstruktur entwickelt, die nicht nur Compliance sicherstellt, sondern auch als praktisches Arbeitsinstrument für unser tägliches Privacy Management dient. Die Qualität der Analyse und Dokumentation hat unsere Audit-Bereitschaft signifikant verbessert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Datenschutzanalyse & Assessment',
          description: 'Umfassende Bewertung Ihrer aktuellen Datenschutz-Compliance und systematische Identifikation von Optimierungspotenzialen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Vollständige Inventarisierung aller Datenverarbeitungsaktivitäten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Privacy Impact Assessments (PIAs) nach DSGVO-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risikobewertung und Schwachstellenanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Gap-Analyse zwischen Ist-Zustand und regulatorischen Anforderungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Compliance-Dokumentation',
          description: 'Professionelle Erstellung und Pflege aller erforderlichen Datenschutz-Dokumente für nachhaltige Compliance und Audit-Readiness.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Verarbeitungsverzeichnisse nach Art. 30 DSGVO'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Datenschutz-Folgenabschätzungen (DSFA) und deren Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Technische und organisatorische Maßnahmen (TOM)-Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Audit-Trail und Compliance-Nachweisführung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(privacyAnalysisDocumentationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Privacy Program Data Protection Analysis Documentation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
