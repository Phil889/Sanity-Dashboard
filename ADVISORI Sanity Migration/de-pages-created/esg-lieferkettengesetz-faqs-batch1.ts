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
    console.log('Updating ESG Lieferkettengesetz page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-lieferkettengesetz' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-lieferkettengesetz" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist das deutsche Lieferkettengesetz (LkSG) für die C-Suite mehr als nur eine Compliance-Anforderung und wie unterstützt ADVISORI bei der strategischen Umsetzung?",
        answer: "Das deutsche Lieferkettengesetz (LkSG) stellt für die Unternehmensführung eine fundamentale Transformation der Corporate Governance dar, die weit über reine Compliance-Maßnahmen hinausgeht. Es ist ein strategischer Imperativ zur Sicherung nachhaltiger Wettbewerbsfähigkeit und zur Minimierung existenzieller Geschäftsrisiken. ADVISORI versteht das LkSG als Katalysator für eine werteorientierte Unternehmensführung, die langfristigen Erfolg mit gesellschaftlicher Verantwortung verbindet.\n\n🎯 Strategische Dimensionen für die Führungsebene:\n• Reputationsschutz und Markenwert: Verstöße gegen Menschenrechts- und Umweltstandards können zu nachhaltigen Reputationsschäden führen, die den Unternehmenswert erheblich beeinträchtigen.\n• Finanzielle Risikominimierung: Bußgelder bis zu 2% des globalen Jahresumsatzes sowie Ausschlüsse von öffentlichen Aufträgen können die finanzielle Stabilität gefährden.\n• Investorenzugang und ESG-Ratings: Institutionelle Investoren und Ratingagenturen bewerten zunehmend die Nachhaltigkeit von Lieferketten als entscheidenden Faktor für Investitionsentscheidungen.\n• Operative Exzellenz: Eine transparente und verantwortungsvolle Lieferkette reduziert Unterbrechungsrisiken und stärkt die Resilienz der Wertschöpfungskette.\n\n🛡️ Der ADVISORI-Ansatz für strategisches LkSG-Management:\n• Ganzheitliche Risikoanalyse: Wir bewerten nicht nur rechtliche Risiken, sondern auch deren Auswirkungen auf Ihre Geschäftsstrategie, Marktposition und langfristige Wachstumsziele.\n• Integrierte Governance-Strukturen: Entwicklung von Due Diligence-Systemen, die nahtlos in bestehende Governance-Prozesse integriert werden und die Entscheidungsfindung der C-Suite unterstützen.\n• Werteorientierte Unternehmensführung: Positionierung des LkSG als Baustein einer authentischen Corporate Social Responsibility-Strategie, die das Vertrauen aller Stakeholder stärkt.\n• Datengestützte Entscheidungsunterstützung: Bereitstellung präziser KPIs und Dashboards, die es der Unternehmensführung ermöglichen, fundierte strategische Entscheidungen über Lieferkettenmanagement und Nachhaltigkeitsinvestitionen zu treffen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifizieren wir die Investition in ADVISORI's LkSG-Compliance-Lösungen und welchen messbaren Beitrag leistet dies zur nachhaltigen Profitabilität und zum Shareholder Value?",
        answer: "Die Investition in eine professionelle LkSG-Compliance-Strategie von ADVISORI ist eine werttreibende Maßnahme, die sowohl defensive als auch offensive Geschäftswerte schafft. Der Return on Investment manifestiert sich in der Vermeidung erheblicher Compliance-Kosten, der Erschließung neuer Marktchancen und der Stärkung der langfristigen Unternehmensbewertung durch nachhaltige Geschäftspraktiken.\n\n💰 Direkte finanzielle Werttreiber:\n• Vermeidung von Bußgeldern: Das LkSG sieht Bußgelder bis zu 2% des weltweiten Jahresumsatzes vor – für einen Konzern mit 5 Mrd. EUR Umsatz bedeutet dies ein maximales Bußgeldrisiko von 100 Mio. EUR.\n• Schutz vor Auftragsverlusten: Ausschlüsse von öffentlichen Aufträgen können bei großen Unternehmen Umsatzeinbußen in Millionenhöhe bedeuten.\n• Optimierung der Beschaffungskosten: Transparente und nachhaltige Lieferketten ermöglichen bessere Verhandlungspositionen und langfristige Partnerschaften mit qualitätsbewussten Lieferanten.\n• Reduzierung von Versicherungsprämien: Nachweisbare ESG-Compliance kann zu günstigeren Konditionen bei Directors & Officers-Versicherungen und anderen Unternehmensversicherungen führen.\n\n📈 Strategische Wertsteigerung und Marktvorteile:\n• ESG-Premiums bei Investoren: Unternehmen mit nachweislicher LkSG-Compliance erzielen im Durchschnitt 5-15% höhere Bewertungen bei ESG-fokussierten Investoren.\n• Zugang zu nachhaltigen Finanzierungen: Green Bonds und nachhaltige Kredite bieten oft 20-50 Basispunkte günstigere Konditionen.\n• Markterweiterung: Compliance mit internationalen Standards eröffnet Zugang zu Märkten mit hohen ESG-Anforderungen (EU, Nordamerika).\n• Talentakquisition und -bindung: Authentische Nachhaltigkeitsstrategien stärken die Arbeitgeberattraktivität und reduzieren Recruiting- und Fluktuation-Kosten um bis zu 20%.\n\n🔄 ADVISORI's ROI-Optimierung:\n• Effiziente Implementierung: Unsere bewährten Methoden reduzieren die Implementierungszeit um 30-50% gegenüber internen Lösungen.\n• Risikoadjustierte Kostenplanung: Präzise Budgetierung basierend auf Ihrer spezifischen Risikoexposition und Lieferkettenstruktur.\n• Skalierbare Lösungen: Modulare Ansätze, die mit Ihrem Geschäftswachstum mitwachsen und langfristige Kostendegression ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie stellt ADVISORI sicher, dass unsere LkSG-Compliance-Strategie mit den sich dynamisch entwickelnden internationalen ESG-Regulierungen und Stakeholder-Erwartungen Schritt hält?",
        answer: "In einer Zeit rascher regulatorischer Entwicklungen – von der EU-Lieferkettenrichtlinie über die Corporate Sustainability Reporting Directive (CSRD) bis hin zu den sich verschärfenden US-amerikanischen und asiatischen ESG-Anforderungen – ist eine adaptive und zukunftssichere LkSG-Strategie überlebenswichtig. ADVISORI entwickelt Compliance-Frameworks, die nicht nur aktuelle Anforderungen erfüllen, sondern auch flexibel genug sind, um kommende regulatorische Entwicklungen zu antizipieren und zu integrieren.\n\n🔄 Proaktive Regulierungs-Antizipation:\n• Continuous Regulatory Monitoring: Unser dediziertes Regulatory Affairs Team überwacht kontinuierlich internationale ESG-Entwicklungen und bewertet deren Auswirkungen auf Ihre spezifische Branche und Geschäftstätigkeit.\n• Future-Proof Compliance Design: Entwicklung von Due Diligence-Systemen, die flexibel erweitert werden können, um neue Anforderungen (z.B. EU-Lieferkettenrichtlinie, Scope 3-Emissionen) zu integrieren.\n• Cross-Border Harmonisierung: Aufbau einheitlicher Standards, die sowohl deutsche LkSG-Anforderungen als auch internationale Best Practices (UN Global Compact, OECD-Leitsätze) erfüllen.\n• Technologie-Integration: Einsatz von KI-gestützten Monitoring-Tools zur frühzeitigen Erkennung von Compliance-Risiken und regulatorischen Änderungen.\n\n🌍 Internationale Alignment-Strategie:\n• Multi-Jurisdictional Mapping: Systematische Analyse und Harmonisierung verschiedener nationaler und internationaler ESG-Anforderungen für eine einheitliche globale Compliance-Strategie.\n• Stakeholder Engagement Excellence: Aufbau robuster Kommunikationskanäle mit Investoren, Kunden, NGOs und Regulatoren zur frühzeitigen Identifikation sich wandelnder Erwartungen.\n• Benchmark-orientierte Optimierung: Kontinuierlicher Vergleich mit Best-Practice-Unternehmen und Integration von Leading-Practice-Ansätzen in Ihre Compliance-Strategie.\n• Scenario Planning und Stress Testing: Regelmäßige Bewertung Ihrer Compliance-Resilienz gegenüber verschiedenen regulatorischen Entwicklungsszenarien.\n\n🚀 ADVISORI's Adaptive Excellence:\n• Modulare System-Architektur: Entwicklung flexibler Compliance-Infrastrukturen, die schnell an neue Anforderungen angepasst werden können.\n• Quarterly Strategy Reviews: Regelmäßige strategische Überprüfungen zur Anpassung Ihrer LkSG-Strategie an sich verändernde Markt- und Regulierungsbedingungen.\n• Knowledge Transfer und Capability Building: Kontinuierliche Weiterbildung Ihrer Teams zu neuen ESG-Trends und regulatorischen Entwicklungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI das Lieferkettengesetz von einer Compliance-Belastung zu einem strategischen Wettbewerbsvorteil und Enabler für nachhaltiges Geschäftswachstum?",
        answer: "ADVISORI verfolgt einen paradigmatischen Ansatz, der das LkSG von einer defensiven Compliance-Maßnahme zu einem proaktiven Wertschöpfungs- und Differenzierungsinstrument transformiert. Für progressive C-Level-Führungskräfte bedeutet dies, dass eine excellente LkSG-Umsetzung nicht nur Risiken minimiert, sondern aktiv neue Geschäftschancen schafft, Innovationen fördert und das Unternehmen als Leader in nachhaltiger Unternehmensführung positioniert.\n\n🚀 Von Compliance zu Strategic Advantage:\n• Supply Chain Innovation: Nutzung der Due Diligence-Prozesse zur Identifikation innovativer, nachhaltiger Lieferanten und Technologien, die Kosteneinsparungen und Qualitätsverbesserungen ermöglichen.\n• Market Differentiation: Aufbau einer authentischen Nachhaltigkeitsnarrative, die als starker Differenzierungsfaktor gegenüber Wettbewerbern wirkt und Premiumpositionierung ermöglicht.\n• Customer Co-Creation: Einbindung von Kunden in nachhaltige Wertschöpfungsprozesse, wodurch tiefere Kundenbeziehungen und neue Geschäftsmodelle entstehen.\n• Ecosystem Leadership: Positionierung als Branchenführer bei nachhaltigen Geschäftspraktiken, was Partnerschaften mit anderen Marktführern und Zugang zu exklusiven Netzwerken ermöglicht.\n\n💡 Strategic Value Creation durch ADVISORI:\n• Intelligence-driven Supplier Selection: Entwicklung datengetriebener Auswahlkriterien, die sowohl Compliance als auch Performance-Excellence sicherstellen und langfristige Wettbewerbsvorteile schaffen.\n• Circular Economy Integration: Beratung zur Integration von Kreislaufwirtschafts-Prinzipien in Ihre Lieferkette, wodurch Ressourceneffizienz gesteigert und neue Revenue Streams erschlossen werden.\n• Digital Transformation Acceleration: Nutzung der LkSG-Implementierung als Katalysator für die Digitalisierung von Beschaffungs- und Lieferketenprozessen.\n• Stakeholder Capital Building: Systematischer Aufbau von Vertrauen und Glaubwürdigkeit bei allen Stakeholdern, was sich direkt in verbessertem Zugang zu Kapital, Talenten und Märkten niederschlägt.\n\n📊 Messbare Business Impact Metriken:\n• Revenue Growth: Dokumentierte Umsatzsteigerungen durch Zugang zu ESG-fokussierten Märkten und Kundensegmenten.\n• Cost Optimization: Reduzierung von Beschaffungskosten durch effizientere, transparente Lieferantenbeziehungen.\n• Risk-adjusted Returns: Verbesserte risikoadjustierte Renditen durch reduzierte Lieferkettenvolatilität und erhöhte Planungssicherheit.\n• Brand Value Enhancement: Quantifizierbare Steigerung des Markenwerts durch authentische Nachhaltigkeitsführerschaft."
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
    console.log('✅ C-Level FAQs batch 1 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
