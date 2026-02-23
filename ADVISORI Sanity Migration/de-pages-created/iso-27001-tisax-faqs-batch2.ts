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
    console.log('Updating ISO 27001 TISAX page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-tisax' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-tisax" not found')
    }
    
    // Create new FAQs for TISAX implementation and costs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche Kosten sind mit einer TISAX Implementierung und Assessment verbunden?',
        answer: "Die Kosten einer TISAX Implementierung variieren erheblich je nach Unternehmensgröße, gewähltem Assessment-Level und bestehender Sicherheitsreife. Eine strukturierte Kostenplanung berücksichtigt sowohl einmalige Implementierungskosten als auch laufende Betriebskosten für die Aufrechterhaltung des TISAX Status in der Automotive Supply Chain.\n\n💰 Hauptkostenkategorien:\n• Assessment-Kosten durch akkreditierte TISAX Assessment Provider je nach Level und Unternehmensgröße\n• Beratungskosten für Gap-Analyse, Implementierung und Assessment-Vorbereitung\n• Interne Personalkosten für TISAX-Projektteam und Sicherheitsverantwortliche\n• Technische Implementierungskosten für automotive-spezifische Sicherheitsmaßnahmen\n• Schulungs- und Zertifizierungskosten für Mitarbeiter in TISAX-relevanten Bereichen\n\n📊 Assessment-Kosten nach Level:\n• AL1 Assessment: Grundkosten für Standard-Informationsschutz, typischerweise niedrigste Kostenkategorie\n• AL2 Assessment: Erhöhte Kosten für erweiterte Sicherheitsanforderungen und umfangreichere Bewertung\n• AL3 Assessment: Höchste Assessment-Kosten aufgrund umfassender Sicherheitsbewertung und spezieller Anforderungen\n• Zusätzliche Schutzbedarfe: Separate Bewertungskosten für Prototypenschutz oder Datenverarbeitung\n• Re-Assessment Kosten: Regelmäßige Kosten für Aufrechterhaltung des TISAX Status\n\n🔧 Implementierungskosten:\n• Automotive-spezifische Sicherheitstechnologien und Infrastructure-Upgrades für TISAX-Compliance\n• Physische Sicherheitsmaßnahmen für Prototypenschutz und sensible Bereiche\n• IT-Sicherheitslösungen für Connected Car Daten und Entwicklungsinformationen\n• Dokumentationssysteme und Compliance-Management-Tools für TISAX-Anforderungen\n• Integration bestehender ISO 27001 Systeme mit TISAX-spezifischen Erweiterungen\n\n👥 Personal- und Beratungskosten:\n• Spezialisierte TISAX-Beratung für automotive-spezifische Implementierung\n• Interne Projektressourcen für TISAX-Vorbereitung und -durchführung\n• Automotive Security Awareness Programme für alle relevanten Mitarbeiter\n• TISAX-spezifische Schulungen für Schlüsselpersonal und Sicherheitsverantwortliche\n• Kontinuierliche Weiterbildung zu automotive-spezifischen Sicherheitsanforderungen\n\n📈 Kostenschätzungen nach Unternehmensgröße:\n• Kleine Automotive-Zulieferer: Gesamtkosten für TISAX-Implementierung und erstes Assessment\n• Mittelständische Unternehmen: Erweiterte Kosten für komplexere Automotive-Strukturen\n• Große Automotive-Unternehmen: Umfassende Kosten für mehrere Standorte und Assessment-Level\n• Internationale Konzerne: Höchste Kosten für globale TISAX-Harmonisierung\n• Branchenspezifische Faktoren: Zusätzliche Kosten je nach Automotive-Spezialisierung\n\n💡 ROI und Kosteneinsparungen:\n• Zugang zu lukrativen Automotive-Projekten und OEM-Partnerschaften\n• Vermeidung von Mehrfachprüfungen durch verschiedene Automotive-Partner\n• Effizienzsteigerungen durch standardisierte automotive-spezifische Sicherheitsprozesse\n• Wettbewerbsvorteile in der Automotive Supply Chain\n• Langfristige Amortisation durch verbesserte Marktposition und Geschäftsmöglichkeiten"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Wie lange dauert eine TISAX Implementierung und welche Faktoren beeinflussen den Zeitrahmen?',
        answer: "Die Dauer einer TISAX Implementierung hängt von verschiedenen Faktoren ab, insbesondere vom gewählten Assessment-Level, der bestehenden Sicherheitsreife und der Komplexität der automotive-bezogenen Geschäftsprozesse. Eine realistische Zeitplanung berücksichtigt sowohl die technischen als auch die organisatorischen Aspekte der automotive-spezifischen Sicherheitsanforderungen.\n\n⏱️ Typische Implementierungszeiträume:\n• AL1 Implementierung: Grundlegende TISAX-Vorbereitung für Standard-Informationsschutz\n• AL2 Implementierung: Erweiterte Implementierung für automotive-spezifische Entwicklungsprozesse\n• AL3 Implementierung: Umfassende Implementierung für höchste Sicherheitsanforderungen\n• Kombinierte Level: Zusätzliche Zeit für mehrere Assessment-Level und Schutzbedarfe\n• Re-Assessment Vorbereitung: Regelmäßige Aufwände für Aufrechterhaltung des TISAX Status\n\n🏗️ Phasenorientierte Implementierung:\n• Vorbereitungsphase: TISAX-spezifische Gap-Analyse und Projektplanung basierend auf VDA ISA Katalog\n• Implementierungsphase: Umsetzung automotive-spezifischer Sicherheitsmaßnahmen und Prozesse\n• Dokumentationsphase: Aufbau TISAX-konformer Dokumentation und Nachweisführung\n• Schulungsphase: Training der Mitarbeiter zu automotive-spezifischen Sicherheitsanforderungen\n• Assessment-Vorbereitung: Finale Vorbereitung und Mock-Assessments vor der eigentlichen Bewertung\n\n🚗 Automotive-spezifische Einflussfaktoren:\n• Komplexität der Fahrzeugentwicklungsprozesse und Beteiligung an kritischen Automotive-Projekten\n• Umfang der Connected Car Services und IoT-Anwendungen in der Automobilproduktion\n• Anzahl und Sensibilität der automotive-bezogenen Informationsassets\n• Integration mit bestehenden Automotive-Standards wie IATF 16949 oder ISO 26262\n• Internationale Automotive-Partnerschaften und globale Supply Chain Strukturen\n\n📊 Beschleunigungsfaktoren:\n• Bestehende ISO 27001 Zertifizierung als solide Grundlage für TISAX-Erweiterung\n• Erfahrene TISAX-Beratung mit automotive-spezifischer Expertise\n• Dedizierte Projektressourcen mit Automotive-Branchenkenntnissen\n• Klare Unterstützung durch das Management für automotive-spezifische Sicherheitsinvestitionen\n• Bestehende Automotive-Partnerschaften als Motivation für beschleunigte Implementierung\n\n⚠️ Risikofaktoren für Verzögerungen:\n• Unzureichendes Verständnis automotive-spezifischer Sicherheitsanforderungen\n• Komplexe Legacy-Systeme in der Automotive-Entwicklung und -produktion\n• Widerstand gegen Veränderungen in etablierten Automotive-Entwicklungsprozessen\n• Mangelnde Ressourcen für automotive-spezifische Sicherheitsmaßnahmen\n• Unklare Anforderungen von OEM-Partnern bezüglich TISAX-Compliance\n\n🎯 Optimale Zeitplanung:\n• Frühzeitige Einbindung aller automotive-relevanten Stakeholder und Geschäftsbereiche\n• Realistische Meilensteinplanung unter Berücksichtigung automotive-spezifischer Komplexität\n• Pufferzeiten für unvorhergesehene Herausforderungen in der Automotive-Implementierung\n• Kontinuierliche Überwachung des Fortschritts und Anpassung der Zeitplanung\n• Vorbereitung auf Assessment-Termine entsprechend der Automotive-Projektzyklen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Welche Rolle spielt der VDA ISA Katalog bei TISAX und wie wird er angewendet?',
        answer: "Der VDA ISA (Verband der Automobilindustrie Information Security Assessment) Katalog bildet das Herzstück von TISAX und definiert die spezifischen Bewertungskriterien für Informationssicherheit in der Automobilindustrie. Als branchenspezifische Erweiterung von ISO 27001 adressiert der Katalog die einzigartigen Herausforderungen und Risiken der Automotive Supply Chain.\n\n📋 Struktur des VDA ISA Katalogs:\n• Systematische Gliederung in Kontrollbereiche entsprechend automotive-spezifischer Sicherheitsdomänen\n• Detaillierte Kontrollziele für verschiedene Aspekte der Automotive-Informationssicherheit\n• Spezifische Bewertungskriterien für unterschiedliche Assessment-Level und Schutzbedarfe\n• Praktische Implementierungshilfen und Beispiele für automotive-typische Szenarien\n• Regelmäßige Updates entsprechend neuer Automotive-Technologien und Bedrohungslandschaften\n\n🎯 Kontrollbereiche und Schwerpunkte:\n• Informationssicherheitsmanagement mit Fokus auf automotive-spezifische Governance\n• Physische Sicherheit für Prototypenschutz und sensible Automotive-Entwicklungsbereiche\n• Zugangs- und Berechtigungsmanagement für automotive-kritische Systeme und Daten\n• Netzwerk- und Systemsicherheit für Connected Car Infrastrukturen\n• Incident Management für automotive-spezifische Sicherheitsvorfälle\n\n🔍 Assessment-Methodik basierend auf VDA ISA:\n• Strukturierte Bewertung anhand definierter Reifegrade von unzureichend bis optimiert\n• Automotive-spezifische Gewichtung verschiedener Kontrollbereiche je nach Assessment-Level\n• Berücksichtigung branchenspezifischer Risiken wie Fahrzeugdaten-Schutz und Supply Chain Security\n• Praktische Bewertung der Implementierung in realen Automotive-Entwicklungsumgebungen\n• Dokumentation von Stärken, Schwächen und automotive-spezifischen Verbesserungspotenzialen\n\n🚗 Automotive-spezifische Besonderheiten:\n• Schutz von Fahrzeugentwicklungsdaten und Konstruktionsgeheimnissen\n• Sicherheit von Connected Car Services und Over-the-Air Update Systemen\n• Supply Chain Security für komplexe Automotive-Lieferantennetzwerke\n• Integration von Safety und Security Aspekten entsprechend Automotive-Standards\n• Berücksichtigung regulatorischer Anforderungen wie UN-R155 für Cybersecurity\n\n📊 Praktische Anwendung im Assessment:\n• Systematische Durchführung der Bewertung entsprechend VDA ISA Struktur\n• Verwendung standardisierter Bewertungsbögen und Checklisten\n• Einheitliche Dokumentation der Assessment-Ergebnisse für Vergleichbarkeit\n• Ableitung konkreter Handlungsempfehlungen basierend auf VDA ISA Vorgaben\n• Kontinuierliche Verbesserung entsprechend VDA ISA Best Practices\n\n🔄 Kontinuierliche Weiterentwicklung:\n• Regelmäßige Aktualisierung des Katalogs entsprechend Automotive-Marktentwicklungen\n• Integration neuer Technologien wie autonomes Fahren und Elektromobilität\n• Berücksichtigung sich ändernder Bedrohungslandschaften in der Automobilindustrie\n• Feedback-Integration aus praktischen Assessment-Erfahrungen\n• Harmonisierung mit internationalen Automotive-Sicherheitsstandards"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie kann TISAX mit bestehenden ISO 27001 Zertifizierungen kombiniert werden?',
        answer: "TISAX und ISO 27001 ergänzen sich optimal, da TISAX auf den bewährten Grundlagen von ISO 27001 aufbaut und diese um automotive-spezifische Anforderungen erweitert. Eine intelligente Kombination beider Standards ermöglicht es Unternehmen, sowohl allgemeine als auch branchenspezifische Informationssicherheitsanforderungen effizient zu erfüllen.\n\n🔗 Synergieffekte zwischen ISO 27001 und TISAX:\n• ISO 27001 ISMS als solide Grundlage für TISAX-spezifische Erweiterungen\n• Gemeinsame Nutzung von Managementprozessen, Dokumentation und Governance-Strukturen\n• Effiziente Ressourcennutzung durch überlappende Kontrollziele und Sicherheitsmaßnahmen\n• Einheitliche Risikomanagement-Methodik für allgemeine und automotive-spezifische Risiken\n• Harmonisierte Audit- und Review-Zyklen für beide Standards\n\n📋 Gemeinsame Dokumentationsstrukturen:\n• Erweiterung bestehender ISO 27001 Richtlinien um automotive-spezifische Anforderungen\n• Integration von TISAX-Kontrollzielen in bestehende ISMS-Dokumentation\n• Gemeinsame Risikobewertung für allgemeine und automotive-spezifische Informationsassets\n• Einheitliche Incident Response Prozesse für beide Compliance-Bereiche\n• Harmonisierte Schulungs- und Awareness-Programme\n\n🎯 Strategische Implementierungsansätze:\n• Aufbau auf bestehender ISO 27001 Infrastruktur für effiziente TISAX-Implementierung\n• Schrittweise Erweiterung des ISMS um automotive-spezifische Kontrollbereiche\n• Parallele Aufrechterhaltung beider Standards ohne Redundanzen\n• Optimierung von Audit-Zyklen für beide Compliance-Anforderungen\n• Gemeinsame Kontinuierliche Verbesserung für allgemeine und automotive-spezifische Sicherheit\n\n🔄 Integrierte Managementprozesse:\n• Einheitliche Governance-Struktur für ISO 27001 und TISAX-Compliance\n• Gemeinsame Verantwortlichkeiten und Rollen für beide Standards\n• Harmonisierte Berichterstattung an Management und Stakeholder\n• Integrierte Überwachung und Messung der Sicherheitsleistung\n• Einheitliche Change Management Prozesse für beide Compliance-Bereiche\n\n📊 Praktische Umsetzungsschritte:\n• Gap-Analyse zwischen bestehender ISO 27001 Implementierung und TISAX-Anforderungen\n• Entwicklung einer integrierten Roadmap für beide Standards\n• Schrittweise Implementierung automotive-spezifischer Erweiterungen\n• Training der Mitarbeiter zu kombinierten Compliance-Anforderungen\n• Etablierung integrierter Audit- und Review-Prozesse\n\n💡 Best Practices für die Kombination:\n• Frühzeitige Planung der Integration bereits bei ISO 27001 Implementierung\n• Nutzung erfahrener Berater mit Expertise in beiden Standards\n• Aufbau flexibler ISMS-Strukturen, die automotive-spezifische Erweiterungen ermöglichen\n• Kontinuierliche Harmonisierung von Prozessen und Dokumentation\n• Regelmäßige Bewertung der Effizienz der kombinierten Implementierung"
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
    console.log('✅ FAQ batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
