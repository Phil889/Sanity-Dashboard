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
    console.log('Updating Standards Frameworks Struktur Baustein Analyse page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-struktur-baustein-analyse' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-struktur-baustein-analyse" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Welche kritischen Fehler bei der Baustein-Analyse können die C-Suite teuer zu stehen kommen und wie vermeidet ADVISORI diese systematisch?",
        answer: "Fehlerhafte oder unvollständige Strukturanalysen bei IT-Grundschutz Implementierungen können schwerwiegende finanzielle und rechtliche Konsequenzen für Unternehmen haben. Die C-Suite trägt letztendlich die Verantwortung für IT-Sicherheitsvorfälle und Compliance-Verstöße. ADVISORI hat die häufigsten und kostspieligen Fallstricke identifiziert und systematische Gegenmaßnahmen entwickelt.\n\n⚠️ Typische kostspielige Fehler in der Praxis:\n• Unvollständige Asset-Erfassung: Übersehene Systeme oder Anwendungen führen zu Sicherheitslücken, die später teure Nachbesserungen oder Sicherheitsvorfälle zur Folge haben können.\n• Falsche Baustein-Priorisierung: Fokus auf weniger kritische Bereiche während hochrisikoreiche Komponenten vernachlässigt werden, was die Gesamt-Risikosituation verschlechtert.\n• Statische Analyse ohne Zukunftsperspektive: Vernachlässigung der IT-Entwicklungsroadmap führt zu schnell veralteten Sicherheitskonzepten und mehrfachen Neuinvestitionen.\n• Mangelnde Stakeholder-Integration: Fehlende Einbindung der Fachbereiche resultiert in praxisfernen Lösungen und schlechter Akzeptanz.\n\n🛡️ ADVISORI's systematische Fehlervermeidung:\n• Multi-Source Verification: Kombination verschiedener Analysemethoden (automatisiert, manuell, Interview-basiert) zur sicheren Vollständigkeitsgewährleistung.\n• Risk-Based Prioritization: Datengetriebene Bewertung basierend auf Bedrohungslandschaft, Geschäftskritikalität und regulatorischen Anforderungen.\n• Dynamic Roadmap Integration: Berücksichtigung geplanter IT-Änderungen und Geschäftsentwicklungen in der Baustein-Planung.\n• Stakeholder Validation Loops: Systematische Validierung der Analyseergebnisse mit allen relevanten Interessensgruppen vor Finalisierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Wie misst und demonstriert ADVISORI den konkreten Business Value der Strukturanalyse gegenüber Aufsichtsräten und Investoren?",
        answer: "Für Aufsichtsräte und Investoren ist es essentiell, den Return on Investment (ROI) und Business Value von IT-Sicherheitsinitiativen zu verstehen und zu bewerten. ADVISORI nutzt etablierte Bewertungsframeworks und erstellt transparente, nachvollziehbare Metriken, die den Wert professioneller Strukturanalyse in finanziellen und strategischen Begriffen kommunizieren.\n\n📊 Quantifizierbare Wertbeiträge der Strukturanalyse:\n• Risk Reduction Metrics: Berechnung der vermiedenen potenziellen Schäden durch systematische Risikoidentifikation und -behandlung (Expected Annual Loss Reduction).\n• Efficiency Gains: Messung der Zeitersparnis und Kostenreduktion durch optimierte Implementierungsprozesse verglichen mit Ad-hoc-Ansätzen.\n• Compliance Cost Avoidance: Quantifizierung vermiedener Strafzahlungen und Reputationsschäden durch vollständige regulatorische Abdeckung.\n• Operational Excellence: Bewertung der Produktivitätssteigerungen durch reduzierte Systemausfälle und verbesserte Sicherheitsprozesse.\n\n💼 Reporting für Corporate Governance:\n• Executive Dashboards: Entwicklung maßgeschneiderter KPI-Dashboards, die den Fortschritt und Wert der IT-Grundschutz Initiative in Echtzeit für die Führungsebene visualisieren.\n• Board-Ready Reports: Erstellung prägnanter, visueller Berichte, die komplexe technische Sachverhalte in geschäftsrelevante Aussagen übersetzen.\n• Benchmarking Studies: Vergleich mit Branchenstandards und Best Practices zur Einordnung der eigenen Sicherheitsreife und Investitionseffizienz.\n• Audit Trail Documentation: Vollständige Dokumentation aller Entscheidungen und deren Begründung für Compliance- und Governance-Zwecke."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie integriert ADVISORI die Strukturanalyse in bestehende Enterprise Architecture und IT-Governance Frameworks?",
        answer: "Moderne Unternehmen verfügen oft bereits über etablierte Enterprise Architecture (EA) und IT-Governance Frameworks wie TOGAF, COBIT oder ITIL. Eine isolierte IT-Grundschutz Strukturanalyse wäre ineffizient und potentiell konflikthaft. ADVISORI verfolgt einen integrativen Ansatz, der bestehende Frameworks nutzt und ergänzt, statt sie zu ersetzen.\n\n🔗 Integration in bestehende EA-Frameworks:\n• TOGAF Alignment: Einbindung der IT-Grundschutz Bausteine in die Business-, Application-, Data- und Technology-Architecture-Domains des TOGAF-Frameworks.\n• COBIT Harmonisierung: Mapping der BSI-Anforderungen auf COBIT-Kontrollziele und Integration in bestehende IT-Governance-Prozesse.\n• ITIL Service Integration: Berücksichtigung von ITIL-Service-Management-Prozessen bei der Baustein-Implementierung und -Betrieb.\n• Agile Framework Compatibility: Anpassung der Strukturanalyse an agile Entwicklungs- und DevOps-Methodologien ohne deren Geschwindigkeit zu beeinträchtigen.\n\n🏗️ Systematische Framework-Integration durch ADVISORI:\n• Architecture Mapping: Verknüpfung der IT-Grundschutz Strukturanalyse mit bestehenden Architecture-Repository-Tools und -Modellen.\n• Governance Alignment: Integration in bestehende IT-Steering-Committees, Architecture Review Boards und Change Advisory Boards.\n• Process Harmonization: Anpassung der Baustein-Bewertungsprozesse an etablierte Enterprise Architecture-Governace-Zyklen.\n• Tool Chain Integration: Verbindung mit bestehenden EA-Tools, Configuration Management Databases (CMDB) und Service-Katalogen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche spezifischen Vorteile bietet ADVISORI's Strukturanalyse bei M&A-Transaktionen und Due Diligence Prozessen?",
        answer: "Bei Mergers & Acquisitions sind IT-Sicherheitsrisiken und Compliance-Status entscheidende Faktoren für die Bewertung von Zielunternehmen. Eine professionelle IT-Grundschutz Strukturanalyse durch ADVISORI schafft Transparenz über die tatsächliche Sicherheitsreife und identifiziert potenzielle Risiken und Synergiepotenziale, die direkten Einfluss auf Deal-Bewertung und Post-Merger-Integration haben.\n\n🔍 Due Diligence Mehrwert für M&A-Transaktionen:\n• Security Asset Valuation: Präzise Bewertung der vorhandenen IT-Sicherheitsinfrastruktur und deren Wiederverwendbarkeit oder Modernisierungsbedarf.\n• Hidden Risk Discovery: Systematische Identifikation von Sicherheitslücken und Compliance-Defiziten, die potenzielle Post-Acquisition-Kosten verursachen könnten.\n• Integration Complexity Assessment: Bewertung der Kompatibilität der IT-Sicherheitsarchitekturen und Aufwandsschätzung für die technische Integration.\n• Regulatory Impact Analysis: Analyse der regulatorischen Implikationen der Transaktion und erforderlicher Anpassungen an Compliance-Standards.\n\n💰 Strategische Transaktionsvorteile:\n• Accurate Deal Pricing: Vermeidung von Überbewertungen durch unentdeckte IT-Sicherheitsschulden und realistische Einschätzung der Integrations- und Modernisierungskosten.\n• Accelerated Integration: Strukturierte Sicherheitsanalyse ermöglicht schnellere und risikoärmere Post-Merger-IT-Integration durch klare Roadmaps.\n• Synergy Realization: Identifikation von Sicherheits- und Compliance-Synergien zwischen den Organisationen, die zusätzlichen Wert schaffen.\n• Stakeholder Confidence: Demonstrierte IT-Sicherheitsreife stärkt das Vertrauen von Investoren, Kunden und Regulatoren in die Transaktion."
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
