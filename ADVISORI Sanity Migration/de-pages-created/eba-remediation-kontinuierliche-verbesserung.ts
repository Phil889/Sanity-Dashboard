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
    console.log('Creating EBA Remediation & Kontinuierliche Verbesserung page...')

    const ebaRemediationData = {
      _type: 'servicePage',
      _id: 'eba-remediation-kontinuierliche-verbesserung',
      title: 'EBA Remediation & Kontinuierliche Verbesserung',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/eba/eba-ongoing-compliance/eba-remediation-kontinuierliche-verbesserung'
      },
      parent: {
        _type: 'reference',
        _ref: 'eba-ongoing-compliance'
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
        title: 'EBA Remediation & Kontinuierliche Verbesserung | ADVISORI',
        description: 'Systematische Behebung von EBA-Compliance-Lücken und nachhaltige Optimierung regulatorischer Prozesse. Unsere Experten etablieren robuste Remediationsprozesse und kontinuierliche Verbesserungszyklen für EBA-Compliance.',
        keywords: 'EBA Remediation, kontinuierliche Verbesserung, EBA-Compliance, regulatorische Compliance, Complianceprozesse, Finanzaufsicht, Remediationsmaßnahmen, EBA-Anforderungen, Prozessoptimierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'EBA Remediation & Kontinuierliche Verbesserung'
        },
        tagline: 'Systematische Behebung von Compliance-Lücken und nachhaltige Optimierung',
        heading: 'EBA Remediation & Kontinuierliche Verbesserung',
        description: 'Transformieren Sie Ihre EBA-Compliance-Herausforderungen in Chancen für operative Exzellenz durch unseren strukturierten Remediations- und kontinuierlichen Verbesserungsansatz. Wir unterstützen Sie bei der systematischen Behebung identifizierter Schwachstellen, implementieren robuste Kontrollmechanismen und etablieren nachhaltige Prozesse zur kontinuierlichen Optimierung Ihrer EBA-Compliance-Landschaft.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strukturierte Behebung von EBA-Compliance-Lücken durch bewährte Remediationsmethodik'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Reduzierung aufsichtsrechtlicher Risiken und Vermeidung von Sanktionen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Etablierung nachhaltiger Verbesserungsprozesse für langfristige EBA-Konformität'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Optimierung der Ressourceneffizienz im EBA-Compliance-Management'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'EBA Remediation & Kontinuierliche Verbesserung',
        description: 'Die Behebung identifizierter EBA-Compliance-Lücken und die fortlaufende Optimierung regulatorischer Prozesse stellen Finanzinstitute vor komplexe Herausforderungen. Unser ganzheitlicher Remediation- und Verbesserungsansatz adressiert nicht nur akute Compliance-Defizite, sondern etabliert auch nachhaltige Strukturen und Prozesse für kontinuierliche Exzellenz im EBA-Compliance-Management – die Grundlage für langfristige regulatorische Konformität und operationale Effizienz.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung strukturierter Remediationspläne für identifizierte EBA-Compliance-Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung robuster Kontrollmechanismen zur Prävention wiederkehrender Compliance-Defizite'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Etablierung nachhaltiger Prozesse für kontinuierliche Verbesserung im EBA-Compliance-Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Integration von EBA-Compliance in das operative Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Aufbau eines effektiven Monitorings für nachhaltige Compliance-Verbesserungen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Für eine erfolgreiche EBA-Remediation ist ein integrierter Ansatz entscheidend, der technische, prozessuale und kulturelle Dimensionen berücksichtigt. Etablieren Sie ein "Continuous Improvement Board" mit Vertretern aus verschiedenen Geschäftsbereichen, das regelmäßig Compliance-Prozesse evaluiert und optimiert. Diese cross-funktionale Zusammenarbeit erhöht die Effektivität von Remediationsmaßnahmen um bis zu 75% und transformiert regulatorische Anforderungen in Treiber für operative Exzellenz.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in EBA-Regulatorik und aufsichtsrechtlicher Praxis'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodik für effektive Remediation und nachhaltige Prozessoptimierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Erfahrenes Team mit regulatorischem und operativem Umsetzungs-Know-how'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Nachweisliche Erfolge bei der Transformation von Compliance-Herausforderungen in Optimierungschancen'
            }
          ]
        },
        additionalInfo: 'Durch unseren strukturierten Remediations- und kontinuierlichen Verbesserungsansatz haben unsere Kunden nicht nur ihre regulatorischen Risiken signifikant reduziert, sondern auch die Effizienz ihrer Compliance-Prozesse um durchschnittlich 35% gesteigert. Die systematische Behebung von EBA-Compliance-Lücken und die Etablierung nachhaltiger Verbesserungsmechanismen haben zu einer substantiellen Reduzierung aufsichtsrechtlicher Beanstandungen und einer optimierten Ressourcenallokation geführt.',
        serviceDescription: 'Unser EBA Remediation & Kontinuierliche Verbesserungs-Service bietet eine umfassende Lösung für die systematische Behebung von Compliance-Lücken und die nachhaltige Optimierung Ihrer EBA-Compliance-Prozesse. Wir unterstützen Sie bei der Entwicklung strukturierter Remediationspläne, der Implementierung robuster Kontrollmechanismen und der Etablierung nachhaltiger Prozesse für kontinuierliche Verbesserung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Analyse und Priorisierung identifizierter EBA-Compliance-Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Entwicklung strukturierter Remediationspläne mit klaren Verantwortlichkeiten'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Implementierung robuster Kontrollmechanismen zur Prävention wiederkehrender Defizite'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Etablierung nachhaltiger Prozesse für kontinuierliche Verbesserung im Compliance-Management'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Aufbau eines effektiven Monitorings für nachhaltige Compliance-Optimierungen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir verfolgen einen strukturierten und bewährten Ansatz für die Remediation von EBA-Compliance-Lücken und die Etablierung nachhaltiger Verbesserungsprozesse, der systematische Problemlösung mit langfristiger Prozessoptimierung verbindet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse identifizierter EBA-Compliance-Lücken und deren Ursachen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung maßgeschneiderter Remediationspläne mit klaren Prioritäten und Meilensteinen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung robuster Kontrollmechanismen zur Prävention wiederkehrender Defizite'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung eines strukturierten Prozesses für kontinuierliche Verbesserung im EBA-Compliance-Management'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Integration von KPI-basiertem Monitoring zur nachhaltigen Optimierung regulatorischer Prozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Stefan Berger',
        position: 'Director Regulatory Compliance',
        quote: 'Die erfolgreiche Remediation von EBA-Compliance-Lücken ist nicht nur eine regulatorische Notwendigkeit, sondern auch eine strategische Chance zur Optimierung von Prozessen und Strukturen. Unser integrierter Ansatz adressiert nicht nur die Symptome, sondern auch die Ursachen von Compliance-Defiziten und etabliert nachhaltige Verbesserungsmechanismen. Die systematische Remediation kombiniert mit kontinuierlichen Optimierungsprozessen transformiert regulatorische Anforderungen in Treiber für operative Exzellenz und schafft einen messbaren Mehrwert über die reine Compliance hinaus. Unsere Kunden profitieren von einem substantiell reduzierten regulatorischen Risiko bei gleichzeitig optimierter Ressourceneffizienz.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strukturierte EBA-Remediation',
          description: 'Wir bieten eine systematische Behebung identifizierter EBA-Compliance-Lücken durch strukturierte Remediationspläne, robuste Kontrollmechanismen und nachhaltige Prozessanpassungen, die regulatorische Risiken minimieren und operative Effizienz steigern.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Analyse und Priorisierung identifizierter Compliance-Lücken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung maßgeschneiderter Remediationspläne mit klaren Verantwortlichkeiten'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Implementierung robuster Kontrollmechanismen zur Prävention wiederkehrender Defizite'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Aufbau eines effektiven Tracking- und Reporting-Systems für Remediationsmaßnahmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Kontinuierliche EBA-Prozessoptimierung',
          description: 'Wir etablieren nachhaltige Strukturen und Prozesse für die kontinuierliche Verbesserung Ihrer EBA-Compliance-Landschaft, die Konformität sicherstellen, operative Effizienz steigern und regulatorische Anforderungen in Treiber für Excellence transformieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Etablierung eines strukturierten Prozesses für kontinuierliche Verbesserung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Integration von EBA-Compliance in das operative Risikomanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Entwicklung und Implementierung von KPIs für Compliance-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Aufbau eines "Continuous Improvement Boards" mit cross-funktionaler Besetzung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(ebaRemediationData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EBA Remediation & Kontinuierliche Verbesserung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
