# Setup

This setup has all the dev tools needed for React, Redux and CSS grid. It is not required to use FireFox Nightly, but the default `start` script is setup to automatically use it as the default browser.

- [Yarn](https://yarnpkg.com/lang/en/) see "Setup yarn Details" below.
- [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly)
- [React Dev Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
- [Redux Dev Tools](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)
- [Visual Studio Code](https://code.visualstudio.com)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Formatting

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Set the following rules in VSCode settings:

- Editor: Word Wrap `bounded`
- Editor: Word Wrap Column `120`
- Editor: Wrapping Indent `same`
- HTML > Format: Wrap Attributes `auto`
- HTML > Format: Wrap Line Length `120`

## First time setup

```bash
# Create source data clone (do once)
cd <your-covid19-repo>
git clone https://github.com/CSSEGISandData/COVID-19 COVID-19-JHU
```

```bash
# Update COVID-19 repo from source
cd <your-covid19-repo>/COVID-19-JHU
git pull

# Run processing script to update client/public/stats
cd <your-covid19-repo>/express
# Do once
yarn
#
cd parse
#
node aparse.js
```

## UI server

Start the local dev server for UI development.
Uses port 3000.

```bash
cd <your-covid19-repo>/client
# install dependencies (one time only)
yarn
# start the dev server
yarn start
```

## Publish client

Build the latest version for local client.

```bash
bin/build.sh
```

---

### Deploy build output to online site.

**Edit script for your deploy site.**

```bash
bin/pub-html.sh
```

## Documentation Preview

```bash
cd <your-covid19-repo>/docus
# install dependencies (one time only)
yarn
# start the documentation server
yarn start
```

## Documentation Build and Deploy

**Edit script for your Documentation deploy site.**

Build documentation.

```bash
bin/doc-build-pub.sh
```

## Express server Development

Express server not used yet in the COVID-19 Public edition.  
We plan to use express server for community building features.

## express server

Start the local express server for managing database content.
Uses port 3002.

```bash
cd ./express
# install dependencies (one time only)
yarn
# start the dev server
yarn start
```

## Updating covid19-express

```bash

# Update express app version
cd ./express
npm version patch

# Upload latest code to server
../bin/pub-express.sh

```

## Setup yarn Details

```bash

# Install GPG Suite
# Uncheck GPG Mail and GPG Services
# Uncheck GPG Keychain Service
open https://gpgtools.org

# Verify gpg installed
which gpg
/usr/local/bin/gpg

# create bash_profile
touch ~/.bash_profile

# Install yarn
curl -o- -L https://yarnpkg.com/install.sh | bash

# Verify yarn installed
which yarn
/Users/epdev/.yarn/bin/yarn

```
