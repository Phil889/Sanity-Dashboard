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
    console.log('Updating KI-Beratung page with strategic consulting FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'ki-beratung' })
    
    if (!existingDoc) {
      throw new Error('Document "ki-beratung" not found')
    }
    
    // Create new strategic consulting FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist strategische KI-Beratung für C-Level-Führungskräfte mehr als nur technische Implementierung und wie positioniert ADVISORI KI als Geschäftstransformations-Katalysator?",
        answer: "Für die Unternehmensführung repräsentiert strategische KI-Beratung weit mehr als technische Systemeinführung – sie ist ein fundamentaler Paradigmenwechsel, der die Art und Weise revolutioniert, wie Unternehmen Werte schaffen, Entscheidungen treffen und Märkte erschließen. Eine durchdachte KI-Beratungsstrategie kann die Grundlage für nachhaltigen Wettbewerbsvorteile schaffen, birgt jedoch auch erhebliche Risiken für Datenschutz und geistiges Eigentum. ADVISORI versteht KI-Beratung als strategischen Enabler für ganzheitliche Geschäftstransformation.\n\n🎯 Strategische Imperative für die Führungsebene:\n• Wertschöpfungsrevolution: KI-Beratung ermöglicht die Identifikation und Erschließung völlig neuer Geschäftsmodelle und Umsatzquellen, die ohne intelligente Systeme nicht realisierbar wären.\n• Datengetriebene Entscheidungsexzellenz: Transformation von Rohdaten in strategische Erkenntnisse, die präzisere und schnellere Geschäftsentscheidungen auf allen Unternehmensebenen ermöglichen.\n• Marktdifferenzierung und Kundenzentrierung: Schaffung einzigartiger, hyperpersonalisierter Kundenerlebnisse, die Loyalität steigern und neue Marktpositionen etablieren.\n• Operative Transformation: Neugestaltung von Geschäftsprozessen durch intelligente Automatisierung und prädiktive Analytik für maximale Effizienz.\n\n🛡️ Der ADVISORI-Ansatz für strategische KI-Transformation:\n• DSGVO-First-Beratungsstrategie: Wir entwickeln KI-Strategien, die von Grund auf datenschutzkonform sind und gleichzeitig maximale Geschäftsvorteile bieten.\n• IP-Schutz durch strategisches Design: Implementierung sicherer KI-Beratungsansätze, die Ihr geistiges Eigentum schützen und gleichzeitig Innovation fördern.\n• Governance-Integration: Einbettung von KI-Governance in Ihre bestehenden Unternehmensstrukturen für nachhaltige und verantwortungsvolle KI-Nutzung.\n• C-Level-Roadmap-Entwicklung: Erstellung maßgeschneiderter KI-Strategien, die mit Ihren langfristigen Geschäftszielen und Wachstumsplänen harmonieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie entwickelt ADVISORI eine maßgeschneiderte KI-Strategie, die sowohl Geschäftsziele als auch regulatorische Anforderungen erfüllt?",
        answer: "Die Entwicklung einer erfolgreichen KI-Strategie erfordert ein tiefgreifendes Verständnis sowohl der Geschäftsdynamik als auch der komplexen regulatorischen Landschaft. ADVISORI verfolgt einen ganzheitlichen Beratungsansatz, der strategische Geschäftsziele mit technischer Exzellenz und regulatorischer Compliance harmonisch verbindet. Jede KI-Strategie wird individuell auf die spezifischen Unternehmensanforderungen, Branchenkontexte und Wachstumsambitionen zugeschnitten.\n\n📊 Strategische Analyse und Potentialbewertung:\n• Umfassende Geschäftsprozessanalyse: Detaillierte Untersuchung Ihrer aktuellen Wertschöpfungsketten, Identifikation von Optimierungspotenzialen und strategischen KI-Einsatzmöglichkeiten.\n• Datenlandschaft-Assessment: Bewertung Ihrer vorhandenen Datenbestände, Qualitätsanalyse und Identifikation von Datenanreicherungsmöglichkeiten für KI-Anwendungen.\n• Wettbewerbsanalyse und Marktpositionierung: Analyse der KI-Aktivitäten Ihrer Wettbewerber und Identifikation von Differenzierungsmöglichkeiten durch strategische KI-Nutzung.\n• ROI-Modellierung und Business Case-Entwicklung: Erstellung detaillierter Wirtschaftlichkeitsanalysen für verschiedene KI-Szenarien mit realistischen Kosten-Nutzen-Bewertungen.\n\n🔍 Compliance-Integration und Risikomanagement:\n• Regulatorische Landschaftsanalyse: Umfassende Bewertung aller relevanten Regulierungsanforderungen von DSGVO über branchenspezifische Vorschriften bis hin zur EU-KI-Verordnung.\n• Privacy-by-Design-Strategieentwicklung: Integration von Datenschutzprinzipien in die Grundarchitektur Ihrer KI-Strategie für nachhaltige Compliance.\n• Risikobewertung und Mitigation: Identifikation potenzieller Risiken und Entwicklung proaktiver Strategien zur Risikominimierung und -kontrolle.\n• Governance-Framework-Design: Entwicklung maßgeschneiderter KI-Governance-Strukturen, die Verantwortlichkeiten definieren und Entscheidungsprozesse optimieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche konkreten Schritte umfasst ADVISORI's KI-Beratungsprozess von der ersten Analyse bis zur erfolgreichen Implementierung?",
        answer: "ADVISORI's KI-Beratungsprozess folgt einer strukturierten, phasenorientierten Methodik, die strategische Planung mit praktischer Umsetzung verbindet. Unser bewährter Ansatz gewährleistet, dass jede KI-Initiative sowohl geschäftlichen Mehrwert schafft als auch höchste Standards für Sicherheit und Compliance erfüllt. Der Prozess ist darauf ausgelegt, Risiken zu minimieren und nachhaltigen Erfolg zu sichern.\n\n🔍 Phase 1 - Strategische Analyse und Potentialbewertung:\n• Umfassende Geschäfts- und Datenanalyse: Detaillierte Untersuchung Ihrer aktuellen Prozesse, Systeme und Datenbestände zur Identifikation optimaler KI-Einsatzfelder.\n• Stakeholder-Interviews und Anforderungsanalyse: Strukturierte Gespräche mit Schlüsselpersonen zur Erfassung von Geschäftszielen, Herausforderungen und Erwartungen.\n• Technische Machbarkeitsstudie: Bewertung der technischen Infrastruktur und Identifikation notwendiger Anpassungen oder Erweiterungen.\n• Compliance-Assessment: Analyse aller relevanten regulatorischen Anforderungen und Entwicklung einer Compliance-Roadmap.\n\n📋 Phase 2 - Strategieentwicklung und Roadmap-Erstellung:\n• Maßgeschneiderte KI-Strategie-Entwicklung: Erstellung einer umfassenden KI-Strategie, die perfekt auf Ihre Geschäftsziele und Branchenanforderungen abgestimmt ist.\n• Detaillierte Implementierungs-Roadmap: Entwicklung eines strukturierten Umsetzungsplans mit klaren Meilensteinen, Zeitplänen und Ressourcenanforderungen.\n• Business Case und ROI-Modellierung: Erstellung detaillierter Wirtschaftlichkeitsanalysen mit realistischen Kosten-Nutzen-Bewertungen für verschiedene Implementierungsszenarien.\n• Risikomanagement-Strategie: Entwicklung umfassender Risikobewertungen und proaktiver Mitigation-Strategien für alle identifizierten Risikobereiche.\n\n🚀 Phase 3 - Implementierungsbegleitung und Change Management:\n• Projektmanagement und Koordination: Professionelle Begleitung der Implementierung mit erfahrenen Projektmanagern und KI-Spezialisten.\n• Change Management und Organisationsentwicklung: Unterstützung bei der organisatorischen Transformation, Mitarbeiterschulungen und Kulturwandel-Initiativen.\n• Kontinuierliche Optimierung: Laufende Überwachung, Anpassung und Verbesserung der implementierten KI-Lösungen basierend auf Performance-Daten und Feedback."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie stellt ADVISORI sicher, dass KI-Beratungsprojekte nachhaltigen Geschäftswert schaffen und nicht nur technische Spielereien bleiben?",
        answer: "Nachhaltiger Geschäftswert durch KI-Beratung entsteht nur dann, wenn technische Innovation strategisch mit Geschäftszielen verknüpft wird. ADVISORI verfolgt einen geschäftszentrierten Beratungsansatz, der von Anfang an auf messbare Ergebnisse und langfristige Wertschöpfung ausgerichtet ist. Wir verstehen KI nicht als Selbstzweck, sondern als strategisches Instrument zur Erreichung Ihrer Unternehmensziele.\n\n💼 Geschäftszentrierte Beratungsmethodik:\n• Strategische Geschäftsziel-Alignment: Jede KI-Initiative wird direkt mit spezifischen Geschäftszielen verknüpft und deren Beitrag zur Unternehmensstrategie klar definiert.\n• Value-First-Ansatz: Priorisierung von KI-Anwendungen basierend auf ihrem potenziellen Geschäftswert und ihrer strategischen Bedeutung für Ihr Unternehmen.\n• Messbare KPI-Definition: Entwicklung klarer, quantifizierbarer Erfolgskennzahlen, die den Geschäftswert jeder KI-Initiative transparent machen.\n• Kontinuierliche Business Case-Validierung: Regelmäßige Überprüfung und Anpassung der Geschäftsargumente basierend auf realen Implementierungserfahrungen.\n\n📈 Nachhaltigkeits-Framework für KI-Projekte:\n• Langfristige Wertschöpfungs-Planung: Entwicklung von KI-Strategien, die nicht nur kurzfristige Erfolge erzielen, sondern langfristige Wettbewerbsvorteile schaffen.\n• Skalierbarkeits-Design: Konzeption von KI-Lösungen, die mit Ihrem Unternehmen wachsen und sich an verändernde Geschäftsanforderungen anpassen können.\n• Organisatorische Verankerung: Integration von KI-Kompetenzen in Ihre Unternehmensstrukturen für nachhaltige Nutzung und kontinuierliche Weiterentwicklung.\n• Innovation-Pipeline-Entwicklung: Etablierung von Prozessen zur kontinuierlichen Identifikation und Entwicklung neuer KI-Geschäftsmöglichkeiten.\n\n🔄 Kontinuierliche Wertoptimierung:\n• Performance-Monitoring und Analytics: Implementierung umfassender Überwachungssysteme zur kontinuierlichen Messung des Geschäftswerts Ihrer KI-Initiativen.\n• Adaptive Optimierung: Kontinuierliche Anpassung und Verbesserung der KI-Lösungen basierend auf Performance-Daten und sich ändernden Geschäftsanforderungen.\n• Strategische Weiterentwicklung: Regelmäßige Bewertung und Erweiterung Ihrer KI-Strategie zur Erschließung neuer Wertschöpfungsmöglichkeiten."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new strategic consulting FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ Strategic consulting FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
