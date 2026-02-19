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
    console.log('Updating SIEM Managed Services page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'siem-managed-services' })
    
    if (!existingDoc) {
      throw new Error('Document "siem-managed-services" not found')
    }
    
    // Create new FAQs for SIEM managed services strategy and benefits
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Wann ist SIEM Managed Services die strategisch richtige Entscheidung und welche Faktoren bestimmen diese Wahl?',
        answer: "Die Entscheidung für SIEM Managed Services ist eine strategische Weichenstellung, die weit über reine Kostenbetrachtungen hinausgeht. Sie erfordert eine ganzheitliche Bewertung von Geschäftszielen, Ressourcenverfügbarkeit, Risikotoleranz und langfristigen Cybersecurity-Ambitionen. Eine fundierte Entscheidung berücksichtigt sowohl quantifizierbare als auch qualitative Faktoren.\n\n🎯 Strategische Entscheidungskriterien:\n• Business Focus und Core Competency Alignment: Wenn Cybersecurity nicht zu den Kernkompetenzen gehört und Ressourcen besser in das Hauptgeschäft investiert werden sollten\n• Time-to-Value Requirements: Bei dringendem Bedarf an sofortiger Cybersecurity-Capability ohne lange Aufbauzeiten\n• Talent Availability und Skill Gap: Wenn spezialisierte Cybersecurity-Experten schwer zu finden oder zu halten sind\n• Scalability Needs: Bei schwankenden oder schnell wachsenden Sicherheitsanforderungen\n• Compliance Pressure: Wenn regulatorische Anforderungen sofortige, professionelle Cybersecurity-Capabilities erfordern\n\n💰 Wirtschaftliche Bewertungsfaktoren:\n• Total Cost of Ownership Vergleich zwischen internem SOC-Aufbau und Managed Services\n• Capital vs. Operational Expenditure Präferenzen und Budget-Flexibilität\n• Hidden Costs des internen SOC-Betriebs wie Training, Technologie-Updates und Personalfluktuation\n• Risk-adjusted ROI unter Berücksichtigung von Ausfallrisiken und Qualitätsschwankungen\n• Opportunity Costs der Ressourcenbindung in Non-Core-Aktivitäten\n\n🔍 Capability Assessment Faktoren:\n• Aktuelle interne Cybersecurity-Reife und verfügbare Expertise\n• Gewünschte Service-Level und Performance-Anforderungen\n• Integration Requirements mit bestehenden IT- und Security-Systemen\n• Control Requirements und Governance-Präferenzen\n• Future State Vision und strategische Cybersecurity-Roadmap\n\n⚖️ Risiko und Compliance Überlegungen:\n• Regulatory Compliance Requirements und Audit-Anforderungen\n• Data Sovereignty und geografische Beschränkungen\n• Business Continuity und Disaster Recovery Anforderungen\n• Vendor Risk Management und Abhängigkeitsrisiken\n• Service Provider Security Standards und Zertifizierungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche verschiedenen SIEM Managed Service Modelle gibt es und wie wählt man das optimale Modell aus?',
        answer: "SIEM Managed Service Modelle variieren erheblich in Umfang, Verantwortlichkeiten und Wertversprechen. Die Auswahl des optimalen Modells erfordert ein tiefes Verständnis der eigenen Anforderungen sowie der Stärken und Limitationen verschiedener Service-Ansätze. Jedes Modell bietet unterschiedliche Balancen zwischen Kontrolle, Kosten und Capabilities.\n\n🏢 Fully Managed SIEM Services:\n• Complete Outsourcing aller SIEM-Operationen inklusive Technologie, Personal und Prozesse\n• Provider übernimmt vollständige Verantwortung für Monitoring, Analysis und Initial Response\n• Maximale Kosteneffizienz und minimaler interner Aufwand\n• Geringste Kontrolle über operative Details und Customization-Möglichkeiten\n• Ideal für Unternehmen ohne interne Cybersecurity-Expertise oder Ressourcen\n\n🤝 Co-Managed SIEM Services:\n• Hybrid-Modell mit geteilten Verantwortlichkeiten zwischen Provider und internem Team\n• Provider übernimmt Tier-1 Monitoring und Analysis, internes Team fokussiert auf Tier-2/3 Response\n• Balance zwischen Kosteneffizienz und interner Kontrolle\n• Ermöglicht Skill-Building und Knowledge Transfer\n• Optimal für Unternehmen mit grundlegender Cybersecurity-Capability, die erweitert werden soll\n\n🔧 Managed Detection and Response (MDR):\n• Fokus auf Advanced Threat Detection und Incident Response statt reinem SIEM-Management\n• Integration von Threat Intelligence, Behavioral Analytics und Human Expertise\n• Proaktive Threat Hunting und Advanced Persistent Threat Detection\n• Höhere Wertschöpfung durch spezialisierte Expertise und Tools\n• Geeignet für Unternehmen mit erhöhten Bedrohungsrisiken oder Compliance-Anforderungen\n\n☁️ SIEM-as-a-Service (SIEMaaS):\n• Cloud-basierte SIEM-Plattform mit Managed Services Komponenten\n• Flexible Skalierung und Pay-as-you-Grow Modelle\n• Schnelle Deployment-Zeiten und reduzierte Infrastructure-Komplexität\n• Verschiedene Service-Level von Self-Service bis Fully-Managed\n• Ideal für Unternehmen mit Cloud-First Strategien oder schnellem Wachstum\n\n🎯 Modell-Auswahlkriterien:\n• Internal Capability Maturity und verfügbare Cybersecurity-Ressourcen\n• Control Requirements und Governance-Präferenzen\n• Budget Constraints und Preferred Cost Structure\n• Scalability Needs und Business Growth Projections\n• Integration Requirements mit bestehender IT-Infrastruktur"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie bewertet man SIEM Managed Service Provider objektiv und welche Kriterien sind entscheidend?',
        answer: "Die objektive Bewertung von SIEM Managed Service Providern erfordert einen strukturierten, multi-dimensionalen Ansatz, der über Marketing-Versprechen hinausgeht und echte Capabilities, Performance-Historie und strategische Passung bewertet. Eine fundierte Provider-Auswahl kann den Unterschied zwischen Cybersecurity-Exzellenz und kostspieligen Enttäuschungen bedeuten.\n\n🔍 Technical Capability Assessment:\n• SIEM Platform Expertise und Multi-Vendor Capabilities für Technologie-Flexibilität\n• Advanced Analytics Capabilities inklusive Machine Learning und Behavioral Analysis\n• Threat Intelligence Integration und Proprietary Research Capabilities\n• Custom Use Case Development und Rule Tuning Expertise\n• Integration Capabilities mit bestehenden Security Tools und IT-Systemen\n\n👥 Human Capital Evaluation:\n• Analyst Qualifications und Certification Levels der operativen Teams\n• Analyst-to-Customer Ratios und Workload Management\n• Escalation Procedures und Senior Expert Availability\n• Training Programs und Continuous Education Investments\n• Retention Rates und Team Stability Metrics\n\n📊 Operational Excellence Indicators:\n• Historical Performance Metrics und SLA Achievement Rates\n• Mean Time to Detection und Mean Time to Response Benchmarks\n• False Positive Rates und Alert Quality Metrics\n• Customer Satisfaction Scores und Reference Quality\n• Incident Response Effectiveness und Lessons Learned Processes\n\n🏢 Business Stability und Strategic Fit:\n• Financial Stability und Business Continuity Planning\n• Geographic Coverage und Local Presence Requirements\n• Industry Expertise und Vertical-Specific Experience\n• Compliance Certifications und Regulatory Alignment\n• Innovation Roadmap und Technology Investment Patterns\n\n🔒 Security und Compliance Posture:\n• Provider Security Controls und Third-Party Assessments\n• Data Handling Practices und Privacy Protections\n• Compliance Certifications und Audit Results\n• Incident History und Transparency in Communication\n• Business Continuity und Disaster Recovery Capabilities\n\n📋 Evaluation Methodology:\n• Weighted Scoring Matrix mit objektiven Bewertungskriterien\n• Reference Checks mit ähnlichen Unternehmen und Use Cases\n• Proof-of-Concept oder Pilot Programs für praktische Validation\n• Total Cost of Ownership Analysis über mehrjährige Zeiträume\n• Risk Assessment und Mitigation Strategy Development"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche Vorteile bieten SIEM Managed Services gegenüber internen SOC-Lösungen und wie maximiert man diese?',
        answer: "SIEM Managed Services bieten signifikante strategische und operative Vorteile gegenüber internen SOC-Lösungen, die jedoch nur durch intelligente Service-Gestaltung und aktives Management realisiert werden können. Der Schlüssel liegt darin, die inhärenten Stärken von Managed Services zu verstehen und systematisch zu nutzen.\n\n⚡ Immediate Capability Access:\n• Sofortiger Zugang zu Enterprise-Grade SIEM-Capabilities ohne lange Aufbauzeiten\n• Etablierte Prozesse und bewährte Playbooks für effektive Security Operations\n• Vorkonfigurierte Use Cases und Threat Detection Rules basierend auf Branchenerfahrung\n• Immediate Threat Intelligence Integration und Advanced Analytics Capabilities\n• Schnelle Time-to-Value ohne interne Learning Curve oder Trial-and-Error Phasen\n\n🎓 Expert-Level Expertise Access:\n• Zugang zu spezialisierten Cybersecurity-Experten mit jahrelanger Erfahrung\n• Collective Intelligence aus der Betreuung multipler Kunden und Threat Landscapes\n• Continuous Training und Certification der Analyst-Teams\n• Access to Advanced Tools und Threat Intelligence Feeds\n• Expertise in Emerging Threats und Latest Attack Techniques\n\n💰 Economic Efficiency Advantages:\n• Predictable Operating Expenses statt hoher Capital Investments\n• Shared Cost Model für teure Security Tools und Threat Intelligence\n• Elimination of Recruitment und Training Costs für spezialisierte Rollen\n• Reduced Technology Refresh Cycles und Maintenance Overhead\n• Scalable Cost Structure basierend auf tatsächlichen Anforderungen\n\n🔄 Operational Scalability Benefits:\n• Flexible Capacity Scaling basierend auf Business Growth oder Seasonal Demands\n• Geographic Coverage ohne lokale Präsenz-Anforderungen\n• Service Level Flexibility für verschiedene Business Units oder Criticality Levels\n• Rapid Response Capability für Incident Escalation\n• Continuous Service Availability ohne Vacation oder Sick Leave Impacts\n\n📈 Maximierung der Managed Services Vorteile:\n• Clear Service Definition und Measurable Success Criteria\n• Regular Performance Reviews und Continuous Improvement Initiatives\n• Active Collaboration und Knowledge Transfer Programs\n• Strategic Partnership Development statt reiner Vendor Relationship\n• Proactive Communication und Feedback Loops für Service Optimization\n\n🎯 Strategic Value Realization:\n• Focus on Core Business Activities durch Delegation von Non-Core Security Operations\n• Risk Transfer für Cybersecurity Operations und Performance Guarantees\n• Access to Innovation und Latest Security Technologies ohne interne Investment\n• Compliance Assurance durch Provider Expertise und Audit Support\n• Business Agility durch Flexible Service Arrangements und Rapid Scaling"
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
    console.log('✅ FAQ batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
