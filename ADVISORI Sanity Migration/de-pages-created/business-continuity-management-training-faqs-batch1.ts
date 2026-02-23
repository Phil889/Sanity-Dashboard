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
    console.log('Updating Business Continuity Management Training page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'business-continuity-management-training' })
    
    if (!existingDoc) {
      throw new Error('Document "business-continuity-management-training" not found')
    }
    
    // Create new FAQs for BCM Training fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche verschiedenen BCM-Trainingsformate gibt es und welches ist für meine Organisation am besten geeignet?',
        answer: "Die Auswahl des richtigen BCM-Trainingsformats ist entscheidend für den nachhaltigen Lernerfolg und die praktische Anwendbarkeit des erworbenen Wissens. Verschiedene Formate sprechen unterschiedliche Lerntypen an und eignen sich für verschiedene organisationale Kontexte und Zielgruppen.\n\n🎓 Präsenzschulungen und Workshops:\n• Klassische Seminarformate bieten direkten Austausch mit Trainern und anderen Teilnehmern\n• Interaktive Workshops ermöglichen praktische Übungen und Gruppenarbeiten\n• Rollenspiele und Simulationen schaffen realitätsnahe Lernerfahrungen\n• Sofortiges Feedback und individuelle Betreuung durch erfahrene Trainer\n• Networking-Möglichkeiten mit anderen BCM-Praktikern und Branchenexperten\n\n💻 E-Learning und digitale Plattformen:\n• Flexible Zeiteinteilung und ortsunabhängiges Lernen für busy professionals\n• Selbstbestimmtes Lerntempo mit Möglichkeit zur Wiederholung komplexer Inhalte\n• Interaktive Module mit Multimedia-Inhalten und praktischen Übungen\n• Fortschrittstracking und automatische Bewertung des Lernfortschritts\n• Kosteneffiziente Skalierung für große Organisationen mit vielen Teilnehmern\n\n🔄 Blended Learning Ansätze:\n• Kombination aus Online-Modulen und Präsenzveranstaltungen für optimale Flexibilität\n• Theoretische Grundlagen werden online vermittelt, praktische Anwendung in Workshops\n• Kontinuierliche Betreuung durch digitale Plattformen zwischen Präsenzterminen\n• Anpassung an verschiedene Lernstile und organisationale Anforderungen\n• Nachhaltige Kompetenzentwicklung durch langfristige Lernbegleitung\n\n🏢 Inhouse-Schulungen und maßgeschneiderte Programme:\n• Spezifische Anpassung an organisationale Gegebenheiten und Branchenanforderungen\n• Integration realer Geschäftsszenarien und unternehmensinterner Fallstudien\n• Vertrauliche Behandlung sensibler Unternehmensinformationen\n• Kosteneffizienz bei größeren Teilnehmerzahlen aus derselben Organisation\n• Möglichkeit zur Entwicklung organisationsspezifischer BCM-Standards und Verfahren\n\n🎯 Spezialisierte Trainingsformate:\n• Executive Briefings für Führungskräfte mit Fokus auf strategische Aspekte\n• Technische Workshops für IT-Spezialisten und Disaster Recovery Teams\n• Branchenspezifische Schulungen für regulierte Industrien wie Finanzdienstleistungen\n• Train-the-Trainer Programme für interne Multiplikatoren\n• Zertifizierungsvorbereitungskurse für internationale BCM-Standards"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie entwickle ich ein effektives BCM-Schulungsprogramm für verschiedene Zielgruppen in meiner Organisation?',
        answer: "Die Entwicklung eines effektiven BCM-Schulungsprogramms erfordert eine systematische Herangehensweise, die verschiedene Zielgruppen, Kompetenzniveaus und organisationale Anforderungen berücksichtigt. Ein durchdachtes Programm schafft nachhaltiges Bewusstsein und praktische Handlungsfähigkeit auf allen Organisationsebenen.\n\n📊 Bedarfsanalyse und Zielgruppensegmentierung:\n• Systematische Erfassung der aktuellen BCM-Kenntnisse und Kompetenzen in der Organisation\n• Identifikation verschiedener Zielgruppen wie Führungskräfte, Fachspezialisten, operative Teams\n• Analyse spezifischer Rollen und Verantwortlichkeiten im BCM-Kontext\n• Bewertung regulatorischer Anforderungen und Compliance-Verpflichtungen\n• Definition klarer Lernziele und Kompetenzprofile für jede Zielgruppe\n\n🎯 Zielgruppenspezifische Inhaltsgestaltung:\n• Executive Level benötigt strategische Perspektiven, Governance und Business Case Entwicklung\n• Middle Management fokussiert auf Implementierung, Koordination und Change Management\n• Operative Teams erhalten praktische Handlungsanweisungen und Verfahrenstraining\n• Spezialistengruppen wie IT erhalten technische Vertiefung in Disaster Recovery\n• Support-Funktionen lernen ihre spezifische Rolle in Krisensituationen\n\n📚 Modularer Programmaufbau:\n• Foundation Module schaffen gemeinsame Wissensbasis für alle Teilnehmer\n• Spezialisierungsmodule vertiefen rollenspezifische Kompetenzen\n• Praktische Übungsmodule ermöglichen Anwendung des theoretischen Wissens\n• Refresher-Module halten Kenntnisse aktuell und vertiefen Verständnis\n• Assessment-Module bewerten Lernfortschritt und identifizieren Verbesserungsbereiche\n\n🔄 Implementierungsstrategie und Rollout:\n• Pilotprogramme testen Inhalte und Methoden mit ausgewählten Gruppen\n• Stufenweise Einführung beginnend mit Führungskräften und Multiplikatoren\n• Integration in bestehende Schulungsprogramme und HR-Entwicklungspfade\n• Kommunikationsstrategie schafft Bewusstsein und Motivation für Teilnahme\n• Kontinuierliche Anpassung basierend auf Feedback und Lernerfahrungen\n\n📈 Erfolgsmessung und kontinuierliche Verbesserung:\n• Definition messbarer Lernziele und Kompetenzindikatoren\n• Regelmäßige Bewertung durch Tests, praktische Übungen und Feedback\n• Langfristige Erfolgsmessung durch BCM-Performance und Krisenbereitschaft\n• Anpassung der Programme basierend auf sich ändernden Anforderungen\n• Aufbau einer Lernkultur mit kontinuierlicher Kompetenzentwicklung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche praktischen Übungen und Simulationen sind besonders effektiv für BCM-Training?',
        answer: "Praktische Übungen und Simulationen bilden das Herzstück effektiver BCM-Schulungen, da sie theoretisches Wissen in anwendbare Fähigkeiten transformieren. Durch realitätsnahe Szenarien entwickeln Teilnehmer die Kompetenz, in Krisensituationen angemessen zu reagieren und fundierte Entscheidungen zu treffen.\n\n🎲 Tabletop-Übungen und Szenario-Simulationen:\n• Strukturierte Diskussionsrunden basierend auf realistischen Krisenszenarien\n• Rollenverteilung entsprechend der tatsächlichen organisationalen Struktur\n• Zeitdruck-Simulationen zur Entwicklung von Entscheidungsfähigkeit unter Stress\n• Kommunikationsübungen zwischen verschiedenen Stakeholder-Gruppen\n• Evaluation von Entscheidungsprozessen und Identifikation von Verbesserungsmöglichkeiten\n\n🏢 Business Impact Analysis Workshops:\n• Praktische Durchführung von BIA für reale Geschäftsprozesse der Organisation\n• Identifikation kritischer Abhängigkeiten und Vulnerabilitäten\n• Quantifizierung von Ausfallzeiten und finanziellen Auswirkungen\n• Priorisierung von Geschäftsfunktionen basierend auf Kritikalität\n• Entwicklung von Recovery Time und Recovery Point Objectives\n\n🔧 Kontinuitätsplanung und Strategieentwicklung:\n• Hands-on Entwicklung von Business Continuity Plänen für spezifische Bereiche\n• Auswahl und Bewertung verschiedener Kontinuitätsstrategien\n• Ressourcenplanung und Kapazitätsbewertung für alternative Arbeitsplätze\n• Integration von Technologie-Lösungen und manuellen Workarounds\n• Testing und Validierung entwickelter Kontinuitätspläne\n\n📞 Krisenmanagement und Kommunikationsübungen:\n• Simulation von Krisenstäben und Entscheidungsgremien\n• Übung interner und externer Kommunikationsstrategien\n• Medientraining und Stakeholder-Management in Krisensituationen\n• Koordination zwischen verschiedenen Organisationsebenen und externen Partnern\n• Dokumentation und Reporting während simulierter Krisenereignisse\n\n🔄 Recovery und Lessons Learned Prozesse:\n• Simulation von Wiederanlaufprozessen nach Störungsereignissen\n• Übung der Rückkehr zum Normalbetrieb und Kapazitätswiederherstellung\n• Post-Incident Reviews und Analyse von Verbesserungsmöglichkeiten\n• Aktualisierung von Plänen basierend auf Übungserfahrungen\n• Integration von Lessons Learned in organisationale Wissensbasis\n\n🎮 Innovative Trainingsmethoden:\n• Virtual Reality Simulationen für immersive Krisenerfahrungen\n• Gamification-Ansätze zur Steigerung von Engagement und Motivation\n• Mobile Apps für situatives Lernen und Just-in-Time Training\n• Peer-Learning und Erfahrungsaustausch zwischen Organisationen\n• Kontinuierliche Micro-Learning Module für nachhaltige Kompetenzentwicklung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie messe ich den Erfolg von BCM-Schulungen und stelle nachhaltige Kompetenzentwicklung sicher?',
        answer: "Die Messung des Schulungserfolgs und die Sicherstellung nachhaltiger Kompetenzentwicklung sind kritische Erfolgsfaktoren für jedes BCM-Trainingsprogramm. Ein systematischer Ansatz zur Erfolgsmessung ermöglicht kontinuierliche Verbesserung und demonstriert den Wert der Investition in BCM-Schulungen.\n\n📊 Kirkpatrick-Modell für BCM-Training:\n• Reaction Level misst Teilnehmerzufriedenheit und unmittelbare Reaktionen auf das Training\n• Learning Level bewertet Wissenszuwachs und Verständnis von BCM-Konzepten\n• Behavior Level evaluiert Anwendung erlernter Fähigkeiten im Arbeitsalltag\n• Results Level misst organisationale Auswirkungen auf BCM-Performance und Resilienz\n• Return on Investment quantifiziert den finanziellen Nutzen der Schulungsinvestition\n\n🎯 Kompetenzbasierte Bewertungsmethoden:\n• Pre- und Post-Training Assessments zur Messung des Wissenszuwachses\n• Praktische Übungen und Simulationen zur Bewertung angewandter Fähigkeiten\n• Peer-Bewertungen und Feedback von Kollegen und Vorgesetzten\n• Selbsteinschätzungen zur Reflexion des eigenen Lernfortschritts\n• Langfristige Kompetenzentwicklung durch regelmäßige Follow-up Bewertungen\n\n📈 Leistungsindikatoren und Metriken:\n• Teilnahmequoten und Completion Rates für verschiedene Trainingsmodule\n• Verbesserung in BCM-Awareness Surveys und Organisationsumfragen\n• Qualität und Vollständigkeit von Business Continuity Plänen\n• Performance in Krisenübungen und Business Continuity Tests\n• Reduktion von Recovery-Zeiten und Verbesserung der organisationalen Resilienz\n\n🔄 Kontinuierliche Kompetenzentwicklung:\n• Individuelle Entwicklungspläne basierend auf Bewertungsergebnissen\n• Mentoring-Programme zur Unterstützung von Nachwuchskräften\n• Communities of Practice für kontinuierlichen Wissensaustausch\n• Refresher-Training und Updates zu neuen BCM-Entwicklungen\n• Integration von BCM-Kompetenzen in Performance Management Systeme\n\n🎓 Zertifizierung und Anerkennung:\n• Interne Zertifizierungsprogramme für verschiedene BCM-Kompetenzstufen\n• Vorbereitung auf externe Zertifizierungen wie ISO oder BCI\n• Anerkennung und Belohnung für herausragende BCM-Performance\n• Karriereentwicklungspfade für BCM-Spezialisten\n• Integration in organisationale Talent Management Strategien\n\n📱 Technologie-unterstützte Erfolgsmessung:\n• Learning Management Systeme für automatisiertes Tracking und Reporting\n• Analytics und Dashboards zur Visualisierung von Trainingsfortschritten\n• Mobile Apps für kontinuierliches Feedback und Micro-Assessments\n• AI-basierte Empfehlungen für personalisierte Lernpfade\n• Integration mit HR-Systemen für ganzheitliche Kompetenzentwicklung"
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
    console.log('✅ FAQ batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
