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
    console.log('Updating DORA ISO 27001 Mapping page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-iso-27001-mapping' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-iso-27001-mapping" not found')
    }
    
    // Create new FAQs for DORA ISO 27001 mapping fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Wie kann ich meine bestehende ISO 27001 Zertifizierung optimal für die DORA-Compliance nutzen?',
        answer: "Eine bestehende ISO 27001 Zertifizierung bildet eine hervorragende Grundlage für die DORA-Compliance und kann erhebliche Synergien schaffen. Die strategische Nutzung dieser Investition erfordert jedoch ein systematisches Vorgehen, um sowohl die Überschneidungen zu maximieren als auch die spezifischen DORA-Anforderungen zu erfüllen, die über ISO 27001 hinausgehen.\n\n🔗 Strategische Mapping-Analyse:\n• Führen Sie eine detaillierte Analyse Ihrer aktuellen ISO 27001 Controls durch und identifizieren Sie deren direkte Anwendbarkeit auf DORA-Anforderungen\n• Bewerten Sie die Abdeckungsgrade verschiedener DORA-Bereiche durch Ihre bestehenden Sicherheitsmaßnahmen\n• Dokumentieren Sie systematisch, welche ISO 27001 Controls bereits DORA-konforme Ergebnisse liefern\n• Identifizieren Sie Bereiche, in denen bestehende Controls erweitert oder angepasst werden müssen\n• Erstellen Sie eine Prioritätenliste für notwendige Ergänzungen basierend auf Risikobewertung und regulatorischen Fristen\n\n📋 Governance-Integration und Prozessharmonisierung:\n• Erweitern Sie Ihre bestehende ISO 27001 Governance-Struktur um DORA-spezifische Verantwortlichkeiten und Berichtswege\n• Integrieren Sie DORA-Anforderungen in bestehende Risikomanagement-Prozesse und -Bewertungen\n• Harmonisieren Sie Incident-Response-Verfahren, um sowohl ISO 27001 als auch DORA-Berichtspflichten zu erfüllen\n• Erweitern Sie bestehende Business-Continuity-Pläne um DORA-spezifische Resilienz-Anforderungen\n• Entwickeln Sie integrierte Audit-Zyklen, die beide Compliance-Bereiche effizient abdecken\n\n🎯 Spezifische DORA-Erweiterungen identifizieren:\n• Analysieren Sie DORA-spezifische Anforderungen wie erweiterte Drittanbieter-Überwachung, die über ISO 27001 hinausgehen\n• Bewerten Sie zusätzliche Berichtspflichten und Incident-Kategorien, die DORA einführt\n• Identifizieren Sie neue Dokumentationsanforderungen, die Ihre bestehende ISO 27001 Dokumentation ergänzen müssen\n• Prüfen Sie DORA-spezifische Testing-Anforderungen und deren Integration in bestehende Audit-Programme\n• Entwickeln Sie Strategien für die Integration von DORA-Oversight-Funktionen in bestehende Governance-Strukturen\n\n💡 Praktische Umsetzungsstrategien:\n• Nutzen Sie bestehende ISO 27001 Schulungs- und Awareness-Programme als Basis für DORA-spezifische Erweiterungen\n• Erweitern Sie vorhandene Monitoring- und Reporting-Tools um DORA-relevante Metriken und Dashboards\n• Integrieren Sie DORA-Anforderungen in bestehende Change-Management-Prozesse\n• Entwickeln Sie eine einheitliche Dokumentationsstruktur, die beide Standards effizient bedient\n• Schaffen Sie klare Verbindungen zwischen ISO 27001 Evidence und DORA-Compliance-Nachweisen für effiziente Audit-Vorbereitung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche ISO 27001 Controls decken bereits DORA-Anforderungen ab und wo bestehen die größten Gaps?',
        answer: "Die Analyse der Überschneidungen zwischen ISO 27001 und DORA zeigt sowohl erhebliche Synergien als auch spezifische Bereiche, in denen zusätzliche Maßnahmen erforderlich sind. Ein systematisches Control-Mapping ist entscheidend, um bestehende Investitionen optimal zu nutzen und gleichzeitig Compliance-Lücken effizient zu schließen.\n\n✅ Starke Überschneidungen und direkte Anwendbarkeit:\n• Informationssicherheits-Governance und -Management entsprechen weitgehend DORA-Governance-Anforderungen\n• Incident-Management-Prozesse aus ISO 27001 bilden eine solide Grundlage für DORA-Incident-Reporting\n• Risikomanagement-Frameworks und -Methoden sind größtenteils kompatibel mit DORA-Risikomanagement-Anforderungen\n• Business-Continuity und Disaster-Recovery-Planungen decken viele DORA-Resilienz-Aspekte ab\n• Access-Control und Identity-Management-Systeme erfüllen grundlegende DORA-Sicherheitsanforderungen\n\n🔍 Bereiche mit partieller Abdeckung und Erweiterungsbedarf:\n• Drittanbieter-Management erfordert erhebliche Erweiterungen um DORA-spezifische Überwachungs- und Berichtspflichten\n• Vulnerability-Management muss um kontinuierliche Threat-Intelligence und erweiterte Testing-Anforderungen ergänzt werden\n• Change-Management-Prozesse benötigen zusätzliche Kontrollen für kritische IKT-Systeme und -Services\n• Monitoring und Logging müssen um DORA-spezifische Metriken und Alerting-Mechanismen erweitert werden\n• Dokumentations- und Record-Keeping-Prozesse erfordern Anpassungen an DORA-spezifische Aufbewahrungsfristen\n\n❌ Signifikante Gaps und neue Anforderungen:\n• DORA-spezifische Berichtspflichten an Aufsichtsbehörden haben keine direkte ISO 27001 Entsprechung\n• Erweiterte Drittanbieter-Oversight und kritische Service-Provider-Management gehen über ISO 27001 hinaus\n• Spezifische Testing-Anforderungen wie Threat-Led Penetration Testing sind in ISO 27001 nicht explizit gefordert\n• DORA-konforme Incident-Klassifizierung und -Eskalation erfordern neue Prozesse und Kriterien\n• Regulatorische Kommunikation und Stakeholder-Management sind nicht Teil des ISO 27001 Scopes\n\n🎯 Strategische Gap-Closing-Ansätze:\n• Entwickeln Sie eine Mapping-Matrix, die jede DORA-Anforderung spezifischen ISO 27001 Controls zuordnet\n• Priorisieren Sie Gap-Closing-Maßnahmen basierend auf regulatorischen Fristen und Geschäftsauswirkungen\n• Nutzen Sie bestehende ISO 27001 Prozesse als Ausgangspunkt für DORA-spezifische Erweiterungen\n• Implementieren Sie integrierte Monitoring-Dashboards, die beide Compliance-Bereiche abdecken\n• Schaffen Sie einheitliche Schulungs- und Awareness-Programme, die sowohl ISO 27001 als auch DORA-Anforderungen vermitteln"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie entwickle ich eine integrierte Governance-Struktur für ISO 27001 und DORA-Compliance?',
        answer: "Die Entwicklung einer integrierten Governance-Struktur für ISO 27001 und DORA erfordert eine strategische Herangehensweise, die beide Frameworks harmonisch verbindet, ohne die spezifischen Anforderungen jedes Standards zu verwässern. Eine effektive Integration schafft Synergien, reduziert Redundanzen und gewährleistet eine kohärente Sicherheits- und Compliance-Strategie.\n\n🏛️ Governance-Architektur und Organisationsstruktur:\n• Erweitern Sie bestehende Information Security Committees um DORA-spezifische Verantwortlichkeiten und Expertise\n• Schaffen Sie klare Rollen und Verantwortlichkeiten, die sowohl ISO 27001 als auch DORA-Anforderungen abdecken\n• Etablieren Sie Cross-funktionale Teams, die beide Compliance-Bereiche koordinieren und Synergien identifizieren\n• Entwickeln Sie integrierte Berichtsstrukturen, die sowohl interne Stakeholder als auch regulatorische Anforderungen bedienen\n• Implementieren Sie einheitliche Eskalationspfade für Incidents und Risiken, die beide Frameworks berücksichtigen\n\n📊 Integrierte Richtlinien und Verfahrensentwicklung:\n• Harmonisieren Sie bestehende ISO 27001 Richtlinien mit DORA-spezifischen Anforderungen durch gezielte Erweiterungen\n• Entwickeln Sie einheitliche Risikomanagement-Verfahren, die beide Standards effizient bedienen\n• Schaffen Sie integrierte Incident-Response-Prozesse, die sowohl ISO 27001 als auch DORA-Berichtspflichten erfüllen\n• Etablieren Sie gemeinsame Audit- und Review-Zyklen, die Redundanzen minimieren und Effizienz maximieren\n• Implementieren Sie einheitliche Change-Management-Prozesse für alle sicherheitsrelevanten Systeme und Prozesse\n\n🔄 Prozessintegration und Workflow-Optimierung:\n• Entwickeln Sie integrierte Monitoring-Dashboards, die KPIs für beide Compliance-Bereiche in einer einheitlichen Sicht darstellen\n• Schaffen Sie automatisierte Workflows, die Compliance-Aktivitäten für beide Standards parallel durchführen\n• Implementieren Sie einheitliche Dokumentations- und Evidence-Collection-Prozesse\n• Etablieren Sie gemeinsame Training- und Awareness-Programme, die beide Frameworks abdecken\n• Entwickeln Sie integrierte Vendor-Management-Prozesse, die sowohl ISO 27001 als auch DORA-Anforderungen erfüllen\n\n⚖️ Compliance-Monitoring und Performance-Management:\n• Schaffen Sie einheitliche Metriken und KPIs, die den Erfolg beider Compliance-Programme messen\n• Entwickeln Sie integrierte Reporting-Strukturen für Management und Aufsichtsbehörden\n• Implementieren Sie kontinuierliche Monitoring-Prozesse, die beide Standards gleichzeitig überwachen\n• Etablieren Sie regelmäßige Management-Reviews, die beide Compliance-Bereiche strategisch bewerten\n• Schaffen Sie Feedback-Mechanismen, die kontinuierliche Verbesserungen in beiden Bereichen fördern"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche praktischen Schritte sind erforderlich, um meine ISO 27001 Dokumentation für DORA-Compliance zu erweitern?',
        answer: "Die Erweiterung bestehender ISO 27001 Dokumentation für DORA-Compliance erfordert einen systematischen Ansatz, der sowohl die Kontinuität bewährter Prozesse gewährleistet als auch die spezifischen regulatorischen Anforderungen von DORA erfüllt. Eine strategische Dokumentationserweiterung schafft Effizienz und vermeidet Redundanzen.\n\n📋 Dokumentations-Gap-Analyse und Mapping:\n• Führen Sie eine umfassende Analyse Ihrer bestehenden ISO 27001 Dokumentation durch und identifizieren Sie DORA-relevante Inhalte\n• Erstellen Sie eine Mapping-Matrix, die bestehende Dokumente den entsprechenden DORA-Anforderungen zuordnet\n• Identifizieren Sie Bereiche, in denen bestehende Dokumentation erweitert werden muss, um DORA-Spezifika abzudecken\n• Bewerten Sie die Qualität und Aktualität bestehender Dokumentation im Kontext der DORA-Anforderungen\n• Entwickeln Sie eine Priorisierungsstrategie für Dokumentationserweiterungen basierend auf regulatorischen Fristen und Geschäftsauswirkungen\n\n🔧 Systematische Dokumentationserweiterung:\n• Erweitern Sie bestehende Risikomanagement-Dokumentation um DORA-spezifische Risikokategorien und Bewertungskriterien\n• Ergänzen Sie Incident-Response-Verfahren um DORA-konforme Klassifizierung, Eskalation und Berichtspflichten\n• Erweitern Sie Business-Continuity-Pläne um spezifische DORA-Resilienz-Anforderungen und Recovery-Ziele\n• Ergänzen Sie Drittanbieter-Management-Dokumentation um erweiterte Due-Diligence und Monitoring-Anforderungen\n• Erweitern Sie bestehende Audit- und Testing-Verfahren um DORA-spezifische Anforderungen wie Threat-Led Penetration Testing\n\n📝 Neue DORA-spezifische Dokumentationselemente:\n• Entwickeln Sie spezifische Verfahren für die Kommunikation mit Aufsichtsbehörden und regulatorisches Reporting\n• Erstellen Sie Dokumentation für DORA-spezifische Governance-Strukturen und Verantwortlichkeiten\n• Entwickeln Sie Verfahren für die erweiterte Drittanbieter-Oversight und kritische Service-Provider-Management\n• Schaffen Sie Dokumentation für DORA-konforme Incident-Kategorisierung und -Berichterstattung\n• Etablieren Sie Verfahren für kontinuierliche Threat-Intelligence und erweiterte Monitoring-Anforderungen\n\n🔄 Dokumentations-Lifecycle und Maintenance:\n• Implementieren Sie integrierte Review- und Update-Zyklen, die beide Compliance-Bereiche effizient bedienen\n• Schaffen Sie Versionskontroll- und Change-Management-Prozesse für die erweiterte Dokumentationslandschaft\n• Entwickeln Sie Training-Materialien, die Mitarbeiter über die erweiterten Verfahren und Anforderungen informieren\n• Etablieren Sie Qualitätssicherungsprozesse, die sowohl ISO 27001 als auch DORA-Konformität gewährleisten\n• Schaffen Sie automatisierte Reminder- und Review-Systeme für regelmäßige Dokumentationsaktualisierungen"
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
    console.log('✅ FAQ batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
