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
    console.log('Updating CRA Cyber Resilience Act page with C-Level FAQs batch 1 (German)...')
    
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
        _key: generateKey('faq', 1),
        question: "Wie transformiert die EU Cyber Resilience Act unsere Geschäftsstrategie für digitale Produkte und welche strategischen Chancen eröffnet ADVISORI für die Führungsebene?",
        answer: "Die EU Cyber Resilience Act (CRA) markiert einen paradigmatischen Wandel in der Produktstrategie für alle Unternehmen mit digitalen Produktkomponenten. Für die C-Suite bedeutet dies eine fundamentale Neuausrichtung der Produktentwicklung, Markterschließung und Risikostrategie. Diese Verordnung transformiert Cybersicherheit von einer nachgelagerten IT-Funktion zu einem strategischen Geschäftsimperativ mit direkten Auswirkungen auf Marktfähigkeit, Wettbewerbsposition und Unternehmenswert.\n\n🎯 Strategische Transformation durch CRA für die Führungsebene:\n• Produktstrategie-Revolution: Cybersicherheit wird zum integralen Bestandteil der Produktdifferenzierung und des Werteversprechens gegenüber Kunden und Partnern.\n• Marktfähigkeits-Imperative: Nur CRA-konforme Produkte können ab 2025 legal im EU-Binnenmarkt vertrieben werden, was fundamentale Auswirkungen auf Umsatzpotentiale und Expansionsstrategien hat.\n• Compliance als Wettbewerbsvorteil: Frühe CRA-Adopter können sich als vertrauenswürdige, sichere Partner positionieren und Marktanteile von säumigen Wettbewerbern gewinnen.\n• Haftungsrisiko-Management: Die CRA etabliert erhebliche Haftungsrisiken für non-konforme Produkte, die direkte Auswirkungen auf Unternehmensrisiko und Versicherungskosten haben.\n\n🚀 ADVISORIs strategischer Ansatz für C-Level Transformation:\n• Strategische Roadmap-Entwicklung: Wir entwickeln maßgeschneiderte CRA-Strategien, die regulatorische Compliance mit Geschäftswachstum und Marktpositionierung verbinden.\n• Business Case-Optimierung: Transformation der CRA-Compliance von einem Kostenfaktor zu einem strategischen Investitionsbereich mit messbarem ROI durch Marktdifferenzierung.\n• Ecosystem-Integration: Entwicklung von Partnerschaften und Lieferketten-Strategien, die CRA-Compliance als Grundlage für erweiterte Geschäftsmodelle nutzen.\n• Innovation-Katalysator: Nutzung der CRA-Anforderungen als Innovationstreiber für neue Produktfeatures, Services und Geschäftsmodelle im Cybersicherheitsbereich."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche konkreten finanziellen und operativen Risiken entstehen für unser Unternehmen bei Nicht-Compliance mit der CRA und wie kann ADVISORI diese in strategische Vorteile umwandeln?",
        answer: "Die Nicht-Compliance mit der EU Cyber Resilience Act birgt existenzbedrohende finanzielle und operative Risiken, die weit über regulatorische Strafen hinausgehen. Für die Unternehmensleitung bedeutet dies eine umfassende Neubewertung von Risikomanagement-Strategien und Geschäftskontinuität. ADVISORI transformiert diese Herausforderungen in nachhaltige Wettbewerbsvorteile durch strategische Compliance-Integration.\n\n⚠️ Kritische Risiken bei CRA-Nicht-Compliance:\n• Marktausschluss und Umsatzverluste: Non-konforme Produkte dürfen nicht im EU-Markt verkauft werden, was zu unmittelbaren und erheblichen Umsatzausfällen führen kann.\n• Regulatorische Sanktionen: Bußgelder von bis zu 15 Millionen Euro oder 2,5% des weltweiten Jahresumsatzes, je nachdem welcher Betrag höher ist.\n• Produktrückrufe und Haftungsrisiken: Kostspielige Produktrückrufe, Schadenersatzforderungen und erhöhte Versicherungsprämien bei Sicherheitsvorfällen.\n• Reputationsschäden: Verlust von Kundenvertrauen und Markenimage bei öffentlich bekannt werdenden Sicherheitsmängeln oder Compliance-Verstößen.\n• Lieferketten-Disruption: Unterbrechungen in Lieferketten durch non-konforme Zulieferer und Partner.\n\n💡 ADVISORIs Transformationsstrategie - von Risiken zu Chancen:\n• Proaktive Compliance-Positionierung: Entwicklung einer Marktführerschaft in Cybersicherheit, die Kunden und Partner anzieht und Premiumpreise rechtfertigt.\n• Operational Excellence durch Security: Implementation von Security-by-Design-Prozessen, die nicht nur Compliance sicherstellen, sondern auch Produktqualität und Entwicklungseffizienz steigern.\n• Ecosystem-Leadership: Aufbau einer Position als vertrauenswürdiger Technologiepartner, der anderen Unternehmen bei ihrer CRA-Compliance hilft und neue B2B-Umsatzströme erschließt.\n• Innovation-Monetarisierung: Entwicklung neuer sicherheitsbasierter Produktfeatures und Services, die zusätzliche Umsatzpotentiale erschließen und Kundenbindung stärken."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir die CRA-Implementation strategisch nutzen, um unsere digitale Transformation zu beschleunigen und neue Geschäftsmodelle zu erschließen?",
        answer: "Die CRA-Implementation bietet eine einzigartige strategische Gelegenheit, Cybersicherheits-Investitionen als Katalysator für umfassende digitale Transformation und Geschäftsmodell-Innovation zu nutzen. Für visionäre Führungskräfte bedeutet dies die Möglichkeit, regulatorische Compliance in einen nachhaltigen Wettbewerbsvorteil und neue Umsatzquellen zu transformieren.\n\n🔄 Synergetische Transformation durch CRA und Digitalisierung:\n• Security-as-a-Service-Modelle: Entwicklung neuer Geschäftsmodelle durch Monetarisierung Ihrer CRA-Compliance-Expertise als Service für andere Unternehmen.\n• Datenqualität und Analytics: Die für CRA erforderliche Transparenz und Monitoring schaffen hochwertige Datenbestände, die für KI-basierte Geschäftsoptimierung genutzt werden können.\n• API-Ecosystem-Entwicklung: CRA-konforme Sicherheitsschnittstellen können als Grundlage für umfassende digitale Plattform-Strategien dienen.\n• Supply Chain Digitalization: CRA-bedingte Lieferanten-Assessments treiben die Digitalisierung der gesamten Wertschöpfungskette voran.\n\n🚀 ADVISORIs Innovations-Framework für CRA-getriebene Transformation:\n• Strategic Platform Architecture: Entwicklung sicherheitszentrierter Technologieplattformen, die sowohl interne Effizienz steigern als auch externe Partnerschaften ermöglichen.\n• Data-Driven Security Intelligence: Aufbau von Cybersicherheits-Dashboards und Predictive Analytics, die von internen Entscheidungen bis hin zu kundenorientierten Services reichen.\n• Ecosystem-Partnership-Modelle: Entwicklung von Partnernetzwerken und Marketplace-Konzepten rund um CRA-konforme Technologien und Services.\n• Innovation Labs für Security: Etablierung dedizierter Innovationsbereiche, die Cybersicherheit als Quelle für Produktinnovation und neue Geschäftsmodelle nutzen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche strategischen Vorteile bietet eine frühzeitige CRA-Compliance gegenüber einem reaktiven Ansatz und wie positioniert uns ADVISORI optimal im Markt?",
        answer: "Eine proaktive CRA-Compliance-Strategie verschafft erhebliche First-Mover-Advantages und strategische Marktpositionierung, die weit über die reine Regulierungserfüllung hinausgehen. Für die Unternehmensführung bedeutet dies die Möglichkeit, aus einer defensiven Compliance-Haltung eine offensive Wachstums- und Differenzierungsstrategie zu entwickeln. Der Zeitpunkt der Implementation entscheidet maßgeblich über die strategischen Optionen und Marktchancen.\n\n🏆 First-Mover-Advantages durch proaktive CRA-Compliance:\n• Marktdifferenzierung und Premium-Positionierung: Frühzeitige CRA-Compliance ermöglicht Positionierung als Technologie- und Sicherheitsführer mit entsprechenden Preispremiums.\n• Talent-Attraction und -Retention: Unternehmen mit fortschrittlichen Cybersicherheits-Praktiken ziehen Top-Talente an und reduzieren Fluktuation in kritischen Bereichen.\n• Investor Relations und ESG-Compliance: Proaktive Cybersicherheit stärkt ESG-Ratings und Investor Confidence, was Kapitalkosten senkt und Bewertungen erhöht.\n• Strategische Partnerschaften: Frühe CRA-Compliance öffnet Türen zu strategischen Partnerschaften mit anderen sicherheitsbewussten Marktführern.\n• Regulatory Influence: Early Adopter können aktiv an der Entwicklung von Standards und Best Practices mitwirken und künftige Regulierung mitgestalten.\n\n💎 ADVISORIs Strategic Positioning Framework:\n• Market Leadership Strategy: Entwicklung einer umfassenden Thought Leadership-Strategie, die Ihr Unternehmen als CRA-Experten und Cybersicherheits-Innovatoren positioniert.\n• Competitive Intelligence: Kontinuierliches Monitoring der Wettbewerber-Compliance und strategische Nutzung von Compliance-Gaps für Marktanteilsgewinne.\n• Strategic Communication: Entwicklung gezielter Kommunikationsstrategien für Kunden, Investoren und Stakeholder, die CRA-Compliance als Wettbewerbsvorteil kommunizieren.\n• Innovation Roadmap: Aufbau langfristiger Innovationspipelines, die CRA-Compliance als Ausgangspunkt für kontinuierliche Produktverbesserung und -differenzierung nutzen."
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
