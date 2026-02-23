import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const document = {
  _id: 'business-continuity-management-process',
  _type: 'servicePage',
  title: 'Business Continuity Management Process - Strukturierte BCM-Prozesse für Unternehmensresilienz',
  slug: {
    _type: 'slug',
    current: 'informationssicherheit/business-continuity-resilience/business-continuity-management-process'
  },
  
  // SEO and Meta
  seo: {
    _type: 'object',
    title: 'Business Continuity Management Process - BCM-Prozesse & Implementierung | ADVISORI',
    description: 'Professionelle Business Continuity Management Prozesse für nachhaltige Unternehmensresilienz. Strukturierte BCM-Implementierung, Prozessoptimierung und kontinuierliche Verbesserung.',
    keywords: 'Business Continuity Management Process, BCM Prozesse, Geschäftskontinuität, Unternehmensresilienz, BCM Implementierung, Kontinuitätsmanagement, Notfallplanung'
  },

  // Hero Section
  heroSection: {
    _type: 'object',
    headline: 'Business Continuity Management Process',
    subheadline: 'Strukturierte BCM-Prozesse für nachhaltige Unternehmensresilienz und operative Exzellenz',
    description: 'Entwickeln Sie robuste Business Continuity Management Prozesse, die Ihre Organisation vor Störungen schützen und schnelle Wiederherstellung gewährleisten. Unsere bewährten BCM-Prozesse kombinieren internationale Standards mit praktischer Umsetzbarkeit.',
    keyPoints: [
      'Strukturierte BCM-Prozessimplementierung',
      'ISO 22301 konforme Verfahren',
      'Kontinuierliche Prozessoptimierung',
      'Integrierte Risikomanagement-Ansätze'
    ],
    ctaText: 'BCM-Prozesse optimieren',
    ctaLink: '/kontakt',
    backgroundImage: {
      _type: 'image',
      asset: {
        _ref: 'image-placeholder-1200x600'
      }
    }
  },

  // Overview Section
  overview: {
    _type: 'object',
    title: 'Professionelle BCM-Prozesse für Unternehmensresilienz',
    description: 'Business Continuity Management Prozesse bilden das Rückgrat effektiver Unternehmensresilienz. Unsere strukturierten Ansätze gewährleisten, dass Ihre Organisation systematisch auf Störungen vorbereitet ist und kritische Geschäftsfunktionen auch in Krisenzeiten aufrechterhalten kann.',
    features: [
      {
        _type: 'object',
        _key: 'feature1',
        title: 'Prozessdesign & Implementierung',
        description: 'Entwicklung maßgeschneiderter BCM-Prozesse, die perfekt auf Ihre Organisationsstruktur und Geschäftsanforderungen abgestimmt sind.',
        icon: 'settings'
      },
      {
        _type: 'object',
        _key: 'feature2',
        title: 'Kontinuierliche Verbesserung',
        description: 'Etablierung von PDCA-Zyklen und kontinuierlichen Verbesserungsprozessen für nachhaltige BCM-Exzellenz.',
        icon: 'refresh'
      },
      {
        _type: 'object',
        _key: 'feature3',
        title: 'Integration & Harmonisierung',
        description: 'Nahtlose Integration von BCM-Prozessen in bestehende Managementsysteme und Geschäftsabläufe.',
        icon: 'link'
      },
      {
        _type: 'object',
        _key: 'feature4',
        title: 'Performance-Monitoring',
        description: 'Implementierung von KPIs und Monitoring-Systemen zur kontinuierlichen Überwachung der BCM-Prozesseffektivität.',
        icon: 'chart'
      }
    ]
  },

  // Approach Section
  approach: {
    _type: 'object',
    title: 'Unser systematischer Ansatz für BCM-Prozesse',
    description: 'Wir entwickeln und implementieren BCM-Prozesse nach bewährten Methoden und internationalen Standards, die nachhaltige Unternehmensresilienz gewährleisten.',
    steps: [
      {
        _type: 'object',
        _key: 'step1',
        title: 'Prozessanalyse & Design',
        description: 'Umfassende Analyse bestehender Prozesse und Entwicklung optimierter BCM-Verfahren',
        details: [
          'Current State Assessment',
          'Prozess-Gap-Analyse',
          'Stakeholder-Mapping',
          'Anforderungsanalyse'
        ]
      },
      {
        _type: 'object',
        _key: 'step2',
        title: 'Implementierung & Integration',
        description: 'Strukturierte Einführung der BCM-Prozesse mit Change Management und Schulungen',
        details: [
          'Phasenweise Implementierung',
          'Change Management',
          'Mitarbeiterschulungen',
          'Prozessdokumentation'
        ]
      },
      {
        _type: 'object',
        _key: 'step3',
        title: 'Testing & Validierung',
        description: 'Systematische Überprüfung und Validierung der implementierten BCM-Prozesse',
        details: [
          'Prozess-Testing',
          'Übungen und Simulationen',
          'Performance-Messung',
          'Compliance-Validierung'
        ]
      },
      {
        _type: 'object',
        _key: 'step4',
        title: 'Optimierung & Wartung',
        description: 'Kontinuierliche Verbesserung und Anpassung der BCM-Prozesse',
        details: [
          'Performance-Monitoring',
          'Kontinuierliche Verbesserung',
          'Prozess-Updates',
          'Stakeholder-Feedback'
        ]
      }
    ]
  },

  // Services Section
  services: [
    {
      _type: 'object',
      _key: 'service1',
      title: 'BCM-Prozessdesign',
      description: 'Entwicklung maßgeschneiderter Business Continuity Management Prozesse',
      features: [
        'Prozessarchitektur-Entwicklung',
        'Workflow-Design',
        'Rollen und Verantwortlichkeiten',
        'Eskalationsprozeduren'
      ]
    },
    {
      _type: 'object',
      _key: 'service2',
      title: 'Implementierungsbegleitung',
      description: 'Professionelle Unterstützung bei der BCM-Prozessimplementierung',
      features: [
        'Change Management',
        'Schulung und Training',
        'Pilotprojekte',
        'Go-Live-Unterstützung'
      ]
    },
    {
      _type: 'object',
      _key: 'service3',
      title: 'Prozessoptimierung',
      description: 'Kontinuierliche Verbesserung bestehender BCM-Prozesse',
      features: [
        'Performance-Analyse',
        'Effizienzsteigerung',
        'Automatisierung',
        'Best Practice Integration'
      ]
    },
    {
      _type: 'object',
      _key: 'service4',
      title: 'Compliance & Governance',
      description: 'Sicherstellung der Compliance und effektiven BCM-Governance',
      features: [
        'ISO 22301 Compliance',
        'Governance-Strukturen',
        'Audit-Unterstützung',
        'Dokumentationsmanagement'
      ]
    }
  ],

  // Testimonial Section
  testimonial: {
    _type: 'object',
    company: 'ADVISORI FTC GmbH',
    name: 'Asan Stefanski',
    position: 'Director',
    quote: 'Effektive BCM-Prozesse sind das Fundament organisationaler Resilienz. Durch strukturierte Prozessimplementierung und kontinuierliche Optimierung schaffen wir nachhaltige Wettbewerbsvorteile und gewährleisten, dass unsere Kunden auch in kritischen Situationen handlungsfähig bleiben.'
  },

  // FAQ Section will be added through separate batch files
  faq: [],

  // Navigation
  parent: {
    _type: 'reference',
    _ref: 'business-continuity-resilience'
  },
  
  references: {
    _type: 'object',
    topLevelParent: {
      _type: 'reference', 
      _ref: 'informationssicherheit'
    }
  }
}

const run = async () => {
  try {
    console.log('Creating Business Continuity Management Process page...')
    
    const result = await client.createOrReplace(document)
    
    console.log('✅ Successfully created Business Continuity Management Process page')
    console.log(`Document ID: ${result._id}`)
  } catch (error) {
    console.error('Error creating document:', error)
    throw error
  }
}

run()
