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
    console.log('Updating IoT PKI page with FAQ batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iot-pki' })
    
    if (!existingDoc) {
      throw new Error('Document "iot-pki" not found')
    }
    
    // Create new FAQs for cost optimization, vendor selection, and best practices
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Wie können Unternehmen die Kosten für IoT PKI-Implementierungen optimieren ohne die Sicherheit zu kompromittieren?',
        answer: "Kostenoptimierung in IoT PKI-Projekten erfordert strategische Planung, intelligente Ressourcenallokation und innovative Ansätze, die Sicherheitsstandards aufrechterhalten während gleichzeitig Budgetbeschränkungen respektiert werden. Erfolgreiche Cost-Optimization kombiniert technische Effizienz, operative Exzellenz und langfristige Wertschöpfung.\n\n💰 Strategic Cost Planning und Budgeting:\n• Total Cost of Ownership (TCO) Analysis berücksichtigt alle direkten und indirekten Kosten über den gesamten PKI-Lebenszyklus\n• Phased Implementation Strategies verteilen Investitionen über Zeit und ermöglichen schrittweise Budgetfreigaben basierend auf nachgewiesenen Erfolgen\n• Cost-Benefit Analysis quantifiziert PKI-Vorteile gegen Implementierungskosten für fundierte Investitionsentscheidungen\n• Budget Allocation Optimization priorisiert kritische PKI-Komponenten und verschiebt Nice-to-Have-Features auf spätere Phasen\n• ROI Tracking überwacht Return on Investment kontinuierlich und justiert Strategien für maximale Kosteneffizienz"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Welche Kriterien sind bei der Auswahl von IoT PKI-Anbietern und -Lösungen entscheidend?',
        answer: "Die Auswahl des richtigen IoT PKI-Anbieters ist eine strategische Entscheidung, die langfristige Auswirkungen auf Sicherheit, Skalierbarkeit und Betriebseffizienz hat. Eine strukturierte Vendor-Evaluation berücksichtigt technische Capabilities, Business-Faktoren und strategische Alignment für nachhaltige PKI-Partnerschaften.\n\n🔍 Technical Capability Assessment:\n• Scalability Architecture Evaluation prüft Fähigkeit zur Unterstützung massiver IoT-Device-Mengen und zukünftiges Wachstum\n• Security Standards Compliance validiert Einhaltung relevanter Standards wie FIPS 140-2, Common Criteria und branchenspezifischer Anforderungen\n• Cryptographic Agility Support bewertet Flexibilität bei Algorithm-Migration und Post-Quantum-Cryptography-Readiness\n• Integration Capabilities analysieren API-Qualität, SDK-Verfügbarkeit und Kompatibilität mit bestehenden IT-Systemen\n• Performance Benchmarks messen Certificate-Throughput, Latency und Resource-Efficiency unter realistischen Bedingungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Welche Best Practices sollten bei der Implementierung und dem Betrieb von IoT PKI-Systemen befolgt werden?',
        answer: "Erfolgreiche IoT PKI-Implementierungen folgen bewährten Praktiken, die technische Exzellenz, operative Effizienz und langfristige Nachhaltigkeit gewährleisten. Diese Best Practices basieren auf Industry-Erfahrungen, Standards-Compliance und kontinuierlicher Verbesserung für robuste, skalierbare PKI-Infrastrukturen.\n\n🏗️ Architecture und Design Best Practices:\n• Defense in Depth Strategy implementiert mehrschichtige Sicherheitskontrollen für umfassenden PKI-Schutz\n• Zero Trust Architecture behandelt alle PKI-Komponenten als potentiell kompromittiert und erfordert kontinuierliche Verifikation\n• Modular Design Principles schaffen flexible, erweiterbare PKI-Architekturen durch lose gekoppelte Komponenten\n• Scalability by Design berücksichtigt zukünftiges Wachstum bereits in der initialen Architektur-Planung\n• High Availability Planning implementiert Redundanz und Failover-Mechanismen für unterbrechungsfreie PKI-Services"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Wie entwickelt sich die Zukunft von IoT PKI und welche Innovationen sind zu erwarten?',
        answer: "Die Zukunft von IoT PKI wird von revolutionären Technologien, sich entwickelnden Sicherheitsanforderungen und neuen Anwendungsszenarien geprägt. Emerging Trends wie Quantum Computing, Artificial Intelligence und Decentralized Identity schaffen transformative Möglichkeiten, die fundamentale Veränderungen in PKI-Paradigmen und -Implementierungen vorantreiben.\n\n🔮 Quantum-Era PKI Transformation:\n• Post-Quantum Cryptography Adoption wird zur Standardpraxis, da Quantencomputer traditionelle Kryptographie bedrohen\n• Quantum Key Distribution (QKD) Networks ermöglichen theoretisch unknackbare Schlüsselverteilung für kritische IoT-Infrastrukturen\n• Hybrid Classical-Quantum Cryptography kombiniert bewährte und quantensichere Algorithmen für Übergangsperioden\n• Quantum-Safe Certificate Authorities implementieren quantenresistente Algorithmen für langfristige Sicherheit\n• Quantum Threat Assessment Tools bewerten kontinuierlich Quantum-Risiken für bestehende PKI-Implementierungen"
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
    console.log('✅ FAQ batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
