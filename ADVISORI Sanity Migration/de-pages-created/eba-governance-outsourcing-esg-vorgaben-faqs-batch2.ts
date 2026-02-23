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
    console.log('Updating EBA Governance, Outsourcing & ESG-Vorgaben page with C-Level FAQs batch 2...')
    
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
        _key: generateKey('faq', 5),
        question: "Wie können wir als Finanzinstitut die zahlreichen und teilweise überlappenden Governance-Anforderungen verschiedener EBA-Richtlinien effizient und kohärent umsetzen?",
        answer: "Die Vielzahl teilweise überlappender Governance-Anforderungen in verschiedenen EBA-Richtlinien stellt eine signifikante Komplexitätsherausforderung dar. Ein strategischer, integrierter Implementierungsansatz kann jedoch nicht nur regulatorische Redundanzen eliminieren, sondern auch operative Effizienzgewinne und verbesserte Governance-Effektivität erzielen.\n\n🔄 Strategische Integration von Governance-Anforderungen:\n• Regulatory Mapping: Erstellen Sie eine umfassende Kartierung aller Governance-Anforderungen aus den verschiedenen EBA-Richtlinien, um Überschneidungen, Widersprüche und Synergien zu identifizieren.\n• Harmonisierte Governance-Architektur: Entwickeln Sie ein übergreifendes Governance-Framework, das die Essenz aller regulatorischen Anforderungen abdeckt und gleichzeitig Ihre spezifischen geschäftlichen Gegebenheiten berücksichtigt.\n• Modularer Aufbau: Strukturieren Sie Ihre Governance-Implementation modular, sodass spezifische Komponenten bei regulatorischen Änderungen angepasst werden können, ohne das Gesamtsystem zu destabilisieren.\n• Integrierte Dokumentationsstrategie: Implementieren Sie ein zentrales Repository für Governance-Dokumentation, das eine einheitliche Darstellung für verschiedene regulatorische Zwecke ermöglicht und Mehrfachdokumentation vermeidet.\n\n🛠️ Praktische Implementierungsstrategien:\n• Zentralisierte Governance-Steuerung: Etablieren Sie ein übergreifendes Governance-Competence-Center, das die Integration verschiedener regulatorischer Anforderungen koordiniert und konsistente Standards sicherstellt.\n• Prozessbasierte Implementation: Orientieren Sie die Umsetzung an Ihren Kerngeschäftsprozessen statt an einzelnen Regularien, um eine natürlichere Integration in Ihre Betriebsabläufe zu erreichen.\n• Technologische Unterstützung: Nutzen Sie Governance-Risk-Compliance (GRC) Plattformen, die eine integrierte Sicht auf verschiedene regulatorische Anforderungen ermöglichen und automatisierte Kontrollen unterstützen.\n• Regulatorischer Dialog: Etablieren Sie einen proaktiven Dialog mit Aufsichtsbehörden, um Interpretationen zu klären und pragmatische Implementierungsansätze abzustimmen, besonders bei scheinbar widersprüchlichen Anforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche konkreten Maßnahmen sollten wir ergreifen, um die Klimarisiken gemäß den EBA-ESG-Vorgaben effektiv in unser Risikomanagement zu integrieren?",
        answer: "Die Integration von Klimarisiken in das Risikomanagement erfordert eine fundamentale Erweiterung traditioneller Risikomodelle und -prozesse. Die EBA-Vorgaben markieren einen Paradigmenwechsel, bei dem Klimarisiken nicht als isolierte Kategorie, sondern als Risikotreiber betrachtet werden, der etablierte Risikokategorien wie Kredit-, Markt- und operationelle Risiken durchdringt und transformiert.\n\n🌡️ Strategische Integrationsmaßnahmen für Klimarisiken:\n• Klimarisikogovernance: Etablieren Sie klare Verantwortlichkeiten für Klimarisiken auf Vorstands- und Managementebene mit expliziten Mandaten und Ressourcenzuweisungen für die verschiedenen Aspekte des Klimarisikomanagements.\n• Erweiterte Risikoidentifikation: Entwickeln Sie systematische Prozesse zur Identifikation physischer Risiken (z.B. Extremwetterereignisse, langfristige Klimaveränderungen) und Transitionsrisiken (z.B. regulatorische Änderungen, Technologiewandel, Marktverschiebungen) in Ihrem Geschäftsmodell und Portfolio.\n• Szenariobasierte Risikobewertung: Implementieren Sie klimabezogene Stresstest-Szenarien mit verschiedenen Zeithorizonten (kurz-, mittel- und langfristig) und Erwärmungspfaden, die sowohl ordnungsgemäße als auch disruptive Transitionen abbilden.\n• Datenstrategie für Klimarisiken: Entwickeln Sie eine umfassende Strategie zur Erhebung, Validierung und Integration klimabezogener Daten, die interne und externe Datenquellen kombiniert und Datenlücken systematisch adressiert.\n\n📊 Operative Implementierungsschritte:\n• Integration in bestehende Risikomodelle: Erweitern Sie Ihre Kreditrisikomodelle um klimabezogene Faktoren wie sektorspezifische Transitionsrisiken und standortbezogene physische Risiken mit entsprechender Granularität und Zukunftsorientierung.\n• Portfolioanalyse und -steuerung: Führen Sie detaillierte Klimavulnerabilitätsanalysen auf Portfolioebene durch und entwickeln Sie Steuerungsinstrumente wie sektorale Limits oder klimabezogene Kreditvergaberichtlinien.\n• Klimabezogene Kapitalplanung: Integrieren Sie Klimarisiken in Ihre ICAAP-Prozesse mit spezifischen Risikotoleranzrahmen und potenziellen Kapitalzuschlägen für besonders exponierte Portfoliobereiche.\n• Klimarisikoreporting: Etablieren Sie ein umfassendes internes und externes Reporting zu Klimarisiken, das sowohl regulatorische Anforderungen erfüllt als auch geschäftsrelevante Steuerungsinformationen liefert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie können wir ein effektives Outsourcing-Risikomanagement gemäß den EBA-Richtlinien implementieren, ohne Innovation und Agilität zu behindern?",
        answer: "Die EBA-Outsourcing-Richtlinien stellen hohe Anforderungen an das Risikomanagement, die bei unreflektierter Implementierung zu bürokratischen Hürden für Innovation und Agilität werden können. Eine strategisch durchdachte Umsetzung kann jedoch Compliance mit betrieblicher Effizienz und Innovationsfähigkeit in Einklang bringen.\n\n🔍 Strategische Gestaltung des Outsourcing-Risikomanagements:\n• Risikoorientierte Differenzierung: Entwickeln Sie ein abgestuftes Steuerungsmodell, das die Intensität der Kontrollen an die Kritikalität und das Risikoprofil des jeweiligen Outsourcing-Arrangements anpasst.\n• Frühzeitige Risikointegration: Verankern Sie Risiko- und Compliance-Überlegungen bereits in der Konzeptionsphase neuer Outsourcing-Vorhaben, um nachträgliche Korrekturen zu vermeiden und Time-to-Market zu optimieren.\n• Agile Governance-Modelle: Implementieren Sie flexible Governance-Strukturen mit klaren Eskalationswegen und Entscheidungsbefugnissen, die schnelle Anpassungen an veränderte Geschäftsanforderungen ermöglichen.\n• Innovative Kontrollansätze: Nutzen Sie fortschrittliche Technologien wie API-basiertes Echtzeitmonitoring oder KI-gestützte Risikofrüherkennung, um manuelle Kontrollen zu reduzieren und gleichzeitig die Überwachungsqualität zu verbessern.\n\n🚀 Praktische Enabler für Agilität und Innovation:\n• Standardisierte Risikobewertungen: Entwickeln Sie schlanke, aber robuste Standardverfahren für die Risikobewertung verschiedener Outsourcing-Arten, die Konsistenz sicherstellen und gleichzeitig Durchlaufzeiten minimieren.\n• Modulare Vertragsbausteine: Erstellen Sie eine Bibliothek vorgenehmigter, regulatorisch konformer Vertragsbausteine, die flexibel kombiniert werden können, um individuelle Outsourcing-Vereinbarungen zu gestalten.\n• Kollaborative Compliance-Plattformen: Implementieren Sie digitale Plattformen, die eine effiziente Zusammenarbeit mit Dienstleistern bei Risikoassessments, Dokumentation und kontinuierlichem Monitoring ermöglichen.\n• Inkrementelle Implementierung: Wählen Sie einen phasenweisen Ansatz für die Einführung neuer Kontrollen, der mit schnell umsetzbaren Maßnahmen beginnt und komplexere Elemente nach initialen Erfahrungen integriert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie kann unser Finanzinstitut die Wechselwirkungen zwischen den EBA-Vorgaben zu Governance, Outsourcing und ESG strategisch nutzen, um Synergien zu schaffen und Compliance-Kosten zu optimieren?",
        answer: "Die EBA-Vorgaben zu Governance, Outsourcing und ESG erscheinen auf den ersten Blick als separate regulatorische Komplexe, weisen jedoch signifikante konzeptionelle und operative Überschneidungen auf. Ein strategischer, integrierter Implementierungsansatz kann erhebliche Synergien erschließen, Redundanzen vermeiden und die Gesamteffektivität Ihres Compliance-Frameworks steigern.\n\n🔄 Strategische Integrationspotenziale:\n• Gemeinsame Governance-Prinzipien: Identifizieren Sie die übergreifenden Governance-Grundsätze, die allen drei Bereichen zugrunde liegen – wie klare Verantwortlichkeiten, transparente Entscheidungsprozesse und wirksame Kontrollen – und etablieren Sie ein einheitliches Basisframework.\n• Konsolidierte Risikobewertungsansätze: Entwickeln Sie eine integrierte Methodik zur Bewertung von Governance-, Outsourcing- und ESG-Risiken, die gemeinsame Risikofaktoren erfasst und konsistente Bewertungsmaßstäbe anwendet.\n• Harmonisierte Berichterstattung: Schaffen Sie ein kohärentes Reporting-Framework, das die verschiedenen regulatorischen Anforderungen in einer konsistenten Struktur zusammenführt und Mehrfachberichterstattung vermeidet.\n• Integrierte Kontrollen: Identifizieren Sie Kontrollen, die mehrere regulatorische Anforderungen gleichzeitig adressieren können, und implementieren Sie diese als Teil eines ganzheitlichen Kontrollsystems.\n\n🛠️ Praktische Implementierungssynergien:\n• Datenintegration: Etablieren Sie eine einheitliche Datenbasis für Governance-, Outsourcing- und ESG-Informationen, die Datenredundanzen minimiert und eine konsistente Entscheidungsgrundlage schafft.\n• Gemeinsame Technologieplattform: Implementieren Sie eine integrierte GRC-Plattform (Governance, Risk & Compliance), die alle drei Bereiche unterstützt und eine konsolidierte Sicht auf Risiken, Kontrollen und Compliance-Status ermöglicht.\n• Koordinierte Schulungsprogramme: Entwickeln Sie bereichsübergreifende Schulungsmodule, die die Zusammenhänge zwischen Governance, Outsourcing und ESG vermitteln und ein ganzheitliches Verständnis fördern.\n• Integrierte Third-Party-Due-Diligence: Konsolidieren Sie die Bewertung von Dienstleistern und Lieferanten in Bezug auf Governance-Standards, Outsourcing-Risiken und ESG-Faktoren in einem einheitlichen Due-Diligence-Prozess."
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
    console.log('✅ EBA Governance, Outsourcing & ESG-Vorgaben C-Level FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
