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
    console.log('Updating BSI Standards Kompendium page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'bsi-standards-kompendium' })
    
    if (!existingDoc) {
      throw new Error('Document "bsi-standards-kompendium" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie adressiert ADVISORI die Komplexität einer vollständigen BSI Standards Kompendium-Implementierung ohne operative Disruption und welche Governance-Strukturen sind erforderlich?",
        answer: "Die Implementierung des vollständigen BSI Standards Kompendiums stellt eine der komplexesten IT-Sicherheitsinitiativen dar, die eine Organisation durchführen kann. ADVISORI hat spezialisierte Methoden entwickelt, um diese Transformation ohne Unterbrechung kritischer Geschäftsprozesse zu realisieren und dabei robuste Governance-Strukturen zu etablieren, die nachhaltigen Erfolg gewährleisten.\n\n🎯 ADVISORI's Non-Disruptive Implementation Methodology:\n• Phased Rollout Strategy: Systematische Implementierung in kontrollierten Phasen, die kritische Geschäftsprozesse kontinuierlich schützen und optimieren.\n• Business Continuity Integration: Nahtlose Integration aller BSI-Standards in bestehende Workflows ohne Unterbrechung der operativen Exzellenz.\n• Risk-Minimized Transition: Kontinuierliche Risikobewertung und -minimierung während der gesamten Implementierungsphase.\n• Stakeholder-Centric Communication: Transparente Kommunikation und Einbindung aller Stakeholder für maximale Akzeptanz und Unterstützung.\n\n🏛️ Enterprise Governance Framework für BSI Standards:\n• Executive Steering Committee: Etablierung einer C-Level-Steuerungsgruppe für strategische Entscheidungen und Ressourcenallokation.\n• Standards Compliance Board: Spezialisiertes Gremium für kontinuierliche Überwachung und Optimierung der BSI-Standards-Einhaltung.\n• Cross-Functional Implementation Teams: Interdisziplinäre Teams für effiziente Umsetzung aller Standards-Anforderungen.\n• Continuous Improvement Council: Strukturierte Verbesserungsprozesse für laufende Optimierung der Standards-Implementierung.\n\n🛡️ Operational Excellence während der Transformation:\n• Zero-Downtime Implementation: Spezielle Verfahren zur Implementierung ohne Ausfallzeiten kritischer Systeme.\n• Performance Monitoring: Kontinuierliche Überwachung der Geschäftsleistung während der gesamten Implementierungsphase.\n• Quality Assurance Framework: Mehrstufige Qualitätssicherung zur Gewährleistung höchster Implementierungsstandards.\n• Change Management Excellence: Professionelle Begleitung aller Organisationsveränderungen für maximale Mitarbeiterakzeptanz."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche spezifischen Herausforderungen entstehen bei der Integration des BSI Standards Kompendiums in komplexe, internationale Organisationsstrukturen und wie löst ADVISORI diese?",
        answer: "Internationale Organisationen mit komplexen, verteilten Strukturen stehen vor einzigartigen Herausforderungen bei der BSI Standards Kompendium-Implementierung. Unterschiedliche regulatorische Anforderungen, kulturelle Besonderheiten und technische Infrastrukturen erfordern hochspezialisierte Ansätze. ADVISORI hat bewährte Methoden für diese komplexen Implementierungen entwickelt.\n\n🌍 Internationale Implementierungs-Herausforderungen:\n• Multi-Jurisdictional Compliance: Harmonisierung von BSI-Standards mit lokalen regulatorischen Anforderungen in verschiedenen Ländern.\n• Cultural Integration Challenges: Anpassung der Standards-Implementierung an unterschiedliche Unternehmenskulturen und Arbeitsweisen.\n• Technical Infrastructure Complexity: Integration in heterogene, global verteilte IT-Landschaften mit unterschiedlichen Technologie-Stacks.\n• Resource Coordination Complexity: Koordination von Implementierungsaktivitäten über Zeitzonen und Organisationseinheiten hinweg.\n\n🏗️ ADVISORI's Global Implementation Framework:\n• Localized Standards Adaptation: Anpassung der BSI-Standards an lokale Gegebenheiten unter Beibehaltung der Kern-Compliance-Anforderungen.\n• Cultural Change Management: Kulturspezifische Ansätze für Akzeptanz und Adoption der neuen Sicherheitsstandards.\n• Federated Implementation Model: Koordinierte, aber angepasste Implementierung für verschiedene Regionen und Geschäftseinheiten.\n• Global Governance Alignment: Etablierung einheitlicher Governance-Strukturen bei Berücksichtigung lokaler Besonderheiten.\n\n🔄 Cross-Border Coordination Excellence:\n• Unified Communication Protocols: Standardisierte Kommunikationsverfahren für globale Koordination der Implementierung.\n• Regional Implementation Centers: Etablierung lokaler Kompetenzzentren für effiziente Vor-Ort-Unterstützung.\n• Global Standards Dashboard: Zentrale Überwachung und Steuerung der weltweiten Implementierungsfortschritte.\n• International Best Practice Sharing: Systematischer Wissenstransfer zwischen Organisationseinheiten für optimale Ergebnisse."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie gewährleistet ADVISORI die Interoperabilität des BSI Standards Kompendiums mit bestehenden internationalen Standards und Frameworks in global agierenden Unternehmen?",
        answer: "Global agierende Unternehmen müssen oft multiple, sich überschneidende Standards-Frameworks parallel implementieren und betreiben. Die Herausforderung liegt in der optimalen Integration des BSI Standards Kompendiums mit internationalen Standards wie ISO 27001, NIST, SOC 2 und branchenspezifischen Anforderungen. ADVISORI hat spezialisierte Harmonisierungsansätze entwickelt, die Synergien maximieren und Redundanzen eliminieren.\n\n🔗 Multi-Standards Integration Strategy:\n• Standards Mapping Excellence: Detaillierte Analyse und Mapping aller Standards-Überschneidungen für optimale Ressourcennutzung.\n• Unified Control Framework: Entwicklung integrierter Kontrollstrukturen, die multiple Standards gleichzeitig erfüllen.\n• Cross-Standard Documentation: Einheitliche Dokumentationsansätze, die alle relevanten Standards-Anforderungen abdecken.\n• Integrated Audit Preparation: Koordinierte Vorbereitung für verschiedene Standards-Audits zur Effizienzmaximierung.\n\n🌐 International Standards Harmonization:\n• ISO 27001 BSI Convergence: Optimale Integration von BSI-Standards mit ISO 27001-Anforderungen für doppelte Compliance-Sicherheit.\n• NIST Framework Alignment: Harmonisierung mit NIST Cybersecurity Framework für US-Markt-Compliance.\n• Industry-Specific Integration: Anpassung an branchenspezifische Standards wie PCI DSS, HIPAA oder finanssektorspezifische Anforderungen.\n• Regional Compliance Optimization: Berücksichtigung regionaler Standards wie ENISA-Guidelines oder nationale Cyber-Strategien.\n\n🎯 Operational Efficiency through Standards Convergence:\n• Unified Governance Model: Einheitliche Governance-Strukturen für alle implementierten Standards-Frameworks.\n• Consolidated Reporting: Integrierte Berichterstattung, die alle Standards-Anforderungen in einheitlichen Dashboards abbildet.\n• Cross-Standard Training: Umfassende Schulungsprogramme, die alle relevanten Standards in kohärenter Weise vermitteln.\n• Integrated Risk Management: Einheitliche Risikomanagement-Ansätze, die alle Standards-Perspektiven berücksichtigen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche Rolle spielt künstliche Intelligenz und Automatisierung bei der ADVISORI BSI Standards Kompendium-Implementierung und wie wird dadurch die Effizienz gesteigert?",
        answer: "Die vollständige Implementierung des BSI Standards Kompendiums umfasst Hunderte von Controls und Maßnahmen, deren manuelle Verwaltung ineffizient und fehleranfällig wäre. ADVISORI nutzt fortschrittliche KI-Technologien und Automatisierung, um die Implementierung zu beschleunigen, die Compliance-Überwachung zu optimieren und kontinuierliche Verbesserungen zu ermöglichen.\n\n🤖 AI-Powered BSI Standards Implementation:\n• Intelligent Control Mapping: KI-gestützte Analyse und Mapping von BSI-Controls auf bestehende Organisationsstrukturen für optimale Implementierung.\n• Automated Compliance Monitoring: Kontinuierliche, automatisierte Überwachung der Einhaltung aller BSI-Standards-Anforderungen.\n• Predictive Risk Assessment: KI-basierte Vorhersage potentieller Compliance-Risiken und proaktive Empfehlung von Gegenmaßnahmen.\n• Intelligent Documentation Generation: Automatisierte Erstellung und Aktualisierung von Compliance-Dokumentation basierend auf aktuellen Implementierungsstatus.\n\n⚡ Automation Excellence für operative Effizienz:\n• Continuous Compliance Verification: Automatisierte, kontinuierliche Verifikation aller implementierten BSI-Controls.\n• Self-Healing Security Processes: Automatische Korrektur von Compliance-Abweichungen wo technisch möglich.\n• Intelligent Alert Management: KI-gestützte Priorisierung und Routing von Sicherheitsalerts basierend auf BSI-Standards-Kritikalität.\n• Automated Reporting Generation: Automatische Generierung umfassender Compliance-Reports für verschiedene Stakeholder-Gruppen.\n\n🔮 Future-Ready Implementation Capabilities:\n• Machine Learning Optimization: Kontinuierliche Verbesserung der Implementierungsansätze durch ML-basierte Analyse.\n• Adaptive Control Enhancement: Automatische Anpassung von Controls basierend auf veränderten Bedrohungslandschaften.\n• Predictive Maintenance: Vorhersage-basierte Wartung von Sicherheitskontrollen für optimale Effektivität.\n• AI-Driven Innovation Integration: Intelligente Integration neuer BSI-Standards und -Updates in bestehende Systeme."
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
