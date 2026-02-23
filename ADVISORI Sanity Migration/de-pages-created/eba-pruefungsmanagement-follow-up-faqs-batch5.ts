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
    console.log('Updating EBA Prüfungsmanagement & Follow-up page with FAQs batch 5...')
    
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
        question: "Wie kann ein effektives Stakeholder-Management während EBA-Prüfungen gestaltet werden und welche Rolle spielt die Kommunikation mit der Aufsicht?",
        answer: "Ein strategisches Stakeholder-Management stellt einen entscheidenden Erfolgsfaktor für EBA-Prüfungen dar, der weit über die reine Kommunikation hinausgeht. Die systematische Identifikation, Analyse und Einbindung aller relevanten Interessengruppen – intern wie extern – ist grundlegend für einen reibungslosen Prüfungsverlauf und nachhaltige Maßnahmenumsetzung.\n\n👥 Dimensionen eines umfassenden Stakeholder-Managements:\n• Interne Stakeholder-Orchestrierung: Systematische Koordination aller betroffenen Unternehmenseinheiten mit klaren Rollen, Verantwortlichkeiten und Kommunikationswegen, um Silodenken zu überwinden und konsistentes Handeln zu gewährleisten.\n• Management-Einbindung: Strategische Involvierung der Führungsebene in angemessener Intensität und Form, um einerseits Executive Sponsorship zu demonstrieren und andererseits operative Handlungsfähigkeit sicherzustellen.\n• Aufsichtliche Beziehungspflege: Entwicklung eines professionellen, konstruktiven Verhältnisses zur Aufsicht durch transparente, proaktive Kommunikation und Demonstration von Problemlösungskompetenz.\n• Erwartungsmanagement: Aktive Steuerung der Erwartungen aller Stakeholder durch realistische, aber ambitionierte Zielsetzungen und transparente Kommunikation zu Fortschritten und Herausforderungen.\n\n🔄 ADVISORIs Stakeholder-Management-Ansatz:\n• Stakeholder-Mapping und -Analyse: Wir führen eine umfassende Identifikation und Bewertung aller relevanten Stakeholder durch, analysieren ihre Interessen, Einfluss und Erwartungen und entwickeln maßgeschneiderte Engagement-Strategien.\n• Kommunikationsarchitektur: Etablierung einer strukturierten Kommunikationsarchitektur mit definierten Formaten, Frequenzen und Inhalten für verschiedene Stakeholder-Gruppen, die sowohl formelle als auch informelle Kanäle umfasst.\n• Interaktionsmanagement mit der Aufsicht: Entwicklung einer differenzierten Strategie für den Umgang mit Aufsichtsbehörden, die eine Balance zwischen Transparenz und Selbstschutz findet und auf den Aufbau eines vertrauensvollen, konstruktiven Dialogs abzielt.\n• Eskalationsmanagement: Implementation eines klaren Eskalationsverfahrens für kritische Situationen mit definierten Auslösern, Verantwortlichkeiten und Handlungsprotokollen, um schnelle und fundierte Reaktionen zu ermöglichen.\n\nDurch diesen strategischen Ansatz transformiert ADVISORI das Stakeholder-Management von einer reaktiven Kommunikationsübung zu einem proaktiven Steuerungsinstrument für den gesamten Prüfungsprozess. Dies führt nicht nur zu einem reibungsloseren Prüfungsverlauf, sondern stärkt auch langfristig die Beziehung zu allen relevanten Interessengruppen, insbesondere zur Aufsicht, was ein konstruktiveres regulatorisches Umfeld für Ihr Institut schafft."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Ansätze empfiehlt ADVISORI, um das Management und den Vorstand während des gesamten EBA-Prüfungsprozesses optimal einzubinden und zu unterstützen?",
        answer: "Die strategische Einbindung von Management und Vorstand ist ein kritischer Erfolgsfaktor für EBA-Prüfungen, der weit über formale Berichtspflichten hinausgeht. Eine durchdachte Management-Involvierung balanciert Führungsunterstützung und operative Handlungsfähigkeit und stellt sicher, dass die Prüfung die notwendige Aufmerksamkeit und Ressourcenzuweisung erhält, ohne zu einer übermäßigen Belastung der Führungsebene zu werden.\n\n🔝 Schlüsseldimensionen der Management-Einbindung:\n• Strategische vs. operative Involvierung: Differenzierte Einbindung der Führungsebene mit Fokus auf strategische Entscheidungen und kritische Weichenstellungen bei gleichzeitiger Delegation operativer Verantwortlichkeiten an kompetente Fachebenen.\n• Informationsarchitektur: Entwicklung einer mehrstufigen Informationsversorgung, die den Vorstand mit prägnanten, entscheidungsrelevanten Informationen versorgt, ohne durch Detailüberfrachtung Effizienz zu beeinträchtigen.\n• Entscheidungsmanagement: Etablierung klarer Prozesse für prüfungsbezogene Entscheidungen mit angemessenen Eskalationswegen, definierten Entscheidungsbefugnissen und transparenten Priorisierungskriterien.\n• Externe Repräsentation: Strategische Nutzung der Vorstandsebene für die Interaktion mit hochrangigen Vertretern der Aufsicht, um Commitmentbereitschaft zu demonstrieren und den institutionellen Dialog auf Augenhöhe zu führen.\n\n📋 ADVISORIs Management-Einbindungskonzept:\n• Executive Briefing-Programm: Wir entwickeln ein maßgeschneidertes Briefing-Konzept für die Führungsebene, das regulatorische Entwicklungen, Prüfungsschwerpunkte und strategische Implikationen in prägnanter, handlungsrelevanter Form aufbereitet.\n• Management-Dashboards: Implementierung intuitiver Steuerungscockpits, die den Prüfungsstatus, kritische Risiken und Maßnahmenfortschritte visualisieren und eine effiziente Überwachung und Steuerung auf Führungsebene ermöglichen.\n• Vorbereitete Entscheidungsvorlagen: Entwicklung standardisierter Entscheidungsvorlagen für typische prüfungsbezogene Weichenstellungen, die alle relevanten Informationen, Optionen und Implikationen strukturiert darstellen und effiziente Entscheidungsprozesse fördern.\n• Coaching und Vorbereitung: Gezielte Unterstützung von Vorstandsmitgliedern und Führungskräften bei der Vorbereitung auf Interaktionen mit der Aufsicht durch Mock-Interviews, Q&A-Sessions und strategisches Kommunikationstraining.\n\nDurch diesen differenzierten Ansatz transformiert ADVISORI die Management-Einbindung von einer formalen Informationspflicht zu einem strategischen Erfolgsfaktor für den gesamten Prüfungsprozess. Dies stellt sicher, dass die Führungsebene ihre Steuerungs- und Überwachungsfunktion effektiv wahrnehmen kann, ohne durch operative Details überlastet zu werden, und gleichzeitig als glaubwürdiger Ansprechpartner für die Aufsicht fungiert, der Commitment und strategisches Verständnis demonstriert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir einen nachhaltigen Kompetenzaufbau für das Prüfungsmanagement in unserer Organisation sicherstellen, statt bei jeder Prüfung wieder bei null anfangen zu müssen?",
        answer: "Der systematische und nachhaltige Aufbau interner Prüfungsmanagement-Kompetenzen stellt einen entscheidenden Wettbewerbsvorteil dar, der die Abhängigkeit von externen Beratern reduziert und eine kontinuierliche Verbesserung der Prüfungsfähigkeit ermöglicht. Ein strategischer Ansatz zum Kompetenzaufbau transformiert einmalige Prüfungsprojekte in einen fortlaufenden organisationalen Lernprozess mit langfristiger Wertschöpfung.\n\n🧠 Dimensionen nachhaltiger Kompetenzentwicklung:\n• Wissenssystematisierung: Strukturierte Erfassung, Dokumentation und Kontextualisierung von Prüfungswissen und -erfahrungen in einer zugänglichen, searchbaren Form, die kontinuierliches Lernen und Wiederverwendung ermöglicht.\n• Personelle Kontinuität: Strategische Personalplanung mit dem Ziel, Prüfungserfahrung und -expertise in der Organisation zu halten und gezielt weiterzuentwickeln, statt bei jeder Prüfung neue Teams aufbauen zu müssen.\n• Methodische Standardisierung: Entwicklung konsistenter, erprobter Methoden und Vorgehensweisen für wiederkehrende Prüfungsaktivitäten, die eine effiziente Wissensweitergabe und kontinuierliche Verfeinerung ermöglichen.\n• Professionalisierung und Rollenentwicklung: Etablierung des Prüfungsmanagements als anerkannte Profession mit definierten Karrierepfaden, Entwicklungsmöglichkeiten und organisatorischer Wertschätzung.\n\n🔄 ADVISORIs Ansatz zum nachhaltigen Kompetenzaufbau:\n• Prüfungs-Kompetenzzentrum: Wir unterstützen Sie bei der Etablierung eines permanenten Kompetenzzentrums für regulatorische Prüfungen, das als institutionelles Gedächtnis fungiert, Best Practices entwickelt und interne Beratung anbietet.\n• Skill-Transfer-Programme: Entwicklung strukturierter Programme für den systematischen Wissenstransfer von externen Beratern zu internen Mitarbeitern, mit klaren Meilensteinen, Verantwortlichkeiten und Erfolgsindikatoren.\n• Train-the-Trainer-Konzepte: Aufbau interner Multiplikatoren, die Prüfungswissen und -methodiken organisationsweit vermitteln können, durch spezialisierte Ausbildungsprogramme und begleitetes Coaching.\n• Digitale Lernplattformen: Implementation moderner Lernmanagementsysteme und Wissensplattformen, die Prüfungswissen kontextualisiert, interaktiv und bedarfsgerecht verfügbar machen und kontinuierliches, selbstgesteuertes Lernen fördern.\n\nDurch diesen ganzheitlichen Ansatz zum Kompetenzaufbau unterstützt ADVISORI Sie dabei, eine nachhaltige, selbstlernende Prüfungsorganisation zu entwickeln, die mit jeder Prüfung stärker und effizienter wird. Dies führt nicht nur zu erheblichen Kosteneinsparungen durch reduzierte externe Abhängigkeit, sondern auch zu besseren Prüfungsergebnissen durch tieferes institutsspezifisches Wissen und kontinuierliche Prozessverbesserung. Langfristig positioniert dieser Ansatz Ihr Institut als proaktiven, selbstbewussten Partner der Aufsicht mit überlegener regulatorischer Anpassungsfähigkeit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie kann unser Institut die Ergebnisse und Erfahrungen aus EBA-Prüfungen nutzen, um nicht nur regulatorische Compliance zu verbessern, sondern auch Geschäftsprozesse und Steuerungsinstrumente zu optimieren?",
        answer: "Die strategische Nutzung von EBA-Prüfungen als Katalysator für umfassende organisatorische Verbesserungen repräsentiert einen fortschrittlichen Ansatz, der weit über die bloße Compliance-Erfüllung hinausgeht. Durch die systematische Extraktion und Anwendung von Prüfungserkenntnissen können Finanzinstitute regulatorische Anforderungen in Wettbewerbsvorteile transformieren und signifikante operative und strategische Mehrwerte generieren.\n\n🔄 Dimensionen der wertschöpfenden Prüfungsnutzung:\n• Business Process Excellence: Nutzung von Prüfungsfeststellungen als Ausgangspunkt für umfassende Prozessoptimierungen, die nicht nur Compliance-Aspekte adressieren, sondern auch Effizienz, Qualität und Kundenorientierung verbessern.\n• Datenqualität und -governance: Transformation aufsichtlicher Datenanforderungen in einen strategischen Hebel für verbesserte Datenarchitekturen und -qualität, die präzisere Geschäftsentscheidungen und tiefere Kundeneinblicke ermöglichen.\n• Risikomanagement-Optimierung: Erweiterung regulatorisch motivierter Risikomanagement-Maßnahmen zu ganzheitlichen, wertorientierten Steuerungsinstrumenten, die Kapitaleffizienz maximieren und robustere Geschäftsmodelle schaffen.\n• Technologische Modernisierung: Nutzung regulatorischer Anforderungen als Treiber für technologische Innovationen und Systemmodernisierungen, die über Compliance-Funktionalitäten hinaus strategische Wettbewerbsvorteile generieren.\n\n💼 ADVISORIs Ansatz zur wertschöpfenden Prüfungsnutzung:\n• Potentialanalyse: Wir führen eine systematische Analyse von Prüfungsfeststellungen durch, die über regulatorische Aspekte hinaus geschäftliche Verbesserungspotentiale identifiziert und priorisiert.\n• Synergie-Workshops: Durchführung bereichsübergreifender Ideation-Sessions, die Compliance-Anforderungen mit Geschäftszielen und Innovationspotentialen verbinden und integrierte Lösungsansätze entwickeln.\n• Business-Case-Entwicklung: Erstellung quantifizierter Business Cases für Maßnahmen, die regulatorische Anforderungen mit geschäftlichem Mehrwert verbinden und eine evidenzbasierte Investitionspriorisierung ermöglichen.\n• Transformations-Roadmap: Entwicklung einer integrierten Umsetzungsroadmap, die regulatorische Meilensteine mit geschäftlichen Optimierungszielen synchronisiert und Abhängigkeiten, Ressourcen und Verantwortlichkeiten klar definiert.\n\nDurch diesen strategischen Ansatz unterstützt ADVISORI Sie dabei, EBA-Prüfungen von einer regulatorischen Pflichtübung zu einem Katalysator für umfassende organisatorische Weiterentwicklung zu transformieren. Dies ermöglicht nicht nur eine kosteneffizientere Compliance-Erfüllung, sondern schafft auch substantielle geschäftliche Mehrwerte durch verbesserte Prozesse, Daten, Systeme und Steuerungsinstrumente. Langfristig positioniert dieser Ansatz Ihr Institut als innovativen First Mover, der regulatorische Anforderungen als Chance statt als Last begreift und dadurch nachhaltige Wettbewerbsvorteile erzielt."
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
    console.log('✅ FAQs batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
