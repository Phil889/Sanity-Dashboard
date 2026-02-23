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
    console.log('Updating CIS Controls Kontrolle & Reifegradbewertung page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cis-controls-kontrolle-reifegradbewertung' })
    
    if (!existingDoc) {
      throw new Error('Document "cis-controls-kontrolle-reifegradbewertung" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie unterstützt ADVISORI bei der Entwicklung einer nachhaltigen CIS Controls Governance-Strategie, die auch bei Führungswechseln und organisatorischen Veränderungen Bestand hat?",
        answer: "Nachhaltige Cybersecurity-Governance muss unabhängig von individuellen Führungspersönlichkeiten funktionieren und organisatorische Kontinuität auch bei Veränderungen in der C-Suite gewährleisten. ADVISORI entwickelt institutionalisierte CIS Controls Governance-Frameworks, die strukturelle Resilienz schaffen und eine langfristige Cybersecurity-Exzellenz sicherstellen, unabhängig von personellen Wechseln oder strategischen Neuausrichtungen.\n\n🏗️ Institutionalisierte Governance-Strukturen:\n• Framework-basierte Entscheidungsprozesse: Entwicklung standardisierter, dokumentierter Entscheidungsframeworks für CIS Controls Investments und Risikobewertungen, die unabhängig von individuellen Präferenzen funktionieren.\n• Role-based Responsibility Matrix: Klare Definition von Rollen, Verantwortlichkeiten und Eskalationspfaden für CIS Controls Governance, die strukturelle Kontinuität auch bei Personalwechseln gewährleistet.\n• Succession Planning für Cybersecurity Leadership: Entwicklung von Nachfolgeplänen und Wissenstransfer-Mechanismen für kritische Cybersecurity-Rollen.\n• Board-Level Cybersecurity Competency: Aufbau von Cybersecurity-Expertise auf Board-Ebene für langfristige strategische Kontinuität.\n\n📚 Wissensmanagement und Kontinuität:\n• Institutionelles Cybersecurity-Gedächtnis: Systematische Dokumentation von CIS Controls Entscheidungslogiken, Lessons Learned und strategischen Überlegungen für zukünftige Führungskräfte.\n• Change-resiliente Governance-Prozesse: Design von Governance-Mechanismen, die auch bei organisatorischen Umstrukturierungen oder strategischen Neuausrichtungen funktionsfähig bleiben.\n• Vendor- und Partner-Relationship Continuity: Strukturierung von Cybersecurity-Partnerschaften und Dienstleister-Beziehungen für kontinuierliche Unterstützung unabhängig von internen Veränderungen.\n• Cultural Integration Frameworks: Mechanismen zur Sicherstellung, dass neue Führungskräfte schnell in die etablierte Cybersecurity-Kultur und -Governance integriert werden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche innovativen Ansätze nutzt ADVISORI zur Integration von Künstlicher Intelligenz und Machine Learning in die CIS Controls Reifegradbewertung für prädiktive Cybersecurity-Insights?",
        answer: "Die Integration von Künstlicher Intelligenz und Machine Learning in die CIS Controls Reifegradbewertung ermöglicht einen Paradigmenwechsel von reaktiver zu prädiktiver Cybersecurity-Governance. ADVISORI nutzt fortschrittliche AI/ML-Technologien, um der C-Suite unprecedented Einblicke in zukünftige Cybersecurity-Trends zu geben und proaktive Optimierungsstrategien zu entwickeln.\n\n🤖 AI-gestützte Reifegrad-Analytik:\n• Predictive Maturity Modeling: Einsatz von Machine Learning Algorithmen zur Vorhersage der CIS Controls Reifegrad-Entwicklung basierend auf aktuellen Trends, organisatorischen Faktoren und Branchendynamiken.\n• Automated Gap Detection: KI-basierte Erkennung subtiler Schwachstellen und Verbesserungspotenziale in der CIS Controls Implementierung, die traditionelle Assessments möglicherweise übersehen.\n• Dynamic Risk Scoring: Real-time Anpassung der CIS Controls Risikobewertungen basierend auf aktueller Threat Intelligence, organisatorischen Veränderungen und Umweltfaktoren.\n• Intelligent Prioritization: AI-gestützte Priorisierung von CIS Controls Verbesserungsmaßnahmen basierend auf vorhergesagtem Business Impact und Risikoreduktionspotenzial.\n\n🔮 Prädiktive Cybersecurity-Intelligence:\n• Threat Evolution Prediction: Nutzung von ML-Modellen zur Vorhersage der Evolution von Cyber-Bedrohungen und entsprechender Anpassung der CIS Controls Strategien.\n• Breach Probability Modeling: Statistische Modelle zur Vorhersage der Wahrscheinlichkeit erfolgreicher Cyberangriffe basierend auf der aktuellen CIS Controls Reife.\n• Investment Impact Simulation: AI-basierte Simulation der Auswirkungen verschiedener Cybersecurity-Investitionsszenarien auf die CIS Controls Reife und das Gesamtrisiko.\n• Behavioral Analytics Integration: Einbindung von User and Entity Behavior Analytics (UEBA) in die CIS Controls Bewertung für holistische Risikobewertung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie adressiert ADVISORI die spezifischen Herausforderungen der CIS Controls Bewertung in dezentralen, global verteilten Organisationen mit unterschiedlichen regulatorischen Anforderungen?",
        answer: "Global verteilte Organisationen stehen vor der komplexen Herausforderung, eine kohärente CIS Controls Strategie über multiple Jurisdiktionen, Kulturen und regulatorische Frameworks hinweg zu implementieren. ADVISORI hat spezialisierte Multi-Jurisdictional Governance-Ansätze entwickelt, die lokale Besonderheiten respektieren und gleichzeitig globale Cybersecurity-Konsistenz gewährleisten.\n\n🌍 Global-lokale Governance-Balance:\n• Multi-Jurisdictional Compliance Mapping: Systematische Zuordnung der CIS Controls zu verschiedenen nationalen und regionalen Regulierungsanforderungen (GDPR, CCPA, China Cybersecurity Law, etc.) für optimierte globale Compliance.\n• Federated Security Governance: Entwicklung föderierter Governance-Modelle, die lokale Autonomie mit globalen Standards harmonisieren und regionale Cybersecurity-Teams empowern.\n• Cultural Adaptation Frameworks: Integration kultureller und organisatorischer Besonderheiten verschiedener Regionen in die CIS Controls Implementierung und -Bewertung.\n• Cross-Border Data Protection: Spezialisierte CIS Controls Strategien für grenzüberschreitende Datenflüsse und internationale Datenschutzanforderungen.\n\n🔄 Skalierbare Assessment-Methodiken:\n• Distributed Assessment Orchestration: Koordination simultaner CIS Controls Bewertungen über multiple Standorte hinweg mit standardisierten Methoden und konsistenten Qualitätsstandards.\n• Regional Risk Contextualization: Anpassung der CIS Controls Risikobewertung an regionale Bedrohungslandschaften, geopolitische Risiken und lokale Angriffsmuster.\n• Global Benchmark Harmonization: Entwicklung globaler CIS Controls Benchmarks, die regionale Unterschiede berücksichtigen und trotzdem vergleichbare Insights liefern.\n• Multi-Language Reporting and Communication: Kulturell angepasste Kommunikation von CIS Controls Bewertungsergebnissen für verschiedene regionale Stakeholder-Gruppen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Welche Rolle spielt ADVISORI bei der Vorbereitung auf und Bewältigung von Cybersecurity-Krisen durch proaktive CIS Controls Optimierung und Crisis Response Planning?",
        answer: "Cybersecurity-Krisen sind nicht mehr eine Frage des 'Ob', sondern des 'Wann'. ADVISORI integriert Crisis Preparedness systematisch in die CIS Controls Reifegradbewertung und entwickelt resiliente Organisationsstrukturen, die nicht nur Krisen überstehen, sondern gestärkt daraus hervorgehen. Für die C-Suite bedeutet dies eine fundamental verbesserte Organisationsresilienz und Stakeholder-Confidence.\n\n🚨 Crisis-Ready CIS Controls Assessment:\n• Crisis Scenario Stress Testing: Simulation realistischer Cybersecurity-Krisenszenarien zur Bewertung der CIS Controls Wirksamkeit unter extremen Bedingungen und Identifikation kritischer Schwachstellen.\n• Incident Response Integration: Bewertung der Integration der CIS Controls in Incident Response Prozesse und Optimierung für maximale Krisen-Resilienz.\n• Business Continuity Alignment: Sicherstellung, dass CIS Controls nahtlos in Business Continuity und Disaster Recovery Pläne integriert sind.\n• Stakeholder Communication Preparedness: Vorbereitung von Crisis Communication Strategien, die auf CIS Controls Monitoring-Daten basieren.\n\n⚡ Proaktive Crisis Management Capabilities:\n• Early Warning Systems: Implementierung von AI-gestützten Frühwarnsystemen, die auf CIS Controls Telemetrie basieren und potenzielle Krisen vor ihrer Eskalation identifizieren.\n• Rapid Response Optimization: Optimierung der CIS Controls für beschleunigte Incident Detection, Containment und Recovery Prozesse.\n• Crisis Leadership Preparation: Training und Vorbereitung der C-Suite und Cybersecurity-Leadership für effektive Krisenführung basierend auf CIS Controls Insights.\n• Post-Crisis Learning Integration: Systematische Integration von Lessons Learned aus Cybersecurity-Krisen in die kontinuierliche CIS Controls Verbesserung."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ C-Level FAQs batch 4 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
