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
    console.log('Updating NIS2 Compliance Roadmap page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-compliance-roadmap' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-compliance-roadmap" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie stellt ADVISORI sicher, dass unsere NIS2 Compliance Roadmap mit anderen strategischen Initiativen und Transformationsprojekten optimal harmoniert?",
        answer: "Die erfolgreiche Integration einer NIS2 Compliance Roadmap in das bestehende Portfolio strategischer Initiativen erfordert eine orchestrierte Herangehensweise, die Synergien maximiert und Ressourcenkonflikte minimiert. ADVISORI versteht NIS2-Compliance nicht als isoliertes Projekt, sondern als integralen Bestandteil Ihrer Gesamttransformation.\n\n🔄 Strategische Integration und Synergieoptimierung:\n• Digitalisierungsinitiativen-Alignment: NIS2-Compliance-Technologien werden so gewählt, dass sie gleichzeitig Ihre digitale Transformation vorantreiben und moderne Arbeitsweisen unterstützen.\n• ESG-Strategie-Konvergenz: Cybersicherheit wird als kritischer Baustein Ihrer Environmental, Social & Governance-Strategie positioniert, was Investoren und Stakeholder zunehmend fordern.\n• Operational Excellence-Programme: NIS2-Prozessverbesserungen werden mit bestehenden Lean- und Six Sigma-Initiativen verzahnt für maximale operative Effizienz.\n• Innovation-Pipeline-Integration: Sicherheitsanforderungen werden frühzeitig in Produktentwicklung und neue Geschäftsmodelle eingebettet, statt nachträglich aufgesetzt.\n\n🎯 ADVISORIs Orchestrierungs-Framework:\n• Portfolio-Management-Ansatz: Systematische Analyse aller laufenden Initiativen zur Identifikation von Überschneidungen, Abhängigkeiten und Optimierungspotentialen.\n• Resource-Pooling-Strategien: Intelligente Bündelung von Ressourcen verschiedener Projekte zur Kostensenkung und Effizienzsteigerung bei gleichzeitiger Risikominimierung.\n• Agile Governance-Modelle: Flexible Steuerungsstrukturen, die schnelle Anpassungen bei sich ändernden Prioritäten und Rahmenbedingungen ermöglichen.\n• Change-Management-Integration: Koordinierte Kommunikations- und Schulungsmaßnahmen vermeiden Change-Fatigue und maximieren Akzeptanz.\n\n💡 Praktische Harmonisierungs-Maßnahmen:\n• Unified Technology Architecture: Entwicklung einer gemeinsamen Technologie-Roadmap, die NIS2-, Digitalisierungs- und andere IT-Anforderungen in einer kohärenten Architektur vereint.\n• Cross-Functional Teams: Bildung integrierter Projektteams, die sowohl NIS2- als auch andere strategische Ziele verfolgen und dabei Wissenstransfer und Effizienz maximieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche Erfolgsmessungen und KPIs sollten für eine NIS2 Compliance Roadmap definiert werden, um den Wertbeitrag für das C-Level transparent zu machen?",
        answer: "Effektive Erfolgsmessung einer NIS2 Compliance Roadmap erfordert eine ausgewogene Kombination aus quantitativen und qualitativen Metriken, die sowohl regulatorische Compliance als auch geschäftlichen Wertbeitrag transparent machen. Für C-Level-Entscheidungsträger sind dabei strategische Impact-Kennzahlen ebenso wichtig wie operative Performance-Indikatoren.\n\n📊 Strategische C-Level-KPIs für NIS2-Erfolg:\n• Compliance-Reifegrad-Index: Quantifizierte Bewertung des Fortschritts gegenüber allen NIS2-Anforderungen mit prädiktiver Analyse zur rechtzeitigen Zielerreichung.\n• Risk-Adjusted ROI: Berechnung der Rendite von Cybersicherheitsinvestitionen unter Berücksichtigung vermiedener Schadenskosten und Bußgelder.\n• Business Continuity Enhancement: Messbare Verbesserung der Ausfallzeiten, Wiederherstellungszeiten und operativen Resilienz als direkte Geschäftsauswirkung.\n• Stakeholder-Confidence-Metrics: Quantifizierung von Vertrauen bei Kunden, Partnern und Investoren durch regelmäßige Surveys und Marktfeedback.\n\n⚡ Operative Exzellenz-Indikatoren:\n• Automatisierungsgrad: Prozentsatz automatisierter vs. manueller Sicherheitsprozesse als Indikator für Effizienzgewinne und Fehlerreduktion.\n• Mean Time to Detection/Response: Kontinuierliche Verbesserung der Reaktionszeiten auf Sicherheitsvorfälle als Indikator für operative Reife.\n• Employee Security Awareness: Messbare Steigerung des Sicherheitsbewusstseins durch Trainings und simulierte Phishing-Tests.\n• Vendor Risk Score: Bewertung und Verbesserung der Cybersicherheitsstandards in der Lieferkette als erweiterte Resilienz-Metrik.\n\n🎯 ADVISORIs KPI-Framework für maximale Transparenz:\n• Executive Dashboard: Real-time Visualisierung aller kritischen Metriken in C-Level-gerechter Aufbereitung mit Trendanalysen und Forecasting.\n• Balanced Scorecard-Integration: Einbettung von NIS2-KPIs in bestehende Management-Dashboards zur ganzheitlichen Unternehmenssteuerung.\n• Benchmark-basierte Bewertung: Kontinuierlicher Vergleich mit Branchenstandards und Best-in-Class-Organisationen zur relativen Positionierung.\n• Predictive Analytics: Einsatz fortgeschrittener Analysemethoden zur frühzeitigen Identifikation von Risiken und Optimierungspotentialen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie adressiert eine strategische NIS2 Compliance Roadmap die zunehmenden Anforderungen von Investoren und Stakeholdern an ESG-Compliance und Cyber-Resilienz?",
        answer: "Moderne Investoren und Stakeholder betrachten Cybersicherheit zunehmend als kritischen ESG-Faktor und Indikator für nachhaltige Unternehmensführung. Eine strategische NIS2 Compliance Roadmap positioniert Ihr Unternehmen nicht nur regulatorisch compliant, sondern auch als attraktive Investitionsmöglichkeit mit überlegener Risikobewertung.\n\n🌟 ESG-Integration und Investor Relations:\n• Cybersecurity als Governance-Säule: NIS2-Compliance demonstriert strukturierte Risikomanagement-Praktiken und erhöht das Vertrauen in die Unternehmensführung.\n• Sustainable Business Practices: Resiliente Cybersicherheitsarchitekturen unterstützen langfristige Geschäftskontinuität und nachhaltige Wertschöpfung.\n• Stakeholder-Transparenz: Systematische Berichterstattung über Cybersicherheitsinvestitionen und -performance als differenzierender Faktor am Kapitalmarkt.\n• Supply Chain Responsibility: NIS2-konforme Lieferkettenüberwachung stärkt das gesamte Ökosystem und minimiert Third-Party-Risiken.\n\n💰 Kapitalmarkt-Vorteile durch strategische NIS2-Implementation:\n• Verbesserte Credit Ratings: Rating-Agenturen bewerten Cybersicherheits-Governance zunehmend als Kreditrisikofaktor mit direkten Auswirkungen auf Finanzierungskosten.\n• Versicherungsprämiensenkung: Nachweislich robuste Cybersicherheitsmaßnahmen führen zu signifikanten Einsparungen bei Cyber-Versicherungen.\n• M&A-Premiums: Unternehmen mit überlegener Cybersicherheitspositionierung erzielen höhere Bewertungen bei Transaktionen.\n• Regulatorische Arbitrage: Frühzeitige Compliance-Exzellenz ermöglicht Expansion in regulierte Märkte vor Wettbewerbern.\n\n🏆 ADVISORIs ESG-orientierter Roadmap-Ansatz:\n• Integrated Reporting-Frameworks: Entwicklung umfassender Cybersicherheits-Berichterstattung nach international anerkannten Standards (GRI, SASB, TCFD).\n• Stakeholder-Engagement-Strategien: Proaktive Kommunikation von Cybersicherheitsinvestitionen und -erfolgen gegenüber Investoren, Analysten und anderen Stakeholdern.\n• Third-Party-Validierung: Einsatz externer Zertifizierungen und Audits zur objektiven Bestätigung der Cybersicherheits-Performance.\n• Continuous Improvement Culture: Etablierung einer Kultur kontinuierlicher Verbesserung, die ESG-Prinzipien in alle Cybersicherheitsentscheidungen integriert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche Rolle spielt kultureller Wandel in einer erfolgreichen NIS2 Compliance Roadmap und wie managt ADVISORI diese Transformation?",
        answer: "Kultureller Wandel ist oft der entscheidende Erfolgsfaktor für nachhaltige NIS2-Compliance, da technische Maßnahmen allein ohne entsprechende Verhaltensänderungen und Mindset-Shifts ihre volle Wirkung verfehlen. ADVISORI erkennt, dass Cybersicherheit zu einem integralen Bestandteil der Unternehmenskultur werden muss, um langfristige Resilienz zu gewährleisten.\n\n🧠 Kulturelle Transformation als strategischer Imperativ:\n• Security-First-Mindset: Entwicklung einer Organisationskultur, in der Cybersicherheit nicht als Hindernis, sondern als Enabler für Geschäftserfolg verstanden wird.\n• Shared Responsibility Model: Überwindung der traditionellen \"IT-ist-verantwortlich\"-Mentalität hin zu geteilter Verantwortung aller Mitarbeitenden für Cybersicherheit.\n• Risk-Aware Decision Making: Integration von Cybersicherheitsüberlegungen in alle Geschäftsentscheidungen als natürlicher Bestandteil des Entscheidungsprozesses.\n• Innovation through Security: Förderung einer Kultur, die Sicherheitsanforderungen als Treiber für innovative Lösungen und Prozessverbesserungen nutzt.\n\n🎯 ADVISORIs Change-Management-Methodik:\n• Behavioural Design Principles: Anwendung verhaltenspsychologischer Erkenntnisse zur nachhaltigen Verankerung sicherheitsbewusster Verhaltensweisen im Arbeitsalltag.\n• Leadership-Engagement-Programme: Intensive Arbeit mit der Führungsebene zur authentischen Verkörperung und Kommunikation der Cybersicherheitskultur.\n• Gamification und Incentivierung: Entwicklung spielerischer Ansätze und Belohnungssysteme, die erwünschte Sicherheitsverhaltensweisen verstärken.\n• Community-Building-Ansätze: Schaffung interner Cybersicherheits-Communities und Champions-Netzwerke für peer-to-peer Learning und Support.\n\n💡 Nachhaltige Kulturverankerung:\n• Integration in Performance Management: Einbettung von Cybersicherheitszielen in individuelle und Team-Performance-Bewertungen.\n• Storytelling und Kommunikation: Entwicklung überzeugender Narratives, die die Bedeutung von Cybersicherheit für Mission und Vision des Unternehmens verdeutlichen.\n• Continuous Learning Culture: Etablierung regelmäßiger Weiterbildungs- und Awareness-Programme, die mit der sich entwickelnden Bedrohungslandschaft Schritt halten."
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
    console.log('✅ C-Level FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
