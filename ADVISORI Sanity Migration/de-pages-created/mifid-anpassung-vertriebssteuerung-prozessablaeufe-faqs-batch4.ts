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
    console.log('Updating MiFID Anpassung Vertriebssteuerung & Prozessabläufe page with FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'mifid-anpassung-vertriebssteuerung-prozessablaeufe' })
    
    if (!existingDoc) {
      throw new Error('Document "mifid-anpassung-vertriebssteuerung-prozessablaeufe" not found')
    }
    
    // Create new FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können wir unsere CRM- und Beratungssysteme optimal an die MiFID-Anforderungen anpassen, ohne umfangreiche Neuentwicklungen durchführen zu müssen?",
        answer: "Die Anpassung bestehender CRM- und Beratungssysteme an MiFID-Anforderungen stellt viele Finanzinstitute vor die Herausforderung, Compliance zu gewährleisten, ohne vollständige Neuentwicklungen vornehmen zu müssen. Mit einem strategischen Ansatz können Sie Ihre Systeme effizient und kosteneffektiv MiFID-konform gestalten.\n\n🔧 Strategische Anpassung bestehender Systeme:\n• Modulare Erweiterungsarchitektur: Entwickeln Sie eine Erweiterungsarchitektur für Ihre bestehenden Systeme, die MiFID-spezifische Funktionalitäten als separate Module implementiert, anstatt das Kernsystem grundlegend zu verändern. Dies minimiert Risiken und ermöglicht eine schrittweise Implementation.\n• API-basierte Integration: Nutzen Sie moderne API-Technologien, um spezialisierte Compliance-Lösungen an Ihre bestehenden Systeme anzubinden, anstatt alle Funktionalitäten nativ zu implementieren. Dies ermöglicht die Nutzung von Best-of-Breed-Lösungen bei gleichzeitiger Beibehaltung Ihrer Kernsysteme.\n• Prozessorientierte Systemanpassung: Analysieren Sie Ihre Beratungsprozesse im Detail und identifizieren Sie die kritischen Touchpoints, an denen MiFID-Compliance sichergestellt werden muss. Fokussieren Sie Ihre Systemanpassungen gezielt auf diese Prozessschritte, um den Implementierungsaufwand zu minimieren.\n• Datenzentrische Compliance-Strategie: Implementieren Sie eine zentrale Datenschicht, die alle MiFID-relevanten Informationen konsolidiert und verschiedenen Systemen zur Verfügung stellt. Dies vermeidet Redundanzen und Inkonsistenzen in der Datenhaltung.\n\n💻 Praktische Implementierungsansätze:\n• Intelligente Formulare und Workflows: Erweitern Sie Ihre bestehenden Systeme um dynamische Formulare und Workflows, die abhängig von Kundentyp, Produktkategorie und Beratungskontext die relevanten MiFID-Anforderungen automatisch abbilden und dokumentieren.\n• Regelbasierte Compliance-Checks: Implementieren Sie eine zentrale Business-Rules-Engine, die MiFID-Compliance-Regeln verwaltet und auf verschiedene Systeme anwendet. Dies ermöglicht eine konsistente Compliance-Prüfung über alle Kanäle hinweg und vereinfacht die Anpassung an regulatorische Änderungen.\n• Integrierte Dokumentenverwaltung: Erweitern Sie Ihre CRM-Systeme um eine MiFID-konforme Dokumentenverwaltung, die alle regulatorisch erforderlichen Unterlagen automatisch erzeugt, verwaltet und mit Kundenprofilen verknüpft. Stellen Sie sicher, dass alle Dokumente versioniert und revisionssicher archiviert werden.\n• Compliance-Dashboard für Berater: Entwickeln Sie intuitive Dashboards, die Beratern in Echtzeit den Compliance-Status ihrer Kundenbeziehungen und Beratungsgespräche anzeigen und proaktiv auf fehlende oder veraltete Informationen hinweisen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Maßnahmen empfiehlt ADVISORI, um die Compliance-Kosten für MiFID-konforme Vertriebsprozesse zu optimieren und gleichzeitig die Qualität zu steigern?",
        answer: "Die Optimierung von Compliance-Kosten bei gleichzeitiger Qualitätssteigerung der MiFID-konformen Vertriebsprozesse erfordert einen strategischen Ansatz, der über reine Effizienzmaßnahmen hinausgeht. Durch intelligente Prozessgestaltung und den gezielten Einsatz von Technologie können Sie nicht nur Kosten senken, sondern auch messbare Qualitätsverbesserungen erzielen.\n\n💡 Strategische Ansätze zur Kostenoptimierung:\n• Risikoorientiertes Compliance-Management: Implementieren Sie einen differenzierten Ansatz, der den Umfang und die Intensität der Compliance-Maßnahmen an das spezifische Risikoprofil der Kundenbeziehung, der Produktkategorie und des Vertriebskanals anpasst. Dies ermöglicht eine optimale Allokation von Ressourcen ohne Compliance-Lücken.\n• Prozesskonsolidierung und -standardisierung: Identifizieren und eliminieren Sie redundante Compliance-Aktivitäten in Ihren Vertriebsprozessen. Entwickeln Sie standardisierte Prozessbausteine für wiederkehrende Compliance-Aufgaben, die konsistent über alle Geschäftsbereiche und Vertriebskanäle hinweg eingesetzt werden können.\n• Synergieeffekte zwischen Compliance-Anforderungen: Analysieren Sie Überschneidungen zwischen MiFID-Anforderungen und anderen regulatorischen Vorgaben (z.B. DSGVO, GwG) und entwickeln Sie integrierte Compliance-Prozesse, die mehrere Anforderungen gleichzeitig erfüllen, anstatt isolierte Lösungen für jede Regulierung zu implementieren.\n• Outsourcing und Shared Services: Prüfen Sie, welche Compliance-Funktionen durch spezialisierte Dienstleister kosteneffizienter erbracht werden können oder sich für Shared-Service-Modelle eignen. Besonders für standardisierte Prozesse wie Dokumentenmanagement oder Telefonaufzeichnung können erhebliche Skaleneffekte realisiert werden.\n\n⚙️ Operative Maßnahmen mit Kostenwirkung:\n• Automatisierung regelbasierter Entscheidungen: Identifizieren Sie Compliance-Checks, die auf klaren Regeln basieren, und automatisieren Sie diese durch Regelmaschinen. Fokussieren Sie personelle Ressourcen auf komplexe Compliance-Entscheidungen, die tatsächlich menschliches Urteilsvermögen erfordern.\n• Predictive Compliance Monitoring: Implementieren Sie KI-gestützte Analysetools, die potenzielle Compliance-Risiken frühzeitig erkennen und präventive Maßnahmen ermöglichen, bevor kostspielige Compliance-Verstöße entstehen. Dies reduziert nicht nur direkte Kosten durch Bußgelder, sondern auch indirekte Kosten durch nachträgliche Korrekturen.\n• Optimierte Schulungskonzepte: Entwickeln Sie zielgruppenspezifische, modulare Schulungsprogramme, die genau auf die tatsächlichen Compliance-Anforderungen der jeweiligen Rolle zugeschnitten sind. Nutzen Sie digitale Lernformate und On-the-Job-Training, um Schulungsaufwände zu minimieren und gleichzeitig die Wirksamkeit zu erhöhen.\n• Kontinuierliche Prozessoptimierung: Etablieren Sie ein systematisches Monitoring der Effizienz und Effektivität Ihrer Compliance-Prozesse mit klaren KPIs. Identifizieren Sie regelmäßig Optimierungspotenziale und implementieren Sie kontinuierliche Verbesserungen in kurzen Iterationszyklen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir sicherstellen, dass unsere Vertriebsprozesse trotz komplexer MiFID-Anforderungen kundenzentriert und vertriebsorientiert bleiben?",
        answer: "Die Balance zwischen MiFID-Compliance und einer kundenzentrierten, vertriebsorientierten Ausrichtung ist eine zentrale Herausforderung für Finanzinstitute. Mit einem strategischen Ansatz können regulatorische Anforderungen so in die Vertriebsprozesse integriert werden, dass sie das Kundenerlebnis sogar verbessern und die Vertriebseffektivität steigern.\n\n🔄 Strategische Integration von Compliance und Kundenerlebnis:\n• Experience-First Prozessdesign: Gestalten Sie Ihre Vertriebsprozesse primär aus Kundenperspektive und integrieren Sie die MiFID-Anforderungen so, dass sie den natürlichen Gesprächsfluss unterstützen, statt ihn zu unterbrechen. Nutzen Sie Customer Journey Mapping, um kritische Compliance-Touchpoints zu identifizieren und optimal zu gestalten.\n• Compliance als Qualitätsmerkmal: Positionieren Sie MiFID-konforme Beratungsprozesse aktiv als Qualitätsmerkmal und Differenzierungsfaktor im Kundendialog. Kommunizieren Sie den konkreten Mehrwert für den Kunden, wie erhöhte Transparenz, besseren Anlegerschutz und fundierte Entscheidungsgrundlagen.\n• Beratungsphilosophie statt Checklisten-Mentalität: Entwickeln Sie eine ganzheitliche Beratungsphilosophie, die MiFID-Anforderungen als integralen Bestandteil einer qualitativ hochwertigen Beratung versteht. Fördern Sie bei Ihren Beratern ein tiefes Verständnis für den Sinn und Zweck der regulatorischen Vorgaben, statt eine reine Compliance-Checklisten-Mentalität zu kultivieren.\n• Segmentspezifische Beratungsstrecken: Differenzieren Sie Ihre Beratungsprozesse nach Kundensegmenten und Beratungsanlässen, um sowohl regulatorische Anforderungen zu erfüllen als auch unterschiedlichen Kundenerwartungen gerecht zu werden. Entwickeln Sie z.B. verschlankte Prozesse für erfahrene Anleger oder komplexere Beratungsstrecken für Neukunden.\n\n💼 Praktische Umsetzungsmaßnahmen:\n• Intuitive Visualisierung komplexer Informationen: Entwickeln Sie visuelle Formate für die Darstellung regulatorisch erforderlicher Informationen, die für Kunden leicht verständlich sind und gleichzeitig den Verkaufsprozess unterstützen. Nutzen Sie interaktive Simulationen, um abstrakte Konzepte wie Risiko-Rendite-Profile greifbar zu machen.\n• Narrativer Ansatz in der Beratungsdokumentation: Schulen Sie Ihre Berater darin, die MiFID-konforme Dokumentation in Form einer kundenrelevanten Geschichte zu gestalten, die den Entscheidungsprozess nachvollziehbar abbildet, statt sich auf das Abhaken formaler Anforderungen zu beschränken.\n• Proaktives Erwartungsmanagement: Bereiten Sie Kunden frühzeitig auf die regulatorisch erforderlichen Prozessschritte vor und erläutern Sie deren Nutzen und Notwendigkeit. Dies reduziert potenzielle Frustration und schafft Verständnis für die Compliance-Anforderungen.\n• Kontinuierliches Kundenfeedback: Implementieren Sie systematische Prozesse zur Erfassung von Kundenfeedback spezifisch zu den Compliance-relevanten Aspekten der Beratung. Nutzen Sie dieses Feedback für kontinuierliche Optimierungen der Kundenerfahrung innerhalb des regulatorischen Rahmens."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Best Practices gibt es für die Integration von MiFID-konformen Vertriebsprozessen in ein Multikanal-Vertriebsmodell?",
        answer: "Die Integration MiFID-konformer Vertriebsprozesse in ein Multikanal-Vertriebsmodell erfordert einen strategischen Ansatz, der regulatorische Konsistenz über alle Kanäle hinweg gewährleistet und gleichzeitig die spezifischen Stärken und Besonderheiten jedes Kanals optimal nutzt. ADVISORI hat dafür spezifische Best Practices entwickelt, die sowohl Compliance als auch Kundenerlebnis über alle Touchpoints hinweg optimieren.\n\n🌐 Strategischer Ansatz für kanalübergreifende Compliance:\n• Omnichannel-Compliance-Architektur: Entwickeln Sie eine zentrale Compliance-Architektur, die konsistente Standards, Regeln und Prozesse für alle Vertriebskanäle definiert, aber gleichzeitig kanalspezifische Implementierungen ermöglicht. Dies gewährleistet ein kohärentes Kundenerlebnis bei maximaler regulatorischer Sicherheit.\n• Channel-Switching ohne Compliance-Brüche: Gestalten Sie Ihre Prozesse so, dass Kunden nahtlos zwischen verschiedenen Kanälen wechseln können, ohne dass Compliance-relevante Informationen verloren gehen oder erneut erfasst werden müssen. Implementieren Sie eine zentrale Datenhaltung für alle MiFID-relevanten Kundeninformationen mit Echtzeitverfügbarkeit über alle Kanäle.\n• Kanalspezifische Compliance-Optimierung: Analysieren Sie die besonderen Stärken und Limitationen jedes Vertriebskanals in Bezug auf MiFID-Compliance und optimieren Sie die Prozesse entsprechend. Beispielsweise bieten digitale Kanäle bessere Möglichkeiten für interaktive Risikoprofilierung, während persönliche Beratung Vorteile bei der Erklärung komplexer Produkte bietet.\n• Zentrales Compliance-Monitoring: Implementieren Sie ein zentrales Monitoring-System, das die Einhaltung der MiFID-Anforderungen über alle Kanäle hinweg überwacht und analysiert. Dies ermöglicht die frühzeitige Identifikation von kanalspezifischen Compliance-Risiken und gezielten Optimierungsbedarf.\n\n📊 Praktische Implementierungsansätze für verschiedene Kanäle:\n• Filialvertrieb: Statten Sie Berater mit mobilen Tools aus, die MiFID-konforme Beratungsprozesse unterstützen und gleichzeitig ein persönliches Kundenerlebnis ermöglichen. Integrieren Sie digitale Unterschriften und biometrische Authentifizierungsverfahren, um papierbasierte Prozesse zu eliminieren.\n• Online-Banking und Mobile Apps: Entwickeln Sie intuitive, schrittweise Prozesse für die Selbstbedienung, die MiFID-Anforderungen erfüllen, ohne den Kunden zu überfordern. Nutzen Sie interaktive Elemente und visuelle Darstellungen, um komplexe Informationen verständlich zu präsentieren und Dokumentationspflichten zu erfüllen.\n• Telefonische Beratung: Implementieren Sie integrierte Sprachaufzeichnungs- und Transkriptionssysteme, die mit Ihrem CRM verknüpft sind und automatisch compliance-relevante Gesprächsinhalte taggen. Entwickeln Sie strukturierte Gesprächsleitfäden, die MiFID-Compliance sicherstellen, ohne natürliche Gesprächsführung zu beeinträchtigen.\n• Videoberatung und Co-Browsing: Nutzen Sie die Vorteile von Videoberatung für die transparente Darstellung von Produktinformationen und Kosten. Implementieren Sie Co-Browsing-Funktionen, die dem Berater ermöglichen, Kunden durch komplexe MiFID-relevante Dokumente zu führen und diese gemeinsam zu besprechen."
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
    console.log('✅ FAQs batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
