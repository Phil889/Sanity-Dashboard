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
    console.log('Updating CRR/CRD Schulungen & Change Management page with FAQs batch 1...')
    
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
        question: "Wie können wir ein effektives Schulungsprogramm für CRR/CRD entwickeln, das sowohl für Spezialisten als auch für allgemeine Mitarbeiter relevant ist?",
        answer: "Ein wirkungsvolles CRR/CRD-Schulungsprogramm muss die Balance zwischen fachlicher Tiefe und praktischer Anwendbarkeit finden, während es gleichzeitig auf die unterschiedlichen Wissensbedarfe verschiedener Zielgruppen eingeht. Die Entwicklung eines solchen Programms erfordert einen strategischen, mehrschichtigen Ansatz, der sowohl Expertenwissen vermittelt als auch breitere Compliance-Awareness schafft.\n\n🎯 Strategische Gestaltung eines differenzierten Schulungsprogramms:\n• Zielgruppenanalyse und Segmentierung: Kategorisieren Sie Ihre Mitarbeiter nach Rollen, Verantwortlichkeiten und Berührungspunkten mit CRR/CRD-Themen - von Vorstand und Spezialisten bis hin zu allgemeinen Mitarbeitern mit indirekten Berührungspunkten.\n• Modularer Aufbau mit Basiswissen und Spezialisierungen: Entwickeln Sie ein Grundlagenmodul für alle Mitarbeiter und darauf aufbauende Spezialmodule für unterschiedliche Fachbereiche wie Treasury, Risikomanagement, Reporting oder IT.\n• Multi-Methoden-Ansatz: Kombinieren Sie verschiedene Lernformate wie interaktive Workshops, E-Learning-Module, Fallstudien, Simulationen und Microlearning-Einheiten, um unterschiedliche Lernpräferenzen anzusprechen.\n• Praxisorientierung durch Fallbeispiele: Integrieren Sie unternehmensspezifische Anwendungsfälle, die aufzeigen, wie CRR/CRD-Anforderungen konkret den Arbeitsalltag der jeweiligen Zielgruppe beeinflussen.\n\n🧠 Differenzierte Inhalte für verschiedene Zielgruppen:\n• Vorstand und oberes Management: Fokus auf strategische Implikationen, Kapitalplanungsauswirkungen und Governance-Verantwortlichkeiten mit kompakten Executive Briefings.\n• Fachspezialisten: Tiefgehende technische Schulungen zu spezifischen CRR/CRD-Themen wie Eigenmittelanforderungen, Risikogewichtung oder ICAAP/ILAAP-Prozesse mit praktischen Anwendungsübungen.\n• Mittleres Management: Fokus auf Umsetzungsverantwortung, Kontrollmechanismen und Eskalationswege bei Compliance-Verstößen durch interaktive Fallstudien.\n• Allgemeine Mitarbeiter: Bewusstseinsbildung für die Bedeutung von Regulierung, Grundverständnis relevanter Anforderungen und Sensibilisierung für Compliance-Risiken im eigenen Arbeitsbereich.\n\n📊 Erfolgsmessung und kontinuierliche Optimierung:\n• Mehrstufige Evaluation: Implementieren Sie ein Evaluationssystem, das Zufriedenheit, Wissenszuwachs, Verhaltensänderung und geschäftliche Auswirkungen misst.\n• Continuous Learning: Etablieren Sie regelmäßige Updates und Auffrischungskurse, die aktuelle regulatorische Entwicklungen aufgreifen und in bestehende Wissensbasis integrieren.\n• Wissenstransfer-Mechanismen: Fördern Sie den Austausch zwischen Experten und anderen Mitarbeitern durch Mentoring-Programme, Communities of Practice oder interne Wissensdatenbanken."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Change Management-Strategien sind besonders effektiv, um Widerstände gegen regulatorische Veränderungen zu überwinden?",
        answer: "Regulatorische Veränderungen stoßen häufig auf organisatorische Widerstände, die weit über technische Herausforderungen hinausgehen. Ein strategisches Change Management, das psychologische, kulturelle und strukturelle Faktoren berücksichtigt, ist entscheidend für eine erfolgreiche CRR/CRD-Implementation. Die effektivsten Ansätze adressieren sowohl rationale als auch emotionale Dimensionen des Wandels.\n\n🔄 Fundamentale Change Management-Strategien für regulatorische Transformationen:\n• Compelling Narrative entwickeln: Schaffen Sie eine überzeugende Geschichte, die erklärt, warum die Veränderung notwendig ist, welche Vorteile sie bringt (jenseits bloßer Compliance) und wie sie mit der Unternehmensstrategie zusammenhängt.\n• Early Stakeholder Engagement: Identifizieren und involvieren Sie Schlüsselpersonen frühzeitig im Prozess, besonders informelle Meinungsführer, die die Akzeptanz in ihren Einflussbereichen maßgeblich prägen können.\n• Transparente Kommunikationsstrategie: Etablieren Sie einen mehrkanaligen Kommunikationsplan mit klaren, konsistenten Botschaften, die regelmäßig und zielgruppengerecht über den Fortschritt, Erfolge und Herausforderungen informieren.\n• Quick Wins identifizieren: Planen Sie bewusst frühe Erfolgserlebnisse ein, die sichtbare Verbesserungen demonstrieren und Momentum für den weiteren Veränderungsprozess schaffen.\n\n🛠️ Praktische Taktiken zur Überwindung spezifischer Widerstände:\n• Mangelndes Verständnis: Bieten Sie verständliche Erklärungen und visualisieren Sie komplexe Zusammenhänge; nutzen Sie Analogien und Storytelling, um abstrakte regulatorische Konzepte greifbar zu machen.\n• Komfortzonenverlust: Entwickeln Sie umfassende Unterstützungsangebote wie persönliches Coaching, Hilfestellungen und geschützte Übungsräume für neue Prozesse und Systeme.\n• Ressourcenkonkurrenz: Stellen Sie dedizierte Ressourcen für die Implementierung bereit und integrieren Sie die Veränderungsarbeit in Performance-Bewertungen und Zielvereinbarungen.\n• Historische Misserfolge: Erkennen Sie vergangene Schwierigkeiten explizit an und erläutern Sie, welche Lehren daraus gezogen wurden und welche konkreten Maßnahmen diesmal anders gestaltet werden.\n\n🧩 Integrative Implementierungsansätze:\n• Pilot-Ansatz: Testen Sie Veränderungen zunächst in begrenzten Bereichen, sammeln Sie Feedback und Erfahrungen und adaptieren Sie den Ansatz, bevor Sie ihn organisationsweit ausrollen.\n• Multiplikatoren-Netzwerk: Bilden Sie ein Netzwerk von Change Agents aus verschiedenen Abteilungen und Hierarchieebenen, die als Botschafter fungieren und lokale Anpassungen unterstützen.\n• Co-Creation-Workshops: Gestalten Sie partizipative Formate, in denen Betroffene aktiv an der Entwicklung von Lösungen mitwirken können, was Ownership und Akzeptanz signifikant steigert.\n• Psychologisch sichere Umgebung: Fördern Sie eine Kultur, in der offenes Feedback, kritische Fragen und das Ansprechen von Bedenken ausdrücklich erwünscht sind und konstruktiv aufgegriffen werden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir die Wirksamkeit unserer CRR/CRD-Schulungsmaßnahmen messen und nachhaltig sicherstellen?",
        answer: "Die Messung und nachhaltige Sicherstellung der Wirksamkeit von CRR/CRD-Schulungsmaßnahmen erfordert einen systematischen, mehrschichtigen Evaluationsansatz, der über traditionelle Zufriedenheitsumfragen hinausgeht. Ein effektives Wirksamkeitsmanagement verbindet quantitative Metriken mit qualitativen Erkenntnissen und verankert den kontinuierlichen Lernprozess in der Organisationsstruktur.\n\n📏 Mehrdimensionales Evaluationsframework:\n• Reaktionsebene: Erfassen Sie unmittelbares Feedback zur Schulungsqualität, Relevanz und Anwendbarkeit der Inhalte durch strukturierte Befragungen und offene Feedbackformate.\n• Lernebene: Messen Sie den tatsächlichen Wissenszuwachs durch Pre- und Post-Assessments, praxisnahe Fallstudien und Anwendungsszenarien, die reale regulatorische Herausforderungen simulieren.\n• Verhaltensebene: Evaluieren Sie die tatsächliche Anwendung des Gelernten im Arbeitsalltag durch strukturierte Beobachtungen, Peer-Feedback-Mechanismen und gezielte Vorgesetztenbefragungen.\n• Ergebnisebene: Analysieren Sie die Auswirkungen auf geschäftliche KPIs wie Reduzierung von Compliance-Verstößen, verkürzte Implementierungszeiten für regulatorische Änderungen oder verbesserte Prüfungsergebnisse.\n\n🔄 Integrierter Continuous Learning-Kreislauf:\n• Regelmäßige Wissens-Refresher: Implementieren Sie automatisierte Erinnerungssysteme mit mikromodularen Auffrischungseinheiten, die kritisches Wissen regelmäßig reaktivieren.\n• Spaced Repetition-Konzepte: Nutzen Sie wissenschaftlich fundierte Wiederholungsintervalle für Schlüsselkonzepte, um die Langzeitspeicherung im Gedächtnis zu optimieren.\n• Performance Support Tools: Entwickeln Sie Just-in-Time-Hilfsmittel wie digitale Assistenten, Entscheidungsbäume oder interaktive Prozessführer, die im Arbeitsmoment Unterstützung bieten.\n• Communities of Practice: Etablieren Sie fachliche Austauschnetzwerke, in denen Mitarbeiter regulatorische Themen diskutieren, Best Practices teilen und gemeinsam Lösungen entwickeln können.\n\n🧪 Innovative Ansätze zur Wirksamkeitssteigerung:\n• Gamification-Elemente: Integrieren Sie spielerische Komponenten wie Challenges, Punktesysteme oder Wettbewerbe, die kontinuierliches Lernen motivierend gestalten.\n• Adaptive Learning-Technologien: Setzen Sie KI-gestützte Lernplattformen ein, die individuelle Wissenslücken identifizieren und personalisierte Lernpfade generieren.\n• Scenario-Based Assessments: Entwickeln Sie komplexe Simulationen, die reale regulatorische Entscheidungssituationen abbilden und die Anwendung von Wissen in kontextbezogenen Situationen testen.\n• Peer Teaching-Formate: Fördern Sie Formate, in denen Mitarbeiter selbst als Experten auftreten und ihr Wissen weitergeben, was sowohl das Lernen als auch das Commitment verstärkt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können wir die digitale Transformation nutzen, um unsere regulatorischen Schulungs- und Change Management-Prozesse zu optimieren?",
        answer: "Die digitale Transformation bietet revolutionäre Möglichkeiten, regulatorische Schulungs- und Change Management-Prozesse grundlegend neu zu gestalten. Durch den strategischen Einsatz digitaler Technologien können Sie nicht nur die Effizienz und Skalierbarkeit Ihrer Programme steigern, sondern auch personalisierte, kontextbezogene Lernerfahrungen schaffen, die nachhaltige Verhaltensänderungen bewirken.\n\n💻 Digitale Lernarchitekturen für regulatorische Excellence:\n• Adaptive Lernplattformen: Implementieren Sie KI-gestützte Systeme, die individuelles Vorwissen, Lernverhalten und Wissenslücken analysieren und darauf basierend personalisierte Lernpfade für CRR/CRD-Themen generieren.\n• Microlearning-Ökosysteme: Entwickeln Sie ein System kurzer, fokussierter Lerneinheiten zu spezifischen regulatorischen Themen, die flexibel in den Arbeitsalltag integrierbar sind und Just-in-Time-Learning ermöglichen.\n• Virtual Reality für Szenario-Training: Nutzen Sie immersive VR-Simulationen, um komplexe regulatorische Entscheidungssituationen realitätsnah zu trainieren - vom Management regulatorischer Krisen bis zur Vorbereitung auf Aufsichtsgespräche.\n• Mobile Learning Applications: Entwickeln Sie dedizierte Apps, die regulatorisches Wissen jederzeit zugänglich machen und durch Push-Benachrichtigungen über regulatorische Updates informieren.\n\n🔄 Digitale Change Management-Werkzeuge:\n• Change Analytics Dashboards: Implementieren Sie Echtzeit-Dashboards, die den Fortschritt der regulatorischen Transformation visualisieren, Engpässe identifizieren und datenbasierte Entscheidungen ermöglichen.\n• Digitale Kollaborationsplattformen: Nutzen Sie spezialisierte Tools, die abteilungsübergreifende Zusammenarbeit bei regulatorischen Projekten fördern und Wissenssilos aufbrechen.\n• Change-Bot-Technologien: Setzen Sie KI-gestützte Chatbots ein, die Mitarbeitern rund um die Uhr bei Fragen zu regulatorischen Veränderungen zur Verfügung stehen und individuell abgestimmte Unterstützung bieten.\n• Sentiment Analysis Tools: Analysieren Sie Stimmungen und Haltungen der Organisation gegenüber regulatorischen Veränderungen durch automatisierte Textanalyse von Feedback, Diskussionen und internen Kommunikationskanälen.\n\n📱 Integrierte digitale Lern- und Arbeitsumgebungen:\n• Workflow Learning Integration: Integrieren Sie Lernelemente direkt in bestehende Arbeitsprozesse und Systeme, sodass regulatorisches Wissen genau dann vermittelt wird, wenn es angewendet werden muss.\n• Knowledge Graph-Technologien: Implementieren Sie semantische Netzwerke, die komplexe regulatorische Zusammenhänge visualisieren und kontextbezogene Navigation durch regulatorisches Wissen ermöglichen.\n• Social Learning Plattformen: Fördern Sie kollaboratives Lernen durch digitale Communities, in denen Experten und Praktiker regulatorische Themen diskutieren, Best Practices teilen und gemeinsam Lösungen entwickeln.\n• Learning Experience Plattformen (LXP): Setzen Sie moderne LXPs ein, die kuratierte Lerninhalte zu regulatorischen Themen mit sozialen Elementen, personalisierten Empfehlungen und informellem Lernen verbinden."
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
