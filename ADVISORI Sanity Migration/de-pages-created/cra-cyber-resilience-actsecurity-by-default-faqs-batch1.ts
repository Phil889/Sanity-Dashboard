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
    console.log('Updating CRA Cyber Resilience Act Security by Default page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-cyber-resilience-actsecurity-by-default' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-cyber-resilience-actsecurity-by-default" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist Security by Default im Rahmen des CRA Cyber Resilience Act für die C-Suite von strategischer Bedeutung und wie transformiert ADVISORI dies zu einem Wettbewerbsvorteil?",
        answer: "Security by Default im CRA Cyber Resilience Act ist weit mehr als eine technische Compliance-Anforderung – es ist ein strategisches Paradigma, das die Art und Weise revolutioniert, wie Unternehmen Cybersicherheit als Geschäftsenablement betrachten. Für die C-Suite bedeutet dies eine fundamentale Neuausrichtung der Produktentwicklung, bei der Sicherheit nicht nachträglich hinzugefügt, sondern von Beginn an in die DNA des Produkts eingebettet wird.\n\n🎯 Strategische Transformation durch Security by Default:\n• Marktdifferenzierung und Vertrauensaufbau: Produkte, die per Design sicher sind, schaffen einen messbaren Wettbewerbsvorteil und erhöhen die Kundenakzeptanz in sicherheitssensiblen Märkten.\n• Regulatorische Zukunftssicherheit: Proaktive Compliance mit CRA-Anforderungen positioniert Ihr Unternehmen vor dem Wettbewerb und schützt vor künftigen Regulierungsänderungen.\n• Kostenoptimierung über den Produktlebenszyklus: Security by Default reduziert langfristige Support-, Patching- und Incident-Response-Kosten erheblich.\n• Beschleunigte Markteinführung: Vordefinierte sichere Konfigurationen eliminieren zeitaufwändige nachträgliche Sicherheitsnachrüstungen.\n\n🛡️ Der ADVISORI-Ansatz zur strategischen Implementierung:\n• Executive Security Strategy Integration: Wir entwickeln Security by Default Strategien, die direkt mit Ihren Geschäftszielen und Marktpositionierungsstrategien aligniert sind.\n• Design-Thinking für Cybersicherheit: Anwendung von Design-Thinking-Prinzipien zur Entwicklung intuitiver und benutzerfreundlicher sicherer Standardkonfigurationen.\n• ROI-orientierte Sicherheitsarchitektur: Quantifizierung der geschäftlichen Vorteile von Security by Default Investitionen und deren Auswirkungen auf EBITDA und Marktbewertung.\n• Ecosystem-weite Sicherheitsorchestrierung: Integration von Security by Default Prinzipien in Ihre gesamte Wertschöpfungskette und Partnernetzwerke."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifiziert ADVISORI den Business Case für Security by Default Implementierungen und welche messbaren Auswirkungen hat dies auf Kundenvertrauen und Marktpositionierung?",
        answer: "Die Investition in Security by Default transcendiert traditionelle Cybersicherheitsausgaben und wird zu einem strategischen Geschäftsinvestment mit quantifizierbaren Returns. ADVISORI entwickelt datengetriebene Business Cases, die sowohl direkte finanzielle Vorteile als auch indirekte Marktvorteile von Security by Default Implementierungen transparent darstellen und messbar machen.\n\n💰 Direkte finanzielle Quantifizierung:\n• Reduktion von Post-Launch Security Incidents: Security by Default kann die Anzahl sicherheitsbezogener Vorfälle um bis zu 70% reduzieren, was direkte Kosteneinsparungen bei Incident Response, Forensik und Reputationsmanagement bedeutet.\n• Minimierung von Update- und Patch-Zyklen: Sichere Standardkonfigurationen reduzieren die Notwendigkeit für kritische Sicherheitsupdates und die damit verbundenen Entwicklungs-, Test- und Distributionskosten.\n• Optimierte Supportkosten: Produkte mit sicheren Defaults generieren signifikant weniger sicherheitsbezogene Support-Anfragen und reduzieren so die operativen Supportkosten.\n• Versicherungsprämien-Optimierung: Nachweisbare Security by Default Implementierungen können zu reduzierten Cyber-Versicherungsprämien und besseren Coverage-Bedingungen führen.\n\n📈 Marktpositionierung und Kundenvertrauen als Werttreiber:\n• Premium-Positionierung: Security by Default ermöglicht Premium-Pricing-Strategien, da Kunden bereit sind, für inhärent sichere Produkte mehr zu bezahlen.\n• Beschleunigte Sales Cycles: Vordemonstrierte Sicherheit verkürzt Evaluations- und Procurement-Zyklen bei Enterprise-Kunden signifikant.\n• Erhöhte Customer Lifetime Value: Vertrauen durch Security by Default führt zu höherer Kundenloyalität und Cross-Selling-Opportunitäten.\n• Marktexpansion in regulierte Industrien: CRA-konforme Security by Default öffnet Türen zu hochregulieren Märkten wie Finanzdienstleistungen, Gesundheitswesen und kritische Infrastruktur."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "In einer Ära der Cloud-nativen Entwicklung und DevSecOps – wie orchestriert ADVISORI die Integration von CRA Security by Default Prinzipien in moderne Entwicklungspipelines und Microservice-Architekturen?",
        answer: "Die Integration von CRA Security by Default Prinzipien in moderne Cloud-native Entwicklungsumgebungen erfordert eine fundamentale Neukonzeption der Entwicklungs- und Deployment-Strategien. ADVISORI orchestriert diese Transformation durch die Implementierung von 'Security-as-Code' Prinzipien, die Security by Default nahtlos in DevSecOps-Pipelines und Microservice-Architekturen einbetten.\n\n🔄 Cloud-Native Security by Default Orchestrierung:\n• Infrastructure as Code (IaC) Security Templates: Entwicklung von sicheren IaC-Templates, die Security by Default Konfigurationen automatisch in Cloud-Deployments einbetten.\n• Container Security Hardening: Implementation von sicheren Container-Base-Images und Runtime-Konfigurationen, die CRA-Anforderungen erfüllen und gleichzeitig Performance optimieren.\n• Service Mesh Security Integration: Automatische Konfiguration von sicheren Service-to-Service-Kommunikation und Zero-Trust-Netzwerkarchitekturen.\n• Policy-as-Code Enforcement: Implementierung von automatisierten Governance-Richtlinien, die Security by Default Compliance in CI/CD-Pipelines durchsetzen.\n\n🚀 DevSecOps-Pipeline-Integration von ADVISORI:\n• Shift-Left Security Integration: Einbettung von Security by Default Validierungen in frühe Entwicklungsphasen, inklusive IDE-Plugins und Pre-Commit-Hooks.\n• Automated Security Testing: Implementation von automatisierten Security-Tests, die Security by Default Konfigurationen in jeder Pipeline-Phase validieren.\n• Compliance-as-Code: Entwicklung von automatisierten CRA-Compliance-Checks, die kontinuierlich die Einhaltung von Security by Default Prinzipien überwachen.\n• Security Telemetry und Observability: Implementation von Security-Metriken und -Dashboards, die C-Level-Executives Echtzeit-Einblicke in Security by Default Performance geben."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie adressiert ADVISORI die Herausforderung der Usability vs. Security Balance bei Security by Default Implementierungen und welche Strategien stellen sicher, dass sichere Defaults die User Experience nicht kompromittieren?",
        answer: "Die vermeintliche Dichotomie zwischen Usability und Security bei Security by Default Implementierungen ist ein kritischer Erfolgsfaktor, der über Marktakzeptanz und Produkterfolg entscheidet. ADVISORI entwickelt innovative Ansätze, die diese falsche Dichotomie auflösen und demonstrieren, dass exzellente Sicherheit und überlegene User Experience synergistisch verstärkt werden können.\n\n🎨 Human-Centered Security Design von ADVISORI:\n• Behavioral Security Analytics: Einsatz von Nutzerverhaltensdaten zur Entwicklung von Security by Default Konfigurationen, die sich natürlich in bestehende Workflows integrieren.\n• Progressive Security Onboarding: Gestaltung von mehrstufigen Sicherheitsaktivierungen, die Nutzer schrittweise zu sichereren Verhaltensweisen führen, ohne Komplexität zu erhöhen.\n• Context-Aware Security Defaults: Implementation von adaptiven Sicherheitskonfigurationen, die sich basierend auf Nutzungskontext und Risikoprofil automatisch anpassen.\n• Invisible Security Principles: Entwicklung von Sicherheitsmechanismen, die für Endnutzer transparent sind und deren Workflow nicht unterbrechen.\n\n🔐 Innovative Security UX Strategien:\n• Gamification von Sicherheitsverhalten: Integration spielerischer Elemente, die Nutzer motivieren, sichere Konfigurationen zu adoptieren und zu maintainen.\n• AI-Powered Security Assistance: Implementierung intelligenter Assistenzsysteme, die Nutzern bei sicherheitsbezogenen Entscheidungen helfen, ohne technische Komplexität zu exponieren.\n• Visual Security Feedback: Entwicklung intuitiver visueller Interfaces, die Sicherheitsstatus und -empfehlungen in leicht verständlicher Form kommunizieren.\n• Adaptive Security Complexity: Implementation von mehrstufigen Sicherheitsinterfaces, die technischen und nicht-technischen Nutzern angemessene Kontrollebenen bieten."
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
