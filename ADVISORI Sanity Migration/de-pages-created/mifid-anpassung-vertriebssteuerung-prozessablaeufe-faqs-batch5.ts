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
    console.log('Updating MiFID Anpassung Vertriebssteuerung & Prozessabläufe page with FAQs batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'mifid-anpassung-vertriebssteuerung-prozessablaeufe' })
    
    if (!existingDoc) {
      throw new Error('Document "mifid-anpassung-vertriebssteuerung-prozessablaeufe" not found')
    }
    
    // Create new FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können wir unsere MiFID-konformen Vertriebsprozesse kontinuierlich überwachen und optimieren?",
        answer: "Die kontinuierliche Überwachung und Optimierung MiFID-konformer Vertriebsprozesse ist entscheidend, um sowohl anhaltende Compliance zu gewährleisten als auch die operative Effizienz und Kundenzufriedenheit stetig zu verbessern. Ein systematischer Ansatz ermöglicht es Ihnen, Risiken frühzeitig zu erkennen und gleichzeitig wertvolle Optimierungspotenziale zu identifizieren.\n\n📈 Strategischer Ansatz für kontinuierliches Compliance-Monitoring:\n• Mehrdimensionales KPI-System: Entwickeln Sie ein ausgewogenes Kennzahlensystem, das sowohl Compliance-Aspekte (z.B. Vollständigkeit der Kundendokumentation, Geeignetheitsquote) als auch operative Leistungskennzahlen (z.B. Prozessdurchlaufzeiten, Kundenakzeptanz) und Vertriebsindikatoren (z.B. Conversion-Rates, Cross-Selling-Erfolge) integriert.\n• Risikobasiertes Monitoring-Konzept: Implementieren Sie einen differenzierten Überwachungsansatz, der die Intensität und Häufigkeit der Kontrollen am spezifischen Risikoprofil der jeweiligen Prozesse, Produkte und Kundengruppen ausrichtet. Dies ermöglicht eine effiziente Ressourcenallokation bei maximaler Risikominimierung.\n• Präventive Qualitätssicherung: Verlagern Sie den Fokus von nachgelagerten Stichprobenkontrollen hin zu präventiven, in den Vertriebsprozess integrierten Qualitätssicherungsmaßnahmen. Implementieren Sie automatisierte Plausibilitätsprüfungen und Warnhinweise, die Compliance-Risiken bereits während des Beratungsprozesses identifizieren.\n• Kontinuierlicher Verbesserungszyklus: Etablieren Sie einen strukturierten Prozess für die regelmäßige Auswertung aller Monitoring-Ergebnisse, die systematische Identifikation von Verbesserungspotenzialen und die konsequente Umsetzung von Optimierungsmaßnahmen im Sinne eines geschlossenen PDCA-Zyklus (Plan-Do-Check-Act).\n\n🔍 Praktische Implementierungsansätze:\n• Automatisierte Compliance-Dashboards: Implementieren Sie Echtzeit-Dashboards, die den aktuellen Compliance-Status aller relevanten Vertriebsprozesse visualisieren und frühzeitige Warnungen bei Abweichungen oder Auffälligkeiten generieren. Stellen Sie sicher, dass diese Dashboards sowohl für Führungskräfte als auch für Compliance-Verantwortliche und Berater zugänglich sind.\n• Process Mining und Prozessanalyse: Setzen Sie moderne Process-Mining-Technologien ein, um tatsächliche Prozessabläufe zu analysieren, Abweichungen vom Sollprozess zu identifizieren und Engpässe oder Ineffizienzen in MiFID-relevanten Prozessschritten aufzudecken.\n• Systematisches Kundenfeedback: Implementieren Sie strukturierte Prozesse zur Erfassung von Kundenfeedback speziell zu den MiFID-relevanten Aspekten der Beratung und Dokumentation. Nutzen Sie sowohl quantitative Methoden (z.B. kurze Feedback-Umfragen) als auch qualitative Ansätze (z.B. Mystery Shopping, Fokusgruppen).\n• Kollegiale Fallbesprechungen: Etablieren Sie regelmäßige kollegiale Fallbesprechungen, in denen Berater gemeinsam mit Compliance-Experten konkrete Beratungssituationen analysieren und Best Practices sowie Verbesserungspotenziale identifizieren. Dies fördert gleichzeitig das Compliance-Bewusstsein und die kontinuierliche Weiterentwicklung der Beratungsqualität."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche regulatorischen Entwicklungen im Bereich MiFID sollten wir bei der Gestaltung unserer Vertriebsprozesse bereits heute berücksichtigen?",
        answer: "Die frühzeitige Antizipation regulatorischer Entwicklungen im MiFID-Umfeld ist ein entscheidender strategischer Vorteil, der es Ihnen ermöglicht, Ihre Vertriebsprozesse zukunftsorientiert zu gestalten und kostspielige Ad-hoc-Anpassungen zu vermeiden. ADVISORI beobachtet kontinuierlich die regulatorische Landschaft und identifiziert die wichtigsten Entwicklungstrends für eine vorausschauende Prozessgestaltung.\n\n🔮 Zentrale regulatorische Entwicklungstrends:\n• Verstärkte Nachhaltigkeitsintegration: Die zunehmende Verknüpfung von MiFID mit ESG-Anforderungen wird sich weiter intensivieren. Erwarten Sie eine Ausweitung der Pflichten zur Abfrage von Nachhaltigkeitspräferenzen und zur Integration dieser Präferenzen in den gesamten Beratungs- und Produktselektionsprozess. Vertriebsprozesse sollten daher bereits heute modular konzipiert werden, um ESG-Aspekte nahtlos zu integrieren.\n• Digitale Identität und elektronische Signaturen: Die europaweite Einführung digitaler Identitätslösungen und die weitere Harmonisierung elektronischer Signaturstandards werden traditionelle Legitimations- und Unterschriftsprozesse grundlegend verändern. Gestalten Sie Ihre Prozesse mit Blick auf diese Entwicklung und achten Sie auf Interoperabilität mit zukünftigen EU-weiten Standards.\n• Erweiterte Datenschutz- und Datensicherheitsanforderungen: Die kontinuierliche Verschärfung von Datenschutzvorgaben und Cybersecurity-Anforderungen wird sich auch auf MiFID-relevante Prozesse auswirken, insbesondere hinsichtlich der Verarbeitung und Speicherung von Kundendaten und Beratungsdokumentationen. Implementieren Sie daher Vertriebsprozesse mit Privacy-by-Design-Prinzipien und modularen Datenzugriffskonzepten.\n• Konvergenz unterschiedlicher Regulierungsbereiche: Erwarten Sie eine zunehmende Harmonisierung und Integration verschiedener Regulierungsbereiche wie MiFID, IDD, PRIIP und DSGVO. Gestalten Sie Ihre Vertriebsprozesse so, dass sie flexibel auf diese konvergierenden Anforderungen reagieren können, statt isolierte Compliance-Silos zu schaffen.\n\n⚙️ Strategische Maßnahmen für zukunftssichere Prozesse:\n• Flexible Prozessarchitektur: Gestalten Sie Ihre Vertriebsprozesse modular und flexibel, sodass einzelne Komponenten angepasst oder ausgetauscht werden können, ohne den Gesamtprozess neu konzipieren zu müssen. Implementieren Sie konfigurierbare Regelwerke statt hartcodierter Prozesslogik.\n• Zukunftsorientierte Datenarchitektur: Entwickeln Sie eine Datenarchitektur, die über die aktuellen regulatorischen Anforderungen hinausgeht und bereits potenziell relevante Datenpunkte erfasst und strukturiert. Achten Sie dabei auf klare Datengovernance und Metadaten-Management, um die Anpassungsfähigkeit zu erhöhen.\n• Regulatorisches Radar: Etablieren Sie einen systematischen Prozess zur Früherkennung und Bewertung regulatorischer Entwicklungen, der sowohl formelle Regelungsvorhaben als auch informelle Diskussionen auf europäischer und nationaler Ebene umfasst. Leiten Sie daraus konkrete Handlungsempfehlungen für präventive Prozessanpassungen ab.\n• Proaktive Pilotprojekte: Initiieren Sie gezielte Pilotprojekte zu erwarteten regulatorischen Entwicklungen, um frühzeitig praktische Erfahrungen zu sammeln und potenzielle Implementierungsherausforderungen zu identifizieren. Dies ermöglicht eine fundierte Einschätzung des Anpassungsbedarfs und der erforderlichen Ressourcen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie sollten wir unsere Führungskräfte und das mittlere Management in die MiFID-konforme Umgestaltung unserer Vertriebsprozesse einbinden?",
        answer: "Die erfolgreiche Transformation zu MiFID-konformen Vertriebsprozessen erfordert eine aktive Einbindung und Unterstützung aller Führungsebenen, insbesondere des mittleren Managements als entscheidende Schnittstelle zwischen strategischer Vorgabe und operativer Umsetzung. Ein durchdachter Ansatz zur Führungskräfteeinbindung kann den Unterschied zwischen einer oberflächlichen Compliance-Übung und einer nachhaltigen Veränderung der Vertriebskultur ausmachen.\n\n👥 Strategischer Ansatz zur Führungskräfteeinbindung:\n• Führungskräfte als Change Champions: Positionieren Sie ausgewählte Führungskräfte frühzeitig als aktive Gestalter und Botschafter der Veränderung, nicht nur als passive Empfänger von Compliance-Vorgaben. Übertragen Sie ihnen konkrete Verantwortung für die Gestaltung und Implementierung spezifischer Prozesskomponenten.\n• Integriertes Führungsverständnis: Entwickeln Sie ein Führungsverständnis, das Compliance-Exzellenz als integralen Bestandteil erfolgreicher Vertriebsführung definiert. Verankern Sie MiFID-Compliance in Führungsleitbildern, Zielvereinbarungen und Beurteilungssystemen auf allen Managementebenen.\n• Kaskadierende Verantwortungsstruktur: Etablieren Sie eine klare, kaskadierende Verantwortungsstruktur für die MiFID-Compliance, die von der Geschäftsleitung über das mittlere Management bis zu den Teamleitern reicht. Definieren Sie konkrete Verantwortlichkeiten und Eskalationswege bei Compliance-Herausforderungen.\n• Partizipative Strategieentwicklung: Beziehen Sie Führungskräfte aktiv in die Entwicklung der Compliance-Strategie und der neuen Vertriebsprozesse ein. Nutzen Sie ihre Praxisnähe und Marktkenntnis, um Prozesse zu gestalten, die sowohl regulatorisch robust als auch praktisch umsetzbar sind.\n\n🛠️ Praktische Implementierungsansätze:\n• Management-spezifische Compliance-Schulungen: Entwickeln Sie spezielle Schulungsprogramme für Führungskräfte, die über die reine Vermittlung von MiFID-Anforderungen hinausgehen und konkrete Führungsinstrumente für die Steuerung und Förderung compliance-konformen Verhaltens vermitteln.\n• Compliance-KPIs im Führungscockpit: Integrieren Sie aussagekräftige MiFID-Compliance-Kennzahlen in die regulären Management-Informationssysteme und Führungscockpits. Stellen Sie sicher, dass diese KPIs nicht isoliert betrachtet, sondern in Relation zu anderen Geschäftskennzahlen analysiert werden.\n• Führungskräfte-Dialoge: Etablieren Sie strukturierte Dialogformate zwischen Compliance-Experten und Vertriebsführungskräften, in denen praktische Umsetzungsherausforderungen offen diskutiert und gemeinsame Lösungsansätze entwickelt werden können. Dies fördert das gegenseitige Verständnis und reduziert potenzielle Konflikte.\n• Management-Hospitation: Ermöglichen Sie Führungskräften, regelmäßig im operativen Vertrieb zu hospitieren und MiFID-konforme Beratungsgespräche zu begleiten. Dies schärft ihr Verständnis für die praktischen Herausforderungen und ermöglicht ihnen, gezielte Unterstützung anzubieten und Prozesse kontinuierlich zu verbessern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können wir den Return on Investment unserer MiFID-Implementierung messen und optimieren?",
        answer: "Die Messung und Optimierung des Return on Investment (ROI) Ihrer MiFID-Implementierung ist eine komplexe, aber entscheidende Aufgabe, die über die reine Erfüllung regulatorischer Anforderungen hinausgeht. Ein strategischer Ansatz ermöglicht es Ihnen, sowohl die direkten und indirekten Kosten als auch die quantitativen und qualitativen Nutzeneffekte systematisch zu erfassen und zu optimieren.\n\n📊 Strategischer Ansatz zur ROI-Messung:\n• Mehrdimensionales Bewertungsmodell: Entwickeln Sie ein ganzheitliches Bewertungsmodell, das neben direkten finanziellen Kennzahlen auch indirekte Wertbeiträge, Risikoreduktion und langfristige strategische Vorteile berücksichtigt. Vermeiden Sie eine zu einseitige Fokussierung auf kurzfristige Kostenaspekte.\n• Differenzierte Kostenzuordnung: Etablieren Sie ein präzises Kostenerfassungssystem, das MiFID-spezifische Implementierungskosten von ohnehin notwendigen Prozess- und Systemmodernisierungen unterscheidet. Dies verhindert eine verzerrte ROI-Bewertung durch Zurechnung allgemeiner Modernisierungskosten zur MiFID-Compliance.\n• Baseline-Messung und kontinuierliches Benchmarking: Führen Sie vor Beginn der Implementierung eine umfassende Baseline-Messung relevanter KPIs durch und etablieren Sie ein kontinuierliches Benchmarking, um Veränderungen objektiv erfassen zu können. Berücksichtigen Sie dabei sowohl interne Vergleichswerte als auch externe Benchmarks.\n• Value-Chain-Analyse: Analysieren Sie die gesamte Wertschöpfungskette Ihrer Vertriebsprozesse und identifizieren Sie die spezifischen Punkte, an denen MiFID-konforme Prozesse Mehrwert generieren oder Kosten verursachen. Dies ermöglicht eine gezielte Optimierung der kritischen Wertschöpfungsstufen.\n\n💸 Praktische Implementierungsansätze zur ROI-Optimierung:\n• Prozessdigitalisierung mit Mehrwertfokus: Priorisieren Sie bei der Digitalisierung von MiFID-relevanten Prozessen solche Bereiche, die neben der Compliance-Erfüllung auch signifikante Effizienzgewinne oder Qualitätsverbesserungen versprechen. Nutzen Sie Process-Mining-Technologien, um diese Potenziale präzise zu identifizieren.\n• Synergetische Systemarchitektur: Gestalten Sie Ihre MiFID-Compliance-Systeme so, dass sie gleichzeitig als Plattform für verbesserte Kundenanalysen, personalisierte Beratungsansätze oder datengetriebene Vertriebssteuerung dienen können. Maximieren Sie die Mehrfachnutzung von Daten und Infrastrukturen.\n• Kundenwertsteigerung durch Compliance-Excellence: Entwickeln Sie Strategien, um Ihre MiFID-Compliance als Differenzierungsmerkmal und Qualitätssignal im Markt zu positionieren. Schulen Sie Ihre Berater darin, die durch MiFID geforderte Transparenz und Sorgfalt als Wettbewerbsvorteil und Vertrauensanker im Kundengespräch zu nutzen.\n• Kontinuierliche Prozessoptimierung: Implementieren Sie einen systematischen Prozess zur kontinuierlichen Identifikation und Beseitigung von Ineffizienzen in Ihren MiFID-konformen Vertriebsprozessen. Nutzen Sie Feedback von Beratern und Kunden, um praxisnahe Optimierungspotenziale zu identifizieren und umzusetzen."
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
