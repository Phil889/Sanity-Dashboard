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
    console.log('Updating EU AI Act AI Compliance Framework page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act-ai-compliance-framework' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act-ai-compliance-framework" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist ein strukturiertes AI Compliance Framework für die C-Suite unter der EU AI Act mehr als nur regulatorische Compliance und wie positioniert ADVISORI dies strategisch?",
        answer: "Für die C-Suite stellt ein AI Compliance Framework unter der EU AI Act eine fundamentale Transformation der Unternehmensführung dar – es geht weit über die reine Erfüllung regulatorischer Anforderungen hinaus. Ein strategisch ausgerichtetes Framework wird zum zentralen Enabler für verantwortungsvolle KI-Innovation und nachhaltiges Geschäftswachstum. ADVISORI versteht AI Compliance als strategischen Wettbewerbsvorteil, der Vertrauen schafft und neue Marktchancen eröffnet.\n\n🎯 Strategische Imperative für die Führungsebene:\n• Vertrauensbildung und Reputationsschutz: Ein robustes AI Compliance Framework signalisiert Stakeholdern verantwortungsvolle Unternehmensführung und schützt vor Reputationsrisiken durch KI-bedingte Vorfälle.\n• Marktdifferenzierung durch Ethical AI: Unternehmen mit nachweislich ethischen KI-Praktiken gewinnen Wettbewerbsvorteile bei kunden- und partnerseitigen Due-Diligence-Prozessen.\n• Innovation ohne Risiko: Strukturierte Governance ermöglicht es, KI-Technologien sicher und schnell zu skalieren, ohne regulatorische oder ethische Fallen zu umgehen.\n• Investoren- und Stakeholder-Confidence: ESG-bewusste Investoren bevorzugen zunehmend Unternehmen mit transparenten und verantwortungsvollen AI-Praktiken.\n\n🛡️ Der ADVISORI-Ansatz für strategisches AI Compliance:\n• Business-aligned Framework Design: Wir entwickeln AI Governance-Strukturen, die nicht nur Compliance sicherstellen, sondern auch Ihre Geschäftsstrategie und Innovationsziele unterstützen.\n• Risk-based Innovation Enablement: Unser Framework balanciert Risikomanagement mit Innovationsfreiheit und schafft klare Leitplanken für verantwortungsvolle KI-Entwicklung.\n• Stakeholder Integration: Wir integrieren verschiedene Unternehmensbereiche (Legal, IT, Business, Ethics) in kohärente Governance-Prozesse.\n• Continuous Adaptation Mechanisms: Unser Framework ist darauf ausgelegt, sich dynamisch an neue regulatorische Entwicklungen und technologische Fortschritte anzupassen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifiziert die C-Suite den ROI eines AI Compliance Frameworks und welche konkreten Business-Benefits bietet ADVISORI's Ansatz jenseits der Risikominimierung?",
        answer: "Der Return on Investment eines AI Compliance Frameworks manifestiert sich sowohl in messbaren Kosteneinsparungen als auch in strategischen Wertschöpfungspotenzialen. ADVISORI positioniert AI Compliance nicht als Kostenzentrum, sondern als Investition in nachhaltige Wettbewerbsfähigkeit und Geschäftswachstum durch verantwortungsvolle Innovation.\n\n💰 Quantifizierbare Werttreiber:\n• Vermeidung von Regulierungsstrafen: EU AI Act Strafen können bis zu 7% des weltweiten Jahresumsatzes betragen – ein robustes Framework minimiert diese existenziellen Risiken erheblich.\n• Reduzierte Compliance-Kosten: Strukturierte Prozesse senken den Aufwand für regulatorische Audits, Dokumentation und ad-hoc Compliance-Maßnahmen um 40-60%.\n• Schnellere Time-to-Market: Klare AI Governance-Prozesse beschleunigen die Markteinführung neuer KI-basierter Produkte und Services durch vordefinierte Approval-Workflows.\n• Versicherungs- und Finanzierungsvorteile: Nachweisbare AI Governance kann zu günstigeren Cyber-Versicherungsprämien und besseren Kreditkonditionen führen.\n\n📈 Strategische Business-Benefits von ADVISORI:\n• Competitive Differentiation: Unser Framework ermöglicht es Ihnen, Ethical AI als Marktdifferenzierungsmerkmal zu nutzen und Premium-Pricing für vertrauensvolle AI-Services zu rechtfertigen.\n• Talent Attraction & Retention: Eine starke AI Ethics-Kultur zieht Top-Talente an, die in verantwortungsvollen Organisationen arbeiten möchten.\n• Partnership & M&A Readiness: Strukturierte AI Governance erleichtert Due-Diligence-Prozesse bei Partnerschaften und Akquisitionen erheblich.\n• Innovation Velocity: Klare ethische Leitplanken ermöglichen es Entwicklungsteams, schneller und mutiger zu innovieren, da Risikogrenzen klar definiert sind.\n• Customer Trust Premium: Kunden sind bereit, für nachweislich ethische AI-Services Preisaufschläge zu zahlen, insbesondere in sensiblen Bereichen wie Healthcare und Finance."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Die KI-Landschaft entwickelt sich exponentiell – von Generative AI bis zu Autonomous Systems. Wie stellt ADVISORI sicher, dass unser AI Compliance Framework zukunftssicher und technologie-agnostisch bleibt?",
        answer: "In einer Ära rasanter KI-Evolution ist statische Compliance-Governance obsolet. ADVISORI entwickelt adaptive und technologie-agnostische Frameworks, die sich flexibel an neue KI-Paradigmen anpassen können, ohne die Grundprinzipien verantwortungsvoller AI-Governance zu kompromittieren. Unser Ansatz basiert auf zeitlosen ethischen Prinzipien, die in dynamischen operativen Strukturen verankert sind.\n\n🔄 Adaptive Framework-Architektur:\n• Principle-based Governance: Anstatt spezifische Technologien zu regulieren, etablieren wir universelle ethische Prinzipien (Fairness, Transparenz, Accountability), die auf alle KI-Systeme anwendbar sind.\n• Modular Compliance Components: Unser Framework besteht aus modularen Bausteinen, die je nach Technologie und Anwendungsfall kombiniert und erweitert werden können.\n• Risk-agnostic Assessment Frameworks: Wir entwickeln Bewertungsmethodologien, die unabhängig von der zugrundeliegenden KI-Technologie funktionieren und sich auf Outcomes fokussieren.\n• Continuous Learning Mechanisms: Integration von Feedback-Loops, die das Framework kontinuierlich an neue Erkenntnisse und regulatorische Entwicklungen anpassen.\n\n🚀 ADVISORI's Future-Ready Approach:\n• Technology Horizon Scanning: Wir überwachen aktiv emerging AI-Technologies und integrieren präventiv entsprechende Governance-Überlegungen in bestehende Frameworks.\n• Regulatory Intelligence: Kontinuierliche Analyse globaler AI-Regulierungstrends und proaktive Anpassung unserer Frameworks an sich abzeichnende regulatorische Entwicklungen.\n• Cross-Industry Learning: Transfer von Best Practices zwischen verschiedenen Industrien und Anwendungsfällen zur kontinuierlichen Framework-Optimierung.\n• Stakeholder Ecosystem Integration: Aufbau von Netzwerken mit Regulatoren, Technologieanbietern und Peer-Unternehmen für kollektive Framework-Weiterentwicklung.\n• AI-powered Compliance: Nutzung von KI-Tools zur Automatisierung und Optimierung von Compliance-Prozessen selbst – AI für bessere AI Governance."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI AI Compliance von einer reaktiven Notwendigkeit zu einem proaktiven Geschäfts-Enabler, der Innovation beschleunigt statt bremst?",
        answer: "ADVISORI revolutioniert die traditionelle Sicht auf AI Compliance, indem wir es von einem reaktiven Hindernis zu einem proaktiven Innovationskatalysator transformieren. Unser Ansatz integriert Compliance-Überlegungen nahtlos in den Innovationsprozess und schafft eine Kultur, in der ethische KI-Entwicklung zum Wettbewerbsvorteil wird, nicht zur Bremse.\n\n🚀 Von Compliance zu Innovation Excellence:\n• Innovation-first Framework Design: Wir designen Governance-Strukturen, die Innovation ermöglichen und beschleunigen, anstatt sie durch bürokratische Hürden zu behindern.\n• Embedded Ethics Approach: Integration ethischer Überlegungen direkt in Design- und Entwicklungsprozesse (Ethics by Design), sodass Compliance natürlich entsteht, nicht nachträglich erzwungen wird.\n• Speed-to-Market Optimization: Entwicklung von Rapid-Assessment-Tools und Pre-approved AI-Pattern-Libraries, die Entwicklungsteams sofortige Klarheit über Compliance-Status geben.\n• Competitive Advantage through Trust: Positionierung ethischer AI-Praktiken als Premium-Differenzierungsmerkmal, das neue Marktsegmente und Preismodelle ermöglicht.\n\n💡 ADVISORI's Innovation-Enablement Strategies:\n• AI Governance Automation: Entwicklung intelligenter Compliance-Tools, die Entwicklern Echtzeit-Feedback zu ethischen Implikationen ihrer AI-Systeme geben.\n• Cross-functional Innovation Teams: Etablierung interdisziplinärer Teams, die Business, Technology und Ethics von Beginn an integrieren.\n• Regulatory Sandbox Strategies: Unterstützung bei der Nutzung regulatorischer Sandboxes und Innovation-friendly Rahmenwerke für sichere Experimente.\n• Stakeholder Co-Innovation: Facilitation von Stakeholder-Dialogen (Kunden, Regulatoren, Ethik-Experten) zur gemeinsamen Entwicklung verantwortungsvoller AI-Lösungen.\n• Innovation Metrics Integration: Entwicklung von KPIs, die sowohl Compliance-Exzellenz als auch Innovationsgeschwindigkeit messen und optimieren.\n• Cultural Transformation: Change Management-Programme, die AI Ethics als strategischen Enabler in der Unternehmenskultur verankern."
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
    console.log('✅ C-Level FAQs batch 1 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
