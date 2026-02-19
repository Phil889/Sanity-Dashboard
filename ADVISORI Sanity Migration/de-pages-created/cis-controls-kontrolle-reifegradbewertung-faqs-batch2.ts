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
    console.log('Updating CIS Controls Kontrolle & Reifegradbewertung page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cis-controls-kontrolle-reifegradbewertung' })
    
    if (!existingDoc) {
      throw new Error('Document "cis-controls-kontrolle-reifegradbewertung" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Welche konkreten Governance-Strukturen und KPIs empfiehlt ADVISORI zur nachhaltigen Steuerung der CIS Controls Reifegrad-Entwicklung auf C-Level?",
        answer: "Die nachhaltige Steuerung der CIS Controls Reifegrad-Entwicklung erfordert eine durchdachte Governance-Architektur, die strategische Cybersecurity-Ziele mit operativen Metriken verknüpft und der C-Suite die notwendige Transparenz für evidenzbasierte Entscheidungen bietet. ADVISORI entwickelt maßgeschneiderte Governance-Frameworks, die Cybersecurity als integralen Bestandteil der Unternehmensführung etablieren.\n\n🎛️ Strategische Governance-Architektur:\n• Cybersecurity Steering Committee: Etablierung eines C-Level-Gremiums mit klaren Mandaten für CIS Controls Oversight, Budget-Allokation und strategische Richtungsentscheidungen.\n• Risk-based Decision Framework: Implementierung strukturierter Entscheidungsprozesse, die CIS Controls Investments anhand von Risikoreduktion, Business Impact und regulatorischen Anforderungen priorisieren.\n• Board-Level Cybersecurity Reporting: Quartalsweise Executive Summaries mit CIS Controls Maturity Trends, kritischen Gaps und strategischen Handlungsempfehlungen.\n• Cross-functional Integration: Verzahnung der CIS Controls Governance mit bestehenden Risk Management, Compliance und IT Governance Strukturen.\n\n📊 C-Level KPIs und Performance Metriken:\n• Cybersecurity Maturity Index (CMI): Aggregierte Bewertung des CIS Controls Reifegrads mit Trend-Analyse und Benchmark-Vergleichen.\n• Risk Exposure Reduction Rate: Quantifizierung der Risikoreduktion durch CIS Controls Verbesserungen in monetären Begriffen.\n• Compliance Readiness Score: Bewertung der regulatorischen Compliance-Position basierend auf CIS Controls Implementierung.\n• Security Investment Efficiency: ROI-Messung von Cybersecurity-Investitionen anhand von Risikoreduzierung und operativer Verbesserung.\n• Incident Impact Mitigation: Messung der Effektivität der CIS Controls bei der Schadensbegrenzung realer Sicherheitsvorfälle."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Wie integriert ADVISORI die CIS Controls Reifegradbewertung in unsere bestehenden Enterprise Risk Management und Compliance-Frameworks für eine kohärente Governance-Strategie?",
        answer: "Die Integration der CIS Controls Reifegradbewertung in bestehende Enterprise Risk Management (ERM) und Compliance-Frameworks ist entscheidend für eine kohärente, ganzheitliche Governance-Strategie. ADVISORI entwickelt nahtlose Integrationsansätze, die Cybersecurity als natürlichen Bestandteil der Unternehmenssteuerung positionieren und Synergien zwischen verschiedenen Governance-Domänen maximieren.\n\n🔗 ERM-Integration und Risiko-Orchestrierung:\n• Cyber Risk Quantification: Integration der CIS Controls Bewertung in das Corporate Risk Register mit quantifizierten Cyber-Risiko-Metriken, die direkten Bezug zu Business Impact und finanziellen Auswirkungen haben.\n• Risk Appetite Alignment: Ausrichtung der CIS Controls Zielreife an der definierten Cyber-Risikotoleranz des Unternehmens und Integration in die übergeordnete Risk Appetite Statement.\n• Three Lines of Defense Mapping: Klare Zuordnung der CIS Controls Verantwortlichkeiten zu den drei Verteidigungslinien des Enterprise Risk Managements.\n• Risk Scenario Integration: Einbindung von CIS Controls-basierten Cyber-Szenarien in die unternehmensweite Szenarioanalyse und Stresstests.\n\n⚖️ Compliance-Framework-Harmonisierung:\n• Multi-Standard Mapping: Systematische Zuordnung der CIS Controls zu relevanten Compliance-Anforderungen (ISO 27001, NIST CSF, NIS2, DORA) für effiziente Multi-Standard-Compliance.\n• Unified Control Framework: Entwicklung eines einheitlichen Control Frameworks, das CIS Controls mit anderen Compliance-Anforderungen harmonisiert und Redundanzen eliminiert.\n• Audit-Ready Documentation: Strukturierung der CIS Controls Bewertung für nahtlose Integration in externe Audits und regulatorische Prüfungen.\n• Continuous Compliance Monitoring: Etablierung automatisierter Überwachungsmechanismen, die CIS Controls Status mit Compliance-Anforderungen in Echtzeit abgleichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Angesichts der Komplexität moderner IT-Landschaften und Cloud-Transformationen – wie stellt ADVISORI sicher, dass unsere CIS Controls Bewertung auch hybrid- und Multi-Cloud-Umgebungen adäquat erfasst?",
        answer: "Moderne Unternehmens-IT-Landschaften sind geprägt von Hybrid-Cloud-Architekturen, Multi-Cloud-Strategien und Edge Computing, die traditionelle Perimeter-basierte Sicherheitsansätze herausfordern. ADVISORI's CIS Controls Bewertungsmethodik ist speziell darauf ausgelegt, die Komplexität und Dynamik moderner Cloud-nativer Umgebungen zu erfassen und eine kohärente Sicherheitsstrategie über alle Infrastruktur-Domänen hinweg zu gewährleisten.\n\n☁️ Cloud-native CIS Controls Bewertung:\n• Multi-Cloud Security Posture Assessment: Umfassende Bewertung der CIS Controls Implementierung über AWS, Azure, Google Cloud und private Cloud-Umgebungen hinweg mit cloud-spezifischen Sicherheitsmetriken.\n• Container und Kubernetes Security: Spezialisierte Bewertung der CIS Controls in containerisierten Umgebungen, einschließlich CIS Kubernetes Benchmarks und Container Security Standards.\n• Infrastructure-as-Code (IaC) Security: Bewertung der Security-by-Design Prinzipien in IaC-Templates und automatisierten Deployment-Pipelines.\n• Cloud Security Posture Management (CSPM) Integration: Integration mit CSPM-Tools für kontinuierliche Überwachung der CIS Controls Compliance in dynamischen Cloud-Umgebungen.\n\n🌐 Hybrid- und Edge-Computing-Berücksichtigung:\n• Zero Trust Architecture Alignment: Bewertung der CIS Controls im Kontext von Zero Trust Prinzipien, die für moderne Hybrid-Umgebungen essentiell sind.\n• Edge Security Assessment: Spezielle Bewertungskriterien für Edge Computing-Umgebungen und IoT-Devices, die traditionelle Network Perimeter überschreiten.\n• Identity-Centric Security: Fokus auf Identity and Access Management (IAM) Controls, die in verteilten Umgebungen kritische Bedeutung haben.\n• API Security und Micro-Services: Bewertung der CIS Controls Wirksamkeit für API-basierte Architekturen und Micro-Services-Umgebungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie gewährleistet ADVISORI, dass unsere CIS Controls Reifegradbewertung nicht nur technische Aspekte, sondern auch die human factors und organisatorische Resilienz berücksichtigt?",
        answer: "Cybersecurity ist fundamentaler ein People-Problem als ein Technology-Problem. Die effektivsten CIS Controls können durch inadäquate organisatorische Strukturen, unzureichende Awareness oder defizitäre Prozesse unterminiert werden. ADVISORI's ganzheitlicher Bewertungsansatz integriert systematisch human factors und organisatorische Resilienz-Aspekte, um eine realistische und nachhaltige Cybersecurity-Posture zu bewerten.\n\n👥 Human-Centric Security Assessment:\n• Cybersecurity Culture Maturity: Bewertung der organisatorischen Sicherheitskultur, einschließlich Management Commitment, Employee Engagement und Security-First Mindset in der Belegschaft.\n• Security Awareness und Training Effectiveness: Messung der Wirksamkeit von Cybersecurity-Schulungen durch praktische Phishing-Simulationen, Knowledge Assessments und Behavioral Analytics.\n• Insider Threat Resilience: Bewertung der organisatorischen Fähigkeit zur Prävention, Erkennung und Reaktion auf Insider-Bedrohungen durch privilegierte Benutzer oder kompromittierte Accounts.\n• Change Management Integration: Analyse der Integration von Cybersecurity-Überlegungen in Organizational Change Management Prozesse.\n\n🏢 Organisatorische Resilienz-Faktoren:\n• Crisis Management Capability: Bewertung der organisatorischen Fähigkeit zur koordinierten Reaktion auf Cybersecurity-Krisen, einschließlich C-Level Crisis Communication und Stakeholder Management.\n• Cybersecurity Governance Maturity: Analyse der Wirksamkeit von Cybersecurity Governance-Strukturen, Rollen und Verantwortlichkeiten auf allen Organisationsebenen.\n• Third-Party Risk Management: Bewertung der Fähigkeit zur Steuerung von Cybersecurity-Risiken in komplexen Supplier- und Partner-Ökosystemen.\n• Business Continuity Integration: Messung der Integration von Cybersecurity-Überlegungen in Business Continuity Planning und Disaster Recovery Strategien."
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
