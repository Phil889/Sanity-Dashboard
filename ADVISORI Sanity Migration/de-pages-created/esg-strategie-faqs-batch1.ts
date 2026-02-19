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
    console.log('Updating ESG-Strategie page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-strategie' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-strategie" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist eine strategische ESG-Positionierung für die C-Suite mehr als nur ein regulatorisches Erfordernis und wie transformiert ADVISORI dies zu einem Wachstumskatalysator?",
        answer: "Für moderne C-Level-Führungskräfte stellt ESG (Environmental, Social, Governance) einen fundamentalen Paradigmenwechsel dar – weg von reiner Compliance hin zu einem strategischen Wertschöpfungsmotor. ESG ist heute der Schlüssel zu nachhaltiger Wettbewerbsfähigkeit, Kapitalzugang und langfristigem Unternehmenswert. ADVISORI versteht ESG als strategischen Enabler, der Ihr Unternehmen für die Zukunft positioniert und neue Geschäftschancen eröffnet.\n\n🎯 Strategische Transformation durch ESG:\n• Kapitalmarktzugang und Bewertungsprämien: ESG-führende Unternehmen erhalten bis zu 20% höhere Bewertungen und bevorzugten Zugang zu nachhaltigkeitsorientierten Investoren, die mittlerweile über 35 Billionen USD verwalten.\n• Risikominimierung und Resilienz: Proaktives ESG-Management reduziert operative, regulatorische und Reputationsrisiken erheblich und stärkt die Widerstandsfähigkeit gegenüber externen Schocks.\n• Talent-Attraktion und -Bindung: 83% der Millennials und Gen-Z-Fachkräfte bevorzugen Arbeitgeber mit starken ESG-Werten, was die Rekrutierung von Top-Talenten erleichtert.\n• Marktdifferenzierung und Kundenbindung: ESG-Führerschaft ermöglicht Premium-Positionierung und schafft stärkere Kundenloyalität in zunehmend bewussten Märkten.\n\n🚀 Der ADVISORI-Ansatz zur ESG-Wertschöpfung:\n• Integrierte Geschäftsmodell-Innovation: Wir helfen dabei, ESG-Prinzipien in Kerngeschäftsprozesse zu integrieren und neue, nachhaltige Geschäftsmodelle zu entwickeln.\n• Datengetriebene ESG-Strategien: Entwicklung von ESG-KPIs und -Metriken, die direkt mit Geschäftsergebnissen korrelieren und Fortschritte messbar machen.\n• Stakeholder-Kapitalisierung: Strategisches Engagement mit Investoren, Kunden und Partnern zur Maximierung des ESG-Wertversprechens.\n• Zukunftsorientierte Compliance: Antizipation kommender Regulierung und Positionierung als Marktführer statt reaktiver Compliance-Follower."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifiziert ADVISORI den direkten ROI einer ESG-Investition und welche konkreten Auswirkungen hat dies auf EBITDA, Unternehmensbewertung und Kapitalkosten?",
        answer: "ESG-Investitionen sind keine Kostenstelle, sondern ein messbarer Werttreiber mit direkten Auswirkungen auf die Finanzperformance. ADVISORI entwickelt ESG-Business Cases, die sowohl quantitative als auch qualitative Werttreiber identifizieren und deren Beitrag zur Unternehmenswertung transparent darstellen. Unsere Analysen zeigen, dass gut implementierte ESG-Strategien erhebliche finanzielle Vorteile generieren.\n\n💰 Direkte finanzielle Auswirkungen von ESG-Excellence:\n• EBITDA-Verbesserung: Durchschnittlich 6-8% EBITDA-Steigerung durch operative Effizienzgewinne (Energieoptimierung, Ressourceneffizienz, Prozessoptimierung).\n• Unternehmensbewertung: ESG-führende Unternehmen erzielen 15-20% Bewertungsprämien gegenüber Peers, basierend auf reduzierten Kapitalkosten und höheren Wachstumserwartungen.\n• Kapitalkosten-Reduktion: 0,5-1,5 Prozentpunkte niedrigere Finanzierungskosten durch verbesserte ESG-Ratings und Zugang zu Green Finance.\n• Versicherungskosten-Optimierung: Bis zu 15% Reduktion der Versicherungsprämien durch nachweislich geringere Risikoprofile.\n\n📊 ADVISORI's ROI-Quantifizierungsframework:\n• ESG-Value-Driver-Mapping: Systematische Identifikation und Quantifizierung aller ESG-bedingten Werttreiber in Ihrer spezifischen Branche und Ihrem Geschäftsmodell.\n• Integrierte Finanzmodellierung: Entwicklung von ESG-integrierten Finanzmodellen, die die Auswirkungen nachhaltiger Praktiken auf Cash Flow, ROIC und Unternehmenswert abbilden.\n• Benchmarking und Peer-Analyse: Vergleichsanalysen mit Branchenführern zur Identifikation von ESG-Arbitrage-Möglichkeiten und Wertschöpfungspotenzialen.\n• Dynamische ESG-Scorecards: Entwicklung von Management-Dashboards, die ESG-Performance direkt mit finanziellen Kennzahlen verknüpfen und Investitionsentscheidungen unterstützen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "In einer sich schnell wandelnden regulatorischen Landschaft – von der EU-Taxonomie bis zu nationalen Nachhaltigkeitsgesetzen – wie stellt ADVISORI sicher, dass unsere ESG-Strategie zukunftssicher und anpassungsfähig bleibt?",
        answer: "Die ESG-Regulierungslandschaft entwickelt sich mit beispielloser Geschwindigkeit, wobei neue Vorschriften wie die EU-Taxonomie, CSRD, das deutsche Lieferkettengesetz und internationale Standards eine komplexe Compliance-Matrix schaffen. ADVISORI hat einen adaptiven ESG-Strategieansatz entwickelt, der nicht nur aktuelle Anforderungen erfüllt, sondern auch zukünftige Entwicklungen antizipiert und Ihr Unternehmen widerstandsfähig gegen regulatorische Veränderungen macht.\n\n🔄 Dynamische Regulierungs-Antizipation:\n• Forward-Looking Regulatory Intelligence: Kontinuierliche Analyse globaler regulatorischer Trends und frühzeitige Identifikation kommender Anforderungen durch unsere spezialisierte Regulatory Intelligence Unit.\n• Modular Strategy Design: Entwicklung modularer ESG-Strategien mit flexiblen Bausteinen, die bei neuen regulatorischen Anforderungen schnell erweitert oder angepasst werden können.\n• Scenario-Based Planning: Erstellung verschiedener Regulierungsszenarien und entsprechender Anpassungsstrategien, um auf unterschiedliche Entwicklungspfade vorbereitet zu sein.\n• Proaktive Compliance-Architektur: Aufbau von ESG-Systemen und -Prozessen, die über Mindestanforderungen hinausgehen und zukünftige Compliance-Bedarfe bereits mitdenken.\n\n🌐 Internationale Koordination und Harmonisierung:\n• Multi-Jurisdictional Framework: Entwicklung harmonisierter ESG-Ansätze, die verschiedene nationale und internationale Anforderungen berücksichtigen und gleichzeitig operative Effizienz maximieren.\n• Standards-Konvergenz-Strategie: Strategische Ausrichtung auf sich abzeichnende globale Standards und Best Practices, um zukünftige Harmonisierungsvorteile zu nutzen.\n• Stakeholder-Engagement: Aktive Teilnahme an regulatorischen Konsultationen und Standardsetzungsprozessen zur frühzeitigen Einflussnahme und Information.\n• Adaptive Governance: Etablierung agiler ESG-Governance-Strukturen, die schnelle Anpassungen an neue Anforderungen ermöglichen ohne organisatorische Disruption."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI ESG von einem Compliance-Ansatz zu einem authentischen Wertversprechen, das sowohl interne Stakeholder als auch externe Partner und Kunden überzeugt?",
        answer: "Die größte Herausforderung für Unternehmen liegt darin, ESG von einer oberflächlichen Compliance-Übung zu einer authentischen, wertstiftenden Unternehmensidentität zu entwickeln. ADVISORI verfolgt einen Inside-Out-Ansatz, der ESG tief in der Unternehmens-DNA verankert und ein glaubwürdiges Wertversprechen schafft, das alle Stakeholder-Gruppen anspricht und überzeugt.\n\n🎭 Von Compliance zu authentischer Transformation:\n• Purpose-Driven Strategy Development: Entwicklung einer ESG-Strategie, die aus dem echten Unternehmenszweck und den Kernwerten hervorgeht, statt aus externen Anforderungen abgeleitet zu werden.\n• Cultural Integration Programme: Tiefgreifende Integration von ESG-Prinzipien in Unternehmenskultur, Entscheidungsprozesse und Mitarbeiterverhalten durch gezielte Change-Management-Initiativen.\n• Authentic Storytelling: Entwicklung einer glaubwürdigen ESG-Narrativ, die echte Fortschritte, Herausforderungen und Learnings transparent kommuniziert statt PR-getriebener Botschaften.\n• Stakeholder Co-Creation: Aktive Einbindung von Mitarbeitern, Kunden und Partnern in die ESG-Strategieentwicklung zur Sicherstellung von Relevanz und Authentizität.\n\n💡 Wertschöpfende ESG-Innovation:\n• ESG-Innovation Labs: Etablierung spezieller Innovationsräume zur Entwicklung nachhaltiger Produkte, Services und Geschäftsmodelle, die ESG-Prinzipien in marktfähige Vorteile übersetzen.\n• Circular Business Model Design: Neugestaltung von Geschäftsmodellen nach Kreislaufprinzipien, die sowohl Umweltvorteile als auch wirtschaftliche Effizienz schaffen.\n• Impact Measurement & Management: Implementierung robuster Systeme zur Messung und Steuerung des tatsächlichen ESG-Impacts, die kontinuierliche Verbesserung und glaubwürdige Kommunikation ermöglichen.\n• Stakeholder Value Creation: Entwicklung von ESG-Initiativen, die gleichzeitig Wert für Umwelt, Gesellschaft und Unternehmen schaffen – wahre Shared Value-Ansätze."
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
