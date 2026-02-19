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
    console.log('Updating MaRisk Überwachung & Reporting page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'marisk-ueberwachung-reporting' })
    
    if (!existingDoc) {
      throw new Error('Document "marisk-ueberwachung-reporting" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche Herausforderungen stellen sich bei der Überwachung und dem Reporting von Outsourcing-Aktivitäten im MaRisk-Kontext?",
        answer: "Die Überwachung und das Reporting von Auslagerungen stellt im MaRisk-Kontext besondere Herausforderungen dar, da die Verantwortung für die Compliance trotz Auslagerung beim Institut verbleibt. Die Kombination aus externen Dienstleistern, komplexen Serviceketten und begrenzten direkten Kontrollmöglichkeiten erfordert spezifische Monitoring- und Reporting-Ansätze.\n\n🔗 Kernherausforderungen im Outsourcing-Monitoring:\n• Informationsasymmetrien: Überwindung der natürlichen Informationslücken zwischen Institut und Dienstleister bei gleichzeitiger Sicherstellung eines transparenten Einblicks in ausgelagerte Prozesse und deren Compliance-Status.\n• Komplexität von Auslagerungsketten: Überwachung mehrstufiger Auslagerungen (Sub-Outsourcing), bei denen die Kontrolle und Transparenz mit jeder zusätzlichen Stufe exponentiell abnimmt.\n• Unterschiedliche Standards und Kulturen: Harmonisierung abweichender Compliance-Verständnisse und -Praktiken zwischen Institut und verschiedenen Dienstleistern, besonders bei internationalen Auslagerungen.\n• Datenintegration und -konsistenz: Zusammenführung heterogener Daten und Berichte von verschiedenen Dienstleistern in ein kohärentes, aussagekräftiges Gesamtbild für interne Steuerungszwecke und regulatorische Anforderungen.\n\n📋 Effektive Überwachungs- und Reporting-Strategien:\n• Strukturierte SLA- und KPI-Frameworks: Implementierung detaillierter Service Level Agreements mit klar definierten, messbaren Compliance-KPIs und Schwellenwerten, die eine objektive Überwachung ermöglichen.\n• Mehrstufige Kontrollarchitektur: Etablierung eines abgestuften Überwachungssystems mit routinemäßigen Selbstauskünften der Dienstleister, stichprobenartigen Kontrollen und tiefergehenden periodischen Prüfungen vor Ort.\n• Integrierte Dienstleister-Scorecards: Entwicklung ganzheitlicher Bewertungssysteme, die Compliance-Aspekte mit operativer Leistung und Risikoindikatoren verknüpfen und ein Gesamtbild der Dienstleisterqualität vermitteln.\n• Kollaborative Compliance-Plattformen: Nutzung digitaler Plattformen für den strukturierten Informationsaustausch zwischen Institut und Dienstleistern, die Echtzeit-Monitoring, automatisierte Benachrichtigungen und gemeinsame Maßnahmenverfolgung ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Rolle spielen Eskalationsmechanismen in einem effektiven MaRisk-Überwachungs- und Reportingsystem?",
        answer: "Eskalationsmechanismen sind kritische Komponenten eines effektiven MaRisk-Überwachungs- und Reportingsystems, da sie sicherstellen, dass Compliance-Abweichungen auf angemessener Ebene und zeitnah adressiert werden. Sie bilden das Bindeglied zwischen der reinen Identifikation von Compliance-Risiken und deren wirksamer Steuerung durch die richtigen Entscheidungsträger.\n\n⚠️ Kernfunktionen effektiver Eskalationsmechanismen:\n• Systematische Aufmerksamkeitssteuerung: Lenkung des Fokus der relevanten Entscheidungsträger auf die bedeutsamsten Compliance-Risiken durch differenzierte Eskalationsstufen und klare Priorisierung.\n• Verantwortlichkeitssicherung: Gewährleistung einer klaren Zuordnung von Handlungsverantwortung für identifizierte Compliance-Abweichungen und deren Behebung auf angemessener Hierarchieebene.\n• Zeitkritische Interventionsermöglichung: Beschleunigung der Entscheidungsfindung und Maßnahmenumsetzung bei kritischen Compliance-Verstößen durch definierte Eskalationswege und Reaktionszeiten.\n• Transparenz- und Dokumentationserhöhung: Schaffung eines nachvollziehbaren Audit-Trails für den Umgang mit Compliance-Abweichungen als Nachweis eines aktiven Risikomanagements gegenüber Aufsichtsbehörden.\n\n🔄 Gestaltungsprinzipien für wirkungsvolle Eskalationsprozesse:\n• Mehrdimensionale Kritikalitätsbewertung: Berücksichtigung verschiedener Faktoren bei der Eskalationsentscheidung, wie Schweregrad der Abweichung, betroffene Geschäftsbereiche, potenzielle finanzielle und regulatorische Auswirkungen sowie Wiederholungsmuster.\n• Abgestufte Eskalationsebenen: Implementierung einer gestaffelten Eskalationsstruktur mit klar definierten Triggerpunkten und Zuständigkeiten – von operativen Teams über Bereichsleiter und Compliance-Funktionen bis hin zu Vorstand und Aufsichtsrat.\n• Zeitliche Dynamik: Integration zeitlicher Komponenten, die eine automatische Höherstufung von ungelösten Problemen nach definierten Zeiträumen auslösen und die Dringlichkeit mit zunehmender Dauer erhöhen.\n• Feedback-Loops und Eskalationsmonitoring: Etablierung von Prozessen zur Überwachung der Eskalationseffektivität sowie zur kontinuierlichen Verbesserung der Eskalationskriterien und -wege basierend auf praktischen Erfahrungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können Finanzinstitute die Effizienz ihrer MaRisk-Überwachungs- und Reporting-Prozesse steigern, ohne die Compliance-Qualität zu beeinträchtigen?",
        answer: "Die Steigerung der Effizienz von MaRisk-Überwachungs- und Reporting-Prozessen ohne Beeinträchtigung der Compliance-Qualität ist eine zentrale Herausforderung für Finanzinstitute. Es geht darum, den regulatorischen Anforderungen vollumfänglich gerecht zu werden und gleichzeitig den Ressourceneinsatz zu optimieren, um Wettbewerbsvorteile zu erzielen und die operative Belastung der Organisation zu reduzieren.\n\n⚡ Strategische Effizienzsteigerungsansätze:\n• Risikobasierte Priorisierung: Implementierung eines differenzierten Überwachungsansatzes, der Ressourcen und Überwachungsintensität nach dem tatsächlichen Risikopotenzial verschiedener MaRisk-Anforderungen allokiert und Niedrigrisikobereiche mit geringerem Aufwand monitort.\n• End-to-End-Prozessoptimierung: Identifikation und Beseitigung von Redundanzen, Medienbrüchen und Doppelerfassungen entlang der gesamten Überwachungs- und Reporting-Wertschöpfungskette durch Prozessanalyse und -redesign.\n• Data Integration & Single Source of Truth: Aufbau einer zentralen Datenbasis für alle Compliance-relevanten Informationen, die verschiedene Reporting-Anforderungen (intern, extern, MaRisk, CRR, etc.) aus einer konsistenten Quelle bedienen kann.\n• Standardisierung und Modularisierung: Entwicklung wiederverwendbarer Bausteine und Templates für Kontrollen, Berichte und Analysen, die institutsübergreifend einheitlich eingesetzt werden können.\n\n🔧 Praktische Implementierungsmaßnahmen:\n• Prozessautomatisierung und Workflow-Management: Einführung automatisierter Workflows für routinemäßige Compliance-Aktivitäten wie Datensammlung, Validierung, Eskalation und Berichterstellung, um manuelle Eingriffe auf Ausnahmen zu beschränken.\n• Intelligente Datenvalidierung: Implementation von Rule Engines und KI-gestützten Validierungsroutinen, die Datenqualitätsprobleme automatisch erkennen und nur relevante Ausnahmen zur manuellen Prüfung weiterleiten.\n• Self-Service Reporting und Dashboards: Bereitstellung intuitiver Self-Service-Analysewerkzeuge für Fachbereiche und Management, die ad-hoc Auswertungen ohne Unterstützung spezialisierter Reporting-Teams ermöglichen.\n• Kontinuierliches Prozessmonitoring: Etablierung von Meta-KPIs zur Messung der Effizienz der Compliance-Prozesse selbst (z.B. Durchlaufzeiten, Kosten pro Kontrolle, Automatisierungsgrad) als Basis für iterative Optimierungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie sollte ein MaRisk-Überwachungs- und Reportingsystem gestaltet sein, um auch für kleinere und mittlere Institute praktikabel und verhältnismäßig zu sein?",
        answer: "Ein MaRisk-Überwachungs- und Reportingsystem für kleinere und mittlere Institute muss dem Grundsatz der Verhältnismäßigkeit folgen und gleichzeitig regulatorische Anforderungen vollständig erfüllen. Die besondere Herausforderung liegt darin, mit begrenzten Ressourcen und oft ohne spezialisierte Compliance-Abteilungen ein wirksames System zu etablieren, das die Komplexität reduziert, ohne an Wirksamkeit zu verlieren.\n\n🏦 Verhältnismäßige Gestaltungsprinzipien:\n• Fokussierte Risikoanalyse: Identifikation der für das spezifische Geschäftsmodell des Instituts relevantesten MaRisk-Anforderungen, um eine gezielte Ressourcenallokation auf die wesentlichen Risikobereiche zu ermöglichen.\n• Skalierbare Kontrollarchitektur: Implementierung einer gestuften Kontrollintensität, die für Hochrisikobereiche umfassendere Kontrollen vorsieht, während für Bereiche mit geringerem Risiko vereinfachte Überwachungsmechanismen ausreichend sind.\n• Integration in bestehende Prozesse: Verankerung von Compliance-Kontrollen und -Monitoringaktivitäten in bereits existierende betriebliche Abläufe, statt Schaffung separater Compliance-Prozesse, um Doppelarbeit zu vermeiden.\n• Pragmatische Dokumentationsanforderungen: Festlegung angemessener Dokumentationsstandards, die die wesentlichen Informationen erfassen, ohne unnötigen Administrationsaufwand zu erzeugen.\n\n🛠️ Praktische Implementierungsansätze für kleinere Institute:\n• Multifunktionale Rollenkonzepte: Entwicklung integrierter Verantwortlichkeiten, bei denen einzelne Mitarbeiter mehrere Compliance-Funktionen abdecken können, sofern keine kritischen Interessenkonflikte entstehen.\n• Shared Services und Kooperationsmodelle: Nutzung von Verbundlösungen, gemeinsamen Serviceplattformen oder externen Dienstleistern für spezialisierte Compliance-Aufgaben, um Skaleneffekte zu erzielen.\n• Low-Code-/No-Code-Technologielösungen: Einsatz benutzerfreundlicher Technologien, die es auch IT-Nicht-Spezialisten ermöglichen, Monitoring-Prozesse zu digitalisieren und zu automatisieren ohne umfangreiche IT-Projektbudgets.\n• Standardisierte Berichtsvorlagen und -zyklen: Verwendung vorkonfigurierter, aufsichtskonformer Reporting-Templates mit angemessenen Berichtsfrequenzen, die den administrativen Aufwand minimieren und dennoch alle regulatorischen Anforderungen erfüllen."
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
