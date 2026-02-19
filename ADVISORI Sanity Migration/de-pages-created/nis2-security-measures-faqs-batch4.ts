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
    console.log('Updating NIS2 Security Measures page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-security-measures' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-security-measures" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie entwickelt ADVISORI eine skalierbare NIS2-Sicherheitsorganisation, die mit dem Unternehmenswachstum mitwächst?",
        answer: "Eine skalierbare NIS2-Sicherheitsorganisation muss dynamisch auf Wachstum, geografische Expansion und veränderte Geschäftsmodelle reagieren können. ADVISORI designt adaptive Organisationsstrukturen, die sowohl Compliance-Exzellenz als auch operative Flexibilität gewährleisten und dabei Kosteneffizienz über alle Wachstumsphasen maintainen.\n\n🏢 Scalable Organizational Design:\n• Modular Security Teams: Entwicklung modularer Sicherheitsteam-Strukturen, die bei Bedarf schnell erweitert oder rekonfiguriert werden können, ohne die Gesamteffektivität zu beeinträchtigen.\n• Hub-and-Spoke-Modelle: Zentrale Security-Excellence-Zentren mit dezentralen Umsetzungseinheiten für optimale Balance zwischen Standardisierung und lokaler Anpassungsfähigkeit.\n• Cross-Functional Integration: Nahtlose Integration von Cybersicherheitsfunktionen in bestehende Geschäftsprozesse zur Vermeidung von Silos und Redundanzen.\n• Competency-Based Scaling: Systematischer Aufbau von Sicherheitskompetenzen basierend auf Geschäftswachstum und sich entwickelnden Bedrohungslandschaften.\n\n⚡ Dynamic Resource Allocation:\n• Flexible Sourcing Models: Intelligente Mischung aus internen Teams, externen Spezialisten und Managed Services für optimale Kostenflexibilität.\n• Automated Scaling Mechanisms: Implementierung von Systemen, die automatisch auf veränderte Sicherheitsanforderungen reagieren und Ressourcen entsprechend anpassen.\n• Skills Development Pipelines: Systematische Entwicklung interner Cybersicherheitsexpertise mit klaren Karrierepfaden und Weiterbildungsprogrammen.\n• Global-Local Balance: Optimierung zwischen globalen Sicherheitsstandards und lokalen regulatorischen Anforderungen in verschiedenen Märkten.\n\n🎯 ADVISORIs Growth-Enabling Approach:\n• Predictive Scaling: Vorhersagemodelle für zukünftige Sicherheitsanforderungen basierend auf Geschäftswachstumsplänen und Marktentwicklungen.\n• Technology-Enabled Efficiency: Einsatz von Technologie zur Multiplikation menschlicher Expertise und Reduzierung des linearen Personalwachstums.\n• Cultural Scalability: Entwicklung einer Sicherheitskultur, die unabhängig von Organisationsgröße konsistent gelebt wird."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche Rolle spielt Human Factor Security in der NIS2-Strategie und wie entwickelt ADVISORI eine cyber-resiliente Unternehmenskultur?",
        answer: "Human Factor Security bildet oft das schwächste Glied in der Cybersicherheitskette und erfordert besondere Aufmerksamkeit in der NIS2-Strategie. ADVISORI entwickelt umfassende Programme zur Transformation der Unternehmenskultur, die Mitarbeiter von Sicherheitsrisiken zu Sicherheitsassetsumwandeln und dabei Produktivität und Mitarbeiterzufriedenheit fördern.\n\n👥 Cultural Transformation Programs:\n• Security Awareness Excellence: Entwicklung interaktiver, gamifizierter Schulungsprogramme, die Cybersicherheitsbewusstsein zu einem natürlichen Teil der Arbeitsroutine machen.\n• Leadership Security Champions: Ausbildung von Führungskräften zu Security Champions, die Sicherheitskultur authentisch vorleben und in ihren Teams verankern.\n• Behavioral Change Management: Wissenschaftlich fundierte Ansätze zur nachhaltigen Verhaltensänderung mit messbaren Verbesserungen in Sicherheitspraktiken.\n• Positive Security Culture: Fokus auf positive Verstärkung und Enablement statt auf Verbote und Strafen zur Förderung intrinsischer Motivation.\n\n🧠 Psychology-Driven Security Design:\n• Human-Centered Security UX: Design von Sicherheitssystemen, die intuitive Nutzung fördern und menschliche Schwächen kompensieren statt sie zu verstärken.\n• Cognitive Load Optimization: Minimierung der kognitiven Belastung durch Sicherheitsmaßnahmen zur Vermeidung von Security Fatigue und Workarounds.\n• Social Engineering Defense: Aufbau von Resilienz gegen Social Engineering-Angriffe durch realitätsnahe Simulation und Coaching.\n• Incident Learning Culture: Etablierung einer Lernkultur, die Sicherheitsvorfälle als Verbesserungschancen nutzt statt sie zu vertuschen.\n\n🎯 ADVISORIs Human-Centric Approach:\n• Personalized Security Training: Maßgeschneiderte Sicherheitsschulungen basierend auf Rollen, Risikoprofilen und individuellen Lernstilen.\n• Continuous Engagement: Langfristige Engagement-Strategien, die Sicherheitsbewusstsein über Jahre hinweg aufrechterhalten und vertiefen.\n• Measurement and Optimization: Wissenschaftliche Messung von Verhaltensänderungen und kontinuierliche Optimierung der Human Factor-Programme."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie integriert ADVISORI NIS2-Sicherheitsmaßnahmen in bestehende IT-Infrastrukturen ohne operative Disruption?",
        answer: "Die Integration von NIS2-Sicherheitsmaßnahmen in bestehende IT-Infrastrukturen erfordert chirurgische Präzision, um Compliance zu erreichen ohne kritische Geschäftsprozesse zu gefährden. ADVISORI entwickelt Migrationsstrategie, die minimale Downtime, maximale Kompatibilität und kontinuierliche Geschäftsoperationen gewährleisten.\n\n🔧 Non-Disruptive Integration Strategies:\n• Shadow-Mode Implementation: Parallele Implementierung neuer Sicherheitssysteme im Shadow-Mode zur ausführlichen Testing vor produktivem Einsatz.\n• Gradual Migration Patterns: Stufenweise Migration kritischer Systeme mit rollback-fähigen Übergangsphasen und kontinuierlicher Risikoüberwachung.\n• Legacy System Modernization: Intelligente Modernisierung veralteter Systeme durch Security-Wrapper und API-Gateways statt kompletter Ersetzung.\n• Zero-Downtime Deployment: Einsatz von Blue-Green-Deployments und Canary-Releases für unterbrechungsfreie Sicherheits-Updates.\n\n⚡ Infrastructure Compatibility Excellence:\n• Hybrid Security Architecture: Design von Sicherheitslösungen, die nahtlos zwischen On-Premise, Cloud und Hybrid-Umgebungen operieren.\n• API-First Integration: Entwicklung API-basierter Sicherheitslösungen für flexible Integration mit bestehenden Systemen ohne proprietäre Abhängigkeiten.\n• Microservices Security: Implementierung granularer Sicherheitsservices, die unabhängig deployed und skaliert werden können.\n• Backward Compatibility: Sicherstellung der Kompatibilität mit Legacy-Systemen durch Adapter-Pattern und Protocol-Translation.\n\n🎯 ADVISORIs Seamless Transition:\n• Risk-Minimized Rollouts: Entwicklung von Rollout-Strategien, die Risiken systematisch minimieren und jederzeit Rollback-Optionen bereithalten.\n• Business Continuity Focus: Priorisierung der Geschäftskontinuität bei allen Implementierungsentscheidungen mit 24/7-Support während Übergangsphasen.\n• Performance Optimization: Kontinuierliche Überwachung und Optimierung der System-Performance während und nach der Integration."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie bereitet ADVISORI Organisationen auf NIS2-Audits und regulatorische Prüfungen vor?",
        answer: "NIS2-Audits und regulatorische Prüfungen stellen kritische Meilensteine dar, die über die Zukunft der Organisation entscheiden können. ADVISORI entwickelt umfassende Audit-Readiness-Programme, die nicht nur Compliance demonstrieren, sondern auch die operative Exzellenz und strategische Weitsicht der Organisation unter Beweis stellen.\n\n📋 Comprehensive Audit Preparedness:\n• Documentation Excellence: Systematische Aufbereitung aller compliance-relevanten Dokumentationen mit automated tracking und version control für lückenlose Nachweisführung.\n• Evidence Management Systems: Implementierung intelligenter Systeme zur kontinuierlichen Sammlung und Aufbereitung von Compliance-Evidenzen.\n• Simulation-Based Preparation: Realitätsnahe Audit-Simulationen mit externen Prüfern zur Identifikation und Behebung von Schwachstellen vor dem echten Audit.\n• Cross-Functional Response Teams: Training interdisziplinärer Teams für koordinierte und kompetente Antworten auf Auditor-Fragen.\n\n🛡️ Proactive Compliance Demonstration:\n• Continuous Compliance Monitoring: Implementierung von Real-time-Compliance-Dashboards, die jederzeit den aktuellen NIS2-Status transparent darstellen.\n• Automated Reporting: Generierung automatisierter Compliance-Reports mit drill-down-Fähigkeiten für detaillierte Auditor-Anfragen.\n• Best Practice Showcase: Dokumentation von Security-Innovationen und Best Practices, die über Mindestanforderungen hinausgehen.\n• Risk Management Maturity: Demonstration einer fortgeschrittenen Risikomanagement-Kultur mit messbaren Verbesserungen über Zeit.\n\n🎯 ADVISORIs Audit Excellence:\n• Regulatory Relationship Management: Aufbau konstruktiver Beziehungen zu Regulatoren durch proaktive Kommunikation und Transparenz.\n• Continuous Improvement Demonstration: Nachweis systematischer Verbesserungsprozesse und Lernfähigkeit der Organisation.\n• Strategic Compliance Communication: Präsentation der Compliance-Aktivitäten als strategische Geschäftsfunktion statt als reactive Pflichtübung."
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
    console.log('✅ C-Level FAQs batch 4 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
