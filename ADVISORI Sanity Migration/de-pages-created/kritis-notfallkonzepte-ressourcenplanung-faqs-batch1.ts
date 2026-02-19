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
    console.log('Updating KRITIS Notfallkonzepte & Ressourcenplanung page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'kritis-notfallkonzepte-ressourcenplanung' })
    
    if (!existingDoc) {
      throw new Error('Document "kritis-notfallkonzepte-ressourcenplanung" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum sind strukturierte Notfallkonzepte für KRITIS-Unternehmen mehr als nur regulatorische Compliance und wie transformiert ADVISORI diese zu einem strategischen Wettbewerbsvorteil?",
        answer: "Für die Führungsebene kritischer Infrastrukturen sind Notfallkonzepte nicht nur gesetzliche Pflicht, sondern strategische Instrumente zur Sicherung der Marktposition und des langfristigen Unternehmenswerts. Ein schwerwiegender Ausfall kritischer Infrastrukturen kann nicht nur zu direkten finanziellen Verlusten führen, sondern auch zu gesellschaftlichen Schäden, regulatorischen Sanktionen und irreparablen Reputationsschäden. ADVISORI entwickelt Notfallkonzepte, die über reine Compliance hinausgehen und als Fundament für operative Exzellenz und Wachstum dienen.\n\n🎯 Strategische Dimensionen für die C-Suite:\n• Geschäftskontinuität als Kernkompetenz: Transformation von Notfallplanung in ein differenzierendes Merkmal, das Kundenvertrauen und Marktstabilität stärkt.\n• Regulatorische Vorsorge: Proaktive Erfüllung der KRITIS-VO und BSI-Anforderungen zur Vermeidung von Sanktionen und zur Demonstration von Corporate Governance.\n• Stakeholder-Vertrauen: Aufbau und Erhalt des Vertrauens von Regulatoren, Kunden, Investoren und der Gesellschaft durch nachweisbare Resilienz.\n• Operative Effizienz: Optimierung von Geschäftsprozessen durch strukturierte Kontinuitätsplanung, die auch im Normalbetrieb Effizienzgewinne bringt.\n\n🛡️ ADVISORI's strategischer Notfallkonzept-Ansatz:\n• Ganzheitliche Risikobewertung: Wir analysieren nicht nur technische Ausfallrisiken, sondern auch deren Auswirkungen auf Gesellschaft, Wirtschaft und Ihr Unternehmen.\n• Business-orientierte Notfallplanung: Entwicklung von Konzepten, die Geschäftsziele, Stakeholder-Erwartungen und regulatorische Anforderungen optimal balancieren.\n• Integration in Unternehmensstrategie: Verknüpfung von Notfallplanung mit strategischen Wachstumsinitiativen und Investitionsentscheidungen.\n• Messbare Resilienz-KPIs: Bereitstellung von Dashboards und Metriken, die es der C-Suite ermöglichen, Fortschritte zu verfolgen und fundierte Entscheidungen zu treffen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifiziert ADVISORI den geschäftlichen Wert strategischer Ressourcenplanung und welche direkten Auswirkungen hat dies auf Operational Excellence und EBITDA-Optimierung?",
        answer: "Strategische Ressourcenplanung für Notfallszenarien ist eine hochrentable Investition, die sowohl direkte Kosteneinsparungen als auch erhebliche Wertsteigerungen durch operative Exzellenz generiert. ADVISORI transformiert traditionelle Notfallvorsorge in ein datengetriebenes, ROI-optimiertes Managementinstrument, das nachweisbare Beiträge zur Profitabilität und Unternehmensstabilität leistet.\n\n💰 Direkte finanzielle Auswirkungen auf die Unternehmensperformance:\n• Minimierung von Ausfallkosten: Jede Stunde Ausfall kritischer Infrastruktur kann Millionen kosten. Optimierte Ressourcenplanung reduziert Wiederherstellungszeiten um 60-80%.\n• Vermeidung von Compliance-Strafen: BSI-konforme Notfallkonzepte schützen vor behördlichen Sanktionen, die schnell siebenstellige Beträge erreichen können.\n• Reduktion von Notfall-Beschaffungskosten: Strategische Vorplanung vermeidet teure Notfall-Einkäufe und reduziert Beschaffungskosten um 40-60%.\n• Optimierung der Versicherungskosten: Nachweisbare Resilienz führt zu günstigeren Prämien und besseren Konditionen bei Betriebsausfallversicherungen.\n\n📈 Operative Exzellenz durch strategische Ressourcenplanung:\n• Proaktive Lieferantenbeziehungen: Aufbau strategischer Partnerschaften, die auch im Normalbetrieb bessere Konditionen und Verfügbarkeiten bieten.\n• Bestandsoptimierung: Intelligente Lagerhaltungsstrategien, die Kapitalbindung minimieren und gleichzeitig kritische Verfügbarkeit sicherstellen.\n• Prozessautomatisierung: Integration von Ressourcenplanung in automatisierte Beschaffungs- und Logistikprozesse für erhöhte Effizienz.\n• Datengetriebene Entscheidungen: Implementierung von Monitoring- und Prognosesystemen, die kontinuierliche Optimierung ermöglichen.\n\n🎯 ADVISORI's wertorientierter Ansatz:\n• ROI-transparente Planung: Jede Ressourceninvestition wird hinsichtlich ihrer Kosten-Nutzen-Relation bewertet und dokumentiert.\n• Flexibles Skalierungsmodell: Ressourcenkonzepte, die mit dem Unternehmenswachstum mitwachsen und sich an verändernde Anforderungen anpassen.\n• Integration mit Budgetplanung: Nahtlose Einbindung der Notfallressourcenplanung in die jährliche Budgetierung und Finanzplanung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "In einer Ära zunehmender Cyber-Bedrohungen und Klimarisiken – wie stellt ADVISORI sicher, dass Notfallkonzepte resilient gegenüber komplexen, sich entwickelnden Bedrohungsszenarien sind?",
        answer: "Die moderne Bedrohungslandschaft für kritische Infrastrukturen ist geprägt von mehrdimensionalen, oft kaskadierenden Risiken – von sophistizierten Cyber-Attacken über extreme Wetterereignisse bis hin zu geopolitischen Spannungen. ADVISORI entwickelt adaptive Notfallkonzepte, die nicht nur auf bekannte Risiken reagieren, sondern auch unvorhersehbare Szenarien antizipieren und Ihre Organisation befähigen, in einer volatilen Welt kontinuierlich handlungsfähig zu bleiben.\n\n🌐 Adaptive Resilienz in einer komplexen Bedrohungslandschaft:\n• Multi-Risiko-Szenario-Planung: Entwicklung von Konzepten, die simultane und kaskadierende Bedrohungen (z.B. Cyber-Angriff während eines Sturmereignisses) berücksichtigen.\n• Dynamische Threat Intelligence Integration: Kontinuierliche Einbindung aktueller Bedrohungserkenntnisse in die Notfallplanung und -ressourcen.\n• Flexible Eskalationsmodelle: Entwicklung modularer Notfallkonzepte, die je nach Bedrohungsart und -intensität skalierbar aktiviert werden können.\n• Cross-Sektor-Abhängigkeitsanalyse: Berücksichtigung von Interdependenzen zwischen verschiedenen kritischen Infrastrukturen und deren Auswirkungen.\n\n🔧 ADVISORI's zukunftsorientierte Methodik:\n• Künstliche Intelligenz in der Risikoprognose: Einsatz von KI-gestützten Analysewerkzeugen zur Vorhersage und Bewertung neuer Bedrohungsmuster.\n• Kontinuierliche Planaktualisierung: Implementierung agiler Prozesse zur regelmäßigen Überprüfung und Anpassung der Notfallkonzepte an neue Erkenntnisse.\n• Stress-Testing und Red-Team-Übungen: Regelmäßige Belastungstests der Notfallkonzepte durch realistische Simulationen und Adversarial Testing.\n• Globale Best-Practice-Integration: Kontinuierlicher Wissenstransfer aus internationalen Erfahrungen und Lektionen aus tatsächlichen Vorfällen.\n\n🔄 Evolutionäre Anpassungsfähigkeit:\n• Lernende Systeme: Notfallkonzepte, die aus jedem Ereignis – ob Test oder realer Vorfall – lernen und sich automatisch verbessern.\n• Modulare Architektur: Flexible Konzeptbausteine, die schnell rekonfiguriert werden können, um auf neue Bedrohungsarten zu reagieren.\n• Stakeholder-Netzwerk-Integration: Aufbau von Kooperationsstrukturen mit Behörden, anderen KRITIS-Betreibern und Sicherheitsdienstleistern für kollektive Resilienz."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI traditionelle Incident Response in ein proaktives, wertschöpfendes Krisenmanagement-Framework für die strategische Unternehmensführung?",
        answer: "Modernes Krisenmanagement für kritische Infrastrukturen transzendiert reaktive Schadensbegrenzung und wird zu einem proaktiven Instrument strategischer Unternehmensführung. ADVISORI entwickelt Incident Response Frameworks, die nicht nur Krisen bewältigen, sondern diese als Katalysatoren für organisatorisches Lernen, Stakeholder-Vertrauen und Wettbewerbsvorteile nutzen. Für die C-Suite bedeutet dies, Krisen als Chancen zur Demonstration von Leadership Excellence und zur Stärkung der Marktposition zu verstehen.\n\n🎯 Strategisches Krisenmanagement als Leadership-Instrument:\n• Proaktive Krisenkommunikation: Transformation von Notfällen in Gelegenheiten zur Demonstration von Verantwortung, Transparenz und Kompetenz gegenüber Stakeholdern.\n• Reputationsaufbau durch Krisenexzellenz: Nutzung erfolgreicher Krisenbewältigung als Differenzierungsmerkmal und Vertrauensbildende Maßnahme.\n• Organisatorisches Lernen: Systematische Wissensgenerierung aus Krisenerfahrungen zur kontinuierlichen Verbesserung von Prozessen und Entscheidungsstrukturen.\n• Stakeholder-Engagement: Stärkung von Beziehungen zu Regulatoren, Kunden und Partnern durch professionelles Krisenmanagement.\n\n🔄 ADVISORI's Framework für wertschöpfendes Krisenmanagement:\n• Pre-Crisis Intelligence und Früherkennung: Implementierung von Systemen zur frühzeitigen Identifikation potenzieller Krisen, bevor sie eskalieren.\n• Real-Time Decision Support: Bereitstellung von datengetriebenen Entscheidungshilfen für die Geschäftsleitung während kritischer Situationen.\n• Multi-Stakeholder-Orchestrierung: Koordination aller relevanten internen und externen Akteure für eine kohärente und effektive Krisenreaktion.\n• Post-Crisis Value Creation: Systematische Analyse und Nutzung von Krisenerfahrungen zur Stärkung der organisatorischen Resilienz und Marktposition.\n\n💼 Integration in strategische Unternehmensführung:\n• Executive Decision Protocols: Klare Entscheidungsstrukturen und Eskalationswege, die es der C-Suite ermöglichen, auch unter Druck strategisch zu handeln.\n• Crisis Communication Excellence: Professionelle Kommunikationsstrategien, die das Unternehmens-Image auch in kritischen Situationen schützen und stärken.\n• Continuous Improvement Culture: Etablierung einer Lernkultur, die Krisen als Innovationsmöglichkeiten und Verbesserungschancen versteht.\n• Performance Measurement: KPI-Systeme, die nicht nur die operative Effektivität des Krisenmanagements messen, sondern auch dessen strategischen Wertbeitrag quantifizieren."
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
