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
    console.log('Updating FRTB Prozessoptimierung & Schulungen page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'frtb-prozessoptimierung-schulungen' })
    
    if (!existingDoc) {
      throw new Error('Document "frtb-prozessoptimierung-schulungen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie unterstützt ADVISORI Finanzinstitute dabei, FRTB-Schulungen als strategisches Instrument für Talentakquisition und Employer Branding zu nutzen?",
        answer: "In einem zunehmend kompetitiven Markt für Finanztalente positioniert ADVISORI FRTB-Expertise als entscheidenden Differentiator für die Talentgewinnung und -bindung. Unsere strategischen Schulungsprogramme werden nicht nur als interne Entwicklungsmaßnahme, sondern als externe Signale für fachliche Exzellenz und Zukunftsorientierung konzipiert. Dies schafft erhebliche Vorteile bei der Rekrutierung hochqualifizierter Fachkräfte und der Positionierung als führender Arbeitgeber in der Finanzbranche.\n\n🌟 Employer Branding durch FRTB-Excellence:\n• Thought Leadership Positioning: Etablierung des Unternehmens als Vorreiter in modernen Risikomanagement-Praktiken durch öffentlich kommunizierte FRTB-Kompetenz.\n• Innovative Learning Culture: Demonstration einer zukunftsorientierten Lernkultur, die Top-Talente anzieht, die nach kontinuierlicher Weiterentwicklung suchen.\n• Industry Recognition: Aufbau von Branchenanerkennung durch Best-Practice-Sharing und Teilnahme an FRTB-bezogenen Fachkonferenzen und Publikationen.\n• Career Advancement Opportunities: Klare Darstellung von Karrierepfaden, die auf FRTB-Expertise basieren und interne sowie externe Karrierechancen eröffnen.\n\n🎯 Strategische Talentakquisition durch FRTB-Fokus:\n• Specialized Recruitment Channels: Nutzung FRTB-spezifischer Netzwerke und Communities für gezielte Talentansprache mit hoher Relevanz und Qualität.\n• Skills-Based Assessment: Entwicklung innovativer Bewertungsverfahren, die FRTB-Kompetenz als Schlüsselqualifikation hervorheben und entsprechende Kandidaten identifizieren.\n• Partnership with Universities: Aufbau strategischer Partnerschaften mit Hochschulen zur frühen Identifikation und Entwicklung von FRTB-Talenten bereits im Studium.\n• Alumni Networks: Schaffung von Alumni-Netzwerken ehemaliger FRTB-Schulungsteilnehmer als Multiplikatoren und Referenzgeber für zukünftige Kandidaten.\n\n💼 Value Proposition für High-Performer:\n• Cutting-Edge Expertise: Angebot modernster FRTB-Kenntnisse als Investition in die langfristige Marktfähigkeit der Mitarbeiter.\n• Industry Leadership Exposure: Kontakt zu führenden FRTB-Experten und Regulierungsvertretern als Teil der Schulungsprogramme.\n• Cross-Industry Mobility: Entwicklung transferierbarer Fähigkeiten, die sowohl in traditionellen Banken als auch in FinTech-Unternehmen geschätzt werden.\n• Global Career Opportunities: FRTB-Expertise als Basis für internationale Karrierechancen in verschiedenen Jurisdiktionen und Märkten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche Strategien verfolgt ADVISORI zur Integration von ESG-Aspekten und Nachhaltigkeitsüberlegungen in FRTB-Prozessoptimierung und Schulungskonzepte?",
        answer: "Die Konvergenz von FRTB-Regulierung und ESG-Anforderungen ist ein emerging trend, der strategisch antizipiert werden muss. ADVISORI entwickelt zukunftsorientierte Ansätze, die FRTB-Prozesse und Schulungen mit Nachhaltigkeitsüberlegungen verknüpfen. Dies bereitet Organisationen nicht nur auf aktuelle regulatorische Anforderungen vor, sondern auch auf die zu erwartende Integration von Klimarisiken und ESG-Faktoren in die Kapitalmarktregulierung.\n\n🌱 ESG-Integration in FRTB-Prozesslandschaft:\n• Climate Risk Scenario Integration: Entwicklung von FRTB-Modellen, die Klimaszenarien und Transitionsrisiken systematisch berücksichtigen und quantifizieren können.\n• Sustainable Finance Taxonomy Alignment: Anpassung von FRTB-Prozessen zur Unterstützung der EU-Taxonomie-Berichterstattung und anderer nachhaltiger Finanzierungsregularien.\n• ESG Data Quality Management: Implementation von Datengovernance-Frameworks, die sowohl FRTB- als auch ESG-Datenqualitätsanforderungen erfüllen.\n• Integrated Risk Assessment: Entwicklung ganzheitlicher Risikobewertungsansätze, die traditionelle Marktrisiken mit ESG-Risiken verknüpfen.\n\n📚 Nachhaltigkeitsorientierte Schulungsarchitektur:\n• Climate-Aware FRTB Training: Spezialisierte Module, die Klimarisiken in FRTB-Berechnungen und deren langfristige Auswirkungen auf Portfolios behandeln.\n• Sustainable Trading Strategies: Schulungen zur Integration von ESG-Kriterien in Trading-Entscheidungen unter Berücksichtigung von FRTB-Kapitalanforderungen.\n• Regulatory Convergence Workshops: Vorbereitung auf die zunehmende Verzahnung von Kapitalmarkt- und Nachhaltigkeitsregulierung (SFDR, CSRD, etc.).\n• Stakeholder Impact Analysis: Training zur Bewertung der Auswirkungen von Trading-Aktivitäten auf verschiedene Stakeholder-Gruppen und gesellschaftliche Ziele.\n\n🔄 Strategische Nachhaltigkeits-Integration:\n• Future-Proofing FRTB Systems: Konzeption flexibler FRTB-Architekturen, die erwartete ESG-Regulierungsänderungen antizipieren und adaptieren können.\n• Sustainability KPI Integration: Entwicklung von Performance-Metriken, die sowohl FRTB-Effizienz als auch Nachhaltigkeitsziele messen und optimieren.\n• Green Finance Innovation: Förderung innovativer Ansätze zur Integration grüner Finanzprodukte in FRTB-Rahmenwerke ohne Kompromisse bei der Risikomessung.\n• Purpose-Driven Culture Building: Schaffung einer Organisationskultur, die FRTB-Exzellenz mit gesellschaftlicher Verantwortung und Nachhaltigkeitszielen verknüpft."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie addressiert ADVISORI die zunehmende Digitalisierung und Automatisierung in FRTB-Prozessen und welche Auswirkungen hat dies auf Qualifikationsanforderungen und Schulungsbedarfe?",
        answer: "Die digitale Transformation revolutioniert FRTB-Prozesse grundlegend – von KI-gestützten Risikoberechnungen bis hin zu vollautomatisierten Reporting-Pipelines. ADVISORI antizipiert diese Entwicklung und bereitet Organisationen auf die Zukunft vor, in der menschliche Expertise und digitale Intelligenz symbiotisch zusammenwirken. Unsere Schulungskonzepte entwickeln sowohl technische Digitalkompetenz als auch die analytischen Fähigkeiten, die in einer automatisierten FRTB-Welt unverzichtbar bleiben.\n\n🤖 Digitale Transformation der FRTB-Landschaft:\n• AI-Enhanced Risk Modeling: Integration von Machine Learning und KI in FRTB-Berechnungen für präzisere und dynamischere Risikomodelle.\n• Robotic Process Automation (RPA): Vollautomatisierung repetitiver FRTB-Prozesse mit intelligenter Ausnahmenbehandlung und Qualitätskontrolle.\n• Real-Time Risk Monitoring: Implementierung kontinuierlicher, echtzeitnaher FRTB-Überwachung mit automatisierten Alerting-Systemen.\n• Cloud-Native FRTB Architectures: Migration zu skalierbaren, cloud-basierten FRTB-Infrastrukturen für erhöhte Flexibilität und Effizienz.\n\n🎓 Evolution der Qualifikationsanforderungen:\n• Data Science Integration: Entwicklung von FRTB-Fachkräften mit zusätzlicher Kompetenz in Datenanalytik, statistischer Modellierung und Algorithm Design.\n• Human-AI Collaboration: Schulung in der effektiven Zusammenarbeit mit KI-Systemen, einschließlich Interpretation von ML-Outputs und Bias-Erkennung.\n• Digital Risk Assessment: Aufbau von Kompetenzen zur Bewertung und Managements neuer, durch Digitalisierung entstehender Risiken in FRTB-Kontexten.\n• Cross-Functional Technology Understanding: Entwicklung grundlegender IT- und Programmierkenntnisse für bessere Kommunikation mit Tech-Teams.\n\n🔄 Adaptive Schulungsarchitektur für die digitale Ära:\n• Continuous Micro-Learning: Implementation agiler Lernformate, die mit der Geschwindigkeit technologischer Entwicklungen Schritt halten können.\n• Simulation-Based Training: Nutzung virtueller Umgebungen und digitaler Zwillinge für realitätsnahe FRTB-Schulungen ohne Risiko für Live-Systeme.\n• Collaborative Learning Platforms: Aufbau digitaler Communities of Practice für kontinuierlichen Wissensaustausch zwischen FRTB-Practitioners.\n• Technology Vendor Partnerships: Strategische Allianzen mit FinTech-Unternehmen für direkten Zugang zu neuesten FRTB-Technologien in Schulungskontexten.\n\n🚀 Zukunftsorientierte Kompetenzentwicklung:\n• Digital Leadership Skills: Entwicklung von Führungskompetenzen für die Leitung digitaler FRTB-Transformationen und Tech-Teams.\n• Innovation Management: Befähigung zur Identifikation und Bewertung neuer Technologien für FRTB-Anwendungen.\n• Regulatory Technology (RegTech) Expertise: Spezialisierung auf technologiegestützte Compliance-Lösungen für FRTB-Anforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie gewährleistet ADVISORI die Skalierbarkeit von FRTB-Schulungskonzepten für unterschiedliche Organisationsgrößen – vom kleinen Regional-Institut bis zur global agierenden Großbank?",
        answer: "Organisationen verschiedener Größenordnungen stehen vor fundamental unterschiedlichen Herausforderungen bei der FRTB-Implementierung. ADVISORI hat modulare, skalierbare Schulungsarchitekturen entwickelt, die sowohl für spezialisierte Boutique-Banken als auch für komplexe, multinational operierende Finanzkonzerne optimiert sind. Unsere Ansätze berücksichtigen Ressourcenverfügbarkeit, organisatorische Komplexität und spezifische Geschäftsmodelle für maximale Relevanz und Effektivität.\n\n🏢 Maßgeschneiderte Ansätze nach Organisationsgröße:\n• Small-Scale Institutions (Regional-/Spezialbanken): Fokus auf kostengünstige, hocheffiziente Schulungsformate mit externem Expert-Access und Peer-Learning-Netzwerken.\n• Mid-Tier Organizations (überregionale Banken): Aufbau interner FRTB-Kompetenz-Zentren mit Train-the-Trainer-Programmen und strategischen Wissenspartnerschaften.\n• Large-Scale Enterprises (Großbanken): Comprehensive Corporate Universities mit spezialisierten FRTB-Curricula und globaler Wissensverteilung.\n• Global Financial Conglomerates: Multi-jurisdiktionale Schulungsarchitekturen mit lokaler Anpassung und zentraler Qualitätssicherung.\n\n⚖️ Skalierungs-Framework von ADVISORI:\n• Modular Content Architecture: Flexibel kombinierbare Lernmodule, die je nach Organisationsbedürfnissen und verfügbaren Ressourcen zusammengestellt werden können.\n• Technology-Enabled Delivery: Skalierbare Lernplattformen, die von einfachen E-Learning-Systemen bis zu komplexen Virtual-Reality-Umgebungen reichen.\n• Resource Optimization: Intelligente Allokation von Schulungsressourcen basierend auf Kostenstellen, strategischen Prioritäten und ROI-Kalkulationen.\n• Partnership Ecosystems: Aufbau strategischer Allianzen zwischen Organisationen verschiedener Größen für geteilte Lernressourcen und Kostenteilung.\n\n🎯 Größenspezifische Optimierungsstrategien:\n• Boutique-Focused Efficiency: Konzentration auf kritische FRTB-Kompetenzen mit hohem Impact bei minimalen Ressourceninvestitionen.\n• Mid-Tier Growth Enablement: Aufbau skalierbarer interner Kapazitäten, die mit dem Organisationswachstum mitwachsen können.\n• Enterprise Integration: Nahtlose Integration von FRTB-Schulungen in bestehende Corporate Learning & Development Infrastrukturen.\n• Global Harmonization: Standardisierung von FRTB-Kompetenzen über verschiedene Regionen und Geschäftsbereiche hinweg bei lokaler Anpassungsfähigkeit.\n\n🔄 Adaptive Resource Management:\n• Shared Service Models: Entwicklung von FRTB-Schulungsservices, die zwischen Partnerorganisationen geteilt werden können.\n• Flexible Delivery Modes: Mix aus intensiven Präsenzformaten, Online-Learning und Just-in-Time-Support je nach Organisationsanforderungen.\n• Phased Implementation: Stufenweise Einführung von FRTB-Schulungsprogrammen entsprechend der Organisationskapazität und strategischen Prioritäten."
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
    console.log('✅ C-Level FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
