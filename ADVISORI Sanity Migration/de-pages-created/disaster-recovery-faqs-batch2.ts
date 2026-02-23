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
    console.log('Updating Disaster Recovery page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'disaster-recovery' })
    
    if (!existingDoc) {
      throw new Error('Document "disaster-recovery" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Die Implementierung neuer Unternehmenslösungen kann komplex sein. Wie gestaltet ADVISORI den Onboarding-Prozess für seine Disaster Recovery Lösungen, um Disruptionen zu minimieren und eine nahtlose Integration in unsere bestehende IT-Landschaft sicherzustellen?",
        answer: "Wir verstehen, dass C-Level-Entscheider einen reibungslosen Übergang und minimale Beeinträchtigung des laufenden Betriebs erwarten. ADVISORI's Onboarding-Prozess für Disaster Recovery (DR) Lösungen ist darauf ausgelegt, Effizienz, Transparenz und eine enge Abstimmung mit Ihren internen Teams zu gewährleisten, um eine schnelle Wertschöpfung zu realisieren.\n\n⚙️ Strukturierter und transparenter Onboarding-Ansatz:\n• Phase 1: Strategische Ausrichtung & Planung: Gemeinsame Definition der Projektziele, SLAs, RTOs/RPOs und des Implementierungszeitplans in enger Abstimmung mit Ihrer IT-Führung und den Fachbereichen.\n• Phase 2: Technische Analyse & Design: Detaillierte Aufnahme Ihrer bestehenden IT-Infrastruktur, Applikationslandschaft und Abhängigkeiten. Entwurf einer maßgeschneiderten DR-Architektur, die Ihre spezifischen Anforderungen erfüllt.\n• Phase 3: Implementierung & Konfiguration: Sorgfältige Einrichtung der DR-Umgebung, Konfiguration der Replikationsmechanismen und Integration mit Ihren Kernsystemen durch unsere zertifizierten Experten.\n• Phase 4: Testing & Validierung: Durchführung umfassender Testszenarien – von Komponententests bis hin zu vollständigen Failover-Simulationen – um die Wirksamkeit der DR-Lösung zu verifizieren und RTO/RPO-Ziele zu bestätigen.\n• Phase 5: Übergabe & Schulung: Detaillierte Dokumentation, Schulung Ihrer internen Teams im Umgang mit der DR-Lösung und Definition der laufenden Betriebs- und Wartungsprozesse.\n\n🔗 Nahtlose Integration und Minimierung von Disruption:\n• Dediziertes Projektmanagement: Ein erfahrener Projektmanager von ADVISORI koordiniert alle Aktivitäten und dient als zentraler Ansprechpartner.\n• Enge Zusammenarbeit mit Ihrer IT: Wir arbeiten Hand in Hand mit Ihren IT-Teams, um deren Know-how einzubinden und einen reibungslosen Wissenstransfer sicherzustellen.\n• Phased Rollout (optional): Bei komplexen Umgebungen kann die Implementierung schrittweise erfolgen, um Risiken zu minimieren und frühzeitig Erfolge zu erzielen.\n• Minimale Ausfallzeiten während der Implementierung: Unsere Methodik zielt darauf ab, jegliche Beeinträchtigung Ihrer Produktivsysteme während des Setups zu vermeiden oder auf ein absolutes Minimum zu reduzieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Datensicherheit und Compliance sind für uns als C-Suite nicht verhandelbar. Welche spezifischen Sicherheitsarchitekturen und Compliance-Standards (z.B. ISO 27001, DSGVO-Konformität) untermauern die Disaster Recovery Lösungen von ADVISORI?",
        answer: "ADVISORI erkennt die überragende Bedeutung von Datensicherheit und Compliance für C-Level-Entscheider. Unsere Disaster Recovery (DR) Lösungen sind auf einem Fundament modernster Sicherheitsarchitekturen und der strikten Einhaltung relevanter Industriestandards und gesetzlicher Vorgaben aufgebaut, um Ihr wertvollstes Gut – Ihre Daten – umfassend zu schützen.\n\n🛡️ Mehrschichtige Sicherheitsarchitektur (Defense in Depth):\n• Datenverschlüsselung: Einsatz robuster Verschlüsselungsmethoden sowohl für Daten im Ruhezustand (at rest) als auch während der Übertragung (in transit), um unbefugten Zugriff zu verhindern.\n• Zugriffskontrolle und Identitätsmanagement: Implementierung strenger Zugriffskontrollen basierend auf dem Least-Privilege-Prinzip und Multi-Faktor-Authentifizierung (MFA) für alle administrativen Zugänge.\n• Netzwerksicherheit: Nutzung von Firewalls, Intrusion Detection/Prevention Systemen (IDS/IPS) und Segmentierung zur Absicherung der DR-Infrastruktur.\n• Sichere Datenzentren: Unsere DR-Infrastrukturen (oder die unserer Cloud-Partner) befinden sich in hochsicheren Rechenzentren, die physische Sicherheitsstandards wie ISO 27001 oder SOC 2 erfüllen.\n• Regelmäßige Sicherheitsaudits und Penetrationstests: Durchführung interner und externer Überprüfungen zur Identifizierung und Behebung potenzieller Schwachstellen.\n\n📜 Compliance und Zertifizierungen:\n• DSGVO-Konformität: Unsere Prozesse und Lösungen sind darauf ausgelegt, die Anforderungen der Datenschutz-Grundverordnung zu erfüllen, insbesondere im Hinblick auf Datenminimierung, Zweckbindung und Betroffenenrechte im DR-Kontext.\n• Branchenspezifische Standards: Berücksichtigung spezifischer regulatorischer Anforderungen Ihrer Branche (z.B. BaFin-Anforderungen für Finanzdienstleister, GxP für Pharma).\n• ISO 27001 Orientierung: Unsere Sicherheitsmanagementprozesse orientieren sich an den Best Practices des ISO 27001 Standards für Informationssicherheits-Managementsysteme (ISMS).\n• Transparente Dokumentation: Bereitstellung umfassender Dokumentation zu unseren Sicherheitsmaßnahmen und Compliance-Kontrollen zur Unterstützung Ihrer internen und externen Audit-Anforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Unser Unternehmen plant zukünftiges Wachstum und eine mögliche Expansion in neue Märkte. Wie gewährleisten die Disaster Recovery Lösungen von ADVISORI die notwendige Skalierbarkeit und Flexibilität, um unsere langfristige Geschäftsstrategie zu unterstützen?",
        answer: "Für zukunftsorientierte C-Level-Entscheider ist es entscheidend, dass heutige Investitionen auch langfristige strategische Ziele unterstützen. Die Disaster Recovery (DR) Lösungen von ADVISORI sind von Grund auf auf Skalierbarkeit und Flexibilität ausgelegt, um mit Ihrem Unternehmen zu wachsen, sich an veränderte Marktanforderungen anzupassen und Ihre Expansionspläne zu ermöglichen.\n\n📈 Skalierbarkeit für dynamisches Wachstum:\n• Modulare Architektur: Unsere DR-Lösungen sind modular aufgebaut, sodass Kapazitäten (Speicher, Rechenleistung, Bandbreite) bedarfsgerecht erweitert werden können, ohne die gesamte Infrastruktur neu gestalten zu müssen.\n• Cloud-native Optionen (DRaaS): Unsere Disaster Recovery as a Service (DRaaS) Angebote nutzen die inhärente Skalierbarkeit der Cloud. Ressourcen können dynamisch angepasst werden, sodass Sie nur für das bezahlen, was Sie tatsächlich benötigen, und bei Bedarf schnell hochskalieren können.\n• Pay-as-you-grow Modelle: Flexible Vertragsmodelle, die es Ihnen ermöglichen, Ihre DR-Investitionen an Ihr tatsächliches Geschäftswachstum anzupassen.\n• Unterstützung für hybride Umgebungen: Wir bieten Lösungen, die sowohl Ihre On-Premise-Systeme als auch Ihre Cloud-Workloads abdecken und eine nahtlose Skalierung über verschiedene Umgebungen hinweg ermöglichen.\n\n🌍 Flexibilität für strategische Anpassungen:\n• Technologieoffenheit: Unsere Lösungen sind darauf ausgelegt, mit einer breiten Palette von Technologien und Plattformen zu interagieren, was Ihnen Flexibilität bei zukünftigen Technologieentscheidungen gibt.\n• Anpassbare Service Level Agreements (SLAs): RTO- und RPO-Ziele können pro Applikation oder Geschäftsbereich definiert und bei Bedarf angepasst werden, um veränderten Kritikalitäten Rechnung zu tragen.\n• Geografische Redundanzoptionen: Wir bieten Lösungen mit geografisch verteilten Recovery-Standorten, um auch bei regionalen Großschadensereignissen Ihre Daten und Systeme zu schützen und internationale Expansion zu unterstützen.\n• Kontinuierliche Innovation: ADVISORI investiert kontinuierlich in die Weiterentwicklung seiner DR-Lösungen, um neue Technologien und Ansätze zu integrieren, die Ihnen helfen, auch zukünftigen Herausforderungen gewachsen zu sein."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche proaktiven Maßnahmen ergreift ADVISORI, um die Integrität und Verfügbarkeit unserer Daten im Recovery-Fall sicherzustellen, insbesondere im Hinblick auf Ransomware-Angriffe und Datenkorruption?",
        answer: "Die Bedrohung durch Ransomware und das Risiko der Datenkorruption stellen erhebliche Gefahren für die Geschäftskontinuität dar und erfordern von der C-Suite höchste Aufmerksamkeit. ADVISORI implementiert mehrschichtige, proaktive Verteidigungsstrategien innerhalb seiner Disaster Recovery (DR) Lösungen, um die Integrität Ihrer Daten zu wahren und eine schnelle, saubere Wiederherstellung im Ernstfall zu gewährleisten.\n\n🛡️ Schutz vor Ransomware und Datenkorruption:\n• Immutability und Air-Gapping von Backups: Wir setzen auf Backup-Technologien, die unveränderliche (immutable) Kopien Ihrer Daten erstellen. Diese können optional durch Air-Gapping – eine physische oder logische Trennung vom Produktivnetzwerk – zusätzlich geschützt werden, um sie vor Verschlüsselung durch Ransomware zu bewahren.\n• Versionierung und Point-in-Time Recovery: Unsere Systeme ermöglichen die Wiederherstellung früherer, unkorrumpierter Versionen Ihrer Daten (Granular Point-in-Time Recovery), sodass Sie auch nach einem Angriff auf einen sauberen Datenstand zurückgreifen können.\n• Kontinuierliche Überwachung und Anomalieerkennung: Einsatz von intelligenten Monitoring-Tools, die verdächtige Aktivitäten oder Anzeichen einer Kompromittierung (z.B. ungewöhnlich hohe Änderungsraten) frühzeitig erkennen und alarmieren können.\n• Getrennte Sicherheitsdomänen: Die DR-Umgebung wird in einer separaten, gesicherten Domäne betrieben, um das Risiko einer Ausbreitung von Malware aus der Produktivumgebung zu minimieren.\n\n🔄 Gewährleistung der Datenintegrität im Wiederherstellungsprozess:\n• Regelmäßige Integritätsprüfungen: Automatisierte und manuelle Überprüfungen der Backup-Daten auf Konsistenz und Lesbarkeit, um sicherzustellen, dass sie im Bedarfsfall auch tatsächlich wiederherstellbar sind.\n• Sandbox-Testing für Recovery: Möglichkeit, Wiederherstellungstests in einer isolierten Umgebung (Sandbox) durchzuführen. Dies erlaubt die Validierung der Datenintegrität und der Wiederherstellungsprozesse, ohne die Produktivsysteme zu beeinträchtigen.\n• Saubere Wiederherstellungspunkte: Klare Kennzeichnung und Management von Wiederherstellungspunkten, um sicherzustellen, dass im Ernstfall auf einen bekannten, nicht kompromittierten Stand zurückgegriffen wird.\n• Forensische Analysefähigkeiten (optional): Unterstützung bei der Analyse von Sicherheitsvorfällen, um den Angriffsvektor zu verstehen und zukünftige Risiken zu minimieren."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ C-Level FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
