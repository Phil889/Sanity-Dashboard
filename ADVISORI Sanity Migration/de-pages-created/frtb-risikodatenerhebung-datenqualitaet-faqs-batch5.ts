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
    console.log('Updating FRTB Risikodatenerhebung Datenqualität page with FAQs batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'frtb-risikodatenerhebung-datenqualitaet' })
    
    if (!existingDoc) {
      throw new Error('Document "frtb-risikodatenerhebung-datenqualitaet" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche Rolle spielen fortschrittliche Analysetechnologien und Machine Learning bei der Verbesserung von FRTB-Datenprozessen?",
        answer: "Fortschrittliche Analysetechnologien und Machine Learning (ML) bieten erhebliches Potenzial zur Optimierung von FRTB-Datenprozessen. Diese Technologien können nicht nur die Effizienz und Qualität der Datenprozesse verbessern, sondern auch tiefergehende Einblicke in Risikoprofile und Kapitalanforderungen ermöglichen.\n\n🧠 Transformative Einsatzbereiche für Advanced Analytics und ML:\n• Intelligente Datenqualitätssicherung: ML-Algorithmen können Anomalien, Ausreißer und Datenmuster erkennen, die mit traditionellen regelbasierten Ansätzen schwer zu identifizieren sind, und dabei kontinuierlich aus neuen Daten und Validierungsergebnissen lernen.\n• Predictive Data Completeness: Vorhersagemodelle können Datenlücken in Markt- und Risikodaten intelligent schließen, insbesondere für illiquide Instrumente und Stressperioden, mit präziseren Ergebnissen als konventionelle Interpolationsmethoden.\n• Automatisierte Risikofaktor-Klassifikation: ML-Techniken ermöglichen die automatische Kategorisierung und Hierarchisierung von Risikofaktoren basierend auf ihren statistischen Eigenschaften und Beziehungen, was die konsistente Anwendung regulatorischer Anforderungen unterstützt.\n• Natural Language Processing für regulatorische Texte: NLP-Technologien können regulatorische Dokumente analysieren, um Datenanforderungen automatisch zu extrahieren und in technische Spezifikationen zu übersetzen, was die Compliance-Implementierung beschleunigt.\n• Optimierte NMRF-Reduktion: Advanced Analytics ermöglichen die Identifikation optimaler Strategien zur Reduktion von Non-Modellable Risk Factors durch intelligente Proxy-Methoden und Datenergänzungen.\n\n🔧 ADVISORIs praxisorientierter Implementierungsansatz:\n• Use-Case-basierte ML-Strategie: Wir entwickeln eine pragmatische Roadmap für den Einsatz von ML in FRTB-Datenprozessen, die auf konkreten Anwendungsfällen mit messbarem Business Value basiert, statt technologiegetriebene Lösungen zu forcieren.\n• Erklärbares ML für regulatorische Akzeptanz: Implementation von Modellen mit hoher Transparenz und Nachvollziehbarkeit, die regulatorischen Anforderungen an Dokumentation und Erklärbarkeit entsprechen und Audit-Prozesse unterstützen.\n• Integration in bestehende Prozesse: Einbettung von ML-Komponenten in existierende Datenprozesse und Governance-Strukturen, um die Akzeptanz zu erhöhen und den Implementierungsaufwand zu reduzieren.\n• Hybrid-Ansatz mit menschlicher Expertise: Kombination von ML-Verfahren mit menschlichem Fachwissen in einem kollaborativen Mensch-Maschine-Ansatz, der die Stärken beider Komponenten nutzt und kritisches Denken fördert.\n• Kontinuierliches ML-Monitoring und -Validierung: Etablierung robuster Prozesse zur laufenden Überwachung und Validierung von ML-Modellen, um Concept Drift zu erkennen und die Modellqualität über Zeit zu sichern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können Banken die Kosten für Datenmanagement und -qualität unter FRTB optimieren und gleichzeitig regulatorische Anforderungen erfüllen?",
        answer: "Die Optimierung der Kosten für Datenmanagement und -qualität unter FRTB stellt eine zentrale Herausforderung dar. Ein strategischer Ansatz kann nicht nur die Compliance-Kosten senken, sondern auch langfristigen geschäftlichen Mehrwert schaffen, indem Risikodatenprozesse effizienter und effektiver gestaltet werden.\n\n💰 Strategische Hebel zur Kostenoptimierung:\n• Datenkonsolidierung und -rationalisierung: Identifikation und Eliminierung redundanter Datenquellen, -prozesse und -systeme, die sich historisch für verschiedene regulatorische und interne Zwecke entwickelt haben, reduziert direkte IT- und Prozesskosten.\n• Risikoorientierte Ressourcenallokation: Priorisierung von Datenqualitätsmaßnahmen basierend auf ihrem Einfluss auf Kapitalanforderungen und regulatorische Risiken, um Investitionen auf Bereiche mit dem höchsten Return-on-Investment zu konzentrieren.\n• Shared Services und zentrale Datenkompetenz: Etablierung zentraler Datenmanagement-Teams und -Services, die verschiedene FRTB-Anforderungen und Geschäftsbereiche bedienen, reduziert Doppelarbeit und fördert die Wiederverwendung von Daten und Prozessen.\n• Automatisierung manueller Datenprozesse: Identifikation und Automatisierung arbeitsintensiver, fehleranfälliger manueller Prozesse im Datenmanagement-Lebenszyklus, von der Datenerfassung bis zur Qualitätskontrolle und Berichterstattung.\n• Strategic Sourcing von Marktdaten: Entwicklung einer optimierten Strategie für die Beschaffung von Marktdaten, die externe Anbieter, interne Quellen und Daten-Pooling-Initiativen kosteneffizient kombiniert.\n\n⚖️ ADVISORIs Balance-Ansatz für Kostenoptimierung und Compliance:\n• Total Cost of Ownership Analysis: Wir führen eine umfassende TCO-Analyse durch, die sowohl direkte Implementierungskosten als auch langfristige Betriebskosten und Opportunitätskosten berücksichtigt, um fundierte Investitionsentscheidungen zu ermöglichen.\n• Compliance-Value-Matrix: Entwicklung eines Frameworks zur Bewertung von Datenmanagement-Maßnahmen anhand ihrer regulatorischen Notwendigkeit und ihres Business Values, um Bereiche zu identifizieren, in denen Kosteneinsparungen mit minimalem Compliance-Risiko möglich sind.\n• Multi-Use-Data-Strategie: Design von Datenprozessen und -architekturen, die nicht nur FRTB-Anforderungen erfüllen, sondern auch anderen regulatorischen Anforderungen (z.B. BCBS 239, IRRBB) und internen Geschäftsanforderungen dienen.\n• Stufenweise Implementation mit Value-Validierung: Umsetzung eines iterativen Implementierungsansatzes mit regelmäßiger Validierung des realisierten Geschäftswerts und Anpassung der Strategie basierend auf Erkenntnissen aus früheren Phasen.\n• Technology-Enablement mit ROI-Fokus: Gezielte Investitionen in Technologien, die nachweislich die Effizienz und Effektivität von Datenprozessen verbessern, mit klaren Mechanismen zur Messung und Validierung des Return on Investment."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie sollten Banken die Vendor-Selection und -Management für FRTB-Datenquellen strategisch gestalten?",
        answer: "Die strategische Gestaltung von Vendor-Selection und -Management für FRTB-Datenquellen ist ein kritischer Erfolgsfaktor, der erhebliche Auswirkungen auf Datenqualität, Compliance und Kosten hat. Eine durchdachte Vendor-Strategie kann nicht nur regulatorische Anforderungen erfüllen, sondern auch Wettbewerbsvorteile durch überlegene Datenabdeckung und -qualität schaffen.\n\n🔍 Strategische Dimensionen der FRTB-Vendor-Selection:\n• Abdeckungsbreite und -tiefe: Bewertung der Abdeckung von Assetklassen, Märkten und Risikofaktoren, insbesondere für exotische Instrumente und Emerging Markets, die oft besondere Herausforderungen bei der Datenbeschaffung darstellen.\n• Datenqualität und Validierungsstandards: Analyse der Qualitätssicherungsprozesse, Validierungsmethoden und Dokumentationsstandards des Vendors, die entscheidend für die regulatorische Anerkennung der Daten sind.\n• Real Price Observations (RPO) Methodik: Beurteilung der Methodik zur Erfassung und Validierung von RPOs, die für die Modellierbarkeit von Risikofaktoren und NMRF-Reduktion kritisch ist.\n• Historische Datenabdeckung und -konsistenz: Prüfung der Verfügbarkeit und Konsistenz historischer Zeitreihen, insbesondere für Stressperioden und lang zurückliegende Marktphasen.\n• Technische Integration und Datenlieferung: Bewertung der Integrationsoptionen, Lieferformate, -frequenzen und -mechanismen sowie deren Kompatibilität mit der bestehenden Datenarchitektur.\n\n🔄 ADVISORIs ganzheitlicher Vendor-Management-Ansatz:\n• Strategische Vendor-Portfolio-Optimierung: Wir entwickeln eine ausgewogene Multi-Vendor-Strategie, die primäre und sekundäre Datenquellen für verschiedene Assetklassen und Regionen definiert und Abhängigkeiten von einzelnen Anbietern reduziert.\n• Strukturierter Evaluierungsprozess: Implementation eines systematischen, mehrstufigen Auswahlprozesses mit klar definierten quantitativen und qualitativen Bewertungskriterien, die sowohl technische als auch geschäftliche Anforderungen abdecken.\n• Kollaboratives Vendor-Management-Office: Etablierung einer zentralen Koordinationsstelle für Daten-Vendor-Beziehungen, die abteilungsübergreifende Interessen vertritt und konsistente Standards für Vertragsgestaltung, SLAs und Qualitätsmonitoring sicherstellt.\n• Continuous Quality Monitoring: Entwicklung eines systematischen Prozesses zur kontinuierlichen Überwachung und Bewertung der Vendor-Datenqualität mit klaren KPIs, regelmäßigen Reviews und Eskalationswegen für Qualitätsprobleme.\n• Vendor Collaboration Model: Gestaltung eines kollaborativen Beziehungsmodells mit strategischen Datenanbietern, das über transaktionale Beziehungen hinausgeht und gemeinsame Innovationen, Feedback-Zyklen und Entwicklungspartnerschaften ermöglicht."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie unterstützt ADVISORI bei der Entwicklung einer langfristigen FRTB-Datenstrategie, die über die initiale Compliance hinausgeht?",
        answer: "Eine zukunftsorientierte FRTB-Datenstrategie geht weit über die initiale Compliance hinaus und positioniert Risikodaten als strategischen Asset für die Bank. Eine solche Strategie schafft nicht nur regulatorische Konformität, sondern bildet auch die Grundlage für langfristige Wettbewerbsvorteile durch überlegene Risikodatenkapazitäten.\n\n🔭 Kernelemente einer langfristigen FRTB-Datenstrategie:\n• Strategische Zielvision: Entwicklung einer klaren, langfristigen Vision für die Risikodatenlandschaft, die über punktuelle Compliance-Anforderungen hinausgeht und Risikodaten als Enabler für Geschäftsstrategie und Innovation positioniert.\n• Evolutionäre Architektur-Roadmap: Gestaltung eines mehrstufigen Entwicklungspfads für die Datenarchitektur, der kurzfristige Compliance-Anforderungen mit langfristigen strategischen Zielen verbindet und eine schrittweise Evolution ermöglicht.\n• Daten als Service-Modell: Transformation der Risikodatenfunktion von einem Compliance-getriebenen Kostenfaktor zu einem wertschöpfenden Service-Provider, der Geschäftsbereiche mit hochwertigen, konsistenten Risikodaten versorgt.\n• Innovation Pipeline: Etablierung eines strukturierten Prozesses zur kontinuierlichen Exploration und Evaluierung neuer Technologien, Methoden und Datenquellen, die Risikodatenprozesse verbessern können.\n• Skill Development Strategy: Entwicklung einer langfristigen Strategie zum Aufbau der erforderlichen Fähigkeiten und Kompetenzen im Bereich Risikodatenmanagement, die sowohl technische als auch geschäftliche Aspekte abdeckt.\n\n🌱 ADVISORIs nachhaltiger Strategieentwicklungsansatz:\n• Collaborative Strategy Development: Wir nutzen einen partizipativen Ansatz zur Strategieentwicklung, der alle relevanten Stakeholder einbezieht und verschiedene Perspektiven (Business, Risk, IT, Compliance) integriert, um eine breit getragene Strategie zu schaffen.\n• FRTB+ Szenario-Planung: Durchführung strukturierter Szenario-Analysen, die zukünftige regulatorische Entwicklungen, Technologietrends und Geschäftsstrategien berücksichtigen, um eine robuste, zukunftssichere Datenstrategie zu entwickeln.\n• Business Value Alignment: Systematische Verknüpfung von Dateninitiativen mit konkreten Geschäftszielen und -metriken, um sicherzustellen, dass Investitionen in die Dateninfrastruktur messbaren Mehrwert schaffen und strategische Prioritäten unterstützen.\n• Governance Evolution Model: Entwicklung eines evolutionären Governance-Modells, das mit der Reifung der Datenkapazitäten mitwächst und den Übergang von reaktiver Compliance zu proaktiver Wertschöpfung unterstützt.\n• Continuous Strategy Refinement: Etablierung eines kontinuierlichen Prozesses zur regelmäßigen Überprüfung und Anpassung der Datenstrategie basierend auf neuen Erkenntnissen, regulatorischen Änderungen und technologischen Entwicklungen."
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
    console.log('✅ FAQs batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
