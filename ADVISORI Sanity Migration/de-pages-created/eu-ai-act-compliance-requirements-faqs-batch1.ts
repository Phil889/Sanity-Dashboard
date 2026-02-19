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
    console.log('Updating EU AI Act Compliance Requirements page with C-Level FAQs batch 1 (German)...')
    
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
        _key: generateKey('faq', 1),
        question: "Wie können wir als Führungsebene sicherstellen, dass unsere KI-Systeme vollständig EU AI Act-konform sind, ohne die Innovationskraft zu beeinträchtigen?",
        answer: "Die strategische Balance zwischen EU AI Act-Compliance und fortgesetzter Innovation ist eine der kritischsten Herausforderungen für die Unternehmensführung in der neuen KI-Ära. Eine proaktive, risikobasierte Herangehensweise kann nicht nur Compliance sicherstellen, sondern gleichzeitig als Katalysator für verantwortliche Innovation und Wettbewerbsvorteile dienen.\n\n🎯 Strategische Compliance-Prinzipien für die C-Suite:\n• Risikoorientierte Priorisierung: Fokussierung der Compliance-Anstrengungen auf Hochrisiko-KI-Systeme mit größtem Geschäftsimpact und regulatorischem Risiko.\n• Integration in Produktentwicklung: Einbettung von AI Act-Anforderungen bereits in den Designprozess neuer KI-Systeme, um kostspielige Nachbesserungen zu vermeiden.\n• Governance als Enabler: Etablierung einer AI Governance-Struktur, die Compliance-Anforderungen mit Geschäftszielen und Innovationsstrategien synchronisiert.\n• Kontinuierliche Bewertung: Implementierung dynamischer Bewertungsprozesse, die bei Änderungen an KI-Systemen automatisch Compliance-Implikationen analysieren.\n\n🛡️ ADVISORIs strategischer Compliance-Ansatz:\n• Business-integrierte Compliance-Roadmap: Wir entwickeln einen Implementierungsplan, der regulatorische Anforderungen mit Ihren Innovationszyklen und Markteinführungsstrategien synchronisiert.\n• Automatisierte Compliance-Architektur: Implementierung von Technologielösungen, die Compliance-Überwachung und -Dokumentation automatisieren und dabei Entwicklungszyklen beschleunigen.\n• Präventive Risikobewertung: Aufbau von Systemen zur frühzeitigen Identifikation von Compliance-Risiken in der KI-Entwicklung, um proaktive Anpassungen zu ermöglichen.\n• Innovation-freundliche Governance: Entwicklung flexibler Governance-Frameworks, die schnelle Iterationen und Experimente unter Wahrung der Compliance-Anforderungen unterstützen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche konkreten Haftungsrisiken entstehen für die Geschäftsleitung bei Nicht-Einhaltung der EU AI Act-Compliance-Anforderungen und wie können wir diese strategisch minimieren?",
        answer: "Die Haftungsrisiken bei Verletzung der EU AI Act-Compliance-Anforderungen sind erheblich und betreffen sowohl das Unternehmen als auch potentiell die persönliche Haftung von Führungskräften. Eine strategische Risikominimierung erfordert ein tiefgreifendes Verständnis der regulatorischen Landschaft und proaktive Maßnahmen zur Risikokontrolle.\n\n⚖️ Primäre Haftungsrisiken und deren Implikationen:\n• Bußgelder und Sanktionen: Geldbußen von bis zu 35 Millionen Euro oder 7% des weltweiten Jahresumsatzes bei schwerwiegenden Verstößen, die erhebliche finanzielle Auswirkungen haben können.\n• Marktausschluss und Betriebsverbote: Möglichkeit des temporären oder dauerhaften Ausschlusses von EU-Märkten für nicht-konforme KI-Systeme mit direkten Umsatzverlusten.\n• Zivilrechtliche Haftung: Potentielle Schadensersatzansprüche von Betroffenen bei Schäden durch nicht-konforme KI-Systeme mit unkalkulierbaren finanziellen Folgen.\n• Reputationsschäden: Nachhaltige Schädigung der Unternehmensreputation mit langfristigen Auswirkungen auf Kundenvertrauen und Marktposition.\n• Corporate Governance-Risiken: Mögliche persönliche Haftung von Vorstandsmitgliedern bei Verletzung der Sorgfaltspflichten im Bereich AI Governance.\n\n🔐 ADVISORIs strategische Risikominimierung:\n• Comprehensive Due Diligence: Implementierung robuster Due-Diligence-Prozesse für alle KI-Systeme mit systematischer Dokumentation zur Nachweisführung ordnungsgemäßer Geschäftsführung.\n• Präventive Compliance-Architektur: Aufbau vorausschauender Compliance-Systeme mit automatisierten Warnungen und Eskalationsmechanismen zur frühzeitigen Risikoerkennung.\n• D&O-optimierte Governance: Entwicklung von Governance-Strukturen, die explizit darauf ausgelegt sind, persönliche Haftungsrisiken der Geschäftsleitung zu minimieren und Nachweisführung zu unterstützen.\n• Integrierte Risikoüberwachung: Etablierung kontinuierlicher Monitoring-Systeme mit regelmäßiger Berichterstattung an die Geschäftsleitung zur proaktiven Risikokontrolle."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir die erheblichen Investitionen in EU AI Act-Compliance strategisch nutzen, um nachhaltige Wettbewerbsvorteile und neue Geschäftschancen zu schaffen?",
        answer: "EU AI Act-Compliance sollte nicht als reiner Kostenfaktor betrachtet werden, sondern als strategische Investition in die Zukunftsfähigkeit und Marktdifferenzierung Ihres Unternehmens. Eine kluge Herangehensweise kann Compliance-Ausgaben in messbare Geschäftsvorteile und neue Ertragsmöglichkeiten transformieren.\n\n🚀 Strategische Wertschöpfung durch Compliance-Investitionen:\n• Premium-Positionierung: EU AI Act-Compliance als Qualitätsmerkmal und Vertrauenssignal nutzen, um Premium-Preise und exklusive Partnerschaften zu rechtfertigen.\n• Marktbarrieren für Wettbewerber: Frühe, umfassende Compliance-Implementierung schafft hohe Eintrittsbarrieren für Konkurrenten und sichert Marktanteile.\n• Operational Excellence: Die für Compliance erforderlichen Prozessverbesserungen steigern gleichzeitig Effizienz, Qualität und Zuverlässigkeit der KI-Systeme.\n• Neue Geschäftsmodelle: Compliance-Expertise als Service für andere Unternehmen anbieten und zusätzliche Ertragsströme erschließen.\n• Investoren- und Partnerattraktivität: Nachgewiesene AI Governance verbessert ESG-Ratings und erleichtert Kapitalbeschaffung sowie strategische Partnerschaften.\n\n💼 ADVISORIs Value-Creation-Ansatz:\n• ROI-optimierte Compliance-Strategie: Entwicklung von Compliance-Programmen, die systematisch Geschäftswert maximieren und gleichzeitig regulatorische Anforderungen erfüllen.\n• Competitive Intelligence Integration: Nutzung von Compliance-Prozessen zur Generierung strategischer Markteinblicke und Identifikation neuer Geschäftschancen.\n• Innovation-Enablement: Transformation von Compliance-Infrastrukturen in Plattformen für beschleunigte KI-Innovation und Produktentwicklung.\n• Ecosystem-Monetarisierung: Entwicklung von Strategien zur Monetarisierung Ihrer Compliance-Expertise durch Beratung, Zertifizierung oder Technologie-Lizenzierung an Dritte."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie gewährleisten wir eine effiziente und kostenoptimierte Implementierung der komplexen EU AI Act-Compliance-Anforderungen in unserem Unternehmen?",
        answer: "Eine effiziente und kostenoptimierte Implementierung der EU AI Act-Compliance-Anforderungen erfordert einen systematischen, phasenbasierten Ansatz, der Prioritäten klar definiert und Synergien zwischen verschiedenen Compliance-Bereichen maximiert. Strategische Planung und intelligente Ressourcenallokation sind entscheidend für den Erfolg.\n\n📊 Grundprinzipien effizienter Compliance-Implementierung:\n• Risikobasierte Priorisierung: Fokussierung auf KI-Systeme mit höchstem regulatorischem Risiko und größtem Geschäftsimpact zur Maximierung des Return on Compliance Investment.\n• Modularer Aufbau: Entwicklung wiederverwendbarer Compliance-Module und -Prozesse, die mehrere KI-Systeme gleichzeitig abdecken und Economies of Scale schaffen.\n• Automatisierung first: Prioritäre Implementierung automatisierter Lösungen für repetitive Compliance-Aufgaben zur langfristigen Kostensenkung.\n• Change Management Integration: Verbindung der Compliance-Implementierung mit laufenden Transformationsprojekten zur Ressourcenoptimierung.\n\n⚡ ADVISORIs effizienzorientierter Implementierungsansatz:\n• Rapid Assessment und Quick Wins: Schnelle Identifikation von Compliance-Lücken und sofortige Umsetzung kostengünstiger Maßnahmen mit hoher Wirkung.\n• Technology-Enabled Compliance: Einsatz fortschrittlicher Technologien wie AI-basierte Dokumentationssysteme und automatisierte Überwachungstools zur Effizienzsteigerung.\n• Cross-Functional Integration: Etablierung interdisziplinärer Teams, die Compliance-Expertise mit bestehenden Geschäftsprozessen verknüpfen und Doppelarbeiten vermeiden.\n• Kontinuierliche Optimierung: Implementierung von KPIs und Feedback-Mechanismen zur kontinuierlichen Verbesserung der Compliance-Effizienz und Kostenreduktion.\n• Vendor Management Excellence: Strategische Auswahl und Management von Technologie- und Beratungspartnern zur Maximierung des Wertbeitrags bei minimalen Kosten."
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
    console.log('✅ C-Level FAQs batch 1 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
