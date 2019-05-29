set -e

# Deploy Project
git init
# git add README.md
git add .
git commit -m 'deploy project'
# git remote add origin https://github.com/mitsuoysharag/sddsad.git
git push -u origin master

# Deploy Page
npm run build
cd dist
git init
git add -A
git commit -m 'deploy page'
git push -f https://github.com/mitsuoysharag/UNMSM_SD_Pilar_de_Descanso.git  master:gh-pages

cd -