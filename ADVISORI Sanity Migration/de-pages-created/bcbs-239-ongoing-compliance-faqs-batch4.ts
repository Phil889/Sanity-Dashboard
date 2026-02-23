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
    console.log('Updating BCBS-239 Ongoing Compliance page with FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'bcbs-239-ongoing-compliance' })
    
    if (!existingDoc) {
      throw new Error('Document "bcbs-239-ongoing-compliance" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können Finanzinstitute Cost-Value-Analysen für ihre BCBS-239 Ongoing Compliance Maßnahmen durchführen?",
        answer: "Eine strategische Cost-Value-Analyse der BCBS-239 Compliance-Maßnahmen ermöglicht Finanzinstituten, über die reine Pflichterfüllung hinauszugehen und echten Geschäftswert aus regulatorischen Investitionen zu generieren. ADVISORI empfiehlt einen mehrdimensionalen Bewertungsansatz, der sowohl quantitative als auch qualitative Aspekte berücksichtigt.\n\n💰 Framework für ganzheitliche Cost-Value-Analysen:\n• Multi-Level ROI-Betrachtung: Analyse des Returns auf drei Ebenen: Compliance-ROI (Vermeidung von Strafen/Auflagen), Effizienz-ROI (Prozessverbesserungen) und strategischer ROI (verbesserte Entscheidungsfähigkeit).\n• Total Cost of Compliance (TCC): Erfassung aller direkten und indirekten Kosten, einschließlich IT-Investitionen, Personalaufwand, Opportunitätskosten und Wartungskosten über den gesamten Lebenszyklus.\n• Value-Stream-Mapping für Compliance: Identifikation von Wertschöpfung und Verschwendung in Compliance-Prozessen zur gezielten Optimierung von Aufwand-Nutzen-Verhältnissen.\n• Quantifizierung qualitativer Benefits: Systematische Bewertung schwer messbarer Vorteile wie Reputationsschutz, Vertrauen der Stakeholder und verbesserte Krisenfestigkeit.\n• Incrementelles Investitionsmodell: Priorisierung von Maßnahmen mit hohem Wert-Kosten-Verhältnis für schrittweise Implementierung bei begrenzten Ressourcen.\n\n📊 Erfolgsfaktoren für aussagekräftige Analysen:\n• Baseline-Etablierung: Schaffung einer soliden Ausgangsbasis für Kosten und Performance-Metriken, um Verbesserungen messbar zu machen.\n• Prozessorientierte Kostenzuordnung: Zuordnung von Compliance-Kosten zu spezifischen Geschäftsprozessen anstelle pauschaler IT- oder Compliance-Budgets.\n• Synergieeffekte erfassen: Identifikation und Bewertung von Synergien zwischen BCBS-239 und anderen regulatorischen oder strategischen Initiativen.\n• Scenario-Based Planning: Entwicklung verschiedener Investitionsszenarien mit unterschiedlichen Kosten-Nutzen-Profilen zur informierten Entscheidungsfindung.\n• Kontinuierliches Value Tracking: Regelmäßige Überprüfung und Anpassung der Kosten-Nutzen-Analyse über den gesamten Compliance-Lebenszyklus."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie kann die Ongoing Compliance für BCBS-239 mit anderen regulatorischen Anforderungen wie DSGVO, MaRisk oder BAIT harmonisiert werden?",
        answer: "Die Harmonisierung verschiedener regulatorischer Anforderungen ist ein strategischer Hebel, um Compliance-Aufwände zu optimieren und Synergien zu nutzen. Anstatt jede Regulierung isoliert zu betrachten, empfiehlt ADVISORI einen integrierten Ansatz, der gemeinsame Grundprinzipien identifiziert und zusammenführt.\n\n🔄 Strategischer Harmonisierungsansatz:\n• Regulatorisches Metamodell: Entwicklung eines übergreifenden Referenzmodells, das die gemeinsamen Grundprinzipien verschiedener Regulierungen (BCBS-239, DSGVO, MaRisk, BAIT) abbildet und als Ausgangspunkt für harmonisierte Implementierungen dient.\n• Anforderungs-Mapping: Systematische Zuordnung ähnlicher oder überlappender Anforderungen aus verschiedenen Regulierungen, um Redundanzen zu identifizieren und gemeinsame Kontrollen zu implementieren.\n• Integriertes Compliance-Management: Etablierung einer zentralen Governance-Struktur, die regulatorische Anforderungen ganzheitlich steuert und Abhängigkeiten proaktiv managt.\n• Unified Control Framework: Implementierung eines einheitlichen Kontrollrahmenwerks, das mehrere regulatorische Anforderungen gleichzeitig adressiert und Mehrfachprüfungen vermeidet.\n• Cross-Regulatory Change Management: Einrichtung eines regulierungsübergreifenden Änderungsmanagement-Prozesses, der die Auswirkungen neuer Anforderungen auf das Gesamtsystem bewertet.\n\n🔍 Konkrete Synergiepotenziale zwischen Regulierungen:\n• BCBS-239 & DSGVO: Gemeinsame Datengovernance-Strukturen, die sowohl die Qualität von Risikodaten als auch den Schutz personenbezogener Daten sicherstellen, insbesondere in Bereichen wie Datenklassifikation, Lineage und Zugriffsmanagement.\n• BCBS-239 & MaRisk: Integrierte Risikodatenarchitektur, die sowohl die spezifischen Anforderungen an Risikodatenaggregation (BCBS-239) als auch die allgemeinen Risikomanagement-Anforderungen (MaRisk AT 4.3.4) erfüllt.\n• BCBS-239 & BAIT: Harmonisierte IT-Governance, die sowohl die technischen Aspekte der Risikodatenaggregation als auch die allgemeinen IT-Governance-Anforderungen nach BAIT adressiert, besonders in Bereichen wie IT-Strategie, Projektmanagement und IT-Betrieb.\n• BCBS-239 & SREP: Nutzung der verbesserten Risikodatenaggregation für effektivere ICAAP- und ILAAP-Prozesse im Rahmen des aufsichtlichen Überprüfungs- und Bewertungsprozesses."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche Herausforderungen entstehen durch neue Technologien wie KI und Big Data für die BCBS-239 Compliance und wie können diese adressiert werden?",
        answer: "Während neue Technologien wie KI, Machine Learning und Big Data Analytics erhebliche Chancen für ein fortschrittliches Risikomanagement bieten, stellen sie auch einzigartige Herausforderungen für die BCBS-239 Compliance dar. ADVISORI unterstützt Finanzinstitute dabei, diese Technologien regulationskonform zu nutzen und gleichzeitig ihre Vorteile voll auszuschöpfen.\n\n⚠️ Spezifische Herausforderungen neuer Technologien für BCBS-239:\n• Black-Box-Problematik: Erklärbarkeits- und Nachvollziehbarkeitsdefizite bei komplexen ML-Modellen stehen im Konflikt mit BCBS-239-Anforderungen an Transparenz und Validierbarkeit.\n• Datenherkunft in Big-Data-Umgebungen: Schwierigkeiten bei der Sicherstellung vollständiger Data Lineage in heterogenen, großvolumigen und schnell wachsenden Datenlandschaften.\n• Volatilität und Drift: ML-Modelle können im Laufe der Zeit an Genauigkeit verlieren oder unerwartete Bias entwickeln, was die kontinuierliche Validität von Risikoanalysen gefährdet.\n• Governance-Herausforderungen: Unklare Verantwortlichkeiten und Kontrollprozesse für algorithmische Entscheidungen im Risikomanagement.\n• Technische Komplexität: Hohe Anforderungen an Fachwissen und Ressourcen für die angemessene Überwachung und Validierung fortschrittlicher analytischer Methoden.\n\n🛡️ Strategische Lösungsansätze für regulationskonforme Innovation:\n• Explainable AI (XAI) Frameworks: Implementierung von Modellen und Methoden, die Transparenz, Interpretierbarkeit und Nachvollziehbarkeit von KI-gestützten Risikoanalysen gewährleisten.\n• Regulatorische Sandboxes: Etablierung kontrollierter Testumgebungen für innovative Technologien, in denen BCBS-239-Konformität vor dem produktiven Einsatz sichergestellt werden kann.\n• Model Risk Governance 2.0: Erweiterung klassischer Modellvalidierung um spezifische Kontrollen für ML-Modelle, einschließlich kontinuierlichen Monitorings auf Drift und Bias.\n• Metadata Management für Big Data: Durchgängige Erfassung von Herkunft, Qualität und Transformationen bei großen, heterogenen Datensätzen zur Sicherstellung der Compliance-Anforderungen.\n• Human-in-the-Loop-Architekturen: Integration menschlicher Expertise in algorithmische Entscheidungsprozesse an kritischen Punkten, besonders bei komplexen oder neuartigen Risikosituationen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können kleinere und mittelgroße Finanzinstitute BCBS-239 Ongoing Compliance kosteneffizient umsetzen?",
        answer: "Kleinere und mittelgroße Finanzinstitute stehen vor der Herausforderung, BCBS-239 Compliance mit begrenzteren Ressourcen als Großbanken umzusetzen. ADVISORI bietet maßgeschneiderte Ansätze, die den Proportionalitätsgrundsatz nutzen und gleichzeitig die wesentlichen regulatorischen Anforderungen erfüllen, ohne unverhältnismäßige Belastungen zu verursachen.\n\n🔍 Proportionale Implementierungsstrategien:\n• Risikoorientierte Priorisierung: Fokussierung auf die für das spezifische Geschäftsmodell relevantesten Risikodaten und kritischsten BCBS-239 Prinzipien anstelle einer umfassenden Implementation aller Aspekte.\n• Skalierbare Governance-Strukturen: Entwicklung von schlanken, aber effektiven Governance-Modellen, die mit wachsenden Anforderungen mitwachsen können, ohne initiale Überinvestition.\n• Agiler Implementierungsansatz: Iterative Umsetzung mit schnellen, wertschöpfenden Zyklen, die kontinuierliche Verbesserungen ermöglichen und Ressourcen optimal nutzen.\n• Gemeinsame Service-Modelle: Prüfung von Kooperationsmöglichkeiten mit anderen Instituten für geteilte Compliance-Infrastrukturen oder gemeinsame Expertenpools.\n• Regulatorischer Dialog: Proaktiver Austausch mit Aufsichtsbehörden über proportionale Umsetzungskonzepte und angemessene Erwartungen für Institute unterschiedlicher Größe und Komplexität.\n\n💡 Kosteneffiziente Technologie- und Ressourcennutzung:\n• Cloud-basierte Compliance-Lösungen: Nutzung flexibler, nutzungsbasierter Technologiemodelle anstelle kostenintensiver On-Premise-Infrastrukturen.\n• Open-Source- und Community-Lösungen: Einsatz von kostengünstigen Open-Source-Tools für Datenqualität, Lineage-Tracking und Reporting, ergänzt durch kommerzielle Lösungen nur wo nötig.\n• Automatisierung wiederkehrender Aufgaben: Fokus auf die Automatisierung hochfrequenter, manueller Compliance-Prozesse für maximale Effizienzgewinne.\n• Managed Services & Expertise-Sharing: Gezielte Auslagerung spezialisierter Compliance-Funktionen an Dienstleister oder Nutzung von Time-Sharing-Modellen für Fachexperten.\n• Integrierte Compliance-Workflows: Einbettung von BCBS-239 Kontrollen in bestehende Geschäftsprozesse, um separate Compliance-Aktivitäten zu minimieren und operativen Mehrwert zu schaffen."
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
    console.log('✅ FAQs batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
