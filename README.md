# Introduction-to-CI-CD

**Continuous Integration (CI)** and **Continuous Delivery/Deployment (CD)** are DevOps practices that help teams deliver software faster, more reliably, and with fewer errors.

* **Continuous Integration (CI):**
  Developers frequently merge their code into a shared repository. Each change triggers automated builds and tests to ensure the new code works well with the existing system. This reduces bugs and integration issues.

* **Continuous Delivery (CD):**
  After CI, the application is automatically packaged and prepared for release. Deployments can be triggered manually, but the system is always in a deploy-ready state.

* **Continuous Deployment (CD):**
  Goes one step further — every successful change that passes CI tests is automatically deployed to production with no manual approval.

**Benefits of CI/CD:**

* Faster release cycles.
* Quick feedback on code quality.
* Reduced human errors in deployments.
* More confidence in changes through automation.

**Example tools:** Jenkins, GitHub Actions, GitLab CI/CD, CircleCI.

👉 In short: CI/CD automates code testing and delivery, making software development faster, safer, and more efficient.


**GitHub Actions** is a CI/CD tool built directly into GitHub. It lets you automate workflows (like building, testing, and deploying your code) every time certain events happen in your repository — for example, when you push code, open a pull request, or create a release.

* **Workflows:** Defined in YAML files inside `.github/workflows/`. A workflow describes what should run and when.
* **Jobs:** Each workflow is made up of jobs (like build, test, deploy).
* **Steps:** Each job contains steps that run commands or reusable **actions**.
* **Runners:** The actual environment (like Ubuntu, Windows, or macOS) where jobs execute.

**Benefits:**

* Integrated directly into GitHub (no extra setup needed).
* Supports CI/CD pipelines (build → test → deploy).
* Huge marketplace of pre-built actions (e.g., for Docker, AWS, Kubernetes).
* Works well with cloud providers and external services.

👉 In short: GitHub Actions makes it easy to automate software workflows without leaving GitHub.
 Tasks.
 1. DEMO via images
 <img width="959" height="472" alt="image" src="https://github.com/user-attachments/assets/f0f4cb23-1be6-4d23-a124-597caba18a8c" />
 <img width="790" height="316" alt="image" src="https://github.com/user-attachments/assets/58991db7-bf13-4bb5-ab0d-7096b79b19c6" />
 <img width="800" height="452" alt="image" src="https://github.com/user-attachments/assets/cac90729-f947-4b08-83f4-d288296bc9f5" />
 <img width="788" height="453" alt="image" src="https://github.com/user-attachments/assets/46ff6fff-7258-41d4-bd61-605656ae18a4" />
 <img width="796" height="448" alt="image" src="https://github.com/user-attachments/assets/93e5cb37-468e-4d66-959c-bbcb364bf5db" />
 <img width="824" height="456" alt="image" src="https://github.com/user-attachments/assets/e43e5293-a869-4b7c-9cca-b2a61d4864e1" />
 <img width="805" height="469" alt="image" src="https://github.com/user-attachments/assets/8d4270fe-699f-47e7-8598-6a2cd4a3bea0" />







