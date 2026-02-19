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
    console.log('Updating EBA Governance, Outsourcing & ESG-Vorgaben page with C-Level FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eba-governance-outsourcing-esg-vorgaben' })
    
    if (!existingDoc) {
      throw new Error('Document "eba-governance-outsourcing-esg-vorgaben" not found')
    }
    
    // Create new C-Level FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Welche Anforderungen stellt die EBA an die Vorstandsqualifikation und -verantwortlichkeit im Bereich Governance und ESG, und wie können wir diese effektiv erfüllen?",
        answer: "Die EBA hat die Anforderungen an Vorstandsqualifikation und -verantwortlichkeit signifikant erweitert, insbesondere im Kontext von Governance und ESG. Diese Entwicklung reflektiert die zentrale Rolle der Unternehmensführung bei der Sicherstellung nachhaltiger Geschäftsmodelle und robuster Governance-Strukturen in einem zunehmend komplexen regulatorischen Umfeld.\n\n👥 Erweiterte Qualifikationsanforderungen für Vorstandsmitglieder:\n• ESG-Kompetenz: Vorstandsmitglieder müssen nachweislich über angemessenes Wissen zu Nachhaltigkeitsrisiken, ESG-Faktoren und deren Auswirkungen auf das Geschäftsmodell verfügen.\n• Governance-Expertise: Fundierte Kenntnisse zu internationalen Governance-Standards, regulatorischen Anforderungen und Best Practices werden zunehmend als Teil der fachlichen Eignung bewertet.\n• Technologisches Verständnis: Die Fähigkeit, Risiken und Chancen digitaler Transformation, insbesondere im Kontext von Governance und ESG-Datenmanagement, zu bewerten, wird immer wichtiger.\n• Kulturelle Führungskompetenz: Die Fähigkeit zur Förderung einer nachhaltigen und compliance-orientierten Unternehmenskultur wird explizit als Qualifikationselement betrachtet.\n\n🔄 Praktische Implementierungsansätze:\n• Systematische Kompetenzentwicklung: Etablieren Sie strukturierte Weiterbildungsprogramme für Vorstandsmitglieder zu ESG und Governance, die sowohl externe Expertise als auch interne Perspektiven integrieren.\n• Erweiterte Fit & Proper-Prozesse: Erweitern Sie Ihre Eignungsbeurteilungsprozesse um spezifische Kriterien für ESG- und Governance-Kompetenzen, einschließlich dokumentierter Nachweise früherer Erfahrungen.\n• Diversifizierte Vorstandsstruktur: Fördern Sie gezielt komplementäre Kompetenzprofile im Vorstand, um kollektive Expertise in allen relevanten ESG- und Governance-Dimensionen sicherzustellen.\n• Integrierte Leistungsbewertung: Implementieren Sie ESG- und Governance-KPIs in die Leistungsbewertung und Vergütungsstrukturen des Vorstands, um Anreize für nachhaltige Unternehmensführung zu schaffen.\n\n📋 Dokumentation und Nachweisführung:\n• Qualifikationsmatrix: Erstellen Sie eine umfassende Matrix, die die individuellen und kollektiven Kompetenzen des Vorstands in Bezug auf ESG und Governance transparent darstellt.\n• Kontinuierliche Selbstevaluierung: Implementieren Sie regelmäßige Selbstevaluierungsprozesse des Vorstands mit spezifischem Fokus auf ESG- und Governance-Aspekte.\n• Externe Validierung: Ziehen Sie in regelmäßigen Abständen externe Experten zur unabhängigen Bewertung der Vorstandsqualifikation in ESG- und Governance-Fragen heran.\n• Aufsichtsratsberichterstattung: Etablieren Sie strukturierte Berichtsprozesse zu ESG- und Governance-Themen vom Vorstand an den Aufsichtsrat, um die fortlaufende Überwachung zu erleichtern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Wie können wir die EBA-Vorgaben zur ESG-Berichterstattung effizient in unsere bestehende Governance-Struktur integrieren und gleichzeitig Mehrwert für unser Institut schaffen?",
        answer: "Die Integration der EBA-Vorgaben zur ESG-Berichterstattung in bestehende Governance-Strukturen stellt Finanzinstitute vor erhebliche Herausforderungen, bietet jedoch gleichzeitig strategische Chancen. Ein wohlüberlegter Implementierungsansatz kann nicht nur regulatorische Compliance sicherstellen, sondern auch substanziellen geschäftlichen Mehrwert generieren.\n\n🔄 Strategische Governance-Integration:\n• Mandatsausweitung existierender Gremien: Erweitern Sie die Verantwortlichkeiten bestehender Governance-Strukturen (z.B. Risikoausschuss, Audit Committee) um ESG-Aspekte, anstatt isolierte ESG-Gremien zu schaffen, die parallel zu etablierten Strukturen operieren.\n• Hierarchieübergreifende Verankerung: Etablieren Sie klare ESG-Verantwortlichkeiten auf allen Organisationsebenen – vom Vorstand über das mittlere Management bis zu operativen Einheiten – mit durchgängigen Berichtslinien und Eskalationswegen.\n• Prozessintegration statt Parallelstrukturen: Integrieren Sie ESG-Berichtsprozesse in bestehende Finanz- und Risikoberichtssysteme, um Dateninkonsistenzen zu vermeiden und die Gesamteffizienz zu steigern.\n• Alignment mit Geschäftsstrategie: Positionieren Sie ESG-Reporting nicht als isolierte Compliance-Übung, sondern als strategisches Instrument zur Unterstützung nachhaltiger Geschäftsentscheidungen und Produktinnovationen.\n\n📊 Daten- und Systemperspektive:\n• Datenarchitektur-Review: Analysieren Sie Ihre bestehende Datenarchitektur auf Fähigkeit zur Erfassung, Verarbeitung und Reporting von ESG-Daten mit der erforderlichen Granularität, Konsistenz und Auditierbarkeit.\n• Metadaten-Management: Implementieren Sie ein robustes Metadatenmanagement, das klare Definitionen, Berechnungsmethoden und Datenquellen für alle ESG-KPIs dokumentiert und transparent macht.\n• Integrierte Systemlösung: Evaluieren Sie bestehende Risiko- und Controlling-Systeme auf Erweiterbarkeit für ESG-Reporting und vermeiden Sie isolierte Point-Solutions, die langfristig zu Integrationsherausforderungen führen.\n• Automatisierte Kontrollen: Implementieren Sie automatisierte Datenqualitätskontrollen und Plausibilitätsprüfungen für ESG-Daten, die analog zu bestehenden Kontrollmechanismen für Finanz- und Risikodaten funktionieren.\n\n💼 Geschäftlicher Mehrwert durch integriertes ESG-Reporting:\n• 360-Grad-Kundenansicht: Nutzen Sie ESG-Daten zur Erweiterung des Kundenverständnisses und zur Identifikation neuer Geschäftspotenziale im Bereich nachhaltiger Finanzierungen und Investments.\n• Portfoliooptimierung: Verwenden Sie ESG-Analysen zur frühzeitigen Identifikation von Transitionsrisiken im Kreditportfolio und zur proaktiven Steuerung der Portfolioallokation.\n• Kapitalmarktvorteile: Nutzen Sie eine fortschrittliche ESG-Berichterstattung zur Verbesserung Ihres ESG-Ratings und zur Optimierung Ihrer Refinanzierungskosten durch nachhaltigen Investorenzugang.\n• Wettbewerbsdifferenzierung: Positionieren Sie sich durch transparent kommunizierte ESG-Leistungen als Vorreiter im Bereich nachhaltiger Finanzwirtschaft gegenüber Kunden, Investoren und Talenten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Welche Strategie sollten wir verfolgen, um die EBA-Richtlinien zum Cloud-Outsourcing effektiv umzusetzen, ohne Innovationspotenziale einzuschränken?",
        answer: "Die EBA-Richtlinien zum Cloud-Outsourcing stellen Finanzinstitute vor die Herausforderung, regulatorische Compliance mit technologischer Innovation in Einklang zu bringen. Ein strategischer Implementierungsansatz kann jedoch sicherstellen, dass Compliance-Anforderungen nicht als Innovationsbremse wirken, sondern als Enabler für sichere und nachhaltige Cloud-Transformationen fungieren.\n\n☁️ Strategische Cloud-Governance:\n• Risk-Based Cloud-Strategie: Entwickeln Sie ein differenziertes Framework, das regulatorische Anforderungen an die Kritikalität der jeweiligen Cloud-Services und Daten anpasst und Innovationsspielräume für unkritischere Anwendungen schafft.\n• Multi-Cloud-Governance: Etablieren Sie ein übergreifendes Governance-Framework, das konsistente Kontrollen über verschiedene Cloud-Provider hinweg sicherstellt, aber gleichzeitig spezifische Provider-Stärken für unterschiedliche Anwendungsfälle nutzbar macht.\n• Cloud-Center of Excellence: Bündeln Sie Cloud-Expertise in einem interdisziplinären Kompetenzzentrum, das sowohl technische Innovation fördert als auch regulatorische Compliance sicherstellt.\n• Automatisierte Compliance: Implementieren Sie 'Compliance as Code'-Ansätze, die regulatorische Anforderungen in automatisierte Kontrollen übersetzen und in CI/CD-Pipelines integrieren, um Compliance ohne manuelle Interventionen sicherzustellen.\n\n🔄 Cloud-Vertragsmanagement und Dienstleistersteuerung:\n• Standardisierte Vertragsbausteine: Entwickeln Sie vorab mit Compliance und Rechtsabteilung abgestimmte Cloud-Vertragskomponenten, die regulatorische Anforderungen abdecken und flexibel kombinierbar sind.\n• Transparenz-Anforderungen: Definieren Sie klare Anforderungen an Cloud-Provider bezüglich Informationsbereitstellung, Audit-Rechten und Einblicken in Sicherheits- und Compliance-Kontrollen.\n• Exit-Strategie-Framework: Etablieren Sie für jede Cloud-Lösung eine dokumentierte Exit-Strategie, die technische, organisatorische und vertragliche Aspekte umfasst und regelmäßig getestet wird.\n• Kollaboratives Provider-Management: Entwickeln Sie proaktive Kommunikationskanäle zu strategischen Cloud-Providern, um regulatorische Anforderungen frühzeitig in deren Produkt- und Compliance-Roadmaps zu integrieren.\n\n🛡️ Sicherheits- und Risikointegration:\n• Cloud-Native Security: Setzen Sie auf Cloud-native Sicherheitsansätze, die Sicherheitskontrollen direkt in Cloud-Infrastrukturen und -Plattformen integrieren, statt traditionelle On-Premise-Sicherheitskonzepte zu replizieren.\n• Kontinuierliches Risk Assessment: Implementieren Sie automatisierte Cloud-Risikobewertungen, die fortlaufend Cloud-Konfigurationen gegen regulatorische Anforderungen und Sicherheitsstandards prüfen.\n• DevSecOps-Integration: Verankern Sie Sicherheits- und Compliance-Anforderungen frühzeitig im Entwicklungsprozess durch DevSecOps-Praktiken, um nachträgliche Korrekturen zu vermeiden.\n• Regulatorisches Change Management: Etablieren Sie einen strukturierten Prozess zur kontinuierlichen Überwachung regulatorischer Entwicklungen und deren zeitnaher Integration in Cloud-Governance-Frameworks."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie sollten wir unsere Governance-Struktur anpassen, um eine effektive Implementierung und kontinuierliche Überwachung der EBA-Vorgaben zu Governance, Outsourcing und ESG sicherzustellen?",
        answer: "Eine effektive Governance-Struktur für die Implementierung und kontinuierliche Überwachung der EBA-Vorgaben erfordert einen ganzheitlichen Ansatz, der sowohl formale Strukturen als auch kulturelle Aspekte berücksichtigt. Die richtige Balance zwischen zentraler Steuerung und dezentraler Verantwortung ist entscheidend für eine nachhaltige Compliance-Architektur, die nicht nur regulatorische Anforderungen erfüllt, sondern auch geschäftlichen Mehrwert schafft.\n\n🏛️ Optimale Governance-Strukturen:\n• Three-Lines-Integration: Modernisieren Sie Ihre Governance-Struktur nach dem aktuellen Three-Lines-Modell mit klaren Verantwortlichkeiten für operative Geschäftsbereiche (1st Line), unabhängige Risiko- und Compliance-Funktionen (2nd Line) und interne Revision (3rd Line).\n• C-Level Sponsorship: Etablieren Sie ein dediziertes C-Level-Mandat für regulatorische Transformation, das die Umsetzung der EBA-Vorgaben als strategische Initiative positioniert und entsprechende Ressourcen sicherstellt.\n• Cross-funktionale Steuerungsgremien: Implementieren Sie themenspezifische Governance-Komitees für Governance, Outsourcing und ESG, die Fachexperten aus verschiedenen Bereichen zusammenführen und siloübergreifende Entscheidungen ermöglichen.\n• Cascading Accountability: Entwickeln Sie ein kaskadenartiges Verantwortungsmodell mit klaren Zuständigkeiten und Berichtspflichten auf jeder Organisationsebene, von der Geschäftsleitung bis zu den operativen Teams.\n\n📊 Effektive Überwachungsmechanismen:\n• Integriertes Compliance-Dashboard: Implementieren Sie ein zentrales Monitoring-System, das den Umsetzungsstand und die Effektivität aller EBA-relevanten Maßnahmen transparent darstellt und Frühindikatoren für potenzielle Compliance-Risiken liefert.\n• Regulatorisches Change-Management: Etablieren Sie einen strukturierten Prozess zur kontinuierlichen Überwachung regulatorischer Entwicklungen und deren zeitnaher Integration in Ihre Governance-Strukturen und Geschäftsprozesse.\n• Evidence-Based Assessment: Führen Sie regelmäßige, evidenzbasierte Bewertungen der Wirksamkeit Ihrer Governance-Strukturen durch, die über formale Compliance hinausgehen und die tatsächliche Effektivität in der Praxis evaluieren.\n• Kultur-Monitoring: Integrieren Sie kulturelle Aspekte in Ihr Überwachungssystem, etwa durch regelmäßige Mitarbeiterbefragungen zur Governance-Kultur, Analyse von Hinweisgeber-Meldungen und Beobachtung informeller Entscheidungsprozesse.\n\n🔄 Kontinuierliche Verbesserung:\n• Lesson-Learned-Prozesse: Etablieren Sie systematische Prozesse zur Erfassung und Analyse von Erfahrungen aus der Implementierung und Überwachung, um kontinuierliche Verbesserungen zu ermöglichen.\n• Peer-Benchmarking: Führen Sie regelmäßige Vergleichsanalysen mit führenden Instituten durch, um Best Practices zu identifizieren und in Ihre Governance-Strukturen zu integrieren.\n• Simulationsübungen: Testen Sie die Wirksamkeit Ihrer Governance-Strukturen durch realistische Simulationen von Krisensituationen oder regulatorischen Herausforderungen.\n• Innovation-Lab für Governance: Schaffen Sie einen dedizierten Raum für die Entwicklung und Erprobung innovativer Governance-Ansätze, etwa durch Nutzung von RegTech-Lösungen oder KI-unterstützter Compliance-Überwachung."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ EBA Governance, Outsourcing & ESG-Vorgaben C-Level FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
