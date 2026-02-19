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
    console.log('Updating CIS Controls Top 20 Implementation page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-umsetzung-top-20-controls' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-umsetzung-top-20-controls" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum sind die Top 20 CIS Controls für die C-Suite der strategisch wertvollste Ansatz zur Cybersecurity-Investition und wie maximiert ADVISORI deren Geschäftswert?",
        answer: "Für die C-Suite repräsentieren die Top 20 CIS Controls weit mehr als eine technische Checkliste – sie sind ein datengetriebener, bewährter Ansatz zur optimalen Allokation knapper Cybersecurity-Ressourcen. Diese Controls basieren auf der Analyse realer Angriffsmuster und bieten das beste Verhältnis von Risikoreduktion zu Investitionsaufwand. ADVISORI positioniert diese Implementation als strategischen Enabler für nachhaltiges Unternehmenswachstum.\n\n🎯 Strategische Werttreiber für die Führungsebene:\n• Evidenzbasierte Priorisierung: Die Top 20 Controls adressieren nachweislich 85% aller erfolgreichen Cyberangriffe und bieten somit maximalen Schutz bei minimaler Komplexität.\n• Optimierte Kapitalallokation: Fokussierte Investitionen in diese 20 kritischen Bereiche erzielen größere Sicherheitsgewinne als breit gestreute, oberflächliche Maßnahmen.\n• Messbare Risikoreduktion: Quantifizierbare Verbesserungen der Sicherheitsposture, die direkt in Versicherungsprämien, Compliance-Kosten und Incident-Response-Aufwände übersetzt werden können.\n• Wettbewerbsdifferenzierung: Demonstrierte Cybersecurity-Excellence als Vertrauensfaktor bei Kunden, Partnern und Investoren.\n\n🛡️ ADVISORI's wertorientierter Implementierungsansatz:\n• Business-aligned Security Roadmap: Wir verknüpfen jeden Control mit spezifischen Geschäftszielen und messen den Impact auf operative Kennzahlen wie Verfügbarkeit, Produktivität und Kundenzufriedenheit.\n• Executive Dashboard und ROI-Tracking: Bereitstellung von C-Level-gerechten Metriken, die den Geschäftswert der Cybersecurity-Investitionen transparent machen.\n• Integration in Enterprise Risk Management: Positionierung der CIS Controls als integraler Bestandteil der übergeordneten Risikostrategie und Corporate Governance.\n• Continuous Value Optimization: Etablierung von Mechanismen zur laufenden Bewertung und Optimierung des Geschäftswerts der implementierten Controls."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie transformiert die strategische Implementierung der Top 20 CIS Controls durch ADVISORI unsere Cybersecurity von einem Kostenzentrum zu einem Geschäfts-Enabler?",
        answer: "Die Top 20 CIS Controls Implementation durch ADVISORI verwandelt Cybersecurity von einer defensiven Notwendigkeit in einen proaktiven Geschäfts-Enabler. Dieser Paradigmenwechsel ermöglicht es der C-Suite, Sicherheitsinvestitionen als strategische Hebel für Wachstum, Innovation und Marktexpansion zu nutzen. Der Fokus liegt auf messbaren Geschäftsergebnissen und der Schaffung nachhaltiger Wettbewerbsvorteile.\n\n💡 Von Schutz zu strategischem Vorteil:\n• Digitale Transformation beschleunigen: Robuste Grundsicherheit ermöglicht mutigere Innovationsprojekte und schnellere Adoption neuer Technologien wie Cloud, IoT und KI ohne erhöhtes Risiko.\n• Marktexpansion unterstützen: Nachweisbare Cybersecurity-Exzellenz erleichtert die Erschließung regulierter Märkte und ermöglicht Partnerschaften mit sicherheitsbewussten Großkunden.\n• Operational Excellence: Automatisierung und Standardisierung der Controls reduzieren manuellen Aufwand und schaffen Kapazitäten für wertschöpfende Aktivitäten.\n• Verhandlungsmacht stärken: Demonstrierte Sicherheitsreife führt zu besseren Konditionen bei Versicherungen, Lieferanten und in M&A-Szenarien.\n\n🚀 ADVISORI's Business-Enablement-Strategie:\n• Value-driven Implementation: Jeder Control wird hinsichtlich seines Beitrags zu Geschäftszielen wie Umsatzwachstum, Kostenoptimierung und Risikominimierung bewertet und priorisiert.\n• Innovation-Security Balance: Entwicklung von Sicherheitsarchitekturen, die Innovation fördern statt behindern, durch 'Security by Design' und DevSecOps-Integration.\n• Stakeholder Value Communication: Übersetzung technischer Sicherheitsmetriken in geschäftsrelevante KPIs, die für Board-Level-Diskussionen und Investorenbeziehungen geeignet sind.\n• Ecosystem Integration: Positionierung der CIS Controls als Grundlage für erweiterte Sicherheitsinitiativen wie Zero Trust, SASE oder Threat Intelligence, die weitere Geschäftsmöglichkeiten eröffnen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche konkreten finanziellen Auswirkungen und ROI-Metriken kann die C-Suite von der Top 20 CIS Controls Implementation erwarten?",
        answer: "Die Investition in die Top 20 CIS Controls durch ADVISORI generiert sowohl direkte als auch indirekte finanzielle Vorteile, die sich in messbaren ROI-Kennzahlen widerspiegeln. Unsere Erfahrung zeigt, dass Unternehmen typischerweise innerhalb von 12-18 Monaten einen positiven ROI erzielen, wobei die langfristigen Vorteile die initialen Investitionen um das 3-5fache übersteigen.\n\n💰 Direkte finanzielle Auswirkungen:\n• Incident-Kostenreduktion: Durchschnittlich 75% Reduktion der Kosten für Cybersecurity-Vorfälle durch proaktive Prävention und verbesserte Incident Response-Fähigkeiten.\n• Compliance-Effizienz: 40-60% Reduktion der Audit- und Compliance-Kosten durch standardisierte, dokumentierte Kontrollen, die multiple Frameworks abdecken.\n• Versicherungsoptimierung: 15-30% Senkung der Cyber-Versicherungsprämien durch nachgewiesene Risikominimierung und verbesserte Sicherheitsposture.\n• Downtime-Vermeidung: Schutz vor geschätzten Umsatzausfällen von €50.000-500.000 pro Stunde bei kritischen Systemausfällen.\n\n📊 Indirekte Wertsteigerung und strategische Vorteile:\n• Produktivitätssteigerung: 20-35% Effizienzgewinn durch automatisierte Sicherheitsprozesse und reduzierte False-Positive-Alarme.\n• Marktpositionierung: Verbesserte Verhandlungsposition bei Großkunden und Partnern, oft resultierend in 10-25% höheren Vertragsvolumen.\n• M&A-Wertsteigerung: Demonstrierte Cybersecurity-Reife kann den Unternehmenswert um 5-15% steigern und Due-Diligence-Prozesse beschleunigen.\n• Innovation-Enablement: Beschleunigte Time-to-Market für digitale Produkte und Services durch reduzierte Sicherheits-Review-Zyklen.\n\n🎯 ADVISORI's ROI-Maximierungsstrategie:\n• Phased Value Realization: Strukturierte Implementierung mit Early Wins in den ersten 90 Tagen zur schnellen Demonstration des Geschäftswerts.\n• Continuous Value Measurement: Etablierung von KPI-Dashboards zur laufenden Messung und Optimierung des ROI über den gesamten Lifecycle.\n• Cost Avoidance Quantification: Systematische Erfassung und Bewertung vermiedener Kosten und Risiken als Teil der Gesamtrenditeberechnung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie stellt ADVISORI sicher, dass die Top 20 CIS Controls Implementation mit unserer digitalen Transformationsstrategie und zukünftigen Technologie-Roadmap harmoniert?",
        answer: "ADVISORI betrachtet die Top 20 CIS Controls nicht als isolierte Sicherheitsmaßnahmen, sondern als integralen Bestandteil Ihrer digitalen Transformationsstrategie. Unser Ansatz gewährleistet, dass die Sicherheitsarchitektur Ihre Innovations- und Wachstumsziele unterstützt und dabei gleichzeitig die Flexibilität für zukünftige technologische Entwicklungen bewahrt.\n\n🔄 Strategische Integration in die Digitale Transformation:\n• Future-Ready Architecture: Design der Sicherheitskontrollen mit Fokus auf Cloud-Native, Hybrid- und Multi-Cloud-Umgebungen, um die Skalierbarkeit und Agilität Ihrer IT-Infrastruktur zu unterstützen.\n• DevSecOps-Integration: Einbettung der CIS Controls in Ihre Entwicklungs- und Deployment-Pipelines für kontinuierliche Sicherheit ohne Verlangsamung der Innovation.\n• API-First Security: Sicherheitsarchitekturen, die von Grund auf für API-zentrierte, mikroservice-basierte Anwendungslandschaften konzipiert sind.\n• Zero Trust Readiness: Vorbereitung der Infrastruktur für Zero Trust-Prinzipien als Grundlage für sichere, ortsunabhängige Arbeitsmodelle.\n\n🚀 Enablement zukünftiger Technologien:\n• AI/ML-Integration: Vorbereitung der Sicherheitsinfrastruktur für KI-gestützte Threat Detection und automatisierte Response-Mechanismen.\n• IoT/Edge Security: Erweiterbare Frameworks für die sichere Integration von IoT-Geräten und Edge Computing in Ihre Unternehmensarchitektur.\n• Quantum-Readiness: Zukunftssichere Kryptographie-Strategien, die auch bei der Einführung von Quantum Computing bestehen.\n• Blockchain/DLT-Kompatibilität: Sicherheitskonzepte, die die Integration von Distributed Ledger Technologies unterstützen.\n\n🎯 ADVISORI's Forward-Looking Implementation:\n• Technology Roadmap Alignment: Enge Abstimmung der CIS Controls Implementation mit Ihrer 3-5 Jahres IT-Strategie und geplanten Technologie-Upgrades.\n• Agile Security Governance: Etablierung flexibler Governance-Strukturen, die schnelle Anpassungen an neue Technologien und Bedrohungen ermöglichen.\n• Innovation Sandbox Security: Schaffung sicherer Umgebungen für das Testen und Pilotieren neuer Technologien ohne Gefährdung der Produktionssysteme.\n• Continuous Architecture Evolution: Mechanismen zur laufenden Bewertung und Anpassung der Sicherheitsarchitektur an sich ändernde Geschäfts- und Technologieanforderungen."
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
    console.log('✅ C-Level FAQs batch 1 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
