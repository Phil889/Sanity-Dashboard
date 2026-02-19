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
    console.log('Updating CIS Controls Kontrolle & Reifegradbewertung page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cis-controls-kontrolle-reifegradbewertung' })
    
    if (!existingDoc) {
      throw new Error('Document "cis-controls-kontrolle-reifegradbewertung" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Welche spezifischen Branchenbenchmarks und Peer-Vergleiche nutzt ADVISORI, um unsere CIS Controls Reifegrad-Performance in den Kontext unserer Wettbewerbsposition zu setzen?",
        answer: "Branchenbenchmarking ist essentiell für die strategische Positionierung der Cybersecurity-Investments und ermöglicht der C-Suite eine fundierte Bewertung der relativen Cyber-Resilience gegenüber Wettbewerbern und regulatorischen Erwartungen. ADVISORI nutzt umfassende Branchendatenbanken und propriäre Benchmarking-Methodiken, um Ihre CIS Controls Reife in den strategischen Kontext Ihrer Branche und Ihrer Wettbewerbsposition zu setzen.\n\n📊 Umfassende Branchenanalytik:\n• Sector-specific Maturity Baselines: Entwicklung branchenspezifischer CIS Controls Reifegrad-Benchmarks basierend auf regulatorischen Anforderungen, Bedrohungslandschaft und Business-Kritikalität (Finanzdienstleistungen, Gesundheitswesen, Energie, Manufacturing).\n• Regulatory Expectations Mapping: Abgleich Ihrer CIS Controls Reife mit spezifischen regulatorischen Erwartungen und Audit-Standards Ihrer Branche (BaFin, FDA, NERC CIP, etc.).\n• Peer Group Analysis: Anonymisierte Vergleiche mit Unternehmen ähnlicher Größe, Komplexität und Risikoexposition in Ihrer Branche.\n• Threat Landscape Contextualization: Bewertung Ihrer CIS Controls Wirksamkeit gegen branchenspezifische Angriffsvektoren und APT-Gruppen.\n\n🎯 Strategische Wettbewerbspositionierung:\n• Cybersecurity Competitive Advantage Assessment: Identifikation von Bereichen, in denen überlegene CIS Controls Reife als Wettbewerbsvorteil genutzt werden kann (Kundenvertrauen, Partnerschaftsfähigkeit, Marktdifferenzierung).\n• Investment Priority Benchmarking: Vergleich Ihrer Cybersecurity-Investitionsprioritäten mit Best-Practice-Unternehmen Ihrer Branche zur Optimierung der Budget-Allokation.\n• Regulatory Leadership Positioning: Bewertung Ihrer Position als Compliance-Leader oder -Follower und strategische Empfehlungen für Thought Leadership.\n• M&A Due Diligence Standards: Benchmarking gegen die Cybersecurity-Erwartungen bei M&A-Transaktionen in Ihrer Branche."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Wie adressiert ADVISORI die spezifischen Herausforderungen der CIS Controls Implementierung in stark regulierten Industrien mit komplexen Legacy-Systemen und Compliance-Anforderungen?",
        answer: "Stark regulierte Industrien stehen vor der einzigartigen Herausforderung, moderne CIS Controls in komplexen, oft jahrzehntealten Legacy-Umgebungen zu implementieren, während gleichzeitig strenge Compliance-Anforderungen und operative Kontinuität gewährleistet werden müssen. ADVISORI hat spezialisierte Methodiken entwickelt, die diese Komplexität systematisch adressieren und pragmatische Lösungswege für C-Level-Entscheidungsträger aufzeigen.\n\n🏭 Legacy-System-Integration und Modernisierung:\n• Legacy Risk Assessment: Systematische Bewertung der Cybersecurity-Risiken veralteter Systeme und Entwicklung risikoadjustierter CIS Controls Implementierungsstrategien.\n• Compensating Controls Framework: Entwicklung alternativer Sicherheitsmaßnahmen für Legacy-Systeme, die moderne CIS Controls nicht nativ unterstützen können.\n• Phased Modernization Roadmap: Strategische Planung der Legacy-System-Modernisierung mit integrierten CIS Controls Upgrades zur Minimierung von Business Disruption.\n• Air-Gap und Network Segmentation Strategies: Spezialisierte Sicherheitsarchitekturen für kritische Legacy-Systeme in regulierten Umgebungen.\n\n⚖️ Compliance-konforme CIS Controls Implementierung:\n• Multi-Regulatory Mapping: Systematische Zuordnung der CIS Controls zu multiplen regulatorischen Anforderungen (FDA 21 CFR Part 11, SOX, PCI DSS, HIPAA) für optimierte Compliance-Effizienz.\n• Audit-Trail und Documentation Standards: Entwicklung umfassender Dokumentationsframeworks, die sowohl CIS Controls Compliance als auch regulatorische Audit-Anforderungen erfüllen.\n• Change Control Integration: Integration der CIS Controls Wartung in bestehende Change Control Processes regulierter Umgebungen.\n• Regulatory Reporting Automation: Automatisierung der Compliance-Berichterstattung basierend auf CIS Controls Monitoring-Daten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Welche konkreten Schritte unternimmt ADVISORI zur Messung und Verbesserung der operativen Effizienz unserer Cybersecurity-Teams durch optimierte CIS Controls Prozesse?",
        answer: "Die Optimierung der operativen Effizienz von Cybersecurity-Teams ist ein kritischer Erfolgsfaktor für nachhaltige CIS Controls Implementierung und direkt relevant für C-Level-Entscheidungen bezüglich Ressourcenallokation und Team-Performance. ADVISORI entwickelt datengetriebene Ansätze zur Messung und systematischen Verbesserung der operativen Cybersecurity-Effizienz durch intelligente CIS Controls Prozessoptimierung.\n\n⚡ Operative Effizienz-Metriken und KPIs:\n• Mean Time to Detection (MTTD) und Response (MTTR): Messung der Wirksamkeit der CIS Controls bei der Beschleunigung von Incident Detection und Response Prozessen.\n• False Positive Reduction Rate: Quantifizierung der Reduzierung von Fehlalarmen durch optimierte CIS Controls Konfiguration und Tuning.\n• Security Operations Center (SOC) Productivity Metrics: Messung der Analysten-Produktivität durch automatisierte CIS Controls und reduzierte manuelle Arbeitsschritte.\n• Threat Hunting Efficiency: Bewertung der Verbesserung proaktiver Threat Hunting Aktivitäten durch bessere CIS Controls Telemetrie und Analytics.\n\n🛠️ Prozessoptimierung und Automatisierung:\n• Security Orchestration, Automation and Response (SOAR) Integration: Automatisierung wiederkehrender CIS Controls Aufgaben zur Freisetzung von Analyst-Kapazitäten für strategische Aktivitäten.\n• Workflow Optimization: Redesign von Cybersecurity-Workflows basierend auf CIS Controls Best Practices zur Minimierung von Reibungsverlusten und Redundanzen.\n• Skills Development und Specialization: Strategische Entwicklung von Team-Kompetenzen entlang der CIS Controls Domänen für verbesserte Expertise und Effizienz.\n• Cross-functional Collaboration Enhancement: Verbesserung der Zusammenarbeit zwischen Cybersecurity, IT Operations und Business Teams durch klare CIS Controls Verantwortlichkeiten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie stellt ADVISORI sicher, dass unsere CIS Controls Reifegradbewertung auch die finanziellen Auswirkungen und den Business Case für Cybersecurity-Investitionen transparent macht?",
        answer: "Die Transformation von Cybersecurity von einem Kostenzentrum zu einem strategischen Business Enabler erfordert eine klare finanzielle Quantifizierung der CIS Controls Wertbeiträge. ADVISORI entwickelt umfassende Financial Impact Assessments, die der C-Suite eine datengetriebene Grundlage für Cybersecurity-Investitionsentscheidungen und ROI-Bewertungen liefern.\n\n💰 Finanzielle Impact-Quantifizierung:\n• Cyber Risk Monetization: Quantifizierung potenzieller finanzieller Verluste durch Cyber-Incidents und Berechnung der Risikoreduktion durch verbesserte CIS Controls Reife.\n• Total Cost of Ownership (TCO) Analysis: Umfassende Kostenanalyse der CIS Controls Implementierung, einschließlich direkter Kosten, indirekter Aufwände und Opportunitätskosten.\n• Return on Security Investment (ROSI): Berechnung des finanziellen Returns durch CIS Controls Investitionen basierend auf Risikoreduktion, Effizienzgewinnen und Compliance-Kosteneinsparungen.\n• Business Value Creation: Identifikation und Quantifizierung zusätzlicher Geschäftswerte durch überlegene Cybersecurity-Posture (Kundenvertrauen, Partnerschaften, neue Märkte).\n\n📈 Business Case Development:\n• Multi-Year Investment Planning: Entwicklung mehrjähriger CIS Controls Investitionsstrategien mit klaren Meilensteinen und ROI-Erwartungen.\n• Budget Optimization Strategies: Identifikation kostenoptimaler CIS Controls Implementierungssequenzen für maximalen Risikoreduktions-Impact pro Investitionseinheit.\n• Stakeholder Value Propositions: Entwicklung zielgruppenspezifischer Business Cases für verschiedene Stakeholder (Board, CFO, Business Units) mit relevanten finanziellen Metriken.\n• Competitive Investment Analysis: Benchmarking der geplanten Cybersecurity-Investitionen gegen Branchenstandards und Wettbewerber-Spending."
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
    console.log('✅ C-Level FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
