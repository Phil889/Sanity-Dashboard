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
    console.log('Updating EU AI Act Risk Management System page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act-risk-management-system' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act-risk-management-system" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie können wir als C-Suite die richtige Balance zwischen KI-Innovation und Risikokonservatismus finden, um weder zu vorsichtig noch zu riskant zu agieren?",
        answer: "Die Findung der optimalen Balance zwischen Innovation und Risikokonservatismus stellt eine der kritischsten strategischen Entscheidungen für die C-Suite dar. Ein übermäßig konservativer Ansatz kann Wettbewerbsnachteile und verpasste Marktchancen zur Folge haben, während übermäßige Risikobereitschaft existenzielle Bedrohungen schaffen kann. Die Kunst liegt in der Entwicklung eines kalibrierten, evidenzbasierten Ansatzes.\n\n⚖️ Strategische Dimensionen der Risiko-Innovation-Balance:\n• Dynamische Risikoappetit-Kalibrierung: Entwicklung flexibler Risikoparameter, die sich an Marktbedingungen, Unternehmensstrategie und regulatorisches Umfeld anpassen lassen.\n• Differenzierte Risikoprofile: Verschiedene Geschäftsbereiche und KI-Anwendungen erfordern unterschiedliche Risiko-Innovation-Verhältnisse basierend auf Potenzial und Gefährdung.\n• Portfolio-Diversifikation: Aufbau eines ausgewogenen KI-Innovationsportfolios mit verschiedenen Risikoklassen - von sicheren, inkrementellen Verbesserungen bis zu disruptiven, aber risikoreicheren Durchbrüchen.\n• Kontinuierliche Rekalibrierung: Regelmäßige Überprüfung und Anpassung der Risiko-Innovation-Balance basierend auf Marktfeedback und Erfahrungen.\n\n🎯 ADVISORIs Balanced-Risk-Framework:\n• Evidenzbasierte Entscheidungsfindung: Entwicklung datengetriebener Bewertungsmodelle, die Risiken und Chancen verschiedener KI-Initiativen objektiv quantifizieren und vergleichbar machen.\n• Szenario-Planung: Aufbau von Modellen, die verschiedene Risiko-Innovation-Strategien unter unterschiedlichen Zukunftsszenarien bewerten und optimale Pfade identifizieren.\n• Adaptive Governance: Implementierung flexibler Entscheidungsstrukturen, die schnelle Anpassungen an veränderte Risiko-Chancen-Verhältnisse ermöglichen.\n• Kultureller Wandel: Förderung einer organisatorischen Kultur, die kalkulierte Risiken belohnt und aus Fehlern lernt, ohne rücksichtslose Experimente zu fördern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche Governance-Strukturen benötigen wir auf Vorstandsebene, um KI-Risiken effektiv zu überwachen und strategische Entscheidungen zu treffen?",
        answer: "Die Etablierung effektiver Governance-Strukturen auf Vorstandsebene für KI-Risikomanagement erfordert eine fundamentale Überarbeitung traditioneller Aufsichts- und Entscheidungsprozesse. KI-Risiken sind komplex, sich schnell entwickelnd und oft schwer vorhersagbar, was spezialisierte Governance-Ansätze erfordert, die sowohl strategische Übersicht als auch operative Nähe kombinieren.\n\n🏛️ Erforderliche Governance-Strukturen für die Vorstandsebene:\n• KI-Risiko-Ausschuss: Etablierung eines spezialisierten Ausschusses mit KI- und Risikomanagement-Expertise, der regelmäßig über KI-Risiken berichtet und kritische Entscheidungen vorbereitet.\n• Chief AI Risk Officer (CAIRO): Schaffung einer C-Level-Position, die ausschließlich für KI-Risikomanagement verantwortlich ist und direkten Zugang zum Vorstand hat.\n• Interdisziplinäre Beratungsgremien: Aufbau von Expertengremien aus Technologie, Recht, Ethik und Geschäftsstrategie, die den Vorstand bei komplexen KI-Risikofragen beraten.\n• Kontinuierliches Monitoring-System: Implementierung von Real-Time-Dashboards, die dem Vorstand kontinuierliche Einblicke in KI-Risikometriken und -trends geben.\n\n📊 ADVISORIs Board-Level-Governance-Framework:\n• Executive-Ready-Reporting: Entwicklung spezifischer Berichtsformate, die komplexe KI-Risiken in für Vorstandsmitglieder verständliche, entscheidungsrelevante Informationen übersetzen.\n• Strategische Risiko-Workshops: Durchführung regelmäßiger Governance-Workshops, die Vorstandsmitglieder in KI-Risikothemen schulen und strategische Diskussionen fördern.\n• Entscheidungsmatrix-Entwicklung: Aufbau klarer Entscheidungskriterien und -prozesse für verschiedene Kategorien von KI-Risiken und -Investitionen.\n• Stakeholder-Integration: Design von Governance-Prozessen, die relevante externe Stakeholder (Regulatoren, Kunden, Partner) in kritische Risikobewertungen einbeziehen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie können wir KI-Risikomanagement in unsere bestehenden Enterprise Risk Management-Systeme integrieren, ohne Komplexität zu erhöhen?",
        answer: "Die Integration von KI-Risikomanagement in bestehende Enterprise Risk Management (ERM)-Systeme erfordert einen strategischen Ansatz, der Synergien nutzt, ohne die Komplexität exponentiell zu erhöhen. Für die C-Suite ist es entscheidend, KI-Risiken nicht als isolierte Kategorie zu behandeln, sondern als integralen Bestandteil der gesamten Risikomanagement-Architektur des Unternehmens zu positionieren.\n\n🔗 Strategische Integrationsprinzipien für ERM-KI-Risiko-Konvergenz:\n• Taxonomie-Harmonisierung: Entwicklung einer einheitlichen Risikotaxonomie, die KI-spezifische Risiken nahtlos in bestehende Risikokategorien einordnet und Überschneidungen vermeidet.\n• Prozess-Konsolidierung: Nutzung bestehender Risikobewertungs-, -berichts- und -steuerungsprozesse als Grundlage für KI-Risikomanagement, statt parallele Strukturen aufzubauen.\n• Technologie-Integration: Erweiterung vorhandener Risk-Management-Plattformen um KI-spezifische Funktionalitäten, anstatt separate Systeme zu implementieren.\n• Governance-Alignment: Integration von KI-Risiko-Governance in bestehende Risiko-Komitees und Entscheidungsstrukturen des Unternehmens.\n\n🛠️ ADVISORIs Simplified-Integration-Ansatz:\n• Gap-Mapping: Systematische Analyse bestehender ERM-Kapazitäten zur Identifikation von Bereichen, die für KI-Risiken erweitert werden müssen, versus Bereichen, die bereits ausreichend sind.\n• Modulare Erweiterung: Design von KI-Risikomanagement-Komponenten als Erweiterungsmodule bestehender Systeme, die minimale Störungen verursachen.\n• Graduelle Migration: Phasenweise Integration beginnend mit den kritischsten KI-Risiken, um Lerneffekte zu maximieren und Komplexität schrittweise zu managern.\n• Vereinheitlichte Dashboards: Entwicklung integrierter Management-Dashboards, die KI-Risiken im Kontext aller Unternehmensrisiken darstellen und ganzheitliche Entscheidungen ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Welche Kriterien sollten wir als Führungsebene anwenden, um zu entscheiden, welche KI-Projekte gestoppt, modifiziert oder vorangetrieben werden sollten?",
        answer: "Die Entwicklung systematischer Kriterien für KI-Projekt-Entscheidungen ist eine kritische Führungsaufgabe, die erhebliche strategische und operative Auswirkungen hat. Ein strukturierter Entscheidungsrahmen ermöglicht es der C-Suite, komplexe Risiko-Chancen-Abwägungen konsistent, transparent und strategisch ausgerichtet zu treffen, während gleichzeitig Flexibilität für außergewöhnliche Umstände erhalten bleibt.\n\n📋 Multi-dimensionale Bewertungskriterien für KI-Projektentscheidungen:\n• Risiko-Rendite-Analyse: Systematische Bewertung des erwarteten Geschäftswerts gegenüber identifizierten technischen, regulatorischen und operationellen Risiken.\n• Strategische Alignment: Übereinstimmung mit langfristigen Unternehmenszielen, Kernkompetenzen und strategischen Prioritäten der Organisation.\n• Ressourcen-Impact: Bewertung des erforderlichen Kapital-, Personal- und Technologieaufwands im Verhältnis zu verfügbaren Ressourcen und alternativen Investitionsmöglichkeiten.\n• Externe Faktoren: Berücksichtigung von Marktbedingungen, Wettbewerbslandschaft, regulatorischen Entwicklungen und Stakeholder-Erwartungen.\n• Reversibilität und Flexibilität: Bewertung der Möglichkeit, Entscheidungen bei veränderten Umständen zu revidieren oder Projekte anzupassen.\n\n🎯 ADVISORIs Decision-Framework für KI-Projekte:\n• Quantitative Scoring-Matrix: Entwicklung eines gewichteten Bewertungssystems, das verschiedene Kriterien objektiv bewertet und vergleichbare Entscheidungsgrundlagen schafft.\n• Dynamische Schwellenwerte: Etablierung anpassbarer Mindestanforderungen für verschiedene Projekttypen und Marktbedingungen.\n• Kontinuierliche Neubewertung: Implementierung regelmäßiger Checkpoints, die laufende Projekte gegen aktuelle Kriterien re-evaluieren.\n• Ausnahme-Management: Definition klarer Prozesse für Situationen, in denen strategische Überlegungen quantitative Kriterien überstimmen können."
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
    console.log('✅ C-Level FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
