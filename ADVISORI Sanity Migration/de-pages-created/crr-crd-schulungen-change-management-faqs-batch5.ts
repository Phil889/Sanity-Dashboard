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
    console.log('Updating CRR/CRD Schulungen & Change Management page with FAQs batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'crr-crd-schulungen-change-management' })
    
    if (!existingDoc) {
      throw new Error('Document "crr-crd-schulungen-change-management" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können wir eine nachhaltige Lernkultur für kontinuierliche regulatorische Anpassungsfähigkeit etablieren?",
        answer: "Die Etablierung einer nachhaltigen Lernkultur ist der Schlüssel für langfristige regulatorische Anpassungsfähigkeit jenseits einzelner Schulungsmaßnahmen. Eine solche Kultur transformiert die Organisation von reaktiver Compliance hin zu proaktiver regulatorischer Intelligenz und ermöglicht kontinuierliche Anpassung an sich stetig wandelnde CRR/CRD-Anforderungen.\n\n🌱 Fundamente einer regulatorischen Lernkultur:\n• Leadership Commitment: Verankern Sie sichtbares und konsequentes Engagement der Führungsebene für kontinuierliches regulatorisches Lernen durch persönliche Beteiligung, Ressourcenbereitstellung und aktive Vorbildfunktion.\n• Psychologische Sicherheit fördern: Schaffen Sie ein Umfeld, in dem regulatorische Fragen, Unsicherheiten und potenzielle Schwachstellen offen angesprochen werden können, ohne Angst vor negativen Konsequenzen.\n• Feedbackschleifen institutionalisieren: Etablieren Sie systematische Mechanismen zur Rückmeldung über die praktische Anwendbarkeit regulatorischen Wissens und zur kontinuierlichen Verbesserung von Schulungsansätzen.\n• Neugier als Wert verankern: Fördern Sie eine grundlegende Haltung der Neugierde gegenüber regulatorischen Entwicklungen und deren Implikationen als Teil der Unternehmenskultur.\n\n🔄 Organisationale Enabler für kontinuierliches regulatorisches Lernen:\n• Lernzeit-Budgets: Implementieren Sie dedizierte Zeitkontingente für selbstgesteuertes regulatorisches Lernen, die allen Mitarbeitern zur Verfügung stehen und aktiv gefördert werden.\n• Communities of Practice: Etablieren Sie formale und informelle Netzwerke für den Austausch zu regulatorischen Themen über Hierarchie- und Abteilungsgrenzen hinweg.\n• Experimentierräume schaffen: Richten Sie geschützte Umgebungen ein, in denen neue regulatorische Konzepte und Umsetzungsansätze risikofrei erprobt werden können.\n• Reflexionsroutinen: Integrieren Sie strukturierte Reflexionsprozesse in regulatorische Projekte und Implementierungen, um systematisches Lernen aus Erfahrungen zu fördern.\n\n🏆 Anreizsysteme und Anerkennung für regulatorisches Lernen:\n• Regulatorische Kompetenz in Karrierepfaden: Verankern Sie regulatorisches Wissen und Lernbereitschaft explizit in Beförderungskriterien und Karriereentwicklungspfaden.\n• Sichtbare Anerkennung: Implementieren Sie Formate zur öffentlichen Würdigung von regulatorischen Lerninitiativen, Wissensteilung und innovativen Compliance-Ansätzen.\n• Peer Recognition: Fördern Sie kollegiale Anerkennung für regulatorisches Engagement durch peer-basierte Nominierungen und Auszeichnungen.\n• Storytelling: Teilen Sie aktiv Erfolgsgeschichten, die den Wert kontinuierlichen regulatorischen Lernens für individuelle Entwicklung und organisationalen Erfolg verdeutlichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können wir unsere Schulungsprogramme für die speziellen Bedürfnisse verschiedener Stakeholder-Gruppen (Vorstand, Fachexperten, allgemeine Mitarbeiter) optimieren?",
        answer: "Eine präzise Differenzierung von CRR/CRD-Schulungsprogrammen nach Stakeholder-Bedürfnissen ist entscheidend für maximale Wirksamkeit und Ressourceneffizienz. Die gezielte Anpassung von Inhalten, Formaten und Lernmethoden an die spezifischen Anforderungen und Kontexte unterschiedlicher Zielgruppen optimiert den Lerntransfer und die praktische Anwendung regulatorischen Wissens.\n\n👔 Vorstandsebene - Strategische Implikationen fokussieren:\n• Executive Briefing-Format: Entwickeln Sie kompakte, hochrelevante Formate (60-90 Minuten), die direkt auf strategische Implikationen, Governance-Verantwortung und Business Impact fokussieren.\n• Peer Learning fördern: Organisieren Sie moderierte Austauschrunden mit Vorständen anderer Institute zu regulatorischen Herausforderungen und strategischen Antworten.\n• Szenario-basierte Entscheidungssimulationen: Gestalten Sie interaktive Simulationen, die komplexe regulatorische Entscheidungssituationen mit strategischen Trade-offs für die Vorstandsebene erlebbar machen.\n• Dashboard-Approach: Konzipieren Sie visuelle Steuerungsinstrumente, die regulatorische Risiken, Compliance-Status und Umsetzungsfortschritte auf Executive-Level transparent machen.\n\n⚙️ Fachexperten - Technische Tiefe und praktische Anwendung verbinden:\n• Technical Deep Dives: Bieten Sie detaillierte technische Schulungen zu spezifischen CRR/CRD-Teilbereichen mit Fokus auf methodische Grundlagen, Berechnungslogiken und Interpretationsspielräume.\n• Regulatory War Gaming: Implementieren Sie kollaborative Formate, in denen Fachexperten verschiedener Bereiche komplexe regulatorische Herausforderungen gemeinsam lösen.\n• Regulatorische Fallstudien-Werkstätten: Entwickeln Sie praxisnahe Fallstudien, die reale Implementierungsherausforderungen abbilden und verschiedene Lösungsansätze vergleichend bewerten.\n• Expert-to-Expert Sessions: Organisieren Sie Austauschformate mit externen Regulierungsexperten, Aufsichtsbehörden und Beratern zu komplexen Auslegungsfragen und Best Practices.\n\n👥 Mittleres Management - Umsetzungsverantwortung und Multiplikatorenfunktion stärken:\n• Regulatorische Führungskompetenz: Fokussieren Sie auf die Befähigung zur effektiven Steuerung regulatorischer Umsetzungsprojekte und zum Management von Compliance-Risiken im eigenen Verantwortungsbereich.\n• Kommunikationstraining: Stärken Sie die Fähigkeit, komplexe regulatorische Anforderungen verständlich für Teams zu übersetzen und Sinnzusammenhänge herzustellen.\n• Change Management Tools: Vermitteln Sie praktische Werkzeuge und Methoden zur Gestaltung und Begleitung regulatorischer Veränderungsprozesse im eigenen Bereich.\n• Cross-funktionale Perspektiven: Fördern Sie das Verständnis für Schnittstellenthemen und bereichsübergreifende Implikationen regulatorischer Anforderungen.\n\n🧑‍💼 Allgemeine Mitarbeiter - Relevanz und Handlungsimplikationen verdeutlichen:\n• Kontextbezogene Mikromodule: Entwickeln Sie kurze, fokussierte Lerneinheiten, die gezielt die Relevanz spezifischer CRR/CRD-Aspekte für den jeweiligen Arbeitskontext verdeutlichen.\n• Interactive Compliance Maps: Gestalten Sie interaktive Visualisierungen, die aufzeigen, wie verschiedene Rollen und Prozesse mit regulatorischen Anforderungen verknüpft sind.\n• Real-World Impact Stories: Verdeutlichen Sie die praktischen Auswirkungen von Compliance/Non-Compliance anhand konkreter, nachvollziehbarer Beispiele aus der Unternehmenspraxis.\n• Gamified Awareness-Formate: Setzen Sie spielerische Elemente ein, um Grundverständnis für regulatorische Themen zu fördern und Relevanz erlebbar zu machen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche innovativen Technologien können wir nutzen, um die Effektivität unserer CRR/CRD-Change Management Prozesse zu steigern?",
        answer: "Innovative Technologien bieten transformative Möglichkeiten, um regulatorische Change Management-Prozesse grundlegend neu zu gestalten und deren Effektivität signifikant zu steigern. Der strategische Einsatz digitaler Werkzeuge kann sowohl die Effizienz als auch die Wirksamkeit regulatorischer Veränderungsinitiativen revolutionieren und nachhaltige Compliance-Fähigkeiten aufbauen.\n\n📊 Datengetriebene Change Intelligence:\n• Predictive Change Analytics: Implementieren Sie KI-gestützte Analysesysteme, die historische Daten zu regulatorischen Veränderungsprojekten auswerten, um Erfolgsfaktoren, Risiken und optimale Interventionspunkte vorherzusagen.\n• Organizational Network Analysis: Nutzen Sie Netzwerkanalyse-Tools, um informelle Einflussstrukturen in der Organisation zu identifizieren und gezielt Change Champions für regulatorische Initiativen zu aktivieren.\n• Sentiment Analysis: Setzen Sie Natural Language Processing ein, um Stimmungen, Bedenken und Widerstände gegenüber regulatorischen Veränderungen in internen Kommunikationskanälen zu erfassen und frühzeitig zu adressieren.\n• Digital Change Readiness Assessment: Implementieren Sie digitale Tools zur kontinuierlichen Messung der Veränderungsbereitschaft verschiedener Organisationsbereiche für spezifische regulatorische Anforderungen.\n\n📱 Kollaborative Change-Plattformen:\n• Integrated Regulatory Change Hubs: Entwickeln Sie zentrale digitale Plattformen, die alle Aspekte regulatorischer Veränderungsinitiativen – von der Anforderungsanalyse über die Implementierung bis zum Monitoring – integriert abbilden.\n• Digital Change Companion: Implementieren Sie personalisierte digitale Assistenten, die Mitarbeiter individuell durch regulatorische Veränderungsprozesse begleiten und kontextspezifische Unterstützung bieten.\n• Collaborative Implementation Workspaces: Nutzen Sie digitale Kollaborationsumgebungen, die verteilten Teams die gemeinsame Arbeit an regulatorischen Implementierungen mit Echtzeit-Feedback und automatisierter Fortschrittsverfolgung ermöglichen.\n• Micro-Feedback Loops: Etablieren Sie digitale Kanäle für kontinuierliches, niedrigschwelliges Feedback zu regulatorischen Veränderungsinitiativen, die direkte Anpassungen und Verbesserungen ermöglichen.\n\n🧩 Immersive Technologien für Change Experience:\n• Virtual Reality Change Simulations: Entwickeln Sie immersive VR-Umgebungen, in denen Mitarbeiter die Auswirkungen regulatorischer Veränderungen auf Arbeitsprozesse und -ergebnisse realitätsnah erleben können.\n• Augmented Reality Process Guides: Setzen Sie AR-Technologie ein, um Mitarbeiter in Echtzeit durch veränderte regulatorische Prozesse zu führen und kontextbezogene Unterstützung direkt am Arbeitsplatz zu bieten.\n• Digital Twins für Prozesssimulation: Nutzen Sie digitale Zwillinge von Geschäftsprozessen, um die Auswirkungen regulatorischer Änderungen zu simulieren und optimale Implementierungspfade zu identifizieren.\n• Gamified Change Journeys: Implementieren Sie spielerische digitale Erfahrungen, die Mitarbeiter durch regulatorische Veränderungsprozesse führen und Engagement sowie Lernfortschritte fördern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können wir ADVISORI's Expertise für die Entwicklung unserer internen CRR/CRD-Schulungs- und Change-Kapazitäten optimal nutzen?",
        answer: "Die strategische Nutzung von ADVISORI's Expertise sollte über klassische Beratungsleistungen hinausgehen und auf den nachhaltigen Aufbau interner CRR/CRD-Schulungs- und Change Management-Kapazitäten abzielen. Eine partnerschaftliche Zusammenarbeit mit einem langfristigen Entwicklungsfokus maximiert den Wert der externen Expertise und schafft dauerhafte institutionelle Fähigkeiten.\n\n🔄 Von Berater-Abhängigkeit zu Capability Building:\n• Kompetenzbasierter Wissenstransfer: Entwickeln Sie gemeinsam mit ADVISORI einen strukturierten Plan für den systematischen Transfer von Methodenwissen und regulatorischer Expertise in Ihre Organisation.\n• Train-the-Trainer-Programme: Nutzen Sie ADVISORI's Expertise, um interne Trainer und Multiplikatoren für CRR/CRD-Themen auszubilden, die das Wissen nachhaltig in der Organisation verankern können.\n• Co-Creation statt Delegation: Arbeiten Sie in gemischten Teams aus internen Experten und ADVISORI-Beratern an der Entwicklung maßgeschneiderter Schulungs- und Change-Konzepte, um parallel Inhalte und interne Kompetenzen aufzubauen.\n• Abgestufte Unterstützungsmodelle: Planen Sie eine schrittweise Reduktion der externen Unterstützung bei gleichzeitigem Aufbau interner Kapazitäten durch gezielte Coaching- und Mentoring-Maßnahmen.\n\n📚 Strukturierte Nutzung von ADVISORI's Wissensressourcen:\n• Zugang zu Methoden-Repository: Sichern Sie sich Zugang zu ADVISORI's bewährten Methoden, Templates und Best Practices für regulatorische Schulungen und Change Management, die Sie adaptieren und weiterentwickeln können.\n• Cross-Industry Insights: Nutzen Sie ADVISORI's Erfahrungen aus verschiedenen Finanzinstituten, um branchenweite Best Practices und innovative Ansätze in Ihre Organisation zu transferieren.\n• Benchmarking-Services: Implementieren Sie regelmäßige Benchmark-Analysen mit ADVISORI, um Ihre Schulungs- und Change-Management-Ansätze im Branchenvergleich zu evaluieren und kontinuierlich zu optimieren.\n• Regulatory Trend Monitoring: Etablieren Sie einen strukturierten Prozess, um von ADVISORI's Früherkennungssystem für regulatorische Entwicklungen zu profitieren und proaktiv entsprechende Kapazitäten aufzubauen.\n\n🛠️ Gemeinsame Entwicklung zukunftsorientierter Capabilities:\n• Innovationswerkstätten: Organisieren Sie gemeinsame Innovation Labs mit ADVISORI, um neue, zukunftsweisende Ansätze für regulatorisches Lernen und Change Management zu entwickeln und zu pilotieren.\n• Agile Schulungsdesign-Sprints: Nutzen Sie ADVISORI's Expertise für agile Entwicklungsansätze, um schnell und iterativ neue Schulungsformate und Change-Interventionen zu entwickeln und zu testen.\n• Digital Enablement: Lassen Sie sich von ADVISORI bei der Implementierung digitaler Plattformen und Tools für Schulungs- und Change Management-Prozesse unterstützen, die Sie langfristig selbständig betreiben können.\n• Aufbau interner CoEs: Entwickeln Sie mit ADVISORI's Unterstützung interne Centers of Excellence für regulatorisches Lernen und Change Management, die als Kompetenzzentren und Innovationstreiber fungieren."
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
    console.log('✅ FAQs batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
