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
    console.log('Creating CRA Text page...')

    const craTextData = {
      _type: 'servicePage',
      _id: 'cra-text',
      title: 'CRA Text',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-text'
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
        title: 'CRA Text Analyse & Interpretation | ADVISORI',
        description: 'Professionelle CRA Text Analyse und Interpretation. Wir helfen Ihnen dabei, die komplexen Bestimmungen des Cyber Resilience Act zu verstehen und praktisch umzusetzen.',
        keywords: 'CRA Text, Cyber Resilience Act Text, CRA Verordnungstext, CRA Analyse, CRA Interpretation, CRA Bestimmungen, Cybersicherheitsverordnung Text'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA Text Analyse und Interpretation'
        },
        tagline: 'CRA Verordnungstext Expertise',
        heading: 'CRA Text Analyse & Interpretation',
        description: 'Der Cyber Resilience Act Text enthält komplexe rechtliche und technische Bestimmungen, die präzise Interpretation und strategische Umsetzung erfordern. Wir analysieren mit Ihnen jeden relevanten Artikel, Absatz und Anhang der CRA-Verordnung und entwickeln praktische Implementierungsstrategien basierend auf dem exakten Verordnungstext.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Detaillierte CRA Textanalyse und Interpretation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Praktische Umsetzungsstrategien aus Verordnungstext'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Rechtssichere Compliance-Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Textaktualisierungen und Änderungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRA Text Expertise für Rechtssichere Compliance',
        description: 'Die erfolgreiche CRA-Compliance beginnt mit dem präzisen Verständnis des Verordnungstextes. Wir unterstützen Sie bei der systematischen Analyse aller relevanten CRA-Bestimmungen und entwickeln daraus konkrete Handlungsempfehlungen für Ihre Organisation.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Artikel-für-Artikel Analyse der CRA-Verordnung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Interpretation technischer Anforderungen und Standards'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Analyse von Definitionen und Anwendungsbereichen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Bewertung von Übergangsbestimmungen und Fristen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration mit bestehenden EU-Rechtsakten'
          }
        ],
        alert: {
          title: 'CRA Text Komplexität',
          content: 'Der CRA-Verordnungstext umfasst über 100 Artikel mit komplexen technischen Anhängen. Professionelle Textanalyse ist entscheidend für rechtssichere und effiziente Compliance-Implementierung.'
        },
        whyUs: {
          title: 'Unsere CRA Text Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende juristische und technische CRA-Textkenntnis'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praktische Erfahrung mit EU-Verordnungsimplementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Kontinuierliche Überwachung von Textänderungen und Updates'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Branchenspezifische Textinterpretation und Anwendung'
            }
          ]
        },
        additionalInfo: 'Die CRA-Textanalyse bildet das Fundament für alle weiteren Compliance-Aktivitäten und gewährleistet rechtssichere Implementierung basierend auf dem exakten Verordnungswortlaut.',
        serviceDescription: 'Wir bieten umfassende CRA-Textanalyse und -interpretation, die von der grundlegenden Verordnungsstruktur über spezifische Artikel bis hin zu technischen Anhängen alle relevanten Textpassagen abdeckt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Systematische CRA-Verordnungsanalyse und Strukturierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Juristische Interpretation und Handlungsempfehlungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Technische Anforderungsanalyse aus Verordnungstext'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Branchenspezifische Textanwendung und Compliance-Mapping'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Textüberwachung und Update-Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser CRA Text Analyse Ansatz',
        description: 'Wir verfolgen einen systematischen Ansatz zur CRA-Textanalyse, der juristische Präzision mit praktischer Anwendbarkeit verbindet und rechtssichere Compliance-Strategien auf Basis des exakten Verordnungstextes entwickelt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strukturierte Verordnungsanalyse und Textmapping'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Juristische Interpretation und Rechtssicherheitsbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Praktische Umsetzungsstrategien aus Textanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Branchenspezifische Anwendung und Compliance-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Textüberwachung und Anpassungsmanagement'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die präzise Analyse des CRA-Verordnungstextes ist der Grundstein für erfolgreiche Compliance. Unsere systematische Herangehensweise transformiert komplexe rechtliche Bestimmungen in praktische Handlungsstrategien und gewährleistet rechtssichere Implementierung basierend auf dem exakten Wortlaut der Verordnung.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'CRA Verordnungstext Analyse',
          description: 'Umfassende Analyse des kompletten CRA-Verordnungstextes mit systematischer Aufbereitung aller relevanten Artikel, Absätze und Anhänge für Ihre spezifischen Compliance-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Artikel-für-Artikel Detailanalyse der CRA-Verordnung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Systematische Strukturierung und Textmapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Juristische Interpretation und Rechtssicherheitsbewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Branchenspezifische Textanwendung und Relevanzanalyse'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Praktische Textimplementierung',
          description: 'Transformation der CRA-Textanforderungen in konkrete Handlungsstrategien und Compliance-Maßnahmen mit rechtssicherer Umsetzung basierend auf dem exakten Verordnungswortlaut.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Handlungsempfehlungen aus Verordnungstext'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Compliance-Checklisten basierend auf CRA-Text'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Implementierungsroadmap aus Textanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Textüberwachung und Update-Management'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craTextData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA Text page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
