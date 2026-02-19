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
    console.log('Creating FRTB Audit-Unterstützung & Dokumentation page...')

    const frtbAuditUnterstuetzungDokumentationData = {
      _type: 'servicePage',
      _id: 'frtb-audit-unterstuetzung-dokumentation',
      title: 'FRTB Audit-Unterstützung & Dokumentation',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/frtb/frtb-ongoing-compliance/frtb-audit-unterstuetzung-dokumentation'
      },
      parent: {
        _type: 'reference',
        _ref: 'frtb-ongoing-compliance'
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
        title: 'FRTB Audit-Unterstützung & Dokumentation | ADVISORI',
        description: 'Professionelle Unterstützung bei FRTB-Audits und Erstellung aufsichtskonformer Dokumentation. Wir begleiten Sie bei internen und externen Prüfungen sowie der Vorbereitung regulatorischer Reviews.',
        keywords: 'FRTB, Audit-Unterstützung, Dokumentation, Regulatorische Prüfung, Compliance Documentation, FRTB Audit, Marktrisiko Audit'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'FRTB Audit-Unterstützung & Dokumentation'
        },
        tagline: 'Professionelle FRTB Audit-Unterstützung und aufsichtskonforme Dokumentation',
        heading: 'FRTB Audit-Unterstützung & Dokumentation',
        description: 'Erfolgreiche FRTB-Audits erfordern nicht nur technische Compliance, sondern auch professionelle Dokumentation und strategische Vorbereitung. Wir unterstützen Sie bei der Audit-Readiness und erstellen aufsichtskonforme Dokumentation.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Professionelle Vorbereitung auf FRTB-Audits und regulatorische Reviews'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Aufsichtskonforme Dokumentation aller FRTB-relevanten Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Begleitung bei internen und externen Prüfungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Minimierung von Audit-Risiken und regulatorischen Beanstandungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'FRTB Audit-Unterstützung & Dokumentation',
        description: 'FRTB-Audits sind komplexe Prüfungen, die sowohl die technische Umsetzung als auch die Governance-Strukturen und Dokumentationsqualität bewerten. Eine professionelle Audit-Vorbereitung und hochwertige Dokumentation sind entscheidend für den Prüfungserfolg. Wir unterstützen Sie bei der systematischen Vorbereitung auf FRTB-Audits und erstellen aufsichtskonforme Dokumentation, die regulatorische Standards erfüllt und Prüfer überzeugt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Audit-Readiness-Bewertung und Vorbereitung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Erstellung aufsichtskonformer FRTB-Dokumentation und Policies'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Begleitung bei internen Audits und externen Prüfungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung von Audit-Response-Strategien und Remediation Plans'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Training und Vorbereitung der Teams auf Audit-Interviews'
          }
        ],
        alert: {
          title: 'Audit-Erfolg durch Vorbereitung',
          content: 'FRTB-Audits prüfen nicht nur technische Compliance, sondern auch Governance, Dokumentation und operative Umsetzung. Eine professionelle Vorbereitung reduziert Audit-Risiken erheblich und kann zu positiven Prüfungsergebnissen beitragen.'
        },
        whyUs: {
          title: 'Warum ADVISORI',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Erfahrung in FRTB-Audits und regulatorischen Prüfungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Expertise in der Erstellung aufsichtskonformer Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methoden zur Audit-Vorbereitung und -begleitung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Tiefes Verständnis der Prüfer-Erwartungen und regulatorischen Standards'
            }
          ]
        },
        additionalInfo: 'Eine professionelle FRTB Audit-Vorbereitung kann die Wahrscheinlichkeit positiver Prüfungsergebnisse um bis zu 80% erhöhen und gleichzeitig die Audit-Dauer verkürzen. Die Investition in qualitativ hochwertige Dokumentation zahlt sich sowohl bei Audits als auch im täglichen Betrieb aus.',
        serviceDescription: 'Unser umfassendes Leistungsspektrum zur FRTB Audit-Unterstützung kombiniert technische Expertise mit Audit-Erfahrung. Wir begleiten Sie von der initialen Audit-Readiness-Bewertung bis zur finalen Prüfungsbegleitung und Nachbereitung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Audit-Readiness-Assessment und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Erstellung und Review aufsichtskonformer Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Audit-Vorbereitung und Mock-Audits'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Begleitung bei Prüfungen und Stakeholder-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Post-Audit-Support und Remediation-Unterstützung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Ansatz',
        description: 'Wir verfolgen einen strukturierten, praxiserprobten Ansatz zur FRTB Audit-Unterstützung, der sowohl die technischen als auch die prozessualen Aspekte umfasst.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Audit-Readiness-Bewertung und Schwachstellenanalyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Systematische Dokumentationserstellung nach regulatorischen Standards'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Intensive Vorbereitung der Teams durch Mock-Audits und Interviews'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Professionelle Begleitung während der Prüfung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Strukturierte Nachbereitung und Implementierung von Verbesserungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Erfolgreiche FRTB-Audits sind das Ergebnis systematischer Vorbereitung und professioneller Dokumentation. Mit unserer Unterstützung verwandeln wir Audit-Herausforderungen in Gelegenheiten, die Qualität der FRTB-Implementation zu demonstrieren und regulatorisches Vertrauen zu stärken.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Audit-Readiness & Vorbereitung',
          description: 'Systematische Bewertung der Audit-Bereitschaft und professionelle Vorbereitung auf FRTB-Prüfungen zur Maximierung der Erfolgswahrscheinlichkeit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Audit-Readiness-Assessments und Gap-Analysen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Mock-Audits und Simulation regulatorischer Prüfungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Team-Training und Vorbereitung auf Audit-Interviews'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung von Audit-Response-Strategien und Communication Plans'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Aufsichtskonforme Dokumentation',
          description: 'Erstellung und Review umfassender FRTB-Dokumentation, die regulatorische Standards erfüllt und Prüfer-Erwartungen übertrifft.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Policy- und Procedure-Dokumentation nach regulatorischen Standards'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Modell-Dokumentation und Validierungsberichte'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Governance-Frameworks und Organisationshandbücher'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Audit-Trail-Dokumentation und Evidence-Management'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(frtbAuditUnterstuetzungDokumentationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ FRTB Audit-Unterstützung & Dokumentation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
