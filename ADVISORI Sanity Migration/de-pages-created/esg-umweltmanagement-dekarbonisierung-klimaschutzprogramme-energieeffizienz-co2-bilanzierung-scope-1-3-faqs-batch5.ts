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
    console.log('Updating ESG Umweltmanagement page with C-Level FAQs batch 5 (German)...')
    
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
        _key: generateKey('faq', 17),
        question: "Die Entwicklung hin zu einer regenerativen Wirtschaft geht über Nachhaltigkeit hinaus. Wie unterstützt ADVISORI bei der Transformation zu regenerativen Geschäftsmodellen, die Ökosysteme aktiv wiederherstellen?",
        answer: "Regenerative Geschäftsmodelle repräsentieren die nächste Evolution über Nachhaltigkeit hinaus – sie zielen darauf ab, ökologische und soziale Systeme aktiv zu regenerieren statt sie nur zu erhalten. Für die C-Suite bedeutet dies eine fundamentale Neuausrichtung von 'weniger schädlich' zu 'aktiv heilend'. ADVISORI entwickelt regenerative Strategien, die sowohl ökologische Restauration als auch langfristige Geschäftswertschöpfung ermöglichen.\n\n🌱 Regenerative Business Model Design:\n• Nature-positive Value Creation: Entwicklung von Geschäftsmodellen, die natürliche Systeme aktiv verbessern, wie Kohlenstoffsequestrierung, Biodiversitätsförderung und Bodenregeneration.\n• Ecosystem Restoration Services: Integration von Ökosystem-Wiederherstellungsdienstleistungen in das Kerngeschäft zur Schaffung neuer Einnahmequellen und ökologischer Wirkung.\n• Living Systems Integration: Nutzung biologischer Prinzipien und natürlicher Prozesse zur Optimierung von Geschäftsoperationen und Produktentwicklung.\n• Regenerative Supply Chains: Transformation von Lieferketten zu regenerativen Netzwerken, die Land und Gemeinden revitalisieren statt auszubeuten.\n\n🔄 Systemische Transformation und Impact Measurement:\n• Holistic Impact Metrics: Entwicklung umfassender Messsysteme, die ökologische, soziale und wirtschaftliche Regeneration quantifizieren und in Geschäftsentscheidungen integrieren.\n• Stakeholder Ecosystem Development: Aufbau regenerativer Stakeholder-Ökosysteme, die gemeinsam an der Wiederherstellung natürlicher und sozialer Systeme arbeiten.\n• Long-term Value Optimization: Neuausrichtung von Zeiträumen und KPIs zur Berücksichtigung langfristiger regenerativer Wirkungen statt kurzfristiger Extraktion.\n• Adaptive Management Systems: Implementierung adaptiver Managementsysteme, die auf natürliche Rückkopplungsschleifen reagieren und kontinuierliche Regeneration ermöglichen.\n\n💰 Economic Viability of Regeneration:\n• Regenerative ROI Models: Entwicklung von Renditemodellen, die regenerative Externalitäten als wirtschaftliche Werte erfassen und monetarisieren.\n• Natural Capital Appreciation: Strategien zur Steigerung des Naturkapitalwerts durch regenerative Praktiken und deren Integration in Unternehmensbewertungen.\n• Market Creation for Regeneration: Pionierarbeit bei der Schaffung neuer Märkte für regenerative Produkte und Dienstleistungen.\n• Resilience Premium: Quantifizierung und Realisierung von Wertprämien durch erhöhte Resilienz regenerativer Systeme."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Carbon Offset-Strategien werden kritisch hinterfragt. Wie entwickelt ADVISORI glaubwürdige Carbon Management-Ansätze, die echte Klimawirkung schaffen und Greenwashing-Risiken vermeiden?",
        answer: "Carbon Offsets stehen zunehmend in der Kritik aufgrund von Qualitätsproblemen und Greenwashing-Risiken. Für die C-Suite ist es entscheidend, eine glaubwürdige Carbon Management-Strategie zu entwickeln, die auf echter Emissionsreduktion basiert und hochwertige, zusätzliche Klimaschutzmaßnahmen priorisiert. ADVISORI entwickelt integrity-basierte Carbon Strategies, die sowohl wissenschaftlichen Standards als auch Stakeholder-Erwartungen gerecht werden.\n\n🎯 Hierarchy-basierte Carbon Management:\n• Avoid-Reduce-Offset Hierarchy: Strikte Priorisierung von Emissionsvermeidung und -reduktion vor Kompensation, um sicherzustellen, dass Offsets nur als letztes Mittel eingesetzt werden.\n• Science-based Reduction Targets: Entwicklung wissenschaftsbasierter Reduktionsziele, die mit dem 1,5°C-Pfad kompatibel sind und primär durch interne Maßnahmen erreicht werden.\n• Internal Carbon Pricing: Implementierung robuster interner CO2-Preismodelle zur Incentivierung von Emissionsreduktionen und zur ehrlichen Bewertung von Klimamaßnahmen.\n• Technology-first Approach: Priorisierung innovativer Technologien und Geschäftsmodellveränderungen gegenüber externen Kompensationsmaßnahmen.\n\n✅ High-Quality Carbon Offset Standards:\n• Additionality Verification: Strenge Prüfung der Zusätzlichkeit von Offset-Projekten zur Sicherstellung, dass sie ohne Carbon Finance nicht stattgefunden hätten.\n• Permanence and Durability: Fokus auf dauerhafte Kohlenstoffspeicherung und Risikomanagement für potenzielle Reversals, insbesondere bei naturbasierten Lösungen.\n• Co-benefits Integration: Auswahl von Offset-Projekten, die zusätzliche ökologische und soziale Vorteile schaffen, wie Biodiversitätsschutz und Gemeinschaftsentwicklung.\n• Independent Verification: Nutzung unabhängiger Verifikationsstandards und regelmäßiger Monitoring-Systeme zur Sicherstellung der Offset-Qualität.\n\n🔍 Transparency und Stakeholder Trust:\n• Full Disclosure Policies: Vollständige Transparenz über Carbon Management-Strategien, einschließlich der Mengen und Arten von Offsets sowie deren Qualitätskriterien.\n• Interim Target Accountability: Klare Kommunikation darüber, wie Offsets in Relation zu kurzfristigen Emissionsreduktionszielen verwendet werden.\n• Third-party Assurance: Unabhängige Überprüfung von Carbon Accounting und Offset-Portfolios zur Stärkung der Glaubwürdigkeit.\n• Stakeholder Engagement: Proaktive Kommunikation mit kritischen Stakeholdern über Carbon Management-Entscheidungen und kontinuierliche Verbesserungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "ESG-Performance wird zunehmend in Executive Compensation integriert. Wie strukturiert ADVISORI leistungsbasierte Vergütungssysteme, die echte Umweltverbesserungen incentivieren und Strategic Gaming vermeiden?",
        answer: "Die Integration von ESG-Kriterien in Executive Compensation wird zum Standard, birgt aber Risiken von Strategic Gaming und oberflächlicher Zielerreichung. Für die C-Suite ist es entscheidend, Vergütungssysteme zu entwickeln, die echte, langfristige Umweltverbesserungen incentivieren. ADVISORI entwickelt robuste ESG-Compensation-Frameworks, die sowohl Performance Excellence als auch authentische Nachhaltigkeitswirkung fördern.\n\n💼 Strategic ESG Compensation Design:\n• Multi-dimensional KPI Framework: Entwicklung ausgewogener ESG-KPI-Sets, die sowohl kurzfristige Meilensteine als auch langfristige Transformationsziele abdecken und Gaming-Risiken minimieren.\n• Outcome-based vs. Activity-based Metrics: Fokus auf messbare Umweltauswirkungen und Geschäftsergebnisse statt auf reine Aktivitätsindikatoren zur Sicherstellung echter Performance.\n• Threshold and Cap Mechanisms: Implementierung von Mindestleistungsanforderungen und Performance-Obergrenzen zur Vermeidung von Extremverhalten und kurzfristigem Optimismus.\n• Long-term Value Alignment: Integration mehrjähriger Vesting-Perioden und Clawback-Mechanismen für ESG-bezogene Vergütungskomponenten.\n\n📊 Robust Performance Measurement:\n• Third-party Verification: Unabhängige Verifikation kritischer ESG-Metriken zur Sicherstellung von Datenintegrität und Vermeidung von Manipulation.\n• Relative and Absolute Targets: Kombination von branchenrelativem Benchmarking mit absoluten wissenschaftsbasierten Zielen für umfassende Performance-Bewertung.\n• Progress Tracking Systems: Implementierung kontinuierlicher Monitoring-Systeme, die Fortschritte transparent machen und Kurskorrekturen ermöglichen.\n• Materiality-based Weighting: Gewichtung von ESG-Komponenten basierend auf ihrer spezifischen Materialität für das Geschäftsmodell und Stakeholder-Erwartungen.\n\n🎯 Gaming Prevention und Integrity:\n• Holistic Performance Assessment: Bewertung von ESG-Performance im Kontext der Gesamtgeschäftsstrategie zur Vermeidung isolierter Optimierung einzelner Metriken.\n• Stakeholder Feedback Integration: Einbindung externer Stakeholder-Bewertungen und Reputationsmetriken in Compensation-Entscheidungen.\n• Continuous Calibration: Regelmäßige Überprüfung und Anpassung von ESG-Compensation-Systemen basierend auf Markentwicklungen und Best Practices.\n• Cultural Integration: Verknüpfung von ESG-Compensation mit Kultur- und Werte-Assessments zur Sicherstellung authentischer Nachhaltigkeitsführung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Die Konvergenz von Digitalisierung und Nachhaltigkeit schafft neue Chancen und Herausforderungen. Wie entwickelt ADVISORI integrierte Digital-ESG-Strategien, die Technologie für maximale Umweltwirkung nutzen?",
        answer: "Die Konvergenz von Digitalisierung und Nachhaltigkeit – oft als 'Twin Transition' bezeichnet – bietet unprecedented Möglichkeiten für Umweltwirkung, erfordert aber auch strategische Navigation zwischen technologischen Chancen und ökologischen Herausforderungen. Für die C-Suite ist es entscheidend, diese beiden Megatrends zu integrieren und zu einem strategischen Wettbewerbsvorteil zu machen. ADVISORI entwickelt ganzheitliche Digital-ESG-Strategien, die technologische Innovation mit ökologischer Verantwortung optimal verbinden.\n\n🤖 Technology-enabled Sustainability Innovation:\n• AI for Climate Optimization: Einsatz von Künstlicher Intelligenz für präzise Klimamodellierung, optimierte Ressourcenallokation und predictive Sustainability Analytics.\n• IoT-powered Environmental Management: Deployment intelligenter Sensor-Netzwerke für Echtzeit-Umweltmonitoring, automatisierte Effizienzoptimierung und präventive Umweltschutzmaßnahmen.\n• Blockchain for Transparency: Nutzung von Blockchain-Technologie für unveränderliche Nachhaltigkeitsdaten, Supply Chain Transparency und vertrauensvolle Carbon Credit-Märkte.\n• Digital Twin Sustainability: Entwicklung digitaler Zwillinge für Nachhaltigkeitsplanung, Emissionssimulation und Optimierung von Umweltauswirkungen.\n\n🌐 Green Digital Infrastructure:\n• Carbon-conscious Cloud Strategy: Strategische Migration zu CO2-neutralen Cloud-Providern und Optimierung der digitalen Infrastruktur für minimalen Environmental Footprint.\n• Sustainable Software Development: Integration von Green Coding-Praktiken und energieeffizienter Softwarearchitektur in Entwicklungsprozesse.\n• Circular IT Management: Implementierung von Circular Economy-Prinzipien im IT-Lifecycle Management, einschließlich Refurbishment und Recycling-Strategien.\n• Edge Computing Optimization: Strategische Nutzung von Edge Computing zur Reduzierung von Datenübertragungen und Energieverbrauch.\n\n🚀 Digital-physical Integration für Impact:\n• Smart City Participation: Engagement in Smart City-Initiativen zur Schaffung nachhaltiger urbaner Ökosysteme und neuer Geschäftsmodelle.\n• Industry 4.0 Sustainability: Integration von Industrie 4.0-Technologien für massive Effizienzsteigerungen in Produktion und Logistik.\n• Platform Economy for Circularity: Entwicklung digitaler Plattformen zur Förderung von Sharing Economy und Kreislaufwirtschaft.\n• Virtual-first Business Models: Transformation zu digital-native Geschäftsmodellen zur dramatischen Reduktion physischer Ressourcennutzung."
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
    console.log('✅ C-Level FAQs batch 5 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
