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
    console.log('Updating ISO 27001 Zertifizierung page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-zertifizierung' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-zertifizierung" not found')
    }
    
    // Create new FAQs for ISO 27001 certification fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum ist eine professionelle Begleitung bei der ISO 27001 Zertifizierung entscheidend für den Erfolg?',
        answer: "Eine professionelle Begleitung bei der ISO 27001 Zertifizierung ist der Schlüssel für nachhaltigen Erfolg und geht weit über die reine Compliance-Erfüllung hinaus. Sie transformiert den Zertifizierungsprozess von einer regulatorischen Hürde zu einem strategischen Wettbewerbsvorteil, der Vertrauen schafft, Risiken minimiert und operative Exzellenz fördert.\n\n🎯 Strategische Zertifizierungsplanung:\n• Entwicklung einer maßgeschneiderten Zertifizierungsstrategie, die optimal auf Ihre Unternehmensziele und Ressourcen abgestimmt ist\n• Präzise Auswahl der geeigneten Zertifizierungsstelle basierend auf Branchenexpertise, Reputation und spezifischen Anforderungen\n• Realistische Zeitplanung mit strategischen Meilensteinen, die operative Kontinuität gewährleistet\n• Optimale Ressourcenallokation zur Maximierung der Effizienz und Minimierung von Geschäftsunterbrechungen\n• Integration der Zertifizierungsziele in die übergeordnete Unternehmensstrategie für nachhaltigen Mehrwert\n\n🔍 Risikominimierung durch Expertise:\n• Frühzeitige Identifikation potenzieller Audit-Stolpersteine und proaktive Lösungsentwicklung\n• Vermeidung kostspieliger Verzögerungen durch systematische Vorbereitung und kontinuierliche Qualitätssicherung\n• Professionelle Einschätzung der Zertifizierungsbereitschaft durch erfahrene Experten\n• Strukturierte Herangehensweise zur Minimierung von Unsicherheiten und Überraschungen\n• Aufbau robuster Dokumentations- und Nachweisstrukturen, die Audit-Anforderungen optimal erfüllen\n\n📊 Methodische Exzellenz:\n• Anwendung bewährter Zertifizierungsmethoden mit nachweislichen Erfolgsraten\n• Systematische Gap-Analyse zur präzisen Identifikation von Handlungsbedarfen\n• Strukturierte Audit-Vorbereitung mit realistischen Simulationen und Optimierungszyklen\n• Kontinuierliche Qualitätssicherung durch regelmäßige Fortschrittskontrollen und Anpassungen\n• Professionelle Begleitung während kritischer Zertifizierungsphasen für optimale Performance\n\n💼 Nachhaltige Wertschöpfung:\n• Aufbau einer zukunftsfähigen Informationssicherheitsorganisation, die über die Zertifizierung hinaus Mehrwert schafft\n• Entwicklung interner Kompetenzen und Verantwortlichkeiten für langfristige Compliance-Sicherung\n• Integration moderner Compliance-Anforderungen für strategische Zukunftsfähigkeit\n• Schaffung einer soliden Basis für weitere Zertifizierungen und Compliance-Erweiterungen\n• Etablierung einer Kultur der kontinuierlichen Verbesserung und Innovation im Sicherheitsbereich\n\n🚀 Wettbewerbsvorteile realisieren:\n• Maximierung des Business Value durch strategische Positionierung der Zertifizierung\n• Aufbau von Vertrauen bei Kunden, Partnern und Stakeholdern durch professionelle Herangehensweise\n• Differenzierung im Markt durch nachweisliche Informationssicherheitsexzellenz\n• Schaffung von Grundlagen für neue Geschäftsmöglichkeiten und Markterschließung\n• Entwicklung einer robusten Sicherheitsarchitektur, die sich an verändernde Bedrohungslandschaften anpassen kann"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche kritischen Erfolgsfaktoren bestimmen den Ausgang einer ISO 27001 Zertifizierung?',
        answer: "Der Erfolg einer ISO 27001 Zertifizierung hängt von einer Vielzahl kritischer Faktoren ab, die systematisch adressiert werden müssen. Eine professionelle Herangehensweise berücksichtigt alle diese Dimensionen und schafft die Voraussetzungen für nachhaltigen Zertifizierungserfolg und langfristige Compliance-Exzellenz.\n\n🏗️ Strategische Vorbereitung und Planung:\n• Umfassende Bestandsaufnahme der aktuellen Informationssicherheitslage als solide Ausgangsbasis\n• Entwicklung einer realistischen und ressourcenoptimierten Zertifizierungsroadmap\n• Klare Definition von Verantwortlichkeiten und Governance-Strukturen für alle Projektphasen\n• Strategische Integration der Zertifizierungsziele in bestehende Geschäftsprozesse und Managementsysteme\n• Aufbau einer robusten Projektorganisation mit ausreichenden Kapazitäten und Kompetenzen\n\n📋 Dokumentationsqualität und Nachweisführung:\n• Entwicklung einer strukturierten und auditfähigen Dokumentationsarchitektur\n• Sicherstellung der Vollständigkeit und Aktualität aller erforderlichen Dokumente und Nachweise\n• Implementierung effizienter Dokumentenmanagement-Prozesse für kontinuierliche Pflege\n• Aufbau nachvollziehbarer Verfahren und Arbeitsanweisungen, die praktikabel und umsetzbar sind\n• Etablierung robuster Versionskontrolle und Änderungsmanagement für alle ISMS-Dokumente\n\n🔄 Prozessreife und operative Umsetzung:\n• Implementierung funktionsfähiger und gelebter Informationssicherheitsprozesse\n• Nachweis der kontinuierlichen Anwendung und Überwachung aller ISMS-Komponenten\n• Aufbau effektiver Monitoring- und Messsysteme für kontinuierliche Leistungsbewertung\n• Etablierung systematischer Verbesserungsprozesse und Korrekturmaßnahmen\n• Integration der Sicherheitsprozesse in den operativen Geschäftsalltag ohne Behinderung der Produktivität\n\n👥 Organisatorische Bereitschaft und Kompetenz:\n• Aufbau ausreichender interner Kompetenzen und Verantwortlichkeiten für ISMS-Management\n• Sicherstellung des Management-Commitments und der strategischen Unterstützung\n• Entwicklung einer positiven Sicherheitskultur und Bewusstseinsbildung auf allen Ebenen\n• Qualifizierung der Mitarbeiter für ihre spezifischen Rollen im Informationssicherheitsmanagement\n• Etablierung effektiver Kommunikations- und Schulungsstrukturen für kontinuierliche Kompetenzentwicklung\n\n🛡️ Technische Implementierung und Kontrollen:\n• Umsetzung angemessener und wirksamer technischer Sicherheitsmaßnahmen\n• Implementierung robuster Zugangskontrollen und Identitätsmanagement-Systeme\n• Aufbau effektiver Monitoring- und Incident-Response-Kapazitäten\n• Sicherstellung der Verfügbarkeit und Integrität kritischer Informationssysteme\n• Etablierung systematischer Schwachstellen- und Patch-Management-Prozesse für kontinuierliche Sicherheit"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie läuft der ISO 27001 Zertifizierungsprozess ab und welche Phasen sind besonders kritisch?',
        answer: "Der ISO 27001 Zertifizierungsprozess folgt einem strukturierten Ablauf mit mehreren kritischen Phasen, die jeweils spezifische Herausforderungen und Erfolgsfaktoren aufweisen. Eine professionelle Begleitung gewährleistet optimale Vorbereitung und erfolgreiche Durchführung aller Zertifizierungsphasen.\n\n📋 Vorzertifizierung und strategische Planung:\n• Umfassende Readiness-Bewertung zur Einschätzung der aktuellen Zertifizierungsbereitschaft\n• Strategische Auswahl der optimalen Zertifizierungsstelle basierend auf Branchenexpertise und Anforderungen\n• Entwicklung einer detaillierten Zertifizierungsroadmap mit realistischen Zeitplänen und Meilensteinen\n• Aufbau der erforderlichen Projektorganisation und Ressourcenallokation\n• Definition klarer Erfolgskriterien und Qualitätssicherungsmaßnahmen für alle Projektphasen\n\n🔍 Stage 1 Audit - Dokumentationsprüfung:\n• Systematische Überprüfung der ISMS-Dokumentation auf Vollständigkeit und Standardkonformität\n• Bewertung der Angemessenheit der implementierten Sicherheitsrichtlinien und Verfahren\n• Identifikation potenzieller Dokumentationslücken und Verbesserungsbedarfe\n• Vorbereitung auf das Stage 2 Audit durch gezielte Optimierung identifizierter Schwachstellen\n• Aufbau von Vertrauen und positiver Beziehung zur Zertifizierungsstelle durch professionelle Präsentation\n\n🏢 Stage 2 Audit - Implementierungsprüfung:\n• Umfassende Vor-Ort-Prüfung der praktischen ISMS-Implementierung und Wirksamkeit\n• Detaillierte Bewertung der gelebten Sicherheitsprozesse und deren operative Umsetzung\n• Interviews mit Mitarbeitern zur Überprüfung des Sicherheitsbewusstseins und der Kompetenz\n• Technische Überprüfung der implementierten Sicherheitskontrollen und deren Funktionsfähigkeit\n• Nachweis der kontinuierlichen Überwachung, Messung und Verbesserung des ISMS\n\n⚠️ Kritische Erfolgsfaktoren während der Audits:\n• Professionelle Vorbereitung aller Audit-Teilnehmer auf typische Fragen und Situationen\n• Strukturierte Präsentation von Nachweisen und Dokumenten in logischer und nachvollziehbarer Form\n• Offene und transparente Kommunikation mit den Auditoren bei gleichzeitiger Demonstration von Kompetenz\n• Proaktive Behandlung identifizierter Findings mit konstruktiven Korrekturmaßnahmen\n• Kontinuierliche Begleitung durch erfahrene Experten zur Optimierung der Audit-Performance\n\n🎯 Post-Audit und Zertifizierungsabschluss:\n• Systematische Bearbeitung aller Audit-Findings mit nachhaltigen Korrekturmaßnahmen\n• Professionelle Dokumentation der Maßnahmenumsetzung für die Zertifizierungsstelle\n• Vorbereitung auf die Zertifikatsvergabe und strategische Kommunikation des Erfolgs\n• Aufbau nachhaltiger Compliance-Überwachungsprozesse für die Zertifizierungserhaltung\n• Planung der kontinuierlichen Verbesserung und Vorbereitung auf zukünftige Überwachungsaudits"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche häufigen Fehler gefährden den Zertifizierungserfolg und wie können sie vermieden werden?',
        answer: "Viele Organisationen scheitern an vermeidbaren Fehlern während des Zertifizierungsprozesses, die durch professionelle Begleitung und bewährte Methoden systematisch verhindert werden können. Die Kenntnis typischer Stolpersteine und deren proaktive Vermeidung ist entscheidend für nachhaltigen Zertifizierungserfolg.\n\n📊 Unzureichende Vorbereitung und Planung:\n• Realistische Zeitplanung statt übermäßig optimistischer Terminvorgaben, die zu Stress und Qualitätsverlust führen\n• Umfassende Gap-Analyse zur präzisen Identifikation aller Handlungsbedarfe vor Projektbeginn\n• Ausreichende Ressourcenallokation für alle Projektphasen ohne Vernachlässigung kritischer Aktivitäten\n• Strategische Einbindung des Managements zur Sicherstellung kontinuierlicher Unterstützung und Priorität\n• Aufbau robuster Projektstrukturen mit klaren Verantwortlichkeiten und Eskalationswegen\n\n📋 Dokumentationsmängel und Nachweislücken:\n• Entwicklung praxistauglicher Dokumentation statt theoretischer Papiertiger ohne operative Relevanz\n• Sicherstellung der Aktualität und Vollständigkeit aller ISMS-Dokumente durch systematische Pflege\n• Aufbau nachvollziehbarer Verfahren, die tatsächlich gelebt und kontinuierlich angewendet werden\n• Vermeidung von Über-Dokumentation durch fokussierte und zweckmäßige Dokumentationsstrukturen\n• Etablierung effizienter Dokumentenmanagement-Prozesse für kontinuierliche Qualitätssicherung\n\n🔄 Mangelnde operative Umsetzung:\n• Implementierung funktionsfähiger Prozesse statt rein formaler Verfahrensbeschreibungen\n• Nachweis der kontinuierlichen Anwendung durch systematische Überwachung und Messung\n• Aufbau wirksamer Kontrollmechanismen zur Sicherstellung der Prozessqualität\n• Vermeidung von Implementierungslücken durch strukturierte Umsetzungsplanung und Qualitätskontrolle\n• Etablierung einer Kultur der kontinuierlichen Verbesserung statt statischer Compliance-Mentalität\n\n👥 Unzureichende Mitarbeiterqualifikation:\n• Systematische Schulung aller relevanten Mitarbeiter für ihre spezifischen ISMS-Rollen\n• Aufbau ausreichender interner Kompetenzen zur eigenständigen ISMS-Betreuung\n• Sicherstellung des Sicherheitsbewusstseins auf allen Organisationsebenen durch gezielte Sensibilisierung\n• Vermeidung von Wissensmonopolen durch Aufbau redundanter Kompetenzen\n• Kontinuierliche Kompetenzentwicklung zur Anpassung an verändernde Anforderungen\n\n⚡ Audit-spezifische Risiken:\n• Professionelle Vorbereitung auf typische Audit-Situationen und Fragestellungen\n• Strukturierte Präsentation von Nachweisen in logischer und nachvollziehbarer Form\n• Offene Kommunikation mit Auditoren bei gleichzeitiger Demonstration von Fachkompetenz\n• Proaktive Behandlung von Findings mit konstruktiven und nachhaltigen Lösungsansätzen\n• Kontinuierliche Begleitung durch erfahrene Experten zur Optimierung der Audit-Performance und Risikominimierung"
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
