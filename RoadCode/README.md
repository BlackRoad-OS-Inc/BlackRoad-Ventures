# RoadCode — BlackRoad Ventures

Workspace for BlackRoad Ventures development under the [RoadCode](https://github.com/BlackRoad-OS-Inc/RoadCode) system.

## Structure
- `roadcode.json` — deployment and CI config
- `TODO.md` — active tasks (root level)
- `ROADMAP.md` — product roadmap (root level)

## Quick Start
```bash
# Deploy
ssh gematria "mkdir -p /var/www/blackroad/BlackRoad-Ventures"
scp index.html gematria:/var/www/blackroad/BlackRoad-Ventures/

# Mirror to Gitea
git remote add gitea https://git.blackroad.io/BlackRoad-OS-Inc/BlackRoad-Ventures.git
git push gitea main
```
