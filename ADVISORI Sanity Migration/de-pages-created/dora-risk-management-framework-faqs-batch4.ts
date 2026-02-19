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
    console.log('Updating DORA Risk Management Framework page with FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-risk-management-framework' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-risk-management-framework" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Welche Rolle spielt Business Continuity Planning bei der Entwicklung eines DORA-konformen Risk Management Frameworks?',
        answer: "Business Continuity Planning ist ein integraler Bestandteil eines DORA-konformen Risk Management Frameworks und bildet die Brücke zwischen Risikobewertung und operativer Resilienz. Es transformiert theoretische Risikomanagement-Konzepte in praktische, umsetzbare Strategien, die sicherstellen, dass kritische Geschäftsfunktionen auch bei schwerwiegenden ICT-Störungen aufrechterhalten werden können.\n\n🔄 Integrierte Resilienz-Planung:\n• Kritische Geschäftsfunktionen-Mapping: Systematische Identifikation und Priorisierung kritischer Geschäftsfunktionen und deren Abhängigkeiten von ICT-Systemen, um präzise Recovery-Strategien entwickeln zu können, die sowohl regulatorische Anforderungen als auch Geschäftsziele erfüllen.\n• Recovery Time und Recovery Point Objectives: Definition realistischer und DORA-konformer RTO und RPO-Ziele für verschiedene Geschäftsfunktionen, basierend auf Risikobewertungen, regulatorischen Anforderungen und Geschäftsauswirkungen.\n• Scenario-basierte Kontinuitätsplanung: Entwicklung umfassender Kontinuitätspläne für verschiedene ICT-Störungsszenarien, von lokalen Systemausfällen bis hin zu großflächigen Cyber-Angriffen oder Naturkatastrophen.\n• Cross-funktionale Koordination: Integration von Business Continuity Planning mit anderen Risikomanagement-Bereichen wie Incident Response, Crisis Management und Third-Party Risk Management.\n\n🏗️ Operative Resilienz-Architektur:\n• Redundanz und Backup-Strategien: Design und Implementation robuster Backup- und Redundanz-Strategien, die sowohl technische als auch operative Aspekte berücksichtigen und dabei Kosten-Nutzen-Optimierung gewährleisten.\n• Alternative Betriebsmodelle: Entwicklung alternativer Betriebsmodelle und Workarounds, die es ermöglichen, kritische Geschäftsfunktionen auch bei Ausfall primärer ICT-Systeme aufrechtzuerhalten.\n• Supplier und Vendor Continuity: Integration von Lieferanten- und Dienstleister-Kontinuitätsplänen in die eigene Business Continuity Strategie, einschließlich der Bewertung und Überwachung ihrer Resilienz-Fähigkeiten.\n• Geographic Diversification: Strategische geografische Verteilung kritischer Systeme und Funktionen zur Minimierung von Konzentrationsrisiken und Verbesserung der Resilienz gegen lokale Störungen.\n\n🧪 Testing und Validierung:\n• Regelmäßige BCP-Tests und Übungen: Implementation strukturierter Test-Programme, die verschiedene Störungsszenarien simulieren und die Effektivität der Kontinuitätspläne validieren, einschließlich Tabletop-Übungen, Simulationen und Live-Tests.\n• Lessons Learned Integration: Systematische Erfassung und Integration von Erkenntnissen aus Tests, realen Vorfällen und Branchenerfahrungen zur kontinuierlichen Verbesserung der Kontinuitätspläne.\n• Cross-Industry Benchmarking: Vergleich der eigenen BCP-Fähigkeiten mit Branchenstandards und Best Practices zur Identifikation von Verbesserungsmöglichkeiten.\n• Regulatory Alignment: Sicherstellung, dass alle BCP-Aktivitäten den DORA-Anforderungen entsprechen und dabei auch andere regulatorische Vorgaben berücksichtigen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Wie kann man Cyber-Risiken effektiv in ein DORA Risk Management Framework integrieren?',
        answer: "Die Integration von Cyber-Risiken in ein DORA Risk Management Framework erfordert einen ganzheitlichen Ansatz, der traditionelle Risikomanagement-Praktiken mit modernen Cybersecurity-Strategien verbindet. Diese Integration ist entscheidend, da Cyber-Bedrohungen eine der größten Herausforderungen für die operative Resilienz von Finanzunternehmen darstellen.\n\n🛡️ Cyber-Risk Assessment und Klassifizierung:\n• Threat Landscape Analysis: Kontinuierliche Analyse der sich entwickelnden Cyber-Bedrohungslandschaft, einschließlich neuer Angriffsvektoren, Bedrohungsakteure und Angriffstechniken, die spezifisch auf Finanzdienstleister abzielen.\n• Asset-basierte Cyber-Risikobewertung: Systematische Bewertung von Cyber-Risiken für alle kritischen ICT-Assets, einschließlich Systeme, Daten, Netzwerke und Anwendungen, unter Berücksichtigung ihrer Kritikalität für Geschäftsprozesse.\n• Dynamic Risk Scoring: Implementation dynamischer Cyber-Risk-Scoring-Modelle, die sich in Echtzeit an verändernde Bedrohungslagen, Schwachstellen und Schutzmaßnahmen anpassen können.\n• Third-Party Cyber Risk: Bewertung und Management von Cyber-Risiken, die durch Drittanbieter, Cloud-Services und Lieferantenketten entstehen, einschließlich der Bewertung ihrer Cybersecurity-Posture.\n\n🔍 Proaktive Cyber-Threat Intelligence:\n• Intelligence-driven Risk Management: Integration von Cyber-Threat Intelligence in Risikomanagement-Prozesse zur Früherkennung emerging Threats und zur proaktiven Anpassung von Schutzmaßnahmen.\n• Indicator-based Monitoring: Implementation von Systemen zur kontinuierlichen Überwachung von Cyber-Risikoindikatoren, einschließlich technischer Indikatoren, Verhaltensanomalien und externen Bedrohungssignalen.\n• Predictive Cyber Analytics: Nutzung fortschrittlicher Analytics und Machine Learning zur Vorhersage potenzieller Cyber-Angriffe und zur Bewertung ihrer wahrscheinlichen Auswirkungen.\n• Collaborative Threat Sharing: Teilnahme an Brancheninitiativen zum Austausch von Cyber-Threat Intelligence und Best Practices zur Verbesserung der kollektiven Cyber-Resilienz.\n\n🚨 Incident Response Integration:\n• Cyber-Incident Classification: Entwicklung von Klassifizierungssystemen für Cyber-Vorfälle, die sowohl technische Schweregrade als auch Geschäftsauswirkungen berücksichtigen und dabei DORA-Reporting-Anforderungen erfüllen.\n• Automated Response Capabilities: Implementation automatisierter Response-Mechanismen für bestimmte Arten von Cyber-Vorfällen, um Reaktionszeiten zu minimieren und Schäden zu begrenzen.\n• Cross-functional Incident Teams: Etablierung interdisziplinärer Incident Response Teams, die Cybersecurity-Expertise mit Risikomanagement, Business Continuity und Kommunikation verbinden.\n• Post-Incident Risk Assessment: Systematische Bewertung und Integration von Erkenntnissen aus Cyber-Vorfällen in das Risikomanagement-Framework zur kontinuierlichen Verbesserung der Cyber-Resilienz."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Welche Best Practices gibt es für die Dokumentation und Nachverfolgung von Risikomanagement-Entscheidungen im Rahmen von DORA?',
        answer: "Effektive Dokumentation und Nachverfolgung von Risikomanagement-Entscheidungen sind entscheidend für DORA-Compliance und ermöglichen Transparenz, Accountability und kontinuierliche Verbesserung. Eine strukturierte Dokumentationsstrategie schafft nicht nur regulatorische Compliance, sondern auch operativen Mehrwert durch verbesserte Entscheidungsqualität und Lerneffekte.\n\n📋 Strukturierte Dokumentationsframeworks:\n• Decision Documentation Standards: Entwicklung standardisierter Dokumentationsvorlagen und -prozesse für verschiedene Arten von Risikomanagement-Entscheidungen, die sowohl regulatorische Anforderungen als auch interne Governance-Bedürfnisse erfüllen.\n• Risk Decision Rationale: Systematische Dokumentation der Begründung für Risikomanagement-Entscheidungen, einschließlich der berücksichtigten Faktoren, Alternativen, Stakeholder-Input und erwarteten Auswirkungen.\n• Evidence-based Documentation: Sicherstellung, dass alle Entscheidungen durch angemessene Evidenz unterstützt werden, einschließlich Datenanalysen, Expertenbewertungen und Benchmarking-Informationen.\n• Stakeholder Involvement Tracking: Dokumentation der Beteiligung verschiedener Stakeholder an Entscheidungsprozessen, einschließlich ihrer Beiträge, Bedenken und Zustimmung.\n\n🔍 Audit Trail und Nachverfolgbarkeit:\n• Comprehensive Audit Trails: Implementation von Systemen zur automatischen Erstellung und Wartung umfassender Audit Trails für alle Risikomanagement-Aktivitäten und -Entscheidungen.\n• Version Control und Change Management: Robuste Versionskontrolle für alle Risikomanagement-Dokumente und -Entscheidungen, mit klarer Nachverfolgung von Änderungen, Gründen und Genehmigungen.\n• Timeline Documentation: Chronologische Dokumentation von Entscheidungsprozessen, einschließlich Zeitstempel, Meilensteine und kritische Ereignisse.\n• Cross-Reference Systems: Entwicklung von Systemen zur Verknüpfung verwandter Entscheidungen, Dokumente und Aktivitäten zur Schaffung eines kohärenten Gesamtbildes.\n\n📊 Performance Tracking und Lessons Learned:\n• Decision Outcome Monitoring: Systematische Verfolgung der Ergebnisse und Auswirkungen von Risikomanagement-Entscheidungen zur Bewertung ihrer Effektivität und zur Identifikation von Verbesserungsmöglichkeiten.\n• Success Metrics Definition: Definition klarer Erfolgsmetriken für verschiedene Arten von Risikomanagement-Entscheidungen zur objektiven Bewertung ihrer Performance.\n• Lessons Learned Documentation: Strukturierte Erfassung und Dokumentation von Erkenntnissen aus Entscheidungen, sowohl erfolgreichen als auch weniger erfolgreichen, zur Verbesserung zukünftiger Entscheidungsprozesse.\n• Knowledge Management Integration: Integration der Entscheidungsdokumentation in umfassende Knowledge Management Systeme zur Förderung des organisatorischen Lernens und der Wissensverteilung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie kann man die Qualität und Zuverlässigkeit von Risikodaten in einem DORA Risk Management Framework sicherstellen?',
        answer: "Die Qualität und Zuverlässigkeit von Risikodaten sind fundamental für die Effektivität eines DORA Risk Management Frameworks. Hochwertige Daten ermöglichen präzise Risikobewertungen, fundierte Entscheidungen und zuverlässige Compliance-Berichterstattung, während schlechte Datenqualität zu fehlerhaften Einschätzungen und regulatorischen Problemen führen kann.\n\n🎯 Data Quality Management Framework:\n• Data Quality Dimensions: Definition und Messung verschiedener Datenqualitätsdimensionen wie Vollständigkeit, Genauigkeit, Konsistenz, Aktualität, Relevanz und Integrität für alle risikorelevanten Datenbestände.\n• Data Quality Standards: Etablierung klarer Datenqualitätsstandards und -schwellenwerte für verschiedene Arten von Risikodaten, basierend auf ihrer Kritikalität und Verwendung in Entscheidungsprozessen.\n• Automated Data Quality Monitoring: Implementation automatisierter Systeme zur kontinuierlichen Überwachung der Datenqualität mit Real-time-Alerting bei Qualitätsproblemen oder Anomalien.\n• Data Quality Scorecards: Entwicklung umfassender Scorecards und Dashboards zur Visualisierung der Datenqualität über verschiedene Systeme, Prozesse und Zeiträume hinweg.\n\n🔧 Data Governance und Stewardship:\n• Data Governance Framework: Etablierung robuster Data Governance Strukturen mit klaren Rollen, Verantwortlichkeiten und Prozessen für das Management von Risikodaten über ihren gesamten Lebenszyklus.\n• Data Stewardship Programme: Implementation von Data Stewardship Programmen mit dedizierten Data Stewards, die für die Qualität, Integrität und Compliance spezifischer Datendomänen verantwortlich sind.\n• Data Lineage und Provenance: Systematische Dokumentation der Herkunft, Transformation und Verwendung von Risikodaten zur Sicherstellung der Nachvollziehbarkeit und Vertrauenswürdigkeit.\n• Master Data Management: Implementation von Master Data Management Praktiken zur Sicherstellung konsistenter, autoritativer Referenzdaten über alle Risikomanagement-Systeme hinweg.\n\n🛡️ Data Validation und Kontrollen:\n• Multi-layered Validation: Implementation mehrschichtiger Datenvalidierungsprozesse, einschließlich automatisierter Plausibilitätsprüfungen, Konsistenzkontrollen und manueller Reviews für kritische Daten.\n• Exception Management: Entwicklung strukturierter Prozesse für das Management von Datenqualitätsausnahmen, einschließlich Eskalation, Korrektur und Präventionsmaßnahmen.\n• Data Reconciliation: Regelmäßige Abstimmung von Risikodaten zwischen verschiedenen Systemen und Quellen zur Identifikation und Behebung von Inkonsistenzen.\n• Independent Data Validation: Etablierung unabhängiger Validierungsprozesse durch Second Line of Defense Funktionen zur objektiven Bewertung der Datenqualität und -zuverlässigkeit."
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
    console.log('✅ FAQs batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
