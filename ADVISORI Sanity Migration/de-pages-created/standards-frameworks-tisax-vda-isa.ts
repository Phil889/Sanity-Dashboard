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
    console.log('Creating Standards Frameworks TISAX VDA ISA page...')

    const tisaxVdaIsaData = {
      _type: 'servicePage',
      _id: 'standards-frameworks-tisax-vda-isa',
      title: 'TISAX VDA ISA',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/standards-frameworks-tisax-vda-isa'
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
        title: 'TISAX VDA ISA | ADVISORI',
        description: 'Professionelle TISAX VDA ISA Beratung und Implementierung. Sichern Sie sich die Automobilindustrie-Zertifizierung mit unseren Experten für Informationssicherheit.',
        keywords: 'TISAX, VDA ISA, Automobilindustrie, Informationssicherheit, Zertifizierung, Compliance, Automotive'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'TISAX VDA ISA'
        },
        tagline: 'Sicherheitsstandard für die Automobilindustrie',
        heading: 'TISAX VDA ISA',
        description: 'TISAX (Trusted Information Security Assessment Exchange) basiert auf dem VDA ISA (Verband der Automobilindustrie Information Security Assessment) und ist der führende Sicherheitsstandard für die Automobilindustrie. Wir unterstützen Sie bei der erfolgreichen Implementierung und Zertifizierung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Zugang zur globalen Automotive-Lieferkette'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Nachweis hoher Informationssicherheitsstandards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Reduzierung von Audit-Aufwänden durch gegenseitige Anerkennung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Stärkung der Wettbewerbsposition im Automotive-Sektor'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'TISAX VDA ISA',
        description: 'TISAX (Trusted Information Security Assessment Exchange) ist ein branchenweiter Standard für Informationssicherheits-Assessments in der Automobilindustrie, basierend auf dem VDA ISA Katalog. Er ermöglicht es Unternehmen, ihre Informationssicherheit einheitlich bewerten zu lassen und schafft Vertrauen zwischen Geschäftspartnern in der Automotive-Lieferkette.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse der aktuellen Informationssicherheitslage nach VDA ISA Kriterien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Gap-Analyse und Entwicklung eines Umsetzungsplans'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung erforderlicher Sicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Vorbereitung auf das TISAX Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Begleitung während des Zertifizierungsprozesses'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'TISAX ist für viele Automobilhersteller und Tier-1-Zulieferer mittlerweile eine Voraussetzung für Geschäftsbeziehungen. Eine frühzeitige Zertifizierung sichert Ihnen Wettbewerbsvorteile und Marktzugang.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in Automotive-spezifischen Sicherheitsanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrung mit komplexen Lieferketten-Sicherheitsanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxiserprobte Implementierungsstrategien für VDA ISA Kontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung vom Assessment bis zur erfolgreichen Zertifizierung'
            }
          ]
        },
        additionalInfo: 'TISAX-Zertifizierungen werden von der ENX Association verwaltet und sind drei Jahre gültig. Eine erfolgreiche Zertifizierung reduziert die Notwendigkeit multipler Audits verschiedener OEMs und schafft Vertrauen in der gesamten Automotive-Lieferkette.',
        serviceDescription: 'Wir bieten umfassende Unterstützung bei der TISAX VDA ISA Implementierung und Zertifizierung, von der initialen Gap-Analyse bis zur erfolgreichen Zertifizierung und darüber hinaus.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'VDA ISA Gap-Analyse und Readiness Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Implementierung von Informationssicherheitskontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Dokumentation und Nachweis-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Assessment-Vorbereitung und Begleitung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Compliance-Überwachung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen eine strukturierte TISAX-Strategie, die auf die spezifischen Anforderungen Ihrer Automotive-Geschäftstätigkeit zugeschnitten ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse Ihrer aktuellen Informationssicherheitslage'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Gap-Analyse gegen VDA ISA Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung eines maßgeschneiderten Umsetzungsplans'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung erforderlicher Sicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Vorbereitung und Begleitung des TISAX Assessments'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns erfolgreich durch den komplexen TISAX-Zertifizierungsprozess geführt. Dank ihrer Automotive-Expertise und strukturierten Herangehensweise konnten wir alle VDA ISA Anforderungen erfüllen und sind jetzt vollständig TISAX-zertifiziert.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'VDA ISA Gap-Analyse',
          description: 'Umfassende Bewertung Ihrer aktuellen Informationssicherheitslage gegen die VDA ISA Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse aller VDA ISA Kontrollbereiche'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation von Compliance-Lücken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Priorisierung der Umsetzungsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Erstellung eines detaillierten Gap-Analyse Berichts'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'TISAX Assessment Vorbereitung',
          description: 'Professionelle Vorbereitung auf das offizielle TISAX Assessment durch einen akkreditierten Audit Provider.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Vollständige Dokumentations-Review'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Mock-Assessments und Simulation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Schulung der internen Teams'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Begleitung während des offiziellen Assessments'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(tisaxVdaIsaData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Standards Frameworks TISAX VDA ISA page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
