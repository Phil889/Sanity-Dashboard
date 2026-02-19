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
    console.log('Updating KI für das Personalwesen page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'ki-fuer-das-personalwesen' })
    
    if (!existingDoc) {
      throw new Error('Document "ki-fuer-das-personalwesen" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Wie revolutioniert KI das Recruiting und welche strategischen Vorteile entstehen für die C-Suite durch AI-gestützte Talentakquisition?',
        answer: "Die Integration von Künstlicher Intelligenz in das Recruiting transformiert die Talentakquisition von einem reaktiven zu einem proaktiven, strategischen Geschäftsprozess. Für die Unternehmensführung bedeutet dies nicht nur Effizienzsteigerung, sondern fundamentale Wettbewerbsvorteile durch bessere Personalentscheidungen und optimierte Candidate Experience. ADVISORI entwickelt AI-Recruiting-Systeme, die messbare Geschäftsergebnisse liefern und gleichzeitig höchste ethische Standards einhalten.\n\n🎯 Strategische Transformation des Recruiting-Prozesses:\n• Predictive Talent Intelligence: KI-Systeme analysieren nicht nur aktuelle Qualifikationen, sondern prognostizieren zukünftiges Leistungspotenzial, Karriereentwicklung und kulturelle Passung basierend auf umfassenden Datenanalysen.\n• Proaktive Talentidentifikation: Intelligente Algorithmen identifizieren passive Kandidaten und potenzielle Talente lange bevor diese aktiv nach neuen Positionen suchen, was einen entscheidenden Wettbewerbsvorteil im Kampf um Top-Talente schafft.\n• Bias-freie Auswahlprozesse: Fortschrittliche AI-Systeme eliminieren unbewusste Vorurteile und schaffen objektive, faire Bewertungskriterien, die zu diverseren und leistungsstärkeren Teams führen.\n• Skalierbare Qualitätssicherung: KI ermöglicht es, auch bei hohem Bewerbungsvolumen konsistent hohe Auswahlqualität zu gewährleisten, ohne proportional mehr Ressourcen zu benötigen.\n\n💼 Messbare Geschäftsauswirkungen für die C-Suite:\n• Reduzierte Time-to-Hire: AI-gestützte Vorauswahl und automatisierte Prozesse verkürzen die Besetzungszeit um durchschnittlich vierzig bis sechzig Prozent, was direkte Kosteneinsparungen und schnellere Geschäftsentwicklung ermöglicht.\n• Verbesserte Retention-Raten: Präzisere Matching-Algorithmen führen zu besserer Job-Fit und höherer Mitarbeiterzufriedenheit, was Fluktuationskosten erheblich reduziert.\n• Optimierte Candidate Experience: Personalisierte, responsive AI-Systeme schaffen positive Bewerbererfahrungen, die das Employer Branding stärken und die Attraktivität als Arbeitgeber steigern.\n• Datengetriebene Recruiting-Strategien: Umfassende Analytics ermöglichen evidenzbasierte Entscheidungen über Recruiting-Kanäle, Zielgruppen und Budgetallokation.\n\n🔍 ADVISORI AI-Recruiting-Excellence:\n• Entwicklung maßgeschneiderter AI-Recruiting-Plattformen, die nahtlos in bestehende HR-Systeme integriert werden und sofortige Produktivitätssteigerungen ermöglichen.\n• Implementierung ethischer AI-Standards mit vollständiger DSGVO-Compliance und transparenten Entscheidungsprozessen für regulatorische Sicherheit.\n• Kontinuierliche Optimierung durch Machine Learning, das aus jeder Einstellung lernt und die Auswahlqualität kontinuierlich verbessert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welchen ROI können Unternehmen durch KI-gestützte HR-Analytics erwarten und wie quantifiziert ADVISORI den Geschäftswert intelligenter Personalentscheidungen?',
        answer: "KI-gestützte HR-Analytics transformieren Personalentscheidungen von intuitionsbasierten zu datengetriebenen strategischen Investitionen. ADVISORI entwickelt umfassende ROI-Modelle, die sowohl direkte Kosteneinsparungen als auch indirekte Wertsteigerungen durch intelligente HR-Systeme quantifizieren und für die Unternehmensführung transparent machen.\n\n💰 Direkte finanzielle Auswirkungen von AI-HR-Analytics:\n• Reduzierte Recruiting-Kosten: Intelligente Kandidatenvorauswahl und automatisierte Prozesse senken die Kosten pro Einstellung um durchschnittlich dreißig bis fünfzig Prozent bei gleichzeitig höherer Auswahlqualität.\n• Minimierte Fluktuation: Predictive Analytics identifizieren Kündigungsrisiken frühzeitig und ermöglichen proaktive Retention-Maßnahmen, was Fluktuationskosten erheblich reduziert.\n• Optimierte Weiterbildungsinvestitionen: KI-basierte Skills-Gap-Analysen stellen sicher, dass Weiterbildungsbudgets zielgerichtet eingesetzt werden und maximalen Geschäftsnutzen generieren.\n• Effiziente Kapazitätsplanung: Workforce-Forecasting verhindert Über- oder Unterbesetzung und optimiert Personalkosten bei gleichzeitiger Sicherstellung der Betriebsfähigkeit.\n\n📈 Strategische Wertsteigerung durch intelligente HR-Insights:\n• Verbesserte Produktivität: Datengetriebene Personalentscheidungen führen zu besseren Job-Fits und höherer Mitarbeiterleistung, was sich direkt in Umsatzsteigerungen niederschlägt.\n• Beschleunigte Innovation: AI-gestützte Talent-Matching identifiziert und entwickelt Innovationspotenziale in der Belegschaft, was Wettbewerbsvorteile und neue Geschäftsmöglichkeiten schafft.\n• Risikominimierung: Predictive Analytics identifizieren potenzielle HR-Risiken frühzeitig und ermöglichen präventive Maßnahmen, die kostspielige Probleme verhindern.\n• Strategische Workforce-Transformation: Langfristige Personalplanung basierend auf Geschäftsstrategie und Marktentwicklungen sichert zukunftsfähige Organisationsstrukturen.\n\n🔍 ADVISORI ROI-Quantifizierung und Wertmessung:\n• Entwicklung maßgeschneiderter KPI-Dashboards, die HR-Performance in direkten Bezug zu Geschäftsergebnissen setzen und kontinuierliche Wertmessung ermöglichen.\n• Implementierung von Predictive ROI-Modellen, die zukünftige Wertschöpfung durch HR-Investitionen prognostizieren und Budgetentscheidungen optimieren.\n• Benchmarking gegen Branchenstandards und Best Practices zur Identifikation von Verbesserungspotenzialen und Wettbewerbsvorteilen.\n• Kontinuierliche Wertoptimierung durch Machine Learning-Algorithmen, die HR-Strategien basierend auf Geschäftsergebnissen automatisch anpassen und verbessern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie stellt ADVISORI sicher, dass KI-HR-Systeme DSGVO-konform sind und gleichzeitig ethische Standards in der Personalarbeit gewährleisten?',
        answer: "Die Implementierung von KI im Personalwesen erfordert höchste Standards in Datenschutz und Ethik. ADVISORI entwickelt AI-HR-Systeme, die nicht nur vollständige DSGVO-Compliance gewährleisten, sondern auch ethische Exzellenz in der Personalarbeit fördern. Unser Ansatz verbindet technische Innovation mit rechtlicher Sicherheit und ethischer Verantwortung für nachhaltigen Geschäftserfolg.\n\n🛡️ DSGVO-konforme AI-HR-Architektur:\n• Privacy-by-Design-Prinzipien: Alle KI-HR-Systeme werden von Grund auf mit integriertem Datenschutz entwickelt, der Mitarbeiterdaten schützt und gleichzeitig maximale Funktionalität gewährleistet.\n• Datenminimierung und Zweckbindung: Intelligente Algorithmen verarbeiten nur die minimal notwendigen Daten für spezifische HR-Zwecke und vermeiden unnötige Datensammlung oder -speicherung.\n• Transparente Verarbeitungsprozesse: Mitarbeiter und Bewerber erhalten vollständige Einblicke in die Datenverarbeitung und können ihre Rechte jederzeit ausüben.\n• Sichere Datenarchitektur: Fortschrittliche Verschlüsselung und Zugriffskontrollen schützen sensible HR-Daten vor unbefugtem Zugriff und gewährleisten Datenintegrität.\n\n⚖️ Ethische AI-Governance in der Personalarbeit:\n• Bias-Detection und Fairness-Algorithmen: Kontinuierliche Überwachung und Korrektur von Algorithmus-Verzerrungen stellt sicher, dass alle Personalentscheidungen fair und diskriminierungsfrei erfolgen.\n• Explainable AI für HR-Entscheidungen: Alle KI-basierten Personalentscheidungen sind nachvollziehbar und erklärbar, was Vertrauen schafft und rechtliche Sicherheit gewährleistet.\n• Menschliche Kontrolle und Überprüfung: KI-Systeme unterstützen menschliche Entscheidungen, ersetzen sie aber nicht vollständig, um ethische Verantwortung und persönliche Beurteilung zu bewahren.\n• Kontinuierliche Ethik-Überwachung: Regelmäßige Audits und Bewertungen stellen sicher, dass AI-HR-Systeme ethische Standards einhalten und gesellschaftliche Werte respektieren.\n\n🔍 ADVISORI Compliance-Excellence:\n• Entwicklung umfassender Compliance-Frameworks, die alle relevanten Datenschutz- und Arbeitsrechtsbestimmungen berücksichtigen und automatisch überwachen.\n• Implementierung von Audit-Trails und Dokumentationssystemen, die vollständige Nachvollziehbarkeit aller HR-Entscheidungen gewährleisten.\n• Schulung und Zertifizierung von HR-Teams in ethischer KI-Nutzung und Datenschutzbestimmungen für kompetente und verantwortungsvolle Systemnutzung.\n• Kontinuierliche Rechtsaktualisierung und Systemanpassung an sich ändernde Regulierungsanforderungen für dauerhafte Compliance-Sicherheit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie transformiert KI die Employee Experience und welche Auswirkungen hat dies auf Mitarbeiterbindung und Unternehmenskultur?',
        answer: "KI revolutioniert die Employee Experience durch Personalisierung, Proaktivität und kontinuierliche Optimierung der Mitarbeiterreise. ADVISORI entwickelt AI-gestützte Employee Experience-Plattformen, die nicht nur die Zufriedenheit steigern, sondern auch messbare Auswirkungen auf Produktivität, Retention und Unternehmenskultur haben. Für die C-Suite bedeutet dies strategische Vorteile durch engagierte, loyale und leistungsstarke Mitarbeiter.\n\n🌟 Personalisierte Employee Journey durch KI:\n• Individualisierte Onboarding-Erfahrungen: KI-Systeme passen Einarbeitungsprogramme an individuelle Lernstile, Vorerfahrungen und Rolleanforderungen an, was zu schnellerer Produktivität und höherer Anfangszufriedenheit führt.\n• Proaktive Karriereentwicklung: Intelligente Algorithmen identifizieren Entwicklungsmöglichkeiten und schlagen personalisierte Karrierepfade vor, bevor Mitarbeiter unzufrieden werden oder das Unternehmen verlassen.\n• Adaptive Arbeitsumgebung: KI optimiert Arbeitsplätze, Termine und Aufgabenverteilung basierend auf individuellen Präferenzen und Leistungsmustern für maximale Effizienz und Wohlbefinden.\n• Intelligente Feedback-Systeme: Kontinuierliche, KI-gestützte Performance-Insights ermöglichen zeitnahes, konstruktives Feedback und fördern kontinuierliche Verbesserung.\n\n💡 Proaktive Engagement-Optimierung:\n• Sentiment-Analyse und Früherkennung: KI-Systeme analysieren Kommunikationsmuster, Verhalten und Feedback, um Unzufriedenheit oder Burnout-Risiken frühzeitig zu identifizieren.\n• Personalisierte Benefits und Angebote: Intelligente Empfehlungssysteme schlagen maßgeschneiderte Benefits, Weiterbildungen und Entwicklungsmöglichkeiten vor, die individuellen Bedürfnissen entsprechen.\n• Work-Life-Balance-Optimierung: KI überwacht Arbeitsbelastung und schlägt Anpassungen vor, um optimale Balance zwischen Produktivität und Mitarbeiterwohlbefinden zu gewährleisten.\n• Soziale Vernetzung und Collaboration: Intelligente Matching-Algorithmen fördern sinnvolle berufliche Verbindungen und Mentoring-Beziehungen innerhalb der Organisation.\n\n🏢 Kulturelle Transformation durch AI-Employee Experience:\n• Datengetriebene Kulturentwicklung: KI-Analytics identifizieren kulturelle Stärken und Verbesserungsbereiche und ermöglichen gezielte Interventionen für positive Kulturveränderung.\n• Inklusive und diverse Arbeitsumgebung: AI-Systeme fördern Diversität und Inklusion durch faire Chancenverteilung und Bias-freie Entscheidungsprozesse.\n• Kontinuierliches Lernen und Innovation: KI-gestützte Lernplattformen schaffen eine Kultur des kontinuierlichen Lernens und fördern Innovation durch personalisierte Weiterbildung.\n• Transparenz und Vertrauen: Explainable AI schafft Vertrauen in HR-Entscheidungen und fördert eine offene, transparente Unternehmenskultur."
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
    console.log('✅ FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
