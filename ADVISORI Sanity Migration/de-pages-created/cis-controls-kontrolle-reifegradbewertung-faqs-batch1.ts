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
    console.log('Updating CIS Controls Kontrolle & Reifegradbewertung page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cis-controls-kontrolle-reifegradbewertung' })
    
    if (!existingDoc) {
      throw new Error('Document "cis-controls-kontrolle-reifegradbewertung" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist die kontinuierliche Reifegradbewertung der CIS Controls für die strategische Cybersecurity-Governance unverzichtbar und wie unterstützt ADVISORI die C-Suite dabei?",
        answer: "Für die C-Suite ist die Reifegradbewertung der CIS Controls weit mehr als eine technische Compliance-Übung – sie ist ein strategisches Instrument zur kontinuierlichen Optimierung der Cybersecurity-Posture und ein essentieller Baustein für evidenzbasierte Entscheidungsfindung. In einer Zeit exponentiell steigender Cyber-Bedrohungen benötigen Führungskräfte objektive, messbare Indikatoren für die Wirksamkeit ihrer Sicherheitsinvestitionen.\n\n🎯 Strategische Relevanz für die Führungsebene:\n• Risikotransparenz und -quantifizierung: Objektive Bewertung der aktuellen Cybersecurity-Posture mit klaren Metriken, die direkte Rückschlüsse auf das Residualrisiko ermöglichen und fundierte Investitionsentscheidungen unterstützen.\n• Compliance und regulatorische Nachweisführung: Systematische Dokumentation der implementierten Sicherheitsmaßnahmen zur Erfüllung von Compliance-Anforderungen (NIS2, DORA, ISO 27001) und zur Reduzierung von Haftungsrisiken.\n• Budgetoptimierung und ROI-Maximierung: Datengetriebene Priorisierung von Sicherheitsinvestitionen basierend auf dem identifizierten Verbesserungspotenzial und der Risikoreduktion.\n• Stakeholder-Kommunikation: Professionelle Darstellung der Cybersecurity-Reife gegenüber Investoren, Aufsichtsbehörden, Kunden und Geschäftspartnern.\n\n🔍 Der ADVISORI-Ansatz für strategische Reifegradbewertung:\n• Ganzheitliche Bewertungsmethodik: Wir evaluieren nicht nur die technische Implementierung, sondern auch die organisatorischen Prozesse, Governance-Strukturen und die strategische Ausrichtung der CIS Controls.\n• Business-Impact-orientierte Analyse: Unsere Bewertungen fokussieren auf die geschäftskritischen Auswirkungen von Sicherheitslücken und priorisieren Verbesserungsmaßnahmen nach ihrem Beitrag zur Geschäftskontinuität.\n• Branchenspezifische Benchmarks: Vergleich Ihrer CIS Controls Reife mit branchenspezifischen Best Practices und regulatorischen Erwartungen.\n• C-Level-Dashboard und Reporting: Aufbereitung der Bewertungsergebnisse in executive-tauglichen Formaten mit klaren Handlungsempfehlungen und Zeitplänen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifiziert ADVISORI den Business Value einer systematischen CIS Controls Reifegradbewertung und welchen messbaren Impact hat dies auf unsere Cyber-Resilience und operative Effizienz?",
        answer: "Die systematische Reifegradbewertung der CIS Controls durch ADVISORI generiert messbaren Business Value durch die Transformation von reaktiven Sicherheitsmaßnahmen zu einer proaktiven, datengetriebenen Cybersecurity-Strategie. Für die C-Suite bedeutet dies eine signifikante Verbesserung der Cyber-Resilience bei gleichzeitiger Optimierung der operativen Effizienz und Kostenstruktur.\n\n📊 Messbare Business Impacts und ROI-Faktoren:\n• Risikoreduktion und Schadensvermeidung: Organisationen mit hoher CIS Controls Reife reduzieren ihre Cyber-Risiken um bis zu 85% und verringern die durchschnittlichen Kosten eines Sicherheitsvorfalls um 60-70%.\n• Operative Effizienzsteigerung: Optimierte CIS Controls führen zu einer 40% höheren Effizienz in den Sicherheitsoperationen durch Automatisierung, verbesserte Prozesse und reduzierte False-Positive-Raten.\n• Compliance-Kostenreduktion: Systematische CIS Controls Implementierung reduziert Audit-Aufwände um bis zu 50% und minimiert Compliance-Kosten durch proaktive Nachweisführung.\n• Versicherungsprämien-Optimierung: Nachweisbare Cybersecurity-Reife kann zu 20-30% niedrigeren Cyber-Versicherungsprämien führen.\n\n🚀 Strategische Werttreiber der ADVISORI-Bewertung:\n• Priorisierte Investitionsplanung: Unsere Bewertungen identifizieren die kosteneffektivsten Verbesserungsmaßnahmen und ermöglichen eine optimale Allokation des Cybersecurity-Budgets.\n• Zeitoptimierte Implementierung: Durch systematische Gap-Analyse und Roadmap-Entwicklung reduzieren wir die Time-to-Value neuer Sicherheitsmaßnahmen um bis zu 40%.\n• Skalierbare Governance-Strukturen: Etablierung von Monitoring- und Kontrollmechanismen, die eine kontinuierliche Optimierung ohne proportionale Ressourcensteigerung ermöglichen.\n• Wettbewerbsvorteile: Überlegene Cybersecurity-Posture kann als Differenzierungsmerkmal in Kundenverhandlungen und bei der Marktpositionierung genutzt werden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "In einer sich rasant entwickelnden Bedrohungslandschaft – wie stellt ADVISORI sicher, dass unsere CIS Controls Bewertung nicht nur den aktuellen Status quo erfasst, sondern auch zukunftsfähige Sicherheitsstrategien ermöglicht?",
        answer: "Die Bedrohungslandschaft entwickelt sich exponentiell weiter – von fortgeschrittenen persistenten Bedrohungen (APTs) über KI-gestützte Angriffe bis hin zu Supply-Chain-Kompromittierungen. ADVISORI's Ansatz zur CIS Controls Reifegradbewertung ist darauf ausgelegt, nicht nur den aktuellen Sicherheitsstatus zu bewerten, sondern auch eine adaptive, zukunftsorientierte Cybersecurity-Strategie zu entwickeln, die mit der Bedrohungsevolution Schritt hält.\n\n🔮 Zukunftsorientierte Bewertungsmethodik:\n• Threat Intelligence Integration: Unsere Bewertungen berücksichtigen aktuelle Threat Intelligence und emerging Attack Patterns, um sicherzustellen, dass Ihre CIS Controls gegen moderne Angriffsvektoren wirksam sind.\n• Scenario-basierte Resilienz-Tests: Simulation fortgeschrittener Angriffstechniken (MITRE ATT&CK Framework) zur Bewertung der Wirksamkeit Ihrer Controls gegen realistische Bedrohungsszenarien.\n• Technology Evolution Readiness: Bewertung der Anpassungsfähigkeit Ihrer CIS Controls an neue Technologien (Cloud, IoT, KI) und deren inhärente Sicherheitsrisiken.\n• Adaptive Governance-Modelle: Entwicklung flexibler Governance-Strukturen, die eine kontinuierliche Anpassung der Controls an sich verändernde Bedrohungen ermöglichen.\n\n⚡ ADVISORI's proaktive Differenzierung:\n• Predictive Risk Modeling: Einsatz von Machine Learning und Datenanalytik zur Vorhersage potenzieller Sicherheitslücken und zur präventiven Optimierung der CIS Controls.\n• Kontinuierliche Threat Landscape Monitoring: Regelmäßige Updates der Bewertungskriterien basierend auf neuen Bedrohungstrends und Angriffstechniken.\n• Zero Trust Integration: Bewertung und Optimierung Ihrer CIS Controls im Kontext moderner Zero Trust Architekturen und Micro-Segmentierung.\n• Crisis Simulation und Tabletop Exercises: Praktische Tests der CIS Controls Wirksamkeit durch realistische Incident Response Simulationen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI die CIS Controls Reifegradbewertung von einer statischen Compliance-Übung zu einem dynamischen Governance-Instrument für kontinuierliche Cybersecurity-Exzellenz?",
        answer: "Traditionelle CIS Controls Bewertungen sind oft statische, punktuelle Exercises, die schnell veralten und wenig strategischen Wert für die Führungsebene bieten. ADVISORI revolutioniert diesen Ansatz durch die Transformation der Reifegradbewertung zu einem dynamischen, kontinuierlichen Governance-Instrument, das als strategischer Enabler für Cybersecurity-Exzellenz und Business-Innovation fungiert.\n\n🔄 Von statischer Bewertung zu dynamischem Governance:\n• Continuous Monitoring Integration: Implementierung automatisierter Monitoring-Systeme, die kontinuierlich den Status Ihrer CIS Controls überwachen und Abweichungen in Echtzeit identifizieren.\n• Adaptive Improvement Loops: Etablierung iterativer Verbesserungszyklen, die auf aktuellen Threat Intelligence, Business-Änderungen und technologischen Entwicklungen basieren.\n• Real-time Risk Dashboards: C-Level-Dashboards mit Live-Metriken zur CIS Controls Performance, die proaktive Entscheidungsfindung ermöglichen.\n• Predictive Analytics Integration: Einsatz von KI und Machine Learning zur Vorhersage potenzieller Compliance-Gaps und zur präventiven Optimierung.\n\n💡 Strategische Transformation durch ADVISORI:\n• Business-Outcome-orientierte Metriken: Entwicklung von KPIs, die nicht nur technische Compliance messen, sondern den direkten Beitrag der CIS Controls zu Geschäftszielen quantifizieren.\n• Agile Security Governance: Implementierung agiler Governance-Modelle, die schnelle Anpassungen an sich ändernde Bedrohungen und Geschäftsanforderungen ermöglichen.\n• Stakeholder-zentrierte Kommunikation: Aufbereitung der Bewertungsergebnisse für verschiedene Stakeholder-Gruppen (Board, Aufsichtsbehörden, Kunden) mit rollenspezifischen Insights und Handlungsempfehlungen.\n• Innovation Enablement: Nutzung der CIS Controls Bewertung als Grundlage für sichere digitale Transformation und die Einführung neuer Technologien und Geschäftsmodelle."
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
