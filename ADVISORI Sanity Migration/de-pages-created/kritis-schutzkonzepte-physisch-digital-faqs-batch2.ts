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
    console.log('Updating KRITIS Schutzkonzepte Physisch Digital page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'kritis-schutzkonzepte-physisch-digital' })
    
    if (!existingDoc) {
      throw new Error('Document "kritis-schutzkonzepte-physisch-digital" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie adressiert ADVISORI die spezifischen Herausforderungen der physischen Sicherheit in kritischen Infrastrukturen und welche innovativen Ansätze werden dabei eingesetzt?",
        answer: "Physische Sicherheit in kritischen Infrastrukturen geht weit über traditionelle Perimeterschutzmaßnahmen hinaus. ADVISORI entwickelt mehrschichtige physische Sicherheitskonzepte, die sowohl bewährte Praktiken als auch innovative Technologien integrieren, um umfassenden Schutz gegen physische Bedrohungen zu gewährleisten.\n\n🏗️ Mehrschichtige physische Sicherheitsarchitektur:\n• Perimeterschutz der nächsten Generation: Integration intelligenter Sensorsysteme, KI-basierter Videoanalyse und autonomer Überwachungstechnologien für lückenlose Außenbereichssicherung.\n• Zonenbezogene Zugangskontrollen: Implementierung gestufter Sicherheitszonen mit biometrischen Zugangssystemen, Multifaktor-Authentifizierung und kontinuierlicher Verhaltensanalyse.\n• Struktureller Schutz: Bewertung und Verstärkung baulicher Sicherheitsmaßnahmen einschließlich sprengstoffresistenter Konstruktionen und Schutz vor elektromagnetischen Angriffen.\n• Umgebungsmonitoring: Überwachung von Umweltbedingungen, Vibrationen und anderen physischen Anomalien, die auf Angriffe oder Sabotage hindeuten könnten.\n\n🤖 Innovation in physischer Sicherheitstechnologie:\n• Predictive Physical Security: Einsatz von Machine Learning zur Vorhersage und Prävention physischer Sicherheitsvorfälle basierend auf Verhaltensmustern und Umgebungsdaten.\n• Drone Detection und Defense: Implementierung von Anti-Drone-Systemen zum Schutz vor luftgestützten Angriffen und Überwachung.\n• IoT-basierte Sensornetze: Verteilung intelligenter Sensoren zur Real-time Überwachung kritischer Bereiche mit automatischer Anomalieerkennung.\n• Augmented Reality Security: AR-unterstützte Sicherheitskontrolle und Incident Response für verbesserte Situational Awareness.\n\n🔐 Spezialisierte KRITIS-Anforderungen:\n• Kritische Asset Protection: Maßgeschneiderte Schutzmaßnahmen für spezifische kritische Komponenten wie Transformatoren, Kontrollräume oder Serverstandorte.\n• Insider Threat Mitigation: Entwicklung von Systemen zur Erkennung und Prävention von Bedrohungen durch autorisiertes Personal.\n• Emergency Response Integration: Koordination physischer Sicherheitsmaßnahmen mit Notfall- und Evakuierungsplänen.\n• Supply Chain Physical Security: Sicherung physischer Lieferketten und Überwachung von Wartungs- und Servicepersonal."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche Rolle spielen digitale Sicherheitstechnologien in modernen KRITIS-Schutzkonzepten und wie integriert ADVISORI diese mit physischen Maßnahmen?",
        answer: "Digitale Sicherheitstechnologien bilden das Rückgrat moderner kritischer Infrastrukturen und erfordern eine nahtlose Integration mit physischen Schutzmaßnahmen. ADVISORI entwickelt cyberphysische Sicherheitsarchitekturen, die digitale Bedrohungen proaktiv erkennen und abwehren, während sie gleichzeitig physische Sicherheitssysteme verstärken.\n\n💻 Umfassende digitale Sicherheitsarchitektur:\n• Network Segmentation Excellence: Implementierung mikrosekundenschneller Netzwerksegmentierung mit Zero Trust Prinzipien für kritische Steuerungssysteme und operative Technologien.\n• Advanced Threat Detection: Deployment von KI-gestützten SIEM-Systemen, die sowohl bekannte als auch unbekannte Bedrohungen in Echtzeit identifizieren und klassifizieren.\n• Industrial Control System Security: Spezialisierte Sicherheitsmaßnahmen für SCADA, PLC und andere industrielle Steuerungssysteme mit air-gapped Architekturen wo erforderlich.\n• Quantum-ready Cryptography: Vorbereitung auf zukünftige Quantencomputer-Bedrohungen durch Implementation quantum-resistenter Verschlüsselungsalgorithmen.\n\n🔗 Cyberphysische Integration:\n• Unified Security Orchestration: Entwicklung zentraler Orchestrierungsplattformen, die physische Sensordaten mit digitalen Sicherheitsereignissen korrelieren und automatisierte Responses triggern.\n• Bidirectional Information Flow: Etablierung sicherer Kommunikationskanäle zwischen physischen Sicherheitssystemen und IT-Infrastruktur für ganzheitliche Threat Intelligence.\n• Convergent Incident Response: Aufbau integrierter Incident Response Teams, die sowohl Cyber- als auch physische Sicherheitsvorfälle koordiniert behandeln können.\n• Cross-domain Analytics: Implementation von Analytics-Plattformen, die physische und digitale Sicherheitsdaten gemeinsam analysieren und neue Erkenntnisse generieren.\n\n⚡ Innovative digitale Sicherheitstechnologien:\n• Behavioral Analytics für kritische Systeme: Machine Learning-basierte Erkennung abnormaler Systemverhaltensweisen, die auf Cyberangriffe oder Sabotage hindeuten.\n• Digital Twin Security: Verwendung digitaler Zwillinge kritischer Infrastrukturen für Sicherheitssimulationen und Penetration Testing ohne Risiko für operative Systeme.\n• Edge Computing Security: Implementierung sicherer Edge-Computing-Lösungen für dezentrale Datenverarbeitung und reduzierte Latenz in sicherheitskritischen Anwendungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie gestaltet ADVISORI die kontinuierliche Überwachung und adaptive Anpassung von Schutzkonzepten an sich wandelnde Bedrohungslandschaften?",
        answer: "Die Bedrohungslandschaft für kritische Infrastrukturen entwickelt sich kontinuierlich weiter, was statische Schutzkonzepte ineffektiv macht. ADVISORI implementiert adaptive Sicherheitsarchitekturen, die sich proaktiv an neue Bedrohungen anpassen und kontinuierlich optimieren, um dauerhaften Schutz zu gewährleisten.\n\n📡 Kontinuierliche Überwachung der nächsten Generation:\n• 24/7 Cyber-Physical SOC: Aufbau spezialisierter Security Operations Centers, die physische und digitale Sicherheitsereignisse rund um die Uhr überwachen und korrelieren.\n• Threat Intelligence Integration: Real-time Integration globaler Threat Intelligence Feeds mit lokalen Sicherheitsdaten für proaktive Bedrohungserkennung.\n• Predictive Analytics: Einsatz von Machine Learning zur Vorhersage potenzieller Sicherheitsvorfälle basierend auf historischen Daten und aktuellen Trends.\n• Automated Response Orchestration: Implementation automatisierter Response-Mechanismen, die bei kritischen Bedrohungen sofortige Schutzmaßnahmen einleiten.\n\n🔄 Adaptive Sicherheitsarchitekturen:\n• Dynamic Risk Assessment: Kontinuierliche Neubewertung von Risikoprofilen basierend auf aktuellen Bedrohungsinformationen und Änderungen in der Infrastruktur.\n• Self-healing Security Systems: Entwicklung von Sicherheitssystemen, die sich nach Angriffen selbst reparieren und verbesserte Schutzmaßnahmen implementieren.\n• Agile Security Frameworks: Implementierung agiler Methodologien in Sicherheitsprozesse für schnelle Anpassung an neue Anforderungen.\n• Continuous Compliance Monitoring: Automatisierte Überwachung der Compliance mit sich ändernden regulatorischen Anforderungen und Standards.\n\n🎯 Proaktive Bedrohungsantizipation:\n• Emerging Threat Research: Aktive Forschung und Monitoring neuer Angriffsvektoren, Schwachstellen und Bedrohungsakteure.\n• Red Team Exercises: Regelmäßige Red Team Übungen zur Identifikation von Schwachstellen und Verbesserung der Abwehrfähigkeiten.\n• Scenario Planning: Entwicklung und Simulation verschiedener Bedrohungsszenarien für bessere Vorbereitung auf unbekannte Risiken.\n• Industry Collaboration: Teilnahme an Brancheninitiativen und Informationsaustausch zur gemeinsamen Verbesserung der Sicherheitsstandards.\n\n📊 Messung und Optimierung der Sicherheitseffektivität:\n• Security Metrics Dashboard: Entwicklung umfassender KPI-Dashboards zur Messung der Effektivität von Schutzmaßnahmen.\n• ROI-basierte Sicherheitsinvestitionen: Datengetriebene Bewertung des Return on Investment für verschiedene Sicherheitsmaßnahmen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie unterstützt ADVISORI Organisationen bei der Entwicklung einer sicherheitsbewussten Kultur und dem Change Management für integrierte Schutzkonzepte?",
        answer: "Erfolgreiche Implementierung integrierter Schutzkonzepte erfordert mehr als nur technische Lösungen - sie benötigt eine fundamentale kulturelle Transformation hin zu einer sicherheitsbewussten Organisation. ADVISORI entwickelt ganzheitliche Change Management Strategien, die technische Implementierung mit organisatorischer Transformation verbinden.\n\n👥 Aufbau einer sicherheitsbewussten Kultur:\n• Security Awareness Programme: Entwicklung sektorspezifischer Awareness-Programme, die sowohl physische als auch digitale Sicherheitsaspekte umfassen und alle Organisationsebenen einbeziehen.\n• Leadership Engagement: Strategische Beratung für Führungskräfte zur Vorbildfunktion und aktiven Förderung einer Sicherheitskultur.\n• Behavioral Security Training: Implementierung verhaltensbasierter Sicherheitstrainings, die auf realen Bedrohungsszenarien basieren und praktische Fertigkeiten vermitteln.\n• Security Champion Networks: Aufbau interner Netzwerke von Sicherheitsbotschaftern, die als Multiplikatoren und erste Ansprechpartner für Sicherheitsfragen fungieren.\n\n🔄 Strukturiertes Change Management:\n• Stakeholder Mapping und Engagement: Identifikation und systematische Einbindung aller relevanten Stakeholder von Operations bis C-Level in den Transformationsprozess.\n• Phased Implementation Strategy: Entwicklung phasenweiser Implementierungsstrategien, die schrittweise Veränderung ermöglichen und Widerstand minimieren.\n• Communication Strategy: Aufbau umfassender Kommunikationsstrategien, die Transparenz schaffen und die Vorteile integrierter Schutzkonzepte verdeutlichen.\n• Resistance Management: Proaktive Identifikation und Adressierung von Widerstand gegen Veränderungen durch gezielte Maßnahmen.\n\n🎓 Kompetenzentwicklung und Training:\n• Cross-functional Security Teams: Aufbau interdisziplinärer Teams, die sowohl physische als auch digitale Sicherheitskompetenzen vereinen.\n• Continuous Learning Pathways: Entwicklung kontinuierlicher Lernpfade für Sicherheitspersonal zur Anpassung an evolvierende Bedrohungen.\n• Simulation und Übungen: Regelmäßige Durchführung realistischer Sicherheitsübungen, die physische und digitale Szenarien kombinieren.\n• Certification und Career Development: Unterstützung bei der Entwicklung von Zertifizierungsprogrammen und Karrierewegen für Sicherheitsprofessionals.\n\n📋 Governance und Prozessintegration:\n• Security Governance Frameworks: Etablierung robuster Governance-Strukturen, die integrierte Sicherheitsentscheidungen unterstützen und koordinieren.\n• Process Integration: Nahtlose Integration von Sicherheitsprozessen in bestehende Geschäftsprozesse ohne Beeinträchtigung der operativen Effizienz.\n• Performance Measurement: Implementierung von Metriken zur Messung des kulturellen Wandels und der Sicherheitsreife der Organisation."
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
    console.log('✅ FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
