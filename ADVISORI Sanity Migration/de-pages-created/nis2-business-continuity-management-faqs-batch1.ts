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
    console.log('Updating NIS2 Business Continuity Management page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-business-continuity-management' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-business-continuity-management" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist NIS2-konformes Business Continuity Management für die C-Suite mehr als nur Compliance und wie transformiert ADVISORI dies zu einem strategischen Wettbewerbsvorteil?",
        answer: "Die NIS2-Richtlinie hat Business Continuity Management (BCM) von einer operativen Notwendigkeit zu einem strategischen Imperativ für die Unternehmensführung erhoben. Für kritische und wichtige Einrichtungen bedeutet dies nicht nur die Erfüllung regulatorischer Mindestanforderungen, sondern die Schaffung einer robusten Basis für nachhaltiges Geschäftswachstum und Marktführerschaft. ADVISORI positioniert NIS2-BCM als Katalysator für operative Exzellenz und strategische Differenzierung.\n\n🎯 Strategische Transformation durch NIS2-BCM:\n• Resilienz als Marktdifferenzierung: Unternehmen mit nachweislich robusten BCM-Systemen gewinnen Vertrauen bei Kunden, Partnern und Investoren, was direkt in Marktanteile und Unternehmenswert übersetzt.\n• Operative Effizienzsteigerung: Die systematische Analyse und Optimierung kritischer Geschäftsprozesse im Rahmen der NIS2-Compliance führt zu strukturellen Verbesserungen der Betriebsabläufe.\n• Risikominimierung und Kostenreduktion: Proaktive BCM-Maßnahmen reduzieren sowohl die Wahrscheinlichkeit als auch die Auswirkungen von Betriebsunterbrechungen erheblich.\n• Regulatorische Sicherheit: Vollständige NIS2-Compliance schützt vor Sanktionen bis zu 10 Millionen Euro oder 2% des weltweiten Jahresumsatzes.\n\n💡 Der ADVISORI-Ansatz für strategisches NIS2-BCM:\n• Geschäftsorientierte BCM-Architektur: Wir entwickeln BCM-Systeme, die nicht nur NIS2-Anforderungen erfüllen, sondern auch Ihre Geschäftsstrategie und Wachstumsziele unterstützen.\n• C-Level-Dashboard und Governance: Bereitstellung von Management-Dashboards, die der Geschäftsleitung transparente Einblicke in die BCM-Performance und deren Beitrag zu den Unternehmenszielen geben.\n• Integrierte Risikosteuerung: Verknüpfung des BCM mit Ihrem Enterprise Risk Management, um eine ganzheitliche Sicht auf Geschäftsrisiken und deren Steuerung zu ermöglichen.\n• Kontinuierliche Wertschöpfung: Etablierung von Prozessen, die BCM-Investitionen kontinuierlich in messbare Geschäftsvorteile umwandeln."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifiziert ADVISORI den ROI von NIS2-Business Continuity Investitionen und welchen messbaren Beitrag leistet dies zur EBITDA-Optimierung?",
        answer: "Die Investition in NIS2-konformes Business Continuity Management generiert sowohl quantifizierbare als auch strategische Renditen, die sich direkt auf die Profitabilität und den Unternehmenswert auswirken. ADVISORI entwickelt ROI-Modelle, die sowohl Kostenersparnisse als auch Wertsteigerungen transparent machen und der C-Suite fundierte Entscheidungsgrundlagen für BCM-Investitionen liefern.\n\n💰 Direkte EBITDA-Auswirkungen und Kostenoptimierung:\n• Vermeidung von Betriebsunterbrechungen: Jede verhinderte Stunde Ausfallzeit kritischer Systeme schützt direkt Umsätze und vermeidet Notfallkosten. Bei kritischen Infrastrukturen können Ausfallkosten 100.000€ bis mehrere Millionen Euro pro Stunde betragen.\n• Reduktion von Compliance-Kosten: Systematisches NIS2-BCM reduziert den Aufwand für ad-hoc Compliance-Maßnahmen und externe Beratungskosten erheblich.\n• Optimierung von Versicherungsprämien: Nachweisbare BCM-Kapazitäten führen zu günstigeren Cyber-Versicherungsprämien und besseren Konditionen bei Betriebshaftpflichtversicherungen.\n• Vermeidung regulatorischer Sanktionen: Vollständige NIS2-Compliance schützt vor empfindlichen Geldstrafen und den damit verbundenen Reputationsschäden.\n\n📈 Strategische Werttreiber und Wachstumseffekte:\n• Beschleunigte Markterschließung: Robuste BCM-Systeme ermöglichen es, neue Märkte und Geschäftsfelder mit geringerem Risiko zu erschließen.\n• Verbesserte Kapitalkosten: Banken und Investoren bewerten Unternehmen mit nachweislicher Resilienz positiver, was zu günstigeren Finanzierungskonditionen führt.\n• Erhöhte Kundenbindung: Zuverlässige Dienstleistungserbringung auch in Krisenzeiten stärkt die Kundenloyalität und ermöglicht Premium-Pricing.\n• M&A-Vorteile: Unternehmen mit exzellenten BCM-Systemen sind attraktivere Übernahmeziele und erzielen höhere Bewertungen bei Transaktionen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Die NIS2-Richtlinie fordert kontinuierliche Anpassung an sich entwickelnde Bedrohungen. Wie stellt ADVISORI sicher, dass unser BCM-System dynamisch und zukunftsfähig bleibt?",
        answer: "Die NIS2-Richtlinie erkennt an, dass statische Sicherheitsmaßnahmen in der heutigen dynamischen Bedrohungslandschaft unzureichend sind. Sie fordert explizit adaptive und sich kontinuierlich weiterentwickelnde BCM-Systeme. ADVISORI implementiert zukunftsorientierte BCM-Architekturen, die nicht nur aktuelle NIS2-Anforderungen erfüllen, sondern auch proaktiv auf neue Bedrohungen und regulatorische Entwicklungen reagieren können.\n\n🔄 Adaptive BCM-Architektur als Antwort auf NIS2:\n• Threat Intelligence Integration: Kontinuierliche Einbindung aktueller Bedrohungsinformationen in die BCM-Planung, um neue Risikoszenarien frühzeitig zu identifizieren und entsprechende Gegenmaßnahmen zu entwickeln.\n• Szenario-basierte Resilienzplanung: Entwicklung und regelmäßige Aktualisierung von BCM-Szenarien, die sowohl traditionelle Risiken als auch emerging threats wie KI-gestützte Angriffe, Supply Chain Attacks und Hybrid-Warfare berücksichtigen.\n• Automatisierte Monitoring- und Response-Systeme: Implementierung von KI-gestützten Systemen zur kontinuierlichen Überwachung der BCM-Effektivität und automatischen Anpassung von Schutzmaßnahmen.\n• Regulatory Change Management: Etablierung von Prozessen zur proaktiven Verfolgung und Umsetzung von Änderungen in der NIS2-Richtlinie und verwandten Regulierungen.\n\n⚡ ADVISORI's Zukunftssicherung für Ihr BCM:\n• Modulare und skalierbare BCM-Systeme: Unsere Lösungen sind so konzipiert, dass sie schnell an neue Anforderungen angepasst und erweitert werden können, ohne die bestehende Infrastruktur grundlegend zu ändern.\n• Predictive Analytics für BCM: Einsatz von Machine Learning zur Vorhersage potenzieller Schwachstellen und zur Optimierung von Wiederherstellungsstrategien.\n• Ecosystem-Integration: Verknüpfung Ihres BCM mit externen Partnern, Lieferanten und Behörden für eine ganzheitliche Resilienz entlang der gesamten Wertschöpfungskette.\n• Kontinuierliches Learning und Improvement: Etablierung von Feedback-Loops aus Tests, Übungen und echten Vorfällen zur kontinuierlichen Verbesserung der BCM-Effektivität."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI NIS2-Business Continuity Management von einer reinen Compliance-Funktion zu einem strategischen Enabler für Digitalisierung und Innovation?",
        answer: "Die NIS2-Richtlinie schafft eine einzigartige Gelegenheit, Business Continuity Management als strategischen Hebel für Digitalisierung und Innovation zu nutzen. Anstatt BCM als regulatorische Hürde zu betrachten, positioniert ADVISORI es als Fundament für sichere digitale Transformation und als Katalysator für neue Geschäftsmodelle. Dies ermöglicht es C-Level-Führungskräften, Compliance-Investitionen in strategische Wettbewerbsvorteile umzuwandeln.\n\n🚀 BCM als Digitalisierungs-Enabler:\n• Sichere Cloud-Transformation: NIS2-konformes BCM schafft das Vertrauen und die Sicherheitsarchitektur, die für mutige Cloud-Migrationen und hybride IT-Landschaften erforderlich sind.\n• Resilienz-by-Design für neue Technologien: Integration von BCM-Prinzipien in die Entwicklung und Einführung neuer digitaler Services, IoT-Systeme und KI-Anwendungen von Beginn an.\n• Agile Business Model Innovation: Robuste BCM-Systeme ermöglichen es, neue Geschäftsmodelle und digitale Services schneller und mit geringerem Risiko zu testen und zu skalieren.\n• Data-driven Decision Making: Die umfassende Datensammlung und -analyse im Rahmen des NIS2-BCM liefert wertvolle Insights für strategische Geschäftsentscheidungen.\n\n💡 ADVISORI's Innovationsansatz für strategisches BCM:\n• DevSecOps-Integration: Einbindung von BCM-Überlegungen in agile Entwicklungsprozesse, um Resilienz bereits in der Designphase neuer Anwendungen zu berücksichtigen.\n• Digital Twin für BCM: Entwicklung digitaler Zwillinge Ihrer kritischen Infrastrukturen zur Simulation und Optimierung von BCM-Maßnahmen.\n• AI-powered Predictive BCM: Nutzung künstlicher Intelligenz zur Vorhersage und Prävention von Störungen sowie zur Optimierung von Wiederherstellungsstrategien.\n• Innovation Labs für Resilienz: Etablierung von Innovationslaboren, in denen neue BCM-Technologien und -Methoden getestet und entwickelt werden können, bevor sie in die Produktion übernommen werden."
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
