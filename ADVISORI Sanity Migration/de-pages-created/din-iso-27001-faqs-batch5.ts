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
    console.log('Updating DIN ISO 27001 page with FAQ batch 5...')
    
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
        _key: generateKey('faq', 17),
        question: 'Wie unterscheidet sich der risikobasierte Ansatz der DIN ISO 27001 von einem rein maßnahmenorientierten Ansatz wie dem BSI IT-Grundschutz?',
        answer: "Beide Ansätze zielen auf ein hohes Sicherheitsniveau ab, verfolgen aber unterschiedliche Philosophien. Die DIN ISO 27001 bietet Flexibilität, während der IT-Grundschutz auf Standardisierung und Konkretisierung setzt.\n\n🤔 Risikobasierter Ansatz (DIN ISO 27001):\n• **Flexibilität:** Das Unternehmen identifiziert seine individuellen Risiken und wählt darauf basierend passende Maßnahmen. Dies ermöglicht maßgeschneiderte und potenziell effizientere Lösungen.\n• **Fokus auf das 'Was':** Die Norm gibt vor, *was* erreicht werden muss (z.B. sichere Entwicklung), aber nicht *wie*. Dies erfordert mehr eigenes Know-how bei der Umsetzung.\n• **Unternehmenskontext:** Der Ansatz ist stark auf die spezifischen Schutzbedürfnisse und die Risikobereitschaft des Unternehmens ausgerichtet.\n\n📚 Maßnahmenorientierter Ansatz (BSI IT-Grundschutz):\n• **Standardisierung:** Der IT-Grundschutz bietet einen detaillierten Katalog von Standard-Sicherheitsmaßnahmen (Bausteine) für typische IT-Systeme und Prozesse.\n• **Fokus auf das 'Wie':** Er gibt konkrete Handlungsanweisungen, was die Umsetzung für Standardfälle vereinfacht.\n• **Hohes Schutzniveau:** Durch die Umsetzung der empfohlenen Maßnahmen wird ein vordefiniertes, hohes Schutzniveau erreicht, ohne dass immer eine komplexe Risikoanalyse notwendig ist (bei normalem Schutzbedarf).\n\n🤝 Kombination ist der Königsweg:\n• Die ideale Strategie für viele deutsche Unternehmen ist die Kombination beider Welten.\n• Man nutzt das flexible Managementsystem-Framework der DIN ISO 27001 und füllt es mit den konkreten, bewährten Maßnahmen des BSI IT-Grundschutzes. Dies wird als 'ISO 27001-Zertifizierung auf der Basis von IT-Grundschutz' bezeichnet und vom BSI offiziell anerkannt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Welche Rolle spielt die Geschäftsführung bei einem ISMS nach DIN ISO 27001?',
        answer: "Die Rolle der Geschäftsführung (oberste Leitung) ist nach der Norm explizit gefordert und absolut entscheidend für den Erfolg des ISMS. Sie trägt die Gesamtverantwortung.\n\n🧭 Strategische Führung:\n• Die Leitung muss sicherstellen, dass die Informationssicherheitsziele mit der strategischen Ausrichtung des Unternehmens vereinbar sind.\n• Sie muss eine Informationssicherheitsleitlinie festlegen und kommunizieren.\n\n💼 Ressourcenbereitstellung:\n• Die Geschäftsführung ist verantwortlich für die Bereitstellung der notwendigen Ressourcen (finanziell, personell, technisch) für den Aufbau, Betrieb und die Verbesserung des ISMS.\n\n📊 Überwachung und Bewertung:\n• In regelmäßigen Abständen muss die Leitung eine formelle Bewertung des ISMS durchführen (Management-Review), um dessen fortdauernde Eignung und Wirksamkeit zu bewerten.\n• Sie muss die Ergebnisse von Audits und die Leistung des ISMS (anhand von KPIs) zur Kenntnis nehmen und entsprechende Entscheidungen treffen.\n\n🗣️ Kommunikation und Kultur:\n• Die Leitung muss die Bedeutung der Informationssicherheit aktiv im Unternehmen kommunizieren und eine positive Sicherheitskultur vorleben und fördern.\n• Sie muss sicherstellen, dass die Rollen und Verantwortlichkeiten für Informationssicherheit klar zugewiesen sind."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Was ist der PDCA-Zyklus und wie wird er in der DIN ISO 27001 angewendet?',
        answer: "Der PDCA-Zyklus (Plan-Do-Check-Act) ist das Kernprinzip für die kontinuierliche Verbesserung, das allen modernen ISO-Managementsystemen zugrunde liegt.\n\nPLAN (Planen):\n• In dieser Phase wird das ISMS etabliert. Es werden der Kontext der Organisation analysiert, Risiken bewertet, Ziele festgelegt und Maßnahmen geplant.\n• Ergebnis sind die Leitlinien, die Risikoanalyse, der Risikobehandlungsplan und die SoA.\n\nDO (Durchführen):\n• Hier werden die in der Plan-Phase definierten Maßnahmen und Prozesse implementiert und betrieben.\n• Dies umfasst die Umsetzung der Kontrollen aus dem Anhang A, die Durchführung von Schulungen und die Erstellung der Dokumentation.\n\nCHECK (Überprüfen):\n• In dieser Phase wird die Leistung des ISMS überwacht und gemessen. Es wird geprüft, ob die Ziele erreicht und die Anforderungen erfüllt werden.\n• Typische Aktivitäten sind die Überwachung von KPIs, die Durchführung von internen Audits und die regelmäßige Überprüfung der Sicherheitslage.\n\nACT (Handeln):\n• Basierend auf den Ergebnissen der Check-Phase werden Maßnahmen zur Verbesserung ergriffen.\n• Dies umfasst die Korrektur von Abweichungen (Non-Conformities), die Anpassung von Zielen und die Optimierung von Prozessen und Kontrollen.\n• Die Ergebnisse fließen wieder in die Plan-Phase ein, wodurch sich der Zyklus schließt und die kontinuierliche Verbesserung sichergestellt wird."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Wie kann ADVISORI bei der Auswahl einer geeigneten Zertifizierungsstelle für die DIN ISO 27001 unterstützen?',
        answer: "Die Auswahl der richtigen Zertifizierungsstelle ist ein wichtiger Schritt, der gut überlegt sein sollte. ADVISORI bietet hierbei wertvolle, neutrale Unterstützung.\n\n🔍 Kriterien für die Auswahl:\n• **Akkreditierung:** Die Zertifizierungsstelle muss bei der Deutschen Akkreditierungsstelle (DAkkS) für den Bereich ISO 27001 akkreditiert sein. Nur dann ist die Zertifizierung international anerkannt.\n• **Branchenerfahrung:** Hat der Zertifizierer bzw. der eingesetzte Auditor Erfahrung in Ihrer Branche? Dies stellt sicher, dass er die spezifischen Risiken und Prozesse Ihres Unternehmens versteht.\n• **Pragmatismus und Augenhöhe:** Passt die Philosophie des Auditors zum Unternehmen? Ein guter Auditor agiert als Partner, der nicht nur Fehler sucht, sondern auch Verbesserungspotenziale aufzeigt.\n• **Kosten und Verfügbarkeit:** Natürlich spielen auch die Kosten für das Audit und die Verfügbarkeit von Auditoren eine Rolle bei der Entscheidung.\n\n🤝 Unsere Unterstützungsleistung:\n• **Marktübersicht:** Wir kennen den Markt der Zertifizierungsstellen in Deutschland und können eine Vorauswahl von geeigneten Anbietern treffen.\n• **Angebotsvergleich:** Wir helfen Ihnen, die Angebote verschiedener Zertifizierer objektiv zu vergleichen und die richtigen Fragen zu stellen.\n• **Vorbereitung:** Wir bereiten Sie und Ihre Mitarbeiter gezielt auf die Gespräche und das Audit mit der ausgewählten Stelle vor.\n• **Unabhängige Beratung:** Als Ihr Berater sind wir unabhängig und empfehlen die Stelle, die am besten zu Ihrer Unternehmenskultur und Ihren Zielen passt."
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
    console.log('✅ FAQ batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
