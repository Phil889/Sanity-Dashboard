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
    console.log('Updating NIST Cybersecurity Framework page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-nist-cybersecurity-framework' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-nist-cybersecurity-framework" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie unterstützt ADVISORI bei der Integration von Third-Party Risk Management in die NIST Framework-Implementierung und Supply Chain Security?",
        answer: "In vernetzten Geschäftsumgebungen ist die Cybersicherheit einer Organisation nur so stark wie das schwächste Glied in ihrer Supply Chain. Third-Party Risk Management wird zu einem kritischen Erfolgsfaktor für umfassende Cybersecurity. ADVISORI entwickelt integrierte Ansätze, die NIST Framework-Prinzipien auf die gesamte Lieferkette ausweiten und dabei komplexe Partnerschaftsstrukturen und Abhängigkeiten berücksichtigen.\n\n🔗 Supply Chain Cybersecurity-Herausforderungen:\n• Vendor Assessment: Systematische Bewertung der Cybersecurity-Reife von Lieferanten, Dienstleistern und Geschäftspartnern.\n• Contractual Security: Integration von NIST-konformen Sicherheitsanforderungen in Verträge und Service Level Agreements.\n• Continuous Monitoring: Überwachung der Sicherheitslage von Drittanbietern über die gesamte Vertragslaufzeit.\n• Incident Coordination: Koordination von Incident Response-Aktivitäten über organisatorische Grenzen hinweg.\n\n🛡️ ADVISORI's Third-Party Risk Integration:\n• Vendor Security Framework: Entwicklung standardisierter Bewertungskriterien und Due Diligence-Prozesse basierend auf NIST-Prinzipien.\n• Supply Chain Mapping: Visualisierung und Risikobewertung komplexer Lieferantennetzwerke und kritischer Abhängigkeiten.\n• Collaborative Security Programs: Design von gemeinsamen Sicherheitsinitiativen mit strategischen Partnern für mutual benefit.\n• Breach Notification Frameworks: Etablierung klarer Kommunikations- und Eskalationswege für supply chain-bezogene Sicherheitsvorfälle."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Strategien verwendet ADVISORI für die NIST Framework-Implementierung in M&A-Szenarien und Post-Merger Integration?",
        answer: "Mergers & Acquisitions schaffen einzigartige Cybersecurity-Herausforderungen, da verschiedene IT-Kulturen, Sicherheitsstandards und technische Infrastrukturen integriert werden müssen. Die NIST Framework-Implementierung in M&A-Kontexten erfordert sensible Balance zwischen Due Diligence, Integration und kultureller Harmonisierung. ADVISORI verfügt über spezialisierte Expertise für Cybersecurity in Transaktionskontexten.\n\n🤝 M&A Cybersecurity-Komplexitäten:\n• Due Diligence: Umfassende Cybersecurity-Bewertung von Akquisitionszielen ohne operative Disruption.\n• Cultural Integration: Harmonisierung verschiedener Sicherheitskulturen und -praktiken zwischen fusionierten Organisationen.\n• Technical Consolidation: Integration verschiedener IT-Systeme und Sicherheitsarchitekturen unter einheitlichen NIST-Standards.\n• Regulatory Harmonization: Alignment verschiedener Compliance-Anforderungen und regulatorischer Verpflichtungen.\n\n⚡ ADVISORI's M&A Cybersecurity-Expertise:\n• Pre-Merger Assessment: Strukturierte Cybersecurity Due Diligence-Frameworks, die Risiken und Integrationscomplexität bewerten.\n• Integration Roadmapping: Entwicklung phasenweiser Integrationsstrategien, die Business Continuity während der Transition gewährleisten.\n• Unified Framework Design: Schaffung harmonisierter NIST-Implementierungen, die Best Practices beider Organisationen integrieren.\n• Change Management: Spezialisierte Ansätze für Cybersecurity-Kultur-Integration und Mitarbeiter-Alignment in Post-Merger-Umgebungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie gewährleistet ADVISORI die Skalierbarkeit der NIST Framework-Implementierung für wachsende Unternehmen und internationale Expansion?",
        answer: "Wachsende Unternehmen stehen vor der Herausforderung, Cybersecurity-Frameworks zu implementieren, die sowohl aktuelle Bedürfnisse erfüllen als auch mit zukünftigem Wachstum skalieren können. Internationale Expansion fügt zusätzliche Komplexitätsebenen hinzu, einschließlich verschiedener regulatorischer Landschaften und kultureller Kontexte. ADVISORI entwickelt skalierbare NIST-Implementierungen, die organisches Wachstum und geografische Expansion unterstützen.\n\n📈 Skalierbarkeits-Herausforderungen für wachsende Unternehmen:\n• Architecture Flexibility: Design von Sicherheitsarchitekturen, die sowohl aktuelle Anforderungen erfüllen als auch zukünftige Expansion ermöglichen.\n• Resource Scalability: Entwicklung von Sicherheitsprogrammen, die effizient mit Unternehmenswachstum und Ressourcenerweiterung skalieren.\n• Geographic Complexity: Anpassung an verschiedene regulatorische Anforderungen und kulturelle Kontexte bei internationaler Expansion.\n• Technology Evolution: Gewährleistung der Framework-Relevanz bei sich entwickelnden Technologie-Stacks und Business-Modellen.\n\n🌍 ADVISORI's Growth-Enabling Framework Design:\n• Modular Architecture: Aufbau modularer NIST-Implementierungen, die inkrementell erweitert und an neue Geschäftsbereiche angepasst werden können.\n• Federated Security Model: Design von verteilten Sicherheitsstrukturen, die lokale Autonomie mit globaler Konsistenz balancieren.\n• Scalable Automation: Implementierung automatisierter Sicherheitsprozesse, die effizienz-optimiert mit Unternehmensgröße wachsen.\n• Cultural Adaptation Framework: Entwicklung kulturell sensitiver Ansätze für NIST-Implementierung in verschiedenen geografischen Märkten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche spezialisierten Ansätze verwendet ADVISORI für NIST Framework-Implementierung in hochregulierten Branchen wie Healthcare und Finanzdienstleistungen?",
        answer: "Hochregulierte Branchen wie Healthcare und Finanzdienstleistungen stehen vor einzigartigen Herausforderungen bei der Cybersecurity-Implementierung. Diese Sektoren müssen nicht nur NIST-Standards erfüllen, sondern auch branchenspezifische Regulierungen wie HIPAA, PCI DSS, oder Solvency II navigieren. ADVISORI verfügt über tiefgreifende Sektorexpertise für die harmonisierte Implementierung dieser komplexen Anforderungslandschaften.\n\n🏥 Branchenspezifische Compliance-Komplexitäten:\n• Regulatory Overlap Management: Navigation überlappender und teilweise konfliktierender Regulierungsanforderungen zwischen NIST und branchenspezifischen Standards.\n• Data Sensitivity: Umgang mit hochsensitiven Daten (PHI, PII, Finanzdaten) unter verschärften Schutz- und Compliance-Anforderungen.\n• Operational Criticality: Implementierung von Cybersecurity-Maßnahmen in Umgebungen, wo Ausfälle Leben bedrohen oder systemische Risiken schaffen können.\n• Audit Intensity: Bewältigung intensiver regulatorischer Prüfungen und kontinuierlicher Compliance-Nachweise.\n\n⚕️ ADVISORI's sektorspezifische NIST-Integration:\n• Unified Compliance Framework: Entwicklung integrierter Compliance-Ansätze, die NIST-Prinzipien mit branchenspezifischen Anforderungen harmonisieren.\n• Risk-Adjusted Implementation: Anpassung von NIST-Kontrollen an branchenspezifische Risikoprofile und regulatorische Prioritäten.\n• Specialized Incident Response: Design von Incident Response-Programmen, die sowohl NIST-Prinzipien als auch branchenspezifische Meldepflichten erfüllen.\n• Regulatory Intelligence: Kontinuierliches Monitoring regulatorischer Entwicklungen und proaktive Anpassung der Framework-Implementierung an evolvierende Compliance-Landschaften."
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
    console.log('✅ C-Level FAQs batch 4 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
