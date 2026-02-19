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
    console.log('Updating MiFID Anpassung an neue ESMA/BaFin Vorgaben page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'mifid-anpassung-an-neue-esma-bafin-vorgaben' })
    
    if (!existingDoc) {
      throw new Error('Document "mifid-anpassung-an-neue-esma-bafin-vorgaben" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie können Finanzinstitute Kosten und Aufwand bei der Anpassung an neue MiFID-Vorgaben optimieren?",
        answer: "Die Anpassung an neue MiFID-Vorgaben stellt Finanzinstitute vor erhebliche finanzielle und operative Herausforderungen. Konventionelle Compliance-Projekte sind oft durch hohe Kosten, ineffiziente Ressourcenallokation und isolierte Maßnahmen gekennzeichnet. ADVISORI hat einen differenzierten Cost Optimization Framework für regulatorische Anpassungen entwickelt, der systematische Effizienzsteigerungen ermöglicht, ohne Compliance-Qualität zu kompromittieren.\n\n💰 Strategische Kostenoptimierung jenseits taktischer Einsparungen:\n• Total Cost of Compliance Perspective: Entwicklung einer ganzheitlichen Kostenperspektive, die nicht nur direkte Implementierungskosten, sondern auch indirekte Aufwände, Opportunitätskosten und langfristige Betriebskosten berücksichtigt – dieser umfassende Ansatz überwindet die typische Fokussierung auf kurzfristige Projektkosten und ermöglicht nachhaltige Einsparungen über den gesamten Compliance-Lebenszyklus.\n• Risk-adjusted Cost Optimization: Implementation einer risikobasierten Optimierungsstrategie, die den Ressourceneinsatz präzise nach der tatsächlichen regulatorischen Risikoexposition differenziert – dieser fokussierte Ansatz konzentriert Investments auf Hochrisikobereiche und vermeidet übermäßigen Aufwand in unkritischen Bereichen, was zu durchschnittlichen Kosteneinsparungen von 25-40% führt, ohne regulatorische Risiken zu erhöhen.\n• Marginal Value Assessment: Systematische Bewertung des Grenznutzens zusätzlicher Compliance-Investitionen in verschiedenen Bereichen – dieser ökonomische Ansatz identifiziert Bereiche mit abnehmenden Grenzerträgen, optimiert die Ressourcenallokation und maximiert den regulatorischen ROI pro investiertem Euro.\n• Cost-sharing Ecosystem Approach: Entwicklung kooperativer Modelle für die Verteilung regulatorischer Anpassungskosten innerhalb des Finanzsektors – dieser kollaborative Ansatz nutzt Skaleneffekte, vermeidet Redundanzen und reduziert die individuelle Kostenlast für einzelne Institute durch strategische Partnerschaften, Branchenkooperationen und gemeinsame Infrastrukturen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Wie können Finanzinstitute ihre Reaktionsfähigkeit auf kurzfristige Änderungen von MiFID-Anforderungen verbessern?",
        answer: "Die zunehmende Frequenz und Dynamik regulatorischer Änderungen im MiFID-Umfeld stellt Finanzinstitute vor fundamentale Herausforderungen hinsichtlich ihrer Reaktionsfähigkeit. Kurzfristige Anpassungen an neue oder geänderte Vorgaben müssen oft unter erheblichem Zeitdruck und mit begrenzten Ressourcen umgesetzt werden. ADVISORI hat ein spezialisiertes Regulatory Agility Framework entwickelt, das Finanzinstitute befähigt, auch auf kurzfristige regulatorische Änderungen schnell, effizient und qualitativ hochwertig zu reagieren.\n\n⚡ Strategische Enabler regulatorischer Reaktionsfähigkeit:\n• Regulatory Sensing Capabilities: Aufbau spezialisierter Früherkennungssysteme, die emergente regulatorische Entwicklungen bereits in frühen Entstehungsphasen identifizieren – dieser proaktive Intelligence-Ansatz verschafft kritischen Zeitvorsprung von typischerweise 3-6 Monaten gegenüber reaktiven Monitoring-Ansätzen und transformiert regulatorischen Zeitdruck in strategischen Handlungsspielraum.\n• Strategic Regulatory Buffer: Etablierung strategischer Pufferkapazitäten für regulatorische Anpassungen in Form flexibler Ressourcen, modularer Infrastrukturen und adaptiver Prozesse – dieser Resilienz-orientierte Ansatz schafft organisatorische Absorptionsfähigkeit für regulatorische Schocks und minimiert disruptive Auswirkungen kurzfristiger Anforderungsänderungen auf das Kerngeschäft."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie sollten Finanzinstitute bei der Implementierung neuer MiFID-Vorgaben mit externen Beratern und Dienstleistern zusammenarbeiten?",
        answer: "Die erfolgreiche Implementierung neuer MiFID-Vorgaben erfordert oft die Zusammenarbeit mit externen Beratern und Dienstleistern, um Kapazitätsengpässe zu überbrücken und spezialisierte Expertise zu nutzen. Traditionelle Outsourcing- und Beratungsmodelle erreichen jedoch häufig nicht die angestrebten Ergebnisse aufgrund mangelnder Integration, unklarer Verantwortlichkeiten und ineffektiver Wissenstransfermodelle. ADVISORI hat ein differenziertes Collaborative Implementation Framework entwickelt, das die Zusammenarbeit mit externen Partnern systematisch optimiert und nachhaltige Wertschöpfung sicherstellt.\n\n🤝 Strategische Partnerschaftsmodelle jenseits traditioneller Auftragnehmerbeziehungen:\n• Value-based Partnership Approach: Entwicklung eines wertorientierten Partnerschaftsmodells, das gemeinsame Ziele, geteilte Risiken und erfolgsabhängige Vergütungsstrukturen etabliert – dieser kollaborative Ansatz überwindet die typische Auftraggeber-Auftragnehmer-Dynamik und schafft echte Interessenalignment mit messbarem Business Impact statt reiner Leistungserbringung.\n• Capability Transfer Partnership: Gestaltung eines systematischen Wissenstransfermodells, das neben der eigentlichen Leistungserbringung den nachhaltigen Aufbau interner Kompetenzen als explizites Partnerschaftsziel definiert – dieser entwicklungsorientierte Ansatz transformiert externe Abhängigkeiten in interne Capabilities und maximiert den langfristigen Wertbeitrag externer Zusammenarbeit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie können Finanzinstitute neue MiFID-Vorgaben als Chance für digitale Transformation nutzen?",
        answer: "MiFID-Vorgaben bieten Finanzinstituten wichtige Chancen für digitale Transformation. ADVISORI unterstützt Unternehmen dabei, regulatorische Anforderungen als strategischen Hebel für Innovation zu nutzen. Durch die Implementierung modularer Technologiearchitekturen, datengetriebener Analysemodelle und automatisierter Compliance-Prozesse können Finanzinstitute nicht nur regulatorische Konformität erreichen, sondern gleichzeitig ihre digitalen Fähigkeiten stärken und Wettbewerbsvorteile erzielen. Diese strategische Herangehensweise transformiert Compliance-Aufwände in nachhaltige Geschäftswerte."
      }
    ];
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs];
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs (German) to the document...`);
    const transaction = client.transaction();
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    });
    
    await transaction.commit();
    console.log('✅ C-Level FAQs batch 4 (German) added successfully');
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

run();
