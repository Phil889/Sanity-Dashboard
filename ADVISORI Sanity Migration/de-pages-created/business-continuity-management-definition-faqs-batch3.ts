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
    console.log('Updating Business Continuity Management Definition page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'business-continuity-management-definition' })
    
    if (!existingDoc) {
      throw new Error('Document "business-continuity-management-definition" not found')
    }
    
    // Create new FAQs for BCM Implementation & Practice
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie definieren sich die praktischen Implementierungsansätze für Business Continuity Management und welche methodischen Schritte sind erforderlich?',
        answer: "Die praktische Implementierung von Business Continuity Management definiert sich als systematischer, phasenorientierter Prozess, der strategische Planung mit operativer Umsetzung verbindet. Diese Implementierung erfordert strukturierte methodische Schritte, die organisationale Veränderungen, technische Lösungen und kulturelle Transformation integrieren.\n\n🚀 Implementierungsphasen Definition:\n• Initiierung umfasst Stakeholder-Engagement, Scope-Definition und strategische Ausrichtung\n• Analyse beinhaltet Business Impact Analysis, Risikobewertung und Gap-Assessment\n• Design fokussiert auf Strategieentwicklung, Lösungsarchitektur und Planentwicklung\n• Implementierung umfasst Umsetzung, Testing und Validierung der BCM-Lösungen\n• Betrieb beinhaltet kontinuierliches Monitoring, Wartung und Verbesserung\n\n📋 Methodische Grundlagen:\n• Projektmanagement-Ansätze strukturieren die Implementierung in definierte Phasen und Meilensteine\n• Change Management gewährleistet organisationale Akzeptanz und kulturelle Integration\n• Stakeholder Management sichert Engagement und Unterstützung auf allen Organisationsebenen\n• Risikomanagement identifiziert und mitigiert Implementierungsrisiken systematisch\n• Qualitätsmanagement gewährleistet Standards und kontinuierliche Verbesserung\n\n🎯 Strategische Implementierungsschritte:\n• BCM-Policy und Governance-Framework etablieren strategische Grundlagen\n• Organisationsstruktur und Rollen definieren Verantwortlichkeiten und Entscheidungsprozesse\n• Ressourcenplanung umfasst Budget, Personal und technische Infrastruktur\n• Kommunikationsstrategie gewährleistet Awareness und Engagement\n• Performance Management definiert Erfolgsmessung und KPIs\n\n🔍 Analytische Implementierungsschritte:\n• Kontext-Analyse identifiziert interne und externe Faktoren\n• Business Impact Analysis quantifiziert Auswirkungen und Prioritäten\n• Risikobewertung systematisiert Bedrohungen und Vulnerabilitäten\n• Gap-Assessment bewertet aktuelle Kapazitäten gegen Anforderungen\n• Abhängigkeits-Analyse identifiziert kritische Interdependenzen\n\n🏗️ Design und Entwicklungsschritte:\n• BCM-Strategie definiert Kontinuitätsoptionen und Lösungsansätze\n• Lösungsarchitektur strukturiert technische und organisatorische Komponenten\n• Plan-Entwicklung erstellt detaillierte Kontinuitäts- und Recovery-Pläne\n• Ressourcen-Design definiert erforderliche Kapazitäten und Infrastrukturen\n• Integration gewährleistet Kompatibilität mit bestehenden Systemen\n\n⚡ Operative Implementierungsschritte:\n• Pilot-Implementierung testet Lösungen in kontrollierten Umgebungen\n• Schrittweise Ausrollung minimiert Risiken und ermöglicht Anpassungen\n• Training und Schulung entwickeln erforderliche Kompetenzen\n• Testing und Validation überprüfen Wirksamkeit und Angemessenheit\n• Go-Live und Stabilisierung etablieren operative BCM-Kapazitäten"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Welche Rolle spielen Stakeholder in der BCM-Definition und wie werden verschiedene Interessensgruppen systematisch integriert?',
        answer: "Stakeholder spielen eine zentrale Rolle in der BCM-Definition, da Business Continuity Management primär darauf ausgerichtet ist, die Interessen verschiedener Stakeholder-Gruppen zu schützen und deren Erwartungen zu erfüllen. Die systematische Integration von Stakeholdern erfordert strukturierte Ansätze zur Identifikation, Analyse und Einbindung aller relevanten Interessensgruppen.\n\n👥 Stakeholder-Kategorisierung:\n• Interne Stakeholder umfassen Mitarbeiter, Management, Eigentümer und Aufsichtsgremien\n• Externe Stakeholder beinhalten Kunden, Lieferanten, Regulatoren und Gemeinschaften\n• Primäre Stakeholder haben direkten Einfluss auf oder werden direkt von BCM-Entscheidungen betroffen\n• Sekundäre Stakeholder haben indirekten Einfluss oder werden indirekt betroffen\n• Kritische Stakeholder sind für BCM-Erfolg unverzichtbar oder haben Veto-Macht\n\n🔍 Stakeholder-Analyse Methodologie:\n• Stakeholder-Mapping identifiziert alle relevanten Interessensgruppen systematisch\n• Einfluss-Interesse-Matrix bewertet Macht und Engagement verschiedener Stakeholder\n• Erwartungs-Analyse identifiziert spezifische BCM-bezogene Anforderungen\n• Kommunikations-Assessment bewertet bevorzugte Kanäle und Frequenzen\n• Risiko-Bewertung analysiert potenzielle Konflikte und Widerstand\n\n📊 Stakeholder-Engagement Strategien:\n• Informieren umfasst einseitige Kommunikation über BCM-Aktivitäten und Fortschritte\n• Konsultieren beinhaltet Feedback-Sammlung und Input zu BCM-Entscheidungen\n• Einbeziehen umfasst aktive Partizipation in BCM-Planungs- und Entscheidungsprozessen\n• Kollaborieren etabliert Partnerschaften für gemeinsame BCM-Entwicklung\n• Empowern überträgt Entscheidungsverantwortung an relevante Stakeholder-Gruppen\n\n🎯 Stakeholder-spezifische BCM-Definitionen:\n• Für Kunden fokussiert BCM auf Service-Kontinuität und Qualitätssicherung\n• Für Mitarbeiter betont BCM Arbeitsplatzsicherheit und Karrierekontinuität\n• Für Investoren konzentriert sich BCM auf Wertschutz und Rendite-Sicherung\n• Für Regulatoren fokussiert BCM auf Compliance und Risikomanagement\n• Für Lieferanten betont BCM partnerschaftliche Kontinuität und Stabilität\n\n🔄 Kontinuierliches Stakeholder-Management:\n• Regelmäßige Stakeholder-Reviews aktualisieren Analyse und Strategien\n• Feedback-Mechanismen sammeln kontinuierlich Input und Verbesserungsvorschläge\n• Kommunikations-Pläne gewährleisten angemessene Information und Engagement\n• Konflikt-Management adressiert Interessenskonflikte und Widerstand\n• Performance-Monitoring bewertet Stakeholder-Zufriedenheit und Engagement\n\n🌐 Stakeholder-Integration in BCM-Prozesse:\n• Business Impact Analysis berücksichtigt Stakeholder-Perspektiven und Prioritäten\n• Strategieentwicklung integriert Stakeholder-Anforderungen und Erwartungen\n• Plan-Entwicklung berücksichtigt Stakeholder-spezifische Bedürfnisse\n• Testing und Übungen beziehen relevante Stakeholder aktiv ein\n• Kontinuierliche Verbesserung nutzt Stakeholder-Feedback für Optimierung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Wie definieren sich die Metriken und KPIs für Business Continuity Management und welche Messansätze gewährleisten effektive Performance-Bewertung?',
        answer: "Die Definition von BCM-Metriken und KPIs basiert auf einem systematischen Ansatz zur Quantifizierung von BCM-Performance, Wirksamkeit und Wertbeitrag. Diese Messansätze umfassen sowohl quantitative als auch qualitative Indikatoren, die verschiedene Dimensionen der BCM-Leistung erfassen und kontinuierliche Verbesserung ermöglichen.\n\n📊 BCM-Metriken Kategorisierung:\n• Präventive Metriken messen proaktive BCM-Kapazitäten und Vorbereitungsgrad\n• Reaktive Metriken bewerten Response-Fähigkeiten und Incident-Management-Performance\n• Recovery-Metriken quantifizieren Wiederherstellungszeiten und Effektivität\n• Resilienz-Metriken bewerten adaptive Kapazitäten und Lernfähigkeit\n• Strategische Metriken messen BCM-Beitrag zu Geschäftszielen und Wertschöpfung\n\n⏱️ Zeitbasierte Performance-Indikatoren:\n• Recovery Time Actual misst tatsächliche Wiederherstellungszeiten gegen Ziele\n• Mean Time to Recovery bewertet durchschnittliche Recovery-Performance\n• Incident Response Time misst Reaktionsgeschwindigkeit auf Störungen\n• Plan Activation Time bewertet Geschwindigkeit der BCM-Plan-Aktivierung\n• Business Resumption Time misst Zeit bis zur Geschäftsnormalisierung\n\n💰 Finanzielle BCM-Metriken:\n• BCM Investment ROI bewertet Return on Investment für BCM-Ausgaben\n• Avoided Losses quantifiziert durch BCM verhinderte finanzielle Verluste\n• Cost per Incident misst durchschnittliche Kosten von Geschäftsunterbrechungen\n• BCM Cost Efficiency bewertet Kosteneffizienz von BCM-Maßnahmen\n• Business Value Protected quantifiziert geschützten Geschäftswert\n\n🎯 Qualitative Performance-Indikatoren:\n• Stakeholder Satisfaction misst Zufriedenheit mit BCM-Performance\n• BCM Maturity Level bewertet Entwicklungsstand der BCM-Kapazitäten\n• Compliance Score misst Erfüllung regulatorischer BCM-Anforderungen\n• Risk Reduction Index bewertet Verringerung von Kontinuitätsrisiken\n• Cultural Integration Score misst BCM-Integration in Organisationskultur\n\n📈 Operative BCM-KPIs:\n• Plan Currency Rate misst Aktualität von BCM-Plänen und Dokumentation\n• Training Completion Rate bewertet BCM-Schulungs- und Awareness-Programme\n• Exercise Success Rate misst Erfolg von BCM-Tests und Übungen\n• Incident Detection Time bewertet Geschwindigkeit der Störungserkennung\n• Communication Effectiveness misst Wirksamkeit der Krisenkommunikation\n\n🔄 Kontinuierliche Verbesserungs-Metriken:\n• Lessons Learned Implementation Rate misst Umsetzung von Verbesserungsmaßnahmen\n• Plan Update Frequency bewertet Häufigkeit und Qualität von Plan-Aktualisierungen\n• Capability Enhancement Rate misst Entwicklung neuer BCM-Fähigkeiten\n• Innovation Index bewertet Integration neuer Technologien und Methoden\n• Benchmark Performance misst BCM-Leistung gegen Branchenstandards\n\n📋 Messansätze und Methodologien:\n• Balanced Scorecard Ansatz integriert verschiedene Performance-Dimensionen\n• Dashboard-basiertes Monitoring ermöglicht Echtzeit-Performance-Überwachung\n• Benchmarking vergleicht BCM-Performance mit Best Practices\n• Maturity Assessment bewertet BCM-Entwicklungsstand systematisch\n• Stakeholder-Feedback integriert qualitative Bewertungen in Performance-Messung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Welche zukunftsorientierten Aspekte prägen die moderne BCM-Definition und wie integrieren sich emerging technologies und neue Risikodimensionen?',
        answer: "Die moderne BCM-Definition wird zunehmend von zukunftsorientierten Aspekten geprägt, die emerging technologies, neue Risikodimensionen und veränderte Geschäftsmodelle berücksichtigen. Diese Evolution erfordert adaptive Definitionen und Frameworks, die traditionelle BCM-Ansätze mit innovativen Technologien und systemischen Risiken integrieren.\n\n🚀 Emerging Technologies Integration:\n• Künstliche Intelligenz ermöglicht prädiktive BCM-Analytics und automatisierte Incident Response\n• Internet of Things schafft neue Monitoring-Möglichkeiten und Echtzeit-Visibility\n• Blockchain-Technologie unterstützt sichere und transparente BCM-Dokumentation\n• Cloud Computing ermöglicht skalierbare und flexible BCM-Infrastrukturen\n• Robotics und Automation reduzieren menschliche Abhängigkeiten in kritischen Prozessen\n\n🌐 Neue Risikodimensionen:\n• Cyber-Resilienz wird als integraler Bestandteil der BCM-Definition etabliert\n• Klimawandel-bedingte Risiken erfordern langfristige Adaptationsstrategien\n• Pandemie-Resilienz integriert Gesundheitskrisen in BCM-Frameworks\n• Supply Chain Complexity erfordert ecosystem-weite Kontinuitätsbetrachtungen\n• Geopolitische Instabilität beeinflusst globale BCM-Strategien\n\n🔮 Prädiktive BCM-Ansätze:\n• Predictive Analytics ermöglichen Früherkennung potenzieller Störungen\n• Scenario Modeling unterstützt Vorbereitung auf unbekannte Risiken\n• Machine Learning optimiert BCM-Entscheidungen basierend auf historischen Daten\n• Digital Twins ermöglichen Simulation und Testing von BCM-Strategien\n• Real-time Monitoring gewährleistet kontinuierliche Risikobewertung\n\n🌱 Nachhaltigkeits-Integration:\n• ESG-Kriterien werden in BCM-Definitionen und Strategien integriert\n• Circular Economy Prinzipien beeinflussen BCM-Ressourcenplanung\n• Carbon Footprint Considerations integrieren Umweltaspekte in BCM-Entscheidungen\n• Social Responsibility erweitert Stakeholder-Definitionen und Schutzfokus\n• Regenerative Approaches fokussieren auf positive Auswirkungen nach Störungen\n\n🔄 Adaptive BCM-Frameworks:\n• Agile BCM-Methodologien ermöglichen schnelle Anpassung an Veränderungen\n• Continuous Evolution ersetzt statische BCM-Pläne durch dynamische Kapazitäten\n• Ecosystem Thinking erweitert BCM-Scope auf Partnernetzwerke und Communities\n• Antifragility Concepts integrieren Fähigkeiten zur Stärkung durch Störungen\n• Complex Adaptive Systems Ansätze berücksichtigen emergente Eigenschaften\n\n🎯 Zukunftsorientierte BCM-Ziele:\n• Transformation Enablement positioniert BCM als Katalysator für Innovation\n• Competitive Advantage Development nutzt BCM für strategische Differenzierung\n• Stakeholder Value Creation erweitert BCM-Ziele über Schutz hinaus\n• Digital Resilience Building integriert technologische und organisationale Aspekte\n• Future-Proofing gewährleistet BCM-Relevanz für unbekannte Herausforderungen\n\n🌟 Innovation in BCM-Definitionen:\n• Human-Centric Design fokussiert auf Mitarbeiter-Erfahrung und Wohlbefinden\n• Data-Driven Decision Making integriert Analytics in alle BCM-Prozesse\n• Collaborative Resilience fördert branchenübergreifende Zusammenarbeit\n• Cognitive BCM nutzt AI für intelligente Entscheidungsunterstützung\n• Quantum-Ready Approaches bereiten BCM auf Quantum Computing vor"
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQ batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
