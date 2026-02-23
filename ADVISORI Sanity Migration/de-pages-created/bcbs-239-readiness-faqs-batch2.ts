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
    console.log('Updating BCBS-239 Readiness page with Technical Implementation FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'bcbs-239-readiness' })
    
    if (!existingDoc) {
      throw new Error('Document "bcbs-239-readiness" not found')
    }
    
    // Create new Technical Implementation FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche technischen Herausforderungen bei der Datenarchitektur werden typischerweise in einem BCBS-239 Readiness Assessment identifiziert und wie unterstützt ADVISORI bei deren Überwindung?",
        answer: "Die technische Datenarchitektur stellt häufig eine der größten Herausforderungen bei der BCBS-239 Compliance dar. Historisch gewachsene, fragmentierte IT-Landschaften in Finanzinstituten erschweren eine konsistente, zeitnahe und präzise Risikodaten-Aggregation. Unser Readiness Assessment identifiziert systematisch diese technischen Schwachstellen und bietet einen strukturierten Ansatz zu deren Überwindung.\n\n🏗️ Typische technische Herausforderungen in der Datenarchitektur:\n• Datensilo-Problematik: Isolierte Risikodatenspeicher ohne nahtlose Integration, die manuelle Konsolidierungsprozesse erforderlich machen und Inkonsistenzen verursachen.\n• Heterogene Datenmodelle: Unterschiedliche Datendefintionen, Taxonomien und Attribute für gleiche Risikokonzepte über verschiedene Systeme hinweg.\n• Legacy-System-Abhängigkeiten: Veraltete Kernsysteme, die kritische Risikodaten verwalten, aber moderne API-Schnittstellen oder Echtzeit-Datenextraktion nicht unterstützen.\n• Unzureichende Datenlinienverfolgung: Fehlende technische Mechanismen zur lückenlosen Nachverfolgung von Datenflüssen und Transformationen von der Quelle bis zum Report.\n• Begrenztes Metadatenmanagement: Insuffiziente technische Strukturen zur Verwaltung und Nutzung von Metadaten für Risikodaten.\n\n⚙️ ADVISORIs technologieorientierter Lösungsansatz:\n• Architektonische Referenzmodelle: Wir entwickeln Zielarchitekturen, die Best Practices für BCBS-239-konforme Risikodatenplattformen abbilden und Implementierungspfade aufzeigen.\n• Datenintegrationsstrategie: Identifikation und Empfehlung geeigneter Technologien und Patterns für die nahtlose Integration heterogener Datenquellen (z.B. Data Virtualization, Service-orientierte Architekturen, API-Management).\n• Moderne Datenplattform-Konzepte: Evaluierung innovativer technologischer Ansätze wie Data Mesh, Data Fabric oder Cloud-basierte Datenlösungen für BCBS-239 Compliance.\n• Technisches Metadatenmanagement: Konzeption von Metadaten-Repositories und -Werkzeugen zur systematischen Erfassung und Nutzung von Metadaten für Datenqualität und Lineage."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Methodik verwendet ADVISORI bei der Gap-Analyse zu den 14 BCBS-239 Prinzipien und wie wird der Reifegrad eines Instituts objektiviert?",
        answer: "Unsere Gap-Analyse-Methodik für BCBS-239 verbindet tiefgreifende regulatorische Expertise mit einem strukturierten, standardisierten Bewertungsansatz. Wir lösen uns von subjektiven Einschätzungen und setzen auf eine evidenzbasierte Bewertungsmethodik, die eine objektive Reifegradbestimmung ermöglicht und gleichzeitig detaillierte Einblicke in spezifische Handlungsfelder liefert.\n\n📋 ADVISORIs strukturierte BCBS-239 Assessment-Methodik:\n• Prinzipienbasierter Bewertungsrahmen: Unsere detaillierte Assessment-Matrix deckt alle 14 BCBS-239 Prinzipien ab und untergliedert diese in über 120 spezifische Bewertungspunkte, die präzise Compliance-Lücken identifizieren.\n• Evidenzbasierte Bewertung: Jeder Assessmentpunkt wird anhand konkreter Nachweise und Artefakte bewertet, nicht auf Basis subjektiver Meinungen oder Selbsteinschätzungen.\n• Multi-dimensionale Analyse: Neben der Compliance-Konformität bewerten wir auch die Implementierungstiefe, Skalierbarkeit und Nachhaltigkeit bestehender Lösungen.\n• Aufsichtsrechtliche Perspektive: Unsere Bewertungskriterien reflektieren die tatsächlichen Erwartungen der Aufsichtsbehörden basierend auf unserer Erfahrung aus zahlreichen BCBS-239 Prüfungen und Reviews.\n\n📊 Reifegradmodell und Benchmarking:\n• 5-Stufen-Reifegradmodell: Jedes der 14 Prinzipien wird auf einer standardisierten Skala von 1 (Initial/Ad-hoc) bis 5 (Optimiert/Führend) bewertet, mit klaren Kriterien für jede Reifegradstufe.\n• Gewichtete Aggregation: Die Einzelbewertungen werden nach regulatorischer Kritikalität und Geschäftsrelevanz gewichtet, um einen aussagekräftigen Gesamt-Reifegrad zu ermitteln.\n• Visuelles Heat-Mapping: Grafische Darstellung der Ergebnisse in Form von Heat Maps, die auf einen Blick kritische Handlungsfelder identifizieren.\n• Branchenvergleich: Anonymisierter Vergleich Ihrer Ergebnisse mit Benchmark-Daten aus unserer umfangreichen Erfahrung mit vergleichbaren Finanzinstituten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Inwiefern berücksichtigt ein BCBS-239 Readiness Assessment die speziellen Anforderungen an Datenqualitätsmanagement und welche konkreten Maßnahmen empfiehlt ADVISORI?",
        answer: "Datenqualität ist ein zentrales Element der BCBS-239 Compliance und bildet die Grundlage für vertrauenswürdige Risikoberichte und fundierte Entscheidungen. Unser Readiness Assessment untersucht systematisch die Reife Ihres Datenqualitätsmanagements und identifiziert konkrete Verbesserungspotenziale, die über rein technische Aspekte hinausgehen und auch organisatorische und prozessuale Dimensionen umfassen.\n\n🔎 Kernaspekte unserer Datenqualitätsbewertung im BCBS-239 Assessment:\n• Framework-Analyse: Bewertung der Vollständigkeit und Wirksamkeit Ihres Datenqualitätsframeworks hinsichtlich definierter Standards, Metriken und Schwellenwerte für Risikodaten.\n• Prozessintegration: Untersuchung, inwieweit Datenqualitätskontrollen in reguläre Datenprozesse integriert sind, statt als nachgelagerte, separate Aktivitäten zu erfolgen.\n• Governance-Wirksamkeit: Evaluierung der Klarheit von Rollen und Verantwortlichkeiten für Datenqualität über den gesamten Datenlebenszyklus hinweg.\n• Metriken und Monitoring: Analyse der Mechanismen zur kontinuierlichen Messung, Überwachung und Berichterstattung über die Datenqualität von Risikodaten.\n\n✅ Konkrete Empfehlungen für ein BCBS-239-konformes Datenqualitätsmanagement:\n• Dimensionsbasierte Qualitätsdefinition: Implementierung eines mehrdimensionalen Qualitätsmodells, das alle relevanten Aspekte (Genauigkeit, Vollständigkeit, Konsistenz, Aktualität, Anpassungsfähigkeit, Granularität) systematisch abdeckt.\n• Automatisierte Qualitätskontrollen: Einführung technischer Lösungen für automatisierte Datenqualitätsprüfungen an kritischen Punkten der Datenverarbeitungskette mit regelbasierten Validierungen.\n• Durchgängiges Qualitäts-Reporting: Entwicklung eines mehrstufigen Berichtswesens für Datenqualität, das sowohl operative als auch Management- und Vorstandsebenen adressiert.\n• Inzidentmanagement: Etablierung eines strukturierten Prozesses für die Erkennung, Analyse, Behebung und Nachverfolgung von Datenqualitätsproblemen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie berücksichtigt ein BCBS-239 Readiness Assessment die zunehmenden Anforderungen an eine integrierte Risikodaten-Governance und welche Best Practices empfiehlt ADVISORI?",
        answer: "Eine effektive Risikodaten-Governance bildet das organisatorische Fundament für nachhaltige BCBS-239 Compliance. Unser Readiness Assessment untersucht detailliert, inwieweit Ihre bestehenden Governance-Strukturen den umfassenden regulatorischen Anforderungen gerecht werden und identifiziert konkrete Verbesserungspotenziale für eine nachhaltige Verankerung der Datenverantwortung in Ihrer Organisation.\n\n🏛️ Zentrale Governance-Aspekte im BCBS-239 Readiness Assessment:\n• Organisationsstruktur: Evaluierung der bestehenden Daten-Governance-Organisation hinsichtlich Abdeckung aller BCBS-239 relevanten Verantwortungsbereiche und Entscheidungsgremien.\n• Rollen und Verantwortlichkeiten: Analyse der Definition, Dokumentation und praktischen Umsetzung von Datenrollen wie Data Owner, Data Steward und Data Custodian im Kontext von Risikodaten.\n• Policies und Standards: Bewertung der Vollständigkeit, Aktualität und Wirksamkeit Ihres Regelwerks für Risikodaten-Management.\n• Entscheidungs- und Eskalationsprozesse: Untersuchung etablierter Mechanismen für die Behandlung von Datenqualitätsproblemen, Änderungsanfragen und Konflikten im Risikodatenmanagement.\n\n📖 Best Practices für eine BCBS-239-konforme Daten-Governance:\n• Integriertes Governance-Modell: Implementierung eines umfassenden Daten-Governance-Modells, das sowohl vertikale (vom Board bis zur operativen Ebene) als auch horizontale (über alle relevanten Fachbereiche) Verantwortlichkeiten klar definiert.\n• Chief Data Officer (CDO): Etablierung einer zentralen Führungsrolle mit direkter Berichtslinie zur Geschäftsleitung, die die übergreifende Verantwortung für die Risikodatenqualität trägt.\n• Data Stewardship Council: Schaffung eines bereichsübergreifenden Gremiums mit Vertretern aller relevanten Fachbereiche, das Standards, Prozesse und Datenqualitätsinitiativen koordiniert.\n• Business Data Ownership: Konsequente Verankerung der Datenverantwortung in den Fachbereichen durch klar definierte Data-Owner-Rollen mit entsprechenden Kompetenzen und Ressourcen."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new Technical Implementation FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ Technical Implementation FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
