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
    console.log('Updating CRA Security-by-Design page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-cyber-resilience-act-security-by-design' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-cyber-resilience-act-security-by-design" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie kann Security-by-Design als strategischer Transformationstreiber für die digitale Evolution unseres Unternehmens genutzt werden, anstatt nur als CRA-Compliance-Anforderung?",
        answer: "Security-by-Design transzendiert die reine Compliance-Erfüllung und wird zum fundamentalen Enabler für digitale Transformation und Innovationsexzellenz. Für die C-Suite eröffnet dies die einzigartige Möglichkeit, regulatorische Anforderungen in strategische Wettbewerbsvorteile umzuwandeln und gleichzeitig die digitale Reife des Unternehmens erheblich zu beschleunigen. Der CRA-getriebene Security-by-Design-Ansatz katalysiert eine ganzheitliche Modernisierung von Entwicklungsprozessen, Technologiestack und Organisationskultur.\n\n🚀 Strategische Transformationsdimensionen durch Security-by-Design:\n• Technologische Modernisierung: Implementierung von Security-by-Design erfordert moderne Entwicklungsarchitekturen, Cloud-native Ansätze und DevSecOps-Pipelines, die gleichzeitig die gesamte IT-Infrastruktur modernisieren.\n• Organisationsentwicklung: Security-by-Design fördert interdisziplinäre Zusammenarbeit zwischen Entwicklung, Security und Business Teams, was zu agileren und effektiveren Arbeitsstrukturen führt.\n• Datengetriebene Entscheidungsfindung: Integrierte Security-Monitoring-Systeme generieren wertvolle Insights über Produktnutzung und -performance, die für strategische Geschäftsentscheidungen genutzt werden können.\n• Kundenvertrauen als Differentiator: Nachweisbar sichere Produkte durch Security-by-Design werden zum entscheidenden Verkaufsargument und Marktdifferentiator in zunehmend sicherheitsbewussten Märkten.\n\n💡 ADVISORI's Transformation-Through-Security Ansatz:\n• Digital Transformation Roadmap: Wir entwickeln integrierte Roadmaps, die CRA-Compliance mit digitaler Transformation verbinden und Security-by-Design als Katalysator für umfassende Modernisierung nutzen.\n• Innovation Acceleration: Implementation von Security-by-Design-Prinzipien beschleunigt Innovationszyklen durch frühe Risikominimierung und reduzierte Time-to-Market für sichere Produkte.\n• Culture Change Management: Begleitung der Organisationsentwicklung zur Etablierung einer Security-First-Kultur, die Innovation fördert statt hemmt.\n• ROI-Maximierung: Strategische Beratung zur Maximierung des Return on Investment von Security-by-Design-Implementierungen durch intelligente Verknüpfung mit anderen Digitalisierungsinitiativen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche konkreten Kostenstrukturen und Business-Case-Argumente rechtfertigen Security-by-Design-Investitionen vor dem Hintergrund der CRA-Anforderungen?",
        answer: "Security-by-Design-Investitionen generieren messbare finanzielle Renditen durch Kostenminimierung, Risikoreduktion und neue Umsatzpotenziale. Für die C-Suite ist entscheidend zu verstehen, dass Security-by-Design nicht nur Compliance-Kosten darstellt, sondern strategische Investitionen mit quantifizierbarem ROI, die sowohl defensive Risikominimierung als auch offensive Marktchancenerschließung ermöglichen. Studien zeigen, dass proaktive Security-by-Design-Ansätze 60-80% kosteneffizienter sind als nachträgliche Sicherheitsnachrüstungen.\n\n💰 Direkte Kosteneinsparungen und Effizienzgewinne:\n• Reduktion von Nachbesserungskosten: Security-by-Design eliminiert teure Post-Launch-Security-Patches und reduziert Support- und Wartungskosten um durchschnittlich 40-60%.\n• Beschleunigte Entwicklungszyklen: Integrierte Sicherheitsprozesse reduzieren Security-Review-Zeiten und beschleunigen Time-to-Market um 25-35%.\n• Minimierung von Compliance-Risiken: Proaktive CRA-Konformität vermeidet potenzielle EU-Bußgelder von bis zu 15 Millionen Euro oder 2,5% des weltweiten Jahresumsatzes.\n• Versicherungsoptimierung: Security-by-Design-zertifizierte Produkte qualifizieren sich für reduzierte Cyber-Versicherungsprämien und bessere Haftungskonditionen.\n\n📈 Strategische Umsatz- und Marktchancen:\n• Premium-Positionierung: Security-by-Design-konforme Produkte ermöglichen 15-25% Preisaufschläge gegenüber konventionellen Alternativen.\n• Marktdifferenzierung: Nachweisbare Sicherheitsexzellenz eröffnet neue Kundensegmente in regulierten Industrien (Healthcare, Finance, Government).\n• Beschleunigte Marktexpansion: CRA-konforme Produkte ermöglichen reibungslosen EU-Marktzugang ohne Compliance-Verzögerungen.\n• Investoren-Confidence: Security-by-Design-Expertise stärkt ESG-Ratings und kann zu besseren Finanzierungskonditionen und höheren Unternehmensbewertungen führen.\n\n🎯 ADVISORI's Business Case Development:\n• ROI-Modellierung: Entwicklung detaillierter Finanzmodelle zur Quantifizierung aller direkten und indirekten Erträge von Security-by-Design-Investitionen.\n• Cost-Benefit-Analysen: Umfassende Kosten-Nutzen-Rechnungen unter Berücksichtigung von Compliance-Kosten, Risikominimierung und Marktchancen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir Security-by-Design in unsere bestehenden Entwicklungsprozesse und Legacy-Systeme integrieren, ohne massive Disruption zu verursachen?",
        answer: "Die erfolgreiche Integration von Security-by-Design in bestehende Entwicklungslandschaften erfordert einen strategischen, schrittweisen Ansatz, der operative Kontinuität gewährleistet und gleichzeitig substantielle Sicherheitsverbesserungen realisiert. Für die C-Suite ist entscheidend, dass Security-by-Design-Transformation als evolutionärer Prozess gestaltet wird, der bestehende Investitionen schützt und Teams befähigt, anstatt sie zu überlasten. Intelligente Migrationsstrategien ermöglichen es, CRA-Compliance zu erreichen, ohne Produktivität oder Marktposition zu gefährden.\n\n🔄 Strategische Integrations- und Transformationsansätze:\n• Hybride Modernisierung: Parallele Entwicklung neuer Security-by-Design-konformer Systeme neben schrittweiser Legacy-System-Modernisierung durch Security-Wrapper und API-Gateway-Ansätze.\n• Mikroservice-Evolution: Sukzessive Transformation monolithischer Systeme in sichere Mikroservices mit integrierten Security-Kontrollen und Zero-Trust-Architekturen.\n• DevSecOps-Pipeline-Integration: Schrittweise Integration von automatisierten Security-Tests und Compliance-Checks in bestehende CI/CD-Pipelines ohne Disruption etablierter Entwicklungsrhythmen.\n• Risk-Based Priorisierung: Fokussierung auf kritische Systemkomponenten und Datenflüsse mit höchsten Sicherheitsrisiken für maximale Compliance-Wirkung bei minimaler initialer Disruption.\n\n🛠️ Praktische Implementierungsstrategien:\n• Security-Overlay-Architektur: Implementation von Security-by-Design-Prinzipien als zusätzliche Schutzschicht über bestehende Systeme durch API-Gateways, Monitoring und Zugriffskontrollen.\n• Pilot-Projekt-Ansatz: Beginn mit neuen Produktfeatures oder -modulen zur Demonstration von Security-by-Design-Erfolgen vor vollständiger Legacy-Transformation.\n• Schrittweise Team-Schulung: Kontinuierliche Weiterbildung bestehender Entwicklungsteams in Security-by-Design-Prinzipien parallel zur praktischen Implementierung.\n• Tool-Integration: Sukzessive Einführung von Security-Testing-Tools und Vulnerability-Scanner in bestehende Entwicklungsumgebungen.\n\n🎯 ADVISORI's Legacy-Integration-Expertise:\n• Migration-Roadmap-Development: Entwicklung detaillierter 12-24-Monats-Roadmaps für die schrittweise Security-by-Design-Integration ohne operative Disruption.\n• Legacy-Security-Assessment: Umfassende Bewertung bestehender Systeme zur Identifikation optimaler Integrationspunkte und Modernisierungsprioritäten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche kritischen Erfolgsfaktoren und KPIs sollten wir etablieren, um den Erfolg unserer Security-by-Design-Initiative zu messen und zu steuern?",
        answer: "Die Etablierung aussagekräftiger KPIs und Erfolgsmessungen für Security-by-Design-Initiativen ist entscheidend für die strategische Steuerung und kontinuierliche Optimierung der CRA-Compliance-Bemühungen. Für die C-Suite ist wichtig, dass Messgrößen sowohl technische Sicherheitsverbesserungen als auch Business-Impact und organisatorische Reife abbilden. Effektive KPI-Systeme ermöglichen datengetriebene Entscheidungsfindung und demonstrieren den strategischen Wert von Security-by-Design-Investitionen gegenüber Stakeholdern und Aufsichtsräten.\n\n📊 Strategische Business-Impact-Metriken:\n• Compliance-Readiness-Score: Quantifizierung des CRA-Compliance-Fortschritts durch gewichtete Bewertung aller relevanten Security-by-Design-Anforderungen (Target: 95%+ bis Q4 2024).\n• Time-to-Market-Verbesserung: Messung der Beschleunigung von Produktentwicklungszyklen durch integrierte Security-Prozesse (Target: 20-30% Reduktion der Security-Review-Zeiten).\n• Security-Incident-Reduktion: Quantifizierung der Verringerung sicherheitsrelevanter Vorfälle in Produktionsumgebungen (Target: 60-80% Reduktion kritischer Vulnerabilities).\n• Customer Trust Score: Bewertung des Kundenvertrauens in Produktsicherheit durch Umfragen und Net Promoter Score-Entwicklung (Target: 15-25% Verbesserung der Security-bezogenen Kundenzufriedenheit).\n\n🔧 Operative Exzellenz und Prozessmetriken:\n• DevSecOps-Maturity-Level: Bewertung der Integration von Security in Entwicklungsprozesse nach etablierten Reifegradmodellen (Target: Level 4/5 DevSecOps Maturity).\n• Automated Security Testing Coverage: Prozentsatz der Codebasis mit automatisierten Security-Tests und Vulnerability-Scanning (Target: 90%+ Code Coverage).\n• Mean Time to Security Patch: Durchschnittliche Zeit von Vulnerability-Entdeckung bis zur Patch-Implementierung (Target: <72 Stunden für kritische Issues).\n• Developer Security Training Completion: Anteil der Entwicklungsteams mit abgeschlossener Security-by-Design-Schulung (Target: 100% Team Coverage).\n\n🎯 ADVISORI's KPI-Framework-Entwicklung:\n• Balanced Scorecard für Security: Entwicklung umfassender Dashboards, die technische, operative und strategische Security-by-Design-Metriken integrieren.\n• Benchmarking und Best Practice Transfer: Vergleich Ihrer KPIs mit Industry-Standards und kontinuierlicher Transfer von Best Practices aus anderen CRA-Implementierungen."
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
