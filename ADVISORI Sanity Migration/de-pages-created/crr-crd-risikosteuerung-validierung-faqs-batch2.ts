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
    console.log('Updating CRR/CRD Risikosteuerung & Validierung page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'crr-crd-risikosteuerung-validierung' })
    
    if (!existingDoc) {
      throw new Error('Document "crr-crd-risikosteuerung-validierung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie wirken sich die neuesten Änderungen an den CRR/CRD-Regularien auf unsere bestehenden Risikomodelle und Validierungsprozesse aus?",
        answer: "Die fortlaufende Evolution der CRR/CRD-Regularien bringt substantielle Veränderungen für Risikomodelle und deren Validierungsprozesse mit sich. Diese Entwicklungen erfordern eine strategische Neuausrichtung und methodische Anpassungen, um sowohl Compliance als auch Wettbewerbsfähigkeit zu wahren.\n\n🔄 Wesentliche regulatorische Entwicklungen mit direkten Modellimplikationen:\n• Erhöhte Granularitätsanforderungen: Die neueren CRR/CRD-Versionen fordern eine deutlich differenziertere Risikoquantifizierung, was bestehende Aggregationsansätze und Vereinfachungsannahmen in Frage stellt.\n• Verschärfte Konservativitätsaufschläge: Regulatoren verlangen zunehmend explizite Berücksichtigung von Modell- und Schätzunsicherheiten durch systematische Aufschläge, die transparent hergeleitet und validiert werden müssen.\n• Strengere Backtesting-Anforderungen: Die Bewertungskriterien für die Prognosegenauigkeit von Modellen wurden verschärft, mit niedrigeren Toleranzschwellen für Abweichungen und differenzierteren Analyseanforderungen.\n• Erweiterte Stresstesting-Szenarien: Anforderungen an Umfang, Tiefe und Diversität von Stressszenarien wurden ausgeweitet, mit besonderem Fokus auf simultane Risikofaktorbewegungen und Zweitrundeneffekte.\n\n📋 Notwendige Anpassungen Ihrer Validierungsprozesse:\n• Erweiterte Dokumentationsstandards: Implementieren Sie umfassendere Dokumentationsprozesse, die nicht nur methodische Details, sondern auch Entscheidungspfade, Alternativansätze und Sensitivitätsanalysen abbilden.\n• Intensivierte Methodenvalidierung: Etablieren Sie tiefergehende Analysen der statistischen Eigenschaften und Annahmen Ihrer Modelle, inklusive Verteilungsannahmen, Korrelationsstrukturen und Extremwertverhalten.\n• Datenqualitätsvalidierung: Entwickeln Sie robustere Frameworks zur Bewertung und kontinuierlichen Überwachung der Datenqualität, mit klaren Metriken und Eskalationspfaden bei Qualitätsproblemen.\n• Governance-Verstärkung: Stärken Sie die Governance-Strukturen um den Validierungsprozess, mit klareren Verantwortlichkeiten, dokumentierten Entscheidungsprozessen und unabhängiger Qualitätssicherung.\n\n💡 Strategische Handlungsempfehlungen für die Transformation:\n• Ganzheitliche Gap-Analyse: Führen Sie eine systematische Analyse der Lücken zwischen aktuellen Modellen/Prozessen und den neuesten regulatorischen Anforderungen durch, als Basis für einen priorisierten Maßnahmenplan.\n• Modulare Modernisierung: Verfolgen Sie einen modularen Ansatz bei der Modellanpassung, der kritische Komponenten priorisiert und eine schrittweise Migration ermöglicht, ohne operationelle Kontinuität zu gefährden.\n• Automatisierte Validierungsroutinen: Investieren Sie in die Automatisierung standardisierter Validierungstests, um Ressourcen für die komplexeren, qualitativen Aspekte der Validierung freizusetzen.\n• Frühzeitige Aufsichtskommunikation: Etablieren Sie einen proaktiven Dialog mit Aufsichtsbehörden über Ihre Anpassungsstrategie und Implementierungszeitpläne, um Erwartungen abzustimmen und Feedback frühzeitig einzuholen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche Best Practices empfiehlt ADVISORI für die Integration von KI und fortschrittlichen Analysetechniken in unsere Risikosteuerungsmodelle unter Einhaltung der CRR/CRD-Vorgaben?",
        answer: "Die Integration fortschrittlicher KI-Methoden in regulatorisch konforme Risikosteuerungsmodelle bietet enorme Potenziale, stellt jedoch auch komplexe Herausforderungen dar. ADVISORI hat einen strukturierten Ansatz entwickelt, der Innovation mit Compliance verbindet und die Vorteile moderner Analysetechniken regulatorisch konform erschließt.\n\n🧠 Strategischer Rahmen für regulatorisch konforme KI-Integration:\n• Use-Case-Priorisierung: Identifizieren Sie Anwendungsbereiche, in denen KI den größten Mehrwert bei überschaubarem regulatorischem Risiko bietet – etwa Frühwarnsysteme, Datenaufbereitung oder Plausibilitätsprüfungen neben bestehenden Modellen.\n• Hybride Modellarchitekturen: Kombinieren Sie erklärbare, konventionelle Modellkomponenten mit leistungsfähigen KI-Modulen in einer mehrstufigen Architektur, die sowohl Prognosegenauigkeit als auch Interpretierbarkeit sicherstellt.\n• Evidenzbasierte Validierung: Entwickeln Sie rigorose empirische Nachweise für die Überlegenheit KI-gestützter Ansätze gegenüber konventionellen Methoden anhand historischer Daten und simulierter Szenarien.\n• Governance-Erweiterung: Etablieren Sie spezifische Governance-Strukturen für KI-Modelle mit klaren Verantwortlichkeiten für Algorithmenüberwachung, Bias-Kontrolle und ethische Aspekte.\n\n🔍 Technische Best Practices für aufsichtskonforme KI-Implementierung:\n• Explainable AI (XAI): Implementieren Sie Techniken wie SHAP Values, LIME oder Attention-Mechanismen, um komplexe KI-Entscheidungen transparent und nachvollziehbar zu machen.\n• Robustheitsanalysen: Führen Sie systematische Tests zur Widerstandsfähigkeit gegen Datenfehler, Ausreißer und adversariale Angriffe durch, um die Stabilität der KI-Komponenten nachzuweisen.\n• Modell-Lineage-Tracking: Etablieren Sie lückenlose Nachverfolgbarkeit von Trainingsdaten, Algorithmen, Hyperparametern und Modellversionen für vollständige Reproduzierbarkeit und Auditierbarkeit.\n• Out-of-Distribution-Erkennung: Integrieren Sie automatische Mechanismen zur Erkennung von Datenpunkten außerhalb des Trainingsbereichs, die eine manuelle Überprüfung oder Fallback-Mechanismen auslösen.\n\n📊 Validierungsansätze für KI-gestützte Risikomodelle:\n• Challenger-Modell-Vergleiche: Betreiben Sie konventionelle Modelle parallel zu KI-Ansätzen und analysieren Sie systematisch Divergenzen in den Ergebnissen als Basis für Plausibilitätsprüfungen.\n• Progressive Komplexitätssteigerung: Beginnen Sie mit einfacheren, gut verstandenen ML-Techniken und erhöhen Sie die Komplexität schrittweise, mit rigorosen Validierungen bei jedem Übergang.\n• Synthetische Datenvalidierung: Nutzen Sie synthetisch generierte Extremszenarien und Edge Cases, um das Verhalten der KI-Modelle unter ungewöhnlichen Bedingungen zu testen und zu kalibrieren.\n• Kontinuierliches Performance-Monitoring: Implementieren Sie echtzeitnahe Überwachung von Modell-Drift, Datendrift und Prognosegenauigkeit mit automatisierten Alarmen bei signifikanten Abweichungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie sollten wir unsere Risikosteuerungsprozesse angesichts zunehmender ESG-Anforderungen innerhalb des CRR/CRD-Rahmenwerks weiterentwickeln?",
        answer: "Die Integration von ESG-Risiken in bestehende Risikosteuerungsrahmenwerke stellt eine fundamentale Herausforderung dar, die sowohl methodische Innovation als auch strukturelle Anpassungen erfordert. ADVISORI unterstützt Sie bei der strategischen Weiterentwicklung Ihrer Risikosteuerung, um ESG-Dimensionen CRR/CRD-konform zu integrieren und daraus Wettbewerbsvorteile zu generieren.\n\n🌱 Strategische Dimensionen der ESG-Integration:\n• Risikotaxonomie-Erweiterung: Entwicklung einer umfassenden Taxonomie, die traditionelle Risikokategorien mit ESG-Risikofaktoren verbindet und Transmissionskanäle klar definiert (z.B. wie physische Klimarisiken in Kreditrisiken übersetzen).\n• Double Materiality-Ansatz: Implementierung einer zweiseitigen Materialitätsbetrachtung, die sowohl finanzielle Auswirkungen von ESG-Faktoren auf das Institut (Outside-In) als auch Auswirkungen des Instituts auf Umwelt und Gesellschaft (Inside-Out) erfasst.\n• Szenariobasierte Langzeitanalyse: Etablierung von Methoden zur Bewertung langfristiger ESG-Risiken über traditionelle Planungshorizonte hinaus, unter Berücksichtigung verschiedener Klimapfade und Transitionsszenarien.\n• ESG-Datenmanagement: Aufbau einer robusten Datenarchitektur für ESG-Informationen mit klaren Datenqualitätsstandards, Anreicherungslogiken und Proxy-Ansätzen für Datenlücken.\n\n📈 Methodische Ansätze für die ESG-Risikoquantifizierung:\n• Klimastresstest-Framework: Entwicklung differenzierter Stresstests, die physische Risiken (z.B. Extremwetterereignisse) und Transitionsrisiken (z.B. Carbon Pricing, regulatorische Änderungen) in verschiedenen Zeithorizonten abbilden.\n• ESG-erweiterte Kreditrisikomodelle: Integration von ESG-Faktoren in PD-, LGD- und EAD-Modelle durch statistische Korrelationsanalysen, Expertenschätzungen und zukunftsgerichtete Adjustierungen.\n• Portfolio-Alignment-Techniken: Implementierung von Methoden zur Bewertung der Übereinstimmung von Kredit- und Investmentportfolios mit Klimazielen (z.B. Paris-Agreement) und Ableitung von Steuerungsimpulsen.\n• ESG-Risiko-Heatmapping: Entwicklung multidimensionaler Heatmaps zur Visualisierung von ESG-Risikokonzentrationen nach Sektoren, Regionen und Kundengruppen als Basis für strategische Portfolioentscheidungen.\n\n🔄 Governance- und Prozessanpassungen für effektive ESG-Integration:\n• ESG-Risikoappetit-Framework: Erweiterung des bestehenden RAF um spezifische, messbare ESG-Risikoappetit-Statements mit klaren Schwellenwerten und Eskalationspfaden.\n• Erweiterte Berichterstattung: Etablierung eines integrierten Reporting-Frameworks, das ESG-Risikometriken mit traditionellen Risikokennzahlen verbindet und verschiedene Stakeholder-Anforderungen adressiert.\n• ESG-Kompetenzaufbau: Systematische Schulung von Risikomanagern, Modellierern und Entscheidungsträgern zu ESG-Themen und deren Risikoimplkationen, unterstützt durch klare Verantwortlichkeiten und Anreizstrukturen.\n• Kollaborative Ansätze: Beteiligung an Industrieinitiativen und Datenkonsortien zur gemeinsamen Entwicklung von Standards, Methoden und Datenquellen für ESG-Risikomanagement."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche konkreten Schritte empfiehlt ADVISORI zur Verbesserung der Governance und des Three-Lines-of-Defense-Modells im Kontext der Risikosteuerung gemäß CRR/CRD?",
        answer: "Eine robuste Governance-Struktur und ein effektives Three-Lines-of-Defense-Modell sind fundamentale Voraussetzungen für eine wirksame Risikosteuerung unter CRR/CRD. ADVISORI bietet einen strukturierten Ansatz zur Optimierung dieser Elemente, der regulatorische Anforderungen mit operativer Effizienz und strategischer Wirksamkeit verbindet.\n\n🏛️ Fundamentale Governance-Optimierung für Risikosteuerung:\n• Mandatsklarheit und Rollenabgrenzung: Präzisieren Sie die Mandate, Verantwortlichkeiten und Entscheidungsbefugnisse aller Governance-Gremien (Vorstand, Risikoausschuss, Asset-Liability-Committee) mit expliziten Abgrenzungen und klaren Eskalationspfaden.\n• Risikostrategie-Alignment: Stellen Sie sicher, dass die Risikostrategie direkt aus der Geschäftsstrategie abgeleitet ist, mit klaren Mechanismen zur gegenseitigen Anpassung bei Veränderungen in einem der beiden Bereiche.\n• KPI/KRI-Integration: Entwickeln Sie ein integriertes System von Leistungs- und Risikoindikatoren, das operative Entscheidungen mit strategischen Zielen und Risikoappetit verknüpft und auf allen Organisationsebenen kaskadiert wird.\n• Governance-Digitalisierung: Implementieren Sie digitale Governance-Tools, die Entscheidungsprozesse, Verantwortlichkeiten und Maßnahmenverfolgung transparent machen und regulatorischen Nachweis erleichtern.\n\n🛡️ Optimierung des Three-Lines-of-Defense-Modells:\n• Erste Verteidigungslinie stärken: Intensivieren Sie die Risikoeigentümerschaft in den Geschäftsbereichen durch erweiterte Schulungsprogramme, Risiko-KPIs in Zielvereinbarungen und dedizierte Business-Risk-Officers mit klarem Mandat.\n• Zweite Verteidigungslinie fokussieren: Schärfen Sie die Rolle der unabhängigen Risikofunktionen durch klare Abgrenzung zwischen operativer Unterstützung und Challenge-Funktion, mit expliziten Veto-Rechten in definierten Risikobereichen.\n• Dritte Verteidigungslinie modernisieren: Transformieren Sie die Interne Revision zu einem wertstiftenden Assurance-Provider mit risikoorientiertem Prüfungsansatz, data-driven Audit-Methoden und konstruktivem Challenge aller Risikomanagement-Aktivitäten.\n• Kollaborationsmodell entwickeln: Etablieren Sie formalisierte Kollaborationsmechanismen zwischen den drei Verteidigungslinien durch gemeinsame Risikoassessments, koordinierte Assurance-Planung und geteilte Risikoinformationsplattformen.\n\n🔄 Dynamische Governance-Mechanismen für adaptive Risikosteuerung:\n• Early-Warning-Indikatoren: Implementieren Sie ein System von Frühindikatoren, die potenzielle Risikoprobleme signalisieren, bevor Limite verletzt werden, und automatisch Eskalationen oder Überprüfungen auslösen.\n• Adaptive Limitstrukturen: Entwickeln Sie dynamische Limitsysteme, die sich automatisch an veränderte Marktbedingungen, Geschäftsvolumina oder Risikofaktoren anpassen, mit klaren Regeln für Anpassungsmechanismen.\n• Governance-Stresstests: Führen Sie regelmäßige Simulationen von Governance-Prozessen unter Stressbedingungen durch, um Schwachstellen in Entscheidungs- und Eskalationsprozessen zu identifizieren und zu beheben.\n• Kulturelle Transformation: Fördern Sie eine Risikokultur, die offene Kommunikation, kritisches Hinterfragen und proaktives Risikomanagement auf allen Ebenen ermutigt, unterstützt durch entsprechende Anreizstrukturen und Vorbildfunktion des Managements."
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
    console.log('✅ FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
