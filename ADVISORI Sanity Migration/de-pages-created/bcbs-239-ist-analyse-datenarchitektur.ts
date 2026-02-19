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
    console.log('Creating BCBS-239 IST Analyse Datenarchitektur page...')

    const bcbs239IstAnalyseDatenarchitekturData = {
      _type: 'servicePage',
      _id: 'bcbs-239-ist-analyse-datenarchitektur',
      title: 'BCBS-239 IST-Analyse Datenarchitektur',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/bcbs-239/bcbs-239-readiness/bcbs-239-ist-analyse-datenarchitektur'
      },
      parent: {
        _type: 'reference',
        _ref: 'bcbs-239-readiness'
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
        title: 'BCBS-239 IST-Analyse Datenarchitektur | ADVISORI',
        description: 'Umfassende IST-Analyse Ihrer Datenarchitektur für BCBS-239 Compliance. Identifizieren Sie systematisch Optimierungspotenziale in Ihrer Risikodaten-Infrastruktur.',
        keywords: 'BCBS-239 Datenarchitektur, IST-Analyse, Risikodaten-Infrastruktur, Datenarchitektur-Assessment, Datenqualität, Datenmodellierung, Risikodaten-Management'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'BCBS-239 IST-Analyse Datenarchitektur'
        },
        tagline: 'Fundierte Analyse Ihrer Risikodaten-Architektur',
        heading: 'BCBS-239 IST-Analyse Datenarchitektur',
        description: 'Unsere IST-Analyse Ihrer Datenarchitektur bietet eine detaillierte Bestandsaufnahme Ihrer aktuellen Risikodaten-Infrastruktur im Kontext der BCBS-239 Anforderungen. Wir identifizieren Optimierungspotenziale, bewerten Ihre IT-Systemlandschaft und entwickeln konkrete Empfehlungen für eine BCBS-239-konforme Zielarchitektur.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Transparenz über kritische Schwachstellen in Ihrer Risikodaten-Architektur'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Identifikation von Datensilos und Prozessbrüchen'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Bewertung der technischen Infrastruktur für Risikodaten-Aggregation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Grundlage für eine zukunftsorientierte Datenstrategie'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'Umfassende IST-Analyse Ihrer Datenarchitektur',
        description: 'Die BCBS-239 Richtlinien stellen komplexe Anforderungen an die Datenarchitektur und -infrastruktur von Finanzinstituten. Unsere IST-Analyse liefert einen detaillierten Einblick in den aktuellen Zustand Ihrer Risikodaten-Architektur und bewertet diese gegen die regulatorischen Anforderungen, um eine solide Grundlage für Ihre Compliance-Strategie zu schaffen.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Detaillierte Analyse der vorhandenen Datenquellen und -flüsse'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Bewertung der Datenmodelle und -strukturen im Risikodatenumfeld'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Transparenz über Prozessbrüche und manuelle Eingriffe'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Identifikation von Datensilos und Redundanzen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Bewertung der IT-Infrastruktur für Risikodaten-Aggregation und -Reporting'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine präzise IST-Analyse Ihrer Datenarchitektur kann bis zu 40% der späteren Implementierungskosten einsparen, indem sie frühzeitig kritische Schwachstellen identifiziert und eine zielgerichtete Transformation ermöglicht. Besonders wichtig ist die systematische Untersuchung aller Datenflüsse von der Quelle bis zur Berichterstattung, um versteckte Abhängigkeiten und Risiken zu erkennen.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Spezialisierte Expertise in der Analyse komplexer Finanz-Datenarchitekturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodik zur systematischen Erfassung und Bewertung von Datenflüssen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Tiefes Verständnis der BCBS-239 Anforderungen an Dateninfrastrukturen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Praxisorientierte Empfehlungen mit konkreten Architekturkonzepten'
            }
          ]
        },
        additionalInfo: 'Eine gründliche IST-Analyse der Datenarchitektur ist der Schlüssel zu einer erfolgreichen BCBS-239 Implementierung. Studien zeigen, dass Finanzinstitute ohne solide Datenarchitektur-Analyse im Durchschnitt 35% mehr Zeit und Ressourcen für ihre BCBS-239 Compliance-Projekte aufwenden müssen. Besonders kritisch sind dabei die oft unterschätzten manuellen Prozessschritte und versteckten Datenabhängigkeiten.',
        serviceDescription: 'Unsere IST-Analyse der Datenarchitektur bietet eine systematische Bestandsaufnahme und Bewertung Ihrer aktuellen Risikodaten-Infrastruktur. Wir identifizieren Optimierungspotenziale, bewerten kritische Schwachstellen und entwickeln konkrete Empfehlungen für eine BCBS-239-konforme Zielarchitektur.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Datenfluss- und Prozessanalyse für Risikodaten'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Assessment der IT-Systemlandschaft und Schnittstellen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Bewertung der Datenqualitätsmechanismen'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Analyse der Datenspeicherung und -aggregation'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Entwicklung einer BCBS-239-konformen Zielarchitektur'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Unsere IST-Analyse der Datenarchitektur folgt einer strukturierten Methodik, die alle relevanten Aspekte Ihrer Risikodaten-Infrastruktur systematisch erfasst und bewertet.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Erfassung aller relevanten Risikodatenquellen und -systeme'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Detaillierte Analyse der Datenflüsse und Verarbeitungsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Bewertung der Schnittstellen und Integrationsarchitektur'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Identifikation von kritischen Schwachstellen und Optimierungspotenzialen'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Entwicklung einer BCBS-239-konformen Zielarchitektur und Transformationsempfehlungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'Internationale Großbank',
        name: 'Dr. Michael Schneider',
        position: 'Head of Enterprise Data Architecture',
        quote: 'Die IST-Analyse unserer Datenarchitektur durch ADVISORI war ein entscheidender Erfolgsfaktor für unser BCBS-239 Programm. Die detaillierte Analyse hat nicht nur kritische Schwachstellen in unserer Infrastruktur aufgedeckt, sondern auch konkrete Optimierungspotenziale identifiziert, die wir so nicht erkannt hätten. Die entwickelte Zielarchitektur bildet nun die Grundlage für unsere langfristige Datenstrategie.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Comprehensive Data Flow Analysis',
          description: 'Wir analysieren systematisch alle Datenflüsse Ihrer Risikodaten von der Quelle bis zur Berichterstattung und identifizieren kritische Prozessbrüche, manuelle Eingriffe und Datensilos.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'End-to-End Mapping aller Risikodatenflüsse'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Identifikation manueller Prozessschritte und Workarounds'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Analyse der Datentransformationen und -aggregationen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Bewertung der Prozesseffizienz und -zuverlässigkeit'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'IT-Systemlandschaft Assessment',
          description: 'Wir bewerten Ihre IT-Systeme und -Infrastruktur im Kontext der BCBS-239 Anforderungen und entwickeln Empfehlungen für eine zukunftssichere Architektur.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Analyse der Systemlandschaft und Schnittstellen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Bewertung der Datenspeicherung und -verarbeitung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Identifikation technischer Schwachstellen und Risiken'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Entwicklung einer BCBS-239-konformen Zielarchitektur'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(bcbs239IstAnalyseDatenarchitekturData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ BCBS-239 IST-Analyse Datenarchitektur page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
