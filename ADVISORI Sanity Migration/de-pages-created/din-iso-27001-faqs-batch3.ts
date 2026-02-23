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
    console.log('Updating DIN ISO 27001 page with FAQ batch 3...')
    
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
        _key: generateKey('faq', 9),
        question: 'Wie hilft die DIN ISO 27001 bei der Einhaltung des IT-Sicherheitsgesetzes in Deutschland?',
        answer: "Das IT-Sicherheitsgesetz (IT-SiG) und seine Novellen verpflichten insbesondere Betreiber Kritischer Infrastrukturen (KRITIS) und Unternehmen im besonderen öffentlichen Interesse (UBI) zu weitreichenden IT-Sicherheitsmaßnahmen. Die DIN ISO 27001 ist ein fundamentaler Baustein, um diese Anforderungen nachweislich zu erfüllen.\n\n🏛️ Gesetzliche Anforderungen:\n• Das IT-SiG fordert die Implementierung von organisatorischen und technischen Vorkehrungen zur Vermeidung von Störungen der Verfügbarkeit, Integrität, Authentizität und Vertraulichkeit ihrer informationstechnischen Systeme.\n• Diese Vorkehrungen müssen dem 'Stand der Technik' entsprechen. Eine Zertifizierung nach DIN ISO 27001 gilt als starker Beleg für die Erfüllung dieser Anforderung.\n\n🤝 Nachweispflicht gegenüber dem BSI:\n• Betroffene Unternehmen müssen die Einhaltung der Anforderungen regelmäßig gegenüber dem BSI nachweisen.\n• Ein ISMS nach DIN ISO 27001 bietet den notwendigen Rahmen für die geforderten Sicherheitsaudits, Prüfungen oder Zertifizierungen.\n• Die strukturierte Dokumentation eines ISMS erleichtert die Erstellung der Nachweisdokumente für das BSI erheblich.\n\n🚨 Meldepflichten für IT-Störungen:\n• Das Gesetz schreibt eine unverzügliche Meldung von erheblichen IT-Störungen an das BSI vor.\n• Ein nach DIN ISO 27001 aufgebautes Incident Management (Anhang A.16) stellt sicher, dass Vorfälle systematisch erkannt, analysiert, gemeldet und behoben werden.\n\n🌐 Branchenspezifische Sicherheitsstandards (B3S):\n• Das IT-SiG ermöglicht die Entwicklung von branchenspezifischen Sicherheitsstandards (B3S), die vom BSI anerkannt werden können.\n• Viele dieser B3S bauen auf den Prinzipien und Strukturen der DIN ISO 27001 auf, was die Implementierung in den jeweiligen Branchen erleichtert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Was ist eine "Erklärung zur Anwendbarkeit" (Statement of Applicability - SoA) und warum ist sie so wichtig?',
        answer: "Die Erklärung zur Anwendbarkeit (SoA) ist eines der zentralen und obligatorischen Dokumente in einem ISMS nach DIN ISO 27001. Sie bildet die Brücke zwischen der Risikobewertung und der praktischen Umsetzung von Sicherheitsmaßnahmen.\n\n📄 Dokumentarische Funktion:\n• Die SoA listet alle 114 Kontrollen aus dem Anhang A der Norm auf.\n• Für jede Kontrolle muss das Unternehmen dokumentieren, ob sie anwendbar ist oder nicht.\n• Wenn eine Kontrolle anwendbar ist, muss auf die entsprechende Dokumentation oder den Prozess verwiesen werden, der diese Kontrolle umsetzt.\n• Wenn eine Kontrolle als nicht anwendbar eingestuft wird, muss eine Begründung dafür angegeben werden.\n\n🔗 Verbindung zum Risikomanagement:\n• Die Entscheidung, welche Kontrollen anwendbar sind, basiert direkt auf den Ergebnissen des Risikobewertungs- und Risikobehandlungsprozesses.\n• Die SoA zeigt, wie das Unternehmen die identifizierten Risiken durch die Auswahl und Implementierung von Kontrollen adressiert.\n• Sie ist der Beweis für einen systematischen und risikobasierten Ansatz.\n\n🔍 Bedeutung für das Audit:\n• Für einen externen Auditor ist die SoA ein zentrales Prüfdokument. Sie bietet einen schnellen Überblick über die implementierten Sicherheitsmaßnahmen.\n• Der Auditor prüft die Logik und Nachvollziehbarkeit der Entscheidungen: Wurden alle notwendigen Kontrollen implementiert? Sind die Begründungen für den Ausschluss von Kontrollen plausibel?\n• Eine unvollständige oder inkonsistente SoA ist eine häufige Ursache für Abweichungen im Zertifizierungsaudit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Welche Rolle spielen Kennzahlen (KPIs) bei der Steuerung eines ISMS nach DIN ISO 27001?',
        answer: "Kennzahlen, auch als Key Performance Indicators (KPIs) bekannt, sind unerlässlich, um die Wirksamkeit und Effizienz eines ISMS zu messen, zu überwachen und zu steuern. Die Norm fordert explizit die Überwachung und Messung der Informationssicherheitsleistung.\n\n🎯 Messung der Wirksamkeit:\n• KPIs machen die Leistung von Sicherheitsprozessen und -kontrollen messbar. Beispiel: 'Anzahl der erfolgreich abgewehrten Phishing-Angriffe pro Monat'.\n• Sie helfen zu beurteilen, ob die festgelegten Sicherheitsziele (z.B. 'Reduzierung der Sicherheitsvorfälle um 20%') erreicht werden.\n• Ohne Kennzahlen ist eine objektive Bewertung der ISMS-Leistung kaum möglich.\n\n📈 Steuerung und Verbesserung:\n• Die Analyse von KPI-Trends ermöglicht es, frühzeitig negative Entwicklungen zu erkennen und proaktiv gegenzusteuern.\n• Sie liefern eine datengestützte Grundlage für Entscheidungen über die Zuweisung von Ressourcen und die Priorisierung von Verbesserungsmaßnahmen.\n• KPIs sind ein wesentlicher Input für die Managementbewertung und den kontinuierlichen Verbesserungsprozess (KVP).\n\n🗣️ Kommunikation und Berichterstattung:\n• Kennzahlen übersetzen komplexe Sicherheitsinformationen in verständliche, vergleichbare Werte.\n• Sie ermöglichen eine transparente Berichterstattung über die Sicherheitslage an das Management und andere Stakeholder.\n• Gut gewählte KPIs können den Wert und den Erfolg des ISMS im Unternehmen sichtbar machen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Muss ich für eine DIN ISO 27001 Zertifizierung alle 114 Kontrollen aus Anhang A umsetzen?',
        answer: "Nein, nicht zwangsläufig. Die DIN ISO 27001 folgt einem risikobasierten Ansatz, was bedeutet, dass die Auswahl der Kontrollen von den spezifischen Risiken Ihres Unternehmens abhängt.\n\n🚫 Keine 'One-size-fits-all'-Lösung:\n• Der Anhang A der Norm ist ein Katalog von möglichen Kontrollen, keine verpflichtende Checkliste.\n• Das Unternehmen muss alle 114 Kontrollen in Betracht ziehen, aber nicht zwangsläufig alle implementieren.\n\n⚖️ Risikobasierte Entscheidung:\n• Der Prozess beginnt mit der Risikoidentifikation und -bewertung. Welche Risiken bedrohen die Informationswerte Ihres Unternehmens?\n• Basierend auf dieser Analyse entscheiden Sie, wie Sie die Risiken behandeln wollen (z.B. reduzieren, vermeiden, übertragen, akzeptieren).\n• Die Kontrollen aus Anhang A werden ausgewählt, um die Risiken auf ein akzeptables Maß zu reduzieren. Wenn für ein bestimmtes Risiko keine passende Kontrolle in Anhang A existiert, müssen Sie möglicherweise eigene, zusätzliche Kontrollen definieren.\n\n✍️ Begründungspflicht in der SoA:\n• Die Entscheidung, eine Kontrolle nicht umzusetzen, muss gut begründet und im Statement of Applicability (SoA) dokumentiert werden.\n• Eine typische Begründung wäre, dass das mit der Kontrolle zu behandelnde Risiko in Ihrem Unternehmen nicht existiert (z.B. keine Softwareentwicklung im Haus, daher sind Kontrollen für sichere Entwicklung nicht anwendbar).\n• Ein Auditor wird diese Begründungen kritisch hinterfragen. Ein Ausschluss aus reinen Kostengründen ohne angemessene Risikoakzeptanz durch das Management wird in der Regel nicht akzeptiert."
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
    console.log('✅ FAQ batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
