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
    console.log('Updating Business Continuity Management page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'was-ist-business-continuity-management' })
    
    if (!existingDoc) {
      throw new Error('Document "was-ist-business-continuity-management" not found')
    }
    
    // Create new FAQs for BCM implementation strategies and methodologies
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche Schritte umfasst eine erfolgreiche BCM-Implementierung und wie lange dauert der Prozess?',
        answer: "Eine erfolgreiche BCM-Implementierung folgt einem strukturierten, phasenweisen Ansatz, der typischerweise sechs bis achtzehn Monate dauert, abhängig von Organisationsgröße, Komplexität und verfügbaren Ressourcen. Der Implementierungsprozess ist darauf ausgelegt, nachhaltigen Erfolg zu gewährleisten und eine robuste Resilienz-Kultur zu etablieren.\n\n📋 Phase 1 - Strategische Grundlegung:\n• Entwicklung einer umfassenden BCM-Policy und Definition der strategischen Ziele für Geschäftskontinuität\n• Etablierung einer BCM-Governance-Struktur mit klaren Rollen, Verantwortlichkeiten und Entscheidungsbefugnissen\n• Aufbau eines BCM-Teams mit den notwendigen Kompetenzen und Ressourcen für die Implementierung\n• Durchführung einer initialen Risikobeurteilung und Identifikation der wichtigsten Geschäftsbereiche\n• Definition von BCM-Standards, Verfahren und Kommunikationsrichtlinien für die gesamte Organisation\n\n🔍 Phase 2 - Business Impact Analysis:\n• Systematische Identifikation und Inventarisierung aller kritischen Geschäftsprozesse und deren Abhängigkeiten\n• Quantifizierung der finanziellen, operativen und reputationsbezogenen Auswirkungen von Geschäftsunterbrechungen\n• Bestimmung von Recovery Time Objectives und Recovery Point Objectives für jeden kritischen Prozess\n• Analyse von internen und externen Abhängigkeiten, einschließlich Lieferanten, Dienstleister und Infrastruktur\n• Priorisierung der Geschäftsprozesse basierend auf ihrer Kritikalität und den Auswirkungen von Ausfällen\n\n🛡️ Phase 3 - Strategieentwicklung und Planung:\n• Entwicklung maßgeschneiderter Kontinuitätsstrategien für verschiedene Störungsszenarien und Risikokategorien\n• Erstellung detaillierter Business Continuity Pläne mit klaren Verfahrensanweisungen und Eskalationsprozessen\n• Integration von IT-Disaster Recovery Plänen und Krisenmanagement-Verfahren in das BCM-Framework\n• Entwicklung von Kommunikationsstrategien für interne und externe Stakeholder während Störungen\n• Planung von alternativen Arbeitsplätzen, Backup-Systemen und Notfall-Ressourcen\n\n🚀 Phase 4 - Implementierung und Integration:\n• Rollout der BCM-Pläne und Verfahren in der gesamten Organisation mit umfassender Schulung und Awareness\n• Integration des BCM in bestehende Managementsysteme und operative Prozesse\n• Implementierung von Monitoring- und Frühwarnsystemen für die Erkennung potenzieller Störungen\n• Aufbau von BCM-Kompetenzen auf allen Organisationsebenen durch gezielte Schulungsprogramme\n• Etablierung einer BCM-Kultur mit regelmäßiger Kommunikation und Sensibilisierung\n\n✅ Phase 5 - Testing und Validierung:\n• Durchführung systematischer Tests und Übungen zur Validierung der BCM-Fähigkeiten\n• Evaluation der Wirksamkeit von Kontinuitätsplänen durch realistische Störungsszenarien\n• Identifikation von Verbesserungspotenzialen und Anpassung der BCM-Strategien basierend auf Testergebnissen\n• Dokumentation von Lessons Learned und Integration in die kontinuierliche Verbesserung\n• Zertifizierung oder externe Validierung der BCM-Implementierung nach internationalen Standards"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche internationalen Standards und Frameworks gibt es für Business Continuity Management?',
        answer: "Business Continuity Management wird durch verschiedene internationale Standards und Frameworks unterstützt, die bewährte Praktiken, Methoden und Anforderungen definieren. Diese Standards bieten strukturierte Ansätze für die Implementierung und kontinuierliche Verbesserung von BCM-Systemen und ermöglichen eine konsistente, professionelle Herangehensweise.\n\n🌟 ISO 22301 - Business Continuity Management Systems:\n• Der führende internationale Standard für BCM-Systeme, der einen systematischen Ansatz für die Implementierung definiert\n• Basiert auf dem Plan-Do-Check-Act Zyklus und ermöglicht kontinuierliche Verbesserung der BCM-Fähigkeiten\n• Definiert Anforderungen für Policy, Planung, Implementierung, Monitoring und Management Review\n• Ermöglicht Zertifizierung durch akkreditierte Zertifizierungsstellen und externe Validierung der BCM-Reife\n• Kompatibel mit anderen ISO-Standards wie ISO 9001, ISO 27001 und ISO 14001 für integrierte Managementsysteme\n\n📚 ISO 22313 - Guidance for Business Continuity Management:\n• Umfassender Leitfaden für die praktische Implementierung von BCM basierend auf ISO 22301\n• Bietet detaillierte Anleitungen für Business Impact Analysis, Risikobeurteilung und Strategieentwicklung\n• Enthält praktische Beispiele, Checklisten und Templates für verschiedene BCM-Aktivitäten\n• Unterstützt Organisationen bei der Interpretation und Anwendung der ISO 22301 Anforderungen\n• Berücksichtigt verschiedene Organisationstypen, Branchen und Komplexitätsgrade\n\n🔧 ISO 22317 - Guidelines for Business Impact Analysis:\n• Spezialisierter Standard für die Durchführung professioneller Business Impact Analysen\n• Definiert systematische Methoden für die Identifikation und Bewertung kritischer Geschäftsprozesse\n• Bietet Anleitungen für die Quantifizierung von Auswirkungen und die Bestimmung von Recovery-Zielen\n• Unterstützt die Entwicklung einer soliden analytischen Grundlage für BCM-Entscheidungen\n• Komplementiert ISO 22301 durch detaillierte BIA-Methoden und Best Practices\n\n🏛️ Branchenspezifische Standards und Frameworks:\n• NIST Cybersecurity Framework mit BCM-Komponenten für kritische Infrastrukturen und Technologieunternehmen\n• COBIT Framework mit Governance-Aspekten für IT-Service-Kontinuität und digitale Resilienz\n• Basel III und Solvency II mit spezifischen BCM-Anforderungen für Finanzdienstleister\n• DORA Regulation mit operationaler Resilienz-Anforderungen für den Finanzsektor\n• Good Practice Guidelines des Business Continuity Institute für praktische Implementierung\n\n🌍 Regionale und nationale Standards:\n• BS 25999 als Vorläufer von ISO 22301 mit spezifischen Anforderungen für den britischen Markt\n• NFPA 1600 Standard für Disaster Management und Business Continuity in den USA\n• AS/NZS 5050 für Business Continuity Management in Australien und Neuseeland\n• JIS Q 22301 als japanische Adaptation des ISO 22301 Standards\n• Nationale Implementierungsleitfäden und Compliance-Anforderungen in verschiedenen Ländern"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie entwickelt man effektive Kontinuitätsstrategien für verschiedene Störungsszenarien?',
        answer: "Die Entwicklung effektiver Kontinuitätsstrategien erfordert einen systematischen, szenariobasierten Ansatz, der verschiedene Störungsarten, deren Wahrscheinlichkeiten und Auswirkungen berücksichtigt. Erfolgreiche Strategien sind flexibel, skalierbar und auf die spezifischen Bedürfnisse und Ressourcen der Organisation zugeschnitten.\n\n🎯 Szenario-basierte Strategieentwicklung:\n• Entwicklung eines umfassenden Katalogs möglicher Störungsszenarien von lokalen Ausfällen bis zu systemischen Krisen\n• Kategorisierung von Szenarien nach Ursachen, Auswirkungsbereich, Dauer und Eskalationspotenzial\n• Berücksichtigung von natürlichen Katastrophen, technischen Ausfällen, Cyber-Angriffen, Pandemien und menschlichen Fehlern\n• Analyse von Kombinationsszenarien und Kaskadeneffekten, die multiple Geschäftsbereiche gleichzeitig betreffen\n• Regelmäßige Aktualisierung der Szenarien basierend auf emerging risks und veränderten Bedrohungslandschaften\n\n⚖️ Strategische Optionsbewertung:\n• Systematische Bewertung verschiedener Kontinuitätsoptionen für jeden kritischen Geschäftsprozess\n• Analyse von Kosten-Nutzen-Verhältnissen verschiedener Strategiealternativen und deren Implementierungsaufwand\n• Berücksichtigung von Recovery Time Objectives und verfügbaren Ressourcen bei der Strategieauswahl\n• Bewertung der Machbarkeit und Nachhaltigkeit verschiedener Kontinuitätsansätze\n• Integration von Risikotoleranz und strategischen Geschäftszielen in die Strategieentwicklung\n\n🏗️ Multi-Level-Strategieansatz:\n• Entwicklung von Basis-Strategien für die Aufrechterhaltung minimaler Geschäftsfunktionen\n• Erweiterte Strategien für die schrittweise Wiederherstellung der vollen Betriebsfähigkeit\n• Optimierte Strategien für die Nutzung von Störungen als Verbesserungs- und Innovationsmöglichkeiten\n• Eskalationsstrategien für den Umgang mit prolongierten oder sich verschärfenden Störungen\n• Exit-Strategien für Situationen, in denen eine Wiederherstellung nicht möglich oder wirtschaftlich sinnvoll ist\n\n🔄 Adaptive und flexible Strategiegestaltung:\n• Entwicklung modularer Strategien, die je nach Störungsart und -intensität aktiviert werden können\n• Integration von Entscheidungspunkten und Trigger-Kriterien für die Strategieaktivierung\n• Berücksichtigung von Ressourcenverfügbarkeit und externen Abhängigkeiten in der Strategieplanung\n• Aufbau von Redundanzen und alternativen Optionen für kritische Strategiekomponenten\n• Etablierung von Feedback-Mechanismen für die kontinuierliche Strategieanpassung basierend auf Erfahrungen\n\n🤝 Stakeholder-Integration und Kommunikation:\n• Einbindung aller relevanten internen und externen Stakeholder in die Strategieentwicklung\n• Entwicklung spezifischer Kommunikationsstrategien für verschiedene Zielgruppen und Störungsszenarien\n• Koordination mit Lieferanten, Partnern und Dienstleistern für integrierte Kontinuitätsstrategien\n• Berücksichtigung regulatorischer Anforderungen und Compliance-Verpflichtungen in der Strategiegestaltung\n• Aufbau von Kooperationen und gegenseitigen Unterstützungsvereinbarungen mit anderen Organisationen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Rolle spielen Technologie und Digitalisierung im modernen Business Continuity Management?',
        answer: "Technologie und Digitalisierung haben das moderne Business Continuity Management revolutioniert und ermöglichen neue Ansätze für Monitoring, Response und Recovery. Gleichzeitig schaffen sie neue Abhängigkeiten und Risiken, die in BCM-Strategien berücksichtigt werden müssen. Die Integration moderner Technologien ist entscheidend für die Wirksamkeit und Effizienz von BCM-Systemen.\n\n🤖 Automatisierung und intelligente Systeme:\n• Einsatz von KI und Machine Learning für die Früherkennung potenzieller Störungen und Anomalien\n• Automatisierte Aktivierung von Kontinuitätsplänen basierend auf vordefinierten Triggern und Schwellenwerten\n• Intelligente Ressourcenallokation und dynamische Anpassung von Recovery-Strategien\n• Predictive Analytics für die Vorhersage von Störungswahrscheinlichkeiten und Auswirkungen\n• Automatisierte Kommunikation und Benachrichtigung von Stakeholdern während Störungen\n\n☁️ Cloud-basierte BCM-Lösungen:\n• Nutzung von Cloud-Infrastrukturen für skalierbare und flexible Backup- und Recovery-Lösungen\n• Software-as-a-Service Plattformen für BCM-Management, Dokumentation und Koordination\n• Geografisch verteilte Cloud-Services für erhöhte Resilienz und Redundanz\n• Hybrid-Cloud-Strategien für die Kombination von On-Premises und Cloud-basierten Lösungen\n• Cloud-native Anwendungen mit eingebauten Resilienz-Funktionen und automatischem Failover\n\n📱 Mobile und Remote-Technologien:\n• Mobile BCM-Apps für die Koordination und Kommunikation während Störungen\n• Remote-Work-Technologien als integraler Bestandteil von Kontinuitätsstrategien\n• Virtual Desktop Infrastructure für die schnelle Bereitstellung von Arbeitsplätzen\n• Mobile Device Management für die sichere Integration privater Geräte in BCM-Prozesse\n• Collaboration-Tools für die verteilte Zusammenarbeit und Entscheidungsfindung\n\n🔍 Monitoring und Analytics:\n• Real-time Monitoring von kritischen Systemen, Prozessen und externen Abhängigkeiten\n• IoT-Sensoren für die Überwachung physischer Infrastrukturen und Umgebungsbedingungen\n• Business Intelligence und Dashboards für die Visualisierung von BCM-Metriken und KPIs\n• Social Media Monitoring für die Früherkennung von Reputationsrisiken und externen Bedrohungen\n• Integrierte Risikomanagement-Plattformen für die ganzheitliche Betrachtung von Geschäftsrisiken\n\n🔐 Cybersecurity und digitale Resilienz:\n• Integration von Cybersecurity-Maßnahmen in BCM-Strategien und Kontinuitätspläne\n• Zero-Trust-Architekturen für die sichere Remote-Arbeit und den Zugriff auf kritische Systeme\n• Backup- und Recovery-Strategien für den Schutz vor Ransomware und Cyber-Angriffen\n• Incident Response Integration zwischen Cybersecurity und BCM-Teams\n• Kontinuierliche Sicherheitsbewertungen und Penetrationstests als Teil der BCM-Validierung"
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
