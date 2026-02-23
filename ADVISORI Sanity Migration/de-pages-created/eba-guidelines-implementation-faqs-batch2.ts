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
    console.log('Updating EBA Guidelines Implementation page with C-Level FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eba-guidelines-implementation' })
    
    if (!existingDoc) {
      throw new Error('Document "eba-guidelines-implementation" not found')
    }
    
    // Create new C-Level FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können Finanzinstitute die oft komplexen technischen Anforderungen der EBA-Richtlinien effizient in ihre IT-Landschaft integrieren und dabei Legacy-Systeme berücksichtigen?",
        answer: "Die technische Implementierung von EBA-Richtlinien stellt für viele Finanzinstitute eine besondere Herausforderung dar, da sie häufig mit komplexen, historisch gewachsenen IT-Landschaften und Legacy-Systemen arbeiten müssen. Eine strategisch durchdachte technische Integration ist entscheidend, um sowohl regulatorische Compliance zu gewährleisten als auch langfristige IT-Effizienz zu erreichen.\n\n💻 Strategien für die technische Integration in heterogene IT-Landschaften:\n• Modulare Architekturansätze: Implementieren Sie regulatorische Anforderungen in flexiblen, wiederverwendbaren Modulen, die in verschiedene Systemlandschaften integriert werden können, statt monolithische Insellösungen zu schaffen.\n• API-First-Strategie: Entwickeln Sie standardisierte Schnittstellen zwischen regulatorischen Funktionen und Legacy-Systemen, um Datenflüsse zu optimieren und zukünftige Änderungen zu erleichtern.\n• Daten-Virtualisierung: Nutzen Sie moderne Daten-Virtualisierungstechnologien, um regulatorisch relevante Daten aus verschiedenen Quellsystemen zu aggregieren, ohne physische Datenreplikation.\n• Microservices-Architekturen: Kapseln Sie regulatorische Funktionen in unabhängige Microservices, die leichter wartbar, skalierbar und an regulatorische Änderungen anpassbar sind.\n\n🔄 Management des Legacy-System-Risikos:\n• Risikoorientierte Modernisierungsstrategie: Priorisieren Sie die Modernisierung von Legacy-Komponenten basierend auf ihrem regulatorischen Risikoprofil und ihrer strategischen Bedeutung.\n• Systematische Datenqualitätsverbesserung: Etablieren Sie kontinuierliche Prozesse zur Verbesserung der Datenqualität in Legacy-Systemen, da diese oft die größte Herausforderung für die regulatorische Compliance darstellen.\n• Hybride Technologieansätze: Kombinieren Sie etablierte und moderne Technologien, um eine Balance zwischen Stabilität und Innovation zu finden, z.B. durch Einsatz von Container-Technologien für Legacy-Anwendungen.\n• Regulatorische Sandboxes: Schaffen Sie isolierte Umgebungen für die Erprobung neuer regulatorischer Lösungen, bevor diese in die Produktionsumgebung integriert werden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Rolle spielt das Change Management bei der erfolgreichen Implementierung von EBA-Richtlinien und wie können wir sicherstellen, dass unsere Mitarbeiter die neuen Anforderungen effektiv umsetzen?",
        answer: "Change Management ist ein oft unterschätzter, aber entscheidender Erfolgsfaktor bei der Implementierung von EBA-Richtlinien. Während der technische und prozessuale Aspekt häufig im Vordergrund steht, scheitern viele Implementierungen letztlich an unzureichendem Change Management und mangelnder kultureller Integration. Eine ganzheitliche Change-Strategie ist essentiell, um nachhaltige Compliance zu gewährleisten.\n\n🔄 Strategische Dimensionen des regulatorischen Change Managements:\n• Kulturelle Transformation: Entwickeln Sie eine positive Compliance-Kultur, die regulatorische Anforderungen nicht als Hindernis, sondern als Chance für bessere Geschäftspraktiken versteht und fördert.\n• Stakeholder-Management: Identifizieren und involvieren Sie frühzeitig alle von den Änderungen betroffenen Gruppen, von der Geschäftsleitung bis zu operativen Mitarbeitern, um Widerstände zu minimieren.\n• Kommunikationsstrategie: Etablieren Sie eine transparente, kontinuierliche Kommunikation, die nicht nur über Änderungen informiert, sondern auch deren Sinn, Zweck und Vorteile vermittelt.\n• Kapazitätsaufbau: Schaffen Sie die notwendigen Ressourcen und Kompetenzen für die Umsetzung der Änderungen, durch gezielte Schulungen, Mentoring und Wissenstransfer.\n\n👥 Praktische Implementierungsansätze:\n• Change-Readiness-Assessment: Evaluieren Sie systematisch die Bereitschaft und Fähigkeit Ihrer Organisation, die anstehenden Änderungen zu absorbieren, und passen Sie Ihre Change-Strategie entsprechend an.\n• Change-Champions-Netzwerk: Etablieren Sie ein Netzwerk von Multiplikatoren aus verschiedenen Unternehmensbereichen, die als Vorbilder und Botschafter für die Veränderungen fungieren.\n• Integrierte Lernarchitektur: Entwickeln Sie ein mehrstufiges Lernkonzept, das formale Schulungen mit praxisnahem Coaching, Selbstlernressourcen und kollegialem Austausch kombiniert.\n• Kontinuierliches Feedback: Implementieren Sie Mechanismen für regelmäßiges Feedback zur Wirksamkeit der Veränderungen und nutzen Sie diese Erkenntnisse für kontinuierliche Verbesserungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir die Kosten und den Ressourcenaufwand für die Implementierung neuer EBA-Richtlinien optimieren, ohne die Compliance-Qualität zu beeinträchtigen?",
        answer: "Die Optimierung von Kosten und Ressourcenaufwand bei gleichzeitiger Gewährleistung hoher Compliance-Qualität ist eine zentrale Herausforderung bei der Implementierung von EBA-Richtlinien. Ein strategischer, risikoorientierter Ansatz ermöglicht es, Ressourcen effizient einzusetzen und gleichzeitig regulatorische Anforderungen vollständig zu erfüllen.\n\n💰 Strategische Kostenoptimierung durch intelligente Ressourcenallokation:\n• Risikoorientierte Priorisierung: Fokussieren Sie Ihre Ressourcen auf Bereiche mit hohem regulatorischem Risiko und strategischer Bedeutung, statt alle Aspekte mit gleicher Intensität zu behandeln.\n• Automatisierungsstrategie: Identifizieren Sie systematisch Prozesse mit hohem manuellen Aufwand und entwickeln Sie eine gezielte Automatisierungsstrategie, die langfristige Effizienzgewinne sichert.\n• Standardisierung und Wiederverwendbarkeit: Entwickeln Sie wiederverwendbare Compliance-Komponenten (Prozesse, Kontrollen, Technologien), die für verschiedene regulatorische Anforderungen genutzt werden können.\n• Sourcing-Optimierung: Evaluieren Sie systematisch, welche Implementierungsaktivitäten intern durchgeführt werden sollten und wo externe Expertise oder Technologiepartner Kosten-/Qualitätsvorteile bieten.\n\n🛠️ Operative Effizienzsteigerung im Implementierungsprozess:\n• Agile Implementierungsmethodik: Nutzen Sie agile Methoden, um schnell Ergebnisse zu liefern, Feedback zu integrieren und Fehlentwicklungen frühzeitig zu korrigieren.\n• Integriertes Projektportfoliomanagement: Koordinieren Sie verschiedene regulatorische Initiativen in einem integrierten Portfolio, um Synergien zu nutzen und Redundanzen zu vermeiden.\n• Wissensmanagement und Skill-Transfer: Etablieren Sie systematisches Wissensmanagement, um den Kompetenzaufbau zu beschleunigen und die Abhängigkeit von externen Beratern zu reduzieren.\n• Continuous Compliance Monitoring: Implementieren Sie frühzeitig automatisierte Überwachungsmechanismen, die Compliance-Lücken identifizieren, bevor sie zu kostspieligen Nacharbeiten führen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können wir sicherstellen, dass unsere Implementierung von EBA-Richtlinien eine erfolgreiche Prüfung durch Aufsichtsbehörden und externe Prüfer besteht?",
        answer: "Die erfolgreiche Validierung der EBA-Richtlinienimplementierung durch Aufsichtsbehörden und externe Prüfer ist für Finanzinstitute von kritischer Bedeutung. Eine strategisch durchdachte, prüfungsorientierte Implementierung minimiert regulatorische Risiken und schafft Vertrauen bei allen Stakeholdern. Dabei geht es nicht nur um die formale Einhaltung der Anforderungen, sondern auch um den Nachweis einer robusten, nachhaltigen Compliance-Architektur.\n\n🔍 Strategische Prüfungsvorbereitung bereits in der Implementierungsphase:\n• Regulatorische Intent-Analyse: Entwickeln Sie ein tiefes Verständnis der aufsichtlichen Intentionen hinter den EBA-Richtlinien, um nicht nur den Buchstaben, sondern auch den Geist der Regelungen zu erfüllen.\n• Frühzeitiger Dialog mit Aufsichtsbehörden: Etablieren Sie einen konstruktiven, proaktiven Austausch mit relevanten Aufsichtsbehörden, um Interpretationsfragen zu klären und aufsichtliche Erwartungen zu verstehen.\n• Integrierte Prüfbarkeit: Berücksichtigen Sie Prüfungsanforderungen bereits im Design Ihrer Implementierungslösung, z.B. durch integrierte Audit Trails, transparente Datenlineage und nachvollziehbare Kontrollmechanismen.\n• Unabhängige Qualitätssicherung: Implementieren Sie mehrschichtige Qualitätssicherungsmechanismen, die potenzielle Compliance-Lücken identifizieren, bevor diese durch Prüfer entdeckt werden.\n\n📊 Evidenzbasiertes Compliance-Management:\n• Umfassende Compliance-Dokumentation: Etablieren Sie eine strukturierte, lückenlose Dokumentation aller relevanten Aspekte der Implementierung, von der Anforderungsanalyse bis zur operativen Umsetzung.\n• Nachweisbare Governance: Dokumentieren Sie transparent alle Entscheidungsprozesse, Verantwortlichkeiten und Überwachungsmechanismen im Zusammenhang mit der Richtlinienimplementierung.\n• Testbare Kontrollen: Entwickeln Sie Kontrollen, die nicht nur die Compliance sicherstellen, sondern auch deren Wirksamkeit nachweisbar und überprüfbar machen.\n• Kontinuierliches Monitoring und Reporting: Implementieren Sie proaktive Überwachungsmechanismen, die potenzielle Compliance-Defizite frühzeitig identifizieren und dokumentieren, wie diese adressiert wurden."
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
    console.log('✅ EBA Guidelines Implementation C-Level FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
