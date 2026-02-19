import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import { join } from 'path'

dotenv.config({ path: join(process.cwd(), '.env') })

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
    console.log('Fetching EBA Remediation & Kontinuierliche Verbesserung document...')

    const ebaRemediationDoc = await client.getDocument('eba-remediation-kontinuierliche-verbesserung')

    if (!ebaRemediationDoc) {
      throw new Error('EBA Remediation & Kontinuierliche Verbesserung document not found')
    }

    console.log('Adding FAQs batch 1...')

    // FAQs to add - batch 1
    const faqsBatch1 = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist ein systematischer Remediation-Ansatz für EBA-Compliance-Lücken strategisch wichtig und wie unterstützt ADVISORI Finanzinstitute dabei?",
        answer: "Für Finanzinstitute ist die systematische Remediation von EBA-Compliance-Lücken weit mehr als nur eine regulatorische Pflichtübung; sie repräsentiert einen strategischen Imperativ mit tiefgreifenden Auswirkungen auf die Geschäftsstabilität, Reputation und langfristige Wettbewerbsfähigkeit. Unzureichend adressierte Compliance-Defizite können zu erheblichen aufsichtsrechtlichen Sanktionen, Einschränkungen der Geschäftstätigkeit und nachhaltigen Reputationsschäden führen. ADVISORI transformiert diese Herausforderung in eine strategische Chance für organisatorische Weiterentwicklung und operationale Exzellenz.\n\n🔍 Strategische Dimensionen einer systematischen EBA-Remediation:\n• Risikominimierung und Geschäftsstabilität: Proaktive Identifikation und Beseitigung von Compliance-Lücken verhindert kostspielige aufsichtsrechtliche Maßnahmen und sichert die uneingeschränkte Geschäftsfähigkeit.\n• Vertrauensbildung und Reputationsschutz: Transparente Remediation-Prozesse stärken das Vertrauen von Aufsichtsbehörden, Investoren und Kunden in die Governance-Strukturen des Instituts.\n• Effizienzsteigerung und Kostenoptimierung: Die systematische Behebung struktureller Defizite führt zu optimierten Prozessen und reduziert langfristig die Compliance-Kosten um durchschnittlich 25-35%.\n• Wettbewerbsvorteil durch Compliance-Excellence: Institute mit ausgereiften Remediation-Fähigkeiten können regulatorische Änderungen schneller und ressourceneffizienter umsetzen als ihre Wettbewerber.\n\n🛠️ Der ADVISORI-Ansatz für nachhaltige EBA-Remediation:\n• Ganzheitliche Ursachenanalyse: Wir identifizieren nicht nur die Symptome, sondern die strukturellen Grundursachen von Compliance-Defiziten durch tiefgreifende Analyse regulatorischer, prozessualer und technologischer Dimensionen.\n• Priorisierungsframework: Unsere proprietäre Methodik ermöglicht eine risikoorientierte Priorisierung von Remediationsmaßnahmen, die kritische Compliance-Risiken zuerst adressiert und Ressourcen optimal allokiert.\n• Integrierte Governance-Struktur: Wir etablieren robuste Governance-Mechanismen mit klaren Verantwortlichkeiten, Eskalationswegen und Kontrollprozessen, die eine effektive Umsetzung und Nachverfolgung sicherstellen.\n• Kulturelle Transformation: Über technische Lösungen hinaus unterstützen wir Finanzinstitute bei der Entwicklung einer proaktiven Compliance-Kultur, die Remediation als kontinuierlichen Verbesserungsprozess versteht."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie gestaltet sich ein effektiver Prozess zur kontinuierlichen Verbesserung im EBA-Compliance-Management und welche Erfolgsfaktoren sind entscheidend?",
        answer: "Ein effektiver kontinuierlicher Verbesserungsprozess im EBA-Compliance-Management transzendiert klassische Compliance-Ansätze und etabliert einen dynamischen Kreislauf aus Analyse, Innovation und Optimierung. Diese systematische Evolution ermöglicht es Finanzinstituten, nicht nur reaktiv auf regulatorische Änderungen zu reagieren, sondern proaktiv Effizienz und Effektivität ihrer Compliance-Strukturen kontinuierlich zu steigern. Die Integration dieses Ansatzes in die organisatorische DNA schafft nachhaltige Compliance-Exzellenz jenseits punktueller Interventionen.\n\n🔄 Kernelemente eines effektiven Verbesserungsprozesses:\n• Zyklische Prozessstruktur: Etablierung eines strukturierten PDCA-Zyklus (Plan-Do-Check-Act) speziell für EBA-Compliance, der systematische Analyse, Implementierung, Validierung und Anpassung umfasst.\n• Datengetriebene Entscheidungsfindung: Integration quantitativer und qualitativer Metriken zur objektiven Bewertung von Compliance-Prozessen und evidenzbasierten Priorisierung von Optimierungspotenzialen.\n• Cross-funktionale Kollaboration: Systematische Einbindung von Expertise aus Compliance, Fachbereichen, IT und Risikomanagement für ganzheitliche Lösungsansätze jenseits funktionaler Silos.\n• Formalisierte Feedback-Mechanismen: Etablierung strukturierter Kanäle für Verbesserungsvorschläge aus allen Organisationsebenen und systematische Integration von Erkenntnissen aus aufsichtsrechtlichen Prüfungen.\n• Agile Implementierungsmethodik: Anwendung iterativer Ansätze mit kurzen Feedback-Zyklen zur schnellen Validierung und Anpassung von Verbesserungsmaßnahmen.\n\n🌟 Kritische Erfolgsfaktoren für nachhaltige Verbesserung:\n• Leadership Commitment: Sichtbares und konsequentes Engagement der Führungsebene für kontinuierliche Verbesserung als strategische Priorität und Integration in Performance-Ziele.\n• Kulturelle Verankerung: Entwicklung einer organisationsweiten Kultur, die kontinuierliche Verbesserung als kollektive Verantwortung versteht und proaktives Hinterfragen bestehender Prozesse fördert.\n• Ressourcenallokation: Dedizierte Zuweisung von Ressourcen und Expertise für Verbesserungsinitiativen, die über das operative Compliance-Management hinausgehen.\n• Technologische Enabler: Strategischer Einsatz von Automatisierung, Prozessanalyse-Tools und KI-gestützten Lösungen zur Identifikation von Ineffizienzen und Implementierung optimierter Prozesse.\n• Wissensmanagement: Systematische Dokumentation und organisationsweite Verbreitung von Learnings aus Verbesserungsinitiativen zur Vermeidung wiederholter Fehler und Förderung institutionellen Lernens."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche konkreten Methoden und Tools setzt ADVISORI ein, um EBA-Compliance-Lücken systematisch zu identifizieren und priorisieren?",
        answer: "Die systematische Identifikation und präzise Priorisierung von EBA-Compliance-Lücken erfordert eine methodisch fundierte und technologisch unterstützte Herangehensweise, die weit über konventionelle Gap-Analysen hinausgeht. ADVISORI kombiniert fortschrittliche analytische Frameworks mit spezialisierten Tools und regulatorischer Expertise, um ein multidimensionales Verständnis der Compliance-Landschaft zu entwickeln und Remediationsmaßnahmen strategisch zu orchestrieren.\n\n🔎 Fortschrittliche Methoden zur Lückenidentifikation:\n• Regulatory Mapping & Traceability: Wir entwickeln detaillierte Anforderungskarten der EBA-Regularien mit granularer Zuordnung zu internen Kontrollen, Prozessen und Systemen, die präzise Identifikation von Compliance-Lücken ermöglichen.\n• Root Cause Analysis Framework: Unser proprietäres RCA-Framework differenziert zwischen symptomatischen und systemischen Compliance-Defiziten durch mehrstufige Kausalanalysen, die strukturelle Ursachen aufdecken.\n• Process Mining & Journey Mapping: Wir setzen spezialisierte Process-Mining-Technologien ein, um tatsächliche Compliance-Prozesse mit Soll-Prozessen zu vergleichen und Abweichungen, Ineffizienzen und Kontrollschwächen zu identifizieren.\n• Control Effectiveness Assessment: Unsere strukturierte Methodik evaluiert die Design- und operationale Effektivität bestehender Kontrollen anhand standardisierter Kriterien und identifiziert Lücken in der Kontrollarchitektur.\n• Regulatory Intelligence Integration: Wir analysieren aufsichtsrechtliche Kommunikationen, Prüfungsberichte und Sanktionsentscheidungen, um emergente regulatorische Erwartungen zu antizipieren und potenzielle Compliance-Risiken proaktiv zu identifizieren.\n\n📊 Spezialisierte Tools für strategische Priorisierung:\n• Risk Impact Heatmapping: Unser dynamisches Heatmapping-Tool visualisiert Compliance-Lücken nach multidimensionalen Risikofaktoren und ermöglicht datengetriebene Priorisierungsentscheidungen.\n• Remediation Effort Estimation Model: Wir quantifizieren den Implementierungsaufwand für Remediationsmaßnahmen durch ein kalibriertes Modell, das technische, prozessuale und organisatorische Komplexität berücksichtigt.\n• Dependency & Critical Path Analysis: Unsere Tools identifizieren Abhängigkeiten zwischen Remediationsmaßnahmen und kritische Pfade, die sequenzielle Implementierungsanforderungen verdeutlichen und Implementierungsroadmaps optimieren.\n• Cost-Benefit Optimization Algorithm: Unser algorithmusbasierter Ansatz maximiert den regulatorischen Risikoreduktionseffekt bei gegebenen Ressourcenbeschränkungen durch mathematische Optimierung der Maßnahmensequenzierung.\n• Regulatory Change Impact Predictor: Dieses Tool projiziert die Auswirkungen geplanter regulatorischer Änderungen auf bestehende Compliance-Lücken und ermöglicht vorausschauende Anpassung von Remediationsprioritäten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie kann ein Finanzinstitut einen nachhaltigen kulturellen Wandel hin zu kontinuierlicher EBA-Compliance-Verbesserung etablieren?",
        answer: "Die Etablierung eines nachhaltigen kulturellen Wandels hin zu kontinuierlicher EBA-Compliance-Verbesserung repräsentiert eine fundamentale Transformation, die weit über technische Maßnahmen hinausgeht. Sie erfordert eine strategische Neuausrichtung der organisatorischen DNA, bei der Compliance nicht als reaktive Pflichtübung, sondern als proaktiver Wertschöpfungsfaktor verstanden wird. Diese kulturelle Evolution ist entscheidend, da selbst die sophistiziertesten Compliance-Frameworks ohne entsprechende kulturelle Verankerung langfristig ineffektiv bleiben.\n\n🌱 Fundamente kultureller Transformation im Compliance-Kontext:\n• Leadership als Katalysator: Die Führungsebene muss kontinuierliche Verbesserung nicht nur rhetorisch unterstützen, sondern durch konsequentes Vorleben, explizite Ressourcenallokation und Integration in strategische Entscheidungsprozesse demonstrieren.\n• Purpose-orientierte Neuausrichtung: Reframing von Compliance-Aktivitäten von reiner Regulierungserfüllung hin zu einem tieferen Organisationszweck – dem Schutz von Kunden, Stakeholdern und der Integrität des Finanzsystems.\n• Empowerment statt Kontrolle: Etablierung eines Umfelds, in dem Mitarbeiter ermutigt werden, proaktiv Verbesserungspotenziale zu identifizieren und Lösungsvorschläge einzubringen, anstatt aus Angst vor Konsequenzen Probleme zu verbergen.\n• Psychologische Sicherheit: Schaffung eines Arbeitsumfelds, in dem das offene Ansprechen von Compliance-Risiken und Prozessschwächen als konstruktiver Beitrag wertgeschätzt wird und nicht zu negativen Konsequenzen führt.\n\n🔄 Praktische Implementierungsansätze für kulturellen Wandel:\n• Integrative Governance-Strukturen: Etablierung cross-funktionaler Continuous Improvement Boards mit Vertretern aller relevanten Geschäftsbereiche, die kollektive Ownership für Compliance-Optimierung übernehmen.\n• Verhaltensorientierte Anreizsysteme: Neugestaltung von Anreizmechanismen und Performance-Indikatoren, die proaktives Compliance-Verhalten und Beiträge zur kontinuierlichen Verbesserung explizit honorieren.\n• Experiential Learning Program: Entwicklung immersiver Lernformate jenseits traditioneller Compliance-Schulungen, die praktische Erfahrungen mit Compliance-Risiken und deren Konsequenzen vermitteln.\n• Kontinuierliches Cultural Assessment: Regelmäßige Evaluation der Compliance-Kultur durch quantitative und qualitative Methoden mit transparenter Kommunikation der Ergebnisse und kollaborativer Entwicklung von Verbesserungsmaßnahmen.\n• Success Storytelling: Systematische Kommunikation von Erfolgsgeschichten, bei denen kontinuierliche Verbesserung zu messbaren positiven Outcomes führte, um organisationsweites Momentum für kulturellen Wandel zu schaffen."
      }
    ]

    // Update the document with the FAQs
    const transaction = client.transaction()
    transaction.patch('eba-remediation-kontinuierliche-verbesserung', (patch) => {
      return patch.setIfMissing({ faq: [] }).append('faq', faqsBatch1)
    })

    console.log('Committing transaction...')
    await transaction.commit()

    console.log('✅ EBA Remediation & Kontinuierliche Verbesserung FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
