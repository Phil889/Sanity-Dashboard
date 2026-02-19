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
    console.log('Updating MiFID Dokumentation und IT-Anbindung page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'mifid-dokumentation-it-anbindung' })
    
    if (!existingDoc) {
      throw new Error('Document "mifid-dokumentation-it-anbindung" not found')
    }
    
    // Create new FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können wir die MiFID-konforme Dokumentation von Telefongesprächen und elektronischer Kommunikation technisch und organisatorisch effizient umsetzen?",
        answer: "Die Dokumentation von Telefongesprächen und elektronischer Kommunikation gehört zu den anspruchsvollsten Anforderungen der MiFID II und erfordert eine durchdachte Kombination aus technischen, organisatorischen und rechtlichen Maßnahmen. Die Herausforderung besteht darin, ein System zu implementieren, das sowohl die regulatorischen Anforderungen vollständig erfüllt als auch praxistauglich im Geschäftsalltag ist.\n\n📞 Technische Implementierungsstrategien:\n• Omnichannel-Aufzeichnungslösung: Implementierung einer integrierten Plattform, die sämtliche Kommunikationskanäle (Telefon, Video, Chat, E-Mail, Messaging) zentral erfasst und in einem einheitlichen Format speichert, um kanalübergreifende Nachvollziehbarkeit zu gewährleisten.\n• Intelligente Selektionsmechanismen: Entwicklung regelbasierter Filterungssysteme, die präzise zwischen aufzeichnungspflichtiger und nicht-aufzeichnungspflichtiger Kommunikation unterscheiden können, um unnötige Datenmengen zu vermeiden und die DSGVO-Konformität zu verbessern.\n• Metadaten-Anreicherung: Automatische Ergänzung der aufgezeichneten Kommunikation mit strukturierten Metadaten (Kundenidentifikation, Produktbezug, Gesprächstyp), die eine effiziente Suche, Kategorisierung und regulatorische Zuordnung ermöglichen.\n• Spracherkennung und Natural Language Processing: Einsatz von KI-gestützten Analysesystemen, die aufgezeichnete Gespräche automatisch transkribieren, kategorisieren und auf compliance-relevante Inhalte prüfen können.\n• End-to-End-Verschlüsselung: Implementierung hochsicherer Verschlüsselungstechnologien für die Speicherung sensibler Kommunikationsdaten mit granularem Zugriffsmanagement und Audit-Trail für jeden Zugriff.\n\n🔄 Organisatorische Implementierungsmaßnahmen:\n• Risikobasierte Kommunikationspolicy: Entwicklung klarer Richtlinien, welche Kommunikationskanäle für welche Arten von Kundeninteraktionen genutzt werden dürfen, um die Compliance-Kontrolle zu erleichtern und Umgehungsversuche zu minimieren.\n• Bereichsübergreifendes Governance-Modell: Etablierung eines interdisziplinären Steuerungskomitees mit Vertretern aus Compliance, Recht, IT, Datenschutz und den operativen Geschäftsbereichen, um alle Perspektiven in der Lösungsgestaltung zu berücksichtigen.\n• Schulungs- und Sensibilisierungsprogramm: Implementation eines zielgruppenspezifischen Schulungskonzepts, das Mitarbeiter nicht nur über die technischen Prozesse informiert, sondern auch das Verständnis für die regulatorische Notwendigkeit schärft.\n• Qualitätssicherungsprozesse: Einführung regelmäßiger Stichprobenkontrollen und Compliance-Reviews der aufgezeichneten Kommunikation, um die Einhaltung interner und externer Vorgaben kontinuierlich zu überwachen und Verbesserungspotenziale zu identifizieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Best Practices empfiehlt ADVISORI für die technische Umsetzung der Dokumentation von Geeignetheits- und Angemessenheitsprüfungen im Rahmen von MiFID II?",
        answer: "Die technische Umsetzung der Dokumentation von Geeignetheits- und Angemessenheitsprüfungen stellt einen zentralen Baustein der MiFID II-Compliance dar und bietet gleichzeitig erhebliches Potenzial für Prozessoptimierung und verbesserte Kundenberatung. ADVISORI empfiehlt einen integrierten Ansatz, der regulatorische Anforderungen mit geschäftlichem Mehrwert verbindet.\n\n🛠️ Technische Architekturempfehlungen:\n• Zentrales Kundenprofilsystem: Implementierung einer zentralen Datenplattform für alle kundenrelevanten Informationen, die als Single Source of Truth für sämtliche Geeignetheits- und Angemessenheitsprüfungen dient und konsistente Bewertungen über alle Vertriebskanäle hinweg gewährleistet.\n• Modulare Assessment-Engine: Entwicklung einer flexiblen, regelbasierten Prüfungslogik, die sowohl standardisierte als auch produktspezifische Bewertungskriterien verarbeiten kann und dynamisch an regulatorische Änderungen anpassbar ist.\n• Multi-Channel-Integrationsschicht: Etablierung einer einheitlichen API-Schicht, die Geeignetheits- und Angemessenheitsprüfungen konsistent in alle Kundenschnittstellen (Filiale, Online-Banking, Mobile Apps) integriert und kanalspezifische Anpassungen ermöglicht.\n• Echtzeit-Validierungssystem: Implementierung automatisierter Plausibilitäts- und Vollständigkeitsprüfungen, die bereits während der Datenerfassung auf fehlende oder widersprüchliche Angaben hinweisen und deren Korrektur einfordern.\n• Revisionssichere Dokumentationsdatenbank: Nutzung einer speziell konzipierten Dokumentationsinfrastruktur mit Versionierungsfunktionen, Änderungsnachverfolgung und granularen Zugriffsrechten, die die lückenlose Nachvollziehbarkeit aller Prüfungsergebnisse und -grundlagen sicherstellt.\n\n💡 Innovative Technologieansätze für erweiterten Mehrwert:\n• KI-gestützte Kundenprofilanalyse: Einsatz von Machine Learning-Algorithmen, die auf Basis historischer Daten und Peer-Group-Vergleichen Inkonsistenzen in Kundenprofilen identifizieren und präzisere Risikoeinstufungen ermöglichen.\n• Dynamische Fragebogensteuerung: Implementierung adaptiver Befragungslogiken, die abhängig von bereits gegebenen Antworten und Kundenmerkmalen die relevantesten Folgefragen auswählen und so die Genauigkeit der Ergebnisse bei gleichzeitiger Reduktion des Erfassungsaufwands verbessern.\n• Visuelle Risikokommunikation: Integration interaktiver Visualisierungswerkzeuge, die komplexe Risiko-Rendite-Verhältnisse und Geeignetheitsüberlegungen für Kunden verständlich darstellen und gleichzeitig als dokumentierte Beratungsgrundlage dienen.\n• Predictive Compliance-Alerts: Entwicklung vorausschauender Warnmechanismen, die potenzielle zukünftige Compliance-Risiken auf Basis von Marktentwicklungen, Produktänderungen oder Veränderungen im Kundenportfolio frühzeitig erkennen und proaktive Anpassungen ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie lässt sich die umfangreiche MiFID II-Kostentransparenzdokumentation technisch so umsetzen, dass sie sowohl compliant als auch kundenfreundlich ist?",
        answer: "Die Dokumentation der MiFID II-Kostentransparenzanforderungen stellt Finanzinstitute vor die doppelte Herausforderung, einerseits komplexe regulatorische Vorgaben präzise zu erfüllen und andererseits Kosteninformationen so aufzubereiten, dass sie für Kunden verständlich und nachvollziehbar sind. Eine durchdachte technische Umsetzung kann beide Ziele vereinen.\n\n📊 Systemarchitektur für effiziente Kostentransparenzdokumentation:\n• Zentrales Kostenberechnungsmodul: Implementierung einer spezialisierten Kalkulationsengine, die sämtliche Kostenkomponenten (Produkt-, Service-, Transaktionskosten) nach einheitlichen Methoden berechnet und konsistente Ergebnisse für alle Ausgabekanäle liefert.\n• Dynamische Dokumentengenerierung: Entwicklung eines flexiblen Template-Systems für die automatisierte Erstellung von Ex-ante- und Ex-post-Kostendokumenten, das sowohl regulatorische Mindestanforderungen erfüllt als auch kunden- und situationsspezifische Anpassungen ermöglicht.\n• Integrierte Historisierung: Etablierung eines revisionssicheren Archivierungssystems, das nicht nur die ausgehändigten Kostendokumente, sondern auch die zugrundeliegenden Berechnungsparameter und Marktdaten für Nachvollziehbarkeit und Auditierung speichert.\n• Omnichannel-Bereitstellung: Implementierung einer kanalübergreifenden Distributionsinfrastruktur, die Kostendokumente konsistent über alle Kundenberührungspunkte (Filiale, Online-Banking, Mobile, Post) bereitstellen kann und dabei Zustellungsnachweise revisionssicher dokumentiert.\n• API-gestützte Datenintegration: Schaffung einer robusten Integrationsschicht, die alle kostenrelevanten Daten aus verschiedenen Quellsystemen (Produktdatenbanken, Gebührenmodelle, Marktdaten) zuverlässig zusammenführt und Inkonsistenzen durch automatisierte Validierungsmechanismen verhindert.\n\n🎯 Technologische Ansätze für verbesserte Kundenverständlichkeit:\n• Interaktive Kostenvisualisierung: Entwicklung digitaler Tools, die komplexe Kostenstrukturen durch interaktive Grafiken, Diagramme und Szenarien veranschaulichen und dem Kunden die Auswirkungen verschiedener Faktoren (Haltedauer, Anlagevolumen, Marktentwicklung) auf die Gesamtkosten demonstrieren.\n• Layered Information Design: Implementierung eines mehrstufigen Informationskonzepts, das zunächst einen kompakten Kostenüberblick bietet und bei Bedarf detailliertere Erklärungen zu einzelnen Kostenkomponenten zugänglich macht, ohne den Kunden initial zu überfordern.\n• Personalisierte Kostendarstellung: Nutzung von Kundenprofildaten und historischen Interaktionen, um Kostenaufstellungen individuell anzupassen und für den Kunden besonders relevante Aspekte hervorzuheben, ohne regulatorische Vollständigkeitsanforderungen zu verletzen.\n• Automatisierte Erläuterungstexte: Einsatz kontextabhängiger, automatisch generierter Erklärungstexte, die komplexe Kostenbegriffe und -zusammenhänge in einer für den individuellen Kunden verständlichen Sprache erläutern und so die Transparenz erhöhen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Ansätze empfiehlt ADVISORI zur Integration der MiFID II-Dokumentationsanforderungen in bestehende CRM- und Beratungssysteme?",
        answer: "Die Integration der MiFID II-Dokumentationsanforderungen in bestehende CRM- und Beratungssysteme erfordert einen strategischen Ansatz, der technologische, prozessuale und organisatorische Aspekte berücksichtigt. ADVISORI empfiehlt eine mehrschichtige Integrationsstrategie, die sowohl die Compliance-Anforderungen erfüllt als auch den praktischen Beratungsalltag unterstützt.\n\n🔄 Strategische Integrationsansätze:\n• Process-First-Methodik: Beginnen Sie mit einer detaillierten Analyse und Optimierung der Beratungs- und Dokumentationsprozesse, bevor Sie technische Anpassungen vornehmen. Nur ein klar definierter, MiFID-konformer Prozess kann effektiv in IT-Systeme überführt werden.\n• Nahtlose Beratungsintegration: Gestalten Sie die Dokumentationsanforderungen als natürlichen Bestandteil des Beratungsprozesses, nicht als separate Compliance-Aktivität. Jeder Dokumentationsschritt sollte einen erkennbaren Mehrwert für den Berater oder den Kunden bieten.\n• Modulare Erweiterungsarchitektur: Implementieren Sie MiFID-Funktionalitäten als eigenständige, aber nahtlos integrierte Module, die mit bestehenden Systemen über standardisierte Schnittstellen kommunizieren, statt umfangreiche Kernsystemänderungen vorzunehmen.\n• Iterativer Implementierungsansatz: Setzen Sie auf eine schrittweise Umsetzung mit klar definierten Meilensteinen, beginnend mit den kritischsten regulatorischen Anforderungen, um frühzeitig Compliance-Sicherheit zu schaffen und gleichzeitig aus Erfahrungen zu lernen.\n• Cross-System Compliance-Layer: Etablieren Sie eine übergreifende Compliance-Schicht, die MiFID-relevante Aktivitäten systemübergreifend überwacht, dokumentiert und steuert, insbesondere wenn Ihr Beratungsprozess mehrere Systeme umfasst.\n\n⚙️ Technische Integrationsmaßnahmen:\n• Context-Sensitive Documentation Widgets: Entwickeln Sie kontextsensitive Dokumentationskomponenten, die sich dynamisch an den aktuellen Beratungsschritt anpassen und nur die jeweils relevanten Informationen erfassen, um den Dokumentationsaufwand zu minimieren.\n• Unified Customer View: Implementieren Sie eine konsolidierte Kundenansicht, die alle MiFID-relevanten Informationen (Kundenklassifizierung, Risikoprofil, Geeignetheitsbewertungen, dokumentierte Gespräche) an einem zentralen Ort zusammenführt und für den Berater leicht zugänglich macht.\n• Intelligent Document Generation: Nutzen Sie automatisierte Dokumentengenerierung, die relevante Informationen aus verschiedenen Systemquellen zusammenführt und rechtskonforme, individualisierte Beratungsdokumente erstellt, ohne dass der Berater umfangreiche manuelle Eingaben vornehmen muss.\n• Pre-populated Templates: Implementieren Sie vorausgefüllte Dokumentvorlagen, die bereits bekannte Kundeninformationen und Produktdetails enthalten, um Doppeleingaben zu vermeiden und die Effizienz zu steigern.\n• Real-time Compliance Validation: Integrieren Sie Echtzeit-Validierungsmechanismen, die während des Beratungsprozesses kontinuierlich die Vollständigkeit und Konsistenz der Dokumentation prüfen und proaktiv auf potenzielle Compliance-Lücken hinweisen."
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
