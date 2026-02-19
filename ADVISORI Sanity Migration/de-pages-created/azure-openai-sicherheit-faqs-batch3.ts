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
    console.log('Updating Azure OpenAI Sicherheit page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'azure-openai-sicherheit' })
    
    if (!existingDoc) {
      throw new Error('Document "azure-openai-sicherheit" not found')
    }
    
    // Create new FAQs focusing on enterprise governance and risk management
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie entwickelt ADVISORI eine umfassende Azure OpenAI Governance-Strategie für Großunternehmen und welche Rolle spielen Board-Level-Entscheidungen bei der AI-Sicherheitsstrategie?",
        answer: "Enterprise-Governance für Azure OpenAI erfordert eine strategische Herangehensweise, die technische Exzellenz mit Board-Level-Verantwortung verbindet. ADVISORI entwickelt mehrstufige Governance-Frameworks, die von der strategischen Ebene bis zur operativen Umsetzung reichen und dabei alle Stakeholder-Interessen berücksichtigen. Unser Ansatz schafft Transparenz, Verantwortlichkeit und strategische Ausrichtung.\n\n🏛️ Board-Level-Governance-Dimensionen:\n• Strategische AI-Oversight: Etablierung von Board-Komitees oder -Funktionen, die speziell für AI-Governance und -Risikomanagement verantwortlich sind und regelmäßige Berichte über AI-Sicherheit und -Performance erhalten.\n• Risk-Appetite-Definition: Klare Definition des Risikoappetits für AI-Initiativen auf Vorstandsebene, einschließlich Toleranzschwellen für verschiedene Risikokategorien.\n• Compliance-Accountability: Etablierung klarer Verantwortlichkeiten und Rechenschaftspflichten für AI-Compliance auf allen Unternehmensebenen.\n• Strategic-Alignment-Mechanisms: Sicherstellung, dass AI-Sicherheitsstrategien mit übergeordneten Unternehmenszielen und -werten harmonieren.\n\n🔄 ADVISORI's Multi-Tier-Governance-Framework:\n• Executive-Steering-Committees: Einrichtung von Lenkungsausschüssen mit C-Level-Beteiligung für strategische AI-Entscheidungen und Ressourcenallokation.\n• Operational-Governance-Bodies: Etablierung operativer Governance-Gremien, die tägliche AI-Sicherheitsentscheidungen treffen und Eskalationswege für kritische Issues definieren.\n• Cross-Functional-Integration: Integration von AI-Governance in bestehende Unternehmensstrukturen wie Risikomanagement, Compliance und IT-Governance.\n• Stakeholder-Communication-Strategies: Entwicklung von Kommunikationsstrategien, die verschiedene Stakeholder-Gruppen über AI-Sicherheitsmaßnahmen und -Performance informieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche spezifischen Risikomanagement-Frameworks implementiert ADVISORI für Azure OpenAI und wie werden diese in bestehende Enterprise-Risk-Management-Systeme integriert?",
        answer: "Effektives Risikomanagement für Azure OpenAI erfordert spezialisierte Frameworks, die die einzigartigen Herausforderungen von Cloud-AI adressieren und gleichzeitig nahtlos in bestehende Enterprise-Risk-Management-Systeme integriert werden. ADVISORI entwickelt maßgeschneiderte Risikomanagement-Ansätze, die proaktive Identifikation, Bewertung und Mitigation von AI-spezifischen Risiken ermöglichen.\n\n⚖️ AI-spezifische Risikokategorien und -bewertung:\n• Technical-Risk-Assessment: Systematische Bewertung technischer Risiken wie Model-Drift, Performance-Degradation, Adversarial-Attacks und System-Failures mit quantitativen Risikometriken.\n• Operational-Risk-Integration: Integration von AI-Risiken in bestehende Operational-Risk-Frameworks, einschließlich Prozessrisiken, Human-Error-Faktoren und Change-Management-Herausforderungen.\n• Regulatory-and-Compliance-Risk-Monitoring: Kontinuierliche Überwachung sich entwickelnder regulatorischer Landschaften und deren Auswirkungen auf AI-Implementierungen.\n• Reputational-and-Strategic-Risk-Considerations: Bewertung von Reputationsrisiken durch AI-Failures oder -Bias sowie strategischen Risiken durch verpasste AI-Innovationschancen.\n\n🛡️ ADVISORI's Integrated-Risk-Management-Approach:\n• Risk-Register-Integration: Entwicklung spezialisierter AI-Risk-Register, die nahtlos in bestehende Enterprise-Risk-Management-Systeme integriert werden und einheitliche Risikobewertung ermöglichen.\n• Automated-Risk-Monitoring: Implementierung automatisierter Systeme zur kontinuierlichen Überwachung von AI-Performance-Metriken und frühzeitigen Erkennung von Risikoindikatoren.\n• Scenario-Planning-and-Stress-Testing: Entwicklung von Szenario-Analysen und Stress-Tests, die die Widerstandsfähigkeit von AI-Systemen unter verschiedenen Bedingungen bewerten.\n• Risk-Mitigation-Playbooks: Erstellung detaillierter Handlungsanleitungen für verschiedene Risikoszenarien, einschließlich Eskalationsprozessen und Notfallmaßnahmen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie stellt ADVISORI sicher, dass Azure OpenAI Implementierungen den internen Audit-Anforderungen und externen Prüfungsstandards entsprechen und welche Dokumentations- und Nachweispflichten entstehen?",
        answer: "Audit-Readiness für Azure OpenAI erfordert umfassende Dokumentation, nachvollziehbare Prozesse und kontinuierliche Compliance-Überwachung. ADVISORI entwickelt audit-sichere Implementierungen, die nicht nur aktuellen Prüfungsstandards entsprechen, sondern auch für zukünftige Audit-Anforderungen gerüstet sind. Unser Ansatz schafft Transparenz und Vertrauen bei internen und externen Prüfern.\n\n📋 Audit-spezifische Dokumentationsanforderungen:\n• Comprehensive-System-Documentation: Erstellung detaillierter Dokumentationen über AI-Systemarchitekturen, Datenflüsse, Entscheidungslogiken und Sicherheitskontrollen für vollständige Audit-Transparenz.\n• Process-and-Procedure-Evidence: Dokumentation aller AI-bezogenen Prozesse und Verfahren, einschließlich Change-Management, Incident-Response und Compliance-Überwachung.\n• Control-Effectiveness-Testing: Implementierung von Mechanismen zur regelmäßigen Überprüfung der Wirksamkeit von Sicherheitskontrollen und Compliance-Maßnahmen.\n• Audit-Trail-Completeness: Sicherstellung lückenloser Audit-Trails für alle AI-Aktivitäten, von Datenverarbeitung bis zu Systemänderungen.\n\n🔍 ADVISORI's Audit-Excellence-Framework:\n• Continuous-Audit-Readiness: Implementierung von Systemen, die kontinuierliche Audit-Bereitschaft gewährleisten und Ad-hoc-Prüfungen ohne umfangreiche Vorbereitungszeit ermöglichen.\n• Automated-Evidence-Collection: Deployment automatisierter Systeme zur Sammlung und Aufbereitung von Audit-Evidenzen, die menschliche Fehler minimieren und Effizienz steigern.\n• Multi-Framework-Compliance: Design von Compliance-Strukturen, die gleichzeitig verschiedene Audit-Standards und -Frameworks erfüllen, von SOC bis zu branchenspezifischen Anforderungen.\n• Auditor-Collaboration-Strategies: Entwicklung von Strategien für effektive Zusammenarbeit mit internen und externen Auditoren, einschließlich Schulungen und Kommunikationsplänen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Welche Rolle spielt Change Management bei Azure OpenAI Sicherheit und wie gewährleistet ADVISORI, dass Sicherheitsstandards auch bei kontinuierlichen System-Updates und -Erweiterungen erhalten bleiben?",
        answer: "Change Management ist ein kritischer Erfolgsfaktor für nachhaltige Azure OpenAI Sicherheit, da AI-Systeme kontinuierlichen Updates, Modell-Refreshes und Funktionserweiterungen unterliegen. ADVISORI entwickelt robuste Change-Management-Frameworks, die Innovation ermöglichen, ohne dabei Sicherheit oder Compliance zu gefährden. Unser Ansatz balanciert Agilität mit Kontrolle.\n\n🔄 Change-Management-Herausforderungen bei Cloud-AI:\n• Model-Update-Governance: Verwaltung von AI-Modell-Updates, die sowohl Performance-Verbesserungen als auch potenzielle Sicherheitsrisiken mit sich bringen können.\n• Configuration-Change-Control: Kontrolle über Konfigurationsänderungen in komplexen Azure-Umgebungen, die multiple Services und Abhängigkeiten umfassen.\n• Third-Party-Integration-Management: Management von Änderungen bei Integration mit Drittanbieter-Services oder -APIs, die Sicherheitsauswirkungen haben können.\n• Emergency-Change-Procedures: Etablierung von Notfall-Change-Prozessen für kritische Sicherheits-Patches oder Incident-Response-Maßnahmen.\n\n⚙️ ADVISORI's Secure-Change-Management-Excellence:\n• Risk-Based-Change-Classification: Implementierung von Klassifizierungssystemen, die Änderungen basierend auf Sicherheitsrisiken und Geschäftsauswirkungen kategorisieren und entsprechende Genehmigungsprozesse definieren.\n• Automated-Testing-and-Validation: Deployment automatisierter Test-Pipelines, die Sicherheits- und Compliance-Validierung in jeden Change-Prozess integrieren.\n• Rollback-and-Recovery-Strategies: Entwicklung umfassender Rollback-Strategien und Recovery-Pläne für den Fall, dass Änderungen unerwartete Sicherheitsprobleme verursachen.\n• Stakeholder-Communication-and-Approval: Etablierung klarer Kommunikations- und Genehmigungsprozesse, die alle relevanten Stakeholder in kritische Änderungsentscheidungen einbeziehen."
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
    console.log('✅ Azure OpenAI Sicherheit FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
