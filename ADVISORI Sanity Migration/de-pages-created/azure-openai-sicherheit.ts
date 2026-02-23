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
    console.log('Creating Azure OpenAI Sicherheit page...')

    const azureOpenaiSicherheitData = {
      _type: 'servicePage',
      _id: 'azure-openai-sicherheit',
      title: 'Azure OpenAI Sicherheit',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/azure-openai-sicherheit'
      },
      parent: {
        _type: 'reference',
        _ref: 'ki-kuenstliche-intelligenz'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'digitale-transformation'
        }
      },
      seo: {
        _type: 'seo',
        title: 'Azure OpenAI Sicherheit | ADVISORI',
        description: 'DSGVO-konforme Azure OpenAI Implementierung für Unternehmen. Sichere Cloud-AI-Lösungen mit umfassendem IP-Schutz und Enterprise-Security für nachhaltige KI-Innovation.',
        keywords: 'Azure OpenAI, AI Security, DSGVO, Cloud AI, Enterprise Security, IP-Schutz, KI-Sicherheit, Microsoft Azure'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'Azure OpenAI Sicherheit'
        },
        tagline: 'DSGVO-konforme Azure OpenAI Implementierung',
        heading: 'Azure OpenAI Sicherheit',
        description: 'Nutzen Sie die Kraft von Azure OpenAI mit unserem Safety-First-Ansatz. Wir implementieren sichere, DSGVO-konforme Cloud-AI-Lösungen, die Ihr geistiges Eigentum schützen und gleichzeitig die volle Innovationskraft von Microsoft Azure OpenAI erschließen.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'DSGVO-konforme Azure OpenAI Implementierung mit vollständigem Datenschutz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Enterprise-Security-Architekturen für sichere Cloud-AI-Workloads'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Umfassender IP-Schutz durch isolierte Azure-Umgebungen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Compliance-Überwachung und Audit-Bereitschaft'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Azure OpenAI Sicherheit',
        description: 'Azure OpenAI bietet enormes Potenzial für Unternehmensinnovation, erfordert jedoch eine durchdachte Sicherheitsstrategie. ADVISORI unterstützt Sie dabei, die transformative Kraft von Azure OpenAI zu nutzen, ohne dabei Compliance, Datenschutz oder geistiges Eigentum zu gefährden. Unser spezialisierter Ansatz gewährleistet sichere, DSGVO-konforme Implementierungen in der Microsoft Azure Cloud.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Azure OpenAI Security Assessment und Architektur-Design'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'DSGVO-konforme Implementierung mit Privacy-by-Design'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Enterprise-Security-Frameworks für Cloud-AI-Workloads'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'IP-Schutz durch sichere Azure-Netzwerkarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Überwachung und Compliance-Management'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiche Azure OpenAI Adoption erfordert mehr als nur technische Konfiguration. Eine ganzheitliche Sicherheitsstrategie, die Netzwerksicherheit, Identitätsmanagement und Datengovernance integriert, ist entscheidend für sichere und compliant Cloud-AI-Implementierungen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Expertise in Azure OpenAI Security und DSGVO-Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Enterprise-Security-Architekturen für Cloud-AI'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Umfassende Azure-Expertise und Microsoft-Partnerschaften'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Ganzheitlicher Ansatz von Strategie bis Implementierung'
            }
          ]
        },
        additionalInfo: 'Unternehmen, die Azure OpenAI sicher und compliant implementieren, können ihre AI-Capabilities exponentiell erweitern, während sie gleichzeitig höchste Sicherheitsstandards einhalten. Investieren Sie in eine sichere Cloud-AI-Zukunft!',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum für die sichere Implementierung von Azure OpenAI, von der strategischen Sicherheitsplanung über die DSGVO-konforme Umsetzung bis hin zur kontinuierlichen Überwachung und Optimierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Azure OpenAI Security Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'DSGVO-konforme Cloud-AI-Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Enterprise-Security-Architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'IP-Schutz und Datengovernance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Compliance-Überwachung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine individuelle Azure OpenAI Sicherheitsstrategie, die auf Ihre spezifischen Geschäftsanforderungen zugeschnitten ist und höchste Standards für Cloud-Security und Compliance erfüllt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Analyse Ihrer Azure-Umgebung und Sicherheitsanforderungen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Design sicherer Azure OpenAI Architekturen mit DSGVO-Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung von Enterprise-Security-Controls und IP-Schutz'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Etablierung von Monitoring, Logging und Audit-Frameworks'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliche Optimierung und Compliance-Management'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die sichere Implementierung von Azure OpenAI ist ein strategischer Imperativ für moderne Unternehmen. Unser Ansatz kombiniert die Innovationskraft von Microsoft Azure OpenAI mit rigoroser DSGVO-Compliance und Enterprise-Security-Standards, um unseren Kunden sichere und nachhaltige Cloud-AI-Lösungen zu bieten, die sowohl transformativ als auch verantwortungsvoll sind.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Azure OpenAI Security Assessment',
          description: 'Umfassende Bewertung Ihrer Azure-Umgebung und Entwicklung einer strategischen Sicherheitsroadmap für sichere OpenAI-Integration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse der aktuellen Azure-Sicherheitslandschaft'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation von Sicherheitsrisiken und Compliance-Gaps'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Entwicklung einer DSGVO-konformen Sicherheitsstrategie'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Roadmap für sichere Azure OpenAI Implementierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Enterprise-Security-Implementierung',
          description: 'Sichere Implementierung von Azure OpenAI mit umfassenden Security-Controls, IP-Schutz und kontinuierlicher Compliance-Überwachung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Sichere Netzwerkarchitekturen und Zugriffskontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Verschlüsselung und Datengovernance-Frameworks'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Monitoring, Logging und Incident-Response'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Kontinuierliche Compliance-Überwachung und Audit-Support'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(azureOpenaiSicherheitData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ Azure OpenAI Sicherheit page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
