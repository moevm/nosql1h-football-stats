from app import app
from flask import render_template, session, request, redirect, url_for, abort, current_app, flash, jsonify, json
from app.main import db
from bson.json_util import dumps

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/teams')
def show_teams():
	teams = db.findAllTeams()
	return render_template('teams.html',teams = teams);
@app.route('/findmatch')
def find_match():
	return render_template('findmatch.html')
	
@app.route('/findmatch/find/', methods=['POST'])
def show_match():
	post_data = request.json
	result = dumps(db.findMatchs(post_data))
	print(result)
	return result
	
@app.route('/export/')
def export_json():
	result=dumps(db.getAll())
	return result
@app.route('/statteam/<teamname>/')
def show_stat_team(teamname):
	result = (db.getTeamDetails(teamname))
	print(result);
	return render_template('statteam.html',teamname = teamname, stats = result)