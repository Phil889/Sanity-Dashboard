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
    console.log('Updating Standards Frameworks Audit Vorbereitung & Labeling page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-audit-vorbereitung-labeling' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-audit-vorbereitung-labeling" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie kann ADVISORI sicherstellen, dass unsere TISAX Audit-Vorbereitung auch bei veränderten regulatorischen Anforderungen und Standards aktuell bleibt?",
        answer: "Die regulatorische Landschaft in der Automobilindustrie entwickelt sich kontinuierlich weiter, mit neuen EU-Direktiven, aktualisierten TISAX-Versionen und sich ändernden Kundenanforderungen. ADVISORI gewährleistet, dass Ihre Audit-Vorbereitung nicht nur aktuellen Standards entspricht, sondern auch flexibel auf zukünftige Änderungen reagieren kann.\n\n🔄 Regulatory Evolution Herausforderungen:\n• Dynamische Standardentwicklung: TISAX und VDA ISA werden kontinuierlich weiterentwickelt und an neue Bedrohungsszenarien angepasst.\n• EU-Regulatorik Integration: Neue Direktiven wie Cyber Resilience Act und NIS2 beeinflussen TISAX-Anforderungen erheblich.\n• Kundenspezifische Anforderungen: OEMs entwickeln zusätzliche, spezifische Sicherheitsanforderungen über TISAX-Standards hinaus.\n• Technologische Disruption: Neue Technologien wie autonomes Fahren erfordern erweiterte Sicherheitsbetrachtungen.\n\n📡 ADVISORI's Future-Ready Compliance Framework:\n• Continuous Regulatory Monitoring: Systematische Überwachung aller relevanten regulatorischen Entwicklungen mit proaktiver Impact-Analyse.\n• Adaptive Framework Design: Entwicklung modularer Audit-Vorbereitungsstrukturen, die schnelle Anpassungen ohne Grundneugestaltung ermöglichen.\n• Stakeholder Network Intelligence: Nutzung unseres Expertennetzwerks für frühzeitige Einblicke in kommende Änderungen und Trends.\n• Evolutionary Roadmap Planning: Strategische Planung für schrittweise Anpassungen an veränderte Anforderungen mit minimalen Geschäftsstörungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche speziellen Herausforderungen entstehen bei TISAX Audits für Unternehmen mit komplexen Lieferketten und wie löst ADVISORI diese?",
        answer: "Moderne Automobilzulieferer operieren in hochkomplexen, globalen Lieferketten mit zahlreichen Sub-Lieferanten, Joint Ventures und strategischen Partnerschaften. Diese Komplexität schafft einzigartige TISAX-Herausforderungen, die spezialisierte Lösungsansätze erfordern. ADVISORI hat bewährte Methoden für Supply Chain Security Excellence entwickelt.\n\n🔗 Supply Chain Compliance Komplexitäten:\n• Multi-Tier Supplier Management: Sicherstellung der TISAX-Konformität über mehrere Lieferantenebenen hinweg mit unterschiedlichen Reifegraduen.\n• Cross-Border Coordination: Koordination von Sicherheitsstandards über verschiedene Länder und Rechtssysteme hinweg.\n• Third-Party Risk Management: Bewertung und Management von Sicherheitsrisiken durch externe Partner und Dienstleister.\n• Data Flow Governance: Kontrolle und Schutz von Informationsflüssen durch komplexe Lieferantennetzwerke.\n\n🌐 ADVISORI's Supply Chain Excellence Strategy:\n• Tier-N Supplier Assessment: Systematische Bewertung und Entwicklung von Lieferanten auf allen Ebenen mit standardisierten aber flexiblen Methoden.\n• Collaborative Security Frameworks: Entwicklung gemeinsamer Sicherheitsstandards und -prozesse mit strategischen Partnern.\n• Risk Cascading Prevention: Implementierung von Sicherheitsbarrieren zur Verhinderung der Ausbreitung von Sicherheitsrisiken durch die Lieferkette.\n• Integrated Audit Orchestration: Koordinierte Planung und Durchführung von Audits über die gesamte Lieferkette mit optimierter Ressourcennutzung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie unterstützt ADVISORI Unternehmen dabei, aus TISAX-Audits strategische Wettbewerbsvorteile zu entwickeln und nicht nur Compliance zu erreichen?",
        answer: "Während viele Unternehmen TISAX als notwendige Compliance-Hürde betrachten, sieht ADVISORI darin eine strategische Chance zur Differenzierung und Wertschöpfung. Wir transformieren TISAX-Initiativen von Kostenpositionen zu Gewinncentern und schaffen nachhaltige Wettbewerbsvorteile in der Automobilindustrie.\n\n🚀 Strategic Value Creation Dimensionen:\n• Market Premium Positioning: Nutzung der TISAX-Zertifizierung als Qualitätsdifferentiator für Premium-Preispositionierung.\n• Customer Trust Amplification: Transformation von Compliance-Nachweisen in vertrauensbildende Marketing- und Vertriebsargumente.\n• Operational Excellence Leverage: Nutzung von TISAX-Prozessen zur Optimierung der gesamten Unternehmensoperationen.\n• Innovation Catalyst: Verwendung der Sicherheitsinfrastruktur als Grundlage für innovative Produkte und Services.\n\n💎 ADVISORI's Competitive Advantage Framework:\n• Value Proposition Enhancement: Entwicklung einzigartiger Wertversprechen basierend auf nachgewiesener Sicherheitsexzellenz.\n• Customer Acquisition Acceleration: Strategische Nutzung von TISAX-Zertifizierung für beschleunigte Kundengewinnung und Markterschließung.\n• Strategic Partnership Enablement: Positionierung als bevorzugter Partner für sicherheitskritische Projekte und Innovationen.\n• Brand Equity Maximization: Aufbau einer starken Markenpositionierung als Technologie- und Sicherheitsführer in der Automobilindustrie."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Welche Rolle spielt Change Management in ADVISORI's Ansatz zur TISAX Audit-Vorbereitung und wie wird organisatorischer Widerstand überwunden?",
        answer: "Erfolgreiche TISAX-Implementierung ist zu 70% Change Management und zu 30% technische Umsetzung. ADVISORI hat spezialisierte Change Management Strategien entwickelt, die organisatorischen Widerstand in Engagement verwandeln und nachhaltige Sicherheitskultur etablieren, die über Compliance hinausgeht.\n\n👥 Change Management Herausforderungen:\n• Cultural Resistance: Widerstand gegen neue Sicherheitsprozesse und -anforderungen in etablierten Organisationsstrukturen.\n• Skill Gap Management: Entwicklung neuer Kompetenzen und Fähigkeiten bei Mitarbeitern für TISAX-konforme Arbeitsweisen.\n• Leadership Alignment: Sicherstellung der vollständigen Unterstützung und Vorbildfunktion des Senior Managements.\n• Communication Effectiveness: Vermittlung der Bedeutung und Vorteile von TISAX an alle Organisationsebenen.\n\n🎯 ADVISORI's Transformational Change Strategy:\n• Stakeholder Journey Mapping: Individuelle Entwicklungspfade für verschiedene Mitarbeitergruppen mit maßgeschneiderten Unterstützungsmaßnahmen.\n• Gamification und Incentivierung: Einsatz spielerischer Elemente und Belohnungssysteme zur Förderung von Engagement und Compliance.\n• Champions Network: Aufbau eines Netzwerks von internen TISAX-Botschaftern zur Multiplikation positiver Veränderungen.\n• Continuous Reinforcement: Langfristige Verankerung neuer Verhaltensweisen durch strukturierte Nachfasssysteme und kontinuierliche Weiterbildung."
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
