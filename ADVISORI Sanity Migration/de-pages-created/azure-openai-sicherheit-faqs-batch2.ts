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
    console.log('Updating Azure OpenAI Sicherheit page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'azure-openai-sicherheit' })
    
    if (!existingDoc) {
      throw new Error('Document "azure-openai-sicherheit" not found')
    }
    
    // Create new FAQs focusing on DSGVO compliance and data protection
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie gewährleistet ADVISORI DSGVO-Compliance bei Azure OpenAI Implementierungen und welche spezifischen Herausforderungen entstehen durch die Cloud-basierte AI-Verarbeitung personenbezogener Daten?",
        answer: "DSGVO-Compliance bei Azure OpenAI erfordert einen ganzheitlichen Ansatz, der weit über technische Konfigurationen hinausgeht. ADVISORI entwickelt umfassende Datenschutz-Frameworks, die Privacy-by-Design-Prinzipien mit Cloud-AI-Innovationen verbinden und dabei höchste Rechtssicherheit gewährleisten. Unser Ansatz transformiert Compliance-Anforderungen in strategische Wettbewerbsvorteile.\n\n🔒 DSGVO-spezifische Herausforderungen bei Cloud-AI:\n• Datenübertragung und -verarbeitung: Azure OpenAI verarbeitet Daten in Microsoft-Rechenzentren, was spezielle Aufmerksamkeit für Datenübertragungsmechanismen und Verarbeitungsverträge erfordert.\n• Zweckbindung und Datenminimierung: AI-Systeme tendieren dazu, große Datenmengen zu verarbeiten, was eine präzise Definition von Verarbeitungszwecken und Datenminimierungsstrategien erfordert.\n• Betroffenenrechte in AI-Kontexten: Auskunfts-, Berichtigungs- und Löschungsrechte müssen auch in komplexen AI-Verarbeitungsumgebungen gewährleistet werden.\n• Transparenz und Erklärbarkeit: DSGVO-konforme Dokumentation von AI-Entscheidungsprozessen und deren Auswirkungen auf betroffene Personen.\n\n🛡️ ADVISORI's DSGVO-Excellence-Framework:\n• Privacy-by-Design-Architekturen: Integration von Datenschutzprinzipien in jede Ebene der Azure OpenAI Implementierung, von der Netzwerkarchitektur bis zur Anwendungslogik.\n• Rechtssichere Verarbeitungsverträge: Entwicklung und Verhandlung von Auftragsverarbeitungsverträgen mit Microsoft, die alle DSGVO-Anforderungen erfüllen und rechtliche Klarheit schaffen.\n• Automated-Compliance-Monitoring: Implementierung von Systemen zur kontinuierlichen Überwachung der DSGVO-Compliance und automatischen Erkennung von Compliance-Abweichungen.\n• Betroffenenrechte-Management: Etablierung von Prozessen und Technologien zur effizienten Bearbeitung von Betroffenenanfragen in AI-Umgebungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche spezifischen Datenschutz-Risiken entstehen durch die Nutzung von Azure OpenAI für Unternehmensdaten und wie minimiert ADVISORI diese Risiken durch technische und organisatorische Maßnahmen?",
        answer: "Die Nutzung von Azure OpenAI für Unternehmensdaten birgt einzigartige Datenschutz-Herausforderungen, die sowohl technische als auch rechtliche Dimensionen umfassen. ADVISORI identifiziert und adressiert diese Risiken durch einen mehrstufigen Ansatz, der präventive Maßnahmen, kontinuierliche Überwachung und proaktive Risikominimierung kombiniert.\n\n⚠️ Spezifische Datenschutz-Risiken bei Azure OpenAI:\n• Unbeabsichtigte Datenexposition: AI-Modelle können sensible Informationen in Antworten oder Logs preisgeben, die nicht für die Verarbeitung vorgesehen waren.\n• Model-Training-Kontamination: Risiko, dass Unternehmensdaten unbeabsichtigt in Modell-Training-Prozesse einfließen und dadurch anderen Nutzern zugänglich werden.\n• Cross-Tenant-Data-Leakage: Potenzielle Datenleckagen zwischen verschiedenen Azure-Mandanten oder Anwendungen innerhalb der Cloud-Infrastruktur.\n• Inference-basierte Datenrekonstruktion: Möglichkeit, dass Angreifer durch geschickte Anfragen Rückschlüsse auf ursprüngliche Trainingsdaten oder verarbeitete Informationen ziehen.\n\n🔐 ADVISORI's Risk-Mitigation-Strategie:\n• Data-Classification-and-Handling: Implementierung granularer Datenklassifizierungssysteme, die verschiedene Sensitivitätsstufen definieren und entsprechende Verarbeitungsregeln durchsetzen.\n• Secure-Enclave-Architectures: Nutzung von Azure Confidential Computing und anderen Isolation-Technologien zur Schaffung sicherer Verarbeitungsumgebungen.\n• Real-time-Data-Loss-Prevention: Deployment fortschrittlicher DLP-Systeme, die sensible Daten in Echtzeit identifizieren und deren unautorisierten Transfer verhindern.\n• Audit-Trail-Excellence: Umfassende Protokollierung aller Datenverarbeitungsaktivitäten mit forensischen Analysefähigkeiten für Compliance-Nachweise und Incident-Response."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie stellt ADVISORI sicher, dass Azure OpenAI Implementierungen den Anforderungen der EU-KI-Verordnung entsprechen und welche proaktiven Maßnahmen werden für zukünftige Regulierungsentwicklungen getroffen?",
        answer: "Die EU-KI-Verordnung stellt neue, komplexe Anforderungen an AI-Systeme, die weit über traditionelle Datenschutzbestimmungen hinausgehen. ADVISORI entwickelt zukunftssichere Compliance-Strategien, die nicht nur aktuelle Regulierungsanforderungen erfüllen, sondern auch für sich entwickelnde rechtliche Rahmenbedingungen gerüstet sind. Unser Ansatz kombiniert technische Exzellenz mit regulatorischer Voraussicht.\n\n📋 EU-KI-Verordnung Compliance-Dimensionen:\n• Risikoklassifizierung und -bewertung: Systematische Einordnung von Azure OpenAI Anwendungen in die Risikokategorien der EU-KI-Verordnung und Entwicklung entsprechender Compliance-Maßnahmen.\n• Transparenz und Dokumentationspflichten: Erstellung umfassender Dokumentationen über AI-Systeme, deren Funktionsweise, Trainingsdaten und potenzielle Auswirkungen auf Grundrechte.\n• Human-Oversight-Requirements: Implementierung von Mechanismen zur menschlichen Aufsicht und Kontrolle über AI-Entscheidungen, insbesondere in kritischen Anwendungsbereichen.\n• Bias-Detection-and-Mitigation: Entwicklung von Systemen zur Erkennung und Minimierung von Diskriminierung und Verzerrungen in AI-Outputs.\n\n🔮 ADVISORI's Future-Ready-Compliance-Approach:\n• Regulatory-Intelligence-Systems: Kontinuierliche Überwachung regulatorischer Entwicklungen auf EU-, nationaler und internationaler Ebene mit proaktiver Anpassung der Compliance-Strategien.\n• Adaptive-Governance-Frameworks: Entwicklung flexibler Governance-Strukturen, die sich schnell an neue regulatorische Anforderungen anpassen lassen, ohne die operative Effizienz zu beeinträchtigen.\n• Stakeholder-Engagement-Strategien: Aufbau von Beziehungen zu Regulierungsbehörden, Branchenverbänden und Standardisierungsorganisationen für frühzeitige Einblicke in regulatorische Trends.\n• Compliance-Automation-Pipelines: Implementierung automatisierter Systeme, die neue Regulierungsanforderungen in technische Kontrollen und Überwachungsmechanismen übersetzen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche Rolle spielt Data Residency bei Azure OpenAI Sicherheit und wie gewährleistet ADVISORI, dass sensible Unternehmensdaten die definierten geografischen Grenzen nicht verlassen?",
        answer: "Data Residency ist ein kritischer Erfolgsfaktor für Azure OpenAI Sicherheit, insbesondere für Unternehmen in regulierten Branchen oder mit strengen Datenschutzanforderungen. ADVISORI entwickelt maßgeschneiderte Data-Sovereignty-Strategien, die technische Kontrollen mit rechtlichen Garantien verbinden und dabei die volle Funktionalität von Azure OpenAI erhalten. Unser Ansatz schafft Vertrauen durch Transparenz und Kontrolle.\n\n🌍 Data Residency Herausforderungen bei Cloud-AI:\n• Multi-Region-Processing-Komplexität: Azure OpenAI Services können Daten zur Verarbeitung zwischen verschiedenen Rechenzentren bewegen, was präzise Kontrolle über Datenflüsse erfordert.\n• Backup-and-Disaster-Recovery-Considerations: Sicherstellung, dass auch Backup-Daten und Disaster-Recovery-Prozesse die Data-Residency-Anforderungen einhalten.\n• Third-Party-Integration-Challenges: Kontrolle über Datenflüsse bei Integration mit anderen Azure-Services oder Drittanbieter-Lösungen.\n• Compliance-Documentation-Requirements: Nachweis der Einhaltung von Data-Residency-Anforderungen für Audit- und Compliance-Zwecke.\n\n🏛️ ADVISORI's Data-Sovereignty-Excellence:\n• Geographic-Boundary-Enforcement: Implementierung technischer Kontrollen, die sicherstellen, dass Daten definierte geografische Grenzen niemals verlassen, einschließlich Verschlüsselung und Netzwerksegmentierung.\n• Sovereign-Cloud-Architectures: Design von Azure-Architekturen, die spezifische Rechenzentren und Regionen nutzen und dabei höchste Sicherheits- und Performance-Standards einhalten.\n• Legal-and-Technical-Alignment: Harmonisierung rechtlicher Anforderungen mit technischen Implementierungen durch enge Zusammenarbeit zwischen Legal-, Compliance- und IT-Teams.\n• Continuous-Residency-Monitoring: Deployment von Überwachungssystemen, die Datenflüsse in Echtzeit verfolgen und bei Abweichungen von Data-Residency-Richtlinien sofortige Alarme auslösen."
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
    console.log('✅ Azure OpenAI Sicherheit FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
