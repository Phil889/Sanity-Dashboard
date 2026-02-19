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
    console.log('Updating CIS Controls page with C-Level FAQs batch 5 (German)...')
    
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
        _key: generateKey('faq', 17),
        question: "Wie entwickelt ADVISORI nachhaltige CIS Controls-Governance-Strukturen, die langfristige Security-Excellence und kontinuierliche Verbesserung gewährleisten?",
        answer: "Nachhaltige Cybersecurity erfordert mehr als einmalige Implementation - sie braucht systematische Governance-Strukturen, die kontinuierliche Exzellenz, adaptive Verbesserung und langfristige Wertsteigerung sicherstellen. ADVISORI entwickelt Self-Sustaining Security-Frameworks, die organisationale Reife und evolutionäre Anpassungsfähigkeit fördern.\n\n🔄 Self-Sustaining Security Governance:\n• Continuous Improvement Culture: Etablierung einer Kultur kontinuierlicher Security-Verbesserung mit systematischen Feedback-Loops.\n• Automated Governance: Intelligente Automatisierung von Governance-Prozessen für Effizienz und Konsistenz.\n• Performance-Based Evolution: Datengetriebene Evolution der CIS Controls basierend auf Performance-Metriken und Threat-Intelligence.\n• Stakeholder Integration: Systematische Integration aller Stakeholder in kontinuierliche Governance-Prozesse.\n\n📊 Maturity-Driven Development:\n• Security Maturity Assessment: Regelmäßige Bewertung der Security-Reife mit klaren Entwicklungspfaden.\n• Capability Building: Systematischer Aufbau interner Capabilities für langfristige Security-Autonomie.\n• Knowledge Management: Comprehensive Knowledge-Management-Systeme für organisationales Security-Lernen.\n• Innovation Integration: Systematische Integration neuer Security-Technologien und -Methoden.\n\n⚡ Adaptive Governance Framework:\n• Dynamic Risk Assessment: Kontinuierliche Anpassung der Governance an sich ändernde Risikolandschaften.\n• Agile Policy Management: Flexible Policy-Frameworks, die schnelle Anpassung an neue Anforderungen ermöglichen.\n• Cross-Functional Integration: Integration von Security-Governance in alle Geschäftsprozesse und -entscheidungen.\n• External Intelligence: Systematische Integration externer Threat-Intelligence und Best-Practices.\n\n🎯 Long-Term Value Creation:\n• Strategic Planning Integration: Integration von Security-Governance in langfristige strategische Planungsprozesse.\n• ROI Optimization: Kontinuierliche Optimierung des Security-ROI durch datengestützte Entscheidungsfindung.\n• Competitive Advantage: Transformation von Security-Governance in nachhaltigen Wettbewerbsvorteil.\n• Legacy Protection: Schutz und Evolution bestehender Investitionen durch adaptive Governance.\n\n🛡️ ADVISORI's Sustainable Excellence Approach:\n• Governance Design Thinking: Human-centered Design-Ansätze für nachhaltige Security-Governance.\n• Change Resilience: Aufbau von Governance-Strukturen, die organisatorischen Wandel überdauern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Wie adressiert ADVISORI die Herausforderungen der CIS Controls-Implementation in multinationalen Organisationen mit verschiedenen regulatorischen Anforderungen?",
        answer: "Multinationale Organisationen stehen vor der komplexen Herausforderung, einheitliche Security-Standards über verschiedene Jurisdiktionen, Kulturen und regulatorische Umgebungen hinweg zu implementieren. ADVISORI entwickelt Global-Local-Balance-Strategien, die universelle CIS Controls-Excellence mit regionalen Compliance-Anforderungen harmonisieren.\n\n🌍 Global Harmonization mit Local Compliance:\n• Unified Global Framework: Entwicklung einheitlicher CIS Controls-Frameworks mit lokalen Anpassungsoptionen.\n• Regulatory Mapping: Systematische Zuordnung lokaler Regulierungen zu globalen CIS Controls-Strukturen.\n• Cultural Adaptation: Anpassung von Security-Policies und -Prozessen an lokale Geschäftskulturen.\n• Cross-Border Data Protection: Spezielle Frameworks für internationale Datenübertragung und -schutz.\n\n📋 Multi-Jurisdictional Compliance Excellence:\n• Regulatory Intelligence Network: Globales Netzwerk für kontinuierliche Überwachung sich ändernder Regulierungen.\n• Compliance Consolidation: Konsolidierung verschiedener Compliance-Anforderungen in einheitliche Control-Frameworks.\n• Audit Coordination: Koordination von Audits über verschiedene Jurisdiktionen für Effizienz und Konsistenz.\n• Legal Risk Management: Systematisches Management rechtlicher Risiken bei grenzüberschreitenden Security-Implementierungen.\n\n⚡ Operational Excellence über Grenzen hinweg:\n• Standardized Processes: Entwicklung standardisierter Prozesse, die lokale Variationen berücksichtigen.\n• Global Incident Response: Einheitliche Incident-Response-Capabilities über alle Standorte hinweg.\n• Cross-Cultural Training: Kulturspezifische Security-Trainings für verschiedene Regionen.\n• Technology Harmonization: Harmonisierung von Security-Technologien bei Berücksichtigung lokaler Beschränkungen.\n\n🎯 Strategic Global Integration:\n• Center of Excellence: Etablierung globaler Security Centers of Excellence mit regionalen Satelliten.\n• Best Practice Sharing: Systematisches Sharing von Best Practices zwischen verschiedenen Regionen.\n• Global Talent Mobility: Entwicklung globaler Security-Talent-Pools mit grenzüberschreitender Mobilität.\n• Unified Reporting: Einheitliche Security-Reportings für globale C-Suite-Visibility.\n\n🛡️ ADVISORI's Global-Local Balance Framework:\n• Cultural Intelligence: Tiefgreifendes Verständnis verschiedener Geschäftskulturen und deren Security-Implikationen.\n• Regulatory Expertise: Spezialisierte Teams für verschiedene internationale Märkte und Regulierungen.\n• Scalable Implementation: Skalierbare Implementierungsansätze für verschiedene Organisationsgrößen und -komplexitäten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie entwickelt ADVISORI CIS Controls-basierte Cyber Resilience-Strategien für Business Continuity in kritischen Infrastrukturen?",
        answer: "Kritische Infrastrukturen erfordern höchste Cyber Resilience-Standards, da Ausfälle weitreichende gesellschaftliche und wirtschaftliche Auswirkungen haben können. ADVISORI entwickelt Mission-Critical CIS Controls-Implementierungen, die nicht nur Schutz bieten, sondern auch garantierte Business Continuity und schnelle Recovery-Capabilities sicherstellen.\n\n🏗️ Critical Infrastructure Protection Excellence:\n• Mission-Critical Prioritization: Spezielle Priorisierung der CIS Controls basierend auf kritischen Infrastruktur-Anforderungen.\n• Redundancy and Failover: Multi-layered Redundancy-Strategien für kritische Security-Komponenten.\n• Real-Time Monitoring: Kontinuierliche Überwachung kritischer Systeme mit sofortiger Eskalation bei Anomalien.\n• Emergency Response: Spezialisierte Emergency-Response-Protokolle für kritische Infrastruktur-Incidents.\n\n⚡ Ultra-High Availability Security:\n• Zero-Downtime Implementation: Implementation von CIS Controls ohne Beeinträchtigung kritischer Services.\n• Fault-Tolerant Design: Security-Architekturen, die multiple System-Ausfälle verkraften können.\n• Rapid Recovery: Automated Recovery-Systeme für schnellste Wiederherstellung nach Incidents.\n• Service Continuity: Garantierte Service-Kontinuität auch während Security-Incidents.\n\n🛡️ Advanced Threat Protection:\n• State-Actor Defense: Spezielle Schutzmaßnahmen gegen Advanced Persistent Threats (APTs) und Nation-State-Actors.\n• Physical-Cyber Integration: Integration von Physical Security und Cybersecurity für ganzheitlichen Schutz.\n• Supply Chain Hardening: Verstärkter Schutz der gesamten Supply Chain kritischer Infrastrukturen.\n• Insider Threat Mitigation: Advanced Insider-Threat-Detection und -Prevention für kritische Umgebungen.\n\n📊 Regulatory and Compliance Excellence:\n• Critical Infrastructure Regulations: Compliance mit spezifischen Regulierungen für kritische Infrastrukturen (KRITIS, NIS2, etc.).\n• Government Coordination: Koordination mit Behörden und Sicherheitsorganisationen.\n• Incident Reporting: Automatisierte Compliance mit Meldepflichten für kritische Infrastrukturen.\n• Security Clearance Integration: Integration mit Security-Clearance-Anforderungen für sensitive Bereiche.\n\n🎯 Societal Impact Responsibility:\n• Public Safety Integration: Berücksichtigung der gesellschaftlichen Verantwortung bei Security-Entscheidungen.\n• Community Resilience: Beitrag zur gesellschaftlichen Cyber-Resilience durch Security-Excellence.\n• Crisis Communication: Professionelle Krisenkommunikation für öffentliche Stakeholder.\n• Emergency Coordination: Koordination mit Katastrophenschutz und Notfalldiensten.\n\n🛡️ ADVISORI's Critical Infrastructure Excellence:\n• Mission-Critical Expertise: Spezialisierte Expertise für verschiedene kritische Infrastrukturbereiche.\n• 24/7 Support: Rund-um-die-Uhr-Support für kritische Infrastruktur-Kunden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Wie positioniert ADVISORI CIS Controls als strategisches Investment für langfristige Unternehmenswertschöpfung und Stakeholder-Value-Creation?",
        answer: "CIS Controls repräsentieren weit mehr als Compliance-Kosten - sie sind strategische Investitionen in langfristige Wertschöpfung, Stakeholder-Vertrauen und nachhaltige Geschäftsentwicklung. ADVISORI transformiert Security-Ausgaben in messbare Value-Creation für alle Stakeholder-Gruppen.\n\n💼 Shareholder Value Enhancement:\n• Enterprise Value Protection: Schutz und Steigerung des Unternehmenswerts durch robuste Cyber-Resilience.\n• Risk Premium Reduction: Reduzierung von Risk Premiums bei Bewertungen und Finanzierungen.\n• Growth Enablement: Security als Enabler für beschleunigtes und nachhaltiges Wachstum.\n• M&A Value Creation: Enhanced Valuations bei Exit-Strategien durch Security-Excellence.\n\n🤝 Stakeholder Trust und Confidence:\n• Customer Confidence: Stärkung des Kundenvertrauens durch nachweisliche Security-Standards.\n• Partner Ecosystem: Aufbau vertrauensvoller Partner-Ökosysteme durch Security-Leadership.\n• Investor Relations: Transparente Security-Kommunikation für Investor-Confidence.\n• Regulatory Relationships: Positive Beziehungen zu Regulatoren durch proaktive Compliance.\n\n📈 Long-Term Competitive Advantage:\n• Market Differentiation: Security-Excellence als nachhaltiger Differentiator im Markt.\n• Innovation Platform: Security als Plattform für sichere Innovation und neue Geschäftsmodelle.\n• Talent Attraction: Security-forward Organisationen ziehen Top-Talente an.\n• Brand Value Enhancement: Security-Leadership stärkt Markenpositionierung und -wert.\n\n🎯 Sustainable Business Model Evolution:\n• Future-Proof Architecture: Security-Investitionen, die zukünftige Geschäftsmodelle unterstützen.\n• Ecosystem Orchestration: Security als Basis für die Orchestrierung komplexer Business-Ökosysteme.\n• Digital Transformation: Security-enabled Digital Transformation für langfristige Relevanz.\n• ESG Integration: Integration von Cybersecurity in Environmental, Social, and Governance-Strategien.\n\n💡 Innovation und Growth Investment:\n• R&D Security: Schutz von Forschung und Entwicklung als Wachstumsinvestition.\n• IP Protection: Comprehensive Intellectual Property Protection für langfristige Wertschöpfung.\n• Market Expansion: Security-Readiness für internationale Expansion und neue Märkte.\n• Technology Adoption: Sichere Adoption neuer Technologien für Competitive Advantage.\n\n🛡️ ADVISORI's Value Creation Philosophy:\n• Holistic Value Framework: Ganzheitliche Betrachtung aller Stakeholder-Value-Dimensionen.\n• Long-Term Perspective: Fokus auf langfristige Wertschöpfung statt kurzfristige Kostenoptimierung.\n• Measurable Impact: Systematische Messung und Kommunikation von Value-Creation-Effekten."
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
    console.log('✅ C-Level FAQs batch 5 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
