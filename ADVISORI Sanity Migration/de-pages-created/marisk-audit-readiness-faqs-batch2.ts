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
    console.log('Updating MaRisk Audit Readiness page with FAQs batch 2...')
    
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
        question: "Wie können Finanzinstitute ein effektives Dokumentenmanagement für MaRisk-Prüfungen implementieren?",
        answer: "Ein effektives Dokumentenmanagement ist ein zentraler Erfolgsfaktor für MaRisk-Prüfungen, da die zeitnahe Bereitstellung qualitativ hochwertiger Dokumente direkt die Prüfungseffizienz und die Wahrnehmung des Instituts durch die Prüfer beeinflusst. Die richtige Dokumentenstrategie kann Wochen an Prüfungsaufwand einsparen und die Feststellungswahrscheinlichkeit signifikant reduzieren.\n\n📂 Kernprinzipien eines prüfungsorientierten Dokumentenmanagements:\n• Proaktive Dokumentenverwaltung: Kontinuierliche Pflege und Bereitstellung prüfungsrelevanter Dokumente anstelle reaktiver Sammlung erst bei Prüfungsankündigung, um Qualität und Vollständigkeit zu gewährleisten.\n• Risikobasierte Priorisierung: Fokussierung besonderer Sorgfalt auf Dokumente mit hoher aufsichtlicher Relevanz und potenziellen Compliance-Risiken, wie Strategien, Konzepte und Nachweise der Wirksamkeit von Kontrollen.\n• Single Point of Truth: Etablierung einer zentralen, autorisierten Quelle für jedes prüfungsrelevante Dokument, um Versionskonflikte und Inkonsistenzen zu vermeiden.\n• Governance-integrierte Qualitätssicherung: Verankerung klarer Verantwortlichkeiten, Review-Prozesse und Freigabemechanismen als integraler Bestandteil des Dokumentenlebenszyklus.\n\n🔧 Praktische Implementierungsstrategien:\n• Prüfungsanforderungskatalog: Entwicklung und Pflege eines umfassenden Katalogs typischer Dokumentenanforderungen basierend auf vorherigen Prüfungen und regulatorischen Entwicklungen als Basis für die proaktive Dokumentenvorbereitung.\n• Strukturierte Dokumentenablage: Implementierung eines logischen, MaRisk-orientierten Ablagesystems mit klarer Nomenklatur, Kategorisierung und Metadaten für schnellen Zugriff und transparente Navigation.\n• Integrierte Qualitätsprüfprozesse: Etablierung automatisierter und manueller Qualitätschecks für Vollständigkeit, Aktualität und formale Korrektheit aller prüfungsrelevanten Dokumente mit regelmäßigen Stichproben.\n• Kollaborative Review-Werkzeuge: Nutzung von Technologien, die strukturierte Feedback-Prozesse und kollaborative Überarbeitungen ermöglichen, mit klarer Versionierung und Audit-Trails zu Änderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Ansätze zur Mitarbeiterschulung und -vorbereitung haben sich für MaRisk-Prüfungen als besonders wirksam erwiesen?",
        answer: "Die gezielte Vorbereitung und Schulung der Mitarbeiter ist ein oft unterschätzter, aber entscheidender Erfolgsfaktor für MaRisk-Prüfungen. Gut vorbereitete Mitarbeiter vermitteln ein positives Bild des Instituts, liefern präzise und konsistente Auskünfte und können potenzielle Missverständnisse frühzeitig klären. Eine durchdachte Schulungsstrategie ist daher eine wirkungsvolle Investition in die Prüfungsqualität.\n\n👨‍💼 Strategische Schulungsansätze für maximale Prüfungseffektivität:\n• Zielgruppenspezifische Vorbereitung: Differenzierung der Schulungsintensität und -inhalte nach Wahrscheinlichkeit und Relevanz der Prüfungsbeteiligung - von intensiven Trainings für Key-Stakeholder bis zu grundlegenden Briefings für potenziell tangierte Mitarbeiter.\n• Kompetenzbasierte Schulungsinhalte: Fokussierung auf die spezifischen Anforderungen verschiedener Prüfungsrollen, von fachlich-inhaltlicher Expertise für primäre Ansprechpartner bis zu prozessualem Know-how für Koordinatoren.\n• Realitätsnahe Simulationen: Durchführung praxisnaher Mock-Interviews und Rollenspiele unter realistischen Bedingungen, idealerweise mit erfahrenen Ex-Prüfern, um Stresssituationen zu antizipieren und Antwortstrategien zu verinnerlichen.\n• Continuous-Learning-Ansatz: Integration der Prüfungsvorbereitung in kontinuierliche Weiterbildungsprogramme statt isolierter Schulungen kurz vor Prüfungen, um nachhaltiges Wissen und Bewusstsein zu schaffen.\n\n🎓 Implementierungsbausteine eines wirksamen Schulungsprogramms:\n• Kommunikations- und Interviewtrainings: Vermittlung von Techniken für klare, präzise und faktenbezogene Kommunikation in Prüfungssituationen, einschließlich des angemessenen Umgangs mit kritischen oder unerwarteten Fragen.\n• Themenspezifische Deep-Dives: Durchführung vertiefender Schulungen zu aktuellen aufsichtlichen Schwerpunktthemen und bekannten Risikobereichen, um fachliche Expertise in potenziellen Fokusfeldern zu stärken.\n• Dokumentations-Workshops: Praktische Übungen zur effektiven Erstellung und Präsentation prüfungsrelevanter Unterlagen und Nachweise mit Fokus auf Klarheit, Nachvollziehbarkeit und Konsistenz.\n• Kollegiale Wissensvermittlung: Etablierung strukturierter Formate zum Erfahrungsaustausch zwischen Mitarbeitern mit vorheriger Prüfungserfahrung und neuen Prüfungsteilnehmern zur Weitergabe praktischer Insights und Lessons Learned."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können Prozesswalkthroughs effektiv als Instrument zur MaRisk-Prüfungsvorbereitung eingesetzt werden?",
        answer: "Prozesswalkthroughs sind ein mächtiges Instrument zur MaRisk-Prüfungsvorbereitung, da sie einen ganzheitlichen Blick auf die praktische Umsetzung regulatorischer Anforderungen ermöglichen. Im Gegensatz zu reinen Dokumentenprüfungen decken sie die Lücke zwischen dokumentierten Soll-Prozessen und gelebter Praxis auf und identifizieren potenzielle Schwachstellen aus der Prüferperspektive.\n\n🔄 Strategische Prinzipien für effektive Prozesswalkthroughs:\n• End-to-End-Betrachtung: Durchführung vollständiger Prozessdurchläufe von der Initiierung bis zum Abschluss, um Schnittstellenrisiken und Übergabeprobleme zu identifizieren, die bei isolierter Betrachtung einzelner Prozessschritte übersehen werden könnten.\n• Mehrperspektivischer Ansatz: Integration verschiedener Blickwinkel in den Walkthrough - vom operativen Mitarbeiter über Kontrollfunktionen bis zu externen Experten - um blinde Flecken zu vermeiden und ein umfassendes Risikoverständnis zu entwickeln.\n• Regulatorischer Fokus: Ausrichtung der Walkthroughs an den spezifischen Anforderungen und Erwartungen der MaRisk, mit besonderem Augenmerk auf aufsichtliche Schwerpunktthemen und bekannte Prüfungsfokusfelder.\n• Evidenzbasierte Validierung: Konsequente Verifizierung von Prozessschritten und Kontrollen anhand tatsächlicher Beispiele und Nachweise, um die praktische Wirksamkeit und nicht nur die theoretische Konzeption zu bewerten.\n\n🔍 Praktische Durchführungsstrategien:\n• Strukturierte Prozessanalyse: Systematische Vorbereitung durch Prozessmapping, Identifikation kritischer Kontrollpunkte und Erstellung detaillierter Prüfpläne mit klaren Fokuspunkten und potenziellen Risikobereichen.\n• Realistische Fallbeispiele: Verwendung repräsentativer, realer Transaktionen oder Vorgänge für den Walkthrough, idealerweise mit unterschiedlichen Komplexitätsgraden und potenziellen Ausnahmesituationen, um die Robustheit der Prozesse zu testen.\n• Multi-Channel-Dokumentation: Kombination verschiedener Dokumentationsformen wie Prozessflowcharts, schriftliche Narratives, Screenshots und ggf. Videoaufzeichnungen, um ein umfassendes Bild der Prozesse für verschiedene Stakeholder zu schaffen.\n• Strukturierte Nachverfolgung: Systematische Erfassung und Priorisierung identifizierter Schwachstellen mit klaren Verantwortlichkeiten und Zeithorizonten für Abhilfemaßnahmen sowie regelmäßiger Statusüberwachung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welchen Mehrwert bietet die Einbindung externer Expertise in die MaRisk-Prüfungsvorbereitung?",
        answer: "Die strategische Einbindung externer Expertise in die MaRisk-Prüfungsvorbereitung kann einen signifikanten Mehrwert für Finanzinstitute schaffen, der weit über die bloße Ressourcenerweiterung hinausgeht. Externe Spezialisten bringen nicht nur zusätzliche Kapazitäten, sondern vor allem eine unabhängige Perspektive und branchenübergreifende Erfahrung ein, die interne Betriebsblindheit überwinden und die Prüfungsqualität maßgeblich steigern kann.\n\n🔭 Strategische Mehrwertdimensionen externer Expertise:\n• Unabhängige Außenperspektive: Nutzung des objektiven Blicks externer Experten zur Identifikation von Schwachstellen und Risiken, die durch interne Betriebsblindheit oder etablierte Denkmuster übersehen werden könnten.\n• Branchenübergreifende Best Practices: Zugang zu Erfahrungen und bewährten Ansätzen aus verschiedensten Institutionen, die zur Optimierung eigener Prozesse und Konzepte adaptiert werden können.\n• Regulatorische Tiefenexpertise: Profitieren von spezialisiertem Know-how zu aktuellen aufsichtlichen Entwicklungen, Prüfungsschwerpunkten und Interpretationstrends, die über die Standardlektüre von Rundschreiben hinausgehen.\n• Prüferperspektive und -erfahrung: Einbindung von Experten mit Hintergrund in Aufsichtsbehörden oder umfangreicher Prüfungserfahrung, die die typische Prüferherangehensweise antizipieren und relevante Fokuspunkte identifizieren können.\n\n🤝 Effektive Integrationsstrategien für externe Unterstützung:\n• Strategisch-selektiver Einsatz: Fokussierung externer Expertise auf Hochrisikobereiche, spezielle Fachthemen oder bekannte Schwachstellen, statt flächendeckender Auslagerung der Prüfungsvorbereitung, um Kosten-Nutzen-Effizienz zu maximieren.\n• Kollaboratives Partnermodell: Etablierung integrativer Arbeitsformen mit gemischten Teams aus internen und externen Experten, die Wissenstransfer und nachhaltige Kompetenzentwicklung fördern, statt isolierter Beratungsleistungen.\n• Strukturierte Wissenssicherung: Implementation systematischer Prozesse zur Dokumentation und Internalisierung der Erkenntnisse und Methoden externer Experten, um langfristigen Mehrwert über die aktuellen Prüfungen hinaus zu schaffen.\n• Benchmarking und externe Validierung: Nutzung externer Expertise für objektive Vergleiche mit Marktstandards und Peer-Instituten, um eigene Stärken und Entwicklungsfelder realistisch einordnen zu können."
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
