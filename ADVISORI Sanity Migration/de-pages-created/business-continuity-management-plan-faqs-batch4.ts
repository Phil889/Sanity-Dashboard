import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}

const run = async () => {
  try {
    console.log('Updating Business Continuity Management Plan page with FAQ batch 4...')
    
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'business-continuity-management-plan' })
    
    if (!existingDoc) {
      throw new Error('Document "business-continuity-management-plan" not found')
    }
    
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Welche Metriken und KPIs sind entscheidend für die Bewertung der BCM-Plan-Effektivität?',
        answer: "Die systematische Messung der BCM-Plan-Effektivität erfordert ein ausgewogenes Set von quantitativen und qualitativen Metriken, die verschiedene Aspekte der Kontinuitätsfähigkeit abdecken. Erfolgreiche KPI-Frameworks kombinieren operative, strategische und Stakeholder-orientierte Indikatoren für ganzheitliche Performance-Bewertung.\n\n⏱️ Operative Performance-Metriken:\n• Recovery Time Actual vs. Recovery Time Objective für kritische Geschäftsprozesse\n• Mean Time to Recovery für verschiedene Störungstypen und Schweregrade\n• System Availability und Uptime-Prozentsätze für kritische Infrastrukturen\n• Incident Response Time von Alarmierung bis erste Maßnahmen\n• Plan Activation Time von Entscheidung bis vollständiger Implementierung\n\n💰 Finanzielle Impact-Indikatoren:\n• Cost of Downtime pro Stunde für verschiedene Geschäftsbereiche\n• BCM Investment ROI durch vermiedene Verluste und reduzierte Ausfallzeiten\n• Insurance Premium Reductions durch nachgewiesene Resilienz-Capabilities\n• Revenue Protection während Störungen im Vergleich zu historischen Ereignissen\n• Cost per Incident für BCM-Aktivierung und Wiederherstellungsmaßnahmen\n\n🎯 Strategische Resilienz-Metriken:\n• Business Impact Tolerance Achievement für kritische Funktionen\n• Stakeholder Confidence Index basierend auf regelmäßigen Umfragen\n• Regulatory Compliance Score für alle relevanten BCM-Anforderungen\n• Competitive Advantage Metrics durch überlegene Kontinuitätsfähigkeiten\n• Market Share Retention während und nach größeren Störungen\n\n📊 Qualitative Bewertungsindikatoren:\n• Stakeholder Satisfaction Scores von Kunden, Mitarbeitern und Partnern\n• Crisis Communication Effectiveness durch Medienanalyse und Feedback\n• Team Performance und Stress-Level während Übungen und realen Ereignissen\n• Learning and Improvement Rate basierend auf implementierten Verbesserungen\n• Cultural Resilience Maturity durch Verhaltens- und Einstellungsanalysen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Wie werden BCM-Pläne für Remote-Work und hybride Arbeitsmodelle angepasst?',
        answer: "Die Anpassung von BCM-Plänen an Remote-Work und hybride Arbeitsmodelle erfordert fundamentale Überarbeitung traditioneller Kontinuitätsansätze. Moderne BCM-Strategien müssen dezentrale Arbeitsstrukturen, digitale Abhängigkeiten und neue Risikoprofile berücksichtigen.\n\n🏠 Dezentrale Arbeitsplatz-Kontinuität:\n• Home Office Infrastructure Assessment für kritische Mitarbeiter\n• Backup Internet Connectivity und alternative Kommunikationswege\n• Ergonomic Workspace Standards für langfristige Remote-Arbeit\n• Equipment Redundancy und schnelle Ersatzbeschaffung\n• Family Emergency Planning für Mitarbeiter mit Betreuungspflichten\n\n💻 Digitale Infrastruktur-Resilienz:\n• Cloud-first Architecture für ortsunabhängigen Systemzugriff\n• VPN Capacity Planning für simultane Remote-Zugriffe aller Mitarbeiter\n• Collaboration Platform Redundancy für kritische Kommunikation\n• Data Backup und Sync-Strategien für dezentrale Arbeitsplätze\n• Cybersecurity Enhancement für erweiterte Angriffsflächen\n\n👥 Virtuelle Team-Koordination:\n• Digital Crisis Communication Protocols für Remote-Teams\n• Virtual Emergency Assembly Points und Check-in-Verfahren\n• Online Training und Drill-Formate für dezentrale Belegschaft\n• Digital Collaboration Tools für Krisenstab-Aktivitäten\n• Remote Leadership und Decision-Making-Prozesse\n\n🔒 Erweiterte Sicherheitsmaßnahmen:\n• Zero Trust Security Models für Remote-Zugriffe\n• Multi-Factor Authentication für alle kritischen Systeme\n• Endpoint Security Management für Home-Office-Geräte\n• Data Loss Prevention für dezentrale Datenverarbeitung\n• Incident Response für Remote-Security-Vorfälle\n\n🌐 Hybride Flexibilität:\n• Seamless Transition Capabilities zwischen Office und Remote\n• Location-agnostic Service Delivery für Kunden\n• Flexible Resource Allocation zwischen verschiedenen Arbeitsmodellen\n• Adaptive Capacity Planning für wechselnde Arbeitsverteilungen\n• Cultural Integration zwischen Remote und Office-basierten Teams"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Welche Rolle spielt Künstliche Intelligenz in der Zukunft des BCM-Plannings?',
        answer: "Künstliche Intelligenz revolutioniert BCM-Planning durch predictive Analytics, automatisierte Entscheidungsfindung und adaptive Planoptimierung. AI-gestützte BCM-Systeme ermöglichen proaktive Risikominimierung, intelligente Ressourcenallokation und kontinuierliche Planverbesserung basierend auf Echtzeitdaten und historischen Mustern.\n\n🔮 Predictive Risk Analytics:\n• Machine Learning Modelle für Früherkennung potenzieller Störungen\n• Pattern Recognition in historischen Incident-Daten für Risikovorhersage\n• Real-time Threat Intelligence Integration für proaktive Maßnahmen\n• Anomaly Detection in kritischen Systemen und Prozessen\n• Scenario Modeling für komplexe Interdependenz-Analysen\n\n🤖 Automatisierte Entscheidungsunterstützung:\n• AI-basierte Plan-Aktivierung bei definierten Trigger-Ereignissen\n• Intelligent Resource Allocation basierend auf aktueller Situation\n• Dynamic Priority Adjustment für sich ändernde Umstände\n• Automated Stakeholder Notification mit personalisierten Nachrichten\n• Smart Escalation Management für komplexe Entscheidungshierarchien\n\n📊 Adaptive Plan-Optimierung:\n• Continuous Learning aus Übungen und realen Ereignissen\n• Performance Analytics für datenbasierte Planverbesserungen\n• Simulation-based Testing verschiedener Reaktionsszenarien\n• Optimization Algorithms für Ressourcen und Zeitplanung\n• Feedback Loop Integration für kontinuierliche Anpassung\n\n🧠 Cognitive Computing für Komplexitätsmanagement:\n• Natural Language Processing für Incident-Report-Analyse\n• Knowledge Graph Creation für Abhängigkeits-Mapping\n• Intelligent Document Generation für situationsspezifische Pläne\n• Conversational AI für Stakeholder-Interaktion während Krisen\n• Expert System Integration für konsistente Entscheidungsqualität\n\n🔄 Selbstlernende BCM-Systeme:\n• Adaptive Algorithms für sich entwickelnde Bedrohungslandschaften\n• Automated Plan Updates basierend auf Umgebungsveränderungen\n• Intelligent Testing Schedules für optimale Übungsfrequenz\n• Performance Benchmarking gegen AI-generierte Best Practices\n• Predictive Maintenance für BCM-Infrastrukturen und Prozesse"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie werden BCM-Pläne für Klimawandel und extreme Wetterereignisse entwickelt?',
        answer: "Die Entwicklung klimaresilienter BCM-Pläne erfordert langfristige Perspektiven, wissenschaftsbasierte Risikomodellierung und adaptive Strategien für sich intensivierende Umweltbedrohungen. Moderne Climate-aware BCM integriert Klimaprojektionen, Nachhaltigkeitsziele und gesellschaftliche Verantwortung in Kontinuitätsstrategien.\n\n🌡️ Klimarisiko-Assessment und Modellierung:\n• Climate Science Integration für langfristige Risikoplanung\n• Extreme Weather Scenario Planning basierend auf IPCC-Projektionen\n• Geographic Risk Mapping für standortspezifische Klimabedrohungen\n• Seasonal Variability Analysis für zeitabhängige Risikobewertung\n• Tipping Point Identification für kritische Klimaschwellen\n\n🏗️ Infrastruktur-Resilienz für Klimaextreme:\n• Climate-proof Building Standards für kritische Einrichtungen\n• Flood-resistant Technology Deployment in gefährdeten Bereichen\n• Heat-resilient Cooling Systems für extreme Temperaturen\n• Storm-resistant Communication Infrastructure\n• Drought-resistant Water Supply und Backup-Systeme\n\n🌿 Nachhaltige Kontinuitätsstrategien:\n• Green Recovery Planning mit umweltfreundlichen Alternativen\n• Carbon-neutral Backup Operations und alternative Standorte\n• Renewable Energy Integration für kritische Systeme\n• Circular Economy Principles in Ressourcenplanung\n• Biodiversity Protection in Standort- und Lieferkettenentscheidungen\n\n🤝 Community-basierte Resilienz:\n• Local Community Partnership für gegenseitige Unterstützung\n• Ecosystem Service Protection für natürliche Pufferzonen\n• Social Vulnerability Assessment für gefährdete Bevölkerungsgruppen\n• Indigenous Knowledge Integration für traditionelle Anpassungsstrategien\n• Regional Coordination für großflächige Klimaereignisse\n\n📈 Adaptive Management für Klimaunsicherheit:\n• Flexible Planning Horizons für sich ändernde Klimabedingungen\n• Regular Climate Risk Updates basierend auf neuester Wissenschaft\n• Threshold-based Triggers für Planaktualisierungen\n• Scenario Stress Testing für verschiedene Klimazukünfte\n• Innovation Integration für neue Klimaanpassungstechnologien"
      }
    ]
    
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQ batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
