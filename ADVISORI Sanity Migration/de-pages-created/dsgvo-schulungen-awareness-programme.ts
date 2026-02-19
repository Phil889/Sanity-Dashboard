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
    console.log('Creating DSGVO Schulungen & Awareness Programme page...')

    const dsgvoTrainingData = {
      _type: 'servicePage',
      _id: 'dsgvo-schulungen-awareness-programme',
      title: 'DSGVO Schulungen & Awareness Programme',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/dsgvo/dsgvo-ongoing-compliance/dsgvo-schulungen-awareness-programme'
      },
      parent: {
        _type: 'reference',
        _ref: 'dsgvo-ongoing-compliance'
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
        title: 'DSGVO Schulungen & Awareness Programme | ADVISORI',
        description: 'Professionelle DSGVO-Schulungen und Awareness-Programme für nachhaltige Datenschutzkultur. Mitarbeiterschulungen, E-Learning und Compliance-Training.',
        keywords: 'DSGVO Schulungen, Datenschutz Training, GDPR Awareness, Mitarbeiterschulung, Compliance Training, Datenschutz E-Learning'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'DSGVO Schulungen & Awareness Programme'
        },
        tagline: 'Datenschutzkompetenz durch professionelle Schulungen und Awareness-Programme',
        heading: 'DSGVO Schulungen & Awareness Programme',
        description: 'Etablieren Sie eine starke Datenschutzkultur durch maßgeschneiderte DSGVO-Schulungen und umfassende Awareness-Programme. Wir qualifizieren Ihre Mitarbeiter zu kompetenten Datenschutz-Akteuren.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Aufbau einer starken organisationsweiten Datenschutzkultur'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Reduzierung menschlicher Fehler und Compliance-Verstöße'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Erhöhung der Mitarbeitermotivation und des Verantwortungsbewusstseins'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachweisbare Schulungseffekte für Aufsichtsbehörden'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'DSGVO Schulungen & Awareness Programme',
        description: 'Erfolgreiche DSGVO-Compliance beginnt mit gut geschulten und sensibilisierten Mitarbeitern. Wir entwickeln und implementieren umfassende Schulungs- und Awareness-Programme, die Ihre Teams zu kompetenten Datenschutz-Akteuren qualifizieren und eine nachhaltige Compliance-Kultur etablieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung zielgruppenspezifischer Schulungskonzepte'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung moderner E-Learning und Blended-Learning Formate'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Regelmäßige Awareness-Kampagnen und Auffrischungsschulungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Praktische Workshops und interaktive Trainingsformate'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Lernerfolgskontrolle und Zertifizierungsverfahren'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Regelmäßige und praxisnahe DSGVO-Schulungen reduzieren das Risiko menschlicher Fehler um bis zu 70% und demonstrieren Aufsichtsbehörden Ihr Engagement für aktive Compliance-Förderung.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in Erwachsenenbildung und Compliance-Training'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxisnahe und interaktive Schulungskonzepte'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Moderne E-Learning Plattformen und digitale Trainingstools'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Nachhaltige Lerneffekte durch kontinuierliche Reinforcement-Programme'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit systematischen DSGVO-Schulungsprogrammen weisen 60% weniger Datenschutzverstöße auf und erreichen höhere Mitarbeiterzufriedenheit durch klare Handlungssicherheit im Umgang mit personenbezogenen Daten.',
        serviceDescription: 'Wir bieten Ihnen umfassende Dienstleistungen für DSGVO-Schulungen und Awareness-Programme, von der Entwicklung individueller Trainingskonzepte bis zur langfristigen Begleitung Ihrer Datenschutzkultur-Transformation.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Entwicklung maßgeschneiderter Schulungskonzepte und -materialien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Durchführung von Präsenz- und Online-Schulungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierung kontinuierlicher Awareness-Kampagnen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Aufbau interner Trainer-Kompetenzen (Train-the-Trainer)'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Erfolgsmessung und kontinuierliche Programm-Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen ein systematisches und nachhaltiges Schulungs- und Awareness-System, das alle Mitarbeiter erreicht und langfristige Verhaltensänderungen bewirkt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der aktuellen Datenschutzkompetenz und Schulungsbedarfe'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung zielgruppenspezifischer Trainingskonzepte'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung moderner Schulungsformate und -technologien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Durchführung regelmäßiger Schulungen und Awareness-Aktivitäten'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Erfolgsmessung und Programm-Weiterentwicklung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die DSGVO-Schulungen und Awareness-Programme von ADVISORI haben unsere Datenschutzkultur transformiert. Unsere Mitarbeiter sind jetzt nicht nur compliance, sondern echte Datenschutz-Botschafter, die proaktiv zum Schutz personenbezogener Daten beitragen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategische Schulungskonzeption',
          description: 'Wir entwickeln umfassende und zielgruppengerechte DSGVO-Schulungsstrategien für nachhaltige Kompetenzentwicklung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse bestehender Datenschutzkompetenz und Identifikation von Schulungsbedarfen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung rollenbasierter Curricula für verschiedene Zielgruppen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Design interaktiver und praxisnaher Lernformate'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Integration in bestehende HR- und Weiterbildungsstrukturen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Kontinuierliche Awareness-Programme',
          description: 'Wir etablieren nachhaltige Awareness-Systeme für dauerhaft hohe Datenschutzsensibilität in Ihrer Organisation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Regelmäßige Awareness-Kampagnen mit kreativen Kommunikationsformaten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Microlearning und Just-in-Time Trainings für kontinuierliche Sensibilisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Gamification-Ansätze für erhöhte Mitarbeiterengagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Erfolgsmessung durch KPIs und regelmäßige Kompetenz-Assessments'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(dsgvoTrainingData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ DSGVO Schulungen & Awareness Programme page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
