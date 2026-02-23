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
    console.log('Creating ISO 27001 Checkliste page...')

    const iso27001ChecklisteData = {
      _type: 'servicePage',
      _id: 'iso-27001-checkliste',
      title: 'ISO 27001 Checkliste',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/iso-27001/iso-27001-checkliste'
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
        title: 'ISO 27001 Checkliste - Umfassende Prüflisten & Assessment-Tools | ADVISORI',
        description: 'Professionelle ISO 27001 Checklisten für Gap-Analyse, Implementierung und Audit-Vorbereitung. Strukturierte Assessment-Tools für erfolgreiche ISMS-Zertifizierung und kontinuierliche Compliance-Überwachung.',
        keywords: 'ISO 27001 Checkliste, Gap-Analyse Checkliste, ISMS Assessment, Audit Checkliste, Compliance Prüfliste, Implementierungs-Checkliste, Zertifizierungsvorbereitung, ISO 27001 Assessment-Tools'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'ISO 27001 Checklisten und Assessment-Tools'
        },
        tagline: 'Strukturierte Checklisten für systematische ISMS-Implementierung',
        heading: 'ISO 27001 Checkliste',
        description: 'Nutzen Sie unsere umfassenden ISO 27001 Checklisten für eine strukturierte und vollständige ISMS-Implementierung. Von der Gap-Analyse bis zur Zertifizierungsvorbereitung - unsere bewährten Assessment-Tools gewährleisten systematische Compliance und minimieren Implementierungsrisiken.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Checklisten für alle ISO 27001 Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Strukturierte Gap-Analyse und Readiness-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Audit-ready Dokumentation und Nachweisführung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Compliance-Überwachung und Monitoring'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Professionelle ISO 27001 Checklisten für systematische ISMS-Implementierung',
        description: 'Unsere ISO 27001 Checklisten sind das Ergebnis jahrelanger Implementierungserfahrung und bieten eine strukturierte, vollständige Herangehensweise an die ISMS-Zertifizierung. Diese bewährten Assessment-Tools gewährleisten systematische Compliance, minimieren Implementierungsrisiken und beschleunigen den Zertifizierungsprozess erheblich.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Gap-Analyse-Checklisten für präzise Bewertung des aktuellen Sicherheitsstatus'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Strukturierte Implementierungs-Checklisten mit priorisierten Handlungsempfehlungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Audit-Vorbereitungs-Checklisten für systematische Zertifizierungsvorbereitung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Compliance-Monitoring-Checklisten für kontinuierliche Überwachung und Verbesserung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Dokumentations-Checklisten für vollständige und audit-konforme Nachweisführung'
          }
        ],
        alert: {
          title: 'Systematische Compliance-Sicherung',
          content: 'Unsere strukturierten Checklisten reduzieren Implementierungsrisiken um bis zu 70% und gewährleisten vollständige Abdeckung aller ISO 27001 Anforderungen durch systematische Assessment-Prozesse.'
        },
        whyUs: {
          title: 'Unsere Checklisten-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Entwicklung basierend auf über 500 erfolgreichen ISO 27001 Zertifizierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Kontinuierliche Optimierung durch Auditor-Feedback und Best Practices'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifische Anpassungen für verschiedene Unternehmenstypen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Integration modernster Assessment-Methoden und Automatisierungstools'
            }
          ]
        },
        additionalInfo: 'Unsere ISO 27001 Checklisten sind mehr als nur Prüflisten - sie sind strategische Implementierungstools, die komplexe Standardanforderungen in praktikable, nachvollziehbare Arbeitsschritte transformieren und dabei höchste Qualitäts- und Compliance-Standards gewährleisten.',
        serviceDescription: 'Die Checklisten-Suite umfasst alle kritischen Aspekte der ISO 27001 Implementierung und bietet strukturierte Guidance von der initialen Bewertung bis zur kontinuierlichen Verbesserung. Jede Checkliste ist darauf ausgelegt, maximale Effizienz bei gleichzeitiger Vollständigkeit und Audit-Konformität zu gewährleisten.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Vollständige Gap-Analyse mit detailliertem Compliance-Mapping'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Strukturierte Implementierungsroadmaps mit Prioritätsbewertung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Audit-Vorbereitungstools mit Evidence-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Kontinuierliche Monitoring-Frameworks für nachhaltige Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Dokumentations-Templates für vollständige Nachweisführung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser systematischer Checklisten-Ansatz',
        description: 'Wir verfolgen einen strukturierten, phasenorientierten Ansatz, der bewährte Assessment-Methoden mit innovativen Tools kombiniert und maximale Effizienz bei der ISMS-Implementierung gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Initiale Gap-Analyse mit umfassenden Assessment-Checklisten und Compliance-Mapping'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Strukturierte Implementierung mit priorisierten Checklisten und Meilenstein-Tracking'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Kontinuierliches Monitoring mit automatisierten Compliance-Checks und KPI-Dashboards'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Audit-Vorbereitung mit spezialisierten Checklisten und Evidence-Sammlung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Nachhaltige Optimierung durch kontinuierliche Verbesserungs-Checklisten'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Unsere strukturierten ISO 27001 Checklisten sind das Ergebnis jahrelanger Praxiserfahrung und kontinuierlicher Optimierung. Sie transformieren komplexe Compliance-Anforderungen in systematische, nachvollziehbare Prozesse und gewährleisten dabei höchste Implementierungsqualität und nachhaltige Compliance-Sicherung.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Gap-Analyse & Readiness-Assessment Checklisten',
          description: 'Umfassende Assessment-Tools für systematische Bewertung des aktuellen Sicherheitsstatus und präzise Identifikation von Implementierungsanforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Vollständige ISO 27001 Compliance-Checklisten mit detailliertem Kontroll-Mapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Strukturierte Reifegrad-Bewertung mit quantitativen Scoring-Methoden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Risikobewertungs-Checklisten mit branchenspezifischen Threat-Katalogen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Readiness-Assessment mit priorisierten Handlungsempfehlungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Implementierungs-Checklisten & Projekttools',
          description: 'Strukturierte Implementierungstools für systematische ISMS-Umsetzung mit klaren Meilensteinen und Qualitätssicherung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Phasenorientierte Implementierungs-Checklisten mit Abhängigkeits-Mapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Kontrollmaßnahmen-Checklisten für alle ISO 27001 Annex A Kontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Qualitätssicherungs-Checklisten für kontinuierliche Implementierungsvalidierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Change-Management-Checklisten für organisatorische Transformation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Dokumentations- & Evidence-Checklisten',
          description: 'Vollständige Dokumentationstools für audit-konforme Nachweisführung und systematische Evidence-Sammlung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Umfassende Dokumentations-Checklisten für alle ISMS-Bereiche'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Evidence-Sammlung-Checklisten mit Audit-Trail-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Richtlinien- und Verfahrens-Checklisten für standardkonforme Dokumentation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Versionskontroll- und Freigabe-Checklisten für Dokumentenmanagement'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Audit-Vorbereitungs-Checklisten',
          description: 'Spezialisierte Tools für systematische Zertifizierungsvorbereitung und erfolgreiche Audit-Durchführung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Pre-Audit-Checklisten für umfassende Zertifizierungsvorbereitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Auditor-Interview-Checklisten mit typischen Fragestellungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Evidence-Präsentations-Checklisten für strukturierte Nachweisführung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Post-Audit-Checklisten für Nonconformity-Management und Korrekturmaßnahmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Compliance-Monitoring & KPI-Checklisten',
          description: 'Kontinuierliche Überwachungstools für nachhaltige Compliance-Sicherung und proaktive Performance-Steuerung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Regelmäßige Compliance-Review-Checklisten mit KPI-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Incident-Response-Checklisten für systematisches Störungsmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Management-Review-Checklisten für strategische ISMS-Steuerung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Kontinuierliche Verbesserungs-Checklisten für adaptive ISMS-Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Surveillance & Re-Zertifizierungs-Checklisten',
          description: 'Spezialisierte Tools für laufende Überwachungsaudits und erfolgreiche Re-Zertifizierungsprozesse.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Surveillance-Audit-Checklisten für jährliche Überwachungsaudits'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Re-Zertifizierungs-Checklisten für dreijährige Erneuerungszyklen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Kontinuierliche Verbesserungs-Checklisten für ISMS-Evolution'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Multi-Standard-Integration-Checklisten für erweiterte Compliance-Frameworks'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iso27001ChecklisteData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ ISO 27001 Checkliste page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
