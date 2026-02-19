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
    console.log('Updating KRITIS Schulungen & Awareness-Kampagnen page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'kritis-schulungen-awareness-kampagnen' })
    
    if (!existingDoc) {
      throw new Error('Document "kritis-schulungen-awareness-kampagnen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie können KRITIS-Schulungen strategisch zur Talent Development und organisatorischen Wettbewerbsfähigkeit beitragen?",
        answer: "KRITIS-Schulungen bieten eine einzigartige Gelegenheit zur strategischen Talent Development und können signifikant zur langfristigen Wettbewerbsfähigkeit der Organisation beitragen. Durch Investitionen in spezialisierte Sicherheitskompetenzen schaffen Unternehmen nicht nur Compliance-Konformität, sondern entwickeln auch wertvolle, übertragbare Fähigkeiten, die Mitarbeiterbindung und Organizational Excellence fördern.\n\n🎯 Strategische Talent Development-Dimensionen:\n• Critical Skills Development: KRITIS-Schulungen entwickeln hochspezialisierte Kompetenzen in Krisenmanagement, Risikobewertung und systematischem Problemlösen, die in allen Geschäftsbereichen wertvoll sind.\n• Leadership Pipeline Development: Sicherheitsschulungen identifizieren und entwickeln natürliche Führungspersönlichkeiten, die in Stresssituationen Ruhe bewahren und Teams effektiv führen können.\n• Cross-functional Expertise Building: Interdisziplinäre Sicherheitstrainings fördern das Verständnis für verschiedene Geschäftsbereiche und schaffen vielseitige, einsetzbare Talente.\n• Innovation und Problemlösungskompetenz: Komplexe Sicherheitsherausforderungen entwickeln analytische Denkfähigkeiten und kreative Problemlösungsansätze.\n\n🏆 Wettbewerbsvorteile durch strategische Talent-Investitionen:\n• Employee Value Proposition: Investitionen in hochwertige, spezialisierte Schulungen stärken das Employer Branding und helfen bei der Gewinnung und Bindung von Top-Talenten.\n• Interne Mobilität und Karriereentwicklung: Sicherheitskompetenzen eröffnen neue Karrierewege und schaffen interne Aufstiegsmöglichkeiten, was die Mitarbeiterbindung erhöht.\n• Knowledge Retention und Intellectual Property: Durch interne Expertise-Entwicklung reduziert sich die Abhängigkeit von externen Beratern und wertvolles Wissen bleibt im Unternehmen.\n• Market Differentiation: Organisationen mit nachweisbar hochqualifizierten, sicherheitsbewussten Teams können sich als Premium-Anbieter positionieren.\n\n🔄 ADVISORIs Talent-zentrierter Ansatz:\n• Competency-based Development: Entwicklung individueller Kompetenz-Roadmaps, die Sicherheitsexpertise mit persönlichen Karrierezielen verknüpfen.\n• Mentoring und Expert Networks: Aufbau interner Expert Communities und Mentoring-Programme für nachhaltigen Wissenstransfer."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche Rolle spielen KRITIS-Schulungen bei der Vorbereitung auf regulatorische Prüfungen und Audit-Prozesse?",
        answer: "KRITIS-Schulungen sind ein kritischer Erfolgsfaktor für die Vorbereitung auf regulatorische Prüfungen und Audit-Prozesse. Gut geschulte Mitarbeiter sind nicht nur besser auf Prüfungssituationen vorbereitet, sondern können auch aktiv dazu beitragen, Audit-Ergebnisse zu verbessern und das Risiko regulatorischer Sanctions zu minimieren. ADVISORI integriert Audit-Readiness systematisch in alle Schulungsprogramme.\n\n📋 Audit-Readiness durch systematische Schulungsintegration:\n• Compliance Documentation Skills: Training der Mitarbeiter in ordnungsgemäßer Dokumentation von Sicherheitsmaßnahmen und Incident-Response-Aktivitäten, die bei Audits als Nachweis dienen.\n• Regulatory Communication Training: Entwicklung von Kommunikationskompetenzen für professionelle, präzise Interaktion mit Auditoren und Regulatoren.\n• Evidence Management und Record Keeping: Schulung in systematischer Führung von Audit Trails und Evidence-Sammlung für Compliance-Nachweise.\n• Interview Preparation und Stakeholder Management: Vorbereitung von Key Personnel auf Auditor-Interviews und effektive Präsentation von Compliance-Maßnahmen.\n\n🎯 Proaktive Audit-Optimierung:\n• Mock Audits und Simulation: Regelmäßige interne Audit-Simulationen mit geschulten Teams zur Identifikation von Verbesserungsbereichen vor echten Prüfungen.\n• Gap Analysis und Remediation Training: Schulung der Teams in systematischer Identifikation und Behebung von Compliance-Lücken.\n• Continuous Monitoring und Self-Assessment: Entwicklung interner Audit-Kompetenz für kontinuierliche Selbstbewertung und proaktive Verbesserung.\n• Regulatory Update Management: Training in systematischer Verfolgung und Implementierung neuer regulatorischer Anforderungen.\n\n✅ Audit-Erfolg durch strukturierte Vorbereitung:\n• Process Optimization: Nutzung von Audit-Vorbereitungen als Gelegenheit zur Prozessoptimierung und Effizienzsteigerung.\n• Cultural Transformation: Entwicklung einer Audit-Ready Culture, in der Compliance als kontinuierlicher Verbesserungsprozess verstanden wird.\n• Stakeholder Confidence: Demonstrierte Audit-Readiness stärkt das Vertrauen von Regulatoren, Kunden und Partnern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie kann ADVISORI die Integration von KRITIS-Schulungen in bestehende Unternehmens- und HR-Systeme optimieren?",
        answer: "Die nahtlose Integration von KRITIS-Schulungen in bestehende Unternehmens- und HR-Systeme ist essentiell für nachhaltigen Erfolg und organisatorische Effizienz. ADVISORI entwickelt integrierte Lösungen, die Sicherheitsschulungen nicht als isolierte Aktivitäten, sondern als integralen Bestandteil der Organisationsentwicklung und Talent-Management-Strategie positionieren.\n\n🔗 Systemintegration und Workflow-Optimierung:\n• HR Information Systems (HRIS) Integration: Vollständige Integration von Schulungsverläufen, Zertifizierungen und Kompetenz-Profilen in bestehende HR-Systeme für zentrale Verwaltung und Reporting.\n• Learning Management System (LMS) Connectivity: Nahtlose Anbindung an vorhandene LMS-Plattformen oder Implementierung spezialisierter Security Learning Environments.\n• Performance Management Integration: Verknüpfung von Sicherheitskompetenzen mit Performance Reviews, Karriereentwicklung und Incentive-Systemen.\n• Compliance Management Platforms: Integration mit bestehenden GRC-Systemen für automatisierte Compliance-Überwachung und Reporting.\n\n📊 Data-driven Integration und Analytics:\n• Unified Dashboard und Reporting: Entwicklung integrierter Dashboards, die Schulungsfortschritte mit Geschäfts-KPIs und Sicherheitsmetriken verknüpfen.\n• Predictive Analytics für Skills Gap Analysis: Einsatz von Data Analytics zur Vorhersage von Schulungsbedarfen basierend auf Rolle, Performance und Risikoprofil.\n• Automated Compliance Tracking: Automatisierte Verfolgung von Zertifizierungszyklen, Renewal-Requirements und Compliance-Status.\n• ROI Measurement und Business Intelligence: Integration von Schulungsmetriken in Business Intelligence-Systeme für umfassende ROI-Analyse.\n\n🚀 Change Management und Cultural Integration:\n• Organizational Change Strategy: Systematische Change-Management-Ansätze für die Integration von Security Learning in die Unternehmenskultur.\n• Leadership Enablement: Schulung von Führungskräften und HR-Teams in der effektiven Verwaltung und Förderung von Security Learning Initiatives.\n• Process Standardization: Entwicklung standardisierter Prozesse für Onboarding, Role Changes und Career Development mit integrierter Security Component."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Welche Best Practices empfiehlt ADVISORI für die Skalierung von KRITIS-Schulungsprogrammen in großen, komplexen Organisationen?",
        answer: "Die Skalierung von KRITIS-Schulungsprogrammen in großen, komplexen Organisationen erfordert strategische Planung, modulare Ansätze und systematisches Change Management. ADVISORI hat bewährte Methoden entwickelt, um auch in den komplexesten Organisationsstrukturen effektive, einheitliche Sicherheitsschulungen zu implementieren und dabei gleichzeitig lokale Besonderheiten und unterschiedliche Geschäftsbereiche zu berücksichtigen.\n\n🏗️ Skalierungsstrategien für Enterprise-Level Implementation:\n• Modular Architecture und Standardization: Entwicklung modularer Schulungsarchitekturen mit standardisierten Core Components und flexiblen, anpassbaren Elementen für verschiedene Geschäftsbereiche.\n• Hub-and-Spoke Model: Implementierung eines zentralen Excellence Centers mit dezentralen Delivery-Teams für lokale Anpassung und kulturelle Sensitivität.\n• Phased Rollout Strategy: Systematische, phasenweise Implementierung beginnend mit kritischen Bereichen und schrittweiser Ausweitung auf die gesamte Organisation.\n• Train-the-Trainer Programme: Entwicklung interner Trainer-Kapazitäten für nachhaltige, skalierbare Schulungsdelivery ohne übermäßige Abhängigkeit von externen Ressourcen.\n\n📈 Organizational Excellence und Governance:\n• Center of Excellence (CoE) Establishment: Aufbau spezialisierter Security Learning Centers of Excellence für kontinuierliche Programmentwicklung und Best Practice Sharing.\n• Global Standards mit lokaler Flexibilität: Balance zwischen organisationsweiten Standards und lokalen Anpassungen für verschiedene Märkte, Kulturen und Regulierungsumgebungen.\n• Cross-business Unit Collaboration: Förderung des Erfahrungsaustauschs und Best Practice Sharing zwischen verschiedenen Geschäftsbereichen und Geografien.\n• Executive Sponsorship und Governance: Etablierung starker Executive Sponsorship und klarer Governance-Strukturen für nachhaltige Programm-Unterstützung.\n\n🔄 Kontinuierliche Optimierung und Innovation:\n• Continuous Improvement Processes: Implementierung systematischer Feedback-Schleifen und Verbesserungsprozesse für kontinuierliche Programm-Evolution.\n• Technology Enablement: Einsatz moderner Learning Technologies für effiziente Content Delivery, Progress Tracking und Performance Analytics.\n• Global Community Building: Aufbau globaler Security Learning Communities für Peer-to-Peer Learning und organisationsweiten Wissensaustausch."
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
