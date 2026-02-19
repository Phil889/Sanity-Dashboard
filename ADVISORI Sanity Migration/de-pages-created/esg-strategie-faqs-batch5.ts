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
    console.log('Updating ESG-Strategie page with C-Level FAQs batch 5 (German)...')
    
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
        _key: generateKey('faq', 17),
        question: "Wie unterstützt ADVISORI beim Aufbau einer datengetriebenen ESG-Performance-Kultur und welche Rolle spielen Analytics in der strategischen Entscheidungsfindung?",
        answer: "Datengetriebene ESG-Performance ist der Schlüssel für glaubwürdige, messbare und kontinuierlich verbesserte Nachhaltigkeit. ADVISORI entwickelt umfassende ESG-Analytics-Frameworks, die komplexe Nachhaltigkeitsdaten in strategische Insights umwandeln und eine evidenzbasierte ESG-Entscheidungskultur fördern. Unser Ansatz macht ESG-Performance transparent, vorhersagbar und steuerbar.\n\n📊 Advanced ESG-Analytics-Architektur:\n• Predictive ESG Modeling: Entwicklung fortschrittlicher prädiktiver Modelle, die zukünftige ESG-Performance und -Risiken basierend auf aktuellen Trends und Datenmustern vorhersagen können.\n• Real-Time ESG Intelligence: Implementation von Echtzeit-Analytics-Plattformen, die kontinuierliches Monitoring von ESG-KPIs ermöglichen und sofortige Alerts bei kritischen Abweichungen senden.\n• Multi-Source Data Integration: Aufbau integrierter Datenarchitekturen, die interne und externe ESG-Datenquellen harmonisieren und ganzheitliche Nachhaltigkeits-Insights generieren.\n• Causal Impact Analysis: Einsatz fortschrittlicher statistischer Methoden zur Identifikation kausaler Zusammenhänge zwischen ESG-Maßnahmen und Geschäftsergebnissen.\n\n🎯 Strategic Decision Support through ESG-Analytics:\n• ESG-Business Intelligence Dashboards: Entwicklung interaktiver Executive Dashboards, die komplexe ESG-Daten in verständliche, handlungsorientierte Insights übersetzen.\n• Scenario-Based Decision Modeling: Aufbau von Entscheidungsmodellen, die die Auswirkungen verschiedener ESG-Strategien auf Geschäftsergebnisse simulieren und optimieren.\n• Benchmarking und Competitive Intelligence: Systematische Analyse der ESG-Performance von Wettbewerbern und Identifikation von Best Practices und Marktchancen.\n• ROI-Attribution für ESG-Investitionen: Entwicklung methodischer Ansätze zur präzisen Messung des Return on Investment von ESG-Initiativen und -Programmen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Welche Best Practices empfiehlt ADVISORI für die Integration von ESG in die Produktentwicklung und wie können nachhaltige Innovationen systematisch gefördert werden?",
        answer: "ESG-Integration in die Produktentwicklung transformiert Innovationsprozesse und schafft nachhaltige Wettbewerbsvorteile. ADVISORI entwickelt systematische Ansätze zur Verankerung von Nachhaltigkeitsprinzipien in allen Phasen der Produktentwicklung – von der Ideenfindung bis zur Markteinführung. Unser Framework macht nachhaltige Innovation zum standardmäßigen Innovationsansatz.\n\n🔬 ESG-by-Design Innovation Framework:\n• Sustainability-First Ideation: Integration von ESG-Kriterien bereits in die frühen Ideenfindungsphasen durch Nachhaltigkeits-Challenges, Impact-Brainstorming und Purpose-driven Innovation Sessions.\n• Life Cycle Thinking Integration: Systematische Berücksichtigung des gesamten Produktlebenszyklus in der Entwicklung, von Rohstoffgewinnung über Nutzung bis hin zum End-of-Life-Management.\n• Circular Design Principles: Anwendung von Kreislaufdesign-Prinzipien wie Design for Disassembly, Material Recovery und Modularity für regenerative Produktkonzepte.\n• Social Impact Assessment: Integration sozialer Nachhaltigkeitsaspekte in die Produktentwicklung, einschließlich Accessibility, digitaler Inklusion und gesellschaftlicher Wertschöpfung.\n\n💡 Innovation Acceleration für ESG:\n• ESG Innovation Labs: Etablierung spezialisierter Innovationslabore, die ausschließlich auf nachhaltige Produktentwicklung fokussiert sind und interdisziplinäre ESG-Innovation fördern.\n• Sustainability Challenge Pipelines: Entwicklung systematischer Challenge-Pipelines, die ESG-Herausforderungen in konkrete Innovationsaufträge und Produktentwicklungsprojekte übersetzen.\n• External Ecosystem Integration: Aufbau strategischer Partnerschaften mit Cleantech-Startups, Forschungsinstituten und Nachhaltigkeits-Experten für beschleunigte ESG-Innovation.\n• Customer Co-Creation für Sustainability: Einbindung nachhaltigkeitsbewusster Kunden in Innovationsprozesse zur Entwicklung authentischer, marktrelevanter ESG-Produkte."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie gestaltet ADVISORI ESG-Transformation für Familienunternehmen und mittelständische Betriebe mit begrenzten Ressourcen?",
        answer: "Familienunternehmen und Mittelstand stehen vor besonderen Herausforderungen bei der ESG-Transformation: begrenzte Ressourcen, informelle Strukturen und oft generationenübergreifende Entscheidungsprozesse. ADVISORI hat spezialisierte Ansätze entwickelt, die die Stärken des Mittelstands nutzen und pragmatische, skalierbare ESG-Lösungen anbieten, die auch mit begrenzten Budgets umsetzbar sind.\n\n🏠 Mittelstandsspezifische ESG-Strategien:\n• Family Values-basierte ESG-Entwicklung: Aufbau von ESG-Strategien, die auf bestehenden Familienwerden und traditionellen Unternehmensethiken aufsetzen und diese in moderne Nachhaltigkeitsframeworks übersetzen.\n• Resource-Efficient Implementation: Entwicklung kosteneffizienter ESG-Lösungen, die maximalen Impact bei minimalem Ressourceneinsatz erzielen, einschließlich Low-Cost-High-Impact-Maßnahmen.\n• Pragmatic Compliance Approaches: Vereinfachte Compliance-Frameworks, die regulatorische Anforderungen erfüllen, ohne komplexe Bürokratie oder überdimensionierte Systeme zu erfordern.\n• Generational Alignment Strategies: Spezielle Change-Management-Ansätze, die verschiedene Generationen im Familienunternehmen für gemeinsame ESG-Ziele begeistern und integrieren.\n\n🤝 Kollaborative Mittelstands-ESG-Modelle:\n• Industry Cluster Collaboration: Aufbau regionaler oder branchenbezogener ESG-Kooperationen, die Kosten teilen und gemeinsame Nachhaltigkeitsinitiativen entwickeln.\n• Shared Service ESG-Platforms: Entwicklung geteilter ESG-Service-Plattformen für kleinere Unternehmen, die professionelle Nachhaltigkeitsdienstleistungen zu erschwinglichen Kosten anbieten.\n• Peer Learning Networks: Etablierung von Peer-Learning-Netzwerken zwischen ähnlichen Mittelstandsunternehmen für Erfahrungsaustausch und gemeinsames Lernen.\n• Supplier Development Programs: Unterstützung mittelständischer Unternehmen bei der ESG-Entwicklung ihrer eigenen Lieferantennetzwerke durch strukturierte Programme und Ressourcen-Sharing."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Welche langfristigen Trends sieht ADVISORI in der ESG-Landschaft und wie können Unternehmen sich schon heute auf die Nachhaltigkeitsanforderungen von morgen vorbereiten?",
        answer: "Die ESG-Landschaft entwickelt sich rasant und Unternehmen müssen heute Weichen für die Nachhaltigkeitsanforderungen der Zukunft stellen. ADVISORI identifiziert kritische Zukunftstrends und entwickelt Forward-Looking ESG-Strategien, die Unternehmen nicht nur für kommende Anforderungen positionieren, sondern auch First-Mover-Vorteile in aufkommenden Nachhaltigkeitsmärkten sichern.\n\n🔮 Emerging ESG-Megatrends:\n• Regenerative Business Models: Übergang von nachhaltig zu regenerativ – Geschäftsmodelle, die aktiv positive ökologische und soziale Impacts schaffen statt nur Schäden zu minimieren.\n• ESG-as-a-Service Economy: Entstehung spezialisierter ESG-Service-Ökosysteme, die Nachhaltigkeitsexpertise, -technologie und -kapazitäten als skalierbare Services anbieten.\n• Stakeholder Capitalism 2.0: Evolution zu erweiterten Stakeholder-Modellen, die auch zukünftige Generationen, nicht-menschliche Entitäten und planetare Grenzen als Stakeholder betrachten.\n• Digital ESG Identity: Entwicklung digitaler Nachhaltigkeitsidentitäten für Unternehmen, Produkte und Personen mit Blockchain-basierten, verifizierbaren ESG-Credentials.\n\n🚀 Future-Readiness ESG-Strategien:\n• Anticipatory Regulation Preparation: Proaktive Vorbereitung auf absehbare regulatorische Entwicklungen wie erweiterte EU-Taxonomie, globale Klimaregulierung und soziale Due-Diligence-Gesetze.\n• Next-Generation Technology Integration: Frühzeitige Integration aufkommender Technologien wie Quantum Computing für Klimamodellierung, Advanced AI für ESG-Prediction und Biotech für nachhaltige Materialien.\n• Planetary Boundary Business Alignment: Strategische Ausrichtung von Geschäftsmodellen an planetaren Grenzen und wissenschaftsbasierten Nachhaltigkeitszielen für langfristige Viabilität.\n• ESG Innovation Venture Building: Aufbau interner Venture-Strukturen zur Entwicklung und Kommerzialisierung disruptiver Nachhaltigkeitsinnovationen und -geschäftsmodelle."
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
