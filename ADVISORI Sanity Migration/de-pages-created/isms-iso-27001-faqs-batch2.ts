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
    console.log('Updating ISMS ISO 27001 page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'isms-iso-27001' })
    
    if (!existingDoc) {
      throw new Error('Document "isms-iso-27001" not found')
    }
    
    // Create new FAQs for ISMS governance and processes
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie wird die ISMS-Governance strukturiert und welche Rollen sind dabei entscheidend?',
        answer: "Die ISMS-Governance nach ISO 27001 etabliert ein strukturiertes Framework für die strategische Steuerung und operative Führung des Informationssicherheitsmanagementsystems. Diese Governance-Architektur gewährleistet klare Verantwortlichkeiten, effektive Entscheidungsprozesse und nachhaltige Ausrichtung der Informationssicherheit an den Geschäftszielen.\n\n🏛️ Strategische Governance-Ebene:\n• Die oberste Leitung trägt die Gesamtverantwortung für das ISMS und demonstriert Leadership durch sichtbares Commitment\n• Etablierung eines ISMS-Lenkungsausschusses für strategische Entscheidungen und Ressourcenallokation\n• Definition der Informationssicherheitspolitik als strategisches Fundament und Richtschnur\n• Regelmäßige Management Reviews zur Bewertung der ISMS-Performance und strategischen Ausrichtung\n• Integration der Informationssicherheit in die Unternehmensführung und strategische Planungsprozesse\n\n👤 Operative Führungsrollen:\n• Der ISMS-Manager fungiert als zentrale Koordinationsstelle und treibt die operative ISMS-Umsetzung voran\n• Informationssicherheitsbeauftragte übernehmen spezifische Verantwortlichkeiten in ihren Fachbereichen\n• Prozessverantwortliche gewährleisten die Integration von Sicherheitsanforderungen in ihre Geschäftsprozesse\n• Risk Owner tragen die Verantwortung für die Behandlung spezifischer Informationssicherheitsrisiken\n• Asset Owner sind für den Schutz und die angemessene Nutzung ihrer Informationsassets verantwortlich\n\n🔄 Entscheidungs- und Eskalationsprozesse:\n• Klare Entscheidungskompetenzen und Eskalationswege für verschiedene Kategorien von ISMS-Entscheidungen\n• Strukturierte Kommunikationswege zwischen den verschiedenen Governance-Ebenen\n• Regelmäßige Berichterstattung über ISMS-Performance, Risiken und Verbesserungsmaßnahmen\n• Etablierung von Notfall- und Krisenmanagement-Strukturen für sicherheitskritische Situationen\n• Integration von ISMS-Governance in bestehende Unternehmens-Governance-Strukturen\n\n📊 Überwachung und Steuerung:\n• Implementierung von KPIs und Dashboards für kontinuierliche ISMS-Performance-Überwachung\n• Regelmäßige Bewertung der Governance-Effektivität und Anpassung bei Bedarf\n• Aufbau von Kompetenz und Bewusstsein in allen Governance-Rollen\n• Sicherstellung angemessener Ressourcenausstattung für alle ISMS-Aktivitäten\n• Kontinuierliche Verbesserung der Governance-Prozesse basierend auf Erfahrungen und Best Practices\n\n🤝 Stakeholder-Integration:\n• Systematische Einbindung aller relevanten internen und externen Stakeholder\n• Aufbau von Kommunikations- und Kooperationsstrukturen mit Geschäftsbereichen\n• Integration von Kunden- und Partneranforderungen in die ISMS-Governance\n• Berücksichtigung regulatorischer Anforderungen und Aufsichtsbehörden\n• Schaffung von Transparenz und Vertrauen durch offene Kommunikation über ISMS-Aktivitäten"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche ISMS-Prozesse sind nach ISO 27001 erforderlich und wie werden sie gestaltet?',
        answer: "Die ISMS-Prozesse nach ISO 27001 bilden das operative Rückgrat des Informationssicherheitsmanagementsystems und gewährleisten die systematische Umsetzung aller Sicherheitsanforderungen. Diese Prozesse sind eng miteinander verzahnt und folgen dem PDCA-Zyklus für kontinuierliche Verbesserung.\n\n📋 Kernprozesse des ISMS:\n• Der Risikomanagement-Prozess bildet das Fundament für alle sicherheitsrelevanten Entscheidungen\n• Asset Management Prozesse gewährleisten die systematische Identifikation und Klassifikation aller Informationsassets\n• Incident Management Prozesse ermöglichen schnelle und effektive Reaktion auf Sicherheitsvorfälle\n• Change Management Prozesse stellen sicher, dass alle Änderungen sicherheitskonform durchgeführt werden\n• Business Continuity Management Prozesse gewährleisten die Aufrechterhaltung kritischer Geschäftsprozesse\n\n🔄 Managementprozesse:\n• Management Review Prozesse für regelmäßige strategische Bewertung und Steuerung des ISMS\n• Interne Audit Prozesse zur systematischen Überprüfung der ISMS-Wirksamkeit\n• Korrektur- und Vorbeugungsmaßnahmen-Prozesse für kontinuierliche Verbesserung\n• Kompetenz- und Awareness-Prozesse für den Aufbau von Sicherheitsbewusstsein\n• Kommunikations- und Berichtsprozesse für effektiven Informationsaustausch\n\n🛡️ Operative Sicherheitsprozesse:\n• Zugangs- und Berechtigungsmanagement-Prozesse für kontrollierten Systemzugang\n• Schwachstellen- und Patch-Management-Prozesse für proaktive Sicherheitspflege\n• Backup- und Recovery-Prozesse für Datensicherheit und Verfügbarkeit\n• Monitoring- und Logging-Prozesse für kontinuierliche Sicherheitsüberwachung\n• Kryptographie- und Schlüsselmanagement-Prozesse für Datenschutz\n\n📐 Prozessdesign-Prinzipien:\n• Alle ISMS-Prozesse folgen einem strukturierten Ansatz mit klaren Inputs, Aktivitäten und Outputs\n• Integration von Risikobetrachtungen in alle Prozessschritte\n• Definition messbarer Prozessziele und KPIs für Performance-Bewertung\n• Berücksichtigung von Schnittstellen und Abhängigkeiten zwischen verschiedenen Prozessen\n• Aufbau von Flexibilität für Anpassungen an veränderte Anforderungen\n\n🔧 Prozessimplementierung und Optimierung:\n• Schrittweise Einführung der Prozesse mit kontinuierlicher Qualitätssicherung\n• Entwicklung detaillierter Prozessdokumentation und Arbeitsanweisungen\n• Schulung aller Prozessbeteiligten und Aufbau notwendiger Kompetenzen\n• Implementierung von Prozessmonitoring und regelmäßiger Performance-Bewertung\n• Kontinuierliche Prozessoptimierung basierend auf Erfahrungen und Feedback\n\n📈 Prozessintegration und Harmonisierung:\n• Nahtlose Integration der ISMS-Prozesse in bestehende Geschäftsprozesse\n• Harmonisierung mit anderen Managementsystem-Prozessen wie ISO 9001\n• Aufbau von Synergien und Vermeidung von Doppelarbeit\n• Etablierung einheitlicher Prozessstandards und Qualitätskriterien\n• Schaffung einer prozessorientierten Sicherheitskultur in der gesamten Organisation"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie erfolgt die Integration des ISMS in bestehende Managementsysteme?',
        answer: "Die Integration des ISMS in bestehende Managementsysteme ist ein strategischer Ansatz, der Synergien nutzt, Redundanzen vermeidet und eine ganzheitliche Managementsystem-Architektur schafft. Diese Integration folgt der High Level Structure (HLS) von ISO und ermöglicht effiziente und kohärente Systemführung.\n\n🏗️ Strukturelle Integration basierend auf HLS:\n• Nutzung der gemeinsamen High Level Structure aller modernen ISO-Standards für nahtlose Integration\n• Harmonisierung von Kontext der Organisation, Führung, Planung und Support-Prozessen\n• Gemeinsame Dokumentationsstrukturen und einheitliche Terminologie\n• Integrierte Risikomanagement-Ansätze für alle Managementsystem-Bereiche\n• Aufbau einer einheitlichen Governance-Architektur für alle Managementsysteme\n\n🔄 Prozessintegration und Harmonisierung:\n• Identifikation und Nutzung von Überschneidungen zwischen verschiedenen Managementsystem-Prozessen\n• Integration von ISMS-Anforderungen in bestehende Qualitäts- und Umweltmanagement-Prozesse\n• Harmonisierung von Audit-Zyklen und gemeinsame interne Audit-Programme\n• Integrierte Management Review Prozesse für ganzheitliche Systembetrachtung\n• Aufbau gemeinsamer Kompetenz- und Awareness-Programme\n\n📊 Gemeinsame Überwachung und Messung:\n• Entwicklung integrierter KPI-Dashboards für alle Managementsystem-Bereiche\n• Harmonisierung von Monitoring- und Messverfahren\n• Gemeinsame Datensammlung und Analyse für effiziente Ressourcennutzung\n• Integrierte Berichterstattung an die oberste Leitung\n• Aufbau einheitlicher Performance-Bewertungskriterien\n\n🎯 Strategische Ausrichtung und Zielsetzung:\n• Integration von Informationssicherheitszielen in die Gesamtstrategie der Organisation\n• Harmonisierung von Zielsetzungen zwischen verschiedenen Managementsystem-Bereichen\n• Aufbau von Synergien zwischen Qualitäts-, Umwelt- und Informationssicherheitszielen\n• Gemeinsame Ressourcenplanung und Budgetierung\n• Integrierte Stakeholder-Kommunikation und Erwartungsmanagement\n\n🔧 Operative Integration und Effizienzsteigerung:\n• Nutzung bestehender Infrastrukturen und Ressourcen für ISMS-Implementierung\n• Integration von Informationssicherheitskontrollen in bestehende operative Prozesse\n• Aufbau gemeinsamer Schulungs- und Entwicklungsprogramme\n• Harmonisierung von Dokumentationsanforderungen und Aufbewahrungsfristen\n• Schaffung einheitlicher Change Management Prozesse für alle Managementsysteme\n\n📈 Kontinuierliche Verbesserung und Innovation:\n• Integrierte Ansätze für kontinuierliche Verbesserung über alle Managementsystem-Bereiche\n• Gemeinsame Identifikation und Umsetzung von Verbesserungsmaßnahmen\n• Aufbau von Lernschleifen zwischen verschiedenen Managementsystem-Bereichen\n• Integration von Innovation und digitaler Transformation in alle Systembereiche\n• Entwicklung einer ganzheitlichen Exzellenz-Kultur in der Organisation"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Herausforderungen entstehen bei der ISMS-Implementierung und wie werden sie bewältigt?',
        answer: "Die ISMS-Implementierung nach ISO 27001 bringt verschiedene Herausforderungen mit sich, die systematisch angegangen werden müssen, um nachhaltigen Erfolg zu gewährleisten. Diese Herausforderungen reichen von organisatorischen und kulturellen Aspekten bis hin zu technischen und ressourcenbezogenen Faktoren.\n\n🏢 Organisatorische und kulturelle Herausforderungen:\n• Widerstand gegen Veränderungen und etablierte Arbeitsweisen in der Organisation\n• Mangelndes Bewusstsein für die Bedeutung von Informationssicherheit bei Mitarbeitern\n• Unzureichende Unterstützung durch die oberste Leitung und fehlende Ressourcenbereitstellung\n• Komplexe Organisationsstrukturen und unklare Verantwortlichkeiten\n• Schwierigkeiten bei der Integration von Sicherheitsanforderungen in bestehende Geschäftsprozesse\n\n💡 Lösungsansätze für organisatorische Herausforderungen:\n• Entwicklung einer umfassenden Change Management Strategie mit klarer Kommunikation der Vorteile\n• Aufbau von Sicherheitsbewusstsein durch gezielte Schulungs- und Awareness-Programme\n• Sicherstellung sichtbarer Führungsunterstützung und angemessener Ressourcenallokation\n• Klare Definition von Rollen und Verantwortlichkeiten mit entsprechenden Kompetenzen\n• Schrittweise Integration mit Quick Wins zur Demonstration des Mehrwerts\n\n🔧 Technische und operative Herausforderungen:\n• Komplexe IT-Landschaften mit Legacy-Systemen und heterogenen Technologien\n• Schwierigkeiten bei der Asset-Identifikation und Risikobewertung in großen Organisationen\n• Herausforderungen bei der Implementierung angemessener Sicherheitskontrollen\n• Probleme bei der Integration von ISMS-Anforderungen in bestehende IT-Prozesse\n• Schwierigkeiten beim Aufbau effektiver Monitoring- und Messverfahren\n\n🛠️ Technische Lösungsstrategien:\n• Systematische Bestandsaufnahme und Priorisierung basierend auf Geschäftskritikalität\n• Entwicklung pragmatischer Ansätze für Legacy-Systeme mit kompensierenden Kontrollen\n• Nutzung bewährter Frameworks und Tools für effiziente Implementierung\n• Aufbau von Automatisierung zur Reduzierung manueller Aufwände\n• Implementierung von integrierten Monitoring-Lösungen für ganzheitliche Übersicht\n\n📊 Ressourcen- und Budgetherausforderungen:\n• Unzureichende Budgetplanung und unterschätzte Implementierungskosten\n• Mangel an qualifizierten internen Ressourcen und Expertise\n• Konkurrierende Prioritäten und Ressourcenkonflikte mit anderen Projekten\n• Schwierigkeiten bei der Quantifizierung des Return on Investment\n• Herausforderungen bei der langfristigen Ressourcenplanung für ISMS-Betrieb\n\n💰 Ressourcenoptimierung und Effizienzsteigerung:\n• Realistische Budgetplanung mit Berücksichtigung aller Kostenfaktoren\n• Strategische Nutzung externer Expertise für Wissenstransfer und Kompetenzaufbau\n• Priorisierung und Phasenplanung zur optimalen Ressourcennutzung\n• Entwicklung von Business Cases mit klaren Nutzenargumentationen\n• Aufbau nachhaltiger interner Kompetenzen für langfristige Selbstständigkeit\n\n🔄 Kontinuierliche Herausforderungen und Anpassungen:\n• Sich ständig verändernde Bedrohungslandschaft und neue Sicherheitsanforderungen\n• Regulatorische Änderungen und neue Compliance-Anforderungen\n• Technologische Entwicklungen und digitale Transformation\n• Wachstum und Veränderungen in der Organisation\n• Aufrechterhaltung der ISMS-Performance und kontinuierliche Verbesserung"
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
    console.log('✅ FAQ batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
