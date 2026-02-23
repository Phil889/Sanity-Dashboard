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
    console.log('Updating KRITIS Schutzkonzepte Physisch Digital page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'kritis-schutzkonzepte-physisch-digital' })
    
    if (!existingDoc) {
      throw new Error('Document "kritis-schutzkonzepte-physisch-digital" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist eine integrierte physisch-digitale Schutzkonzeption für kritische Infrastrukturen unerlässlich und wie schafft ADVISORI synergetische Sicherheitsarchitekturen?",
        answer: "Moderne kritische Infrastrukturen sind durch ihre zunehmende Digitalisierung und Vernetzung sowohl physischen als auch digitalen Bedrohungen ausgesetzt. Eine fragmentierte Betrachtung von physischer und digitaler Sicherheit schafft gefährliche Schwachstellen, die von Angreifern ausgenutzt werden können. ADVISORI entwickelt integrierte Schutzkonzepte, die beide Dimensionen nahtlos verbinden und synergetische Sicherheitseffekte erzielen.\n\n🔒 Warum integrierte Schutzkonzepte unverzichtbar sind:\n• Moderne Angriffsvektoren: Cyberattacken beginnen oft mit physischem Zugang zu Systemen oder nutzen physische Schwachstellen zur Umgehung digitaler Sicherheitsmaßnahmen.\n• Operative Interdependenzen: Physische Infrastrukturen sind zunehmend von digitalen Steuerungssystemen abhängig, wodurch physische und digitale Sicherheit untrennbar miteinander verbunden werden.\n• Komplexe Bedrohungslandschaft: APT-Gruppen und staatliche Akteure nutzen hybride Angriffsmethoden, die sowohl physische als auch digitale Komponenten umfassen.\n• Regulatorische Anforderungen: KRITIS-Verordnung und BSI IT-Grundschutz fordern explizit die Berücksichtigung physischer und digitaler Sicherheitsaspekte.\n\n🛡️ ADVISORI's integrierter Sicherheitsansatz:\n• Ganzheitliche Risikoanalyse: Wir bewerten physische und digitale Bedrohungen in ihrem Zusammenspiel und identifizieren übergreifende Schwachstellen und Angriffspfade.\n• Synergetische Sicherheitsarchitekturen: Entwicklung von Schutzkonzepten, die physische und digitale Sicherheitsmaßnahmen verstärken und Redundanzen schaffen.\n• Integrierte Überwachung: Implementierung von Monitoring-Systemen, die physische und digitale Anomalien korrelieren und ganzheitliche Bedrohungsbilder erstellen.\n• Einheitliche Incident Response: Aufbau von Reaktionsprozessen, die sowohl physische als auch digitale Sicherheitsvorfälle koordiniert und effektiv behandeln."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie entwickelt ADVISORI maßgeschneiderte Schutzkonzepte, die sowohl aktuelle KRITIS-Anforderungen erfüllen als auch zukunftsfähige Sicherheitsarchitekturen schaffen?",
        answer: "Die Entwicklung effektiver Schutzkonzepte für kritische Infrastrukturen erfordert eine tiefgreifende Analyse spezifischer Bedrohungslandschaften und operativer Anforderungen. ADVISORI kombiniert bewährte Methodologien mit innovativen Ansätzen, um Schutzkonzepte zu schaffen, die nicht nur aktuelle Bedrohungen abwehren, sondern auch für zukünftige Herausforderungen gerüstet sind.\n\n🎯 Maßgeschneiderte Schutzkonzept-Entwicklung:\n• Umfassende Asset-Inventarisierung: Systematische Erfassung und Klassifizierung aller physischen und digitalen Assets nach Kritikalität und Schutzbedarf.\n• Threat Modeling: Entwicklung detaillierter Bedrohungsmodelle, die sowohl bekannte als auch emerging threats berücksichtigen und sektorspezifische Risiken einbeziehen.\n• Risk-based Security Design: Priorisierung von Schutzmaßnahmen basierend auf Risikoanalysen und Business Impact Assessments für optimale Ressourcenallokation.\n• Layered Defense Strategien: Implementierung mehrstufiger Sicherheitsarchitekturen, die sowohl präventive als auch detective und responsive Elemente umfassen.\n\n🔮 Zukunftsorientierte Sicherheitsarchitekturen:\n• Adaptive Sicherheitssysteme: Entwicklung von Schutzkonzepten, die Machine Learning und KI-basierte Anomalieerkennung integrieren und sich kontinuierlich an neue Bedrohungen anpassen.\n• Zero Trust Prinzipien: Implementierung von Zero Trust Architekturen, die sowohl für physische als auch digitale Zugriffe strikte Verifikation und minimale Privilegien durchsetzen.\n• Resilience Engineering: Aufbau von Systemen, die nicht nur Angriffe abwehren, sondern auch schnelle Wiederherstellung und kontinuierliche Betriebsfähigkeit gewährleisten.\n• Future-ready Technologien: Integration emerging technologies wie Quantum-resistant Cryptography, Edge Security und IoT Security Frameworks in langfristige Sicherheitsstrategien.\n\n🏗️ ADVISORI's strukturierter Entwicklungsprozess:\n• Baseline Security Assessment: Umfassende Bewertung der aktuellen Sicherheitslage mit Gap-Analyse zu KRITIS-Anforderungen und Best Practices.\n• Stakeholder Alignment: Einbindung aller relevanten Stakeholder von Operations bis C-Level zur Sicherstellung praktischer Umsetzbarkeit und strategischer Ausrichtung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche spezifischen Herausforderungen entstehen bei der Integration physischer und digitaler Sicherheitsmaßnahmen und wie löst ADVISORI diese technischen und organisatorischen Komplexitäten?",
        answer: "Die Integration physischer und digitaler Sicherheitsmaßnahmen bringt einzigartige Herausforderungen mit sich, die sowohl technische als auch organisatorische Dimensionen umfassen. ADVISORI hat spezialisierte Lösungsansätze entwickelt, um diese Komplexitäten zu bewältigen und kohärente Sicherheitsarchitekturen zu schaffen.\n\n⚡ Technische Integrations-Herausforderungen:\n• Heterogene Systemlandschaften: Physische Sicherheitssysteme (Zutrittskontrollen, CCTV, Sensoren) und IT-Sicherheitssysteme nutzen oft unterschiedliche Protokolle, Standards und Architekturen.\n• Latenz und Real-time Anforderungen: Physische Sicherheitssysteme erfordern oft Echtzeit-Reaktionen, während IT-Sicherheitssysteme auf Datenanalyse und Pattern Recognition ausgelegt sind.\n• Legacy System Integration: Kritische Infrastrukturen nutzen oft jahrzehntealte physische Sicherheitssysteme, die mit modernen digitalen Sicherheitslösungen integriert werden müssen.\n• Scalability Challenges: Sicherheitslösungen müssen sowohl für kleine lokale Installationen als auch für großflächige, verteilte kritische Infrastrukturen skalierbar sein.\n\n🏢 Organisatorische Integrations-Komplexitäten:\n• Siloed Security Teams: Physische und IT-Sicherheitsteams arbeiten traditionell getrennt mit unterschiedlichen Prozessen, Verantwortlichkeiten und Reporting-Strukturen.\n• Compliance Fragmentation: Verschiedene regulatorische Anforderungen für physische (z.B. Gebäudesicherheit) und digitale (z.B. IT-Grundschutz) Sicherheit müssen harmonisiert werden.\n• Budget und Resource Allocation: Koordination von Investitionen und Ressourcen zwischen traditionell getrennten physischen und IT-Sicherheitsbereichen.\n• Change Management: Integration erfordert oft signifikante Veränderungen in etablierten Arbeitsabläufen und Organisationsstrukturen.\n\n🔧 ADVISORI's Lösungsansätze:\n• Unified Security Platforms: Entwicklung von integrierten Sicherheitsplattformen, die physische und digitale Sicherheitsdaten in einheitlichen Dashboards korrelieren und gemeinsame Threat Intelligence bereitstellen.\n• API-first Integration Architecture: Implementierung standardisierter APIs und Middleware-Lösungen, die Legacy-Systeme mit modernen Sicherheitsarchitekturen verbinden.\n• Cross-functional Security Operations Centers: Aufbau von SOCs, die sowohl physische als auch digitale Sicherheitsvorfälle zentral überwachen und koordiniert reagieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie gewährleistet ADVISORI, dass integrierte Schutzkonzepte nicht nur Compliance erfüllen, sondern auch operative Effizienz steigern und Geschäftswert schaffen?",
        answer: "Effektive Schutzkonzepte sollten über reine Compliance hinausgehen und aktiv zur operativen Exzellenz und Geschäftswertschöpfung beitragen. ADVISORI entwickelt Sicherheitsarchitekturen, die Compliance als Mindeststandard betrachten und darauf aufbauend operative Effizienz, Kostenoptimierung und strategische Vorteile schaffen.\n\n💼 Von Compliance zu Business Value:\n• Security as a Business Enabler: Transformation von Sicherheit von einem Kostenfaktor zu einem strategischen Enabler für neue Geschäftsmodelle und Marktchancen.\n• Operational Intelligence: Nutzung von Sicherheitsdaten für operative Insights, Predictive Maintenance und Performance Optimization kritischer Infrastrukturen.\n• Risk-adjusted Decision Making: Bereitstellung datengetriebener Entscheidungsgrundlagen für strategische Investitionen und operative Optimierungen.\n• Competitive Advantage: Überdurchschnittliche Sicherheitsstandards als Differenzierungsmerkmal bei Ausschreibungen und Partnerschaften.\n\n📊 Messbare operative Effizienzsteigerungen:\n• Automatisierte Compliance Reporting: Reduktion manueller Compliance-Aufwände um bis zu 70% durch automatisierte Datensammlung und Berichtsgenerierung.\n• Integrated Incident Response: Verkürzung der Mean Time to Resolution (MTTR) für Sicherheitsvorfälle durch koordinierte physische und digitale Reaktionsprozesse.\n• Predictive Security Analytics: Früherkennung von Sicherheitsrisiken und Systemanomalien zur Vermeidung ungeplanter Ausfälle und Wartungskosten.\n• Resource Optimization: Optimierung von Sicherheitspersonal und -ressourcen durch intelligente Automatisierung und priorisierte Alarmierung.\n\n🚀 Strategische Geschäftswert-Generierung:\n• Enhanced Service Reliability: Verbesserte Servicequalität und -verfügbarkeit als direkter Wettbewerbsvorteil und Grundlage für Premium-Pricing.\n• Insurance Premium Optimization: Nachweisbare Sicherheitsmaßnahmen führen zu reduzierten Versicherungskosten und verbesserten Konditionen.\n• Stakeholder Confidence: Erhöhtes Vertrauen von Investoren, Kunden und Partnern durch transparente und nachweisbare Sicherheitsstandards.\n• Innovation Platform: Sichere Infrastruktur als Basis für innovative Services, IoT-Integration und digitale Transformation."
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
