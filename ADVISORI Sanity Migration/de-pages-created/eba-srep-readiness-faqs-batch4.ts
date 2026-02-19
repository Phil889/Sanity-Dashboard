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
    console.log('Updating EBA SREP Readiness page with FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eba-srep-readiness' })
    
    if (!existingDoc) {
      throw new Error('Document "eba-srep-readiness" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie sollten wir mit den Ergebnissen einer ungünstigen SREP-Bewertung umgehen, und welche Strategien empfiehlt ADVISORI für einen effektiven Remediation-Prozess?",
        answer: "Eine ungünstige SREP-Bewertung stellt zweifellos eine Herausforderung dar, bietet jedoch gleichzeitig eine wertvolle Chance zur grundlegenden Verbesserung von Governance, Risikomanagement und strategischer Ausrichtung. Der Schlüssel liegt in einem strukturierten, proaktiven Remediation-Ansatz, der über kurzfristige Compliance-Maßnahmen hinausgeht und nachhaltige Veränderungen bewirkt. ADVISORI unterstützt Sie bei der Transformation einer herausfordernden Situation in einen strategischen Wendepunkt.\n\n🔄 Leitprinzipien für einen erfolgreichen Remediation-Prozess:\n• Ganzheitliches Verständnis statt isolierter Betrachtung: Tiefgreifende Analyse der zugrundeliegenden Ursachen hinter den identifizierten Schwächen, statt nur auf die Symptome zu reagieren – oft liegen systemische Probleme in Governance, Prozessen oder Datenarchitektur zugrunde.\n• Strategische Priorisierung: Entwicklung einer risikoorientieren Roadmap, die kritische Findings mit hohem aufsichtlichen Fokus priorisiert, ohne langfristig wichtige strukturelle Verbesserungen zu vernachlässigen.\n• Nachhaltige Lösungsarchitektur: Gestaltung von Lösungen, die nicht nur kurzfristig die aufsichtlichen Anforderungen erfüllen, sondern langfristig zu einer verbesserten Steuerungsfähigkeit des Instituts beitragen.\n• Executive Commitment: Sicherstellung eines klaren Bekenntnisses der Führungsebene zum Remediation-Programm mit entsprechender Ressourcenallokation und persönlichem Engagement.\n• Transparente Kommunikation: Etablierung eines offenen, proaktiven Dialogs mit der Aufsicht über Fortschritte, Herausforderungen und Anpassungen im Remediation-Prozess.\n\n🛠️ ADVISORI's strukturierter Remediation-Ansatz:\n• Comprehensive Impact Assessment: Detaillierte Analyse der SREP-Ergebnisse und ihrer Auswirkungen auf Kapitalanforderungen, Liquiditätsplanung, Geschäftsmodell und Reputation mit klarer Quantifizierung der potenziellen Risiken.\n• Integriertes Remediation-Programm: Entwicklung eines kohärenten Programms, das alle Maßnahmen koordiniert, Abhängigkeiten berücksichtigt und konsistente Lösungen über verschiedene Bereiche hinweg sicherstellt.\n• Governance-Optimierung: Stärkung der Governance-Strukturen für den Remediation-Prozess selbst, mit klaren Verantwortlichkeiten, Entscheidungsprozessen und Eskalationswegen.\n• Milestone-basiertes Monitoring: Implementierung eines robusten Tracking-Systems mit klar definierten Meilensteinen, Fortschrittsindikatoren und regelmäßiger Berichterstattung an Vorstand und Aufsicht.\n• Nachhaltige Verankerung: Integration der Verbesserungen in reguläre Geschäftsprozesse und Governance-Strukturen, um sicherzustellen, dass die erzielten Fortschritte nicht nur temporäre Maßnahmen darstellen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können wir im Rahmen des SREP einen überzeugenden Business Plan entwickeln, der sowohl aufsichtsrechtliche Anforderungen erfüllt als auch unsere strategischen Geschäftsziele unterstützt?",
        answer: "Ein überzeugender Business Plan im SREP-Kontext muss die Balance zwischen regulatorischen Anforderungen und geschäftlichen Ambitionen meistern. Er sollte nicht nur die Rentabilität und Nachhaltigkeit des Geschäftsmodells belegen, sondern auch demonstrieren, dass Risiken angemessen berücksichtigt und gesteuert werden. ADVISORI unterstützt Sie bei der Entwicklung eines Business Plans, der sowohl die Aufsicht überzeugt als auch als wertvolles Steuerungsinstrument für Ihre strategische Entwicklung dient.\n\n📈 Erfolgsfaktoren für einen SREP-konformen Business Plan:\n• Strategische Klarheit und Konsistenz: Formulierung einer klaren, realistischen Geschäftsstrategie mit nachvollziehbarer Herleitung der strategischen Ziele und konsistenter Umsetzung in operativen Plänen und Kennzahlen.\n• Fundierte Markt- und Wettbewerbsanalyse: Detaillierte Analyse des Marktumfelds und der Wettbewerbsposition mit evidenzbasierter Begründung der eigenen Positionierung und Differenzierungsmerkmale.\n• Realistische Finanzprognosen: Entwicklung nachvollziehbarer, durch Annahmen und Sensitivitätsanalysen unterstützter Finanzprognosen, die auch adverse Szenarien berücksichtigen.\n• Integrierte Risikoperspektive: Systematische Identifikation und Bewertung aller strategischen, finanziellen und operationellen Risiken mit klaren Maßnahmen zu deren Steuerung und Begrenzung.\n• Operative Umsetzbarkeit: Darstellung der konkreten Umsetzungsschritte, Ressourcenerfordernisse und Verantwortlichkeiten, die die Realisierbarkeit des Plans belegen.\n\n🔍 ADVISORI's methodischer Ansatz zur Business Plan-Entwicklung:\n• Gap-Analyse der aktuellen Planungsprozesse: Bewertung Ihrer bestehenden strategischen und finanziellen Planungsprozesse gegen SREP-Anforderungen mit Identifikation kritischer Verbesserungspotenziale.\n• Integration von Top-down- und Bottom-up-Planung: Unterstützung bei der Entwicklung eines integrierten Planungsprozesses, der strategische Vorgaben mit operativer Umsetzbarkeit verbindet und Plausibilitätschecks auf allen Ebenen ermöglicht.\n• Entwicklung robuster Szenarien: Konzeption differenzierter Szenarien (Basis-, Aufwärts- und Abwärtsszenario), die verschiedene makroökonomische und branchenspezifische Entwicklungen berücksichtigen und deren Auswirkungen auf Geschäftsentwicklung und Risikoprofil transparent machen.\n• Erstellung einer überzeugenden Narrative: Formulierung einer kohärenten, evidenzbasierten Geschichte, die die strategische Logik, Wettbewerbsvorteile und Nachhaltigkeit Ihres Geschäftsmodells klar kommuniziert.\n• Validierung und Stresstest: Durchführung umfassender Plausibilitätsprüfungen und Stresstests, die die Robustheit des Business Plans unter verschiedenen Bedingungen belegen und kritische Abhängigkeiten identifizieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche spezifischen Herausforderungen stellt der SREP an kleinere und mittlere Institute, und wie unterstützt ADVISORI bei deren effizienter Bewältigung?",
        answer: "Kleinere und mittlere Institute stehen im SREP-Prozess vor besonderen Herausforderungen, die aus begrenzten Ressourcen, komplexen regulatorischen Anforderungen und der Notwendigkeit einer proportionalen Umsetzung resultieren. Trotz des Proportionalitätsprinzips bleibt die grundsätzliche Erwartung an eine solide Governance und ein effektives Risikomanagement bestehen. ADVISORI bietet maßgeschneiderte Lösungen, die die Besonderheiten mittlerer und kleinerer Institute berücksichtigen und eine effiziente SREP-Vorbereitung ermöglichen.\n\n⚖️ Spezifische Herausforderungen für kleinere und mittlere Institute:\n• Ressourcenknappheit bei steigender Komplexität: Notwendigkeit, mit begrenztem Personal und Budget umfangreiche regulatorische Anforderungen zu erfüllen, die ursprünglich für Großbanken konzipiert wurden.\n• Spezifisches Fachwissen: Schwierigkeit, spezialisiertes Knowhow in allen relevanten Bereichen (z.B. Modellierung, IT-Risiken, ESG) aufzubauen und zu halten, insbesondere bei neuen oder sich schnell entwickelnden Themen.\n• Proportionale Umsetzung ohne Abstriche: Herausforderung, die richtige Balance zu finden zwischen vereinfachter Umsetzung und der Erfüllung grundlegender aufsichtlicher Erwartungen an Governance und Risikomanagement.\n• Dokumentationsanforderungen: Notwendigkeit einer angemessenen, aber nicht überbordenden Dokumentation, die die tatsächlichen Prozesse und Kontrollen widerspiegelt, ohne zu hohen administrativen Aufwand zu verursachen.\n• Prozessintegration: Schwierigkeit, regulatorische Anforderungen in bestehende Prozesse zu integrieren, statt separate Compliance-Prozesse zu schaffen, die parallel zum Tagesgeschäft laufen.\n\n🔧 ADVISORI's effizienter Unterstützungsansatz für kleinere und mittlere Institute:\n• Pragmatische Gap-Analyse: Fokussierte Bewertung Ihrer aktuellen Prozesse gegen SREP-Anforderungen mit Konzentration auf die wirklich wesentlichen Aspekte und klarer Priorisierung notwendiger Maßnahmen.\n• Standardisierte Toolkit-Lösungen: Bereitstellung vorkonfigurierter Templates, Methoden und Prozessbeschreibungen, die mit minimalem Anpassungsaufwand implementiert werden können und dennoch die spezifischen Anforderungen Ihres Instituts berücksichtigen.\n• Modularer Implementierungsansatz: Entwicklung eines stufenweisen Umsetzungsplans, der die kritischsten Bereiche zuerst adressiert und eine schrittweise Verbesserung ermöglicht, ohne alle Ressourcen gleichzeitig zu binden.\n• Wissenstransfer und Befähigung: Gezielte Schulung Ihrer Mitarbeiter, um interne Kapazitäten aufzubauen und die Abhängigkeit von externen Beratern langfristig zu reduzieren.\n• Netzwerkbasierte Expertise: Bei Bedarf Zugang zu spezialisierten Experten für spezifische Themenbereiche, ohne diese dauerhaft vorhalten zu müssen, ergänzt durch Best-Practice-Sharing aus unserem breiten Erfahrungsschatz mit vergleichbaren Instituten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können wir die SREP-Vorbereitung nutzen, um unsere ESG-Risikomanagement-Kapazitäten zu stärken und die steigenden aufsichtlichen Erwartungen in diesem Bereich zu erfüllen?",
        answer: "Die Integration von ESG-Risiken (Environmental, Social, Governance) in den SREP-Prozess ist eine der bedeutendsten Entwicklungen in der aufsichtlichen Praxis. ESG-Faktoren werden zunehmend als materielle Risikotreiber anerkannt, die das Geschäftsmodell, die Kapitalplanung und das Risikoprofil von Finanzinstituten wesentlich beeinflussen können. ADVISORI unterstützt Sie dabei, die SREP-Vorbereitung als strategischen Hebel zur Stärkung Ihrer ESG-Risikomanagement-Kapazitäten zu nutzen und gleichzeitig regulatorische Anforderungen zu erfüllen.\n\n🌱 Zentrale Dimensionen von ESG im SREP-Kontext:\n• Strategische Integration: Berücksichtigung von ESG-Faktoren in der Geschäftsstrategie und Geschäftsmodellanalyse, einschließlich der Identifikation von Übergangsrisiken und -chancen in verschiedenen Klimaszenarien.\n• Governance und Risikokultur: Etablierung klarer Verantwortlichkeiten für ESG-Risiken auf allen Ebenen, von der Vorstandsebene bis zu den operativen Einheiten, mit entsprechender Expertise und Bewusstsein.\n• Risikomanagement-Framework: Erweiterung bestehender Risikomanagement-Prozesse um ESG-spezifische Methoden zur Identifikation, Bewertung, Steuerung und Überwachung von Klima- und Umweltrisiken.\n• Daten und Reporting: Aufbau der notwendigen Dateninfrastruktur für die Messung und Berichterstattung von ESG-Risiken, sowohl für interne Steuerungszwecke als auch für regulatorische Anforderungen.\n• Stresstesting und Szenarioanalyse: Entwicklung von ESG-spezifischen Stress-Szenarien, die kurz-, mittel- und langfristige Auswirkungen von Klimarisiken auf das Geschäftsmodell und die Kapitalposition simulieren.\n\n🛠️ ADVISORI's integrierter ESG-SREP-Ansatz:\n• ESG-Reifegradanalyse: Umfassende Bewertung Ihrer aktuellen ESG-Risikomanagement-Kapazitäten gegen aktuelle und absehbare SREP-Anforderungen mit klarer Identifikation von Handlungsfeldern.\n• Integration in ICAAP/ILAAP: Unterstützung bei der systematischen Einbindung von ESG-Risiken in Ihre internen Kapital- und Liquiditätsadäquanzprozesse, einschließlich der Entwicklung geeigneter Methoden zur Quantifizierung dieser Risiken.\n• ESG-Datenmanagement-Strategie: Konzeption einer zukunftsfähigen Datenarchitektur für ESG-Risiken, die sowohl interne Steuerungsbedürfnisse als auch regulatorische Berichtsanforderungen effizient erfüllt.\n• Entwicklung von ESG-Szenarien: Unterstützung bei der Erstellung plausibler, wissenschaftsbasierter Klimaszenarien, die physische Risiken und Transitionsrisiken in verschiedenen Zeithorizonten abbilden.\n• Capacity Building und Training: Gezielte Schulung von Führungskräften und Mitarbeitern zu ESG-Risiken und deren Relevanz im SREP-Kontext, um ein gemeinsames Verständnis und die notwendigen Kompetenzen aufzubauen."
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
