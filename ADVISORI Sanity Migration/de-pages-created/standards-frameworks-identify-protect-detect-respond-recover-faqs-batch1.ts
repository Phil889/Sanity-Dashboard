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
    console.log('Updating NIST Cybersecurity Framework: Identify, Protect, Detect, Respond, Recover page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-identify-protect-detect-respond-recover' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-identify-protect-detect-respond-recover" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum sollte die C-Suite das NIST Cybersecurity Framework als strategisches Governance-Instrument verstehen und wie maximiert ADVISORI dessen Geschäftswert?",
        answer: "Das NIST Cybersecurity Framework ist weit mehr als ein technisches Regelwerk – es ist ein strategisches Governance-Instrument, das der C-Suite ermöglicht, Cybersecurity-Investitionen mit Geschäftszielen zu verknüpfen und messbare Risikoreduktion zu erzielen. Für moderne Führungskräfte ist es essentiell, Cybersecurity nicht als Kostenfaktor, sondern als Business Enabler zu verstehen, der nachhaltiges Wachstum und Vertrauen schafft.\n\n🎯 Strategische Governance-Dimension des NIST Frameworks:\n• Board-Level Risikokommunikation: Das Framework bietet eine standardisierte Sprache zur Kommunikation von Cyber-Risiken und -Investitionen gegenüber Aufsichtsräten und Stakeholdern, wodurch fundierte Entscheidungen ermöglicht werden.\n• Messbare Risikoreduzierung: Durch die fünf Kernfunktionen (Identify, Protect, Detect, Respond, Recover) können Führungskräfte den ROI von Cybersecurity-Maßnahmen quantifizieren und den Geschäftswert demonstrieren.\n• Compliance-Integration: Das Framework harmonisiert verschiedene regulatorische Anforderungen (DORA, NIS2, ISO 27001) und reduziert Compliance-Komplexität erheblich.\n• Strategische Risikopositionierung: Ermöglicht eine bewusste Risikoakzeptanz basierend auf Geschäftsprioritäten und verfügbaren Ressourcen.\n\n🚀 ADVISORI's Ansatz zur Wertmaximierung:\n• C-Level Cybersecurity Governance: Wir etablieren Executive Dashboards und KPIs, die direkten Bezug zu Geschäftszielen herstellen und kontinuierliche Wertschöpfung durch Cybersecurity nachweisen.\n• Business-Aligned Implementation: Unsere Framework-Implementierung orientiert sich an Ihren strategischen Geschäftsprioritäten und sorgt für optimale Ressourcenallokation.\n• Risk-Business Integration: Wir verknüpfen Cyber-Risiken direkt mit Geschäftsprozessen und ermöglichen dadurch risikobasierte Entscheidungsfindung auf C-Level.\n• Continuous Value Demonstration: Regelmäßige Bewertung und Kommunikation des geschäftlichen Nutzens der Framework-Implementierung an die Unternehmensführung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie transformiert die vollständige NIST Framework-Implementierung (Identify-Protect-Detect-Respond-Recover) unsere Cyber-Resilienz und welchen quantifizierbaren Geschäftswert liefert dies?",
        answer: "Die vollständige Implementierung aller fünf NIST-Kernfunktionen schafft eine synergetische Cyber-Resilienz, die exponentiell höheren Schutz bietet als isolierte Sicherheitsmaßnahmen. Für die C-Suite bedeutet dies eine fundamentale Transformation von reaktiver zu proaktiver Cybersecurity mit messbaren Geschäftsvorteilen und nachweislicher Risikoreduktion.\n\n📊 Quantifizierbare Geschäftswerte der vollständigen Framework-Implementation:\n• Incident Response Beschleunigung: Durchschnittlich 70% Reduktion der Mean Time to Recovery (MTTR) durch strukturierte Respond- und Recover-Prozesse, was direkt die Geschäftskontinuität schützt.\n• Präventive Kostenreduktion: Bis zu 85% Reduktion von Cyber-Incident-Kosten durch frühzeitige Detect-Funktionen und robuste Protect-Maßnahmen.\n• Compliance-Effizienz: 60% Reduktion des Aufwands für regulatorische Nachweise durch systematische Identify-Prozesse und durchgängige Dokumentation.\n• Versicherungsoptimierung: Nachweisbare Framework-Compliance kann Cyber-Versicherungsprämien um 20-30% reduzieren.\n\n🔄 Synergetische Wirkung der fünf Kernfunktionen:\n• Identify als Fundament: Vollständige Asset- und Risikotransparenz ermöglicht gezielte Investitionen und verhindert Unter- oder Überinvestitionen in Cybersecurity.\n• Protect durch Intelligence: Schutzmaßnahmen werden durch kontinuierliche Threat Intelligence (Detect-Funktion) dynamisch angepasst und optimiert.\n• Detect für Proaktivität: Kontinuierliche Überwachung verwandelt Cybersecurity von reaktiv zu prädiktiv und ermöglicht Prävention statt nur Reaktion.\n• Respond mit Struktur: Standardisierte Incident Response reduziert Chaos, minimiert Reputationsschäden und beschleunigt die Geschäftsnormalisierung.\n• Recover für Kontinuität: Systematische Recovery-Planung gewährleistet, dass kritische Geschäftsfunktionen auch bei schwerwiegenden Incidents schnell wiederhergestellt werden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Angesichts der steigenden Cyber-Bedrohungen und regulatorischen Anforderungen – wie positioniert ADVISORI das NIST Framework als zukunftssichere Investition für die Unternehmensstrategie?",
        answer: "In einer Ära exponentiell wachsender Cyber-Risiken und verschärfter Regulatorik ist das NIST Cybersecurity Framework die strategische Antwort auf komplexe Sicherheitsherausforderungen. ADVISORI positioniert das Framework nicht als statische Compliance-Übung, sondern als adaptive, zukunftssichere Investition, die mit den sich entwickelnden Bedrohungslandschaften und Geschäftsanforderungen mitwächst.\n\n🌐 Zukunftssicherheit durch adaptive Framework-Architektur:\n• Threat-Agnostic Design: Das NIST Framework ist technologie- und bedrohungsunabhängig konzipiert, wodurch es auch gegen zukünftige, noch unbekannte Cyber-Risiken effektiv bleibt.\n• Regulatory Convergence: Als de-facto Standard harmonisiert es verschiedene regulatorische Frameworks (DORA, NIS2, ISO 27001, SOC 2) und reduziert zukünftige Compliance-Komplexität.\n• Skalierbare Implementierung: Die Framework-Struktur erlaubt organisches Wachstum und Anpassung an sich verändernde Geschäftsmodelle und Technologien.\n• Continuous Evolution: Regelmäßige Updates des NIST Frameworks integrieren neue Erkenntnisse und Bedrohungstrends automatisch in Ihre Cybersecurity-Strategie.\n\n💡 ADVISORI's Zukunftsorientierte Implementierungsstrategie:\n• AI-Enhanced Cybersecurity: Integration von KI und Machine Learning in alle fünf Framework-Funktionen für prädiktive Sicherheit und automatisierte Bedrohungsabwehr.\n• Cloud-Native Resilienz: Framework-Implementierung für hybride und Multi-Cloud-Umgebungen, die modernen IT-Architekturen gerecht wird.\n• Zero Trust Integration: Nahtlose Verbindung des NIST Frameworks mit Zero Trust-Prinzipien für umfassende, moderne Sicherheitsarchitekturen.\n• Digital Transformation Enablement: Das Framework als Enabler für sichere Digitalisierungsinitiativen, IoT-Integration und neue Geschäftsmodelle.\n• Quantenresistente Vorbereitung: Frühzeitige Integration quantenresistenter Kryptographie-Prinzipien in die Protect-Funktionen des Frameworks."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie differenziert sich ADVISORI's NIST Framework-Ansatz von Standard-Implementierungen und welchen einzigartigen Wettbewerbsvorteil schaffen wir dadurch?",
        answer: "ADVISORI's NIST Framework-Implementierung unterscheidet sich fundamental von konventionellen Ansätzen durch unsere Business-First-Philosophie und die Integration von Advanced Analytics. Während Standard-Implementierungen oft technokratisch und compliance-getrieben sind, schaffen wir ein strategisches Cybersecurity-Ökosystem, das direkten Geschäftswert generiert und nachhaltigen Wettbewerbsvorteil sichert.\n\n🚀 Differenzierung durch Business-Centricity:\n• Executive Decision Intelligence: Entwicklung von C-Level-Dashboards, die Cyber-Risiken direkt in Geschäftskennzahlen übersetzen und strategische Entscheidungsfindung ermöglichen.\n• Value-Driven Implementation: Jede Framework-Komponente wird hinsichtlich ihres Beitrags zu Geschäftszielen bewertet und implementiert, wodurch maximaler ROI sichergestellt wird.\n• Industry-Specific Customization: Branchenspezifische Anpassungen des Frameworks, die regulatorische Besonderheiten und sektorspezifische Bedrohungen optimal adressieren.\n• Stakeholder Integration: Umfassende Einbeziehung aller Geschäftsbereiche in die Framework-Governance, nicht nur der IT-Abteilung.\n\n⚡ Technologische Innovationen und Advanced Analytics:\n• Predictive Cyber Intelligence: Integration von Machine Learning-Algorithmen in die Detect-Funktion für prädiktive Bedrohungserkennung statt nur reaktive Überwachung.\n• Automated Response Orchestration: KI-gestützte Automatisierung der Respond-Prozesse für Sub-Sekunden-Reaktionszeiten bei kritischen Incidents.\n• Dynamic Risk Scoring: Kontinuierliche, automatisierte Neubewertung von Cyber-Risiken basierend auf aktuellen Threat Intelligence und Geschäftskontexten.\n• Integrated Threat Modeling: Proaktive Bedrohungsmodellierung, die neue Attack Vectors und Vulnerabilities antizipiert und präventive Maßnahmen ableitet.\n• Business Impact Quantification: Präzise Quantifizierung der geschäftlichen Auswirkungen verschiedener Cyber-Szenarien für fundierte Investitionsentscheidungen."
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
