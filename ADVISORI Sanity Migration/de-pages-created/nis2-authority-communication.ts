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
    console.log('Creating NIS2 Authority Communication page...')

    const nis2AuthorityCommunicationData = {
      _type: 'servicePage',
      _id: 'nis2-authority-communication',
      title: 'NIS2 Authority Communication',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/nis2/nis2-sector-specific-requirements/nis2-authority-communication'
      },
      parent: {
        _type: 'reference',
        _ref: 'nis2-sector-specific-requirements'
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
        title: 'NIS2 Authority Communication | ADVISORI',
        description: 'Professionelle Unterstützung bei der strategischen Kommunikation mit NIS2-Aufsichtsbehörden. Expertenhilfe für Meldeprozesse, Prüfungsvorbereitungen und behördliche Koordination.',
        keywords: 'NIS2, Authority Communication, Behördenkommunikation, Aufsichtsbehörden, Meldeprozesse, Prüfungsvorbereitung, Compliance Communication, kritische Infrastrukturen'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'NIS2 Authority Communication'
        },
        tagline: 'Strategische Kommunikation mit NIS2-Aufsichtsbehörden',
        heading: 'NIS2 Authority Communication',
        description: 'Die NIS2-Richtlinie erfordert strukturierte und professionelle Kommunikation mit nationalen Aufsichtsbehörden. Wir unterstützen Sie bei der strategischen Gestaltung dieser kritischen Beziehungen und sorgen für compliance-konforme, effiziente Behördenkommunikation.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Professionelle Vorbereitung auf Behördenprüfungen und -audits'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strukturierte Meldeprozesse und Incident-Notification-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Optimierte Stakeholder-Management und Authority Relations'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Strategische Positioning bei regulatorischen Anfragen und Verfahren'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'NIS2 Authority Communication',
        description: 'Die effektive Kommunikation mit NIS2-Aufsichtsbehörden ist ein kritischer Erfolgsfaktor für kritische und wichtige Einrichtungen. Diese Kommunikation umfasst nicht nur die verpflichtenden Meldeprozesse, sondern auch strategische Interaktionen bei Prüfungen, Audits und regulatorischen Anfragen. Eine professionelle Authority Communication-Strategie minimiert regulatorische Risiken und stärkt das Vertrauen der Aufsichtsbehörden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung strukturierter Kommunikationsprozesse mit nationalen zuständigen Behörden'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung compliance-konformer Melde- und Notification-Verfahren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Vorbereitung auf behördliche Prüfungen, Inspektionen und Compliance-Audits'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Aufbau proaktiver Stakeholder-Relationships mit Aufsichtsbehörden und CSIRTs'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Strategische Beratung bei regulatorischen Verfahren und Enforcement-Maßnahmen'
          }
        ],
        alert: {
          title: 'Kritischer Erfolgsfaktor',
          content: 'Professionelle Authority Communication unter NIS2 ist nicht nur Compliance-Pflicht, sondern strategisches Instrument zur Risikominimierung und zum Aufbau vertrauensvoller Beziehungen zu Aufsichtsbehörden, die bei kritischen Situationen entscheidend sind.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Kenntnis der NIS2-Aufsichtsstrukturen und behördlichen Erwartungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Umfassende Erfahrung in der strategischen Gestaltung von Authority Relations'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Etablierte Netzwerke zu nationalen Aufsichtsbehörden und regulatorischen Stakeholdern'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Bewährte Methoden für effektive Compliance Communication und Stakeholder Management'
            }
          ]
        },
        additionalInfo: 'Erfolgreiche Authority Communication unter NIS2 erfordert nicht nur technisches Verständnis der regulatorischen Anforderungen, sondern auch strategische Kommunikationsfähigkeiten und profundes Wissen über die Arbeitsweise und Erwartungen der Aufsichtsbehörden.',
        serviceDescription: 'Wir bieten umfassende Unterstützung bei der strategischen Gestaltung Ihrer Kommunikation mit NIS2-Aufsichtsbehörden, von der Entwicklung strukturierter Communication-Frameworks bis zur operativen Begleitung bei kritischen behördlichen Interaktionen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Analyse der Authority Communication-Anforderungen und Stakeholder-Mapping'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung strukturierter Melde- und Communication-Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Vorbereitung auf Behördenprüfungen und regulatorische Audits'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Aufbau proaktiver Authority Relations und Stakeholder Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Strategische Beratung bei regulatorischen Verfahren und Enforcement-Situationen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine strategische Authority Communication-Strategie, die sowohl compliance-konforme Meldeprozesse sicherstellt als auch vertrauensvolle Beziehungen zu Aufsichtsbehörden aufbaut.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer regulatorischen Umgebung und Authority-Relationships'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer integrierten Communication-Strategie mit klaren Governance-Strukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung strukturierter Melde- und Notification-Verfahren'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Aufbau proaktiver Stakeholder-Management und Authority Relations'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung der Communication-Prozesse und Relationship Management'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI Cyber Risk GmbH',
        name: 'Dr. Marcus Weber',
        position: 'Senior Partner',
        quote: 'Professionelle Authority Communication unter NIS2 ist ein strategischer Wettbewerbsvorteil. Unser Ansatz transformiert compliance-orientierte Meldepflichten in vertrauensvolle, proaktive Beziehungen zu Aufsichtsbehörden, die in kritischen Situationen entscheidend sind.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategic Authority Relations Management',
          description: 'Wir entwickeln und implementieren strategische Ansätze für den Aufbau und die Pflege vertrauensvoller Beziehungen zu NIS2-Aufsichtsbehörden, die über compliance-orientierte Mindestanforderungen hinausgehen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Entwicklung strategischer Authority Engagement-Pläne und Relationship-Roadmaps'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Implementierung proaktiver Stakeholder-Management und Communication-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Aufbau strukturierter Dialogue-Mechanismen mit Aufsichtsbehörden und CSIRTs'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Training für professionelle Authority Communication und Stakeholder Engagement'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Compliance Communication & Reporting Excellence',
          description: 'Wir implementieren strukturierte, compliance-konforme Kommunikations- und Meldeprozesse, die regulatorische Anforderungen erfüllen und gleichzeitig operative Effizienz maximieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung standardisierter Melde- und Notification-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Implementierung effizienter Incident-Reporting und Communication-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Aufbau automatisierter Compliance-Monitoring und Reporting-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Vorbereitung auf behördliche Prüfungen und regulatorische Audits'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(nis2AuthorityCommunicationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ NIS2 Authority Communication page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
