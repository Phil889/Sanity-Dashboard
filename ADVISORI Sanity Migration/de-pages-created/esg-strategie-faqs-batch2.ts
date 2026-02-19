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
    console.log('Updating ESG-Strategie page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-strategie' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-strategie" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie entwickelt ADVISORI eine ESG-Strategie, die gleichzeitig lokale Märkte adressiert und globale Standards erfüllt – besonders für multinationale Unternehmen?",
        answer: "Multinationale Unternehmen stehen vor der komplexen Aufgabe, lokale ESG-Prioritäten und kulturelle Sensitivitäten mit globalen Standards und Investorenerwartungen in Einklang zu bringen. ADVISORI hat einen 'Glocal' ESG-Ansatz entwickelt, der globale Konsistenz mit lokaler Relevanz verbindet und dabei regulatorische Compliance in verschiedenen Jurisdiktionen sicherstellt.\n\n🌍 Multi-Level ESG-Strategiearchitektur:\n• Global Framework mit lokaler Flexibilität: Entwicklung einer übergeordneten ESG-Vision und -Strategie, die als gemeinsamer Rahmen dient, aber ausreichend Flexibilität für lokale Anpassungen und kulturelle Spezifika bietet.\n• Regional Materiality Assessments: Durchführung regionsspezifischer Wesentlichkeitsanalysen, die lokale Stakeholder-Prioritäten, regulatorische Anforderungen und gesellschaftliche Erwartungen berücksichtigen.\n• Harmonisierte KPI-Frameworks: Etablierung konsistenter globaler Kernkennzahlen ergänzt durch regional relevante zusätzliche Metriken, die lokale Wertschöpfung und Impact messen.\n• Cross-Cultural Stakeholder Engagement: Entwicklung kulturell angepasster Stakeholder-Engagement-Strategien, die lokale Kommunikationsstile und Entscheidungsprozesse respektieren.\n\n🔄 Operative Implementierungsstrategien:\n• Subsidiarity-Prinzip: Anwendung des Subsidiaritätsprinzips, bei dem Entscheidungen und Maßnahmen auf der jeweils angemessensten Ebene (global, regional, lokal) getroffen werden.\n• Center of Excellence Network: Aufbau eines Netzwerks regionaler ESG-Kompetenzzentren, die Best Practices austauschen und lokale Expertise in die globale Strategie einbringen.\n• Adaptive Governance: Implementation flexibler Governance-Strukturen, die sowohl zentrale Steuerung als auch dezentrale Innovation ermöglichen.\n• Technology-Enabled Coordination: Einsatz digitaler Plattformen für nahtlose Koordination, Datenaggregation und Berichterstattung über verschiedene Regionen hinweg."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche Rolle spielt Technologie in ADVISORI's ESG-Transformationsansatz und wie können digitale Tools die Effizienz und Glaubwürdigkeit der ESG-Performance steigern?",
        answer: "Technologie ist der entscheidende Enabler für eine skalierbare, transparent und effiziente ESG-Transformation. ADVISORI nutzt modernste digitale Lösungen, um ESG-Datenmanagement zu automatisieren, Insights zu generieren und die Glaubwürdigkeit der ESG-Performance durch nachvollziehbare, datengetriebene Nachweise zu stärken. Unser Tech-for-ESG-Ansatz transformiert traditionell manuelle und fragmentierte Prozesse in integrierte, intelligente Systeme.\n\n🤖 ESG-Technologie-Stack der nächsten Generation:\n• KI-gestützte Impact Analytics: Einsatz von Machine Learning zur automatischen Identifikation von ESG-Risiken und -Chancen aus großen Datenmengen, Predictive Analytics für Nachhaltigkeitstrends und Szenariomodellierung für Klimarisiken.\n• Blockchain-basierte Nachverfolgung: Implementation von Blockchain-Technologie für vollständige Transparenz in Lieferketten, unveränderliche ESG-Datenaufzeichnung und Smart Contracts für automatisierte Nachhaltigkeitsziele.\n• IoT-Sensor-Netzwerke: Integration von Internet-of-Things-Sensoren für Echtzeit-Monitoring von Umweltdaten (Energie, Wasser, Emissionen) und automatische Datenerfassung ohne manuelle Eingriffe.\n• Digital Twin für Sustainability: Entwicklung digitaler Zwillinge von Geschäftsprozessen zur Simulation verschiedener Nachhaltigkeitsszenarien und Optimierung von ESG-Maßnahmen.\n\n📊 Datenintegration und Intelligence:\n• ESG-Data-Lake-Architektur: Aufbau zentraler Datenrepositorien, die interne und externe ESG-Daten aus verschiedenen Quellen aggregieren und standardisieren.\n• Automated Reporting & Disclosure: Entwicklung automatisierter Berichtssysteme, die regulatorische Anforderungen (CSRD, TCFD, etc.) erfüllen und gleichzeitig Stakeholder-spezifische Reports generieren.\n• Real-time ESG Dashboards: Implementation von Executive Dashboards mit Echtzeit-ESG-KPIs, die sofortige Einblicke in die Nachhaltigkeitsperformance ermöglichen.\n• Stakeholder-Portal-Lösungen: Entwicklung interaktiver Portale für verschiedene Stakeholder-Gruppen (Investoren, Kunden, NGOs) mit personalisierten ESG-Informationen und Engagement-Tools."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie adressiert ADVISORI die wachsende Bedeutung von Supply Chain ESG und hilft Unternehmen bei der Implementierung einer nachhaltigen Lieferkettenstrategie?",
        answer: "Supply Chain ESG ist zu einem kritischen Erfolgsfaktor geworden, da bis zu 80% der ESG-Risiken und -Impacts in den Lieferketten entstehen. ADVISORI entwickelt ganzheitliche Supply Chain ESG-Strategien, die über traditionelle Compliance hinausgehen und partnerschaftliche Ansätze zur gemeinsamen Wertschöpfung fördern. Unser Ansatz transformiert Lieferketten von Risikoquellen zu strategischen ESG-Enablers.\n\n🔗 360° Supply Chain ESG-Transformation:\n• End-to-End Visibility: Aufbau vollständiger Transparenz über alle Ebenen der Lieferkette durch digitale Mapping-Tools, Supplier-Datenbanken und Rückverfolgbarkeitssysteme bis zu Tier-3 und -4 Lieferanten.\n• Risk-Based Supplier Segmentation: Entwicklung risikobasierter Lieferantenkategorisierung nach ESG-Kriterien, geografischen Risiken und Geschäftskritikalität zur Priorisierung von Due-Diligence-Maßnahmen.\n• Collaborative Improvement Programs: Implementation partnerschaftlicher Verbesserungsprogramme mit Schlüssellieferanten, einschließlich Capacity Building, technischer Unterstützung und gemeinsamer Innovationsprojekte.\n• Digital Supply Chain Monitoring: Einsatz von Technologien wie Satellitenüberwachung, IoT-Sensoren und Blockchain zur kontinuierlichen Überwachung von ESG-Performance in der Lieferkette.\n\n🤝 Strategische Lieferantenentwicklung:\n• ESG Supplier Development Centers: Etablierung spezialisierter Zentren zur Entwicklung von Lieferantenkapazitäten in Nachhaltigkeitspraktiken, besonders in Emerging Markets.\n• Incentive-aligned Procurement: Neugestaltung von Beschaffungsstrategien mit ESG-basierten Incentives, nachhaltigen Finanzierungsoptionen und langfristigen Partnerschaftsmodellen.\n• Innovation Ecosystems: Aufbau von Innovationsökosystemen mit Lieferanten zur gemeinsamen Entwicklung nachhaltiger Produkte, Technologien und Geschäftsmodelle.\n• Circular Economy Integration: Implementation von Kreislaufwirtschaftsprinzipien in Lieferketten durch Design for Circularity, Take-back-Programme und Material Recovery Systems."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie unterstützt ADVISORI Unternehmen dabei, ESG-Excellence in einen nachhaltigen Wettbewerbsvorteil zu übersetzen und neue Geschäftschancen zu erschließen?",
        answer: "ESG-Excellence wird nur dann zum nachhaltigen Wettbewerbsvorteil, wenn sie systematisch in Geschäftsstrategie, Innovationsprozesse und Marktpositionierung integriert wird. ADVISORI entwickelt ESG-to-Growth-Strategien, die Nachhaltigkeitsführerschaft in messbare Geschäftsvorteile, neue Märkte und innovative Wertversprechen übersetzen. Unser Ansatz macht ESG zum strategischen Differenzierungsfaktor.\n\n🎯 ESG-Driven Business Innovation:\n• Sustainable Value Proposition Design: Entwicklung einzigartiger Wertversprechen, die ESG-Performance in konkrete Kundenvorteile übersetzen und Premium-Positioning ermöglichen.\n• ESG-Innovation-Pipeline: Aufbau systematischer Innovationsprozesse, die ESG-Herausforderungen als Grundlage für neue Produkte, Services und Geschäftsmodelle nutzen.\n• Green Market Entry Strategies: Identifikation und Erschließung neuer Marktsegmente, die durch Nachhaltigkeitstrends entstehen (CleanTech, Circular Economy, Impact Investing).\n• Sustainability-as-a-Service Models: Entwicklung servicebasierter Geschäftsmodelle, die ESG-Expertise und -Lösungen als eigenständige Wertschöpfungsquelle monetarisieren.\n\n🚀 Marktführerschaft durch ESG-Differentierung:\n• First-Mover-Advantage-Strategien: Proaktive Positionierung in aufkommenden nachhaltigen Märkten vor Wettbewerbern zur Etablierung von Marktführerschaft.\n• ESG-Brand-Building: Aufbau starker, authentischer Nachhaltigkeitsmarken, die emotionale Verbindungen zu bewussten Konsumenten und B2B-Kunden schaffen.\n• Partnership Ecosystem Development: Aufbau strategischer Allianzen mit ESG-fokussierten Partnern zur Erschließung neuer Vertriebskanäle und Kundengruppen.\n• Thought Leadership Positioning: Etablierung als ESG-Thought-Leader in der Branche durch Content Marketing, Brancheninitiativen und Standardsetzung."
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
    console.log('✅ C-Level FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
