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
    console.log('Updating Software Compliance page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'software-compliance' })
    
    if (!existingDoc) {
      throw new Error('Document "software-compliance" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie gewährleistet ADVISORI, dass Software Compliance auch in multinationalen Konzernen mit unterschiedlichen rechtlichen Rahmenbedingungen und Geschäftskulturen erfolgreich funktioniert?",
        answer: "Multinationale Konzerne stehen vor einzigartigen Software Compliance Herausforderungen, da sie gleichzeitig verschiedene rechtliche Systeme, kulturelle Normen und Geschäftspraktiken navigieren müssen. Unterschiedliche Datenschutzgesetze, Importbestimmungen und lokale Regulierungen schaffen ein komplexes Compliance-Geflecht. ADVISORI hat spezialisierte Global Compliance Frameworks entwickelt, die lokale Anforderungen respektieren und gleichzeitig einheitliche Standards und Effizienz gewährleisten.\n\n🌍 Multinational Compliance Complexity:\n• Jurisdictional Variations: GDPR in Europa, CCPA in Kalifornien, LGPD in Brasilien und andere regionale Datenschutzgesetze erfordern unterschiedliche Software-Konfigurationen und Compliance-Prozesse.\n• Cultural Integration Challenges: Verschiedene Arbeitskulturen haben unterschiedliche Einstellungen zu Compliance, Autorität und Prozessdisziplin, was einheitliche Implementation erschwert.\n• Cross-Border Data Flows: Software-Lizenzierung und Data-Processing müssen komplexe internationale Transfer-Regulations beachten, besonders bei Cloud-Services.\n• Local Vendor Requirements: Manche Jurisdiktionen erfordern lokale Software-Anbieter oder spezielle Zertifizierungen, die globale Standardisierung komplizieren.\n\n🎯 ADVISORI's Global Harmonization Strategy:\n• Federated Compliance Architecture: Entwicklung flexibler Governance-Strukturen, die globale Standards mit lokaler Adaptation kombinieren ohne Effizienz-Verluste.\n• Cultural Change Management: Kulturell angepasste Training- und Communication-Strategien respektieren lokale Business-Kulturen und schaffen trotzdem einheitliche Compliance-Standards.\n• Regional Center of Excellence: Aufbau lokaler Expertise-Zentren, die als Cultural Bridges fungieren und globale Policies in lokale Kontexte übersetzen.\n• Cross-Border Technology Solutions: Implementation von Software-Tools, die automatisch regionale Compliance-Variations handhaben und trotzdem zentrale Oversight ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche spezifischen Herausforderungen entstehen bei der Software Compliance in agilen und DevOps-Umgebungen und wie löst ADVISORI diese?",
        answer: "Agile Entwicklung und DevOps-Praktiken haben die Software-Landschaft revolutioniert, schaffen jedoch massive Herausforderungen für traditionelles Compliance-Management. Kontinuierliche Integration, häufige Releases und schnelle Iteration stehen scheinbar im Widerspruch zu gründlichen Compliance-Prozessen. ADVISORI hat innovative Compliance-Methoden entwickelt, die Agility fördern statt behindern und DevOps-Teams dabei helfen, Compliance als strategischen Accelerator zu nutzen.\n\n⚡ Agile-DevOps Compliance Friction Points:\n• Speed vs. Thoroughness: Agile Teams bevorzugen schnelle Iteration, während Compliance traditionell gründliche Analyse und Dokumentation erfordert.\n• Continuous Change: Ständige Code-Updates und Dependency-Changes machen statische Compliance-Assessments schnell obsolet.\n• Cross-Functional Complexity: DevOps-Teams vereinen traditionell getrennte Rollen, was Compliance-Verantwortlichkeiten verwischt.\n• Tool Chain Integration: Multiple, spezialisierte DevOps-Tools erschweren einheitliche Compliance-Überwachung und Reporting.\n\n🚀 ADVISORI's Agile-Native Compliance Innovation:\n• Shift-Left Compliance: Integration von Compliance-Checks direkt in Early-Stage Development-Prozesse verhindert Last-Minute-Blockades und ermöglicht proaktive Remediation.\n• Pipeline-Integrated Scanning: Nahtlose Integration von License-Scanning und Vulnerability-Assessment in CI/CD-Pipelines ohne Performance-Impact.\n• Risk-Based Approval: Automated Pre-Approval für Low-Risk-Changes kombiniert mit Human-Review nur für High-Risk-Components optimiert Speed-vs-Safety Balance.\n• Compliance-as-Code: Infrastructure-as-Code Principles auf Compliance angewendet ermöglichen versionierte, testbare und reproduzierbare Compliance-Configurations."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie unterstützt ADVISORI bei der Entwicklung einer Software Compliance Governance, die auch externe Partner, Subunternehmer und Lieferanten mit einbezieht?",
        answer: "Moderne Softwareentwicklung ist selten ein isolierter Prozess – die meisten Organisationen arbeiten mit komplexen Ökosystemen aus Partnern, Subunternehmern, Outsourcing-Providern und Lieferanten. Diese Extended Enterprise Structures schaffen massive Compliance-Herausforderungen, da Software-Assets und -Risiken über Organisationsgrenzen hinweg verteilt sind. ADVISORI entwickelt Ecosystem-weite Compliance-Governance, die Third-Party-Risks kontrolliert ohne Innovation zu behindern.\n\n🤝 Extended Enterprise Compliance Challenges:\n• Third-Party Risk Exposure: Partner und Subunternehmer können Software-Compliance-Risiken in die Organisation einbringen ohne direkte Kontrolle oder Oversight.\n• Contractual Complexity: Software-Lizenz-Responsibilities und Liability-Sharing zwischen verschiedenen Parteien schaffen rechtliche Unklarheiten.\n• Visibility Gaps: Limited Insight in Partner-Software-Usage und Compliance-Practices erschwert Enterprise-weites Risk-Assessment.\n• Vendor Chain Dependencies: Nested Subcontracting-Relationships schaffen komplexe Dependency-Chains mit undurchsichtigen Compliance-Implications.\n\n🔗 ADVISORI's Ecosystem Compliance Architecture:\n• Partner Compliance Integration: Standardized Compliance-Requirements und Assessment-Processes für alle External Partners schaffen einheitliche Standards ohne Micromanagement.\n• Shared Responsibility Frameworks: Klare Definition von Compliance-Responsibilities und Liability-Sharing zwischen verschiedenen Ecosystem-Participants verhindert Coverage-Gaps.\n• Automated Partner Monitoring: Continuous Monitoring von Partner-Compliance-Status durch API-Integration und Automated Reporting reduziert Manual-Oversight-Effort.\n• Ecosystem Risk Aggregation: Holistic Risk-Assessment Tools analysieren Cumulative-Risk über alle Partner hinweg und identifizieren Single-Points-of-Failure in der Supply-Chain."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie hilft ADVISORI dabei, eine nachhaltige Software Compliance Kultur zu etablieren, die auch bei Personalwechseln und Organisationsveränderungen bestehen bleibt?",
        answer: "Eine der größten Herausforderungen im Software Compliance Management ist die Nachhaltigkeit – viele Organisationen schaffen erfolgreiche Compliance-Programme, die jedoch bei Personalwechseln, Reorganisationen oder Leadership-Changes zusammenbrechen. ADVISORI entwickelt resiliente Compliance-Kulturen, die in der Organisations-DNA verankert sind und unabhängig von individuellen Champions funktionieren.\n\n📈 Sustainability Challenges in Compliance Programs:\n• Champion Dependency: Viele Compliance-Initiativen sind zu stark von einzelnen Key-Persons abhängig und kollabieren bei deren Weggang.\n• Knowledge Silos: Compliance-Expertise konzentriert sich oft auf wenige Experten ohne systematisches Knowledge-Transfer.\n• Process Documentation Gaps: Informelle Prozesse und Tribal-Knowledge schaffen Vulnerabilities bei Personalwechseln.\n• Cultural Resistance: Oberflächliche Compliance-Adoption ohne echte Cultural-Integration führt zu Regression bei reduziertem Management-Focus.\n\n🏗️ ADVISORI's Institutional Compliance Architecture:\n• Embedded Process Design: Integration von Compliance in Standard-Operating-Procedures macht Compliance-Adherence zur natürlichen Consequence normaler Arbeitsabläufe.\n• Distributed Expertise Model: Systematische Entwicklung von Compliance-Competency über Multiple-Roles hinweg reduziert Single-Points-of-Failure.\n• Self-Reinforcing Feedback Loops: Automated Metrics und Incentive-Structures schaffen positive Reinforcement für Compliance-Behavior ohne External-Enforcement.\n• Institutional Memory Systems: Comprehensive Documentation und Knowledge-Management-Systems bewahren Compliance-Learnings und Best-Practices über Personnel-Changes hinweg."
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
