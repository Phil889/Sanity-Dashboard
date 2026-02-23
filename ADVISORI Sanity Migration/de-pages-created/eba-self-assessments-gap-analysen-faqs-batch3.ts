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
    console.log('Updating EBA Self-Assessments & Gap Analysen page with C-Level FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eba-self-assessments-gap-analysen' })
    
    if (!existingDoc) {
      throw new Error('Document "eba-self-assessments-gap-analysen" not found')
    }
    
    // Create new C-Level FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können wir die Ergebnisse unserer EBA-Self-Assessments optimal mit anderen regulatorischen Frameworks und internen Kontrollen integrieren?",
        answer: "Die Integration von EBA-Self-Assessment-Ergebnissen mit anderen regulatorischen Frameworks und Kontrollstrukturen schafft erhebliche Synergien und reduziert redundante Compliance-Aktivitäten. Ein ganzheitlicher Integrationsansatz verbessert nicht nur die Effizienz, sondern stärkt auch die Wirksamkeit Ihres gesamten Governance-Systems durch konsistente Bewertungen und koordinierte Maßnahmen.\n\n🔄 Integrationsdimensionen und Synergien:\n• Regulatorische Frameworks: Systematische Mapping-Übungen zwischen EBA-Anforderungen und anderen relevanten Regelwerken (z.B. MaRisk, BAIT, SREP, DSGVO) identifizieren Überschneidungen und ermöglichen konsolidierte Compliance-Aktivitäten.\n• Three Lines of Defense: Integration der Self-Assessment-Prozesse in das übergreifende Three-Lines-of-Defense-Modell, mit klarer Abgrenzung zu Kontrollfunktionen der zweiten Linie und Prüfungsaktivitäten der dritten Linie.\n• Risikomanagement-Integration: Verknüpfung von identifizierten Compliance-Lücken mit dem operationellen Risikomanagement für eine risikoorientierte Priorisierung und konsistente Risikobewertung.\n• IKS-Abstimmung: Harmonisierung der Self-Assessment-Methodik mit dem internen Kontrollsystem, um Kontrollüberschneidungen zu erkennen und Kontrolleffektivität ganzheitlich zu bewerten.\n\n🏗️ Implementierungsstrategien für effektive Integration:\n• Zentrales Anforderungsregister: Entwicklung eines übergreifenden Repositories für regulatorische Anforderungen mit Cross-Referenzen zwischen verschiedenen Frameworks und klaren Verantwortlichkeiten.\n• Integrierte Assessment-Kalender: Koordination verschiedener Assessment-Zyklen (EBA, MaRisk, SREP, Interne Revision) für optimale Ressourcennutzung und Minimierung von Assessment-Fatigue.\n• Konsolidierte Reporting-Strukturen: Entwicklung integrierter Dashboards und Berichte, die Compliance-Status und -Maßnahmen über verschiedene Frameworks hinweg darstellen.\n• Framework-übergreifende Maßnahmenkoordination: Implementierung eines zentralen Maßnahmenmanagements, das Abhängigkeiten und Synergien zwischen Maßnahmen aus verschiedenen Frameworks identifiziert und nutzt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie sollten wir uns optimal auf aufsichtliche Prüfungen im Kontext von EBA-Anforderungen vorbereiten, und wie können unsere Self-Assessments dabei unterstützen?",
        answer: "Die Vorbereitung auf aufsichtliche Prüfungen erfordert einen systematischen Ansatz, der weit über ad-hoc Maßnahmen hinausgeht. Strategisch durchgeführte Self-Assessments spielen eine zentrale Rolle in dieser Vorbereitung, indem sie nicht nur den Compliance-Status transparent machen, sondern auch die Fähigkeit der Organisation stärken, regulatorische Anforderungen nachweisbar zu erfüllen und zu erklären.\n\n🔍 Strategische Vorbereitungselemente:\n• Kontinuierliche Prüfungsbereitschaft: Etablierung einer permanenten Prüfungsbereitschaft statt reaktiver Vorbereitung, durch Integration aufsichtlicher Erwartungen in reguläre Governance- und Kontrollprozesse.\n• Dokumentationsstrategie: Entwicklung einer systematischen Dokumentationsstruktur, die regulatorische Anforderungen, implementierte Maßnahmen, Kontrollnachweise und Verantwortlichkeiten klar verknüpft und jederzeit abrufbar macht.\n• Stakeholder-Vorbereitung: Systematische Schulung und Briefing relevanter Mitarbeiter zu aufsichtlichen Erwartungen, Prüfungsprozessen und angemessenen Interaktionsformen mit Aufsichtsbehörden.\n• Gap-Management: Proaktive Identifikation und Adressierung bekannter Schwachstellen vor Prüfungsbeginn, mit transparenter Kommunikation über laufende Verbesserungsmaßnahmen.\n\n🛡️ Nutzung von Self-Assessments in der Prüfungsvorbereitung:\n• Präventive Gap-Identifikation: Systematischer Einsatz von Self-Assessments zur frühzeitigen Erkennung potenzieller Prüfungsfeststellungen und Initiierung präventiver Maßnahmen.\n• Evidenzaufbau: Kontinuierliche Sammlung und Strukturierung von Nachweisen im Rahmen von Self-Assessments, die in Prüfungssituationen unmittelbar verfügbar sind und die Umsetzung regulatorischer Anforderungen belegen.\n• Argumentationsbasis: Nutzung von Self-Assessment-Ergebnissen und dokumentierten Maßnahmen zur Entwicklung fundierter Argumentationslinien für die Interaktion mit Prüfern.\n• Reifegraddokumentation: Transparente Darstellung des Reifegrads der eigenen Compliance-Strukturen und geplanter Weiterentwicklungen als Beleg für einen proaktiven Umgang mit regulatorischen Anforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche KPIs und Metriken sollten wir für die Überwachung des Implementierungsfortschritts nach einer Gap-Analyse etablieren?",
        answer: "Ein effektives Monitoring der Implementierung nach einer Gap-Analyse erfordert ein durchdachtes Set an Kennzahlen, das sowohl den Fortschritt als auch die Qualität und Wirksamkeit der Umsetzung messbar macht. Die richtige Kombination quantitativer und qualitativer Metriken schafft Transparenz, fördert Accountability und ermöglicht datenbasierte Steuerungsentscheidungen im Implementierungsprozess.\n\n📊 Kernkategorien effektiver Implementierungs-KPIs:\n• Fortschrittsmetriken: Messgrößen zur Erfassung des quantitativen Umsetzungsfortschritts auf verschiedenen Granularitätsebenen.\n  - Maßnahmen-Completion-Rate: Prozentualer Anteil abgeschlossener Maßnahmen an der Gesamtzahl geplanter Maßnahmen\n  - Anforderungs-Coverage: Prozentsatz der adressierten regulatorischen Anforderungen\n  - Milestone-Achievement-Rate: Einhaltung definierter Meilensteine im Zeitplan\n\n• Qualitätsmetriken: Indikatoren für die inhaltliche Qualität und Nachhaltigkeit der implementierten Lösungen.\n  - First-Time-Right-Rate: Anteil der Maßnahmen, die ohne Nacharbeiten implementiert wurden\n  - Documentation-Completeness: Vollständigkeit und Qualität der Implementierungsdokumentation\n  - Control-Effectiveness: Wirksamkeit implementierter Kontrollen in Tests und Assessments\n\n• Ressourcenmetriken: Kennzahlen zur Effizienz und Ressourcennutzung im Implementierungsprozess.\n  - Budget-Adherence: Einhaltung des geplanten Budgets für Implementierungsmaßnahmen\n  - Resource-Utilization: Auslastung und Effizienz zugewiesener Personalressourcen\n  - Implementation-Effort-vs-Plan: Vergleich des tatsächlichen Aufwands mit der Planung\n\n🔍 Implementierungsansatz für ein wirksames KPI-Framework:\n• Balanced Scorecard Approach: Entwicklung einer ausgewogenen Mischung aus Kennzahlen für verschiedene Perspektiven (Prozess, Qualität, Ressourcen, Stakeholder)\n• Hierarchisches Reporting: Implementierung eines mehrstufigen Reporting-Systems mit unterschiedlichen Detaillierungsgraden für verschiedene Führungsebenen\n• Threshold-basierte Eskalationsmechanismen: Definition von Schwellenwerten für KPIs, die automatische Eskalationen und Gegenmaßnahmen auslösen\n• Integrierte Visualisierung: Entwicklung intuitiver Dashboards für die kontinuierliche Überwachung aller relevanten Metriken"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Change-Management-Strategien sind besonders wirksam, um die Umsetzung von Maßnahmen aus EBA-Gap-Analysen erfolgreich zu gestalten?",
        answer: "Die Implementierung von Maßnahmen aus EBA-Gap-Analysen ist nicht nur ein technischer Prozess, sondern eine organisatorische Transformation, die wirksame Change-Management-Strategien erfordert. Der Erfolg hängt maßgeblich davon ab, wie gut es gelingt, Verständnis, Akzeptanz und aktive Unterstützung für die notwendigen Veränderungen in der gesamten Organisation zu schaffen.\n\n🔄 Kernelemente eines wirksamen Change-Management-Ansatzes:\n• Executive Sponsorship: Sichtbares und kontinuierliches Commitment der obersten Führungsebene als entscheidender Erfolgsfaktor für organisationsweite Akzeptanz und Priorisierung.\n• Stakeholder-Management: Systematische Identifikation und differenzierte Ansprache verschiedener Stakeholder-Gruppen basierend auf ihrer Rolle, ihrem Einfluss und ihrer Betroffenheit von den Veränderungen.\n• Change-Narrative: Entwicklung einer überzeugenden Veränderungsgeschichte, die regulatorische Anforderungen mit geschäftlichem Mehrwert und organisatorischer Weiterentwicklung verbindet.\n• Capability Building: Gezielte Entwicklung der notwendigen Fähigkeiten und Kompetenzen durch Schulungen, Coaching und Wissenstransfer, um Mitarbeiter zur erfolgreichen Umsetzung zu befähigen.\n\n📋 Praktische Implementierungsstrategien:\n• Change-Impact-Assessment: Systematische Analyse der Auswirkungen jeder Maßnahme auf Prozesse, Systeme, Rollen und Arbeitsweisen als Basis für zielgerichtete Change-Aktivitäten.\n• Multi-Channel-Kommunikation: Nutzung verschiedener Kommunikationskanäle und -formate, um alle relevanten Stakeholder kontinuierlich und zielgruppengerecht zu informieren und einzubinden.\n• Change-Agent-Netzwerk: Aufbau eines Netzwerks von Change Agents aus verschiedenen Organisationsbereichen, die als Multiplikatoren und lokale Veränderungstreiber fungieren.\n• Quick Wins und Erfolgsgeschichten: Strategische Priorisierung von schnell realisierbaren Maßnahmen mit hoher Sichtbarkeit, um frühe Erfolge zu demonstrieren und Momentum für komplexere Veränderungen zu schaffen."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ EBA Self-Assessments & Gap Analysen C-Level FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
