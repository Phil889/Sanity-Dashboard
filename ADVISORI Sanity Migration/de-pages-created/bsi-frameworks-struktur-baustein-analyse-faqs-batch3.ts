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
    console.log('Updating BSI Frameworks Struktur Baustein Analyse page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'bsi-frameworks-struktur-baustein-analyse' })
    
    if (!existingDoc) {
      throw new Error('Document "bsi-frameworks-struktur-baustein-analyse" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie adressiert ADVISORI die Integration von Künstlicher Intelligenz und Machine Learning in BSI-konforme Sicherheitsarchitekturen und welche neuen Risiken entstehen durch diese Technologien?",
        answer: "Die Integration von KI und Machine Learning in Unternehmens-IT-Landschaften schafft neue Dimensionen von Chancen und Risiken, die traditionelle BSI-Frameworks vor unprecedented Herausforderungen stellen. ADVISORI hat pioneering Ansätze entwickelt, um KI-Technologien sicher in BSI-konforme Architekturen zu integrieren und gleichzeitig die entstehenden neuen Risikoklassen systematisch zu adressieren.\n\n🤖 KI-spezifische BSI-Baustein-Erweiterungen:\n• AI Model Security: Entwicklung spezialisierter Sicherheitsbausteine für KI-Modelle, einschließlich Schutz vor Adversarial Attacks, Model Poisoning und Data Extraction-Angriffen.\n• Training Data Governance: BSI-konforme Frameworks für sichere Verwaltung und Schutz von Trainingsdaten, einschließlich Privacy-Preserving Machine Learning-Techniken.\n• Model Lifecycle Security: Umfassende Sicherheitskonzepte für den gesamten KI-Modell-Lebenszyklus von Entwicklung über Deployment bis Retirement.\n• Explainable AI Integration: Integration von XAI-Prinzipien in BSI-Compliance für transparente und nachvollziehbare KI-Entscheidungen.\n\n⚡ Advanced AI Risk Management für BSI-Compliance:\n• Algorithmic Bias Detection: Systematische Identifikation und Mitigation von Bias in KI-Systemen als Teil der BSI-Risikobewertung.\n• AI System Resilience: Entwicklung robuster KI-Systeme, die Ausfälle, Angriffe und unerwartete Eingaben sicher handhaben können.\n• Automated Decision Accountability: BSI-konforme Governance-Strukturen für automatisierte Entscheidungsfindung mit klaren Verantwortlichkeiten und Audit-Trails.\n• Privacy-by-Design für AI: Integration von Datenschutz-Prinzipien in KI-Architekturen von Grund auf für BSI-konforme Privacy-Compliance.\n\n🛡️ Innovative Security-by-Design für KI-Integration:\n• Federated Learning Security: BSI-konforme Implementierung von Federated Learning für dezentrales Modell-Training ohne Kompromittierung der Datensicherheit.\n• Homomorphic Encryption Integration: Anwendung fortgeschrittener Verschlüsselungstechniken für Berechnungen auf verschlüsselten Daten in KI-Systemen.\n• Secure Multi-Party Computation: Implementation von SMPC-Protokollen für sichere Kollaboration zwischen Parteien ohne Preisgabe sensibler Daten.\n• Differential Privacy Implementation: Systematische Anwendung von Differential Privacy-Techniken für Datenschutz in KI-Anwendungen.\n\n🎯 ADVISORI's AI-Security Excellence Framework:\n• AI Risk Assessment Methodologies: Spezialisierte Risikobewertungsverfahren für KI-spezifische Bedrohungen und Vulnerabilitäten.\n• Hybrid Human-AI Governance: Entwicklung von Governance-Strukturen, die menschliche Oversight mit KI-Effizienz optimal kombinieren.\n• Continuous AI Monitoring: Implementation kontinuierlicher Überwachungssysteme für KI-Performance, Sicherheit und Compliance.\n• Adaptive Security Controls: Selbstlernende Sicherheitskontrollen, die sich an evolvierende KI-Bedrohungen anpassen können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche Rolle spielt die Integration von Incident Response und Business Continuity Planning in der BSI Frameworks Struktur Baustein Analyse und wie bereitet ADVISORI Organisationen auf Cyber-Krisen vor?",
        answer: "Incident Response und Business Continuity sind nicht länger separate Disziplinen, sondern müssen systematisch in die BSI-Framework-Struktur integriert werden, um resiliente Organisationen zu schaffen, die Cyber-Krisen nicht nur überstehen, sondern gestärkt daraus hervorgehen. ADVISORI entwickelt integrierte Crisis-Resilience-Frameworks, die präventive BSI-Compliance mit reaktiven Krisenmanagement-Kapazitäten verbinden.\n\n🚨 Integrated Crisis Management Architecture:\n• BSI-aligned Incident Response Frameworks: Nahtlose Integration von BSI-Bausteinen in Incident Response-Pläne für koordinierte Reaktion auf Sicherheitsvorfälle.\n• Business Impact Analysis Integration: Systematische Verknüpfung von BSI-Risikoassessments mit Business Impact-Analysen für prioritätsbasierte Krisenreaktion.\n• Recovery Time Objective Alignment: Abstimmung von BSI-Sicherheitsmaßnahmen mit RTO/RPO-Anforderungen für optimale Balance zwischen Sicherheit und Verfügbarkeit.\n• Cross-functional Crisis Teams: Etablierung interdisziplinärer Krisenteams mit BSI-Expertise für integrierte Sicherheits- und Geschäftskontinuitäts-Entscheidungen.\n\n⚡ Proactive Crisis Preparedness Excellence:\n• Scenario-based Crisis Simulation: Entwicklung realistischer Krisenszenarien basierend auf BSI-Risikoanalysen für praxisnahe Übungen und Preparedness-Testing.\n• Automated Crisis Response: Implementation automatisierter Reaktionsmechanismen, die bei Sicherheitsvorfällen BSI-konforme Sofortmaßnahmen einleiten.\n• Stakeholder Communication Frameworks: Vordefinierte Kommunikationsstrategien für verschiedene Stakeholder-Gruppen während Cyber-Krisen unter Berücksichtigung regulatorischer Meldepflichten.\n• Legal und Regulatory Crisis Management: Integration rechtlicher und regulatorischer Anforderungen in Krisenreaktion-Pläne für compliant Crisis Response.\n\n🔄 Adaptive Recovery und Resilience Building:\n• Dynamic Recovery Strategies: Entwicklung adaptiver Recovery-Strategien, die sich an die spezifische Art und das Ausmaß von Cyber-Vorfällen anpassen.\n• Lessons Learned Integration: Systematische Integration von Erfahrungen aus Sicherheitsvorfällen in BSI-Framework-Verbesserungen.\n• Resilience Metrics und KPIs: Definition und Monitoring von Resilience-Kennzahlen für kontinuierliche Verbesserung der Krisenbereitschaft.\n• Third-Party Crisis Coordination: Frameworks für koordinierte Krisenreaktion mit externen Partnern, Lieferanten und Dienstleistern.\n\n🎯 ADVISORI's Crisis Excellence Methodology:\n• Crisis Readiness Assessment: Umfassende Bewertung der aktuellen Krisenbereitschaft mit Gap-Analyse und Improvement-Roadmap.\n• Tabletop Exercise Design: Entwicklung maßgeschneiderter Krisenübungen für verschiedene Bedrohungsszenarien und Organisationsebenen.\n• Crisis Leadership Development: Training und Entwicklung von Führungskräften für effektive Krisenführung und -kommunikation.\n• Continuous Improvement Cycles: Etablierung kontinuierlicher Verbesserungsprozesse für Krisenbereitschaft basierend auf Threat Intelligence und Lessons Learned."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie stellt ADVISORI sicher, dass BSI-Compliance nicht die digitale Innovation hemmt, sondern als Enabler für sichere digitale Transformation fungiert?",
        answer: "Die Herausforderung moderner Cybersecurity liegt darin, robuste BSI-Compliance zu gewährleisten, ohne die Geschwindigkeit und Flexibilität zu beeinträchtigen, die für digitale Innovation erforderlich sind. ADVISORI hat innovative 'Security-as-an-Enabler'-Frameworks entwickelt, die BSI-Standards nahtlos in agile Entwicklungsprozesse integrieren und Sicherheit zum Katalysator für Innovation machen.\n\n🚀 Innovation-Friendly BSI Implementation:\n• DevSecOps BSI Integration: Nahtlose Integration von BSI-Anforderungen in CI/CD-Pipelines und agile Entwicklungsprozesse ohne Verlangsamung der Deployment-Zyklen.\n• API-First Security Architecture: BSI-konforme API-Sicherheitsframeworks, die Microservices und moderne Softwarearchitekturen optimal unterstützen.\n• Cloud-Native BSI Patterns: Entwicklung BSI-konformer Design Patterns für Cloud-native Anwendungen und Serverless-Architekturen.\n• Shift-Left Security Integration: Frühe Integration von BSI-Sicherheitsüberlegungen in den Entwicklungsprozess für kosteneffiziente Compliance.\n\n⚡ Agile BSI Governance Models:\n• Risk-Based Approval Processes: Entwicklung risikobasierter, beschleunigter Genehmigungsprozesse für Innovation-Projekte unter Beibehaltung der BSI-Compliance.\n• Innovation Sandbox Frameworks: Etablierung sicherer 'Spielwiesen' für Innovation-Experimente mit BSI-konformen Sicherheitskontrollen.\n• Continuous Compliance Monitoring: Real-time Compliance-Überwachung, die Innovationen ermöglicht während kontinuierliche BSI-Konformität sichergestellt wird.\n• Automated Security Testing: Integration automatisierter BSI-Compliance-Tests in Entwicklungspipelines für kontinuierliche Validierung.\n\n🛡️ Security-by-Design für Innovation Excellence:\n• Privacy-Preserving Innovation: Entwicklung von Techniken für datengetriebene Innovation unter strikter Einhaltung von BSI-Datenschutzprinzipien.\n• Zero-Trust Innovation Frameworks: Implementation von Zero-Trust-Architekturen, die Innovation fördern durch granulare, bedarfsbasierte Zugriffskontrolle.\n• Secure-by-Default Configurations: Entwicklung von Standard-Konfigurationen, die automatisch BSI-Compliance gewährleisten ohne manuelle Intervention.\n• Innovation Risk Modeling: Spezielle Risikobewertungsmodelle für innovative Technologien und Geschäftsmodelle.\n\n🎯 ADVISORI's Innovation-Security Excellence:\n• Innovation-Security Balance Assessment: Systematische Bewertung des optimalen Gleichgewichts zwischen Sicherheitsanforderungen und Innovationszielen.\n• Rapid Prototyping Security: BSI-konforme Frameworks für schnelle Prototypenerstellung und Proof-of-Concept-Entwicklung.\n• Change Velocity Optimization: Optimierung von Change-Management-Prozessen für maximale Innovationsgeschwindigkeit bei BSI-Compliance.\n• Future-Ready Architecture Design: Entwicklung adaptiver Sicherheitsarchitekturen, die zukünftige Innovationen antizipieren und unterstützen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Welche spezifischen Herausforderungen entstehen bei der BSI-Compliance für kritische Infrastrukturen (KRITIS) und wie adressiert ADVISORI die besonderen Anforderungen dieser Sektoren?",
        answer: "Kritische Infrastrukturen stehen unter beispiellosem Cyber-Bedrohungsdruck und unterliegen gleichzeitig den strengsten regulatorischen Anforderungen. Die BSI-Compliance für KRITIS-Betreiber erfordert spezialisierte Ansätze, die Operational Technology, Safety-Systeme und Business-IT nahtlos integrieren, während gleichzeitig höchste Verfügbarkeits- und Sicherheitsstandards gewährleistet werden. ADVISORI hat branchenspezifische KRITIS-Frameworks entwickelt, die diese einzigartigen Herausforderungen systematisch adressieren.\n\n🏭 KRITIS-spezifische BSI-Compliance-Herausforderungen:\n• OT-IT Convergence Security: Spezielle BSI-Frameworks für die sichere Konvergenz von Operational Technology und Information Technology in kritischen Infrastrukturen.\n• Safety-Security Integration: Harmonisierung von Safety (Funktionale Sicherheit) und Security (Cyber-Sicherheit) Anforderungen für integrierte Compliance-Strategien.\n• High-Availability Constraints: BSI-Implementierung unter strikten Verfügbarkeitsanforderungen ohne Kompromittierung der Sicherheit oder Betriebskontinuität.\n• Legacy System Integration: Spezialisierte Ansätze für BSI-Compliance bei kritischen Legacy-Systemen, die nicht modernisiert werden können.\n\n⚡ Sector-Specific BSI Excellence:\n• Energy Sector Specialization: Maßgeschneiderte BSI-Frameworks für Energieversorger unter Berücksichtigung von Smart Grid, Renewable Integration und Market Operations.\n• Healthcare Critical Infrastructure: Spezialisierte BSI-Compliance für Gesundheitswesen mit Fokus auf Patient Safety und Medical Device Security.\n• Transportation System Security: BSI-Frameworks für Verkehrsinfrastrukturen einschließlich Smart Transportation und Autonomous Vehicle Integration.\n• Water und Waste Management: Umweltspezifische BSI-Ansätze für Wasser- und Abfallwirtschaft mit Fokus auf Umweltschutz und Public Health.\n\n🛡️ Advanced KRITIS Protection Strategies:\n• Multi-Layer Defense Architecture: Entwicklung mehrstufiger Verteidigungsarchitekturen speziell für kritische Infrastrukturen mit redundanten Sicherheitskontrollen.\n• Threat Intelligence Integration: Integration spezialisierter KRITIS-Threat Intelligence in BSI-Compliance-Frameworks für proaktive Bedrohungsabwehr.\n• Supply Chain Security: Umfassende BSI-konforme Supply Chain Security für kritische Infrastrukturen mit Fokus auf Third-Party Risk Management.\n• Incident Response Coordination: Spezielle Incident Response-Frameworks für kritische Infrastrukturen mit Koordination zwischen Betreibern, BSI und anderen Behörden.\n\n🎯 ADVISORI's KRITIS Excellence Framework:\n• Regulatory Compliance Mapping: Systematische Zuordnung von BSI-Anforderungen zu sektorspezifischen Regulierungen und Standards.\n• Business Continuity Integration: Nahtlose Integration von BSI-Compliance in Business Continuity und Disaster Recovery Planning für kritische Services.\n• Stakeholder Coordination: Entwicklung von Governance-Strukturen für effektive Koordination zwischen verschiedenen KRITIS-Stakeholdern.\n• Continuous Monitoring Excellence: Implementation fortgeschrittener Monitoring-Systeme für Real-time Visibility in kritische Infrastruktur-Sicherheit."
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
