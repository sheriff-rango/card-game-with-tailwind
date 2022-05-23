# Uplift Interview

Welcome!

## Intro

This repository contains the Uplift coding challenge.
We believe in letting you work as freely as you want within the constraints of
this setup. Our goals are to assess:

- that you can follow specs/requirement docs, making pragmatic decisions along the way
- your level of expertise (mid-level=good approach, expert level=teach us something we don't know)

## Table of Contents

1. [Challenge criteria](#challenge-criteria)
1. [General instructions](#general-instructions)
1. [Frontend challenge](#frontend-challenge)
1. [Backend challenge](#backend-challenge)
1. [Backend challenge: node](#backend-challenge-node)
1. [License and sharing](#license-and-sharing)

## Evaluation criteria

- overall architecture and code quality (readability, decoupledness, etc)
- file structure
- naming (variables, files, etc)
- test coverage (see instructions for [running tests](#running-tests))
- proficiency at languages and libraries chosen for the task

If you wish to work full-stack, please attempt both frontend and backend in separate Pull Requests. Submit a PR first with your most comfortable or desired choice, so we can offer you feedback sooner.

## General instructions

- Please note there is a shared `.env` file for environment variables. This file is used by
  frontend and backend.
- Please lint and explain your code (even just briefly). CI runs checks, you can see them in `.github/workflows`
- After completing the challenge to a level that you're satisfied shows off your expertise,
  open a pull request against master (open two separate ones if you're doing frontend + backend)
- In your PR add a description explaining anything you think is worthwhile, summarizing
  your approach.
- The repo uses CI to run tests and lint checks on your PR. We'd like to see those passing.

## Frontend challenge

The task is to build a simple card game. The designs are in Figma, you can see [desktop](https://www.figma.com/file/TQSDNvCd0WJFhYQuwtUS8c/Interview-Card-Game?node-id=0%3A1) and [mobile](https://www.figma.com/file/TQSDNvCd0WJFhYQuwtUS8c/Interview-Card-Game?node-id=2%3A352) pages. The fonts should be available in Google Fonts, but we also included them in assets if they ever take them down (has happened before). It doesn't have to be pixel perfect, but it should look nice.

The program should perform the following functions.

1. Assuming a standard deck (52 cards of 4 suits: ♣ Clubs, ♦ Diamonds, ♥ Hearts, ♠ Spades).
2. Press a "Deal" button to deal 5 random cards.
3. Pressing the button again should deal 5 unique, random cards. Within the same game, you should never get the same cards again that you got in the past (just like a physical deck).
4. Add a card counter which shows how many cards are left.
5. Add an ace counter which shows how many aces are left. (this is not present in the designs at the time of this writing, you can do it the way it makes most sense to you, consistent with the designs)
6. Add a button to reset the game.
7. When all the aces have been dealt, "Game Over" should be displayed.
8. If there is an ace in the last draw and there are no more cards left to deal, display "Winner", otherwise display "You Lose. Better luck next time!" Last draw means the last draw that is allowed, as there could be additional cards left to deal, but no aces.
9. Bonus: Animations. Wow us!

Requirements:

- React
- Tailwind

Please write tests.

Feel free to use any additional libraries.

[Example implementation.](https://drive.google.com/file/d/1uIYhG-74wrWs7YZx6Zz9Bdn3WSEtaIWY/view?usp=sharing)

### Troubleshooting & Tips

If you have any issues with husky/commit hooks, you may remove the \*.py section of "lint-staged" in package.json

### Design

* [desktop](https://www.figma.com/file/TQSDNvCd0WJFhYQuwtUS8c/Interview-Card-Game?node-id=2%3A352)

* [mobile](https://www.figma.com/file/TQSDNvCd0WJFhYQuwtUS8c/Interview-Card-Game?node-id=2%3A352)

### Requirements

- Node 12+ (tested on 12.3.1)
- Yarn 1+ (tested on 1.16.0)

### Getting Started

    yarn install

Then:

    yarn start

Your browser will automatically open to http://localhost:3000 by Create React App. Changes should be reflected automatically.

See [CRA documentation](https://facebook.github.io/create-react-app/).

You are welcome to use Next.js instead, we just set up CRA for convenience.

## Backend challenge

**TL;DR (but please, read on): backend version of the frontend card game.**
Use Django (v3+), graphene (v2+), and a SQL database (postgres, for migrations).

Session, auth or login are all optional, but clean implementations earn points.

**Do NOT install additional python dependencies.** (e.g. a library that implements a deck)

1. Assuming a standard deck (52 cards of 4 suits: ♣ Clubs, ♦ Diamonds, ♥ Hearts, ♠ Spades).
2. GraphQL mutation to deal 5 unique, random cards (or fewer if there aren't 5 left).
   - Within the same game, you should never get the same cards again that you got in the past (just like a physical deck).
   - **Game is over when all Aces have been dealt.** If this happens in the final hand, the user Wins; otherwise, the user loses.
3. The GraphQL API should provide access to,
    - Remaining card count
    - Remaining Ace count
    - Game status
4. The GraphQL API should also provide a way to,
    - Start a new game
    - Deal a new hand
    - Reset the in-progress game
5. Display "Game Over" on completion. If the User wins, also display "Winner"; otherwise, display "You Lose. Better luck next time!"
6. Unit tests.
7. Bonuses:
   - Streak of wins/loses/games played in <period> (can be the last hour, but should be configurable)
   - Storing user details, login/out
   - Rig the game (e.g. player always wins)
   - Custom deck support (e.g. other deck images, other lengths of decks, not just 52 cards)

You can implement your own database architecture (models) and your own GraphQL schema. You do not have to copy the playground schema (mentioned below), although you can use it for inspiration.

You also don't need to implement authentication (although you are welcome to, if you prefer). You can fake it at the middleware level, or log in to the Django admin and send subsequent requests with the session information set by Django.

Feel free to use any additional libraries.

You can run a sample query at http://localhost:5000/graphql/

```graphql
query {
  me {
    username
    email
  }
}
```

### Getting started

On MacOS, use [brew](https://brew.sh/) to manage installation of supporting programs, as it keeps things tidy.

For backend, the recommended way is to use poetry and pyenv. All of the commands in this section are from the `server` folder.

You may also work in docker, using the provided `./docker-assist` and `docker-compose.yml`, but it's generally quicker to develop locally. See `docker/Docker.server/Dockerfile` for the docker setup, and note that poetry is set up to export to `requirements.txt`.

Install [poetry](https://python-poetry.org/). To manage python versions, we recommend installing [`pyenv`](https://github.com/pyenv/pyenv). See [the `poetry` documentation](https://python-poetry.org/docs/managing-environments/) for details.

Then install Python dependencies:

    cd server/
    # try one of these
    pyenv install 3.9.9  # or pyenv local 3.9.9
    poetry env use ~/.pyenv/versions/3.9.9/bin/python
    poetry install
    # or
    poetry install --python `which python3`

If you don't have it already, you'll also want to install Postgres. Version 10 or later should be fine.

If you have issues:

- Check which pyenv version homebrew installs https://github.com/Homebrew/homebrew-core/blob/master/Formula/pyenv.rb#L4
- See what versions of python that pyenv version supports: https://github.com/pyenv/pyenv/tree/v1.2.19/plugins/python-build/share/python-build

Copy example env vars to `.env`. You might need to change `DATABASE_URL` based on your environment.

    cp ../.env.example ../.env

Create the `uplifty` database:

    createdb uplifty

Load the sample user data:

    poetry run ./manage.py migrate
    poetry run ./manage.py loaddata uplifty/fixtures/users.json
    poetry run ./manage.py runserver 5000

Now you can go to http://localhost:5000, http://localhost:5000/graphql/, or http://localhost:5000/admin/ for the Django admin.

Log in to the admin with the [sample test user](#sample-test-user) from below and try the sample query from the challenge.

### Installing packages

```
poetry add <package name>  # this automatically adds it to pyproject.toml and poetry.lock
```

If you manually update `pyproject.toml`, make sure you run `poetry update` to update the lockfile.

### Running tests

Please run the tests, and lint your backend code. This helps us review code, as it's already consistent with this project.

```
yarn autoflake
yarn pytest:fresh
```

Or check out `package.json` for other options.

### Server architecture

- PostgreSQL 10+
- Python 3.9+
- Django 3
- [django-environ](https://github.com/joke2k/django-environ) for easy environment configuration via `.env` files

### Sample test user

The database is created with a sample test user:

| Name     | Value                   |
| -------- | ----------------------- |
| Username | interview               |
| Email    | interview@uplift.agency |
| Password | uplifty                 |

You can change these in the Django admin if you wish.

## Backend challenge: node

If you are working with node instead of Django, we'd like you to do the same backend challenge with TypeScript and GraphQL.

There is a starter server you can use in `node-server/`, and it runs CI using `.github/workflows/backend_node.yml`. Please make sure the build passes.

## License and sharing

This code is intended to be private. You are not allowed to share any of the base template code without Uplift's express permission. Please reach out to us **before** you share any of the code in this repository with others.

That said, we understand you may want to show others your work. If you're proud of your work on this exercise and want to share it with future companies or add to your portfolio, we kindly request you help us keep the codebase as private as possible. If it's easy for other candidates to find a good coding exercise submission, they will, and then we have to invest a bunch of time to change the requirements so that old examples cannot be used. Unfortunately we've had cases of applicants copying examples they found.
  
Here are some ideas to share this more privately. We would really appreciate if you followed them:

* Host the code privately and only give access to others upon request. This is the best way to ensure it's not easy to find.
* Share only a few of the files, but not enough to tie everything together.
* Host it on your own server, or bitbucket instead of github.
