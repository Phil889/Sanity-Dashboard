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
    console.log('Updating NIS2 Compliance Roadmap page with C-Level FAQs batch 3 (German)...')
    
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
        _key: generateKey('faq', 9),
        question: "Wie gewährleistet ADVISORI, dass unsere NIS2 Compliance Roadmap flexibel genug ist, um auf sich ändernde regulatorische Anforderungen und Bedrohungslandschaften zu reagieren?",
        answer: "In der sich rasant entwickelnden Cybersicherheitslandschaft ist Adaptabilität ein kritischer Erfolgsfaktor für nachhaltige NIS2-Compliance. ADVISORI entwickelt keine starren Implementierungspläne, sondern adaptive Roadmaps, die flexibel auf neue Bedrohungen, Technologien und regulatorische Entwicklungen reagieren können.\n\n🔄 Adaptive Roadmap-Architektur:\n• Modularer Aufbau: Implementierung in flexiblen Bausteinen, die unabhängig angepasst oder erweitert werden können, ohne die Gesamtarchitektur zu destabilisieren.\n• Continuous Monitoring Framework: Systematische Überwachung von Regulatory Changes, Threat Intelligence und Technology Trends mit automatisierten Alerting-Mechanismen.\n• Scenario Planning Integration: Entwicklung multipler Zukunftsszenarien mit entsprechenden Kontingenzplänen für verschiedene regulatorische und technologische Entwicklungen.\n• Agile Governance Structures: Flexible Entscheidungsprozesse, die schnelle Anpassungen bei kritischen Veränderungen ermöglichen ohne bürokratische Verzögerungen.\n\n⚡ Proaktive Anpassungsmechanismen:\n• Regulatory Radar System: Kontinuierliche Beobachtung von ENISA, nationalen Behörden und anderen relevanten Regulatoren zur frühzeitigen Erkennung von Änderungen.\n• Threat Intelligence Integration: Einbettung aktueller Bedrohungsanalysen in die Roadmap-Planung zur proaktiven Risikoaddressierung.\n• Technology Scouting: Systematische Bewertung neuer Cybersicherheitstechnologien auf ihre Relevanz für NIS2-Compliance und Geschäftswert.\n• Stakeholder Feedback Loops: Regelmäßige Reviews mit internen und externen Stakeholdern zur Identifikation von Anpassungsbedarfen.\n\n🛠️ ADVISORIs Flexibilitäts-Framework:\n• Living Document Approach: Die Roadmap wird als dynamisches, kontinuierlich aktualisiertes Dokument geführt, nicht als statischer Plan.\n• Version Control und Change Management: Professionelle Verwaltung von Roadmap-Änderungen mit Auswirkungsanalysen und Stakeholder-Kommunikation.\n• Rapid Response Capabilities: Etablierung von Schnellreaktionsteams für kritische Anpassungen bei akuten Bedrohungen oder regulatorischen Änderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche spezifischen Governance-Strukturen und Verantwortlichkeiten müssen auf C-Level etabliert werden, um eine erfolgreiche NIS2 Compliance Roadmap zu steuern?",
        answer: "Die erfolgreiche Steuerung einer NIS2 Compliance Roadmap erfordert fundamentale Veränderungen in der Corporate Governance, die Cybersicherheit von einer operativen IT-Funktion zu einer strategischen Geschäftsverantwortung auf höchster Führungsebene transformieren. Diese Governance-Evolution ist kritisch für nachhaltige Compliance und Geschäftserfolg.\n\n👔 C-Level Governance-Architektur für NIS2:\n• Chief Information Security Officer (CISO) Empowerment: Direkte Berichtslinie zum CEO/Board mit eigenständiger Budget- und Entscheidungsverantwortung für strategische Cybersicherheitsinitiativen.\n• Board-Level Cybersecurity Committee: Etablierung eines spezialisierten Ausschusses mit mindestens einem Cybersicherheitsexperten zur strategischen Oversight und Risikobewertung.\n• Cross-Functional Executive Team: Integration von CRO, COO, CFO und anderen C-Level-Positionen in die Cybersicherheits-Governance für ganzheitliche Risikosteuerung.\n• External Advisory Integration: Einbindung externer Cybersicherheitsexperten und Regulatory Specialists in Governance-Strukturen für unabhängige Bewertungen.\n\n⚖️ Verantwortlichkeits-Matrix und Accountability:\n• CEO Ultimate Accountability: Klare Definition der CEO-Verantwortung für Cybersicherheitsstrategie und NIS2-Compliance mit entsprechender Haftung.\n• Geschäftsbereichs-Ownership: Delegation spezifischer Cybersicherheitsverantwortungen an Geschäftsbereichsleiter für operationalisierte Umsetzung.\n• Risk Committee Oversight: Systematische Integration von Cybersicherheitsrisiken in bestehende Risikomanagement-Committees mit regelmäßiger Berichterstattung.\n• Audit Committee Involvement: Erweiterte Prüfungsverantwortung für Cybersicherheits-Controls und NIS2-Compliance-Status.\n\n🎯 ADVISORIs Governance-Design-Prinzipien:\n• Clear Lines of Authority: Eindeutige Entscheidungskompetenzen und Eskalationswege ohne Verantwortungslücken oder -überschneidungen.\n• Balanced Oversight: Angemessene Balance zwischen strategischer Führung und operativer Flexibilität zur Sicherstellung effektiver Umsetzung.\n• Performance Management Integration: Einbettung von NIS2-Compliance-Zielen in Executive Compensation und Performance Reviews für nachhaltige Incentivierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie adressiert eine NIS2 Compliance Roadmap die komplexen Herausforderungen der Supply Chain Security und Third-Party Risk Management?",
        answer: "Supply Chain Security und Third-Party Risk Management stellen unter NIS2 eine der komplexesten Herausforderungen dar, da Organisationen nicht nur für ihre eigene Cybersicherheit, sondern auch für die ihrer gesamten Lieferanten- und Partnerökosysteme verantwortlich sind. ADVISORI entwickelt ganzheitliche Ansätze, die diese erweiterte Verantwortung strategisch und operativ adressieren.\n\n🌐 Erweiterte Verantwortungslandschaft unter NIS2:\n• Ecosystem Accountability: NIS2 macht Organisationen für Cybersicherheitsvorfälle verantwortlich, die durch Schwachstellen in der Lieferkette entstehen, auch wenn sie nicht direkt verschuldet sind.\n• Continuous Monitoring Requirements: Verpflichtung zur kontinuierlichen Überwachung und Bewertung der Cybersicherheitspositionierung aller kritischen Lieferanten und Partner.\n• Incident Response Coordination: Notwendigkeit koordinierter Incident Response-Fähigkeiten über Unternehmensgrenzen hinweg mit allen relevanten Stakeholdern.\n• Contractual Security Standards: Integration verbindlicher Cybersicherheitsanforderungen in alle Lieferanten- und Partnerverträge mit enforcement-Mechanismen.\n\n🔗 Strategisches Supply Chain Security Framework:\n• Risk-Based Vendor Segmentation: Klassifizierung aller Third Parties nach Kritikalität und Risikopotenzial für priorisierte Ressourcenallokation.\n• Due Diligence Intensification: Erweiterte Cybersicherheits-Assessments vor Vertragsabschluss mit kontinuierlicher Re-Evaluation bestehender Partner.\n• Shared Security Standards: Entwicklung gemeinsamer Cybersicherheitsstandards mit Schlüsselpartnern für Ecosystem-weite Resilienz.\n• Supply Chain Resilience Planning: Aufbau von Backup-Lieferanten und Notfallplänen für kritische Services bei Cybersicherheitsvorfällen.\n\n🛡️ ADVISORIs Third-Party Risk Management-Ansatz:\n• Automated Vendor Risk Assessment: Implementierung kontinuierlicher, automatisierter Bewertungssysteme für die Cybersicherheitspositionierung aller relevanten Third Parties.\n• Collaborative Security Programs: Entwicklung von Partnership-Programmen, die gemeinsame Cybersicherheitsinvestitionen und -verbesserungen incentivieren.\n• Digital Supply Chain Mapping: Vollständige Visualisierung und Analyse aller digitalen Abhängigkeiten und Risikopfade im erweiterten Unternehmensökosystem."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Welche Rolle spielen Emerging Technologies wie KI, IoT und Cloud Computing in einer zukunftsorientierten NIS2 Compliance Roadmap?",
        answer: "Emerging Technologies stellen sowohl Enabler als auch Herausforderung für NIS2-Compliance dar. Eine zukunftsorientierte Roadmap muss diese Technologien strategisch nutzen, um Compliance-Effizienz zu steigern, während gleichzeitig die neuen Risiken und regulatorischen Implikationen proaktiv adressiert werden.\n\n🤖 KI als Compliance-Accelerator und Risikofaktor:\n• Automated Threat Detection: Einsatz von Machine Learning zur Echtzeit-Erkennung von Cybersicherheitsbedrohungen mit deutlich höherer Genauigkeit als traditionelle Ansätze.\n• Intelligent Compliance Monitoring: KI-gestützte Systeme zur kontinuierlichen Überwachung der NIS2-Compliance-Status mit prädiktiven Warnungen vor potenziellen Verstößen.\n• AI Security Risks: Neue Angriffsvektoren durch AI Poisoning, Adversarial Attacks und Model Theft erfordern spezielle Schutzmaßnahmen in der Roadmap.\n• Explainable AI Requirements: Sicherstellung der Nachvollziehbarkeit KI-basierter Sicherheitsentscheidungen für regulatorische Compliance und Audit-Anforderungen.\n\n☁️ Cloud-First Security Architecture:\n• Cloud-Native Security: Entwicklung von Security-Architekturen, die Cloud-spezifische Sicherheitsmodelle und Shared Responsibility Models optimal nutzen.\n• Multi-Cloud Risk Management: Strategien für die sichere Nutzung multipler Cloud-Provider zur Vermeidung von Vendor Lock-in und Erhöhung der Resilienz.\n• Edge Computing Integration: Berücksichtigung der erweiterten Angriffsfläche durch Edge Computing und IoT in der NIS2-Compliance-Strategie.\n• Zero Trust Implementation: Cloud-unterstützte Zero Trust-Architekturen als Fundament für moderne, NIS2-konforme Sicherheitslandschaften.\n\n🌐 IoT und Operational Technology Security:\n• Expanded Attack Surface: Systematische Inventarisierung und Absicherung aller IoT-Devices und OT-Systeme als kritische Komponenten der NIS2-Compliance.\n• Device Lifecycle Management: End-to-End Security für IoT-Devices von der Beschaffung bis zur sicheren Entsorgung.\n• OT/IT Convergence Security: Spezielle Sicherheitsmaßnahmen für die zunehmende Konvergenz von Operational Technology und IT-Systemen.\n\n🚀 ADVISORIs Technology-Forward Roadmap-Ansatz:\n• Innovation Labs: Etablierung dedizierter Bereiche für das sichere Experimentieren mit neuen Technologien vor produktiver Einführung.\n• Technology Risk Assessment: Systematische Bewertung aller neuen Technologien auf ihre NIS2-Compliance-Implikationen vor der Implementierung."
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
