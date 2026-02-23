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
    console.log('Updating Standards Frameworks Struktur Baustein Analyse page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-struktur-baustein-analyse' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-struktur-baustein-analyse" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie unterstützt ADVISORI's Strukturanalyse bei der strategischen Transformation zu Zero Trust Architecture und modernen Sicherheitskonzepten?",
        answer: "Die digitale Transformation und der Wandel zu modernen Sicherheitsarchitekturen wie Zero Trust erfordern eine fundamentale Neubetrachtung traditioneller IT-Grundschutz Ansätze. ADVISORI verbindet bewährte BSI-Methodik mit innovativen Sicherheitskonzepten und schafft so eine Brücke zwischen etablierten Standards und zukunftsweisenden Technologien.\n\n🔄 Transformation von traditionellem zu modernem IT-Grundschutz:\n• Perimeter-lose Sicherheit: Anpassung der Baustein-Analyse an Zero Trust Prinzipien, bei denen traditionelle Netzwerk-Perimeter durch identitätsbasierte Sicherheit ersetzt werden.\n• Cloud-First Architektur: Integration von Cloud-nativen Sicherheitskonzepten und deren Mapping auf IT-Grundschutz Bausteine für hybride und Multi-Cloud-Umgebungen.\n• DevSecOps Integration: Einbindung von Security-by-Design Prinzipien in agile Entwicklungsprozesse und kontinuierliche Compliance-Überwachung.\n• KI-gestützte Sicherheit: Bewertung und Integration von Machine Learning und Künstlicher Intelligenz in bestehende IT-Grundschutz Strukturen.\n\n🚀 ADVISORI's Zukunftsorientierte Analysemethodik:\n• Hybrid Security Model Design: Entwicklung von Sicherheitsarchitekturen, die traditionelle IT-Grundschutz Prinzipien mit modernen Zero Trust Konzepten harmonisch verbinden.\n• API-First Security: Berücksichtigung von API-Sicherheit und Microservices-Architekturen in der Baustein-Bewertung und -Zuordnung.\n• Edge Computing Integration: Anpassung der Strukturanalyse an dezentrale Computing-Modelle und IoT-Umgebungen.\n• Quantum-Ready Preparedness: Vorbereitung auf Post-Quantum-Kryptographie und deren Auswirkungen auf bestehende Sicherheitsmaßnahmen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche Rolle spielt ADVISORI's Strukturanalyse bei der Vorbereitung auf kommende EU-Regulatorik wie NIS2, DORA und den Cyber Resilience Act?",
        answer: "Die sich entwickelnde EU-Regulatorik stellt neue und verschärfte Anforderungen an die Cybersicherheit von Unternehmen. NIS2, DORA und der Cyber Resilience Act erfordern proaktive Anpassungen bestehender IT-Grundschutz Strukturen. ADVISORI positioniert Ihre Strukturanalyse strategisch, um nicht nur aktuelle BSI-Anforderungen zu erfüllen, sondern auch optimal auf kommende regulatorische Änderungen vorbereitet zu sein.\n\n📋 Regulatorische Herausforderungen der neuen EU-Gesetzgebung:\n• NIS2 (Network and Information Security): Erweiterte Meldepflichten, verschärfte Sicherheitsmaßnahmen und neue Branchen-Abdeckung erfordern umfassende Strukturanpassungen.\n• DORA (Digital Operational Resilience Act): Spezielle Anforderungen für Finanzdienstleister an ICT-Risikomanagement und operationale Resilienz.\n• Cyber Resilience Act: Neue Sicherheitsanforderungen für Produkte mit digitalen Elementen und deren Lieferketten.\n• Supply Chain Security: Verstärkte Fokussierung auf Drittanbieter-Risiken und Lieferkettenresilienz.\n\n🎯 ADVISORI's Proaktive Regulatorik-Vorbereitung:\n• Regulatory Mapping: Systematische Zuordnung kommender regulatorischer Anforderungen zu bestehenden und neuen IT-Grundschutz Bausteinen.\n• Gap Analysis für neue Standards: Identifikation von Lücken zwischen aktueller BSI-Compliance und künftigen EU-Anforderungen.\n• Harmonisierte Implementierungsstrategien: Entwicklung von Umsetzungsplänen, die multiple Compliance-Frameworks gleichzeitig adressieren.\n• Future-Proof Architektur: Design von Sicherheitsstrukturen, die flexibel an neue regulatorische Anforderungen angepasst werden können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie optimiert ADVISORI die Strukturanalyse für internationale Konzerne mit unterschiedlichen regulatorischen Anforderungen in verschiedenen Jurisdiktionen?",
        answer: "Internationale Konzerne stehen vor der komplexen Herausforderung, unterschiedliche nationale und regionale Sicherheitsstandards zu harmonisieren. ADVISORI entwickelt globale Strukturanalyse-Frameworks, die lokale Compliance-Anforderungen respektieren und gleichzeitig operative Effizienz durch standardisierte Prozesse und Technologien maximieren.\n\n🌍 Herausforderungen globaler IT-Grundschutz Harmonisierung:\n• Jurisdiktions-spezifische Anforderungen: Unterschiedliche nationale Cybersecurity-Gesetze und -Standards (BSI, NIST, ISO 27001, SOC 2) erfordern differenzierte Ansätze.\n• Datenlokalisation und Souveränität: Verschiedene Datenschutz- und Residency-Anforderungen beeinflussen Architektur- und Implementierungsentscheidungen.\n• Cross-Border Compliance: Komplexe Wechselwirkungen zwischen verschiedenen Regulatorik-Frameworks und deren Auswirkungen auf globale Geschäftsprozesse.\n• Kulturelle und organisatorische Unterschiede: Verschiedene Sicherheitskulturen und Arbeitsweisen in internationalen Teams.\n\n🏛️ ADVISORI's Globale Harmonisierungsstrategie:\n• Multi-Jurisdictional Framework Design: Entwicklung von Basis-Strukturen, die als gemeinsamer Nenner für alle Standorte dienen und lokale Anpassungen ermöglichen.\n• Regulatory Equivalence Mapping: Identifikation von Überschneidungen und Unterschieden zwischen verschiedenen Standards zur Optimierung des Compliance-Aufwands.\n• Centralized-Decentralized Hybrid Model: Balance zwischen globaler Konsistenz und lokaler Flexibilität in der Baustein-Implementierung.\n• Global Security Operations Integration: Harmonisierung von Security Operations Centers (SOCs) und Incident Response Prozessen über verschiedene Zeitzonen und Kulturen hinweg."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Welche innovativen Technologien nutzt ADVISORI zur Automatisierung und kontinuierlichen Überwachung der Strukturanalyse-Ergebnisse?",
        answer: "Die Komplexität moderner IT-Landschaften erfordert den Einsatz fortschrittlicher Technologien zur effizienten Durchführung und kontinuierlichen Überwachung von Strukturanalysen. ADVISORI nutzt Künstliche Intelligenz, Machine Learning und automatisierte Analyseverfahren, um präzisere, schnellere und kontinuierlich aktuelle Bewertungen zu ermöglichen.\n\n🤖 KI-gestützte Analyse- und Überwachungsverfahren:\n• Machine Learning für Asset Discovery: Automatische Erkennung und Klassifizierung von IT-Assets basierend auf Netzwerk-Traffic, Konfigurationsdaten und Verhaltensmustern.\n• Natural Language Processing für Dokumentenanalyse: Automatisierte Auswertung von Handbüchern, Richtlinien und Konfigurationsdokumenten zur Identifikation von Sicherheitsanforderungen.\n• Predictive Risk Modeling: Vorhersage potentieller Sicherheitsrisiken basierend auf historischen Daten und Threat Intelligence.\n• Automated Compliance Monitoring: Kontinuierliche Überwachung der Baustein-Implementierung und automatische Benachrichtigung bei Abweichungen.\n\n⚡ ADVISORI's Technologie-Integration für operative Exzellenz:\n• Digital Twin Security Models: Erstellung digitaler Zwillinge der IT-Infrastruktur zur Simulation von Sicherheitsmaßnahmen und deren Auswirkungen.\n• Blockchain-basierte Audit Trails: Unveränderliche Dokumentation aller Änderungen und Entscheidungen in der Strukturanalyse für Compliance und Governance.\n• Real-time Security Posture Assessment: Kontinuierliche Bewertung der Sicherheitslage basierend auf aktuellen Bedrohungsdaten und Konfigurationsänderungen.\n• Intelligent Automation Orchestration: Koordination verschiedener Automatisierungstools und -prozesse für nahtlose End-to-End-Sicherheitsoperationen."
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
