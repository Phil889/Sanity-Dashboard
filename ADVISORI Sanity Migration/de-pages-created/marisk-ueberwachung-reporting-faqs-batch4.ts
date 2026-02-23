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
    console.log('Updating MaRisk Überwachung & Reporting page with FAQs batch 4...')
    
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
        question: "Wie kann ein Finanzinstitut ein ganzheitliches Reporting-Framework entwickeln, das sowohl MaRisk-Anforderungen als auch internationale Standards berücksichtigt?",
        answer: "Ein ganzheitliches Reporting-Framework, das sowohl MaRisk-Anforderungen als auch internationale Standards (wie Basel, EBA-Vorgaben oder IFRS) integriert, stellt eine komplexe, aber lohnende Herausforderung für Finanzinstitute dar. Eine solche harmonisierte Lösung kann erhebliche Synergien schaffen und die Gesamtkomplexität des regulatorischen Reportings reduzieren.\n\n🌐 Strategische Integrationsprinzipien:\n• Übergreifende Taxonomie-Entwicklung: Schaffung eines einheitlichen regulatorischen Begriffssystems, das Definitionen und Konzepte aus verschiedenen regulatorischen Rahmenwerken (MaRisk, CRR/CRD, BCBS, etc.) harmonisiert und Übersetzungstabellen zwischen verschiedenen Anforderungen etabliert.\n• Regulatorische Anforderungslandkarte: Systematische Erfassung und Kategorisierung aller relevanten Reporting-Anforderungen aus nationalen und internationalen Quellen mit klarer Identifikation von Überschneidungen, Abhängigkeiten und potenziellen Konflikten.\n• Integrierte Datenarchitektur: Entwicklung eines übergreifenden Datenmodells, das sämtliche regulatorische Kennzahlen aus einer konsistenten Quelldatenbasis ableiten kann und die Kohärenz verschiedener Reports sicherstellt.\n• Modularisierter Framework-Ansatz: Aufbau eines flexiblen Reporting-Frameworks mit wiederverwendbaren Komponenten, die je nach regulatorischem Kontext unterschiedlich kombiniert werden können, statt isolierter Reporting-Silos.\n\n📋 Praktische Implementierungsstrategien:\n• Top-Down-Reporting-Design: Ausgehend von den Berichtsanforderungen verschiedener Regulatoren Entwicklung eines integrierten Reporting-Sets, das identische oder ähnliche Informationen für verschiedene Zwecke wiederverwendet.\n• Common-Data-Plattform: Implementierung einer zentralen regulatorischen Datenplattform, die als Single Source of Truth für alle Compliance-Daten dient und die konsistente Ableitung verschiedener Reports ermöglicht.\n• Intelligente Report-Orchestrierung: Einsatz von Workflow-Technologien, die den Reporting-Prozess für verschiedene regulatorische Anforderungen koordinieren und gemeinsame Validierungsschritte, Überprüfungen und Freigaben bündeln.\n• Flexible Output-Generierung: Nutzung von Template-basierten Reporting-Engines, die aus dem gleichen Datenbestand unterschiedlich formatierte Reports für verschiedene regulatorische Adressaten generieren können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können Vorstand und Aufsichtsrat optimal in den MaRisk-Überwachungs- und Reportingprozess eingebunden werden?",
        answer: "Die optimale Einbindung von Vorstand und Aufsichtsrat in den MaRisk-Überwachungs- und Reportingprozess ist von zentraler Bedeutung für eine wirksame Governance und die Erfüllung regulatorischer Anforderungen. Diese Leitungsgremien müssen einen klaren Überblick über den MaRisk-Compliance-Status erhalten und ihre Aufsichtsfunktion effektiv wahrnehmen können, ohne von Details überwältigt zu werden.\n\n🔝 Gestaltungsprinzipien für eine effektive Leitungsgremieneinbindung:\n• Ebenengerechte Informationsaufbereitung: Entwicklung von Berichten mit unterschiedlichen Detaillierungsgraden - strategische Zusammenfassungen für den Gesamtvorstand und Aufsichtsrat, detailliertere Auswertungen für fachlich zuständige Vorstandsmitglieder und spezialisierte Aufsichtsratsausschüsse.\n• Fokussierung auf wesentliche Compliance-Risiken: Priorisierung von Informationen nach Risikorelevanz und potenziellen Auswirkungen, um die Aufmerksamkeit der Leitungsgremien auf die kritischsten Bereiche zu lenken und Information Overload zu vermeiden.\n• Handlungsorientierte Berichterstattung: Ergänzung des reinen Status-Reportings durch klare Handlungsempfehlungen und Entscheidungsvorlagen, die es den Leitungsgremien ermöglichen, ihrer Steuerungsfunktion effektiv nachzukommen.\n• Kontinuierlicher Dialog statt punktueller Berichte: Etablierung eines fortlaufenden Informations- und Diskussionsprozesses anstelle isolierter Berichtstermine, um ein tiefergehendes Verständnis für Compliance-Entwicklungen zu fördern.\n\n📊 Praktische Umsetzungsansätze:\n• Executive Dashboards mit Drill-Down-Funktionalität: Bereitstellung interaktiver Übersichten, die einen schnellen Gesamtüberblick ermöglichen, aber bei Bedarf auch den Zugriff auf detailliertere Informationen zu spezifischen Compliance-Themen erlauben.\n• Trend- und Prognoseorientierung: Integration von Trendanalysen und zukunftsgerichteten Indikatoren in die Berichterstattung, um frühzeitig auf potenzielle Compliance-Risiken hinzuweisen und proaktives Handeln zu ermöglichen.\n• Regelmäßige Deep-Dive-Sessions: Organisation fokussierter Arbeitssitzungen zu spezifischen MaRisk-Themenbereichen, die ein tieferes Verständnis fördern und über das Standard-Reporting hinausgehen.\n• Direkte Kommunikationskanäle: Schaffung direkter Verbindungen zwischen Compliance-Verantwortlichen und Leitungsgremien, die eine ungefilterte Eskalation kritischer Themen ermöglichen und die informelle Informationsversorgung sicherstellen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie lässt sich ein wirksames MaRisk-Überwachungssystem in komplexen Konzernstrukturen mit verschiedenen Tochtergesellschaften implementieren?",
        answer: "Die Implementierung eines wirksamen MaRisk-Überwachungssystems in komplexen Konzernstrukturen erfordert einen ausgewogenen Ansatz zwischen zentraler Steuerung und dezentraler Verantwortung. Die Herausforderung besteht darin, konzernweite Compliance-Standards zu etablieren und gleichzeitig den spezifischen regulatorischen, geschäftsmodellbezogenen und regionalen Besonderheiten der einzelnen Konzerngesellschaften Rechnung zu tragen.\n\n🏢 Strategische Gestaltungsprinzipien für Konzernstrukturen:\n• Harmonisierte Governance-Rahmenwerke: Entwicklung eines gruppenweit einheitlichen MaRisk-Governance-Modells mit klaren Mindeststandards, das jedoch ausreichende Flexibilität für die Anpassung an lokale Anforderungen und Geschäftsmodelle bietet.\n• Abgestufte Verantwortungsmodelle: Implementierung eines differenzierten Ansatzes, der zentrale Überwachung für konzernintern kritische Themen mit lokaler Verantwortung für spezifische Compliance-Bereiche kombiniert, entsprechend dem Subsidiaritätsprinzip.\n• Integrierte Informationsarchitektur: Aufbau einer konzernweiten Informationsinfrastruktur, die lokale Compliance-Daten konsolidiert und sowohl Einzelgesellschafts- als auch Gesamtkonzernsichten ermöglicht.\n• Klare Schnittstellen und Berichtswege: Definition unmissverständlicher Kommunikationspfade und Eskalationswege zwischen Tochtergesellschaften und Konzernzentrale bei Compliance-relevanten Themen.\n\n🛠️ Praktische Implementierungsansätze:\n• Hub-and-Spoke-Organisationsmodell: Etablierung zentraler Compliance-Kompetenzzentren (Hubs) mit spezialisierten Koordinatoren in den Tochtergesellschaften (Spokes), die als Bindeglied zwischen lokalen Einheiten und zentralen Funktionen agieren.\n• Gemeinsame Methodenstandards: Entwicklung einheitlicher Bewertungs- und Klassifizierungsmodelle für MaRisk-relevante Risiken, die konzernweit angewendet werden und die Vergleichbarkeit zwischen Einheiten sicherstellen.\n• Gestaffelte Berichtslinien: Implementation eines mehrstufigen Reporting-Systems, das zwischen lokaler, regionaler und Konzernebene differenziert und angemessene Aggregations- und Filtermechanismen für jede Ebene vorsieht.\n• Collaborative Compliance-Plattformen: Einsatz digitaler Kollaborationstools, die den Wissensaustausch, Best-Practice-Sharing und gemeinsames Lernen zwischen verschiedenen Konzerngesellschaften fördern und die Effizienz des Gesamtsystems steigern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Rolle spielt die Unternehmenskultur bei der Wirksamkeit von MaRisk-Überwachungs- und Reportingsystemen?",
        answer: "Die Unternehmenskultur ist ein fundamentaler, oft unterschätzter Erfolgsfaktor für die Wirksamkeit von MaRisk-Überwachungs- und Reportingsystemen. Selbst die ausgereiftesten technischen Lösungen und Prozesse können nur dann ihre volle Wirkung entfalten, wenn sie von einer unterstützenden Compliance-Kultur getragen werden, die auf allen Ebenen des Unternehmens verankert ist.\n\n🔄 Wechselwirkungen zwischen Unternehmenskultur und Compliance-Monitoring:\n• Qualität und Integrität der Compliance-Daten: Eine offene und transparente Unternehmenskultur fördert die wahrheitsgetreue Berichterstattung und reduziert das Risiko von verschleierten oder beschönigten Compliance-Informationen, die die Wirksamkeit des Monitorings untergraben würden.\n• Akzeptanz und aktive Nutzung: Eine positive Einstellung zu regulatorischen Anforderungen erhöht die Bereitschaft aller Mitarbeiter, Überwachungssysteme nicht nur formalistisch zu bedienen, sondern aktiv zu nutzen und zur kontinuierlichen Verbesserung beizutragen.\n• Wirksamkeit von Eskalationsmechanismen: Nur in einer Kultur, die offene Kommunikation schätzt und keine Angst vor der Überbringung schlechter Nachrichten kennt, können Eskalationswege für Compliance-Abweichungen effektiv funktionieren.\n• Nachhaltigkeit von Compliance-Maßnahmen: Eine tief verankerte Compliance-Kultur sorgt dafür, dass MaRisk-konforme Verhaltensweisen nicht nur aufgrund externer Kontrollen, sondern aus innerer Überzeugung praktiziert werden.\n\n🌱 Strategien zur Förderung einer unterstützenden Compliance-Kultur:\n• Tone from the Top: Konsequente Vorbildfunktion der Führungskräfte, die MaRisk-Compliance nicht nur predigen, sondern selbst praktizieren und als strategische Priorität kommunizieren, nicht als lästige Pflichtübung.\n• Embedding in Personalentwicklung: Integration von Compliance-Aspekten in Stellenbeschreibungen, Leistungsbeurteilungen und Vergütungssysteme, um klare Anreize für compliance-konformes Verhalten zu setzen.\n• Kontinuierliche Sensibilisierung und Schulung: Regelmäßige, zielgruppenspezifische Trainings, die nicht nur Wissen vermitteln, sondern auch die Relevanz von MaRisk-Compliance für den Geschäftserfolg verdeutlichen.\n• Offene Fehlerkultur und kontinuierliches Lernen: Etablierung eines konstruktiven Umgangs mit Compliance-Abweichungen, der den Fokus auf Ursachenanalyse und Verbesserung legt statt auf Schuldzuweisungen und Sanktionen."
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
