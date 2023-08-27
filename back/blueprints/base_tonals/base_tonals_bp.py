from flask import Blueprint, request, jsonify
from config import Config
import os, glob
from datetime import datetime, timezone,timedelta

base_tonals_bp = Blueprint('base_tonals_bp', 
                    __name__)

@base_tonals_bp.route('/add_new_tonals', methods=['POST'])
def add_new_tonals():
    #!
    files_path = (os.path.dirname(os.getcwd()) + '/dpl/back/static/base_tonals/').replace('\\', '/')
    files = glob.glob(files_path+'*')
    for f in files:
        os.remove(f)

    files = request.files.getlist('files')
    print(files)
    files_links = []
    if files:
        for file in files:
            path = os.path.join(files_path, file.filename)
            files_links.append(Config.BASE_URL+path[28:])
            file.save(path)
    #! 


    # files = glob.glob(f'{Config.UPLOAD_FOLDER_BASE_TONALS}*')
    # for f in files:
    #     os.remove(f)
    
    # files = request.files.getlist('files')
    # print(files)
    # files_links = []
    # if files:
    #     for file in files:
    #         path = os.path.join(Config.UPLOAD_FOLDER_BASE_TONALS, file.filename)
    #         files_links.append(Config.BASE_URL+path[1:])
    #         file.save(path)

    return (jsonify(files_links, (datetime.now(timezone.utc)+timedelta(hours=10)).strftime("%m/%d/%Y, %H:%M:%S")), 200)