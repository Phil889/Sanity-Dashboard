import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}

const run = async () => {
  try {
    console.log('Updating ISO 27001 Checkliste page with FAQ batch 4...')
    
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-checkliste' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-checkliste" not found')
    }
    
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Wie können Checklisten bei der ISO 27001 Risikobewertung und -behandlung unterstützen?',
        answer: "ISO 27001 Checklisten sind unverzichtbare Instrumente für systematische Risikobewertung und strukturierte Risikobehandlung. Sie gewährleisten methodische Herangehensweise, vollständige Risikoabdeckung und konsistente Bewertungsstandards für nachhaltige Informationssicherheit.\n\n🎯 Systematische Risikoidentifikation:\n• Strukturierte Asset-Inventarisierung mit vollständiger Erfassung aller Informationswerte\n• Threat-Katalog-Integration für umfassende Bedrohungsanalyse\n• Vulnerability-Assessment-Checklisten für systematische Schwachstellenidentifikation\n• Stakeholder-basierte Risikosammlung durch strukturierte Interviews\n• Szenario-basierte Risikomodellierung für realistische Bewertungen\n\n📊 Quantitative Risikobewertung:\n• Standardisierte Bewertungsskalen für konsistente Risikoquantifizierung\n• Impact-Assessment-Checklisten für systematische Auswirkungsanalyse\n• Likelihood-Bewertungsframeworks für objektive Wahrscheinlichkeitseinschätzung\n• Risk-Matrix-Integration für visuelle Risikokategorisierung\n• Monte-Carlo-Simulation-Support für statistische Risikoanalyse\n\n🛡️ Strukturierte Risikobehandlung:\n• Treatment-Option-Checklisten für systematische Maßnahmenauswahl\n• Cost-Benefit-Analyse-Tools für optimale Investitionsentscheidungen\n• Implementation-Roadmaps für priorisierte Risikobehandlung\n• Residual-Risk-Assessment für verbleibende Risikobewertung\n• Acceptance-Criteria-Validation für Risikoakzeptanz-Entscheidungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Welche Rolle spielen Checklisten bei der ISO 27001 Incident Response und Business Continuity?',
        answer: "Checklisten sind kritische Komponenten für effektive Incident Response und Business Continuity Management im ISO 27001 Kontext. Sie gewährleisten strukturierte Reaktionen, minimieren Response-Zeiten und sichern systematische Wiederherstellung der Geschäftskontinuität.\n\n🚨 Incident Detection und Classification:\n• Event-Monitoring-Checklisten für systematische Anomalie-Erkennung\n• Incident-Classification-Frameworks für konsistente Kategorisierung\n• Severity-Assessment-Tools für objektive Prioritätsbewertung\n• Escalation-Trigger-Checklisten für automatisierte Eskalationsprozesse\n• Stakeholder-Notification-Protocols für strukturierte Kommunikation\n\n⚡ Response und Containment:\n• Immediate-Response-Checklisten für schnelle Erstmaßnahmen\n• Containment-Strategy-Selection für situationsgerechte Eindämmung\n• Evidence-Preservation-Protocols für forensische Untersuchungen\n• Communication-Management-Checklisten für interne und externe Kommunikation\n• Resource-Mobilization-Frameworks für effiziente Ressourcenallokation\n\n🔄 Recovery und Lessons Learned:\n• System-Recovery-Checklisten für systematische Wiederherstellung\n• Business-Impact-Assessment für Auswirkungsanalyse\n• Post-Incident-Review-Protocols für strukturierte Nachbereitung\n• Improvement-Implementation-Tracking für kontinuierliche Optimierung\n• Documentation-Requirements für vollständige Incident-Dokumentation"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Wie unterstützen Checklisten die ISO 27001 Supplier Security und Third-Party Risk Management?',
        answer: "ISO 27001 Checklisten sind essentiell für systematisches Supplier Security Management und strukturiertes Third-Party Risk Management. Sie gewährleisten vollständige Vendor-Bewertung, kontinuierliche Überwachung und effektive Risikominimierung in der Lieferkette.\n\n🔍 Supplier Security Assessment:\n• Vendor-Evaluation-Checklisten für umfassende Sicherheitsbewertung\n• Due-Diligence-Frameworks für systematische Lieferantenprüfung\n• Security-Questionnaire-Templates für standardisierte Informationssammlung\n• Certification-Validation-Checklisten für Compliance-Verifizierung\n• On-Site-Assessment-Protocols für physische Sicherheitsvalidierung\n\n📋 Contract Security Requirements:\n• Security-Clause-Checklisten für vollständige Vertragsabsicherung\n• SLA-Definition-Frameworks für messbare Sicherheitsanforderungen\n• Liability-Assessment-Tools für Risiko- und Haftungsverteilung\n• Termination-Procedure-Checklisten für sichere Vertragsbeendigung\n• Audit-Rights-Integration für kontinuierliche Überwachungsrechte\n\n🔄 Ongoing Monitoring und Management:\n• Performance-Monitoring-Checklisten für kontinuierliche Supplier-Überwachung\n• Incident-Response-Coordination für gemeinsame Störungsbearbeitung\n• Change-Management-Protocols für Supplier-Änderungen\n• Regular-Review-Cycles für periodische Sicherheitsbewertungen\n• Exit-Strategy-Planning für strukturierte Supplier-Transition"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Welche Best Practices gibt es für die Implementierung und Wartung von ISO 27001 Checklisten?',
        answer: "Erfolgreiche Implementierung und nachhaltige Wartung von ISO 27001 Checklisten erfordern strukturierte Herangehensweise, kontinuierliche Optimierung und systematische Governance. Best Practices gewährleisten maximale Effizienz und langfristige Wirksamkeit der Checklisten-Systeme.\n\n🎯 Strategic Implementation Planning:\n• Phased-Rollout-Strategies für schrittweise Checklisten-Einführung\n• Stakeholder-Engagement-Programs für breite Akzeptanz und Adoption\n• Training-and-Awareness-Campaigns für effektive Nutzung\n• Change-Management-Integration für kulturelle Transformation\n• Success-Metrics-Definition für messbare Implementierungserfolge\n\n🔄 Continuous Improvement Processes:\n• Regular-Review-Cycles für systematische Checklisten-Optimierung\n• User-Feedback-Integration für praxisorientierte Verbesserungen\n• Performance-Analytics für datengetriebene Optimierungsentscheidungen\n• Benchmark-Comparisons für Best-Practice-Adoption\n• Innovation-Integration für moderne Technologie-Adoption\n\n🛡️ Quality Assurance und Governance:\n• Version-Control-Systems für systematische Checklisten-Verwaltung\n• Approval-Workflows für qualitätsgesicherte Änderungen\n• Access-Control-Management für sichere Checklisten-Administration\n• Backup-and-Recovery-Procedures für Geschäftskontinuität\n• Compliance-Monitoring für kontinuierliche Standardkonformität"
      }
    ]
    
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQ batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
