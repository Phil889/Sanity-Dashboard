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
    console.log('Updating CRR/CRD Reporting & Kommunikation mit Aufsichtsbehörden page with FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'crr-crd-reporting-kommunikation-mit-aufsichtsbehoerden' })
    
    if (!existingDoc) {
      throw new Error('Document "crr-crd-reporting-kommunikation-mit-aufsichtsbehoerden" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche Best Practices existieren für die Kommunikation mit Aufsichtsbehörden während regulatorischer Prüfungen?",
        answer: "Regulatorische Prüfungen sind intensive Phasen mit besonderer Bedeutung für das aufsichtliche Standing eines Instituts. Eine professionelle und durchdachte Kommunikation kann den Prüfungsverlauf positiv beeinflussen.\n\n🤝 Grundprinzipien der Kommunikation:\n• Transparenz und Offenheit: Kommunizieren Sie offen über bekannte Schwachstellen und bereits eingeleitete Maßnahmen, anstatt Probleme zu verschleiern.\n• Professionalität und Sachlichkeit: Wahren Sie stets einen respektvollen, sachlichen Ton, selbst bei kritischen Rückfragen oder unterschiedlichen Auffassungen.\n• Konsistenz der Botschaften: Stellen Sie sicher, dass alle Kommunikationen mit der Aufsicht inhaltlich abgestimmt sind und keine Widersprüche enthalten.\n• Proaktivität: Informieren Sie die Prüfer frühzeitig über relevante Entwicklungen oder Änderungen, die während der Prüfung eintreten.\n\n📋 Praktische Kommunikationsstrategien:\n• Single Point of Contact: Benennen Sie einen zentralen Ansprechpartner, der die Kommunikation koordiniert und als Bindeglied zwischen den Prüfern und den internen Fachabteilungen fungiert.\n• Präzise Antworten: Beantworten Sie Fragen präzise und fokussiert, ohne unnötige Details hinzuzufügen, die zu weiteren Nachfragen führen könnten.\n• Zeitmanagement: Kommunizieren Sie realistische Zeitrahmen für die Bereitstellung angeforderter Informationen und halten Sie diese konsequent ein.\n• Dokumentation: Führen Sie ein Protokoll aller wesentlichen Kommunikationen, getroffenen Vereinbarungen und Zusagen während der Prüfung.\n\n⚙️ Organisatorische Erfolgsfaktoren:\n• Tägliche Abstimmungsrunden: Führen Sie interne Briefings zu Beginn und Ende jedes Prüfungstages durch, um den aktuellen Stand zu reflektieren und die nächsten Schritte zu koordinieren.\n• Eskalationswege: Definieren Sie klare Wege für die Eskalation komplexer Themen oder unterschiedlicher Auffassungen zu fachlichen Fragen.\n• Kommunikationskanäle: Vereinbaren Sie mit den Prüfern bevorzugte Kommunikationswege für unterschiedliche Anliegen (z.B. E-Mail für Dokumente, persönliche Gespräche für inhaltliche Diskussionen).\n• Nachverfolgung: Implementieren Sie ein System zur lückenlosen Nachverfolgung aller Prüferanfragen, Ihre Antworten und offene Punkte."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie sollten wir unseren CRR/CRD-Meldeprozess strukturieren, um maximale Effizienz und Qualität zu gewährleisten?",
        answer: "Ein effizient strukturierter Meldeprozess für CRR/CRD-Anforderungen ist entscheidend für die termingerechte Einreichung qualitativ hochwertiger regulatorischer Berichte. Die richtige Kombination aus klaren Prozessen, definierten Verantwortlichkeiten und technologischer Unterstützung kann sowohl die Effizienz als auch die Qualität signifikant verbessern.\n\n📊 Prozessstruktur und Meilensteine:\n• Frühe Planungsphase: Etablieren Sie einen rollierenden Meldekalender mit ausreichendem Vorlauf und Pufferzeiten für unerwartete Probleme.\n• Datenextraktionsphase: Definieren Sie klare Zeitfenster für die Bereitstellung und Validierung von Quelldaten durch die Fachbereiche.\n• Verarbeitungs- und Validierungsphase: Implementieren Sie mehrstufige Qualitätssicherungsprozesse mit definierten Freigabepunkten.\n• Analyse- und Interpretationsphase: Reservieren Sie dedizierte Zeit für die inhaltliche Analyse der Meldedaten vor der finalen Einreichung.\n• Post-Submission-Phase: Etablieren Sie einen strukturierten Prozess zur Dokumentation, Nachverfolgung und Beantwortung aufsichtlicher Rückfragen.\n\n👥 Rollen und Verantwortlichkeiten:\n• Meldewesen-Koordinator: Zentrale Steuerung des Gesamtprozesses, Terminüberwachung und Eskalationsmanagement.\n• Dateneigner: Klar definierte Verantwortlichkeiten für die Qualität und Vollständigkeit spezifischer Datenbereiche.\n• Fachexperten: Bereitstellung fachlicher Expertise zur korrekten Interpretation regulatorischer Anforderungen und Methodenvorgaben.\n• Qualitätssicherer: Unabhängige Überprüfung der Datenqualität und Compliance mit regulatorischen Vorgaben.\n• IT-Support: Technische Unterstützung bei Datenextraktionen, Systemanpassungen und Meldegenerierung.\n\n🔄 Kontinuierliche Prozessoptimierung:\n• Lessons-Learned-Workshops: Führen Sie nach jedem Meldezyklus eine strukturierte Nachbereitung durch, um Verbesserungspotenziale zu identifizieren.\n• Prozess-KPIs: Definieren und überwachen Sie messbare Leistungsindikatoren wie Vorlaufzeiten, Fehlerraten oder Anzahl nachträglicher Korrekturen.\n• Standardisierung: Entwickeln Sie einheitliche Templates, Arbeitsanweisungen und Checklisten für wiederkehrende Aufgaben.\n• Automatisierungspotenziale: Identifizieren Sie kontinuierlich manuelle Prozessschritte, die durch Automatisierung effizienter gestaltet werden können.\n\n💻 Technologische Unterstützung:\n• Workflow-Management-Systeme: Nutzen Sie spezialisierte Tools zur Prozesssteuerung, Aufgabenverwaltung und Termin-Tracking.\n• Automatisierte Datenvalidierung: Implementieren Sie regelbasierte Prüfroutinen zur frühzeitigen Erkennung von Datenqualitätsproblemen.\n• Zentrale Dokumentenablage: Etablieren Sie ein zentrales Repository für alle melderelevanten Dokumente, Methodenbeschreibungen und Arbeitshilfen.\n• Kollaborationsplattformen: Nutzen Sie digitale Werkzeuge zur effektiven Zusammenarbeit verteilter Teams im Meldeprozess."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir neue CRR/CRD-Meldeanforderungen effizient in unsere bestehenden Meldeprozesse integrieren?",
        answer: "Die kontinuierliche Weiterentwicklung des CRR/CRD-Rahmenwerks bringt regelmäßig neue oder veränderte Meldeanforderungen mit sich. Eine strukturierte und effiziente Integration dieser Änderungen in bestehende Meldeprozesse ist entscheidend für die nachhaltige Compliance.\n\n🔍 Frühzeitige Analyse und Planung:\n• Regulatory Horizon Scanning: Etablieren Sie einen systematischen Prozess zur frühzeitigen Identifikation neuer Meldeanforderungen und regulatorischer Entwicklungen.\n• Impact Assessment: Führen Sie eine detaillierte Analyse der Auswirkungen auf bestehende Datenquellen, Prozesse, Systeme und Ressourcen durch.\n• Gap-Analyse: Identifizieren Sie Lücken zwischen aktuellen Fähigkeiten und neuen Anforderungen bezüglich Daten, Methoden und Expertise.\n• Priorisierung: Bewerten Sie neue Anforderungen nach regulatorischer Relevanz, Komplexität und benötigtem Vorlauf für die Implementierung.\n\n📋 Strukturierte Implementierung:\n• Phasenmodell: Teilen Sie die Implementierung in klar definierte Phasen mit konkreten Meilensteinen und Verantwortlichkeiten.\n• Pilotierung: Testen Sie neue Meldeprozesse parallel zum Regelbetrieb, um Probleme frühzeitig zu erkennen, ohne die laufende Compliance zu gefährden.\n• Übergangsregelungen: Entwickeln Sie klare Strategien für den Übergang von bestehenden zu neuen Meldeprozessen, inklusive Fallback-Optionen.\n• Schulung und Wissenstransfer: Stellen Sie sicher, dass alle beteiligten Mitarbeiter rechtzeitig mit dem notwendigen Wissen und den Fähigkeiten ausgestattet werden.\n\n🔄 Integration in bestehende Prozesse:\n• Prozessanalyse: Untersuchen Sie bestehende Meldeprozesse auf Synergien und Überschneidungen mit den neuen Anforderungen.\n• Standardisierte Integrationsschritte: Entwickeln Sie eine Methodik zur systematischen Einbindung neuer Anforderungen in den etablierten Meldeprozess.\n• Governance-Strukturen: Passen Sie bestehende Verantwortlichkeiten, Freigabemechanismen und Kontrollprozesse an die neuen Anforderungen an.\n• Ressourcenplanung: Stellen Sie rechtzeitig zusätzliche Ressourcen bereit oder reorganisieren Sie bestehende Kapazitäten zur Bewältigung der neuen Aufgaben.\n\n🛠️ Technologische Enabler:\n• Flexible Datenarchitektur: Gestalten Sie Ihre Dateninfrastruktur modular und erweiterbar, um neue Datenanforderungen effizient integrieren zu können.\n• Konfigurierbare Reporting-Tools: Nutzen Sie Meldewesen-Lösungen, die durch Konfiguration statt Programmierung an neue Anforderungen angepasst werden können.\n• Automatisierte Tests: Implementieren Sie automatisierte Validierungen, um die Konsistenz und Qualität neuer Meldungen während der Einführungsphase sicherzustellen.\n• Parallele Umgebungen: Betreiben Sie parallele Test- und Produktivumgebungen, um Änderungen sicher zu implementieren und zu verifizieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Kompetenzen sollten wir in unserem Team aufbauen, um die Kommunikation mit Aufsichtsbehörden zu optimieren?",
        answer: "Die Kommunikation mit Aufsichtsbehörden erfordert eine spezifische Kombination aus fachlichen, kommunikativen und strategischen Kompetenzen. Die gezielte Entwicklung dieser Fähigkeiten kann maßgeblich zur Verbesserung des aufsichtlichen Dialogs und des regulatorischen Standings beitragen.\n\n🧠 Fachliche Kernkompetenzen:\n• Regulatorisches Verständnis: Tiefgreifende Kenntnis der relevanten CRR/CRD-Regelungen und der dahinterstehenden aufsichtlichen Intentionen, nicht nur der technischen Anforderungen.\n• Geschäftsmodell-Expertise: Umfassendes Verständnis des eigenen Geschäftsmodells und der Fähigkeit, die Implikationen regulatorischer Anforderungen darauf zu übertragen.\n• Datenkompetenz: Fähigkeit, komplexe Datenstrukturen zu verstehen, Qualitätsprobleme zu erkennen und Daten kontextbezogen zu interpretieren.\n• Systemisches Denken: Verständnis für die Zusammenhänge und Wechselwirkungen zwischen verschiedenen regulatorischen Anforderungen und Geschäftsprozessen.\n\n💬 Kommunikative Fähigkeiten:\n• Präzise Ausdrucksweise: Fähigkeit, komplexe regulatorische Sachverhalte klar, präzise und verständlich zu formulieren.\n• Aktives Zuhören: Kompetenz, aufsichtliche Fragestellungen genau zu erfassen und die dahinterliegenden Anliegen zu verstehen.\n• Interkulturelle Kommunikation: Verständnis für unterschiedliche Kommunikationsstile, besonders wichtig im Umgang mit internationalen Aufsichtsbehörden.\n• Zielgruppengerechte Kommunikation: Fähigkeit, Informationen adressatengerecht aufzubereiten – sei es für technische Experten oder hochrangige Entscheidungsträger.\n\n🔄 Verhandlungs- und Beziehungskompetenzen:\n• Perspektivwechsel: Fähigkeit, Themen aus der Perspektive der Aufsicht zu betrachten und deren Anliegen zu antizipieren.\n• Konstruktive Problemlösung: Kompetenz, bei unterschiedlichen Auffassungen konstruktive Lösungsansätze zu entwickeln, statt Konfrontation zu suchen.\n• Beziehungsmanagement: Fähigkeit, vertrauensvolle, professionelle Beziehungen zu Aufsichtsmitarbeitern aufzubauen und zu pflegen.\n• Situative Anpassungsfähigkeit: Flexibilität, den Kommunikationsstil an verschiedene aufsichtliche Kontexte und Situationen anzupassen.\n\n📊 Strategische Kompetenzen:\n• Vorausschauende Planung: Fähigkeit, regulatorische Entwicklungen zu antizipieren und proaktive Kommunikationsstrategien zu entwickeln.\n• Priorisierung: Kompetenz, wesentliche von untergeordneten Themen zu unterscheiden und den Kommunikationsfokus entsprechend zu setzen.\n• Stakeholder-Management: Fähigkeit zur effektiven Koordination interner Stakeholder im Rahmen der aufsichtlichen Kommunikation.\n• Risikobewusstsein: Sensibilität für potenzielle Reputations- und Compliance-Risiken in der aufsichtlichen Kommunikation."
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
    console.log('✅ FAQs batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
