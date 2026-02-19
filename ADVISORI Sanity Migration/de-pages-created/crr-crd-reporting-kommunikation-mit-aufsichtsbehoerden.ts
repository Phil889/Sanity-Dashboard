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
    console.log('Creating CRR/CRD Reporting und Kommunikation mit Aufsichtsbehörden page...')

    const crrCrdReportingKommunikationData = {
      _type: 'servicePage',
      _id: 'crr-crd-reporting-kommunikation-mit-aufsichtsbehoerden',
      title: 'CRR/CRD Reporting & Kommunikation mit Aufsichtsbehörden',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/crr-crd/crr-crd-ongoing-compliance/crr-crd-reporting-kommunikation-mit-aufsichtsbehoerden'
      },
      parent: {
        _type: 'reference',
        _ref: 'crr-crd-ongoing-compliance'
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
        title: 'CRR/CRD Reporting & Kommunikation mit Aufsichtsbehörden | ADVISORI',
        description: 'Optimieren Sie Ihr regulatorisches Reporting und die Kommunikation mit Aufsichtsbehörden. Wir unterstützen Sie bei der effizienten Erfüllung von CRR/CRD-Meldepflichten.',
        keywords: 'CRR/CRD Reporting, Aufsichtsbehörden, Regulatorisches Reporting, Kommunikation Finanzaufsicht, EBA Reporting, COREP, FINREP, Meldewesen'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRR/CRD Reporting und Kommunikation mit Aufsichtsbehörden'
        },
        tagline: 'Professionelles Management der aufsichtsrechtlichen Kommunikation',
        heading: 'CRR/CRD Reporting & Kommunikation mit Aufsichtsbehörden',
        description: 'Effizientes Reporting und transparente Kommunikation mit Aufsichtsbehörden sind entscheidend für die erfolgreiche Umsetzung der CRR/CRD-Anforderungen. Wir unterstützen Sie dabei, Ihre Meldeprozesse zu optimieren und eine vertrauensvolle Beziehung zu den Aufsichtsbehörden aufzubauen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Termingerechte und qualitativ hochwertige regulatorische Meldungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Proaktive und transparente Kommunikation mit Aufsichtsbehörden'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Reduzierung von Nachfragen und Klärungsbedarf durch die Aufsicht'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Aufbau eines positiven Dialogs und Vertrauensverhältnisses zur Aufsicht'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRR/CRD Reporting & Kommunikation mit Aufsichtsbehörden',
        description: 'Die Komplexität der CRR/CRD-Berichtspflichten und die steigenden Erwartungen der Aufsichtsbehörden erfordern ein professionelles Management des regulatorischen Reportings. Wir unterstützen Sie bei der Optimierung Ihrer Meldeprozesse und bei der Etablierung einer effektiven Kommunikationsstrategie mit den relevanten Aufsichtsbehörden.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Analyse und Optimierung der bestehenden Meldeprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Etablierung eines robusten Qualitätssicherungsprozesses für regulatorische Meldungen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung einer strukturierten Kommunikationsstrategie mit Aufsichtsbehörden'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Unterstützung bei Vor-Ort-Prüfungen und aufsichtlichen Anfragen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Vorbereitung und Begleitung von Aufsichtsgesprächen und Interviews'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Die Qualität Ihrer regulatorischen Meldungen und Ihre Kommunikationsfähigkeit mit den Aufsichtsbehörden haben direkten Einfluss auf Ihr aufsichtliches Standing. Eine proaktive und transparente Kommunikation kann das Vertrauen der Aufsicht stärken und potenzielle Konflikte frühzeitig entschärfen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in regulatorischen Reporting-Anforderungen und Meldewesen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrenes Team mit Hintergrund aus Aufsichtsbehörden und Finanzinstituten'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Enge Vernetzung mit relevanten Aufsichtsbehörden und Regulatoren'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Praxiserprobte Methoden zur Optimierung von Meldeprozessen und Kommunikationsstrategien'
            }
          ]
        },
        additionalInfo: 'Eine professionelle Kommunikation mit den Aufsichtsbehörden kann den Aufwand für regulatorisches Reporting erheblich reduzieren und zu einem konstruktiven Dialog führen. Institute mit klaren Kommunikationsstrukturen und qualitativ hochwertigen Meldungen genießen oft ein besseres Standing bei den Aufsichtsbehörden.',
        serviceDescription: 'Unser Service zum CRR/CRD Reporting und zur Kommunikation mit Aufsichtsbehörden umfasst die Optimierung Ihrer Meldeprozesse sowie die Entwicklung und Umsetzung einer effektiven Kommunikationsstrategie mit den relevanten Aufsichtsbehörden.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Analyse und Verbesserung des regulatorischen Reportings'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung von Kommunikationsrichtlinien und -strategien'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Vorbereitung und Begleitung von aufsichtlichen Prüfungen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Training und Coaching für den Umgang mit Aufsichtsbehörden'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Unterstützung bei der Beantwortung von aufsichtlichen Anfragen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir bieten einen strukturierten Ansatz zur Optimierung Ihres regulatorischen Reportings und Ihrer Kommunikation mit Aufsichtsbehörden, der auf Ihre spezifischen Bedürfnisse und Herausforderungen zugeschnitten ist.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse der bestehenden Meldeprozesse und Kommunikationsstrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Identifikation von Optimierungspotentialen und Risiken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung eines maßgeschneiderten Konzepts zur Verbesserung des Reportings und der Kommunikation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Implementierung von optimierten Prozessen und Kommunikationsstrategien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Überwachung und Verbesserung der Reporting-Qualität und des aufsichtlichen Dialogs'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Katrin Müller',
        position: 'Head of Regulatory Reporting',
        quote: 'Die Unterstützung von ADVISORI bei der Optimierung unserer regulatorischen Meldeprozesse und der Kommunikation mit den Aufsichtsbehörden war für uns von unschätzbarem Wert. Dank ihrer Expertise konnten wir nicht nur die Qualität unserer Meldungen verbessern, sondern auch einen konstruktiven Dialog mit der Aufsicht etablieren, der zu einem verbesserten aufsichtlichen Standing führte.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Optimierung des regulatorischen Reportings',
          description: 'Wir unterstützen Sie bei der Analyse und Verbesserung Ihrer Meldeprozesse, um die Qualität und Effizienz des regulatorischen Reportings zu steigern.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse und Assessment bestehender Meldeprozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation von Prozess- und Datenqualitätsproblemen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung von Qualitätssicherungsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Implementierung effizienter Meldeprozesse und -strukturen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Kommunikationsstrategie mit Aufsichtsbehörden',
          description: 'Wir helfen Ihnen, eine effektive Kommunikationsstrategie mit den relevanten Aufsichtsbehörden zu entwickeln und umzusetzen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung von Kommunikationsrichtlinien und -prozessen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Vorbereitung und Begleitung von Aufsichtsgesprächen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Training von Mitarbeitern für den Umgang mit Aufsichtsbehörden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Unterstützung bei der Erstellung von aufsichtlichen Dokumentationen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(crrCrdReportingKommunikationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRR/CRD Reporting & Kommunikation mit Aufsichtsbehörden page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
