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
    console.log('Updating DORA Anwendungsbereich page with FAQ batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-anwendungsbereich-scope' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-anwendungsbereich-scope" not found')
    }
    
    // Create new FAQs for practical compliance and assessment strategies
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Welche praktischen Tools und Methoden kann ich für eine effektive DORA-Scope-Bewertung einsetzen?',
        answer: "Eine effektive DORA-Scope-Bewertung erfordert den Einsatz strukturierter Tools und bewährter Methoden, die eine systematische und umfassende Analyse aller relevanten Aspekte ermöglichen. Die Kombination verschiedener Bewertungsansätze gewährleistet eine vollständige Erfassung des DORA-Anwendungsbereichs.\n\n🔧 Systematische Bewertungstools:\n• DORA-Scope-Assessment-Matrix: Strukturierte Checklisten zur systematischen Bewertung aller Entitätskategorien und deren spezifische Anforderungen\n• Business-Process-Mapping-Tools: Visualisierung der Geschäftsprozesse und deren IKT-Abhängigkeiten zur Identifikation kritischer Services\n• Drittanbieter-Inventarisierungs-Systeme: Umfassende Datenbanken aller IKT-Service-Provider mit Kritikalitätsbewertungen\n• Risk-Assessment-Frameworks: Strukturierte Ansätze zur Bewertung und Quantifizierung von IKT-Risiken\n• Compliance-Gap-Analyse-Tools: Systematische Vergleiche zwischen aktueller Position und DORA-Anforderungen\n\n📊 Datensammlung und -analyse:\n• Automatisierte Discovery-Tools zur Identifikation aller IKT-Assets und -Abhängigkeiten\n• Stakeholder-Interview-Frameworks für strukturierte Gespräche mit Geschäfts- und IT-Verantwortlichen\n• Dokumentenanalyse-Methoden zur Bewertung bestehender Verträge, Policies und Prozeduren\n• Technische Assessments zur Bewertung der aktuellen IKT-Infrastruktur und -Sicherheit\n• Benchmarking-Analysen zur Bewertung der Position im Vergleich zu Branchenstandards\n\n🎯 Kritikalitätsbewertungs-Methoden:\n• Business-Impact-Analysis zur Quantifizierung der Auswirkungen von Service-Ausfällen\n• Dependency-Mapping zur Visualisierung von Interdependenzen zwischen Services und Systemen\n• Risk-Scoring-Modelle zur objektiven Bewertung und Priorisierung von Risiken\n• Scenario-Analysis zur Bewertung verschiedener Ausfall- und Störungsszenarien\n• Stakeholder-Impact-Assessment zur Bewertung der Auswirkungen auf verschiedene Interessengruppen\n\n📋 Dokumentations- und Reporting-Tools:\n• Scope-Documentation-Templates für standardisierte und vollständige Dokumentation aller Bewertungsergebnisse\n• Executive-Dashboard-Systeme für übersichtliche Darstellung der Scope-Bewertung für die Geschäftsleitung\n• Compliance-Tracking-Tools zur kontinuierlichen Überwachung des Implementierungsfortschritts\n• Audit-Trail-Systeme zur Nachverfolgung aller Bewertungsentscheidungen und deren Begründungen\n• Regulatory-Reporting-Frameworks zur effizienten Erstellung aufsichtsrechtlicher Berichte\n\n🔄 Kontinuierliche Bewertung und Monitoring:\n• Automated-Monitoring-Systeme zur kontinuierlichen Überwachung von Scope-Änderungen\n• Change-Detection-Tools zur frühzeitigen Identifikation von Änderungen in Geschäftsprozessen oder Technologie\n• Performance-Metrics-Dashboards zur Überwachung der Effektivität der Scope-Management-Prozesse\n• Regular-Review-Frameworks für systematische periodische Überprüfungen der Scope-Bewertung\n• Feedback-Integration-Systeme zur kontinuierlichen Verbesserung der Bewertungsmethoden"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Wie stelle ich sicher, dass meine DORA-Scope-Dokumentation aufsichtskonform und audit-ready ist?',
        answer: "Eine aufsichtskonforme und audit-ready DORA-Scope-Dokumentation erfordert systematische Herangehensweise, vollständige Nachverfolgbarkeit und klare Begründungen für alle Scope-Entscheidungen. Die Dokumentation muss sowohl aktuellen regulatorischen Standards entsprechen als auch für zukünftige Prüfungen vorbereitet sein.\n\n📋 Grundlegende Dokumentationsanforderungen:\n• Vollständige Erfassung aller DORA-relevanten Entitäten mit klarer Begründung der Klassifizierung\n• Detaillierte Beschreibung aller kritischen IKT-Services und deren Geschäftsrelevanz\n• Umfassende Dokumentation aller Drittanbieter-Beziehungen und deren Kritikalitätsbewertung\n• Klare Darstellung der Governance-Strukturen und Verantwortlichkeiten für DORA-Compliance\n• Vollständige Aufzeichnung aller Scope-Entscheidungen mit Zeitstempel und Begründung\n\n🔍 Audit-Trail und Nachverfolgbarkeit:\n• Implementierung versionskontrollierter Dokumentationssysteme mit vollständiger Änderungshistorie\n• Etablierung klarer Genehmigungsprozesse für alle Scope-Änderungen mit dokumentierten Entscheidungswegen\n• Aufbewahrung aller unterstützenden Dokumente und Analysen, die zu Scope-Entscheidungen geführt haben\n• Dokumentation der verwendeten Methoden und Kriterien für Kritikalitätsbewertungen\n• Nachweis regelmäßiger Reviews und Updates der Scope-Dokumentation\n\n📊 Strukturierte Dokumentationsframeworks:\n• Verwendung standardisierter Templates und Formate für konsistente Dokumentation\n• Implementierung hierarchischer Dokumentationsstrukturen von High-Level-Übersichten bis zu detaillierten technischen Spezifikationen\n• Entwicklung von Cross-Reference-Systemen zur Verknüpfung verwandter Dokumente und Informationen\n• Etablierung von Metadaten-Standards für effiziente Suche und Kategorisierung\n• Integration von Visualisierungstools für komplexe Abhängigkeiten und Beziehungen\n\n⚖️ Regulatorische Compliance-Aspekte:\n• Sicherstellung der Übereinstimmung mit allen relevanten DORA-Artikeln und technischen Standards\n• Berücksichtigung nationaler Implementierungsrichtlinien und Aufsichtspraktiken\n• Integration von Guidance-Dokumenten und Best Practices der Aufsichtsbehörden\n• Dokumentation der Koordination mit anderen regulatorischen Frameworks wie NIS2 und GDPR\n• Nachweis der Berücksichtigung von Proportionalitätsprinzipien bei der Scope-Bestimmung\n\n🛡️ Qualitätssicherung und Validierung:\n• Implementierung von Peer-Review-Prozessen für alle kritischen Scope-Dokumentationen\n• Durchführung regelmäßiger interner Audits zur Überprüfung der Dokumentationsqualität\n• Etablierung von Validierungsprozessen zur Sicherstellung der Vollständigkeit und Genauigkeit\n• Integration von externen Validierungen durch Dritte für kritische Scope-Entscheidungen\n• Entwicklung von Kontrollmechanismen zur kontinuierlichen Überwachung der Dokumentationsqualität\n\n🔄 Kontinuierliche Aktualisierung und Wartung:\n• Etablierung regelmäßiger Review-Zyklen für alle Scope-Dokumentationen\n• Implementierung von Change-Management-Prozessen für Dokumentationsupdates\n• Entwicklung von Eskalationsprozessen für signifikante Scope-Änderungen\n• Integration von Feedback-Mechanismen aus Audits und Aufsichtsprüfungen\n• Aufbau von Kapazitäten für schnelle Anpassungen an neue regulatorische Anforderungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Welche Rolle spielen externe Berater und Dienstleister bei der DORA-Scope-Bestimmung?',
        answer: "Externe Berater und Dienstleister können eine entscheidende Rolle bei der DORA-Scope-Bestimmung spielen, insbesondere für Organisationen mit begrenzten internen Ressourcen oder spezialisierten Anforderungen. Die strategische Nutzung externer Expertise kann die Qualität und Effizienz der Scope-Bestimmung erheblich verbessern.\n\n🎯 Strategische Vorteile externer Expertise:\n• Zugang zu spezialisiertem DORA-Know-how und aktuellen regulatorischen Entwicklungen\n• Objektive Bewertung der Organisationsstrukturen und -prozesse ohne interne Befangenheit\n• Benchmarking gegen Branchenstandards und Best Practices anderer Finanzinstitute\n• Beschleunigung der Implementierung durch bewährte Methoden und Tools\n• Risikominimierung durch erfahrungsbasierte Guidance und Qualitätssicherung\n\n🔍 Bereiche für externe Unterstützung:\n• Umfassende Gap-Analysen und Readiness-Assessments für DORA-Compliance\n• Entwicklung maßgeschneiderter Scope-Management-Frameworks und -Prozesse\n• Kritikalitätsbewertungen komplexer IKT-Services und Drittanbieter-Arrangements\n• Technische Assessments von IKT-Infrastrukturen und -Sicherheitsmaßnahmen\n• Entwicklung von Dokumentations- und Governance-Strukturen\n\n🤝 Auswahl und Management externer Partner:\n• Bewertung der DORA-spezifischen Expertise und Erfahrung potenzieller Berater\n• Prüfung von Referenzen und Track Record bei ähnlichen Implementierungsprojekten\n• Sicherstellung der Unabhängigkeit und Objektivität der externen Berater\n• Klare Definition von Scope, Deliverables und Erfolgskriterien für externe Engagements\n• Etablierung effektiver Projektmanagement- und Kommunikationsstrukturen\n\n📊 Wissenstransfer und Kapazitätsaufbau:\n• Strukturierte Wissenstransfer-Programme zur Entwicklung interner DORA-Expertise\n• Training und Schulung interner Teams durch externe Experten\n• Entwicklung interner Fähigkeiten für kontinuierliche Scope-Management-Aktivitäten\n• Aufbau von Dokumentations- und Prozess-Know-how für langfristige Selbstständigkeit\n• Etablierung von Mentoring- und Support-Strukturen für die Übergangsphase\n\n⚖️ Governance und Qualitätskontrolle:\n• Klare Verantwortlichkeiten und Rechenschaftspflichten für externe Berater\n• Implementierung von Qualitätskontroll- und Review-Prozessen für externe Deliverables\n• Sicherstellung der Compliance externer Arbeiten mit internen Standards und regulatorischen Anforderungen\n• Etablierung von Eskalations- und Konfliktlösungsmechanismen\n• Integration externer Beiträge in interne Governance- und Entscheidungsprozesse\n\n🔄 Langfristige Partnerschaftsstrategien:\n• Entwicklung strategischer Partnerschaften für kontinuierliche DORA-Unterstützung\n• Aufbau von Retained-Advisory-Arrangements für laufende regulatorische Updates\n• Etablierung von Netzwerken mit spezialisierten DORA-Experten und Branchenkollegen\n• Nutzung externer Expertise für kontinuierliche Verbesserung und Innovation\n• Integration externer Perspektiven in strategische Planungs- und Entwicklungsprozesse"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Wie entwickle ich eine nachhaltige Strategie für das kontinuierliche DORA-Scope-Management?',
        answer: "Eine nachhaltige Strategie für kontinuierliches DORA-Scope-Management erfordert den Aufbau robuster, anpassungsfähiger Systeme und Prozesse, die sich mit der Organisation und der regulatorischen Landschaft weiterentwickeln können. Diese Strategie muss sowohl operative Effizienz als auch strategische Flexibilität gewährleisten.\n\n🏗️ Aufbau nachhaltiger Governance-Strukturen:\n• Etablierung dedizierter DORA-Scope-Management-Funktionen mit klaren Verantwortlichkeiten und Befugnissen\n• Integration von Scope-Management in bestehende Risikomanagement- und Compliance-Frameworks\n• Entwicklung von Cross-funktionalen Teams mit Vertretern aus IT, Risiko, Compliance und Geschäftsbereichen\n• Implementierung regelmäßiger Governance-Reviews zur Bewertung der Effektivität der Scope-Management-Prozesse\n• Aufbau von Eskalations- und Entscheidungsmechanismen für komplexe Scope-Fragen\n\n📈 Kontinuierliche Verbesserung und Innovation:\n• Implementierung von Feedback-Loops aus operativen Erfahrungen und Audit-Erkenntnissen\n• Etablierung von Benchmarking-Prozessen gegen Branchenstandards und Best Practices\n• Entwicklung von Innovation-Programmen zur kontinuierlichen Verbesserung der Scope-Management-Fähigkeiten\n• Integration neuer Technologien und Methoden zur Effizienzsteigerung\n• Aufbau von Partnerschaften mit Technologie-Anbietern und Forschungseinrichtungen\n\n🔧 Technologische Nachhaltigkeit:\n• Investition in skalierbare und anpassungsfähige Technologie-Plattformen für Scope-Management\n• Entwicklung von API-basierten Architekturen für einfache Integration neuer Tools und Services\n• Implementierung von Automatisierung zur Reduzierung manueller Aufwände und Fehlerrisiken\n• Aufbau von Data-Analytics-Fähigkeiten für datengetriebene Scope-Entscheidungen\n• Etablierung von Cloud-basierten Lösungen für Flexibilität und Skalierbarkeit\n\n📊 Performance-Monitoring und -Optimierung:\n• Entwicklung umfassender KPI-Frameworks zur Messung der Scope-Management-Effektivität\n• Implementierung von Real-Time-Dashboards für kontinuierliche Überwachung kritischer Metriken\n• Etablierung regelmäßiger Performance-Reviews und Optimierungszyklen\n• Integration von Predictive-Analytics zur Antizipation zukünftiger Scope-Herausforderungen\n• Aufbau von Reporting-Mechanismen für verschiedene Stakeholder-Gruppen\n\n🎓 Kapazitätsentwicklung und Wissensmanagement:\n• Implementierung kontinuierlicher Schulungs- und Entwicklungsprogramme für Scope-Management-Teams\n• Aufbau interner Expertise durch Zertifizierungen und Spezialisierungen\n• Entwicklung von Wissensmanagement-Systemen zur Erfassung und Weitergabe von Erfahrungen\n• Etablierung von Mentoring- und Knowledge-Sharing-Programmen\n• Integration externer Expertise durch strategische Partnerschaften und Beratungsbeziehungen\n\n🔮 Zukunftsorientierung und Anpassungsfähigkeit:\n• Entwicklung von Scenario-Planning-Fähigkeiten für verschiedene regulatorische und geschäftliche Entwicklungen\n• Implementierung von Frühwarnsystemen für regulatorische Änderungen und deren Auswirkungen\n• Aufbau von Flexibilitätsmechanismen zur schnellen Anpassung an neue Anforderungen\n• Etablierung von Innovation-Kulturen, die kontinuierliche Verbesserung und Anpassung fördern\n• Integration von Nachhaltigkeitsüberlegungen in alle Scope-Management-Entscheidungen"
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
    console.log('✅ FAQ batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
