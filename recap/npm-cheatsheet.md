    npm init

    npm init -y // accepts all the prompts

    -> initializes a package.json which will store the dependencies that are needed by the project, and the scripts that we can run

    npm install <package name>

    -> downloads the package from npm and installs it locally (in the local node_modules folder) and adds a dependency to the package.json

    npm install -g <package name>
    -> downloads and installs a package globally

    npm install
    -> download and installs all the packages referenced in the package.json (in the dependencies object)

    node <program name .js>
    -> runs the program

    nodemon <program name .js>
    -> runs the program and listens to the changes on the file so it restarts the program after every change
