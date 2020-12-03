# **3 Entwicklung**

## **3.1 Konzepte und Techniken**

### **3.1.1 Beobachtungs-Phase**

#### **3.1.1.1 API Gateway**

* Reverse Proxy, mit unterschiedlichen Funktionen wie z.B. Protokollübersetzung, Modellübersetzung, Fassaden für mehrere Microservices, Authorisierung, Rate Limiting, Caching usw..
* Einschätzung: Thought Works Technology Radar warnt vor überambitionierten API Gateways.

#### **3.1.1.2 Blockchain**

* Eine Blockchain ist eine bei mehreren Teilnehmern redundant gespeicherte Liste von Blöcken. Die Blöcke sind über kryptographische Verfahren miteinander verkettet. Neue Blöcke werden zwischen den Teilnehmern über ein verteiltes Konsensus-Verfahren ermittelt.
* Die Blöcke können z.B. Transaktionen bei der buchführung oder Audit-Logs enthalten.
* Durch die redundante Speicherung , die Verkettung der Blöcke über kryptographische Verfahren und das verteilte Konsensus-Verfahren ist eine nachträgliche Fälschung der bereits gespeicherten Blöcke nicht möglich.
<!-- Seite 10 endet hier -->
<!-- Seite 11 -->

#### **3.1.1.3 Consumer-Driven Contract Testing**

* Vorgehen zum Testen von Schnittstellen
* Consumer spezifiziert Contract in Form von Tests. Frameworks wie Pact ermöglichen zum einen die Ausführung der Tests in der CD-Pipeline des Consumers durch Bereitstellung eines Mocks. Zum anderen werden Tests gegen die tatsächliche Schnittstelle generiert, die in der CD-Pipeline des Providers genutzt werden können.
* Vorteile: Der Consumer erhält genau die benötigte Schnittstelle. Der Provider weiß exakt, welche Teile der Schnittstelle wie genutzt werden.

#### *3.1.1.4 Künstliche Intelligenz (KI)*

* Maschinelles Lernen, Deep Learning usw.
* Frameworks: Deeplearning4j, Keras, PyTorch, TensorFlow, scikit-learn usw.

#### **3.1.1.5 Event-getriebene Architekturen**

* Verbindet mehrere Softwarekomponenten über Ereignisse. Beim Publizieren von Ereignissen ist nicht bekannt wer diese lesen und verarbeiten wird.
* Führt zu sehr loser Kopplung der einzelnen Systemkomponenten.
* Führt zu hoher Komplexität des Gesamtsystems.
* Ereignisse können als Messages publiziert werden.

#### **3.1.1.6 Micro Frontends**

* Micro Frontends sind eine Alternative zu Architekturen mit Microservices im Backend, einem API Gateway und einem Frontend Monolithen. Zu jedem Microservice gibt es entsprechende Micro Frontends.
* Die Integration geschieht im einfachsten Fall über Links. Andere Alternativen sind serverseitige Templates, Build-time Integration, iFrames, Web Components oder eine Integration via Java Script.  
* Neben der Integration besteht eine weitere Herausforderung in einem einheitlichen Look and Feel.

#### **3.1.1.7 NoSQL Datenbanken**

* Datenanken, die einen nicht-relationalen Ansatz verfolgen.

#### **3.1.1.8 Progressive Web Apps (PWA)**

* PWAs sind Web Apps, die wie native Apps  auf dem Desktop oder mobilen Endgerät installiert werden können und ein vergleichbares Erlebnis bieten.
* Damit die PWA auf unterschiedlichen Endgeräten verwendet werden kann, ist ein responsives Design nötig.
* Herzstück einer PWA ist ein Service Worker. Durch den Service Worker kann JavaScript ausgeführt werden, selbst wenn die PWA nicht aktiv ist.
* Service Worker ermöglichen Offline Caching und Push Benachrichtigungen.
* Viele PWAs verfolgen einen Offline First Ansatz.
* Kommunikation über HTTPS ist Voraussetzung für die Nutzung von Service Worker.

<!-- Seite 11 endet hier -->
<!-- Seite 12 -->

#### **3.1.1.9 Reaktive Programmierung**

* Programmierparadigma für die Arbeit mit asynchronen Datenströmen.
* Ermöglicht nicht blockierende Server und Client Anwendungen.
* Reaktive Programmierung kann auf Implementierungsebene bei der Umsetzung Reaktiver Systeme eingesetzt werden.

### **3.1.2 Evaluations-Phase**

#### **3.1.2.1 Message-getriebene Architekturen**

