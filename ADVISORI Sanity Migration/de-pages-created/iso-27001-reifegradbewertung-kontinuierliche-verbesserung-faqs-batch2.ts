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
    console.log('Updating ISO 27001 Reifegradbewertung und kontinuierliche Verbesserung page with C-Level FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-reifegradbewertung-kontinuierliche-verbesserung' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-reifegradbewertung-kontinuierliche-verbesserung" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie können wir die Ergebnisse unserer ISMS-Reifegradbewertung nutzen, um strategische IT-Investitionsentscheidungen zu optimieren und das Budget effektiver zu allokieren?",
        answer: "Die Ergebnisse einer professionellen ISMS-Reifegradbewertung liefern der Geschäftsführung entscheidende Daten für strategische IT-Investitionsentscheidungen und ermöglichen eine wissenschaftlich fundierte Budgetallokation. Anstatt Sicherheitsinvestitionen als notwendige Kosten zu betrachten, werden sie zu strategischen Wertschöpfungsinstrumenten mit messbarem ROI und klaren Business Cases.\n\n💰 Strategische Investitionsoptimierung durch Reifegradbewertung:\n• Risiko-basierte Priorisierung: Identifikation der kosteneffektivsten Sicherheitsmaßnahmen durch quantitative Risikobewertung und ROI-Analyse pro Investitionsbereich.\n• Technology Roadmap Alignment: Abstimmung von Sicherheitsinvestitionen mit strategischen Technologie-Roadmaps für Synergieeffekte und Kosteneinsparungen.\n• Vendor Consolidation Opportunities: Identifikation von Optimierungspotenzialen durch Standardisierung und Konsolidierung der Security-Tool-Landschaft.\n• Automation Investment Planning: Priorisierung von Automatisierungsinvestitionen basierend auf identifizierten manuellen Prozessen und deren Kosteneinsparungspotential.\n\n📊 Datengestützte Budgetallokation:\n• Quantifizierte Risikoreduktion: Konkrete Berechnung der Risikoreduktion pro investiertem Euro für evidenzbasierte Budgetentscheidungen.\n• Compliance Cost Optimization: Optimierung der Compliance-Kosten durch Identifikation überlappender Anforderungen und gemeinsamer Kontrollmechanismen.\n• Preventive vs. Reactive Spending: Strategische Verlagerung von reaktiven Incident-Response-Kosten zu präventiven Sicherheitsmaßnahmen mit besserem ROI.\n• Multi-Year Investment Planning: Entwicklung mehrjähriger Investitionspläne mit klaren Meilensteinen und messbaren Verbesserungszielen.\n\n🎯 ADVISORIs Investment Intelligence Approach:\n• Business Case Development: Erstellung detaillierter Business Cases für jede empfohlene Sicherheitsinvestition mit ROI-Berechnungen und Payback-Perioden.\n• Total Cost of Ownership Analysis: Umfassende TCO-Analysen für vorgeschlagene Sicherheitslösungen inklusive versteckter Kosten und langfristiger Auswirkungen.\n• Strategic Technology Alignment: Sicherstellung, dass Sicherheitsinvestitionen strategische Geschäftsziele unterstützen und digitale Transformationsinitiativen ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche organisatorischen Veränderungen sind erforderlich, um eine Kultur der kontinuierlichen ISMS-Verbesserung zu etablieren, und wie messen wir deren Erfolg?",
        answer: "Die Etablierung einer Kultur der kontinuierlichen ISMS-Verbesserung erfordert fundamentale organisatorische Transformationen, die über technische Implementierungen hinausgehen. Es geht um die Schaffung einer learning organization, in der Sicherheitsexzellenz nicht nur verwaltet, sondern kontinuierlich vorangetrieben wird. Diese kulturelle Transformation ist entscheidend für nachhaltigen Sicherheitserfolg und organisationale Resilienz.\n\n🏢 Organisatorische Transformation für Security Excellence:\n• Leadership Commitment Integration: Verankerung von Informationssicherheit in strategischen Führungsstrukturen durch regelmäßige C-Level Security Reviews und KPI-Integration in Executive Compensation.\n• Cross-functional Security Champions: Etablierung von Sicherheitsbotschaftern in allen Geschäftsbereichen, die kontinuierliche Verbesserung fördern und Sicherheitsbewusstsein in ihre Teams tragen.\n• Agile Security Governance: Implementation agiler Governance-Strukturen, die schnelle Anpassungen an neue Bedrohungen ermöglichen ohne bürokratische Hürden.\n• Innovation-driven Security Culture: Schaffung einer Kultur, die Sicherheitsinnovation belohnt und Mitarbeiter ermutigt, proaktiv Verbesserungsvorschläge einzubringen.\n\n📈 Messbare Kulturindikatoren und Success Metrics:\n• Employee Security Engagement Score: Quantifizierung des Mitarbeiterengagements durch regelmäßige Umfragen zu Sicherheitsbewusstsein und Verbesserungsbereitschaft.\n• Security Innovation Rate: Anzahl und Qualität von mitarbeitergenerierten Sicherheitsverbesserungsvorschlägen pro Quartal.\n• Cross-departmental Security Collaboration Index: Messung der Zusammenarbeit zwischen Sicherheits- und Fachbereichen bei Sicherheitsinitiativen.\n• Incident Learning Velocity: Geschwindigkeit der Umsetzung von Lessons Learned aus Sicherheitsvorfällen in operative Verbesserungen.\n\n🔄 Change Management für nachhaltige Transformation:\n• Behavioral Security Analytics: Einsatz von Verhaltensdaten zur Messung echter Sicherheitsverhaltensänderungen statt nur Training-Completion-Raten.\n• Continuous Feedback Loops: Implementation von Systemen für kontinuierliches Feedback zu Sicherheitsprozessen und deren Verbesserungspotential.\n• Recognition and Reward Systems: Entwicklung von Anreizsystemen, die proaktives Sicherheitsverhalten und kontinuierliche Verbesserung belohnen.\n\n🚀 ADVISORIs Cultural Transformation Framework:\n• Culture Assessment and Design: Bewertung der aktuellen Sicherheitskultur und Design einer Zielkultur mit konkreten Transformationspfaden.\n• Leadership Development Programs: Spezielle Programme zur Entwicklung von Security-Leadership-Capabilities auf allen Managementebenen.\n• Organizational Learning Systems: Implementation von Systemen, die organisationales Lernen aus Sicherheitserfahrungen systematisieren und institutionalisieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie können wir unsere ISMS-Verbesserungen strategisch mit anderen Governance-, Risk- und Compliance-Initiativen integrieren, um Synergien zu schaffen und Redundanzen zu vermeiden?",
        answer: "Die strategische Integration von ISMS-Verbesserungen in ein ganzheitliches GRC-Framework (Governance, Risk and Compliance) ist entscheidend für operative Effizienz und maximalen Geschäftswert. Anstatt isolierte Compliance-Silos zu schaffen, ermöglicht ein integrierter Ansatz Synergieeffekte, Kosteneinsparungen und eine kohärente Risikomanagement-Strategie, die alle regulatorischen Anforderungen erfüllt.\n\n🔗 Strategische GRC-Integration für maximale Synergien:\n• Unified Risk Framework: Entwicklung eines einheitlichen Risikomanagement-Frameworks, das Informationssicherheitsrisiken nahtlos in Enterprise Risk Management integriert.\n• Cross-regulatory Compliance Mapping: Identifikation von Überschneidungen zwischen ISO 27001, DSGVO, NIS2, DORA und anderen regulatorischen Anforderungen für effiziente Multi-Compliance-Strategien.\n• Integrated Governance Structures: Schaffung von Governance-Strukturen, die Sicherheits-, Risiko- und Compliance-Entscheidungen koordiniert treffen und Redundanzen eliminieren.\n• Shared Technology Infrastructure: Nutzung gemeinsamer Technologieplattformen für GRC-Prozesse zur Kosteneinsparung und verbesserter Datenqualität.\n\n⚡ Operative Effizienz durch intelligente Integration:\n• Unified Audit Management: Koordination von internen und externen Audits über alle Compliance-Bereiche hinweg zur Minimierung von Audit-Fatigue und Ressourcenverbrauch.\n• Consolidated Reporting Systems: Implementation von Reporting-Systemen, die multiple regulatorische Anforderungen aus einer einheitlichen Datenbasis bedienen.\n• Cross-functional Control Testing: Entwicklung von Kontrollmechanismen, die gleichzeitig mehrere Compliance-Anforderungen erfüllen und Testing-Effizienz maximieren.\n• Integrated Policy Management: Schaffung kohärenter Richtlinien-Frameworks, die verschiedene Compliance-Anforderungen in einheitlichen Dokumenten adressieren.\n\n📊 Synergistische Value Creation:\n• ROI Amplification: Vervielfachung des ROI von Compliance-Investitionen durch Nutzung für multiple regulatorische Anforderungen.\n• Risk Intelligence Consolidation: Bündelung von Risikoinformationen aus verschiedenen Bereichen für bessere Entscheidungsgrundlagen und strategische Planung.\n• Vendor and Technology Optimization: Konsolidierung von GRC-Technologien und -Dienstleistern für bessere Verhandlungsposition und reduzierte Komplexität.\n\n🎯 ADVISORIs Integrated GRC Approach:\n• GRC Maturity Assessment: Bewertung der aktuellen GRC-Landschaft und Identifikation von Integrationsmöglichkeiten und Synergiepotenzialen.\n• Unified Framework Design: Entwicklung maßgeschneiderter GRC-Frameworks, die spezifische Branchenanforderungen und Unternehmensstrukturen berücksichtigen.\n• Technology Integration Strategy: Strategische Planung der GRC-Technologielandschaft für maximale Integration und Effizienz.\n• Change Management for Integration: Begleitung organisatorischer Veränderungen zur erfolgreichen Implementation integrierter GRC-Strukturen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche Rolle spielen externe Stakeholder und Third-Party-Risiken in unserem ISMS-Verbesserungsprogramm, und wie können wir diese strategisch managen?",
        answer: "Third-Party-Risikomanagement ist eine kritische Komponente moderner ISMS-Programme, da die erweiterte digitale Lieferkette oft das schwächste Glied in der Sicherheitskette darstellt. Mit zunehmender Digitalisierung und Cloud-Adoption erweitern sich die Angriffsflächen erheblich, und die strategische Verwaltung von Drittpartei-Risiken wird zu einem entscheidenden Wettbewerbsvorteil für resiliente Organisationen.\n\n🔗 Strategisches Third-Party Risk Management:\n• Supply Chain Security Architecture: Entwicklung einer Sicherheitsarchitektur, die Third-Party-Risiken nicht nur verwaltet, sondern als strategischen Enabler für sichere Geschäftspartner-Ökosysteme nutzt.\n• Dynamic Vendor Risk Scoring: Implementation kontinuierlicher, KI-gestützter Bewertungssysteme, die Lieferantenrisiken in Echtzeit monitoren und bewerten.\n• Contractual Security Integration: Strategische Integration von Sicherheitsanforderungen in Vertragsstrukturen als Grundlage für langfristige, vertrauensvolle Geschäftsbeziehungen.\n• Ecosystem Resilience Building: Aufbau resilienter Partnernetzwerke durch gemeinsame Sicherheitsstandards und koordinierte Incident Response.\n\n🛡️ Proaktive Stakeholder Security Governance:\n• Stakeholder Security Maturity Programs: Entwicklung von Programmen zur Steigerung der Sicherheitsreife kritischer Geschäftspartner und Lieferanten.\n• Shared Threat Intelligence: Etablierung von Threat Intelligence Sharing mit strategischen Partnern für kollektive Cybersecurity-Stärkung.\n• Joint Security Innovation: Kollaborative Entwicklung neuer Sicherheitslösungen mit Technologiepartnern für Wettbewerbsvorteile.\n• Crisis Communication Networks: Aufbau von Kommunikationsnetzwerken für koordinierte Reaktionen auf Sicherheitsvorfälle im Partnerökosystem.\n\n📈 Business Value durch strategisches Third-Party Management:\n• Competitive Advantage through Security: Nutzung überlegener Third-Party-Sicherheitsstandards als Differenzierungsmerkmal bei Kunden und Partnern.\n• Risk-adjusted Partner Selection: Entwicklung von Auswahlkriterien, die Sicherheitsreife als strategischen Faktor für Geschäftspartner-Entscheidungen integrieren.\n• Collective Security Economies: Schaffung von Kosteneinsparungen durch gemeinsame Sicherheitsinitiativen und geteilte Sicherheitsinfrastrukturen.\n\n🎯 ADVISORIs Third-Party Security Excellence Framework:\n• Comprehensive Third-Party Security Assessment: Entwicklung standardisierter, aber flexibler Assessment-Frameworks für verschiedene Arten von Geschäftspartnern.\n• Technology-enabled Partner Monitoring: Implementation von Technologielösungen für kontinuierliches Monitoring der Sicherheitsposture kritischer Partner.\n• Strategic Security Partnership Development: Unterstützung beim Aufbau strategischer Sicherheitspartnerschaften, die über traditionelle Lieferanten-Beziehungen hinausgehen.\n• Ecosystem Risk Orchestration: Koordination von Risikomanagement-Aktivitäten über das gesamte Geschäftspartner-Ökosystem hinweg für maximale Resilienz."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ C-Level FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
