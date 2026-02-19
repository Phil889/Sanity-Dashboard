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
    console.log('Updating CRA Corrective Actions page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-cyber-resilience-act-corrective-actions' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-cyber-resilience-act-corrective-actions" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie unterstützt ADVISORI bei der Entwicklung einer robusten Incident Response-Strategie als Teil der CRA-Korrekturmaßnahmen?",
        answer: "Ein effektiver Incident Response-Plan ist entscheidend für die nachhaltige CRA-Compliance und den Schutz vor zukünftigen Cybersecurity-Vorfällen. ADVISORI entwickelt umfassende Incident Response-Strategien, die nicht nur regulatorische Anforderungen erfüllen, sondern auch die operative Resilienz Ihres Unternehmens stärken.\n\n🚨 Strategische Incident Response-Planung:\n• Threat Intelligence Integration: Einbindung aktueller Bedrohungsanalysen und Angriffsmuster in Ihre Incident Response-Verfahren.\n• Multi-tiered Response Framework: Entwicklung abgestufter Reaktionspläne für verschiedene Incident-Schweregrade und -Kategorien.\n• Cross-functional Team Coordination: Aufbau interdisziplinärer Incident Response-Teams mit klaren Rollen und Verantwortlichkeiten.\n• Legal und Regulatory Compliance: Integration aller relevanten Meldepflichten und rechtlichen Anforderungen in Ihre Response-Prozesse.\n\n⚡ ADVISORI's Incident Response Excellence:\n• Playbook Development: Erstellung detaillierter, praxiserprobter Incident Response-Playbooks für verschiedene Angriffs- und Störungsszenarien.\n• Simulation und Training: Durchführung realitätsnaher Incident Response-Übungen zur Validierung und kontinuierlichen Verbesserung Ihrer Reaktionsfähigkeit.\n• Forensic Readiness: Vorbereitung Ihrer Systeme und Prozesse für effektive digitale Forensik im Falle eines Sicherheitsvorfalls.\n• Communication Strategy: Entwicklung von Kommunikationsplänen für interne und externe Stakeholder während und nach Sicherheitsvorfällen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche Rolle spielt Supply Chain Security bei CRA-Korrekturmaßnahmen und wie adressiert ADVISORI Third-Party-Risiken?",
        answer: "Die CRA legt besonderen Fokus auf Supply Chain Security und die Verantwortung für Cybersecurity entlang der gesamten Wertschöpfungskette. Korrekturmaßnahmen müssen daher auch Third-Party-Risiken adressieren und robuste Lieferanten-Management-Prozesse etablieren. ADVISORI bietet umfassende Supply Chain Security-Expertise.\n\n🔗 Supply Chain Risk Management:\n• Vendor Risk Assessment: Systematische Bewertung der Cybersecurity-Posture aller kritischen Lieferanten und Dienstleister.\n• Contractual Security Requirements: Entwicklung und Durchsetzung von Cybersecurity-Klauseln und SLAs in Lieferantenverträgen.\n• Third-Party Monitoring: Kontinuierliche Überwachung der Sicherheitslage bei kritischen Partnern und Zulieferern.\n• Incident Coordination: Etablierung von Koordinationsmechanismen für den Fall von Sicherheitsvorfällen bei Lieferanten.\n\n🛡️ ADVISORI's Supply Chain Security Framework:\n• Supply Chain Mapping: Umfassende Kartierung Ihrer Lieferantennetzwerke und Identifikation kritischer Abhängigkeiten.\n• Zero Trust Architecture: Implementierung von Zero Trust-Prinzipien für alle externen Verbindungen und Datenaustausch-Prozesse.\n• Vendor Security Maturity Programs: Entwicklung von Programmen zur kontinuierlichen Verbesserung der Cybersecurity-Reife Ihrer Lieferanten.\n• Supply Chain Resilience Planning: Vorbereitung auf Supply Chain-Disruptions und Entwicklung von Backup- und Alternativstrategien."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie integriert ADVISORI Künstliche Intelligenz und Machine Learning in CRA-Korrekturmaßnahmen zur Verbesserung der Cybersecurity-Effektivität?",
        answer: "Künstliche Intelligenz und Machine Learning bieten revolutionäre Möglichkeiten zur Verbesserung von Cybersecurity-Maßnahmen und zur Automatisierung von Compliance-Prozessen. ADVISORI nutzt modernste KI-Technologien, um CRA-Korrekturmaßnahmen intelligenter, proaktiver und effektiver zu gestalten.\n\n🤖 KI-gestützte Cybersecurity-Innovation:\n• Predictive Threat Detection: Einsatz von Machine Learning-Algorithmen zur Vorhersage und frühzeitigen Erkennung von Cyberbedrohungen.\n• Automated Incident Response: Entwicklung von KI-gesteuerten Systemen für automatisierte Erstreaktion auf Sicherheitsvorfälle.\n• Behavioral Analytics: Nutzung von KI zur Erkennung anomaler Nutzer- und Systemverhaltensweisen.\n• Intelligent Risk Scoring: Automatisierte Bewertung und Priorisierung von Sicherheitsrisiken basierend auf KI-Analysen.\n\n🧠 ADVISORI's AI-Excellence-Ansatz:\n• Custom AI Model Development: Entwicklung maßgeschneiderter KI-Modelle, die auf Ihre spezifischen Geschäfts- und Sicherheitsanforderungen trainiert sind.\n• Explainable AI für Compliance: Implementierung transparenter KI-Systeme, die nachvollziehbare Entscheidungen für Regulatoren und Auditoren treffen.\n• Continuous Learning Systems: Aufbau von KI-Systemen, die kontinuierlich aus neuen Bedrohungen und Sicherheitsereignissen lernen.\n• Human-AI Collaboration: Optimale Integration von KI-Systemen mit menschlicher Expertise für maximale Sicherheitseffektivität."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Welche Strategien entwickelt ADVISORI für die kosteneffiziente Implementierung von CRA-Korrekturmaßnahmen ohne Kompromisse bei der Sicherheitsqualität?",
        answer: "Kosteneffizienz bei CRA-Korrekturmaßnahmen erfordert intelligente Priorisierung, innovative Technologien und optimierte Prozesse. ADVISORI entwickelt strategische Ansätze, die maximale Sicherheitswirkung mit optimalem Ressourceneinsatz verbinden und langfristige Kostenvorteile schaffen.\n\n💰 Cost-Optimization-Strategien:\n• Risk-based Resource Allocation: Intelligente Verteilung von Budgets basierend auf quantifizierten Risikobewertungen und Business Impact-Analysen.\n• Phased Implementation Approach: Strukturierte Rollout-Pläne, die kritische Sicherheitslücken priorisieren und Cashflow-optimierte Umsetzung ermöglichen.\n• Shared Infrastructure Solutions: Nutzung von gemeinsamen Sicherheitsinfrastrukturen und Cloud-Services für Kosteneffizienz ohne Kompromisse.\n• Automation-First Strategy: Maximierung der Automatisierung zur Reduzierung operativer Kosten und menschlicher Fehlerquellen.\n\n⚖️ ADVISORI's Value Engineering-Ansatz:\n• Total Cost of Ownership (TCO) Optimization: Ganzheitliche Betrachtung aller Kosten über den gesamten Lebenszyklus von Sicherheitslösungen.\n• Open Source Integration: Strategische Nutzung bewährter Open Source-Security-Tools zur Kostenreduzierung bei gleichbleibender Qualität.\n• Multi-Purpose Solutions: Entwicklung von Sicherheitslösungen, die mehrere Compliance-Anforderungen gleichzeitig adressieren.\n• Performance-based Contracting: Innovative Vertragsmodelle, die Kosten an tatsächlich erreichte Sicherheits- und Compliance-Ergebnisse koppeln."
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
