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
    console.log('Updating Aufbau interner KI-Kompetenzen page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'aufbau-interner-ki-kompetenzen' })
    
    if (!existingDoc) {
      throw new Error('Document "aufbau-interner-ki-kompetenzen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche spezifischen Skills-Development-Frameworks nutzt ADVISORI für den systematischen Aufbau von KI-Kompetenzen und wie werden diese an verschiedene Zielgruppen angepasst?',
        answer: "ADVISORI entwickelt maßgeschneiderte Skills-Development-Frameworks, die auf bewährten Lerntheorien basieren und gleichzeitig die spezifischen Anforderungen der KI-Domäne berücksichtigen. Unser Ansatz kombiniert theoretisches Fundament mit praktischer Anwendung und schafft nachhaltige Lernpfade für verschiedene Rollen und Kompetenzniveaus innerhalb der Organisation.\n\n🎯 Rollenspezifische Kompetenz-Frameworks:\n• Executive Leadership Track: Strategische KI-Kompetenz für C-Level und Senior Management, fokussiert auf Geschäftswert, Risikomanagement und strategische Entscheidungsfindung.\n• Technical Specialist Track: Tiefgreifende technische Ausbildung für Entwickler, Data Scientists und IT-Architekten mit Hands-on-Projekten und Zertifizierungen.\n• Business Analyst Track: KI-Anwendungskompetenz für Fachbereiche, um Use Cases zu identifizieren und KI-Projekte zu spezifizieren.\n• Compliance und Legal Track: Spezialisierte Schulungen für Rechts- und Compliance-Teams zu KI-Regulierung, Datenschutz und ethischen Aspekten.\n\n📚 ADVISORI's Adaptive Learning Methodology:\n• Competency-Based Learning: Strukturierte Lernpfade basierend auf klar definierten Kompetenzzielen und messbaren Lernergebnissen.\n• Blended Learning Approach: Kombination aus Online-Modulen, Präsenz-Workshops, Mentoring und praktischen Projekten für optimale Wissensvermittlung.\n• Progressive Skill Building: Aufbauende Lernmodule, die von Grundlagen zu fortgeschrittenen Anwendungen führen und kontinuierliche Erfolgserlebnisse schaffen.\n• Real-World Application: Integration echter Geschäftsprojekte in den Lernprozess für sofortige Anwendung und Wertschöpfung.\n\n🔄 Kontinuierliche Anpassung und Personalisierung:\n• Individual Learning Paths: Personalisierte Lernpfade basierend auf Vorkenntnissen, Rolle und Karrierezielen der Teilnehmer.\n• Adaptive Assessment: Kontinuierliche Bewertung des Lernfortschritts mit Anpassung der Inhalte und Geschwindigkeit.\n• Peer Learning Networks: Aufbau von Lerngemeinschaften für Wissensaustausch und kollaborative Problemlösung.\n• Feedback-Integration: Systematische Einbindung von Teilnehmer-Feedback zur kontinuierlichen Verbesserung der Lernprogramme."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Wie entwickelt ADVISORI effektive Trainingsmethodologien für KI-Kompetenzen und welche innovativen Ansätze nutzen wir für nachhaltiges Lernen und Wissenstransfer?',
        answer: "ADVISORI setzt auf innovative Trainingsmethodologien, die über traditionelle Schulungsansätze hinausgehen und nachhaltiges Lernen durch erfahrungsbasierte, interaktive und praxisorientierte Methoden fördern. Unser Ansatz kombiniert neueste Erkenntnisse aus der Lernforschung mit bewährten Praktiken aus der KI-Ausbildung für maximale Lerneffektivität und langfristige Kompetenzentwicklung.\n\n🧠 Innovative Lernmethodologien:\n• Experiential Learning: Hands-on-Projekte mit realen Datensätzen und Geschäftsproblemen, die sofortige Anwendung und tiefes Verständnis fördern.\n• Gamification und Simulation: Spielerische Lernelemente und KI-Simulationen, die komplexe Konzepte zugänglich machen und Motivation steigern.\n• Microlearning Modules: Kurze, fokussierte Lerneinheiten, die in den Arbeitsalltag integriert werden können und kontinuierliches Lernen ermöglichen.\n• Collaborative Problem Solving: Teambasierte Herausforderungen, die interdisziplinäre Zusammenarbeit und Wissensaustausch fördern.\n\n🔬 Praxisorientierte Wissensvermittlung:\n• Lab-Based Learning: Dedizierte KI-Labore mit aktueller Technologie für praktische Experimente und Prototyping.\n• Case Study Integration: Reale Fallstudien aus verschiedenen Branchen für kontextualisiertes Lernen und Transferfähigkeit.\n• Mentorship Programs: Pairing von Lernenden mit erfahrenen KI-Praktikern für individualisierte Betreuung und Karriereentwicklung.\n• Reverse Mentoring: Jüngere, technisch versierte Mitarbeiter unterstützen Führungskräfte beim Verständnis neuer KI-Technologien.\n\n📈 Nachhaltige Wissensverankerung:\n• Spaced Repetition: Wissenschaftlich fundierte Wiederholungszyklen für langfristige Wissensretention und Kompetenzaufbau.\n• Knowledge Communities: Aufbau interner Wissensgemeinschaften für kontinuierlichen Austausch und kollektives Lernen.\n• Documentation und Knowledge Base: Systematische Dokumentation von Lerninhalten und Best Practices für organisationales Gedächtnis.\n• Continuous Reinforcement: Regelmäßige Auffrischungen und Updates zu neuen Entwicklungen für aktuelle Kompetenzerhaltung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Welche Methoden nutzt ADVISORI für umfassende Kompetenz-Assessments und wie entwickeln wir daraus zielgerichtete Zertifizierungsprogramme für verschiedene KI-Rollen?',
        answer: "ADVISORI entwickelt wissenschaftlich fundierte Kompetenz-Assessment-Methoden, die sowohl technische Fähigkeiten als auch strategisches Verständnis und praktische Anwendungskompetenz bewerten. Unsere Assessments bilden die Grundlage für maßgeschneiderte Zertifizierungsprogramme, die branchenweite Anerkennung genießen und echte Kompetenz validieren.\n\n🔍 Multi-dimensionale Assessment-Frameworks:\n• Technical Proficiency Testing: Praktische Bewertung von Programmier-, Modellierungs- und Datenanalysefähigkeiten durch reale Projektaufgaben.\n• Strategic Thinking Assessment: Evaluation der Fähigkeit, KI-Potenziale zu identifizieren und in Geschäftsstrategien zu übersetzen.\n• Ethical Reasoning Evaluation: Bewertung des Verständnisses für KI-Ethik, Bias-Erkennung und verantwortungsvolle KI-Entwicklung.\n• Communication und Leadership Skills: Assessment der Fähigkeit, KI-Konzepte zu kommunizieren und interdisziplinäre Teams zu führen.\n\n🏆 Rollenspezifische Zertifizierungsprogramme:\n• AI Strategy Certification: Für Führungskräfte und Strategieverantwortliche, fokussiert auf KI-Governance, ROI-Bewertung und Transformationsmanagement.\n• Technical AI Practitioner Certification: Für Entwickler und Data Scientists mit praktischen Projekten und Code-Reviews.\n• AI Ethics und Compliance Certification: Spezialisierte Zertifizierung für Compliance-Verantwortliche und Rechtsexperten.\n• AI Business Analyst Certification: Für Fachbereichsexperten, die KI-Use-Cases identifizieren und spezifizieren.\n\n📊 Kontinuierliche Kompetenz-Validierung:\n• Portfolio-Based Assessment: Bewertung realer Projekte und Arbeitsergebnisse für authentische Kompetenzvalidierung.\n• Peer Review Processes: Integration von Kollegenbewertungen für ganzheitliche Kompetenzeinschätzung.\n• Industry Benchmarking: Vergleich mit branchenweiten Standards und Best Practices für objektive Bewertung.\n• Adaptive Testing: KI-gestützte Assessments, die sich an das Kompetenzniveau der Teilnehmer anpassen und präzise Ergebnisse liefern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie stellt ADVISORI sicher, dass KI-Kompetenzentwicklung nicht nur technische Skills umfasst, sondern auch kritisches Denken, Ethik und verantwortungsvolle KI-Nutzung fördert?',
        answer: "ADVISORI verfolgt einen ganzheitlichen Ansatz zur KI-Kompetenzentwicklung, der technische Exzellenz mit ethischer Verantwortung und kritischem Denken verbindet. Wir verstehen, dass nachhaltige KI-Adoption mehr erfordert als nur technische Fähigkeiten – sie braucht reflektierte Praktiker, die die gesellschaftlichen und geschäftlichen Auswirkungen ihrer Arbeit verstehen und verantwortungsvoll handeln.\n\n🧭 Ethik-zentrierte Kompetenzentwicklung:\n• AI Ethics Integration: Ethische Überlegungen sind in alle technischen Module integriert, nicht als separates Thema behandelt.\n• Bias Detection und Mitigation: Praktische Schulungen zur Erkennung und Vermeidung von Algorithmus-Bias in realen Anwendungen.\n• Fairness und Transparency: Entwicklung von Fähigkeiten zur Schaffung erklärbarer und fairer KI-Systeme.\n• Stakeholder Impact Analysis: Methoden zur Bewertung der Auswirkungen von KI-Entscheidungen auf verschiedene Interessengruppen.\n\n🤔 Kritisches Denken und Reflexionsfähigkeit:\n• Socratic Questioning: Einsatz sokratischer Fragetechniken zur Förderung kritischer Analyse von KI-Anwendungen.\n• Case-Based Ethical Dilemmas: Diskussion realer ethischer Dilemmata aus der KI-Praxis für Entwicklung moralischer Urteilsfähigkeit.\n• Systems Thinking: Schulung in systemischem Denken zur Verständnis komplexer Wechselwirkungen in KI-Systemen.\n• Scenario Planning: Entwicklung von Fähigkeiten zur Antizipation unbeabsichtigter Konsequenzen von KI-Implementierungen.\n\n🌍 Gesellschaftliche Verantwortung und Impact:\n• Social Impact Assessment: Methoden zur Bewertung gesellschaftlicher Auswirkungen von KI-Projekten und -Produkten.\n• Inclusive Design Principles: Schulung in inklusiven Designprinzipien für KI-Systeme, die alle Nutzergruppen berücksichtigen.\n• Regulatory Awareness: Umfassendes Verständnis aktueller und kommender KI-Regulierung für compliance-konforme Entwicklung.\n• Continuous Ethical Reflection: Etablierung von Prozessen für kontinuierliche ethische Reflexion und Verbesserung in KI-Projekten."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ C-Level FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
