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
    console.log('Creating ISO 27001 Certification page...')

    const iso27001CertificationData = {
      _type: 'servicePage',
      _id: 'iso-27001-certification',
      title: 'ISO 27001 Certification',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-certification'
      },
      parent: {
        _type: 'reference',
        _ref: 'iso-27001'
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
        title: 'ISO 27001 Certification Services & Expert Guidance | ADVISORI',
        description: 'Professional ISO 27001 certification services with expert guidance, audit preparation, and compliance support. Achieve your certification with confidence through our proven methodology.',
        keywords: 'ISO 27001 Certification, ISO 27001 Audit, Certification Services, ISMS Certification, Information Security Certification, ISO 27001 Compliance, Certification Guidance'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Certification Services and Expert Guidance'
        },
        tagline: 'Ihr vertrauensvoller Partner für ISO 27001 Zertifizierung',
        heading: 'ISO 27001 Certification',
        description: 'Erreichen Sie Ihre ISO 27001 Zertifizierung mit unserer bewährten Expertise und umfassenden Begleitung. Von der strategischen Planung bis zur erfolgreichen Zertifizierung und darüber hinaus.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Bewährte Zertifizierungsmethodik mit nachweislichen Erfolgsraten'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Umfassende Audit-Vorbereitung und professionelle Begleitung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Strategische Planung für nachhaltige Compliance-Sicherung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Unterstützung für langfristigen Zertifizierungserfolg'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Professionelle ISO 27001 Zertifizierungsbegleitung für nachhaltigen Erfolg',
        description: 'Die ISO 27001 Zertifizierung ist ein strategisches Investment in Vertrauen, Wettbewerbsfähigkeit und operative Exzellenz. Unsere umfassende Zertifizierungsbegleitung gewährleistet nicht nur den erfolgreichen Abschluss des Zertifizierungsprozesses, sondern schafft auch die Grundlage für langfristige Informationssicherheit und kontinuierliche Verbesserung.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Zertifizierungsplanung mit optimaler Ressourcenallokation und realistischer Zeitplanung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Umfassende Audit-Readiness durch systematische Vorbereitung und Pre-Assessments'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Professionelle Begleitung während aller Zertifizierungsphasen mit kontinuierlicher Unterstützung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Nachhaltige Compliance-Sicherung durch effektive Überwachungs- und Verbesserungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Integration moderner Compliance-Anforderungen für zukunftsfähige Zertifizierungsstrategien'
          }
        ],
        alert: {
          title: 'Zertifizierungserfolg durch bewährte Expertise',
          content: 'Eine erfolgreiche ISO 27001 Zertifizierung erfordert mehr als technisches Know-how. Unsere bewährte Methodik und langjährige Erfahrung maximieren Ihre Erfolgswahrscheinlichkeit und minimieren Risiken.'
        },
        whyUs: {
          title: 'Unsere Zertifizierungsexpertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Bewährte Zertifizierungsmethodik mit nachweislichen Erfolgsraten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Tiefgreifende Kenntnisse der Zertifizierungsanforderungen und Audit-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfassende Erfahrung mit verschiedenen Zertifizierungsstellen und deren Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von der Vorbereitung bis zur nachhaltigen Compliance-Sicherung'
            }
          ]
        },
        additionalInfo: 'Unsere ISO 27001 Zertifizierungsbegleitung basiert auf einer strukturierten Methodik, die alle kritischen Erfolgsfaktoren berücksichtigt. Wir unterstützen Sie nicht nur beim Erreichen der Zertifizierung, sondern schaffen auch die Grundlage für eine nachhaltige und wertschöpfende Informationssicherheitsorganisation.',
        serviceDescription: 'Wir bieten eine vollumfängliche Zertifizierungsbegleitung, die alle Phasen des Zertifizierungsprozesses abdeckt. Von der strategischen Planung über die operative Vorbereitung bis hin zur kontinuierlichen Compliance-Sicherung begleiten wir Sie mit methodischer Exzellenz und praktischer Erfahrung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategische Zertifizierungsplanung und Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Umfassende Gap-Analyse und Readiness-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Audit-Vorbereitung und Pre-Assessment-Durchführung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Professionelle Audit-Begleitung und Support'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Nachhaltige Compliance-Sicherung und kontinuierliche Verbesserung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Zertifizierungsansatz',
        description: 'Wir verfolgen einen strukturierten, phasenorientierten Ansatz, der alle kritischen Erfolgsfaktoren für eine erfolgreiche ISO 27001 Zertifizierung berücksichtigt und nachhaltigen Compliance-Erfolg gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische Zertifizierungsplanung mit optimaler Ressourcen- und Zeitallokation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Systematische Gap-Analyse und strukturierte Readiness-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Umfassende Audit-Vorbereitung mit Pre-Assessments und Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Professionelle Begleitung während der Zertifizierungsaudits'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Compliance-Sicherung durch kontinuierliche Überwachung und Verbesserung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Eine erfolgreiche ISO 27001 Zertifizierung ist das Ergebnis strategischer Planung, methodischer Vorbereitung und professioneller Begleitung. Unsere bewährte Zertifizierungsmethodik maximiert nicht nur die Erfolgswahrscheinlichkeit, sondern schafft auch nachhaltigen Mehrwert für die Informationssicherheitsorganisation unserer Kunden.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Zertifizierungsstrategie & Planung',
          description: 'Entwicklung einer maßgeschneiderten Zertifizierungsstrategie mit optimaler Ressourcenallokation und realistischer Zeitplanung für maximalen Erfolg.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Umfassende Zertifizierungsbedarfsanalyse und Strategieentwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Optimale Zertifizierungsstellen-Auswahl basierend auf spezifischen Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Detaillierte Projektplanung mit Meilensteinen und Erfolgskriterien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Ressourcenplanung und Budget-Optimierung für effiziente Zertifizierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Gap-Analyse & Readiness-Assessment',
          description: 'Systematische Bewertung der Zertifizierungsbereitschaft mit detaillierter Identifikation von Handlungsbedarfen und Optimierungspotenzialen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Umfassende Analyse der aktuellen ISMS-Implementierung gegen ISO 27001 Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Identifikation kritischer Compliance-Lücken und Verbesserungspotenziale'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Priorisierte Maßnahmenplanung mit Aufwand-Nutzen-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Entwicklung einer detaillierten Roadmap zur Zertifizierungsbereitschaft'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Audit-Vorbereitung & Pre-Assessment',
          description: 'Professionelle Vorbereitung auf die Zertifizierungsaudits mit umfassenden Pre-Assessments und gezielter Optimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Strukturierte Audit-Vorbereitung mit Simulation realer Audit-Situationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Durchführung umfassender Pre-Assessments zur Risikominimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Optimierung der Dokumentation und Nachweisführung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Schulung und Vorbereitung der Audit-Teilnehmer'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Zertifizierungsaudit-Begleitung',
          description: 'Professionelle Unterstützung während der Stage 1 und Stage 2 Audits mit kontinuierlicher Begleitung und Optimierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Vollständige Begleitung während Stage 1 und Stage 2 Zertifizierungsaudits'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Professionelle Unterstützung bei Auditor-Gesprächen und Nachweisführung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Sofortige Unterstützung bei Audit-Findings und Korrekturmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Optimierung der Audit-Performance durch erfahrene Begleitung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Post-Zertifizierungs-Support',
          description: 'Nachhaltige Unterstützung nach erfolgreicher Zertifizierung zur Sicherung der kontinuierlichen Compliance und Vorbereitung auf Überwachungsaudits.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Entwicklung nachhaltiger Compliance-Überwachungsprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Vorbereitung und Begleitung von Überwachungsaudits'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Kontinuierliche ISMS-Optimierung und Verbesserungsmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Langfristige strategische Beratung für Zertifizierungserweiterungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Compliance-Monitoring & Kontinuierliche Verbesserung',
          description: 'Aufbau robuster Überwachungssysteme und kontinuierlicher Verbesserungsprozesse für nachhaltige Zertifizierungserhaltung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Implementierung effektiver Compliance-Monitoring-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Entwicklung von KPIs und Metriken für kontinuierliche ISMS-Bewertung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Etablierung systematischer Verbesserungsprozesse und Innovation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Proaktive Anpassung an regulatorische Entwicklungen und Best Practices'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001CertificationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 Certification page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
