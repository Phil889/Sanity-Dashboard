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
    console.log('Updating CIS Controls Top 20 Implementation page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-umsetzung-top-20-controls' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-umsetzung-top-20-controls" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie gewährleistet ADVISORI, dass die Top 20 CIS Controls Implementation die regulatorischen Anforderungen erfüllt und gleichzeitig die operative Effizienz steigert?",
        answer: "ADVISORI verstehen, dass moderne Cybersecurity-Strategien sowohl Compliance-Anforderungen erfüllen als auch die Geschäftseffizienz steigern müssen. Unsere Top 20 CIS Controls Implementation ist darauf ausgelegt, mehrere regulatorische Frameworks gleichzeitig zu adressieren und dabei operative Exzellenz zu fördern. Diese Dual-Purpose-Strategie maximiert den Wert jeder Sicherheitsinvestition für die C-Suite.\n\n📋 Multi-Framework Compliance durch CIS Controls:\n• DORA-Konformität: Die Controls 1-8 (Inventarisierung, Software-Management, Konfiguration) unterstützen direkt die DORA-Anforderungen für ICT-Risikomanagement und operative Resilienz.\n• NIS2-Compliance: Controls 11-16 (Network Security, Monitoring) erfüllen die erweiterten Cybersecurity-Anforderungen der NIS2-Direktive für kritische Infrastrukturen.\n• ISO 27001/TISAX Alignment: Systematische Mapping der CIS Controls auf ISO 27001 Kontrollen reduziert Audit-Aufwände um bis zu 50%.\n• GDPR-Support: Controls 3, 4, 14 (Datenschutz, Access Control, Malware Defense) stärken die technischen und organisatorischen Maßnahmen für Datenschutz.\n\n⚡ Operative Effizienzsteigerung durch intelligente Automatisierung:\n• Process Integration: Einbindung der Controls in bestehende ITSM-Prozesse (ITIL) für nahtlose Integration ohne zusätzliche Komplexität.\n• Automated Compliance Reporting: Kontinuierliche Compliance-Überwachung mit automatischer Dokumentation und Reporting für Audit-Readiness.\n• Resource Optimization: Konsolidierung von Security Tools und Prozessen führt zu 25-40% Reduktion der operativen Sicherheitskosten.\n• Enhanced Productivity: Standardisierte Sicherheitsprozesse reduzieren manuelle Interventionen und schaffen Kapazitäten für strategische Initiativen.\n\n🎯 ADVISORI's Compliance-Efficiency Balance:\n• Regulatory Roadmap Integration: Berücksichtigung kommender Regulierungsänderungen in der langfristigen CIS Controls-Strategie.\n• Audit-Ready Documentation: Strukturierte Dokumentation und Evidence-Management für effiziente Compliance-Nachweise.\n• Cross-Functional Governance: Integration von Legal, Compliance und IT-Security-Teams für holistische Risiko- und Compliance-Steuerung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche Rolle spielen die Top 20 CIS Controls bei der Vorbereitung auf fortgeschrittene Bedrohungen wie APTs und Nation-State-Angriffe?",
        answer: "Die Top 20 CIS Controls bilden das strategische Fundament für die Abwehr hochentwickelter Bedrohungen (Advanced Persistent Threats) und staatlich gesponserte Cyberangriffe. ADVISORI positioniert diese Controls nicht nur als Grundschutz, sondern als essenzielle Bausteine einer Defense-in-Depth-Strategie, die auch gegen die raffiniertesten Angreifer wirksam ist. Für die C-Suite bedeutet dies Schutz vor den kostspieligsten und reputationsschädlichsten Cyberbedrohungen.\n\n🛡️ APT-Abwehrstrategie durch systematische Kontrollen:\n• Early Detection (Controls 6, 8, 12): Kontinuierliches Monitoring und Logging ermöglicht die frühzeitige Erkennung von Lateral Movement und Command & Control-Kommunikation, die typisch für APTs sind.\n• Attack Surface Reduction (Controls 2, 4, 5): Systematische Schwachstellenverwaltung, Privilegienverwaltung und sichere Konfigurationen reduzieren die Angriffsfläche drastisch.\n• Incident Response Readiness (Controls 17, 19): Vorbereitung auf komplexe, langanhaltende Angriffe durch strukturierte Incident Response und Recovery-Fähigkeiten.\n• Data Protection (Controls 3, 13, 14): Schutz kritischer Daten durch Klassifizierung, Zugriffskontrolle und erweiterte Schutzmaßnahmen gegen Datenexfiltration.\n\n🔍 Nation-State Resilience durch strategische Härtung:\n• Supply Chain Security: Controls 2 und 16 adressieren Software- und Hardware-Lieferketten, ein bevorzugtes Angriffsziel staatlicher Akteure.\n• Zero Trust Foundation: Die Controls schaffen die technischen Voraussetzungen für Zero Trust-Architekturen, die gegen lateral movement besonders wirksam sind.\n• Threat Intelligence Integration: Systematische Incorporation von Threat Intelligence in die Control-Implementation für proaktive Abwehr bekannter Angreifer-TTPs.\n• Critical Asset Protection: Fokussierung der höchsten Schutzmaßnahmen auf die wertvollsten Unternehmensressourcen und Crown Jewels.\n\n🎯 ADVISORI's Advanced Threat Defense Strategy:\n• Threat-Informed Defense: Anpassung der CIS Controls Implementation basierend auf aktuellen Threat Intelligence und Angreifer-Behaviour.\n• Purple Team Integration: Kontinuierliche Validierung der Control-Effektivität durch Red Team-Übungen und Blue Team-Response.\n• Cyber Threat Hunting: Aufbau proaktiver Threat Hunting-Fähigkeiten auf Basis der etablierten Monitoring- und Detection-Controls.\n• Crisis Management Integration: Verbindung der technischen Controls mit strategischem Krisenmanagement für koordinierte Antworten auf Nation-State-Angriffe."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie unterstützt die CIS Controls Implementation die strategischen Ziele von M&A-Aktivitäten und Due Diligence-Prozessen?",
        answer: "In der heutigen M&A-Landschaft ist Cybersecurity-Reife ein entscheidender Wertfaktor und Dealbreaker. ADVISORI's strategische Implementierung der Top 20 CIS Controls positioniert Ihr Unternehmen optimal für M&A-Aktivitäten – sowohl als Käufer als auch als Verkäufer. Die standardisierten, auditbaren Controls schaffen Transparenz und Vertrauen, die in Due Diligence-Prozessen geschätzt und mit Bewertungsprämien belohnt werden.\n\n💼 M&A Value Creation durch demonstrierte Cybersecurity Excellence:\n• Valuation Premium: Nachgewiesene CIS Controls Implementation kann den Unternehmenswert um 10-20% steigern, da Käufer das reduzierte Cyber-Risiko und die niedrigeren Post-Merger-Integrationskosten schätzen.\n• Accelerated Due Diligence: Standardisierte Dokumentation und Audit-Trails der CIS Controls verkürzen Security Due Diligence von Wochen auf Tage.\n• Reduced Deal Risk: Comprehensive Security Posture minimiert das Risiko von Deal-Breaking Security-Entdeckungen oder Post-Closing-Überraschungen.\n• Integration Readiness: Standardisierte Security-Frameworks erleichtern die technische Integration und reduzieren Synergisierungs-Reibungen.\n\n🔍 Strategic Due Diligence Advantages:\n• Audit-Ready Security Posture: Vollständige Dokumentation aller 20 Controls mit Effectiveness-Metriken und Gap-Analysen für schnelle Assessments.\n• Risk Quantification: Klare KPIs und Risiko-Metriken ermöglichen präzise Bewertung von Cyber-Risiken und deren finanziellen Auswirkungen.\n• Regulatory Compliance Evidence: Nachweis der Compliance mit aktuellen und kommenden Regulations reduziert regulatorische Risiken für Käufer.\n• Operational Security Metrics: Demonstrierte Security Operations-Reife zeigt die Fähigkeit zur eigenständigen Cyber-Risiko-Verwaltung.\n\n🎯 ADVISORI's M&A-Optimization Strategy:\n• Pre-Transaction Readiness: Vorbereitung auf M&A-Aktivitäten durch strategische Positionierung der Security-Capabilities als Competitive Advantage.\n• Vendor Management Excellence: CIS Controls-Framework als Basis für die Security-Bewertung von Akquisitionszielen und Joint Venture-Partnern.\n• Post-Merger Integration: Verwendung der CIS Controls als gemeinsamer Standard für die Integration unterschiedlicher Security-Landschaften.\n• Continuous Value Demonstration: Etablierung von Metriken und Dashboards, die den laufenden Wert der Cybersecurity-Investitionen für Stakeholder und Investoren transparent machen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie stellt ADVISORI sicher, dass die Top 20 CIS Controls Implementation skalierbar ist und mit dem Unternehmenswachstum mithalten kann?",
        answer: "Skalierbarkeit ist ein kritischer Erfolgsfaktor für jede Cybersecurity-Strategie in wachsenden Unternehmen. ADVISORI entwickelt CIS Controls-Implementierungen, die nicht nur mit Ihrem aktuellen Bedarf übereinstimmen, sondern auch organisches Wachstum, geografische Expansion und technologische Evolution unterstützen. Unsere Strategie gewährleistet, dass Ihre Sicherheitsinvestitionen Wachstum ermöglichen, anstatt es zu behindern.\n\n📈 Skalierbarkeits-Design für nachhaltiges Wachstum:\n• Cloud-Native Architecture: Implementation der Controls mit Cloud-first-Ansatz für elastische Skalierung und globale Verfügbarkeit ohne proportionale Kostensteigerung.\n• Automation-First Strategy: Maximale Automatisierung aller 20 Controls reduziert die Abhängigkeit von manuellen Prozessen und ermöglicht exponentielles Wachstum mit linearen Ressourcen.\n• Modular Security Framework: Entwicklung wiederverwendbarer Security-Patterns und -Templates für schnelle Replikation in neuen Geschäftseinheiten, Standorten oder Akquisitionen.\n• Self-Service Security: Bereitstellung von Security-as-a-Service-Capabilities für Business Units, die autonomes, kontrollorientiertes Wachstum ermöglichen.\n\n🌍 Global Expansion Support:\n• Multi-Jurisdiction Compliance: CIS Controls-Framework als flexible Basis für die Anpassung an verschiedene regionale Compliance-Anforderungen (GDPR, CCPA, lokale Datenschutzgesetze).\n• Federated Security Model: Dezentrale Implementation mit zentraler Governance für konsistente Standards bei lokaler Flexibilität.\n• Cultural Adaptation: Anpassung der Control-Implementation an lokale Geschäftspraktiken und kulturelle Besonderheiten ohne Kompromisse bei der Sicherheit.\n• Time Zone Optimization: 24/7-Security Operations durch geografisch verteilte SOC-Capabilities und Follow-the-Sun-Modelle.\n\n🚀 Technology Evolution Enablement:\n• Future-Ready Infrastructure: Design der Controls für Kompatibilität mit emerging technologies wie Quantum Computing, Extended Reality und autonomen Systemen.\n• API-Driven Integration: Offene, API-basierte Security-Plattformen für nahtlose Integration neuer Tools und Technologien.\n• DevSecOps Integration: Einbettung der Controls in CI/CD-Pipelines für automatische Security-Validierung bei jeder Code-Änderung und Deployment.\n• Continuous Architecture Evolution: Agile Governance-Strukturen für schnelle Anpassung der Security-Architektur an neue Geschäftsmodelle und Technologien.\n\n🎯 ADVISORI's Scale-Ready Implementation:\n• Growth Planning Integration: Enge Abstimmung der CIS Controls-Roadmap mit Ihrer 3-5-Jahres-Wachstumsstrategie und Expansionsplänen.\n• Economics of Scale: Optimierung der Control-Implementation für Kostendegressionseffekte bei Wachstum und economies of scale.\n• Performance Monitoring: Kontinuierliche Überwachung der Skalierungseffizienz und proaktive Optimierung vor Erreichen von Kapazitätsgrenzen."
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
