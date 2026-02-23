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
    console.log('Updating CRR/CRD page with FAQs batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'crr-crd' })
    
    if (!existingDoc) {
      throw new Error('Document "crr-crd" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie adressiert ADVISORI die spezifischen Herausforderungen im Bereich operationelles Risiko unter den CRR/CRD-Anforderungen?",
        answer: "Die Anforderungen im Bereich operationelles Risiko haben sich mit der Weiterentwicklung der CRR/CRD signifikant erweitert und verfeinert. Die Einführung des neuen standardisierten Ansatzes für operationelle Risiken (SMA) und die verstärkte Fokussierung auf Cyber- und Technologierisiken erfordern eine grundlegende Neuausrichtung des operationellen Risikomanagements. ADVISORI unterstützt Finanzinstitute mit einem umfassenden Ansatz zur Adressierung dieser komplexen Herausforderungen.\n\n🧩 Kernelemente eines modernen operationellen Risikomanagements:\n• Integrierte Risikotaxonomie: Entwicklung einer umfassenden, strukturierten Klassifikation operationeller Risiken, die traditionelle und emergente Risikokategorien (wie Cyber-, Conduct-, Compliance- und Outsourcing-Risiken) in einen kohärenten Rahmen integriert.\n• Datengetriebene Bewertung: Implementierung fortschrittlicher Methoden zur Identifikation, Bewertung und Quantifizierung operationeller Risiken, die sowohl historische Verlustdaten als auch zukunftsgerichtete Szenarioanalysen kombinieren.\n• Integriertes Kontrollumfeld: Gestaltung eines effizienten, risikobasierten Kontrollrahmens, der operative Kontrollen, Management-Kontrollen und unabhängige Überwachungsfunktionen optimal miteinander verzahnt.\n• Resilienz-orientierte Steuerung: Übergang von einem reinen Verlustfokus zu einem ganzheitlichen Resilienz-Ansatz, der die Widerstandsfähigkeit gegenüber Störungen in den Mittelpunkt stellt.\n\n🛠️ ADVISORIs spezialisierter Implementierungsansatz:\n• SMA-Implementierung: Unterstützung bei der korrekten Implementierung des standardisierten Ansatzes für operationelle Risiken, einschließlich der Optimierung der Business Indicator Components und der Entwicklung robuster Prozesse zur Datenerhebung und -validierung.\n• Advanced Measurement-Strategien: Trotz der regulatorischen Abkehr von komplexen internen Modellen (AMA) Entwicklung fortschrittlicher interner Messmethoden für operationelle Risiken, die eine risikosensitivere Steuerung ermöglichen und über die regulatorischen Mindestanforderungen hinausgehen.\n• Technologiegestütztes Risikomanagement: Implementierung moderner GRC-Tools (Governance, Risk & Compliance) und Analytics-Lösungen, die Prozesse automatisieren, Transparenz erhöhen und ein proaktives Management operationeller Risiken ermöglichen.\n• Cyber- und IT-Risikointegration: Spezifische Unterstützung bei der Integration von Cyber- und IT-Risiken in das operationelle Risikomanagement, einschließlich der Entwicklung spezifischer Messansätze und Kontrollstrukturen für diese zunehmend kritischen Risikofelder."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können Banken das Verhältnis zwischen Risiko und Ertrag unter den CRR/CRD-Anforderungen optimieren und dabei eine nachhaltige Profitabilität sicherstellen?",
        answer: "Die CRR/CRD-Anforderungen haben die traditionellen Geschäftsmodelle und Ertragsquellen von Banken fundamental herausgefordert. In einem Umfeld steigender Kapitalanforderungen, strikterer Risikovorgaben und intensiven Wettbewerbs ist eine strategische Optimierung des Risiko-Ertrags-Verhältnisses entscheidend für nachhaltige Profitabilität. ADVISORI unterstützt Finanzinstitute mit einem integrierten Ansatz, der regulatorische Compliance mit geschäftlicher Performance in Einklang bringt.\n\n📊 Strategische Hebel für Risiko-Ertrags-Optimierung:\n• Risikoadjustierte Performancemessung: Implementierung fortschrittlicher RAPM-Methoden (Risk-Adjusted Performance Measurement) wie RAROC oder RORAC, die regulatorische Kapitalkosten explizit in die Rentabilitätsbetrachtung einbeziehen und eine risikoadjustierte Steuerung ermöglichen.\n• Portfoliooptimierung: Systematische Analyse und Neuausrichtung des Geschäftsportfolios auf Basis risikoadjustierter Erträge, mit besonderem Fokus auf die Reduktion von RWA-intensiven, aber ertragsarmen Engagements.\n• Strategisches Pricing: Entwicklung von Pricing-Frameworks, die regulatorische Kapital- und Liquiditätskosten transparent in die Produktkalkulation einbeziehen und eine risikoadäquate Bepreisung sicherstellen.\n• Bilanzstrukturoptimierung: Strategische Neugestaltung der Bilanzstruktur im Hinblick auf eine optimale Balance zwischen regulatorischen Anforderungen (Kapital, Leverage, Liquidität) und Ertragspotenzial.\n\n🔄 ADVISORIs ganzheitlicher Optimierungsansatz:\n• Geschäftsmodell-Assessment: Umfassende Analyse des bestehenden Geschäftsmodells unter Berücksichtigung regulatorischer Anforderungen, Marktentwicklungen und eigener Stärken, mit konkreten Empfehlungen für strategische Anpassungen.\n• Regulatorische Effizienzsteigerung: Identifikation und Umsetzung von Maßnahmen zur Optimierung regulatorischer Kennzahlen ohne Einschränkung des Geschäftspotenzials, durch strukturelle Anpassungen, verbesserte Datenqualität und fortschrittliche Risikomessmethoden.\n• Integrierte Performance-Steuerung: Entwicklung eines ganzheitlichen Steuerungsrahmens, der regulatorische KPIs mit finanziellen und strategischen Zielen verbindet und konsistente Anreize auf allen Organisationsebenen schafft.\n• Digitale Transformation: Beratung zur strategischen Nutzung neuer Technologien, um gleichzeitig regulatorische Kosten zu senken und neue Ertragsquellen zu erschließen, beispielsweise durch Prozessautomatisierung, datengetriebene Entscheidungsfindung und innovative digitale Geschäftsmodelle."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können Finanzinstitute regulatorisches Reporting unter CRR/CRD effizienter gestalten und automatisieren?",
        answer: "Das regulatorische Reporting unter CRR/CRD hat sich zu einem hochkomplexen, ressourcenintensiven Prozess entwickelt, der Finanzinstitute vor erhebliche operative Herausforderungen stellt. Die kontinuierlich steigenden Anforderungen an Granularität, Frequenz und Qualität der Meldewesen-Daten erfordern eine grundlegende Neugestaltung und weitgehende Automatisierung der zugrunde liegenden Prozesse und Systeme. ADVISORI unterstützt Finanzinstitute bei der Transformation ihres regulatorischen Reportings zu einem effizienten, zukunftssicheren Funktionsbereich.\n\n🔄 Schlüsselelemente eines optimierten Reporting-Frameworks:\n• End-to-End-Prozessintegration: Gestaltung nahtlos integrierter Prozesse von der Datenerfassung über Berechnungen bis zur Berichterstellung und Einreichung, mit klaren Verantwortlichkeiten und Kontrollpunkten entlang der gesamten Prozesskette.\n• Daten-Governance und -Qualität: Implementierung robuster Governance-Strukturen und Qualitätssicherungsmechanismen, die die Korrektheit, Konsistenz und Nachvollziehbarkeit aller Reportingdaten gewährleisten.\n• Granulare Datenbasis: Aufbau einer einheitlichen, granularen Datenbasis für alle regulatorischen und internen Reporting-Anforderungen, die redundante Datenerfassungen vermeidet und eine konsistente \"Single Source of Truth\" etabliert.\n• Flexible Reporting-Architektur: Entwicklung einer modularen, anpassungsfähigen System- und Prozessarchitektur, die schnell auf regulatorische Änderungen reagieren kann und die kontinuierliche Integration neuer Anforderungen ermöglicht.\n\n🤖 ADVISORIs Ansatz zur Reporting-Automatisierung:\n• Prozessanalyse und -optimierung: Detaillierte Analyse bestehender Reporting-Prozesse, Identifikation von Ineffizienzen und Entwicklung optimierter Prozessdesigns mit maximaler Automatisierung und minimalen manuellen Schnittstellen.\n• Technologische Modernisierung: Beratung bei der Auswahl und Implementierung moderner Reporting-Lösungen und -Architekturen, von spezialisierten regulatorischen Reporting-Plattformen bis hin zu innovativen RegTech-Ansätzen wie RPA (Robotic Process Automation) und KI-gestützter Datenvalidierung.\n• Integrierte Datenmodellierung: Entwicklung konsistenter, regulatorisch konformer Datenmodelle und -taxonomien, die sowohl externe Reporting-Anforderungen als auch interne Steuerungsbedürfnisse erfüllen und eine einheitliche Datenbasis für alle Berichtszwecke schaffen.\n• Automatisierte Kontrollen und Validierungen: Implementation systematischer, weitgehend automatisierter Kontroll- und Validierungsmechanismen, die Datenqualität und Prozessstabilität sicherstellen und gleichzeitig den manuellen Prüfaufwand minimieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie unterscheiden sich die Anforderungen an signifikante (SI) und weniger signifikante Institute (LSI) unter CRR/CRD, und wie unterstützt ADVISORI bei der Implementierung proportionaler Ansätze?",
        answer: "Die differenzierte Behandlung von signifikanten Instituten (SI) und weniger signifikanten Instituten (LSI) im europäischen Bankenaufsichtssystem stellt eine zentrale Säule des Proportionalitätsprinzips dar. Während die grundlegenden CRR/CRD-Anforderungen für alle Institute gelten, bestehen erhebliche Unterschiede in der Aufsichtspraxis, der Detailtiefe regulatorischer Vorgaben und den Umsetzungsfristen. ADVISORI unterstützt beide Institutsgruppen mit maßgeschneiderten Ansätzen, die ihre spezifischen regulatorischen Anforderungen und Herausforderungen berücksichtigen.\n\n🔍 Wesentliche Unterschiede in den Anforderungen:\n• Aufsichtliche Zuständigkeit: SIs unterliegen der direkten Aufsicht durch die EZB im Rahmen des SSM, während LSIs primär von nationalen Aufsichtsbehörden beaufsichtigt werden, wobei die EZB eine übergeordnete Aufsichtsfunktion behält.\n• Methodische Tiefe: Die an SIs gestellten methodischen Anforderungen sind typischerweise detaillierter und anspruchsvoller, insbesondere in Bereichen wie ICAAP/ILAAP, Risikomanagement-Modellen und Stresstests.\n• Reporting-Umfang: SIs haben umfangreichere, granularere und häufigere Reportingpflichten, während LSIs von gewissen Erleichterungen profitieren können, insbesondere bei detaillierten Zusatzanforderungen.\n• Prüfungsintensität: SIs durchlaufen intensivere, häufigere und tiefergehende aufsichtliche Prüfungen, von OSIs über Deep Dives bis zu thematischen Prüfungen, während die Prüfung bei LSIs oftmals fokussierter und risikobasierter erfolgt.\n\n⚖️ ADVISORIs differenzierter Beratungsansatz:\n• SI-spezifische Expertise: Für signifikante Institute bieten wir tiefgreifende Expertise in der Erfüllung der anspruchsvollen EZB-Anforderungen, der Vorbereitung auf intensive Prüfungsprozesse und der strategischen Positionierung im SSM-Kontext.\n• LSI-optimierte Lösungen: Für weniger signifikante Institute entwickeln wir proportionale Implementierungsansätze, die regulatorische Anforderungen erfüllen, ohne überkomplexe Strukturen zu schaffen, und die begrenzten Ressourcen optimal einsetzen.\n• Proportionalitätsberatung: Unterstützung bei der gezielten Nutzung von Proportionalitätsspielräumen in der regulatorischen Implementierung, basierend auf einer detaillierten Analyse des individuellen Instituts- und Risikoprofils.\n• Evolutionärer Ansatz: Begleitung von wachsenden Instituten auf ihrem Weg von LSI zu SI oder innerhalb der LSI-Kategorie zu einer höheren Prioritätsstufe, mit Fokus auf die rechtzeitige, schrittweise Anpassung der Governance- und Compliance-Strukturen."
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
