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
    console.log('Updating EU AI Act Technical Documentation page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act-technical-documentation' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act-technical-documentation" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist eine strategische Herangehensweise an die technische Dokumentation für KI-Systeme für die C-Suite kritisch und wie transformiert ADVISORI diese von einer Compliance-Last zu einem Geschäftsvorteil?",
        answer: "Für die Führungsebene stellt die technische Dokumentation von KI-Systemen weit mehr dar als eine regulatorische Pflicht – sie ist ein strategisches Instrument zur Risikominimierung, Qualitätssicherung und Vertrauensbildung. Eine systematische, umfassende Dokumentation schafft Transparenz, ermöglicht fundierte Geschäftsentscheidungen und positioniert das Unternehmen als vertrauenswürdigen KI-Anbieter im Markt.\n\n🎯 Strategische Wertschöpfung durch technische Dokumentation:\n• Risikominimierung und Haftungsreduzierung: Umfassende Dokumentation minimiert rechtliche Risiken und reduziert potenzielle Haftungsansprüche durch nachweisbare Sorgfaltspflicht und Transparenz.\n• Qualitätssicherung und Systemoptimierung: Systematische Dokumentation deckt Schwachstellen auf, ermöglicht kontinuierliche Verbesserungen und erhöht die Systemqualität und -zuverlässigkeit.\n• Vertrauensaufbau bei Stakeholdern: Transparente, vollständige Dokumentation schafft Vertrauen bei Kunden, Partnern, Investoren und Aufsichtsbehörden und ermöglicht Premium-Positionierung.\n• Beschleunigte Markteinführung: Strukturierte Dokumentationsprozesse verkürzen Entwicklungszyklen, reduzieren Nacharbeiten und ermöglichen schnellere Produktzulassungen.\n• Wissensmanagement und Innovation: Systematische Dokumentation konserviert kritisches Wissen, erleichtert Wissenstransfer und beschleunigt Innovationsprozesse.\n\n🛡️ ADVISORIs transformativer Dokumentationsansatz:\n• Strategische Dokumentationsarchitektur: Entwicklung von Dokumentationsframeworks, die nicht nur Compliance erfüllen, sondern als strategische Assets für Geschäftsentwicklung und Risikomanagement fungieren.\n• Automatisierte Dokumentationsprozesse: Implementierung intelligenter Tools und Workflows, die Dokumentationsaufwand reduzieren und gleichzeitig Vollständigkeit und Aktualität sicherstellen.\n• Integration in Geschäftsprozesse: Nahtlose Einbindung der Dokumentation in bestehende Entwicklungs-, Qualitäts- und Compliance-Prozesse zur Maximierung von Effizienz und Wertschöpfung.\n• Stakeholder-optimierte Kommunikation: Entwicklung zielgruppenspezifischer Dokumentationsformate für effektive Kommunikation mit Kunden, Partnern und Regulierungsbehörden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche kritischen Geschäftsrisiken entstehen durch unzureichende technische Dokumentation unserer KI-Systeme und wie kann ADVISORI diese in strategische Chancen verwandeln?",
        answer: "Unzureichende technische Dokumentation von KI-Systemen birgt erhebliche Geschäftsrisiken, die weit über regulatorische Strafen hinausgehen und die Wettbewerbsfähigkeit, Innovation und Marktposition fundamental gefährden können. ADVISORI unterstützt Sie dabei, diese Risiken zu identifizieren, zu minimieren und Dokumentation als strategischen Wettbewerbsvorteil zu positionieren.\n\n⚠️ Kritische Geschäftsrisiken unzureichender KI-Dokumentation:\n• Regulatorische Sanktionen und Marktzugang: Unvollständige Dokumentation kann zu erheblichen Bußgeldern, Marktzugangsverboten und verstärkter regulatorischer Überwachung führen.\n• Haftungs- und Rechtsrisiken: Fehlende Nachweise über Sorgfaltspflicht und Risikobeurteilung erhöhen das Haftungsrisiko bei KI-bedingten Schäden oder Diskriminierung.\n• Vertrauensverlust und Reputationsschäden: Intransparente KI-Systeme untergraben das Vertrauen von Kunden, Partnern und Öffentlichkeit und können zu nachhaltigen Reputationsschäden führen.\n• Qualitätsmängel und Systemausfälle: Unzureichende Dokumentation erschwert Fehlerbehebung, verzögert Updates und erhöht das Risiko von Systemausfällen oder Fehlfunktionen.\n• Innovationshemmnisse: Schlechte Dokumentation verlangsamt Produktentwicklung, erschwert Wissenstransfer und hemmt die Skalierung erfolgreicher KI-Anwendungen.\n\n🌟 ADVISORIs Transformationsansatz – von Risiken zu strategischen Chancen:\n• Risiko-zu-Wert-Transformation: Systematische Identifikation von Dokumentationslücken mit hohem Geschäftsrisiko und deren Transformation in Wettbewerbsvorteile durch proaktive Dokumentationsexzellenz.\n• Qualitäts- und Innovation-Acceleration: Implementierung von Dokumentationsprozessen, die gleichzeitig Compliance sicherstellen und Produktqualität, Entwicklungsgeschwindigkeit und Innovationsfähigkeit steigern.\n• Vertrauens-basiertes Marketing: Transformation transparenter Dokumentation in ein Marketinginstrument für Vertrauensaufbau und Premium-Positionierung.\n• Operative Effizienz-Steigerung: Entwicklung von Dokumentationsframeworks, die Entwicklungskosten reduzieren, Time-to-Market verkürzen und operative Exzellenz fördern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir technische Dokumentation strategisch nutzen, um unsere KI-Produkte zu differenzieren und neue Marktchancen zu erschließen?",
        answer: "Technische Dokumentation kann als mächtiges strategisches Instrument zur Marktdifferenzierung und Erschließung neuer Geschäftschancen eingesetzt werden. Während Wettbewerber Dokumentation oft als Kostenfaktor betrachten, ermöglicht ein durchdachter Ansatz die Positionierung als Qualitäts- und Vertrauensführer, was Premium-Pricing und neue Marktchancen eröffnet.\n\n🚀 Strategische Marktdifferenzierung durch Dokumentationsexzellenz:\n• Vertrauens-Premium und Qualitätspositionierung: Außergewöhnlich transparente, vollständige Dokumentation ermöglicht Premium-Pricing durch nachgewiesene Qualität und Vertrauenswürdigkeit.\n• Regulatorische Vorreiterrolle: Proaktive Dokumentationsstandards positionieren Sie als Branchenführer und bevorzugten Partner für regulatorisch sensible Projekte und Ausschreibungen.\n• Technologie-Transparenz als USP: Offene, verständliche Dokumentation kann als Unique Selling Proposition für ethisch bewusste Kunden und Partner dienen.\n• Beschleunigte Partnerintegration: Exzellente Dokumentation verkürzt Onboarding-Zeiten für Partner und Kunden und ermöglicht schnellere Skalierung.\n• Innovation Showcase: Technische Dokumentation kann als Schaufenster für technische Kompetenz und Innovation dienen und neue Kundengruppen anziehen.\n\n🎯 ADVISORIs Markterschließungsstrategien:\n• Dokumentation als Verkaufsinstrument: Entwicklung kundenorientierter Dokumentationsformate, die technische Exzellenz kommunizieren und Vertrauen aufbauen.\n• Regulatorische Differenzierung: Positionierung als Compliance-Leader durch überlegene Dokumentationsstandards, die neue Marktsegmente und Kundengruppen erschließen.\n• Partnership-Enablement: Gestaltung von Dokumentation als Enabler für strategische Partnerschaften und Ecosystem-Integration.\n• Thought Leadership: Nutzung fortschrittlicher Dokumentationspraktiken zur Etablierung als Branchenexperte und Meinungsführer."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche strategischen Investitionsüberlegungen sollte die C-Suite bei der Implementierung fortschrittlicher technischer Dokumentationssysteme berücksichtigen?",
        answer: "Die Investition in fortschrittliche technische Dokumentationssysteme für KI erfordert eine strategische Herangehensweise, die über kurzfristige Compliance-Kosten hinausdenkt und langfristige Wertschöpfung, Risikominimierung und Wettbewerbsvorteile berücksichtigt. Die richtige Investitionsentscheidung kann erhebliche ROI generieren und das Unternehmen strategisch positionieren.\n\n💰 Strategische Investitionsüberlegungen für Dokumentationssysteme:\n• ROI-Berechnung und Wertschöpfung: Systematische Bewertung der Investitionsrendite durch reduzierte Compliance-Kosten, vermiedene Strafen, beschleunigte Produktentwicklung und Premium-Pricing-Möglichkeiten.\n• Skalierbarkeit und Zukunftssicherheit: Auswahl von Dokumentationslösungen, die mit dem Unternehmenswachstum skalieren und zukünftige regulatorische Anforderungen antizipieren.\n• Integration und Synergien: Berücksichtigung von Integrationsmöglichkeiten mit bestehenden Systemen und Potenzialen für operative Synergien in Entwicklung, Qualität und Compliance.\n• Risikominimierung und Haftungsreduzierung: Bewertung der Investition als Risikomanagement-Tool zur Reduzierung rechtlicher, regulatorischer und operationeller Risiken.\n• Wettbewerbsvorteile und Marktpositionierung: Einschätzung der strategischen Vorteile durch Dokumentationsexzellenz in der Marktpositionierung und Kundenakquisition.\n\n🎯 ADVISORIs strategischer Investitionsberatungsansatz:\n• Total Economic Impact-Analyse: Umfassende Bewertung aller direkten und indirekten Wertschöpfungseffekte einer fortschrittlichen Dokumentationsstrategie.\n• Phasenweise Implementierung: Entwicklung einer schrittweisen Umsetzungsstrategie, die schnelle Wins ermöglicht und Investitionsrisiken minimiert.\n• Technology ROI-Optimierung: Auswahl und Konfiguration von Dokumentationstools, die maximale Effizienz und Wertschöpfung bei optimalen Investitionskosten bieten.\n• Strategic Business Case: Entwicklung überzeugender Business Cases, die sowohl quantitative ROI-Faktoren als auch strategische Wettbewerbsvorteile berücksichtigen."
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
