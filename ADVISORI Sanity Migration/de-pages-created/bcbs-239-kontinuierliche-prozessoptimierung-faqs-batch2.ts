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
    console.log('Updating BCBS-239 Kontinuierliche Prozessoptimierung page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'bcbs-239-kontinuierliche-prozessoptimierung' })
    
    if (!existingDoc) {
      throw new Error('Document "bcbs-239-kontinuierliche-prozessoptimierung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können wir Prozessautomatisierung und RPA gezielt für die BCBS-239 Compliance einsetzen und welche Prozesse eignen sich besonders dafür?",
        answer: "Die strategische Implementierung von Prozessautomatisierung und Robotic Process Automation (RPA) im BCBS-239-Kontext kann transformative Effizienzgewinne erzielen, reduziert aber nicht nur operative Kosten, sondern steigert auch maßgeblich die Zuverlässigkeit und Konsistenz Ihrer Compliance-Prozesse. Der Schlüssel liegt in der gezielten Identifikation jener Prozessschritte, die das optimale Verhältnis zwischen Automatisierungspotenzial und regulatorischem Nutzen bieten.\n\n🎯 Prädestinierte Prozesse für BCBS-239 Automatisierung:\n• Datenextraktion und -integration: Automatisierte Extraktion von Risikodaten aus unterschiedlichen Quellsystemen, Vereinheitlichung von Datenformaten und Transformation in ein konsistentes Modell. Dies reduziert Medienbrüche, minimiert manuelle Fehler und beschleunigt den Datenerfassungsprozess signifikant.\n• Datenvalidierung und Qualitätssicherung: Implementierung automatisierter Prüfroutinen mit definierten Validierungsregeln, die Inkonsistenzen, Ausreißer und Datenqualitätsprobleme frühzeitig identifizieren und kategorisieren. Dieses proaktive Qualitätsmanagement erhöht die Zuverlässigkeit Ihrer Risikodaten erheblich.\n• Rechenintensive Aggregationen: Automatisierung komplexer Berechnungen und Aggregationen von Risikokennzahlen über verschiedene Dimensionen hinweg. Dies garantiert methodische Konsistenz, eliminiert Berechnungsfehler und ermöglicht schnellere Aktualisierungszyklen.\n• Standardisiertes Reporting: Automatisierte Generierung regulatorischer Berichte mit konsistenter Formatierung, korrekter Versionierung und integrierter Prüfung gegen Vorperioden. Dies sichert die formale Compliance und entlastet Experten von repetitiven Dokumentationsaufgaben.\n\n⚙️ Implementierungsstrategien für maximalen Erfolgsbeitrag:\n• Prozesspriorisierung nach ROI-Matrix: Bewertung potenzieller Automatisierungskandidaten anhand einer mehrdimensionalen Matrix, die regulatorisches Risiko, Häufigkeit, manuelle Fehleranfälligkeit und Ressourcenbindung berücksichtigt. Dies ermöglicht eine strategische Priorisierung mit maximalem Kosten-Nutzen-Verhältnis.\n• Modularer Automatisierungsansatz: Implementierung überschaubarer, in sich geschlossener Automatisierungsmodule anstelle monolithischer Lösungen. Dies reduziert Implementierungsrisiken, beschleunigt Time-to-Value und ermöglicht inkrementelle Verbesserungen.\n• Integrierte Kontrollmechanismen: Implementierung automatisierter aber transparenter Kontrollpunkte, die kritische Prozessschritte überwachen und bei Bedarf menschliche Intervention auslösen. Dieser hybride Ansatz kombiniert Automatisierungseffizienz mit regulatorischer Sicherheit.\n• Audit-Trail und Nachvollziehbarkeit: Integration umfassender Logging- und Dokumentationsfunktionen in alle automatisierten Prozesse, um die regulatorisch geforderte Transparenz und Nachvollziehbarkeit zu gewährleisten. Dies unterstützt Prüfprozesse und stärkt das Vertrauen der Aufsichtsbehörden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Rolle spielen Prozess-KPIs in der kontinuierlichen BCBS-239 Prozessoptimierung und wie sollten sie strukturiert werden?",
        answer: "Prozess-KPIs bilden das Rückgrat einer datengetriebenen BCBS-239 Prozessoptimierung und gehen weit über traditionelle Compliance-Metriken hinaus. Sie transformieren subjektive Einschätzungen in objektiv messbare Parameter und schaffen die Grundlage für eine kontinuierliche, evidenzbasierte Verbesserung Ihrer Risikodaten-Prozesse. Eine durchdachte KPI-Architektur kombiniert regulatorische Anforderungen mit operativer Exzellenz und strategischen Unternehmenszielen.\n\n📊 Multi-dimensionale KPI-Architektur für BCBS-239 Prozesse:\n• Compliance-Effektivitäts-KPIs: Diese Metriken messen die inhaltliche Compliance-Qualität und gehen über eine binäre Compliance-Betrachtung hinaus. Hierzu zählen beispielsweise die Vollständigkeitsrate kritischer Risikodaten, die Konsistenz zwischen verschiedenen Risikoberichten oder die Genauigkeit von Risikoprojektionen im Vergleich zu tatsächlichen Entwicklungen.\n• Prozesseffizienz-KPIs: Diese Kennzahlen quantifizieren die operative Leistungsfähigkeit Ihrer BCBS-239 Prozesse. Relevant sind hier Metriken wie End-to-End-Durchlaufzeiten für Risikoberichte, Anzahl manueller Eingriffe pro Berichtszyklus, Ressourcenaufwand pro Risikodomäne oder die Reduktion von Prozessvarianten über Zeit.\n• Datenqualitäts-KPIs: Diese Indikatoren adressieren die Qualitätsdimensionen der verwendeten Risikodaten. Zentrale Metriken umfassen die Vollständigkeit von Datenattributen, die Konsistenz zwischen verschiedenen Datenpunkten, die Aktualität der Risikodaten oder die Fehlerrate bei Datenvalidierungen.\n• Automatisierungs-KPIs: Diese Messgrößen erfassen den Fortschritt und die Wirksamkeit Ihrer Automatisierungsinitiativen. Relevante Kennzahlen sind der Automatisierungsgrad nach Prozessschritten, die Zuverlässigkeit automatisierter Prozesse (Fehlerraten) oder die durch Automatisierung freigesetzten Kapazitäten.\n\n🔄 Integration in einen Continuous Improvement Cycle:\n• Hierarchische KPI-Kaskadierung: Entwicklung einer KPI-Hierarchie, die strategische Compliance-Ziele mit operativen Prozessmetriken verknüpft und bis auf die Ebene einzelner Prozessschritte heruntergebrochen wird. Dies schafft Transparenz über den Beitrag einzelner Optimierungsmaßnahmen zum Gesamterfolg.\n• Dynamische Schwellenwertdefinition: Etablierung eines adaptiven Systems für KPI-Schwellenwerte, das sich an der Prozessreife orientiert und mit zunehmender Optimierung anspruchsvollere Zielwerte definiert. Dies fördert eine Kultur der kontinuierlichen Verbesserung statt der bloßen Erfüllung statischer Mindestanforderungen.\n• Integrierte Frühwarnindikatoren: Implementierung von Lead-Indikatoren, die potenzielle Compliance-Risiken oder Prozessprobleme frühzeitig signalisieren, bevor sie in Lag-Indikatoren sichtbar werden. Dies ermöglicht präventive statt reaktive Maßnahmen.\n• Management-Dashboards mit Drill-Down-Funktionalität: Entwicklung intuitiver Visualisierungen, die sowohl einen schnellen Überblick auf Management-Ebene bieten als auch detaillierte Analysen für Prozessverantwortliche ermöglichen. Dies unterstützt faktenbasierte Entscheidungen auf allen Organisationsebenen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche Governance-Strukturen empfiehlt ADVISORI für eine erfolgreiche und nachhaltige BCBS-239 Prozessoptimierung?",
        answer: "Eine wirkungsvolle BCBS-239 Prozessoptimierung erfordert mehr als technische Maßnahmen – sie benötigt eine robuste Governance-Architektur, die Verantwortlichkeiten klar definiert, kontinuierliche Verbesserung institutionalisiert und eine Balance zwischen zentraler Steuerung und dezentraler Umsetzung schafft. ADVISORI hat einen differenzierten Governance-Ansatz entwickelt, der regulatorische Anforderungen mit organisatorischer Effektivität und kulturellem Wandel verbindet.\n\n🏛️ Governance-Architektur für nachhaltige Prozessoptimierung:\n• Process Excellence Board: Etablierung eines interdisziplinären Steuerungsgremiums mit Vertretern aus Risikomanagement, Compliance, IT und Fachbereichen, das die strategische Ausrichtung der Prozessoptimierung verantwortet. Dieses Board priorisiert Optimierungsinitiativen, allokiert Ressourcen und überprüft regelmäßig den Fortschritt anhand definierter KPIs.\n• Process Owner Framework: Implementierung eines klaren Rollenkonzepts mit definierten Prozessverantwortlichen, die End-to-End-Verantwortung für spezifische BCBS-239 Prozesse übernehmen. Diese Process Owner fungieren als Schnittstelle zwischen strategischer Governance und operativer Umsetzung und treiben kontinuierliche Verbesserung in ihren Verantwortungsbereichen aktiv voran.\n• Continuous Improvement Council: Schaffung einer funktions- und hierarchieübergreifenden Arbeitsgruppe, die regelmäßig Prozessleistung analysiert, Optimierungspotenziale identifiziert und konkrete Verbesserungsmaßnahmen initiiert. Dieses Gremium fördert den bereichsübergreifenden Wissensaustausch und entwickelt Best Practices für die gesamte Organisation.\n• Regulatory Change Management: Integration eines strukturierten Prozesses zur Bewertung regulatorischer Änderungen hinsichtlich ihrer Auswirkungen auf bestehende Prozesse. Dies ermöglicht eine proaktive Anpassung der Prozesslandschaft an neue aufsichtsrechtliche Anforderungen und verhindert reaktive Ad-hoc-Maßnahmen.\n\n🔄 Operative Steuerungsmechanismen und Eskalationswege:\n• Standardisierte Process Reviews: Implementierung eines strukturierten Zyklus von Prozessüberprüfungen mit definierten Bewertungskriterien, die sowohl Compliance-Anforderungen als auch Effizienzaspekte berücksichtigen. Diese Reviews folgen einem festen Rhythmus und umfassen sowohl detaillierte Self-Assessments als auch unabhängige Validierungen.\n• Klar definierte Eskalationspfade: Etablierung transparenter Mechanismen für die Eskalation von Prozessdefiziten oder Optimierungsblockaden. Dies umfasst definierte Schwellenwerte für die Eskalation, klare Eskalationsstufen und dokumentierte Entscheidungsprozesse für korrigierende Maßnahmen.\n• Cross-funktionale Prozess-Koordination: Schaffung von Abstimmungsmechanismen zwischen den verschiedenen Prozessbeteiligten, insbesondere an Schnittstellen zwischen verschiedenen Abteilungen oder Systemen. Dies minimiert Reibungsverluste und fördert ein gemeinsames Prozessverständnis über Organisationsgrenzen hinweg.\n• Integriertes Prozess- und Kontrollmonitoring: Verbindung von Prozessmonitoring und internem Kontrollsystem zu einem ganzheitlichen Überwachungsansatz, der sowohl die Prozessleistung als auch die Effektivität der integrierten Kontrollen kontinuierlich bewertet und transparent kommuniziert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können wir unsere Mitarbeiter erfolgreich in die BCBS-239 Prozessoptimierung einbinden und Change Management effektiv gestalten?",
        answer: "Die erfolgreiche Optimierung von BCBS-239 Prozessen ist zu 50% Technologie, aber zu 100% Mitarbeiterengagement. Die besten technischen Lösungen und Prozessdesigns scheitern, wenn die Menschen, die sie umsetzen sollen, nicht eingebunden, befähigt und motiviert sind. ADVISORI verfolgt einen ganzheitlichen Change-Management-Ansatz, der den Menschen in den Mittelpunkt stellt und kulturelle Transformation mit fachlicher Entwicklung verbindet.\n\n👥 Mitarbeiterorientierte Transformationsstrategie:\n• Early Involvement statt Late Information: Frühzeitige und kontinuierliche Einbindung von Schlüsselmitarbeitern in die Analysephase und Konzeptentwicklung der Prozessoptimierung. Dies sichert nicht nur wertvolles Praxiswissen, sondern schafft auch Ownership und reduziert Widerstände gegen Veränderungen signifikant.\n• Change-Agent-Netzwerk: Identifikation und Entwicklung von Change Agents auf verschiedenen Organisationsebenen, die als Multiplikatoren, lokale Experten und Feedbackkanäle fungieren. Diese Change Agents verstehen sowohl die fachlichen Details als auch die übergeordneten Zielsetzungen und können Veränderungen kontextbezogen vermitteln.\n• Transparente Kommunikationsstrategie: Entwicklung einer mehrkanaligen, zielgruppenspezifischen Kommunikationsstrategie, die nicht nur über Änderungen informiert, sondern deren Notwendigkeit, Nutzen und persönliche Relevanz für verschiedene Stakeholder-Gruppen verdeutlicht. Die Kommunikation betont dabei sowohl regulatorische Aspekte als auch individuelle Vorteile.\n• Erlebbare Erfolge: Implementierung von Quick Wins und frühen Erfolgen, die den Wert der Prozessoptimierung greifbar machen und positive Erfahrungen schaffen. Die gezielte Celebration dieser Erfolge schafft Momentum und Überzeugung für den weiteren Transformationsprozess.\n\n🎓 Befähigung durch gezielte Kompetenzentwicklung:\n• Mehrstufiges Schulungskonzept: Entwicklung eines differenzierten Qualifizierungsprogramms mit modularen Inhalten, die von grundlegenden BCBS-239 Prinzipien über prozessspezifisches Fachwissen bis hin zu technologischen Skills reichen. Die Schulungsmodule werden dabei an verschiedene Rollen und Verantwortlichkeiten angepasst.\n• Learning-by-Doing durch Pilotierung: Praktische Einbindung von Mitarbeitern in Pilotprojekte und kontrollierte Testumgebungen, in denen sie neue Prozesse und Tools in einem geschützten Rahmen erproben können. Dies reduziert Unsicherheiten und fördert praktisches Verständnis durch direktes Erleben.\n• Cross-funktionale Lernerfahrungen: Organisation von abteilungsübergreifenden Workshops und Shadowing-Möglichkeiten, die das Verständnis für vor- und nachgelagerte Prozessschritte fördern. Dies stärkt das End-to-End-Prozessdenken und verbessert die Zusammenarbeit an Schnittstellen.\n• Kontinuierliche Feedback-Schleifen: Etablierung strukturierter Mechanismen für Mitarbeiterfeedback zur Prozessoptimierung. Dieses Feedback wird systematisch ausgewertet und fließt in iterative Verbesserungen ein, was sowohl die Prozessqualität erhöht als auch die Akzeptanz durch aktive Mitgestaltung stärkt."
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
    console.log('✅ FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
