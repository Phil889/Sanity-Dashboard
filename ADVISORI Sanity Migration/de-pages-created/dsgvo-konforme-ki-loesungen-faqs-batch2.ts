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
    console.log('Updating DSGVO-konforme KI-Lösungen page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dsgvo-konforme-ki-loesungen' })
    
    if (!existingDoc) {
      throw new Error('Document "dsgvo-konforme-ki-loesungen" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche fortschrittlichen Technologien setzt ADVISORI für Privacy-Preserving Machine Learning ein und wie gewährleisten diese maximalen Datenschutz ohne Performance-Verluste?',
        answer: "Privacy-Preserving Machine Learning repräsentiert die Zukunft der datenschutzkonformen KI-Entwicklung und ermöglicht es Unternehmen, von den Vorteilen der Künstlichen Intelligenz zu profitieren, ohne dabei personenbezogene Daten zu gefährden. ADVISORI implementiert cutting-edge Technologien, die höchste Datenschutz-Standards mit optimaler AI-Performance verbinden und neue Möglichkeiten für sichere KI-Innovation eröffnen.\n\n🔬 Technologische Innovation für datenschutzkonforme KI:\n• Differential Privacy: Implementierung mathematisch beweisbarer Datenschutz-Garantien, die es ermöglichen, aussagekräftige Erkenntnisse aus Daten zu gewinnen, ohne individuelle Datenpunkte preiszugeben oder zu identifizieren.\n• Federated Learning: Entwicklung dezentraler KI-Trainingsverfahren, bei denen Modelle direkt auf den Endgeräten trainiert werden, ohne dass sensible Daten jemals das Gerät verlassen oder zentral gesammelt werden.\n• Homomorphic Encryption: Einsatz von Verschlüsselungstechnologien, die Berechnungen auf verschlüsselten Daten ermöglichen, sodass KI-Operationen durchgeführt werden können, ohne die Daten jemals zu entschlüsseln.\n• Secure Multi-Party Computation: Implementierung von Protokollen, die es mehreren Parteien ermöglichen, gemeinsam KI-Modelle zu trainieren, ohne ihre jeweiligen Daten preiszugeben.\n\n⚡ Performance-Optimierung ohne Datenschutz-Kompromisse:\n• Adaptive Privacy Budgets: Intelligente Verwaltung von Privacy-Budgets für optimale Balance zwischen Datenschutz und Modell-Genauigkeit durch dynamische Anpassung der Noise-Parameter.\n• Efficient Cryptographic Protocols: Optimierung kryptographischer Verfahren für minimale Latenz und maximalen Durchsatz bei gleichzeitiger Aufrechterhaltung höchster Sicherheitsstandards.\n• Hardware-Acceleration: Nutzung spezialisierter Hardware wie Trusted Execution Environments und Privacy-optimierte Chips für beschleunigte Privacy-Preserving Computations.\n• Hybrid Architectures: Entwicklung intelligenter Hybrid-Ansätze, die verschiedene Privacy-Preserving Technologien optimal kombinieren für maximale Effizienz und Datenschutz."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Wie implementiert ADVISORI Datenschutz-Folgenabschätzungen für KI-Systeme und welche spezifischen DSGVO-Artikel werden dabei berücksichtigt?',
        answer: "Die Datenschutz-Folgenabschätzung für KI-Systeme erfordert eine spezialisierte Herangehensweise, die die einzigartigen Risiken und Komplexitäten von AI-Technologien berücksichtigt. ADVISORI entwickelt maßgeschneiderte DSFA-Frameworks für KI, die alle relevanten DSGVO-Artikel systematisch adressieren und eine umfassende Risikobewertung für AI-Projekte gewährleisten.\n\n📋 Systematische DSFA-Implementierung für KI-Systeme:\n• Artikel 35 DSGVO Compliance: Vollständige Umsetzung der DSFA-Anforderungen mit speziellem Fokus auf KI-spezifische Risiken wie automatisierte Entscheidungsfindung, Profiling und potenzielle Diskriminierung.\n• KI-spezifische Risikobewertung: Identifikation und Bewertung einzigartiger AI-Risiken wie Bias, Explainability-Herausforderungen, Datenqualitätsprobleme und unbeabsichtigte Korrelationen.\n• Stakeholder-Integration: Systematische Einbindung aller relevanten Stakeholder, einschließlich Datenschutzbeauftragten, KI-Entwicklern, Rechtsabteilung und betroffenen Personen.\n• Kontinuierliche Überwachung: Etablierung von Prozessen für die laufende Überwachung und Aktualisierung der DSFA während des gesamten KI-Lebenszyklus.\n\n⚖️ DSGVO-Artikel-spezifische Berücksichtigung:\n• Artikel 22 (Automatisierte Entscheidungsfindung): Detaillierte Analyse der Auswirkungen automatisierter KI-Entscheidungen auf betroffene Personen mit entsprechenden Schutzmaßnahmen und Widerspruchsrechten.\n• Artikel 25 (Privacy-by-Design): Integration von Datenschutz-Prinzipien in die KI-Architektur von Beginn an, einschließlich Datenminimierung und Zweckbindung.\n• Artikel 5 (Grundsätze der Verarbeitung): Sicherstellung der Einhaltung aller Verarbeitungsgrundsätze wie Rechtmäßigkeit, Transparenz, Datenminimierung und Speicherbegrenzung.\n• Artikel 6 (Rechtsgrundlagen): Präzise Identifikation und Dokumentation der rechtlichen Grundlagen für KI-Datenverarbeitung mit besonderem Fokus auf berechtigte Interessen und Einwilligung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Welche Rolle spielt Explainable AI in der DSGVO-Compliance und wie gewährleistet ADVISORI Transparenz und Nachvollziehbarkeit in KI-Entscheidungen?',
        answer: "Explainable AI ist ein fundamentaler Baustein für DSGVO-konforme KI-Systeme und ermöglicht die Erfüllung der Transparenz- und Auskunftspflichten der DSGVO. ADVISORI entwickelt XAI-Lösungen, die nicht nur rechtliche Anforderungen erfüllen, sondern auch Vertrauen schaffen und die Akzeptanz von KI-Systemen bei Nutzern und Stakeholdern erhöhen.\n\n🔍 Transparenz als rechtliche und strategische Notwendigkeit:\n• DSGVO Artikel 13/14 Compliance: Bereitstellung verständlicher Informationen über die Funktionsweise von KI-Systemen, verwendete Datenquellen und Entscheidungslogik für betroffene Personen.\n• Artikel 15 Auskunftsrecht: Technische Implementierung von Systemen, die es betroffenen Personen ermöglichen, Informationen über automatisierte Entscheidungen und deren Grundlagen zu erhalten.\n• Artikel 22 Schutzmaßnahmen: Bereitstellung von Erklärungen für automatisierte Entscheidungen als wesentliche Schutzmaßnahme für betroffene Personen.\n• Vertrauensaufbau: Transparente KI-Systeme schaffen Vertrauen bei Kunden und Partnern und können als Wettbewerbsvorteil positioniert werden.\n\n🧠 ADVISORI's XAI-Excellence-Framework:\n• Multi-Level Explanations: Entwicklung von Erklärungsansätzen auf verschiedenen Ebenen, von technischen Details für Experten bis hin zu verständlichen Erklärungen für Endnutzer.\n• Real-Time Explainability: Implementierung von Systemen, die Erklärungen in Echtzeit generieren können, ohne die Performance der KI-Anwendung zu beeinträchtigen.\n• Counterfactual Explanations: Bereitstellung von Erklärungen, die zeigen, welche Änderungen in den Eingabedaten zu anderen Entscheidungen geführt hätten.\n• Audit-Trail Integration: Vollständige Dokumentation aller KI-Entscheidungen mit nachvollziehbaren Erklärungen für Compliance-Audits und regulatorische Überprüfungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie adressiert ADVISORI die Herausforderungen der internationalen Datentransfers bei globalen KI-Projekten und welche Compliance-Strategien werden implementiert?',
        answer: "Internationale Datentransfers bei KI-Projekten erfordern eine komplexe Navigation durch verschiedene Datenschutzregime und regulatorische Anforderungen. ADVISORI entwickelt globale Compliance-Strategien, die es Unternehmen ermöglichen, KI-Projekte international zu skalieren, während alle relevanten Datenschutzbestimmungen eingehalten werden.\n\n🌍 Globale KI-Compliance-Strategien:\n• Angemessenheitsbeschlüsse-Optimierung: Strategische Nutzung von EU-Angemessenheitsbeschlüssen für vereinfachte Datentransfers in Länder mit anerkannt angemessenem Datenschutzniveau.\n• Standardvertragsklauseln für KI: Anpassung und Implementierung der neuen EU-Standardvertragsklauseln mit spezifischen Zusätzen für KI-Datenverarbeitung und Transfer Impact Assessments.\n• Binding Corporate Rules: Entwicklung konzernweiter verbindlicher Datenschutzregeln für multinationale Unternehmen mit globalen KI-Initiativen.\n• Data Localization Strategies: Implementierung von Datenresidenz-Lösungen für Märkte mit strikten Lokalisierungsanforderungen ohne Beeinträchtigung der KI-Performance.\n\n🔒 Technische Lösungen für sichere internationale KI:\n• Cross-Border Federated Learning: Implementierung von Federated Learning Architekturen, die es ermöglichen, globale KI-Modelle zu trainieren, ohne Daten über Grenzen zu transferieren.\n• Encrypted Data Processing: Einsatz von Verschlüsselungstechnologien für sichere grenzüberschreitende KI-Berechnungen mit End-to-End-Verschlüsselung.\n• Regional Data Hubs: Strategische Implementierung regionaler Datenverarbeitungszentren für optimale Balance zwischen Performance und Compliance.\n• Privacy-Preserving Analytics: Entwicklung von Analyseverfahren, die Erkenntnisse aus internationalen Datenquellen gewinnen, ohne personenbezogene Daten zu transferieren."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