* Komponenten des Systems kommunizieren über asynchrone Messages.
* Führt zu sehr loser Kopplung der Komponenten.
* Erhöht die Komplexität des Gesamtsystems.
* Unterschied zu Event-getriebenen Architekturen: Die Messages sind an einen Adressat gerichtet, Events nicht.
* Aktuell Evaluation im Rahmen einer Studienarbeit (Anbindung GeCo NaDien)

#### **3.1.2.2 Reaktive Systeme**

* Reaktive Systeme sind nach dem Reaktiven Manifest besser geeignet, den heutigen Ansprüchen an Software gerecht zu werden. Sie haben die folgenden Eigenschaften:
  * Responsiv: Das System antwortet zeitgerecht.
  * Resilient: Das System bleibt auch bei Hard- und Softwarefehlern antwortbereit und kehrt in einen gesunden Ausgangszustand zurück.
  * Elastisch: Das System reagiert auf unterschiedliche Lastanforderungen.
  * Message-Driven: Die Komponenten des Systems kommunizieren asynchron über Nachrichten.

### **3.1.3 Nutzungs-Phase**

#### **3.1.3.1 Domain Driven Design (DDD)**

* DDD ist eine Herangehensweise für die Modellierung komplexer Software. Dabei wird ausgehend von den zentralen Elementen der Problemdomäne das Lösungsmodell entwickelt.
* Wichtige Aspekte von DDD sind:
  * Entwicklung einer Ubiquitären Sprache: Um Missverständnisse zwischen fachlichen Stakeholdern und Entwicklern zu vermeiden müssen im allen Softwareartefakten exakt die gleichen Begriffe wie in der Problemdomäne verwendet werden.
  * Pattern-Katalog: Patterns wie Entities, Value Objects, Aggregates, Factories, Services und Repositories helfen bei der Modellierung.
  * Bounded Context und Strategic DDD: In komplexen Problemdomänen und Softwareprojekten ist die Erstellung eines einzigen allgemeingültigen Modells meist nicht zielführend. Besser ist die Entwicklung mehrerer Modelle, die in ihrem jeweiligen streng abgegrenzten Bounded Context gültig sind. Strategic DDD beschreibt Patterns für die Kommunikation zwischen Bounded Contexts. Dieser Aspekt von DDD ist besonders im Microservice-Umfeld relevant.

<!-- Seite 12 endet hier -->
<!-- Seite 13 -->

#### **3.1.3.2 Evolutionäre Architekturen**

* Architekturen müssen auf eine Vielzahl von Änderungen reagieren können:
  * Fachliche Anforderungen und ihre Prioritäten ändern sich.
  * Das Ökosystem, in dem Software entwickelt wird, verändert sich stetig durch neue Technologien und Konzepte.
* Evolutionäre Architekturen ermöglichen daher eine inkrementelle Weiterentwicklung in alle Dimensionen (Komponentenstruktur, Verteilung, Sicherheit usw.), ohne dass die geforderten Qualitätsmerkmale erodieren. Erreicht wird das durch
  * Continuous Delivery Praktiken,
  * eine möglichst lose Kopplung der einzelnen Komponenten
  * und Fitness Funktionen, die die Einhaltung der geforderten Qualitätsmerkmale bei jeder Änderung sicherstellen.

#### **3.1.3.3 Feature Toggles**

* Ermöglicht das Aktivieren und Deaktivieren von Features zur Laufzeit.
* Wird im Rahmen von Continuous Delivery verwendet, um noch nicht produktionsreife Features in Produktion komplett zu deaktivieren oder nur bestimmten Anwendergruppen zur Verfügung zu stellen.
* Einfache Feature Toggles werden über simple If-Anweisungen oder Conditional Spring Beans realisiert
* Es existieren aber inzwischen auch eine ganze Reihe von Feature Flag Management Systeme wie ConfigCat oder LaunchDarkly, die produktiv eingesetzt werden, um A/B-Tests oder Feature-Tests für bestimmte Benutzersegmente durchzuführen.

#### **3.1.3.4 Funktionale Programmierung**

* Programmierparadigma , das auf Funktionen ohne Seiteneffekte setzt.
* Seiteneffektfreie Funktionen liefern für die gleiche Eingabe immer das gleiche Ergebnis. Das erleichtert die Analyse und verhindert Fehler insbesondere in nebenläufigen Prozessen.
* Ein funktionaler Programmierstil führt zu einer höheren Wartbarkeit und weniger Fehlern. Das Programmierparadigma soll daher möglichst häufig genutzt werden.

## **3.2 Sprachen und Frameworks**

