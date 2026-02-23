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
    console.log('Updating Business Continuity Management page with FAQ batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'was-ist-business-continuity-management' })
    
    if (!existingDoc) {
      throw new Error('Document "was-ist-business-continuity-management" not found')
    }
    
    // Create new FAQs for testing, training and continuous improvement
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Wie führt man effektive BCM-Tests und Übungen durch und was sind die verschiedenen Testarten?',
        answer: "Effektive BCM-Tests und Übungen sind entscheidend für die Validierung und kontinuierliche Verbesserung von Kontinuitätsplänen. Ein strukturiertes Testing-Programm gewährleistet, dass BCM-Fähigkeiten unter realistischen Bedingungen funktionieren und identifiziert Verbesserungspotenziale bevor echte Störungen auftreten.\n\n📋 Tabletop-Übungen und Diskussionsrunden:\n• Strukturierte Diskussionen von Störungsszenarien mit allen relevanten Stakeholdern in einem kontrollierten Umfeld\n• Durcharbeitung von Kontinuitätsplänen und Entscheidungsprozessen ohne operative Unterbrechungen\n• Identifikation von Wissenslücken, Kommunikationsproblemen und Verbesserungspotenzialen\n• Kostengünstige Methode zur regelmäßigen Validierung von BCM-Verfahren und Teamkompetenzen\n• Aufbau von BCM-Awareness und Schulung von Mitarbeitern in Kontinuitätsverfahren\n\n🔧 Funktionale Tests und Systemvalidierung:\n• Gezielte Tests spezifischer BCM-Komponenten wie Backup-Systeme, alternative Arbeitsplätze oder Kommunikationssysteme\n• Validierung technischer Recovery-Verfahren und Systemwiederherstellungszeiten\n• Tests von Datenwiederherstellung und Systemintegrität nach simulierten Ausfällen\n• Überprüfung der Funktionsfähigkeit von Notfall-Infrastrukturen und Backup-Standorten\n• Messung tatsächlicher Recovery-Zeiten im Vergleich zu definierten RTOs und RPOs\n\n🎭 Vollständige Simulationsübungen:\n• Realistische Simulation kompletter Störungsszenarien mit allen beteiligten Teams und Systemen\n• Test der gesamten Incident Response und Recovery-Kette unter zeitkritischen Bedingungen\n• Aktivierung alternativer Arbeitsplätze und Umschaltung auf Backup-Systeme\n• Koordination zwischen verschiedenen Teams, Standorten und externen Dienstleistern\n• Bewertung der Wirksamkeit von Kommunikationsstrategien und Stakeholder-Management\n\n📊 Strukturierte Testplanung und Durchführung:\n• Entwicklung eines jährlichen Testing-Kalenders mit verschiedenen Testarten und Schwerpunkten\n• Definition klarer Testziele, Erfolgskriterien und Messmethoden für jede Übung\n• Berücksichtigung verschiedener Störungsszenarien und Eskalationsstufen in der Testplanung\n• Integration von Lessons Learned aus vorherigen Tests und realen Störungen\n• Koordination mit anderen Organisationsbereichen zur Minimierung von Geschäftsunterbrechungen\n\n🔍 Evaluation und kontinuierliche Verbesserung:\n• Systematische Dokumentation und Analyse aller Testergebnisse und identifizierten Schwachstellen\n• Entwicklung von Verbesserungsmaßnahmen und deren Integration in BCM-Pläne und Verfahren\n• Tracking der Umsetzung von Verbesserungsmaßnahmen und deren Wirksamkeit\n• Benchmarking der BCM-Performance gegen interne Ziele und externe Standards\n• Regelmäßige Anpassung der Teststrategien basierend auf veränderten Geschäftsanforderungen und Risiken"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Welche Schulungs- und Awareness-Programme sind für erfolgreiches BCM erforderlich?',
        answer: "Umfassende Schulungs- und Awareness-Programme sind fundamental für den Erfolg von Business Continuity Management, da sie sicherstellen, dass alle Mitarbeiter ihre Rollen und Verantwortlichkeiten verstehen und effektiv handeln können. Ein strukturiertes Bildungsprogramm schafft eine Resilienz-Kultur und befähigt die Organisation zur schnellen und koordinierten Response.\n\n🎯 Zielgruppenspezifische Schulungsansätze:\n• Entwicklung differenzierter Schulungsprogramme für verschiedene Rollen und Verantwortungsebenen\n• Executive-Level Training für Führungskräfte zu strategischen BCM-Aspekten und Entscheidungsfindung\n• Spezialisierte Schulungen für BCM-Teams und Incident Response Koordinatoren\n• Allgemeine Awareness-Programme für alle Mitarbeiter zu grundlegenden BCM-Prinzipien\n• Technische Schulungen für IT-Teams zu Disaster Recovery und Systemwiederherstellung\n\n📚 Umfassende Schulungsinhalte und Methoden:\n• Grundlagen des Business Continuity Managements und organisationsspezifische BCM-Strategien\n• Detaillierte Schulung zu Kontinuitätsplänen, Eskalationsverfahren und Kommunikationsprotokollen\n• Praktische Übungen und Simulationen zur Anwendung von BCM-Verfahren\n• Schulung zu spezifischen Tools, Systemen und Technologien für Kontinuitätsmanagement\n• Integration von Lessons Learned aus Tests, Übungen und realen Störungen\n\n🔄 Kontinuierliche Bildung und Kompetenzentwicklung:\n• Etablierung regelmäßiger Auffrischungsschulungen und Updates zu BCM-Verfahren\n• Integration von BCM-Themen in bestehende Mitarbeiterentwicklungsprogramme\n• Aufbau interner BCM-Expertise durch Zertifizierungsprogramme und Fachausbildungen\n• Mentoring und Knowledge Transfer zwischen erfahrenen und neuen BCM-Teammitgliedern\n• Teilnahme an externen BCM-Konferenzen, Workshops und Branchennetzwerken\n\n📱 Moderne Schulungsmethoden und Technologien:\n• E-Learning-Plattformen für flexible und skalierbare BCM-Schulungen\n• Virtual Reality und Simulationstechnologien für realistische Übungsszenarien\n• Mobile Learning Apps für Just-in-Time Zugriff auf BCM-Informationen und Verfahren\n• Gamification-Ansätze zur Steigerung von Engagement und Lerneffektivität\n• Social Learning Plattformen für Erfahrungsaustausch und kollaboratives Lernen\n\n🎪 Awareness-Kampagnen und Kulturentwicklung:\n• Regelmäßige Kommunikationskampagnen zur Sensibilisierung für BCM-Themen\n• Integration von BCM-Botschaften in interne Kommunikationskanäle und Events\n• Anerkennung und Belohnung von BCM-Engagement und Best Practices\n• Aufbau von BCM-Champions und Multiplikatoren in verschiedenen Geschäftsbereichen\n• Messung und Monitoring von BCM-Awareness durch Umfragen und Assessments"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Wie misst und überwacht man die Wirksamkeit von Business Continuity Management?',
        answer: "Die Messung und Überwachung der BCM-Wirksamkeit ist entscheidend für kontinuierliche Verbesserung und Nachweis des Geschäftswerts. Ein umfassendes Performance Management System kombiniert quantitative Metriken mit qualitativen Bewertungen und ermöglicht datenbasierte Entscheidungen zur Optimierung der Resilienz-Fähigkeiten.\n\n📊 Key Performance Indicators und Metriken:\n• Recovery Time Actual vs. Recovery Time Objective für kritische Geschäftsprozesse\n• Recovery Point Actual vs. Recovery Point Objective für Datenwiederherstellung\n• Anzahl und Dauer von Geschäftsunterbrechungen sowie deren finanzielle Auswirkungen\n• Erfolgsrate von BCM-Tests und Übungen sowie Identifikation von Verbesserungspotenzialen\n• BCM-Awareness-Level und Schulungsabschlussraten in der gesamten Organisation\n\n🔍 Kontinuierliches Monitoring und Frühwarnsysteme:\n• Real-time Überwachung kritischer Systeme, Prozesse und externer Abhängigkeiten\n• Automatisierte Alerts und Benachrichtigungen bei Abweichungen von normalen Betriebsparametern\n• Trend-Analyse von Risikoindikatoren und Störungsmustern\n• Integration von externen Threat Intelligence und Risikoinformationen\n• Dashboard-basierte Visualisierung von BCM-Status und Performance-Indikatoren\n\n📈 Regelmäßige Assessments und Audits:\n• Jährliche BCM-Maturity-Assessments zur Bewertung der Gesamtreife der Organisation\n• Interne Audits zur Überprüfung der Compliance mit BCM-Standards und Verfahren\n• Externe Validierung durch unabhängige BCM-Experten oder Zertifizierungsstellen\n• Benchmarking gegen Branchenstandards und Best Practices\n• Gap-Analysen zur Identifikation von Verbesserungspotenzialen und Investitionsprioritäten\n\n💰 Geschäftswert und ROI-Messung:\n• Quantifizierung vermiedener Verluste durch effektive BCM-Maßnahmen\n• Kosteneinsparungen durch reduzierte Ausfallzeiten und verbesserte Recovery-Fähigkeiten\n• Positive Auswirkungen auf Versicherungsprämien und Kreditkonditionen\n• Wettbewerbsvorteile durch demonstrierte Resilienz und Zuverlässigkeit\n• Kundenzufriedenheit und Vertrauen als Folge zuverlässiger Geschäftskontinuität\n\n🔄 Kontinuierliche Verbesserung und Anpassung:\n• Systematische Analyse von Performance-Daten zur Identifikation von Trends und Mustern\n• Entwicklung und Umsetzung von Verbesserungsmaßnahmen basierend auf Messergebnissen\n• Anpassung von BCM-Strategien und Zielen basierend auf veränderten Geschäftsanforderungen\n• Integration von Lessons Learned aus Messungen in BCM-Planung und Entscheidungsfindung\n• Regelmäßige Überprüfung und Anpassung der Metriken und Messmethoden selbst"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Welche regulatorischen Anforderungen und Compliance-Aspekte müssen beim BCM beachtet werden?',
        answer: "Regulatorische Anforderungen und Compliance-Aspekte spielen eine zunehmend wichtige Rolle im Business Continuity Management, da Aufsichtsbehörden und Gesetzgeber die Bedeutung operationaler Resilienz für Wirtschaftsstabilität und Verbraucherschutz erkannt haben. Ein compliance-orientiertes BCM gewährleistet nicht nur regulatorische Konformität, sondern schafft auch Wettbewerbsvorteile.\n\n🏛️ Branchenspezifische Regulierungsframeworks:\n• Finanzdienstleistungen unterliegen spezifischen BCM-Anforderungen durch DORA, Basel III, Solvency II und MiFID II\n• Kritische Infrastrukturen müssen NIS2-Richtlinie und nationale KRITIS-Verordnungen erfüllen\n• Gesundheitswesen hat spezielle Anforderungen für Patientensicherheit und Datenintegrität\n• Energiesektor unterliegt besonderen Resilienz-Anforderungen für Versorgungssicherheit\n• Telekommunikation muss Kontinuität kritischer Kommunikationsinfrastrukturen gewährleisten\n\n📋 Dokumentations- und Reporting-Pflichten:\n• Umfassende Dokumentation von BCM-Strategien, Plänen und Verfahren für Aufsichtsbehörden\n• Regelmäßige Berichterstattung über BCM-Status, Tests und Incidents an Regulatoren\n• Nachweis der Wirksamkeit von BCM-Maßnahmen durch Metriken und Assessments\n• Transparenz über kritische Abhängigkeiten und Single Points of Failure\n• Dokumentation von Lessons Learned und kontinuierlichen Verbesserungsmaßnahmen\n\n🔍 Aufsichtliche Prüfungen und Validierung:\n• Vorbereitung auf regulatorische Inspektionen und BCM-spezifische Prüfungen\n• Demonstration der BCM-Compliance durch strukturierte Evidenz und Nachweise\n• Koordination mit internen und externen Auditoren für BCM-Validierung\n• Aufbau von Beziehungen zu Aufsichtsbehörden für proaktive Kommunikation\n• Integration von regulatorischen Feedback in BCM-Verbesserungsprozesse\n\n🌍 Internationale Standards und Best Practices:\n• Alignment mit ISO 22301 und anderen internationalen BCM-Standards\n• Berücksichtigung von NIST, COBIT und anderen Framework-Anforderungen\n• Integration von Good Practice Guidelines des Business Continuity Institute\n• Harmonisierung mit internationalen Compliance-Anforderungen bei globalen Operationen\n• Monitoring von emerging regulations und Standards-Entwicklungen\n\n⚖️ Rechtliche Haftung und Governance:\n• Verständnis der rechtlichen Verantwortlichkeiten von Vorstand und Geschäftsführung für BCM\n• Integration von BCM-Anforderungen in Corporate Governance Strukturen\n• Berücksichtigung von Haftungsrisiken bei unzureichender Geschäftskontinuität\n• Koordination mit Legal und Compliance Teams für ganzheitliche Risikobetrachtung\n• Aufbau von BCM-Expertise in Aufsichts- und Kontrollgremien"
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
