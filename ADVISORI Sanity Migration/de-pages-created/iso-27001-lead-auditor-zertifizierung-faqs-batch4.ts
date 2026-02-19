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
    console.log('Updating ISO 27001 Lead Auditor Zertifizierung page with FAQ batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-lead-auditor-zertifizierung' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-lead-auditor-zertifizierung" not found')
    }
    
    // Create new FAQs for advanced topics and industry applications
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Welche Rolle spielen Lead Auditoren bei der Bewertung von Cloud-Sicherheit und modernen IT-Architekturen?',
        answer: "Lead Auditoren spielen eine entscheidende Rolle bei der Bewertung von Cloud-Sicherheit und modernen IT-Architekturen, da diese Umgebungen neue Herausforderungen und Komplexitäten mit sich bringen, die traditionelle Audit-Ansätze erweitern und anpassen müssen. Die Expertise in Cloud-Security-Auditing wird zunehmend zu einer Kernkompetenz für moderne Lead Auditoren.\n\n☁️ Cloud-spezifische Audit-Kompetenzen:\n• Bewertung von Shared Responsibility Models und der korrekten Verteilung von Sicherheitsverantwortlichkeiten zwischen Cloud Service Providern und Kunden\n• Audit von Multi-Cloud und Hybrid-Cloud-Strategien mit Fokus auf konsistente Sicherheitsstandards über verschiedene Plattformen hinweg\n• Assessment von Cloud-nativen Sicherheitskontrollen wie Identity and Access Management, Encryption at Rest und in Transit, und Network Segmentation\n• Bewertung von Container-Sicherheit, Kubernetes-Konfigurationen und DevSecOps-Pipelines in Cloud-Umgebungen\n• Evaluation von Cloud Compliance und Governance Frameworks einschließlich SOC 2, ISO 27017 und cloud-spezifischer Zertifizierungen\n\n🏗️ Moderne Architektur-Bewertung:\n• Audit von Microservices-Architekturen und API-Sicherheit mit Fokus auf Service-to-Service-Kommunikation und Zero Trust Principles\n• Bewertung von Serverless Computing und Function-as-a-Service Implementierungen hinsichtlich Sicherheit und Compliance\n• Assessment von Edge Computing und IoT-Integrationen mit Schwerpunkt auf dezentraler Sicherheitsarchitektur\n• Evaluation von Software-Defined Networking und Infrastructure as Code Ansätzen\n• Bewertung von CI/CD-Pipelines und automatisierter Deployment-Prozesse aus Sicherheitsperspektive\n\n🔐 Advanced Security Controls Assessment:\n• Bewertung von Zero Trust Architecture Implementierungen und deren Effektivität in modernen IT-Umgebungen\n• Audit von Advanced Threat Detection und Response Capabilities in Cloud-nativen Umgebungen\n• Assessment von Data Loss Prevention und Information Rights Management in verteilten Systemen\n• Evaluation von Privileged Access Management in Cloud und Hybrid-Umgebungen\n• Bewertung von Encryption Key Management und Hardware Security Module Integration\n\n📊 Cloud Governance und Compliance:\n• Audit von Cloud Governance Frameworks und deren Integration in bestehende Unternehmens-Governance\n• Bewertung von Data Residency und Cross-Border Data Transfer Compliance in globalen Cloud-Deployments\n• Assessment von Vendor Risk Management und Third-Party Cloud Service Provider Oversight\n• Evaluation von Cloud Cost Management und Security Budget Allocation\n• Bewertung von Disaster Recovery und Business Continuity in Cloud-Umgebungen\n\n🔄 Continuous Compliance und Automation:\n• Bewertung von Infrastructure as Code und Policy as Code Implementierungen für automatisierte Compliance\n• Audit von Continuous Monitoring und Real-time Security Assessment Capabilities\n• Assessment von Automated Incident Response und Self-Healing Security Controls\n• Evaluation von DevSecOps Integration und Security Testing in Development Pipelines\n• Bewertung von Cloud Security Posture Management und Configuration Drift Detection"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Wie bereitet die Lead Auditor Ausbildung auf die Bewertung von Künstlicher Intelligenz und Machine Learning Systemen vor?',
        answer: "Die Bewertung von Künstlicher Intelligenz und Machine Learning Systemen stellt eine der komplexesten Herausforderungen für moderne Lead Auditoren dar, da diese Technologien neue Risikokategorien und Compliance-Anforderungen mit sich bringen. Unsere Ausbildung entwickelt spezialisierte Kompetenzen für die systematische Bewertung von KI-Systemen aus Sicherheits-, Ethik- und Compliance-Perspektive.\n\n🤖 KI-System-Architektur und Sicherheitsbewertung:\n• Audit von Machine Learning Pipelines einschließlich Data Ingestion, Model Training, Validation und Deployment Prozessen\n• Bewertung von Model Security und Protection gegen Adversarial Attacks, Model Inversion und Data Poisoning\n• Assessment von AI Model Governance einschließlich Version Control, Model Registry und Lifecycle Management\n• Evaluation von Federated Learning und Distributed AI Systemen hinsichtlich Datenschutz und Sicherheit\n• Bewertung von AI Infrastructure Security einschließlich GPU Clusters, Cloud AI Services und Edge AI Deployments\n\n📊 Datenqualität und Bias-Assessment:\n• Audit von Training Data Quality, Representativeness und Bias Detection Mechanismen\n• Bewertung von Data Lineage und Provenance Tracking für AI Model Transparency\n• Assessment von Synthetic Data Generation und Privacy-Preserving Machine Learning Techniken\n• Evaluation von Data Anonymization und Pseudonymization in AI Training Datasets\n• Bewertung von Cross-Border Data Transfer Compliance für internationale AI Development\n\n⚖️ AI Ethics und Algorithmic Accountability:\n• Bewertung von Algorithmic Fairness und Discrimination Prevention Mechanisms\n• Audit von Explainable AI und Model Interpretability Requirements\n• Assessment von Human-in-the-Loop Controls und Human Oversight Mechanisms\n• Evaluation von AI Decision Transparency und Auditability Requirements\n• Bewertung von Stakeholder Impact Assessment und Community Engagement Prozesse\n\n🔒 AI-spezifische Compliance und Governance:\n• Audit von EU AI Act Compliance und Risk Classification von AI Systemen\n• Bewertung von AI Governance Frameworks und Responsible AI Policies\n• Assessment von AI Risk Management und Impact Assessment Prozesse\n• Evaluation von AI Incident Response und Model Failure Handling\n• Bewertung von AI Vendor Management und Third-Party AI Service Assessment\n\n🔍 Advanced AI Audit Techniken:\n• Anwendung von Model Validation Techniken und Statistical Testing für AI System Assessment\n• Bewertung von A/B Testing und Gradual Rollout Strategies für AI Deployments\n• Assessment von Model Monitoring und Drift Detection Capabilities\n• Evaluation von AI Performance Metrics und Business Impact Measurement\n• Bewertung von AI System Integration und Legacy System Compatibility"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Welche besonderen Herausforderungen ergeben sich bei internationalen und Multi-Site-Audits und wie werden Lead Auditoren darauf vorbereitet?',
        answer: "Internationale und Multi-Site-Audits stellen Lead Auditoren vor komplexe Herausforderungen, die weit über technische Bewertungen hinausgehen und kulturelle, rechtliche und organisatorische Aspekte umfassen. Unsere Ausbildung entwickelt spezialisierte Kompetenzen für die erfolgreiche Durchführung grenzüberschreitender Audits in verschiedenen regulatorischen und kulturellen Kontexten.\n\n🌍 Cross-Cultural Audit Competencies:\n• Entwicklung kultureller Sensibilität und Anpassungsfähigkeit für effektive Kommunikation in verschiedenen Geschäftskulturen\n• Training in kulturspezifischen Kommunikationsstilen, Hierarchiestrukturen und Entscheidungsfindungsprozessen\n• Verständnis für verschiedene Arbeitsethiken, Zeitkonzepte und Geschäftspraktiken in internationalen Kontexten\n• Entwicklung von Flexibilität in Audit-Ansätzen zur Berücksichtigung lokaler Besonderheiten ohne Kompromisse bei Standards\n• Training in Konfliktlösung und Mediation bei kulturell bedingten Missverständnissen oder Widerständen\n\n⚖️ Multi-Jurisdictional Compliance Management:\n• Bewertung komplexer regulatorischer Landschaften mit überlappenden und teilweise widersprüchlichen Anforderungen\n• Assessment von Data Localization Requirements und Cross-Border Data Transfer Compliance\n• Evaluation von lokalen Datenschutzgesetzen und deren Integration in globale Compliance-Frameworks\n• Bewertung von Sanctions Compliance und Export Control Regulations in internationalen Organisationen\n• Assessment von Local Labor Laws und deren Auswirkungen auf Informationssicherheits-Praktiken\n\n🏢 Complex Organizational Structures:\n• Audit von Matrix-Organisationen mit geteilten Verantwortlichkeiten zwischen regionalen und globalen Einheiten\n• Bewertung von Subsidiary Governance und Parent Company Oversight Mechanisms\n• Assessment von Joint Ventures und Strategic Partnerships mit komplexen Ownership-Strukturen\n• Evaluation von Outsourcing und Offshoring Arrangements mit Multi-Vendor Ecosystems\n• Bewertung von Merger und Acquisition Integration Processes aus Sicherheitsperspektive\n\n📡 Remote und Virtual Audit Capabilities:\n• Entwicklung fortgeschrittener Remote-Audit-Techniken für effiziente Bewertung verteilter Organisationen\n• Training in Virtual Collaboration Tools und Digital Evidence Collection Methoden\n• Bewertung von Remote Access Security und Virtual Private Network Configurations\n• Assessment von Cloud-based Collaboration Platforms und deren Sicherheitsimplikationen\n• Evaluation von Digital Identity Verification und Remote Authentication Mechanisms\n\n🔄 Coordination und Project Management:\n• Entwicklung von Fähigkeiten zur Koordination komplexer Multi-Team-Audits mit verschiedenen Zeitzonen\n• Training in International Project Management und Cross-Border Team Leadership\n• Bewertung von Communication Protocols und Escalation Procedures in globalen Organisationen\n• Assessment von Knowledge Management und Information Sharing zwischen verschiedenen Standorten\n• Evaluation von Global Incident Response und Crisis Management Capabilities"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie entwickelt sich die Lead Auditor Rolle im Kontext von Nachhaltigkeit und ESG-Compliance und welche neuen Kompetenzen sind erforderlich?',
        answer: "Die Integration von Nachhaltigkeit und ESG-Compliance in die Lead Auditor Rolle reflektiert die wachsende Bedeutung von Environmental, Social und Governance Faktoren in der Unternehmensbewertung. Lead Auditoren müssen neue Kompetenzen entwickeln, um die Verbindungen zwischen Informationssicherheit, Nachhaltigkeit und ESG-Performance zu verstehen und zu bewerten.\n\n🌱 Environmental Impact Assessment:\n• Bewertung von Green IT Initiatives und deren Auswirkungen auf Informationssicherheits-Architekturen\n• Assessment von Energy Efficiency in Data Centers und Cloud Computing Umgebungen\n• Evaluation von Sustainable Technology Procurement und Lifecycle Management Practices\n• Bewertung von Carbon Footprint Measurement und Reporting für IT-Infrastrukturen\n• Assessment von Circular Economy Principles in IT Asset Management und E-Waste Handling\n\n👥 Social Responsibility und Digital Inclusion:\n• Bewertung von Digital Accessibility und Inclusive Design in Informationssystemen\n• Assessment von Cybersecurity Awareness und Digital Literacy Programs für alle Stakeholder\n• Evaluation von Supply Chain Social Responsibility und Ethical Sourcing in IT Procurement\n• Bewertung von Remote Work Enablement und Digital Workplace Equity\n• Assessment von Community Impact und Digital Divide Considerations in Technology Deployments\n\n🏛️ Governance und Ethical Technology Use:\n• Bewertung von AI Ethics und Responsible Technology Use Policies\n• Assessment von Data Ethics und Privacy by Design Implementation\n• Evaluation von Stakeholder Engagement und Transparency in Technology Governance\n• Bewertung von Board Oversight und Executive Accountability für Technology Decisions\n• Assessment von Whistleblower Protection und Ethical Reporting Mechanisms\n\n📊 ESG Reporting und Disclosure:\n• Bewertung von ESG Data Collection und Verification Processes\n• Assessment von Sustainability Reporting Standards und Framework Compliance\n• Evaluation von Third-Party ESG Assurance und Verification Mechanisms\n• Bewertung von Materiality Assessment und Stakeholder Impact Analysis\n• Assessment von ESG Risk Integration in Enterprise Risk Management Frameworks\n\n🔄 Integrated Audit Approaches:\n• Entwicklung von Fähigkeiten zur Integration von ESG Considerations in traditionelle Informationssicherheits-Audits\n• Training in Multi-Stakeholder Engagement und Collaborative Audit Approaches\n• Bewertung von Cross-Functional Governance und Integrated Risk Management\n• Assessment von Long-term Value Creation und Sustainable Business Model Evaluation\n• Evaluation von Innovation und Technology Transformation im Kontext von Sustainability Goals"
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
