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
    console.log('Updating CIS Controls Priorisierung & Risikoanalyse page with C-Level FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cis-controls-priorisierung-risikoanalys' })
    
    if (!existingDoc) {
      throw new Error('Document "cis-controls-priorisierung-risikoanalys" not found')
    }
    
    // Create new C-Level FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie können wir durch CIS Controls Priorisierung unsere Cloud-Security-Strategie optimieren und Multi-Cloud-Umgebungen absichern?",
        answer: "Cloud-Migration und Multi-Cloud-Strategien bringen komplexe Security-Herausforderungen mit sich, die durch traditionelle Ansätze nur unzureichend adressiert werden. Eine strategische CIS Controls Priorisierung ermöglicht es Ihnen, Cloud-spezifische Risiken systematisch zu managen und gleichzeitig die Agilität und Effizienzvorteile der Cloud voll auszuschöpfen.\n\n☁️ Cloud-Security-Optimierung durch strategische Controls:\n• Cloud-Native-Controls-Mapping: Anpassung der CIS Controls an Cloud-spezifische Architekturen mit besonderem Fokus auf Container-Security, Serverless-Computing und Infrastructure-as-Code.\n• Multi-Cloud-Governance: Einheitliche Security-Governance über multiple Cloud-Provider hinweg durch standardisierte Controls-Implementation und zentrale Monitoring-Dashboards.\n• Shared-Responsibility-Optimization: Klare Abgrenzung der Security-Verantwortlichkeiten zwischen Cloud-Providern und Ihrem Unternehmen basierend auf priorisierten Controls.\n• Cloud-Migration-Security: Systematische Security-Assessment-Prozesse für Cloud-Migrations mit Risk-Rating und Mitigation-Strategien für jede Workload.\n\n🛡️ Multi-Cloud-Resilienz und Vendor-Independence:\n• Provider-Agnostic-Security: Implementierung von Controls, die unabhängig vom Cloud-Provider funktionieren und Vendor-Lock-in vermeiden.\n• Cross-Cloud-Incident-Response: Entwicklung einheitlicher Incident-Response-Prozesse, die across multiple Cloud-Environments funktionieren.\n• Hybrid-Cloud-Integration: Nahtlose Integration von On-Premises- und Cloud-Security-Controls für konsistente Security-Posture.\n• Cloud-Security-Automation: Implementierung von Infrastructure-as-Code-Ansätzen für automatisierte Controls-Deployment und Compliance-Monitoring."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche Rolle spielt Künstliche Intelligenz bei der Optimierung unserer CIS Controls Priorisierung und wie können wir KI-gestützte Security nutzen?",
        answer: "Künstliche Intelligenz revolutioniert sowohl die Priorisierung als auch die Implementierung von CIS Controls. Durch KI-gestützte Ansätze können Sie nicht nur Ihre Security-Effectiveness dramatisch steigern, sondern auch proaktive Bedrohungserkennung implementieren und Ihre Security-Operations automatisieren. Die Integration von KI in Ihre Controls-Strategie schafft einen nachhaltigen Wettbewerbsvorsprung.\n\n🤖 KI-gestützte Controls-Priorisierung und -Optimierung:\n• Predictive-Risk-Modeling: Machine-Learning-Algorithmen analysieren historische Bedrohungsdaten und Business-Context zur dynamischen Anpassung der Controls-Priorisierung.\n• Behavioral-Analytics-Integration: KI-basierte Anomalie-Erkennung in User- und Entity-Behavior für präzisere Implementierung von Identity- und Access-Management-Controls.\n• Automated-Threat-Intelligence: KI-Systeme sammeln und analysieren Threat-Intelligence aus multiple Quellen zur kontinuierlichen Optimierung der Controls-Effectiveness.\n• Self-Healing-Security: Autonome Security-Systeme, die basierend auf CIS Controls automatisch auf Bedrohungen reagieren und Systeme selbständig härten.\n\n⚡ Operative KI-Security-Vorteile:\n• Zero-Day-Protection: KI-basierte Systeme erkennen unknown Threats durch Pattern-Recognition und Anomalie-Detection ohne Abhängigkeit von Signature-based-Detection.\n• Scalable-Security-Operations: Automatisierung repetitiver Security-Tasks ermöglicht Security-Teams fokusierte Arbeit an strategischen Initiativen.\n• Precision-Security: KI reduziert False-Positives dramatisch und verbessert Signal-to-Noise-Ratio bei Security-Alerts.\n• Continuous-Learning: Self-improving Security-Systeme, die aus jedem Incident lernen und kontinuierlich ihre Detection- und Response-Capabilities verbessern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie können wir CIS Controls Priorisierung nutzen, um unsere ESG-Ziele zu unterstützen und Cyber-Sustainability zu fördern?",
        answer: "Cyber-Security und ESG (Environmental, Social, Governance) werden zunehmend als miteinander verbundene strategische Prioritäten erkannt. Eine durchdachte CIS Controls Priorisierung kann erheblich zu Ihren ESG-Zielen beitragen und gleichzeitig Cyber-Sustainability fördern. Dieser integrierte Ansatz schafft Mehrwert für Stakeholder und stärkt Ihre Position bei ESG-bewussten Investoren.\n\n🌱 ESG-Integration durch strategische CIS Controls:\n• Environmental-Impact-Optimization: Priorisierung energieeffizienter Security-Controls und Green-IT-Ansätze zur Reduzierung des Carbon-Footprints Ihrer Cyber-Security-Infrastruktur.\n• Social-Responsibility-Enhancement: Implementierung von Controls, die Datenschutz und digitale Rechte von Stakeholdern schützen und Social-License-to-Operate stärken.\n• Governance-Excellence: Nutzung der Controls-Framework als Demonstration überlegener Cyber-Governance für Board-Level-ESG-Reporting.\n• Supply-Chain-ESG: Extension der CIS Controls auf Lieferanten zur Förderung nachhaltiger und ethischer Supply-Chain-Practices.\n\n📊 ESG-Reporting und Stakeholder-Value:\n• Quantifizierte ESG-Metriken: Entwicklung messbarer KPIs, die Cyber-Security-Investments mit ESG-Outcomes verknüpfen.\n• Transparency-Enhancement: Nutzung der Controls-Documentation für verbesserte ESG-Disclosure und Stakeholder-Kommunikation.\n• Risk-Management-Integration: Integration von Cyber-Risks in ESG-Risk-Frameworks für holistische Risikosteuerung.\n• Sustainable-Innovation: Förderung nachhaltiger Technology-Innovation durch Security-Frameworks, die Long-term-thinking und Responsible-Innovation unterstützen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Welche langfristigen strategischen Vorteile entstehen durch eine kontinuierliche Weiterentwicklung unserer CIS Controls Priorisierung?",
        answer: "Die kontinuierliche Weiterentwicklung Ihrer CIS Controls Priorisierung ist kein einmaliges Projekt, sondern ein strategischer Capability-Building-Prozess, der langfristige Wettbewerbsvorteile schafft. Diese Investition in Security-Maturity zahlt sich über Jahre hinweg aus und positioniert Ihr Unternehmen als Cyber-Resilience-Leader in Ihrer Branche.\n\n🚀 Langfristige strategische Wertschöpfung:\n• Adaptive-Security-Advantage: Kontinuierliche Optimierung schafft eine selbstlernende Security-Organisation, die sich schneller als Wettbewerber an neue Bedrohungen anpasst.\n• Innovation-Enablement: Robuste Security-Foundations ermöglichen aggressive Innovation und First-Mover-Advantages bei neuen Technologien.\n• Market-Differentiation: Nachweislich überlegene Cyber-Resilienz wird zu einem strategischen Differenzierungsfaktor bei Kunden, Partnern und Investoren.\n• Talent-Attraction: Moderne, wissenschaftlich fundierte Security-Practices ziehen Top-Talent an und reduzieren Recruitment- und Retention-Kosten.\n\n💎 Organizational-Capability-Development:\n• Security-Culture-Excellence: Evolution von einer compliance-getriebenen zu einer proaktiven, risk-informed Security-Kultur auf allen Ebenen.\n• Cross-Functional-Integration: Security wird von einem isolierten Bereich zu einem integrierten Business-Enabler, der alle Geschäftsfunktionen unterstützt.\n• Strategic-Agility: Entwicklung der Fähigkeit, Security-Strategien schnell an changing Business-Models und Market-Conditions anzupassen.\n• Ecosystem-Leadership: Positionierung als Thought-Leader und Standard-Setter in Ihrer Industry mit entsprechenden Influence- und Partnership-Opportunities."
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
    console.log('✅ C-Level FAQs batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
