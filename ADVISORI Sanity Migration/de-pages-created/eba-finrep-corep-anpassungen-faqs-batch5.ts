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
    console.log('Updating EBA FinRep COREP Anpassungen page with C-Level FAQs batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eba-finrep-corep-anpassungen' })
    
    if (!existingDoc) {
      throw new Error('Document "eba-finrep-corep-anpassungen" not found')
    }
    
    // Create new C-Level FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche Herausforderungen und Lösungsansätze gibt es bei der Integration neuer FinRep- und COREP-Anforderungen in bestehende Legacy-Systeme?",
        answer: "Die Integration neuer FinRep- und COREP-Anforderungen in gewachsene Legacy-Umgebungen stellt eine besondere Herausforderung dar, die strategische und taktische Lösungsansätze erfordert. Eine erfolgreiche Integration balanciert kurzfristige Compliance-Sicherung mit langfristigen Architekturzielen und minimiert operationelle Risiken während des Transformationsprozesses.\n\n🔄 Kernchallenges und Lösungsstrategien:\n• Datensilos und inkonsistente Definitionen: Legacy-Systeme verfügen oft über isolierte Datenhaltungen mit unterschiedlichen Definitionen gleicher Geschäftsobjekte. Die Implementierung eines zentralen Business Glossary mit einheitlichen Definitionen und Mapping-Regeln zu Legacy-Systemen schafft semantische Konsistenz.\n• Inflexible Datenstrukturen: Ältere Systeme bieten oft unzureichende Flexibilität für neue regulatorische Datenanforderungen. Eine Lösung ist die Implementierung einer Datenabstraktionsschicht, die zwischen Legacy-Systemen und Reporting-Anwendungen vermittelt und Datenstrukturen transformiert.\n• Fragmentierte Prozesse: Historisch gewachsene Prozesse sind häufig stark fragmentiert und manuell geprägt. Hier bietet Robotic Process Automation (RPA) eine pragmatische Möglichkeit, manuelle Schnittstellen zu automatisieren, ohne in Legacy-Systeme eingreifen zu müssen.\n• Limitierte Erweiterbarkeit: Legacy-Systeme lassen sich oft nur eingeschränkt anpassen. Ein Mikroservice-Ansatz ermöglicht die Implementierung neuer Funktionalitäten als separate Services, die über definierte APIs mit Legacy-Systemen kommunizieren.\n\n🛠️ Architektonische Implementierungsoptionen:\n• Daten-Hub-Architektur: Implementierung einer zentralen Datenplattform, die Daten aus verschiedenen Legacy-Systemen konsolidiert und für regulatorische Zwecke harmonisiert.\n• Staging-Area-Konzept: Etablierung einer Zwischenschicht, die Daten aus Legacy-Systemen extrahiert, transformiert und für regulatorische Anforderungen aufbereitet, ohne die Quellsysteme zu verändern.\n• Parallelsysteme mit Migrationsplan: Aufbau moderner Reporting-Lösungen parallel zu Legacy-Systemen mit einem schrittweisen Migrationsplan für Daten und Funktionalitäten.\n• API-Wrapping-Strategie: Kapselung von Legacy-Systemen durch API-Layer, die standardisierte Schnittstellen für moderne Reporting-Anwendungen bereitstellen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie sollten wir unsere Mitarbeiter optimal auf neue FinRep- und COREP-Anforderungen vorbereiten und befähigen?",
        answer: "Die erfolgreiche Implementierung neuer FinRep- und COREP-Anforderungen hängt entscheidend von der Befähigung und Motivation der beteiligten Mitarbeiter ab. Ein durchdachtes Enablement-Konzept verbindet fachliches und technisches Wissen mit Prozessverständnis und Soft Skills, um eine nachhaltige Kompetenzentwicklung zu gewährleisten.\n\n🧠 Ganzheitliche Kompetenzentwicklung für regulatorisches Reporting:\n• Integriertes Schulungskonzept: Entwicklung eines modularen Trainingsansatzes, der regulatorisches Fachwissen, methodische Kompetenzen und technische Fertigkeiten systematisch vermittelt und verschiedene Lernformate kombiniert.\n• Lernpfade nach Rollenmodell: Definition spezifischer Lernpfade für unterschiedliche Rollen im Meldeprozess (Datenlieferanten, Datenqualitätsverantwortliche, Reporting-Spezialisten, Systemadministratoren) mit maßgeschneiderten Inhalten.\n• Blended-Learning-Formate: Kombination von klassischen Präsenzschulungen mit digitalen Lernformaten, praktischen Workshops und On-the-Job-Training für maximalen Wissenstransfer und Anwendungsbezug.\n• Kontinuierliche Weiterbildung: Etablierung regelmäßiger Updates und Vertiefungsmodule, die neue regulatorische Entwicklungen aufgreifen und das Verständnis für Zusammenhänge vertiefen.\n\n🤝 Kulturelle und organisatorische Enablement-Faktoren:\n• Collaborative Learning Spaces: Schaffung physischer und virtueller Räume für kollaboratives Lernen und Wissensaustausch zwischen verschiedenen Teams und Fachbereichen.\n• Mentoring- und Coaching-Programme: Implementierung von Mentoring-Strukturen, in denen erfahrene Mitarbeiter ihr Wissen und ihre Erfahrung gezielt an weniger erfahrene Kollegen weitergeben.\n• Knowledge-Management-Systeme: Aufbau zentraler Wissensplattformen, die regulatorisches Know-how, Best Practices und Lessons Learned systematisch erfassen, strukturieren und zugänglich machen.\n• Communities of Practice: Förderung selbstorganisierter Fachgemeinschaften, in denen sich Mitarbeiter mit ähnlichen Aufgaben zu regulatorischen Themen austauschen und gemeinsam Lösungen entwickeln."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche Best Practices gibt es für effektive Stakeholder-Kommunikation bei der Implementierung neuer FinRep- und COREP-Anforderungen?",
        answer: "Eine effektive Stakeholder-Kommunikation ist ein kritischer Erfolgsfaktor bei der Implementierung neuer FinRep- und COREP-Anforderungen. Ein strategischer Kommunikationsansatz schafft Transparenz, fördert Akzeptanz und ermöglicht die aktive Einbindung aller relevanten Interessengruppen in den Implementierungsprozess.\n\n📋 Stakeholder-Management-Framework für regulatorische Projekte:\n• Systematische Stakeholder-Analyse: Umfassende Identifikation und Segmentierung aller internen und externen Stakeholder nach Einfluss, Interesse und Relevanz für den Implementierungserfolg.\n• Differenzierte Kommunikationsstrategien: Entwicklung zielgruppenspezifischer Kommunikationsansätze, die Inhalt, Format und Frequenz der Kommunikation an die Bedürfnisse und Perspektiven unterschiedlicher Stakeholder anpassen.\n• Kommunikations-Governance: Etablierung klarer Verantwortlichkeiten, Prozesse und Freigabewege für die Stakeholder-Kommunikation, die Konsistenz und Qualität der Kommunikationsinhalte sicherstellen.\n• Integrierter Kommunikationskalender: Planung und Koordination aller Kommunikationsaktivitäten in einem zentralen Kalender, der mit dem Projektplan synchronisiert ist und wichtige Meilensteine berücksichtigt.\n\n🗣️ Wirkungsvolle Kommunikationsformate und -inhalte:\n• Executive Briefings: Kompakte Informationspakete für Führungskräfte mit Fokus auf strategische Implikationen, Ressourcenbedarfe und Entscheidungspunkte.\n• Fachbereichs-Workshops: Interaktive Formate für Fachabteilungen, die detaillierte Einblicke in fachliche Anforderungen geben und konkrete Auswirkungen auf Prozesse und Systeme diskutieren.\n• Progress Dashboards: Visuelle Darstellung des Implementierungsfortschritts mit Key Performance Indicators, Meilensteinen und aktuellen Herausforderungen für regelmäßige Statusupdates.\n• FAQ-Repositories: Zentrale Sammlung häufig gestellter Fragen und Antworten, die kontinuierlich aktualisiert wird und als Referenzquelle für konsistente Informationen dient."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können wir die langfristige Nachhaltigkeit und Skalierbarkeit unserer FinRep- und COREP-Lösungen sicherstellen?",
        answer: "Die Sicherstellung langfristiger Nachhaltigkeit und Skalierbarkeit von FinRep- und COREP-Lösungen erfordert einen vorausschauenden Architekturansatz, der über kurzfristige Compliance-Anforderungen hinausgeht. Eine zukunftssichere Implementierung berücksichtigt sowohl technologische als auch organisatorische Dimensionen und schafft die Voraussetzungen für kontinuierliche Evolution.\n\n🏗️ Nachhaltige Architekturprinzipien:\n• Modularität und Entkopplung: Design der Reporting-Lösung in unabhängig aktualisierbare Komponenten mit klar definierten Schnittstellen, die selektive Erneuerung ohne Gesamtaustausch ermöglichen.\n• Skalierbare Datenarchitektur: Implementierung einer Dateninfrastruktur, die sowohl horizontale (Erweiterung um neue Datendomänen) als auch vertikale Skalierung (wachsende Datenvolumina und Nutzer) unterstützt.\n• Metadaten-getriebenes Design: Nutzung von Metadaten zur Steuerung von Datentransformationen, Berechnungen und Validierungen, um Anpassungen an neue Anforderungen durch Konfiguration statt Programmierung zu ermöglichen.\n• Cloud-Readiness: Konzeption der Lösungsarchitektur mit Blick auf potenzielle Cloud-Migration, um künftig von Skalierbarkeit, Flexibilität und innovativen Cloud-Services profitieren zu können.\n\n🔄 Organisatorische Nachhaltigkeitsfaktoren:\n• Wissensmanagement und -transfer: Etablierung systematischer Prozesse zur Dokumentation und Weitergabe kritischen Wissens, um personelle Abhängigkeiten zu reduzieren und kontinuierliche Kompetenzentwicklung zu fördern.\n• Selbstlernende Organisation: Schaffung von Strukturen für kontinuierliches Lernen und Anpassung an neue regulatorische Entwicklungen, einschließlich Feedback-Mechanismen und Lessons-Learned-Prozessen.\n• Balanced Governance: Entwicklung eines Governance-Modells, das Balance zwischen zentraler Steuerung und dezentraler Flexibilität schafft und sowohl Standardisierung als auch Agilität unterstützt.\n• Strategisches Ressourcenmanagement: Langfristige Planung von Ressourcen und Kompetenzen für die Weiterentwicklung der Reporting-Lösung, einschließlich Make-or-Buy-Strategien und Sourcing-Konzepten."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ EBA FinRep COREP Anpassungen C-Level FAQs batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
