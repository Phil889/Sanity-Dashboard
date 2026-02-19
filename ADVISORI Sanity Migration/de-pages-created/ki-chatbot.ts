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
    console.log('Creating KI-Chatbot page...')

    const kiChatbotData = {
      _type: 'servicePage',
      _id: 'ki-chatbot',
      title: 'KI-Chatbot',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/ki-chatbot'
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
        title: 'KI-Chatbot | DSGVO-konforme Conversational AI | ADVISORI',
        description: 'Professionelle KI-Chatbot-Entwicklung mit DSGVO-Compliance. Intelligente Conversational AI-Lösungen für optimierte Kundenerfahrungen und automatisierte Kommunikation.',
        keywords: 'KI-Chatbot, Conversational AI, DSGVO-Chatbot, Natural Language Processing, Customer Experience, Automatisierte Kommunikation, AI-Assistant'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KI-Chatbot Conversational AI'
        },
        tagline: 'DSGVO-konforme KI-Chatbots für intelligente Kundenkommunikation',
        heading: 'KI-Chatbot',
        description: 'Revolutionieren Sie Ihre Kundenkommunikation mit intelligenten, DSGVO-konformen Chatbots. Unsere Conversational AI-Lösungen bieten natürliche Sprachverarbeitung, personalisierte Interaktionen und nahtlose Integration in Ihre bestehenden Systeme.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'DSGVO-konforme Chatbot-Entwicklung mit vollständigem Datenschutz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Natural Language Processing für natürliche Konversationen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Nahtlose Integration in bestehende CRM- und Support-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Mehrsprachige Unterstützung und kulturelle Anpassung'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KI-Chatbot',
        description: 'Moderne Kundenkommunikation erfordert intelligente, verfügbare und personalisierte Lösungen. ADVISORI entwickelt DSGVO-konforme KI-Chatbots, die nicht nur technisch fortschrittlich sind, sondern auch höchste Standards für Datenschutz und Benutzerfreundlichkeit erfüllen. Unsere Conversational AI-Lösungen transformieren die Art, wie Unternehmen mit ihren Kunden interagieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Strategische Chatbot-Konzeption und Use Case-Identifikation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'DSGVO-konforme Entwicklung mit Privacy-by-Design-Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Natural Language Processing und Machine Learning-Integration'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Nahtlose System-Integration und API-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kontinuierliche Optimierung und Performance-Monitoring'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Erfolgreiche Chatbot-Implementierung geht über reine Technologie hinaus. Eine durchdachte Conversational Design-Strategie, die Nutzerbedürfnisse, Datenschutz und Geschäftsziele harmonisch verbindet, ist der Schlüssel für nachhaltig erfolgreiche KI-Chatbots.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Expertise in DSGVO-konformer Chatbot-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Ganzheitlicher Ansatz von Strategie bis Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Mehrsprachige und kulturell angepasste Conversational AI'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Nahtlose Integration in bestehende Unternehmenslandschaften'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit intelligenten Chatbots können ihre Kundenzufriedenheit erheblich steigern und gleichzeitig operative Kosten reduzieren. Investieren Sie in eine zukunftssichere Kommunikationsstrategie!',
        serviceDescription: 'Wir bieten Ihnen ein umfassendes Leistungsspektrum für die Entwicklung und Implementierung intelligenter KI-Chatbots, von der strategischen Konzeption über die DSGVO-konforme Entwicklung bis hin zur kontinuierlichen Optimierung.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Chatbot-Strategie & Conversational Design'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'DSGVO-konforme Entwicklung & Implementierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Natural Language Processing & AI-Training'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'System-Integration & API-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Performance-Monitoring & Kontinuierliche Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir entwickeln mit Ihnen gemeinsam eine individuelle Chatbot-Strategie, die auf Ihre spezifischen Kommunikationsziele zugeschnitten ist und höchste Standards für Datenschutz und Benutzerfreundlichkeit erfüllt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Analyse Ihrer Kommunikationsprozesse und Chatbot-Potenziale'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung einer DSGVO-konformen Chatbot-Strategie'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung intelligenter Conversational AI-Systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Integration in bestehende Unternehmenslandschaften'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Kontinuierliches Training und Performance-Optimierung'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die Entwicklung intelligenter KI-Chatbots ist eine Kunst, die technische Exzellenz mit menschzentriertem Design verbindet. Unser Ansatz schafft Conversational AI-Lösungen, die nicht nur DSGVO-konform und sicher sind, sondern auch authentische, wertvolle Kundenerlebnisse schaffen und dabei die Effizienz der Kundenkommunikation revolutionieren.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Chatbot-Strategie & Conversational Design',
          description: 'Entwicklung einer umfassenden Chatbot-Strategie mit fokussiertem Conversational Design für optimale Nutzererfahrungen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Use Case-Identifikation und Potenzialanalyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Conversational Flow-Design und User Journey-Mapping'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Persona-Entwicklung und Tonalitäts-Definition'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'ROI-Bewertung und KPI-Definition'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'DSGVO-konforme Chatbot-Entwicklung',
          description: 'Professionelle Entwicklung intelligenter Chatbots mit vollständiger DSGVO-Compliance und Privacy-by-Design-Prinzipien.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Privacy-by-Design Chatbot-Architekturen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Sichere Datenverarbeitung und -speicherung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Einwilligungsmanagement und Transparenz-Features'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Audit-Trails und Compliance-Dokumentation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Natural Language Processing & AI-Training',
          description: 'Implementierung fortschrittlicher NLP-Technologien für natürliche und intelligente Konversationen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Intent Recognition und Entity Extraction'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Sentiment Analysis und Emotion Detection'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Machine Learning-Modell-Training und -Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Kontinuierliches Learning und Modell-Updates'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Mehrsprachige Chatbot-Lösungen',
          description: 'Entwicklung mehrsprachiger Chatbots mit kultureller Anpassung für globale Kundenkommunikation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Multi-Language Support und Spracherkennung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Kulturelle Anpassung und Lokalisierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Automatische Übersetzung und Sprachoptimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Regionale Compliance und Datenschutz-Anpassungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'System-Integration & API-Entwicklung',
          description: 'Nahtlose Integration von Chatbots in bestehende Unternehmenslandschaften und Entwicklung maßgeschneiderter APIs.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'CRM- und ERP-System-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Custom API-Entwicklung und Middleware-Lösungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Omnichannel-Integration (Web, Mobile, Social Media)'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Legacy-System-Anbindung und Datenmigrationsunterstützung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Performance-Monitoring & Kontinuierliche Optimierung',
          description: 'Umfassendes Monitoring und kontinuierliche Optimierung für maximale Chatbot-Performance und Nutzerzufriedenheit.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Real-time Performance-Monitoring und Analytics'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'User Experience-Analyse und Conversation-Insights'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'A/B-Testing und Optimierungsstrategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Kontinuierliche Modell-Verbesserung und Feature-Updates'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kiChatbotData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KI-Chatbot page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
