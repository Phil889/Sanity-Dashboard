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
    console.log('Updating MiFID Anpassung Vertriebssteuerung & Prozessabläufe page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'mifid-anpassung-vertriebssteuerung-prozessablaeufe' })
    
    if (!existingDoc) {
      throw new Error('Document "mifid-anpassung-vertriebssteuerung-prozessablaeufe" not found')
    }
    
    // Create new FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können wir die MiFID-Anforderungen in unsere Vertriebssteuerung integrieren, ohne die Kundenbeziehung zu belasten und gleichzeitig operative Effizienz zu gewährleisten?",
        answer: "Die Integration von MiFID-Anforderungen in die Vertriebssteuerung erfordert einen strategischen Balanceakt zwischen Compliance, Kundenorientierung und operativer Effizienz. Eine gelungene Implementation transformiert regulatorische Vorgaben von einer Belastung zu einem Wettbewerbsvorteil und stärkt das Vertrauen Ihrer Kunden in Ihre Beratungsqualität.\n\n🔄 Ganzheitlicher Transformationsansatz:\n• Prozessintegration statt Prozessaddition: Implementieren Sie MiFID-Anforderungen direkt in bestehende Vertriebsprozesse, anstatt separate Compliance-Prozesse zu schaffen, die den Kundenberater zusätzlich belasten und den Verkaufsprozess unterbrechen.\n• Customer Journey Mapping: Analysieren Sie den gesamten Kundenberatungsprozess und identifizieren Sie die optimalen Zeitpunkte für regulatorisch erforderliche Schritte, die den natürlichen Gesprächsfluss am wenigsten stören.\n• Digitale Assistenzsysteme: Implementieren Sie intelligente Tools, die Berater in Echtzeit bei der Einhaltung regulatorischer Anforderungen unterstützen und gleichzeitig die Dokumentation automatisieren, während der Kundendialog im Fokus bleibt.\n• Proaktive Kommunikationsstrategie: Entwickeln Sie eine Kommunikationsstrategie, die den Mehrwert der MiFID-Anforderungen für den Kunden hervorhebt (z.B. höhere Transparenz, besserer Anlegerschutz) und so die Akzeptanz erhöht.\n\n📊 Effizienzsteigerung durch intelligentes Prozessdesign:\n• Front-to-Back Integration: Stellen Sie sicher, dass alle vertrieblichen Systeme nahtlos mit den Back-Office-Prozessen verbunden sind, um manuelle Doppelerfassungen zu vermeiden und Durchlaufzeiten zu minimieren.\n• Bedarfsorientierte Informationsbereitstellung: Strukturieren Sie Produktinformationen und Risikohinweise so, dass sie im Beratungsgespräch situativ und kontextbezogen eingesetzt werden können.\n• Modulare Beratungsstrecken: Implementieren Sie flexible Beratungsprozesse, die sich an unterschiedliche Kundensegmente, Produktkategorien und Vertriebskanäle anpassen lassen, aber dennoch vollständige MiFID-Compliance gewährleisten.\n• Automatisierte Compliance-Checks: Integrieren Sie präventive Kontrollen in den Beratungsprozess, die Compliance-Verstöße bereits vor Abschluss erkennen und korrigieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche konkreten Maßnahmen empfiehlt ADVISORI zur Optimierung der Prozessabläufe im Kontext der Geeignetheits- und Angemessenheitsprüfung gemäß MiFID II?",
        answer: "Die Geeignetheits- und Angemessenheitsprüfung stellt einen zentralen Bestandteil der MiFID II-Anforderungen dar und ist gleichzeitig ein kritischer Berührungspunkt in der Kundeninteraktion. Eine durchdachte Prozessgestaltung kann hier nicht nur die Compliance sicherstellen, sondern auch die Beratungsqualität signifikant verbessern und zu einem positiven Kundenerlebnis beitragen.\n\n📋 Strategische Prozessoptimierung für Geeignetheits- und Angemessenheitsprüfungen:\n• Kundenprofilierung als kontinuierlicher Prozess: Gestalten Sie die Erhebung und Aktualisierung von Kundeninformationen als integrierten, fortlaufenden Prozess statt als einmalige Formalität. Implementieren Sie intelligente Trigger für Aktualisierungszyklen basierend auf Lebensereignissen, Marktveränderungen oder Änderungen im Anlageverhalten.\n• Differenzierte Prüfungsintensität: Entwickeln Sie abgestufte Prüfungsverfahren, die den Umfang und die Tiefe der Geeignetheits- und Angemessenheitsprüfung an die Komplexität des Produkts, das Kundensegment und die Höhe der Anlage anpassen, ohne die regulatorischen Mindestanforderungen zu unterschreiten.\n• Integration von Behavioural Finance: Implementieren Sie psychologisch fundierte Fragestellungen und Visualisierungen, die ein präziseres Bild der tatsächlichen Risikobereitschaft und des Finanzwissens Ihrer Kunden vermitteln als standardisierte Fragebögen.\n• Dynamische Zielmarktabgleiche: Automatisieren Sie den Abgleich zwischen Kundenprofil und Produktzielmarkt durch regelbasierte Systeme, die sowohl harte Ausschlusskriterien als auch weiche Präferenzkriterien berücksichtigen.\n\n💻 Technologische Enabler für effiziente Prüfungsprozesse:\n• Omnichannel-fähige Lösungen: Stellen Sie sicher, dass Ihre Geeignetheits- und Angemessenheitsprüfungen konsistent über alle Vertriebskanäle (Filiale, Online, Telefon) durchgeführt werden können, mit kanalspezifischen Anpassungen in der Darstellung, aber einheitlicher Bewertungslogik.\n• Predictive Analytics: Nutzen Sie historische Kundendaten und KI-gestützte Prognosemodelle, um Veränderungen in der Risikoneigung oder im Anlageverhalten frühzeitig zu erkennen und proaktiv anzusprechen.\n• Digitale Selbsteinschätzungstools: Bieten Sie Kunden interaktive Tools zur Selbsteinschätzung an, die einerseits das Bewusstsein für die eigene Risikoneigung schärfen und andererseits wertvolle Daten für die formale Geeignetheitsprüfung liefern.\n• Integrierte Wissenstests: Implementieren Sie adaptive Wissenstests, die das tatsächliche Verständnis komplexer Finanzprodukte überprüfen und gleichzeitig als Bildungsinstrument dienen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie lässt sich die MiFID-konforme Dokumentation von Beratungsgesprächen und Anlageentscheidungen effizienter gestalten, ohne den Vertriebsprozess zu verlangsamen?",
        answer: "Die Dokumentation von Beratungsgesprächen und Anlageentscheidungen gemäß MiFID II stellt für viele Finanzinstitute eine signifikante Herausforderung dar. Durch einen strategischen Ansatz kann diese Anforderung jedoch von einem zeitraubenden Hemmnis zu einem Prozess mit Mehrwert transformiert werden, der sowohl die Compliance sicherstellt als auch den Vertriebsprozess unterstützt.\n\n📝 Strategische Ansätze zur effizienten Dokumentation:\n• Integrierte Dokumentationsprozesse: Gestalten Sie die Dokumentation als natürlichen Bestandteil des Beratungsgesprächs, nicht als nachgelagerte Aktivität. Durch eine fließende Integration in den Gesprächsverlauf wird die Dokumentation zum strukturierenden Element der Beratung statt zur zusätzlichen Last.\n• Priorisierung relevanter Informationen: Identifizieren Sie die tatsächlich compliance-relevanten Informationen und fokussieren Sie die Dokumentation auf diese Kernelemente. Vermeiden Sie übermäßige Dokumentation, die keinen regulatorischen oder geschäftlichen Mehrwert bietet.\n• Standardisierte Prozesskomponenten: Entwickeln Sie standardisierte Bausteine für wiederkehrende Beratungselemente, die schnell angepasst werden können, aber dennoch individuelle Kundengegebenheiten reflektieren.\n• Mehrstufige Dokumentationsverfahren: Implementieren Sie differenzierte Dokumentationsanforderungen basierend auf Produktkomplexität, Kundensegment und regulatorischem Risiko, um unnötigen Aufwand bei einfachen Transaktionen zu vermeiden.\n\n💡 Technologische Lösungsansätze für beschleunigte Dokumentation:\n• Spracherkennungstechnologie: Setzen Sie fortschrittliche Spracherkennung ein, um Beratungsgespräche automatisch zu transkribieren und relevante Informationen zu extrahieren, mit nachgelagerter Qualitätssicherung durch den Berater.\n• Digitale Beratungstools: Implementieren Sie interaktive Beratungsanwendungen, die den Gesprächsverlauf strukturieren und parallel die erforderliche Dokumentation erzeugen, während sie gleichzeitig als visuelles Hilfsmittel für den Kunden dienen.\n• Automatisierte Textbausteine: Nutzen Sie kontextsensitive, automatisch generierte Textbausteine, die auf Basis der besprochenen Produkte, Kundenprofile und getroffenen Entscheidungen die Dokumentation vorformulieren.\n• Kundeneinbindung in die Dokumentation: Entwickeln Sie Verfahren, bei denen der Kunde aktiv in den Dokumentationsprozess eingebunden wird, etwa durch gemeinsames Review der Zusammenfassung oder digitale Bestätigung wichtiger Gesprächspunkte während des Beratungsverlaufs."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können wir die Anforderungen an Kostentransparenz und Ex-ante-Kosteninformation in unsere Vertriebsprozesse integrieren, ohne die Verkaufspsychologie negativ zu beeinflussen?",
        answer: "Die MiFID II-Anforderungen zur Kostentransparenz und Ex-ante-Kosteninformation stellen viele Vertriebsorganisationen vor die Herausforderung, regulatorische Compliance mit verkaufspsychologischen Prinzipien in Einklang zu bringen. Mit einem strategischen Ansatz kann die vermeintliche Hürde jedoch in einen Wettbewerbsvorteil und Vertrauensanker umgewandelt werden.\n\n💰 Strategische Integration von Kostentransparenz:\n• Wertorientierte Preiskommunikation: Trainieren Sie Ihre Berater, Kostentransparenz proaktiv als Qualitätsmerkmal und Ausdruck der Fairness Ihres Hauses zu positionieren. Verknüpfen Sie die Offenlegung von Kosten konsequent mit der Darstellung des konkreten Kundennutzens und der Leistungen, die durch diese Kosten abgedeckt werden.\n• Timing der Kosteninformation: Identifizieren Sie den optimalen Zeitpunkt im Verkaufsgespräch für die Präsentation der Kosteninformation – idealerweise nachdem der Wert und Nutzen des Produkts bereits etabliert wurde, aber bevor der Kunde mental eine Kaufentscheidung getroffen hat.\n• Kostenvergleich als Verkaufsargument: Entwickeln Sie Instrumentarien, die einen fairen Vergleich Ihrer Kostenstrukturen mit Wettbewerbsprodukten ermöglichen und schulen Sie Ihre Berater, diese bei preissensitiven Kunden aktiv einzusetzen.\n• Segmentspezifische Kommunikationsstrategien: Passen Sie die Art der Kostenkommunikation an verschiedene Kundensegmente an – während einige Kunden detaillierte Aufstellungen schätzen, bevorzugen andere vereinfachte Gesamtkostenquoten mit kontextbezogenen Erläuterungen.\n\n📊 Praktische Umsetzungsmaßnahmen:\n• Visuelle Aufbereitung komplexer Kostenstrukturen: Gestalten Sie visuell ansprechende, leicht verständliche Darstellungen von Kostenkomponenten, die Transparenz schaffen ohne zu überfordern. Nutzen Sie Visualisierungen, die den Zusammenhang zwischen Kosten und erwarteter Wertentwicklung verdeutlichen.\n• Digitale Kostensimulatoren: Implementieren Sie interaktive Tools, die es Kunden ermöglichen, die Auswirkungen verschiedener Kostenszenarien auf ihre potenzielle Rendite zu simulieren und so ein tieferes Verständnis für die Relevanz von Kosten zu entwickeln.\n• Standardisierte Narrative für Berater: Entwickeln Sie präzise, positiv formulierte Gesprächsleitfäden für die Kommunikation von Kosten, die den rechtlichen Anforderungen entsprechen und gleichzeitig verkaufspsychologisch optimiert sind.\n• Nachgelagerte Kundenzufriedenheitsmessung: Etablieren Sie Prozesse zur Messung der Kundenzufriedenheit mit der Kostentransparenz, um kontinuierlich zu überprüfen, ob Ihre Kommunikationsstrategie die gewünschte Balance zwischen Compliance und Kundenakzeptanz erreicht."
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
