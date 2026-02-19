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
    console.log('Updating CRA BSI page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-bsi' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-bsi" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Welche BSI-Enforcement-Mechanismen existieren bei CRA-Verstößen und wie können Unternehmen proaktive Compliance-Strategien entwickeln, um Sanktionen zu vermeiden?',
        answer: "BSI-Enforcement-Mechanismen bei CRA-Verstößen umfassen ein gestuftes System von Maßnahmen, das von kooperativen Ansätzen bis zu formellen Sanktionen reicht und dabei deutsche Verwaltungstraditionen mit EU-weiten Koordinationsanforderungen kombiniert. Proaktive Compliance-Strategien erfordern umfassendes Verständnis dieser Mechanismen und systematische Präventionsmaßnahmen.\n\n⚖️ BSI-Enforcement-Instrumentarium:\n• Gestuftes Sanktionssystem, das von informellen Gesprächen und Beratung über formelle Verwarnungen bis zu Marktverboten und Geldstrafen reicht, wobei Verhältnismäßigkeit und Kooperationsbereitschaft berücksichtigt werden.\n• Marktüberwachungsmaßnahmen einschließlich Produktrückrufen, Verkaufsstopps und öffentlichen Warnungen, die sowohl Verbraucherschutz als auch Marktdisziplin gewährleisten.\n• Administrative Sanktionen wie Zertifikatsentzug, Akkreditierungssuspendierung und Verfahrensausschlüsse, die langfristige Geschäftsauswirkungen haben können.\n• Koordination mit anderen EU-Behörden für grenzüberschreitende Enforcement-Maßnahmen, die einheitliche Standards und effektive Durchsetzung gewährleisten.\n• Integration mit strafrechtlichen Verfolgungsbehörden bei schwerwiegenden Verstößen, die über administrative Maßnahmen hinausgehen.\n\n🛡️ Proaktive Compliance-Strategien:\n• Entwicklung umfassender Compliance-Management-Systeme, die nicht nur aktuelle Anforderungen erfüllen, sondern auch sich entwickelnde Regulierungslandschaften antizipieren und dabei organisatorische Resilienz aufbauen.\n• Implementierung robuster interner Kontroll- und Überwachungssysteme, die potenzielle Compliance-Probleme frühzeitig identifizieren und dabei präventive Maßnahmen ermöglichen.\n• Etablierung proaktiver Kommunikationsstrategien mit BSI, die Transparenz schaffen und dabei kooperative Problemlösung fördern, bevor formelle Enforcement-Maßnahmen erforderlich werden.\n• Aufbau von Compliance-Kultur und -Bewusstsein auf allen Organisationsebenen, die individuelle Verantwortung und kollektive Exzellenz fördern.\n• Kontinuierliche Investition in Compliance-Innovation und -Verbesserung, die nicht nur Risikominimierung, sondern auch Wettbewerbsvorteile durch überlegene Governance schafft.\n\n📊 Risikomanagement und Präventionsmaßnahmen:\n• Systematische Compliance-Risikobewertungen, die potenzielle Schwachstellen identifizieren und dabei Prioritäten für Verbesserungsmaßnahmen setzen.\n• Entwicklung von Contingency-Plänen für verschiedene Compliance-Szenarien, die schnelle und effektive Reaktionen auf potenzielle Probleme ermöglichen.\n• Etablierung regelmäßiger Compliance-Audits und Selbstbewertungen, die kontinuierliche Verbesserung und proaktive Problemidentifikation fördern.\n• Integration von Compliance-Metriken in Geschäfts-KPIs und Management-Dashboards, die strategische Entscheidungsfindung und Ressourcenallokation unterstützen.\n• Aufbau von Branchennetzwerken und Best-Practice-Sharing-Mechanismen, die kollektives Lernen und gemeinsame Problemlösung ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Wie können Unternehmen effektives Stakeholder-Engagement mit dem BSI und anderen deutschen Behörden für CRA-Compliance aufbauen und dabei Synergien nutzen?',
        answer: "Effektives Stakeholder-Engagement mit dem BSI und anderen deutschen Behörden für CRA-Compliance erfordert strategische Herangehensweise, die verschiedene Behördenstrukturen, Zuständigkeiten und Kommunikationskulturen berücksichtigt und dabei Synergien zwischen verschiedenen Regulierungsbereichen nutzt. Erfolgreiche Strategien basieren auf systematischem Relationship-Building, proaktiver Kommunikation und Mehrwert-Schaffung.\n\n🏛️ Deutsche Behördenlandschaft für CRA:\n• BSI als zentrale CRA-Autorität mit spezifischen Zuständigkeiten für Cybersicherheit, Konformitätsbewertung und Marktüberwachung, einschließlich Koordination mit anderen nationalen und EU-Behörden.\n• Bundesnetzagentur für telekommunikationsspezifische Aspekte und Frequenzmanagement, die Überschneidungen mit CRA-Anforderungen für vernetzte Produkte haben können.\n• Bundesamt für Wirtschaft und Ausfuhrkontrolle für handelsbezogene Aspekte und Exportkontrolle, die internationale Compliance-Dimensionen berühren.\n• Landesdatenschutzbehörden für datenschutzrechtliche Überschneidungen mit CRA-Anforderungen, insbesondere bei IoT-Produkten und vernetzten Systemen.\n• Branchenspezifische Regulierungsbehörden für sektorale Anforderungen, die zusätzliche Compliance-Dimensionen schaffen können.\n\n🤝 Strategisches Stakeholder-Management:\n• Entwicklung umfassender Stakeholder-Mapping-Strategien, die nicht nur direkte Regulierungsbehörden, sondern auch indirekte Einflussnehmer und Koordinationsmechanismen berücksichtigen.\n• Aufbau differenzierter Engagement-Ansätze für verschiedene Behörden, die deren spezifische Mandate, Kulturen und Kommunikationspräferenzen berücksichtigen.\n• Etablierung regelmäßiger Kommunikationsrhythmen und strukturierter Interaktionsformate, die über reaktive Compliance-Kommunikation hinausgehen.\n• Integration von Behörden-Engagement in übergeordnete Stakeholder-Strategien, die auch Branchenverbände, Standardisierungsorganisationen und internationale Partner einbeziehen.\n• Entwicklung von Thought Leadership und Expertise-Demonstration durch Beiträge zu Konsultationsprozessen, Arbeitsgruppen und Standardentwicklungsaktivitäten.\n\n🔄 Synergien und Cross-Compliance-Optimierung:\n• Identifikation und Nutzung von Überschneidungen zwischen verschiedenen Regulierungsbereichen, die Effizienzgewinne und Kostenreduzierungen ermöglichen.\n• Entwicklung integrierter Compliance-Strategien, die CRA-Anforderungen mit anderen regulatorischen Verpflichtungen harmonisieren und dabei Doppelarbeit vermeiden.\n• Aufbau von Cross-Compliance-Expertise und -Kompetenzen, die ganzheitliche Regulierungsansätze ermöglichen und dabei Spezialisierung mit Integration verbinden.\n• Etablierung von Koordinationsmechanismen zwischen verschiedenen internen Compliance-Funktionen, die konsistente und effiziente Behördenkommunikation gewährleisten.\n• Nutzung von Brancheninitiativen und kollektiven Engagement-Möglichkeiten, die individuelle Ressourcen verstärken und dabei gemeinsame Interessen fördern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Welche Rolle spielen BSI-Updates und regulatorische Entwicklungen bei der kontinuierlichen CRA-Compliance und wie können Unternehmen adaptive Strategien entwickeln?',
        answer: "BSI-Updates und regulatorische Entwicklungen spielen eine zentrale Rolle bei der kontinuierlichen CRA-Compliance, da sich Cybersicherheitslandschaften, technologische Innovationen und Bedrohungsszenarien kontinuierlich entwickeln und dabei neue Anforderungen und Interpretationen schaffen. Adaptive Strategien erfordern proaktive Monitoring-Systeme, flexible Implementierungsansätze und kontinuierliche Organisationsentwicklung.\n\n📡 BSI-Update-Landschaft:\n• Regelmäßige Leitlinien-Updates und technische Richtlinien-Ergänzungen, die neue Bedrohungen, technologische Entwicklungen und praktische Erfahrungen berücksichtigen.\n• Interpretationshilfen und Klarstellungen zu bestehenden Anforderungen, die Unsicherheiten reduzieren und dabei praktische Umsetzung erleichtern.\n• Branchenspezifische Guidance-Dokumente, die sektorale Besonderheiten berücksichtigen und dabei maßgeschneiderte Compliance-Ansätze entwickeln.\n• Internationale Koordinations-Updates, die EU-weite Harmonisierung und globale Best Practices reflektieren.\n• Enforcement-Praxis-Updates, die Erfahrungen aus Marktüberwachung und Sanktionsverfahren in zukünftige Guidance integrieren.\n\n🔄 Adaptive Compliance-Strategien:\n• Implementierung kontinuierlicher Monitoring-Systeme für regulatorische Entwicklungen, die nicht nur BSI-Updates, sondern auch internationale Trends und Branchenentwicklungen verfolgen.\n• Entwicklung flexibler Compliance-Architekturen, die schnelle Anpassungen an neue Anforderungen ermöglichen ohne grundlegende Systemänderungen zu erfordern.\n• Aufbau von Change-Management-Capabilities, die regulatorische Updates systematisch bewerten, priorisieren und implementieren können.\n• Etablierung von Scenario-Planning-Prozessen, die verschiedene regulatorische Entwicklungsrichtungen antizipieren und dabei Vorbereitungsmaßnahmen ermöglichen.\n• Integration von Regulatory Intelligence in strategische Geschäftsplanung, die regulatorische Trends als Geschäftschancen und Innovationstreiber nutzt.\n\n💡 Proaktive Anpassungsmaßnahmen:\n• Entwicklung von Forward-Looking-Compliance-Strategien, die nicht nur aktuelle Anforderungen erfüllen, sondern auch zukünftige Entwicklungen antizipieren.\n• Aufbau von Regulatory Sandboxing-Capabilities, die neue Ansätze und Technologien in kontrollierten Umgebungen testen können.\n• Etablierung von Continuous Learning-Kulturen, die regulatorische Updates als Lernmöglichkeiten betrachten und dabei organisatorische Anpassungsfähigkeit fördern.\n• Integration von Regulatory Feedback-Loops in Produktentwicklung und Geschäftsstrategie, die regulatorische Erkenntnisse in Innovation und Verbesserung übersetzen.\n• Aufbau von Regulatory Community-Engagement, das nicht nur passive Compliance, sondern auch aktive Mitgestaltung regulatorischer Entwicklungen ermöglicht."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Wie können Unternehmen BSI-konforme Lieferkettenmanagement-Strategien für CRA-Compliance entwickeln und dabei Supply Chain-Risiken effektiv managen?',
        answer: "BSI-konforme Lieferkettenmanagement-Strategien für CRA-Compliance erfordern umfassende Ansätze, die nicht nur direkte Lieferantenbeziehungen, sondern auch mehrstufige Supply Chain-Abhängigkeiten berücksichtigen und dabei deutsche Gründlichkeitsstandards mit internationalen Best Practices kombinieren. Effektives Supply Chain-Risikomanagement basiert auf Transparenz, Kollaboration und kontinuierlicher Überwachung.\n\n🔗 BSI-Supply Chain-Anforderungen:\n• Umfassende Lieferanten-Due-Diligence-Prozesse, die nicht nur finanzielle und operative Aspekte, sondern auch Cybersicherheits-Capabilities und Compliance-Status bewerten.\n• Detaillierte Supply Chain-Mapping und -Dokumentation, die Transparenz über alle Komponenten, Abhängigkeiten und potenzielle Risikoquellen schafft.\n• Implementierung von Supply Chain-Sicherheitsstandards, die BSI-Anforderungen an alle Lieferkettenebenen weitergeben und dabei konsistente Sicherheitsniveaus gewährleisten.\n• Etablierung von Incident-Response-Mechanismen für Supply Chain-Störungen, die schnelle Reaktionen auf Sicherheitsvorfälle oder Compliance-Probleme ermöglichen.\n• Kontinuierliche Überwachung und Bewertung von Lieferanten-Performance hinsichtlich CRA-Compliance und Cybersicherheits-Exzellenz.\n\n🎯 Strategische Lieferantenentwicklung:\n• Aufbau langfristiger Partnerschaften mit strategischen Lieferanten, die gemeinsame Compliance-Ziele und Sicherheitsverbesserungen fördern.\n• Implementierung von Lieferanten-Capability-Building-Programmen, die kleinere Lieferanten bei der CRA-Compliance-Entwicklung unterstützen.\n• Entwicklung von Supply Chain-Diversifikationsstrategien, die Abhängigkeiten reduzieren und dabei Resilienz gegen verschiedene Risikoszenarien aufbauen.\n• Etablierung von Lieferanten-Innovation-Partnerschaften, die gemeinsame Entwicklung von CRA-konformen Lösungen und Technologien fördern.\n• Integration von Sustainability- und ESG-Kriterien in Lieferantenauswahl und -bewertung, die ganzheitliche Wertschöpfung und Risikomanagement ermöglichen.\n\n📊 Supply Chain-Risikomanagement:\n• Implementierung kontinuierlicher Risk-Assessment-Prozesse, die nicht nur statische Bewertungen, sondern auch dynamische Risikoentwicklungen berücksichtigen.\n• Entwicklung von Supply Chain-Contingency-Plänen für verschiedene Störungsszenarien, einschließlich Cybersicherheitsvorfällen und Compliance-Problemen.\n• Aufbau von Supply Chain-Intelligence-Capabilities, die externe Bedrohungen, Marktentwicklungen und regulatorische Änderungen überwachen.\n• Etablierung von Supply Chain-Collaboration-Plattformen, die Informationsaustausch und koordinierte Reaktionen auf Risiken ermöglichen.\n• Integration von Supply Chain-Metriken in Unternehmens-KPIs und Risikomanagement-Dashboards, die strategische Entscheidungsfindung und Ressourcenallokation unterstützen."
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
    console.log('✅ FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
