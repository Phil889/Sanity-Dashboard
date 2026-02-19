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
    console.log('Updating EU AI Act Compliance Requirements page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act-compliance-requirements' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act-compliance-requirements" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Welche spezifischen Dokumentations- und Nachweispflichten ergeben sich aus dem EU AI Act und wie können wir diese systematisch erfüllen?",
        answer: "Die Dokumentations- und Nachweispflichten des EU AI Act sind umfangreich und bilden das Rückgrat einer erfolgreichen Compliance-Strategie. Sie dienen nicht nur der regulatorischen Erfüllung, sondern auch als strategisches Instrument zur Qualitätssicherung und Risikominimierung in der KI-Entwicklung und -Anwendung.\n\n📋 Zentrale Dokumentationsanforderungen des EU AI Act:\n• Qualitätsmanagementsystem-Dokumentation: Vollständige Beschreibung der QMS-Prozesse, Verantwortlichkeiten und Kontrollmechanismen für alle Hochrisiko-KI-Systeme.\n• Technische Dokumentation: Detaillierte Spezifikationen zu Systemarchitektur, Datenqualität, Algorithmen, Testverfahren und Leistungsmetriken.\n• Risikoanalyse und -bewertung: Systematische Erfassung und Bewertung aller identifizierten Risiken mit entsprechenden Minderungsmaßnahmen.\n• Transparenz- und Nutzerinformationen: Klare, verständliche Dokumentation der Systemfunktionalitäten und Limitationen für Endnutzer.\n• Änderungsprotokoll: Vollständige Nachverfolgung aller Systemmodifikationen mit Impact-Analysen und Compliance-Bewertungen.\n\n🏗️ ADVISORIs systematischer Dokumentationsansatz:\n• Automatisierte Dokumentationssysteme: Implementierung digitaler Plattformen, die Dokumentationsprozesse automatisieren und kontinuierlich aktuell halten.\n• Template-basierte Standardisierung: Entwicklung wiederverwendbarer Dokumentationsvorlagen, die Konsistenz sicherstellen und Effizienz steigern.\n• Integrierte Compliance-Workflows: Verbindung der Dokumentationsanforderungen mit bestehenden Entwicklungs- und Qualitätssicherungsprozessen.\n• Audit-ready Strukturierung: Aufbau der Dokumentation mit explizitem Fokus auf Prüfbarkeit und regulatorische Nachweisführung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Wie unterscheiden sich die Compliance-Anforderungen für Foundation Models und GPAI-Systeme von herkömmlichen KI-Anwendungen?",
        answer: "Foundation Models und General Purpose AI (GPAI)-Systeme unterliegen spezifischen, verschärften Anforderungen unter dem EU AI Act, die ihre systemische Bedeutung und das potentielle Risiko für die Gesellschaft widerspiegeln. Diese erweiterten Verpflichtungen erfordern eine spezialisierte Compliance-Strategie, die über traditionelle KI-Governance hinausgeht.\n\n🔬 Spezifische Anforderungen für Foundation Models und GPAI:\n• Systemische Risikobewertung: Umfassende Analyse der gesellschaftlichen und wirtschaftlichen Auswirkungen mit besonderem Fokus auf systemische Risiken und Cascade-Effekte.\n• Erweiterte Cybersecurity-Maßnahmen: Implementierung robuster Sicherheitsarchitekturen zum Schutz vor Missbrauch, Manipulation und adversariellen Angriffen.\n• Model Governance Excellence: Aufbau spezialisierter Governance-Strukturen für Modellentwicklung, -validierung, -deployment und -monitoring.\n• Kontinuierliches Monitoring: Etablierung fortlaufender Überwachungssysteme für Modellverhalten, Performance-Drift und unerwartete Emergent Properties.\n• Stakeholder-Engagement: Proaktive Kommunikation mit Regulatoren, Forschungsgemeinschaft und Zivilgesellschaft über Modellentwicklungen und -risiken.\n\n⚡ Differenzierung zu Standard-KI-Systemen:\n• Höhere Transparenzanforderungen: Foundation Models müssen deutlich umfangreichere Informationen über Training, Daten und Capabilities offenlegen.\n• Präventive Risikoanalyse: Während Standard-KI-Systeme reaktive Risikobewertung erfordern, müssen GPAI-Systeme proaktive, hypothetische Risikoanalysen durchführen.\n• Erweiterte Testing-Verpflichtungen: Systematische Evaluation auf Bias, Fairness, Robustheit und potentielle Dual-Use-Risiken.\n\n🚀 ADVISORIs spezialisierter GPAI-Compliance-Ansatz:\n• Advanced Model Governance: Entwicklung hochspezialisierter Governance-Frameworks, die den einzigartigen Herausforderungen von Foundation Models gerecht werden.\n• Regulatory Technology Integration: Einsatz modernster RegTech-Lösungen für kontinuierliches Monitoring und automatisierte Compliance-Überwachung.\n• Multi-Stakeholder Engagement: Aufbau strukturierter Kommunikationskanäle mit Regulatoren und anderen relevanten Stakeholdern zur proaktiven Risikokommunikation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Welche Rolle spielt menschliche Aufsicht bei EU AI Act-Compliance und wie implementieren wir diese effektiv in unsere KI-Systeme?",
        answer: "Menschliche Aufsicht (Human Oversight) ist ein Kernprinzip des EU AI Act und erfordert eine durchdachte Integration in KI-Systeme, die sowohl regulatorische Anforderungen erfüllt als auch praktische Anwendbarkeit gewährleistet. Die effektive Implementierung menschlicher Aufsicht kann gleichzeitig Compliance sicherstellen und die Qualität von KI-Entscheidungen verbessern.\n\n👥 Dimensionen menschlicher Aufsicht im EU AI Act:\n• Human-in-the-Loop: Direkte menschliche Beteiligung an kritischen KI-Entscheidungen mit Interventionsmöglichkeiten in Echtzeit.\n• Human-on-the-Loop: Kontinuierliche menschliche Überwachung von KI-Systemen mit der Fähigkeit zur nachträglichen Korrektur und Anpassung.\n• Human-in-Command: Übergeordnete menschliche Kontrolle über KI-Systeme mit finaler Entscheidungsautorität und Verantwortung.\n• Meaningful Human Control: Gewährleistung, dass menschliche Aufsichtspersonen tatsächlich verstehen, beeinflussen und kontrollieren können, was das KI-System tut.\n\n🔧 Praktische Implementierungsstrategien:\n• Risikoproportionale Gestaltung: Anpassung der Intensität menschlicher Aufsicht an das Risikolevel und die Kriticalität der KI-Anwendung.\n• User Interface Excellence: Entwicklung intuitiver Interfaces, die menschlichen Aufsichtspersonen alle relevanten Informationen verständlich präsentieren.\n• Training und Kompetenzaufbau: Systematische Schulung der Aufsichtspersonen in KI-Verständnis, Risikobewertung und Interventionsmethoden.\n• Prozessintegration: Nahtlose Einbettung der Aufsichtsmechanismen in bestehende Geschäftsprozesse ohne übermäßige Effizienzeinbußen.\n\n⚙️ ADVISORIs Human Oversight Implementation:\n• Adaptive Oversight-Systeme: Entwicklung intelligenter Überwachungssysteme, die die Intensität menschlicher Aufsicht dynamisch an Kontext und Risiko anpassen.\n• Decision Support Integration: Implementierung fortschrittlicher Decision-Support-Systeme, die menschliche Aufsichtspersonen optimal informieren und unterstützen.\n• Performance Monitoring: Aufbau von Systemen zur kontinuierlichen Bewertung der Effektivität menschlicher Aufsicht und deren kontinuierliche Verbesserung.\n• Compliance-by-Design: Integration von Human Oversight-Anforderungen bereits in die Systemarchitektur zur Vermeidung nachträglicher kostspieliger Anpassungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie stellen wir sicher, dass unsere KI-Systeme die Datenqualitäts- und Bias-Minimierungsanforderungen des EU AI Act erfüllen?",
        answer: "Datenqualität und Bias-Minimierung sind fundamentale Säulen des EU AI Act und erfordern eine systematische, technologiegestützte Herangehensweise, die bereits in der Datensammlung beginnt und sich durch den gesamten KI-Lebenszyklus zieht. Eine proaktive Strategie kann nicht nur Compliance sicherstellen, sondern auch die Qualität und Fairness von KI-Systemen erheblich verbessern.\n\n📊 Zentrale Datenqualitätsanforderungen des EU AI Act:\n• Repräsentativität und Vollständigkeit: Sicherstellung, dass Trainingsdaten alle relevanten Anwendungsszenarien und Bevölkerungsgruppen angemessen abbilden.\n• Accuracy und Konsistenz: Implementierung robuster Validierungsprozesse zur Gewährleistung der Datengenauigkeit und -konsistenz.\n• Relevanz und Aktualität: Etablierung von Prozessen zur kontinuierlichen Bewertung und Aktualisierung der Datenrelevanz für den Anwendungskontext.\n• Bias-Detection und -Mitigation: Systematische Identifikation und Reduzierung von Verzerrungen in Daten und Algorithmen.\n• Dokumentation und Nachvollziehbarkeit: Vollständige Dokumentation der Datenherkunft, -verarbeitung und -qualitätskontrolle.\n\n🔍 Strategien zur Bias-Minimierung:\n• Multi-dimensionale Fairness-Analyse: Bewertung von KI-Systemen hinsichtlich verschiedener Fairness-Metriken und demografischer Dimensionen.\n• Adversarial Testing: Systematische Tests auf robustheit gegenüber verschiedenen Arten von Bias und diskriminierenden Outcomes.\n• Kontinuierliches Monitoring: Implementierung fortlaufender Überwachung von KI-Outputs auf Anzeichen von Bias oder unfairer Behandlung.\n• Diverse Entwicklungsteams: Förderung diverser, multidisziplinärer Teams zur Reduzierung unbewusster Voreingenommenheit in der Systementwicklung.\n\n⚗️ ADVISORIs Data Excellence Approach:\n• Automated Data Quality Assurance: Implementierung automatisierter Systeme zur kontinuierlichen Datenqualitätskontrolle und -verbesserung.\n• AI-powered Bias Detection: Einsatz fortschrittlicher KI-Tools zur proaktiven Identifikation und Quantifizierung von Bias in Daten und Modellen.\n• Synthetic Data Generation: Strategische Nutzung synthetischer Daten zur Verbesserung der Datenrepräsentativität und Bias-Reduzierung.\n• Federated Learning Integration: Implementierung föderierter Lernansätze zur Verbesserung der Datenqualität bei gleichzeitigem Datenschutz."
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
