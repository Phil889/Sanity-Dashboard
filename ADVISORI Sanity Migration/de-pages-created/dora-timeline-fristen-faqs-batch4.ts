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
    console.log('Updating DORA Timeline & Fristen page with FAQ batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-timeline-fristen' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-timeline-fristen" not found')
    }
    
    // Create new FAQs for timeline risk management and contingency planning
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Wie entwickle ich robuste Contingency-Pläne für kritische Timeline-Risiken bei der DORA-Implementierung?',
        answer: "Robuste Contingency-Planung ist essentiell für erfolgreiche DORA-Implementierung angesichts der Komplexität und Unvorhersehbarkeit regulatorischer Projekte. Durchdachte Backup-Strategien ermöglichen es Ihnen, auf unerwartete Herausforderungen zu reagieren, ohne die gesamte Timeline zu gefährden oder kritische Deadlines zu verpassen.\n\n🎯 Systematische Risiko-Identifikation für Contingency-Planung:\n• Führen Sie umfassende Risikoanalysen durch, die sowohl interne als auch externe Faktoren berücksichtigen\n• Kategorisieren Sie Risiken nach Wahrscheinlichkeit, Auswirkung und Kontrollierbarkeit\n• Identifizieren Sie Single Points of Failure in Ihrer Timeline, die das gesamte Projekt gefährden könnten\n• Berücksichtigen Sie Kaskadeneffekte, bei denen ein Risiko mehrere andere Bereiche beeinflussen kann\n• Entwickeln Sie Risiko-Szenarien basierend auf historischen Erfahrungen und Branchentrends\n\n🛡️ Multi-Level-Contingency-Strategien:\n• Erste Ebene umfasst operative Workarounds und interne Ressourcenumverteilung\n• Zweite Ebene aktiviert externe Ressourcen und alternative Lösungsansätze\n• Dritte Ebene implementiert fundamentale Scope- oder Ansatz-Änderungen\n• Vierte Ebene beinhaltet Timeline-Anpassungen und Stakeholder-Neuverhandlungen\n• Jede Ebene hat vordefinierte Trigger-Kriterien und Aktivierungsprozesse\n\n⚡ Proaktive Ressourcen-Reservierung:\n• Schaffen Sie dedizierte Contingency-Budgets für unvorhergesehene Herausforderungen\n• Etablieren Sie Partnerschaften mit externen Anbietern für schnelle Kapazitätserweiterung\n• Entwickeln Sie interne Ressourcen-Pools, die flexibel zwischen verschiedenen Bereichen eingesetzt werden können\n• Schaffen Sie Cross-Training-Programme, um Abhängigkeiten von Schlüsselpersonen zu reduzieren\n• Implementieren Sie Technologie-Redundanzen für kritische Systeme und Prozesse\n\n🔄 Adaptive Contingency-Aktivierung:\n• Entwickeln Sie klare Entscheidungskriterien für die Aktivierung verschiedener Contingency-Maßnahmen\n• Implementieren Sie schnelle Entscheidungsprozesse für Contingency-Situationen\n• Schaffen Sie vordefinierte Kommunikationspläne für verschiedene Contingency-Szenarien\n• Etablieren Sie regelmäßige Contingency-Plan-Reviews und Updates\n• Nutzen Sie Simulation und War-Gaming für Testing der Contingency-Effektivität\n\n📊 Monitoring und Frühwarnsysteme:\n• Implementieren Sie Leading-Indikatoren, die potenzielle Contingency-Situationen frühzeitig signalisieren\n• Schaffen Sie automatisierte Alerting-Systeme für kritische Risiko-Schwellenwerte\n• Entwickeln Sie Dashboards, die Contingency-Readiness und verfügbare Optionen visualisieren\n• Etablieren Sie regelmäßige Contingency-Readiness-Assessments\n• Schaffen Sie Feedback-Loops für kontinuierliche Verbesserung der Contingency-Planung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Wie plane ich Testing-Zyklen und Validierungsphasen in meine DORA-Timeline ein?',
        answer: "Testing und Validierung sind kritische Komponenten der DORA-Implementierung, die oft unterschätzt werden. Eine durchdachte Integration von Testing-Zyklen in Ihre Timeline gewährleistet nicht nur Compliance-Qualität, sondern auch rechtzeitige Identifikation und Behebung von Problemen vor kritischen Deadlines.\n\n🧪 Strategische Testing-Planung:\n• Integrieren Sie Testing als kontinuierlichen Prozess, nicht als einmalige Aktivität am Ende der Implementierung\n• Planen Sie verschiedene Testing-Ebenen von Unit-Tests bis zu End-to-End-Validierungen\n• Berücksichtigen Sie sowohl technische Tests als auch Prozess- und Governance-Validierungen\n• Schaffen Sie ausreichend Zeit für mehrere Testing-Iterationen und Verbesserungszyklen\n• Koordinieren Sie Testing-Aktivitäten mit anderen Workstreams und Abhängigkeiten\n\n🔍 Phasenweise Testing-Ansätze:\n• Frühe Phasen fokussieren auf Governance-Framework-Testing und Prozess-Validierung\n• Mittlere Phasen umfassen technische System-Tests und Integration-Validierungen\n• Spätere Phasen beinhalten End-to-End-Testing und Stress-Testing unter realistischen Bedingungen\n• Finale Phasen konzentrieren sich auf User-Acceptance-Testing und Compliance-Validierung\n• Jede Phase hat spezifische Erfolgskriterien und Go/No-Go-Entscheidungspunkte\n\n⚙️ Testing-Infrastruktur und -Ressourcen:\n• Planen Sie dedizierte Testing-Umgebungen, die Produktionsumgebungen realistisch simulieren\n• Schaffen Sie Testing-Teams mit sowohl internen als auch externen Expertise-Komponenten\n• Implementieren Sie automatisierte Testing-Tools wo möglich für Effizienz und Konsistenz\n• Entwickeln Sie Testing-Datensets, die realistische Szenarien und Edge-Cases abdecken\n• Schaffen Sie Testing-Dokumentation und -Standards für konsistente Qualität\n\n🎯 Risikoorientierte Testing-Priorisierung:\n• Priorisieren Sie Testing-Aktivitäten basierend auf Risikobewertung und Compliance-Kritikalität\n• Fokussieren Sie intensive Testing-Ressourcen auf Bereiche mit höchsten regulatorischen Risiken\n• Implementieren Sie Risk-Based-Testing-Ansätze für optimale Ressourcennutzung\n• Schaffen Sie Contingency-Testing-Pläne für kritische Failure-Szenarien\n• Entwickeln Sie Testing-Metriken, die sowohl Qualität als auch Timeline-Adherence messen\n\n📋 Validierung und Compliance-Verification:\n• Entwickeln Sie umfassende Compliance-Checklisten für systematische Validierung\n• Implementieren Sie Independent-Validation-Prozesse für kritische Compliance-Bereiche\n• Schaffen Sie Audit-Trail-Dokumentation für alle Testing- und Validierungsaktivitäten\n• Koordinieren Sie mit internen und externen Audit-Teams für Validierungs-Alignment\n• Planen Sie ausreichend Zeit für Remediation von Testing-Findings und Re-Testing-Zyklen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Wie berücksichtige ich saisonale Faktoren und Geschäftszyklen in meiner DORA-Timeline-Planung?',
        answer: "Saisonale Faktoren und Geschäftszyklen haben erheblichen Einfluss auf die Verfügbarkeit von Ressourcen und die Durchführbarkeit von DORA-Implementierungsaktivitäten. Eine durchdachte Berücksichtigung dieser Zyklen optimiert Ihre Timeline-Effizienz und minimiert Störungen des laufenden Geschäftsbetriebs.\n\n📅 Geschäftszyklus-Analyse und -Integration:\n• Analysieren Sie historische Geschäftszyklen und deren Auswirkungen auf Ressourcenverfügbarkeit\n• Identifizieren Sie Perioden mit hoher Geschäftsaktivität, in denen DORA-Aktivitäten minimiert werden sollten\n• Berücksichtigen Sie regulatorische Reporting-Zyklen und deren Auswirkungen auf Compliance-Team-Verfügbarkeit\n• Planen Sie DORA-Aktivitäten um kritische Geschäftsereignisse wie Quartalsabschlüsse oder Budgetplanungen\n• Koordinieren Sie mit anderen strategischen Initiativen, die ähnliche Ressourcen benötigen\n\n🏖️ Urlaubszeiten und Personalverfügbarkeit:\n• Berücksichtigen Sie Sommerurlaube, Weihnachtsferien und andere traditionelle Urlaubsperioden\n• Planen Sie kritische DORA-Meilensteine außerhalb von Haupturlaubszeiten\n• Schaffen Sie Backup-Ressourcen für Schlüsselpositionen während Urlaubsperioden\n• Entwickeln Sie flexible Arbeitsmodelle, die saisonale Verfügbarkeitsschwankungen ausgleichen\n• Koordinieren Sie Urlaubsplanung mit DORA-Timeline-Anforderungen für kritische Teammitglieder\n\n💼 IT- und Technologie-Zyklen:\n• Berücksichtigen Sie IT-Freeze-Perioden während kritischer Geschäftszeiten\n• Koordinieren Sie DORA-System-Implementierungen mit geplanten IT-Wartungsfenstern\n• Planen Sie um große System-Upgrades oder Migrationen, die Ressourcen binden\n• Berücksichtigen Sie Vendor-Verfügbarkeit und deren eigene saisonale Zyklen\n• Schaffen Sie Flexibilität für unvorhergesehene IT-Notfälle oder -Prioritäten\n\n🎯 Optimale Timing-Strategien:\n• Nutzen Sie ruhigere Geschäftsperioden für intensive DORA-Implementierungsaktivitäten\n• Planen Sie komplexe Testing-Phasen für Zeiten mit minimaler Geschäftsstörung\n• Koordinieren Sie Training und Change-Management-Aktivitäten mit verfügbaren Kapazitäten\n• Schaffen Sie Pufferzonen um vorhersehbare Geschäfts-Spitzenzeiten\n• Entwickeln Sie saisonale Ressourcenallokations-Modelle für optimale Effizienz\n\n🔄 Adaptive Saisonplanung:\n• Implementieren Sie flexible Timeline-Strukturen, die saisonale Anpassungen ermöglichen\n• Entwickeln Sie alternative Aktivitätspläne für verschiedene saisonale Szenarien\n• Schaffen Sie Mechanismen für schnelle Timeline-Anpassungen bei unvorhergesehenen saisonalen Faktoren\n• Nutzen Sie historische Daten für Verbesserung zukünftiger saisonaler Planungen\n• Etablieren Sie regelmäßige Reviews der saisonalen Timeline-Effektivität"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie entwickle ich Backup-Strategien für kritische Drittanbieter-Abhängigkeiten in meiner DORA-Timeline?',
        answer: "Drittanbieter-Abhängigkeiten stellen oft die größten Timeline-Risiken bei der DORA-Implementierung dar. Robuste Backup-Strategien für kritische Drittanbieter-Beziehungen sind essentiell, um Timeline-Kontrolle zu behalten und alternative Lösungswege zu aktivieren, wenn primäre Drittanbieter nicht wie geplant liefern können.\n\n🔍 Kritische Drittanbieter-Abhängigkeits-Analyse:\n• Identifizieren Sie alle Drittanbieter, deren Verzögerung Ihre DORA-Timeline kritisch beeinflussen könnte\n• Bewerten Sie die DORA-Readiness und Compliance-Pläne Ihrer kritischen Drittanbieter\n• Analysieren Sie die Substituierbarkeit verschiedener Drittanbieter-Services und deren Komplexität\n• Berücksichtigen Sie Vertragsstrukturen und Exit-Klauseln in bestehenden Drittanbieter-Vereinbarungen\n• Bewerten Sie die finanzielle Stabilität und operative Resilienz kritischer Drittanbieter\n\n🛡️ Multi-Tier-Backup-Strategien:\n• Erste Ebene umfasst intensive Koordination und Support für primäre Drittanbieter\n• Zweite Ebene aktiviert alternative Drittanbieter für ähnliche Services\n• Dritte Ebene implementiert In-House-Lösungen oder temporäre Workarounds\n• Vierte Ebene beinhaltet fundamentale Service-Redesign oder Scope-Anpassungen\n• Jede Ebene hat vordefinierte Aktivierungskriterien und Implementierungspläne\n\n⚡ Proaktive Alternative-Anbieter-Entwicklung:\n• Identifizieren Sie potenzielle alternative Drittanbieter für kritische Services bereits in der Planungsphase\n• Führen Sie Due-Diligence-Assessments für Backup-Anbieter durch\n• Entwickeln Sie Rahmenverträge oder Letters of Intent mit alternativen Anbietern\n• Schaffen Sie Pilot-Projekte oder Proof-of-Concepts mit Backup-Anbietern\n• Implementieren Sie regelmäßige Market-Scans für neue potenzielle Drittanbieter\n\n🤝 Drittanbieter-Relationship-Management:\n• Etablieren Sie intensive Koordination und Monitoring mit kritischen Drittanbietern\n• Implementieren Sie gemeinsame Governance-Strukturen für DORA-Implementierung\n• Schaffen Sie Incentive-Strukturen für termingerechte Drittanbieter-Lieferung\n• Entwickeln Sie Eskalationsmechanismen für Drittanbieter-Performance-Probleme\n• Nutzen Sie Vertragsverhandlungen für DORA-spezifische Service-Level-Agreements\n\n🔧 Interne Capability-Entwicklung:\n• Bewerten Sie die Machbarkeit interner Lösungsentwicklung für kritische Services\n• Investieren Sie in interne Expertise-Entwicklung für strategisch wichtige Bereiche\n• Schaffen Sie Hybrid-Modelle, die interne und externe Capabilities kombinieren\n• Entwickeln Sie temporäre Workaround-Lösungen für Überbrückung von Drittanbieter-Ausfällen\n• Implementieren Sie Knowledge-Management-Systeme für Drittanbieter-Service-Verständnis"
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
    console.log('✅ FAQ batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
