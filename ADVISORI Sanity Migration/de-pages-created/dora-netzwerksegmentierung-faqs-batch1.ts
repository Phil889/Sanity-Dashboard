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
    console.log('Updating DORA Netzwerksegmentierung page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-netzwerksegmentierung' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-netzwerksegmentierung" not found')
    }
    
    // Create new FAQs for DORA network segmentation fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was sind die grundlegenden DORA-Anforderungen an die Netzwerksegmentierung und wie unterscheiden sie sich von traditionellen Ansätzen?',
        answer: "DORA etabliert spezifische und weitreichende Anforderungen an die Netzwerksegmentierung von Finanzinstituten, die deutlich über traditionelle Perimeter-basierte Sicherheitskonzepte hinausgehen. Die Regulierung fordert eine ganzheitliche, risikobasierte Herangehensweise, die operative Resilienz in den Mittelpunkt stellt und moderne Bedrohungslandschaften berücksichtigt.\n\n🛡️ DORA-spezifische Segmentierungsanforderungen:\n• Implementierung granularer Netzwerksegmentierung zur Isolation kritischer Finanzsysteme und Minimierung der Ausbreitung von Cyberbedrohungen\n• Etablierung robuster Zugriffskontrollmechanismen mit kontinuierlicher Verifikation und Least-Privilege-Prinzipien\n• Design adaptiver Sicherheitsarchitekturen, die sich dynamisch an verändernde Bedrohungslagen anpassen können\n• Integration umfassender Monitoring- und Logging-Funktionen für Echtzeit-Bedrohungserkennung und forensische Analysen\n• Gewährleistung der Betriebskontinuität kritischer Services auch bei partiellen Netzwerkausfällen oder Sicherheitsvorfällen\n\n🔄 Paradigmenwechsel von traditionellen Ansätzen:\n• Abkehr von statischen Perimeter-basierten Sicherheitsmodellen hin zu dynamischen Zero-Trust-Architekturen\n• Fokus auf kontinuierliche Verifikation statt einmaliger Authentifizierung beim Netzwerkzugang\n• Proaktive Bedrohungsabwehr durch intelligente Automatisierung anstelle reaktiver manueller Prozesse\n• Ganzheitliche Risikobewertung auf Basis von Kontext, Verhalten und Echtzeit-Intelligence\n• Integration von Compliance-Anforderungen in die Netzwerkarchitektur als Design-Prinzip, nicht als nachträgliche Ergänzung\n\n📊 Operative Resilienz als Kernprinzip:\n• Netzwerksegmentierung muss die Verfügbarkeit und Integrität kritischer Finanzsysteme auch unter Angriffsbedingungen gewährleisten\n• Implementierung redundanter Kommunikationspfade und Failover-Mechanismen für geschäftskritische Prozesse\n• Design selbstheilender Netzwerkarchitekturen mit automatisierter Incident-Response und Recovery-Funktionen\n• Berücksichtigung von Interdependenzen zwischen verschiedenen Systemen und Services bei der Segmentierungsplanung\n• Etablierung messbarer Resilienz-Metriken und kontinuierlicher Verbesserungsprozesse\n\n🎯 Regulatorische Integration und Governance:\n• Netzwerksegmentierung muss dokumentiert, nachvollziehbar und aufsichtskonform implementiert werden\n• Regelmäßige Validierung der Segmentierungseffektivität durch Tests, Audits und Penetrationstests\n• Integration in das übergeordnete IKT-Risikomanagement-Framework des Finanzinstituts\n• Berücksichtigung grenzüberschreitender Compliance-Anforderungen bei internationalen Organisationen\n• Etablierung klarer Governance-Strukturen und Verantwortlichkeiten für Segmentierungsentscheidungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie implementiere ich eine Zero-Trust-Netzwerkarchitektur, die den DORA-Anforderungen entspricht?',
        answer: "Die Implementierung einer DORA-konformen Zero-Trust-Netzwerkarchitektur erfordert einen systematischen, phasenweisen Ansatz, der technische Exzellenz mit regulatorischen Anforderungen und operationellen Realitäten in Einklang bringt. Zero Trust ist nicht nur eine Technologie, sondern ein fundamentaler Paradigmenwechsel in der Netzwerksicherheit.\n\n🏗️ Architektonische Grundprinzipien:\n• Implementierung des \"Never Trust, Always Verify\"-Prinzips für alle Netzwerkzugriffe, unabhängig von Standort oder Benutzeridentität\n• Etablierung granularer Mikrosegmentierung mit individuellen Sicherheitsrichtlinien für jede Anwendung und jeden Service\n• Design einer identitätszentrierten Sicherheitsarchitektur mit starker Authentifizierung und kontinuierlicher Autorisierung\n• Integration von Kontext-bewussten Zugriffsentscheidungen basierend auf Benutzerverhalten, Gerätestatus und Risikobewertungen\n• Implementierung verschlüsselter Kommunikation für alle Datenübertragungen, sowohl intern als auch extern\n\n🔐 Identitäts- und Zugriffsverwaltung:\n• Deployment einer zentralisierten Identity and Access Management Plattform mit Multi-Faktor-Authentifizierung\n• Implementierung von Privileged Access Management für administrative und kritische Systemzugriffe\n• Etablierung dynamischer Berechtigungsvergabe basierend auf Rollen, Kontext und Risikobewertungen\n• Integration von Behavioral Analytics zur Erkennung anomaler Zugriffsmuster und potenzieller Insider-Bedrohungen\n• Automatisierte Lifecycle-Verwaltung von Identitäten und Berechtigungen mit regelmäßigen Access Reviews\n\n🌐 Netzwerk-Mikrosegmentierung:\n• Implementierung Software-Defined Perimeter für granulare Netzwerkkontrolle auf Anwendungsebene\n• Design von Sicherheitszonen basierend auf Datenklassifizierung, Risikobewertung und Compliance-Anforderungen\n• Etablierung von East-West-Traffic-Kontrollen zwischen internen Systemen und Services\n• Integration von Network Access Control für Endgeräte-Compliance und Quarantäne-Funktionen\n• Implementierung von API-Gateways und Service Mesh für sichere Service-zu-Service-Kommunikation\n\n📡 Kontinuierliches Monitoring und Analytics:\n• Deployment von User and Entity Behavior Analytics für Echtzeit-Bedrohungserkennung\n• Integration von Network Traffic Analysis und Deep Packet Inspection für umfassende Netzwerkvisibilität\n• Implementierung von Security Information and Event Management mit KI-gestützter Anomalieerkennung\n• Etablierung von Threat Intelligence Feeds für proaktive Bedrohungsabwehr\n• Automatisierte Incident Response mit orchestrierten Containment- und Remediation-Prozessen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche spezifischen Herausforderungen entstehen bei der Segmentierung kritischer Finanzsysteme und wie löse ich diese?',
        answer: "Die Segmentierung kritischer Finanzsysteme bringt einzigartige Herausforderungen mit sich, die sowohl technische Komplexität als auch regulatorische Anforderungen und operative Kontinuität berücksichtigen müssen. Finanzinstitute operieren in hochvernetzten, zeitkritischen Umgebungen, wo selbst minimale Latenz oder Verfügbarkeitsprobleme erhebliche Geschäftsauswirkungen haben können.\n\n⚡ Performance und Latenz-Herausforderungen:\n• Kritische Handelssysteme erfordern Ultra-Low-Latency-Verbindungen, die durch Segmentierungsmaßnahmen nicht beeinträchtigt werden dürfen\n• Implementierung von Hardware-basierten Segmentierungslösungen für zeitkritische Anwendungen\n• Design optimierter Netzwerkpfade mit minimalen Hops und Inspection-Points für latenz-sensitive Services\n• Verwendung von Bypass-Mechanismen für kritische Transaktionen bei Sicherheitssystem-Ausfällen\n• Kontinuierliche Performance-Überwachung und automatische Anpassung von Segmentierungsrichtlinien\n\n🔗 Interdependenz-Management:\n• Finanzielle Systeme sind hochgradig vernetzt mit komplexen Abhängigkeiten zwischen verschiedenen Services und Anwendungen\n• Durchführung umfassender Dependency-Mapping zur Identifikation aller System-Interdependenzen\n• Design von Segmentierungsstrategien, die kritische Geschäftsprozesse nicht unterbrechen\n• Implementierung von Service-Level-Agreements zwischen segmentierten Bereichen\n• Etablierung von Eskalationspfaden für kritische Inter-Segment-Kommunikation\n\n💼 Regulatorische Compliance-Komplexität:\n• Verschiedene Finanzsysteme unterliegen unterschiedlichen regulatorischen Anforderungen und Datenschutzbestimmungen\n• Design von Compliance-bewussten Segmentierungsarchitekturen, die verschiedene regulatorische Zonen berücksichtigen\n• Implementierung von Data Loss Prevention und Encryption für sensitive Finanzdaten\n• Etablierung von Audit-Trails und Logging-Mechanismen für regulatorische Berichterstattung\n• Integration von Privacy-by-Design-Prinzipien in die Segmentierungsarchitektur\n\n🛠️ Legacy-System-Integration:\n• Viele Finanzinstitute betreiben kritische Legacy-Systeme, die moderne Segmentierungstechnologien nicht nativ unterstützen\n• Entwicklung von Wrapper- und Proxy-Lösungen für Legacy-System-Integration\n• Implementierung von Network-based Segmentation für Systeme ohne Agent-Unterstützung\n• Design von Migrations-Strategien für schrittweise Modernisierung kritischer Systeme\n• Etablierung von Kompensationskontrollen für Systeme mit begrenzten Sicherheitsfunktionen\n\n🔄 Kontinuierliche Verfügbarkeit und Disaster Recovery:\n• Finanzielle Services erfordern kontinuierliche Verfügbarkeit mit minimalen geplanten und ungeplanten Ausfallzeiten\n• Design von redundanten Segmentierungsarchitekturen mit automatischen Failover-Mechanismen\n• Implementierung von Hot-Standby-Systemen und Load-Balancing für kritische Segmente\n• Etablierung von Cross-Site-Segmentierung für Disaster Recovery und Business Continuity\n• Integration von Segmentierungskontrollen in Disaster Recovery Testing und Business Continuity Planning"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie entwickle ich eine effektive Governance-Struktur für DORA-konforme Netzwerksegmentierung?',
        answer: "Eine effektive Governance-Struktur für DORA-konforme Netzwerksegmentierung erfordert klare Verantwortlichkeiten, strukturierte Entscheidungsprozesse und kontinuierliche Überwachungsmechanismen. Die Governance muss sowohl strategische Ausrichtung als auch operative Exzellenz gewährleisten und dabei regulatorische Anforderungen vollständig erfüllen.\n\n👥 Organisationsstruktur und Verantwortlichkeiten:\n• Etablierung eines Network Segmentation Governance Board mit Vertretern aus IT, Sicherheit, Compliance und Geschäftsbereichen\n• Definition klarer Rollen und Verantwortlichkeiten für Segmentierungsentscheidungen auf strategischer und operativer Ebene\n• Benennung von Segmentation Owners für kritische Geschäftsbereiche und Anwendungsdomänen\n• Integration der Netzwerksegmentierung in bestehende IT-Governance und Risk-Management-Strukturen\n• Etablierung von Eskalationspfaden für kritische Segmentierungsentscheidungen und Notfallsituationen\n\n📋 Richtlinien und Standards:\n• Entwicklung umfassender Segmentierungsrichtlinien, die DORA-Anforderungen und Geschäftsziele berücksichtigen\n• Definition von Segmentierungsstandards für verschiedene Systemkategorien und Risikostufen\n• Etablierung von Ausnahmemanagement-Prozessen für Abweichungen von Standard-Segmentierungsrichtlinien\n• Integration von Segmentierungsanforderungen in System-Design und Procurement-Prozesse\n• Regelmäßige Überprüfung und Aktualisierung von Richtlinien basierend auf regulatorischen Änderungen und Bedrohungsentwicklungen\n\n🔍 Monitoring und Compliance-Überwachung:\n• Implementierung kontinuierlicher Compliance-Monitoring-Systeme für Segmentierungsrichtlinien\n• Etablierung von Key Performance Indicators und Metriken für Segmentierungseffektivität\n• Design automatisierter Compliance-Dashboards für Management-Reporting und Aufsichtsbehörden\n• Integration von Segmentierungs-Compliance in interne Audit-Programme und Risk Assessments\n• Entwicklung von Incident-Response-Prozessen für Segmentierungsverletzungen und Policy-Abweichungen\n\n📊 Risikomanagement und Entscheidungsfindung:\n• Integration der Netzwerksegmentierung in das übergeordnete Enterprise Risk Management Framework\n• Entwicklung von Risikobewertungsmodellen für Segmentierungsentscheidungen und Architekturänderungen\n• Etablierung von Risk-based Decision Making für Segmentierungsinvestitionen und Prioritätensetzung\n• Implementation von Scenario Planning und Stress Testing für Segmentierungsarchitekturen\n• Design von Cost-Benefit-Analysen für Segmentierungsmaßnahmen und Technologie-Investitionen\n\n🔄 Kontinuierliche Verbesserung und Innovation:\n• Etablierung regelmäßiger Governance-Reviews und Maturity Assessments für Segmentierungspraktiken\n• Integration von Lessons Learned aus Sicherheitsvorfällen und Compliance-Audits\n• Entwicklung von Innovation-Programmen für neue Segmentierungstechnologien und -ansätze\n• Aufbau von Partnerschaften mit Technologie-Anbietern und Forschungseinrichtungen\n• Participation in Industrie-Arbeitsgruppen und Best-Practice-Sharing-Initiativen"
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
