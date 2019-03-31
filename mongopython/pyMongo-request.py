from pymongo import MongoClient
import pprint

client = MongoClient()
db = client['footballEPL']
EPL = db["footballEPL"]

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


def findTeam(properties):
    result = EPL.find(
        properties,
        {"_id": 0, "AwayTeam": 1, "HomeTeam": 1}) \
        .sort("Date")
    return result
