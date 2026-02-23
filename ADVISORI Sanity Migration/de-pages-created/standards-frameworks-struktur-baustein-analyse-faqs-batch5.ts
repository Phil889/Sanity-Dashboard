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
    console.log('Updating Standards Frameworks Struktur Baustein Analyse page with C-Level FAQs batch 5 (German)...')
    
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
        _key: generateKey('faq', 17),
        question: "Wie entwickelt ADVISORI eine optimale Balance zwischen Sicherheit und Business Agility bei der Strukturanalyse für innovative Technologieunternehmen?",
        answer: "Innovative Technologieunternehmen stehen vor dem Dilemma, robust Sicherheitsstandards zu implementieren ohne Innovation und Geschwindigkeitsvorteile zu beeinträchtigen. ADVISORI entwickelt adaptive Frameworks, die höchste Sicherheitsstandards mit maximaler Business Agility vereinen und Wettbewerbsvorteile durch Security-by-Design schaffen.\n\n⚡ Spannungsfeld Innovation vs. Sicherheit:\n• Time-to-Market Pressure: Schnelle Produktentwicklung und Markteinführung kollidieren oft mit ausführlichen Sicherheitsanalysen und -implementierungen.\n• Experimenteller Technologie-Einsatz: Neue Technologien (KI, Blockchain, Quantum) haben noch keine etablierten IT-Grundschutz Patterns und Baustein-Zuordnungen.\n• Agile Development Cycles: Kontinuierliche Integration und Deployment erfordern integrierte, automatisierte Sicherheitsprozesse statt nachgelagerter Compliance-Prüfungen.\n• Competitive Differentiation: Sicherheitsmaßnahmen müssen strategische Wettbewerbsvorteile schaffen statt nur regulatorische Mindestanforderungen zu erfüllen.\n\n🚀 ADVISORI's Innovation-Enable Security Framework:\n• Security-as-Code Integration: Automatisierte Einbettung von IT-Grundschutz Prinzipien in DevOps-Pipelines zur kontinuierlichen Compliance ohne Entwicklungsverzögerungen.\n• Risk-Velocity Optimization: Dynamische Anpassung von Sicherheitsmaßnahmen an Projektrisiko und Geschäftsimpact zur optimalen Resource-Allokation.\n• Innovation Security Labs: Etablierung von sicheren Experimentier-Umgebungen für neue Technologien mit gradueller Sicherheits-Skalierung bei Produktionsübergang.\n• Competitive Security Advantage: Transformation von Sicherheit von Kostenfaktor zu Differenzierungsmerkmal durch überlegene Security Capabilities als Verkaufsargument."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Welche strategischen Vorteile bietet ADVISORI's Strukturanalyse bei der Vorbereitung auf und Durchführung von Cybersecurity-Audits und Zertifizierungen?",
        answer: "Externe Audits und Zertifizierungen sind kritische Meilensteine für Unternehmen, die Vertrauen bei Kunden, Partnern und Regulatoren aufbauen wollen. ADVISORI nutzt strukturierte Analysemethoden, um Audit-Vorbereitungen zu optimieren, Zertifizierungserfolg zu maximieren und dabei internen Aufwand zu minimieren.\n\n🔍 Audit- und Zertifizierungsherausforderungen:\n• Documentation Gaps: Unvollständige oder inkonsistente Dokumentation führt zu Audit-Findings und verzögerten Zertifizierungen.\n• Evidence Management: Schwierigkeiten bei der strukturierten Sammlung und Präsentation von Compliance-Nachweisen für verschiedene Standards.\n• Multi-Standard Coordination: Gleichzeitige Vorbereitung auf verschiedene Zertifizierungen (ISO 27001, BSI IT-Grundschutz, SOC 2) ohne Redundanzen.\n• Auditor Communication: Effektive Kommunikation komplexer technischer Sachverhalte an externe Prüfer mit unterschiedlichen Expertiselevels.\n\n🏆 ADVISORI's Audit Excellence Strategy:\n• Audit-Ready Documentation Framework: Entwicklung von standardisierten Dokumentationsstrukturen, die automatisch audit-konforme Nachweise generieren und aktuell halten.\n• Evidence Management Systems: Implementierung von Systems zur automatisierten Sammlung, Kategorisierung und Bereitstellung von Compliance-Evidenzen für verschiedene Audit-Anforderungen.\n• Multi-Certification Optimization: Strategische Planung von Zertifizierungsroadmaps zur maximalen Synergiennutzung zwischen verschiedenen Standards und Frameworks.\n• Auditor Relationship Management: Aufbau professioneller Beziehungen zu Audit-Firmen und Zertifizierungsstellen zur Optimierung von Prüfungsabläufen und -ergebnissen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie integriert ADVISORI ESG-Kriterien (Environmental, Social, Governance) in die IT-Grundschutz Strukturanalyse für nachhaltigkeitsorientierte Unternehmen?",
        answer: "Nachhaltigkeit und ESG-Compliance sind zunehmend kritische Faktoren für Unternehmensbewertung und Investitionsentscheidungen. ADVISORI entwickelt innovative Ansätze zur Integration von Environmental, Social und Governance-Kriterien in IT-Grundschutz Strukturanalysen, um Cybersecurity als Treiber für ESG-Excellence zu positionieren.\n\n🌱 ESG-Cybersecurity Convergenz:\n• Environmental Impact: IT-Sicherheitsmaßnahmen beeinflussen Energieverbrauch, Hardware-Lifecycle und Carbon Footprint der IT-Infrastruktur.\n• Social Responsibility: Datenschutz, digitale Ethik und Cyber-Resilience sind fundamentale Aspekte sozialer Unternehmensverantwortung.\n• Governance Excellence: Robust IT-Governance und Risikomanagement sind zentrale Komponenten moderner Corporate Governance.\n• Stakeholder Trust: Demonstrierte Cybersecurity-Excellence stärkt Vertrauen von Investoren, Kunden und Gesellschaft in die Unternehmensführung.\n\n♻️ ADVISORI's ESG-Integrated Security Framework:\n• Green IT Security: Optimierung von Sicherheitsmaßnahmen für minimalen Umwelt-Impact durch effiziente Algorithmen, optimierte Hardware-Nutzung und nachhaltige Technologie-Choices.\n• Digital Ethics Integration: Einbindung ethischer Überlegungen in Sicherheitsdesign, besonders bei KI-gestützten Sicherheitslösungen und Datenschutz-Technologien.\n• Sustainable Security Architecture: Langfristige Planung von Sicherheitsinfrastrukturen mit Fokus auf Kreislaufwirtschaft, Ressourceneffizienz und verantwortliche Beschaffung.\n• ESG Reporting Integration: Entwicklung von Kennzahlen und Berichten, die Cybersecurity-Maßnahmen in ESG-Kontext setzen und deren Beitrag zu Nachhaltigkeitszielen demonstrieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Welche langfristigen strategischen Partnerschaften und Wissenstransfer-Programme bietet ADVISORI zur nachhaltigen Befähigung interner Teams bei der Strukturanalyse?",
        answer: "Nachhaltiger Sicherheitserfolg erfordert nicht nur einmalige Beratung, sondern kontinuierliche Befähigung und Weiterentwicklung interner Expertise. ADVISORI entwickelt umfassende Knowledge Transfer-Programme und strategische Partnerschaften, die Unternehmen langfristig befähigen, IT-Grundschutz Strukturanalysen eigenständig durchzuführen und weiterzuentwickeln.\n\n📚 Nachhaltige Kompetenzentwicklung:\n• Skills Gap Bridging: Systematische Identifikation und Schließung von Wissenslücken in internen IT-Security und Compliance-Teams.\n• Institutional Knowledge Building: Aufbau von dokumentiertem, strukturiertem Wissen, das unabhängig von einzelnen Mitarbeitern verfügbar bleibt.\n• Continuous Learning Culture: Etablierung einer Lernkultur, die mit der rasanten Entwicklung der Cybersecurity-Landschaft Schritt hält.\n• Community of Practice: Vernetzung mit anderen Unternehmen und Experten zum gemeinsamen Wissensaustausch und Best Practice Sharing.\n\n🤝 ADVISORI's Strategic Partnership Approach:\n• Mentorship Programs: Langfristige Mentoring-Beziehungen zwischen ADVISORI-Experten und internen Teams zur kontinuierlichen Kompetenzentwicklung.\n• Center of Excellence Establishment: Aufbau interner Security-Kompetenzzentren mit ADVISORI-Unterstützung für nachhaltige Eigenständigkeit.\n• Train-the-Trainer Programs: Ausbildung interner Multiplikatoren, die Wissen an weitere Kollegen weitergeben und organisationale Lernfähigkeit multiplizieren.\n• Innovation Partnerships: Gemeinsame Entwicklung neuer Methoden und Tools für IT-Grundschutz Strukturanalysen in sich verändernden Technologie-Landschaften."
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
    console.log('✅ C-Level FAQs batch 5 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
