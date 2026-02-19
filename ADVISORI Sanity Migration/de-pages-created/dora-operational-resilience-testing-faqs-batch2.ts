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
    console.log('Updating DORA Operational Resilience Testing page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-operational-resilience-testing' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-operational-resilience-testing" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche spezifischen Herausforderungen entstehen bei der Integration von DORA Testing-Anforderungen in bestehende IT-Governance-Strukturen?',
        answer: "Die Integration von DORA Testing-Anforderungen in etablierte IT-Governance-Strukturen stellt Finanzunternehmen vor komplexe organisatorische und technische Herausforderungen. Diese Integration erfordert eine durchdachte Transformation bestehender Prozesse, Rollen und Verantwortlichkeiten, um regulatorische Compliance mit operativer Effizienz zu verbinden.\n\n🏛️ Governance-Integration Herausforderungen:\n• Rollenabgrenzung und Verantwortlichkeiten: Klare Definition der Zuständigkeiten zwischen IT-Sicherheit, Risikomanagement, Compliance und Geschäftsbereichen für verschiedene Aspekte des DORA Testing-Programms.\n• Entscheidungsprozesse und Eskalationswege: Etablierung effizienter Entscheidungsstrukturen für Testing-Prioritäten, Budgetallokation und Remediation-Maßnahmen ohne Verlangsamung der operativen Abläufe.\n• Berichtswesen und Kommunikation: Integration von DORA Testing-Ergebnissen in bestehende Management-Reporting-Strukturen und Sicherstellung angemessener Transparenz auf allen Organisationsebenen.\n• Policy-Integration: Harmonisierung neuer DORA-spezifischer Richtlinien mit bestehenden IT-Security-, Risk-Management- und Compliance-Policies.\n\n⚙️ Technische Integrations-Komplexität:\n• Legacy-System-Kompatibilität: Anpassung von Testing-Methoden an heterogene IT-Landschaften mit unterschiedlichen Technologie-Generationen und Sicherheitsarchitekturen.\n• Datenintegration und -konsistenz: Sicherstellung konsistenter Datenqualität und -verfügbarkeit aus verschiedenen Systemen für umfassende Testing-Analysen.\n• Tool-Konsolidierung: Integration neuer DORA-spezifischer Testing-Tools in bestehende Security- und Risk-Management-Plattformen ohne Redundanzen oder Konflikte.\n• Automatisierung und Orchestrierung: Entwicklung automatisierter Workflows, die DORA Testing nahtlos in bestehende IT-Operations- und Change-Management-Prozesse einbetten.\n\n🔄 Change Management und Kulturwandel:\n• Stakeholder-Buy-in: Gewinnung der Unterstützung verschiedener Organisationsebenen für neue Testing-Anforderungen und damit verbundene Prozessänderungen.\n• Kompetenzentwicklung: Systematischer Aufbau neuer Fähigkeiten in bestehenden Teams ohne Disruption laufender Aktivitäten.\n• Widerstand gegen Veränderungen: Proaktive Adressierung von Bedenken und Widerständen gegen neue Testing-Praktiken und erhöhte Transparenz-Anforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Wie können Finanzunternehmen die Effektivität ihrer DORA Testing-Programme kontinuierlich messen und optimieren?',
        answer: "Die kontinuierliche Messung und Optimierung von DORA Testing-Programmen erfordert ein systematisches Performance-Management-System, das sowohl quantitative Metriken als auch qualitative Bewertungen umfasst. Erfolgreiche Organisationen etablieren datengetriebene Feedback-Schleifen, die kontinuierliche Verbesserung und Anpassung an evolvierende Bedrohungslandschaften ermöglichen.\n\n📊 Quantitative Leistungsindikatoren:\n• Testing-Coverage-Metriken: Messung des Abdeckungsgrads kritischer ICT-Systeme, Geschäftsprozesse und Angriffsvektoren durch verschiedene Testing-Methoden.\n• Schwachstellen-Discovery-Rate: Tracking der Anzahl und Schwere identifizierter Schwachstellen pro Testing-Zyklus als Indikator für die Effektivität der Testing-Methoden.\n• Remediation-Geschwindigkeit: Messung der Zeit zwischen Schwachstellen-Identifikation und erfolgreicher Behebung, segmentiert nach Kritikalität und Systemtyp.\n• False-Positive-Rate: Bewertung der Genauigkeit von Testing-Tools und -Methoden durch Analyse der Anzahl fälschlicherweise identifizierter Schwachstellen.\n• Testing-Kosten pro identifizierte Schwachstelle: Effizienz-Metrik zur Bewertung der Kosteneffektivität verschiedener Testing-Ansätze.\n\n🎯 Qualitative Bewertungskriterien:\n• Realitätsnähe der Testing-Szenarien: Regelmäßige Bewertung der Relevanz und Aktualität der verwendeten Bedrohungsmodelle und Angriffssimulationen.\n• Stakeholder-Zufriedenheit: Systematische Erfassung des Feedbacks von Geschäftsbereichen, IT-Teams und Management zur Nützlichkeit und Angemessenheit der Testing-Programme.\n• Lerneffekt und Kompetenzentwicklung: Bewertung des Wissenszuwachs und der Fähigkeitsentwicklung in den beteiligten Teams durch Testing-Aktivitäten.\n• Regulatorische Anerkennung: Feedback von Aufsichtsbehörden und externen Auditoren zur Qualität und Vollständigkeit der Testing-Programme.\n\n🔄 Kontinuierliche Optimierungszyklen:\n• Benchmarking und Best-Practice-Analyse: Regelmäßiger Vergleich mit Branchenstandards und führenden Praktiken anderer Finanzunternehmen.\n• Threat-Intelligence-Integration: Kontinuierliche Anpassung der Testing-Szenarien basierend auf aktuellen Bedrohungstrends und Incident-Learnings.\n• Technologie-Evolution: Systematische Bewertung und Integration neuer Testing-Technologien und -Methoden zur Verbesserung der Effektivität.\n• Feedback-Integration: Strukturierte Einbindung von Lessons Learned aus tatsächlichen Sicherheitsvorfällen in die Testing-Strategie."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Welche Rolle spielen externe Dienstleister und Drittanbieter bei der Umsetzung von DORA Testing-Anforderungen?',
        answer: "Externe Dienstleister und Drittanbieter spielen eine zentrale Rolle bei der erfolgreichen Umsetzung von DORA Testing-Anforderungen, bringen jedoch gleichzeitig komplexe Risiko- und Governance-Herausforderungen mit sich. Die strategische Orchestrierung dieser Partnerschaften ist entscheidend für die Effektivität und Compliance des gesamten Testing-Programms.\n\n🤝 Strategische Partnerschaftsmodelle:\n• Spezialisierte Testing-Dienstleister: Engagement von Cyber-Security-Experten mit spezifischer DORA- und TLPT-Expertise für komplexe Testing-Szenarien, die interne Kapazitäten übersteigen.\n• Managed Security Service Provider (MSSP): Integration kontinuierlicher Monitoring- und Testing-Services in bestehende Security-Operations für skalierbare und kosteneffiziente Abdeckung.\n• Cloud-Service-Provider: Nutzung von Cloud-basierten Testing-Plattformen und -Tools für flexible, skalierbare Testing-Infrastrukturen ohne hohe Kapitalinvestitionen.\n• Beratungspartner: Strategische Beratung für Testing-Strategie-Entwicklung, Governance-Design und regulatorische Compliance-Sicherstellung.\n\n⚖️ Risikomanagement und Governance:\n• Due Diligence und Vendor Assessment: Umfassende Bewertung der Sicherheits-, Compliance- und Leistungsfähigkeit potenzieller Dienstleister vor Vertragsabschluss.\n• Vertragliche Sicherheitsanforderungen: Definition spezifischer DORA-konformer Leistungsstandards, Datenschutz-Anforderungen und Haftungsregelungen in Dienstleisterverträgen.\n• Kontinuierliches Monitoring: Etablierung von Überwachungsmechanismen zur laufenden Bewertung der Dienstleister-Performance und Compliance-Einhaltung.\n• Incident Response Koordination: Klare Prozesse für die Koordination zwischen internen Teams und externen Dienstleistern bei Sicherheitsvorfällen oder Testing-Anomalien.\n\n🔐 Datenschutz und Vertraulichkeit:\n• Datenklassifizierung und -handling: Strenge Kontrollen für den Umgang mit sensiblen Finanzinformationen und Geschäftsdaten während Testing-Aktivitäten.\n• Geografische und jurisdiktionelle Überlegungen: Berücksichtigung von Datenlokalisierungs-Anforderungen und regulatorischen Beschränkungen bei der Dienstleister-Auswahl.\n• Intellectual Property Schutz: Sicherstellung des Schutzes proprietärer Informationen und Testing-Methoden bei der Zusammenarbeit mit externen Partnern.\n\n🎯 Optimierung der Dienstleister-Integration:\n• Hybride Delivery-Modelle: Strategische Kombination interner Kapazitäten mit externen Spezialisierungen für optimale Kosten-Nutzen-Relation und Risikominimierung.\n• Knowledge Transfer und Capacity Building: Strukturierte Wissensübertragung von externen Experten an interne Teams zur langfristigen Kompetenzentwicklung.\n• Performance-basierte Verträge: Implementierung von Leistungsindikatoren und Anreizsystemen zur Sicherstellung hoher Servicequalität und kontinuierlicher Verbesserung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie können Finanzunternehmen ihre DORA Testing-Strategien an evolvierende Cyber-Bedrohungen und Technologie-Trends anpassen?',
        answer: "Die Anpassung von DORA Testing-Strategien an evolvierende Cyber-Bedrohungen und Technologie-Trends erfordert einen dynamischen, zukunftsorientierten Ansatz, der kontinuierliche Innovation mit regulatorischer Stabilität verbindet. Erfolgreiche Organisationen entwickeln adaptive Testing-Frameworks, die sowohl auf aktuelle Bedrohungen reagieren als auch zukünftige Entwicklungen antizipieren können.\n\n🔮 Threat Intelligence Integration:\n• Kontinuierliche Bedrohungsanalyse: Systematische Überwachung der globalen Cyber-Bedrohungslandschaft und Integration aktueller Angriffsmuster in Testing-Szenarien.\n• Sektor-spezifische Threat Feeds: Nutzung spezialisierter Threat Intelligence für den Finanzsektor zur Identifikation branchenrelevanter Angriffsvektoren und Taktiken.\n• Predictive Threat Modeling: Entwicklung von Modellen zur Vorhersage zukünftiger Bedrohungstrends basierend auf technologischen Entwicklungen und geopolitischen Faktoren.\n• Incident-basierte Anpassungen: Schnelle Integration von Lessons Learned aus aktuellen Cyber-Vorfällen in der Branche in bestehende Testing-Programme.\n\n🚀 Technologie-Evolution und Innovation:\n• Emerging Technology Assessment: Proaktive Bewertung neuer Technologien wie Künstliche Intelligenz, Quantum Computing und IoT hinsichtlich ihrer Auswirkungen auf die Cyber-Resilienz.\n• Cloud-native Testing-Ansätze: Anpassung von Testing-Methoden an Cloud-first-Architekturen und containerisierte Anwendungslandschaften.\n• DevSecOps-Integration: Einbettung von Security Testing in agile Entwicklungsprozesse und CI/CD-Pipelines für kontinuierliche Resilienz-Validierung.\n• Automation und Orchestrierung: Nutzung fortschrittlicher Automatisierungstechnologien für skalierbare, konsistente Testing-Durchführung.\n\n📈 Adaptive Testing-Frameworks:\n• Modulare Testing-Architekturen: Entwicklung flexibler Testing-Frameworks, die schnelle Anpassungen an neue Bedrohungen und Technologien ermöglichen.\n• Scenario-basierte Planung: Implementierung von Szenario-Planungsansätzen zur Vorbereitung auf verschiedene zukünftige Bedrohungs- und Technologie-Entwicklungen.\n• Agile Testing-Methoden: Adoption agiler Prinzipien für Testing-Programme zur Erhöhung der Anpassungsfähigkeit und Reaktionsgeschwindigkeit.\n• Continuous Learning Loops: Etablierung von Feedback-Mechanismen zur kontinuierlichen Verbesserung und Anpassung der Testing-Strategien.\n\n🌐 Kollaborative Ansätze:\n• Branchenweite Kooperationen: Teilnahme an Informationsaustausch-Initiativen und gemeinsamen Testing-Übungen mit anderen Finanzunternehmen.\n• Regulatorische Zusammenarbeit: Proaktive Kommunikation mit Aufsichtsbehörden über neue Bedrohungen und Testing-Innovationen.\n• Akademische Partnerschaften: Zusammenarbeit mit Forschungseinrichtungen zur Entwicklung fortschrittlicher Testing-Methoden und Bedrohungsmodelle."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
