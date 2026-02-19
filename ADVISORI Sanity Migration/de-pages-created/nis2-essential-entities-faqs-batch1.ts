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
    console.log('Updating NIS2 Essential Entities page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-essential-entities' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-essential-entities" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist die korrekte Klassifikation als Essential Entity unter NIS2 für die C-Suite strategisch entscheidend und welche direkten Auswirkungen hat dies auf Governance und Haftung?",
        answer: "Die Klassifikation als Essential Entity unter der NIS2-Richtlinie ist weit mehr als nur eine regulatorische Kategorisierung – sie ist ein strategischer Wendepunkt, der fundamentale Auswirkungen auf Governance, Haftung und Unternehmenswert hat. Für die C-Suite bedeutet dieser Status sowohl erhöhte Verantwortung als auch strategische Chancen zur Differenzierung im Markt.\n\n⚖️ Direkte Governance- und Haftungsimplikationen:\n• Erweiterte persönliche Haftung der Geschäftsführung: Management ist direkt für die Umsetzung angemessener Cybersicherheitsmaßnahmen verantwortlich und kann bei Versäumnissen persönlich zur Rechenschaft gezogen werden.\n• Verschärfte Aufsichtsbefugnisse: Essential Entities unterliegen verstärkten Prüfungen, können zur Ad-hoc-Berichterstattung verpflichtet werden und müssen umfassende Nachweise ihrer Cybersicherheitsmaßnahmen vorlegen.\n• Erhöhte Sanktionsrisiken: Bußgelder von bis zu 2% des weltweiten Jahresumsatzes bei schwerwiegenden Verstößen gegen Cybersicherheitsmaßnahmen oder Meldepflichten.\n• Board-Level Accountability: Aufsichtsräte müssen nachweisen, dass sie Cybersicherheit als strategische Priorität behandeln und entsprechende Überwachungsmechanismen etabliert haben.\n\n🎯 Strategische Chancen und Wettbewerbsvorteile:\n• Vertrauensbildung bei Stakeholdern: Der Essential Entity Status kann als Qualitätsmerkmal für robuste Cybersicherheit gegenüber Kunden, Partnern und Investoren kommuniziert werden.\n• Präferenzstellung bei Ausschreibungen: Viele öffentliche und private Auftraggeber bevorzugen Anbieter mit nachgewiesener Cybersicherheits-Compliance.\n• Zugang zu privilegierten Informationen: Essential Entities erhalten oft bevorzugten Zugang zu Threat Intelligence und Sicherheitsbriefings von Behörden.\n• Grundlage für Cyber-Versicherungen: Nachgewiesene NIS2-Compliance kann zu günstigeren Konditionen bei Cyber-Versicherungen führen und das Vertrauen von Versicherern stärken."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie transformiert ADVISORI die NIS2-Compliance für Essential Entities von einer regulatorischen Belastung zu einem strategischen Enabler für digitale Transformation und Marktführerschaft?",
        answer: "ADVISORI versteht NIS2-Compliance für Essential Entities nicht als defensive Maßnahme, sondern als Fundament für digitale Exzellenz und nachhaltiges Wachstum. Für die C-Suite bedeutet dies, dass robuste Cybersicherheit zum Katalysator für Innovation und Marktexpansion wird, anstatt lediglich Risiken zu minimieren.\n\n🚀 Von Compliance zu strategischem Wettbewerbsvorteil:\n• Foundation für sichere Digitalisierung: Robuste NIS2-Compliance schafft das Vertrauen und die Sicherheitsarchitektur, die für ambitionierte Digitalisierungsprojekte erforderlich sind – von IoT-Integration bis hin zu KI-gestützten Geschäftsmodellen.\n• Basis für vertrauensvolle Partnerschaften: Essential Entities mit nachgewiesener Cybersicherheits-Exzellenz können strategische Allianzen mit anderen kritischen Infrastrukturen eingehen und gemeinsame Ökosysteme entwickeln.\n• Enabler für internationale Expansion: NIS2-Compliance erleichtert die Expansion in europäische Märkte und schafft Vertrauen bei internationalen Stakeholdern.\n• Grundlage für Premium-Positionierung: Unternehmen können ihre überlegene Cybersicherheit als Differenzierungsmerkmal nutzen und Premium-Preise für ihre Dienstleistungen rechtfertigen.\n\n💡 Der ADVISORI-Ansatz zur strategischen Transformation:\n• Business-Driven Security Architecture: Wir entwickeln Cybersicherheitsmaßnahmen, die nicht nur NIS2-konform sind, sondern auch geschäftliche Innovationen ermöglichen und unterstützen.\n• Innovation-Security Integration: Etablierung von Prozessen, die Cybersicherheitsüberlegungen von Anfang an in neue Geschäftsinitiativen und Produktentwicklungen integrieren.\n• Continuous Compliance as a Service: Implementierung automatisierter Überwachungs- und Berichterstattungssysteme, die Compliance-Aufwände minimieren und gleichzeitig kontinuierliche Verbesserungen ermöglichen.\n• Executive Decision Support: Bereitstellung von Business Intelligence Dashboards, die C-Level-Führungskräften ermöglichen, Cybersicherheitsinvestitionen direkt mit Geschäftszielen zu verknüpfen und ROI zu demonstrieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche konkreten finanziellen Auswirkungen und ROI-Potenziale entstehen durch die NIS2-Compliance für Essential Entities und wie quantifiziert ADVISORI diese für die C-Suite?",
        answer: "Die NIS2-Compliance für Essential Entities erfordert substanzielle Investitionen, aber ADVISORI demonstriert der C-Suite, wie diese Ausgaben nicht nur regulatorische Risiken minimieren, sondern auch konkrete finanzielle Renditen generieren und langfristig die Unternehmensbewertung steigern können.\n\n💰 Direkte finanzielle Auswirkungen und Kostenvermeidung:\n• Vermeidung von Sanktionen: Bei einem Jahresumsatz von 500 Millionen Euro können Sanktionen bis zu 10 Millionen Euro betragen – eine robuste Compliance-Strategie schützt vor diesen existenzbedrohenden Risiken.\n• Reduzierung von Cyber-Incident-Kosten: Durchschnittliche Kosten eines Cybersecurity-Incidents für kritische Infrastrukturen liegen bei 4,5 Millionen Euro – effektive NIS2-Maßnahmen können diese um 60-80% reduzieren.\n• Optimierung von Versicherungskosten: Nachgewiesene NIS2-Compliance kann Cyber-Versicherungsprämien um 15-25% senken und gleichzeitig den Versicherungsschutz erweitern.\n• Vermeidung von Betriebsunterbrechungen: Jede Stunde Ausfallzeit kritischer Systeme kostet Essential Entities durchschnittlich 500.000-2 Millionen Euro – robuste Continuity-Maßnahmen minimieren diese Risiken erheblich.\n\n📈 Strategische Wertsteigerung und Revenue-Generierung:\n• Premium-Pricing durch Sicherheitsexzellenz: Essential Entities können für cybersichere Dienstleistungen 10-15% höhere Preise durchsetzen, da Kunden bereit sind, für nachgewiesene Sicherheit zu zahlen.\n• Neue Geschäftsmöglichkeiten: Compliance-Exzellenz öffnet Türen zu hochsicherheitsrelevanten Projekten und Ausschreibungen, die anderen Anbietern verschlossen bleiben.\n• Erhöhte Unternehmensbewertung: Investoren bewerten Essential Entities mit robuster Cybersicherheit mit einem 15-20% höheren Multiplikator, da Risiken reduziert und Zukunftsfähigkeit demonstriert wird.\n• Operational Excellence: Automatisierte Compliance-Prozesse reduzieren manuelle Aufwände um 40-60% und schaffen Kapazitäten für wertschöpfende Aktivitäten, was direkt die operative Marge verbessert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie stellt ADVISORI sicher, dass Essential Entities nicht nur kurzfristig NIS2-konform sind, sondern langfristig resilient gegenüber evolving threats und regulatorischen Änderungen bleiben?",
        answer: "Für Essential Entities ist statische Compliance unzureichend – die dynamische Bedrohungslandschaft und sich entwickelnde regulatorische Anforderungen erfordern adaptive Resilienz. ADVISORI etabliert für die C-Suite zukunftssichere Cybersicherheits-Ökosysteme, die nicht nur heutige NIS2-Anforderungen erfüllen, sondern auch auf zukünftige Herausforderungen vorbereitet sind.\n\n🔄 Adaptive Compliance-Architektur für langfristige Resilienz:\n• Continuous Threat Intelligence Integration: Implementierung automatisierter Systeme, die aktuelle Bedrohungsinformationen in Echtzeit analysieren und Sicherheitsmaßnahmen dynamisch anpassen.\n• Predictive Compliance Monitoring: Nutzung von KI-gestützten Analysesystemen, die regulatorische Trends identifizieren und proaktive Anpassungen der Compliance-Strategien ermöglichen.\n• Scenario-Based Preparedness: Entwicklung und regelmäßige Aktualisierung von Szenarien für verschiedene Bedrohungs- und Regulierungslagen, einschließlich Cyber-Warfare, Pandemien und geopolitischen Krisen.\n• Technology Agnostic Security Framework: Aufbau flexibler Sicherheitsarchitekturen, die unabhängig von spezifischen Technologien funktionieren und sich an neue IT-Umgebungen anpassen können.\n\n🛡️ Proaktive Zukunftssicherung durch ADVISORI:\n• Regulatory Horizon Scanning: Kontinuierliche Überwachung regulatorischer Entwicklungen auf EU- und nationaler Ebene, um Essential Entities frühzeitig auf kommende Anforderungen vorzubereiten.\n• Next-Generation Security Integration: Beratung bei der Integration emerging technologies wie Quantum-Resistant Cryptography, Zero Trust Architecture und AI-powered Security Operations.\n• Cross-Sector Learning Networks: Aufbau von Peer-to-Peer-Netzwerken mit anderen Essential Entities zum Erfahrungsaustausch und kollektiven Lernen von Best Practices.\n• Executive Preparedness Programs: Regelmäßige Strategic Security Reviews mit der C-Suite, um sicherzustellen, dass Cybersicherheitsstrategien mit der Unternehmensentwicklung und sich ändernden Marktbedingungen Schritt halten.\n• Crisis-Ready Governance: Etablierung von Entscheidungsstrukturen und Eskalationsprozessen, die es Essential Entities ermöglichen, in kritischen Situationen schnell und koordiniert zu reagieren, ohne die Geschäftskontinuität zu gefährden."
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
