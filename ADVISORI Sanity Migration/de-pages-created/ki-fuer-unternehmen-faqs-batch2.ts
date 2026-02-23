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
    console.log('Updating KI für Unternehmen page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'ki-fuer-unternehmen' })
    
    if (!existingDoc) {
      throw new Error('Document "ki-fuer-unternehmen" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie implementiert ADVISORI robuste AI-Governance-Frameworks und welche Compliance-Anforderungen müssen Unternehmen bei der KI-Nutzung beachten?',
        answer: "Robuste AI-Governance ist fundamental für verantwortungsvolle und nachhaltige KI-Nutzung in Unternehmen. ADVISORI entwickelt umfassende Governance-Frameworks, die ethische Standards, regulatorische Compliance und Geschäftsrisiken systematisch adressieren. Unser Ansatz schafft nicht nur rechtliche Sicherheit, sondern auch Vertrauen bei Stakeholdern und nachhaltigen Geschäftswert durch verantwortungsvolle AI-Innovation.\n\n⚖️ Umfassende AI-Governance-Architektur:\n• Ethische AI-Prinzipien und Standards: Entwicklung unternehmensweiter AI-Ethik-Richtlinien, die Fairness, Transparenz, Verantwortlichkeit und menschliche Kontrolle gewährleisten.\n• Risk-Assessment und Management-Frameworks: Systematische Identifikation, Bewertung und Mitigation von AI-Risiken durch strukturierte Prozesse und kontinuierliche Überwachung.\n• Compliance-Integration und Monitoring: Nahtlose Integration regulatorischer Anforderungen in AI-Entwicklungsprozesse mit automatisierten Compliance-Checks und Audit-Trails.\n• Stakeholder-Governance und Verantwortlichkeiten: Klare Rollen, Verantwortlichkeiten und Entscheidungsprozesse für AI-Governance auf allen Organisationsebenen.\n• Transparenz und Explainability-Standards: Implementierung von Explainable AI-Technologien für nachvollziehbare und vertrauensvolle AI-Entscheidungen.\n\n🛡️ DSGVO und regulatorische Compliance-Excellence:\n• Privacy-by-Design für AI-Systeme: Integration von Datenschutzprinzipien in alle AI-Entwicklungsphasen mit minimaler Datenverarbeitung und maximaler Privatsphäre.\n• EU AI Act Compliance-Vorbereitung: Proaktive Anpassung an kommende AI-Regulierungen mit Risk-Kategorisierung und entsprechenden Compliance-Maßnahmen.\n• Branchenspezifische Regulierungs-Integration: Berücksichtigung sektorspezifischer Anforderungen wie Finanzregulierung, Medizinprodukte oder Automotive-Standards.\n• Internationale Compliance-Harmonisierung: Entwicklung globaler Compliance-Strategien für multinationale Unternehmen mit verschiedenen Jurisdiktionen.\n\n🔍 ADVISORI Governance-Excellence:\n• Entwicklung maßgeschneiderter Governance-Frameworks, die Unternehmenskultur, Branchenanforderungen und strategische Ziele optimal balancieren.\n• Implementierung von AI-Governance-Dashboards für Real-time Monitoring und proaktive Risk-Management.\n• Kontinuierliche Governance-Optimierung durch Best-Practice-Integration und Lessons-Learned aus AI-Projekten.\n• Executive-Training und Governance-Schulungen für kompetente und verantwortungsvolle AI-Führung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche Strategien nutzt ADVISORI für effektives AI-Risk-Management und wie können Unternehmen KI-bedingte Geschäftsrisiken proaktiv minimieren?',
        answer: "Effektives AI-Risk-Management ist entscheidend für sichere und nachhaltige KI-Implementierung in Unternehmen. ADVISORI entwickelt systematische Risk-Management-Strategien, die technische, operative, rechtliche und reputative Risiken umfassend adressieren. Unser proaktiver Ansatz identifiziert Risiken frühzeitig und implementiert robuste Mitigation-Strategien für sichere AI-Innovation.\n\n🎯 Systematisches AI-Risk-Assessment:\n• Technische Risiko-Identifikation: Umfassende Bewertung von Algorithmus-Bias, Datenqualitätsproblemen, Model-Drift und Adversarial Attacks für robuste AI-Systeme.\n• Operative Risk-Analyse: Evaluation von Prozessrisiken, Abhängigkeiten, Skill-Gaps und Integrations-Herausforderungen für stabile AI-Operations.\n• Regulatorische und Compliance-Risiken: Proaktive Identifikation rechtlicher Risiken, Datenschutz-Verletzungen und regulatorischer Änderungen für Compliance-Sicherheit.\n• Reputations- und Stakeholder-Risiken: Bewertung von Vertrauensrisiken, ethischen Bedenken und gesellschaftlichen Auswirkungen für nachhaltige AI-Akzeptanz.\n• Business-Impact-Analyse: Quantifizierung potenzieller Geschäftsauswirkungen und Entwicklung von Business-Continuity-Strategien.\n\n🛡️ Proaktive Risk-Mitigation-Strategien:\n• Robuste AI-Testing und Validation: Implementierung umfassender Testing-Frameworks mit Stress-Tests, Bias-Detection und Performance-Monitoring.\n• Fail-Safe-Mechanismen und Human-in-the-Loop: Integration von Sicherheitsmechanismen und menschlicher Kontrolle für kritische AI-Entscheidungen.\n• Kontinuierliches Monitoring und Alerting: Real-time Überwachung von AI-Performance, Drift-Detection und automatische Eskalations-Prozesse.\n• Incident-Response und Recovery-Pläne: Vorbereitung strukturierter Reaktionspläne für AI-Incidents mit klaren Verantwortlichkeiten und Kommunikationsstrategien.\n• Vendor-Risk-Management: Bewertung und Management von Risiken durch externe AI-Services und Technologie-Partner.\n\n🔍 ADVISORI Risk-Management-Excellence:\n• Entwicklung maßgeschneiderter Risk-Frameworks mit branchenspezifischen Risiko-Profilen und Mitigation-Strategien.\n• Implementierung von AI-Risk-Dashboards für Executive-Visibility und proaktive Entscheidungsfindung.\n• Integration von Risk-Management in AI-Entwicklungsprozesse für kontinuierliche Risiko-Bewertung und -Mitigation.\n• Aufbau interner Risk-Management-Kompetenzen durch Training und Best-Practice-Transfer für nachhaltige Risiko-Kontrolle."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie stellt ADVISORI ethische KI-Standards sicher und welche Maßnahmen verhindern Algorithmus-Bias in Enterprise AI-Systemen?',
        answer: "Ethische KI-Standards und Bias-Prevention sind fundamental für vertrauensvolle und gesellschaftlich verantwortliche AI-Implementierung. ADVISORI entwickelt umfassende Ethik-Frameworks und Bias-Detection-Mechanismen, die nicht nur technische Fairness gewährleisten, sondern auch gesellschaftliche Werte respektieren und nachhaltiges Vertrauen in AI-Systeme schaffen.\n\n🌟 Ethische AI-Framework-Entwicklung:\n• Wertebasierte AI-Prinzipien: Entwicklung unternehmensweiter Ethik-Richtlinien, die Fairness, Transparenz, Verantwortlichkeit, Privatsphäre und menschliche Würde in den Mittelpunkt stellen.\n• Stakeholder-Integration und Partizipation: Einbindung verschiedener Interessensgruppen in ethische Entscheidungsprozesse für gesellschaftlich akzeptable AI-Lösungen.\n• Ethik-by-Design-Prinzipien: Integration ethischer Überlegungen in alle AI-Entwicklungsphasen von der Konzeption bis zur Implementierung.\n• Kontinuierliche Ethik-Bewertung: Regelmäßige Überprüfung und Anpassung ethischer Standards basierend auf gesellschaftlichen Entwicklungen und Lernerfahrungen.\n• Transparenz und Explainability: Implementierung nachvollziehbarer AI-Entscheidungen für Vertrauen und Verantwortlichkeit.\n\n⚖️ Systematische Bias-Prevention und Fairness:\n• Datenqualität und Repräsentativität: Umfassende Analyse von Trainingsdaten auf Vollständigkeit, Ausgewogenheit und potenzielle Verzerrungen.\n• Algorithmus-Fairness-Testing: Implementierung statistischer Tests und Fairness-Metriken zur Identifikation und Korrektur von Bias in AI-Modellen.\n• Diverse Development-Teams: Förderung vielfältiger Entwicklungsteams mit unterschiedlichen Perspektiven und Hintergründen für ausgewogene AI-Entwicklung.\n• Kontinuierliches Bias-Monitoring: Real-time Überwachung von AI-Entscheidungen auf Fairness und automatische Bias-Detection in produktiven Systemen.\n• Korrektur- und Anpassungsmechanismen: Implementierung von Feedback-Loops und Korrekturverfahren für kontinuierliche Fairness-Optimierung.\n\n🔍 ADVISORI Ethik-Excellence:\n• Entwicklung maßgeschneiderter Ethik-Frameworks, die Unternehmenskultur, Branchenstandards und gesellschaftliche Erwartungen optimal balancieren.\n• Implementierung von Ethik-Dashboards und Fairness-Monitoring für kontinuierliche Überwachung und Optimierung.\n• Schulung und Sensibilisierung von Entwicklungsteams für ethische AI-Entwicklung und Bias-Awareness.\n• Integration ethischer Standards in AI-Governance und Compliance-Prozesse für ganzheitliche Verantwortung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Compliance-Strategien entwickelt ADVISORI für internationale Unternehmen und wie navigieren Sie durch verschiedene AI-Regulierungslandschaften?',
        answer: "Die Navigation durch komplexe internationale AI-Regulierungslandschaften erfordert strategische Expertise und proaktive Compliance-Planung. ADVISORI entwickelt harmonisierte Compliance-Strategien, die verschiedene Jurisdiktionen berücksichtigen und gleichzeitig operative Effizienz und Innovation ermöglichen. Unser globaler Ansatz schafft rechtliche Sicherheit und Wettbewerbsvorteile durch vorausschauende Regulierungs-Compliance.\n\n🌍 Globale Compliance-Harmonisierung:\n• Multi-Jurisdiktions-Analyse: Umfassende Bewertung verschiedener AI-Regulierungen, Datenschutzgesetze und branchenspezifischer Anforderungen für globale Compliance-Strategien.\n• Harmonisierte Governance-Frameworks: Entwicklung einheitlicher Standards, die höchste regulatorische Anforderungen erfüllen und gleichzeitig operative Konsistenz gewährleisten.\n• Regional-spezifische Anpassungen: Maßgeschneiderte Compliance-Maßnahmen für spezifische Märkte und Jurisdiktionen ohne Kompromisse bei globalen Standards.\n• Cross-Border Data-Governance: Strategien für sichere und compliant Datenübertragung zwischen verschiedenen Ländern und Regulierungsräumen.\n• Proaktive Regulierungs-Überwachung: Kontinuierliches Monitoring regulatorischer Entwicklungen und frühzeitige Anpassung von Compliance-Strategien.\n\n📋 Strategische Compliance-Implementierung:\n• EU AI Act Readiness: Vorbereitung auf kommende AI-Regulierungen mit Risk-Kategorisierung, Conformity-Assessments und CE-Marking-Strategien.\n• GDPR und internationale Datenschutz-Compliance: Harmonisierung verschiedener Datenschutzanforderungen für globale AI-Systeme.\n• Branchenspezifische Regulierungs-Integration: Berücksichtigung sektoraler Anforderungen wie Financial Services, Healthcare oder Automotive-Regulierungen.\n• Compliance-Automation und Monitoring: Implementierung automatisierter Compliance-Checks und kontinuierlicher Überwachung für operative Effizienz.\n• Audit-Readiness und Documentation: Vorbereitung umfassender Dokumentation und Audit-Trails für regulatorische Prüfungen.\n\n🔍 ADVISORI Global Compliance-Excellence:\n• Entwicklung maßgeschneiderter Global-Compliance-Strategien mit lokaler Expertise und internationaler Koordination.\n• Implementierung von Compliance-Management-Systemen für zentrale Überwachung und dezentrale Umsetzung.\n• Aufbau interner Compliance-Kompetenzen durch Training und Best-Practice-Transfer für nachhaltige Regulierungs-Adherence.\n• Strategische Partnerschaften mit lokalen Rechtsexperten und Regulierungs-Spezialisten für umfassende Compliance-Abdeckung."
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
