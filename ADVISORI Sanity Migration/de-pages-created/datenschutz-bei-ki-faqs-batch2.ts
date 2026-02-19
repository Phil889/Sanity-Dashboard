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
    console.log('Updating Datenschutz bei KI page with Technical Implementation FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'datenschutz-bei-ki' })
    
    if (!existingDoc) {
      throw new Error('Document "datenschutz-bei-ki" not found')
    }
    
    // Create new Technical Implementation FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie implementiert ADVISORI konkret Privacy-by-Design in KI-Architekturen und welche technischen Maßnahmen gewährleisten DSGVO-Compliance von der ersten Codezeile an?',
        answer: "Privacy-by-Design in KI-Architekturen erfordert eine fundamentale Neugestaltung traditioneller AI-Entwicklungsansätze. ADVISORI implementiert datenschutzfreundliche KI-Systeme durch eine Kombination aus technischen Schutzmaßnahmen, architektonischen Designprinzipien und prozessualen Safeguards, die Datenschutz als inhärente Systemeigenschaft verankern, nicht als nachträgliche Ergänzung.\n\n🔧 Technische Privacy-by-Design-Implementierung:\n• Datenschutzfreundliche Systemarchitekturen: Entwicklung modularer KI-Systeme mit eingebauten Datenschutzkontrollen, die Datenminimierung, Zweckbindung und Speicherbegrenzung auf Architekturebene durchsetzen.\n• Differential Privacy Integration: Implementierung mathematischer Datenschutzgarantien direkt in KI-Modelle, die statistisch nützliche Ergebnisse liefern, während individuelle Datenpunkte geschützt bleiben.\n• Federated Learning Architekturen: Entwicklung dezentraler KI-Systeme, die Modelltraining ohne zentrale Datensammlung ermöglichen und lokale Datensouveränität wahren.\n• Homomorphic Encryption: Integration verschlüsselter Berechnungen, die KI-Operationen auf verschlüsselten Daten ermöglichen, ohne diese jemals zu entschlüsseln.\n\n🛡️ ADVISORI's Technical Privacy Framework:\n• Secure Multi-Party Computation: Implementierung kryptographischer Protokolle, die gemeinsame KI-Berechnungen zwischen Parteien ermöglichen, ohne sensible Daten preiszugeben.\n• Privacy-Preserving Data Synthesis: Entwicklung synthetischer Datengenerierung, die statistische Eigenschaften realer Daten bewahrt, ohne individuelle Privatsphäre zu gefährden.\n• Automated Privacy Controls: Integration automatisierter Datenschutzkontrollen in CI/CD-Pipelines, die Privacy-Compliance bei jeder Code-Änderung validieren.\n• Zero-Knowledge AI Systems: Entwicklung von KI-Systemen, die Erkenntnisse liefern, ohne zugrunde liegende Daten oder Modellparameter preiszugeben."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche spezifischen Anonymisierungs- und Pseudonymisierungstechniken setzt ADVISORI für KI-Trainingsdaten ein und wie wird dabei die Datenqualität für effektives Machine Learning erhalten?',
        answer: "Die Anonymisierung und Pseudonymisierung von KI-Trainingsdaten ist eine hochkomplexe Aufgabe, die sowohl rigorosen Datenschutz als auch die Erhaltung der für Machine Learning erforderlichen Datenqualität gewährleisten muss. ADVISORI entwickelt maßgeschneiderte Anonymisierungsstrategien, die modernste kryptographische und statistische Techniken kombinieren, um optimale Balance zwischen Datenschutz und AI-Performance zu erreichen.\n\n🔒 Fortschrittliche Anonymisierungstechniken:\n• K-Anonymity und L-Diversity: Implementierung statistischer Anonymisierungsverfahren, die sicherstellen, dass individuelle Datenpunkte in Gruppen ähnlicher Einträge verborgen bleiben, während Datenverteilungen für ML erhalten bleiben.\n• Differential Privacy mit Adaptive Noise: Anwendung mathematisch bewiesener Datenschutzgarantien durch kontrollierte Rauschzugabe, die Modellgenauigkeit maximiert und gleichzeitig individuelle Privatsphäre schützt.\n• Synthetic Data Generation: Entwicklung generativer Modelle, die synthetische Trainingsdaten erstellen, die statistische Eigenschaften realer Daten bewahren, ohne individuelle Informationen zu enthalten.\n• Advanced Pseudonymization: Implementierung kryptographischer Pseudonymisierungsverfahren mit Format-preserving Encryption, die Datenstrukturen für ML-Algorithmen erhalten.\n\n📊 Datenqualitäts-Erhaltungsstrategien:\n• Utility-Privacy Trade-off Optimization: Entwicklung algorithmischer Ansätze zur Optimierung des Verhältnisses zwischen Datenschutz und ML-Performance durch intelligente Parameter-Tuning.\n• Domain-Specific Anonymization: Anpassung von Anonymisierungstechniken an spezifische Anwendungsdomänen und ML-Algorithmen für maximale Datennutzbarkeit.\n• Privacy-Preserving Feature Engineering: Entwicklung von Feature-Engineering-Techniken, die datenschutzfreundliche Datenrepräsentationen für optimale ML-Performance schaffen.\n• Continuous Quality Monitoring: Implementierung von Systemen zur kontinuierlichen Überwachung der Auswirkungen von Anonymisierungsmaßnahmen auf Modellleistung und -genauigkeit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie gewährleistet ADVISORI Transparenz und Erklärbarkeit in KI-Systemen für DSGVO-Compliance und welche Explainable AI-Techniken werden für verschiedene Algorithmustypen eingesetzt?',
        answer: "Transparenz und Erklärbarkeit in KI-Systemen sind fundamentale DSGVO-Anforderungen, die weit über technische Dokumentation hinausgehen. ADVISORI entwickelt umfassende Explainable AI-Frameworks, die nicht nur regulatorische Compliance gewährleisten, sondern auch Vertrauen schaffen und Geschäftsentscheidungen durch nachvollziehbare AI-Insights unterstützen.\n\n🔍 Explainable AI-Implementierungsstrategien:\n• Model-Agnostic Explanation Methods: Entwicklung universeller Erklärungsansätze wie LIME und SHAP, die für verschiedene ML-Algorithmen funktionieren und lokale sowie globale Modellinterpretationen ermöglichen.\n• Interpretable Model Architectures: Design inhärent interpretierbarer KI-Modelle wie Decision Trees, Linear Models und Rule-based Systems für Anwendungen mit hohen Transparenzanforderungen.\n• Attention Mechanisms und Saliency Maps: Implementierung visueller Erklärungstechniken für Deep Learning-Modelle, die zeigen, welche Eingabebereiche für Entscheidungen relevant sind.\n• Counterfactual Explanations: Entwicklung von Erklärungsansätzen, die zeigen, wie sich Eingaben ändern müssten, um unterschiedliche AI-Entscheidungen zu erzielen.\n\n📋 DSGVO-konforme Transparenz-Frameworks:\n• Automated Documentation Generation: Entwicklung von Systemen zur automatischen Generierung verständlicher Dokumentation von AI-Entscheidungsprozessen für Betroffenenrechte.\n• Multi-Level Explanation Systems: Implementierung gestufter Erklärungsansätze, die technische Details für Experten und verständliche Zusammenfassungen für Endnutzer bereitstellen.\n• Algorithmic Audit Trails: Entwicklung umfassender Logging- und Audit-Systeme, die jeden Schritt des AI-Entscheidungsprozesses nachvollziehbar dokumentieren.\n• Interactive Explanation Interfaces: Schaffung benutzerfreundlicher Interfaces, die es Betroffenen ermöglichen, AI-Entscheidungen zu verstehen und zu hinterfragen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche technischen Lösungen bietet ADVISORI für die sichere internationale Datenübertragung in globalen KI-Systemen und wie wird Cross-Border AI Data Governance implementiert?',
        answer: "Internationale Datenübertragung in KI-Systemen stellt komplexe technische und rechtliche Herausforderungen dar, die innovative Lösungsansätze erfordern. ADVISORI entwickelt fortschrittliche Cross-Border AI Data Governance-Systeme, die globale KI-Operationen ermöglichen, während sie gleichzeitig lokale Datenschutzgesetze respektieren und technische Sicherheitsstandards erfüllen.\n\n🌐 Cross-Border Data Transfer Technologies:\n• Federated Learning Infrastructures: Implementierung dezentraler KI-Architekturen, die Modelltraining über geografische Grenzen hinweg ermöglichen, ohne dass Rohdaten ihre Ursprungsregion verlassen müssen.\n• Secure Multi-Party Computation: Entwicklung kryptographischer Protokolle, die gemeinsame KI-Berechnungen zwischen internationalen Partnern ermöglichen, ohne sensible Daten preiszugeben.\n• Edge AI und Local Processing: Implementierung von Edge-Computing-Lösungen, die KI-Verarbeitung lokal durchführen und nur aggregierte, anonymisierte Ergebnisse übertragen.\n• Homomorphic Encryption für Global AI: Entwicklung verschlüsselter Berechnungssysteme, die internationale KI-Operationen auf verschlüsselten Daten ermöglichen.\n\n🔐 Technical Compliance Implementation:\n• Automated Data Residency Controls: Entwicklung von Systemen zur automatischen Durchsetzung von Data Residency-Anforderungen basierend auf Datenklassifikation und geografischen Beschränkungen.\n• Dynamic Consent Management: Implementierung technischer Systeme zur Verwaltung und Durchsetzung von Einwilligungen über internationale Grenzen hinweg.\n• Jurisdiction-Aware AI Systems: Entwicklung von KI-Systemen, die automatisch lokale Datenschutzanforderungen erkennen und entsprechende Schutzmaßnahmen aktivieren.\n• Cross-Border Audit und Monitoring: Implementierung umfassender Überwachungssysteme, die internationale Datenflüsse in KI-Systemen verfolgen und Compliance-Verstöße in Echtzeit erkennen."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new Technical Implementation FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ Technical Implementation FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
