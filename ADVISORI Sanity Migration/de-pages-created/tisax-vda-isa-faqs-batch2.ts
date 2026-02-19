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
    console.log('Updating TISAX VDA ISA page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'tisax-vda-isa' })
    
    if (!existingDoc) {
      throw new Error('Document "tisax-vda-isa" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie kann eine strategische TISAX-Implementation unsere Verhandlungsposition mit OEMs stärken und zu besseren Vertragskonditionen führen?",
        answer: "Eine strategische TISAX-Implementation verwandelt Ihr Unternehmen von einem austauschbaren Lieferanten zu einem vertrauenswürdigen, sicherheitskritischen Partner für OEMs. Diese Transformation hat direkte Auswirkungen auf Ihre Verhandlungsposition und ermöglicht strukturell bessere Geschäftsbedingungen durch demonstrierte Exzellenz in Informationssicherheit und Risikomanagement.\n\n💪 Verhandlungsstärke durch TISAX-Excellence:\n• Reduced Vendor Risk Profile: OEMs bewerten TISAX-zertifizierte Partner als niedrigere Risikolieferanten, was zu reduzierten Compliance-Anforderungen, weniger Audits und vereinfachten Onboarding-Prozessen führt.\n• Premium Partner Status: TISAX-Label ermöglichen den Zugang zu exklusiven OEM-Partnerprogrammen und Preferred-Supplier-Status, der mit bevorzugten Vertragskonditionen und längeren Vertragslaufzeiten verbunden ist.\n• Innovation Partnership Qualification: Berechtigung zur Teilnahme an strategischen Entwicklungsprojekten und Early-Adopter-Programmen, die höhere Margen und langfristige Geschäftsbeziehungen bieten.\n• Supply Chain Integration: Tiefere Integration in OEM-Lieferketten durch bewiesene Sicherheitskompetenz, was zu stabilen Auftragsvolumina und reduzierten Preiswettbewerb führt.\n\n🎯 ADVISORIs Verhandlungs-Optimierungsansatz:\n• Value-based Positioning: Entwicklung überzeugender Business Cases, die Ihre TISAX-Compliance als messbaren Mehrwert für OEM-Operationen und Risikomanagement positionieren.\n• Competitive Differentiation Strategy: Strategische Kommunikation Ihrer TISAX-Exzellenz als Unterscheidungsmerkmal gegenüber nicht-zertifizierten Wettbewerbern in Ausschreibungen und Verhandlungen.\n• Risk Mitigation Value Quantification: Entwicklung konkreter Metriken und ROI-Kalkulationen, die den finanziellen Wert Ihrer Sicherheitskompetenz für OEM-Partner demonstrieren.\n• Strategic Partnership Development: Aufbau langfristiger, strategischer Beziehungen zu OEMs basierend auf Vertrauen und gemeinsamen Sicherheitsstandards."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche spezifischen VDA ISA-Anforderungen sind besonders kritisch für den Assessment-Erfolg und wie gewährleistet ADVISORI eine optimale Compliance-Erfüllung?",
        answer: "VDA ISA (Information Security Assessment) umfasst komplexe, technische Anforderungen, die präzise Fachkenntnis und strukturierte Vorbereitung erfordern. Für C-Level-Verantwortliche ist es entscheidend zu verstehen, welche Bereiche besonders kritisch sind und häufig zu Assessment-Problemen führen, um gezielt Ressourcen zu allokieren und Erfolgsrisiken zu minimieren.\n\n🔍 Kritische VDA ISA-Erfolgsfaktoren:\n• Information Security Management System (ISMS): Vollständige Implementierung und operative Wirksamkeit eines dokumentierten ISMS mit messbaren Sicherheitszielen, regelmäßigen Reviews und kontinuierlicher Verbesserung.\n• Physical and Environmental Security: Robuste physische Sicherheitsmaßnahmen für alle Standorte, die automotive Daten verarbeiten, inklusive Zugangskontrollen, Überwachungssysteme und Umgebungsschutz.\n• Access Control and Identity Management: Implementierung granularer Zugangskontrollen mit starker Authentifizierung, regelmäßigen Access Reviews und automatisierten Deprovisioning-Prozessen.\n• Data Encryption and Protection: End-to-End-Verschlüsselung aller automotive Daten in Übertragung und Speicherung mit angemessenen Schlüsselverwaltungsverfahren.\n• Incident Response and Business Continuity: Dokumentierte, getestete Verfahren für Sicherheitsvorfälle und Geschäftskontinuität mit spezifischen Automotive-Szenarien.\n\n🛡️ ADVISORIs VDA ISA-Exzellenz-Methodik:\n• Technical Deep-Dive Assessment: Granulare Bewertung aller VDA ISA-Kontrollen mit spezifischer Fokussierung auf automotive Datenverarbeitung und -schutz durch erfahrene Automotive-Security-Experten.\n• Gap Remediation Engineering: Systematische Schließung identifizierter Compliance-Lücken durch maßgeschneiderte technische und organisatorische Maßnahmen, die automotive Best Practices reflektieren.\n• Evidence Documentation Excellence: Professionelle Erstellung und Organisation aller erforderlichen Nachweise und Dokumentationen in assessor-freundlichen Formaten für effiziente Assessment-Durchführung.\n• Mock Assessment Validation: Durchführung realistischer Probe-Assessments zur Identifikation letzter Optimierungsmöglichkeiten und Stärkung des Vertrauens vor dem eigentlichen VDA ISA Assessment."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie können wir TISAX als Katalysator für digitale Transformation und Innovation in unserem Unternehmen nutzen?",
        answer: "TISAX sollte nicht als Compliance-Bürde betrachtet werden, sondern als strategischer Enabler für sichere digitale Transformation und Innovation. Für visionäre Führungskräfte bietet TISAX die einzigartige Gelegenheit, Sicherheit als Innovationstreiber zu etablieren und gleichzeitig neue Geschäftsmodelle und technologische Möglichkeiten zu erschließen.\n\n🚀 TISAX als Digital Innovation Catalyst:\n• Secure Innovation Framework: TISAX-Compliance schafft robuste Sicherheitsarchitekturen, die sichere Experimente mit neuen Technologien wie AI, IoT und Cloud-Computing in automotive Kontexten ermöglichen.\n• Trust-enabled Business Models: TISAX-Zertifizierung ermöglicht die Entwicklung vertrauensbasierter Geschäftsmodelle wie Data-as-a-Service, Digital Twins und Predictive Maintenance für automotive Kunden.\n• Technology Partnership Access: TISAX öffnet Türen zu technologischen Partnerschaften mit führenden Automotive-Tech-Unternehmen und ermöglicht Zugang zu cutting-edge Entwicklungsprojekten.\n• Digital Ecosystem Integration: Sichere Integration in digitale Automotive-Ökosysteme und Plattformen, die neue Revenue-Streams und Geschäftschancen eröffnen.\n\n💡 Transformative Innovation-Möglichkeiten:\n• Connected Car Data Analytics: Sichere Verarbeitung und Analyse von automotive Telematikdaten für neue Insights und Serviceangebote.\n• Autonomous Vehicle Development: Teilnahme an sicherheitskritischen Entwicklungsprojekten für autonome Fahrzeuge durch bewiesene Datenvertrauenswürdigkeit.\n• Electric Vehicle Infrastructure: Sichere Integration in E-Mobility-Ökosysteme und Ladeinfrastruktur-Netzwerke.\n• Automotive Cybersecurity Services: Entwicklung neuer Geschäftszweige in automotive Cybersecurity-Beratung und -Services.\n\n🎯 ADVISORIs Innovation-Integration-Ansatz:\n• Digital Transformation Roadmap: Integration von TISAX-Compliance in Ihre übergeordnete Digitalisierungsstrategie für maximale Synergien und Effizienz.\n• Innovation Lab Setup: Etablierung sicherer Innovation-Umgebungen, die TISAX-Standards erfüllen und gleichzeitig Experimentierfreiraum für neue Technologien bieten.\n• Technology Scouting: Identifikation und Bewertung neuer Technologien und Geschäftsmodelle, die durch TISAX-Compliance ermöglicht oder verstärkt werden.\n• Partnership Ecosystem Development: Aufbau strategischer Partnerschaften mit Technologieunternehmen und Innovatoren im Automotive-Bereich."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche langfristigen Compliance-Entwicklungen erwarten uns in der Automotive-Branche und wie positioniert uns TISAX optimal für zukünftige Anforderungen?",
        answer: "Die Automotive-Branche durchläuft eine fundamentale Transformation mit erheblichen Auswirkungen auf Compliance-Anforderungen. Für strategisch denkende Führungskräfte ist es entscheidend, diese Entwicklungen antizipieren und TISAX als Fundament für zukünftige Compliance-Exzellenz zu nutzen. Eine proaktive Positionierung kann entscheidende Wettbewerbsvorteile in einem sich schnell verändernden regulatorischen Umfeld schaffen.\n\n🔮 Strategische Compliance-Trends in der Automotive-Zukunft:\n• EU Cyber Resilience Act: Verstärkte Cybersecurity-Anforderungen für connected automotive Produkte mit erheblichen Auswirkungen auf Lieferanten und Entwicklungspartner.\n• UN-ECE WP.29 Regulations: Internationale Cybersecurity- und Software-Update-Standards für Fahrzeuge, die tiefgreifende Auswirkungen auf die gesamte Lieferkette haben werden.\n• Carbon Footprint Transparency: Zunehmende Anforderungen an ESG-Compliance und Nachhaltigkeitsberichterstattung in automotive Lieferketten.\n• AI Governance in Automotive: Neue Regulierungen für KI-Systeme in sicherheitskritischen automotive Anwendungen wie autonomes Fahren.\n• Data Sovereignty Requirements: Verstärkte Anforderungen an lokale Datenverarbeitung und -speicherung in verschiedenen Jurisdiktionen.\n\n🛡️ TISAX als Future-Compliance-Foundation:\n• Regulatory Readiness: TISAX-Compliance schafft robuste Governance-Strukturen und Sicherheitsprozesse, die als Basis für zusätzliche regulatorische Anforderungen dienen können.\n• Adaptability Framework: TISAX-konforme Unternehmen entwickeln Anpassungsfähigkeiten und Change-Management-Kompetenzen, die bei neuen Compliance-Anforderungen von unschätzbarem Wert sind.\n• International Credibility: TISAX-Zertifizierung etabliert internationale Glaubwürdigkeit, die bei der Navigation komplexer, grenzüberschreitender Compliance-Landschaften hilfreich ist.\n• Innovation-Security Balance: TISAX-Erfahrung ermöglicht die erfolgreiche Balance zwischen Innovation und Sicherheit, die für zukünftige automotive Technologien entscheidend ist.\n\n🚀 ADVISORIs Future-Compliance-Strategieansatz:\n• Regulatory Intelligence: Kontinuierliche Überwachung und Analyse aufkommender Compliance-Trends zur proaktiven Vorbereitung auf zukünftige Anforderungen.\n• Adaptive Compliance Architecture: Entwicklung flexibler Compliance-Rahmen, die sich schnell an neue regulatorische Anforderungen anpassen können.\n• Ecosystem Positioning: Strategische Positionierung in automotive Compliance-Communities und Standardisierungsorganisationen für Early-Insight und Einflussnahme.\n• Continuous Evolution Program: Implementierung kontinuierlicher Verbesserungsprozesse, die TISAX-Compliance als lebendige, sich entwickelnde Kompetenz etablieren."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ C-Level FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
