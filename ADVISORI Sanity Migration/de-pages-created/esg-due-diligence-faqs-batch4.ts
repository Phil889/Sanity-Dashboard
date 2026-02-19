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
    console.log('Updating ESG Due Diligence page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-due-diligence' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-due-diligence" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie adressiert ADVISORI die Herausforderungen von ESG Due Diligence in Emerging Markets und entwicklungsorientierten Investitionen?",
        answer: "Emerging Markets präsentieren einzigartige ESG-Herausforderungen und -Chancen, die spezielle Due Diligence Ansätze erfordern. Während Entwicklungsländer oft höhere ESG-Risiken aufweisen (schwächere Governance-Strukturen, limitierte Umweltregulierung, soziale Herausforderungen), bieten sie gleichzeitig bedeutende Impact-Potenziale und Wachstumschancen. ADVISORI entwickelt context-sensitive ESG Due Diligence Frameworks, die diese Komplexität navigieren und sowohl Risiken als auch Entwicklungspotenziale systematisch bewerten.\n\n🌍 Emerging Markets ESG Complexity:\n• Regulatory Fragmentation und Development Gaps: Uneinheitliche oder sich entwickelnde ESG-Regulatorik erfordert adaptive Compliance-Strategien und proaktive Risikomanagement-Ansätze.\n• Data Availability und Quality Challenges: Begrenzte Verfügbarkeit verlässlicher ESG-Daten necessitiert alternative Bewertungsmethodiken und On-Ground-Assessments.\n• Cultural und Social Context Integration: Berücksichtigung lokaler kultureller Normen, sozialer Strukturen und entwicklungsrelevanter Prioritäten in ESG-Bewertungen.\n• Infrastructure und Capacity Limitations: Bewertung der lokalen Kapazitäten für ESG-Implementation und -Monitoring als Grundlage für Capacity-Building-Strategien.\n\n📈 ADVISORI's Emerging Markets ESG Framework:\n• Context-Adaptive Assessment Methodologies: Entwicklung flexibler ESG-Bewertungsansätze, die lokale Gegebenheiten berücksichtigen, ohne globale Standards zu kompromittieren.\n• Local Stakeholder Integration: Intensive Einbindung lokaler Stakeholder, Zivilgesellschaft und Entwicklungsorganisationen in Due Diligence Prozesse für authentische Perspektiven.\n• Development Impact Quantification: Systematische Bewertung des positiven Entwicklungsbeitrags von Investitionen und deren Alignment mit UN Sustainable Development Goals (SDGs).\n• Capacity Building Integration: Integration von ESG Capacity Building Programmen in Investment-Strategien zur langfristigen Verbesserung lokaler ESG-Standards."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche Rolle spielt Künstliche Intelligenz und Advanced Analytics in ADVISORI's ESG Due Diligence Prozessen und wie wird Bias vermieden?",
        answer: "Künstliche Intelligenz und Advanced Analytics revolutionieren ESG Due Diligence durch die Fähigkeit, massive Datenmengen zu verarbeiten, Muster zu erkennen und prädiktive Insights zu generieren. Gleichzeitig bringen diese Technologien Herausforderungen in Bezug auf Algorithmic Bias, Interpretierbarkeit und ethische Anwendung mit sich. ADVISORI entwickelt responsible AI-Frameworks für ESG Due Diligence, die die Vorteile fortschrittlicher Analytik nutzen, während Transparenz, Fairness und ethische Standards gewährleistet werden.\n\n🤖 AI-Enhanced ESG Due Diligence Capabilities:\n• Alternative Data Integration: KI-gestützte Analyse von Satellitendaten, Social Media Sentiment, News Analytics und anderen alternativen Datenquellen für umfassende ESG-Bewertungen.\n• Pattern Recognition und Anomaly Detection: Automatisierte Identifikation von ESG-Risiko-Mustern und Anomalien, die traditionelle Analysemethoden übersehen könnten.\n• Predictive ESG Risk Modeling: Entwicklung von Machine Learning Modellen zur Vorhersage zukünftiger ESG-Risiken basierend auf historischen Daten und Markttrends.\n• Natural Language Processing für ESG Disclosure Analysis: Automatisierte Analyse von Nachhaltigkeitsberichten, Regulatory Filings und öffentlichen Kommunikationen für ESG-Content-Extraktion.\n\n⚖️ ADVISORI's Responsible AI für ESG Framework:\n• Bias Detection und Mitigation: Systematische Überpüfung von AI-Modellen auf potenzielle Bias-Quellen (Geographic, Sector, Size Bias) und Implementierung von Bias-Mitigation-Strategien.\n• Explainable AI Implementation: Nutzung interpretierbarer AI-Modelle und Explanation-Tools, um AI-generierte ESG-Insights für C-Level-Entscheidungsträger transparent und nachvollziehbar zu machen.\n• Human-in-the-Loop Validation: Integration menschlicher Expertise in AI-Prozesse für Qualitätskontrolle, Context-Validation und ethische Oversight.\n• Ethical AI Governance: Etablierung von AI Ethics Committees und Governance-Strukturen für responsible AI-Nutzung in ESG Due Diligence."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie bereitet ADVISORI Unternehmen auf die kommende EU Corporate Sustainability Reporting Directive (CSRD) vor und integriert dies in ESG Due Diligence?",
        answer: "Die EU Corporate Sustainability Reporting Directive (CSRD) und die European Sustainability Reporting Standards (ESRS) werden ab 2024 die ESG-Berichterstattungslandschaft fundamental verändern und deutlich höhere Anforderungen an Datenqualität, Scope und Granularität stellen. Für die C-Suite bedeutet dies nicht nur Compliance-Herausforderungen, sondern auch die Notwendigkeit, ESG Due Diligence Prozesse CSRD-kompatibel zu gestalten. ADVISORI entwickelt CSRD-readiness Strategien, die regulatory compliance mit strategic value creation verbinden.\n\n📋 CSRD Impact auf ESG Due Diligence:\n• Double Materiality Assessment Requirements: Integration der CSRD-spezifischen Double Materiality Perspektive (Impact und Financial Materiality) in Due Diligence Frameworks.\n• Enhanced Data Requirements: Adaptation von Due Diligence Prozessen an die deutlich granulareren Datenanforderungen der ESRS Standards.\n• Value Chain Integration: Berücksichtigung der CSRD-Anforderungen zur umfassenden Value Chain ESG-Berichterstattung in Supply Chain Due Diligence.\n• Assurance und Verification Standards: Integration der CSRD-Assurance-Anforderungen in Due Diligence Validation und Verification Prozesse.\n\n🎯 ADVISORI's CSRD-Readiness Framework:\n• CSRD Gap Analysis und Compliance Roadmap: Systematische Bewertung der aktuellen ESG-Reporting-Capabilities gegen CSRD-Anforderungen und Entwicklung detaillierter Compliance-Roadmaps.\n• ESRS-Aligned Due Diligence Methodologies: Anpassung bestehender Due Diligence Frameworks an ESRS-Datenstrukturen und -Anforderungen für seamless Compliance Integration.\n• Digital Reporting Infrastructure: Beratung zur Implementierung von ESG-Data-Management-Systemen, die CSRD-konforme Datensammlung, -verarbeitung und -berichterstattung ermöglichen.\n• Stakeholder Readiness und Training: Umfassende Schulungsprogramme für interne Teams und Stakeholder zur CSRD-Compliance und deren Integration in Geschäftsprozesse."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie stellt ADVISORI sicher, dass ESG Due Diligence auch small-cap und mittelständische Unternehmen effektiv unterstützt, ohne diese zu überfordern?",
        answer: "ESG Due Diligence wird oft als domain of large corporates wahrgenommen, aber mittelständische und kleine Unternehmen stehen zunehmend unter ESG-Druck von Kunden, Investoren und Regulatoren. Gleichzeitig verfügen sie über begrenzte Ressourcen und ESG-Expertise. ADVISORI entwickelt skalierbare, resource-efficient ESG Due Diligence Lösungen, die auch für smaller enterprises praktikabel und wertschöpfend sind, ohne deren operative Kapazitäten zu überlasten.\n\n🏢 SME-Specific ESG Challenges:\n• Resource Constraints: Begrenzte personelle und finanzielle Ressourcen für umfassende ESG-Programme erfordern fokussierte, impact-orientierte Ansätze.\n• Expertise Gaps: Fehlende interne ESG-Expertise necessitiert external support und capacity building für nachhaltige ESG-Implementation.\n• Proportionality Principle: ESG-Anforderungen müssen proportional zur Unternehmensgröße und -komplexität gestaltet werden, um Überregulierung zu vermeiden.\n• Supply Chain Position: Viele SMEs sind Teil größerer Supply Chains und müssen ESG-Anforderungen ihrer Corporate Customers erfüllen.\n\n⚡ ADVISORI's SME-Optimized ESG Framework:\n• Materiality-Focused Approach: Konzentration auf die geschäftskritischsten ESG-Faktoren zur Maximierung von Impact bei minimalen Ressourceneinsatz.\n• Simplified Assessment Tools: Entwicklung benutzerfreundlicher, streamlined Assessment-Tools, die ohne extensive ESG-Expertise anwendbar sind.\n• Collaborative ESG Networks: Facilitierung von Peer-Learning-Netzwerken und Brancheninitiativen für cost-effective ESG knowledge sharing.\n• Scalable Implementation Pathways: Entwicklung stufenweiser ESG-Implementation-Strategien, die mit dem Unternehmenswachstum skalieren können."
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
