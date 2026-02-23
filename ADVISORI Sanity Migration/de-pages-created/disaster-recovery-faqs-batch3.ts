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
    console.log('Updating Disaster Recovery page with C-Level FAQs batch 3 (German)...')
    
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
        _key: generateKey('faq', 9),
        question: "Der Markt für Disaster Recovery Lösungen ist vielfältig. Was unterscheidet ADVISORI's Ansatz fundamental von anderen Anbietern und wie profitieren wir als C-Suite davon?",
        answer: "Für C-Level-Entscheider ist es essenziell, nicht nur eine funktionierende, sondern eine überlegene Disaster Recovery (DR) Lösung zu wählen, die echten strategischen Mehrwert bietet. ADVISORI differenziert sich durch einen ganzheitlichen, beratungsorientierten und technologie-agilen Ansatz, der über die reine Bereitstellung von Infrastruktur hinausgeht.\n\n🌟 ADVISORI's Kern-Differenzierungsmerkmale:\n• Strategische Partnerschaft statt reiner Anbieterrolle: Wir sehen uns als langfristiger Partner Ihrer C-Suite, der Ihre Geschäftsziele versteht und DR als integralen Bestandteil Ihrer Unternehmensstrategie positioniert. Unser Fokus liegt auf maßgeschneiderter Beratung und gemeinsamer Lösungsentwicklung.\n• Business-Outcome-Orientierung: Anstatt uns auf rein technische Metriken zu beschränken, konzentrieren wir uns auf die Erreichung Ihrer Geschäftsziele – sei es die Minimierung von Umsatzausfällen, die Einhaltung strenger Compliance-Vorgaben oder die Befähigung zur digitalen Transformation.\n• Technologie-Unabhängigkeit und Best-of-Breed-Ansatz: Wir sind nicht an spezifische Hardware- oder Softwarehersteller gebunden. Dies ermöglicht es uns, die für Ihre individuellen Bedürfnisse und Ihre bestehende IT-Landschaft optimal passenden Technologien auszuwählen und zu integrieren.\n• Expertise in komplexen und regulierten Umgebungen: ADVISORI verfügt über tiefgreifende Erfahrung in der Konzeption und Implementierung von DR-Lösungen für Unternehmen mit hohen Anforderungen an Sicherheit, Compliance und Verfügbarkeit, beispielsweise im Finanzsektor oder bei kritischen Infrastrukturen.\n\n📈 Vorteile für die C-Suite:\n• Maximierter ROI: Durch die Fokussierung auf Ihre Geschäftsziele und die Auswahl der effizientesten Technologien stellen wir sicher, dass Ihre DR-Investition den größtmöglichen Nutzen stiftet.\n• Reduzierte Komplexität: Wir managen die Komplexität der DR-Lösungen, sodass sich Ihre internen Teams auf ihre Kernkompetenzen konzentrieren können.\n• Zukunftssicherheit: Unser adaptiver Ansatz und unsere kontinuierliche Marktbeobachtung gewährleisten, dass Ihre DR-Strategie auch zukünftigen Herausforderungen und technologischen Entwicklungen gewachsen ist.\n• Erhöhte Entscheidungssicherheit: Wir liefern transparente, datengestützte Entscheidungsgrundlagen, die es Ihnen ermöglichen, Risiken und Investitionen im Bereich DR fundiert zu bewerten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Wie stellt ADVISORI sicher, dass unsere Disaster Recovery Lösung nicht nur heute, sondern auch in Zukunft den sich wandelnden Geschäftsanforderungen und technologischen Entwicklungen gerecht wird? Welche Rolle spielt hierbei die strategische Partnerschaft?",
        answer: "C-Level-Entscheider benötigen die Gewissheit, dass Investitionen in Disaster Recovery (DR) nachhaltig sind und die Zukunftsfähigkeit des Unternehmens unterstützen. ADVISORI setzt auf eine proaktive, partnerschaftliche Zusammenarbeit und kontinuierliche Innovation, um sicherzustellen, dass Ihre DR-Lösung stets optimal auf Ihre aktuellen und zukünftigen Bedürfnisse ausgerichtet ist.\n\n🤝 Strategische Partnerschaft als Fundament:\n• Regelmäßige Strategie-Reviews: Wir führen in regelmäßigen Abständen (z.B. jährlich oder bei signifikanten Geschäftsveränderungen) gemeinsame Reviews Ihrer DR-Strategie durch. Dabei bewerten wir die aktuelle Effektivität, identifizieren neue Risiken und passen die Lösung an veränderte Rahmenbedingungen an.\n• Dedizierter Account Manager & Technical Lead: Sie erhalten feste Ansprechpartner, die Ihre Geschäftssituation und Ihre DR-Umgebung genau kennen und Sie proaktiv beraten.\n• Zugang zu Expertenwissen: Profitieren Sie vom Know-how unserer Spezialisten in Bereichen wie Cloud-Technologien, Cybersecurity, Datenmanagement und branchenspezifischen Compliance-Anforderungen.\n• Gemeinsame Roadmap-Planung: Wir informieren Sie frühzeitig über relevante technologische Entwicklungen und Trends im DR-Bereich und erarbeiten gemeinsam, wie diese optimal für Ihr Unternehmen genutzt werden können.\n\n🚀 Kontinuierliche Anpassung und Innovation:\n• Proaktives Monitoring und Reporting: Kontinuierliche Überwachung der DR-Systeme und regelmäßige Berichte über Performance, Testläufe und potenzielle Optimierungsbereiche.\n• Integration neuer Technologien: Wir evaluieren laufend neue DR-Technologien und -Methoden (z.B. KI-gestützte Automatisierung, fortschrittliche Replikationsverfahren) und integrieren diese bei Bedarf in Ihre Lösung.\n• Skalierbarkeits- und Flexibilitäts-Checks: Regelmäßige Überprüfung, ob die aktuelle DR-Architektur noch zu Ihren Wachstumsplänen und Ihrer strategischen Ausrichtung passt.\n• Schulung und Wissensmanagement: Wir unterstützen Sie dabei, das notwendige Know-how in Ihren Teams aufzubauen und aktuell zu halten, um die DR-Prozesse effektiv zu managen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "In Anbetracht der zunehmenden Abhängigkeit von digitalen Prozessen, wie hilft ADVISORI der C-Suite, die 'Single Points of Failure' in unserer Wertschöpfungskette zu identifizieren und durch resiliente DR-Maßnahmen zu eliminieren?",
        answer: "Die Identifizierung und Eliminierung von 'Single Points of Failure' (SPOFs) ist für die C-Suite von entscheidender Bedeutung, um die operative Stabilität und die Kontinuität der Wertschöpfung zu sichern. ADVISORI verfolgt einen methodischen Ansatz, um kritische Schwachstellen in Ihren digitalen Prozessen und der zugrundeliegenden IT-Infrastruktur aufzudecken und durch maßgeschneiderte Disaster Recovery (DR) Maßnahmen robuste Redundanzen zu schaffen.\n\n🔍 Methodische Identifizierung von SPOFs:\n• Business Impact Analyse (BIA) mit Fokus auf Wertschöpfungsketten: Wir analysieren nicht nur einzelne Systeme, sondern die gesamten End-to-End-Geschäftsprozesse und deren Abhängigkeiten, um kritische Knotenpunkte zu identifizieren, deren Ausfall die gesamte Wertschöpfungskette gefährden würde.\n• Technische Tiefenanalyse der IT-Architektur: Detaillierte Untersuchung Ihrer Netzwerk-, Server-, Speicher- und Applikationslandschaft auf fehlende Redundanzen, Konzentrationsrisiken und kritische Abhängigkeiten.\n• Szenariobasierte 'Was-wäre-wenn'-Analysen: Simulation verschiedener Ausfallszenarien (z.B. Ausfall eines Rechenzentrums, eines Kernsystems, eines wichtigen Dienstleisters), um die Auswirkungen auf Ihre Geschäftsprozesse zu verstehen und SPOFs aufzudecken.\n• Überprüfung von Drittanbieter-Abhängigkeiten: Analyse der Resilienz Ihrer kritischen Lieferanten und Dienstleister, da diese ebenfalls SPOFs darstellen können.\n\n🛡️ Eliminierung von SPOFs durch resiliente DR-Maßnahmen:\n• Design hochverfügbarer Architekturen: Implementierung von redundanten Systemen, Failover-Clustern und Load-Balancing-Mechanismen für kritische Komponenten.\n• Geografische Redundanz: Verteilung von Systemen und Daten auf mehrere, geografisch getrennte Standorte, um regionale Ausfälle abzufedern.\n• Diversifizierung von Technologien und Anbietern: Reduktion der Abhängigkeit von einzelnen Technologien oder Lieferanten, wo sinnvoll und wirtschaftlich vertretbar.\n• Entwicklung robuster Wiederherstellungspläne: Erstellung detaillierter und getesteter Pläne zur schnellen Wiederherstellung von Systemen und Prozessen im Falle eines SPOF-Ausfalls.\n• Kontinuierliches Monitoring und Testing: Überwachung kritischer Komponenten und regelmäßige Tests der Failover-Mechanismen, um deren Funktionsfähigkeit sicherzustellen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Abgesehen von der reinen Schadensbegrenzung, wie können ADVISORI's Disaster Recovery Lösungen einen positiven Beitrag zur operativen Exzellenz und zur Optimierung unserer IT-Gesamtkosten (TCO) leisten?",
        answer: "Für C-Level-Entscheider geht es bei Disaster Recovery (DR) nicht nur um die Abwehr von Katastrophen, sondern zunehmend auch um die Realisierung von Effizienzgewinnen und die Optimierung der Total Cost of Ownership (TCO) im IT-Bereich. ADVISORI's Ansatz zielt darauf ab, DR-Lösungen so zu gestalten, dass sie aktiv zur operativen Exzellenz beitragen und Kostenvorteile generieren.\n\n⚙️ Beitrag zur Operativen Exzellenz:\n• Standardisierung und Automatisierung von Prozessen: Durch die Implementierung klar definierter und weitgehend automatisierter DR-Prozesse werden manuelle Fehler reduziert, die Wiederherstellungszeiten verkürzt und die Zuverlässigkeit erhöht.\n• Verbesserte IT-Governance und -Kontrolle: Ein strukturierter DR-Ansatz erfordert eine genaue Dokumentation der IT-Landschaft und der Abhängigkeiten, was zu einer besseren Übersicht und Kontrolle über die IT-Systeme führt.\n• Optimierte Ressourcennutzung: Moderne DR-Lösungen, insbesondere Cloud-basierte Ansätze (DRaaS), ermöglichen eine bedarfsgerechte Nutzung von Ressourcen. Inaktive Recovery-Systeme können im Normalbetrieb für Test/Dev-Umgebungen oder andere nicht-kritische Workloads genutzt werden.\n• Reduktion der Komplexität: Durch die Auslagerung komplexer DR-Aufgaben an Spezialisten wie ADVISORI können sich Ihre internen IT-Teams auf strategische Kernaufgaben konzentrieren.\n\n💰 Optimierung der IT-Gesamtkosten (TCO):\n• Vermeidung hoher Ad-hoc-Kosten im Notfall: Geplante und getestete DR-Maßnahmen sind signifikant kostengünstiger als reaktive Notfallbewältigung.\n• Reduktion von Investitionskosten (CAPEX): Cloud-basierte DRaaS-Modelle eliminieren oft die Notwendigkeit hoher Vorabinvestitionen in eigene redundante Hardware und Rechenzentrumskapazitäten.\n• Vorhersehbare Betriebskosten (OPEX): Klare Service Level Agreements und transparente Preismodelle ermöglichen eine bessere Planbarkeit der laufenden DR-Kosten.\n• Konsolidierung von Backup- und DR-Infrastrukturen: Ein integrierter Ansatz für Backup und DR kann zu Einsparungen durch die Reduktion von Insellösungen und redundanten Tools führen.\n• Effizientere Datenspeicherung: Moderne DR-Lösungen nutzen oft fortschrittliche Technologien zur Datenreduktion (Deduplizierung, Komprimierung), was die Speicherkosten senkt."
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
    console.log('✅ C-Level FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
