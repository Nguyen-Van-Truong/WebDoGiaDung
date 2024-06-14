# Stage 1: Build the application
FROM eclipse-temurin:17-jdk-alpine as build
WORKDIR /workspace/app

# Install dos2unix
RUN apk update && apk add dos2unix

# Copy the Gradle wrapper and the build files
COPY gradlew .
COPY gradlew.bat .
COPY gradle gradle
COPY build.gradle .
COPY settings.gradle .

# Copy the application source code
COPY src src

# Convert line endings to Unix format and ensure gradlew has execute permissions
RUN dos2unix gradlew && chmod +x gradlew

# Check if gradlew exists and can be executed
RUN ./gradlew --version

# Build the application and run tests
RUN ./gradlew clean build --no-daemon --info

# Debug: List files in build output directory to confirm JAR existence
RUN ls -l /workspace/app/build/libs/

# Stage 2: Create the final image
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Copy the built JAR file from the build stage
COPY --from=build /workspace/app/build/libs/*.jar /app/

# Verify that the JAR file exists and list all
RUN ls -l /app/

# Expose the application port
EXPOSE 8080

# Run the application using the specific JAR
ENTRYPOINT ["java","-jar","/app/demo-0.0.1-SNAPSHOT.jar"]
