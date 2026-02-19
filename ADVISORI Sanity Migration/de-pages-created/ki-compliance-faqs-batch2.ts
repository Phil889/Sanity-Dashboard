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
    console.log('Updating KI-Compliance page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'ki-compliance' })
    
    if (!existingDoc) {
      throw new Error('Document "ki-compliance" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie entwickelt ADVISORI branchenspezifische KI-Compliance-Strategien und welche besonderen Herausforderungen entstehen in regulierten Industrien wie Finanzdienstleistungen oder Gesundheitswesen?',
        answer: "Branchenspezifische KI-Compliance erfordert tiefes Verständnis sowohl für KI-Technologien als auch für sektorspezifische Regulierungslandschaften. ADVISORI entwickelt maßgeschneiderte Compliance-Frameworks, die die einzigartigen Anforderungen jeder Branche berücksichtigen und gleichzeitig KI-Innovation ermöglichen. Unser Ansatz harmonisiert technische Exzellenz mit regulatorischer Präzision für nachhaltigen Geschäftserfolg.\n\n🏦 Finanzdienstleistungen - Präzisions-Compliance:\n• Basel III und KI-Integration: Entwicklung von KI-Systemen, die Kapitaladäquanz-Anforderungen erfüllen und gleichzeitig Risikomanagement-Effizienz steigern.\n• MiFID II und Algorithmic Trading: Implementierung transparenter KI-Handelssysteme mit vollständiger Audit-Trail-Dokumentation und Best-Execution-Compliance.\n• Anti-Geldwäsche und KI: Design von KI-gestützten AML-Systemen, die Verdachtsmeldungen optimieren ohne False-Positive-Raten zu erhöhen.\n• Kreditrisiko-Modellierung: Entwicklung erklärbarer KI-Kreditentscheidungen, die Fairness-Anforderungen erfüllen und regulatorische Transparenz gewährleisten.\n\n🏥 Gesundheitswesen - Life-Critical Compliance:\n• Medical Device Regulation und KI: Navigation komplexer MDR-Anforderungen für KI-basierte Medizinprodukte mit CE-Kennzeichnung und klinischer Bewertung.\n• HIPAA und Datenschutz: Implementierung von KI-Systemen mit höchsten Datenschutz-Standards für Gesundheitsdaten und Patientenvertraulichkeit.\n• Clinical Decision Support: Entwicklung von KI-Systemen, die medizinische Entscheidungen unterstützen ohne ärztliche Verantwortung zu untergraben.\n• Pharmakovigilanz und KI: Design intelligenter Überwachungssysteme für Arzneimittelsicherheit mit regulatorischer Meldepflicht-Compliance.\n\n🚗 Automobilindustrie - Safety-First Innovation:\n• Funktionale Sicherheit und KI: Integration von KI in sicherheitskritische Fahrzeugsysteme unter Einhaltung von ISO Standards und UNECE-Regulierungen.\n• Autonomous Driving Compliance: Entwicklung von KI-Systemen für autonomes Fahren mit umfassender Risikobewertung und Haftungsklarstellung.\n• Type Approval und KI: Navigation komplexer Zulassungsverfahren für KI-basierte Fahrzeugtechnologien in verschiedenen Märkten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche Rolle spielt KI-Ethik in ADVISORI\'s Compliance-Framework und wie wird sichergestellt, dass ethische Prinzipien nicht nur theoretisch, sondern praktisch in KI-Systemen implementiert werden?',
        answer: "KI-Ethik ist nicht nur ein philosophisches Konzept, sondern ein praktischer Imperativ für nachhaltige KI-Implementierung. ADVISORI integriert ethische Prinzipien als operative Anforderungen in jede Phase des KI-Entwicklungszyklus. Unser Ansatz verwandelt abstrakte ethische Konzepte in messbare, überprüfbare und kontinuierlich optimierbare Systemkomponenten, die sowohl moralische Integrität als auch Geschäftswert schaffen.\n\n⚖️ Operative Ethik-Integration in KI-Systemen:\n• Fairness-by-Design: Entwicklung von KI-Architekturen mit eingebauten Fairness-Mechanismen, die Diskriminierung proaktiv verhindern und gleichberechtigte Behandlung aller Nutzergruppen gewährleisten.\n• Transparenz und Erklärbarkeit: Implementierung von KI-Systemen, die ihre Entscheidungslogik in verständlicher Form kommunizieren und Stakeholder-Vertrauen durch Nachvollziehbarkeit aufbauen.\n• Autonomie und menschliche Kontrolle: Design von KI-Systemen, die menschliche Entscheidungsfreiheit respektieren und angemessene Kontroll- und Interventionsmöglichkeiten bieten.\n• Beneficence und Non-Maleficence: Entwicklung von KI-Anwendungen, die aktiv positive gesellschaftliche Auswirkungen fördern und potenzielle Schäden systematisch minimieren.\n\n🔍 Praktische Ethik-Implementierung durch ADVISORI:\n• Ethik-Impact-Assessments: Systematische Bewertung ethischer Auswirkungen von KI-Systemen in allen Entwicklungsphasen mit quantifizierbaren Metriken und Verbesserungsmaßnahmen.\n• Stakeholder-Partizipation: Integration verschiedener Perspektiven durch strukturierte Konsultationsprozesse mit Nutzern, Experten und betroffenen Gemeinschaften.\n• Kontinuierliche Ethik-Überwachung: Implementierung von Monitoring-Systemen, die ethische Performance in Echtzeit verfolgen und Abweichungen automatisch erkennen.\n• Ethik-Governance-Strukturen: Etablierung von Ethik-Komitees und Entscheidungsprozessen, die ethische Überlegungen in strategische Geschäftsentscheidungen integrieren.\n\n🌍 Gesellschaftliche Verantwortung und Business Value:\n• Sustainable AI Development: Entwicklung von KI-Systemen, die langfristige gesellschaftliche Nachhaltigkeit mit kurzfristigen Geschäftszielen harmonisieren.\n• Trust-Building durch Ethik: Nutzung ethischer Exzellenz als Vertrauensgarantie für Kunden, Investoren und Regulierungsbehörden.\n• Innovation durch ethische Constraints: Transformation ethischer Beschränkungen in Innovationstreiber, die neue Geschäftsmöglichkeiten erschließen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie bereitet ADVISORI Unternehmen auf KI-Audits vor und welche Dokumentations- und Governance-Strukturen sind erforderlich, um regulatorische Prüfungen erfolgreich zu bestehen?',
        answer: "KI-Audits stellen eine der kritischsten Compliance-Herausforderungen dar, da sie umfassende Transparenz über komplexe technische Systeme erfordern. ADVISORI entwickelt audit-bereite KI-Governance-Strukturen, die nicht nur regulatorische Anforderungen erfüllen, sondern auch kontinuierliche Verbesserung und Optimierung ermöglichen. Unser Ansatz verwandelt Audit-Vorbereitung von einer reaktiven Belastung in einen proaktiven Wettbewerbsvorteil.\n\n📋 Comprehensive Audit-Readiness Framework:\n• Lückenlose Dokumentations-Architektur: Entwicklung systematischer Dokumentationssysteme, die jeden Aspekt des KI-Lebenszyklus erfassen, von Datenquellen über Modell-Training bis hin zu Deployment und Monitoring.\n• Automated Compliance Reporting: Implementierung intelligenter Reporting-Systeme, die kontinuierlich Compliance-Status verfolgen und audit-bereite Berichte automatisch generieren.\n• Traceability und Provenance: Etablierung vollständiger Nachverfolgbarkeit aller KI-Entscheidungen und Datenflüsse mit forensischer Präzision.\n• Version Control und Change Management: Implementierung rigoroser Versionskontrolle für KI-Modelle, Daten und Konfigurationen mit vollständiger Änderungshistorie.\n\n🔍 Proaktive Audit-Vorbereitung durch ADVISORI:\n• Mock Audits und Readiness Assessments: Durchführung simulierter Audits zur Identifikation potenzieller Schwachstellen und Verbesserungsbereiche vor tatsächlichen regulatorischen Prüfungen.\n• Stakeholder Training und Preparation: Schulung von Teams in Audit-Kommunikation und -Verfahren zur Gewährleistung konsistenter und professioneller Audit-Interaktionen.\n• Evidence Management Systems: Entwicklung zentralisierter Systeme zur Verwaltung und schnellen Bereitstellung von Audit-Evidenz und Compliance-Nachweisen.\n• Regulatory Relationship Management: Aufbau konstruktiver Beziehungen zu Regulierungsbehörden durch proaktive Kommunikation und Transparenz.\n\n⚡ Kontinuierliche Audit-Excellence:\n• Real-time Compliance Monitoring: Implementierung von Systemen, die kontinuierlich Audit-Bereitschaft überwachen und potenzielle Compliance-Gaps frühzeitig identifizieren.\n• Automated Remediation: Entwicklung von Systemen, die Compliance-Abweichungen automatisch korrigieren oder Eskalationsprozesse auslösen.\n• Best Practice Evolution: Kontinuierliche Weiterentwicklung von Audit-Praktiken basierend auf Branchenentwicklungen und regulatorischen Änderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche internationalen Compliance-Herausforderungen entstehen bei globalen KI-Implementierungen und wie koordiniert ADVISORI zwischen verschiedenen Regulierungsrahmen?',
        answer: "Globale KI-Implementierungen navigieren durch ein komplexes Mosaik unterschiedlicher Regulierungslandschaften, die oft widersprüchliche oder überlappende Anforderungen stellen. ADVISORI entwickelt harmonisierte Compliance-Strategien, die lokale Regulierungskonformität mit globaler Effizienz verbinden. Unser Ansatz ermöglicht skalierbare KI-Lösungen, die in jedem Markt compliant operieren können.\n\n🌍 Globale Regulierungs-Harmonisierung:\n• Multi-Jurisdictional Compliance Mapping: Systematische Analyse und Harmonisierung von Compliance-Anforderungen zwischen EU AI Act, US-amerikanischen Bundesstaaten-Gesetzen, chinesischen KI-Regulierungen und anderen internationalen Frameworks.\n• Regulatory Arbitrage Optimization: Identifikation optimaler Jurisdiktionen für verschiedene KI-Anwendungen unter Berücksichtigung von Compliance-Kosten, Innovationsfreiheit und Marktchancen.\n• Cross-Border Data Governance: Entwicklung von Datenarchitekturen, die internationale Datentransfer-Regelungen respektieren und gleichzeitig KI-Performance optimieren.\n• Standardization und Interoperability: Implementierung internationaler Standards und Protokolle, die grenzüberschreitende KI-Compliance vereinfachen.\n\n🔄 ADVISORI's Global Compliance Coordination:\n• Regional Expertise Networks: Aufbau lokaler Expertise-Netzwerke in Schlüsselmärkten für präzise Interpretation und Implementierung regionaler Compliance-Anforderungen.\n• Unified Governance Frameworks: Entwicklung übergeordneter Governance-Strukturen, die lokale Compliance-Variationen unter einem kohärenten globalen Framework vereinen.\n• Dynamic Compliance Adaptation: Implementierung flexibler Systeme, die sich schnell an Änderungen in verschiedenen Regulierungslandschaften anpassen können.\n• International Regulatory Monitoring: Kontinuierliche Überwachung regulatorischer Entwicklungen in Schlüsselmärkten mit proaktiver Anpassung globaler Compliance-Strategien.\n\n⚖️ Strategische Compliance-Optimierung:\n• Risk-Based Jurisdiction Selection: Strategische Auswahl von Jurisdiktionen basierend auf Risiko-Nutzen-Analysen für verschiedene KI-Anwendungen und Geschäftsmodelle.\n• Regulatory Sandboxes und Innovation Hubs: Nutzung regulatorischer Experimentierräume für sichere Erprobung innovativer KI-Lösungen vor vollständiger Markteinführung.\n• International Advocacy und Policy Engagement: Aktive Teilnahme an internationalen Standardisierungsprozessen und Policy-Diskussionen zur Förderung harmonisierter KI-Regulierung."
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
    console.log('✅ FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
