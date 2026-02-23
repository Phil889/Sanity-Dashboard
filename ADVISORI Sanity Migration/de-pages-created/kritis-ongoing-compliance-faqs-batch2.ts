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
    console.log('Updating KRITIS Ongoing Compliance page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'kritis-ongoing-compliance' })
    
    if (!existingDoc) {
      throw new Error('Document "kritis-ongoing-compliance" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie können wir KRITIS Ongoing Compliance nutzen, um unsere Resilienz gegenüber Cyber-Bedrohungen zu steigern und gleichzeitig operative Effizienz zu maximieren?",
        answer: "KRITIS Ongoing Compliance bietet eine einzigartige Gelegenheit, Cyber-Resilienz und operative Effizienz als synergetische Ziele zu verfolgen. Anstatt Sicherheit als Kostenfaktor zu betrachten, ermöglicht ein strategischer Ansatz die Entwicklung einer adaptiven, lernenden Sicherheitsarchitektur, die nicht nur Bedrohungen abwehrt, sondern auch Geschäftsprozesse optimiert und Wettbewerbsvorteile schafft.\n\n🛡️ Strategische Cyber-Resilienz durch Ongoing Compliance:\n• Kontinuierliche Bedrohungsintelligenz: Permanente Überwachung und Analyse der Bedrohungslandschaft ermöglicht proaktive Anpassungen der Sicherheitsarchitektur vor dem Auftreten neuer Angriffsvektoren.\n• Adaptive Security Operations: Intelligente SOAR-Systeme (Security Orchestration, Automation and Response) automatisieren nicht nur Incident Response, sondern optimieren kontinuierlich Sicherheitsprozesse basierend auf Threat Intelligence.\n• Zero-Trust-Evolution: Kontinuierliche Compliance-Überwachung bildet die Grundlage für die schrittweise Evolution zu Zero-Trust-Architekturen ohne disruptive Systemumstellungen.\n• Resilient-by-Design: Integration von Resilienz-Prinzipien in alle Geschäftsprozesse durch kontinuierliche Compliance-Validierung.\n\n⚡ Operative Effizienzsteigerung durch intelligente Sicherheit:\n• Automatisierte Compliance-Validierung: KI-gestützte Systeme übernehmen routinemäßige Compliance-Checks und schaffen Kapazitäten für strategische Sicherheitsarbeit.\n• Integrierte Business-Security-Prozesse: Sicherheitskontrollen werden nahtlos in Geschäftsprozesse integriert und verbessern gleichzeitig Effizienz und Compliance.\n• Predictive Maintenance: Kontinuierliches Monitoring ermöglicht vorausschauende Wartung und minimiert ungeplante Ausfallzeiten.\n• Smart Resource Allocation: Datengetriebene Insights optimieren die Allokation von Sicherheitsressourcen basierend auf tatsächlichen Risikoprofilen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche Rolle spielt künstliche Intelligenz und Machine Learning in ADVISORIs KRITIS Ongoing Compliance-Ansatz?",
        answer: "Künstliche Intelligenz und Machine Learning sind zentrale Enabler für ein zukunftsfähiges KRITIS Ongoing Compliance Management. ADVISORI integriert diese Technologien strategisch, um von reaktiven, manuellen Compliance-Prozessen zu proaktiven, selbstlernenden Systemen zu transformieren, die kontinuierlich intelligenter werden und sowohl Sicherheit als auch Effizienz steigern.\n\n🤖 KI-gestützte Compliance-Innovation:\n• Predictive Threat Detection: Machine Learning-Algorithmen analysieren kontinuierlich Systemverhalten und identifizieren Anomalien oder potenzielle Bedrohungen, bevor sie sich zu kritischen Incidents entwickeln.\n• Automated Risk Assessment: KI-Systeme führen kontinuierliche Risikobewertungen durch und passen Schutzmaßnahmen dynamisch an sich verändernde Bedrohungslandschaften an.\n• Intelligent Compliance Orchestration: Automatisierte Workflows orchestrieren komplexe Compliance-Prozesse und optimieren diese basierend auf historischen Daten und Erfolgsmetriken.\n• Natural Language Processing für Regulatory Intelligence: NLP-Systeme überwachen kontinuierlich regulatorische Entwicklungen und übersetzen neue Anforderungen automatisch in konkrete Handlungsempfehlungen.\n\n🔬 ADVISORIs KI-Integration in der Praxis:\n• Adaptive Learning Systems: Unsere KI-Plattformen lernen kontinuierlich aus Ihren spezifischen Umgebungen und Anforderungen und werden dabei immer präziser in der Vorhersage und Prävention von Compliance-Risiken.\n• Explainable AI für Compliance: Wir implementieren transparente KI-Systeme, die ihre Entscheidungen nachvollziehbar erklären können – essentiell für regulatorische Akzeptanz und Audit-Zwecke.\n• Human-AI Collaboration: Unsere Systeme ergänzen menschliche Expertise, anstatt sie zu ersetzen, und schaffen Synergien zwischen KI-Effizienz und menschlicher Kreativität.\n• Continuous Model Optimization: Regelmäßige Validierung und Optimierung der KI-Modelle stellt sicher, dass sie auch bei sich wandelnden Bedrohungslagen und regulatorischen Anforderungen effektiv bleiben."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie stellt ADVISORI sicher, dass KRITIS Ongoing Compliance auch bei sich schnell wandelnden regulatorischen Anforderungen zukunftssicher bleibt?",
        answer: "Die regulatorische Landschaft im KRITIS-Bereich entwickelt sich rasant weiter, getrieben von neuen Bedrohungen, technologischen Entwicklungen und geopolitischen Veränderungen. ADVISORI hat einen adaptiven, zukunftsorientierten Ansatz entwickelt, der nicht nur aktuelle Compliance sicherstellt, sondern auch proaktiv auf kommende Anforderungen vorbereitet und kontinuierliche Anpassungsfähigkeit gewährleistet.\n\n🔮 Proaktive Regulatory Intelligence:\n• Regulatory Radar Systems: Kontinuierliche Überwachung und Analyse von regulatorischen Entwicklungen auf nationaler und internationaler Ebene, einschließlich Früherkennung von Gesetzgebungstrends.\n• Stakeholder Network: Enge Zusammenarbeit mit Regulierungsbehörden, Industrieverbänden und Standardisierungsorganisationen für privilegierte Einblicke in kommende Anforderungen.\n• Scenario Planning: Entwicklung multipler Compliance-Szenarien basierend auf wahrscheinlichen regulatorischen Entwicklungen und deren Auswirkungen auf Ihre spezifische Infrastruktur.\n• Technology Foresight: Antizipation technologischer Entwicklungen und deren regulatorischer Implikationen für rechtzeitige Systemanpassungen.\n\n🔄 Adaptive Compliance Architecture:\n• Modular System Design: Implementierung flexibler, modularer Compliance-Architekturen, die schnelle Integration neuer Anforderungen ohne grundlegende Systemüberarbeitung ermöglichen.\n• API-first Approach: Offene, API-basierte Systeme ermöglichen nahtlose Integration neuer Compliance-Module und Drittanbieter-Lösungen.\n• Continuous Compliance Framework: Etablierung eines Framework für kontinuierliche Compliance-Evolution, das regelmäßige Updates und Anpassungen als Standardprozess integriert.\n• Automated Regulatory Mapping: Intelligente Systeme, die neue regulatorische Anforderungen automatisch auf bestehende Compliance-Strukturen abbilden und Gap-Analysen erstellen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche konkreten Governance-Strukturen und KPIs empfiehlt ADVISORI für ein effektives KRITIS Ongoing Compliance Management auf C-Level?",
        answer: "Effektives KRITIS Ongoing Compliance Management erfordert robuste Governance-Strukturen und aussagekräftige KPIs, die der Führungsebene kontinuierliche Transparenz über Compliance-Status, Risikopositionen und Geschäftswertbeitrag bieten. ADVISORI entwickelt maßgeschneiderte Governance-Frameworks, die strategische Steuerung mit operativer Exzellenz verbinden und messbare Geschäftsergebnisse liefern.\n\n🏛️ Strategische Governance-Architektur:\n• Executive Compliance Committee: Quartalsweise C-Level-Committees mit strukturierten Dashboards zu Compliance-Status, Risikobewertungen und strategischen Initiativen.\n• Risk and Compliance Officer (RCO): Dedizierte Führungsposition mit direkter Berichtslinie zur Geschäftsführung und Querschnittskompetenz über alle Geschäftsbereiche.\n• Business-aligned Compliance Teams: Integration von Compliance-Verantwortlichkeiten in Geschäftsteams zur Sicherstellung operativer Relevanz und Akzeptanz.\n• Board-level Reporting: Regelmäßige, strukturierte Berichterstattung an Aufsichtsrat/Beirat mit Fokus auf strategische Risiken und Compliance-Performance.\n\n📊 C-Level KPI-Framework:\n• Compliance Effectiveness Score: Aggregierte Metrik aus Audit-Ergebnissen, Incident-Häufigkeit und Regulatorenfeedback (Ziel: >95% Compliance Rate).\n• Mean Time to Compliance (MTTC): Durchschnittliche Zeit von Identifikation neuer Anforderungen bis zur vollständigen Implementierung (Benchmark: <90 Tage).\n• Business Continuity Index: Verfügbarkeit kritischer Services unter Berücksichtigung geplanter und ungeplanter Ausfälle (Ziel: >99.9% Uptime).\n• Return on Compliance Investment (ROCI): Verhältnis von vermiedenen Risiken/Kosten zu Compliance-Investitionen (Benchmark: ROI >300%).\n• Regulatory Readiness Score: Proaktive Vorbereitung auf bekannte kommende Anforderungen (Ziel: 100% Readiness 6 Monate vor Inkrafttreten)."
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
