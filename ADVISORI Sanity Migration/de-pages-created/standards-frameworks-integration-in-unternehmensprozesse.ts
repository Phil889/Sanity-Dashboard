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
    console.log('Creating Standards Frameworks Integration in Unternehmensprozesse page...')

    const integrationData = {
      _type: 'servicePage',
      _id: 'standards-frameworks-integration-in-unternehmensprozesse',
      title: 'Standards Frameworks Integration in Unternehmensprozesse',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/standards-frameworks-nist-cybersecurity-framework/standards-frameworks-integration-in-unternehmensprozesse'
      },
      parent: {
        _type: 'reference',
        _ref: 'standards-frameworks-nist-cybersecurity-framework'
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
        title: 'Standards Frameworks Integration in Unternehmensprozesse | ADVISORI',
        description: 'Integrieren Sie Standards Frameworks nahtlos in Ihre Unternehmensprozesse. Wir unterstützen Sie bei der strategischen Einbindung von NIST, ISO und anderen Frameworks.',
        keywords: 'Standards Integration, NIST Framework, ISO Standards, Unternehmensprozesse, Compliance Integration, Framework Implementierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Standards Frameworks Integration in Unternehmensprozesse'
        },
        tagline: 'Nahtlose Integration von Standards Frameworks in Ihre Geschäftsprozesse',
        heading: 'Standards Frameworks Integration in Unternehmensprozesse',
        description: 'Die strategische Integration von Standards Frameworks in Unternehmensprozesse transformiert Compliance von einer Last zu einem Wettbewerbsvorteil. Wir unterstützen Sie dabei, Standards nahtlos in Ihre Arbeitsabläufe zu integrieren.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Nahtlose Einbindung von Standards in bestehende Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Reduzierung von Compliance-Aufwand durch intelligente Automatisierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Erhöhung der Effizienz und Qualität von Unternehmensprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Schaffung einer konsistenten und nachverfolgbaren Compliance-Kultur'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Standards Frameworks Integration in Unternehmensprozesse',
        description: 'Die erfolgreiche Integration von Standards Frameworks in Unternehmensprozesse erfordert eine durchdachte Strategie, die technische Exzellenz mit operativer Effizienz verbindet. Wir helfen Ihnen dabei, Standards nicht als externe Anforderung, sondern als integralen Bestandteil Ihrer Wertschöpfung zu verstehen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse bestehender Geschäftsprozesse und Identifikation von Integrationspunkten'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Mapping von Standards-Anforderungen auf operative Arbeitsabläufe'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung von automatisierten Compliance-Workflows'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Implementation von kontinuierlichen Monitoring- und Verbesserungsprozessen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Change Management und Mitarbeiterqualifizierung für nachhaltige Adoption'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiche Standards-Integration beginnt nicht mit der Technologie, sondern mit dem Verständnis Ihrer spezifischen Geschäftsprozesse und der strategischen Ausrichtung des Unternehmens.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in Standards Frameworks und Geschäftsprozess-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodik für nahtlose Integration ohne Disruption des Tagesgeschäfts'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenübergreifende Erfahrung in der Umsetzung komplexer Compliance-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Fokus auf nachhaltige Lösungen mit messbarem Business Value'
            }
          ]
        },
        additionalInfo: 'Unternehmen, die Standards erfolgreich in ihre Prozesse integrieren, verzeichnen eine Reduzierung der Compliance-Kosten um bis zu 40% und gleichzeitig eine Steigerung der Prozessqualität um durchschnittlich 25%.',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum für die strategische Integration von Standards Frameworks in Ihre Unternehmensprozesse, von der initialen Analyse bis zur nachhaltigen Operationalisierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Prozess-Assessment und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Standards-Mapping und Integrationsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Workflow-Automatisierung und Tool-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Change Management und Mitarbeiterqualifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliches Monitoring und Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen systematischen und partizipativen Ansatz, der Ihre spezifischen Unternehmensanforderungen in den Mittelpunkt stellt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer aktuellen Prozesslandschaft und Standards-Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer maßgeschneiderten Integrationsstrategie mit klaren Prioritäten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Schrittweise Implementierung mit kontinuierlicher Validierung und Anpassung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Intensive Begleitung des Change Managements für nachhaltige Adoption'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung von Mess- und Verbesserungsmechanismen für kontinuierliche Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die Integration von Standards Frameworks in unsere Geschäftsprozesse war ein Wendepunkt für unser Unternehmen. ADVISORI hat uns nicht nur bei der technischen Umsetzung unterstützt, sondern auch dabei geholfen, Compliance als strategischen Vorteil zu verstehen und zu nutzen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Prozess-Assessment und Standards-Mapping',
          description: 'Wir analysieren Ihre bestehenden Geschäftsprozesse und identifizieren optimale Integrationspunkte für Standards-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Prozessdokumentation und -analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Mapping von Standards-Kontrollen auf Geschäftsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation von Automatisierungspotenzialen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung einer priorisierten Integrations-Roadmap'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Workflow-Automatisierung und Tool-Integration',
          description: 'Wir implementieren intelligente Automatisierungslösungen, die Standards-Compliance nahtlos in Ihre täglichen Arbeitsabläufe integrieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Automatisierte Compliance-Workflows und -Kontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integration in bestehende Business-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Real-time Monitoring und Alerting-Mechanismen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Dashboards und Reporting für kontinuierliche Überwachung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(integrationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Standards Frameworks Integration in Unternehmensprozesse page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
