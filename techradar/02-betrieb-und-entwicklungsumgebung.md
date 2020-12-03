# **2 Betrieb und Entwicklungsumgebung**

[Zurück zum Inhaltsverzeichnis](00-inhaltsverzeichnis.md#inhaltsverzeichnis)

## Schnellnavigation

* [Konzepte und Techniken](02-betrieb-und-entwicklungsumgebung.md#21-konzepte-und-techniken)
  * [Beobachtungsphase](02-betrieb-und-entwicklungsumgebung.md#211-beobachtungs-phase)
  * [Evaluationsphase](02-betrieb-und-entwicklungsumgebung.md#212-evaluationsphase)
  * [Nutzungsphase](02-betrieb-und-entwicklungsumgebung.md#212-nutzungssphase)
* [Plattformen](02-betrieb-und-entwicklungsumgebung.md#22-plattformen)
  * [Beobachtungssphase](02-betrieb-und-entwicklungsumgebung.md#221-beobachtungs-phase)
  * [Nutzungsphase](02-betrieb-und-entwicklungsumgebung.md#222-nutzungs-phase)
  * [Evaluationsphase](02-betrieb-und-entwicklungsumgebung.md#232-evaluationsphase)
* [Werkzeuge und Libraries](02-betrieb-und-entwicklungsumgebung.md#23-werkzeuge-und-libraries)
  * [Beobachtungsphase](02-betrieb-und-entwicklungsumgebung.md#231-beobachtungs-phase)
  * [Evaluationsphase](02-betrieb-und-entwicklungsumgebung.md#232-evaluationsphase)
  * [Nutzungsphase](02-betrieb-und-entwicklungsumgebung.md#233-nutzungs-phase)

## **2.1 Konzepte und Techniken**

### **2.1.1 Beobachtungs-Phase**

#### **2.1.1.1 Chat-Ops**

* Chat Bots (z.B. Hubot) werden in den Team-Chat (z.B. Rocket-Chat) integriert und können dann genutzt werden, um  mit der Entwicklungsumgebung  und anderen Infrastrukturkomponenten zu kommunizieren.
* Z.B. kann das Deployment eines neuen Releases auf einen der Server durch eine entsprechende Nachricht an einen Chat Bot getriggert werden. Das Ergebnis des Deployments schreibt der Chat Bot wiederum in den Team-Chat. Tritt ein Fehler auf kann eines der Teammitglieder direkt darauf reagieren, bzw. das Problem transparent für das ganze Team diskutieren.  

#### **2.1.1.2 Configuration as Code**

* Anstatt Anwendungen wie z.B. den Build-Server mühsam über die Weboberfläche zu konfigurieren, werden diese über im VCS versionierte Konfigurationsdateien konfiguriert.
* Zum einen sind Änderungen an der Konfiguration dadurch nachvollziehbar. Zum anderen können Konfigurationen schneller geändert und wiederverwendet werden.

#### **2.1.1.3 GitOps**

* Kombination aus Infrastructure as Code und Continuous Delivery, die häufig im Kubernetes-Umfeld zum Einsatz kommt.
  * Git wird als Single Source of Truth für das gesamte System verwendet.
  * Änderungen am System sind ausschließlich über Pull Requests möglich.
  * Nach dem Mergen eines Pull Requests wird das System automatisch aktualisiert.
* Vorteile: Änderungen am System sind im Nachhinein nachvollziehbar, können im Rahmen einer Continuous Delivery Pipeline getestet werden und jederzeit schnell zurückgerollt werden.

#### **2.1.1.4 Inner Source**

* Entwicklungsmethode bei der innerhalb einer Organisation bewährte Praktiken aus großen Open Source Projekten genutzt werden, um eine Art interne Open Source Community aufzubauen.
* Schlüsselpraktiken sind ein offener Zugang zu allen Artefakten (Code, Dokumentation und Issue Tracker), eine offene Kommunikation an der sich alle Interessierte beteiligen können und eine Trennung zwischen contributor und Committer durch Code Reviews.

#### **2.1.1.5 Service Mesh**

* Ein Service Mesh übernimmt in  einer Microservice Umgebung Dienste wie z.B. Monitoring, Tracing und die Erhöhung der Resilienz durch Circuit Breaker.
* Realisiert wird das Service Mesh transparent für die Microservices durch das Sidecar-Pattern. Jedem Microservice wird ein Sidecar in Form eines Service Proxies zur Seite gestellt. Jegliche Kommunikation des Microservices läuft dann über den Service Proxy.
* Das Service Mesh besteht aus der Data Plane - den dezentralen Service Proxies - und einer zentralen Control Plane, die die gesammelten Daten verarbeitet und die Service Proxies konfiguriert.
* Das Service Mesh entbindet die einzelnen Microservices davon die genannten Dienste selbst zu implementieren. Ohne Service Mesh sind Bibliotheken nötig, die von allen Microservices einheitlich genutzt werden müssen und die technologische Unabhängigkeit und Weiterentwicklung behindern.
* Die Service Proxies erhöhen die Latenz.
* Ein Service Mesh erfordert Konfigurationsaufwand und besitzt eine hohe Lernkurve.

#### **2.1.1.6 Site Reliability Engineering**

* Die Grundidee hinter Site Reliability Engineering ist es Softwareentwicklungs-Methoden auf Aspekte des Betriebs und der Infrastrukturprovisionierung anzuwenden.
* Ziel ist die Bereitstellung von Systemen mit angemessener Zuverlässigkeit.
* Entwickelt wurde das Konzept von Google.

### **2.1.2 Evaluationsphase**

#### **2.1.2.1 Chaos Engineering**

* Im Rahmen kontrollierter Experimente wird Chaos (z.B. Slow Responses oder Ausfälle von Subsystemen) in das zu entwickelnde System injiziert.
* Durch die regelmäßigen zum Teil nicht vorher angekündigten Experimente wird nach und nach die Resilienz des Systems erhöht.
* Chaos Engineering wurde im Rahmen einer Bachelor-Arbeit bei der GDA evaluiert.

#### **2.1.2.2 Cloud Native**

* Anwendungen, die von Beginn an dafür ausgelegt sind in der Cloud zu laufen
* Cloud Native Anwendungen bestehen häufig  aus einer Reihe von Microservices, die in Container laufen, mit Kubernetes orchestriert und per DevOps und GitOps verwaltet und deployed werden.

#### **2.1.2.3 DevOps**

* Sammlung von Prinzipien und Praktiken, die der AE, dem Betrieb, dem Sicherheitsteam und dem Test helfen, gemeinsam einen Value Stream aufzubauen, durch den
  * neue Features schnell umgesetzt und in Produktion gebracht werden können.
  * ein sicherer und stabiler Betrieb gewährleistet wird und sich die Qualität der Software stetig verbessert.
  * die Prozesse, Werkzeuge und Fähigkeiten aller Beteiligten sich durch kontinuierliches Lernen stetig weiterentwickeln.
* DevOps und funktional organisierte Organisationen sind kein Widerspruch. Cross-funktionale Teams nicht zwingend erforderlich.
* Security muss ein integraler Bestandteil des DevOps-Ansatzes sein. Dies wird durch den Begriff DevSecOps verdeutlicht. DevSecOps verfolgt zwei Ziele:
  * Erhöhung der Security durch geeignete Maßnahmen in allen Phasen des Value Streams.
  * Nahtlose Integration ohne den Value Stream aufzuhalten oder zu verlangsamen.

#### **2.1.2.3 Security by Design**

* Security wird als explizite Anforderung von Beginn an (Shift Left) in allen Phasen des Entwicklungsprozesses berücksichtigt.

### **2.1.3 Nutzungssphase**

#### **2.1.3.1 Continuous Delivery (CD)**

* Kontinuierliche Bereitstellung neuer Releases im Rahmen einer Continuous Delivery Pipeline
* Release Kandidaten durchlaufen hochgradig automatisiert die einzelnen Test-Stages der Continuous Delivery Pipeline.
* Continuous Delivery führt zu schnellerer Bereitstellung neuer Features, geringeres Risiko durch die kontinuierliche Bereitstellung vieler kleiner Änderungen, höhere Qualität durch automatisierte Tests und schnelle Bereitstellung von Bug-Fixes, mehr Sicherheit usw..

#### **2.1.3.2 Pair-Programming**

* Arbeitstechnik aus der agilen Software-Entwicklung zur Steigerung der Softwarequalität und zur Verbreitung von Wissen.
* Bei der Erstellung von Quellcode arbeiten zwei Entwickler gleichzeitig an einem PC. Einer schreibt Code und der andere kontrolliert diesen und denkt über die Problemstellung nach. Die Rollen werden regelmäßig getauscht.

#### **2.1.3.3 Scrum**

* Scrum ist ein agiles Vorgehensmodell für die effektive Zusammenarbeit im Team.

#### **2.1.3.4 Vorgehensmuster für Softwarearchitektur**

* Pattern-Katalog zur Architekturarbeit in agilen Projekten nach einem Buch von Stefan Toth, bzw. einem Modul des International Software Architecture Quality Board (ISAQB) Certified Professional for Software Architecture (CPSA) Advanced Level Lehrplans.

[Zurück nach oben](02-betrieb-und-entwicklungsumgebung.md#2-betrieb-und-entwicklungsumgebung)

## **2.2 Plattformen**

### **2.2.1 Beobachtungs-Phase**

#### **2.2.1.1 Eclipse Che**

* Kombination aus webbasierter IDE und Workspace-Server
* Die einzelnen Komponenten der IDE und die Workspaces wertden Remote in Containern ausgeführt.
* Entwickelt wird im Container (daher quasi Entwicklung auf Linux unter Windows möglich)
* Visual Studio Code-Extensions können genutzt werden.
* Auslieferung vorkonfigurierter IDE und Workspaces möglich.
* Schnelles Onboarding neuer Entwickler möglich

#### **2.2.1.2 EFK Stack**

* Der EFK Stack ist eine im Kubernetes-Umfeld häufig eingesetzte Alternative des populären ELK Stacks. Der ELK Stack besteht aus den Komponenten Elastic Search, Logstash und Kibana und ermöglicht ein verteiltes Logging in großen Systemen.
* Beim EFK-Stack wird Logstash durch Fluentd ersetzt.
* Vorteile von Fluentd sind neben der guten Kubernetes-Integration der geringe Hauptspeicherbedarf, die eingebaute persistente Message Queue  und ein deklaratives auf Tags basierendes Routing von Events.

#### **2.2.1.3 Knative**

* Plattform, die auf Kubernetes aufbaut und das Deployment von Serverless-Architekturen ermöglicht.
* Knative besteht aus den beiden Unterprojekten Serving und Eventing.
* Knative erleichtert das Deployment, Upgrades, Routing, Autoskaling  und die Verknüpfung unterschiedlicher Komponenten über Events. Zudem wird für eine hohe Observierbarkeit gesorgt.

#### **2.2.1.4 Kubernetes**

* Plattform für Container-Orchestrierung
* Wird unter dem Dach der CNCF entwickelt.

#### **2.2.1.5 Istio**

* Service Mesh
* Nutzt Prometheus, Grafana, Jaeger und Envoy.
* Die primär unterstützte Umgebung ist Kubernetes. Istio ist jedoch recht flexibel.

### **2.2.2 Nutzungs-Phase**

#### **2.2.2.1 Docker**

* Technologie zur Containerisierung von Anwendungen
* Eine containerisierte Anwendung ist isoliert vom Host-System und verhält sich in unterschiedlichen Umgebungen immer gleich.
* Verringert die Komplexität der Installation einer Anwendung auf ihre Konfiguration
* Geringerer Ressourcenverbrauch und performanter als VMs.
* Ermöglicht Technologieunabhängigkeit zwischen Anwendungen.

#### **2.2.2.2 Podman**

* Daemon-less Runtime für die Erstellung und Ausführung OCI-kompatibler Container.
* Erlaubt die Ausführung von Containern ohne Root-Rechte und erhöht so die Sicherheit. (Aktuell unter SLES 12 SP3 nicht möglich.)
* Netzwerk-Utilities scheinen noch nicht so gut entwickelt wie bei Docker (z.B. fehlende Out-Of-The-Box-Bridges)

[Zurück nach oben](02-betrieb-und-entwicklungsumgebung.md#2-betrieb-und-entwicklungsumgebung)

## **2.3 Werkzeuge und Libraries**

### **2.3.1 Beobachtungs-Phase**

#### **2.3.1.1 Ansible**

* Werkzeug für das automatisierte Deployment von Anwendungen und Systemen.
* Auf den Remote Systemen müssen keine Agenten installiert werden. Eine SSH-Verbindung genügt.

#### **2.3.1.2 Clair**

* Statischer Vulnerability Scanner für Docker Container

#### **2.3.1.3 HashiCorp Terraform**

* Infrastructure as Code Werkzeug mit Fokus auf Cloud-Dienste.

#### **2.3.1.4 Helm**

* Paketmanager für die Installation von Anwendungen in Kubernetes.
* CNCF Technology Radar 2020-06: Adopt

#### **2.3.1.5 Jaeger**

* Verteilte Tracing Plattform
* Wird unter dem Dach der CNCF entwickelt.

### **2.3.2 Evaluationsphase**

#### **2.3.2.1 Flux**

* Kubernetes Operator für gitOps
* CNCF Technology Radar 2020-06: Adopt

#### **2.3.2.2 Kustomize**

* Kubernetes-natives Werkzeug für die Generierung unterschiedlicher Anwendungs-Konfigurationen.
* CNCF Technology Radar 2020-06: Trial

#### **2.3.2.3 Tekton**

* Framework für die Definition von Continuous Delivery Pipelines für Kubernetes.
* CNCF Technology Radar 2020-06: Assess

### **2.3.3 Nutzungs-Phase**

#### **2.3.3.1 arc42**

* Template für die Dokumentation einer Softwarearchitektur.

#### **2.3.3.2 Grafana**

* Dashboards und Visualisierungen für eine Vielzahl von Quellen wie z.B. Prometheus.

#### **2.3.3.3 Prometheus**

* Monitoring System und Time Series Database
* Wird unter dem Dach der CNCF entwickelt.

#### **2.3.3.4 SonarQube**

* Werkzeug für statische Code-Analyse zur Verbesserung der Code-Qualität und Sicherheit

[Zurück nach oben](02-betrieb-und-entwicklungsumgebung.md#2-betrieb-und-entwicklungsumgebung)

[Zurück zum Inhaltsverzeichnis](00-inhaltsverzeichnis.md#inhaltsverzeichnis)
