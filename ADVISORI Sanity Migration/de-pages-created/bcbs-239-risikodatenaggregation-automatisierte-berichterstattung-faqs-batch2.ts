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
    console.log('Updating BCBS-239 Risikodatenaggregation & Automatisierte Berichterstattung page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'bcbs-239-risikodatenaggregation-automatisierte-berichterstattung' })
    
    if (!existingDoc) {
      throw new Error('Document "bcbs-239-risikodatenaggregation-automatisierte-berichterstattung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie geht ADVISORI mit der Integration heterogener Datenquellen bei der Risikodatenaggregation gemäß BCBS-239 um?",
        answer: "Die Integration heterogener Datenquellen stellt eine der größten Herausforderungen bei der Implementierung BCBS-239-konformer Risikodatenaggregation dar. ADVISORI hat einen spezialisierten Ansatz entwickelt, der diese Komplexität systematisch adressiert und eine konsistente, nachvollziehbare Aggregation ermöglicht.\n\n🔗 Strategische Integrationsansätze von ADVISORI:\n• Domain-orientierte Datenintegration: Anstatt einer monolithischen Zentralisierung setzen wir auf einen domänenorientierten Ansatz, der Daten dort integriert, wo die fachliche Expertise liegt, und gleichzeitig übergreifende Governance sicherstellt.\n• Semantische Datenmodellierung: Implementierung eines übergreifenden semantischen Datenmodells, das unterschiedliche Datenstrukturen und -definitionen durch standardisierte Bedeutungszusammenhänge überbrückt und eine konsistente Interpretation ermöglicht.\n• Hybride Integrationsstrategie: Kombination virtueller (Data Virtualization) und physischer Integrationsansätze (Data Lake/Data Warehouse), je nach Anforderungen an Performanz, Aktualität und Historisierung der Daten.\n• Progressive Harmonisierung: Statt einer abrupten Vollintegration verfolgen wir einen iterativen Ansatz, der schrittweise kritische Datendomänen harmonisiert und dabei kontinuierlich Geschäftswert liefert.\n\n🛠️ Technische Enabler für heterogene Datenintegration:\n• Master Data Management: Etablierung eines konsistenten Master Data Managements für kritische Referenzdaten wie Gegenparteien, Produkte und Organisationsstrukturen als Basis für konsistente Aggregationen.\n• Enterprise Metadata Repository: Implementierung eines zentralen Metadaten-Repositories, das Datenstrukturen, Transformationen und Lineage transparent dokumentiert und als Single Source of Truth für Datendefinitionen dient.\n• API-basierte Integrationsschicht: Entwicklung einer flexiblen API-Infrastruktur, die standardisierte Zugriffsmechanismen auf heterogene Datenquellen bietet und gleichzeitig Datenabstraktionen und -transformationen kapselt.\n• Datenqualitäts-Firewall: Integration von Qualitätskontrollen direkt in die Integrationsschicht, um Datenqualitätsprobleme frühzeitig zu erkennen und zu adressieren, bevor sie in die Aggregationsprozesse gelangen.\n\nDieser mehrdimensionale Integrationsansatz ermöglicht es Finanzinstituten, die Komplexität heterogener Datenlandschaften zu beherrschen und gleichzeitig die BCBS-239-Anforderungen an Konsistenz, Nachvollziehbarkeit und Genauigkeit der Risikodatenaggregation zu erfüllen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche Rolle spielt Datenlineage in der BCBS-239 Risikodatenaggregation und wie unterstützt ADVISORI deren Implementierung?",
        answer: "Datenlineage ist ein zentrales Element der BCBS-239-Konformität und bildet das Rückgrat für Transparenz, Nachvollziehbarkeit und Vertrauenswürdigkeit in der Risikodatenaggregation. ADVISORI hat einen ganzheitlichen Ansatz entwickelt, der über eine rein technische Lineage-Implementierung hinausgeht und die organisatorischen, prozessualen und technologischen Dimensionen integriert.\n\n📋 Mehrdimensionale Datenlineage im ADVISORI-Ansatz:\n• End-to-End Lineage: Dokumentation des vollständigen Lebenszyklus von Risikodaten – von der Erfassung in Quellsystemen über Transformationen und Berechnungen bis zur Verwendung in Risikoberichten – mit lückenloser Nachvollziehbarkeit auf granularer Ebene.\n• Vertikale Lineage-Integration: Verbindung der technischen Datenlineage (physische Datenflüsse und Transformationen) mit der semantischen Lineage (Geschäftsdefinitionen und -logik) und der organisatorischen Lineage (Verantwortlichkeiten und Prozessschritte).\n• Business Context Enrichment: Anreicherung der technischen Lineage mit geschäftsrelevantem Kontext, der die Interpretation und Nutzung der Lineage-Informationen für Fachexperten und Auditoren erleichtert.\n• Dynamische Lineage-Erfassung: Implementierung von Mechanismen zur automatischen Erfassung und Aktualisierung von Lineage-Informationen als integraler Bestandteil der Datenprozesse, anstatt einer statischen Dokumentation.\n\n⚙️ Methodische und technologische Umsetzung:\n• Metamodell-basierter Ansatz: Entwicklung eines umfassenden Metamodells für Datenlineage, das alle relevanten Dimensionen (technisch, semantisch, organisatorisch) in einem konsistenten Framework integriert.\n• Automatisierte Lineage-Erfassung: Implementierung von Tools und Prozessen zur automatischen Extraktion von Lineage-Informationen aus Datenintegrationstools, ETL-Prozessen, Datenbanken und Anwendungen.\n• Graph-basierte Lineage-Visualisierung: Einsatz spezialisierter Graph-Technologien zur intuitiven Darstellung komplexer Datenflüsse und Abhängigkeiten, die sowohl detaillierte Analysen als auch Überblicksdarstellungen ermöglichen.\n• Lineage-getriebene Impaktanalyse: Integration der Lineage in Change-Management-Prozesse, um Auswirkungen von Änderungen auf Risikodaten und -berichte proaktiv zu identifizieren und zu bewerten.\n\nDurch diesen ganzheitlichen Ansatz schafft ADVISORI nicht nur die Grundlage für BCBS-239-Konformität im Bereich der Datenlineage, sondern transformiert Lineage von einer regulatorischen Notwendigkeit zu einem strategischen Asset für verbessertes Datenmanagement, effektiveres Change Management und fundierte Geschäftsentscheidungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie unterstützt ADVISORI Finanzinstitute bei der Etablierung einer geeigneten Governance-Struktur für die BCBS-239 Risikodatenaggregation?",
        answer: "Eine robuste Governance-Struktur ist das Fundament einer erfolgreichen BCBS-239-konformen Risikodatenaggregation und automatisierten Berichterstattung. ADVISORI hat einen umfassenden Governance-Ansatz entwickelt, der speziell auf die Anforderungen des Prinzips 1 (Governance) und dessen Wechselwirkungen mit den übrigen BCBS-239 Prinzipien zugeschnitten ist.\n\n🏛️ Kernelemente des ADVISORI Governance-Frameworks:\n• Multi-Layer-Governance-Modell: Etablierung einer mehrstufigen Governance-Struktur, die strategische Führung (Board-Level), taktische Steuerung (Management-Level) und operative Umsetzung (Fachbereichs-Level) nahtlos integriert und klare Entscheidungswege definiert.\n• Föderiertes Data-Ownership: Implementation eines balancierten Modells, das zentrale Steuerung und Standards mit dezentraler Verantwortung in den Fachdomänen verbindet und dem Prinzip \"local ownership, global governance\" folgt.\n• Risk Data Stewardship: Etablierung dedizierter Rollen (Data Stewards) als Brücke zwischen Business und IT, die fachliche Expertise mit Datenmanagement-Kompetenz verbinden und als Qualitätsgaranten für Risikodaten fungieren.\n• Integriertes Metriken-Framework: Entwicklung eines umfassenden Sets von Governance-KPIs, die den Reifegrad und die Effektivität der Risikodaten-Governance messbar machen und kontinuierliche Verbesserung ermöglichen.\n\n📝 Operative Verankerung der Governance:\n• Policy-Framework: Entwicklung eines strukturierten Sets von Richtlinien, Standards und Verfahren, die klare Regeln für Risikodatenmanagement definieren und in der Organisation verankern.\n• Governance-Gremien: Etablierung spezialisierter Komitees und Arbeitsgruppen mit klaren Mandaten für die Steuerung und Überwachung der Risikodatenaggregation auf verschiedenen Ebenen der Organisation.\n• Kontrollfunktionen: Integration der Risikodaten-Governance in bestehende Kontrollsysteme (3 Lines of Defense) mit spezifischen Kontrollmechanismen für Datenqualität, -integrität und -konsistenz.\n• Kontinuierliches Monitoring: Implementierung eines laufenden Überwachungsprozesses, der die Einhaltung von Governance-Vorgaben sicherstellt und Abweichungen frühzeitig identifiziert.\n\nDer ADVISORI-Ansatz zur Governance-Etablierung verbindet bewährte Governance-Prinzipien mit den spezifischen Anforderungen der BCBS-239 und berücksichtigt dabei die individuelle Organisationsstruktur, Kultur und Reife des jeweiligen Finanzinstituts. Wir schaffen nicht nur formale Strukturen, sondern begleiten den kulturellen Wandel hin zu einer datenzentrischen Organisation, in der qualitätsgesicherte Risikodaten als strategischer Wert erkannt und entsprechend gesteuert werden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie gestaltet ADVISORI den Übergang von manuellen zu vollautomatisierten Prozessen in der regulatorischen Berichterstattung gemäß BCBS-239?",
        answer: "Der Übergang von manuellen zu vollautomatisierten Prozessen in der regulatorischen Berichterstattung stellt eine komplexe Transformation dar, die weit über technologische Aspekte hinausgeht. ADVISORI verfolgt einen ganzheitlichen Transformationsansatz, der technische, prozessuale, organisatorische und kulturelle Dimensionen integriert und einen kontrollierten, schrittweisen Übergang ermöglicht.\n\n🔄 Transformationsansatz von ADVISORI:\n• Assessment-basierte Priorisierung: Systematische Analyse und Bewertung bestehender Prozesse hinsichtlich Automatisierungspotenzial, Komplexität, Risiko und Wertbeitrag als Basis für eine fundierte Priorisierung und Roadmap-Entwicklung.\n• Parallelbetrieb mit schrittweiser Migration: Implementierung einer kontrollierten Übergangsstrategie mit Parallelbetrieb von manuellen und automatisierten Prozessen, die sukzessive Migration und kontinuierliche Validierung ermöglicht.\n• Evolutionäre Automation: Statt eines abrupten Wechsels verfolgen wir einen mehrstufigen Ansatz – von assisted automation (Teilautomatisierung mit manueller Validierung) über supervised automation (vollautomatisiert mit Überwachung) bis zu autonomous automation (selbstüberwachende, adaptive Systeme).\n• Change Management und Skill Transition: Gezielte Begleitung der organisatorischen Transformation mit strukturiertem Change Management und Umschulung von Mitarbeitern von manuellen Tätigkeiten zu höherwertigen analytischen und überwachenden Funktionen.\n\n⚙️ Methodische Umsetzung der Automatisierungstransformation:\n• Process Mining & Optimization: Einsatz von Process-Mining-Techniken zur detaillierten Analyse bestehender Prozesse, Identifikation von Ineffizienzen und Optimierungspotentialen vor der Automatisierung.\n• Modulare Automatisierungsarchitektur: Entwicklung einer flexiblen, modularen Architektur, die schrittweise Automatisierung einzelner Prozesskomponenten ermöglicht und gleichzeitig die Integrität des Gesamtprozesses sicherstellt.\n• Qualitäts- und Konformitätssicherung: Implementation eines robusten Validierungsframeworks, das die Äquivalenz und Qualität der Ergebnisse zwischen manuellen und automatisierten Prozessen kontinuierlich überprüft und dokumentiert.\n• Wissenstransfer und -konservierung: Systematische Erfassung und Dokumentation des impliziten Expertenwissens aus manuellen Prozessen und dessen Integration in automatisierte Systeme und Validierungsregeln.\n\nDieser umfassende Transformationsansatz ermöglicht Finanzinstituten einen kontrollierten, risikominimierten Übergang zu vollautomatisierten Berichtsprozessen, der nicht nur die BCBS-239-Compliance sicherstellt, sondern auch erhebliche Effizienzgewinne realisiert und gleichzeitig die Organisation auf dem Weg zu einer datengetriebenen Arbeitsweise begleitet."
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
