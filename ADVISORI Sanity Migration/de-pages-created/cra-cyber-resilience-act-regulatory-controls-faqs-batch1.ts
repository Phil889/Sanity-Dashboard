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
    console.log('Updating CRA Regulatory Controls page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-cyber-resilience-act-regulatory-controls' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-cyber-resilience-act-regulatory-controls" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie gewährleistet ADVISORI, dass unsere CRA-regulatorischen Kontrollen nicht nur Compliance erfüllen, sondern auch strategischen Geschäftswert für die C-Suite schaffen?",
        answer: "Für die C-Suite ist es entscheidend, dass regulatorische Kontrollen nicht nur Compliance-Boxen abhaken, sondern echten strategischen Mehrwert generieren. ADVISORI transformiert CRA-regulatorische Kontrollen in strategische Enabler, die operative Exzellenz fördern, Vertrauen schaffen und neue Geschäftschancen erschließen.\n\n🎯 Strategische Werttreiber regulatorischer Kontrollen:\n• Wettbewerbsvorteile durch Vertrauensaufbau: Robuste Cybersicherheitskontrollen schaffen Vertrauen bei Kunden, Partnern und Investoren, was direkt zu Geschäftswachstum beiträgt.\n• Operative Effizienzsteigerung: Gut designte Kontrollen reduzieren manuelle Prozesse, minimieren Fehlerquoten und optimieren Ressourceneinsatz durch Automatisierung.\n• Risikominimierung als Kosteneinsparung: Präventive Kontrollen verhindern teure Sicherheitsvorfälle, Datenschutzverletzungen und regulatorische Strafen.\n• Marktzugangserleichterung: CRA-konforme Kontrollen öffnen Türen zu neuen Märkten und Kundensegmenten, die hohe Cybersicherheitsstandards voraussetzen.\n\n🚀 Der ADVISORI-Ansatz für wertschöpfende Kontrollen:\n• Business-orientiertes Kontrolldesign: Wir entwickeln Kontrollen, die nicht nur regulatorische Anforderungen erfüllen, sondern auch Ihre Geschäftsprozesse optimieren und strategische Ziele unterstützen.\n• ROI-fokussierte Implementierung: Jede Kontrolle wird auf ihren Beitrag zu Kosteneinsparungen, Effizienzsteigerungen oder Umsatzgenerierung evaluiert und entsprechend priorisiert.\n• Datengetriebene Insights: Unsere Kontrollsysteme generieren wertvolle Geschäftsintelligenz über Risikoprofile, Prozessperformance und Sicherheitstrends.\n• Zukunftsorientierte Skalierbarkeit: Kontrollen werden so konzipiert, dass sie mit Ihrem Unternehmen wachsen und sich an neue Geschäftsmodelle und Technologien anpassen können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche konkreten KPIs und Metriken verwendet ADVISORI, um der C-Suite den Erfolg und ROI der CRA-Kontrollimplementierung transparent zu demonstrieren?",
        answer: "Für eine datengetriebene C-Suite ist die messbare Darstellung des Erfolgs regulatorischer Kontrollen essentiell. ADVISORI entwickelt comprehensive KPI-Frameworks, die sowohl quantitative als auch qualitative Erfolgsindikatoren integrieren und den direkten Business Impact der CRA-Kontrollimplementierung transparent machen.\n\n📊 Finanzielle Performance-Indikatoren:\n• Risk-Adjusted ROI: Berechnung des risikobereinigten Return on Investment durch Berücksichtigung vermiedener Schadens- und Compliance-Kosten.\n• Cost of Control vs. Cost of Non-Compliance: Vergleichsanalyse der Kontrollkosten gegenüber potenziellen Strafzahlungen, Reputationsschäden und Geschäftsunterbrechungen.\n• Operational Cost Savings: Messbare Einsparungen durch Automatisierung, Effizienzsteigerungen und Reduktion manueller Kontrolltätigkeiten.\n• Business Enablement Value: Quantifizierung neuer Geschäftschancen, die durch verbesserte Cybersicherheitspostur erschlossen werden.\n\n🎯 Operative Exzellenz-Metriken:\n• Control Effectiveness Rating: Umfassende Bewertung der Wirksamkeit implementierter Kontrollen basierend auf Detection Rate, Response Time und Remediation Success.\n• Process Automation Index: Messung des Automatisierungsgrads von Kontrollprozessen und damit verbundener Effizienzgewinne.\n• Incident Reduction Rate: Dokumentierte Reduktion von Sicherheitsvorfällen und Compliance-Verstößen nach Kontrollimplementierung.\n• Mean Time to Detection/Response (MTTD/MTTR): Verbesserung der Reaktionszeiten auf Sicherheitsereignisse durch optimierte Kontrollen.\n\n🛡️ Governance und Compliance-Indikatoren:\n• Regulatory Readiness Score: Bewertung der Bereitschaft für regulatorische Prüfungen und Audits.\n• Stakeholder Confidence Index: Messung des Vertrauens von Kunden, Partnern und Investoren in Ihre Cybersicherheitskapazitäten.\n• Control Coverage Ratio: Prozentuale Abdeckung aller relevanten CRA-Anforderungen durch implementierte Kontrollen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie stellt ADVISORI sicher, dass unsere CRA-regulatorischen Kontrollen mit der rasanten Entwicklung von KI, IoT und anderen Emerging Technologies Schritt halten?",
        answer: "In einer Zeit exponentieller technologischer Entwicklung müssen regulatorische Kontrollen nicht nur aktuelle Standards erfüllen, sondern auch zukunftsfähig und adaptiv gestaltet sein. ADVISORI entwickelt evolutionäre Kontrollarchitekturen, die sich dynamisch an neue Technologien und sich wandelnde Bedrohungslandschaften anpassen können.\n\n🔄 Adaptive Kontrollarchitekturen für Emerging Technologies:\n• Technology-Agnostic Design: Entwicklung von Kontrollen, die unabhängig von spezifischen Technologien funktionieren und flexibel auf neue Systeme anwendbar sind.\n• KI-Enhanced Controls: Integration von Machine Learning und AI in Kontrollprozesse für predictive risk detection, automated response und continuous learning.\n• API-First Approach: Gestaltung von Kontrollen mit offenen APIs, die nahtlose Integration neuer Technologien und Systeme ermöglichen.\n• Cloud-Native Skalierbarkeit: Kontrollarchitekturen, die in Multi-Cloud- und Hybrid-Umgebungen funktionieren und sich elastisch skalieren lassen.\n\n🚀 Proaktive Technologie-Integration:\n• Emerging Technology Roadmapping: Kontinuierliche Bewertung neuer Technologien und deren Auswirkungen auf bestehende Kontrolllandschaften.\n• Regulatory Horizon Scanning: Vorausschauende Analyse sich entwickelnder regulatorischer Anforderungen für neue Technologien.\n• Innovation Labs Integration: Einbindung von Kontrollüberlegungen bereits in frühe Phasen der Technologieentwicklung und -adoption.\n• Zero Trust Architecture: Implementierung von Zero Trust-Prinzipien, die inhärent sicher für neue Technologien und Arbeitsmodelle sind.\n\n🛡️ Continuous Evolution Framework:\n• Automated Control Updates: Systeme für automatische Updates von Kontrollparametern basierend auf neuen Threat Intelligence und regulatorischen Änderungen.\n• DevSecOps Integration: Einbettung von Sicherheitskontrollen in CI/CD-Pipelines für kontinuierliche Sicherheit bei schneller Technologieentwicklung.\n• Quantum-Ready Cryptography: Vorbereitung auf Post-Quantum-Kryptographie und andere fundamentale technologische Paradigmenwechsel."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Rolle spielt ADVISORI bei der Orchestrierung einer C-Level-gerechten Governance-Struktur für CRA-regulatorische Kontrollen und wie wird Accountability sichergestellt?",
        answer: "Für die C-Suite ist eine klare Governance-Struktur mit definierten Verantwortlichkeiten und Rechenschaftspflichten für regulatorische Kontrollen business-kritisch. ADVISORI entwickelt Executive-Level Governance-Frameworks, die nicht nur Compliance sicherstellen, sondern auch strategische Entscheidungsfindung unterstützen und Führungsverantwortung transparent machen.\n\n🎯 Executive Governance Framework Design:\n• C-Level Responsibility Matrix: Klare Definition von Rollen und Verantwortlichkeiten auf Executive-Level für verschiedene Aspekte der CRA-Kontrollen (CEO: strategische Vision, CTO: technische Umsetzung, CISO: operative Sicherheit, CLO: rechtliche Compliance).\n• Board-Level Reporting: Entwicklung von Executive Dashboards und Board Reports, die komplexe technische Kontrolldetails in strategische Business Insights übersetzen.\n• Risk Appetite Framework: Definition der C-Suite-gesteuerten Risikotoleranz und deren Übersetzung in konkrete Kontrollparameter und -schwellenwerte.\n• Strategic Control Alignment: Verknüpfung von Kontrollzielen mit übergeordneten Unternehmensstrategie und -zielen.\n\n🛡️ Accountability und Oversight Mechanismen:\n• Executive Accountability Metrics: Entwicklung von KPIs, die direkt an Executive Performance und Incentive-Strukturen gekoppelt sind.\n• Three Lines of Defense Integration: Implementierung eines robusten Three Lines of Defense-Modells mit klaren Eskalationspfaden zur C-Suite.\n• Independent Assurance: Etablierung unabhängiger Assurance-Funktionen für objektive Bewertung der Kontrolleffektivität.\n• Crisis Response Governance: Klare Entscheidungsstrukturen und Kommunikationswege für den Fall von Kontrollfehlern oder Sicherheitsvorfällen.\n\n⚡ Operative Exzellenz durch Governance:\n• Automated Governance Workflows: Digitalisierung von Governance-Prozessen für Echtzeit-Transparenz und effiziente Entscheidungsfindung.\n• Risk-Based Prioritization: Systematische Priorisierung von Kontrollmaßnahmen basierend auf Business Impact und strategischen Zielen.\n• Continuous Improvement Culture: Förderung einer Kultur der kontinuierlichen Verbesserung mit regelmäßigen Governance Reviews und Anpassungen.\n• Stakeholder Engagement: Strukturierte Einbindung aller relevanten Stakeholder (intern und extern) in Governance-Prozesse für umfassende Perspektiven."
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
