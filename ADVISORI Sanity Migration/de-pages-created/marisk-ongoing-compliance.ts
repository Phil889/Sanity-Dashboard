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
    console.log('Creating MaRisk Ongoing Compliance page...')

    const mariskOngoingComplianceData = {
      _type: 'servicePage',
      _id: 'marisk-ongoing-compliance',
      title: 'MaRisk Ongoing Compliance',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/marisk/marisk-ongoing-compliance'
      },
      parent: {
        _type: 'reference',
        _ref: 'marisk'
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
        title: 'MaRisk Ongoing Compliance | ADVISORI',
        description: 'Kontinuierliche MaRisk-Compliance für Finanzinstitute. ADVISORI unterstützt Sie bei der nachhaltigen Einhaltung regulatorischer Anforderungen und Anpassung an neue Vorgaben.',
        keywords: 'MaRisk, Ongoing Compliance, Regulatorisches Monitoring, Compliance Management, Finanzaufsicht, Bankenregulierung, Risikocontrolling'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'MaRisk Ongoing Compliance'
        },
        tagline: 'Nachhaltige Einhaltung der MaRisk-Anforderungen',
        heading: 'MaRisk Ongoing Compliance',
        description: 'Sichern Sie die kontinuierliche Einhaltung der MaRisk-Vorgaben in Ihrem Institut. ADVISORI unterstützt Sie bei der nachhaltigen Gestaltung Ihrer Compliance-Prozesse und der proaktiven Anpassung an regulatorische Änderungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Kontinuierliche Überwachung der MaRisk-Konformität'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Frühzeitige Identifikation von Handlungsbedarf bei regulatorischen Änderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Effiziente und nachhaltige Compliance-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Minimierung des Compliance-Risikos durch systematisches Monitoring'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'MaRisk Ongoing Compliance',
        description: 'Die kontinuierliche Einhaltung der MaRisk-Anforderungen stellt eine zentrale Herausforderung für Finanzinstitute dar. Sich ändernde regulatorische Vorgaben, neue Geschäftsmodelle und eine komplexe Organisationsstruktur erfordern ein durchdachtes und nachhaltiges Compliance-Management-System, das sowohl reaktiv als auch proaktiv agiert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematisches Monitoring regulatorischer Änderungen und deren Auswirkungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Etablierung und Optimierung von Compliance-Prozessen und -Kontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Regelmäßige Self-Assessments und interne Überprüfungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Vorbereitung und Begleitung von Prüfungen durch Aufsichtsbehörden'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Entwicklung einer nachhaltigen Compliance-Kultur im Institut'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Ongoing Compliance geht weit über eine reine Einhaltung von Regelungen hinaus. Eine erfolgreiche MaRisk-Compliance erfordert die Integration regulatorischer Anforderungen in Ihre täglichen Geschäftsprozesse und die Schaffung einer risikobewussten Unternehmenskultur.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Langjährige Erfahrung mit MaRisk und verwandten Regularien (BAIT, ZAIT, etc.)'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Kombinierte Expertise in Regulatorik, Risikomanagement und Prozessoptimierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Praxiserprobte Methoden und Tools für effizientes Compliance-Management'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Breite Erfahrung aus unterschiedlichen Instituten verschiedener Größen und Geschäftsmodelle'
            }
          ]
        },
        additionalInfo: 'Eine nachhaltige MaRisk-Compliance reduziert nicht nur Ihr regulatorisches Risiko, sondern kann sich auch positiv auf Ihre Prozesseffizienz, Datenqualität und strategische Entscheidungsfindung auswirken. Nutzen Sie regulatorische Anforderungen als Katalysator für Verbesserungen in Ihrer Organisation.',
        serviceDescription: 'ADVISORI bietet Ihnen ein umfassendes Leistungsspektrum für die kontinuierliche Einhaltung der MaRisk-Anforderungen. Von der systematischen Überwachung regulatorischer Änderungen über die Optimierung Ihrer Compliance-Prozesse bis hin zur Vorbereitung auf Prüfungen durch die Aufsicht – wir unterstützen Sie dabei, Compliance effizient und nachhaltig zu gestalten.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Regulatory Monitoring und Impact-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Compliance-Management-System (CMS) für MaRisk'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Durchführung von Self-Assessments und Gap-Analysen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Begleitung bei Prüfungen durch Interne Revision und Aufsicht'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Schulungen und Workshops zu MaRisk-Anforderungen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Unser Ansatz zur Sicherstellung einer nachhaltigen MaRisk-Compliance orientiert sich an einem kontinuierlichen Verbesserungszyklus und berücksichtigt sowohl die individuellen Gegebenheiten Ihres Instituts als auch die aktuellen regulatorischen Entwicklungen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse des Status quo und Identifikation von Handlungsfeldern'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung und Implementierung eines risikoorientieren Compliance-Management-Systems'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Etablierung systematischer Monitoring- und Kontrollprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Unterstützung bei der Umsetzung regulatorischer Änderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Effizienzsteigerung der Compliance-Prozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'Regionalbank AG',
        name: 'Dr. Martin Schmitt',
        position: 'Leiter Compliance',
        quote: 'Mit ADVISORI haben wir einen Partner gefunden, der uns nicht nur bei der initialen MaRisk-Compliance unterstützt hat, sondern uns auch bei der kontinuierlichen Weiterentwicklung unserer Compliance-Prozesse begleitet. Besonders überzeugt hat uns der pragmatische Ansatz, der regulatorische Anforderungen mit praktischer Umsetzbarkeit verbindet.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Regulatory Monitoring und Impact-Analyse',
          description: 'Systematische Überwachung regulatorischer Änderungen und Analyse ihrer Auswirkungen auf Ihr Institut.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Monitoring von MaRisk-Novellen und verwandten Regularien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Analyse der Auswirkungen auf Prozesse, Systeme und Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Priorisierung von Handlungsfeldern nach Risiko und Aufwand'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung von Umsetzungsfahrplänen für regulatorische Änderungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'MaRisk-Compliance-Management-System',
          description: 'Entwicklung und Optimierung eines ganzheitlichen Systems zur Sicherstellung der kontinuierlichen MaRisk-Konformität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Risikoorientiertes Compliance-Framework'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integration in bestehende GRC-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Klare Verantwortlichkeiten und Eskalationswege'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Effiziente Berichterstattung und Management-Information'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(mariskOngoingComplianceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ MaRisk Ongoing Compliance page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
