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
    console.log('Updating EU AI Act Ethics Guidelines page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act-ethics-guidelines' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act-ethics-guidelines" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie implementiert ADVISORI Human Oversight-Mechanismen im Rahmen der EU AI Act Ethik-Richtlinien, um sowohl Compliance als auch operative Exzellenz für die C-Suite zu gewährleisten?",
        answer: "Human Oversight stellt für C-Level-Führungskräfte eine der kritischsten Komponenten der EU AI Act Ethik-Compliance dar, da es direkt die Balance zwischen KI-Automatisierung und menschlicher Kontrolle definiert. ADVISORI entwickelt sophistizierte Human Oversight-Frameworks, die nicht nur regulatorische Anforderungen erfüllen, sondern auch operative Effizienz steigern und strategische Entscheidungsfindung verbessern.\n\n🎯 Strategic Human Oversight Excellence:\n• Intelligent Control-Architecture: Entwicklung mehrstufiger Oversight-Systeme, die kritische Entscheidungen menschlicher Kontrolle unterwerfen, während Routine-Prozesse optimal automatisiert bleiben und operative Effizienz maximieren.\n• Risk-Proportionate Oversight: Implementierung risikobasierter Kontrollmechanismen, die Oversight-Intensität an Kritikalität und Auswirkungen von KI-Entscheidungen anpassen und dabei Ressourcen optimal allokieren.\n• Real-Time Decision-Support: Aufbau von Systemen, die menschliche Entscheidungsträger mit relevanten Informationen und Empfehlungen unterstützen, ohne Entscheidungsgeschwindigkeit zu kompromittieren.\n• Accountability-Framework-Integration: Strukturierung von Oversight-Prozessen zur klaren Verantwortungszuordnung und Nachvollziehbarkeit aller kritischen KI-gestützten Geschäftsentscheidungen.\n\n🛡️ Der ADVISORI Human-AI-Collaboration-Ansatz:\n• Augmented Decision-Making: Entwicklung von Systemen, die menschliche Expertise und KI-Capabilities optimal kombinieren und dabei beide Stärken maximieren statt gegeneinander auszuspielen.\n• Competency-Based Oversight-Design: Aufbau von Oversight-Strukturen, die spezifische menschliche Kompetenzen und Fachexpertise strategisch in KI-Prozesse integrieren und dabei Mehrwert schaffen.\n• Scalable Governance-Mechanisms: Implementierung von Oversight-Frameworks, die mit Geschäftswachstum und KI-Komplexität skalieren ohne proportionale Steigerung der Oversight-Kosten.\n• Continuous Learning-Integration: Aufbau von Mechanismen, die aus Human Oversight-Entscheidungen lernen und sowohl KI-Systeme als auch Oversight-Prozesse kontinuierlich verbessern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche branchenspezifischen Ethik-Herausforderungen adressiert ADVISORI bei der EU AI Act-Implementierung und wie werden diese in Wettbewerbsvorteile für verschiedene Industrien transformiert?",
        answer: "Für C-Suite-Führungskräfte in verschiedenen Industrien stellen branchenspezifische ethische Anforderungen einzigartige Herausforderungen und Chancen dar. ADVISORI entwickelt maßgeschneiderte Ethik-Frameworks, die nicht nur industriespezifische Compliance gewährleisten, sondern auch branchen-charakteristische Wettbewerbsvorteile generieren und dabei regulatory leadership etablieren.\n\n🏭 Industry-Specific Ethics Excellence:\n• Healthcare Ethics-Innovation: Entwicklung von KI-Ethik-Standards für medizinische Anwendungen, die Patientensicherheit maximieren, klinische Effizienz steigern und gleichzeitig Innovation in diagnostischen und therapeutischen Bereichen beschleunigen.\n• Financial Services Ethics-Leadership: Aufbau von Ethik-Frameworks für Finanzdienstleistungen, die Fairness und Transparenz in Kredit- und Investitionsentscheidungen gewährleisten und dabei Competitive-Advantage durch vertrauensbasierte Kundenbeziehungen schaffen.\n• Manufacturing Ethics-Optimization: Implementierung ethischer Standards für industrielle KI-Anwendungen, die Arbeitsplatzsicherheit verbessern, Umweltauswirkungen minimieren und operative Exzellenz durch verantwortungsvolle Automatisierung steigern.\n• Technology Ethics-Differentiation: Entwicklung von Ethik-Standards für Tech-Unternehmen, die Innovation fördern, Nutzerrechte schützen und durch ethische Überlegenheit Marktführerschaft in zunehmend regulierten Tech-Märkten etablieren.\n\n🎯 Der ADVISORI Sector-Specific-Approach:\n• Regulatory Anticipation-Leadership: Proaktive Analyse branchenspezifischer regulatorischer Trends zur Entwicklung von Ethik-Standards, die zukünftige Anforderungen bereits heute übertreffen und First-Mover-Advantages schaffen.\n• Stakeholder-Specific Value-Creation: Transformation ethischer Anforderungen in branchenspezifische Value-Propositions, die besonders relevant für jeweilige Industrie-Stakeholder sind und Differenzierung ermöglichen.\n• Industry Best-Practice-Integration: Kombination von EU AI Act-Compliance mit etablierten branchenspezifischen Best Practices zur Schaffung überlegener ethischer Standards, die Industrie-Leadership demonstrieren.\n• Cross-Industry Learning-Transfer: Nutzung ethischer Innovationen aus verschiedenen Branchen zur Entwicklung von Hybrid-Lösungen, die Competitive-Advantages durch Cross-Pollination ethischer Excellence schaffen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie stellt ADVISORI sicher, dass EU AI Act Ethik-Frameworks mit der rasanten Entwicklung von AI-Technologien wie GPT, Computer Vision und autonomen Systemen Schritt halten?",
        answer: "Für technologie-orientierte C-Suite-Führungskräfte stellt die Synchronisation ethischer Standards mit exponentiell sich entwickelnden KI-Technologien eine fundamentale strategische Herausforderung dar. ADVISORI entwickelt adaptive Ethik-Frameworks, die nicht nur mit technologischem Fortschritt mithalten, sondern diesen durch strukturierte ethische Governance sogar beschleunigen und dabei Innovationsrisiken minimieren.\n\n🚀 Technology-Adaptive Ethics Excellence:\n• Future-Proof Ethics-Architecture: Entwicklung von Ethik-Frameworks, die technologie-agnostisch konzipiert sind und sich automatisch an neue KI-Capabilities anpassen ohne fundamentale Neugestaltung der ethischen Governance-Strukturen.\n• Real-Time Technology-Assessment: Implementierung von Monitoring-Systemen, die emerging AI-Technologies kontinuierlich auf ethische Implikationen bewerten und proaktive Anpassungen der Ethik-Standards ermöglichen.\n• Modular Ethics-Integration: Aufbau flexibler ethischer Frameworks, die neue Technologie-Module nahtlos integrieren können und dabei Kern-Ethik-Prinzipien aufrechterhalten.\n• Innovation-Enabling Ethics-Governance: Strukturierung ethischer Prozesse zur Beschleunigung statt Verlangsamung technologischer Innovation durch frühe ethische Validierung und Risk-Mitigation.\n\n⚡ Der ADVISORI Tech-Evolution-Ansatz:\n• Predictive Ethics-Modeling: Entwicklung von Modellen zur Antizipation ethischer Herausforderungen emerging technologies und proaktive Vorbereitung entsprechender Governance-Mechanismen.\n• Cross-Technology Ethics-Transfer: Nutzung ethischer Learnings aus etablierten KI-Bereichen zur accelerated Entwicklung ethischer Standards für neue Technologien wie Generative AI, Quantum Computing und Neuromorphic Systems.\n• Agile Ethics-Implementation: Aufbau von Sprint-basierten ethischen Entwicklungsprozessen, die parallel zu technologischer Entwicklung laufen und kontinuierliche ethische Optimierung gewährleisten.\n• Technology-Ethics Co-Evolution: Integration ethischer Überlegungen direkt in technologische Entwicklungsprozesse zur Schaffung von inherently ethical AI-Systems, die Compliance-by-Design gewährleisten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche Governance-Strukturen implementiert ADVISORI für nachhaltige EU AI Act Ethik-Compliance und wie werden diese in bestehende Corporate Governance-Frameworks integriert?",
        answer: "Für governance-fokussierte C-Level-Führungskräfte erfordert nachhaltige AI-Ethik-Compliance die nahtlose Integration in bestehende Corporate Governance-Strukturen ohne Disruption etablierter Prozesse. ADVISORI entwickelt sophisticated Governance-Frameworks, die AI-Ethik als natürlichen Bestandteil der Unternehmensführung etablieren und dabei operative Exzellenz und strategische Entscheidungsfindung verstärken.\n\n🏛️ Integrated Ethics-Governance Excellence:\n• Board-Level Ethics-Integration: Entwicklung von Board-Strukturen und -Prozessen, die AI-Ethik-Oversight auf höchster Unternehmensebene verankern und strategische Ethik-Entscheidungen mit Business-Strategie synchronisieren.\n• Executive Ethics-Accountability: Aufbau von Executive-Verantwortungsstrukturen, die klare Ethik-Accountability definieren und Ethik-Performance in Führungskräfte-Bewertung und -Incentivierung integrieren.\n• Risk-Ethics-Integration: Nahtlose Integration von AI-Ethik-Risiken in bestehende Enterprise Risk Management-Frameworks zur ganzheitlichen Risikobewertung und -steuerung.\n• Compliance-Ethics-Synchronization: Harmonisierung von AI-Ethik-Compliance mit anderen regulatorischen Anforderungen zur Vermeidung von Governance-Silos und Effizienzsteigerung.\n\n🔄 Der ADVISORI Governance-Integration-Ansatz:\n• Three-Lines-of-Defense-Ethics: Implementierung ethischer Kontrollen in alle drei Verteidigungslinien zur umfassenden ethischen Risikokontrolle ohne zusätzliche Governance-Komplexität.\n• Ethics-Audit-Integration: Integration von AI-Ethik-Prüfungen in bestehende Audit-Zyklen zur effizienten Compliance-Überwachung und kontinuierlichen Verbesserung ethischer Standards.\n• Stakeholder-Governance-Alignment: Aufbau von Governance-Strukturen, die verschiedene Stakeholder-Gruppen in ethische Entscheidungsfindung einbeziehen und dabei Governance-Effizienz aufrechterhalten.\n• Performance-Ethics-Metrics: Entwicklung von KPIs und Dashboards, die ethische Performance transparent machen und in reguläre Management-Reporting-Zyklen integrieren zur datengestützten ethischen Steuerung."
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
    console.log('✅ C-Level FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
