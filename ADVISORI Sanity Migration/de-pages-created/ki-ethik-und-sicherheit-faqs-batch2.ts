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
    console.log('Updating KI-Ethik-und-Sicherheit page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'ki-ethik-und-sicherheit' })
    
    if (!existingDoc) {
      throw new Error('Document "ki-ethik-und-sicherheit" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche spezifischen Implementierungsherausforderungen entstehen bei der Integration von KI-Ethik und Cyber-Security und wie adressiert ADVISORI diese systematisch?',
        answer: "Die Integration von KI-Ethik und Cyber-Security bringt einzigartige Implementierungsherausforderungen mit sich, die sowohl technische als auch organisatorische Komplexitäten umfassen. ADVISORI hat bewährte Methodologien entwickelt, um diese Herausforderungen systematisch zu adressieren und erfolgreiche Security-Ethics-Implementierungen zu gewährleisten.\n\n⚡ Technische Implementierungsherausforderungen:\n• Architektur-Integration: Die Herausforderung, ethische Prinzipien und Sicherheitsmaßnahmen nahtlos in bestehende KI-Architekturen zu integrieren, ohne Performance oder Funktionalität zu beeinträchtigen.\n• Monitoring-Komplexität: Entwicklung von Überwachungssystemen, die sowohl ethische Metriken als auch Sicherheitsindikatoren in Echtzeit verfolgen und korrelieren können.\n• Explainability vs. Security: Balance zwischen der Notwendigkeit transparenter, erklärbarer KI-Entscheidungen und dem Schutz vor Adversarial Attacks durch zu viel Transparenz.\n• Performance-Optimierung: Sicherstellung, dass Security-Ethics-Maßnahmen die KI-Performance nicht negativ beeinflussen oder Latenzzeiten erhöhen.\n\n🏢 Organisatorische und kulturelle Herausforderungen:\n• Cross-funktionale Koordination: Aufbau effektiver Zusammenarbeit zwischen Ethics-, Security-, IT- und Business-Teams mit unterschiedlichen Prioritäten und Fachsprachen.\n• Skill-Gap-Management: Entwicklung von Kompetenzen, die sowohl ethische als auch sicherheitstechnische Aspekte der KI umfassen.\n• Change-Management: Überwindung von Widerständen gegen neue Prozesse und Verantwortlichkeiten in etablierten Organisationsstrukturen.\n• Governance-Alignment: Integration von Security-Ethics-Entscheidungsprozessen in bestehende Unternehmensgovernance ohne Verlangsamung der Innovation.\n\n🛠️ ADVISORI Lösungsansätze:\n• Phased Implementation: Entwicklung stufenweiser Implementierungspläne, die Quick Wins mit langfristigen strategischen Zielen verbinden.\n• Integrated Tooling: Bereitstellung spezialisierter Tools und Plattformen, die Security-Ethics-Management vereinfachen und automatisieren.\n• Training und Enablement: Umfassende Schulungsprogramme, die Teams befähigen, Security-Ethics-Prinzipien effektiv umzusetzen.\n• Continuous Support: Langfristige Begleitung während der Implementierung mit regelmäßigen Assessments und Optimierungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Wie entwickelt ADVISORI robuste Governance-Strukturen für Security-Ethics, die sowohl agile Innovation ermöglichen als auch umfassende Kontrolle gewährleisten?',
        answer: "Die Entwicklung effektiver Security-Ethics-Governance erfordert einen ausgewogenen Ansatz, der rigorose Kontrolle mit agiler Innovation verbindet. ADVISORI entwickelt adaptive Governance-Strukturen, die sowohl Sicherheit und ethische Standards gewährleisten als auch Innovationsgeschwindigkeit und Marktreaktionsfähigkeit ermöglichen.\n\n🎯 Adaptive Governance-Prinzipien:\n• Risk-based Decision Making: Implementierung risikobasierter Entscheidungsprozesse, die je nach Kritikalität und Bedrohungslevel unterschiedliche Governance-Intensitäten ermöglichen.\n• Automated Compliance: Entwicklung automatisierter Compliance-Checks und Security-Ethics-Validierungen, die kontinuierliche Überwachung ohne manuelle Verzögerungen ermöglichen.\n• Delegated Authority: Aufbau klarer Verantwortlichkeiten und Entscheidungsbefugnisse auf verschiedenen Organisationsebenen für effiziente Entscheidungsfindung.\n• Continuous Feedback: Etablierung von Feedback-Schleifen, die Governance-Prozesse basierend auf praktischen Erfahrungen kontinuierlich optimieren.\n\n🏗️ Strukturelle Governance-Komponenten:\n• AI-Security-Ethics-Board: Aufbau eines strategischen Gremiums mit Vertretern aus Business, IT, Security, Legal und Ethics für übergeordnete Entscheidungen.\n• Operational Committees: Etablierung operativer Komitees für tägliche Security-Ethics-Entscheidungen und Incident-Response.\n• Center of Excellence: Aufbau eines Security-Ethics-CoE als zentrale Kompetenz- und Koordinationsstelle.\n• Cross-functional Teams: Bildung interdisziplinärer Teams für spezifische Projekte und Herausforderungen.\n\n⚡ Agilitäts-Enabler:\n• Pre-approved Frameworks: Entwicklung vorab genehmigter Security-Ethics-Frameworks für häufige Anwendungsfälle zur Beschleunigung der Implementierung.\n• Sandbox-Environments: Bereitstellung sicherer Testumgebungen für experimentelle KI-Entwicklung mit reduzierten Governance-Anforderungen.\n• Fast-track Processes: Etablierung beschleunigter Genehmigungsprozesse für zeitkritische Projekte mit angemessenen Sicherheitsvorkehrungen.\n• DevSecEthics-Integration: Integration von Security-Ethics-Checks in CI/CD-Pipelines für kontinuierliche und automatisierte Validierung.\n\n🔄 ADVISORI Governance-Optimierung:\n• Entwicklung maßgeschneiderter Governance-Modelle, die spezifische Unternehmensanforderungen, Risikoappetit und Innovationsziele berücksichtigen.\n• Implementierung von Governance-Metriken und KPIs zur kontinuierlichen Messung und Optimierung der Balance zwischen Kontrolle und Agilität.\n• Aufbau von Governance-Kompetenzen durch Schulungen und Best-Practice-Sharing für nachhaltige Selbstständigkeit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie adressiert ADVISORI das komplexe Risikomanagement bei KI-Systemen, die sowohl ethische als auch cyber-sicherheitstechnische Risiken bergen?',
        answer: "Das Risikomanagement für KI-Systeme erfordert einen integrierten Ansatz, der traditionelle Cyber-Security-Risiken mit ethischen Risiken und deren Wechselwirkungen berücksichtigt. ADVISORI entwickelt umfassende Risk-Management-Frameworks, die beide Risikodimensionen systematisch identifizieren, bewerten und mitigieren.\n\n🔍 Integrierte Risikoidentifikation:\n• Multi-dimensionale Risikoanalyse: Systematische Identifikation von Risiken, die sowohl ethische als auch sicherheitstechnische Dimensionen umfassen, einschließlich ihrer Wechselwirkungen.\n• Threat-Modeling für AI-Ethics: Entwicklung spezialisierter Threat-Models, die sowohl technische Angriffsvektoren als auch ethische Schwachstellen berücksichtigen.\n• Stakeholder-Impact-Assessment: Bewertung potenzieller Auswirkungen auf verschiedene Stakeholder-Gruppen bei Security-Incidents und ethischen Verstößen.\n• Regulatory-Risk-Mapping: Analyse regulatorischer Risiken, die sich aus der Kombination von Security-Schwachstellen und ethischen Compliance-Verstößen ergeben.\n\n⚖️ Risk-Assessment-Methodologien:\n• Quantitative Risikobewertung: Entwicklung von Metriken und Modellen zur quantitativen Bewertung sowohl finanzieller als auch reputationaler Risiken.\n• Scenario-based Risk Analysis: Durchführung von Szenario-Analysen, die verschiedene Kombinationen von Security-Incidents und ethischen Verstößen simulieren.\n• Dynamic Risk Scoring: Implementierung dynamischer Risikobewertungen, die sich an verändernde Bedrohungslandschaften und ethische Standards anpassen.\n• Cross-Impact-Analysis: Analyse der Wechselwirkungen zwischen verschiedenen Risikokategorien und deren kumulativen Auswirkungen.\n\n🛡️ Integrierte Risikomitigationsstrategien:\n• Layered Defense: Implementierung mehrschichtiger Verteidigungsstrategien, die sowohl technische als auch ethische Schutzmaßnahmen umfassen.\n• Preventive Controls: Entwicklung präventiver Kontrollen, die sowohl Security-Incidents als auch ethische Verstöße verhindern.\n• Detective Controls: Aufbau von Überwachungssystemen, die frühzeitig sowohl Sicherheitsbedrohungen als auch ethische Anomalien erkennen.\n• Response Strategies: Entwicklung integrierter Incident-Response-Strategien für Situationen, die sowohl Security- als auch Ethics-Aspekte betreffen.\n\n📊 ADVISORI Risk-Management-Excellence:\n• Entwicklung maßgeschneiderter Risk-Frameworks, die branchenspezifische Anforderungen und Unternehmenskontext berücksichtigen.\n• Implementierung von Risk-Dashboards und Reporting-Systemen für transparente Risikokommunikation an die Führungsebene.\n• Aufbau von Risk-Management-Kompetenzen durch Schulungen und Prozess-Integration für nachhaltige Risikokontrolle."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie schafft ADVISORI nachhaltiges Stakeholder-Vertrauen durch transparente Security-Ethics-Kommunikation ohne Preisgabe sicherheitskritischer Informationen?',
        answer: "Die Balance zwischen Transparenz und Sicherheit ist eine der größten Herausforderungen bei der Kommunikation von Security-Ethics-Maßnahmen. ADVISORI entwickelt strategische Kommunikationsansätze, die Stakeholder-Vertrauen durch angemessene Transparenz aufbauen, ohne sicherheitskritische Informationen preiszugeben oder Angriffsflächen zu schaffen.\n\n🎯 Strategische Transparenz-Prinzipien:\n• Selective Disclosure: Entwicklung von Kommunikationsstrategien, die relevante ethische und sicherheitstechnische Informationen teilen, ohne operative Details preiszugeben.\n• Outcome-focused Communication: Fokus auf Ergebnisse und Auswirkungen von Security-Ethics-Maßnahmen statt auf technische Implementierungsdetails.\n• Stakeholder-segmented Messaging: Anpassung der Kommunikation an verschiedene Stakeholder-Gruppen mit unterschiedlichen Informationsbedürfnissen und Sicherheitsanforderungen.\n• Proactive Narrative Building: Aufbau proaktiver Kommunikationsnarrative, die Vertrauen schaffen, bevor Fragen oder Zweifel entstehen.\n\n🔒 Security-bewusste Kommunikationsstrategien:\n• Abstraction Layers: Verwendung von Abstraktionsebenen, die ethische Prinzipien und Sicherheitsstandards kommunizieren, ohne technische Schwachstellen zu offenbaren.\n• Third-party Validation: Nutzung unabhängiger Zertifizierungen und Audits als vertrauensbildende Maßnahmen ohne interne Details preiszugeben.\n• Controlled Transparency: Implementierung kontrollierter Transparenz-Mechanismen, die Einblicke gewähren, ohne Sicherheitsrisiken zu schaffen.\n• Incident Communication: Entwicklung von Kommunikationsprotokollen für Security-Ethics-Incidents, die Transparenz mit Schadensbegrenzung verbinden.\n\n📢 Multi-Channel-Kommunikationsansätze:\n• Executive Communication: Entwicklung von C-Level-Kommunikationsstrategien für Investoren, Board-Mitglieder und strategische Partner.\n• Customer Engagement: Aufbau kundenorientierter Kommunikation, die Vertrauen in die Sicherheit und Ethik der KI-Systeme schafft.\n• Regulatory Dialogue: Etablierung proaktiver Kommunikation mit Regulierungsbehörden zur Demonstration von Compliance und Best Practices.\n• Public Relations: Entwicklung öffentlicher Kommunikationsstrategien, die das Unternehmen als verantwortungsvollen AI-Akteur positionieren.\n\n🌟 ADVISORI Trust-Building-Excellence:\n• Entwicklung maßgeschneiderter Kommunikationsstrategien, die Unternehmenskultur, Branchenkontext und Stakeholder-Erwartungen berücksichtigen.\n• Implementierung von Trust-Metriken und Feedback-Mechanismen zur kontinuierlichen Optimierung der Kommunikationseffektivität.\n• Aufbau interner Kommunikationskompetenzen durch Schulungen und Best-Practice-Entwicklung für konsistente und effektive Stakeholder-Kommunikation."
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
