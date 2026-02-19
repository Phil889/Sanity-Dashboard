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
    console.log('Updating CIS Controls page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cis-controls' })
    
    if (!existingDoc) {
      throw new Error('Document "cis-controls" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Welche spezifischen Herausforderungen entstehen bei der CIS Controls Implementierung in komplexen, hybriden IT-Landschaften und wie adressiert ADVISORI diese systematisch?",
        answer: "Moderne Unternehmens-IT-Landschaften sind geprägt von Komplexität, Legacy-Systemen, Multi-Cloud-Umgebungen und heterogenen Technologie-Stacks. Diese Diversität stellt traditionelle Sicherheitsansätze vor erhebliche Herausforderungen und erfordert eine hochgradig adaptive CIS Controls Implementierung. ADVISORI entwickelt maßgeschneiderte Lösungsansätze, die der Realität komplexer IT-Ökosysteme Rechnung tragen.\n\n🔧 Komplexitäts-Management durch strukturierte Herangehensweise:\n• Legacy-System-Integration: Entwicklung von Bridging-Strategien für die Integration veralteter Systeme in moderne CIS Controls, ohne kritische Geschäftsprozesse zu gefährden oder kostspielige Komplettmigrationen zu erzwingen.\n• Multi-Cloud-Governance: Einheitliche Implementierung der CIS Controls über verschiedene Cloud-Provider hinweg durch standardisierte Security Baselines und automated compliance monitoring.\n• Shadow-IT-Discovery und -Integration: Systematische Identifikation und sichere Integration von ungenehmigten IT-Services in das formelle CIS Controls Framework.\n• Brownfield-Modernization: Stufenweise Modernisierung bestehender Infrastrukturen unter Beibehaltung der Geschäftskontinuität.\n\n⚙️ Technische Herausforderungen und Lösungsansätze:\n• Interoperabilität verschiedener Security Tools: Orchestrierung heterogener Sicherheitstools durch standardisierte APIs und Integrations-Frameworks für einheitliche CIS Controls Umsetzung.\n• Scalability bei wachsenden Infrastrukturen: Design von CIS Controls Implementierungen, die horizontal und vertikal skalieren können, ohne manuelle Anpassungen zu erfordern.\n• Performance-Impact-Minimierung: Optimierung der CIS Controls zur Minimierung von Latenz und System-Overhead, besonders bei kritischen Real-Time-Anwendungen.\n• Compliance-Automatisierung: Entwicklung automatisierter Compliance-Monitoring-Systeme, die kontinuierlich den Status aller CIS Controls über die gesamte IT-Landschaft hinweg überwachen.\n\n🏗️ Organisatorische Komplexität bewältigen:\n• Stakeholder-Alignment: Koordination zwischen IT, Compliance, Business Units und externen Service-Providern für kohärente CIS Controls Implementierung.\n• Change-Management in komplexen Organisationen: Entwicklung maßgeschneiderter Change-Management-Strategien, die verschiedene Organisationsebenen und -kulturen berücksichtigen.\n• Vendor-Management und Third-Party-Integration: Sichere Integration von Drittanbieter-Services und -Systemen in das CIS Controls Framework.\n• Dezentrale Teams koordinieren: Effektive Koordination verteilter IT-Teams bei der Implementierung einheitlicher CIS Controls Standards."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Wie gewährleistet ADVISORI die nachhaltige Verankerung der CIS Controls in der Unternehmenskultur und verhindert, dass sie zu einer oberflächlichen Compliance-Übung verkommen?",
        answer: "Die größte Herausforderung bei der CIS Controls Implementierung liegt nicht in der technischen Umsetzung, sondern in der nachhaltigen Verankerung in der Organisationskultur. Ohne echte kulturelle Transformation bleiben auch die besten technischen Controls wirkungslos. ADVISORI entwickelt ganzheitliche Ansätze, die Cybersicherheit als natürlichen Bestandteil der Arbeitsweise etablieren und über reine Compliance hinausgehen.\n\n🧠 Cultural Transformation durch systematisches Change Management:\n• Security Champions Network: Etablierung eines Netzwerks von Sicherheitsbotschaftern in allen Geschäftsbereichen, die als Multiplikatoren und erste Ansprechpartner für CIS Controls fungieren.\n• Gamification von Security Practices: Integration spielerischer Elemente in die CIS Controls Umsetzung, um intrinsische Motivation zu schaffen und Security-Awareness natürlich zu fördern.\n• Business-Unit-spezifische Anpassung: Maßgeschneiderte Kommunikation und Training für verschiedene Abteilungen, die deren spezifische Sprache und Herausforderungen berücksichtigt.\n• Continuous Learning Ecosystem: Aufbau kontinuierlicher Lernprogramme, die sich an neue Bedrohungen und technologische Entwicklungen anpassen.\n\n📈 Messbare Erfolgsverankerung:\n• Behavioral Security Metrics: Entwicklung von KPIs, die nicht nur technische Compliance messen, sondern auch Verhaltensänderungen und kulturelle Adoption quantifizieren.\n• Positive Reinforcement Programs: Systematische Anerkennung und Belohnung von Mitarbeitern, die proaktiv zur CIS Controls Umsetzung beitragen.\n• Real-Time Feedback Loops: Implementation von Systemen, die sofortiges Feedback zu Sicherheitsverhalten geben und positive Gewohnheiten verstärken.\n• Success Story Documentation: Sammlung und Kommunikation von Erfolgsgeschichten, die die praktischen Vorteile der CIS Controls für die tägliche Arbeit demonstrieren.\n\n🔄 Kontinuierliche Weiterentwicklung und Anpassung:\n• Adaptive Training Programs: Dynamische Anpassung von Schulungsinhalten basierend auf aktuellen Bedrohungen, Lessons Learned und individuellen Lernfortschritten.\n• Bottom-Up Innovation: Ermutigung von Mitarbeitern, eigene Verbesserungsvorschläge für CIS Controls Implementierung einzubringen und umzusetzen.\n• Cross-Functional Security Integration: Integration von Sicherheitsaspekten in bestehende Geschäftsprozesse, sodass Security zu einem natürlichen Teil der Arbeitsweise wird.\n• Executive Sponsorship und Vorbild-Funktion: Sichtbare Unterstützung und Vorbildfunktion des Managements bei der konsequenten Umsetzung der CIS Controls."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Welche Rolle spielen Automatisierung und KI bei der modernen CIS Controls Implementierung und wie positioniert sich ADVISORI an der Spitze dieser technologischen Evolution?",
        answer: "Die Integration von Automatisierung und Künstlicher Intelligenz transformiert die CIS Controls von statischen Sicherheitsrichtlinien zu dynamischen, selbstlernenden Cybersicherheits-Ökosystemen. ADVISORI positioniert sich als Vorreiter dieser technologischen Revolution und entwickelt KI-gestützte Ansätze, die nicht nur die Effizienz steigern, sondern auch die Wirksamkeit der CIS Controls exponentiell verbessern.\n\n🤖 AI-Enhanced CIS Controls der nächsten Generation:\n• Predictive Threat Detection: Einsatz von Machine Learning Algorithmen zur proaktiven Identifikation von Bedrohungen, bevor sie sich zu Sicherheitsvorfällen entwickeln können.\n• Automated Response Orchestration: Intelligente Automatisierung von Incident Response Prozessen, die basierend auf Bedrohungsart und -schwere automatisch angemessene Gegenmaßnahmen einleitet.\n• Behavioral Analytics für User und Entity Behavior Analytics (UEBA): KI-gestützte Analyse von Nutzerverhalten zur Erkennung von Anomalien und Insider Threats.\n• Self-Healing Security Infrastructure: Entwicklung von Systemen, die sich automatisch an neue Bedrohungen anpassen und Sicherheitslücken eigenständig schließen.\n\n⚡ Automatisierung für operative Exzellenz:\n• Zero-Touch Compliance Monitoring: Vollautomatisierte Überwachung aller CIS Controls mit Real-Time-Dashboards und automatischen Alerts bei Abweichungen.\n• Intelligent Policy Enforcement: KI-gestützte Durchsetzung von Sicherheitsrichtlinien, die Kontext und Geschäftsimpact berücksichtigt und adaptive Entscheidungen trifft.\n• Automated Vulnerability Management: Intelligente Priorisierung und automatische Behebung von Sicherheitslücken basierend auf Risikobewertung und Geschäftskritikalität.\n• Continuous Compliance Optimization: Selbstlernende Systeme, die CIS Controls Implementierung kontinuierlich optimieren und an neue Anforderungen anpassen.\n\n🚀 ADVISORI's Innovation Leadership:\n• Proprietary AI Security Models: Entwicklung eigener KI-Modelle, die speziell für CIS Controls Optimization trainiert sind und branchen- und unternehmensspezifische Anpassungen ermöglichen.\n• Human-AI Collaboration Frameworks: Design von Systemen, die menschliche Expertise mit KI-Capabilities optimal kombinieren und Security-Teams zu strategischen Advisors transformieren.\n• Explainable AI für Security Decisions: Implementation von KI-Systemen, die ihre Entscheidungsfindung transparent machen und Compliance mit Audit-Anforderungen gewährleisten.\n• Edge AI Security: Entwicklung von Edge-Computing-Lösungen, die CIS Controls auch in verteilten und offline-Umgebungen intelligent durchsetzen können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie bereitet ADVISORI Unternehmen auf zukünftige Cyber-Bedrohungen vor, die noch nicht existieren, und schafft resiliente CIS Controls Architekturen für unbekannte Herausforderungen?",
        answer: "In einer exponentiell beschleunigten digitalen Welt reicht es nicht aus, gegen bekannte Bedrohungen zu schützen. Die nächste Generation von CIS Controls muss Unternehmen gegen noch unbekannte Angriffsvektoren wappnen und die Fähigkeit zur schnellen Adaptation an neue Bedrohungslandschaften bieten. ADVISORI entwickelt zukunftsorientierte Sicherheitsarchitekturen, die auf Prinzipien der Antifragilität und kontinuierlichen Evolution basieren.\n\n🔮 Future-Proofing durch antifragile Security Design:\n• Modular Security Architecture: Entwicklung von CIS Controls Implementierungen mit modularen, austauschbaren Komponenten, die schnelle Anpassung an neue Bedrohungen ermöglichen.\n• Threat Imagination Workshops: Systematische Entwicklung von Zukunftsszenarien und hypothetischen Bedrohungen zur proaktiven Identifikation von Schwachstellen.\n• Adaptive Defense Mechanisms: Implementation von Sicherheitssystemen, die aus jedem Angriff lernen und ihre Abwehrstrategien automatisch weiterentwickeln.\n• Quantum-Ready Cryptography: Vorbereitung auf die Post-Quantum-Ära durch Migration zu quantum-resistenten Verschlüsselungsverfahren.\n\n🧬 Evolutionary Security durch kontinuierliche Innovation:\n• Red Team Innovation Labs: Etablierung interner Angriffsteams, die gezielt neue Angriffsmethoden entwickeln und die Verteidigungsfähigkeiten kontinuierlich herausfordern.\n• Cross-Industry Threat Intelligence: Aufbau branchenübergreifender Intelligence-Netzwerke zur frühzeitigen Erkennung emerging threats und Attack-Pattern.\n• Academic Partnerships: Kooperation mit Forschungseinrichtungen zur Integration neuester Cybersecurity-Forschung in praktische CIS Controls Implementierungen.\n• Open Source Intelligence Integration: Systematische Auswertung von OSINT-Quellen zur Identifikation neuer Bedrohungsvektoren und Attack-Techniques.\n\n🛡️ Resilience-First Security Philosophy:\n• Assume Breach Mentality: Design von CIS Controls unter der Annahme erfolgreicher Angriffe, mit Fokus auf Containment, Recovery und Kontinuität.\n• Multi-Layered Defense in Depth: Implementation redundanter Sicherheitsebenen, die auch bei Versagen einzelner Controls Gesamtschutz gewährleisten.\n• Business Continuity Integration: Enge Verzahnung von CIS Controls mit Business Continuity Planning zur Sicherstellung kritischer Geschäftsfunktionen auch bei schweren Kompromittierungen.\n• Stress Testing unbekannter Szenarien: Regelmäßige Belastungstests mit unkonventionellen Angriffsszenarien zur Identifikation unerwarteter Schwachstellen und Verbesserung der Gesamtresilienz."
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
