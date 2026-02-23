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
    console.log('Updating EBA Governance, Outsourcing & ESG-Vorgaben page with C-Level FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eba-governance-outsourcing-esg-vorgaben' })
    
    if (!existingDoc) {
      throw new Error('Document "eba-governance-outsourcing-esg-vorgaben" not found')
    }
    
    // Create new C-Level FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie wirken sich die aktuellen EBA-Governance-Anforderungen auf die strategische Führung und die Verantwortlichkeiten des Vorstands in Finanzinstituten aus?",
        answer: "Die EBA-Governance-Anforderungen transformieren die Rolle des Vorstands grundlegend von einer primär geschäftsorientierten zu einer umfassenderen Steuerungs- und Überwachungsfunktion mit erhöhter persönlicher Verantwortung. Diese Entwicklung reflektiert die Erkenntnis, dass robuste Governance-Strukturen essentiell für die Finanzstabilität und nachhaltige Wertschöpfung sind.\n\n🔍 Erweiterte Vorstandsverantwortung unter EBA-Vorgaben:\n• Persönliche Haftung: Vorstandsmitglieder tragen zunehmend persönliche Verantwortung für Compliance-Verstöße und müssen nachweisen können, dass sie angemessene Sorgfalt bei Entscheidungen walten ließen.\n• Risikomanagement-Integration: Der Vorstand muss aktiv die Risikostrategie definieren, eine angemessene Risikokultur fördern und sicherstellen, dass Risikoaspekte in alle strategischen Entscheidungen einfließen.\n• Qualifizierte Governance-Strukturen: Die Anforderungen an die fachliche Eignung und persönliche Zuverlässigkeit (Fit & Proper) wurden verschärft, mit regelmäßigen Bewertungen und dokumentierten Nachweisen.\n• Kulturelle Transformation: Vom Vorstand wird erwartet, dass er eine Unternehmenskultur fördert, die ethisches Verhalten, Compliance und nachhaltiges Wirtschaften in den Mittelpunkt stellt.\n\n🛠️ Praktische Implementierungsanforderungen:\n• Formalisierte Entscheidungsprozesse: Entscheidungen müssen dokumentiert, nachvollziehbar und auf fundierte Analysen gestützt sein.\n• Klare Delegationsstrukturen: Die Delegation von Aufgaben erfordert klare Rahmenwerke mit definierten Eskalationswegen und Berichtspflichten.\n• Effektive Informationssysteme: Der Vorstand muss über Informationssysteme verfügen, die zeitnahe, akkurate und relevante Informationen für fundierte Entscheidungen liefern.\n• Kontinuierliche Weiterbildung: Vorstandsmitglieder müssen ihre Kenntnisse zu regulatorischen Entwicklungen, Risikomanagement und relevanten Markttrends kontinuierlich aktualisieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche strategischen Herausforderungen und Chancen ergeben sich für Finanzinstitute durch die Integration von ESG-Faktoren gemäß den EBA-Vorgaben?",
        answer: "Die Integration von ESG-Faktoren gemäß EBA-Vorgaben stellt Finanzinstitute vor tiefgreifende transformative Herausforderungen, eröffnet jedoch gleichzeitig strategische Chancen für Wettbewerbsdifferenzierung und nachhaltige Wertschöpfung. Die ESG-Anforderungen gehen weit über reine Compliance hinaus und erfordern eine fundamentale Neuausrichtung von Geschäftsmodellen, Risikomanagement und Unternehmenskultur.\n\n🌱 Strategische Herausforderungen der ESG-Integration:\n• Datenqualität und -verfügbarkeit: Die Erhebung und Validierung verlässlicher ESG-Daten über Kunden, Investitionen und die eigene Wertschöpfungskette stellt viele Institute vor erhebliche methodische und operative Hürden.\n• Kompetenzaufbau: Es besteht ein signifikanter Bedarf an spezialisierten Fachkräften mit Expertise an der Schnittstelle von Finanzwesen, Nachhaltigkeit und Regulatorik.\n• Methodische Komplexität: Die Entwicklung robuster Modelle zur Bewertung von Klima- und ESG-Risiken erfordert innovative Ansätze jenseits traditioneller Risikomodelle.\n• Change Management: Die Integration von ESG in alle Geschäftsprozesse erfordert einen tiefgreifenden kulturellen Wandel und kann auf Widerstand innerhalb der Organisation stoßen.\n\n💼 Strategische Chancen durch ESG-Transformation:\n• Risikominimierung: Eine proaktive ESG-Integration ermöglicht die frühzeitige Identifikation und das Management von Transitionsrisiken und physischen Risiken, die das traditionelle Risikomanagement nicht erfasst.\n• Produktinnovation: Die Entwicklung ESG-konformer Finanzprodukte eröffnet Zugang zu neuen Kundensegmenten und Märkten mit überdurchschnittlichem Wachstumspotenzial.\n• Kapitalmarktvorteile: Institute mit überzeugender ESG-Performance profitieren zunehmend von verbesserten Finanzierungsbedingungen und höherer Attraktivität für institutionelle Investoren.\n• Employer Branding: Eine authentische Nachhaltigkeitsstrategie stärkt die Arbeitgeberattraktivität besonders bei hochqualifizierten jüngeren Talenten, die verstärkt Sinnhaftigkeit in ihrer Tätigkeit suchen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir als Finanzinstitut die Outsourcing-Anforderungen der EBA effizient umsetzen und gleichzeitig operative Flexibilität bewahren?",
        answer: "Die EBA-Outsourcing-Richtlinien stellen Finanzinstitute vor die komplexe Aufgabe, regulatorische Compliance mit operativer Effizienz und strategischer Flexibilität in Einklang zu bringen. Ein strategischer Implementierungsansatz kann nicht nur Compliance sicherstellen, sondern auch die Leistungsfähigkeit der Outsourcing-Beziehungen steigern und Wettbewerbsvorteile erschließen.\n\n🔄 Strategischer Implementierungsansatz:\n• Outsourcing-Governance-Framework: Entwickeln Sie ein umfassendes Governance-Modell mit klaren Verantwortlichkeiten, Entscheidungsprozessen und Eskalationswegen, das in Ihre bestehende Organisationsstruktur integriert ist.\n• Risikoorientierte Segmentierung: Klassifizieren Sie Outsourcing-Arrangements nach Kritikalität und Risikoprofil, um differenzierte Steuerungs- und Überwachungsansätze zu ermöglichen und Ressourcen effizient einzusetzen.\n• Integriertes Drittanbieter-Management: Konsolidieren Sie die Verwaltung aller Drittanbieterbeziehungen in einer zentralen Plattform, die Vertragsmanagement, Risikobewertung, Performance-Monitoring und Compliance-Dokumentation vereint.\n• Strategische Partner-Selektion: Bewerten Sie potenzielle Dienstleister nicht nur nach Kosten und Leistungsfähigkeit, sondern auch nach ihrer eigenen Compliance-Reife und ihrer Anpassungsfähigkeit an regulatorische Änderungen.\n\n🛡️ Balancierung von Compliance und Flexibilität:\n• Modulare Vertragsgestaltung: Strukturieren Sie Verträge so, dass sie einerseits alle regulatorischen Anforderungen erfüllen, andererseits aber flexible Anpassungen an veränderte Geschäftsanforderungen ermöglichen.\n• Kollaborative Compliance-Modelle: Entwickeln Sie mit strategischen Dienstleistern gemeinsame Compliance-Frameworks mit geteilten Tools und Prozessen, um Doppelarbeit zu vermeiden und Effizienz zu steigern.\n• Automatisierte Überwachung: Implementieren Sie automatisierte Monitoring-Systeme, die kontinuierlich Leistungskennzahlen und Compliance-Indikatoren überwachen und bei Abweichungen frühzeitig alarmieren.\n• Exit-Strategie und operative Resilienz: Entwickeln Sie für kritische Outsourcing-Beziehungen robuste Exit-Pläne und Alternativszenarien, die operative Kontinuität auch bei unerwarteten Störungen oder Dienstleisterausfällen sicherstellen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche zentralen KPIs und Reporting-Strukturen sollten wir implementieren, um die Effektivität unserer Governance, Outsourcing und ESG-Compliance nachhaltig zu messen und zu steuern?",
        answer: "Die Entwicklung eines effektiven Monitoring- und Reporting-Systems für Governance, Outsourcing und ESG-Compliance erfordert einen ausgewogenen Mix aus führenden und nachlaufenden Indikatoren, die sowohl Compliance-Aspekte als auch geschäftliche Wertschöpfung abbilden. Ein strategisch konzipiertes KPI-Framework ermöglicht nicht nur die Erfüllung regulatorischer Anforderungen, sondern unterstützt auch faktenbasierte Entscheidungsfindung und kontinuierliche Verbesserung.\n\n📊 Kernelemente eines integrierten Compliance-Measurement-Systems:\n• Governance-Effektivitäts-KPIs: Messen Sie die Qualität und Wirksamkeit Ihrer Governance-Strukturen durch Indikatoren wie Entscheidungsgeschwindigkeit, Implementierungsraten von Audit-Empfehlungen, Häufigkeit von Eskalationen und Qualität der Vorstandsberichterstattung.\n• Outsourcing-Performance-Metriken: Erfassen Sie neben klassischen SLAs auch regulatorische Compliance-Kennzahlen wie Anzahl und Schwere von Compliance-Verstößen, Reaktionszeiten bei Audit-Anfragen und Qualität der regulatorischen Dokumentation.\n• ESG-Impact-Indikatoren: Entwickeln Sie eine Balance aus internen Prozessmetriken (z.B. CO₂-Reduktion in der eigenen Operation) und externen Wirkungsindikatoren (z.B. ESG-Performance des Kreditportfolios, Volumen nachhaltiger Finanzierungen).\n• Integrierte Risikoindikatoren: Etablieren Sie bereichsübergreifende Frühindikatoren, die potenzielle Compliance-Risiken frühzeitig signalisieren, wie z.B. die Häufung von Beschwerden, ungewöhnliche Muster in Transaktionsanalysen oder Verzögerungen bei Compliance-Schulungen.\n\n🔄 Optimale Reporting-Strukturen und -Prozesse:\n• Multi-Layer-Reporting-Architektur: Implementieren Sie ein gestuftes Berichtssystem mit operativen Dashboards für das Tagesgeschäft, taktischen Reports für mittleres Management und strategischen Zusammenfassungen für den Vorstand.\n• Automatisierte Datenintegration: Reduzieren Sie manuelle Prozesse durch automatisierte Datenerfassung und -konsolidierung, um Aktualität, Genauigkeit und Effizienz der Berichterstattung zu verbessern.\n• Kontextbezogene Visualisierung: Stellen Sie KPIs nicht isoliert dar, sondern in ihrem strategischen Kontext mit relevanten Benchmarks, Trends, Zielvorgaben und kausalen Zusammenhängen.\n• Adaptive Governance: Etablieren Sie regelmäßige Überprüfungs- und Anpassungsprozesse für Ihr KPI-Framework, um auf regulatorische Änderungen, neue Geschäftsprioritäten und emergente Risiken reagieren zu können."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ EBA Governance, Outsourcing & ESG-Vorgaben C-Level FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
