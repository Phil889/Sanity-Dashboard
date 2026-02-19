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
    console.log('Updating DORA Third-Party Risk Management page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-third-party-risk' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-third-party-risk" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche spezifischen Due Diligence-Anforderungen stellt DORA an die Bewertung von ICT-Drittanbietern und wie können diese effizient umgesetzt werden?',
        answer: "DORA Due Diligence für ICT-Drittanbieter geht weit über traditionelle Vendor-Assessments hinaus und erfordert eine systematische, risikobasierte Bewertung der operationellen Resilienz und Cyber-Sicherheitsfähigkeiten potenzieller und bestehender ICT-Dienstleister. Die DORA-Anforderungen umfassen sowohl technische als auch organisatorische Aspekte und müssen kontinuierlich aktualisiert werden, um evolvierende Risikoprofile zu berücksichtigen.\n\n🔍 Umfassende DORA Due Diligence-Komponenten:\n• Cyber-Security Assessment: Detaillierte Bewertung der Informationssicherheits-Frameworks, Incident Response-Fähigkeiten und Cyber-Resilienz-Maßnahmen des ICT-Dienstleisters, einschließlich Penetration Testing-Ergebnisse und Vulnerability Management-Prozesse.\n• Operational Resilience Evaluation: Systematische Analyse der Business Continuity-Pläne, Disaster Recovery-Fähigkeiten und Service Level-Garantien des Dienstleisters, um sicherzustellen, dass kritische ICT-Services auch unter Stress-Bedingungen verfügbar bleiben.\n• Regulatory Compliance Verification: Überprüfung der Compliance des ICT-Dienstleisters mit relevanten regulatorischen Anforderungen, einschließlich Datenschutz, Cyber-Sicherheitsstandards und branchenspezifischen Vorschriften.\n• Financial Stability Analysis: Bewertung der finanziellen Stabilität und langfristigen Geschäftsfähigkeit des ICT-Dienstleisters, um das Risiko von Service-Unterbrechungen durch finanzielle Schwierigkeiten zu minimieren.\n\n⚡ Effiziente Umsetzungsstrategien:\n• Standardisierte Assessment-Frameworks: Entwicklung wiederverwendbarer Due Diligence-Templates und Bewertungskriterien, die DORA-Anforderungen systematisch abdecken und gleichzeitig Effizienz in der Durchführung gewährleisten.\n• Automatisierte Datensammlung: Nutzung digitaler Plattformen und APIs zur automatisierten Sammlung von Compliance-Daten, Sicherheitszertifikaten und Performance-Metriken von ICT-Dienstleistern.\n• Risk-based Prioritization: Implementierung risikobasierter Priorisierung, die intensive Due Diligence-Prozesse auf kritische ICT-Dienstleister fokussiert und streamlined Assessments für weniger kritische Vendor-Beziehungen ermöglicht.\n• Collaborative Assessment-Modelle: Entwicklung gemeinsamer Due Diligence-Initiativen mit anderen Finanzunternehmen zur Reduzierung von Redundanzen und Steigerung der Assessment-Qualität.\n\n🛡️ Kontinuierliche Due Diligence-Optimierung:\n• Dynamic Risk Monitoring: Implementierung kontinuierlicher Überwachungssysteme, die Veränderungen im Risikoprofil von ICT-Dienstleistern in Echtzeit erfassen und automatische Re-Assessments auslösen.\n• Third-Party Intelligence Integration: Nutzung externer Threat Intelligence und Vendor Risk-Datenbanken zur Ergänzung interner Due Diligence-Erkenntnisse und Identifikation emerging Risks.\n• Performance-based Validation: Regelmäßige Validierung der Due Diligence-Ergebnisse durch Performance-Monitoring und Incident-Tracking zur kontinuierlichen Verbesserung der Assessment-Genauigkeit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Wie können Finanzunternehmen effektive Vendor Selection-Kriterien entwickeln, die sowohl DORA-Compliance als auch geschäftliche Anforderungen berücksichtigen?',
        answer: "Die Entwicklung effektiver Vendor Selection-Kriterien für DORA-konforme ICT-Drittanbieter erfordert eine ausgewogene Integration regulatorischer Anforderungen mit strategischen Geschäftszielen und operationellen Bedürfnissen. Erfolgreiche Vendor Selection-Frameworks schaffen Transparenz in Entscheidungsprozessen und ermöglichen objektive Bewertungen potenzieller ICT-Dienstleister basierend auf messbaren Kriterien und Risikofaktoren.\n\n🎯 Strategische Vendor Selection-Dimensionen:\n• Business Alignment Assessment: Bewertung der strategischen Passung zwischen den Geschäftszielen des Finanzunternehmens und den Service-Capabilities des ICT-Dienstleisters, einschließlich Innovation-Roadmaps und langfristiger Partnerschaftspotenziale.\n• Technical Capability Evaluation: Systematische Analyse der technischen Fähigkeiten, Infrastruktur-Skalierbarkeit und Technologie-Roadmaps des ICT-Dienstleisters zur Sicherstellung langfristiger Service-Qualität und -Verfügbarkeit.\n• Risk-Adjusted Value Proposition: Entwicklung von Total Cost of Ownership-Modellen, die nicht nur direkte Service-Kosten, sondern auch Risiko-Mitigation-Kosten und potenzielle Compliance-Aufwände berücksichtigen.\n• Cultural and Operational Fit: Bewertung der kulturellen Kompatibilität und operationellen Arbeitsweisen des ICT-Dienstleisters zur Sicherstellung reibungsloser Zusammenarbeit und effektiver Kommunikation.\n\n📊 DORA-spezifische Selection-Kriterien:\n• Regulatory Compliance Maturity: Bewertung der Compliance-Reife des ICT-Dienstleisters in Bezug auf DORA und andere relevante regulatorische Anforderungen, einschließlich bestehender Zertifizierungen und Audit-Ergebnisse.\n• Operational Resilience Capabilities: Systematische Evaluation der Business Continuity-Fähigkeiten, Disaster Recovery-Prozesse und Incident Response-Capabilities des Dienstleisters.\n• Data Protection and Privacy Standards: Detaillierte Bewertung der Datenschutz-Frameworks, Verschlüsselungsstandards und Privacy-by-Design-Implementierungen des ICT-Dienstleisters.\n• Transparency and Reporting Capabilities: Bewertung der Fähigkeit des Dienstleisters, transparente Reporting-Strukturen und regelmäßige Compliance-Updates bereitzustellen.\n\n🔧 Implementierung strukturierter Selection-Prozesse:\n• Multi-Criteria Decision Analysis: Nutzung quantitativer Bewertungsmodelle, die verschiedene Selection-Kriterien gewichten und objektive Vendor-Vergleiche ermöglichen.\n• Stakeholder-Integration: Einbindung relevanter Stakeholder aus IT, Risk Management, Compliance und Geschäftsbereichen in den Selection-Prozess zur Sicherstellung ganzheitlicher Bewertungen.\n• Proof-of-Concept-Validierung: Implementierung strukturierter Pilot-Programme zur praktischen Validierung der Service-Qualität und Compliance-Fähigkeiten potenzieller ICT-Dienstleister.\n• Reference Check und Peer Review: Systematische Überprüfung von Referenzen und Erfahrungen anderer Finanzunternehmen mit potenziellen ICT-Dienstleistern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Welche Best Practices gibt es für die kontinuierliche Überwachung und Performance-Bewertung von kritischen ICT-Drittanbietern nach DORA-Standards?',
        answer: "Die kontinuierliche Überwachung und Performance-Bewertung kritischer ICT-Drittanbieter ist ein zentraler Baustein des DORA-konformen Third-Party Risk Managements und erfordert eine Kombination aus automatisierten Monitoring-Systemen, strukturierten Performance-Reviews und proaktiven Risk Assessment-Prozessen. Effektive Monitoring-Frameworks schaffen Transparenz über die tatsächliche Service-Performance und ermöglichen frühzeitige Identifikation potenzieller Risiken oder Performance-Degradationen.\n\n📊 Umfassende Performance-Monitoring-Dimensionen:\n• Service Level Performance Tracking: Kontinuierliche Überwachung von Service Level Agreements (SLAs), Verfügbarkeitsmetriken und Response-Zeiten zur Sicherstellung konsistenter Service-Qualität und frühzeitiger Identifikation von Performance-Trends.\n• Security Posture Monitoring: Regelmäßige Bewertung der Cyber-Security-Posture des ICT-Dienstleisters, einschließlich Vulnerability Assessments, Incident-Tracking und Compliance-Status-Updates.\n• Operational Resilience Validation: Periodische Überprüfung der Business Continuity-Fähigkeiten durch Disaster Recovery-Tests, Stress-Testing und Scenario-basierte Resilience-Assessments.\n• Financial Health Monitoring: Kontinuierliche Überwachung der finanziellen Stabilität und Geschäftsentwicklung des ICT-Dienstleisters zur frühzeitigen Identifikation potenzieller Risiken für die Service-Kontinuität.\n\n⚡ Automatisierte Monitoring-Technologien:\n• Real-time Dashboard Integration: Implementierung integrierter Monitoring-Dashboards, die Key Performance Indicators (KPIs) und Risk Indicators in Echtzeit visualisieren und automatische Alerting-Mechanismen bereitstellen.\n• API-basierte Datenintegration: Nutzung von APIs und automatisierten Datenfeeds zur kontinuierlichen Sammlung von Performance-Daten, Compliance-Status und Incident-Informationen von ICT-Dienstleistern.\n• Predictive Analytics Integration: Einsatz von Machine Learning-Algorithmen zur Analyse historischer Performance-Daten und Vorhersage potenzieller Service-Probleme oder Risiko-Entwicklungen.\n• Automated Compliance Monitoring: Implementierung automatisierter Compliance-Checks, die regulatorische Anforderungen kontinuierlich überwachen und Abweichungen sofort melden.\n\n🛡️ Strukturierte Review- und Assessment-Prozesse:\n• Quarterly Business Reviews: Regelmäßige strukturierte Reviews mit ICT-Dienstleistern zur Bewertung der Service-Performance, Diskussion von Verbesserungsmaßnahmen und Alignment strategischer Ziele.\n• Annual Risk Reassessment: Umfassende jährliche Neubewertung des Risikoprofils und der Kritikalität von ICT-Dienstleistern basierend auf Geschäftsentwicklungen und regulatorischen Änderungen.\n• Incident Response Evaluation: Systematische Bewertung der Incident Response-Performance des ICT-Dienstleisters nach Sicherheitsvorfällen oder Service-Unterbrechungen.\n• Continuous Improvement Integration: Etablierung strukturierter Feedback-Schleifen und Improvement-Programme zur kontinuierlichen Optimierung der Vendor-Performance und Beziehungsqualität."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie können Finanzunternehmen proaktive Vendor Relationship Management-Strategien entwickeln, die sowohl Compliance als auch strategische Partnerschaften fördern?',
        answer: "Proaktives Vendor Relationship Management im DORA-Kontext erfordert eine strategische Herangehensweise, die über traditionelle Vertragsmanagement-Praktiken hinausgeht und langfristige, wertschöpfende Partnerschaften mit kritischen ICT-Dienstleistern aufbaut. Erfolgreiche Vendor Relationship Management-Strategien schaffen Win-Win-Situationen, die sowohl regulatorische Compliance als auch Innovation und operative Exzellenz fördern.\n\n🤝 Strategische Partnership-Entwicklung:\n• Collaborative Governance-Strukturen: Etablierung gemeinsamer Governance-Gremien und Steering Committees mit kritischen ICT-Dienstleistern zur strategischen Abstimmung, gemeinsamen Problemlösung und kontinuierlichen Verbesserung der Partnerschaft.\n• Innovation Partnership-Programme: Entwicklung strukturierter Innovation-Initiativen mit ICT-Dienstleistern zur gemeinsamen Entwicklung neuer Technologien, Services und Lösungsansätze, die sowohl Geschäftswert als auch Compliance-Vorteile schaffen.\n• Risk Sharing-Modelle: Implementierung von Risk Sharing-Vereinbarungen, die Anreize für ICT-Dienstleister schaffen, proaktiv in Risiko-Mitigation und Compliance-Verbesserungen zu investieren.\n• Long-term Strategic Alignment: Entwicklung langfristiger Roadmaps und strategischer Ziele, die die Geschäftsentwicklung des Finanzunternehmens mit den Service-Capabilities und Innovation-Plänen des ICT-Dienstleisters abstimmen.\n\n📈 Performance-orientierte Relationship Management:\n• Value-based Performance Metrics: Entwicklung von Performance-Metriken, die nicht nur Service Level-Compliance messen, sondern auch Geschäftswert-Beiträge und Innovation-Impact des ICT-Dienstleisters bewerten.\n• Continuous Feedback-Mechanismen: Implementierung strukturierter Feedback-Prozesse, die regelmäßige Kommunikation zwischen allen Stakeholder-Ebenen ermöglichen und proaktive Problemlösung fördern.\n• Joint Improvement-Initiativen: Etablierung gemeinsamer Verbesserungs-Programme, die sowohl operative Effizienz als auch Compliance-Performance kontinuierlich optimieren.\n• Recognition und Incentive-Programme: Entwicklung von Anerkennungs- und Anreizsystemen, die herausragende Performance und proaktive Compliance-Beiträge von ICT-Dienstleistern würdigen.\n\n🔧 Operative Exzellenz in Vendor Management:\n• Integrated Communication-Plattformen: Implementierung digitaler Collaboration-Plattformen, die nahtlose Kommunikation, Dokumentenaustausch und Projekt-Koordination zwischen allen Beteiligten ermöglichen.\n• Proactive Issue Management: Entwicklung proaktiver Problem-Identifikations- und Eskalations-Prozesse, die potenzielle Issues frühzeitig erkennen und strukturierte Lösungsansätze implementieren.\n• Knowledge Sharing-Initiativen: Etablierung von Wissensaustausch-Programmen, die Best Practices, Lessons Learned und Innovation-Erkenntnisse zwischen dem Finanzunternehmen und ICT-Dienstleistern teilen.\n• Relationship Health Monitoring: Implementierung von Relationship Health-Metriken und regelmäßigen Relationship-Assessments zur kontinuierlichen Optimierung der Partnerschaftsqualität."
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
