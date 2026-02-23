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
    console.log('Updating FRTB Risikodatenerhebung Datenqualität page with FAQs batch 4...')
    
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
        question: "Wie können Datenqualitätsprobleme in FRTB-Implementierungen frühzeitig erkannt und effektiv behoben werden?",
        answer: "Die frühzeitige Erkennung und effektive Behebung von Datenqualitätsproblemen ist entscheidend für den Erfolg einer FRTB-Implementierung. Proaktives Datenqualitätsmanagement verhindert nicht nur kostspielige Nachbesserungen und regulatorische Risiken, sondern sichert auch die Zuverlässigkeit von Risikoberechnungen und strategischen Entscheidungen.\n\n🔍 Strategie zur frühzeitigen Erkennung von Datenqualitätsproblemen:\n• Echtzeit-Monitoring und Alerting: Implementation eines kontinuierlichen Überwachungssystems mit definierten Schwellenwerten und Alarmierungsmechanismen, das Qualitätsprobleme unmittelbar bei deren Entstehung erkennt.\n• Vorgelagerte Validierungskontrollen: Integration von Datenqualitätskontrollen direkt an den Eingangspunkten des Datenflusses (Datenerfassung, Schnittstellen, Datenimporte), um Probleme zu identifizieren, bevor sie sich im System verbreiten.\n• Predictive Data Quality Analytics: Einsatz fortschrittlicher Analysemethoden und Machine Learning zur Identifikation von Mustern und Trends, die auf zukünftige Datenqualitätsprobleme hindeuten können.\n• Cross-System Reconciliation: Systematischer Abgleich von Daten zwischen verschiedenen Systemen und Quellen, um Inkonsistenzen, Synchronisationsprobleme und Datenverarbeitungsfehler frühzeitig zu erkennen.\n• Qualitäts-Dashboards mit Drill-Down-Funktionalität: Entwicklung intuitiver Visualisierungen, die eine schnelle Übersicht über den Datenqualitätsstatus ermöglichen und gleichzeitig detaillierte Analysen bei identifizierten Problemen unterstützen.\n\n🛠️ ADVISORIs Framework zur effektiven Problembehebung:\n• Strukturierte Root-Cause-Analysis: Wir etablieren einen systematischen Prozess zur Identifikation der Grundursachen von Datenqualitätsproblemen, der über die Symptombehebung hinausgeht und nachhaltige Lösungen ermöglicht.\n• Priorisierungsmatrix für Datenqualitätsprobleme: Entwicklung eines Frameworks zur Bewertung und Priorisierung von Qualitätsproblemen basierend auf geschäftlichen Auswirkungen, regulatorischen Risiken und technischer Komplexität.\n• Collaborative Remediation Platform: Implementation einer kollaborativen Plattform für die koordinierte Behebung von Datenqualitätsproblemen mit klaren Verantwortlichkeiten, Workflows und Statusverfolgung.\n• Automatisierte Korrekturmechanismen: Wo sinnvoll, Entwicklung automatisierter Verfahren zur standardisierten Korrektur häufiger Datenqualitätsprobleme mit vollständiger Dokumentation und Nachvollziehbarkeit.\n• Continuous Improvement Loop: Etablierung eines strukturierten Prozesses, der Erkenntnisse aus der Problembehebung systematisch erfasst und in die Verbesserung von Datenmodellen, -prozessen und -kontrollen einfließen lässt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Ansätze zur Datenmodellierung und -architektur empfiehlt ADVISORI, um FRTB-Datenanforderungen effizient zu erfüllen?",
        answer: "Die richtige Datenmodellierung und -architektur bildet das Fundament für eine effiziente FRTB-Implementierung. Eine durchdachte Architektur ermöglicht nicht nur die Erfüllung regulatorischer Anforderungen, sondern schafft auch die Basis für skalierbare, zukunftssichere Risikodatenprozesse mit optimaler Performance und Wartbarkeit.\n\n📐 Kernprinzipien für eine FRTB-optimierte Datenarchitektur:\n• Risikofaktor-zentriertes Datenmodell: Entwicklung eines Datenmodells, das Risikofaktoren als zentrale Entitäten etabliert und deren Beziehungen zu Instrumenten, Märkten und Portfolios klar abbildet – essentiell für die konsistente Umsetzung von SA und IMA.\n• Zeitreihen-optimierte Speicherung: Implementation spezialisierter Datenstrukturen für die effiziente Speicherung und den schnellen Zugriff auf umfangreiche Zeitreihendaten, die für ES-Berechnungen und Stresstests benötigt werden.\n• Metadata-driven Architecture: Nutzung eines reichhaltigen Metadatenmodells, das regulatorische Anforderungen, Datenqualitätsregeln und Transformationslogik deklarativ beschreibt und damit Anpassungsfähigkeit und Nachvollziehbarkeit erhöht.\n• Modulare Service-orientierte Architektur: Aufbau einer flexiblen, komponentenbasierten Architektur mit klar definierten Services für Datenbeschaffung, Validierung, Transformation und Reporting, die unabhängig skaliert und weiterentwickelt werden können.\n• Polyglot Persistence Strategy: Strategischer Einsatz unterschiedlicher Datenbanktechnologien für verschiedene Anforderungen – etwa hochperformante In-Memory-Datenbanken für Echtzeit-Berechnungen und kosteneffiziente objektbasierte Speicherung für historische Daten.\n\n🏗️ ADVISORIs architektonischer Implementierungsansatz:\n• Layer-basierte Referenzarchitektur: Wir entwickeln eine mehrschichtige Referenzarchitektur mit klarer Trennung von Datenerfassung, -speicherung, -verarbeitung und -bereitstellung, die sowohl FRTB-Anforderungen als auch Ihre spezifische Systemlandschaft berücksichtigt.\n• Daten-Domain-Modellierung: Anwendung von Domain-Driven-Design-Prinzipien zur Strukturierung des Datenmodells in kohärente, fachlich sinnvolle Domänen, die die Komplexität reduzieren und die Zusammenarbeit zwischen Business und IT verbessern.\n• Implementierung von Data Virtualization: Einsatz von Datenvirtualisierungstechnologien, die eine einheitliche logische Sicht auf physisch verteilte Datenquellen ermöglichen und damit Datenintegration ohne massive Datenbewegungen unterstützen.\n• Skalierbare Batch-Stream-Hybrid-Architektur: Entwicklung einer hybriden Architektur, die sowohl effiziente Batch-Verarbeitung für reguläre Berechnungen als auch Streaming-Verarbeitung für Echtzeit-Monitoring und intraday Risk Management unterstützt.\n• Cloud-Ready Design: Gestaltung einer Cloud-kompatiblen Architektur, die die Vorteile moderner Cloud-Dienste für Skalierbarkeit, Elastizität und verwaltete Services nutzen kann, während regulatorische Anforderungen und Datenschutzaspekte berücksichtigt werden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie unterstützt ADVISORI Banken bei der Datenintegration von Front-Office- und Risk-Management-Systemen für FRTB?",
        answer: "Die nahtlose Integration von Front-Office- und Risk-Management-Systemen ist eine zentrale Herausforderung bei der FRTB-Implementierung. Diese Integration ist nicht nur für die regulatorisch geforderte Abstimmung von P&L und Risikometriken essentiell, sondern auch für eine konsistente, effiziente Risikodatenarchitektur unerlässlich.\n\n🔄 Kernherausforderungen bei der Front-Office-Risk-Integration:\n• Historisch gewachsene Systemsilos: Front-Office- und Risk-Management-Systeme wurden oft unabhängig voneinander entwickelt, mit unterschiedlichen Datenmodellen, Bewertungsmethoden und Granularitätsebenen.\n• Unterschiedliche Anforderungen und Zeithorizonte: Während Front-Office-Systeme auf Geschwindigkeit und Handelsfunktionalität optimiert sind, fokussieren Risk-Management-Systeme auf Genauigkeit und umfassende Risikoerfassung über längere Zeithorizonte.\n• Komplexe Datenflüsse und Abhängigkeiten: Die Integration erfordert die Orchestrierung komplexer Datenflüsse mit zahlreichen Abhängigkeiten, Transformationen und Abstimmungspunkten.\n• P&L-Attribution-Test (PLAT) als kritischer Erfolgsfaktor: Der PLAT stellt besonders hohe Anforderungen an die konsistente Bewertung und Risikofaktormodellierung zwischen Front-Office und Risk-Management.\n\n🛠️ ADVISORIs integrativer Lösungsansatz:\n• Strategic Data Hub Architecture: Entwicklung einer zentralen Datenintegrationsschicht, die als Single Source of Truth für gemeinsam genutzte Daten dient und konsistente Datentransformation und -verteilung an Front-Office- und Risk-Systeme gewährleistet.\n• Unified Risk Factor Taxonomy: Etablierung einer einheitlichen Risikofaktor-Taxonomie und -Hierarchie, die sowohl die Anforderungen des Front-Office (Pricing, Hedging) als auch des Risk-Managements (Regulatory Reporting, Limit Management) erfüllt.\n• Harmonisierte Bewertungsmethodik: Unterstützung bei der Angleichung von Bewertungsmethoden und -modellen zwischen Front-Office und Risk-Management, mit besonderem Fokus auf die für PLAT kritischen Aspekte.\n• Near-Real-Time Data Synchronization: Implementation effizienter Mechanismen zur zeitnahen Synchronisation relevanter Daten zwischen Front-Office- und Risk-Systemen, die FRTB-Anforderungen an Aktualität und Konsistenz erfüllen.\n• Integriertes Abstimmungs- und Überwachungssystem: Entwicklung eines umfassenden Frameworks für die kontinuierliche Überwachung und Abstimmung von Front-Office- und Risk-Daten mit automatisierter Erkennung und Eskalation von Abweichungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Change-Management-Strategien empfiehlt ADVISORI für die Implementierung von FRTB-Datenprozessen in komplexen Organisationen?",
        answer: "Die erfolgreiche Implementierung von FRTB-Datenprozessen erfordert neben technischen Lösungen ein durchdachtes Change Management, das organisatorische, kulturelle und prozessuale Aspekte berücksichtigt. In komplexen Bankenstrukturen ist ein strategischer Change-Ansatz oft der entscheidende Erfolgsfaktor für nachhaltige Transformationen.\n\n🔄 Kritische Dimensionen des FRTB-Daten-Change-Managements:\n• Organisationsübergreifende Abstimmung: FRTB-Datenprozesse betreffen multiple Abteilungen (Trading, Risk, Finance, IT, Compliance) mit unterschiedlichen Prioritäten, Perspektiven und Arbeitsweisen, die harmonisiert werden müssen.\n• Tiefgreifende Prozessveränderungen: Die FRTB-Anforderungen erfordern nicht nur technische Anpassungen, sondern fundamentale Änderungen in etablierten Arbeitsabläufen, Entscheidungsprozessen und Verantwortlichkeiten.\n• Kompetenzaufbau und Wissenslücken: Die komplexen FRTB-Datenanforderungen erfordern neue Fähigkeiten und Kenntnisse, die in der Organisation aufgebaut oder extern beschafft werden müssen.\n• Kultureller Wandel zu höherem Datenbewusstsein: Die Transformation zu einer datengetriebenen, qualitätsbewussten Organisation erfordert einen kulturellen Wandel, der über rein technische oder prozessuale Änderungen hinausgeht.\n\n🛠️ ADVISORIs integrierter Change-Management-Ansatz:\n• Stakeholder-zentriertes Transformationsmodell: Wir entwickeln ein maßgeschneidertes Transformationsmodell, das alle relevanten Stakeholder frühzeitig einbezieht und deren spezifische Perspektiven, Bedenken und Anforderungen berücksichtigt.\n• Data Governance als Change Enabler: Etablierung klarer Data-Governance-Strukturen als Grundlage für den Transformationsprozess, mit definierten Rollen, Verantwortlichkeiten und Entscheidungswegen über Abteilungsgrenzen hinweg.\n• Mehrstufiger Implementierungsansatz: Umsetzung einer gestaffelten Implementierungsstrategie mit definierten Meilensteinen, Quick Wins und regelmäßiger Neubewertung, die sowohl regulatorische Fristen als auch organisatorische Absorptionsfähigkeit berücksichtigt.\n• Comprehensive Capability Building: Entwicklung eines umfassenden Programms zum Aufbau der erforderlichen Kompetenzen, das Schulungen, Wissenstransfer, Coaching und externe Expertise kombiniert und auf verschiedene Zielgruppen zugeschnitten ist.\n• Transformationsorientiertes Kommunikationskonzept: Implementation einer mehrschichtigen Kommunikationsstrategie, die den Wandel begleitet, Transparenz schafft, Orientierung bietet und aktive Beteiligung fördert – vom Executive Level bis zu den operativen Teams."
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
