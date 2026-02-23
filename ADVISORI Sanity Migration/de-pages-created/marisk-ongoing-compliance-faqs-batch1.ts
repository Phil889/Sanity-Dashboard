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
    console.log('Updating MaRisk Ongoing Compliance page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'marisk-ongoing-compliance' })
    
    if (!existingDoc) {
      throw new Error('Document "marisk-ongoing-compliance" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist Ongoing Compliance für MaRisk mehr als nur ein Projekt, und wie unterstützt ADVISORI bei der Etablierung eines nachhaltigen Compliance-Prozesses?",
        answer: "MaRisk-Compliance ist keine einmalige Implementierungsaufgabe, sondern ein kontinuierlicher Prozess, der in die täglichen Geschäftsabläufe integriert werden muss. Angesichts regelmäßiger regulatorischer Änderungen, evolvierende Geschäftsmodelle und sich wandelnder Risikolandschaften benötigen Finanzinstitute einen systematischen und nachhaltigen Ansatz. ADVISORI unterstützt Sie dabei, MaRisk-Compliance von einem projektbasierten Ansatz zu einem integrierten Bestandteil Ihrer Unternehmenskultur zu entwickeln.\n\n🔄 Faktoren, die einen kontinuierlichen Compliance-Ansatz erfordern:\n• Regelmäßige MaRisk-Novellierungen: Die BaFin aktualisiert die MaRisk in regelmäßigen Abständen, um auf neue Risiken und internationale Standards zu reagieren, was eine fortlaufende Anpassung erfordert.\n• Dynamisches Geschäftsumfeld: Neue Produkte, Dienstleistungen, Märkte und Technologien schaffen kontinuierlich neue Risiken, die im Rahmen der MaRisk-Vorgaben adressiert werden müssen.\n• Organisatorische Veränderungen: Restrukturierungen, Fusionen, Outsourcing oder personelle Veränderungen können Auswirkungen auf bestehende Compliance-Strukturen haben.\n• Regulatorisches Umfeld: Neben MaRisk müssen Wechselwirkungen mit anderen Regularien (BAIT, ZAIT, DSGVO, etc.) kontinuierlich bewertet und in Einklang gebracht werden.\n\n🛠️ ADVISORIs Ansatz für nachhaltige MaRisk-Compliance:\n• Compliance Management Framework: Wir entwickeln mit Ihnen ein maßgeschneidertes Rahmenwerk, das Prozesse, Verantwortlichkeiten, Werkzeuge und Kontrollen für die kontinuierliche MaRisk-Überwachung definiert.\n• Regulatory Change Management: Etablierung eines strukturierten Prozesses zur Identifikation, Bewertung und Umsetzung regulatorischer Änderungen mit klaren Verantwortlichkeiten und Zeitplänen.\n• Integration in Governance-Strukturen: Verankerung der MaRisk-Compliance in bestehenden Governance-Strukturen und Entscheidungsprozessen, um sie zu einem integralen Bestandteil des Tagesgeschäfts zu machen.\n• Technologiegestützte Compliance-Lösungen: Implementierung effizienter Tools und Plattformen für Monitoring, Dokumentation und Reporting, die den manuellen Aufwand reduzieren und die Nachvollziehbarkeit erhöhen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können wir das Kosten-Nutzen-Verhältnis unserer MaRisk-Compliance-Aktivitäten optimieren und einen nachhaltigen ROI erzielen?",
        answer: "Die Optimierung des Kosten-Nutzen-Verhältnisses bei MaRisk-Compliance-Aktivitäten ist eine zentrale Herausforderung für Finanzinstitute. Anstatt Compliance als reinen Kostenfaktor zu betrachten, unterstützt ADVISORI Sie dabei, einen wertschöpfenden Ansatz zu entwickeln, der regulatorische Anforderungen mit geschäftlichem Mehrwert verbindet und einen nachhaltigen Return on Investment sicherstellt.\n\n💰 Strategien zur Compliance-Kostenoptimierung:\n• Risikoorientierter Ressourceneinsatz: Wir helfen Ihnen, Ihre Compliance-Ressourcen nach einem risikobasierten Ansatz zu priorisieren, indem wir MaRisk-Anforderungen nach ihrer Kritikalität für Ihr spezifisches Geschäftsmodell bewerten und kategorisieren.\n• Prozessautomatisierung: Identifikation von Compliance-Prozessen mit hohem manuellen Aufwand und deren gezielte Automatisierung durch geeignete Technologien und Tools, was langfristig erhebliche Kosteneinsparungen ermöglicht.\n• Integrierte Kontrollen: Anstatt separate Compliance-Kontrollen zu implementieren, unterstützen wir Sie bei der Integration von MaRisk-Kontrollen in bestehende operative Prozesse, was Redundanzen vermeidet und die Effizienz steigert.\n• Synergieeffekte: Nutzung von Synergien zwischen verschiedenen regulatorischen Anforderungen (MaRisk, BAIT, ZAIT, DSGVO, etc.) durch harmonisierte Governance-Strukturen, gemeinsame Kontrollen und konsolidiertes Reporting.\n\n📈 Mehrwertgenerierung durch strategische Compliance:\n• Datenqualitätsverbesserung: MaRisk-Anforderungen an Daten- und Risikosteuerungssysteme gezielt nutzen, um die unternehmensweite Datenqualität zu verbessern, was fundierte Geschäftsentscheidungen unterstützt.\n• Prozessoptimierung: Compliance-getriebene Prozessanalysen als Anlass nehmen, um ineffiziente Geschäftsprozesse zu identifizieren und zu optimieren, was über die reine Compliance hinaus Effizienzgewinne bringt.\n• Reputations- und Vertrauensgewinn: Nachweislich robuste Compliance-Strukturen als Wettbewerbsvorteil bei Kunden, Partnern und Investoren positionieren, insbesondere in Zeiten erhöhter Sensibilität für regulatorische Risiken.\n• Strategische Frühwarnsysteme: MaRisk-konforme Risikoidentifikationsprozesse so gestalten, dass sie über regulatorische Anforderungen hinaus als strategische Frühwarnsysteme für Geschäftsrisiken dienen.\n\n🔍 Evidenzbasierte ROI-Messung:\n• Compliance Cost Tracking: Implementierung eines transparenten Kostenverfolgungssystems für Compliance-Aktivitäten, das direkte und indirekte Kosten erfasst und Optimierungspotenziale identifiziert.\n• Benefit Quantification Framework: Entwicklung eines Rahmenwerks zur Quantifizierung der finanziellen und nicht-finanziellen Vorteile effektiver Compliance, einschließlich vermiedener Bußgelder, Reputationsschäden und Geschäftsunterbrechungen.\n• Efficiency KPIs: Etablierung spezifischer Leistungskennzahlen zur kontinuierlichen Messung und Optimierung der Compliance-Effizienz, wie Bearbeitungszeiten, Automatisierungsgrad und Ressourceneinsatz pro Compliance-Anforderung.\n• Strategic Compliance Reporting: Entwicklung eines Management-Reportings, das den strategischen Wertbeitrag der MaRisk-Compliance für die Geschäftsziele transparent macht und die Grundlage für datengetriebene Investitionsentscheidungen bildet."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie unterstützt ADVISORI bei der Vorbereitung und Begleitung von aufsichtlichen Prüfungen im Kontext der MaRisk?",
        answer: "Aufsichtliche Prüfungen der MaRisk-Compliance stellen Finanzinstitute regelmäßig vor besondere Herausforderungen. Eine gründliche Vorbereitung und professionelle Begleitung sind entscheidend, um Prüfungen erfolgreich zu meistern und wertvolle Impulse für die Weiterentwicklung Ihres Compliance-Managements zu gewinnen. ADVISORI unterstützt Sie mit einem strukturierten Ansatz bei allen Phasen aufsichtlicher Prüfungen.\n\n🔍 Prüfungsvorbereitung und Readiness Assessment:\n• Simulierte Vorprüfungen: Durchführung praxisnaher Mock-Audits, die typische Prüfungssituationen simulieren und potenzielle Schwachstellen vor der eigentlichen Prüfung identifizieren.\n• Gap-Analyse und Maßnahmenplanung: Systematische Überprüfung Ihrer MaRisk-Compliance anhand aktueller aufsichtlicher Erwartungen und Prüfungsschwerpunkte mit anschließender Priorisierung notwendiger Maßnahmen.\n• Dokumentations-Review: Kritische Überprüfung Ihrer Compliance-Dokumentation auf Vollständigkeit, Aktualität, Konsistenz und Nachvollziehbarkeit aus Prüferperspektive.\n• Stakeholder-Briefings: Gezielte Vorbereitung der an der Prüfung beteiligten Mitarbeiter durch Schulungen, Interviewtrainings und Simulationen typischer Prüfungssituationen.\n\n📋 Professionelles Prüfungsmanagement:\n• Single Point of Contact: Bereitstellung eines erfahrenen Ansprechpartners, der als Schnittstelle zwischen Prüfern und internen Fachbereichen fungiert und die Prüfungskoordination übernimmt.\n• Anforderungsmanagement: Strukturierte Erfassung, Kategorisierung und Bearbeitung von Prüferanfragen, mit klarer Priorisierung und Nachverfolgung der Bearbeitungsstatus.\n• Dokumentenbereitstellung: Effiziente Organisation und Qualitätssicherung aller anzufordernden Unterlagen, um Vollständigkeit, Konsistenz und termingerechte Bereitstellung sicherzustellen.\n• Issue Management: Proaktive Identifikation potentieller Feststellungen während der Prüfung und Entwicklung fundierter Stellungnahmen und Lösungsansätze.\n\n💡 Nachhaltige Feststellungsbearbeitung:\n• Ursachenanalyse: Tiefgehende Analyse der Grundursachen von Feststellungen, die über symptomatische Probleme hinausgeht und strukturelle Verbesserungspotenziale identifiziert.\n• Maßnahmenmanagement: Entwicklung eines ganzheitlichen Maßnahmenplans mit klaren Verantwortlichkeiten, realistischen Zeitplänen und messbaren Erfolgsmetriken.\n• Nachhaltigkeitssicherung: Implementierung von Kontrollen und Monitoring-Prozessen, die sicherstellen, dass umgesetzte Maßnahmen langfristig wirksam bleiben.\n• Knowledge Transfer: Systematische Aufbereitung der Prüfungsergebnisse und -erfahrungen als Lernquelle für die kontinuierliche Verbesserung Ihres Compliance-Managements.\n\n📊 Strategisches Reporting und Kommunikation:\n• Management-Reporting: Entwicklung transparenter und aussagekräftiger Berichte für Vorstand und Aufsichtsrat, die den Prüfungsstatus, Feststellungen und Maßnahmen klar kommunizieren.\n• Aufsichtliche Kommunikation: Unterstützung bei der professionellen Kommunikation mit Aufsichtsbehörden, einschließlich der Formulierung überzeugender Stellungnahmen und Maßnahmenpläne.\n• Lessons Learned: Strukturierte Aufarbeitung der Prüfungserfahrung mit allen Beteiligten, um systematische Verbesserungen für künftige Prüfungen abzuleiten.\n• Prüfungsübergreifende Themenverfolgung: Identifikation wiederkehrender Themen über verschiedene Prüfungen hinweg und Entwicklung strategischer Lösungsansätze."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können wir ein effektives Regulatory Change Management für MaRisk etablieren, das sowohl reaktiv als auch proaktiv agiert?",
        answer: "Ein effektives Regulatory Change Management ist unerlässlich, um mit dem kontinuierlichen Strom regulatorischer Änderungen Schritt zu halten und gleichzeitig die Compliance-Kosten zu kontrollieren. ADVISORI unterstützt Sie bei der Entwicklung eines strukturierten und effizienten Ansatzes, der regulatorische Änderungen frühzeitig erkennt, deren Auswirkungen präzise bewertet und die Umsetzung systematisch steuert.\n\n📡 Frühwarnsystem und Monitoring-Prozess:\n• Regulatorischer Radar: Implementierung eines systematischen Prozesses zur frühzeitigen Identifikation relevanter regulatorischer Entwicklungen aus verschiedenen Quellen (BaFin, EBA, Basel, etc.).\n• Priorisierungsmatrix: Entwicklung eines strukturierten Frameworks zur Bewertung und Priorisierung regulatorischer Initiativen nach Relevanz, Dringlichkeit und institutsspezifischen Auswirkungen.\n• Stakeholder-spezifisches Alerting: Etablierung eines zielgruppenorientierten Informationssystems, das relevante Stakeholder frühzeitig und bedarfsgerecht über anstehende regulatorische Änderungen informiert.\n• Regulatory Horizon Scanning: Regelmäßige Analyse langfristiger regulatorischer Trends und Entwicklungen zur strategischen Ausrichtung Ihrer Compliance-Roadmap.\n\n🔍 Strukturierte Impact-Analyse und Umsetzungsplanung:\n• Multi-dimensionale Auswirkungsanalyse: Methodische Bewertung der Auswirkungen regulatorischer Änderungen auf Prozesse, IT-Systeme, Governance-Strukturen, Ressourcen und Dokumentation.\n• Gap-Assessment-Framework: Entwicklung eines standardisierten Vorgehens zur Identifikation von Compliance-Lücken zwischen bestehenden Strukturen und neuen regulatorischen Anforderungen.\n• Umsetzungsroadmap: Erstellung detaillierter Implementierungspläne mit klaren Meilensteinen, Verantwortlichkeiten und Ressourcenzuordnungen, die in Ihre Gesamtplanungen integriert werden.\n• Abhängigkeits- und Synergiemanagement: Identifikation von Wechselwirkungen zwischen verschiedenen regulatorischen Änderungen und strategische Nutzung von Synergiepotenzialen.\n\n⚙️ Integrative Implementierungssteuerung:\n• Cross-funktionales Change Governance: Etablierung einer abteilungsübergreifenden Governance-Struktur für die effektive Steuerung regulatorischer Änderungsprojekte.\n• Standardisierte Methodiken: Entwicklung wiederverwendbarer Templates, Checklisten und Prozesse für typische regulatorische Änderungsszenarien zur Effizienzsteigerung.\n• Knowledge Management: Aufbau einer zentralen Wissensdatenbank für regulatorische Anforderungen, Interpretationen und Umsetzungserfahrungen als institutionelles Gedächtnis.\n• Integriertes Projektportfoliomanagement: Koordination regulatorischer Änderungsvorhaben mit anderen strategischen Initiativen zur Optimierung der Ressourcennutzung.\n\n📊 Kontinuierliches Monitoring und Verbesserung:\n• Compliance Tracking: Implementierung eines systematischen Überwachungssystems für den Umsetzungsfortschritt regulatorischer Änderungen mit Frühwarnindikatoren bei Verzögerungen.\n• Wirksamkeitsüberprüfung: Durchführung regelmäßiger Reviews zur Bewertung der Effektivität implementierter Maßnahmen und Identifikation von Nachbesserungsbedarf.\n• Effizienzanalyse: Kontinuierliche Bewertung und Optimierung der Effizienz Ihres Regulatory Change Management Prozesses anhand definierter KPIs.\n• Lessons Learned: Systematische Aufarbeitung von Erfahrungen aus abgeschlossenen Umsetzungsprojekten zur kontinuierlichen Verbesserung Ihres Change Management Ansatzes."
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
