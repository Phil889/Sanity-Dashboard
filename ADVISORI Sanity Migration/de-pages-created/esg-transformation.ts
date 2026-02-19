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
    console.log('Creating ESG Transformation page...')

    const esgTransformationData = {
      _type: 'servicePage',
      _id: 'esg-transformation',
      title: 'ESG Transformation',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/esg/esg-transformation'
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
        title: 'ESG Transformation | ADVISORI',
        description: 'Transformieren Sie Ihr Unternehmen für eine nachhaltige Zukunft. Wir unterstützen Sie bei der strategischen ESG-Integration und der Implementierung nachhaltiger Geschäftspraktiken.',
        keywords: 'ESG Transformation, Nachhaltigkeit, ESG-Integration, Nachhaltigkeitsstrategie, CSR, Sustainable Finance, ESG Reporting'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ESG Transformation'
        },
        tagline: 'Strategische Integration von ESG-Prinzipien in Ihre Unternehmensführung',
        heading: 'ESG Transformation',
        description: 'ESG Transformation bedeutet die systematische Integration von Environmental, Social und Governance-Prinzipien in alle Aspekte Ihrer Geschäftstätigkeit. Wir begleiten Sie auf dem Weg zu einem nachhaltigen und zukunftsfähigen Unternehmen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Stärkung der Unternehmensresilienz und Risikoreduzierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Verbesserung der Kapitalzugangsbedingungen und Finanzierungskonditionen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Erhöhung der Mitarbeiterzufriedenheit und Talentgewinnung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Aufbau von Vertrauen bei Stakeholdern und Investoren'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'ESG Transformation',
        description: 'ESG Transformation ist mehr als Compliance – es ist die strategische Neuausrichtung Ihres Unternehmens für eine nachhaltige Zukunft. Wir unterstützen Sie bei der Entwicklung und Umsetzung einer ganzheitlichen ESG-Strategie, die Ihre Geschäftsziele mit gesellschaftlichen und ökologischen Werten in Einklang bringt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische ESG-Bewertung und Materialitätsanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung von nachhaltigen Geschäftsmodellen und -strategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementation von ESG-Governance-Strukturen und -Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau von ESG-Berichtswesen und Transparenzmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Change Management und Mitarbeiterengagement für Nachhaltigkeit'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'ESG Transformation erfordert einen systematischen Ansatz, der alle Unternehmensebenen einbezieht. Erfolgreiche Transformation beginnt mit einer klaren Vision und erfordert kontinuierliches Commitment der Führungsebene.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in ESG-Strategie und Nachhaltigkeitsmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Branchenübergreifende Erfahrung in der Umsetzung von ESG-Transformationen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Beratungsansatz von Strategie bis zur operativen Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Tiefes Verständnis regulatorischer Anforderungen und Markttrends'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit starker ESG-Performance zeigen nachweislich bessere finanzielle Ergebnisse und höhere Bewertungen. Eine strategische ESG-Transformation kann den Unternehmenswert um bis zu 20% steigern und die Kapitalkosten signifikant reduzieren.',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum für Ihre ESG-Transformation, von der strategischen Planung über die operative Umsetzung bis hin zum kontinuierlichen Monitoring und zur Weiterentwicklung Ihrer Nachhaltigkeitsperformance.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'ESG-Strategieentwicklung und Materialitätsanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Nachhaltige Geschäftsmodellentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'ESG-Governance und Organisationsentwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Nachhaltigkeitsberichterstattung und Transparenz'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Change Management und Kulturwandel'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine maßgeschneiderte ESG-Transformationsstrategie, die auf Ihre spezifischen Herausforderungen und Ziele zugeschnitten ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Ist-Analyse und ESG-Assessment Ihres Unternehmens'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Stakeholder-Engagement und Materialitätsanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung einer integrierten ESG-Strategie und Roadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementation von Governance-Strukturen und Prozessen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Monitoring, Messung und kontinuierliche Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Mit ADVISORI haben wir einen Partner gefunden, der uns dabei unterstützt hat, ESG nicht nur als Compliance-Thema zu sehen, sondern als strategischen Treiber für Innovation und Wachstum. Die ganzheitliche Herangehensweise hat uns geholfen, Nachhaltigkeit erfolgreich in unser Geschäftsmodell zu integrieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ESG-Strategieentwicklung',
          description: 'Wir entwickeln mit Ihnen eine umfassende ESG-Strategie, die auf Ihre Unternehmensziele und Stakeholder-Erwartungen abgestimmt ist.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Materialitätsanalyse und Stakeholder-Mapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'ESG-Zieldefinition und KPI-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Roadmap-Entwicklung und Umsetzungsplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration in die Unternehmensstrategie'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Nachhaltige Geschäftsmodelle',
          description: 'Wir unterstützen Sie bei der Entwicklung und Transformation zu nachhaltigen Geschäftsmodellen, die langfristigen Wert schaffen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Circular Economy Konzepte und Implementation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Sustainable Finance Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Innovation für Nachhaltigkeit'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Wertschöpfungskettenoptimierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(esgTransformationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ESG Transformation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
