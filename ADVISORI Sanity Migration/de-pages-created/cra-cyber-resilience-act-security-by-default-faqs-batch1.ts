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
    console.log('Updating CRA Security by Default page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-cyber-resilience-act-security-by-default' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-cyber-resilience-act-security-by-default" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist Security by Default für die C-Suite mehr als eine technische Anforderung und wie positioniert ADVISORI dies als strategischen Wettbewerbsvorteil im Rahmen der CRA-Compliance?",
        answer: "Security by Default nach dem Cyber Resilience Act (CRA) repräsentiert einen fundamentalen Paradigmenwechsel von reaktiver zu proaktiver Cybersicherheit. Für die C-Suite bedeutet dies eine strategische Neuausrichtung der Produktentwicklung, die nicht nur regulatorische Compliance sicherstellt, sondern auch nachhaltigen Wettbewerbsvorteile schafft. ADVISORI positioniert Security by Default als zentralen Pfeiler einer zukunftsorientierten Unternehmensstrategie.\n\n🎯 Strategische Dimensionen für die Führungsebene:\n• Marktzugang und Exportfähigkeit: CRA-konforme Security by Default Implementierung ist Voraussetzung für den Zugang zum EU-Binnenmarkt und eröffnet neue Geschäftsmöglichkeiten in regulierten Märkten.\n• Haftungsminimierung und rechtliche Absicherung: Proaktive Sicherheitsmaßnahmen reduzieren das Risiko von Produkthaftungsansprüchen und schaffen rechtliche Sicherheit bei Cybervorfällen.\n• Vertrauensbildung und Markenpositionierung: Security by Default wird zum Qualitätsmerkmal und Differenzierungsfaktor gegenüber Wettbewerbern, die noch auf nachgelagerte Sicherheitsmaßnahmen setzen.\n• Kostenoptimierung durch präventive Ansätze: Vorbeugende Sicherheitsmaßnahmen sind signifikant kostengünstiger als nachträgliche Sicherheitsupdates oder Incident Response.\n\n🛡️ Der ADVISORI-Ansatz für strategisches Security by Default:\n• Business Case Development: Wir entwickeln überzeugende Geschäftsargumente für Security by Default Investitionen, die über reine Compliance hinausgehen und den ROI klar demonstrieren.\n• Integrierte Produktstrategie: Security by Default wird nahtlos in Ihre Produktentwicklungsstrategie eingebettet, ohne Innovation zu hemmen oder Time-to-Market zu beeinträchtigen.\n• Stakeholder-Kommunikation: Wir unterstützen Sie bei der Kommunikation der Security by Default Vorteile gegenüber Kunden, Investoren und Partnern als Wettbewerbsvorteil.\n• Continuous Improvement Framework: Etablierung eines Systems zur kontinuierlichen Verbesserung der Security by Default Implementierung basierend auf Threat Intelligence und Marktentwicklungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifiziert ADVISORI den Business Impact von Security by Default Implementierungen und welche messbaren Vorteile entstehen für die Unternehmensbewertung?",
        answer: "Die Quantifizierung des Business Impact von Security by Default Implementierungen erfordert eine mehrdimensionale Betrachtung, die sowohl direkte Kosteneinsparungen als auch indirekte Wertsteigerungen erfasst. ADVISORI entwickelt ein umfassendes Measurement Framework, das C-Level-Entscheidern konkrete KPIs und ROI-Metriken für ihre Security by Default Investitionen liefert.\n\n💰 Direkte finanzielle Auswirkungen und Kosteneinsparungen:\n• Reduktion von Security Incident Costs: Security by Default kann die Kosten für Sicherheitsvorfälle um 60-80% reduzieren, da weniger Schwachstellen existieren und Angriffe bereits in frühen Phasen abgewehrt werden.\n• Vermeidung von Compliance-Strafen: CRA-konforme Security by Default Implementierung schützt vor regulatorischen Bußgeldern, die bei Verstößen bis zu 15 Millionen Euro oder 2,5% des weltweiten Jahresumsatzes betragen können.\n• Optimierung der Produktentwicklungskosten: Integrierte Security by Default Ansätze sind 70% kosteneffizienter als nachträgliche Sicherheitsnachrüstungen.\n• Reduktion von Support- und Wartungskosten: Sichere Standardkonfigurationen reduzieren Support-Anfragen und Wartungsaufwand erheblich.\n\n📈 Indirekte Wertsteigerungen und Marktvorteile:\n• Premium Pricing Potential: Produkte mit nachgewiesener Security by Default Implementierung können 15-25% höhere Verkaufspreise erzielen.\n• Marktanteilsgewinne: Frühzeitige CRA-Compliance verschafft Wettbewerbsvorteile und kann zu Marktanteilsgewinnen von 10-20% in sicherheitskritischen Segmenten führen.\n• Unternehmensbewertung und ESG-Ratings: Security by Default Implementierung verbessert ESG-Bewertungen und kann die Unternehmensbewertung um 5-15% steigern.\n• Versicherungsoptimierung: Nachweisbare Security by Default Maßnahmen können Cyber-Versicherungsprämien um 20-40% reduzieren.\n\n🔍 ADVISORI Measurement und Reporting Framework:\n• Executive Dashboards mit Real-time Security Metrics und Business Impact Tracking\n• ROI-Kalkulationen mit detaillierten Kosten-Nutzen-Analysen für verschiedene Implementierungsszenarien\n• Benchmarking gegen Industriestandards und Wettbewerbsanalysen\n• Kontinuierliches Monitoring und Optimierung der Security by Default Performance"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie stellt ADVISORI sicher, dass Security by Default Implementierungen die Produktinnovation nicht hemmen und gleichzeitig die CRA-Anforderungen erfüllen?",
        answer: "Die Herausforderung, Security by Default zu implementieren ohne Innovation zu behindern, erfordert einen ausgewogenen Ansatz, der Sicherheit und Agilität in Einklang bringt. ADVISORI hat eine bewährte Methodik entwickelt, die Security by Default als Enabler für Innovation positioniert, anstatt als Hindernis. Dieser Ansatz gewährleistet sowohl CRA-Compliance als auch die Erhaltung der Innovationskraft.\n\n🚀 Innovation-freundliche Security by Default Strategien:\n• Security as Code Integration: Automatisierte Sicherheitskontrollen werden nahtlos in CI/CD-Pipelines integriert, ohne den Entwicklungsflow zu unterbrechen oder die Entwicklungsgeschwindigkeit zu beeinträchtigen.\n• Shift-Left Security Approach: Sicherheitsaspekte werden bereits in der Designphase berücksichtigt, wodurch spätere aufwendige Nachbesserungen vermieden und der Entwicklungsprozess optimiert wird.\n• Adaptive Security Frameworks: Flexible Sicherheitsarchitekturen ermöglichen es, neue Features und Funktionalitäten schnell und sicher zu implementieren, ohne bestehende Security by Default Prinzipien zu kompromittieren.\n• Developer Experience Optimization: Security by Default Tools und Prozesse werden so gestaltet, dass sie die Entwicklererfahrung verbessern und als produktivitätssteigernde Ressourcen wahrgenommen werden.\n\n🔧 Technische Excellence und Compliance Balance:\n• Modular Security Architecture: Entwicklung von modularen Sicherheitskomponenten, die flexibel in verschiedene Produktarchitekturen integriert werden können, ohne grundlegende Designänderungen zu erfordern.\n• Automated Compliance Validation: Kontinuierliche automatisierte Überprüfung der CRA-Konformität während des Entwicklungsprozesses, um frühzeitig Abweichungen zu identifizieren und zu korrigieren.\n• Risk-based Security Controls: Intelligente Risikobewertung ermöglicht es, Sicherheitsmaßnahmen proportional zu implementieren und Überregulierung zu vermeiden.\n• Innovation Sandboxes: Bereitstellung sicherer Entwicklungsumgebungen, in denen neue Technologien und Ansätze getestet werden können, ohne die Produktionssicherheit zu gefährden.\n\n💡 ADVISORI Innovation Acceleration Framework:\n• Collaborative Security Design Sessions mit Entwicklungsteams zur gemeinsamen Erarbeitung innovativer und sicherer Lösungsansätze\n• Rapid Prototyping für Security by Default Features mit beschleunigten Feedback-Zyklen\n• Cross-functional Security Champions Programme zur Förderung einer sicherheitsbewussten Innovationskultur\n• Continuous Learning und Best Practice Sharing zur ständigen Verbesserung der Balance zwischen Sicherheit und Innovation"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie bereitet ADVISORI Unternehmen auf die sich entwickelnde CRA-Regulatory Landscape vor und gewährleistet nachhaltige Security by Default Compliance?",
        answer: "Die CRA-Regulatory Landscape ist dynamisch und wird sich kontinuierlich weiterentwickeln, insbesondere durch technische Standards, Durchführungsverordnungen und Auslegungshilfen der EU-Kommission. ADVISORI entwickelt adaptive Compliance-Strategien, die nicht nur aktuelle CRA-Anforderungen erfüllen, sondern auch zukünftige regulatorische Entwicklungen antizipieren und Unternehmen proaktiv darauf vorbereiten.\n\n🔮 Proaktive Regulatory Intelligence und Trend Monitoring:\n• Regulatory Horizon Scanning: Kontinuierliche Überwachung der EU-Gesetzgebung, ENISA-Guidelines und technischer Standards (EN/IEC) zur frühzeitigen Identifikation relevanter Änderungen.\n• Impact Assessment für neue Regulatory Requirements: Systematische Bewertung der Auswirkungen neuer Vorschriften auf bestehende Security by Default Implementierungen und Anpassungsbedarfe.\n• Stakeholder Engagement mit EU-Institutionen: Aktive Teilnahme an Konsultationsverfahren und Standardisierungsprozessen zur Einflussnahme auf die Regulierungsentwicklung.\n• Cross-Industry Regulatory Benchmarking: Analyse von Compliance-Ansätzen in verwandten Regulierungsbereichen (NIS2, GDPR, AI Act) zur Identifikation von Synergien und Best Practices.\n\n🛡️ Adaptive Compliance Architecture für nachhaltige Zukunftsfähigkeit:\n• Modular Compliance Framework: Entwicklung flexibler Security by Default Architekturen, die schnell an neue regulatorische Anforderungen angepasst werden können, ohne grundlegende Systemänderungen.\n• Future-proof Security Controls: Implementierung von Sicherheitsmaßnahmen, die nicht nur aktuelle CRA-Anforderungen erfüllen, sondern auch gegen absehbare zukünftige Bedrohungen und Regulierungsänderungen robust sind.\n• Automated Compliance Monitoring: Etablierung automatisierter Systeme zur kontinuierlichen Überwachung der Compliance-Konformität und frühzeitigen Warnung vor potenziellen Abweichungen.\n• Documentation und Audit Trail Management: Aufbau umfassender Dokumentationssysteme, die eine lückenlose Nachverfolgung von Compliance-Maßnahmen ermöglichen und künftige Audits erleichtern.\n\n📊 Continuous Improvement und Strategic Planning:\n• Quarterly Regulatory Updates mit spezifischen Handlungsempfehlungen für Ihre Organisation\n• Annual Security by Default Compliance Reviews zur Bewertung der Wirksamkeit implementierter Maßnahmen\n• Strategic Roadmap Development für mittel- und langfristige Compliance-Planung\n• Crisis Response Planning für den Fall unerwarteter regulatorischer Änderungen oder Enforcement-Aktionen"
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
