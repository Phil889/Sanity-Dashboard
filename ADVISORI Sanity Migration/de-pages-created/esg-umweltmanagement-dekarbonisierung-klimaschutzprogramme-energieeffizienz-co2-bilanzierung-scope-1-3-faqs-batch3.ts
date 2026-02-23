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
    console.log('Updating ESG Umweltmanagement page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-umweltmanagement-dekarbonisierung-klimaschutzprogramme-energieeffizienz-co2-bilanzierung-scope-1-3' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-umweltmanagement-dekarbonisierung-klimaschutzprogramme-energieeffizienz-co2-bilanzierung-scope-1-3" not found')
    }
    
    // Create new C-Level FAQs in German for ESG Environmental Management
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Klimarisiken werden zu finanziellen Risiken. Wie hilft ADVISORI dabei, physische und transitorische Klimarisiken zu quantifizieren und in unsere Risikomanagement-Strategie zu integrieren?",
        answer: "Klimarisiken sind längst keine abstrakte Zukunftsbedrohung mehr, sondern manifeste finanzielle Risiken, die Unternehmenswerte, Cashflows und strategische Optionen beeinträchtigen können. Für die C-Suite ist es entscheidend, diese Risiken systematisch zu erfassen, zu quantifizieren und in die Unternehmenssteuerung zu integrieren. ADVISORI entwickelt robuste Klimarisiko-Frameworks, die sowohl regulatorische Anforderungen erfüllen als auch strategische Entscheidungsfindung unterstützen.\n\n🌡️ Physische Klimarisiken: Akute und chronische Bedrohungen:\n• Extreme Wetterereignisse-Modellierung: Quantifizierung der Auswirkungen von Hurrikans, Überschwemmungen, Hitzewellen und Dürren auf Betriebsstätten, Lieferketten und Infrastruktur.\n• Langfristige Klimaveränderungen: Bewertung chronischer Risiken wie Meeresspiegelanstieg, Temperaturveränderungen und veränderte Niederschlagsmuster auf Geschäftstätigkeiten.\n• Supply Chain Vulnerability Assessment: Analyse der Klimarisiken in globalen Lieferketten einschließlich Rohstoffverfügbarkeit, Transportrouten und Produktionsstandorte.\n• Business Continuity Planning: Integration von Klimarisiken in Notfallpläne und Entwicklung von Resilienz-Strategien für kritische Geschäftsprozesse.\n\n⚡ Transitorische Risiken: Politische, technologische und Marktveränderungen:\n• Carbon Pricing Impact: Modellierung der finanziellen Auswirkungen steigender CO2-Preise auf Betriebskosten, Investitionsentscheidungen und Wettbewerbsfähigkeit.\n• Regulatorische Entwicklungen: Antizipation neuer Klimavorschriften und deren Auswirkungen auf Compliance-Kosten, Geschäftsmodelle und Marktchancen.\n• Technology Disruption: Bewertung der Risiken und Chancen durch schnelle technologische Veränderungen in der Energie- und Mobilitätswende.\n• Reputationsrisiken: Quantifizierung der Auswirkungen von ESG-Performance auf Markenwahrnehmung, Kundenloyalität und Stakeholder-Vertrauen.\n\n🎯 Integration in Risikomanagement und Unternehmenssteuerung:\n• Szenario-basierte Stresstests: Entwicklung von Klimaszenarien für verschiedene Zeithorizonte zur Bewertung der Unternehmensresilienz unter verschiedenen Klimapfaden.\n• Value-at-Risk Modelle: Quantifizierung potenzieller finanzieller Verluste durch Klimarisiken zur Integration in bestehende Risikomanagement-Systeme.\n• Strategic Planning Integration: Einbettung von Klimarisiken in strategische Planungsprozesse, Investitionsbewertungen und Geschäftsmodell-Entwicklung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Die Mitarbeiter sind der Schlüssel für eine erfolgreiche Umwelttransformation. Wie entwickelt ADVISORI Engagement-Programme, die sowohl Bewusstsein schaffen als auch konkrete Verhaltensänderungen bewirken?",
        answer: "Die erfolgreichste Umweltstrategie bleibt wirkungslos ohne die aktive Beteiligung der Mitarbeiter. Für die C-Suite ist es entscheidend, dass Nachhaltigkeitsinitiativen nicht nur top-down kommuniziert, sondern auch bottom-up gelebt werden. ADVISORI entwickelt ganzheitliche Employee Engagement-Programme, die Nachhaltigkeitsbewusstsein schaffen, intrinsische Motivation fördern und konkrete Verhaltensänderungen bewirken.\n\n🧠 Bewusstseinsbildung und Kompetenzentwicklung:\n• Sustainability Literacy Programme: Entwicklung maßgeschneiderter Schulungsprogramme, die komplexe Umweltthemen verständlich vermitteln und die Relevanz für individuelle Arbeitsbereiche aufzeigen.\n• Green Champions Network: Aufbau von Netzwerken engagierter Mitarbeiter als Multiplikatoren und Change Agents für Nachhaltigkeitsinitiativen in allen Unternehmensbereichen.\n• Gamification und digitale Tools: Einsatz spielerischer Elemente und digitaler Plattformen zur Motivation und zum Tracking von nachhaltigen Verhaltensweisen.\n• Leadership Development: Befähigung von Führungskräften, Nachhaltigkeit authentisch zu verkörpern und ihre Teams zu inspirieren.\n\n🎯 Verhaltensänderung durch Design und Incentives:\n• Behavioral Nudging: Implementation subtiler Verhaltensanreize in der Arbeitsumgebung zur Förderung nachhaltiger Entscheidungen ohne Zwang.\n• Green Benefits und Recognition: Entwicklung von Anreizsystemen, die nachhaltiges Verhalten belohnen und in Leistungsbewertungen integrieren.\n• Workplace Environment Design: Gestaltung der Arbeitsumgebung zur Förderung nachhaltiger Praktiken durch intelligente Infrastruktur und intuitive Systeme.\n• Personal Carbon Budgets: Pilotierung individueller CO2-Budgets für geschäftsrelevante Aktivitäten zur Schaffung persönlicher Verantwortung.\n\n🚀 Innovation und Ideenmanagement:\n• Green Innovation Challenges: Organisation von Ideenwettbewerben zur Förderung von Mitarbeiterinnovationen im Bereich Nachhaltigkeit.\n• Cross-functional Sustainability Teams: Bildung bereichsübergreifender Teams zur Entwicklung und Implementierung von Umweltinitiativen.\n• Continuous Improvement Culture: Etablierung einer Kultur der kontinuierlichen Verbesserung mit Fokus auf Ressourceneffizienz und Emissionsreduktion."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Biodiversität wird als das 'neue Klima' bezeichnet. Wie integriert ADVISORI Biodiversitäts- und Naturkapital-Aspekte in unsere ESG-Umweltstrategie für ganzheitliche Nachhaltigkeit?",
        answer: "Biodiversität und Naturkapital gewinnen als 'Twin Crisis' neben dem Klimawandel an kritischer Bedeutung für Unternehmen. Für die C-Suite bedeutet dies, dass eine ganzheitliche ESG-Strategie beide Herausforderungen integriert adressieren muss. ADVISORI entwickelt innovative Ansätze zur Verbindung von Klima- und Biodiversitätszielen, die sowohl ökologische Wirkung maximieren als auch Business Value schaffen.\n\n🌿 Naturkapital-Assessment und -bewertung:\n• Ecosystem Services Valuation: Quantifizierung der Ökosystemdienstleistungen, die Ihr Unternehmen nutzt oder beeinflusst, zur Schaffung von Transparenz über Naturabhängigkeiten.\n• Biodiversity Footprint Analysis: Bewertung der Auswirkungen Ihrer Geschäftstätigkeiten auf Biodiversität entlang der gesamten Wertschöpfungskette.\n• Natural Capital Accounting: Implementierung von Bilanzierungsmethoden für Naturkapital zur Integration in finanzielle Entscheidungsprozesse.\n• TNFD-Readiness: Vorbereitung auf die Taskforce on Nature-related Financial Disclosures zur Berichterstattung über naturbezogene Risiken und Chancen.\n\n🔄 Integrierte Klima-Biodiversitäts-Strategien:\n• Nature-based Solutions (NbS): Entwicklung naturbasierter Lösungen, die gleichzeitig CO2-Speicherung, Biodiversitätsschutz und Geschäftswert schaffen.\n• Regenerative Business Models: Transformation zu regenerativen Geschäftsmodellen, die Ökosysteme wiederherstellen statt nur zu erhalten.\n• Supply Chain Biodiversity Management: Integration von Biodiversitätskriterien in Lieferantenbewertung und Beschaffungsentscheidungen.\n• Land Use Optimization: Optimierung der Landnutzung an Unternehmensstandorten zur Förderung von Biodiversität und Kohlenstoffspeicherung.\n\n💼 Business Value durch Naturkapital-Integration:\n• Risk Mitigation: Reduktion von Geschäftsrisiken durch Abhängigkeiten von Ökosystemdienstleistungen und Rohstoffverfügbarkeit.\n• Innovation Opportunities: Entwicklung neuer Produkte und Dienstleistungen basierend auf Biomimicry und nachhaltiger Ressourcennutzung.\n• Stakeholder Differentiation: Positionierung als Vorreiter für ganzheitliche Nachhaltigkeit zur Stärkung der Marktposition.\n• Future-proofing: Vorbereitung auf künftige Naturkapital-Regulierung und veränderte Investoren-Erwartungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Digitalisierung kann unsere Umweltziele unterstützen, aber auch neue Herausforderungen schaffen. Wie nutzt ADVISORI digitale Technologien optimal für ESG-Umweltmanagement bei gleichzeitiger Minimierung des digitalen Carbon Footprints?",
        answer: "Die Digitalisierung bietet enormes Potenzial für die Optimierung von ESG-Umweltmanagement, birgt aber gleichzeitig das Risiko eines wachsenden digitalen Carbon Footprints. Für die C-Suite ist es entscheidend, digitale Technologien strategisch zu nutzen, um Nachhaltigkeit zu fördern, während der eigene digitale Fußabdruck minimiert wird. ADVISORI entwickelt 'Green Digital'-Strategien, die technologische Innovation mit Umweltverantwortung verbinden.\n\n💡 Digital-enabled ESG-Optimierung:\n• AI-powered Sustainability Analytics: Einsatz von Künstlicher Intelligenz für präzise CO2-Bilanzierung, Vorhersage von Umweltauswirkungen und Optimierung von Nachhaltigkeitsmaßnahmen.\n• IoT-basiertes Umweltmonitoring: Implementation von Internet-of-Things-Sensoren für Echtzeit-Überwachung von Energieverbrauch, Wassernutzung und Emissionen.\n• Digital Twin für Nachhaltigkeitsplanung: Entwicklung digitaler Zwillinge von Produktionsprozessen und Anlagen zur Simulation und Optimierung von Umweltauswirkungen.\n• Blockchain für Supply Chain Transparency: Nutzung von Blockchain-Technologie für transparente und nachverfolgbare Nachhaltigkeitsdaten entlang der Lieferkette.\n\n🌐 Green IT und Digital Carbon Management:\n• Sustainable IT Infrastructure: Optimierung von Rechenzentren und IT-Infrastruktur für maximale Energieeffizienz und Nutzung erneuerbarer Energien.\n• Cloud Carbon Optimization: Strategische Auswahl und Konfiguration von Cloud-Services zur Minimierung des Carbon Footprints digitaler Infrastrukturen.\n• Software Efficiency: Entwicklung energieeffizienter Software und Anwendungen zur Reduktion des Energieverbrauchs digitaler Systeme.\n• End-of-Life IT Management: Implementierung nachhaltiger IT-Lifecycle-Management-Prozesse einschließlich Circular Economy-Prinzipien.\n\n🚀 Innovation durch Green Digital Solutions:\n• Smart Building Technologies: Integration intelligenter Gebäudetechnologien zur automatischen Optimierung von Energieverbrauch und Raumnutzung.\n• Predictive Maintenance: Einsatz von Machine Learning für vorausschauende Wartung zur Verlängerung der Lebensdauer von Anlagen und Reduktion von Verschwendung.\n• Virtual Collaboration: Optimierung digitaler Kollaborationstools zur Reduktion von Geschäftsreisen und physischen Meetings.\n• Automated Sustainability Reporting: Entwicklung automatisierter Systeme für ESG-Datenerfassung und -berichterstattung zur Steigerung von Effizienz und Genauigkeit."
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
