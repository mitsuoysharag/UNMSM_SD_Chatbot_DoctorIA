set -e

# Deploy Project
git init
# git add README.md
git add .
git commit -m 'deploy project'
# git remote add origin https://github.com/mitsuoysharag/sddsad.git
git push -u origin master
