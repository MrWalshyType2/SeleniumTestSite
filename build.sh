# Build frontend
cd ./test_site_frontend
npm ./run build
cd ..

# Copy new build to backend static folder
rm -rf ./test_site_server/src/main/resources/static/*
cp ./test_site_frontend/build/* ./test_site_server/src/main/resources/static

# Build server JAR file
cd ./test_site_server
mvn clean package
cd ..
