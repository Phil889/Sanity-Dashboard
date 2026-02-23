import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}

const run = async () => {
  try {
    console.log('Updating PKI Infrastructure page with FAQ batch 5...')
    
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'pki-infrastructure' })
    
    if (!existingDoc) {
      throw new Error('Document "pki-infrastructure" not found')
    }
    
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Welche Best Practices gibt es für PKI-Governance und -Management?',
        answer: "PKI-Governance etabliert organisatorische Strukturen, Prozesse und Richtlinien für effektives PKI-Management. Erfolgreiche PKI-Governance balanciert Sicherheitsanforderungen mit operativer Effizienz und Business-Anforderungen.\n\n📋 Governance Framework:\n• PKI Policy Development definiert organisationsweite Richtlinien für Zertifikatsnutzung\n• Certificate Practice Statement dokumentiert technische und operative Verfahren\n• Roles and Responsibilities Matrix definiert klare Verantwortlichkeiten\n• Change Management Processes gewährleisten kontrollierte PKI-Änderungen\n• Risk Management Framework identifiziert und mitigiert PKI-Risiken\n\n👥 Organizational Structure:\n• PKI Steering Committee trifft strategische Entscheidungen\n• Certificate Authority Operations Team verwaltet tägliche CA-Operationen\n• Security Team überwacht PKI-Sicherheit und Compliance\n• Application Teams integrieren PKI in Geschäftsanwendungen\n• Audit Team führt regelmäßige PKI-Assessments durch\n\n🔄 Lifecycle Governance:\n• Certificate Request Approval Workflows automatisieren Genehmigungsprozesse\n• Renewal Management gewährleistet rechtzeitige Zertifikatserneuerung\n• Revocation Procedures definieren schnelle Reaktion auf Kompromittierungen\n• Archive and Retention Policies verwalten historische PKI-Daten\n• End-of-Life Planning definiert PKI-Dekommissionierung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Wie wird PKI-Interoperabilität zwischen verschiedenen Systemen und Anbietern gewährleistet?',
        answer: "PKI-Interoperabilität ermöglicht nahtlose Zusammenarbeit zwischen verschiedenen PKI-Systemen, Anwendungen und Organisationen. Standardbasierte Ansätze und sorgfältige Architektur-Planung sind essentiell für erfolgreiche Interoperabilität.\n\n🔗 Standards-basierte Interoperabilität:\n• X.509 Certificate Format gewährleistet universelle Zertifikatskompatibilität\n• PKCS Standards ermöglichen plattformübergreifende kryptographische Operationen\n• RFC-konforme Implementierungen sichern Internet-PKI-Kompatibilität\n• ASN.1 Encoding Standards gewährleisten korrekte Datenrepräsentation\n• OID Registration vermeidet Konflikte bei Zertifikatserweiterungen\n\n🏗️ Cross-Platform Integration:\n• Multi-Vendor CA Support ermöglicht Integration verschiedener CA-Produkte\n• Protocol Translation Gateways verbinden inkompatible PKI-Systeme\n• API Standardization schafft einheitliche Schnittstellen\n• Certificate Format Conversion automatisiert Formatübersetzungen\n• Legacy System Bridges verbinden alte mit modernen PKI-Systemen\n\n🌐 Federation und Trust Models:\n• Cross-Certification etabliert Vertrauen zwischen verschiedenen PKI-Domänen\n• Bridge CA Models zentralisieren Interoperabilität\n• Trust Anchor Synchronization harmonisiert Vertrauensmodelle\n• Policy Mapping übersetzt Zertifikatsrichtlinien zwischen Systemen\n• Mutual Recognition Agreements formalisieren PKI-Interoperabilität"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Welche Zukunftstrends und Entwicklungen prägen die PKI-Landschaft?',
        answer: "Die PKI-Landschaft entwickelt sich kontinuierlich weiter, getrieben von neuen Technologien, veränderten Bedrohungslandschaften und sich wandelnden Business-Anforderungen. Zukunftsorientierte PKI-Strategien müssen diese Trends antizipieren.\n\n🔮 Emerging Technologies:\n• Quantum-Safe Cryptography bereitet PKI auf Post-Quantum-Ära vor\n• Blockchain-based PKI erforscht dezentrale Vertrauensmodelle\n• AI-Enhanced PKI nutzt Machine Learning für Anomalieerkennung\n• Edge Computing PKI bringt Zertifikatsdienste näher zu IoT-Geräten\n• Homomorphic Encryption ermöglicht Berechnungen auf verschlüsselten PKI-Daten\n\n📱 Mobile und IoT Evolution:\n• 5G Network Slicing erfordert spezialisierte PKI-Architekturen\n• Massive IoT Deployments benötigen ultra-skalierbare PKI-Lösungen\n• Mobile Device Attestation nutzt PKI für Hardware-basierte Vertrauensmodelle\n• Autonomous Systems PKI ermöglicht sichere Machine-to-Machine-Kommunikation\n• Digital Twin Security nutzt PKI für sichere virtuelle Repräsentationen\n\n🏢 Business Model Innovation:\n• PKI-as-a-Service demokratisiert Zugang zu Enterprise-PKI\n• Subscription-based PKI Models ändern Kostenstrukturen\n• API-first PKI Platforms ermöglichen nahtlose Integration\n• Low-Code PKI Solutions vereinfachen PKI-Implementierung\n• Compliance-as-a-Service automatisiert regulatorische Anforderungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Wie wird PKI-Training und Kompetenzaufbau in Organisationen implementiert?',
        answer: "Effektives PKI-Training ist kritisch für erfolgreiche PKI-Implementierung und -Betrieb. Umfassende Schulungsprogramme müssen verschiedene Zielgruppen und Kompetenzniveaus berücksichtigen.\n\n👥 Zielgruppenspezifisches Training:\n• Executive Leadership Training vermittelt PKI-Business-Value und strategische Bedeutung\n• IT Administrator Schulungen fokussieren auf technische Implementierung und Betrieb\n• Developer Training integriert PKI in Anwendungsentwicklung\n• End User Awareness schult Mitarbeiter in sicherer Zertifikatsnutzung\n• Security Team Training vertieft PKI-Sicherheitsaspekte und Incident Response\n\n📚 Training Content und Methoden:\n• Hands-on Labs ermöglichen praktische PKI-Erfahrung\n• Simulation Environments bieten sichere Testumgebungen\n• Case Study Analysis vermittelt Real-World PKI-Herausforderungen\n• Certification Programs validieren PKI-Kompetenzen\n• Continuous Learning Platforms halten Wissen aktuell\n\n🎯 Competency Development:\n• Skills Assessment identifiziert Trainingsbedarf\n• Learning Paths definieren strukturierte Kompetenzentwicklung\n• Mentoring Programs verbinden erfahrene mit neuen PKI-Praktikern\n• Knowledge Management Systems dokumentieren PKI-Best-Practices\n• Performance Metrics messen Trainingseffektivität"
      }
    ]
    
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
