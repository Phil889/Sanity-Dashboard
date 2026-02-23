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
    console.log('Updating EBA Prüfungsmanagement & Follow-up page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eba-pruefungsmanagement-follow-up' })
    
    if (!existingDoc) {
      throw new Error('Document "eba-pruefungsmanagement-follow-up" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können wir die Interaktion mit den EBA-Prüfern so gestalten, dass sie zu einem konstruktiven Dialog statt zu einer reinen Prüfungssituation wird?",
        answer: "Die Qualität der Interaktion mit EBA-Prüfern kann maßgeblich den Verlauf und das Ergebnis einer Prüfung beeinflussen. Ein strategisch durchdachter Kommunikationsansatz transformiert die Prüferinteraktion von einer defensiven Rechtfertigungssituation zu einem konstruktiven fachlichen Austausch, der Mehrwert für beide Seiten generiert und das Vertrauen der Aufsicht in Ihr Institut stärkt.\n\n🤝 Elemente einer konstruktiven Prüferinteraktion:\n• Proaktive Transparenz: Offene und ehrliche Kommunikation zu Stärken und auch bekannten Schwachstellen Ihrer Organisation, bevor die Prüfer diese selbst identifizieren – dies demonstriert Problembewusstsein und Verbesserungswillen.\n• Fachliche Augenhöhe: Positionierung Ihrer Experten als kompetente Gesprächspartner mit tiefgreifendem Verständnis der regulatorischen Anforderungen und ihrer praktischen Umsetzung im spezifischen Kontext Ihres Instituts.\n• Lösungsorientierung: Fokussierung auf konstruktive Lösungsansätze statt auf Rechtfertigungen oder defensive Haltungen bei identifizierten Schwachstellen.\n• Konsistente Kommunikation: Sicherstellung einer einheitlichen, widerspruchsfreien Kommunikation aller Interviewpartner durch systematische Vorbereitung und Abstimmung.\n\n📝 ADVISORIs Ansatz zur Optimierung der Prüferinteraktion:\n• Strategische Interviewvorbereitung: Wir entwickeln mit Ihren Fachexperten maßgeschneiderte Vorbereitungsmaterialien, die typische Fragenkomplexe antizipieren und klare, konsistente Antworten formulieren.\n• Mock-Interviews und Simulationen: Durchführung realistischer Prüfungssimulationen mit erfahrenen Ex-Aufsehern, die authentisches Feedback zur Interviewperformance geben und Verbesserungspotenziale aufzeigen.\n• Narrative Entwicklung: Erarbeitung konsistenter, faktenbasierter Narrative zu kritischen Themenkomplexen, die von allen Beteiligten stringent kommuniziert werden.\n• Kommunikationscoaching: Individuelles Training für Interviewteilnehmer zu Gesprächstechniken, Körpersprache und dem Umgang mit kritischen oder unerwarteten Fragen in Prüfungssituationen.\n\nDurch diesen strategischen Kommunikationsansatz positionieren Sie Ihr Institut nicht nur als compliant, sondern als vorausschauenden, reflektierten Partner der Aufsicht, der kontinuierliche Verbesserung als integralen Bestandteil seiner Unternehmenskultur versteht. Dies fördert langfristig ein positives Aufsichtsverhältnis, das über reine Compliance hinausgeht und regulatorische Risiken nachhaltig minimiert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche spezifischen Herausforderungen stellen sich bei der Nachverfolgung und Umsetzung von EBA-Prüfungsfeststellungen und wie unterstützt ADVISORI bei deren Bewältigung?",
        answer: "Die Nachverfolgung und wirksame Umsetzung von EBA-Prüfungsfeststellungen stellt Finanzinstitute vor komplexe Herausforderungen, die weit über das bloße Management einer Maßnahmenliste hinausgehen. Die effektive Bewältigung dieser Herausforderungen erfordert einen systematischen, multidimensionalen Ansatz, der regulatorische, organisatorische und technische Aspekte integriert.\n\n⚠️ Kernherausforderungen im Feststellungsmanagement:\n• Komplexitätsbewältigung: EBA-Feststellungen adressieren oft vielschichtige, bereichsübergreifende Problemstellungen, die koordinierte Maßnahmen auf verschiedenen Ebenen erfordern.\n• Ressourcenkonkurrenz: Die Umsetzung von Prüfungsfeststellungen konkurriert mit operativen Anforderungen und anderen regulatorischen Projekten um begrenzte Ressourcen und Expertise.\n• Nachhaltigkeitssicherung: Die Herausforderung, über die formale Abarbeitung hinaus tatsächliche, dauerhafte Verbesserungen in Prozessen, Systemen und der Organisationskultur zu verankern.\n• Stakeholder-Management: Die Notwendigkeit, verschiedene interne und externe Stakeholder mit unterschiedlichen Prioritäten, Erwartungen und Zeithorizonten effektiv zu orchestrieren.\n\n🛠️ ADVISORIs integrierter Unterstützungsansatz:\n• Strukturierte Feststellungsanalyse: Wir führen eine tiefgreifende Analyse der Feststellungen durch, identifizieren Interdependenzen und clustern sie nach Ursachenkomplexen statt nach oberflächlichen Symptomen.\n• Maßnahmenarchitektur: Entwicklung einer kohärenten Maßnahmenarchitektur, die Abhängigkeiten berücksichtigt, Synergien maximiert und eine logische Implementierungssequenz definiert.\n• Governance-Framework: Implementierung eines spezialisierten Governance-Frameworks für das Feststellungsmanagement mit klaren Verantwortlichkeiten, Eskalationswegen und Entscheidungsprozessen.\n• Integriertes Controlling: Etablierung eines multidimensionalen Controlling-Systems, das neben Fortschritt und Termintreue auch Qualität, Ressourceneffizienz und nachhaltige Wirksamkeit der Maßnahmen überwacht.\n\nDurch diesen ganzheitlichen Ansatz transformiert ADVISORI das Management von Prüfungsfeststellungen von einer reaktiven Compliance-Übung zu einem strategischen Instrument der kontinuierlichen Organisationsverbesserung. Wir stellen sicher, dass Maßnahmen nicht nur formal abgeschlossen, sondern tatsächlich in Ihrer Organisation verankert werden und messbare Verbesserungen in Prozessen, Kontrollen und letztlich in der Prüfungsfähigkeit Ihres Instituts bewirken."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir die Erfahrungen und Ergebnisse aus früheren EBA-Prüfungen strategisch nutzen, um zukünftige Prüfungen effizienter zu gestalten und bessere Resultate zu erzielen?",
        answer: "Die systematische Nutzung von Erkenntnissen aus vergangenen EBA-Prüfungen stellt einen entscheidenden Wettbewerbsvorteil dar, der weit über reaktives Compliance-Management hinausgeht. Ein strukturierter Lernansatz ermöglicht es, Prüfungserfahrungen in strategisches Wissen zu transformieren und dieses proaktiv zur kontinuierlichen Verbesserung Ihrer regulatorischen Positionierung einzusetzen.\n\n📚 Strategische Nutzung von Prüfungserfahrungen:\n• Institutionelles Gedächtnis: Aufbau eines strukturierten Wissensmanagementsystems, das Prüfungserfahrungen, Feststellungen und erfolgreiche Lösungsansätze systematisch erfasst und für künftige Prüfungen zugänglich macht.\n• Muster- und Trendanalyse: Identifikation wiederkehrender Themen, Schwerpunkte und methodischer Muster in EBA-Prüfungen, um künftige Prüfungsfokusthemen zu antizipieren und präventiv zu adressieren.\n• Best-Practice-Übertragung: Systematische Übertragung erfolgreicher Ansätze und Lösungen aus einzelnen Prüfungsbereichen auf andere Geschäftsbereiche oder Themenfelder, um Synergien zu nutzen und Redundanzen zu vermeiden.\n• Prüfungsperformance-Optimierung: Kontinuierliche Verfeinerung der Prüfungsprozesse basierend auf Feedback und Erfahrungen aus früheren Prüfungen, um Effizienz zu steigern und Reibungsverluste zu minimieren.\n\n🔄 ADVISORIs Ansatz zur Prüfungserfahrungsnutzung:\n• Strukturierte Retrospektiven: Wir führen nach jeder Prüfung systematische Lessons-Learned-Workshops durch, die sowohl inhaltliche als auch prozessuale Erkenntnisse dokumentieren und in konkrete Verbesserungsmaßnahmen überführen.\n• Feststellungsdatenbank: Implementierung einer intelligenten Datenbank, die Prüfungsfeststellungen kategorisiert, kontextualisiert und mit erfolgreichen Lösungsansätzen und Implementierungsbeispielen verknüpft.\n• Prüfungssimulationen: Durchführung realistischer Prüfungssimulationen basierend auf vergangenen Erfahrungen, um Schwachstellen proaktiv zu identifizieren und Verbesserungspotenziale zu erschließen.\n• Prüfungskalender-Management: Entwicklung eines vorausschauenden Prüfungskalenders, der regulatorische Entwicklungen, institutsspezifische Risikoprofile und frühere Prüfungsschwerpunkte integriert, um kommende Prüfungsfokusthemen zu antizipieren.\n\nDurch diesen strategischen Lernansatz transformiert ADVISORI Ihre Prüfungserfahrungen von punktuellen Ereignissen zu einem kontinuierlichen Verbesserungsprozess, der Ihre regulatorische Positionierung nachhaltig stärkt, Risiken proaktiv minimiert und Prüfungseffizienz systematisch steigert. Dies führt nicht nur zu besseren Prüfungsergebnissen, sondern auch zu einer optimierten Ressourcenallokation und einem verbesserten Verhältnis zu den Aufsichtsbehörden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie kann unser Institut ein strukturiertes Eskalationsmanagement für kritische Situationen während EBA-Prüfungen etablieren?",
        answer: "Ein effektives Eskalationsmanagement während EBA-Prüfungen ist entscheidend, um auf kritische Situationen angemessen und zeitnah reagieren zu können. Die strukturierte Handhabung von Eskalationen ermöglicht es, potenzielle Risiken frühzeitig zu entschärfen und eine souveräne Prüfungsführung auch in herausfordernden Situationen zu gewährleisten.\n\n⚡ Kernelemente eines effektiven Prüfungs-Eskalationsmanagements:\n• Eskalationsstufen und -kriterien: Definition klarer, objektivierbarer Kriterien für verschiedene Eskalationsstufen, die präzise festlegen, wann und unter welchen Umständen eine Eskalation ausgelöst werden sollte.\n• Entscheidungskompetenzen und Verantwortlichkeiten: Unmissverständliche Zuweisung von Entscheidungsbefugnissen für jede Eskalationsstufe mit klaren Vertretungsregelungen und Verfügbarkeitsanforderungen.\n• Kommunikationswege und -protokolle: Festlegung effizientester Kommunikationswege für Eskalationen unter Berücksichtigung der Dringlichkeit, Vertraulichkeit und der einzubeziehenden Stakeholder.\n• Dokumentation und Nachbereitung: Systematische Erfassung aller Eskalationen, ihrer Ursachen, getroffenen Entscheidungen und Ergebnisse zur kontinuierlichen Prozessverbesserung.\n\n🔔 ADVISORIs Implementierungsansatz für Eskalationsmanagement:\n• Eskalationsframework: Wir entwickeln ein maßgeschneidertes Eskalationsframework, das präzise auf Ihre Organisationsstruktur, Entscheidungsprozesse und das spezifische Risikoprofil Ihres Instituts abgestimmt ist.\n• Eskalationssimulationen: Durchführung praxisnaher Simulationsübungen für typische Eskalationsszenarien, um Prozesse zu testen, Schwachstellen zu identifizieren und Entscheidungsträger auf Eskalationssituationen vorzubereiten.\n• Strategisches Eskalationscoaching: Spezialisiertes Coaching für Schlüsselpersonen im Eskalationsprozess zu Themen wie Entscheidungsfindung unter Druck, Stakeholder-Management und aufsichtsrechtlich sensible Kommunikation.\n• Eskalations-Toolbox: Bereitstellung einer pragmatischen Toolbox mit standardisierten Vorlagen, Checklisten und Entscheidungsbäumen, die in Eskalationssituationen schnelles und strukturiertes Handeln ermöglichen.\n\nDurch die Implementierung eines professionellen Eskalationsmanagements stärkt ADVISORI die Souveränität und Handlungsfähigkeit Ihres Instituts in kritischen Prüfungssituationen. Dies minimiert nicht nur regulatorische Risiken, sondern stärkt auch das Vertrauen der Aufsicht in die Steuerungsfähigkeit Ihrer Organisation. Ein effektives Eskalationsmanagement demonstriert proaktive Problemlösungskompetenz und unterstreicht die Professionalität Ihres Prüfungsmanagements gegenüber den Aufsichtsbehörden."
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
