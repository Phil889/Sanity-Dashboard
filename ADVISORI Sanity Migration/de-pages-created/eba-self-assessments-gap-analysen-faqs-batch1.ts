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
    console.log('Updating EBA Self-Assessments & Gap Analysen page with C-Level FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eba-self-assessments-gap-analysen' })
    
    if (!existingDoc) {
      throw new Error('Document "eba-self-assessments-gap-analysen" not found')
    }
    
    // Create new C-Level FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können Self-Assessments zu EBA-Richtlinien über die reine Compliance hinaus strategischen Mehrwert für Finanzinstitute schaffen?",
        answer: "Self-Assessments zu EBA-Richtlinien bieten weit mehr als bloße Compliance-Überprüfungen – sie sind strategische Instrumente, die tiefgreifende Transformationen und Wettbewerbsvorteile ermöglichen können. Der wahre Wert liegt in der systematischen Nutzung der gewonnenen Erkenntnisse für übergreifende organisatorische Verbesserungen.\n\n🔍 Strategische Mehrwertdimensionen von Self-Assessments:\n• Organisatorische Reifung: Self-Assessments decken nicht nur regulatorische Lücken auf, sondern liefern wertvolle Einblicke in Ihre Governance-Strukturen, Prozessreife und Kontrollfunktionen, die für eine gezielte Weiterentwicklung genutzt werden können.\n• Risikointelligenz: Die systematische Analyse regulatorischer Anforderungen und Ihrer Umsetzungsstandards schärft das Risikoverständnis in der Organisation und verbessert die Fähigkeit, emergente Risiken frühzeitig zu erkennen und zu adressieren.\n• Priorisierungsintelligenz: Self-Assessments ermöglichen eine fundierte Ressourcenallokation, indem sie kritische von weniger kritischen Handlungsfeldern differenzieren und limitierte Implementierungsressourcen gezielt auf Hochrisikobereiche lenken.\n• Digitale Transformation: Die Anforderungen an Datenqualität, Prozessautomatisierung und Dokumentation in EBA-Richtlinien können als Katalysator für übergreifende Digitalisierungsinitiativen genutzt werden.\n\n💡 Implementierungsstrategien für maximalen Mehrwert:\n• Holistischer Bewertungsansatz: Erweitern Sie regulatorische Self-Assessments um geschäftliche und strategische Dimensionen, um einen ganzheitlichen Überblick über Verbesserungspotenziale zu erhalten.\n• Integration in strategische Planung: Verknüpfen Sie die Ergebnisse der Self-Assessments mit Ihrer strategischen Planung, um regulatorische Anforderungen als Treiber für Innovationen und Verbesserungen zu nutzen.\n• Kulturelle Verankerung: Etablieren Sie eine Kultur der kontinuierlichen Selbstbewertung, die über punktuelle Assessment-Übungen hinausgeht und regelmäßige Reflexion als Teil der Organisationskultur verankert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche methodischen Ansätze haben sich für Gap-Analysen zu komplexen EBA-Richtlinien als besonders effektiv erwiesen?",
        answer: "Die Effektivität von Gap-Analysen für komplexe EBA-Richtlinien hängt maßgeblich von der gewählten Methodik ab. Erfolgreiche Ansätze kombinieren strukturierte Assessment-Frameworks mit tiefgreifendem regulatorischem Verständnis und praxisorientierten Bewertungsprozessen, um aussagekräftige und handlungsorientierte Ergebnisse zu erzielen.\n\n🧩 Bewährte methodische Kernelemente:\n• Anforderungstaxonomie: Entwicklung einer granularen, hierarchischen Struktur regulatorischer Anforderungen, die abstrakte Prinzipien in konkrete, bewertbare Einzelanforderungen übersetzt.\n• Multidimensionale Bewertungsmatrix: Anwendung differenzierter Bewertungsdimensionen wie Umsetzungsgrad, Dokumentationsqualität, Prozessreife und Kontrolleffektivität für ein nuanciertes Gesamtbild.\n• Prozessorientierte Erfassung: Analyse der Anforderungen entlang der relevanten Geschäftsprozesse, um funktionsübergreifende Abhängigkeiten und Schnittstellen zu identifizieren.\n• Evidenzbasierte Validierung: Systematische Sammlung und Bewertung von Nachweisen für die Umsetzung jeder Anforderung, um subjektive Einschätzungen zu objektivieren.\n\n📊 Praktische Implementierungsansätze:\n• Maturity Model Approach: Anwendung von Reifegradmodellen mit definierten Entwicklungsstufen (z.B. Initial, Managed, Defined, Quantitatively Managed, Optimizing) für jede Anforderungskategorie.\n• Controls-Focused Assessment: Bewertung der Effektivität implementierter Kontrollen in Bezug auf die regulatorischen Anforderungen, mit Fokus auf Kontrollentwurf und operative Wirksamkeit.\n• Risk-Based Prioritization: Priorisierung von Anforderungen basierend auf ihrem inhärenten Risiko und den potenziellen Auswirkungen von Compliance-Lücken.\n• Agile Assessment Techniques: Iterative Durchführung von Assessments in kürzeren Zyklen mit kontinuierlicher Verfeinerung der Ergebnisse, besonders effektiv bei evolutionären regulatorischen Entwicklungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir eine nachhaltige Governance für kontinuierliche Self-Assessments etablieren, die über punktuelle Übungen hinausgeht?",
        answer: "Die Etablierung einer nachhaltigen Governance für kontinuierliche Self-Assessments erfordert die systematische Verankerung in der Organisationsstruktur, Prozesslandschaft und Unternehmenskultur. Der Schlüssel liegt in der Transformation von punktuellen Assessment-Übungen zu einem integrierten, kontinuierlichen Verbesserungsprozess mit klaren Verantwortlichkeiten und Kontrollmechanismen.\n\n🏛️ Strukturelle Governance-Elemente:\n• Dedicated Assessment Office: Etablierung einer zentralen Koordinationsfunktion für Self-Assessments mit klarem Mandat, definierter Methodenkompetenz und übergreifender Orchestrierungsverantwortung.\n• Regulatory Board Integration: Einbindung von Self-Assessment-Ergebnissen in die reguläre Berichterstattung an Vorstand und Aufsichtsrat, um Executive Attention und Commitment sicherzustellen.\n• Three Lines of Defense Alignment: Klare Zuordnung von Rollen und Verantwortlichkeiten für Self-Assessments im Rahmen des Three-Lines-of-Defense-Modells, mit operativer Verantwortung in der ersten Linie und unabhängiger Validierung in der zweiten und dritten Linie.\n• Cross-Functional Assessment Teams: Bildung funktionsübergreifender Teams für die Durchführung von Assessments, um Silodenken zu überwinden und ganzheitliche Perspektiven zu fördern.\n\n🔄 Prozessuale Governance-Mechanismen:\n• Assessment Calendar: Implementierung eines rollierenden Assessment-Kalenders mit definierten Zyklen für verschiedene regulatorische Bereiche, der mit dem regulatorischen Änderungsmanagement synchronisiert ist.\n• Integrated Tracking System: Etablierung eines zentralen Systems zur Verfolgung von Findings, Maßnahmen und Umsetzungsfortschritten aus verschiedenen Assessments.\n• Maturity Evolution Framework: Entwicklung eines Frameworks zur kontinuierlichen Reifegradsteigerung mit definierten Zielzuständen und Entwicklungspfaden für jede Compliance-Domäne.\n• Knowledge Management: Systematische Dokumentation und Weitergabe von Lessons Learned und Best Practices aus Self-Assessments über verschiedene Organisationseinheiten hinweg."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche typischen Herausforderungen treten bei der Durchführung von EBA-Gap-Analysen auf und wie können diese effektiv adressiert werden?",
        answer: "Gap-Analysen zu EBA-Richtlinien konfrontieren Finanzinstitute mit charakteristischen Herausforderungen, die sowohl methodischer als auch organisatorischer Natur sind. Die frühzeitige Erkennung und systematische Adressierung dieser Hürden ist entscheidend für den Erfolg und die Aussagekraft des Assessment-Prozesses.\n\n🧐 Typische Herausforderungen und Lösungsansätze:\n• Interpretationsspielräume regulatorischer Anforderungen: EBA-Richtlinien enthalten häufig prinzipienbasierte Anforderungen mit erheblichem Interpretationsspielraum, was zu inkonsistenten Bewertungen führen kann.\n  ↳ Lösung: Entwicklung eines detaillierten Interpretationsleitfadens mit konkreten Beispielen und Bewertungskriterien; frühzeitige Abstimmung mit Aufsichtsbehörden bei Unklarheiten; Einbeziehung externer Expertenperspektiven zur Validierung.\n\n• Fragmentierte Verantwortlichkeiten: Regulatorische Anforderungen betreffen oft multiple Organisationseinheiten mit unterschiedlichen Zuständigkeiten, was eine konsistente Bewertung erschwert.\n  ↳ Lösung: Etablierung cross-funktionaler Assessment-Teams; klare Dokumentation von End-to-End-Prozessen und Verantwortlichkeiten; Entwicklung einer RACI-Matrix für den Assessment-Prozess.\n\n• Evidenz- und Nachweismanagement: Die Sammlung, Bewertung und Verwaltung von Nachweisen für die Umsetzung regulatorischer Anforderungen ist oft aufwändig und unstrukturiert.\n  ↳ Lösung: Implementierung eines zentralen Evidence Management Systems; Standardisierung von Nachweisformaten und -anforderungen; Entwicklung klarer Kriterien für ausreichende Evidenz.\n\n🛠️ Methodische Erfolgsfaktoren:\n• Realistische Priorisierung: Fokussierung auf die kritischsten Bereiche mit höchstem Risikopotenzial statt gleichzeitiger Adressierung aller Anforderungen.\n• Iterativer Ansatz: Schrittweise Verfeinerung der Bewertungen durch mehrere Assessment-Zyklen mit steigender Detailtiefe.\n• Stakeholder-Einbindung: Frühzeitige und kontinuierliche Einbeziehung aller relevanten Stakeholder, um Ownership und Akzeptanz zu fördern."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ EBA Self-Assessments & Gap Analysen C-Level FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