### **3.2.1 Beobachtungs-Phase**

#### **3.2.1.1 BPMN und Workflow-Engines**

* BPMN steht für Business Process Model and Notation
* BPMN ist eine grafische Spezifikationssprache zur Darstellung von Geschäftsprozessen und Arbeitsabläufen
* Die Notation umfasst im Wesentlichen Activities, Gateways, Events und Flows
* Workflow-Engines verarbeiten BPMN-Modelle und helfen so bei der Automatisierung von Prozessen und der Orchestrierung von Microservices
* BPMN 2.0 und Camunda als Workflow Engine sind in der KONSENS ZAK 2025 festgelegt.

<!-- Seite 13 endet hier -->
<!-- Seite 14 -->

#### **3.2.1.2 Eclipse Microprofile**

* Java Spezifikation, die auf Microservices ausgerichtet ist. Basiert auf der Jakarta EE Spezifikation, bzw. ergänzt diese.
* Ziel ist die Portabilität auf verschiedene Laufzeitumgebungen. Quarkus z.B. ist Microprofile kompatibel.

#### **3.2.1.3 Go**

* Programmiersprache mit Fokus auf einfachem und effizientem Code mit guter Lesbarkeit, hoher Performanz und guter Unterstützung für Nebenläufigkeit
* Unterstützt nicht klassenbasierte Objektorientierung (stattdessen werden Typerweiterungen benutzt)
* Intelligente Garbage Collection
* Eignet sich gut für Server- und Cloud-Software

#### **3.2.1.4 gRPC**

* Protokoll für Remote Procedure Calls.
* Basiert auf Protocol Buffers und HTTP/2.
* Server und Client Code wird aus einer sprachunabhängigen Schnittstellendeklaration generiert. Java wird unterstützt.
* Vorteile sind eine hohe Performanz durch schnelle Serialisierung und kleine Nachrichten, Support für Streaming und gute Unterstützung für Timeouts.
* gRPC ist gut für die Kommunikation zwischen Microservices geeignet, bietet aber derzeit noch keine Browserunterstützung.

#### **3.2.1.5 GralVM**

* Polyglotte virtuelle Maschine von Oracle auf der prinzipiell jede Programmiersprache ausgeführt werden kann. Bisher werden Bytecode erzeugende Programmiersprachen wie Java 8, Scala, Closure usw. sowie R, Ruby und C++ unterstützt. Programmiersprachen können in einem Programm kombiniert werden.
* Oracle stellt eine kostenlose Community und eine Enterprise Edition bereit. Die Enterprise Edition besitzt zusätzliche Features und ist schneller. Beide bieten Performanzvorteile gegenüber der JVM.
* Die GralVM ermöglicht das Erstellen von Native Binaries. Dadurch kann die Startzeit deutlich beschleunigt und der Speicherverbrauch minimiert werden.
* Herzstück der GralVM ist der Gral Compiler. Die GralVM basiert auf dem Open JDK und ersetzt dort den C2 JIT Compiler. Aufgabe des JIT Compilers ist es während der Ausführung des Codes diesen zu optimieren.

#### **3.2.1.6 GraphQL**

* Query Sprache sowie ein Runtime Environment für die Verarbeitung der Queries.
* Unterstützt wird das Lesen, Schreiben und Abonnieren von Daten
* Keine Ressourcenorientierung wie in REST. Die Daten werden als Graph repräsentiert und können über einen einzelnen Endpoint gelesen, bzw. geändert werden. Dadurch erhält der Client in einer einzelnen Anfrage genau die benötigten Daten

<!-- Seite 14 endet hier -->
<!-- Seite 15 -->

* Spring Boot Starter für GraphQL existiert.

#### **3.2.1.7 IBM Equal Access Toolkit**

* Das Toolkit besteht aus zwei Teilen:
  * Guidelines: Diese helfen allen Mitgliedern des Teams (Product Owner, Designer, Entwickler Tester usw.)  Barrierefreiheit in allen Phasen des Entwicklungszyklus zu berücksichtigen.
  * Accessibility Checker: Browser-Plugins, die bei der automatisierten Überprüfung der Barrierefreiheit und Berichterstellung unterstützen.

#### **3.2.1.8 MicroNaut**

* Java Framework mit geringem Speicherverbrauch und kürzerer Startzeit. Erreicht wird beides durch Dependency Injection zur Compile-Zeit.
* Intern wird ein Netty verwendet.
* Reaktive Programmierung wird explizit unterstützt.

#### **3.2.1.9 PostgreSQL**

