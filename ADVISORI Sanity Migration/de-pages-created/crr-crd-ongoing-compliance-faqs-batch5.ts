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
    console.log('Updating CRR/CRD Ongoing Compliance page with FAQs batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'crr-crd-ongoing-compliance' })
    
    if (!existingDoc) {
      throw new Error('Document "crr-crd-ongoing-compliance" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können Synergien zwischen CRR/CRD-Compliance und anderen regulatorischen Initiativen genutzt werden?",
        answer: "Die parallele Erfüllung verschiedener regulatorischer Anforderungen stellt Finanzinstitute vor erhebliche Ressourcen- und Koordinationsherausforderungen. Statt isolierte Compliance-Silos zu schaffen, bietet ein integrierter Ansatz die Möglichkeit, Synergien zu identifizieren und signifikante Effizienzgewinne zu realisieren. ADVISORI unterstützt Finanzinstitute dabei, ein ganzheitliches Regulatory Compliance Management zu etablieren, das Überschneidungen nutzt und Redundanzen minimiert.\n\n🔄 Schlüsselbereiche für regulatorische Synergien:\n• Gemeinsame Datengrundlagen: Identifikation und Nutzung von Datenüberschneidungen zwischen CRR/CRD und anderen Regularien wie BCBS 239, AnaCredit, MREL/TLAC oder EMIR, um Mehrfacherfassungen und inkonsistente Datenhaltung zu vermeiden.\n• Integrierte Kontrollen: Entwicklung eines harmonisierten Kontrollrahmens, der Kontrollanforderungen aus verschiedenen Regularien konsolidiert und redundante Prüfungen eliminiert.\n• Übergreifende Governance: Etablierung einer koordinierten Governance-Struktur, die regulatorische Initiativen ganzheitlich steuert und Ressourcenkonflikte proaktiv adressiert.\n• Konsolidiertes Reporting: Schaffung einer einheitlichen Reporting-Infrastruktur, die verschiedene regulatorische Berichtsanforderungen aus einer konsistenten Datenbasis bedient.\n\n📊 ADVISORI's Methodik zur Synergienutzung:\n• Regulatory Heatmap: Erstellung einer detaillierten Übersicht regulatorischer Anforderungen und ihrer Überschneidungen in Bezug auf Daten, Prozesse, Kontrollen und Governance.\n• Integrated Compliance Architecture: Entwicklung einer Zielarchitektur, die regulatorische Anforderungen konsolidiert und gemeinsame Komponenten für verschiedene Regularien nutzbar macht.\n• Value Chain Optimization: Analyse und Optimierung der End-to-End-Wertschöpfungskette für regulatorische Compliance, mit Fokus auf Prozessintegration und Eliminierung von Redundanzen.\n• Strategic Resource Allocation: Entwicklung eines ressourcenoptimierten Umsetzungsplans, der Synergien zwischen regulatorischen Initiativen berücksichtigt und Kapazitätskonflikte minimiert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Rolle spielt Change Management bei der Etablierung einer nachhaltigen CRR/CRD-Compliance?",
        answer: "Die erfolgreiche Etablierung einer nachhaltigen CRR/CRD-Compliance erfordert nicht nur technische und fachliche Lösungen, sondern auch einen tiefgreifenden organisatorischen und kulturellen Wandel. Ein systematisches Change Management ist daher entscheidend, um die notwendigen Verhaltens- und Einstellungsänderungen zu fördern und den langfristigen Erfolg von Compliance-Initiativen zu sichern. ADVISORI unterstützt Finanzinstitute mit einem ganzheitlichen Change-Management-Ansatz, der Menschen, Prozesse und Technologien gleichermaßen berücksichtigt.\n\n🔄 Kritische Dimensionen des Compliance-Change-Managements:\n• Stakeholder Engagement: Frühzeitige und kontinuierliche Einbindung aller relevanten Stakeholder, von der Geschäftsleitung über Fachbereiche bis hin zu IT und Kontrollfunktionen, um Akzeptanz und Unterstützung zu fördern.\n• Kommunikation: Entwicklung einer klaren und konsistenten Kommunikationsstrategie, die den Sinn und Zweck von Compliance-Maßnahmen vermittelt und deren Nutzen für verschiedene Zielgruppen verdeutlicht.\n• Capability Building: Systematischer Aufbau der notwendigen Fähigkeiten und Kenntnisse bei allen Beteiligten, um sie zur erfolgreichen Umsetzung und kontinuierlichen Einhaltung der CRR/CRD-Anforderungen zu befähigen.\n• Sustainability: Verankerung der Compliance-Anforderungen in täglichen Arbeitsabläufen, Anreizsystemen und der Unternehmenskultur, um eine nachhaltige Verhaltensänderung zu erzielen.\n\n🌱 ADVISORI's Change-Management-Framework für Compliance-Transformationen:\n• Readiness Assessment: Bewertung der Veränderungsbereitschaft und -fähigkeit der Organisation in Bezug auf CRR/CRD-Compliance, Identifikation von Widerständen und Enablern.\n• Change Impact Analysis: Detaillierte Analyse der Auswirkungen neuer Compliance-Anforderungen auf verschiedene Organisationseinheiten, Rollen, Prozesse und Systeme.\n• Change-Leadership-Enablement: Befähigung von Führungskräften aller Ebenen, als Change Champions zu agieren und den Wandel aktiv voranzutreiben.\n• Sustainable Adoption: Entwicklung von Mechanismen zur kontinuierlichen Überwachung und Förderung der Compliance-Adoption, einschließlich Anreizen, Feedback-Schleifen und regelmäßigen Reinforcement-Maßnahmen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können Finanzinstitute die Kosteneffizienz ihrer CRR/CRD-Compliance optimieren ohne Risiken einzugehen?",
        answer: "Die stetig wachsenden Anforderungen an die CRR/CRD-Compliance stellen Finanzinstitute vor die Herausforderung, regulatorische Verpflichtungen zu erfüllen und gleichzeitig die Kosten effizient zu managen. Eine strategische Herangehensweise an die Kostenoptimierung kann erhebliche Effizienzgewinne ermöglichen, ohne die Qualität und Robustheit der Compliance zu beeinträchtigen. ADVISORI unterstützt Finanzinstitute dabei, eine kostenbewusste, aber risikoadäquate Compliance-Strategie zu entwickeln und umzusetzen.\n\n💡 Strategische Hebel zur Compliance-Kostenoptimierung:\n• Prozessoptimierung: Streamlining und Automatisierung von Compliance-Prozessen zur Reduzierung manueller Aufwände, Eliminierung von Redundanzen und Beschleunigung von Durchlaufzeiten.\n• Risikoorientierter Ansatz: Priorisierung von Compliance-Ressourcen basierend auf einer differenzierten Risikobewertung, die eine intensivere Überwachung in Hochrisikobereichen und schlankere Prozesse in weniger kritischen Bereichen ermöglicht.\n• Shared Services: Konsolidierung von Compliance-Funktionen in einem zentralen Shared-Service-Center, um Skaleneffekte zu nutzen und spezialisierte Expertise effizienter einzusetzen.\n• Technologieeinsatz: Implementierung kosteneffizienter Technologielösungen, die repetitive Compliance-Aufgaben automatisieren und die Produktivität der Compliance-Mitarbeiter steigern.\n\n⚖️ ADVISORI's ausbalancierter Kostenoptimierungsansatz:\n• Compliance Cost Baseline: Etablierung einer transparenten Kostenbasis für CRR/CRD-Compliance-Aktivitäten als Grundlage für gezielte Optimierungsmaßnahmen und zur Messung von Fortschritten.\n• Activity-Based Costing: Durchführung einer detaillierten Aktivitätsanalyse zur Identifikation von nicht-wertschöpfenden Tätigkeiten, Ineffizienzen und Ressourcenverschwendung in Compliance-Prozessen.\n• Make-or-Buy-Analyse: Systematische Bewertung von Möglichkeiten zum Outsourcing oder zur Nutzung von Managed Services für ausgewählte Compliance-Aktivitäten, unter Berücksichtigung von Kosten, Qualität und Risiken.\n• Continuous Improvement: Implementierung eines nachhaltigen Verbesserungsprozesses, der kontinuierlich Effizienzpotenziale identifiziert und realisiert, ohne die Compliance-Qualität zu beeinträchtigen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie kann eine effektive Zusammenarbeit zwischen internen und externen Stakeholdern bei der CRR/CRD-Compliance gestaltet werden?",
        answer: "Die nachhaltige Umsetzung der CRR/CRD-Anforderungen erfordert eine enge und effektive Zusammenarbeit zwischen einer Vielzahl interner und externer Stakeholder. Von Aufsichtsbehörden über Wirtschaftsprüfer bis hin zu verschiedenen internen Funktionen – ein koordinierter Stakeholder-Management-Ansatz ist entscheidend für den Erfolg von Compliance-Initiativen. ADVISORI unterstützt Finanzinstitute dabei, ein strukturiertes und proaktives Stakeholder-Management zu etablieren, das Synergien fördert und Komplexität reduziert.\n\n🤝 Schlüsselaspekte eines effektiven Stakeholder-Managements:\n• Stakeholder-Mapping: Systematische Identifikation und Kategorisierung aller relevanten Stakeholder, ihrer Interessen, Erwartungen und ihres Einflusses auf die CRR/CRD-Compliance.\n• Kommunikationsstrategie: Entwicklung einer differenzierten Kommunikationsstrategie, die auf die spezifischen Bedürfnisse und Perspektiven unterschiedlicher Stakeholder-Gruppen zugeschnitten ist.\n• Kollaborationsmodell: Etablierung klarer Strukturen und Prozesse für die Zusammenarbeit mit internen und externen Stakeholdern, einschließlich Eskalationswegen und Entscheidungsmechanismen.\n• Erwartungsmanagement: Proaktive Steuerung der Erwartungen verschiedener Stakeholder durch transparente Kommunikation von Zielen, Herausforderungen und Fortschritten.\n\n🌐 ADVISORI's integrierter Stakeholder-Management-Ansatz:\n• Regulatory Relationship Management: Aufbau und Pflege konstruktiver Beziehungen zu Aufsichtsbehörden durch proaktiven Dialog, transparente Kommunikation und regelmäßigen Austausch.\n• Cross-funktionale Zusammenarbeit: Förderung der Zusammenarbeit zwischen Compliance, Risikomanagement, Finanzen, IT und Fachbereichen durch gemeinsame Governance-Strukturen, integrierte Prozesse und kollaborative Tools.\n• Externe Expertise: Strategische Einbindung externer Berater, Wirtschaftsprüfer und Rechtsexperten zur Ergänzung interner Ressourcen und zur Gewinnung unabhängiger Perspektiven auf Compliance-Herausforderungen.\n• Knowledge Sharing: Etablierung systematischer Prozesse zum Wissensaustausch und zur Zusammenarbeit mit Branchenverbänden, anderen Finanzinstituten und akademischen Einrichtungen, um von Best Practices und Erfahrungen zu profitieren."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQs batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
