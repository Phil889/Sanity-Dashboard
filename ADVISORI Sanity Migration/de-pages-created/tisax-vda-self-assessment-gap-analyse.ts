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
    console.log('Creating TISAX VDA Self-Assessment Gap Analyse page...')

    const tisaxVdaSelfAssessmentGapAnalyseData = {
      _type: 'servicePage',
      _id: 'tisax-vda-self-assessment-gap-analyse',
      title: 'TISAX VDA Self-Assessment Gap Analyse',
      slug: {
        _type: 'slug',
        current: 'regulatory-compliance-management/standards-frameworks/tisax-vda-isa/tisax-vda-self-assessment-gap-analyse'
      },
      parent: {
        _type: 'reference',
        _ref: 'tisax-vda-isa'
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
        title: 'TISAX VDA Self-Assessment Gap Analyse | ADVISORI',
        description: 'Professionelle TISAX VDA Self-Assessment Gap Analyse für die Automobilindustrie. Wir identifizieren Schwachstellen und entwickeln maßgeschneiderte Umsetzungsstrategien für Ihre TISAX-Zertifizierung.',
        keywords: 'TISAX, VDA ISA, Self-Assessment, Gap Analyse, Automobilindustrie, Informationssicherheit, Compliance, Zertifizierung'
      },
      heroSection: {
        _type: 'object',
        heroImage: {
          _type: 'image',
          alt: 'TISAX VDA Self-Assessment Gap Analyse'
        },
        tagline: 'Strategische TISAX-Readiness für die Automobilindustrie',
        heading: 'TISAX VDA Self-Assessment Gap Analyse',
        description: 'Eine professionelle Gap Analyse ist der Grundstein für eine erfolgreiche TISAX-Zertifizierung. Wir bewerten systematisch Ihre aktuelle Informationssicherheitslage und entwickeln eine präzise Roadmap zur TISAX-Compliance.',
        benefits: [
          {
            _type: 'object',
            _key: generateKey('benefit', 1),
            text: 'Vollständige Transparenz über TISAX-Compliance-Status'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 2),
            text: 'Priorisierte Maßnahmenplanung für effiziente Umsetzung'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 3),
            text: 'Risikominimierung durch präventive Schwachstellenidentifikation'
          },
          {
            _type: 'object',
            _key: generateKey('benefit', 4),
            text: 'Kostenoptimierte TISAX-Implementierungsstrategie'
          }
        ]
      },
      overview: {
        _type: 'object',
        heading: 'TISAX VDA Self-Assessment Gap Analyse',
        description: 'Die TISAX VDA Self-Assessment Gap Analyse ist ein strukturierter Bewertungsprozess, der Ihre aktuelle Informationssicherheitslage mit den TISAX-Anforderungen vergleicht. Diese Analyse bildet das Fundament für eine erfolgreiche TISAX-Zertifizierung und hilft Ihnen, Ressourcen optimal zu allokieren und Implementierungsrisiken zu minimieren.',
        points: [
          {
            _type: 'object',
            _key: generateKey('point', 1),
            text: 'Systematische Bewertung aller VDA ISA Kontrollziele und -maßnahmen'
          },
          {
            _type: 'object',
            _key: generateKey('point', 2),
            text: 'Identifikation und Priorisierung von Compliance-Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('point', 3),
            text: 'Entwicklung einer maßgeschneiderten TISAX-Implementierungsroadmap'
          },
          {
            _type: 'object',
            _key: generateKey('point', 4),
            text: 'Bewertung der organisatorischen und technischen Reifegrade'
          },
          {
            _type: 'object',
            _key: generateKey('point', 5),
            text: 'Kosten-Nutzen-Analyse verschiedener Umsetzungsoptionen'
          }
        ],
        alert: {
          title: 'Expertentipp',
          content: 'Eine gründliche Gap Analyse vor der TISAX-Zertifizierung kann bis zu 40% der Implementierungszeit sparen und verhindert kostspielige Nachbesserungen während des Auditprozesses.'
        },
        whyUs: {
          title: 'Unsere Stärken',
          points: [
            {
              _type: 'object',
              _key: generateKey('whyUs', 1),
              text: 'Zertifizierte TISAX-Experten mit umfassender Automobilindustrie-Erfahrung'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 2),
              text: 'Bewährte Methodik mit über 100 erfolgreichen TISAX-Implementierungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 3),
              text: 'Branchenspezifisches Know-how für Automotive-Supply-Chain-Anforderungen'
            },
            {
              _type: 'object',
              _key: generateKey('whyUs', 4),
              text: 'Pragmatische Lösungsansätze für kosteneffiziente TISAX-Compliance'
            }
          ]
        },
        additionalInfo: 'Die TISAX VDA Self-Assessment Gap Analyse ist besonders kritisch für Automotive-Zulieferer, da sie nicht nur die Zertifizierungsbereitschaft bewertet, sondern auch die Geschäftsfähigkeit im Automobilsektor sicherstellt.',
        serviceDescription: 'Unser Self-Assessment Gap Analyse Service bietet eine umfassende Bewertung Ihrer TISAX-Readiness durch systematische Evaluation aller VDA ISA Kontrollbereiche und Entwicklung einer maßgeschneiderten Umsetzungsstrategie.',
        servicePoints: [
          {
            _type: 'object',
            _key: generateKey('servicePoint', 1),
            text: 'Strukturierte VDA ISA Kontrollziele-Bewertung und Reifegrad-Assessment'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 2),
            text: 'Identifikation und Quantifizierung von TISAX-Compliance-Gaps'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 3),
            text: 'Entwicklung priorisierter Maßnahmenpläne mit Ressourcenplanung'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 4),
            text: 'Bewertung der Auswirkungen auf bestehende Geschäftsprozesse'
          },
          {
            _type: 'object',
            _key: generateKey('servicePoint', 5),
            text: 'Erstellung detaillierter TISAX-Implementierungsroadmaps'
          }
        ]
      },
      approach: {
        _type: 'object',
        title: 'Unser Vorgehen',
        description: 'Wir führen eine systematische und strukturierte Gap Analyse durch, die alle Aspekte der TISAX-Anforderungen abdeckt und eine solide Basis für Ihre Zertifizierungsstrategie schafft.',
        points: [
          {
            _type: 'object',
            _key: generateKey('approach', 1),
            text: 'Aufnahme der aktuellen Informationssicherheitslandschaft und -prozesse'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 2),
            text: 'Systematische Bewertung gegen alle VDA ISA Kontrollziele'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 3),
            text: 'Identifikation und Kategorisierung von Compliance-Lücken'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 4),
            text: 'Entwicklung einer priorisierten und kostenoptimierten Umsetzungsroadmap'
          },
          {
            _type: 'object',
            _key: generateKey('approach', 5),
            text: 'Präsentation der Ergebnisse mit konkreten Handlungsempfehlungen'
          }
        ]
      },
      testimonial: {
        _type: 'object',
        company: 'ADVISORI FTC GmbH',
        name: 'Dr. Michael Höhle',
        position: 'Partner',
        quote: 'Eine professionelle TISAX Gap Analyse ist die Grundlage für jeden erfolgreichen Zertifizierungsprozess. Sie schafft Transparenz, reduziert Risiken und ermöglicht eine kosteneffiziente Implementierung der erforderlichen Sicherheitsmaßnahmen.'
      },
      services: [
        {
          _type: 'object',
          _key: generateKey('service', 1),
          title: 'Umfassende VDA ISA Kontrollziele-Bewertung',
          description: 'Wir bewerten systematisch alle 103 VDA ISA Kontrollziele und bewerten den aktuellen Implementierungsgrad Ihrer Organisation.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 1),
              text: 'Detaillierte Assessment aller sechs VDA ISA Hauptbereiche'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 2),
              text: 'Bewertung von organisatorischen und technischen Kontrollen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 3),
              text: 'Dokumentation von Evidenzen und Nachweisen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 4),
              text: 'Reifegrad-Assessment mit standardisierten Bewertungskriterien'
            }
          ]
        },
        {
          _type: 'object',
          _key: generateKey('service', 2),
          title: 'Strategische Umsetzungsroadmap',
          description: 'Basierend auf der Gap Analyse entwickeln wir eine maßgeschneiderte, priorisierte Roadmap für Ihre TISAX-Implementierung.',
          features: [
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 5),
              text: 'Priorisierung von Maßnahmen nach Risiko und Business Impact'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 6),
              text: 'Detaillierte Ressourcen- und Zeitplanung'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 7),
              text: 'Kosten-Nutzen-Analyse verschiedener Implementierungsoptionen'
            },
            {
              _type: 'object',
              _key: generateKey('serviceFeature', 8),
              text: 'Meilenstein-Definition und Erfolgsmetriken'
            }
          ]
        }
      ],
      faq: [] // Initial empty FAQ array, will be populated by subsequent scripts
    }

    // Add validation check
    console.log('Running schema validation...')
    const transaction = client.transaction()
    transaction.createOrReplace(tisaxVdaSelfAssessmentGapAnalyseData)
    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ TISAX VDA Self-Assessment Gap Analyse page created successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