* Freies objektrelationales Datenbankmanagementsystem für Windows und Linux.
* Weitestgehend konform zum SQL-Standard SQL:2011.
* Vollständig ACID konform.
* Unterstützt Clustering, synchrone und asynchrone Replikation.
* Keine Beschränkungen in Bezug auf DB-Maximalgröße oder maximale Spaltenanzahl.
* Stellt vielfältige JSON Funktionen und Operatoren bereit.
* JDBC-Treiber sind Open Source in den zentralen Maven Repositories verfügbar.
* Es  fallen keine Lizenz-Kosten an.
* PostgreSQL wird in der ZAK 2025 neben der Oracle DB als erlaubtes DBMS genannt.

#### **3.2.1.10 Project Reactor**

* Framework für Reaktive Programmierung
* Basis für den Reaktive Stack in Spring mit Spring Web Flux usw.
* Einschätzung: Baldige Evaluation im Rahmen der Anbindung von NaDien.

#### **3.2.1.11 Python**

* Beliebte, dynamisch typisierte, leicht zu erlernende Programmiersprache.
* Schwächen von Python sind die Performanz und die Unterstützung mehrerer Prozessoren.
* Python ist im KI-Umfeld weit verbreitet.

#### **3.2.1.12 Quarkus**

* Java Framework für Cloud Native Anwendungen.
* Geringer Speicherverbrauch und schnelle Startzeit.
* Optimiert für die GralVM.
* Native Integration mit Docker und Kubernetes.
* Unterstützt Imperative und Reaktive Programmierung.

<!-- Seite 15 endet hier -->
<!-- Seite 16 -->

#### **3.2.1.13 RxJava**

* Bibliothek für Reaktive Programmierung
* Basiert auf den von Microsoft entwickelten Reactive Extensions (Rx).

#### **3.2.1.14 Web Assembly**

* Standardisiertes Binärformat, das von einer Stack-basierten VM ausgeführt  und von den meisten Browsern unterstützt wird.
* Erlaubt es z.B. C, C++ und Rust  Code im Browser auszuführen.
* Verspricht bessere Performanz als JavaScript.
* Bisherige APIs noch sehr eingeschränkt. Erweiterungen sind geplant.

#### **3.2.1.15 Web Components**

* Webkomponenten sind eine Gruppe von Web-Technologien, die es ermöglichen, benutzerdefinierte, wiederverwendbare HTML Elemente zu erstellen. Deren Funktionalität ist gekapselt und vom  Rest der Seite isoliert.
* Basiert auf Custom Elements, Shadow DOM und HTML Templates.
* Einschätzung: Aktuell uninteressant

### **3.2.2 Evaluations-Phase**

#### **3.2.2.1 Spring Data JDBC**

* Spring Data basiertes ORM Framework
* Fokusiert auf Einfachheit und verzichtet dafür auf einige von der Java Persistence API (JPA) bekannte Features wie Caching, Lazy Loading usw..
* Aktuell keine offizielle Unterstützung für Oracle DBs.

### **3.2.3 Nutzungs-Phase**

#### **3.2.3.1 React**

* JavaScript-Library für das Erstellen von User Interfaces.

#### **3.2.3.2 RESTful HTTP APIs**

* REST Prinzipien sind u.a. Ressourcenorientierung, Zustandslosigkeit, Nutzung der http Verben und HATEOAS.
* Einfache Nutzung in SPAs per JavaScript möglich.
* Einschätzung:
  * Starke Fokusierung auf die Einhaltung der REST-Prinzipien, insbesondere wenn es um HATEOAS geht eher hinderlich.
  * http APIs sind in fast jeder Hinsicht eine bessere Alternative zu SOAP

#### **3.2.3.3 Spring Boot**

* Java Application Framework

#### **3.2.3.4 SCSS**

* CSS-Präprozessor, der die Erstellung und Pflege von CSS-Stylesheets vereinfacht

<!-- Seite 16 endet hier -->
<!-- Seite 17 -->

#### **3.2.3.5 TypeScript**

* Auf JavaScript basierende Programmiersprache mit Unterstützung für statische Typisierung.
* Die statische Typisierung führt zu besser dokumentiertem Code, hilft Fehler bereits zur Compile-Zeit zu entdecken und sorgt für bessere IDE-Unterstützung.
* TypeScript-Code wird durch den TypeScript-Compiler in JavaScript-Code übersetzt.

## **3.3 Werkzeuge und Libraries**

### **3.3.1 Beobachtungs-Phase**

#### **3.3.1.1 Cypress Frontend Testing**

