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
    console.log('Updating Data-as-a-Service page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'data-as-a-service' })
    
    if (!existingDoc) {
      throw new Error('Document "data-as-a-service" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist Data-as-a-Service für die C-Suite mehr als nur eine technische Lösung und wie positioniert ADVISORI DaaS als strategischen Geschäftstreiber?",
        answer: "Für C-Level-Führungskräfte repräsentiert Data-as-a-Service (DaaS) eine fundamentale Transformation der Unternehmensstrategie, die weit über die reine Datenbereitstellung hinausgeht. Es handelt sich um die strategische Neupositionierung von Datenassets als eigenständige Geschäftsprodukte, die sowohl interne Effizienz als auch externe Monetarisierung ermöglichen. ADVISORI versteht DaaS als Katalysator für nachhaltige Wettbewerbsvorteile und digitale Marktführerschaft.\n\n🎯 Strategische Imperative für die Führungsebene:\n• Datentransformation zu Geschäftsassets: Verwandlung ungenutzter Datenbestände in strategische Vermögenswerte, die direkten Geschäftswert generieren und neue Umsatzströme erschließen.\n• Marktdifferenzierung durch Datenintelligenz: Aufbau einzigartiger Marktpositionen durch proprietäre Datenprodukte, die Kunden und Partnern unvergleichbare Einblicke und Mehrwerte bieten.\n• Operative Exzellenz und Entscheidungsqualität: Bereitstellung hochwertiger, konsistenter Daten für alle Geschäftsbereiche zur Verbesserung der strategischen Entscheidungsfindung.\n• Compliance als Wettbewerbsvorteil: Proaktive Erfüllung regulatorischer Anforderungen wie EU AI Act und DSGVO als Vertrauensbildung und Marktdifferenzierung.\n\n🛡️ Der ADVISORI-Ansatz für strategisches DaaS:\n• Ganzheitliche Geschäftsstrategie-Integration: Wir entwickeln DaaS-Lösungen, die nahtlos in Ihre übergeordneten Geschäftsziele integriert sind und diese aktiv unterstützen.\n• Compliance-First Architektur: Alle unsere DaaS-Implementierungen sind von Grund auf EU AI Act konform konzipiert, wodurch regulatorische Risiken minimiert und Marktvertrauen gestärkt werden.\n• Skalierbare Wertschöpfung: Unsere Lösungen sind darauf ausgelegt, mit Ihrem Unternehmen zu wachsen und kontinuierlich neue Geschäftsmöglichkeiten zu erschließen.\n• Partnerschaftlicher Ansatz: Wir fungieren als strategischer Partner, der nicht nur Technologie implementiert, sondern auch bei der Entwicklung neuer Geschäftsmodelle und Marktstrategien unterstützt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifizieren wir den ROI einer ADVISORI Data-as-a-Service Investition und welchen direkten Einfluss hat dies auf unsere Unternehmensbewertung und EBITDA-Entwicklung?",
        answer: "Die Investition in ADVISORI Data-as-a-Service Lösungen generiert messbaren Return on Investment durch multiple Wertschöpfungskanäle, die sowohl operative Effizienz als auch strategische Marktvorteile schaffen. Der ROI manifestiert sich in direkten Kosteneinsparungen, neuen Umsatzströmen und einer nachhaltigen Steigerung der Unternehmensbewertung durch verbesserte Datenkapitalnutzung.\n\n💰 Direkte EBITDA-Auswirkungen und finanzielle Werttreiber:\n• Neue Umsatzströme durch Datenmonetarisierung: Erschließung zusätzlicher Einnahmequellen durch die Vermarktung von Datenprodukten an externe Kunden und Partner, ohne zusätzliche Produktionskosten.\n• Operative Effizienzsteigerung: Reduzierung von Datensilos und manuellen Prozessen führt zu signifikanten Kosteneinsparungen in IT-Betrieb, Datenmanagement und Berichtswesen.\n• Beschleunigte Entscheidungsfindung: Hochwertige, sofort verfügbare Daten verkürzen Entscheidungszyklen und ermöglichen schnellere Marktreaktionen, was sich direkt in verbesserten Geschäftsergebnissen niederschlägt.\n• Risikominimierung und Compliance-Kostenreduktion: Proaktive EU AI Act Konformität vermeidet potenzielle Bußgelder und reduziert Compliance-Aufwände durch automatisierte Governance-Prozesse.\n\n📈 Strategische Wertsteigerung und Marktpositionierung:\n• Erhöhte Unternehmensbewertung: Unternehmen mit nachweisbaren Datenkapitalien und -produkten erzielen höhere Bewertungsmultiplikatoren bei Investoren und im Markt.\n• Verbesserte Kundenbindung und Akquisition: Datengetriebene Produkte und Services schaffen stärkere Kundenbindung und ermöglichen Premium-Pricing-Strategien.\n• Marktführerschaft durch Dateninnovation: Erste Marktpositionierung in datengetriebenen Geschäftsmodellen sichert langfristige Wettbewerbsvorteile.\n• Skalierbare Geschäftsmodelle: DaaS-Infrastrukturen ermöglichen exponentielles Wachstum ohne proportionale Kostensteigerung, was zu überproportionaler EBITDA-Entwicklung führt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "In einer Zeit zunehmender Datenregulierung und Cyber-Bedrohungen – wie stellt ADVISORI sicher, dass unsere DaaS-Strategie sowohl innovativ als auch vollständig compliant und sicher bleibt?",
        answer: "In der heutigen regulatorischen Landschaft ist die Balance zwischen Innovation und Compliance entscheidend für den nachhaltigen Erfolg von Data-as-a-Service Initiativen. ADVISORI hat einen proaktiven Ansatz entwickelt, der Compliance nicht als Hindernis, sondern als Enabler für vertrauensvolle Innovation positioniert. Unsere DaaS-Lösungen sind von Grund auf darauf ausgelegt, höchste Sicherheitsstandards mit maximaler Geschäftsflexibilität zu verbinden.\n\n🔒 Proaktive Compliance-Integration als Innovationstreiber:\n• EU AI Act Native Design: Alle unsere DaaS-Architekturen sind von Beginn an EU AI Act konform konzipiert, mit eingebauten Transparenz-, Dokumentations- und Risikomanagement-Mechanismen.\n• Privacy-by-Design Prinzipien: Implementierung von Datenschutz als Grundprinzip der Systemarchitektur, nicht als nachträgliche Ergänzung, wodurch DSGVO-Compliance automatisch gewährleistet wird.\n• Adaptive Compliance-Frameworks: Unsere Systeme sind darauf ausgelegt, sich automatisch an neue regulatorische Anforderungen anzupassen, ohne die Geschäftskontinuität zu beeinträchtigen.\n• Kontinuierliche Compliance-Überwachung: Implementierung von Real-time Monitoring-Systemen, die Compliance-Verstöße präventiv erkennen und automatisch korrigieren.\n\n🛡️ Mehrstufige Sicherheitsarchitektur für DaaS:\n• Zero-Trust Datenarchitektur: Implementierung von Zero-Trust Prinzipien für alle Datenzugriffe und -übertragungen, wodurch sowohl interne als auch externe Bedrohungen minimiert werden.\n• End-to-End Verschlüsselung: Vollständige Verschlüsselung aller Daten in Ruhe, in Bewegung und in Verarbeitung, mit fortschrittlichen Schlüsselmanagement-Systemen.\n• Intelligente Anomalieerkennung: KI-gestützte Systeme zur Erkennung ungewöhnlicher Datenzugriffsmuster und potenzieller Sicherheitsbedrohungen in Echtzeit.\n• Granulare Zugriffskontrolle: Implementierung feingranularer Berechtigungssysteme, die sicherstellen, dass nur autorisierte Nutzer auf spezifische Datensets zugreifen können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI Data-as-a-Service von einer reinen IT-Initiative zu einem strategischen Geschäftstreiber, der neue Märkte erschließt und Partnerschaften ermöglicht?",
        answer: "ADVISORI positioniert Data-as-a-Service als strategischen Geschäftstreiber, der über traditionelle IT-Services hinausgeht und neue Geschäftsmodelle, Marktchancen und Partnerschaftsmöglichkeiten erschließt. Unser Ansatz transformiert Daten von passiven Unternehmensassets zu aktiven Wertschöpfungsinstrumenten, die sowohl interne Prozesse optimieren als auch externe Geschäftsmöglichkeiten schaffen.\n\n🚀 Von IT-Service zu Geschäftsstrategie:\n• Datenprodukt-Entwicklung: Transformation von Rohdaten in marktfähige Produkte mit klarem Wertversprechen für spezifische Zielgruppen und Anwendungsfälle.\n• Neue Geschäftsmodell-Innovation: Entwicklung datengetriebener Geschäftsmodelle, die zusätzliche Umsatzströme generieren und die Marktposition stärken.\n• Strategische Marktpositionierung: Nutzung einzigartiger Datenassets zur Differenzierung im Markt und Aufbau von Wettbewerbsvorteilen, die schwer replizierbar sind.\n• Ökosystem-Orchestrierung: Aufbau von Datenpartnerschaften und -netzwerken, die gegenseitigen Nutzen schaffen und die Marktreichweite erweitern.\n\n💡 Strategische Geschäftsbefähigung durch ADVISORI:\n• Marktchancen-Identifikation: Systematische Analyse Ihrer Datenassets zur Identifikation ungenutzter Monetarisierungspotenziale und neuer Zielgruppen.\n• Partnerschafts-Enablement: Entwicklung von Datenpartnerschaften, die Win-Win-Situationen schaffen und neue Marktchancen für alle Beteiligten eröffnen.\n• Innovation-Katalysator: Nutzung von DaaS als Plattform für kontinuierliche Innovation und Entwicklung neuer datengetriebener Services und Produkte.\n• Skalierbare Wertschöpfung: Aufbau von DaaS-Infrastrukturen, die mit dem Geschäftswachstum skalieren und dabei die Profitabilität überproportional steigern."
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
