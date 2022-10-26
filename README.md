# FM Teaching Committee Website (sources)

Link to the live website: [FM Teaching Committee webpage](https://fme-teaching.github.io/)


## Instructions

### First time

 1. Clone this repository
 2. Run `hugo mod clean` followed by `hugo mod get -u ./...` 

Run `hugo` to test your copy. It has been tested with hugo version `0.92+extended`.

### After cloning
 0. If you want to make sure that you have the latest version, run `git pull`
 1. Do the required changes (e.g. edit the pages in `content/home`, add a new
    post, etc.)
 2. Test locally by running the script `view.sh` and pointing your browser to
    `http://localhost:1313`
 3. Once all the changes are done and you are happy with them, commit and push
    your changes.
 4. A GitHub Actions workflow will generate the new page and deploy it at [https://fme-teaching.github.io](https://fme-teaching.github.io/).
    You can see the status of the deployment in the Actions tab: [https://github.com/fme-teaching/fme-teaching.github.io/actions](https://github.com/fme-teaching/fme-teaching.github.io/actions)
