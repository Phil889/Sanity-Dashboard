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
    console.log('Updating ISO 27001 Maßnahmen page with FAQ batch 4...')
    
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-massnahmen' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-massnahmen" not found')
    }
    
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Welche Kosten-Nutzen-Überlegungen sind bei der Implementierung von ISO 27001 Maßnahmen zu beachten?',
        answer: "Die Kosten-Nutzen-Analyse von ISO 27001 Maßnahmen erfordert eine ganzheitliche Betrachtung direkter und indirekter Kosten sowie quantifizierbarer und strategischer Nutzenaspekte. Erfolgreiche Implementierung balanciert Investitionskosten mit Risikoreduktion und Geschäftswert.\n\n💰 Direkte Implementierungskosten:\n• Personalkosten für interne Teams und externe Beratung\n• Technologie-Investitionen für Sicherheitstools und Infrastruktur\n• Schulungs- und Zertifizierungskosten für Mitarbeiter\n• Audit- und Zertifizierungsgebühren\n• Dokumentations- und Prozesskosten\n\n📊 Quantifizierbare Nutzenaspekte:\n• Reduktion von Sicherheitsvorfällen und damit verbundenen Kosten\n• Vermeidung von Compliance-Strafen und regulatorischen Sanktionen\n• Reduzierte Versicherungsprämien durch nachgewiesene Sicherheitsmaßnahmen\n• Effizienzsteigerungen durch standardisierte Prozesse\n• Kosteneinsparungen durch präventive Maßnahmen\n\n🎯 Strategische Wertschöpfung:\n• Wettbewerbsvorteile durch Vertrauensbildung bei Kunden und Partnern\n• Neue Geschäftsmöglichkeiten durch Compliance-Nachweis\n• Verbesserte Reputation und Markenimage\n• Erhöhte Mitarbeiterzufriedenheit durch sichere Arbeitsumgebung\n• Strategische Positionierung als vertrauenswürdiger Partner"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Wie können kleine und mittlere Unternehmen ISO 27001 Maßnahmen ressourcenschonend implementieren?',
        answer: "Kleine und mittlere Unternehmen können ISO 27001 Maßnahmen durch pragmatische Ansätze, Priorisierung und clevere Ressourcennutzung erfolgreich implementieren. Der Schlüssel liegt in der risikobasierten Fokussierung auf wesentliche Kontrollen und der Nutzung kosteneffizienter Lösungen.\n\n🎯 Risikobasierte Priorisierung:\n• Fokussierung auf kritische Assets und Hauptbedrohungen\n• Implementierung der wichtigsten Kontrollen in der ersten Phase\n• Schrittweise Erweiterung basierend auf verfügbaren Ressourcen\n• Nutzung bestehender Prozesse und Systeme wo möglich\n• Vermeidung von Over-Engineering und unnötiger Komplexität\n\n💡 Kosteneffiziente Lösungsansätze:\n• Nutzung von Open Source und Cloud-basierten Sicherheitstools\n• Implementierung von Multi-Purpose-Lösungen\n• Outsourcing spezialisierter Funktionen an Managed Service Provider\n• Aufbau von Kooperationen mit anderen KMU für gemeinsame Ressourcen\n• Nutzung von Förderprogrammen und staatlichen Unterstützungen\n\n👥 Interne Ressourcenoptimierung:\n• Aufbau interner Expertise durch gezielte Schulungen\n• Nutzung von Mitarbeitern mit IT-Affinität als Security Champions\n• Implementierung von Automatisierung für wiederkehrende Aufgaben\n• Entwicklung einfacher, aber effektiver Prozesse\n• Fokus auf praktische Umsetzbarkeit statt theoretischer Perfektion"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Welche Trends und Entwicklungen prägen die Zukunft von ISO 27001 Maßnahmen?',
        answer: "Die Zukunft von ISO 27001 Maßnahmen wird durch technologische Innovation, veränderte Bedrohungslandschaften und neue regulatorische Anforderungen geprägt. Organisationen müssen sich auf kontinuierliche Anpassung und Evolution ihrer Sicherheitskontrollen einstellen.\n\n🤖 Automatisierung und KI-Integration:\n• Automatisierte Compliance-Überwachung und Reporting\n• KI-gestützte Bedrohungserkennung und Response\n• Machine Learning für Anomalieerkennung und Risikobewertung\n• Intelligente Orchestrierung von Sicherheitskontrollen\n• Predictive Analytics für proaktive Sicherheitsmaßnahmen\n\n🌐 Cloud-Native und Zero Trust:\n• Entwicklung Cloud-spezifischer Kontrollframeworks\n• Integration von Zero Trust Prinzipien in alle Kontrollen\n• Container und Kubernetes Security als Standard\n• Serverless und Edge Computing Sicherheitskontrollen\n• Multi-Cloud und Hybrid-Cloud Governance\n\n📱 Erweiterte Digitalisierung:\n• IoT und OT Security Integration\n• Mobile-First Security Approaches\n• Remote Work und Distributed Teams Support\n• Digital Identity und Biometric Authentication\n• Quantum-Safe Cryptography Vorbereitung\n\n🔄 Kontinuierliche Compliance:\n• Real-Time Compliance Monitoring\n• Continuous Auditing und Assessment\n• DevSecOps Integration in alle Entwicklungsprozesse\n• Agile Security und Rapid Response Capabilities\n• Integration mit Business Process Automation"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie können ISO 27001 Maßnahmen zur Stärkung der Cyber-Resilienz beitragen?',
        answer: "ISO 27001 Maßnahmen bilden das Fundament für umfassende Cyber-Resilienz, indem sie systematische Vorbereitung, schnelle Response-Fähigkeiten und effektive Recovery-Mechanismen etablieren. Moderne Cyber-Resilienz geht über traditionelle Prävention hinaus und fokussiert auf Anpassungsfähigkeit und Kontinuität.\n\n🛡️ Präventive Resilienz-Maßnahmen:\n• Aufbau redundanter Systeme und Backup-Strategien\n• Implementierung von Defense-in-Depth Architekturen\n• Entwicklung von Threat Intelligence und Early Warning Systemen\n• Etablierung von Vulnerability Management und Patch-Strategien\n• Integration von Security Awareness und Human Firewall Konzepten\n\n⚡ Adaptive Response-Fähigkeiten:\n• Aufbau flexibler Incident Response Teams\n• Implementierung von Automated Response und Orchestration\n• Entwicklung von Scenario-based Response Playbooks\n• Etablierung von Crisis Communication und Stakeholder Management\n• Integration von Threat Hunting und Forensic Capabilities\n\n🔄 Recovery und Kontinuität:\n• Implementierung von Business Continuity und Disaster Recovery\n• Aufbau von Rapid Recovery und System Restoration Capabilities\n• Entwicklung von Lessons Learned und Continuous Improvement Prozessen\n• Etablierung von Post-Incident Analysis und Strengthening\n• Integration von Supply Chain Resilience und Partner Recovery\n\n📈 Strategische Resilienz-Governance:\n• Aufbau von Resilienz-Metriken und KPIs\n• Implementierung von Board-Level Cyber Risk Governance\n• Entwicklung von Cyber Insurance und Risk Transfer Strategien\n• Etablierung von Industry Collaboration und Information Sharing\n• Integration von Regulatory Compliance und Reporting Requirements"
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
    console.log('✅ FAQ batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
