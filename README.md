# Selenium Test Site

This repository contains the source code for the Selenium test site.

Solutions for the exercises on the test site can be found [here](https://github.com/MrWalshyType2/SeleniumTestSiteSolutions)

## Technologies

Frontend:

- ReactJS

Backend:

- Spring

## Running and closing the release

Under the **Releases** section will be the latest release, an executable JAR file. This JAR file will launch a local web server on port 3000 which hosts the Selenium test site.

To run the supplied JAR file, ensure you have a Java Runtime Environment downloaded. Then simply double click the JAR file to run it.

Alternatively, run the following command in the same directory as the JAR file:

```sh
java -jar ./test_site.jar
```

- On Windows, replace forward slashes with backslashes in file paths

Once you have run the JAR file, the site will be accessible in your browser from `localhost:3000`.

### Closing the web server

If you used the `java` command from a console, simply press `CTRL C` to interrupt the process and stop the application.

If you double clicked the `jar` file, you will need to find the process ID of the web server and kill it with console commands:

#### Finding and killing a process on a port (Windows)

The `netstat` command can be used to find the process ID of the process on port 3000, the `taskkill` command is used to then kill that process using its process ID (PID):

```sh
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

- Replace `<PID>` with the process ID output from `netstat`

The `netstat` command above will output:

```
TCP    0.0.0.0:3000           0.0.0.0:0              LISTENING       18680
TCP    [::]:3000              [::]:0                 LISTENING       18680
```

The PID is the number on the far right, `18680` in this case.

#### Finding and killing a process on a port (Linux)

It is similar to Windows to kill a process, we must first find its process ID and then kill it using that process ID. The following command will achieve that:

```sh
kill -9 $(lsof -t -i:3000)
```

- `kill` stops the process on port `3000`, `-9` sends a `SIGKILL` signal which immediately ensures the process is stopped

- `lsof` is used to find the process ID

## Contribution guidelines

To contribute to this project, there are two main things to include in your pull request:

- A description with a purpose for the feature
- Modification to the frontend (adding the exercise)