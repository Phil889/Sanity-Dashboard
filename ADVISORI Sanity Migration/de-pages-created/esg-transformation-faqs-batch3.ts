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
    console.log('Updating ESG Transformation page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-transformation' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-transformation" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie entwickelt ADVISORI eine ESG-Governance-Struktur, die sowohl Compliance sicherstellt als auch strategische Flexibilität für unser Wachstum ermöglicht?",
        answer: "Eine effektive ESG-Governance-Struktur muss sowohl rigorose Compliance-Standards erfüllen als auch die strategische Agilität für Geschäftswachstum und Innovation bewahren. ADVISORI entwickelt maßgeschneiderte Governance-Frameworks, die diese Balance optimieren und der C-Suite die notwendigen Tools für effektive ESG-Steuerung bereitstellen.\n\n🏛️ Fundamentale Governance-Prinzipien:\n• Board-Level ESG Integration: Etablierung von ESG-Expertise auf Vorstandsebene durch gezielte Besetzung oder Weiterbildung\n• Clear Accountability Structures: Definition klarer Rollen und Verantwortlichkeiten für ESG-Performance auf allen Managementebenen\n• Risk-Opportunity Balance: Entwicklung von Governance-Mechanismen, die sowohl ESG-Risiken managen als auch Chancen proaktiv nutzen\n• Stakeholder Integration: Systematische Einbindung von Stakeholder-Perspektiven in Entscheidungsprozesse\n\n⚖️ Balance zwischen Compliance und Flexibilität:\n• Principles-based Approach: Entwicklung grundlegender ESG-Prinzipien, die Orientierung geben, ohne operative Flexibilität einzuschränken\n• Adaptive Frameworks: Gestaltung von Governance-Strukturen, die sich an verändernde regulatorische und Marktanforderungen anpassen können\n• Innovation-friendly Compliance: Schaffung von Governance-Prozessen, die ESG-Innovation fördern, anstatt sie zu behindern\n• Continuous Learning Integration: Etablierung von Mechanismen für kontinuierliches Lernen und Anpassung der Governance-Praktiken\n\n🎯 ADVISORI's Governance-Design-Ansatz:\n• Customized Committee Structures: Entwicklung maßgeschneiderter ESG-Ausschuss-Strukturen, die zu Ihrer Organisationskultur und -größe passen\n• Performance Management Integration: Verknüpfung von ESG-Zielen mit Executive Compensation und Performance Reviews\n• Decision-Making Frameworks: Implementierung strukturierter Entscheidungsprozesse für ESG-relevante Geschäftsentscheidungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche Technologien und digitalen Lösungen empfiehlt ADVISORI für die Automatisierung und Optimierung unserer ESG-Datenerfassung und -berichterstattung?",
        answer: "Die Digitalisierung von ESG-Prozessen ist entscheidend für Effizienz, Genauigkeit und Skalierbarkeit der Nachhaltigkeitsberichterstattung. ADVISORI unterstützt Unternehmen bei der Auswahl und Implementierung fortschrittlicher Technologielösungen, die ESG-Datenmanagement von einem manuellen Aufwand zu einem automatisierten, strategischen Asset transformieren.\n\n🔧 Technologie-Stack für ESG-Excellence:\n• IoT und Sensor-Integration: Echtzeit-Datenerfassung für Energie-, Wasser- und Materialverbrauch sowie Emissionsmessungen\n• AI-powered Analytics: Maschinelles Lernen für Predictive Analytics, Anomalieerkennung und Trend-Identifikation in ESG-Daten\n• Blockchain für Transparency: Unveränderliche Aufzeichnung von ESG-Daten für erhöhte Glaubwürdigkeit und Nachverfolgbarkeit\n• Cloud-basierte ESG-Plattformen: Skalierbare, integrierte Lösungen für Datensammlung, -analyse und -berichterstattung\n\n📊 Data Management und Reporting-Optimierung:\n• Automated Data Collection: Reduktion manueller Eingaben um bis zu 80% durch intelligente Datenintegration\n• Real-time Dashboards: C-Level-Dashboards für kontinuierliche ESG-Performance-Überwachung\n• Regulatory Reporting Automation: Automatisierte Generierung von Compliance-Berichten für verschiedene regulatorische Anforderungen\n• Stakeholder Communication Tools: Digitale Plattformen für transparente und regelmäßige ESG-Kommunikation mit Stakeholdern\n\n🚀 ADVISORI's Technology Integration-Strategie:\n• Assessment und Roadmap: Bewertung bestehender IT-Infrastruktur und Entwicklung einer ESG-Technologie-Roadmap\n• Vendor Selection Support: Unterstützung bei der Auswahl geeigneter ESG-Technologie-Anbieter und -Lösungen\n• Integration und Change Management: Begleitung bei der technischen Integration und organisatorischen Anpassung\n• Training und Capability Building: Befähigung Ihrer Teams zur optimalen Nutzung neuer ESG-Technologien"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie unterstützt ADVISORI bei der Entwicklung einer ESG-Kommunikationsstrategie, die sowohl interne Stakeholder als auch externe Investoren und Kunden überzeugt?",
        answer: "Eine authentische und wirkungsvolle ESG-Kommunikationsstrategie ist entscheidend für den Aufbau von Vertrauen und die Maximierung des Werts Ihrer Nachhaltigkeitsbemühungen. ADVISORI entwickelt integrierte Kommunikationsansätze, die verschiedene Stakeholder-Gruppen gezielt ansprechen und dabei Authentizität mit strategischem Impact verbinden.\n\n📢 Multi-Stakeholder-Kommunikationsframework:\n• Investor Relations Excellence: Entwicklung ESG-fokussierter IR-Strategien, die institutionelle Investoren und ESG-Analysten überzeugen\n• Customer Engagement: Authentische Kommunikation nachhaltiger Wertversprechen, die Kundenloyalität und Premium-Pricing unterstützen\n• Employee Advocacy: Interne Kommunikationsstrategien, die Mitarbeiter zu ESG-Botschaftern machen\n• Media und Public Relations: Strategische Positionierung als ESG-Leader durch gezielte Medienarbeit und Thought Leadership\n\n🎯 Content-Strategie für verschiedene Zielgruppen:\n• Data-driven Narratives: Entwicklung überzeugender ESG-Geschichten, die durch solide Daten und Metriken unterstützt werden\n• Visual Storytelling: Nutzung von Infografiken, Videos und interaktiven Inhalten für emotionale Verbindung\n• Progress Transparency: Ehrliche Kommunikation sowohl von Erfolgen als auch von Herausforderungen und Lernprozessen\n• Future Vision Articulation: Klare Darstellung Ihrer ESG-Vision und strategischen Ziele\n\n📱 Channel-Mix und Delivery-Optimierung:\n• Digital Platform Strategy: Optimierung von Website, Social Media und digitalen Plattformen für ESG-Kommunikation\n• Traditional Media Integration: Strategische Nutzung von Print, Broadcast und anderen traditionellen Medien\n• Direct Stakeholder Engagement: Persönliche Kommunikationsformate wie Investor Days, Kundenforen und Mitarbeiterversammlungen\n• Third-party Validation: Nutzung von Awards, Zertifizierungen und Expertenmeinungen zur Glaubwürdigkeitssteigerung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie hilft ADVISORI dabei, ESG-Risiken in unserem Supply Chain Management zu identifizieren und zu mitigieren, während wir gleichzeitig Kosten kontrollieren?",
        answer: "Supply Chain ESG-Risiken können erhebliche finanzielle und reputational Auswirkungen haben, während gleichzeitig Kostendruck besteht. ADVISORI entwickelt intelligente Supply Chain-Strategien, die ESG-Compliance mit Kosteneffizienz verbinden und dabei sowohl Risiken minimieren als auch Wertschöpfungschancen schaffen.\n\n🔍 Comprehensive Risk Assessment-Framework:\n• Multi-tier Supplier Mapping: Systematische Erfassung und Bewertung von ESG-Risiken über alle Lieferkettenstufen hinweg\n• ESG Risk Scoring: Entwicklung proprietärer Bewertungssysteme für die Priorisierung von Lieferanten nach ESG-Risikolevels\n• Geographic und Sector Risk Analysis: Bewertung länder- und branchenspezifischer ESG-Risiken für strategische Sourcing-Entscheidungen\n• Continuous Monitoring Systems: Implementierung von Überwachungssystemen für frühzeitige Erkennung sich entwickelnder Risiken\n\n💰 Cost-effective Mitigation Strategies:\n• Collaborative Improvement Programs: Partnerschaftliche Ansätze mit Lieferanten zur gemeinsamen ESG-Verbesserung statt kostspieliger Lieferantenwechsel\n• Technology-enabled Solutions: Nutzung digitaler Tools für effiziente Due Diligence und Monitoring\n• Risk-based Prioritization: Fokussierung von Ressourcen auf die kritischsten Lieferanten und Risikobereiche\n• Industry Collaboration: Teilnahme an Brancheninitiativen für geteilte Kosten bei Supply Chain-Verbesserungen\n\n🚀 Value Creation through ESG Supply Chain Excellence:\n• Innovation Partnerships: Zusammenarbeit mit Lieferanten bei der Entwicklung nachhaltiger Lösungen und Produkte\n• Efficiency Gains: Identifikation von Kosteneinsparungen durch nachhaltigere Praktiken (Energie, Abfall, Transport)\n• Market Differentiation: Aufbau von Supply Chain-Transparenz als Wettbewerbsvorteil\n• Long-term Partnerships: Entwicklung strategischer Lieferantenbeziehungen, die sowohl ESG-Ziele als auch Kostenoptimierung unterstützen"
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
