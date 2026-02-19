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
    console.log('Creating IAM Bedeutung page...')

    const iamBedeutungData = {
      _type: 'servicePage',
      _id: 'iam-bedeutung',
      title: 'IAM Bedeutung - Strategische Relevanz für Unternehmenserfolg',
      slug: {
        _type: 'slug',
        current: 'informationssicherheit/identity-access-management-iam/iam-bedeutung'
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
        title: 'IAM Bedeutung - Strategische Relevanz für Unternehmenserfolg | ADVISORI',
        description: 'Verstehen Sie die strategische Bedeutung von IAM für moderne Unternehmen: Business-Enablement, Risikominimierung, Compliance-Exzellenz und Wettbewerbsvorteile durch professionelle Identitätsverwaltung.',
        keywords: 'IAM Bedeutung, Identity Access Management Relevanz, IAM Business Value, Strategische Identitätsverwaltung, IAM Unternehmenswert, Identity Management Bedeutung, IAM ROI, Geschäftswert IAM, IAM Strategie, Identitätssicherheit Bedeutung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'IAM Bedeutung Strategische Relevanz für Unternehmenserfolg'
        },
        tagline: 'Die strategische Bedeutung von IAM für nachhaltigen Unternehmenserfolg',
        heading: 'IAM Bedeutung - Strategische Relevanz für Unternehmenserfolg',
        description: 'Die Bedeutung von IAM (Identity & Access Management) reicht weit über technische Sicherheitsaspekte hinaus und bildet das strategische Fundament für digitale Transformation, Geschäftswachstum und nachhaltige Wettbewerbsvorteile. In einer zunehmend vernetzten Geschäftswelt entscheidet die strategische Ausrichtung Ihrer IAM-Systeme maßgeblich über Innovationsfähigkeit, Risikoresilienz und operative Exzellenz Ihres Unternehmens.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Strategischer Business-Enabler für digitale Transformation und Innovation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Fundamentale Risikominimierung und Compliance-Exzellenz'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Nachhaltiger Wettbewerbsvorteil durch intelligente Identitätsverwaltung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Messbare ROI-Steigerung und operative Effizienzgewinne'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Die strategische Bedeutung von IAM: Vom Sicherheitstool zum Business-Accelerator',
        description: 'Die wahre Bedeutung von IAM liegt in seiner Transformation von einem reaktiven Sicherheitsinstrument zu einem proaktiven Geschäftsbeschleuniger. Moderne Unternehmen erkennen zunehmend, dass strategisch implementierte IAM-Systeme nicht nur Risiken minimieren, sondern aktiv Geschäftswachstum fördern, Innovationen ermöglichen und nachhaltige Wettbewerbsvorteile schaffen. Diese paradigmatische Verschiebung macht IAM zu einem unverzichtbaren Baustein erfolgreicher Unternehmensstrategien.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Business-Value-Creation durch intelligente Identitätsverwaltung und Prozessoptimierung'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Strategic Risk Management mit proaktiver Bedrohungsabwehr und Compliance-Automation'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Innovation-Enablement durch sichere und skalierbare Identitätsinfrastrukturen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Competitive Advantage durch überlegene Sicherheitsarchitekturen und Benutzerfreundlichkeit'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Future-Readiness mit adaptiven Systemen für sich wandelnde Geschäftsanforderungen'
          }
        ],
        alert: {
          title: 'Strategische Erkenntnis',
          content: 'Unternehmen, die IAM als strategischen Geschäftsbeschleuniger verstehen und nicht nur als Sicherheitstool, erzielen nachweislich höhere Innovationsraten, bessere Compliance-Performance und stärkere Marktpositionen. Die Bedeutung von IAM liegt in seiner Fähigkeit, Sicherheit und Geschäftswachstum zu vereinen.'
        },
        whyUs: {
          title: 'ADVISORI IAM-Strategieexpertise',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Ganzheitliche Business-Value-Analyse und strategische IAM-Roadmap-Entwicklung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Branchenführende Expertise in IAM-Business-Case-Entwicklung und ROI-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Innovative Ansätze zur Integration von IAM in Geschäftsstrategien und Transformationsprojekte'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Nachgewiesene Erfolge bei der Realisierung strategischer IAM-Vorteile in komplexen Unternehmensumgebungen'
            }
          ]
        },
        additionalInfo: 'Die Bedeutung von IAM entwickelt sich kontinuierlich weiter, da neue Technologien wie künstliche Intelligenz, Zero-Trust-Architekturen und Cloud-native Ansätze die Möglichkeiten für strategische Geschäftsvorteile erweitern. Diese Evolution macht es für Unternehmen essentiell, IAM nicht als statische Lösung zu betrachten, sondern als dynamischen Enabler für kontinuierliche Innovation und Wachstum.',
        serviceDescription: 'Wir unterstützen Sie dabei, die volle strategische Bedeutung von IAM für Ihr Unternehmen zu erschließen – von der initialen Business-Value-Analyse über die strategische Implementierung bis hin zur kontinuierlichen Optimierung und Innovation. Unser Ansatz fokussiert auf die Transformation von IAM von einem Kostenfaktor zu einem Wertschöpfungstreiber.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strategic IAM Assessment und Business-Value-Quantifizierung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'IAM-Business-Case-Entwicklung mit ROI-Fokus und Stakeholder-Alignment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Strategische IAM-Roadmap-Erstellung für nachhaltige Geschäftsvorteile'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Change Management und Organizational Readiness für IAM-Transformation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Continuous Value Realization und strategische IAM-Optimierung'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser strategischer Ansatz zur IAM-Bedeutungsrealisierung',
        description: 'Wir verfolgen einen ganzheitlichen, geschäftsorientierten Ansatz, der die strategische Bedeutung von IAM in konkrete Geschäftsvorteile transformiert und dabei sowohl kurzfristige Erfolge als auch langfristige Wertschöpfung sicherstellt.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Strategic Business Analysis zur Identifikation spezifischer IAM-Wertschöpfungspotenziale'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Value-driven Implementation mit messbaren KPIs und kontinuierlichem ROI-Monitoring'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Stakeholder Engagement und Change Management für nachhaltige Akzeptanz'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Continuous Innovation Integration für zukunftssichere IAM-Strategien'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Performance Optimization und strategische Weiterentwicklung für maximale Geschäftsrelevanz'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Asan Stefanski',
        position: 'Director',
        quote: 'Die wahre Bedeutung von IAM liegt nicht in der Technologie selbst, sondern in ihrer strategischen Anwendung als Geschäftsbeschleuniger. Unsere Erfahrung zeigt, dass Unternehmen, die IAM als integralen Bestandteil ihrer Geschäftsstrategie verstehen, nicht nur höhere Sicherheitsstandards erreichen, sondern auch signifikante Wettbewerbsvorteile erzielen. Die strategische Bedeutung von IAM manifestiert sich in messbaren Geschäftsergebnissen: erhöhte Agilität, reduzierte Risiken und beschleunigte Innovation.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Strategic IAM Value Assessment',
          description: 'Umfassende Analyse der strategischen Bedeutung von IAM für Ihr spezifisches Geschäftsmodell mit quantifizierbaren Wertschöpfungspotenzialen und ROI-Prognosen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Business-Impact-Analyse und strategische Bedeutungsquantifizierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'ROI-Modellierung und Investitionsoptimierung für IAM-Initiativen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Competitive Advantage Analysis und Marktpositionierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Strategic Roadmap Development mit priorisierten Wertschöpfungsmaßnahmen'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'IAM Business Case Development',
          description: 'Entwicklung überzeugender Business Cases, die die strategische Bedeutung von IAM für Entscheidungsträger transparent machen und Investitionsentscheidungen fundiert unterstützen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Executive-Level Business Case Präsentationen und Stakeholder-Alignment'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Financial Modeling mit TCO-Analyse und Benefit-Quantifizierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Risk-Benefit-Analysis und strategische Investitionsempfehlungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Implementation Planning mit Budget-Optimierung und Ressourcenallokation'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 3),
          title: 'Strategic IAM Transformation',
          description: 'Ganzheitliche Transformation Ihrer IAM-Landschaft mit Fokus auf strategische Geschäftsvorteile und nachhaltige Wertschöpfung durch intelligente Identitätsverwaltung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 9),
              text: 'Business-aligned IAM Architecture Design und strategische Implementierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 10),
              text: 'Change Management und Organizational Development für IAM-Excellence'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 11),
              text: 'Process Optimization und Workflow-Integration für operative Effizienz'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 12),
              text: 'Performance Monitoring und kontinuierliche Wertschöpfungsoptimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 4),
          title: 'IAM Innovation Strategy',
          description: 'Entwicklung zukunftsorientierter IAM-Strategien, die emerging Technologies integrieren und Ihr Unternehmen für zukünftige Herausforderungen und Chancen positionieren.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 13),
              text: 'Technology Roadmap Development mit Innovation-Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 14),
              text: 'AI-powered IAM Solutions und Machine Learning Integration'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 15),
              text: 'Zero-Trust Architecture Planning und Future-Ready Design'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 16),
              text: 'Emerging Technology Assessment und strategische Adoption-Planung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 5),
          title: 'IAM Governance und Compliance Excellence',
          description: 'Etablierung robuster IAM-Governance-Strukturen, die nicht nur Compliance-Anforderungen erfüllen, sondern strategische Geschäftsvorteile durch überlegene Risikomanagement-Praktiken schaffen.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 17),
              text: 'Strategic Governance Framework Development und Policy-Management'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 18),
              text: 'Regulatory Excellence und proaktive Compliance-Strategien'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 19),
              text: 'Risk Management Integration und strategische Risikominimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 20),
              text: 'Audit Readiness und kontinuierliche Governance-Optimierung'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 6),
          title: 'IAM Value Realization und Optimization',
          description: 'Kontinuierliche Optimierung und Weiterentwicklung Ihrer IAM-Investitionen mit Fokus auf nachhaltige Wertschöpfung und strategische Geschäftsvorteile.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 21),
              text: 'Value Tracking und ROI-Monitoring mit datengetriebenen Insights'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 22),
              text: 'Continuous Improvement Programs und Performance-Optimierung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 23),
              text: 'Strategic Review und Adaptation an sich wandelnde Geschäftsanforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 24),
              text: 'Innovation Integration und zukunftsorientierte Strategieentwicklung'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(iamBedeutungData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ IAM Bedeutung page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
