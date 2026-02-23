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
    console.log('Updating EU CRA Regulation page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-cra-regulation' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-cra-regulation" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Welche Rolle spielt die CE-Kennzeichnung bei der CRA-Compliance und wie bereiten wir uns auf den Konformitätsbewertungsprozess vor?',
        answer: "Die CE-Kennzeichnung unter der CRA stellt einen kritischen Meilenstein für den Marktzugang digitaler Produkte in der EU dar. Sie erfordert eine umfassende Konformitätsbewertung, die weit über traditionelle Produktsicherheitsprüfungen hinausgeht und spezifische Cybersicherheitsanforderungen integriert. Eine strategische Vorbereitung auf diesen Prozess ist entscheidend für den erfolgreichen Markteintritt.\n\n📋 Konformitätsbewertungsverfahren unter der CRA:\n• Selbstbewertung für die meisten digitalen Produkte durch den Hersteller, basierend auf harmonisierten Standards und technischen Spezifikationen.\n• Beteiligung benannter Stellen für kritische Produkte der Klassen I und II, die erweiterte Sicherheitsprüfungen und Zertifizierungen erfordern.\n• Kontinuierliche Konformitätsbewertung über den gesamten Produktlebenszyklus, einschließlich regelmäßiger Updates und Sicherheitspatches.\n• Dokumentation aller Sicherheitsmaßnahmen, Risikobewertungen und Compliance-Aktivitäten in einer umfassenden technischen Dokumentation.\n• Erstellung einer EU-Konformitätserklärung, die alle relevanten CRA-Anforderungen und deren Erfüllung detailliert beschreibt.\n\n🔍 Vorbereitung auf die Konformitätsbewertung:\n• Frühzeitige Gap-Analyse zur Identifikation aller CRA-relevanten Anforderungen und bestehender Compliance-Lücken.\n• Entwicklung eines Konformitätsbewertungsplans mit klaren Meilensteinen, Verantwortlichkeiten und Zeitplänen.\n• Aufbau interner Expertise oder Partnerschaften mit Beratungsunternehmen und benannten Stellen für komplexe Bewertungen.\n• Implementierung von Qualitätsmanagementsystemen, die spezifisch auf CRA-Anforderungen ausgerichtet sind.\n• Etablierung von Prozessen zur kontinuierlichen Überwachung und Aktualisierung der Konformitätsbewertung.\n\n✅ CE-Kennzeichnung und Marktüberwachung:\n• Anbringung der CE-Kennzeichnung nur nach vollständiger Konformitätsbewertung und Erfüllung aller Essential Requirements.\n• Bereitstellung umfassender Produktinformationen und Sicherheitshinweise für Endnutzer und Marktüberwachungsbehörden.\n• Etablierung von Rückverfolgbarkeitssystemen zur eindeutigen Identifikation von Produkten und deren Compliance-Status.\n• Vorbereitung auf Marktüberwachungsaktivitäten durch Behörden, einschließlich Audits und Produktprüfungen.\n• Kontinuierliche Überwachung regulatorischer Entwicklungen und Anpassung der Konformitätsbewertung an neue Anforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Wie können wir die CRA-Implementierung nutzen, um unsere digitale Transformation zu beschleunigen und Innovationen voranzutreiben?',
        answer: "Die CRA-Implementierung bietet eine einzigartige Gelegenheit, Cybersicherheit als Katalysator für digitale Transformation und Innovation zu nutzen. Anstatt die Verordnung als regulatorische Belastung zu betrachten, können vorausschauende Unternehmen sie als strategischen Enabler für Modernisierung, Prozessoptimierung und Wettbewerbsdifferenzierung einsetzen.\n\n🚀 CRA als Innovationstreiber:\n• Security-by-Design Prinzipien fördern die Entwicklung robusterer und zuverlässigerer Produktarchitekturen, die als Grundlage für zukünftige Innovationen dienen.\n• Automatisierung von Sicherheitsprozessen durch KI und Machine Learning schafft Effizienzgewinne und ermöglicht die Fokussierung auf wertschöpfende Aktivitäten.\n• Integration von IoT-Sicherheit und Edge Computing Lösungen eröffnet neue Geschäftsmöglichkeiten in vernetzten Ökosystemen.\n• Entwicklung von Privacy-by-Design Ansätzen stärkt das Vertrauen der Kunden und ermöglicht datengetriebene Geschäftsmodelle.\n• Etablierung von Zero-Trust-Architekturen als Grundlage für sichere Cloud-Migration und hybride Arbeitsmodelle.\n\n💡 Digitale Transformation durch CRA-Compliance:\n• Modernisierung von Legacy-Systemen im Rahmen der CRA-Implementierung schafft eine solide Basis für digitale Initiativen.\n• Implementierung von DevSecOps-Praktiken beschleunigt die Softwareentwicklung und verbessert die Time-to-Market.\n• Aufbau von Data Analytics Fähigkeiten zur kontinuierlichen Überwachung und Optimierung von Sicherheitsmaßnahmen.\n• Integration von API-Management und Microservices-Architekturen zur Verbesserung der Systemflexibilität und Skalierbarkeit.\n• Entwicklung von Customer-Centric Security Features, die als Differenzierungsmerkmale im Markt positioniert werden können.\n\n🔄 Strategische Innovationsansätze:\n• Aufbau von Cybersecurity Centers of Excellence als interne Innovationslabore für Sicherheitstechnologien.\n• Partnerschaften mit Startups und Technologieanbietern zur Erkundung neuer Sicherheitslösungen und Geschäftsmodelle.\n• Entwicklung von Security-as-a-Service Angeboten für Kunden und Partner basierend auf internen CRA-Erfahrungen.\n• Integration von Blockchain und Distributed Ledger Technologien für verbesserte Transparenz und Vertrauen.\n• Nutzung von Quantum-Safe Cryptography zur Zukunftssicherung von Sicherheitsarchitekturen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Welche internationalen Auswirkungen hat die CRA auf unsere globale Geschäftsstrategie und wie koordinieren wir Compliance-Aktivitäten weltweit?',
        answer: "Die CRA hat weitreichende Auswirkungen auf globale Geschäftsstrategien, da sie nicht nur EU-Märkte betrifft, sondern auch internationale Lieferketten, Produktentwicklung und Compliance-Frameworks beeinflusst. Eine koordinierte globale Herangehensweise ist erforderlich, um Synergien zu nutzen und Compliance-Kosten zu optimieren, während gleichzeitig regionale Besonderheiten berücksichtigt werden.\n\n🌍 Globale Auswirkungen der CRA:\n• Extraterritoriale Wirkung der CRA betrifft alle Unternehmen, die digitale Produkte in der EU vermarkten, unabhängig von ihrem Hauptsitz oder Produktionsstandort.\n• Harmonisierung globaler Sicherheitsstandards wird durch die CRA vorangetrieben, da Unternehmen oft einheitliche Standards für alle Märkte implementieren.\n• Supply Chain Anforderungen erstrecken sich auf globale Lieferanten und Partner, die CRA-konforme Komponenten und Dienstleistungen bereitstellen müssen.\n• Wettbewerbsvorteile entstehen für Unternehmen, die CRA-Standards als globalen Qualitätsmaßstab etablieren und in anderen Märkten als Differenzierungsmerkmal nutzen.\n• Regulatorische Konvergenz wird gefördert, da andere Jurisdiktionen ähnliche Cybersicherheitsanforderungen entwickeln und implementieren.\n\n🔄 Koordination globaler Compliance-Aktivitäten:\n• Etablierung einer zentralen CRA-Governance-Struktur mit regionalen Compliance-Managern, die lokale Besonderheiten berücksichtigen und globale Standards umsetzen.\n• Entwicklung einheitlicher Compliance-Frameworks, die CRA-Anforderungen mit anderen regionalen Regulierungen wie dem US Cybersecurity Framework oder Singapurs Cybersecurity Act harmonisieren.\n• Implementierung globaler Incident Response Prozesse, die CRA-Meldepflichten mit anderen regulatorischen Anforderungen koordinieren.\n• Aufbau regionaler Expertise-Zentren, die lokale Marktkenntnis mit globalen CRA-Standards verbinden.\n• Standardisierung von Audit- und Assessment-Prozessen zur effizienten Überwachung der Compliance in verschiedenen Jurisdiktionen.\n\n📊 Strategische Optimierung und Synergien:\n• Nutzung von CRA-Investitionen zur Stärkung der Cybersicherheitsposition in anderen Märkten und zur Erfüllung ähnlicher regulatorischer Anforderungen.\n• Entwicklung globaler Sicherheitsstandards, die über CRA-Mindestanforderungen hinausgehen und als Wettbewerbsvorteil in allen Märkten genutzt werden können.\n• Koordination von Forschung und Entwicklung zur Schaffung innovativer Sicherheitslösungen, die globale Marktanforderungen erfüllen.\n• Aufbau strategischer Partnerschaften mit internationalen Beratungsunternehmen und Technologieanbietern zur Optimierung globaler Compliance-Kosten.\n• Integration von CRA-Compliance in globale Risikomanagement- und Business Continuity Strategien."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Wie messen und überwachen wir kontinuierlich die Effektivität unserer CRA-Compliance-Maßnahmen?',
        answer: "Die kontinuierliche Messung und Überwachung der CRA-Compliance-Effektivität erfordert ein umfassendes Monitoring-Framework, das technische, operative und geschäftliche Metriken integriert. Ein datengetriebener Ansatz ermöglicht es, Compliance-Lücken frühzeitig zu identifizieren, Verbesserungspotenziale zu erkennen und den Wert der Cybersicherheitsinvestitionen zu demonstrieren.\n\n📊 Entwicklung eines CRA-Compliance-Monitoring-Frameworks:\n• Etablierung von Key Performance Indicators (KPIs), die sowohl technische Sicherheitsmetriken als auch geschäftliche Auswirkungen der CRA-Compliance messen.\n• Implementierung von Real-time Dashboards, die Compliance-Status, Sicherheitsvorfälle und Risikoindikatoren in Echtzeit visualisieren.\n• Aufbau automatisierter Monitoring-Systeme, die kontinuierlich die Einhaltung von Essential Requirements überwachen und Abweichungen sofort melden.\n• Integration von Compliance-Metriken in bestehende Business Intelligence und Reporting-Systeme zur ganzheitlichen Unternehmenssteuerung.\n• Entwicklung von Benchmarking-Prozessen zur Bewertung der Compliance-Performance im Vergleich zu Branchenstandards und Best Practices.\n\n🔍 Technische und operative Überwachungsmetriken:\n• Schwachstellenmanagement-Metriken wie Mean Time to Detection (MTTD), Mean Time to Response (MTTR) und Patch-Deployment-Geschwindigkeit.\n• Incident Response Effektivität gemessen durch Response-Zeiten, Eskalationsraten und Wiederherstellungszeiten nach Sicherheitsvorfällen.\n• Security-by-Design Integration durch Metriken wie Anteil sicherheitsgeprüfter Code-Commits, Automatisierungsgrad von Sicherheitstests und Compliance-Rate in Entwicklungsprozessen.\n• Supply Chain Security durch Überwachung von Lieferanten-Compliance-Raten, Audit-Ergebnissen und Sicherheitsvorfällen in der Lieferkette.\n• Kontinuierliche Compliance-Überwachung durch automatisierte Assessments, Konfigurationsdrift-Erkennung und Policy-Violation-Tracking.\n\n📈 Geschäftliche und strategische Erfolgsmessung:\n• ROI-Berechnung der CRA-Investitionen durch Quantifizierung vermiedener Kosten, Effizienzgewinne und Umsatzsteigerungen.\n• Kundenzufriedenheit und Vertrauen gemessen durch Umfragen, Net Promoter Scores und Kundenretention-Raten.\n• Marktpositionierung und Wettbewerbsvorteile durch Analyse von Marktanteilen, Ausschreibungsgewinnen und Partnerschaften.\n• Regulatorische Compliance-Kosten und deren Entwicklung über Zeit zur Optimierung von Compliance-Investitionen.\n• Mitarbeiterengagement und Sicherheitsbewusstsein durch Schulungsmetriken, Phishing-Test-Ergebnisse und Sicherheitsvorfälle durch menschliche Fehler."
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
    console.log('✅ FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
