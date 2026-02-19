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
    console.log('Updating ESG Governance page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-governance' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-governance" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist ESG Governance für die C-Suite nicht nur ein Compliance-Thema, sondern ein strategischer Wertschöpfungshebel, und wie positioniert ADVISORI ESG als Business-Driver?",
        answer: "ESG Governance transzendiert traditionelle Compliance-Ansätze und etabliert sich als fundamentaler Baustein für nachhaltige Wertschöpfung und strategische Unternehmensführung. Für die C-Suite bedeutet dies, dass ESG nicht länger als regulatorische Bürde, sondern als Katalysator für Innovation, Effizienzsteigerung und Marktdifferenzierung verstanden werden muss. ADVISORI positioniert ESG als integralen Bestandteil der Unternehmensstrategie zur Sicherung langfristiger Wettbewerbsvorteile.\n\n🎯 Strategische Wertschöpfung durch ESG-Excellence:\n• Kapitalzugang und -kosten: ESG-konforme Unternehmen profitieren von niedrigeren Finanzierungskosten, besseren Kreditkonditionen und privilegiertem Zugang zu nachhaltigkeitsfokussierten Investoren und Green-Finance-Instrumenten.\n• Operative Effizienz und Kostensenkung: Systematische ESG-Praktiken führen zu Ressourcenoptimierung, Energieeinsparungen und Prozessverbesserungen, die direkt zur EBITDA-Steigerung beitragen.\n• Marktpositionierung und Kundenbindung: ESG-Leadership ermöglicht Premiumpositionierung, erschließt neue Kundensegmente und stärkt die Loyalität nachhaltigkeitsbewusster Stakeholder.\n• Risikominimierung und Resilienz: Proaktive ESG-Governance reduziert regulatorische, operative und Reputationsrisiken erheblich und schafft organisationale Widerstandsfähigkeit.\n\n🚀 Der ADVISORI-Ansatz für strategische ESG-Integration:\n• Wertorientierte ESG-Strategieentwicklung: Wir identifizieren und quantifizieren die spezifischen Wertschöpfungspotenziale von ESG-Maßnahmen für Ihr Unternehmen und entwickeln datengestützte Business Cases.\n• Governance-Integration auf Führungsebene: Etablierung von ESG-Komitees auf Board-Level mit klaren Mandaten, KPIs und Accountability-Mechanismen, die direkt in Vergütungs- und Bewertungssysteme integriert sind.\n• Performance-Management und ROI-Tracking: Implementierung robuster Mess- und Steuerungssysteme, die ESG-Performance quantifizieren und deren Beitrag zur Gesamtunternehmensstrategie transparent machen.\n• Stakeholder-Value-Optimierung: Entwicklung integrierter Kommunikations- und Engagement-Strategien, die ESG-Fortschritte effektiv an Investoren, Kunden und andere Stakeholder vermitteln."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifiziert ADVISORI den Return on Investment (ROI) von ESG-Governance-Initiativen und welche konkreten finanziellen Auswirkungen können C-Level-Führungskräfte erwarten?",
        answer: "Die Quantifizierung des ROI von ESG-Governance-Investitionen erfordert eine mehrdimensionale Betrachtung, die sowohl kurzfristige operative Verbesserungen als auch langfristige strategische Wertsteigerungen umfasst. ADVISORI hat methodische Ansätze entwickelt, um ESG-Investitionen systematisch zu bewerten und deren finanzielle Auswirkungen transparent zu machen, wodurch C-Level-Entscheidungen auf solider datengestützter Basis getroffen werden können.\n\n💰 Quantifizierbare finanzielle Auswirkungen von ESG-Governance:\n• Kapitalkosten-Reduktion: Studien zeigen, dass Unternehmen mit starker ESG-Performance ihre Kapitalkosten um 20-200 Basispunkte senken können, was bei größeren Finanzierungsvolumina erhebliche Einsparungen bedeutet.\n• Operative Effizienzgewinne: Systematische ESG-Implementierung führt zu durchschnittlich 10-25% niedrigeren Betriebskosten durch Ressourcenoptimierung, Energieeffizienz und Prozessverbesserungen.\n• Revenue-Premium und Marktanteilsgewinne: ESG-führende Unternehmen erzielen typischerweise 5-15% höhere Umsätze pro Kunde und können Premium-Pricing von 2-8% durchsetzen.\n• Risikokostenreduktion: Proaktive ESG-Governance reduziert Compliance-Kosten, Strafzahlungen und Reputationsschäden um durchschnittlich 15-30%.\n\n📊 ADVISORI's ROI-Quantifizierungsmethodik:\n• Baseline-Assessment und Potenzialanalyse: Comprehensive Analyse der aktuellen ESG-Position und Identifikation spezifischer Wertschöpfungschancen für Ihr Unternehmen.\n• Mehrstufige Impact-Modellierung: Entwicklung von Finanzmodellen, die direkte, indirekte und katalytische Effekte von ESG-Maßnahmen über verschiedene Zeithorizonte hinweg quantifizieren.\n• Benchmarking und Best-Practice-Integration: Vergleich mit Peer-Unternehmen und Branchen-Standards zur realistischen Erwartungsbildung und Zielsetzung.\n• Kontinuierliches Performance-Tracking: Implementierung von KPI-Dashboards und Reporting-Systemen, die ESG-ROI in Echtzeit überwachen und Optimierungspotenziale identifizieren.\n• Szenario-Planung und Sensitivitätsanalysen: Bewertung verschiedener ESG-Investitionsszenarien und deren Auswirkungen auf Unternehmenswert und Cashflow-Generierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Die regulatorische Landschaft für ESG entwickelt sich rasant – von EU-Taxonomie bis zu CSRD. Wie stellt ADVISORI sicher, dass unsere ESG-Governance-Strukturen zukunftssicher und compliant bleiben?",
        answer: "Die dynamische Entwicklung der ESG-Regulatorik – von der EU-Taxonomie über die Corporate Sustainability Reporting Directive (CSRD) bis hin zu nationalen Nachhaltigkeitsgesetzen – stellt C-Level-Führungskräfte vor komplexe strategische und operative Herausforderungen. ADVISORI entwickelt adaptive ESG-Governance-Systeme, die nicht nur aktuelle Anforderungen erfüllen, sondern auch robust gegenüber zukünftigen regulatorischen Entwicklungen sind und damit langfristige Compliance-Sicherheit gewährleisten.\n\n🔄 Adaptive Compliance-Architektur als Kernelement:\n• Regulatorisches Monitoring und Early-Warning-Systeme: Kontinuierliche Überwachung regulatorischer Entwicklungen auf EU-, nationaler und internationaler Ebene mit proaktiver Identifikation relevanter Änderungen und deren Auswirkungen.\n• Modulare Governance-Frameworks: Entwicklung flexibler ESG-Governance-Strukturen, die schnelle Anpassungen an neue Anforderungen ermöglichen, ohne grundlegende Organisationsstrukturen zu destabilisieren.\n• Anticipatory Compliance-Strategien: Implementierung von Governance-Mechanismen, die nicht nur aktuelle, sondern auch absehbare zukünftige Anforderungen berücksichtigen und damit teure Nachbesserungen vermeiden.\n• Cross-Jurisdictional-Alignment: Für international tätige Unternehmen entwickeln wir harmonisierte Ansätze, die verschiedene regionale Anforderungen effizient integrieren.\n\n🛡️ ADVISORI's Zukunftssicherungsansatz:\n• Regulatory-Intelligence-Integration: Etablierung von Prozessen zur systematischen Analyse und Bewertung regulatorischer Trends, einschließlich deren Auswirkungen auf Geschäftsmodell und Wertschöpfung.\n• Scenario-Planning für Compliance: Entwicklung verschiedener Compliance-Szenarien basierend auf möglichen regulatorischen Entwicklungen und entsprechende Vorbereitung von Anpassungsstrategien.\n• Technology-Enabled Governance: Einsatz digitaler Lösungen und Automatisierung für effiziente Datensammlung, -analyse und -berichterstattung, die schnelle Reaktionen auf neue Anforderungen ermöglichen.\n• Stakeholder-Engagement und Industry-Leadership: Aktive Teilnahme an Branchen-Initiativen und Regulierungsprozessen, um frühzeitig Einblicke in kommende Entwicklungen zu erhalten und Einfluss auf deren Gestaltung zu nehmen.\n• Kontinuierliche Governance-Evolution: Etablierung von Review- und Update-Zyklen, die sicherstellen, dass ESG-Governance-Strukturen kontinuierlich an sich ändernde Anforderungen angepasst werden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI ESG-Governance von einer isolierten Nachhaltigkeitsfunktion zu einem integrierten Managementsystem, das alle Geschäftsbereiche durchdringt und strategische Entscheidungen beeinflusst?",
        answer: "Die Transformation von ESG-Governance von einer peripheren Nachhaltigkeitsfunktion zu einem zentralen Managementsystem erfordert fundamentale organisatorische und kulturelle Veränderungen. ADVISORI entwickelt ganzheitliche Integrationsstrategien, die ESG-Aspekte systematisch in alle Unternehmensprozesse einweben und dabei die strategische Entscheidungsfindung auf allen Ebenen beeinflussen. Dies schafft ein kohärentes System, in dem Nachhaltigkeit zum natürlichen Bestandteil des Geschäftsbetriebs wird.\n\n🔄 Systemische Integration als Transformationsprinzip:\n• Strategic Planning Integration: Systematische Einbettung von ESG-Kriterien in strategische Planungsprozesse, Investitionsentscheidungen und Portfolio-Management, wodurch Nachhaltigkeit zum natürlichen Filter für alle Geschäftsentscheidungen wird.\n• Operating Model Redesign: Neugestaltung von Organisationsstrukturen, Rollen und Verantwortlichkeiten, um ESG-Verantwortung auf alle Funktionsbereiche zu verteilen und Silos zwischen Nachhaltigkeits- und Kerngeschäftsfunktionen aufzulösen.\n• Performance Management Integration: Implementierung von ESG-KPIs in Management-Dashboards, Balanced Scorecards und Vergütungssysteme, um Anreize für nachhaltige Entscheidungen auf allen Ebenen zu schaffen.\n• Decision-Making Framework Enhancement: Entwicklung von Entscheidungsrahmen und -prozessen, die ESG-Faktoren systematisch in Bewertungskriterien und Risiko-/Chancen-Analysen integrieren.\n\n🎯 ADVISORI's Holistic Integration Methodology:\n• Cross-Functional ESG-Champions-Network: Etablierung eines Netzwerks von ESG-Champions in allen Geschäftsbereichen, die als Multiplikatoren und Implementierungsverantwortliche fungieren.\n• Process-by-Process Integration Assessment: Detaillierte Analyse aller Kerngeschäftsprozesse zur Identifikation von ESG-Integrationspunkten und -opportunitäten.\n• Technology and Data Integration: Implementierung integrierter IT-Systeme, die ESG-Daten nahtlos in bestehende Business-Intelligence- und ERP-Systeme einbinden.\n• Cultural Change Management: Entwicklung und Implementierung von Change-Management-Programmen, die eine ESG-bewusste Unternehmenskultur fördern und nachhaltiges Denken in der DNA des Unternehmens verankern.\n• Governance-Evolution-Roadmap: Erstellung detaillierter Transformationspläne mit klaren Meilensteinen, Erfolgsmessungen und Anpassungsmechanismen für eine schrittweise aber umfassende Integration."
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
