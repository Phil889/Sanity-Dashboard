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
    console.log('Updating IT-Grundschutz BSI page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'it-grundschutz-bsi' })
    
    if (!existingDoc) {
      throw new Error('Document "it-grundschutz-bsi" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie unterstützt ADVISORI die C-Suite bei der Integration von IT-Grundschutz in Merger & Acquisition-Prozesse und Post-Merger-Integration?",
        answer: "Merger & Acquisitions (M&A) bringen komplexe IT-Sicherheitsherausforderungen mit sich, die erhebliche Auswirkungen auf den Transaktionswert und die Integration haben können. ADVISORI positioniert IT-Grundschutz als kritischen Erfolgsfaktor in M&A-Prozessen und unterstützt die C-Suite dabei, Sicherheitsrisiken zu identifizieren, zu bewerten und zu mitigieren.\n\n🔍 IT-Grundschutz in M&A Due Diligence:\n• Security Risk Assessment: Systematische Bewertung der IT-Grundschutz-Konformität von Zielunternehmen zur Identifikation versteckter Risiken und Kosten.\n• Cyber Risk Quantification: Quantifizierung potenzieller Cyber-Risiken und deren Auswirkungen auf die Unternehmensbewertung und Transaktionsstruktur.\n• Compliance Gap Analysis: Detaillierte Analyse von Compliance-Lücken, die Post-Merger-Investitionen und regulatorische Risiken verursachen könnten.\n• Integration Complexity Assessment: Bewertung der Komplexität und Kosten für die Harmonisierung unterschiedlicher IT-Grundschutz-Standards.\n\n🤝 ADVISORI's M&A Security Integration Framework:\n• Pre-Merger Security Alignment: Entwicklung von Strategien zur Angleichung von IT-Grundschutz-Standards vor dem Closing.\n• Day-One Readiness: Sicherstellung kritischer Sicherheitsfunktionen ab dem ersten Tag der Integration.\n• Phased Integration Planning: Strukturierte Roadmap für die schrittweise Harmonisierung von IT-Grundschutz-Architekturen.\n• Cultural Integration: Management kultureller Unterschiede in Sicherheitspraktiken und -bewusstsein zwischen den Organisationen.\n\n⚡ Accelerated Value Realization:\n• Synergy Protection: Schutz geplanter Synergien durch robuste IT-Grundschutz-Integration ohne Geschäftsunterbrechungen.\n• Risk-Adjusted Valuation: Unterstützung bei der Anpassung von Bewertungsmodellen basierend auf identifizierten IT-Sicherheitsrisiken.\n• Post-Merger Optimization: Identifikation von Optimierungsmöglichkeiten durch Konsolidierung und Standardisierung von Sicherheitsfunktionen.\n• Stakeholder Communication: Transparente Kommunikation von Integrationsplänen und Risikomitigationsstrategien an alle Stakeholder."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche strategischen Überlegungen empfiehlt ADVISORI der C-Suite für die Entwicklung einer zukunftsfähigen IT-Grundschutz-Organisation?",
        answer: "Die Entwicklung einer zukunftsfähigen IT-Grundschutz-Organisation erfordert strategische Weitsicht, die über aktuelle Compliance-Anforderungen hinausgeht. ADVISORI unterstützt C-Level-Führungskräfte dabei, Sicherheitsorganisationen zu schaffen, die nicht nur heutige Risiken bewältigen, sondern auch als strategische Business Enabler für zukünftiges Wachstum fungieren.\n\n🏗️ Future-Ready Security Organization Design:\n• Adaptive Organizational Structures: Entwicklung flexibler Organisationsstrukturen, die sich schnell an verändernde Bedrohungslagen und Geschäftsanforderungen anpassen können.\n• Skills and Competency Framework: Definition zukunftsorientierter Kompetenzprofile für IT-Grundschutz-Rollen mit Fokus auf strategische und technische Fähigkeiten.\n• Center of Excellence Establishment: Aufbau von Kompetenzzentren für IT-Grundschutz, die Best Practices entwickeln und organisationsweit verbreiten.\n• Cross-Functional Integration: Etablierung enger Zusammenarbeit zwischen Sicherheit, Business und IT für ganzheitliche Risikobetrachtung.\n\n🚀 ADVISORI's Organizational Transformation Approach:\n• Talent Development Strategy: Entwicklung umfassender Programme zur Weiterbildung und Retention von IT-Grundschutz-Experten.\n• Leadership Development: Aufbau von Führungskompetenzen in der Sicherheitsorganisation für effektive C-Level-Kommunikation.\n• Technology Integration: Strategische Integration neuer Technologien (AI, Automation) in IT-Grundschutz-Prozesse für Effizienzsteigerung.\n• Performance Management: Etablierung leistungsorientierter Managementsysteme mit klaren Zielen und Incentives.\n\n🎯 Strategic Organizational Capabilities:\n• Innovation Mindset: Förderung einer Innovationskultur, die Sicherheit als Enabler für neue Geschäftsmöglichkeiten betrachtet.\n• Continuous Learning: Implementierung kontinuierlicher Lernprogramme zur Anpassung an neue Bedrohungen und Technologien.\n• External Partnership Management: Aufbau strategischer Partnerschaften mit Technologieanbietern, Beratungsunternehmen und Forschungseinrichtungen.\n• Crisis Leadership: Entwicklung von Führungskompetenzen für effektives Management von Sicherheitskrisen und deren Kommunikation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie positioniert ADVISORI IT-Grundschutz als strategischen Hebel für ESG-Compliance und nachhaltige Unternehmensführung?",
        answer: "Environmental, Social und Governance (ESG) Kriterien gewinnen zunehmend an Bedeutung für Investoren und Stakeholder. ADVISORI zeigt auf, wie IT-Grundschutz als integraler Bestandteil der ESG-Strategie positioniert werden kann und dabei sowohl Compliance-Anforderungen erfüllt als auch nachhaltigen Unternehmenswert schafft.\n\n🌱 IT-Grundschutz als ESG-Enabler:\n• Governance Excellence: IT-Grundschutz-Frameworks als Demonstration robuster Corporate Governance und Risikomanagement-Praktiken.\n• Social Responsibility: Schutz von Stakeholder-Daten und -Interessen durch systematische IT-Sicherheitsmaßnahmen als Ausdruck sozialer Verantwortung.\n• Environmental Impact: Optimierung von IT-Grundschutz-Maßnahmen für Energieeffizienz und Reduktion des ökologischen Fußabdrucks.\n• Sustainable Operations: Integration von Nachhaltigkeitsprinzipien in IT-Grundschutz-Strategien für langfristige Wertschöpfung.\n\n📊 ADVISORI's ESG-Integration Strategy:\n• ESG Reporting Integration: Einbindung von IT-Grundschutz-Metriken in ESG-Berichterstattung für erhöhte Transparenz und Accountability.\n• Stakeholder Value Creation: Demonstration, wie IT-Grundschutz-Investitionen zu nachhaltiger Wertschöpfung für alle Stakeholder beitragen.\n• Regulatory Alignment: Sicherstellung, dass IT-Grundschutz-Praktiken mit emerging ESG-Regulierungen und -Standards harmonieren.\n• Impact Measurement: Entwicklung von Metriken zur Messung des ESG-Impacts von IT-Grundschutz-Initiativen.\n\n🏆 Competitive ESG Advantage:\n• Investor Attraction: Nutzung überlegener IT-Grundschutz-Praktiken als Differenzierungsmerkmal für ESG-bewusste Investoren.\n• Brand Protection: Robuste IT-Sicherheit als Schutz für Unternehmensreputation und Brand Value in der digitalen Ära.\n• Talent Attraction: Positionierung als verantwortungsvoller Arbeitgeber durch demonstrierte Datenschutz- und Sicherheitsexzellenz.\n• Market Leadership: Etablierung als Branchenführer in nachhaltiger und verantwortungsvoller Technologienutzung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Welche Rolle spielt ADVISORI bei der Entwicklung einer IT-Grundschutz-Strategie für dezentrale und hybride Arbeitsmodelle?",
        answer: "Die Transformation zu hybriden und dezentralen Arbeitsmodellen stellt traditionelle IT-Grundschutz-Ansätze vor neue Herausforderungen. ADVISORI entwickelt adaptive Sicherheitsstrategien, die IT-Grundschutz-Prinzipien für moderne, verteilte Arbeitsumgebungen neu interpretieren und dabei sowohl Sicherheit als auch Flexibilität gewährleisten.\n\n🏠 Hybrid Work IT-Grundschutz Framework:\n• Zero Trust Architecture: Implementierung von Zero Trust-Prinzipien basierend auf IT-Grundschutz-Bausteinen für sichere Remote-Arbeit.\n• Endpoint Security Management: Umfassende Absicherung aller Endgeräte unabhängig vom Standort nach IT-Grundschutz-Standards.\n• Identity and Access Management: Robuste Identitäts- und Zugriffskontrollen für dezentrale Arbeitsplätze mit mehrstufiger Authentifizierung.\n• Data Protection in Transit: Sichere Datenübertragung und -speicherung für hybride Arbeitsumgebungen.\n\n🌐 ADVISORI's Distributed Security Strategy:\n• Cloud-Native Security: Anpassung von IT-Grundschutz-Bausteinen für Cloud-first Arbeitsumgebungen und SaaS-Anwendungen.\n• Continuous Monitoring: Implementierung kontinuierlicher Überwachung für verteilte IT-Infrastrukturen mit zentraler Sichtbarkeit.\n• Employee Security Enablement: Entwicklung von Sicherheitsschulungen und -tools, die Mitarbeiter in dezentralen Umgebungen unterstützen.\n• Incident Response Adaptation: Anpassung von Incident Response-Prozessen für hybride Arbeitsumgebungen mit verteilten Teams.\n\n⚡ Agile Security Operations:\n• Dynamic Risk Assessment: Kontinuierliche Bewertung sich ändernder Risikoprofile in hybriden Arbeitsumgebungen.\n• Automated Compliance: Automatisierung von Compliance-Überwachung und -Berichterstattung für dezentrale IT-Landschaften.\n• Flexible Security Policies: Entwicklung adaptiver Sicherheitsrichtlinien, die verschiedene Arbeitsmodelle und -umgebungen berücksichtigen.\n• Performance Optimization: Balance zwischen Sicherheit und Produktivität für optimale Mitarbeitererfahrung in hybriden Umgebungen."
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
