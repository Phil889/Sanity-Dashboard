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
    console.log('Updating Business Continuity Management Was ist das page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'business-continuity-management-was-ist-das' })
    
    if (!existingDoc) {
      throw new Error('Document "business-continuity-management-was-ist-das" not found')
    }
    
    // Create new FAQs for BCM Was ist das implementation and practical aspects
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche ersten Schritte sollte eine Organisation bei der Einführung von Business Continuity Management unternehmen?',
        answer: "Die Einführung von Business Continuity Management erfordert einen strukturierten und systematischen Ansatz, der organisationale Bereitschaft schafft und solide Grundlagen für nachhaltigen Erfolg legt. Die ersten Schritte sind entscheidend für die langfristige Wirksamkeit des BCM-Programms.\n\n🎯 Management-Commitment und strategische Ausrichtung:\n• Sicherstellung der Unterstützung und des Commitments der Geschäftsführung für BCM-Initiativen\n• Definition klarer BCM-Ziele und deren Ausrichtung mit strategischen Unternehmenszielen\n• Entwicklung einer BCM-Policy, die Vision, Ziele und Grundprinzipien definiert\n• Integration von BCM in Corporate Governance und strategische Planungsprozesse\n• Kommunikation der strategischen Bedeutung von BCM an alle Organisationsebenen\n\n🏗️ Organisatorische Grundlagen schaffen:\n• Ernennung eines BCM-Verantwortlichen oder BCM-Managers mit entsprechenden Kompetenzen\n• Bildung eines BCM-Teams mit Vertretern aus allen kritischen Geschäftsbereichen\n• Definition von Rollen, Verantwortlichkeiten und Entscheidungsstrukturen\n• Etablierung von Governance-Strukturen und Berichtswegen\n• Bereitstellung angemessener Ressourcen und Budgets für BCM-Aktivitäten\n\n🔍 Erste Risiko- und Impact-Bewertung:\n• Durchführung einer initialen Risikobewertung zur Identifikation kritischer Bedrohungen\n• Erstellung einer ersten Business Impact Analysis für wichtige Geschäftsprozesse\n• Identifikation und Priorisierung kritischer Geschäftsfunktionen und Abhängigkeiten\n• Bewertung bestehender Kontinuitäts-Maßnahmen und Identifikation von Lücken\n• Dokumentation aktueller Resilienz-Kapazitäten und Verbesserungspotentiale\n\n📚 Awareness und Kompetenzaufbau:\n• Entwicklung eines Awareness-Programms für alle Mitarbeiter\n• Schulung des BCM-Teams in grundlegenden BCM-Konzepten und Methoden\n• Aufbau interner BCM-Expertise durch Training und Zertifizierungen\n• Sensibilisierung der Führungskräfte für ihre Rolle im BCM\n• Schaffung einer Kultur der Resilienz und kontinuierlichen Verbesserung\n\n📋 Erste Planungsdokumente entwickeln:\n• Erstellung eines BCM-Projektplans mit Meilensteinen und Zeitrahmen\n• Entwicklung erster Business Continuity Pläne für kritische Prozesse\n• Definition von Recovery Time Objectives und Recovery Point Objectives\n• Dokumentation von Notfallkontakten und Kommunikationswegen\n• Erstellung von Checklisten und Verfahrensanweisungen für Notfälle\n\n🧪 Erste Tests und Validierung:\n• Durchführung einfacher Tabletop-Übungen zur Validierung der Pläne\n• Test von Kommunikationswegen und Notfallkontakten\n• Überprüfung der Verfügbarkeit und Funktionsfähigkeit kritischer Ressourcen\n• Sammlung von Feedback und Lessons Learned aus ersten Tests\n• Anpassung und Verbesserung der Pläne basierend auf Testergebnissen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche häufigen Missverständnisse und Mythen existieren über Business Continuity Management?',
        answer: "Business Continuity Management ist oft von Missverständnissen und Mythen umgeben, die eine effektive Implementierung behindern können. Das Verständnis und die Korrektur dieser falschen Annahmen ist entscheidend für den Erfolg von BCM-Initiativen.\n\n💻 Mythos: BCM ist nur IT-Disaster Recovery:\n• Realität: BCM umfasst alle Aspekte der Organisation, nicht nur IT-Systeme\n• BCM berücksichtigt Menschen, Prozesse, Technologie, Standorte und externe Abhängigkeiten gleichermaßen\n• IT-Disaster Recovery ist nur eine Komponente eines umfassenden BCM-Programms\n• Moderne BCM-Ansätze integrieren physische, digitale und soziale Resilienz-Aspekte\n• BCM entwickelt ganzheitliche Lösungen für komplexe organisationale Herausforderungen\n\n📋 Mythos: BCM bedeutet nur Notfallpläne zu erstellen:\n• Realität: BCM ist ein kontinuierlicher Managementprozess, nicht nur Dokumentenerstellung\n• Pläne sind wichtig, aber BCM umfasst auch Risikomanagement, Training, Tests und kontinuierliche Verbesserung\n• Effektives BCM entwickelt adaptive Kapazitäten und organisationale Lernfähigkeiten\n• Der Fokus liegt auf der Entwicklung von Resilienz-Kultur und -Kompetenzen\n• BCM schafft dynamische und lernende Systeme, nicht statische Dokumente\n\n💰 Mythos: BCM ist zu teuer und bietet keinen ROI:\n• Realität: BCM bietet messbare finanzielle Vorteile und strategische Wertschöpfung\n• Die Kosten von Geschäftsunterbrechungen übersteigen oft die BCM-Investitionen erheblich\n• BCM reduziert Versicherungskosten, verbessert operative Effizienz und schafft Wettbewerbsvorteile\n• Moderne BCM-Ansätze integrieren Kosteneinsparungen und Wertsteigerungen\n• ROI-Studien zeigen typische Renditen zwischen drei und zehn zu eins\n\n🏢 Mythos: BCM ist nur für große Unternehmen relevant:\n• Realität: Organisationen jeder Größe profitieren von angemessenen BCM-Maßnahmen\n• Kleine und mittlere Unternehmen sind oft vulnerabler gegenüber Störungen\n• BCM-Ansätze können skaliert und an Organisationsgröße angepasst werden\n• Einfache BCM-Maßnahmen können bereits erhebliche Schutzwirkung entfalten\n• Branchenspezifische BCM-Lösungen existieren für verschiedene Organisationstypen\n\n⚡ Mythos: BCM ist nur für Katastrophenfälle notwendig:\n• Realität: BCM adressiert das gesamte Spektrum von Störungen, von kleinen bis zu großen Ereignissen\n• Alltägliche Störungen wie Systemausfälle oder Personalengpässe erfordern BCM-Kapazitäten\n• BCM entwickelt Resilienz für bekannte und unbekannte Risiken\n• Präventive BCM-Maßnahmen reduzieren die Wahrscheinlichkeit und Auswirkung von Störungen\n• Moderne BCM-Ansätze antizipieren emerging risks und entwickeln adaptive Strategien\n\n🔧 Mythos: BCM ist ein einmaliges Projekt:\n• Realität: BCM ist ein kontinuierlicher Prozess, der regelmäßige Aktualisierung und Verbesserung erfordert\n• Geschäftsumgebungen, Risiken und Anforderungen ändern sich kontinuierlich\n• Effektives BCM entwickelt sich mit der Organisation und ihren Herausforderungen\n• Regelmäßige Tests, Reviews und Updates sind essentiell für BCM-Wirksamkeit\n• BCM-Reife entwickelt sich über Zeit durch kontinuierliches Lernen und Anpassung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie kann Business Continuity Management in verschiedenen Branchen und Organisationstypen angewendet werden?',
        answer: "Business Continuity Management ist ein flexibles Framework, das an die spezifischen Anforderungen verschiedener Branchen und Organisationstypen angepasst werden kann. Jeder Sektor hat einzigartige Risikoprofile, regulatorische Anforderungen und operative Charakteristika, die BCM-Ansätze beeinflussen.\n\n🏦 Finanzdienstleistungen:\n• Fokus auf regulatorische Compliance und systemische Risiken\n• Integration von BCM in Risikomanagement-Frameworks und Basel-Anforderungen\n• Betonung von Cyber-Resilienz und Schutz kritischer Finanzinfrastrukturen\n• Entwicklung von Liquiditäts- und Kapitalmanagement-Strategien für Krisenzeiten\n• Koordination mit Aufsichtsbehörden und anderen Finanzinstitutionen\n\n🏥 Gesundheitswesen:\n• Priorität auf Patientensicherheit und kontinuierliche Versorgung\n• Integration von BCM in Qualitätsmanagement und Akkreditierungsstandards\n• Entwicklung von Pandemie-Plänen und Surge-Capacity-Management\n• Koordination mit öffentlichen Gesundheitsbehörden und Notfalldiensten\n• Berücksichtigung ethischer Aspekte bei Ressourcenallokation in Krisen\n\n🏭 Produktion und Fertigung:\n• Fokus auf Supply Chain Resilience und Produktionskontinuität\n• Integration von BCM in Lean Manufacturing und Qualitätsmanagementsysteme\n• Entwicklung alternativer Produktionsstandorte und Lieferantenstrategien\n• Berücksichtigung von Umwelt- und Sicherheitsrisiken\n• Koordination mit Lieferanten, Kunden und Logistikpartnern\n\n🏛️ Öffentlicher Sektor:\n• Betonung von Bürgerschutz und kritischen öffentlichen Dienstleistungen\n• Integration von BCM in Notfallmanagement und Katastrophenschutz\n• Entwicklung von Multi-Agency-Koordination und Ressourcenteilung\n• Berücksichtigung politischer und gesellschaftlicher Verantwortung\n• Koordination zwischen verschiedenen Regierungsebenen und Behörden\n\n🎓 Bildungseinrichtungen:\n• Fokus auf Studenten- und Mitarbeitersicherheit sowie Bildungskontinuität\n• Integration von BCM in Campus-Sicherheit und akademische Planung\n• Entwicklung von Remote-Learning-Kapazitäten und digitalen Alternativen\n• Berücksichtigung saisonaler Zyklen und akademischer Kalender\n• Koordination mit Eltern, Gemeinden und Bildungsbehörden\n\n💼 Kleine und mittlere Unternehmen:\n• Entwicklung kosteneffizienter und skalierbarer BCM-Lösungen\n• Fokus auf kritische Geschäftsfunktionen und Kernkompetenzen\n• Nutzung von Cloud-Services und externen Ressourcen für Resilienz\n• Integration von BCM in bestehende Managementprozesse\n• Aufbau von Netzwerken und Kooperationen für gegenseitige Unterstützung\n\n🌐 Internationale Organisationen:\n• Berücksichtigung kultureller, rechtlicher und operativer Unterschiede\n• Entwicklung globaler Standards mit lokaler Anpassungsfähigkeit\n• Koordination zwischen verschiedenen Ländern und Rechtssystemen\n• Integration von geopolitischen Risiken und Währungsschwankungen\n• Aufbau regionaler Resilienz-Netzwerke und Partnerschaften"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Rolle spielen Technologie und Digitalisierung im modernen Business Continuity Management?',
        answer: "Technologie und Digitalisierung haben Business Continuity Management fundamental transformiert und neue Möglichkeiten für Resilienz-Entwicklung geschaffen. Gleichzeitig entstehen neue Risiken und Abhängigkeiten, die innovative BCM-Ansätze erfordern.\n\n🤖 Künstliche Intelligenz und Machine Learning:\n• Predictive Analytics für Früherkennung von Risiken und Störungsmustern\n• Automatisierte Risikobewertung und kontinuierliche Monitoring-Systeme\n• Intelligente Entscheidungsunterstützung für Krisenmanagement und Ressourcenallokation\n• Chatbots und virtuelle Assistenten für Notfallkommunikation und Mitarbeiterunterstützung\n• Machine Learning für kontinuierliche Verbesserung von BCM-Strategien basierend auf historischen Daten\n\n☁️ Cloud Computing und Virtualisierung:\n• Flexible und skalierbare IT-Infrastrukturen für verbesserte Resilienz\n• Geografisch verteilte Datencenters und automatische Failover-Mechanismen\n• Software-as-a-Service-Lösungen für BCM-Management und -Dokumentation\n• Hybrid-Cloud-Strategien für optimale Balance zwischen Kontrolle und Flexibilität\n• Container-Technologien für schnelle Wiederherstellung und Skalierung von Anwendungen\n\n📱 Mobile Technologien und Remote Work:\n• Mobile BCM-Apps für Echtzeitkoordination und Kommunikation während Krisen\n• Remote-Work-Technologien als fundamentale BCM-Kapazität\n• Bring-Your-Own-Device-Strategien für erhöhte Flexibilität und Redundanz\n• Geolocation-Services für Mitarbeiter-Tracking und Sicherheitsmanagement\n• Mobile Dashboards für Management-Visibility und Entscheidungsunterstützung\n\n🌐 Internet of Things und Sensor-Technologien:\n• Echtzeit-Monitoring kritischer Infrastrukturen und Umgebungsbedingungen\n• Automatische Alarmierung bei Abweichungen von normalen Betriebsparametern\n• Predictive Maintenance für kritische Systeme und Ausrüstungen\n• Smart Building-Technologien für automatisierte Notfallreaktionen\n• Wearable Devices für Mitarbeitersicherheit und Gesundheitsmonitoring\n\n🔐 Cybersecurity und digitale Resilienz:\n• Integration von Cybersecurity in BCM-Strategien und -Pläne\n• Zero-Trust-Architekturen für verbesserte Sicherheit und Zugriffskontrolle\n• Backup- und Recovery-Strategien für digitale Assets und Daten\n• Incident Response-Automatisierung für schnelle Reaktion auf Cyber-Bedrohungen\n• Security Orchestration und automatisierte Threat Response-Systeme\n\n📊 Big Data und Analytics:\n• Datengetriebene Risikobewertung und Impact-Analyse\n• Real-time Dashboards für Situational Awareness und Entscheidungsunterstützung\n• Historische Datenanalyse für Verbesserung von BCM-Strategien\n• Social Media Monitoring für Früherkennung von Reputationsrisiken\n• Supply Chain Analytics für Identifikation von Vulnerabilitäten und Abhängigkeiten\n\n🔗 Blockchain und Distributed Ledger:\n• Sichere und unveränderliche Dokumentation von BCM-Aktivitäten und -Entscheidungen\n• Smart Contracts für automatisierte Aktivierung von BCM-Maßnahmen\n• Dezentrale Identitätsmanagement-Systeme für verbesserte Zugriffskontrolle\n• Supply Chain Transparency und Traceability für bessere Risikobewertung\n• Kryptographische Sicherung kritischer Daten und Kommunikation"
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
