set -e

git init
# git add README.md
git add .
git commit -m 'deploy project'
# git remote rm origin
# git remote add origin https://github.com/mitsuoysharag/UNMSM_SD_Chatbot_DoctorIA.git
# git pull origin master
git push -u origin master

# Get last commits
# ------------------------
# git pull origin master
# ------------------------
# git fetch --all
# git reset --hard origin/master