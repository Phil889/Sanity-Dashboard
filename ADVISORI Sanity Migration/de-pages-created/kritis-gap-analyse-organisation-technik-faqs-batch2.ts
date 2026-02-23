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
    console.log('Updating KRITIS Gap-Analyse Organisation & Technik page with C-Level FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'kritis-gap-analyse-organisation-technik' })
    
    if (!existingDoc) {
      throw new Error('Document "kritis-gap-analyse-organisation-technik" not found')
    }
    
    // Create new C-Level FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Welche spezifischen Herausforderungen entstehen bei der KRITIS Gap-Analyse in verschiedenen Sektoren und wie adressiert ADVISORI branchenspezifische Anforderungen?",
        answer: "Jeder KRITIS-Sektor bringt einzigartige technische, regulatorische und betriebliche Herausforderungen mit sich, die eine spezialisierte Herangehensweise bei der Gap-Analyse erfordern. ADVISORI verfügt über tiefgreifende sektorale Expertise und entwickelt maßgeschneiderte Analysemethoden, die den spezifischen Anforderungen und Risikoprofilen verschiedener kritischer Infrastrukturen gerecht werden.\n\n⚡ Energiesektor - Spezifische Compliance-Herausforderungen:\n• Operational Technology (OT) Integration: Sicherheitsbewertung von SCADA-Systemen, Smart Grid-Technologien und industriellen Steuerungssystemen, die oft Legacy-Technologien mit modernen Netzwerken verbinden.\n• Versorgungssicherheit vs. Cybersecurity: Balance zwischen maximaler Verfügbarkeit und notwendigen Sicherheitsmaßnahmen, die potentiell die Betriebseffizienz beeinträchtigen könnten.\n• Dezentrale Infrastrukturen: Management der Sicherheit verteilter Anlagen, erneuerbarer Energiequellen und komplexer Übertragungsnetze.\n• Regulatorische Komplexität: Navigation zwischen verschiedenen regulatorischen Rahmen (EnWG, Messstellenbetriebsgesetz, EU-Elektrizitätsbinnenmarkt-Verordnung).\n\n🏥 Gesundheitswesen - Kritische Sicherheitsaspekte:\n• Patientensicherheit und Datenschutz: Besondere Berücksichtigung von Medizingeräten, Patientendatenschutz und der Auswirkung von Sicherheitsmaßnahmen auf medizinische Versorgung.\n• 24/7-Verfügbarkeitsanforderungen: Sicherheitskonzepte, die kontinuierliche medizinische Versorgung gewährleisten und keine Unterbrechungen kritischer Systeme verursachen.\n• Heterogene Systemlandschaften: Integration verschiedener medizinischer Geräte, IT-Systeme und externer Dienstleister in kohärente Sicherheitsstrategien.\n• Compliance-Koordination: Harmonisierung von KRITIS-Anforderungen mit DSGVO, Medizinprodukterecht und anderen gesundheitsspezifischen Regulierungen.\n\n🚰 Wasser- und Abwasserwirtschaft - Infrastrukturspezifika:\n• Weiträumige Infrastrukturen: Sicherheitskonzepte für geografisch verteilte Anlagen, Fernwirksysteme und mobile Wartungszugriffe.\n• Umwelt- und Gesundheitsrisiken: Besondere Berücksichtigung der Auswirkungen von Cybersecurity-Vorfällen auf Umwelt und öffentliche Gesundheit.\n• Resource-Constraints: Entwicklung kosteneffizienter Sicherheitslösungen für oft budgetbeschränkte kommunale Betreiber.\n\n🔧 ADVISORI's sektorspezifischer Ansatz:\n• Branchenexperten-Teams: Einsatz von Consultants mit spezifischer Branchenerfahrung und technischer Expertise in relevanten Technologien.\n• Angepasste Assessment-Methoden: Entwicklung sektor-spezifischer Bewertungskriterien und Prüfungsverfahren.\n• Regulatory-Mapping: Detaillierte Kenntnis sektoraler Regulierungen und deren Wechselwirkungen mit KRITIS-Anforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Wie gewährleistet eine KRITIS Gap-Analyse die angemessene Integration von Operational Technology (OT) und Information Technology (IT) Sicherheitsaspekten?",
        answer: "Die Konvergenz von OT und IT in kritischen Infrastrukturen schafft neue Sicherheitsherausforderungen, die traditionelle IT-Security-Ansätze überfordern. Eine professionelle KRITIS Gap-Analyse muss beide Welten verstehen und integrierte Sicherheitsstrategien entwickeln, die sowohl operative Anforderungen als auch Cybersecurity-Standards erfüllen.\n\n🔗 OT/IT-Konvergenz Herausforderungen:\n• Unterschiedliche Sicherheitsparadigmen: OT priorisiert Verfügbarkeit und Sicherheit von Prozessen, während IT Datenintegrität und Vertraulichkeit fokussiert. Eine Gap-Analyse muss beide Perspektiven harmonisieren.\n• Legacy-System-Integration: Viele OT-Systeme wurden ohne Cybersecurity-Überlegungen entwickelt und müssen nun sicher in moderne IT-Umgebungen integriert werden.\n• Verschiedene Lebenzyklen: OT-Systeme haben oft 15-25 Jahre Betriebsdauer, während IT-Systeme alle 3-5 Jahre erneuert werden. Dies erfordert langfristige Sicherheitsstrategien.\n• Expertise-Lücken: Wenige Experten verstehen sowohl OT-Prozesse als auch moderne Cybersecurity, was spezialisierte Bewertungsansätze erfordert.\n\n🛡️ Integrierte Sicherheitsbewertungsansätze:\n• Gemeinsame Risikomodellierung: Entwicklung einheitlicher Risikobewertungen, die sowohl operative Risiken (Produktionsausfall, Sicherheitsvorfälle) als auch Cyber-Risiken (Datendiebstahl, Systemkompromittierung) berücksichtigen.\n• Network Segmentation Assessment: Bewertung der Netzwerk-Segmentierung zwischen OT und IT sowie der kontrollierten Kommunikationswege zwischen beiden Bereichen.\n• Protocol-Security-Analyse: Evaluation der Sicherheit industrieller Kommunikationsprotokolle (Modbus, DNP3, OPC UA) und deren sichere Integration in IP-basierte Netzwerke.\n• Shared-Service-Bewertung: Analyse gemeinsam genutzter Services wie Zeitservices, Logging, Backup und deren sichere Implementierung für beide Bereiche.\n\n⚙️ Operative Kontinuität vs. Security-Maßnahmen:\n• Safety vs. Security Balance: Sicherstellung, dass Cybersecurity-Maßnahmen die funktionale Sicherheit (Safety) von Produktionsanlagen nicht beeinträchtigen.\n• Maintenance-Window-Strategien: Entwicklung von Update- und Wartungsstrategien, die sowohl OT-Verfügbarkeitsanforderungen als auch IT-Security-Needs erfüllen.\n• Incident-Response-Integration: Koordination von OT- und IT-Incident-Response-Verfahren für effektive Reaktion auf hybride Sicherheitsvorfälle.\n• Change-Management-Harmonisierung: Integration von OT- und IT-Change-Management-Prozessen für konsistente Sicherheitsbewertungen.\n\n🔍 ADVISORI's OT/IT-Integration-Expertise:\n• Cross-Domain-Teams: Zusammenarbeit von OT-Engineers und IT-Security-Experten für ganzheitliche Bewertungen.\n• Industry-4.0-Readiness: Vorbereitung auf zukünftige Digitalisierungsschritte und IIoT-Integration.\n• Vendor-Neutral-Assessment: Unabhängige Bewertung verschiedener OT/IT-Sicherheitslösungen ohne Herstellerbindung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Welche Rolle spielen Bedrohungsanalysen und Risikobewertungen in einer umfassenden KRITIS Gap-Analyse und wie werden aktuelle Cyber-Bedrohungslagen berücksichtigt?",
        answer: "Eine effektive KRITIS Gap-Analyse muss über statische Compliance-Prüfungen hinausgehen und dynamische Bedrohungsanalysen integrieren, die aktuelle Angriffsvektoren, Threat-Actor-Aktivitäten und sich entwickelnde Risikoszenarien berücksichtigen. ADVISORI kombiniert strukturierte Risikobewertungen mit aktueller Threat Intelligence für praxisrelevante und zukunftsfähige Sicherheitsstrategien.\n\n🎯 Bedrohungslandschaft für kritische Infrastrukturen:\n• APT-Gruppen und staatlich unterstützte Akteure: Spezialisierte Bewertung der Bedrohung durch Advanced Persistent Threats, die gezielt kritische Infrastrukturen angreifen.\n• Cyberkriminelle Organisationen: Analyse der zunehmenden Professionalisierung von Ransomware-Gruppen und deren spezifische Taktiken gegen KRITIS-Betreiber.\n• Insider-Bedrohungen: Bewertung der Risiken durch privilegierte Nutzer, Wartungspartner und andere interne Akteure mit kritischem Systemzugang.\n• Supply-Chain-Angriffe: Evaluation der Risiken durch kompromittierte Lieferanten, Software-Updates und externe Dienstleister.\n• Hybrid-Bedrohungen: Berücksichtigung koordinierter Angriffe, die Cyber- und physische Komponenten kombinieren.\n\n📊 Strukturierte Risikobewertungsmethoden:\n• Asset-basierte Risikoanalyse: Systematische Identifikation und Bewertung aller kritischen Assets nach ihrer Bedeutung für die Versorgungssicherheit.\n• Attack-Path-Modellierung: Simulation realistischer Angriffswege von externen Einstiegspunkten zu kritischen Systemen.\n• Business-Impact-Assessment: Quantifizierung der geschäftlichen und gesellschaftlichen Auswirkungen verschiedener Angriffszenarien.\n• Vulnerability-Prioritization: Priorisierung von Schwachstellen basierend auf ihrer Exploitierbarkeit und den potenziellen Auswirkungen.\n• Scenario-based Testing: Entwicklung und Bewertung spezifischer Bedrohungsszenarien basierend auf aktueller Threat Intelligence.\n\n🌐 Integration aktueller Cyber-Intelligence:\n• Real-time Threat Feeds: Integration aktueller Bedrohungsinformationen aus verschiedenen Intelligence-Quellen für zeitnahe Risikobewertungen.\n• KRITIS-spezifische IOCs: Nutzung von Indicators of Compromise, die speziell für kritische Infrastrukturen relevant sind.\n• Geopolitische Risikoanalyse: Berücksichtigung geopolitischer Entwicklungen und deren Auswirkungen auf die Bedrohungslandschaft.\n• Branchenspezifische Threat-Briefings: Analyse von Angriffen auf ähnliche Organisationen in derselben Branche oder Region.\n• Predictive Threat Modeling: Vorhersage zukünftiger Bedrohungsentwicklungen basierend auf aktuellen Trends und technologischen Entwicklungen.\n\n🔄 Kontinuierliche Risikomanagement-Integration:\n• Dynamic Risk Assessment: Entwicklung von Mechanismen für kontinuierliche Neubewertung von Risiken basierend auf sich ändernden Bedrohungen.\n• Threat-informed Defense: Ausrichtung der Sicherheitsmaßnahmen an den wahrscheinlichsten und gefährlichsten Bedrohungen.\n• Intelligence-driven Security Investment: Priorisierung von Sicherheitsinvestitionen basierend auf aktuellen Bedrohungsanalysen.\n• Collaborative Defense: Integration in Branchen-spezifische Threat-Sharing-Initiativen und Zusammenarbeit mit Behörden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie stellt ADVISORI sicher, dass die Ergebnisse einer KRITIS Gap-Analyse praktikabel sind und sich nahtlos in bestehende Geschäftsprozesse und Budgetplanungen integrieren lassen?",
        answer: "Die größte Herausforderung jeder Gap-Analyse liegt nicht in der Identifikation von Problemen, sondern in der Entwicklung realisierbarer Lösungen, die operative Kontinuität gewährleisten und wirtschaftlich tragfähig sind. ADVISORI fokussiert auf pragmatische Umsetzbarkeit und entwickelt Strategien, die sich organisch in bestehende Geschäftsprozesse integrieren lassen.\n\n💼 Geschäftsprozess-Integration und operative Exzellenz:\n• Process-Impact-Assessment: Detaillierte Analyse der Auswirkungen vorgeschlagener Sicherheitsmaßnahmen auf bestehende Geschäftsprozesse und operative Abläufe.\n• Stakeholder-Mapping: Identifikation aller betroffenen internen und externen Stakeholder sowie Entwicklung von Change-Management-Strategien für reibungslose Implementierung.\n• Operational-Continuity-Planning: Sicherstellung, dass Sicherheitsverbesserungen ohne Unterbrechung kritischer Services implementiert werden können.\n• Training-and-Adoption-Strategies: Entwicklung umfassender Schulungs- und Einführungskonzepte, die nachhaltige Verhaltensänderungen fördern.\n• Performance-Metrics-Integration: Einbettung von Sicherheits-KPIs in bestehende Performance-Management-Systeme.\n\n📈 Budget-optimierte Implementierungsstrategien:\n• Phased-Investment-Planning: Verteilung notwendiger Investitionen über mehrere Budgetzyklen mit klarer Priorisierung nach Risiko und Nutzen.\n• ROI-Quantifizierung: Detaillierte Berechnung des Return on Investment für Sicherheitsmaßnahmen durch Risikoreduktion und Effizienzgewinne.\n• Funding-Strategy-Development: Unterstützung bei der Identifikation verschiedener Finanzierungsquellen, einschließlich staatlicher Förderprogramme und Brancheninitiativen.\n• Cost-Benefit-Optimization: Optimierung des Verhältnisses von Sicherheitsnutzen zu Implementierungskosten durch innovative Lösungsansätze.\n• Budget-Flexibility-Mechanisms: Entwicklung flexibler Budgetierungsansätze, die auf sich ändernde Bedrohungslagen reagieren können.\n\n🔧 Pragmatische Umsetzungsansätze:\n• Quick-Win-Priorisierung: Identifikation von Maßnahmen mit geringem Aufwand aber hohem Sicherheitsgewinn für schnelle Erfolge und Momentum-Building.\n• Legacy-System-Integration: Entwicklung kosteneffizienter Ansätze zur Sicherung bestehender Systeme ohne vollständige Neuimplementierung.\n• Vendor-Management-Optimization: Nutzung bestehender Lieferantenbeziehungen und Verträge zur kosteneffizienten Umsetzung von Sicherheitsverbesserungen.\n• Resource-Sharing-Strategies: Entwicklung von Ansätzen zur gemeinsamen Nutzung von Sicherheitsressourcen mit anderen Organisationen oder Branchen-Konsortien.\n• Automation-First-Approach: Priorisierung automatisierter Lösungen zur Reduzierung langfristiger operativer Kosten.\n\n🎯 Erfolg durch nachhaltige Implementierung:\n• Change-Resistance-Mitigation: Proaktive Identifikation und Adressierung von Widerständen gegen Veränderungen in der Organisation.\n• Success-Metrics-Definition: Entwicklung messbarer Erfolgskriterien, die sowohl Sicherheitsverbesserungen als auch Geschäftsnutzen demonstrieren.\n• Continuous-Improvement-Integration: Etablierung von Mechanismen für kontinuierliche Optimierung der implementierten Maßnahmen.\n• Executive-Sponsorship-Strategies: Sicherstellung anhaltender Unterstützung auf Führungsebene durch regelmäßige Erfolgsberichte und strategische Updates."
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
    console.log('✅ C-Level FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
