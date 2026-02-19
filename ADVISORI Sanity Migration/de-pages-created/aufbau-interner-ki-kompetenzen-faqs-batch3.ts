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
    console.log('Updating Aufbau interner KI-Kompetenzen page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'aufbau-interner-ki-kompetenzen' })
    
    if (!existingDoc) {
      throw new Error('Document "aufbau-interner-ki-kompetenzen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Welche Technologie-Integration-Strategien verfolgt ADVISORI beim Aufbau interner KI-Kompetenzen und wie wählen wir die richtigen Tools und Plattformen für verschiedene Lernziele aus?',
        answer: "ADVISORI entwickelt strategische Technologie-Integration-Ansätze, die Lernziele mit praktischer Anwendbarkeit verbinden und gleichzeitig zukunftssichere Technologie-Stacks etablieren. Unsere Tool-Auswahl basiert auf pädagogischen Prinzipien, Geschäftsanforderungen und der langfristigen Technologie-Roadmap des Unternehmens für maximale Lerneffektivität und ROI.\n\n🔧 Strategische Tool-Selection-Frameworks:\n• Learning-Objective Alignment: Auswahl von Technologien basierend auf spezifischen Lernzielen und Kompetenzanforderungen verschiedener Rollen.\n• Enterprise Integration Readiness: Bewertung der Kompatibilität mit bestehenden IT-Landschaften und Sicherheitsanforderungen.\n• Scalability und Future-Proofing: Fokus auf Technologien, die mit wachsenden Anforderungen und technologischen Entwicklungen mitwachsen können.\n• Cost-Benefit-Optimierung: Ausgewogene Betrachtung von Anschaffungskosten, Lernkurve und langfristigem Geschäftswert.\n\n🚀 Multi-Platform Learning Ecosystems:\n• Cloud-Native Development Environments: Bereitstellung skalierbarer, kollaborativer Entwicklungsumgebungen für praktisches Lernen.\n• Industry-Standard Toolchains: Training mit denselben Tools und Frameworks, die in der Praxis verwendet werden, für nahtlosen Wissenstransfer.\n• Sandbox und Experimentation Platforms: Sichere Umgebungen für Experimente und Prototyping ohne Risiko für Produktionssysteme.\n• Collaborative Learning Platforms: Integration von Kommunikations- und Kollaborationstools für teambasiertes Lernen und Wissensaustausch.\n\n💡 Adaptive Technology Integration:\n• Progressive Complexity: Stufenweise Einführung komplexerer Tools entsprechend dem Lernfortschritt der Teilnehmer.\n• Role-Specific Tool Stacks: Maßgeschneiderte Technologie-Kombinationen für verschiedene Rollen und Verantwortlichkeiten.\n• Vendor-Agnostic Approaches: Fokus auf übertragbare Konzepte und Fähigkeiten, die nicht an spezifische Anbieter gebunden sind.\n• Continuous Technology Refresh: Regelmäßige Aktualisierung der Tool-Landschaft entsprechend Marktentwicklungen und Feedback."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Wie adressiert ADVISORI die kritischen Infrastruktur-Anforderungen für effektive KI-Kompetenzentwicklung und welche Sicherheitsüberlegungen sind dabei zentral?',
        answer: "ADVISORI versteht, dass robuste Infrastruktur die Grundlage für effektive KI-Kompetenzentwicklung bildet. Unsere Infrastruktur-Strategien kombinieren Performance, Sicherheit und Skalierbarkeit, um optimale Lernumgebungen zu schaffen, die gleichzeitig höchste Sicherheitsstandards erfüllen und DSGVO-Compliance gewährleisten.\n\n🏗️ Enterprise-Grade Learning Infrastructure:\n• High-Performance Computing Resources: Bereitstellung ausreichender Rechenkapazitäten für komplexe KI-Modelle und große Datensätze.\n• Elastic Scaling Capabilities: Dynamische Anpassung der Ressourcen entsprechend Nutzungsmustern und Projektanforderungen.\n• Multi-Tenant Architectures: Sichere Isolation verschiedener Lerngruppen und Projekte bei effizienter Ressourcennutzung.\n• Global Accessibility: Verteilte Infrastruktur für konsistente Performance unabhängig vom Standort der Lernenden.\n\n🔒 Security-First Infrastructure Design:\n• Zero-Trust Architecture: Implementierung von Zero-Trust-Prinzipien für alle Zugriffe auf Lernressourcen und Daten.\n• Data Encryption und Privacy: End-to-End-Verschlüsselung aller Lern- und Projektdaten mit strikter Einhaltung von Datenschutzbestimmungen.\n• Access Control und Identity Management: Granulare Berechtigungskonzepte mit rollenbasiertem Zugriff und Multi-Faktor-Authentifizierung.\n• Audit Trails und Compliance Monitoring: Umfassende Protokollierung aller Aktivitäten für Compliance-Nachweise und Sicherheitsanalysen.\n\n🌐 Hybrid und Multi-Cloud Strategies:\n• Cloud-Agnostic Deployments: Flexibilität bei der Wahl von Cloud-Anbietern entsprechend spezifischen Anforderungen und Compliance-Vorgaben.\n• On-Premises Integration: Nahtlose Integration mit bestehenden On-Premises-Systemen für sensible Daten und Legacy-Anwendungen.\n• Disaster Recovery und Business Continuity: Robuste Backup- und Wiederherstellungsstrategien für unterbrechungsfreies Lernen.\n• Performance Optimization: Kontinuierliche Überwachung und Optimierung der Infrastruktur-Performance für optimale Nutzererfahrung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Welche spezifischen Sicherheitsüberlegungen und Datenschutz-Frameworks implementiert ADVISORI beim Aufbau von KI-Kompetenzen, insbesondere im Hinblick auf DSGVO und sensible Unternehmensdaten?',
        answer: "ADVISORI implementiert umfassende Sicherheits- und Datenschutz-Frameworks, die nicht nur regulatorische Compliance gewährleisten, sondern auch als praktische Lernumgebung für verantwortungsvolle KI-Entwicklung dienen. Unsere Ansätze integrieren Privacy-by-Design-Prinzipien in alle Aspekte der Kompetenzentwicklung und schaffen gleichzeitig sichere Lernumgebungen für sensible Geschäftsdaten.\n\n🛡️ DSGVO-konforme Lernumgebungen:\n• Privacy-by-Design Integration: Datenschutzprinzipien sind von Anfang an in alle Lernmodule und praktischen Übungen integriert.\n• Data Minimization Practices: Verwendung synthetischer und anonymisierter Datensätze für Lernzwecke, wo immer möglich.\n• Consent Management: Klare Einverständniserklärungen und granulare Kontrolle über die Verwendung von Lerndaten.\n• Right to Erasure Implementation: Technische und organisatorische Maßnahmen zur vollständigen Löschung von Lerndaten auf Anfrage.\n\n🔐 Enterprise Data Protection:\n• Data Classification und Handling: Systematische Klassifizierung von Daten entsprechend Sensitivität und Implementierung angemessener Schutzmaßnahmen.\n• Secure Data Sandboxing: Isolierte Umgebungen für die Arbeit mit sensiblen Unternehmensdaten ohne Risiko für Produktionssysteme.\n• Intellectual Property Protection: Spezielle Maßnahmen zum Schutz von Geschäftsgeheimnissen und proprietären Algorithmen.\n• Cross-Border Data Transfer Compliance: Einhaltung internationaler Datentransfer-Bestimmungen für global verteilte Teams.\n\n🎯 Praktische Sicherheits-Kompetenzentwicklung:\n• Hands-on Security Training: Praktische Übungen zu Bedrohungserkennung, Incident Response und Sicherheits-Assessment.\n• Ethical Hacking und Penetration Testing: Schulungen zur proaktiven Identifikation von Schwachstellen in KI-Systemen.\n• Compliance Automation: Entwicklung von Fähigkeiten zur Automatisierung von Compliance-Prozessen und -Überwachung.\n• Security Culture Building: Aufbau einer sicherheitsbewussten Kultur, die Sicherheit als integralen Bestandteil der KI-Entwicklung versteht."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Wie gewährleistet ADVISORI die nahtlose Integration von KI-Kompetenzentwicklung in bestehende Unternehmens-IT-Landschaften und Legacy-Systeme?',
        answer: "ADVISORI entwickelt Integrations-Strategien, die KI-Kompetenzentwicklung organisch in bestehende IT-Ökosysteme einbetten, ohne disruptive Veränderungen zu verursachen. Unser Ansatz respektiert gewachsene Systemlandschaften und schafft gleichzeitig Brücken zu modernen KI-Technologien für praktisches, anwendungsorientiertes Lernen.\n\n🔗 Legacy System Integration Strategies:\n• API-First Approaches: Entwicklung von Integrationslösungen, die bestehende Systeme über APIs zugänglich machen für KI-Lernprojekte.\n• Gradual Modernization Pathways: Schrittweise Modernisierung von Legacy-Systemen als Teil der Kompetenzentwicklung.\n• Hybrid Architecture Design: Kombination von Legacy-Systemen mit modernen KI-Plattformen für realistische Lernszenarien.\n• Data Pipeline Integration: Aufbau von Datenflüssen zwischen Legacy-Systemen und KI-Lernumgebungen für authentische Projektarbeit.\n\n🏢 Enterprise Architecture Alignment:\n• IT Governance Integration: Einbettung der KI-Kompetenzentwicklung in bestehende IT-Governance-Strukturen und -Prozesse.\n• Security Policy Compliance: Vollständige Einhaltung bestehender Sicherheitsrichtlinien und -standards bei allen Lernaktivitäten.\n• Change Management Coordination: Koordination mit bestehenden Change-Management-Prozessen für reibungslose Integration.\n• Resource Optimization: Effiziente Nutzung bestehender IT-Ressourcen und -Infrastrukturen für Lernzwecke.\n\n🚀 Future-Ready Integration Patterns:\n• Microservices Architecture: Aufbau modularer, skalierbarer Lernumgebungen, die sich flexibel in bestehende Architekturen einfügen.\n• Container-Based Deployments: Verwendung von Container-Technologien für portable und konsistente Lernumgebungen.\n• DevOps Integration: Einbindung von KI-Lernprojekten in bestehende DevOps-Pipelines und -Prozesse.\n• Monitoring und Observability: Integration in bestehende Monitoring-Systeme für ganzheitliche Überwachung von Lern- und Produktionsumgebungen."
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
