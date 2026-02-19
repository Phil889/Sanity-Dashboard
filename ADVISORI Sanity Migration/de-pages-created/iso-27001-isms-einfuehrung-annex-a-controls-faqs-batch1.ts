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
    console.log('Updating ISO 27001 ISMS Annex A Controls page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-isms-einfuehrung-annex-a-controls' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-isms-einfuehrung-annex-a-controls" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum sind die ISO 27001 Annex A Controls für die strategische Informationssicherheit unseres Unternehmens entscheidend und wie unterstützt ADVISORI bei der wertschöpfenden Implementation?",
        answer: "Die 114 Sicherheitskontrollen des ISO 27001 Annex A bilden das operative Fundament eines jeden robusten Informationssicherheitsmanagementsystems und sind weit mehr als reine Compliance-Anforderungen. Für die C-Suite repräsentieren sie strategische Instrumente zur Risikominimierung, Vertrauensbildung bei Kunden und Partnern sowie zur Schaffung nachhaltiger Wettbewerbsvorteile in einer zunehmend digitalisierten Geschäftswelt.\n\n🛡️ Strategische Bedeutung der Annex A Controls für die Führungsebene:\n• Umfassender Risikoschutz: Die Controls decken alle kritischen Bereiche der Informationssicherheit ab - von organisatorischen Strukturen über Personalmanagement bis hin zu technischen Sicherheitsmaßnahmen.\n• Vertrauensbildung und Marktpositionierung: Eine professionelle Implementation signalisiert Kunden, Partnern und Investoren ein hohes Maß an Sicherheitsbewusstsein und operationeller Exzellenz.\n• Compliance-Effizienz: Die systematische Umsetzung schafft eine solide Basis für weitere regulatorische Anforderungen wie DSGVO, NIS2 oder branchenspezifische Standards.\n• Geschäftskontinuität: Robust implementierte Controls minimieren das Risiko von Sicherheitsvorfällen, die zu Betriebsunterbrechungen und Reputationsschäden führen können.\n\n🚀 ADVISORIs strategischer Implementierungsansatz:\n• Geschäftsorientierte Priorisierung: Wir analysieren zunächst Ihre spezifischen Geschäftsrisiken und priorisieren die Implementation der Controls entsprechend ihrer strategischen Relevanz für Ihr Unternehmen.\n• Integrierte Governance-Entwicklung: Aufbau von ISMS-Strukturen, die sich nahtlos in bestehende Governance-Frameworks integrieren und die Entscheidungsfindung auf C-Level unterstützen.\n• ROI-orientierte Umsetzung: Jede Sicherheitsmaßnahme wird hinsichtlich ihres Beitrags zur Risikoreduzierung und zum Geschäftswert bewertet und entsprechend implementiert.\n• Change Management Excellence: Systematische Verankerung der Sicherheitskultur in der Organisation durch gezieltes Training, Kommunikation und Anreizsysteme."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können wir die Annex A Controls effizient implementieren, ohne unsere operative Flexibilität zu beeinträchtigen, und welche Quick Wins bietet ADVISORIs Ansatz?",
        answer: "Eine intelligente Implementation der Annex A Controls muss die Balance zwischen robuster Sicherheit und operationeller Agilität finden. ADVISORI entwickelt maßgeschneiderte Lösungen, die Sicherheitsanforderungen mit Geschäftseffizienz harmonisch verbinden und dabei konkrete Verbesserungen in verschiedenen Unternehmensbereichen ermöglichen.\n\n⚖️ Strategien für operative Flexibilität bei Control-Implementation:\n• Risikobasierte Priorisierung: Fokussierung auf die kritischsten Controls mit dem höchsten Risikominderungspotenzial, um maximalen Schutz bei minimaler Komplexität zu erreichen.\n• Prozessintegration statt Parallelstrukturen: Integration der Controls in bestehende Geschäftsprozesse, anstatt separate Sicherheitsprozesse zu schaffen, die die Effizienz beeinträchtigen.\n• Automatisierung und Digitalisierung: Einsatz moderner Technologien zur Automatisierung von Monitoring, Reporting und Compliance-Aktivitäten.\n• Agile Implementation: Schrittweise Einführung mit kontinuierlicher Anpassung basierend auf Feedback und sich ändernden Geschäftsanforderungen.\n\n🎯 Konkrete Quick Wins durch ADVISORIs Approach:\n• Sofortige Transparenz: Implementierung von Asset-Management-Systemen (A.8.1) schafft unmittelbar bessere Übersicht über IT-Ressourcen und deren Kosten.\n• Effizienzsteigerung durch Automatisierung: Access Management Controls (A.9) reduzieren manuellen Administrationsaufwand und verbessern gleichzeitig die Sicherheit.\n• Kostenoptimierung: Supplier Management Controls (A.15) führen zu besseren Vertragsverhandlungen und Risikominimierung bei Dienstleistern.\n• Verbesserte Incident Response: Structured Incident Management (A.16) reduziert Ausfallzeiten und minimiert Geschäftsunterbrechungen bei Sicherheitsvorfällen.\n\n🔧 Technologie-gestützte Effizienzmaximierung:\n• Integration mit bestehenden Tools: Nutzung vorhandener IT-Infrastrukturen zur Control-Unterstützung ohne zusätzliche Systemkomplexität.\n• Dashboard-basiertes Management: Echtzeitüberwachung aller Controls über zentrale Management-Dashboards für optimale Steuerung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche organisatorischen Strukturen und Governance-Modelle sind erforderlich, um die Annex A Controls nachhaltig zu etablieren und wie unterstützt ADVISORI beim Change Management?",
        answer: "Die nachhaltige Etablierung der Annex A Controls erfordert eine durchdachte organisatorische Transformation, die über technische Implementation hinausgeht. ADVISORI entwickelt maßgeschneiderte Governance-Strukturen und Change-Management-Strategien, die eine dauerhafte Verankerung der Informationssicherheit in der Unternehmenskultur sicherstellen.\n\n🏗️ Strategische Governance-Strukturen für nachhaltige Control-Implementation:\n• ISMS-Integration in Corporate Governance: Etablierung von Informationssicherheit als strategisches Thema auf Board-Level mit regelmäßigem Reporting und Entscheidungsbefugnissen.\n• Rollenmodelle und Verantwortlichkeiten: Definition klarer Rollen vom CISO über Fachbereichsverantwortliche bis hin zu operativen Mitarbeitern mit spezifischen Accountabilities.\n• Steering Committee Strukturen: Aufbau von cross-funktionalen Gremien zur strategischen Steuerung und operativen Koordination der ISMS-Aktivitäten.\n• Performance Management Integration: Verankerung von Informationssicherheitszielen in individuellen und abteilungsspezifischen Zielvereinbarungen.\n\n🔄 ADVISORIs systematisches Change Management für ISMS:\n• Stakeholder-Mapping und Engagement: Identifikation aller relevanten Interessensgruppen und Entwicklung zielgruppenspezifischer Kommunikations- und Engagement-Strategien.\n• Kulturelle Transformation: Entwicklung von Programmen zur Etablierung einer 'Security-by-Design' Mentalität in allen Geschäftsbereichen.\n• Training und Capability Building: Systematischer Aufbau von Informationssicherheitskompetenzen auf allen Organisationsebenen durch maßgeschneiderte Schulungsprogramme.\n• Kontinuierliche Verbesserung: Implementierung von Feedback-Mechanismen und regelmäßigen Bewertungszyklen zur kontinuierlichen Optimierung der Controls.\n\n📊 Messbare Erfolgsfaktoren und KPIs:\n• Security Awareness Metrics: Überwachung des Sicherheitsbewusstseins durch regelmäßige Assessments und Phishing-Simulationen.\n• Control Effectiveness Measurement: Quantitative Bewertung der Wirksamkeit implementierter Controls durch definierte Metriken.\n• Business Integration Index: Messung der Integration von Sicherheitsprozessen in operative Geschäftsabläufe.\n• Compliance Readiness Scoring: Kontinuierliche Bewertung der Zertifizierungsbereitschaft und Gap-Identifikation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können wir die Investment-Kosten für die Annex A Implementation kontrollieren und gleichzeitig den langfristigen ROI maximieren?",
        answer: "Die Implementation der Annex A Controls erfordert eine strategische Investitionsplanung, die sowohl kurzfristige Kosteneffizienz als auch langfristige Wertschöpfung berücksichtigt. ADVISORI entwickelt ROI-optimierte Implementierungsstrategien, die Investitionen intelligent priorisieren und messbare Geschäftswerte generieren.\n\n💰 Strategisches Kostenmanagement für Annex A Implementation:\n• Phasenweiser Rollout: Strukturierte Implementation in prioritätsbasierten Phasen zur Verteilung der Investitionskosten über mehrere Budgetperioden.\n• Leverage bestehender Infrastrukturen: Maximale Nutzung vorhandener IT- und Prozessinfrastrukturen zur Kostenminimierung bei Control-Implementation.\n• Shared Services Ansatz: Zentralisierung von Sicherheitsfunktionen zur Realisierung von Skaleneffekten und Kosteneinsparungen.\n• Risk-based Investment: Konzentration der Investitionen auf Controls mit dem höchsten Risikominderungspotenzial für optimale Kosten-Nutzen-Verhältnisse.\n\n📈 Langfristige ROI-Maximierung durch strategische Control-Implementation:\n• Operational Efficiency Gains: Automatisierung und Standardisierung von Sicherheitsprozessen führt zu nachhaltigen Kostenreduzierungen in operativen Bereichen.\n• Risk Mitigation Value: Quantifizierung der finanziellen Vorteile durch reduzierte Wahrscheinlichkeit und Auswirkungen von Sicherheitsvorfällen.\n• Compliance Synergien: Nutzung der ISMS-Infrastruktur zur effizienten Erfüllung weiterer regulatorischer Anforderungen mit minimalen Zusatzinvestitionen.\n• Business Enablement: Sicherheitsinfrastrukturen ermöglichen neue digitale Geschäftsmodelle und Marktchancen mit hohem Wertschöpfungspotenzial.\n\n🎯 ADVISORIs Value-Engineering Approach:\n• Business Case Development: Entwicklung detaillierter Business Cases für jede Control-Kategorie mit quantifizierten Kosten und Nutzen.\n• Investitionspriorisierung: Erstellung einer datenbasierten Priorisierungsmatrix basierend auf Risikoreduktion, Compliance-Nutzen und Implementierungsaufwand.\n• Kontinuierliches Value Monitoring: Etablierung von Systemen zur laufenden Messung des ROI und zur Optimierung der Investitionsallokation.\n• Vendor Management Excellence: Strategische Lieferantenauswahl und -steuerung zur Kostenoptimierung bei gleichzeitiger Qualitätssicherung."
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
    console.log('✅ C-Level FAQs batch 1 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
