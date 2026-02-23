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
    console.log('Updating KRITIS Schulungen & Awareness-Kampagnen page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'kritis-schulungen-awareness-kampagnen' })
    
    if (!existingDoc) {
      throw new Error('Document "kritis-schulungen-awareness-kampagnen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie kann ADVISORI maßgeschneiderte KRITIS-Schulungsprogramme entwickeln, die branchenspezifische Bedrohungslandschaften und operative Besonderheiten berücksichtigen?",
        answer: "Effektive KRITIS-Schulungen müssen die spezifischen Bedrohungslandschaften, operativen Besonderheiten und regulatorischen Anforderungen verschiedener Infrastruktursektoren berücksichtigen. ADVISORI entwickelt hochgradig spezialisierte Schulungsprogramme, die nicht nur allgemeine Sicherheitsprinzipien vermitteln, sondern gezielt auf die einzigartigen Herausforderungen und Risikoprofile verschiedener KRITIS-Sektoren eingehen.\n\n🏭 Sektorspezifische Schulungsansätze:\n• Energiesektor: Fokus auf ICS/SCADA-Sicherheit, Grid-Resilience und Cyber-Physical Security mit spezialisierten Simulationen von Blackout-Szenarien und kritischen Infrastrukturausfällen.\n• Finanzsektor: Integration von DORA-Compliance, Payment-System-Security und Fraud-Prevention mit praxisnahen Übungen zu APT-Angriffen und Insider-Threats.\n• Telekommunikation: Schwerpunkt auf Network Security, 5G-spezifische Vulnerabilitäten und Supply Chain Security mit Szenarien zu großflächigen Kommunikationsausfällen.\n• Gesundheitswesen: Spezialisierung auf Medical Device Security, Patient Data Protection und Healthcare-spezifische Ransomware-Bedrohungen.\n\n🎯 ADVISORIs differenzierter Entwicklungsansatz:\n• Threat Intelligence Integration: Kontinuierliche Einbindung aktueller, sektorspezifischer Threat Intelligence und Attack Patterns in die Schulungsinhalte.\n• Operative Realitätsnähe: Entwicklung von Übungsszenarien basierend auf realen Incident-Cases und branchenspezifischen Vulnerabilitäten.\n• Regulatorische Compliance-Integration: Verknüpfung von Sicherheitsschulungen mit sektorspezifischen Compliance-Anforderungen und Audit-Vorbereitung.\n• Technologie-spezifische Module: Maßgeschneiderte Schulungsmodule für branchenspezifische Technologien, Protokolle und Systeme.\n\n🔧 Customization und Lokalisierung:\n• Cultural Fit und Organisationskultur: Anpassung der Schulungsansätze an die spezifische Unternehmenskultur und bestehende Arbeitsweisen.\n• Role-based Learning Paths: Entwicklung differenzierter Lernpfade für verschiedene Rollen innerhalb der Organisation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche innovativen Schulungsmethoden und Technologien setzt ADVISORI ein, um nachhaltige Verhaltensänderungen bei KRITIS-Mitarbeitern zu bewirken?",
        answer: "Nachhaltige Verhaltensänderungen in kritischen Infrastrukturen erfordern innovative Schulungsmethoden, die über traditionelle Präsentationen und E-Learning-Module hinausgehen. ADVISORI setzt modernste Lernpsychologie, immersive Technologien und gamifizierte Ansätze ein, um tiefgreifende, dauerhafte Lerneffekte zu erzielen und echte Sicherheitskultur zu schaffen.\n\n🚀 Innovative Schulungstechnologien und -methoden:\n• Virtual Reality (VR) Incident Simulation: Immersive VR-Umgebungen ermöglichen realistische Simulation kritischer Sicherheitsvorfälle ohne reale Risiken – Mitarbeiter können Cyber-Angriffe, Systemausfälle und Notfallsituationen in einer sicheren Umgebung erleben und optimal reagieren lernen.\n• Gamification und Competitive Learning: Spielbasierte Lernansätze mit Leaderboards, Achievements und Team-Challenges schaffen intrinsische Motivation und fördern kontinuierliches Engagement mit Sicherheitsthemen.\n• Microlearning und Just-in-Time Training: Kurze, kontextuelle Lernmodule werden direkt in den Arbeitsfluss integriert und bieten relevante Sicherheitsinformationen genau dann, wenn sie benötigt werden.\n• Social Learning Platforms: Peer-to-Peer Learning und Knowledge Sharing durch interne Communities und Expert Networks fördern organisationsweiten Wissenstransfer.\n\n🧠 Lernpsychologisch fundierte Ansätze:\n• Behavioral Nudging: Subtile Verhaltensanstöße und Erinnerungen werden in tägliche Arbeitsabläufe integriert, um sicherheitsbewusstes Verhalten zur Gewohnheit zu machen.\n• Spaced Repetition und Adaptive Learning: Algorithmisch optimierte Wiederholung und personalisierte Lernpfade maximieren Retentionsraten und Transfereffekte.\n• Scenario-based Learning: Realistische, kontextuelle Lernszenarien basierend auf tatsächlichen Bedrohungen und Incident-Cases aus der Branche.\n• Peer Feedback und Mentoring: Strukturierte Peer-Review-Prozesse und interne Security Champion-Programme schaffen nachhaltige Lerngemeinschaften."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie kann ADVISORI die Effektivität von KRITIS-Schulungsprogrammen messen und kontinuierlich optimieren, um nachhaltigen ROI zu gewährleisten?",
        answer: "Die Messung und kontinuierliche Optimierung von KRITIS-Schulungsprogrammen ist essentiell für nachhaltigen ROI und echte Verhaltensänderungen. ADVISORI implementiert umfassende Metriken-Frameworks, die nicht nur Lernfortschritte dokumentieren, sondern auch reale Sicherheitsverbesserungen und Geschäftswertsteigerungen nachweisen.\n\n📊 Mehrdimensionale Erfolgsmessung:\n• Knowledge Retention Analytics: Kontinuierliche Messung von Wissensstand und Kompetenzentwicklung durch adaptive Assessments, Praxis-Simulationen und Real-World-Testing.\n• Behavioral Change Metrics: Quantifizierung tatsächlicher Verhaltensänderungen durch Beobachtung von Sicherheitspraktiken, Incident-Reporting-Raten und proaktiven Sicherheitsmaßnahmen.\n• Business Impact Measurement: Direkte Verknüpfung von Schulungseffektivität mit messbaren Geschäftsergebnissen wie reduzierten Incident-Kosten, verbesserten Audit-Ergebnissen und erhöhter Operational Resilience.\n• Security Culture Assessment: Regelmäßige Bewertung der organisatorischen Sicherheitskultur durch Surveys, Focus Groups und kulturelle Indikatoren.\n\n🔄 Kontinuierliche Optimierungsstrategien:\n• Data-driven Program Enhancement: Nutzung von Learning Analytics und Performance Data zur kontinuierlichen Verbesserung von Schulungsinhalten und -methoden.\n• A/B Testing und Experimentelles Design: Systematisches Testen verschiedener Schulungsansätze zur Identifikation der effektivsten Methoden für spezifische Zielgruppen.\n• Feedback Loops und Iterative Entwicklung: Regelmäßige Einbindung von Teilnehmer-Feedback und Stakeholder-Input in die Programmentwicklung.\n• Predictive Analytics für Risikominimierung: Einsatz von Machine Learning zur Vorhersage von Sicherheitsrisiken und proaktiven Anpassung der Schulungsprogramme.\n\n📈 ROI-Optimierung und Wertnachweis:\n• Cost-Benefit Analysis: Detaillierte Analyse der Schulungskosten versus vermiedene Incident-Kosten und Produktivitätssteigerungen.\n• Long-term Impact Tracking: Langfristige Verfolgung von Schulungseffekten über mehrere Jahre zur Bewertung nachhaltiger Verhaltensänderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie können KRITIS-Schulungen und Awareness-Kampagnen zur Stärkung der Cyber-Resilienz und Business Continuity beitragen?",
        answer: "KRITIS-Schulungen und Awareness-Kampagnen sind fundamentale Bausteine für organisatorische Cyber-Resilienz und Business Continuity. Während technische Sicherheitsmaßnahmen wichtig sind, bildet das menschliche Element oft die letzte und entscheidende Verteidigungslinie. ADVISORI entwickelt Schulungsprogramme, die nicht nur Awareness schaffen, sondern aktiv zur Resilienz-Steigerung und Kontinuitätssicherung beitragen.\n\n🛡️ Resilienz-Building durch strategische Schulungskomponenten:\n• Incident Response Preparedness: Intensive Schulung aller Mitarbeiterebenen in Incident-Erkennung, -Meldung und -Response, um Reaktionszeiten zu minimieren und Schäden zu begrenzen.\n• Crisis Leadership Development: Spezialisierte Programme für Führungskräfte zur effektiven Krisenführung, Stakeholder-Kommunikation und Business Continuity Management.\n• Cross-functional Collaboration Training: Stärkung der abteilungsübergreifenden Zusammenarbeit während Sicherheitsvorfällen durch gemeinsame Übungen und Simulationen.\n• Recovery und Post-Incident Learning: Schulung in Post-Incident-Analyse, Lessons Learned und kontinuierlicher Verbesserung der Resilienz-Kapazitäten.\n\n⚡ Business Continuity Enhancement:\n• Operational Continuity Awareness: Training der Mitarbeiter in kritischen Geschäftsprozessen und Alternativverfahren bei Systemausfällen oder Sicherheitsvorfällen.\n• Supply Chain Security Education: Sensibilisierung für Supply Chain-Risiken und Schulung in sicheren Vendor-Management-Praktiken.\n• Regulatory Continuity Compliance: Integration von regulatorischen Continuity-Anforderungen in die täglichen Arbeitspraktiken durch gezielte Awareness-Maßnahmen.\n• Stakeholder Communication Skills: Entwicklung von Kommunikationskompetenzen für effektive Stakeholder-Information während Kontinuitätsereignissen.\n\n🔄 Adaptive Resilienz und Continuous Improvement:\n• Learning Organization Development: Aufbau einer lernenden Organisation, die aus Sicherheitsvorfällen und Near-Misses systematisch lernt und sich kontinuierlich verbessert.\n• Threat Landscape Adaptation: Regelmäßige Updates und Anpassungen der Schulungsinhalte an sich entwickelnde Bedrohungslandschaften und neue Attack Vectors."
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
