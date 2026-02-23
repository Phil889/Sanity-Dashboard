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
    console.log('Updating MaRisk Risikosteuerungs-Tools Integration page with FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'marisk-risikosteuerungs-tools-integration' })
    
    if (!existingDoc) {
      throw new Error('Document "marisk-risikosteuerungs-tools-integration" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Welche Governance-Strukturen empfiehlt ADVISORI für die nachhaltige Steuerung und Weiterentwicklung unserer integrierten MaRisk-Toollandschaft?",
        answer: "Die Governance integrierter Risikosteuerungs-Tools ist ein kritischer Erfolgsfaktor für deren langfristige MaRisk-Konformität und Wertbeitrag. Die richtige Balance zwischen zentraler Steuerung und fachlicher Flexibilität ist entscheidend. ADVISORI unterstützt Sie bei der Entwicklung einer maßgeschneiderten Tool-Governance, die klare Verantwortlichkeiten, transparente Entscheidungsprozesse und nachhaltige Qualitätssicherung gewährleistet.\n\n🏛️ Governance-Rahmenwerk für die Risikosteuerungs-Toollandschaft:\n• Drei-Linien-Modell: Integration der Tool-Governance in das Drei-Linien-Modell mit klarer Abgrenzung der Verantwortlichkeiten zwischen Fachbereichen, zentraler Tool-Koordination und unabhängiger Prüfung.\n• Risikotool-Steuerungskomitee: Etablierung eines interdisziplinären Gremiums mit Vertretern aus Risikomanagement, Compliance, IT und Controlling für strategische Tool-Entscheidungen.\n• RACI-Matrix für Tool-Management: Entwicklung einer detaillierten Verantwortungsmatrix, die für alle Aspekte des Tool-Lebenszyklus (Anforderungen, Änderungen, Betrieb, Validation) klare Zuständigkeiten definiert.\n• Policy-Hierarchie: Aufbau einer konsistenten Richtlinienstruktur von der übergreifenden Risikotool-Strategie bis zu detaillierten Arbeitsanweisungen für spezifische Tools.\n\n📋 Prozessuale Governance-Mechanismen:\n• Standardisierter Änderungsprozess: Implementierung eines strukturierten Change-Management-Prozesses für Tools mit definierten Genehmigungsstufen je nach Änderungsumfang und -risiko.\n• Tool-Release-Management: Etablierung eines koordinierten Release-Zyklus für Tooländerungen, der regulatorische Fristen, Geschäftsanforderungen und Ressourcenverfügbarkeit berücksichtigt.\n• Periodische Tool-Reviews: Durchführung regelmäßiger Überprüfungen der Toollandschaft hinsichtlich regulatorischer Compliance, Effizienz und strategischer Ausrichtung.\n• Eskalationspfade: Definition klarer Eskalationswege für Tool-bezogene Entscheidungen und Problemfälle.\n\n🔄 Kontinuierliche Verbesserung der Tool-Governance:\n• Tool-Reifegrad-Modell: Entwicklung eines Reifegradmodells zur regelmäßigen Bewertung und Weiterentwicklung Ihrer Tool-Governance.\n• Governance-KPIs: Etablierung messbarer Kennzahlen zur Bewertung der Effektivität Ihrer Tool-Governance (z.B. Time-to-Change, Compliance-Rate, User Satisfaction).\n• Lessons Learned: Systematische Auswertung von Erfahrungen aus Tool-Projekten und Integration der Erkenntnisse in die Governance-Prozesse.\n• Benchmarking: Regelmäßiger Vergleich Ihrer Tool-Governance mit Branchenstandards und Best Practices."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Wie können wir die Reporting-Funktionalitäten unserer Risikosteuerungs-Tools optimieren, um sowohl interne als auch regulatorische Anforderungen effizient zu erfüllen?",
        answer: "Ein effizientes, MaRisk-konformes Risikoreporting ist eine der wichtigsten Funktionen integrierter Risikosteuerungs-Tools. Die steigenden Anforderungen an Detailgrad, Frequenz und Konsistenz der Risikoberichterstattung stellen viele Institute vor große Herausforderungen. ADVISORI unterstützt Sie dabei, Ihre Reporting-Funktionalitäten so zu optimieren, dass sie sowohl interne Steuerungsanforderungen als auch regulatorische Vorgaben zuverlässig und ressourcenschonend erfüllen.\n\n📊 Mehrdimensionale Reporting-Architektur:\n• Reporting-Schichtenmodell: Aufbau einer strukturierten Berichtsarchitektur mit granularen Basisdaten, standardisierten Reporting-Komponenten und flexiblen Präsentationsschichten für unterschiedliche Zielgruppen.\n• Self-Service Reporting: Integration von Self-Service-Funktionen, die es Fachanwendern ermöglichen, bedarfsgerechte Ad-hoc-Analysen durchzuführen, ohne die Datenintegrität zu gefährden.\n• Einheitliche Reporting-Taxonomie: Entwicklung eines konsistenten Begriffsrahmens für Risikokennzahlen und -dimensionen über alle Berichtsebenen hinweg.\n• Automatisierte Abstimmungsprozesse: Implementation von Kontrollmechanismen, die die Konsistenz zwischen verschiedenen Berichtsebenen und -formaten sicherstellen.\n\n🔄 Automatisierung und Effizienzsteigerung im Reporting:\n• End-to-End-Automatisierung: Minimierung manueller Eingriffe durch durchgängige Automatisierung vom Datenimport bis zur Berichtsverteilung.\n• Report Factory Konzept: Etablierung eines industrialisierten Ansatzes für die Reporterstellung mit standardisierten Prozessen, Qualitätskontrollen und Ressourcenplanung.\n• Template-basierte Berichtsgenerierung: Nutzung vordefinierter, validierter Reporting-Vorlagen, die konsistente Darstellung und Berechnungen gewährleisten.\n• Reporting-Kalender: Koordination aller regulatorischen und internen Berichtstermine in einem integrierten Zeitplan zur Optimierung von Ressourcen und Abhängigkeiten.\n\n📱 Moderne Reporting-Funktionalitäten und -Formate:\n• Interaktive Dashboards: Implementierung dynamischer Visualisierungen, die intuitive Drill-Downs und flexible Analyseperspektiven ermöglichen.\n• Narrative Reporting: Integration von automatisierten Textbausteinen, die zentrale Erkenntnisse und Handlungsempfehlungen aus den Daten ableiten.\n• Exception-based Reporting: Fokussierung auf Abweichungen, Grenzwertüberschreitungen und besondere Risikosituationen statt umfassender Standardberichte.\n• Multi-Channel-Distribution: Flexible Bereitstellung von Risikoberichten über verschiedene Kanäle (PDF, Web, Mobile Apps, APIs) je nach Nutzerbedürfnissen.\n\n⚖️ Regulatorische Compliance im Reporting:\n• Mapping-Framework: Systematische Zuordnung interner Berichtsinhalte zu regulatorischen Anforderungen, um Mehrfacherhebungen zu vermeiden.\n• Audit Trail: Lückenlose Nachvollziehbarkeit aller Datenquellen, Berechnungen und manueller Anpassungen in regulatorischen Berichten.\n• Versioning & Archiving: Revisionssichere Aufbewahrung aller Berichtsversionen und zugrundeliegender Daten gemäß regulatorischer Aufbewahrungsfristen.\n• Prüfungssichere Kommentierung: Integration strukturierter Kommentierungsfunktionen für Erläuterungen, Methodenbeschreibungen und Qualitätshinweise."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Welche Aspekte müssen wir bei der Integration von Risikosteuerungs-Tools von Drittanbietern hinsichtlich des Auslagerungsmanagements gemäß MaRisk berücksichtigen?",
        answer: "Die Nutzung von Risikosteuerungs-Tools externer Anbieter unterliegt den strengen Auslagerungsanforderungen der MaRisk AT 9. Die sorgfältige Steuerung dieser spezifischen Risiken ist entscheidend für die Compliance und operationelle Sicherheit Ihres Risikomanagements. ADVISORI unterstützt Sie mit einem ganzheitlichen Ansatz für das Lieferantenmanagement im Kontext der Risikosteuerungs-Tools, der sowohl regulatorische Anforderungen als auch praktische Implementierungsaspekte berücksichtigt.\n\n🔍 Auslagerungsklassifizierung und -assessment für Risikotools:\n• Wesentlichkeitsbeurteilung: Strukturierte Bewertung der Wesentlichkeit von Risikosteuerungs-Tool-Auslagerungen gemäß MaRisk AT 9 unter Berücksichtigung ihrer Kritikalität für Ihr Risikomanagementsystem.\n• Multi-Provider-Risikobewertung: Analyse der spezifischen Risiken bei der Nutzung mehrerer Tool-Anbieter, insbesondere hinsichtlich Schnittstellenrisiken und End-to-End-Verantwortung.\n• Exit-Strategie-Entwicklung: Ausarbeitung realistischer Exit-Strategien für jedes externe Risikotool, inklusive Datenmigrationspfaden und Alternativszenarien.\n• MaRisk-konforme Dienstleisterkategorisierung: Einordnung der Tool-Anbieter in das institutseigene Auslagerungsmanagement-Framework mit entsprechenden Steuerungsanforderungen.\n\n📝 Vertragliche Absicherung und Service Level Management:\n• MaRisk-konforme Vertragsgestaltung: Entwicklung und Verhandlung von Verträgen mit Tool-Anbietern, die alle regulatorischen Anforderungen abdecken (Weisungs- und Kontrollrechte, Datenschutz, Prüfungsrechte).\n• SLA-Design für Risikomanagement-Kritikalität: Definition spezifischer Service Levels, die die besonderen Anforderungen an Verfügbarkeit, Performance und Support für Risikosteuerungssysteme berücksichtigen.\n• Audit-Rechte-Framework: Etablierung einer Struktur für regelmäßige Lieferantenaudits, die sowohl eigene Prüfungen als auch die Nutzung von Zertifizierungen und Poolprüfungen umfasst.\n• Subunternehmer-Management: Entwicklung von Transparenz- und Kontrollmechanismen für die Einbindung von Subunternehmern durch Ihre Tool-Anbieter.\n\n🛡️ Operatives Lieferantenmanagement für Tool-Provider:\n• Integriertes Provider-Governance-Modell: Einbindung der Tool-Anbietersteuerung in Ihre Gesamtrisikomanagement-Governance mit klaren Verantwortlichkeiten und Eskalationswegen.\n• Performance- und Risk-Monitoring: Implementierung eines kontinuierlichen Überwachungssystems für die Leistung und Risikosituation Ihrer Tool-Anbieter.\n• Joint Innovation Management: Etablierung strukturierter Prozesse für die gemeinsame Weiterentwicklung der Tools mit den Anbietern, insbesondere bei regulatorischen Änderungen.\n• Knowledge-Transfer-Sicherstellung: Entwicklung von Mechanismen, die den kontinuierlichen Wissenstransfer vom Anbieter in Ihr Institut sicherstellen und einer zu starken Abhängigkeit entgegenwirken."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Welche Balance zwischen Standardlösungen und kundenspezifischen Anpassungen empfiehlt ADVISORI bei der Integration von Risikosteuerungs-Tools?",
        answer: "Die Entscheidung zwischen Standardlösungen und individuell angepassten Risikosteuerungs-Tools gehört zu den grundlegenden strategischen Weichenstellungen mit weitreichenden Konsequenzen für Ihre MaRisk-Compliance, Agilität und Wirtschaftlichkeit. ADVISORI unterstützt Sie mit einem differenzierten Ansatz, der die richtige Balance zwischen Standardisierung und Individualisierung für Ihre spezifische Situation findet.\n\n⚖️ Strategische Entscheidungskriterien für die Individualisierung:\n• Regulatorische Differenzierung: Bewertung, inwiefern Ihre spezifischen aufsichtsrechtlichen Anforderungen (z.B. aufgrund von Geschäftsmodell, Größe oder Rechtsform) besondere Anpassungen erfordern.\n• Wettbewerbsrelevanz: Identifikation von Risikomanagement-Prozessen, die strategische Wettbewerbsvorteile bieten und daher möglicherweise eine höhere Individualisierung rechtfertigen.\n• Organisatorische Besonderheiten: Analyse Ihrer spezifischen Organisationsstruktur, Entscheidungswege und Risikomanagement-Kultur als Faktoren für den Anpassungsbedarf.\n• Kosten-Nutzen-Kalkulation: Entwicklung einer detaillierten TCO-Analyse, die langfristige Kosten für Wartung, Upgrades und regulatorische Anpassungen bei Standard- vs. individuellen Lösungen vergleicht.\n\n🧩 Differenzierter Individualisierungsansatz:\n• Layer-basierte Individualisierung: Konzeption einer mehrschichtigen Architektur, bei der die Basisfunktionen standardisiert bleiben, während Anpassungen auf höhere Schichten (Berichtsformate, Benutzeroberflächen, Workflows) konzentriert werden.\n• Core-Satellite-Modell: Nutzung von Standardsystemen für Kernfunktionen und gezielte Entwicklung individueller Satellitenmodule für institutsspezifische Anforderungen, die über Standardschnittstellen integriert werden.\n• Konfiguration vor Programmierung: Priorisierung von parametrisierbaren Lösungen, die umfangreiche Anpassungen über Konfiguration statt durch Programmierung ermöglichen.\n• Hybrid-Cloud-Modell: Kombination standardisierter Cloud-Services für allgemeine Risikofunktionen mit individuellen On-Premise-Lösungen für hochspezifische oder besonders sensitive Risikoprozesse.\n\n🛠️ Best Practices für die Implementierung individueller Komponenten:\n• API-First-Entwicklung: Fokus auf standardisierte, gut dokumentierte Schnittstellen bei der Entwicklung individueller Komponenten, um deren Integration und spätere Wartbarkeit zu verbessern.\n• Agile Entwicklungsmethodik: Anwendung iterativer Entwicklungsansätze mit regelmäßigen Feedback-Zyklen, um die Individualisierung genau auf die tatsächlichen Bedürfnisse auszurichten.\n• Modular Commons Approach: Identifikation von Funktionen, die für mehrere Bereiche relevant sind, und deren Entwicklung als wiederverwendbare Module statt als Einzel-Customizing.\n• Continuous Validation: Einrichtung eines fortlaufenden Validierungsprozesses, der sicherstellt, dass individuelle Anpassungen regulatorisch compliant bleiben und mit neuen Standardversionen kompatibel sind."
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
    console.log('✅ FAQs batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
