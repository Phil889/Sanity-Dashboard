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
    console.log('Updating Erklärbare KI page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'erklaerbare-ki' })
    
    if (!existingDoc) {
      throw new Error('Document "erklaerbare-ki" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist Erklärbare KI für die C-Suite mehr als nur eine technische Anforderung und wie positioniert ADVISORI XAI als strategischen Wettbewerbsvorteil für Unternehmen?",
        answer: "Für C-Level-Führungskräfte repräsentiert Erklärbare KI einen fundamentalen Paradigmenwechsel von der Black-Box-Mentalität hin zu transparenten, vertrauenswürdigen AI-Systemen. XAI ist nicht nur eine technische Notwendigkeit, sondern ein strategischer Enabler für nachhaltiges Wachstum, Stakeholder-Vertrauen und regulatorische Compliance. ADVISORI versteht Explainable AI als Grundlage für verantwortungsvolle KI-Implementierungen, die langfristige Geschäftswerte schaffen.\n\n🎯 Strategische Imperative für die Führungsebene:\n• Vertrauensaufbau und Stakeholder-Akzeptanz: Transparente KI-Entscheidungen schaffen Vertrauen bei Kunden, Investoren und Regulierungsbehörden, was sich direkt in Marktakzeptanz und Geschäftswachstum übersetzt.\n• Regulatorische Compliance und Risikominimierung: Mit der EU AI Act und verschärften Transparenzanforderungen wird XAI zur Compliance-Notwendigkeit mit direkten Haftungsrisiken für die Geschäftsleitung.\n• Fundierte Geschäftsentscheidungen: Nachvollziehbare AI-Insights ermöglichen bessere strategische Entscheidungen und reduzieren das Risiko von AI-basierten Fehlentscheidungen.\n• Competitive Intelligence und IP-Schutz: Transparente AI-Systeme ermöglichen bessere Kontrolle über proprietäre Algorithmen und Schutz vor ungewolltem Wissenstransfer.\n\n🔍 Der ADVISORI-Ansatz für strategische XAI:\n• Business-aligned Explainability: Entwicklung von Erklärungsmodellen, die auf verschiedene Stakeholder-Gruppen zugeschnitten sind und deren spezifische Informationsbedürfnisse adressieren.\n• Trust-by-Design Architecture: Integration von Transparenz-Mechanismen in die Grundarchitektur Ihrer KI-Systeme, nicht als nachträgliche Ergänzung.\n• Regulatory-ready Implementation: Proaktive Vorbereitung auf regulatorische Anforderungen mit audit-fähigen Dokumentations- und Erklärungssystemen.\n• Strategic Decision Support: Transformation von AI-Insights in actionable Business Intelligence durch interpretierbare und nachvollziehbare Analyseergebnisse."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifizieren wir den ROI einer Investition in ADVISORI's Explainable AI Lösungen und welchen direkten Einfluss hat XAI auf Unternehmenswert und Marktpositionierung?",
        answer: "Die Investition in Explainable AI von ADVISORI ist ein strategischer Wertschöpfungshebel, der sowohl direkte Kosteneinsparungen als auch indirekte Wertsteigerungen generiert. Der Return on Investment manifestiert sich in verbesserter Entscheidungsqualität, reduziertem Compliance-Risiko und gestärkter Marktposition durch nachweisbare AI-Transparenz.\n\n💰 Direkte finanzielle Auswirkungen und Kostenvermeidung:\n• Compliance-Kostenvermeidung: Proaktive XAI-Implementierung reduziert das Risiko regulatorischer Strafen und vermeidet kostspielige Nachbesserungen bei Transparenz-Audits.\n• Verbesserte Entscheidungsqualität: Nachvollziehbare AI-Insights führen zu besseren strategischen Entscheidungen und reduzieren das Risiko kostspieliger Fehlentscheidungen.\n• Operational Efficiency: Transparente AI-Systeme ermöglichen schnellere Problemidentifikation und -lösung, was zu reduzierten Betriebskosten führt.\n• Risk Mitigation: Erklärbare KI reduziert das Risiko von AI-basierten Bias-Problemen und diskriminierenden Entscheidungen, die zu rechtlichen und Reputationsschäden führen können.\n\n📈 Strategische Werttreiber und Marktpositionierung:\n• Premium Market Positioning: Unternehmen mit nachweisbar transparenten AI-Systemen können Premium-Pricing für ihre AI-basierten Produkte und Services durchsetzen.\n• Enhanced Due Diligence Value: Bei M&A-Transaktionen oder Investorenprüfungen wird nachweisbare AI-Transparenz zunehmend als Wertfaktor und Risikominimierung bewertet.\n• Customer Trust Premium: Transparente AI-Systeme schaffen Vertrauen bei Kunden, was zu höheren Conversion-Raten und Kundenbindung führt.\n• Accelerated Market Entry: XAI-konforme Systeme ermöglichen schnellere Markteinführung in regulierten Branchen ohne langwierige Transparenz-Reviews."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Die EU AI Act stellt neue Transparenzanforderungen an KI-Systeme. Wie stellt ADVISORI sicher, dass unsere XAI-Implementierung nicht nur compliant ist, sondern auch als Wettbewerbsvorteil genutzt werden kann?",
        answer: "Die EU AI Act markiert einen Wendepunkt in der KI-Regulierung und schafft neue Chancen für Unternehmen mit proaktiven XAI-Strategien. ADVISORI positioniert Compliance nicht als Kostenfaktor, sondern als strategischen Wettbewerbsvorteil durch frühe Marktpositionierung und überlegene Transparenz-Capabilities.\n\n⚖️ Compliance als Competitive Advantage:\n• First-Mover-Advantage: Frühe XAI-Implementierung verschafft Vorteile bei Ausschreibungen und Markteinträgen, da Wettbewerber noch nachziehen müssen.\n• Regulatory Excellence Positioning: Übererfüllung der Mindestanforderungen schafft Vertrauen bei Regulierungsbehörden und kann zu bevorzugter Behandlung bei zukünftigen Regulierungsänderungen führen.\n• Cross-Border Market Access: EU AI Act konforme Systeme ermöglichen problemlosen Zugang zu europäischen Märkten und schaffen Exportchancen.\n• Industry Leadership: Proaktive Compliance-Positionierung etabliert Ihr Unternehmen als Thought Leader und vertrauenswürdigen Partner in der AI-Branche.\n\n🔧 ADVISORI's Compliance-Plus-Strategie:\n• Beyond-Compliance Implementation: Entwicklung von XAI-Systemen, die nicht nur die Mindestanforderungen erfüllen, sondern Best-Practice-Standards setzen.\n• Adaptive Compliance Framework: Flexible Systeme, die sich an zukünftige Regulierungsänderungen anpassen können, ohne komplette Neuimplementierung.\n• Stakeholder-specific Transparency: Entwicklung verschiedener Erklärungsebenen für unterschiedliche Zielgruppen von technischen Teams bis hin zu Endkunden.\n• Audit-ready Documentation: Comprehensive Dokumentationssysteme, die nicht nur Compliance gewährleisten, sondern auch als Qualitätsmerkmal vermarktet werden können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI Explainable AI von einem Compliance-Tool zu einem strategischen Business Enabler und welche konkreten Geschäftschancen eröffnet eine überlegene XAI-Positionierung?",
        answer: "ADVISORI positioniert Explainable AI nicht als defensive Compliance-Maßnahme, sondern als strategischen Wachstumskatalysator und Marktdifferenziator. Unser Ansatz verwandelt Transparenz-Investitionen in Wettbewerbsvorteile, ermöglicht neue Geschäftsmodelle und schafft Vertrauen, das sich direkt in Umsatzwachstum und Marktexpansion übersetzt.\n\n🚀 Von Compliance zu Strategic Advantage:\n• Trust-based Differentiation: Nachweisbare AI-Transparenz wird zunehmend zu einem entscheidenden Auswahlkriterium für Kunden, insbesondere in vertrauenskritischen Branchen wie Finanzdienstleistungen und Healthcare.\n• Premium Service Development: XAI-Capabilities ermöglichen die Entwicklung und Vermarktung von Premium-AI-Services mit höheren Margen und längerfristigen Kundenbeziehungen.\n• Partnership Acceleration: Transparente AI-Systeme erleichtern strategische Partnerschaften und Joint Ventures, da Partner Vertrauen in die Nachvollziehbarkeit gemeinsamer AI-Initiativen haben.\n• Innovation Catalyst: Erklärbare KI ermöglicht mutigere Innovation, da Risiken besser verstanden und kommuniziert werden können.\n\n💡 ADVISORI's Business Value Creation Framework:\n• Transparency-as-a-Service: Entwicklung von Geschäftsmodellen, die Ihre XAI-Expertise als eigenständige Einnahmequelle nutzen und anderen Unternehmen Transparenz-Services anbieten.\n• Ecosystem Trust Building: Aufbau von Vertrauensnetzwerken mit Kunden, Partnern und Regulierungsbehörden, die langfristige Geschäftsbeziehungen und Marktchancen schaffen.\n• Data Monetization: Transparente AI-Systeme ermöglichen bessere Datenmonetarisierung, da Kunden und Partner mehr Vertrauen in datenbasierte Insights haben.\n• Global Market Leadership: XAI-Excellence positioniert Ihr Unternehmen als globalen Marktführer in verantwortungsvoller AI und öffnet internationale Expansionsmöglichkeiten."
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
