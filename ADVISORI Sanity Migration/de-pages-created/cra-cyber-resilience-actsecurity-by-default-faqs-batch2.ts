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
    console.log('Updating CRA Cyber Resilience Act Security by Default page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-cyber-resilience-actsecurity-by-default' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-cyber-resilience-actsecurity-by-default" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Welche spezifischen Governance-Strukturen und Accountability-Mechanismen implementiert ADVISORI, um sicherzustellen, dass Security by Default Prinzipien auf C-Level nachhaltig verankert und überwacht werden?",
        answer: "Die nachhaltige Verankerung von Security by Default Prinzipien auf C-Level erfordert robuste Governance-Strukturen, die über traditionelle IT-Sicherheitskomitees hinausgehen. ADVISORI entwickelt integrierte Governance-Frameworks, die Security by Default als strategische Unternehmensfunktion etablieren und messbare Accountability auf höchster Führungsebene schaffen.\n\n📊 Executive Security Governance Framework:\n• Chief Security Officer (CSO) Integration: Etablierung einer direkten Berichtslinie vom CSO zur C-Suite mit spezifischen KPIs für Security by Default Implementierung und Wirksamkeit.\n• Security by Default Board Committee: Aufbau eines dedizierten Ausschusses mit C-Level Beteiligung, der vierteljährlich Security by Default Performance, Risiken und Investitionen reviewt.\n• Executive Security Scorecards: Entwicklung von C-Level-tauglichen Dashboards, die Security by Default Metriken mit Geschäftskennzahlen korrelieren und Transparenz über Sicherheitsinvestitionen schaffen.\n• Risk Appetite Frameworks: Integration von Security by Default Überlegungen in die strategische Risikoappetit-Definition und -überwachung des Unternehmens.\n\n🎯 Accountability und Performance Management:\n• Security by Default OKRs (Objectives and Key Results): Integration von sicherheitsbezogenen Zielen in C-Level Performance-Bewertungen und Incentive-Strukturen.\n• Third-Party Security Governance: Etablierung von Vendor-Management-Prozessen, die Security by Default Prinzipien in der gesamten Lieferkette durchsetzen.\n• Regulatory Compliance Monitoring: Aufbau kontinuierlicher CRA-Compliance-Überwachung mit automatisierten Alerts bei Abweichungen von Security by Default Standards.\n• Executive Security Education: Implementierung fortlaufender Security-Awareness-Programme für C-Level, die sowohl technische als auch strategische Security by Default Aspekte abdecken."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Wie adressiert ADVISORI die komplexen Herausforderungen von Security by Default in global verteilten Organisationen mit unterschiedlichen regulatorischen Anforderungen und kulturellen Kontexten?",
        answer: "Global verteilte Organisationen stehen vor der Herausforderung, einheitliche Security by Default Standards zu implementieren, während sie gleichzeitig lokale regulatorische Anforderungen, kulturelle Nuancen und operative Realitäten berücksichtigen müssen. ADVISORI entwickelt adaptive Security by Default Frameworks, die globale Konsistenz mit lokaler Flexibilität verbinden.\n\n🌍 Multi-Jurisdictional Security Orchestration:\n• Regulatory Mapping und Harmonisierung: Analyse und Mappung von CRA-Anforderungen gegen lokale Cybersicherheitsregulierungen (GDPR, CCPA, China's Cybersecurity Law) zur Identifikation von Synergien und Konfliktbereichen.\n• Federated Security Architecture: Entwicklung von Security by Default Architekturen, die zentrale Kontrolle mit dezentraler Ausführung verbinden und lokale Compliance-Anforderungen erfüllen.\n• Cultural Security Adaptation: Anpassung von Security by Default Kommunikations- und Trainingsstrategien an lokale kulturelle Kontexte und Geschäftspraktiken.\n• Cross-Border Data Governance: Implementation von Security by Default Prinzipien in grenzüberschreitenden Datenflüssen unter Berücksichtigung von Datenlokalisierungsanforderungen.\n\n🔄 Adaptive Implementation Strategies:\n• Phased Global Rollout: Entwicklung gestaffelter Implementierungsstrategien, die Pilotregionen nutzen, um Security by Default Ansätze zu validieren und zu optimieren.\n• Local Security Champions Network: Etablierung regionaler Security by Default Experten, die als kulturelle und technische Brücken zwischen globalen Standards und lokaler Umsetzung fungieren.\n• Continuous Regulatory Intelligence: Aufbau von Monitoring-Systemen, die regulatorische Änderungen in verschiedenen Jurisdiktionen verfolgen und deren Auswirkungen auf Security by Default Strategien bewerten.\n• Multi-Language Security Documentation: Entwicklung kultursensitiver Security by Default Dokumentation und Trainingsmaterialien in lokalen Sprachen und Kontexten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "In einer Zeit von Supply Chain Attacks und Third-Party Risiken – wie erweitert ADVISORI Security by Default Prinzipien auf das gesamte Vendor-Ecosystem und welche Due Diligence Frameworks werden implementiert?",
        answer: "Supply Chain Security ist zu einem kritischen Vektor für Cyberangriffe geworden, und traditionelle Vendor-Management-Ansätze sind unzureichend für die Komplexität moderner digitaler Lieferketten. ADVISORI entwickelt erweiterte Security by Default Frameworks, die über Ihre Organisationsgrenzen hinausgehen und Sicherheit als integralen Bestandteil des gesamten Vendor-Ecosystems etablieren.\n\n🔗 Extended Security by Default Ecosystem:\n• Vendor Security Maturity Assessment: Entwicklung strukturierter Bewertungsframeworks, die Security by Default Capabilities bei Lieferanten quantifizieren und benchmarken.\n• Contractual Security by Default Requirements: Integration verbindlicher Security by Default Klauseln in Vendor-Verträge mit messbaren SLAs und Penalty-Mechanismen.\n• Continuous Vendor Security Monitoring: Implementierung automatisierter Systeme zur kontinuierlichen Überwachung der Security-Posture von Third-Party-Lieferanten.\n• Security-First Procurement Processes: Umgestaltung von Beschaffungsprozessen zur Priorisierung von Security by Default Capabilities als Auswahlkriterium.\n\n🛡️ Advanced Due Diligence und Risk Management:\n• Digital Supply Chain Mapping: Vollständige Visualisierung und Analyse der digitalen Lieferkette zur Identifikation von Security by Default Gaps und Abhängigkeiten.\n• Fourth-Party Risk Management: Erweiterung der Security by Default Überwachung auf Sub-Lieferanten und indirekte Vendor-Beziehungen.\n• Security by Default Incident Response Coordination: Entwicklung koordinierter Incident-Response-Pläne, die Security by Default Prinzipien in Multi-Vendor-Umgebungen durchsetzen.\n• Vendor Security by Default Certification Programs: Aufbau von Zertifizierungsprogrammen, die Lieferanten bei der Implementierung und Nachweis von Security by Default Standards unterstützen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie transformiert ADVISORI Security by Default von einer Compliance-Anforderung zu einem strategischen Innovation-Enabler, der neue Geschäftsmodelle und Marktchancen erschließt?",
        answer: "Die wahre strategische Macht von Security by Default liegt nicht in der Compliance-Erfüllung, sondern in der Fähigkeit, Sicherheit als Geschäftsenablement zu nutzen, das innovative Geschäftsmodelle ermöglicht und neue Marktchancen erschließt. ADVISORI transformiert Security by Default von einer defensiven Notwendigkeit zu einem offensiven Geschäftsinstrument.\n\n🚀 Security-Enabled Business Innovation:\n• Trust-as-a-Service Geschäftsmodelle: Entwicklung von Geschäftsmodellen, die Security by Default als differenzierenden Wertversprechen nutzen und Vertrauen als monetarisierbares Asset positionieren.\n• Security-First Product Development: Integration von Security by Default Prinzipien in Produktinnovationsprozesse, die sicherheitsgesteuerte Features und Funktionalitäten als Marktdifferenzierer schaffen.\n• Collaborative Security Ecosystems: Aufbau von Partnerschaftsnetzwerken, die auf gemeinsamen Security by Default Standards basieren und kollektive Marktvorteile generieren.\n• Security Data Monetization: Entwicklung ethischer Frameworks zur Monetarisierung von Security-Insights und -Intelligence, die aus Security by Default Implementierungen gewonnen werden.\n\n💡 Market Expansion und Opportunity Creation:\n• Regulatory Technology (RegTech) Innovation: Nutzung von Security by Default Expertise zur Entwicklung von RegTech-Lösungen, die andere Organisationen bei der CRA-Compliance unterstützen.\n• Security-as-a-Platform Services: Transformation interner Security by Default Capabilities zu externen Serviceangeboten und neuen Revenue-Streams.\n• Zero-Trust-as-a-Service: Entwicklung von Security by Default-basierten Zero-Trust-Architekturen als Managed Services für andere Organisationen.\n• Security Innovation Labs: Etablierung von Forschungs- und Entwicklungseinheiten, die Security by Default Prinzipien für zukünftige Technologien und Geschäftsmodelle explorieren."
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
