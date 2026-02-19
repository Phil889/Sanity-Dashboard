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
    console.log('Updating EBA Governance, Outsourcing & ESG-Vorgaben page with C-Level FAQs batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eba-governance-outsourcing-esg-vorgaben' })
    
    if (!existingDoc) {
      throw new Error('Document "eba-governance-outsourcing-esg-vorgaben" not found')
    }
    
    // Create new C-Level FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Wie können wir die EBA-Anforderungen an die Governance von KI und algorithmischen Systemen in unsere bestehenden Strukturen integrieren?",
        answer: "Die EBA-Anforderungen an die Governance von KI und algorithmischen Systemen stellen Finanzinstitute vor neuartige Herausforderungen, die über traditionelle Governance-Konzepte hinausgehen. Eine erfolgreiche Integration erfordert einen multidisziplinären Ansatz, der technologische, ethische und regulatorische Aspekte berücksichtigt und gleichzeitig Innovationspotenziale bewahrt.\n\n🔍 Strategische Governance-Integration:\n• Algorithmic Governance Framework: Entwickeln Sie ein dediziertes Governance-Framework für KI und algorithmische Systeme, das sich in Ihre übergreifende Governance-Struktur einfügt, aber die spezifischen Risiken und Anforderungen dieser Technologien adressiert.\n• Risk-Based Klassifizierung: Implementieren Sie ein differenziertes Klassifizierungssystem für KI-Anwendungen basierend auf Risikopotenzial, regulatorischer Relevanz und geschäftlicher Kritikalität, um Governance-Intensität angemessen zu skalieren.\n• Ethics by Design: Verankern Sie ethische Prinzipien und regulatorische Anforderungen bereits in der Konzeptionsphase neuer KI-Systeme durch formalisierte Entwicklungsprozesse und Checklisten.\n• Interdisziplinäre Verantwortung: Etablieren Sie klare, aber geteilte Verantwortlichkeiten zwischen Technologie-, Business-, Risiko- und Compliance-Funktionen, um siloübergreifende Governance zu gewährleisten.\n\n🛠️ Operationalisierung der KI-Governance:\n• Modell-Validierungsprozesse: Entwickeln Sie robuste Prozesse zur Validierung von KI-Modellen, die nicht nur technische Performance, sondern auch Fairness, Erklärbarkeit und regulatorische Konformität bewerten.\n• Kontinuierliches Monitoring: Implementieren Sie systematische Überwachungsmechanismen, die Modell-Drift, Bias-Entwicklung und Veränderungen im regulatorischen Umfeld frühzeitig erkennen.\n• Dokumentations-Framework: Etablieren Sie ein umfassendes Dokumentationssystem, das Modellentwicklung, -validierung, -implementation und -überwachung transparent nachvollziehbar macht und regulatorischen Anforderungen entspricht.\n• Incident Response: Entwickeln Sie spezifische Prozesse für den Umgang mit KI-bezogenen Vorfällen, einschließlich Eskalationswegen, Korrekturmaßnahmen und regulatorischer Kommunikation.\n\n💡 Governance-Enabler für verantwortungsvolle KI:\n• Explainable AI (XAI): Investieren Sie in Technologien und Methoden zur Verbesserung der Erklärbarkeit von KI-Entscheidungen, um regulatorische Anforderungen an Transparenz zu erfüllen.\n• Data Governance Integration: Verbinden Sie KI-Governance eng mit Ihrer Data-Governance, um Datenqualität, -integrität und -repräsentativität als Grundlage für faire Algorithmen sicherzustellen.\n• Kompetenzaufbau: Entwickeln Sie spezifische Schulungsprogramme für verschiedene Stakeholder, von technischen Teams bis zum Vorstand, die ein gemeinsames Verständnis für KI-Governance schaffen.\n• Regulatory Technology: Evaluieren Sie den Einsatz von RegTech-Lösungen, die automatisierte Compliance-Checks, Bias-Erkennung und Governance-Dokumentation unterstützen können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Welche Maßnahmen sollten wir ergreifen, um die Widerstandsfähigkeit unserer Outsourcing-Arrangements gemäß den EBA-Richtlinien zu erhöhen?",
        answer: "Die Stärkung der Widerstandsfähigkeit von Outsourcing-Arrangements ist ein zentraler Fokus der EBA-Richtlinien und gewinnt in einem zunehmend volatilen und vernetzten Geschäftsumfeld weiter an Bedeutung. Ein strategischer Resilienz-Ansatz schützt nicht nur vor regulatorischen Risiken, sondern schafft auch einen nachhaltigen Wettbewerbsvorteil durch verbesserte operative Stabilität.\n\n🔄 Strategische Resilienz-Architektur:\n• Kritikalitätsbasierte Differenzierung: Entwickeln Sie ein differenziertes Resilienz-Framework, das Maßnahmen und Ressourcen anhand der Kritikalität der ausgelagerten Funktionen für Ihr Geschäft priorisiert.\n• Konzentrations-Risikomanagement: Analysieren Sie und limitieren Sie systematisch Abhängigkeiten von einzelnen Dienstleistern oder geografischen Regionen, um Klumpenrisiken zu vermeiden.\n• Multi-Provider-Strategien: Evaluieren Sie für kritische Funktionen den Einsatz komplementärer Dienstleister oder hybrider Modelle, die Flexibilität bei Ausfällen einzelner Provider gewährleisten.\n• Vertikale Integration von Schlüsselkompetenzen: Identifizieren und bewahren Sie strategisches Know-how und Kernkompetenzen innerhalb der Organisation, auch wenn operative Aspekte ausgelagert werden.\n\n📋 Vertragliche und operative Resilienz-Mechanismen:\n• Robust Exit Planning: Entwickeln Sie detaillierte, regelmäßig getestete Exit-Pläne für jedes kritische Outsourcing-Arrangement, die technische, operative und vertragliche Aspekte umfassen.\n• Service Continuity Requirements: Definieren Sie klare, messbare Anforderungen an Business Continuity und Disaster Recovery in Outsourcing-Verträgen, einschließlich RTO/RPO-Werten und Notfallprozessen.\n• Step-In Rights: Sichern Sie vertraglich Rechte, bei kritischen Situationen temporär die Kontrolle über ausgelagerte Funktionen zu übernehmen oder direkten Zugriff auf relevante Ressourcen zu erhalten.\n• Regelmäßige Resilienz-Tests: Implementieren Sie systematische Tests von Notfallplänen und Ausweichszenarien, die reale Störungen simulieren und alle relevanten Stakeholder einbeziehen.\n\n🔍 Kontinuierliche Überwachung und Verbesserung:\n• Real-time Monitoring: Etablieren Sie Echtzeit-Überwachungssysteme für kritische Performance- und Resilienz-Indikatoren, die frühzeitig auf potenzielle Probleme hinweisen.\n• Incident Analysis Framework: Entwickeln Sie einen strukturierten Prozess zur Analyse von Störungen und Near-Misses, der Root-Cause-Analysen und systematisches Lernen fördert.\n• Szenariobasierte Stresstests: Führen Sie regelmäßige Stresstests durch, die extreme, aber plausible Szenarien simulieren und die Widerstandsfähigkeit Ihrer Outsourcing-Arrangements auf die Probe stellen.\n• Collaborative Resilience Planning: Etablieren Sie gemeinsame Planungs- und Übungsprozesse mit strategischen Dienstleistern, um ein gemeinsames Verständnis von Resilienz-Anforderungen zu schaffen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie können wir unsere Stakeholder effektiv in die Umsetzung der EBA-Vorgaben zu Governance, Outsourcing und ESG einbinden?",
        answer: "Die erfolgreiche Umsetzung der EBA-Vorgaben erfordert eine strategische Einbindung diverser Stakeholder – von internen Teams über Aufsichtsbehörden bis zu Geschäftspartnern. Eine durchdachte Stakeholder-Strategie kann nicht nur Widerstände minimieren, sondern auch wertvolle Perspektiven einbringen und die Implementierungsqualität signifikant verbessern.\n\n🔄 Strategische Stakeholder-Integration:\n• Differenzierte Engagement-Strategie: Entwickeln Sie einen maßgeschneiderten Ansatz für verschiedene Stakeholder-Gruppen basierend auf deren Einfluss, Interesse und spezifischen Perspektiven zur Regulierungsimplementierung.\n• Frühzeitige Einbindung: Integrieren Sie relevante Stakeholder bereits in der Konzeptionsphase, um deren Expertise zu nutzen, Bedenken frühzeitig zu adressieren und Ownership zu fördern.\n• Value-Based Positioning: Kommunizieren Sie die Implementierung nicht primär als Compliance-Übung, sondern betonen Sie den strategischen Wert und spezifischen Nutzen für verschiedene Stakeholder-Gruppen.\n• Feedback-Loops: Etablieren Sie strukturierte Mechanismen, um kontinuierlich Feedback von Stakeholdern einzuholen und in die Weiterentwicklung Ihrer Implementierungsstrategie einfließen zu lassen.\n\n👥 Interne Stakeholder-Aktivierung:\n• Executive Sponsorship: Sichern Sie aktive Unterstützung und sichtbares Engagement der Geschäftsleitung, die die strategische Bedeutung der EBA-Vorgaben kontinuierlich kommuniziert.\n• Cross-funktionale Governance-Gremien: Etablieren Sie interdisziplinäre Steering Committees mit Vertretern aller relevanten Geschäftsbereiche, die gemeinsam Implementierungsentscheidungen treffen und verantworten.\n• Multilevel Change Network: Identifizieren und aktivieren Sie Change Agents auf verschiedenen Organisationsebenen, die als Multiplikatoren und Feedback-Kanäle fungieren.\n• Capability Building: Investieren Sie in zielgruppenspezifische Schulungs- und Sensibilisierungsprogramme, die Verständnis für die regulatorischen Anforderungen und deren Implikationen schaffen.\n\n🌐 Externe Stakeholder-Kollaboration:\n• Proaktiver Regulatorendialog: Etablieren Sie einen konstruktiven, transparenten Dialog mit Aufsichtsbehörden, um Interpretationen zu klären und Implementierungsansätze abzustimmen.\n• Dienstleister-Integration: Entwickeln Sie kollaborative Governance-Modelle mit strategischen Outsourcing-Partnern, die gemeinsame Verantwortung und koordinierte Implementierung fördern.\n• Peer Collaboration: Beteiligen Sie sich an Industrieinitiativen und Arbeitsgruppen, um Best Practices zu teilen und gemeinsame Standards für die Umsetzung zu entwickeln.\n• Investor & Customer Communication: Kommunizieren Sie proaktiv Ihre ESG- und Governance-Fortschritte an Investoren und Kunden, um Vertrauen zu stärken und Wettbewerbsvorteile zu realisieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Welche Rolle spielt Innovation bei der Umsetzung der EBA-Vorgaben, und wie können wir innovative Ansätze strategisch nutzen?",
        answer: "Innovation ist ein entscheidender, oft unterschätzter Erfolgsfaktor bei der Umsetzung regulatorischer Anforderungen. Während Compliance traditionell als Einschränkung für Innovation betrachtet wird, können innovative Ansätze tatsächlich sowohl die Effektivität der Compliance-Umsetzung steigern als auch strategischen Mehrwert für das Unternehmen schaffen.\n\n🚀 Strategische Innovation für regulatorische Excellence:\n• Compliance by Design: Integrieren Sie regulatorische Anforderungen frühzeitig in Innovationsprozesse, um Compliance von Anfang an mitzudenken, statt sie nachträglich zu implementieren.\n• Regulatory Opportunity Framing: Betrachten Sie regulatorische Anforderungen als Innovationstreiber, die neue Geschäftschancen eröffnen und Differenzierungspotential bieten können.\n• Experimenteller Ansatz: Nutzen Sie Sandboxing und Pilotprojekte, um innovative Compliance-Lösungen in kontrollierten Umgebungen zu testen, bevor Sie sie skalieren.\n• Cross-Industry Innovation: Suchen Sie nach Inspirationen und Lösungsansätzen außerhalb des Finanzsektors, die sich auf regulatorische Herausforderungen übertragen lassen.\n\n💡 Innovative Technologien für EBA-Compliance:\n• Regulatory Technology (RegTech): Evaluieren Sie spezialisierte RegTech-Lösungen, die durch Automatisierung, Datenanalyse und KI die Effizienz und Effektivität regulatorischer Prozesse signifikant steigern können.\n• Distributed Ledger Technology: Prüfen Sie den Einsatz von Blockchain-Technologien für Bereiche wie Outsourcing-Vertragsmanagement oder ESG-Datenintegrität, wo Transparenz und Unveränderlichkeit zentrale Anforderungen sind.\n• Natural Language Processing: Nutzen Sie NLP-Technologien zur automatisierten Analyse regulatorischer Texte, Identifikation relevanter Anforderungen und Monitoring von Compliance-Dokumentation.\n• Predictive Analytics: Implementieren Sie vorausschauende Analysemodelle, die regulatorische Risiken frühzeitig erkennen und proaktive Maßnahmen ermöglichen.\n\n🔄 Innovative Prozesse und Methodiken:\n• Agile Compliance: Adaptieren Sie agile Methoden für regulatorische Implementierungsprojekte, um Flexibilität, iterative Verbesserung und schnellere Time-to-Compliance zu erreichen.\n• Design Thinking für Governance: Wenden Sie nutzerzentrierte Design-Thinking-Methoden an, um Governance-Prozesse zu entwickeln, die sowohl regulatorische Anforderungen erfüllen als auch benutzerfreundlich sind.\n• Continuous Compliance: Ersetzen Sie traditionelle Point-in-Time-Compliance-Assessments durch kontinuierliche Monitoring- und Verbesserungsprozesse, die durch Automatisierung und Echtzeit-Analysen unterstützt werden.\n• Collaborative Ecosystems: Entwickeln Sie offene, kollaborative Ansätze, die Experten aus verschiedenen Disziplinen zusammenbringen und gemeinsame Innovationen für regulatorische Herausforderungen fördern."
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
    console.log('✅ EBA Governance, Outsourcing & ESG-Vorgaben C-Level FAQs batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
