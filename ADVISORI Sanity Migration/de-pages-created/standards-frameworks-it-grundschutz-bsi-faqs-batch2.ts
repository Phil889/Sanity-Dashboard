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
    console.log('Updating IT-Grundschutz BSI page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-it-grundschutz-bsi' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-it-grundschutz-bsi" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie navigiert ADVISORI die komplexe Landschaft zwischen BSI IT-Grundschutz, ISO 27001 und anderen internationalen Standards für global agierende Unternehmen?",
        answer: "Für international tätige C-Level-Führungskräfte ist die Navigation zwischen verschiedenen Sicherheitsstandards eine strategische Herausforderung. ADVISORI entwickelt harmonisierte Compliance-Strategien, die BSI IT-Grundschutz als solides Fundament nutzen und gleichzeitig internationale Anforderungen effizient integrieren, um globale Geschäftstätigkeiten zu unterstützen.\n\n🌍 Internationale Standards-Harmonisierung:\n• Multi-Standard-Compliance: Intelligente Überlappungsanalyse zwischen IT-Grundschutz, ISO 27001, NIST Framework und branchenspezifischen Standards.\n• Regionale Anpassungen: Berücksichtigung lokaler Anforderungen (GDPR, SOX, PCI-DSS) bei der IT-Grundschutz Implementierung.\n• Globale Governance: Entwicklung einheitlicher Sicherheitsrichtlinien, die alle relevanten internationalen Standards abdecken.\n• Cross-Border-Compliance: Sicherstellung der Rechtskonformität bei grenzüberschreitenden Datenflüssen und Geschäftsprozessen.\n\n🔄 ADVISORI's Unified-Compliance-Approach:\n• Standard-Mapping-Matrix: Detaillierte Zuordnung von IT-Grundschutz Bausteinen zu internationalen Frameworks für optimale Ressourcennutzung.\n• Phased-Global-Rollout: Stufenweise internationale Implementierung beginnend mit dem deutschen IT-Grundschutz Kern.\n• Cultural-Adaptation: Anpassung der Sicherheitskommunikation und -schulungen an lokale Geschäftskulturen und rechtliche Rahmenbedingungen.\n• Continuous-Monitoring: Überwachung sich ändernder internationaler Regulierungen und proaktive Anpassung der Compliance-Strategie.\n\n💼 Strategische Vorteile der integrierten Herangehensweise:\n• Kosteneffizienz: Vermeidung von Doppelarbeit durch intelligente Standards-Integration reduziert Compliance-Kosten um bis zu 40%.\n• Marktflexibilität: Schnellere Expansion in neue Märkte durch bereits etablierte internationale Compliance-Grundlagen.\n• Investor Relations: Demonstrierte Multi-Standard-Compliance stärkt das Vertrauen internationaler Investoren und Stakeholder."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche Rolle spielt BSI IT-Grundschutz bei der Vorbereitung auf kommende EU-Regulierungen wie NIS2 und den Cyber Resilience Act aus strategischer C-Level-Sicht?",
        answer: "Die europäische Regulierungslandschaft entwickelt sich rasant, und proaktive C-Level-Führung erfordert vorausschauende Compliance-Strategien. ADVISORI positioniert BSI IT-Grundschutz als strategische Grundlage für die kommenden EU-Regulierungen und schafft damit einen nachhaltigen Wettbewerbsvorteil für Unternehmen, die regulatory excellence als Differenzierungsmerkmal nutzen wollen.\n\n🇪🇺 Regulatory Landscape und strategische Vorbereitung:\n• NIS2-Readiness: IT-Grundschutz als solide Basis für die erweiterten Cybersicherheitsanforderungen der NIS2-Richtlinie.\n• Cyber Resilience Act (CRA): Proaktive Vorbereitung auf Produktsicherheitsanforderungen für digitale Produkte und IoT-Geräte.\n• Digital Operational Resilience Act (DORA): Finanzspezifische Resilienz-Anforderungen durch IT-Grundschutz-Prinzipien abgedeckt.\n• AI Act Compliance: Sicherheitsframeworks für verantwortungsvolle KI-Entwicklung und -Einsatz.\n\n🎯 ADVISORI's Forward-Looking-Compliance-Strategie:\n• Regulatory-Impact-Assessment: Bewertung der Auswirkungen kommender Regulierungen auf Ihre Geschäftsmodelle und IT-Strategie.\n• Future-Proof-Architecture: Design von IT-Grundschutz Implementierungen, die auch zukünftige regulatorische Anforderungen erfüllen.\n• Early-Adopter-Advantage: Positionierung als Marktführer durch proaktive Compliance, bevor Regulierungen verpflichtend werden.\n• Stakeholder-Communication: Entwicklung überzeugender Narrative für Investoren, Kunden und Partner über Ihre regulatory leadership.\n\n📈 Business-Case für proaktive Regulatory Compliance:\n• Marktpositionierung: First-Mover-Advantage bei EU-Ausschreibungen und regulierten Märkten.\n• Risikominimierung: Vermeidung kostspieliger nachträglicher Compliance-Anpassungen.\n• Competitive Intelligence: Tiefes Verständnis der Regulierungslandschaft als strategischer Vorteil gegenüber reaktiven Wettbewerbern.\n• Investment Protection: Sicherstellung, dass aktuelle IT-Investitionen auch zukünftige Compliance-Anforderungen erfüllen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie integriert ADVISORI moderne Technologien wie KI, Cloud-Computing und IoT in eine BSI IT-Grundschutz konforme Architektur für zukunftsorientierte Unternehmen?",
        answer: "Die Konvergenz zwischen traditionellen Sicherheitsstandards und disruptiven Technologien erfordert eine strategische Neuausrichtung der Cybersecurity-Architektur. ADVISORI entwickelt innovative Ansätze, die BSI IT-Grundschutz als stabiles Fundament nutzen und gleichzeitig die Vorteile moderner Technologien voll ausschöpfen, um Unternehmen für die digitale Zukunft zu rüsten.\n\n🤖 Emerging Technologies und IT-Grundschutz Integration:\n• AI-Security-Framework: Entwicklung spezifischer Sicherheitsbausteine für Machine Learning Modelle, Datentraining und algorithmische Entscheidungsfindung.\n• Cloud-Native-Security: Anpassung von IT-Grundschutz Prinzipien für Multi-Cloud-, Hybrid-Cloud- und Edge-Computing-Umgebungen.\n• IoT-Device-Management: Skalierbare Sicherheitsarchitekturen für Millionen vernetzter Geräte und Industrial IoT Systeme.\n• Quantum-Ready-Cryptography: Vorbereitung auf Post-Quantum-Kryptografie innerhalb des IT-Grundschutz Frameworks.\n\n🔧 ADVISORI's Technology-Integration-Methodology:\n• Risk-Based-Innovation: Systematische Bewertung neuer Technologien hinsichtlich ihrer Sicherheitsimplikationen und Compliance-Auswirkungen.\n• Secure-by-Design: Integration von IT-Grundschutz Prinzipien bereits in die Planungsphase neuer Technologie-Implementierungen.\n• Adaptive-Security-Controls: Entwicklung dynamischer Sicherheitsmaßnahmen, die sich automatisch an neue Technologie-Umgebungen anpassen.\n• Innovation-Sandboxes: Sichere Testumgebungen für die Erprobung neuer Technologien unter IT-Grundschutz Compliance.\n\n🚀 Strategische Technology Leadership:\n• Digital Transformation Enablement: IT-Grundschutz als Katalysator für sichere Innovation statt als Hemmnis.\n• Competitive Technology Advantage: Nutzung überlegener Cybersecurity als Basis für aggressive Technologie-Adoption.\n• Ecosystem Partnerships: Sichere Integration mit Technology-Partnern und Startup-Ökosystemen.\n• Future-State-Architecture: Langfristige Technologie-Roadmaps, die Sicherheit und Innovation in Einklang bringen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie stellt ADVISORI sicher, dass die BSI IT-Grundschutz Implementierung die Mitarbeiterproduktivität steigert und gleichzeitig eine positive Security Culture schafft?",
        answer: "Moderne C-Level-Führung erkennt, dass erfolgreiche Cybersecurity nicht nur technische Exzellenz, sondern auch Cultural Transformation erfordert. ADVISORI entwickelt ganzheitliche Ansätze, die BSI IT-Grundschutz als Rahmen für eine positive Sicherheitskultur nutzen und dabei die Mitarbeiterproduktivität und -zufriedenheit messbar steigern.\n\n👥 Human-Centric Security Design:\n• User-Experience-Optimierung: Design von Sicherheitsprozessen, die Arbeitsabläufe unterstützen statt behindern.\n• Behavioral-Security-Analytics: Intelligente Systeme, die normales Nutzerverhalten erlernen und nur bei Anomalien eingreifen.\n• Adaptive-Authentication: Kontextbasierte Sicherheitsmaßnahmen, die sich an Nutzerverhalten und Risikokontext anpassen.\n• Security-Productivity-KPIs: Messbare Kennzahlen, die den positiven Einfluss von Sicherheitsmaßnahmen auf die Arbeitseffizienz dokumentieren.\n\n🎯 ADVISORI's Culture-First-Security-Approach:\n• Security-Champions-Programm: Entwicklung interner Sicherheitsbotschafter, die IT-Grundschutz Prinzipien in ihre Teams tragen.\n• Gamification-Elemente: Spielerische Ansätze für Sicherheitsschulungen und Compliance-Tracking, die Engagement und Lerneffekte maximieren.\n• Continuous-Learning-Platforms: Moderne Lernumgebungen, die Sicherheitsbewusstsein als ongoing journey statt einmaliges Training positionieren.\n• Feedback-Loop-Integration: Systematische Einbindung von Mitarbeiterfeedback in die kontinuierliche Verbesserung der Sicherheitsprozesse.\n\n📊 Messbare Business Outcomes:\n• Produktivitätssteigerung: Durchschnittlich 15-20% Reduktion sicherheitsbedingter Arbeitsunterbrechungen durch intelligente Security-UX.\n• Employee Satisfaction: Erhöhte Mitarbeiterzufriedenheit durch Transparenz und Verständnis der Sicherheitsmaßnahmen.\n• Reduced Human Error: Bis zu 70% Reduktion sicherheitsrelevanter Fehler durch bessere Schulung und intuitive Prozesse.\n• Innovation Enablement: Mitarbeiter als aktive Teilnehmer der Sicherheitsstrategie statt passive Compliance-Objekte."
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
    console.log('✅ C-Level FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
