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
    console.log('Updating KI-Ethik-Beratung page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'ki-ethik-beratung' })
    
    if (!existingDoc) {
      throw new Error('Document "ki-ethik-beratung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie adressiert ADVISORI die komplexen Herausforderungen von Bias und Fairness in KI-Systemen und welche konkreten Maßnahmen gewährleisten diskriminierungsfreie AI-Anwendungen?',
        answer: "Bias und Diskriminierung in KI-Systemen stellen eine der größten ethischen Herausforderungen für Unternehmen dar. ADVISORI entwickelt systematische Ansätze zur Bias-Detection und Fairness-Optimierung, die nicht nur technische Lösungen bieten, sondern auch organisatorische und prozessuale Veränderungen umfassen, um nachhaltig faire KI-Systeme zu gewährleisten.\n\n🔍 Systematische Bias-Identifikation und Analyse:\n• Umfassende Datenaudit-Verfahren: Detaillierte Analyse von Trainingsdaten auf versteckte Verzerrungen, historische Diskriminierungsmuster und unausgewogene Repräsentation verschiedener Gruppen.\n• Algorithmus-Transparenz und Nachvollziehbarkeit: Implementierung von Explainable AI-Techniken, die Entscheidungsprozesse sichtbar machen und potenzielle Bias-Quellen identifizieren.\n• Multi-dimensionale Fairness-Metriken: Entwicklung und Anwendung verschiedener Fairness-Definitionen und Messverfahren, die unterschiedliche Aspekte von Gerechtigkeit berücksichtigen.\n• Kontinuierliches Monitoring: Aufbau von Systemen zur laufenden Überwachung der KI-Performance auf Fairness-Indikatoren und frühzeitige Erkennung von Bias-Drift.\n\n⚖️ Proaktive Fairness-Optimierung und Mitigation:\n• Bias-Mitigation-Strategien auf allen Ebenen: Implementierung von Pre-Processing, In-Processing und Post-Processing-Techniken zur Bias-Reduktion in verschiedenen Phasen des ML-Lebenszyklus.\n• Diverse und repräsentative Datensätze: Strategien zur Verbesserung der Datenqualität und Repräsentativität, einschließlich synthetischer Datenergänzung und gezielter Datensammlung.\n• Fairness-Constraints in Modellentwicklung: Integration von Fairness-Zielen direkt in die Optimierungsfunktionen und Modellarchitekturen.\n• Human-in-the-Loop-Ansätze: Einbindung menschlicher Expertise und Urteilskraft in kritische Entscheidungsprozesse zur Qualitätssicherung.\n\n🏛️ Organisatorische und governance-basierte Maßnahmen:\n• Diverse Teams und Perspektiven: Aufbau interdisziplinärer Teams mit verschiedenen Hintergründen und Perspektiven für umfassende Bias-Erkennung.\n• Ethik-Review-Prozesse: Etablierung systematischer Überprüfungsverfahren für KI-Projekte mit Fokus auf Fairness und Diskriminierungsfreiheit.\n• Stakeholder-Einbindung: Aktive Konsultation betroffener Gruppen und Communities zur Identifikation potenzieller Diskriminierungsrisiken.\n• Transparente Kommunikation: Offene Darstellung von Fairness-Bemühungen und deren Ergebnisse gegenüber Stakeholdern und der Öffentlichkeit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'In welcher Weise unterstützt ADVISORI Unternehmen beim Aufbau einer nachhaltigen AI-Ethics-Governance-Struktur, die sowohl operative Exzellenz als auch strategische Flexibilität gewährleistet?',
        answer: "Der Aufbau einer effektiven AI-Ethics-Governance erfordert mehr als nur die Erstellung von Richtlinien. ADVISORI entwickelt umfassende Governance-Strukturen, die ethische Prinzipien in die DNA des Unternehmens integrieren und gleichzeitig die Flexibilität bewahren, die für Innovation und Wachstum erforderlich ist.\n\n🏗️ Struktureller Aufbau nachhaltiger AI-Ethics-Governance:\n• AI-Ethics-Committee-Design: Etablierung multidisziplinärer Ethik-Gremien mit klaren Mandaten, Entscheidungsbefugnissen und Ressourcen für effektive Governance.\n• Rollenverteilung und Verantwortlichkeiten: Definition spezifischer Rollen wie Chief AI Ethics Officer, Ethics Champions und Fachbereichsvertreter mit klaren Aufgaben und Kompetenzen.\n• Eskalations- und Entscheidungsprozesse: Entwicklung strukturierter Verfahren für ethische Dilemmata, Konfliktlösung und strategische Ethik-Entscheidungen.\n• Integration in bestehende Governance: Nahtlose Einbindung der AI-Ethics-Governance in vorhandene Unternehmensstrukturen und Entscheidungsprozesse.\n\n📋 Operative Exzellenz durch systematische Prozesse:\n• Ethik-Assessment-Frameworks: Entwicklung standardisierter Bewertungsverfahren für KI-Projekte in verschiedenen Entwicklungsphasen.\n• Compliance-Monitoring und Reporting: Aufbau von Systemen zur kontinuierlichen Überwachung ethischer Performance und regelmäßiger Berichterstattung an die Geschäftsleitung.\n• Schulungs- und Awareness-Programme: Implementierung umfassender Bildungsprogramme zur Sensibilisierung und Befähigung aller Mitarbeiter im Umgang mit AI-Ethics.\n• Dokumentations- und Audit-Trail-Systeme: Etablierung lückenloser Dokumentation ethischer Entscheidungen für Transparenz und Nachvollziehbarkeit.\n\n🔄 Strategische Flexibilität und Anpassungsfähigkeit:\n• Agile Governance-Methoden: Implementierung flexibler Governance-Ansätze, die schnelle Anpassungen an neue ethische Herausforderungen ermöglichen.\n• Szenario-basierte Planung: Entwicklung von Governance-Szenarien für verschiedene Zukunftsszenarien und technologische Entwicklungen.\n• Kontinuierliche Verbesserung: Etablierung von Feedback-Schleifen und Lernmechanismen zur kontinuierlichen Optimierung der Governance-Strukturen.\n• Innovation-Ethics-Balance: Schaffung von Mechanismen, die ethische Verantwortung mit Innovationsgeschwindigkeit und Marktanforderungen in Einklang bringen.\n\n🎯 ADVISORI Governance-Enablement:\n• Maßgeschneiderte Governance-Blueprints basierend auf Unternehmensgröße, Branche und spezifischen Anforderungen.\n• Change Management-Unterstützung für die erfolgreiche Implementierung und Adoption neuer Governance-Strukturen.\n• Benchmarking und Best Practice-Transfer aus anderen Unternehmen und Branchen für optimale Governance-Gestaltung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie gewährleistet ADVISORI die Balance zwischen KI-Transparenz und Geschäftsgeheimnissen, insbesondere bei der Implementierung von Explainable AI in wettbewerbssensitiven Bereichen?',
        answer: "Die Herausforderung zwischen Transparenz und Geschäftsgeheimnissen ist eine der komplexesten Aufgaben in der KI-Ethik. ADVISORI entwickelt innovative Ansätze, die sowohl ethische Transparenzanforderungen erfüllen als auch kritische Geschäftsinteressen und Wettbewerbsvorteile schützen.\n\n🔐 Strategische Transparenz ohne Preisgabe von Geschäftsgeheimnissen:\n• Selektive Transparenz-Strategien: Entwicklung differenzierter Transparenz-Level für verschiedene Stakeholder-Gruppen, die relevante Informationen bereitstellen, ohne sensible Details preiszugeben.\n• Abstraktions-basierte Erklärungen: Implementierung von Explainable AI-Techniken, die Entscheidungslogik auf konzeptioneller Ebene erklären, ohne spezifische Algorithmus-Details zu enthüllen.\n• Proxy-Metriken und Indikatoren: Entwicklung von Transparenz-Indikatoren, die Vertrauen schaffen, ohne die zugrunde liegenden Modelle oder Daten vollständig offenzulegen.\n• Vertrauensbasierte Transparenz: Aufbau von Vertrauen durch konsistente ethische Performance und nachweisbare Fairness, auch ohne vollständige technische Offenlegung.\n\n🛡️ Schutz kritischer IP und Wettbewerbsvorteile:\n• IP-sichere Explainability-Methoden: Anwendung von Techniken wie LIME, SHAP oder Counterfactual Explanations, die Erklärungen liefern, ohne Modell-Internals preiszugeben.\n• Federated Learning und Privacy-Preserving Techniques: Implementierung von Ansätzen, die Transparenz ermöglichen, während sensible Daten und Algorithmen geschützt bleiben.\n• Differential Privacy für Erklärungen: Anwendung von Differential Privacy-Techniken auf Explainability-Outputs, um individuelle Datenpunkte zu schützen.\n• Secure Multi-Party Computation: Nutzung kryptographischer Verfahren für transparente Berechnungen ohne Preisgabe der zugrunde liegenden Daten oder Modelle.\n\n⚖️ Regulatorische Compliance bei IP-Schutz:\n• Compliance-konforme Minimal-Disclosure: Entwicklung von Transparenz-Strategien, die regulatorische Anforderungen erfüllen, während IP-Schutz maximiert wird.\n• Audit-freundliche Dokumentation: Erstellung von Dokumentationsstandards, die Auditoren und Regulatoren zufriedenstellen, ohne Geschäftsgeheimnisse zu gefährden.\n• Vertrauenswürdige Drittparteien: Einbindung unabhängiger Auditoren oder Zertifizierungsstellen für Transparenz-Nachweis ohne direkte Offenlegung.\n• Branchenstandards und Kooperationen: Entwicklung branchenweiter Standards für ethische Transparenz, die allen Marktteilnehmern zugutekommen.\n\n🎯 ADVISORI Transparenz-Innovation:\n• Entwicklung proprietärer Explainability-Frameworks, die maximale Transparenz bei minimalem IP-Risiko bieten.\n• Aufbau von Vertrauens-Ökosystemen mit Kunden, Partnern und Regulatoren für nachhaltige Transparenz-Lösungen.\n• Innovation in Privacy-Preserving Explainability-Technologien für Wettbewerbsvorteile durch ethische Führerschaft."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Rolle spielt ADVISORI bei der Vorbereitung auf zukünftige KI-Regulierungen wie den EU AI Act und wie können Unternehmen proaktiv Compliance-Vorteile erzielen?',
        answer: "Die regulatorische Landschaft für KI entwickelt sich rasant, mit dem EU AI Act als Vorreiter für globale KI-Regulierung. ADVISORI unterstützt Unternehmen dabei, nicht nur compliant zu werden, sondern regulatorische Veränderungen als strategische Chance zu nutzen und Wettbewerbsvorteile durch proaktive Compliance zu erzielen.\n\n📜 Proaktive Regulierungs-Vorbereitung und Compliance-Strategie:\n• Regulatorisches Monitoring und Trend-Analyse: Kontinuierliche Beobachtung regulatorischer Entwicklungen weltweit und frühzeitige Identifikation relevanter Anforderungen für Ihr Unternehmen.\n• Gap-Analyse und Readiness-Assessment: Systematische Bewertung aktueller KI-Systeme und Prozesse gegen kommende regulatorische Anforderungen.\n• Compliance-Roadmap-Entwicklung: Erstellung detaillierter Implementierungspläne für regulatorische Anforderungen mit Priorisierung und Ressourcenplanung.\n• Risk-based Compliance-Ansätze: Entwicklung risikobasierter Compliance-Strategien, die Ressourcen auf die kritischsten Bereiche fokussieren.\n\n🏆 Strategische Vorteile durch Early Adoption:\n• First-Mover-Advantage: Frühe Implementierung ethischer Standards schafft Marktvorteile und Vertrauen bei Stakeholdern vor regulatorischen Deadlines.\n• Compliance-as-a-Service: Entwicklung interner Compliance-Kompetenzen, die als Wettbewerbsvorteil und potenzielle Einnahmequelle genutzt werden können.\n• Regulatorische Partnerschaft: Aufbau von Beziehungen zu Regulierungsbehörden und Beteiligung an Standardisierungsprozessen für Einfluss auf zukünftige Regelungen.\n• Branchenführerschaft: Positionierung als ethischer Vorreiter in der Branche durch proaktive Compliance und Best Practice-Sharing.\n\n🔧 Technische und organisatorische Compliance-Implementierung:\n• AI-System-Klassifizierung und Risk-Assessment: Systematische Kategorisierung von KI-Anwendungen nach Risikostufen und entsprechende Compliance-Maßnahmen.\n• Dokumentations- und Audit-Trail-Systeme: Aufbau umfassender Dokumentationssysteme für Compliance-Nachweis und regulatorische Audits.\n• Quality Management für AI: Implementierung von QM-Systemen speziell für KI-Entwicklung und -Betrieb nach regulatorischen Standards.\n• Human Oversight und Governance: Etablierung menschlicher Aufsicht und Kontrollmechanismen für hochriskante KI-Anwendungen.\n\n🌐 Globale Compliance-Strategie und Harmonisierung:\n• Multi-jurisdiktionale Compliance: Entwicklung von Compliance-Strategien, die verschiedene regulatorische Rahmen weltweit berücksichtigen.\n• Harmonisierte Standards: Implementierung von Standards, die verschiedene regulatorische Anforderungen gleichzeitig erfüllen.\n• Skalierbare Compliance-Architekturen: Aufbau von Compliance-Systemen, die mit regulatorischen Änderungen und Geschäftswachstum skalieren.\n• Cross-Border-Datenfluss-Management: Strategien für compliant Datenverarbeitung über Ländergrenzen hinweg unter verschiedenen Regulierungsregimen."
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
