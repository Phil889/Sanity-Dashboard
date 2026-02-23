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
    console.log('Updating KRITIS Notfallkonzepte & Ressourcenplanung page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'kritis-notfallkonzepte-ressourcenplanung' })
    
    if (!existingDoc) {
      throw new Error('Document "kritis-notfallkonzepte-ressourcenplanung" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie integriert ADVISORI Nachhaltigkeits- und ESG-Kriterien in KRITIS-Notfallkonzepte und welchen strategischen Mehrwert bietet dies für die Unternehmensreputation und Stakeholder-Beziehungen?",
        answer: "In einer Zeit, in der ESG-Kriterien (Environmental, Social, Governance) zunehmend in den Fokus von Investoren, Regulatoren und der Gesellschaft rücken, müssen auch Notfallkonzepte kritischer Infrastrukturen diese Dimensionen berücksichtigen. ADVISORI entwickelt nachhaltigkeitsorientierte Notfallkonzepte, die nicht nur operative Resilienz gewährleisten, sondern auch den gesellschaftlichen und ökologischen Fußabdruck von Krisenereignissen minimieren. Für die C-Suite bedeutet dies eine Stärkung der Markenreputation und eine proaktive Positionierung als verantwortungsvoller Infrastrukturbetreiber.\n\n🌱 ESG-Integration in Notfallplanung:\n• Environmental Impact Minimization: Entwicklung von Notfallreaktionen, die Umweltschäden durch Sekundäreffekte minimieren und nachhaltige Wiederherstellungsansätze priorisieren.\n• Social Responsibility in Crisis: Sicherstellung, dass Notfallmaßnahmen vulnerable Bevölkerungsgruppen besonders berücksichtigen und soziale Gerechtigkeit auch in Krisensituationen wahren.\n• Governance Excellence: Transparente, ethische Entscheidungsprozesse in Notfällen, die auch unter Druck den höchsten Standards entsprechen.\n• Stakeholder-inklusive Notfallplanung: Berücksichtigung der Bedürfnisse und Erwartungen aller Stakeholder-Gruppen in der Krisenreaktion.\n\n🎯 Strategische Vorteile nachhaltiger Notfallkonzepte:\n• Reputational Resilience: Schutz und Stärkung der Unternehmensreputation auch in Krisenzeiten durch demonstrierte Verantwortung.\n• Investor Confidence: Erfüllung der wachsenden ESG-Erwartungen institutioneller Investoren und Kapitalgeber.\n• Regulatory Anticipation: Proaktive Vorbereitung auf künftige ESG-regulatorische Anforderungen im KRITIS-Bereich.\n• Social License to Operate: Stärkung der gesellschaftlichen Akzeptanz durch verantwortungsvolle Krisenführung.\n\n📊 ADVISORI's ESG-Notfallkonzept-Framework:\n• Sustainability Impact Assessment: Systematische Bewertung der Nachhaltigkeitsauswirkungen verschiedener Notfallmaßnahmen.\n• Circular Economy in Crisis Recovery: Integration von Kreislaufwirtschaftsprinzipien in Wiederherstellungs- und Beschaffungsprozesse.\n• Community-Centric Crisis Communication: Aufbau von Vertrauen durch transparente, empathische Krisenkommunikation.\n• ESG-Performance-Tracking: Messung und Berichterstattung über ESG-Leistung auch in Notfallsituationen.\n\n💡 Langfristige Wertschöpfung:\n• Brand Differentiation: Positionierung als ESG-Leader im kritischen Infrastrukturbereich.\n• Talent Attraction: Anziehung und Bindung von Talenten durch demonstrierte Werte-Orientierung.\n• Partnerships und Allianzen: Aufbau strategischer Partnerschaften mit anderen nachhaltigkeitsorientierten Organisationen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche Rolle spielen internationale Kooperationen und grenzüberschreitende Notfallpläne in ADVISORI's Strategien für global operierende kritische Infrastrukturen?",
        answer: "Kritische Infrastrukturen operieren zunehmend in vernetzten, grenzüberschreitenden Systemen, in denen lokale Störungen globale Auswirkungen haben können. ADVISORI entwickelt internationale Kooperationsstrategien und harmonisierte Notfallkonzepte, die es ermöglichen, von transnationaler Resilienz zu profitieren und gleichzeitig zur globalen Stabilitätssicherung beizutragen. Für multinationale Konzerne und international vernetzte Infrastrukturbetreiber bedeutet dies operationale Effizienz und strategische Positionierung als Global Player.\n\n🌐 Transnationale Resilienz-Architekturen:\n• Cross-Border Resource Sharing: Entwicklung von Mechanismen für den Austausch kritischer Ressourcen zwischen Ländern und Organisationen in Notfällen.\n• Harmonisierte Notfall-Protokolle: Standardisierung von Kommunikations- und Koordinationsprozessen für effektive internationale Zusammenarbeit.\n• Multi-Jurisdictional Compliance: Navigation komplexer regulatorischer Landschaften verschiedener Länder in kohärenter Notfallplanung.\n• Cultural Intelligence in Crisis: Berücksichtigung kultureller Unterschiede und lokaler Besonderheiten in internationalen Notfallkonzepten.\n\n🤝 ADVISORI's Global Cooperation Framework:\n• International Stakeholder Mapping: Identifikation und Einbindung relevanter internationaler Partner, Behörden und Organisationen.\n• Diplomatic Crisis Management: Integration diplomatischer Kanäle in Notfallkoordination für maximale Effektivität.\n• Best Practice Exchange: Kontinuierlicher Wissensaustausch mit internationalen Partnern und Benchmarking gegen globale Standards.\n• Crisis Communication Protocols: Mehrsprachige, kulturell sensible Kommunikationsstrategien für internationale Krisen.\n\n🔄 Operative Exzellenz durch internationale Integration:\n• Redundancy through Diversity: Nutzung geografischer und systemischer Diversität zur Erhöhung der Gesamtresilienz.\n• Economies of Scale: Kosteneinsparungen durch geteilte Ressourcen und koordinierte Beschaffung mit internationalen Partnern.\n• Rapid Response Networks: Aufbau schneller Reaktionskapazitäten durch internationale Kooperationen.\n• Global Intelligence Sharing: Zugang zu internationalem Threat Intelligence und Early Warning Systemen.\n\n💼 Strategische Positionierung und Wettbewerbsvorteile:\n• Global Leadership Positioning: Etablierung als Thought Leader im Bereich internationaler Infrastruktur-Resilienz.\n• Market Access: Erleichterung des Marktzugangs in neuen Ländern durch demonstrierte Kooperationsfähigkeit.\n• Risk Diversification: Verteilung von Risiken über verschiedene geografische und politische Räume.\n• Innovative Solutions: Zugang zu innovativen Lösungsansätzen aus verschiedenen internationalen Kontexten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie adressiert ADVISORI die spezifischen Herausforderungen der Cybersecurity in KRITIS-Notfallkonzepten und welche neuen Bedrohungsvektoren erfordern besondere strategische Aufmerksamkeit?",
        answer: "Die Digitalisierung kritischer Infrastrukturen hat neue Verwundbarkeiten geschaffen, die traditionelle physische Notfallkonzepte ergänzen müssen. ADVISORI integriert umfassende Cybersecurity-Dimensionen in Notfallplanungen, die sowohl präventive als auch reaktive Maßnahmen gegen sophistizierte Cyber-Bedrohungen umfassen. Für die C-Suite bedeutet dies, dass Cyber-Resilienz nicht nur IT-Thema ist, sondern strategische Kernkompetenz für die Aufrechterhaltung kritischer Infrastrukturen.\n\n🔐 Cyber-Physical-System-Notfallplanung:\n• OT/IT-Konvergenz-Risiken: Berücksichtigung der zunehmenden Verflechtung zwischen Operational Technology und IT-Systemen in der Notfallplanung.\n• Supply Chain Cyber Attacks: Schutz vor Angriffen, die über kompromittierte Lieferanten und Dienstleister erfolgen.\n• AI-powered Threat Response: Einsatz künstlicher Intelligenz zur Erkennung und Abwehr von Advanced Persistent Threats (APTs).\n• Zero-Trust-Notfallarchitekturen: Implementation von Zero-Trust-Prinzipien auch in Notfall- und Wiederherstellungsszenarien.\n\n⚡ Emerging Threat Vectors und strategische Reaktionen:\n• Quantum Computing Threats: Vorbereitung auf die Bedrohung aktueller Verschlüsselungsverfahren durch Quantencomputer.\n• IoT-Ecosystem-Attacks: Schutz vor großflächigen Angriffen auf vernetzte IoT-Geräte in kritischen Infrastrukturen.\n• Deepfake und Social Engineering: Abwehr sophistizierter Manipulationstechniken, die Notfallreaktionen stören können.\n• State-Sponsored Cyber Warfare: Vorbereitung auf koordinierte, staatlich unterstützte Angriffe auf kritische Infrastrukturen.\n\n🛡️ ADVISORI's Cyber-Resilienz-Integration:\n• Hybrid Threat Response: Koordinierte Reaktion auf Angriffe, die sowohl cyber als auch physische Komponenten umfassen.\n• Incident Response Automation: Automatisierte Cyber-Incident-Response-Systeme, die Minuten-schnelle Reaktionen ermöglichen.\n• Threat Intelligence Integration: Einbindung aktueller Cyber-Threat-Intelligence in die kontinuierliche Notfallplanungsanpassung.\n• Recovery Verification: Sicherstellung der Integrität wiederhergestellter Systeme nach Cyber-Vorfällen.\n\n🎯 Strategische Cyber-Notfall-Governance:\n• Board-Level Cyber Crisis Management: Befähigung der Geschäftsleitung für effektive Entscheidungsfindung bei Cyber-Krisen.\n• Legal und Regulatory Response: Navigation komplexer rechtlicher Anforderungen bei Cyber-Vorfällen (DSGVO, NIS2, etc.).\n• Reputation Management: Schutz der Unternehmensreputation durch professionelle Cyber-Krisenkommunikation.\n• Insurance und Risk Transfer: Optimale Gestaltung von Cyber-Versicherungen und Risk-Transfer-Mechanismen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie gewährleistet ADVISORI, dass Notfallkonzepte auch bei langanhaltenden, systemischen Krisen (Pandemien, Klimawandel, geopolitische Instabilität) ihre Wirksamkeit behalten?",
        answer: "Moderne Krisen wie die COVID-19-Pandemie haben gezeigt, dass traditionelle Notfallkonzepte, die auf kurzzeitige, lokale Störungen ausgelegt sind, bei systemischen, langanhaltenden Krisen an ihre Grenzen stoßen. ADVISORI entwickelt adaptive, systemresiliente Notfallkonzepte, die auch bei fundamentalen Veränderungen des operativen Umfelds funktionsfähig bleiben. Für die C-Suite bedeutet dies langfristige Planungssicherheit auch in einer zunehmend volatilen und unvorhersagbaren Welt.\n\n🌊 Systemische Krisenresilienz:\n• Multi-Horizon-Planung: Entwicklung von Notfallkonzepten für verschiedene Zeiträume (Stunden, Tage, Monate, Jahre).\n• Adaptive Capacity Building: Aufbau von Anpassungsfähigkeiten, die es ermöglichen, auf unvorhersehbare Veränderungen zu reagieren.\n• System-Level Dependencies: Analyse und Vorbereitung auf Ausfälle ganzer Systeme oder gesellschaftlicher Strukturen.\n• Cascading Crisis Management: Bewältigung von Krisen, die sich über verschiedene Sektoren und Zeiträume ausbreiten.\n\n🔄 Evolutionäre Notfallkonzept-Architektur:\n• Dynamic Scenario Updates: Kontinuierliche Anpassung der Notfallszenarien basierend auf sich entwickelnden systemischen Risiken.\n• Flexible Resource Allocation: Modulare Ressourcenverteilungssysteme, die sich an veränderte Prioritäten anpassen können.\n• Organizational Learning Systems: Mechanismen zum systematischen Lernen aus langanhaltenden Krisen für zukünftige Vorsorge.\n• Antifragility Design: Entwicklung von Systemen, die durch Stress und Krisen stärker werden.\n\n⚡ ADVISORI's Systemresilience-Framework:\n• Weak Signal Detection: Frühwarnsysteme für die Erkennung systemischer Risiken vor ihrer vollständigen Manifestation.\n• Scenario Stress-Testing: Regelmäßige Tests der Notfallkonzepte gegen extreme, langanhaltende Stressszenarien.\n• Metamorphosis Planning: Vorbereitung auf fundamentale Veränderungen der Geschäftsmodelle und Betriebsweisen.\n• Collective Intelligence: Aufbau von Netzwerken und Partnerschaften für kollektive Problemlösung bei systemischen Krisen.\n\n💡 Strategische Transformation durch Krisenresilienz:\n• Future-Proofing: Entwicklung von Geschäftsmodellen und Betriebsweisen, die auch bei fundamentalen Umweltveränderungen funktionieren.\n• Innovation through Crisis: Nutzung von Krisen als Katalysatoren für Innovation und strategische Neuausrichtung.\n• Stakeholder Loyalty: Aufbau von Vertrauen und Loyalität durch demonstrierte Fähigkeit zur Bewältigung extremer Herausforderungen.\n• Market Leadership: Positionierung als Resilienz-Leader in einer von systemischen Risiken geprägten Welt."
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
