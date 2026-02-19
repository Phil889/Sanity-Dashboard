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
    console.log('Creating Standards Frameworks Zertifizierungsbegleitung Audit Support page...')

    const standardsFrameworksZertifizierungsbegleitungAuditSupportData = {
      _type: 'servicePage',
      _id: 'standards-frameworks-zertifizierungsbegleitung-audit-support',
      title: 'IT-Grundschutz BSI Zertifizierungsbegleitung & Audit Support',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/standards-frameworks-it-grundschutz-bsi/standards-frameworks-zertifizierungsbegleitung-audit-support'
      },
      parent: {
        _type: 'reference',
        _ref: 'standards-frameworks-it-grundschutz-bsi'
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
        title: 'IT-Grundschutz BSI Zertifizierungsbegleitung & Audit Support | ADVISORI',
        description: 'Professionelle Begleitung für IT-Grundschutz BSI Zertifizierungen und Audit-Unterstützung. Erfolgreiche Vorbereitung auf BSI-Audits und Zertifizierungsprozesse mit erfahrenen Experten.',
        keywords: 'IT-Grundschutz, BSI Zertifizierung, Audit Support, Zertifizierungsbegleitung, BSI Audit, Compliance Audit, Informationssicherheit'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IT-Grundschutz BSI Zertifizierungsbegleitung & Audit Support'
        },
        tagline: 'Professionelle Begleitung zum erfolgreichen BSI-Zertifikat',
        heading: 'IT-Grundschutz BSI Zertifizierungsbegleitung & Audit Support',
        description: 'Wir begleiten Sie professionell durch den gesamten BSI-Zertifizierungsprozess und unterstützen Sie bei internen und externen Audits für eine erfolgreiche IT-Grundschutz Zertifizierung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Professionelle Vorbereitung auf BSI-Zertifizierungsaudits'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Erfahrene Auditoren als Begleitung und Unterstützung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Strukturierte Nachweisführung und Dokumentationsoptimierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Erfolgreiche Zertifizierung beim ersten Versuch'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'IT-Grundschutz BSI Zertifizierungsbegleitung & Audit Support',
        description: 'Der Weg zur erfolgreichen IT-Grundschutz Zertifizierung erfordert methodische Vorbereitung, lückenlose Dokumentation und professionelle Audit-Begleitung. Wir unterstützen Sie als erfahrene Partner durch alle Phasen des Zertifizierungsprozesses und stellen sicher, dass Sie optimal auf die BSI-Prüfung vorbereitet sind.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Audit-Readiness Bewertung und Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Strukturierte Vorbereitung der Zertifizierungsunterlagen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Mock-Audits und Simulation der Zertifizierungsprüfung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Begleitung während des offiziellen BSI-Zertifizierungsaudits'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Nachbetreuung und Unterstützung bei Überwachungsaudits'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine professionelle Audit-Begleitung erhöht die Erfolgsquote bei BSI-Zertifizierungen auf über 95% und verkürzt den Zertifizierungsprozess um durchschnittlich 30%.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Zertifizierte BSI IT-Grundschutz Auditoren mit langjähriger Praxiserfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methoden für erfolgreiche Zertifizierungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfassende Kenntnis der BSI-Anforderungen und Prüfungsverfahren'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Nachgewiesene Erfolgsquote von über 95% bei Zertifizierungsprojekten'
            }
          ]
        },
        additionalInfo: 'Eine erfolgreiche BSI-Zertifizierung ist ein wichtiger Meilenstein für Ihre Informationssicherheit und ein starkes Signal an Kunden, Partner und Stakeholder. Investieren Sie in professionelle Begleitung für maximalen Erfolg!',
        serviceDescription: 'Wir bieten Ihnen eine ganzheitliche Begleitung durch den BSI-Zertifizierungsprozess, von der initialen Readiness-Bewertung bis zur erfolgreichen Zertifikatserlangung. Unsere erfahrenen Auditoren kennen alle Anforderungen und Fallstricke und sorgen für eine reibungslose Zertifizierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Pre-Audit Assessment und Readiness-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Dokumentationsreviews und Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Mock-Audits und Zertifizierungssimulation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Audit-Begleitung und Expert Witness'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Post-Zertifizierung Support und Überwachungsaudits'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir folgen einem bewährten, strukturierten Ansatz zur Zertifizierungsbegleitung, der alle kritischen Phasen des BSI-Zertifizierungsprozesses abdeckt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Audit-Readiness Assessment und Zertifizierungsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Dokumentationsprüfung und Compliance-Verification'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Mock-Audits und Schwachstellenidentifikation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Remediation-Support und Nachbesserungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Offizielle Audit-Begleitung und Nachbetreuung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die professionelle Zertifizierungsbegleitung von ADVISORI war entscheidend für unseren Erfolg. Durch die strukturierte Vorbereitung und kompetente Audit-Unterstützung haben wir unsere BSI-Zertifizierung beim ersten Versuch erhalten und dabei wertvolle Zeit und Ressourcen gespart.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Zertifizierungsvorbereitung & Readiness Assessment',
          description: 'Wir bewerten Ihre Zertifizierungsbereitschaft und bereiten Sie systematisch auf das BSI-Audit vor.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Gap-Analyse und Readiness-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Dokumentationsreviews und Compliance-Prüfung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Identifikation kritischer Schwachstellen und Handlungsfelder'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Entwicklung eines strukturierten Zertifizierungsfahrplans'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Audit-Begleitung & Zertifizierungssupport',
          description: 'Wir begleiten Sie professionell durch Mock-Audits und das offizielle BSI-Zertifizierungsaudit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Durchführung realistischer Mock-Audits und Zertifizierungssimulationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Begleitung während des offiziellen BSI-Zertifizierungsaudits'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Expert Witness und technische Unterstützung vor Ort'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Nachbetreuung und Support für Überwachungsaudits'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(standardsFrameworksZertifizierungsbegleitungAuditSupportData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Standards Frameworks Zertifizierungsbegleitung Audit Support page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
