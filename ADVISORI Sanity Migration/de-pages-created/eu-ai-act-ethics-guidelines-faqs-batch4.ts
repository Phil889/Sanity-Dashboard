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
    console.log('Updating EU AI Act Ethics Guidelines page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act-ethics-guidelines' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act-ethics-guidelines" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie entwickelt ADVISORI nachhaltige Monitoring- und Audit-Frameworks für EU AI Act Ethik-Compliance und welche kontinuierlichen Verbesserungsstrategien werden für die C-Suite implementiert?",
        answer: "Kontinuierliche Überwachung und systematische Auditierung ethischer KI-Performance sind für C-Level-Führungskräfte essentiell für nachhaltige Compliance und kontinuierliche Wertschöpfung. ADVISORI entwickelt sophisticated Monitoring-Frameworks, die nicht nur regulatorische Anforderungen erfüllen, sondern auch als strategische Intelligence-Systeme für ethische Exzellenz und Business-Optimization fungieren.\n\n📊 Strategic Monitoring Excellence:\n• Real-Time Ethics-Performance-Tracking: Implementierung von Dashboard-Systemen, die ethische KI-Performance in Echtzeit überwachen und C-Level-Entscheidungsträgern actionable Insights für strategische Steuerung liefern.\n• Predictive Compliance-Analytics: Entwicklung von Vorhersagemodellen, die potenzielle Ethik-Risiken frühzeitig identifizieren und proaktive Interventionen ermöglichen bevor Compliance-Verletzungen auftreten.\n• Multi-Stakeholder Audit-Frameworks: Aufbau umfassender Audit-Strukturen, die interne und externe Perspektiven integrieren und dabei Stakeholder-Vertrauen durch transparente Bewertungsprozesse stärken.\n• Continuous Improvement-Mechanisms: Etablierung von systematischen Verbesserungszyklen, die Audit-Erkenntnisse in strategische Optimierungen transformieren und ethische Excellence kontinuierlich steigern.\n\n🔄 Der ADVISORI Continuous-Excellence-Ansatz:\n• Automated Compliance-Reporting: Aufbau automatisierter Reporting-Systeme, die Compliance-Status kontinuierlich dokumentieren und dabei administrative Lasten minimieren ohne Oversight-Qualität zu kompromittieren.\n• Benchmark-Based Performance-Assessment: Entwicklung branchenführender Ethik-Benchmarks, die nicht nur Compliance messen sondern auch Competitive-Positioning und Market-Leadership-Opportunities identifizieren.\n• Risk-Based Audit-Prioritization: Implementierung intelligenter Audit-Priorisierung, die Ressourcen auf höchste Risikobereiche fokussiert und dabei systematische Abdeckung aller ethischen Dimensionen gewährleistet.\n• Strategic Learning-Integration: Transformation von Monitoring- und Audit-Erkenntnissen in strategische Learnings, die zukünftige ethische Innovation und Business-Excellence beschleunigen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche Supplier- und Vendor-Management-Strategien implementiert ADVISORI für EU AI Act Ethik-Compliance in komplexen KI-Ökosystemen und Supply-Chains?",
        answer: "Für C-Level-Führungskräfte stellt das Management ethischer Standards in komplexen KI-Supply-Chains eine kritische Herausforderung dar, die direkte Auswirkungen auf Compliance-Risiken und Reputationsschutz hat. ADVISORI entwickelt comprehensive Vendor-Management-Frameworks, die ethische Excellence durch die gesamte Value-Chain gewährleisten und dabei strategische Partnerships stärken statt belasten.\n\n🤝 Strategic Vendor-Ethics Excellence:\n• Ethical Supply-Chain-Design: Entwicklung von Supply-Chain-Architekturen, die ethische Standards systematisch durch alle Vendor-Beziehungen propagieren und dabei Win-Win-Partnerships für nachhaltige ethische Innovation schaffen.\n• Vendor-Ethics-Assessment-Frameworks: Aufbau comprehensive Assessment-Systeme, die Vendor-Ethics-Performance objektiv bewerten und kontinuierliche Verbesserung durch strukturierte Collaboration fördern.\n• Risk-Based Vendor-Categorization: Implementierung intelligenter Vendor-Klassifizierung, die ethische Oversight-Intensität an Risikopotential und Business-Kritikalität anpasst und dabei Effizienz maximiert.\n• Collaborative Ethics-Innovation: Etablierung von Joint-Innovation-Programmen mit key Vendors zur gemeinsamen Entwicklung ethischer Standards, die Industry-Leadership und Competitive-Advantage schaffen.\n\n🔗 Der ADVISORI Ecosystem-Integration-Ansatz:\n• Contractual Ethics-Integration: Entwicklung rechtlicher Frameworks, die ethische Anforderungen nahtlos in Vendor-Verträge integrieren und dabei Business-Flexibilität aufrechterhalten.\n• Vendor-Ethics-Capability-Building: Aufbau von Programmen zur systematischen Stärkung ethischer Capabilities bei Vendors, die Ecosystem-weite ethische Excellence fördern und Supplier-Loyalität erhöhen.\n• Cross-Vendor Ethics-Harmonization: Implementierung von Standards, die ethische Konsistenz über verschiedene Vendors hinweg gewährleisten und dabei Komplexitäts-Management optimieren.\n• Strategic Vendor-Partnership-Evolution: Transformation traditioneller Vendor-Beziehungen in strategische Ethics-Partnerships, die gemeinsame Wertschöpfung durch ethische Innovation ermöglichen und langfristige Competitive-Advantages schaffen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie adressiert ADVISORI Stakeholder-Management und Kommunikation im Kontext der EU AI Act Ethik-Richtlinien für maximale C-Suite-Reputation und Vertrauensbildung?",
        answer: "Effektives Stakeholder-Management im Kontext ethischer KI ist für C-Level-Führungskräfte entscheidend für Reputationsmanagement und nachhaltiges Geschäftswachstum. ADVISORI entwickelt sophisticated Communication-Frameworks, die ethische Excellence als strategischen Reputations-Asset etablieren und dabei verschiedene Stakeholder-Gruppen optimal ansprechen und für langfristige Business-Success aktivieren.\n\n🎯 Strategic Stakeholder-Excellence:\n• Multi-Stakeholder Communication-Strategy: Entwicklung differenzierter Kommunikationsansätze, die ethische Botschaften für verschiedene Zielgruppen (Kunden, Investoren, Regulatoren, Öffentlichkeit) optimal tailoring und dabei Authentizität aufrechterhalten.\n• Proactive Reputation-Management: Aufbau von Kommunikationsstrategien, die ethische Leadership proaktiv kommunizieren und dabei Crisis-Prevention durch transparente, vertrauensvolle Stakeholder-Beziehungen gewährleisten.\n• Evidence-Based Trust-Building: Implementierung von Data-driven Communication-Approaches, die ethische Performance durch konkrete Metriken und Erfolgsgeschichten demonstrieren und Stakeholder-Confidence stärken.\n• Thought-Leadership-Positioning: Etablierung von C-Level-Executives als Ethics-Thought-Leaders durch strategische Content-Entwicklung und Stakeholder-Engagement, die Industry-Influence und Market-Positioning verstärken.\n\n💬 Der ADVISORI Communication-Excellence-Ansatz:\n• Authentic Ethics-Storytelling: Entwicklung authentischer Narratives, die ethische Transformation als Business-Journey präsentieren und dabei Stakeholder emotional und rational ansprechen für nachhaltige Relationship-Building.\n• Interactive Stakeholder-Engagement: Aufbau partizipativer Kommunikationsformate, die Stakeholder aktiv in ethische Diskussionen einbeziehen und dabei Co-Creation-Opportunities für ethische Innovation schaffen.\n• Crisis-Ready Communication-Frameworks: Implementierung von Kommunikationsprotokollen für ethische Herausforderungen, die schnelle, transparente Response ermöglichen und dabei Reputations-Recovery optimieren.\n• ROI-Driven Communication-Metrics: Entwicklung von Metriken zur Bewertung von Communication-Effectiveness, die Stakeholder-Engagement und Business-Impact systematisch messen und kontinuierliche Optimierung ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Welche Integration von EU AI Act Ethik-Standards mit ESG-Strategien entwickelt ADVISORI und wie wird dies als strategischer Value-Driver für Investor-Relations und Nachhaltigkeits-Reporting positioniert?",
        answer: "Die Integration von AI-Ethik mit ESG-Strategien stellt für C-Level-Führungskräfte eine strategische Opportunity dar, ethische Excellence als Sustainability-Leadership zu positionieren und dabei Investor-Attractiveness zu steigern. ADVISORI entwickelt holistische Integration-Frameworks, die AI-Ethik als zentralen ESG-Component etablieren und dabei messbare Sustainability-Impact und Investor-Value generieren.\n\n🌱 Strategic ESG-Ethics Integration:\n• AI-Ethics-as-ESG-Pillar: Entwicklung von Frameworks, die AI-Ethik als fundamentalen Bestandteil der ESG-Strategie etablieren und dabei Sustainability-Leadership durch technologische Verantwortung demonstrieren.\n• Impact-Measurement-Excellence: Implementierung von Metriken, die ethische AI-Performance in ESG-Reporting integrieren und dabei quantifizierbare Sustainability-Impact für Investor-Communication schaffen.\n• Stakeholder-Value-Integration: Aufbau von Strategien, die AI-Ethik-Investment als Multi-Stakeholder-Value-Creation positionieren und dabei ESG-ROI für verschiedene Interessensgruppen demonstrieren.\n• Future-Proof Sustainability-Positioning: Entwicklung von ESG-Strategien, die AI-Ethik als Competitive-Advantage für zukünftige Sustainability-Challenges positionieren und dabei First-Mover-Benefits sichern.\n\n📈 Der ADVISORI ESG-Value-Creation-Ansatz:\n• Investor-Grade ESG-Reporting: Aufbau von AI-Ethics-Reporting-Standards, die institutionelle Investor-Anforderungen übertreffen und dabei Premium-Valuations durch Sustainability-Excellence unterstützen.\n• Regulatory-Anticipation-Leadership: Integration von AI-Ethik in ESG-Frameworks zur proaktiven Vorbereitung auf evolvierende Sustainability-Regulations und dabei Compliance-Leadership-Positioning.\n• Cross-Functional ESG-Synergies: Entwicklung von Strategies, die AI-Ethik mit anderen ESG-Dimensionen (Environmental, Social) verknüpfen und dabei ganzheitliche Sustainability-Excellence schaffen.\n• Capital-Market-Advantage-Creation: Positionierung von AI-Ethics-ESG-Integration als Differenzierungsfaktor für Capital-Market-Access und dabei Investor-Premium durch Sustainability-Leadership-Demonstration."
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
