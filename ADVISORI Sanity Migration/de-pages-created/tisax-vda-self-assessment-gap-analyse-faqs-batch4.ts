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
    console.log('Updating TISAX VDA Self-Assessment Gap Analyse page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'tisax-vda-self-assessment-gap-analyse' })
    
    if (!existingDoc) {
      throw new Error('Document "tisax-vda-self-assessment-gap-analyse" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie berücksichtigt ADVISORI bei der TISAX Gap Analyse die spezifischen Anforderungen für verschiedene Automotive-Geschäftsmodelle und Produktionstypen?",
        answer: "Die Automotive-Industrie umfasst diverse Geschäftsmodelle von traditionellen OEMs über Tier-1-Zulieferer bis hin zu neuen Mobility-Service-Providern, jeweils mit unterschiedlichen TISAX-Anforderungsprofilen. Ein standardisierter One-Size-Fits-All-Ansatz würde die spezifischen Risiken und Compliance-Bedürfnisse verschiedener Automotive-Segmente nicht angemessen adressieren. ADVISORI hat branchenspezifische Assessment-Methoden entwickelt, die TISAX-Bewertungen präzise auf unterschiedliche Automotive-Geschäftsmodelle abstimmen.\n\n🏭 Geschäftsmodell-spezifische TISAX-Variationen:\n• OEM-spezifische Anforderungen: Unterschiedliche TISAX-Schwerpunkte bei Premiumherstellern vs. Volumenproduzenten vs. Elektrofahrzeug-Startups basierend auf deren spezifischen Sicherheitsprioritäten.\n• Tier-Level-abhängige Compliance: Anpassung der TISAX-Bewertung an die Position in der Supply-Chain (Tier-1 Systemlieferanten vs. Tier-2 Komponentenhersteller vs. Tier-3 Rohstofflieferanten).\n• Produkttyp-spezifische Risiken: Differenzierte Bewertung für Safety-Critical Components (Bremsen, Lenkung) vs. Comfort Features vs. Infotainment-Systeme.\n• Service-orientierte Geschäftsmodelle: Spezielle TISAX-Betrachtung für Mobility-as-a-Service, Car-Sharing und Connected Services-Anbieter.\n\n🎯 ADVISORI's Business-Model-Adaptive Assessment:\n• Segmentierte Risikobewertung: Entwicklung geschäftsmodell-spezifischer Risikoprofile, die die einzigartigen Bedrohungslandschaften und Compliance-Prioritäten verschiedener Automotive-Segmente berücksichtigen.\n• Customized Control Prioritization: Anpassung der VDA ISA-Kontrollziel-Priorisierung basierend auf der spezifischen Wertschöpfung und den kritischen Assets des jeweiligen Geschäftsmodells.\n• Value-Chain-Position Analysis: Systematische Bewertung der TISAX-Anforderungen basierend auf der Position und Verantwortung des Unternehmens in der Automotive-Wertschöpfungskette.\n• Future Business Model Readiness: Berücksichtigung evolvier­ender Geschäftsmodelle (E-Mobility, Autonomous Driving, Software-defined Vehicles) in der Gap-Analyse für zukunftssichere TISAX-Implementierungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche Rolle spielt die Integration von Incident Response und Business Continuity Planning in ADVISORI's TISAX Gap Analyse?",
        answer: "Incident Response und Business Continuity Planning sind kritische Komponenten einer robusten TISAX-Compliance-Strategie, die über präventive Sicherheitsmaßnahmen hinausgehen. In der Automotive-Industrie können Sicherheitsvorfälle zu Produktionsstillständen, Lieferkettenstörungen und erheblichen Reputationsschäden führen. ADVISORI integriert systematisch Incident Response-Fähigkeiten und Business Continuity-Planung in die TISAX Gap-Analyse für umfassende Resilienz.\n\n🚨 Automotive-spezifische Incident Response Herausforderungen:\n• Production Line Security Incidents: Spezielle Verfahren für Sicherheitsvorfälle in kritischen Produktionsumgebungen ohne Unterbrechung der Fertigungslinien.\n• Supply-Chain Incident Coordination: Koordinierte Incident Response zwischen verschiedenen Tier-Lieferanten und OEMs bei supply-chain-übergreifenden Sicherheitsvorfällen.\n• Connected Vehicle Incident Management: Behandlung von Sicherheitsvorfällen in vernetzten Fahrzeugen und deren Auswirkungen auf Flottenmanagement und Kundensicherheit.\n• Intellectual Property Breach Response: Spezialisierte Verfahren für den Schutz und die Wiederherstellung kritischer Entwicklungsdaten und Trade Secrets.\n\n🛡️ ADVISORI's Integrated Resilience Framework:\n• Comprehensive Incident Response Assessment: Bewertung bestehender Incident Response-Fähigkeiten gegen TISAX-Anforderungen und Automotive-spezifische Bedrohungsszenarien.\n• Business Impact Analysis Integration: Systematische Analyse der Auswirkungen von Sicherheitsvorfällen auf kritische Automotive-Geschäftsprozesse und Liefervereinbarungen.\n• Cross-Stakeholder Response Coordination: Entwicklung koordinierter Response-Pläne, die interne Teams, externe Partner und OEM-Kunden einbeziehen.\n• Continuous Improvement Integration: Etablierung von Lessons-Learned-Prozessen zur kontinuierlichen Verbesserung von Incident Response und Business Continuity basierend auf realen Erfahrungen und Branchenentwicklungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie adressiert ADVISORI die Herausforderungen von Remote Work und dezentralen Arbeitsmodellen in der TISAX Gap Analyse?",
        answer: "Die COVID-19-Pandemie und der Wandel zu flexiblen Arbeitsmodellen haben die Automotive-Industrie grundlegend verändert. Remote Work, hybride Arbeitsplätze und dezentrale Entwicklungsteams schaffen neue Angriffsvektoren und erweitern die TISAX-Compliance-Perimeter erheblich. Traditionelle VDA ISA-Bewertungen, die auf zentrale Office-Umgebungen ausgelegt sind, greifen bei modernen Arbeitsmodellen zu kurz. ADVISORI hat spezialisierte Remote-Work-Assessment-Methoden entwickelt.\n\n🏠 Remote Work TISAX-Compliance Herausforderungen:\n• Home Office Security Governance: Sicherstellung von TISAX-konformen Sicherheitsmaßnahmen in nicht-kontrollierten Heimarbeitsplätzen ohne übermäßige Eingriffe in die Privatsphäre.\n• BYOD und Personal Device Management: Integration privater Geräte in Automotive-Entwicklungsprozesse unter Einhaltung von VDA ISA-Datenschutz- und Zugriffskontrollanforderungen.\n• Secure Collaboration Platforms: Bewertung und Absicherung von Cloud-basierten Kollaborationstools für vertrauliche Automotive-Entwicklungsprojekte.\n• Cross-Border Remote Access: Management von TISAX-Compliance bei internationalen Remote-Entwicklungsteams mit unterschiedlichen rechtlichen Rahmenbedingungen.\n\n🌐 ADVISORI's Remote-Work-Ready TISAX Framework:\n• Distributed Security Architecture: Entwicklung dezentraler Sicherheitsarchitekturen, die TISAX-Compliance unabhängig vom Arbeitsort gewährleisten ohne Produktivitätsverluste.\n• Zero-Trust Implementation: Integration von Zero-Trust-Prinzipien in TISAX-Compliance-Strategien für sichere Remote-Zugriffe auf kritische Automotive-Systeme und -Daten.\n• Adaptive Authentication Systems: Implementierung risikobasierter Authentifizierungssysteme, die sich dynamisch an verschiedene Arbeitsumgebungen und Zugriffskontexte anpassen.\n• Remote Audit Capabilities: Entwicklung von Methoden für Remote-Assessment und -Überwachung von TISAX-Compliance ohne physische Präsenz vor Ort."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Welche Unterstützung bietet ADVISORI bei der Integration von Artificial Intelligence und Machine Learning in TISAX-konforme Automotive-Systeme?",
        answer: "Artificial Intelligence und Machine Learning sind Schlüsseltechnologien für die Zukunft der Automotive-Industrie, von autonomem Fahren bis hin zu prädiktiver Wartung. Diese Technologien schaffen jedoch neue Sicherheitsherausforderungen, die in traditionellen VDA ISA-Frameworks nicht vollständig abgedeckt sind. AI-basierte Systeme erfordern erweiterte Sicherheitsbetrachtungen für Datenintegrität, Algorithmus-Sicherheit und Model-Protection. ADVISORI hat spezialisierte AI-Security-Assessment-Methoden für TISAX-Compliance entwickelt.\n\n🤖 AI/ML-spezifische TISAX-Sicherheitsherausforderungen:\n• Model Security und IP Protection: Schutz proprietärer Machine Learning-Modelle und Algorithmen vor Reverse Engineering und unauthorized Access entsprechend VDA ISA-Anforderungen.\n• Training Data Security: Sicherstellung der Integrität und Vertraulichkeit von ML-Trainingsdaten, insbesondere bei sensiblen Fahrzeug- und Kundendaten.\n• AI System Reliability: Gewährleistung der Zuverlässigkeit und Vorhersagbarkeit von AI-Entscheidungen in safety-critical Automotive-Anwendungen.\n• Adversarial Attack Prevention: Schutz vor speziellen AI-Angriffen wie Model Poisoning, Evasion Attacks und Data Poisoning in Automotive-Kontexten.\n\n🧠 ADVISORI's AI-Security Integration Framework:\n• AI-Aware Gap Analysis: Erweiterte TISAX-Bewertungsmethodik, die spezifische Sicherheitsanforderungen für AI/ML-Systeme systematisch erfasst und bewertet.\n• Explainable AI Security: Integration von Explainability-Anforderungen in TISAX-Compliance für Nachvollziehbarkeit und Auditierbarkeit von AI-Entscheidungen.\n• Federated Learning Security: Spezielle Sicherheitsarchitekturen für verteiltes Machine Learning zwischen verschiedenen Automotive-Partnern unter Einhaltung von TISAX-Datenschutzanforderungen.\n• AI Model Lifecycle Security: Entwicklung sicherer ML-Entwicklungs- und Deployment-Pipelines, die TISAX-Kontrollen in alle Phasen des AI-Lebenszyklus integrieren."
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
    console.log('✅ C-Level FAQs batch 4 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
