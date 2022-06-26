# INCEDO NodeJS REST API Coding Test

An application that searches for an artist by name and lists the results. If the artist is not found, it will return a random artist from stored data.

## Installation

To get started, follow these steps:

Create an account and get a free API Key at https://www.last.fm/api/account/create

Clone the repo:

```sh
$ git clone git@github.com:DMawi17/Node.js-REST-API-coding-test.git
$ cd Node.js-REST-API-coding-test
```

Install the dependencies:

```sh
$ yarn
```

Set the environment variables:

```sh
$ cp example.env .env
# open .env and modify the environment variables
```

## Environment Variables

```sh
API_KEY=#YOUR_API_KEY
PORT=#OPTIONAL
```

## Usage

Run the following command to start the project locally:

```sh
$ yarn start
```

Then head over to your browser and open http://localhost:8080/artist_name in your browser and replace the 'artist_name' with an artist name you choose to search.

The result will be returned to the browser, and a file 'user-supplied.csv' will be created in the root directory of the project.

## License

[MIT](LICENSE)
