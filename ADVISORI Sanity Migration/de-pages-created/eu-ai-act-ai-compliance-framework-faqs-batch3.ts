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
    console.log('Updating EU AI Act AI Compliance Framework page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act-ai-compliance-framework' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act-ai-compliance-framework" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie entwickelt ADVISORI eine AI Ethics Committee-Struktur, die sowohl strategische Guidance als auch operative Entscheidungsfindung effektiv unterstützt?",
        answer: "Ein effektives AI Ethics Committee ist mehr als nur ein consultatives Gremium – es ist ein strategisches Organ, das ethische Prinzipien in praktische Geschäftsentscheidungen übersetzt. ADVISORI entwickelt maßgeschneiderte Ethics Committee-Strukturen, die sowohl high-level strategische Guidance als auch operative Entscheidungsunterstützung bieten und dabei die Balance zwischen ethischer Rigorosität und geschäftlicher Agilität wahren.\n\n🎯 Strategic Ethics Committee Architecture:\n• Multi-tiered Governance Structure: Etablierung eines mehrstufigen Systems mit einem strategischen Board für Policy-Entscheidungen und operativen Committees für Implementierung.\n• Diverse Expertise Integration: Zusammenstellung interdisziplinärer Teams mit Experten aus Ethics, Law, Technology, Business und externen Stakeholder-Vertretern.\n• Clear Charter & Authority Definition: Präzise Definition von Mandaten, Entscheidungsautoritäten und Verantwortlichkeiten des Ethics Committees.\n• Escalation & Decision Frameworks: Strukturierte Prozesse für ethische Dilemmata und Konfliktlösung zwischen verschiedenen Stakeholder-Interessen.\n\n🛡️ ADVISORI's Ethics Committee Implementation:\n• Committee Composition Optimization: Strategische Auswahl und Entwicklung von Committee-Mitgliedern mit komplementären Fähigkeiten und Perspektiven.\n• Operating Procedures Design: Entwicklung effizienter Meeting-Strukturen, Entscheidungsprozesse und Kommunikationsprotokolle.\n• Ethics Framework Development: Erstellung praktischer ethischer Leitlinien und Decision-Trees für verschiedene AI-Anwendungsszenarien.\n• Performance Measurement: Etablierung von Metriken zur Bewertung der Effektivität und des Impacts des Ethics Committees.\n• Continuous Learning Mechanisms: Integration von Feedback-Loops und Best Practice-Sharing für kontinuierliche Verbesserung.\n• Integration mit Governance-Strukturen: Nahtlose Einbindung des Ethics Committees in bestehende Corporate Governance und Entscheidungsprozesse."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche spezifischen AI Policy Frameworks entwickelt ADVISORI für verschiedene Geschäftsbereiche und wie stellen diese operative Konsistenz bei gleichzeitiger Flexibilität sicher?",
        answer: "Die Entwicklung effektiver AI Policies erfordert die Balance zwischen organisationsweiter Konsistenz und bereichsspezifischer Flexibilität. ADVISORI entwickelt modulare Policy Frameworks, die universelle ethische Prinzipien mit adaptiven Implementierungsrichtlinien kombinieren, um verschiedene Geschäftsbereiche optimal zu unterstützen ohne die übergeordnete AI Governance zu fragmentieren.\n\n📋 Modular Policy Framework Architecture:\n• Core Principles Layer: Etablierung unveränderlicher ethischer Grundprinzipien, die für alle Geschäftsbereiche und AI-Anwendungen gelten.\n• Domain-specific Implementation Guidelines: Entwicklung bereichsspezifischer Richtlinien für verschiedene Funktionen (HR, Marketing, Finance, Operations).\n• Risk-based Policy Scaling: Adaptive Policy-Intensität basierend auf Risikoprofil und Impact-Potenzial verschiedener AI-Anwendungen.\n• Industry-specific Compliance Integration: Berücksichtigung branchenspezifischer Regularien und Best Practices in den Policy Frameworks.\n\n⚖️ Operational Consistency Mechanisms:\n• Policy Hierarchy & Precedence Rules: Klare Regeln für die Auflösung von Konflikten zwischen verschiedenen Policy-Ebenen und -Bereichen.\n• Cross-functional Policy Coordination: Mechanismen zur Sicherstellung der Konsistenz zwischen verschiedenen Geschäftsbereichen.\n• Version Control & Change Management: Strukturierte Prozesse für Policy-Updates und -Anpassungen mit Impact-Assessment.\n• Training & Communication Programs: Comprehensive Programme zur Dissemination und Einbettung der AI Policies in die Organisation.\n• Compliance Monitoring & Enforcement: Systeme zur kontinuierlichen Überwachung der Policy-Einhaltung und konsistenten Enforcement.\n• Exception Handling Procedures: Strukturierte Verfahren für den Umgang mit Policy-Exceptions und Edge-Cases ohne Kompromittierung der übergeordneten Governance."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie integriert ADVISORI AI Compliance nahtlos in bestehende IT-Governance-Strukturen ohne Disruption kritischer Geschäftsprozesse?",
        answer: "Die Integration von AI Compliance in bestehende IT-Governance erfordert einen strategischen Ansatz, der minimale Disruption mit maximaler Effektivität kombiniert. ADVISORI entwickelt Integrationsmethodologien, die AI Compliance organisch in etablierte Governance-Strukturen einbetten und dabei bestehende Investitionen und Prozesse optimieren, anstatt sie zu ersetzen.\n\n🔄 Seamless Integration Strategy:\n• Governance Mapping & Gap Analysis: Systematische Analyse bestehender IT-Governance-Strukturen zur Identifikation von Integration-Opportunities und Compliance-Gaps.\n• Incremental Implementation Approach: Schrittweise Einführung von AI Compliance-Komponenten mit minimal-invasiven Änderungen bestehender Prozesse.\n• Legacy System Enhancement: Aufwertung bestehender Governance-Tools und -Systeme zur Unterstützung AI-spezifischer Anforderungen.\n• Stakeholder Impact Minimization: Sorgfältige Planung zur Minimierung von Änderungen in etablierten Arbeitsabläufen und Verantwortlichkeiten.\n\n🛡️ ADVISORI's Integration Excellence:\n• Process Re-engineering Expertise: Optimierung bestehender IT-Governance-Prozesse zur natürlichen Einbindung von AI Compliance-Checkpoints.\n• Technology Stack Integration: Nahtlose Integration von AI Compliance-Tools in bestehende IT Management-Plattformen und Dashboards.\n• Change Management Excellence: Professionelle Begleitung des Integrationsprozesses mit minimal möglicher Disruption für das operative Geschäft.\n• Training & Capability Transfer: Befähigung bestehender IT-Governance-Teams zur effektiven Verwaltung der erweiterten AI Compliance-Verantwortlichkeiten.\n• Performance Optimization: Kontinuierliche Optimierung der integrierten Governance-Strukturen für maximale Effizienz und Effektivität.\n• Future-proofing Strategies: Design der Integration für einfache Skalierung und Anpassung an zukünftige Regulatory und technologische Entwicklungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Welche messbaren KPIs und Metrics entwickelt ADVISORI zur kontinuierlichen Bewertung und Optimierung der AI Compliance Framework Performance?",
        answer: "Effektive AI Compliance erfordert datengetriebene Performance-Messung und kontinuierliche Optimierung. ADVISORI entwickelt comprehensive KPI-Frameworks, die sowohl Compliance-Effektivität als auch Business-Impact messen und der C-Suite actionable Insights für strategische Entscheidungen liefern. Unsere Metriken balancieren Leading und Lagging Indicators für proaktives Performance-Management.\n\n📊 Comprehensive KPI Framework:\n• Compliance Health Metrics: Quantitative Messung der Compliance-Posture aller AI-Systeme mit Real-time Dashboards und Trend-Analysen.\n• Risk Mitigation Effectiveness: Bewertung der Wirksamkeit von Risk Controls und Mitigation-Maßnahmen durch Before/After-Vergleiche.\n• Process Efficiency Indicators: Messung der Effizienz von Compliance-Prozessen (Time-to-Approval, Documentation Quality, Audit Readiness).\n• Stakeholder Satisfaction Metrics: Bewertung der Zufriedenheit verschiedener Stakeholder (Developers, Legal, Business Units) mit den Compliance-Prozessen.\n\n🎯 Strategic Performance Indicators:\n• Innovation Velocity Impact: Messung des Einflusses der Compliance-Frameworks auf Time-to-Market und Innovation-Geschwindigkeit.\n• Business Value Creation: Quantifizierung des Business-Values durch verantwortungsvolle AI-Governance (Trust Premium, Market Differentiation).\n• Regulatory Relationship Quality: Bewertung der Beziehungen zu Regulatoren und externen Audit-Performance.\n• Cultural Transformation Progress: Messung der Verankerung ethischer AI-Prinzipien in der Organisationskultur.\n• Competitive Advantage Metrics: Bewertung der Marktposition durch überlegene AI Governance und Stakeholder-Vertrauen.\n• Continuous Improvement Indicators: Tracking der Framework-Evolution und Adaptation an neue Herausforderungen und Opportunities."
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
