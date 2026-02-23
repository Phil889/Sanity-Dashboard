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
    console.log('Updating CIS Controls page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-cis-controls' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-cis-controls" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum sind CIS Controls für C-Level-Führungskräfte mehr als nur technische Security-Maßnahmen und wie transformiert ADVISORI diese zu strategischen Business-Enablers?",
        answer: "CIS Controls repräsentieren weit mehr als technische Sicherheitsmaßnahmen - sie sind strategische Instrumente zur Risikominimierung, Compliance-Erfüllung und Geschäftsbeschleunigung. Für die C-Suite bedeuten gut implementierte CIS Controls messbare Verbesserungen in Betriebsstabilität, Kundenvertrauen und Marktposition. ADVISORI positioniert CIS Controls als fundamentale Geschäftsinvestitionen mit quantifizierbarem ROI.\n\n🎯 Strategische Business-Imperative für die Führungsebene:\n• Risiko-Return-Optimierung: CIS Controls bieten nachweislich höchste Effizienz bei der Cyberrisikoreduzierung - die ersten 6 Controls verhindern 85% bekannter Angriffe bei minimalen Investitionen.\n• Compliance-Hebel: CIS Controls fungieren als Master-Framework, das Compliance mit multiplen Standards (ISO 27001, NIST, PCI DSS) beschleunigt und Audit-Kosten um bis zu 40% reduziert.\n• Operational Excellence: Implementierung führt zu messbaren Verbesserungen in IT-Stabilität, Incident-Reduktion und Produktivitätssteigerung.\n• Stakeholder-Vertrauen: Nachweisbare Security-Posture stärkt Vertrauen von Investoren, Kunden und Partnern und ermöglicht neue Geschäftschancen.\n\n🛡️ ADVISORI's Business-Value Engineering:\n• ROI-fokussierte Implementierung: Wir priorisieren CIS Controls nach direktem Business-Impact und gewährleisten messbare Ergebnisse in den ersten 90 Tagen.\n• Integration in Geschäftsprozesse: Transformation von Security-Controls in Geschäftsprozess-Optimierungen, die operative Effizienz und Qualität steigern.\n• Executive Dashboards: Entwicklung aussagekräftiger Kennzahlen und Reporting-Systeme, die C-Level-Entscheidungen mit datengestützten Insights unterstützen.\n• Strategic Roadmapping: Alignment der CIS Controls Implementation mit Unternehmensstrategie, Wachstumsplänen und digitalen Transformationsinitiativen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifiziert ADVISORI den Return on Investment von CIS Controls-Implementierungen und welche direkten Auswirkungen haben diese auf Geschäftswachstum und Marktposition?",
        answer: "CIS Controls-Investitionen erzeugen multidimensionale Wertschöpfung, die weit über traditionelle Security-Kostenvermeidung hinausgeht. ADVISORI entwickelt umfassende ROI-Modelle, die sowohl quantitative Kosteneinsparungen als auch qualitative Geschäftswertschöpfung erfassen und messbar machen. Für die C-Suite bedeutet dies transparente Investitionsentscheidungen mit vorhersagbaren Returns.\n\n💰 Direkte ROI-Komponenten und Wertschöpfung:\n• Cyberrisiko-Kostenvermeidung: Reduzierung von Incident-Kosten um 60-80% durch präventive Controls - durchschnittliche Cyberattacken kosten 4,35 Millionen Euro, CIS Controls reduzieren Wahrscheinlichkeit um 85%.\n• Compliance-Effizienz: Beschleunigung von Compliance-Prozessen um 50% und Reduzierung von Audit-Kosten durch systematische Control-Dokumentation.\n• Operational Efficiency: Automatisierung und Standardisierung führen zu 25-30% Reduzierung von IT-Operations-Kosten und Security-Incidents.\n• Business Continuity: Verbesserung der Uptime um 99,5%+ durch robuste Security-Architekturen und präventive Maßnahmen.\n\n📈 Strategische Wachstums- und Marktvorteile:\n• Competitive Differentiation: CIS Controls-Zertifizierung wird zunehmend zu Ausschreibungsvoraussetzung und Differentiator bei Großkunden.\n• Market Access: Manche Branchen und Großkunden erfordern nachweisliche Security-Standards als Markteintrittsbarriere.\n• Premium Pricing: Unternehmen mit nachweislicher Security-Excellence können 10-15% höhere Preise durchsetzen.\n• Partnership Opportunities: Security-Excellence ermöglicht strategische Partnerschaften mit führenden Technologieunternehmen.\n\n🎯 ADVISORI's Value Engineering Approach:\n• Phased ROI Realization: Strukturierung der Implementation für schnelle Wins und kontinuierliche Wertsteigerung.\n• Business Case Development: Entwicklung überzeugender Business Cases mit quantifizierten Vorteilen und klaren Meilensteinen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie adressiert ADVISORI die Herausforderung der CIS Controls Implementation in komplexen, hybriden IT-Umgebungen und welche strategischen Risiken müssen C-Level-Führungskräfte dabei berücksichtigen?",
        answer: "Moderne Unternehmen operieren in hochkomplexen, hybriden IT-Landschaften mit Cloud-, On-Premises- und Edge-Komponenten. Diese Komplexität macht traditionelle Security-Ansätze obsolet und erfordert adaptive, intelligente CIS Controls-Implementierungen. ADVISORI entwickelt Lösungen, die nicht nur mit dieser Komplexität umgehen, sondern diese als strategischen Vorteil nutzen.\n\n🔄 Komplexitäts-Herausforderungen in modernen IT-Umgebungen:\n• Multi-Cloud und Hybrid-Architekturen: CIS Controls müssen nahtlos über verschiedene Cloud-Provider, On-Premises-Systeme und Edge-Devices funktionieren.\n• DevOps und Agile Entwicklung: Security-Controls müssen in schnelle Entwicklungszyklen integriert werden ohne Innovation zu bremsen.\n• IoT und OT-Integration: Industrielle Systeme und IoT-Devices erweitern die Angriffsfläche exponentiell und erfordern spezialisierte Control-Ansätze.\n• Legacy-System-Integration: Bestehende Systeme müssen mit modernen Security-Standards kompatibel gemacht werden.\n\n⚡ Strategische Risiken und C-Level-Überlegungen:\n• Vendor Lock-in Vermeidung: Design von CIS Controls-Implementierungen, die Flexibilität und Vendor-Unabhängigkeit gewährleisten.\n• Innovation vs. Security Balance: Sicherstellung, dass Security-Maßnahmen Geschäftsinnovation ermöglichen statt behindern.\n• Skill Gap Management: Aufbau interner Fähigkeiten parallel zur technischen Implementation.\n• Regulatory Compliance: Gewährleistung, dass CIS Controls Implementation mit sich ändernden regulatorischen Anforderungen Schritt hält.\n\n🛡️ ADVISORI's Adaptive Implementation Framework:\n• Zero Trust Integration: Implementation von CIS Controls innerhalb Zero Trust-Architekturen für maximale Flexibilität und Sicherheit.\n• Automation-First Approach: Maximale Automatisierung zur Reduzierung manueller Fehler und Skalierung mit Unternehmenswachstum.\n• Cloud-Native Design: Entwicklung von Controls, die speziell für moderne Cloud-Architekturen optimiert sind.\n• Continuous Adaptation: Frameworks, die sich automatisch an neue Bedrohungen und Technologien anpassen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI CIS Controls von reaktiven Security-Maßnahmen zu proaktiven Business Intelligence-Systemen und welche strategischen Einblicke ermöglicht dies der C-Suite?",
        answer: "ADVISORI revolutioniert den traditionellen Ansatz zu CIS Controls durch Transformation von passiven Security-Maßnahmen zu aktiven Business Intelligence-Systemen. Diese Evolution ermöglicht der C-Suite nicht nur verbesserte Sicherheit, sondern strategische Geschäftseinblicke, die Wettbewerbsvorteile schaffen und Entscheidungsfindung beschleunigen.\n\n🚀 Von Security Controls zu Business Intelligence:\n• Predictive Analytics: CIS Controls-Daten werden zu Frühwarnsystemen für Geschäftsrisiken, die über traditionelle Cybersecurity hinausgehen.\n• Operational Intelligence: Security-Metriken bieten tiefe Einblicke in Betriebseffizienz, Systemperformance und Optimierungspotentiale.\n• Risk Intelligence: Kontinuierliche Risikobewertung ermöglicht datengestützte strategische Entscheidungen und Ressourcenallokation.\n• Compliance Intelligence: Automatisierte Compliance-Überwachung schafft Transparenz über regulatorische Readiness und potentielle Gaps.\n\n💡 Strategische Business Intelligence für die C-Suite:\n• Real-time Business Health Monitoring: CIS Controls-Dashboards zeigen in Echtzeit den 'Gesundheitszustand' kritischer Geschäftsprozesse.\n• Strategic Planning Support: Security-Metriken informieren strategische Entscheidungen über neue Märkte, Partnerschaften und Investitionen.\n• M&A Due Diligence: Robuste CIS Controls-Implementation beschleunigt Due Diligence-Prozesse und reduziert Transaktionsrisiken.\n• Board Reporting Excellence: Automatisierte, aussagekräftige Reports für Aufsichtsrat und Stakeholder.\n\n📊 Advanced Analytics und Machine Learning Integration:\n• Anomaly Detection: ML-gestützte Erkennung ungewöhnlicher Muster, die auf Geschäftsrisiken oder Opportunities hinweisen.\n• Trend Analysis: Langfristige Trend-Analyse zur Unterstützung strategischer Planung und Budgetierung.\n• Benchmarking Intelligence: Kontinuierlicher Vergleich mit Industry-Standards und Best Practices.\n• Predictive Maintenance: Vorhersage von System- und Prozessausfällen für proaktive Optimierung.\n\n🎯 ADVISORI's Intelligence-First Implementation:\n• Data-Driven Design: Jede CIS Control wird für maximale Datenqualität und Analytics-Readiness optimiert.\n• Executive Dashboards: Entwicklung C-Suite-gerechter Visualisierungen und KPIs."
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
    console.log('✅ C-Level FAQs batch 1 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
