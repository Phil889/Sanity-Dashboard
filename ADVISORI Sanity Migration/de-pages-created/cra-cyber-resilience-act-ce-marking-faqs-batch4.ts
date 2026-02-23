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
    console.log('Updating CRA Cyber Resilience Act CE-Marking page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-cyber-resilience-act-ce-marking' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-cyber-resilience-act-ce-marking" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie unterstützt ADVISORI bei der Entwicklung einer CRA-konformen Produktarchitektur und welche Design-Prinzipien sind entscheidend für nachhaltigen Erfolg?",
        answer: "Die Entwicklung CRA-konformer Produktarchitekturen erfordert fundamentale Designentscheidungen, die weit über nachträgliche Sicherheitsmaßnahmen hinausgehen. ADVISORI begleitet Unternehmen bei der Transformation zu Security-by-Design-Ansätzen, die nicht nur regulatorische Anforderungen erfüllen, sondern auch Innovationskraft und Marktpositionierung stärken.\n\n🏗️ Fundamental Architecture Principles:\n• Security-by-Design Integration: Implementierung von Sicherheitsanforderungen als Kernbestandteil der Produktarchitektur von der ersten Konzeptionsphase an.\n• Zero-Trust Architecture: Adoption von Zero-Trust-Prinzipien für umfassende Absicherung aller Systemkomponenten und Kommunikationswege.\n• Modulare Sicherheitsarchitekturen: Entwicklung flexibler, erweiterbarer Sicherheitsframeworks, die sich an evolvierende Bedrohungen anpassen können.\n• Privacy-by-Design: Integration von Datenschutzprinzipien in die Grundarchitektur für GDPR-konforme und vertrauenswürdige Produkte.\n\n🎯 Strategische Design Excellence:\n• Future-Proof Architectures: Entwicklung zukunftssicherer Architekturen, die sich an evolvierende CRA-Anforderungen und neue Technologien anpassen können.\n• Scalability und Performance: Optimierung von Sicherheitsarchitekturen für Skalierbarkeit ohne Performanceverlust.\n• Interoperability Standards: Sicherstellung nahtloser Integration mit bestehenden Systemlandschaften und Drittanbieter-Lösungen.\n• Cost-Efficiency Optimization: Balance zwischen Sicherheitsanforderungen und Kosteneffizienz für nachhaltige Geschäftsmodelle.\n\n💡 ADVISORI's Architecture Excellence:\n• Threat Modeling Integration: Systematische Integration von Bedrohungsmodellierung in den Architekturentwicklungsprozess.\n• Security Testing Frameworks: Entwicklung umfassender Testing-Strategien für kontinuierliche Validierung der Sicherheitsarchitektur.\n• Documentation Excellence: Aufbau vollständiger technischer Dokumentation entsprechend CRA-Anforderungen.\n• Change Management: Professionelle Begleitung bei der Transformation bestehender Produktarchitekturen zu CRA-konformen Designs.\n\n🚀 Innovation durch sichere Architekturen:\n• Edge Security Integration: Spezialisierte Ansätze für Edge Computing und IoT-Umgebungen unter CRA-Bedingungen.\n• AI-Enhanced Security: Integration von KI-gestützten Sicherheitsmechanismen für adaptive und proaktive Bedrohungsabwehr.\n• Blockchain Integration: Nutzung von Blockchain-Technologien für Transparenz und Unveränderlichkeit kritischer Sicherheitsdaten.\n• Quantum-Ready Preparations: Vorbereitung auf Post-Quantum-Kryptographie für langfristige Sicherheit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche Rolle spielt die Lieferantenbewertung und Supply Chain Security bei der CRA CE-Kennzeichnung und wie optimiert ADVISORI diese Prozesse?",
        answer: "Supply Chain Security ist ein kritischer Erfolgsfaktor für CRA-Compliance, da die Sicherheit des Endprodukts maßgeblich von der Integrität aller Lieferkettenkomponenten abhängt. ADVISORI entwickelt ganzheitliche Supply Chain Governance-Strategien, die sowohl Compliance sicherstellen als auch operative Effizienz und Wettbewerbsvorteile schaffen.\n\n🔗 Comprehensive Supply Chain Governance:\n• Vendor Risk Assessment: Systematische Bewertung von Cybersicherheitsrisiken aller Lieferanten und deren Auswirkungen auf die CRA-Konformität.\n• Security Requirements Cascade: Durchgängige Übertragung von CRA-Sicherheitsanforderungen durch die gesamte Lieferkette.\n• Component Traceability: Implementierung lückenloser Rückverfolgbarkeit für alle sicherheitskritischen Komponenten und Software-Module.\n• Supplier Certification Programs: Entwicklung von Zertifizierungsprogrammen für CRA-konforme Lieferanten und Komponenten.\n\n⚡ Operational Excellence in Supply Chain Management:\n• Automated Compliance Monitoring: Einsatz automatisierter Tools für kontinuierliche Überwachung der Lieferanten-Compliance.\n• Risk-based Supplier Segmentation: Strategische Kategorisierung von Lieferanten basierend auf Risikoprofil und kritischen Abhängigkeiten.\n• Incident Response Coordination: Etablierung koordinierter Incident-Response-Prozesse für Supply Chain Security-Vorfälle.\n• Continuous Improvement: Implementierung von Feedback-Schleifen für kontinuierliche Verbesserung der Supply Chain Security.\n\n🎯 ADVISORI's Supply Chain Excellence:\n• Third-Party Risk Management: Aufbau robuster Third-Party-Risk-Management-Frameworks speziell für CRA-Anforderungen.\n• Supplier Development Programs: Proaktive Unterstützung strategischer Lieferanten bei der CRA-Compliance-Entwicklung.\n• Contract Engineering: Entwicklung CRA-spezifischer Vertragsklauseln und Service Level Agreements.\n• Audit und Assessment: Durchführung spezialisierter CRA-Compliance-Audits bei kritischen Lieferanten.\n\n🛡️ Strategic Risk Mitigation:\n• Supply Chain Resilience: Aufbau redundanter Lieferstrukturen für kritische sicherheitsrelevante Komponenten.\n• Geopolitical Risk Management: Bewertung und Mitigation geopolitischer Risiken in globalen Lieferketten.\n• Technology Transfer Security: Sichere Prozesse für Technologietransfer und Know-how-Sharing mit Partnern.\n• Crisis Management: Vorbereitung auf Supply Chain-Krisen und deren Auswirkungen auf CRA-Compliance."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie gestaltet ADVISORI effektive Change Management-Strategien für die organisatorische Transformation zur CRA-Compliance?",
        answer: "Die erfolgreiche CRA-Implementierung erfordert tiefgreifende organisatorische Veränderungen, die über technische Anpassungen hinausgehen. ADVISORI entwickelt ganzheitliche Change Management-Strategien, die kulturelle Transformation, Mitarbeiter-Enablement und organisatorische Resilienz in den Mittelpunkt stellen.\n\n🔄 Holistic Organizational Transformation:\n• Cultural Change Leadership: Entwicklung einer sicherheitszentrierten Unternehmenskultur, die CRA-Compliance als integralen Bestandteil der Geschäftstätigkeit verankert.\n• Cross-functional Integration: Aufbau funktionsübergreifender Teams und Verantwortlichkeiten für nahtlose CRA-Integration in alle Geschäftsprozesse.\n• Leadership Alignment: Sicherstellung einheitlicher Führungsunterstützung und -kommunikation auf allen Organisationsebenen.\n• Behavioral Change Programs: Entwicklung systematischer Programme zur Verhaltensänderung und Compliance-Mindset-Entwicklung.\n\n👥 People-Centric Excellence:\n• Skills Gap Analysis: Umfassende Bewertung bestehender Kompetenzen und Identifikation von Entwicklungsbedarfen für CRA-Compliance.\n• Training und Development: Maßgeschneiderte Schulungsprogramme für verschiedene Rollen und Verantwortungsebenen.\n• Communication Strategy: Entwicklung zielgruppenspezifischer Kommunikationsstrategien für effektive Stakeholder-Einbindung.\n• Incentive Alignment: Integration von CRA-Compliance-Zielen in Performance Management und Anreizsysteme.\n\n🎯 ADVISORI's Change Excellence:\n• Change Readiness Assessment: Systematische Bewertung der organisatorischen Veränderungsbereitschaft und -fähigkeit.\n• Resistance Management: Proaktive Identifikation und Management von Widerständen gegen CRA-bezogene Veränderungen.\n• Quick Wins Strategy: Entwicklung früher Erfolge zur Stärkung der Veränderungsmotivation und des Vertrauens.\n• Sustainable Embedding: Sicherstellung nachhaltiger Verankerung von CRA-Praktiken in organisatorischen Routinen und Systemen.\n\n🚀 Transformation Acceleration:\n• Digital Change Tools: Einsatz digitaler Plattformen und Tools für effiziente Change Communication und Training.\n• Community Building: Aufbau von CRA-Champion-Netzwerken und Communities of Practice.\n• Continuous Feedback: Implementierung kontinuierlicher Feedback-Mechanismen für adaptive Change-Strategien.\n• Success Measurement: Entwicklung von Metriken und KPIs zur Messung des Change-Erfolgs und der organisatorischen Reife."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie adressiert ADVISORI die Herausforderungen der CRA-Compliance für KMU und welche spezifischen Lösungsansätze gibt es für ressourcenbeschränkte Unternehmen?",
        answer: "Kleine und mittlere Unternehmen (KMU) stehen bei der CRA-Compliance vor besonderen Herausforderungen durch begrenzte Ressourcen und Expertise. ADVISORI entwickelt maßgeschneiderte, skalierbare Lösungsansätze, die KMU eine kosteneffiziente und pragmatische CRA-Compliance ermöglichen, ohne ihre Innovationskraft und Wettbewerbsfähigkeit zu beeinträchtigen.\n\n🏢 KMU-spezifische Herausforderungen:\n• Ressourcenbeschränkungen: Begrenzte finanzielle und personelle Ressourcen für umfassende Compliance-Programme.\n• Expertise-Mangel: Fehlende interne Cybersecurity- und Regulatory-Expertise für eigenständige CRA-Implementierung.\n• Komplexitätsüberforderung: Schwierigkeit bei der Navigation komplexer regulatorischer Anforderungen ohne spezialisierte Unterstützung.\n• Competitive Pressure: Notwendigkeit, Compliance-Kosten bei gleichzeitiger Aufrechterhaltung der Wettbewerbsfähigkeit zu optimieren.\n\n💡 ADVISORI's KMU-optimierte Lösungsansätze:\n• Lean Compliance Frameworks: Entwicklung schlanker, auf das Wesentliche konzentrierter Compliance-Ansätze ohne überflüssige Bürokratie.\n• Shared Service Models: Angebot geteilter Compliance-Services für mehrere KMU zur Kostenteilung und Effizienzsteigerung.\n• Template und Toolkits: Bereitstellung standardisierter Templates, Checklisten und Tools für eigenständige Compliance-Aktivitäten.\n• Phased Implementation: Stufenweise Umsetzung mit priorisierten Quick Wins und schrittweiser Komplexitätssteigerung.\n\n🎯 Pragmatic Excellence für KMU:\n• Risk-based Approach: Fokussierung auf die kritischsten Risiken und Compliance-Bereiche für maximale Wirkung bei minimalen Ressourcen.\n• Automation und Digitalisierung: Einsatz kosteneffizienter Automatisierungstools zur Reduzierung manueller Compliance-Aufwände.\n• Partner Ecosystem: Aufbau von Partnernetzwerken für geteilte Compliance-Ressourcen und Kostenoptimierung.\n• Flexible Pricing Models: Angebot flexibler, KMU-gerechter Preismodelle und Pay-as-you-grow-Ansätze.\n\n🚀 Growth Enablement durch Compliance:\n• Competitive Differentiation: Positionierung der CRA-Compliance als Wettbewerbsvorteil gegenüber nicht-konformen Konkurrenten.\n• Market Access: Nutzung der CRA-Konformität als Türöffner für neue Märkte und Kundensegmente.\n• Investment Readiness: CRA-Compliance als Faktor für Investoren-Attraktivität und Skalierungsbereitschaft.\n• Innovation Support: Integration von Compliance-Überlegungen in Innovationsprozesse ohne Innovationsbremse."
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
    console.log('✅ C-Level FAQs batch 4 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
