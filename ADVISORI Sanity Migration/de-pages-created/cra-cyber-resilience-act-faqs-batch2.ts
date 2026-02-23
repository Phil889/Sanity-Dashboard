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
    console.log('Updating CRA Cyber Resilience Act page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-cyber-resilience-act' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-cyber-resilience-act" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie verändert die CRA unsere Supply Chain-Strategie und welche Governance-Strukturen sind für eine effektive Lieferanten-Compliance erforderlich?",
        answer: "Die EU Cyber Resilience Act transformiert fundamentale Supply Chain-Strategien und erfordert eine völlig neue Herangehensweise an Lieferanten-Governance und Third-Party-Risk-Management. Für die Führungsebene bedeutet dies eine strategische Neuausrichtung der Beschaffungsprozesse, Partnerschaften und vertikalen Integration. Die CRA macht Cybersicherheit zu einem zentralen Kriterium für Lieferantenauswahl und -management mit direkten Auswirkungen auf Geschäftskontinuität und Wettbewerbsfähigkeit.\n\n🔗 Supply Chain-Transformation durch CRA-Anforderungen:\n• Lieferanten-Klassifizierung und Risikobewertung: Systematische Bewertung aller Zulieferer nach CRA-Konformität und Cybersicherheits-Reifegrad mit entsprechender Risikosegmentierung.\n• Vertragliche Compliance-Integration: Vollständige Integration von CRA-Anforderungen in Lieferantenverträge mit klaren SLAs, Audit-Rechten und Haftungsregelungen.\n• Supply Chain-Transparenz: Aufbau umfassender Transparenz über mehrstufige Lieferketten zur Identifikation und Mitigierung von Cybersicherheitsrisiken.\n• Strategische Lieferanten-Konsolidierung: Fokussierung auf weniger, aber höherqualifizierte Partner mit nachgewiesener CRA-Compliance-Fähigkeit.\n\n🛡️ ADVISORIs Supply Chain Governance Framework:\n• Integrated Supplier Assessment: Entwicklung mehrdimensionaler Bewertungsmodelle, die traditionelle Lieferanten-KPIs mit Cybersicherheits-Metriken und CRA-Compliance-Faktoren verbinden.\n• Dynamic Risk Monitoring: Implementation kontinuierlicher Überwachungssysteme für Lieferanten-Cybersicherheit mit automatisierten Alerting- und Eskalationsprozessen.\n• Collaborative Compliance Development: Aufbau strategischer Partnerschaften mit Schlüssellieferanten zur gemeinsamen Entwicklung von CRA-Compliance-Lösungen und Best Practices.\n• Supply Chain Resilience Architecture: Gestaltung redundanter und diversifizierter Lieferketten, die auch bei Ausfall einzelner nicht-konformer Partner Geschäftskontinuität gewährleisten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche organisatorischen Veränderungen und Kompetenzaufbau sind erforderlich, um CRA-Compliance nachhaltig in unserer Unternehmenskultur zu verankern?",
        answer: "Die erfolgreiche CRA-Implementation erfordert tiefgreifende organisatorische Transformation und kulturellen Wandel, der weit über technische Compliance-Maßnahmen hinausgeht. Für die C-Suite bedeutet dies eine strategische Neugestaltung von Organisationsstrukturen, Kompetenzen und Anreizsystemen. Die nachhaltige Verankerung von Cybersicherheit in der Unternehmenskultur wird zum entscheidenden Erfolgsfaktor für langfristige CRA-Compliance und Wettbewerbsfähigkeit.\n\n🏢 Organisatorische Transformation für CRA-Excellence:\n• Cross-funktionale Cybersecurity Governance: Etablierung interdisziplinärer Teams aus IT, Legal, Compliance, Produktentwicklung und Geschäftsentwicklung für ganzheitliche CRA-Umsetzung.\n• Security-by-Design-Kultur: Integration von Cybersicherheits-Thinking in alle Unternehmensprozesse von der Produktkonzeption bis zur Markteinführung.\n• Kontinuierliche Kompetenzentwicklung: Aufbau systematischer Schulungs- und Zertifizierungsprogramme für alle Mitarbeiter mit produktbezogenen Verantwortlichkeiten.\n• Performance-Integration: Verankerung von CRA-Compliance-Zielen in individuellen und Team-Performance-Metriken und Anreizsystemen.\n\n🎯 ADVISORIs Cultural Transformation Approach:\n• Leadership Development Program: Entwicklung spezialisierter Führungskräfte-Programme, die CRA-Expertise mit strategischem Business-Thinking verbinden.\n• Cross-functional Excellence Centers: Aufbau dedizierter Kompetenzzentren, die als interne Beratung und Koordinationsstelle für CRA-bezogene Initiativen fungieren.\n• Innovation-driven Security Culture: Schaffung einer Unternehmenskultur, die Cybersicherheit als Innovationstreiber und Differenzierungsfaktor versteht, nicht als Hindernis.\n• Stakeholder Engagement Framework: Entwicklung systematischer Ansätze zur Einbindung aller internen und externen Stakeholder in die CRA-Compliance-Journey."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie können wir CRA-Compliance als Grundlage für internationale Marktexpansion und globale Cybersicherheits-Standardisierung nutzen?",
        answer: "Die EU Cyber Resilience Act fungiert als globaler Standard-Setter für Cybersicherheit und bietet strategische Chancen für internationale Marktexpansion und Positionierung als globaler Technologieführer. Für visionäre Unternehmen bedeutet CRA-Compliance nicht nur EU-Marktzugang, sondern den Aufbau weltweiter Wettbewerbsvorteile durch höchste Cybersicherheitsstandards. Die CRA wird ähnlich wie DSGVO zum de-facto globalen Standard und frühe Adopter können diese Entwicklung strategisch nutzen.\n\n🌍 Globale Marktchancen durch CRA-Leadership:\n• Internationaler Wettbewerbsvorteil: CRA-konforme Produkte übertreffen in vielen Märkten die lokalen Cybersicherheitsstandards und schaffen Premium-Positionierung.\n• Regulatorischer Vorsprung: Vorbereitung auf ähnliche Regulierungen in anderen Jurisdiktionen (USA, Asien-Pazifik) durch proaktive CRA-Compliance.\n• B2B-Markterschließung: Positionierung als vertrauenswürdiger Cybersicherheits-Partner für internationale Unternehmen und Regierungen.\n• Technology-Transfer-Opportunitäten: Monetarisierung von CRA-Compliance-Expertise durch Beratung und Technologielizenzierung in anderen Märkten.\n\n🚀 ADVISORIs Global Expansion Strategy durch CRA:\n• International Standards Alignment: Entwicklung einer Compliance-Architektur, die CRA als Basis für globale Cybersicherheitsstandards nutzt und in andere Jurisdiktionen skaliert.\n• Market Entry Acceleration: Nutzung von CRA-Compliance als Differenzierungsfaktor und Vertrauensbildner für beschleunigte Markterschließung in sicherheitssensitiven Branchen.\n• Global Partnership Ecosystem: Aufbau internationaler Partnerschaften mit Unternehmen, die von europäischen Cybersicherheitsstandards profitieren möchten.\n• Innovation Export Strategy: Entwicklung von Geschäftsmodellen zur systematischen Vermarktung von CRA-basierten Cybersicherheitslösungen in globalen Märkten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche Investitionsstrategien und ROI-Modelle sind erforderlich, um CRA-Compliance von einem Kostenfaktor zu einem Wertschöpfungstreiber zu transformieren?",
        answer: "Die strategische Transformation von CRA-Compliance-Investitionen in messbare Wertschöpfung erfordert innovative Finanzierungs- und ROI-Modelle, die über traditionelle Compliance-Kosten-Betrachtungen hinausgehen. Für CFOs und die Geschäftsleitung bedeutet dies die Entwicklung neuer Metriken und Bewertungsansätze, die den strategischen Wert von Cybersicherheits-Investments quantifizieren. Eine durchdachte Investitionsstrategie kann CRA-Compliance zu einem nachhaltigen Competitive Advantage und Profitabilitätstreiber machen.\n\n💰 Strategic Investment Framework für CRA-ROI:\n• Wertschöpfungs-basierte Budgetierung: Entwicklung von Investitionsmodellen, die nicht nur Compliance-Kosten berücksichtigen, sondern auch Umsatzpotentiale durch Marktdifferenzierung und Premiumpositionierung.\n• Risk-adjusted ROI-Berechnung: Integration von vermiedenen Kosten durch Cyberrisiko-Reduktion, Haftungsminimierung und Reputationsschutz in ROI-Kalkulationen.\n• Innovation-driven Investment Strategy: Allokation von CRA-Budgets in Bereiche mit Dual-Use-Potential für Compliance und Produktinnovation.\n• Portfolio-optimierte Ressourcenverteilung: Strategische Priorisierung von CRA-Investitionen basierend auf Geschäftswert und Compliance-Impact verschiedener Produktlinien.\n\n📈 ADVISORIs Value Creation Framework für CRA-Investments:\n• Business Case Development: Entwicklung detaillierter Business Cases, die direkte und indirekte Wertschöpfung durch CRA-Compliance quantifizieren und langfristige Kapitaleffizienz maximieren.\n• Performance Measurement Systems: Implementation fortschrittlicher KPI-Systeme, die sowohl Compliance-Erfolg als auch Business-Impact von CRA-Investitionen kontinuierlich messen.\n• Strategic Finance Integration: Verbindung von CRA-Investitionsplanung mit strategischer Unternehmensfinanzierung und Kapitalallokation für optimierte Shareholder-Value-Generierung.\n• Dynamic Investment Optimization: Aufbau agiler Investitionsprozesse, die CRA-Budgets kontinuierlich an sich ändernde Marktbedingungen und Compliance-Anforderungen anpassen."
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
