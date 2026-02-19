import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}

const run = async () => {
  try {
    console.log('Updating ISO 27001 Cloud page with FAQ batch 5...')
    
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-cloud' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-cloud" not found')
    }
    
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Welche Best Practices gibt es für die Implementierung von Cloud Security Governance im Rahmen von ISO 27001?',
        answer: "Cloud Security Governance ist das strategische Fundament für erfolgreiche ISO 27001 Compliance in Cloud-Umgebungen. Effektive Governance etabliert klare Verantwortlichkeiten, Prozesse und Kontrollen, die sowohl Business-Agilität als auch umfassende Sicherheit gewährleisten.\n\n🏛️ Strategic Governance Framework:\n• Executive Sponsorship und Board-Level Oversight für Cloud Security Initiativen\n• Cloud Security Committee mit Cross-funktionaler Repräsentation\n• Clear Roles und Responsibilities Matrix für alle Cloud Security Stakeholder\n• Integration von Cloud Security in Enterprise Risk Management\n• Regular Governance Reviews und Strategic Alignment Assessments\n\n📋 Policy und Standards Management:\n• Comprehensive Cloud Security Policy Framework mit regelmäßigen Updates\n• Standardized Security Baselines für verschiedene Cloud Service Models\n• Automated Policy Enforcement durch Cloud-native Tools\n• Exception Management Processes für Business-kritische Anforderungen\n• Continuous Policy Effectiveness Monitoring und Improvement\n\n🎯 Performance Management und Metrics:\n• Key Performance Indicators für Cloud Security Effectiveness\n• Regular Security Posture Assessments und Benchmarking\n• Risk-based Metrics für Executive Reporting\n• Automated Compliance Dashboards für Real-time Visibility\n• Continuous Improvement Programme basierend auf Performance Data"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Wie können Organisationen Cloud Migration Security für ISO 27001 Compliance planen und durchführen?',
        answer: "Cloud Migration Security erfordert einen systematischen, phasenorientierten Ansatz, der ISO 27001 Prinzipien von Beginn an integriert. Erfolgreiche Migrationen balancieren Business-Kontinuität mit umfassender Sicherheit und schaffen die Grundlage für langfristige Cloud-Excellence.\n\n📋 Pre-Migration Security Assessment:\n• Comprehensive Asset Inventory und Data Classification\n• Risk Assessment für alle zu migrierende Systeme und Daten\n• Security Requirements Definition basierend auf Business Criticality\n• Cloud Provider Security Evaluation und Due Diligence\n• Migration Security Architecture Design und Planning\n\n🔄 Secure Migration Execution:\n• Phased Migration Approach mit Security Validation Gates\n• Data Protection während Transit mit End-to-End Encryption\n• Identity und Access Management Migration mit Zero Downtime\n• Network Security Configuration und Testing\n• Continuous Security Monitoring während Migration\n\n✅ Post-Migration Validation:\n• Comprehensive Security Testing und Vulnerability Assessment\n• Compliance Validation gegen ISO 27001 Requirements\n• Performance und Security Baseline Establishment\n• Incident Response Testing in neuer Cloud-Umgebung\n• Documentation Update und Knowledge Transfer"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Welche Rolle spielt Cloud Security Training und Awareness bei ISO 27001 Compliance?',
        answer: "Cloud Security Training und Awareness sind kritische Erfolgsfaktoren für nachhaltige ISO 27001 Compliance in Cloud-Umgebungen. Effektive Programme schaffen eine sicherheitsbewusste Kultur und befähigen alle Stakeholder, ihre Rolle bei der Aufrechterhaltung der Cloud-Sicherheit zu verstehen und zu erfüllen.\n\n👥 Stakeholder-spezifische Training Programme:\n• Executive Leadership Training zu Cloud Security Governance und Risk Management\n• Technical Team Training zu Cloud-nativen Security Tools und Best Practices\n• End User Awareness zu Cloud Security Policies und Procedures\n• Developer Training zu Secure Cloud Development und DevSecOps\n• Audit Team Training zu Cloud-spezifischen Audit Techniques\n\n📚 Comprehensive Curriculum Development:\n• Cloud Security Fundamentals und ISO 27001 Integration\n• Hands-on Training mit realen Cloud Security Scenarios\n• Regular Updates zu neuen Cloud Technologies und Threats\n• Certification Programmes für Cloud Security Expertise\n• Continuous Learning Paths für Career Development\n\n🎯 Effectiveness Measurement:\n• Regular Knowledge Assessments und Skill Evaluations\n• Simulated Phishing und Social Engineering Tests\n• Security Incident Analysis für Training Gap Identification\n• Feedback Collection und Programme Improvement\n• ROI Measurement für Training Investment Justification"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Wie entwickelt sich die Zukunft von ISO 27001 Cloud Security und welche Trends sollten Organisationen beachten?',
        answer: "Die Zukunft von ISO 27001 Cloud Security wird durch technologische Innovation, evolvierende Bedrohungslandschaften und neue Compliance-Anforderungen geprägt. Organisationen müssen proaktiv emerging Trends antizipieren und ihre Sicherheitsstrategien entsprechend anpassen.\n\n🚀 Emerging Technology Integration:\n• Quantum Computing Impact auf Encryption und Key Management\n• Extended Reality Security für immersive Cloud Applications\n• Autonomous Security Systems mit Self-Healing Capabilities\n• Blockchain Integration für Immutable Audit Trails\n• Internet of Things Security in Cloud-Connected Ecosystems\n\n🌐 Evolving Compliance Landscape:\n• Enhanced Privacy Regulations und Cross-Border Data Governance\n• Industry-specific Cloud Security Standards und Frameworks\n• Automated Compliance Reporting und Real-time Attestation\n• Continuous Audit Models mit AI-Powered Assessment\n• Global Harmonization von Cloud Security Requirements\n\n🔮 Strategic Preparation Recommendations:\n• Investment in Emerging Technology Research und Pilot Programs\n• Flexible Security Architecture für Rapid Technology Adoption\n• Continuous Skills Development und Talent Acquisition\n• Strategic Partnerships mit Cloud Innovation Leaders\n• Proactive Regulatory Engagement und Industry Collaboration\n\n💡 Innovation Opportunities:\n• Security-as-a-Service Models für Scalable Protection\n• Predictive Security Analytics für Proactive Threat Prevention\n• Collaborative Security Ecosystems mit Shared Intelligence\n• Sustainable Cloud Security für Environmental Responsibility\n• Human-Centric Security Design für Enhanced User Experience"
      }
    ]
    
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQ batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
