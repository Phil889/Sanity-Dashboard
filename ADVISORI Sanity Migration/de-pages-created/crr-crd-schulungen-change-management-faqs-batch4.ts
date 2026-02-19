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
    console.log('Updating CRR/CRD Schulungen & Change Management page with FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'crr-crd-schulungen-change-management' })
    
    if (!existingDoc) {
      throw new Error('Document "crr-crd-schulungen-change-management" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können wir mit Widerständen und Erschöpfung bei wiederkehrenden regulatorischen Veränderungen (Regulatory Fatigue) umgehen?",
        answer: "Regulatory Fatigue ist ein zunehmendes Phänomen in Finanzinstituten, das die effektive Umsetzung von CRR/CRD-Anforderungen erheblich beeinträchtigen kann. Ein proaktiver, psychologisch fundierter Ansatz zur Adressierung von Veränderungsmüdigkeit und Widerständen ist entscheidend für nachhaltige regulatorische Transformationen.\n\n🧠 Psychologisches Verständnis und strategische Interventionen:\n• Veränderungskurve antizipieren: Erkennen Sie die typischen emotionalen Phasen bei regulatorischen Veränderungen – von anfänglicher Ablehnung über Frustration bis zur Akzeptanz – und planen Sie phasenspezifische Unterstützungsmaßnahmen.\n• Kognitive Umrahmung fördern: Unterstützen Sie Mitarbeiter dabei, regulatorische Veränderungen nicht als Bedrohung, sondern als Chance für professionelle Entwicklung und organisationale Verbesserung zu betrachten.\n• Kontrollerleben stärken: Schaffen Sie gezielt Möglichkeiten für Mitarbeiter, aktiv an der Gestaltung der Umsetzung regulatorischer Anforderungen mitzuwirken, um Gefühle der Machtlosigkeit zu reduzieren.\n• Psychologische Sicherheit etablieren: Kultivieren Sie ein Umfeld, in dem Bedenken, Unsicherheiten und Schwierigkeiten bei der Umsetzung regulatorischer Anforderungen offen angesprochen werden können.\n\n⚡ Energetisierende Maßnahmen gegen Regulatory Fatigue:\n• Erfolgsvisualisierung: Machen Sie regulatorische Fortschritte und erreichte Meilensteine sichtbar und feiern Sie diese aktiv, um positive Energien freizusetzen und Motivation zu stärken.\n• Micro-Win-Strategie: Strukturieren Sie regulatorische Transformationen so, dass regelmäßig kleine Erfolge erzielt werden können, die unmittelbare positive Wirkungen zeigen und Momentum schaffen.\n• Kapazitätsmanagement: Implementieren Sie bewusstes Ressourcenmanagement mit ausreichenden Regenerationsphasen zwischen intensiven regulatorischen Projekten, um chronische Überlastung zu vermeiden.\n• Veränderungspausen einplanen: Etablieren Sie bewusst Konsolidierungsphasen zwischen größeren regulatorischen Initiativen, in denen neue Prozesse stabilisiert und optimiert werden können.\n\n🔄 Strukturelle Ansätze zur Widerstandsreduktion:\n• Regulatory Change Konsolidierung: Bündeln Sie regulatorische Veränderungen strategisch in kohärente, sinnvolle Pakete statt isolierter Einzelmaßnahmen, um die wahrgenommene Veränderungsfrequenz zu reduzieren.\n• Priorisierungsklarheit schaffen: Entwickeln Sie transparente Kriterien zur Priorisierung regulatorischer Anforderungen und kommunizieren Sie klar, welche Initiativen Vorrang haben und warum.\n• Veränderungsportfolio-Management: Etablieren Sie einen zentralen Überblick und eine koordinierte Steuerung aller regulatorischen Veränderungsinitiativen, um Überlappungen zu vermeiden und Synergien zu nutzen.\n• Nachhaltige Governance-Strukturen: Implementieren Sie robuste, aber schlanke Governance-Mechanismen, die regulatorische Veränderungen effizient steuern, ohne zusätzliche bürokratische Belastungen zu schaffen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können wir den Wissenstransfer zwischen regulatorischen Experten und operativen Teams optimieren?",
        answer: "Der effektive Wissenstransfer zwischen regulatorischen Spezialisten und operativen Teams ist ein kritischer Erfolgsfaktor für nachhaltige CRR/CRD-Compliance. Die Überbrückung dieser Wissenslücke erfordert sowohl strukturelle Maßnahmen als auch kulturelle Interventionen, die den kontinuierlichen Austausch und die praktische Anwendung regulatorischen Wissens fördern.\n\n🌉 Strukturelle Brücken für systematischen Wissenstransfer:\n• Regulatory Business Partner Modell: Etablieren Sie dedizierte Rollen, die als Schnittstelle zwischen Regulatorik-Experten und operativen Bereichen fungieren und regulatorisches Wissen in geschäftlichen Kontext übersetzen.\n• Rotationsprogramme: Implementieren Sie temporäre Rotationen zwischen Compliance/Regulatory Affairs und operativen Abteilungen, um gegenseitiges Verständnis und praktische Einsichten in regulatorische Anforderungen zu fördern.\n• Integrierte Projektteams: Bilden Sie gemischte Teams aus regulatorischen Experten und operativen Mitarbeitern für die Implementierung neuer Anforderungen, um Wissenstransfer direkt in den Umsetzungsprozess zu integrieren.\n• Formalisierte Wissensweitergabe: Etablieren Sie strukturierte Übergabeprozesse bei der Implementierung neuer regulatorischer Anforderungen vom Projektteam in die Linienorganisation.\n\n🧩 Innovative Formate für wirkungsvollen Wissensaustausch:\n• Regulatory Shadowing: Ermöglichen Sie operativen Mitarbeitern, regulatorische Experten bei ihrer täglichen Arbeit zu begleiten und umgekehrt, um praktische Einblicke und Verständnis für die jeweiligen Herausforderungen zu gewinnen.\n• Regulatory Labs: Schaffen Sie kollaborative Räume, in denen regulatorische Experten und operative Teams gemeinsam an der praktischen Umsetzung regulatorischer Anforderungen arbeiten und experimentieren können.\n• Expert Teach Sessions: Etablieren Sie kurze, fokussierte Lernsessions, in denen regulatorische Experten spezifische Themen für operative Teams aufbereiten und direkte Fragen beantworten.\n• Praxisnahe Fallstudien-Workshops: Entwickeln Sie interaktive Workshops, in denen reale Geschäftssituationen aus regulatorischer Perspektive analysiert werden, um die praktische Anwendung von Compliance-Anforderungen zu verdeutlichen.\n\n🔍 Wissensmanagement und Zugänglichkeit:\n• Regulatory Knowledge Base: Implementieren Sie eine zentrale, benutzerfreundliche Wissensdatenbank mit praxisorientierten Leitfäden, FAQs und Anwendungsbeispielen zu regulatorischen Anforderungen.\n• Intelligente Suchfunktionen: Integrieren Sie moderne Such- und Empfehlungstechnologien, die relevante regulatorische Informationen kontextbezogen und leicht auffindbar machen.\n• Mikro-Dokumentation: Fördern Sie die Erstellung kurzer, fokussierter Dokumentationen zu spezifischen regulatorischen Themen, die praktische Handlungsanweisungen und konkrete Beispiele enthalten.\n• Visuelle Wissensaufbereitung: Nutzen Sie Infografiken, Prozessvisualisierungen und interaktive Schaubilder, um komplexe regulatorische Zusammenhänge verständlich darzustellen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche Best Practices gibt es für die Integration von CRR/CRD-Schulungen in bestehende Mitarbeiterentwicklungsprogramme?",
        answer: "Die strategische Integration von CRR/CRD-Schulungen in bestehende Personalentwicklungsprogramme ermöglicht eine nachhaltige Verankerung regulatorischer Kompetenzen und verhindert Schulungs-Silos. Eine ganzheitliche Integration fördert die Verbindung von regulatorischem Wissen mit beruflicher Entwicklung und operativer Exzellenz.\n\n📚 Strategische Ausrichtung und Synchronisation:\n• Regulatorischer Kompetenzrahmen: Entwickeln Sie einen umfassenden Kompetenzrahmen für regulatorische Fähigkeiten, der mit dem allgemeinen Kompetenzmodell Ihres Unternehmens harmoniert und in bestehende Entwicklungspfade integriert wird.\n• Career Path Integration: Verankern Sie regulatorische Kompetenzen explizit in Karrierepfaden und Rollenprofilen, sodass CRR/CRD-Expertise als wesentlicher Bestandteil der beruflichen Weiterentwicklung anerkannt wird.\n• Entwicklungsdialoge erweitern: Integrieren Sie regulatorische Kompetenzentwicklung in bestehende Mitarbeitergespräche und individuelle Entwicklungspläne mit konkreten Lernzielen und Fortschrittsmessung.\n• Learning Journey Mapping: Analysieren Sie die gesamte Lernreise von Mitarbeitern und identifizieren Sie optimale Integrationspunkte für regulatorische Inhalte, die mit anderen Lernaktivitäten harmonieren und aufeinander aufbauen.\n\n🔄 Methodische Integration in Entwicklungsformate:\n• Blended Leadership Programme: Integrieren Sie regulatorische Module in bestehende Führungskräfteentwicklungsprogramme, die speziell auf die Führungsrolle bei der Implementierung von CRR/CRD-Anforderungen fokussieren.\n• Integrierte Onboarding-Pfade: Entwickeln Sie rollenspezifische regulatorische Onboarding-Komponenten, die nahtlos in den allgemeinen Einarbeitungsprozess eingebettet sind und Grundlagen der CRR/CRD-Compliance vermitteln.\n• Cross-funktionale Projektarbeit: Nutzen Sie projektbasiertes Lernen, bei dem Teams regulatorische Herausforderungen als Teil umfassenderer Entwicklungsinitiativen bearbeiten.\n• Mentoring mit regulatorischem Fokus: Erweitern Sie bestehende Mentoring-Programme um eine regulatorische Dimension, indem erfahrene Compliance-Experten als Mentoren für fachliche und operative Führungskräfte fungieren.\n\n⚙️ Technische und prozessuale Integration:\n• LMS-Integration: Implementieren Sie eine nahtlose Integration regulatorischer Schulungsinhalte in Ihre bestehende Lernmanagementsystem-Architektur mit einheitlicher Nutzerführung und Lernfortschrittsverfolgung.\n• Single Learning Calendar: Etablieren Sie einen konsolidierten Lernkalender, der regulatorische Schulungen und allgemeine Entwicklungsaktivitäten integriert darstellt und Überschneidungen vermeidet.\n• Gemeinsame Lerndatenanalyse: Implementieren Sie ein übergreifendes Learning Analytics-System, das regulatorische und andere Lernaktivitäten gemeinsam analysiert und ganzheitliche Kompetenzentwicklung sichtbar macht.\n• Integrierte Zertifizierungspfade: Entwickeln Sie modulare Zertifizierungsprogramme, die regulatorische Expertise mit anderen beruflichen Qualifikationen kombinieren und formal anerkennen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können wir den Erfolg unserer CRR/CRD-Schulungs- und Change Management-Programme gegenüber dem Vorstand und den Aufsichtsbehörden nachweisen?",
        answer: "Der überzeugende Nachweis des Erfolgs regulatorischer Schulungs- und Change-Initiativen gegenüber Vorstand und Aufsichtsbehörden erfordert eine strategische Kombination aus quantitativen Metriken und qualitativen Evidenzen. Ein systematischer, mehrschichtiger Nachweisansatz demonstriert nicht nur Compliance, sondern auch den geschäftlichen Mehrwert Ihrer Programme.\n\n📊 Mehrdimensionales Erfolgsmessungssystem:\n• Compliance-Performance-Indikatoren: Implementieren Sie ein Kennzahlensystem, das die direkte Wirkung auf Compliance-relevante KPIs wie Reduzierung von Findings, verbesserte Prüfungsergebnisse und verkürzte Reaktionszeiten bei regulatorischen Anfragen misst.\n• Verhaltenswirksamkeitsanalyse: Erheben Sie systematisch Daten zur tatsächlichen Verhaltensänderung durch strukturierte Beobachtungen, Managementfeedback und operationale Risikoereignisse in Verbindung mit regulatorischen Schulungsinhalten.\n• Geschäftswertbeitrag: Quantifizieren Sie den wirtschaftlichen Mehrwert durch verbesserte Prozesseffizienz, reduzierte Compliance-Kosten, vermiedene Bußgelder und optimierte Kapitalallokation infolge verbesserter regulatorischer Expertise.\n• Reifegradbewertung: Führen Sie regelmäßige, strukturierte Assessments des organisationalen Reifegrads in Bezug auf regulatorische Kompetenz und CRR/CRD-spezifische Change-Fähigkeit durch.\n\n📑 Strategische Berichterstattung und Evidenzaufbereitung:\n• Executive Dashboard: Entwickeln Sie ein prägnantes, wirkungsorientiertes Dashboard für die Vorstandsebene, das die wichtigsten Erfolgsindikatoren konsolidiert und Trends visualisiert.\n• Narrativer Wirkungsnachweis: Ergänzen Sie quantitative Daten durch sorgfältig dokumentierte Fallstudien und Erfolgsgeschichten, die konkrete Beispiele für Verhaltensänderungen und Prozessverbesserungen illustrieren.\n• Benchmarking-Perspektive: Integrieren Sie externe Vergleichsdaten und Best-Practice-Referenzen, um die relative Leistungsfähigkeit Ihrer Schulungs- und Change-Programme im Branchenkontext zu demonstrieren.\n• Integrierte Risikoperspektive: Verknüpfen Sie Schulungs- und Change-Management-Erfolge explizit mit der Risikoreduktion in relevanten Risikokategorien und dem operationellen Risikoprofil des Instituts.\n\n🔍 Aufsichtsrechtlich überzeugende Nachweisführung:\n• Dokumentierte Governance: Stellen Sie eine lückenlose Dokumentation der Governance-Strukturen, Verantwortlichkeiten und Entscheidungsprozesse für Ihre Schulungs- und Change-Programme sicher.\n• Methodische Transparenz: Dokumentieren Sie detailliert die angewandten Methoden zur Bedarfsermittlung, Programmgestaltung, Wirksamkeitsmessung und kontinuierlichen Verbesserung.\n• Compliance-Mapping: Erstellen Sie eine explizite Zuordnung zwischen spezifischen CRR/CRD-Anforderungen und den entsprechenden Schulungs- und Change-Maßnahmen, um Vollständigkeit und Relevanz nachzuweisen.\n• Reaktionsfähigkeitsnachweis: Demonstrieren Sie anhand konkreter Beispiele, wie Ihr Schulungs- und Change-Management-System auf neue regulatorische Anforderungen und identifizierte Schwachstellen reagiert hat."
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
