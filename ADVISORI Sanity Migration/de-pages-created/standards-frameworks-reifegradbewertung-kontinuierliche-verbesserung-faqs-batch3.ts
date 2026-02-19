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
    console.log('Updating ISO 27001 Maturity Assessment & Continuous Improvement page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-reifegradbewertung-kontinuierliche-verbesserung' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-reifegradbewertung-kontinuierliche-verbesserung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Welche Rolle spielen Technologie und Automatisierung bei der Optimierung kontinuierlicher ISMS-Verbesserungsprozesse und wie implementiert ADVISORI diese strategisch?",
        answer: "Technologie und Automatisierung sind essentiell für die Skalierung und Effizienzsteigerung kontinuierlicher ISMS-Verbesserungsprozesse, transformieren diese von manuellen, zeitaufwändigen Aktivitäten zu intelligenten, datengetriebenen Optimierungszyklen. ADVISORI entwickelt technologieunterstützte Verbesserungsarchitekturen, die menschliche Expertise mit maschineller Intelligenz kombinieren für maximale Wirksamkeit.\n\n🤖 Technologische Enabler für kontinuierliche ISMS-Verbesserung:\n• Automated Risk Assessment: Implementierung KI-gestützter Risikoanalysesysteme, die kontinuierlich Bedrohungslandschaften scannen und dynamische Risikobewertungen für proaktive ISMS-Anpassungen liefern.\n• Real-Time Compliance Monitoring: Deployment automatisierter Compliance-Überwachungssysteme mit kontinuierlichem Regelwerk-Abgleich und Instant-Alerting bei Abweichungen oder neuen Anforderungen.\n• Predictive Analytics-Platforms: Einsatz Machine Learning-Algorithmen zur Vorhersage von Sicherheitstrends, Compliance-Entwicklungen und Optimierungsbedarfen für präventive Verbesserungsplanung.\n• Intelligent Process Mining: Nutzung fortschrittlicher Process-Mining-Tools zur automatischen Identifikation von Prozessineffizienzen und Verbesserungspotenzialen in ISMS-Workflows.\n\n⚙️ ADVISORIs strategische Technologie-Integration:\n• Human-AI Collaboration-Models: Entwicklung hybrider Ansätze, die menschliche Urteilskraft und Erfahrung mit KI-Capabilities kombinieren für optimale Entscheidungsqualität und Akzeptanz.\n• Scalable Automation-Architecture: Design modularer Automatisierungslösungen, die mit organisatorischem Wachstum und sich ändernden Anforderungen mitwachsen können.\n• Data-Driven Insights-Generation: Aufbau umfassender Datenanalyseplattformen, die aus internen Betriebsdaten und externen Threat Intelligence actionable Verbesserungsempfehlungen generieren.\n• Integration-Ecosystem-Design: Entwicklung nahtloser Integrationen zwischen verschiedenen Sicherheitstools und Geschäftssystemen für ganzheitliche Verbesserungssteuerung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Wie kann ADVISORI sicherstellen, dass ISMS-Reifegradbewertungen auch die sich verändernden Arbeitsmodelle wie Remote Work und Hybrid-Strukturen angemessen berücksichtigen?",
        answer: "Die Integration moderner Arbeitsmodelle in ISMS-Reifegradbewertungen erfordert eine fundamentale Neubewertung traditioneller Sicherheitsparadigmen und die Entwicklung neuer Assessment-Frameworks, die dezentrale, flexible Arbeitsstrukturen angemessen erfassen. ADVISORI entwickelt zukunftsorientierte Bewertungsmethodiken, die die Komplexität hybrider Arbeitsumgebungen vollständig adressieren.\n\n🌐 Modern Work-orientierte Assessment-Dimensionen:\n• Distributed Security Architecture: Bewertung der Fähigkeit zur Aufrechterhaltung einheitlicher Sicherheitsstandards across verschiedene Arbeitslocations, Devices und Netzwerkumgebungen mit konsistenter Policy-Enforcement.\n• Zero Trust Maturity: Assessment der Implementierung Zero Trust-Prinzipien einschließlich kontinuierlicher Identitätsverifikation, Device-Compliance und adaptiver Access Controls für sichere Remote-Arbeit.\n• Digital Collaboration Security: Evaluierung der Sicherheitsmaßnahmen für cloudbasierte Collaboration-Plattformen, Virtual Meetings und digitale Workflows mit Fokus auf Datenklassifikation und -schutz.\n• Cultural Adaptation Assessment: Bewertung der organisatorischen Fähigkeit zur Aufrechterhaltung von Sicherheitskultur und -awareness in verteilten Teams ohne physische Präsenz.\n\n🔄 ADVISORIs adaptive Assessment-Methodiken:\n• Context-Aware Evaluation: Entwicklung situationsspezifischer Bewertungskriterien, die verschiedene Arbeitsmodelle und deren spezifische Sicherheitsanforderungen differenziert betrachten.\n• Dynamic Risk Modeling: Implementation flexibler Risikomodelle, die sich verändernde Arbeitsumgebungen und deren Impact auf Informationssicherheit dynamisch erfassen und bewerten.\n• Employee Experience Integration: Berücksichtigung der Balance zwischen Sicherheitsanforderungen und User Experience zur Sicherstellung praktikabler und akzeptierter Sicherheitsmaßnahmen.\n• Continuous Adaptation Framework: Etablierung von Assessment-Zyklen, die sich kontinuierlich an evolvierende Arbeitsmodelle und neue Technologien anpassen können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Welche strategischen Partnerschaften und Stakeholder-Beziehungen sind kritisch für erfolgreiche kontinuierliche ISMS-Verbesserung und wie orchestriert ADVISORI diese Kollaborationen?",
        answer: "Erfolgreiche kontinuierliche ISMS-Verbesserung transcendiert organisatorische Grenzen und erfordert strategische Partnerschaften mit internen und externen Stakeholdern, die gemeinsam ein Ecosystem der Informationssicherheits-Excellence schaffen. ADVISORI entwickelt kollaborative Governance-Modelle, die verschiedene Interessensgruppen effektiv alignieren und synergetische Verbesserungseffekte maximieren.\n\n🤝 Kritische Stakeholder-Partnerschaften für ISMS-Excellence:\n• C-Suite Engagement: Aufbau strategischer Allianzen mit Geschäftsführung und Board-Level-Stakeholdern zur Sicherstellung kontinuierlicher Executive-Unterstützung und Ressourcenverfügbarkeit für Verbesserungsinitiativen.\n• Cross-Functional Integration: Entwicklung enger Kooperationen mit Business Units, IT, HR, Legal und Procurement für ganzheitliche ISMS-Integration in alle Geschäftsfunktionen.\n• External Expert Networks: Etablierung von Beziehungen zu Sicherheitsexperten, Beratern, Auditoren und Branchenverbänden für kontinuierlichen Wissenstransfer und Best Practice-Sharing.\n• Vendor und Partner-Ecosystem: Management strategischer Lieferanten- und Partnerbeziehungen zur Sicherstellung aligned Security Standards und kollaborativer Risikomanagemnt-Ansätze.\n\n🎭 ADVISORIs Stakeholder-Orchestrierungs-Strategien:\n• Multi-Level Governance-Architecture: Design mehrstufiger Governance-Strukturen mit klaren Entscheidungskompetenzen, Kommunikationsprotokollen und Eskalationsmechanismen für effektive Stakeholder-Koordination.\n• Value-Based Collaboration-Models: Entwicklung von Win-Win-Partnerschaften, die für alle Beteiligten klaren Mehrwert schaffen und nachhaltige Engagement-Bereitschaft fördern.\n• Knowledge-Sharing-Platforms: Implementierung strukturierter Wissensmanagementsysteme und Communities of Practice für systematischen Erfahrungsaustausch und kollaborative Problemlösung.\n• Performance-Aligned Incentives: Aufbau von Anreizsystemen, die gemeinsame ISMS-Verbesserungsziele unterstützen und kollaboratives Verhalten über organisatorische Grenzen hinweg fördern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie entwickelt ADVISORI branchenspezifische Reifegradbewertungsmodelle, die sektorale Besonderheiten und regulatorische Anforderungen optimal berücksichtigen?",
        answer: "Die Entwicklung branchenspezifischer Reifegradbewertungsmodelle erfordert tiefgreifende Branchenkenntnisse, regulatorische Expertise und die Fähigkeit zur Adaptation generischer Frameworks an sektorale Besonderheiten. ADVISORI kombiniert Cross-Industry-Erfahrung mit Spezialisierungswissen zur Entwicklung maßgeschneiderter Assessment-Methodiken, die branchenrelevante Compliance und Best Practices optimal erfassen.\n\n🏭 Branchenspezifische Assessment-Differenzierung:\n• Financial Services Focus: Entwicklung spezialisierter Bewertungskriterien für Banken und Finanzdienstleister mit Integration von Basel III, DORA, MaRisk und anderen Finanzregulatorien in ISMS-Maturity-Assessments.\n• Healthcare-Specific Models: Adaptation von Assessment-Frameworks für Gesundheitswesen mit besonderem Fokus auf HIPAA, GDPR-Health, Medical Device Security und Patient Data Protection.\n• Critical Infrastructure Orientation: Spezialisierte Bewertungsmodelle für Energieversorger, Telekommunikation und Transport mit Integration von NIS2, CER-Anforderungen und Sector-Specific Cybersecurity Frameworks.\n• Manufacturing und Industry 4.0: Entwicklung ICS/SCADA-fokussierter Assessment-Kriterien mit Integration von OT-Security, Supply Chain Security und Smart Manufacturing-Anforderungen.\n\n⚙️ ADVISORIs Branchenspezialisierungs-Methodiken:\n• Regulatory Mapping-Excellence: Systematische Kartierung aller relevanten regulatorischen Anforderungen und deren Integration in branchenspezifische Maturity-Stufen für comprehensive Compliance-Bewertung.\n• Industry Best Practice-Integration: Incorporation von Branchenstandards, Peer-Benchmarks und Sector-Specific Security Frameworks in Assessment-Methodiken für realistische und relevante Bewertungen.\n• Risk Profile-Adaptation: Anpassung von Reifegradbewertungen an branchenspezifische Risikolandschaften, Bedrohungsmodelle und Business-Criticality-Faktoren für zielgerichtete Verbesserungsempfehlungen.\n• Stakeholder-Alignment-Strategies: Entwicklung branchenrelevanter Kommunikations- und Reporting-Ansätze, die sektorale Stakeholder-Erwartungen und Governance-Strukturen optimal adressieren."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
