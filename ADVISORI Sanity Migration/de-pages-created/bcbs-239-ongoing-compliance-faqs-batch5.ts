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
    console.log('Updating BCBS-239 Ongoing Compliance page with FAQs batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'bcbs-239-ongoing-compliance' })
    
    if (!existingDoc) {
      throw new Error('Document "bcbs-239-ongoing-compliance" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie hat sich die BCBS-239 Compliance in den letzten Jahren entwickelt und welche Trends sind für die Zukunft zu erwarten?",
        answer: "Die BCBS-239 Compliance hat seit ihrer Einführung 2013 eine bemerkenswerte Evolution durchlaufen – von einem regelbasierten Projekt-Ansatz hin zu einem strategischen, wertschöpfenden Enabler für datengetriebenes Risikomanagement. Diese Entwicklung wird sich in den kommenden Jahren weiter beschleunigen, mit signifikanten Auswirkungen auf die Anforderungen an nachhaltige Compliance.\n\n📈 Entwicklung und aktuelle Trends:\n• Von Projekt zu Prozess: Die anfängliche Projekt-orientierte Umsetzung wurde durch eine prozessorientierte, kontinuierliche Compliance-Kultur abgelöst, die in tägliche Abläufe integriert ist.\n• Steigender Automatisierungsgrad: Der Anteil automatisierter Kontrollen und Überwachungsmechanismen hat deutlich zugenommen, während manuelle Ad-hoc-Prozesse kontinuierlich reduziert wurden.\n• Konsolidierung der Governance: Führende Institute haben BCBS-239 Governance zunehmend in breitere Data-Governance- und Risikomanagement-Frameworks integriert, statt separate Strukturen zu unterhalten.\n• Erweiterte Methodenkompetenz: Sophistiziertere Ansätze zur Datenqualitätsmessung und Risikodaten-Aggregation haben einfachere Regel-basierte Verfahren ersetzt.\n• Intensivierter regulatorischer Fokus: Aufsichtsbehörden haben ihre Prüfungsmethodik verfeinert und setzen zunehmend auf datengetriebene Aufsichtsansätze mit höheren Erwartungen an die Nachweisfähigkeit.\n\n🔮 Zukunftstrends und strategische Implikationen:\n• Convergence of Compliance: Integration verschiedener regulatorischer Anforderungen (BCBS-239, DSGVO, BAIT, etc.) in gemeinsame Data Governance Frameworks für höhere Effizienz und Konsistenz.\n• KI-gestützte Compliance: Zunehmender Einsatz von Machine Learning und KI für Compliance-Monitoring, prädiktive Risikoerkennung und intelligente Datenqualitätsverbesserung.\n• Echtzeit-Compliance: Entwicklung von Real-time-Compliance-Monitoring mit unmittelbarem Feedback statt periodischer retrospektiver Berichte.\n• Modularisierung und API-fizierung: Aufbrechen monolithischer Compliance-Architekturen zugunsten flexibler, modularer Komponenten mit standardisierten Schnittstellen.\n• ESG-Integration: Erweiterung der BCBS-239-Prinzipien auf nichtfinanzielle Risiken, insbesondere im Bereich Umwelt, Soziales und Governance (ESG)."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Rolle spielt Data Lineage in der nachhaltigen BCBS-239 Compliance und wie kann sie effektiv implementiert werden?",
        answer: "Data Lineage ist ein fundamentaler Baustein nachhaltiger BCBS-239 Compliance, da sie die vollständige Transparenz und Nachvollziehbarkeit von Risikodaten über ihren gesamten Lebenszyklus hinweg gewährleistet. Eine robuste Data-Lineage-Implementierung ermöglicht nicht nur regulatorische Konformität, sondern schafft auch strategischen Mehrwert durch verbesserte Datengovernance und fundierte Entscheidungsfindung.\n\n🔍 Strategische Bedeutung von Data Lineage für BCBS-239:\n• Vertrauensfundament für Risikodaten: Schaffung einer nachvollziehbaren Herkunfts- und Transformationskette, die das Vertrauen in die Qualität und Integrität von Risikodaten stärkt.\n• Grundlage für Impact-Analysen: Ermöglichung präziser Auswirkungsanalysen bei Änderungen an Datenquellen, Transformationen oder Berechnungsmethoden.\n• Beschleunigung der Fehleranalyse: Drastische Reduzierung der Zeit zur Identifikation von Fehlerquellen durch transparente Visualisierung der Datenpfade und Abhängigkeiten.\n• Compliance-Nachweisbarkeit: Bereitstellung einer lückenlosen Dokumentation und Nachvollziehbarkeit für Aufsichtsbehörden und interne Kontrollfunktionen.\n• Wissensdemokratisierung: Abbau von Silos und Förderung des bereichsübergreifenden Verständnisses für Datenflüsse und Abhängigkeiten im Risikomanagement.\n\n⚙️ Implementierungsansatz für nachhaltige Data Lineage:\n• Mehrdimensionales Lineage-Modell: Implementierung von Lineage auf verschiedenen Abstraktionsebenen – von der Business-Ebene über die Anwendungs- und Prozessebene bis zur technischen Datenflusssebene.\n• Automatisierte Lineage-Erfassung: Nutzung von Tools zur automatischen Extraktion von Lineage-Informationen aus Datenbanken, ETL-Prozessen und Anwendungscode, ergänzt durch manuelle Einträge nur wo notwendig.\n• Kontextangereicherte Visualisierung: Entwicklung intuitiver, auf verschiedene Benutzergruppen zugeschnittener Visualisierungen, die technische Details mit geschäftlichem Kontext verbinden.\n• Integration in Governance-Workflows: Verankerung von Lineage-Analysen in Change-Management-, Compliance-Prüfungs- und Metadatenmanagement-Prozessen.\n• Evolutionäre Implementierung: Priorisierung von Lineage für kritische Risikokennzahlen und schrittweise Ausweitung auf weitere Datenbereiche basierend auf Risiko und Komplexität."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie stellt ADVISORI sicher, dass Ongoing Compliance-Maßnahmen auch bei organisatorischen Veränderungen, Fusionen oder Systemmigrationen nachhaltig bestehen bleiben?",
        answer: "Organisatorische Veränderungen, Fusionen und Systemmigrationen stellen besondere Herausforderungen für die Nachhaltigkeit der BCBS-239 Compliance dar. ADVISORI hat einen spezialisierten Ansatz entwickelt, der die Compliance-Kontinuität auch in Phasen signifikanter Transformation sicherstellt und gleichzeitig Chancen für strukturelle Verbesserungen nutzt.\n\n🏢 Strategie für Compliance-Kontinuität bei organisatorischem Wandel:\n• Compliance Transition Office: Etablierung einer dedizierten Funktion, die während Transformationsphasen die BCBS-239 Compliance überwacht und als Brücke zwischen bestehenden und neuen Strukturen fungiert.\n• Compliance-Impact-Assessment: Systematische Analyse der Auswirkungen organisatorischer Veränderungen auf alle BCBS-239 relevanten Komponenten – von Governance über Datenflüsse bis zu Kontrollen.\n• Frühe Compliance-Integration: Verankerung von BCBS-239 Anforderungen bereits in der Planungsphase von Reorganisationen oder Fusionen, nicht erst bei der Implementierung.\n• Knowledge Transfer Frameworks: Strukturierte Prozesse zur Weitergabe von Compliance-Wissen und -Verantwortlichkeiten bei Personalwechseln oder Umstrukturierungen.\n• Dual Responsibility Periods: Implementierung von Übergangsphasen mit geteilter Verantwortung zwischen alten und neuen Strukturen, um nahtlose Übergänge zu gewährleisten.\n\n🔄 Bewährte Praktiken für Compliance-Kontinuität bei Systemmigrationen:\n• Compliance-by-Design in Migrationsarchitektur: Integration von BCBS-239 Anforderungen als obligatorische Design-Prinzipien für neue Systemlandschaften.\n• Parallel Run mit Compliance-Validierung: Parallelbetrieb alter und neuer Systeme mit Fokus auf Validierung der Risikodaten-Konsistenz und Compliance-Kontinuität.\n• Migrations-Staging mit Compliance-Gates: Mehrstufiger Migrationsansatz mit definierten Compliance-Prüfpunkten als Voraussetzung für den Übergang zur nächsten Phase.\n• Lineage-Preservation: Besondere Aufmerksamkeit auf die Erhaltung der Datenherkunft und -transformation während der Migration, um Nachvollziehbarkeit zu gewährleisten.\n• Post-Migration Compliance Audit: Umfassende Überprüfung der BCBS-239 Compliance nach Abschluss der Migration mit besonderem Fokus auf unbeabsichtigte Abweichungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Rolle spielen Data Ownership und klare Verantwortlichkeiten für die nachhaltige BCBS-239 Compliance und wie etabliert man diese effektiv?",
        answer: "Klare Data Ownership und gut definierte Verantwortlichkeiten bilden das Fundament einer nachhaltigen BCBS-239 Compliance. Die Erfahrung zeigt, dass technische Lösungen ohne entsprechende organisatorische Verankerung langfristig scheitern. ADVISORI unterstützt Finanzinstitute dabei, eine effektive Verantwortungsstruktur zu etablieren, die sowohl regulatorische Anforderungen erfüllt als auch pragmatisch implementierbar ist.\n\n🔑 Prinzipien eines effektiven Ownership-Modells für BCBS-239:\n• Geschäftliche Verantwortung als Grundprinzip: Verankerung der primären Datenverantwortung in den Fachbereichen, die den Geschäftswert und Kontext der Daten am besten verstehen.\n• Klare Differenzierung von Rollen: Präzise Abgrenzung zwischen Data Owners (geschäftliche Verantwortung), Data Stewards (operative Qualitätssicherung) und Data Custodians (technische Verwaltung).\n• End-to-End-Verantwortung: Sicherstellung lückenloser Verantwortungsketten über den gesamten Datenlebenszyklus hinweg, insbesondere an Schnittstellen zwischen Abteilungen.\n• Entscheidungsautonomie mit Accountability: Ausstattung der Verantwortlichen mit ausreichenden Befugnissen und Ressourcen bei gleichzeitiger klarer Rechenschaftspflicht.\n• Governance-Verankerung: Integration des Ownership-Modells in die formale Governance-Struktur mit definierten Eskalationswegen und Entscheidungsgremien.\n\n🛠️ Implementierungsstrategien für nachhaltige Ownership-Strukturen:\n• Executive Sponsorship: Gewinnung hochrangiger Führungskräfte als sichtbare Befürworter des Ownership-Modells, um organisatorische Akzeptanz zu fördern.\n• Ownership Maturity Assessment: Systematische Bewertung der aktuellen Ownership-Reife als Ausgangspunkt für gezielte Verbesserungsmaßnahmen.\n• Integrierte Stellenbeschreibungen: Formale Verankerung von Datenverantwortlichkeiten in offiziellen Stellenprofilen und Leistungsbewertungen, nicht nur als informelle Zusatzaufgabe.\n• Communities of Practice: Etablierung funktionsübergreifender Netzwerke von Data Owners und Stewards für Wissensaustausch und Best-Practice-Sharing.\n• Ownership-Tools und -Dashboards: Bereitstellung dedizierter Tools zur Visualisierung und Verwaltung von Verantwortlichkeiten, die Transparenz schaffen und Zusammenarbeit fördern."
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
