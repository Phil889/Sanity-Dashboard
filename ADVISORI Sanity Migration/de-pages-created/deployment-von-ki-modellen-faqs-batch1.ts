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
    console.log('Updating Deployment von KI-Modellen page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'deployment-von-ki-modellen' })
    
    if (!existingDoc) {
      throw new Error('Document "deployment-von-ki-modellen" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum ist strategisches KI-Model-Deployment mehr als nur technische Implementierung und wie positioniert ADVISORI Deployment als Wettbewerbsvorteil?',
        answer: "Das Deployment von KI-Modellen in Produktionsumgebungen ist der entscheidende Moment, in dem theoretische AI-Potenziale zu messbaren Geschäftsergebnissen werden. Für C-Level-Führungskräfte repräsentiert professionelles Model-Deployment nicht nur eine technische Notwendigkeit, sondern einen strategischen Differenzierungsfaktor, der über den Erfolg oder Misserfolg von AI-Initiativen entscheidet. ADVISORI versteht Deployment als kritischen Erfolgsfaktor für nachhaltige AI-Wertschöpfung.\n\n🎯 Strategische Imperative für die Führungsebene:\n• Wertrealisierung und ROI-Maximierung: Professionelles Deployment verwandelt entwickelte Modelle in produktive Assets, die kontinuierlich Geschäftswert generieren und messbare Ergebnisse liefern.\n• Risikominimierung und Compliance: Strukturierte Deployment-Prozesse reduzieren operative Risiken, gewährleisten DSGVO-Compliance und schaffen Vertrauen bei Stakeholdern und Regulierungsbehörden.\n• Skalierbarkeit und Zukunftsfähigkeit: Durchdachte Deployment-Architekturen ermöglichen es, AI-Lösungen flexibel zu skalieren und an veränderte Geschäftsanforderungen anzupassen.\n• Operative Exzellenz: Automatisierte Deployment-Pipelines steigern die Effizienz, reduzieren manuelle Fehler und beschleunigen Time-to-Market für neue AI-Features.\n\n🛡️ Der ADVISORI-Ansatz für strategisches Model-Deployment:\n• DSGVO-First-Deployment: Wir entwickeln Deployment-Strategien, die von Grund auf datenschutzkonform sind und gleichzeitig maximale Performance und Verfügbarkeit gewährleisten.\n• Enterprise-Grade-Architekturen: Implementierung robuster, skalierbarer Deployment-Infrastrukturen, die den Anforderungen kritischer Geschäftsprozesse gerecht werden.\n• Kontinuierliche Governance: Integration umfassender Monitoring- und Governance-Mechanismen für proaktives Risikomanagement und Performance-Optimierung.\n• Strategische Roadmap-Integration: Ausrichtung der Deployment-Strategie auf Ihre langfristigen Geschäftsziele und digitalen Transformationspläne."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie quantifizieren wir den ROI von professionellen MLOps-Implementierungen und welchen direkten Einfluss hat ADVISORI\'s Deployment-Expertise auf operative Effizienz?',
        answer: "Professionelle MLOps-Implementierungen von ADVISORI sind strategische Investitionen, die sich in messbaren Effizienzsteigerungen, Kosteneinsparungen und beschleunigter Innovation manifestieren. Der Return on Investment zeigt sich sowohl in direkten operativen Verbesserungen als auch in strategischen Wettbewerbsvorteilen durch schnellere und zuverlässigere AI-Deployments.\n\n💰 Direkte Auswirkungen auf operative Effizienz:\n• Deployment-Geschwindigkeit und Time-to-Market: Automatisierte MLOps-Pipelines reduzieren die Zeit von der Modellentwicklung bis zur Produktionsbereitstellung erheblich, was schnellere Markteinführung neuer AI-Features ermöglicht.\n• Reduzierte Ausfallzeiten und Fehlerquoten: Professionelle Deployment-Prozesse minimieren produktionsbedingte Störungen und gewährleisten hohe Verfügbarkeit kritischer AI-Services.\n• Skalierungseffizienz: Automatisierte Skalierungsmechanismen optimieren Ressourcennutzung und reduzieren Infrastrukturkosten bei gleichzeitiger Gewährleistung optimaler Performance.\n• Wartungs- und Betriebskosten: Standardisierte Deployment-Prozesse reduzieren den manuellen Aufwand für Wartung, Updates und Troubleshooting erheblich.\n\n📈 Strategische Werttreiber und Geschäftsvorteile:\n• Innovationsgeschwindigkeit: Schnellere Iteration und Deployment neuer Modellversionen ermöglicht es, schneller auf Marktveränderungen zu reagieren und Wettbewerbsvorteile zu nutzen.\n• Qualitätssicherung und Zuverlässigkeit: Systematische Testing- und Validierungsprozesse gewährleisten konsistente Modellqualität und reduzieren das Risiko von Performance-Degradation.\n• Compliance-Effizienz: Automatisierte Compliance-Checks und Dokumentation reduzieren regulatorische Risiken und vereinfachen Audit-Prozesse.\n• Ressourcenoptimierung: Intelligente Ressourcenallokation und -management maximieren die Effizienz der IT-Infrastruktur und reduzieren Gesamtbetriebskosten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie gewährleistet ADVISORI DSGVO-Compliance bei KI-Model-Deployments und welche spezifischen Maßnahmen schützen vor regulatorischen Risiken?',
        answer: "DSGVO-Compliance bei KI-Model-Deployments erfordert einen ganzheitlichen Ansatz, der technische Sicherheitsmaßnahmen mit rechtlichen Anforderungen und operativen Prozessen verbindet. ADVISORI implementiert umfassende Compliance-Frameworks, die nicht nur aktuelle DSGVO-Anforderungen erfüllen, sondern auch für zukünftige regulatorische Entwicklungen wie die EU-KI-Verordnung vorbereitet sind.\n\n🔒 Technische DSGVO-Compliance-Maßnahmen:\n• Privacy-by-Design-Architekturen: Implementierung von Deployment-Infrastrukturen, die Datenschutz als Grundprinzip verankern und personenbezogene Daten durch technische und organisatorische Maßnahmen schützen.\n• Datenminimierung und Zweckbindung: Sicherstellung, dass deployed Modelle nur die minimal notwendigen Daten verarbeiten und ausschließlich für definierte, rechtmäßige Zwecke eingesetzt werden.\n• Verschlüsselung und Zugriffskontrollen: Umfassende Verschlüsselung von Daten in Ruhe und während der Übertragung sowie granulare Zugriffskontrollen für alle Deployment-Komponenten.\n• Audit-Trails und Nachvollziehbarkeit: Vollständige Protokollierung aller Deployment-Aktivitäten und Modell-Entscheidungen für Transparenz und Rechenschaftspflicht.\n\n⚖️ Rechtliche und operative Compliance-Frameworks:\n• Datenschutz-Folgenabschätzungen: Systematische Bewertung der Datenschutzrisiken vor jedem Model-Deployment mit entsprechenden Risikominderungsmaßnahmen.\n• Betroffenenrechte-Management: Implementierung technischer Lösungen zur Gewährleistung von Auskunfts-, Berichtigungs- und Löschungsrechten auch in deployed AI-Systemen.\n• Internationale Datenübertragungen: Sicherstellung rechtmäßiger Datenübertragungen bei Cloud-Deployments durch angemessene Garantien und Schutzmaßnahmen.\n• Kontinuierliche Compliance-Überwachung: Etablierung von Monitoring-Systemen, die automatisch Compliance-Verstöße erkennen und entsprechende Korrekturmaßnahmen einleiten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche kritischen Risiken entstehen bei unprofessionellen KI-Model-Deployments und wie minimiert ADVISORI\'s Risikomanagement-Ansatz diese Gefahren?',
        answer: "Unprofessionelle KI-Model-Deployments können erhebliche Geschäftsrisiken verursachen, von Datenschutzverletzungen über Performance-Degradation bis hin zu Reputationsschäden. ADVISORI\'s umfassender Risikomanagement-Ansatz identifiziert, bewertet und minimiert diese Risiken durch proaktive Maßnahmen und kontinuierliche Überwachung.\n\n⚠️ Kritische Deployment-Risiken und ihre Auswirkungen:\n• Datenschutz- und Compliance-Verstöße: Unsachgemäße Datenhandhabung kann zu DSGVO-Bußgeldern, rechtlichen Konsequenzen und erheblichen Reputationsschäden führen.\n• Model-Drift und Performance-Degradation: Unüberwachte Modelle können schleichend an Genauigkeit verlieren, was zu fehlerhaften Geschäftsentscheidungen und Kundenunzufriedenheit führt.\n• Sicherheitslücken und Cyberangriffe: Ungesicherte Deployment-Infrastrukturen sind anfällig für Angriffe, die zu Datendiebstahl oder Manipulation von AI-Systemen führen können.\n• Skalierungsprobleme und Ausfälle: Inadäquate Architektur kann bei steigender Last zu Systemausfällen und Geschäftsunterbrechungen führen.\n\n🛡️ ADVISORI\'s proaktiver Risikomanagement-Ansatz:\n• Umfassende Risikobewertung: Systematische Identifikation und Bewertung aller potentiellen Risiken vor, während und nach dem Deployment mit entsprechenden Mitigation-Strategien.\n• Multi-Layer-Sicherheitsarchitektur: Implementierung mehrschichtiger Sicherheitsmaßnahmen, die sowohl technische als auch organisatorische Aspekte umfassen.\n• Kontinuierliches Monitoring und Alerting: Real-time Überwachung aller kritischen Parameter mit automatischen Benachrichtigungen bei Anomalien oder Grenzwertüberschreitungen.\n• Incident-Response und Business-Continuity: Etablierung klarer Eskalationsprozesse und Notfallpläne für schnelle Reaktion auf kritische Situationen und Minimierung von Geschäftsauswirkungen."
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
