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
    console.log('Updating EBA Mitarbeiterschulungen & Sensibilisierung page with FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eba-mitarbeiterschulungen-sensibilisierung' })
    
    if (!existingDoc) {
      throw new Error('Document "eba-mitarbeiterschulungen-sensibilisierung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie können wir das Engagement und die Motivation unserer Mitarbeiter für EBA-Compliance-Schulungen steigern?",
        answer: "Die Steigerung von Engagement und intrinsischer Motivation für EBA-Compliance-Schulungen erfordert einen fundamentalen Perspektivwechsel – weg vom traditionellen Pflichtcharakter hin zu einem wertorientierten, mitarbeiterzentrierten Ansatz, der die persönliche und professionelle Relevanz in den Mittelpunkt stellt.\n\n🔥 Motivationspsychologische Ansätze für nachhaltiges Engagement:\n• Autonomie fördern: Ermöglichung von Wahlmöglichkeiten bezüglich Lernformat, -zeit und -pfad, um ein Gefühl von Selbstbestimmung statt externer Kontrolle zu vermitteln.\n• Kompetenzerleben stärken: Schaffung von Erfolgserlebnissen durch angepasste Schwierigkeitsgrade und unmittelbares, konstruktives Feedback, das Fortschritte sichtbar macht.\n• Sinnstiftung vermitteln: Konkrete Verdeutlichung der Verbindung zwischen regulatorischen Anforderungen und übergeordneten Werten wie Kundenschutz, Marktintegrität und persönlicher beruflicher Integrität.\n• Soziale Einbindung nutzen: Förderung kollaborativer Lernformate und Peer-Learning, die soziale Interaktion und gegenseitige Unterstützung ermöglichen.\n\n🛠️ Praktische Implementierungsstrategien:\n• Narrative Rahmung: Einbettung von Compliance-Inhalten in überzeugende Narrative und authentische Fallgeschichten, die emotionale Verbindungen schaffen und abstrakte Anforderungen konkretisieren.\n• Micro-Achievements: Implementierung eines abgestuften Systems von Anerkennungen, Badges und Zertifikaten, die kontinuierliches Lernen belohnen und sichtbar machen.\n• Reflexive Praxis: Integration regelmäßiger Reflexionsübungen, die persönliche Bezüge herstellen und die individuelle Relevanz von Compliance-Themen verdeutlichen.\n• Executive Storytelling: Einbindung von Führungskräften, die authentisch über die persönliche Bedeutung von Compliance in ihrer Karriere und Entscheidungsfindung berichten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Wie können wir die Effektivität unserer EBA-Compliance-Schulungen in verschiedenen Unternehmensbereichen und für unterschiedliche Zielgruppen optimieren?",
        answer: "Die Optimierung von EBA-Compliance-Schulungen für verschiedene Unternehmensbereiche und Zielgruppen erfordert einen differenzierten, multidimensionalen Ansatz, der die spezifischen Rollen, Risikoprofile, Lernpräferenzen und Anwendungskontexte systematisch berücksichtigt. Eine solche Segmentierung steigert nicht nur die Lerneffektivität, sondern auch die Ressourceneffizienz und Akzeptanz der Schulungsmaßnahmen.\n\n🔍 Dimensionen einer effektiven Schulungsdifferenzierung:\n• Funktionsspezifische Risikoprofile: Systematische Analyse der spezifischen Compliance-Risiken verschiedener Unternehmensfunktionen und Entwicklung maßgeschneiderter Schulungsinhalte, die genau diese Risikobereiche adressieren.\n• Hierarchieebenen und Entscheidungskompetenzen: Abstufung der Schulungstiefe und -perspektive je nach Verantwortungsbereich – von operativen Handlungsrichtlinien bis zu strategischen Governance-Implikationen.\n• Erfahrungsniveau und Vorwissen: Berücksichtigung des bestehenden Compliance-Wissens durch adaptive Lernsysteme, die redundante Inhalte vermeiden und gezielt Wissenslücken adressieren.\n• Lernpräferenzen und -stile: Angebot verschiedener didaktischer Formate und Zugangswege, die unterschiedliche Lerntypen (visuell, auditiv, kinästhetisch) und Präferenzen bedienen.\n\n📊 Framework für zielgruppenspezifische Schulungsarchitektur:\n• Core-Satellite-Prinzip: Entwicklung eines gemeinsamen Kernmoduls mit grundlegenden EBA-Prinzipien, ergänzt durch funktions- und rollenspezifische Erweiterungsmodule.\n• Modularisierte Lernpfade: Definition differenzierter Lernpfade mit gemeinsamen und spezifischen Komponenten, die exakt auf die Anforderungsprofile verschiedener Zielgruppen zugeschnitten sind.\n• Personalisierte Learning Journeys: Nutzung KI-gestützter Lernplattformen, die basierend auf individuellen Profilen, Verhaltensmustern und Leistungsdaten maßgeschneiderte Lernempfehlungen generieren.\n• Kontextspezifische Mikromodule: Entwicklung hochspezifischer, kurzer Lerneinheiten, die genau in den Arbeitskontext verschiedener Rollen integriert werden können und Just-in-Time-Learning ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Welche besonderen Herausforderungen gibt es bei der Schulung von externen Mitarbeitern und Dienstleistern zu EBA-Vorschriften, und wie können wir diese bewältigen?",
        answer: "Die Schulung externer Mitarbeiter und Dienstleister in EBA-Compliance stellt Finanzinstitute vor spezifische Herausforderungen, die über die internen Schulungskomplexitäten hinausgehen. Diese Herausforderungen erfordern dedizierte Strategien, die rechtliche, organisatorische und kulturelle Dimensionen berücksichtigen und gleichzeitig hohe Compliance-Standards sicherstellen.\n\n🔄 Kernherausforderungen und strategische Lösungsansätze:\n• Eingeschränkte organisatorische Kontrolle: Im Gegensatz zu internen Mitarbeitern haben Institute begrenzte Weisungs- und Kontrollmöglichkeiten gegenüber Externen, was alternative Governance-Mechanismen erfordert.\n• Lösung: Implementierung klarer vertraglicher Compliance-Anforderungen mit definierten KPIs, Schulungsnachweisen und regelmäßigen Compliance-Assessments als verbindliche Vertragsbestandteile.\n\n• Variierende Compliance-Kulturen: Externe Dienstleister bringen unterschiedliche Compliance-Kulturen und -verständnisse mit, die mit den institutseigenen Standards harmonisiert werden müssen.\n• Lösung: Entwicklung eines \"Compliance-Onboarding\"-Programms, das die spezifische Compliance-Philosophie und -Erwartungen des Instituts transparent vermittelt und kulturelle Brücken baut.\n\n• Zugangs- und Sicherheitsbedenken: Die Bereitstellung von Schulungsinhalten für Externe birgt potenzielle Sicherheitsrisiken bezüglich sensibler regulatorischer und geschäftlicher Informationen.\n• Lösung: Etablierung einer segregierten Lerninfrastruktur mit differenzierten Zugriffsrechten und granularen Inhaltszuweisungen, die sensible Informationen schützt.\n\n🛠️ Praxiserprobte Implementierungsstrategien:\n• Hybrid-Schulungsmodell: Kombination von standardisierten, externen Compliance-Grundlagenschulungen mit instituts- und projektspezifischen Ergänzungsmodulen, die genau auf die konkrete Rolle und Funktion zugeschnitten sind.\n• Compliance-Champions-Netzwerk: Benennung dedizierter Ansprechpartner auf beiden Seiten, die als Schnittstelle für Compliance-Fragen fungieren und kontinuierlichen Wissenstransfer sicherstellen.\n• Cascading Responsibility Model: Etablierung eines Kaskadensystems, bei dem primäre Dienstleister Verantwortung für die Compliance-Schulung ihrer Subunternehmer übernehmen und entsprechende Nachweise erbringen müssen.\n• Collaborative Compliance Platform: Implementierung einer gemeinsamen digitalen Plattform, die Schulungsinhalte, Policies, Fallbeispiele und Kommunikationskanäle für alle Beteiligten zugänglich macht und Compliance-Wissen demokratisiert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie können wir die Kosten für umfassende EBA-Compliance-Schulungen optimieren und gleichzeitig höchste Qualitätsstandards sicherstellen?",
        answer: "Die Optimierung des Kosten-Nutzen-Verhältnisses von EBA-Compliance-Schulungen erfordert einen strategischen Ansatz, der über einfache Kostensenkungsmaßnahmen hinausgeht und stattdessen auf Wertsteigerung, intelligente Ressourcenallokation und nachhaltige Effizienzgewinne fokussiert. Ein solcher Ansatz betrachtet Compliance-Schulungen als strategische Investition mit messbarem ROI statt als reinen Kostenfaktor.\n\n💰 Strategische Hebel zur Kostenoptimierung bei gleichbleibender Qualität:\n• Risikoorientierte Ressourcenallokation: Systematische Priorisierung von Schulungsinvestitionen basierend auf differenzierten Risikoprofilen verschiedener Funktionen und Prozesse, um Ressourcen dort zu konzentrieren, wo sie den größten Compliance-Impact haben.\n• Skaleneffekte durch Modularisierung: Entwicklung wiederverwendbarer, modularer Schulungskomponenten, die flexibel kombiniert und für verschiedene Zielgruppen angepasst werden können, statt isolierter Einzellösungen.\n• Technologiegestützte Skalierung: Strategischer Einsatz digitaler Lernplattformen und automatisierter Prozesse, die einmal entwickelte Inhalte kosteneffizient skalieren und administrative Aufwände minimieren.\n• Make-or-Buy-Optimierung: Differenzierte Entscheidung zwischen Eigenentwicklung und Zukauf von Schulungskomponenten basierend auf strategischer Relevanz, verfügbarer Expertise und Kostenfaktoren.\n\n📈 Wertsteigernde Implementierungsstrategien:\n• Learning Ecosystem statt isolierter Schulungen: Entwicklung eines integrierten Lernökosystems, das formale Schulungen mit Peer-Learning, Praxistransfer und kontinuierlichem Microlearning verbindet und damit nachhaltigere Lerneffekte bei geringerem Formalschulungsaufwand erzielt.\n• Performance Support statt Wissensvermittlung: Verlagerung des Fokus von umfassender Wissensspeicherung hin zu kontextbezogenen Unterstützungssystemen, die Mitarbeiter genau dann unterstützen, wenn sie Compliance-Entscheidungen treffen müssen.\n• Datengesteuerte Optimierung: Implementierung fortschrittlicher Analytics zur kontinuierlichen Evaluation der Schulungswirksamkeit und gezielten Anpassung von Investitionen basierend auf nachgewiesenen Effektivitätsdaten.\n• Strategische Wissensallianzen: Aufbau von Kooperationen mit anderen Finanzinstituten, Branchenverbänden oder Bildungseinrichtungen zur gemeinsamen Entwicklung grundlegender Schulungsinhalte und Teilung der Investitionskosten."
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
