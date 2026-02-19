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
    console.log('Updating Disaster Recovery page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'disaster-recovery' })
    
    if (!existingDoc) {
      throw new Error('Document "disaster-recovery" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Welche Rolle spielen regelmäßige Tests und Simulationen in ADVISORI's Disaster Recovery Ansatz, und wie wird die C-Suite über die Ergebnisse und notwendige Anpassungen informiert?",
        answer: "Für C-Level-Entscheider ist die Gewissheit, dass eine Disaster Recovery (DR) Strategie im Ernstfall auch tatsächlich funktioniert, von höchster Bedeutung. ADVISORI legt daher größten Wert auf regelmäßige, realitätsnahe Tests und Simulationen. Diese dienen nicht nur der technischen Validierung, sondern auch der kontinuierlichen Verbesserung und der transparenten Berichterstattung an die Führungsebene.\n\n🧪 Umfassende Testmethodik:\n• Geplante Testzyklen: Wir definieren gemeinsam mit Ihnen einen Testkalender, der verschiedene Testarten und -umfänge berücksichtigt – von Desktop-Übungen (Tabletop-Tests) über Komponententests bis hin zu vollständigen Failover-Simulationen.\n• Realitätsnahe Szenarien: Die Tests basieren auf plausiblen Bedrohungsszenarien, die für Ihr Unternehmen relevant sind, einschließlich technischer Ausfälle, Cyberangriffe oder Naturkatastrophen.\n• Messung von RTO und RPO: Ein Kernziel der Tests ist die Überprüfung, ob die definierten Recovery Time Objectives (RTO) und Recovery Point Objectives (RPO) unter realen Bedingungen eingehalten werden können.\n• Einbeziehung relevanter Stakeholder: Je nach Testumfang werden nicht nur IT-Teams, sondern auch Vertreter der Fachbereiche und des Krisenmanagements in die Übungen involviert.\n\n📊 Transparente Berichterstattung an die C-Suite:\n• Detaillierte Testberichte: Nach jedem Test erhalten Sie einen umfassenden Bericht, der die Durchführung, die erzielten Ergebnisse (inkl. RTO/RPO-Messung), identifizierte Schwachstellen und konkrete Handlungsempfehlungen dokumentiert.\n• Management Summary: Für die C-Suite wird ein prägnanter Management Summary erstellt, der die wesentlichen Erkenntnisse, die Auswirkungen auf die Geschäftsrisiken und die vorgeschlagenen Maßnahmen klar und verständlich darlegt.\n• Kontinuierlicher Verbesserungsprozess (KVP): Die Testergebnisse fließen direkt in einen KVP ein. Wir erarbeiten gemeinsam mit Ihnen Maßnahmen zur Behebung von Schwachstellen und zur Optimierung der DR-Strategie.\n• Nachweis für Audits und Compliance: Die dokumentierten Testergebnisse dienen als wichtiger Nachweis für interne und externe Audits sowie zur Erfüllung von Compliance-Anforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Wie unterstützt ADVISORI die C-Suite bei der Einhaltung komplexer regulatorischer Anforderungen (z.B. DORA, KRITIS, branchenspezifische Auflagen) im Kontext von Disaster Recovery?",
        answer: "Die Einhaltung einer stetig wachsenden Zahl von regulatorischen Anforderungen stellt für die C-Suite eine erhebliche Herausforderung dar. ADVISORI versteht die Komplexität dieser Vorgaben und unterstützt Sie aktiv dabei, Ihre Disaster Recovery (DR) Strategie und -Maßnahmen konform zu gestalten und dies auch nachzuweisen.\n\n📜 Expertise in relevanten Regularien:\n• Tiefgehendes Verständnis aktueller Gesetze und Standards: Unsere Experten verfolgen kontinuierlich die Entwicklungen relevanter Regularien wie DORA (Digital Operational Resilience Act), KRITIS-Verordnungen, DSGVO, ISO-Standards (z.B. ISO 22301 für BCM) sowie branchenspezifische Auflagen (z.B. MaRisk/BAIT/VAIT für Finanzinstitute).\n• Gap-Analysen und Compliance-Checks: Wir führen detaillierte Analysen durch, um Abweichungen Ihrer aktuellen DR-Fähigkeiten von den regulatorischen Anforderungen zu identifizieren.\n• Entwicklung konformer DR-Konzepte: Unsere DR-Strategien werden so konzipiert, dass sie die spezifischen Anforderungen der für Sie relevanten Regularien berücksichtigen, beispielsweise hinsichtlich RTO/RPO-Vorgaben, Testfrequenzen, Datenspeicherung und Dokumentation.\n\n🤝 Unterstützung im Compliance-Prozess:\n• Audit-Vorbereitung und -Begleitung: Wir helfen Ihnen bei der Vorbereitung auf interne und externe Audits, indem wir die notwendige Dokumentation zusammenstellen und Ihre Teams auf Prüfungsgespräche vorbereiten.\n• Erstellung von Nachweisdokumentationen: Wir unterstützen Sie bei der Erstellung der erforderlichen Nachweise, Berichte und Richtlinien, die von Regulierungsbehörden oder Auditoren gefordert werden.\n• Beratung zu technischen und organisatorischen Maßnahmen (TOMs): Wir beraten Sie bei der Implementierung der notwendigen TOMs, um die regulatorischen Anforderungen im DR-Kontext zu erfüllen.\n• Schulung und Sensibilisierung: Wir bieten Schulungen für Ihre Mitarbeiter an, um das Bewusstsein für Compliance-Anforderungen im Bereich DR zu schärfen und sicherzustellen, dass die Prozesse gelebt werden.\n• Kontinuierliches Compliance-Monitoring: Auf Wunsch unterstützen wir Sie dabei, ein System zum kontinuierlichen Monitoring der Compliance Ihrer DR-Maßnahmen zu etablieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Viele DR-Lösungen fokussieren sich rein auf Technologie. Wie integriert ADVISORI den Faktor Mensch und organisatorische Prozesse, um eine wirklich umfassende Resilienz für unser Unternehmen zu schaffen?",
        answer: "Technologie ist zweifellos ein wichtiger Pfeiler jeder Disaster Recovery (DR) Strategie. Für eine wirklich umfassende Resilienz, die von der C-Suite erwartet wird, ist jedoch die Integration von Mensch und Organisation ebenso entscheidend. ADVISORI verfolgt einen holistischen Ansatz, der Technologie, Prozesse und Menschen gleichermaßen berücksichtigt, um eine widerstandsfähige Unternehmenskultur zu etablieren.\n\n🔗 Der Dreiklang: Technologie, Prozesse, Menschen:\n• Technologie als Enabler: Wir setzen modernste Technologien ein, um robuste und effiziente DR-Lösungen zu realisieren. Dies umfasst Automatisierung, fortschrittliche Replikationsverfahren und sichere Infrastrukturen.\n• Optimierte und gelebte Prozesse: Technologie allein ist wirkungslos ohne klar definierte, dokumentierte und regelmäßig getestete Prozesse. Wir helfen Ihnen, Ihre DR-Abläufe zu standardisieren, Verantwortlichkeiten festzulegen und die Prozesse in Ihrer Organisation zu verankern.\n• Befähigte und sensibilisierte Mitarbeiter (Der Faktor Mensch): Ihre Mitarbeiter sind im Ernstfall die entscheidenden Akteure. Wir legen großen Wert auf:\n    • Schulung und Training: Regelmäßige Schulungen und Übungen für alle relevanten Mitarbeiter – von IT-Spezialisten bis hin zu Endanwendern und Krisenstabmitgliedern.\n    • Klare Rollen und Verantwortlichkeiten: Eindeutige Zuweisung von Aufgaben und Entscheidungskompetenzen im DR-Fall.\n    • Awareness-Programme: Sensibilisierung für die Bedeutung von DR und die Rolle jedes Einzelnen bei der Aufrechterhaltung der Geschäftskontinuität.\n    • Change Management: Begleitung organisatorischer Veränderungen, die mit der Einführung oder Anpassung von DR-Strategien einhergehen.\n\n🏢 Aufbau einer resilienten Organisationskultur:\n• Top-Management-Commitment: Wir unterstützen die C-Suite dabei, die Bedeutung von Resilienz im gesamten Unternehmen zu kommunizieren und als strategische Priorität zu verankern.\n• Integration in die Unternehmenskultur: Förderung eines Sicherheits- und Resilienzbewusstseins, das über reine Compliance hinausgeht und Teil der täglichen Arbeit wird.\n• Kontinuierliches Lernen und Verbesserung: Etablierung einer Kultur, in der aus Tests, Übungen und realen Vorfällen gelernt wird, um die Resilienz kontinuierlich zu steigern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Welchen Support und welche Service-Level-Agreements (SLAs) können wir von ADVISORI nach der Implementierung der Disaster Recovery Lösung erwarten, um den laufenden Betrieb und die schnelle Reaktion im Notfall sicherzustellen?",
        answer: "Die Implementierung einer Disaster Recovery (DR) Lösung ist nur der erste Schritt. Für die C-Suite ist die kontinuierliche Unterstützung und die Verlässlichkeit im Ernstfall entscheidend. ADVISORI bietet umfassende Post-Implementierungs-Services und klar definierte Service Level Agreements (SLAs), um den reibungslosen Betrieb Ihrer DR-Umgebung und eine schnelle, effektive Reaktion im Notfall zu gewährleisten.\n\n🛠️ Umfassender Support und Managed Services:\n• 24/7 Monitoring und Alarmierung: Kontinuierliche Überwachung Ihrer DR-Infrastruktur und -Prozesse mit proaktiver Benachrichtigung bei kritischen Ereignissen oder Abweichungen.\n• Technischer Support durch Experten: Direkter Zugang zu unseren zertifizierten DR-Spezialisten für schnelle Fehlerbehebung und technische Unterstützung.\n• Regelmäßige Wartung und Updates: Planung und Durchführung von Wartungsarbeiten, Software-Updates und Patch-Management für die DR-Systeme, um deren Sicherheit und Leistungsfähigkeit zu gewährleisten.\n• Managed DR Services (optional): Auf Wunsch übernehmen wir den vollständigen Betrieb Ihrer DR-Umgebung, inklusive regelmäßiger Tests, Überwachung und Management im Notfall.\n\n📋 Klar definierte Service Level Agreements (SLAs):\n• Garantierte Reaktionszeiten: Festgelegte Zeiten, innerhalb derer unsere Experten im Supportfall oder bei einer Notfallmeldung reagieren.\n• Vereinbarte Wiederherstellungszeiten (RTOs): SLAs, die die maximal tolerierbare Zeit für die Wiederherstellung Ihrer kritischen Systeme und Daten definieren.\n• Definierte Wiederherstellungspunkte (RPOs): SLAs, die den maximal tolerierbaren Datenverlust im Falle eines Ausfalls festlegen.\n• Transparente Berichterstattung: Regelmäßige Reports über die Einhaltung der SLAs, Systemverfügbarkeit und durchgeführte Support-Aktivitäten.\n\n🆘 Unterstützung im Notfall:\n• Dediziertes Notfall-Team: Im Falle einer ausgerufenen Katastrophe steht Ihnen ein dediziertes Team von ADVISORI-Experten zur Seite, um den Wiederherstellungsprozess zu koordinieren und zu unterstützen.\n• Eskalationspfade: Klare Eskalationsprozeduren, um im Bedarfsfall schnell die richtigen Entscheidungsträger und Spezialisten einzubinden.\n• Unterstützung bei der Krisenkommunikation (optional): Beratung und Unterstützung bei der internen und externen Kommunikation während eines schwerwiegenden Vorfalls."
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
    console.log('✅ C-Level FAQs batch 4 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
