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
    console.log('Updating Disaster Recovery page with C-Level FAQs batch 1 (German)...')
    
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
        _key: generateKey('faq', 1),
        question: "Warum ist eine proaktive Disaster Recovery Strategie für die C-Suite mehr als nur eine technische Notwendigkeit und wie adressiert ADVISORI dies?",
        answer: "Für C-Level-Führungskräfte transzendiert Disaster Recovery (DR) die reine IT-Wiederherstellung; es ist ein fundamentaler Pfeiler der Unternehmensresilienz und strategischen Voraussicht. Eine Unterbrechung kritischer Geschäftsprozesse kann nicht nur zu direkten finanziellen Verlusten führen, sondern auch das Marktvertrauen, die Kundenbindung und den Unternehmenswert nachhaltig schädigen. ADVISORI versteht DR als strategische Komponente zur Sicherung der langfristigen Wettbewerbsfähigkeit.\n\n🎯 Strategische Imperative für die Führungsebene:\n• Sicherung der Geschäftskontinuität: Gewährleistung, dass das Unternehmen auch bei schwerwiegenden Störungen handlungsfähig bleibt und Kernfunktionen aufrechterhalten kann.\n• Risikomanagement und Compliance: Erfüllung regulatorischer Anforderungen (z.B. DORA, NIS2, DSGVO) und Minimierung von Haftungsrisiken für die Geschäftsleitung.\n• Schutz des Unternehmenswerts: Abwendung von Reputationsschäden und Erhalt des Vertrauens von Investoren, Kunden und Partnern.\n• Operative Exzellenz: Reduktion der Anfälligkeit für Betriebsunterbrechungen und Optimierung der Wiederherstellungsprozesse.\n\n🛡️ Der ADVISORI-Ansatz für strategisches DR:\n• Ganzheitliche Risikobewertung: Wir analysieren nicht nur technische Risiken, sondern auch deren Auswirkungen auf Ihre übergeordneten Geschäftsziele und strategischen Initiativen.\n• Maßgeschneiderte Resilienz-Architekturen: Entwicklung von DR-Plänen, die präzise auf Ihre spezifischen Geschäftsanforderungen, Risikotoleranz und Wachstumspläne zugeschnitten sind.\n• Integration in die Unternehmensstrategie: Wir positionieren DR nicht als isolierte IT-Funktion, sondern als integralen Bestandteil Ihrer Corporate Governance und strategischen Planung.\n• Fokus auf Entscheidungsfindung: Bereitstellung klarer, datengestützter Einblicke, die es der C-Suite ermöglichen, fundierte Entscheidungen über DR-Investitionen und Risikobereitschaft zu treffen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifizieren wir den ROI einer Investition in ADVISORI's Disaster Recovery Lösungen und welchen direkten Beitrag leistet dies zur EBITDA-Marge?",
        answer: "Die Investition in robuste Disaster Recovery Lösungen von ADVISORI ist keine reine Kostenstelle, sondern ein strategischer Hebel zur Wertsteigerung und zum Schutz Ihrer Profitabilität. Der Return on Investment (ROI) manifestiert sich sowohl in der Vermeidung direkter und indirekter Kosten im Schadensfall als auch in der Stärkung der operativen Effizienz und des Marktvertrauens.\n\n💰 Direkter Einfluss auf EBITDA und finanzielle Stabilität:\n• Vermeidung von Umsatzausfällen: Jede Minute Ausfallzeit kostet. Unsere Lösungen minimieren diese Ausfallzeiten drastisch und sichern so kontinuierliche Einnahmeströme.\n• Reduktion von Wiederherstellungskosten: Ungeplante Wiederherstellungen sind signifikant teurer als geplante. Ein proaktiver DR-Plan senkt Ad-hoc-Kosten für Notfallpersonal, Expresslieferungen von Hardware und Datenrettung.\n• Schutz vor Vertragsstrafen und Reputationsschäden: Nichteinhaltung von SLAs oder Datenverluste können zu empfindlichen Strafen und langfristigem Vertrauensverlust führen, die das EBITDA direkt belasten.\n• Optimierung von Versicherungskosten: Nachweisbare DR-Kapazitäten können zu günstigeren Prämien bei Cyber-Versicherungen führen.\n\n📈 Indirekte Werttreiber und strategische Vorteile:\n• Erhöhte Betriebseffizienz: Klar definierte DR-Prozesse und Automatisierung reduzieren den manuellen Aufwand und ermöglichen eine schnellere Rückkehr zum Normalbetrieb.\n• Gestärktes Kunden- und Investorenvertrauen: Eine demonstrierte Fähigkeit zur Krisenbewältigung ist ein starkes Signal an den Markt und kann die Unternehmensbewertung positiv beeinflussen.\n• Wettbewerbsvorteil: Unternehmen mit überlegener Resilienz können Marktanteile gewinnen, wenn Wettbewerber durch Störungen beeinträchtigt werden.\n• Fundament für digitale Transformation: Solide DR-Fähigkeiten sind eine Grundvoraussetzung für die sichere Einführung neuer digitaler Technologien und Geschäftsmodelle."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Die Bedrohungslandschaft entwickelt sich rasant – von komplexen Cyberangriffen bis hin zu unvorhersehbaren Naturereignissen. Wie stellt ADVISORI sicher, dass unsere DR-Strategie diesen dynamischen Risiken gewachsen ist?",
        answer: "In einer Ära der Polykrisen, in der Cyber-Bedrohungen, geopolitische Instabilitäten und klimatische Extreme zunehmen, ist eine statische Disaster Recovery Strategie unzureichend. ADVISORI setzt auf einen dynamischen und adaptiven Ansatz, um die Resilienz Ihres Unternehmens kontinuierlich an die sich wandelnde Risikolandschaft anzupassen und so die C-Suite proaktiv zu unterstützen.\n\n🔄 Dynamische Risikoanpassung als Kernprinzip:\n• Kontinuierliche Bedrohungsanalyse (Threat Intelligence): Wir integrieren aktuelle Erkenntnisse über neue Angriffsmuster, Schwachstellen und potenzielle Störfaktoren in unsere DR-Planung und -Tests.\n• Szenariobasierte Planung: Über traditionelle IT-Ausfälle hinaus simulieren wir komplexe, mehrdimensionale Krisenszenarien (z.B. Ransomware-Angriffe mit Datenexfiltration, Lieferkettenunterbrechungen, regionale Stromausfälle).\n• Adaptive Technologie-Stacks: Unsere Lösungen nutzen flexible und skalierbare Technologien (z.B. Cloud-native DRaaS, KI-gestützte Anomalieerkennung), die eine schnelle Anpassung an neue Bedrohungsvektoren ermöglichen.\n• Regelmäßige Strategieüberprüfung und -anpassung: Wir etablieren einen Zyklus der kontinuierlichen Verbesserung, in dem DR-Pläne, Technologien und Prozesse regelmäßig auf ihre Wirksamkeit gegenüber aktuellen Risiken überprüft und optimiert werden.\n\n🔍 Proaktive Maßnahmen von ADVISORI:\n• Advanced Early Warning Systeme: Implementierung von Systemen zur frühzeitigen Erkennung potenzieller Bedrohungen und Schwachstellen, bevor sie zu einem schwerwiegenden Vorfall eskalieren.\n• Resilienz durch Design (Resilience by Design): Beratung zur Integration von Resilienz-Prinzipien in Ihre IT-Architektur und Geschäftsprozesse von Grund auf.\n• Krisenmanagement-Integration: Enge Verzahnung der technischen DR-Pläne mit den übergeordneten Krisenmanagement- und Business-Continuity-Prozessen Ihres Unternehmens.\n• Wissens-Transfer und Schulung: Befähigung Ihrer Teams, neue Risiken zu erkennen und angemessen auf sich verändernde Bedrohungslagen zu reagieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI Disaster Recovery von einem reinen Kostenzentrum zu einem strategischen Enabler für Geschäftswachstum und Innovation aus C-Level-Sicht?",
        answer: "Traditionell wurde Disaster Recovery (DR) oft als notwendige, aber passive Kostenposition betrachtet. ADVISORI verfolgt einen modernen Ansatz, der DR als aktiven strategischen Enabler positioniert. Für die C-Suite bedeutet dies, dass eine robuste DR-Infrastruktur nicht nur Risiken minimiert, sondern auch aktiv Geschäftswachstum, Innovation und die Erschließung neuer Marktchancen unterstützt.\n\n🚀 Von Risikominimierung zu strategischer Befähigung:\n• Absicherung von Investitionen in Innovation: Digitale Transformationsprojekte und die Einführung neuer Technologien (KI, IoT, Cloud) bergen inhärente Risiken. Eine solide DR-Basis schützt diese Investitionen und ermöglicht mutigere Innovationsschritte.\n• Schnellere Markteinführung (Time-to-Market): Unternehmen mit resilienten Systemen können neue Produkte und Dienstleistungen schneller und mit geringerem Risiko einführen, da die Auswirkungen potenzieller Störungen kalkulierbarer sind.\n• Erschließung neuer Märkte und Regionen: Eine skalierbare und geografisch flexible DR-Lösung ermöglicht es Unternehmen, global zu expandieren, ohne die Geschäftskontinuität zu gefährden.\n• Stärkung der Verhandlungsposition: Nachweisbare Resilienz kann bei Verhandlungen mit Großkunden, Partnern und Investoren ein entscheidender Vorteil sein und zu besseren Konditionen führen.\n\n💡 Wie ADVISORI den Wandel unterstützt:\n• DR als Service (DRaaS) für Agilität: Unsere Cloud-basierten DRaaS-Angebote bieten die Flexibilität und Skalierbarkeit, die für dynamische Geschäftsumgebungen erforderlich sind, ohne hohe Vorabinvestitionen in Hardware.\n• Datengetriebene Entscheidungsfindung: Wir liefern C-Level-Dashboards und Reports, die nicht nur technische Metriken, sondern auch die geschäftlichen Auswirkungen und den strategischen Wert der DR-Maßnahmen aufzeigen.\n• Integration mit Entwicklungszyklen (DevSecOps): Wir fördern die Einbindung von DR-Überlegungen bereits in den Entwicklungs- und Betriebsprozess neuer Anwendungen und Systeme.\n• Beratung für resiliente Geschäftsmodelle: Über die reine IT hinaus beraten wir Sie, wie Resilienzprinzipien in Ihre gesamten Geschäftsmodelle und Wertschöpfungsketten integriert werden können, um nachhaltiges Wachstum zu sichern."
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
    console.log('✅ C-Level FAQs batch 1 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
