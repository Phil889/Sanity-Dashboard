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
    console.log('Updating CRR/CRD Implementation page with FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'crr-crd-implementation' })
    
    if (!existingDoc) {
      throw new Error('Document "crr-crd-implementation" not found')
    }
    
    // Create new FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche strategischen Vorteile bietet eine proaktive CRR/CRD-Implementierung für Finanzinstitute, und wie unterstützt ADVISORI dabei?",
        answer: "Eine proaktive Implementierung der CRR/CRD-Anforderungen geht weit über die bloße Erfüllung regulatorischer Pflichten hinaus und eröffnet strategische Chancen für zukunftsorientierte Finanzinstitute. Ein vorausschauender Ansatz ermöglicht nicht nur die Vermeidung von Compliance-Risiken, sondern auch die Optimierung der Kapitalstruktur und die Stärkung der Marktposition in einem zunehmend komplexen Regulierungsumfeld.\n\n🔍 Strategische Dimensionen einer proaktiven CRR/CRD-Implementierung:\n• Wettbewerbsvorteil durch regulatorische Exzellenz: Institute, die regulatorische Anforderungen frühzeitig und effizient umsetzen, gewinnen Handlungsspielraum gegenüber reaktiven Wettbewerbern und können neue Geschäftschancen schneller nutzen.\n• Optimierte Kapitalallokation: Eine durchdachte Implementierung ermöglicht die Identifikation von Kapitalineffizienzen und die gezielte Optimierung der RWA-Berechnung, wodurch Kapital für strategische Investitionen freigesetzt werden kann.\n• Verbessertes Risikomanagement: Die Integration fortschrittlicher Risikomessverfahren führt zu einem tieferen Verständnis des eigenen Risikoprofils und einer präziseren Steuerung der Geschäftsaktivitäten.\n• Stärkung des Vertrauens bei Investoren und Aufsichtsbehörden: Eine nachweislich robuste Implementierung signalisiert solides Management und kann zu verbesserten Bewertungen in aufsichtlichen Prozessen (SREP) führen.\n\n🛠️ Der ADVISORI-Ansatz für eine wertschöpfende Implementierung:\n• Ganzheitliche Analyse der Geschäftsstrategie: Wir betrachten nicht nur die regulatorischen Anforderungen, sondern auch Ihr Geschäftsmodell, um maßgeschneiderte Implementierungslösungen zu entwickeln, die Ihre strategischen Ziele unterstützen.\n• Identifikation von Synergiepotenzialen: Unsere Experten erkennen Überschneidungen zwischen verschiedenen regulatorischen Initiativen und helfen Ihnen, Implementierungsaufwände zu bündeln und Doppelarbeiten zu vermeiden.\n• Integration in bestehende Systeme und Prozesse: Wir entwickeln Lösungen, die sich nahtlos in Ihre IT-Landschaft einfügen und bestehende Prozesse optimieren statt neue Silos zu schaffen.\n• Wissenstransfer und Befähigung: Wir legen Wert auf nachhaltigen Kompetenzaufbau in Ihrem Haus, damit Sie langfristig von der Implementierung profitieren und auf künftige regulatorische Änderungen flexibel reagieren können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie lässt sich eine kosteneffiziente CRR/CRD-Implementierung realisieren, ohne Kompromisse bei der Compliance-Qualität einzugehen?",
        answer: "Die Implementierung der CRR/CRD-Anforderungen ist eine komplexe und ressourcenintensive Aufgabe. Die Kunst liegt darin, ein ausgewogenes Verhältnis zwischen Implementierungskosten und Compliance-Qualität zu finden, ohne dabei die langfristigen geschäftlichen Auswirkungen aus den Augen zu verlieren. ADVISORI verfolgt einen pragmatischen Ansatz, der auf Effizienz und Nachhaltigkeit ausgerichtet ist.\n\n💰 Strategien für eine kosteneffiziente Implementierung:\n• Modularer Implementierungsansatz: Zerlegung des Gesamtprojekts in klar definierte, priorisierte Module, die schrittweise umgesetzt werden können und frühzeitige Erfolge ermöglichen.\n• Gezielte Automatisierung: Identifikation von Prozessen, die sich für Automatisierung eignen, insbesondere in der Datenverarbeitung, Berichterstattung und Kontrolle – mit Fokus auf wiederkehrende, standardisierbare Aufgaben.\n• Nutzung vorhandener Infrastrukturen: Intelligente Integration der CRR/CRD-Anforderungen in bestehende Systeme und Datenarchitekturen statt kostenintensiver Neuimplementierungen.\n• Risikoorientierte Priorisierung: Konzentration auf Bereiche mit hohem Compliance-Risiko oder signifikantem Optimierungspotenzial, um den größtmöglichen Nutzen aus begrenzten Ressourcen zu ziehen.\n\n⚖️ Sicherstellung der Compliance-Qualität trotz Kosteneffizienz:\n• Robustes Qualitätssicherungsframework: Etablierung eines mehrschichtigen Validierungsprozesses, der trotz Effizienzfokus die Compliance-Qualität gewährleistet.\n• Dokumentierte Entscheidungsprozesse: Transparente Dokumentation aller Implementierungsentscheidungen, die regulatorische Konformität nachweisbar sicherstellt.\n• Kontinuierliche Compliance-Überwachung: Implementierung von Frühwarnsystemen und regelmäßigen Kontrollen, um Compliance-Risiken frühzeitig zu erkennen und zu adressieren.\n• Aufsichtsrechtliche Abstimmung: Proaktiver Dialog mit den Aufsichtsbehörden zu gewählten Implementierungsansätzen, um frühzeitig Feedback einzuholen und Korrekturmaßnahmen zu vermeiden.\n\n🔄 Der ADVISORI-Effizienzansatz in der Praxis:\n• Benchmarking und Best Practices: Wir bringen umfangreiche Erfahrungen aus zahlreichen Implementierungsprojekten ein und identifizieren bewährte, kosteneffiziente Lösungsansätze.\n• Skalierbare Implementierungskonzepte: Entwicklung von Lösungen, die mit Ihrem Institut mitwachsen und flexibel an zukünftige regulatorische Änderungen angepasst werden können.\n• Optimierte Ressourcenallokation: Strategische Kombination von internen und externen Ressourcen, um Kosten zu optimieren und gleichzeitig internes Know-how aufzubauen.\n• Technologiegestützte Implementierung: Einsatz moderner Tools und Methoden für Projektmanagement, Datenmigration und Qualitätssicherung, die den Implementierungsaufwand reduzieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche typischen Herausforderungen treten bei der CRR/CRD-Implementierung auf und wie adressiert ADVISORI diese systematisch?",
        answer: "Die Implementierung von CRR/CRD-Anforderungen konfrontiert Finanzinstitute mit vielschichtigen Herausforderungen, die von technischen und organisatorischen Hürden bis hin zu strategischen Komplexitäten reichen. ADVISORI hat einen strukturierten Ansatz entwickelt, der diese systematisch adressiert und praxiserprobte Lösungswege aufzeigt.\n\n🧩 Typische Implementierungsherausforderungen und ihre Lösungsansätze:\n• Datenqualität und -verfügbarkeit: Die umfangreichen Datenanforderungen der CRR/CRD stellen viele Institute vor erhebliche Probleme bei der Datenbeschaffung und -qualitätssicherung.\n  → ADVISORI-Lösung: Entwicklung einer dedizierten Data Governance-Strategie mit klaren Verantwortlichkeiten, Datenqualitätsmetriken und Prozessen zur kontinuierlichen Datenqualitätsverbesserung. Implementierung automatisierter Datenvalidierungsmechanismen und einer konsistenten Datentaxonomie.\n\n• Systemintegration und technische Komplexität: Die Integration der regulatorischen Anforderungen in bestehende IT-Landschaften mit oft historisch gewachsenen Strukturen und Schnittstellen.\n  → ADVISORI-Lösung: Erstellung einer umfassenden Systemarchitektur mit klaren Datenflüssen und Schnittstellen. Entwicklung einer Zielarchitektur, die schrittweise implementiert werden kann und gleichzeitig eine konsistente Gesamtsicht ermöglicht. Einsatz von Middleware-Lösungen zur Überbrückung von System- und Datenbrüchen.\n\n• Methodische Komplexität und Interpretationsspielräume: Die CRR/CRD enthält zahlreiche komplexe methodische Ansätze und Interpretationsspielräume, die fachliche Expertise erfordern.\n  → ADVISORI-Lösung: Einsatz unserer regulatorischen Spezialisten, die sowohl die rechtlichen Grundlagen als auch deren praktische Umsetzung verstehen. Entwicklung klarer methodischer Leitlinien und dokumentierter Interpretationsentscheidungen. Regelmäßiger Austausch mit Aufsichtsbehörden zur Klärung von Interpretationsfragen.\n\n• Ressourcenknappheit und Kompetenzlücken: Viele Institute verfügen nicht über ausreichend spezialisierte Ressourcen für die komplexe Implementierung.\n  → ADVISORI-Lösung: Kombination aus gezielter externer Unterstützung und systematischem Kompetenzaufbau. Entwicklung von maßgeschneiderten Schulungsprogrammen und detaillierten Umsetzungshandbüchern. Coaching von internen Teams während der Implementierung.\n\n🔄 ADVISORI's systematischer Lösungsansatz:\n• Strukturierte Vorgehensweise: Wir folgen einer bewährten Methodik, die alle Implementierungsphasen abdeckt und klare Meilensteine definiert.\n• Interdisziplinäres Expertenwissen: Unser Team vereint Fachexperten aus Regulatory Affairs, IT-Architektur, Datenmanagement und Prozessoptimierung.\n• Bewährte Toolbox: Wir setzen spezialisierte Tools und Templates ein, die aus zahlreichen erfolgreichen Implementierungsprojekten hervorgegangen sind.\n• Kontinuierliches Risikomanagement: Frühzeitige Identifikation von Projektrisiken und proaktive Entwicklung von Mitigationsstrategien als integraler Bestandteil unseres Vorgehens."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie gewährleistet man eine nachhaltige CRR/CRD-Compliance über den initialen Implementierungsprozess hinaus?",
        answer: "Die erfolgreiche initiale Implementierung der CRR/CRD-Anforderungen ist nur der erste Schritt auf dem Weg zu einer nachhaltigen Compliance. Die wahre Herausforderung liegt darin, eine dynamische Compliance-Umgebung zu schaffen, die mit regulatorischen Änderungen, Geschäftsentwicklungen und technologischen Innovationen Schritt halten kann. ADVISORI verfolgt einen ganzheitlichen Ansatz, der über die reine Implementierung hinausgeht und langfristige Compliance-Exzellenz sicherstellt.\n\n🔄 Elemente einer nachhaltigen CRR/CRD-Compliance-Architektur:\n• Adaptive Governance-Strukturen: Etablierung flexibler Gremien und Verantwortlichkeiten, die regulatorische Änderungen frühzeitig erkennen und entsprechende Anpassungsprozesse einleiten können.\n• Integrierte Compliance-Prozesse: Verankerung der Compliance-Anforderungen in den Kernprozessen des Instituts, insbesondere in der Produkt- und Geschäftsentwicklung, dem Risikomanagement und der strategischen Planung.\n• Kontinuierliches Monitoring und Reporting: Implementierung eines umfassenden Überwachungssystems mit klar definierten KPIs, Schwellenwerten und Eskalationswegen für potenzielle Compliance-Risiken.\n• Evolutionäre IT- und Datenarchitektur: Entwicklung einer zukunftsfähigen Architektur, die flexibel an neue Anforderungen angepasst werden kann, ohne grundlegende Umbauten zu erfordern.\n\n📚 Kontinuierliche Weiterentwicklung und Wissensmanagement:\n• Regulatorisches Radar: Etablierung eines systematischen Prozesses zur Früherkennung und Bewertung regulatorischer Änderungen und deren Auswirkungen auf bestehende Compliance-Strukturen.\n• Kompetenzentwicklung: Aufbau und kontinuierliche Förderung interner Expertise durch strukturierte Schulungsprogramme, Wissenstransfer und gezielte Rekrutierung.\n• Erfahrungsmanagement: Systematische Dokumentation von Implementierungserfahrungen, aufsichtlichen Dialogen und internen Entscheidungsprozessen als Wissensbasis für künftige Anpassungen.\n• Kollaborative Plattformen: Implementierung von Tools und Prozessen, die den Wissensaustausch zwischen verschiedenen Fachbereichen fördern und Silodenken verhindern.\n\n🔍 ADVISORI's Ansatz für nachhaltige Compliance:\n• Compliance by Design: Wir unterstützen Sie dabei, Compliance-Anforderungen von Anfang an in neue Produkte, Prozesse und Systeme zu integrieren, anstatt sie nachträglich aufzusetzen.\n• Automatisierte Compliance-Kontrollen: Entwicklung und Implementation von automatisierten Tests und Kontrollen, die Compliance-Risiken frühzeitig identifizieren und Korrekturmaßnahmen einleiten.\n• Continuous Improvement Framework: Etablierung eines strukturierten Prozesses zur regelmäßigen Überprüfung und Optimierung der Compliance-Architektur basierend auf neuen Erkenntnissen und Erfahrungen.\n• Change Impact Assessment: Methodische Bewertung aller organisatorischen und geschäftlichen Veränderungen hinsichtlich ihrer Auswirkungen auf die CRR/CRD-Compliance und proaktive Anpassung der Compliance-Mechanismen."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQs batch 1 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
