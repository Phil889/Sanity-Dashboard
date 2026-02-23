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
    console.log('Updating EBA SREP Readiness page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eba-srep-readiness' })
    
    if (!existingDoc) {
      throw new Error('Document "eba-srep-readiness" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie sollten wir unsere Strategie zur Dokumentationsvorbereitung gestalten, um im SREP-Prozess eine überzeugende Darstellung unserer Governance und Risikomanagementpraktiken zu gewährleisten?",
        answer: "Die Dokumentationsvorbereitung ist ein kritischer Erfolgsfaktor im SREP-Prozess und geht weit über das bloße Sammeln von Unterlagen hinaus. Eine strategisch durchdachte Dokumentation kommuniziert nicht nur Compliance, sondern erzählt eine kohärente Geschichte Ihres Geschäftsmodells, Ihrer Governance und Ihres Risikomanagements. ADVISORI unterstützt Sie bei der Entwicklung einer überzeugenden Dokumentationsstrategie, die Ihre Stärken hervorhebt und potenzielle Schwachstellen adressiert.\n\n📑 Strategische Prinzipien für überzeugende SREP-Dokumentation:\n• Narrative Kohärenz statt Dokumentenstapel: Entwicklung eines durchgängigen Narrativs, das die Zusammenhänge zwischen Geschäftsmodell, Strategie, Governance, Risikomanagement und Kapitalplanung klar und nachvollziehbar darstellt.\n• Evidenzbasierte Argumentation: Unterstützung aller Aussagen durch konkrete Nachweise, Kennzahlen und Beispiele, die die praktische Umsetzung und Wirksamkeit Ihrer Maßnahmen belegen.\n• Proaktive Schwachstellenadressierung: Transparente Diskussion bekannter Schwachstellen, verbunden mit konkreten, zeitlich definierten Maßnahmenplänen – bevor die Aufsicht diese identifiziert.\n• Klare Verantwortlichkeiten und Entscheidungsprozesse: Präzise Darstellung der Governance-Strukturen mit eindeutigen Rollen, Verantwortlichkeiten und Eskalationswegen.\n• Konsistenz über alle Dokumente hinweg: Sicherstellung, dass alle Dokumente eine einheitliche Terminologie verwenden und keine widersprüchlichen Aussagen enthalten.\n\n🔍 ADVISORI's strukturierter Dokumentationsansatz:\n• Strategisches Dokumenten-Mapping: Entwicklung einer umfassenden Matrix, die alle SREP-relevanten Dokumentationsanforderungen erfasst und mit Ihren vorhandenen Dokumenten abgleicht.\n• Qualitätsgeprüfte Dokumentationshierarchie: Aufbau einer logisch strukturierten Dokumentenhierarchie von übergeordneten Strategiedokumenten bis hin zu detaillierten operativen Anweisungen und Nachweisen.\n• Gap-Analyse und Priorisierung: Identifikation von Dokumentationslücken und deren Priorisierung nach regulatorischer Relevanz und potenziellem Einfluss auf die SREP-Bewertung.\n• Gezielte Dokumentenoptimierung: Überarbeitung kritischer Dokumente, um Klarheit, Präzision und Nachvollziehbarkeit zu verbessern, ohne unnötige Komplexität hinzuzufügen.\n• Cross-funktionales Review-Verfahren: Implementierung eines strukturierten Prozesses zur Qualitätssicherung und Konsistenzprüfung aller SREP-relevanten Dokumente über Abteilungsgrenzen hinweg."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können wir unsere Risikomodelle und -bewertungsmethoden im Kontext des SREP optimieren, um eine angemessene Kapitalplanung zu gewährleisten und gleichzeitig regulatorische Anerkennung zu erhalten?",
        answer: "Die Optimierung von Risikomodellen und -bewertungsmethoden stellt eine zentrale Herausforderung im SREP-Kontext dar. Einerseits müssen diese Modelle regulatorischen Anforderungen genügen, andererseits sollen sie als wertvolle Steuerungsinstrumente dienen und die Geschäftsrealität angemessen abbilden. ADVISORI unterstützt Sie bei der Entwicklung einer ausgewogenen Modellierungsstrategie, die sowohl aufsichtsrechtliche Anerkennung als auch geschäftlichen Mehrwert sicherstellt.\n\n📊 Strategische Hebel für optimierte Risikomodellierung:\n• Balance zwischen Komplexität und Verständlichkeit: Entwicklung von Modellen, die komplex genug sind, um Risiken adäquat zu erfassen, aber verständlich genug, um fundierte Geschäftsentscheidungen zu unterstützen.\n• Integration neuer Risikodimensionen: Methodische Erweiterung Ihrer Risikomodelle um aufkommende Risikokategorien wie ESG-Risiken, Cyberrisiken oder strategische Risiken mit angemessener Quantifizierung.\n• Datenqualität als Fundament: Systematische Verbesserung der Datenqualität durch klar definierte Standards, Verantwortlichkeiten und Kontrollmechanismen als Grundlage für vertrauenswürdige Risikomodelle.\n• Modellvalidierung als kontinuierlicher Prozess: Etablierung eines robusten Validierungsframeworks, das nicht nur die initiale Modellvalidierung, sondern auch regelmäßige Überprüfungen der Modellperformance umfasst.\n• Aufsichtsgerechte Dokumentation: Entwicklung einer transparenten, nachvollziehbaren Dokumentation aller Modellannahmen, -grenzen und -unsicherheiten, die sowohl internen als auch externen Prüfungen standhält.\n\n🔬 ADVISORI's methodischer Ansatz zur Modelloptimierung:\n• Umfassende Modell-Inventarisierung: Erstellung eines vollständigen Inventars aller risikobeeinflussenden Modelle mit klarer Kategorisierung nach Risikotyp, Verwendungszweck und regulatorischer Relevanz.\n• Regulatorische Gap-Analyse: Identifikation von Lücken zwischen Ihren bestehenden Modellen und aktuellen sowie absehbaren regulatorischen Anforderungen mit konkreten Handlungsempfehlungen.\n• Benchmarking und Best Practices: Vergleich Ihrer Modellierungsansätze mit Branchenstandards und Best Practices zur Identifikation von Verbesserungspotenzialen.\n• Szenariobasierte Stresstests: Entwicklung differenzierter, zukunftsorientierter Stressszenarien, die auch extreme aber plausible Ereignisse abdecken und die Widerstandsfähigkeit Ihres Geschäftsmodells demonstrieren.\n• Implementierung eines Model Risk Management: Etablierung eines strukturierten Prozesses zur kontinuierlichen Überwachung, Bewertung und Minderung von Modellrisiken als integraler Bestandteil Ihres Risikomanagements."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir eine effektive Kommunikationsstrategie mit der Aufsichtsbehörde während des SREP-Prozesses entwickeln, die Transparenz fördert und gleichzeitig unsere strategischen Interessen wahrt?",
        answer: "Die Kommunikation mit der Aufsichtsbehörde im SREP-Prozess ist eine strategische Disziplin, die weit über die bloße Beantwortung von Anfragen hinausgeht. Eine durchdachte Kommunikationsstrategie kann maßgeblich zum Aufbau eines konstruktiven Dialogs beitragen und die Wahrnehmung Ihres Instituts positiv beeinflussen. ADVISORI unterstützt Sie dabei, eine ausgewogene Kommunikationsarchitektur zu entwickeln, die Transparenz mit strategischer Interessenswahrung verbindet.\n\n🗣️ Leitprinzipien für die SREP-Kommunikation:\n• Proaktive Transparenz: Offene Kommunikation von relevanten Entwicklungen, Herausforderungen und geplanten Maßnahmen, bevor die Aufsicht danach fragt – dies schafft Vertrauen und demonstriert Eigenverantwortung.\n• Konsistentes Narrativ: Entwicklung und konsequente Vermittlung einer kohärenten Geschichte über Ihr Geschäftsmodell, Ihre Strategie und Ihr Risikoprofil über alle Kommunikationskanäle und -ebenen hinweg.\n• Präzision und Klarheit: Vermeidung von Fachjargon und vagen Formulierungen zugunsten präziser, faktenbasierter und verständlicher Kommunikation, die Missverständnisse minimiert.\n• Balancierte Darstellung: Ehrliche Diskussion von Schwächen und Herausforderungen, verbunden mit konkreten Maßnahmenplänen, ohne dabei Stärken und bereits erzielte Fortschritte zu vernachlässigen.\n• Angemessene Eskalation: Etablierung klarer Eskalationswege für kritische Themen, um sicherzustellen, dass diese auf der richtigen Hierarchieebene und mit der angemessenen Dringlichkeit adressiert werden.\n\n📋 ADVISORI's strukturierter Kommunikationsansatz:\n• Stakeholder-Mapping: Identifikation aller relevanten Ansprechpartner auf Seiten der Aufsicht und Ihres Instituts mit klaren Kommunikationslinien und -verantwortlichkeiten.\n• Kommunikations-Governance: Entwicklung eines Frameworks, das regelt, wer wann mit wem über welche Themen kommuniziert, um Konsistenz zu gewährleisten und Informationsverluste zu vermeiden.\n• Thematische Vorbereitung: Antizipation potenzieller Fragen und Anliegen der Aufsicht mit sorgfältig vorbereiteten, evidenzbasierten Antworten und unterstützenden Materialien.\n• Kommunikationstraining: Schulung aller Mitarbeiter, die mit der Aufsicht in Kontakt treten, in effektiver Kommunikation, einschließlich Techniken zur präzisen Beantwortung komplexer Fragen.\n• Nachverfolgung und Dokumentation: Systematische Erfassung aller Interaktionen mit der Aufsicht, der vereinbarten Maßnahmen und Fristen, um lückenlose Nachverfolgung zu gewährleisten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können wir die Erkenntnisse aus dem SREP-Prozess effektiv nutzen, um kontinuierliche Verbesserungen in unserer Governance, unserem Risikomanagement und unserer strategischen Planung zu erzielen?",
        answer: "Der SREP-Prozess sollte nicht als einmaliges Prüfungsereignis, sondern als wertvolle Quelle für kontinuierliche Verbesserung betrachtet werden. Die systematische Nutzung von SREP-Erkenntnissen kann zu nachhaltigen Optimierungen in Governance, Risikomanagement und strategischer Planung führen. ADVISORI unterstützt Sie dabei, einen strukturierten Lernzyklus zu etablieren, der regulatorische Anforderungen in wertschöpfende Verbesserungen transformiert.\n\n🔄 Strukturierter Ansatz zur Nutzung von SREP-Erkenntnissen:\n• Systematische Auswertung der Feedback-Dimensionen: Entwicklung eines umfassenden Frameworks zur strukturierten Analyse aller SREP-Rückmeldungen, das quantitative Bewertungen, qualitative Kommentare und implizites Feedback integriert.\n• Tiefgreifende Ursachenanalyse: Identifikation der zugrundeliegenden Ursachen für kritische SREP-Feststellungen, statt nur die Symptome zu behandeln – oft liegen systemische Mängel in Prozessen, Governance oder Dateninfrastruktur zugrunde.\n• Priorisierung nach strategischer Relevanz: Bewertung der SREP-Erkenntnisse nicht nur nach aufsichtsrechtlicher Dringlichkeit, sondern auch nach ihrem potenziellen Beitrag zur Wertsteigerung und strategischen Entwicklung Ihres Instituts.\n• Cross-funktionale Maßnahmenentwicklung: Etablierung bereichsübergreifender Teams zur Entwicklung ganzheitlicher Lösungen, die Silodenken überwinden und nachhaltige Verbesserungen sicherstellen.\n• Kontinuierliches Monitoring der Wirksamkeit: Implementierung eines robusten Tracking-Systems, das nicht nur die Umsetzung von Maßnahmen, sondern auch deren tatsächliche Wirksamkeit überwacht.\n\n🚀 ADVISORI's transformativer Implementierungsansatz:\n• Integriertes Maßnahmenmanagement: Entwicklung eines zentralen Steuerungsinstruments, das alle SREP-bezogenen Aktivitäten koordiniert, Abhängigkeiten managt und Fortschritte transparent macht.\n• Kulturelle Verankerung: Unterstützung bei der Integration von SREP-Erkenntnissen in die Unternehmenskultur, sodass regulatorische Anforderungen nicht als externe Last, sondern als Chance zur Verbesserung wahrgenommen werden.\n• Agile Implementierungsmethodik: Anwendung agiler Prinzipien bei der Umsetzung komplexer Verbesserungsinitiativen, um schnelle Fortschritte zu erzielen und flexibel auf veränderte Anforderungen reagieren zu können.\n• Wissenstransfer und Capability Building: Aufbau interner Fähigkeiten zur selbstständigen Auswertung und Nutzung von SREP-Erkenntnissen, um langfristige Selbstständigkeit zu fördern.\n• Strategische Verankerung: Integration von SREP-Erkenntnissen in Ihre strategische Planung und Governance-Prozesse, um sicherzustellen, dass regulatorische Anforderungen und geschäftliche Ziele harmonisch aufeinander abgestimmt sind."
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
    console.log('✅ FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
