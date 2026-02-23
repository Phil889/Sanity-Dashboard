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
    console.log('Updating DSGVO page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dsgvo' })
    
    if (!existingDoc) {
      throw new Error('Document "dsgvo" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist DSGVO-Compliance für die C-Suite mehr als nur rechtliche Absicherung und wie positioniert ADVISORI Datenschutz als strategischen Wettbewerbsvorteil?",
        answer: "Für die C-Suite transzendiert DSGVO-Compliance die reine rechtliche Absicherung und wird zu einem strategischen Differenzierungsfaktor im digitalen Zeitalter. Datenschutz ist nicht nur eine Compliance-Anforderung, sondern ein Vertrauensfaktor, der Kundenbeziehungen stärkt, Marktchancen eröffnet und die Unternehmensreputation schützt. ADVISORI versteht DSGVO als Katalysator für digitale Transformation und nachhaltiges Wachstum.\n\n🎯 Strategische Imperative für die Geschäftsführung:\n• Vertrauenskapital als Wettbewerbsvorteil: In einer datengetriebenen Wirtschaft wird Datenschutz zum entscheidenden Vertrauensfaktor, der Kunden, Partner und Investoren an Ihr Unternehmen bindet.\n• Marktchancen durch Privacy Excellence: DSGVO-konforme Unternehmen können neue Märkte erschließen, da Datenschutz zunehmend zum Auswahlkriterium bei Geschäftspartnerschaften wird.\n• Risikomanagement und Wertsicherung: Systematischer Datenschutz minimiert nicht nur Bußgeldrisiken, sondern schützt auch vor Reputationsschäden und Vertrauensverlusten.\n• Innovation durch Privacy by Design: Datenschutzprinzipien fördern innovative Technologie-Ansätze und schaffen nachhaltige Wettbewerbsvorteile.\n\n🛡️ Der ADVISORI-Ansatz für strategische DSGVO-Umsetzung:\n• Business-Value-Integration: Wir verknüpfen Datenschutzmaßnahmen direkt mit Ihren Geschäftszielen und zeigen den monetären Wert von Privacy-Investitionen auf.\n• Customer-Centric-Privacy: Entwicklung von Datenschutzstrategien, die das Kundenerlebnis verbessern statt behindern und Vertrauen als Markendifferenziator etablieren.\n• Innovation-Enablement: Integration von Privacy-by-Design-Prinzipien in Ihre Innovationsprozesse zur Entwicklung datenschutzkonformer, zukunftsfähiger Geschäftsmodelle.\n• Executive-Readiness: Befähigung der C-Suite zur strategischen Führung von Datenschutz als Geschäftsfunktion mit klaren KPIs und Erfolgsmessungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welchen quantifizierbaren ROI liefert eine professionelle DSGVO-Implementierung durch ADVISORI und wie wirkt sich dies auf Kundenvertrauen und Unternehmensbewertung aus?",
        answer: "Eine strategische DSGVO-Implementierung durch ADVISORI generiert messbaren Return on Investment, der weit über die Vermeidung von Bußgeldern hinausgeht. Datenschutz-Excellence wird zu einem quantifizierbaren Werttreiber, der Kundenvertrauen, Marktposition und Unternehmensbewertung signifikant positiv beeinflusst.\n\n💰 Direkte finanzielle Werttreiber und ROI-Faktoren:\n• Bußgeldvermeidung: DSGVO-Strafen können bis zu 4% des weltweiten Jahresumsatzes oder 20 Millionen Euro betragen. Professionelle Compliance eliminiert dieses existenzielle Risiko vollständig.\n• Premium-Pricing durch Vertrauen: Datenschutz-Excellence ermöglicht Premium-Preisgestaltung, da Kunden bereit sind, für vertrauensvolle Datenbehandlung mehr zu zahlen.\n• Kundenakquisition und -retention: Studien zeigen, dass 86% der Verbraucher Datenschutz als Entscheidungsfaktor nutzen, was direkt zu höheren Conversion-Raten und Kundenbindung führt.\n• Operative Effizienz: Systematische Datengovernance reduziert Redundanzen, verbessert Datenqualität und optimiert Geschäftsprozesse.\n\n📈 Strategische Wertsteigerung und Marktvorteile:\n• Erhöhte Unternehmensbewertung: ESG-konforme Unternehmen mit starkem Datenschutz erzielen höhere Bewertungsmultiplikatoren bei M&A-Transaktionen und IPOs.\n• Markterschließung: DSGVO-Compliance öffnet europäische und globale Märkte, da internationale Partner zunehmend Datenschutz-Excellence voraussetzen.\n• Investoren-Attraktivität: Institutionelle Investoren bevorzugen Unternehmen mit robusten Datenschutz- und Governance-Strukturen für langfristige Investments.\n• Innovation-Acceleration: Privacy-by-Design-Ansätze beschleunigen Produktentwicklung durch frühzeitige Integration von Compliance-Anforderungen statt nachträglicher Anpassungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Die Datenschutzlandschaft entwickelt sich rapide mit KI, IoT und Cloud-Computing. Wie stellt ADVISORI sicher, dass unsere DSGVO-Compliance auch emerging Technologies und zukünftige Regulierungen abdeckt?",
        answer: "Die digitale Transformation mit KI, IoT, Cloud Computing und anderen emerging Technologies stellt neue, komplexe Datenschutzherausforderungen dar. ADVISORI entwickelt zukunftsfähige DSGVO-Compliance-Frameworks, die nicht nur aktuelle Anforderungen erfüllen, sondern auch proaktiv auf kommende Technologien und Regulierungen vorbereiten.\n\n🚀 Future-Ready-Datenschutz für emerging Technologies:\n• AI-Privacy-Integration: Entwicklung spezialisierter Datenschutzframeworks für KI-Systeme, einschließlich Explainable AI, Bias-Vermeidung und algorithmischer Transparenz nach EU AI Act.\n• IoT-Datenschutz-Architektur: Implementation von Privacy-by-Design für vernetzte Geräte mit Edge-Computing, dezentraler Datenverarbeitung und minimaler Datensammlung.\n• Cloud-Privacy-Governance: Aufbau robuster Multi-Cloud-Datenschutzstrategien mit Berücksichtigung von Data Residency, Transfer-Mechanismen und Vendor-Management.\n• Quantum-Safe-Privacy: Proaktive Vorbereitung auf Quantum Computing durch Entwicklung quantum-resistenter Verschlüsselungsstrategien.\n\n🔮 Regulatorische Antizipation und adaptive Compliance:\n• Regulatory-Intelligence-System: Kontinuierliche Überwachung sich entwickelnder Datenschutzgesetze (Digital Services Act, Digital Markets Act, AI Act) und proaktive Integration in Compliance-Strategien.\n• Cross-Border-Compliance-Management: Entwicklung globaler Datenschutzframeworks, die verschiedene Jurisdiktionen (GDPR, CCPA, LGPD) harmonisieren.\n• Technology-Assessment-Framework: Etablierung von Prozessen zur frühzeitigen Bewertung neuer Technologien auf Datenschutzimplikationen vor deren Implementierung.\n• Future-Scenario-Planning: Entwicklung von Datenschutzstrategien für verschiedene Zukunftsszenarien und regulatorische Entwicklungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI DSGVO von einem Compliance-Kostenfaktor zu einem strategischen Business-Enabler für digitale Transformation und Kundenzentrierung?",
        answer: "ADVISORI revolutioniert das traditionelle Verständnis von DSGVO-Compliance, indem wir Datenschutz als zentralen Enabler für digitale Transformation und kundenzentrisches Wachstum positionieren. Für die C-Suite bedeutet dies, dass Datenschutzinvestitionen nicht nur Risiken minimieren, sondern aktiv Geschäftswert schaffen und Innovationen beschleunigen.\n\n🚀 Von Compliance zu strategischem Wettbewerbsvorteil:\n• Customer-Experience-Enhancement: Datenschutzkonforme Systeme verbessern das Kundenerlebnis durch transparente Datennutzung, personalisierte Services ohne Übergriffe und vertrauensvolle Interaktionen.\n• Innovation-Acceleration: Privacy-by-Design-Prinzipien fördern innovative Ansätze wie Federated Learning, Differential Privacy und Homomorphic Encryption, die neue Geschäftsmodelle ermöglichen.\n• Ecosystem-Partnership: DSGVO-Excellence öffnet Türen zu strategischen Partnerschaften mit führenden Technologieunternehmen, die hohe Datenschutzstandards voraussetzen.\n• Data-Monetization-Opportunities: Rechtskonforme Datennutzung erschließt neue Revenue-Streams durch ethische Datenmonetarisierung und vertrauensbasierte Datenpartnerschaften.\n\n💡 Strategische Wertschöpfung durch ADVISORI:\n• Digital-Transformation-Integration: Nahtlose Integration von Datenschutz in Digitalisierungsprojekte als Qualitätsmerkmal statt Hindernis.\n• Customer-Trust-Monetization: Entwicklung von Geschäftsmodellen, die Kundenvertrauen als messbaren Asset nutzen und monetarisieren.\n• Competitive-Intelligence-Protection: Robuste Datenschutzmaßnahmen schützen nicht nur Kundendaten, sondern auch sensible Geschäftsinformationen vor Wettbewerbern.\n• ESG-Value-Creation: Integration von Datenschutz in ESG-Strategien zur Steigerung des Unternehmenswertes und Erfüllung von Investor-Erwartungen."
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
