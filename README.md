# Semester Project Proposal

For my semeter project, I will build an aplication where a user can create an account, log on, play a sudoku game, and have their progress saved when they log out. Each game will be auto-generated with a relation to a level of difficulty. The puzzle will also be able to be reset if the user desires, and each completed puzzel will grant points to the user. When the user reaches a certain amout of points they will increase in level. 

# DDD
## Events
- start puzzle
- delete puzzle
- number added by user
- number deleted by user
- number modified by user
- user logged in 
- user logged out
- user account created
- user account deleted
- puzzle completed
- puzzle reset
- level updated
- points added
- puzzle created
- puzzle deleted
- puzzle modified
- puzzle submitted 

## Commands
- createPuzzle
- deletePuzzle
- modifyPuzzle
- checkPuzzle
- addUsersNumber
- deleteUsersNumber
- modifyUsersNumber
- logInUser
- LogOutUser
- createUser
- deleteUser
- pointsAdded
- levelIncreased

## Entities
#### Account
- userID
- name
- password
- sessionInfo
- level
- obtainedPoints

#### Puzzle
- puzzleId
- puzzleDifficulty
- originalNumbers
- completed
- userEnteredNumbers

## Value Object

# Rest Design
## Endpoints
--- 
| Description | URL Fragment | HTTP Method | Path Parameter | Representations |
| --- | --- | --- | --- | ---|
| Create Account | /accounts | POST | Create Account
| Delete Account | /accounts/{userid} | DELETE | userid
| Log In | /accounts/{userid}/login | PUT | userid | Account Login
| Log Out | /accouts/{userid}/logout | PUT | userid
| Create Puzzle | /puzzles{puzzleid} | POST | puzzleid | Create Puzzle
| Delete Puzzle | /puzzles{puzzleid} | DELETE | puzzleid
| Get Puzzle| /puzzles{puzzleid} | GET | puzzleid | Get Puzzle
| Add Number | /puzzles/{cellid} | POST | cellid | Set Number
| Delete Number | /puzzles/{puzzleid}/cells/{cellid} | DELETE | cellid
| Edit Number | /puzzles/{puzzleid}/cells/{cellid} | PUT | cellid | Set Number
| Get Number | /puzzles/{puzzleid}/cells/{cellid} | GET | Get Number
| Get Points | /accounts/{userid}/points | GET | userid | Get Points
| Get Level | /accounts/{userid}/points | GET | userid | Get Level
| Add Points | /accounts/{userid}/points | PUT | userid | Set Points
| Add Level | /accounts/{userid}/points | PUT | userid | Set Level

## Representations
### Create Account
{

    "username": "bingbong"
    "first name": "bing"
    "last name": "bong"
    "password": "goodPassword"

}

### Account Login
{
    
    "password": "goodPassword"

}

### Create Puzzle
{

    "puzzleDifficulty": "easy"
    "originalNumbers":
}

#### Get Puzzle
{

    "puzzleid": "1"
    "puzzleDifficulty": "easy"
    "originalNumbers":
    "userEnteredNumbers":
}

#### Set Number
{

    "puzzleid": "1"
    "cellid": "1"
    "userEnteredNumbers": "4"
}

#### Get Number
{

    "puzzleid": "1"
    "cellid": "1"
}

#### Get Points
{

    "userid": "1"
}

#### Set Points
{

    "userid": "1"
    "obtainedPoints": "10'
}

#### Get Level
{

    "userid": "1"
}

#### Set Level
{

    "userid": "1"
    "level": "1"
}
