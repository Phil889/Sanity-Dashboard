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
    console.log('Updating NIST Cybersecurity Framework: Identify, Protect, Detect, Respond, Recover page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-identify-protect-detect-respond-recover' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-identify-protect-detect-respond-recover" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie etabliert ADVISORI eine NIST Framework-basierte Cybersecurity-Kultur, die von der C-Suite getragen wird und nachhaltige Veränderungen in der gesamten Organisation bewirkt?",
        answer: "Die Etablierung einer nachhaltigen Cybersecurity-Kultur erfordert mehr als technische Implementierung – sie braucht authentische Führung und systematische Verankerung in der Unternehmens-DNA. ADVISORI entwickelt eine umfassende Cultural Transformation Strategy, die das NIST Framework als Verhaltens- und Entscheidungsrahmen in allen Organisationsebenen verankert und echte Resilienz-Mentalität schafft.\n\n🎯 C-Level Leadership als Kulturkatalysator:\n• Executive Cybersecurity Champion Program: Entwicklung von C-Level-Führungskräften zu authentischen Cybersecurity-Botschaftern, die Sicherheit als Business Enabler kommunizieren statt als Hindernis.\n• Board-Level Security Governance: Integration von Cybersecurity-KPIs in Executive-Compensation und strategische Unternehmensziele, wodurch persönliche Verantwortlichkeit geschaffen wird.\n• Visible Leadership Commitment: Regelmäßige, sichtbare Investitionen der Geschäftsführung in Cybersecurity-Initiativen, die organisationsweite Prioritätensetzung demonstrieren.\n• Strategic Communication: Entwicklung einer einheitlichen, geschäftsorientierten Cybersecurity-Narrative, die von der C-Suite authentisch kommuniziert wird.\n\n🌱 Systematische Kulturverankerung durch Framework-Integration:\n• NIST-basierte Entscheidungsprozesse: Integration der fünf Framework-Funktionen in alltägliche Geschäftsentscheidungen, wodurch Cybersecurity zu einem natürlichen Bestandteil der Organisationslogik wird.\n• Behavior-Based Training Programs: Entwicklung von verhaltensorientierten Schulungsprogrammen, die NIST-Prinzipien in praktische, alltagstaugliche Handlungsweisen übersetzen.\n• Cross-Functional Cyber Teams: Etablierung abteilungsübergreifender Teams, die Cybersecurity-Verantwortung auf alle Geschäftsbereiche verteilen und Silodenken aufbrechen.\n• Recognition and Reward Systems: Implementierung von Anerkennungs- und Belohnungssystemen, die cybersecurity-bewusstes Verhalten fördern und positive Verstärkung schaffen.\n• Continuous Cultural Assessment: Regelmäßige Messung und Bewertung der Cybersecurity-Kultur durch Surveys, Verhaltensanalysen und kulturelle Reifegrad-Assessments."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche spezifischen Herausforderungen entstehen bei der NIST Framework-Implementierung in komplexen, multinationalen Organisationen und wie löst ADVISORI diese strategisch?",
        answer: "Multinationale Organisationen stehen vor einzigartigen Herausforderungen bei der NIST Framework-Implementierung, die weit über technische Komplexität hinausgehen. Kulturelle Unterschiede, regulatorische Fragmentierung und organisatorische Silos erfordern einen sophisticated, mehrdimensionalen Ansatz. ADVISORI entwickelt maßgeschneiderte Global Cybersecurity Governance-Modelle, die lokale Besonderheiten respektieren und gleichzeitig globale Kohärenz sicherstellen.\n\n🌍 Komplexe Herausforderungen multinationaler Framework-Implementierung:\n• Regulatory Divergence: Verschiedene nationale Cybersecurity-Regulatoriken (EU DORA, UK NIS, US FISMA) erfordern harmonisierte Framework-Adaptionen ohne Compliance-Konflikte.\n• Cultural Cybersecurity Perception: Unterschiedliche kulturelle Auffassungen von Risiko, Autorität und Technologie beeinflussen Framework-Akzeptanz und -Effektivität erheblich.\n• Organizational Complexity: Dezentrale Entscheidungsstrukturen, lokale IT-Autonomie und geografisch verteilte Teams erschweren einheitliche Framework-Governance.\n• Data Sovereignty Constraints: Nationale Datenschutz- und Souveränitätsgesetze limitieren grenzüberschreitende Cybersecurity-Koordination und Incident Response.\n\n🎯 ADVISORI's Global Framework Harmonization Strategy:\n• Federated Governance Model: Entwicklung eines föderierten Governance-Ansatzes, der zentrale NIST-Standards mit lokaler Flexibilität und Anpassungsfähigkeit kombiniert.\n• Cultural Adaptation Framework: Systematische Anpassung der Framework-Kommunikation und -Implementierung an lokale Geschäftskulturen und Führungsstile.\n• Regulatory Mapping Matrix: Erstellung umfassender Compliance-Matrices, die NIST Framework-Elemente mit lokalen regulatorischen Anforderungen verknüpfen und Synergien identifizieren.\n• Cross-Border Incident Coordination: Entwicklung grenzüberschreitender Incident Response-Protokolle, die lokale Gesetze respektieren und globale Koordination ermöglichen.\n• Technology Standardization with Local Flexibility: Implementierung einheitlicher Cybersecurity-Technologien bei gleichzeitiger Berücksichtigung lokaler IT-Infrastrukturen und Vendor-Präferenzen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Angesichts rasanter technologischer Entwicklungen wie KI, IoT und Quantum Computing – wie zukunftssicher ist die NIST Framework-Investition und welche Evolving-Strategie verfolgt ADVISORI?",
        answer: "Das NIST Cybersecurity Framework ist bewusst technologie-agnostisch konzipiert, um mit disruptiven Innovationen zu skalieren. ADVISORI positioniert das Framework nicht als statisches Regelwerk, sondern als adaptive Plattform für Cybersecurity-Evolution. Unsere Future-Proof Implementation Strategy antizipiert technologische Disruption und transformiert sie in Wettbewerbsvorteile.\n\n🚀 Framework-Resilienz gegenüber technologischer Disruption:\n• Technology-Agnostic Architecture: Die fünf NIST-Kernfunktionen (Identify, Protect, Detect, Respond, Recover) bleiben relevant unabhängig von zugrundeliegenden Technologien oder Bedrohungsvektoren.\n• Adaptive Security Principles: Framework-Prinzipien skalieren nahtlos von traditionellen IT-Umgebungen zu emerging Technologies wie Edge Computing, 5G-Netzwerken und dezentralen Systemen.\n• Continuous Evolution Mechanism: Das NIST Framework selbst wird regelmäßig aktualisiert und integriert neue technologische Erkenntnisse und Bedrohungslandschaften automatisch.\n• Vendor-Neutral Flexibility: Framework-Implementierungen sind herstellerunabhängig und können technologische Innovationen ohne Architektur-Reengineering integrieren.\n\n⚡ ADVISORI's Technology Anticipation and Integration Strategy:\n• AI-Augmented Framework Implementation: Proaktive Integration von Artificial Intelligence in alle Framework-Funktionen - von KI-gestützter Asset Discovery bis zu automatisierter Threat Response.\n• Quantum-Ready Cybersecurity: Frühzeitige Vorbereitung auf Quantum Computing durch Post-Quantum-Kryptographie-Integration und quantum-resistente Sicherheitsarchitekturen.\n• IoT and Edge Security Integration: Erweiterte Framework-Implementierung für IoT-Ökosysteme und Edge Computing-Umgebungen mit speziellen Governance- und Monitoring-Ansätzen.\n• Emerging Technology Risk Assessment: Systematische Bewertung und Integration neuer Technologien in bestehende Framework-Strukturen mit fokussierten Pilot-Programmen.\n• Future-Tech Security Research: Kontinuierliche Forschung und Entwicklung in Kooperation mit Technologie-Partnern, um Framework-Evolution zu antizipieren und zu gestalten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie entwickelt ADVISORI Executive-taugliche Cybersecurity-Metriken und KPIs aus der NIST Framework-Implementierung, die direkte Geschäftsrelevanz demonstrieren?",
        answer: "Traditionelle Cybersecurity-Metriken sprechen oft nur IT-Experten an und verfehlen C-Level-Entscheidungsbedürfnisse. ADVISORI entwickelt Business-Aligned Cybersecurity Intelligence, die NIST Framework-Daten in strategische Geschäftskennzahlen übersetzt und Cybersecurity-ROI transparent macht. Unsere Executive Dashboards schaffen direkte Verbindungen zwischen Cyber-Investitionen und Geschäftswert.\n\n📊 Transformation technischer Metriken in Business Intelligence:\n• Business Impact Quantification: Übersetzung von NIST Framework-Implementierungsgraden in quantifizierbare Geschäftsauswirkungen wie Umsatzschutz, Kostenreduktion und Risikominimierung.\n• Risk-Adjusted Performance Indicators: Entwicklung von risikoadjustierten KPIs, die Cybersecurity-Effektivität in Relation zu Geschäftszielen und Risikobereitschaft messen.\n• Competitive Cybersecurity Benchmarking: Positionierung der eigenen Cybersecurity-Maturity im Vergleich zu Branchenstandards und direkten Wettbewerbern.\n• Shareholder Value Demonstration: Klare Darstellung, wie NIST Framework-Implementierung Unternehmenswert steigert und Investor Confidence stärkt.\n\n💡 ADVISORI's Executive Intelligence Framework:\n• Real-Time Cyber Risk Dashboard: C-Level-Dashboard mit Echtzeit-Cyber-Risiko-Bewertungen, die direkt mit Geschäftsprioritäten und strategischen Initiativen verknüpft sind.\n• Investment ROI Tracking: Präzise Verfolgung des Return on Investment für jede NIST Framework-Komponente mit klaren Kosten-Nutzen-Analysen.\n• Predictive Risk Modeling: Vorausschauende Modellierung potenzieller Cyber-Incidents und deren Geschäftsauswirkungen basierend auf aktueller Framework-Maturity.\n• Board-Ready Cybersecurity Reports: Entwicklung prägnanter, visualisierter Reports, die komplexe Cybersecurity-Sachverhalte in verständliche Geschäftskennzahlen übersetzen.\n• Strategic Decision Support: Bereitstellung datengestützter Empfehlungen für Cybersecurity-Investitionen basierend auf Business Impact und strategischen Prioritäten.\n• Compliance Value Demonstration: Quantifizierung der geschäftlichen Vorteile von Regulatory Compliance durch messbare Risikoreduktion und operative Effizienz."
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
