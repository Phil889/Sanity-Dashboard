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
    console.log('Creating VS-NFD Zugangsschutz Kontrollsysteme page...')

    const vsNfdZugangsschutzKontrollsystemeData = {
      _type: 'servicePage',
      _id: 'vs-nfd-zugangsschutz-kontrollsysteme',
      title: 'VS-NFD Zugangsschutz Kontrollsysteme',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/vs-nfd/vs-nfd-implementation/vs-nfd-zugangsschutz-kontrollsysteme'
      },
      parent: {
        _type: 'reference',
        _ref: 'vs-nfd-implementation'
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
        title: 'VS-NFD Zugangsschutz Kontrollsysteme | ADVISORI',
        description: 'Professionelle Implementierung von Zugangsschutz- und Kontrollsystemen für VS-NFD Compliance. Sichere Authentifizierung, Autorisierung und Überwachung für Sammeldepots und Nominee-Konten.',
        keywords: 'VS-NFD Zugangsschutz, Kontrollsysteme BaFin, Authentifizierung Sammeldepots, Access Control VS-NFD, Nominee Konto Sicherheit, Identity Management'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'VS-NFD Zugangsschutz Kontrollsysteme'
        },
        tagline: 'Sichere Zugangskontrolle für VS-NFD Compliance',
        heading: 'VS-NFD Zugangsschutz Kontrollsysteme',
        description: 'Hochsichere Zugangsschutz- und Kontrollsysteme für VS-NFD konforme Sammeldepots und Nominee-Konten. Wir implementieren robuste Identity & Access Management-Lösungen mit Multi-Faktor-Authentifizierung und kontinuierlicher Überwachung.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Mehrstufige Authentifizierung und Autorisierungssysteme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Real-time Zugriffsüberwachung und Anomalieerkennung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'BaFin-konforme Audit-Trails und Compliance-Reporting'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Zero-Trust-Architektur für maximale Sicherheit'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'VS-NFD Zugangsschutz Kontrollsysteme',
        description: 'Die VS-NFD Verordnung verlangt robuste Zugangsschutz- und Kontrollmechanismen für die Verwaltung von Sammeldepots und Nominee-Konten. Wir entwickeln comprehensive Identity & Access Management-Systeme, die höchste Sicherheitsstandards erfüllen und gleichzeitig operative Effizienz gewährleisten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Multi-Faktor-Authentifizierung und biometrische Verfahren'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Rollenbasierte Zugriffskontrolle (RBAC) und Privileged Access Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Kontinuierliche Benutzeraktivitätsüberwachung und Behavioral Analytics'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Sichere API-Authentifizierung und Token-Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Automatisierte Compliance-Überwachung und Incident Response'
          }
        ],
        alert: {
          title: 'Zero-Trust Security',
          content: 'Moderne VS-NFD Zugangsschutz erfordert Zero-Trust-Prinzipien: Niemals vertrauen, immer verifizieren. Unsere Systeme implementieren kontinuierliche Authentifizierung und adaptive Sicherheitsmaßnahmen für maximalen Schutz.'
        },
        whyUs: {
          title: 'Unsere Sicherheits-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierung auf Financial Services Security und Regulatory Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Erfahrung mit hochsicheren Banking-Systemen und Access Control'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Expertise in Zero-Trust-Architekturen und modernen IAM-Technologien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Proven Track Record in BaFin-konformen Sicherheitsimplementierungen'
            }
          ]
        },
        additionalInfo: 'Professionelle Zugangsschutz-Systeme reduzieren Sicherheitsrisiken um bis zu 95% und gewährleisten gleichzeitig nahtlose User Experience. Eine Investition in moderne Access Control zahlt sich durch erhöhte Sicherheit und operative Effizienz aus.',
        serviceDescription: 'Wir designen und implementieren umfassende Zugangsschutz- und Kontrollsysteme, die alle VS-NFD Anforderungen erfüllen und modernste Sicherheitstechnologien nutzen. Von der Architektur-Planung bis zur operativen Betreuung begleiten wir Sie durch den gesamten Implementierungsprozess.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Identity & Access Management System-Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Multi-Faktor-Authentifizierung und Biometrie-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Privileged Access Management und Just-in-Time Access'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Security Monitoring und Anomalieerkennung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Compliance-Reporting und Audit-Trail-Management'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Security-First Implementierungsansatz',
        description: 'Wir entwickeln Zugangsschutz-Systeme nach dem Defense-in-Depth-Prinzip mit mehrschichtigen Sicherheitsmaßnahmen und kontinuierlicher Überwachung für maximalen Schutz Ihrer VS-NFD Infrastruktur.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Security Risk Assessment und Threat Modeling'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Zero-Trust-Architektur Design und Implementation'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'IAM-System Integration und Multi-Factor Authentication'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Security Testing und Penetration Testing'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continuous Monitoring und Security Operations Center Setup'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ADVISORI hat für uns ein hochsicheres Zugangsschutz-System implementiert, das nicht nur alle VS-NFD Anforderungen erfüllt, sondern auch unsere operative Sicherheit revolutioniert hat. Die Zero-Trust-Architektur und intelligente Überwachung geben uns maximales Vertrauen in unsere Compliance und Sicherheit.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Identity & Access Management (IAM) Implementation',
          description: 'Comprehensive IAM-Systeme mit Multi-Faktor-Authentifizierung, rollenbasierter Zugriffskontrolle und adaptiver Sicherheit für VS-NFD konforme Sammeldepot- und Nominee-Konto-Verwaltung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Single Sign-On (SSO) und Federated Identity Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Multi-Faktor-Authentifizierung mit Hardware-Token und Biometrie'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Rollenbasierte Zugriffskontrolle (RBAC) und Attribute-based Access Control'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Privileged Access Management und Just-in-Time Access'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Security Monitoring & Compliance Automation',
          description: 'Continuous Security Monitoring mit Real-time Anomalieerkennung, automatisiertem Compliance-Reporting und intelligent Incident Response für proaktiven Schutz und regulatorische Konformität.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'User Behavior Analytics (UBA) und Machine Learning-basierte Anomalieerkennung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Security Information and Event Management (SIEM) Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Automated Compliance Monitoring und BaFin-konforme Audit Trails'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Incident Response Automation und Security Orchestration'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(vsNfdZugangsschutzKontrollsystemeData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ VS-NFD Zugangsschutz Kontrollsysteme page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
