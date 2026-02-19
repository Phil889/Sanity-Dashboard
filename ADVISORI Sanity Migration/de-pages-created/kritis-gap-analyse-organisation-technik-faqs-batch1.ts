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
    console.log('Updating KRITIS Gap-Analyse Organisation & Technik page with C-Level FAQs batch 1...')
    
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
        _key: generateKey('faq', 1),
        question: "Warum ist eine systematische KRITIS Gap-Analyse für die Geschäftsführung mehr als nur eine Compliance-Übung und wie kann ADVISORI dabei strategischen Mehrwert schaffen?",
        answer: "Für die Geschäftsleitung kritischer Infrastrukturen repräsentiert eine KRITIS Gap-Analyse weit mehr als eine regulatorische Pflichtübung. Sie ist ein strategisches Instrument zur Sicherung der operativen Kontinuität, zur Minimierung existenzieller Geschäftsrisiken und zur Schaffung nachhaltiger Wettbewerbsvorteile. ADVISORI transformiert die Gap-Analyse von einer reinen Compliance-Prüfung zu einem wertvollen Business-Intelligence-Tool.\n\n🎯 Strategische Geschäftsimplikationen für die Führungsebene:\n• Reputationsschutz und Stakeholder-Vertrauen: Kritische Infrastrukturen stehen unter besonderer öffentlicher Beobachtung. Sicherheitsvorfälle können zu erheblichen Reputationsschäden, Vertrauensverlust bei Kunden und negativen Medienberichten führen.\n• Operative Resilienz und Geschäftskontinuität: Eine Gap-Analyse identifiziert Schwachstellen, die zu kostspieligen Betriebsunterbrechungen führen könnten. Die Vermeidung auch nur einer größeren Störung kann Millionen von Euro sparen.\n• Regulatorische Sicherheit: KRITIS-Verstöße können zu erheblichen Bußgeldern und strengeren Auflagen führen. Proaktive Compliance reduziert diese Risiken erheblich.\n• Investitionsoptimierung: Systematische Priorisierung von Sicherheitsinvestitionen basierend auf realen Risiken anstatt adhoc-Entscheidungen.\n\n🏗️ ADVISORI's strategischer Mehrwert-Ansatz:\n• Business-Impact-orientierte Bewertung: Wir bewerten nicht nur technische Compliance, sondern analysieren die geschäftlichen Auswirkungen von Sicherheitslücken auf Umsatz, Kosten und strategische Ziele.\n• Zukunftsorientierte Roadmap-Entwicklung: Integration der Gap-Analyse-Ergebnisse in Ihre langfristige Unternehmensstrategie und Technologie-Roadmaps.\n• Stakeholder-Management: Professionelle Aufbereitung der Ergebnisse für verschiedene Zielgruppen - vom Aufsichtsrat bis zu operativen Teams.\n• Benchmark-Intelligence: Einordnung Ihres Sicherheitsniveaus im Branchenkontext für strategische Positionierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche organisatorischen Strukturen und Governance-Mechanismen sind entscheidend für eine erfolgreiche KRITIS-Compliance und wie identifiziert eine Gap-Analyse Verbesserungspotenziale?",
        answer: "Erfolgreiche KRITIS-Compliance erfordert mehr als technische Sicherheitsmaßnahmen - sie benötigt robuste organisatorische Strukturen und effektive Governance-Mechanismen. Eine strukturierte Gap-Analyse deckt systematisch Schwachstellen in der Organisationsstruktur auf und entwickelt praxistaugliche Verbesserungsansätze für nachhaltige Compliance.\n\n🏢 Kritische organisatorische Erfolgsfaktoren für KRITIS-Compliance:\n• Klare Verantwortungsstrukturen: Definition eindeutiger Rollen und Verantwortlichkeiten für IT-Sicherheit auf allen Hierarchieebenen, von der Geschäftsführung bis zu operativen Teams.\n• Integrierte Sicherheits-Governance: Einbettung der IT-Sicherheit in bestehende Governance-Strukturen anstatt isolierter Sicherheits-Silos.\n• Effektive Kommunikations- und Eskalationswege: Etablierung klarer Kommunikationskanäle für normale Betriebssituationen und Krisenszenarien.\n• Kompetenz- und Ressourcenmanagement: Sicherstellung ausreichender personeller und finanzieller Ressourcen sowie kontinuierlicher Kompetenzentwicklung.\n• Dokumentations- und Nachweismanagement: Systematische Erfassung und Verwaltung aller compliance-relevanten Dokumente und Nachweise.\n\n🔍 Gap-Analyse-Methodik für organisatorische Optimierung:\n• Strukturierte Interviews und Workshops: Systematische Befragung von Führungskräften und Mitarbeitern zur Identifikation von Prozesslücken und Verbesserungspotenzialen.\n• Dokumentenanalyse und -bewertung: Bewertung bestehender Richtlinien, Verfahren und Dokumentationen auf Vollständigkeit, Aktualität und Praxistauglichkeit.\n• Organisationsstruktur-Assessment: Analyse der formalen und informalen Organisationsstrukturen auf Effektivität und Compliance-Eignung.\n• Governance-Maturity-Assessment: Bewertung der Reife der Sicherheits-Governance im Vergleich zu Branchenstandards und Best Practices.\n\n🚀 Praktische Umsetzungsempfehlungen:\n• Schrittweise Optimierung: Entwicklung realistischer Umsetzungspläne, die operative Kontinuität gewährleisten und Veränderungsmanagement berücksichtigen.\n• Change-Management-Integration: Begleitung organisatorischer Veränderungen mit bewährten Change-Management-Methoden.\n• Kontinuierliches Monitoring: Etablierung von KPIs und Monitoring-Mechanismen zur kontinuierlichen Überwachung der organisatorischen Wirksamkeit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche technischen Aspekte sind bei einer KRITIS Gap-Analyse besonders kritisch und wie können moderne Technologien zur Verbesserung der Infrastruktursicherheit beitragen?",
        answer: "Die technische Dimension einer KRITIS Gap-Analyse ist hochkomplex und erfordert tiefgreifende Expertise in Cybersecurity, Systemarchitekturen und modernen Sicherheitstechnologien. Eine professionelle technische Bewertung identifiziert nicht nur aktuelle Schwachstellen, sondern entwickelt auch zukunftsfähige Sicherheitsstrategien, die mit der technologischen Entwicklung Schritt halten.\n\n🔧 Kritische technische Bewertungsdimensionen:\n• Netzwerk- und Systemarchitektur: Analyse der Segmentierung, Redundanz und Resilienz der IT-Infrastruktur sowie Bewertung von Single Points of Failure.\n• Cybersecurity-Technologien: Evaluation aktueller Sicherheitslösungen wie Firewalls, Intrusion Detection/Prevention Systems, SIEM-Systeme und Endpoint Protection.\n• Industrial Control Systems (ICS/OT): Spezifische Sicherheitsbewertung von Operational Technology, die oft andere Anforderungen als klassische IT-Systeme hat.\n• Backup- und Recovery-Systeme: Bewertung der Datensicherung, Wiederherstellungszeiten und -verfahren sowie Test- und Validierungsprozesse.\n• Monitoring und Incident Response: Analyse der Überwachungskapazitäten, Anomalieerkennung und Reaktionsfähigkeiten bei Sicherheitsvorfällen.\n\n💡 Moderne Technologien für Enhanced Security:\n• Künstliche Intelligenz und Machine Learning: Implementierung KI-gestützter Systeme für proaktive Bedrohungserkennung, Anomalieerkennung und automatisierte Incident Response.\n• Zero-Trust-Architekturen: Entwicklung von Sicherheitskonzepten, die grundsätzlich kein Vertrauen voraussetzen und jeden Zugriff kontinuierlich validieren.\n• Cloud-Security und Hybrid-Infrastrukturen: Sichere Integration von Cloud-Services und Hybrid-Architekturen unter Berücksichtigung von Compliance-Anforderungen.\n• Security Orchestration und Automation: Automatisierung wiederkehrender Sicherheitsprozesse zur Effizienzsteigerung und Fehlerreduktion.\n• Advanced Threat Intelligence: Integration externer Bedrohungsinformationen für proaktive Verteidigung gegen aktuelle Angriffsvektoren.\n\n🛡️ ADVISORI's technischer Mehrwert:\n• Herstellerunabhängige Bewertung: Objektive Technologiebewertung ohne Vendoren-Bias für optimale Lösungsauswahl.\n• Pragmatische Modernisierungsstrategien: Entwicklung realistischer Migrationspfade, die Budget- und Betriebsanforderungen berücksichtigen.\n• Integration Legacy-Systeme: Spezielle Expertise für die sichere Integration älterer Systeme, die nicht einfach ersetzt werden können.\n• Kontinuierliche Technologie-Bewertung: Aufbau interner Kapazitäten für die kontinuierliche Bewertung neuer Sicherheitstechnologien."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI die Ergebnisse einer KRITIS Gap-Analyse in priorisierte, umsetzbare Maßnahmenpläne, die sowohl Compliance als auch Business-Effizienz optimieren?",
        answer: "Die wahre Kunst einer Gap-Analyse liegt nicht in der reinen Identifikation von Schwachstellen, sondern in der intelligenten Transformation dieser Erkenntnisse in strategische, priorisierte und umsetzbare Maßnahmenpläne. ADVISORI entwickelt Roadmaps, die KRITIS-Compliance und operative Exzellenz synergetisch verbinden und dabei realistische Budget- und Ressourcenrahmen berücksichtigen.\n\n📊 Strategische Priorisierung nach Business-Impact:\n• Risiko-basierte Bewertungsmatrix: Systematische Bewertung jeder identifizierten Schwachstelle nach Eintrittswahrscheinlichkeit, potenziellen Auswirkungen und Behebungsaufwand.\n• Business-Criticality-Assessment: Priorisierung von Maßnahmen basierend auf ihrer Bedeutung für geschäftskritische Prozesse und Kundenservices.\n• Regulatory-Impact-Analyse: Bewertung der regulatorischen Dringlichkeit einzelner Maßnahmen und potenzieller Compliance-Risiken bei Verzögerung.\n• Quick-Win-Identifikation: Identifikation von Maßnahmen mit geringem Aufwand aber hohem Sicherheitsgewinn für schnelle Erfolge.\n• Resource-Optimized-Sequencing: Optimale zeitliche Abfolge der Maßnahmen zur maximalen Ausnutzung verfügbarer Ressourcen.\n\n🎯 Integrierte Umsetzungsstrategien:\n• Parallel-Track-Implementation: Entwicklung paralleler Umsetzungsstränge für technische und organisatorische Maßnahmen zur Zeitoptimierung.\n• Change-Management-Integration: Systematische Berücksichtigung von Veränderungsmanagement-Aspekten bei der Maßnahmenplanung.\n• Stakeholder-Alignment: Koordination aller relevanten internen und externen Stakeholder für reibungslose Umsetzung.\n• Budget-optimierte Phasierung: Verteilung von Investitionen über realistische Zeiträume unter Berücksichtigung von Budget-Zyklen.\n• Vendor-Management-Strategie: Optimale Auswahl und Koordination externer Dienstleister und Technologie-Partner.\n\n🔄 Kontinuierliche Optimierung und Monitoring:\n• KPI-basiertes Fortschritts-Tracking: Entwicklung messbarer Erfolgsindikatoren für jede Maßnahme und kontinuierliches Monitoring.\n• Adaptive Roadmap-Adjustments: Flexible Anpassung der Maßnahmenpläne basierend auf sich ändernden Bedrohungslagen oder Business-Anforderungen.\n• Lessons-Learned-Integration: Systematische Erfassung und Integration von Erfahrungen aus der Umsetzung für kontinuierliche Verbesserung.\n• Success-Story-Documentation: Dokumentation von Erfolgen und Best Practices für Motivation und Wissenstransfer.\n\n💼 Business-Value-Maximierung:\n• ROI-Optimierung: Quantifizierung des Return on Investment für Sicherheitsmaßnahmen durch Reduktion von Risiken und Effizienzsteigerungen.\n• Process-Improvement-Integration: Verbindung von Sicherheitsverbesserungen mit operativen Prozessoptimierungen für doppelten Nutzen.\n• Innovation-Enablement: Nutzung von Sicherheitsinvestitionen als Katalysator für digitale Innovation und Modernisierung."
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
