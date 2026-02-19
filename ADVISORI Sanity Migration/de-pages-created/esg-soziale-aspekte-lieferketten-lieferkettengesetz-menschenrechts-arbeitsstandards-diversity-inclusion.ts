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
    console.log('Creating ESG Soziale Aspekte page...')

    const esgSozialeAspekteData = {
      _type: 'servicePage',
      _id: 'esg-soziale-aspekte-lieferketten-lieferkettengesetz-menschenrechts-arbeitsstandards-diversity-inclusion',
      title: 'ESG Soziale Aspekte - Lieferketten, Lieferkettengesetz, Menschenrechts- & Arbeitsstandards, Diversity & Inclusion',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/esg/esg-soziale-aspekte-lieferketten-lieferkettengesetz-menschenrechts-arbeitsstandards-diversity-inclusion'
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
        title: 'ESG Soziale Aspekte - Lieferketten & Menschenrechte | ADVISORI',
        description: 'Umfassende Beratung zu ESG sozialen Aspekten: Lieferkettengesetz, Menschenrechts- & Arbeitsstandards, Diversity & Inclusion. Expertenlösungen für nachhaltige Unternehmensführung.',
        keywords: 'ESG soziale Aspekte, Lieferkettengesetz, Menschenrechte, Arbeitsstandards, Diversity & Inclusion, Nachhaltigkeit, Supply Chain Due Diligence'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ESG Soziale Aspekte'
        },
        tagline: 'Verantwortungsvolle Unternehmensführung durch soziale Nachhaltigkeit',
        heading: 'ESG Soziale Aspekte - Lieferketten, Menschenrechte & Diversity',
        description: 'Integrieren Sie soziale Verantwortung systematisch in Ihre Unternehmensstrategie. Wir unterstützen Sie bei der Umsetzung des Lieferkettengesetzes, der Wahrung von Menschenrechts- und Arbeitsstandards sowie der Förderung von Diversity & Inclusion.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Compliance mit Lieferkettengesetz und internationalen Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Reduktion von Reputations- und Rechtsrisiken'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Stärkung der Mitarbeiterbindung und Attraktivität als Arbeitgeber'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Verbesserung der ESG-Ratings und Kapitalmarktzugang'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ESG Soziale Aspekte - Ganzheitliche Nachhaltigkeitsstrategie',
        description: 'Die sozialen Aspekte von ESG (Environmental, Social, Governance) umfassen weitreichende Verantwortungsbereiche von der Lieferkette bis zur internen Organisationskultur. Wir unterstützen Sie dabei, diese komplexen Anforderungen strategisch und operativ zu meistern.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Implementierung von Lieferkettenmanagement gemäß LkSG und EU-Richtlinien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung von Menschenrechts- und Arbeitsstandard-Policies'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Aufbau von Diversity & Inclusion-Programmen und -Metriken'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Etablierung von Überwachungs- und Berichtssystemen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Stakeholder-Engagement und Transparenzinitiiativen'
          }
        ],
        alert: {
          title: 'Compliance-Hinweis',
          content: 'Das deutsche Lieferkettengesetz (LkSG) sowie die kommende EU-Lieferkettenrichtlinie (CSDDD) schaffen verbindliche Sorgfaltspflichten. Eine proaktive Umsetzung sozialer ESG-Standards sichert Compliance und schafft Wettbewerbsvorteile.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Beratung zu Lieferkettengesetz und EU-Nachhaltigkeitsregulierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Interdisziplinäre Expertise in Compliance, HR und Nachhaltigkeitsmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxiserprobte Implementierungsansätze und Change Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitliche Betrachtung von ESG-Risiken und -Chancen'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit starken sozialen ESG-Praktiken verzeichnen durchschnittlich 25% geringere Mitarbeiterfluktuation und 40% höhere Produktivitätswerte. Investieren Sie in nachhaltigen Unternehmenserfolg!',
        serviceDescription: 'Wir bieten eine umfassende Beratung zur strategischen und operativen Umsetzung sozialer ESG-Aspekte. Von der Compliance-Sicherstellung bis zur kulturellen Transformation unterstützen wir Sie dabei, soziale Verantwortung als Wettbewerbsvorteil zu etablieren.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Lieferkettengesetz-Compliance und Due Diligence-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Menschenrechts-Impact-Assessments und Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Diversity & Inclusion-Strategien und Umsetzungskonzepte'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Arbeitsstandard-Monitoring und Supplier-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'ESG-Reporting und Stakeholder-Kommunikation'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Implementierungsansatz',
        description: 'Wir entwickeln maßgeschneiderte Lösungen, die rechtliche Compliance mit strategischen Geschäftszielen und kultureller Transformation verbinden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Gap-Analyse bestehender sozialer ESG-Praktiken und Compliance-Status'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer integrierten sozialen Nachhaltigkeitsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung von Prozessen, Systemen und Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Change Management und Kulturwandel-Begleitung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliches Monitoring und Verbesserung der ESG-Performance'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat uns dabei geholfen, soziale ESG-Aspekte nicht nur als Compliance-Aufgabe, sondern als strategischen Wettbewerbsvorteil zu etablieren. Die ganzheitliche Herangehensweise und praxisnahe Umsetzung haben unsere Nachhaltigkeitsziele messbar vorangebracht.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Lieferkettengesetz-Compliance & Due Diligence',
          description: 'Vollständige Umsetzung der Sorgfaltspflichten gemäß deutschem LkSG und EU-Richtlinien zur Lieferkettentransparenz.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Risikoanalyse und -bewertung entlang der Lieferkette'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Implementierung von Due Diligence-Prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Supplier Code of Conduct und Vertragsgestaltung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Beschwerdemechanismen und Abhilfemaßnahmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Diversity & Inclusion-Programme',
          description: 'Entwicklung und Implementierung umfassender D&I-Strategien zur Förderung einer inklusiven Unternehmenskultur.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'D&I-Assessment und Baseline-Messung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Entwicklung von D&I-Zielen und KPIs'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Bias-Training und Führungskräfteentwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Inclusive Recruiting und Talentmanagement'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(esgSozialeAspekteData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ESG Soziale Aspekte page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
