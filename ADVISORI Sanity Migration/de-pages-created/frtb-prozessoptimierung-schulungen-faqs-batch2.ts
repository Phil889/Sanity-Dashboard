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
    console.log('Updating FRTB Prozessoptimierung & Schulungen page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'frtb-prozessoptimierung-schulungen' })
    
    if (!existingDoc) {
      throw new Error('Document "frtb-prozessoptimierung-schulungen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie gewährleistet ADVISORI, dass FRTB-Schulungsprogramme nicht nur theoretisches Wissen vermitteln, sondern praktische Anwendungsfähigkeiten entwickeln, die sofort im Arbeitsalltag eingesetzt werden können?",
        answer: "ADVISORI revolutioniert FRTB-Schulungen durch einen praxisorientierten, immersiven Ansatz, der theoretisches Wissen nahtlos mit realen Arbeitsszenarien verknüpft. Unsere Schulungsmethodik basiert auf dem Prinzip des 'Learning by Doing' und nutzt modernste Lerntechnologien, um sicherzustellen, dass Teilnehmer nicht nur verstehen, sondern auch sofort anwenden können, was sie lernen.\n\n🎯 Praxisorientierte Lernmethodik von ADVISORI:\n• Simulation realer Trading-Szenarien: Verwendung echter Marktdaten und Handelssituationen für praxisnahe Übungen, die die Komplexität des realen FRTB-Umfelds widerspiegeln.\n• Case-Based Learning: Intensive Arbeit mit realen Fallstudien aus verschiedenen Marktsegmenten und Krisenperioden zur Entwicklung von Problemlösungskompetenzen.\n• Hands-On-Workshops: Praktische Arbeit mit denselben Tools und Systemen, die im täglichen FRTB-Betrieb verwendet werden, inklusive Systemtraining und Workflow-Optimierung.\n• Role-Playing und Stress-Testing: Simulation von Krisensituationen und regulatorischen Prüfungen zur Vorbereitung auf außergewöhnliche Umstände.\n\n🔧 Technologie-gestützte Lernumgebung:\n• FRTB-Sandbox-Systeme: Bereitstellung vollständig funktionsfähiger FRTB-Umgebungen für sicheres Experimentieren ohne Auswirkungen auf Produktionssysteme.\n• Augmented Reality (AR) Training: Einsatz von AR-Technologien für immersive Lernerfahrungen, die komplexe FRTB-Konzepte visuell und interaktiv vermitteln.\n• AI-gestützte personalisierte Lernpfade: Adaptive Lernalgorithmen passen Schwierigkeitsgrad und Inhalte an individuelle Lernfortschritte und -präferenzen an.\n• Virtual Collaboration Spaces: Digitale Umgebungen für teambasiertes Lernen und Peer-to-Peer-Wissensaustausch.\n\n💡 Sofortige Anwendbarkeit durch strukturierte Transfermechanismen:\n• 30-60-90-Tage-Implementierungspläne: Detaillierte Roadmaps für die schrittweise Umsetzung gelernter Konzepte im realen Arbeitsumfeld.\n• Mentoring und Coaching: Begleitung durch ADVISORI-Experten in den ersten Wochen nach der Schulung zur Sicherstellung erfolgreicher Implementierung.\n• Micro-Learning und Just-in-Time-Support: Bereitstellung gezielter Lernmodule für spezifische Situationen und kontinuierliche Unterstützung bei der Anwendung.\n• Performance Tracking und Feedback: Kontinuierliche Messung der Anwendungsqualität und iterative Verbesserung durch datenbasiertes Feedback."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche spezifischen Metriken und KPIs nutzt ADVISORI, um den Erfolg von FRTB-Prozessoptimierungen zu messen und wie werden diese in strategische C-Level-Dashboards übersetzt?",
        answer: "ADVISORI entwickelt comprehensive Performance-Measurement-Frameworks, die FRTB-Prozessoptimierungen in strategisch relevante Geschäftskennzahlen übersetzen. Unsere multidimensionalen KPI-Systeme ermöglichen es der C-Suite, nicht nur operative Verbesserungen zu verfolgen, sondern auch deren direkte Auswirkungen auf Geschäftsziele, Risikoprofil und Wettbewerbsposition zu verstehen.\n\n📊 Strategische KPI-Kategorien für C-Level-Reporting:\n• Financial Impact Metrics: Direkte Kosteneinsparungen, Kapitaleffizienz-Verbesserungen, ROI von Optimierungsmaßnahmen und Auswirkungen auf Cost-Income-Ratio.\n• Risk-Adjusted Performance: Verbesserung der Risiko-Rendite-Profile, Reduktion von VaR-Volatilität, Stabilität der Kapitalanforderungen und Vorhersagegenauigkeit.\n• Operational Excellence Indicators: Prozessgeschwindigkeit, Fehlerquoten, Automatisierungsgrad und Time-to-Market für neue Produkte.\n• Regulatory Confidence Metrics: Aufsichtliche Feedback-Scores, Compliance-Rating-Verbesserungen und Vorbereitung auf regulatorische Prüfungen.\n\n🎯 Operative Effizienz-Metriken:\n• Straight-Through-Processing (STP) Rate: Anteil vollautomatisierter FRTB-Berechnungen ohne manuelle Intervention.\n• Calculation Accuracy: Genauigkeit und Konsistenz der FRTB-Berechnungen über verschiedene Szenarien und Zeiträume.\n• Processing Time Optimization: Reduktion der Zeit von Handelseingabe bis zur finalen FRTB-Berechnung.\n• Exception Handling Efficiency: Geschwindigkeit und Qualität der Bearbeitung von Ausnahmen und Sonderfällen.\n\n🔄 Kontinuierliche Verbesserungs-KPIs:\n• Innovation Index: Anzahl und Erfolgsrate implementierter Verbesserungsvorschläge aus den Teams.\n• Learning Velocity: Geschwindigkeit der Kompetenzentwicklung und Wissenstransfer innerhalb der Organisation.\n• Adaptability Score: Fähigkeit zur schnellen Anpassung an neue regulatorische Anforderungen oder Marktbedingungen.\n• Cross-Functional Collaboration: Qualität und Effizienz der Zusammenarbeit zwischen verschiedenen Bereichen.\n\n📈 C-Level-Dashboard-Design von ADVISORI:\n• Executive Summary Views: Hochaggregierte Übersichten mit Trend-Analysen und Benchmark-Vergleichen für schnelle strategische Einschätzungen.\n• Drill-Down-Fähigkeiten: Möglichkeit zur detaillierten Analyse spezifischer Bereiche ohne Informationsüberflutung.\n• Predictive Analytics: Zukunftsprognosen basierend auf aktuellen Trends und geplanten Verbesserungsmaßnahmen.\n• Actionable Insights: Konkrete Handlungsempfehlungen basierend auf Datenanalysen und Best-Practice-Vergleichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie adressiert ADVISORI die Herausforderung der Wissensvermittlung zwischen verschiedenen Generationen von Mitarbeitern im FRTB-Kontext und welche innovativen Ansätze werden verwendet?",
        answer: "Die moderne Finanzbranche steht vor der einzigartigen Herausforderung, komplexes FRTB-Wissen zwischen verschiedenen Generationen zu transferieren – von erfahrenen Veteranen bis hin zu Digital Natives. ADVISORI hat innovative, generationsübergreifende Lernansätze entwickelt, die die Stärken jeder Generation nutzen und gleichzeitig Brücken zwischen unterschiedlichen Lernstilen und Technologie-Affinitäten schaffen.\n\n🌐 Generationsübergreifende Lernarchitektur:\n• Reverse Mentoring Programme: Jüngere Mitarbeiter vermitteln Digital Skills und neue Technologien, während erfahrene Kollegen Marktintuition und regulatorische Erfahrungen teilen.\n• Multi-Modal Learning Delivery: Kombination traditioneller Präsenzschulungen für erfahrene Mitarbeiter mit interaktiven digitalen Formaten für jüngere Generationen.\n• Cross-Generational Learning Teams: Bewusste Zusammenstellung altersgemischter Projektteams für komplexe FRTB-Implementierungen mit strukturiertem Wissensaustausch.\n• Adaptive Content Delivery: Automatische Anpassung von Lerninhalten an bevorzugte Lernstile und Technologie-Komfort verschiedener Altersgruppen.\n\n🎓 Innovative Wissenstransfer-Methoden:\n• Storytelling-basierte Schulungen: Erfahrene Mitarbeiter teilen Marktkrisen-Erfahrungen als Basis für FRTB-Verständnis, während jüngere Kollegen diese in moderne Datenvisualisierungen übersetzen.\n• Gamification für alle Altersgruppen: Speziell entwickelte Lernspiele, die sowohl für traditionelle als auch für spielaffine Lerntypen ansprechend sind.\n• Microlearning-Ökosysteme: Kurze, prägnante Lerneinheiten, die flexibel konsumiert werden können, unabhängig von Technologie-Präferenzen.\n• Peer-to-Peer-Wissensplattformen: Digitale Umgebungen für informellen Wissensaustausch zwischen Generationen mit moderierten Diskussionsforen.\n\n🔄 Bidirektionaler Wissenstransfer:\n• Experience Capture Workshops: Systematische Dokumentation und Digitalisierung des Erfahrungswissens langjähriger Mitarbeiter in strukturierte, durchsuchbare Wissensbasen.\n• Innovation Labs: Gemeinsame Arbeit verschiedener Generationen an zukunftsorientierten FRTB-Lösungen, bei der traditionelle Expertise auf innovative Denkansätze trifft.\n• Technology Translation Services: Unterstützung erfahrener Mitarbeiter beim Verständnis neuer FRTB-Technologien durch jüngere Kollegen als interne Technologie-Botschafter.\n• Continuous Learning Circles: Regelmäßige, strukturierte Austauschformate, die generationsübergreifendes Lernen fördern und verschiedene Perspektiven systematisch integrieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche Rolle spielt Change Management bei FRTB-Prozessoptimierungen und wie stellt ADVISORI sicher, dass neue Prozesse nachhaltig in der Organisationskultur verankert werden?",
        answer: "Erfolgreiche FRTB-Prozessoptimierung ist zu 70% Change Management und zu 30% technische Umsetzung. ADVISORI versteht, dass selbst die beste technische Lösung scheitert, wenn sie nicht von den Menschen angenommen und gelebt wird. Unser ganzheitlicher Change-Management-Ansatz transformiert nicht nur Prozesse, sondern schafft eine nachhaltige Kultur der kontinuierlichen Verbesserung und regulatorischen Exzellenz.\n\n🔄 Strategischer Change-Management-Ansatz von ADVISORI:\n• Cultural Assessment und Design: Detaillierte Analyse der bestehenden Organisationskultur und Entwicklung einer Zielkultur, die FRTB-Exzellenz unterstützt.\n• Stakeholder-Engagement-Strategie: Systematische Identifikation und Einbindung aller relevanten Interessengruppen mit maßgeschneiderten Kommunikations- und Beteiligungsformaten.\n• Change Champions Network: Aufbau eines Netzwerks interner Multiplikatoren, die als Botschafter für neue FRTB-Prozesse fungieren und Peer-to-Peer-Unterstützung bieten.\n• Resistance Management: Proaktive Identifikation und Adressierung von Widerständen durch strukturierte Dialogformate und individuelle Unterstützungsmaßnahmen.\n\n🎯 Nachhaltigkeits-Framework für kulturelle Verankerung:\n• Incentive Alignment: Integration FRTB-bezogener Ziele in Leistungsbeurteilungen und Vergütungssysteme zur Schaffung intrinsischer Motivation.\n• Success Story Amplification: Systematische Dokumentation und Kommunikation von Erfolgsgeschichten zur Stärkung positiver Assoziationen mit neuen Prozessen.\n• Continuous Feedback Loops: Etablierung regelmäßiger Feedback-Mechanismen zur frühzeitigen Identifikation von Problemen und kontinuierlichen Verbesserung.\n• Knowledge Preservation Systems: Aufbau strukturierter Wissensmanagementsysteme zur dauerhaften Sicherung und Weiterentwicklung von FRTB-Kompetenzen.\n\n🏗️ Strukturelle Verankerungs-Mechanismen:\n• Process Governance Integration: Einbettung neuer FRTB-Prozesse in bestehende Governance-Strukturen mit klaren Verantwortlichkeiten und Escalation-Pfaden.\n• Training Infrastructure: Aufbau nachhaltiger interner Schulungskapazitäten für kontinuierliche Kompetenzentwicklung ohne externe Abhängigkeiten.\n• Quality Assurance Frameworks: Implementierung systematischer Qualitätssicherungsprozesse mit regelmäßigen Reviews und Verbesserungszyklen.\n• Innovation Pipeline: Etablierung strukturierter Prozesse für die kontinuierliche Weiterentwicklung und Anpassung von FRTB-Verfahren an sich ändernde Anforderungen.\n\n🌱 Langfristige Kulturentwicklung:\n• Leadership Development: Schulung von Führungskräften in FRTB-spezifischem Change Leadership zur nachhaltigen Unterstützung der Transformation.\n• Cross-Functional Integration: Förderung bereichsübergreifender Zusammenarbeit zur Stärkung des ganzheitlichen FRTB-Verständnisses.\n• Continuous Learning Culture: Aufbau einer Lernkultur, die experimentelles Denken und kontinuierliche Verbesserung in der FRTB-Praxis fördert."
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
