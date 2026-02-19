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
    console.log('Updating ISO 27001 Risikoanalyse page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-risikoanalyse' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-risikoanalyse" not found')
    }
    
    // Create new FAQs for ISO 27001 Risikoanalyse fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was ist eine ISO 27001 Risikoanalyse und warum ist sie das Herzstück eines jeden ISMS?',
        answer: "Die ISO 27001 Risikoanalyse ist ein systematischer Prozess zur Identifikation, Bewertung und Behandlung von Informationssicherheitsrisiken und bildet das fundamentale Herzstück jedes Informationssicherheitsmanagementsystems. Sie ermöglicht es Organisationen, ihre wertvollsten Informationsassets zu verstehen, potenzielle Bedrohungen zu erkennen und angemessene Schutzmaßnahmen zu implementieren.\n\n🎯 Systematischer Risikoansatz:\n• Die Risikoanalyse folgt einem strukturierten Prozess, der alle Informationsassets der Organisation erfasst und deren Wert für das Unternehmen bewertet\n• Systematische Identifikation von Bedrohungen, die diese Assets gefährden könnten, von Cyberangriffen bis hin zu physischen Risiken\n• Bewertung von Schwachstellen in bestehenden Systemen, Prozessen und Sicherheitsmaßnahmen\n• Quantifizierung der Risiken durch Bewertung von Eintrittswahrscheinlichkeit und potenziellem Schaden\n• Entwicklung risikobasierter Behandlungsstrategien, die Ressourcen optimal einsetzen\n\n📊 Fundament für risikobasierte Entscheidungen:\n• Die Risikoanalyse schafft eine objektive Grundlage für Sicherheitsinvestitionen und strategische Entscheidungen\n• Ermöglicht die Priorisierung von Sicherheitsmaßnahmen basierend auf tatsächlichen Risiken statt subjektiver Einschätzungen\n• Unterstützt die Geschäftsleitung bei der Bewertung des Risikoprofils und der Festlegung der Risikobereitschaft\n• Schafft Transparenz über die Informationssicherheitslage und deren Auswirkungen auf Geschäftsziele\n• Ermöglicht kontinuierliche Verbesserung durch regelmäßige Neubewertung und Anpassung\n\n🔄 Kontinuierlicher Verbesserungsprozess:\n• Die Risikoanalyse ist kein einmaliger Vorgang, sondern ein kontinuierlicher Prozess, der sich an verändernde Bedrohungslandschaften anpasst\n• Regelmäßige Überprüfung und Aktualisierung der Risikobewertung bei Änderungen in der IT-Landschaft oder Geschäftsprozessen\n• Integration neuer Bedrohungen und Schwachstellen in die bestehende Risikomatrix\n• Bewertung der Wirksamkeit implementierter Kontrollmaßnahmen und deren Anpassung bei Bedarf\n• Aufbau einer lernenden Organisation, die proaktiv auf neue Risiken reagiert\n\n🏗️ Compliance und Zertifizierungsgrundlage:\n• Die Risikoanalyse ist eine zwingende Anforderung der ISO 27001 und Grundvoraussetzung für eine erfolgreiche Zertifizierung\n• Dokumentiert die Nachvollziehbarkeit von Sicherheitsentscheidungen für interne und externe Auditoren\n• Erfüllt regulatorische Anforderungen verschiedener Branchen und Gesetze\n• Schafft Vertrauen bei Kunden, Partnern und Stakeholdern durch transparente Risikobewertung\n• Unterstützt die Integration mit anderen Compliance-Frameworks wie DORA, NIS2 oder branchenspezifischen Standards"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche Schritte umfasst eine professionelle ISO 27001 Risikoanalyse und wie werden diese systematisch durchgeführt?',
        answer: "Eine professionelle ISO 27001 Risikoanalyse folgt einem strukturierten, mehrstufigen Prozess, der von der Asset-Identifikation bis zur Risikobehandlung reicht. Jeder Schritt baut systematisch auf dem vorherigen auf und gewährleistet eine umfassende und nachvollziehbare Risikobewertung.\n\n📋 Asset-Identifikation und Klassifizierung:\n• Vollständige Inventarisierung aller Informationsassets der Organisation, einschließlich Daten, Systeme, Anwendungen und physische Assets\n• Bewertung des Geschäftswerts jedes Assets basierend auf Vertraulichkeit, Integrität und Verfügbarkeit\n• Zuordnung von Asset-Ownern und Verantwortlichkeiten für jedes identifizierte Asset\n• Klassifizierung der Assets nach Kritikalität und Schutzanforderungen\n• Dokumentation von Abhängigkeiten zwischen verschiedenen Assets und Geschäftsprozessen\n\n🎯 Bedrohungsidentifikation und Threat Modeling:\n• Systematische Erfassung aller relevanten Bedrohungen für die identifizierten Assets\n• Berücksichtigung verschiedener Bedrohungskategorien wie Cyberangriffe, menschliche Fehler, Naturkatastrophen und technische Ausfälle\n• Analyse aktueller Threat Intelligence und branchenspezifischer Bedrohungslandschaften\n• Bewertung von Threat Actors und deren Motivationen, Fähigkeiten und Ressourcen\n• Entwicklung von Bedrohungsszenarien und Attack Vectors für kritische Assets\n\n🔍 Schwachstellenanalyse und Vulnerability Assessment:\n• Identifikation technischer Schwachstellen durch Vulnerability Scans und Penetrationstests\n• Bewertung organisatorischer und prozessualer Schwachstellen in bestehenden Sicherheitsmaßnahmen\n• Analyse der Human Factor Risiken und Social Engineering Anfälligkeiten\n• Überprüfung physischer Sicherheitsmaßnahmen und Umgebungsrisiken\n• Bewertung der Wirksamkeit bestehender Kontrollmaßnahmen und deren Lücken\n\n⚖️ Risikobewertung und Quantifizierung:\n• Bewertung der Eintrittswahrscheinlichkeit für identifizierte Bedrohungsszenarien\n• Quantifizierung der potenziellen Auswirkungen auf Geschäftsprozesse und Unternehmensziele\n• Anwendung bewährter Risikobewertungsmethoden wie qualitative oder quantitative Ansätze\n• Entwicklung einer Risikomatrix zur Visualisierung und Priorisierung der Risiken\n• Berechnung des Restrisikos nach Implementierung geplanter Kontrollmaßnahmen\n\n🛡️ Risikobehandlung und Kontrollauswahl:\n• Entwicklung von Risikobehandlungsstrategien für jedes identifizierte Risiko\n• Auswahl geeigneter Kontrollmaßnahmen aus ISO 27001 Annex A oder anderen Standards\n• Kosten-Nutzen-Analyse der vorgeschlagenen Sicherheitsmaßnahmen\n• Priorisierung der Implementierung basierend auf Risikobewertung und verfügbaren Ressourcen\n• Dokumentation der Risikobehandlungsentscheidungen und deren Begründung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie werden Assets in einer ISO 27001 Risikoanalyse identifiziert und bewertet?',
        answer: "Die Asset-Identifikation und -bewertung bildet das Fundament jeder ISO 27001 Risikoanalyse und erfordert einen systematischen, umfassenden Ansatz, der alle Informationsassets der Organisation erfasst und deren Wert für das Unternehmen objektiv bewertet. Dieser Prozess ist entscheidend für die nachfolgende Risikobewertung und Kontrollauswahl.\n\n🗂️ Umfassende Asset-Kategorisierung:\n• Informationsassets umfassen alle Daten, Dokumente und Informationen in digitaler und physischer Form\n• Software-Assets beinhalten Anwendungen, Betriebssysteme, Entwicklungstools und Firmware\n• Hardware-Assets erfassen Server, Workstations, Netzwerkkomponenten und mobile Geräte\n• Service-Assets umfassen IT-Services, Cloud-Services und externe Dienstleistungen\n• Personelle Assets berücksichtigen Mitarbeiter, Auftragnehmer und deren Qualifikationen\n• Physische Assets beinhalten Gebäude, Räumlichkeiten und Infrastruktur\n\n💎 Geschäftswert-Bewertung:\n• Bewertung der Vertraulichkeit basierend auf Sensitivität der Informationen und Auswirkungen bei unbefugter Offenlegung\n• Integritätsbewertung berücksichtigt die Kritikalität korrekter und vollständiger Informationen für Geschäftsprozesse\n• Verfügbarkeitsbewertung analysiert die Auswirkungen von Ausfällen auf Geschäftskontinuität und Kundenzufriedenheit\n• Finanzielle Bewertung quantifiziert direkte und indirekte Kosten bei Verlust oder Kompromittierung des Assets\n• Rechtliche und regulatorische Bewertung berücksichtigt Compliance-Anforderungen und potenzielle Strafen\n\n👥 Asset-Owner und Verantwortlichkeiten:\n• Eindeutige Zuordnung von Asset-Ownern, die für den Schutz und die ordnungsgemäße Nutzung verantwortlich sind\n• Definition von Rollen und Verantwortlichkeiten für Asset-Management und Sicherheitsmaßnahmen\n• Etablierung von Genehmigungsprozessen für Asset-Änderungen und Zugriffsverwaltung\n• Dokumentation von Eskalationswegen bei Sicherheitsvorfällen oder Asset-Kompromittierung\n• Regelmäßige Überprüfung und Aktualisierung der Asset-Owner-Zuordnungen\n\n🔗 Abhängigkeitsanalyse:\n• Identifikation kritischer Abhängigkeiten zwischen verschiedenen Assets und Geschäftsprozessen\n• Analyse von Single Points of Failure und deren Auswirkungen auf die Gesamtorganisation\n• Bewertung von Lieferkettenabhängigkeiten und externen Service-Providern\n• Dokumentation von Asset-Lebenszyklen und Wartungsanforderungen\n• Berücksichtigung von Backup- und Recovery-Abhängigkeiten\n\n📊 Klassifizierungsschema und Dokumentation:\n• Entwicklung eines konsistenten Klassifizierungsschemas basierend auf Geschäftswert und Schutzanforderungen\n• Implementierung von Handling-Richtlinien für verschiedene Asset-Kategorien\n• Erstellung eines zentralen Asset-Registers mit allen relevanten Informationen\n• Etablierung von Prozessen zur regelmäßigen Aktualisierung des Asset-Inventars\n• Integration des Asset-Managements in bestehende IT-Service-Management-Prozesse"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche Methoden und Tools werden für die Risikobewertung in ISO 27001 verwendet?',
        answer: "Die Risikobewertung in ISO 27001 nutzt verschiedene bewährte Methoden und Tools, um eine objektive, nachvollziehbare und konsistente Bewertung von Informationssicherheitsrisiken zu gewährleisten. Die Auswahl der geeigneten Methode hängt von der Organisationsgröße, Komplexität und verfügbaren Ressourcen ab.\n\n📈 Qualitative Risikobewertungsmethoden:\n• Verwendung von Bewertungsskalen wie Hoch-Mittel-Niedrig oder numerischen Skalen für Wahrscheinlichkeit und Auswirkung\n• Entwicklung von Risikomatrizen zur Visualisierung und Kategorisierung von Risiken\n• Anwendung von Expertenwissen und Erfahrungswerten für die Bewertung schwer quantifizierbarer Risiken\n• Nutzung von Workshops und strukturierten Interviews zur Sammlung von Risikoinformationen\n• Berücksichtigung qualitativer Faktoren wie Reputationsschäden oder Vertrauensverlust\n\n🔢 Quantitative Risikobewertungsansätze:\n• Berechnung des Annual Loss Expectancy basierend auf Single Loss Expectancy und Annual Rate of Occurrence\n• Anwendung statistischer Modelle und historischer Daten zur Wahrscheinlichkeitsberechnung\n• Monte-Carlo-Simulationen für komplexe Risikoszenarien mit multiplen Variablen\n• Verwendung von Kennzahlen wie Value at Risk oder Expected Shortfall\n• Integration von Versicherungsdaten und Marktinformationen für realistische Schadensbewertungen\n\n🛠️ Spezialisierte Risikobewertungstools:\n• GRC-Plattformen wie ServiceNow, MetricStream oder SAP GRC für integriertes Risikomanagement\n• Spezialisierte ISMS-Tools wie verinice, ISMS.online oder Proteus für ISO 27001 spezifische Anforderungen\n• Vulnerability Management Tools wie Nessus, Qualys oder Rapid7 für technische Risikobewertung\n• Threat Intelligence Plattformen für aktuelle Bedrohungsinformationen und Risikokontextualisierung\n• Business Impact Analysis Tools für die Bewertung von Geschäftsauswirkungen\n\n🎯 Bewährte Risikobewertungsframeworks:\n• ISO 27005 als spezifischer Standard für Informationssicherheits-Risikomanagement\n• NIST Cybersecurity Framework für strukturierte Risikobewertung und -behandlung\n• FAIR (Factor Analysis of Information Risk) für quantitative Risikobewertung\n• OCTAVE (Operationally Critical Threat, Asset, and Vulnerability Evaluation) für organisationsspezifische Bewertungen\n• CRAMM (CCTA Risk Analysis and Management Method) für systematische Risikobewertung\n\n📊 Risikomatrix und Scoring-Modelle:\n• Entwicklung organisationsspezifischer Risikomatrizen mit angepassten Bewertungskriterien\n• Implementation von Scoring-Modellen, die verschiedene Risikofaktoren gewichten\n• Verwendung von Heat Maps zur visuellen Darstellung der Risikolandschaft\n• Etablierung von Risikoschwellenwerten für Behandlungsentscheidungen\n• Integration von Risikoindikatoren und Key Risk Indicators für kontinuierliches Monitoring"
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
