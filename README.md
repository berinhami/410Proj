# Semester Project Proposal

For my semeter project, I will build an aplication where a user can create an account, log on, play a sudoku game, and have their progress saved when they log out. Each game will be auto-generated with a relation to a level of difficulty. The puzzle will also be able to be reset if the user desires, and each completed puzzel will grant points to the user. When the user reaches a certain amout of points they will increase in level. 

# DDD
## Events
- number added
- number deleted
- number modified
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

## Commands
- createPuzzle
- deletePuzzle
- addNumber
- deleteNumber
- modifyNumber
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
- email
- password
- sessionInfo
- level
- obtainedPoints

#### Puzzle
- puzzleId
- puzzleDifficulty
- setNumbers
- completed
- usersNumbers

## Value Object

# Rest Design
## Endpoints
--- 
| Description | URL Fragment | HTTP Method | Path Parameter | Representations |
| --- | --- | --- | --- | ---|
| Create Account | /accounts | POST
| Delete Account | /accounts/{userid} | DELETE | userid
| Log In | /accounts/{userid}/login | PUT | userid
| Log Out | /accouts/{userid}/logout | PUT | userid
| Add Number | /puzzle/{cellid} | POST | cellid
| Delete Number | /puzzle/{cellid} | DELETE | cellid
| Edit Number | /puzzle/{cellid} | PUT | cellid
| Get Number | /puzzle | GET
| Get Points | /accounts/{userid}/points | GET | userid
| Get Level | /accounts/{userid}/points | GET | userid
| Add Points | /accounts/{userid}/points | PUT | userid
| Add Level | /accounts/{userid}/points | PUT | userid

## Representations
