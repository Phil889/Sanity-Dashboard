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
    console.log('Updating ESG Umweltmanagement page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-umweltmanagement-dekarbonisierung-klimaschutzprogramme-energieeffizienz-co2-bilanzierung-scope-1-3' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-umweltmanagement-dekarbonisierung-klimaschutzprogramme-energieeffizienz-co2-bilanzierung-scope-1-3" not found')
    }
    
    // Create new C-Level FAQs in German for ESG Environmental Management
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Net-Zero-Commitments sind ein Standard geworden, aber viele Unternehmen scheitern an der Umsetzung. Wie stellt ADVISORI sicher, dass unsere Net-Zero-Roadmap realistisch, wissenschaftsbasiert und finanzierbar ist?",
        answer: "Net-Zero-Commitments sind nur dann glaubwürdig, wenn sie durch konkrete, umsetzbare Roadmaps unterlegt sind. Für die C-Suite ist es entscheidend, dass diese Verpflichtungen sowohl ambitioniert als auch realistisch sind und die Geschäftsstrategie unterstützen statt behindern. ADVISORI entwickelt wissenschaftsbasierte Net-Zero-Strategien, die operative Exzellenz mit klimatischer Verantwortung verbinden.\n\n🎯 Wissenschaftsbasierte Net-Zero-Strategieentwicklung:\n• Science Based Targets Initiative (SBTi) Konformität: Entwicklung von Dekarbonisierungszielen, die mit dem 1,5°C-Ziel des Pariser Abkommens kompatibel sind und externe Validierung durch SBTi erhalten können.\n• Sektorspezifische Dekarbonisierungspfade: Anpassung der Net-Zero-Strategie an branchenspezifische Gegebenheiten und technologische Möglichkeiten unter Berücksichtigung physikalischer und wirtschaftlicher Grenzen.\n• Interim-Targets und Meilensteine: Definition kurzfristiger Zwischenziele (5-10 Jahre), die den Fortschritt messbar machen und kontinuierliche Kurskorrekturen ermöglichen.\n• Technology Roadmapping: Bewertung verfügbarer und aufkommender Technologien zur Emissionsreduktion und deren Integration in die Dekarbonisierungsstrategie.\n\n💰 Finanzierungsstrategien und Investitionsplanung:\n• Capex-Optimierung für Klimainvestitionen: Entwicklung von Investitionsplänen, die Dekarbonisierung mit notwendigen Geschäftsinvestitionen synchronisieren und Synergien nutzen.\n• Green Finance-Strategien: Erschließung von Green Bonds, Sustainability-linked Loans und anderen nachhaltigen Finanzierungsinstrumenten zur Kostenoptimierung.\n• Carbon Budget Management: Implementierung von internen CO2-Preismodellen zur Steuerung von Investitionsentscheidungen und Incentivierung von emissionsarmen Geschäftspraktiken.\n• Risk-Adjusted Returns: Berücksichtigung von Klimarisiken und -chancen in Investitionsbewertungen zur Sicherstellung nachhaltiger Renditen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "ESG-Reporting wird zunehmend komplex und reguliert. Wie hilft ADVISORI dabei, die CSRD-, EU-Taxonomie- und andere Berichtsanforderungen zu erfüllen, ohne die strategische Ausrichtung zu verlieren?",
        answer: "Die neue Regulierungslandschaft im ESG-Bereich, insbesondere die Corporate Sustainability Reporting Directive (CSRD) und die EU-Taxonomie, erfordern eine fundamentale Transformation der Nachhaltigkeitsberichterstattung. Für die C-Suite bedeutet dies, dass ESG-Reporting von einer Compliance-Übung zu einem strategischen Steuerungsinstrument werden muss. ADVISORI hilft dabei, regulatorische Anforderungen in Wettbewerbsvorteile zu verwandeln.\n\n📋 Comprehensive Compliance-Management:\n• CSRD-Readiness Assessment: Vollständige Gap-Analyse zur Identifikation von Lücken in der aktuellen Berichterstattung und Entwicklung von Implementierungsplänen für die neuen Anforderungen.\n• EU-Taxonomie-Alignment: Bewertung der Geschäftstätigkeiten hinsichtlich ihrer Konformität mit der EU-Taxonomie und Entwicklung von Strategien zur Erhöhung des Anteils taxonomie-konformer Aktivitäten.\n• Double Materiality Assessment: Durchführung von Wesentlichkeitsanalysen, die sowohl Impact- als auch Financial Materiality berücksichtigen und den Rahmen für die Berichterstattung definieren.\n• Datenqualität und -governance: Aufbau robuster Datenerfassungs- und -validierungsprozesse, die Audit-Standards erfüllen und kontinuierliche Verbesserung ermöglichen.\n\n🎯 Strategische Integration des ESG-Reportings:\n• Performance Management Integration: Verbindung von ESG-KPIs mit operativen Steuerungsgrößen und Management-Incentives zur Sicherstellung strategischer Relevanz.\n• Stakeholder-Value Creation: Nutzung des ESG-Reportings zur Kommunikation von Nachhaltigkeitsfortschritten und zur Stärkung von Stakeholder-Beziehungen.\n• Benchmark-Excellence: Positionierung der ESG-Berichterstattung als Best Practice in der Branche zur Unterstützung der Reputation und des Markenwerts.\n• Continuous Improvement: Etablierung von Feedback-Schleifen zwischen Reporting, Strategieentwicklung und operativer Umsetzung für kontinuierliche Optimierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Erneuerbare Energien und Energieeffizienz sind zentral für unsere Dekarbonisierung, aber die Technologielandschaft entwickelt sich rasant. Wie identifiziert ADVISORI die optimalen Technologien und Investitionsstrategien für unseren spezifischen Kontext?",
        answer: "Die Technologielandschaft für erneuerbare Energien und Energieeffizienz entwickelt sich exponentiell, was sowohl Chancen als auch Risiken für Investitionsentscheidungen schafft. Für die C-Suite ist es entscheidend, die richtigen Technologien zum richtigen Zeitpunkt zu wählen und dabei sowohl technische Performance als auch wirtschaftliche Rentabilität zu optimieren. ADVISORI bietet technologie-agnostische Beratung, die auf datengetriebener Analyse und strategischer Vorausschau basiert.\n\n⚡ Technologie-Assessment und -Selektion:\n• Technology Maturity Evaluation: Bewertung verschiedener erneuerbarer Energietechnologien hinsichtlich ihrer Reife, Skalierbarkeit und Anwendbarkeit in Ihrem spezifischen Geschäftskontext.\n• Total Cost of Ownership (TCO) Analysen: Ganzheitliche Kostenbewertung einschließlich Investitions-, Betriebs-, Wartungs- und End-of-Life-Kosten für verschiedene Technologieoptionen.\n• Grid Integration und Flexibilität: Bewertung der Netzintegrationsfähigkeit und Flexibilitätsoptionen erneuerbarer Energiesysteme für optimale Systemauslegung.\n• Emerging Technology Scouting: Identifikation und Bewertung aufkommender Technologien wie Advanced Battery Storage, Grüner Wasserstoff und innovative Energieeffizienz-Lösungen.\n\n🔄 Strategische Investitionsplanung:\n• Portfolio-Diversifikation: Entwicklung ausgewogener Technologie-Portfolios, die Risiken minimieren und gleichzeitig maximale Dekarbonisierungswirkung erzielen.\n• Phasing und Timing-Strategien: Optimale Sequenzierung von Technologie-Investitionen basierend auf Marktentwicklung, Kostentrends und regulatorischen Rahmenbedingungen.\n• Public-Private Partnerships: Identifikation von Kooperationsmöglichkeiten mit Energieversorgern, Technologieanbietern und öffentlichen Institutionen zur Risikoteilung.\n• Performance Monitoring und Optimization: Implementierung von Monitoring-Systemen für kontinuierliche Performance-Optimierung und predictive Maintenance."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Die Integration von Kreislaufwirtschaft in unsere Umweltstrategie könnte sowohl Kosten sparen als auch Emissionen reduzieren. Wie entwickelt ADVISORI Circular Economy-Ansätze, die sowohl ökologische als auch ökonomische Vorteile schaffen?",
        answer: "Die Kreislaufwirtschaft (Circular Economy) stellt einen paradigmatischen Wandel von linearen zu zirkulären Geschäftsmodellen dar und bietet erhebliche Potenziale für gleichzeitige Kosteneinsparungen und Emissionsreduktionen. Für die C-Suite ist es entscheidend, Circular Economy nicht nur als Umweltinitiative, sondern als strategischen Hebel für Innovation, Effizienz und neue Geschäftschancen zu verstehen. ADVISORI entwickelt ganzheitliche Circular Economy-Strategien, die ökologische und ökonomische Ziele optimal verbinden.\n\n♻️ Circular Business Model Innovation:\n• Value Chain Redesign: Neugestaltung von Wertschöpfungsketten zur Maximierung von Ressourceneffizienz durch Design for Circularity, Product-as-a-Service-Modelle und End-of-Life-Strategien.\n• Material Flow Optimization: Systematische Analyse und Optimierung von Materialströmen zur Identifikation von Recycling-, Upcycling- und Wiederverwendungspotenzialen.\n• Waste-to-Resource Transformation: Entwicklung von Strategien zur Transformation von Abfallströmen in wertvolle Ressourcen und Sekundärrohstoffe.\n• Industrial Symbiosis: Identifikation von Möglichkeiten für industrielle Symbiose, bei der Abfallprodukte eines Unternehmens als Rohstoffe für andere dienen.\n\n💡 Ökonomische Wertschöpfung durch Zirkularität:\n• Cost Reduction durch Ressourceneffizienz: Quantifizierung von Kosteneinsparungen durch reduzierten Materialverbrauch, optimierte Logistik und minimierte Abfallentsorgungskosten.\n• New Revenue Streams: Entwicklung neuer Geschäftsmodelle wie Sharing Economy, Refurbishment Services und Circular Product Design für zusätzliche Einnahmequellen.\n• Risk Mitigation: Reduktion von Rohstoffpreisrisiken und Lieferkettenabhängigkeiten durch erhöhte Ressourcenautonomie und diversifizierte Materialbeschaffung.\n• Innovation Leadership: Positionierung als Vorreiter für nachhaltige Geschäftsmodelle zur Stärkung der Marktposition und Erschließung neuer Kundensegmente."
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
