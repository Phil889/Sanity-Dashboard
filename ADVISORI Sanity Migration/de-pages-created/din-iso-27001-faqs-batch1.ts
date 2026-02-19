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
    console.log('Updating DIN ISO 27001 page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'din-iso-27001' })
    
    if (!existingDoc) {
      throw new Error('Document "din-iso-27001" not found')
    }
    
    // Create new FAQs for DIN ISO 27001
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was ist der Hauptunterschied zwischen DIN ISO 27001 und der internationalen ISO 27001?',
        answer: "Der Hauptunterschied liegt in der nationalen Adaption und Anerkennung. Die DIN ISO 27001 ist die vom Deutschen Institut für Normung (DIN) herausgegebene, offizielle deutsche Sprachfassung der internationalen Norm. Sie stellt sicher, dass die Anforderungen und Begriffe im Einklang mit dem deutschen Rechts- und Regulierungsumfeld stehen.\n\n🇩🇪 Nationale Relevanz:\n• Die DIN-Norm ist die verbindliche Referenz für Ausschreibungen und Verträge nach deutschem Recht.\n• Sie verwendet die offizielle deutsche Terminologie, was die Eindeutigkeit und Verständlichkeit für deutsche Unternehmen erhöht.\n• Die Norm wird vom DIN-Normenausschuss Informationstechnik und Anwendungen (NIA) betreut, der die deutschen Interessen im internationalen Normungsprozess vertritt.\n\n📜 Rechtliche Integration:\n• Die DIN ISO 27001 ist oft die Grundlage für gesetzliche Anforderungen in Deutschland, wie z.B. im IT-Sicherheitsgesetz.\n• Sie erleichtert die Integration mit anderen deutschen Standards und Vorschriften, wie dem BSI IT-Grundschutz und dem Bundesdatenschutzgesetz (BDSG).\n• Deutsche Zertifizierungsstellen auditieren in der Regel gegen die DIN ISO 27001.\n\n🔄 Inhaltliche Äquivalenz:\n• Inhaltlich sind die Anforderungen der DIN ISO 27001 und der internationalen ISO 27001 identisch. Eine Zertifizierung nach DIN ISO 27001 ist daher auch international voll anerkannt.\n• Die Struktur und die Kontrollen (Annex A) sind deckungsgleich, was die internationale Vergleichbarkeit sicherstellt.\n• Die Wahl der DIN-Norm signalisiert eine besondere Verpflichtung gegenüber dem deutschen Markt und dessen regulatorischen Erwartungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche Rolle spielt das BSI im Kontext der DIN ISO 27001?',
        answer: "Das Bundesamt für Sicherheit in der Informationstechnik (BSI) ist eine zentrale Instanz für die IT-Sicherheit in Deutschland und spielt eine wichtige, ergänzende Rolle zur DIN ISO 27001.\n\n🏛️ Behördliche Autorität:\n• Das BSI ist die nationale Cybersicherheitsbehörde und gibt Empfehlungen und Standards für die IT-Sicherheit heraus.\n• Für Betreiber Kritischer Infrastrukturen (KRITIS) ist die Orientierung an BSI-Vorgaben oft gesetzlich verpflichtend.\n• Das BSI bietet mit dem IT-Grundschutz einen detaillierten, methodischen Ansatz zur Umsetzung von Informationssicherheit.\n\n🤝 Synergie mit IT-Grundschutz:\n• DIN ISO 27001 definiert das 'Was' (die Anforderungen an ein ISMS), während der BSI IT-Grundschutz das 'Wie' (konkrete Maßnahmen und Vorgehensweisen) beschreibt.\n• Eine ISO-27001-Zertifizierung auf der Basis von IT-Grundschutz ist ein vom BSI anerkannter Weg, der eine hohe Umsetzungsqualität und -tiefe nachweist.\n• Die Kombination beider Standards ermöglicht ein sehr hohes und nachvollziehbares Sicherheitsniveau, das in Deutschland hohes Ansehen genießt.\n\n🔍 Konkretisierung der Maßnahmen:\n• Die BSI IT-Grundschutz-Kataloge bieten detaillierte Bausteine mit konkreten Sicherheitsanforderungen, die zur Erfüllung der Annex-A-Kontrollen der DIN ISO 27001 herangezogen werden können.\n• Dies erleichtert die Implementierung, da nicht für jede Kontrolle das Rad neu erfunden werden muss.\n• Das BSI stellt Werkzeuge und Hilfsmittel zur Verfügung, die den Implementierungsprozess unterstützen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Ist eine Zertifizierung nach DIN ISO 27001 für jedes deutsche Unternehmen sinnvoll?',
        answer: "Obwohl nicht für jedes Unternehmen gesetzlich vorgeschrieben, bietet eine Zertifizierung nach DIN ISO 27001 für die meisten deutschen Unternehmen erhebliche strategische Vorteile.\n\n📈 Wettbewerbsvorteil:\n• Eine Zertifizierung ist ein starkes Signal für Kunden und Partner, dass Informationssicherheit ernst genommen wird. Dies schafft Vertrauen und kann ein entscheidendes Kriterium bei der Auftragsvergabe sein.\n• In vielen Branchen, insbesondere im B2B-Bereich und bei der Zusammenarbeit mit öffentlichen Auftraggebern, wird eine Zertifizierung zunehmend erwartet oder vorausgesetzt.\n\n🛡️ Risikomanagement:\n• Die Implementierung eines ISMS nach DIN ISO 27001 zwingt zur systematischen Auseinandersetzung mit den eigenen Informationsrisiken.\n• Dies führt zu einem besseren Verständnis der eigenen Schwachstellen und zu gezielten Maßnahmen zur Risikominimierung.\n• Im Schadensfall kann ein zertifiziertes ISMS als Nachweis für die Einhaltung der Sorgfaltspflicht dienen und Haftungsrisiken reduzieren.\n\n⚙️ Prozessoptimierung:\n• Der Aufbau eines ISMS führt oft zu klareren, effizienteren und besser dokumentierten Prozessen im gesamten Unternehmen.\n• Verantwortlichkeiten werden eindeutig geregelt, was die interne Zusammenarbeit und die Reaktionsfähigkeit im Störfall verbessert.\n• Die Anforderungen an die kontinuierliche Verbesserung sorgen dafür, dass das Sicherheitsniveau stetig an neue Bedrohungen angepasst wird."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie integriert man die Anforderungen des deutschen Datenschutzes (BDSG/DSGVO) in ein ISMS nach DIN ISO 27001?',
        answer: "Die Integration von Datenschutz und Informationssicherheit ist nicht nur effizient, sondern auch zwingend notwendig, da technische und organisatorische Maßnahmen (TOMs) der DSGVO eine Kernanforderung der Informationssicherheit sind.\n\n🔗 Gemeinsame Grundlagen:\n• Beide Systeme basieren auf einem risikobasierten Ansatz und dem Prinzip der Vertraulichkeit, Integrität und Verfügbarkeit von Informationen.\n• Die DIN ISO 27001 bietet das Managementsystem-Framework, in das die spezifischen Anforderungen des Datenschutzes integriert werden können.\n• Annex A der Norm enthält zahlreiche Kontrollen (z.B. Zugriffskontrolle, Kryptographie), die direkt zur Erfüllung der TOMs nach Art. 32 DSGVO beitragen.\n\n🗺️ Integrierter Ansatz:\n• Die Risikoanalyse des ISMS wird um Datenschutz-Risiken (Risiken für die Rechte und Freiheiten natürlicher Personen) erweitert.\n• Das Verzeichnis von Verarbeitungstätigkeiten (VVT) der DSGVO wird als wichtige Informationsquelle für die Asset-Identifikation im ISMS genutzt.\n• Datenschutz-Folgenabschätzungen (DSFA) werden in den Risikomanagementprozess des ISMS integriert.\n\n⚙️ Synergien nutzen:\n• Prozesse für das Incident Management können so gestaltet werden, dass sie sowohl Sicherheitsvorfälle als auch Datenschutzpannen (inkl. Meldepflichten) abdecken.\n• Schulungs- und Awareness-Programme werden kombiniert, um Mitarbeiter für beide Themen zu sensibilisieren.\n• Lieferanten- und Dienstleistermanagement-Prozesse der ISO 27001 werden genutzt, um die Einhaltung der Anforderungen an Auftragsverarbeiter nach DSGVO sicherzustellen."
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
    console.log('✅ FAQ batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
