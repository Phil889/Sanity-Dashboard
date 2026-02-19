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
    console.log('Updating DORA Compliance Checkliste page with FAQ batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-compliance-checkliste' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-compliance-checkliste" not found')
    }
    
    // Create new FAQs for documentation and reporting requirements
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Welche Dokumentations- und Berichtspflichten müssen in DORA-Compliance-Checklisten systematisch erfasst werden?',
        answer: "DORA-konforme Dokumentation und Berichterstattung erfordern umfassende, strukturierte Checklisten, die alle regulatorischen Anforderungen systematisch abdecken. Die Dokumentationsstrategie muss sowohl interne Governance als auch externe Compliance-Nachweise gewährleisten.\n\n📋 Dokumentationsframework und -standards:\n• Entwicklung umfassender Dokumentationsrichtlinien mit klaren Standards für Format, Inhalt und Versionskontrolle\n• Etablierung zentraler Dokumentenmanagement-Systeme mit angemessenen Access Controls und Audit Trails\n• Implementation von Dokumentations-Templates für konsistente und vollständige Erfassung aller relevanten Informationen\n• Sicherstellung regelmäßiger Review-Zyklen und Update-Prozesse für alle kritischen Dokumente\n• Integration von Dokumentationsanforderungen in alle relevanten Geschäftsprozesse und Workflows\n\n📊 Regulatorische Berichterstattung und Compliance-Nachweise:\n• Entwicklung automatisierter Reporting-Systeme für zeitgerechte und akkurate regulatorische Meldungen\n• Etablierung von Data Quality-Kontrollen und Validierungsprozessen für alle Berichtsdaten\n• Implementation von Backup-Reporting-Mechanismen für kritische regulatorische Deadlines\n• Sicherstellung angemessener Dokumentation aller Reporting-Prozesse und -Entscheidungen\n• Integration von Regulatory Change Management-Prozessen für sich ändernde Berichtsanforderungen\n\n🔍 Audit-Dokumentation und Evidence Management:\n• Entwicklung umfassender Audit-Trail-Systeme für alle kritischen Compliance-Aktivitäten\n• Etablierung von Evidence-Collection und -Preservation-Prozessen für regulatorische Prüfungen\n• Implementation von Dokumentations-Checklisten für alle Audit-relevanten Bereiche\n• Sicherstellung angemessener Retention-Policies und Archivierungsstrategien für Compliance-Dokumente\n• Integration von Continuous Audit-Readiness in tägliche Betriebsprozesse\n\n📈 Performance-Monitoring und Management-Reporting:\n• Entwicklung aussagekräftiger KPIs und Metriken für alle DORA-Compliance-Bereiche\n• Implementation von Management-Dashboards für Real-Time-Visibility in Compliance-Status\n• Etablierung regelmäßiger Management-Reports mit Trend-Analysen und Forecasting\n• Sicherstellung angemessener Eskalations- und Exception-Reporting-Mechanismen\n• Integration von Compliance-Reporting in strategische Geschäftsentscheidungsprozesse"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Wie entwickle ich Checklisten für die Bewertung und Implementierung von Change Management-Prozessen unter DORA?',
        answer: "Change Management unter DORA erfordert robuste, strukturierte Checklisten, die sowohl technische Änderungen als auch organisatorische Anpassungen systematisch verwalten. Die Prozesse müssen Risikominimierung und Compliance-Kontinuität gewährleisten.\n\n🔄 Change Management-Framework und Governance:\n• Etablierung umfassender Change Advisory Boards mit klaren Mandaten und Entscheidungsbefugnissen\n• Entwicklung risiko-basierter Change-Kategorisierung mit entsprechenden Genehmigungsprozessen\n• Implementation von Change-Impact-Assessment-Prozessen für alle kritischen Systemänderungen\n• Sicherstellung angemessener Stakeholder-Engagement und Kommunikationsstrategien\n• Integration von Compliance-Überlegungen in alle Change-Entscheidungsprozesse\n\n🧪 Testing und Validierung von Changes:\n• Entwicklung umfassender Testing-Strategien für verschiedene Change-Kategorien und -Komplexitäten\n• Implementation von Rollback-Plänen und Recovery-Strategien für alle kritischen Changes\n• Etablierung von User Acceptance Testing und Business Validation-Prozessen\n• Sicherstellung angemessener Performance- und Security-Testing für alle technischen Changes\n• Integration von Automated Testing wo möglich zur Erhöhung der Effizienz und Konsistenz\n\n📊 Change-Monitoring und Post-Implementation-Reviews:\n• Implementation kontinuierlicher Monitoring-Prozesse für alle implementierten Changes\n• Entwicklung von Success-Kriterien und Metriken zur Bewertung von Change-Erfolg\n• Etablierung von Post-Implementation-Review-Prozessen zur Identifikation von Lessons Learned\n• Sicherstellung angemessener Dokumentation aller Change-Aktivitäten und -Ergebnisse\n• Integration von Change-Performance-Daten in kontinuierliche Verbesserungsprozesse\n\n🚨 Emergency Change Management und Crisis Response:\n• Entwicklung spezialisierter Emergency Change-Prozesse für kritische Situationen\n• Implementation von Expedited Approval-Mechanismen für Security-kritische Changes\n• Etablierung von Crisis Communication-Strategien für Change-bezogene Incidents\n• Sicherstellung angemessener Post-Crisis-Reviews und Process-Improvements\n• Integration von Emergency Change-Learnings in reguläre Change Management-Prozesse"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Welche spezifischen Checklisten sind für die Bewertung von Vendor Management und Supply Chain-Resilienz unter DORA erforderlich?',
        answer: "Vendor Management und Supply Chain-Resilienz unter DORA erfordern umfassende, mehrdimensionale Checklisten, die komplexe Abhängigkeiten und Risiken systematisch adressieren. Die Bewertung muss sowohl direkte als auch indirekte Vendor-Beziehungen berücksichtigen.\n\n🔍 Vendor-Assessment und Due Diligence:\n• Entwicklung umfassender Vendor-Bewertungsframeworks mit spezifischen DORA-Compliance-Kriterien\n• Implementation von Financial Stability und Business Continuity-Assessments für alle kritischen Vendors\n• Etablierung von Cybersecurity und Data Protection-Evaluationen für alle IKT-Service-Provider\n• Sicherstellung angemessener Regulatory Compliance und Audit-Fähigkeiten bei Vendors\n• Integration von Geopolitical Risk und Regulatory Environment-Bewertungen\n\n📋 Vertragsmanagement und SLA-Governance:\n• Integration spezifischer DORA-Compliance-Klauseln in alle kritischen Vendor-Verträge\n• Entwicklung aussagekräftiger Service Level Agreements mit messbaren Performance-Indikatoren\n• Implementation von Right-to-Audit und Transparency-Anforderungen in Vertragsstrukturen\n• Etablierung klarer Termination-Klauseln und Transition-Support-Verpflichtungen\n• Sicherstellung angemessener Liability und Insurance-Coverage für alle kritischen Services\n\n🌐 Supply Chain-Mapping und Dependency-Management:\n• Entwicklung umfassender Supply Chain-Maps mit Visibility in Sub-Contractor-Beziehungen\n• Implementation von Concentration Risk-Assessments und Diversification-Strategien\n• Etablierung von Single Point of Failure-Analysen und Mitigation-Strategien\n• Sicherstellung angemessener Geographic Diversification und Regulatory Arbitrage-Vermeidung\n• Integration von Supply Chain-Intelligence in strategische Sourcing-Entscheidungen\n\n🔄 Kontinuierliche Vendor-Überwachung und Performance-Management:\n• Implementation kontinuierlicher Vendor-Performance-Monitoring mit Real-Time-Dashboards\n• Entwicklung von Vendor-Scorecards und Benchmarking-Programmen\n• Etablierung regelmäßiger Vendor-Reviews und Relationship-Management-Prozesse\n• Sicherstellung effektiver Incident-Management-Koordination mit allen kritischen Vendors\n• Integration von Vendor-Performance-Daten in strategische Sourcing- und Renewal-Entscheidungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie strukturiere ich Checklisten für die Bewertung der Compliance-Kultur und Human Factors unter DORA?',
        answer: "Compliance-Kultur und Human Factors sind kritische Erfolgsfaktoren für nachhaltige DORA-Compliance und erfordern spezialisierte Checklisten, die sowohl quantitative als auch qualitative Bewertungsmethoden integrieren. Die Bewertung muss organisationsweite kulturelle Aspekte systematisch erfassen.\n\n👥 Organisationskultur und Compliance-Mindset:\n• Entwicklung von Culture-Assessment-Tools zur Bewertung der organisationsweiten Compliance-Einstellung\n• Implementation von Employee-Surveys und Feedback-Mechanismen zur Messung von Compliance-Awareness\n• Etablierung von Behavioral Indicators und Observable Actions zur Bewertung gelebter Compliance-Kultur\n• Sicherstellung angemessener Leadership-Commitment und Tone-at-the-Top für Compliance-Prioritäten\n• Integration von Compliance-Kultur-Metriken in Performance-Management und Incentive-Systeme\n\n📚 Training und Competency-Management:\n• Entwicklung umfassender DORA-Training-Programme für alle relevanten Rollen und Funktionen\n• Implementation von Competency-Frameworks mit klaren Skill-Requirements für IKT-Risiko-Rollen\n• Etablierung regelmäßiger Training-Assessments und Certification-Programme\n• Sicherstellung angemessener Onboarding-Prozesse für neue Mitarbeiter in kritischen Rollen\n• Integration von Continuous Learning und Professional Development in Karriereentwicklung\n\n🎯 Accountability und Performance-Management:\n• Entwicklung klarer Accountability-Frameworks mit individuellen Compliance-Verantwortlichkeiten\n• Implementation von Compliance-KPIs in individuelle und Team-Performance-Bewertungen\n• Etablierung von Incentive-Strukturen zur Förderung proaktiver Compliance-Verhaltensweisen\n• Sicherstellung angemessener Consequence-Management für Compliance-Verstöße\n• Integration von Compliance-Performance in Succession-Planning und Talent-Management\n\n🔄 Kontinuierliche Kultur-Entwicklung und -Verbesserung:\n• Implementation regelmäßiger Culture-Pulse-Surveys und Trend-Analysen\n• Entwicklung von Culture-Change-Programmen basierend auf identifizierten Verbesserungsbereichen\n• Etablierung von Best-Practice-Sharing und Cross-Functional-Learning-Initiativen\n• Sicherstellung angemessener Recognition und Reward-Programme für Compliance-Excellence\n• Integration von Culture-Development in strategische Organisationsentwicklung"
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
    console.log('✅ FAQ batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
