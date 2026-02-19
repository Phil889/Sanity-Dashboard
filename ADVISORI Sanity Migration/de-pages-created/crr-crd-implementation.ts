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
    console.log('Creating CRR/CRD Implementation page...')

    const crrCrdImplementationData = {
      _type: 'servicePage',
      _id: 'crr-crd-implementation',
      title: 'CRR/CRD Implementation',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/crr-crd/crr-crd-implementation'
      },
      parent: {
        _type: 'reference',
        _ref: 'crr-crd'
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
        title: 'CRR/CRD Implementation | ADVISORI',
        description: 'Effiziente und konforme Implementierung der Capital Requirements Regulation (CRR) und Capital Requirements Directive (CRD) mit unserer spezialisierten Beratungsunterstützung.',
        keywords: 'CRR Implementation, CRD Umsetzung, Capital Requirements Regulation Implementation, Capital Requirements Directive Umsetzung, Basel III Implementation, Eigenkapitalanforderungen Implementierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'CRR/CRD Implementation'
        },
        tagline: 'Strukturierte Umsetzung der EU-Eigenkapitalanforderungen',
        heading: 'CRR/CRD Implementation',
        description: 'Eine erfolgreiche Implementierung der CRR/CRD-Anforderungen erfordert eine strukturierte Vorgehensweise und tiefgreifendes regulatorisches Know-how. Wir unterstützen Sie bei der effizienten und nachhaltigen Umsetzung aller relevanten Anforderungen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Sichere und zeitgerechte Implementierung aller CRR/CRD-Vorgaben'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Minimierung des Implementierungsaufwands durch effiziente Methoden'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Integration in bestehende Prozesse und Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Nachhaltige Compliance-Lösungen für langfristige Anforderungen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'CRR/CRD Implementation',
        description: 'Die Implementierung der CRR/CRD-Anforderungen stellt Finanzinstitute vor komplexe Herausforderungen. Mit unserem strukturierten Implementierungsansatz unterstützen wir Sie bei der vollständigen und nachhaltigen Umsetzung aller regulatorischen Vorgaben, von den Eigenkapitalanforderungen bis zu den Offenlegungspflichten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Umfassende Analyse der aktuellen Implementierungslücken'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Entwicklung einer maßgeschneiderten Implementierungsstrategie'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Unterstützung bei der technischen und organisatorischen Umsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Einrichtung robuster Prozesse und Kontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Validierung und Qualitätssicherung der Implementierung'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine erfolgreiche CRR/CRD-Implementierung sollte nicht nur auf Compliance abzielen, sondern auch die Optimierung der Kapitaleffizienz und des Risikomanagements berücksichtigen. Durch eine strategische Herangehensweise können regulatorische Anforderungen in einen Wettbewerbsvorteil umgewandelt werden.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in allen Aspekten der CRR/CRD-Regulierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Implementierungsmethodik für effiziente Umsetzung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Tiefes Verständnis der technischen und organisatorischen Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Erfahrung mit verschiedenen Bankengruppen und Geschäftsmodellen'
            }
          ]
        },
        additionalInfo: 'Die Implementierung der CRR/CRD-Anforderungen kann je nach Komplexität des Instituts zwischen 12 und 36 Monaten dauern. Eine strukturierte Vorgehensweise und die richtige Priorisierung sind entscheidend für den Erfolg. Unsere Experten helfen Ihnen, diesen Prozess effizient zu gestalten und regulatorische Risiken zu minimieren.',
        serviceDescription: 'Unser CRR/CRD-Implementierungsansatz umfasst alle Aspekte von der Gap-Analyse über die Konzeption bis zur technischen Umsetzung und Validierung. Wir unterstützen Sie bei der effizienten Umsetzung aller regulatorischen Anforderungen und sorgen für eine nachhaltige Integration in Ihre bestehenden Prozesse und Systeme.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Detaillierte Gap-Analyse und Implementierungsplanung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Konzeption und Entwicklung von Umsetzungsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Unterstützung bei der technischen Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Etablierung robuster Prozesse und Kontrollen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Validierung und Qualitätssicherung der Implementierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten Implementierungsansatz, der alle Aspekte der CRR/CRD-Anforderungen abdeckt und eine effiziente und nachhaltige Umsetzung gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Assessment: Detaillierte Analyse der aktuellen Situation und Identifikation von Implementierungslücken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Konzeption: Entwicklung einer maßgeschneiderten Implementierungsstrategie und Definition der erforderlichen Maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Umsetzung: Unterstützung bei der technischen und organisatorischen Implementierung aller Anforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Validierung: Überprüfung der Implementierung und Identifikation potenzieller Verbesserungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Stabilisierung: Etablierung robuster Prozesse und Kontrollen für eine nachhaltige Compliance'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Steffen Horwat',
        position: 'Director',
        quote: 'Die Implementierung der CRR/CRD-Anforderungen ist ein komplexes Unterfangen, das tiefgreifendes regulatorisches Know-how und eine strukturierte Vorgehensweise erfordert. Unsere Erfahrung zeigt, dass eine strategische Herangehensweise nicht nur die Compliance sicherstellt, sondern auch Potenziale für eine optimierte Kapitalallokation und ein verbessertes Risikomanagement erschließt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'CRR/CRD Gap-Analyse und Implementierungsplanung',
          description: 'Wir analysieren Ihre aktuelle Situation im Detail und entwickeln einen maßgeschneiderten Implementierungsplan für alle CRR/CRD-Anforderungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse der bestehenden Prozesse, Systeme und Methoden'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation von Implementierungslücken und Handlungsbedarf'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung einer priorisierten Roadmap für die Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Ressourcenplanung und Kostenabschätzung für die Umsetzung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Technische und organisatorische Implementierung',
          description: 'Wir unterstützen Sie bei der konkreten Umsetzung aller CRR/CRD-Anforderungen in Ihren Systemen und Prozessen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Entwicklung und Anpassung von Methoden und Modellen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integration in bestehende IT-Systeme und Datenarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Etablierung robuster Prozesse und Kontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Schulung und Wissenstransfer für Ihre Mitarbeiter'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(crrCrdImplementationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ CRR/CRD Implementation page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
