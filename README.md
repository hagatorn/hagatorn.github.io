
#Hagatorn

- Static site for Hagatorn.com using [Jekyll] (http://jekyllrb.com)
- Hosted on [GitHub Pages] (https://pages.github.com)

Quite a lot of experimentation at with build tools and libs at this stage.  Expect to see some consolidation and standardisation as the project develops.

In order to work on this project you may need to run the following commands.

Setup Commands:

    bundle install //to get all dependencies ready.
    bourbon install // to make a local copy of the bourbon sass files
    neat install // to make a local copy of the bourbon neat sass files
    
n.b the bitters files are already in the repo as they are designed to be edited.

I think this all depends on nodejs too. Which may have to be the newest version.  Will add a note when I can confirm.

Site will than me available locally with:

    bundle exec jekyll serve  // I beleive simply jekyll serve may not truely reproduce the github env
    

and at github pages sit on:

    git push

If this gets more extensive I'll bundle into a launch.sh file.

Branching will be introduced once site has stablised.

Also node may need to be installed will check and spec

