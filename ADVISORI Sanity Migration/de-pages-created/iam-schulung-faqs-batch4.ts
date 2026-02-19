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
    console.log('Updating IAM Schulung page with FAQ batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-schulung' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-schulung" not found')
    }
    
    // Create new FAQs for IAM Schulung advanced topics and specialized areas
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Welche fortgeschrittenen IAM-Themen und Spezialisierungen werden in Advanced-Level Schulungen behandelt?',
        answer: "Advanced-Level IAM-Schulungen adressieren komplexe Herausforderungen und spezialisierte Anwendungsbereiche, die über grundlegende Identitätsverwaltung hinausgehen. Diese Programme entwickeln Expertise für strategische Führungsrollen und hochspezialisierte technische Positionen in der IAM-Landschaft.\n\n🔬 Emerging Technologies und Innovation:\n• Artificial Intelligence und Machine Learning Integration für intelligente Identitätsverwaltung\n• Blockchain-basierte Decentralized Identity und Self-Sovereign Identity Konzepte\n• Quantum-resistant Cryptography für zukunftssichere Sicherheitsarchitekturen\n• Biometric Authentication und Behavioral Analytics für kontinuierliche Verifikation\n• Internet of Things Identity Management für Edge Computing und Connected Devices\n\n🏗️ Enterprise-Architektur und strategische Planung:\n• Identity-centric Security Architecture für Zero-Trust-Umgebungen\n• Multi-Cloud Identity Federation und Hybrid-Integration-Strategien\n• Identity Mesh Architectures für verteilte und dezentrale Systeme\n• API Economy und Identity-as-a-Service Geschäftsmodelle\n• Digital Identity Ecosystems und Partner-Integration\n\n⚖️ Governance und Risk Management:\n• Identity Risk Analytics und Predictive Threat Modeling\n• Advanced Compliance Frameworks für internationale Regulierung\n• Privacy Engineering und Data Protection by Design\n• Identity Audit und Forensic Investigation Techniques\n• Business Continuity und Disaster Recovery für Identity Services\n\n🎯 Spezialisierte Anwendungsdomänen:\n• Healthcare Identity Management mit HIPAA und Medical Device Integration\n• Financial Services IAM mit PCI-DSS und Banking-spezifischen Anforderungen\n• Government und Defense Identity für nationale Sicherheitsanwendungen\n• Industrial IoT und Operational Technology Identity Management\n• Customer Identity und Experience Management für Digital Business\n\n🚀 Leadership und strategische Kompetenzen:\n• IAM Program Management und Portfolio-Optimierung\n• Vendor Management und Technology Evaluation für Enterprise-Entscheidungen\n• Change Management und Organizational Transformation\n• Executive Communication und Board-Level Reporting\n• Innovation Management und Research & Development Leadership"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Wie werden IAM-Schulungen an branchenspezifische Anforderungen und Compliance-Standards angepasst?',
        answer: "Branchenspezifische IAM-Schulungen berücksichtigen einzigartige regulatorische Anforderungen, Geschäftsmodelle und Sicherheitsherausforderungen verschiedener Industrien. Diese maßgeschneiderten Programme gewährleisten, dass Teilnehmer nicht nur allgemeine IAM-Kompetenzen entwickeln, sondern auch spezialisiertes Wissen für ihre spezifische Branche erwerben.\n\n🏥 Healthcare und Life Sciences:\n• HIPAA Privacy und Security Rules für Patientendaten-Schutz\n• Medical Device Identity Management und FDA-Compliance\n• Clinical Trial Data Protection und Research Ethics\n• Telemedicine Security und Remote Patient Monitoring\n• Healthcare Interoperability und FHIR-Standard-Integration\n\n🏦 Financial Services und Banking:\n• PCI-DSS Compliance für Zahlungskartenindustrie\n• Basel III und Solvency II Regulatory Frameworks\n• Anti-Money Laundering und Know Your Customer Procedures\n• Open Banking APIs und Third-Party Provider Integration\n• Cryptocurrency und Digital Asset Security\n\n🏭 Manufacturing und Industrial:\n• Operational Technology Security für Produktionsumgebungen\n• Industrial IoT und SCADA System Protection\n• Supply Chain Security und Vendor Management\n• Safety Instrumented Systems und Functional Safety\n• Industry Standards und IEC Compliance\n\n🎓 Education und Research:\n• FERPA Student Privacy Protection\n• Research Data Management und Intellectual Property Protection\n• Campus Security und Multi-Tenant Environments\n• Collaborative Research und International Data Sharing\n• Academic Freedom und Access Control Balance\n\n🏛️ Government und Public Sector:\n• FISMA Federal Information Security Management\n• National Security und Classified Information Handling\n• Citizen Identity Services und Digital Government\n• Cross-Agency Collaboration und Information Sharing\n• Emergency Response und Crisis Management\n\n⚡ Energy und Utilities:\n• Critical Infrastructure Protection und NERC CIP Standards\n• Smart Grid Security und Advanced Metering Infrastructure\n• Environmental Monitoring und Regulatory Reporting\n• Emergency Response und Business Continuity\n• Renewable Energy Integration und Grid Modernization"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Welche Rolle spielen internationale Standards und Best Practices in modernen IAM-Schulungsprogrammen?',
        answer: "Internationale Standards und Best Practices bilden das Fundament professioneller IAM-Schulungen und gewährleisten, dass Teilnehmer global anerkannte Kompetenzen entwickeln. Diese Standards ermöglichen konsistente Qualität, Interoperabilität und Compliance über Organisationsgrenzen hinweg.\n\n🌐 Führende internationale IAM-Standards:\n• ISO Standards für Information Security Management und Identity Management\n• NIST Cybersecurity Framework und Identity Management Guidelines\n• OWASP Application Security und Identity-related Security Practices\n• COBIT Governance Framework für IT-Management und -Kontrolle\n• ITIL Service Management für Identity Service Delivery\n\n📋 Compliance und Regulatory Frameworks:\n• GDPR General Data Protection Regulation für EU-Datenschutz\n• SOX Sarbanes-Oxley Act für Financial Reporting Controls\n• HIPAA Health Insurance Portability und Accountability Act\n• PCI-DSS Payment Card Industry Data Security Standard\n• SOC Service Organization Control Reports\n\n🔧 Technical Standards und Protocols:\n• SAML Security Assertion Markup Language für Federation\n• OAuth und OpenID Connect für moderne Authentication\n• SCIM System for Cross-domain Identity Management\n• LDAP Lightweight Directory Access Protocol\n• Kerberos Network Authentication Protocol\n\n🏆 Industry Best Practices und Frameworks:\n• SABSA Sherwood Applied Business Security Architecture\n• TOGAF The Open Group Architecture Framework\n• COSO Committee of Sponsoring Organizations Framework\n• FAIR Factor Analysis of Information Risk\n• OCTAVE Operationally Critical Threat, Asset, and Vulnerability Evaluation\n\n🎯 Implementation und Adoption Strategies:\n• Gap Analysis für Current State Assessment\n• Roadmap Development für Standards-Compliance\n• Change Management für Standards-Implementation\n• Continuous Improvement für Standards-Evolution\n• Benchmarking für Performance Measurement\n\n🔄 Continuous Learning und Standards Evolution:\n• Standards Update Monitoring für aktuelle Entwicklungen\n• Industry Participation für Standards-Entwicklung\n• Cross-industry Learning für Best Practice Sharing\n• Research Integration für Innovation und Improvement\n• Global Collaboration für internationale Harmonisierung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie unterstützen IAM-Schulungen die Entwicklung von Führungskompetenzen und strategischem Denken?',
        answer: "IAM-Schulungen für Führungskräfte entwickeln strategisches Denken und Führungskompetenzen, die über technische Fertigkeiten hinausgehen und befähigen, IAM als strategischen Business-Enabler zu positionieren. Diese Programme kombinieren technische Expertise mit Management-Fähigkeiten für erfolgreiche Organisationsführung.\n\n🎯 Strategic Leadership Development:\n• Vision Development für IAM-Strategien und langfristige Roadmaps\n• Business Case Creation für IAM-Investitionen und ROI-Demonstration\n• Stakeholder Management für Executive Buy-in und Cross-functional Collaboration\n• Risk Management für strategische Entscheidungsfindung\n• Innovation Leadership für Competitive Advantage und Market Differentiation\n\n💼 Executive Communication und Presentation Skills:\n• Board-Level Reporting für IAM-Performance und Risk Status\n• Technical Translation für Non-Technical Stakeholders\n• Crisis Communication für Security Incidents und Business Disruption\n• Change Communication für Organizational Transformation\n• Thought Leadership für Industry Recognition und Expert Positioning\n\n🏗️ Organizational Development und Team Building:\n• Team Leadership für High-Performance IAM Teams\n• Talent Development für Succession Planning und Skill Building\n• Culture Development für Security-first Mindset\n• Cross-functional Collaboration für Business Integration\n• Vendor Management für Strategic Partnerships\n\n📊 Strategic Planning und Decision Making:\n• Strategic Assessment für Current State und Future Vision\n• Portfolio Management für IAM Program Optimization\n• Resource Allocation für Maximum Impact und Efficiency\n• Performance Management für Continuous Improvement\n• Scenario Planning für Future Readiness\n\n🚀 Innovation und Transformation Leadership:\n• Digital Transformation für Business Model Evolution\n• Technology Evaluation für Strategic Technology Decisions\n• Market Analysis für Competitive Intelligence\n• Partnership Development für Ecosystem Collaboration\n• Research Leadership für Innovation und Emerging Technologies\n\n🌟 Personal Leadership Excellence:\n• Executive Presence für Leadership Credibility\n• Emotional Intelligence für Team Motivation und Engagement\n• Ethical Leadership für Trust und Integrity\n• Continuous Learning für Personal Growth und Adaptation\n• Mentoring und Coaching für Next-Generation Leader Development"
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
    console.log('✅ FAQ batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
