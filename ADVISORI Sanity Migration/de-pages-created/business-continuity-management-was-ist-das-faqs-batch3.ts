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
    console.log('Updating Business Continuity Management Was ist das page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'business-continuity-management-was-ist-das' })
    
    if (!existingDoc) {
      throw new Error('Document "business-continuity-management-was-ist-das" not found')
    }
    
    // Create new FAQs for BCM Was ist das standards and frameworks
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Welche internationalen Standards und Frameworks existieren für Business Continuity Management?',
        answer: "Business Continuity Management wird durch verschiedene internationale Standards und Frameworks unterstützt, die bewährte Praktiken, Methoden und Anforderungen definieren. Diese Standards bieten strukturierte Ansätze für die Entwicklung, Implementierung und kontinuierliche Verbesserung von BCM-Programmen.\n\n📋 ISO 22301 - Business Continuity Management Systems:\n• Der führende internationale Standard für BCM-Managementsysteme\n• Definiert Anforderungen für die Planung, Etablierung, Implementierung, Betrieb, Überwachung, Überprüfung, Wartung und kontinuierliche Verbesserung von BCM-Systemen\n• Basiert auf dem Plan-Do-Check-Act-Zyklus für kontinuierliche Verbesserung\n• Ermöglicht Zertifizierung und externe Validierung von BCM-Programmen\n• Integriert sich nahtlos in andere Managementsysteme wie ISO 27001 oder ISO 9001\n\n🌐 ISO 22313 - Guidance for Business Continuity Management:\n• Bietet detaillierte Anleitung zur Implementierung von ISO 22301\n• Erklärt bewährte Praktiken und Methoden für verschiedene BCM-Aktivitäten\n• Unterstützt Organisationen bei der praktischen Umsetzung von BCM-Anforderungen\n• Enthält Beispiele, Checklisten und praktische Hinweise\n• Hilft bei der Interpretation und Anwendung der ISO 22301-Anforderungen\n\n🔍 ISO 22317 - Business Impact Analysis:\n• Spezialisierter Standard für die Durchführung von Business Impact Analysen\n• Definiert systematische Methoden zur Bewertung von Geschäftsauswirkungen\n• Bietet Anleitung zur Identifikation kritischer Geschäftsfunktionen\n• Unterstützt bei der Bestimmung von Recovery Time Objectives und Recovery Point Objectives\n• Integriert quantitative und qualitative Bewertungsmethoden\n\n🧪 ISO 22398 - Guidelines for Exercises and Testing:\n• Fokussiert auf die Planung, Durchführung und Bewertung von BCM-Übungen\n• Definiert verschiedene Übungstypen und deren Anwendungsbereiche\n• Bietet Methoden zur Messung der Effektivität von BCM-Maßnahmen\n• Unterstützt bei der Entwicklung von Übungsprogrammen\n• Hilft bei der kontinuierlichen Verbesserung durch systematisches Testen\n\n🏛️ NIST Cybersecurity Framework:\n• Umfassendes Framework für Cybersecurity und digitale Resilienz\n• Integriert BCM-Prinzipien in Cybersecurity-Strategien\n• Definiert Funktionen: Identify, Protect, Detect, Respond, Recover\n• Bietet risikobasierte Ansätze für Cyber-Resilienz\n• Unterstützt bei der Integration von Cyber- und physischer Sicherheit\n\n🇬🇧 BS 25999 und PAS 2080:\n• Britische Standards, die Vorläufer von ISO 22301 waren\n• Bieten zusätzliche Perspektiven und bewährte Praktiken\n• PAS 2080 fokussiert auf Infrastruktur-Resilienz\n• Unterstützen branchenspezifische BCM-Ansätze\n• Ergänzen internationale Standards mit lokalen Anforderungen\n\n🌏 Regionale und branchenspezifische Standards:\n• ASIS SPC.1 Standard für organisationale Resilienz\n• COBIT für IT-Governance und BCM-Integration\n• COSO für interne Kontrollen und Risikomanagement\n• Branchenspezifische Frameworks für Finanzdienstleistungen, Gesundheitswesen, kritische Infrastrukturen\n• Nationale Standards und regulatorische Anforderungen verschiedener Länder"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Wie misst und bewertet man die Effektivität eines Business Continuity Management Programms?',
        answer: "Die Messung und Bewertung der Effektivität von Business Continuity Management erfordert einen systematischen Ansatz mit quantitativen und qualitativen Metriken. Effektive Messung ermöglicht kontinuierliche Verbesserung und demonstriert den Wert von BCM-Investitionen.\n\n📊 Quantitative Leistungsindikatoren:\n• Recovery Time Actual vs. Recovery Time Objective für kritische Prozesse\n• Recovery Point Actual vs. Recovery Point Objective für Datenwiederherstellung\n• Mean Time to Recovery bei verschiedenen Störungstypen\n• Verfügbarkeitsraten kritischer Systeme und Services\n• Kosten vermiedener Ausfälle und Geschäftsunterbrechungen\n\n🎯 Qualitative Bewertungskriterien:\n• Vollständigkeit und Aktualität von Business Continuity Plänen\n• Qualität und Realitätsnähe von Übungen und Tests\n• Mitarbeiter-Awareness und Kompetenz in BCM-Themen\n• Integration von BCM in Geschäftsprozesse und Entscheidungsfindung\n• Stakeholder-Zufriedenheit mit BCM-Kapazitäten und -Performance\n\n🧪 Übungs- und Testmetriken:\n• Häufigkeit und Abdeckung von BCM-Übungen\n• Anzahl identifizierter Verbesserungsmöglichkeiten pro Übung\n• Zeit zur Implementierung von Lessons Learned\n• Erfolgsrate bei der Erreichung von Übungszielen\n• Teilnahme und Engagement bei BCM-Übungen\n\n📈 Reife- und Entwicklungsindikatoren:\n• BCM-Reifegrad basierend auf etablierten Reifegradmodellen\n• Fortschritt bei der Implementierung von BCM-Standards\n• Anzahl zertifizierter BCM-Fachkräfte in der Organisation\n• Integration von BCM in strategische Planungsprozesse\n• Entwicklung einer Resilienz-Kultur in der Organisation\n\n💰 Finanzielle und geschäftliche Metriken:\n• Return on Investment von BCM-Maßnahmen\n• Reduzierung von Versicherungsprämien durch BCM\n• Kosteneinsparungen durch vermiedene Ausfälle\n• Umsatzschutz während Störungen\n• Verbesserung von Kunden- und Stakeholder-Zufriedenheit\n\n🔄 Kontinuierliche Verbesserungsindikatoren:\n• Anzahl implementierter Verbesserungsmaßnahmen pro Zeitraum\n• Zeit zwischen Identifikation und Umsetzung von Verbesserungen\n• Reduzierung von Vulnerabilitäten und Risiken\n• Erhöhung der organisationalen Anpassungsfähigkeit\n• Entwicklung innovativer BCM-Lösungen und -Ansätze\n\n📋 Compliance und Governance-Metriken:\n• Erfüllung regulatorischer BCM-Anforderungen\n• Ergebnisse interner und externer BCM-Audits\n• Vollständigkeit der BCM-Dokumentation\n• Einhaltung von BCM-Policies und -Verfahren\n• Management-Engagement und -Unterstützung für BCM\n\n🌐 Stakeholder- und externe Bewertung:\n• Feedback von Kunden, Partnern und Lieferanten\n• Bewertungen durch Aufsichtsbehörden und Auditoren\n• Branchenbenchmarking und Peer-Vergleiche\n• Medien- und öffentliche Wahrnehmung der Resilienz\n• Ratings von Ratingagenturen und Investoren"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Welche Herausforderungen und Hindernisse treten häufig bei der BCM-Implementierung auf?',
        answer: "Die Implementierung von Business Continuity Management bringt verschiedene Herausforderungen mit sich, die systematisch adressiert werden müssen. Das Verständnis dieser Hindernisse ermöglicht proaktive Lösungsansätze und erhöht die Erfolgswahrscheinlichkeit von BCM-Initiativen.\n\n👥 Organisatorische und kulturelle Herausforderungen:\n• Mangelndes Management-Commitment und unzureichende Ressourcenzuteilung\n• Widerstand gegen Veränderungen und etablierte Arbeitsweisen\n• Silodenken zwischen Abteilungen und mangelnde Zusammenarbeit\n• Unzureichende BCM-Awareness und fehlende Resilienz-Kultur\n• Schwierigkeiten bei der Integration von BCM in bestehende Prozesse\n\n💰 Finanzielle und Ressourcen-Hindernisse:\n• Wahrnehmung von BCM als Kostenfaktor ohne direkten Nutzen\n• Schwierigkeiten bei der Quantifizierung von BCM-Vorteilen und ROI\n• Konkurrenz um begrenzte Budgets mit anderen Prioritäten\n• Unzureichende Personalressourcen für BCM-Aktivitäten\n• Hohe Kosten für BCM-Technologien und externe Beratung\n\n🔍 Technische und methodische Schwierigkeiten:\n• Komplexität moderner IT-Landschaften und Abhängigkeiten\n• Schwierigkeiten bei der Identifikation aller kritischen Prozesse und Abhängigkeiten\n• Herausforderungen bei der Bestimmung realistischer Recovery-Ziele\n• Integration verschiedener Systeme und Technologien\n• Mangel an geeigneten BCM-Tools und -Plattformen\n\n📋 Planungs- und Dokumentationsherausforderungen:\n• Überkomplexe oder unvollständige Business Continuity Pläne\n• Schwierigkeiten bei der Aktualisierung von Plänen in dynamischen Umgebungen\n• Mangelnde Standardisierung von BCM-Prozessen und -Dokumentation\n• Herausforderungen bei der Koordination zwischen verschiedenen Standorten\n• Unzureichende Dokumentation von Abhängigkeiten und Schnittstellen\n\n🧪 Test- und Validierungsherausforderungen:\n• Schwierigkeiten bei der Durchführung realistischer Tests ohne Geschäftsunterbrechung\n• Mangelnde Zeit und Ressourcen für regelmäßige Übungen\n• Widerstand gegen Tests aufgrund von Störungsängsten\n• Herausforderungen bei der Bewertung von Testergebnissen\n• Unzureichende Umsetzung von Lessons Learned aus Tests\n\n🌐 Externe und umgebungsbedingte Faktoren:\n• Sich schnell ändernde Bedrohungslandschaften und neue Risiken\n• Komplexe regulatorische Anforderungen und Compliance-Herausforderungen\n• Abhängigkeiten von externen Partnern und Lieferanten\n• Globale Lieferketten und internationale Koordinationsherausforderungen\n• Klimawandel und zunehmende Extremwetterereignisse\n\n🎓 Kompetenz- und Wissensherausforderungen:\n• Mangel an qualifizierten BCM-Fachkräften\n• Unzureichende BCM-Ausbildung und -Zertifizierung\n• Schwierigkeiten beim Wissenstransfer und der Kompetenzentwicklung\n• Herausforderungen bei der Aufrechterhaltung von BCM-Expertise\n• Mangelnde Verfügbarkeit von BCM-Schulungen und -Ressourcen\n\n🔄 Kontinuierliche Verbesserung und Anpassung:\n• Schwierigkeiten bei der Aufrechterhaltung von BCM-Momentum nach der Implementierung\n• Herausforderungen bei der kontinuierlichen Aktualisierung und Verbesserung\n• Mangelnde Integration von BCM in strategische Planungsprozesse\n• Schwierigkeiten bei der Messung und Demonstration von BCM-Wert\n• Herausforderungen bei der Anpassung an sich ändernde Geschäftsanforderungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Wie entwickelt sich Business Continuity Management in der Zukunft und welche Trends sind zu erwarten?',
        answer: "Business Continuity Management entwickelt sich kontinuierlich weiter, getrieben von technologischen Innovationen, sich ändernden Risikoprofilen und neuen gesellschaftlichen Anforderungen. Die Zukunft von BCM wird durch mehrere transformative Trends geprägt, die neue Möglichkeiten und Herausforderungen schaffen.\n\n🤖 Künstliche Intelligenz und Automatisierung:\n• Predictive Analytics für proaktive Risikenerkennung und Störungsvorhersage\n• Automatisierte Aktivierung von BCM-Maßnahmen basierend auf Echtzeit-Daten\n• KI-gestützte Entscheidungsunterstützung für Krisenmanagement\n• Machine Learning für kontinuierliche Optimierung von BCM-Strategien\n• Intelligente Chatbots und virtuelle Assistenten für Notfallkommunikation\n\n🌐 Digitale Transformation und Cloud-native BCM:\n• Vollständig cloudbasierte BCM-Plattformen mit globaler Verfügbarkeit\n• Microservices-Architekturen für modulare und skalierbare BCM-Lösungen\n• Edge Computing für dezentrale Resilienz und reduzierte Latenz\n• Digital Twins für Simulation und Optimierung von BCM-Szenarien\n• Blockchain für sichere und unveränderliche BCM-Dokumentation\n\n🔗 Ecosystem-weite Resilienz:\n• Kollaborative BCM-Netzwerke zwischen Organisationen und Branchen\n• Shared Resilience-Plattformen für gegenseitige Unterstützung\n• Supply Chain Resilience als integraler Bestandteil von BCM\n• Multi-Stakeholder-Ansätze für systemische Resilienz\n• Regionale und nationale Resilienz-Initiativen\n\n🌱 Nachhaltigkeit und ESG-Integration:\n• Integration von Klimaresilienz in BCM-Strategien\n• Berücksichtigung von ESG-Kriterien in BCM-Entscheidungen\n• Circular Economy-Prinzipien in BCM-Planung\n• Soziale Verantwortung und Community-Resilienz\n• Nachhaltige BCM-Technologien und -Praktiken\n\n📱 Hyper-Connected und Mobile BCM:\n• Ubiquitous Computing für allgegenwärtige BCM-Kapazitäten\n• 5G und 6G-Technologien für verbesserte Konnektivität\n• Augmented und Virtual Reality für immersive BCM-Training\n• Wearable Devices für kontinuierliches Monitoring und Alarmierung\n• Internet of Things für umfassende Situational Awareness\n\n🧬 Adaptive und selbstheilende Systeme:\n• Self-healing Infrastructure für automatische Wiederherstellung\n• Adaptive BCM-Systeme, die sich selbst an neue Bedrohungen anpassen\n• Chaos Engineering für proaktive Resilienz-Tests\n• Antifragile Systeme, die von Störungen profitieren\n• Biomimetic Approaches für natürlich inspirierte Resilienz\n\n🔐 Cyber-Physical Security Integration:\n• Konvergenz von physischer und digitaler Sicherheit\n• Zero Trust-Architekturen für umfassende Resilienz\n• Quantum-sichere Kommunikation für kritische BCM-Systeme\n• Biometrische Authentifizierung für sichere BCM-Zugriffe\n• Advanced Threat Detection für emerging cyber risks\n\n🌍 Globale Standardisierung und Regulierung:\n• Harmonisierung internationaler BCM-Standards\n• Regulatorische Anforderungen für BCM in kritischen Sektoren\n• Mandatory BCM-Reporting und Transparenz\n• Cross-border BCM-Kooperationen und -Abkommen\n• Standardisierte BCM-Metriken und Benchmarks"
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
    console.log('✅ FAQ batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
