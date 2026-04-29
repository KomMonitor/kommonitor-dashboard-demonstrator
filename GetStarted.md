## Starting the Project with yalc and kommonitor-toolbox

### Prerequisites

- [Node.js](https://nodejs.org) and npm installed
- [yalc](https://github.com/wclr/yalc) installed globally:
```bash
 npm install -g yalc
```

### Steps

**1. Publish kommonitor-toolbox (in the toolbox project)**

```bash
cd /path/to/kommonitor-toolbox
yalc publish
```

**2. Link the toolbox into the dashboard project**

```bash
cd /path/to/kommonitor-dashboard-demonstrator
yalc add kommonitor-toolbox
```

> This creates a .yalc directory and points package.json to `file:.yalc/kommonitor-toolbox` — this is already pre-configured.

**3. Install dependencies and start**

```bash
npm install
npm start
```
