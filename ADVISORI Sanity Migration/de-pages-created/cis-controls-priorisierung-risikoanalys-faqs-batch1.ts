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
    console.log('Updating CIS Controls Priorisierung & Risikoanalyse page with C-Level FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cis-controls-priorisierung-risikoanalys' })
    
    if (!existingDoc) {
      throw new Error('Document "cis-controls-priorisierung-risikoanalys" not found')
    }
    
    // Create new C-Level FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist eine strategische Priorisierung der CIS Controls für C-Level-Entscheidungsträger geschäftskritisch und wie unterscheidet sich ADVISORIs Ansatz von standardisierten Implementierungen?",
        answer: "Für C-Level-Führungskräfte ist die strategische Priorisierung der CIS Controls kein technisches Detail, sondern eine fundamentale Geschäftsentscheidung mit direkten Auswirkungen auf Risikoprofil, Kapitalallokation und Wettbewerbsfähigkeit. Eine undifferenzierte Implementierung aller 18 Controls kann zu erheblichen Ressourcenverschwendungen führen und strategische Chancen verpassen lassen.\n\n🎯 Geschäftskritische Bedeutung strategischer CIS Controls Priorisierung:\n• Optimierte Ressourcenallokation: Konzentration der Cyber-Security-Investitionen auf die Controls mit dem höchsten Risikoreduktionspotenzial für Ihre spezifische Geschäftstätigkeit.\n• Beschleunigte Time-to-Value: Durch risikobasierte Priorisierung erreichen Sie schnellere Sicherheitsverbesserungen in den geschäftskritischsten Bereichen.\n• Compliance-Effizienz: Strategische Fokussierung auf die Controls, die gleichzeitig multiple regulatorische Anforderungen erfüllen und Audit-Aufwände reduzieren.\n• Wettbewerbsvorteile: Während Konkurrenten ressourcenintensive Vollimplementierungen verfolgen, ermöglicht strategische Priorisierung agile Anpassungen an sich ändernde Bedrohungslandschaften.\n\n🛡️ ADVISORIs differenzierender strategischer Ansatz:\n• Quantitative Risikomodellierung: Wir nutzen Monte-Carlo-Simulationen und Bayes'sche Netzwerke zur präzisen Bewertung des Risikoreduktionspotenzials jedes Controls in Ihrem spezifischen Kontext.\n• Business-Impact-Orientierung: Unsere Priorisierung basiert nicht nur auf technischen Schwachstellen, sondern integriert Geschäftsprozessanalysen und Revenue-at-Risk-Berechnungen.\n• Dynamische Anpassungsfähigkeit: Entwicklung adaptiver Priorisierungsframeworks, die sich automatisch an veränderte Bedrohungslandschaften und Geschäftsanforderungen anpassen.\n• ROI-Maximierung: Jeder Control wird hinsichtlich seiner Kosten-Nutzen-Relation bewertet, um maximale Sicherheitswirkung pro investiertem Euro zu erzielen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können wir durch datengetriebene CIS Controls Priorisierung messbare Verbesserungen unserer Cyber-Resilienz erreichen und gleichzeitig Investitionsrisiken minimieren?",
        answer: "Datengetriebene CIS Controls Priorisierung transformiert Cyber-Security von einem kostenzentrierten Overhead zu einem strategischen Value-Driver, der messbare Geschäftsvorteile generiert. Durch wissenschaftlich fundierte Methoden können Sie nicht nur Ihre Cyber-Resilienz signifikant steigern, sondern auch das Investitionsrisiko bei Security-Initiativen dramatisch reduzieren.\n\n📊 Messbare Verbesserungen durch datengetriebene Priorisierung:\n• Quantifizierbare Risikoreduktion: Durch präzise Bedrohungsmodellierung können wir den exakten Risikoreduktionswert jedes Controls in Euro berechnen und nachweisen.\n• KPI-basierte Erfolgsmessung: Entwicklung spezifischer Metriken wie Mean Time to Detection (MTTD), Mean Time to Response (MTTR) und Cyber Value at Risk (CVaR) für kontinuierliche Optimierung.\n• Benchmark-Vergleiche: Positionierung Ihrer Cyber-Resilienz gegen branchenspezifische Standards und Best-in-Class-Performers zur strategischen Zielsetzung.\n• Compliance-Automatisierung: Strategische Controls-Auswahl, die multiple Compliance-Anforderungen gleichzeitig erfüllt und Audit-Kosten um bis zu 60% reduziert.\n\n🔬 Wissenschaftlich fundierte Risikominimierung:\n• Probabilistische Risikomodelle: Einsatz fortschrittlicher statistischer Methoden zur Prädiktion von Bedrohungswahrscheinlichkeiten und Schadenspotenzialen.\n• Sensitivitätsanalysen: Systematische Bewertung, wie verschiedene Implementierungsreihenfolgen das Gesamtrisikoprofil beeinflussen.\n• Portfoliotheorie-Ansatz: Anwendung moderner Portfoliotheorie zur Optimierung der Controls-Kombination für maximale Risikodiversifikation.\n• Scenario-Planning: Entwicklung multipler Implementierungsszenarien mit quantifizierten Erfolgswahrscheinlichkeiten und Fallback-Strategien."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche konkreten ROI-Verbesserungen können wir durch strategische CIS Controls Priorisierung erwarten und wie lange dauert die Amortisation der Investition?",
        answer: "Strategische CIS Controls Priorisierung kann zu außergewöhnlichen ROI-Verbesserungen führen, die weit über die reine Risikoreduktion hinausgehen. Unsere Erfahrung zeigt, dass Unternehmen durch datengetriebene Priorisierung nicht nur ihre Cyber-Security-Effektivität um 40-60% steigern, sondern auch die Gesamtkosten der Implementierung um 25-35% reduzieren können.\n\n💰 Konkrete ROI-Verbesserungen und Amortisationszeiten:\n• Direkte Kosteneinsparungen: Vermeidung von Überinvestitionen in niedrig-priorisierte Controls führt zu typischen Einsparungen von 200.000-500.000 EUR bei mittelständischen Unternehmen.\n• Beschleunigte Implementierung: Fokussierte Umsetzung der wichtigsten Controls reduziert Projektlaufzeiten um 30-50% und damit verbundene Personalkosten.\n• Reduzierte Incident-Costs: Prioritäre Implementierung der wirksamsten Controls kann die erwarteten jährlichen Cyber-Verluste um 60-80% reduzieren.\n• Amortisation: Typische Amortisationszeiten liegen zwischen 8-14 Monaten, abhängig von der Unternehmensgröße und Ausgangssituation.\n\n🎯 Langfristige strategische Wertschöpfung:\n• Operative Effizienzgewinne: Automatisierte, priorisierte Controls reduzieren manuelle Security-Prozesse und schaffen Kapazitäten für strategische Initiativen.\n• Compliance-Kostenoptimierung: Strategische Controls-Auswahl erfüllt multiple regulatorische Anforderungen und reduziert Compliance-Aufwände um 40-60%.\n• Reputations- und Vertrauensgewinn: Nachweislich robuste Cyber-Security stärkt Kundenvertrauen und kann zu 5-15% höheren Margen bei sicherheitssensitiven Produkten führen.\n• Versicherungsoptimierung: Dokumentierte, risikobasierte Security-Maßnahmen können Cyber-Versicherungsprämien um 20-40% reduzieren und bessere Deckungskonditionen ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie integriert ADVISORI die CIS Controls Priorisierung in unsere bestehende IT-Governance und Risk-Management-Frameworks ohne Disruption der Geschäftsprozesse?",
        answer: "Die nahtlose Integration der CIS Controls Priorisierung in bestehende IT-Governance und Risk-Management-Frameworks ist entscheidend für den langfristigen Erfolg und die nachhaltige Wertschöpfung. ADVISORI hat speziell entwickelte Methoden zur non-disruptiven Integration, die Ihre bestehenden Prozesse stärken statt zu stören und gleichzeitig die Governance-Qualität signifikant verbessern.\n\n🏗️ Nahtlose Framework-Integration ohne Geschäftsdisruption:\n• Bestehende Governance-Strukturen als Fundament: Wir analysieren Ihre aktuellen IT-Governance-Prozesse und bauen die CIS Controls organisch in bestehende Strukturen ein, statt parallele Systeme zu schaffen.\n• Schrittweise Einführung: Phased-Approach mit Pilot-Implementierungen in unkritischen Bereichen zur Risikominimierung und kontinuierlichen Anpassung.\n• Stakeholder-Alignment: Systematische Einbindung aller relevanten Governance-Ebenen (Board, CRO, CISO, IT-Leitung) mit klar definierten Rollen und Verantwortlichkeiten.\n• Change-Management: Strukturierte Begleitung der organisatorischen Transformation mit Schulungen, Kommunikationsstrategien und Performance-Monitoring.\n\n⚙️ Technische und prozessuale Integration:\n• API-basierte Systemintegration: Entwicklung von Schnittstellen zu bestehenden GRC-Systemen, SIEM-Lösungen und IT-Service-Management-Plattformen für nahtlosen Datenfluss.\n• Harmonisierte Metriken: Alignment der CIS Controls KPIs mit bestehenden Risk-Metriken und Board-Reporting-Strukturen für konsistente Steuerung.\n• Automated Compliance-Monitoring: Integration in bestehende Monitoring-Infrastrukturen zur automatischen Überwachung der Controls-Compliance ohne zusätzlichen manuellen Aufwand.\n• Bestehende Tools maximieren: Optimierung und Erweiterung bereits vorhandener Security-Tools statt kostspieliger Neuanschaffungen, um Synergien zu nutzen und Lernkurven zu minimieren."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ C-Level FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
