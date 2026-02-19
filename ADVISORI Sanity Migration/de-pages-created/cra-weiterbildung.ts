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
    console.log('Creating CRA Weiterbildung page...')

    const craWeiterbildungData = {
      _type: 'servicePage',
      _id: 'cra-weiterbildung',
      title: 'CRA Weiterbildung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/cra-cyber-resilience-act/cra-weiterbildung'
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
        title: 'CRA Weiterbildung - Cyber Resilience Act Fortbildung | ADVISORI',
        description: 'Professionelle CRA Weiterbildung und Fortbildungsprogramme für den Cyber Resilience Act. Umfassende Qualifizierung, Kompetenzentwicklung und kontinuierliche Weiterbildung für nachhaltige CRA-Expertise.',
        keywords: 'CRA Weiterbildung, Cyber Resilience Act Fortbildung, CRA Qualifizierung, CRA Kompetenzentwicklung, Cybersicherheit Weiterbildung, CRA Bildung, CRA Ausbildung, Cyber Resilience Act Schulung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRA Weiterbildung - Cyber Resilience Act Fortbildung'
        },
        tagline: 'Professionelle CRA Weiterbildung für nachhaltige Kompetenzentwicklung',
        heading: 'CRA Weiterbildung',
        description: 'Der Cyber Resilience Act erfordert kontinuierliche Weiterbildung und Kompetenzentwicklung auf allen Organisationsebenen. Unsere CRA Weiterbildungsprogramme verbinden fundierte theoretische Grundlagen mit praktischer Anwendung und schaffen nachhaltige Expertise für erfolgreiche CRA-Implementierung und langfristige Compliance-Exzellenz.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strukturierte Weiterbildungsprogramme für alle Qualifikationsebenen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Praxisorientierte Fortbildung mit realen CRA-Anwendungsszenarien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Zertifizierte Weiterbildungsexperten mit umfassender CRA-Expertise'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Kompetenzentwicklung und Wissensvertiefung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Umfassende CRA Weiterbildung für nachhaltige Expertise-Entwicklung',
        description: 'CRA Weiterbildung ist strategische Investition in die Zukunftsfähigkeit Ihrer Organisation und Ihrer Mitarbeiter. Unsere Weiterbildungsprogramme schaffen nicht nur aktuelles CRA-Wissen, sondern entwickeln auch die analytischen Fähigkeiten und praktischen Kompetenzen, die für erfolgreiche Cyber Resilience Act-Implementierung und kontinuierliche Compliance-Exzellenz erforderlich sind.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische CRA-Grundlagen und regulatorische Tiefenanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Technische Implementierung und praktische Umsetzungskompetenzen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Führungskräfte-Weiterbildung und strategische Governance-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliche Fortbildung und Zertifizierungsprogramme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Weiterbildungseffektivität und Kompetenz-Bewertung'
          }
        ],
        alert: {
          title: 'CRA Weiterbildung Hinweis',
          content: 'Erfolgreiche CRA-Compliance erfordert kontinuierliche Weiterbildung und Kompetenzentwicklung. Professionelle Weiterbildungsprogramme schaffen nicht nur aktuelles Wissen, sondern entwickeln auch die strategischen Denkfähigkeiten und praktischen Kompetenzen, die für langfristige Cybersicherheitsexzellenz und regulatorische Führerschaft erforderlich sind.'
        },
        whyUs: {
          title: 'Unsere CRA Weiterbildung Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Zertifizierte Weiterbildungsexperten mit umfassender CRA-Praxiserfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Weiterbildungsmethoden und innovative Lernformate'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Anpassung und maßgeschneiderte Weiterbildungsinhalte'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Langfristige Weiterbildungspartnerschaft und kontinuierliche Begleitung'
            }
          ]
        },
        additionalInfo: 'CRA Weiterbildung ist eine strategische Investition in die Zukunftsfähigkeit Ihrer Organisation und Ihrer Mitarbeiter. Durch professionelle Kompetenzentwicklung transformieren Sie regulatorische Anforderungen in organisatorische Stärken und schaffen nachhaltige Wettbewerbsvorteile.',
        serviceDescription: 'Wir entwickeln und liefern maßgeschneiderte CRA Weiterbildungsprogramme, die theoretisches Wissen mit praktischer Anwendung verbinden und nachhaltige Kompetenzen für erfolgreiche CRA-Compliance und kontinuierliche Cybersicherheitsexzellenz schaffen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische CRA-Grundlagen und Awareness-Weiterbildung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Technische Implementierungs-Fortbildung und Praxis-Workshops'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Führungskräfte-Weiterbildung und Executive Development'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Zertifizierungsprogramme und Kompetenz-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Fortbildung und Wissensvertiefung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser CRA Weiterbildung Ansatz',
        description: 'Wir entwickeln mit Ihnen maßgeschneiderte Weiterbildungsprogramme, die CRA-Wissen effektiv vermitteln, praktische Fähigkeiten aufbauen und nachhaltige Kompetenzentwicklung für alle Organisationsebenen und Qualifikationsstufen gewährleisten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Weiterbildungsbedarfsanalyse und zielgruppenspezifische Curriculum-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Interaktive Weiterbildungsdelivery mit praktischen Anwendungsübungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Kompetenz-Assessment und Zertifizierungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche Lernbegleitung und Wissensvertiefung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Weiterbildungseffektivität und nachhaltige Kompetenzentwicklung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'CRA Weiterbildung ist der Grundstein für nachhaltige Compliance-Exzellenz und organisatorische Transformation. Unsere Kunden profitieren von strukturierten Weiterbildungsprogrammen, die nicht nur aktuelles Wissen vermitteln, sondern auch strategische Denkfähigkeiten und praktische Kompetenzen entwickeln. Erfolgreiche CRA-Implementierung erfordert kontinuierliche Weiterbildung, die regulatorische Anforderungen in organisatorische Stärken verwandelt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'CRA Grundlagen und Strategische Weiterbildung',
          description: 'Umfassende Weiterbildung in CRA-Grundlagen mit Fokus auf strategische Analyse, regulatorische Tiefenverständnis und organisatorische Implementierungsstrategien für nachhaltige Compliance-Exzellenz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'CRA-Grundlagen und regulatorische Tiefenanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Strategische Geschäftsauswirkungen und Compliance-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Organisatorische Rollen und Verantwortlichkeiten im CRA-Kontext'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Kulturentwicklung und Change Management-Kompetenzen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Technische CRA Implementierungs-Fortbildung',
          description: 'Praxisorientierte Fortbildung für technische Teams mit Fokus auf konkrete Umsetzung von CRA-Anforderungen, technische Implementierungsstrategien und praktische Anwendungskompetenzen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Security-by-Design und Security-by-Default Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Vulnerability Management und Update-Prozess-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Dokumentation und Compliance-Nachweis-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Praktische Implementierungsübungen und Anwendungsszenarien'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(craWeiterbildungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRA Weiterbildung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
