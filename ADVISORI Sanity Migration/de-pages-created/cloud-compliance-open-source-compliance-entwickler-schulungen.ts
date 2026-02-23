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
    console.log('Creating Cloud Compliance Open Source Compliance Entwickler Schulungen page...')

    const cloudComplianceData = {
      _type: 'servicePage',
      _id: 'cloud-compliance-open-source-compliance-entwickler-schulungen',
      title: 'Cloud Compliance Open Source Compliance Entwickler Schulungen',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/software-compliance/cloud-compliance-open-source-compliance-entwickler-schulungen'
      },
      parent: {
        _type: 'reference',
        _ref: 'software-compliance'
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
        title: 'Cloud Compliance Open Source Compliance Entwickler Schulungen | ADVISORI',
        description: 'Spezialisierte Schulungen für Entwickler zu Cloud Compliance und Open Source Compliance. Stärken Sie Ihr Team mit fundiertem Wissen über regulatorische Anforderungen in der Softwareentwicklung.',
        keywords: 'Cloud Compliance, Open Source Compliance, Entwickler Schulungen, Software Compliance, Lizenzmanagement, Cloud Security, Regulatorische Anforderungen'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Cloud Compliance Open Source Compliance Entwickler Schulungen'
        },
        tagline: 'Expertenwissen für Entwickler im regulatorischen Umfeld',
        heading: 'Cloud Compliance & Open Source Compliance Entwickler Schulungen',
        description: 'Befähigen Sie Ihr Entwicklerteam mit fundiertem Wissen über Cloud Compliance und Open Source Compliance. Unsere praxisorientierten Schulungen vermitteln die notwendigen Kompetenzen für regulatorisch konforme Softwareentwicklung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Reduzierung von Compliance-Risiken in der Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Beschleunigte Entwicklungszyklen durch präventive Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Verbessertes Risikobewusstsein im Entwicklerteam'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Praktische Anwendung regulatorischer Frameworks'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Cloud Compliance & Open Source Compliance Entwickler Schulungen',
        description: 'In der modernen Softwareentwicklung sind Cloud-Technologien und Open Source-Komponenten unverzichtbar geworden. Gleichzeitig steigen die regulatorischen Anforderungen kontinuierlich. Unsere spezialisierten Schulungen befähigen Entwickler, diese Herausforderungen erfolgreich zu meistern und compliance-konforme Software zu entwickeln.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Fundierte Schulungen zu Cloud Security und Compliance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Praxisnahe Vermittlung von Open Source Lizenzmanagement'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integration von Compliance-Prozessen in DevOps und CI/CD'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Hands-on Training mit realen Entwicklungsszenarien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Weiterbildung und Updates zu neuen Regulierungen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Compliance-bewusste Entwicklung von Anfang an spart nicht nur Zeit und Kosten, sondern reduziert auch erheblich die Risiken von nachträglichen Anpassungen und regulatorischen Problemen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Tiefgreifende Expertise in Cloud- und Open Source-Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Praxisorientierte Schulungskonzepte mit direktem Anwendungsbezug'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Erfahrene Trainer mit Entwicklungshintergrund und Compliance-Expertise'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Maßgeschneiderte Inhalte für verschiedene Entwicklungsumgebungen'
            }
          ]
        },
        additionalInfo: 'Die Komplexität von Cloud- und Open Source-Compliance erfordert spezialisiertes Wissen, das über reine technische Kenntnisse hinausgeht. Unsere Schulungen vermitteln das notwendige regulatorische Verständnis in einem entwicklerfreundlichen Format.',
        serviceDescription: 'Wir bieten umfassende Schulungsprogramme, die Entwickler für die Herausforderungen der Cloud- und Open Source-Compliance wappnen. Unser Ansatz kombiniert theoretisches Wissen mit praktischen Übungen und realen Anwendungsszenarien.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Grundlagen Cloud Security und Compliance-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Open Source Lizenzmanagement und Legal Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'DevSecOps und Compliance-Integration in CI/CD-Pipelines'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Praktische Übungen mit Compliance-Tools und -Methoden'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Zertifizierungsvorbereitung und kontinuierliche Weiterbildung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Schulungsansatz',
        description: 'Wir entwickeln mit Ihnen maßgeschneiderte Schulungsprogramme, die auf die spezifischen Bedürfnisse Ihres Entwicklerteams und Ihrer technischen Umgebung zugeschnitten sind.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Bedarfsanalyse und Identifikation spezifischer Compliance-Herausforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung maßgeschneiderter Schulungsinhalte und -methoden'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Durchführung interaktiver Schulungen mit praktischen Übungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration in bestehende Entwicklungsprozesse und -tools'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Betreuung und Updates zu neuen Compliance-Anforderungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Compliance-bewusste Entwicklung ist heute ein kritischer Erfolgsfaktor. Unsere Schulungen befähigen Entwicklerteams, von Anfang an compliance-konforme Software zu erstellen und dabei gleichzeitig innovativ und effizient zu bleiben.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Cloud Compliance Fundamentals für Entwickler',
          description: 'Umfassende Schulung zu den Grundlagen der Cloud Compliance, einschließlich Security-Frameworks, Datenhoheit und regulatorischer Anforderungen in Cloud-Umgebungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Verständnis von Cloud Security-Modellen und Shared Responsibility'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Implementierung von Data Governance in Cloud-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Compliance-konforme Cloud-Konfiguration und -Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Praktische Übungen mit Cloud Security-Tools'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Open Source Compliance & Lizenzmanagement',
          description: 'Spezialisierte Schulung zum professionellen Umgang mit Open Source-Komponenten, Lizenzmanagement und rechtlichen Aspekten in der Softwareentwicklung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Überblick über Open Source-Lizenzen und deren Implikationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Automatisierte Lizenzanalyse und Dependency-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Integration von Compliance-Checks in Build-Prozesse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Best Practices für Open Source Governance'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(cloudComplianceData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Cloud Compliance Open Source Compliance Entwickler Schulungen page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
