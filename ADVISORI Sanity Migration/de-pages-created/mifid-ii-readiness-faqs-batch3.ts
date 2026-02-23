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
    console.log('Updating MiFID II Readiness page with strategic FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'mifid-ii-readiness' })
    
    if (!existingDoc) {
      throw new Error('Document "mifid-ii-readiness" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie wirkt sich MiFID II auf die Produktgovernance aus und welche Best Practices empfiehlt ADVISORI für eine effektive Implementierung?",
        answer: "Die Produktgovernance-Anforderungen stellen einen der weitreichendsten Paradigmenwechsel unter MiFID II dar. Sie verschieben den Fokus vom reinen Vertrieb hin zu einer umfassenden Produktverantwortung über den gesamten Lebenszyklus hinweg. Diese neuen Anforderungen betreffen sowohl Hersteller als auch Vertreiber von Finanzprodukten und erfordern eine fundamentale Neugestaltung interner Prozesse und Kontrollen, um sicherzustellen, dass Produkte den Bedürfnissen klar definierter Zielmärkte entsprechen.\n\n📦 Zentrale Dimensionen der MiFID II-Produktgovernance:\n• End-to-End Produktverantwortung: Pflicht zur Überwachung und Steuerung des gesamten Produktlebenszyklus von der Konzeption über Genehmigung, Vertrieb bis hin zur regelmäßigen Überprüfung mit klaren Verantwortlichkeiten in jeder Phase.\n• Zielmarkt-Definition und -Monitoring: Verpflichtung zur präzisen Definition geeigneter Zielmärkte für jedes Produkt auf Basis multipler Kriterien und kontinuierliche Überwachung der tatsächlichen Zielmarktentwicklung.\n• Vertriebsstrategie-Alignment: Notwendigkeit der Abstimmung aller Vertriebsaktivitäten auf die definierten Zielmärkte, inklusive angemessener Kontrollen zur Vermeidung von Fehlvertrieb.\n• Produktüberwachung und -anpassung: Pflicht zur kontinuierlichen Überwachung der Produktperformance und Ergreifung angemessener Maßnahmen bei signifikanten Abweichungen von erwarteten Ergebnissen.\n\n🔍 ADVISORI Best Practices für effektive Produktgovernance:\n• Integriertes Product-Lifecycle-Management: Implementierung eines durchgängigen, digitalen Produktlebenszyklus-Frameworks, das alle relevanten Stakeholder einbindet und konsistente Dokumentation über alle Phasen sicherstellt.\n• Datengetriebenes Zielmarkt-Framework: Entwicklung einer systematischen, datenbasierten Methodik zur Zielmarktdefinition mit präzisen, messbaren Kriterien und automatisierten Monitoring-Mechanismen.\n• Digitalisierte Kontrollmechanismen: Einführung digitaler Kontrollen im Vertriebsprozess, die ungeeignete Zielmarkt-Kombinationen automatisch erkennen und entsprechende Eskalationen auslösen.\n• Automatisiertes Reporting und Analytics: Implementation eines automatisierten Reporting-Systems zur kontinuierlichen Analyse der Produktperformance und Zielmarktentwicklung mit prädiktiven Elementen zur Früherkennung potentieller Issues."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Herausforderungen bringt MiFID II für das Change Management in Finanzinstituten mit sich und wie unterstützt ADVISORI bei deren Bewältigung?",
        answer: "MiFID II stellt nicht nur in regulatorischer und technischer Hinsicht eine massive Herausforderung dar, sondern erfordert auch einen tiefgreifenden kulturellen und organisatorischen Wandel. Die Regulierung berührt nahezu alle Geschäftsbereiche und Mitarbeitergruppen eines Finanzinstituts und verändert fundamentale Arbeitsweisen – von der Kundenberatung über die Produktentwicklung bis hin zum Handel. Diese weitreichenden Änderungen erfordern ein durchdachtes Change Management, um Widerständen vorzubeugen und eine nachhaltige Verankerung sicherzustellen.\n\n🔄 Zentrale Change-Management-Herausforderungen bei MiFID II:\n• Umfassende Betroffenheit: MiFID II betrifft nahezu alle Unternehmensbereiche mit unterschiedlichen Anforderungen und Auswirkungen, was ein differenziertes Change-Konzept erfordert.\n• Kultureller Paradigmenwechsel: Die verstärkten Anlegerschutz- und Transparenzanforderungen erfordern ein fundamentales Umdenken, insbesondere in kundennahen Bereichen und im Handel.\n• Komplexes Stakeholder-Management: Die Vielzahl betroffener Stakeholder mit teils divergierenden Interessen erfordert ein sorgfältiges Erwartungsmanagement und eine abgestimmte Kommunikation.\n• Kontinuierliche Anpassungsfähigkeit: Der laufende Konkretisierungsprozess durch Aufsichtsbehörden verlangt eine hohe Anpassungsfähigkeit und Flexibilität im Implementierungsprozess.\n\n🌱 Der ADVISORI-Ansatz zum effektiven MiFID II Change Management:\n• Integriertes Change-Impact-Assessment: Systematische Analyse der Auswirkungen auf Prozesse, Systeme, Organisationsstrukturen und Rollen mit präziser Identifikation der notwendigen Verhaltensänderungen.\n• Segmentierte Change-Strategie: Entwicklung zielgruppenspezifischer Change-Strategien, die auf die unterschiedlichen Betroffenheiten und Bedürfnisse verschiedener Stakeholdergruppen zugeschnitten sind.\n• Multilevel-Kommunikationskonzept: Gestaltung eines mehrstufigen Kommunikationsansatzes, der strategische Botschaften der Führungsebene mit konkreten, operativen Informationen für die Mitarbeiter verbindet.\n• Befähigungsprogramm: Entwicklung eines umfassenden Schulungs- und Befähigungsprogramms, das sowohl technische Kompetenzen als auch die notwendigen Soft Skills für die neue Arbeitsweise vermittelt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können Finanzinstitute die MiFID II-Compliance nachhaltig sicherstellen und welche Governance-Strukturen empfiehlt ADVISORI?",
        answer: "Die nachhaltige Sicherstellung der MiFID II-Compliance ist keine einmalige Implementierungsaufgabe, sondern erfordert einen kontinuierlichen Governance- und Überwachungsprozess. Die Komplexität und regelmäßige Weiterentwicklung der Regulierung sowie die hohen Bußgelder bei Verstößen machen ein systematisches Compliance-Management unerlässlich. Effektive Governance-Strukturen sind dabei der Schlüssel, um Compliance-Risiken frühzeitig zu erkennen und angemessen zu steuern.\n\n🏛️ Kernelemente einer robusten MiFID II-Governance:\n• Klare Verantwortungsstrukturen: Etablierung eindeutiger Verantwortlichkeiten für MiFID II-Compliance auf allen Ebenen, von der Geschäftsleitung über dedizierte Compliance-Funktionen bis hin zu operativen Einheiten mit dem Three-Lines-of-Defense-Modell als Basis.\n• Integriertes Policies & Procedures Framework: Entwicklung eines umfassenden, konsistenten Regelwerks, das alle MiFID II-Anforderungen abdeckt und klare Handlungsanweisungen für alle betroffenen Mitarbeiter bietet.\n• Systematisches Monitoring & Testing: Implementation eines strukturierten Überwachungs- und Testprogramms zur kontinuierlichen Bewertung der Compliance-Einhaltung mit risikoorientierter Priorisierung.\n• Regulatorisches Change Management: Aufbau eines Prozesses zur frühzeitigen Identifikation und Bewertung regulatorischer Änderungen mit klaren Verantwortlichkeiten für die Umsetzung.\n\n⚙️ ADVISORI's empfohlene Governance-Strukturen für nachhaltige MiFID II-Compliance:\n• MiFID II Steering Committee: Etablierung eines hochrangigen Lenkungsausschusses mit Vertretern aller relevanten Geschäftsbereiche und zentralen Funktionen zur strategischen Steuerung der MiFID II-Compliance.\n• Thematische Compliance-Hubs: Schaffung spezialisierter Kompetenzcentren für Kernbereiche wie Anlegerschutz, Best Execution, Kostentransparenz und Transaktionsreporting als Brücke zwischen zentralen und dezentralen Einheiten.\n• Automatisierte Compliance-Kontrollen: Integration automatisierter Kontrollen in operative Prozesse und Systeme, die Compliance-Verstöße präventiv verhindern oder frühzeitig erkennen.\n• Integriertes Compliance-Reporting: Entwicklung eines umfassenden MiFID II-Compliance-Dashboards, das Management-Informationen und Key Risk Indicators auf verschiedenen Granularitätsebenen bereitstellt und ein proaktives Management ermöglicht."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Rolle spielt Data Management bei der MiFID II-Compliance und wie unterstützt ADVISORI bei der Entwicklung einer effektiven Datenstrategie?",
        answer: "Datenmanagement ist ein zentraler Erfolgsfaktor für die MiFID II-Compliance, da die Regulierung in nahezu allen Bereichen umfangreiche und hochqualitative Datenanforderungen stellt. Von Transaktionsreporting über Best Execution bis hin zu Kostentransparenz und Produktgovernance – überall werden präzise, vollständige und konsistente Daten benötigt. Viele Finanzinstitute stehen vor der Herausforderung, diese Datenanforderungen über verschiedene Systeme, Geschäftsbereiche und teils auch externe Quellen hinweg zu erfüllen.\n\n🔢 Datenmanagement-Herausforderungen unter MiFID II:\n• Datenidentifikation und -konsolidierung: Notwendigkeit, alle für MiFID II relevanten Daten zu identifizieren und aus verschiedenen, oft isolierten Quellsystemen zu konsolidieren, teilweise mit externen Daten anzureichern.\n• Datenqualitätsmanagement: Anforderung, die Vollständigkeit, Konsistenz, Genauigkeit und Aktualität aller reportingrelevanten Daten kontinuierlich sicherzustellen und zu überwachen.\n• Datentransformationen: Komplexe Anforderungen an Datentransformationen zur Einhaltung regulatorischer Vorgaben, die konsistente Berechnungsmethoden und Logiken über verschiedene Prozesse hinweg erfordern.\n• Datenarchivierung und -retrievability: Pflicht zur sicheren, langfristigen Speicherung großer Datenmengen bei gleichzeitiger Gewährleistung schneller Abrufbarkeit für Aufsichtsbehörden und interne Kontrollen.\n\n📊 Der ADVISORI-Ansatz für effektives MiFID II-Datenmanagement:\n• Daten-Impact-Assessment: Systematische Analyse aller MiFID II-Datenanforderungen und deren Mapping auf vorhandene Datenquellen mit Identifikation von Gaps und Qualitätsrisiken.\n• Integrierte Datenarchitektur: Entwicklung einer MiFID II-konformen Datenzielarchitektur, die sowohl regulatorische Anforderungen erfüllt als auch operative Effizienz und Skalierbarkeit gewährleistet.\n• Data Quality Framework: Implementation eines umfassenden Datenqualitätsframeworks mit klaren Ownership-Strukturen, automatisierten Validierungsregeln und kontinuierlichem Monitoring.\n• Data Lineage & Governance: Etablierung durchgängiger Data Lineage für alle regulatorisch relevanten Daten mit klarer Dokumentation von Datenquellen, Transformationen und Verwendungszwecken."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new strategic FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ Strategic FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
