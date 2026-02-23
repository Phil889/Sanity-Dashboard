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
    console.log('Updating Basel III Interne/Externe Audit Unterstützung page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'basel-iii-interne-externe-audit-unterstuetzung' })
    
    if (!existingDoc) {
      throw new Error('Document "basel-iii-interne-externe-audit-unterstuetzung" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie unterstützt ADVISORI bei der Vorbereitung auf Aufsichtsgespräche und vor-Ort-Prüfungen im Rahmen von Basel III, und welche Best Practices empfehlen Sie für die Interaktion mit den Aufsichtsbehörden?",
        answer: "Aufsichtsgespräche und vor-Ort-Prüfungen zu Basel III-Anforderungen stellen kritische Momente in der regulatorischen Governance dar, die strategische Vorbereitung und professionelles Stakeholder-Management erfordern. ADVISORIs spezialisierter Unterstützungsansatz kombiniert methodische Prüfungsvorbereitung mit strategischem Aufsichtsdialog, um optimale Prüfungsergebnisse zu erzielen und die regulatorische Reputation nachhaltig zu stärken.\n\n📋 Umfassende Vorbereitung auf Aufsichtsgespräche und Prüfungen:\n• Strategische Prüfungssimulation: Durchführung realistischer End-to-End-Simulationen von Aufsichtsgesprächen und vor-Ort-Prüfungen, die typische Prüfungsschwerpunkte, Fragestellungen und Stresssituationen abdecken und die mentale und fachliche Vorbereitung der Beteiligten signifikant verbessern.\n• Thematische Deep Dives: Identifikation potenzieller Prüfungsschwerpunkte durch Analyse aktueller Aufsichtsprioritäten und institutsspezifischer Risikoprofile, gefolgt von gezielten thematischen Vertiefungen und Nachweisoptimierungen in diesen Bereichen.\n• Stakeholder-Mapping und Vorbereitung: Systematische Identifikation und Vorbereitung aller relevanten Ansprechpartner mit maßgeschneiderten Briefing-Paketen, Rollenklärung und koordinierten Kommunikationsstrategien – ein Ansatz, der Inkonsistenzen in der Außendarstellung minimiert.\n• Evidence Book Optimierung: Strukturierte Aufbereitung und Qualitätssicherung aller prüfungsrelevanten Dokumente und Nachweise in einem intuitiv navigierbaren Format, das die Nachweisführung erleichtert und die Prüfungseffizienz signifikant steigert.\n\n🤝 Best Practices für die Interaktion mit Aufsichtsbehörden:\n• Proaktive Transparenz: Etablierung einer Kommunikationsstrategie, die auf proaktiver Transparenz und Offenheit basiert, potenzielle Schwachstellen selbstkritisch adressiert und bereits initiierte Maßnahmen hervorhebt – ein Ansatz, der das Vertrauen der Aufsicht nachweislich stärkt.\n• Konsistente Governance-Demonstration: Strukturierte Darstellung der regulatorischen Governance mit klaren Verantwortlichkeiten, etablierten Kontrollmechanismen und evidenzbasierter Wirksamkeitsdemonstration, die die Nachhaltigkeit des Compliance-Ansatzes unterstreicht.\n• Balancierte Eskalationsstrategie: Entwicklung einer differenzierten Eskalationsstrategie für kontroverse Diskussionen, die eine sachliche Auseinandersetzung auf Fachebene priorisiert, bei Bedarf aber auch höhere Hierarchieebenen strategisch einbindet.\n• Nachhaltige Follow-up-Kultur: Implementation eines strukturierten Follow-up-Prozesses, der Zusagen an die Aufsicht systematisch erfasst, nachverfolgt und termingerecht umsetzt – ein kritischer Faktor für die langfristige Aufsichtsbeziehung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche spezifischen Prüfungsschwerpunkte adressiert ADVISORIs Basel III Audit-Unterstützung, und wie bereiten Sie Finanzinstitute auf die kritischsten regulatorischen Fokusthemen vor?",
        answer: "Die regulatorische Prüfungslandschaft zu Basel III entwickelt sich kontinuierlich weiter, mit sich verändernden Schwerpunkten und steigenden Anforderungen an Nachweistiefe und Governance-Qualität. ADVISORIs Audit-Unterstützung basiert auf einer systematischen Analyse aktueller und emergenter Prüfungsschwerpunkte und bereitet Finanzinstitute gezielt auf die kritischsten regulatorischen Fokusthemen vor.\n\n🎯 Aktuelle Prüfungsschwerpunkte im Basel III-Kontext:\n• ICAAP/ILAAP Integration und Wirksamkeit: Umfassende Überprüfung der Integration von ICAAP/ILAAP in die strategische Steuerung und Entscheidungsfindung, mit besonderem Fokus auf die methodische Konsistenz, Limitüberwachung und tatsächliche Nutzung in Geschäftsentscheidungen.\n• Datenqualität und Aggregationskapazitäten: Tiefgreifende Analyse der Datenarchitektur, Datenqualitätskontrollen und Aggregationsfähigkeiten für regulatorische Berechnungen und Reportings, einschließlich End-to-End-Datenflüssen, Kontrollen und Governance-Strukturen.\n• Modellrisikomanagement und Validierung: Detaillierte Überprüfung des Modellrisikomanagements mit Fokus auf Modellvalidierungsprozesse, Modellrisikoappetit, Governance-Strukturen und die Implementierung der Output-Floor-Anforderungen.\n• Stress-Testing-Framework und Adverse Szenarien: Kritische Analyse des Stress-Testing-Frameworks, der Szenariodefinition, der Auswirkungsberechnung und der Integration von Stressergebnissen in die Kapital- und Liquiditätsplanung.\n\n🛡️ Spezifische Vorbereitungsstrategien für kritische Fokusthemen:\n• Risk Data Aggregation Readiness: Entwicklung einer umfassenden Assessment- und Optimierungsmethodik für die Datenarchitektur und -prozesse, die BCBS 239-Prinzipien systematisch adressiert und die Nachweisführung gegenüber Prüfern signifikant verbessert.\n• Model Risk Governance Excellence: Implementation eines fortschrittlichen Modellrisikomanagement-Frameworks, das die gesamte Modelllebenszyklussteuerung umfasst und den erhöhten Anforderungen an Modellvalidierung und -überwachung gerecht wird.\n• Capital Planning Integration: Entwicklung einer nachweisstarken Integration von regulatorischen Anforderungen in die Kapitalplanung und -steuerung mit transparenten Entscheidungsprozessen, Limitstrukturen und Management-Involvement.\n• Remediation Playbook Approach: Etablierung strukturierter Remediation Playbooks für typische Findings in Schlüsselbereichen, die vordefinierte Maßnahmen, Verantwortlichkeiten und Zeitpläne enthalten und eine effiziente Reaktion auf Prüfungsfeststellungen ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie etabliert ADVISORIs Basel III Audit-Unterstützung ein nachhaltiges internes Kontrollsystem (IKS), das regulatorische Anforderungen kontinuierlich absichert?",
        answer: "Ein robustes internes Kontrollsystem (IKS) bildet das Fundament regulatorischer Compliance und ist entscheidend für die erfolgreiche Bewältigung von Basel III-Audits. ADVISORIs spezialisierter Ansatz transformiert fragmentierte Kontrollen in ein integriertes, risikoorientiertes IKS, das regulatorische Anforderungen nachhaltig absichert und Prüfungsrisiken signifikant reduziert.\n\n🏗️ Architektur eines nachhaltigen IKS für Basel III:\n• Integrierte Drei-Linien-Verteidigung: Entwicklung einer kohärenten Kontrollarchitektur über alle drei Verteidigungslinien hinweg mit klaren Verantwortlichkeiten, definierten Schnittstellen und koordinierten Kontrollaktivitäten, die Redundanzen minimiert und Kontrolllücken verhindert.\n• Risikoorientierte Kontrollpriorisierung: Implementation einer systematischen Methodik zur Identifikation und Priorisierung von Schlüsselkontrollen basierend auf regulatorischem Risiko, Auswirkungspotenzial und Eintrittswahrscheinlichkeit, die eine effiziente Ressourcenallokation ermöglicht.\n• End-to-End-Prozesskontrolle: Etablierung eines prozessorientierten Kontrollansatzes, der regulatorische Anforderungen über den gesamten Prozesslebenszyklus absichert und typische Schwachstellen an Prozessschnittstellen gezielt adressiert.\n• Evidenzbasierte Kontrolleffektivität: Entwicklung eines strukturierten Frameworks zur kontinuierlichen Bewertung der Kontrolleffektivität mit definierten Metriken, systematischer Evidenzsammlung und transparenter Berichterstattung.\n\n⚙️ Mechanismen für kontinuierliche regulatorische Absicherung:\n• Regulatory Control Lifecycle Management: Implementation eines systematischen Prozesses für die fortlaufende Aktualisierung und Anpassung des Kontrollsystems an regulatorische Änderungen, neue Geschäftsaktivitäten und veränderte Risikoprofile.\n• Control Automation and Analytics: Strategische Automatisierung von Schlüsselkontrollen und Implementation fortschrittlicher Analysetechniken zur Früherkennung von Kontrollschwächen und Anomalien – Maßnahmen, die die Kontrolleffizienz um 40-60% steigern und die Zuverlässigkeit signifikant erhöhen.\n• Integrated Control Testing: Etablierung eines koordinierten Kontrolltest-Programms über alle Verteidigungslinien hinweg mit harmonisierten Testmethodologien, gemeinsamer Evidenzbasis und integrierter Schwachstellenbeseitigung.\n• Control Culture Development: Förderung einer unternehmensweiten Kontrollkultur durch gezielte Awareness-Maßnahmen, Schulungsprogramme und Führungsvorbilder, die regulatorische Verantwortung in der gesamten Organisation verankert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie bereitet ADVISORI Finanzinstitute auf thematische Prüfungen und gezielte regulatorische Reviews im Basel III-Kontext vor, und wie wird dabei die Effizienz der Prüfungsvorbereitung maximiert?",
        answer: "Thematische Prüfungen und gezielte regulatorische Reviews stellen eine wachsende Herausforderung im Basel III-Kontext dar, da sie spezifische Expertise, fokussierte Vorbereitung und maßgeschneiderte Nachweisführung erfordern. ADVISORIs spezialisierter Vorbereitungsansatz kombiniert thematische Tiefe mit methodischer Effizienz, um optimale Prüfungsergebnisse bei minimalem Ressourceneinsatz zu erzielen.\n\n🔍 Strategische Vorbereitung auf thematische Prüfungen:\n• Thematic Risk Radar: Entwicklung eines systematischen Früherkennungssystems für potenzielle thematische Prüfungsschwerpunkte basierend auf Aufsichtskommunikation, Peer-Group-Erfahrungen und institutsspezifischen Risikofaktoren, das proaktive Vorbereitungsmaßnahmen ermöglicht.\n• Deep Dive Assessment Methodology: Implementation einer strukturierten Deep-Dive-Methodik für identifizierte Prüfungsthemen, die den Status quo umfassend analysiert, Schwachstellen systematisch identifiziert und Optimierungspotenziale priorisiert.\n• Targeted Remediation Program: Entwicklung maßgeschneiderter Remediationsprogramme für thematische Schwachstellen mit klaren Verantwortlichkeiten, definierten Meilensteinen und qualitativen Akzeptanzkriterien, die eine effiziente Schwachstellenbeseitigung gewährleisten.\n• Theme-Specific Evidence Repository: Etablierung themenspezifischer Evidenz-Repositories, die alle relevanten Nachweise strukturiert sammeln, qualitätssichern und prüfungsgerecht aufbereiten – ein Ansatz, der die Nachweisführung signifikant erleichtert.\n\n⚡ Effizienzmaximierung in der Prüfungsvorbereitung:\n• Modular Preparation Approach: Entwicklung eines modularen Vorbereitungsansatzes mit standardisierten Bausteinen für wiederkehrende Prüfungsthemen, der die Vorbereitungseffizienz um 30-50% steigert und konsistente Qualität sicherstellt.\n• Resource Optimization Matrix: Implementation einer systematischen Ressourcenallokationsmethodik, die Vorbereitungsaktivitäten nach Risiko, Aufwand und Wirkung priorisiert und die verfügbaren Ressourcen optimal einsetzt.\n• Reusable Evidence Framework: Etablierung eines wiederverwendbaren Evidenz-Frameworks, das einmal erstellte Nachweise systematisch katalogisiert und für zukünftige Prüfungen nutzbar macht – eine Methodik, die den Dokumentationsaufwand über mehrere Prüfungszyklen hinweg um bis zu 60% reduziert.\n• Automated Preparation Tools: Einsatz spezialisierter Automatisierungstools für standardisierte Vorbereitungsaktivitäten wie Datenextraktion, Konsistenzprüfungen und Dokumentationserstellung, die manuelle Aufwände minimieren und die Vorbereitungsqualität erhöhen."
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
    console.log('✅ C-Level FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
