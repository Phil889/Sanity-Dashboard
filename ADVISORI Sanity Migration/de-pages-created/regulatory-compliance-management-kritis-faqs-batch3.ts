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
    console.log('Updating KRITIS page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'regulatory-compliance-management-kritis' })
    
    if (!existingDoc) {
      throw new Error('Document "regulatory-compliance-management-kritis" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie können wir als kritische Infrastruktur eine resiliente Lieferkette aufbauen und gleichzeitig KRITIS-Compliance in unseren Vendor-Management-Prozessen sicherstellen?",
        answer: "Resiliente Lieferketten sind für KRITIS-Betreiber von existenzieller Bedeutung, da Schwachstellen bei Zulieferern cascade-artige Ausfälle in kritischen Systemen verursachen können. Ein strategischer Ansatz zum Supply Chain Risk Management muss sowohl die eigene KRITIS-Compliance als auch die Sicherheitsstandards aller Partner systematisch berücksichtigen und dabei gleichzeitig Flexibilität und Wettbewerbsfähigkeit gewährleisten.\n\n🔗 Strategische Dimensionen resilienteren Supply Chain Managements:\n• Risk-based Vendor Segmentation: Kategorisierung von Lieferanten basierend auf ihrem Einfluss auf kritische Geschäftsprozesse und der Implementierung differenzierter Sicherheitsanforderungen entsprechend ihrer Risikorelevanz.\n• Security-by-Design in Procurement: Integration von Cybersecurity-Anforderungen als fundamentale Auswahlkriterien in Beschaffungsprozessen, nicht als nachgelagerte Überlegung.\n• Continuous Vendor Assessment: Implementierung kontinuierlicher Monitoring- und Bewertungsprozesse für Lieferanten-Sicherheit, die über einmalige Audits hinausgehen.\n• Diversifikation und Redundanz: Strategische Entwicklung von Backup-Lieferanten und alternativen Beschaffungsquellen zur Reduzierung von Single Points of Failure.\n\n🛡️ KRITIS-konforme Vendor-Management-Frameworks:\n• Third-Party Risk Management (TPRM): Entwicklung umfassender TPRM-Programme, die regulatorische Anforderungen mit Geschäftskontinuität verbinden.\n• Contractual Security Requirements: Einbindung spezifischer KRITIS-relevanter Sicherheitsklauseln in Lieferantenverträge mit messbaren SLAs und Compliance-Metriken.\n• Incident Response Coordination: Etablierung koordinierter Incident Response-Protokolle, die Lieferanten in die eigenen Cybersecurity-Reaktionspläne integrieren.\n• Supply Chain Transparency: Implementierung von Transparency-Anforderungen, die Einblick in Sub-Supplier und deren Sicherheitspraktiken ermöglichen.\n\n🔍 ADVISORIs ganzheitlicher Supply Chain Security-Ansatz:\n• Ecosystem Risk Mapping: Comprehensive Kartierung der gesamten Lieferkette zur Identifikation kritischer Abhängigkeiten und potenzieller Schwachstellen.\n• Collaborative Security Frameworks: Entwicklung von Kooperationsmodellen, die Lieferanten als Partner in der Sicherheitsstrategie positionieren, anstatt sie nur als Risikofaktoren zu betrachten.\n• Technology-enabled Monitoring: Implementierung automatisierter Tools zur kontinuierlichen Überwachung der Sicherheitsposture von Lieferanten und Supply Chain-Anomalien.\n• Crisis Preparedness: Aufbau von Krisenbewältigungskapazitäten, die schnelle Umstellung auf alternative Lieferanten oder Notfallprozeduren ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche strategischen Vorteile entstehen durch die proaktive Zusammenarbeit mit dem BSI und anderen Regulatoren bei der KRITIS-Umsetzung?",
        answer: "Die proaktive Zusammenarbeit mit dem BSI und anderen Regulatoren transformiert das traditionelle Compliance-Paradigma von einer reaktiven Pflichtenerfüllung zu einer strategischen Partnerschaft, die erhebliche Wettbewerbsvorteile generieren kann. Für C-Level-Führungskräfte bietet dieser Ansatz die Möglichkeit, regulatorische Unsicherheiten zu reduzieren, frühen Zugang zu Entwicklungen zu erhalten und die eigene Position als verantwortungsvoller Akteur zu stärken.\n\n🤝 Strategische Vorteile proaktiver Regulator-Zusammenarbeit:\n• Early Regulatory Intelligence: Frühzeitiger Zugang zu geplanten regulatorischen Entwicklungen und Guidance, der strategische Planungsvorteile und Kosteneinsparungen ermöglicht.\n• Influence on Regulatory Development: Möglichkeit zur aktiven Mitgestaltung von Regulierungsstandards durch konstruktive Teilnahme an Konsultationsprozessen und Working Groups.\n• Reputation als Thought Leader: Positionierung als verantwortungsvoller und kooperativer Akteur, der das Vertrauen von Regulatoren und anderen Stakeholdern stärkt.\n• Reduced Regulatory Uncertainty: Clarification von Interpretationsfragen und Reduktion von Compliance-Risiken durch direkten Dialog mit Regulatoren.\n\n🎯 Operative Vorteile durch BSI-Kooperation:\n• Präferenzielle Behandlung: Mögliche Bevorzugung bei der Bearbeitung von Anfragen, Genehmigungen oder Ausnahmeregelungen aufgrund demonstrierter Kooperationsbereitschaft.\n• Access to Best Practices: Zugang zu aggregierten Erkenntnissen und Best Practices aus dem gesamten KRITIS-Sektor ohne Preisgabe eigener sensibler Informationen.\n• Joint Innovation Programs: Partizipation an gemeinsamen Forschungs- und Entwicklungsprojekten für innovative Sicherheitstechnologien und -methoden.\n• Crisis Support: Erweiterte Unterstützung und Ressourcen im Fall von Cybersecurity-Incidents durch etablierte Kooperationsbeziehungen.\n\n🌟 ADVISORIs Stakeholder-Engagement-Strategie:\n• Regulatory Relationship Management: Entwicklung strukturierter Programme zum Aufbau und zur Pflege von Beziehungen zu relevanten Regulatoren auf verschiedenen Ebenen.\n• Thought Leadership Positioning: Strategische Positionierung als Experte und Meinungsführer in regulatorischen Diskussionen durch qualitative Beiträge und Expertise-Sharing.\n• Industry Collaboration: Koordination mit anderen KRITIS-Betreibern zur gemeinsamen Interessenvertretung und kollektiven Einflussnahme auf regulatorische Entwicklungen.\n• Communication Excellence: Entwicklung professioneller Kommunikationsstrategien, die komplexe technische und geschäftliche Realitäten für Regulatoren verständlich und nachvollziehbar machen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie können wir Cyber-Incident Response für kritische Infrastrukturen so gestalten, dass sowohl KRITIS-Meldepflichten erfüllt als auch Geschäftskontinuität gewährleistet wird?",
        answer: "Effective Cyber-Incident Response für KRITIS-Betreiber erfordert eine komplexe Balance zwischen schneller operationaler Wiederherstellung, akkurater Regulatoren-Kommunikation und Schutz der Unternehmensreputation. Die Herausforderung liegt darin, diese teilweise konkurrierenden Prioritäten in einem integrierten Response-Framework zu harmonisieren, das unter extremem Zeitdruck funktioniert.\n\n⚡ Integrierte Incident Response-Architektur für KRITIS:\n• Parallel Response Streams: Entwicklung paralleler Response-Prozesse, die operative Wiederherstellung und regulatorische Meldungen gleichzeitig und koordiniert abarbeiten.\n• Crisis Communication Protocols: Etablierung vordefinierter Kommunikationsprotokolle für verschiedene Stakeholder-Gruppen (BSI, Kunden, Partner, Medien) mit angemessenen Messaging-Strategien.\n• Business Continuity Integration: Seamless Integration von Cyber-Incident Response in breitere Business Continuity-Pläne zur Sicherstellung ganzheitlicher Krisenreaktion.\n• Legal und Compliance Coordination: Enge Koordination zwischen Cybersecurity-, Legal- und Compliance-Teams zur Sicherstellung korrekter und vollständiger Meldungen.\n\n🎯 KRITIS-spezifische Response-Komponenten:\n• Automated Reporting Systems: Implementierung automatisierter Systeme zur Generierung initiale Incident-Reports, die menschliche Fehler minimieren und Response-Zeiten verkürzen.\n• Stakeholder Notification Matrix: Entwicklung präziser Notification-Matrizen, die basierend auf Incident-Schweregrad und -Typ automatische Benachrichtigungen an relevante Parteien auslösen.\n• Evidence Preservation: Implementierung forensik-kompatibler Incident Response-Prozesse, die rechtliche und regulatorische Anforderungen an Beweissicherung erfüllen.\n• Media und Public Relations: Proaktive Kommunikationsstrategien zur Kontrolle des public Narrative und zum Schutz der Unternehmensreputation.\n\n🚀 ADVISORIs Response Excellence-Framework:\n• Scenario-based Preparedness: Entwicklung und regelmäßige Übung spezifischer Response-Szenarien, die typische KRITIS-Bedrohungen und deren regulatorische Implikationen abbilden.\n• Technology-enhanced Response: Integration fortschrittlicher Technologien (AI/ML, Automation, Orchestration) zur Beschleunigung und Verbesserung der Response-Qualität.\n• Cross-sector Collaboration: Etablierung von Kommunikationskanälen und Kooperationsprotokollen mit anderen KRITIS-Betreibern für koordinierte Response bei sector-übergreifenden Incidents.\n• Continuous Improvement: Implementierung systematischer Post-Incident Reviews und Lessons-Learned-Prozesse zur kontinuierlichen Verbesserung der Response-Capabilities."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Welche Rolle spielt die Mitarbeiterschulung und -sensibilisierung bei der nachhaltigen KRITIS-Compliance und wie können wir eine Kultur der Cybersecurity schaffen?",
        answer: "Mitarbeiterschulung und -sensibilisierung sind fundamental für nachhaltige KRITIS-Compliance, da auch die fortschrittlichsten technischen Sicherheitsmaßnahmen durch menschliche Schwachstellen kompromittiert werden können. Für kritische Infrastrukturen ist der Aufbau einer robusten Security-Kultur nicht nur eine Compliance-Anforderung, sondern eine strategische Notwendigkeit für die Aufrechterhaltung der gesellschaftlichen Versorgungssicherheit.\n\n🎓 Strategische Dimensionen der KRITIS-Sicherheitskultur:\n• Role-based Security Training: Entwicklung differenzierter Schulungsprogramme, die spezifische Sicherheitsverantwortlichkeiten verschiedener Rollen (Operations, IT, Management, Support) adressieren.\n• Continuous Learning Culture: Etablierung einer Lernkultur, die Cybersecurity nicht als einmalige Schulung, sondern als kontinuierlichen Kompetenzaufbau versteht.\n• Risk Awareness Integration: Integration von Cyber-Risikobewusstsein in alle Geschäftsprozesse und Entscheidungen, nicht nur in IT-spezifische Aktivitäten.\n• Incentive Alignment: Entwicklung von Anreizsystemen, die sicherheitsbewusstes Verhalten belohnen und in Performance-Bewertungen integrieren.\n\n🛡️ KRITIS-spezifische Schulungskomponenten:\n• Critical Asset Awareness: Schulung aller Mitarbeiter bezüglich der kritischen Bedeutung ihrer Systeme für die gesellschaftliche Infrastruktur und die daraus resultierenden Verantwortlichkeiten.\n• Threat Landscape Education: Regelmäßige Updates über aktuelle Bedrohungen, die speziell kritische Infrastrukturen betreffen, einschließlich staatlicher und terroristischer Akteure.\n• Incident Response Training: Praktische Schulungen zur Erkennung, Meldung und Erstreaktion auf Cybersecurity-Incidents mit KRITIS-spezifischen Protokollen.\n• Compliance Integration: Integration von KRITIS-Compliance-Anforderungen in tägliche Arbeitsabläufe und Entscheidungsprozesse.\n\n🌟 ADVISORIs Kultur-Transformations-Ansatz:\n• Executive Leadership Program: Spezielle Programme für C-Level und Senior Management zur Stärkung der Sicherheitsführung und Vorbildfunktion.\n• Gamification und Innovation: Einsatz innovativer Schulungsmethoden wie Gamification, Simulation und VR-Training zur Steigerung von Engagement und Retention.\n• Peer-to-Peer Learning: Etablierung von Peer-Learning-Netzwerken und Security Champions-Programmen zur organischen Verbreitung von Sicherheitsbewusstsein.\n• Behavioral Analytics: Implementierung von Verhaltensanalytik zur Messung und kontinuierlichen Verbesserung der Effektivität von Sicherheitsschulungen und -kulturen."
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
