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
    console.log('Updating Datenschutzkoordinator Schulung - Incident Management & Meldepflichten page with FAQs batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'datenschutzkoordinator-schulung-incident-management-meldepflichten' })
    
    if (!existingDoc) {
      throw new Error('Document "datenschutzkoordinator-schulung-incident-management-meldepflichten" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Welche Methoden zur Quantifizierung und Bewertung von Datenschutz-Incident-Schäden vermittelt ADVISORI und wie unterstützt dies die strategische Entscheidungsfindung der Unternehmensleitung?",
        answer: "Die präzise Quantifizierung und Bewertung von Datenschutz-Incident-Schäden ist entscheidend für fundierte Geschäftsentscheidungen und strategisches Risikomanagement. ADVISORI's Schulungsansatz entwickelt systematische Methodiken zur umfassenden Schadensbewertung, die sowohl direkte als auch indirekte Kosten erfassen und der Unternehmensleitung belastbare Entscheidungsgrundlagen liefern.\n\n💰 Direkte Schadensmessung und Kostenkalkulation:\n• Immediate Response Costs: Systematische Erfassung direkter Incident Response Kosten (Personal, externe Berater, Forensik, IT-Wiederherstellung, Notfall-Hardware).\n• Regulatory Fine Assessment: Methodiken zur Bewertung wahrscheinlicher Bußgeldhöhen basierend auf Schweregrad, Aufsichtspraxis und mildernden/erschwerenden Faktoren.\n• Legal Settlement Estimation: Bewertung potenzieller Schadenersatzforderungen und Klageverfahren durch betroffene Personen.\n• Business Interruption Quantification: Präzise Berechnung von Umsatzausfällen und Produktivitätsverlusten während der Incident Response Phase.\n\n📊 Indirekte Schäden und langfristige Auswirkungen:\n• Reputational Damage Modeling: Quantitative Methoden zur Bewertung von Reputationsschäden durch Kundenabwanderung, Marktanteilsverluste und Markenwertverlust.\n• Customer Lifetime Value Impact: Analyse der langfristigen Auswirkungen auf Kundenwerte und Neukundenakquisitionskosten.\n• Insurance Premium Adjustments: Bewertung der Auswirkungen auf Cyber-Versicherungsprämien und Deckungskonditionen.\n• Competitive Disadvantage Assessment: Analyse von Marktpositionsverlusten und Wettbewerbsnachteilen durch Incident-bedingte Schwächen.\n\n🎯 Enterprise Risk Management Integration:\n• Risk-Adjusted ROI Calculations: Integration von Incident-Kosten in unternehmerische ROI-Bewertungen und Investitionsentscheidungen.\n• Monte Carlo Simulation: Probabilistische Modellierung verschiedener Schadenszenarien zur Unterstützung strategischer Planung.\n• Value-at-Risk Modeling: Entwicklung von VaR-Modellen für Datenschutz-Incidents als Teil des Enterprise Risk Managements.\n• Cost-Benefit Analysis Frameworks: Systematische Frameworks für die Bewertung präventiver Maßnahmen gegen potenzielle Incident-Kosten.\n\n🚀 Strategic Decision Support und C-Level Reporting:\n• Executive Dashboard Development: Aufbau aussagekräftiger Dashboards für Real-time Incident Cost Tracking und Management Reporting.\n• Board-Level Risk Communication: Methoden zur verständlichen Kommunikation komplexer Schadensbewertungen an Vorstand und Aufsichtsrat.\n• Budget Planning Integration: Einbindung von Incident-Erkenntnissen in strategische Budgetplanung und Ressourcenallokation.\n• Investment Prioritization: Nutzung von Schadensbewertungen für die Priorisierung von Sicherheitsinvestitionen und Präventionsmaßnahmen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Wie bereitet ADVISORI's Schulung auf die Integration von Incident Management in Business Continuity und Crisis Management vor und welche übergreifenden Koordinationskompetenzen werden entwickelt?",
        answer: "Datenschutz-Incidents treten selten isoliert auf, sondern sind oft Teil komplexerer Geschäftskrisen oder können diese auslösen. ADVISORI's Schulungsansatz entwickelt umfassende Koordinationskompetenzen für die nahtlose Integration von Datenschutz-Incident Management in übergeordnete Business Continuity und Crisis Management Strukturen, um ganzheitliche Unternehmensresilienz zu gewährleisten.\n\n🔄 Business Continuity Integration und Koordination:\n• BCM-DPO Collaboration Frameworks: Strukturierte Zusammenarbeitsmodelle zwischen Datenschutzorganisation und Business Continuity Management für koordinierte Krisenbewältigung.\n• Critical Process Prioritization: Methoden zur Integration datenschutzrechtlicher Anforderungen in die Priorisierung kritischer Geschäftsprozesse während Incidents.\n• Recovery Time Objective Alignment: Harmonisierung von Datenschutz-Recovery-Anforderungen mit BCM-Wiederherstellungszielen und Geschäftskontinuitätsplänen.\n• Stakeholder Communication Synchronization: Koordinierte Kommunikationsstrategien zwischen Datenschutz-, BCM- und Krisenkommunikations-Teams.\n\n⚡ Crisis Management Command Structure Integration:\n• Incident Command System (ICS) Integration: Einbindung von Datenschutz-Expertise in etablierte Krisenmanagement-Strukturen und Entscheidungsprozesse.\n• Multi-Crisis Scenario Management: Kompetenzen für Situationen, in denen Datenschutzvorfälle mit anderen Krisen (Cyber-Angriffe, Naturkatastrophen, Pandemien) zeitgleich auftreten.\n• Resource Allocation Coordination: Optimale Verteilung begrenzter Ressourcen zwischen Datenschutz-Incident Response und anderen Krisenbewältigungsaktivitäten.\n• Cross-Functional Team Leadership: Führung gemischter Teams aus Datenschutz-, IT-, Legal- und Business-Experten während komplexer Krisensituationen.\n\n🛡️ Escalation und Decision Authority Frameworks:\n• Dynamic Authority Delegation: Flexible Entscheidungskompetenzen je nach Krisenschwere und verfügbaren Führungskräften.\n• Legal vs. Business Priority Balancing: Systematische Abwägung zwischen datenschutzrechtlichen Anforderungen und geschäftskritischen Kontinuitätsnotwendigkeiten.\n• Emergency Protocol Activation: Klare Kriterien und Verfahren für die Aktivierung von Notfallprotokollen und außergewöhnlichen Maßnahmen.\n• Board-Level Crisis Communication: Professionelle Aufbereitung datenschutzrelevanter Aspekte für strategische Krisenentscheidungen der Unternehmensleitung.\n\n📋 Integrated Planning und Preparedness:\n• Cross-Domain Scenario Planning: Entwicklung integrierter Krisenszenarien, die Datenschutz-, Sicherheits- und Geschäftskontinuitätsaspekte umfassen.\n• Joint Training und Exercise Programs: Planung und Durchführung übergreifender Krisenübungen mit Datenschutz-Komponenten.\n• Unified Crisis Communication Strategies: Entwicklung konsistenter Botschaften über alle Krisenbereiche hinweg.\n• Lessons Learned Integration: Systematische Integration von Datenschutz-Erkenntnissen in übergeordnete Organisationsverbesserungsprozesse."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Welche speziellen Kompetenzen für Incident Management bei Third-Party-Datenschutzvorfällen vermittelt ADVISORI und wie wird die komplexe Lieferanten-Koordination professionell bewältigt?",
        answer: "Third-Party-Datenschutzvorfälle stellen besondere Herausforderungen dar, da sie komplexe vertragliche, rechtliche und operationale Dimensionen umfassen, die über direkte Kontrolle hinausgehen. ADVISORI's Schulungsansatz entwickelt spezialisierte Kompetenzen für das Management von Lieferanten-bedingten Datenschutzvorfällen und die professionelle Koordination in komplexen Vendor-Ökosystemen.\n\n🤝 Vendor Incident Response Coordination:\n• Multi-Vendor Crisis Management: Koordination paralleler Incident Response Aktivitäten bei mehreren betroffenen Lieferanten mit unterschiedlichen Capabilities und Prozessen.\n• Contractual Obligation Enforcement: Professionelle Durchsetzung vertraglicher Datenschutz- und Incident Response Verpflichtungen während akuter Vorfälle.\n• Third-Party Evidence Collection: Methodiken zur Sammlung und Validierung von Incident-Evidenz bei externen Dienstleistern unter Wahrung eigener rechtlicher Interessen.\n• Vendor Performance Assessment: Systematische Bewertung der Vendor-Performance während Incidents als Basis für zukünftige Lieferantenentscheidungen.\n\n⚖️ Legal und Contractual Complexity Management:\n• Liability Distribution Analysis: Komplexe Haftungsverteilung zwischen Auftraggeber, Auftragsverarbeiter und Sub-Verarbeitern bei Datenschutzvorfällen.\n• Notification Responsibility Clarification: Klärung der Meldeverantwortlichkeiten zwischen verschiedenen Parteien gemäß DSGVO Art. 33 und vertraglichen Vereinbarungen.\n• Cross-Border Vendor Jurisdiction: Management von Incidents bei Lieferanten in verschiedenen Rechtssystemen mit unterschiedlichen Datenschutzanforderungen.\n• Insurance Coordination: Koordination von Cyber-Versicherungsansprüchen zwischen verschiedenen Versicherungen von Auftraggeber und Lieferanten.\n\n🔍 Due Diligence und Vendor Risk Assessment:\n• Incident Response Capability Assessment: Systematische Bewertung der Incident Management Fähigkeiten von Lieferanten vor und nach Vorfällen.\n• Supply Chain Risk Mapping: Identifikation und Bewertung von Datenschutzrisiken in komplexen Lieferantenbeziehungen und Sub-Vendor-Strukturen.\n• Vendor Maturity Evaluation: Bewertung der Datenschutz-Maturity von Lieferanten basierend auf deren Incident Response Performance.\n• Continuous Monitoring Integration: Etablierung kontinuierlicher Überwachung der Vendor-Compliance und Früherkennung potenzieller Risiken.\n\n🚀 Strategic Vendor Relationship Management:\n• Post-Incident Relationship Optimization: Strategische Neugestaltung von Lieferantenbeziehungen basierend auf Incident-Erkenntnissen und Performance.\n• Vendor Development Programs: Aufbau von Programmen zur Verbesserung der Datenschutz-Capabilities kritischer Lieferanten.\n• Alternative Vendor Strategy: Entwicklung von Backup- und Alternative-Vendor-Strategien für kritische Datenverarbeitungsaktivitäten.\n• Ecosystem Resilience Building: Aufbau resilienter Lieferantenökosysteme, die auch bei Vendor-Ausfällen Datenschutz-Compliance gewährleisten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Wie adressiert ADVISORI's Schulung die Herausforderungen bei Datenschutzvorfällen im Kontext von Mergers & Acquisitions und organisationalen Transformationen und welche Change Management Aspekte werden berücksichtigt?",
        answer: "Mergers & Acquisitions und organisationale Transformationen schaffen einzigartige Risikoprofile für Datenschutzvorfälle, da sie temporäre Schwachstellen, Integrationskomplexitäten und veränderte Verantwortlichkeiten mit sich bringen. ADVISORI's Schulungsansatz entwickelt spezialisierte Kompetenzen für Incident Management in dynamischen Organisationsumgebungen und während struktureller Veränderungsprozesse.\n\n🔄 M&A Integration und Datenschutz-Incident Risks:\n• Due Diligence Data Breach Assessment: Systematische Bewertung von Datenschutzrisiken und vergangenen Incidents während M&A Due Diligence Prozessen.\n• Integration Phase Vulnerability Management: Identifikation und Management erhöhter Datenschutzrisiken während der technischen und organisatorischen Integration.\n• Legacy System Incident Response: Spezielle Herausforderungen bei Incidents in veralteten Systemen von akquirierten Unternehmen mit unzureichender Dokumentation.\n• Cultural Integration Challenges: Management von Incident Response in Organisationen mit unterschiedlichen Datenschutzkulturen und -praktiken.\n\n📊 Governance Transition und Responsibility Mapping:\n• Transitional Authority Structures: Etablierung klarer Incident Response Verantwortlichkeiten während Übergangsperioden mit sich verändernden Organisationsstrukturen.\n• Data Controller/Processor Redefinition: Management von Datenschutzvorfällen bei sich ändernden Controller/Processor-Verhältnissen während Unternehmenstransaktionen.\n• Cross-Entity Incident Coordination: Koordination von Incident Response zwischen noch nicht vollständig integrierten Organisationseinheiten.\n• Regulatory Notification Complexity: Navigation komplexer Meldepflichten bei grenzüberschreitenden Transaktionen mit mehreren Aufsichtsbehörden.\n\n🛠️ Technical Integration und System Consolidation:\n• System Migration Incident Prevention: Präventive Maßnahmen und Incident Response Planung für Datenmigrations- und Systemkonsolidierungsprojekte.\n• Parallel System Operations: Management von Datenschutzvorfällen bei parallelem Betrieb alter und neuer Systeme während Übergangsperioden.\n• Data Deduplication Incidents: Spezielle Herausforderungen bei Datenschutzvorfällen während Deduplizierungs- und Datenbereinigungsprozessen.\n• Identity and Access Management Transition: Incident Response bei komplexen IAM-Integrationen und temporären Zugriffskonstruktionen.\n\n🎯 Change Management und Organizational Resilience:\n• Communication Strategy Alignment: Koordination von Incident Communication mit übergeordneten Change Communication Strategien.\n• Employee Training Acceleration: Beschleunigte Schulungsprogramme für Incident Response in sich schnell verändernden Organisationen.\n• Cultural Due Diligence Integration: Integration von Datenschutz-Kulturaspekten in Change Management und Kulturintegrationsprogramme.\n• Resilience Building during Transformation: Aufbau und Erhaltung von Incident Response Capabilities während organisationaler Umbrüche."
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
    console.log('✅ FAQs batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
