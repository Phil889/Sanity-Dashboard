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
    console.log('Updating Software Compliance page with C-Level FAQs batch 1 (German)...')
    
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
        _key: generateKey('faq', 1),
        question: "Warum ist Software Compliance für die C-Suite mehr als nur ein rechtliches Thema und wie verwandelt ADVISORI es in einen strategischen Wettbewerbsvorteil?",
        answer: "Für C-Level-Führungskräfte ist Software Compliance weit mehr als nur die Einhaltung von Lizenzbestimmungen – es ist ein fundamentaler Baustein für nachhaltiges Wachstum, Kostenoptimierung und Innovation. Ohne systematisches Software Compliance Management entstehen erhebliche finanzielle Risiken, operative Ineffizienzen und rechtliche Haftungen. ADVISORI transformiert diese Compliance-Herausforderung in einen strategischen Enabler für digitale Transformation und Geschäftserfolg.\n\n🎯 Strategische Imperative für die Führungsebene:\n• Risikominimierung: Vermeidung kostspieliger Lizenzauditstrafen, die schnell Millionenbeträge erreichen können und erhebliche Reputationsschäden verursachen.\n• Kostenoptimierung: Systematische Identifikation ungenutzter Lizenzen, Konsolidierungsmöglichkeiten und Right-Sizing-Potentiale führen zu durchschnittlich 20-40% Kosteneinsparungen.\n• Innovation Enablement: Sichere Nutzung von Open Source Komponenten ermöglicht beschleunigte Produktentwicklung ohne rechtliche Risiken.\n• Operational Excellence: Automatisierte Compliance-Prozesse reduzieren manuellen Aufwand und eliminieren menschliche Fehlerquellen in kritischen Compliance-Entscheidungen.\n\n🚀 Der ADVISORI-Ansatz für strategische Wertschöpfung:\n• Business-Impact orientierte Compliance: Wir betrachten nicht nur rechtliche Aspekte, sondern analysieren die direkten Auswirkungen auf Ihre Geschäftsziele, Innovationsfähigkeit und Marktpositionierung.\n• Intelligent Automation: Implementierung KI-gestützter Tools zur automatischen Erkennung, Klassifizierung und Überwachung von Software-Assets sowie proaktiven Compliance-Alerting.\n• Strategic Vendor Management: Optimierung von Lizenzverträgen und Verhandlungsstrategien basierend auf detaillierten Usage-Analytics und Marktbenchmarks.\n• Innovation-Safe Frameworks: Entwicklung von Governance-Strukturen, die agile Entwicklung und Innovation fördern, während gleichzeitig vollständige Compliance sichergestellt wird."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie stellt ADVISORI sicher, dass Open Source Compliance nicht zur Innovationsbremse wird, sondern die Entwicklungsgeschwindigkeit sogar erhöht?",
        answer: "Open Source Software ist der Motor moderner Softwareentwicklung, birgt jedoch ohne professionelles Management erhebliche Compliance- und Sicherheitsrisiken. ADVISORI hat bewährte Methoden entwickelt, um Open Source Potentiale vollständig zu nutzen, während gleichzeitig rechtliche Sicherheit und operative Exzellenz gewährleistet werden. Unser Ansatz macht Open Source zum strategischen Accelerator statt zum Risikofaktor.\n\n⚡ Herausforderungen ungeregelter Open Source Nutzung:\n• Lizenz-Inkompatibilitäten: Verschiedene Open Source Lizenzen können sich gegenseitig ausschließen und zu rechtlichen Problemen oder erzwungenen Quellcode-Offenlegungen führen.\n• Security Vulnerabilities: Unüberwachte Open Source Komponenten können kritische Sicherheitslücken enthalten, die zu Datenschutzverletzungen und Compliance-Verstößen führen.\n• Technical Debt: Unkontrollierte Nutzung veralteter oder schlecht gewarteter Open Source Bibliotheken schafft langfristige Wartungslasten und Sicherheitsrisiken.\n• Audit Complexity: Fehlende Transparenz über verwendete Komponenten macht Software-Audits komplex, zeitaufwändig und kostspielig.\n\n🛡️ ADVISORI's Innovation-First Open Source Strategy:\n• Automated Scanning Integration: Nahtlose Integration von Open Source Scanning-Tools in CI/CD-Pipelines ermöglicht Echtzeit-Compliance-Checks ohne Entwicklungsverzögerungen.\n• Pre-approved Component Libraries: Aufbau kuratierter, vorab geprüfter Open Source Bibliotheken, die Entwickler sicher und schnell nutzen können ohne individuelle Compliance-Prüfungen.\n• Risk-based Governance: Implementierung risikobasierter Approval-Prozesse, die bei low-risk Komponenten automatische Genehmigungen ermöglichen, während kritische Komponenten detailliert geprüft werden.\n• Developer Enablement: Bereitstellung von Self-Service-Tools und Dashboards, die Entwicklern sofortigen Einblick in Compliance-Status und Genehmigungsverfahren geben."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche konkreten ROI-Metriken und Kosteneinsparungen kann die C-Suite durch ADVISORI's Software Compliance Optimierung erwarten?",
        answer: "Software Compliance Optimierung durch ADVISORI ist eine strategische Investition, die sich sowohl kurzfristig durch direkte Kosteneinsparungen als auch langfristig durch Risikominimierung und operative Effizienzsteigerungen auszahlt. Unsere datengetriebenen Ansätze liefern messbare und nachverfolgbare Verbesserungen in allen relevanten Geschäftsmetriken.\n\n💰 Direkte quantifizierbare Kosteneinsparungen:\n• Lizenzkosten-Reduktion: Durchschnittlich 25-40% Einsparungen durch Elimination ungenutzter Lizenzen, Right-Sizing und strategische Konsolidierung von Software-Portfolios.\n• Audit-Risiko-Minimierung: Vermeidung von Strafzahlungen und Nachzahlungen, die bei Software-Audits durchschnittlich 15-25% der jährlichen Lizenzkosten betragen können.\n• Operational Efficiency: Reduktion des manuellen Aufwands für Lizenzmanagement um bis zu 70% durch Automatisierung und Self-Service-Capabilities.\n• Vendor Negotiation Power: Verbesserte Verhandlungsposition durch detaillierte Usage-Analytics führt zu durchschnittlich 10-20% besseren Konditionen bei Lizenzerneuerungen.\n\n📈 Langfristige strategische Wertschöpfung:\n• Accelerated Time-to-Market: Streamlined Open Source Approval-Prozesse reduzieren Entwicklungszyklen um durchschnittlich 15-30% ohne Qualitäts- oder Compliance-Kompromisse.\n• Innovation Enablement: Sichere und effiziente Open Source Nutzung ermöglicht es Entwicklungsteams, sich auf Kernfunktionalitäten zu konzentrieren statt auf Infrastruktur-Code.\n• Risk Mitigation Value: Vermeidung von Sicherheitsvorfällen durch proaktives Vulnerability Management spart durchschnittlich 3-5 Millionen Euro pro vermiedenem Major Incident.\n• Scalability Benefits: Einmal implementierte Compliance-Frameworks skalieren mit dem Unternehmenswachstum ohne proportionale Kostensteigerungen, wodurch langfristige Margensteigerungen ermöglicht werden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie gewährleistet ADVISORI, dass Software Compliance Frameworks auch bei rapid skalierenden Cloud-nativen und DevOps-Umgebungen effektiv funktionieren?",
        answer: "Moderne Softwareentwicklung ist geprägt von Cloud-nativen Architekturen, Microservices, Container-Technologien und hochfrequenten Deployment-Zyklen. Diese dynamischen Umgebungen stellen traditionelle Compliance-Ansätze vor massive Herausforderungen. ADVISORI hat spezialisierte Methoden entwickelt, um auch in den agilsten und skalierendsten Umgebungen vollständige Software Compliance sicherzustellen, ohne die Entwicklungsgeschwindigkeit zu beeinträchtigen.\n\n🔄 Herausforderungen moderner Entwicklungsumgebungen:\n• Dynamic Infrastructure: Container, Serverless Functions und Auto-Scaling-Gruppen schaffen ständig verändernde Software-Inventare, die traditionelle Asset-Management-Ansätze überfordern.\n• High-Frequency Deployments: CI/CD-Pipelines mit mehreren täglichen Deployments erfordern automatisierte Compliance-Checks, die in Sekunden statt Stunden abgeschlossen sein müssen.\n• Microservices Complexity: Hunderte von unabhängig entwickelten und deployten Services verwenden jeweils eigene Dependency-Trees, was manuelle Compliance-Überwachung praktisch unmöglich macht.\n• Multi-Cloud Environments: Verteilte Workloads über verschiedene Cloud-Provider hinweg erschweren einheitliche Compliance-Governance erheblich.\n\n☁️ ADVISORI's Cloud-Native Compliance Architecture:\n• API-First Integration: Entwicklung von Compliance-as-Code Frameworks, die sich nahtlos in bestehende DevOps-Toolchains integrieren und via APIs automatisiert steuerbar sind.\n• Container-Native Scanning: Implementierung von Multi-Layer-Scanning-Strategien, die sowohl Base Images als auch Application Dependencies in Containern kontinuierlich überwachen.\n• Serverless Compliance: Spezialisierte Monitoring-Lösungen für Lambda Functions, Azure Functions und Google Cloud Functions, die auch ephemere Workloads vollständig erfassen.\n• Infrastructure-as-Code Integration: Einbettung von Compliance-Policies direkt in Terraform, CloudFormation und Kubernetes-Manifeste für automatische Policy-Durchsetzung."
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
    console.log('✅ C-Level FAQs batch 1 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
