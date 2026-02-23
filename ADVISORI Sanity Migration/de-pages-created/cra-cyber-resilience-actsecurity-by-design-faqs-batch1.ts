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
    console.log('Updating CRA Security by Design page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-cyber-resilience-actsecurity-by-design' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-cyber-resilience-actsecurity-by-design" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist Security by Design nach dem EU Cyber Resilience Act für die C-Suite strategisch entscheidend und wie positioniert ADVISORI dies als Wettbewerbsvorteil?",
        answer: "Security by Design nach dem CRA ist weit mehr als eine regulatorische Compliance-Anforderung – es ist ein strategischer Differenzierungsfaktor, der über Marktfähigkeit und langfristigen Geschäftserfolg entscheidet. Für die C-Suite bedeutet dies, dass Cybersicherheit vom Kostenzentrum zum Umsatztreiber wird. ADVISORI unterstützt Sie dabei, Security by Design als zentralen Pfeiler Ihrer Produktstrategie und Marktpositionierung zu etablieren.\n\n🎯 Strategische Dimension für die Führungsebene:\n• Marktdifferenzierung: In einem zunehmend sicherheitsbewussten Markt werden CRA-konforme Produkte zum entscheidenden Verkaufsargument gegenüber Nicht-konformen Wettbewerbern.\n• Risikominimierung: Proaktive Sicherheitsintegration verhindert kostspielige Nachbesserungen, Produktrückrufe und Reputationsschäden nach Markteinführung.\n• Zukunftssicherheit: Vorbereitung auf verschärfte globale Cybersecurity-Regulierung und steigende Kundenerwartungen an Produktsicherheit.\n• Investorensicherheit: Nachweisbare Security by Design-Prozesse stärken das Vertrauen von Investoren und Partnern in die Risikomanagement-Kompetenz.\n\n🏗️ ADVISORI's strategischer Umsetzungsansatz:\n• Business-Security-Alignment: Wir verbinden technische Sicherheitsanforderungen mit Ihren Geschäftszielen und schaffen messbare Business Cases für Security-Investitionen.\n• Skalierbare Sicherheitsarchitekturen: Entwicklung wiederverwendbarer Security-Patterns und -Frameworks, die das Unternehmenswachstum unterstützen und Entwicklungskosten senken.\n• Compliance als Enabler: Transformation der CRA-Compliance von einer Hürde zu einem Geschäftsbeschleuniger durch effiziente Prozesse und Automatisierung.\n• Executive Dashboard: Bereitstellung von C-Level-gerechten Metriken und Reportings, die den ROI von Security by Design-Investitionen transparent machen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifiziert ADVISORI den ROI von Security by Design-Implementierungen und welche direkten Auswirkungen hat dies auf Time-to-Market und Entwicklungskosten?",
        answer: "Security by Design nach CRA-Standards ist eine Investition mit messbaren finanziellen Rückflüssen, die sich sowohl in der Kostenreduktion als auch in der Umsatzsteigerung manifestiert. ADVISORI entwickelt datengestützte ROI-Modelle, die sowohl die direkten als auch indirekten Wertbeiträge von integrierten Sicherheitsmaßnahmen transparent machen und der C-Suite fundierte Entscheidungsgrundlagen bieten.\n\n💰 Direkte finanzielle Auswirkungen und Kostenvermeidung:\n• Reduktion von Nachbesserungskosten: Sicherheitslücken, die in der Entwicklungsphase identifiziert werden, kosten nur 1/10 der Behebungskosten nach Markteinführung.\n• Vermeidung von Compliance-Strafen: CRA-Verstöße können zu Bußgeldern von bis zu 15 Millionen Euro oder 2,5% des weltweiten Jahresumsatzes führen.\n• Minimierung von Produktrückrufen: Proaktive Sicherheitsmaßnahmen reduzieren das Risiko kostspieliger Produktrückrufe um bis zu 90%.\n• Beschleunigte Zertifizierungsprozesse: Strukturierte Security by Design-Dokumentation verkürzt Compliance-Audits und Zertifizierungsverfahren erheblich.\n\n⚡ Impact auf Time-to-Market und operative Effizienz:\n• Parallele Entwicklung: Integrierte Sicherheitsprozesse eliminieren sequenzielle Sicherheitstests und verkürzen Entwicklungszyklen um 20-30%.\n• Automatisierte Security Testing: CI/CD-integrierte Sicherheitstests reduzieren manuelle Prüfaufwände und beschleunigen Release-Zyklen.\n• Wiederverwendbare Security-Komponenten: Einmal entwickelte sichere Bausteine verkürzen die Entwicklungszeit neuer Produkte um bis zu 40%.\n• Reduzierte Iterations-Schleifen: Frühzeitige Sicherheitsintegration minimiert kostspielige Design-Änderungen in späten Entwicklungsphasen.\n\n📊 ADVISORI's ROI-Quantifizierung:\n• Business Case Development: Wir erstellen detaillierte Kosten-Nutzen-Analysen, die sowohl tangible als auch intangible Vorteile quantifizieren.\n• Benchmarking und KPIs: Etablierung branchenspezifischer Vergleichswerte und kontinuierliche Erfolgsmessung.\n• Predictive Analytics: Nutzung von Datenmodellen zur Vorhersage zukünftiger Sicherheitsrisiken und Kostenvermeidungspotenziale."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "In welchem Umfang transformiert ADVISORI bestehende Entwicklungsprozesse für CRA-konforme Security by Design und wie minimieren wir Disruption während der Transformation?",
        answer: "Die Integration von Security by Design in bestehende Entwicklungsprozesse erfordert eine durchdachte Transformationsstrategie, die Sicherheitsanforderungen nahtlos in etablierte Workflows einbettet, ohne die Produktivität zu beeinträchtigen. ADVISORI verfolgt einen evolutionären Ansatz, der bestehende Prozess-Assets nutzt und schrittweise erweitert, anstatt radikale Umbrüche zu erzwingen.\n\n🔄 Evolutionäre Prozess-Transformation:\n• Assessment bestehender Entwicklungsreife: Detaillierte Analyse Ihrer aktuellen SDLC-Praktiken, DevOps-Reifegrad und bereits vorhandener Sicherheitsmaßnahmen als Basis für die Transformation.\n• Schrittweise Integration: Implementierung von Security by Design in Phasen, beginnend mit kritischen Komponenten und schrittweiser Ausweitung auf das gesamte Produktportfolio.\n• Minimal Viable Security (MVS): Einführung grundlegender Sicherheitskontrollen als schnelle Wins, gefolgt von kontinuierlicher Verfeinerung und Expansion.\n• Cultural Change Management: Begleitende Schulungs- und Befähigungsprogramme, die Entwicklungsteams zu Security Champions entwickeln und Sicherheit als gemeinsame Verantwortung etablieren.\n\n⚙️ Technische und prozessuale Integration:\n• DevSecOps-Pipeline Design: Nahtlose Integration automatisierter Sicherheitstests in bestehende CI/CD-Pipelines ohne Verlangsamung der Deployment-Zyklen.\n• Tool-Chain-Optimierung: Auswahl und Integration von Security-Tools, die mit bestehenden Entwicklungsumgebungen kompatibel sind und den gewohnten Workflow ergänzen.\n• Code-Review-Enhancement: Erweiterung bestehender Code-Review-Prozesse um Sicherheitsaspekte durch systematische Checklisten und automatisierte Statische Code-Analyse (SAST).\n• Dokumentations-Automation: Implementierung automatisierter Compliance-Dokumentation, die CRA-Anforderungen erfüllt, ohne zusätzlichen manuellen Aufwand zu verursachen.\n\n🛡️ Risikominimierung während der Transformation:\n• Parallel-Betrieb: Aufbau neuer Security-Prozesse parallel zu bestehenden Workflows mit schrittweiser Migration kritischer Komponenten.\n• Rollback-Strategien: Vorbereitung von Fallback-Mechanismen für den Fall unvorhergesehener Probleme während der Implementierung.\n• Kontinuierliche Überwachung: Real-time Monitoring der Transformationsauswirkungen auf Entwicklungsgeschwindigkeit, Qualität und Team-Moral.\n• Stakeholder-Kommunikation: Transparente Kommunikation von Fortschritten, Herausforderungen und Erfolgen an alle beteiligten Stakeholder zur Sicherstellung der Unterstützung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie stellt ADVISORI sicher, dass Security by Design-Implementierungen nicht nur CRA-Compliance erreichen, sondern auch zukünftige regulatorische Entwicklungen antizipieren und nachhaltige Wettbewerbsvorteile schaffen?",
        answer: "ADVISORI verfolgt einen proaktiven, zukunftsorientierten Ansatz für Security by Design, der über die aktuellen CRA-Anforderungen hinausgeht und Ihr Unternehmen für kommende regulatorische Entwicklungen und sich wandelnde Bedrohungslandschaften positioniert. Unser Forward-Looking-Ansatz transformiert Compliance von einer reaktiven Notwendigkeit zu einem strategischen Differenzierungsmerkmal.\n\n🔮 Antizipation zukünftiger regulatorischer Entwicklungen:\n• Regulatory Intelligence: Kontinuierliche Überwachung globaler Cybersecurity-Gesetzgebung (EU, USA, APAC) und frühzeitige Integration erwarteter Anforderungen in Ihre Security-Architektur.\n• Standards-Harmonisierung: Aufbau von Security-Frameworks, die nicht nur CRA, sondern auch verwandte Standards (ISO 27001, NIST Cybersecurity Framework, IEC 62443) erfüllen.\n• Adaptive Compliance-Architektur: Entwicklung modularer Sicherheitskonzepte, die flexibel an neue regulatorische Anforderungen angepasst werden können.\n• Internationale Marktkompatibilität: Vorbereitung auf regulatorische Divergenzen zwischen verschiedenen Märkten durch comprehensive Compliance-Strategien.\n\n🚀 Transformation zu nachhaltigem Wettbewerbsvorteil:\n• Security-as-a-Feature: Positionierung von Sicherheit als zentrales Produktmerkmal und Verkaufsargument, das Kunden bereit sind, zu honorieren.\n• Innovation durch Constraints: Nutzung von Sicherheitsanforderungen als Innovationstreiber für neue Geschäftsmodelle und Produktdifferenzierung.\n• Trust-as-a-Service: Aufbau von Vertrauens-Ökosystemen mit Kunden, Partnern und Lieferanten basierend auf nachweisbarer Sicherheitskompetenz.\n• Sicherheits-IP-Portfolio: Entwicklung proprietärer Sicherheitstechnologien und -verfahren als strategische Assets und potenzielle Lizenzierungsquellen.\n\n🛡️ Zukunftssichere Technologie- und Prozess-Architekturen:\n• Zero Trust by Design: Implementation von Zero Trust-Prinzipien als Grundlage für resiliente, skalierbare Sicherheitsarchitekturen.\n• AI/ML-gestützte Security: Integration von KI-basierten Sicherheitslösungen für predictive threat detection und adaptive response capabilities.\n• Quantum-Ready Cryptography: Vorbereitung auf Post-Quantum-Kryptografie und Quantum-Computing-Bedrohungen.\n• Ecosystem Security: Erweiterung von Security by Design auf das gesamte Partner- und Lieferanten-Ökosystem für end-to-end Sicherheit.\n\n📈 Messbare langfristige Wertschöpfung:\n• Security Maturity Roadmap: Definition klarer Evolutionspfade von grundlegender Compliance zu Security Excellence und Marktführerschaft.\n• Competitive Intelligence: Benchmarking gegen Wettbewerber und Identifikation von Sicherheits-Gaps als Marktchancen.\n• Innovation Metrics: Messung des Beitrags von Sicherheitsinnovationen zu Umsatzwachstum, Marktanteilsgewinnen und Kundenzufriedenheit."
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
