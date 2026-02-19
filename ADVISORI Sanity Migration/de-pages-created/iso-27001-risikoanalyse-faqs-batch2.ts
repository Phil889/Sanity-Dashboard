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
    console.log('Updating ISO 27001 Risikoanalyse page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-risikoanalyse' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-risikoanalyse" not found')
    }
    
    // Create new FAQs for threat analysis and vulnerability assessment
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie werden Bedrohungen in einer ISO 27001 Risikoanalyse systematisch identifiziert und bewertet?',
        answer: "Die systematische Bedrohungsidentifikation und -bewertung ist ein kritischer Baustein der ISO 27001 Risikoanalyse, der eine umfassende Analyse der aktuellen Bedrohungslandschaft mit organisationsspezifischen Risikofaktoren kombiniert. Dieser Prozess erfordert sowohl technische Expertise als auch ein tiefes Verständnis der Geschäftsprozesse und Assets.\n\n🎯 Strukturierte Bedrohungskategorisierung:\n• Cyber-Bedrohungen umfassen Malware, Ransomware, Advanced Persistent Threats, DDoS-Angriffe und Zero-Day-Exploits\n• Interne Bedrohungen berücksichtigen böswillige Insider, unbeabsichtigte Fehler, Privilegienmissbrauch und Social Engineering\n• Physische Bedrohungen analysieren Einbruch, Diebstahl, Vandalismus, Naturkatastrophen und Umgebungsrisiken\n• Technische Bedrohungen bewerten Systemausfälle, Hardware-Defekte, Software-Bugs und Konfigurationsfehler\n• Organisatorische Bedrohungen erfassen Prozessfehler, mangelnde Governance, unzureichende Schulungen und Compliance-Verstöße\n\n🔍 Threat Intelligence Integration:\n• Nutzung aktueller Threat Intelligence Feeds und Sicherheitsberichte für branchenspezifische Bedrohungsanalyse\n• Analyse von MITRE ATT&CK Framework Techniken und Taktiken für systematische Bedrohungsmodellierung\n• Berücksichtigung geopolitischer Faktoren und staatlich unterstützter Angreifergruppen\n• Integration von Vulnerability Databases und CVE-Informationen für technische Bedrohungsbewertung\n• Monitoring von Dark Web Intelligence und Cybercrime-Trends für proaktive Risikoerkennung\n\n⚡ Threat Actor Profiling:\n• Analyse verschiedener Angreifertypen von Cyberkriminellen über Hacktivisten bis hin zu staatlichen Akteuren\n• Bewertung von Motivationen, Fähigkeiten, Ressourcen und typischen Angriffsvektoren\n• Berücksichtigung der Attraktivität der Organisation als Ziel für verschiedene Angreifergruppen\n• Analyse historischer Angriffe auf ähnliche Organisationen oder Branchen\n• Bewertung der Wahrscheinlichkeit gezielter Angriffe basierend auf Organisationsprofil und Assets\n\n📊 Bedrohungswahrscheinlichkeit und Impact:\n• Quantitative Bewertung der Eintrittswahrscheinlichkeit basierend auf historischen Daten und Threat Intelligence\n• Qualitative Einschätzung schwer quantifizierbarer Bedrohungen durch Expertenbeurteilung\n• Szenario-basierte Analyse für komplexe, mehrstufige Angriffe\n• Berücksichtigung saisonaler Schwankungen und ereignisbasierter Risikosteigerungen\n• Integration von Frühwarnindikatoren und Threat Hunting Erkenntnissen\n\n🛡️ Bedrohungskontext und Priorisierung:\n• Mapping von Bedrohungen zu spezifischen Assets und Geschäftsprozessen\n• Bewertung der Wirksamkeit bestehender Schutzmaßnahmen gegen identifizierte Bedrohungen\n• Priorisierung basierend auf Kombination aus Wahrscheinlichkeit, Impact und aktueller Schutzlage\n• Berücksichtigung von Angriffsketten und kaskadierenden Effekten\n• Entwicklung von Bedrohungsszenarien für Business Continuity Planning"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche Rolle spielt die Schwachstellenanalyse in der ISO 27001 Risikoanalyse?',
        answer: "Die Schwachstellenanalyse ist ein fundamentaler Bestandteil der ISO 27001 Risikoanalyse, der systematisch Sicherheitslücken in technischen Systemen, organisatorischen Prozessen und menschlichen Faktoren identifiziert. Sie bildet die Grundlage für das Verständnis, wie Bedrohungen tatsächlich zu Sicherheitsvorfällen werden können.\n\n🔧 Technische Schwachstellenanalyse:\n• Automatisierte Vulnerability Scans aller IT-Systeme, Netzwerkkomponenten und Anwendungen\n• Penetrationstests zur Validierung kritischer Schwachstellen und Angriffspfade\n• Code-Reviews und Static Application Security Testing für selbstentwickelte Software\n• Konfigurationsanalyse von Servern, Netzwerkgeräten und Sicherheitssystemen\n• Assessment von Cloud-Konfigurationen und Container-Sicherheit\n\n👥 Organisatorische und prozessuale Schwachstellen:\n• Analyse von Sicherheitsrichtlinien und deren praktischer Umsetzung\n• Bewertung von Zugriffskontrollprozessen und Berechtigungsmanagement\n• Überprüfung von Change Management und Patch Management Prozessen\n• Assessment von Incident Response und Business Continuity Verfahren\n• Evaluation von Vendor Management und Third-Party Risk Management\n\n🧠 Human Factor und Awareness-Schwachstellen:\n• Social Engineering Assessments zur Bewertung der Mitarbeiteranfälligkeit\n• Phishing-Simulationen und Security Awareness Evaluierung\n• Analyse von Schulungsprogrammen und deren Wirksamkeit\n• Bewertung der Sicherheitskultur und des Risikobewusstseins\n• Assessment von Insider Threat Indikatoren und Präventionsmaßnahmen\n\n🏢 Physische und Umgebungsschwachstellen:\n• Bewertung der physischen Zugangskontrollen und Perimetersicherheit\n• Analyse von Überwachungssystemen und Alarmanlagen\n• Assessment von Umgebungskontrollen wie Klimatisierung, Stromversorgung und Brandschutz\n• Evaluation von Clean Desk Policies und Dokumentensicherheit\n• Überprüfung von Besuchermanagement und Facility Security\n\n📈 Schwachstellenpriorisierung und -behandlung:\n• CVSS-basierte Bewertung technischer Schwachstellen mit organisationsspezifischen Anpassungen\n• Berücksichtigung der Ausnutzbarkeit und verfügbarer Exploits\n• Mapping von Schwachstellen zu kritischen Assets und Geschäftsprozessen\n• Entwicklung von Remediation-Plänen mit realistischen Zeitrahmen\n• Etablierung kontinuierlicher Vulnerability Management Prozesse"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie wird das Risiko in einer ISO 27001 Risikoanalyse quantifiziert und priorisiert?',
        answer: "Die Risikoquantifizierung und -priorisierung in der ISO 27001 Risikoanalyse kombiniert mathematische Modelle mit praktischer Geschäftserfahrung, um eine objektive und nachvollziehbare Grundlage für Risikomanagement-Entscheidungen zu schaffen. Dieser Prozess ermöglicht es, begrenzte Ressourcen optimal einzusetzen.\n\n📊 Quantitative Risikobewertungsmodelle:\n• Single Loss Expectancy Berechnung basierend auf Asset-Wert und Schadenspotenzial\n• Annual Rate of Occurrence Bestimmung durch historische Daten und Threat Intelligence\n• Annual Loss Expectancy als Produkt aus SLE und ARO für finanzielle Risikoquantifizierung\n• Monte Carlo Simulationen für komplexe Risikoszenarien mit multiplen Variablen\n• Value at Risk Berechnungen für Portfolio-basierte Risikobewertung\n\n🎯 Qualitative Bewertungsmethoden:\n• Risikomatrizen mit definierten Wahrscheinlichkeits- und Auswirkungsskalen\n• Expertenbewertungen für schwer quantifizierbare Risiken wie Reputationsschäden\n• Delphi-Methode für konsensbasierte Risikobewertung in Expertengruppen\n• Szenario-Analyse für strategische und emerging Risks\n• Bow-Tie-Analyse für komplexe Risiken mit multiplen Ursachen und Auswirkungen\n\n⚖️ Hybrid-Ansätze und Best Practices:\n• Kombination quantitativer und qualitativer Methoden je nach Risikotyp und Datenverfügbarkeit\n• FAIR-Framework Implementation für strukturierte quantitative Risikoanalyse\n• Bayesian Networks für probabilistische Risikobewertung mit Unsicherheiten\n• Sensitivity Analysis zur Bewertung der Robustheit von Risikobewertungen\n• Stress Testing für extreme Szenarien und Black Swan Events\n\n🏆 Risiko-Priorisierung und Ranking:\n• Multi-Kriterien-Entscheidungsanalyse unter Berücksichtigung verschiedener Risikodimensionen\n• Risiko-Heatmaps für visuelle Darstellung und Management-Kommunikation\n• Pareto-Analyse zur Identifikation der kritischsten Risiken\n• Risiko-Appetit und Toleranz-basierte Schwellenwerte für Behandlungsentscheidungen\n• Dynamic Risk Scoring mit kontinuierlicher Anpassung an veränderte Bedingungen\n\n📈 Kontinuierliche Risikobewertung und Monitoring:\n• Key Risk Indicators für Echtzeit-Risikobewertung und Frühwarnung\n• Automated Risk Assessment Tools für kontinuierliche technische Risikobewertung\n• Trend-Analyse für die Entwicklung von Risikoprofilen über Zeit\n• Benchmark-Vergleiche mit Branchenstandards und Peer-Organisationen\n• Feedback-Loops aus Incident Response für Verbesserung der Risikobewertungsgenauigkeit"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Herausforderungen gibt es bei der Durchführung einer ISO 27001 Risikoanalyse und wie werden sie bewältigt?',
        answer: "Die Durchführung einer ISO 27001 Risikoanalyse bringt verschiedene methodische, organisatorische und technische Herausforderungen mit sich, die durch strukturierte Ansätze, bewährte Praktiken und kontinuierliche Verbesserung erfolgreich bewältigt werden können.\n\n🎯 Vollständigkeit und Scope-Definition:\n• Herausforderung der vollständigen Asset-Erfassung in komplexen, dynamischen IT-Landschaften\n• Schwierigkeit bei der Abgrenzung des ISMS-Scope und Berücksichtigung von Abhängigkeiten\n• Lösung durch systematische Discovery-Tools, Asset-Management-Integration und iterative Scope-Verfeinerung\n• Etablierung klarer Governance-Strukturen für Scope-Änderungen und Asset-Updates\n• Verwendung von RACI-Matrizen für eindeutige Verantwortlichkeiten bei der Asset-Identifikation\n\n📊 Datenqualität und Verfügbarkeit:\n• Mangel an historischen Sicherheitsdaten für quantitative Risikobewertung\n• Unvollständige oder veraltete Informationen über Assets, Bedrohungen und Schwachstellen\n• Lösung durch Aufbau systematischer Datensammlung und Integration externer Threat Intelligence\n• Implementation von Data Quality Management Prozessen und regelmäßigen Datenvalidierungen\n• Nutzung von Branchenbenchmarks und Peer-Daten für fehlende organisationsspezifische Informationen\n\n🤝 Stakeholder-Engagement und Ressourcen:\n• Schwierigkeit bei der Einbindung aller relevanten Stakeholder und Fachbereiche\n• Konkurrierende Prioritäten und begrenzte Verfügbarkeit von Experten\n• Lösung durch strukturierte Stakeholder-Analyse und maßgeschneiderte Kommunikationsstrategien\n• Entwicklung effizienter Workshop-Formate und asynchroner Bewertungsmethoden\n• Schaffung von Anreizsystemen und Management-Unterstützung für aktive Teilnahme\n\n⚡ Dynamik und Aktualität:\n• Schnelle Veränderungen in der Bedrohungslandschaft und Technologieumgebung\n• Herausforderung der kontinuierlichen Aktualisierung ohne übermäßigen Aufwand\n• Lösung durch automatisierte Monitoring-Systeme und Trigger-basierte Neubewertungen\n• Implementation von Continuous Risk Assessment Prozessen mit definierten Update-Zyklen\n• Nutzung von Machine Learning für Anomalie-Erkennung und Risikoveränderungen\n\n🎨 Subjektivität und Konsistenz:\n• Unterschiedliche Risikoperzeptionen und Bewertungsansätze verschiedener Stakeholder\n• Schwierigkeit bei der Standardisierung qualitativer Bewertungskriterien\n• Lösung durch klare Bewertungsrichtlinien, Kalibrierungs-Workshops und Peer-Reviews\n• Verwendung strukturierter Bewertungsframeworks und Referenzszenarien\n• Etablierung von Governance-Prozessen für Bewertungskonflikte und Eskalationen"
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
    console.log('✅ FAQ batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
