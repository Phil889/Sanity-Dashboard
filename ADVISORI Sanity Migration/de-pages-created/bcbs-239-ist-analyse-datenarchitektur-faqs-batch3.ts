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
    console.log('Updating BCBS-239 IST-Analyse Datenarchitektur page with Executive FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'bcbs-239-ist-analyse-datenarchitektur' })
    
    if (!existingDoc) {
      throw new Error('Document "bcbs-239-ist-analyse-datenarchitektur" not found')
    }
    
    // Create new Executive FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie integriert ADVISORI die Bewertung von Datensicherheits- und Zugriffskontrollen in die BCBS-239 Datenarchitektur-Analyse?",
        answer: "Datensicherheit und Zugriffskontrollen sind nicht nur regulatorische Anforderungen, sondern fundamentale Elemente einer robusten Risikodatenarchitektur. Unsere integrierte Analyse betrachtet diese Aspekte als integralen Bestandteil der Gesamtarchitektur und nicht als separate Compliance-Übung, was einen ganzheitlichen Sicherheitsansatz ermöglicht.\n\n🔐 Integration von Sicherheitsaspekten in die Datenarchitektur-Analyse:\n• Architektonische Verankerung: Bewertung, inwieweit Sicherheits- und Zugriffskontrollmechanismen nativ in die Datenarchitektur integriert sind versus nachträgliche Implementierungen.\n• Granularität der Zugriffskontrollen: Analyse der Feinkörnigkeit von Zugriffsrechten auf verschiedenen Ebenen – von Systemen über Datenmodelle bis zu individuellen Datenelementen.\n• Konsistenz des Sicherheitsmodells: Bewertung der Einheitlichkeit von Sicherheitskonzepten über verschiedene Systemgrenzen und Datenflüsse hinweg.\n• Nachvollziehbarkeit und Audit: Untersuchung der Logging- und Audit-Mechanismen für Datenzugriffe und -veränderungen im Kontext der End-to-End Datenlineage.\n• Notfallzugriffsprozesse: Evaluation von Prozessen für kontrollierten Notfallzugriff auf kritische Risikodaten in Krisensituationen.\n\n🛡️ BCBS-239-spezifische Sicherheitsaspekte:\n• Prinzip 1 (Governance): Bewertung der klaren Zuweisung von Verantwortlichkeiten für Datensicherheit und Zugriffskontrollen im Governance-Framework.\n• Prinzip 2 (Architektur): Integration von Sicherheitsmechanismen als integraler Bestandteil der Datenarchitektur und -infrastruktur.\n• Prinzip 3 (Genauigkeit und Integrität): Schutz vor unbefugten Datenänderungen durch angemessene Zugriffskontrollen und Änderungsmanagement.\n• Prinzip 11 (Aufsichtsrechtliche Überprüfung): Nachweisfähigkeit der Sicherheitsmaßnahmen gegenüber regulatorischen Anforderungen.\n\n📊 Methodischer Ansatz zur Sicherheitsintegration:\n• Security-by-Design Assessment: Bewertung, inwieweit Sicherheitsaspekte von Beginn an in die Architekturentwicklung integriert wurden.\n• Berechtigungsmatrix-Analyse: Systematische Überprüfung der Zugriffskontrollsysteme gegen regulatorische Anforderungen und Best Practices.\n• Sicherheitslücken-Mapping: Identifikation von Sicherheits-Gaps und deren Zuordnung zu spezifischen BCBS-239 Prinzipien und Architekturkomponenten.\n• Risikobasierte Priorisierung: Bewertung und Priorisierung identifizierter Sicherheitslücken nach regulatorischem Impact und betrieblichem Risiko."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie unterstützt ADVISORI Finanzinstitute bei der Integration von Legacy-Systemen in eine BCBS-239-konforme Datenarchitektur?",
        answer: "Legacy-Systeme stellen eine der größten Herausforderungen für die BCBS-239 Compliance dar, da sie oft kritische Risikodaten enthalten, aber nicht für moderne Integrationsanforderungen konzipiert wurden. Unser pragmatischer Ansatz fokussiert auf nachhaltige Integration statt riskanter Komplettablösung und schafft eine tragfähige Balance zwischen Innovation und Stabilität.\n\n🔄 Strategische Ansätze zur Legacy-Integration:\n• Datenorientiertheit vor Systemablösung: Wir fokussieren primär auf die Integration der Risikodaten, nicht auf die vollständige Modernisierung aller Legacy-Systeme, was Zeit und Ressourcen spart.\n• Entkopplungsstrategien: Entwicklung von Mechanismen zur Isolation kritischer Legacy-Systeme durch standardisierte Schnittstellen, die eine flexible Integration ermöglichen.\n• Abstraktionsschichten: Implementierung von Middleware und Data Virtualization Layers, die Legacy-Daten in modernen Formaten und Schnittstellen verfügbar machen.\n• Hybride Architekturmuster: Kombination bestehender Legacy-Komponenten mit modernen Microservices und API-basierten Zugriffsschichten.\n• Inkrementelle Modernisierung: Stufenweise Transformation kritischer Legacy-Komponenten bei gleichzeitiger Aufrechterhaltung der operativen Stabilität.\n\n🛠️ Praktische Integrationsmaßnahmen für Legacy-Systeme:\n• Legacy Wrapper Development: Entwicklung spezialisierter Adapter und Wrapper, die standardisierte Zugriffsmöglichkeiten auf Legacy-Systeme bieten.\n• Batch-to-Real-Time Transformation: Umwandlung batchorientierter Legacy-Prozesse in nahezu Echtzeit-Datenflüsse für zeitkritische Risikodaten.\n• Data Staging und Konsolidierung: Einrichtung von Zwischenschichten zur Extraktion, Transformation und Qualitätssicherung von Legacy-Daten.\n• Metadaten-Anreicherung: Ergänzung von Legacy-Daten um kritische Metainformationen zur Unterstützung der End-to-End Datenlineage.\n• Legacy Code Analysis: Gezielte Analyse kritischer Legacy-Komponenten zur Identifikation und Dokumentation impliziter Geschäftslogik und Datenabhängigkeiten.\n\n📈 Erfolgsfaktoren für nachhaltige Legacy-Integration:\n• Pragmatischer Modernisierungsansatz: Fokussierung auf die kritischsten Komponenten statt flächendeckender Erneuerung mit hohem Implementierungsrisiko.\n• Risikoorientierte Priorisierung: Identifikation und vorrangige Behandlung der Legacy-Systeme mit höchster Relevanz für Risikodatenaggregation und -reporting.\n• Knowledge Transfer: Systematische Dokumentation und Wissenstransfer zu Legacy-Systemen, um kritisches Know-how zu sichern und Abhängigkeiten zu reduzieren.\n• Parallelbetrieb-Management: Entwicklung klarer Strategien für die Koexistenz von Legacy- und neuen Systemen während der Transformationsphase."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche Best Practices empfiehlt ADVISORI für die Governance und das Change Management in BCBS-239 Datenarchitektur-Transformationsprogrammen?",
        answer: "Der Erfolg von BCBS-239 Datenarchitektur-Transformationen hängt maßgeblich von effektiver Governance und durchdachtem Change Management ab. Unsere Erfahrung zeigt, dass technische Exzellenz ohne entsprechende organisatorische Verankerung selten zu nachhaltiger Compliance führt. Wir haben bewährte Praktiken entwickelt, die beide Dimensionen wirksam integrieren.\n\n🔄 Governance-Best-Practices für Datenarchitektur-Transformationen:\n• Multilevel Governance-Struktur: Etablierung eines abgestuften Governance-Modells mit strategischer Steuerung auf C-Level, taktischer Koordination auf Bereichsleiterebene und operativer Umsetzungskontrolle.\n• Klare Entscheidungsstrukturen: Definition transparenter Entscheidungsprozesse mit abgegrenzten Kompetenzen und Eskalationswegen für architekturrelevante Entscheidungen.\n• Integrierte Daten-Governance: Verankerung von Datenqualitäts- und Architekturverantwortung in einem kohärenten Governance-Framework statt isolierter Parallelstrukturen.\n• Compliance-Integration: Systematische Einbindung der Compliance-Funktion in architekturrelevante Entscheidungsprozesse zur frühzeitigen Berücksichtigung regulatorischer Anforderungen.\n• Metriken-basierte Steuerung: Implementierung messbarerer KPIs für die Datenarchitektur-Transformation mit regelmäßigem Reporting an relevante Stakeholder.\n\n👥 Change-Management-Strategien für nachhaltige Transformation:\n• Stakeholder-spezifische Kommunikation: Zielgruppenorientierte Aufbereitung der Transformationsziele und -maßnahmen für verschiedene Ebenen – von der Geschäftsleitung bis zu operativen Teams.\n• Early Adopter Strategie: Identifikation und gezielte Einbindung progressiver Fachbereiche als Vorreiter, die Vorteile der neuen Architektur demonstrieren können.\n• Capability Building: Systematischer Aufbau erforderlicher Kompetenzen durch gestaffelte Schulungs- und Awareness-Programme parallel zur technischen Transformation.\n• Quick Win Management: Identifikation und prioritäre Umsetzung schnell realisierbarer Verbesserungen mit hoher Sichtbarkeit, um Momentum und Akzeptanz zu schaffen.\n• Transformations-Roadshow: Regelmäßige interaktive Formate zum Austausch über Fortschritte, Erfolge und Herausforderungen der Transformation.\n\n📊 Erfolgsrelevante Governance-Strukturen und -Rollen:\n• Architecture Review Board: Etablierung eines spezialisierten Gremiums für die Bewertung architekturrelevanter Entscheidungen im BCBS-239 Kontext.\n• BCBS-239 Transformation Office: Zentrale Koordinationsstelle, die Compliance-Perspektive, Architektur-Expertise und Change Management-Kompetenz integriert.\n• Datendomänen-Verantwortliche: Benennung klarer Verantwortlicher für abgegrenzte Risikodaten-Domänen mit definierten Qualitäts- und Architekturverantwortlichkeiten.\n• Senior Executive Sponsors: Verankerung der Transformation auf höchster Managementebene durch dedizierte Executive Sponsors mit klarem Commitment."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie berücksichtigt die ADVISORI IST-Analyse der Datenarchitektur die wachsenden Anforderungen an Flexibilität und Agilität bei gleichzeitiger Einhaltung der BCBS-239 Vorgaben?",
        answer: "Die Herausforderung moderner Datenarchitekturen liegt darin, regulatorische Konformität mit der notwendigen Flexibilität für sich wandelnde Geschäftsanforderungen zu verbinden. Unsere IST-Analyse evaluiert nicht nur statische Compliance-Aspekte, sondern bewertet explizit die Anpassungsfähigkeit der Architektur im Kontext dynamischer regulatorischer und geschäftlicher Anforderungen.\n\n🔄 Bewertungsdimensionen für Flexibilität und Agilität:\n• Architektonische Adaptivität: Analyse der Fähigkeit der bestehenden Architektur, neue Datenquellen, Risikotypen und regulatorische Anforderungen ohne signifikante Umbauten zu integrieren.\n• Modifikationsaufwand: Bewertung des zeitlichen und ressourcenbezogenen Aufwands für typische Änderungen wie neue Reports, zusätzliche Datenquellen oder Methodikänderungen.\n• Entkopplungsgrad: Untersuchung der Abhängigkeiten zwischen Architekturkomponenten und deren Auswirkungen auf die Änderungsflexibilität.\n• Skalierbarkeit: Analyse der Kapazitätsgrenzen und Erweiterungsmöglichkeiten für wachsende Datenvolumina und Verarbeitungsanforderungen.\n• Time-to-Market: Evaluation der Durchlaufzeiten für typische Änderungen von der Anforderung bis zur produktiven Umsetzung.\n\n🔍 BCBS-239-konforme Flexibilitätsmechanismen:\n• Parameter-basierte Steuerung: Identifikation von Potentialen zur Verlagerung von Logik aus dem Code in konfigurierbare Parameter für schnellere Anpassungen.\n• Modulare Architekturmuster: Bewertung des Modularitätsgrads der aktuellen Architektur und Potenziale für verbesserte Komponentenabgrenzung.\n• Standardisierte Schnittstellen: Analyse des Standardisierungsgrads von Schnittstellen für vereinfachte Integration neuer Komponenten.\n• Metadaten-gesteuerte Verarbeitung: Untersuchung von Möglichkeiten zur verstärkten Nutzung von Metadaten für flexible Datenverarbeitung und -transformation.\n• Automatisierte Testbarkeit: Bewertung der Testautomatisierung als Grundlage für schnellere und risikoärmere Änderungen.\n\n🚀 Best Practices zur Steigerung von Agilität bei BCBS-239-Compliance:\n• Regulatory Change Management: Entwicklung dedizierter Prozesse für die systematische Bewertung und Umsetzung regulatorischer Änderungen.\n• Experimentier-Umgebungen: Schaffung von Sandboxes für die risikofreie Erprobung neuer Architekturkonzepte vor der produktiven Implementierung.\n• DevOps-Integration: Bewertung der aktuellen DevOps-Reife und Potenziale für beschleunigte Deployment-Zyklen bei gleichzeitiger Compliance-Sicherung.\n• Innovation Labs: Etablierung spezialisierter Teams für die Evaluierung und Integration innovativer Technologien in die Risikodatenarchitektur.\n• Minimum Viable Compliance: Identifikation von Möglichkeiten für inkrementelle Compliance-Implementierungen mit prioritärer Adressierung kritischer Anforderungen."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new Executive FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ Executive FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
