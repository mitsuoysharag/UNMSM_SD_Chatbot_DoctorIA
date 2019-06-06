set -e

git init
# git add README.md
git add .
git commit -m 'deploy project'
# git remote rm origin
# git remote add origin https://github.com/mitsuoysharag/UNMSM_SD_Pilar_de_Descanso.git
git push -u origin master