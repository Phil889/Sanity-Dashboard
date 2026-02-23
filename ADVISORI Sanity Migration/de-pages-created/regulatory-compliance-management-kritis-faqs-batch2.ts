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
    console.log('Updating KRITIS page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'regulatory-compliance-management-kritis' })
    
    if (!existingDoc) {
      throw new Error('Document "regulatory-compliance-management-kritis" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie können wir als KRITIS-Betreiber eine Balance zwischen Cybersecurity-Investitionen und Geschäftsanforderungen finden, ohne die operative Exzellenz zu gefährden?",
        answer: "Die Balance zwischen Cybersecurity-Investitionen und Geschäftsanforderungen ist für KRITIS-Betreiber eine strategische Herausforderung, die innovative Ansätze erfordert. Statt Sicherheit und Geschäftserfolg als konkurrierende Ziele zu betrachten, können intelligente Implementierungsstrategien beide Aspekte synergetisch verstärken und dabei die operative Exzellenz sogar verbessern.\n\n⚖️ Strategische Balancierungsansätze für KRITIS-Betreiber:\n• Risikoproportionale Investitionen: Entwicklung einer risikobasierten Investitionsstrategie, die Schutzmaßnahmen gezielt auf die kritischsten Assets und Prozesse fokussiert, anstatt undifferenzierte Sicherheitslösungen zu implementieren.\n• Business-Security Integration: Gestaltung von Sicherheitsmaßnahmen als integraler Bestandteil der Geschäftsprozesse, wodurch sowohl Compliance als auch operative Effizienz verbessert werden.\n• Automatisierung als Effizienzbooster: Investition in automatisierte Sicherheitslösungen, die menschliche Ressourcen für wertschöpfende Aktivitäten freisetzen und gleichzeitig kontinuierlichen Schutz gewährleisten.\n• Shared Security Services: Entwicklung von Sicherheitsdiensten, die sowohl interne Compliance-Anforderungen erfüllen als auch als externe Dienstleistungen vermarktet werden können.\n\n🎯 Operative Exzellenz durch strategische Sicherheitsintegration:\n• Performance-orientierte Sicherheitsarchitekturen: Design von Sicherheitslösungen, die nicht nur schützen, sondern auch die Systemperformance und Benutzerfreundlichkeit verbessern.\n• Datengetriebene Optimierung: Nutzung von Sicherheitsmonitoring-Daten zur Identifikation und Behebung von operativen Ineffizienzen und Prozessengpässen.\n• Proaktive Wartung: Implementierung von Sicherheitssystemen, die gleichzeitig predictive Maintenance ermöglichen und Ausfallzeiten minimieren.\n• Compliance-Automatisierung: Automatisierung von Compliance-Prozessen zur Reduzierung von manuellen Arbeitslasten und Fehlerrisiken.\n\n🛠️ ADVISORIs ausgewogener Implementierungsansatz:\n• Business-Impact-Bewertung: Systematische Bewertung der Geschäftsauswirkungen jeder Sicherheitsmaßnahme zur Optimierung des Kosten-Nutzen-Verhältnisses.\n• Schrittweise Modernisierung: Entwicklung von Migrationspfaden, die minimale Geschäftsunterbrechungen verursachen und kontinuierliche Wertschöpfung ermöglichen.\n• Change Management Excellence: Implementierung von Change-Management-Programmen, die Mitarbeiterakzeptanz sicherstellen und kulturelle Transformation unterstützen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche Rolle spielt das Management von Cyber-Risiken in der strategischen Unternehmensplanung und wie können wir diese in unsere Governance-Strukturen integrieren?",
        answer: "Cyber-Risikomanagement für KRITIS-Betreiber muss von einer reaktiven IT-Funktion zu einem proaktiven strategischen Steuerungsinstrument transformiert werden, das tief in die Governance-Strukturen und Entscheidungsprozesse des Unternehmens integriert ist. Diese Integration ermöglicht es, Cyber-Risiken nicht nur zu verwalten, sondern als strategische Dimension in alle Geschäftsentscheidungen einzubeziehen.\n\n🎯 Integration von Cyber-Risiken in die strategische Unternehmensplanung:\n• Cyber-Risiko als Geschäftsrisiko: Behandlung von Cyber-Bedrohungen als fundamentale Geschäftsrisiken, die gleichrangig mit Markt-, Kredit- oder operationellen Risiken in der strategischen Planung berücksichtigt werden.\n• Szenariobasierte Strategieentwicklung: Integration von Cyber-Bedrohungsszenarien in die strategische Planung zur Bewertung der Resilienz verschiedener Geschäftsstrategien.\n• Investitionsentscheidungen: Berücksichtigung von Cyber-Risiken bei allen größeren Investitions- und Digitalisierungsentscheidungen als kritischer Bewertungsfaktor.\n• M&A-Integration: Einbeziehung von Cyber-Risikobewertungen in Due-Diligence-Prozesse und Post-Merger-Integration.\n\n🏛️ Governance-Integration für strategisches Cyber-Risikomanagement:\n• Board-Level Oversight: Etablierung von Aufsichtsratskomitees oder -verantwortlichkeiten speziell für Cyber-Risiken mit direkter Berichtslinie zur Geschäftsführung.\n• Executive Cyber Risk Committee: Schaffung von C-Level-Gremien, die Cyber-Risiken regelmäßig bewerten und strategische Entscheidungen bezüglich Risikoappetit und -toleranz treffen.\n• Integrierte Risiko-Frameworks: Entwicklung von Enterprise Risk Management-Systemen, die Cyber-Risiken nahtlos mit anderen Unternehmensrisiken verbinden.\n• Performance-Integration: Einbindung von Cyber-Risiko-KPIs in executive Compensation-Systeme und Leistungsbewertungen.\n\n📊 ADVISORIs strategischer Governance-Ansatz:\n• Cyber Risk Quantification: Entwicklung von Methoden zur Quantifizierung von Cyber-Risiken in geschäftsrelevanten Metriken (finanzielle Auswirkungen, Betriebsunterbrechungen, Reputationsschäden).\n• Dynamic Risk Management: Implementierung von Echtzeit-Risikobewertungssystemen, die kontinuierliche Anpassung der Risikostrategien ermöglichen.\n• Stakeholder Communication: Entwicklung von Kommunikationsframeworks, die komplexe Cyber-Risiken für verschiedene Stakeholder-Gruppen verständlich und actionable machen.\n• Crisis Governance: Etablierung von Krisenmanagement-Strukturen, die im Cyber-Incident-Fall schnelle und koordinierte Entscheidungsfindung ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie können wir unsere KRITIS-Compliance nutzen, um Partnerschaften mit anderen kritischen Infrastrukturen aufzubauen und gemeinsame Resilienz zu schaffen?",
        answer: "KRITIS-Compliance bietet eine einzigartige Gelegenheit zur Entwicklung strategischer Partnerschaften zwischen kritischen Infrastrukturen, die über traditionelle Geschäftsbeziehungen hinausgehen und gemeinsame Resilienz-Ökosysteme schaffen. Diese Kooperationen können nicht nur die Sicherheitsposture aller Beteiligten stärken, sondern auch neue Geschäftsmöglichkeiten eröffnen und die Wettbewerbsposition verbessern.\n\n🤝 Strategische Partnerschaftsmodelle für KRITIS-Betreiber:\n• Sector-übergreifende Security Alliances: Bildung von Sicherheitsallianzen zwischen verschiedenen KRITIS-Sektoren (Energie, Telekommunikation, Finanzen, Transport) zur gemeinsamen Bedrohungsabwehr und Informationsaustausch.\n• Shared Security Infrastructure: Entwicklung gemeinsamer Sicherheitsinfrastrukturen wie Security Operations Centers (SOCs), Threat Intelligence Platforms oder Incident Response Teams.\n• Collaborative Innovation: Gemeinsame Entwicklung und Erprobung innovativer Sicherheitstechnologien und -methoden mit geteilten Kosten und Risiken.\n• Resilience Networks: Aufbau von Netzwerken gegenseitiger Unterstützung für Krisenzeiten, einschließlich Backup-Services und Notfallkapazitäten.\n\n🔗 Operational Synergien durch strategische Kooperationen:\n• Information Sharing: Etablierung strukturierter Threat Intelligence-Austauschprogramme, die allen Partnern Zugang zu erweiterten Bedrohungsinformationen gewähren.\n• Joint Training und Exercises: Durchführung gemeinsamer Cyber-Übungen und Incident Response-Trainings zur Verbesserung der kollektiven Readiness.\n• Supply Chain Security: Koordinierte Ansätze zur Sicherung komplexer, sektorübergreifender Lieferketten gegen Cyber-Bedrohungen.\n• Technology Standardization: Entwicklung gemeinsamer technischer Standards und Protokolle zur Verbesserung der Interoperabilität und Effizienz.\n\n🌐 ADVISORIs Kooperations-Enablement-Ansatz:\n• Partnership Strategy Development: Entwicklung von strategischen Kooperationsframeworks, die regulatorische Compliance mit geschäftlichem Mehrwert verbinden.\n• Governance-Strukturen für Kooperationen: Design von Governance-Modellen für Multi-Stakeholder-Sicherheitskooperationen, die Vertrauen, Transparenz und Effektivität gewährleisten.\n• Legal und Compliance Framework: Entwicklung rechtlicher Rahmenbedingungen für Informationsaustausch und gemeinsame Sicherheitsaktivitäten unter Berücksichtigung von Datenschutz und Wettbewerbsrecht.\n• Value Creation Models: Identifikation und Entwicklung von Wertschöpfungsmodellen, die aus Sicherheitskooperationen neue Geschäftsmöglichkeiten generieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche strategischen Überlegungen sind bei der Auswahl und Implementierung von KRITIS-konformen Technologielösungen entscheidend?",
        answer: "Die Auswahl und Implementierung von KRITIS-konformen Technologielösungen erfordert eine strategische Herangehensweise, die über die reine Compliance-Erfüllung hinausgeht und langfristige Geschäftsziele, technologische Entwicklungen und sich wandelnde Bedrohungslandschaften berücksichtigt. Entscheidungsträger müssen dabei sowohl gegenwärtige Anforderungen als auch zukünftige Flexibilität und Skalierbarkeit im Blick behalten.\n\n🔍 Strategische Evaluationskriterien für KRITIS-Technologien:\n• Future-Proof Architecture: Auswahl von Technologien, die nicht nur aktuelle KRITIS-Anforderungen erfüllen, sondern auch adaptierbar für zukünftige regulatorische Entwicklungen und emerging Threats sind.\n• Business Integration Capability: Bewertung der Fähigkeit von Sicherheitstechnologien, sich nahtlos in bestehende Geschäftsprozesse zu integrieren und diese zu verbessern, anstatt sie zu behindern.\n• Ecosystem Compatibility: Berücksichtigung der Interoperabilität mit bestehenden Systemen und der Fähigkeit zur Integration in breitere digitale Transformation-Initiativen.\n• Total Cost of Ownership: Holistische Kostenbewertung, die Anschaffung, Implementierung, Betrieb, Wartung und End-of-Life-Kosten über den gesamten Lebenszyklus umfasst.\n\n⚡ Implementierungsstrategien für maximale Wertschöpfung:\n• Phased Deployment: Entwicklung von Implementierungsphasen, die kritische Compliance-Anforderungen priorisieren und gleichzeitig Geschäftsunterbrechungen minimieren.\n• Pilot Programs: Durchführung kontrollierter Pilotprojekte zur Validierung von Technologielösungen vor großflächiger Implementierung.\n• Change Management Integration: Koordination der Technologie-Implementierung mit umfassenden Change-Management-Programmen zur Sicherstellung der Benutzerakzeptanz.\n• Performance Monitoring: Etablierung von KPIs und Monitoring-Systemen zur kontinuierlichen Bewertung der Technologie-Performance und des Business Value.\n\n🚀 ADVISORIs strategischer Technologie-Selektionsansatz:\n• Multi-Criteria Decision Analysis: Anwendung strukturierter Bewertungsframeworks, die technische Fähigkeiten, Business Alignment, Kosten und strategische Passung ausbalancieren.\n• Vendor Assessment und Due Diligence: Umfassende Bewertung von Technologieanbietern bezüglich finanzieller Stabilität, Innovationsfähigkeit und langfristiger strategischer Ausrichtung.\n• Technology Roadmap Alignment: Sicherstellung, dass ausgewählte Technologien mit der übergeordneten IT-Strategie und digitalen Transformation-Roadmap des Unternehmens harmonieren.\n• Risk-Adjusted ROI Modeling: Entwicklung von ROI-Modellen, die sowohl direkte Wertbeiträge als auch Risikominderungseffekte quantifizieren und in die Investitionsentscheidung einbeziehen."
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
    console.log('✅ C-Level FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
