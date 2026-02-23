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
    console.log('Updating Business Continuity Management Certification page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'business-continuity-management-certification' })
    
    if (!existingDoc) {
      throw new Error('Document "business-continuity-management-certification" not found')
    }
    
    // Create new FAQs for training programs and educational requirements
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche Schulungsformate und Lernmethoden sind für BCM-Zertifizierungen am effektivsten?',
        answer: "Die Wahl des optimalen Schulungsformats für BCM-Zertifizierungen hängt von individuellen Lernpräferenzen, beruflichen Anforderungen und verfügbaren Ressourcen ab. Moderne Bildungsansätze kombinieren verschiedene Methoden, um maximale Lerneffektivität und praktische Anwendbarkeit zu gewährleisten.\n\n🎓 Präsenzschulungen und Workshops:\n• Intensive Classroom-Trainings bieten direkten Austausch mit Experten und Teilnehmern\n• Hands-on Workshops ermöglichen praktische Übungen mit realen BCM-Szenarien\n• Rollenspiele und Simulationen vertiefen das Verständnis für Krisensituationen\n• Networking-Möglichkeiten mit anderen BCM-Professionals und Branchenexperten\n• Sofortiges Feedback und individuelle Betreuung durch erfahrene Trainer\n\n💻 Online-Lernplattformen und E-Learning:\n• Flexible Zeiteinteilung ermöglicht berufsbegleitendes Lernen ohne Reiseaufwand\n• Interaktive Module mit Multimedia-Inhalten und Selbsttests\n• Wiederholbare Lektionen für individuelles Lerntempo und Vertiefung\n• Kosteneffiziente Alternative zu Präsenzveranstaltungen\n• Zugang zu aktuellen Materialien und Updates der Zertifizierungsanbieter\n\n🔄 Blended Learning Ansätze:\n• Kombination aus Online-Selbststudium und Präsenz-Intensivphasen\n• Theoretische Grundlagen online, praktische Anwendung in Workshops\n• Kontinuierliche Betreuung durch Mentoren und Fachexperten\n• Peer-Learning in virtuellen Studiengruppen und Diskussionsforen\n• Adaptive Lernpfade basierend auf individuellen Fortschritten und Schwächen\n\n📚 Selbststudium und individuelle Vorbereitung:\n• Strukturierte Lernpläne basierend auf offiziellen Curricula und Standards\n• Fachbücher, Whitepapers und Fallstudien für vertieftes Verständnis\n• Mock-Exams und Übungsprüfungen zur Selbsteinschätzung\n• Flexibilität für erfahrene Professionals mit begrenzter Zeit\n• Kosteneffiziente Option für motivierte Selbstlerner\n\n🎯 Spezialisierte Intensivprogramme:\n• Boot Camps und Crash-Kurse für schnelle Zertifizierungsvorbereitung\n• Executive Programme für Führungskräfte mit komprimierten Zeitplänen\n• Branchenspezifische Schulungen für sektorale BCM-Anforderungen\n• Maßgeschneiderte Corporate Training Programme für Unternehmensteams\n• Internationale Programme mit globaler Perspektive und Best Practices"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Wie wichtig sind praktische Erfahrungen und Fallstudien für den Erfolg bei BCM-Zertifizierungen?',
        answer: "Praktische Erfahrungen und Fallstudien sind fundamentale Erfolgsfaktoren für BCM-Zertifizierungen, da sie die Brücke zwischen theoretischem Wissen und realer Anwendung schlagen. Moderne Zertifizierungsprogramme legen zunehmend Wert auf praktische Kompetenz und die Fähigkeit, BCM-Prinzipien in komplexen Geschäftsumgebungen anzuwenden.\n\n🏗️ Praktische Implementierungserfahrung:\n• Hands-on Erfahrung mit BCM-Implementierungsprojekten vertieft das Verständnis für reale Herausforderungen\n• Entwicklung und Umsetzung von Business Impact Analysen in verschiedenen Organisationstypen\n• Erstellung und Testing von Business Continuity Plänen unter realistischen Bedingungen\n• Führung von BCM-Teams und Stakeholder-Management in Krisensituationen\n• Integration von BCM in bestehende Governance-Strukturen und Geschäftsprozesse\n\n📊 Fallstudienanalyse und Szenario-Planning:\n• Analyse historischer Krisen und deren BCM-Response für Lessons Learned\n• Branchenspezifische Fallstudien vermitteln sektorale Besonderheiten und Anforderungen\n• Multi-dimensionale Szenarien trainieren komplexe Entscheidungsfindung unter Unsicherheit\n• Best Practice Beispiele aus verschiedenen Organisationsgrößen und Kulturen\n• Failure Cases und deren Analyse für kritisches Denken und Risikobewusstsein\n\n🎯 Simulation und Übungsumgebungen:\n• Desktop-Übungen und Tabletop-Simulationen für sichere Lernumgebung\n• Live-Simulationen mit realistischen Stressfaktoren und Zeitdruck\n• Cross-funktionale Übungen mit verschiedenen Stakeholder-Gruppen\n• Technology-basierte Simulationen für IT-Disaster Recovery Szenarien\n• Multi-Site und Supply Chain Kontinuitätsübungen für komplexe Organisationen\n\n💼 Berufliche Anwendung und Projektarbeit:\n• Integration von Zertifizierungslernen in aktuelle berufliche BCM-Projekte\n• Mentoring durch erfahrene Practitioners für praktische Guidance\n• Peer-Learning durch Erfahrungsaustausch mit anderen Zertifizierungskandidaten\n• Dokumentation eigener BCM-Projekte als Portfolio für Zertifizierungsnachweis\n• Kontinuierliche Reflexion und Anpassung basierend auf praktischen Erfahrungen\n\n🔍 Kritische Analyse und Problemlösung:\n• Entwicklung analytischer Fähigkeiten für komplexe BCM-Herausforderungen\n• Creative Problem-Solving für unkonventionelle Risiken und Störungen\n• Stakeholder-Perspektiven und Change Management in BCM-Kontexten\n• Kosten-Nutzen-Analysen und Business Case Entwicklung für BCM-Investitionen\n• Kontinuierliche Verbesserung und Adaptation von BCM-Programmen basierend auf Erfahrungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Welche Voraussetzungen und Qualifikationen benötige ich für verschiedene BCM-Zertifizierungslevel?',
        answer: "Die Voraussetzungen für BCM-Zertifizierungen variieren je nach Anbieter und Zertifizierungslevel, folgen aber generell einer progressiven Struktur, die Bildungshintergrund, Berufserfahrung und fachliche Kompetenz berücksichtigt. Ein strategischer Ansatz zur Qualifikationsentwicklung maximiert Karrierechancen und Investitionsrendite.\n\n🎓 Foundation Level Zertifizierungen:\n• Keine spezifischen Voraussetzungen oder Berufserfahrung erforderlich\n• Grundlegendes Verständnis von Geschäftsprozessen und Risikomanagement hilfreich\n• Abgeschlossene Sekundarausbildung oder äquivalente Qualifikation\n• Interesse an Business Continuity und organisationaler Resilienz\n• Bereitschaft für strukturiertes Lernen und Prüfungsvorbereitung\n\n💼 Practitioner und Specialist Level:\n• Mindestens zwei Jahre relevante Berufserfahrung in BCM, Risikomanagement oder verwandten Bereichen\n• Nachweis praktischer Anwendung von BCM-Prinzipien in beruflichem Kontext\n• Tertiäre Ausbildung oder äquivalente berufliche Qualifikationen\n• Verständnis für Organisationsstrukturen und Geschäftsprozesse\n• Dokumentierte Teilnahme an BCM-Projekten oder Implementierungen\n\n🏆 Lead Implementer und Lead Auditor:\n• Mindestens fünf Jahre umfassende Erfahrung in BCM-Implementierung oder Audit\n• Nachgewiesene Führungserfahrung in BCM-Projekten und Teams\n• Erfolgreiche Completion von Foundation und Practitioner Level Zertifizierungen\n• Portfolio dokumentierter BCM-Projekte und Implementierungen\n• Referenzen von Arbeitgebern oder Kunden bezüglich BCM-Expertise\n\n🎯 Executive und Fellowship Level:\n• Extensive Senior-Level Erfahrung in strategischem BCM und Organisationsführung\n• Nachgewiesene Erfolge in organisationsweiter BCM-Transformation\n• Thought Leadership durch Publikationen, Vorträge oder Branchenbeiträge\n• Mentoring und Entwicklung anderer BCM-Professionals\n• Kontinuierliche professionelle Entwicklung und Weiterbildung\n\n📚 Bildungshintergrund und Weiterbildung:\n• Relevante Studiengänge in Business Administration, Risikomanagement oder Engineering\n• Zusätzliche Qualifikationen in Projektmanagement, IT-Sicherheit oder Compliance\n• Continuing Professional Development (CPD) Credits für Zertifizierungserhaltung\n• Spezialisierungskurse in Cyber-Resilienz, Supply Chain Management oder Krisenkommunikation\n• Internationale Erfahrung und kulturelle Kompetenz für globale BCM-Rollen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie kann ich meine BCM-Zertifizierung finanzieren und welche Unterstützungsmöglichkeiten gibt es?',
        answer: "Die Finanzierung von BCM-Zertifizierungen erfordert strategische Planung und Kenntnis verfügbarer Unterstützungsmöglichkeiten. Verschiedene Finanzierungsoptionen und Förderprogramme können die Investition in professionelle Qualifikation erheblich erleichtern und den Return on Investment maximieren.\n\n🏢 Arbeitgeber-Unterstützung und Corporate Training:\n• Viele Unternehmen finanzieren BCM-Zertifizierungen als strategische Investition in Mitarbeiterentwicklung\n• Verhandlung von Weiterbildungsbudgets als Teil von Gehalts- oder Beförderungsgesprächen\n• Corporate Training Programme bieten oft günstigere Gruppenpreise für Teams\n• Bildungsurlaub und bezahlte Freistellung für Zertifizierungsaktivitäten\n• Leistungsboni oder Gehaltserhöhungen nach erfolgreicher Zertifizierung\n\n💰 Steuerliche Absetzbarkeit und Finanzvorteile:\n• Zertifizierungskosten sind oft als berufliche Weiterbildung steuerlich absetzbar\n• Reise- und Unterkunftskosten für Präsenzschulungen können abgesetzt werden\n• Selbstständige können Zertifizierungen als Betriebsausgaben geltend machen\n• Dokumentation aller Ausgaben für optimale steuerliche Nutzung\n• Beratung mit Steuerexperten für individuelle Optimierungsmöglichkeiten\n\n🎓 Bildungsförderung und Stipendien:\n• Professionelle Verbände bieten oft Stipendien für Mitglieder\n• Regionale Wirtschaftsförderung unterstützt berufliche Qualifikation\n• Diversity und Inclusion Programme fördern unterrepräsentierte Gruppen\n• Alumni-Netzwerke von Universitäten bieten Weiterbildungsunterstützung\n• Branchenspezifische Förderprogramme für kritische Infrastrukturen\n\n📊 Ratenzahlung und flexible Finanzierungsmodelle:\n• Viele Zertifizierungsanbieter bieten Ratenzahlungsoptionen\n• Bildungskredite mit günstigen Konditionen für berufliche Weiterbildung\n• Employer-sponsored Darlehen mit Rückzahlungsvereinbarungen\n• Crowdfunding für innovative BCM-Projekte oder Forschung\n• Flexible Zahlungspläne angepasst an individuelle finanzielle Situation\n\n🔄 Return on Investment Strategien:\n• Gehaltsverhandlungen basierend auf neuen Qualifikationen und Marktpositionierung\n• Consulting-Opportunities und Nebentätigkeiten durch Zertifizierungsexpertise\n• Karrieresprünge und Beförderungen durch erweiterte Qualifikationen\n• Netzwerk-Aufbau und Geschäftsmöglichkeiten durch professionelle Verbindungen\n• Langfristige Karriereplanung mit strategischer Zertifizierungsinvestition"
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
