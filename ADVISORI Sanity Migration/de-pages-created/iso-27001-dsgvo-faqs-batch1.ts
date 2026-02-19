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
    console.log('Updating ISO 27001 DSGVO page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-dsgvo' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-dsgvo" not found')
    }
    
    // Create new FAQs for ISO 27001 & DSGVO Integration fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum ist die Integration von ISO 27001 und DSGVO strategisch sinnvoll und welche Synergien entstehen?',
        answer: "Die strategische Integration von ISO 27001 und DSGVO schafft ein leistungsstarkes, synergetisches Compliance-Framework, das sowohl Informationssicherheit als auch Datenschutz systematisch und kosteneffizient adressiert. Diese Verbindung nutzt die natürlichen Überschneidungen beider Standards und eliminiert Redundanzen bei der Umsetzung.\n\n🔗 Natürliche Komplementarität:\n• ISO 27001 bietet den systematischen Rahmen für Informationssicherheitsmanagement, während DSGVO spezifische Datenschutzanforderungen definiert\n• Beide Standards verfolgen das gemeinsame Ziel des Schutzes von Informationen und personenbezogenen Daten\n• Die risikobasierte Methodik von ISO 27001 harmoniert perfekt mit den Datenschutz-Folgenabschätzungen der DSGVO\n• Technische und organisatorische Maßnahmen überschneiden sich erheblich und können integriert implementiert werden\n• Privacy by Design Prinzipien der DSGVO ergänzen Security by Design Ansätze von ISO 27001\n\n💰 Kosteneffizienz und Ressourcenoptimierung:\n• Reduzierung des Implementierungsaufwands durch gemeinsame Prozesse und Dokumentation\n• Vermeidung doppelter Strukturen für ähnliche Compliance-Anforderungen\n• Optimierte Audit-Zyklen durch koordinierte Zertifizierungs- und Prüfungsverfahren\n• Einheitliche Schulungs- und Awareness-Programme für beide Bereiche\n• Gemeinsame Governance-Strukturen und Verantwortlichkeiten\n\n🎯 Strategische Vorteile:\n• Ganzheitlicher Ansatz für Daten- und Informationsschutz schafft Vertrauen bei Stakeholdern\n• Einheitliche Risikobewertung und -behandlung für alle Informationsassets\n• Harmonisierte Incident Response Prozesse für Sicherheitsvorfälle und Datenschutzverletzungen\n• Integrierte Compliance-Überwachung und -berichterstattung\n• Zukunftsfähige Basis für weitere regulatorische Anforderungen\n\n🏗️ Operative Synergien:\n• Gemeinsame Dokumentationsstrukturen und Richtlinien reduzieren Verwaltungsaufwand\n• Integrierte Risikomanagement-Prozesse schaffen Effizienz und Konsistenz\n• Einheitliche Kontrollmaßnahmen erfüllen beide Standards gleichzeitig\n• Harmonisierte Schulungs- und Sensibilisierungsprogramme\n• Koordinierte Change Management Prozesse für beide Bereiche\n\n📈 Langfristige Wertschöpfung:\n• Aufbau einer robusten Compliance-Kultur, die über einzelne Standards hinausgeht\n• Schaffung einer soliden Basis für digitale Transformation und Innovation\n• Vorbereitung auf zukünftige regulatorische Entwicklungen und Standards\n• Etablierung als vertrauenswürdiger Partner in der digitalen Wirtschaft\n• Kontinuierliche Verbesserung durch integrierte Managementsysteme"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie können technische und organisatorische Maßnahmen für beide Standards harmonisiert werden?',
        answer: "Die Harmonisierung technischer und organisatorischer Maßnahmen für ISO 27001 und DSGVO schafft ein effizientes, integriertes Kontrollsystem, das beide Standards gleichzeitig erfüllt. Diese strategische Ausrichtung nutzt die erheblichen Überschneidungen zwischen den Anforderungen beider Frameworks.\n\n🔧 Technische Maßnahmen Integration:\n• Zugangskontrollen und Identitätsmanagement erfüllen sowohl ISO 27001 Kontrollen als auch DSGVO Anforderungen zur Datensicherheit\n• Verschlüsselungstechnologien schützen Informationsassets nach ISO 27001 und personenbezogene Daten nach DSGVO\n• Netzwerksicherheit und Segmentierung adressieren beide Standards durch umfassenden Perimeterschutz\n• Backup und Disaster Recovery Systeme gewährleisten Verfügbarkeit und Wiederherstellbarkeit für beide Bereiche\n• Monitoring und Logging Systeme unterstützen sowohl Sicherheitsüberwachung als auch Datenschutz-Compliance\n\n📋 Organisatorische Maßnahmen Harmonisierung:\n• Integrierte Governance-Strukturen mit gemeinsamen Verantwortlichkeiten für Informationssicherheit und Datenschutz\n• Einheitliche Richtlinien und Verfahren, die beide Standards abdecken und Redundanzen vermeiden\n• Harmonisierte Schulungs- und Awareness-Programme für alle Mitarbeiter\n• Gemeinsame Incident Response Teams und Eskalationsprozesse\n• Integrierte Risikomanagement-Prozesse mit einheitlicher Bewertungsmethodik\n\n🎯 Privacy by Design Integration:\n• Datenschutzfreundliche Systemarchitektur als integraler Bestandteil des ISMS\n• Proaktive Datenschutzmaßnahmen in allen Sicherheitskontrollen\n• Datenschutz als Standardeinstellung in allen technischen Implementierungen\n• Vollständige Funktionalität ohne Kompromisse bei Datenschutz oder Sicherheit\n• Transparenz und Benutzerfreundlichkeit als Designprinzipien\n\n📊 Dokumentation und Nachweisführung:\n• Einheitliche Dokumentationsstrukturen für beide Standards\n• Integrierte Verfahrensverzeichnisse, die DSGVO und ISO 27001 Anforderungen abdecken\n• Gemeinsame Audit-Trails und Compliance-Nachweise\n• Harmonisierte Berichterstattung an Management und Aufsichtsbehörden\n• Einheitliche Metriken und KPIs für beide Bereiche\n\n🔄 Kontinuierliche Verbesserung:\n• Integrierte Review-Zyklen für beide Standards\n• Gemeinsame Lessons Learned Prozesse aus Vorfällen und Audits\n• Koordinierte Anpassungen an neue Bedrohungen und regulatorische Änderungen\n• Einheitliche Change Management Prozesse für beide Bereiche\n• Regelmäßige Wirksamkeitsprüfung der integrierten Maßnahmen\n\n⚖️ Compliance und Rechtssicherheit:\n• Sicherstellung, dass alle Maßnahmen beide Standards vollständig erfüllen\n• Regelmäßige rechtliche Bewertung der integrierten Ansätze\n• Dokumentation der Compliance-Erfüllung für beide Bereiche\n• Vorbereitung auf koordinierte Audits und Prüfungen\n• Kontinuierliche Überwachung regulatorischer Entwicklungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Herausforderungen entstehen bei der Integration und wie können sie bewältigt werden?',
        answer: "Die Integration von ISO 27001 und DSGVO bringt spezifische Herausforderungen mit sich, die durch strukturierte Herangehensweise und bewährte Methoden erfolgreich bewältigt werden können. Eine proaktive Identifikation und Behandlung dieser Herausforderungen ist entscheidend für den Projekterfolg.\n\n⚖️ Rechtliche und regulatorische Komplexität:\n• Unterschiedliche rechtliche Grundlagen und Interpretationen beider Standards erfordern spezialisierte Expertise\n• Verschiedene Aufsichtsbehörden und Zertifizierungsstellen haben unterschiedliche Erwartungen\n• Nationale Umsetzungen der DSGVO können von ISO 27001 Anforderungen abweichen\n• Lösung durch interdisziplinäre Teams mit Rechts-, Compliance- und technischer Expertise\n• Regelmäßige Abstimmung mit Aufsichtsbehörden und Zertifizierungsstellen\n\n🏗️ Organisatorische Herausforderungen:\n• Bestehende Silostrukturen zwischen IT-Sicherheit und Datenschutz müssen aufgebrochen werden\n• Unterschiedliche Unternehmenskulturen und Arbeitsweisen in beiden Bereichen\n• Widerstand gegen Veränderungen bei etablierten Prozessen und Verantwortlichkeiten\n• Lösung durch Change Management Programme und klare Kommunikation der Vorteile\n• Aufbau integrierter Teams mit gemeinsamen Zielen und Verantwortlichkeiten\n\n📚 Dokumentations- und Prozessharmonisierung:\n• Unterschiedliche Dokumentationsanforderungen und -standards beider Frameworks\n• Komplexität bei der Erstellung einheitlicher Prozesse, die beide Standards erfüllen\n• Herausforderung bei der Vermeidung von Redundanzen ohne Compliance-Verluste\n• Lösung durch systematische Mapping-Analysen und strukturierte Harmonisierung\n• Entwicklung integrierter Templates und Prozesslandschaften\n\n💰 Ressourcen- und Budgetmanagement:\n• Höhere initiale Investitionen für integrierte Lösungen\n• Komplexere Projektplanung und längere Implementierungszeiten\n• Bedarf an spezialisierten Beratern mit Expertise in beiden Bereichen\n• Lösung durch phasenweise Implementierung und klare ROI-Darstellung\n• Langfristige Kostenvorteile durch reduzierte operative Aufwände\n\n🔧 Technische Integration:\n• Komplexität bei der Implementierung von Systemen, die beide Standards erfüllen\n• Herausforderung bei der Balance zwischen Sicherheit und Datenschutz-Anforderungen\n• Integration verschiedener Tools und Plattformen für beide Bereiche\n• Lösung durch sorgfältige Architekturplanung und Privacy by Design Prinzipien\n• Auswahl integrierter Technologielösungen mit Dual-Compliance-Fähigkeiten\n\n📊 Audit- und Zertifizierungskoordination:\n• Koordination verschiedener Audit-Zyklen und Zertifizierungsstellen\n• Unterschiedliche Bewertungskriterien und Prüfungsansätze\n• Komplexität bei der Vorbereitung auf multiple Audits\n• Lösung durch integrierte Audit-Planung und koordinierte Vorbereitung\n• Aufbau einheitlicher Evidenz-Sammlungen für beide Standards\n\n🎓 Kompetenzentwicklung:\n• Bedarf an Mitarbeitern mit Expertise in beiden Bereichen\n• Herausforderung bei der Schulung bestehender Teams\n• Rekrutierung qualifizierter Fachkräfte mit Dual-Expertise\n• Lösung durch strukturierte Weiterbildungsprogramme und Zertifizierungen\n• Aufbau interner Kompetenzzentren für integrierte Compliance"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie gestaltet sich die Risikobewertung in einem integrierten ISO 27001 und DSGVO System?',
        answer: "Die integrierte Risikobewertung für ISO 27001 und DSGVO schafft ein ganzheitliches Risikomanagement-System, das sowohl Informationssicherheits- als auch Datenschutzrisiken systematisch erfasst, bewertet und behandelt. Diese harmonisierte Herangehensweise optimiert Ressourcen und gewährleistet konsistente Risikobehandlung.\n\n🎯 Einheitliche Risikobewertungsmethodik:\n• Entwicklung einer gemeinsamen Risikobewertungsmatrix, die beide Standards abdeckt\n• Harmonisierte Risikokategorien für Informationssicherheit und Datenschutz\n• Einheitliche Bewertungskriterien für Eintrittswahrscheinlichkeit und Auswirkungen\n• Gemeinsame Risikotoleranz und Akzeptanzkriterien für beide Bereiche\n• Integrierte Risikoinventare mit vollständiger Asset-Abdeckung\n\n📊 Datenschutz-Folgenabschätzung Integration:\n• DSFA als integraler Bestandteil der ISO 27001 Risikoanalyse\n• Systematische Bewertung von Verarbeitungstätigkeiten im Kontext des ISMS\n• Berücksichtigung von Datenschutzrisiken in allen Sicherheitskontrollen\n• Harmonisierte Schwellenwerte für DSFA-Pflicht und Risikobewertung\n• Einheitliche Dokumentation und Nachverfolgung aller Risikobewertungen\n\n🔍 Ganzheitliche Asset-Identifikation:\n• Vollständige Erfassung aller Informationsassets einschließlich personenbezogener Daten\n• Klassifikation von Assets nach Sicherheits- und Datenschutzkriterien\n• Berücksichtigung von Datenflüssen und Verarbeitungsprozessen\n• Integration von Systemlandschaften und Datenarchitekturen\n• Regelmäßige Aktualisierung des Asset-Inventars für beide Standards\n\n⚡ Bedrohungs- und Schwachstellenanalyse:\n• Umfassende Bedrohungslandschaft für Informationssicherheit und Datenschutz\n• Berücksichtigung spezifischer Datenschutzbedrohungen wie Profiling oder Diskriminierung\n• Integration von Cyber-Bedrohungen und Datenschutzverletzungsszenarien\n• Bewertung technischer und organisatorischer Schwachstellen\n• Kontinuierliche Threat Intelligence für beide Bereiche\n\n🎛️ Risikobewertung und Priorisierung:\n• Einheitliche Bewertungsskalen für beide Standards\n• Berücksichtigung rechtlicher Konsequenzen und Sanktionsrisiken\n• Integration von Reputationsrisiken und Geschäftsauswirkungen\n• Priorisierung basierend auf kombinierter Risikobewertung\n• Regelmäßige Neubewertung bei Änderungen in beiden Bereichen\n\n🛡️ Integrierte Risikobehhandlung:\n• Gemeinsame Risikobehhandlungsstrategien für beide Standards\n• Koordinierte Implementierung von Kontrollmaßnahmen\n• Berücksichtigung von Privacy by Design in allen Sicherheitsmaßnahmen\n• Einheitliche Überwachung und Messung der Risikobehhandlung\n• Kontinuierliche Verbesserung basierend auf beiden Standards\n\n📈 Monitoring und Review:\n• Integrierte Risiko-Dashboards für beide Bereiche\n• Regelmäßige Review-Zyklen mit einheitlicher Methodik\n• Koordinierte Berichterstattung an Management und Stakeholder\n• Kontinuierliche Anpassung an neue Bedrohungen und Anforderungen\n• Lessons Learned Integration aus beiden Compliance-Bereichen"
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
