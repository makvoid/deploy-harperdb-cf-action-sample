# deploy-harperdb-cf-action-sample
Sample repository showing how to use the HarperDB Custom Functions Deployment Action.

## Requirements
1. Setup the required secrets:
    1. HDB_ADMIN_USERNAME
    2. HDB_ADMIN_PASSWORD
    3. HDB_ENDPOINT
    4. HDB_PROJECT
2. Change the default values if needed (Custom Functions directory, cert checking)

You can optionally set the `HDB_ENDPOINT` and `HDB_PROJECT` secrets as variables instead, but this is up to you if you want them visible or not.
## Usage
Check out the example deployment file within the workflows directory. By default, it only runs on pushes to the main branch. If you do not have any dependencies to install, you can skip the steps where it installs Node and the dependencies.

## Adding Secrets
1. Select 'Settings' from the repository home
2. Select 'Secrets and variables' under the 'Security' category and click 'Actions'.
3. Click 'New repository secret' and add the secrets as described below:

| Secret | Description |
| --- | --- |
| HDB_ADMIN_USERNAME | Super-user level username to authenticate as |
| HDB_ADMIN_PASSWORD | Password for the user |
| HDB_ENDPOINT | Schema, domain and port of the target HarperDB API. (ex. `https://1.2.3.4:9925` or `https://some-api.example.com`) |
| HDB_PROJECT | Which project to upload the Custom Function package to (ex. `api`) |