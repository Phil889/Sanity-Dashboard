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
    console.log('Updating NIS2 Sector-Specific Requirements page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-sector-specific-requirements' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-sector-specific-requirements" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie transformiert ADVISORI kritische Sektoren-Compliance für Energie-, Transport- und Finanzinfrastrukturen in strategische Business Assets, die C-Level-Führungskräften nachhaltige Competitive Advantages verschaffen?",
        answer: "Kritische Sektoren unterliegen den strengsten NIS2-Anforderungen und höchsten regulatorischen Auflagen, was gleichzeitig einzigartige Opportunities für strategische Differenzierung schafft. ADVISORI transformiert diese komplexen Compliance-Herausforderungen in messbare Business Assets, die nicht nur regulatorische Excellence sicherstellen, sondern auch Premium-Market-Positioning und Superior-Stakeholder-Confidence ermöglichen.\n\n⚡ Critical Sectors Strategic Excellence-Framework:\n• Premium Infrastructure Resilience: Entwicklung von Ultra-High-Availability-Architekturen, die kritische Geschäftsprozesse selbst bei schwerwiegenden Cyber-Attacken aufrechterhalten und Competitive Advantage schaffen.\n• Regulatory Leadership Positioning: Überlegene Compliance-Kapazitäten, die es ermöglichen, als Sector Leader und Regulatory Benchmark zu fungieren für Enhanced Reputation und Market Authority.\n• Critical Dependencies Mastery: Comprehensive Management von sektorspezifischen kritischen Abhängigkeiten und Interdependenzen für maximale Operational Resilience und Supply Chain-Stability.\n• National Security Alignment: Integration mit nationalen Cybersecurity-Strategien und Critical Infrastructure Protection-Programmen für Strategic Partnership-Opportunities mit Regierungsbehörden.\n\n🛡️ Der ADVISORI Critical Infrastructure Excellence-Ansatz:\n• Zero-Tolerance Risk Management: Ultra-stringente Risikomanagement-Frameworks, die absolute Zuverlässigkeit und Ausfallsicherheit für kritische Services gewährleisten.\n• Advanced Threat Intelligence: Sector-spezifische Advanced Persistent Threat (APT) Detection und Response-Kapazitäten mit State-of-the-Art Cyber Intelligence Integration.\n• Crisis Leadership Preparedness: Comprehensive Crisis Management und Business Continuity-Kapazitäten, die bei Sector-weiten Störungen Leadership-Opportunities schaffen.\n• Innovation Catalyst Role: Nutzung höchster Security Standards als Catalyst für Innovation und Technological Leadership in kritischen Infrastrukturen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "In welcher Weise optimiert ADVISORI wichtige Sektoren-Compliance für maximale Kosten-Effizienz bei gleichzeitiger Gewährleistung vollständiger NIS2-Konformität und operativer Exzellenz?",
        answer: "Wichtige Sektoren erfordern intelligente Balance zwischen regulatorischer Compliance und operativer Effizienz, da sie bedeutende NIS2-Auflagen bei gleichzeitiger Notwendigkeit kostenoptimierter Implementierung erfüllen müssen. ADVISORI entwickelt hochoptimierte Compliance-Strategien, die vollständige Regulatory Adherence bei maximalem ROI und minimalen Betriebsstörungen gewährleisten.\n\n💡 Smart Compliance Optimization für Important Sectors:\n• Risk-Proportionate Security Investment: Präzise kalibrierte Sicherheitsmaßnahmen, die exakt den sektorspezifischen Risikoprofilen entsprechen ohne Over-Engineering oder Under-Protection.\n• Automation-Maximized Compliance: Hochgradig automatisierte Compliance-Prozesse, die manuelle Aufwände minimieren und Human Resources für wertschöpfende Aktivitäten freisetzen.\n• Scalable Architecture Design: Modulare Cybersecurity-Architekturen, die mit Geschäftswachstum skalieren und zukünftige Expansion kostengünstig unterstützen.\n• Multi-Purpose Security Controls: Intelligente Security Controls, die gleichzeitig NIS2-Compliance, operative Effizienz und Business Value Creation unterstützen.\n\n🎯 ADVISORI's Cost-Effective Excellence Strategy:\n• Lean Compliance Implementation: Schlanke Implementierungsansätze, die alle NIS2-Anforderungen erfüllen mit minimalen Ressourcen und optimierten Zeitrahmen.\n• Shared Services Optimization: Entwicklung geteilter Cybersecurity-Services und -Ressourcen für Economies of Scale und Cost Reduction.\n• Performance-Driven KPIs: Messbare Performance-Indikatoren, die gleichzeitig Compliance-Status und Business Performance überwachen für Dual-Value Creation.\n• Future-Proof Investment: Strategische Cybersecurity-Investitionen, die nicht nur aktuelle NIS2-Anforderungen erfüllen, sondern auch zukünftige Regulatory Evolution antizipieren.\n• ROI-Maximized Security: Security-Maßnahmen, die demonstrierbare Returns on Investment durch verbesserte Operational Efficiency, Risk Reduction und Business Enablement generieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie strukturiert ADVISORI sektorübergreifende Information Sharing und Koordination, um C-Level-Führungskräften Ecosystem-Advantages und strategische Intelligence für Competitive Positioning zu verschaffen?",
        answer: "Cross-Sector Information Sharing ist ein Schlüsselelement der NIS2-Richtlinie, das strategische Opportunities für Ecosystem-Intelligence, Collaborative Defense und Competitive Advantage-Entwicklung schafft. ADVISORI positioniert Information Sharing als strategischen Asset, der nicht nur Compliance erfüllt, sondern auch Business Intelligence, Partnership-Opportunities und Market Leadership ermöglicht.\n\n🌐 Strategic Information Sharing Excellence:\n• Threat Intelligence Ecosystem: Aufbau von Premium Threat Intelligence-Netzwerken, die exklusive Cyber-Intelligence und Early Warning-Kapazitäten für proaktive Defense und Strategic Advantage liefern.\n• Cross-Sector Partnership Development: Strategische Allianzen mit Leading Organizations aus komplementären Sektoren für Mutual Defense, Innovation Transfer und Business Development-Synergien.\n• Regulatory Intelligence Networks: Privilegierte Zugänge zu Regulatory Intelligence und Policy Development-Prozessen für Strategic Foresight und Proactive Compliance-Positioning.\n• Competitive Intelligence Integration: Ethical Competitive Intelligence durch Information Sharing-Participation für Market Positioning und Strategic Decision-Making.\n\n🚀 Der ADVISORI Ecosystem Excellence-Ansatz:\n• Premium Community Membership: Zugang zu exklusiven Cybersecurity-Communities und High-Level Information Sharing-Circles für Strategic Networking und Intelligence Access.\n• Innovation Catalyst Networks: Participation in Cross-Sector Innovation-Initiativen für Technology Transfer, R&D Collaboration und Competitive Advantage-Development.\n• Crisis Coordination Leadership: Leadership-Rollen in Sector-übergreifenden Crisis Response und Incident Coordination für Enhanced Reputation und Strategic Influence.\n• Policy Influence Opportunities: Strategic Positioning in Regulatory Consultation-Prozessen für Policy Influence und Industry Leadership-Recognition.\n• Benchmarking Excellence: Access zu Cross-Sector Performance Benchmarks und Best Practice-Intelligence für Continuous Improvement und Competitive Positioning."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie positioniert ADVISORI Sector-Specific Regulatory Intelligence als strategisches Frühwarnsystem für C-Level-Führungskräfte, um regulatorische Entwicklungen proaktiv zu antizipieren und in Competitive Advantages zu transformieren?",
        answer: "Regulatorische Landschaften entwickeln sich kontinuierlich weiter, und proaktive Antizipation von Sector-spezifischen regulatorischen Trends ist entscheidend für Strategic Advantage und Compliance-Excellence. ADVISORI entwickelt innovative Regulatory Intelligence-Systeme, die C-Level-Führungskräften Strategic Foresight und First-Mover-Advantages bei regulatorischen Entwicklungen verschaffen.\n\n📡 Advanced Regulatory Intelligence Excellence:\n• Predictive Regulatory Analytics: KI-gestützte Analyse von regulatorischen Trends, Policy-Signalen und Sector-spezifischen Entwicklungen für präzise Vorhersage zukünftiger Compliance-Anforderungen.\n• Early Adoption Advantage: Strategic Positioning für Early Adoption von emerging Standards und Best Practices für Competitive Advantage und Regulatory Leadership.\n• Policy Influence Strategy: Strategic Engagement in Regulatory Consultation-Prozessen und Policy Development für Industry Influence und Standard-Setting-Participation.\n• Cross-Jurisdiction Intelligence: Global Regulatory Intelligence-Netzwerke für International Expansion-Support und Cross-Border Compliance-Optimization.\n\n🎯 ADVISORI's Strategic Foresight Framework:\n• Regulatory Trend Anticipation: Systematische Monitoring und Analysis von Regulatory Weak Signals und Emerging Trends für Strategic Planning und Proactive Preparation.\n• Compliance Roadmap Evolution: Dynamic Adjustment von Compliance-Roadmaps basierend auf Regulatory Intelligence für Optimal Resource Allocation und Strategic Timing.\n• Innovation Opportunity Identification: Identifikation von Innovation-Opportunities durch Regulatory Gap-Analysis und Future Requirement-Anticipation für Competitive Advantage-Development.\n• Strategic Partnership Intelligence: Intelligence-basierte Identifikation von Strategic Partnership-Opportunities mit Regulatory Authorities, Standard-Setting Bodies und Industry Leaders.\n• Risk-Opportunity Matrix: Sophisticated Risk-Opportunity-Bewertung regulatorischer Entwicklungen für Strategic Decision-Making und Portfolio-Optimization.\n• Market Timing Excellence: Optimal Timing von Strategic Initiatives basierend auf Regulatory Development-Zyklen für Maximum Impact und Competitive Advantage."
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
