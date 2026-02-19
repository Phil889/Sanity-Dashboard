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
    console.log('Creating Standards Frameworks TISAX VDA Self-Assessment Gap Analyse page...')

    const tisaxSelfAssessmentData = {
      _type: 'servicePage',
      _id: 'standards-frameworks-tisax-vda-self-assessment-gap-analyse',
      title: 'TISAX VDA Self-Assessment Gap Analyse',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/standards-frameworks-tisax-vda-isa/standards-frameworks-tisax-vda-self-assessment-gap-analyse'
      },
      parent: {
        _type: 'reference',
        _ref: 'standards-frameworks-tisax-vda-isa'
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
        title: 'TISAX VDA Self-Assessment Gap Analyse | ADVISORI',
        description: 'Professionelle TISAX VDA Self-Assessment und Gap-Analyse Services. Bewerten Sie Ihre Readiness für die TISAX-Zertifizierung mit unseren Automotive-Sicherheitsexperten.',
        keywords: 'TISAX Self-Assessment, VDA Gap Analyse, Automotive Sicherheit, TISAX Readiness, Informationssicherheit Assessment'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'TISAX VDA Self-Assessment Gap Analyse'
        },
        tagline: 'Professionelle TISAX Readiness Bewertung',
        heading: 'TISAX VDA Self-Assessment Gap Analyse',
        description: 'Ermitteln Sie Ihre aktuelle Readiness für die TISAX-Zertifizierung mit unserem umfassenden Self-Assessment und Gap-Analyse Service. Wir bewerten Ihre Informationssicherheitslage nach VDA ISA Kriterien und entwickeln einen maßgeschneiderten Umsetzungsplan.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Klare Bewertung Ihrer aktuellen TISAX-Readiness'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Identifikation aller Compliance-Lücken nach VDA ISA'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Priorisierter Maßnahmenkatalog für die Zertifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Realistische Zeit- und Kostenplanung für TISAX'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'TISAX VDA Self-Assessment Gap Analyse',
        description: 'Unser TISAX VDA Self-Assessment und Gap-Analyse Service bietet Ihnen eine umfassende Bewertung Ihrer aktuellen Informationssicherheitslage im Kontext der VDA ISA Anforderungen. Wir identifizieren präzise, wo Ihr Unternehmen steht und was für eine erfolgreiche TISAX-Zertifizierung erforderlich ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Bewertung aller VDA ISA Kontrollbereiche'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Detaillierte Gap-Analyse mit Compliance-Level-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Risikobasierte Priorisierung der Umsetzungsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Erstellung eines detaillierten Readiness-Reports'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Entwicklung eines maßgeschneiderten Umsetzungsfahrplans'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Ein professionelles Self-Assessment vor der offiziellen TISAX-Beurteilung reduziert das Risiko von Non-Conformities erheblich und beschleunigt den Zertifizierungsprozess um durchschnittlich 40%.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Zertifizierte TISAX-Assessoren mit umfassender VDA ISA Expertise'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Branchenspezifische Bewertungsmodelle für verschiedene Automotive-Sektoren'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxisorientierte Umsetzungsempfehlungen basierend auf Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung vom Assessment bis zur Zertifizierung'
            }
          ]
        },
        additionalInfo: 'Unser Self-Assessment basiert auf der aktuellen VDA ISA Version und berücksichtigt die spezifischen Anforderungen verschiedener Assessment-Level (AL1, AL2, AL3). Das Assessment wird durch zertifizierte Assessoren durchgeführt und liefert belastbare Ergebnisse.',
        serviceDescription: 'Wir bieten strukturierte Self-Assessment und Gap-Analyse Services, die Ihnen eine realistische Einschätzung Ihrer TISAX-Readiness und einen klaren Weg zur Zertifizierung aufzeigen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Umfassende VDA ISA Readiness-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Detaillierte Gap-Analyse und Compliance-Mapping'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Risikobasierte Maßnahmenpriorisierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Kosten-Nutzen-Analyse für Umsetzungsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Zeitplan und Meilenstein-Planung für die Zertifizierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir führen systematische Self-Assessments durch, die auf bewährten Methoden und umfassender VDA ISA Expertise basieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Vorbereitung und Scoping des Assessment-Umfangs'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Systematische Bewertung aller VDA ISA Kontrollbereiche'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Detaillierte Gap-Analyse und Reifegradbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung priorisierter Maßnahmenpläne'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Erstellung umfassender Assessment-Reports und Roadmaps'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Das TISAX Self-Assessment von ADVISORI hat uns eine klare Roadmap für unsere Zertifizierung geliefert. Dank der präzisen Gap-Analyse konnten wir gezielt die kritischen Bereiche adressieren und haben die TISAX-Zertifizierung erfolgreich beim ersten Versuch erreicht.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Comprehensive VDA ISA Self-Assessment',
          description: 'Vollständige Bewertung Ihrer Informationssicherheitslage nach allen VDA ISA Kontrollbereichen und Assessment-Leveln.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Bewertung aller 103 VDA ISA Kontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Assessment-Level spezifische Bewertung (AL1-AL3)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Dokumentations-Review und Evidence-Assessment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Interviews mit Key Stakeholdern'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Detaillierte Gap-Analyse und Umsetzungsplanung',
          description: 'Präzise Identifikation von Compliance-Lücken mit priorisierten Umsetzungsempfehlungen und realistischer Zeitplanung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Compliance-Gap Mapping mit Schweregrad-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Risikobasierte Maßnahmenpriorisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Kosten-Nutzen-Analyse für alle Umsetzungsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Detaillierte Roadmap mit Meilensteinen und Zeitplan'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(tisaxSelfAssessmentData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Standards Frameworks TISAX VDA Self-Assessment Gap Analyse page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
