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
 1. DEMO via images. Repo clone url generated.
    
 <img width="959" height="472" alt="image" src="https://github.com/user-attachments/assets/f0f4cb23-1be6-4d23-a124-597caba18a8c" />
 2. Git repo is cloned in my local ubuntu virtual machine.
   
  <img width="790" height="316" alt="image" src="https://github.com/user-attachments/assets/58991db7-bf13-4bb5-ab0d-7096b79b19c6" />
  3. The directory cloned is npm initialised. Package was generated as the default prompts were accepted.
  <img width="800" height="452" alt="image" src="https://github.com/user-attachments/assets/cac90729-f947-4b08-83f4-d288296bc9f5" />

   4. an package.json file was created.
  <img width="788" height="453" alt="image" src="https://github.com/user-attachments/assets/46ff6fff-7258-41d4-bd61-605656ae18a4" />
  5. Index.js file was created and the contents were inserted. an express.js file.
 <img width="796" height="448" alt="image" src="https://github.com/user-attachments/assets/93e5cb37-468e-4d66-959c-bbcb364bf5db" />
 <img width="824" height="456" alt="image" src="https://github.com/user-attachments/assets/e43e5293-a869-4b7c-9cca-b2a61d4864e1" />
 6. the directory was initiatised, changes were staged and ready to push.
 <img width="805" height="469" alt="image" src="https://github.com/user-attachments/assets/8d4270fe-699f-47e7-8598-6a2cd4a3bea0" />
<img width="708" height="461" alt="image" src="https://github.com/user-attachments/assets/159e6be7-4706-43b9-b6f7-e3b591dab564" />
7. the workflow directory was created using "mkdir -p .github/workflows". and this editor "vim .github/workflows/node.js.yml
" was used to edit the file.
<img width="947" height="424" alt="image" src="https://github.com/user-attachments/assets/5877878a-d261-448d-ab58-fef2a48bba35" />
<img width="959" height="275" alt="image" src="https://github.com/user-attachments/assets/3b9d469e-a0f0-4963-b508-b1365a4faeac" />
<img width="811" height="457" alt="image" src="https://github.com/user-attachments/assets/4ee56859-f490-4283-8a20-d728c0e9ed75" />
8. The changes were pushed and the actions section on the remote repo was evaluted for build status.
<img width="862" height="477" alt="image" src="https://github.com/user-attachments/assets/21ba7fc1-ba14-44d1-8270-9b4f5052e57d" />

--------------------------------------------------------------------------------------------------------------------
trouble shooting
1. The errors are trouble-shooted and the guide is below.

<img width="629" height="421" alt="image" src="https://github.com/user-attachments/assets/b1bb12d0-b61d-4c6a-bb70-15dd6e41bd12" />
the presence of package-lock.json is required for the build to progress. run npm install
<img width="821" height="459" alt="image" src="https://github.com/user-attachments/assets/7b4f207e-a718-438a-bd49-4e9255f5d2ba" />

2. <img width="959" height="450" alt="image" src="https://github.com/user-attachments/assets/b33346e6-bf52-4883-9be7-4400593715b1" />
modify package.json file and edit the test script
<img width="833" height="452" alt="image" src="https://github.com/user-attachments/assets/02c1efbc-9ca3-4696-883f-41e27a688de3" />
<img width="806" height="457" alt="image" src="https://github.com/user-attachments/assets/92f454dd-49c3-4f97-98ef-77fae41e0352" />

3. create index.test.js so that jest script can use it.
<img width="792" height="452" alt="image" src="https://github.com/user-attachments/assets/52e58f35-459e-44eb-8beb-1f3afef9e1d4" />
<img width="796" height="450" alt="image" src="https://github.com/user-attachments/assets/3825de3e-8a51-4c3c-b624-de3467bd323e" />

4. ran test by using npm test
<img width="660" height="445" alt="image" src="https://github.com/user-attachments/assets/4a8ff004-b4ba-4553-97f9-28115f65e49e" />
added the files that had changes as well as the test.js file and pushed to remote repo
<img width="736" height="437" alt="image" src="https://github.com/user-attachments/assets/60d318e9-c361-4ef7-af00-108c2067428b" />

5. the node.js.yml file was updated and pushed to the main branch. build was succesful
   <img width="956" height="449" alt="image" src="https://github.com/user-attachments/assets/d34c31f9-8177-4dd5-9c58-5d4d3973c8ad" />
   <img width="947" height="425" alt="image" src="https://github.com/user-attachments/assets/655d1cf0-f064-48be-b48a-775113172746" />
   <img width="959" height="418" alt="image" src="https://github.com/user-attachments/assets/2dcbe7c2-e278-4a77-9297-dc7c414cb586" />

What happened here is:

By removing 14.x from the workflow matrix, you avoided the incompatibility issue between Node 14 and Jest 29+.

Your workflow is now only testing in environments where your code and dependencies are supported.

✅ So your project is:

Building successfully

Running tests automatically via GitHub Actions

Verifying consistency on Node 16 and 18

That’s exactly what a proper CI/CD setup should look like.





