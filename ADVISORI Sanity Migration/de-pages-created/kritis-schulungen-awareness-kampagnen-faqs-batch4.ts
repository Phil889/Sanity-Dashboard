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
    console.log('Updating KRITIS Schulungen & Awareness-Kampagnen page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'kritis-schulungen-awareness-kampagnen' })
    
    if (!existingDoc) {
      throw new Error('Document "kritis-schulungen-awareness-kampagnen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie können KRITIS-Schulungsprogramme zur Stärkung der Supply Chain Security und Partner-Ökosystem-Resilienz beitragen?",
        answer: "KRITIS-Schulungsprogramme spielen eine entscheidende Rolle bei der Stärkung der Supply Chain Security und der Resilienz des gesamten Partner-Ökosystems. In einer vernetzten Infrastrukturlandschaft sind Sicherheitslücken bei Partnern oft kritische Schwachstellen, die die gesamte Wertschöpfungskette gefährden können. ADVISORI entwickelt erweiterte Schulungskonzepte, die über die eigene Organisation hinausgehen und das gesamte Ökosystem stärken.\n\n🔗 Supply Chain Security Education und Partner-Enablement:\n• Vendor Security Training Programme: Entwicklung spezialisierter Schulungsmodule für kritische Lieferanten und Partner, um einheitliche Sicherheitsstandards im gesamten Ökosystem zu gewährleisten.\n• Third-Party Risk Assessment Training: Schulung interner Teams in systematischer Bewertung und Management von Drittanbieter-Risiken sowie kontinuierlicher Überwachung der Partner-Sicherheit.\n• Incident Response Coordination: Training in koordinierter Incident Response mit Partnern und Lieferanten für effektive, ökosystemweite Krisenreaktion.\n• Contractual Security Requirements: Schulung in der Entwicklung und Durchsetzung sicherheitsrelevanter Vertragsklauseln und SLAs mit kritischen Partnern.\n\n🌐 Ecosystem-wide Security Culture Development:\n• Cross-organizational Awareness Campaigns: Entwicklung gemeinsamer Awareness-Kampagnen mit kritischen Partnern für konsistente Sicherheitskultur im gesamten Ökosystem.\n• Joint Training Exercises und Tabletop Simulations: Regelmäßige gemeinsame Übungen mit Partnern zur Stärkung der kollektiven Incident-Response-Fähigkeiten.\n• Best Practice Sharing Networks: Aufbau von Wissensaustausch-Plattformen für kontinuierliches Lernen und Verbesserung innerhalb des Partner-Netzwerks.\n• Certification und Compliance Alignment: Koordinierte Zertifizierungsprogramme für einheitliche Standards und Compliance-Anforderungen.\n\n🎯 Strategic Ecosystem Resilience:\n• Supply Chain Mapping und Risk Visualization: Schulung in systematischer Kartierung und Risikobewertung komplexer Supply Chain-Abhängigkeiten.\n• Alternative Supplier Development: Training in Entwicklung und Management redundanter Lieferantenstrukturen für erhöhte Resilienz.\n• Crisis Communication Networks: Aufbau effektiver Kommunikationsnetzwerke für schnelle Information und Koordination während Sicherheitsvorfällen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche Rolle spielen Executive Leadership und Board-Level Engagement bei der erfolgreichen Implementierung von KRITIS-Schulungsprogrammen?",
        answer: "Executive Leadership und Board-Level Engagement sind kritische Erfolgsfaktoren für nachhaltige KRITIS-Schulungsprogramme. Ohne sichtbare, kontinuierliche Unterstützung der Geschäftsleitung verlieren selbst die best-konzipierten Programme schnell an Wirksamkeit und organisatorischer Relevanz. ADVISORI entwickelt spezielle Executive-Engagement-Strategien, die Führungskräfte zu aktiven Champions der Sicherheitskultur machen.\n\n👔 Executive Leadership Development und Security Champions:\n• C-Suite Security Leadership Training: Spezialisierte Programme für Geschäftsführung und Vorstände zu strategischen Sicherheitsaspekten, Risiko-Governance und Crisis Leadership.\n• Board-Level Cyber Risk Education: Aufklärung von Aufsichtsräten über Cyber-Risiken, regulatorische Anforderungen und ihre fiduziäre Verantwortung für IT-Sicherheit.\n• Executive Communication Skills: Training der Führungsebene in effektiver Kommunikation über Sicherheitsthemen und Awareness-Kampagnen für die gesamte Organisation.\n• Strategic Risk Integration: Schulung in Integration von Cyber-Risiken in strategische Planung, Budgetierung und Investitionsentscheidungen.\n\n🎯 Governance und institutionelle Verankerung:\n• Security Governance Frameworks: Entwicklung robuster Governance-Strukturen mit klaren Rollen, Verantwortlichkeiten und Entscheidungsprozessen für Sicherheitsinitiativen.\n• Executive Dashboards und KPI Management: Implementierung aussagekräftiger Metriken und Reporting-Systeme für kontinuierliche Executive Oversight.\n• Regular Security Updates und Board Reporting: Etablierung regelmäßiger Sicherheits-Updates für die Geschäftsleitung und strukturierter Board-Berichte zu Cyber-Risiken.\n• Crisis Leadership Preparedness: Intensive Vorbereitung der Führungsebene auf Krisenführung, Stakeholder-Kommunikation und Business Continuity Management.\n\n🚀 Cultural Transformation durch Leadership:\n• Visible Leadership Commitment: Entwicklung sichtbarer Leadership-Aktionen und Kommunikation, die Security als Top-Priorität etablieren.\n• Leading by Example: Training der Führungskräfte als Vorbilder für sicherheitsbewusstes Verhalten und kontinuierliche Lernbereitschaft.\n• Change Champion Networks: Aufbau von Security Champion-Netzwerken auf verschiedenen Führungsebenen für nachhaltige Kulturveränderung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie kann ADVISORI KRITIS-Schulungsprogramme an sich entwickelnde Bedrohungslandschaften und emerging Technologies anpassen?",
        answer: "Die Anpassung von KRITIS-Schulungsprogrammen an sich entwickelnde Bedrohungslandschaften und emerging Technologies ist essentiell für nachhaltige Sicherheitseffektivität. Cyber-Bedrohungen und Technologien entwickeln sich exponentiell, und Schulungsprogramme müssen agil und vorausschauend sein, um relevant zu bleiben. ADVISORI implementiert adaptive Learning-Systeme, die kontinuierlich auf neue Entwicklungen reagieren.\n\n🔄 Adaptive Learning und Threat Intelligence Integration:\n• Real-time Threat Intelligence Feeds: Integration aktueller Threat Intelligence in Schulungsmodule für unmittelbare Reaktion auf neue Bedrohungen und Attack Patterns.\n• Emerging Technology Risk Assessment: Kontinuierliche Bewertung neuer Technologien (IoT, AI, 5G, Cloud) und Entwicklung entsprechender Schulungsmodule für sichere Implementierung.\n• Dynamic Content Updates: Agile Content-Management-Systeme, die schnelle Updates und Anpassungen von Schulungsinhalten ermöglichen ohne komplette Programm-Überarbeitungen.\n• Predictive Threat Modeling: Einsatz von Predictive Analytics zur Antizipation zukünftiger Bedrohungen und proaktiven Entwicklung entsprechender Trainingsmodule.\n\n🚀 Innovation und Technology-driven Learning:\n• AI-powered Personalization: Einsatz künstlicher Intelligenz für personalisierte Lernpfade basierend auf individuellen Risikoprofilen, Rollen und Lernfortschritten.\n• Immersive Technology Integration: Kontinuierliche Integration neuer immersiver Technologien (AR, VR, Mixed Reality) für realistische Simulation emerging Threats.\n• Continuous Learning Ecosystems: Aufbau selbstlernender Systeme, die aus realen Incidents und near-misses lernen und automatisch Schulungsinhalte anpassen.\n• Crowd-sourced Intelligence: Nutzung kollektiver Intelligenz der Organisation für Identifikation neuer Risiken und Entwicklung entsprechender Awareness-Maßnahmen.\n\n📈 Future-Ready Skill Development:\n• Digital Literacy und Technology Awareness: Entwicklung umfassender Digital Literacy-Programme für sicheren Umgang mit emerging Technologies.\n• Quantum Computing Readiness: Vorausschauende Schulungen zu Quantum-Risiken und Post-Quantum-Cryptography-Anforderungen.\n• Zero Trust Architecture Understanding: Training in Zero Trust-Prinzipien und -Implementierung für moderne Sicherheitsarchitekturen.\n• Cloud Security Excellence: Spezialisierte Programme für sichere Cloud-Nutzung und Hybrid-Infrastructure-Management."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Welche langfristigen strategischen Vorteile entstehen durch nachhaltige KRITIS-Schulungs- und Awareness-Investitionen?",
        answer: "Nachhaltige KRITIS-Schulungs- und Awareness-Investitionen generieren langfristige strategische Vorteile, die weit über kurzfristige Compliance-Erfüllung hinausgehen und fundamentale Wettbewerbsvorteile schaffen. Diese Investitionen transformieren Organisationen zu resilienten, lernenden Systemen, die sich kontinuierlich an neue Herausforderungen anpassen und dabei operative Exzellenz aufrechterhalten.\n\n🏆 Langfristige Wettbewerbsvorteile und Market Position:\n• Security Leadership Position: Organisationen mit nachweisbar excellenten Sicherheitskulturen werden zu bevorzugten Partnern für kritische Geschäfte und können Premium-Positioning erreichen.\n• Regulatory Relationship Excellence: Kontinuierliche Compliance-Demonstration und proaktive Sicherheitsmaßnahmen schaffen positive Beziehungen zu Regulatoren und reduzieren Regulatory Scrutiny.\n• Innovation Enablement: Robuste Sicherheitsgrundlagen ermöglichen risikoärmere Innovation und Digitalisierung, die neue Geschäftsmöglichkeiten eröffnen.\n• Merger & Acquisition Value: Starke Sicherheitskulturen und -kompetenzen erhöhen den Unternehmenswert und erleichtern strategische Transaktionen.\n\n📈 Organizational Excellence und Operational Efficiency:\n• Crisis Resilience und Business Continuity: Systematisch geschulte Organisationen überstehen Krisen besser und erholen sich schneller von Störungen.\n• Quality Culture Development: Sicherheitsexzellenz überträgt sich oft auf andere Qualitätsdimensionen und verbessert die gesamte operative Performance.\n• Knowledge Management und Intellectual Property: Kontinuierliche Schulungen schaffen wertvolles organisatorisches Wissen und reduzieren Abhängigkeiten von einzelnen Personen.\n• Adaptive Capacity Building: Lernende Organisationen entwickeln Fähigkeiten zur schnellen Anpassung an neue Herausforderungen und Marktveränderungen.\n\n🌟 Stakeholder Value und ESG Integration:\n• ESG Performance und Sustainable Value Creation: Exzellente Cyber-Governance trägt zu starken ESG-Ratings bei und unterstützt nachhaltige Wertschöpfung.\n• Stakeholder Trust und Brand Value: Demonstrierte Sicherheitsexzellenz stärkt Markenvertrauen und Customer Loyalty nachhaltig.\n• Investment Attractiveness: Institutionelle Investoren bewerten Cyber-Resilienz zunehmend als kritischen Faktor für langfristige Wertschöpfung.\n• Social License to Operate: Verantwortungsvoller Umgang mit kritischen Infrastrukturen stärkt die gesellschaftliche Akzeptanz und das Vertrauen der Öffentlichkeit."
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
