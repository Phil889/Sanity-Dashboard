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
    console.log('Updating KRITIS Meldepflichten Behördenkommunikation page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'kritis-meldepflichten-behoerdenkommunikation' })
    
    if (!existingDoc) {
      throw new Error('Document "kritis-meldepflichten-behoerdenkommunikation" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können KRITIS-Meldepflichten von einem Kostenfaktor zu einem strategischen Compliance-Vorteil für die C-Suite transformiert werden?",
        answer: "KRITIS-Meldepflichten sind weit mehr als regulatorische Bürokratie – sie sind ein strategisches Instrument zur Stärkung der Unternehmensresilienz und des Stakeholder-Vertrauens. Für die C-Suite bieten strukturierte Meldeverfahren die Möglichkeit, operative Exzellenz zu demonstrieren und gleichzeitig wertvolle Erkenntnisse für die strategische Weiterentwicklung zu gewinnen.\n\n📊 Strategische Transformation der Meldepflichten:\n• Proaktive Risikokommunikation: Systematische Meldungen zeigen Aufsichtsbehörden und Stakeholdern, dass das Unternehmen Risiken ernst nimmt und professionell managed.\n• Datenbasierte Entscheidungsfindung: Strukturierte Incident-Dokumentation liefert wertvolle Insights für strategische IT-Investitionen und Risikomanagement-Entscheidungen.\n• Vertrauensaufbau bei Regulatoren: Zuverlässige und transparente Berichterstattung stärkt die Beziehung zu Aufsichtsbehörden und kann bei zukünftigen Verhandlungen vorteilhaft sein.\n• Wettbewerbsdifferenzierung: Überlegene Compliance-Praktiken können als Qualitätsmerkmal gegenüber Kunden und Partnern positioniert werden.\n\n🎯 ADVISORI's strategischer Ansatz:\n• Integration in Governance-Strukturen: Wir betten Meldeverfahren nahtlos in bestehende Governance- und Reporting-Strukturen ein, um Synergien zu schaffen.\n• Automatisierung für Effizienz: Durch intelligente Automatisierung reduzieren wir den manuellen Aufwand erheblich und ermöglichen es Ihren Teams, sich auf wertschöpfende Aktivitäten zu konzentrieren.\n• Stakeholder-Management: Wir entwickeln Kommunikationsstrategien, die Meldepflichten als Zeichen für verantwortungsvolle Unternehmensführung positionieren.\n• Kontinuierliche Optimierung: Regelmäßige Analyse der Meldedaten zur Identifikation von Verbesserungspotenzialen in IT-Infrastruktur und Geschäftsprozessen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche konkreten finanziellen und reputationalen Risiken entstehen bei unzureichender KRITIS-Berichterstattung und wie quantifiziert ADVISORI diese?",
        answer: "Unzureichende KRITIS-Berichterstattung kann zu erheblichen direkten und indirekten Kosten führen, die weit über die unmittelbaren Bußgelder hinausgehen. Für die C-Suite ist eine präzise Quantifizierung dieser Risiken entscheidend für fundierte Investitionsentscheidungen in Compliance-Maßnahmen.\n\n💸 Direkte finanzielle Konsequenzen:\n• Bußgelder nach IT-SiG: Bis zu 50.000 Euro für fehlende oder verspätete Meldungen, bei schwerwiegenden Verstößen deutlich höhere Strafen möglich.\n• Nachprüfungskosten: Intensive BSI-Prüfungen bei Compliance-Verstößen können Personalressourcen für Wochen binden und externe Beratungskosten verursachen.\n• Verschärfte Auflagen: Zusätzliche Sicherheitsmaßnahmen und erhöhte Berichtspflichten als Folge von Verstößen bedeuten dauerhafte Mehrkosten.\n• Versicherungsprämien: Compliance-Verstöße können zu höheren Cyber-Versicherungsprämien oder sogar zur Verweigerung der Deckung führen.\n\n🔍 Langfristige Reputations- und Geschäftsrisiken:\n• Vertrauensverlust bei B2B-Kunden: Kritische Infrastrukturbetreiber sind auf das Vertrauen ihrer Geschäftspartner angewiesen – Compliance-Verstöße können zu Kundenverlusten führen.\n• Investoren-Reaktionen: ESG-bewusste Investoren bewerten Compliance-Risiken zunehmend kritisch, was sich auf Unternehmensbewertungen auswirken kann.\n• Erschwerte Geschäftsentwicklung: Neue Kunden und Partner führen verstärkt Due-Diligence-Prüfungen durch, bei denen Compliance-Historie eine wichtige Rolle spielt.\n• Talentakquisition: Top-Talente meiden zunehmend Unternehmen mit schlechter Compliance-Reputation.\n\n📈 ADVISORI's Risiko-Quantifizierungsmodell:\n• Monte-Carlo-Simulationen: Wahrscheinlichkeitsbasierte Modellierung verschiedener Compliance-Szenarien und deren finanzieller Auswirkungen.\n• Benchmark-Analysen: Vergleich mit Peer-Unternehmen zur realistischen Einschätzung von Marktreaktionen bei Compliance-Verstößen.\n• ROI-Berechnung: Präzise Gegenüberstellung der Investitionskosten für robuste Meldeverfahren versus potenzielle Schadenskosten.\n• Sensitivitätsanalysen: Identifikation der kritischsten Risikofaktoren und deren Einfluss auf die Gesamtrisikosituation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie stellt ADVISORI sicher, dass KRITIS-Meldeverfahren auch bei komplexen, unternehmensweiten IT-Störungen zuverlässig funktionieren?",
        answer: "Gerade in Krisensituationen, wenn KRITIS-Meldungen am kritischsten sind, versagen oft Standard-Kommunikationskanäle. ADVISORI entwickelt resiliente Meldearchitekturen, die auch unter extremen Bedingungen zuverlässig funktionieren und der C-Suite die Gewissheit geben, regulatorische Verpflichtungen auch in den schwierigsten Situationen erfüllen zu können.\n\n🛡️ Resiliente Meldearchitekturen:\n• Redundante Kommunikationswege: Implementation multipler, voneinander unabhängiger Meldeverfahren über verschiedene Technologien (Web, E-Mail, Telefon, mobile Apps).\n• Geografisch verteilte Backup-Systeme: Auslagerung kritischer Meldefunktionen auf externe, geografisch getrennte Rechenzentren zur Sicherstellung der Verfügbarkeit.\n• Offline-Notfallverfahren: Vordefinierte manuelle Prozesse und Kommunikationsketten für Szenarien mit totalem IT-Ausfall.\n• Automatische Failover-Mechanismen: Intelligente Systeme, die bei Ausfall des primären Meldewegs automatisch auf alternative Kanäle umschalten.\n\n⚡ Krisenerprobte Funktionalitäten:\n• Real-time Monitoring: Kontinuierliche Überwachung der Verfügbarkeit aller Meldesysteme mit sofortiger Alarmierung bei Ausfällen.\n• Priorisierte Meldungsweiterleitung: Intelligente Algorithmen zur automatischen Priorisierung und Eskalation kritischer Meldungen basierend auf Schweregrad und Auswirkungen.\n• Status-Dashboards für das Management: Echtzeitübersicht über alle laufenden Incidents und deren Meldestatus für die C-Suite.\n• Integration in Krisenmanagement: Nahtlose Einbindung der Meldeverfahren in bestehende Business Continuity und Krisenmanagement-Prozesse.\n\n🔧 ADVISORI's Implementierungsexzellenz:\n• Stress-Testing und Simulation: Regelmäßige Belastungstests und Krisensimulationen zur Validierung der Meldeverfahren unter realistischen Bedingungen.\n• 24/7 Support-Strukturen: Aufbau dedizierter Support-Teams für kritische Meldeprozesse mit garantierten Reaktionszeiten.\n• Kontinuierliche Optimierung: Lernen aus realen Incidents zur ständigen Verbesserung der Meldesystem-Resilienz.\n• Change Management: Umfassende Schulung aller Beteiligten für verschiedene Krisenszenarien und alternative Meldewege."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welchen strategischen Einfluss haben effektive KRITIS-Meldeverfahren auf die digitale Transformation und Geschäftsentwicklung?",
        answer: "Moderne KRITIS-Meldeverfahren sind ein fundamentaler Enabler für digitale Transformation und aggressive Geschäftsentwicklung. Für die C-Suite bedeutet dies, dass eine solide Compliance-Infrastruktur nicht nur Risiken mitigiert, sondern aktiv neue Geschäftsmöglichkeiten schafft und die Innovationsfähigkeit des Unternehmens stärkt.\n\n🚀 Digitale Transformation durch Compliance:\n• Datengetriebene Insights: Systematische Analyse von Incident-Daten liefert wertvolle Erkenntnisse für IT-Architekturentscheidungen und Technologie-Roadmaps.\n• Vertrauen für Cloud-Migration: Nachweisbare Incident-Management-Fähigkeiten schaffen Vertrauen für aggressive Cloud-first-Strategien und hybride Architekturen.\n• API-first Meldesysteme: Moderne, API-basierte Meldearchitekturen ermöglichen nahtlose Integration neuer Technologien und Services ohne Compliance-Kompromisse.\n• Automatisierung als Innovationstreiber: Hochautomatisierte Meldeverfahren setzen Ressourcen frei, die in innovative Projekte und digitale Initiativen investiert werden können.\n\n💼 Geschäftsentwicklung und Marktexpansion:\n• Internationale Expansion: Robuste Compliance-Frameworks erleichtern die Expansion in regulierte Märkte und schaffen Vertrauen bei internationalen Partnern.\n• M&A-Readiness: Gut dokumentierte und automatisierte Compliance-Prozesse erhöhen die Attraktivität bei Übernahmen und beschleunigen Due-Diligence-Verfahren.\n• Partnerschaft-Enablement: Zertifizierte Compliance-Fähigkeiten öffnen Türen zu strategischen Partnerschaften mit anderen kritischen Infrastrukturbetreibern.\n• Premium-Positionierung: Überlegene Compliance und Risikomanagement-Fähigkeiten können als Differenzierungsmerkmal für Premium-Pricing genutzt werden.\n\n🎯 ADVISORI's strategische Transformation:\n• Business-IT-Alignment: Wir sorgen dafür, dass Compliance-Investitionen direkt strategische Geschäftsziele unterstützen und messbare Business Value generieren.\n• Innovation-Sandbox: Schaffung sicherer Testumgebungen für neue Technologien mit integrierter Compliance-Überwachung.\n• Stakeholder-Kommunikation: Entwicklung von Narrativen, die Compliance-Exzellenz als Wettbewerbsvorteil und Wachstumstreiber positionieren.\n• Future-Proofing: Aufbau flexibler Compliance-Architekturen, die sich an zukünftige regulatorische Anforderungen und Geschäftsmodelle anpassen können."
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
