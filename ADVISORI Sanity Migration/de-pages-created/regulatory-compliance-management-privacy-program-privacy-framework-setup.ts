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
    console.log('Creating Privacy Framework Setup page...')

    const privacyFrameworkSetupData = {
      _type: 'servicePage',
      _id: 'regulatory-compliance-management-privacy-program-privacy-framework-setup',
      title: 'Privacy Framework Setup',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/privacy-program/privacy-program-privacy-framework-setup'
      },
      parent: {
        _type: 'reference',
        _ref: 'regulatory-compliance-management-privacy-program'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'regulatory-reporting'
        }
      },
      seo: {
        _type: 'seo',
        title: 'Privacy Framework Setup | ADVISORI',
        description: 'Etablieren Sie ein robustes Privacy Framework mit strukturierten Governance-Modellen, Privacy-Engineering-Prinzipien und nachhaltigen Datenschutz-Architekturen.',
        keywords: 'Privacy Framework, Privacy Governance, Privacy Engineering, Datenschutz-Architektur, Privacy by Design, GDPR Framework, Privacy Management'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Privacy Framework Setup'
        },
        tagline: 'Fundament für nachhaltigen Datenschutz und Privacy Excellence',
        heading: 'Privacy Framework Setup',
        description: 'Schaffen Sie das strukturelle Fundament für exzellenten Datenschutz durch ein umfassendes Privacy Framework, das Governance, Technik und Prozesse intelligent verzahnt.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strukturierte Privacy Governance mit klaren Verantwortlichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Technische Privacy-Architektur nach Privacy by Design Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Skalierbare Framework-Struktur für Unternehmenswachstum'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Integrierte Monitoring- und Compliance-Mechanismen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Privacy Framework Setup',
        description: 'Ein durchdachtes Privacy Framework bildet das Rückgrat jeder erfolgreichen Datenschutzstrategie. Wir entwickeln mit Ihnen eine maßgeschneiderte Framework-Architektur, die organisatorische Strukturen, technische Lösungen und operative Prozesse zu einem kohärenten System vereint, das nachhaltigen Datenschutz ermöglicht.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Design einer ganzheitlichen Privacy Governance-Struktur mit definierten Rollen und Eskalationswegen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung technischer Privacy-Architekturen basierend auf Privacy Engineering Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Implementierung von Privacy-by-Design-Methoden in Entwicklungs- und Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau automatisierter Privacy-Monitoring- und Compliance-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Etablierung von Privacy-Metriken und kontinuierlichen Verbesserungsprozessen'
          }
        ],
        alert: {
          title: 'Framework als Fundament',
          content: 'Ein gut strukturiertes Privacy Framework reduziert Compliance-Kosten um bis zu 40% und ermöglicht schnelle Anpassungen an neue regulatorische Anforderungen.'
        },
        whyUs: {
          title: 'Unsere Framework-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Erfahrung in Privacy Engineering und Governance-Design'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Framework-Methoden aus komplexen Unternehmensumgebungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitliche Integration von organisatorischen und technischen Aspekten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Kontinuierliche Begleitung bei Framework-Evolution und -Optimierung'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit strukturierten Privacy Frameworks können neue Datenschutzanforderungen 60% schneller umsetzen und reduzieren Privacy-Incidents um durchschnittlich 50%.',
        serviceDescription: 'Wir begleiten Sie bei der Konzeption und Implementierung eines umfassenden Privacy Frameworks, das als stabiles Fundament für alle Datenschutzaktivitäten Ihres Unternehmens dient.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Privacy Governance Framework Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Privacy Engineering Architecture'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Privacy-by-Design Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Automated Privacy Controls'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Framework Monitoring & Optimization'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Framework-First Ansatz',
        description: 'Wir entwickeln mit Ihnen ein Privacy Framework, das nicht nur aktuellen Anforderungen gerecht wird, sondern auch als adaptive Plattform für zukünftige Entwicklungen fungiert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der bestehenden Strukturen und Identifikation von Framework-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design einer modularen Framework-Architektur mit flexiblen Komponenten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Schrittweise Implementierung mit kontinuierlicher Validierung und Anpassung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration von Monitoring und kontinuierlichen Verbesserungsmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Schulung und Change Management für nachhaltige Framework-Adoption'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Das von ADVISORI entwickelte Privacy Framework hat unsere Datenschutzoperationen revolutioniert. Wir können heute komplexe Privacy-Anforderungen systematisch und effizient bewältigen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Privacy Governance Framework',
          description: 'Entwicklung einer strukturierten Governance-Architektur mit klaren Verantwortlichkeiten, Entscheidungswegen und Accountability-Mechanismen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Privacy Governance Modell mit Rollen und Verantwortungsmatrix'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Privacy Committee Strukturen und Eskalationsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Privacy Policy Framework mit Richtlinien-Hierarchie'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Compliance-Monitoring und Reporting-Strukturen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Privacy Engineering Architecture',
          description: 'Aufbau einer technischen Privacy-Architektur mit Privacy-by-Design-Prinzipien und automatisierten Datenschutzkontrollen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Privacy-by-Design Architekturprinzipien und Patterns'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automatisierte Privacy Controls und Enforcement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Privacy-preserving Technologies Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Data Lifecycle Management Automation'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(privacyFrameworkSetupData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Privacy Framework Setup page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
