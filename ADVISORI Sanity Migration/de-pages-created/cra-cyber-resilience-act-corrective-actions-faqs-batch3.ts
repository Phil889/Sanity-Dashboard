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
    console.log('Updating CRA Corrective Actions page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-cyber-resilience-act-corrective-actions' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-cyber-resilience-act-corrective-actions" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie adressiert ADVISORI die spezifischen Herausforderungen bei CRA-Korrekturmaßnahmen für komplexe IT-Ökosysteme und Multi-Cloud-Umgebungen?",
        answer: "Moderne Unternehmen operieren in komplexen, verteilten IT-Landschaften mit Multi-Cloud-Architekturen, Legacy-Systemen und diversen Technologie-Stacks. CRA-Korrekturmaßnahmen in solchen Umgebungen erfordern spezialisierte Expertise und orchestrierte Ansätze. ADVISORI verfügt über bewährte Methodiken für die Remediation in komplexen IT-Ökosystemen.\n\n🌐 Herausforderungen komplexer IT-Landschaften:\n• Interdependenzen und Kaskadeffekte: Korrekturmaßnahmen in einem System können unvorhergesehene Auswirkungen auf verbundene Systeme haben.\n• Verschiedene Compliance-Levels: Unterschiedliche Systeme und Cloud-Provider haben verschiedene Sicherheits- und Compliance-Standards.\n• Koordinationsaufwand: Abstimmung zwischen verschiedenen Technologie-Teams, Providern und Stakeholdern.\n• Risiko fragmentierter Lösungen: Gefahr von inkonsistenten oder inkompatiblen Sicherheitsmaßnahmen zwischen verschiedenen Systemkomponenten.\n\n🔧 ADVISORI's Orchestrierungsansatz:\n• Enterprise Architecture Assessment: Umfassende Analyse Ihrer gesamten IT-Landschaft zur Identifikation von Abhängigkeiten und kritischen Pfaden.\n• Unified Remediation Strategy: Entwicklung kohärenter Korrekturmaßnahmen, die alle Systemkomponenten berücksichtigen und optimale Integration sicherstellen.\n• Multi-Vendor Coordination: Professionelle Koordination mit verschiedenen Cloud-Providern, Software-Herstellern und Service-Partnern.\n• Risk-based Prioritization: Intelligente Priorisierung von Korrekturmaßnahmen basierend auf Systemkritikalität, Risiko-Exposure und Geschäftsauswirkungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche Rolle spielt ADVISORI bei der Schulung und Befähigung unserer internen Teams für nachhaltige CRA-Compliance nach Abschluss der Korrekturmaßnahmen?",
        answer: "Nachhaltige CRA-Compliance erfordert nicht nur technische Korrekturen, sondern auch den Aufbau interner Kapazitäten und Kompetenzen. ADVISORI entwickelt umfassende Schulungs- und Befähigungsprogramme, die Ihre Teams in die Lage versetzen, langfristig eigenständig CRA-konforme Prozesse zu führen und weiterzuentwickeln.\n\n🎓 Comprehensive Capability Building:\n• Role-specific Training Programs: Maßgeschneiderte Schulungsprogramme für verschiedene Rollen - von technischen Teams bis zur Geschäftsleitung.\n• Hands-on Workshops: Praktische Übungen und Simulationen zur Anwendung von CRA-Compliance-Prozessen in realen Szenarien.\n• Certification Pathways: Unterstützung bei der Erlangung relevanter Industrie-Zertifizierungen und Qualifikationen.\n• Mentoring und Coaching: Langfristige Begleitung durch erfahrene ADVISORI-Experten während der Übergangsphase.\n\n📚 ADVISORI's Wissenstransfer-Excellence:\n• Living Documentation: Erstellung umfassender, kontinuierlich aktualisierter Dokumentationen, Prozessbeschreibungen und Best-Practice-Guides.\n• Internal Champion Programs: Identifikation und Ausbildung interner Compliance-Champions, die als Multiplikatoren und erste Ansprechpartner fungieren.\n• Continuous Learning Frameworks: Etablierung von Lernstrukturen für kontinuierliche Weiterbildung bei regulatorischen Änderungen und technologischen Entwicklungen.\n• Knowledge Management Systems: Implementierung von Systemen zur Erfassung, Strukturierung und Weitergabe von Compliance-Wissen innerhalb Ihrer Organisation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie gewährleistet ADVISORI die Skalierbarkeit und Adaptierbarkeit von CRA-Korrekturmaßnahmen für wachsende Unternehmen und sich ändernde Geschäftsmodelle?",
        answer: "Wachsende Unternehmen und evolvierende Geschäftsmodelle stellen besondere Anforderungen an CRA-Compliance-Systeme. Lösungen müssen nicht nur aktuellen Bedürfnissen gerecht werden, sondern auch zukunftsfähig und anpassungsfähig sein. ADVISORI entwickelt skalierbare und adaptive Compliance-Architekturen für dynamische Geschäftsumgebungen.\n\n📈 Skalierbare Compliance-Architekturen:\n• Modular Design Principles: Entwicklung von Compliance-Komponenten, die unabhängig skaliert und erweitert werden können, ohne das Gesamtsystem zu beeinträchtigen.\n• Cloud-native Scalability: Nutzung von Cloud-Technologien für automatische Skalierung von Sicherheits- und Compliance-Systemen basierend auf Geschäftswachstum.\n• API-driven Architecture: Implementation von API-basierten Lösungen für flexible Integration neuer Services, Geschäftsbereiche oder Technologien.\n• Performance Monitoring: Kontinuierliche Überwachung von System-Performance und proaktive Kapazitätsplanung für zukünftiges Wachstum.\n\n🔄 Adaptive Business Model Support:\n• Business Model Assessment: Regelmäßige Bewertung sich ändernder Geschäftsmodelle und ihrer Auswirkungen auf CRA-Compliance-Anforderungen.\n• Agile Compliance Frameworks: Implementierung flexibler Compliance-Prozesse, die sich schnell an neue Geschäftsanforderungen anpassen lassen.\n• Scenario-based Planning: Vorbereitung auf verschiedene Wachstums- und Transformationsszenarien mit entsprechenden Compliance-Strategien.\n• Innovation-Ready Infrastructure: Aufbau von Compliance-Infrastrukturen, die neue Technologien und Geschäftsinnovationen unterstützen, ohne Sicherheit zu kompromittieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Welche internationalen Best Practices und Standards integriert ADVISORI in CRA-Korrekturmaßnahmen zur Sicherstellung globaler Compliance-Exzellenz?",
        answer: "CRA-Compliance ist Teil eines größeren globalen Compliance-Ökosystems. Unternehmen mit internationaler Präsenz müssen sicherstellen, dass ihre Korrekturmaßnahmen nicht nur EU-CRA-Anforderungen erfüllen, sondern auch mit anderen internationalen Standards und Regulierungen harmonieren. ADVISORI bringt umfassende globale Expertise ein.\n\n🌍 Internationale Compliance-Harmonisierung:\n• Multi-jurisdictional Alignment: Koordination von CRA-Korrekturmaßnahmen mit anderen internationalen Cybersecurity-Regulierungen wie NIST Cybersecurity Framework, ISO 27001, oder SOC 2.\n• Cross-border Data Protection: Integration von GDPR-, CCPA- und anderen Datenschutzanforderungen in CRA-Compliance-Strategien.\n• Industry-specific Standards: Berücksichtigung branchenspezifischer Anforderungen wie PCI DSS für Finanzdienstleister oder HIPAA für Gesundheitswesen.\n• International Certification Readiness: Vorbereitung auf internationale Zertifizierungen und Audit-Standards für globale Marktakzeptanz.\n\n🏆 ADVISORI's Global Excellence Framework:\n• International Expert Network: Zugang zu einem globalen Netzwerk von Compliance-Experten mit lokaler Expertise in verschiedenen Rechtsräumen.\n• Best Practice Repository: Kontinuierliche Sammlung und Anwendung bewährter Praktiken aus verschiedenen Märkten und Industrien.\n• Regulatory Intelligence Platform: Globales Monitoring von regulatorischen Entwicklungen und deren Auswirkungen auf Ihre Compliance-Strategie.\n• Cultural Adaptation: Berücksichtigung kultureller und regionaler Besonderheiten bei der Implementierung von Compliance-Maßnahmen in verschiedenen Märkten."
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
