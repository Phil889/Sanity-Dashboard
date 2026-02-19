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
    console.log('Updating CRA Security by Design page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-cyber-resilience-actsecurity-by-design' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-cyber-resilience-actsecurity-by-design" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie adressiert ADVISORI die komplexe Supply Chain Security im Kontext von CRA Security by Design und welche Auswirkungen hat dies auf Partner- und Lieferantenbeziehungen?",
        answer: "Supply Chain Security ist eine der kritischsten Herausforderungen bei der CRA-Implementierung, da moderne Produkte typischerweise auf komplexen Ökosystemen von Drittanbieter-Komponenten, Open-Source-Software und Partnerleistungen basieren. ADVISORI entwickelt umfassende Supply Chain Security-Strategien, die nicht nur CRA-Compliance sicherstellen, sondern auch Ihre Lieferantenbeziehungen stärken und als Wettbewerbsdifferenzierung nutzen.\n\n🔗 Strategische Supply Chain Security-Dimensionen:\n• End-to-End-Transparenz: Vollständige Sichtbarkeit und Kontrolle über alle Komponenten und Abhängigkeiten in Ihren Produkten, von der Hardware bis zur Software-Bibliothek.\n• Vendor Risk Management: Systematische Bewertung und kontinuierliche Überwachung der Cybersicherheits-Reife Ihrer Lieferanten und Partner.\n• Contractual Security Requirements: Integration verbindlicher Sicherheitsanforderungen in Lieferantenverträge und SLAs mit messbaren Compliance-Kriterien.\n• Incident Response Coordination: Aufbau koordinierter Incident Response-Prozesse, die das gesamte Lieferanten-Ökosystem umfassen.\n\n🛡️ ADVISORI's ganzheitlicher Implementierungsansatz:\n• Software Bill of Materials (SBOM): Implementierung automatisierter SBOM-Generierung und -Verwaltung für vollständige Komponenten-Transparenz und Vulnerability-Tracking.\n• Third-Party Security Assessment: Entwicklung standardisierter Security Assessment-Prozesse für neue und bestehende Lieferanten mit kontinuierlicher Re-Evaluation.\n• Secure Development Requirements: Definition und Durchsetzung von Security by Design-Standards für alle ausgelagerten Entwicklungsleistungen.\n• Supply Chain Threat Intelligence: Integration spezialisierter Threat Intelligence für Supply Chain-spezifische Risiken und Angriffsvektoren.\n\n💼 Transformation der Partnerbeziehungen:\n• Security als Partnerschafts-Enabler: Nutzung gemeinsamer Sicherheitsstandards als Basis für vertrauensvolle, langfristige Geschäftsbeziehungen.\n• Collaborative Security Innovation: Aufbau von Security-Innovationspartnerschaften mit Schlüssel-Lieferanten für gemeinsame Lösungsentwicklung.\n• Market Differentiation: Positionierung Ihres Unternehmens als Preferred Partner für sicherheitsbewusste Kunden durch nachweisbare Supply Chain Security.\n• Ecosystem Resilience: Entwicklung redundanter Lieferantenstrukturen und Notfallpläne für kritische Komponenten zur Sicherstellung der Geschäftskontinuität."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "In welcher Weise unterstützt ADVISORI die C-Suite bei der strategischen Entscheidungsfindung zwischen verschiedenen Security by Design-Ansätzen und deren Auswirkungen auf Produktarchitektur und Marktpositionierung?",
        answer: "Die Wahl der richtigen Security by Design-Strategie ist eine fundamentale strategische Entscheidung, die langfristige Auswirkungen auf Produktarchitektur, Entwicklungskosten, Marktpositionierung und Wettbewerbsfähigkeit hat. ADVISORI unterstützt die C-Suite mit datengestützten Entscheidungsgrundlagen und strategischen Frameworks, die technische Machbarkeit mit Geschäftszielen optimal balancieren.\n\n📊 Strategische Entscheidungsunterstützung für die C-Suite:\n• Multi-Criteria Decision Analysis (MCDA): Systematische Bewertung verschiedener Security-Ansätze basierend auf Faktoren wie Implementierungskosten, Time-to-Market, Risikominimierung und langfristigem ROI.\n• Scenario Planning: Entwicklung verschiedener Zukunftsszenarien und deren Auswirkungen auf verschiedene Security by Design-Strategien.\n• Competitive Intelligence: Analyse der Security-Strategien von Wettbewerbern und Identifikation von Differenzierungsmöglichkeiten.\n• Technology Roadmap Alignment: Integration von Security-Entscheidungen in die übergeordnete Technologie- und Produktstrategie.\n\n🏗️ Architektur-strategische Überlegungen:\n• Monolithic vs. Microservices Security: Bewertung der Sicherheitsimplikationen verschiedener Architekturansätze und deren Einfluss auf Skalierbarkeit und Wartbarkeit.\n• Cloud-Native Security: Strategische Entscheidungen zwischen verschiedenen Cloud-Security-Modellen (Shared Responsibility, Zero Trust, Defense in Depth).\n• Legacy Integration: Entwicklung von Migrationsstrategien für bestehende Systeme unter Berücksichtigung von Security by Design-Prinzipien.\n• Platform Security Strategy: Aufbau wiederverwendbarer Security-Plattformen, die als Basis für multiple Produktlinien dienen können.\n\n🎯 Marktpositionierungs-Strategien:\n• Security als Premium-Feature: Entwicklung von Pricing-Strategien, die fortgeschrittene Sicherheitsfeatures als Werttreiber positionieren.\n• Compliance-Ready Packaging: Bündelung von Security-Features für verschiedene Regulierungsumgebungen und Marktsegmente.\n• Trust-Brand Building: Aufbau einer Markenidentität, die auf nachweisbarer Sicherheitskompetenz und Vertrauenswürdigkeit basiert.\n• Customer Co-Innovation: Einbindung von Schlüsselkunden in die Security by Design-Entwicklung für bessere Marktakzeptanz und Customer Stickiness.\n\n💡 ADVISORI's Expertise in strategischer Beratung:\n• Executive Decision Workshops: Moderierte Entscheidungsfindungs-Sessions mit der C-Suite zur Klärung strategischer Prioritäten und Trade-offs.\n• Business Case Development: Erstellung detaillierter Business Cases für verschiedene Security-Strategien mit quantifizierten Kosten-Nutzen-Analysen.\n• Risk-Return Modeling: Entwicklung von Modellen, die Sicherheitsinvestitionen mit erwarteten Geschäftsrisiken und -chancen verknüpfen.\n• Implementation Roadmapping: Übersetzung strategischer Entscheidungen in konkrete, umsetzbare Roadmaps mit klaren Meilensteinen und Erfolgskriterien."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie gewährleistet ADVISORI die Skalierbarkeit von Security by Design-Lösungen über verschiedene Produktlinien und internationale Märkte hinweg, insbesondere bei unterschiedlichen regulatorischen Anforderungen?",
        answer: "Skalierbare Security by Design-Implementierung in globalen, multi-produktiven Umgebungen erfordert eine ausgewogene Balance zwischen Standardisierung und Flexibilität. ADVISORI entwickelt modulare, anpassungsfähige Security-Architekturen, die konsistente Sicherheitsstandards gewährleisten, während sie gleichzeitig lokale regulatorische Anforderungen und produktspezifische Besonderheiten berücksichtigen.\n\n🌐 Globale Skalierungsstrategien:\n• Modular Security Framework: Entwicklung wiederverwendbarer Security-Module und -Patterns, die als Bausteine für verschiedene Produkte und Märkte dienen.\n• Regulatory Mapping Matrix: Systematische Analyse und Mapping verschiedener internationaler Cybersecurity-Regulierungen (CRA, NIST, SOX, etc.) für effiziente Multi-Compliance.\n• Cultural Adaptation: Berücksichtigung kultureller und rechtlicher Unterschiede in verschiedenen Märkten bei der Security-Implementierung.\n• Federated Governance: Aufbau dezentraler Security-Governance-Strukturen, die lokale Autonomie mit globalen Standards balancieren.\n\n🔧 Technische Skalierungsmechanismen:\n• Platform-as-a-Service (PaaS) Security: Entwicklung interner Security-Plattformen, die allen Produktteams standardisierte, vorkonfigurierte Sicherheitsdienste bereitstellen.\n• Infrastructure as Code (IaC): Automatisierte Bereitstellung sicherheitskonfigurierter Infrastrukturen durch versionierte, wiederverwendbare Templates.\n• Policy as Code: Implementierung programmatischer Security-Policies, die automatisch verschiedene Compliance-Anforderungen durchsetzen können.\n• Continuous Security Integration: Aufbau CI/CD-Pipelines, die automatisch verschiedene regionale Security-Requirements validieren und durchsetzen.\n\n📈 Organisatorische Skalierung:\n• Center of Excellence (CoE): Etablierung zentraler Security-Expertise-Zentren, die Best Practices entwickeln und Produktteams befähigen.\n• Security Champions Network: Aufbau eines Netzwerks von Security-Experten in verschiedenen Produktlinien und Regionen.\n• Knowledge Management Systems: Implementierung von Systemen zur Dokumentation, Sharing und kontinuierlichen Verbesserung von Security-Knowledge.\n• Cross-Functional Training: Entwicklung standardisierter Schulungsprogramme, die an verschiedene Rollen und Regionen angepasst werden können.\n\n🎯 Effizienz- und Kostenvorteil durch Skalierung:\n• Economies of Scale: Realisierung von Kostenvorteilen durch Wiederverwendung von Security-Investitionen über multiple Produktlinien.\n• Accelerated Time-to-Market: Verkürzte Entwicklungszeiten für neue Produkte durch vorgefertigte, validierte Security-Komponenten.\n• Unified Risk Management: Konsolidierte Sicht auf Sicherheitsrisiken über das gesamte Produktportfolio für bessere strategische Entscheidungsfindung.\n• Innovation Leverage: Möglichkeit, Security-Innovationen schnell über das gesamte Unternehmen zu verbreiten und zu nutzen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche Rolle spielt Künstliche Intelligenz und Machine Learning in ADVISORI's Security by Design-Ansatz und wie bereitet dies Unternehmen auf zukünftige autonome Sicherheitssysteme vor?",
        answer: "Künstliche Intelligenz und Machine Learning transformieren Security by Design von reaktiven zu proaktiven, selbstadaptierenden Sicherheitssystemen. ADVISORI integriert AI/ML strategisch in alle Phasen des Produktentwicklungszyklus, um nicht nur aktuelle CRA-Anforderungen zu erfüllen, sondern auch eine Grundlage für die nächste Generation intelligenter, autonomer Cybersecurity-Lösungen zu schaffen.\n\n🤖 AI-getriebene Security by Design-Innovation:\n• Predictive Threat Modeling: Nutzung von Machine Learning-Algorithmen zur Vorhersage und Präventivierung neuer Angriffsvektoren bereits in der Designphase.\n• Automated Vulnerability Discovery: KI-gestützte statische und dynamische Code-Analyse, die menschliche Experten übertrifft in der Erkennung subtiler Sicherheitslücken.\n• Intelligent Security Testing: Adaptive Testing-Systeme, die auf Basis von Bedrohungsmustern automatisch neue Test-Szenarien generieren und ausführen.\n• Behavioral Security Analytics: Integration von User- und System-Behavior-Analytics direkt in Produktdesigns für Real-Time Anomalieerkennung.\n\n🧠 Strategische AI-Integration in Entwicklungsprozesse:\n• AI-Augmented Code Review: KI-Assistenten, die Entwickler bei Security-relevanten Designentscheidungen in Echtzeit unterstützen und alternative Ansätze vorschlagen.\n• Automated Compliance Checking: Machine Learning-Systeme, die kontinuierlich Code und Konfigurationen gegen sich entwickelnde Compliance-Anforderungen validieren.\n• Intelligent Documentation: Automatische Generierung und Updates von Security-Dokumentation basierend auf Code-Änderungen und Threat-Intelligence.\n• Smart Risk Prioritization: KI-gestützte Risikobewertung, die Business Context, Bedrohungslandschaft und technische Faktoren intelligent gewichtet.\n\n🔮 Vorbereitung auf autonome Sicherheitssysteme:\n• Self-Healing Security: Entwicklung von Systemen, die automatisch auf erkannte Bedrohungen reagieren und sich selbst reparieren können.\n• Adaptive Security Policies: Implementation von Policy-Systemen, die sich basierend auf Threat Intelligence und Umgebungsveränderungen automatisch anpassen.\n• Federated Learning Security: Aufbau von Systemen, die Security-Knowledge zwischen verschiedenen Instanzen und Partnern teilen, ohne sensitive Daten preiszugeben.\n• Quantum-Ready AI Security: Vorbereitung auf Post-Quantum-Kryptografie und Quantum-ML-Angriffe durch zukunftssichere Algorithmus-Design.\n\n💡 ADVISORI's AI-Security Expertise:\n• AI Ethics and Security: Integration ethischer AI-Prinzipien in Security-Design, um Bias, Fairness und Transparenz sicherzustellen.\n• Human-AI Collaboration: Design von Systemen, die menschliche Expertise mit AI-Capabilities optimal kombinieren anstatt zu ersetzen.\n• Explainable AI Security: Entwicklung interpretierbarer AI-Sicherheitssysteme, die Compliance-Audits und Fehleranalyse unterstützen.\n• Continuous Learning Architectures: Aufbau von Security-Systemen, die kontinuierlich aus neuen Bedrohungen und Umgebungsveränderungen lernen und sich verbessern."
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