* Unterstützt System-, Integrations- und Unit-Tests während des Entwicklungsprozesses, wobei der Fokus eher auf den System Frontend-Tests liegt.
* Die Evaluation des JavaScript Test-Codes findet innerhalb des Browsers statt
* Ermöglicht die Aufzeichnung von automatisierten Tests
* Hat an Popularität in den letzten Jahren deutlich hinzugewonnen, da die Tests einfacher, schneller und fehlerfreier als in Selenium laufen (z.B. keine expliziten Sleeps und Waits notwendig)

#### **3.3.1.2 Gatling**

* Werkzeug für Last- und Performanztests
* Scala-basierte DSL für Lasttest-Skripte
* Maven- und Gradle-Plugins für Verwendung in CD-Pipeline vorhanden

#### **3.3.1.3 Material UI**

* Komponenten-Bibliothek für React basierend auf dem Google Material Design.
* Alternative zu React Bootstrap  

#### **3.3.1.4 springdoc-openapi**

* Generiert automatisiert OpenAPI Dokumentation für eine Spring Boot Anwendung.
* Integriert Swagger UI
* Kein offizielles Spring Projekt  

#### **3.3.1.5 Thymeleaf**

* Serverseitige JAVA-template Engine
* Es können Vorlagen für HTML-, XHTML- oder HTML5-Seiten geschrieben werden
* Später können diese Serverseitig mit Daten/Subseiten gefüllt werden
* Die GDA verwendet aktuell noch Freemarker.

### **3.3.2 Evaluations-Phase**

#### **3.3.2.1 Postman**

* Werkzeug zum Testen und Entwerfen von SOAP, REST und GraphQL APIs
* Automatisierte Ausführung innerhalb einer CD-Pipeline möglich

<!-- Seite 17 endet hier -->
<!-- Seite 18 -->

### **3.3.3 Nutzungs-Phase**

#### **3.3.3.1 Antlr**

* Ein objektorientierter Parsergenerator, der aus einer Grammatik ausführbaren Code erzeugt.

#### **3.3.3.2 Gradle**

* Build-Werkzeug
* Performanter als Maven durch inkrementelle Builds und Build Caches.
* Builds sind durch die DSL und den Task-basierten Ansatz leichter an individuelle Bedürfnisse anpassbar.
* Die GDA stellt aktuell von Maven auf Gradle um.

#### **3.3.3.3 Jest**

* Von Facebook entwickeltes und gut dokumentiertes Frontend Testtool für jede JavaScript Code-Basis.
* Wird gerne als Test-Runner zusammen mit Enzyme oder React Testing Library zum Testen für React-Anwendungen verwendet.

#### **3.3.3.4 JMeter**

* Werkzeug für Last- und Performanztests
* Maven-Plugin ermöglicht die Nutzung im Rahmen einer CD-Pipeline.
* Ausblick: Unübersichtliche XML-Konfigurationsdateien und unkomfortable API führen zu schlechter Wartbarkeit der Tests. Mittelfristig sollten evtl. Alternativen wie Gatling evaluiert werden.

#### **3.3.3.5 Jsonnet**

* Open-Source-Daten-Template-Sprache
* Erlaubt die Generierung, Manipulation und Konfiguration von Konfigurationsdateien wie z.B.:
  * YAML
  * JSON

#### **3.3.3.6 OWASP Dependency Check**

* Scannt verwendete Fremd-Bibliotheken auf bekannte Schwachstellen
* Automatisiert im Rahmen eines Maven-Builds nutzbar

#### **3.3.3.7 Project Lombok**

* Java Library, die zur Compile-Zeit automatisch Getter, Setter, Builder usw. generiert.
* Eclipse Plugin existiert.

#### **3.3.3.8 React Bootstrap**

* Auf dem Bootstrap Frontend Framework aufbauende Komponenten-Library für React

#### **3.3.3.9 Resilience4j**

* Funktional orientierte Java Library für Fehlertoleranz

<!-- Seite 18 endet hier -->
<!-- Seite 19 -->

* Circuit Breaker, Bulk Heads, Timeouts usw.

#### **3.3.3.10 SoapUI**

* Werkzeug u.a. zum Testen von SOAP APIs
* Nutzung innerhalb der GDA für WSDL-basierte automatisierte Funktionstests und zum Nachstellen von Fehlersituationen im Support-Bereich.
* Ausblick: Wartbarkeit der automatisierten Tests sehr schlecht. Aktuell wird Postman als Alternative evaluiert.

#### **3.3.3.11 Vavr**

* Java Library für Funktionale Programmierung
