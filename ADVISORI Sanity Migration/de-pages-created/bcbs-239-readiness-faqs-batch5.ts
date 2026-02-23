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
    console.log('Updating BCBS-239 Readiness page with Best Practices FAQs batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'bcbs-239-readiness' })
    
    if (!existingDoc) {
      throw new Error('Document "bcbs-239-readiness" not found')
    }
    
    // Create new Best Practices FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche kritischen Erfolgsfaktoren hat ADVISORI bei erfolgreichen BCBS-239 Implementierungen identifiziert und wie werden diese im Readiness Assessment berücksichtigt?",
        answer: "Basierend auf unserer umfangreichen Erfahrung mit BCBS-239 Projekten haben wir zentrale Erfolgsfaktoren identifiziert, die den Unterschied zwischen erfolgreichen und problematischen Implementierungen ausmachen. Unser Readiness Assessment evaluiert systematisch diese kritischen Erfolgsfaktoren und liefert konkrete Handlungsempfehlungen zur Optimierung Ihrer Implementierungsstrategie.\n\n🌟 Kritische Erfolgsfaktoren für BCBS-239 Implementierungen:\n• Führungskräfte-Commitment: Der Grad des aktiven Engagements und der Unterstützung durch die Geschäftsleitung und obere Führungsebenen ist entscheidend für die Überwindung organisatorischer Hürden.\n• Business-IT-Alignment: Die enge Zusammenarbeit zwischen Fachbereichen und IT-Organisation über alle Projektphasen hinweg ist essentiell für die Entwicklung praxistauglicher Lösungen.\n• Ganzheitliches Governance-Framework: Ein umfassendes Governance-Modell mit klaren Verantwortlichkeiten und Entscheidungsprozessen bildet das Fundament für nachhaltige Compliance.\n• Ausgewogener Scope: Die richtige Balance zwischen technischen, prozessualen und organisatorischen Maßnahmen bestimmt die Wirksamkeit der Implementierung.\n\n📋 Assessment-Integration dieser Erfolgsfaktoren:\n• Stakeholder-Analyse: Systematische Bewertung des Engagements und der Ausrichtung relevanter Stakeholder auf allen Organisationsebenen.\n• Organisatorische Reifegradmessung: Evaluation der vorhandenen Strukturen, Prozesse und Fähigkeiten zur Unterstützung der BCBS-239 Implementierung.\n• Change-Readiness-Bewertung: Analyse der Veränderungsbereitschaft und -fähigkeit Ihrer Organisation in Bezug auf die notwendigen Transformationen.\n• Implementierungsrisiken: Frühzeitige Identifikation potenzieller Stolpersteine und Entwicklung präventiver Maßnahmen zur Risikominimierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie unterstützt ADVISORI bei der Entwicklung einer risikodatenbasierten Unternehmenskultur als Grundlage für nachhaltige BCBS-239 Compliance?",
        answer: "Eine nachhaltige BCBS-239 Compliance erfordert mehr als technische Lösungen und definierte Prozesse – sie basiert fundamental auf einer risikodatenorientierten Unternehmenskultur. Unser Readiness Assessment berücksichtigt explizit kulturelle und Change-Management-Aspekte und entwickelt Maßnahmen zur Förderung einer Datenqualitätskultur in Ihrer Organisation.\n\n🧠 Kulturelle Dimensionen im BCBS-239 Readiness Assessment:\n• Datenbewusstsein: Evaluation des Verständnisses für die Bedeutung qualitativ hochwertiger Risikodaten auf allen Organisationsebenen, von der Datenerfassung bis zur Führungsebene.\n• Verantwortungskultur: Bewertung der Akzeptanz und Wahrnehmung von Datenverantwortung in den Fachbereichen und IT-Teams.\n• Kollaborationsstrukturen: Analyse bereichsübergreifender Zusammenarbeit und Kommunikation in Bezug auf Risikodaten und Datenqualität.\n• Fehlerkultur: Untersuchung des Umgangs mit Datenqualitätsproblemen und der Bereitschaft zur kontinuierlichen Verbesserung.\n\n🌱 Maßnahmen zur Entwicklung einer risikodatenbasierten Kultur:\n• Executive Sponsorship Programme: Konzeption gezielter Maßnahmen zur Aktivierung und Einbindung von Führungskräften als sichtbare Champions für Datenqualität.\n• Awareness & Training: Entwicklung von Schulungs- und Sensibilisierungsprogrammen, die auf verschiedene Zielgruppen und deren spezifische Rollen im Risikodatenmanagement zugeschnitten sind.\n• Community Building: Empfehlungen für die Etablierung von Communities of Practice oder Expertennetzwerken für den kontinuierlichen Austausch zu Datenqualitätsthemen.\n• Anreizsysteme: Analyse und Empfehlungen zur Integration von Datenqualitätsaspekten in Leistungsbewertungs- und Anreizsysteme, um die gewünschten Verhaltensweisen zu fördern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie berücksichtigt ADVISORI im BCBS-239 Readiness Assessment die Anforderungen an Datenmodellierung und semantische Konsistenz für Risikodaten?",
        answer: "Konsistente Datenmodelle und eine einheitliche semantische Interpretation von Risikodaten sind fundamentale Voraussetzungen für eine erfolgreiche BCBS-239 Compliance. Unser Readiness Assessment analysiert systematisch Ihre bestehenden Datenmodellierungspraktiken und identifiziert Optimierungspotenziale für eine harmonisierte und semantisch kohärente Risikodatenlandschaft.\n\n📊 Schlüsselaspekte der Datenmodellanalyse im Assessment:\n• Semantische Konsistenz: Bewertung der Einheitlichkeit von Risikodatendefinitionen, Taxonomien und Klassifikationen über verschiedene Datenquellen und Systeme hinweg.\n• Datenmodellgranularität: Analyse der Detailtiefe und Dimensionalität Ihrer Datenmodelle in Bezug auf die regulatorischen Anforderungen und geschäftlichen Analysebedürfnisse.\n• Metadatenmanagement: Evaluation der bestehenden Praktiken und Tools zur Verwaltung von Metadaten für Risikodaten.\n• Modellierungsgovernance: Bewertung der Prozesse und Verantwortlichkeiten für die Entwicklung, Genehmigung und Änderung von Datenmodellen.\n\n🔄 Empfehlungen für optimierte Datenmodellierung:\n• Enterprise Data Model: Entwicklung eines unternehmensweiten Referenzdatenmodells für Risikodaten, das als Single Source of Truth für semantische Definitionen dient.\n• Geschäftsglossare: Etablierung eines zentralen Business-Glossars, das einheitliche Definitionen für Risikobegriffe, -metriken und -dimensionen bereitstellt.\n• Semantische Schicht: Implementierung einer semantischen Layer-Architektur, die heterogene Datenquellen über konsistente Begriffsmodelle integriert.\n• Modellierungsstandards: Einführung verbindlicher Standards und Best Practices für die Datenmodellierung, die sowohl technische als auch fachliche Aspekte berücksichtigen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie unterstützt ADVISORIs BCBS-239 Readiness Assessment Finanzinstitute beim Übergang von reaktiver Compliance zu proaktiver Risikosteuerung?",
        answer: "Die BCBS-239 Richtlinien bieten eine einzigartige Gelegenheit, über die bloße regulatorische Compliance hinauszugehen und eine fundamentale Transformation des Risikodatenmanagements einzuleiten. Unser Readiness Assessment fokussiert nicht nur auf Compliance-Anforderungen, sondern identifiziert gezielt Potenziale, um Risikodaten als strategischen Wert für eine verbesserte Risikosteuerung zu nutzen.\n\n🔁 Wandel von reaktiver Compliance zu strategischem Mehrwert:\n• Strategische Neupositionierung: Bewertung, inwieweit Ihr aktueller BCBS-239 Ansatz als reine Compliance-Übung oder als strategische Transformation positioniert ist.\n• Business-Value-Identifikation: Systematische Analyse von Geschäftsvorteilen jenseits der Compliance, wie verbesserte Entscheidungsfindung, effizientere Kapitalallokation und präzisere Risikovorhersagen.\n• Risikodatenkapitalisierung: Evaluation von Möglichkeiten, Investitionen in BCBS-239 für weitergehende Daten- und Analyseinitiativen zu nutzen.\n• Innovation Readiness: Bewertung Ihrer Fähigkeit, innovative Risikosteuerungsansätze auf Basis verbesserter Datenfundamente zu entwickeln.\n\n🚀 ADVISORIs Transformationsansatz im Assessment:\n• Value-Case-Entwicklung: Identifikation und Quantifizierung spezifischer Geschäftsvorteile, die durch verbesserte Risikodatenaggregation und -berichterstattung realisiert werden können.\n• Capability-Building-Strategie: Entwicklung eines Fahrplans für den kontinuierlichen Aufbau fortschrittlicher Risikodatenanalyse- und Steuerungsfähigkeiten.\n• Integrierte Roadmap: Gestaltung einer integrierten Umsetzungsplanung, die sowohl Compliance-Anforderungen erfüllt als auch strategische Geschäftsvorteile realisiert.\n• Kulturelle Transformation: Empfehlungen zur Entwicklung einer datengetriebenen Risikokultur, die proaktive Identifikation und Management aufkommender Risiken fördert."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new Best Practices FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ Best Practices FAQs batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
