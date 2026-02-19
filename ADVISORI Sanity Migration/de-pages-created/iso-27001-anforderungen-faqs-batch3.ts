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
    console.log('Updating ISO 27001 Anforderungen page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-anforderungen' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-anforderungen" not found')
    }
    
    // Create new FAQs for ISO 27001 operational and audit aspects
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Welche operativen Anforderungen stellt ISO 27001 an den täglichen ISMS-Betrieb?',
        answer: "Die operativen Anforderungen der ISO 27001 für den täglichen ISMS-Betrieb sind umfassend und erfordern systematische Prozesse, die eine kontinuierliche und effektive Informationssicherheit gewährleisten. Diese Anforderungen transformieren strategische Sicherheitsziele in praktische, messbare Aktivitäten.\n\n🔄 Kontinuierliche Betriebsprozesse:\n• Etablierung systematischer Überwachungsprozesse für alle kritischen Sicherheitskontrollen und deren kontinuierliche Funktionsfähigkeit\n• Implementierung regelmäßiger Sicherheitsüberprüfungen und Assessments zur Validierung der Kontrollwirksamkeit\n• Aufbau proaktiver Wartungs- und Aktualisierungsprozesse für alle sicherheitsrelevanten Systeme und Technologien\n• Durchführung systematischer Vulnerability Management Aktivitäten zur rechtzeitigen Identifikation und Behandlung von Schwachstellen\n• Etablierung kontinuierlicher Backup- und Recovery-Prozesse zur Sicherstellung der Geschäftskontinuität\n\n📊 Performance-Monitoring und Messung:\n• Implementierung umfassender KPI-Systeme zur objektiven Bewertung der ISMS-Performance und Zielerreichung\n• Aufbau automatisierter Monitoring-Dashboards für Echtzeit-Übersicht über kritische Sicherheitsparameter\n• Durchführung regelmäßiger Trend-Analysen zur Identifikation von Mustern und Entwicklungen in der Sicherheitslandschaft\n• Etablierung von Schwellenwert-basierten Alarmsystemen für proaktive Reaktion auf kritische Ereignisse\n• Entwicklung aussagekräftiger Berichterstattung für verschiedene Stakeholder-Gruppen und Management-Ebenen\n\n🚨 Incident Management und Response:\n• Aufbau strukturierter Incident Response Prozesse mit klaren Eskalationswegen und Verantwortlichkeiten\n• Implementierung von 24/7 Monitoring-Capabilities für kritische Systeme und Infrastrukturen\n• Etablierung forensischer Capabilities zur detaillierten Analyse von Sicherheitsvorfällen\n• Durchführung regelmäßiger Incident Response Übungen zur Validierung der Reaktionsfähigkeit\n• Aufbau systematischer Lessons Learned Prozesse zur kontinuierlichen Verbesserung der Response-Capabilities"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Wie werden Change Management Anforderungen nach ISO 27001 systematisch implementiert?',
        answer: "Change Management ist ein kritischer Aspekt der ISO 27001 Anforderungen, der sicherstellt, dass alle Änderungen an Systemen, Prozessen und der Organisation selbst kontrolliert und sicher durchgeführt werden. Ein systematischer Ansatz minimiert Risiken und erhält die Integrität des ISMS.\n\n📋 Strukturierter Change-Prozess:\n• Etablierung eines formalen Change Management Prozesses mit klaren Phasen von der Initiierung bis zur Implementierung und Nachverfolgung\n• Implementierung eines Change Advisory Board mit Vertretern aus verschiedenen Fachbereichen für fundierte Entscheidungsfindung\n• Aufbau systematischer Change-Kategorisierung zur risikoadäquaten Behandlung verschiedener Änderungstypen\n• Entwicklung standardisierter Change-Templates und Dokumentationsanforderungen für konsistente Prozessabwicklung\n• Integration von Emergency Change Prozessen für kritische, zeitkritische Änderungen mit entsprechenden Kontrollen\n\n🔍 Risikobewertung und Impact-Analyse:\n• Durchführung systematischer Risikobewertungen für alle geplanten Änderungen unter Berücksichtigung von Sicherheits-, Compliance- und Betriebsaspekten\n• Implementierung detaillierter Impact-Analysen zur Bewertung der Auswirkungen auf bestehende Kontrollmaßnahmen und Sicherheitsarchitekturen\n• Berücksichtigung von Abhängigkeiten zwischen verschiedenen Systemen und Prozessen bei der Change-Bewertung\n• Aufbau von Change-Simulation und Testing-Umgebungen zur Validierung von Änderungen vor der Produktionsimplementierung\n• Etablierung von Rollback-Strategien und Contingency-Plänen für den Fall unerwarteter Probleme\n\n✅ Genehmigung und Autorisierung:\n• Implementierung mehrstufiger Genehmigungsprozesse basierend auf Risikobewertung und Change-Kategorisierung\n• Aufbau klarer Autorisierungsmatrizen mit definierten Entscheidungsbefugnissen für verschiedene Change-Typen\n• Integration von Sicherheits- und Compliance-Reviews in den Genehmigungsprozess\n• Etablierung von Peer-Review-Prozessen für technische Änderungen zur Qualitätssicherung\n• Dokumentation aller Genehmigungsentscheidungen und deren Begründung für Audit-Zwecke"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Welche Audit-Anforderungen definiert ISO 27001 und wie wird ein effektives internes Audit-Programm aufgebaut?',
        answer: "Die Audit-Anforderungen der ISO 27001 sind fundamental für die kontinuierliche Verbesserung und Compliance-Sicherung des ISMS. Ein effektives internes Audit-Programm geht über reine Compliance-Prüfungen hinaus und wird zu einem strategischen Instrument für Organisationsentwicklung.\n\n🎯 Systematische Audit-Planung:\n• Entwicklung einer umfassenden Audit-Strategie, die alle ISMS-Bereiche systematisch und risikoorientiert abdeckt\n• Aufbau eines mehrjährigen Audit-Plans mit angemessener Frequenz basierend auf Risikobewertung und Kritikalität der Bereiche\n• Integration verschiedener Audit-Typen wie Compliance-Audits, Performance-Audits und Effectiveness-Audits\n• Berücksichtigung externer Faktoren wie regulatorische Änderungen und Bedrohungsentwicklungen in der Audit-Planung\n• Koordination mit externen Audits und Zertifizierungszyklen zur Maximierung der Effizienz\n\n👥 Auditor-Qualifikation und Unabhängigkeit:\n• Etablierung klarer Qualifikationsanforderungen für interne Auditoren einschließlich fachlicher und methodischer Kompetenzen\n• Implementierung kontinuierlicher Weiterbildungsprogramme zur Aufrechterhaltung und Entwicklung der Auditor-Kompetenzen\n• Sicherstellung der Unabhängigkeit von Auditoren durch organisatorische Trennung und Interessenkonflikt-Management\n• Aufbau eines Pools qualifizierter Auditoren mit verschiedenen Fachspezialisierungen\n• Integration externer Audit-Expertise für spezielle Themenbereiche oder objektive Perspektiven\n\n📊 Audit-Durchführung und Methodik:\n• Entwicklung standardisierter Audit-Methodiken und Checklisten für konsistente und umfassende Prüfungen\n• Implementierung risikobasierter Audit-Ansätze mit Fokus auf kritische Kontrollbereiche\n• Aufbau systematischer Evidenz-Sammlung und Dokumentationsprozesse\n• Durchführung von Interviews, Dokumentenprüfungen und praktischen Tests zur umfassenden Bewertung\n• Integration von Continuous Auditing Technologien für Echtzeit-Überwachung kritischer Kontrollen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Wie werden Schulungs- und Sensibilisierungsanforderungen der ISO 27001 strategisch umgesetzt?',
        answer: "Die Schulungs- und Sensibilisierungsanforderungen der ISO 27001 sind entscheidend für den nachhaltigen Erfolg eines ISMS, da sie das menschliche Element der Informationssicherheit adressieren. Eine strategische Herangehensweise transformiert Compliance-Verpflichtungen in eine starke Sicherheitskultur.\n\n🎓 Strategische Kompetenzentwicklung:\n• Entwicklung einer umfassenden Kompetenz-Landkarte, die alle ISMS-relevanten Rollen und deren spezifische Qualifikationsanforderungen systematisch erfasst\n• Aufbau rollenspezifischer Lernpfade mit progressiven Qualifikationsstufen von Grundlagen bis zu Expertenwissen\n• Integration von Informationssicherheit in bestehende Personalentwicklungsprogramme und Karrierewege\n• Etablierung von Mentoring- und Coaching-Programmen für kritische Sicherheitsrollen\n• Berücksichtigung zukünftiger Technologie- und Bedrohungsentwicklungen in der langfristigen Kompetenzplanung\n\n📚 Zielgruppenspezifische Schulungsprogramme:\n• Entwicklung differenzierter Schulungskonzepte für verschiedene Organisationsebenen von Führungskräften bis zu operativen Mitarbeitern\n• Aufbau spezialisierter Programme für Hochrisiko-Bereiche wie IT-Administration, Datenverarbeitung und externe Zugriffe\n• Implementation interaktiver und praxisorientierter Schulungsformate wie Simulationen, Workshops und Hands-on-Training\n• Integration von E-Learning-Plattformen für flexible und skalierbare Wissensvermittlung\n• Berücksichtigung verschiedener Lernstile und kultureller Hintergründe in der Schulungsgestaltung\n\n🔄 Kontinuierliche Sensibilisierung:\n• Aufbau systematischer Awareness-Kampagnen mit regelmäßigen, thematisch fokussierten Kommunikationsmaßnahmen\n• Implementation von Phishing-Simulationen und anderen praktischen Sicherheitstests zur Bewusstseinsschärfung\n• Entwicklung interner Kommunikationskanäle wie Security Newsletters, Intranet-Portale und Awareness-Events\n• Integration von Gamification-Elementen zur Steigerung der Engagement und Lernmotivation\n• Aufbau von Feedback-Mechanismen zur kontinuierlichen Verbesserung der Sensibilisierungsmaßnahmen"
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
    console.log('✅ FAQ batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
