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
    console.log('Updating NIST Integration page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nist-integration' })
    
    if (!existingDoc) {
      throw new Error('Document "nist-integration" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie können wir die ROI-Maximierung unserer NIST-Integration sicherstellen und welche messbaren Geschäftsvorteile lassen sich realisieren?",
        answer: "Die ROI-Maximierung einer NIST-Integration erfordert eine strategische Herangehensweise, die über traditionelle Compliance-Metriken hinausgeht und echten Geschäftswert generiert. Erfolgreiche Organisationen nutzen NIST als Plattform für umfassende Business-Transformation und schaffen messbare Vorteile, die weit über Cybersecurity hinausreichen.\n\n💰 Quantifizierbare Geschäftsvorteile:\n• Reduzierte Cybersecurity-Vorfälle: Studien zeigen eine 40-60% Reduktion von Sicherheitsvorfällen nach erfolgreicher NIST-Implementation, was direkt zu niedrigeren Incident-Response-Kosten führt.\n• Optimierte Versicherungsprämien: Nachweisbare NIST-Compliance kann Cyber-Versicherungsprämien um 15-25% senken und bessere Deckungskonditionen ermöglichen.\n• Beschleunigte Compliance-Audits: Integrierte NIST-Strukturen reduzieren Audit-Vorbereitungszeit um durchschnittlich 50% und minimieren externe Beratungskosten.\n• Verbesserte Kundenakquisition: NIST-Zertifizierung kann als Differentiator in B2B-Verkaufsprozessen fungieren und Vertragsabschlüsse beschleunigen.\n\n📊 Strategische Wertschöpfungs-Dimensionen:\n• Operative Effizienz: Automatisierung von NIST-Kontrollen führt zu durchschnittlich 30% Reduktion manueller Security-Aufgaben.\n• Risikominimierung: Proaktive Risikomanagement-Capabilities reduzieren potentielle Schadenssummen und Geschäftsunterbrechungen.\n• Innovation-Enablement: Robust Security Foundation ermöglicht sichere Adoption neuer Technologien und Geschäftsmodelle.\n• Talent Attraction: Moderne Cybersecurity-Practices verbessern Employer Branding und erleichtern Rekrutierung von Top-Talenten.\n\n🎯 ADVISORIs ROI-Optimierungs-Framework:\n• Value-Based Implementation: Priorisierung von NIST-Kontrollen basierend auf direktem Business-Impact und ROI-Potential.\n• Quick-Win Identification: Identifikation und schnelle Umsetzung von High-Impact, Low-Effort-Verbesserungen für frühe Erfolge.\n• Continuous Value Measurement: Etablierung von KPIs und Monitoring-Systemen zur kontinuierlichen ROI-Überwachung und -Optimierung.\n• Strategic Roadmapping: Entwicklung einer mehrjährigen Roadmap, die NIST-Evolution mit Business-Zielen synchronisiert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche spezifischen Technologie-Integrationen sind für eine moderne NIST-Implementation erforderlich und wie unterstützt ADVISORI bei der Tool-Auswahl?",
        answer: "Eine moderne NIST-Implementation erfordert eine durchdachte Technologie-Architektur, die sowohl aktuelle als auch zukünftige Anforderungen erfüllt. Die richtige Tool-Auswahl und -Integration ist entscheidend für den Erfolg der Implementation und bestimmt maßgeblich die Effizienz, Skalierbarkeit und Nachhaltigkeit Ihrer Cybersecurity-Operations.\n\n🔧 Kern-Technologie-Kategorien für NIST-Integration:\n• Security Information and Event Management (SIEM): Zentrale Plattform für Detect- und Respond-Funktionen mit Advanced Analytics und Machine Learning Capabilities.\n• Governance, Risk & Compliance (GRC): Integrierte Plattformen für Framework-Management, Risikobewertung und Compliance-Überwachung.\n• Identity and Access Management (IAM): Umfassende Lösungen für Identitätsschutz, Privileged Access Management und Zero Trust-Architekturen.\n• Vulnerability Management: Kontinuierliche Schwachstellen-Scanning und -Management-Plattformen mit Automatisierungs-Capabilities.\n• Backup and Recovery: Moderne, Cloud-integrierte Lösungen für Business Continuity und Disaster Recovery.\n\n⚡ Emerging Technology-Integration:\n• AI/ML-powered Security Analytics: Implementierung von KI-gestützten Threat Detection und Behavioral Analytics-Systemen.\n• Cloud Security Posture Management (CSPM): Spezialisierte Tools für Multi-Cloud-Security-Governance und Compliance-Überwachung.\n• DevSecOps-Integration: Security-as-Code-Praktiken und CI/CD-Pipeline-Integration für Security-by-Design.\n• Extended Detection and Response (XDR): Plattformen für integrierte Threat Detection über alle Infrastruktureebenen hinweg.\n\n🎯 ADVISORIs Technology-Selection-Methodik:\n• Requirements Engineering: Detaillierte Analyse Ihrer spezifischen NIST-Anforderungen und technischen Constraints.\n• Vendor-Neutral Assessment: Objektive Evaluierung von Technologie-Optionen basierend auf funktionalen und nicht-funktionalen Anforderungen.\n• Integration Architecture: Entwicklung einer kohärenten Technologie-Architektur, die Silos verhindert und Synergien maximiert.\n• Future-Proofing Strategy: Berücksichtigung von Technologie-Trends und Skalierungsanforderungen für langfristige Investitionssicherheit.\n• Proof-of-Concept Support: Durchführung von PoCs und Pilotprojekten zur Validierung von Tool-Performance in Ihrer Umgebung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie können wir NIST-Integration nutzen, um unsere Supply Chain Security zu stärken und Third-Party-Risiken zu minimieren?",
        answer: "NIST-Integration bietet eine hervorragende Gelegenheit, Supply Chain Security systematisch zu stärken und Third-Party-Risiken proaktiv zu managen. In einer zunehmend vernetzten Geschäftswelt ist die Sicherheit Ihrer Lieferkette oft genauso kritisch wie die Sicherheit Ihrer eigenen Systeme. Das NIST Framework bietet strukturierte Ansätze für umfassendes Supply Chain Risk Management.\n\n🔗 Supply Chain Security durch NIST:\n• Identify-Function für Lieferanten: Systematische Inventarisierung und Klassifizierung aller Third-Party-Beziehungen basierend auf Kritikalität und Risikopotential.\n• Protect-Controls für Vendor Management: Implementation standardisierter Security-Anforderungen und Kontrollmechanismen für alle Lieferantenbeziehungen.\n• Detect-Capabilities für Third-Party-Monitoring: Kontinuierliche Überwachung von Lieferanten-Security-Posture und frühzeitige Erkennung von Risikoveränderungen.\n• Respond & Recover für Supply Chain Incidents: Vorbereitete Incident-Response-Pläne für lieferantenbezogene Sicherheitsvorfälle.\n\n🛡️ Strategische Third-Party Risk Management-Komponenten:\n• Risk-Based Vendor Segmentation: Kategorisierung von Lieferanten basierend auf Datenzugriff, Kritikalität und inhärenten Risiken.\n• Contractual Security Requirements: Integration spezifischer NIST-basierter Security-Klauseln in Lieferantenverträge.\n• Continuous Vendor Assessment: Regelmäßige Security-Bewertungen und Performance-Monitoring basierend auf NIST-Kriterien.\n• Supply Chain Resilience Planning: Entwicklung von Contingency-Plänen für kritische Lieferantenausfälle oder Security-Kompromittierungen.\n\n🔍 ADVISORIs Supply Chain Security-Ansatz:\n• Vendor Risk Assessment Framework: Entwicklung eines standardisierten, NIST-basierten Bewertungsframeworks für alle Third-Party-Beziehungen.\n• Automated Monitoring Implementation: Integration von Technologien für kontinuierliche Lieferanten-Security-Überwachung und Risiko-Alerting.\n• Supply Chain Mapping: Visualisierung und Analyse komplexer Lieferantennetzwerke zur Identifikation von Risiko-Konzentrationspunkten.\n• Incident Response Coordination: Entwicklung von Prozessen für koordinierte Incident Response zwischen Ihrer Organisation und kritischen Lieferanten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche Rolle spielt Change Management bei der NIST-Integration und wie können wir Mitarbeiter-Widerstand minimieren?",
        answer: "Change Management ist oft der kritischste Erfolgsfaktor bei NIST-Integrationen, da technische Lösungen nur so effektiv sind wie die Menschen, die sie implementieren und nutzen. Widerstand gegen Veränderungen ist natürlich und vorhersagbar, aber mit der richtigen Strategie kann er in positive Energie für die Transformation umgewandelt werden.\n\n🎭 Typische Widerstandsquellen bei NIST-Integration:\n• Perceived Complexity: Mitarbeiter befürchten, dass NIST-Anforderungen ihre Arbeit komplizierter und zeitaufwändiger machen.\n• Role Uncertainty: Unklarheit über veränderte Verantwortlichkeiten und Karrierewege nach der Implementation.\n• Technology Anxiety: Sorgen über neue Tools und Prozesse, besonders bei weniger technikaffinen Mitarbeitern.\n• Resource Concerns: Befürchtungen über zusätzliche Arbeitsbelastung während der Übergangsphase.\n• Cultural Resistance: Widerstand gegen Veränderungen in etablierten Arbeitsweisen und Unternehmenskulturen.\n\n🌟 Strategische Change Management-Prinzipien:\n• Early Engagement: Frühe Einbindung von Key Stakeholdern in Planungs- und Entscheidungsprozesse schafft Ownership und reduziert Widerstand.\n• Clear Communication: Transparente, konsistente Kommunikation über Ziele, Vorteile und Timelines der NIST-Integration.\n• Skills Development: Umfassende Schulungs- und Entwicklungsprogramme, die Mitarbeiter für neue Rollen und Verantwortlichkeiten qualifizieren.\n• Quick Wins Strategy: Frühe, sichtbare Erfolge demonstrieren den Wert der Integration und bauen Vertrauen auf.\n• Feedback Loops: Regelmäßige Möglichkeiten für Mitarbeiter-Feedback und Anpassungen basierend auf praktischen Erfahrungen.\n\n🚀 ADVISORIs Change Excellence-Methodik:\n• Stakeholder Impact Analysis: Detaillierte Analyse, wie NIST-Integration verschiedene Rollen und Teams beeinflusst, um zielgerichtete Change-Strategien zu entwickeln.\n• Champions Network: Aufbau eines Netzwerks von Change Champions in verschiedenen Organisationsebenen für Peer-to-Peer-Unterstützung.\n• Gamification Elements: Integration spielerischer Elemente und Anreizsysteme zur Motivation und Engagement-Steigerung.\n• Continuous Support: Etablierung von Support-Systemen und Helpdesk-Funktionen für die Übergangsphase und darüber hinaus.\n• Culture Integration: Einbettung von NIST-Prinzipien in Unternehmenswerte und Performance-Management-Systeme für nachhaltige Adoption."
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
