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
    console.log('Updating Basel III page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'basel-iii' })
    
    if (!existingDoc) {
      throw new Error('Document "basel-iii" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie beeinflusst Basel III die strategische Kapitalplanung unserer Bank und welche Vorteile bietet ADVISORIs Ansatz gegenüber herkömmlichen Lösungen?",
        answer: "Basel III transformiert fundamentale Kapitalplanungsprozesse von einer reinen Compliance-Übung zu einem strategischen Instrument der Unternehmenssteuerung. Für die Führungsebene bedeutet dies eine komplexere, aber auch strategisch wertvollere Kapitalallokation mit signifikanten Auswirkungen auf Rentabilität und Wachstumspotenzial des Instituts.\n\n🔍 Strategische Implikationen von Basel III für die Kapitalplanung:\n• Erhöhte Eigenkapitalanforderungen: Die verschärften Eigenkapitalquoten (CET1, Tier 1, Gesamtkapitalquote) erfordern eine stringentere Priorisierung von Geschäftsfeldern nach Kapitaleffizienz.\n• Kapitalpuffer-Management: Die verschiedenen Puffer (Kapitalerhaltungspuffer, antizyklischer Kapitalpuffer, G-SIB/D-SIB-Zuschläge) benötigen ein vorausschauendes Management mit direkten Implikationen für Dividendenpolitik und Aktienrückkäufe.\n• Leverage Ratio als harte Nebenbedingung: Die ungewichtete Verschuldungsquote limitiert die Bilanzausweitung und zwingt zu strategischen Entscheidungen bei margenschwachen, aber bilanzintensiven Geschäften.\n• Output Floor: Die Beschränkung der Risikominderung durch interne Modelle erfordert eine Neubewertung der Modelllandschaft und Geschäftsstrategien.\n\n💡 Der ADVISORI-Ansatz für strategische Kapitalplanung:\n• Integrierte Kapitaloptimierung: Wir verbinden regulatorische Anforderungen mit wirtschaftlicher Kapitalallokation in einem ganzheitlichen Framework, das sowohl Compliance sicherstellt als auch Shareholder Value maximiert.\n• Szenariobasierte Strategieentwicklung: Unsere fortschrittlichen Simulationsmodelle ermöglichen die Bewertung verschiedener Geschäftsstrategien unter multiplen regulatorischen und makroökonomischen Szenarien.\n• Dynamische Kapitalallokation: Wir implementieren Steuerungssysteme, die Kapital kontinuierlich und automatisiert den profitabelsten Geschäftsbereichen unter Berücksichtigung regulatorischer Nebenbedingungen zuweisen.\n• Strategischer Digitalisierungsansatz: Unsere Technologielösungen transformieren den Kapitalplanungsprozess von einem quartalsweisen, ressourcenintensiven Projekt zu einem kontinuierlichen, datengetriebenen Steuerungsinstrument."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche konkreten Wettbewerbsvorteile kann unsere Bank durch eine strategische statt rein compliance-getriebene Umsetzung von Basel III erzielen?",
        answer: "Eine strategische Implementation von Basel III geht weit über die bloße Erfüllung regulatorischer Anforderungen hinaus und kann signifikante Wettbewerbsvorteile generieren, die sich direkt auf die Marktposition, Profitabilität und langfristige Resilienz Ihrer Bank auswirken. Während viele Institute Basel III primär als Compliance-Anforderung betrachten, liegt in einem strategischen Ansatz erhebliches Differenzierungspotenzial.\n\n🚀 Strategische Wettbewerbsvorteile durch Basel III:\n• Optimierte Kapitaleffizienz: Durch fortschrittliche RWA-Optimierung und strategische Portfoliosteuerung können Sie mehr Geschäft mit gleichem Kapital betreiben und höhere Renditen erzielen als Wettbewerber.\n• Präzisere Risikobewertung: Verbesserte Risikomodelle und -prozesse führen zu akkurateren Preismodellen, die eine risikoadjustierte Preisgestaltung ermöglichen und Fehlallokationen vermeiden.\n• Liquiditätsmanagement als Wertschöpfungshebel: Sophistizierte NSFR- und LCR-Steuerung kann Finanzierungskosten signifikant senken und Ertragsmargen erhöhen.\n• Beschleunigte Entscheidungsprozesse: Automatisierte, datengetriebene Kapital- und Risikoprozesse ermöglichen schnellere Reaktionen auf Marktchancen als bei manuell operierenden Wettbewerbern.\n\n🛠️ ADVISORIs Ansatz zur Schaffung strategischer Vorteile:\n• Geschäftsmodell-Integration: Wir verankern Basel III-Kennzahlen direkt in Geschäftsentscheidungen und Produktdesign, statt sie nachgelagert zu betrachten.\n• Technologische Transformation: Implementierung modernster Analyseplattformen, die regulatorische Berechnungen mit Management-Informationssystemen verbinden und Echtzeitsteuerung ermöglichen.\n• Datenqualität als Wettbewerbsvorteil: Aufbau überlegener Dateninfrastrukturen, die nicht nur Compliance sicherstellen, sondern auch tiefere Geschäfts- und Kundeneinblicke ermöglichen.\n• Kultur der Kapitaleffizienz: Entwicklung von Anreizsystemen und Performance-Metriken, die kapitaleffizientes Handeln auf allen Ebenen fördern und in der Unternehmenskultur verankern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir die erheblichen Investitionen in Basel III-Compliance nutzen, um gleichzeitig unsere digitale Transformation voranzutreiben?",
        answer: "Die Implementierung von Basel III und die digitale Transformation Ihrer Bank sollten nicht als separate Initiativen betrachtet werden, sondern als synergetische Prozesse, die sich gegenseitig verstärken können. Die Investitionen in regulatorische Compliance können als strategischer Katalysator für die umfassendere digitale Modernisierung Ihres Instituts dienen und erheblichen Mehrwert generieren.\n\n🔄 Synergien zwischen Basel III und digitaler Transformation:\n• Dateninfrastruktur als gemeinsames Fundament: Die für Basel III erforderliche Datenaggregation und -qualität bildet die Grundlage für datengetriebene Geschäftsmodelle und KI-Anwendungen.\n• Automatisierung als Effizienzmotor: Die Automatisierung regulatorischer Prozesse kann als Blaupause für die Automatisierung weiterer Geschäftsprozesse dienen und operative Exzellenz fördern.\n• API-Ökosysteme: Die für regulatorisches Reporting benötigten Schnittstellen können erweitert werden, um Open Banking-Funktionalitäten und Partnerschaften mit FinTechs zu ermöglichen.\n• Cloud-Migration: Die Modernisierung von Risiko- und Finanzsystemen kann der Ausgangspunkt für eine breitere Cloud-Strategie sein, die Skalierbarkeit und Innovationsgeschwindigkeit erhöht.\n\n🔋 ADVISORIs integrierter Transformationsansatz:\n• Strategische Technologieplanung: Wir entwickeln eine Technologie-Roadmap, die regulatorische Anforderungen mit strategischen Digitalisierungszielen verbindet und Redundanzen eliminiert.\n• Modulare Architektur: Implementierung flexibler, mikroservice-basierter Lösungen, die sowohl regulatorische Agilität als auch digitale Innovation unterstützen.\n• Data Governance als Enabler: Aufbau eines unternehmensweiten Data-Governance-Frameworks, das regulatorische Anforderungen erfüllt und gleichzeitig neue Geschäftsmöglichkeiten erschließt.\n• Agile Delivery-Methoden: Einsatz agiler Methoden zur parallelen Umsetzung regulatorischer und innovativer Initiativen mit schnellen Feedback-Zyklen und kontinuierlicher Wertschöpfung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche strategischen Risiken entstehen für unser Institut, wenn wir Basel III nur minimal umsetzen, und wie kann ADVISORI uns dabei unterstützen, diese Risiken in Chancen zu verwandeln?",
        answer: "Eine minimale, rein compliance-orientierte Umsetzung von Basel III birgt erhebliche strategische Risiken, die weit über regulatorische Konsequenzen hinausgehen. Diese Risiken können die Wettbewerbsfähigkeit, Profitabilität und letztlich die Existenzfähigkeit Ihres Instituts gefährden. ADVISORI unterstützt Sie dabei, diese Herausforderungen in strategische Chancen zu transformieren.\n\n⚠️ Strategische Risiken einer minimalistischen Basel III-Umsetzung:\n• Kapitalineffizienzen: Ohne fortschrittliche Optimierungsmethoden binden Sie mehr Kapital als nötig, was zu niedrigeren Renditen führt und Ihre Wettbewerbsposition schwächt.\n• Digitaler Rückstand: Banken, die Basel III als Chance zur Modernisierung nutzen, bauen einen technologischen Vorsprung auf, der in allen Geschäftsbereichen Wettbewerbsvorteile generiert.\n• Eingeschränkte Geschäftsflexibilität: Ohne integrierte Kapital- und Liquiditätsplanung fehlt die Agilität, um schnell auf Marktveränderungen und Opportunitäten zu reagieren.\n• Erhöhte Compliance-Kosten: Manuelle, fragmentierte Prozesse verursachen dauerhaft höhere Betriebskosten als automatisierte, integrierte Lösungen.\n• Strategische Fehlentscheidungen: Ohne tiefgreifendes Verständnis der regulatorischen Auswirkungen auf verschiedene Geschäftsfelder riskieren Sie Fehlallokationen von Ressourcen.\n\n🌟 ADVISORIs Transformationsansatz – von Risiken zu Chancen:\n• Strategische Kapitalanalyse: Wir identifizieren Geschäftsbereiche mit suboptimaler Kapitaleffizienz und entwickeln Optimierungsstrategien, die Renditen signifikant steigern können.\n• Digitale Reifegradanalyse: Bewertung Ihrer technologischen Ausgangslage und Entwicklung einer priorisierten Modernisierungsroadmap mit Quick Wins und langfristigen Transformationszielen.\n• Operative Exzellenz: Implementierung eines Target Operating Models, das regulatorische Effizienz mit operativer Flexibilität verbindet und Kosten nachhaltig senkt.\n• Strategische Kompetenzentwicklung: Aufbau interner Kapazitäten zur kontinuierlichen Optimierung und Innovation im regulatorischen Kontext, um langfristige Abhängigkeiten zu vermeiden."
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
