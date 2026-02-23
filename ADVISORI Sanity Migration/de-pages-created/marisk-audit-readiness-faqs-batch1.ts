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
    console.log('Updating MaRisk Audit Readiness page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'marisk-audit-readiness' })
    
    if (!existingDoc) {
      throw new Error('Document "marisk-audit-readiness" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Was sind die wichtigsten Erfolgsfaktoren für eine effektive Vorbereitung auf MaRisk-Prüfungen?",
        answer: "Eine effektive Vorbereitung auf MaRisk-Prüfungen ist ein strategischer Prozess, der weit über das bloße Sammeln von Dokumenten hinausgeht. Die richtigen Erfolgsfaktoren können den Unterschied zwischen einer reibungslosen Prüfung und einem ressourcenintensiven, feststellungsreichen Erlebnis ausmachen.\n\n🎯 Strategische Erfolgsfaktoren für die Prüfungsvorbereitung:\n• Frühzeitiger Start und proaktive Planung: Beginn der strukturierten Vorbereitung mindestens 3-6 Monate vor der geplanten Prüfung, um ausreichend Zeit für die Identifikation und Behebung von Schwachstellen zu haben.\n• Risikobasierte Priorisierung: Fokussierung der Vorbereitungsressourcen auf die Bereiche mit dem höchsten Prüfungsrisiko, basierend auf vorherigen Feststellungen, bekannten aufsichtlichen Schwerpunkten und internen Schwachstellen.\n• Klare Governance und Verantwortlichkeiten: Etablierung eines dedizierten Prüfungsvorbereitungsteams mit klaren Rollen, Zuständigkeiten und Eskalationswegen für kritische Themen.\n• Transparente Schwachstellenkommunikation: Schaffung einer offenen Kultur, in der potenzielle Compliance-Lücken ohne Angst vor Konsequenzen angesprochen und gemeinsam adressiert werden können.\n\n🛠️ Praktische Implementierungsansätze:\n• Systematische Gap-Analysen: Durchführung strukturierter Vorprüfungen und Selbstbeurteilungen anhand aktueller MaRisk-Anforderungen und aufsichtlicher Erwartungen, um proaktiv Verbesserungspotenziale zu identifizieren.\n• Dokumentationsmanagement-System: Aufbau eines zentralen, strukturierten Repositories für prüfungsrelevante Dokumente mit klarer Versionierung, Verantwortlichkeiten und Qualitätssicherungsprozessen.\n• Interviewvorbereitung und Schulung: Gezielte Vorbereitung der Mitarbeiter auf Prüfergespräche durch Schulungen, Mock-Interviews und klare Leitlinien für die Interaktion mit Prüfern.\n• Prüfungscockpit und Statustracking: Implementierung eines transparenten Tracking-Systems für den Vorbereitungsfortschritt, offene Maßnahmen und potenzielle Risikobereiche mit regelmäßigem Reporting an das Management."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können Finanzinstitute ein strukturiertes Pre-Audit-Programm zur proaktiven Identifikation von MaRisk-Schwachstellen implementieren?",
        answer: "Ein strukturiertes Pre-Audit-Programm ist ein zentraler Baustein erfolgreicher MaRisk-Prüfungsvorbereitungen, da es Instituten ermöglicht, potenzielle Schwachstellen proaktiv zu identifizieren und zu adressieren, bevor sie zu formalen Prüfungsfeststellungen werden. Die Implementierung eines solchen Programms erfordert einen systematischen Ansatz mit klaren Methoden, Verantwortlichkeiten und Folgeprozessen.\n\n🔍 Kernkomponenten eines effektiven Pre-Audit-Programms:\n• Risikobasierte Prüfungszyklus-Planung: Entwicklung eines rotierenden Prüfungsplans, der alle MaRisk-relevanten Bereiche abdeckt, mit Priorisierung basierend auf Risiko, regulatorischer Wichtigkeit und früheren Feststellungen.\n• Mehrdimensionale Prüfungsmethodik: Kombination verschiedener Prüfungsansätze wie Dokumentenprüfungen, Mitarbeiterinterviews, Prozesswalkthroughs und stichprobenartige Kontrolltests für ein umfassendes Gesamtbild.\n• Unabhängige Prüfungsteams: Einsatz von Prüfern mit ausreichender Distanz zum geprüften Bereich, idealerweise aus einer unabhängigen Compliance-Funktion oder durch externe Spezialisten, um Objektivität zu gewährleisten.\n• Standardisierte Bewertungskriterien: Verwendung klar definierter, konsistenter Bewertungsmaßstäbe und Klassifizierungsschemata für Feststellungen, die an aufsichtlichen Erwartungen ausgerichtet sind.\n\n⚙️ Praktische Umsetzungsschritte:\n• Entwicklung von Prüfungsleitfäden: Erstellung bereichsspezifischer Checklisten und Prüfprogramme, die alle relevanten MaRisk-Anforderungen systematisch abdecken und eine strukturierte Vorgehensweise ermöglichen.\n• Transparente Feststellungsdokumentation: Implementierung eines klaren Prozesses zur Dokumentation von Schwachstellen, einschließlich Ursachenanalyse, potenzieller Auswirkungen und Schweregradbewertung.\n• Integriertes Maßnahmenmanagement: Etablierung eines systematischen Ansatzes zur Verfolgung und Überwachung von Abhilfemaßnahmen mit klaren Verantwortlichkeiten, Fristen und Wirksamkeitskontrollen.\n• Kommunikations- und Eskalationsprozesse: Definition transparenter Berichtswege für Pre-Audit-Ergebnisse, sowohl an die betroffenen Fachbereiche als auch an das Management, mit klaren Eskalationskriterien für kritische Feststellungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche Best Practices existieren für die Koordination und Durchführung von MaRisk-Prüfungen, um den Prozess für alle Beteiligten effizient zu gestalten?",
        answer: "Die effiziente Koordination und Durchführung von MaRisk-Prüfungen ist ein entscheidender Erfolgsfaktor, der sowohl die Belastung für das Institut minimiert als auch die Qualität der Prüfungsergebnisse verbessert. Eine gut strukturierte Prüfungskoordination kann den operativen Aufwand erheblich reduzieren und gleichzeitig ein präziseres Bild der tatsächlichen Compliance-Situation vermitteln.\n\n🗂️ Schlüsselelemente einer effizienten Prüfungskoordination:\n• Zentrale Prüfungskoordination: Etablierung einer zentralen Koordinationsstelle als Single Point of Contact für alle prüfungsbezogenen Anfragen und Informationsflüsse zwischen Prüfern und Fachbereichen.\n• Klar definierte Prozesse und Verantwortlichkeiten: Detaillierte Festlegung der Abläufe, Zuständigkeiten und Entscheidungsbefugnisse für jede Phase der Prüfung, von der Ankündigung bis zum Abschlussbericht.\n• Proaktives Erwartungsmanagement: Frühzeitige Klärung der gegenseitigen Erwartungen bezüglich Prüfungsumfang, Zeitplan, Informationsanforderungen und Kommunikationswegen mit den Prüfern.\n• Ressourcenplanung und -schonung: Sorgfältige Planung des Personaleinsatzes mit Berücksichtigung des regulären Geschäftsbetriebs und Minimierung von Doppelbelastungen.\n\n📝 Praktische Umsetzungsstrategien:\n• Strukturierte Informationsanforderungsmanagement: Implementierung eines zentralen Systems zur Erfassung, Priorisierung und Nachverfolgung aller Prüferanfragen mit klaren Zuständigkeiten und Fristen.\n• Qualitätssicherungsprozess für Unterlagen: Etablierung eines mehrstufigen Review-Prozesses für alle an die Prüfer übergebenen Dokumente, um Vollständigkeit, Konsistenz und Qualität sicherzustellen.\n• Tägliche Statusmeetings und Abstimmungen: Durchführung kurzer, fokussierter Daily-Standups mit allen beteiligten Koordinatoren zur Identifikation von Engpässen, offenen Punkten und erforderlichen Eskalationen.\n• Proaktive Kommunikation und Nachverfolgung: Regelmäßige, strukturierte Abstimmungen mit den Prüfern zu offenen Punkten, Verständnisfragen und vorläufigen Erkenntnissen, um Missverständnisse frühzeitig zu klären."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie sollten Finanzinstitute mit vorläufigen Prüfungsfeststellungen umgehen, um eine konstruktive und effektive Auseinandersetzung zu gewährleisten?",
        answer: "Der professionelle Umgang mit vorläufigen Prüfungsfeststellungen ist ein kritischer Erfolgsfaktor für das Gesamtergebnis einer MaRisk-Prüfung. Die Art und Weise, wie ein Institut auf Feststellungen reagiert, kann erheblichen Einfluss auf deren finale Bewertung, Formulierung und die daraus resultierenden Maßnahmenanforderungen haben. Eine durchdachte Strategie verbessert nicht nur das Prüfungsergebnis, sondern stärkt auch die Beziehung zur Aufsicht.\n\n🧩 Strategische Prinzipien für den Umgang mit Feststellungen:\n• Faktenbasierte Objektivität: Konzentration auf sachliche Argumente und nachprüfbare Fakten statt emotionaler oder defensiver Reaktionen, selbst bei als ungerechtfertigt empfundenen Feststellungen.\n• Differenzierte Priorisierung: Fokussierung der Ressourcen auf die Feststellungen mit dem höchsten Risiko und den potenziell schwerwiegendsten Konsequenzen, anstatt alle Punkte mit gleicher Intensität zu behandeln.\n• Konstruktive Grundhaltung: Nutzung der Feststellungen als Chance zur Verbesserung des Compliance-Managements, auch wenn man in Einzelfällen eine abweichende Einschätzung vertritt.\n• Transparente Kommunikation: Offene und ehrliche Darstellung der eigenen Position, einschließlich der Anerkennung tatsächlicher Schwachstellen, um Vertrauen aufzubauen und gemeinsame Lösungen zu ermöglichen.\n\n📋 Praktischer Prozessansatz für Feststellungsmanagement:\n• Strukturierte Analyse und Validierung: Sorgfältige Prüfung jeder vorläufigen Feststellung auf faktische Richtigkeit, zugrundeliegende regulatorische Anforderungen und potenzielle Missverständnisse oder Fehlinterpretationen.\n• Strategische Entscheidungsfindung: Bewusste Entscheidung für jede Feststellung, ob eine Klarstellung, ein Gegendarstellung oder eine direkte Akzeptanz mit Maßnahmenvorschlag die angemessene Reaktion darstellt.\n• Qualitätsgesicherte Stellungnahmen: Entwicklung präziser, faktenbasierter und lösungsorientierter Stellungnahmen mit klarem Bezug zu relevanten Regularien und interner Dokumentation als Nachweis.\n• Maßnahmenorientierter Dialog: Proaktives Anbieten konkreter, terminierter und nachprüfbarer Verbesserungsmaßnahmen, selbst bei Punkten, wo unterschiedliche Rechtsauffassungen bestehen bleiben."
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
    console.log('✅ FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
