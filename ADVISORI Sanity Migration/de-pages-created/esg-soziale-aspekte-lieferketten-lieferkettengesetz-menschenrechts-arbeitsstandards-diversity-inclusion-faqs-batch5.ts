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
    console.log('Updating ESG Soziale Aspekte page with C-Level FAQs batch 5 (German)...')
    
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
        _key: generateKey('faq', 17),
        question: "Stakeholder Capitalism und Social Purpose werden zur neuen Normalität. Wie unterstützt ADVISORI bei der authentischen Transformation von Shareholder- zu Stakeholder-Value-Orientierung?",
        answer: "Der Paradigmenwechsel vom Shareholder- zum Stakeholder-Capitalism stellt eine der fundamentalsten Transformationen der modernen Geschäftswelt dar. Diese Neuausrichtung erfordert nicht nur strukturelle und strategische Veränderungen, sondern einen grundlegenden Wandel der Unternehmensphilosophie und -kultur. ADVISORI hat einen Authentic Stakeholder Transformation Approach entwickelt, der diese tiefgreifende Neuorientierung systematisch begleitet.\n\n🌐 Stakeholder Capitalism als Paradigmenwechsel:\n• Multi-Dimensional Value Creation: Berücksichtigung von Kunden, Mitarbeitern, Communities, Umwelt und Gesellschaft als gleichberechtigte Wertschöpfungspartner neben Aktionären.\n• Long-term Orientation: Fokusverschiebung von kurzfristigen Quartalszielen zu nachhaltigen, generationenübergreifenden Wertschöpfungsmodellen.\n• Integrated Decision-Making: Systematische Integration von Stakeholder-Interessen in alle strategischen und operativen Entscheidungsprozesse.\n• Transparent Accountability: Offene Kommunikation über Trade-offs und Entscheidungsprozesse zwischen verschiedenen Stakeholder-Interessen.\n\n🎯 ADVISORI's Transformation Framework:\n• Stakeholder Ecosystem Mapping: Systematische Identifikation und Priorisierung aller relevanten Stakeholder-Gruppen und ihrer Interessensdimensionen.\n• Purpose Articulation & Activation: Entwicklung authentischer Unternehmenszwecke, die über Profit hinausgehen und echten gesellschaftlichen Mehrwert schaffen.\n• Governance Transformation: Neugestaltung von Governance-Strukturen zur systematischen Berücksichtigung aller Stakeholder-Interessen.\n• Impact Measurement Integration: Implementation ganzheitlicher Bewertungssysteme, die sozialen und ökologischen Impact gleichwertig zu finanziellen Kennzahlen messen.\n\n💼 Praktische Implementierungsstrategien:\n• Stakeholder Advisory Councils: Etablierung formeller Beratungsgremien mit Vertretern verschiedener Stakeholder-Gruppen für direkte Einflussnahme auf Unternehmensentscheidungen.\n• Integrated Reporting Excellence: Entwicklung transparenter Berichterstattung, die finanzielle Performance mit sozialen und ökologischen Impacts verknüpft.\n• Employee Ownership Programs: Implementierung von Mitarbeiterbeteiligungsmodellen für geteilte Verantwortung und Wertschöpfung.\n• Community Partnership Models: Aufbau echter Partnerschaften mit lokalen Communities als Co-Creator von Wert und Impact.\n\n🚀 Business Case für Stakeholder-Value-Orientierung:\n• Enhanced Resilience: Stakeholder-orientierte Unternehmen zeigen 25-40% höhere Krisenresilienz durch diversifizierte Unterstützungsbasen.\n• Innovation Acceleration: Einbindung verschiedener Stakeholder-Perspektiven führt zu 30-50% mehr innovativen Lösungen und Geschäftsmodellen.\n• Risk Mitigation: Proaktives Stakeholder-Management reduziert Reputations-, Regulierungs- und Operationsrisiken signifikant.\n• Premium Valuation: Unternehmen mit authentischem Stakeholder-Focus erzielen 15-25% höhere Bewertungen durch langfristige Wertstabilität."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Data Privacy und digitale Menschenrechte werden zu kritischen sozialen ESG-Faktoren. Wie integriert ADVISORI Datenschutz und digitale Ethik in umfassende soziale Nachhaltigkeitsstrategien?",
        answer: "Die Digitalisierung hat neue Dimensionen sozialer Verantwortung geschaffen, die weit über traditionelle Datenschutz-Compliance hinausgehen. Digitale Menschenrechte, Algorithmus-Fairness und Daten-Souveränität entwickeln sich zu zentralen Elementen sozialer ESG-Performance. ADVISORI hat einen Digital Rights & Ethics Integration Approach entwickelt, der diese neuen Verantwortungsbereiche systematisch in soziale Nachhaltigkeitsstrategien einbettet.\n\n🔐 Digitale Menschenrechte als soziale ESG-Dimension:\n• Data Sovereignty: Respekt für individuelle und kollektive Kontrolle über persönliche Daten als fundamentales Recht.\n• Algorithmic Justice: Sicherstellung fairer, transparenter und nicht-diskriminierender automatisierter Entscheidungsprozesse.\n• Digital Inclusion: Gewährleistung gleichberechtigten Zugangs zu digitalen Technologien und Dienstleistungen für alle gesellschaftlichen Gruppen.\n• Privacy by Design: Integration von Datenschutz und digitalen Rechten als Grundprinzipien in alle technologischen Entwicklungen.\n\n🌐 ADVISORI's Digital Ethics Framework:\n• Human-Centric Technology Development: Positionierung menschlicher Würde und Rechte als zentrale Designprinzipien für alle digitalen Lösungen.\n• Ethical AI Governance: Entwicklung umfassender Governance-Strukturen für verantwortungsvolle KI-Entwicklung und -Einsatz.\n• Data Justice Programs: Implementierung von Programmen zur fairen Verteilung von Nutzen und Kontrolle über Datenverwendung.\n• Digital Literacy Empowerment: Befähigung von Stakeholdern zum selbstbestimmten Umgang mit digitalen Technologien und Daten.\n\n🎯 Innovative Ansätze für digitale soziale Verantwortung:\n• Participatory Technology Assessment: Einbindung betroffener Communities in die Bewertung und Gestaltung neuer Technologien.\n• Digital Rights Impact Assessments: Systematische Bewertung der Auswirkungen digitaler Projekte auf Menschenrechte und soziale Gerechtigkeit.\n• Transparent Algorithm Auditing: Regelmäßige, öffentliche Überprüfung von Algorithmen auf Fairness, Bias und soziale Auswirkungen.\n• Community Data Ownership Models: Entwicklung von Modellen, die Communities Kontrolle und Nutzen aus ihren aggregierten Daten geben.\n\n💡 Business Value digitaler sozialer Verantwortung:\n• Trust Premium: Unternehmen mit starken digitalen Ethik-Standards genießen 20-30% höheres Vertrauen bei Kunden und Partnern.\n• Regulatory Anticipation: Proaktive digitale Ethik-Praktiken bereiten auf kommende Regulierungen vor und vermeiden Compliance-Risiken.\n• Innovation Differentiation: Ethical-by-Design-Ansätze schaffen einzigartige Wettbewerbsvorteile und neue Marktchancen.\n• Talent Attraction: Digital-native Talente bevorzugen Arbeitgeber mit klaren digitalen Ethik-Standards und -Praktiken."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Climate Justice und Just Transition verbinden ökologische mit sozialen ESG-Zielen. Wie entwickelt ADVISORI integrierte Strategien, die Klimaschutz mit sozialer Gerechtigkeit harmonisieren?",
        answer: "Der Übergang zu einer klimaneutralen Wirtschaft birgt sowohl enorme Chancen als auch erhebliche Risiken für soziale Gerechtigkeit. Climate Justice und Just Transition-Prinzipien erfordern, dass Klimaschutzmaßnahmen nicht auf Kosten vulnerabler Gruppen gehen, sondern diese stärken und befähigen. ADVISORI hat einen Climate-Social Integration Methodology entwickelt, der ökologische und soziale ESG-Ziele systematisch verknüpft.\n\n🌍 Climate Justice als soziale Imperative:\n• Equitable Transition: Sicherstellung, dass der Wandel zu nachhaltigen Geschäftsmodellen alle gesellschaftlichen Gruppen einbezieht und niemanden zurücklässt.\n• Vulnerability Protection: Besonderer Schutz und Unterstützung für Communities, die überproportional von Klimawandel und Strukturwandel betroffen sind.\n• Benefit Sharing: Faire Verteilung der Vorteile aus grünen Technologien und nachhaltigen Geschäftsmodellen.\n• Democratic Participation: Einbindung betroffener Communities in Entscheidungen über Klimaschutzmaßnahmen und deren Umsetzung.\n\n🤝 ADVISORI's Climate-Social Integration Approach:\n• Intersectional Impact Assessment: Systematische Analyse der Wechselwirkungen zwischen Klimamaßnahmen und sozialen Auswirkungen auf verschiedene Gruppen.\n• Community-Centered Transition Planning: Entwicklung von Transformationsplänen mit betroffenen Communities als zentrale Akteure und Entscheidungsträger.\n• Green Jobs Creation: Strategische Schaffung hochwertiger, inklusiver Arbeitsplätze in nachhaltigen Sektoren.\n• Cultural Sensitivity Integration: Berücksichtigung kultureller Werte und traditionellen Wissens in Klimaschutz- und Nachhaltigkeitsstrategien.\n\n🌱 Innovative Just Transition-Modelle:\n• Community Energy Cooperatives: Aufbau genossenschaftlicher Energieprojekte, die lokale Kontrolle und Nutzen aus der Energiewende sichern.\n• Regenerative Economy Hubs: Etablierung lokaler Zentren für nachhaltige Wirtschaftsaktivitäten mit Fokus auf Community-Ownership.\n• Indigenous Knowledge Integration: Systematische Einbindung traditionellen ökologischen Wissens in moderne Nachhaltigkeitsstrategien.\n• Climate Adaptation Partnerships: Aufbau von Partnerschaften für gemeinsame Klimaanpassungsmaßnahmen zwischen Unternehmen und vulnerablen Communities.\n\n📈 Strategische Vorteile integrierter Climate-Social-Ansätze:\n• Enhanced Social License: Klimaschutzmaßnahmen mit sozialer Gerechtigkeit schaffen stärkere Community-Unterstützung und Legitimität.\n• Risk Resilience: Integration sozialer Faktoren in Klimastrategien reduziert Implementierungsrisiken und Widerstände.\n• Innovation Synergies: Kombination ökologischer und sozialer Ziele generiert innovative Lösungen und neue Geschäftsmöglichkeiten.\n• Holistic Value Creation: Integrierte Ansätze schaffen Mehrwert für Umwelt, Gesellschaft und Business gleichzeitig."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Globale Lieferkettenkrisen haben die Vulnerabilität traditioneller Sourcing-Modelle offengelegt. Wie unterstützt ADVISORI beim Aufbau resilienter, sozial verantwortlicher Lieferketten, die auch unter Krisenbedingungen hohe ethische Standards aufrechterhalten?",
        answer: "Die COVID-19-Pandemie, geopolitische Spannungen und Klimaextreme haben die Fragilität globaler Lieferketten drastisch aufgezeigt. Gleichzeitig haben diese Krisen verdeutlicht, wie schnell soziale Standards und Arbeitnehmerrechte unter Druck geraten können. ADVISORI hat einen Crisis-Resilient Ethical Supply Chain Approach entwickelt, der Widerstandsfähigkeit mit unverhandelbaren sozialen Standards verbindet.\n\n⚡ Krisenvulnerabilitäten traditioneller Lieferketten:\n• Single-Source Dependencies: Übermäßige Abhängigkeit von einzelnen Lieferanten oder Regionen schafft systemische Risiken.\n• Cost-Optimization Bias: Einseitige Fokussierung auf Kostenminimierung auf Kosten von Resilienz und sozialen Standards.\n• Limited Visibility: Mangelnde Transparenz in mehrstufigen Lieferketten erschwert Krisenreaktion und Ethik-Monitoring.\n• Reactive Crisis Management: Unzureichende Vorbereitung auf Disruptionen führt zu Ad-hoc-Entscheidungen, die soziale Standards gefährden.\n\n🛡️ ADVISORI's Resilient Ethical Supply Chain Framework:\n• Adaptive Diversification: Strategische Diversifizierung von Lieferanten, Regionen und Sourcing-Modellen ohne Kompromisse bei sozialen Standards.\n• Social Standard Resilience: Entwicklung von Lieferkettenstrukturen, die auch unter Krisenbedingungen Menschenrechte und Arbeitsstandards gewährleisten.\n• Collaborative Risk Sharing: Aufbau von Partnerschaften mit Lieferanten für geteilte Verantwortung und gegenseitige Unterstützung in Krisenzeiten.\n• Technology-Enhanced Transparency: Einsatz fortschrittlicher Technologien für Echtzeit-Monitoring sozialer Standards auch in komplexen, mehrstufigen Lieferketten.\n\n🤝 Innovative Resilienz-Strategien:\n• Circular Supply Networks: Aufbau zirkulärer Lieferantennetzwerke, die lokale Kreisläufe und Redundanzen schaffen.\n• Social Impact Bonds: Finanzierungsmodelle, die Lieferanten für die Aufrechterhaltung sozialer Standards auch in Krisenzeiten incentivieren.\n• Community-Anchored Sourcing: Etablierung tiefer, langfristiger Beziehungen zu lokalen Communities und Produzenten für erhöhte Stabilität.\n• Predictive Crisis Intelligence: Implementation von AI-gestützten Systemen zur Früherkennung sozialer Risiken und Lieferkettenprobleme.\n\n🌟 Transformation zu regenerativen Lieferketten:\n• Beyond Compliance: Entwicklung von Lieferketten, die nicht nur 'weniger Schaden' anrichten, sondern aktiv positive soziale Impacts generieren.\n• Supplier Development Programs: Investition in die Kapazitätsentwicklung von Lieferanten für höhere soziale Standards und Krisenresilienz.\n• Fair Trade Plus Models: Weiterentwicklung von Fair-Trade-Konzepten zu umfassenden, resilienten Partnerschaftsmodellen.\n• Impact-Linked Procurement: Verknüpfung von Beschaffungsentscheidungen mit messbaren sozialen und ökologischen Impacts."
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
