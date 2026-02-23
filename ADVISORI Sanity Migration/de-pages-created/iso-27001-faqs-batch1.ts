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
    console.log('Updating ISO 27001 page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001" not found')
    }
    
    // Create new FAQs for ISO 27001 fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was ist ISO 27001 und warum ist dieser Standard für moderne Unternehmen unverzichtbar?',
        answer: "ISO 27001 ist der international führende Standard für Informationssicherheitsmanagementsysteme und bildet das Fundament für systematische, risikobasierte Informationssicherheit in Organisationen jeder Größe. Als einziger zertifizierbarer Standard der ISO 27000-Familie definiert er die Anforderungen für die Einrichtung, Implementierung, Aufrechterhaltung und kontinuierliche Verbesserung eines ISMS.\n\n🏗️ Systematischer Managementansatz:\n• ISO 27001 etabliert einen strukturierten Rahmen für das Management von Informationssicherheit, der über technische Maßnahmen hinausgeht\n• Der Standard basiert auf dem bewährten Plan-Do-Check-Act-Zyklus und gewährleistet kontinuierliche Verbesserung\n• Risikobasierte Methodik ermöglicht maßgeschneiderte Sicherheitsmaßnahmen entsprechend der individuellen Bedrohungslandschaft\n• Integration von Informationssicherheit in alle Geschäftsprozesse und strategischen Entscheidungen\n• Aufbau einer nachhaltigen Sicherheitskultur, die alle Organisationsebenen durchdringt\n\n🌐 Internationale Anerkennung und Vertrauen:\n• Weltweit anerkannter Standard, der in über 160 Ländern implementiert wird\n• Schaffung von Vertrauen bei Kunden, Partnern und Stakeholdern durch nachweisbare Sicherheitsstandards\n• Erfüllung von Compliance-Anforderungen und regulatorischen Vorgaben\n• Wettbewerbsvorteil durch demonstrierte Informationssicherheitskompetenz\n• Grundlage für vertrauensvolle Geschäftsbeziehungen in der digitalen Wirtschaft\n\n📊 Business Value und operative Vorteile:\n• Systematische Identifikation und Bewertung von Informationssicherheitsrisiken\n• Optimierung von Sicherheitsinvestitionen durch risikobasierte Priorisierung\n• Verbesserung der operativen Effizienz durch strukturierte Sicherheitsprozesse\n• Reduzierung von Sicherheitsvorfällen und deren Auswirkungen auf das Geschäft\n• Aufbau von Resilienz gegenüber Cyberbedrohungen und Geschäftsunterbrechungen\n\n🔗 Integration und Skalierbarkeit:\n• Nahtlose Integration mit anderen Managementsystemen wie ISO 9001, ISO 14001\n• Kompatibilität mit modernen Compliance-Frameworks wie DORA, NIS2, GDPR\n• Skalierbare Implementierung von kleinen Unternehmen bis zu multinationalen Konzernen\n• Flexibilität zur Anpassung an veränderte Geschäftsanforderungen und Bedrohungslandschaften\n• Grundlage für weitere Spezialisierungen und Zertifizierungen im Sicherheitsbereich"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche konkreten Vorteile bietet eine ISO 27001 Zertifizierung für Unternehmen?',
        answer: "Eine ISO 27001 Zertifizierung bietet Unternehmen weit mehr als nur Compliance-Erfüllung - sie schafft strategische Wettbewerbsvorteile, operative Effizienz und nachhaltigen Geschäftswert. Die Zertifizierung demonstriert nach außen das Engagement für Informationssicherheit und optimiert intern die Sicherheitsprozesse.\n\n💼 Strategische Geschäftsvorteile:\n• Signifikante Steigerung der Glaubwürdigkeit und des Vertrauens bei Kunden, Partnern und Investoren\n• Wettbewerbsdifferenzierung durch nachweisbare Informationssicherheitskompetenz\n• Zugang zu neuen Märkten und Geschäftsmöglichkeiten, die ISO 27001 Zertifizierung voraussetzen\n• Erfüllung von Ausschreibungsanforderungen und Compliance-Vorgaben in regulierten Branchen\n• Stärkung der Marktposition und des Unternehmensimages als vertrauenswürdiger Partner\n\n🛡️ Operative Sicherheitsverbesserungen:\n• Systematische Reduzierung von Informationssicherheitsrisiken durch strukturierte Risikoanalyse\n• Verbesserung der Incident Response Fähigkeiten und Minimierung von Ausfallzeiten\n• Optimierung der Sicherheitsinvestitionen durch risikobasierte Priorisierung\n• Aufbau robuster Sicherheitsprozesse, die auch bei Personalwechsel Bestand haben\n• Kontinuierliche Verbesserung der Sicherheitslage durch regelmäßige Bewertungen\n\n📈 Finanzielle und operative Effizienz:\n• Reduzierung von Versicherungsprämien durch nachweisbare Risikominimierung\n• Vermeidung kostspieliger Sicherheitsvorfälle und deren Folgekosten\n• Optimierung von Ressourceneinsatz durch strukturierte Sicherheitsprozesse\n• Verbesserung der operativen Effizienz durch klare Verantwortlichkeiten und Prozesse\n• Langfristige Kosteneinsparungen durch präventive Sicherheitsmaßnahmen\n\n🤝 Stakeholder-Vertrauen und Compliance:\n• Erfüllung regulatorischer Anforderungen und Vermeidung von Compliance-Strafen\n• Demonstration von Due Diligence gegenüber Aufsichtsbehörden und Regulatoren\n• Stärkung des Vertrauens von Kunden in den Umgang mit deren sensiblen Daten\n• Verbesserung der Beziehungen zu Geschäftspartnern durch transparente Sicherheitsstandards\n• Positive Auswirkungen auf Kreditwürdigkeit und Investorenbewertungen\n\n🚀 Innovation und Zukunftsfähigkeit:\n• Schaffung einer soliden Basis für digitale Transformation und Innovation\n• Aufbau von Kompetenzen für zukünftige Sicherheitsherausforderungen\n• Integration mit modernen Technologien und Cloud-Strategien\n• Vorbereitung auf zukünftige regulatorische Entwicklungen\n• Etablierung einer lernenden Organisation im Bereich Informationssicherheit"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie lange dauert eine typische ISO 27001 Implementierung und welche Faktoren beeinflussen den Zeitrahmen?',
        answer: "Die Dauer einer ISO 27001 Implementierung variiert erheblich je nach Organisationsgröße, bestehender Sicherheitsreife und verfügbaren Ressourcen. Eine realistische Planung berücksichtigt sowohl die technischen als auch die organisatorischen Aspekte der ISMS-Einführung und plant ausreichend Zeit für nachhaltige Verankerung ein.\n\n⏱️ Typische Implementierungszeiträume:\n• Kleine Unternehmen mit einfacher IT-Landschaft: 6 bis 12 Monate bei fokussierter Umsetzung\n• Mittelständische Unternehmen: 12 bis 18 Monate für umfassende ISMS-Implementierung\n• Große Organisationen mit komplexer Struktur: 18 bis 36 Monate für vollständige Integration\n• Konzerne mit internationalen Standorten: 24 bis 48 Monate für harmonisierte Implementierung\n• Hochregulierte Branchen: Zusätzliche 6 bis 12 Monate für spezifische Compliance-Anforderungen\n\n🏗️ Einflussfaktoren auf die Implementierungsdauer:\n• Bestehende Sicherheitsreife und vorhandene Managementsysteme als Ausgangsbasis\n• Komplexität der IT-Infrastruktur und Anzahl der zu schützenden Informationsassets\n• Organisationsstruktur, Anzahl der Standorte und geografische Verteilung\n• Verfügbarkeit interner Ressourcen und Expertise für die Projektdurchführung\n• Umfang der erforderlichen kulturellen Veränderungen und Change Management Maßnahmen\n\n📋 Phasenorientierte Implementierung:\n• Vorbereitungsphase mit Gap-Analyse und Projektplanung: 2 bis 4 Monate\n• ISMS-Design und Risikobewertung: 3 bis 6 Monate für systematische Entwicklung\n• Implementierung von Kontrollmaßnahmen und Prozessen: 6 bis 12 Monate\n• Dokumentation, Schulungen und interne Audits: 3 bis 6 Monate\n• Zertifizierungsvorbereitung und externes Audit: 2 bis 4 Monate\n\n🚀 Beschleunigungsfaktoren:\n• Professionelle Beratung und bewährte Implementierungsmethoden\n• Dedizierte Projektressourcen und klare Verantwortlichkeiten\n• Nutzung bestehender Managementsysteme und Sicherheitsmaßnahmen\n• Parallele Umsetzung unabhängiger Workstreams\n• Fokussierung auf kritische Bereiche und schrittweise Erweiterung\n\n⚠️ Risikofaktoren für Verzögerungen:\n• Unzureichende Ressourcenplanung und konkurrierende Prioritäten\n• Widerstand gegen Veränderungen und mangelnde Führungsunterstützung\n• Komplexe Legacy-Systeme und technische Herausforderungen\n• Unklare Anforderungen und häufige Scope-Änderungen\n• Mangelnde Erfahrung mit Managementsystem-Implementierungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche Kosten sind mit einer ISO 27001 Implementierung und Zertifizierung verbunden?',
        answer: "Die Kosten einer ISO 27001 Implementierung setzen sich aus verschiedenen Komponenten zusammen und variieren erheblich je nach Organisationsgröße, Komplexität und gewähltem Implementierungsansatz. Eine strukturierte Kostenplanung berücksichtigt sowohl einmalige Implementierungskosten als auch laufende Betriebskosten für das ISMS.\n\n💰 Hauptkostenkategorien:\n• Beratungskosten für externe Expertise und Projektbegleitung: 30 bis 60 Prozent der Gesamtkosten\n• Interne Personalkosten für Projektmitarbeiter und ISMS-Verantwortliche\n• Technische Implementierungskosten für Sicherheitsmaßnahmen und Tools\n• Schulungs- und Zertifizierungskosten für Mitarbeiter und Organisation\n• Laufende Betriebskosten für ISMS-Aufrechterhaltung und kontinuierliche Verbesserung\n\n📊 Kostenschätzungen nach Unternehmensgröße:\n• Kleine Unternehmen (bis 50 Mitarbeiter): 25.000 bis 75.000 Euro für Erstimplementierung\n• Mittelständische Unternehmen (50 bis 500 Mitarbeiter): 75.000 bis 250.000 Euro\n• Große Unternehmen (500 bis 5.000 Mitarbeiter): 250.000 bis 750.000 Euro\n• Konzerne (über 5.000 Mitarbeiter): 750.000 bis 2.500.000 Euro oder mehr\n• Zusätzliche Kosten für internationale oder hochregulierte Organisationen\n\n🔧 Technische Implementierungskosten:\n• ISMS-Management-Software und Compliance-Tools: 10.000 bis 100.000 Euro jährlich\n• Sicherheitstechnologien und Infrastructure-Upgrades: 25.000 bis 500.000 Euro\n• Monitoring- und Audit-Tools für kontinuierliche Überwachung\n• Backup- und Disaster Recovery Lösungen\n• Verschlüsselungs- und Zugangskontrollen\n\n👥 Personal- und Schulungskosten:\n• Interne Projektressourcen: 0,5 bis 2 Vollzeitäquivalente über Implementierungszeitraum\n• ISMS-Manager und Sicherheitsverantwortliche: 80.000 bis 120.000 Euro jährlich\n• Mitarbeiterschulungen und Awareness-Programme: 5.000 bis 50.000 Euro\n• Lead Auditor Zertifizierungen: 3.000 bis 8.000 Euro pro Person\n• Kontinuierliche Weiterbildung und Kompetenzentwicklung\n\n🏆 Zertifizierungs- und Auditkosten:\n• Erstaudit durch akkreditierte Zertifizierungsstelle: 15.000 bis 75.000 Euro\n• Jährliche Überwachungsaudits: 5.000 bis 25.000 Euro\n• Rezertifizierung alle drei Jahre: 10.000 bis 50.000 Euro\n• Interne Audits und Pre-Assessments: 10.000 bis 30.000 Euro jährlich\n• Beratung für Audit-Vorbereitung und Nachbetreuung\n\n💡 Kosteneinsparungen und ROI:\n• Reduzierung von Cyber-Versicherungsprämien: 10 bis 30 Prozent Einsparung\n• Vermeidung von Sicherheitsvorfällen und deren Folgekosten\n• Effizienzsteigerungen durch optimierte Sicherheitsprozesse\n• Wettbewerbsvorteile und neue Geschäftsmöglichkeiten\n• Langfristige Amortisation durch operative Verbesserungen"
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
    console.log('✅ FAQ batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
