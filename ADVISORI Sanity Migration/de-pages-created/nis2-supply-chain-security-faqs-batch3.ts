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
    console.log('Updating NIS2 Supply Chain Security page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-supply-chain-security' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-supply-chain-security" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie unterstützt ADVISORI bei der Implementierung von Zero Trust-Prinzipien in der NIS2-Supply Chain Security und welche Auswirkungen hat dies auf traditionelle Vendor Relationships?",
        answer: "Zero Trust-Prinzipien revolutionieren die Art, wie Organisationen ihre Lieferketten sichern. Im Kontext der NIS2-Richtlinie bedeutet dies, dass jeder Lieferant und jede Transaktion kontinuierlich verifiziert werden muss, unabhängig von bestehenden Vertrauensbeziehungen. ADVISORI implementiert Zero Trust-Architekturen, die traditionelle perimeter-basierte Security-Modelle durch adaptive, risikobasierte Sicherheitsmaßnahmen ersetzen.\n\n🔐 Zero Trust Supply Chain Architecture:\n• Never Trust, Always Verify: Implementierung kontinuierlicher Authentifizierung und Autorisierung für alle Supplier-Interaktionen, unabhängig von der Vertragsdauer oder bisherigen Performance.\n• Micro-Segmentation von Supplier Access: Granulare Kontrolle über Lieferantenzugriffe auf Systeme und Daten, basierend auf dem Prinzip des minimalen Privilegs.\n• Real-time Risk Assessment: Kontinuierliche Bewertung der Vertrauenswürdigkeit von Lieferanten basierend auf aktuellen Sicherheitsindikatoren und Verhaltensmustern.\n• Dynamic Access Controls: Automatische Anpassung von Zugriffsrechten basierend auf sich ändernden Risikoprofilen und Bedrohungslagen.\n\n🤝 Transformation traditioneller Vendor Relationships:\n• From Trust-based to Evidence-based Partnerships: Übergang von traditionellen, vertrauensbasierten Beziehungen zu datengestützten, kontinuierlich validierten Partnerschaften.\n• Collaborative Security Posture: Entwicklung gemeinsamer Security-Standards und -Praktiken, die sowohl Ihre als auch die Interessen Ihrer Lieferanten schützen.\n• Transparent Risk Sharing: Klare Definition und Aufteilung von Security-Verantwortlichkeiten und Haftungsrisiken zwischen allen Parteien.\n• Continuous Improvement Partnership: Etablierung von Feedback-Loops zur kontinuierlichen Verbesserung der gemeinsamen Security-Posture entlang der gesamten Lieferkette."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche spezifischen Herausforderungen bringen Cloud-native und Software-as-a-Service Lieferanten im Kontext der NIS2-Supply Chain Security mit sich?",
        answer: "Cloud-native und SaaS-Lieferanten bringen einzigartige Herausforderungen für die NIS2-Supply Chain Security mit sich, da traditionelle Perimeter-Kontrollen nicht mehr anwendbar sind. Die dynamische Natur von Cloud-Services und die geteilte Verantwortung zwischen Provider und Kunde erfordern neue Ansätze für Risk Assessment und Compliance Monitoring. ADVISORI entwickelt spezialisierte Frameworks für die Sicherung von Cloud-Supply-Chains.\n\n☁️ Cloud-spezifische Supply Chain Risiken:\n• Shared Responsibility Model Complexity: Klare Definition und Überwachung der Verantwortlichkeiten zwischen Cloud-Providern und Ihrer Organisation im Kontext der NIS2-Compliance.\n• Multi-Tenancy Security Concerns: Bewertung und Mitigation von Risiken, die durch die gemeinsame Nutzung von Cloud-Infrastrukturen mit anderen Kunden entstehen.\n• Data Sovereignty und Jurisdiction Issues: Sicherstellung, dass Cloud-basierte Lieferanten die NIS2-Anforderungen bezüglich Datenstandort und -kontrolle erfüllen.\n• API Security und Integration Risks: Bewertung der Sicherheit von API-Schnittstellen und deren Integration in Ihre kritischen Geschäftsprozesse.\n\n🛡️ ADVISORI's Cloud Supply Chain Security Framework:\n• Cloud Security Posture Assessment: Kontinuierliche Bewertung der Security-Konfiguration und Compliance-Posture von Cloud-Lieferanten.\n• API Security Testing: Regelmäßige Penetrationstests und Vulnerability Assessments von API-Schnittstellen kritischer SaaS-Provider.\n• Cloud Contract Security Reviews: Spezialisierte Analyse von Cloud-Service-Verträgen zur Sicherstellung NIS2-konformer Klauseln und SLAs.\n• Multi-Cloud Risk Management: Entwicklung von Strategien zur Diversifizierung von Cloud-Lieferanten zur Reduzierung von Vendor Lock-in-Risiken und Single Points of Failure."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie adressiert ADVISORI die zunehmende Bedeutung von ESG-Compliance in der NIS2-Supply Chain Security und welche Synergien entstehen dabei?",
        answer: "Environmental, Social, and Governance (ESG)-Faktoren werden zunehmend mit Cybersicherheit verknüpft, da beide Bereiche kritisch für nachhaltige Geschäftstätigkeit sind. Die NIS2-Richtlinie erkennt an, dass Security-Vorfälle erhebliche ESG-Auswirkungen haben können. ADVISORI integriert ESG-Prinzipien in Supply Chain Security-Programme, um sowohl regulatorische Compliance als auch nachhaltige Geschäftspraktiken zu fördern.\n\n🌱 ESG-Security Convergence in der Lieferkette:\n• Sustainable Security Practices: Entwicklung von Supply Chain Security-Maßnahmen, die gleichzeitig Umweltauswirkungen minimieren und soziale Verantwortung fördern.\n• Ethical Supplier Assessment: Integration von ESG-Kriterien in Security-Bewertungen zur Identifikation von Lieferanten, die sowohl sicher als auch nachhaltig operieren.\n• Governance Alignment: Verknüpfung von Supply Chain Security-Governance mit ESG-Berichterstattung und -Zielen.\n• Stakeholder Transparency: Entwicklung von Reporting-Mechanismen, die sowohl Security- als auch ESG-Performance der Lieferkette transparent machen.\n\n📊 Synergien zwischen NIS2 und ESG:\n• Unified Risk Assessment: Integration von Security- und ESG-Risiken in gemeinsame Assessment-Frameworks für eine ganzheitliche Lieferantenbewertung.\n• Dual-Purpose Investments: Identifikation von Technologien und Praktiken, die sowohl Security- als auch ESG-Ziele unterstützen.\n• Enhanced Stakeholder Value: Schaffung von Mehrwert für Investoren, Kunden und Regulatoren durch integrierte Security-ESG-Berichterstattung.\n• Future-proof Compliance: Vorbereitung auf zukünftige regulatorische Entwicklungen, die Security und ESG noch enger verknüpfen werden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Welche Rolle spielt Blockchain-Technologie in der NIS2-Supply Chain Security und wie implementiert ADVISORI diese für Enhanced Transparency und Traceability?",
        answer: "Blockchain-Technologie bietet einzigartige Möglichkeiten für die Verbesserung der Transparenz und Nachverfolgbarkeit in Supply Chains, was besonders im Kontext der NIS2-Compliance wertvoll ist. Die unveränderliche und transparente Natur von Blockchain kann das Vertrauen zwischen Lieferkettenpartnern stärken und gleichzeitig Audit-Trails und Compliance-Nachweise verbessern. ADVISORI entwickelt Blockchain-basierte Lösungen für kritische Supply Chain Security-Anwendungen.\n\n🔗 Blockchain für Supply Chain Security:\n• Immutable Audit Trails: Schaffung unveränderlicher Aufzeichnungen aller Supply Chain Security-Ereignisse und -Transaktionen für lückenlose NIS2-Compliance-Dokumentation.\n• Distributed Trust Networks: Aufbau dezentraler Vertrauensnetzwerke zwischen Lieferkettenpartnern, die traditionelle zentrale Vertrauensinstanzen ergänzen oder ersetzen.\n• Smart Contracts für Security Compliance: Automatisierung von Compliance-Überprüfungen und Security-Requirements durch intelligente Verträge.\n• Cryptographic Verification: Einsatz kryptographischer Methoden zur Verifizierung der Authentizität und Integrität von Lieferanten-Zertifizierungen und -Nachweisen.\n\n⚡ ADVISORI's Blockchain Implementation Strategie:\n• Hybrid Blockchain Architectures: Entwicklung von Lösungen, die die Vorteile öffentlicher und privater Blockchains für verschiedene Supply Chain Security-Anwendungen kombinieren.\n• Interoperability Standards: Sicherstellung der Kompatibilität zwischen verschiedenen Blockchain-Plattformen und bestehenden Supply Chain-Systemen.\n• Privacy-preserving Technologies: Implementation von Zero-Knowledge-Proofs und anderen Privacy-Technologies zur Protection sensibler Supply Chain-Informationen.\n• Gradual Adoption Roadmaps: Entwicklung schrittweiser Implementierungsstrategien, die Risiken minimieren und ROI maximieren."
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
