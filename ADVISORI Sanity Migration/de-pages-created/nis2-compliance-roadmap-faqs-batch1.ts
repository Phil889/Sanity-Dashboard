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
    console.log('Updating NIS2 Compliance Roadmap page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-compliance-roadmap' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-compliance-roadmap" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist eine strategische NIS2 Compliance Roadmap für C-Level-Entscheidungsträger unverzichtbar und wie differenziert sich ADVISORIs Ansatz von herkömmlichen Compliance-Projekten?",
        answer: "Eine NIS2 Compliance Roadmap ist für die Führungsebene weit mehr als ein regulatorisches Pflichtprogramm – sie stellt einen strategischen Rahmen dar, der Cybersicherheit als integralen Bestandteil der Unternehmensführung etabliert. Für C-Level-Führungskräfte bedeutet NIS2 eine fundamentale Neuausrichtung der Verantwortlichkeiten: Cybersicherheit wird von einer IT-Funktion zu einer Geschäftsfunktion mit direkter Haftung der Geschäftsleitung transformiert.\n\n🎯 Strategische Imperative einer NIS2 Compliance Roadmap:\n• Rechtssicherheit und Haftungsminimierung: Systematische Dokumentation aller Compliance-Maßnahmen zum Schutz der persönlichen Haftung von Vorstand und Geschäftsführung bei Cybersicherheitsvorfällen.\n• Business Continuity als Wettbewerbsvorteil: Proaktive Resilienz-Planung, die nicht nur regulatorische Anforderungen erfüllt, sondern auch die operative Kontinuität und Marktposition stärkt.\n• Strategische Ressourcenallokation: Optimierte Investitionsplanung in Cybersicherheitstechnologien und -prozesse mit messbaren ROI-Kennzahlen und langfristiger Wertschöpfung.\n• Stakeholder-Vertrauen und Reputation: Demonstrierte Cybersecurity-Exzellenz als Differenzierungsmerkmal gegenüber Kunden, Partnern und Investoren.\n\n🚀 Der ADVISORI-Differenzierungsansatz:\n• C-Suite-Integration: Wir entwickeln Roadmaps, die Cybersicherheit direkt in strategische Geschäftsentscheidungen integrieren, statt sie als isolierte IT-Initiative zu behandeln.\n• Business-Value-Orientierung: Jede Compliance-Maßnahme wird hinsichtlich ihres Beitrags zu Geschäftszielen, operativer Effizienz und Wettbewerbsposition bewertet und optimiert.\n• Adaptive Governance-Strukturen: Implementation flexibler Steuerungsmodelle, die sowohl regulatorische Anforderungen erfüllen als auch agile Geschäftsentscheidungen ermöglichen.\n• Digitale Transformation als Enabler: Nutzung der NIS2-Implementierung als Katalysator für umfassende digitale Modernisierung und Prozessoptimierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche konkreten finanziellen und strategischen Risiken entstehen für unser Unternehmen ohne eine strukturierte NIS2 Compliance Roadmap?",
        answer: "Ohne eine strategisch durchdachte NIS2 Compliance Roadmap setzen sich Unternehmen erheblichen finanziellen und strategischen Risiken aus, die das Überleben der Organisation gefährden können. Die NIS2-Richtlinie bringt nicht nur verschärfte Sanktionen mit sich, sondern auch eine fundamentale Neugestaltung der Cybersicherheits-Governance mit weitreichenden Geschäftsimplikationen.\n\n💰 Finanzielle Risikodimensionen ohne strukturierte Roadmap:\n• Drastische Bußgelder: Bis zu 10 Millionen Euro oder 2% des weltweiten Jahresumsatzes – bei kritischen Infrastrukturen noch härter sanktioniert.\n• Geschäftsunterbrechungskosten: Ungeplante Systemausfälle können täglich Millionenverluste verursachen, wobei eine strukturierte Roadmap präventive Maßnahmen priorisiert hätte.\n• Notfall-Implementierungskosten: Last-Minute-Compliance-Maßnahmen kosten typischerweise das 3-5fache einer geplanten Implementierung.\n• Reputationsverluste: Cybersicherheitsvorfälle bei non-compliant Organisationen führen zu messbaren Marktwertverlust und Kundenabwanderung.\n\n⚠️ Strategische Geschäftsrisiken:\n• Verlust der Betriebserlaubnis: Behördliche Sanktionen können bis zum temporären Geschäftsstopp reichen, mit existenzbedrohenden Konsequenzen.\n• Wettbewerbsnachteile: Während Konkurrenten durch strukturierte NIS2-Implementation Effizienzgewinne erzielen, bleiben unvorbereitete Unternehmen in reaktiven Modus gefangen.\n• Eingeschränkte Geschäftsmöglichkeiten: Viele B2B-Kunden und Partner fordern zunehmend NIS2-Compliance als Voraussetzung für Geschäftsbeziehungen.\n• Haftungsrisiken für Management: Persönliche Haftung der Geschäftsleitung bei Verletzung der Sorgfaltspflicht in Cybersicherheitsfragen.\n\n🛡️ ADVISORIs Risikominimierungsansatz:\n• Proaktive Risikoidentifikation: Systematische Erfassung und Bewertung aller NIS2-relevanten Risiken mit quantifizierten Auswirkungsanalysen.\n• Gestufte Implementierungsstrategie: Priorisierung kritischer Compliance-Maßnahmen zur schnellen Risikoreduktion bei optimaler Ressourcennutzung.\n• Kontinuierliches Monitoring: Etablierung von Frühwarnsystemen zur rechtzeitigen Erkennung und Behebung von Compliance-Lücken."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie kann eine NIS2 Compliance Roadmap als strategischer Enabler für Geschäftswachstum und operative Exzellenz genutzt werden?",
        answer: "Eine strategisch konzipierte NIS2 Compliance Roadmap transformiert regulatorische Notwendigkeiten in Wachstumstreiber und operative Verbesserungen. Statt NIS2 als Kostenblock zu betrachten, nutzen visionäre Führungskräfte die Implementierung als Katalysator für umfassende Unternehmenstransformation und Wettbewerbsvorteile.\n\n🚀 Geschäftswachstum durch strategische NIS2-Implementation:\n• Marktdifferenzierung: Überlegene Cybersicherheitsstandards werden zum USP gegenüber Wettbewerbern und ermöglichen Premium-Pricing bei sicherheitskritischen Services.\n• Neue Geschäftsmodelle: NIS2-Compliance eröffnet Zugang zu regulierten Märkten und ermöglicht Expansion in kritische Infrastrukturbereiche.\n• Partner-Ökosystem-Stärkung: Compliance-Exzellenz zieht hochwertige Partner an und ermöglicht strategische Allianzen mit anderen compliance-fokussierten Organisationen.\n• Digitale Transformation als Nebeneffekt: NIS2-konforme Systeme bilden das Fundament für innovative digitale Services und datengetriebene Geschäftsmodelle.\n\n⚡ Operative Exzellenz durch strukturierte Roadmap-Umsetzung:\n• Prozessoptimierung: NIS2-Anforderungen zwingen zur Standardisierung und Automatisierung, was langfristige Effizienzgewinne in allen Unternehmensbereichen generiert.\n• Datenqualität und -governance: Verbesserte Datenmanagement-Praktiken erhöhen Entscheidungsqualität und ermöglichen fortschrittliche Analytics-Anwendungen.\n• Incident Response Excellence: Systematische Vorbereitung auf Cybersicherheitsvorfälle stärkt die Resilienz gegenüber allen Arten von Geschäftsstörungen.\n• Kulturwandel als Wettbewerbsvorteil: Sicherheitsbewusstsein wird zur Unternehmenskultur und reduziert human error across all business functions.\n\n🎯 ADVISORIs Business-Value-orientierter Roadmap-Ansatz:\n• ROI-Maximierung: Jede Compliance-Investition wird auf ihren Beitrag zu Geschäftszielen analysiert und entsprechend priorisiert.\n• Synergieidentifikation: Systematische Suche nach Überschneidungen zwischen NIS2-Anforderungen und anderen strategischen Initiativen zur Kostenoptimierung.\n• Agile Implementierung: Flexible Roadmap-Anpassung ermöglicht die Integration neuer Geschäftschancen während der Compliance-Journey."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche kritischen Entscheidungen muss das C-Level bei der Entwicklung einer NIS2 Compliance Roadmap treffen und wie unterstützt ADVISORI dabei?",
        answer: "Die Entwicklung einer NIS2 Compliance Roadmap erfordert strategische Entscheidungen auf höchster Führungsebene, die weit über technische Implementierungsdetails hinausgehen. Diese Entscheidungen prägen nicht nur die Compliance-Fähigkeiten, sondern auch die zukünftige Wettbewerbsposition und operative Agilität der Organisation.\n\n🔑 Kritische C-Level-Entscheidungsdimensionen:\n• Budget- und Ressourcenallokation: Bestimmung der angemessenen Investitionshöhe zwischen Mindest-Compliance und strategischer Cybersecurity-Exzellenz mit klaren ROI-Erwartungen.\n• Governance-Struktur-Definition: Etablierung neuer Verantwortlichkeiten und Entscheidungskompetenzen für Cybersicherheit auf Vorstandsebene mit direkter Management-Accountability.\n• Technology vs. Process-Balance: Strategische Entscheidung zwischen technologie-zentrischen und prozess-fokussierten Compliance-Ansätzen basierend auf Unternehmenskultur und -strategie.\n• Inhouse vs. Outsourcing-Strategie: Kritische Abwägung zwischen interner Kapazitätsentwicklung und externem Service-Sourcing für verschiedene NIS2-Funktionen.\n\n⚡ Zeitkritische strategische Weichenstellungen:\n• Implementierungsgeschwindigkeit: Balance zwischen schneller Risikominimierung und nachhaltiger, durchdachter Transformation unter Berücksichtigung der Oktober 2024-Deadline.\n• Scope-Definition: Bestimmung des Compliance-Umfangs - Minimaler regulatory scope vs. ganzheitlicher Enterprise-Ansatz mit strategischen Vorteilen.\n• Change Management-Intensität: Entscheidung über das Ausmaß kultureller Transformation parallel zur technischen Implementation.\n• Stakeholder-Kommunikationsstrategie: Festlegung der Transparenz gegenüber Kunden, Partnern und Aufsichtsbehörden während der Transformation.\n\n🏆 ADVISORIs C-Level Decision Support:\n• Strategisches Advisory: Bereitstellung datengestützter Entscheidungsgrundlagen mit quantifizierten Kosten-Nutzen-Analysen für alle kritischen Weichenstellungen.\n• Best Practice Benchmarking: Vergleichsanalysen mit führenden Organisationen in Ihrer Branche zur Orientierung bei strategischen Entscheidungen.\n• Szenario-Modellierung: Simulation verschiedener Implementierungsstrategien mit ihren jeweiligen Risiko-, Kosten- und Nutzenimplikationen.\n• Executive Coaching: Unterstützung des Managements bei der Entwicklung interner Cybersecurity-Kompetenz und -Führung für nachhaltige Organisationsentwicklung."
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
