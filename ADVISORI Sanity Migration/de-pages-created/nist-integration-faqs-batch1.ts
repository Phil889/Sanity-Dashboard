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
    console.log('Updating NIST Integration page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nist-integration' })
    
    if (!existingDoc) {
      throw new Error('Document "nist-integration" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie kann die Integration des NIST Cybersecurity Frameworks in unsere bestehende IT-Governance strategische Vorteile generieren und welche spezifischen Ansätze verfolgt ADVISORI?",
        answer: "Die Integration des NIST Cybersecurity Frameworks in bestehende IT-Governance-Strukturen bietet weit mehr als nur Compliance-Erfüllung – sie transformiert Cybersecurity von einer reaktiven zu einer strategischen Unternehmensfunktion. Diese Integration schafft die Grundlage für eine resiliente, adaptive Sicherheitsarchitektur, die Geschäftswachstum ermöglicht und Wettbewerbsvorteile generiert.\n\n🎯 Strategische Vorteile der NIST-Integration:\n• Erhöhte Geschäftsresilienz: Das Framework schafft eine systematische Struktur für Cybersecurity, die kritische Geschäftsprozesse schützt und die Kontinuität des Betriebs gewährleistet.\n• Verbessertes Risikomanagement: Durch die fünf Kernfunktionen (Identify, Protect, Detect, Respond, Recover) entsteht ein ganzheitlicher Ansatz zur Risikosteuerung, der proaktive Entscheidungen ermöglicht.\n• Optimierte Ressourcenallokation: Die strukturierte Herangehensweise des NIST Frameworks ermöglicht eine datenbasierte Priorisierung von Security-Investitionen basierend auf tatsächlichen Geschäftsrisiken.\n• Verbesserte Stakeholder-Kommunikation: Das standardisierte Framework schafft eine gemeinsame Sprache zwischen IT, Management und Aufsichtsgremien für Cybersecurity-Diskussionen.\n\n🔧 ADVISORIs strategischer Integrationsansatz:\n• Governance-Alignment: Wir integrieren NIST-Strukturen nahtlos in bestehende IT-Governance-Prozesse, einschließlich COBIT, ITIL oder proprietäre Frameworks, ohne Disruption zu verursachen.\n• Business-Impact-Fokus: Unsere Integrationsmethodik priorisiert NIST-Kontrollen basierend auf ihrem direkten Einfluss auf kritische Geschäftsprozesse und Unternehmensziele.\n• Maturity-basierte Roadmap: Wir entwickeln eine phasenadäquate Implementierung, die Ihre aktuelle Cybersecurity-Reife berücksichtigt und realistisch erreichbare Verbesserungsstufen definiert.\n• Technology-Enablement: Integration modernster Technologielösungen zur Automatisierung von NIST-Kontrollen und zur Schaffung von Echtzeit-Transparenz über die Cybersecurity-Posture."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche konkreten Herausforderungen entstehen bei der Harmonisierung des NIST Frameworks mit anderen Compliance-Standards und wie löst ADVISORI diese Komplexität?",
        answer: "Die Harmonisierung des NIST Cybersecurity Frameworks mit anderen Compliance-Standards ist eine der kritischsten Herausforderungen bei der Integration. Unternehmen stehen oft vor einem komplexen Geflecht überlappender Anforderungen aus verschiedenen Regulierungsbereichen, was ohne strategische Herangehensweise zu Ineffizienzen, Redundanzen und Compliance-Lücken führen kann.\n\n⚡ Zentrale Harmonisierungs-Herausforderungen:\n• Standard-Überlappungen: Verschiedene Frameworks (ISO 27001, SOC 2, PCI DSS, GDPR) haben ähnliche, aber nicht identische Kontrollanforderungen, was zu Verwirrung und doppeltem Aufwand führt.\n• Unterschiedliche Granularitätsebenen: NIST bietet hohe Flexibilität, während andere Standards spezifischere Implementierungsanforderungen haben, was die Mapping-Komplexität erhöht.\n• Audit-Koordination: Multiple Compliance-Zyklen mit unterschiedlichen Anforderungen und Zeitplänen schaffen operative Herausforderungen und Ressourcenkonflikte.\n• Governance-Struktur-Konflikte: Verschiedene Standards definieren unterschiedliche Rollen und Verantwortlichkeiten, was zu organisatorischen Spannungen führen kann.\n\n🛠️ ADVISORIs Harmonisierungs-Methodik:\n• Unified Compliance Architecture: Wir entwickeln eine übergeordnete Compliance-Architektur, die alle relevanten Standards in einer kohärenten Struktur vereint und Synergien maximiert.\n• Cross-Standard Mapping: Detaillierte Analyse und Mapping von Kontrollanforderungen über verschiedene Standards hinweg zur Identifikation von Überlappungen und Gap-Bereichen.\n• Integrated Audit Strategy: Entwicklung einer koordinierten Audit-Strategie, die Multiple-Standard-Prüfungen optimiert und Audit-Fatigue reduziert.\n• Risk-Based Prioritization: Priorisierung von Harmonisierungsaktivitäten basierend auf Geschäftsrisiken und regulatorischen Anforderungen, um maximalen Wert zu schaffen.\n• Technology Integration: Implementierung von GRC-Plattformen, die Multi-Standard-Compliance automatisiert überwachen und verwalten können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir die NIST-Integration nutzen, um unsere digitale Transformation voranzutreiben und gleichzeitig operative Effizienz zu steigern?",
        answer: "Die NIST-Integration bietet eine einzigartige Gelegenheit, Cybersecurity-Verbesserungen als Katalysator für umfassendere digitale Transformation zu nutzen. Statt Sicherheit als Hindernis zu betrachten, wird sie zum Enabler für Innovation, Effizienz und Geschäftswachstum. Diese strategische Herangehensweise maximiert den ROI Ihrer Cybersecurity-Investitionen.\n\n🚀 Digitale Transformations-Synergien:\n• Security-by-Design Integration: NIST-Prinzipien werden direkt in digitale Produktentwicklung und Systemarchitektur eingebettet, was sowohl Sicherheit als auch Innovationsgeschwindigkeit erhöht.\n• Datengesteuerte Entscheidungsfindung: Die für NIST erforderliche Datensammlung und -analyse schafft die Grundlage für erweiterte Analytics und KI-Anwendungen.\n• Automatisierungs-Opportunities: NIST-Kontrollen erfordern systematische Prozesse, die ideale Kandidaten für Automatisierung und RPA-Implementierung sind.\n• Cloud-First Security: NIST-Integration bereitet Ihre Sicherheitsarchitektur optimal auf Cloud-Migration und Hybrid-Infrastrukturen vor.\n\n⚙️ Operative Effizienz-Steigerungen:\n• Prozessoptimierung: NIST-Implementierung zwingt zur Dokumentation und Standardisierung von Prozessen, was Ineffizienzen aufdeckt und Optimierungspotentiale schafft.\n• Reduktion von Silos: Das Framework fördert organisationsübergreifende Zusammenarbeit und bricht traditionelle IT-Security-Silos auf.\n• Kostenoptimierung: Systematische Risikobewertung ermöglicht datenbasierte Entscheidungen über Security-Investitionen und verhindert Over-Engineering.\n\n🔬 ADVISORIs Transformations-Ansatz:\n• Digital-Security Convergence: Wir entwickeln Strategien, die digitale Transformation und Cybersecurity-Verbesserung als komplementäre Initiativen behandeln.\n• Agile Implementation: Verwendung agiler Methoden für NIST-Integration, die schnelle Iterationen und kontinuierliche Verbesserung ermöglichen.\n• Innovation Labs: Etablierung von Security-Innovation-Labs, die neue Technologien im Kontext von NIST-Anforderungen evaluieren und pilotieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche kritischen Erfolgsfaktoren und potentiellen Stolpersteine gibt es bei der NIST-Integration und wie minimiert ADVISORI Implementierungsrisiken?",
        answer: "Eine erfolgreiche NIST-Integration erfordert sorgfältige Planung und Risikomanagement, da sowohl technische als auch organisatorische Herausforderungen bewältigt werden müssen. Die häufigsten Misserfolge entstehen durch unzureichende Vorbereitung, mangelnde Change-Management-Strategien oder unrealistische Erwartungen an Timelines und Ressourcenbedarf.\n\n⚠️ Kritische Erfolgsfaktoren:\n• Executive Sponsorship: Starke Unterstützung durch die Geschäftsleitung ist essentiell für die Überwindung organisatorischer Widerstände und die Sicherstellung angemessener Ressourcenallokation.\n• Cross-Functional Collaboration: Erfolgreiche Integration erfordert enge Zusammenarbeit zwischen IT, Security, Compliance, Business Units und externen Partnern.\n• Realistic Maturity Assessment: Ehrliche Bewertung der aktuellen Cybersecurity-Reife verhindert unrealistische Ziele und ermöglicht pragmatische Roadmap-Entwicklung.\n• Continuous Communication: Regelmäßige Kommunikation über Fortschritte, Herausforderungen und Erfolge hält alle Stakeholder engagiert und informiert.\n\n🚧 Häufige Implementierungs-Stolpersteine:\n• Boil-the-Ocean-Syndrome: Versuche, alle NIST-Anforderungen gleichzeitig zu implementieren, führen zu Ressourcenüberlastung und verminderter Fokussierung.\n• Compliance-Only Mindset: Fokus auf minimale Compliance-Erfüllung statt strategischer Wertschöpfung verschenkt Transformationspotentiale.\n• Insufficient Training: Mangelnde Schulung von Mitarbeitern führt zu Widerständen und suboptimaler Adoption neuer Prozesse.\n• Technology-First Approach: Priorität auf Tools statt Prozesse führt zu ineffektiven Lösungen und hohen Kosten.\n\n🛡️ ADVISORIs Risikominimierungs-Strategie:\n• Phased Implementation: Strukturierte, phasenweise Umsetzung mit klaren Meilensteinen und Erfolgsmetriken reduziert Komplexität und ermöglicht frühzeitige Erfolge.\n• Change Management Excellence: Umfassende Change-Management-Programme mit Training, Kommunikation und Incentive-Alignment sichern organisatorische Adoption.\n• Risk-Based Prioritization: Fokussierung auf kritische Geschäftsrisiken stellt sicher, dass die wichtigsten Verbesserungen zuerst implementiert werden.\n• Continuous Monitoring: Etablierung von KPIs und Monitoring-Mechanismen ermöglicht frühzeitige Korrekturmaßnahmen bei Abweichungen vom Plan."
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
