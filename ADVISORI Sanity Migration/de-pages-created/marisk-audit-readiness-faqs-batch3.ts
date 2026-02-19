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
    console.log('Updating MaRisk Audit Readiness page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'marisk-audit-readiness' })
    
    if (!existingDoc) {
      throw new Error('Document "marisk-audit-readiness" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie sollten Institute einen systematischen Maßnahmenmanagementprozess für MaRisk-Prüfungsfeststellungen gestalten?",
        answer: "Ein systematischer Maßnahmenmanagementprozess ist entscheidend für die nachhaltige Adressierung von MaRisk-Prüfungsfeststellungen und stellt sicher, dass identifizierte Schwachstellen nicht nur oberflächlich, sondern grundlegend behoben werden. Die strategische Gestaltung dieses Prozesses kann den Unterschied zwischen wiederkehrenden Feststellungen und einer kontinuierlichen Verbesserung der Compliance-Situation ausmachen.\n\n🔄 Kernelemente eines wirksamen Maßnahmenmanagements:\n• Risikoorientierte Priorisierung: Systematische Bewertung und Priorisierung von Feststellungen nach regulatorischer Relevanz, Risikopotenzial und Komplexität der erforderlichen Abhilfemaßnahmen, um begrenzte Ressourcen optimal einzusetzen.\n• Ursachenanalyse und Lösungsdesign: Strukturierte Analyse der Grundursachen (Root Causes) jeder Feststellung, die über symptomatische Behandlungen hinausgeht und nachhaltige Lösungskonzepte ermöglicht.\n• Maßnahmendefinition mit klaren Erfolgsparametern: Formulierung konkreter, messbarer und terminierter Maßnahmen mit eindeutigen Erfolgskriterien zur objektiven Beurteilung der Wirksamkeit.\n• Mehrstufige Qualitätssicherung: Etablierung eines strukturierten Validierungsprozesses, der sowohl die formale Umsetzung als auch die tatsächliche Wirksamkeit der implementierten Maßnahmen überprüft.\n\n📊 Praktische Implementierungsansätze:\n• Integriertes Tracking-System: Implementierung einer zentralen Plattform zur Dokumentation, Verfolgung und Überwachung aller Feststellungen und Maßnahmen mit automatisierten Erinnerungen und Eskalationsmechanismen.\n• SMART-Maßnahmenformulierung: Entwicklung von Maßnahmen nach dem SMART-Prinzip (Spezifisch, Messbar, Attribuierbar, Realistisch, Terminiert) mit klaren Verantwortlichkeiten und Meilensteinen.\n• Regelmäßige Statusreviews: Durchführung strukturierter Fortschrittsüberprüfungen mit den verantwortlichen Stakeholdern, idealerweise in abgestufter Frequenz je nach Risikoeinstufung der Feststellung.\n• Evidence-basierte Abnahme: Etablierung einer formalen Abnahme implementierter Maßnahmen auf Basis konkreter Nachweise, die aufsichtlichen Anforderungen an die Nachvollziehbarkeit genügen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche technologischen Lösungen können die MaRisk-Prüfungsbereitschaft verbessern und den Prüfungsprozess effizienter gestalten?",
        answer: "Der strategische Einsatz moderner Technologien kann die MaRisk-Prüfungsbereitschaft revolutionieren und den Prüfungsprozess signifikant effizienter gestalten. Die richtige technologische Unterstützung reduziert nicht nur den manuellen Aufwand, sondern verbessert auch die Qualität, Konsistenz und Nachvollziehbarkeit der Prüfungsvorbereitung und -durchführung.\n\n💻 Schlüsseltechnologien für moderne Prüfungsvorbereitung:\n• Integrierte GRC-Plattformen: Einsatz spezialisierter Governance, Risk & Compliance-Lösungen, die den gesamten Prüfungslebenszyklus abbilden - von der Vorbereitung über die Durchführung bis zur Nachbereitung und Maßnahmenverfolgung.\n• Automatisierte Dokumentenmanagementsysteme: Implementierung intelligenter Dokumentenplattformen mit Versionierung, Workflow-Integration, automatischer Metadatenanreicherung und kollaborativen Review-Funktionen.\n• Datenanalyse und Visualisierungstools: Nutzung fortschrittlicher Analytics-Lösungen zur Auswertung großer Datenmengen, Identifikation von Compliance-Risiken und anschaulicher Visualisierung komplexer Zusammenhänge für Prüfer.\n• Workflow-Automation: Einsatz von Prozessautomatisierungstechnologien zur Standardisierung wiederkehrender Prüfungsvorbereitungsaktivitäten, Reduzierung manueller Fehler und Freisetzung von Ressourcen für strategische Aufgaben.\n\n🔧 Praktische Implementierungsstrategien:\n• Prüfungsportale und Kollaborationsplattformen: Etablierung zentraler digitaler Plattformen für den strukturierten Informationsaustausch zwischen Institut und Prüfern mit integrierten Nachverfolgungs- und Dokumentationsfunktionen.\n• Mobile Audit-Lösungen: Bereitstellung mobiler Zugriffsmöglichkeiten auf prüfungsrelevante Dokumente und Workflows, um Flexibilität während der Prüfungsdurchführung zu gewährleisten und Reaktionszeiten zu verkürzen.\n• KI-gestützte Qualitätsprüfung: Implementierung intelligenter Analysesysteme zur automatisierten Überprüfung der Vollständigkeit, Konsistenz und Qualität von Prüfungsdokumenten und Nachweisen.\n• Integrierte Dashboards und Reportingtools: Entwicklung maßgeschneiderter Echtzeit-Dashboards für verschiedene Stakeholder-Gruppen mit rollenspezifischen KPIs und automatisierten Statusberichten zum Prüfungsfortschritt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können Finanzinstitute Prüfungserfahrungen systematisch auswerten und für kontinuierliche Verbesserungen nutzen?",
        answer: "Die systematische Auswertung von Prüfungserfahrungen und deren Transformation in kontinuierliche Verbesserungsimpulse ist ein entscheidender Erfolgsfaktor für eine nachhaltige MaRisk-Compliance. Institute, die über das reine Abarbeiten von Feststellungen hinausgehen und Prüfungen als strategische Lernchance begreifen, können den Reifeprozess ihrer Compliance-Organisation signifikant beschleunigen.\n\n📚 Strategische Ansätze zur Prüfungsauswertung:\n• Strukturiertes Lessons-Learned-Programm: Etablierung eines formalen Prozesses zur systematischen Erfassung und Analyse von Prüfungserfahrungen, der über individuelle Erkenntnisse hinausgeht und institutionelles Lernen ermöglicht.\n• Mehrdimensionale Auswertungsperspektiven: Kombination verschiedener Analyseperspektiven - vom inhaltlichen Feststellungsfokus über prozessuale Aspekte der Prüfungsdurchführung bis hin zu organisatorischen und kulturellen Faktoren.\n• Tiefenanalyse wiederkehrender Muster: Identifikation übergreifender Schwachstellenmuster jenseits einzelner Feststellungen, um systemische Ursachen und grundlegende Handlungsfelder zu erkennen.\n• Proaktive Wissensintegration: Systematische Berücksichtigung externer Prüfungserfahrungen aus dem Marktumfeld, aufsichtlicher Veröffentlichungen und regulatorischer Entwicklungen für die eigene Verbesserungsstrategie.\n\n🔄 Praktische Implementierungsbausteine:\n• Post-Prüfungs-Retrospektiven: Durchführung strukturierter Reflexionsworkshops mit allen Prüfungsbeteiligten zeitnah nach Prüfungsabschluss, die bewusst über die reinen Feststellungsinhalte hinausgehen und auch Prozess- und Vorbereitungsaspekte beleuchten.\n• Kennzahlenbasiertes Prüfungsmonitoring: Entwicklung und Tracking aussagekräftiger Metriken zur objektiven Bewertung der Prüfungsperformance und Identifikation von Verbesserungspotenzialen, wie Feststellungsquote pro Themengebiet oder durchschnittliche Reaktionszeit auf Prüferanfragen.\n• Cross-funktionale Verbesserungsteams: Etablierung bereichsübergreifender Task Forces zur Adressierung systemischer Schwachstellen, die in Prüfungen identifiziert wurden und deren Ursachen jenseits einzelner Fachbereiche liegen.\n• Institutionalisiertes Wissensmanagement: Aufbau einer zentralen Wissensdatenbank zu Prüfungserfahrungen, typischen Feststellungsmustern und Best-Practice-Lösungen, die kontinuierlich erweitert wird und allen relevanten Stakeholdern zur Verfügung steht."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche organisatorischen Strukturen haben sich für die Koordination von MaRisk-Prüfungen als besonders effektiv erwiesen?",
        answer: "Die organisatorische Gestaltung der Prüfungskoordination ist ein entscheidender Erfolgsfaktor für effiziente MaRisk-Prüfungen. Die richtige Struktur kann den Ressourceneinsatz optimieren, die Qualität der Prüfungsergebnisse verbessern und die Belastung für das operative Geschäft minimieren. Besonders wichtig ist ein ausgewogenes Verhältnis zwischen zentraler Steuerung und dezentraler Fachverantwortung.\n\n🏢 Erfolgreiche Organisationsmodelle für die Prüfungskoordination:\n• Dedicated Audit Coordination Office: Etablierung einer spezialisierten, permanenten Organisationseinheit für die zentrale Prüfungskoordination mit dezidierten Ressourcen, klarem Mandat und direktem Berichtsweg zur Geschäftsleitung.\n• Matrix-Organisation mit klaren Rollen: Kombination zentraler Koordinationsfunktionen für übergreifende Themen mit dezentralen Ansprechpartnern in den Fachbereichen und klarer Abgrenzung der jeweiligen Verantwortlichkeiten.\n• Three Lines of Defense Integration: Verzahnung der Prüfungskoordination mit dem bestehenden Three-Lines-Modell, wobei typischerweise die zweite Verteidigungslinie (Compliance/Risikocontrolling) die federführende Rolle übernimmt.\n• Virtual Team Approach: Etablierung temporärer, cross-funktionaler Teams für spezifische Prüfungen mit klarer Governance-Struktur und temporärer Freistellung der beteiligten Mitarbeiter von ihren Linienaufgaben.\n\n⚙️ Kritische Erfolgsfaktoren für wirksame Koordinationsstrukturen:\n• Klare Governance und Entscheidungsbefugnisse: Eindeutige Definition von Verantwortlichkeiten, Eskalationswegen und Entscheidungskompetenzen für die Prüfungskoordination, inklusive notwendiger Weisungsbefugnisse gegenüber Fachbereichen in prüfungsbezogenen Angelegenheiten.\n• Ausreichende Ressourcenallokation: Bereitstellung dedizierter Kapazitäten für die Prüfungskoordination, die nicht in Konkurrenz zu operativen Aufgaben stehen und über die erforderlichen Fähigkeiten und Erfahrungen verfügen.\n• Direkter Management-Zugang: Etablierung direkter Kommunikationskanäle zwischen Prüfungskoordination und Geschäftsleitung, um zeitnahe Entscheidungen bei kritischen Themen zu ermöglichen und die Bedeutung der Prüfung institutsweit zu unterstreichen.\n• Fachliche und methodische Kompetenz: Sicherstellung, dass die Prüfungskoordination sowohl über tiefes Verständnis regulatorischer Anforderungen als auch über exzellente Projekt- und Stakeholdermanagement-Fähigkeiten verfügt."
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
    console.log('✅ FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
