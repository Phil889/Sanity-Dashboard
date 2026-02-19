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
    console.log('Updating Banklizenz Aufsichtsrat & Vorstandsrollen page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'banklizenz-aufsichtsrat-vorstandsrollen' })
    
    if (!existingDoc) {
      throw new Error('Document "banklizenz-aufsichtsrat-vorstandsrollen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie entwickelt ADVISORI zukunftssichere Aufsichtsratsstrukturen, die nicht nur aktuelle BaFin-Anforderungen erfüllen, sondern auch für digitale Transformation und ESG-Integration vorbereitet sind?",
        answer: "Die Bankenlandschaft erlebt einen fundamentalen Wandel durch Digitalisierung, ESG-Requirements und neue Geschäftsmodelle. ADVISORI entwickelt zukunftsorientierte Aufsichtsratsstrukturen, die nicht nur heutige BaFin-Standards übertreffen, sondern auch als flexible Plattform für emerging Governance-Challenges und Wachstumschancen der nächsten Dekade dienen.\n\n🔮 Future-Ready Board Architecture:\n• Digital Governance Integration: Aufsichtsratsstrukturen mit nativer Digital-Banking-Kompetenz, Fintech-Partnership-Expertise und Technology Risk-Management-Capabilities für die digitale Bankenwelt.\n• ESG and Sustainability Leadership: Board-Kompetenzen in Climate Risk, Sustainable Finance und ESG-Reporting zur Anticipation wachsender Nachhaltigkeits-Governance-Anforderungen.\n• Regulatory Horizon Scanning: Aufsichtsratsmitglieder mit Expertise in emerging Regulations wie Digital Euro, DLT-Pilot-Regime und AI-in-Finance-Governance.\n• Cross-Border Scalability: Board-Strukturen, die bei EU-Expansion, Passport-Nutzung oder internationalen Partnerschaften nahtlos skalierbar sind.\n\n🚀 ADVISORI's Innovation-Ready Governance:\n• Technology-Native Leadership: Rekrutierung von Aufsichtsratsmitgliedern mit Digital-Banking-Track-Record, Fintech-Experience und Innovation-Management-Kompetenz.\n• Adaptive Committee Structures: Flexible Ausschussarchitekturen, die bei neuen Geschäftsfeldern oder regulatorischen Anforderungen schnell erweitert oder angepasst werden können.\n• AI and Analytics Integration: Board-Strukturen, die Data-Driven Decision-Making, AI-Governance und Advanced Analytics-Oversight ermöglichen.\n• Ecosystem Partnership Readiness: Governance-Frameworks für komplexe Fintech-Allianzen, Platform-Banking und Open-Banking-Initiativen.\n• Continuous Learning Architecture: Board-Development-Programme, die kontinuierliche Kompetenz-Updates in Tech-Trends, Regulatory Changes und Market Evolution sicherstellen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "In welcher Weise optimiert ADVISORI die Diversität und Kompetenz-Mix von Aufsichtsrat und Vorstand, um C-Level-Entscheidungsqualität zu maximieren und gleichzeitig alle Governance-Standards zu übertreffen?",
        answer: "Moderne Board-Excellence erfordert die strategische Orchestrierung diverser Kompetenzen, Perspektiven und Erfahrungen zur Maximierung von Entscheidungsqualität und Innovationskraft. ADVISORI entwickelt wissenschaftlich fundierte Diversity-Strategien, die nicht nur regulatorische Anforderungen erfüllen, sondern auch nachweislich Superior Performance und Competitive Advantages schaffen.\n\n🌟 Strategic Diversity Excellence Framework:\n• Cognitive Diversity Optimization: Zusammenstellung komplementärer Denkstile, Problemlösungsansätze und strategischer Perspektiven zur Maximierung von Innovation und Risk Identification.\n• Functional Excellence Integration: Ausgewogene Verteilung von Banking-Expertise, Risk Management, Technology Leadership, Legal Competency und Business Development-Erfahrung.\n• Industry Intelligence Diversification: Board-Members mit Erfahrungen aus verschiedenen Finanzdienstleistungs-Segmenten, Technologie-Sektoren und internationalen Märkten.\n• Generational Balance: Strategische Kombination von Senior Expertise und Next-Generation Leadership für optimal ausgewogene Erfahrung und Innovation.\n\n⚖️ ADVISORI's Performance-Driven Composition:\n• Competency Matrix Engineering: Wissenschaftliche Analyse der optimalen Kompetenz-Kombinationen basierend auf Geschäftsstrategie, Risikoprofil und Wachstumszielen.\n• Decision-Quality Analytics: Nutzung von Board-Performance-Research zur Entwicklung von Zusammensetzungen, die nachweislich Superior Decision-Making ermöglichen.\n• Cultural Fit Optimization: Berücksichtigung von Unternehmenswerten, Leadership-Style und Strategic Vision bei der Kandidatenauswahl für maximale Governance-Effektivität.\n• Succession Planning Integration: Aufbau von Board-Pipelines mit geplanten Skill-Evolution und Leadership-Transition für langfristige Governance-Excellence.\n• Performance Measurement: Etablierung von Board-Effectiveness-Metriken zur kontinuierlichen Optimierung von Zusammensetzung und Governance-Impact."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie strukturiert ADVISORI Vorstandsrollen und -verantwortlichkeiten, um operative Exzellenz zu gewährleisten und gleichzeitig C-Suite-Flexibilität für strategische Pivots und Wachstumsinitiativen zu erhalten?",
        answer: "Erfolgreiche Banking-Vorstände müssen operative Stabilität und strategische Agilität in perfekter Balance halten. ADVISORI entwickelt innovative Vorstandsstrukturen, die nicht nur alle regulatorischen Anforderungen erfüllen, sondern auch maximale Flexibilität für Business Model Innovation und Market Opportunities bei optimaler Risk Control ermöglichen.\n\n🎯 Dynamic Executive Architecture:\n• Adaptive Role Definition: Flexible Vorstandsrollen, die bei Geschäftsmodell-Evolution oder Marktveränderungen schnell angepasst werden können, ohne strukturelle Disruption zu verursachen.\n• Cross-Functional Leadership: Vorstandsstrukturen mit integrierten Verantwortlichkeiten, die Silos eliminieren und agile Entscheidungsprozesse ermöglichen.\n• Strategic Initiative Flexibility: Governance-Frameworks, die Innovation Labs, Fintech-Partnerschaften und neue Geschäftsfelder unterstützen, während sie Core Banking-Stabilität gewährleisten.\n• Crisis and Opportunity Readiness: Vorstandsstrukturen mit built-in Escalation-Mechanismen und Rapid Response-Capabilities für Marktturbulenzen oder Strategic Opportunities.\n\n⚡ ADVISORI's Agile Executive Framework:\n• Matrix Leadership Design: Innovative Vorstandsstrukturen, die funktionale Expertise mit Business Line-Verantwortung intelligent kombinieren für optimale Entscheidungsgeschwindigkeit.\n• Innovation-Operations Balance: Governance-Systeme, die disruptive Innovation ermöglichen, während sie operative Exzellenz und Regulatory Compliance aufrechterhalten.\n• Performance-Driven Accountability: Klare KPIs und Success Metrics für Vorstandsmitglieder, die sowohl Short-term Delivery als auch Long-term Value Creation incentivieren.\n• Technology-Enabled Governance: Digital Tools und Dashboards, die Real-time Performance-Monitoring und Data-Driven Decision-Making auf Vorstandsebene ermöglichen.\n• Stakeholder Value Optimization: Vorstandsstrukturen, die alle Stakeholder-Interessen (Shareholders, Customers, Regulators, Employees) intelligent balancieren und optimieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie transformiert ADVISORI Aufsichtsrat und Vorstand zu strategischen Growth Enablers, die nicht nur Oversight bieten, sondern aktiv Wertschöpfung, Innovation und Marktexpansion vorantreiben?",
        answer: "Moderne Banking-Governance geht weit über traditionelle Oversight-Funktionen hinaus und wird zum strategischen Growth Engine. ADVISORI transformiert Aufsichtsrat und Vorstand zu Value Creation-Katalysatoren, die aktiv Business Development, Innovation und Competitive Advantage vorantreiben, während sie exemplarische Governance-Standards aufrechterhalten.\n\n💼 Growth-Oriented Governance Transformation:\n• Strategic Advisory Excellence: Board-Members als aktive Business Advisors mit Industry Networks, Market Insights und Deal-Making-Capabilities zur Acceleration von Wachstumsinitiativen.\n• Innovation Catalyst Function: Governance-Strukturen, die Fintech-Partnerships, Digital Innovation und New Business Model-Development aktiv fördern und strategisch unterstützen.\n• Market Access Enhancement: Board-Netzwerke und -Expertise zur Erschließung neuer Kundensegmente, Geographic Markets und Strategic Partnerships.\n• Capital Efficiency Optimization: Governance-Excellence, die Premium-Investor-Access ermöglicht und Cost of Capital durch Superior Risk Management reduziert.\n\n🚀 ADVISORI's Value Creation-Framework:\n• Network Value Multiplication: Strategische Auswahl von Board-Members mit Premium-Industry-Networks, die Business Development-Opportunities und Strategic Partnerships ermöglichen.\n• Expertise Monetization: Transformation von Board-Know-how in tangible Business Value durch Advisory Services, Consulting Mandates und Knowledge Transfer-Initiativen.\n• Reputation Capital Building: Board-Excellence als Market Differentiator, der Premium-Pricing, Customer Trust und Competitive Positioning ermöglicht.\n• Strategic Option Creation: Governance-Strukturen, die M&A-Opportunities, Joint Ventures und Strategic Alliances identifizieren und realisieren helfen.\n• Performance Acceleration: Board-Involvement in Strategic Planning, Performance Management und Execution Excellence zur Maximierung von Shareholder Value und Market Position."
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
