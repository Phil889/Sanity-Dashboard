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
    console.log('Updating DORA Risk Management Framework page with FAQs batch 1...')
    
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
        _key: generateKey('faq', 1),
        question: 'Welche strategischen Vorteile bietet ein umfassendes DORA Risk Management Framework für Finanzunternehmen?',
        answer: "Ein strategisches DORA Risk Management Framework ist weit mehr als nur ein regulatorisches Compliance-Instrument – es ist ein transformativer Ansatz, der operative Resilienz mit nachhaltigen Geschäftsvorteilen verbindet. Ein durchdachtes Framework ermöglicht es Finanzunternehmen, ICT-Risiken nicht nur zu identifizieren und zu bewerten, sondern proaktiv zu steuern und als strategischen Wettbewerbsvorteil zu nutzen.\n\n🎯 Strategische Geschäftstransformation:\n• Operative Resilienz als Differenzierungsmerkmal: Ein robustes DORA Risk Management Framework stärkt die Widerstandsfähigkeit gegen Cyber-Bedrohungen und Betriebsstörungen, was zu erhöhter Kundenzufriedenheit, Marktvertrauen und letztendlich zu Wettbewerbsvorteilen führt.\n• Risikotransparenz und strategische Entscheidungsfindung: Systematische Identifikation und Bewertung von ICT-Risiken ermöglicht präzise, datenbasierte Entscheidungen und optimierte Ressourcenallokation für Sicherheitsinvestitionen und Geschäftsentwicklung.\n• Regulatorische Führungsposition: Frühzeitige und umfassende DORA-Compliance positioniert Ihr Unternehmen als vertrauenswürdigen Marktführer und kann neue Geschäftsmöglichkeiten mit regulierungsbewussten Partnern und Kunden eröffnen.\n• Innovation Enablement: Robuste Risikomanagement-Frameworks schaffen die Grundlage für sichere Implementierung neuer Technologien, Geschäftsmodelle und digitaler Innovationen.\n\n🏗️ Organisatorische Exzellenz durch strukturiertes Risikomanagement:\n• Ganzheitliche Risikosicht: DORA Risk Management erfordert die Integration von Governance, Technologie, Prozessen und Kultur, was zu einer umfassenden organisatorischen Modernisierung und verbesserter Risikosicht führt.\n• Prozessoptimierung und Effizienzsteigerung: Die Implementierung von DORA-konformen Risikomanagement-Prozessen identifiziert und eliminiert Ineffizienzen, verbessert die operative Effizienz und reduziert Betriebskosten.\n• Stakeholder-Vertrauen und Reputation: Transparente Risikomanagement-Strukturen und nachweisbare Risikomanagement-Fähigkeiten stärken das Vertrauen von Investoren, Aufsichtsbehörden, Geschäftspartnern und Kunden.\n• Talentattraktivität und Mitarbeiterbindung: Moderne, gut strukturierte Risikomanagement-Umgebungen mit klaren Governance-Frameworks ziehen qualifizierte Fachkräfte an und verbessern die Mitarbeiterbindung.\n\n💡 Langfristige Wertschöpfung und Nachhaltigkeit:\n• Skalierbare und anpassungsfähige Frameworks: Gut konzipierte DORA Risk Management Frameworks sind erweiterbar und anpassungsfähig, was zukünftige regulatorische Änderungen, Geschäftswachstum und technologische Entwicklungen unterstützt.\n• Kostenoptimierung und ROI-Maximierung: Strukturierte Ansätze reduzieren Implementierungskosten, vermeiden Doppelarbeit und maximieren den Return on Investment für Risikomanagement-Initiativen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie entwickelt man eine effektive ICT-Risikobewertungsmethodik, die sowohl DORA-Anforderungen erfüllt als auch praktikabel für den operativen Einsatz ist?',
        answer: "Eine effektive ICT-Risikobewertungsmethodik für DORA erfordert eine ausgewogene Balance zwischen regulatorischer Compliance und operativer Praktikabilität. Sie muss systematisch, nachvollziehbar und gleichzeitig flexibel genug sein, um sich an die dynamische Natur von ICT-Risiken anzupassen und dabei die spezifischen Geschäftsanforderungen des Finanzunternehmens zu berücksichtigen.\n\n🔍 Systematische Risikobewertungsarchitektur:\n• Multi-dimensionale Risikokategorisierung: Entwicklung einer umfassenden Taxonomie von ICT-Risiken, die technische Risiken, operative Risiken, strategische Risiken und externe Risiken systematisch erfasst und dabei sowohl quantitative als auch qualitative Bewertungskriterien integriert.\n• Risiko-Asset-Mapping: Systematische Zuordnung von ICT-Risiken zu kritischen Geschäftsprozessen, Systemen und Datenbeständen, um die Auswirkungen potenzieller Störungen präzise bewerten und priorisieren zu können.\n• Dynamische Bewertungsmodelle: Implementation von Bewertungsmodellen, die sowohl statische Risikofaktoren als auch dynamische Bedrohungslandschaften berücksichtigen und regelmäßige Neubewertungen ermöglichen.\n• Stakeholder-Integration: Einbindung verschiedener Fachbereiche und Expertise-Ebenen in den Bewertungsprozess, um eine ganzheitliche und praxisnahe Risikosicht zu gewährleisten.\n\n📊 Quantitative und qualitative Bewertungsframeworks:\n• Hybrid-Scoring-Modelle: Entwicklung von Bewertungsmodellen, die sowohl quantitative Metriken als auch qualitative Einschätzungen integrieren und dabei branchenspezifische Benchmarks und Best Practices berücksichtigen.\n• Wahrscheinlichkeits-Impact-Matrizen: Implementation strukturierter Bewertungsmatrizen, die Eintrittswahrscheinlichkeit und potenzielle Auswirkungen systematisch bewerten und dabei verschiedene Szenarien und Zeitrahmen berücksichtigen.\n• Risiko-Aggregation und -Korrelation: Berücksichtigung von Risiko-Interdependenzen und Korrelationseffekten, um kumulative Risiken und Dominoeffekte angemessen zu bewerten.\n• Kontinuierliche Kalibrierung: Regelmäßige Überprüfung und Anpassung der Bewertungsparameter basierend auf historischen Daten, Marktentwicklungen und regulatorischen Änderungen.\n\n🔄 Operative Integration und Automatisierung:\n• Workflow-Integration: Nahtlose Integration der Risikobewertung in bestehende Geschäftsprozesse und Entscheidungsworkflows, um sicherzustellen, dass Risikobewertungen zeitnah und relevant für operative Entscheidungen sind.\n• Automatisierte Datensammlung: Nutzung von Technologie zur automatisierten Sammlung und Analyse risikorelevanter Daten aus verschiedenen Quellen, um die Effizienz und Konsistenz der Bewertung zu verbessern.\n• Real-time Risk Monitoring: Implementation von Systemen zur kontinuierlichen Überwachung von Risikoindikatoren und automatischen Auslösung von Neubewertungen bei signifikanten Änderungen.\n• Benutzerfreundliche Tools: Entwicklung intuitiver Bewertungstools und Dashboards, die es Fachexperten ermöglichen, Risikobewertungen effizient durchzuführen und zu dokumentieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche kritischen Erfolgsfaktoren müssen bei der Etablierung einer DORA-konformen Risk Governance Struktur berücksichtigt werden?',
        answer: "Die Etablierung einer DORA-konformen Risk Governance Struktur ist ein komplexer Transformationsprozess, der strategische Planung, organisatorische Anpassungen und kulturelle Veränderungen umfasst. Erfolgreiche Risk Governance erfordert eine klare Verantwortungsverteilung, effektive Entscheidungsprozesse und die nahtlose Integration in bestehende Unternehmensstrukturen.\n\n👥 Strategische Governance-Architektur:\n• Board-Level Oversight und Executive Sponsorship: Etablierung klarer Board-Level-Verantwortlichkeiten für ICT-Risikomanagement mit dedizierten Komitees oder Integration in bestehende Risiko- und Audit-Komitees, unterstützt durch sichtbares Executive Sponsorship.\n• Three Lines of Defense Integration: Nahtlose Integration der DORA Risk Governance in das bestehende Three Lines of Defense Modell mit klarer Abgrenzung zwischen operativer Verantwortung, unabhängiger Risikokontrolle und interner Revision.\n• Cross-funktionale Koordination: Schaffung von DORA-spezifischen Steering Committees und Working Groups, die IT, Risikomanagement, Compliance, Geschäftsbereiche und externe Dienstleister effektiv koordinieren.\n• Klare Rollen und Verantwortlichkeiten: Definition präziser Rollen, Verantwortlichkeiten und Rechenschaftspflichten für alle Ebenen der Organisation, von Board-Level bis zu operativen Teams.\n\n📋 Operative Governance-Mechanismen:\n• Policy Framework Development: Entwicklung einer hierarchischen Policy-Struktur von High-Level-Prinzipien bis zu detaillierten Arbeitsanweisungen, die DORA-Anforderungen in praktische, umsetzbare Handlungsrichtlinien übersetzt.\n• Entscheidungsprozesse und Eskalationswege: Definition klarer Entscheidungsprozesse für verschiedene Risikokategorien und -schweregrade mit angemessenen Eskalationswegen und Zeitrahmen.\n• Performance Management Integration: Einbindung von DORA-relevanten KPIs und Zielen in individuelle und organisatorische Performance Management Systeme zur Sicherstellung der Accountability.\n• Dokumentation und Nachvollziehbarkeit: Etablierung robuster Dokumentationsprozesse, die Entscheidungen, Begründungen und Maßnahmen nachvollziehbar dokumentieren und Audit-Trails gewährleisten.\n\n🔄 Kontinuierliche Verbesserung und Anpassungsfähigkeit:\n• Governance Effectiveness Reviews: Implementierung regelmäßiger Reviews der Governance-Effektivität mit strukturierten Feedback-Mechanismen und kontinuierlichen Verbesserungsprozessen.\n• Agile Governance-Prinzipien: Balance zwischen strukturierter Governance und operativer Agilität, um schnelle Reaktionen auf sich ändernde Bedrohungslandschaften zu ermöglichen.\n• Stakeholder Engagement: Strukturierte Einbindung aller relevanten Stakeholder in Governance-Prozesse durch regelmäßige Kommunikation, Feedback-Mechanismen und partizipative Entscheidungsfindung.\n• Technology-enabled Governance: Nutzung von Technologie zur Automatisierung von Routine-Governance-Aktivitäten und zur Bereitstellung von Real-time-Governance-Dashboards und -Berichten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie kann man Third-Party Risk Management effektiv in ein DORA-konformes Risikomanagement-Framework integrieren?',
        answer: "Die Integration von Third-Party Risk Management in ein DORA-konformes Framework erfordert einen systematischen Ansatz, der die gesamte Lieferantenkette umfasst und dabei sowohl direkte als auch indirekte Risiken berücksichtigt. Effektives Third-Party Risk Management geht über traditionelle Vendor Management Ansätze hinaus und erfordert eine ganzheitliche Sicht auf Risiko-Interdependenzen und -Kaskaden.\n\n🔍 Umfassende Third-Party Risk Assessment:\n• Kritische Service Provider Identifikation: Systematische Identifikation und Klassifizierung aller Third-Party-Dienstleister basierend auf ihrer Kritikalität für Geschäftsprozesse, Datenverarbeitung und operative Kontinuität, einschließlich direkter und indirekter Abhängigkeiten.\n• Multi-Tier Risk Assessment: Bewertung von Risiken nicht nur bei direkten Dienstleistern, sondern auch bei deren Sub-Contractors und der gesamten Lieferkette, um versteckte Risiko-Konzentrationen und Single Points of Failure zu identifizieren.\n• Dynamische Risikobewertung: Implementation kontinuierlicher Risikobewertungsprozesse, die sich ändernde Geschäftsbeziehungen, Marktbedingungen und Bedrohungslandschaften berücksichtigen.\n• Risiko-Kategorisierung und -Priorisierung: Entwicklung einer strukturierten Kategorisierung von Third-Party-Risiken nach Auswirkung, Wahrscheinlichkeit und strategischer Bedeutung.\n\n📋 Vertragliche und operative Integration:\n• DORA-konforme Vertragsgestaltung: Integration spezifischer DORA-Anforderungen in Dienstleisterverträge, einschließlich Transparenzpflichten, Incident Reporting, Business Continuity Planning und Right-to-Audit-Klauseln.\n• Service Level Agreements und KPIs: Definition messbarer SLAs und KPIs, die operative Resilienz, Sicherheitsstandards und Compliance-Anforderungen abdecken und regelmäßige Performance-Reviews ermöglichen.\n• Gemeinsame Governance-Strukturen: Etablierung gemeinsamer Governance-Mechanismen mit kritischen Dienstleistern, einschließlich regelmäßiger Risk Reviews, Joint Business Continuity Planning und koordinierter Incident Response.\n• Exit-Strategien und Contingency Planning: Entwicklung robuster Exit-Strategien und Contingency Plans für kritische Dienstleister, um Geschäftskontinuität auch bei Dienstleister-Ausfällen zu gewährleisten.\n\n🔄 Kontinuierliche Überwachung und Management:\n• Real-time Monitoring und Alerting: Implementation von Systemen zur kontinuierlichen Überwachung der Performance und Risikoindikatoren kritischer Dienstleister mit automatischen Alerting-Mechanismen.\n• Regelmäßige Due Diligence und Re-Assessment: Etablierung strukturierter Prozesse für regelmäßige Due Diligence Reviews und Risk Re-Assessments, die sich ändernde Geschäfts- und Risikobedingungen berücksichtigen.\n• Incident Management Integration: Nahtlose Integration von Third-Party-Incidents in das unternehmensweite Incident Management System mit klaren Eskalations- und Kommunikationsprozessen.\n• Vendor Risk Reporting und Analytics: Entwicklung umfassender Reporting-Systeme, die Third-Party-Risiken transparent machen und Trend-Analysen sowie Predictive Analytics ermöglichen."
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
    console.log('✅ FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
