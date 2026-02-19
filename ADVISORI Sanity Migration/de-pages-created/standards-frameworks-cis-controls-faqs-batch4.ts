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
    console.log('Updating CIS Controls page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-cis-controls' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-cis-controls" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie entwickelt ADVISORI CIS Controls-Implementation als strategisches Asset für Mergers & Acquisitions und Due Diligence-Prozesse?",
        answer: "In M&A-Transaktionen werden robuste CIS Controls zu kritischen Wertfaktoren und Due Diligence-Komponenten. ADVISORI positioniert Cybersecurity-Excellence als strategisches Asset, das Transaktionswerte steigert, Due Diligence beschleunigt und Post-Merger-Integration vereinfacht.\n\n💼 M&A Value Creation durch Security Excellence:\n• Transaction Value Enhancement: Nachweisbare CIS Controls-Compliance kann Unternehmensbewertungen um 15-25% steigern durch reduzierte Risikoaufschläge.\n• Due Diligence Acceleration: Vollständige CIS Controls-Dokumentation reduziert Due Diligence-Zeiten um 40-60% und minimiert Deal-Risiken.\n• Integration Readiness: Standardisierte Security-Frameworks ermöglichen schnelle und effiziente Post-Merger-Integration.\n• Regulatory Approval: Robuste Cybersecurity-Posture beschleunigt regulatorische Genehmigungsprozesse.\n\n🔍 Strategic Due Diligence Enhancement:\n• Automated Security Assessment: Kontinuierliche Security-Metriken bieten Real-time Insights für Due Diligence-Teams.\n• Risk Quantification: Präzise Quantifizierung von Cyber-Risiken für fundierte Bewertungsentscheidungen.\n• Compliance Verification: Sofortige Verification der Compliance-Status für verschiedene Standards und Regulierungen.\n• Integration Planning: Detaillierte Security-Architektur-Dokumentation für beschleunigte Integration Planning.\n\n⚡ Post-Merger Security Integration Excellence:\n• Unified Security Posture: Schnelle Harmonisierung verschiedener Security-Standards auf gemeinsame CIS Controls-Basis.\n• Cultural Integration: Security-Frameworks als Basis für kulturelle Integration und gemeinsame Arbeitsweisen.\n• Synergy Realization: Identifikation und Realisierung von Security-Synergien zwischen kombinierten Organisationen.\n• Stakeholder Confidence: Demonstration von Security-Excellence für Investoren, Kunden und Regulatoren.\n\n🎯 Strategic Positioning für Verkaufsprozesse:\n• Security Premium: Positionierung als Security-Leader für Premium-Bewertungen.\n• Buyer Attraction: Security-Excellence zieht qualitativ hochwertige Käufer an.\n• Negotiation Strength: Reduzierte Security-Risiken stärken Verhandlungsposition.\n• Deal Certainty: Minimierte Due Diligence-Risiken erhöhen Deal-Completion-Wahrscheinlichkeit.\n\n🛡️ ADVISORI's M&A Security Excellence Framework:\n• Transaction Readiness: Proaktive Vorbereitung auf M&A-Prozesse durch Security-Excellence.\n• Value Documentation: Systematische Dokumentation des Security-Werts für M&A-Teams."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Wie adressiert ADVISORI die spezifischen CIS Controls-Anforderungen verschiedener Branchen und regulatorischer Umgebungen für optimale Compliance?",
        answer: "Verschiedene Branchen haben spezifische Cybersecurity-Anforderungen und regulatorische Rahmenbedingungen. ADVISORI entwickelt branchenspezifische CIS Controls-Implementierungen, die sowohl universelle Security-Excellence als auch sektorspezifische Compliance-Anforderungen optimal adressieren.\n\n🏦 Financial Services Specialization:\n• Basel III Integration: CIS Controls werden speziell für Banken-Regulatorik und Operational Risk Management optimiert.\n• PCI DSS Alignment: Nahtlose Integration mit Payment Card Industry Standards für Finanzdienstleister.\n• SOX Compliance: Spezifische Controls für Sarbanes-Oxley Compliance und Financial Reporting Security.\n• SWIFT CSP: Integration mit SWIFT Customer Security Programme für internationale Zahlungsverkehr-Sicherheit.\n\n🏥 Healthcare Sector Excellence:\n• HIPAA Integration: Spezialisierte Implementation für Healthcare Privacy und Security Requirements.\n• FDA Cybersecurity: Compliance mit FDA-Guidance für Medical Device Cybersecurity.\n• Patient Safety Focus: Priorisierung von Controls, die direkten Impact auf Patient Safety haben.\n• Telemedicine Security: Spezielle Berücksichtigung von Remote Healthcare und Telehealth-Sicherheit.\n\n🏭 Manufacturing und Critical Infrastructure:\n• NIST Framework Integration: Optimierung für Critical Infrastructure Protection und NIST Guidelines.\n• OT Security: Spezialisierte Controls für Operational Technology und Industrial Control Systems.\n• Supply Chain Security: Erweiterte Controls für Manufacturing Supply Chain Protection.\n• Safety System Integration: Integration mit Safety Instrumented Systems (SIS) und Process Safety.\n\n🛡️ Sector-Agnostic Excellence mit Branchen-Fokus:\n• Regulatory Mapping: Systematische Zuordnung von CIS Controls zu branchenspezifischen Anforderungen.\n• Risk-Based Prioritization: Branchenspezifische Risiko-Priorisierung der 18 CIS Controls.\n• Audit Optimization: Vorbereitung auf branchenspezifische Audits und Zertifizierungen.\n• Best Practice Integration: Integration von Industry-Best-Practices in CIS Controls-Implementation.\n\n🎯 ADVISORI's Sector Expertise Approach:\n• Industry Intelligence: Tiefgreifende Kenntnis branchenspezifischer Bedrohungslandschaften.\n• Regulatory Expertise: Spezialisierte Teams für verschiedene regulatorische Umgebungen.\n• Benchmark Analysis: Kontinuierlicher Vergleich mit Industry-Leaders für competitive Positioning."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie entwickelt ADVISORI Executive-Level Security Awareness und Change Management für erfolgreiche CIS Controls-Adoption?",
        answer: "Erfolgreiche CIS Controls-Implementation erfordert mehr als technische Exzellenz - sie braucht Executive Buy-in, organisatorische Transformation und kulturellen Wandel. ADVISORI entwickelt umfassende Change Management-Strategien, die Führungskräfte zu Security-Champions machen und Organisation-weite Adoption sicherstellen.\n\n👥 Executive Engagement und Leadership Development:\n• C-Suite Security Education: Maßgeschneiderte Schulungsprogramme für verschiedene C-Level-Rollen (CEO, CFO, CTO, CISO).\n• Board-Level Communication: Entwicklung von Board-gerechten Security-Reportings und Strategic Dashboards.\n• Risk Appetite Workshops: Strukturierte Workshops zur Definition von Security-Risk-Appetite auf Executive-Level.\n• Strategic Alignment Sessions: Integration von Security-Zielen in übergeordnete Geschäftsstrategien.\n\n🔄 Organizational Change Management:\n• Cultural Transformation: Entwicklung einer Security-bewussten Unternehmenskultur von Top-down.\n• Stakeholder Mapping: Systematische Identifikation und Engagement aller relevanten Stakeholder.\n• Resistance Management: Proaktive Adressierung von Widerständen und Change-Barrieren.\n• Success Communication: Systematische Kommunikation von Security-Erfolgen und Business-Benefits.\n\n📈 Performance-Driven Adoption:\n• Executive KPI Integration: Integration von Security-Metriken in Executive-Performance-Systeme.\n• Incentive Alignment: Ausrichtung von Incentive-Systemen auf Security-Excellence und CIS Controls-Adoption.\n• Recognition Programs: Etablierung von Recognition-Programmen für Security-Leadership und -Innovation.\n• Career Path Integration: Integration von Security-Kompetenz in Karriereentwicklungspfade.\n\n🎯 Sustainable Security Culture:\n• Leadership Modeling: Entwicklung von Security-Leadership-Verhaltensweisen auf allen Führungsebenen.\n• Continuous Learning: Etablierung kontinuierlicher Security-Education für Führungskräfte.\n• Community Building: Aufbau von Security-Communities und Champions-Netzwerken.\n• Innovation Encouragement: Förderung von Security-Innovation und kontinuierlicher Verbesserung.\n\n🛡️ ADVISORI's Executive Transformation Methodology:\n• Behavioral Change Science: Anwendung bewährter Change Management-Prinzipien auf Security-Transformation.\n• Executive Coaching: Individuelles Coaching für Security-Leadership-Development.\n• Success Metrics: Messung von Change-Erfolg durch objektive Adoption- und Culture-Metriken."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie positioniert ADVISORI CIS Controls als Enabler für innovative Geschäftsmodelle und digitale Transformation-Initiativen?",
        answer: "Traditionell werden Security-Controls als Innovationshemmnisse wahrgenommen. ADVISORI revolutioniert diese Sichtweise durch Positionierung von CIS Controls als fundamentale Enabler für sichere Innovation, neue Geschäftsmodelle und beschleunigte digitale Transformation.\n\n🚀 Innovation Acceleration durch Security-by-Design:\n• Trusted Innovation Platform: CIS Controls schaffen die Vertrauensbasis für mutige Innovationen und neue Technologie-Adoptions.\n• Speed-to-Market Enhancement: Robuste Security-Frameworks eliminieren Security-bedingte Verzögerungen in Innovationsprozessen.\n• Risk-Informed Innovation: Strukturierte Risikobewertung ermöglicht kalkulierte Innovation und strategische Experimente.\n• Regulatory Fast-Track: Compliance-ready Innovation verkürzt Time-to-Market für regulierte Branchen.\n\n💡 Digital Business Model Enablement:\n• Cloud-First Security: CIS Controls optimiert für Cloud-native Architekturen und digitale Services.\n• API Economy Readiness: Security-Frameworks für sichere API-Monetarisierung und Partner-Integration.\n• Data Monetization: Robuste Data Protection ermöglicht sichere Datenmonetarisierung und Analytics-Services.\n• Platform Business Security: Spezielle Security-Frameworks für Multi-sided Platform Business Models.\n\n⚡ Technology Adoption Acceleration:\n• AI/ML Security Framework: Sichere Adoption von Artificial Intelligence und Machine Learning-Technologien.\n• IoT Integration Security: Frameworks für sichere Integration von Internet-of-Things-Devices.\n• Blockchain Readiness: Security-Infrastruktur für Blockchain und Distributed Ledger-Technologien.\n• Quantum-Safe Preparation: Vorbereitung auf Quantum Computing und Post-Quantum-Cryptography.\n\n🎯 Strategic Digital Transformation Support:\n• Digital-First Security: Security-Architekturen, die Digital-First-Strategien unterstützen und beschleunigen.\n• Customer Experience Enhancement: Security-Maßnahmen, die Customer Experience verbessern statt behindern.\n• Partner Ecosystem Security: Sichere Integration von Partner-Ökosystemen und Third-Party-Services.\n• Innovation Lab Security: Spezielle Security-Frameworks für Innovation Labs und Experimental Environments.\n\n🛡️ ADVISORI's Innovation-Security Integration:\n• Innovation-Security Balance: Optimale Balance zwischen Security-Robustheit und Innovation-Agilität.\n• Agile Security: Security-Prozesse, die Agile und DevOps-Methodologien unterstützen.\n• Experimentation Frameworks: Sichere Umgebungen für Business-Experimente und Proof-of-Concepts."
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
