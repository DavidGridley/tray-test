# Tray.io technical test

## Summary ##

This is a technical test for Tray.io. The task was to take a text file, stored in the same directory as the code, and use JavaScript to convert the text file into instructions for an automated hoover, such as a Roomba.

## Installation ##

- Fork and clone the repo.
- Run `npm install` to install dependencies.
- Run `node index.js` to execute the program.
- Run `npm test` to run the test suite.


## Evaluative Comments ##

- It was fun getting to learn how to read a local text file, I used [File System](https://nodejs.org/api/fs.html) to read the file. 

- I opted to use the asynchronous version of [File System's .readFile](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback) in order to better replicate server-side behaviour, and to avoid blocking with the syncronous version.

- Although asynchronous, .readFile is callback based, so I used [util.promisify](https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original) to convert .readFile into a function that returns a promise, and therefore more closely resembles an API call.

- I wanted to use some unit testing because the original brief indicated the use of a hardcoded input value, and I thought it would be best to show the handling of some different data values or edge cases. This caused problems initially as taking a function-based approach to this test and having the end result of the program just be a console.log() meant that there were no appropriate testing points. 

- To get around this, I simply included some arbitrary returns in each of the functions so that the tests could view the output of each function directly, rather then attempting to test for if the next function was called with the correct values.