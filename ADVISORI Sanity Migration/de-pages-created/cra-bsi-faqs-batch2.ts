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
    console.log('Updating CRA BSI page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-bsi' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-bsi" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche technischen Standards und Dokumentationsanforderungen stellt das BSI für CRA-Zertifizierungsprozesse und wie können Unternehmen diese effizient erfüllen?',
        answer: "Das BSI definiert spezifische technische Standards und Dokumentationsanforderungen für CRA-Zertifizierungsprozesse, die deutsche Gründlichkeitsstandards mit internationalen Best Practices kombinieren und dabei sowohl technische Exzellenz als auch administrative Vollständigkeit fordern. Effiziente Erfüllung dieser Anforderungen erfordert systematische Herangehensweise, die Prozessoptimierung mit Qualitätssicherung verbindet.\n\n📋 BSI-spezifische Dokumentationsstandards:\n• Umfassende technische Dokumentation, die nicht nur EU-Mindestanforderungen erfüllt, sondern auch BSI-spezifische Nachweisstandards und deutsche Dokumentationstraditionen berücksichtigt, einschließlich detaillierter Systemarchitekturen und Sicherheitskonzepte.\n• Strukturierte Risikobewertungen und Sicherheitsanalysen, die deutsche Methodiken wie BSI-Grundschutz integrieren und dabei internationale Standards wie ISO 27001 und Common Criteria berücksichtigen.\n• Detaillierte Schwachstellenmanagement-Dokumentation, die Identifikation, Bewertung, Behandlung und Monitoring von Sicherheitslücken über den gesamten Produktlebenszyklus nachweist.\n• Umfassende Lieferketten-Dokumentation, die Transparenz über alle Komponenten, Abhängigkeiten und Risiken in der Supply Chain gewährleistet und dabei deutsche Anforderungen an Nachverfolgbarkeit erfüllt.\n• Kontinuierliche Compliance-Nachweise, die nicht nur initiale Konformität belegen, sondern auch laufende Überwachung und Anpassung an sich ändernde Bedrohungslandschaften dokumentieren.\n\n🔧 Technische Implementierungsstandards:\n• BSI-konforme Sicherheitsarchitekturen, die deutsche IT-Sicherheitsstandards mit internationalen Frameworks harmonisieren und dabei Defense-in-Depth-Prinzipien und Zero-Trust-Ansätze integrieren.\n• Robuste Kryptographie-Implementierungen, die BSI-Empfehlungen für Verschlüsselungsalgorithmen, Schlüssellängen und Protokolle befolgen und dabei Quantum-Readiness berücksichtigen.\n• Umfassende Logging- und Monitoring-Systeme, die nicht nur Sicherheitsereignisse erfassen, sondern auch forensische Analyse und Incident Response unterstützen.\n• Sichere Entwicklungsprozesse, die Security-by-Design-Prinzipien implementieren und dabei Code-Reviews, Penetrationstests und Vulnerability Assessments integrieren.\n• Effektive Update- und Patch-Management-Mechanismen, die zeitnahe Sicherheitsupdates gewährleisten und dabei Geschäftskontinuität und Systemstabilität berücksichtigen.\n\n📊 Effiziente Umsetzungsstrategien:\n• Entwicklung standardisierter Dokumentationsvorlagen und -prozesse, die Wiederverwendbarkeit maximieren und dabei Konsistenz und Qualität gewährleisten.\n• Implementierung automatisierter Compliance-Monitoring-Tools, die kontinuierliche Überwachung ermöglichen und dabei manuelle Aufwände reduzieren.\n• Aufbau integrierter Qualitätsmanagementsysteme, die Compliance-Anforderungen in bestehende Geschäftsprozesse einbetten und dabei Effizienz optimieren.\n• Etablierung cross-funktionaler Teams, die technische Expertise mit regulatorischem Verständnis kombinieren und dabei ganzheitliche Lösungsansätze entwickeln.\n• Kontinuierliche Schulung und Kompetenzentwicklung, die interne Expertise aufbaut und dabei externe Abhängigkeiten reduziert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Wie bereiten sich Unternehmen optimal auf BSI-Audits und Compliance-Prüfungen vor und welche kritischen Erfolgsfaktoren sind dabei zu beachten?',
        answer: "Die optimale Vorbereitung auf BSI-Audits und Compliance-Prüfungen erfordert systematische Herangehensweise, die technische Readiness mit prozessualer Exzellenz kombiniert und dabei deutsche Prüfungsstandards mit internationalen Best Practices harmonisiert. Erfolgreiche Audit-Vorbereitung basiert auf proaktiver Compliance-Kultur, umfassender Dokumentation und kontinuierlicher Verbesserung.\n\n🎯 Strategische Audit-Vorbereitung:\n• Entwicklung umfassender Audit-Readiness-Programme, die nicht nur aktuelle Compliance-Status bewerten, sondern auch potenzielle Schwachstellen identifizieren und proaktive Verbesserungsmaßnahmen implementieren.\n• Etablierung interner Audit-Funktionen, die BSI-Prüfungsmethoden simulieren und dabei interne Qualitätssicherung und kontinuierliche Verbesserung fördern.\n• Aufbau robuster Dokumentationsmanagementsysteme, die nicht nur Vollständigkeit gewährleisten, sondern auch schnelle Verfügbarkeit und Nachvollziehbarkeit aller relevanten Informationen ermöglichen.\n• Implementierung strukturierter Stakeholder-Kommunikation, die alle relevanten internen und externen Akteure in Audit-Vorbereitung einbezieht und dabei Koordination und Alignment sicherstellt.\n• Entwicklung von Contingency-Plänen für verschiedene Audit-Szenarien, die flexible Reaktionen auf unerwartete Prüfungsanforderungen oder -herausforderungen ermöglichen.\n\n📋 Operative Umsetzungsmaßnahmen:\n• Systematische Gap-Analysen gegen BSI-Anforderungen, die nicht nur aktuelle Compliance-Lücken identifizieren, sondern auch Prioritäten für Verbesserungsmaßnahmen setzen.\n• Implementierung strukturierter Evidence-Management-Prozesse, die alle Compliance-Nachweise systematisch sammeln, organisieren und für Audit-Zwecke verfügbar machen.\n• Aufbau effektiver Change-Management-Prozesse, die sicherstellen, dass alle Änderungen an Systemen, Prozessen oder Dokumentation ordnungsgemäß dokumentiert und genehmigt werden.\n• Etablierung regelmäßiger Management-Reviews, die Compliance-Status überwachen und dabei strategische Entscheidungen für kontinuierliche Verbesserung treffen.\n• Entwicklung umfassender Schulungsprogramme, die alle relevanten Mitarbeiter auf ihre Rollen während Audits vorbereiten und dabei Kompetenz und Vertrauen aufbauen.\n\n🔍 Kritische Erfolgsfaktoren:\n• Leadership-Commitment und Top-Management-Unterstützung, die Compliance-Kultur fördern und dabei notwendige Ressourcen und Prioritäten bereitstellen.\n• Cross-funktionale Zusammenarbeit zwischen technischen Teams, Compliance-Funktionen und Geschäftsbereichen, die ganzheitliche Lösungsansätze ermöglicht.\n• Proaktive Kommunikation mit BSI und anderen relevanten Stakeholdern, die Transparenz schafft und dabei Vertrauen und Kooperationsbereitschaft demonstriert.\n• Kontinuierliche Verbesserungsmentalität, die Audits als Lernmöglichkeiten betrachtet und dabei organisatorische Reife und Exzellenz fördert.\n• Investition in Technologie und Automatisierung, die Effizienz steigert und dabei menschliche Fehler reduziert und Konsistenz gewährleistet."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Welche Rolle spielen BSI-Leitlinien und technische Richtlinien bei der CRA-Implementierung und wie können Unternehmen diese strategisch nutzen?',
        answer: "BSI-Leitlinien und technische Richtlinien spielen eine zentrale Rolle bei der CRA-Implementierung, da sie EU-Verordnungstext in konkrete, umsetzbare Anforderungen übersetzen und dabei deutsche Cybersicherheitstraditionen mit internationalen Standards harmonisieren. Strategische Nutzung dieser Leitlinien ermöglicht nicht nur Compliance-Sicherheit, sondern auch Wettbewerbsvorteile durch überlegene Sicherheitsimplementierung.\n\n📚 BSI-Leitlinien-Landschaft:\n• Technische Richtlinien zu spezifischen CRA-Anforderungen, die detaillierte Implementierungsanleitungen für Sicherheitsmaßnahmen, Schwachstellenmanagement und Incident Response bereitstellen.\n• Branchenspezifische Leitfäden, die sektorale Besonderheiten berücksichtigen und dabei maßgeschneiderte Compliance-Ansätze für verschiedene Industriezweige entwickeln.\n• Methodische Anleitungen zu Risikobewertung und Sicherheitsanalyse, die bewährte deutsche Praktiken mit internationalen Frameworks kombinieren.\n• Prozessleitfäden für Konformitätsbewertung und Zertifizierung, die Schritt-für-Schritt-Anleitungen für erfolgreiche BSI-Interaktion bereitstellen.\n• Kontinuierliche Updates und Ergänzungen, die sich entwickelnde Bedrohungslandschaften und technologische Innovationen berücksichtigen.\n\n🎯 Strategische Nutzungsansätze:\n• Proaktive Integration von BSI-Leitlinien in Produktentwicklungsprozesse, die Security-by-Design-Prinzipien von Projektbeginn an implementieren und dabei nachträgliche Anpassungen minimieren.\n• Entwicklung unternehmensinterner Standards und Prozesse, die BSI-Anforderungen übertreffen und dabei Differenzierung und Marktpositionierung ermöglichen.\n• Aufbau von Expertise und Thought Leadership durch aktive Teilnahme an BSI-Konsultationsprozessen und Standardentwicklungsaktivitäten.\n• Etablierung kontinuierlicher Monitoring-Prozesse für BSI-Leitlinien-Updates, die zeitnahe Anpassung an sich ändernde Anforderungen gewährleisten.\n• Integration von BSI-Empfehlungen in Lieferantenmanagement und Supply Chain-Governance, die End-to-End-Sicherheit und -Compliance sicherstellen.\n\n💡 Wettbewerbsvorteile durch Leitlinien-Exzellenz:\n• Überlegene Sicherheitsarchitekturen, die nicht nur Mindestanforderungen erfüllen, sondern auch Best-Practice-Standards setzen und dabei Kundenvertrauen und Marktreputation stärken.\n• Effiziente Compliance-Prozesse, die durch bewährte BSI-Methodiken optimiert werden und dabei Kosten reduzieren und Time-to-Market beschleunigen.\n• Risikominimierung durch proaktive Implementierung von BSI-Empfehlungen, die potenzielle Sicherheitsvorfälle und Compliance-Probleme verhindern.\n• Stakeholder-Vertrauen durch demonstrierte Commitment zu deutschen Sicherheitsstandards und regulatorischer Exzellenz.\n• Innovation-Enablement durch frühzeitige Adoption neuer BSI-Empfehlungen und -Technologien, die Marktführerschaft und technologische Differenzierung ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie können Unternehmen effektive Incident-Response-Strategien für BSI-Meldepflichten entwickeln und dabei Geschäftskontinuität gewährleisten?',
        answer: "Effektive Incident-Response-Strategien für BSI-Meldepflichten erfordern integrierte Ansätze, die technische Incident-Management-Capabilities mit regulatorischen Compliance-Anforderungen kombinieren und dabei Geschäftskontinuität und Stakeholder-Vertrauen gewährleisten. Erfolgreiche Strategien basieren auf proaktiver Vorbereitung, strukturierten Prozessen und kontinuierlicher Verbesserung.\n\n🚨 BSI-konforme Incident-Response-Architektur:\n• Strukturierte Incident-Klassifikation und -Bewertung, die BSI-Meldepflichten berücksichtigt und dabei schnelle Entscheidungsfindung über Meldeerfordernisse ermöglicht.\n• Etablierung dedizierter Incident-Response-Teams mit klaren Rollen und Verantwortlichkeiten für technische Reaktion, regulatorische Kommunikation und Geschäftskontinuität.\n• Implementierung automatisierter Detection- und Alerting-Systeme, die potenzielle Sicherheitsvorfälle frühzeitig identifizieren und dabei False-Positive-Raten minimieren.\n• Entwicklung standardisierter Kommunikationsprotokolle für BSI-Meldungen, die Vollständigkeit, Genauigkeit und Zeitgerechtheit gewährleisten.\n• Integration mit bestehenden Business-Continuity- und Disaster-Recovery-Plänen, die koordinierte Reaktionen auf verschiedene Incident-Szenarien ermöglichen.\n\n⏱️ Zeitkritische Meldeprozesse:\n• Implementierung strukturierter Eskalationsprozesse, die sicherstellen, dass meldepflichtige Vorfälle innerhalb der BSI-Fristen identifiziert und gemeldet werden.\n• Entwicklung von Incident-Assessment-Frameworks, die schnelle aber gründliche Bewertung von Sicherheitsvorfällen hinsichtlich ihrer Meldepflicht ermöglichen.\n• Etablierung direkter Kommunikationskanäle zu BSI und anderen relevanten Behörden, die effiziente und professionelle Meldung gewährleisten.\n• Aufbau von Template- und Checklisten-Systemen, die konsistente und vollständige Incident-Dokumentation und -Meldung sicherstellen.\n• Implementierung kontinuierlicher Monitoring- und Follow-up-Prozesse, die Updates und zusätzliche Informationen zu gemeldeten Vorfällen bereitstellen.\n\n🔄 Geschäftskontinuitäts-Integration:\n• Entwicklung von Incident-Response-Strategien, die nicht nur Sicherheitsaspekte adressieren, sondern auch Geschäftsauswirkungen minimieren und Stakeholder-Vertrauen erhalten.\n• Etablierung paralleler Prozesse für technische Remediation und regulatorische Compliance, die gleichzeitige Fortschritte in beiden Bereichen ermöglichen.\n• Implementierung effektiver Kommunikationsstrategien für Kunden, Partner und andere Stakeholder, die Transparenz schaffen ohne Geschäftsinteressen zu gefährden.\n• Aufbau von Lessons-Learned-Prozessen, die Incident-Erfahrungen in organisatorisches Lernen und Verbesserung übersetzen.\n• Integration von Incident-Response-Metriken in Geschäfts-KPIs, die kontinuierliche Verbesserung und strategische Entscheidungsfindung unterstützen."
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
    console.log('✅ FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
