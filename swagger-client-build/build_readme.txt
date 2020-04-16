java -jar swagger-codegen-cli-3.0.19.jar generate -l typescript-angular -c config.json -i api-docs.json -o angular-client2
or
java -jar swagger-codegen-cli-3.0.19.jar generate -l typescript-angular -c config.json -i http://localhost:9999/v2/api-docs -o angular-client

change typescript version in package.json to >=3.6.4 <3.9.0

npm install
npm run build


in project folder

npm install c:\Users\seacu\Downloads\temp\angular-client2\dist

add this line to angular.json
projects.$name.architect.build.options.preserveSymlinks: true