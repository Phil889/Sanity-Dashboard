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
    console.log('Updating NIS2 Important Entities page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-important-entities' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-important-entities" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Welche spezifischen Sektoranforderungen müssen Important Entities in verschiedenen kritischen Infrastrukturbereichen beachten und wie adressiert ADVISORI diese branchenspezifischen Herausforderungen?",
        answer: "ADVISORI versteht, dass Important Entities je nach Sektor mit unterschiedlichen Risikoprofilen, regulatorischen Nuancen und operativen Herausforderungen konfrontiert sind. Unsere sektorspezifische Expertise ermöglicht es, maßgeschneiderte NIS2-Compliance-Strategien zu entwickeln, die den einzigartigen Anforderungen verschiedener kritischer Infrastrukturbereiche gerecht werden und dabei operative Exzellenz fördern.\n\n🏭 Sektorspezifische NIS2-Compliance-Herausforderungen:\n• Digitale Infrastruktur: Fokus auf Cloud-Service-Provider und digitale Dienste mit Anforderungen an Hochverfügbarkeit, Datenintegrität und grenzüberschreitende Compliance, sowie spezielle Herausforderungen bei der Sicherung verteilter Systeme.\n• Abfallwirtschaft: Integration von Cybersicherheit in OT-Umgebungen (Operational Technology), Schutz kritischer Infrastrukturen gegen physische und digitale Bedrohungen, sowie Compliance mit Umweltauflagen und Betriebssicherheit.\n• Chemische Industrie: Besondere Anforderungen an Prozesssicherheit und Safety-Security-Integration, Schutz vor Cyber-Physical-Angriffen und Compliance mit SEVESO-Richtlinien und Industrieanlagensicherheit.\n• Lebensmittelproduktion: Sicherung von Supply-Chain-Integrität, Traceability-Anforderungen und Integration mit bestehenden HACCP- und Qualitätsmanagementsystemen.\n\n🎯 ADVISORI's sektorspezifische Expertise:\n• Branchenkundige Beratung: Tiefes Verständnis sektorspezifischer Risiken, regulatorischer Anforderungen und operativer Besonderheiten, um realistische und effektive Cybersicherheitslösungen zu entwickeln.\n• Cross-Compliance Integration: Verknüpfung von NIS2-Anforderungen mit bestehenden branchenspezifischen Regulierungen (wie GDPR, Umweltauflagen, Industrieanlagensicherheit) zur Schaffung integrierter Compliance-Strategien.\n• Industry Best Practices: Zugang zu bewährten Praktiken und Lessons Learned aus verschiedenen Sektoren, um innovative Lösungsansätze zu entwickeln, die sowohl Sicherheit als auch operative Effizienz maximieren.\n• Specialized Risk Assessment: Entwicklung sektorspezifischer Risikobewertungsframeworks, die sowohl Cyber- als auch physische Sicherheitsrisiken berücksichtigen und branchenspezifische Kritikalitätsfaktoren integrieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Wie unterstützt ADVISORI Important Entities dabei, ihre Mitarbeiter als erste Verteidigungslinie zu stärken und eine cybersecurity-bewusste Unternehmenskultur aufzubauen, ohne die Produktivität zu beeinträchtigen?",
        answer: "ADVISORI erkennt, dass Menschen sowohl das größte Cybersicherheitsrisiko als auch das wertvollste Asset für Cybersicherheit darstellen. Wir entwickeln für Important Entities umfassende Human-Centric Security-Programme, die Mitarbeiter zu kompetenten Cybersicherheits-Botschaftern ausbilden und dabei eine positive, produktivitätsfördernde Sicherheitskultur schaffen.\n\n👥 Strategische Mitarbeiterentwicklung für Cybersicherheit:\n• Role-Based Security Training: Entwicklung maßgeschneiderter Schulungsprogramme, die spezifisch auf die Aufgaben und Risikoprofile verschiedener Mitarbeitergruppen zugeschnitten sind, anstatt generische one-size-fits-all-Ansätze.\n• Gamified Learning Experiences: Implementierung interaktiver, spielerischer Lernformate, die Cybersicherheits-Awareness auf eine Weise vermitteln, die Engagement fördert und langfristige Verhaltensänderungen bewirkt.\n• Positive Security Culture Building: Aufbau einer Kultur, die Cybersicherheit als shared responsibility und competitive advantage positioniert, anstatt als Hindernis oder Strafe.\n• Continuous Micro-Learning: Etablierung kurzer, regelmäßiger Lerneinheiten, die in den Arbeitsalltag integriert werden können, ohne Produktivitätsunterbrechungen zu verursachen.\n\n🛡️ Produktivitätserhaltende Sicherheitsmaßnahmen:\n• User-Friendly Security Tools: Auswahl und Konfiguration von Cybersicherheitstools, die Benutzerfreundlichkeit priorisieren und Arbeitsabläufe unterstützen anstatt zu behindern.\n• Behavior-Based Security Analytics: Implementierung von Systemen, die normales Benutzerverhalten lernen und nur bei auffälligen Abweichungen intervenieren, wodurch false positives minimiert werden.\n• Security Champions Program: Ausbildung interner Cybersicherheits-Champions in verschiedenen Abteilungen, die als Ansprechpartner und Multiplikatoren fungieren und dabei helfen, Sicherheitsbewusstsein organisch zu verbreiten.\n• Feedback-Driven Improvement: Etablierung von Feedback-Mechanismen, die es Mitarbeitern ermöglichen, Sicherheitsprozesse mitzugestalten und dabei sowohl Sicherheit als auch Benutzerfreundlichkeit kontinuierlich zu verbessern.\n• Recognition and Incentive Programs: Entwicklung von Anerkennungs- und Belohnungssystemen, die positive Cybersicherheitsverhalten fördern und dabei eine Kultur der shared responsibility und continuous improvement schaffen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Welche konkreten Technologie-Partnerschaften und Vendor-Management-Strategien empfiehlt ADVISORI für Important Entities, um Cybersicherheits-Expertise ohne interne Spezialistenteams aufzubauen?",
        answer: "ADVISORI unterstützt Important Entities dabei, strategische Technologie-Ökosysteme aufzubauen, die Enterprise-Grade-Cybersicherheit ohne die Komplexität und Kosten interner Spezialistenteams ermöglichen. Unser Ansatz fokussiert auf die intelligente Kombination von Managed Services, Cloud-nativen Lösungen und strategischen Partnerschaften zur Schaffung robuster, skalierbarer Cybersicherheits-Capabilities.\n\n🤝 Strategisches Vendor-Ecosystem für maximale Effizienz:\n• Managed Security Service Providers (MSSPs): Auswahl und Management spezialisierter Security-Partner, die 24/7-Überwachung, Incident Response und Threat Intelligence liefern, ohne dass interne SOC-Teams erforderlich sind.\n• Cloud-Native Security Platforms: Nutzung integrierter Cloud-Sicherheitsdienste von führenden Anbietern (AWS, Azure, Google Cloud), die Enterprise-Sicherheit als Service anbieten und automatisch mit neuen Bedrohungen Schritt halten.\n• Cybersecurity-as-a-Service Models: Implementierung umfassender Security-as-a-Service-Lösungen, die komplette Cybersicherheits-Stacks als verwaltete Dienste bereitstellen.\n• Strategic Technology Alliances: Aufbau langfristiger Partnerschaften mit Cybersicherheitsanbietern, die nicht nur Technologie, sondern auch Beratung, Training und strategische Roadmap-Entwicklung bieten.\n\n⚡ Optimierte Vendor-Management für nachhaltigen Erfolg:\n• Multi-Vendor Integration Strategy: Entwicklung kohärenter Sicherheitsarchitekturen, die verschiedene Vendor-Lösungen nahtlos integrieren und dabei Vendor-Lock-in vermeiden.\n• Performance-Based Partnerships: Strukturierung von Vendor-Beziehungen mit klaren SLAs, KPIs und Outcome-basierten Vergütungsmodellen, die Vendor-Interessen mit Unternehmenserfolg verknüpfen.\n• Continuous Vendor Assessment: Etablierung regelmäßiger Bewertungsprozesse für Technologie-Partner, um sicherzustellen, dass Services mit sich entwickelnden Bedrohungslandschaften und Geschäftsanforderungen Schritt halten.\n• Knowledge Transfer Programs: Aufbau von Programmen, die es ermöglichen, kritisches Cybersicherheitswissen von Vendor-Partnern an interne Teams zu transferieren, ohne komplette Spezialistenteams aufbauen zu müssen.\n• Hybrid Capability Development: Entwicklung einer optimalen Balance zwischen internen Capabilities und externen Services, die Flexibilität, Kostenkontrolle und strategische Autonomie gewährleistet."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie gestaltet ADVISORI für Important Entities die Balance zwischen Cybersicherheits-Investitionen und anderen digitalen Transformation-Prioritäten, um maximalen Gesamtnutzen für das Unternehmen zu erzielen?",
        answer: "ADVISORI versteht, dass Important Entities mit begrenzten Ressourcen multiple digitale Transformation-Prioritäten jonglieren müssen. Wir entwickeln integrierte Strategien, die Cybersicherheitsinvestitionen synergetisch mit anderen IT-Modernisierungszielen verknüpfen, um maximalen Gesamtnutzen zu erzielen und dabei sowohl Sicherheit als auch Innovation zu fördern.\n\n⚖️ Strategische Investment-Integration für maximale Synergien:\n• Unified Digital Strategy: Entwicklung einer kohärenten digitalen Strategie, die Cybersicherheit, Cloud-Migration, Digitalisierung und Prozessoptimierung als integrierte Komponenten behandelt, anstatt als separate Initiativen.\n• Security-by-Design Integration: Einbettung von Cybersicherheitsüberlegungen in alle Digitalisierungsprojekte von Anfang an, wodurch Retroaktive Sicherheitsmaßnahmen vermieden und Gesamtkosten reduziert werden.\n• Multi-Purpose Technology Investments: Priorisierung von Technologieinvestitionen, die gleichzeitig Cybersicherheit, operative Effizienz und Business-Innovation unterstützen (z.B. Zero Trust-Architekturen, die sowohl Sicherheit als auch remote-work-Flexibilität ermöglichen).\n• Progressive Investment Roadmap: Strukturierung von Investitionen in logischen Phasen, die aufeinander aufbauen und dabei kontinuierlich sowohl Sicherheit als auch geschäftlichen Nutzen steigern.\n\n🎯 Optimierte Resource-Allokation für nachhaltigen Erfolg:\n• Business-Value-First Prioritization: Bewertung aller digitalen Initiativen basierend auf ihrer kombinierten Wirkung auf Risikominimierung, Umsatzgenerierung und operative Effizienz, um rationale Investitionsentscheidungen zu treffen.\n• Shared Infrastructure Strategies: Entwicklung gemeinsamer IT-Infrastrukturen, die sowohl Cybersicherheits- als auch andere digitale Transformation-Ziele unterstützen (z.B. Cloud-Plattformen, die Security, Skalierbarkeit und Innovation ermöglichen).\n• Phased Capability Building: Aufbau digitaler Capabilities in strategischen Phasen, die es ermöglichen, frühe Erfolge zu demonstrieren und dabei Momentum für weitere Investitionen zu schaffen.\n• ROI-Maximierung durch Integration: Identifikation und Nutzung von Synergien zwischen verschiedenen digitalen Initiativen, um Gesamtinvestitionsrendite zu maximieren und dabei sowohl kurzfristige als auch langfristige Geschäftsziele zu unterstützen.\n• Adaptive Investment Framework: Etablierung flexibler Investitionsrahmen, die es ermöglichen, Prioritäten basierend auf sich ändernden Marktbedingungen, Bedrohungslandschaften und Geschäftszielen anzupassen."
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
