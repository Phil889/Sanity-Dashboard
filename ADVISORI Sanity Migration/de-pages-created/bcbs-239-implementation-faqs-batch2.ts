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
    console.log('Updating BCBS-239 Implementation page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'bcbs-239-implementation' })
    
    if (!existingDoc) {
      throw new Error('Document "bcbs-239-implementation" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie vereinbart ADVISORI die technischen Anforderungen der BCBS-239 mit bestehenden Legacy-Systemen und einer heterogenen IT-Landschaft?",
        answer: "Die Integration von BCBS-239 Anforderungen in gewachsene IT-Landschaften mit Legacy-Systemen stellt viele Finanzinstitute vor besondere Herausforderungen. ADVISORI hat hierfür einen pragmatischen, aber zukunftssicheren Ansatz entwickelt, der die Balance zwischen kurzfristiger Compliance und langfristiger Transformation findet.\n\n🔄 Integration in heterogene Systemlandschaften:\n• Abstraktionsschicht-Architektur: Wir implementieren eine logische Datenschicht, die als Brücke zwischen Legacy-Systemen und modernen Reportinganforderungen dient, ohne massive Eingriffe in die bestehende Infrastruktur zu erfordern.\n• Modulare Adapter-Strategie: Entwicklung standardisierter Schnittstellen und Adapter für verschiedene Systemtypen, die eine konsistente Datenextraktion und -transformation ermöglichen, während die Quellsysteme minimal belastet werden.\n• Synchronisierte Datenmodelle: Etablierung eines übergreifenden, semantisch einheitlichen Datenmodells, das die verschiedenen lokalen Modelle der Legacy-Systeme harmonisiert und eine einheitliche Sicht auf Risikodaten ermöglicht.\n• Hybride Architekturansätze: Kombinierte Nutzung von Data Warehouse, Data Lake und Data Virtualization Technologien, um die jeweiligen Stärken optimal zu nutzen und sich an die bestehende IT-Landschaft anzupassen.\n\n🛠️ ADVISORI's praktische Transformationsstrategie:\n• Inkrementeller Ansatz: Statt eines Big-Bang-Projekts entwickeln wir eine schrittweise Migrationsstrategie, die kritische Bereiche priorisiert und Quick Wins ermöglicht.\n• Parallelsysteme mit klarer Konvergenz: Bei besonders kritischen Legacy-Anwendungen implementieren wir zunächst parallele Lösungen mit definiertem Konvergenzpfad, um Risiken zu minimieren.\n• Legacy-Modernisierung durch Kapselung: Wir kapseln Alt-Systeme durch moderne APIs und Service-Schichten, um ihre Funktionalität zu erhalten, aber gleichzeitig ihre Interoperabilität zu verbessern.\n• Zielgerichtete Automatisierung: Fokussierte Automatisierung manueller Prozesse an den kritischsten Schnittstellen zwischen Legacy-Systemen und Risikodatenverarbeitung.\n\nDieser ausgewogene Ansatz ermöglicht es, BCBS-239 Compliance zu erreichen, ohne disruptive Großprojekte durchführen zu müssen, und legt gleichzeitig den Grundstein für die langfristige Modernisierung der Risikodateninfrastruktur – ein evolutionärer statt revolutionärer Weg zur regulatorischen Compliance und IT-Transformation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie unterstützt ADVISORI Banken bei der Entwicklung und Implementierung eines effektiven Datengovernance-Frameworks als Kernelement der BCBS-239 Compliance?",
        answer: "Ein robustes Datengovernance-Framework ist das Fundament jeder erfolgreichen BCBS-239 Implementierung und geht weit über technische Aspekte hinaus. ADVISORI hat einen umfassenden Ansatz entwickelt, der nicht nur die regulatorischen Anforderungen adressiert, sondern eine nachhaltige Datenkultur in der Organisation etabliert.\n\n🏛️ Architektur eines BCBS-239-konformen Governance-Frameworks:\n• Mehrstufiges Rollenmodell: Wir implementieren ein differenziertes Modell mit klaren Rollen und Verantwortlichkeiten – von strategischen Data Owner auf Vorstandsebene über fachliche Data Stewards bis zu technischen Data Custodians.\n• End-to-End Datenprozessgovernance: Etablierung von Governance nicht nur für Datenbestände, sondern für den gesamten Lebenszyklus der Daten von der Erfassung über Transformation bis zum Reporting.\n• Risikodaten-Taxonomie: Entwicklung einer umfassenden, hierarchischen Klassifikation von Risikodaten, die eine präzise Steuerung nach Kritikalität und regulatorischer Relevanz ermöglicht.\n• Integrierte Kontrollfunktionen: Implementation eines mehrstufigen Kontrollsystems mit präventiven, detektiven und korrektiven Maßnahmen zur Sicherstellung der Datenqualität und Compliance.\n\n📋 ADVISORI's Implementierungsmethodik:\n• Assessment und Gap-Analyse: Detaillierte Bewertung bestehender Governance-Strukturen gegen BCBS-239 Anforderungen mit Priorisierung der identifizierten Lücken.\n• Governance-Blueprint Entwicklung: Erstellung eines maßgeschneiderten Governance-Zielbilds, das sowohl regulatorische Anforderungen als auch organisatorische Besonderheiten berücksichtigt.\n• Phasenweise Implementation: Schrittweise Einführung von Governance-Elementen, beginnend mit den kritischsten Risikodaten und Prozessen, um frühe Erfolge zu ermöglichen.\n• Change Management und Kulturwandel: Begleitung der organisatorischen Transformation mit gezielten Maßnahmen zur Förderung einer datenorientierten Kultur und Überwindung von Silodenken.\n\nBesonders wertvoll ist unser Ansatz der 'lebenden Governance', der nicht auf statischen Dokumenten und Regelwerken basiert, sondern dynamische, in die täglichen Arbeitsprozesse integrierte Governance-Mechanismen etabliert. Dies führt zu einer höheren Akzeptanz und Nachhaltigkeit der Governance-Strukturen und stellt sicher, dass Datengovernance nicht als administrativer Overhead, sondern als wertschaffendes Element wahrgenommen wird."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie integriert ADVISORI die BCBS-239 Implementierung in eine umfassendere Digitalisierungsstrategie des Finanzinstituts?",
        answer: "Die BCBS-239 Implementierung sollte nicht als isolierte Compliance-Initiative betrachtet werden, sondern als integraler Bestandteil der digitalen Transformation eines Finanzinstituts. ADVISORI hat einen strategischen Ansatz entwickelt, der regulatorische Anforderungen mit übergreifenden Digitalisierungszielen verbindet und signifikante Synergien erschließt.\n\n🔄 Synergiefelder zwischen BCBS-239 und digitaler Transformation:\n• Datenmanagement als gemeinsames Fundament: BCBS-239 fordert eine hohe Datenqualität und -verfügbarkeit – dieselben Grundlagen, die für erfolgreiche Digitalisierungsinitiativen wie Advanced Analytics, KI-Anwendungen und personalisierte Kundenangebote essenziell sind.\n• Technologische Konvergenz: Die für BCBS-239 entwickelten Datenintegrations- und -verarbeitungslösungen können direkt für kundenorientierte digitale Services und interne Effizienzsteigerungen genutzt werden.\n• Organisatorische Transformation: Die für BCBS-239 etablierten Datengovernance-Strukturen und Verantwortlichkeiten bilden gleichzeitig die Basis für eine datengetriebene Entscheidungskultur im gesamten Unternehmen.\n• Agilität und Reaktionsfähigkeit: Eine BCBS-239-konforme Datenarchitektur ermöglicht nicht nur regulatorisches Reporting, sondern auch eine schnellere Reaktion auf Marktveränderungen und neue Geschäftschancen.\n\n🛠️ ADVISORI's Integrationsmethodik:\n• Gemeinsame Zielarchitektur: Entwicklung einer integrierten Zielarchitektur, die sowohl BCBS-239 Anforderungen als auch strategische Digitalisierungsziele berücksichtigt und Redundanzen vermeidet.\n• Koordinierte Roadmap: Abstimmung der Implementierungspfade von BCBS-239 und Digitalisierungsinitiativen, um Doppelarbeit zu vermeiden und Synergien optimal zu nutzen.\n• Unified Data Platform: Konzeption einer vereinheitlichten Datenplattform, die regulatorische und geschäftliche Anforderungen gleichermaßen bedient und skalierbar für zukünftige Anwendungsfälle ist.\n• Cross-funktionale Governance: Etablierung übergreifender Steuerungsstrukturen, die regulatorische Compliance und digitale Innovation als komplementäre statt konkurrierende Ziele behandeln.\n\nDurch diesen integrierten Ansatz wird die BCBS-239 Implementierung von einem Kostenfaktor zu einem strategischen Enabler für die digitale Transformation. Finanzinstitute, die diesen Weg beschreiten, berichten von bis zu 40% niedrigeren Gesamtkosten gegenüber isolierten Implementierungsansätzen und einer deutlich höheren Wertschöpfung aus ihren Dateninvestitionen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie stellt ADVISORI die nachhaltige Qualität von Risikodaten im Rahmen der BCBS-239 Implementierung sicher?",
        answer: "Datenqualität ist das Herzstück einer erfolgreichen BCBS-239 Implementierung und gleichzeitig eine der größten Herausforderungen für Finanzinstitute. ADVISORI verfolgt einen ganzheitlichen Ansatz zur Datenqualitätssicherung, der technische, prozessuale und organisatorische Dimensionen umfasst und eine nachhaltige Verbesserung statt punktueller Korrekturmaßnahmen gewährleistet.\n\n🔍 Mehrdimensionales Datenqualitätsframework:\n• Qualitätsdimensionen-Matrix: Wir operationalisieren Datenqualität entlang klar definierter Dimensionen wie Vollständigkeit, Genauigkeit, Konsistenz, Aktualität, Eindeutigkeit und Nachvollziehbarkeit mit spezifischen Metriken für jede Dimension.\n• Risikoorientierte Priorisierung: Entwicklung eines differenzierten Ansatzes, der Qualitätsanforderungen nach regulatorischer Kritikalität, geschäftlicher Relevanz und Risikoimpact priorisiert und Ressourcen optimal allokiert.\n• Präventive Qualitätssicherung: Implementation von Qualitätskontrollen möglichst nahe an der Datenquelle, um Fehler frühzeitig zu erkennen und kostspielige nachgelagerte Korrekturen zu minimieren.\n• Closed-Loop Feedback: Etablierung von Feedback-Mechanismen, die Qualitätsprobleme im Reporting systematisch zu den Datenerzeugern zurückführen und kontinuierliche Verbesserungen anstoßen.\n\n⚙️ Technologische Implementierung:\n• Automatisierte Datenvalidierung: Einsatz regelbasierter Validierungsengines, die Datenqualität kontinuierlich überwachen und Abweichungen von definierten Qualitätsstandards automatisch identifizieren.\n• Metadata-gesteuerte Qualitätssicherung: Nutzung von Metadaten zur dynamischen Steuerung von Qualitätskontrollen, die sich an verändernde regulatorische Anforderungen und Geschäftsbedürfnisse anpassen können.\n• Data Lineage für Qualitätstransparenz: Implementation durchgängiger Datenherkunfts- und Transformationsdokumentation, die Qualitätsprobleme präzise zu ihrer Quelle zurückverfolgen lässt.\n• KI-unterstützte Anomalieerkennung: Einsatz intelligenter Algorithmen, die ungewöhnliche Muster und potenzielle Qualitätsprobleme identifizieren können, die mit regelbasierten Ansätzen möglicherweise unentdeckt bleiben.\n\nBesonders wirksam ist unser Ansatz der 'Qualitätskultur-Entwicklung', der über technische Lösungen hinausgeht und ein gemeinsames Verständnis für die Bedeutung von Datenqualität in der gesamten Organisation schafft. Dies umfasst gezielte Awareness-Maßnahmen, Schulungen und Anreizsysteme, die gute Datenqualität belohnen und zu einem selbstverstärkenden Verbesserungszyklus führen."
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
