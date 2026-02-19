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
    console.log('Updating ESG Soziale Aspekte page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-soziale-aspekte-lieferketten-lieferkettengesetz-menschenrechts-arbeitsstandards-diversity-inclusion' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-soziale-aspekte-lieferketten-lieferkettengesetz-menschenrechts-arbeitsstandards-diversity-inclusion" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Next-Generation Workforce-Strategien erfordern neue Ansätze für Diversity & Inclusion. Wie bereitet ADVISORI Unternehmen auf die sich wandelnden Demografien, Arbeitspräferenzen und sozialen Erwartungen der Gen Z und Alpha vor?",
        answer: "Die Arbeitslandschaft durchläuft eine demografische und kulturelle Revolution. Gen Z und die nachfolgende Generation Alpha bringen radikal neue Erwartungen an Arbeitgeber mit sich: authentische Werteausrichtung, flexible Arbeitsmodelle, kontinuierliche Entwicklungsmöglichkeiten und genuine soziale Impact-Orientierung. ADVISORI hat einen Future Workforce Readiness Approach entwickelt, der Unternehmen auf diese fundamentalen Veränderungen vorbereitet.\n\n🌟 Charakteristika der Next-Generation Workforce:\n• Purpose-driven Career Choices: Junge Talente priorisieren Sinnhaftigkeit und gesellschaftlichen Impact über reine Gehaltsmaxierung.\n• Digital-native Collaboration: Erwartung an nahtlose, technologie-gestützte Zusammenarbeit und flexible, hybride Arbeitsmodelle.\n• Continuous Learning Mindset: Forderung nach kontinuierlichen Weiterbildungsmöglichkeiten und karrierebegleitender Kompetenzentwicklung.\n• Authentic Diversity Expectations: Null-Toleranz für oberflächliche D&I-Initiativen; Erwartung an genuine, messbare Inklusion und Gleichberechtigung.\n\n🚀 ADVISORI's Future-Ready D&I-Strategien:\n• Gen Z-centric Employee Value Proposition: Entwicklung authentischer Arbeitgebermarken, die echte Werteausrichtung und Impact-Orientierung kommunizieren.\n• Flexible Work Architecture: Design adaptiver Arbeitsstrukturen, die verschiedene Arbeitsstile, Lebensphasen und persönliche Präferenzen accommodieren.\n• Reverse Mentoring Programs: Etablierung bidirektionaler Mentoring-Strukturen, die jüngere Mitarbeiter als Kulturwandel-Katalysatoren positionieren.\n• Impact-driven Career Pathways: Schaffung von Karrierewegen, die persönliche Entwicklung mit gesellschaftlichem Impact verknüpfen.\n\n🎯 Innovative Engagement-Formate für junge Talente:\n• Social Impact Sabbaticals: Ermöglichung bezahlter Auszeiten für gesellschaftliches Engagement und persönliche Impact-Projekte.\n• Co-Creation Innovation Labs: Einbindung junger Mitarbeiter in die Entwicklung neuer Produkte, Services und Geschäftsmodelle mit sozialer Wirkung.\n• Advocacy Leadership Programs: Befähigung von Next-Gen-Talenten als interne Changemaker und Diversity-Advocates.\n• Digital-first Learning Ecosystems: Implementation immersiver, gameifizierter Lernplattformen für kontinuierliche Kompetenzentwicklung.\n\n💡 Strategische Wettbewerbsvorteile durch Next-Gen-Readiness:\n• Talent Magnetism: Erhöhte Attraktivität für Top-Talente der kommenden Generationen als Frühindikatoren für Markt- und Gesellschaftstrends.\n• Innovation Acceleration: Nutzung der Digital-Native-Perspektiven für beschleunigte Digitalisierung und Geschäftsmodell-Innovation.\n• Cultural Agility: Aufbau adaptiver Unternehmenskulturen, die proaktiv auf gesellschaftliche Veränderungen reagieren.\n• Future-oriented Leadership Pipeline: Entwicklung von Führungskräften, die natürlich in diversen, Purpose-driven Umgebungen navigieren können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Regulatorische Entwicklungen wie die EU-Taxonomie und CSRD verstärken den Druck auf soziale ESG-Performance. Wie antizipiert ADVISORI zukünftige Regulierungsänderungen und positioniert Mandanten als Compliance-Leader?",
        answer: "Die regulatorische Landschaft für soziale ESG-Aspekte entwickelt sich mit beispielloser Geschwindigkeit und Komplexität. Von der EU-Taxonomie über die Corporate Sustainability Reporting Directive (CSRD) bis hin zu nationalen Lieferkettengesetzen entstehen ineinandergreifende Compliance-Anforderungen. ADVISORI hat einen Regulatory Foresight & Anticipatory Compliance Approach entwickelt, der Mandanten als Vorreiter positioniert.\n\n📜 Regulatorische Trend-Analyse und Zukunftsperspektiven:\n• Verschärfung der Due-Diligence-Pflichten: Erwartung detaillierterer Menschenrechts- und Arbeitsstandard-Nachweise entlang der gesamten Wertschöpfungskette.\n• Standardisierung von ESG-Metriken: Bewegung hin zu einheitlichen, vergleichbaren sozialen Impact-Indikatoren und Berichterstattungsstandards.\n• Sanktionsverschärfung: Drastische Erhöhung von Bußgeldern und rechtlichen Konsequenzen bei Nicht-Compliance mit sozialen ESG-Anforderungen.\n• Stakeholder-Rights-Expansion: Stärkung der Rechte von Arbeitnehmern, Communities und NGOs bei der Durchsetzung sozialer Standards.\n\n🔮 ADVISORI's Regulatory Foresight Methodology:\n• Horizon Scanning: Systematische Überwachung regulatorischer Pipeline-Entwicklungen in verschiedenen Jurisdiktionen für frühzeitige Trendidentifikation.\n• Policy Impact Modeling: Quantitative Bewertung potenzieller Auswirkungen geplanter Regulierungen auf spezifische Geschäftsmodelle und Branchen.\n• Stakeholder Intelligence: Aufbau von Netzwerken zu Regulatoren, Policy-Makern und Standardsetzern für privilegierte Einblicke in Entwicklungsprozesse.\n• Scenario-based Compliance Planning: Entwicklung flexibler Compliance-Architekturen, die verschiedene regulatorische Zukunftsszenarien accommodieren.\n\n⚡ Proaktive Positionierung als Compliance-Leader:\n• Voluntary Standards Excellence: Übererfüllung aktueller Mindestanforderungen als Vorbereitung auf zukünftige Verschärfungen.\n• Industry Best Practice Definition: Aktive Mitwirkung bei der Entwicklung neuer Branchenstandards und Best-Practice-Guidelines.\n• Regulatory Sandbox Participation: Engagement in regulatorischen Pilotprogrammen für frühzeitige Erfahrungen mit neuen Compliance-Ansätzen.\n• Thought Leadership Positioning: Etablierung als Meinungsführer in sozialen ESG-Diskussionen durch Research, Publikationen und Konferenz-Auftritte.\n\n🏆 Strategische Vorteile durch Anticipatory Compliance:\n• Regulatory Risk Mitigation: Minimierung von Compliance-Risiken durch frühzeitige Vorbereitung auf kommende Anforderungen.\n• Implementation Cost Advantage: Niedrigere Implementierungskosten durch gestaffelte, vorausschauende Anpassungen statt Last-Minute-Compliance-Sprints.\n• Market Leadership Positioning: Reputation als verantwortungsvoller, vorausschauender Marktführer bei Stakeholdern und Wettbewerbern.\n• Regulatory Influence: Möglichkeit zur Mitgestaltung regulatorischer Entwicklungen durch frühzeitige Expertise und Engagement."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Circular Economy-Prinzipien beeinflussen zunehmend soziale Lieferkettenpraktiken. Wie integriert ADVISORI Kreislaufwirtschafts-Ansätze in soziale ESG-Strategien für regenerative Geschäftsmodelle?",
        answer: "Die Circular Economy revolutioniert nicht nur ökologische Nachhaltigkeitspraktiken, sondern schafft auch neue Paradigmen für soziale Verantwortung und Arbeitsgerechtigkeit. Kreislaufwirtschafts-Modelle erfordern fundamental neue Ansätze für Lieferkettenbeziehungen, Arbeitsplatzgestaltung und Community-Engagement. ADVISORI hat einen Social Circular Economy Integration Approach entwickelt, der regenerative Geschäftsmodelle mit sozialer Gerechtigkeit verknüpft.\n\n🔄 Soziale Dimensionen der Circular Economy:\n• Just Transition Principles: Sicherstellung, dass der Übergang zu Kreislaufwirtschaft bestehende Arbeitnehmer nicht benachteiligt, sondern neue Chancen schafft.\n• Community-based Value Chains: Aufbau lokaler, partizipativer Wertschöpfungsketten, die Communities als aktive Partner einbinden.\n• Regenerative Labor Practices: Entwicklung von Arbeitsmodellen, die nicht nur 'weniger Schaden' anrichten, sondern aktiv soziale Regeneration fördern.\n• Inclusive Innovation: Gestaltung von Kreislaufwirtschafts-Innovationen unter Einbeziehung marginalisierter Gruppen und lokaler Expertise.\n\n🌱 ADVISORI's Social Circular Framework:\n• Community-Centric Design: Entwicklung von Circular-Economy-Initiativen mit Communities als zentralen Stakeholdern und Nutznießern.\n• Skills Transformation Programs: Systematische Umschulung und Qualifizierung für neue, kreislaufwirtschafts-orientierte Berufsfelder.\n• Local Value Retention: Maximierung der lokalen Wertschöpfung und Arbeitsplatzschaffung durch Circular-Economy-Praktiken.\n• Social Impact Amplification: Integration sozialer Impact-Ziele in alle Aspekte der Kreislaufwirtschafts-Implementierung.\n\n🤝 Innovative Kooperationsmodelle für soziale Kreislaufwirtschaft:\n• Cooperative Supply Networks: Aufbau genossenschaftlicher Lieferanten-Netzwerke für geteilte Ownership und demokratische Governance.\n• Social Procurement Circles: Entwicklung von Beschaffungskreisläufen, die soziale Unternehmen und Impact-orientierte Lieferanten priorisieren.\n• Community Repair & Refurbishment Hubs: Etablierung lokaler Zentren für Reparatur, Aufarbeitung und Wiederverwertung mit Arbeitsplatzschaffung.\n• Inclusive Waste-to-Value Chains: Gestaltung von Abfall-zu-Wert-Ketten unter Einbindung informeller Recycling-Arbeiter und Waste-Picker.\n\n📈 Business Case für Social Circular Economy:\n• Enhanced Brand Resilience: Stärkung der Markenresilienz durch authentische Community-Einbindung und lokale Verankerung.\n• Risk Diversification: Reduktion von Lieferkettenrisiken durch lokale, diversifizierte Wertschöpfungsnetze.\n• Innovation Acceleration: Beschleunigung von Innovationen durch Einbindung lokaler Expertise und Community-Insights.\n• Premium Market Access: Zugang zu wachsenden Märkten für regenerative, sozial-verantwortliche Produkte und Services."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Post-Pandemie Mental Health und Employee Wellbeing sind zu kritischen Geschäftsfaktoren geworden. Wie entwickelt ADVISORI ganzheitliche Wellbeing-Strategien, die gleichzeitig Mitarbeitergesundheit und Geschäftsperformance optimieren?",
        answer: "Die COVID-19-Pandemie hat Mental Health und Employee Wellbeing von peripheren HR-Themen zu zentralen Geschäftsimperativen transformiert. Erhöhte Stress-Level, veränderte Arbeitsmodelle und verschärfte Work-Life-Balance-Herausforderungen erfordern fundamentale Neugestaltung von Arbeitsplatz-Wellbeing. ADVISORI hat einen Holistic Wellbeing Excellence Approach entwickelt, der Mitarbeitergesundheit als strategischen Werttreiber positioniert.\n\n🧠 Post-Pandemie Wellbeing-Herausforderungen:\n• Mental Health Crisis: Dramatische Zunahme von Angststörungen, Depressionen und Burnout in der Arbeitswelt.\n• Hybrid Work Complexity: Neue Herausforderungen durch Remote- und Hybrid-Arbeitsmodelle für soziale Verbindung und Work-Life-Balance.\n• Generational Wellbeing Gaps: Unterschiedliche Wellbeing-Bedürfnisse und -Erwartungen verschiedener Generationen im Arbeitsumfeld.\n• Stigma and Disclosure Challenges: Anhaltende Stigmatisierung psychischer Probleme und Barrieren bei der Inanspruchnahme von Unterstützung.\n\n💚 ADVISORI's Holistic Wellbeing Framework:\n• Preventive Mental Health Design: Proaktive Gestaltung von Arbeitsumgebungen und -prozessen zur Prävention von Mental Health-Problemen.\n• Personalized Wellbeing Journeys: Entwicklung individualisierter Wellbeing-Programme, die verschiedene Persönlichkeitstypen und Lebenssituationen berücksichtigen.\n• Psychologically Safe Workplaces: Schaffung von Arbeitsumgebungen, die offene Kommunikation über Wellbeing-Herausforderungen fördern.\n• Manager as Wellbeing Champions: Befähigung von Führungskräften als erste Ansprechpartner und Unterstützer für Mitarbeiter-Wellbeing.\n\n🔬 Evidence-based Wellbeing Interventionen:\n• Neuroscience-informed Workplace Design: Gestaltung von Arbeitsräumen und -prozessen basierend auf neurowissenschaftlichen Erkenntnissen.\n• Digital Therapeutics Integration: Einsatz evidenzbasierter Digital-Health-Lösungen für skalierbare Mental Health-Unterstützung.\n• Biometric Wellbeing Tracking: Ethische Nutzung von Wearables und Gesundheitsdaten für proaktive Wellbeing-Interventionen.\n• Mindfulness and Resilience Training: Systematische Programme zur Stärkung emotionaler Intelligenz und Stressresilienz.\n\n📊 Business Impact von Wellbeing Excellence:\n• Productivity Optimization: Wellbeing-Programme können Produktivität um 15-25% steigern durch reduzierte Absenteeism und erhöhtes Engagement.\n• Talent Retention: Starke Wellbeing-Kultur reduziert Mitarbeiterfluktuation um 30-40% und senkt Rekrutierungskosten signifikant.\n• Innovation Boost: Psychologisch sichere, wellbeing-orientierte Umgebungen fördern Kreativität und innovative Problemlösung.\n• Healthcare Cost Reduction: Präventive Wellbeing-Maßnahmen können Gesundheitskosten um 20-30% reduzieren und Krankenstand minimieren."
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
