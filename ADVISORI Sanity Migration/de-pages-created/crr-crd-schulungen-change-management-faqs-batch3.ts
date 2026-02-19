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
    console.log('Updating CRR/CRD Schulungen & Change Management page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'crr-crd-schulungen-change-management' })
    
    if (!existingDoc) {
      throw new Error('Document "crr-crd-schulungen-change-management" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können wir ein effektives Change Management für die kontinuierliche Anpassung an regulatorische Updates der CRR/CRD etablieren?",
        answer: "Die Etablierung eines effektiven Change Management-Systems für kontinuierliche regulatorische Anpassungen erfordert einen systematischen, proaktiven Ansatz, der über reaktive Compliance-Maßnahmen hinausgeht. Ein nachhaltiges regulatorisches Change Management integriert frühzeitige Erkennung, strategische Planung und agile Implementierung in einem robusten, institutionalisierten Framework.\n\n🔄 Architektur eines nachhaltigen regulatorischen Change Management-Systems:\n• Regulatory Radar etablieren: Implementieren Sie ein strukturiertes Früherkennungssystem mit definierten Verantwortlichkeiten für kontinuierliches Monitoring von Regulierungsentwicklungen aus verschiedenen Quellen (EBA, EZB, BaFin, EU-Kommission).\n• Impact Assessment-Methodik: Entwickeln Sie einen standardisierten Prozess zur strukturierten Bewertung neuer regulatorischer Anforderungen hinsichtlich geschäftlicher, operativer, technischer und kultureller Auswirkungen.\n• Change Portfolio Management: Etablieren Sie einen zentralisierten Überblick aller regulatorischen Veränderungsinitiativen mit klaren Priorisierungsmechanismen, Ressourcenzuordnung und Abhängigkeitsmanagement.\n• Governance-Framework: Implementieren Sie ein mehrstufiges Entscheidungsgremium mit klaren Eskalationswegen, das regulatorische Änderungen bewertet, priorisiert und deren Umsetzung überwacht.\n\n📋 Prozesselemente für effektive kontinuierliche Anpassung:\n• Regulatorische Änderungsklassifizierung: Kategorisieren Sie Änderungen nach Umfang, Komplexität und Dringlichkeit, um angemessene Ressourcen und Implementierungsansätze zuzuordnen.\n• Integrated Impact Chain Analysis: Analysieren Sie Kaskaden- und Folgeeffekte regulatorischer Änderungen über verschiedene Geschäftsbereiche, Prozesse und Systeme hinweg.\n• Change Readiness Assessment: Evaluieren Sie systematisch die Bereitschaft verschiedener Organisationsbereiche für spezifische regulatorische Änderungen und entwickeln Sie gezielte Vorbereitungsmaßnahmen.\n• Regulatory Release Management: Implementieren Sie einen formalisierten Prozess für die kontrollierte Einführung regulatorischer Änderungen mit definierten Meilensteinen, Qualitätskontrollen und Rollback-Plänen.\n\n🛠️ Organisatorische Enabler für Anpassungsfähigkeit:\n• Regulatory Change Office: Etablieren Sie eine zentrale Koordinationsstelle mit klarem Mandat, die als Orchestrator des gesamten regulatorischen Change Management-Prozesses fungiert.\n• Cross-funktionale Implementierungsteams: Bilden Sie dedizierte Teams mit Vertretern aus Compliance, Fachbereichen, IT und Operations für die integrierte Umsetzung regulatorischer Anforderungen.\n• Regulatory Knowledge Management: Entwickeln Sie ein zentrales Repository für regulatorisches Wissen, Interpretationen, Implementierungsleitfäden und Best Practices, zugänglich für alle relevanten Stakeholder.\n• Agile Regulatory Implementation: Adaptieren Sie agile Methoden speziell für regulatorische Projekte, um iterative Implementierung, kontinuierliches Feedback und schnelle Anpassungsfähigkeit zu ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können wir die Wirksamkeit unserer Change Management-Maßnahmen bei CRR/CRD-Implementierungen messen und kontinuierlich verbessern?",
        answer: "Die Messung und kontinuierliche Optimierung der Wirksamkeit von Change Management-Maßnahmen im Kontext regulatorischer Implementierungen erfordert ein systematisches, mehrdimensionales Evaluationsframework. Eine datengestützte Erfolgsmessung kombiniert quantitative Metriken mit qualitativen Insights und schafft einen selbstoptimierenden Verbesserungskreislauf.\n\n📊 Mehrdimensionales Messsystem für Change Management-Effektivität:\n• Adoptionsmetriken: Erfassen Sie die tatsächliche Anwendung neuer regulatorischer Prozesse und Tools durch betroffene Mitarbeiter mittels Nutzungsstatistiken, Prozesskonformitätsanalysen und strukturierten Beobachtungen.\n• Capability-Indikatoren: Evaluieren Sie die entwickelten Kompetenzen und das Verständnis der Mitarbeiter durch wissensbasierte Assessments, praxisorientierte Fallstudienbearbeitung und Selbsteinschätzungen zu regulatorischen Themen.\n• Widerstandsbarometer: Implementieren Sie ein systematisches Monitoring von Widerstandssignalen durch Sentiment-Analysen in der internen Kommunikation, strukturierte Stakeholder-Interviews und anonymisierte Pulse-Checks.\n• Business Impact: Messen Sie die tatsächlichen Geschäftsauswirkungen anhand von Prozesseffizienz, Fehlerhäufigkeit in regulatorischen Abläufen, Prüfungsergebnissen und Zeitaufwand für Compliance-Aktivitäten.\n\n🔄 Closed-Loop-Optimierungssystem:\n• Predictive Change Analytics: Implementieren Sie fortschrittliche Analysemodelle, die basierend auf historischen Daten die wahrscheinliche Wirksamkeit von Change-Maßnahmen für bestimmte Stakeholdergruppen vorhersagen.\n• Interventionstaxonomie: Entwickeln Sie ein strukturiertes System zur Klassifizierung verschiedener Change-Interventionen mit dokumentierten Wirksamkeitsmustern in unterschiedlichen Kontexten.\n• A/B-Testing für Change-Maßnahmen: Führen Sie kontrollierte Vergleichsstudien unterschiedlicher Change-Ansätze durch, um evidenzbasiert die effektivsten Strategien zu identifizieren.\n• Systematische Lessons Learned: Etablieren Sie einen formalisierten Prozess zur Extraktion und Dokumentation von Erkenntnissen aus jedem regulatorischen Change-Projekt mit konkreten Aktionspunkten für zukünftige Initiativen.\n\n🔍 Tiefenanalyse durch qualitative Forschungsmethoden:\n• Change Journey Mapping: Dokumentieren Sie die emotionale und kognitive Reise verschiedener Stakeholdergruppen über den gesamten Veränderungsprozess hinweg, um kritische Momente und Interventionsbedarfe zu identifizieren.\n• Critical Incident Technique: Analysieren Sie spezifische Schlüsselereignisse, die entweder besonders förderlich oder hinderlich für den Veränderungsprozess waren, um Erfolgsfaktoren und Barrieren zu identifizieren.\n• Ethnographische Studien: Führen Sie gezielte Beobachtungsstudien in betroffenen Abteilungen durch, um die tatsächliche Integration regulatorischer Anforderungen in den Arbeitsalltag zu verstehen.\n• Narrative Analyse: Erfassen und analysieren Sie die Geschichten und Erzählungen, die in der Organisation über die regulatorische Veränderung kursieren, um kollektive Sinngebungsprozesse zu verstehen und zu beeinflussen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche Rolle spielen digitale Lernplattformen und -technologien bei der Skalierung von CRR/CRD-Schulungen in großen Finanzinstituten?",
        answer: "Digitale Lernplattformen und -technologien sind entscheidende Enabler für die effektive Skalierung von CRR/CRD-Schulungen in komplexen Finanzorganisationen. Sie überwinden räumliche, zeitliche und kapazitative Limitationen traditioneller Schulungsansätze und ermöglichen personalisierte, datengestützte Lernpfade, die kontinuierliches regulatorisches Lernen im gesamten Institut fördern.\n\n🚀 Strategische Skalierungsvorteile digitaler Lernökosysteme:\n• Synchronisierte regulatorische Wissensbasis: Gewährleisten Sie konsistente, zeitgleiche Vermittlung regulatorischer Updates an tausende Mitarbeiter über verschiedene Standorte, Abteilungen und Hierarchieebenen hinweg.\n• Demokratisierung von Expertenwissen: Machen Sie das spezialisierte Wissen regulatorischer Experten durch digitale Formate wie Mikro-Lectures, Expert-Interviews und Erklärvideos breit zugänglich.\n• Kompetenzbasierte Lernarchitektur: Implementieren Sie ein modular aufgebautes Lernsystem, das präzise auf die unterschiedlichen regulatorischen Kompetenzprofile verschiedener Rollen und Funktionen ausgerichtet ist.\n• Skalierbare Verifikationsmechanismen: Nutzen Sie automatisierte Assessment-Systeme zur effizienten Überprüfung des regulatorischen Wissens und der Anwendungskompetenz bei großen Mitarbeiterzahlen.\n\n💻 Innovative Technologien für effektives regulatorisches Lernen:\n• Adaptive Learning Engines: Implementieren Sie KI-gestützte Systeme, die individuelle Lernpfade basierend auf Vorwissen, Rolle, Lernfortschritt und -präferenzen dynamisch anpassen und optimieren.\n• Virtual Reality Compliance Simulationen: Entwickeln Sie immersive Trainingsumgebungen für komplexe regulatorische Entscheidungssituationen, die reale Konsequenzen verschiedener Handlungsoptionen erlebbar machen.\n• Intelligente Tutoring Systeme: Setzen Sie KI-basierte Lernbegleiter ein, die personalisiertes Feedback geben, typische Verständnisschwierigkeiten erkennen und gezielte Hilfestellungen anbieten.\n• Learning Record Stores (LRS): Implementieren Sie xAPI-basierte Systeme, die Lerndaten aus verschiedenen Quellen aggregieren und ganzheitliche Kompetenzprofile zu regulatorischen Themen erstellen.\n\n📱 Microlearning-Ökosysteme für kontinuierliches regulatorisches Lernen:\n• Kontext-sensitive Push-Mechanismen: Entwickeln Sie intelligente Systeme, die relevante regulatorische Lerninhalte genau dann bereitstellen, wenn sie im Arbeitskontext benötigt werden.\n• Spaced Repetition Engines: Implementieren Sie wissenschaftlich fundierte Wiederholungsalgorithmen, die kritische regulatorische Inhalte zum optimalen Zeitpunkt für langfristige Gedächtnisverankerung reaktivieren.\n• Social Learning Hubs: Schaffen Sie digitale Räume für kollaboratives Lernen, in denen Mitarbeiter regulatorische Fragen diskutieren, Best Practices teilen und gemeinsam komplexe Compliance-Herausforderungen lösen können.\n• Mobile-First Learning Journeys: Gestalten Sie responsive Lernumgebungen, die nahtloses regulatorisches Lernen auf verschiedenen Endgeräten ermöglichen und Lernen in Mikromomentenanpassen n des Arbeitsalltags unterstützen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können wir unser Schulungs- und Change Management-Programm speziell auf die neuesten Entwicklungen in CRR III und CRD VI ausrichten?",
        answer: "Die gezielte Ausrichtung Ihres Schulungs- und Change Management-Programms auf die komplexen Anforderungen von CRR III und CRD VI erfordert einen strategischen, inhaltlich fokussierten Ansatz. Die neuesten regulatorischen Entwicklungen bringen fundamentale Veränderungen, die spezifische Kompetenzentwicklung und Change-Maßnahmen erfordern, um eine erfolgreiche Implementation zu gewährleisten.\n\n📚 Fokussierte Inhaltsstrategie für CRR III/CRD VI-Schulungen:\n• ESG-Risikomanagement: Entwickeln Sie dedizierte Schulungsmodule zu den neuen Anforderungen an ESG-Risikoidentifikation, -bewertung und -steuerung, mit besonderem Fokus auf Klimarisiken und deren Integration in bestehende Risikomanagementprozesse.\n• Output Floor und Kreditrisikomodellierung: Gestalten Sie tiefgehende technische Trainings zu den Änderungen bei internen Modellen, dem neuen Output Floor und seinen Auswirkungen auf die Kapitalplanung sowie den revidierten Standardansätzen für Kreditrisiko.\n• FRTB und Marktrisiko-Framework: Konzipieren Sie praxisorientierte Simulationen zur Implementation des Fundamental Review of the Trading Book, einschließlich der neuen Standardansätze und revidierten internen Modellansätze für Marktrisiko.\n• Digitale Resilienz (DORA): Integrieren Sie Schulungsinhalte zu den neuen Anforderungen an IT-Risikomanagement, Cybersecurity und digitale Betriebsstabilität, die mit CRR III/CRD VI und der Digital Operational Resilience Act zusammenhängen.\n\n🔄 Targeted Change Management für kritische CRR III/CRD VI-Transformationen:\n• Datenmanagement-Transformation: Entwickeln Sie gezielte Change-Strategien für die erweiterten Datenanforderungen, insbesondere im Hinblick auf ESG-Daten, granulare Risikodaten und neue Reportinganforderungen.\n• IT-Systemanpassungen: Gestalten Sie ein dediziertes Change-Programm für die notwendigen technischen Umstellungen, insbesondere bei Risikoquantifizierungssystemen, Reportingplattformen und Datenarchitekturen.\n• Governance-Struktur-Evolution: Begleiten Sie die Anpassung von Governance-Frameworks, insbesondere im Hinblick auf neue ESG-Verantwortlichkeiten, erweiterte Risikomanagement-Funktionen und geänderte Vorstandsverantwortlichkeiten.\n• Kultur der vorausschauenden Compliance: Fördern Sie einen kulturellen Wandel hin zu proaktivem Risikomanagement und vorausschauender Compliance, der die frühe Identifikation und Adressierung regulatorischer Herausforderungen unterstützt.\n\n🎯 Stakeholder-spezifische Lernpfade und Change-Interventionen:\n• Vorstand und oberes Management: Konzipieren Sie Executive Briefings zu strategischen Implikationen von CRR III/CRD VI, insbesondere zu Kapitalplanungsauswirkungen, neuen Geschäftsmodellrisiken und langfristigen Transformationsanforderungen.\n• Risikomanagement und Controlling: Entwickeln Sie detaillierte technische Schulungen zu den methodischen Änderungen, neuen Modellierungsansätzen und geänderten Validierungsanforderungen.\n• IT und Datenmanagement: Gestalten Sie spezifische Change-Programme für die technischen Implementierungsherausforderungen, einschließlich Datenarchitektur, Systemanpassungen und Reportinginfrastruktur.\n• Front Office und Kundenbetreuung: Bieten Sie anwendungsorientierte Schulungen zu den Auswirkungen auf Produktangebote, Preisgestaltung und Kundenberatung im Kontext der neuen regulatorischen Anforderungen."
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
