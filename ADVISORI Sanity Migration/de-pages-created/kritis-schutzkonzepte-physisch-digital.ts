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
    console.log('Creating KRITIS Schutzkonzepte Physisch Digital page...')

    const kritisSchutzkonzepteData = {
      _type: 'servicePage',
      _id: 'kritis-schutzkonzepte-physisch-digital',
      title: 'KRITIS Schutzkonzepte Physisch Digital',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/kritis/kritis-implementation/kritis-schutzkonzepte-physisch-digital'
      },
      parent: {
        _type: 'reference',
        _ref: 'kritis-implementation'
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
        title: 'KRITIS Schutzkonzepte Physisch Digital | ADVISORI',
        description: 'Ganzheitliche physische und digitale Schutzkonzepte für kritische Infrastrukturen. Wir entwickeln integrierte Sicherheitsarchitekturen nach KRITIS-Anforderungen.',
        keywords: 'KRITIS Schutzkonzepte, physische Sicherheit, digitale Sicherheit, kritische Infrastrukturen, Sicherheitsarchitektur, BSI IT-Grundschutz'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KRITIS Schutzkonzepte Physisch Digital'
        },
        tagline: 'Integrierte physische und digitale Schutzkonzepte für kritische Infrastrukturen',
        heading: 'KRITIS Schutzkonzepte Physisch Digital',
        description: 'Wir entwickeln ganzheitliche Schutzkonzepte, die physische und digitale Sicherheitsmaßnahmen nahtlos integrieren und Ihre kritische Infrastruktur umfassend absichern.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Ganzheitliche Integration physischer und digitaler Sicherheitsmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'KRITIS-konforme Schutzkonzepte nach BSI-Standards'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Risikobasierte Sicherheitsarchitektur für kritische Infrastrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kontinuierliche Überwachung und adaptive Sicherheitsmaßnahmen'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KRITIS Schutzkonzepte Physisch Digital',
        description: 'Moderne kritische Infrastrukturen erfordern einen ganzheitlichen Sicherheitsansatz, der physische und digitale Bedrohungen gleichermaßen adressiert. Wir entwickeln integrierte Schutzkonzepte, die alle relevanten Sicherheitsaspekte abdecken und eine robuste Verteidigung gegen komplexe Angriffe bieten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung integrierter Sicherheitsarchitekturen für physische und digitale Assets'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Implementierung von Zugriffskontrollen und Perimeterschutz'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Aufbau von Monitoring- und Detektionssystemen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Entwicklung von Incident Response Procedures für physische und digitale Vorfälle'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Bewertung und Anpassung der Schutzmaßnahmen'
          }
        ],
        alert: {
          title: 'Sicherheitshinweis',
          content: 'Physische und digitale Sicherheit sind untrennbar miteinander verbunden. Ein ganzheitlicher Ansatz ist entscheidend für den effektiven Schutz kritischer Infrastrukturen gegen moderne Bedrohungen.'
        },
        whyUs: {
          title: 'Unsere Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Umfassende Expertise in physischer und digitaler Sicherheit'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Tiefgreifende Kenntnis der KRITIS-Anforderungen und BSI-Standards'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Bewährte Methodologien für integrierte Sicherheitskonzepte'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Langjährige Erfahrung mit kritischen Infrastrukturen'
            }
          ]
        },
        additionalInfo: 'Unsere integrierten Schutzkonzepte berücksichtigen die spezifischen Anforderungen Ihrer kritischen Infrastruktur und schaffen eine robuste Sicherheitsarchitektur, die sowohl aktuelle als auch zukünftige Bedrohungen effektiv adressiert.',
        serviceDescription: 'Wir bieten eine umfassende Beratung für die Entwicklung und Implementierung integrierter physischer und digitaler Schutzkonzepte, die alle relevanten KRITIS-Anforderungen erfüllen und darüber hinausgehen.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Risikoanalyse und Schutzbedarfsfeststellung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Sicherheitsarchitektur-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Physische Sicherheitsmaßnahmen-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Digitale Sicherheitssysteme-Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Kontinuierliche Überwachung und Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser integrierter Sicherheitsansatz',
        description: 'Wir verfolgen einen systematischen Ansatz zur Entwicklung ganzheitlicher Schutzkonzepte, der physische und digitale Sicherheitsaspekte von Anfang an integriert betrachtet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Bestandsaufnahme aller physischen und digitalen Assets'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Risikobasierte Bewertung und Priorisierung von Schutzmaßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Entwicklung integrierter Sicherheitsarchitekturen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Phasenweise Implementierung mit kontinuierlicher Validierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Etablierung kontinuierlicher Überwachungs- und Verbesserungsprozesse'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die Integration physischer und digitaler Schutzkonzepte durch ADVISORI hat unsere Sicherheitsarchitektur auf ein neues Level gehoben. Die ganzheitliche Betrachtung aller Sicherheitsaspekte bietet uns einen umfassenden Schutz gegen moderne Bedrohungen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Physische Sicherheitskonzepte',
          description: 'Entwicklung und Implementierung umfassender physischer Sicherheitsmaßnahmen zum Schutz kritischer Infrastrukturen vor physischen Bedrohungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Perimeterschutz und Zugriffskontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Überwachungs- und Detektionssysteme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Sicherheitsrichtlinien und Verfahren'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Notfall- und Evakuierungspläne'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Digitale Sicherheitsarchitekturen',
          description: 'Implementierung robuster digitaler Sicherheitsmaßnahmen zum Schutz vor Cyberbedrohungen und zur Gewährleistung der Systemintegrität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Netzwerksegmentierung und Firewalls'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Intrusion Detection und Prevention Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Verschlüsselungs- und Authentifizierungsmaßnahmen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Security Information und Event Management (SIEM)'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kritisSchutzkonzepteData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KRITIS Schutzkonzepte Physisch Digital page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
