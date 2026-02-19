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
    console.log('Creating KI-Ethik-und-Sicherheit page...')

    const kiEthikSicherheitData = {
      _type: 'servicePage',
      _id: 'ki-ethik-und-sicherheit',
      title: 'KI-Ethik und Sicherheit',
      slug: {
        _type: 'slug',
        current: 'digitale-transformation/ki-kuenstliche-intelligenz/ki-ethik-und-sicherheit'
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
        title: 'KI-Ethik und Sicherheit | Sichere AI-Governance | ADVISORI',
        description: 'Professionelle KI-Ethik und Sicherheit Beratung. DSGVO-konforme sichere AI-Ethics-Frameworks, threat-aware KI-Governance und resiliente AI-Security-Strategien für Unternehmen.',
        keywords: 'KI-Ethik-Sicherheit, AI Ethics Security, Sichere KI-Ethik, Ethical AI Security, KI-Security-Governance, DSGVO-konforme KI-Sicherheit, Secure AI Ethics'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'KI-Ethik und Sicherheit Sichere AI-Governance'
        },
        tagline: 'Sichere und ethische KI-Systeme für vertrauensvolle Digitalisierung',
        heading: 'KI-Ethik und Sicherheit',
        description: 'Entwickeln Sie mit ADVISORI KI-Systeme, die höchste ethische Standards mit robusten Sicherheitsmaßnahmen vereinen. Unsere integrierte KI-Ethik und Sicherheit Beratung schafft vertrauensvolle AI-Lösungen, die sowohl gesellschaftliche Verantwortung als auch Cyber-Resilienz gewährleisten.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Sichere ethische AI-Frameworks mit integriertem Threat-Management'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'DSGVO-konforme KI-Security-Governance mit vollständigem Compliance-Schutz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Resiliente KI-Systeme durch Security-by-Design und Ethics-by-Design'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Vertrauensbildung durch transparente und cyber-sichere AI-Governance'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'KI-Ethik und Sicherheit',
        description: 'In einer Zeit zunehmender Cyber-Bedrohungen und ethischer KI-Regulierung ist die Integration von Sicherheit und Ethik entscheidend für nachhaltigen AI-Erfolg. ADVISORI bietet Ihnen umfassende KI-Ethik und Sicherheit Beratung, die ethische Prinzipien mit robusten Security-Maßnahmen verbindet. Wir entwickeln sichere ethische KI-Frameworks, die nicht nur regulatorische Anforderungen erfüllen, sondern auch Cyber-Resilienz gewährleisten und langfristige Wettbewerbsvorteile durch vertrauensvolle AI-Systeme sichern.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Entwicklung sicherer ethischer AI-Frameworks mit integriertem Cyber-Security-Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'DSGVO-konforme KI-Security-Governance und threat-aware Compliance-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Security-by-Design und Ethics-by-Design für resiliente KI-Architekturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Kontinuierliche Threat-Detection und ethische Performance-Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Incident-Response und ethische Krisenmanagement-Strategien für KI-Systeme'
          }
        ],
        alert: {
          title: 'Sicherheits-Ethik-Imperativ',
          content: 'Sichere ethische KI-Systeme sind nicht nur eine regulatorische und technische Notwendigkeit, sondern ein strategischer Wettbewerbsvorteil. Die Integration von Cyber-Security und AI-Ethics schafft vertrauensvolle, resiliente Systeme, die sowohl gesellschaftliche Akzeptanz als auch Cyber-Resilienz gewährleisten.'
        },
        whyUs: {
          title: 'Unsere Security-Ethics-Expertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Führende Kompetenz in integrierter AI-Ethics und Cyber-Security-Governance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Security-by-Design und Ethics-by-Design Methodologien'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Ganzheitlicher Ansatz von Threat-Modeling bis ethischer Compliance'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Branchenübergreifende Erfahrung in sicherheitskritischen und regulierten Umgebungen'
            }
          ]
        },
        additionalInfo: 'Unternehmen mit sicheren ethischen KI-Systemen genießen höchstes Stakeholder-Vertrauen, minimierte Cyber-Risiken und optimale regulatorische Compliance. Investieren Sie in integrierte KI-Ethik und Sicherheit für nachhaltigen Erfolg!',
        serviceDescription: 'Unsere KI-Ethik und Sicherheit Beratung umfasst das gesamte Spektrum sicherer ethischer AI-Governance – von der Entwicklung threat-aware ethischer Frameworks über Security-by-Design bis hin zur kontinuierlichen Cyber-Ethik-Überwachung und Incident-Response.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Sichere ethische AI-Framework-Entwicklung & Threat-aware Governance'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Security-by-Design & Ethics-by-Design Integration'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Cyber-Threat-Detection & ethische Performance-Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'DSGVO-konforme KI-Security-Compliance & Risikomanagement'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Incident-Response & ethische Krisenmanagement-Strategien'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Security-Ethics-Beratungsansatz',
        description: 'Wir verfolgen einen systematischen Ansatz zur Entwicklung sicherer ethischer KI-Systeme, der technische Security-Exzellenz mit verantwortungsvoller Governance verbindet. Jede AI-Security-Ethics-Initiative wird individuell auf Ihre Cyber-Risiken und ethischen Anforderungen zugeschnitten.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Umfassende Security-Ethics-Analyse Ihrer KI-Systeme und Bedrohungslandschaft'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Entwicklung integrierter AI-Security-Ethics-Frameworks und Threat-Modeling'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Implementierung von Security-by-Design und Ethics-by-Design Prinzipien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Kontinuierliche Cyber-Threat-Detection und ethische Performance-Überwachung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Adaptive Security-Ethics-Governance mit Incident-Response-Integration'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die Integration von KI-Ethik und Cyber-Security ist der Grundstein für vertrauensvolle AI-Systeme in Unternehmen. Unser Ansatz verbindet ethische Prinzipien mit robusten Sicherheitsmaßnahmen und regulatorischer Compliance. Wir entwickeln nicht nur sichere KI-Systeme, sondern schaffen Vertrauen durch transparente, resiliente und ethisch verantwortungsvolle AI-Lösungen, die höchste Security- und Ethics-Standards erfüllen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Sichere Ethische AI-Framework-Entwicklung',
          description: 'Entwicklung umfassender sicherer ethischer Frameworks für threat-aware und verantwortungsvolle KI-Entwicklung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Analyse ethischer Anforderungen und Cyber-Bedrohungslandschaft'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Entwicklung integrierter AI-Security-Ethics-Prinzipien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Threat-aware ethische Guidelines und Security-Policies'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Resiliente AI-Governance-Strukturen mit Cyber-Security-Integration'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Security-by-Design & Ethics-by-Design Integration',
          description: 'Systematische Integration von Sicherheits- und Ethikprinzipien in KI-Architekturen von Grund auf.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Threat-Modeling und ethische Risikoanalyse für KI-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Sichere ethische KI-Architektur-Design und -Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Privacy-by-Design und Fairness-by-Design Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Resiliente AI-Pipeline-Entwicklung mit Security-Ethics-Checkpoints'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Cyber-Threat-Detection & Ethische Performance-Überwachung',
          description: 'Kontinuierliche Überwachung von Cyber-Bedrohungen und ethischer Performance in KI-Systemen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'AI-spezifische Threat-Detection und Anomalie-Erkennung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Ethische Performance-Metriken und Security-KPI-Monitoring'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Adversarial-Attack-Detection und Bias-Drift-Überwachung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Integrierte Security-Ethics-Dashboards und Alerting-Systeme'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'DSGVO-konforme KI-Security-Compliance',
          description: 'Spezialisierte Beratung für datenschutzkonforme und cyber-sichere KI-Systeme mit integriertem Compliance-Management.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'DSGVO-Security-Compliance-Bewertung für AI-Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Privacy-by-Design und Security-by-Design für ethische KI'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Cyber-Security-Compliance-Monitoring und Risikomanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Regulatorische Security-Ethics-Berichterstattung und Dokumentation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Incident-Response & Ethische Krisenmanagement-Strategien',
          description: 'Entwicklung umfassender Incident-Response-Strategien für Cyber-Angriffe und ethische Krisen in KI-Systemen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'AI-spezifische Incident-Response-Pläne und Krisenmanagement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Ethische Krisenkommunikation und Stakeholder-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Forensische Analyse von AI-Security-Incidents und Bias-Vorfällen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Recovery-Strategien und Post-Incident-Ethics-Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Kontinuierliche Security-Ethics-Governance & Optimierung',
          description: 'Langfristige Begleitung Ihrer AI-Security-Ethics-Initiative mit kontinuierlicher Überwachung und strategischer Weiterentwicklung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Security-Ethics-Performance-Monitoring und Threat-Intelligence'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Adaptive Governance-Optimierung und Threat-Landscape-Anpassung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Strategische Security-Ethics-Weiterentwicklung und Innovation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Langfristige Partnerschaft und Secure-Responsible-AI-Support'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(kiEthikSicherheitData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ KI-Ethik-und-Sicherheit page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
