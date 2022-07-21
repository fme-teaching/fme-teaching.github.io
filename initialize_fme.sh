git submodule add https://github.com/fme-teaching/fme-teaching.github.io.git public
git submodule update --init --recursive
git submodule foreach git checkout master
git submodule foreach git pull origin master 
#cd themes/academic/
#./add_remote.sh 
#cd ../..
#./add_remote.sh
