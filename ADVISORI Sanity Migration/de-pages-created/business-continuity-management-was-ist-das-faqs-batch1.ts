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
    console.log('Updating Business Continuity Management Was ist das page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'business-continuity-management-was-ist-das' })
    
    if (!existingDoc) {
      throw new Error('Document "business-continuity-management-was-ist-das" not found')
    }
    
    // Create new FAQs for BCM Was ist das fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was ist Business Continuity Management und warum ist es für Unternehmen unverzichtbar geworden?',
        answer: "Business Continuity Management ist ein strategischer Managementansatz, der Organisationen dabei hilft, ihre kritischen Geschäftsfunktionen auch während und nach Störungen aufrechtzuerhalten. In einer zunehmend vernetzten und komplexen Geschäftswelt ist BCM von einer optionalen Vorsichtsmaßnahme zu einer geschäftskritischen Notwendigkeit geworden.\n\n🎯 Kernfunktion von BCM:\n• BCM identifiziert systematisch kritische Geschäftsprozesse und entwickelt Strategien zu deren Schutz\n• Es geht über traditionelle Notfallplanung hinaus und schafft eine umfassende Resilienz-Architektur\n• BCM integriert Risikomanagement, Krisenmanagement und Wiederherstellungsplanung in einem kohärenten System\n• Der Ansatz fokussiert auf die Aufrechterhaltung der Geschäftsfähigkeit, nicht nur auf technische Wiederherstellung\n• BCM entwickelt adaptive Kapazitäten, die es Organisationen ermöglichen, auf unvorhersehbare Ereignisse zu reagieren\n\n🌍 Warum BCM unverzichtbar geworden ist:\n• Globale Lieferketten und digitale Abhängigkeiten haben Vulnerabilitäten exponentiell erhöht\n• Klimawandel und extreme Wetterereignisse treten häufiger und intensiver auf\n• Cyber-Bedrohungen entwickeln sich kontinuierlich weiter und werden sophistizierter\n• Regulatorische Anforderungen verlangen zunehmend nachweisbare Resilienz-Maßnahmen\n• Stakeholder-Erwartungen an Geschäftskontinuität sind deutlich gestiegen\n\n💼 Geschäftlicher Imperativ:\n• Störungen können innerhalb von Stunden zu erheblichen finanziellen Verlusten führen\n• Reputationsschäden durch Ausfälle können langfristige Kundenbeziehungen gefährden\n• Wettbewerbsvorteile entstehen durch die Fähigkeit, während Krisen operativ zu bleiben\n• Investoren und Partner bewerten Resilienz-Fähigkeiten als Indikator für Managementqualität\n• Versicherungskosten und regulatorische Compliance erfordern nachweisbare BCM-Kapazitäten\n\n🔄 Strategische Transformation:\n• BCM transformiert reaktive Notfallplanung in proaktive Resilienz-Entwicklung\n• Es schafft organisationale Lernfähigkeiten, die kontinuierliche Anpassung ermöglichen\n• BCM integriert Nachhaltigkeit und ESG-Aspekte in Geschäftskontinuitäts-Strategien\n• Der Ansatz fördert Innovation durch die Entwicklung alternativer Betriebsmodelle\n• BCM stärkt organisationale Kultur und Mitarbeiter-Engagement durch gemeinsame Resilienz-Ziele\n\n🚀 Zukunftsorientierung:\n• Moderne BCM-Ansätze antizipieren emerging risks und entwickeln adaptive Strategien\n• Integration von künstlicher Intelligenz und Predictive Analytics verbessert Vorhersagefähigkeiten\n• BCM wird zunehmend zu einem strategischen Enabler für digitale Transformation\n• Kollaborative Resilienz-Netzwerke entstehen zwischen Organisationen und Branchen\n• BCM entwickelt sich zu einem Wettbewerbsdifferenziator in unsicheren Märkten"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie unterscheidet sich Business Continuity Management von traditioneller Notfallplanung und Disaster Recovery?',
        answer: "Business Continuity Management unterscheidet sich fundamental von traditioneller Notfallplanung und Disaster Recovery durch seinen ganzheitlichen, strategischen und proaktiven Ansatz. Während traditionelle Methoden reaktiv und technisch fokussiert sind, entwickelt BCM eine umfassende organisationale Resilienz-Strategie.\n\n📋 Traditionelle Notfallplanung vs. BCM:\n• Notfallplanung konzentriert sich auf spezifische Szenarien, BCM entwickelt adaptive Kapazitäten für unbekannte Risiken\n• Traditionelle Ansätze sind ereignisbasiert, BCM ist prozess- und systemorientiert\n• Notfallpläne sind oft statische Dokumente, BCM schafft dynamische und lernende Systeme\n• Klassische Planung fokussiert auf Wiederherstellung, BCM auf kontinuierliche Geschäftsfähigkeit\n• Traditionelle Methoden sind abteilungsspezifisch, BCM ist organisationsweit und integrativ\n\n💻 Disaster Recovery vs. BCM:\n• Disaster Recovery konzentriert sich primär auf IT-Systeme und technische Infrastruktur\n• BCM umfasst Menschen, Prozesse, Technologie und externe Abhängigkeiten gleichermaßen\n• DR fokussiert auf Wiederherstellung zur ursprünglichen Funktionalität\n• BCM entwickelt alternative Betriebsmodelle und transformative Kapazitäten\n• Disaster Recovery ist kostenorientiert, BCM ist wertschöpfungsorientiert\n\n🎯 Strategische Unterschiede:\n• BCM ist in strategische Planung und Corporate Governance integriert\n• Es berücksichtigt Stakeholder-Interessen und gesellschaftliche Verantwortung\n• BCM entwickelt Wettbewerbsvorteile durch Resilienz-Fähigkeiten\n• Der Ansatz schafft organisationale Lernfähigkeiten und Anpassungskapazitäten\n• BCM integriert Innovation und Transformation in Kontinuitäts-Strategien\n\n🔄 Proaktive vs. Reaktive Ansätze:\n• BCM antizipiert und verhindert Störungen, anstatt nur darauf zu reagieren\n• Es entwickelt Frühwarnsysteme und präventive Maßnahmen\n• BCM schafft Redundanzen und Flexibilität in Geschäftsprozessen\n• Der Ansatz fördert kontinuierliche Verbesserung und organisationales Lernen\n• BCM integriert Risikomanagement in tägliche Geschäftsoperationen\n\n🌐 Ganzheitliche Perspektive:\n• BCM berücksichtigt komplexe Interdependenzen und Systemdynamiken\n• Es integriert interne und externe Stakeholder in Resilienz-Strategien\n• BCM entwickelt ecosystem-weite Kontinuitäts-Netzwerke\n• Der Ansatz berücksichtigt kulturelle und soziale Faktoren organisationaler Resilienz\n• BCM schafft nachhaltige und regenerative Geschäftsmodelle\n\n⚡ Moderne BCM-Charakteristika:\n• Integration von Real-time Monitoring und Predictive Analytics\n• Entwicklung agiler und adaptiver Reaktionsfähigkeiten\n• Berücksichtigung von ESG-Kriterien und Nachhaltigkeitszielen\n• Nutzung digitaler Technologien für verbesserte Resilienz\n• Aufbau kollaborativer und vernetzter Resilienz-Kapazitäten"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche konkreten Vorteile und welchen Return on Investment bietet Business Continuity Management für Organisationen?',
        answer: "Business Continuity Management bietet Organisationen messbare finanzielle Vorteile und strategische Wettbewerbsvorteile, die weit über die Kosten der Implementierung hinausgehen. Der ROI von BCM manifestiert sich sowohl in direkten Kosteneinsparungen als auch in indirekten Wertsteigerungen und Chancenrealisierung.\n\n💰 Direkte finanzielle Vorteile:\n• Reduzierung von Ausfallzeiten und damit verbundenen Umsatzverlusten\n• Minimierung von Notfall-Ausgaben und Ad-hoc-Lösungskosten\n• Optimierung von Versicherungsprämien durch nachweisbare Risikoreduktion\n• Vermeidung von regulatorischen Strafen und Compliance-Kosten\n• Reduzierung von Wiederherstellungskosten durch präventive Maßnahmen\n\n📈 Strategische Wertschöpfung:\n• Erhöhung der Organisationsresilienz führt zu stabileren Geschäftsergebnissen\n• Verbesserte Stakeholder-Zufriedenheit und Kundenbindung durch zuverlässige Services\n• Stärkung der Marktposition durch Fähigkeit zur kontinuierlichen Leistungserbringung\n• Erhöhung des Unternehmenswertes durch reduzierte Volatilität und Risikoprofile\n• Schaffung neuer Geschäftsmöglichkeiten durch innovative Resilienz-Lösungen\n\n🛡️ Risikoreduktion und Schadensvermeidung:\n• Systematische Identifikation und Mitigation kritischer Vulnerabilitäten\n• Reduzierung der Wahrscheinlichkeit und Auswirkung von Geschäftsunterbrechungen\n• Schutz vor Reputationsschäden durch proaktive Krisenprävention\n• Minimierung von Haftungsrisiken und rechtlichen Konsequenzen\n• Verbesserung der Cyber-Resilienz und Schutz vor digitalen Bedrohungen\n\n🏆 Wettbewerbsvorteile:\n• Differenzierung durch überlegene Resilienz-Fähigkeiten im Markt\n• Fähigkeit zur Geschäftstätigkeit während Störungen, wenn Wettbewerber ausfallen\n• Erhöhte Attraktivität für Kunden, die Zuverlässigkeit und Stabilität schätzen\n• Verbesserte Verhandlungsposition mit Lieferanten und Partnern\n• Stärkung der Employer Brand durch Demonstration von Mitarbeiter-Fürsorge\n\n📊 Messbare Performance-Verbesserungen:\n• Reduzierung der Mean Time to Recovery bei Störungen\n• Verbesserung der Service Level Agreements und Kundenzufriedenheit\n• Erhöhung der operativen Effizienz durch optimierte Prozesse\n• Stärkung der organisationalen Agilität und Anpassungsfähigkeit\n• Verbesserung der Entscheidungsqualität durch bessere Risikoinformationen\n\n🌱 Langfristige strategische Vorteile:\n• Aufbau organisationaler Lernfähigkeiten und kontinuierlicher Verbesserung\n• Integration von Nachhaltigkeit und ESG-Zielen in Geschäftsstrategien\n• Entwicklung innovativer Geschäftsmodelle und Services\n• Stärkung der organisationalen Kultur und Mitarbeiter-Engagement\n• Schaffung von Resilienz-Netzwerken und strategischen Partnerschaften\n\n💡 ROI-Berechnung und Metriken:\n• Typische ROI-Raten für BCM-Investitionen liegen zwischen drei und zehn zu eins\n• Payback-Perioden variieren zwischen einem und drei Jahren je nach Branche\n• Kosteneinsparungen durch vermiedene Ausfälle übersteigen oft Implementierungskosten erheblich\n• Indirekte Vorteile wie Reputationsschutz und Kundenbindung multiplizieren den direkten ROI\n• Langfristige Wertsteigerung durch verbesserte Resilienz-Ratings und Investoren-Vertrauen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche Kernkomponenten und Elemente umfasst ein effektives Business Continuity Management System?',
        answer: "Ein effektives Business Continuity Management System besteht aus mehreren integrierten Komponenten, die zusammenwirken, um organisationale Resilienz zu schaffen. Diese Elemente bilden ein kohärentes Framework, das systematisch Risiken adressiert und Kontinuitäts-Kapazitäten entwickelt.\n\n🏗️ Governance und Management-Framework:\n• BCM-Policy und strategische Ausrichtung mit Organisationszielen\n• Klare Rollen, Verantwortlichkeiten und Entscheidungsstrukturen\n• Integration in Corporate Governance und Risikomanagement-Systeme\n• Regelmäßige Management-Reviews und strategische Anpassungen\n• Compliance-Management für regulatorische Anforderungen\n\n🔍 Risikobewertung und Business Impact Analysis:\n• Systematische Identifikation und Bewertung von Bedrohungen und Vulnerabilitäten\n• Analyse der Auswirkungen von Störungen auf kritische Geschäftsfunktionen\n• Bestimmung von Recovery Time Objectives und Recovery Point Objectives\n• Bewertung von Abhängigkeiten und Interdependenzen\n• Kontinuierliche Aktualisierung von Risikoprofilen und Impact-Assessments\n\n📋 Strategieentwicklung und Planung:\n• Entwicklung von Business Continuity Strategien für kritische Prozesse\n• Erstellung detaillierter Business Continuity Pläne und Verfahren\n• Definition alternativer Betriebsmodelle und Workaround-Lösungen\n• Planung von Ressourcen, Standorten und Technologie-Alternativen\n• Integration von Lieferanten und externen Partnern in Kontinuitäts-Strategien\n\n🎓 Training, Awareness und Kompetenzentwicklung:\n• Umfassende Schulungsprogramme für alle Organisationsebenen\n• Regelmäßige Awareness-Kampagnen und Kommunikation\n• Entwicklung spezialisierter BCM-Kompetenzen und Expertise\n• Change Management für BCM-Integration in Organisationskultur\n• Kontinuierliche Weiterbildung und Zertifizierungsprogramme\n\n🧪 Testing, Übungen und Validierung:\n• Regelmäßige Tests von Business Continuity Plänen und Verfahren\n• Durchführung von Tabletop-Übungen und Simulationen\n• Vollständige Disaster Recovery Tests und Live-Übungen\n• Bewertung der Effektivität von Kontinuitäts-Maßnahmen\n• Dokumentation von Lessons Learned und Verbesserungsmaßnahmen\n\n📊 Monitoring, Messung und Berichterstattung:\n• Kontinuierliche Überwachung von Risikoindikatoren und Systemstatus\n• Entwicklung und Tracking von BCM-Performance-Metriken\n• Regelmäßige Berichterstattung an Management und Stakeholder\n• Benchmarking gegen Branchenstandards und Best Practices\n• Integration in organisationale Dashboards und Reporting-Systeme\n\n🔄 Kontinuierliche Verbesserung und Anpassung:\n• Regelmäßige Reviews und Updates von BCM-Strategien und Plänen\n• Integration von Feedback aus Tests, Übungen und realen Ereignissen\n• Anpassung an sich ändernde Geschäftsanforderungen und Risikoprofile\n• Innovation und Weiterentwicklung von BCM-Fähigkeiten\n• Benchmarking und Adoption von emerging best practices\n\n🤝 Stakeholder-Management und Kommunikation:\n• Entwicklung von Kommunikationsstrategien für verschiedene Stakeholder-Gruppen\n• Koordination mit externen Partnern, Lieferanten und Behörden\n• Management von Kunden- und Medien-Kommunikation während Krisen\n• Integration von Community und gesellschaftlichen Stakeholdern\n• Aufbau von Resilienz-Netzwerken und Kooperationen"
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
