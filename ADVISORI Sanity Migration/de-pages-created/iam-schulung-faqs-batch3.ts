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
    console.log('Updating IAM Schulung page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-schulung' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-schulung" not found')
    }
    
    // Create new FAQs for IAM Schulung certification and skill development
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Welche IAM-Zertifizierungen sind für verschiedene Karrierewege am wertvollsten und wie bereiten Schulungen optimal darauf vor?',
        answer: "IAM-Zertifizierungen sind strategische Investitionen in die berufliche Entwicklung und öffnen Türen zu attraktiven Karrieremöglichkeiten in der Cybersecurity-Branche. Die Auswahl der richtigen Zertifizierung hängt von individuellen Karrierezielen, aktuellen Kompetenzen und Marktanforderungen ab.\n\n🏆 Vendor-spezifische Enterprise-Zertifizierungen:\n• Microsoft Azure Active Directory Zertifizierungen für Cloud-Identity-Spezialisierung\n• AWS IAM und Security Specialty für Cloud-Security-Expertise\n• Okta Certified Professional für Identity-as-a-Service Kompetenz\n• SailPoint IdentityIQ Certified Implementation Engineer für Enterprise-IAM\n• CyberArk Certified Delivery Engineer für Privileged Access Management\n\n🎯 Vendor-neutrale Industrie-Standards:\n• CISSP mit IAM-Domain-Fokus für Senior-Level Security-Positionen\n• CISM für Management-orientierte IAM-Rollen\n• CISA für Audit und Compliance-Spezialisierung\n• SABSA für Enterprise-Architektur und strategische Planung\n• TOGAF für IT-Architektur mit Security-Integration\n\n📚 Strukturierte Zertifizierungsvorbereitung:\n• Comprehensive Curriculum-Mapping für vollständige Prüfungsabdeckung\n• Practice Exams mit realistischen Prüfungsszenarien und Zeitmanagement\n• Hands-on Lab-Sessions für praktische Kompetenz-Validierung\n• Expert-led Review-Sessions für komplexe Themengebiete\n• Study Groups und Peer-Learning für kollaborative Vorbereitung\n\n🚀 Karrierewege und Spezialisierungsrichtungen:\n• Technical Track für IAM Engineers und Solution Architects\n• Management Track für IAM Program Managers und Directors\n• Consulting Track für externe Beratung und Projektleitung\n• Audit Track für Compliance und Risk Management\n• Research Track für Innovation und Emerging Technologies\n\n🌐 Continuous Learning und Rezertifizierung:\n• Continuing Education Credits für Zertifizierungserhaltung\n• Advanced Specialization Paths für Karriereentwicklung\n• Industry Conference Participation für Networking und Knowledge Sharing\n• Professional Development Planning für strategische Weiterbildung\n• Mentoring und Coaching für Karriere-Acceleration"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Wie werden Unternehmensteams durch maßgeschneiderte Inhouse-IAM-Schulungen entwickelt?',
        answer: "Maßgeschneiderte Inhouse-IAM-Schulungen sind strategische Investitionen in die Organisationsentwicklung und ermöglichen es Unternehmen, interne Expertise aufzubauen, die perfekt auf spezifische Geschäftsanforderungen und technische Umgebungen abgestimmt ist. Diese personalisierten Lernprogramme maximieren den ROI durch fokussierte Kompetenzentwicklung.\n\n🎯 Bedarfsanalyse und Curriculum-Entwicklung:\n• Comprehensive Skills Assessment für aktuelle Kompetenz-Mapping\n• Business Requirements Analysis für strategische Ausrichtung\n• Technical Environment Evaluation für praxisrelevante Inhalte\n• Role-based Learning Paths für verschiedene Funktionen und Verantwortlichkeiten\n• Custom Content Development für unternehmensspezifische Herausforderungen\n\n🏗️ Team-orientierte Lernarchitektur:\n• Cross-functional Training für verbesserte Zusammenarbeit zwischen Abteilungen\n• Hierarchie-übergreifende Programme für einheitliches Verständnis\n• Specialized Tracks für verschiedene Rollen und Erfahrungslevel\n• Collaborative Projects für praktische Teamwork-Entwicklung\n• Knowledge Transfer Sessions für interne Expertise-Verteilung\n\n💼 Business-Integration und praktische Anwendung:\n• Real-world Case Studies basierend auf aktuellen Unternehmensprojekten\n• Hands-on Labs mit unternehmenseigenen IAM-Systemen und -Tools\n• Implementation Planning für direkte Anwendung des Gelernten\n• Change Management Integration für erfolgreiche Transformation\n• ROI Measurement und Business Impact Assessment\n\n🔄 Flexible Delivery und Zeitmanagement:\n• Modular Training Design für minimale Geschäftsunterbrechung\n• Blended Learning Approaches für optimale Flexibilität\n• Just-in-Time Training für projektspezifische Kompetenzentwicklung\n• Phased Implementation für schrittweise Kompetenzaufbau\n• Ongoing Support und Follow-up für nachhaltige Entwicklung\n\n📊 Erfolgs-Tracking und kontinuierliche Verbesserung:\n• Team Performance Metrics für objektive Fortschrittsmessung\n• Individual Development Plans für personalisierte Weiterentwicklung\n• Regular Assessment und Feedback-Integration\n• Continuous Curriculum Updates für Aktualität und Relevanz\n• Long-term Impact Analysis für strategische Planung\n\n🌟 Organizational Excellence und Kultur-Entwicklung:\n• Security-first Mindset Development für kulturelle Transformation\n• Innovation Encouragement für kontinuierliche Verbesserung\n• Best Practice Establishment für organisationale Standards\n• Knowledge Management Systems für institutionelles Lernen\n• Leadership Development für interne Champions und Mentoren"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Welche Rolle spielen aktuelle Bedrohungslagen und Compliance-Anforderungen in modernen IAM-Schulungsprogrammen?',
        answer: "Aktuelle Bedrohungslagen und Compliance-Anforderungen sind zentrale Treiber für moderne IAM-Schulungsprogramme und gewährleisten, dass Teilnehmer nicht nur technische Fertigkeiten entwickeln, sondern auch strategisches Verständnis für sich wandelnde Sicherheitslandschaften und regulatorische Entwicklungen aufbauen.\n\n🛡️ Threat Landscape Integration und Cyber Defense:\n• Advanced Persistent Threat Simulation für realistische Angriffsszenarios\n• Identity-based Attack Vectors mit praktischen Abwehrstrategien\n• Social Engineering und Phishing-Awareness für Human Factor Security\n• Insider Threat Detection und Behavioral Analytics\n• Zero-Day Vulnerability Response und Incident Management\n\n📋 Regulatory Compliance und Standards-Integration:\n• GDPR und Privacy-by-Design Prinzipien für Datenschutz-Compliance\n• SOX und Financial Services Regulations für Finanzdienstleister\n• HIPAA und Healthcare-spezifische Identitätsanforderungen\n• ISO Standards und International Best Practices\n• Industry-specific Compliance Frameworks und Audit-Vorbereitung\n\n🔍 Real-time Threat Intelligence Integration:\n• Current Attack Trends und Emerging Threat Patterns\n• Threat Actor Profiling und Attack Attribution\n• Vulnerability Management und Patch-Strategien\n• Threat Hunting Techniques für proaktive Sicherheit\n• Intelligence Sharing und Community Collaboration\n\n⚖️ Legal und Regulatory Updates:\n• Emerging Legislation und Policy Changes\n• Cross-border Data Transfer Regulations\n• Digital Identity Standards und Government Initiatives\n• Privacy Rights und Consumer Protection Laws\n• Liability und Risk Management Considerations\n\n🎯 Practical Application und Scenario-based Learning:\n• Incident Response Simulations mit aktuellen Bedrohungsszenarien\n• Compliance Audit Preparation mit realen Prüfungsanforderungen\n• Risk Assessment Workshops für Business Impact Analysis\n• Crisis Management und Business Continuity Planning\n• Stakeholder Communication für Executive Reporting\n\n🔄 Continuous Updates und Adaptive Learning:\n• Regular Content Refreshes für Aktualität und Relevanz\n• Expert Guest Speakers für Industry Insights\n• Threat Intelligence Briefings für Current Awareness\n• Regulatory Update Sessions für Compliance-Readiness\n• Innovation Integration für Future-proofing"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Wie unterstützen IAM-Schulungen die digitale Transformation und Cloud-Migration von Unternehmen?',
        answer: "IAM-Schulungen sind strategische Enabler für erfolgreiche digitale Transformation und Cloud-Migration, da sie Teams mit den notwendigen Kompetenzen ausstatten, um komplexe Identitätsherausforderungen in hybriden und Cloud-nativen Umgebungen zu bewältigen. Diese Schulungen überbrücken die Lücke zwischen traditionellen IT-Ansätzen und modernen Cloud-Architekturen.\n\n☁️ Cloud-native IAM-Architekturen und Services:\n• Multi-Cloud Identity Federation für konsistente Identitätsverwaltung\n• Cloud Service Provider IAM-Services und Best Practices\n• Serverless Security und Function-as-a-Service Identity Management\n• Container Security und Kubernetes RBAC-Implementation\n• API Gateway Integration und Microservices Authentication\n\n🔄 Hybrid-Integration und Legacy-Modernisierung:\n• Directory Services Integration für nahtlose Hybrid-Umgebungen\n• Legacy System Modernization ohne Geschäftsunterbrechung\n• Gradual Migration Strategies für Risk-minimierte Transformation\n• Identity Bridging zwischen On-Premises und Cloud-Systemen\n• Data Synchronization und Consistency Management\n\n🚀 DevOps und Agile Integration:\n• Infrastructure as Code für IAM-Deployment und -Management\n• CI/CD Pipeline Integration für automatisierte Security-Tests\n• DevSecOps Practices für Security-by-Design\n• Automated Provisioning und Configuration Management\n• Continuous Compliance und Policy-as-Code\n\n📊 Business Transformation und Change Management:\n• Digital Workplace Enablement für moderne Arbeitsmodelle\n• Customer Identity und Experience Optimization\n• Partner Ecosystem Integration für B2B-Collaboration\n• Mobile-first Strategies für moderne Benutzererwartungen\n• Analytics und Business Intelligence für datengetriebene Entscheidungen\n\n🎯 Strategic Planning und Roadmap Development:\n• Cloud Migration Assessment und Readiness Evaluation\n• Risk Management für Transformation-Projekte\n• Cost Optimization und Resource Planning\n• Performance Monitoring und Success Metrics\n• Innovation Integration für Competitive Advantage\n\n🌐 Future-ready Skills und Emerging Technologies:\n• Artificial Intelligence und Machine Learning in IAM-Kontexten\n• Blockchain und Decentralized Identity Concepts\n• Internet of Things und Edge Computing Security\n• Quantum Computing Implications für Cryptography\n• Privacy Engineering und Data Protection by Design"
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
    console.log('✅ FAQ batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
