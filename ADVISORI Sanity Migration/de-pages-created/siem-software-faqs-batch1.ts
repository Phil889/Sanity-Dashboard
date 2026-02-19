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
    console.log('Updating SIEM Software page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'siem-software' })
    
    if (!existingDoc) {
      throw new Error('Document "siem-software" not found')
    }
    
    // Create new FAQs for SIEM Software fundamentals and selection criteria
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was sind die wichtigsten Kriterien bei der Auswahl einer SIEM Software und wie unterscheiden sich die verschiedenen Lösungsansätze?',
        answer: "Die Auswahl der richtigen SIEM Software ist eine strategische Entscheidung, die weitreichende Auswirkungen auf die gesamte Cybersecurity-Posture eines Unternehmens hat. Moderne SIEM Lösungen unterscheiden sich erheblich in ihren Architekturen, Analysefähigkeiten und Deployment-Modellen, weshalb eine systematische Evaluierung basierend auf klar definierten Kriterien unerlässlich ist.\n\n🎯 Funktionale Anforderungen und Use Case Abdeckung:\n• Umfassende Log-Sammlung und Normalisierung für alle relevanten Datenquellen in Ihrer IT-Infrastruktur\n• Erweiterte Korrelations- und Analysefähigkeiten für die Erkennung komplexer Angriffsmuster\n• Real-time Monitoring mit konfigurierbaren Alerting-Mechanismen und Eskalationsprozessen\n• Forensische Analysewerkzeuge für detaillierte Incident Investigation und Root Cause Analysis\n• Compliance-Reporting-Funktionen für regulatorische Anforderungen und Audit-Zwecke\n\n🏗️ Architektur und Deployment-Optionen:\n• On-Premise SIEM Lösungen bieten maximale Kontrolle und Datensouveränität, erfordern jedoch erhebliche Infrastruktur-Investitionen\n• Cloud-native SIEM Plattformen ermöglichen schnelle Skalierung und reduzierte Betriebskosten bei gleichzeitiger Flexibilität\n• Hybride Ansätze kombinieren die Vorteile beider Welten und ermöglichen schrittweise Migration-Strategien\n• SaaS-basierte Lösungen reduzieren den Wartungsaufwand, während Managed SIEM Services komplette Outsourcing-Optionen bieten\n• Multi-Tenant-Architekturen für Organisationen mit dezentralen Strukturen oder Service Provider\n\n⚡ Performance und Skalierbarkeit:\n• Event Processing Rate und die Fähigkeit zur Verarbeitung von Millionen Events pro Sekunde\n• Horizontale und vertikale Skalierungsmöglichkeiten für wachsende Datenmengen\n• Storage-Architekturen für Hot Data, Warm Data und Cold Data mit optimierten Kosten-Performance-Verhältnissen\n• Query-Performance für Real-time Dashboards und historische Analysen\n• Hochverfügbarkeits-Features mit Disaster Recovery und Business Continuity Capabilities\n\n🔗 Integration und Interoperabilität:\n• Native Konnektoren für gängige Sicherheitstools, IT-Systeme und Cloud-Plattformen\n• API-Verfügbarkeit für Custom Integrationen und Workflow-Automatisierung\n• SOAR-Integration für Security Orchestration und Automated Response\n• Threat Intelligence Feeds und IOC-Management-Capabilities\n• Kompatibilität mit bestehenden ITSM-Prozessen und Ticketing-Systemen\n\n💰 Total Cost of Ownership und Lizenzmodelle:\n• Transparente Lizenzmodelle basierend auf Events per Second, Data Volume oder Named Users\n• Versteckte Kosten für Professional Services, Training und Ongoing Support\n• Infrastructure Requirements und damit verbundene Hardware- oder Cloud-Kosten\n• Operational Expenses für Personal, Wartung und kontinuierliche Optimierung\n• ROI-Betrachtung basierend auf Effizienzsteigerungen und Risikoreduktion"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie unterscheiden sich Enterprise SIEM Lösungen von SMB-fokussierten Produkten und welche Faktoren bestimmen die richtige Wahl?',
        answer: "Die SIEM Software Landschaft bietet Lösungen für unterschiedlichste Organisationsgrößen und Anforderungsprofile. Enterprise SIEM Systeme und SMB-fokussierte Produkte unterscheiden sich fundamental in ihrer Architektur, Komplexität und ihrem Funktionsumfang, weshalb die Auswahl sorgfältig an die spezifischen Bedürfnisse und Ressourcen der Organisation angepasst werden muss.\n\n🏢 Enterprise SIEM Charakteristika:\n• Hochskalierbare Architekturen für die Verarbeitung von Millionen bis Milliarden Events täglich\n• Umfassende Customization-Möglichkeiten für komplexe Korrelationsregeln und individuelle Use Cases\n• Multi-Tenant-Fähigkeiten für große Organisationen mit dezentralen Strukturen oder verschiedenen Business Units\n• Erweiterte Compliance-Features für regulierte Industrien mit strengen Audit-Anforderungen\n• Professionelle Services und dedizierte Support-Teams für Implementation und Ongoing Operations\n\n🏪 SMB SIEM Fokussierung:\n• Vorkonfigurierte Templates und Out-of-the-Box Use Cases für schnelle Deployment-Zyklen\n• Intuitive Benutzeroberflächen, die auch von weniger spezialisierten Teams bedient werden können\n• Kostenoptimierte Lizenzmodelle mit transparenten Pricing-Strukturen\n• Cloud-first Ansätze zur Reduzierung von Infrastructure Overhead und Maintenance-Aufwand\n• Integrierte Managed Services Optionen für Organisationen ohne dedizierte SOC-Teams\n\n📊 Organisatorische Entscheidungsfaktoren:\n• IT-Team Größe und verfügbare Cybersecurity-Expertise für SIEM Operations und Maintenance\n• Datenvolumen und Event-Rate basierend auf der Größe und Komplexität der IT-Infrastruktur\n• Compliance-Anforderungen und regulatorische Verpflichtungen in Ihrer Branche\n• Budget-Constraints für Initial Investment und Ongoing Operational Costs\n• Wachstumspläne und zukünftige Skalierungsanforderungen der Organisation\n\n🔧 Technische Differenzierungsmerkmale:\n• Deployment-Komplexität und Time-to-Value für die initiale Implementierung\n• Customization-Tiefe für spezifische Anpassungen an organisatorische Anforderungen\n• Integration-Capabilities mit bestehenden Security Tools und IT-Management-Systemen\n• Advanced Analytics Features wie Machine Learning, UEBA und Behavioral Analysis\n• Forensic Capabilities für detaillierte Incident Investigation und Threat Hunting\n\n🎯 Hybrid-Ansätze und Evolutionspfade:\n• Modulare SIEM Architekturen, die mit der Organisation mitwachsen können\n• Cloud-to-Cloud Migration-Pfade für Organisationen, die von SMB zu Enterprise-Anforderungen wechseln\n• Managed SIEM Services als Brücke zwischen Self-Managed und Fully-Outsourced Modellen\n• Proof-of-Concept Strategien zur Validierung der Eignung verschiedener Lösungsansätze\n• Vendor-Roadmaps und Zukunftssicherheit für langfristige Investitionsentscheidungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Vor- und Nachteile bieten Cloud SIEM versus On-Premise SIEM Lösungen und wie trifft man die richtige Entscheidung?',
        answer: "Die Entscheidung zwischen Cloud SIEM und On-Premise SIEM Lösungen ist eine der fundamentalsten Architektur-Entscheidungen bei der SIEM Software Auswahl. Beide Ansätze bieten spezifische Vorteile und Herausforderungen, die sorgfältig gegen die organisatorischen Anforderungen, Compliance-Vorgaben und strategischen Ziele abgewogen werden müssen.\n\n☁️ Cloud SIEM Vorteile und Charakteristika:\n• Schnelle Deployment-Zyklen ohne aufwändige Hardware-Beschaffung und Infrastruktur-Setup\n• Elastische Skalierung basierend auf aktuellen Anforderungen mit Pay-as-you-Grow Modellen\n• Automatische Updates und Patches ohne Downtime oder manuelle Intervention\n• Globale Verfügbarkeit und Disaster Recovery durch Cloud Provider Infrastructure\n• Reduzierte Total Cost of Ownership durch eliminierte Hardware-Investitionen und Wartungskosten\n\n🏢 On-Premise SIEM Stärken und Kontrolle:\n• Vollständige Datensouveränität und Kontrolle über sensitive Sicherheitsdaten\n• Compliance-Konformität für Organisationen mit strikten Data Residency Anforderungen\n• Anpassbare Performance-Optimierung basierend auf spezifischen Workload-Charakteristika\n• Integration in bestehende Datacenter-Infrastrukturen und Netzwerk-Architekturen\n• Unabhängigkeit von Internet-Konnektivität für kritische Security Operations\n\n🔒 Sicherheits- und Compliance-Überlegungen:\n• Data Privacy Regulations und geografische Beschränkungen für Datenverarbeitung und -speicherung\n• Shared Responsibility Models in Cloud-Umgebungen versus Full Control in On-Premise Deployments\n• Encryption-Standards für Data in Transit und Data at Rest in verschiedenen Deployment-Modellen\n• Access Control und Identity Management für Cloud-basierte versus lokale SIEM-Zugriffe\n• Audit-Trails und Compliance-Dokumentation für regulierte Industrien\n\n💰 Kostenstrukturen und TCO-Analyse:\n• CAPEX versus OPEX Modelle und deren Auswirkungen auf Budget-Planung und Cash Flow\n• Versteckte Kosten in Cloud-Modellen wie Data Egress Charges und Premium Support\n• Personalkosten für SIEM Administration und Maintenance in verschiedenen Deployment-Szenarien\n• Skalierungskosten bei wachsenden Datenvolumen und Performance-Anforderungen\n• Disaster Recovery und Business Continuity Investitionen für On-Premise versus Cloud-native Lösungen\n\n🔄 Hybrid und Multi-Cloud Strategien:\n• Hybrid SIEM Architekturen für die Kombination von On-Premise und Cloud-Komponenten\n• Multi-Cloud Deployments zur Vermeidung von Vendor Lock-in und Erhöhung der Resilienz\n• Data Tiering Strategien mit Hot Data in der Cloud und Cold Data On-Premise\n• Graduelle Migration-Pfade von On-Premise zu Cloud-basierten SIEM Lösungen\n• Edge Computing Integration für lokale Datenverarbeitung mit zentraler Cloud-Orchestrierung\n\n⚖️ Entscheidungsframework und Bewertungskriterien:\n• Risk Assessment für verschiedene Deployment-Modelle basierend auf Threat Landscape und Business Impact\n• Performance Requirements Analysis für Real-time Processing und Historical Analytics\n• Organizational Readiness für Cloud Adoption und Change Management\n• Vendor Evaluation für Cloud Provider Capabilities und SLA-Garantien\n• Future-Proofing Strategien für evolvierende Technology Stacks und Business Requirements"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie bewerten Sie Open Source SIEM Lösungen im Vergleich zu kommerziellen Produkten und welche Faktoren sind entscheidend?',
        answer: "Open Source SIEM Lösungen haben sich zu einer ernstzunehmenden Alternative zu kommerziellen Produkten entwickelt und bieten sowohl einzigartige Vorteile als auch spezifische Herausforderungen. Die Entscheidung zwischen Open Source und kommerziellen SIEM Lösungen erfordert eine differenzierte Betrachtung von technischen Capabilities, Ressourcenanforderungen und strategischen Zielen.\n\n🔓 Open Source SIEM Vorteile und Möglichkeiten:\n• Vollständige Transparenz des Source Codes für Security Audits und Custom Modifications\n• Keine Lizenzkosten für die Software selbst, wodurch Budget für andere Sicherheitsinvestitionen freigesetzt wird\n• Aktive Community-Entwicklung mit kontinuierlichen Verbesserungen und Innovation\n• Flexibilität für Deep Customization und Integration in spezifische Umgebungen\n• Unabhängigkeit von Vendor-Roadmaps und kommerziellem Support-Lifecycle\n\n💼 Kommerzielle SIEM Stärken und Enterprise-Features:\n• Professioneller Support mit SLAs und garantierten Response-Zeiten für kritische Issues\n• Umfassende Dokumentation, Training-Materialien und Best Practice Guides\n• Vorkonfigurierte Use Cases und Templates für schnelle Time-to-Value\n• Enterprise-Grade Features wie Advanced Analytics, Machine Learning und UEBA\n• Compliance-Zertifizierungen und regulatorische Konformität für verschiedene Standards\n\n🛠️ Technische Capabilities und Feature-Vergleich:\n• Correlation Engine Sophistication und Advanced Analytics Capabilities\n• Scalability Limits und Performance-Charakteristika unter hohen Lasten\n• Integration Ecosystem und verfügbare Konnektoren für Third-Party Tools\n• User Interface Design und Usability für verschiedene Skill-Level\n• Reporting und Dashboard Capabilities für Executive und Technical Audiences\n\n👥 Ressourcen und Expertise-Anforderungen:\n• In-House Development Capabilities für Customization und Feature-Entwicklung\n• System Administration Expertise für Installation, Konfiguration und Maintenance\n• Security Engineering Skills für Rule Development und Tuning\n• Community Engagement für Support und Knowledge Sharing\n• Long-term Maintenance Commitment und Resource Allocation\n\n🔄 Total Cost of Ownership Betrachtungen:\n• Hidden Costs in Open Source Deployments durch Development und Maintenance Effort\n• Professional Services Kosten für Implementation und Optimization\n• Training und Skill Development Investitionen für Team-Capabilities\n• Infrastructure Costs für Hosting und High Availability Setups\n• Opportunity Costs durch Resource Allocation zu SIEM Development versus Core Business\n\n⚖️ Hybrid-Ansätze und strategische Überlegungen:\n• Open Core Modelle mit Open Source Basis und kommerziellen Add-ons\n• Managed Open Source Services für professionellen Support ohne Vendor Lock-in\n• Proof-of-Concept Strategien für die Evaluierung verschiedener Ansätze\n• Migration-Pfade zwischen Open Source und kommerziellen Lösungen\n• Risk Mitigation Strategien für Open Source Dependencies und Community-Support\n\n🎯 Entscheidungskriterien und Bewertungsframework:\n• Organizational Maturity für Open Source Adoption und Community Participation\n• Business Criticality der SIEM Function und Acceptable Risk Levels\n• Compliance Requirements und Audit-Anforderungen für verschiedene Standards\n• Innovation Requirements und Bedarf für Cutting-Edge Features\n• Strategic Alignment mit Overall IT Strategy und Vendor Management Policies"
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
