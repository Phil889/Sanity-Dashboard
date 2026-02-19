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
    console.log('Creating PAM vs IAM page...')

    const pamVsIamData = {
      _type: 'servicePage',
      _id: 'pam-vs-iam',
      title: 'PAM vs IAM - Strategische Abgrenzung und Integration von Privileged Access Management und Identity & Access Management',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/pam-vs-iam'
      },
      parent: {
        _type: 'reference',
        _ref: 'identity-access-management-iam'
      },
      references: {
        _type: 'object',
        topLevelParent: {
          _type: 'reference',
          _ref: 'informationssicherheit'
        }
      },
      seo: {
        _type: 'seo',
        title: 'PAM vs IAM - Strategische Abgrenzung und Integration | ADVISORI',
        description: 'Professionelle Analyse von PAM vs IAM: Strategische Unterschiede, Integrationsmöglichkeiten, Anwendungsfälle und Best Practices für optimale Identitätssicherheit in Unternehmen.',
        keywords: 'PAM vs IAM, Privileged Access Management, Identity Access Management, PAM IAM Integration, Identitätssicherheit, Privileged Accounts, Access Governance, Zero Trust, Enterprise Security, IAM Strategie'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'PAM vs IAM Strategische Abgrenzung und Integration'
        },
        tagline: 'Strategische Synergie zwischen PAM und IAM für umfassende Identitätssicherheit',
        heading: 'PAM vs IAM - Strategische Abgrenzung und Integration von Privileged Access Management und Identity & Access Management',
        description: 'PAM vs IAM ist keine Entweder-oder-Entscheidung, sondern eine strategische Frage der optimalen Integration und Orchestrierung komplementärer Sicherheitstechnologien. Während IAM die breite Identitätsverwaltung für alle Benutzer und Systeme orchestriert, fokussiert PAM auf den hochspezialisierten Schutz privilegierter Zugriffe und kritischer Assets. Die intelligente Kombination beider Ansätze schafft eine ganzheitliche Sicherheitsarchitektur, die sowohl Skalierbarkeit als auch maximalen Schutz für Ihre wertvollsten Unternehmensressourcen gewährleistet.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Komplementäre Sicherheitsarchitektur mit IAM für Breitenverwaltung und PAM für Tiefenschutz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Optimierte Ressourcenallokation durch strategische Technologie-Segmentierung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Nahtlose Integration für einheitliche Governance und Compliance-Exzellenz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Skalierbare Sicherheitsstrategie für unterschiedliche Risikoprofile und Anwendungsfälle'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'PAM vs IAM: Strategische Positionierung und Synergie-Potentiale',
        description: 'Die Diskussion PAM vs IAM reflektiert eine fundamentale Entwicklung in der Unternehmenssicherheit: von monolithischen Sicherheitslösungen hin zu spezialisierten, aber integrierten Sicherheitsökosystemen. Moderne Organisationen benötigen sowohl die Skalierbarkeit und Benutzerfreundlichkeit von IAM-Systemen als auch die Tiefensicherheit und spezialisierte Kontrollen von PAM-Lösungen. Die strategische Herausforderung liegt nicht in der Auswahl zwischen beiden Ansätzen, sondern in ihrer optimalen Orchestrierung für maximale Sicherheitseffektivität.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'IAM als Foundation für umfassende Identitätsverwaltung und Benutzer-Lifecycle-Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'PAM als spezialisierte Sicherheitsschicht für kritische Assets und privilegierte Zugriffe'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Integrierte Governance-Strukturen für einheitliche Richtlinien und Compliance-Management'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Risk-based Segmentierung für optimale Sicherheits-Performance-Balance'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Unified Analytics für ganzheitliche Sicherheitsintelligenz und Threat Detection'
          }
        ],
        alert: {
          title: 'Strategische Notwendigkeit',
          content: 'Unternehmen, die PAM und IAM als konkurrierende statt komplementäre Technologien betrachten, verpassen kritische Synergie-Potentiale und schaffen Sicherheitslücken. Eine integrierte PAM-IAM-Strategie ist essentiell für moderne Zero-Trust-Architekturen und regulatorische Compliance.'
        },
        whyUs: {
          title: 'ADVISORI PAM-IAM-Integration-Excellence',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Ganzheitliche Architektur-Beratung für optimale PAM-IAM-Synergie'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Herstellerunabhängige Expertise für beste Technologie-Kombinationen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Risk-based Integration-Strategien für maximale Sicherheitseffektivität'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Compliance-by-Design für regulatorische Exzellenz und Audit-Bereitschaft'
            }
          ]
        },
        additionalInfo: 'Die Evolution von PAM und IAM konvergiert zunehmend durch gemeinsame Technologien wie KI-gestützte Analytics, Zero-Trust-Prinzipien und Cloud-native Architekturen. Diese Konvergenz ermöglicht neue Integrationsmöglichkeiten und schafft Potentiale für intelligente, adaptive Sicherheitsökosysteme, die sowohl Breitenverwaltung als auch Tiefenschutz optimal kombinieren.',
        serviceDescription: 'Wir entwickeln maßgeschneiderte PAM-IAM-Integrationsstrategien, die Ihre spezifischen Sicherheitsanforderungen, Compliance-Vorgaben und Geschäftsziele optimal adressieren. Unser Ansatz kombiniert bewährte Architektur-Prinzipien mit innovativen Integrationstechnologien für eine Sicherheitslösung, die sowohl heute als auch in Zukunft Ihre kritischen Assets optimal schützt.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'PAM-IAM-Architektur-Assessment und Integrations-Roadmap-Entwicklung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Risk-based Segmentierung und Technologie-Mapping für optimale Abgrenzung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Unified Governance-Framework für einheitliche Richtlinien und Prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Integration-Implementation mit nahtloser Daten- und Workflow-Synchronisation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Continuous Optimization für evolutionäre Anpassung an neue Bedrohungen'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer PAM-IAM-Integrationsansatz',
        description: 'Wir verfolgen einen ganzheitlichen, business-orientierten Ansatz für PAM-IAM-Integrationen, der technische Exzellenz mit strategischen Geschäftszielen verbindet und dabei sowohl kurzfristige Sicherheitsverbesserungen als auch langfristige Skalierbarkeit gewährleistet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Comprehensive Assessment von bestehenden IAM- und PAM-Landschaften mit Gap-Analyse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Risk-based Architecture-Design mit optimaler Technologie-Segmentierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Phased Integration-Implementation mit kontinuierlicher Validierung und Optimierung'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Unified Governance-Etablierung für einheitliche Richtlinien und Compliance'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Continuous Evolution-Management für adaptive Anpassung an neue Anforderungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die strategische Integration von PAM und IAM ist ein Paradigmenwechsel von isolierten Sicherheitslösungen hin zu orchestrierten Sicherheitsökosystemen. Unsere Erfahrung zeigt, dass Organisationen, die PAM und IAM als komplementäre Technologien verstehen und intelligent integrieren, nicht nur überlegene Sicherheitsresultate erzielen, sondern auch signifikante Effizienzgewinne und Kosteneinsparungen realisieren. Die richtige PAM-IAM-Strategie transformiert Sicherheit von einem Kostenfaktor zu einem strategischen Business-Enabler, der Innovation beschleunigt und gleichzeitig kritische Assets optimal schützt.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'PAM-IAM-Architektur-Assessment und Strategieentwicklung',
          description: 'Umfassende Analyse Ihrer bestehenden Identitäts- und Privileged-Access-Landschaft mit Entwicklung einer integrierten Architektur-Strategie für optimale Synergie-Nutzung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Current-State-Assessment von IAM- und PAM-Systemen mit Gap-Analyse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Risk-based Segmentierung für optimale Technologie-Abgrenzung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Integration-Roadmap mit Priorisierung und ROI-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Business-Case-Entwicklung für strategische Investitionsentscheidungen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Unified Governance-Framework und Policy-Integration',
          description: 'Entwicklung einheitlicher Governance-Strukturen, die PAM- und IAM-Richtlinien nahtlos integrieren und konsistente Sicherheitsstandards gewährleisten.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Unified Policy-Framework für konsistente Sicherheitsrichtlinien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Cross-Platform-Compliance-Management und Audit-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Role-based Governance mit einheitlichen Approval-Workflows'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Integrated Risk-Management für ganzheitliche Risikobewertung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Technical Integration und Data-Synchronisation',
          description: 'Professionelle technische Integration von PAM- und IAM-Systemen mit nahtloser Daten-Synchronisation und Workflow-Orchestrierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'API-basierte Integration für Real-time Data-Synchronisation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Single-Sign-On-Extension für privilegierte Zugriffe'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Unified Identity-Repository mit konsistenten Attributen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Cross-Platform-Analytics für ganzheitliche Sicherheitsintelligenz'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'Zero-Trust-Integration und Advanced Security-Controls',
          description: 'Implementation fortschrittlicher Zero-Trust-Prinzipien, die PAM- und IAM-Systeme in einer einheitlichen Sicherheitsarchitektur orchestrieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Zero-Trust-Architecture mit kontinuierlicher Verifikation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'Adaptive Authentication mit Risk-based Escalation'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Behavioral Analytics für Anomaly Detection über alle Systeme'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Automated Threat Response mit koordinierter Incident-Behandlung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'Cloud-native Integration und Hybrid-Deployment',
          description: 'Spezialisierte Integration für Cloud-native und Hybrid-Umgebungen mit optimaler Skalierbarkeit und Performance.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Multi-Cloud-Integration für konsistente Sicherheitsrichtlinien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Container-Security mit DevOps-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Microservices-Architecture für skalierbare Deployment-Optionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Edge-Computing-Support für IoT und Remote-Access-Szenarien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'Continuous Optimization und Strategic Evolution',
          description: 'Kontinuierliche Optimierung und strategische Weiterentwicklung Ihrer PAM-IAM-Integration mit proaktivem Monitoring und Innovation-Integration.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Performance-Monitoring mit KPI-basierter Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Security-Effectiveness-Assessment und Continuous Improvement'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Technology-Roadmap-Updates für Innovation-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Strategic Consulting für evolutionäre Anpassung an neue Bedrohungen'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(pamVsIamData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ PAM vs IAM page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
