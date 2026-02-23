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
    console.log('Updating NIST Cybersecurity Framework page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nist-cybersecurity-framework' })
    
    if (!existingDoc) {
      throw new Error('Document "nist-cybersecurity-framework" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie adressiert ADVISORI die Herausforderungen der NIST CSF-Implementierung in kritischen Infrastrukturen und wie werden die speziellen Anforderungen von KRITIS-Betreibern berücksichtigt?",
        answer: "Kritische Infrastrukturen (KRITIS) stehen vor einzigartigen Cybersicherheitsherausforderungen, die weit über traditionelle IT-Sicherheit hinausgehen. ADVISORI entwickelt spezialisierte NIST CSF-Implementierungen für KRITIS-Betreiber, die sowohl die regulatorischen Anforderungen als auch die besonderen operativen Realitäten systemkritischer Infrastrukturen berücksichtigen.\n\n🏭 KRITIS-spezifische Herausforderungen und Lösungsansätze:\n• Safety-Security Integration: Harmonisierung von Funktionssicherheit (Safety) und Cybersicherheit (Security) in kritischen Systemen, wo Cyberangriffe physische Schäden und Menschenleben gefährden können.\n• OT/IT-Konvergenz: Spezielle Frameworks für die sichere Integration von Operational Technology (OT) und Information Technology (IT) in kritischen Produktions- und Steuerungssystemen.\n• 24/7-Verfügbarkeit: Entwicklung von Sicherheitsmaßnahmen, die die kontinuierliche Verfügbarkeit kritischer Services nicht beeinträchtigen.\n• Legacy System Protection: Schutz alter, oft nicht patchbarer Industriesysteme durch kompensatorische Kontrollen und Netzwerksegmentierung.\n\n🛡️ Regulatorische Compliance und Governance:\n• NIS2-Konformität: Vollständige Integration der NIS2-Richtlinie in die NIST CSF-Implementierung für EU-basierte kritische Infrastrukturen.\n• BSI-KRITIS-VO: Berücksichtigung der deutschen KRITIS-Verordnung und deren spezifische Anforderungen an Sicherheitsmaßnahmen und Meldepflichten.\n• Sector-Specific Standards: Integration branchenspezifischer Standards (z.B. NERC CIP für Energieversorger, NIST 800-82 für Industriesteuerungssysteme).\n• Incident Reporting Automation: Automatisierte Systeme für die zeitnahe Meldung von Cybersicherheitsvorfällen an Aufsichtsbehörden.\n\n⚡ Technische Implementierungsstrategien:\n• Air-Gapped Network Design: Entwicklung sicherer Netzwerkarchitekturen mit physischer Isolation kritischer Systeme.\n• Industrial IoT Security: Spezialisierte Sicherheitskonzepte für Industrial Internet of Things (IIoT) und Edge Computing in kritischen Umgebungen.\n• Quantum-Safe Cryptography: Vorbereitung auf Post-Quantum-Kryptographie für langfristige Sicherheit kritischer Infrastrukturen.\n• Resilient System Design: Entwicklung selbstheilender und fehlertoleranter Systeme, die auch bei partiellen Kompromittierungen funktionsfähig bleiben.\n\n🎯 ADVISORI's KRITIS-Expertise:\n• Multi-Stakeholder Coordination: Koordination zwischen Betreibern, Aufsichtsbehörden, und anderen kritischen Infrastrukturen für kollektive Cybersicherheit.\n• Crisis Management Integration: Integration von Cybersicherheit in bestehende Krisenmanagement- und Notfallpläne.\n• Public-Private Partnership: Facilitierung der Zusammenarbeit zwischen privaten KRITIS-Betreibern und öffentlichen Sicherheitsbehörden.\n• Continuous Threat Assessment: Kontinuierliche Bewertung spezifischer Bedrohungen gegen kritische Infrastrukturen und entsprechende Framework-Anpassungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Wie gestaltet ADVISORI die Zukunftssicherheit von NIST CSF-Implementierungen angesichts aufkommender Technologien wie Quantum Computing, 6G-Netzwerken und autonomen Systemen?",
        answer: "Die rasante Entwicklung neuer Technologien stellt bestehende Cybersicherheits-Frameworks vor fundamentale Herausforderungen. ADVISORI entwickelt zukunftssichere NIST CSF-Implementierungen, die nicht nur aktuelle Bedrohungen abwehren, sondern auch proaktiv auf die Sicherheitsimplikationen emergenter Technologien vorbereitet sind.\n\n🔮 Quantum Computing und Post-Quantum-Sicherheit:\n• Quantum Threat Assessment: Bewertung der langfristigen Auswirkungen von Quantum Computing auf bestehende Verschlüsselungsinfrastrukturen und Entwicklung von Migrationsplänen.\n• Post-Quantum Cryptography Implementation: Proaktive Integration quantum-resistenter Kryptographiealgorithmen in alle Framework-Funktionen.\n• Hybrid Cryptographic Strategies: Entwicklung von Übergangsstrategien, die klassische und Post-Quantum-Kryptographie kombinieren.\n• Quantum Key Distribution: Evaluierung und Integration von Quantum Key Distribution (QKD) für höchste Sicherheitsanforderungen.\n\n📡 6G und Hyperconnectivity Security:\n• Edge-to-Cloud Security: Entwicklung von Sicherheitsarchitekturen für ultra-low-latency, edge-basierte Computing-Paradigmen.\n• Massive IoT Security: Skalierbare Sicherheitslösungen für Milliarden vernetzter Geräte in 6G-Umgebungen.\n• Network Slicing Security: Spezialisierte Sicherheitskonzepte für isolierte, zweckgebundene Netzwerk-Slices.\n• AI-Native Security: Integration von KI-basierten Sicherheitslösungen, die für die Komplexität und Geschwindigkeit von 6G-Netzwerken optimiert sind.\n\n🤖 Autonome Systeme und AI Security:\n• AI Model Security: Schutz von Machine Learning-Modellen vor Adversarial Attacks, Model Poisoning und Model Extraction.\n• Autonomous System Governance: Entwicklung von Governance-Frameworks für autonome Systeme mit Cybersicherheits-Oversight.\n• Human-AI Collaboration Security: Sicherheitskonzepte für die sichere Zusammenarbeit zwischen Menschen und autonomen Systemen.\n• Explainable AI for Security: Implementation von erklärbarer KI in Sicherheitssystemen für bessere Entscheidungstransparenz.\n\n🔧 Future-Proofing Methodologies:\n• Technology Horizon Scanning: Kontinuierliche Überwachung technologischer Entwicklungen und deren Sicherheitsimplikationen.\n• Adaptive Framework Architecture: Entwicklung modularer, erweiterbarer Framework-Architekturen, die neue Technologien nahtlos integrieren können.\n• Scenario-Based Planning: Entwicklung multipler Zukunftsszenarien und entsprechender Sicherheitsstrategien.\n• Innovation Lab Integration: Zusammenarbeit mit Forschungseinrichtungen und Innovation Labs zur frühzeitigen Evaluierung emergenter Technologien.\n\n🎯 Strategic Future Readiness:\n• Digital Twin Security: Sicherheitskonzepte für Digital Twins und ihre Integration in physische Systeme.\n• Metaverse Security Architecture: Vorbereitung auf Sicherheitsherausforderungen in virtuellen und augmented Reality-Umgebungen.\n• Sustainable Cybersecurity: Integration von Nachhaltigkeitsaspekten in Cybersicherheitsstrategien für umweltbewusste Technologieadoption."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie implementiert ADVISORI NIST CSF-basierte Cybersicherheitsmetriken und KPIs, die sowohl technische Performance als auch Geschäftswert messbar machen und C-Level-Entscheidungen unterstützen?",
        answer: "Effektive Cybersicherheitsmetriken sind entscheidend für die Demonstration des Geschäftswerts von Sicherheitsinvestitionen und die Unterstützung strategischer Entscheidungen. ADVISORI entwickelt umfassende NIST CSF-basierte Mess- und Bewertungssysteme, die technische Sicherheitsperformance in geschäftsrelevante KPIs übersetzen und C-Level-Führungskräften actionable Intelligence bieten.\n\n📊 Multi-Level Metrics Architecture:\n• Technical Metrics (L1): Operational-level Metriken für IT- und Sicherheitsteams (z.B. Mean Time to Detection, Patch Coverage Rate, Security Control Effectiveness).\n• Business Metrics (L2): Management-level Metriken, die technische Performance in Geschäftskontext übersetzen (z.B. Business Impact Score, Cyber Risk Exposure, Compliance Coverage).\n• Strategic Metrics (L3): Executive-level KPIs für C-Suite und Board (z.B. Cyber Resilience Index, Security ROI, Business Enablement Score).\n\n💰 Financial and Business Impact Metrics:\n• Cyber Risk Quantification: Quantifizierung von Cybersicherheitsrisiken in finanziellen Begriffen (Value at Risk, Expected Annual Loss).\n• Security Investment ROI: Messung des Return on Investment für Cybersicherheitsinvestitionen mit klaren Kosten-Nutzen-Analysen.\n• Business Continuity Metrics: Bewertung der Auswirkungen von Cybersicherheitsmaßnahmen auf Geschäftskontinuität und operative Effizienz.\n• Customer Trust Index: Messung des Einflusses von Cybersicherheitshaltung auf Kundenvertrauen und -bindung.\n\n🎯 Framework-Specific Performance Indicators:\n• Maturity Assessment Metrics: Kontinuierliche Bewertung der NIST CSF-Maturität über alle fünf Kernfunktionen hinweg.\n• Control Effectiveness Metrics: Quantitative Bewertung der Wirksamkeit implementierter Sicherheitskontrollen.\n• Gap Closure Rate: Verfolgung des Fortschritts bei der Schließung identifizierter Sicherheitslücken.\n• Framework Alignment Score: Bewertung der Alignment zwischen Cybersicherheitsstrategie und Geschäftszielen.\n\n📈 Advanced Analytics und Predictive Metrics:\n• Predictive Risk Indicators: Frühindikatoren für potenzielle Cybersicherheitsprobleme basierend auf historischen Daten und Trend-Analysen.\n• Benchmark Comparison: Kontinuierlicher Vergleich mit Branchen-Benchmarks und Best Practices.\n• Threat Landscape Correlation: Korrelation interner Sicherheitsmetriken mit externen Bedrohungslandschaft-Indikatoren.\n• Automated Reporting und Visualization: Real-time Dashboards und automatisierte Berichterstattung für verschiedene Stakeholder-Ebenen.\n\n🎪 Executive Decision Support:\n• Strategic Planning Support: Datengestützte Unterstützung für langfristige Cybersicherheitsplanung und Budgetentscheidungen.\n• Investment Prioritization: KPI-basierte Empfehlungen für die Priorisierung von Cybersicherheitsinvestitionen.\n• Risk Appetite Alignment: Metriken zur Bewertung der Alignment zwischen aktueller Risikohaltung und definierter Risikotoleranz.\n• Board Reporting Excellence: Executive-ready Reports und Präsentationen, die komplexe Sicherheitsdaten in actionable Business Intelligence übersetzen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie stellt ADVISORI sicher, dass NIST CSF-Implementierungen auch bei dynamischen Unternehmensumgebungen mit häufigen organisatorischen Veränderungen, Spin-offs und Joint Ventures adaptiv bleiben?",
        answer: "Moderne Unternehmenslandschaften sind geprägt von kontinuierlichen Veränderungen, strategischen Neuausrichtungen und komplexen Partnerschaften. ADVISORI entwickelt adaptive NIST CSF-Implementierungen, die organisch mit Unternehmensveränderungen wachsen und bei strukturellen Transformationen ihre Wirksamkeit und Relevanz beibehalten.\n\n🔄 Adaptive Framework Architecture:\n• Modular Security Design: Entwicklung modularer Sicherheitsarchitekturen, die bei Organisationsveränderungen schnell rekonfiguriert werden können, ohne die Gesamtintegrität zu beeinträchtigen.\n• Federated Security Governance: Implementierung föderierter Governance-Modelle, die zentrale Kontrolle mit dezentraler Flexibilität kombinieren.\n• API-First Security: Entwicklung API-basierter Sicherheitsservices, die einfache Integration und Dekopplung von Geschäftseinheiten ermöglichen.\n• Configuration Management: Automatisierte Configuration Management-Systeme für die schnelle Anpassung von Sicherheitskontrollen an neue Organisationsstrukturen.\n\n🤝 M&A und Joint Venture Integration:\n• Rapid Due Diligence Frameworks: Standardisierte Cybersicherheits-Due-Diligence-Prozesse für schnelle Bewertung von Akquisitionszielen oder Joint Venture-Partnern.\n• Integration Playbooks: Vordefinierte Playbooks für die schnelle und sichere Integration neuer Geschäftseinheiten in bestehende NIST CSF-Strukturen.\n• Cultural Alignment Strategies: Methoden zur Harmonisierung verschiedener Cybersicherheitskulturen und -praktiken bei Unternehmenszusammenschlüssen.\n• Transition Security: Spezielle Sicherheitsmaßnahmen für Übergangsphasen bei M&A-Aktivitäten, wo traditionelle Kontrollen möglicherweise nicht greifen.\n\n⚡ Organizational Change Management:\n• Change Impact Assessment: Systematische Bewertung der Auswirkungen organisatorischer Veränderungen auf bestehende Cybersicherheitskontrollen und -prozesse.\n• Stakeholder Mapping und Communication: Klare Kommunikationsstrategien für Cybersicherheitsveränderungen während organisatorischer Transitionen.\n• Training und Awareness Adaptation: Flexible Schulungs- und Awareness-Programme, die sich schnell an neue Organisationsstrukturen anpassen lassen.\n• Performance Monitoring während Transitionen: Spezielle Monitoring-Verfahren zur Sicherstellung der Cybersicherheitseffektivität während Veränderungsphasen.\n\n🎯 Strategic Flexibility und Future-Proofing:\n• Scenario-Based Planning: Entwicklung multipler Szenarios für potenzielle Organisationsveränderungen und entsprechende Sicherheitsstrategien.\n• Contract und Vendor Flexibility: Flexible Vertragsgestaltung mit Sicherheitsanbietern, die schnelle Skalierung oder Anpassung ermöglicht.\n• Cloud-Native Adaptability: Nutzung cloud-nativer Sicherheitsdienste für maximale Flexibilität bei Organisationsveränderungen.\n• Continuous Architecture Review: Regelmäßige Überprüfung und Anpassung der Sicherheitsarchitektur an sich ändernde Geschäftsanforderungen und organisatorische Strukturen."
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
