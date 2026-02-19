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
    console.log('Updating DORA NIS2 Vergleich page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-nis2-vergleich' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-nis2-vergleich" not found')
    }
    
    // Create new FAQs for DORA NIS2 comparison fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was sind die grundlegenden Unterschiede zwischen DORA und NIS2 in Bezug auf Anwendungsbereich und regulatorische Zielsetzung?',
        answer: "DORA und NIS2 repräsentieren zwei unterschiedliche regulatorische Ansätze zur Stärkung der Cybersecurity in Europa, die sich in ihrer Fokussierung, ihrem Anwendungsbereich und ihrer regulatorischen Philosophie erheblich unterscheiden. Das Verständnis dieser Unterschiede ist fundamental für die Entwicklung einer effektiven Compliance-Strategie.\n\n🎯 Regulatorische Fokussierung und Zielsetzung:\n• DORA konzentriert sich ausschließlich auf die digitale operationelle Resilienz von Finanzinstituten und deren Ökosystem\n• Die Regulierung zielt auf die Harmonisierung von IKT-Risikomanagement-Anforderungen im europäischen Finanzsektor ab\n• DORA adressiert spezifische Herausforderungen der Finanzbranche wie systemische Risiken und Marktintegrität\n• NIS2 verfolgt einen breiteren Ansatz zur Stärkung der Cybersecurity kritischer und wichtiger Infrastrukturen\n• Die Richtlinie zielt auf die Erhöhung des allgemeinen Cybersecurity-Niveaus in der EU ab\n\n🏢 Anwendungsbereich und betroffene Entitäten:\n• DORA erfasst alle Finanzinstitute unabhängig von ihrer Größe, einschließlich Banken, Versicherungen, Investmentfirmen und Krypto-Asset-Dienstleister\n• Die Regulierung erstreckt sich auch auf kritische IKT-Drittanbieter, die Services für Finanzinstitute erbringen\n• NIS2 gilt für Betreiber wesentlicher und wichtiger Dienste in verschiedenen Sektoren wie Energie, Transport, Gesundheitswesen und digitale Infrastruktur\n• Die Richtlinie verwendet größenbasierte Schwellenwerte und erfasst mittlere und große Unternehmen in definierten Sektoren\n• Finanzinstitute können unter beiden Regulierungen fallen, wenn sie auch als kritische Infrastruktur eingestuft werden\n\n📋 Regulatorischer Ansatz und Detailgrad:\n• DORA definiert sehr spezifische und detaillierte Anforderungen für IKT-Risikomanagement, Incident-Reporting und Drittanbieter-Management\n• Die Regulierung verwendet einen präskriptiven Ansatz mit klaren Mindeststandards und spezifischen Compliance-Verpflichtungen\n• NIS2 verfolgt einen prinzipienbasierten, risikoorientierten Ansatz mit mehr Flexibilität bei der Umsetzung\n• Die Richtlinie definiert Cybersecurity-Ziele und überlässt den Mitgliedstaaten und Unternehmen mehr Spielraum bei der konkreten Ausgestaltung\n• DORA hat einen stärkeren Fokus auf operative Resilienz, während NIS2 primär auf Cybersecurity-Maßnahmen abzielt\n\n🌍 Governance und Aufsichtsstrukturen:\n• DORA etabliert eine direkte europäische Aufsicht über kritische IKT-Drittanbieter durch die ESAs\n• Die Regulierung schafft harmonisierte Aufsichtspraktiken und einheitliche Standards im Finanzsektor\n• NIS2 basiert auf nationaler Umsetzung und Aufsicht durch die Mitgliedstaaten\n• Die Richtlinie ermöglicht unterschiedliche nationale Ansätze bei der Implementierung und Durchsetzung\n• Beide Regulierungen fördern die Zusammenarbeit zwischen Aufsichtsbehörden, jedoch auf unterschiedlichen Ebenen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie überschneiden sich die technischen Cybersecurity-Anforderungen von DORA und NIS2, und wo gibt es spezifische Unterschiede?',
        answer: "Die technischen Cybersecurity-Anforderungen von DORA und NIS2 weisen sowohl bedeutende Überschneidungen als auch spezifische Unterschiede auf, die eine koordinierte Herangehensweise bei der Implementierung erfordern. Das Verständnis dieser Nuancen ist entscheidend für eine effiziente Compliance-Strategie.\n\n🔒 Gemeinsame Cybersecurity-Grundlagen:\n• Beide Regulierungen fordern robuste Cybersecurity-Governance mit klaren Verantwortlichkeiten auf Führungsebene\n• Implementierung umfassender Risikomanagement-Frameworks zur Identifikation, Bewertung und Behandlung von Cyber-Risiken\n• Etablierung von Incident-Detection und Response-Capabilities mit definierten Eskalations- und Kommunikationsprozessen\n• Regelmäßige Durchführung von Vulnerability-Assessments und Penetrationstests zur Identifikation von Schwachstellen\n• Implementierung von Business-Continuity und Disaster-Recovery-Plänen für kritische Geschäftsprozesse\n\n🎯 DORA-spezifische technische Anforderungen:\n• Detaillierte IKT-Risikomanagement-Frameworks mit spezifischen Kontrollen für Finanzdienstleistungen\n• Umfassende Drittanbieter-Risikobewertungen mit kontinuierlicher Überwachung kritischer IKT-Services\n• Spezifische Anforderungen für digitale operationelle Resilienz-Tests einschließlich Threat-Led Penetration Testing\n• Detaillierte Incident-Reporting-Verpflichtungen mit spezifischen Zeitrahmen und Inhalten\n• Implementierung von IKT-bezogenen Incident-Response und Recovery-Plänen mit definierten Recovery-Zielen\n\n🛡️ NIS2-spezifische technische Schwerpunkte:\n• Risikobasierte Cybersecurity-Maßnahmen mit Fokus auf kritische Infrastrukturen und deren Schutz\n• Supply-Chain-Security-Maßnahmen zur Absicherung der gesamten Lieferkette\n• Implementierung von Multi-Faktor-Authentifizierung und Verschlüsselungstechnologien\n• Network-Segmentation und Zugangskontrollen zur Minimierung von Angriffsflächen\n• Backup-Strategien und Kryptografie-Anforderungen für den Schutz kritischer Daten\n\n🔄 Überschneidungen und Synergien:\n• Beide Regulierungen fordern ähnliche Governance-Strukturen, die sich effizient kombinieren lassen\n• Incident-Management-Prozesse können für beide Frameworks harmonisiert werden\n• Vulnerability-Management und Penetrationstests erfüllen Anforderungen beider Regulierungen\n• Risk-Assessment-Methodologien können für beide Compliance-Bereiche genutzt werden\n• Business-Continuity-Planung adressiert Anforderungen beider Frameworks\n\n⚖️ Unterschiede in Implementierungsansätzen:\n• DORA definiert spezifische technische Standards und Mindestanforderungen für Finanzinstitute\n• NIS2 bietet mehr Flexibilität bei der Auswahl geeigneter Cybersecurity-Maßnahmen\n• DORA hat einen stärkeren Fokus auf operative Resilienz und Recovery-Capabilities\n• NIS2 betont präventive Cybersecurity-Maßnahmen und Threat-Prevention\n• Die Integration beider Ansätze kann zu einer umfassenderen und robusteren Cybersecurity-Posture führen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche strategischen Vorteile bietet eine koordinierte DORA-NIS2-Compliance-Strategie gegenüber separaten Ansätzen?',
        answer: "Eine koordinierte DORA-NIS2-Compliance-Strategie bietet erhebliche strategische Vorteile gegenüber isolierten Ansätzen und ermöglicht es Organisationen, Synergien zu nutzen, Kosten zu optimieren und ihre Gesamtresilienz zu stärken. Die Integration beider Frameworks schafft einen ganzheitlichen Ansatz zur digitalen Sicherheit.\n\n💰 Kosteneffizienz und Ressourcenoptimierung:\n• Vermeidung von Doppelarbeit durch gemeinsame Nutzung von Assessments, Audits und Dokumentationen\n• Konsolidierung von Beratungs- und Implementierungskosten durch integrierte Projektansätze\n• Effizientere Nutzung interner Ressourcen durch koordinierte Governance-Strukturen\n• Reduzierung von Compliance-Overhead durch harmonisierte Prozesse und Verfahren\n• Optimierung von Technologie-Investitionen durch Mehrfachnutzung von Security-Tools und -Plattformen\n\n🔄 Operative Synergien und Effizienzgewinne:\n• Entwicklung einheitlicher Risikomanagement-Frameworks, die beide Regulierungen adressieren\n• Integration von Incident-Management-Prozessen für streamlined Response und Reporting\n• Harmonisierung von Drittanbieter-Management-Ansätzen für konsistente Vendor-Oversight\n• Konsolidierung von Monitoring- und Detection-Systemen für umfassende Threat-Visibility\n• Vereinheitlichung von Training- und Awareness-Programmen für Mitarbeiter\n\n📊 Verbesserte Governance und Entscheidungsfindung:\n• Schaffung integrierter Governance-Strukturen mit klaren Verantwortlichkeiten für beide Frameworks\n• Entwicklung einheitlicher Reporting-Mechanismen für Management und Aufsichtsbehörden\n• Bessere Risiko-Visibility durch konsolidierte Risk-Dashboards und -Metriken\n• Effizientere Entscheidungsfindung durch integrierte Risk-Assessment-Prozesse\n• Stärkung der strategischen Ausrichtung von Cybersecurity-Investitionen\n\n🛡️ Erhöhte Resilienz und Sicherheitsposture:\n• Umfassendere Threat-Coverage durch Kombination finanzspezifischer und allgemeiner Cybersecurity-Ansätze\n• Stärkere Verteidigungstiefe durch Integration verschiedener Security-Kontrollen und -Maßnahmen\n• Verbesserte Business-Continuity durch koordinierte Resilienz-Planung\n• Erhöhte Adaptabilität an sich ändernde Bedrohungslandschaften\n• Bessere Vorbereitung auf regulatorische Prüfungen und Audits\n\n🚀 Strategische Wettbewerbsvorteile:\n• Positionierung als Vorreiter in digitaler Resilienz und Compliance-Excellence\n• Stärkung des Vertrauens von Kunden, Partnern und Stakeholdern\n• Verbesserte Reputation und Marktpositionierung durch proaktive Compliance-Haltung\n• Erhöhte Attraktivität für Investoren und Geschäftspartner\n• Bessere Vorbereitung auf zukünftige regulatorische Entwicklungen und Anforderungen\n\n🔮 Zukunftssicherheit und Skalierbarkeit:\n• Aufbau flexibler Compliance-Frameworks, die sich an neue Regulierungen anpassen lassen\n• Entwicklung von Capabilities, die über die aktuellen Anforderungen hinausgehen\n• Schaffung einer Basis für die Integration weiterer Compliance-Frameworks\n• Vorbereitung auf die Evolution der regulatorischen Landschaft\n• Etablierung einer Kultur der kontinuierlichen Verbesserung und Anpassungsfähigkeit"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie sollten Finanzinstitute vorgehen, die sowohl unter DORA als auch NIS2 fallen, um Compliance-Konflikte zu vermeiden?',
        answer: "Finanzinstitute, die sowohl unter DORA als auch NIS2 fallen, stehen vor der komplexen Aufgabe, zwei unterschiedliche regulatorische Frameworks zu harmonisieren. Ein strukturierter, strategischer Ansatz ist essentiell, um Compliance-Konflikte zu vermeiden und beide Regulierungen effizient zu erfüllen.\n\n🔍 Initiale Bestandsaufnahme und Scope-Bestimmung:\n• Durchführung einer detaillierten Analyse der Anwendbarkeit beider Regulierungen auf verschiedene Geschäftsbereiche\n• Identifikation spezifischer Entitäten, Services und Prozesse, die unter jede Regulierung fallen\n• Mapping der unterschiedlichen Klassifizierungen und Schwellenwerte beider Frameworks\n• Bewertung der zeitlichen Anforderungen und Implementierungsfristen für beide Regulierungen\n• Dokumentation der regulatorischen Landschaft und Erstellung einer Compliance-Matrix\n\n⚖️ Regulatorische Gap-Analyse und Konfliktidentifikation:\n• Systematische Gegenüberstellung aller Anforderungen beider Frameworks\n• Identifikation potenzieller Konflikte oder widersprüchlicher Anforderungen\n• Analyse unterschiedlicher Reporting-Verpflichtungen und deren Harmonisierungsmöglichkeiten\n• Bewertung verschiedener Governance-Anforderungen und deren Integration\n• Prüfung unterschiedlicher technischer Standards und deren Kompatibilität\n\n🏗️ Entwicklung integrierter Governance-Strukturen:\n• Etablierung einheitlicher Governance-Gremien mit Verantwortlichkeiten für beide Frameworks\n• Definition klarer Rollen und Verantwortlichkeiten für DORA- und NIS2-Compliance\n• Schaffung koordinierter Entscheidungsprozesse für regulatorische Angelegenheiten\n• Implementierung integrierter Risikomanagement-Strukturen\n• Entwicklung einheitlicher Policies und Procedures, die beide Regulierungen adressieren\n\n📋 Harmonisierung von Prozessen und Verfahren:\n• Integration von Incident-Management-Prozessen unter Berücksichtigung unterschiedlicher Reporting-Anforderungen\n• Harmonisierung von Risk-Assessment-Methodologien für beide Frameworks\n• Koordination von Audit- und Assessment-Aktivitäten zur Vermeidung von Redundanzen\n• Entwicklung einheitlicher Dokumentationsstandards und -Strukturen\n• Abstimmung von Training- und Awareness-Programmen für beide Compliance-Bereiche\n\n🤝 Stakeholder-Management und Behördenkommunikation:\n• Aufbau von Beziehungen zu relevanten Aufsichtsbehörden für beide Frameworks\n• Proaktive Kommunikation über die koordinierte Compliance-Strategie\n• Regelmäßige Abstimmung mit Aufsichtsbehörden über Implementierungsfortschritte\n• Teilnahme an Brancheninitiativen und Arbeitsgruppen für beide Regulierungen\n• Aufbau von Netzwerken mit anderen betroffenen Organisationen für Best-Practice-Austausch\n\n🔄 Kontinuierliche Überwachung und Anpassung:\n• Implementierung von Monitoring-Systemen zur Überwachung der Compliance mit beiden Frameworks\n• Regelmäßige Review und Aktualisierung der integrierten Compliance-Strategie\n• Proaktive Anpassung an regulatorische Entwicklungen und Guidance-Updates\n• Kontinuierliche Bewertung der Effektivität der koordinierten Ansätze\n• Etablierung von Feedback-Mechanismen zur kontinuierlichen Verbesserung der Compliance-Prozesse"
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
