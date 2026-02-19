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
    console.log('Updating ISO 27001 Audit page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-audit' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-audit" not found')
    }
    
    // Create new FAQs for ISO 27001 audit fundamentals and strategy
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum ist professionelle Audit-Begleitung entscheidend für den Erfolg einer ISO 27001 Zertifizierung?',
        answer: "Professionelle Audit-Begleitung transformiert den Zertifizierungsprozess von einem risikobehafteten Unterfangen zu einem strategisch geplanten Erfolg. ISO 27001 Audits sind komplexe, vielschichtige Bewertungen, die weit über eine einfache Checklisten-Abarbeitung hinausgehen und tiefgreifende Expertise in Audit-Methodik, Standard-Interpretation und Stakeholder-Management erfordern.\n\n🎯 Strategische Audit-Vorbereitung:\n• Entwicklung einer maßgeschneiderten Audit-Strategie, die optimal auf Ihre Organisationsstruktur und spezifische Herausforderungen abgestimmt ist\n• Systematische Identifikation und Mitigation potenzieller Audit-Risiken durch erfahrungsbasierte Risikoanalyse\n• Optimierung der Audit-Timeline und Ressourcenallokation für maximale Effizienz und minimale Betriebsstörungen\n• Strategische Positionierung Ihrer Organisation gegenüber Auditoren durch professionelle Vorbereitung und Präsentation\n• Entwicklung von Kommunikationsstrategien, die Vertrauen schaffen und Kompetenz demonstrieren\n\n📋 Methodische Audit-Exzellenz:\n• Anwendung bewährter Audit-Methoden und Best Practices aus hunderten erfolgreicher Zertifizierungsprojekte\n• Systematische Vorbereitung aller Audit-Evidenzen und Dokumentationen in auditgerechter Form\n• Professionelle Schulung und Vorbereitung aller Audit-Teilnehmer auf ihre spezifischen Rollen\n• Implementierung effizienter Evidence-Management-Systeme für nahtlose Audit-Durchführung\n• Kontinuierliche Qualitätssicherung und Optimierung der Audit-Vorbereitung\n\n🛡️ Risikominimierung und Erfolgssicherung:\n• Frühzeitige Identifikation und Behebung potenzieller Compliance-Lücken vor dem eigentlichen Audit\n• Entwicklung von Contingency-Plänen für verschiedene Audit-Szenarien und mögliche Herausforderungen\n• Professionelle Begleitung während kritischer Audit-Phasen mit Real-time Unterstützung\n• Strukturiertes Management von Audit-Findings und Entwicklung effektiver Korrekturmaßnahmen\n• Sicherstellung der Nachhaltigkeit durch Aufbau interner Audit-Kompetenzen\n\n💼 Business-Value-Maximierung:\n• Positionierung des Audits als strategische Investition in Vertrauen und Wettbewerbsfähigkeit\n• Integration des Audit-Prozesses in übergeordnete Geschäftsziele und Compliance-Strategien\n• Nutzung des Audits als Katalysator für operative Verbesserungen und Prozessoptimierung\n• Aufbau einer robusten Compliance-Kultur, die über die Zertifizierung hinaus Mehrwert schafft\n• Schaffung von Grundlagen für zukünftige Zertifizierungen und Compliance-Erweiterungen\n\n🔄 Nachhaltige Compliance-Exzellenz:\n• Entwicklung langfristiger Audit-Readiness-Strategien für Überwachungsaudits und Rezertifizierung\n• Aufbau interner Kompetenzen und Strukturen für eigenständige Audit-Vorbereitung\n• Etablierung kontinuierlicher Verbesserungsprozesse basierend auf Audit-Erkenntnissen\n• Integration moderner Audit-Technologien für effiziente und nachhaltige Compliance-Überwachung\n• Schaffung einer lernenden Organisation, die proaktiv auf Audit-Anforderungen reagiert"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie unterscheidet sich ADVISORI Audit-Begleitung von standardisierten Audit-Support-Services?',
        answer: "ADVISORI verfolgt einen differenzierten, strategischen Ansatz zur Audit-Begleitung, der über traditionelle Support-Services hinausgeht und maßgeschneiderte Lösungen entwickelt, die optimal auf die spezifischen Bedürfnisse, Herausforderungen und strategischen Ziele jeder Organisation abgestimmt sind. Unser Ansatz kombiniert tiefgreifende Audit-Expertise mit innovativen Methoden und bewährten Praktiken.\n\n🔬 Tiefgreifende Organisationsanalyse:\n• Umfassende Bewertung der Organisationskultur, Geschäftsprozesse und spezifischen Audit-Herausforderungen\n• Detaillierte Analyse der bestehenden ISMS-Implementierung und Identifikation organisationsspezifischer Stärken\n• Bewertung der Stakeholder-Landschaft und Entwicklung zielgruppenspezifischer Audit-Strategien\n• Analyse historischer Audit-Erfahrungen und Lessons Learned für optimierte Vorbereitung\n• Berücksichtigung branchenspezifischer Anforderungen und regulatorischer Besonderheiten\n\n🎨 Maßgeschneiderte Audit-Strategien:\n• Entwicklung individueller Audit-Roadmaps, die perfekt zu Ihrer Organisationsstruktur passen\n• Anpassung von Audit-Methoden an spezifische Geschäftsmodelle und operative Anforderungen\n• Integration innovativer Audit-Technologien und digitaler Tools für effiziente Durchführung\n• Berücksichtigung zukünftiger Geschäftsentwicklungen und strategischer Initiativen\n• Entwicklung flexibler Audit-Frameworks, die sich an verändernde Anforderungen anpassen\n\n🚀 Innovative Audit-Methoden:\n• Einsatz modernster Audit-Tools und datengetriebener Analysemethoden\n• Anwendung agiler Projektmanagement-Prinzipien für flexible und responsive Audit-Vorbereitung\n• Nutzung von Automatisierungstools für effiziente Evidence-Management und Dokumentation\n• Integration von KI-gestützten Audit-Vorbereitung-Systemen für proaktive Risikoidentifikation\n• Verwendung interaktiver Workshops und Simulation für effektive Stakeholder-Vorbereitung\n\n🌐 Ganzheitliche Compliance-Integration:\n• Simultane Berücksichtigung multipler Compliance-Frameworks für maximale Synergieeffekte\n• Proaktive Integration zukünftiger Audit-Entwicklungen und Standard-Updates\n• Entwicklung einheitlicher Audit-Governance-Strukturen für alle Compliance-Bereiche\n• Schaffung effizienter Multi-Standard-Audit-Prozesse für optimierte Ressourcennutzung\n• Aufbau einer zukunftsfähigen Audit-Infrastruktur für evolvierende Anforderungen\n\n🎯 Ergebnisorientierte Erfolgsmessung:\n• Definition klarer, messbarer Audit-Erfolgskriterien und KPIs für alle Vorbereitungsphasen\n• Kontinuierliches Monitoring und Anpassung der Audit-Strategie basierend auf Fortschritt\n• Regelmäßige Stakeholder-Kommunikation und Transparenz über Audit-Readiness-Status\n• Aufbau nachhaltiger Audit-Performance-Metriken für kontinuierliche Verbesserung\n• Sicherstellung langfristiger Audit-Exzellenz durch strategische Erfolgsmessung\n\n💡 Zukunftsorientierte Audit-Innovation:\n• Integration emerging Audit-Trends und Best Practices in die Vorbereitung\n• Aufbau adaptiver Audit-Strategien für sich entwickelnde Standard-Anforderungen\n• Entwicklung von Audit-Kompetenzen für zukünftige Compliance-Herausforderungen\n• Schaffung einer innovativen Audit-Kultur, die kontinuierliche Verbesserung fördert\n• Etablierung von Audit-Excellence als strategischen Wettbewerbsvorteil"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche konkreten Vorteile bietet ein systematisches Pre-Assessment vor dem eigentlichen ISO 27001 Audit?',
        answer: "Ein systematisches Pre-Assessment bildet das strategische Fundament für erfolgreiche ISO 27001 Audits und bietet weit mehr als eine einfache Vorab-Überprüfung. Es schafft Transparenz, minimiert Audit-Risiken und optimiert die Erfolgswahrscheinlichkeit durch umfassende Bewertung der Audit-Bereitschaft und strategische Optimierung aller Audit-relevanten Aspekte.\n\n📊 Strategische Audit-Readiness-Bewertung:\n• Vollständige Transparenz über den aktuellen Stand der ISMS-Implementierung und Audit-Bereitschaft\n• Systematische Identifikation kritischer Audit-Risiken und potenzieller Compliance-Lücken\n• Realistische Einschätzung der Audit-Erfolgswahrscheinlichkeit und erforderlicher Vorbereitungsmaßnahmen\n• Frühzeitige Erkennung organisatorischer und technischer Herausforderungen\n• Schaffung einer soliden Datenbasis für fundierte Audit-Strategieentscheidungen\n\n🎯 Optimierte Audit-Vorbereitung:\n• Präzise Priorisierung von Verbesserungsmaßnahmen basierend auf Audit-Relevanz und Risikobewertung\n• Entwicklung einer detaillierten Audit-Vorbereitung-Roadmap mit klaren Meilensteinen\n• Identifikation von Quick Wins und kurzfristigen Optimierungsmöglichkeiten\n• Optimierung der Audit-Timeline durch parallele Bearbeitung unabhängiger Maßnahmen\n• Vermeidung von Last-Minute-Stress durch systematische und rechtzeitige Vorbereitung\n\n🔄 Evidence-Management-Optimierung:\n• Systematische Bewertung der Dokumentationsqualität und Evidence-Verfügbarkeit\n• Identifikation fehlender oder unvollständiger Audit-Evidenzen\n• Optimierung der Dokumentationsstruktur für effiziente Audit-Navigation\n• Entwicklung effizienter Evidence-Bereitstellung-Prozesse\n• Aufbau robuster Dokumentations-Management-Systeme für nachhaltige Audit-Readiness\n\n💼 Stakeholder-Vorbereitung und Kompetenzentwicklung:\n• Bewertung der Audit-Kompetenzen und Vorbereitung aller Audit-Teilnehmer\n• Identifikation von Schulungs- und Entwicklungsbedarfen für optimale Audit-Performance\n• Entwicklung rollenspezifischer Audit-Vorbereitung-Programme\n• Aufbau von Vertrauen und Sicherheit bei allen Beteiligten durch systematische Vorbereitung\n• Schaffung einer positiven Audit-Kultur und konstruktiven Audit-Einstellung\n\n🛡️ Risikominimierung und Contingency-Planung:\n• Frühzeitige Identifikation und Mitigation potenzieller Audit-Hindernisse\n• Entwicklung von Backup-Strategien und alternativen Evidence-Quellen\n• Vorbereitung auf verschiedene Audit-Szenarien und Auditor-Präferenzen\n• Aufbau von Flexibilität und Anpassungsfähigkeit für unvorhergesehene Audit-Situationen\n• Schaffung von Redundanzen in kritischen Audit-Bereichen\n\n📈 Kontinuierliche Verbesserung und Lernen:\n• Nutzung des Pre-Assessments als Lernmöglichkeit für die gesamte Organisation\n• Identifikation von Verbesserungspotenzialen über die Audit-Anforderungen hinaus\n• Aufbau einer Kultur der kontinuierlichen Selbstbewertung und Verbesserung\n• Integration von Pre-Assessment-Erkenntnissen in langfristige ISMS-Entwicklung\n• Schaffung von Grundlagen für zukünftige Audit-Zyklen und Compliance-Aktivitäten"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie gewährleistet ADVISORI die optimale Vorbereitung von Stakeholdern auf ihre Rollen im ISO 27001 Audit?',
        answer: "Die optimale Stakeholder-Vorbereitung ist ein kritischer Erfolgsfaktor für ISO 27001 Audits und erfordert einen systematischen, rollenspezifischen Ansatz, der über traditionelle Schulungen hinausgeht. ADVISORI entwickelt maßgeschneiderte Vorbereitung-Programme, die alle Beteiligten optimal auf ihre spezifischen Audit-Rollen vorbereiten und Vertrauen sowie Kompetenz aufbauen.\n\n🎯 Rollenspezifische Audit-Vorbereitung:\n• Entwicklung individueller Vorbereitung-Programme für jede Stakeholder-Gruppe und Audit-Rolle\n• Anpassung der Vorbereitung-Inhalte an spezifische Verantwortlichkeiten und Audit-Erwartungen\n• Berücksichtigung unterschiedlicher Erfahrungslevel und Kompetenzen bei der Programm-Gestaltung\n• Integration praktischer Übungen und Simulationen für realitätsnahe Audit-Vorbereitung\n• Aufbau von Selbstvertrauen und Sicherheit durch systematische Kompetenzentwicklung\n\n👥 Zielgruppenspezifische Schulungsansätze:\n• Führungskräfte-Vorbereitung mit Fokus auf strategische Audit-Aspekte und Management-Verantwortung\n• Fachexperten-Training für tiefgreifende technische Diskussionen und Evidence-Präsentation\n• Prozessverantwortliche-Schulung für effektive Prozess-Demonstration und Dokumentations-Navigation\n• Mitarbeiter-Sensibilisierung für professionelle Audit-Teilnahme und konstruktive Kommunikation\n• ISMS-Team-Intensivtraining für umfassende Audit-Koordination und Stakeholder-Management\n\n🎭 Praktische Audit-Simulation:\n• Durchführung realistischer Audit-Simulationen mit erfahrenen Audit-Experten\n• Nachstellung verschiedener Audit-Szenarien und Herausforderungen für optimale Vorbereitung\n• Feedback-Sessions und Coaching für kontinuierliche Verbesserung der Audit-Performance\n• Aufbau von Routine und Gelassenheit durch wiederholte Übung kritischer Audit-Situationen\n• Entwicklung effektiver Kommunikationsstrategien für verschiedene Auditor-Typen\n\n📚 Umfassende Wissensvermittlung:\n• Vermittlung fundierter ISO 27001 Kenntnisse und Audit-Methodik für alle Beteiligten\n• Aufbau von Verständnis für Auditor-Perspektiven und Bewertungskriterien\n• Schulung in effektiver Evidence-Präsentation und Dokumentations-Navigation\n• Entwicklung von Problemlösungskompetenzen für unvorhergesehene Audit-Situationen\n• Integration aktueller Audit-Trends und Best Practices in die Wissensvermittlung\n\n🔄 Kontinuierliche Kompetenzentwicklung:\n• Aufbau nachhaltiger Audit-Kompetenzen für zukünftige Audit-Zyklen\n• Entwicklung interner Audit-Champions und Multiplikatoren\n• Schaffung von Mentoring-Programmen für kontinuierlichen Wissenstransfer\n• Integration von Audit-Kompetenzen in reguläre Entwicklungsprogramme\n• Aufbau einer lernenden Organisation mit kontinuierlicher Audit-Excellence\n\n💬 Effektive Kommunikationsstrategien:\n• Training in professioneller Auditor-Kommunikation und Stakeholder-Management\n• Entwicklung von Techniken für klare und präzise Information-Vermittlung\n• Aufbau von Fähigkeiten für konstruktive Diskussionen und Problemlösung\n• Schulung in Stressmanagement und professionellem Verhalten unter Audit-Druck\n• Schaffung einheitlicher Kommunikationsstandards für konsistente Audit-Erfahrung"
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
