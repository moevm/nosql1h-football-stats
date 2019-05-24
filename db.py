from pymongo import MongoClient
import pprint

client = MongoClient()
db = client['NoSQL']
EPL = db["match"]

def getTeamDetails(teamName):
    result = EPL.aggregate([
        {"$match": {"$or": [{"AwayTeam": teamName}, {"HomeTeam": teamName}]}},
        {"$group": {
            "_id": "null",
            "Matches": {"$sum": 1},
            "AC": {"$sum": "$AC"},
            "AF": {"$sum": "$AF"},
            "AR": {"$sum": "$AR"},
            "AS": {"$sum": "$AS"},
            "AST": {"$sum": "$AST"},
            "AY": {"$sum": "$AY"},
            "FTAG": {"$sum": "$FTAG"},
            "FTHG": {"$sum": "$FTHG"},
            "FTR": {"$sum": "$FTR"},
            "HC": {"$sum": "$HC"},
            "HF": {"$sum": "$HF"},
            "HR": {"$sum": "$HR"},
            "HS": {"$sum": "$HS"},
            "HST": {"$sum": "$HST"},
            "HTAG": {"$sum": "$HTAG"},
            "HTHG": {"$sum": "$HTHG"},
            "HTR": {"$sum": "$HTR"},
            "HY": {"$sum": "$HY"},
        }
        }
    ])

    return result


def compareTwoTeams(teamA, teamB):
    result = EPL.find(
        {"$or": [
            {"$and": [{"AwayTeam": teamA}, {"HomeTeam": teamB}]},
            {"$and": [{"AwayTeam": teamB}, {"HomeTeam": teamA}]}
        ]},
        {"_id": 0}) \
        .sort("Date")
    return result

def findAllTeams():
	result = EPL.distinct("AwayTeam");
	return result
	
	

def getMatch(id):
	match = EPL.find()
	return match
	
def findMatchs(properties):
    print(properties)
    result = EPL.find(
        properties,
        {"_id": 0, "AwayTeam": 1, "HomeTeam": 1,"Date":1}) \
        .sort("Date")
    return result	

def getAll():
	result = EPL.find()
	return result
def getTeamResult(teamName):
    result = EPL.aggregate([
        {"$match": {"$or": [{"AwayTeam": teamName}, {"HomeTeam": teamName}]}},
        {"$group": {
            "_id": "null",
            "Matches": {"$sum": 1},
            "Win": {"$sum": {
                "$cond": [{"$or": [{"$and": [{"$eq": ["$FTR", "H"]}, {"$eq": ["$HomeTeam", teamName]}]},
                                   {"$and": [{"$eq": ["$FTR", "A"]}, {"$eq": ["$AwayTeam", teamName]}]}]}, 1, 0]
            }},
            "Draw": {"$sum": {
                "$cond": [{"$eq": ["$FTR", "D"]}, 1, 0]
            }},
            "Loss": {"$sum": {
                "$cond": [{"$or": [{"$and": [{"$eq": ["$FTR", "A"]}, {"$eq": ["$HomeTeam", teamName]}]},
                                   {"$and": [{"$eq": ["$FTR", "H"]}, {"$eq": ["$AwayTeam", teamName]}]}]}, 1, 0]
            }},
        }
        }
    ])
    return result
def numOfMeets(teamA, teamB):
    result = EPL.find(
    {"$and": [{"AwayTeam": teamA}, {"HomeTeam": teamB}]}).count()
    return result

def test(teams):
	result = EPL.aggregate([
	{ 
		"$match":{
			"HomeTeam":{"$in":  teams},
			"AwayTeam":{"$in":  teams}
		}
	},
	{
		"$group": {
                "_id": {
                "HomeTeam": "$HomeTeam",
                "AwayTeam": "$AwayTeam"
				},
                "Matches": {"$sum": 1}
            }
        }
	])
	return result
def test1():
	result = EPL.find(
	{
	"$match":{
		"HomeTeam":{"$in":  ["Arsenal","Hull"]},
		"AwayTeam":{"$in":  ["Arsenal","Hull"]}
	}
	})
	return result
def getNumOfMatches(teams):
    result = EPL.aggregate([
        {"$group": {
                "_id": {
                "HomeTeam": {"$in": [ "$HomeTeam", ["Arsenal","Hull"]]},
                "AwayTeam": {"$in": [ "$AwayTeam", ["Arsenal","Hull"]]}
                },
                "Matches": {"$sum": 1}
            }
        }
    ])
    return result

	
def tye1():
	ans = ["test1","test2","test3"]
	return ans	
def tye():
	ans = [{'_id': {'HomeTeam': 'test1', 'AwayTeam': 'test2'}, 'Matches': 10}, {'_id': {'HomeTeam': 'test1', 'AwayTeam': 'test3'}, 'Matches': 7}, {'_id': {'HomeTeam': 'test2', 'AwayTeam': 'test3'}, 'Matches': 13}]
	
	print (ans);
	return ans
	
def insertArr(arr):
	x = EPL.insert_many(arr)
	print(x.inserted_ids)
	
	
def Matchdetails(teamA,teamB,date):
	result = EPL.find(
		{
			"$and": [{"HomeTeam" : teamA},{"AwayTeam" : teamB}],
			"Date":date
		},
		{"_id":0})
		
	return result