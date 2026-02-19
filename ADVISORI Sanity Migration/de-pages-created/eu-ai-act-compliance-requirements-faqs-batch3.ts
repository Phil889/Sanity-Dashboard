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
    console.log('Updating EU AI Act Compliance Requirements page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act-compliance-requirements' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act-compliance-requirements" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie können wir ein effektives Qualitätsmanagementsystem für Hochrisiko-KI-Systeme gemäß EU AI Act implementieren?",
        answer: "Ein robustes Qualitätsmanagementsystem (QMS) für Hochrisiko-KI-Systeme ist die Grundlage für EU AI Act-Compliance und gleichzeitig ein strategisches Instrument zur Sicherstellung von KI-Exzellenz. Ein gut konzipiertes QMS kann Risiken minimieren, Qualität steigern und Wettbewerbsvorteile schaffen.\n\n🏛️ Kernkomponenten eines AI-spezifischen QMS:\n• Organisatorische Struktur: Etablierung klarer Rollen, Verantwortlichkeiten und Eskalationswege für KI-Qualitätsmanagement mit direkter Anbindung an die Geschäftsleitung.\n• Risikomanagement-Integration: Systematische Integration von KI-spezifischen Risikobewertungsverfahren in alle Phasen des Systemlebenszyklus.\n• Daten-Governance: Umfassende Prozesse zur Sicherstellung von Datenqualität, -integrität und -repräsentativität für KI-Training und -Betrieb.\n• Algorithmic Accountability: Mechanismen zur Nachvollziehbarkeit, Erklärbarkeit und Kontrolle von KI-Entscheidungen.\n• Kontinuierliche Verbesserung: Systematische Prozesse zur Identifikation und Implementierung von Verbesserungen basierend auf Performance-Monitoring und Stakeholder-Feedback.\n\n🔧 Implementierungsstrategien für AI QMS:\n• Risikobasierte Herangehensweise: Priorisierung von QMS-Maßnahmen basierend auf dem Risikolevel der KI-Systeme und deren Geschäftskritikalität.\n• Integration in bestehende Systeme: Aufbau auf vorhandenen Qualitätsmanagementsystemen und deren Erweiterung um KI-spezifische Komponenten.\n• Automatisierung und Digitalisierung: Einsatz digitaler Tools zur Automatisierung von QMS-Prozessen und Echtzeitüberwachung.\n• Stakeholder-Engagement: Systematische Einbindung aller relevanten Stakeholder in QMS-Design und -Implementierung.\n\n⚙️ ADVISORIs QMS Excellence Approach:\n• Adaptive QMS Architecture: Entwicklung flexibler QMS-Strukturen, die sich an verändernde regulatorische Anforderungen und Geschäftsbedürfnisse anpassen können.\n• Technology-Enabled Quality Control: Implementierung fortschrittlicher Technologien für automatisiertes Quality Monitoring und Predictive Quality Management.\n• Cross-Functional Integration: Verknüpfung des AI QMS mit anderen Governance-Bereichen wie Cybersecurity, Data Protection und Risk Management für ganzheitliche Compliance."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche Transparenz- und Erklärbarkeitsanforderungen stellt der EU AI Act und wie können wir diese technisch umsetzen?",
        answer: "Transparenz und Erklärbarkeit sind zentrale Pfeiler des EU AI Act und erfordern eine durchdachte technische und organisatorische Umsetzung, die sowohl regulatorische Compliance als auch praktische Anwendbarkeit gewährleistet. Die Implementierung effektiver Transparenzmechanismen kann gleichzeitig Vertrauen schaffen und die Akzeptanz von KI-Systemen erhöhen.\n\n🔍 Dimensionen der Transparenzanforderungen:\n• Algorithmic Transparency: Offenlegung der grundlegenden Funktionsweise, Entscheidungslogik und verwendeten Methoden der KI-Systeme.\n• Data Transparency: Transparenz über verwendete Trainingsdaten, Datenquellen und Datenverarbeitungsprozesse.\n• Performance Transparency: Klare Kommunikation von Systemleistung, Limitationen und Unsicherheiten.\n• Process Transparency: Offenlegung der Entwicklungs-, Test- und Validierungsprozesse sowie der Qualitätskontrollmechanismen.\n• Outcome Transparency: Verständliche Erklärung von KI-Entscheidungen und deren Auswirkungen für betroffene Personen.\n\n🛠️ Technische Umsetzungsstrategien:\n• Explainable AI (XAI) Integration: Implementierung von XAI-Technologien wie LIME, SHAP oder attention mechanisms zur Bereitstellung von Entscheidungserklärungen.\n• User-Centric Design: Entwicklung intuitiver Benutzeroberflächen, die komplexe KI-Informationen verständlich und actionable präsentieren.\n• Layered Transparency: Bereitstellung verschiedener Transparenzebenen für unterschiedliche Nutzergruppen und Anwendungskontexte.\n• Real-Time Explanation: Implementierung von Systemen zur Bereitstellung von Echtzeiterklaerungen für KI-Entscheidungen.\n\n💡 ADVISORIs Transparency Excellence Framework:\n• Adaptive Explanation Systems: Entwicklung intelligenter Erklärungssysteme, die sich an den Kontext, die Zielgruppe und die spezifischen Informationsbedürfnisse anpassen.\n• Multi-Modal Transparency: Integration verschiedener Kommunikationskanäle und -formate für optimale Verständlichkeit und Zugänglichkeit.\n• Trust-Building Mechanisms: Implementierung von Vertrauensindikatoren und Qualitätssignalen, die Nutzern helfen, die Zuverlässigkeit von KI-Entscheidungen zu bewerten.\n• Continuous Transparency Improvement: Aufbau von Feedback-Mechanismen zur kontinuierlichen Verbesserung der Transparenz basierend auf Nutzererfahrungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie gestalten wir Change Management und Mitarbeiterschulungen für die erfolgreiche Implementierung von EU AI Act-Compliance?",
        answer: "Erfolgreiche EU AI Act-Compliance erfordert mehr als technische Implementierung - sie benötigt eine fundamentale Veränderung der Organisationskultur und umfassende Kompetenzentwicklung. Ein strategisches Change Management kann Widerstand minimieren, Adoption accelerieren und nachhaltige Compliance-Kultur etablieren.\n\n👥 Dimensionen des AI Compliance Change Management:\n• Cultural Transformation: Entwicklung einer organisationsweiten Kultur der verantwortlichen KI-Nutzung und proaktiven Compliance-Haltung.\n• Kompetenzaufbau: Systematische Entwicklung von KI- und Compliance-Kompetenzen auf allen organisatorischen Ebenen.\n• Process Integration: Nahtlose Integration von Compliance-Anforderungen in bestehende Arbeitsabläufe und Entscheidungsprozesse.\n• Leadership Alignment: Sicherstellung von Top-Management-Commitment und Vorbildfunktion bei der Compliance-Implementierung.\n• Communication Excellence: Aufbau effektiver Kommunikationsstrukturen für kontinuierliche Information und Sensibilisierung.\n\n📚 Strategische Schulungskomponenten:\n• C-Level Executive Education: Spezialisierte Programme für Führungskräfte zu strategischen AI Governance und regulatorischen Implikationen.\n• Technical Deep Dives: Intensive technische Schulungen für IT- und Data Science-Teams zu Implementierungsanforderungen und Best Practices.\n• Business Integration Training: Schulungen für Fachabteilungen zur Integration von AI Compliance in tägliche Geschäftsprozesse.\n• Risk Awareness Sessions: Umfassende Sensibilisierung aller Mitarbeiter für KI-Risiken und deren Mitigation.\n• Continuous Learning Platforms: Etablierung digitaler Lernplattformen für kontinuierliche Kompetenzentwicklung und Updates.\n\n🚀 ADVISORIs Change Excellence Methodology:\n• Behavioral Change Science: Anwendung verhaltenspsychologischer Erkenntnisse zur Maximierung der Adoption und nachhaltigen Verhaltensänderung.\n• Gamification und Engagement: Einsatz spielerischer Elemente und Incentive-Systeme zur Steigerung der Motivation und Beteiligung.\n• Peer Learning Networks: Aufbau interner Communities of Practice für gegenseitiges Lernen und Best Practice-Sharing.\n• Performance Integration: Verknüpfung von AI Compliance-Kompetenzen mit Performance-Management und Karriereentwicklung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie können wir Cybersecurity-Anforderungen für KI-Systeme unter dem EU AI Act strategisch angehen und implementieren?",
        answer: "Cybersecurity für KI-Systeme unter dem EU AI Act erfordert einen ganzheitlichen Ansatz, der über traditionelle IT-Sicherheit hinausgeht und KI-spezifische Bedrohungen und Vulnerabilitäten adressiert. Eine proaktive Cybersecurity-Strategie kann nicht nur Compliance sicherstellen, sondern auch Vertrauen schaffen und Wettbewerbsvorteile generieren.\n\n🛡️ KI-spezifische Cybersecurity-Herausforderungen:\n• Adversarial Attacks: Schutz vor gezielten Angriffen, die darauf abzielen, KI-Systeme zu manipulieren oder zu täuschen.\n• Model Poisoning: Prävention von Angriffen auf Trainingsdaten und -prozesse, die die Integrität von KI-Modellen kompromittieren können.\n• Data Privacy und Extraction: Schutz sensibler Daten vor Reconstruction- und Inference-Angriffen.\n• Supply Chain Security: Sicherung der gesamten KI-Lieferkette von Datenquellen über Entwicklungstools bis zu Deployment-Infrastrukturen.\n• Emergent Behavior Monitoring: Überwachung unerwarteter Systemverhaltensweisen, die Sicherheitsrisiken darstellen können.\n\n🔐 Strategische Cybersecurity-Implementierung:\n• AI-Native Security Architecture: Entwicklung von Sicherheitsarchitekturen, die spezifisch für KI-Systeme konzipiert und optimiert sind.\n• Zero Trust für AI: Implementierung von Zero-Trust-Prinzipien in KI-Infrastrukturen mit kontinuierlicher Verifikation und Minimal-Privilegien-Ansätzen.\n• Continuous Security Monitoring: Aufbau automatisierter Monitoring-Systeme für Echtzeitüberwachung von KI-Security-Indikatoren.\n• Incident Response Planning: Entwicklung spezialisierter Incident-Response-Pläne für KI-spezifische Sicherheitsvorfälle.\n• Regulatory Alignment: Integration von Cybersecurity-Maßnahmen mit anderen EU AI Act-Anforderungen für ganzheitliche Compliance.\n\n⚡ ADVISORIs AI Cybersecurity Excellence:\n• Proactive Threat Intelligence: Aufbau spezialisierter Threat Intelligence für KI-spezifische Bedrohungen und Angriffsvektoren.\n• Automated Defense Mechanisms: Implementierung KI-gestützter Verteidigungssysteme, die automatisch auf Bedrohungen reagieren können.\n• Security-by-Design Integration: Einbettung von Sicherheitsanforderungen bereits in die frühen Phasen der KI-Systementwicklung.\n• Cross-Domain Security Orchestration: Koordination von KI-Cybersecurity mit anderen Sicherheitsbereichen für ganzheitlichen Schutz."
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
    console.log('✅ C-Level FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
