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
    console.log('Creating ISO Business Continuity Management page...')
    
    const document = {
      _id: 'iso-business-continuity-management',
      _type: 'servicePage',
      title: 'ISO Business Continuity Management - Standardkonforme BCM-Implementierung',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/business-continuity-resilience/iso-business-continuity-management'
      },
      seoTitle: 'ISO Business Continuity Management - Standardkonforme BCM-Implementierung | ADVISORI',
      seoDescription: 'Professionelle ISO-konforme Business Continuity Management Implementierung nach internationalen Standards. ISO 22301, ISO 27031 und weitere BCM-Standards für nachhaltige Geschäftskontinuität.',
      
      // Hero Section
      heroSection: {
        _type: 'object',
        headline: 'ISO Business Continuity Management',
        subheadline: 'Standardkonforme BCM-Implementierung nach internationalen Normen',
        description: 'Implementieren Sie Business Continuity Management nach bewährten ISO-Standards für maximale Compliance und operative Exzellenz. Unsere standardkonformen BCM-Lösungen schaffen nachhaltige Resilienz durch systematische Umsetzung internationaler Best Practices.',
        keyPoints: [
          'ISO 22301 BCM-Implementierung',
          'Standardkonforme Prozessgestaltung',
          'Internationale Best Practices',
          'Zertifizierungsunterstützung'
        ],
        ctaText: 'ISO-BCM implementieren',
        ctaLink: '/kontakt'
      },

      // Overview Section
      overview: {
        _type: 'object',
        title: 'ISO-konforme Business Continuity Management Implementierung',
        description: 'ISO Business Continuity Management Standards bieten bewährte Frameworks für systematische Resilienz-Entwicklung. Durch standardkonforme Implementierung schaffen Organisationen nachhaltige Wettbewerbsvorteile und erfüllen internationale Compliance-Anforderungen.',
        features: [
          {
            _type: 'object',
            _key: generateKey('feature', 1),
            title: 'ISO 22301 Implementierung',
            description: 'Vollständige Umsetzung des internationalen BCM-Standards mit systematischer Prozessgestaltung und kontinuierlicher Verbesserung.',
            icon: '📋'
          },
          {
            _type: 'object',
            _key: generateKey('feature', 2),
            title: 'Multi-Standard Integration',
            description: 'Integration verschiedener ISO-Standards wie ISO 27031, ISO 27001 und ISO 31000 für ganzheitliche Resilienz-Architekturen.',
            icon: '🔗'
          },
          {
            _type: 'object',
            _key: generateKey('feature', 3),
            title: 'Zertifizierungsbegleitung',
            description: 'Professionelle Unterstützung bei der Vorbereitung und Durchführung von ISO-Zertifizierungsaudits für nachweisbare Compliance.',
            icon: '✅'
          },
          {
            _type: 'object',
            _key: generateKey('feature', 4),
            title: 'Kontinuierliche Verbesserung',
            description: 'Etablierung von PDCA-Zyklen und kontinuierlichen Verbesserungsprozessen für nachhaltige Standard-Konformität.',
            icon: '🔄'
          }
        ]
      },

      // Approach Section
      approach: {
        _type: 'object',
        title: 'Unser Ansatz zur ISO-BCM Implementierung',
        description: 'Wir folgen einem strukturierten Ansatz zur ISO-konformen BCM-Implementierung, der internationale Best Practices mit organisationsspezifischen Anforderungen verbindet.',
        steps: [
          {
            _type: 'object',
            _key: generateKey('step', 1),
            title: 'Standard-Assessment',
            description: 'Umfassende Analyse der aktuellen BCM-Reife und Gap-Identifikation zu ISO-Anforderungen für zielgerichtete Implementierung.',
            details: [
              'ISO 22301 Compliance-Assessment',
              'Gap-Analyse zu Standard-Anforderungen',
              'Organisationskontext und Stakeholder-Analyse',
              'Risiko- und Impact-Bewertung nach ISO-Methodik'
            ]
          },
          {
            _type: 'object',
            _key: generateKey('step', 2),
            title: 'Standard-Design',
            description: 'Entwicklung einer standardkonformen BCM-Architektur mit allen erforderlichen Prozessen, Dokumentationen und Kontrollmechanismen.',
            details: [
              'BCM-Policy und Governance-Struktur',
              'Standardkonforme Prozessdokumentation',
              'Risikomanagement nach ISO 31000',
              'Business Impact Analysis Framework'
            ]
          },
          {
            _type: 'object',
            _key: generateKey('step', 3),
            title: 'Standard-Implementierung',
            description: 'Systematische Umsetzung der ISO-konformen BCM-Prozesse mit Schulung, Change Management und kontinuierlicher Überwachung.',
            details: [
              'Prozessimplementierung und Rollout',
              'Mitarbeiterschulung zu ISO-Anforderungen',
              'Management System Etablierung',
              'Monitoring und Measurement Setup'
            ]
          },
          {
            _type: 'object',
            _key: generateKey('step', 4),
            title: 'Zertifizierungsvorbereitung',
            description: 'Professionelle Vorbereitung auf ISO-Zertifizierungsaudits mit internen Audits, Management Reviews und Korrekturmaßnahmen.',
            details: [
              'Interne Audit-Programme',
              'Management Review Prozesse',
              'Korrektur- und Verbesserungsmaßnahmen',
              'Zertifizierungsaudit-Begleitung'
            ]
          }
        ]
      },

      // Services Section
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'ISO 22301 BCM System',
          description: 'Vollständige Implementierung des internationalen BCM-Standards für systematische Geschäftskontinuität.',
          features: [
            'BCM-Policy und Governance',
            'Risiko- und Impact-Assessment',
            'Business Continuity Strategien',
            'Incident Response Prozesse'
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'ISO 27031 IT-Resilienz',
          description: 'Spezialisierte IT-Kontinuitäts-Standards für technologische Resilienz und Cyber-Recovery.',
          features: [
            'IT Service Continuity',
            'Disaster Recovery Planning',
            'Cyber Resilience Framework',
            'Technology Risk Management'
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Multi-Standard Integration',
          description: 'Integration verschiedener ISO-Standards für ganzheitliche Compliance und Resilienz-Management.',
          features: [
            'ISO 27001 ISMS Integration',
            'ISO 31000 Risk Management',
            'ISO 9001 Quality Integration',
            'Integrated Management Systems'
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Zertifizierungsbegleitung',
          description: 'Professionelle Unterstützung bei der Vorbereitung und Durchführung von ISO-Zertifizierungen.',
          features: [
            'Pre-Assessment Audits',
            'Zertifizierungsvorbereitung',
            'Audit-Begleitung',
            'Kontinuierliche Compliance'
          ]
        }
      ],

      // Testimonial Section
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'ISO-konforme Business Continuity Management Systeme schaffen nicht nur Compliance, sondern nachhaltige Wettbewerbsvorteile durch systematische Resilienz. Internationale Standards bieten bewährte Frameworks für operative Exzellenz und strategische Kontinuität.'
      },

      // Parent reference
      parent: {
        _type: 'reference',
        _ref: 'business-continuity-resilience'
      },

      // References for breadcrumb
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'informationssicherheit'
        }
      },

      // FAQ will be added via separate scripts
      faq: []
    }

    const result = await client.create(document)
    console.log('✅ ISO Business Continuity Management page created successfully:', result._id)
  } catch (error) {
    console.error('Error creating document:', error)
    throw error
  }
}

run()
