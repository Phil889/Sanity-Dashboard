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
    console.log('Updating DORA Anwendungsbereich page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-anwendungsbereich-scope' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-anwendungsbereich-scope" not found')
    }
    
    // Create new FAQs for third-party providers and critical services
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie identifiziere ich kritische IKT-Services und welche Kriterien sind für die Bewertung der Kritikalität entscheidend?',
        answer: "Die Identifikation kritischer IKT-Services ist ein fundamentaler Schritt für DORA-Compliance und erfordert eine systematische Bewertung aller technologischen Abhängigkeiten Ihres Unternehmens. Diese Analyse geht weit über eine einfache Inventarisierung hinaus und erfordert ein tiefes Verständnis der Geschäftsprozesse und deren technologische Unterstützung.\n\n🎯 Kritikalitätskriterien nach DORA:\n• Systemrelevanz für kritische oder wichtige Funktionen des Finanzinstituts\n• Auswirkungen eines Service-Ausfalls auf die Geschäftskontinuität und Kundenservices\n• Verfügbarkeit von Alternativen und Substituierbarkeit des Services\n• Komplexität der Wiederherstellung bei Störungen oder Ausfällen\n• Anzahl der abhängigen Geschäftsprozesse und betroffenen Stakeholder\n\n🔍 Systematische Service-Bewertungsmethodik:\n• Mapping aller IKT-Services zu kritischen und wichtigen Geschäftsfunktionen\n• Bewertung der Recovery Time Objectives (RTO) und Recovery Point Objectives (RPO) für jeden Service\n• Analyse der Interdependenzen zwischen verschiedenen Services und Systemen\n• Quantifizierung der finanziellen und reputationalen Auswirkungen von Service-Ausfällen\n• Berücksichtigung regulatorischer Anforderungen und Compliance-Implikationen\n\n💼 Geschäftsprozess-orientierte Bewertung:\n• Identifikation aller Geschäftsprozesse, die für die Erbringung kritischer oder wichtiger Funktionen erforderlich sind\n• Bewertung der IKT-Abhängigkeiten jedes Geschäftsprozesses\n• Analyse der End-to-End-Service-Ketten von der Kundeninteraktion bis zur Backend-Verarbeitung\n• Berücksichtigung von Peak-Zeiten und außergewöhnlichen Geschäftssituationen\n• Integration von Notfall- und Krisenszenarios in die Bewertung\n\n🌐 Drittanbieter-Service-Klassifizierung:\n• Bewertung der Kritikalität von Cloud-Services, Software-as-a-Service und Platform-as-a-Service\n• Analyse von Datenverarbeitungs- und Speicherservices hinsichtlich ihrer Geschäftsrelevanz\n• Bewertung von Kommunikations- und Kollaborationsplattformen\n• Berücksichtigung von Cybersecurity-Services und deren Auswirkungen auf die Gesamtsicherheit\n• Analyse von Backup- und Disaster-Recovery-Services als kritische Infrastrukturkomponenten"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche spezifischen Anforderungen gelten für das Management von Drittanbieter-Beziehungen unter DORA?',
        answer: "DORA etabliert umfassende Anforderungen für das Drittanbieter-Risikomanagement, die weit über traditionelle Vendor-Management-Praktiken hinausgehen. Diese Anforderungen zielen darauf ab, die digitale operationelle Resilienz des gesamten Finanzökosystems zu stärken und systemische Risiken zu minimieren.\n\n📋 Umfassende Due-Diligence-Anforderungen:\n• Detaillierte Bewertung der IKT-Sicherheitsmaßnahmen und Risikomanagement-Praktiken des Drittanbieters\n• Analyse der finanziellen Stabilität und Geschäftskontinuitätsfähigkeiten des Anbieters\n• Bewertung der Governance-Strukturen und Compliance-Kultur des Drittanbieters\n• Prüfung der Subunternehmer-Ketten und deren potenzielle Risiken\n• Bewertung der geografischen Verteilung und Konzentration der Anbieter-Infrastruktur\n\n🔐 Vertragliche Sicherheitsanforderungen:\n• Verpflichtende Aufnahme spezifischer DORA-Compliance-Klauseln in alle Drittanbieter-Verträge\n• Detaillierte Service-Level-Agreements mit messbaren Sicherheits- und Verfügbarkeitskennzahlen\n• Umfassende Audit-Rechte und Zugangsrechte für Compliance-Prüfungen\n• Klare Incident-Reporting-Verpflichtungen und Eskalationsprozeduren\n• Exit-Klauseln und Datenrückgabe-Vereinbarungen für Notfallsituationen\n\n🔍 Kontinuierliche Überwachung und Monitoring:\n• Implementierung regelmäßiger Risikobewertungen und Performance-Reviews\n• Etablierung von Echtzeit-Monitoring-Systemen für kritische Services\n• Durchführung regelmäßiger Penetrationstests und Vulnerability-Assessments\n• Überwachung der Compliance des Drittanbieters mit vereinbarten Sicherheitsstandards\n• Tracking von Änderungen in der Anbieter-Infrastruktur und deren Risikoimplika­tionen\n\n📊 Risiko-Konzentrations-Management:\n• Systematische Analyse und Überwachung von Anbieter-Konzentrationen\n• Bewertung systemischer Risiken durch gemeinsame Abhängigkeiten mehrerer Finanzinstitute\n• Entwicklung von Diversifikationsstrategien zur Reduzierung von Konzentrationsrisiken\n• Koordination mit anderen Finanzinstituten zur Bewertung systemischer Drittanbieter-Risiken\n• Implementierung von Limits und Schwellenwerten für kritische Anbieter-Abhängigkeiten\n\n🚨 Incident-Management und Business-Continuity:\n• Entwicklung gemeinsamer Incident-Response-Pläne mit kritischen Drittanbietern\n• Etablierung direkter Kommunikationskanäle für Notfallsituationen\n• Regelmäßige Tests der Business-Continuity-Pläne unter Einbeziehung der Drittanbieter\n• Koordination von Disaster-Recovery-Übungen mit allen kritischen Service-Providern\n• Entwicklung alternativer Service-Arrangements für kritische Funktionen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie gehe ich mit Cloud-Services und deren DORA-Compliance um, insbesondere bei Multi-Cloud-Strategien?',
        answer: "Cloud-Services stellen eine besondere Herausforderung für DORA-Compliance dar, da sie oft kritische Geschäftsfunktionen unterstützen und gleichzeitig komplexe Abhängigkeiten und Risiken schaffen. Multi-Cloud-Strategien verstärken diese Komplexität zusätzlich und erfordern einen durchdachten Governance-Ansatz.\n\n☁️ Cloud-spezifische DORA-Anforderungen:\n• Detaillierte Bewertung der Sicherheitsarchitektur und Compliance-Zertifizierungen des Cloud-Providers\n• Analyse der Datenresidenz und -souveränität in Bezug auf regulatorische Anforderungen\n• Bewertung der Verschlüsselungsstandards und Schlüsselmanagement-Praktiken\n• Prüfung der Backup- und Disaster-Recovery-Fähigkeiten des Cloud-Anbieters\n• Bewertung der Netzwerksicherheit und Isolation zwischen verschiedenen Kunden\n\n🌐 Multi-Cloud-Governance und -Koordination:\n• Entwicklung einheitlicher Sicherheitsstandards und Compliance-Anforderungen für alle Cloud-Provider\n• Implementierung zentraler Überwachungs- und Management-Tools für Multi-Cloud-Umgebungen\n• Koordination von Incident-Response-Prozessen zwischen verschiedenen Cloud-Anbietern\n• Harmonisierung von Vertragsstrukturen und Service-Level-Agreements\n• Etablierung konsistenter Audit- und Compliance-Monitoring-Praktiken\n\n🔒 Risikomanagement in Cloud-Umgebungen:\n• Bewertung der Shared-Responsibility-Modelle und klare Abgrenzung der Verantwortlichkeiten\n• Implementierung zusätzlicher Sicherheitskontrollen für kritische Workloads\n• Überwachung der Cloud-Provider-Performance und -Verfügbarkeit\n• Bewertung der Auswirkungen von Cloud-Provider-Ausfällen auf kritische Geschäftsfunktionen\n• Entwicklung von Cloud-Exit-Strategien und Datenportabilitätsplänen\n\n📋 Compliance-Dokumentation und -Nachweis:\n• Sammlung und Bewertung aller relevanten Compliance-Zertifizierungen der Cloud-Provider\n• Dokumentation der Datenflüsse und -verarbeitung in Cloud-Umgebungen\n• Nachweis der Einhaltung von Datenschutz- und Datenlokalisierungsanforderungen\n• Dokumentation der implementierten Sicherheitskontrollen und deren Wirksamkeit\n• Regelmäßige Compliance-Assessments und Gap-Analysen für alle Cloud-Services\n\n🔄 Kontinuierliche Optimierung und Anpassung:\n• Regelmäßige Überprüfung und Anpassung der Multi-Cloud-Strategie basierend auf sich ändernden Anforderungen\n• Monitoring neuer Cloud-Services und deren potenzielle Auswirkungen auf die DORA-Compliance\n• Bewertung emerging Technologies wie Serverless Computing und Container-Orchestrierung\n• Anpassung der Governance-Strukturen an die Evolution der Cloud-Landschaft\n• Integration neuer Compliance-Anforderungen in bestehende Cloud-Governance-Frameworks"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Rolle spielen Intra-Konzern-Services bei der DORA-Scope-Bestimmung und wie sind diese zu bewerten?',
        answer: "Intra-Konzern-Services stellen eine besondere Kategorie von IKT-Dienstleistungen dar, die spezielle Überlegungen für die DORA-Compliance erfordern. Obwohl diese Services innerhalb derselben Unternehmensgruppe erbracht werden, unterliegen sie dennoch bestimmten DORA-Anforderungen und können erhebliche Risiken für die operative Resilienz darstellen.\n\n🏢 Klassifizierung von Intra-Konzern-Services:\n• Intra-Konzern-Services werden grundsätzlich als IKT-Drittanbieter-Services betrachtet, wenn sie von separaten juristischen Entitäten erbracht werden\n• Die geografische Lage der Service-erbringenden Entität kann zusätzliche regulatorische Überlegungen auslösen\n• Shared-Service-Center und zentrale IT-Funktionen fallen typischerweise unter diese Kategorie\n• Outsourcing an Konzerngesellschaften in Drittländern erfordert besondere Aufmerksamkeit\n• Die Bewertung muss sowohl die rechtliche als auch die operative Struktur berücksichtigen\n\n🔍 Risikobewertung und Due-Diligence:\n• Auch bei Intra-Konzern-Services ist eine formelle Risikobewertung erforderlich\n• Die Bewertung sollte die finanzielle Stabilität und operative Kapazität der Service-erbringenden Entität umfassen\n• Governance-Strukturen und Berichtswege müssen klar definiert und dokumentiert werden\n• Die Abhängigkeit von gemeinsamen Infrastrukturen und Ressourcen muss bewertet werden\n• Potenzielle Interessenkonflikte und deren Management müssen berücksichtigt werden\n\n📋 Vertragliche und Governance-Anforderungen:\n• Formelle Service-Level-Agreements sind auch für Intra-Konzern-Services erforderlich\n• Klare Verantwortlichkeiten und Rechenschaftspflichten müssen definiert werden\n• Incident-Management und Eskalationsprozesse müssen etabliert und dokumentiert werden\n• Audit-Rechte und Überwachungsmechanismen müssen implementiert werden\n• Exit-Strategien und alternative Arrangements müssen für kritische Services entwickelt werden\n\n🌍 Grenzüberschreitende Überlegungen:\n• Services von Konzerngesellschaften in Drittländern können zusätzliche regulatorische Anforderungen auslösen\n• Datenschutz- und Datenlokalisierungsanforderungen müssen berücksichtigt werden\n• Unterschiedliche rechtliche und regulatorische Rahmenbedingungen können Compliance-Herausforderungen schaffen\n• Politische und wirtschaftliche Risiken in den Ländern der Service-Provider müssen bewertet werden\n• Währungs- und Transferrisiken können die Service-Kontinuität beeinträchtigen\n\n🔄 Kontinuierliche Überwachung und Management:\n• Regelmäßige Performance-Reviews und Risikobewertungen sind erforderlich\n• Änderungen in der Konzernstruktur oder -strategie müssen auf ihre Auswirkungen auf die Services bewertet werden\n• Die Entwicklung der regulatorischen Landschaft in verschiedenen Jurisdiktionen muss überwacht werden\n• Business-Continuity-Pläne müssen regelmäßig getestet und aktualisiert werden\n• Die Integration von Intra-Konzern-Services in die Gesamtstrategie für Drittanbieter-Risikomanagement ist essentiell"
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
    console.log('✅ FAQ batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
