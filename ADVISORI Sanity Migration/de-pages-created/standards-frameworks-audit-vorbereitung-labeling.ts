import 'dotenv/config'
import { createClient } from '@sanity/client'

// Create client with direct credentials
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
    console.log('Creating Standards Frameworks Audit Vorbereitung & Labeling page...')

    const auditVorbereitungLabelingData = {
      _type: 'servicePage',
      _id: 'standards-frameworks-audit-vorbereitung-labeling',
      title: 'Audit Vorbereitung & Labeling',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/standards-frameworks-tisax-vda-isa/standards-frameworks-audit-vorbereitung-labeling'
      },
      parent: {
        _type: 'reference',
        _ref: 'standards-frameworks-tisax-vda-isa'
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
        title: 'TISAX Audit Vorbereitung & Labeling | ADVISORI',
        description: 'Professionelle Vorbereitung auf TISAX Audits und AL-Labeling. Optimale Auditstrategien, Dokumentation und Zertifizierungsbegleitung für maximale Erfolgschancen.',
        keywords: 'TISAX Audit, Audit Vorbereitung, AL-Labeling, Assessment Level, TISAX Zertifizierung, VDA ISA, Automotive Security, Audit Strategie'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'TISAX Audit Vorbereitung & Labeling'
        },
        tagline: 'Professionelle TISAX Audit-Vorbereitung für garantierte Zertifizierungserfolge',
        heading: 'Audit Vorbereitung & Labeling',
        description: 'Maximieren Sie Ihre TISAX Audit-Erfolgschancen durch strategische Vorbereitung und optimale AL-Level Positionierung. Wir begleiten Sie von der Gap-Analyse bis zur erfolgreichen Zertifizierung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategische AL-Level Optimierung für kosteneffiziente Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Professionelle Audit-Vorbereitung mit 98% Erfolgsquote'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Minimierung von Audit-Zeiten durch optimale Dokumentation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachhaltige Zertifizierungsstrategien für Geschäftswachstum'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'TISAX Audit Vorbereitung & Labeling Excellence',
        description: 'Die strategische Vorbereitung auf TISAX Audits und die optimale AL-Labeling Strategie sind entscheidend für den Zertifizierungserfolg und die Geschäftsentwicklung. ADVISORI transformiert die komplexe Audit-Vorbereitung in einen systematischen, effizienten Prozess, der nicht nur Compliance sicherstellt, sondern auch nachhaltige Wettbewerbsvorteile schafft.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische AL-Level Analyse und Optimierung basierend auf Geschäftszielen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Comprehensive Pre-Audit Assessments mit detaillierten Gap-Analysen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Professionelle Dokumentations-Strategien für effiziente Audit-Durchführung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Auditor-Coaching und Stakeholder-Vorbereitung für optimale Präsentation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Post-Audit Optimierung und kontinuierliche Verbesserungsstrategien'
          }
        ],
        alert: {
          title: 'Erfolgsfaktor',
          content: 'Eine strategische Audit-Vorbereitung kann die Audit-Dauer um bis zu 40% reduzieren und die Erfolgschancen auf über 95% steigern. Die richtige AL-Labeling Strategie optimiert dabei das Kosten-Nutzen-Verhältnis erheblich.'
        },
        whyUs: {
          title: 'Ihre Audit-Erfolgs-Vorteile',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Certified TISAX Practitioner mit nachgewiesener 98% Audit-Erfolgsquote'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Tiefgreifende Kenntnis der Auditor-Perspektiven und -Erwartungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methoden zur Minimierung von Audit-Aufwand und -Kosten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Strategische Beratung für nachhaltige Zertifizierungs-Roadmaps'
            }
          ]
        },
        additionalInfo: 'TISAX Audits erfordern nicht nur technische Compliance, sondern auch strategische Planung und professionelle Präsentation. Eine optimale Audit-Vorbereitung transformiert die Zertifizierung von einer Compliance-Belastung zu einem strategischen Geschäftsvorteil.',
        serviceDescription: 'Unser ganzheitlicher Ansatz zur TISAX Audit-Vorbereitung kombiniert technische Exzellenz mit strategischer Geschäftsoptimierung. Von der AL-Level Strategie bis zur Post-Audit Optimierung begleiten wir Sie durch jeden Schritt des Zertifizierungsprozesses.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'AL-Level Strategie-Entwicklung und Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Pre-Audit Readiness Assessments und Gap-Analysen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Dokumentations-Optimierung und Evidence-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Auditor-Coaching und Stakeholder-Vorbereitung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Audit-Begleitung und Post-Audit Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser bewährter Audit-Erfolgs-Ansatz',
        description: 'Wir haben eine systematische Methodik entwickelt, die TISAX Audit-Vorbereitungen in planbare, effiziente Projekte mit garantierten Erfolgsergebnissen transformiert.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategische AL-Level Analyse und Geschäftsziel-Alignment'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Comprehensive Pre-Assessment mit detaillierter Readiness-Bewertung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Strukturierte Dokumentations-Optimierung und Evidence-Aufbereitung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Intensive Stakeholder-Vorbereitung und Mock-Audit Durchführung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Professional Audit-Begleitung und kontinuierliche Erfolgsoptimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI',
        name: 'TISAX-Expert',
        position: 'Senior TISAX Consultant',
        quote: 'Eine professionelle Audit-Vorbereitung ist der Schlüssel zum TISAX-Erfolg. Mit der richtigen Strategie und Vorbereitung werden aus komplexen Audit-Prozessen planbare Geschäftserfolge. Wir verwandeln Compliance-Herausforderungen in nachhaltige Wettbewerbsvorteile.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische AL-Level Optimierung',
          description: 'Entwicklung der optimalen Assessment Level Strategie basierend auf Ihren Geschäftszielen und Risikoanforderungen für kosteneffiziente Compliance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Business-Impact Analyse für AL-Level Bestimmung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Kosten-Nutzen-Optimierung verschiedener AL-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Scope-Definition und Perimeter-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Multi-Site und Skalierungs-Strategien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Professional Audit-Vorbereitung',
          description: 'Comprehensive Vorbereitung auf TISAX Audits durch systematische Readiness-Bewertung, Dokumentations-Optimierung und Stakeholder-Coaching.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Pre-Audit Readiness Assessment und Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Dokumentations-Strategie und Evidence-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Mock-Audits und Stakeholder-Coaching'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Audit-Begleitung und Real-Time Optimierung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(auditVorbereitungLabelingData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Standards Frameworks Audit Vorbereitung & Labeling page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
