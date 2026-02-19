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
    console.log('Updating DORA Operational Resilience Testing page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-operational-resilience-testing' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-operational-resilience-testing" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche strategischen Vorteile bietet eine proaktive DORA Operational Resilience Testing Strategie für Finanzunternehmen?',
        answer: "DORA Operational Resilience Testing ist weit mehr als eine regulatorische Pflichtübung – es ist ein strategischer Enabler für nachhaltige Wettbewerbsvorteile und operative Exzellenz im Finanzsektor. Eine durchdachte Testing-Strategie transformiert regulatorische Anforderungen in messbare Geschäftsvorteile und stärkt die Vertrauensbasis mit Stakeholdern, Kunden und Aufsichtsbehörden.\n\n🎯 Strategische Geschäftsvorteile:\n• Erhöhte operative Resilienz: Systematische Identifikation und Behebung von Schwachstellen in kritischen ICT-Systemen reduziert das Risiko kostspieliger Betriebsunterbrechungen und schützt vor Reputationsschäden.\n• Verbesserte Risikotransparenz: Kontinuierliche Testing-Programme schaffen detaillierte Einblicke in die tatsächliche Cyber-Resilienz und ermöglichen datenbasierte Entscheidungen für Investitionen in die IT-Sicherheit.\n• Regulatorische Compliance als Wettbewerbsvorteil: Frühzeitige und umfassende DORA-Compliance positioniert Ihr Unternehmen als vertrauenswürdigen Partner und kann Markteintrittshürden für weniger gut vorbereitete Wettbewerber schaffen.\n• Optimierte Kapitalallokation: Präzise Risikobewertungen ermöglichen eine effizientere Allokation von Sicherheitsinvestitionen und reduzieren unnötige Ausgaben für redundante Schutzmaßnahmen.\n\n🛡️ Operative Exzellenz durch strukturiertes Testing:\n• Kontinuierliche Verbesserung: Regelmäßige TLPT-Übungen und Vulnerability Assessments schaffen einen Zyklus kontinuierlicher Verbesserung der Cyber-Abwehrfähigkeiten.\n• Incident Response Readiness: Realistische Testing-Szenarien bereiten Teams auf tatsächliche Cyber-Vorfälle vor und reduzieren Reaktionszeiten im Ernstfall erheblich.\n• Stakeholder-Vertrauen: Transparente Testing-Ergebnisse und Remediation-Pläne stärken das Vertrauen von Investoren, Kunden und Geschäftspartnern in die operative Stabilität.\n• Innovation Enablement: Robuste Testing-Frameworks ermöglichen es, neue Technologien und Geschäftsmodelle sicher zu implementieren, ohne die operative Resilienz zu gefährden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie unterscheidet sich Threat-Led Penetration Testing (TLPT) von herkömmlichen Penetration Tests und warum ist es für DORA-Compliance entscheidend?',
        answer: "Threat-Led Penetration Testing (TLPT) repräsentiert eine fundamentale Evolution gegenüber traditionellen Penetration Tests und ist ein Kernbestandteil der DORA-Anforderungen für systemrelevante Finanzunternehmen. TLPT simuliert realistische, fortgeschrittene Angriffszenarien und bietet dadurch wesentlich aussagekräftigere Erkenntnisse über die tatsächliche Cyber-Resilienz einer Organisation.\n\n🔍 Fundamentale Unterschiede zu traditionellen Penetration Tests:\n• Realitätsnahe Bedrohungsmodellierung: TLPT basiert auf aktuellen Threat Intelligence und simuliert spezifische Angriffstechniken, die tatsächlich gegen Finanzunternehmen eingesetzt werden, anstatt generische Schwachstellen-Scans durchzuführen.\n• Ganzheitlicher Ansatz: Während traditionelle Pentests oft isolierte Systeme betrachten, testet TLPT die gesamte Angriffskette von der initialen Kompromittierung bis zur Zielerreichung und berücksichtigt dabei Menschen, Prozesse und Technologie gleichermaßen.\n• Kontinuierliche Simulation: TLPT-Übungen erstrecken sich über längere Zeiträume und simulieren Advanced Persistent Threats, die über Wochen oder Monate unentdeckt operieren können.\n• Regulatorische Anerkennung: TLPT-Ergebnisse werden von Aufsichtsbehörden als aussagekräftige Bewertung der operationellen Resilienz anerkannt und erfüllen spezifische DORA-Anforderungen.\n\n⚡ DORA-spezifische TLPT-Anforderungen:\n• Szenario-basierte Testansätze: TLPT muss spezifische Bedrohungsszenarien abdecken, die für das jeweilige Finanzunternehmen und seine Geschäftstätigkeit relevant sind.\n• Cross-funktionale Koordination: TLPT erfordert die Zusammenarbeit zwischen IT-Sicherheit, Risikomanagement, Geschäftsbereichen und externen Dienstleistern.\n• Dokumentation und Reporting: Umfassende Dokumentation der TLPT-Ergebnisse, Remediation-Maßnahmen und Lessons Learned für regulatorische Nachweise.\n• Regelmäßige Wiederholung: DORA erfordert regelmäßige TLPT-Übungen, um die kontinuierliche Wirksamkeit der Cyber-Abwehrmaßnahmen zu validieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche kritischen Erfolgsfaktoren müssen bei der Implementierung eines DORA-konformen Testing-Frameworks berücksichtigt werden?',
        answer: "Die erfolgreiche Implementierung eines DORA-konformen Testing-Frameworks erfordert eine strategische Herangehensweise, die technische Exzellenz mit organisatorischer Transformation verbindet. Kritische Erfolgsfaktoren umfassen sowohl die technische Infrastruktur als auch die kulturellen und prozessualen Veränderungen, die für nachhaltige operative Resilienz erforderlich sind.\n\n🏗️ Strategische Grundlagen:\n• Executive Sponsorship und Governance: Starke Unterstützung durch die Geschäftsleitung und klare Governance-Strukturen sind unerlässlich für die erfolgreiche Umsetzung umfassender Testing-Programme.\n• Risikobasierte Priorisierung: Identifikation und Priorisierung kritischer ICT-Systeme und -Prozesse basierend auf ihrer Bedeutung für die Geschäftskontinuität und regulatorische Anforderungen.\n• Integration in bestehende Frameworks: Nahtlose Integration von DORA Testing-Anforderungen in bestehende Risikomanagement-, Compliance- und IT-Governance-Frameworks.\n• Stakeholder-Alignment: Klare Kommunikation und Abstimmung zwischen IT-Sicherheit, Risikomanagement, Compliance, Geschäftsbereichen und externen Dienstleistern.\n\n🔧 Technische Implementierung:\n• Automatisierung und Skalierbarkeit: Implementierung automatisierter Testing-Tools und -Prozesse, die eine kontinuierliche und skalierbare Überwachung der operationellen Resilienz ermöglichen.\n• Datenqualität und -integration: Sicherstellung hochwertiger, konsistenter Daten aus verschiedenen Quellen für aussagekräftige Testing-Ergebnisse und Risikobewertungen.\n• Incident Response Integration: Enge Verzahnung von Testing-Aktivitäten mit Incident Response-Prozessen zur Maximierung des Lerneffekts und der Reaktionsfähigkeit.\n• Kontinuierliche Verbesserung: Etablierung von Feedback-Schleifen und Metriken zur kontinuierlichen Optimierung der Testing-Effektivität und -Effizienz.\n\n👥 Organisatorische Transformation:\n• Kompetenzaufbau: Systematische Entwicklung interner Fähigkeiten in Cyber-Security Testing, Threat Intelligence und Incident Response.\n• Kulturwandel: Förderung einer Sicherheitskultur, die proaktives Testing und kontinuierliche Verbesserung als Geschäftswert anerkennt.\n• Change Management: Strukturierte Begleitung der organisatorischen Veränderungen mit klarer Kommunikation, Schulungen und Unterstützung für betroffene Teams."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie können Finanzunternehmen die Kosten-Nutzen-Relation von DORA Testing-Investitionen optimieren und messbare ROI erzielen?',
        answer: "Die Optimierung der Kosten-Nutzen-Relation von DORA Testing-Investitionen erfordert einen strategischen Ansatz, der kurzfristige Compliance-Anforderungen mit langfristigen Geschäftsvorteilen verbindet. Erfolgreiche Organisationen betrachten DORA Testing nicht als Kostenfaktor, sondern als Investition in operative Exzellenz und Wettbewerbsfähigkeit.\n\n💰 Strategische ROI-Optimierung:\n• Risikoreduktion als Wertschöpfung: Quantifizierung der vermiedenen Kosten durch präventive Identifikation und Behebung von Schwachstellen, bevor sie zu kostspieligen Sicherheitsvorfällen werden.\n• Effizienzsteigerung durch Automatisierung: Investitionen in automatisierte Testing-Tools und -Prozesse reduzieren langfristig den manuellen Aufwand und ermöglichen eine kontinuierliche Überwachung ohne proportionale Kostensteigerung.\n• Regulatorische Effizienz: Integrierte Testing-Frameworks, die gleichzeitig DORA-, NIS2- und andere regulatorische Anforderungen erfüllen, maximieren den Nutzen einzelner Investitionen.\n• Versicherungsprämien-Optimierung: Nachweislich robuste Cyber-Resilienz kann zu reduzierten Cyber-Versicherungsprämien und besseren Konditionen führen.\n\n📊 Messbare Erfolgskennzahlen:\n• Mean Time to Detection (MTTD) und Mean Time to Response (MTTR): Verbesserung dieser Kennzahlen durch regelmäßige Testing-Übungen reduziert die Auswirkungen tatsächlicher Sicherheitsvorfälle erheblich.\n• Schwachstellen-Remediation-Rate: Tracking der Zeit zwischen Identifikation und Behebung von Schwachstellen als Indikator für die Effektivität des Testing-Programms.\n• Business Continuity Metrics: Messung der Verfügbarkeit kritischer Systeme und Reduzierung ungeplanter Ausfallzeiten durch proaktive Testing-Maßnahmen.\n• Compliance-Effizienz: Reduzierung des Aufwands für regulatorische Audits und Prüfungen durch kontinuierliche Compliance-Nachweise.\n\n🎯 Kostenoptimierung durch intelligente Priorisierung:\n• Risikobasierte Ressourcenallokation: Fokussierung der Testing-Ressourcen auf die kritischsten Systeme und wahrscheinlichsten Bedrohungsszenarien für maximale Wirkung.\n• Shared Services und Outsourcing: Strategische Nutzung externer Expertise für spezialisierte Testing-Aktivitäten, während interne Kapazitäten für strategische Aufgaben reserviert werden.\n• Technologie-Leverage: Nutzung von Cloud-basierten Testing-Plattformen und As-a-Service-Modellen zur Reduzierung von Infrastruktur- und Wartungskosten."
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
    console.log('✅ FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
