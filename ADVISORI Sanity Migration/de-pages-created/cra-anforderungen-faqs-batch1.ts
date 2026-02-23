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
    console.log('Updating CRA Anforderungen page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-anforderungen' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-anforderungen" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche grundlegenden CRA Anforderungen müssen alle Unternehmen verstehen und wie unterscheiden sich diese nach Produktkategorien?',
        answer: "Die CRA Anforderungen bilden ein umfassendes regulatorisches Framework, das verschiedene Kategorien von Produkten mit digitalen Elementen erfasst und spezifische Cybersicherheitsanforderungen definiert. Das Verständnis der grundlegenden Anforderungsstruktur ist entscheidend für eine erfolgreiche Compliance-Strategie, da sich die Verpflichtungen erheblich je nach Produktkategorie, Risikobewertung und Marktpositionierung unterscheiden.\n\n🎯 Grundlegende Anforderungskategorien:\n• Cybersicherheitsanforderungen für Produkte mit digitalen Elementen umfassen sowohl technische Sicherheitsmaßnahmen als auch organisatorische Prozesse, die während des gesamten Produktlebenszyklus implementiert werden müssen.\n• Risikobasierte Anforderungen variieren zwischen Standardprodukten und kritischen Produkten, wobei kritische Produkte erweiterte Sicherheitsmaßnahmen, strengere Überwachung und zusätzliche Dokumentationspflichten erfordern.\n• Herstellerpflichten umfassen die Implementierung von Cybersicherheit by Design, kontinuierliche Vulnerability-Überwachung, Incident Response Capabilities und umfassende Dokumentation aller Sicherheitsmaßnahmen.\n• Importeur- und Händlerpflichten erstrecken sich auf die Überprüfung der Compliance-Dokumentation, Marktüberwachung und Kooperation mit Behörden bei Sicherheitsvorfällen.\n• Konformitätsbewertungsverfahren variieren je nach Produktkategorie und können Selbstbewertung, Drittpartei-Zertifizierung oder notifizierte Stellen-Bewertung erfordern.\n\n📋 Produktspezifische Anforderungsunterschiede:\n• Standardprodukte unterliegen grundlegenden Cybersicherheitsanforderungen, einschließlich sicherer Standardkonfigurationen, Vulnerability-Management, Update-Mechanismen und grundlegender Dokumentation.\n• Kritische Produkte erfordern erweiterte Maßnahmen wie umfassende Risikobewertungen, erweiterte Penetrationstests, kontinuierliche Sicherheitsüberwachung und detaillierte Incident Response Pläne.\n• Vernetzte Produkte müssen zusätzliche Anforderungen für Netzwerksicherheit, Datenschutz, sichere Kommunikation und Interoperabilität erfüllen.\n• Cloud-basierte Produkte unterliegen spezifischen Anforderungen für Datensicherheit, Zugriffskontrolle, Backup-Strategien und geografische Datenverarbeitung.\n• IoT-Geräte erfordern besondere Aufmerksamkeit für Hardware-Sicherheit, Firmware-Updates, Geräteauthentifizierung und Lifecycle-Management.\n\n🔍 Implementierungsstrategische Überlegungen:\n• Produktklassifizierung und Risikobewertung sind der erste kritische Schritt, um die anwendbaren Anforderungen zu identifizieren und Compliance-Strategien zu entwickeln.\n• Integration in bestehende Entwicklungsprozesse erfordert die Anpassung von Design-, Test- und Deployment-Verfahren, um Cybersicherheit von Anfang an zu berücksichtigen.\n• Supply Chain Security wird zu einer kritischen Komponente, da Hersteller für die Sicherheit ihrer gesamten Lieferkette verantwortlich sind.\n• Kontinuierliche Compliance-Überwachung erfordert die Implementierung von Systemen zur laufenden Bewertung und Anpassung der Sicherheitsmaßnahmen.\n• Dokumentations- und Nachweisführungsanforderungen müssen systematisch in alle Geschäftsprozesse integriert werden, um Audit-Bereitschaft zu gewährleisten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie entwickeln wir eine systematische Herangehensweise zur Identifikation und Priorisierung aller relevanten CRA Anforderungen für unser Produktportfolio?',
        answer: "Die systematische Identifikation und Priorisierung von CRA Anforderungen erfordert eine strukturierte Analyse des gesamten Produktportfolios, kombiniert mit einer risikobasierten Bewertung der regulatorischen Auswirkungen. Diese Herangehensweise muss sowohl die technischen Charakteristika der Produkte als auch die geschäftlichen Prioritäten und Ressourcenverfügbarkeit berücksichtigen, um eine effektive und effiziente Compliance-Strategie zu entwickeln.\n\n🔍 Umfassende Produktportfolio-Analyse:\n• Systematische Inventarisierung aller Produkte mit digitalen Elementen, einschließlich Hardware, Software, Firmware, Cloud-Services und hybrider Lösungen, mit detaillierter Dokumentation ihrer technischen Eigenschaften und Marktpositionierung.\n• Klassifizierung nach CRA-Kategorien durch Bewertung der Kritikalität, Vernetzungsgrad, Datenverarbeitung, Benutzergruppen und potenzieller Sicherheitsauswirkungen bei Kompromittierung.\n• Analyse der Produktarchitekturen und Abhängigkeiten, um versteckte digitale Komponenten, Drittanbieter-Integrationen und Supply Chain-Risiken zu identifizieren.\n• Bewertung des Produktlebenszyklus-Status, um zu verstehen, welche Produkte in Entwicklung, aktiver Vermarktung oder End-of-Life-Phase sind.\n• Marktanalyse zur Bestimmung der geografischen Vertriebsgebiete und regulatorischen Jurisdiktionen, die die Anwendbarkeit der CRA beeinflussen.\n\n⚖️ Risikobasierte Priorisierungsmatrix:\n• Entwicklung einer multidimensionalen Bewertungsmatrix, die regulatorische Risiken, Geschäftsauswirkungen, technische Komplexität und Implementierungsaufwand systematisch bewertet.\n• Quantifizierung der potenziellen Auswirkungen von Non-Compliance, einschließlich finanzieller Strafen, Marktausschluss, Reputationsschäden und Wettbewerbsnachteile.\n• Bewertung der technischen Implementierungsherausforderungen, einschließlich erforderlicher Architekturänderungen, Entwicklungsaufwand und Integrationskomplexität.\n• Analyse der Ressourcenanforderungen für verschiedene Compliance-Szenarien, um realistische Implementierungspläne zu entwickeln.\n• Berücksichtigung von Synergien zwischen verschiedenen Produkten und Anforderungen, um Effizienzgewinne zu identifizieren.\n\n📊 Strategische Implementierungsplanung:\n• Entwicklung einer phasenweisen Roadmap, die kritische Anforderungen priorisiert und gleichzeitig Geschäftskontinuität gewährleistet.\n• Integration der CRA-Compliance in bestehende Produktentwicklungs- und Lifecycle-Management-Prozesse.\n• Aufbau von Cross-funktionalen Teams mit Expertise in Cybersicherheit, Produktentwicklung, Compliance und Geschäftsstrategie.\n• Etablierung von Governance-Strukturen für kontinuierliche Überwachung und Anpassung der Priorisierung basierend auf sich ändernden Anforderungen.\n• Entwicklung von Kommunikationsstrategien für interne Stakeholder und externe Partner zur Sicherstellung von Alignment und Unterstützung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche technischen Cybersicherheitsanforderungen sind für verschiedene Produkttypen verpflichtend und wie können diese effektiv implementiert werden?',
        answer: "Die technischen Cybersicherheitsanforderungen der CRA umfassen ein breites Spektrum von Sicherheitsmaßnahmen, die je nach Produkttyp, Risikokategorie und Anwendungskontext variieren. Eine effektive Implementierung erfordert ein tiefes Verständnis sowohl der spezifischen technischen Anforderungen als auch der praktischen Umsetzungsstrategien, die Sicherheit, Funktionalität und Benutzerfreundlichkeit optimal balancieren.\n\n🔐 Grundlegende technische Sicherheitsanforderungen:\n• Sichere Entwicklung und Design-Prinzipien müssen von Anfang an in den Produktentwicklungsprozess integriert werden, einschließlich Threat Modeling, Security Architecture Reviews und sicherer Coding-Praktiken.\n• Authentifizierung und Zugriffskontrolle erfordern robuste Mechanismen für Benutzer- und Geräteauthentifizierung, rollenbasierte Zugriffskontrolle und Privilegien-Management.\n• Datenschutz und Verschlüsselung umfassen sowohl Daten in Ruhe als auch in Transit, mit angemessenen kryptographischen Standards und Schlüsselmanagement-Verfahren.\n• Sichere Kommunikation zwischen Komponenten und externen Systemen muss durch verschlüsselte Protokolle, Zertifikatsvalidierung und Integritätsprüfungen gewährleistet werden.\n• Vulnerability Management erfordert systematische Prozesse für Schwachstellenidentifikation, Bewertung, Priorisierung und Behebung während des gesamten Produktlebenszyklus.\n\n⚙️ Produktspezifische Implementierungsstrategien:\n• Hardware-Produkte erfordern sichere Boot-Prozesse, Hardware-basierte Sicherheitsmodule, Tamper-Resistance und sichere Firmware-Update-Mechanismen.\n• Software-Anwendungen müssen Input-Validierung, Output-Encoding, sichere Session-Management und Schutz vor gängigen Angriffsvektoren implementieren.\n• Vernetzte Geräte benötigen sichere Netzwerkprotokolle, Firewall-Funktionalitäten, Intrusion Detection und sichere Remote-Management-Capabilities.\n• Cloud-Services erfordern Multi-Tenancy-Sicherheit, sichere APIs, Datenresidenz-Kontrollen und umfassende Logging- und Monitoring-Funktionen.\n• Mobile Anwendungen müssen App-Sandboxing, sichere Datenspeicherung, Certificate Pinning und Schutz vor Reverse Engineering implementieren.\n\n🛠️ Praktische Umsetzungsansätze:\n• Adoption bewährter Security Frameworks wie NIST Cybersecurity Framework, ISO 27001 oder branchenspezifischer Standards als Grundlage für die Implementierung.\n• Integration von Security Testing in den Entwicklungsprozess, einschließlich Static Application Security Testing, Dynamic Application Security Testing und Penetration Testing.\n• Implementierung von DevSecOps-Praktiken zur Automatisierung von Sicherheitskontrollen und kontinuierlichen Sicherheitsbewertungen.\n• Aufbau von Security Operations Centers oder Integration in bestehende SOC-Strukturen für kontinuierliche Überwachung und Incident Response.\n• Entwicklung von Incident Response Plänen und Business Continuity Strategien für verschiedene Sicherheitsszenarien."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie können wir organisatorische Strukturen und Prozesse etablieren, die eine nachhaltige Erfüllung der CRA Anforderungen gewährleisten?',
        answer: "Die Etablierung organisatorischer Strukturen und Prozesse für nachhaltige CRA-Compliance erfordert eine fundamentale Transformation der Unternehmenskultur und -prozesse, die Cybersicherheit als integralen Bestandteil aller Geschäftsaktivitäten verankert. Diese organisatorische Transformation muss sowohl die formalen Strukturen als auch die informellen Kulturen und Verhaltensweisen adressieren, um langfristige Compliance-Exzellenz zu gewährleisten.\n\n🏗️ Strategische Governance-Strukturen:\n• Etablierung eines CRA Compliance Steering Committees auf Vorstandsebene mit klaren Verantwortlichkeiten für strategische Entscheidungen, Ressourcenallokation und Risikomanagement.\n• Aufbau einer Matrix-Organisationsstruktur, die funktionale Cybersicherheitsexpertise mit produktspezifischen Compliance-Verantwortlichkeiten verknüpft und Cross-funktionale Zusammenarbeit fördert.\n• Definition klarer Rollen und Verantwortlichkeiten für alle Stakeholder, einschließlich Chief Information Security Officer, Product Security Officers, Compliance Manager und Entwicklungsteams.\n• Integration von CRA-Compliance in bestehende Governance-Frameworks wie Enterprise Risk Management, Quality Management und Audit-Strukturen.\n• Entwicklung von Eskalationspfaden und Entscheidungsframeworks für verschiedene Arten von Compliance-Herausforderungen und Sicherheitsvorfällen.\n\n📋 Operative Prozessintegration:\n• Integration von Cybersicherheitsanforderungen in alle Phasen des Produktentwicklungslebenszyklus, von der Konzeption über Design und Entwicklung bis hin zu Deployment und Wartung.\n• Implementierung von Security Gates und Checkpoints in Entwicklungsprozessen, die sicherstellen, dass Sicherheitsanforderungen vor dem Übergang zur nächsten Phase erfüllt sind.\n• Aufbau von Change Management-Prozessen, die Sicherheitsauswirkungen aller Produktänderungen bewerten und entsprechende Maßnahmen ergreifen.\n• Entwicklung von Supplier Management-Prozessen, die Cybersicherheitsanforderungen in alle Lieferantenbeziehungen integrieren und kontinuierliche Überwachung gewährleisten.\n• Etablierung von Incident Response und Crisis Management-Prozessen, die schnelle und effektive Reaktionen auf Sicherheitsvorfälle ermöglichen.\n\n🎓 Kulturelle Transformation und Kompetenzentwicklung:\n• Entwicklung umfassender Schulungs- und Awareness-Programme, die alle Mitarbeiter über ihre Rollen und Verantwortlichkeiten in der CRA-Compliance informieren.\n• Aufbau interner Cybersicherheitsexpertise durch gezielte Rekrutierung, Schulung und Zertifizierung von Fachkräften.\n• Integration von Cybersicherheitszielen in individuelle und Team-Performance-Management-Systeme, um Accountability und Motivation zu gewährleisten.\n• Förderung einer Sicherheitskultur, die proaktive Risikoidentifikation, kontinuierliche Verbesserung und offene Kommunikation über Sicherheitsherausforderungen belohnt.\n• Etablierung von Communities of Practice und Wissensaustausch-Foren, die Best Practice Sharing und kontinuierliches Lernen fördern."
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
