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
    console.log('Updating Absicherung von KI-Systemen page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'absicherung-von-ki-systemen' })
    
    if (!existingDoc) {
      throw new Error('Document "absicherung-von-ki-systemen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie adressiert ADVISORI die spezifischen Herausforderungen von Adversarial Attacks und welche präventiven Maßnahmen sind für C-Level-Entscheidungsträger besonders relevant?",
        answer: "Adversarial Attacks repräsentieren eine der sophistiziertesten und gefährlichsten Bedrohungen für moderne KI-Systeme, da sie die fundamentalen Schwächen maschineller Lernalgorithmen ausnutzen. Für C-Level-Führungskräfte ist das Verständnis und die Abwehr dieser Angriffe von kritischer Bedeutung, da sie nicht nur technische Systeme kompromittieren, sondern auch Geschäftsentscheidungen manipulieren und Vertrauen untergraben können. ADVISORI entwickelt umfassende Defense-Strategien gegen diese neuartigen Bedrohungsvektoren.\n\n🎯 Adversarial Threat Landscape für die Führungsebene:\n• Model Manipulation und Decision Poisoning: Angreifer können KI-Systeme dazu bringen, falsche Entscheidungen zu treffen, ohne dass dies sofort erkennbar ist, was zu fehlerhaften Geschäftsentscheidungen führen kann.\n• Intellectual Property Theft: Adversarial Techniques können verwendet werden, um proprietäre Modelle zu extrahieren oder zu replizieren, was erhebliche Wettbewerbsnachteile zur Folge hat.\n• Reputational Damage: Erfolgreiche Adversarial Attacks können das Vertrauen in KI-basierte Produkte und Services nachhaltig schädigen und zu Kundenverlusten führen.\n• Regulatory Compliance Risks: Kompromittierte KI-Systeme können zu Compliance-Verstößen führen, insbesondere in regulierten Branchen mit strengen Entscheidungsanforderungen.\n\n🛡️ ADVISORI's Comprehensive Adversarial Defense Framework:\n• Proactive Robustness Testing: Systematische Evaluation Ihrer KI-Modelle gegen bekannte und neuartige Adversarial Attack Patterns durch spezialisierte Red Team Exercises.\n• Adaptive Defense Mechanisms: Implementierung von Adversarial Training, Input Sanitization und Ensemble Methods, die die Robustheit Ihrer KI-Systeme gegen Manipulationsversuche stärken.\n• Real-time Anomaly Detection: Entwicklung von Monitoring-Systemen, die verdächtige Eingaben und ungewöhnliche Modellverhalten in Echtzeit erkennen und Gegenmaßnahmen einleiten.\n• Business Continuity Integration: Einbindung von Adversarial Defense in Ihre Business Continuity Pläne, um schnelle Reaktion und Recovery bei erfolgreichen Angriffen zu gewährleisten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche Rolle spielt Privacy-Preserving AI in ADVISORI's KI-Security-Strategie und wie balancieren wir Innovation mit DSGVO-Compliance und Datenschutz?",
        answer: "Privacy-Preserving AI ist nicht nur eine regulatorische Notwendigkeit, sondern ein strategischer Wettbewerbsvorteil, der es Unternehmen ermöglicht, innovative KI-Lösungen zu entwickeln, ohne dabei Datenschutz oder Compliance zu gefährden. ADVISORI versteht Privacy-by-Design als fundamentales Prinzip, das Innovation ermöglicht statt behindert, und entwickelt Lösungen, die sowohl technische Exzellenz als auch regulatorische Compliance gewährleisten.\n\n🔐 Strategic Privacy-First Approach für die C-Suite:\n• Competitive Advantage durch Privacy: Unternehmen mit nachweisbar datenschutzkonformen KI-Systemen können sich deutlich von Wettbewerbern differenzieren und Vertrauen bei datenschutzbewussten Kunden aufbauen.\n• Global Market Access: Privacy-Preserving AI ermöglicht die Expansion in Märkte mit strengen Datenschutzbestimmungen ohne aufwendige Compliance-Anpassungen.\n• Risk Mitigation und Insurance Benefits: Proaktive Privacy-Maßnahmen reduzieren Haftungsrisiken und können zu günstigeren Versicherungskonditionen führen.\n• Innovation Acceleration: Sichere Datenverarbeitung ermöglicht die Nutzung sensibler Datenquellen für KI-Training, die sonst unzugänglich wären.\n\n🚀 ADVISORI's Privacy-Preserving Innovation Framework:\n• Differential Privacy Implementation: Entwicklung von KI-Systemen, die mathematisch beweisbare Datenschutzgarantien bieten, ohne die Modellqualität zu beeinträchtigen.\n• Federated Learning Architectures: Ermöglichung kollaborativer KI-Entwicklung ohne zentrale Datensammlung, was neue Geschäftsmodelle und Partnerschaften eröffnet.\n• Homomorphic Encryption Integration: Implementierung von Verschlüsselungstechnologien, die Berechnungen auf verschlüsselten Daten ermöglichen und höchste Sicherheitsstandards gewährleisten.\n• Synthetic Data Generation: Entwicklung von Techniken zur Generierung synthetischer Trainingsdaten, die Datenschutz gewährleisten und gleichzeitig hochwertige KI-Modelle ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie etabliert ADVISORI robuste KI-Governance-Frameworks und welche organisatorischen Strukturen sind erforderlich, um nachhaltige KI-Security zu gewährleisten?",
        answer: "Effektive KI-Governance ist mehr als nur technische Kontrollen – sie erfordert eine umfassende organisatorische Transformation, die KI-Security in die DNA des Unternehmens integriert. ADVISORI entwickelt maßgeschneiderte Governance-Frameworks, die nicht nur Compliance gewährleisten, sondern auch Innovation fördern und eine Kultur der verantwortungsvollen KI-Nutzung schaffen.\n\n🏛️ Strategic Governance Architecture für die C-Suite:\n• Executive AI Oversight: Etablierung von C-Level-Verantwortlichkeiten für KI-Security mit klaren Accountability-Strukturen und Entscheidungsbefugnissen.\n• Cross-functional AI Committees: Aufbau interdisziplinärer Teams, die technische, rechtliche, ethische und geschäftliche Aspekte der KI-Security koordinieren.\n• Risk-based Decision Making: Implementierung von Frameworks, die KI-Security-Risiken in strategische Geschäftsentscheidungen integrieren und quantifizierbare Metriken bereitstellen.\n• Stakeholder Engagement: Entwicklung von Kommunikationsstrategien, die Vertrauen bei Kunden, Partnern und Regulierungsbehörden aufbauen und aufrechterhalten.\n\n📋 ADVISORI's Comprehensive Governance Implementation:\n• Policy Framework Development: Erstellung umfassender KI-Security-Richtlinien, die technische Standards, Verfahrensanweisungen und Compliance-Anforderungen abdecken.\n• Audit und Monitoring Systems: Implementierung kontinuierlicher Überwachungssysteme, die KI-Security-Performance messen und Verbesserungsmöglichkeiten identifizieren.\n• Training und Awareness Programs: Entwicklung von Schulungsprogrammen, die alle Organisationsebenen für KI-Security-Risiken sensibilisieren und Best Practices vermitteln.\n• Incident Response Integration: Einbindung von KI-spezifischen Incident Response Procedures in bestehende Cybersecurity und Business Continuity Frameworks.\n• Vendor und Third-party Management: Etablierung von Standards für die Bewertung und das Management von KI-Security-Risiken bei externen Partnern und Lieferanten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche Metriken und KPIs verwendet ADVISORI zur Messung der Effektivität von KI-Security-Maßnahmen und wie können C-Level-Führungskräfte den Erfolg ihrer Investitionen bewerten?",
        answer: "Die Messung von KI-Security-Effektivität erfordert spezialisierte Metriken, die über traditionelle Cybersecurity-KPIs hinausgehen und die einzigartigen Aspekte von KI-Systemen berücksichtigen. ADVISORI entwickelt umfassende Measurement Frameworks, die sowohl technische Performance als auch geschäftliche Auswirkungen quantifizieren und C-Level-Führungskräften datengestützte Einblicke für strategische Entscheidungen liefern.\n\n📊 Strategic KI-Security Metrics für die Führungsebene:\n• Model Integrity Index: Kontinuierliche Messung der Robustheit und Zuverlässigkeit Ihrer KI-Modelle gegen verschiedene Angriffsvektoren und Manipulationsversuche.\n• Privacy Compliance Score: Quantifizierung der Datenschutz-Performance Ihrer KI-Systeme mit direkter Verknüpfung zu regulatorischen Anforderungen und Compliance-Status.\n• Threat Detection Effectiveness: Bewertung der Fähigkeit Ihrer Security-Systeme, KI-spezifische Bedrohungen zu erkennen und zu neutralisieren.\n• Business Impact Assessment: Messung der geschäftlichen Auswirkungen von KI-Security-Maßnahmen auf Produktivität, Kundenvertrauen und Marktpositionierung.\n\n💡 ADVISORI's Advanced Analytics Framework:\n• Real-time Security Dashboards: Entwicklung von Executive-Dashboards, die kritische KI-Security-Metriken in Echtzeit visualisieren und Trends identifizieren.\n• Predictive Risk Analytics: Implementierung von Machine Learning-basierten Systemen, die zukünftige Security-Risiken vorhersagen und proaktive Maßnahmen ermöglichen.\n• ROI Calculation Models: Bereitstellung quantitativer Modelle zur Bewertung des Return on Investment von KI-Security-Initiativen mit direkter Verknüpfung zu Geschäftsergebnissen.\n• Benchmark und Competitive Analysis: Vergleichende Bewertung Ihrer KI-Security-Performance gegen Branchenstandards und Wettbewerber für strategische Positionierung.\n• Continuous Improvement Tracking: Langfristige Verfolgung von Verbesserungen in KI-Security-Performance und deren Auswirkungen auf Geschäftsziele und Stakeholder-Vertrauen."
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
